export const note_olevel_chemistry_11_11_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-1-3-saturated-and-unsaturated-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between saturated and unsaturated compounds, and describe the bromine water test for unsaturation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Saturated and Unsaturated Compounds', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definitions',
        text: '<strong>Saturated compounds</strong>:<br/>• Contain only <strong>single bonds</strong> between carbon atoms (C–C).<br/>• Cannot undergo addition reactions.<br/>• Example: alkanes (C₂H₆, ethane — only C–C and C–H bonds).<br/><br/><strong>Unsaturated compounds</strong>:<br/>• Contain at least one <strong>C=C double bond</strong> (or triple bond).<br/>• Can undergo addition reactions (the double bond opens up and atoms add across).<br/>• Example: alkenes (C₂H₄, ethene — has one C=C).<br/><br/><strong>Degree of unsaturation</strong> increases with number of double/triple bonds.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Bromine Water Test', level: 2 }
    },
    {
      id: 'call-br',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Testing for Unsaturation with Bromine Water',
        text: '<strong>Reagent:</strong> Bromine water (dilute bromine solution; orange/brown)<br/><br/><strong>Procedure:</strong> Add a few drops of bromine water to the compound, shake.<br/><br/><strong>Unsaturated result:</strong> Bromine water is <strong>decolourised</strong> (turns colourless) — addition reaction across the C=C double bond:<br/>CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane; colourless)<br/><br/><strong>Saturated result:</strong> Bromine water <strong>remains orange/brown</strong> — no reaction.<br/><br/><strong>Conclusion:</strong> Bromine water being decolourised = unsaturated compound present; remaining orange = saturated.'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Note on KMnO₄',
        text: 'Acidified potassium manganate(VII) (KMnO₄) can also test for unsaturation — it turns from purple to colourless with alkenes. However, the <strong>bromine water test</strong> is the most commonly required test at IGCSE level.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Saturated = only C–C single bonds. Unsaturated = contains C=C double bond. Bromine water test: decolourised = unsaturated; remains orange = saturated. Alkanes (saturated) do not decolourise; alkenes (unsaturated) do.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Saturated: only single bonds. Unsaturated: has C=C. Bromine water decolourised by alkenes (unsaturated); stays orange with alkanes (saturated).',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define saturated and unsaturated organic compounds.', answer: 'Saturated: contain only single bonds between carbon atoms. Unsaturated: contain at least one C=C double bond.' },
      { id: 'cue-2', blockId: 'call-br', prompt: 'Describe how to test for unsaturation and state what each result indicates.', answer: 'Add bromine water to the compound. If it decolourises (turns colourless) the compound is unsaturated. If it remains orange/brown, the compound is saturated.' },
      { id: 'cue-3', blockId: 'call-br', prompt: 'Write the equation for the reaction of ethene with bromine water.', answer: 'CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (ethene reacts with bromine by addition across the double bond to form 1,2-dibromoethane).' }
    ]
  },
  evidence: [],
  mentions: []
};
