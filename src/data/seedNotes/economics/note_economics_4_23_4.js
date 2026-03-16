export const note_economics_4_23_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the risks of primary product dependency for developing economies, including Dutch disease, and evaluate diversification strategies.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Primary Product Dependency', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Many developing economies depend on a narrow range of primary products for the majority of their export earnings and government revenue. Sub-Saharan African countries typically derive 60-80% of export earnings from commodities; oil-dependent economies (Nigeria, Angola, Venezuela) derive 80-90%+ of government revenues from oil. This <strong>primary product dependency</strong> creates multiple vulnerabilities that hinder long-run development.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Risks of Primary Product Dependency', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Price volatility</strong> — as analysed in the previous topic; commodity price swings create revenue instability that disrupts planning' },
          { text: '<strong>Prebisch-Singer terms of trade deterioration</strong> — long-run relative price decline means more exports needed to buy same quantity of imports' },
          { text: '<strong>Limited value added and linkages</strong> — raw commodity exports contain little processing; value added and employment multipliers are small compared to manufacturing' },
          { text: '<strong>Environmental degradation</strong> — intensive mining, logging, or monoculture agriculture depletes natural resources and creates environmental damage' },
          { text: '<strong>Dutch disease</strong> — resource boom can crowd out other tradable sectors through exchange rate appreciation (detailed below)' },
          { text: '<strong>Governance and corruption</strong> — concentrated resource revenues attract rent-seeking; political capture of resource wealth is common (see resource curse)' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Dutch Disease', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Dutch disease</strong> (named after the Netherlands\' experience following 1960s North Sea gas discovery) describes how a natural resource boom can damage other tradable sectors. The mechanism: resource export revenues increase the supply of foreign currency → domestic currency appreciates → manufacturing and agricultural exports become uncompetitive internationally → these sectors contract → when the resource is eventually depleted, the economy lacks the diversified industrial base to sustain development. The Netherlands lost much of its manufacturing in the 1970s; similar patterns seen in Nigeria, Venezuela, and Angola following oil booms.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Policy: Economic Diversification', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'The fundamental solution to primary product dependency is <strong>structural transformation</strong> — the shift of workers and resources from low-productivity primary activities into higher-productivity manufacturing and services. This was central to the success of South Korea, Taiwan, and (more recently) Vietnam. Policy tools include: infant industry protection and subsidies; investment in education to build the human capital needed for manufacturing; infrastructure investment; FDI attraction into manufacturing; sovereign wealth funds to sterilise resource revenues and prevent currency appreciation (as Botswana did with diamond revenues, accumulating reserves and developing other sectors).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Dutch Disease: Mechanism and Policy Response',
        headers: ['Stage', 'What Happens', 'Policy Response'],
        rows: [
          ['Resource discovery/boom', 'Large export revenues from oil/gas/minerals', 'Sterilise revenues in sovereign wealth fund to limit exchange rate appreciation'],
          ['Currency appreciation', 'Foreign exchange inflows appreciate exchange rate', 'Capital controls; central bank buys foreign currency to slow appreciation'],
          ['Deindustrialisation', 'Manufactured exports become uncompetitive; manufacturing contracts', 'Industrial policy to protect and develop manufacturing; skills investment'],
          ['Resource depletion', 'Resource revenues decline; economy lacks diversified base', 'Too late without earlier diversification; painful structural adjustment required']
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Primary product dependency creates risks: price volatility, Prebisch-Singer ToT deterioration, limited value added, environmental degradation, and Dutch disease (resource boom appreciates exchange rate, crowding out manufacturing); diversification into manufacturing and services is the key development strategy.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Explain the mechanism of Dutch disease and give a country example.',
        answer: 'Dutch disease: resource export revenues increase foreign currency supply → domestic currency appreciates → manufactured and agricultural exports become uncompetitive internationally → these sectors contract. When the resource is eventually depleted, the economy lacks the diversified base to sustain growth. The Netherlands lost manufacturing in the 1970s; Nigeria, Venezuela, and Angola show similar patterns following oil booms.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'Give four risks of primary product dependency beyond price volatility.',
        answer: 'Prebisch-Singer terms of trade deterioration (relative commodity prices fall long-run); limited value added (raw commodity exports have small employment multipliers); environmental degradation from intensive extraction; Dutch disease crowding out manufacturing; governance failures as concentrated resource revenues attract rent-seeking and corruption.'
      },
      {
        id: 'cue-3',
        blockId: 'para-3',
        prompt: 'How did Botswana manage diamond revenues to avoid Dutch disease?',
        answer: 'Botswana established the Pula Fund (sovereign wealth fund) to accumulate foreign exchange reserves from diamond revenues, sterilising the impact on the domestic currency. This prevented excessive appreciation and gave the government stable resources for public investment in education and infrastructure — enabling Botswana to achieve strong development outcomes despite dependence on a single commodity.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_4;
