export const note_olevel_chemistry_12_12_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-3-1-identification-of-anions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe chemical tests to identify carbonate, sulfate, halide and nitrate anions, and state the observations for each positive result.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Test for Carbonate Ion (CO₃²⁻)', level: 2 }
    },
    {
      id: 'call-carb',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Carbonate Test',
        text: '<strong>Reagent:</strong> Add dilute hydrochloric acid (or any dilute acid)<br/><strong>Observation:</strong> Effervescence (fizzing); colourless gas produced<br/><strong>Confirm gas:</strong> Pass gas into limewater (Ca(OH)₂ solution) → limewater turns milky/cloudy (CO₂ forms CaCO₃ precipitate)<br/><br/>CO₃²⁻ + 2H⁺ → CO₂ + H₂O<br/>CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Test for Sulfate Ion (SO₄²⁻)', level: 2 }
    },
    {
      id: 'call-sulf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sulfate Test',
        text: '<strong>Reagent:</strong> Add dilute hydrochloric acid (to acidify), then add barium chloride solution (BaCl₂)<br/><strong>Observation:</strong> White precipitate of barium sulfate (BaSO₄) forms immediately<br/><strong>Confirm:</strong> White precipitate is <strong>insoluble in dilute HCl</strong> (this rules out sulfite and carbonate)<br/><br/>Ba²⁺ + SO₄²⁻ → BaSO₄↓ (white, insoluble in acid)<br/><br/><em>Why acidify first?</em> The HCl removes CO₃²⁻ and SO₃²⁻ ions which would also give white precipitates with Ba²⁺.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Tests for Halide Ions (Cl⁻, Br⁻, I⁻)', level: 2 }
    },
    {
      id: 'call-halide',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Halide Tests (Using Silver Nitrate)',
        text: '<strong>Reagent:</strong> Add dilute nitric acid (to acidify), then add silver nitrate solution (AgNO₃)<br/><br/>• <strong>Cl⁻:</strong> White precipitate (AgCl) — dissolves in dilute ammonia (NH₃)<br/>• <strong>Br⁻:</strong> Cream/pale yellow precipitate (AgBr) — partially dissolves in dilute ammonia; fully dissolves in concentrated ammonia<br/>• <strong>I⁻:</strong> Yellow precipitate (AgI) — insoluble in both dilute and concentrated ammonia<br/><br/><em>Why acidify with HNO₃?</em> Removes CO₃²⁻ and SO₄²⁻ that would react with Ag⁺ to give misleading precipitates.'
      }
    },
    {
      id: 'svg-halide-ppts',
      type: 'svg',
      data: {
        caption: 'Colours of silver halide precipitates: AgCl (white), AgBr (cream), AgI (yellow).',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
    <defs>
        <style>
            .tube { fill: rgba(149, 165, 166, 0.1); stroke: var(--color-text); stroke-width: 2; stroke-linecap: round; }
            .liquid { fill: rgba(52, 152, 219, 0.2); }
            .ppt-cl { fill: #fdfdfd; stroke: #bdc3c7; stroke-dasharray: 2,2; }
            .ppt-br { fill: #f1c40f; opacity: 0.5; stroke: #f39c12; stroke-dasharray: 2,2; }
            .ppt-i { fill: #f39c12; opacity: 0.8; stroke: #e67e22; stroke-dasharray: 2,2; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); text-anchor: middle; }
            .label-bold { font-family: var(--font-sans); font-size: 16px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
        </style>
    </defs>

    <!-- Tube 1: Chloride -->
    <g transform="translate(100, 20)">
        <path d="M -20,0 L -20,100 A 20,20 0 0,0 20,100 L 20,0" class="tube"/>
        <!-- Liquid -->
        <path d="M -18,40 L 18,40 L 18,90 A 18,18 0 0,1 -18,90 Z" class="liquid"/>
        <!-- Precipitate -->
        <path d="M -16,80 Q 0,75 16,85 A 16,16 0 0,1 -16,85 Z" class="ppt-cl"/>
        <circle cx="-5" cy="90" r="3" fill="#0f172a"/>
        <circle cx="5" cy="95" r="4" fill="#0f172a"/>
        <circle cx="10" cy="85" r="2" fill="#0f172a"/>
        
        <text x="0" y="140" class="label-bold">Chloride (Cl⁻)</text>
        <text x="0" y="160" class="label">White ppt</text>
        <text x="0" y="175" class="label">(AgCl)</text>
    </g>

    <!-- Tube 2: Bromide -->
    <g transform="translate(250, 20)">
        <path d="M -20,0 L -20,100 A 20,20 0 0,0 20,100 L 20,0" class="tube"/>
        <!-- Liquid -->
        <path d="M -18,40 L 18,40 L 18,90 A 18,18 0 0,1 -18,90 Z" class="liquid"/>
        <!-- Precipitate -->
        <path d="M -16,80 Q 0,75 16,85 A 16,16 0 0,1 -16,85 Z" class="ppt-br"/>
        <circle cx="-5" cy="90" r="3" fill="#532407" opacity="0.6"/>
        <circle cx="5" cy="95" r="4" fill="#532407" opacity="0.6"/>
        <circle cx="10" cy="85" r="2" fill="#532407" opacity="0.6"/>
        
        <text x="0" y="140" class="label-bold">Bromide (Br⁻)</text>
        <text x="0" y="160" class="label">Cream ppt</text>
        <text x="0" y="175" class="label">(AgBr)</text>
    </g>

    <!-- Tube 3: Iodide -->
    <g transform="translate(400, 20)">
        <path d="M -20,0 L -20,100 A 20,20 0 0,0 20,100 L 20,0" class="tube"/>
        <!-- Liquid -->
        <path d="M -18,40 L 18,40 L 18,90 A 18,18 0 0,1 -18,90 Z" class="liquid"/>
        <!-- Precipitate -->
        <path d="M -16,80 Q 0,75 16,85 A 16,16 0 0,1 -16,85 Z" class="ppt-i"/>
        <circle cx="-5" cy="90" r="3" fill="#f39c12"/>
        <circle cx="5" cy="95" r="4" fill="#f39c12"/>
        <circle cx="10" cy="85" r="2" fill="#f39c12"/>
        
        <text x="0" y="140" class="label-bold">Iodide (I⁻)</text>
        <text x="0" y="160" class="label">Yellow ppt</text>
        <text x="0" y="175" class="label">(AgI)</text>
    </g>

</svg>`
      }
    },
    {
      id: 'tbl-halides',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of halide precipitate tests',
        headers: ['Halide ion', 'Precipitate colour', 'Formula', 'Solubility in dilute NH₃', 'Solubility in conc NH₃'],
        rows: [
          ['Cl⁻ (chloride)', 'White', 'AgCl', 'Soluble (dissolves)', 'Soluble'],
          ['Br⁻ (bromide)', 'Cream', 'AgBr', 'Partially soluble', 'Soluble'],
          ['I⁻ (iodide)', 'Yellow', 'AgI', 'Insoluble', 'Insoluble']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Test for Nitrate Ion (NO₃⁻)', level: 2 }
    },
    {
      id: 'call-nitrate',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nitrate Test (Brown Ring / Aluminium Reduction)',
        text: '<strong>Reagent:</strong> Add aluminium powder (or Devarda\'s alloy) and sodium hydroxide solution; warm gently<br/><strong>Observation:</strong> NH₃ gas is produced (the NO₃⁻ is reduced to NH₄⁺, then NH₃ in alkali)<br/><strong>Confirm NH₃:</strong> Damp red litmus paper turns blue; white fumes form with HCl<br/><br/>NO₃⁻ + 8[H] → NH₃ + 3H₂O (reduction by aluminium in alkali)<br/><br/><em>Note:</em> NH₄⁺ already present would also give NH₃ on warming with NaOH — test for NH₄⁺ first separately.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'CO₃²⁻: dilute acid → CO₂ (limewater milky). SO₄²⁻: dilute HCl + BaCl₂ → white ppt (BaSO₄, insoluble in acid). Halides: dilute HNO₃ + AgNO₃ → Cl⁻ (white/dissolves in NH₃), Br⁻ (cream/partial), I⁻ (yellow/insoluble). NO₃⁻: Al + NaOH → NH₃ (red litmus → blue).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'CO₃²⁻: add acid → CO₂ (limewater milky). SO₄²⁻: BaCl₂ → white ppt insoluble in HCl. Halides: AgNO₃ → white(Cl), cream(Br), yellow(I). NO₃⁻: Al+NaOH → NH₃.',
    cues: [
      { id: 'cue-1', blockId: 'call-sulf', prompt: 'How would you test for sulfate ions? Why must you acidify the solution first?', answer: 'Add dilute HCl then BaCl₂ solution — white precipitate (BaSO₄) insoluble in HCl confirms SO₄²⁻. Acidify first to remove CO₃²⁻ and SO₃²⁻ ions which would also give white precipitates with Ba²⁺.' },
      { id: 'cue-2', blockId: 'tbl-halides', prompt: 'State the colour of the precipitate formed when testing for iodide ions with acidified silver nitrate, and describe its solubility in ammonia.', answer: 'AgI gives a yellow precipitate. It is insoluble in both dilute and concentrated ammonia solution.' },
      { id: 'cue-3', blockId: 'call-halide', prompt: 'Why is the halide solution acidified with dilute nitric acid (not hydrochloric acid) before adding silver nitrate?', answer: 'Dilute HNO₃ is used to acidify because Cl⁻ in HCl would itself react with Ag⁺ to give a white precipitate, giving a false positive result for chloride.' }
    ]
  },
  evidence: [],
  mentions: []
};
