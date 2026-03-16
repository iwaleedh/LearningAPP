export const note_olevel_chemistry_11_11_10 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-7-ethanoic-acid-and-esterification-reactions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe esterification in detail, name esters from their parent alcohol and acid, describe their properties, and list uses of esters.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Esters and Esterification', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Esters',
        text: '<strong>Functional group:</strong> –COO– (ester linkage)<br/><br/><strong>Esterification equation:</strong><br/>carboxylic acid + alcohol ⇌ ester + water<br/><br/>The reaction is <strong>reversible</strong> (⇌). Using concentrated H₂SO₄ as catalyst, heat under reflux increases yield. The reverse reaction (hydrolysis of ester back to acid + alcohol) is catalysed by acid or base.<br/><br/><strong>Properties of esters:</strong><br/>• Pleasant, fruity smells<br/>• Volatile liquids (lower boiling points than parent acid/alcohol)<br/>• Relatively insoluble in water but dissolve in organic solvents<br/>• Good solvents themselves'
      }
    },
    {
      id: 'tbl-esters',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of esters and their familiar uses',
        headers: ['Ester', 'From', 'Smell/Flavour', 'Use'],
        rows: [
          ['Ethyl ethanoate', 'Ethanol + ethanoic acid', 'Pear/nail varnish remover', 'Solvent, nail varnish remover'],
          ['Pentyl ethanoate', 'Pentan-1-ol + ethanoic acid', 'Banana', 'Food flavouring'],
          ['Ethyl butanoate', 'Ethanol + butanoic acid', 'Pineapple', 'Food flavouring'],
          ['Octyl ethanoate', 'Octan-1-ol + ethanoic acid', 'Orange', 'Perfume and flavouring'],
          ['Glyceryl esters (fats/oils)', 'Glycerol + fatty acids', 'No distinctive smell', 'Animal fats, vegetable oils, biodiesel']
        ]
      }
    },
    {
      id: 'call-naming',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Naming Esters',
        text: '<strong>Rule:</strong> alcohol part comes first (ending changed to -yl), then acid part (ending changed to -anoate).<br/><br/>Examples:<br/>• Methanol + propanoic acid → <strong>methyl propanoate</strong><br/>• Propan-1-ol + ethanoic acid → <strong>propyl ethanoate</strong><br/>• Butan-1-ol + methanoic acid → <strong>butyl methanoate</strong><br/><br/><strong>Uses of esters:</strong><br/>• Perfumes and cosmetics(fruity fragrances)<br/>• Food flavourings and artificial fruit flavours<br/>• Solvents (e.g. ethyl ethanoate in nail varnish remover, glues)<br/>• Plasticisers (keep plastics soft and flexible)<br/>• Biodiesel fuel (methyl esters of fatty acids)'
      }
    },
    {
      id: 'svg-esterification',
      type: 'svg',
      data: {
        caption: 'Formation of Ethyl Ethanoate from Ethanoic Acid and Ethanol',
        svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Ethanoic Acid -->
  <g transform="translate(40, 50)">
    <text x="30" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">Ethanoic Acid</text>
    
    <text x="0" y="30" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)">CH<tspan dy="6" font-size="12">3</tspan><tspan dy="-6">—</tspan>C</text>
    
    <path d="M 45 10 L 55 -5" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <path d="M 52 15 L 62 0" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <text x="65" y="0" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)">O</text>

    <!-- The OH that leaves -->
    <path d="M 52 18 L 65 30" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <rect x="65" y="15" width="30" height="25" fill="#fecaca" rx="4"/>
    <text x="70" y="32" font-family="var(--font-mono)" font-size="18" fill="#dc2626">OH</text>
  </g>

  <!-- Plus -->
  <text x="160" y="80" font-family="var(--font-mono)" font-size="24" fill="var(--color-text)">+</text>

  <!-- Ethanol -->
  <g transform="translate(190, 50)">
    <text x="45" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6" text-anchor="middle">Ethanol</text>
    
    <!-- The H that leaves -->
    <rect x="0" y="15" width="20" height="25" fill="#bfdbfe" rx="4"/>
    <text x="5" y="32" font-family="var(--font-mono)" font-size="18" fill="#2563eb">H</text>

    <text x="20" y="30" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)">O<tspan>—</tspan>CH<tspan dy="6" font-size="12">2</tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="12">3</tspan></text>
  </g>

  <!-- Arrow -->
  <path d="M 330 75 L 380 75" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M 380 82 L 330 82" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-rev)"/>
  <text x="355" y="65" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">conc. H₂SO₄</text>

  <!-- Ethyl Ethanoate -->
  <g transform="translate(410, 50)">
    <text x="55" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#10b981" text-anchor="middle">Ethyl Ethanoate</text>
    
    <text x="0" y="30" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)">CH<tspan dy="6" font-size="12">3</tspan><tspan dy="-6">—</tspan>C</text>
    
    <!-- double bond O -->
    <path d="M 45 10 L 55 -5" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <path d="M 52 15 L 62 0" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <text x="65" y="0" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)">O</text>

    <!-- Ester linkage -->
    <path d="M 52 18 L 65 30" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <text x="70" y="32" font-family="var(--font-mono)" font-size="18" fill="#10b981">O<tspan>—</tspan>CH<tspan dy="6" font-size="12">2</tspan><tspan dy="-6">—</tspan>CH<tspan dy="6" font-size="12">3</tspan></text>
  </g>

  <!-- Water -->
  <text x="430" y="140" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)">+ H₂O</text>

  <!-- Highlight box for condensation -->
  <path d="M 105 50 Q 140 30, 200 50" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="155" y="25" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">forms water</text>

  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text)"/>
    </marker>
    <marker id="arrow-rev" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 5 1 L 1 3 L 5 5 Z" fill="var(--color-text)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Esters: –COO– linkage, fruity smell, volatile. Made by esterification (acid + alcohol ⇌ ester + H₂O, conc. H₂SO₄ catalyst, heat). Named: [alcohol prefix]-yl [acid prefix]-anoate. Uses: perfumes, flavourings, solvents, plasticisers, biodiesel.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Esters: –COO– linkage; fruity; alcohol + carboxylic acid ⇌ ester + H₂O (H₂SO₄, heat). Name: -yl + -anoate. Uses: perfumes, flavourings, solvents.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What conditions are used to make an ester from an alcohol and carboxylic acid?', answer: 'Concentrated sulfuric acid (H₂SO₄) as catalyst, heat under reflux. The reaction is reversible (⇌).' },
      { id: 'cue-2', blockId: 'call-naming', prompt: 'Name the ester formed from propan-1-ol and methanoic acid.', answer: 'Propyl methanoate.' },
      { id: 'cue-3', blockId: 'tbl-esters', prompt: 'Name two uses of esters.', answer: 'Any two of: food flavourings, perfumes/fragrances, solvents (e.g. in nail varnish removers), plasticisers in plastics, biodiesel.' }
    ]
  },
  evidence: [],
  mentions: []
};
