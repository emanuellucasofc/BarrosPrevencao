import React from 'react';
import { ArrowRight, Phone, HeartPulse, Award, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero: React.FC = () => {
  const handleScrollToCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    const coursesSection = document.getElementById('cursos');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28"
    >
      {/* Elementos visuais de fundo: Grid sutil e gradientes de luz vermelha e âmbar */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent-amber/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto e Ações */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <ScrollReveal animation="fade-down" delay={100}>
              {/* Badge de Prontidão */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-700/60 text-brand-400 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span>Barros Prevenção • Unidade Penha / RJ</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              {/* Título Principal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Prepare-se para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-accent-amber">
                  salvar vidas.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Cursos e treinamentos profissionais em prevenção, emergência, primeiros socorros e Atendimento Pré-Hospitalar.
              </p>
            </ScrollReveal>

            {/* Botões de Ação */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  href="#cursos"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto text-base shadow-emergency"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Conheça nossos cursos
                </Button>

                <Button
                  href="#contato"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto text-base"
                  icon={<Phone className="w-5 h-5 text-brand-600" />}
                >
                  Fale conosco
                </Button>
              </div>
            </ScrollReveal>

            {/* Micro-diferenciais no Hero */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aulas Práticas</h4>
                    <p className="text-xs text-slate-400">Simulações de cenários reais</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Certificação</h4>
                    <p className="text-xs text-slate-400">Conforme normas vigentes</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">In Company</h4>
                    <p className="text-xs text-slate-400">Treinamentos para empresas</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna Visual: Composição Profissional com a Logo Oficial */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="zoom-in" delay={300} duration={800}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Moldura / Imagem Principal */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-800 group">
                  <img
                    src="/images/bombeiro-civil.jpg"
                    alt="Profissional de Bombeiro Civil em ação de combate a incêndio com extintor"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Legenda interna com Logo Oficial */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60">
                    <div className="flex items-center gap-3">
                      <img
                        src="/logo.png"
                        alt="Barros Prevenção Logo"
                        className="w-11 h-13 object-contain drop-shadow-md shrink-0"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">Barros Prevenção • Treinamento Oficial</p>
                        <p className="text-[11px] text-slate-300">Formação técnica com foco em agilidade e segurança</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Flutuante 1: APH & Primeiros Socorros */}
                <div className="absolute -top-6 -left-6 sm:-left-8 hidden sm:flex items-center gap-3 bg-white text-slate-900 p-3.5 rounded-xl shadow-xl border border-slate-200 animate-fade-in">
                  <div className="p-2.5 rounded-lg bg-red-100 text-brand-600">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">APH e Suporte à Vida</p>
                    <p className="text-[11px] text-slate-500">Técnicas essenciais de socorro</p>
                  </div>
                </div>

                {/* Card Flutuante 2: Formação Profissional */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 hidden sm:flex items-center gap-3 bg-slate-900 text-white p-3.5 rounded-xl shadow-2xl border border-slate-700">
                  <div className="p-2.5 rounded-lg bg-accent-amber/20 text-accent-amber">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Capacitação & Certificação</p>
                    <p className="text-[11px] text-slate-400">Preparado para agir</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Indicador Interativo de Rolagem para Baixo */}
        <div className="pt-12 sm:pt-16 flex justify-center">
          <ScrollReveal animation="fade-up" delay={600}>
            <a
              href="#cursos"
              onClick={handleScrollToCourses}
              className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 group cursor-pointer"
              aria-label="Rolar para os cursos"
            >
              <span className="text-xs font-medium tracking-wider uppercase group-hover:text-brand-400 transition-colors">
                Role para explorar
              </span>
              <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-brand-500 flex justify-center p-1.5 transition-colors">
                <div className="w-1 h-2 rounded-full bg-brand-500 animate-pulse-subtle" />
              </div>
              <ChevronDown className="w-4 h-4 text-brand-500 -mt-1 animate-bounce" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
