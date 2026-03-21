export const note_chemistry_4_14_1 = {
  blocks: [
    {
      id: 'obj-conjugate',
      type: 'objective',
      data: {
        text: 'Understand conjugate acid-base pairs; identify conjugate pairs in equations; predict relative acid and base strengths from conjugate pair rules'
      }
    },
    {
      id: 'h-conjugate-def',
      type: 'heading',
      data: { text: 'Conjugate Acid-Base Pairs', level: 2 }
    },
    {
      id: 'p-conjugate',
      type: 'paragraph',
      data: {
        text: 'A conjugate acid-base pair consists of two species that differ by exactly one proton (H⁺). When an acid donates a proton, it forms its conjugate base. When a base accepts a proton, it forms its conjugate acid. For example, in the equilibrium HA ⇌ H⁺ + A⁻, HA and A⁻ are a conjugate acid-base pair; HA is the acid, A⁻ is its conjugate base.'
      }
    },
    {
      id: 'eq-conjugate-pair',
      type: 'equation',
      data: {
        html: 'HA ⇌ H<sup>+</sup> + A<sup>−</sup> &emsp; or &emsp; HA + B ⇌ A<sup>−</sup> + BH<sup>+</sup>',
        caption: 'Generic conjugate acid-base pair equilibrium'
      }
    },
    {
      id: 'h-identifying',
      type: 'heading',
      data: { text: 'Identifying Conjugate Pairs', level: 2 }
    },
    {
      id: 'p-identify',
      type: 'paragraph',
      data: {
        text: 'To identify a conjugate pair, look for two species in an equation that differ by exactly one H⁺. The species with the H⁺ is the acid; the species without it is the base. In the equation HA + B ⇌ A⁻ + BH⁺, the conjugate pairs are (HA, A⁻) and (B, BH⁺). Both pairs differ by one proton.'
      }
    },
    {
      id: 'ex-identifying-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: HCl + H₂O ⇌ H₃O⁺ + Cl⁻',
        text: 'Conjugate pairs: (HCl, Cl⁻) — HCl is the acid, Cl⁻ is its conjugate base. (H₂O, H₃O⁺) — H₂O is the base, H₃O⁺ is its conjugate acid. Each pair differs by one H⁺.'
      }
    },
    {
      id: 'ex-identifying-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻',
        text: 'Conjugate pairs: (H₂O, OH⁻) — H₂O is the acid, OH⁻ is its conjugate base. (NH₄⁺, NH₃) — NH₄⁺ is the acid, NH₃ is its conjugate base. Both pairs differ by one H⁺.'
      }
    },
    {
      id: 'h-strength-relation',
      type: 'heading',
      data: { text: 'Relationship Between Conjugate Pair Strengths', level: 2 }
    },
    {
      id: 'p-strength',
      type: 'paragraph',
      data: {
        text: 'If an acid is strong (completely donates its proton), its conjugate base is weak (does not accept protons readily). If an acid is weak (only partially donates its proton), its conjugate base is relatively strong. This inverse relationship comes from Le Chatelier\'s principle: a strong acid has already donated its proton, leaving a weak base; a weak acid has not fully donated, leaving a relatively strong conjugate base.'
      }
    },
    {
      id: 'tbl-conjugate-strength',
      type: 'comparisonTable',
      data: {
        headers: ['Acid', 'Acid Strength', 'Conjugate Base', 'Base Strength'],
        rows: [
          ['HCl', 'Very strong', 'Cl⁻', 'Very weak (inert)'],
          ['H₂SO₄ (first)', 'Very strong', 'HSO₄⁻', 'Very weak'],
          ['HNO₃', 'Strong', 'NO₃⁻', 'Weak (inert)'],
          ['CH₃COOH', 'Weak', 'CH₃COO⁻', 'Relatively strong base'],
          ['HF', 'Weak', 'F⁻', 'Relatively strong base'],
          ['NH₄⁺', 'Weak acid', 'NH₃', 'Weak base (moderate strength)'],
          ['H₂O', 'Very weak', 'OH⁻', 'Moderate base']
        ],
        caption: 'Inverse relationship between acid strength and conjugate base strength'
      }
    },
    {
      id: 'p-rule-strength',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conjugate Pair Strength Rule',
        text: 'Strong acid → weak conjugate base. Weak acid → relatively strong conjugate base. The stronger the acid, the weaker its conjugate base. This comes from equilibrium: if the forward reaction (acid dissociation) is favoured, the reverse (base accepting a proton) is not favoured.'
      }
    },
    {
      id: 'h-water-pairs',
      type: 'heading',
      data: { text: 'Water as Conjugate Pair Member', level: 2 }
    },
    {
      id: 'p-water-pairs',
      type: 'paragraph',
      data: {
        text: 'Water appears in many conjugate pair relationships. Water is the conjugate base of H₃O⁺ (hydronium ion): H₃O⁺ ⇌ H⁺ + H₂O. Water is also the conjugate acid of OH⁻: H₂O ⇌ H⁺ + OH⁻. In the autoionization of water, H₂O + H₂O ⇌ H₃O⁺ + OH⁻, the conjugate pairs are (H₂O, OH⁻) and (H₃O⁺, H₂O).'
      }
    },
    {
      id: 'h-polyprotic',
      type: 'heading',
      data: { text: 'Conjugate Pairs in Polyprotic Acids', level: 2 }
    },
    {
      id: 'p-polyprotic',
      type: 'paragraph',
      data: {
        text: 'Polyprotic acids can donate more than one proton. For example, H₂SO₄ has two protons: H₂SO₄ → H⁺ + HSO₄⁻ (first dissociation) and HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (second dissociation). The conjugate pairs are (H₂SO₄, HSO₄⁻) and (HSO₄⁻, SO₄²⁻). Note that HSO₄⁻ appears in both pairs: it is the conjugate base of H₂SO₄ and the conjugate acid of SO₄²⁻. This makes HSO₄⁻ amphoteric.'
      }
    },
    {
      id: 'ex-polyprotic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: H₂CO₃ and its Conjugate Pairs',
        text: 'H₂CO₃ (carbonic acid) has two protons. First dissociation: H₂CO₃ ⇌ H⁺ + HCO₃⁻ (conjugate pair: H₂CO₃, HCO₃⁻). Second dissociation: HCO₃⁻ ⇌ H⁺ + CO₃²⁻ (conjugate pair: HCO₃⁻, CO₃²⁻). HCO₃⁻ is amphoteric: it is a base relative to H₂CO₃ and an acid relative to CO₃²⁻.'
      }
    },
    {
      id: 'checklist-conjugate',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can define conjugate acid-base pairs', checked: false },
          { text: 'Can identify conjugate pairs in chemical equations', checked: false },
          { text: 'Understand that strong acids have weak conjugate bases', checked: false },
          { text: 'Understand that weak acids have relatively strong conjugate bases', checked: false },
          { text: 'Can recognize amphoteric species in polyprotic acid systems', checked: false }
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
        text: 'Understand: Every acid has a conjugate base (formed after losing H⁺) and vice versa. Strong acids have weak conjugate bases; weak acids have relatively strong conjugate bases.\n\nApply: Write the conjugate base of H₂SO₄, HSO₄⁻, and H₂O. Which is the strongest base?\n\nAnalyze: Why is the conjugate base of a strong acid always a very weak base? Use equilibrium principles.\n\nEvaluate: Water\'s conjugate acid is H₃O⁺ and its conjugate base is OH⁻. Discuss why water is considered amphoteric.'
      },
      terms: []
    },
    {
      id: 'summary-conjugate',
      type: 'summary',
      data: {
        text: 'Conjugate pairs differ by one H⁺. Strong acid → weak conjugate base. Weak acid → relatively strong conjugate base. Water is amphoteric. Polyprotic acids form multiple conjugate pairs; middle species are amphoteric.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Strong Acid \u2192 Weak Conjugate Base (Inverse Relationship)",
        text: "HCl is a very strong acid; its conjugate base Cl\u207b is extremely weak (inert, does not accept H\u207a). Conversely, CH\u2083COOH is weak; its conjugate base CH\u2083COO\u207b is relatively strong. This inverse relationship comes from equilibrium: if forward reaction heavily favours products, reverse does not."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Polyprotic Acids: HSO\u2084\u207b Appears Twice",
        text: "In H\u2082SO\u2084 \u2192 HSO\u2084\u207b \u2192 SO\u2084\u00b2\u207b, the HSO\u2084\u207b is BOTH the conjugate base of H\u2082SO\u2084 AND the conjugate acid of SO\u2084\u00b2\u207b. This makes it amphoteric. Exams test this concept \u2014 students miss it if not careful."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-conjugate',
        prompt: 'Define a conjugate acid-base pair and give an example.'
      },
      {
        id: 'cue-2',
        blockId: 'ex-identifying-1',
        prompt: 'For HCl + H₂O ⇌ H₃O⁺ + Cl⁻, identify the conjugate acid-base pairs.'
      },
      {
        id: 'cue-3',
        blockId: 'p-strength',
        prompt: 'Explain the relationship between acid strength and conjugate base strength.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-conjugate-strength',
        prompt: 'Why is Cl⁻ a weak base while CH₃COO⁻ is a relatively strong base?'
      },
      {
        id: 'cue-5',
        blockId: 'ex-polyprotic',
        prompt: 'In the H₂CO₃ system, explain why HCO₃⁻ is amphoteric.'
      }
    ],
    summaryText: 'Conjugate pair = two species differing by one H⁺. Strong acid → weak conjugate base. Weak acid → relatively strong conjugate base. Water: H₃O⁺/H₂O and H₂O/OH⁻ are conjugate pairs. Polyprotic acids create multiple conjugate pairs.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Conjugate Acid-Base Pairs',
      detail: 'Central concept in acid-base chemistry; defines relative strengths.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['acid-base', 'conjugate pairs', 'amphoteric', 'polyprotic']
    }
  ]
};
