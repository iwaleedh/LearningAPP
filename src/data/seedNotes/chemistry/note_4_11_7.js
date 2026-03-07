/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 7
 * "Arrhenius and activation energy"
 */

export const note_chemistry_4_11_7 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Introduce the Arrhenius equation (k = Ae^(-Ea/RT)) and explain how to graphically determine activation energy (Ea) from the logarithmic form.'
      },
      terms: []
    },
    // ── WHY TEMPERATURE MATTERS ────────────────────────────────────────────
    {
      id: 'h-temp',
      type: 'heading',
      data: { text: 'Temperature and the Rate Constant', level: 2 },
      terms: []
    },
    {
      id: 'p-temp',
      type: 'paragraph',
      data: {
        text: 'As established earlier, changing the concentration of reactants does <em>not</em> change the rate constant (k). The rate constant is only affected by changes in <strong>Temperature</strong> or the addition of a <strong>Catalyst</strong>. <br/><br/>Swedish chemist Svante Arrhenius discovered the exact mathematical relationship that proves why raising the temperature makes k (and therefore the rate) increase exponentially.'
      },
      terms: []
    },
    // ── THE ARRHENIUS EQUATION ─────────────────────────────────────────────
    {
      id: 'h-arrhenius',
      type: 'heading',
      data: { text: 'The Arrhenius Equation', level: 2 },
      terms: []
    },
    {
      id: 'eq-arrhenius',
      type: 'equation',
      data: {
        latex: 'k = A \\cdot e^{\\frac{-E_a}{RT}}',
        caption: 'The standard (exponential) form of the Arrhenius equation.'
      },
      terms: []
    },
    {
      id: 'list-arrhenius-terms',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>k:</strong> The rate constant.',
          '<strong>A:</strong> The Arrhenius pre-exponential factor (represents the total number of collisions between molecules).',
          '<strong>e:</strong> Euler\'s mathematical constant.',
          '<strong>Eₐ:</strong> The Activation Energy (in <strong>Joules per mole, J mol⁻¹</strong>). *Warning: Exam questions often give Ea in kJ, so convert it!*',
          '<strong>R:</strong> The ideal gas constant (8.31 J K⁻¹ mol⁻¹).',
          '<strong>T:</strong> Temperature in <strong>Kelvin (K)</strong>.'
        ]
      },
      terms: ['Arrhenius Equation', 'Activation Energy']
    },
    // ── THE LOGARITHMIC FORM (y = mx + c) ──────────────────────────────────
    {
      id: 'h-log',
      type: 'heading',
      data: { text: 'The Graphical (Logarithmic) Form', level: 2 },
      terms: []
    },
    {
      id: 'p-log',
      type: 'paragraph',
      data: {
        text: 'The standard exponential form is incredibly difficult to plot on a graph. To make it useful, we take the natural logarithm (ln) of both sides. This transforms the equation into the geometry of a straight line equation: <strong>y = mx + c</strong>.'
      },
      terms: []
    },
    {
      id: 'eq-log',
      type: 'equation',
      data: {
        latex: '\\ln(k) = -\\frac{E_a}{R} \\cdot \\frac{1}{T} + \\ln(A)',
        caption: 'The logarithmic form of the Arrhenius Equation.'
      },
      terms: []
    },
    {
      id: 'callout-graphical',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Plotting an Arrhenius Graph (y = mx + c)',
        text: 'By plotting <strong>ln(k)</strong> on the y-axis against <strong>1/T</strong> on the x-axis, you will get a straight-line graph with a negative gradient. <br/><br/>• <strong>y</strong> = ln(k)<br/>• <strong>x</strong> = 1/T<br/>• <strong>Gradient (m)</strong> = −(Eₐ / R)<br/>• <strong>y-intercept (c)</strong> = ln(A)'
      },
      terms: []
    },
    {
      id: 'bloom-gradient',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculating Activation Energy (Eₐ) from the Gradient',
        text: '<strong>Q: An Arrhenius plot of ln(k) vs 1/T gave a straight line with a mathematically calculated negative gradient of -6500 K. Calculate the activation energy (Eₐ) for this reaction in kJ mol⁻¹. (R = 8.31 J K⁻¹ mol⁻¹)</strong><br/><br/><strong>A:</strong><br/>Gradient (m) = -6500<br/>m = -Eₐ / R<br/>-6500 = -Eₐ / 8.31<br/><br/>Eₐ = 6500 × 8.31<br/>Eₐ = 54,015 J mol⁻¹<br/><br/>Divide by 1000 to convert to kJ:<br/><strong>Eₐ = +54.0 kJ mol⁻¹</strong>'
      },
      terms: []
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-temp',
        prompt: 'What are the only two factors that can change the numerical value of the rate constant (k)?'
      },
      {
        id: 'cue-2',
        blockId: 'list-arrhenius-terms',
        prompt: 'In the Arrhenius equation, what are the strict standard metric units for Temperature (T) and Activation Energy (Eₐ)?'
      },
      {
        id: 'cue-3',
        blockId: 'eq-log',
        prompt: 'Write down the logarithmic form of the Arrhenius equation in the layout y = mx + c.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-graphical',
        prompt: 'When plotting an Arrhenius graph of ln(k) against 1/T, what does the gradient of the straight line represent mathematically algebra-wise?'
      },
      {
        id: 'cue-5',
        blockId: 'bloom-gradient',
        prompt: 'If the gradient (m) of an Arrhenius plot is found to be -10,000, how would you calculate the Activation Energy (Eₐ) in Joules?'
      }
    ],
    summaryText: 'The Arrhenius equation k = A * e^(-Ea/RT) proves that rate constants (k) increase exponentially with temperature. By taking the natural log, we get ln(k) = -(Ea/R)(1/T) + ln(A), which is a linear y = mx + c equation. Plotting ln(k) against 1/T gives a graph where the negative gradient equals -Ea/R, allowing Activation Energy to be calculated.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_7;
