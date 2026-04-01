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
        html: 'k = A · e<sup>−E<sub>a</sub>/RT</sup>',
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
        html: 'ln(k) = −<span class="nb-frac"><span class="nb-num">E<sub>a</sub></span><span class="nb-den">R</span></span> · <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">T</span></span> + ln(A)',
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
    },
    // ── ARRHENIUS PLOT SVG ─────────────────────────────────────────────────
    {
      id: 'h-arrhenius-graph',
      type: 'heading',
      data: { text: 'The Arrhenius Graph (ln(k) vs 1/T)', level: 2 },
      terms: []
    },
    {
      id: 'svg-arrhenius',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif"><defs><marker id="arrA" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><rect x="0" y="0" width="400" height="230" rx="8" fill="#2d1b69" stroke="#e9d5ff" stroke-width="1"/><text x="200" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Arrhenius Plot: ln(k) against 1/T</text><line x1="65" y1="185" x2="65" y2="28" stroke="#374151" stroke-width="1.5" marker-end="url(#arrA)"/><line x1="65" y1="185" x2="355" y2="185" stroke="#374151" stroke-width="1.5" marker-end="url(#arrA)"/><text x="210" y="207" text-anchor="middle" font-size="11" fill="#374151">1/T (K⁻¹)  →  increasing 1/T = decreasing T</text><text x="22" y="110" text-anchor="middle" font-size="11" fill="#374151" transform="rotate(-90,22,110)">ln(k) ↑</text><line x1="82" y1="48" x2="335" y2="172" stroke="#1d4ed8" stroke-width="2.5" stroke-linecap="round"/><circle cx="82" cy="48" r="5" fill="#1d4ed8"/><text x="92" y="44" font-size="10" fill="#1d4ed8" font-weight="bold">y-intercept = ln(A)</text><line x1="180" y1="100" x2="270" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/><line x1="270" y1="100" x2="270" y2="152" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/><text x="280" y="130" font-size="10" fill="#374151">Δy</text><text x="222" y="94" text-anchor="middle" font-size="10" fill="#374151">Δx</text><rect x="85" y="152" width="155" height="44" rx="4" fill="#2d1b69" stroke="#1d4ed8" stroke-width="1"/><text x="162" y="167" text-anchor="middle" font-size="10" fill="#5b21b6" font-weight="bold">gradient = −Eₐ / R</text><text x="162" y="183" text-anchor="middle" font-size="10" fill="#5b21b6">∴ Eₐ = −gradient × R</text><text x="280" y="65" font-size="9" fill="#64748b" font-weight="bold">Higher T:</text><text x="280" y="78" font-size="9" fill="#64748b">smaller 1/T</text><text x="280" y="91" font-size="9" fill="#64748b">larger ln(k)</text><text x="280" y="104" font-size="9" fill="#64748b">→ faster reaction</text><text x="90" y="175" font-size="9" fill="#94a3b8">negative gradient (always)</text></svg>',
        caption: 'Arrhenius plot: ln(k) on y-axis, 1/T on x-axis gives a straight line with negative gradient = −Eₐ/R. The y-intercept = ln(A). To find Eₐ: rearrange gradient = −Eₐ/R → Eₐ = −gradient × R.'
      },
      terms: []
    },
    {
      id: 'callout-arrhenius-steps',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Steps: Using an Arrhenius Plot',
        text: '<strong>1. Plot</strong> ln(k) on y-axis and 1/T on x-axis (T must be in Kelvin!)<br/><strong>2. Draw</strong> a best-fit straight line through the data<br/><strong>3. Calculate gradient</strong> = Δ(ln k) / Δ(1/T) → this will be negative<br/><strong>4. Use</strong> gradient = −Eₐ/R → Eₐ = −(gradient) × R<br/><strong>5. Convert</strong> Eₐ from J mol⁻¹ to kJ mol⁻¹ (÷ 1000)<br/><br/>⚠️ Ea is ALWAYS given in J mol⁻¹ in the equation — convert any kJ data first!'
      },
      terms: []
    },
    // ── PROVING KINETIC RULES WITH MATH ────────────────────────────────────
    {
      id: 'h-exponential-factor',
      type: 'heading',
      data: { text: 'Using the Exponential Factor in Practice', level: 2 },
      terms: []
    },
    {
      id: 'p-exponential-intro',
      type: 'paragraph',
      data: {
        text: 'Because the pre-exponential factor (A) remains roughly constant over small temperature changes, we can calculate just the <strong>exponential fraction</strong> (e<sup>-E<sub>a</sub>/RT</sup>) to mathematically prove exactly how temperature and catalysts boost reaction rates.'
      },
      terms: []
    },
    {
      id: 'callout-rule-of-10',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Proof: Why does rate double every 10°C?',
        text: 'Assume a standard reaction where E<sub>a</sub> = 50,000 J mol⁻¹. Let\'s calculate the fraction of successful molecules at 20°C (293 K) and 30°C (303 K).<br><br><strong>At 293 K:</strong><br>Fraction = e<sup>-50000 / (8.31 × 293)</sup> ≈ <strong>1.21 × 10⁻⁹</strong><br><br><strong>At 303 K:</strong><br>Fraction = e<sup>-50000 / (8.31 × 303)</sup> ≈ <strong>2.38 × 10⁻⁹</strong><br><br>Notice that by raising the temperature by just 10 degrees, the fraction of molecules capable of reacting has <strong>nearly doubled</strong> (2.38 / 1.21 ≈ 1.97). This mathematically proves the famous kinetic "rule of thumb"!'
      },
      terms: []
    },
    {
      id: 'callout-catalyst-proof',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Proof: The massive impact of a catalyst',
        text: 'What happens if we keep the temperature at 20°C (293 K), but introduce a catalyst that drops the activation energy from 50 kJ mol⁻¹ to just 25 kJ mol⁻¹?<br><br><strong>Uncatalysed (E<sub>a</sub> = 50,000 J mol⁻¹):</strong><br>Fraction = 1.21 × 10⁻⁹<br><br><strong>Catalysed (E<sub>a</sub> = 25,000 J mol⁻¹):</strong><br>Fraction = e<sup>-25000 / (8.31 × 293)</sup> ≈ <strong>3.48 × 10⁻⁵</strong><br><br>Because E<sub>a</sub> is located inside a negative exponent, dropping it by half increases the fraction of successful particles by a factor of nearly <strong>30,000 times!</strong>'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Unit Trap: E\u2090 is ALWAYS in J mol\u207b\u00b9 in Arrhenius Equation",
        text: "If a question gives E\u2090 in kJ mol\u207b\u00b9, you MUST convert to J mol\u207b\u00b9 by multiplying by 1000 BEFORE using it in k = Ae^(\u2212E\u2090/RT). Using kJ directly will give a nonsensical answer."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Arrhenius Plot: Read Gradient Carefully",
        text: "Plot ln(k) vs 1/T. The gradient is \u2212E\u2090/R (negative). To find E\u2090: take the absolute value of the gradient and multiply by R (8.31 J K\u207b\u00b9 mol\u207b\u00b9). Then divide by 1000 to convert to kJ mol\u207b\u00b9 if needed."
      }
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-temp',
        prompt: 'What are the only two factors that can change the numerical value of the rate constant k?'
      },
      {
        id: 'cue-2',
        blockId: 'list-arrhenius-terms',
        prompt: 'In the Arrhenius equation k = A·e^(−Eₐ/RT), what are the required units for T and Eₐ?'
      },
      {
        id: 'cue-3',
        blockId: 'eq-log',
        prompt: 'Write the logarithmic (y = mx + c) form of the Arrhenius equation. What does each term represent?'
      },
      {
        id: 'cue-4',
        blockId: 'svg-arrhenius',
        prompt: 'An Arrhenius plot has a gradient of −9600 K. Calculate the activation energy Eₐ in kJ mol⁻¹. (R = 8.31 J K⁻¹ mol⁻¹)'
      },
      {
        id: 'cue-5',
        blockId: 'callout-arrhenius-steps',
        prompt: 'Why must temperature be in Kelvin when using the Arrhenius equation? (Explain the consequence of using °C)'
      },
      {
        id: 'cue-6',
        blockId: 'callout-rule-of-10',
        prompt: 'In the Arrhenius equation, what specifically does the exponential term e^(−Eₐ/RT) mathematically represent?'
      }
    ],
    summaryText: 'The Arrhenius equation k = A·e^(−Eₐ/RT) shows k increases exponentially with T. The exponential term calculates the exact fraction of molecules with enough energy to react. Taking ln: ln(k) = −(Eₐ/R)(1/T) + ln(A). Plotting ln(k) vs 1/T gives a straight line — gradient = −Eₐ/R, y-intercept = ln(A). Always use T in Kelvin and Eₐ in J mol⁻¹.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_7;
