export const note_chemistry_4_11_7 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand the Arrhenius equation, activation energy, and the effect of temperature on reaction rate.' },
      terms: ['Arrhenius equation', 'activation energy', 'temperature effect'],
    },
    {
      id: 'h-arrhenius',
      type: 'heading',
      data: { text: 'The Arrhenius Equation', level: 2 },
      terms: [],
    },
    {
      id: 'p-arrhenius',
      type: 'paragraph',
      data: { text: 'The Arrhenius equation describes how the rate constant k depends on temperature. It shows that k increases exponentially with temperature. The equation has two main forms: (1) k = Ae^(−Eₐ/RT), where A is the pre-exponential factor (frequency factor), Eₐ is the activation energy (in J mol⁻¹), R is the gas constant (8.314 J K⁻¹ mol⁻¹), and T is absolute temperature (K). (2) ln k = ln A − (Eₐ/RT), the linear form.' },
      terms: ['Arrhenius equation', 'activation energy'],
    },
    {
      id: 'eq-arrhenius1',
      type: 'equation',
      data: {
        html: 'k = Ae<sup>−E<sub>a</sub>/RT</sup>',
        caption: 'Arrhenius equation (exponential form)',
      },
      terms: [],
    },
    {
      id: 'eq-arrhenius2',
      type: 'equation',
      data: {
        html: 'ln k = ln A − <span class="nb-frac"><span class="nb-num">E<sub>a</sub></span><span class="nb-den">RT</span></span>',
        caption: 'Arrhenius equation (linear form)',
      },
      terms: [],
    },
    {
      id: 'callout-key-factors',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interpretation of Arrhenius Factors',
        text: 'A = pre-exponential factor, related to collision frequency and orientation; assumed constant with T. Eₐ = activation energy, minimum energy needed for molecules to react. e^(−Eₐ/RT) = fraction of molecules with energy ≥ Eₐ. High Eₐ → few molecules react → small k. Low Eₐ → many molecules react → large k.',
      },
      terms: [],
    },
    {
      id: 'h-linear-form',
      type: 'heading',
      data: { text: 'Using the Linear Form', level: 2 },
      terms: [],
    },
    {
      id: 'p-linear',
      type: 'paragraph',
      data: { text: 'The linear form ln k = ln A − (Eₐ/RT) is rearranged as: ln k = −(Eₐ/R) × (1/T) + ln A. This is in the form y = mx + c, where y = ln k, x = 1/T, m = −Eₐ/R (gradient), and c = ln A (intercept). By plotting ln k against 1/T, a straight line is obtained. The gradient = −Eₐ/R, so Eₐ = −R × gradient. The intercept ln A gives the pre-exponential factor A.' },
      terms: [],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculating Eₐ',
        text: 'A ln k vs 1/T graph for a reaction shows: at 1/T = 2.0 × 10⁻⁴ K⁻¹, ln k = 5.0. At 1/T = 3.0 × 10⁻⁴ K⁻¹, ln k = 3.0. Gradient = (3.0 − 5.0) / (3.0 − 2.0) × 10⁻⁴ = −2.0 / (1.0 × 10⁻⁴) = −2.0 × 10⁴. Eₐ = −(8.314) × (−2.0 × 10⁴) = 1.66 × 10⁵ J mol⁻¹ = 166 kJ mol⁻¹.',
      },
      terms: [],
    },
    {
      id: 'h-temperature-effect',
      type: 'heading',
      data: { text: 'Effect of Temperature on k and Rate', level: 2 },
      terms: [],
    },
    {
      id: 'p-temp-effect',
      type: 'paragraph',
      data: { text: 'From k = Ae^(−Eₐ/RT), as T increases, the exponent −Eₐ/RT becomes less negative (closer to zero), so e^(−Eₐ/RT) increases, and k increases. A small increase in T can cause a large increase in k. For example, a 10 K rise might double or triple k, depending on Eₐ. The higher the activation energy, the more sensitive k is to temperature changes.' },
      terms: ['temperature effect'],
    },
    {
      id: 'callout-key-temp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Temperature Sensitivity',
        text: 'High Eₐ (e.g., 50 kJ mol⁻¹) → k is very temperature sensitive. Low Eₐ (e.g., 10 kJ mol⁻¹) → k changes little with T. This is why reactions with high activation barriers are accelerated dramatically by temperature increases.',
      },
      terms: [],
    },
    {
      id: 'h-two-temps',
      type: 'heading',
      data: { text: 'Rate Constant at Two Temperatures', level: 2 },
      terms: [],
    },
    {
      id: 'p-two-temps',
      type: 'paragraph',
      data: { text: 'If we know k at two temperatures T₁ and T₂, we can find Eₐ using: ln(k₂/k₁) = (Eₐ/R) × (1/T₁ − 1/T₂), or equivalently: ln(k₂/k₁) = (Eₐ/R) × [(T₂ − T₁) / (T₁T₂)]. Rearranging: Eₐ = R × ln(k₂/k₁) / (1/T₁ − 1/T₂).' },
      terms: [],
    },
    {
      id: 'eq-two-temps',
      type: 'equation',
      data: {
        html: 'ln <span class="nb-frac"><span class="nb-num">k<sub>2</sub></span><span class="nb-den">k<sub>1</sub></span></span> = <span class="nb-frac"><span class="nb-num">E<sub>a</sub></span><span class="nb-den">R</span></span> <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">T<sub>1</sub></span></span> − <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">T<sub>2</sub></span></span>',
        caption: 'Arrhenius equation for two temperatures',
      },
      terms: [],
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Eₐ from Two Temperatures',
        text: 'At 298 K, k = 2.0 × 10⁻³ s⁻¹. At 308 K, k = 4.2 × 10⁻³ s⁻¹. ln(k₂/k₁) = ln(4.2/2.0) = ln(2.1) = 0.742. 1/T₁ − 1/T₂ = 1/298 − 1/308 = 0.003356 − 0.003247 = 0.000109 K⁻¹. Eₐ = 8.314 × 0.742 / 0.000109 = 56.4 kJ mol⁻¹.',
      },
      terms: [],
    },
    {
      id: 'h-catalysts',
      type: 'heading',
      data: { text: 'Role of Catalysts', level: 2 },
      terms: [],
    },
    {
      id: 'p-catalysts',
      type: 'paragraph',
      data: { text: 'A catalyst lowers the activation energy Eₐ without being consumed. From k = Ae^(−Eₐ/RT), lowering Eₐ increases k at any given temperature. A catalyst does not change A (frequency of collisions) or affect the equilibrium constant of a reaction — it accelerates both forward and backward reactions equally. This is why catalysts speed up the approach to equilibrium but do not shift the equilibrium position.' },
      terms: ['catalyst'],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state and interpret the Arrhenius equation in exponential and linear forms', checked: false },
          { text: 'I can identify A, Eₐ, R, and T in the Arrhenius equation', checked: false },
          { text: 'I can use ln k vs 1/T plots to calculate Eₐ and A', checked: false },
          { text: 'I can calculate Eₐ from rate constants at two temperatures', checked: false },
          { text: 'I understand how catalysts lower Eₐ and increase reaction rate', checked: false },
        ],
      },
      terms: [],
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: The Arrhenius equation ln k = ln A − Eₐ/RT shows that k increases exponentially with temperature. A plot of ln k vs 1/T gives a straight line with gradient −Eₐ/R.\n\nApply: Given ln k values at two temperatures, calculate Eₐ using the Arrhenius equation.\n\nAnalyze: Why does a 10°C rise roughly double the rate? Relate to the Boltzmann distribution and Eₐ.\n\nEvaluate: The Arrhenius equation predicts infinite rate at infinite temperature. Is this physically meaningful?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Arrhenius: k = Ae^(−Eₐ/RT) or ln k = ln A − Eₐ/RT. ln k vs 1/T is linear, gradient = −Eₐ/R. Eₐ = activation energy (min. energy to react). Higher T → higher k exponentially. Catalysts lower Eₐ without being consumed.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-arrhenius1', prompt: 'Write the exponential form of the Arrhenius equation and explain each term.' },
      { id: 'cue-2', blockId: 'eq-arrhenius2', prompt: 'Write the linear form of the Arrhenius equation.' },
      { id: 'cue-3', blockId: 'p-linear', prompt: 'How is a ln k vs 1/T graph used to calculate Eₐ?' },
      { id: 'cue-4', blockId: 'callout-we2', prompt: 'Given k at two temperatures, how do you calculate Eₐ?' },
      { id: 'cue-5', blockId: 'p-catalysts', prompt: 'How does a catalyst affect Eₐ and the rate constant k?' },
    ],
    summaryText: 'k = Ae^(−Eₐ/RT); ln k = ln A − Eₐ/RT. Linear plot: ln k vs 1/T, gradient = −Eₐ/R, intercept = ln A. Eₐ from two temps: ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂). Catalyst lowers Eₐ, increases k.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'The Arrhenius Equation — Chemguide', detail: 'Comprehensive explanation of the Arrhenius equation, activation energy, and temperature effects on reaction rates.', year: '2013', source: 'chemguide.co.uk/physical/basicrates/arrhenius.html', tags: ['kinetics', 'Arrhenius', 'activation energy', 'temperature'] },
  ],
};
