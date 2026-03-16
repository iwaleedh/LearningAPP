export const note_olevel_biology_20_20_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/20 Human Influences On Ecosystems/20-4-1-conservation-and-sustainable-development.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define sustainable development and describe conservation methods used to protect biodiversity and natural resources.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Sustainable Development', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sustainable Development Definition',
        text: '<strong>Sustainable development</strong> is development that meets the needs of the current generation <strong>without compromising the ability of future generations</strong> to meet their own needs.<br/><br/>It balances <strong>economic growth</strong>, <strong>social wellbeing</strong>, and <strong>environmental protection</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Conservation Methods', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Conservation strategies and their purposes',
        headers: ['Strategy', 'Method', 'Purpose'],
        rows: [
          ['Nature reserves', 'Protected areas where development and hunting are restricted', 'Preserve habitats and allow species to recover'],
          ['Legal protection', 'Laws banning hunting of endangered species; CITES treaty', 'Prevent illegal trade and exploitation'],
          ['Captive breeding', 'Breeding endangered species in zoos; reintroduction programmes', 'Increase population numbers of critically endangered species'],
          ['Seed banks', 'Storing plant seeds at low temperatures (e.g. Svalbard)', 'Preserve genetic diversity; protect against crop failures'],
          ['Reforestation', 'Planting trees to replace deforested areas', 'Restore habitats; increase CO₂ absorption; prevent soil erosion'],
          ['Sustainable fishing', 'Catch limits, minimum mesh sizes, fishing quotas', 'Prevent over-fishing; allow fish populations to recover'],
          ['Reducing pollution', 'Catalytic converters, water treatment, recycling', 'Reduce damage to ecosystems from chemical pollution']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Why Conserve Biodiversity?', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reasons to Protect Biodiversity',
        text: '<strong>Economic:</strong> Wild species provide food, medicines, fibres, and tourism income.<br/><br/><strong>Ecological:</strong> Ecosystems with high biodiversity are more stable and resilient to disturbance. Species provide ecological services (pollination, water purification, nutrient cycling).<br/><br/><strong>Ethical/intrinsic:</strong> All species have an intrinsic right to exist, regardless of their usefulness to humans.<br/><br/><strong>Future potential:</strong> Undiscovered species may yield new medicines or crops.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Sustainable Forestry',
        text: 'Sustainable forestry practices: <strong>selective logging</strong> (only some trees cut, not whole forest), <strong>replanting</strong> for every tree cut, and <strong>protecting old-growth forest</strong>. This maintains the forest ecosystem while still providing timber.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Sustainable development meets current needs without harming future generations. Conservation strategies include nature reserves, captive breeding, seed banks, reforestation, and sustainable fishing. Biodiversity should be protected for economic, ecological, and ethical reasons.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Sustainable development: current needs met without harming future. Conservation: reserves, captive breeding, seed banks, reforestation, sustainable fishing. Biodiversity value: economic, ecological, ethical.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Define sustainable development.', answer: 'Development that meets the needs of the current generation without compromising the ability of future generations to meet their own needs.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Explain what a seed bank is and why it is important.', answer: 'A seed bank stores plant seeds at low temperatures to preserve genetic diversity. It protects species from extinction and provides resources for future crop breeding.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Give two reasons why biodiversity should be conserved.', answer: 'Economic: wild species provide medicines, food, and tourism income. Ecological: biodiverse ecosystems are more stable and provide services like pollination and water purification.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_20_20_3;
