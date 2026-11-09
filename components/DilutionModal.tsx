import React from 'react';
import type { Drug, DilutionInfo } from '../types';

interface DilutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  drug: Drug;
  onApply: (dilution: DilutionInfo) => void;
}

const DilutionModal: React.FC<DilutionModalProps> = ({ isOpen, onClose, drug, onApply }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-700 sticky top-0 bg-slate-800 z-10">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-cyan-400">Diluições Comuns para {drug.name}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          {drug.dilutions?.map((dilution, index) => (
            <div key={index} className="bg-slate-900/50 p-4 rounded-md border border-slate-700">
              <h4 className="font-semibold text-slate-100">{dilution.name}</h4>
              <p className="text-sm text-slate-300 mt-1">
                <span className="font-semibold text-cyan-300">Preparo:</span> {dilution.description}
              </p>
              <p className="text-sm text-slate-300 mt-1">
                <span className="font-semibold text-cyan-300">Concentração Final:</span> {dilution.finalConcentrationMgMl.toFixed(3)} {drug.name === 'Vasopressina' ? 'U' : 'mg'}/ml
              </p>
               <p className="text-sm text-slate-400 mt-1 italic">{dilution.useCase}</p>
              <button 
                onClick={() => onApply(dilution)}
                className="mt-3 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Aplicar esta diluição
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DilutionModal;
