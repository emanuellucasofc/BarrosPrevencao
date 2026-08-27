import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { AboutSection } from './components/home/AboutSection';
import { CoursesSection } from './components/home/CoursesSection';
import { BenefitsSection } from './components/home/BenefitsSection';
import { CompanyTrainingSection } from './components/home/CompanyTrainingSection';
import { FAQSection } from './components/home/FAQSection';
import { ContactSection } from './components/home/ContactSection';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { FloatingEnrollmentCTA } from './components/layout/FloatingEnrollmentCTA';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { coursesData } from './data/courses';

export function App() {
  const [selectedCourseForContact, setSelectedCourseForContact] = useState<string>('');
  const [isCompanySelected, setIsCompanySelected] = useState<boolean>(false);

  const handleSelectCourseForEnrollment = (courseTitle: string) => {
    setSelectedCourseForContact(courseTitle);
    setIsCompanySelected(false);
    
    // Rolar suavemente até a seção de contato
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCompanyTraining = () => {
    setSelectedCourseForContact('Treinamento In Company Personalizado');
    setIsCompanySelected(true);

    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourseFromFooter = (courseId: string) => {
    const course = coursesData.find((c) => c.id === courseId);
    if (course) {
      handleSelectCourseForEnrollment(course.title);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-brand-600 selection:text-white relative">
      {/* 1. Barra de Progresso de Rolagem no Topo */}
      <ScrollProgress />

      {/* 2. Barra de Navegação Fixa */}
      <Navbar />

      {/* 3. Conteúdo Principal com Transições de Rolagem Avançadas */}
      <main className="flex-1">
        {/* Hero Principal */}
        <Hero />

        {/* Seção Nossos Cursos */}
        <CoursesSection
          onSelectForEnrollment={handleSelectCourseForEnrollment}
        />

        {/* Seção Quem Somos */}
        <AboutSection />

        {/* Por que escolher a Barros Prevenção (Diferenciais) */}
        <BenefitsSection />

        {/* Treinamentos para Empresas (Soluções Corporativas) */}
        <CompanyTrainingSection
          onSelectForCompanyTraining={handleSelectCompanyTraining}
        />

        {/* Perguntas Frequentes (FAQ) */}
        <FAQSection />

        {/* Formulário de Contato e Inscrições */}
        <ContactSection
          initialCourseInterest={selectedCourseForContact}
          isCompanySelected={isCompanySelected}
        />
      </main>

      {/* Rodapé Completo */}
      <Footer onSelectCourse={handleSelectCourseFromFooter} />

      {/* Botão Flutuante de Retorno ao Topo com Indicador Circular */}
      <ScrollToTop />

      {/* Barra / Pílula Flutuante de Chamada para Matrícula */}
      <FloatingEnrollmentCTA />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
