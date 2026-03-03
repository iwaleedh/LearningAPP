export const note_chemistry_4_11_8 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Learn about Core Practicals 9a (iodine clock), 9b (thiosulfate/HCl clock), and 10 (continuous monitoring with colorimeter).' },
      terms: ['Core Practical 9a', 'Core Practical 9b', 'Core Practical 10', 'iodine clock', 'colorimeter'],
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Core Practicals in Kinetics', level: 2 },
      terms: [],
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Three core practicals are central to A-level kinetics: CP9a (iodine clock reaction), CP9b (thiosulfate/HCl clock reaction), and CP10 (continuous monitoring of reaction rate using a colorimeter or conductivity probe). These practicals develop experimental skills in measuring reaction rates, determining order of reaction, and calculating rate constants.' },
      terms: [],
    },
    {
      id: 'h-cp9a',
      type: 'heading',
      data: { text: 'Core Practical 9a: Iodine Clock Reaction', level: 2 },
      terms: [],
    },
    {
      id: 'p-cp9a-reaction',
      type: 'paragraph',
      data: { text: 'Reaction: H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O (slow). The iodine produced is then reduced: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ (fast, uses a fixed amount of thiosulfate). When all thiosulfate is consumed, iodine reacts with starch indicator, turning the solution blue-black. Time from start to colour change is measured.' },
      terms: ['iodine clock'],
    },
    {
      id: 'callout-cp9a-method',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'CP9a Method',
        text: 'Procedure: (1) Mix solutions of H₂O₂, KI, H₂SO₄, and a fixed amount of Na₂S₂O₃ in a conical flask. (2) Add starch indicator. (3) Start timer immediately and record time when blue-black colour appears. (4) Repeat, varying the concentration of one reactant (e.g., H₂O₂ or KI) while keeping others constant. (5) Calculate rate ∝ 1/time (assuming fixed amount of I₂ produced).',
      },
      terms: [],
    },
    {
      id: 'p-cp9a-order',
      type: 'paragraph',
      data: { text: 'To find order: (1) Vary [H₂O₂], keep [I⁻] and [H⁺] constant. If time halves when [H₂O₂] doubles, order w.r.t. H₂O₂ is 1 (rate ∝ [H₂O₂]). (2) Vary [I⁻] or [H⁺] similarly. The order w.r.t. each reactant is determined. Overall rate equation: rate = k[H₂O₂][I⁻][H⁺] or similar, depending on experimental data.' },
      terms: [],
    },
    {
      id: 'h-cp9b',
      type: 'heading',
      data: { text: 'Core Practical 9b: Thiosulfate/HCl Clock Reaction', level: 2 },
      terms: [],
    },
    {
      id: 'p-cp9b-reaction',
      type: 'paragraph',
      data: { text: 'Reaction: S₂O₃²⁻ + 2H⁺ → S + SO₂ + H₂O (slow). Sulfur precipitates, clouding the solution. The clock is triggered by adding HCl (source of H⁺). Time from mixing to when the solution becomes opaque is recorded.' },
      terms: ['thiosulfate/HCl clock'],
    },
    {
      id: 'callout-cp9b-method',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'CP9b Method',
        text: 'Procedure: (1) Mix solutions of Na₂S₂O₃ and distilled water in a conical flask. (2) Place flask on white tile with a black cross drawn beneath. (3) Add HCl solution, start timer. (4) Record time when the black cross becomes invisible (solution becomes opaque due to sulfur precipitation). (5) Repeat, varying concentrations of S₂O₃²⁻ or H⁺. (6) Rate ∝ 1/time.',
      },
      terms: [],
    },
    {
      id: 'p-cp9b-order',
      type: 'paragraph',
      data: { text: 'Order determination: Similar to CP9a. Vary [S₂O₃²⁻] while keeping [H⁺] constant (or vice versa). If time quadruples when [S₂O₃²⁻] halves, order w.r.t. S₂O₃²⁻ is 1 (rate ∝ [S₂O₃²⁻]). Experimental data typically shows: rate = k[S₂O₃²⁻][H⁺] (order 1 w.r.t. each).' },
      terms: [],
    },
    {
      id: 'h-cp10',
      type: 'heading',
      data: { text: 'Core Practical 10: Continuous Monitoring with Colorimeter', level: 2 },
      terms: [],
    },
    {
      id: 'p-cp10-intro',
      type: 'paragraph',
      data: { text: 'CP10 uses a colorimeter to continuously measure the absorbance of a coloured product or reactant as a reaction proceeds. The absorbance (A = εlc) is proportional to concentration, so the graph of absorbance vs time gives concentration change. From this, rates at different concentrations can be calculated, allowing determination of order.' },
      terms: ['continuous monitoring', 'colorimeter'],
    },
    {
      id: 'callout-cp10-example',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'CP10 Example: Crystal Violet Fading',
        text: 'Reaction: Crystal violet (coloured) + NaOH → colourless product. (1) Mix crystal violet and NaOH in a cuvette. (2) Place cuvette in colorimeter set to appropriate wavelength (e.g., 590 nm). (3) Record absorbance at regular intervals (e.g., every 10 seconds) for several minutes. (4) Plot absorbance vs time — exponential decay indicates first-order kinetics. (5) Calculate rate at different times; plot rate vs [CV] to confirm order.',
      },
      terms: [],
    },
    {
      id: 'p-cp10-procedure',
      type: 'paragraph',
      data: { text: 'Procedure: (1) Calibrate colorimeter with a blank (distilled water or solvent). (2) Prepare reaction mixture of reactants at known initial concentrations. (3) Add one reactant to start the reaction; quickly transfer to cuvette. (4) Record absorbance at short, regular time intervals (automated if possible). (5) Plot absorbance vs time. (6) Measure gradients (rates) at specific absorbance values. (7) Plot rate vs absorbance (or concentration) to determine order.' },
      terms: [],
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 },
      terms: [],
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        headers: ['Error source', 'Effect on results', 'Improvement'],
        rows: [
          ['Temperature changes during experiment', 'k changes, time becomes inaccurate', 'Conduct experiment in water bath at constant temperature'],
          ['Imprecise timing (clock reactions)', 'Large uncertainty in time, affects calculated rates', 'Use electronic timer (to 0.01 s); average multiple repeats'],
          ['Incomplete mixing of reactants', 'Actual start time unclear; high variability', 'Mix solutions thoroughly before starting timer'],
          ['Parallax error reading colorimeter', 'Absorbance values inaccurate', 'Read colorimeter digital display at eye level; record twice'],
          ['Solution not at constant temperature in cuvette', 'Optical properties change; absorbance drift', 'Pre-warm cuvette; use thermostatic cuvette holder'],
          ['Starch added after endpoint in clock reactions', 'Endpoint is unclear; time reading is late', 'Add starch at start of reaction (before colour appears)'],
          ['Using non-linearity in ln k vs 1/T region', 'Calculated Eₐ inaccurate if T range too small', 'Use wide temperature range (≥ 20 K apart)'],
        ],
        caption: 'Sources of error in kinetics experiments and improvements',
      },
      terms: [],
    },
    {
      id: 'callout-tip-errors',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Error Analysis',
        text: 'For each experiment, identify systematic errors (constant bias) and random errors (variable fluctuations). Suggest practical improvements and explain how each reduces error. For example, using a water bath reduces temperature variation (systematic error); repeating and averaging reduces random timing errors.',
      },
      terms: [],
    },
    {
      id: 'h-safety',
      type: 'heading',
      data: { text: 'Safety Considerations', level: 2 },
      terms: [],
    },
    {
      id: 'list-safety',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'H₂O₂ solutions are corrosive; wear eye protection and gloves.',
          'HCl is corrosive; use in fume hood if concentrated. Handle with care.',
          'Crystal violet (dye) can stain skin and fabrics; wear protective clothing.',
          'Dispose of chemical waste according to school/lab procedures (do not pour down drain unless permitted).',
          'Keep electrical equipment (colorimeter, timers) away from water spillage.',
        ],
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the iodine clock reaction and how time is measured', checked: false },
          { text: 'I can describe the thiosulfate/HCl clock reaction and interpret opacity endpoint', checked: false },
          { text: 'I can use colorimeter data to determine reaction order', checked: false },
          { text: 'I can identify and explain sources of error in kinetics experiments', checked: false },
          { text: 'I can suggest improvements to reduce experimental errors', checked: false },
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
        text: 'Understand: Clock reactions measure the time for a visible change, giving an inverse measure of rate (rate ∝ 1/t). Colorimetry measures absorbance continuously for real-time data.\n\nApply: In the iodine clock, explain why adding starch allows you to measure time precisely.\n\nAnalyze: Compare the iodine clock with the thiosulfate/HCl clock. Which measures initial rate more accurately?\n\nEvaluate: A student uses a stopwatch with ±0.5 s uncertainty for a 10 s clock reaction vs a 60 s one. Which gives more reliable rate data?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'CP9a (iodine clock): H₂O₂ + I⁻ produces I₂, consumed by S₂O₃²⁻; starch indicates endpoint. CP9b (thiosulfate/HCl): S₂O₃²⁻ + H⁺ produces sulfur precipitate. CP10 (colorimeter): measure absorbance vs time to get [A] vs time, calculate rates, deduce order. Key errors: temperature changes, timing inaccuracy, incomplete mixing, parallax. Solutions: water bath, electronic timer, thorough mixing, digital readings.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-cp9a-reaction', prompt: 'Describe the iodine clock reaction and explain what the blue-black colour indicates.' },
      { id: 'cue-2', blockId: 'p-cp9b-reaction', prompt: 'Describe the thiosulfate/HCl reaction and how the endpoint is detected.' },
      { id: 'cue-3', blockId: 'p-cp10-intro', prompt: 'Explain how a colorimeter is used in continuous monitoring to determine reaction order.' },
      { id: 'cue-4', blockId: 'table-errors', prompt: 'Name two sources of error in kinetics experiments and suggest an improvement for each.' },
      { id: 'cue-5', blockId: 'p-cp9a-order', prompt: 'How would you determine the order of reaction with respect to H₂O₂ in CP9a?' },
    ],
    summaryText: 'CP9a: I₂ produced from H₂O₂ + I⁻, consumed by S₂O₃²⁻; endpoint = blue-black. CP9b: S₂O₃²⁻ + HCl → S precipitate; endpoint = opacity. CP10: colorimeter measures absorbance ∝ [A]; plot [A] vs time, measure rates, determine order. Errors: temperature, timing, mixing, parallax. Improve: water bath, electronic timer, stir thoroughly, digital readings.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Core Practicals in Kinetics — Royal Society of Chemistry', detail: 'Detailed procedures, safety, and error analysis for CP9a, 9b, and 10 in kinetics.', year: '2020', source: 'rsc.org/learn-chemistry/resources/core-practicals', tags: ['kinetics', 'core practical', 'clock reaction', 'colorimeter', 'experimental method'] },
  ],
};
