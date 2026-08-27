import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  // Parâmetros do SVG circular
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-16 sm:bottom-6 left-4 sm:left-6 z-40 p-2.5 rounded-full bg-slate-900/90 text-white shadow-xl hover:shadow-2xl border border-slate-700 hover:border-brand-500 hover:bg-slate-800 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group animate-fade-in backdrop-blur-md"
      aria-label="Voltar ao topo da página"
      title="Voltar ao início"
    >
      {/* SVG Circular de Progresso */}
      <svg className="w-11 h-11 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="text-slate-700/60"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="text-brand-500 transition-all duration-150"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>

      {/* Ícone de Seta para Cima */}
      <ArrowUp className="w-5 h-5 absolute text-slate-200 group-hover:text-brand-400 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};

