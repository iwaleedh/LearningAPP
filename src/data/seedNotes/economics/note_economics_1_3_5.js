export const note_economics_1_3_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how factor mobility and legal constraints affect a firm\'s ability to respond to price changes and thus influence the price elasticity of supply.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Factor Mobility and Legal Constraints', level: 2 },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Factor Mobility', level: 3 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Factor Mobility',
        text: '<strong>Factor mobility</strong> refers to how easily factors of production can be transferred between different uses. Higher mobility → firms can respond more quickly to price changes → higher PES.'
      },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Occupational mobility of labour:</strong> The ease with which workers can switch between <em>different types of jobs</em>. High occupational mobility (e.g. a general labourer) → supply of output more elastic. Low occupational mobility (e.g. a brain surgeon) → supply is inelastic.' },
          { text: '<strong>Geographical mobility of labour:</strong> The ease with which workers can move to <em>different locations</em>. Low geographical mobility (due to housing costs, family ties) restricts supply response.' },
          { text: '<strong>Capital mobility:</strong> The ease with which capital equipment can be repurposed. General-purpose machinery is more mobile; specialist equipment (e.g. oil rigs) is highly immobile.' }
        ]
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Legal and Regulatory Constraints', level: 3 },
      terms: []
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Patents:</strong> Grant the inventor an exclusive right to produce a good for a set period (typically 20 years). Competitors cannot enter → supply is restricted → PES is lower.' },
          { text: '<strong>Licences:</strong> Government licences (e.g. taxi licences, broadcasting licences, pharmaceutical approvals) limit the number of producers → supply constrained.' },
          { text: '<strong>Planning permission:</strong> Required to build new factories or expand premises. Slow planning processes make supply inelastic (especially in construction and housing).' },
          { text: '<strong>Environmental regulations:</strong> Emissions limits or waste disposal rules increase costs and may restrict output expansion.' }
        ]
      },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of constraints and their effects on PES and market entry',
        headers: ['Constraint', 'Type', 'Effect on PES', 'Example'],
        rows: [
          ['Patents', 'Legal (IP)', 'Reduces PES — competitors excluded', 'Pharmaceutical drugs'],
          ['Licences', 'Regulatory', 'Reduces PES — limits number of producers', 'Taxi licences, casino permits'],
          ['Planning permission', 'Administrative', 'Reduces PES in short/medium run', 'New housing development'],
          ['Low occupational mobility', 'Labour market', 'Reduces PES — hard to find skilled workers', 'Specialist medical staff'],
          ['Specialist capital', 'Capital market', 'Reduces PES — hard to repurpose equipment', 'Oil drilling platforms'],
          ['High geographical mobility', 'Labour market', 'Increases PES — workers move to where needed', 'Construction workers']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In a 6+ mark evaluation, consider <strong>both sides</strong>: legal constraints can protect innovation (patents incentivise R&D) but restrict supply and raise prices for consumers. Always weigh trade-offs.'
      },
      terms: []
    },
    {
      id: 'warn-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not say patents simply "increase supply." They protect the patent holder\'s right to supply exclusively — for other firms, they are a <strong>barrier to entry</strong> that keeps supply lower than it would otherwise be.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Factor mobility (occupational, geographical, capital) and legal constraints (patents, licences, planning permission) determine how quickly firms can adjust supply, directly affecting PES.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'Define factor mobility and explain its link to PES.', answer: 'Factor mobility is the ease of transferring factors between uses. Higher mobility allows quicker supply responses, raising PES.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Distinguish between occupational and geographical mobility of labour.', answer: 'Occupational mobility: ability to switch job types. Geographical mobility: ability to move to different locations for work.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'How do patents affect the price elasticity of supply?', answer: 'Patents give one firm exclusive production rights, preventing other firms from entering — supply is restricted and PES is lower.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Give two legal/regulatory constraints that reduce PES and an example of each.', answer: 'Patents (e.g. pharmaceuticals) and licences (e.g. taxi licences) both restrict the number of producers and reduce PES.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_3_5;
