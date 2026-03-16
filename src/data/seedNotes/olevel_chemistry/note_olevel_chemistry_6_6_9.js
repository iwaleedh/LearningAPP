export const note_olevel_chemistry_6_6_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-2-4-the-contact-process.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the Contact process for the manufacture of sulfuric acid, including the conditions used and the reasons for choosing them.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Contact Process', level: 2 }
    },
    {
      id: 'call-overview',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Overview: Three Stages',
        text: '<strong>Stage 1</strong>: Burn sulfur in air<br/>S(s) + O₂(g) → SO₂(g)<br/><br/><strong>Stage 2</strong>: Oxidise SO₂ to SO₃ (the key equilibrium step)<br/>2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH = −196 kJ mol⁻¹<br/><br/><strong>Stage 3</strong>: Absorb SO₃ into concentrated H₂SO₄ to make oleum, then dilute with water<br/>SO₃(g) + H₂SO₄(l) → H₂S₂O₇(l) → then H₂S₂O₇ + H₂O → 2H₂SO₄'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Conditions for Stage 2', level: 2 }
    },
    {
      id: 'tbl-conditions',
      type: 'comparisonTable',
      data: {
        caption: 'Conditions for the Contact process Step 2',
        headers: ['Condition', 'Value', 'Reason'],
        rows: [
          ['Temperature', '~450 °C', 'Compromise: lower T → higher yield but rate too slow; forward reaction is exothermic so high T reduces yield; 450 °C balances rate and yield'],
          ['Pressure', 'Atmospheric (~1 atm)', '3 moles gas → 2 moles gas on right (fewer), so high pressure would increase yield; but 99% conversion achieved at atmospheric pressure so no need for costly high pressure'],
          ['Catalyst', 'Vanadium(V) oxide V₂O₅', 'Speeds up reaction; not consumed; converted to V₂O₄ then back to V₂O₅ in catalytic cycle']
        ]
      }
    },
    {
      id: 'call-le-chat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Moles of Gas Check (Stage 2)',
        text: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)<br/><br/>Left side: 2 + 1 = <strong>3 moles of gas</strong><br/>Right side: <strong>2 moles of gas</strong><br/><br/>Fewer moles on right → high pressure would shift equilibrium right → more SO₃.<br/>But ~99.5% conversion already achieved at atmospheric pressure, making costly high-pressure equipment unnecessary.'
      }
    },
    {
      id: 'call-uses',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Uses of Sulfuric Acid',
        text: '• Manufacture of fertilisers (ammonium sulfate, superphosphate)<br/>• Car batteries (lead-acid: uses dilute H₂SO₄)<br/>• Manufacture of detergents and paints<br/>• Petrochemical processing (dehydrating agent)<br/>• Making other acids (e.g., HCl, HNO₃)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Contact process: S → SO₂ → SO₃ (key step: 2SO₂+O₂⇌2SO₃, ΔH = −196 kJ/mol) → H₂SO₄. Stage 2 conditions: ~450 °C (compromise), atmospheric pressure (already >99% conversion), V₂O₅ catalyst. Main use: fertiliser manufacture.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '2SO₂+O₂⇌2SO₃, exothermic, 3→2 gas moles. 450°C compromise; atmospheric P (99% conversion); V₂O₅ catalyst. SO₃ absorbed into H₂SO₄.',
    cues: [
      { id: 'cue-1', blockId: 'call-overview', prompt: 'Write the equations for all three stages of the Contact process.', answer: '(1) S + O₂ → SO₂; (2) 2SO₂ + O₂ ⇌ 2SO₃ (key equilibrium, V₂O₅ catalyst, 450 °C); (3) SO₃ absorbed in conc H₂SO₄ to form oleum, then diluted to give H₂SO₄.' },
      { id: 'cue-2', blockId: 'tbl-conditions', prompt: 'Why is only atmospheric pressure used in the Contact process, despite fewer gas moles on the right?', answer: 'The conversion rate of SO₂ to SO₃ is already ~99.5% at atmospheric pressure, so the expense and danger of high-pressure equipment is not justified.' },
      { id: 'cue-3', blockId: 'tbl-conditions', prompt: 'Name the catalyst used in Stage 2 of the Contact process.', answer: 'Vanadium(V) oxide, V₂O₅.' }
    ]
  },
  evidence: [],
  mentions: []
};
