export const note_olevel_chemistry_12_12_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-1-1-apparatus-for-measurements.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Name and describe the use of apparatus for accurate measurement of mass, volume and temperature in chemical experiments.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Measuring Volume', level: 2 }
    },
    {
      id: 'tbl-vol',
      type: 'comparisonTable',
      data: {
        caption: 'Apparatus for measuring volume',
        headers: ['Apparatus', 'Typical precision', 'Use'],
        rows: [
          ['Measuring cylinder', '±0.5 cm³', 'Approximate volume of liquid; read at bottom of meniscus'],
          ['Burette', '±0.05 cm³', 'Delivering accurate variable volumes in titrations; scale reads 0 at top'],
          ['Pipette (volumetric)', '±0.06 cm³', 'Delivering a fixed precise volume (e.g. 25.0 cm³) in titrations'],
          ['Gas syringe', '±1 cm³', 'Measuring volume of gas produced in a reaction']
        ]
      }
    },
    {
      id: 'call-meniscus',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Reading the Meniscus',
        text: 'When reading a volumetric apparatus:<br/>• Read the <strong>bottom of the meniscus</strong> for colourless/light-coloured liquids<br/>• Keep your eye level with the liquid surface to avoid <strong>parallax error</strong><br/>• Burette: subtract initial reading from final reading to get volume used'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Measuring Mass and Temperature', level: 2 }
    },
    {
      id: 'list-mass',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Electronic balance:</strong> measures mass (typically ±0.01 g); zero (tare) before adding sample' },
          { text: '<strong>Thermometer:</strong> measures temperature; record to nearest 0.5 °C; leave in solution until reading is stable' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Experimental Accuracy and Significant Figures', level: 2 }
    },
    {
      id: 'call-sf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Significant Figures in Calculations',
        text: 'Give answers to the same number of significant figures as the <strong>least precise measurement</strong> used in the calculation.<br/><br/><strong>Systematic error:</strong> consistently too high or too low (e.g. balance not zeroed, bubble in burette tip). Cannot be reduced by repeating.<br/><strong>Random error:</strong> scatter of readings around true value. Reduced by calculating a mean of repeated readings.<br/><strong>Anomalous result:</strong> one reading clearly out of line — repeat and discard if still anomalous.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Key measuring apparatus: measuring cylinder (±0.5 cm³), burette (±0.05 cm³), volumetric pipette (fixed volume), gas syringe (gas volumes). Read meniscus at eye level. Electronic balance for mass. Report readings to appropriate significant figures. Distinguish systematic vs random error.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Burette: ±0.05 cm³, scale from 0 at top. Volumetric pipette: fixed precise volume. Read bottom of meniscus at eye level to avoid parallax.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-vol', prompt: 'Which piece of apparatus is most suitable for delivering an accurate and fixed volume of liquid in a titration?', answer: 'A volumetric (graduated) pipette, which delivers a precise fixed volume (e.g. 25.0 cm³) with a precision of ±0.06 cm³.' },
      { id: 'cue-2', blockId: 'tbl-vol', prompt: 'How would you use a burette to measure the volume of solution used in a titration?', answer: 'Read the initial burette level (near 0) then read the final level after the titration. Subtract initial from final to find the volume used. Read the bottom of the meniscus with eyes level.' },
      { id: 'cue-3', blockId: 'call-sf', prompt: 'Distinguish between a systematic error and a random error in an experiment.', answer: 'A systematic error shifts all readings in the same direction (e.g. unzeroed balance). A random error causes scatter above and below the true value and can be reduced by averaging repeated measurements.' }
    ]
  },
  evidence: [],
  mentions: []
};
