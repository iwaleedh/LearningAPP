export const note_economics_2_7_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand Gross National Income (GNI) as an alternative to GDP, how it is calculated, and when it is more appropriate to use.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'GNI as an Alternative Measure', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition',
        text: '<strong>GNI (Gross National Income)</strong>: GDP plus net income from abroad. It measures the total income earned by a country\'s residents, regardless of where production takes place.<br/><br/>GNI = GDP + Net income from abroad<br/>Net income from abroad = Income earned by residents overseas − Income paid to foreign residents'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'GDP vs GNI', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of GDP and GNI',
        headers: ['Criterion', 'GDP', 'GNI'],
        rows: [
          ['Definition', 'Total value of goods and services produced within a country\'s borders', 'Total income earned by a country\'s residents, including from abroad'],
          ['Geographic scope', 'Domestic territory (where production occurs)', 'National residents (wherever they earn income)'],
          ['Includes overseas earnings?', 'No', 'Yes — adds factor incomes earned abroad by residents'],
          ['Includes foreign earners?', 'Yes — all production within borders', 'No — deducts income sent to foreign residents'],
          ['Best used for', 'Measuring domestic economic activity and output', 'Measuring living standards and welfare of residents'],
          ['Example difference', 'MNCs producing in Ireland adds to Irish GDP', 'Profits repatriated by MNCs reduce Irish GNI vs GDP']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Why GNI May Be Preferred for Living Standards', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Remittances</strong>: workers living abroad send income home — this raises GNI but not GDP' },
          { text: '<strong>Overseas investment income</strong>: dividends and interest received from foreign assets raise GNI' },
          { text: '<strong>Multinational profits</strong>: if foreign companies dominate production (as in Ireland), GDP overstates domestic welfare; GNI is more accurate' },
          { text: 'World Bank uses <strong>GNI per capita</strong> (Atlas method) to classify countries by income level' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Ireland',
        text: 'Ireland has very large GDP because many multinational tech companies (Google, Apple) locate there for tax purposes. However, profits are repatriated abroad, so Irish residents do not receive that income.<br/><br/>Ireland\'s GDP is significantly higher than its GNI, meaning GDP <strong>overstates</strong> the living standards of Irish residents. GNI per capita is the better measure here.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked which measure is more appropriate for measuring <strong>living standards</strong>, argue for GNI per capita — it captures income that residents actually receive, including from overseas, and excludes profits flowing out of the country.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'GNI = GDP + net income from abroad. It better measures residents\' actual income and living standards, particularly in countries with large multinational sectors or significant remittance flows.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "When asked which measure is more appropriate for measuring living standards, argue for GNI per capita \u2014 it captures income that residents actually receive, including from overseas, and excludes profits flowing out of the country."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'GNI = GDP + net income from abroad; it measures residents\' income regardless of where earned.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What is the formula for GNI?',
        answer: 'GNI = GDP + Net income from abroad (income earned by residents overseas minus income paid to foreign residents).'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'What is the key geographic difference between GDP and GNI?',
        answer: 'GDP measures production within domestic borders; GNI measures income earned by national residents wherever they are located.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'Give two reasons why GNI may be higher than GDP for a country.',
        answer: 'Workers abroad send remittances home (raises GNI); residents receive dividends/interest from foreign investments.'
      },
      {
        id: 'cue-4',
        blockId: 'call-2',
        prompt: 'Why does GDP overstate living standards in Ireland?',
        answer: 'Large multinational companies produce in Ireland but repatriate profits abroad, so GDP is much larger than what residents actually receive as income.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_1;
