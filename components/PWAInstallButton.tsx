import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, Check, Share2, PlusSquare } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return (
      <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg">
        <Check className="w-3.5 h-3.5" /> App Instalado
      </span>
    );
  }

  // Chromium / Android / Desktop flow with active deferredPrompt
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Instalar App</span>
      </button>
    );
  }

  // Fallback / iOS or desktop browser where beforeinstallprompt hasn't fired yet or in iframe
  return (
    <>
      <button
        onClick={() => setShowGuide(true)}
        className="flex items-center gap-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md transition-colors"
        title="Instalar este app no seu celular ou computador (PWA)"
      >
        <Smartphone className="w-4 h-4" />
        <span>Instalar App</span>
      </button>

      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-md rounded-2xl bg-slate-800 border border-slate-700 p-6 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Instalar como Aplicativo (PWA)</h3>
                  <p className="text-xs text-slate-400">Funciona 100% offline no celular e no computador</p>
                </div>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              {isIOS ? (
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                  <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                    <Share2 className="w-4 h-4" /> No iPhone ou iPad (Safari):
                  </h4>
                  <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1">
                    <li>Toque no botão de <strong>Compartilhar</strong> (ícone de quadrado com seta para cima) na barra do Safari.</li>
                    <li>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong>.</li>
                    <li>Confirme tocando em <strong>"Adicionar"</strong> no canto superior direito.</li>
                  </ol>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                    <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                      <Smartphone className="w-4 h-4" /> No Android (Chrome / Edge):
                    </h4>
                    <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1">
                      <li>Toque no menu de <strong>3 pontinhos (⋮)</strong> no canto superior do navegador.</li>
                      <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
                      <li>Pronto! Ele abrirá em tela cheia como um app nativo.</li>
                    </ol>
                  </div>

                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                    <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                      <PlusSquare className="w-4 h-4" /> No Computador (Chrome / Edge / Brave):
                    </h4>
                    <p className="leading-relaxed">
                      Clique no ícone de <strong>instalar</strong> (um monitor com seta para baixo) na barra de endereços do navegador à direita da URL.
                    </p>
                  </div>
                </div>
              )}

              <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg text-emerald-300 flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Vantagem do PWA:</strong> O app é salvo na memória do seu dispositivo e funciona mesmo no subsolo do hospital sem sinal de rede!
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowGuide(false)}
              className="mt-2 w-full rounded-lg bg-slate-700 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-600 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstallButton;
