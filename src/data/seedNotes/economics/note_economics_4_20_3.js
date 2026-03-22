export const note_economics_4_20_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Assess the significance of global trade imbalances, including the savings glut hypothesis, and evaluate international policy coordination responses.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Global Trade Imbalances', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'A key feature of the global economy since the 1990s has been large and persistent current account imbalances between major economies. The United States runs a persistent large deficit (typically 3-5% of GDP), while China, Germany, and Japan run large surpluses. By accounting identity, global surpluses must equal global deficits, so surplus countries are effectively financing deficit countries.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Savings Glut Hypothesis', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Ben Bernanke (former Fed Chairman) argued that Asian countries, traumatised by the 1997-98 financial crisis, accumulated large foreign exchange reserves as a precautionary buffer — resulting in a global <strong>savings glut</strong>. This excess saving in Asia had to flow somewhere, and it flowed into US financial assets (especially Treasury bonds), keeping US interest rates low, fuelling a credit and housing boom that contributed to the 2008 financial crisis. Under this view, global imbalances were a key underlying cause of the GFC.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Risks of Persistent Imbalances', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Financial instability</strong> — capital flowing from surplus to deficit countries creates asset price bubbles in deficit countries and compressed yields globally' },
          { text: '<strong>Exchange rate misalignment</strong> — China\'s management of the RMB kept it undervalued, distorting trade flows' },
          { text: '<strong>Protectionist backlash</strong> — large US deficit fuels political demands for tariffs against surplus countries, risking trade wars' },
          { text: '<strong>Disorderly adjustment</strong> — sudden loss of confidence in deficit financing could trigger a sharp dollar depreciation and global financial disruption' },
          { text: '<strong>Deflationary pressure</strong> — surplus countries suppress domestic demand, reducing global aggregate demand and keeping downward pressure on global prices' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'G20 Policy Coordination', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'The G20 (formed 1999, elevated to leader level in 2008) has attempted to coordinate international economic policy to reduce imbalances. The <strong>Mutual Assessment Process</strong> (MAP) agreed at Pittsburgh 2009 involves countries submitting economic plans that are assessed collectively for global consistency. However, voluntary coordination has had limited success — surplus countries (Germany, China) resist pressure to boost domestic consumption, arguing their surpluses reflect structural factors and virtuous competitiveness.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Germany\'s Surplus Problem',
        text: 'Germany\'s current account surplus reached 8.5% of GDP in 2015 — exceeding the EU\'s maximum 6% target under the Macroeconomic Imbalance Procedure. The IMF and US Treasury repeatedly urged Germany to boost domestic investment and consumption. Germany argued its surplus reflected competitiveness, not currency manipulation. The surplus narrowed post-COVID but remains large.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Global Imbalances: Causes and Policy Responses',
        headers: ['Imbalance', 'Root Cause', 'Policy Response', 'Obstacle'],
        rows: [
          ['US current account deficit', 'Low savings, high consumption, deindustrialisation, dollar as reserve currency', 'Reduce fiscal deficit; boost exports through supply-side reform', 'Political difficulty of reducing consumption; dollar\'s reserve status requires US to run deficits'],
          ['China surplus', 'Export-led growth model, managed RMB, high household savings', 'Rebalance toward domestic consumption; allow RMB appreciation', 'Structural shift takes time; Communist Party cautious about financial liberalisation'],
          ['Germany surplus', 'Export manufacturing strength, low domestic demand, wage restraint', 'Increase public investment; raise minimum wages; boost consumption', 'Cultural preference for fiscal prudence; "black zero" balanced budget ideology'],
          ['Global savings glut', 'Asian precautionary reserve accumulation post-1997', 'IMF provides better safety nets so countries need fewer reserves', 'IMF reform slow; stigma attached to IMF borrowing remains']
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't attribute all global imbalances to 'unfair trade.' Discuss structural factors: demographic ageing (Germany saves more), capital market development (US attracts investment), and reserve currency status (dollar strength). Sophisticated answers go beyond mercantilist rhetoric."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Other strategies like Fairtrade schemes, microfinance, and joint ventures can be excellent evaluation points. Discuss their localized success versus scalability across a whole economy."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Persistent global imbalances — US deficit vs China/Germany/Japan surpluses — create financial instability and protectionist risks; the savings glut hypothesis links Asian surpluses to low US rates and the 2008 crisis; G20 coordination has had limited success.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Explain Bernanke\'s savings glut hypothesis and its link to the 2008 financial crisis.',
        answer: 'Asian economies accumulated large savings and foreign reserves after 1997, creating a global savings glut. This excess saving flowed into US financial assets, keeping interest rates low and fuelling a credit and housing boom in the US that ultimately triggered the 2008 financial crisis.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'Give three risks associated with persistent global trade imbalances.',
        answer: 'Financial instability from capital flows creating asset bubbles in deficit countries; protectionist backlash as deficit country politicians demand tariffs; disorderly adjustment if confidence in deficit financing suddenly collapses, triggering sharp currency depreciation.'
      },
      {
        id: 'cue-3',
        blockId: 'para-3',
        prompt: 'Why has G20 policy coordination to reduce global imbalances had limited success?',
        answer: 'Coordination is voluntary with no enforcement mechanism. Surplus countries (Germany, China) resist pressure to boost domestic demand, arguing their surpluses reflect structural competitiveness and virtue rather than harmful imbalances.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_3;
