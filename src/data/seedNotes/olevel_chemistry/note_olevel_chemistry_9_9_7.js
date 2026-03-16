export const note_olevel_chemistry_9_9_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-3-1-extraction-of-metals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the link between position in the reactivity series and the method used to extract a metal from its ore.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Extraction of Metals', level: 2 }
    },
    {
      id: 'svg-extraction-methods',
      type: 'svg',
      data: {
        caption: 'The link between a metal\'s position in the reactivity series and its method of extraction.',
        svg: `<svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Reactivity Arrow Left -->
  <defs>
    <linearGradient id="react-grad-extract" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="50%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
    <marker id="arrow-up-react" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto">
      <path d="M 1 5 L 3 1 L 5 5 Z" fill="#ef4444"/>
    </marker>
  </defs>

  <rect x="40" y="40" width="20" height="260" fill="url(#react-grad-extract)" />
  <path d="M 50 40 L 50 25" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow-up-react)" />
  <text x="25" y="170" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" transform="rotate(-90 25,170)" text-anchor="middle">Reactivity</text>

  <!-- Metals Column -->
  <g font-family="var(--font-sans)" font-size="13" font-weight="bold">
    <!-- Electrolysis Group -->
    <text x="80" y="60" fill="#ef4444">Potassium (K)</text>
    <text x="80" y="80" fill="#ef4444">Sodium (Na)</text>
    <text x="80" y="100" fill="#ef4444">Calcium (Ca)</text>
    <text x="80" y="120" fill="#ef4444">Magnesium (Mg)</text>
    <text x="80" y="140" fill="#ef4444">Aluminium (Al)</text>

    <!-- Carbon line -->
    <text x="80" y="165" fill="#71717a" font-style="italic">Carbon (C)</text>
    <line x1="80" y1="170" x2="450" y2="170" stroke="#71717a" stroke-width="2" stroke-dasharray="6,4" />

    <!-- Reduction Group -->
    <text x="80" y="190" fill="#ca8a04">Zinc (Zn)</text>
    <text x="80" y="210" fill="#ca8a04">Iron (Fe)</text>
    <text x="80" y="230" fill="#ca8a04">Lead (Pb)</text>
    <text x="80" y="250" fill="#ca8a04">Copper (Cu)</text>

    <!-- Native Group -->
    <text x="80" y="280" fill="#3b82f6">Silver (Ag)</text>
    <text x="80" y="300" fill="#3b82f6">Gold (Au)</text>
  </g>

  <!-- Method Brackets and Boxes -->
  <!-- Electrolysis Box -->
  <path d="M 200 50 L 220 50 L 220 145 L 200 145" fill="none" stroke="#ef4444" stroke-width="2"/>
  <rect x="230" y="70" width="230" height="55" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="2" />
  <text x="345" y="90" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">Electrolysis</text>
  <text x="345" y="110" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="middle">Of molten ore (compounds are</text>
  <text x="345" y="123" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="middle">too stable for carbon reduction)</text>

  <!-- Carbon Reduction Box -->
  <path d="M 200 180 L 220 180 L 220 255 L 200 255" fill="none" stroke="#ca8a04" stroke-width="2"/>
  <rect x="230" y="190" width="230" height="55" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="2" />
  <text x="345" y="210" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">Reduction with Carbon</text>
  <text x="345" y="230" font-family="var(--font-sans)" font-size="12" fill="#ca8a04" text-anchor="middle">Heated with carbon/coke</text>
  <text x="345" y="243" font-family="var(--font-sans)" font-size="12" fill="#ca8a04" text-anchor="middle">in a furnace</text>

  <!-- Native Box -->
  <path d="M 200 270 L 220 270 L 220 305 L 200 305" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <rect x="230" y="275" width="230" height="30" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="345" y="295" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Found Native (Uncombined)</text>

</svg>`
      }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity Series and Extraction Method',
        text: 'The method used to extract a metal depends on its <strong>position in the reactivity series</strong>:<br/><br/><strong>High reactivity (K, Na, Ca, Mg, Al)</strong> — must use <strong>electrolysis</strong> of molten compounds (cannot be reduced by carbon — they would just re-react)<br/><br/><strong>Medium reactivity (Zn, Fe, Pb)</strong> — extracted by <strong>reduction with carbon (coke)</strong> in a furnace (C is above these metals in reactivity)<br/><br/><strong>Low reactivity (Cu)</strong> — can be obtained by reduction with carbon or more cheaply by other methods (hydrometallurgy, smelting)<br/><br/><strong>Very low (Ag, Au, Pt)</strong> — found <strong>native</strong> (as uncombined elements in nature) — do not need extraction'
      }
    },
    {
      id: 'tbl-extract',
      type: 'comparisonTable',
      data: {
        caption: 'Extraction methods and examples',
        headers: ['Metal', 'Reactivity', 'Method', 'Ore / source'],
        rows: [
          ['Potassium', 'Very high', 'Electrolysis of molten KCl', 'Sylvite (KCl)'],
          ['Sodium', 'Very high', 'Electrolysis of molten NaCl (Downs cell)', 'Rock salt / brine'],
          ['Aluminium', 'High', 'Electrolysis of molten Al₂O₃ in cryolite', 'Bauxite'],
          ['Zinc', 'Medium', 'Reduction by carbon', 'Zinc blende (ZnS)'],
          ['Iron', 'Medium', 'Reduction by CO in blast furnace', 'Haematite (Fe₂O₃)'],
          ['Copper', 'Low-medium', 'Smelting / electrolysis refining', 'Chalcopyrite (CuFeS₂)'],
          ['Gold / Silver', 'Very low', 'Found native — no extraction needed', 'Nuggets in rock']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: why not use carbon for Al?',
        text: 'Carbon cannot reduce aluminium oxide because:<br/>1. Aluminium is above carbon in the reactivity series.<br/>2. At practical temperatures, the aluminium would re-oxidise before it could be collected.<br/><br/>Electrolysis of molten Al₂O₃ is used instead — the Al₂O₃ must be <strong>molten</strong> so ions can move.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'High reactivity metals (K, Na, Al) → electrolysis. Medium reactivity (Zn, Fe, Pb) → carbon reduction. Low/unreactive (Ag, Au) → found native. The more reactive the metal, the more energy-intensive its extraction.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'High reactivity → electrolysis. Medium → carbon reduction. Low/unreactive → found native.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Why is electrolysis needed to extract aluminium rather than reduction with carbon?', answer: 'Aluminium is more reactive than carbon in the reactivity series, so carbon cannot reduce aluminium oxide. Electrolysis of molten Al₂O₃ is required instead.' },
      { id: 'cue-2', blockId: 'tbl-extract', prompt: 'State the ore and extraction method for iron.', answer: 'Iron is extracted from haematite (Fe₂O₃) by reduction with carbon monoxide in a blast furnace.' },
      { id: 'cue-3', blockId: 'call-key', prompt: 'Name two metals that can be found in nature as uncombined elements, and state why.', answer: 'Gold and silver are found native because they are so unreactive they do not form compounds with oxygen in nature.' }
    ]
  },
  evidence: [],
  mentions: []
};
