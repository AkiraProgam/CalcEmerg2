import { DrugCategory, CalculationParams, CalculationResult, Drug } from './types';

const calculateBolus = (params: CalculationParams): CalculationResult => {
  const { weight, ampuleConcentrationMg, ampuleVolumeMl, dose, maxTotalDoseMg } = params;
  if (!weight || !ampuleConcentrationMg || !ampuleVolumeMl || !dose) {
    return { formula: "Preencha todos os campos." };
  }
  const drugConcentrationMgMl = ampuleConcentrationMg / ampuleVolumeMl;
  if (drugConcentrationMgMl === 0) return { formula: "Concentração inválida."};
  const totalDoseMg = dose * weight;
  const bolusMl = totalDoseMg / drugConcentrationMgMl;

  const result: CalculationResult = {
    bolusMl: bolusMl.toFixed(2),
    formula: `(${dose} mg/kg * ${weight} kg) / (${ampuleConcentrationMg} mg / ${ampuleVolumeMl} ml) = ${bolusMl.toFixed(2)} ml`,
  };

  if (maxTotalDoseMg && totalDoseMg > maxTotalDoseMg) {
    const cappedMl = maxTotalDoseMg / drugConcentrationMgMl;
    result.cappedResultMl = cappedMl.toFixed(2);
    result.maxDoseWarning = `Dose (${totalDoseMg.toFixed(1)}mg) excede o máximo de ${maxTotalDoseMg}mg.`;
  }

  return result;
};

const calculateBolusMcg = (params: CalculationParams): CalculationResult => {
    const { weight, ampuleConcentrationMg, ampuleVolumeMl, dose, maxTotalDoseMg } = params;
    if (!weight || !ampuleConcentrationMg || !ampuleVolumeMl || !dose) {
      return { formula: "Preencha todos os campos." };
    }
    const drugConcentrationMgMl = ampuleConcentrationMg / ampuleVolumeMl;
    if (drugConcentrationMgMl === 0) return { formula: "Concentração inválida."};
    const totalDoseMcg = dose * weight;
    const totalDoseMg = totalDoseMcg / 1000;
    const bolusMl = totalDoseMg / drugConcentrationMgMl;
  
    const result: CalculationResult = {
      bolusMl: bolusMl.toFixed(2),
      formula: `((${dose} mcg/kg * ${weight} kg) / 1000) / (${ampuleConcentrationMg} mg / ${ampuleVolumeMl} ml) = ${bolusMl.toFixed(2)} ml`,
    };

    if (maxTotalDoseMg && totalDoseMg > maxTotalDoseMg) {
        const cappedMl = maxTotalDoseMg / drugConcentrationMgMl;
        result.cappedResultMl = cappedMl.toFixed(2);
        result.maxDoseWarning = `Dose (${totalDoseMg.toFixed(1)}mg) excede o máximo de ${maxTotalDoseMg}mg.`;
    }

    return result;
  };

const calculateInfusion = (params: CalculationParams): CalculationResult => {
  const { weight, ampuleConcentrationMg, dose, solutionVolumeMl = 250 } = params;
   if (!weight || !ampuleConcentrationMg || !dose || !solutionVolumeMl) {
    return { formula: "Preencha todos os campos." };
  }
  
  // Corrected logic: ampuleConcentrationMg is the TOTAL drug in the solutionVolumeMl.
  const finalConcentrationMgMl = ampuleConcentrationMg / solutionVolumeMl;
  const finalConcentrationMcgMl = finalConcentrationMgMl * 1000;
  if (finalConcentrationMcgMl === 0) return { formula: "Concentração final inválida."};


  const infusionMcgMin = dose * weight;
  const infusionMlMin = infusionMcgMin / finalConcentrationMcgMl;
  const infusionMlH = infusionMlMin * 60;
  
  return {
    infusionMlH: infusionMlH.toFixed(2),
    finalConcentrationMgMl: finalConcentrationMgMl.toFixed(2),
    formula: `Dose: ${dose} mcg/kg/min. Infusão: ${infusionMlH.toFixed(2)} ml/h`,
  };
};

const calculateInfusionMgKgH = (params: CalculationParams): CalculationResult => {
    const { weight, ampuleConcentrationMg, dose, solutionVolumeMl = 250 } = params;
    if (!weight || !ampuleConcentrationMg || !dose || !solutionVolumeMl) {
      return { formula: "Preencha todos os campos." };
    }
    
    // Corrected logic: ampuleConcentrationMg is the TOTAL drug in the solutionVolumeMl.
    const finalConcentrationMgMl = ampuleConcentrationMg / solutionVolumeMl;
    if (finalConcentrationMgMl === 0) return { formula: "Concentração final inválida."};

    const totalDoseMgH = dose * weight;
    const infusionMlH = totalDoseMgH / finalConcentrationMgMl;
    
    return {
      infusionMlH: infusionMlH.toFixed(2),
      finalConcentrationMgMl: finalConcentrationMgMl.toFixed(2),
      formula: `Dose: ${dose} mg/kg/h. Infusão: ${infusionMlH.toFixed(2)} ml/h`,
    };
  };

export const DRUG_CATEGORIES: DrugCategory[] = [
  {
    name: 'Indução e Intubação',
    drugs: [
      {
        name: 'Fentanil',
        description: 'Analgésico opioide potente.',
        calculationType: 'bolus',
        unit: 'mcg/kg',
        defaultDose: 2,
        doseRange: '1 - 3 mcg/kg',
        notes: 'Administrar lentamente para evitar rigidez torácica.',
        presentations: [
          { label: '250mcg/5ml', concentrationMg: 0.25, volumeMl: 5 },
          { label: '500mcg/10ml', concentrationMg: 0.5, volumeMl: 10 },
        ],
        dilutions: [
            {
              name: 'Diluição Padrão (10 mcg/ml)',
              description: '1 ampola (500mcg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 0.5,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 0.01,
              useCase: 'Para administração em bolus fracionados e seguros.'
            }
        ],
        calculate: calculateBolusMcg,
      },
      {
        name: 'Midazolam',
        description: 'Benzodiazepínico para sedação.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 0.2,
        doseRange: '0.1 - 0.3 mg/kg',
        notes: 'Pode causar hipotensão, especialmente em idosos ou instáveis.',
        presentations: [
          { label: '15mg/3ml', concentrationMg: 15, volumeMl: 3 },
          { label: '5mg/5ml', concentrationMg: 5, volumeMl: 5 },
          { label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 },
        ],
        dilutions: [
            {
              name: 'Diluição para Bolus (1mg/ml)',
              description: '1 ampola (50mg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 50,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 1,
              useCase: 'Para administração em bolus lento e seguro.'
            },
            {
                name: 'Diluição para Bolus (1.5mg/ml)',
                description: '1 ampola (15mg/3ml) + 7ml de SF 0.9%',
                totalDrugMg: 15,
                finalVolumeMl: 10,
                finalConcentrationMgMl: 1.5,
                useCase: 'Alternativa para bolus, usando ampola de 15mg.'
            }
        ],
        calculate: calculateBolus,
      },
      {
        name: 'Propofol',
        description: 'Agente hipnótico de ação curta.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 2,
        doseRange: '1.5 - 2.5 mg/kg',
        notes: 'Causa apneia e hipotensão. Geralmente não é diluído para bolus.',
        presentations: [{ label: '200mg/20ml', concentrationMg: 200, volumeMl: 20 }],
        calculate: calculateBolus,
      },
      {
        name: 'Cetamina',
        description: 'Anestésico dissociativo.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1.5,
        doseRange: '1 - 2 mg/kg',
        notes: 'Ideal para pacientes instáveis hemodinamicamente. Aumenta a secreção.',
        presentations: [{ label: '500mg/10ml', concentrationMg: 500, volumeMl: 10 }],
        dilutions: [
            {
              name: 'Diluição Padrão (10mg/ml)',
              description: '1 ampola (500mg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 500,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 10,
              useCase: 'Para administração em bolus e evitar flebite.'
            }
        ],
        calculate: calculateBolus,
      },
      {
        name: 'Succinilcolina',
        description: 'Bloqueador neuromuscular despolarizante.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1.5,
        doseRange: '1 - 2 mg/kg',
        notes: 'Causa fasciculações. Contraindicada em hipercalemia. Geralmente não é diluída.',
        maxTotalDoseMg: 150,
        presentations: [{ label: '100mg/10ml', concentrationMg: 100, volumeMl: 10 }],
        calculate: calculateBolus,
      },
      {
        name: 'Rocurônio',
        description: 'Bloqueador neuromuscular não-despolarizante.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1,
        doseRange: '0.6 - 1.2 mg/kg',
        notes: 'Dose de 1.2 mg/kg para sequência rápida. Geralmente não é diluído.',
        presentations: [{ label: '50mg/5ml', concentrationMg: 50, volumeMl: 5 }],
        calculate: calculateBolus,
      },
    ],
  },
  {
    name: 'Drogas Vasoativas (DVA)',
    drugs: [
      {
        name: 'Noradrenalina',
        description: 'Vasopressor de primeira escolha no choque séptico.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 0.1,
        doseRange: '0.01 - 3 mcg/kg/min',
        notes: 'Diluição: informar o total de mg adicionado na solução.',
        presentations: [{ label: '4mg/4ml', concentrationMg: 4, volumeMl: 4 }],
        dilutions: [
            {
                name: 'Padrão UTI (16mg/250ml)',
                description: '4 ampolas (4mg/4ml) em 234ml de SG 5%',
                totalDrugMg: 16,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 16/250,
                useCase: 'Diluição padrão para infusão contínua em UTI.'
            },
            {
                name: 'Concentrada (32mg/250ml)',
                description: '8 ampolas (4mg/4ml) em 218ml de SG 5%',
                totalDrugMg: 32,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 32/250,
                useCase: 'Para pacientes com restrição hídrica.'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Dobutamina',
        description: 'Agente inotrópico para choque cardiogênico.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 5,
        doseRange: '2 - 20 mcg/kg/min',
        notes: 'Diluição: informar o total de mg adicionado na solução.',
        presentations: [{ label: '250mg/20ml', concentrationMg: 250, volumeMl: 20 }],
        dilutions: [
            {
                name: 'Padrão UTI (250mg/250ml)',
                description: '1 ampola (250mg/20ml) em 230ml de SG 5%',
                totalDrugMg: 250,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição comum para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Dopamina',
        description: 'Precursor da noradrenalina com efeitos dose-dependentes.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 5,
        doseRange: '2 - 20 mcg/kg/min',
        notes: 'Efeitos variam com a dose. Menos utilizada atualmente.',
        presentations: [{ label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 }],
        calculate: calculateInfusion,
      },
      {
        name: 'Vasopressina',
        description: 'Hormônio antidiurético com efeito vasopressor.',
        calculationType: 'infusion',
        unit: 'U/min',
        defaultDose: 0.03,
        doseRange: '0.01 - 0.04 U/min',
        notes: 'Dose fixa em U/min. Informar o total de Unidades (U) na solução.',
        presentations: [{ label: '20U/1ml', concentrationMg: 20, volumeMl: 1 }],
        dilutions: [
            {
                name: 'Padrão UTI (100U/100ml)',
                description: '5 ampolas (20U/1ml) em 95ml de SF 0.9%',
                totalDrugMg: 100, // Representa Unidades aqui
                finalVolumeMl: 100,
                finalConcentrationMgMl: 1, // Representa 1 U/ml
                useCase: 'Diluição padrão para infusão contínua (1U/ml).'
            }
        ],
        calculate: (params) => {
          const { ampuleConcentrationMg, dose, solutionVolumeMl = 100 } = params;
          if (!ampuleConcentrationMg || !dose || !solutionVolumeMl) {
            return { formula: "Preencha todos os campos." };
          }
          // Para Vasopressina, 'ampuleConcentrationMg' representa o TOTAL de Unidades (U) na solução
          const totalUnitsInSolution = ampuleConcentrationMg;
          const finalConcentrationUnitsMl = totalUnitsInSolution / solutionVolumeMl;
          if (finalConcentrationUnitsMl === 0) return { formula: "Concentração inválida."};
          
          const infusionMlH = (dose / finalConcentrationUnitsMl) * 60;

          return {
            infusionMlH: infusionMlH.toFixed(2),
            finalConcentrationMgMl: finalConcentrationUnitsMl.toFixed(2),
            formula: `Dose fixa: ${dose} U/min. Infusão: ${infusionMlH.toFixed(2)} ml/h`,
          };
        },
      },
    ],
  },
  {
    name: 'Manutenção',
    drugs: [
      {
        name: 'Propofol (Manutenção)',
        description: 'Agente hipnótico para sedação contínua.',
        calculationType: 'infusion',
        unit: 'mg/kg/h',
        defaultDose: 4,
        doseRange: '2 - 6 mg/kg/h',
        notes: 'Monitorar triglicerídeos e risco de síndrome de infusão de propofol.',
        presentations: [{ label: '200mg/20ml', concentrationMg: 200, volumeMl: 20 }],
        dilutions: [
            {
                name: 'Uso Puro (10mg/ml)',
                description: 'Administrar a emulsão pura, sem diluição.',
                totalDrugMg: 200,
                finalVolumeMl: 20,
                finalConcentrationMgMl: 10,
                useCase: 'Prática padrão para infusão contínua de Propofol.'
            }
        ],
        calculate: calculateInfusionMgKgH,
      },
      {
        name: 'Midazolam (Manutenção)',
        description: 'Benzodiazepínico para sedação contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 1,
        doseRange: '0.5 - 2 mcg/kg/min',
        notes: 'Risco de acúmulo em pacientes com insuficiência renal ou hepática.',
        presentations: [
          { label: '15mg/3ml', concentrationMg: 15, volumeMl: 3 },
          { label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 },
        ],
        dilutions: [
            {
                name: 'Padrão UTI (100mg/100ml)',
                description: '2 ampolas (50mg/10ml) em 80ml de SF 0.9%',
                totalDrugMg: 100,
                finalVolumeMl: 100,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição padrão para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Fentanil (Manutenção)',
        description: 'Analgésico opioide para analgesia contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 0.02,
        doseRange: '0.01 - 0.05 mcg/kg/min',
        notes: 'Monitorar depressão respiratória e rigidez torácica.',
        presentations: [
          { label: '250mcg/5ml', concentrationMg: 0.25, volumeMl: 5 },
          { label: '500mcg/10ml', concentrationMg: 0.5, volumeMl: 10 },
        ],
        dilutions: [
            {
                name: 'Padrão UTI (2500mcg/250ml)',
                description: '5 ampolas (500mcg/10ml) em 200ml de SF 0.9%',
                totalDrugMg: 2.5,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 0.01,
                useCase: 'Diluição padrão para infusão (10mcg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Rocurônio (Manutenção)',
        description: 'Bloqueador neuromuscular para paralisia contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 10,
        doseRange: '5 - 12 mcg/kg/min',
        notes: 'Requer monitorização da função neuromuscular (ex: TOF).',
        presentations: [{ label: '50mg/5ml', concentrationMg: 50, volumeMl: 5 }],
        dilutions: [
            {
                name: 'Padrão UTI (250mg/250ml)',
                description: '5 ampolas (50mg/5ml) em 225ml de SF 0.9%',
                totalDrugMg: 250,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição padrão para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Cetamina (Manutenção)',
        description: 'Anestésico para analgesia/sedação contínua.',
        calculationType: 'infusion',
        unit: 'mg/kg/h',
        defaultDose: 0.5,
        doseRange: '0.2 - 1 mg/kg/h',
        notes: 'Pode causar agitação ou alucinações. Efeito broncodilatador.',
        presentations: [{ label: '500mg/10ml', concentrationMg: 500, volumeMl: 10 }],
        dilutions: [
            {
                name: 'Padrão UTI (500mg/250ml)',
                description: '1 ampola (500mg/10ml) em 240ml de SF 0.9%',
                totalDrugMg: 500,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 2,
                useCase: 'Diluição padrão para infusão contínua (2mg/ml).'
            }
        ],
        calculate: calculateInfusionMgKgH,
      },
    ]
  }
];
