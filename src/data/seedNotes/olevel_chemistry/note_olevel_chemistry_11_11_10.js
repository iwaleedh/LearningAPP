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
