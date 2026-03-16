export const note_olevel_chemistry_12_12_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-3-2-identification-of-cations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use NaOH solution, aqueous ammonia and flame tests to identify cations in solution; describe the observations and write ionic equations for precipitate formation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Test Using NaOH Solution', level: 2 }
    },
    {
      id: 'tbl-naoh',
      type: 'comparisonTable',
      data: {
        caption: 'Results of adding NaOH solution to cation solutions',
        headers: ['Cation', 'Precipitate colour', 'Solubility in excess NaOH', 'Notes'],
        rows: [
          ['Cu²⁺', 'Blue', 'Insoluble in excess', 'Cu(OH)₂; blue gelatinous precipitate'],
          ['Fe²⁺', 'Green', 'Insoluble in excess', 'Fe(OH)₂; turns rust-brown on standing (oxidises to Fe³⁺)'],
          ['Fe³⁺', 'Brown (rust)', 'Insoluble in excess', 'Fe(OH)₃; brown gelatinous precipitate'],
          ['Al³⁺', 'White', 'Dissolves in excess → colourless solution', 'Al(OH)₃ is amphoteric — dissolves in excess NaOH to form Al(OH)₄⁻'],
          ['Ca²⁺', 'White', 'Insoluble in excess', 'Ca(OH)₂; does NOT dissolve in excess NaOH (distinguishes from Al³⁺)'],
          ['Zn²⁺', 'White', 'Dissolves in excess → colourless solution', 'Zn(OH)₂ is amphoteric — similar to Al³⁺; dissolves to form Zn(OH)₄²⁻'],
          ['NH₄⁺', 'No precipitate', 'N/A; gas evolved on warming', 'NH₃ gas; turns damp red litmus blue; pungent smell']
        ]
      }
    },
    {
      id: 'call-nh4',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Testing for Ammonium Ion (NH₄⁺)',
        text: '<strong>Reagent:</strong> Add NaOH solution and warm gently<br/><strong>Observation:</strong> Pungent colourless gas (NH₃) evolved; turns damp red litmus paper blue; white fumes with concentrated HCl<br/><br/>NH₄⁺ + OH⁻ → NH₃ + H₂O<br/><br/><em>Important:</em> Test for NH₄⁺ BEFORE testing for NO₃⁻ with aluminium/NaOH, since NO₃⁻ reduction also produces NH₃.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Flame Tests', level: 2 }
    },
    {
      id: 'call-flame',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Flame Test Colours',
        text: '<strong>Procedure:</strong><br/>1. Clean a nichrome (or platinum) wire in concentrated HCl until flame is uncoloured<br/>2. Dip wire in test solution; hold in the hot part of the Bunsen flame<br/>3. Observe colour of flame<br/><br/><strong>Results:</strong><br/>• <strong>Li⁺ (lithium)</strong> — crimson/scarlet red<br/>• <strong>Na⁺ (sodium)</strong> — yellow/orange (persistent; even traces give yellow)<br/>• <strong>K⁺ (potassium)</strong> — lilac/violet<br/>• <strong>Ca²⁺ (calcium)</strong> — brick red/orange-red<br/>• <strong>Cu²⁺ (copper)</strong> — blue-green (with green sparks)<br/>• <strong>Ba²⁺ (barium)</strong> — green'
      }
    },
    {
      id: 'svg-flame-tests',
      type: 'svg',
      data: {
        caption: 'Characteristic flame test colours for metal cations.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200">
    <defs>
        <style>
            .burner { fill: #7f8c8d; stroke: var(--color-text); stroke-width: 2; }
            .flame-core { fill: rgba(255,255,255,0.8); }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); text-anchor: middle; font-weight: bold; }
            .desc { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text-secondary); text-anchor: middle; }
            
            /* Flame Colors */
            .flame-li { fill: #e84393; opacity: 0.8; } /* Crimson */
            .flame-na { fill: #f39c12; opacity: 0.8; } /* Yellow/Orange */
            .flame-k { fill: #9b59b6; opacity: 0.8; }  /* Lilac */
            .flame-ca { fill: #e74c3c; opacity: 0.8; } /* Brick Red */
            .flame-cu { fill: #1abc9c; opacity: 0.8; } /* Blue-Green */
        </style>
    </defs>

    <!-- Lithium -->
    <g transform="translate(60, 100)">
        <path d="M-10,20 L10,20 L15,40 L-15,40 Z" class="burner"/>
        
        <!-- Flame -->
        <path d="M0,20 Q-20,0 0,-40 Q20,0 0,20 Z" class="flame-li"/>
        <path d="M0,15 Q-10,0 0,-25 Q10,0 0,15 Z" class="flame-core"/>

        <text x="0" y="65" class="label">Lithium (Li⁺)</text>
        <text x="0" y="80" class="desc">Crimson</text>
    </g>

    <!-- Sodium -->
    <g transform="translate(180, 100)">
        <path d="M-10,20 L10,20 L15,40 L-15,40 Z" class="burner"/>
        
        <path d="M0,20 Q-30,-5 0,-50 Q30,-5 0,20 Z" class="flame-na"/>
        <path d="M0,15 Q-15,0 0,-30 Q15,0 0,15 Z" class="flame-core"/>

        <text x="0" y="65" class="label">Sodium (Na⁺)</text>
        <text x="0" y="80" class="desc">Yellow/Orange</text>
    </g>

    <!-- Potassium -->
    <g transform="translate(300, 100)">
        <path d="M-10,20 L10,20 L15,40 L-15,40 Z" class="burner"/>
        
        <path d="M0,20 Q-20,0 0,-40 Q20,0 0,20 Z" class="flame-k"/>
        <path d="M0,15 Q-10,0 0,-25 Q10,0 0,15 Z" class="flame-core"/>

        <text x="0" y="65" class="label">Potassium (K⁺)</text>
        <text x="0" y="80" class="desc">Lilac</text>
    </g>

    <!-- Calcium -->
    <g transform="translate(420, 100)">
        <path d="M-10,20 L10,20 L15,40 L-15,40 Z" class="burner"/>
        
        <path d="M0,20 Q-25,-5 0,-45 Q25,-5 0,20 Z" class="flame-ca"/>
        <path d="M0,15 Q-15,0 0,-30 Q15,0 0,15 Z" class="flame-core"/>

        <text x="0" y="65" class="label">Calcium (Ca²⁺)</text>
        <text x="0" y="80" class="desc">Brick Red</text>
    </g>

    <!-- Copper -->
    <g transform="translate(540, 100)">
        <path d="M-10,20 L10,20 L15,40 L-15,40 Z" class="burner"/>
        
        <path d="M0,20 Q-20,0 0,-40 Q20,0 0,20 Z" class="flame-cu"/>
        <path d="M0,15 Q-10,0 0,-25 Q10,0 0,15 Z" class="flame-core"/>

        <text x="0" y="65" class="label">Copper (Cu²⁺)</text>
        <text x="0" y="80" class="desc">Blue-Green</text>
    </g>

</svg>`
      }
    },
    {
      id: 'call-tips',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips for Cation Testing',
        text: '• <strong>Distinguishing Al³⁺ from Ca²⁺:</strong> Both give white precipitate with NaOH but Al(OH)₃ dissolves in excess NaOH; Ca(OH)₂ does not<br/>• <strong>Distinguishing Al³⁺ from Zn²⁺:</strong> Both dissolve in excess NaOH; use flame test — Zn²⁺ gives no distinctive colour; Al³⁺ gives no colour either. Use ammonia solution: Zn(OH)₂ dissolves in excess NH₃, Al(OH)₃ does not<br/>• <strong>Fe²⁺ vs Fe³⁺:</strong> Fe²⁺ green precipitate (can turn rust-brown in air); Fe³⁺ brown precipitate<br/>• <strong>Na⁺ masks K⁺:</strong> A strong yellow Na⁺ flame can mask the lilac K⁺ colour; observe through blue glass to see K⁺'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'NaOH test: Cu²⁺ (blue ppt), Fe²⁺ (green → rust), Fe³⁺ (brown), Al³⁺ (white, dissolves in excess), Ca²⁺ (white, insoluble in excess), NH₄⁺ (NH₃ gas on warming). Flame tests: Li⁺=crimson, Na⁺=yellow, K⁺=lilac, Ca²⁺=brick-red, Cu²⁺=blue-green.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'NaOH: Cu²⁺(blue), Fe²⁺(green), Fe³⁺(brown), Al³⁺(white/dissolves), Ca²⁺(white/insoluble). Flames: Na⁺=yellow, K⁺=lilac, Ca²⁺=brick-red, Cu²⁺=blue-green.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-naoh', prompt: 'How do you distinguish between Al³⁺ and Ca²⁺ using sodium hydroxide solution?', answer: 'Both give a white precipitate with NaOH. However, Al(OH)₃ dissolves in excess NaOH (amphoteric), whereas Ca(OH)₂ is insoluble in excess NaOH.' },
      { id: 'cue-2', blockId: 'call-flame', prompt: 'State the flame colours for sodium, potassium, and calcium ions.', answer: 'Na⁺: persistent yellow/orange. K⁺: lilac/violet. Ca²⁺: brick red/orange-red.' },
      { id: 'cue-3', blockId: 'tbl-naoh', prompt: 'What observation would suggest that Fe²⁺ ions are present in a solution when NaOH is added?', answer: 'A green gelatinous precipitate forms initially (Fe(OH)₂). On standing in air, it slowly turns rust-brown as the Fe²⁺ is oxidised to Fe³⁺.' }
    ]
  },
  evidence: [],
  mentions: []
};
