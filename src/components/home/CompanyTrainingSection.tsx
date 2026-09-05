import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Clock,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  HardHat,
  Zap,
  Fuel,
  Box,
  Mountain,
  Award,
  Calculator
} from 'lucide-react';
import { Button } from '../ui/Button';
import { getCompanyTrainingWhatsAppUrl } from '../../utils/whatsapp';
import { ScrollReveal } from '../ui/ScrollReveal';

interface CompanyTrainingSectionProps {
  onSelectForCompanyTraining: () => void;
}

export const CompanyTrainingSection: React.FC<CompanyTrainingSectionProps> = ({
  onSelectForCompanyTraining,
}) => {
  const nrList = [
    { code: 'NR 6', title: 'Equipamento de Proteção Individual (EPI)', icon: <HardHat className="w-4 h-4 text-amber-400" /> },
    { code: 'NR 10', title: 'Segurança em Instalações e Serviços em Eletricidade', icon: <Zap className="w-4 h-4 text-amber-400" /> },
    { code: 'NR 20', title: 'Segurança e Saúde com Inflamáveis e Combustíveis', icon: <Fuel className="w-4 h-4 text-amber-400" /> },
    { code: 'NR 33', title: 'Segurança e Saúde nos Trabalhos em Espaços Confinados', icon: <Box className="w-4 h-4 text-amber-400" /> },
    { code: 'NR 35', title: 'Trabalho em Altura e Proteção Contra Quedas', icon: <Mountain className="w-4 h-4 text-amber-400" /> },
  ];

  const corporateHighlights = [
    {
      icon: <Building2 className="w-5 h-5 text-brand-600" />,
      title: 'Treinamentos In Company',
      description: 'Capacitamos seus colaboradores dentro das instalações da sua própria empresa, utilizando os equipamentos e rotas reais do seu ambiente de trabalho.',
    },
    {
      icon: <Award className="w-5 h-5 text-brand-600" />,
      title: 'Capacitações em NRs do MTE',
      description: 'Cursos completos e reciclagens obrigatórias em NR 6, NR 10, NR 20, NR 33 e NR 35 para conformidade técnica e jurídica.',
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-600" />,
      title: 'Carga Horária e Turnos Flexíveis',
      description: 'Adequamos a realização das aulas aos turnos e escalas de trabalho da sua equipe, minimizando qualquer impacto na rotina operacional.',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-brand-600" />,
      title: 'Laudos e Certificados com Registro',
      description: 'Emissão de certificados individuais e relatórios técnicos comprobatórios para atendimento à fiscalização do trabalho e Corpo de Bombeiros.',
    },
  ];

  return (
    <section id="empresas" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna de Informações e Textos */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                Soluções Corporativas & Normas Regulamentadoras
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mt-3">
                Capacite sua equipe com a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-amber">
                  Barros Prevenção
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-4">
                Oferecemos programas completos de capacitação empresarial e <strong>treinamentos obrigatórios em Normas Regulamentadoras (NRs)</strong> para empresas de todos os portes. Nossos instrutores qualificam sua equipe para prevenir acidentes, atuar em primeiros socorros e responder com agilidade a emergências operacionais.
              </p>
            </ScrollReveal>

            {/* Bloco Destaque: Normas Regulamentadoras para Empresas */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-800/80 border border-slate-700/80">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">
                    Treinamentos de NRs Disponibilizados para Equipes:
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {nrList.map((nr) => (
                    <div
                      key={nr.code}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-xs"
                    >
                      <div className="p-1 rounded bg-slate-800 shrink-0">
                        {nr.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="font-extrabold text-white">{nr.code}:</span>{' '}
                        <span className="text-slate-300 truncate">{nr.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Grid dos 4 destaques corporativos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {corporateHighlights.map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  animation="fade-up"
                  delay={200 + idx * 70}
                >
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-brand-600/60 transition-colors h-full">
                    <div className="p-2 rounded-lg bg-brand-950/80 border border-brand-800/80 w-fit mb-2.5">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Ações */}
            <ScrollReveal animation="fade-up" delay={450}>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  onClick={onSelectForCompanyTraining}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Solicitar proposta para minha empresa
                </Button>

                <Button
                  href={getCompanyTrainingWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto text-slate-950"
                  icon={<MessageSquare className="w-5 h-5 text-emerald-600" />}
                >
                  Falar com Atendimento Corporativo
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna Visual: Card de Proposta Comercial Rápida */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
                <div className="inline-block px-3 py-1 bg-accent-amber/20 text-accent-amber border border-accent-amber/40 text-xs font-bold uppercase rounded-md mb-4">
                  Propostas Corporativas Sob Medida
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Treinamentos In Company & na Unidade Penha
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Elaboramos o cronograma e conteúdo de acordo com o grau de risco, número de funcionários e horários de funcionamento da sua empresa.
                </p>

                <div className="space-y-3 text-xs text-slate-300 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Capacitações em NRs: NR 6, NR 10, NR 20, NR 33 e NR 35</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Formação e Reciclagem de Brigada de Incêndio</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Primeiros Socorros no Trabalho e Atendimento à Lei Lucas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Exercícios Simulados de Evacuação Predial e Abandono</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Certificados e Laudos Técnicos com validade legal</span>
                  </div>
                </div>

                {/* Informações de Orçamento */}
                <div className="pt-5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase font-medium">Orçamento Corporativo:</span>
                    <span className="text-sm font-bold text-brand-400">[SOLICITAR PROPOSTA SOB MEDIDA]</span>
                  </div>
                  <Button
                    onClick={onSelectForCompanyTraining}
                    variant="outline"
                    size="sm"
                    className="border-brand-500 text-brand-400 hover:bg-brand-950"
                  >
                    Pedir Cotação
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Banner do Simulador de Dimensionamento */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 border border-slate-700/60 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-600/20 border border-brand-500/30">
                  <Calculator className="w-8 h-8 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white">
                    Quantos Bombeiros Civis sua empresa precisa?
                  </h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    Use nosso simulador gratuito e descubra o efetivo ideal para sua operação.
                  </p>
                </div>
              </div>
              <Link
                to="/simulador"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold shadow-emergency hover:shadow-emergency-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
              >
                <span>Simular Agora</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
