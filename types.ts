export type Unit = 'mg/kg' | 'mcg/kg' | 'mcg/kg/min' | 'mg/kg/h' | 'U/min';
export type CalculationType = 'bolus' | 'infusion';

export interface AmpulePresentation {
  label: string;
  concentrationMg: number;
  volumeMl: number;
}

export interface DilutionInfo {
  name: string;
  description: string;
  totalDrugMg: number;
  finalVolumeMl: number;
  finalConcentrationMgMl: number;
  useCase: string;
}

export interface CalculationParams {
  weight: number;
  ampuleConcentrationMg: number;
  ampuleVolumeMl: number;
  dose: number;
  solutionVolumeMl?: number;
  maxTotalDoseMg?: number;
}

export interface CalculationResult {
  bolusMl?: string;
  infusionMlH?: string;
  infusionMcgKgMin?: string;
  finalConcentrationMgMl?: string;
  formula: string;
  maxDoseWarning?: string;
  cappedResultMl?: string;
}

export interface Drug {
  name: string;
  description: string;
  calculationType: CalculationType;
  unit: Unit;
  defaultDose: number;
  doseRange: string;
  notes: string;
  presentations?: AmpulePresentation[];
  dilutions?: DilutionInfo[];
  maxTotalDoseMg?: number;
  calculate: (params: CalculationParams) => CalculationResult;
}

export interface DrugCategory {
  name: string;
  drugs: Drug[];
}
