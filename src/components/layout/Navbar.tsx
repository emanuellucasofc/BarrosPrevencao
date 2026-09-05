import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Shield, Calculator, GraduationCap } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/companyInfo';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Identify active section (only on homepage)
      if (isHomePage) {
        const sections = ['inicio', 'cursos', 'sobre', 'diferenciais', 'empresas', 'faq', 'contato'];
        const scrollPosition = window.scrollY + 120;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const homeNavLinks = [
    { name: 'Início', href: '#inicio', id: 'inicio' },
    { name: 'Cursos', href: '#cursos', id: 'cursos' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Empresas', href: '#empresas', id: 'empresas' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top emergency announcement bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>Capacitação e Treinamento Profissional em Prevenção, Bombeiro Civil e APH</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
            {isHomePage ? (
              <a
                href="#empresas"
                onClick={(e) => handleNavClick(e, '#empresas')}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-accent-amber" />
                <span>Para Empresas & Equipes</span>
              </a>
            ) : (
              <Link
                to="/"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-accent-amber" />
                <span>Voltar ao Site Principal</span>
              </Link>
            )}
            <span className="text-slate-700">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 text-slate-300 transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>Atendimento via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            {isHomePage ? (
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, '#inicio')}
                className="focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg block"
                aria-label="Barros Prevenção - Voltar ao início"
              >
                <Logo size={isScrolled ? 'sm' : 'md'} />
              </a>
            ) : (
              <Link
                to="/"
                className="focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg block"
                aria-label="Barros Prevenção - Voltar ao início"
              >
                <Logo size={isScrolled ? 'sm' : 'md'} />
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5" aria-label="Navegação Principal">
            {isHomePage ? (
              <>
                {homeNavLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 relative ${
                        isActive
                          ? 'text-brand-600 font-bold bg-brand-50/70'
                          : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-600 rounded-full" />
                      )}
                    </a>
                  );
                })}
                {/* Link para Simulado de Questões */}
                <Link
                  to="/simulado"
                  className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 text-slate-700 hover:text-brand-600 hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <GraduationCap className="w-4 h-4 text-brand-600" />
                  Simulado
                </Link>
                {/* Link para Dimensionamento */}
                <Link
                  to="/simulador"
                  className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 text-brand-600 hover:bg-brand-50/70 flex items-center gap-1.5 border border-brand-200 bg-brand-50/40"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Dimensionamento
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                >
                  Início
                </Link>
                <Link
                  to="/#cursos"
                  className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                >
                  Cursos
                </Link>
                <Link
                  to="/#empresas"
                  className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                >
                  Empresas
                </Link>
                <Link
                  to="/#contato"
                  className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                >
                  Contato
                </Link>
                <span
                  className="px-3.5 py-2 text-sm font-bold rounded-md text-brand-600 bg-brand-50/70 flex items-center gap-1.5 relative"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Simulador
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-600 rounded-full" />
                </span>
              </>
            )}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            {isHomePage ? (
              <Button
                href="#contato"
                onClick={(e) => handleNavClick(e as any, '#contato')}
                variant="primary"
                size="md"
                className="hidden sm:inline-flex shadow-sm hover:shadow-emergency"
                icon={<Phone className="w-4 h-4" />}
              >
                Fale conosco
              </Button>
            ) : (
              <Button
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="hidden sm:inline-flex shadow-sm hover:shadow-emergency"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp
              </Button>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white shadow-xl animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1.5">
              {isHomePage ? (
                <>
                  {homeNavLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                          isActive
                            ? 'text-brand-600 bg-brand-50 border-l-4 border-brand-600'
                            : 'text-slate-800 hover:text-brand-600 hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                  <Link
                    to="/simulado"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-semibold rounded-lg transition-colors text-slate-800 hover:text-brand-600 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4 text-brand-600" />
                    Simulado de Questões
                  </Link>
                  <Link
                    to="/simulador"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-semibold rounded-lg transition-colors text-brand-600 bg-brand-50/60 border-l-4 border-brand-500 flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    Dimensionamento de Bombeiros
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-semibold rounded-lg transition-colors text-slate-800 hover:text-brand-600 hover:bg-slate-50"
                  >
                    ← Voltar ao Site
                  </Link>
                  <span
                    className="block px-4 py-3 text-base font-semibold rounded-lg text-brand-600 bg-brand-50 border-l-4 border-brand-600"
                  >
                    Simulador de Dimensionamento
                  </span>
                </>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                {isHomePage ? (
                  <Button
                    href="#contato"
                    onClick={(e) => handleNavClick(e as any, '#contato')}
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Phone className="w-5 h-5" />}
                  >
                    Fale conosco
                  </Button>
                ) : (
                  <Button
                    href="/"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Phone className="w-5 h-5" />}
                  >
                    Ir para Contato
                  </Button>
                )}

                <Button
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  fullWidth
                  icon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
                >
                  WhatsApp: {companyInfo.whatsapp}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
