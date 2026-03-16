export const note_olevel_biology_20_20_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/20 Human Influences On Ecosystems/20-2-1-habitat-destruction-and-endangered-species.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain the causes and consequences of habitat destruction and describe conservation strategies to protect endangered species.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Causes of Habitat Destruction', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Main Causes of Habitat Destruction',
        text: '<strong>Deforestation:</strong> Clearing forests for agriculture (cattle ranching, palm oil), timber, and urbanisation. Especially severe in tropical rainforests.<br/><br/><strong>Urbanisation:</strong> Expansion of cities destroys natural habitats.<br/><br/><strong>Drainage of wetlands:</strong> For agriculture and building development.<br/><br/><strong>Over-exploitation:</strong> Over-fishing, over-hunting, and over-collecting of species from the wild.<br/><br/><strong>Pollution:</strong> Chemical pollution of water and soil kills organisms.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Consequences of habitat destruction',
        headers: ['Consequence', 'Explanation'],
        rows: [
          ['Loss of biodiversity', 'Species lose their habitat → population decline → extinction'],
          ['Extinction of species', 'Once extinct, species are lost forever — irreversible'],
          ['Disruption of food webs', 'Removing one species can cause collapse of a whole food web'],
          ['Increased CO₂', 'Fewer trees means less CO₂ absorbed by photosynthesis → climate change'],
          ['Soil erosion', 'Tree roots hold soil; without trees, topsoil washes away']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Conservation Strategies', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conservation Methods',
        text: '<strong>Nature reserves and national parks:</strong> Areas where habitats and species are legally protected from development and hunting.<br/><br/><strong>Captive breeding programmes:</strong> Endangered animals bred in zoos; offspring reintroduced to the wild (e.g. Arabian oryx, giant panda).<br/><br/><strong>Seed banks:</strong> Plant seeds stored at low temperatures to preserve genetic diversity (e.g. Svalbard Global Seed Vault).<br/><br/><strong>International agreements:</strong> CITES (Convention on International Trade in Endangered Species) — bans trade in endangered species.<br/><br/><strong>Reforestation:</strong> Planting trees to restore forests and habitats.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked why biodiversity is important, include: <strong>food security</strong> (wild species provide new crops/medicines), <strong>ecosystem stability</strong> (diverse ecosystems are more resilient), and <strong>ecological services</strong> (e.g. pollination, water purification).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Habitat destruction through deforestation, urbanisation, and pollution causes loss of biodiversity and species extinction. Conservation strategies include nature reserves, captive breeding, seed banks, and international agreements like CITES.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Habitat destruction causes: deforestation, urbanisation, drainage, over-exploitation. Consequences: extinction, food web disruption, increased CO₂. Conservation: reserves, captive breeding, seed banks, CITES.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Give three causes of habitat destruction.', answer: 'Deforestation (for agriculture/timber), urbanisation (city expansion), drainage of wetlands, over-exploitation (over-fishing/hunting), and pollution.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'What is a captive breeding programme and why is it used?', answer: 'A captive breeding programme breeds endangered animals in zoos, then reintroduces offspring to the wild to increase wild population numbers. Used when wild populations are critically low.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Why does deforestation increase atmospheric CO₂?', answer: 'Trees absorb CO₂ during photosynthesis. Fewer trees means less CO₂ is removed from the atmosphere, contributing to the greenhouse effect and climate change.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_20_20_1;
