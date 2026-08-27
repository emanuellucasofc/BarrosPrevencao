import React from 'react';
import { GraduationCap, Activity, ShieldCheck, Award, Briefcase, CheckCircle } from 'lucide-react';
import { benefitsData } from '../../data/benefits';
import { ScrollReveal } from '../ui/ScrollReveal';

export const BenefitsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-brand-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-brand-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-brand-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-brand-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com ScrollReveal */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
              Nossos Pilares
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Por que escolher a Barros Prevenção?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Formação sólida e responsável para quem busca não apenas um certificado, mas a real competência para atuar em situações de alto risco e salvar vidas.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Diferenciais com Animação em Cascata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefitsData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={(index % 3) * 120}
              className="h-full"
            >
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                  index === 0
                    ? 'bg-gradient-to-br from-slate-950 to-slate-900 text-white border-slate-800 shadow-xl'
                    : 'bg-slate-50/80 hover:bg-white text-slate-900 border-slate-200/90 hover:border-brand-200 shadow-card-soft hover:shadow-card-hover'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl ${
                        index === 0
                          ? 'bg-brand-600 text-white'
                          : 'bg-white shadow-xs border border-slate-200 text-brand-600'
                      }`}
                    >
                      {getIcon(item.iconName)}
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          index === 0
                            ? 'bg-slate-800 text-brand-300 border border-slate-700'
                            : 'bg-brand-50 text-brand-700 border border-brand-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 ${
                      index === 0 ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      index === 0 ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t text-xs font-semibold flex items-center gap-1.5 ${
                    index === 0
                      ? 'border-slate-800 text-brand-400'
                      : 'border-slate-200/80 text-brand-600'
                  }`}
                >
                  <span>Metodologia Barros Prevenção</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Card de Chamada Final */}
          <ScrollReveal animation="zoom-in" delay={250} className="h-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white shadow-emergency flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white inline-block mb-6">
                  Prontidão Total
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Pronto para dar o próximo passo?
                </h3>
                <p className="text-sm text-brand-50 leading-relaxed">
                  Garanta sua vaga na próxima turma ou traga o treinamento da Barros Prevenção para a sua empresa.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-white text-brand-700 font-bold text-sm hover:bg-brand-50 transition-colors shadow-sm"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
