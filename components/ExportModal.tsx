import React, { useState } from 'react';
import { DRUG_CATEGORIES } from '../constants';
import { Download, FileSpreadsheet, FileCode, Check, X, ShieldCheck, Archive, Loader2 } from 'lucide-react';
import { downloadProjectZip } from '../utils/projectZip';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedJson, setCopiedJson] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const totalDrugs = DRUG_CATEGORIES.reduce((acc, cat) => acc + cat.drugs.length, 0);

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

  // Generate clean exportable JSON (strip functions)
  const getSerializableData = () => {
    return DRUG_CATEGORIES.map(category => ({
      category: category.name,
      drugs: category.drugs.map(drug => ({
        name: drug.name,
        description: drug.description,
        calculationType: drug.calculationType,
        unit: drug.unit,
        defaultDose: drug.defaultDose,
        doseRange: drug.doseRange,
        notes: drug.notes,
        maxTotalDoseMg: drug.maxTotalDoseMg,
        presentations: drug.presentations,
        dilutions: drug.dilutions,
      }))
    }));
  };

  const handleDownloadJSON = () => {
    const data = getSerializableData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medicamentos-emergencia.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadCSV = () => {
    const headers = [
      'Categoria',
      'Medicamento',
      'Tipo de Cálculo',
      'Unidade',
      'Dose Padrão',
      'Faixa de Dose',
      'Dose Máxima (mg)',
      'Apresentações Comerciais',
      'Diluições Recomendadas',
      'Observações Clínicas'
    ];

    const rows: string[][] = [];

    DRUG_CATEGORIES.forEach(cat => {
      cat.drugs.forEach(d => {
        const presentations = (d.presentations || [])
          .map(p => `${p.label} (${p.concentrationMg}mg/${p.volumeMl}ml)`)
          .join(' | ');

        const dilutions = (d.dilutions || [])
          .map(dil => `${dil.name}: ${dil.description} [${dil.useCase}]`)
          .join(' | ');

        rows.push([
          `"${cat.name.replace(/"/g, '""')}"`,
          `"${d.name.replace(/"/g, '""')}"`,
          `"${d.calculationType.replace(/"/g, '""')}"`,
          `"${d.unit.replace(/"/g, '""')}"`,
          `"${d.defaultDose}"`,
          `"${d.doseRange.replace(/"/g, '""')}"`,
          `"${d.maxTotalDoseMg ?? ''}"`,
          `"${presentations.replace(/"/g, '""')}"`,
          `"${dilutions.replace(/"/g, '""')}"`,
          `"${d.notes.replace(/"/g, '""')}"`
        ]);
      });
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medicamentos-emergencia.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyJSON = () => {
    const data = getSerializableData();
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Exportar Dados Clínicos</h2>
              <p className="text-xs text-slate-400">Total de {totalDrugs} medicamentos em {DRUG_CATEGORIES.length} categorias</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg flex items-start gap-3 text-xs text-emerald-200">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold text-emerald-300">100% Livre de Dependências e APIs</strong>
            Todos esses dados residem estaticamente no código. Eles podem ser portados para qualquer sistema, aplicativo mobile, banco de dados ou planilha sem necessidade de conexão com servidores.
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-700/60 rounded-xl space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg shrink-0">
                <Archive className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Baixar Projeto Completo (.ZIP)</h3>
                <p className="text-xs text-slate-300">
                  Baixe todos os arquivos prontos para subir ao GitHub (código React, Tailwind, GitHub Actions, README e fórmulas).
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-4 py-2.5 rounded-lg text-xs md:text-sm transition-all shadow-md"
          >
            {isZipping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Empacotando projeto...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Baixar Código-Fonte Completo (.zip)</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1">
                <FileCode className="w-4 h-4" /> Formato JSON
              </div>
              <p className="text-xs text-slate-400">
                Ideal para desenvolvedores, APIs locais, banco de dados NoSQL ou integração com novos softwares.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleDownloadJSON}
                className="flex-1 flex items-center justify-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-semibold px-3 py-2 rounded-md text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Baixar .json
              </button>
              <button
                onClick={handleCopyJSON}
                className="flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-2 rounded-md text-xs transition-colors"
                title="Copiar JSON"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm mb-1">
                <FileSpreadsheet className="w-4 h-4" /> Formato CSV / Excel
              </div>
              <p className="text-xs text-slate-400">
                Abre no Microsoft Excel, Google Planilhas ou LibreOffice com todas as colunas de dosagens e diluições.
              </p>
            </div>
            <button
              onClick={handleDownloadCSV}
              className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-2 rounded-md text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Baixar .csv (Planilha)
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800">
          <p className="font-semibold text-slate-300 mb-1">Onde esses dados estão no repositório GitHub?</p>
          <p>
            No repositório que você clonar ou subir, o arquivo principal com todos os medicamentos, doses e fórmulas é o <code className="text-cyan-300">constants.ts</code>. Para adicionar uma droga nova, basta adicioná-la nesse arquivo.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
