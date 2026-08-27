import React, { useState } from 'react';
import { Shield, Sparkles } from 'lucide-react';
import { Course } from '../../types';
import { coursesData } from '../../data/courses';
import { CourseCard } from './CourseCard';
import { CourseDetailModal } from './CourseDetailModal';
import { ScrollReveal } from '../ui/ScrollReveal';

interface CoursesSectionProps {
  selectedCourseId?: string | null;
  onSelectForEnrollment: (courseTitle: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectForEnrollment,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Cursos' },
    { id: 'bombeiro', label: 'Bombeiro Civil' },
    { id: 'aph', label: 'APH & Emergência' },
    { id: 'primeiros-socorros', label: 'Primeiros Socorros' },
    { id: 'nrs', label: 'Normas Regulamentadoras (NRs)' },
    { id: 'empresas', label: 'Treinamentos para Empresas' },
  ];

  const filteredCourses = activeCategory === 'todos'
    ? coursesData
    : coursesData.filter((c) => c.category === activeCategory);

  return (
    <section id="cursos" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção com Animação de Entrada */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100/70 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Capacitações & Normas Técnicas
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Nossos Cursos e Treinamentos
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Formações completas em prevenção, combate a incêndios, emergências médicas e conformidade com as principais Normas Regulamentadoras (NRs) do MTE.
            </p>

            {/* Filtros de Categoria */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/30 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Grid de Cards dos Cursos com Animação em Cascata (Stagger) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course, index) => (
            <ScrollReveal
              key={course.id}
              animation="fade-up"
              delay={(index % 3) * 120}
              className="h-full"
            >
              <CourseCard
                course={course}
                onOpenDetails={(c) => setSelectedCourse(c)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Rodapé da seção de cursos com chamada para empresas */}
        <ScrollReveal animation="zoom-in" delay={200} className="mt-14">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-brand-50 text-brand-600 shrink-0 hidden sm:block">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Precisa capacitar sua equipe em NRs ou formar Brigada de Incêndio?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Oferecemos treinamentos de NR 6, NR 10, NR 20, NR 33, NR 35 e Brigadas In Company, com cronograma customizado.
                </p>
              </div>
            </div>
            <a
              href="#empresas"
              className="shrink-0 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-5 py-2.5 rounded-lg transition-colors border border-brand-200/60"
            >
              Ver Soluções Corporativas &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal de Detalhes Reutilizável */}
      <CourseDetailModal
        course={selectedCourse}
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourse(null)}
        onSelectForEnrollment={onSelectForEnrollment}
      />
    </section>
  );
};
