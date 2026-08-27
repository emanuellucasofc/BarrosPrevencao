import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { companyInfo } from '../../data/companyInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 select-none group">
      {/* Tooltip informativo */}
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 animate-slide-up flex items-center gap-2 max-w-[220px]">
          <span>Fale conosco pelo <strong>WhatsApp</strong>!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 p-0.5 rounded transition-colors cursor-pointer"
            aria-label="Fechar dica do WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Seta do balão */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45" />
        </div>
      )}

      {/* Botão de Ação Flutuante */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
        aria-label={`Conversar no WhatsApp (${companyInfo.whatsapp})`}
      >
        {/* Anel pulsante */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        
        {/* Ícone */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
};
