import React, { useState, useMemo, useEffect } from 'react';
import type { Drug, CalculationResult, DilutionInfo } from '../types';
import DilutionModal from './DilutionModal';

interface DrugCardProps {
  drug: Drug;
  patientWeight: number;
}

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);

const WarningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);

const BeakerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H7zM5 6h10v10H5V6zm2 1a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);


const DrugCard: React.FC<DrugCardProps> = ({ drug, patientWeight }) => {
  const [ampuleConcentrationMg, setAmpuleConcentrationMg] = useState<number | ''>(
    drug.presentations && drug.presentations.length === 1 ? drug.presentations[0].concentrationMg : ''
  );
  const [ampuleVolumeMl, setAmpuleVolumeMl] = useState<number | ''>(
    drug.presentations && drug.presentations.length === 1 ? drug.presentations[0].volumeMl : ''
  );
  const [dose, setDose] = useState<number | ''>(drug.defaultDose);
  const [solutionVolumeMl, setSolutionVolumeMl] = useState<number>(250);
  const [isDilutionModalOpen, setIsDilutionModalOpen] = useState(false);

  useEffect(() => {
    setDose(drug.defaultDose);
    if (drug.presentations && drug.presentations.length === 1) {
        setAmpuleConcentrationMg(drug.presentations[0].concentrationMg);
        setAmpuleVolumeMl(drug.presentations[0].volumeMl);
    } else {
        setAmpuleConcentrationMg('');
        setAmpuleVolumeMl('');
    }
  }, [drug]);

  const handleApplyDilution = (dilution: DilutionInfo) => {
    setAmpuleConcentrationMg(dilution.totalDrugMg);
    setAmpuleVolumeMl(dilution.finalVolumeMl);
    // For infusions, also set the solution volume if it's different from default
    if (drug.calculationType === 'infusion' && dilution.finalVolumeMl !== solutionVolumeMl) {
        setSolutionVolumeMl(dilution.finalVolumeMl);
    }
    setIsDilutionModalOpen(false);
  };

  const maxDose = useMemo(() => {
    const match = drug.doseRange.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/);
    if (match && match[2]) {
      return parseFloat(match[2]);
    }
    return null;
  }, [drug.doseRange]);

  const isDoseHigh = useMemo(() => {
    if (maxDose === null || dose === '') return false;
    return dose > maxDose;
  }, [dose, maxDose]);

  const calculationResult: CalculationResult = useMemo(() => {
    if (!patientWeight || ampuleConcentrationMg === '' || ampuleVolumeMl === '' || dose === '') {
      return { formula: "Aguardando dados..." };
    }
    return drug.calculate({ 
        weight: patientWeight, 
        ampuleConcentrationMg,
        ampuleVolumeMl, 
        dose,
        solutionVolumeMl,
        maxTotalDoseMg: drug.maxTotalDoseMg
    });
  }, [patientWeight, ampuleConcentrationMg, ampuleVolumeMl, dose, solutionVolumeMl, drug]);
  
  const doseRangeCalculation = useMemo(() => {
    if (!patientWeight || ampuleConcentrationMg === '' || ampuleVolumeMl === '') {
      return null;
    }

    const match = drug.doseRange.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/);
    if (!match || !match[1] || !match[2]) {
      return null;
    }

    const minDose = parseFloat(match[1]);
    const maxDose = parseFloat(match[2]);

    const commonParams = {
      weight: patientWeight,
      ampuleConcentrationMg,
      ampuleVolumeMl,
      solutionVolumeMl,
      maxTotalDoseMg: drug.maxTotalDoseMg
    }

    const minResult = drug.calculate({ ...commonParams, dose: minDose });
    const maxResult = drug.calculate({ ...commonParams, dose: maxDose });

    const resultKey = drug.calculationType === 'bolus' ? 'bolusMl' : 'infusionMlH';
    const unit = drug.calculationType === 'bolus' ? 'ml' : 'ml/h';

    const minVal = minResult[resultKey];
    const maxVal = maxResult[resultKey];
    
    if (!minVal || !maxVal) return null;

    const finalMin = minResult.cappedResultMl ?? minVal;
    const finalMax = maxResult.cappedResultMl ?? maxVal;

    return `${finalMin} - ${finalMax} ${unit}`;

}, [patientWeight, ampuleConcentrationMg, ampuleVolumeMl, solutionVolumeMl, drug]);


  const renderResult = () => {
    const isBolus = drug.calculationType === 'bolus';
    const resultKey = isBolus ? 'bolusMl' : 'infusionMlH';
    const resultValue = calculationResult.cappedResultMl ?? calculationResult[resultKey];
    const unit = isBolus ? 'ml' : 'ml/h';
    const label = isBolus ? 'Volume a ser administrado' : 'Velocidade de Infusão';

    return (
        <>
            {calculationResult.maxDoseWarning && isBolus && (
                <div className="text-sm text-red-400 flex items-start gap-2 p-2 rounded-md bg-red-500/10 border border-red-500/30">
                    <WarningIcon />
                    <div>
                        <p className="font-semibold">Dose Máxima Excedida</p>
                        <p>{calculationResult.maxDoseWarning}</p>
                        <p className="text-xs">O volume foi ajustado para a dose máxima.</p>
                    </div>
                </div>
            )}
            <div className="bg-cyan-900/50 p-4 rounded-md text-center">
                <p className="text-sm text-cyan-200">{label}</p>
                <p className="text-3xl font-bold text-white tracking-tight">
                    {resultValue ?? '--'} <span className="text-xl">{unit}</span>
                </p>
            </div>
             {doseRangeCalculation && (
                <div className="text-center text-xs text-slate-400 pt-1">
                    <p className="font-semibold">Faixa de dose recomendada:</p>
                    <p>{doseRangeCalculation}</p>
                </div>
            )}
        </>
    );
  }

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-cyan-500/20 hover:ring-1 hover:ring-slate-700">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-xl font-bold text-slate-100">{drug.name}</h3>
        <p className="text-sm text-slate-400">{drug.description}</p>
      </div>

      <div className="p-4 space-y-4 flex-grow">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-slate-300">
              {drug.calculationType === 'infusion' ? 'Concentração da Solução Final' : 'Concentração da Ampola'}
            </label>
            {drug.dilutions && drug.dilutions.length > 0 && (
                <button
                    onClick={() => setIsDilutionModalOpen(true)}
                    className="p-1 rounded-full text-cyan-400 hover:bg-slate-700 transition-colors"
                    title="Ver diluições comuns"
                >
                    <BeakerIcon />
                </button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="relative">
              <input
                type="number"
                value={ampuleConcentrationMg}
                onChange={(e) => setAmpuleConcentrationMg(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Valor"
                className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
                {drug.name === 'Vasopressina' ? 'U' : 'mg'}
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={ampuleVolumeMl}
                onChange={(e) => setAmpuleVolumeMl(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Valor"
                className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">ml</span>
            </div>
          </div>
          {drug.presentations && drug.presentations.length > 0 && (
            <div className="mt-2">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-slate-400">Padrões:</span>
                    {drug.presentations.map((p) => (
                        <button
                            key={p.label}
                            onClick={() => {
                                setAmpuleConcentrationMg(p.concentrationMg);
                                setAmpuleVolumeMl(p.volumeMl);
                            }}
                            className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded-md transition-colors text-slate-300"
                            title={`Definir concentração para ${p.concentrationMg}${drug.name === 'Vasopressina' ? 'U' : 'mg'} / ${p.volumeMl}ml`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>
          )}
        </div>

        <div>
            <label className="text-sm font-medium text-slate-300 block mb-1">
                Dose ({drug.unit})
                <span className="text-xs text-slate-400 ml-2">({drug.doseRange})</span>
            </label>
            <input
              type="number"
              step={drug.unit === 'mcg/kg/min' || drug.unit === 'U/min' ? '0.01' : '0.1'}
              value={dose}
              onChange={(e) => setDose(e.target.value === '' ? '' : parseFloat(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"
            />
            {isDoseHigh && (
                <div className="mt-2 text-sm text-yellow-400 flex items-center gap-2 p-2 rounded-md bg-yellow-500/10 border border-yellow-500/30">
                    <WarningIcon />
                    <span>A dose inserida está acima da faixa recomendada.</span>
                </div>
            )}
        </div>

        {drug.calculationType === 'infusion' && (
            <div>
                <label className="text-sm font-medium text-slate-300 block mb-1">Volume da Solução (ml)</label>
                <input
                    type="number"
                    value={solutionVolumeMl}
                    onChange={(e) => setSolutionVolumeMl(parseFloat(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"
                />
            </div>
        )}
      </div>

      <div className="p-4 bg-slate-800/50 space-y-3">
        {renderResult()}
        <div className="text-xs text-slate-500 text-center italic h-4">
            {calculationResult.formula}
        </div>
      </div>
      <div className="px-4 py-2 bg-slate-900/50 text-slate-400 text-xs flex items-start space-x-2">
        <InfoIcon />
        <span>{drug.notes}</span>
      </div>
      {drug.dilutions && (
        <DilutionModal
            isOpen={isDilutionModalOpen}
            onClose={() => setIsDilutionModalOpen(false)}
            drug={drug}
            onApply={handleApplyDilution}
        />
      )}
    </div>
  );
};

export default DrugCard;
