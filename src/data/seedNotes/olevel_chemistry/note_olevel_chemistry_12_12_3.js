export const note_olevel_chemistry_12_12_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-2-1-paper-chromatography.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the principle and procedure of paper chromatography and explain its use in separating and identifying mixtures.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Principle of Chromatography', level: 2 }
    },
    {
      id: 'call-principle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How Chromatography Works',
        text: 'Chromatography separates a mixture because its components have <strong>different affinities</strong> for the stationary and mobile phases.<br/><br/><strong>Stationary phase:</strong> the paper (cellulose absorbs water, making the water stationary)<br/><strong>Mobile phase:</strong> the solvent (travels up the paper by capillary action)<br/><br/>Components that are <strong>more soluble in the solvent</strong> (or less attracted to the paper) travel further up.<br/>Components that are <strong>more attracted to the paper</strong> travel less far or remain near the baseline.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Procedure', level: 2 }
    },
    {
      id: 'list-proc',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Draw a <strong>pencil</strong> baseline near the bottom of chromatography paper (NOT pen — ink would move)' },
          { text: 'Place small spots of each sample on the baseline using a capillary tube or cocktail stick; allow to dry; concentrate spots by re-spotting' },
          { text: 'Lower paper into solvent in a covered container — solvent level must be <strong>below</strong> the spots' },
          { text: 'Allow solvent to rise (do not disturb); remove paper when solvent front is near the top' },
          { text: 'Mark the <strong>solvent front</strong> immediately with pencil before it evaporates' },
          { text: 'Identify the spots (measure Rf values; use locating agent if spots are colourless)' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Applications', level: 2 }
    },
    {
      id: 'list-apps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Food colourings and inks:</strong> separate dye mixtures in food/ink samples' },
          { text: '<strong>Amino acids:</strong> identify amino acid composition in protein hydrolysate (using ninhydrin locating agent)' },
          { text: '<strong>Drug testing:</strong> identify substances in urine or blood samples' },
          { text: '<strong>Purity check:</strong> a pure substance gives a single spot; a mixture gives multiple spots' }
        ]
      }
    },
    {
      id: 'call-tips',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always use a <strong>pencil</strong> baseline — ink itself would separate and move with the solvent<br/>• Cover the container to prevent solvent evaporation during the run<br/>• Solvent must not touch the spots at the start (level must be below baseline)<br/>• A single spot on the chromatogram does not automatically prove a substance is pure if it gives the same Rf as another compound; use a different solvent to confirm'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Paper chromatography separates mixtures by differential solubility in mobile phase (solvent) vs affinity for stationary phase (paper). Draw pencil baseline; spot sample; run in solvent below spots; mark solvent front. Used to separate/identify food dyes, inks, amino acids. Rf = distance spot ÷ distance solvent front.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Chromatography: stationary phase (paper) vs mobile phase (solvent). More soluble → travels further. Pencil baseline; solvent below spots; mark solvent front. Rf identifies substances.',
    cues: [
      { id: 'cue-1', blockId: 'call-principle', prompt: 'Explain why different substances travel different distances in paper chromatography.', answer: 'Because they have different solubilities in the mobile phase (solvent) and different affinities for the stationary phase (paper). More soluble / less attracted to paper → travels further.' },
      { id: 'cue-2', blockId: 'list-proc', prompt: 'Why must the baseline be drawn in pencil and not pen?', answer: 'Ink in a pen is itself a mixture that would travel with the solvent and contaminate the chromatogram. Pencil (graphite) does not dissolve in the solvent.' },
      { id: 'cue-3', blockId: 'list-proc', prompt: 'Why must the solvent level be below the spots at the start of the chromatography run?', answer: 'If the solvent covered the spots, the substances would dissolve directly into the solvent pool rather than travelling upward by capillary action, so separation would not occur.' }
    ]
  },
  evidence: [],
  mentions: []
};
