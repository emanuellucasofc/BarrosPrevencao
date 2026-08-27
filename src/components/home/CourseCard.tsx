import React from 'react';
import {
  Flame,
  Activity,
  HeartPulse,
  Building2,
  Clock,
  ArrowRight,
  MessageSquare,
  Shield,
  ShieldCheck,
  Zap,
  Fuel,
  Box,
  Mountain,
  FileCheck
} from 'lucide-react';
import { Course } from '../../types';
import { Button } from '../ui/Button';
import { getCourseWhatsAppUrl } from '../../utils/whatsapp';

interface CourseCardProps {
  course: Course;
  onOpenDetails: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onOpenDetails }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-brand-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-brand-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-brand-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-brand-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Fuel':
        return <Fuel className="w-5 h-5 text-orange-500" />;
      case 'Box':
        return <Box className="w-5 h-5 text-brand-600" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-brand-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-brand-600" />;
      default:
        return <Shield className="w-5 h-5 text-brand-600" />;
    }
  };

  const getCategoryLabel = () => {
    switch (course.category) {
      case 'nrs':
        return 'Norma Regulamentadora (MTE)';
      case 'empresas':
        return 'Treinamento Corporativo';
      case 'bombeiro':
        return 'Formação Profissional';
      case 'aph':
        return 'Atendimento Pré-Hospitalar';
      case 'primeiros-socorros':
        return 'Primeiros Socorros & Cidadão';
      default:
        return 'Capacitação Especializada';
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Imagem do Curso */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={course.imageUrl}
          alt={course.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Badge do Curso */}
        {course.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold shadow-sm ${
                course.category === 'nrs'
                  ? 'bg-slate-900/90 text-amber-400 border border-amber-400/40 backdrop-blur-xs'
                  : 'bg-brand-600 text-white'
              }`}
            >
              {course.badge}
            </span>
          </div>
        )}

        {/* Modalidade / Carga rápida */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 font-medium">
            <Clock className="w-3.5 h-3.5 text-accent-amber" />
            <span className="truncate max-w-[170px]">{course.workload}</span>
          </span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Header do Card com Ícone e Título */}
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-brand-50 border border-brand-100 shrink-0">
            {getIcon(course.iconName)}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-brand-600 transition-colors leading-snug">
              {course.title}
            </h3>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">
              {getCategoryLabel()}
            </span>
          </div>
        </div>

        {/* Descrição Breve */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
          {course.shortDescription}
        </p>

        {/* Destaques rápidos */}
        <div className="space-y-1.5 py-3 border-y border-slate-100 text-xs text-slate-500 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
            <span className="font-semibold text-slate-700">Formato:</span>
            <span className="truncate">{course.modality}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-700">Certificado:</span>
            <span className="truncate">Conforme exigências legais e normas</span>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            onClick={() => onOpenDetails(course)}
            variant="secondary"
            size="sm"
            className="w-full text-xs font-bold"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Saiba mais
          </Button>

          <Button
            href={getCourseWhatsAppUrl(course.title)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="w-full text-xs font-bold border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            icon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
