import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { FirefighterExamPage } from './pages/FirefighterExamPage';
import { FirefighterRPGPage } from './pages/FirefighterRPGPage';
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

export function AppContent() {
  const location = useLocation();
  const isIsolatedRoute = location.pathname === '/simulado' || location.pathname === '/rpg';

  if (isIsolatedRoute) {
    return (
      <Routes>
        <Route path="/simulado" element={<FirefighterExamPage />} />
        <Route path="/rpg" element={<FirefighterRPGPage />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-brand-600 selection:text-white relative overflow-x-hidden">
      {/* Barra de Progresso de Rolagem no Topo */}
      <ScrollProgress />

      {/* Barra de Navegação Fixa */}
      <Navbar />

      {/* Rotas Principais */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* Botão Flutuante de Retorno ao Topo */}
      <ScrollToTop />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export function App() {
  return <AppContent />;
}

export default App;
