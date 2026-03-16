export const note_olevel_chemistry_12_12_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-3-3-identification-of-gases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the tests used to identify hydrogen, oxygen, carbon dioxide, chlorine, ammonia, sulfur dioxide and hydrogen chloride gases, and state the observations.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Gas Tests Summary Table', level: 2 }
    },
    {
      id: 'tbl-gases',
      type: 'comparisonTable',
      data: {
        caption: 'Chemical tests to identify gases',
        headers: ['Gas', 'Test', 'Positive result'],
        rows: [
          ['Hydrogen (H₂)', 'Hold lighted splint to mouth of test tube', 'Squeaky pop (gas ignites rapidly)'],
          ['Oxygen (O₂)', 'Insert a glowing splint into tube of gas', 'Splint relights'],
          ['Carbon dioxide (CO₂)', 'Bubble gas through limewater (Ca(OH)₂ solution)', 'Limewater turns milky/cloudy (white precipitate of CaCO₃)'],
          ['Chlorine (Cl₂)', 'Hold damp litmus paper in/near gas', 'Paper first turns red (acidic) then bleaches to white'],
          ['Ammonia (NH₃)', 'Hold damp red litmus paper near gas; introduce concentrated HCl', 'Litmus turns blue; dense white fumes of NH₄Cl form with HCl'],
          ['Sulfur dioxide (SO₂)', 'Place moist potassium dichromate paper; or bubble through acidified KMnO₄', 'Dichromate paper changes from orange → green; acidified KMnO₄ is decolourised'],
          ['Hydrogen chloride (HCl)', 'Hold open bottle of ammonia near gas', 'Dense white fumes (NH₄Cl) form']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Equations for Gas Tests', level: 2 }
    },
    {
      id: 'call-eqns',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Equations',
        text: '<strong>CO₂ with limewater:</strong><br/>CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O<br/><br/><strong>NH₃ with HCl (white fumes):</strong><br/>NH₃(g) + HCl(g) → NH₄Cl(s)<br/><br/><strong>Cl₂ bleaching:</strong><br/>Cl₂ + H₂O → HCl + HOCl; HOCl oxidises dye → colourless<br/>(or: wet Cl₂ + litmus → bleached white)<br/><br/><strong>H₂ burning:</strong><br/>2H₂ + O₂ → 2H₂O'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Additional Notes on Key Tests', level: 2 }
    },
    {
      id: 'call-notes',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Important Distinctions',
        text: '<strong>Cl₂ vs SO₂:</strong> Both are acidic and both bleach litmus, but Cl₂ bleaches litmus paper permanently white while SO₂ only turns litmus red (acid) and does not bleach. Use potassium dichromate paper to distinguish — only SO₂ turns it green.<br/><br/><strong>NH₃ vs HCl white fumes:</strong> Both produce white fumes of NH₄Cl when mixed — to identify which is present, test with damp litmus: NH₃ turns red litmus blue; HCl turns blue litmus red.<br/><br/><strong>CO₂ vs SO₂ in limewater:</strong> Both turn limewater milky. SO₂ can be distinguished by potassium dichromate test (turns orange → green with SO₂ but not CO₂).<br/><br/><strong>Pure H₂ vs impure H₂:</strong> Pure H₂ gives a quiet pop. Impure H₂ + air mixture gives a loud bang (potentially explosive mixture).'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'How to Collect and Test a Gas', level: 2 }
    },
    {
      id: 'list-collect',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Upward delivery:</strong> for dense gases (heavier than air): Cl₂, CO₂, HCl, SO₂ — collect in inverted tube; test tube filled, stopper removed for testing' },
          { text: '<strong>Downward delivery:</strong> for gases lighter than air: H₂, NH₃' },
          { text: '<strong>Over water:</strong> for gases insoluble in water (H₂, O₂) — displacement of water' },
          { text: '<strong>Gas syringe:</strong> most accurate way to collect a measured gas volume' }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'H₂: squeaky pop with lit splint. O₂: relights glowing splint. CO₂: turns limewater milky. Cl₂: bleaches damp litmus white. NH₃: turns damp red litmus blue; white fumes with HCl. SO₂: turns moist K₂Cr₂O₇ paper from orange to green. HCl: white fumes with NH₃.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'H₂=squeaky pop. O₂=relights splint. CO₂=limewater milky. Cl₂=bleaches litmus white. NH₃=blue litmus+white HCl fumes. SO₂=K₂Cr₂O₇ orange→green. HCl=white fumes with NH₃.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-gases', prompt: 'How would you test for the presence of oxygen? What is the positive result?', answer: 'Insert a glowing (not burning) splint into the gas. A positive result is the splint relighting.' },
      { id: 'cue-2', blockId: 'tbl-gases', prompt: 'How is chlorine gas identified using damp litmus paper? What happens in two stages?', answer: 'Damp litmus paper turns red first (Cl₂ dissolves in water forming HCl, an acid), then bleaches to white (hypochlorous acid HOCl formed oxidises the dye).' },
      { id: 'cue-3', blockId: 'call-notes', prompt: 'How can you distinguish SO₂ from CO₂ if you cannot use limewater (since both turn it milky)?', answer: 'Use moist potassium dichromate paper — SO₂ changes the paper from orange to green (reduction of Cr₂O₇²⁻ to Cr³⁺). CO₂ does not cause this colour change.' },
      { id: 'cue-4', blockId: 'call-eqns', prompt: 'What observation, and what is the equation for the reaction, when testing for ammonia gas with concentrated hydrochloric acid?', answer: 'Dense white fumes of ammonium chloride (NH₄Cl) are produced. Equation: NH₃(g) + HCl(g) → NH₄Cl(s).' }
    ]
  },
  evidence: [],
  mentions: []
};
