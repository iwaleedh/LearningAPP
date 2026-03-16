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
      id: 'svg-chromatography',
      type: 'svg',
      data: {
        caption: 'Paper Chromatography setup and final chromatogram.',
        svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Setup (Left) -->
  <g transform="translate(50, 40)">
    <!-- Beaker -->
    <path d="M 20 20 L 20 180 Q 20 190, 30 190 L 130 190 Q 140 190, 140 180 L 140 20" fill="none" stroke="#64748b" stroke-width="3"/>
    <!-- Solvent -->
    <path d="M 22 160 L 138 160 L 138 180 Q 138 188, 130 188 L 30 188 Q 22 188, 22 180 Z" fill="#bae6fd" opacity="0.5"/>
    <text x="150" y="175" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#0284c7">Solvent</text>

    <!-- Paper -->
    <rect x="45" y="0" width="70" height="170" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Stick/Clip at top -->
    <rect x="30" y="0" width="100" height="10" fill="#d1d5db" rx="2"/>

    <!-- Baseline -->
    <path d="M 45 145 L 115 145" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="125" y="148" font-family="var(--font-sans)" font-size="10" fill="#475569">Pencil line</text>

    <!-- Spot -->
    <circle cx="80" cy="145" r="4" fill="#1e293b" />
    <text x="80" y="135" font-family="var(--font-sans)" font-size="10" fill="#1e293b" text-anchor="middle">Sample spot</text>
    
    <!-- Annotation -->
    <text x="-15" y="165" font-family="var(--font-sans)" font-size="10" fill="#dc2626" font-style="italic">Solvent below</text>
    <text x="-15" y="178" font-family="var(--font-sans)" font-size="10" fill="#dc2626" font-style="italic">the baseline!</text>
  </g>

  <!-- Arrow -->
  <path d="M 280 140 L 320 140" fill="none" stroke="#64748b" stroke-width="3" marker-end="url(#arrow-grey)"/>
  <text x="300" y="130" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">Time passes</text>

  <!-- Result (Right) -->
  <g transform="translate(390, 40)">
    <!-- Paper -->
    <rect x="30" y="0" width="90" height="190" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    
    <!-- Baseline -->
    <path d="M 30 160 L 120 160" fill="none" stroke="#475569" stroke-width="1.5"/>
    <text x="8" y="163" font-family="var(--font-sans)" font-size="10" fill="#475569">0</text>

    <!-- Solvent front -->
    <path d="M 30 30 L 120 30" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="130" y="33" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#0284c7">Solvent Front</text>

    <!-- Separated Spots -->
    <!-- Mixture A -->
    <circle cx="55" cy="110" r="5" fill="#ef4444" opacity="0.8"/>
    <circle cx="55" cy="65" r="5" fill="#3b82f6" opacity="0.8"/>
    <text x="55" y="180" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">A</text>
    <text x="55" y="195" font-family="var(--font-sans)" font-size="10" fill="#475569" text-anchor="middle">(Mixture)</text>

    <!-- Pure B -->
    <circle cx="95" cy="110" r="5" fill="#ef4444" opacity="0.8"/>
    <text x="95" y="180" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">B</text>
    <text x="95" y="195" font-family="var(--font-sans)" font-size="10" fill="#475569" text-anchor="middle">(Pure)</text>

    <!-- Measurement lines -->
    <path d="M 15 30 L 15 160" fill="none" stroke="#94a3b8" stroke-width="1.5" marker-start="url(#arrow-grey-sm)" marker-end="url(#arrow-grey-sm)"/>
    <text x="-5" y="95" font-family="var(--font-sans)" font-size="10" fill="#64748b" transform="rotate(-90 -5 95)">Solvent dist.</text>
  </g>

  <defs>
    <marker id="arrow-grey" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#64748b"/>
    </marker>
    <marker id="arrow-grey-sm" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
      <path d="M 0 0 L 4 2 L 0 4 Z" fill="#94a3b8"/>
    </marker>
  </defs>
</svg>`
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
