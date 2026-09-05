import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Flame,
  Shield,
  BookOpen,
  MessageSquare,
  Moon,
  Sun,
  AlertTriangle,
  FileCheck,
  GraduationCap
} from 'lucide-react';
import { mockExamQuestions } from '../data/mockExamQuestions';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Button } from '../components/ui/Button';

export const FirefighterExamPage: React.FC = () => {
  // Configurações e Estados da Prova
  const [examState, setExamState] = useState<'intro' | 'active' | 'finished'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(20 * 60); // 20 minutos em segundos
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [filterResult, setFilterResult] = useState<'all' | 'correct' | 'wrong'>('all');

  // Scroll para o topo ao carregar ou mudar de tela
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [examState, currentIndex]);

  // Cronômetro regressivo
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTimerRunning && examState === 'active' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, examState, timeRemaining]);

  // Iniciar Prova
  const handleStartExam = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(20 * 60);
    setIsTimerRunning(true);
    setExamState('active');
  };

  // Selecionar Alternativa
  const handleSelectOption = (questionId: number, letter: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: letter,
    }));
  };

  // Finalizar Simulado
  const handleFinishExam = () => {
    setIsTimerRunning(false);
    setShowConfirmModal(false);
    setExamState('finished');
  };

  // Formatação de Tempo (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Questão Atual
  const currentQuestion = mockExamQuestions[currentIndex];
  const totalQuestions = mockExamQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Cálculos de Resultado
  const scoreResults = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    const details = mockExamQuestions.map((q) => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctOption;
      if (isCorrect) correct++;
      else wrong++;
      return {
        ...q,
        selected,
        isCorrect,
      };
    });

    const percent = Math.round((correct / totalQuestions) * 100);
    const isApproved = percent >= 70; // 70% de aproveitamento mínimo
    const timeSpentSeconds = 20 * 60 - timeRemaining;

    return {
      correct,
      wrong,
      total: totalQuestions,
      percent,
      isApproved,
      timeSpentFormatted: formatTime(timeSpentSeconds),
      details,
    };
  }, [userAnswers, totalQuestions, timeRemaining]);

  // Mensagem para tirar dúvidas no WhatsApp
  const getWhatsAppDoubtUrl = () => {
    const message = `Olá, instrutor da Barros Prevenção! Acabei de realizar o Simulado de Bombeiro Civil no site e tirei nota ${scoreResults.percent}% (${scoreResults.correct}/${scoreResults.total} acertos). Gostaria de tirar dúvidas sobre as questões técnicas e saber mais sobre a formação presencial na Penha/RJ.`;
    return getWhatsAppUrl(message);
  };

  // Temas (Claro / Noturno)
  const themeClasses = {
    wrapper: isDarkMode
      ? 'bg-slate-950 text-slate-100'
      : 'bg-slate-50 text-slate-900',
    card: isDarkMode
      ? 'bg-slate-900 border-slate-800 text-white shadow-2xl'
      : 'bg-white border-slate-200 text-slate-900 shadow-card-soft',
    header: isDarkMode
      ? 'bg-slate-900/90 border-slate-800 backdrop-blur-md'
      : 'bg-white/90 border-slate-200 backdrop-blur-md',
    navPillInactive: isDarkMode
      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
      : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    navPillAnswered: isDarkMode
      ? 'bg-brand-950 text-brand-400 border border-brand-800'
      : 'bg-brand-50 text-brand-700 border border-brand-300 font-bold',
    navPillActive: isDarkMode
      ? 'ring-2 ring-brand-500 bg-brand-600 text-white'
      : 'ring-2 ring-brand-600 bg-brand-600 text-white font-bold',
    optionDefault: isDarkMode
      ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-brand-500 hover:bg-slate-800'
      : 'bg-white border-slate-200 text-slate-800 hover:border-brand-400 hover:bg-slate-50/80',
    optionSelected: isDarkMode
      ? 'bg-brand-950/60 border-brand-500 text-white ring-1 ring-brand-500 shadow-emergency'
      : 'bg-brand-50/80 border-brand-600 text-brand-950 ring-2 ring-brand-500/20 shadow-xs',
    letterBadgeDefault: isDarkMode
      ? 'bg-slate-700 text-slate-200'
      : 'bg-slate-100 text-slate-700',
    letterBadgeSelected: 'bg-brand-600 text-white',
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 overflow-x-hidden ${themeClasses.wrapper}`}>
      {/* 1. TELA INTRODUTÓRIA */}
      {examState === 'intro' && (
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-12 sm:py-16">
          <div className="max-w-3xl w-full space-y-8 animate-fade-in">
            {/* Topo / Breadcrumb */}
            <div className="flex items-center justify-between gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-brand-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao Site</span>
              </Link>

              {/* Seletor de Modo Noturno */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-xl border flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-800 text-amber-400 hover:bg-slate-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
                title={isDarkMode ? 'Mudar para Modo Claro' : 'Mudar para Modo Noturno'}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span className="hidden sm:inline">{isDarkMode ? 'Modo Claro' : 'Modo Noturno'}</span>
              </button>
            </div>

            {/* Card Principal de Apresentação */}
            <div className={`p-6 sm:p-10 rounded-3xl border ${themeClasses.card}`}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-emergency">
                  <Flame className="w-9 h-9 animate-pulse" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Shield className="w-3.5 h-3.5" />
                    Ambiente Virtual de Aprendizagem
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                    Simulado Oficial de Bombeiro Civil
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Teste seus conhecimentos técnicos em Prevenção, Combate a Incêndio, APH, Produtos Perigosos e NBR 14608 para provas oficiais e reciclagem.
                  </p>
                </div>
              </div>

              {/* Informações e Regras da Prova */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Questões</span>
                    <span className="text-base font-bold">10 Questões</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Tempo Limite</span>
                    <span className="text-base font-bold">20 Minutos</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Aprovação</span>
                    <span className="text-base font-bold">70% (7 acertos)</span>
                  </div>
                </div>
              </div>

              {/* Destaques pedagógicos */}
              <div className="space-y-3 mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <h3 className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  Como funciona o Simulado:
                </h3>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-300">
                  <li>Ambiente de teste sem distrações e com cronômetro em tempo real;</li>
                  <li>Você pode navegar livremente entre as questões e alterar suas respostas;</li>
                  <li>Ao finalizar, você recebe a pontuação imediata e o <strong>Gabarito Comentado pelo Professor</strong> com fundamentação técnica nas normas.</li>
                </ul>
              </div>

              {/* Botão de Iniciar */}
              <Button
                onClick={handleStartExam}
                variant="primary"
                size="lg"
                fullWidth
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="shadow-emergency py-4 text-base font-bold"
              >
                Iniciar Simulado Agora
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 2. TELA EM ANDAMENTO (EXAM MODE) */}
      {examState === 'active' && (
        <div className="flex-1 flex flex-col">
          {/* Barra Superior Fixa da Prova */}
          <header className={`sticky top-0 z-40 border-b px-4 py-3 ${themeClasses.header}`}>
            {/* Barra de Progresso Linear no Topo */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-brand-600 transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
              {/* Título e Progresso */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
                <Link
                  to="/"
                  className="p-1.5 sm:p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                  title="Sair da prova"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 block truncate">
                    Simulado Bombeiro Civil
                  </span>
                  <p className="text-xs sm:text-sm font-bold truncate">
                    Questão {currentIndex + 1} de {totalQuestions}
                    <span className="text-xs font-normal text-slate-500 ml-1.5 hidden md:inline">
                      ({answeredCount} respondidas)
                    </span>
                  </p>
                </div>
              </div>

              {/* Cronômetro e Dark Mode */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                {/* Cronômetro */}
                <div
                  className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold border transition-all ${
                    timeRemaining <= 180
                      ? 'bg-red-500/10 border-red-500 text-red-600 dark:text-red-400 animate-pulse'
                      : isDarkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-200'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                  title="Tempo restante"
                >
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{formatTime(timeRemaining)}</span>
                </div>

                {/* Alternador de Modo Noturno */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-1.5 sm:p-2 rounded-xl border cursor-pointer transition-colors shrink-0 ${
                    isDarkMode
                      ? 'border-slate-700 bg-slate-800 text-amber-400 hover:bg-slate-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                  title={isDarkMode ? 'Modo Claro' : 'Modo Noturno'}
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Botão Finalizar */}
                <button
                  onClick={() => setShowConfirmModal(true)}
                  className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-brand-600 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
                >
                  Finalizar
                </button>
              </div>
            </div>
          </header>

          {/* Navegador Rápido de Questões (Pílulas) */}
          <div className="max-w-4xl mx-auto w-full px-4 pt-4 pb-2">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
              {mockExamQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = !!userAnswers[q.id];

                let pillClass = themeClasses.navPillInactive;
                if (isCurrent) pillClass = themeClasses.navPillActive;
                else if (isAnswered) pillClass = themeClasses.navPillAnswered;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`min-w-[34px] sm:min-w-[38px] h-8 sm:h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer ${pillClass}`}
                    title={`Ir para a questão ${idx + 1} (${q.category})`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Área Central da Questão */}
          <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 sm:py-6 flex flex-col justify-between">
            <div className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.card}`}>
              {/* Categoria e Tag */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  <Shield className="w-3.5 h-3.5 text-brand-600" />
                  {currentQuestion.category}
                </span>

                <span className="text-xs font-mono text-slate-400">
                  ID: #{currentQuestion.id}
                </span>
              </div>

              {/* Enunciado */}
              <h2 className="text-lg sm:text-xl font-bold leading-relaxed mb-6 sm:mb-8 text-slate-900 dark:text-slate-100">
                {currentQuestion.statement}
              </h2>

              {/* Alternativas (A, B, C, D) */}
              <div className="space-y-3 sm:space-y-3.5">
                {currentQuestion.options.map((opt) => {
                  const isSelected = userAnswers[currentQuestion.id] === opt.letter;

                  return (
                    <button
                      key={opt.letter}
                      onClick={() => handleSelectOption(currentQuestion.id, opt.letter)}
                      className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer group select-none ${
                        isSelected ? themeClasses.optionSelected : themeClasses.optionDefault
                      }`}
                    >
                      {/* Letra da Alternativa */}
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 transition-colors ${
                          isSelected ? themeClasses.letterBadgeSelected : themeClasses.letterBadgeDefault
                        }`}
                      >
                        {opt.letter}
                      </span>

                      {/* Texto da Alternativa */}
                      <span className="text-sm sm:text-base leading-relaxed pt-0.5 min-w-0 flex-1 break-words">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rodapé de Ações de Navegação */}
            <div className="pt-6 sm:pt-8 flex items-center justify-between gap-3">
              <Button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                variant="outline"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
                className={isDarkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : ''}
              >
                Anterior
              </Button>

              <div className="flex items-center gap-2">
                {currentIndex < totalQuestions - 1 ? (
                  <Button
                    onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    className="shadow-emergency"
                  >
                    Próxima Questão
                  </Button>
                ) : (
                  <Button
                    onClick={() => setShowConfirmModal(true)}
                    variant="primary"
                    size="md"
                    icon={<CheckCircle2 className="w-4 h-4" />}
                    iconPosition="right"
                    className="bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 shadow-md"
                  >
                    Finalizar Simulado
                  </Button>
                )}
              </div>
            </div>
          </main>
        </div>
      )}

      {/* 3. TELA DE RESULTADOS & GABARITO COMENTADO */}
      {examState === 'finished' && (
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 sm:py-12 space-y-8 animate-fade-in">
          {/* Topo / Voltar */}
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-brand-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Site</span>
            </Link>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800 text-amber-400 hover:bg-slate-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="hidden sm:inline">{isDarkMode ? 'Modo Claro' : 'Modo Noturno'}</span>
            </button>
          </div>

          {/* Card Principal de Pontuação */}
          <div className={`p-6 sm:p-10 rounded-3xl border text-center ${themeClasses.card}`}>
            {/* Ícone de Destaque */}
            <div className="flex justify-center mb-4">
              <div
                className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
                  scoreResults.isApproved
                    ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40'
                }`}
              >
                {scoreResults.isApproved ? (
                  <Award className="w-10 h-10" />
                ) : (
                  <AlertTriangle className="w-10 h-10" />
                )}
              </div>
            </div>

            {/* Status e Porcentagem */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
              {scoreResults.isApproved ? (
                <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                  Aprovado no Simulado
                </span>
              ) : (
                <span className="bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800">
                  Pratique um Pouco Mais
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
              {scoreResults.percent}%
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
              {scoreResults.isApproved
                ? `Excelente desempenho! Você acertou ${scoreResults.correct} de ${scoreResults.total} questões e atingiu a pontuação mínima recomendada para Bombeiro Civil.`
                : `Você acertou ${scoreResults.correct} de ${scoreResults.total} questões. Revise o gabarito comentado abaixo para fixar os conceitos das normas técnicas.`}
            </p>

            {/* Painel de Métricas Rápidas */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto my-8">
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                <span className="text-xs text-emerald-800 dark:text-emerald-400 font-bold block">Acertos</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {scoreResults.correct}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60">
                <span className="text-xs text-red-800 dark:text-red-400 font-bold block">Erros</span>
                <span className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400">
                  {scoreResults.wrong}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-bold block">Tempo</span>
                <span className="text-xl sm:text-2xl font-black font-mono">
                  {scoreResults.timeSpentFormatted}
                </span>
              </div>
            </div>

            {/* Botões de Ação Imediata */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                onClick={handleStartExam}
                variant="primary"
                size="md"
                icon={<RotateCcw className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-emergency"
              >
                Refazer Simulado
              </Button>

              <Button
                href={getWhatsAppDoubtUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
                className="w-full sm:w-auto"
              >
                Tirar Dúvidas no WhatsApp
              </Button>
            </div>
          </div>

          {/* Gabarito Visual Rápido (Grid de Botões Coloridos) */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.card}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <h3 className="text-base sm:text-lg font-bold">Gabarito Visual Rápido</h3>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold">
                <button
                  onClick={() => setFilterResult('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    filterResult === 'all' ? 'bg-brand-600 text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  Todas ({scoreResults.total})
                </button>
                <button
                  onClick={() => setFilterResult('correct')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    filterResult === 'correct' ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  Acertos ({scoreResults.correct})
                </button>
                <button
                  onClick={() => setFilterResult('wrong')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    filterResult === 'wrong' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  Erros ({scoreResults.wrong})
                </button>
              </div>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-2.5">
              {scoreResults.details.map((q, idx) => (
                <a
                  key={q.id}
                  href={`#questao-feedback-${q.id}`}
                  className={`p-2 sm:p-2.5 rounded-xl text-center font-bold text-xs sm:text-sm flex flex-col items-center justify-center transition-transform hover:scale-105 min-w-0 ${
                    q.isCorrect
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-red-600 text-white shadow-xs'
                  }`}
                  title={`Questão ${idx + 1}: ${q.isCorrect ? 'Acertou' : 'Errou'}`}
                >
                  <span>Q{idx + 1}</span>
                  <span className="text-[10px] uppercase">{q.isCorrect ? '✓' : '✗'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Revisão Detalhada com Comentário do Professor */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-brand-600" />
                <span>Gabarito Comentado pelo Professor</span>
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                {scoreResults.details.filter(d => filterResult === 'all' || (filterResult === 'correct' ? d.isCorrect : !d.isCorrect)).length} questões exibidas
              </span>
            </div>

            {scoreResults.details
              .filter((q) => {
                if (filterResult === 'correct') return q.isCorrect;
                if (filterResult === 'wrong') return !q.isCorrect;
                return true;
              })
              .map((q) => (
                <div
                  key={q.id}
                  id={`questao-feedback-${q.id}`}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all ${themeClasses.card} ${
                    q.isCorrect
                      ? 'border-emerald-500/30'
                      : 'border-red-500/40'
                  }`}
                >
                  {/* Cabeçalho do Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                          q.isCorrect
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400'
                            : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-400'
                        }`}
                      >
                        {q.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Acertou
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" />
                            Errou
                          </>
                        )}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {q.category}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-400 shrink-0">
                      Sua resposta: <strong>{q.selected || 'Nenhuma'}</strong> | Gabarito: <strong className="text-emerald-500">{q.correctOption}</strong>
                    </div>
                  </div>

                  {/* Enunciado */}
                  <p className="text-base sm:text-lg font-bold mb-6 text-slate-900 dark:text-slate-100">
                    {q.statement}
                  </p>

                  {/* Alternativas com Destaque de Gabarito */}
                  <div className="space-y-2.5 mb-6">
                    {q.options.map((opt) => {
                      const isCorrectAnswer = opt.letter === q.correctOption;
                      const isUserChoice = opt.letter === q.selected;

                      let optStyle = 'border-slate-200 dark:border-slate-800 bg-transparent text-slate-600 dark:text-slate-400';
                      if (isCorrectAnswer) {
                        optStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                      } else if (isUserChoice && !isCorrectAnswer) {
                        optStyle = 'border-red-500 bg-red-500/10 text-red-950 dark:text-red-200 font-semibold line-through';
                      }

                      return (
                        <div
                          key={opt.letter}
                          className={`p-3.5 rounded-xl border flex items-start gap-3 text-sm ${optStyle}`}
                        >
                          <span className="font-bold shrink-0">{opt.letter})</span>
                          <span className="min-w-0 flex-1 break-words">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Comentário Didático do Professor */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400">
                      <GraduationCap className="w-5 h-5" />
                      <span>Comentário do Professor & Fundamentação Técnica:</span>
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      💡 {q.explanation.rule}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {q.explanation.details}
                    </p>
                    <div className="pt-2 border-t border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-300 font-mono">
                      📚 Base Normativa: {q.explanation.standard}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Banner de Conversão para o Curso de Bombeiro Civil */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950 border border-brand-700 text-brand-400 text-xs font-bold uppercase">
                  <Flame className="w-3.5 h-3.5" />
                  Barros Prevenção • Unidade Penha/RJ
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Quer se tornar um Bombeiro Civil Profissional?
                </h3>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Aulas práticas reais com combate a incêndio, resgate em altura, primeiros socorros avançados e certificação oficial.
                </p>
              </div>

              <Button
                href="/#cursos"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="shadow-emergency whitespace-nowrap"
              >
                Ver Curso Completo
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CONFIRMAÇÃO DE FINALIZAÇÃO */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in">
          <div className={`max-w-md w-full p-6 rounded-3xl border ${themeClasses.card} space-y-4`}>
            <div className="flex items-center gap-3 text-amber-500">
              <AlertTriangle className="w-7 h-7 shrink-0" />
              <h3 className="text-lg font-bold">Finalizar o Simulado?</h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Você respondeu <strong>{answeredCount}</strong> de <strong>{totalQuestions}</strong> questões.
              {answeredCount < totalQuestions && (
                <span className="block mt-2 text-amber-600 dark:text-amber-400 font-semibold">
                  ⚠️ Atenção: Há {totalQuestions - answeredCount} questão(ões) em branco! Deseja finalizar mesmo assim?
                </span>
              )}
            </p>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-sm font-semibold rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
              >
                Voltar à Prova
              </button>
              <Button
                onClick={handleFinishExam}
                variant="primary"
                size="md"
                className="bg-brand-600 hover:bg-brand-700"
              >
                Confirmar e Ver Gabarito
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
