/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 11
 * "Core Practical 2: enthalpy change by calorimetry"
 * Source: Pearson Edexcel IAL Chemistry — Core Practical 2 reference
 */
export const note_chemistry_1_3_11 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe and evaluate Core Practical 2: measuring enthalpy change of a reaction in solution using calorimetry. Perform calculations using q = mcΔT.' },
      terms: []
    },
    {
      id: 'h-aim',
      type: 'heading',
      data: { text: 'Aim and Background', level: 2 },
      terms: []
    },
    {
      id: 'callout-aim',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Aim',
        text: 'To measure the enthalpy change ΔH of a reaction in solution using a simple calorimeter (a polystyrene cup). Common reactions used include:<br/>• <strong>Neutralisation:</strong> HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)<br/>• <strong>Displacement:</strong> Zn(s) + CuSO₄(aq) → Cu(s) + ZnSO₄(aq)'
      },
      terms: []
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method', level: 2 },
      terms: []
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Measure out a known volume of solution (e.g. 25.0 cm³ of HCl at a known concentration) into a polystyrene cup using a measuring cylinder.',
          'Record the initial temperature of the solution using a thermometer (to 0.1°C).',
          'Add the second reactant (e.g. 25.0 cm³ NaOH or a weighed excess of solid) and stir immediately.',
          'Record the temperature every 30 seconds (or every minute) until at least 3 readings after the maximum/minimum.',
          'Plot temperature vs time and extrapolate the cooling line back to the time of mixing to find the best ΔT.',
          'Calculate the heat released/absorbed using q = mcΔT, then ΔH = −q/n.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-calc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Equations',
        text: '<strong>q = mcΔT</strong><br/>where: q = heat energy (J), m = mass of solution (g), c = specific heat capacity of solution (4.18 J g⁻¹ K⁻¹ for aqueous solutions), ΔT = temperature change (K or °C)<br/><br/><strong>ΔH = −q / n</strong><br/>where n = moles of limiting reactant; negative sign because enthalpy of reaction is opposite in sign to heat absorbed by solution (exothermic reaction → +ΔT, but ΔH is −ve).'
      },
      terms: ['q = mcΔT', 'Calorimetry']
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>50.0 cm³ of 1.0 mol dm⁻³ HCl is mixed with 50.0 cm³ of 1.0 mol dm⁻³ NaOH. ΔT = +5.8°C. Calculate ΔH.</strong><br/><br/>m = 50 + 50 = 100 g (assuming density 1 g cm⁻³)<br/>q = 100 × 4.18 × 5.8 = 2424 J = 2.424 kJ<br/>n(HCl) = 1.0 × 0.050 = 0.050 mol<br/>ΔH = −q/n = −2.424/0.050 = <strong>−48.5 kJ mol⁻¹</strong>'
      },
      terms: []
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        caption: 'Errors in CP2 and improvements',
        headers: ['Error', 'Effect', 'Improvement'],
        rows: [
          ['Heat loss to surroundings', 'ΔT measured is too small → ΔH underestimated', 'Use a polystyrene cup with a lid; extrapolate temperature-time graph'],
          ['Thermometer not stirred/solution uneven temperature', 'Inaccurate temperature readings', 'Stir the mixture continuously'],
          ['Specific heat capacity of solution assumed to be 4.18 J g⁻¹ K⁻¹', 'Introduces a small error if the solution is not dilute', 'Use a measured value if available'],
          ['Measuring cylinder volume imprecise', 'Inaccurate moles of limiting reagent', 'Use a volumetric pipette for accurate volumes']
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-calc', prompt: 'Write the two equations used in Core Practical 2 to calculate ΔH from temperature change data. Define all symbols.' },
      { id: 'c2', blockId: 'callout-worked', prompt: 'Calculate ΔH when 50 cm³ of 1.0 mol dm⁻³ HCl reacts with 50 cm³ of 1.0 mol dm⁻³ NaOH and ΔT = +6.0°C.' },
      { id: 'c3', blockId: 'table-errors', prompt: 'Give two sources of error in the CP2 calorimetry experiment and explain how each could be minimised.' }
    ],
    summaryText: 'CP2: measure ΔH by recording temperature change in a polystyrene cup calorimeter. q = mcΔT (where m = mass of solution, c = 4.18 J g⁻¹ K⁻¹, ΔT = temperature change). ΔH = −q/n. Exothermic reactions give +ΔT and negative ΔH. Main error: heat loss to surroundings (mitigated by polystyrene cup + lid + extrapolation).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_11;