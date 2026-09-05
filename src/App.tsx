import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { FirefighterSimulatorPage } from './pages/FirefighterSimulatorPage';
import { coursesData } from './data/courses';

function HomePage() {
  const [selectedCourseForContact, setSelectedCourseForContact] = useState<string>('');
  const [isCompanySelected, setIsCompanySelected] = useState<boolean>(false);

  const handleSelectCourseForEnrollment = (courseTitle: string) => {
    setSelectedCourseForContact(courseTitle);
    setIsCompanySelected(false);

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
    <>
      <main className="flex-1">
        <Hero />
        <CoursesSection onSelectForEnrollment={handleSelectCourseForEnrollment} />
        <AboutSection />
        <BenefitsSection />
        <CompanyTrainingSection onSelectForCompanyTraining={handleSelectCompanyTraining} />
        <FAQSection />
        <ContactSection
          initialCourseInterest={selectedCourseForContact}
          isCompanySelected={isCompanySelected}
        />
      </main>
      <Footer onSelectCourse={handleSelectCourseFromFooter} />

      {/* Barra / Pílula Flutuante de Chamada para Matrícula (apenas na home) */}
      <FloatingEnrollmentCTA />
    </>
  );
}

function SimulatorPage() {
  const handleSelectCourseFromFooter = (courseId: string) => {
    const course = coursesData.find((c) => c.id === courseId);
    if (course) {
      // Na página do simulador, redireciona para a home com o curso
      window.location.href = `/#contato`;
    }
  };

  return (
    <>
      <main className="flex-1">
        <FirefighterSimulatorPage />
      </main>
      <Footer onSelectCourse={handleSelectCourseFromFooter} />
    </>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-brand-600 selection:text-white relative">
      {/* Barra de Progresso de Rolagem no Topo */}
      <ScrollProgress />

      {/* Barra de Navegação Fixa */}
      <Navbar />

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simulador" element={<SimulatorPage />} />
      </Routes>

      {/* Botão Flutuante de Retorno ao Topo */}
      <ScrollToTop />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
