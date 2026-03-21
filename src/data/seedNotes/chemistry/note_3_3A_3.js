export const note_chemistry_3_3A_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Plot graphs correctly with appropriate axes, scales and best-fit lines; apply rules for significant figures in calculations; use standard form and unit conversions.' },
    },
    {
      id: 'h-graphs',
      type: 'heading',
      data: { text: 'Plotting Graphs — Rules', level: 2 },
    },
    {
      id: 'list-graph-rules',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Label axes</strong> with the quantity and unit: e.g. "Time / s" or "Volume of CO₂ / cm³".',
          '<strong>Independent variable</strong> on the x-axis; <strong>dependent variable</strong> on the y-axis.',
          '<strong>Scale:</strong> choose a scale that uses more than half the grid in both directions; scale must be linear (equal intervals) and easy to read (multiples of 1, 2, 5, 10...).',
          '<strong>Plot points</strong> accurately using a small cross (×) or dot with a circle (⊙) — NOT large blobs.',
          '<strong>Best-fit line:</strong> draw a smooth straight line or smooth curve through the data; it does NOT need to pass through every point; roughly equal numbers of points above and below.',
          '<strong>Do not join point-to-point</strong> with a zigzag — use a single smooth best-fit line/curve.',
          '<strong>Anomalous points:</strong> identify with a circle or label; do NOT include in best-fit line.',
          '<strong>Origin:</strong> only include (0, 0) if it is a valid data point — do not force the line through the origin unless justified.',
        ],
      },
    },
    {
      id: 'h-gradient',
      type: 'heading',
      data: { text: 'Calculating Gradient and Intercept', level: 2 },
    },
    {
      id: 'callout-key-gradient',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gradient of a Straight-Line Graph',
        text: 'Gradient = Δy / Δx\n\nUse the best-fit LINE (not data points) to calculate the gradient. Draw a large triangle (using at least half the line) — larger triangle gives smaller percentage error.',
      },
    },
    {
      id: 'eq-gradient',
      type: 'equation',
      data: {
        html: 'gradient = <span class="nb-frac"><span class="nb-num">y₂ − y₁</span><span class="nb-den">x₂ − x₁</span></span>',
        caption: 'Use coordinates from the best-fit line (not data points). Units of gradient = unit of y ÷ unit of x.',
      },
    },
    {
      id: 'callout-worked-gradient',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Gradient',
        text: 'A graph of volume of gas (cm³) vs time (s) gives a straight line.\nPoints on the line: (0, 0) and (60, 48)\n\nGradient = (48 − 0) / (60 − 0) = 48/60 = 0.80 cm³ s⁻¹\n\nThis represents the rate of gas production.',
      },
    },
    {
      id: 'h-sf',
      type: 'heading',
      data: { text: 'Significant Figures (s.f.)', level: 2 },
    },
    {
      id: 'callout-key-sf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Significant Figures — Rules',
        text: '1. All non-zero digits are significant.\n2. Zeros between non-zero digits are significant (e.g. 1005 = 4 s.f.).\n3. Leading zeros (before first non-zero digit) are NOT significant (e.g. 0.0034 = 2 s.f.).\n4. Trailing zeros after a decimal point ARE significant (e.g. 2.50 = 3 s.f.).\n5. Trailing zeros in a whole number may or may not be significant — use standard form to clarify (e.g. 2.50 × 10³ = 3 s.f.).',
      },
    },
    {
      id: 'table-sf-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Significant figure examples',
        headers: ['Number', 'Number of s.f.', 'Reason'],
        rows: [
          ['0.00340', '3', 'Leading zeros not s.f.; trailing zero after decimal IS s.f.'],
          ['1005', '4', 'Zeros between non-zero digits are s.f.'],
          ['2700', '2 or 3 or 4', 'Ambiguous — use standard form: 2.7 × 10³ (2 s.f.)'],
          ['2.700 × 10³', '4', 'All digits including trailing zeros after decimal point'],
          ['0.0500', '3', 'Leading zeros not s.f.; 5, 0, 0 are all significant'],
          ['100.0', '4', 'Trailing zero after decimal is significant'],
        ],
      },
    },
    {
      id: 'h-sf-calculations',
      type: 'heading',
      data: { text: 'Significant Figures in Calculations', level: 2 },
    },
    {
      id: 'list-sf-calc',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Multiplication / division:</strong> answer has the same number of s.f. as the measurement with the FEWEST s.f.',
          '<strong>Addition / subtraction:</strong> answer has the same number of DECIMAL PLACES as the measurement with the fewest decimal places.',
          '<strong>Final answers:</strong> give to 3 s.f. unless the data or question specifies otherwise.',
          '<strong>Intermediate steps:</strong> keep extra digits during calculation; only round the FINAL answer.',
          'Do NOT round intermediate results — this causes rounding errors.',
        ],
      },
    },
    {
      id: 'callout-worked-sf',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Significant Figures',
        text: 'Calculate moles of NaOH:\nn = c × V = 0.100 mol dm⁻³ × 23.45 cm³\n\nConvert: 23.45 cm³ = 0.02345 dm³\nn = 0.100 × 0.02345 = 0.002345 mol\n\ns.f. in 0.100 = 3; s.f. in 0.02345 = 4\nAnswer to 3 s.f.: n = 2.35 × 10⁻³ mol (or 0.00235 mol)',
      },
    },
    {
      id: 'h-standard-form',
      type: 'heading',
      data: { text: 'Standard Form', level: 2 },
    },
    {
      id: 'callout-key-sf2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Standard Form — Format',
        text: 'A × 10ⁿ where 1 ≤ A < 10 and n is an integer.\n\nExamples:\n• 6.02 × 10²³ (Avogadro constant)\n• 1.38 × 10⁻²³ (Boltzmann constant)\n• 0.00235 = 2.35 × 10⁻³\n• 24000 = 2.4 × 10⁴',
      },
    },
    {
      id: 'h-units',
      type: 'heading',
      data: { text: 'Unit Conversions', level: 2 },
    },
    {
      id: 'table-units',
      type: 'comparisonTable',
      data: {
        caption: 'Essential unit conversions for A-level chemistry',
        headers: ['From', 'To', 'Conversion', 'Example'],
        rows: [
          ['cm³', 'dm³', 'Divide by 1000', '25.0 cm³ = 0.0250 dm³'],
          ['dm³', 'cm³', 'Multiply by 1000', '0.250 dm³ = 250 cm³'],
          ['dm³', 'm³', 'Divide by 1000', '1 dm³ = 0.001 m³'],
          ['°C', 'K', 'Add 273 (or 273.15)', '25 °C = 298 K'],
          ['K', '°C', 'Subtract 273', '298 K = 25 °C'],
          ['kJ', 'J', 'Multiply by 1000', '45.2 kJ = 45200 J'],
          ['J', 'kJ', 'Divide by 1000', '1250 J = 1.25 kJ'],
          ['g', 'kg', 'Divide by 1000', '24.3 g = 0.0243 kg'],
          ['atm', 'Pa', 'Multiply by 101325', '1 atm = 101325 Pa'],
          ['kPa', 'Pa', 'Multiply by 1000', '100 kPa = 100000 Pa'],
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always use at least half the graph grid — a cramped graph with a small scale loses marks.\n• Draw a large triangle to find gradient — larger = less percentage error in reading.\n• Give final answers to 3 s.f. unless told otherwise; always match s.f. to the least precise measurement.\n• Volume conversions: cm³ → dm³ divide by 1000 (VERY commonly needed in mole calculations).\n• Temperature conversions: always convert °C to K when using pV = nRT.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Joining data points with a zigzag instead of a smooth best-fit line.\n• Calculating gradient using data point coordinates instead of points READ FROM THE BEST-FIT LINE.\n• Forgetting to convert cm³ to dm³ before using c = n/V.\n• Rounding intermediate calculation steps — only round the final answer.\n• Confusing decimal places with significant figures.',
      },
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can plot a graph with correctly labelled axes, appropriate scale, and a smooth best-fit line.', checked: false },
          { text: 'I can calculate the gradient of a straight-line graph using a large triangle from the best-fit line.', checked: false },
          { text: 'I can count significant figures correctly for any number.', checked: false },
          { text: 'I can give answers to the correct number of s.f. in calculations (multiplication/division vs addition/subtraction).', checked: false },
          { text: 'I can convert cm³ ↔ dm³, °C ↔ K, J ↔ kJ without error.', checked: false },
        ],
      },
    },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Graphs visually represent the relationship between variables. Correct plotting requires appropriate scales, labelled axes with units, and accurate positioning of data points.\n\nApply: Given data for concentration vs rate, choose appropriate axis labels, scales, and plot the data. Should you draw a line of best fit or connect the dots?\n\nAnalyze: A student\'s graph has a best-fit line that passes through the origin. Does this necessarily prove a directly proportional relationship? What other evidence would you need?\n\nEvaluate: Compare the use of a line of best fit vs a curve of best fit. Under what circumstances is each appropriate? How does the choice affect the conclusions drawn from the data?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Graphs: x = independent variable, y = dependent; label axes with units; use >½ grid; smooth best-fit line; anomalies circled and excluded. Gradient = Δy/Δx from large triangle on best-fit line. s.f.: for ×÷ match fewest s.f.; for +− match fewest d.p. Standard form: A × 10ⁿ (1 ≤ A < 10). Key conversions: cm³÷1000=dm³; °C+273=K; J÷1000=kJ.' },
    },

    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Gradient Calculation \u2014 Use Best-Fit Line, Not Data Points",
        text: "A common mistake is calculating gradient using coordinates from actual data points: (x\u2081,y\u2081) to (x\u2082,y\u2082). You must instead use two points READ FROM YOUR SMOOTH BEST-FIT LINE. This gives a more representative gradient that avoids individual measurement errors."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "cm\u00b3 to dm\u00b3 Conversion \u2014 Major Calculation Trap",
        text: "Before using c = n/V, always convert volume to dm\u00b3. Forgetting to divide by 1000 (e.g. using 25 cm\u00b3 instead of 0.025 dm\u00b3) causes answers to be 1000\u00d7 wrong. This is one of the most common calculation errors in mole questions."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-graph-rules', prompt: 'List five rules for plotting a graph correctly.' },
      { id: 'cue-2', blockId: 'callout-key-gradient', prompt: 'How do you calculate the gradient of a best-fit line? Why use a large triangle?' },
      { id: 'cue-3', blockId: 'callout-key-sf', prompt: 'How many significant figures are in 0.00340? In 1005? In 2700?' },
      { id: 'cue-4', blockId: 'list-sf-calc', prompt: 'What rule applies to s.f. in multiplication/division? In addition/subtraction?' },
      { id: 'cue-5', blockId: 'table-units', prompt: 'Convert 25.0 cm³ to dm³. Convert 298 K to °C. Convert 1.25 kJ to J.' },
    ],
    summaryText: 'Graphs: label axes (quantity/unit), >½ grid, smooth best-fit, anomalies excluded. Gradient=Δy/Δx from best-fit line. s.f.: ×÷=fewest s.f.; +−=fewest d.p. Standard form: A×10ⁿ. Conversions: cm³÷1000=dm³; +273=K; ×1000=J.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH13 Specification', detail: 'Graphing and significant figures are assessed in WCH13 data analysis questions.', year: '2018', source: 'Pearson Edexcel', tags: ['graphs', 'significant figures', 'unit conversions'] },
  ],
};
