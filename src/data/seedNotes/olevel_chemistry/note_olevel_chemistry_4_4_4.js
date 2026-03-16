export const note_olevel_chemistry_4_4_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-5-ionic-half-equations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Write ionic half equations for the reactions at each electrode during electrolysis.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Writing Half Equations', level: 2 }
    },
    {
      id: 'call-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rules for Half Equations',
        text: '<strong>Half equations</strong> show what happens at one electrode:<br/>• Include the ion(s), the product, and the electrons<br/>• Electrons appear on the <strong>left</strong> for reduction (cathode)<br/>• Electrons appear on the <strong>right</strong> for oxidation (anode)<br/>• Must be balanced in terms of atoms AND charge<br/><br/>To balance charge: add electrons (e⁻) to make both sides equal'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Common Half Equations', level: 2 }
    },
    {
      id: 'tbl-half',
      type: 'comparisonTable',
      data: {
        caption: 'Standard electrode half equations',
        headers: ['Electrode', 'Reaction', 'Type'],
        rows: [
          ['Cathode', 'Cu²⁺ + 2e⁻ → Cu', 'Reduction'],
          ['Cathode', 'Pb²⁺ + 2e⁻ → Pb', 'Reduction'],
          ['Cathode', 'Ag⁺ + e⁻ → Ag', 'Reduction'],
          ['Cathode', 'Al³⁺ + 3e⁻ → Al', 'Reduction'],
          ['Cathode', '2H⁺ + 2e⁻ → H₂', 'Reduction'],
          ['Anode', '2Cl⁻ → Cl₂ + 2e⁻', 'Oxidation'],
          ['Anode', '2Br⁻ → Br₂ + 2e⁻', 'Oxidation'],
          ['Anode', '2I⁻ → I₂ + 2e⁻', 'Oxidation'],
          ['Anode', '4OH⁻ → O₂ + 2H₂O + 4e⁻', 'Oxidation'],
          ['Anode', '2O²⁻ → O₂ + 4e⁻', 'Oxidation (molten)']
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balancing a half equation',
        text: 'Write the half equation for the discharge of Fe³⁺ at the cathode.<br/><br/>Fe³⁺ → Fe (iron reduced)<br/>Iron has charge 3+; need 3 electrons to balance:<br/><strong>Fe³⁺ + 3e⁻ → Fe</strong><br/><br/>Check charge: Left = 3+ + 3(−) = 0; Right = 0 ✓'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balance OH⁻ at anode',
        text: 'Write the half equation for oxidation of OH⁻ to O₂.<br/><br/>OH⁻ → O₂ + H₂O<br/>Balance O: 4OH⁻ → O₂ + 2H₂O<br/>Balance charge: Left = 4(−); Right = 0; need 4e⁻ on right:<br/><strong>4OH⁻ → O₂ + 2H₂O + 4e⁻</strong><br/><br/>Check: Left = −4; Right = 0 − 4 = −4 ✓'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check two things in a half equation: (1) atoms balanced on each side, (2) charge balanced. The number of electrons added equals the charge change. For diatomic products (H₂, Cl₂, O₂, Br₂), you often need to double everything — make sure electrons are still consistent.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Half equations show electrode reactions. Cathode: ion + e⁻ → atom (reduction). Anode: ion → molecule + e⁻ (oxidation). Must balance atoms and charge. e⁻ cancel between half equations to give the overall equation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Half equations: cathode (reduction) electrons on left; anode (oxidation) electrons on right. Must balance atoms AND charge.',
    cues: [
      { id: 'cue-1', blockId: 'call-rules', prompt: 'Where do electrons appear in cathode vs anode half equations?', answer: 'Cathode (reduction): electrons on the left side. Anode (oxidation): electrons on the right side.' },
      { id: 'cue-2', blockId: 'tbl-half', prompt: 'Write the half equation for the reduction of Cu²⁺ at the cathode.', answer: 'Cu²⁺ + 2e⁻ → Cu' },
      { id: 'cue-3', blockId: 'tbl-half', prompt: 'Write the half equation for the oxidation of Cl⁻ ions at the anode.', answer: '2Cl⁻ → Cl₂ + 2e⁻' }
    ]
  },
  evidence: [],
  mentions: []
};
