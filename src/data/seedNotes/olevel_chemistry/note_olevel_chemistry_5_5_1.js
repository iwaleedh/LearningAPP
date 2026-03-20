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
      id: 'svg-calorimetry',
      type: 'svg',
      data: {
        caption: 'A simple calorimeter (polystyrene cup) used to measure temperature changes (ΔT) for reactions in solution, like neutralisation or displacement.',
        svg: `<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Liquid Gradient -->
    <linearGradient id="liquid-cal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.8"/>
    </linearGradient>

    <!-- Glass glass gradient -->
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#e2e8f0" stop-opacity="0.4"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="var(--color-surface)"/>

  <!-- Beaker (Outer container for stability) -->
  <path d="M 120 180 L 120 300 Q 120 320 140 320 L 360 320 Q 380 320 380 300 L 380 180" fill="url(#glass)" stroke="var(--color-border)" stroke-width="3"/>
  <ellipse cx="250" cy="180" rx="130" ry="20" fill="none" stroke="var(--color-border)" stroke-width="3"/>

  <!-- Polystyrene Cup (Insulator) -->
  <path d="M 140 180 L 150 300 Q 150 310 165 310 L 335 310 Q 350 310 350 300 L 360 180" fill="#0f172a" stroke="#94a3b8" stroke-width="4" stroke-linejoin="round"/>
  
  <!-- Content / Reaction mixture -->
  <path d="M 143 210 L 150 298 Q 150 308 165 308 L 335 308 Q 350 308 350 298 L 357 210 Z" fill="url(#liquid-cal)"/>
  
  <text x="250" y="270" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">Reaction Mixture</text>

  <!-- Polystyrene Lid -->
  <ellipse cx="250" cy="180" rx="120" ry="16" fill="#1e293b" stroke="#94a3b8" stroke-width="3"/>
  
  <!-- Thermometer -->
  <rect x="235" y="40" width="10" height="250" rx="5" fill="#0f172a" stroke="#475569" stroke-width="2"/>
  <circle cx="240" cy="280" r="10" fill="#ef4444"/>
  <!-- Thermometer liquid -->
  <path d="M 238 275 L 238 100 L 242 100 L 242 275 Z" fill="#ef4444"/>
  <!-- Thermometer lines -->
  <line x1="245" y1="120" x2="252" y2="120" stroke="#475569" stroke-width="1"/>
  <line x1="245" y1="140" x2="252" y2="140" stroke="#475569" stroke-width="1"/>
  <line x1="245" y1="160" x2="252" y2="160" stroke="#475569" stroke-width="1"/>
  <line x1="245" y1="180" x2="252" y2="180" stroke="#475569" stroke-width="1"/>
  
  <!-- Stirrer -->
  <path d="M 280 60 L 280 260 L 300 260 L 300 250 L 286 250 L 286 60 Z" fill="#9ca3af" stroke="#475569" stroke-width="1"/>

  <!-- Labels -->
  <!-- Thermometer label -->
  <line x1="255" y1="100" x2="380" y2="100" stroke="var(--color-text-secondary)" stroke-dasharray="2,2"/>
  <text x="385" y="105" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="start">Thermometer</text>
  <text x="385" y="120" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="start">(Measures ΔT)</text>

  <!-- Cup label -->
  <line x1="140" y1="240" x2="80" y2="240" stroke="var(--color-text-secondary)" stroke-dasharray="2,2"/>
  <text x="75" y="235" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="end">Polystyrene cup</text>
  <text x="75" y="250" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="end">(Insulator to reduce</text>
  <text x="75" y="265" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="end">heat loss to surroundings)</text>

  <!-- Lid label -->
  <line x1="130" y1="180" x2="80" y2="180" stroke="var(--color-text-secondary)" stroke-dasharray="2,2"/>
  <text x="75" y="175" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="end">Lid</text>

  <!-- Mixture label -->
  <line x1="170" y1="280" x2="80" y2="280" stroke="var(--color-text-secondary)" stroke-dasharray="2,2"/>
  <text x="75" y="285" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="end">Mass = m</text>
</svg>`
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
