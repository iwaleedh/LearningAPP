export const note_olevel_chemistry_7_7_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-1-3-proton-transfer-strong-and-weak-acids.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain acid–base reactions as proton transfer, and distinguish between strong and weak acids.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Acid–Base Theory: Proton Transfer', level: 2 }
    },
    {
      id: 'call-brønsted',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Brønsted–Lowry Definitions',
        text: '<strong>Acid</strong> = proton (H⁺) donor<br/><strong>Base</strong> = proton (H⁺) acceptor<br/><br/>In the reaction: HCl + H₂O → H₃O⁺ + Cl⁻<br/>• HCl <strong>donates</strong> H⁺ → acid<br/>• H₂O <strong>accepts</strong> H⁺ → base<br/><br/>In the reaction: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻<br/>• H₂O <strong>donates</strong> H⁺ → acid<br/>• NH₃ <strong>accepts</strong> H⁺ → base<br/><br/>Note: H₂O can act as both acid and base (amphoteric).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Strong vs Weak Acids', level: 2 }
    },
    {
      id: 'tbl-strength',
      type: 'comparisonTable',
      data: {
        caption: 'Strong vs Weak Acids',
        headers: ['Property', 'Strong Acid', 'Weak Acid'],
        rows: [
          ['Ionisation', 'Completely ionised in water', 'Partially / incompletely ionised in water'],
          ['Equation arrow', '→ (one-way)', '⇌ (equilibrium)'],
          ['pH (same concentration)', 'Lower pH (more H⁺)', 'Higher pH (fewer H⁺)'],
          ['Conductivity', 'Higher (more ions)', 'Lower (fewer ions)'],
          ['Examples', 'HCl, H₂SO₄, HNO₃', 'CH₃COOH (ethanoic acid), H₂CO₃, HCN, citric acid']
        ]
      }
    },
    {
      id: 'call-comparison',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Comparing HCl vs CH₃COOH (both 0.1 mol/dm³)',
        text: 'HCl(aq) → H⁺(aq) + Cl⁻(aq) [complete: all HCl ionises]<br/>• pH ≈ 1<br/><br/>CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq) [partial: only ≈1% ionises]<br/>• pH ≈ 3<br/><br/>Same concentration but very different H⁺ concentrations → different pH and electrical conductivity.'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Misconception',
        text: '"Strong" does not mean "concentrated"! A strong acid (like HCl) is fully ionised regardless of concentration. A weak acid (like CH₃COOH) is always partially ionised regardless of concentration.<br/><br/>You can have:<br/>• Concentrated weak acid (high molarity CH₃COOH) — still partially ionised<br/>• Dilute strong acid (low molarity HCl) — still fully ionised'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acid = proton donor; base = proton acceptor (Brønsted–Lowry). Strong acid: fully ionised (→), low pH. Weak acid: partially ionised (⇌), higher pH for same concentration. Strength ≠ concentration.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acid = H⁺ donor; base = H⁺ acceptor. Strong acid (HCl): fully ionised. Weak acid (CH₃COOH): partially ionised. Same concentration → different pH.',
    cues: [
      { id: 'cue-1', blockId: 'call-brønsted', prompt: 'Define an acid and a base according to Brønsted–Lowry theory.', answer: 'An acid is a proton (H⁺) donor; a base is a proton (H⁺) acceptor.' },
      { id: 'cue-2', blockId: 'tbl-strength', prompt: 'Explain why ethanoic acid has a higher pH than hydrochloric acid at the same concentration.', answer: 'Ethanoic acid is a weak acid — it only partially ionises in water, producing fewer H⁺ ions. HCl is a strong acid that completely ionises, producing more H⁺ ions, so its pH is lower.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'A student says a concentrated weak acid must have a lower pH than a dilute strong acid. Is this always true? Explain.', answer: 'Not necessarily. "Strong" and "concentrated" are independent. A concentrated weak acid can have more H⁺ at very high molarity, but for typical exam questions the strong acid has a lower pH at the same concentration.' }
    ]
  },
  evidence: [],
  mentions: []
};
