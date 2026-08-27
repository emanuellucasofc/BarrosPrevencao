import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Search } from 'lucide-react';
import { faqData } from '../../data/faq';
import { Button } from '../ui/Button';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaq = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com ScrollReveal */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
              Tire Suas Dúvidas
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Perguntas Frequentes (FAQ)
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Confira respostas rápidas para as principais dúvidas sobre nossos cursos, matrículas, certificados e treinamentos.
            </p>

            {/* Barra de Busca de Dúvidas */}
            <div className="max-w-md mx-auto relative pt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar pergunta ou palavra-chave..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-5" />
            </div>
          </div>
        </ScrollReveal>

        {/* Lista Acordeão */}
        <div className="space-y-3">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item, index) => {
              const isOpen = openItems.includes(item.id);
              return (
                <ScrollReveal
                  key={item.id}
                  animation="fade-up"
                  delay={Math.min(index * 70, 400)}
                >
                  <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all duration-200 hover:border-brand-200">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-brand-600 transition-colors cursor-pointer text-sm sm:text-base"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180 text-brand-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })
          ) : (
            <div className="text-center py-8 text-sm text-slate-500 bg-white rounded-xl border border-slate-200 p-6">
              Nenhuma pergunta encontrada com o termo "{searchQuery}".
            </div>
          )}
        </div>

        {/* Banner de Dúvida Não Respondida */}
        <ScrollReveal animation="zoom-in" delay={200}>
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-card-soft space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Ainda tem alguma dúvida específica?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Nossa equipe de atendimento está pronta para orientar você sobre turmas, documentação e programas corporativos.
            </p>
            <div className="pt-2">
              <Button
                href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre os cursos da Barros Prevenção que não encontrei no FAQ.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold"
                icon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
              >
                Falar com Atendimento no WhatsApp
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
