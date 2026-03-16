export const note_olevel_physics_2_1_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-1-6-pressure-law.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: "State the Pressure Law (Gay-Lussac's Law); apply p₁/T₁ = p₂/T₂ to solve problems; explain the law using the kinetic particle model; use Kelvin temperatures in all calculations.",
      },
    },
    {
      id: 'h-pressure-law',
      type: 'heading',
      data: { text: "The Pressure Law (Gay-Lussac's Law)", level: 2 },
    },
    {
      id: 'p-pressure-law',
      type: 'paragraph',
      data: {
        text: 'The <strong>Pressure Law</strong> states that for a <strong>fixed mass of gas at constant volume</strong>, the pressure is directly proportional to the absolute (Kelvin) temperature. Doubling the Kelvin temperature doubles the pressure; halving it halves the pressure.',
      },
    },
    {
      id: 'callout-pressure-law-key',
      type: 'callout',
      data: {
        style: 'key',
        title: "Pressure Law Statement",
        text: 'For a fixed mass of gas at <strong>constant volume</strong>:<br/><br/><strong>p ∝ T</strong>&nbsp;&nbsp;&nbsp;(where T is in Kelvin)<br/><br/>Therefore, <strong>P/T = constant</strong>',
      },
    },
    {
      id: 'eq-pressure-law',
      type: 'equation',
      data: {
        html: '<span class="nb-frac"><span class="nb-num">p<sub>1</sub></span><span class="nb-den">T<sub>1</sub></span></span> = <span class="nb-frac"><span class="nb-num">p<sub>2</sub></span><span class="nb-den">T<sub>2</sub></span></span>',
        caption: 'Pressure Law equation — T must be in Kelvin; volume is constant',
      },
    },
    {
      id: 'h-particle-explanation',
      type: 'heading',
      data: { text: 'Particle Model Explanation', level: 2 },
    },
    {
      id: 'p-particle-explanation',
      type: 'paragraph',
      data: {
        text: 'The Pressure Law can be fully explained using kinetic particle theory:',
      },
    },
    {
      id: 'list-particle',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Temperature increases → particles have greater average kinetic energy → they move <strong>faster</strong>.' },
          { text: 'Faster-moving particles <strong>hit the walls more frequently</strong> (more collisions per second).' },
          { text: 'Each collision also exerts a <strong>greater force</strong> on the wall because of the higher speed.' },
          { text: 'More frequent and harder collisions → greater <strong>force per unit area</strong> → higher pressure.' },
          { text: 'Volume is constant, so the increase in pressure is directly proportional to the increase in T (Kelvin).' },
        ],
      },
    },
    {
      id: 'callout-particle-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Two Reasons for Higher Pressure',
        text: 'When temperature increases at constant volume, pressure rises for <strong>two</strong> reasons — not just one:<br/>1. Particles collide with walls <strong>more frequently</strong>.<br/>2. Each collision exerts a <strong>greater force</strong> (particles hit harder).<br/>State both reasons for full marks.',
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example', level: 2 },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Tyre Pressure',
        text: '<strong>Question:</strong> A car tyre has a pressure of 220 kPa at a temperature of 20°C. After a long journey the tyre temperature rises to 50°C. Assuming the volume of the tyre is constant, calculate the new pressure.<br/><br/><strong>Step 1 — Convert to Kelvin:</strong><br/>T₁ = 20 + 273 = 293 K<br/>T₂ = 50 + 273 = 323 K<br/><br/><strong>Step 2 — Apply the Pressure Law:</strong><br/>p₁/T₁ = p₂/T₂<br/>p₂ = p₁ × T₂/T₁<br/>p₂ = 220 × (323 ÷ 293)<br/>p₂ = 220 × 1.102<br/>p₂ = <strong>242 kPa</strong> (3 s.f.)<br/><br/><strong>Answer:</strong> The tyre pressure increases to 242 kPa.<br/><br/><em>Note: the pressure increase is relatively small because 323/293 ≈ 1.10. Always check your answer is reasonable.</em>',
      },
    },
    {
      id: 'h-absolute-zero',
      type: 'heading',
      data: { text: 'Pressure Law and Absolute Zero', level: 2 },
    },
    {
      id: 'p-absolute-zero',
      type: 'paragraph',
      data: {
        text: 'If pressure is plotted against Celsius temperature for a fixed volume of gas, the graph is a straight line. When the line is <em>extrapolated</em> (extended back) to where pressure = 0, it crosses the temperature axis at <strong>−273°C</strong>. This is the definition of <strong>absolute zero</strong> — the temperature at which (in theory) gas particles would have zero kinetic energy and exert zero pressure.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Using Celsius',
        text: 'The Pressure Law p₁/T₁ = p₂/T₂ ONLY works when temperature is in Kelvin. Using °C will give a completely wrong answer. Convert first: T(K) = T(°C) + 273. This is the single most common error in gas law calculations.',
      },
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Summary of the Three Gas Laws', level: 2 },
    },
    {
      id: 'table-gas-laws',
      type: 'comparisonTable',
      data: {
        caption: 'The three simple gas laws for a fixed mass of gas',
        headers: ['Law', 'Constant', 'Relationship', 'Equation'],
        rows: [
          ["Boyle's Law", 'Temperature', 'p inversely proportional to V', 'p₁V₁ = p₂V₂'],
          ["Charles's Law", 'Pressure', 'V directly proportional to T', 'V₁/T₁ = V₂/T₂'],
          ['Pressure Law', 'Volume', 'p directly proportional to T', 'p₁/T₁ = p₂/T₂'],
          ['Combined Gas Law', '(none)', 'pV/T = constant', 'p₁V₁/T₁ = p₂V₂/T₂'],
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: "The Pressure Law: at constant volume, pressure is directly proportional to absolute temperature — p₁/T₁ = p₂/T₂. Explained by kinetic theory: higher T → faster particles → more frequent and harder collisions with walls → higher pressure. Always use Kelvin. Worked example: tyre at 20°C (293K) at 220 kPa rises to 242 kPa at 50°C (323K).",
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: "Pressure Law: p ∝ T (constant V). Equation: p₁/T₁ = p₂/T₂. Kinetic explanation: higher T → faster particles → more frequent + harder wall collisions → higher pressure. Always use Kelvin.",
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-pressure-law-key',
        prompt: "State the Pressure Law in words.",
        answer: 'For a fixed mass of gas at constant volume, the pressure is directly proportional to the absolute (Kelvin) temperature: p/T = constant, or p₁/T₁ = p₂/T₂.',
      },
      {
        id: 'cue-2',
        blockId: 'list-particle',
        prompt: 'Give two reasons, in terms of particles, why heating a gas at constant volume increases its pressure.',
        answer: '1. Particles move faster → they collide with the walls more frequently. 2. Each collision exerts a greater force because the particles hit harder. Both effects increase pressure.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked',
        prompt: 'A tyre at 20°C has pressure 220 kPa. After driving, the tyre reaches 50°C. Calculate the new pressure.',
        answer: 'T₁ = 293 K, T₂ = 323 K. p₂ = 220 × 323/293 = 242 kPa.',
      },
      {
        id: 'cue-4',
        blockId: 'p-absolute-zero',
        prompt: 'How does the Pressure Law graph lead to the concept of absolute zero?',
        answer: 'A p vs °C graph for a fixed volume gas is a straight line. Extrapolating to p = 0 gives −273°C. This temperature is absolute zero — in theory, particles have zero KE and exert zero pressure at this point.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
