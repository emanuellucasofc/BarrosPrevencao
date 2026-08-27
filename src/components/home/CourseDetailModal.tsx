import React from 'react';
import {
  X,
  Clock,
  MapPin,
  Calendar,
  Award,
  CheckCircle2,
  BookOpen,
  MessageSquare,
  Send,
  HelpCircle,
  ShieldCheck,
  Users
} from 'lucide-react';
import { Course } from '../../types';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { getCourseWhatsAppUrl } from '../../utils/whatsapp';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForEnrollment: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onSelectForEnrollment,
}) => {
  if (!course) return null;

  const handleEnrollmentClick = () => {
    onSelectForEnrollment(course.title);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="3xl">
      <div className="space-y-6">
        {/* Banner / Header do Curso */}
        <div className="relative rounded-xl overflow-hidden bg-slate-900 -mx-6 -mt-5 mb-4">
          <img
            src={course.imageUrl}
            alt={course.imageAlt}
            className="w-full h-48 sm:h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Botão fechar no topo */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-950/70 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer border border-white/10"
            aria-label="Fechar detalhes do curso"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            {course.badge && (
              <span className="inline-block px-3 py-1 bg-brand-600 text-xs font-bold uppercase rounded-md mb-2 shadow-sm">
                {course.badge}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {course.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
              {course.shortDescription}
            </p>
          </div>
        </div>

        {/* Informações Rápidas em Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block">Carga Horária</span>
              <span className="text-slate-600 font-mono text-[11px]">{course.workload}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block">Modalidade</span>
              <span className="text-slate-600">{course.modality}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block">Local</span>
              <span className="text-slate-600 font-mono text-[11px]">{course.location}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block">Datas Disponíveis</span>
              <span className="text-slate-600 font-mono text-[11px]">{course.datesAvailable}</span>
            </div>
          </div>
        </div>

        {/* Visão Geral & Objetivo */}
        <div className="space-y-4 text-slate-700">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              Visão Geral do Treinamento
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {course.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              Objetivo da Capacitação
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 bg-brand-50/60 p-3.5 rounded-lg border-l-4 border-brand-600">
              {course.objective}
            </p>
          </div>
        </div>

        {/* Público-Alvo & Requisitos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Público Alvo */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-600" />
              Público-Alvo
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {course.targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requisitos & Certificação */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-600" />
                Informações de Certificação
              </h4>
              <p className="text-xs text-slate-600 font-mono bg-white p-2 rounded border border-slate-200">
                {course.certificationInfo}
              </p>
            </div>

            {course.requirements && course.requirements.length > 0 && (
              <div>
                <span className="text-xs font-bold text-slate-800 block mb-1">Pré-requisitos:</span>
                <ul className="space-y-1 text-xs text-slate-600">
                  {course.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-600 font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Conteúdo Programático Estruturado */}
        <div className="space-y-3 pt-2">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-600" />
            Conteúdo Programático Completo
          </h3>

          <div className="space-y-2.5">
            {course.syllabus.map((mod) => (
              <div
                key={mod.moduleNumber}
                className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2 py-0.5 text-xs font-bold bg-slate-900 text-white rounded">
                    Módulo {mod.moduleNumber}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{mod.title}</h4>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 text-xs text-slate-600">
                  {mod.topics.map((topic, tidx) => (
                    <li key={tidx} className="flex items-start gap-1.5">
                      <span className="text-slate-400">›</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ do Curso */}
        {course.faqs && course.faqs.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-600" />
              Dúvidas Frequentes sobre este Curso
            </h3>
            <div className="space-y-2">
              {course.faqs.map((faq, fidx) => (
                <div key={fidx} className="p-3 bg-slate-50 rounded-lg text-xs border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">{faq.question}</p>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rodapé do Modal / CTAs de Inscrição e WhatsApp */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button
            onClick={handleEnrollmentClick}
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            icon={<Send className="w-4 h-4" />}
          >
            Quero Me Inscrever / Solicitar Vaga
          </Button>

          <Button
            href={getCourseWhatsAppUrl(course.title)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            className="w-full sm:w-auto border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            icon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
          >
            Tirar Dúvidas no WhatsApp
          </Button>
        </div>
      </div>
    </Modal>
  );
};
