import React, { useState, useMemo } from 'react';
import { DRUG_CATEGORIES } from './constants';
import DrugCard from './components/DrugCard';
import ExportModal from './components/ExportModal';
import GithubGuideModal from './components/GithubGuideModal';
import PWAInstallButton from './components/PWAInstallButton';
import OfflineIndicator from './components/OfflineIndicator';
import { 
  Activity, 
  Download, 
  FolderGit2, 
  Search, 
  RotateCcw, 
  WifiOff, 
  ShieldCheck, 
  FileText,
  AlertTriangle
} from 'lucide-react';

export default function App() {
  const [weight, setWeight] = useState<number>(70);
  const [activeCategory, setActiveCategory] = useState<string>(DRUG_CATEGORIES[0].name);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [resetKey, setResetKey] = useState<number>(0);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isGithubGuideOpen, setIsGithubGuideOpen] = useState<boolean>(false);

  // Filter drugs based on category OR global search query
  const displayedDrugs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return DRUG_CATEGORIES.find(cat => cat.name === activeCategory)?.drugs || [];
    }

    // When searching, look across ALL categories
    const allDrugs = DRUG_CATEGORIES.flatMap(cat => 
      cat.drugs.map(drug => ({ ...drug, categoryName: cat.name }))
    );

    return allDrugs.filter(drug => 
      drug.name.toLowerCase().includes(query) ||
      drug.description.toLowerCase().includes(query) ||
      drug.categoryName.toLowerCase().includes(query) ||
      drug.notes.toLowerCase().includes(query)
    );
  }, [activeCategory, searchQuery]);

  const handleReset = () => {
    setWeight(70);
    setSearchQuery('');
    setActiveCategory(DRUG_CATEGORIES[0].name);
    setResetKey(prevKey => prevKey + 1);
  };

  const presetWeights = [50, 60, 70, 80, 90, 100];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-xl text-cyan-400 flex items-center justify-center">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Calculadora de Doses de Emergência
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2 py-0.5 rounded-full">
                  <WifiOff className="w-3 h-3" /> 100% Offline (Sem APIs)
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-400">
                  Cálculo local direto no navegador
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: PWA Install, Export & GitHub */}
          <div className="flex items-center gap-2">
            <PWAInstallButton />
            <button
              onClick={() => setIsExportOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors shadow-sm"
              title="Exportar dados para JSON ou CSV"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Exportar Dados</span>
            </button>
            <button
              onClick={() => setIsGithubGuideOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
              title="Ver comandos para exportar para o GitHub"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Como subir no GitHub</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-4 py-6 flex-grow space-y-6">
        {/* Patient Weight & Quick Search Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Weight Card (8 cols) */}
          <div className="lg:col-span-8 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="weight" className="text-sm font-semibold text-cyan-300 flex items-center gap-1.5">
                Peso do Paciente (kg)
              </label>
              <span className="text-xs text-slate-400">Todos os cálculos ajustam-se instantaneamente</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative flex-grow">
                <input
                  id="weight"
                  type="number"
                  min="1"
                  max="300"
                  step="0.5"
                  value={weight || ''}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  placeholder="Ex: 70"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-lg pointer-events-none">
                  kg
                </span>
              </div>
              <button
                onClick={handleReset}
                className="px-3 py-3 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Redefinir peso e campos"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Resetar</span>
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 font-medium">Pesos frequentes:</span>
              {presetWeights.map((pw) => (
                <button
                  key={pw}
                  onClick={() => setWeight(pw)}
                  className={`px-3 py-1 font-semibold rounded-md transition-all ${
                    weight === pw
                      ? 'bg-cyan-500 text-slate-900 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {pw} kg
                </button>
              ))}
            </div>
          </div>

          {/* Search Box (4 cols) */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md flex flex-col justify-between">
            <div>
              <label htmlFor="search" className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                <Search className="w-4 h-4 text-cyan-400" />
                Busca Rápida de Medicamentos
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ex: Noradrenalina, Fentanil..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-1.5 py-0.5 rounded"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              {searchQuery ? `Filtrando pelo termo "${searchQuery}" em todas as categorias` : 'Digite para pesquisar em todo o catálogo de emergência'}
            </p>
          </div>
        </div>

        {/* Category Navigation (only visible when not actively searching) */}
        {!searchQuery ? (
          <div className="border-b border-slate-700 overflow-x-auto pb-1 flex gap-2">
            {DRUG_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
                    isActive
                      ? 'bg-slate-800 text-cyan-400 border-cyan-400 shadow-sm'
                      : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {category.drugs.length}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700/60 p-3 rounded-lg text-sm">
            <span className="text-slate-300">
              Encontrados: <strong className="text-cyan-400">{displayedDrugs.length}</strong> medicamento(s) para "<strong>{searchQuery}</strong>"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-cyan-400 hover:underline"
            >
              Voltar para visão por categorias
            </button>
          </div>
        )}

        {/* Drug Cards Grid */}
        <div key={resetKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedDrugs.length > 0 ? (
            displayedDrugs.map((drug) => (
              <DrugCard key={drug.name} drug={drug} patientWeight={weight} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 bg-slate-800/40 rounded-xl border border-slate-700/60">
              <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-base font-semibold text-slate-200">Nenhum medicamento encontrado para "{searchQuery}".</p>
              <p className="text-xs text-slate-400 mt-1">Tente outro nome ou limpe a busca para navegar pelas categorias.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold rounded-md"
              >
                Limpar Busca
              </button>
            </div>
          )}
        </div>

        {/* Offline & GitHub Banner Callout */}
        <section className="bg-gradient-to-r from-slate-800 via-slate-800 to-indigo-950/40 border border-slate-700 rounded-xl p-5 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm md:text-base font-bold text-white">
                  Pronto para exportar e rodar sem nenhuma dependência de API
                </h3>
              </div>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Este projeto foi desenvolvido como aplicação 100% estática (React + Vite + Tailwind CSS). Todos os cálculos de doses, apresentações de ampolas e velocidades de bomba de infusão funcionam offline diretamente na máquina do usuário.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setIsExportOpen(true)}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Exportar JSON / CSV
              </button>
              <button
                onClick={() => setIsGithubGuideOpen(true)}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-colors shadow-md"
              >
                <FolderGit2 className="w-4 h-4" />
                Comandos Git Passo a Passo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/90 py-6 text-slate-400 text-xs">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            <p className="text-slate-300 font-semibold">Calculadora de Doses de Emergência & UTI</p>
            <p className="text-slate-500 mt-0.5">
              Ferramenta auxiliar de cálculo clínico. Não substitui o julgamento profissional e protocolos institucionais.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span>• 100% Client-side</span>
            <span>• Zero chamadas de API</span>
            <span>• Compatível com GitHub Pages</span>
          </div>
        </div>
      </footer>

      {/* Modals & PWA Offline Indicator */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
      <GithubGuideModal isOpen={isGithubGuideOpen} onClose={() => setIsGithubGuideOpen(false)} />
      <OfflineIndicator />
    </div>
  );
}