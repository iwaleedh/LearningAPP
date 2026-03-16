export const note_olevel_chemistry_12_12_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-2-2-locating-agents-and-rf-values.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define and calculate Rf values; describe the use of locating agents to identify colourless spots on a chromatogram.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Rf Values', level: 2 }
    },
    {
      id: 'call-rf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rf Value Formula',
        text: '<strong>Rf = distance travelled by spot ÷ distance travelled by solvent front</strong><br/><br/>• Both distances measured from the <strong>pencil baseline</strong><br/>• Rf value is always between 0 and 1 (no units)<br/>• Each substance has a characteristic Rf value for a given solvent and paper type<br/>• Rf values can be used to <strong>identify an unknown</strong> by comparison with known standards run on the same chromatogram under identical conditions'
      }
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Calculating Rf',
        text: 'A spot travels 4.8 cm from the baseline. The solvent front travels 8.0 cm.<br/><br/>Rf = 4.8 ÷ 8.0 = <strong>0.60</strong><br/><br/>If a reference standard X has Rf = 0.60 under the same conditions → the unknown spot is likely to be X.'
      }
    },
    {
      id: 'svg-rf-calc',
      type: 'svg',
      data: {
        caption: 'Measuring distances on a chromatogram to calculate the Rf value.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350">
    <defs>
        <style>
            .paper { fill: #fdfdfd; stroke: var(--color-border); stroke-width: 2; }
            .line-base { stroke: #7f8c8d; stroke-width: 2; stroke-dasharray: 4,4; }
            .line-solvent { stroke: var(--color-primary); stroke-width: 2; stroke-dasharray: 6,4; }
            .spot { fill: #9b59b6; stroke: #8e44ad; stroke-width: 2; }
            .dim-line { stroke: var(--color-text); stroke-width: 1.5; marker-start: url(#arrow-rev); marker-end: url(#arrow); }
            .dim-ext { stroke: var(--color-text-secondary); stroke-width: 1; stroke-dasharray: 2,2; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .label-title { font-family: var(--font-sans); font-size: 16px; font-weight: bold; fill: var(--color-text); }
            .calc-text { font-family: var(--font-sans); font-size: 16px; fill: var(--color-text); }
            .calc-hl { fill: var(--color-primary); font-weight: bold; }
        </style>
        <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--color-text)"/>
        </marker>
        <marker id="arrow-rev" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M10,0 L0,5 L10,10 Z" fill="var(--color-text)"/>
        </marker>
    </defs>

    <!-- Chromatography Paper -->
    <rect x="50" y="30" width="160" height="280" class="paper"/>
    
    <!-- Baseline (Pencil line) -->
    <line x1="50" y1="270" x2="210" y2="270" class="line-base"/>
    <text x="130" y="290" class="label" text-anchor="middle" fill="#7f8c8d">Pencil baseline</text>

    <!-- Solvent Front -->
    <line x1="50" y1="70" x2="210" y2="70" class="line-solvent"/>
    <text x="130" y="60" class="label" text-anchor="middle" fill="var(--color-primary)">Solvent front</text>

    <!-- Spot -->
    <circle cx="130" cy="150" r="10" class="spot"/>
    <text x="150" y="155" class="label" fill="#8e44ad" font-weight="bold">Spot</text>

    <!-- Distance Measurements -->
    <!-- Spot distance (a) -->
    <line x1="130" y1="150" x2="240" y2="150" class="dim-ext"/>
    <line x1="210" y1="270" x2="240" y2="270" class="dim-ext"/>
    <line x1="230" y1="270" x2="230" y2="150" class="dim-line"/>
    <rect x="220" y="200" width="20" height="20" fill="var(--color-surface)"/>
    <text x="230" y="215" class="label-title" text-anchor="middle">a</text>

    <!-- Solvent distance (b) -->
    <line x1="210" y1="70" x2="280" y2="70" class="dim-ext"/>
    <line x1="240" y1="270" x2="280" y2="270" class="dim-ext"/>
    <line x1="270" y1="270" x2="270" y2="70" class="dim-line"/>
    <rect x="260" y="160" width="20" height="20" fill="var(--color-surface)"/>
    <text x="270" y="175" class="label-title" text-anchor="middle">b</text>

    <!-- Formula Box -->
    <g transform="translate(310, 130)">
        <rect x="0" y="0" width="180" height="100" rx="8" ry="8" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2"/>
        <text x="90" y="30" class="label-title" text-anchor="middle">Calculation</text>
        
        <text x="30" y="65" class="calc-text" font-weight="bold">R<tspan dy="5" font-size="12">f</tspan><tspan dy="-5"> =</tspan></text>
        
        <text x="120" y="55" class="calc-text calc-hl" text-anchor="middle">a</text>
        <line x1="80" y1="65" x2="160" y2="65" stroke="var(--color-text)" stroke-width="2"/>
        <text x="120" y="85" class="calc-text calc-hl" text-anchor="middle">b</text>
    </g>

</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Locating Agents for Colourless Spots', level: 2 }
    },
    {
      id: 'tbl-locating',
      type: 'comparisonTable',
      data: {
        caption: 'Common locating agents used in chromatography',
        headers: ['Locating Agent', 'Method of use', 'Result', 'Used for'],
        rows: [
          ['UV lamp', 'Shine UV light on chromatogram in dark room', 'Fluorescent spots glow bright under UV', 'Compounds that absorb UV (e.g. certain drugs, amino acids)'],
          ['Ninhydrin', 'Spray solution onto chromatogram; heat gently', 'Amino acids → purple/brown spots appear', 'Amino acids in protein hydrolysates'],
          ['Iodine vapour', 'Place chromatogram in tank with iodine crystals', 'Organic compounds → brown/yellow spots', 'General organic compounds']
        ]
      }
    },
    {
      id: 'call-comparison',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Identifying Unknowns Using Rf',
        text: '<strong>Method A — compare Rf values:</strong> Calculate Rf for the unknown and compare with Rf values for known substances run under identical conditions.<br/><br/><strong>Method B — run known standards alongside:</strong> Spot known compounds next to the mixture on the same chromatogram and run simultaneously. If spots align, they are likely the same substance.<br/><br/><strong>Limitation:</strong> Two different substances can coincidentally have the same Rf in one solvent. Repeat in a different solvent to confirm identity.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rf = distance spot ÷ distance solvent front (0–1, no units). Each substance has a characteristic Rf value in a given solvent. Colourless spots revealed by: UV lamp (fluorescence), ninhydrin spray (amino acids → purple/brown), iodine vapour (organic compounds → brown). Confirm identity by comparing Rf with known standards.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rf = spot distance ÷ solvent front distance (0 to 1; no units). Ninhydrin → amino acids (purple). UV lamp → fluorescent spots. Compare Rf with known standards to identify unknowns.',
    cues: [
      { id: 'cue-1', blockId: 'call-rf', prompt: 'State the formula for Rf value and give its range and units.', answer: 'Rf = distance travelled by spot ÷ distance travelled by solvent front. Range: 0 to 1. No units (it is a ratio).' },
      { id: 'cue-2', blockId: 'tbl-locating', prompt: 'How are amino acids detected on a colourless chromatogram?', answer: 'The chromatogram is sprayed with ninhydrin solution and gently heated. Amino acids produce purple or brown spots.' },
      { id: 'cue-3', blockId: 'call-comparison', prompt: 'Why cannot Rf value alone be used as definitive proof that two substances are the same?', answer: 'Two different substances can have the same Rf value in a given solvent by coincidence. The test should be repeated with a different solvent to confirm identity; if the Rf matches in two different solvents, it is strong evidence they are the same substance.' }
    ]
  },
  evidence: [],
  mentions: []
};
