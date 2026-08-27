import React from 'react';
import { Shield, Target, BookOpen, Users, Award, Flame } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Capacitação profissional',
      desc: 'Formação técnica alinhada com as exigências operacionais e do mercado de trabalho.',
      icon: <Award className="w-5 h-5 text-brand-600" />,
    },
    {
      title: 'Conhecimento prático',
      desc: 'Metodologia baseada em simulações e vivência prática com equipamentos reais.',
      icon: <Target className="w-5 h-5 text-brand-600" />,
    },
    {
      title: 'Segurança e Prevenção',
      desc: 'Cultura preventiva para evitar sinistros, mitigar riscos e preservar vidas.',
      icon: <Shield className="w-5 h-5 text-brand-600" />,
    },
    {
      title: 'Atendimento a emergências',
      desc: 'Prontidão e agilidade técnica para agir com precisão quando cada segundo importa.',
      icon: <Flame className="w-5 h-5 text-brand-600" />,
    },
    {
      title: 'Preparação para o mercado',
      desc: 'Desenvolvimento de postura, raciocínio tático e habilidades valorizadas em equipes.',
      icon: <Users className="w-5 h-5 text-brand-600" />,
    },
    {
      title: 'Atualização contínua',
      desc: 'Conteúdos em constante alinhamento com normas regulamentadoras e protocolos de emergência.',
      icon: <BookOpen className="w-5 h-5 text-brand-600" />,
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Detalhe de fundo decorativo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/70 -skew-x-12 transform origin-top-right pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Imagem e Composição Institucional */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal animation="fade-right" delay={150}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                  <img
                    src="/images/primeiros-socorros.jpg"
                    alt="Instrução e capacitação prática em primeiros socorros e massagem cardíaca"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block px-3 py-1 bg-brand-600 text-xs font-bold uppercase rounded-md mb-2">
                      Nossa Missão
                    </div>
                    <p className="text-sm text-slate-200 font-medium leading-snug">
                      "Desenvolver habilidades práticas e a confiança necessária para que nossos alunos saibam agir com eficiência em situações críticas."
                    </p>
                  </div>
                </div>

                {/* Box de Destaque Institucional com Logo Oficial */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900 text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-slate-800 max-w-[290px] flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Barros Prevenção"
                    className="w-12 h-14 object-contain shrink-0 drop-shadow"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-brand-400 mb-0.5">
                      Barros Prevenção
                    </p>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Compromisso com vidas e capacitação operacional de excelência.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Lado Direito: Conteúdo Sobre Nós */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
                Quem Somos
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mt-3">
                Excelência e dedicação na formação para{' '}
                <span className="text-brand-600">emergências e prevenção</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-4">
                {companyInfo.description}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
                Compreendemos que em ocorrências reais não há margem para dúvidas. Por isso, nossa metodologia une o rigor dos protocolos técnicos à prática intensiva, capacitando desde pessoas que buscam uma nova profissão até empresas comprometidas com a integridade de seus colaboradores.
              </p>
            </ScrollReveal>

            {/* Grade de Pilares e Conceitos Destacados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, index) => (
                <ScrollReveal
                  key={index}
                  animation="fade-up"
                  delay={200 + index * 70}
                >
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-white shadow-xs border border-slate-200 shrink-0">
                        {pillar.icon}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-9">
                      {pillar.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Botão de ação */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="#cursos" variant="primary" size="md">
                  Ver Cursos Disponíveis
                </Button>
                <Button href="#contato" variant="outline" size="md">
                  Falar com a Barros Prevenção
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
