import React, { useState } from 'react';
import { GitBranch, Copy, Check, X, Globe, Terminal, ShieldCheck, Sparkles, FolderGit2, Download, Archive, Loader2, ExternalLink } from 'lucide-react';
import { downloadProjectZip } from '../utils/projectZip';

interface GithubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubGuideModal: React.FC<GithubGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      await downloadProjectZip();
    } catch (err) {
      console.error('Falha ao gerar ZIP:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const gitSteps = [
    {
      title: '1. Iniciar o Git no projeto',
      cmd: 'git init',
      desc: 'Inicializa o controle de versão na pasta do projeto.'
    },
    {
      title: '2. Adicionar todos os arquivos',
      cmd: 'git add .',
      desc: 'Prepara todos os componentes, constantes médicas e configurações.'
    },
    {
      title: '3. Fazer o primeiro commit',
      cmd: 'git commit -m "feat: Calculadora de doses de emergência (100% offline)"',
      desc: 'Salva o histórico da versão inicial.'
    },
    {
      title: '4. Definir a branch principal como main',
      cmd: 'git branch -M main',
      desc: 'Garante o padrão moderno do GitHub.'
    },
    {
      title: '5. Conectar com o seu repositório no GitHub',
      cmd: 'git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git',
      desc: 'Substitua "SEU-USUARIO/SEU-REPOSITORIO" pelo link criado em github.com/new.'
    },
    {
      title: '6. Enviar o código para o GitHub',
      cmd: 'git push -u origin main',
      desc: 'Sobe todos os arquivos para a nuvem.'
    }
  ];

  const allCommands = `# Passo a passo completo para exportar para o GitHub:
git init
git add .
git commit -m "feat: Calculadora de doses de emergência (100% offline)"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main`;

  const copyToClipboard = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    if (typeof index === 'number') {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } else {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-2xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Como Exportar para o GitHub</h2>
              <p className="text-xs text-slate-400">Guia de publicação autônoma & sem necessidade de API</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resposta direta para a dúvida do usuário */}
        <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Funciona independentemente de API? SIM! 100% autônomo.</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Esta calculadora é uma aplicação <strong>Client-Side pura (React + Vite + Tailwind)</strong>. Todos os cálculos matemáticos clínicos (bolus em mg e mcg, bombas de infusão em mcg/kg/min, mg/kg/h, unidades de vasopressina e limites de segurança) rodam diretamente dentro do JavaScript do navegador do usuário.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-emerald-300">
            <span className="px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60">✓ Zero chamadas de API</span>
            <span className="px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60">✓ Zero custos de servidor</span>
            <span className="px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60">✓ Funciona offline no celular ou PC</span>
          </div>
        </div>

        {/* Opção 1: Download direto do ZIP */}
        <div className="bg-gradient-to-r from-indigo-950/70 to-slate-900 border border-indigo-700/60 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Archive className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">Opção 1: Exportar direto por aqui (Download .ZIP)</h3>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">
              Mais Simples
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Você pode baixar todos os arquivos organizados neste exato momento. Depois, basta criar um repositório vazio no GitHub e arrastar os arquivos na opção <strong>"Upload files"</strong> do site.
          </p>
          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors shadow-sm"
          >
            {isZipping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Empacotando projeto...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Baixar Projeto Completo para o GitHub (.ZIP)</span>
              </>
            )}
          </button>
        </div>

        {/* Opção 2: Passos do terminal */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Opção 2: Subir via Terminal com Git
            </h3>
            <button
              onClick={() => copyToClipboard(allCommands)}
              className="flex items-center gap-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-cyan-300 px-2.5 py-1 rounded transition-colors"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedAll ? 'Copiado!' : 'Copiar todos'}
            </button>
          </div>

          <div className="space-y-2.5">
            {gitSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">{step.title}</span>
                  <button
                    onClick={() => copyToClipboard(step.cmd, idx)}
                    className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-cyan-300 transition-colors"
                    title="Copiar comando"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <pre className="text-xs bg-black/60 p-2 rounded text-cyan-300 font-mono overflow-x-auto selection:bg-cyan-500 selection:text-slate-900">
                  {step.cmd}
                </pre>
                <p className="text-[11px] text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Como ativar GitHub Pages */}
        <div className="p-4 bg-slate-900 border border-slate-700/80 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
            <Globe className="w-4 h-4" />
            <span>Como colocar online de graça no GitHub Pages:</span>
          </div>
          <ol className="text-xs text-slate-300 list-decimal list-inside space-y-1">
            <li>No GitHub, abra a aba <strong>Settings</strong> do seu repositório.</li>
            <li>No menu lateral, clique em <strong>Pages</strong>.</li>
            <li>Em <em>Build and deployment &gt; Source</em>, selecione <strong>GitHub Actions</strong>.</li>
            <li>O arquivo <code className="text-cyan-300">.github/workflows/deploy.yml</code> (já incluído no projeto) fará o build e criará o seu link web público gratuito em segundos!</li>
          </ol>
        </div>

        {/* Rodar localmente */}
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
          <span>Para rodar no seu computador: <code className="text-cyan-300">npm install</code> e depois <code className="text-cyan-300">npm run dev</code></span>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors"
          >
            Entendido, fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default GithubGuideModal;
