export const note_chemistry_4_14_6 = {
  blocks: [
    {
      id: 'obj-titration',
      type: 'objective',
      data: {
        text: 'Understand titration curves for different acid-base combinations; identify equivalence point and steep region; select appropriate indicators; interpret pKind and half-equivalence point'
      }
    },
    {
      id: 'h-titration-intro',
      type: 'heading',
      data: { text: 'Titration Curves: Overview', level: 2 }
    },
    {
      id: 'p-titration-intro',
      type: 'paragraph',
      data: {
        text: 'A titration curve plots pH against the volume of titrant (acid or base) added during a titration. The shape of the curve depends on what is being titrated (strong acid, weak acid, strong base, weak base) and what is being added. Key features include the initial pH, the equivalence point (where moles of acid equals moles of base), the steep region (where pH changes most rapidly), and the final plateau. Titration curves help us understand acid-base reactions and choose appropriate indicators.'
      }
    },
    {
      id: 'h-strong-strong',
      type: 'heading',
      data: { text: 'Titration Curve: Strong Acid vs Strong Base', level: 2 }
    },
    {
      id: 'p-strong-strong',
      type: 'paragraph',
      data: {
        text: 'When titrating a strong acid (e.g., HCl) with a strong base (e.g., NaOH), the equivalence point occurs at pH = 7 because the salt produced (NaCl) does not hydrolyse. Before the equivalence point, excess strong acid dominates and pH is low. At the equivalence point, pH = 7. After the equivalence point, excess strong base dominates and pH is high. The steep region is sharp and narrow, centered at pH 7. Any indicator with a pKind between 4 and 10 can be used (e.g., methyl orange, methyl red, or phenolphthalein).'
      }
    },
    {
      id: 'svg-strong-strong-curve',
      type: 'svg',
      data: {
        svg: '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis{stroke:black;stroke-width:2}.tick{stroke:black;stroke-width:1}.label{font-size:12px;font-family:Arial}</style></defs><line class="axis" x1="50" y1="250" x2="380" y2="250"/><line class="axis" x1="50" y1="20" x2="50" y2="250"/><text class="label" x="190" y="280">Volume of NaOH added (mL)</text><text class="label" x="10" y="135">pH</text><line x1="45" y1="50" x2="50" y2="50"/><text class="label" x="30" y="55">14</text><line x1="45" y1="150" x2="50" y2="150"/><text class="label" x="35" y="155">7</text><line x1="45" y1="250" x2="50" y2="250"/><text class="label" x="35" y="255">0</text><polyline points="60,245 100,240 140,230 180,200 220,150 240,100 260,50 300,30 340,25" style="fill:none;stroke:blue;stroke-width:2"/><circle cx="220" cy="150" r="3" fill="red"/><text class="label" x="220" y="170" text-anchor="middle">Equivalence (pH=7)</text></svg>',
        caption: 'Strong acid (HCl) titrated with strong base (NaOH): equivalence point at pH 7'
      }
    },
    {
      id: 'h-weak-strong',
      type: 'heading',
      data: { text: 'Titration Curve: Weak Acid vs Strong Base', level: 2 }
    },
    {
      id: 'p-weak-strong',
      type: 'paragraph',
      data: {
        text: 'When titrating a weak acid (e.g., CH₃COOH) with a strong base (e.g., NaOH), the equivalence point occurs at pH > 7 because the salt produced (CH₃COONa) contains acetate ions, which are weak bases and hydrolyse to raise pH. Before the equivalence point, the solution is a buffer of weak acid and its conjugate base (acetate), so pH increases gradually. At the half-equivalence point (when exactly half the acid has been neutralized), the concentrations of HA and A⁻ are equal, so pH = pKa by the Henderson-Hasselbalch equation. The steep region is less sharp than for strong/strong titrations, centered at a pH > 7 (typically around pH 8−10 for acetic acid with pKa ≈ 4.74).'
      }
    },
    {
      id: 'svg-weak-strong-curve',
      type: 'svg',
      data: {
        svg: '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis{stroke:black;stroke-width:2}.tick{stroke:black;stroke-width:1}.label{font-size:12px;font-family:Arial}</style></defs><line class="axis" x1="50" y1="250" x2="380" y2="250"/><line class="axis" x1="50" y1="20" x2="50" y2="250"/><text class="label" x="190" y="280">Volume of NaOH added (mL)</text><text class="label" x="10" y="135">pH</text><line x1="45" y1="50" x2="50" y2="50"/><text class="label" x="30" y="55">14</text><line x1="45" y1="150" x2="50" y2="150"/><text class="label" x="35" y="155">7</text><line x1="45" y1="250" x2="50" y2="250"/><text class="label" x="35" y="255">0</text><polyline points="60,220 100,200 140,175 180,130 220,100 240,70 260,40 300,25 340,22" style="fill:none;stroke:green;stroke-width:2"/><circle cx="220" cy="100" r="3" fill="red"/><text class="label" x="220" y="120" text-anchor="middle">Equivalence (pH≈9)</text><circle cx="110" cy="180" r="3" fill="orange"/><text class="label" x="110" y="160" text-anchor="middle">Half-equiv (pH=pKa)</text></svg>',
        caption: 'Weak acid (CH₃COOH) titrated with strong base (NaOH): equivalence point at pH > 7, half-equivalence at pH = pKa'
      }
    },
    {
      id: 'h-strong-weak',
      type: 'heading',
      data: { text: 'Titration Curve: Strong Acid vs Weak Base', level: 2 }
    },
    {
      id: 'p-strong-weak',
      type: 'paragraph',
      data: {
        text: 'When titrating a strong base (e.g., NaOH) with a strong acid (e.g., HCl), or conversely, a weak base (e.g., NH₃) with a strong acid, the equivalence point occurs at pH < 7. This is because the salt contains a weak conjugate acid (e.g., NH₄⁺ from NH₃ + HCl → NH₄Cl). The conjugate acid hydrolyses to lower pH. Before the equivalence point, the solution is a buffer of weak base and its conjugate acid. At the half-equivalence point, pH = pKb (or can be related to pKa of the conjugate acid). The steep region is less sharp than for strong/strong titrations, centered at a pH < 7.'
      }
    },
    {
      id: 'h-weak-weak',
      type: 'heading',
      data: { text: 'Titration Curve: Weak Acid vs Weak Base', level: 2 }
    },
    {
      id: 'p-weak-weak',
      type: 'paragraph',
      data: {
        text: 'Weak acid versus weak base titrations are complex. The equivalence point pH depends on the relative strengths (Ka and Kb) of the acid and base. If Ka > Kb, the equivalence point is acidic (pH < 7). If Ka < Kb, the equivalence point is basic (pH > 7). If Ka ≈ Kb, the equivalence point is near pH 7. These titrations are generally not recommended in practice because the equivalence point is not sharp, making indicator selection difficult.'
      }
    },
    {
      id: 'h-indicators',
      type: 'heading',
      data: { text: 'Choosing Indicators: pKind', level: 2 }
    },
    {
      id: 'p-indicators-intro',
      type: 'paragraph',
      data: {
        text: 'Acid-base indicators are weak acids or bases that change colour depending on pH. Each indicator has a colour change range, typically spanning about 2 pH units centred at its pKind (the pH at which the indicator is 50% dissociated, i.e., half its colour one way and half the other). The indicator must be chosen so that its colour change range overlaps the steep region of the titration curve.'
      }
    },
    {
      id: 'tbl-indicators',
      type: 'comparisonTable',
      data: {
        headers: ['Indicator', 'pKind', 'Colour Range (pH)', 'Colour Change', 'Best Used For'],
        rows: [
          ['Methyl orange', '3.4', '3.1–4.4', 'Red to yellow', 'Strong acid/strong base (HCl + NaOH)'],
          ['Methyl red', '5.1', '4.4–6.2', 'Red to yellow', 'Weak acid/strong base (CH₃COOH + NaOH)'],
          ['Phenolphthalein', '8.3', '8.3–10.0', 'Colourless to pink', 'Weak acid/strong base (CH₃COOH + NaOH)']
        ],
        caption: 'Common acid-base indicators and their properties'
      }
    },
    {
      id: 'p-indicator-choice',
      type: 'paragraph',
      data: {
        text: 'For strong acid–strong base (equivalence pH = 7), methyl orange (pKind 3.4) is not ideal but works because the steep region is very sharp. For weak acid–strong base (equivalence pH ≈ 8−9), phenolphthalein (pKind 8.3) is ideal because its colour change range (8.3−10.0) overlaps the steep region. For weak base–strong acid (equivalence pH ≈ 5−6), methyl red (pKind 5.1) is appropriate.'
      }
    },
    {
      id: 'ex-indicator-choice',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Indicator Selection',
        text: 'Titrating acetic acid (weak) with NaOH (strong): equivalence point at pH ≈ 9. The steep region spans roughly pH 8–10. Phenolphthalein (pKind 8.3, range 8.3–10.0) is perfect because its colour change overlaps the steep region. Methyl orange (range 3.1–4.4) would NOT work because it changes colour far below the steep region.'
      }
    },
    {
      id: 'h-half-equivalence',
      type: 'heading',
      data: { text: 'The Half-Equivalence Point', level: 2 }
    },
    {
      id: 'p-half-equiv',
      type: 'paragraph',
      data: {
        text: 'At the half-equivalence point of a weak acid–strong base titration, exactly half the weak acid has been neutralized, so [HA] = [A⁻]. By the Henderson-Hasselbalch equation, pH = pKa + log(1) = pKa. This is a practical way to measure pKa: carry out a titration, find the volume at the equivalence point, take half that volume, and measure the pH at that point—that pH is the pKa of the acid. This method is often used in practice and is part of Core Practical 11.'
      }
    },
    {
      id: 'checklist-titration',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can describe the shape of strong/strong titration curves', checked: false },
          { text: 'Can describe the shape of weak/strong titration curves and identify equivalence point pH', checked: false },
          { text: 'Understand the half-equivalence point and its relation to pKa', checked: false },
          { text: 'Can select appropriate indicators based on pKind and titration type', checked: false },
          { text: 'Know the colour changes of methyl orange and phenolphthalein', checked: false }
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
        text: 'Understand: Titration curves show pH vs volume of titrant. The steep region around the equivalence point determines appropriate indicator choice — the indicator\'s pKind must lie within this range.\n\nApply: Sketch the titration curve for weak acid + strong base. Identify the equivalence point pH and explain why it is above 7.\n\nAnalyze: Why is methyl orange unsuitable for weak acid/strong base titrations but phenolphthalein works?\n\nEvaluate: A diprotic acid like H₂SO₄ shows two equivalence points. How does this affect indicator choice?'
      },
      terms: []
    },
    {
      id: 'summary-titration',
      type: 'summary',
      data: {
        text: 'Strong/strong: equivalence at pH 7, steep region sharp, any indicator works. Weak/strong: equivalence at pH > 7, buffer region, phenolphthalein ideal. Half-equivalence point: pH = pKa. Indicator choice: pKind must overlap steep region. pKind defines the centre of the indicator\'s colour change range.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-strong-strong',
        prompt: 'For a strong acid–strong base titration, where is the equivalence point and why?'
      },
      {
        id: 'cue-2',
        blockId: 'p-weak-strong',
        prompt: 'For a weak acid–strong base titration, where is the equivalence point and why?'
      },
      {
        id: 'cue-3',
        blockId: 'p-half-equiv',
        prompt: 'What is the half-equivalence point and what is the pH at this point?'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-indicators',
        prompt: 'Why is phenolphthalein ideal for weak acid–strong base titrations but not for strong acid–strong base?'
      },
      {
        id: 'cue-5',
        blockId: 'ex-indicator-choice',
        prompt: 'You are titrating acetic acid with NaOH. Which indicator would you use and why?'
      }
    ],
    summaryText: 'Strong/strong: equivalence pH = 7. Weak/strong: equivalence pH > 7, half-equivalence pH = pKa. Half-equivalence: [HA] = [A⁻], pH = pKa. Phenolphthalein (pKind 8.3) for weak/strong. Methyl orange (pKind 3.4) for strong/strong. Indicator pKind must overlap steep region.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Titration Curves and Indicator Selection',
      detail: 'Shape depends on acid-base types; equivalence point pH varies.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['titration', 'titration curve', 'indicators', 'pKind', 'equivalence point']
    }
  ]
};
