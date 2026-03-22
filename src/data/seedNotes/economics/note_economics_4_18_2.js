export const note_economics_4_18_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the causes and economic effects of international migration, including brain drain, brain gain, and remittances, distinguishing impacts on host and sending countries.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'International Migration and Globalisation', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>International migration</strong> is the movement of people across national borders, either permanently or temporarily. The UN estimates there are over <strong>280 million international migrants</strong> globally — about 3.6% of world population. Migration has both economic causes (wage differentials, job opportunities) and non-economic causes (political persecution, conflict, family reunification).' }] } },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Push and Pull Factors',
        text: '<strong>Push factors</strong> drive people to leave: low wages, unemployment, conflict, political repression, poor public services.<br/><strong>Pull factors</strong> attract people to a destination: higher wages, job vacancies, better welfare systems, safety, family networks.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Brain Drain and Brain Gain', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Brain drain</strong> occurs when highly skilled workers emigrate from a country, depriving it of human capital. For example, doctors, engineers, and teachers leave developing countries for higher wages in developed nations. This worsens the sending country\'s ability to grow and provide services.<br/><strong>Brain gain</strong> is the corresponding benefit to the receiving country, which acquires skilled labour at little or no training cost. The UK NHS has historically relied heavily on doctors and nurses from India, Pakistan, and African nations.' }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'Some economists argue brain drain can eventually become a <strong>brain circulation</strong>: migrants acquire skills abroad and return home, bringing knowledge, capital, and networks. This may lead to a <strong>net benefit</strong> for the sending country in the long run — as seen with Indian IT professionals who returned after working in Silicon Valley.' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Remittances', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Remittances</strong> are money transfers sent by migrants to their home countries. They represent a crucial source of income for many developing economies. World Bank data shows global remittances exceed <strong>$700 billion annually</strong> — larger than total official development aid (ODA). For countries like Nepal, Haiti, and Tajikistan, remittances exceed 20% of GDP.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Economic Effects of Migration on Host vs Sending Country',
        headers: ['Effect', 'Host Country', 'Sending Country'],
        rows: [
          ['Labour supply', 'Expands workforce, fills skill/vacancy gaps', 'Loses working-age population; labour shortages'],
          ['Wages', 'May depress wages of low-skilled domestic workers', 'Wages may rise as labour supply falls'],
          ['Output', 'Higher GDP due to larger workforce', 'Reduced potential output'],
          ['Public finances', 'Net fiscal effect depends on skill level of migrants', 'Remittances support household spending and tax base'],
          ['Human capital', 'Brain gain: skilled workers arrive at low cost', 'Brain drain: loses expensively trained professionals'],
          ['Innovation', 'Diverse workforce may boost creativity and enterprise', 'Can lose entrepreneurial talent']
        ]
      }
    },
    {
      id: 'callout-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Evaluation Point',
        text: 'The net effect of migration on either country depends heavily on the <strong>skill level</strong> of migrants, the <strong>state of the labour market</strong> (full employment vs unemployment), and whether migrants are net fiscal contributors. High-skilled migrants are broadly positive for host countries; unskilled migrants may depress wages for the lowest-paid domestic workers.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't assume international migration always benefits both source and destination economies equally. In essays, address the brain drain impact on developing nations and wage suppression risks in recipient countries\u2014this shows integrated analysis."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'International migration creates brain drain in sending countries (loss of skilled workers) and brain gain in receiving countries; remittances ($700bn+) are a vital income source for developing economies.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-1',
        prompt: 'Approximately how many international migrants exist globally and what share of world population is that?',
        answer: 'Over 280 million international migrants, approximately 3.6% of world population.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Define brain drain and give an example.',
        answer: 'Brain drain is the emigration of highly skilled workers, depriving the sending country of human capital — e.g. doctors leaving developing countries to work in the UK NHS.'
      },
      {
        id: 'cue-3',
        blockId: 'para-4',
        prompt: 'What are remittances and how large are they relative to official development aid?',
        answer: 'Remittances are money transfers from migrants to their home countries, exceeding $700bn annually — larger than total official development aid.'
      },
      {
        id: 'cue-4',
        blockId: 'para-3',
        prompt: 'What is brain circulation and why might it benefit sending countries in the long run?',
        answer: 'Brain circulation is when migrants return home with acquired skills, capital, and networks — ultimately benefiting the sending country despite initial brain drain.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_18_2;
