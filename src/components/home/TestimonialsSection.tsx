import React from 'react';
import { Quote, MessageSquare, Info } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { ScrollReveal } from '../ui/ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-brand-600" />
              Experiência do Aluno
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              O que nossos alunos dizem
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Acompanhe relatos sobre a vivência prática, o preparo técnico dos instrutores e a transformação profissional proporcionada pela Barros Prevenção.
            </p>
          </div>
        </ScrollReveal>

        {/* Aviso transparente de estrutura preparada */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="max-w-2xl mx-auto mb-10 p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-center gap-3">
            <Info className="w-4 h-4 text-accent-amber shrink-0" />
            <p>
              <strong>Área em Estruturação:</strong> Os cards abaixo são modelos de exibição preparados para receber os depoimentos e avaliações reais das próximas turmas e empresas capacitadas.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Depoimentos com Cascata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={index * 150}
              className="h-full"
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-card-soft flex flex-col justify-between relative hover:border-brand-200 transition-colors h-full">
                <div>
                  {/* Ícone de Aspas */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-brand-600 w-fit mb-4 shadow-xs">
                    <Quote className="w-5 h-5" />
                  </div>

                  {/* Badge do Curso Referente */}
                  <span className="inline-block text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-200/70 px-2.5 py-0.5 rounded-md mb-3">
                    {item.courseName}
                  </span>

                  {/* Texto / Citação */}
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                {/* Autor */}
                <div className="pt-5 mt-6 border-t border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-xs">
                    <img src="/logo.png" alt="Barros Prevenção" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-mono">
                      {item.authorLabel}
                    </h4>
                    <span className="text-[11px] text-slate-500 block">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
