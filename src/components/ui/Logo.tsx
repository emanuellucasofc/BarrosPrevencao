import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const imageSizes = {
    sm: 'h-10 w-auto',
    md: 'h-12 sm:h-14 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-24 sm:h-28 w-auto',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Imagem Oficial da Logo Barros Prevenção */}
      <img
        src="/logo.png"
        alt="Barros Prevenção - Cursos e Treinamentos"
        className={`${imageSizes[size]} object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105`}
        loading="eager"
      />

      {/* Tipografia da Marca com Vermelho e Preto/Branco */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={`font-extrabold uppercase font-sans tracking-tight ${titleSizes[size]} ${
                isLight ? 'text-white' : 'text-slate-950'
              }`}
            >
              BARROS
            </span>
            <span
              className={`font-black uppercase font-sans tracking-tight ${titleSizes[size]} text-brand-600`}
            >
              PREVENÇÃO
            </span>
          </div>
          <span
            className={`font-bold uppercase tracking-wider mt-1 leading-none ${subtitleSizes[size]} ${
              isLight ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Treinamento & Emergência
          </span>
        </div>
      )}
    </div>
  );
};
