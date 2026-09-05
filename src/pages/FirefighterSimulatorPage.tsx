import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, Shield, AlertTriangle, CheckCircle, ChevronRight, 
  MapPin, Users, Building, Phone, User, Flame, BookOpen, GraduationCap 
} from 'lucide-react';

import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { calculateFirefighterNeeds } from '../utils/firefighterCalculator';
import type { 
  SimulatorFormData, 
  SimulatorResult, 
  FireRiskLevel 
} from '../types';

export const FirefighterSimulatorPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resultCardRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<SimulatorFormData>({
    occupationType: '',
    areaM2: 0,
    estimatedCrowd: 0,
    fireRisk: '',
    contactName: '',
    contactCompany: '',
    contactWhatsApp: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SimulatorFormData, string>>>({});
  const [result, setResult] = useState<SimulatorResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const formatWhatsApp = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'contactWhatsApp') {
      setFormData(prev => ({ ...prev, [name]: formatWhatsApp(value) }));
    } else if (name === 'areaM2' || name === 'estimatedCrowd') {
      setFormData(prev => ({ ...prev, [name]: Number(value) || 0 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
    if (errors[name as keyof SimulatorFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRiskChange = (risk: FireRiskLevel) => {
    setFormData(prev => ({ ...prev, fireRisk: risk }));
    if (errors.fireRisk) {
      setErrors(prev => ({ ...prev, fireRisk: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SimulatorFormData, string>> = {};
    
    if (!formData.occupationType) newErrors.occupationType = 'Selecione o tipo de ocupação';
    if (!formData.areaM2 || formData.areaM2 <= 0) newErrors.areaM2 = 'Informe a área em m²';
    if (!formData.estimatedCrowd || formData.estimatedCrowd <= 0) newErrors.estimatedCrowd = 'Informe o público estimado';
    if (!formData.fireRisk) newErrors.fireRisk = 'Selecione o risco de incêndio';
    if (!formData.contactName.trim()) newErrors.contactName = 'Informe seu nome';
    if (!formData.contactCompany.trim()) newErrors.contactCompany = 'Informe o nome da empresa';
    if (!formData.contactWhatsApp.trim() || formData.contactWhatsApp.replace(/\D/g, '').length < 10) {
      newErrors.contactWhatsApp = 'Informe um WhatsApp válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      // Find first error and scroll to it (simplified approach)
      return;
    }

    setIsCalculating(true);
    
    // Simulate slight delay for effect
    setTimeout(() => {
      const calcResult = calculateFirefighterNeeds(formData);
      setResult(calcResult);
      setIsCalculating(false);
      
      // Scroll to result on mobile
      if (window.innerWidth < 1024 && resultCardRef.current) {
        setTimeout(() => {
          resultCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }, 600);
  };

  const buildWhatsAppMessage = () => {
    if (!result) return '';
    
    const ocupacoes: Record<string, string> = {
      evento: 'Evento / Show / Feira',
      industria: 'Indústria / Galpão',
      shopping: 'Shopping / Comércio',
      condominio: 'Condomínio Residencial',
      hospital: 'Hospital / Clínica',
      escola: 'Escola / Universidade',
      outros: 'Outros'
    };
    
    return `Olá! Realizei uma simulação de dimensionamento de Bombeiro Civil no site.\n\n*Meus Dados:*\nNome: ${formData.contactName}\nEmpresa: ${formData.contactCompany}\n\n*Dados da Simulação:*\nOcupação: ${ocupacoes[formData.occupationType as string]}\nÁrea: ${formData.areaM2.toLocaleString('pt-BR')} m²\nPúblico: ${formData.estimatedCrowd.toLocaleString('pt-BR')} pessoas\nRisco: ${formData.fireRisk}\n\n*Resultado Estimado:*\n${result.minFirefighters} bombeiros por turno\nTotal: ${result.totalPerDay} bombeiros/dia\n\nGostaria de solicitar um orçamento personalizado para esta demanda.`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Header */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-600/20 blur-[120px]" />
          <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent-amber/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-400 ring-1 ring-inset ring-brand-500/20">
                <Flame className="w-4 h-4 mr-1.5" />
                Simulador Gratuito • Barros Prevenção
              </span>
              <div className="text-sm text-slate-400 flex items-center">
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-slate-300">Simulador de Dimensionamento</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Simule o Efetivo de Bombeiros Civis <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-amber">para sua Empresa ou Evento</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Garanta a segurança e fique em dia com a legislação (PPCI). Faça o cálculo agora baseado nas normas técnicas vigentes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column - Form */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-right">
                <div className="bg-white rounded-2xl shadow-card-soft border border-slate-100 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                      <Calculator className="w-6 h-6 mr-2 text-brand-600" />
                      Dados da Simulação
                    </h2>

                    <form onSubmit={handleCalculate} className="space-y-6">
                      
                      {/* Ocupação */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Tipo de Ocupação <span className="text-brand-600">*</span>
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <select 
                            name="occupationType"
                            value={formData.occupationType}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all appearance-none bg-slate-50 ${errors.occupationType ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-300'}`}
                          >
                            <option value="">-- Selecione o tipo de ocupação --</option>
                            <option value="evento">🎪 Evento / Show / Feira</option>
                            <option value="industria">🏭 Indústria / Galpão</option>
                            <option value="shopping">🏬 Shopping / Comércio</option>
                            <option value="condominio">🏢 Condomínio Residencial</option>
                            <option value="hospital">🏥 Hospital / Clínica</option>
                            <option value="escola">🎓 Escola / Universidade</option>
                            <option value="outros">📋 Outros</option>
                          </select>
                        </div>
                        {errors.occupationType && <p className="mt-1 text-sm text-brand-600">{errors.occupationType}</p>}
                      </div>

                      {/* Área */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-semibold text-slate-700">
                            Área Total (m²) <span className="text-brand-600">*</span>
                          </label>
                          <span className="text-brand-600 font-bold bg-brand-50 px-2 py-1 rounded text-sm">
                            {formData.areaM2.toLocaleString('pt-BR')} m²
                          </span>
                        </div>
                        <div className="relative mb-3">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <input 
                            type="number"
                            name="areaM2"
                            value={formData.areaM2 || ''}
                            onChange={handleInputChange}
                            placeholder="Ex: 2500"
                            min="0"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 ${errors.areaM2 ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-300'}`}
                          />
                        </div>
                        <input 
                          type="range" 
                          name="areaM2"
                          min="100" 
                          max="50000" 
                          step="100"
                          value={formData.areaM2 || 100}
                          onChange={handleInputChange}
                          className="w-full accent-brand-600"
                        />
                        {errors.areaM2 && <p className="mt-1 text-sm text-brand-600">{errors.areaM2}</p>}
                      </div>

                      {/* Público */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Público Estimado (Lotação) <span className="text-brand-600">*</span>
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <input 
                            type="number"
                            name="estimatedCrowd"
                            value={formData.estimatedCrowd || ''}
                            onChange={handleInputChange}
                            placeholder="Ex: 500 pessoas"
                            min="1"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 ${errors.estimatedCrowd ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-300'}`}
                          />
                        </div>
                        {errors.estimatedCrowd && <p className="mt-1 text-sm text-brand-600">{errors.estimatedCrowd}</p>}
                      </div>

                      {/* Risco */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Risco de Incêndio (Carga de Incêndio) <span className="text-brand-600">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => handleRiskChange('baixo')}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${formData.fireRisk === 'baixo' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'}`}
                          >
                            <div className="flex items-center mb-1">
                              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                              <span className="font-bold text-slate-800">Baixo</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-tight">Escritórios, residências, escolas pequenas</p>
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => handleRiskChange('medio')}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${formData.fireRisk === 'medio' ? 'border-accent-amber bg-amber-50' : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'}`}
                          >
                            <div className="flex items-center mb-1">
                              <div className="w-3 h-3 rounded-full bg-accent-amber mr-2"></div>
                              <span className="font-bold text-slate-800">Médio</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-tight">Comércios, shoppings, galpões comuns</p>
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => handleRiskChange('alto')}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${formData.fireRisk === 'alto' ? 'border-brand-600 bg-brand-50' : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'}`}
                          >
                            <div className="flex items-center mb-1">
                              <div className="w-3 h-3 rounded-full bg-brand-600 mr-2"></div>
                              <span className="font-bold text-slate-800">Alto</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-tight">Indústrias, depósitos inflamáveis</p>
                          </button>
                        </div>
                        {errors.fireRisk && <p className="mt-1 text-sm text-brand-600">{errors.fireRisk}</p>}
                      </div>

                      <hr className="border-slate-200 my-8" />
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Seus Dados de Contato</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Nome */}
                        <div>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input 
                              type="text"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleInputChange}
                              placeholder="Seu nome completo *"
                              className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 ${errors.contactName ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-300'}`}
                            />
                          </div>
                          {errors.contactName && <p className="mt-1 text-sm text-brand-600">{errors.contactName}</p>}
                        </div>
                        
                        {/* WhatsApp */}
                        <div>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input 
                              type="tel"
                              name="contactWhatsApp"
                              value={formData.contactWhatsApp}
                              onChange={handleInputChange}
                              placeholder="WhatsApp (00) 00000-0000 *"
                              maxLength={15}
                              className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 ${errors.contactWhatsApp ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-300'}`}
                            />
                          </div>
                          {errors.contactWhatsApp && <p className="mt-1 text-sm text-brand-600">{errors.contactWhatsApp}</p>}
                        </div>
                      </div>

                      {/* Empresa */}
                      <div>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <input 
                            type="text"
                            name="contactCompany"
                            value={formData.contactCompany}
                            onChange={handleInputChange}
                            placeholder="Nome da empresa ou evento *"
                            className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 ${errors.contactCompany ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-300'}`}
                          />
                        </div>
                        {errors.contactCompany && <p className="mt-1 text-sm text-brand-600">{errors.contactCompany}</p>}
                      </div>

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg" 
                          fullWidth 
                          icon={<Calculator size={20} />}
                        >
                          {isCalculating ? 'Calculando...' : 'Calcular Efetivo Necessário'}
                        </Button>
                      </div>

                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Result */}
            <div className="lg:col-span-5" ref={resultCardRef}>
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="sticky top-24">
                  
                  {!result ? (
                    <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                      {/* Pulse effect in background */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-600/10 rounded-full animate-ping" />
                      
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-lg border border-slate-700">
                          <Shield className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Aguardando Dados</h3>
                        <p className="text-slate-400">
                          Preencha os dados ao lado para calcular o efetivo de bombeiros civis necessário para a sua operação.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-900 rounded-2xl p-8 border-2 border-brand-600 shadow-emergency-lg relative overflow-hidden">
                      {/* Decorative top gradient */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-accent-amber" />
                      
                      <div className="mb-2">
                        <span className="inline-block bg-brand-600/20 text-brand-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Resultado da Simulação
                        </span>
                      </div>
                      
                      <div className="text-center py-6">
                        <div className="flex justify-center items-end gap-2 mb-1">
                          <span className="text-7xl font-bold text-white leading-none">{result.minFirefighters}</span>
                        </div>
                        <p className="text-lg font-medium text-slate-300">Bombeiros Civis por Turno</p>
                        
                        <div className="mt-4 inline-flex items-center justify-center bg-slate-800 rounded-lg px-4 py-2 text-sm text-slate-300">
                          <span className="font-bold text-white mx-1">{result.turnsPerDay}</span> turnos × <span className="font-bold text-white mx-1">{result.minFirefighters}</span> = <span className="font-bold text-accent-amber mx-1">{result.totalPerDay}</span> total/dia
                        </div>
                      </div>

                      <div className="bg-brand-950/50 border border-brand-900 rounded-xl p-4 mb-6">
                        <h4 className="font-semibold text-white mb-2 flex items-center">
                          <CheckCircle className="w-5 h-5 text-brand-500 mr-2" />
                          Recomendação
                        </h4>
                        <p className="text-sm text-slate-300 mb-3">{result.recommendation}</p>
                        
                        <ul className="space-y-2">
                          {result.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-400">
                              <span className="text-brand-500 mr-2 mt-0.5">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-start p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg mb-8">
                        <AlertTriangle className="w-5 h-5 text-accent-amber mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-400 leading-relaxed">
                          <strong className="text-slate-300">Aviso Legal:</strong> Cálculo estimado com base em referências técnicas (IT-17/CBMERJ, NBR 14608). Sujeito a análise do projeto técnico contra incêndio (PPCI).
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Button 
                          href={getWhatsAppUrl(buildWhatsAppMessage())}
                          variant="primary" 
                          fullWidth 
                          className="animate-pulse-slow shadow-emergency"
                        >
                          Solicitar Orçamento Personalizado
                        </Button>
                        <Button 
                          href={getWhatsAppUrl('Olá! Fiz uma simulação de dimensionamento de Bombeiro Civil no site e gostaria de falar com um especialista.')}
                          variant="outline" 
                          fullWidth
                          className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-800"
                        >
                          Falar com Especialista
                        </Button>
                      </div>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-slate-50 rounded-2xl p-6 h-full border border-slate-100 hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Por que contratar Bombeiros Civis?</h3>
                <p className="text-slate-600">
                  Além de ser uma exigência legal para diversos tipos de edificações e eventos, o Bombeiro Civil atua na prevenção, garantindo a rápida resposta a princípios de incêndio e emergências médicas, protegendo vidas e patrimônios.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-slate-50 rounded-2xl p-6 h-full border border-slate-100 hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">O que diz a legislação?</h3>
                <p className="text-slate-600">
                  O dimensionamento considera a NBR 14608 e legislações estaduais (como a IT-17 no RJ e IT-14 em SP). A Lei Federal 11.901 regulamenta a profissão, estabelecendo jornada de trabalho e obrigações.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-slate-50 rounded-2xl p-6 h-full border border-slate-100 hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Formação de Qualidade</h3>
                <p className="text-slate-600 mb-4">
                  A Barros Prevenção não apenas dimensiona o efetivo, mas também forma e capacita os melhores profissionais do mercado, com treinamentos práticos e atualizados.
                </p>
                <Link to="/#cursos" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                  Conheça nossos cursos <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="bg-slate-900 py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Precisa de Bombeiros Civis treinados e certificados?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={getWhatsAppUrl()} variant="primary" icon={<Phone size={18} />}>
                Falar no WhatsApp
              </Button>
              <Button href="/#cursos" variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-800">
                Ver Curso de Bombeiro Civil
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
