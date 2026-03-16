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
      id: 'svg-measuring-apparatus',
      type: 'svg',
      data: {
        caption: 'Apparatus used for measuring liquid volume: Measuring cylinder, Volumetric pipette, and Burette.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300">
    <defs>
        <style>
            .glass { fill: rgba(99, 102, 241, 0.1); stroke: var(--color-text); stroke-width: 2; stroke-linejoin: round; }
            .mark { stroke: var(--color-text); stroke-width: 1.5; }
            .liquid { fill: rgba(16, 185, 129, 0.2); }
            .label { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
        </style>
    </defs>
    
    <!-- Measuring Cylinder -->
    <g transform="translate(100, 30)">
        <polygon points="-20,220 20,220 15,210 -15,210" fill="var(--color-text-secondary)"/> <!-- Base -->
        <path d="M -15 20 L -15 210 L 15 210 L 15 20" class="glass"/>
        <path d="M -20 20 L -15 20" class="glass"/> <!-- spout -->
        
        <!-- Liquid -->
        <path d="M -15 150 C 0 155, 15 150, 15 150 L 15 209 L -15 209 Z" class="liquid"/>
        
        <!-- Graduations -->
        <line x1="-15" y1="50" x2="-5" y2="50" class="mark"/>
        <line x1="-15" y1="80" x2="-5" y2="80" class="mark"/>
        <line x1="-15" y1="110" x2="-5" y2="110" class="mark"/>
        <line x1="-15" y1="140" x2="-5" y2="140" class="mark"/>
        <line x1="-15" y1="170" x2="-5" y2="170" class="mark"/>
        
        <text x="0" y="245" class="label">Measuring</text>
        <text x="0" y="260" class="label">cylinder</text>
    </g>

    <!-- Volumetric Pipette -->
    <g transform="translate(250, 30)">
        <path d="M -4 20 L -4 90 C -15 100, -20 110, -20 120 C -20 130, -15 140, -4 150 L -4 210 L -2 220 L 2 220 L 4 210 L 4 150 C 15 140, 20 130, 20 120 C 20 110, 15 100, 4 90 L 4 20 Z" class="glass"/>
        
        <!-- Liquid -->
        <path d="M -4 60 C 0 65, 4 60, 4 60 L 4 90 C 15 100, 20 110, 20 120 C 20 130, 15 140, 4 150 L 4 210 L -4 210 L -4 150 C -15 140, -20 130, -20 120 C -20 110, -15 100, -4 90 Z" class="liquid"/>
        
        <!-- Mark -->
        <line x1="-10" y1="50" x2="10" y2="50" class="mark"/>
        
        <text x="0" y="245" class="label">Volumetric</text>
        <text x="0" y="260" class="label">pipette</text>
    </g>

    <!-- Burette -->
    <g transform="translate(400, 30)">
        <path d="M -8 10 L -8 180 L -2 195 L -2 200 L 2 200 L 2 195 L 8 180 L 8 10 Z" class="glass"/>
        <!-- Tap -->
        <rect x="-6" y="198" width="12" height="4" fill="var(--color-text)"/>
        <!-- Tap handle -->
        <rect x="6" y="196" width="10" height="8" rx="2" fill="var(--color-text-secondary)"/>
        
        <!-- Liquid -->
        <path d="M -8 50 C 0 55, 8 50, 8 50 L 8 180 L -8 180 Z" class="liquid"/>
        
        <!-- Graduations -->
        <line x1="-8" y1="30" x2="0" y2="30" class="mark"/> <text x="-15" y="34" font-size="10" fill="var(--color-text)">0</text>
        <line x1="-8" y1="60" x2="0" y2="60" class="mark"/> <text x="-18" y="64" font-size="10" fill="var(--color-text)">10</text>
        <line x1="-8" y1="90" x2="0" y2="90" class="mark"/> <text x="-18" y="94" font-size="10" fill="var(--color-text)">20</text>
        <line x1="-8" y1="120" x2="0" y2="120" class="mark"/> <text x="-18" y="124" font-size="10" fill="var(--color-text)">30</text>
        <line x1="-8" y1="150" x2="0" y2="150" class="mark"/> <text x="-18" y="154" font-size="10" fill="var(--color-text)">40</text>
        
        <text x="0" y="245" class="label">Burette</text>
    </g>
</svg>`
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
