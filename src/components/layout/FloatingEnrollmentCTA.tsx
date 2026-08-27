import React, { useState, useEffect } from 'react';
import { ArrowRight, X, GraduationCap, Flame, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingEnrollmentCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe após rolar 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnrollmentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppEnrollment = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = getWhatsAppUrl('Olá! Gostaria de informações sobre vagas e como fazer minha matrícula na Barros Prevenção.');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  // Se minimizado, exibe botão pílula compacto com efeito pulsante
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 left-24 sm:left-24 z-40 animate-fade-in select-none">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold text-xs shadow-emergency hover:from-brand-500 hover:to-brand-600 hover:scale-105 transition-all cursor-pointer border border-brand-400/40"
          title="Abrir aviso de matrículas"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-90"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-amber"></span>
          </span>
          <GraduationCap className="w-4 h-4 text-white" />
          <span>Matrículas Abertas</span>
        </button>
      </div>
    );
  }

  return (
    <>
      {/* 1. Versão Desktop (Pílula Central Flutuante) */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slide-up select-none items-center">
        <div className="bg-slate-950/95 text-white pl-4 pr-3 py-2.5 rounded-full shadow-2xl border border-brand-500/60 backdrop-blur-md flex items-center gap-4 hover:border-brand-400 transition-all duration-300 group">
          {/* Indicador de Status com Ponto Pulsante */}
          <div className="flex items-center gap-2.5 pr-2 border-r border-slate-800">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-amber flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-accent-amber animate-pulse" />
                Matrículas Abertas 2026
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Unidade Penha • Vagas Limitadas
              </span>
            </div>
          </div>

          {/* Botão de Matrícula (Rola até o Formulário) */}
          <button
            onClick={handleEnrollmentClick}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-xs font-extrabold shadow-emergency hover:scale-105 active:scale-95 transition-all cursor-pointer tracking-wide"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Fazer Matrícula</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Botão de WhatsApp Rápido */}
          <button
            onClick={handleWhatsAppEnrollment}
            className="p-2 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
            title="Tirar dúvidas sobre matrícula no WhatsApp"
            aria-label="Fazer matrícula via WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          {/* Botão Minimizar */}
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-colors cursor-pointer ml-1"
            title="Minimizar aviso"
            aria-label="Fechar chamada flutuante"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Versão Mobile (Barra Fixa Inferior Inteligente) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-brand-600/40 px-4 py-2.5 shadow-2xl backdrop-blur-md animate-slide-up flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-90"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-amber"></span>
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-extrabold text-accent-amber uppercase tracking-wider truncate">
              Matrículas Abertas • Penha
            </span>
            <span className="text-[11px] text-slate-300 truncate">
              Garanta sua vaga hoje
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleEnrollmentClick}
            className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-brand-600 active:bg-brand-700 text-white text-xs font-bold shadow-xs cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Matricule-se</span>
          </button>

          <button
            onClick={handleWhatsAppEnrollment}
            className="p-2 rounded-lg bg-emerald-600 text-white cursor-pointer"
            aria-label="WhatsApp Matrícula"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            aria-label="Minimizar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};

