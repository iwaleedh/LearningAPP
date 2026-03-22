export const note_economics_4_18_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain how trade liberalisation through WTO rounds and regional trading blocs has driven globalisation, and distinguish between multilateral, bilateral, and unilateral approaches to liberalisation.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Trade Liberalisation and Trading Blocs', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Trade liberalisation</strong> is the removal or reduction of restrictions on international trade, including tariffs, quotas, and non-tariff barriers. It has been a primary driver of globalisation since World War II. Lower trade barriers reduce the cost of importing and exporting, encouraging firms to specialise, expand markets, and integrate into global value chains.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'WTO and Multilateral Rounds', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>World Trade Organization (WTO)</strong> and its predecessor, GATT, have overseen successive rounds of multilateral trade negotiations. The <strong>Uruguay Round (1986–1994)</strong> created the WTO, cut average tariffs to below 5% in developed countries, and extended rules to services (GATS) and intellectual property (TRIPS). The <strong>Doha Development Round (launched 2001)</strong> aimed to further liberalise trade in agriculture and reduce subsidies, but collapsed due to disagreements between developed and developing countries — leading to a rise in bilateral and regional deals.' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Regional Trading Blocs', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>regional trading bloc</strong> is a group of countries that have agreed to reduce or eliminate trade barriers among themselves. Major examples include:<br/>• <strong>EU Single Market</strong>: free movement of goods, services, capital, and labour among 27 member states.<br/>• <strong>NAFTA/USMCA</strong>: free trade area between USA, Canada, and Mexico.<br/>• <strong>ASEAN</strong>: association of 10 Southeast Asian nations pursuing economic integration.<br/>• <strong>MERCOSUR</strong>: South American customs union.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Approaches to Trade Liberalisation',
        headers: ['Approach', 'Definition', 'Example', 'Advantage', 'Disadvantage'],
        rows: [
          ['Multilateral', 'All WTO members reduce barriers simultaneously', 'Uruguay Round', 'Most beneficial globally; avoids trade diversion', 'Slow; hardest to negotiate'],
          ['Bilateral/Regional', 'Two countries or a bloc reduce barriers between themselves', 'USMCA, EU-Japan EPA', 'Faster to negotiate; deeper integration possible', 'May divert trade from non-members'],
          ['Unilateral', 'One country reduces its own barriers regardless of others', 'UK post-Brexit tariff schedules', 'Immediate consumer gains; signals openness', 'No reciprocal market access gained']
        ]
      }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinction',
        text: '<strong>Multilateral liberalisation</strong> (through WTO) is generally considered welfare-maximising because it is non-discriminatory — all members benefit. <strong>Regional/bilateral</strong> deals can discriminate against non-members and risk trade diversion.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Impact on Globalisation', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'WTO rounds reduced average global tariffs from ~40% (1947) to below 5% by 2000.' },
          { text: 'Regional blocs create large single markets, encouraging intra-bloc investment and specialisation.' },
          { text: 'The proliferation of bilateral FTAs (over 350 by 2020) has created a complex "spaghetti bowl" of trade rules.' },
          { text: 'Services trade rules under GATS opened financial, telecom, and professional services to global competition.' }
        ]
      }
    },
    {
      id: 'callout-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Tip',
        text: 'When evaluating the Doha Round failure, consider the conflict of interest: developed countries wanted services liberalisation while developing countries wanted agricultural subsidy cuts. The stalling of multilateral talks accelerated the shift to bilateral FTAs.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "When discussing trade blocs (EU, RCEP), explicitly explain trade creation (more efficient producer wins) vs trade diversion (less efficient bloc member replaces external competitor). Examiners test whether you grasp the welfare implications, not just definitions."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Memorise the definitions of both absolute and comparative advantage clearly. Comparative advantage must mention lower opportunity cost."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'WTO rounds (Uruguay, Doha) and regional blocs (EU, USMCA, ASEAN) have driven trade liberalisation; multilateral deals are welfare-maximising but slower, while bilateral deals risk trade diversion.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'What did the Uruguay Round achieve and when was it completed?',
        answer: 'Completed 1994 — created the WTO, reduced average tariffs below 5% in developed countries, and extended rules to services (GATS) and intellectual property (TRIPS).'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'Name three regional trading blocs and their member regions.',
        answer: 'EU (Europe), USMCA/NAFTA (North America), ASEAN (Southeast Asia).'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'Why might bilateral trade deals be inferior to multilateral deals?',
        answer: 'Bilateral deals can divert trade away from more efficient non-member producers, reducing global welfare, and create complex overlapping rules ("spaghetti bowl" effect).'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'By roughly how much did WTO/GATT rounds reduce average global tariffs between 1947 and 2000?',
        answer: 'From approximately 40% to below 5%.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_18_3;
