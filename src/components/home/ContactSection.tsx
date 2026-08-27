import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  UserCheck,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { companyInfo } from '../../data/companyInfo';
import { coursesData } from '../../data/courses';
import { Button } from '../ui/Button';
import { ContactFormData } from '../../types';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { Modal } from '../ui/Modal';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ContactSectionProps {
  initialCourseInterest?: string;
  isCompanySelected?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCourseInterest = '',
  isCompanySelected = false,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    courseInterest: initialCourseInterest || '',
    isCompany: isCompanySelected,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionStatus, setSubmissionStatus] = useState<{
    showModal: boolean;
    data: ContactFormData | null;
  }>({
    showModal: false,
    data: null,
  });

  // Atualizar quando props mudarem
  useEffect(() => {
    if (initialCourseInterest) {
      setFormData((prev) => ({
        ...prev,
        courseInterest: initialCourseInterest,
        isCompany: initialCourseInterest.toLowerCase().includes('empresa') || isCompanySelected,
      }));
    }
  }, [initialCourseInterest, isCompanySelected]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Informe um endereço de e-mail válido.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, informe seu telefone ou WhatsApp.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Informe um número de telefone com DDD válido.';
    }

    if (!formData.courseInterest) {
      newErrors.courseInterest = 'Selecione o curso ou treinamento de seu interesse.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Exibe modal transparente de integração com opção de redirecionar para o WhatsApp
    setSubmissionStatus({
      showModal: true,
      data: { ...formData },
    });
  };

  const handleSendViaWhatsApp = () => {
    if (!submissionStatus.data) return;

    const { name, email, phone, courseInterest, isCompany, message } = submissionStatus.data;
    const typeLabel = isCompany ? 'Treinamento para Empresa' : 'Inscrição Individual';

    const formattedMessage = `*Contato via Site - Barros Prevenção*
*Tipo:* ${typeLabel}
*Nome:* ${name}
*E-mail:* ${email}
*Telefone/WhatsApp:* ${phone}
*Curso de Interesse:* ${courseInterest}
${message ? `*Mensagem:* ${message}` : ''}`;

    const url = getWhatsAppUrl(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      courseInterest: '',
      isCompany: false,
      message: '',
    });
    setErrors({});
    setSubmissionStatus({ showModal: false, data: null });
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Nicar%C3%A1gua+186+Penha+Rio+de+Janeiro+RJ";

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho com ScrollReveal */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              Canais de Atendimento
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Fale com a Barros Prevenção
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tire dúvidas sobre turmas, solicite informações para matrículas ou faça uma visita à nossa sede na Penha.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coluna Esquerda: Informações de Contato Oficiais */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-right" delay={150}>
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse"></span>
                  Informações Oficiais
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Estamos à disposição para atender você. Faça-nos uma visita na Penha ou entre em contato pelos nossos canais oficiais.
                </p>

                <div className="space-y-3.5 pt-2">
                  {/* Endereço Oficial */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-brand-500/60 transition-colors group">
                    <div className="p-2.5 rounded-lg bg-amber-950 text-accent-amber shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-slate-400 block uppercase">Endereço / Sede</span>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {companyInfo.address}
                      </p>
                      <p className="text-xs text-accent-amber font-medium mt-1">
                        📍 {companyInfo.addressReference}
                      </p>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-400 hover:text-brand-300 underline mt-2"
                      >
                        <span>Abrir no Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Telefones / WhatsApp Oficiais */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="p-2.5 rounded-lg bg-emerald-950 text-emerald-400 shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-slate-400 block uppercase">Telefones & WhatsApp</span>
                      
                      {/* Telefone 1 */}
                      <div className="flex items-center justify-between gap-2 mt-1 pb-1.5 border-b border-slate-700/60">
                        <a
                          href={getWhatsAppUrl(undefined, false)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold font-mono text-emerald-400 hover:underline flex items-center gap-1.5"
                        >
                          <span>{companyInfo.whatsapp}</span>
                        </a>
                        <span className="text-[10px] uppercase font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60">
                          Principal
                        </span>
                      </div>

                      {/* Telefone 2 */}
                      <div className="flex items-center justify-between gap-2 mt-1.5">
                        <a
                          href={getWhatsAppUrl(undefined, true)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold font-mono text-emerald-400 hover:underline flex items-center gap-1.5"
                        >
                          <span>{companyInfo.whatsappSecondary}</span>
                        </a>
                        <span className="text-[10px] uppercase font-bold bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded">
                          Secundário
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* E-mail Oficial */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-slate-400 block uppercase">E-mail Comercial</span>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-sm font-mono text-blue-300 hover:underline block truncate mt-0.5"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Instagram Oficial */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="p-2.5 rounded-lg bg-pink-950 text-pink-400 shrink-0 mt-0.5">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-slate-400 block uppercase">Instagram Oficial</span>
                      <a
                        href={companyInfo.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold font-mono text-pink-300 hover:underline block truncate mt-0.5"
                      >
                        {companyInfo.instagram}
                      </a>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="p-2.5 rounded-lg bg-slate-700 text-slate-300 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-slate-400 block uppercase">Horário de Atendimento</span>
                      <span className="text-xs text-slate-300 block mt-0.5">
                        {companyInfo.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna Direita: Formulário de Contato com Validação e Transparência */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" delay={250}>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card-soft">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-950">Envie uma Mensagem</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Preencha os campos abaixo para receber a grade de horários, valores ou proposta personalizada.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Tipo de Solicitação (Pessoa Física ou Empresa) */}
                  <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-200/70 rounded-xl mb-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isCompany: false })}
                      className={`py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        !formData.isCompany
                          ? 'bg-white text-brand-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Inscrição Individual</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isCompany: true })}
                      className={`py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        formData.isCompany
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Building className="w-4 h-4" />
                      <span>Para Minha Empresa</span>
                    </button>
                  </div>

                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-800 uppercase mb-1">
                      {formData.isCompany ? 'Nome do Responsável / Empresa *' : 'Nome Completo *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder={formData.isCompany ? 'Ex: Carlos Silva - RH Empresa X' : 'Ex: João da Silva'}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-300'
                          : 'border-slate-300 focus:border-brand-600 focus:ring-brand-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* E-mail e Telefone em grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* E-mail */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-800 uppercase mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="seuemail@exemplo.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-300'
                            : 'border-slate-300 focus:border-brand-600 focus:ring-brand-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Telefone/WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="(00) 00000-0000"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-300'
                            : 'border-slate-300 focus:border-brand-600 focus:ring-brand-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Curso de Interesse */}
                  <div>
                    <label htmlFor="courseInterest" className="block text-xs font-bold text-slate-800 uppercase mb-1">
                      Curso ou Treinamento de Interesse *
                    </label>
                    <select
                      id="courseInterest"
                      value={formData.courseInterest}
                      onChange={(e) => {
                        setFormData({ ...formData, courseInterest: e.target.value });
                        if (errors.courseInterest) setErrors({ ...errors, courseInterest: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-colors cursor-pointer ${
                        errors.courseInterest
                          ? 'border-red-500 focus:ring-red-300'
                          : 'border-slate-300 focus:border-brand-600 focus:ring-brand-200'
                      }`}
                    >
                      <option value="">-- Selecione uma opção --</option>
                      {coursesData.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                      <option value="Treinamento In Company Personalizado">
                        Treinamento In Company Personalizado (Para Empresas)
                      </option>
                      <option value="Formação / Reciclagem de Brigada de Incêndio">
                        Formação / Reciclagem de Brigada de Incêndio
                      </option>
                      <option value="Outras dúvidas e informações gerais">
                        Outras dúvidas e informações gerais
                      </option>
                    </select>
                    {errors.courseInterest && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.courseInterest}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase mb-1">
                      Mensagem ou Dúvida (Opcional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        formData.isCompany
                          ? 'Informe quantidade aproximada de participantes, horários desejados ou ramo de atuação...'
                          : 'Escreva suas dúvidas sobre datas, localização ou formas de pagamento...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 transition-colors"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      icon={<Send className="w-5 h-5" />}
                    >
                      Enviar mensagem
                    </Button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Modal Transparente pós-validação */}
      <Modal
        isOpen={submissionStatus.showModal}
        onClose={() => setSubmissionStatus({ showModal: false, data: null })}
        title="Mensagem Pronta para Envio!"
        maxWidth="lg"
      >
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">Formulário validado com sucesso!</p>
              <p className="text-emerald-800 mt-0.5">
                Para um retorno ágil e atendimento imediato, você pode encaminhar sua mensagem formatada diretamente para o WhatsApp da Barros Prevenção.
              </p>
            </div>
          </div>

          {submissionStatus.data && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 font-mono">
              <p><strong>Nome:</strong> {submissionStatus.data.name}</p>
              <p><strong>E-mail:</strong> {submissionStatus.data.email}</p>
              <p><strong>Telefone:</strong> {submissionStatus.data.phone}</p>
              <p><strong>Interesse:</strong> {submissionStatus.data.courseInterest}</p>
              {submissionStatus.data.message && (
                <p><strong>Mensagem:</strong> {submissionStatus.data.message}</p>
              )}
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleSendViaWhatsApp}
              variant="primary"
              size="md"
              className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Enviar pelo WhatsApp Agora
            </Button>
            <Button
              onClick={handleResetForm}
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              Concluir
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
