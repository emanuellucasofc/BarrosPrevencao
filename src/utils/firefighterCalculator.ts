import { SimulatorFormData, SimulatorResult, OccupationType, FireRiskLevel } from '../types';

/**
 * Motor de cálculo para dimensionamento de bombeiros civis.
 *
 * Referências técnicas (estimativas):
 * - IT-17 / CBMERJ — Brigada de Incêndio
 * - NT 17 / CBMSP — Brigada de Incêndio
 * - NBR 14608 — Bombeiro Civil
 * - Lei Federal 11.901/2009 — Bombeiro Civil
 *
 * AVISO: Este cálculo é uma estimativa orientativa.
 * O dimensionamento definitivo depende do Projeto Técnico
 * contra Incêndio e Pânico (PPCI/AVCB) de cada edificação.
 */

// --- Constantes de dimensionamento ---

/** Bombeiros por faixa de área (m²) por nível de risco */
const AREA_RATIOS: Record<FireRiskLevel, number> = {
  baixo: 1000, // 1 bombeiro a cada 1000 m²
  medio: 700,  // 1 bombeiro a cada 700 m²
  alto: 500,   // 1 bombeiro a cada 500 m²
};

/** Bombeiros por faixa de lotação (pessoas) por tipo de ocupação */
const CROWD_RATIOS: Record<OccupationType, number> = {
  evento: 250,      // 1 bombeiro a cada 250 pessoas (alta densidade, risco de pânico)
  industria: 400,   // 1 bombeiro a cada 400 funcionários
  shopping: 350,    // 1 bombeiro a cada 350 pessoas
  condominio: 500,  // 1 bombeiro a cada 500 moradores
  hospital: 300,    // 1 bombeiro a cada 300 pessoas (população vulnerável)
  escola: 350,      // 1 bombeiro a cada 350 pessoas
  outros: 400,      // padrão genérico
};

/** Multiplicador de risco */
const RISK_MULTIPLIERS: Record<FireRiskLevel, number> = {
  baixo: 1.0,
  medio: 1.3,
  alto: 1.6,
};

/** Turnos estimados por tipo de ocupação */
const TURNS_PER_DAY: Record<OccupationType, number> = {
  evento: 1,       // evento tem turno único
  industria: 2,    // operação 24h geralmente 2 turnos de 12h
  shopping: 2,     // 2 turnos
  condominio: 2,   // 2 turnos (diurno + noturno)
  hospital: 3,     // 3 turnos de 8h
  escola: 1,       // turno comercial
  outros: 2,       // padrão
};

/** Rótulos legíveis para cada tipo de ocupação */
const OCCUPATION_LABELS: Record<OccupationType, string> = {
  evento: 'Evento / Show / Feira',
  industria: 'Indústria / Galpão',
  shopping: 'Shopping / Comércio',
  condominio: 'Condomínio Residencial',
  hospital: 'Hospital / Clínica',
  escola: 'Escola / Universidade',
  outros: 'Outros',
};

/** Rótulos legíveis para cada nível de risco */
const RISK_LABELS: Record<FireRiskLevel, string> = {
  baixo: 'Baixo',
  medio: 'Médio',
  alto: 'Alto',
};

/**
 * Calcula o efetivo de bombeiros civis recomendado.
 * Retorna null se os campos essenciais não estiverem preenchidos.
 */
export function calculateFirefighterNeeds(data: SimulatorFormData): SimulatorResult | null {
  const { occupationType, areaM2, estimatedCrowd, fireRisk } = data;

  // Validação de campos obrigatórios
  if (!occupationType || !fireRisk || areaM2 <= 0 || estimatedCrowd <= 0) {
    return null;
  }

  // 1. Cálculo por área
  const areaRatio = AREA_RATIOS[fireRisk];
  const byArea = Math.ceil(areaM2 / areaRatio);

  // 2. Cálculo por lotação
  const crowdRatio = CROWD_RATIOS[occupationType];
  const byCrowd = Math.ceil(estimatedCrowd / crowdRatio);

  // 3. Maior valor entre os dois critérios
  const baseCount = Math.max(byArea, byCrowd);

  // 4. Aplicar multiplicador de risco
  const riskMultiplier = RISK_MULTIPLIERS[fireRisk];
  const adjusted = Math.ceil(baseCount * riskMultiplier);

  // 5. Mínimo absoluto: 2 bombeiros (cobertura mútua conforme NBR 14608)
  const minFirefighters = Math.max(2, adjusted);

  // 6. Turnos e total diário
  const turnsPerDay = TURNS_PER_DAY[occupationType];
  const totalPerDay = minFirefighters * turnsPerDay;

  // 7. Montar recomendação textual
  const occupationLabel = OCCUPATION_LABELS[occupationType];
  const riskLabel = RISK_LABELS[fireRisk];
  const areaFormatted = areaM2.toLocaleString('pt-BR');
  const crowdFormatted = estimatedCrowd.toLocaleString('pt-BR');

  const recommendation =
    minFirefighters <= 3
      ? `Para um(a) ${occupationLabel.toLowerCase()} com ${areaFormatted} m² e até ${crowdFormatted} pessoas, recomendamos uma equipe enxuta mas qualificada.`
      : minFirefighters <= 6
        ? `O porte da sua operação demanda uma equipe técnica robusta para garantir a cobertura e o tempo de resposta adequados.`
        : `A combinação de área, público e nível de risco indica a necessidade de uma equipe ampla para cumprir os padrões normativos de segurança.`;

  const details: string[] = [
    `Tipo de ocupação: ${occupationLabel}`,
    `Área total: ${areaFormatted} m²`,
    `Público estimado: ${crowdFormatted} pessoas`,
    `Nível de risco: ${riskLabel}`,
    `Cálculo por área: ${byArea} bombeiro(s) (1 a cada ${areaRatio} m²)`,
    `Cálculo por lotação: ${byCrowd} bombeiro(s) (1 a cada ${crowdRatio} pessoas)`,
    `Multiplicador de risco (${riskLabel}): ×${riskMultiplier}`,
    turnsPerDay > 1
      ? `Regime de turnos: ${turnsPerDay} turnos/dia`
      : `Regime de turno único (evento)`,
  ];

  return {
    minFirefighters,
    turnsPerDay,
    totalPerDay,
    recommendation,
    details,
  };
}

/**
 * Gera a mensagem formatada para enviar via WhatsApp
 * com os dados do formulário e o resultado da simulação.
 */
export function formatSimulatorWhatsAppMessage(
  data: SimulatorFormData,
  result: SimulatorResult
): string {
  const occupationLabel = data.occupationType ? OCCUPATION_LABELS[data.occupationType] : '—';
  const riskLabel = data.fireRisk ? RISK_LABELS[data.fireRisk] : '—';

  return `*🔥 Simulação de Dimensionamento — Barros Prevenção*

*Dados da Simulação:*
• Tipo: ${occupationLabel}
• Área: ${data.areaM2.toLocaleString('pt-BR')} m²
• Público: ${data.estimatedCrowd.toLocaleString('pt-BR')} pessoas
• Risco: ${riskLabel}

*Resultado:*
• Efetivo por turno: *${result.minFirefighters} Bombeiro(s) Civil(is)*
• Turnos/dia: ${result.turnsPerDay}
• Total diário: ${result.totalPerDay} profissional(is)

*Contato:*
• Nome: ${data.contactName}
• Empresa: ${data.contactCompany}
• WhatsApp: ${data.contactWhatsApp}

Gostaria de receber um orçamento personalizado com base nessa simulação.`;
}
