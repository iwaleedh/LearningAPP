export const note_olevel_chemistry_7_7_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-1-1-properties-of-acids-and-bases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and compare the properties of acids and bases, and use indicators and pH to classify solutions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The pH Scale and Indicators', level: 2 }
    },
    {
      id: 'call-ph',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The pH Scale',
        text: 'pH is a measure of the acidity or alkalinity of a solution (scale 0–14).<br/><br/>• pH 0–6: <strong>acidic</strong> (lower = more acidic)<br/>• pH 7: <strong>neutral</strong><br/>• pH 8–14: <strong>alkaline</strong> (higher = more alkaline)<br/><br/>Measured with: universal indicator (produces a range of colours), pH meter, or litmus.'
      }
    },
    {
      id: 'svg-ph-scale',
      type: 'svg',
      data: {
        caption: 'The pH scale showing acidity, neutrality, and alkalinity, with typical Universal Indicator colours.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120">
    <defs>
        <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ff0000"/>
            <stop offset="14%" stop-color="#ff4500"/>
            <stop offset="28%" stop-color="#ffa500"/>
            <stop offset="42%" stop-color="#ffff00"/>
            <stop offset="50%" stop-color="#006400"/>
            <stop offset="64%" stop-color="#008080"/>
            <stop offset="78%" stop-color="#0000ff"/>
            <stop offset="92%" stop-color="#4b0082"/>
            <stop offset="100%" stop-color="#800080"/>
        </linearGradient>
    </defs>
    
    <style>
        .num { font-family: var(--font-mono); font-size: 16px; fill: var(--color-text); text-anchor: middle; }
        .tick { stroke: var(--color-text); stroke-width: 1.5; }
        .group { font-family: var(--font-sans); font-size: 14px; font-weight: bold; text-anchor: middle; fill: var(--color-text); }
        .arrow { stroke: var(--color-text); stroke-width: 2; fill: none; }
    </style>
    
    <rect x="20" y="40" width="560" height="25" rx="4" fill="url(#phGrad)"/>
    
    <!-- Ticks and Numbers -->
    <g transform="translate(0, 40)">
        <g transform="translate(20, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">0</text></g>
        <g transform="translate(60, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">1</text></g>
        <g transform="translate(100, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">2</text></g>
        <g transform="translate(140, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">3</text></g>
        <g transform="translate(180, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">4</text></g>
        <g transform="translate(220, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">5</text></g>
        <g transform="translate(260, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">6</text></g>
        <g transform="translate(300, 0)"><line y1="0" y2="-12" class="tick" stroke-width="2"/><text y="-16" class="num" font-weight="bold">7</text></g>
        <g transform="translate(340, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">8</text></g>
        <g transform="translate(380, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">9</text></g>
        <g transform="translate(420, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">10</text></g>
        <g transform="translate(460, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">11</text></g>
        <g transform="translate(500, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">12</text></g>
        <g transform="translate(540, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">13</text></g>
        <g transform="translate(580, 0)"><line y1="0" y2="-8" class="tick"/><text y="-12" class="num">14</text></g>
    </g>

    <!-- Group Labels and Arrows -->
    <text x="140" y="95" class="group">Increasingly Acidic</text>
    <path d="M 240 90 L 40 90 M 40 90 L 50 85 M 40 90 L 50 95" class="arrow"/>
    
    <text x="300" y="95" class="group">Neutral</text>
    <line x1="300" y1="70" x2="300" y2="80" class="tick"/>
    
    <text x="460" y="95" class="group">Increasingly Alkaline</text>
    <path d="M 360 90 L 560 90 M 560 90 L 550 85 M 560 90 L 550 95" class="arrow"/>
</svg>`
      }
    },
    {
      id: 'tbl-indicators',
      type: 'comparisonTable',
      data: {
        caption: 'Indicators and their colours',
        headers: ['Indicator', 'Colour in Acid', 'Colour in Neutral', 'Colour in Alkali'],
        rows: [
          ['Litmus', 'Red', 'Purple', 'Blue'],
          ['Phenolphthalein', 'Colourless', 'Colourless', 'Pink'],
          ['Methyl orange', 'Red', 'Orange', 'Yellow'],
          ['Universal indicator', 'Red/orange', 'Green', 'Blue/violet']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Properties of Acids', level: 2 }
    },
    {
      id: 'call-acids',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Acids',
        text: '• Turn litmus <strong>red</strong>; pH &lt; 7<br/>• React with reactive metals → salt + hydrogen: Mg + 2HCl → MgCl₂ + H₂<br/>• React with metal oxides or hydroxides (bases) → salt + water (neutralisation)<br/>• React with metal carbonates → salt + water + CO₂: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂<br/>• Common acids: HCl (hydrochloric), H₂SO₄ (sulfuric), HNO₃ (nitric), CH₃COOH (ethanoic), H₂CO₃ (carbonic)'
      }
    },
    {
      id: 'h-2b',
      type: 'heading',
      data: { text: 'Properties of Bases and Alkalis', level: 2 }
    },
    {
      id: 'call-bases',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bases and Alkalis',
        text: 'A <strong>base</strong> is a substance that neutralises an acid → produces salt + water.<br/>An <strong>alkali</strong> is a <strong>soluble base</strong> — dissolves in water to give OH⁻ ions.<br/><br/>• Turn litmus <strong>blue</strong>; pH &gt; 7<br/>• React with acids → salt + water (neutralisation)<br/>• Common bases: NaOH, Ca(OH)₂, NH₃(aq), MgO, CuO<br/>• Common alkalis: NaOH (sodium hydroxide), KOH, Ca(OH)₂ (limewater), NH₃(aq) (ammonia solution)<br/><br/>Not all bases are alkalis (e.g. CuO is a base but it is insoluble so it is not an alkali).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'pH < 7 = acid; pH 7 = neutral; pH > 7 = alkaline. Acids react with metals/bases/carbonates. Bases neutralise acids. Alkali = soluble base (gives OH⁻ in water). Litmus is the key indicator: red in acid, blue in alkali.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'pH: <7 acid, 7 neutral, >7 alkali. Acids react with metals/carbonates/bases. Alkali = soluble base. Lit-mus: RED acid, BLUE alkali.',
    cues: [
      { id: 'cue-1', blockId: 'call-ph', prompt: 'What colour does universal indicator turn in a solution with pH 3, pH 7, and pH 12?', answer: 'pH 3: red/orange (acid); pH 7: green (neutral); pH 12: blue/violet (alkaline).' },
      { id: 'cue-2', blockId: 'call-acids', prompt: 'Write a word equation for the reaction of calcium carbonate with hydrochloric acid.', answer: 'Calcium carbonate + hydrochloric acid → calcium chloride + water + carbon dioxide.' },
      { id: 'cue-3', blockId: 'call-bases', prompt: 'State the difference between a base and an alkali.', answer: 'A base is any substance that neutralises an acid to form salt and water. An alkali is a soluble base — one that dissolves in water to produce hydroxide ions (OH⁻).' }
    ]
  },
  evidence: [],
  mentions: []
};
