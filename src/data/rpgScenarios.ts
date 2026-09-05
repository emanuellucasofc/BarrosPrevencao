export type RpgIconType = 'flame' | 'server' | 'zap' | 'users' | 'alert-triangle' | 'door-open' | 'biohazard' | 'skull';

export interface RPGChoice {
  text: string;
  isSuccess: boolean;
  feedbackText: string;
  integrityChange: number;
  dangerChange: number;
  nextScenarioId: string | null;
  endGameState?: 'victory' | 'game-over';
}

export interface RPGScenario {
  id: string;
  title: string;
  description: string;
  icon: RpgIconType;
  choices: RPGChoice[];
}

export const rpgScenarios: RPGScenario[] = [
  {
    id: 's1_cpd',
    title: 'Alarme no CPD',
    description: 'O alarme de incêndio da sala do servidor (CPD) disparou no 4º andar. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado. Você é o Bombeiro Civil de plantão.',
    icon: 'server',
    choices: [
      {
        text: 'Usar Extintor de Água e abrir a porta imediatamente.',
        isSuccess: false,
        feedbackText: 'FALHA CRÍTICA! Você usou Água em um princípio de incêndio Classe C (equipamentos energizados). Ocorreu um curto-circuito severo que o arremessou para trás. O fogo se alastrou rapidamente.',
        integrityChange: -40,
        dangerChange: +50,
        nextScenarioId: 's2_corredor'
      },
      {
        text: 'Desligar a energia geral do andar e pegar o Extintor de CO2.',
        isSuccess: true,
        feedbackText: 'EXCELENTE! Você isolou o risco elétrico primeiro e escolheu o agente extintor correto para proteger os servidores. Você conteve as chamas iniciais de forma segura.',
        integrityChange: 0,
        dangerChange: -20,
        nextScenarioId: 's2_corredor'
      },
      {
        text: 'Acionar o rádio solicitando apoio do CBMERJ imediatamente e aguardar.',
        isSuccess: false,
        feedbackText: 'MÁ DECISÃO! É correto pedir apoio, mas aguardar sem realizar a primeira intervenção permitiu que o fogo tomasse o andar inteiro.',
        integrityChange: 0,
        dangerChange: +60,
        nextScenarioId: 's2_corredor'
      }
    ]
  },
  {
    id: 's2_corredor',
    title: 'Abandono de Área',
    description: 'Ao sair do CPD, o corredor está tomado pela fumaça densa e tóxica. Você ouve gritos vindo do refeitório. A rota de fuga principal está parcialmente bloqueada por móveis.',
    icon: 'flame',
    choices: [
      {
        text: 'Colocar Máscara Autônoma (EPR), abaixar-se e ir até o refeitório.',
        isSuccess: true,
        feedbackText: 'AÇÃO TÁTICA! A fumaça concentra gases tóxicos na parte alta. Rastejando e usando EPR, você conseguiu chegar às vítimas sem inalar CO.',
        integrityChange: 0,
        dangerChange: -10,
        nextScenarioId: 's3_salvamento'
      },
      {
        text: 'Correr em pé rapidamente pelo corredor para chegar mais rápido.',
        isSuccess: false,
        feedbackText: 'ERRO GRAVE! Ao correr em pé, você inalou grande quantidade de fumaça e gases aquecidos, sofrendo queimaduras nas vias aéreas e perdendo fôlego.',
        integrityChange: -50,
        dangerChange: +20,
        nextScenarioId: 's3_salvamento'
      },
      {
        text: 'Gritar para que eles tentem quebrar a janela e pular.',
        isSuccess: false,
        feedbackText: 'PROCEDIMENTO INADEQUADO! Gerou pânico generalizado e risco de morte por queda. O seu papel é liderar a evacuação de forma segura.',
        integrityChange: 0,
        dangerChange: +40,
        nextScenarioId: 's3_salvamento'
      }
    ]
  },
  {
    id: 's3_salvamento',
    title: 'Resgate Crítico',
    description: 'No refeitório, você encontra dois funcionários. Um deles inalou muita fumaça e está inconsciente. A temperatura ambiente está subindo rapidamente. É preciso evacuar agora.',
    icon: 'users',
    choices: [
      {
        text: 'Tentar reanimar a vítima com RCP ali mesmo no meio da fumaça.',
        isSuccess: false,
        feedbackText: 'ERRO TÁTICO! A cena não é segura. Fazer RCP em um ambiente hostil e em chamas coloca você e as vítimas em perigo letal.',
        integrityChange: -30,
        dangerChange: +30,
        nextScenarioId: null,
        endGameState: 'game-over'
      },
      {
        text: 'Usar técnica de extração rápida (Chave de Raute) para retirá-lo e guiar o outro pela escada.',
        isSuccess: true,
        feedbackText: 'SALVAMENTO HEROICO! Você retirou a vítima inconsciente utilizando a técnica correta de arrasto de emergência, evacuando todos pela rota segura antes que o teto desabasse.',
        integrityChange: 0,
        dangerChange: -30,
        nextScenarioId: null,
        endGameState: 'victory'
      },
      {
        text: 'Pegar a vítima no colo correndo em direção aos elevadores.',
        isSuccess: false,
        feedbackText: 'FALHA FATAL! NUNCA use elevadores em caso de incêndio (eles podem travar, fazer efeito chaminé ou ter os cabos rompidos). Vocês ficaram presos.',
        integrityChange: -100,
        dangerChange: +100,
        nextScenarioId: null,
        endGameState: 'game-over'
      }
    ]
  }
];
