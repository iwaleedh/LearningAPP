export const note_olevel_chemistry_5_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/5 Chemical Energetics/5-1-2-enthalpy-change-and-activation-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define enthalpy change and activation energy, and use calorimetry to calculate enthalpy changes.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Enthalpy Change (ΔH)', level: 2 }
    },
    {
      id: 'call-dh',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Enthalpy Change',
        text: '<strong>Enthalpy change (ΔH)</strong> is the heat energy transferred during a chemical reaction at constant pressure.<br/><br/>ΔH = H(products) − H(reactants)<br/><br/>Units: kJ/mol or kJ<br/><br/>• Exothermic: ΔH is <strong>negative</strong> (heat released)<br/>• Endothermic: ΔH is <strong>positive</strong> (heat absorbed)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Activation Energy (Eₐ)', level: 2 }
    },
    {
      id: 'call-ea',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Activation Energy',
        text: '<strong>Activation energy (Eₐ)</strong> is the minimum energy that reactant particles must have in order to react when they collide.<br/><br/>On an energy profile diagram, Eₐ is the height of the "hump" above the reactants.<br/><br/>A <strong>catalyst</strong> provides an alternative pathway with a lower activation energy — more particles have enough energy to react, so the reaction is faster. The catalyst does not change ΔH.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Calorimetry — Calculating ΔH', level: 2 }
    },
    {
      id: 'call-cal',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Calorimetry Formula',
        text: '<strong>q = mcΔT</strong><br/><br/>q = heat transferred (J)<br/>m = mass of solution/water (g)<br/>c = specific heat capacity of water = 4.18 J/g/°C<br/>ΔT = temperature change (°C)<br/><br/>To find ΔH in kJ/mol:<br/>1. Calculate q = mcΔT (in J)<br/>2. Convert to kJ (÷ 1000)<br/>3. Divide by moles of substance used<br/>4. Add sign: exothermic → negative'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Enthalpy of neutralisation',
        text: '50 cm³ of 1 mol/dm³ HCl is mixed with 50 cm³ of 1 mol/dm³ NaOH. Temperature rises by 6.8°C. (c = 4.18 J/g/°C, density 1 g/cm³)<br/><br/>m = 100 g (total volume = 100 cm³)<br/>q = 100 × 4.18 × 6.8 = 2842 J = 2.842 kJ<br/><br/>Moles of HCl = 1 × 0.05 = 0.05 mol<br/>ΔH = −2.842 / 0.05 = <strong>−56.8 kJ/mol</strong><br/>(negative: exothermic reaction)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Assume density of dilute solutions = 1 g/cm³ unless told otherwise. Use the volume of the solution for mass. Add a negative sign for exothermic reactions (temperature rose). The specific heat capacity c = 4.18 J/g/°C will usually be given in the exam.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'ΔH = heat transferred at constant pressure. Negative = exothermic. Eₐ = minimum energy for reaction. q = mcΔT for calorimetry; convert to kJ/mol by dividing by moles.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'ΔH = H(products)−H(reactants). Negative = exothermic. Eₐ = minimum collision energy. q = mcΔT → ΔH = −q/n in kJ/mol.',
    cues: [
      { id: 'cue-1', blockId: 'call-dh', prompt: 'What does a negative ΔH indicate?', answer: 'The reaction is exothermic — heat is released to the surroundings. Products have less energy than reactants.' },
      { id: 'cue-2', blockId: 'call-ea', prompt: 'How does a catalyst affect activation energy and ΔH?', answer: 'A catalyst lowers the activation energy (provides an alternative pathway). It does not change ΔH (the energy difference between products and reactants).' },
      { id: 'cue-3', blockId: 'call-cal', prompt: 'State the calorimetry formula and what each symbol means.', answer: 'q = mcΔT. q = heat (J), m = mass of solution (g), c = specific heat capacity (4.18 J/g/°C), ΔT = temperature change (°C).' }
    ]
  },
  evidence: [],
  mentions: []
};
