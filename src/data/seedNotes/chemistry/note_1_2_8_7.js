/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 7
 * Halides with sulfuric acid
 */

export const note_chemistry_1_2_8_7 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe and explain the reactions of sodium halides with concentrated sulfuric acid. Explain why the products differ for NaCl, NaBr and NaI in terms of reducing ability of halide ions.'
    }
  }, {
    id: 'h-h2so4',
    type: 'heading',
    data: {
      text: 'Reactions of Halides with Concentrated H₂SO₄',
      level: 2
    },
    terms: ['Halide']
  }, {
    id: 'p-h2so4',
    type: "list",
    data: {
      style: "unordered",
      items: ["When sodium halides are treated with concentrated sulfuric acid, the initial reaction is an acid\u2013base reaction producing HX.", "However, HBr and HI (but not HCl) are strong enough reducing agents to further reduce the H\u2082SO\u2084, giving different products."]
    },
    terms: ['Halide']
  }, {
    id: 'h-nacl',
    type: 'heading',
    data: {
      text: 'NaCl + Conc H₂SO₄',
      level: 3
    },
    terms: []
  }, {
    id: 'callout-nacl',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ NaCl Reaction',
      text: 'NaCl(s) + H₂SO₄(l) → NaHSO₄(s) + HCl(g)\n\nObservation: steamy fumes of HCl (turns moist blue litmus red)\nNo further reaction — Cl⁻ is too weak a reducing agent to reduce H₂SO₄\nS remains as +6 (in H₂SO₄ and NaHSO₄)\n\nThis reaction can be used to prepare HCl gas in the lab.'
    }
  }, {
    id: 'h-nabr',
    type: 'heading',
    data: {
      text: 'NaBr + Conc H₂SO₄',
      level: 3
    },
    terms: []
  }, {
    id: 'callout-nabr',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ NaBr Reaction',
      text: 'Step 1 (acid-base):\n  NaBr(s) + H₂SO₄(l) → NaHSO₄(s) + HBr(g)\n\nStep 2 (redox — HBr reduces H₂SO₄):\n  2HBr(g) + H₂SO₄(l) → Br₂(g) + SO₂(g) + 2H₂O(l)\n\nObservations:\n  • Steamy fumes of HBr initially\n  • Red-brown fumes of Br₂\n  • Colourless gas SO₂ (choking smell)\n\nS: +6 → +4 (reduced); Br: −1 → 0 (oxidised)\nBr⁻ is a stronger reducing agent than Cl⁻ — can reduce H₂SO₄ to SO₂'
    }
  }, {
    id: 'h-nai',
    type: 'heading',
    data: {
      text: 'NaI + Conc H₂SO₄',
      level: 3
    },
    terms: []
  }, {
    id: 'callout-nai',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ NaI Reaction',
      text: 'Step 1 (acid-base):\n  NaI(s) + H₂SO₄(l) → NaHSO₄(s) + HI(g)\n\nStep 2 (redox — HI reduces H₂SO₄ further than HBr):\n  8HI(g) + H₂SO₄(l) → 4I₂(s) + H₂S(g) + 4H₂O(l)\n  (also some SO₂ and S)\n\nObservations:\n  • Steamy fumes of HI\n  • Black solid/purple fumes of I₂\n  • Rotten egg smell of H₂S\n  • Yellow deposit of S\n  • Colourless SO₂ gas\n\nS: +6 → −2 (reduced to H₂S) — a much greater reduction than for Br⁻\nI⁻ is the strongest reducing agent of the halides — can reduce H₂SO₄ all the way to H₂S'
    }
  }, {
    id: 'table-comparison',
    type: 'comparisonTable',
    data: {
      caption: 'Summary — halide reactions with concentrated H₂SO₄',
      headers: ['Halide', 'Initial product', 'Further redox?', 'Sulfur product', 'Observation'],
      rows: [['Cl⁻', 'HCl', 'No', 'H₂SO₄ (S stays +6)', 'Steamy white fumes only'], ['Br⁻', 'HBr', 'Yes (reduces to SO₂)', 'SO₂ (S = +4)', 'Red-brown Br₂ fumes + SO₂'], ['I⁻', 'HI', 'Yes (reduces to H₂S)', 'H₂S (S = −2) + S + SO₂', 'Black I₂, rotten-egg H₂S, yellow S']]
    },
    terms: ['Halide']
  }, {
    id: 'callout-tip-h2so4',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — H₂SO₄ Reactions',
      text: 'Key pattern to remember:\n  Cl⁻: too weak to reduce H₂SO₄ → only HCl produced\n  Br⁻: strong enough to reduce H₂SO₄ to SO₂ (S: +6 → +4)\n  I⁻: strongest — reduces H₂SO₄ all the way to H₂S (S: +6 → −2)\n\nThis is also why we CANNOT use conc H₂SO₄ to make pure HBr or HI — it would oxidise them.\nTo make HBr/HI, use concentrated phosphoric acid (H₃PO₄) instead — it is non-oxidising.'
    }
  }, {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'NaCl + conc H₂SO₄: only HCl fumes; no redox',
        checked: false
      }, {
        text: 'NaBr + conc H₂SO₄: HBr then Br₂ + SO₂; S reduced to +4',
        checked: false
      }, {
        text: 'NaI + conc H₂SO₄: HI then I₂ + H₂S (+ S + SO₂); S reduced to −2',
        checked: false
      }, {
        text: 'Reducing power: I⁻ > Br⁻ > Cl⁻ — explains difference in products',
        checked: false
      }, {
        text: 'Cannot use conc H₂SO₄ to make pure HBr or HI — use H₃PO₄ instead',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'NaCl + conc H₂SO₄ gives only HCl (Cl⁻ too weak to reduce H₂SO₄). NaBr gives HBr then Br₂ + SO₂ (S: +6 → +4). NaI gives HI then I₂ + H₂S (S: +6 → −2) plus S and SO₂. The trend reflects increasing reducing power of halide ions: Cl⁻ < Br⁻ < I⁻.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-nacl',
      prompt: 'What are the products when NaCl reacts with conc H₂SO₄? Is there any redox? What is observed?'
    }, {
      id: 'cue-2',
      blockId: 'callout-nabr',
      prompt: 'Write equations for both steps of NaBr + conc H₂SO₄. What is the oxidation state change of S?'
    }, {
      id: 'cue-3',
      blockId: 'callout-nai',
      prompt: 'What products form when NaI reacts with conc H₂SO₄? Describe the observations. Why is H₂S formed and not SO₂?'
    }],
    summaryText: 'NaCl/NaBr/NaI with conc H₂SO₄, reducing power trend, products and observations.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 8: Halides',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Halides', 'Sulfuric acid']
  }]
};