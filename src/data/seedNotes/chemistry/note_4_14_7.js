export const note_chemistry_4_14_7 = {
  blocks: [
    {
      id: 'obj-cp11',
      type: 'objective',
      data: {
        text: 'Understand Core Practical 11: determination of Ka of a weak acid by titration with standard NaOH solution; use pH measurements and graphical methods to find pKa'
      }
    },
    {
      id: 'h-cp11-intro',
      type: 'heading',
      data: { text: 'Core Practical 11: Determination of Ka of a Weak Acid', level: 2 }
    },
    {
      id: 'p-cp11-overview',
      type: 'paragraph',
      data: {
        text: 'In this core practical, the acid dissociation constant (Ka) of a weak acid (typically acetic acid, CH₃COOH) is determined experimentally by titrating a known concentration of the weak acid with a standard solution of NaOH. The key insight is that at the half-equivalence point, the concentrations of the weak acid [HA] and its conjugate base [A⁻] are equal, so pH = pKa (from the Henderson-Hasselbalch equation). By measuring the pH at this point, the pKa is determined, and Ka can be calculated.'
      }
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: { text: 'Apparatus and Chemicals', level: 2 }
    },
    {
      id: 'list-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Burette (50 mL) containing standard NaOH solution (typically 0.1 mol dm⁻³)',
          'Conical flask (250 mL) containing the weak acid solution (e.g., 25 mL of 0.1 mol dm⁻³ acetic acid)',
          'pH meter or pH paper (ideally a calibrated pH meter for accuracy)',
          'Pipette (25 mL) to measure the weak acid volume',
          'Beaker (100 mL) for mixing and measurement',
          'Funnel, glass rod, white tile'
        ]
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Experimental Method', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Prepare a standard NaOH solution (0.1 mol dm⁻³) and place it in a clean, dry burette. Record the initial burette reading.',
          'Using a pipette, transfer 25 mL of the weak acid solution (e.g., 0.1 mol dm⁻³ acetic acid) into a conical flask. Note the exact volume used.',
          'Add a small portion of the NaOH from the burette (e.g., 2–5 mL) to the acid in the flask. Swirl gently to mix. Measure and record the pH using the pH meter.',
          'Continue adding small portions of NaOH (2–5 mL each), measuring the pH after each addition. Swirl between additions.',
          'As you approach the equivalence point (observed when pH rises sharply), reduce the volume of each addition to 1–2 mL to obtain more precise measurements in the steep region.',
          'Once you have passed the equivalence point (pH >> 7, typically pH > 11), add larger volumes again (5–10 mL).',
          'Record the burette readings and corresponding pH values throughout the titration.',
          'Plot a graph of pH against cumulative volume of NaOH added (the titration curve).'
        ]
      }
    },
    {
      id: 'h-analysis',
      type: 'heading',
      data: { text: 'Data Analysis: Finding Ka', level: 2 }
    },
    {
      id: 'p-analysis-intro',
      type: 'paragraph',
      data: {
        text: 'From the titration curve, several methods can be used to determine Ka. The most straightforward is to find the half-equivalence point and read the pH at that volume, which equals pKa by the Henderson-Hasselbalch equation. Alternatively, the equivalence point can be identified from the curve, and the volume at half of the equivalence point volume is the half-equivalence point.'
      }
    },
    {
      id: 'p-method-1-half-equiv',
      type: 'paragraph',
      data: {
        text: 'Method 1 (Half-Equivalence Point): From the titration curve, locate the equivalence point (the midpoint of the steep region, where pH jumps most rapidly). Record the volume of NaOH at the equivalence point (V_eq). The half-equivalence point occurs at V_eq/2. Read the pH at this volume from the curve—this pH equals pKa. For example, if the equivalence point is at 25 mL, the half-equivalence is at 12.5 mL. If the pH at 12.5 mL is 4.74, then pKa = 4.74 and Ka = 10^(−4.74) ≈ 1.8 × 10⁻⁵.'
      }
    },
    {
      id: 'ex-analysis-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculating Ka from Titration Data',
        text: 'In a titration of 25 mL of 0.1 M acetic acid with 0.1 M NaOH: The equivalence point is found at 25 mL of NaOH added (because 0.1 × 25 = 0.1 × V_NaOH, so V_NaOH = 25). The half-equivalence point is at 12.5 mL. From the graph, the pH at 12.5 mL is 4.74. Therefore, pKa = 4.74 and Ka = 10^(−4.74) = 1.8 × 10⁻⁵ mol dm⁻³. This matches literature values for acetic acid.'
      }
    },
    {
      id: 'p-method-2-calculation',
      type: 'paragraph',
      data: {
        text: 'Method 2 (Calculation from Concentrations): If you accurately record the volume and concentrations throughout the titration, you can calculate [HA] and [A⁻] at any point using stoichiometry. Once [HA] and [A⁻] are known, Ka = [H⁺][A⁻]/[HA]. By measuring pH, [H⁺] = 10^(−pH). This method requires more calculation but allows Ka to be found at any point on the curve, not just at the half-equivalence point.'
      }
    },
    {
      id: 'h-sources-error',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 }
    },
    {
      id: 'list-errors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Incomplete mixing: Solution may not reach equilibrium between additions. Improvement: Stir thoroughly and allow time for equilibration.',
          'pH meter calibration: Uncalibrated meter gives inaccurate readings. Improvement: Calibrate the pH meter using buffer solutions of known pH (e.g., pH 4.0 and pH 7.0) before each set of measurements.',
          'CO₂ absorption: NaOH solution can absorb atmospheric CO₂, forming Na₂CO₃, which affects concentration. Improvement: Store NaOH under oil or use freshly prepared solution; cover the burette with soda lime tube.',
          'Parallax error in reading burette: Misreading the meniscus. Improvement: Read at eye level and from the bottom of the meniscus consistently.',
          'Temperature changes: pH varies slightly with temperature. Improvement: Perform the titration at room temperature and allow time for temperature equilibration.',
          'Inadequate precision near equivalence point: Large pH changes for small volume additions make it hard to pinpoint exactly. Improvement: Add NaOH very slowly (0.5–1 mL at a time) near the equivalence point.',
          'Indicator colour obscuring pH meter reading: If an indicator is used (not recommended with a pH meter), its colour may interfere. Improvement: Use only a pH meter, no indicator.'
        ]
      }
    },
    {
      id: 'h-safety',
      type: 'heading',
      data: { text: 'Safety Considerations', level: 2 }
    },
    {
      id: 'list-safety',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Wear safety goggles and a lab coat to protect against acid and base splashes.',
          'NaOH is caustic and can cause severe burns. Handle with care and wash hands immediately if contact occurs.',
          'Acetic acid (vinegar-like) is irritating; avoid inhalation of vapours.',
          'If any chemical enters your eyes, flush immediately with water for at least 15 minutes and seek medical attention.',
          'Clean up any spills immediately using appropriate absorbent material.'
        ]
      }
    },
    {
      id: 'h-results',
      type: 'heading',
      data: { text: 'Expected Results and Discussion', level: 2 }
    },
    {
      id: 'p-expected',
      type: 'paragraph',
      data: {
        text: 'For acetic acid (pKa ≈ 4.74, Ka ≈ 1.8 × 10⁻⁵), the half-equivalence point pH should be around 4.7–4.8, giving pKa close to this value. The titration curve should show: (1) a low initial pH (around 2.9 for 0.1 M acetic acid), (2) a gradual rise as the buffer region is entered, (3) a sharp rise at the equivalence point (pH ≈ 8.7 for weak acid with strong base), and (4) a plateau at high pH. Any deviation from expected values might indicate experimental error or an unusual acid strength.'
      }
    },
    {
      id: 'ex-discussion',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Discussion Points for Your Report',
        text: 'Compare your experimental Ka to literature values. Comment on agreement or sources of discrepancy. Discuss how the titration curve shape matches theory. Explain why pH changes more rapidly near the equivalence point. Suggest improvements for better accuracy. Consider whether using an indicator (methyl orange vs phenolphthalein) would have affected results.'
      }
    },
    {
      id: 'h-graph-tips',
      type: 'heading',
      data: { text: 'Graphing Tips', level: 2 }
    },
    {
      id: 'list-graphing',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Plot pH (y-axis, range 0–14) against cumulative volume of NaOH added (x-axis, in mL).',
          'Use graph paper or spreadsheet software for accuracy.',
          'Plot all data points and draw a smooth curve (not connecting dots with straight lines).',
          'Clearly label the axes with units and title: "Titration of Weak Acid with Standard NaOH".',
          'Identify and mark the equivalence point (steepest part of the curve) with a vertical line.',
          'Mark the half-equivalence point (half the x-coordinate of equivalence point) and read the pH value.',
          'From the pH at half-equivalence, state the pKa and calculate Ka.'
        ]
      }
    },
    {
      id: 'checklist-cp11',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can describe the apparatus and chemicals for Core Practical 11', checked: false },
          { text: 'Can perform the titration and record accurate pH and volume readings', checked: false },
          { text: 'Can plot the titration curve correctly', checked: false },
          { text: 'Can identify the equivalence point and half-equivalence point on the curve', checked: false },
          { text: 'Can calculate Ka from the half-equivalence point pH (pKa)', checked: false },
          { text: 'Can identify sources of error and suggest improvements', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: At the half-equivalence point, [HA] = [A⁻], so pH = pKa. This provides a direct experimental method for determining Ka of a weak acid.\n\nApply: A weak acid titrated with NaOH reaches half-equivalence at pH 4.2. Calculate Ka.\n\nAnalyze: Why does pH change very little around the half-equivalence point? Relate to buffer capacity.\n\nEvaluate: Compare using a pH meter vs an indicator for titrating a weak acid. Which gives more information?'
      },
      terms: []
    },
    {
      id: 'summary-cp11',
      type: 'summary',
      data: {
        text: 'Core Practical 11: Titrate weak acid with standard NaOH. Measure pH at each volume. Plot titration curve. Find half-equivalence point (volume at V_eq/2). pH at half-equivalence = pKa. Calculate Ka = 10^(−pKa). Calibrate pH meter before use. Add NaOH slowly near equivalence point for accuracy.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-cp11-overview',
        prompt: 'What is the key principle of Core Practical 11? How does the half-equivalence point relate to pKa?'
      },
      {
        id: 'cue-2',
        blockId: 'list-method',
        prompt: 'Describe the steps of the titration procedure, especially near the equivalence point.'
      },
      {
        id: 'cue-3',
        blockId: 'p-method-1-half-equiv',
        prompt: 'If a titration shows equivalence point at 30 mL, where is the half-equivalence point and what does its pH tell you?'
      },
      {
        id: 'cue-4',
        blockId: 'ex-analysis-1',
        prompt: 'In a titration of 25 mL of 0.1 M acetic acid with 0.1 M NaOH, the pH at 12.5 mL is 4.74. Calculate Ka.'
      },
      {
        id: 'cue-5',
        blockId: 'list-errors',
        prompt: 'Name three sources of error in this practical and suggest how to minimise each.'
      }
    ],
    summaryText: 'Core Practical 11: Titrate weak acid with standard NaOH. pH = pKa at half-equivalence point. Plot curve, find half-equivalence volume (V_eq/2), read pH, calculate Ka = 10^(−pH). Calibrate pH meter. Add small volumes near equivalence point.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 11: Ka Determination by Titration',
      detail: 'Experimental method to measure weak acid strength using pH measurements.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['core practical', 'Ka', 'titration', 'pH meter', 'half-equivalence']
    }
  ]
};
