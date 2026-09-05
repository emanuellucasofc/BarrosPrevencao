import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Flame,
  Server,
  Zap,
  Users,
  AlertTriangle,
  DoorOpen,
  Biohazard,
  Skull,
  Radio,
  Axe,
  BriefcaseMedical,
  RotateCcw
} from 'lucide-react';
import { rpgScenarios, RPGChoice, RpgIconType } from '../data/rpgScenarios';
import { Button } from '../components/ui/Button';

export const FirefighterRPGPage: React.FC = () => {
  // Estado do Jogador
  const [integrity, setIntegrity] = useState<number>(100);
  const [dangerLevel, setDangerLevel] = useState<number>(20); // Começa em 20%
  
  // Estado da História
  const [currentScenarioId, setCurrentScenarioId] = useState<string>('s1_cpd');
  
  // Estado de UI / Feedback
  const [showModal, setShowModal] = useState<boolean>(false);
  const [lastChoice, setLastChoice] = useState<RPGChoice | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'victory' | 'game-over'>('playing');
  const [shiftProgress, setShiftProgress] = useState<number>(1);
  const SHIFT_GOAL = 10; // Sobreviver a 10 cenários para vencer o plantão

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScenarioId]);

  // Checagem contínua de status
  useEffect(() => {
    if (integrity <= 0) {
      setIntegrity(0);
      setGameState('game-over');
    }
    if (dangerLevel >= 100) {
      setDangerLevel(100);
      setGameState('game-over');
    }
    if (dangerLevel <= 0) {
      setDangerLevel(0);
    }
  }, [integrity, dangerLevel]);

  const currentScenario = rpgScenarios.find(s => s.id === currentScenarioId) || rpgScenarios[0];

  const handleChoice = (choice: RPGChoice) => {
    setLastChoice(choice);
    
    // Aplicar consequências
    setIntegrity(prev => Math.max(0, Math.min(100, prev + choice.integrityChange)));
    setDangerLevel(prev => Math.max(0, Math.min(100, prev + choice.dangerChange)));
    
    // Mostrar feedback
    setShowModal(true);
  };

  const handleNext = () => {
    setShowModal(false);
    
    if (lastChoice?.endGameState) {
      setGameState(lastChoice.endGameState);
    } else if (lastChoice?.nextScenarioId === 'random') {
      if (shiftProgress >= SHIFT_GOAL) {
        setGameState('victory');
      } else {
        // Pega um cenário aleatório que seja diferente do atual
        const availableScenarios = rpgScenarios.filter(s => s.id !== currentScenarioId);
        const nextScenario = availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
        setCurrentScenarioId(nextScenario.id);
        setShiftProgress(prev => prev + 1);
      }
    } else if (lastChoice?.nextScenarioId) {
      setCurrentScenarioId(lastChoice.nextScenarioId);
      setShiftProgress(prev => prev + 1);
    } else if (integrity <= 0 || dangerLevel >= 100) {
      setGameState('game-over');
    }
  };

  const handleRestart = () => {
    setIntegrity(100);
    setDangerLevel(20);
    setCurrentScenarioId('s1_cpd');
    setShiftProgress(1);
    setGameState('playing');
    setShowModal(false);
    setLastChoice(null);
  };

  const getIcon = (type: RpgIconType, className: string = "w-12 h-12") => {
    switch(type) {
      case 'flame': return <Flame className={className} />;
      case 'server': return <Server className={className} />;
      case 'zap': return <Zap className={className} />;
      case 'users': return <Users className={className} />;
      case 'alert-triangle': return <AlertTriangle className={className} />;
      case 'door-open': return <DoorOpen className={className} />;
      case 'biohazard': return <Biohazard className={className} />;
      case 'skull': return <Skull className={className} />;
      default: return <Shield className={className} />;
    }
  };

  // Cores dinâmicas para as barras
  const integrityColor = integrity > 60 ? 'bg-emerald-500' : integrity > 30 ? 'bg-amber-500' : 'bg-red-600 animate-pulse';
  const dangerColor = dangerLevel < 40 ? 'bg-yellow-400' : dangerLevel < 75 ? 'bg-orange-500' : 'bg-red-600 animate-pulse';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-mono flex flex-col items-center pb-12 selection:bg-brand-600 selection:text-white relative">
      {/* HUD (Head-Up Display) Superior */}
      <header className="w-full max-w-3xl mx-auto p-4 sm:p-6 sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="text-xs font-bold text-slate-500 hover:text-white transition-colors">
            {'< VOLTAR'}
          </Link>
          <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-600">
            PLANTÃO: {shiftProgress}/{SHIFT_GOAL}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Barra de Integridade (Vida) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400">INTEGRIDADE</span>
              <span className={integrity <= 30 ? 'text-red-400' : 'text-emerald-400'}>{integrity}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className={`h-full transition-all duration-500 ease-out ${integrityColor}`}
                style={{ width: `${integrity}%` }}
              />
            </div>
          </div>

          {/* Barra de Risco (Fogo/Perigo) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400">NÍVEL DE PERIGO</span>
              <span className={dangerLevel >= 75 ? 'text-red-400' : 'text-orange-400'}>{dangerLevel}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className={`h-full transition-all duration-500 ease-out ${dangerColor}`}
                style={{ width: `${dangerLevel}%` }}
              />
            </div>
          </div>
        </div>

        {/* Inventário Equipado */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex justify-center gap-4 text-slate-500">
          <div className="flex flex-col items-center gap-1" title="Rádio HT">
            <Radio className="w-5 h-5 text-slate-400" />
            <span className="text-[9px]">RÁDIO</span>
          </div>
          <div className="flex flex-col items-center gap-1" title="Machado de Arrombamento">
            <Axe className="w-5 h-5 text-slate-400" />
            <span className="text-[9px]">MACHADO</span>
          </div>
          <div className="flex flex-col items-center gap-1" title="Kit Primeiros Socorros">
            <BriefcaseMedical className="w-5 h-5 text-slate-400" />
            <span className="text-[9px]">APH</span>
          </div>
        </div>
      </header>

      {/* Área Principal de Jogo */}
      <main className="w-full max-w-2xl mx-auto px-4 pt-8 flex-1 flex flex-col relative z-10">
        {gameState === 'playing' && (
          <div className="animate-fade-in space-y-8">
            {/* Cenário (Narrativa) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 opacity-50" />
              
              {currentScenario.imageUrl && (
                <div className="w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden border border-slate-700 relative">
                  <img src={currentScenario.imageUrl} alt={currentScenario.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
              )}

              <div className="flex flex-col items-center mb-6 text-orange-500">
                <div className="p-4 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4 mt-[-40px] z-10 relative bg-slate-900">
                  {getIcon(currentScenario.icon, "w-10 h-10")}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight text-center">
                  {currentScenario.title}
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans border-l-2 border-slate-700 pl-4">
                {currentScenario.description}
              </p>
            </div>

            {/* Painel de Escolhas */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 mb-2">
                Ações Táticas Disponíveis:
              </h3>
              {currentScenario.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChoice(choice)}
                  className="w-full text-left p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-500 transition-all group flex items-start gap-4 cursor-pointer"
                >
                  <span className="text-xs font-bold text-slate-600 group-hover:text-brand-500 mt-0.5">
                    {`> 0${idx + 1}`}
                  </span>
                  <span className="font-sans text-sm sm:text-base text-slate-300 group-hover:text-white leading-relaxed">
                    {choice.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Telas de Fim de Jogo */}
        {gameState === 'game-over' && (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
            <Skull className="w-20 h-20 text-red-600 mb-6" />
            <h1 className="text-4xl font-black text-white uppercase mb-2">Game Over</h1>
            <p className="text-slate-400 mb-8 max-w-md">
              {integrity <= 0 
                ? "Sua integridade chegou a 0%. Você sofreu ferimentos graves e não conseguiu completar a missão." 
                : "O nível de perigo chegou a 100%. A situação saiu de controle e a edificação foi tomada pelo desastre."}
            </p>
            <Button onClick={handleRestart} variant="primary" icon={<RotateCcw className="w-5 h-5"/>}>
              Tentar Novamente
            </Button>
          </div>
        )}

        {gameState === 'victory' && (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
            <Shield className="w-20 h-20 text-emerald-500 mb-6" />
            <h1 className="text-4xl font-black text-white uppercase mb-2">Missão Cumprida</h1>
            <p className="text-slate-400 mb-8 max-w-md">
              Excelente trabalho, Bombeiro! Você controlou o sinistro, preservou vidas e minimizou os danos ao patrimônio aplicando a doutrina técnica correta.
            </p>
            <Button onClick={handleRestart} variant="outline" className="text-white border-slate-700 hover:bg-slate-800">
              Jogar Novamente
            </Button>
          </div>
        )}
      </main>

      {/* Modal de Consequência (Feedback) */}
      {showModal && lastChoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className={`max-w-md w-full p-6 sm:p-8 rounded-2xl border shadow-2xl relative overflow-hidden ${
            lastChoice.isSuccess ? 'bg-slate-900 border-emerald-900/50' : 'bg-slate-900 border-red-900/50'
          }`}>
            
            {/* Brilho de fundo no modal */}
            <div className={`absolute top-0 left-0 w-full h-1 opacity-50 ${
              lastChoice.isSuccess ? 'bg-emerald-500' : 'bg-red-600'
            }`} />

            <div className="flex items-center gap-3 mb-5">
              {lastChoice.isSuccess ? (
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Shield className="w-6 h-6" />
                </div>
              ) : (
                <div className="p-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20">
                  <AlertTriangle className="w-6 h-6" />
                </div>
              )}
              <h3 className={`text-lg font-black uppercase tracking-wide ${
                lastChoice.isSuccess ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {lastChoice.isSuccess ? 'Ação Bem-Sucedida' : 'Falha Crítica'}
              </h3>
            </div>

            <p className="text-slate-300 font-sans leading-relaxed mb-6">
              {lastChoice.feedbackText}
            </p>

            <div className="flex items-center gap-4 mb-8 text-xs font-bold">
              {lastChoice.integrityChange !== 0 && (
                <div className="flex items-center gap-1.5 text-red-400">
                  <span>INTEGRIDADE:</span>
                  <span>{lastChoice.integrityChange > 0 ? '+' : ''}{lastChoice.integrityChange}</span>
                </div>
              )}
              {lastChoice.dangerChange !== 0 && (
                <div className="flex items-center gap-1.5 text-orange-400">
                  <span>PERIGO:</span>
                  <span>{lastChoice.dangerChange > 0 ? '+' : ''}{lastChoice.dangerChange}</span>
                </div>
              )}
            </div>

            <Button 
              onClick={handleNext} 
              fullWidth
              className={`py-3.5 shadow-none ${
                lastChoice.isSuccess 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}
            >
              {lastChoice.endGameState || (integrity <= 0 || dangerLevel >= 100) 
                ? 'Ver Relatório Final' 
                : 'Avançar >'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
