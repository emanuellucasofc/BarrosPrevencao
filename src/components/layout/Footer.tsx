import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, FileText, ExternalLink, GraduationCap } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { Logo } from '../ui/Logo';
import { companyInfo } from '../../data/companyInfo';
import { coursesData } from '../../data/courses';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { Modal } from '../ui/Modal';

interface FooterProps {
  onSelectCourse?: (courseId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCourse }) => {
  const [legalModalContent, setLegalModalContent] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
  }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const openPrivacyPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalContent({
      isOpen: true,
      title: 'Política de Privacidade',
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            A <strong>Barros Prevenção</strong> preza pela total segurança e privacidade dos dados de seus alunos, clientes e visitantes.
          </p>
          <h4 className="font-bold text-slate-900">1. Coleta de Dados</h4>
          <p>
            As informações fornecidas através de nossos formulários de contato e inscrição (como nome, e-mail, telefone e interesse em cursos) são utilizadas exclusivamente para retorno de solicitações comerciais, esclarecimento de dúvidas sobre cursos e formalização de matrículas e treinamentos.
          </p>
          <h4 className="font-bold text-slate-900">2. Uso e Proteção</h4>
          <p>
            Não vendemos nem compartilhamos seus dados cadastrais com terceiros para fins publicitários não relacionados às atividades da Barros Prevenção. Adotamos medidas de segurança adequadas para proteção contra acesso não autorizado.
          </p>
          <h4 className="font-bold text-slate-900">3. Seus Direitos (LGPD)</h4>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a atualização, confirmação ou remoção de seus dados de nossa base de contato a qualquer momento entrando em contato pelo e-mail institucional: <span className="font-semibold text-brand-600">{companyInfo.email}</span>.
          </p>
        </div>
      ),
    });
  };

  const openTermsOfUse = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalContent({
      isOpen: true,
      title: 'Termos de Uso',
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            Bem-vindo ao portal da <strong>Barros Prevenção</strong>. Ao navegar por este site institucional, você concorda com as diretrizes e termos descritos abaixo.
          </p>
          <h4 className="font-bold text-slate-900">1. Conteúdo Informativo</h4>
          <p>
            Todas as informações sobre cursos, ementas, cargas horárias e orientações de segurança têm caráter informativo sobre os serviços de capacitação prestados pela Barros Prevenção em nossa sede na Penha (Rua Nicarágua, 186) e in company.
          </p>
          <h4 className="font-bold text-slate-900">2. Inscrições e Certificações</h4>
          <p>
            A efetivação de matrículas, emissão de certificados e realização das aulas práticas estão sujeitas à confirmação de vagas, quitação de valores vigentes e cumprimento integral das cargas horárias e avaliações exigidas pelas normas de cada modalidade de curso.
          </p>
          <h4 className="font-bold text-slate-900">3. Propriedade Intelectual</h4>
          <p>
            A marca, identidade visual, textos institucionais e materiais didáticos da Barros Prevenção são protegidos por direitos autorais, sendo vedada a reprodução sem autorização prévia.
          </p>
        </div>
      ),
    });
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Nicar%C3%A1gua+186+Penha+Rio+de+Janeiro+RJ";

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            {/* Coluna 1: Marca & Propósito */}
            <div className="space-y-4">
              <Logo variant="light" size="md" />
              <p className="text-sm text-slate-400 leading-relaxed pt-2">
                {companyInfo.slogan}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capacitação especializada em Bombeiro Civil, APH, Primeiros Socorros e Treinamentos Corporativos de Emergência.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={companyInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white transition-colors border border-slate-800"
                  aria-label="Instagram da Barros Prevenção (@barrosvig767)"
                  title="@barrosvig767"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white transition-colors border border-slate-800"
                  aria-label="WhatsApp da Barros Prevenção ((21) 99375-1603)"
                  title="(21) 99375-1603"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                Navegação Rápida
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    Início
                  </a>
                </li>
                <li>
                  <a href="#cursos" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    Nossos Cursos
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    Por que Escolher
                  </a>
                </li>
                <li>
                  <a href="#empresas" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    Treinamento para Empresas
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    Perguntas Frequentes (FAQ)
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    Contato e Inscrições
                  </a>
                </li>
                <li className="pt-2 border-t border-slate-800 mt-2">
                  <Link to="/simulado" className="hover:text-brand-400 transition-colors flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-500" />
                    Simulado de Prova (Quiz)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Cursos Principais */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                Cursos & Capacitações
              </h3>
              <ul className="space-y-2.5 text-sm">
                {coursesData.map((course) => (
                  <li key={course.id}>
                    <button
                      onClick={() => onSelectCourse && onSelectCourse(course.id)}
                      className="text-left text-slate-300 hover:text-brand-400 transition-colors flex items-start gap-1.5 cursor-pointer group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-400 shrink-0 mt-0.5" />
                      <span>{course.shortTitle}</span>
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#empresas"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-amber hover:text-amber-300 underline"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    Treinamentos In Company para Equipes
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Informações de Contato Oficiais */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                Atendimento Oficial
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                {/* Telefones / WhatsApp */}
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">Telefones / WhatsApp:</span>
                    <div className="space-y-1 mt-0.5">
                      <a
                        href={getWhatsAppUrl(undefined, false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-mono block"
                      >
                        {companyInfo.whatsapp} (Principal)
                      </a>
                      <a
                        href={getWhatsAppUrl(undefined, true)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-mono block"
                      >
                        {companyInfo.whatsappSecondary} (Secundário)
                      </a>
                    </div>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">E-mail:</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-blue-300 hover:underline bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-mono block mt-0.5 truncate max-w-[200px]"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">Sede / Endereço:</span>
                    <p className="text-slate-200 mt-0.5 leading-snug">
                      {companyInfo.address}
                    </p>
                    <span className="text-[11px] text-accent-amber block mt-0.5 font-medium">
                      {companyInfo.addressReference}
                    </span>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-brand-400 hover:underline mt-1"
                    >
                      <span>Ver no mapa</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">Instagram:</span>
                    <a
                      href={companyInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-300 hover:underline bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-mono inline-block mt-0.5"
                    >
                      {companyInfo.instagram}
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-bold">Horário:</span>
                    <span className="text-slate-300">{companyInfo.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé inferior / Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="text-center sm:text-left">
              &copy; 2026 <strong className="text-white">Barros Prevenção</strong>. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={openPrivacyPolicy}
                className="hover:text-slate-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                Política de Privacidade
              </button>
              <button
                onClick={openTermsOfUse}
                className="hover:text-slate-200 transition-colors cursor-pointer flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Legal (Privacidade / Termos) */}
      <Modal
        isOpen={legalModalContent.isOpen}
        onClose={() => setLegalModalContent((prev) => ({ ...prev, isOpen: false }))}
        title={legalModalContent.title}
        maxWidth="lg"
      >
        {legalModalContent.content}
      </Modal>
    </>
  );
};
