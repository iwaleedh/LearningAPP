export const note_economics_4_21_7 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate the effects of inequality on economic incentives, social mobility, health outcomes, political stability, and long-run growth.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Effects of Inequality on Incentives and Outcomes', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The relationship between inequality and economic performance is complex and contested. Some economists argue inequality provides incentives that drive growth; others argue high inequality undermines growth sustainability, social cohesion, and human capital accumulation. IMF and OECD research has increasingly found that high inequality reduces long-run growth rates and the sustainability of growth spells.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Arguments That Inequality Benefits the Economy (Positive View)', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Incentive to work and innovate</strong> — income differentials reward effort, skill acquisition, and risk-taking; perfectly equal societies remove the reward for contributing more' },
          { text: '<strong>Kuznets curve hypothesis</strong> — inequality may be a necessary stage of development (rises in early industrialisation, then falls as economies mature and redistribute)' },
          { text: '<strong>High savings by the rich</strong> — wealthy households save more; higher savings fund investment and capital accumulation, potentially raising growth' },
          { text: '<strong>Efficient resource allocation</strong> — price signals (including wage differentials) allocate labour to its highest-value uses' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Arguments That Inequality Harms the Economy (Negative View)', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Reduces social mobility</strong> — "Great Gatsby Curve" (Miles Corak): more unequal societies have less intergenerational mobility; children\'s outcomes more dependent on parents\' income' },
          { text: '<strong>Reduces aggregate demand</strong> — poor households have higher MPC; redistributing from rich to poor increases total consumption; high inequality associated with demand deficiency' },
          { text: '<strong>Worsens public health</strong> — Wilkinson and Pickett (The Spirit Level): more unequal societies have worse health, mental illness, crime, and social trust at all income levels' },
          { text: '<strong>Undermines political stability and democracy</strong> — extreme inequality leads to political capture by elites; undermines trust in institutions; fuels populist movements' },
          { text: '<strong>IMF research (Ostry, Berg, Tsangarides, 2014)</strong> — high inequality reduces the duration of growth spells; redistribution itself does not harm growth when inequality is high' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Inequality Effects: Positive vs Negative',
        headers: ['Argument', 'Pro-inequality position', 'Anti-inequality position'],
        rows: [
          ['Incentives', 'Income differentials reward effort and innovation', 'At extremes, inequality destroys social mobility — the poor cannot invest in education regardless of effort'],
          ['Aggregate demand', 'High savings by rich fund investment', 'Poor have higher MPC; redistribution raises total consumption and AD'],
          ['Human capital', 'Competition drives skill acquisition', 'Poor children cannot access quality education; human capital potential wasted; intergenerational poverty trap'],
          ['Social cohesion', 'Meritocratic competition is fair', 'High inequality reduces trust, social capital, increases crime; damages institutions'],
          ['Growth', 'Incentives and savings drive long-run growth', 'IMF: high inequality shortens growth spells; excessive inequality destabilises economies']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'IMF Consensus',
        text: 'The IMF\'s 2014 paper (Ostry, Berg, Tsangarides) concluded: (1) higher inequality is associated with lower and less durable growth; (2) redistribution per se does not harm growth, except in extreme cases; (3) the net effect of redistribution on growth is broadly neutral or positive for typical levels of redistribution. This represents a shift from the 1980s consensus that redistribution was always growth-reducing.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Link inequality to multiple channels: incentive effects (harder to climb ladder, less entrepreneurship), health and crime (Wilkinson & Pickett evidence), political instability (undermines contracts, investment). Examiners reward you for showing this isn't just redistribution ethics \u2014 inequality is economically damaging. Reference recent papers showing negative growth effects. Use country evidence: more unequal nations show slower long-run growth."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume inequality always harms growth (Kuznets inverted-U is debunked). Say instead: 'extreme inequality harms growth but moderate inequality may provide work incentives.' Also, don't confuse correlation with causation \u2014 does inequality cause low growth, or does poverty cause both? Edexcel expects you to acknowledge competing channels. Some inequality provides incentives; too much creates instability."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Evaluate the real burden of national debt: who holds the debt (domestic vs foreign investors) and what the borrowed money was used for (capital investment vs current spending) are critical distinctions."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Inequality may incentivise effort (Kuznets) but high inequality reduces social mobility (Great Gatsby Curve), aggregate demand (high MPC of poor), public health (Spirit Level), political stability, and growth duration (IMF); redistribution does not harm growth when inequality is high.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-1',
        prompt: 'What is the Kuznets curve hypothesis about inequality and development?',
        answer: 'The Kuznets curve suggests inequality follows an inverted-U pattern: rising in early industrialisation as workers move from low-productivity agriculture to higher-wage manufacturing (unevenly), then falling as economies mature, redistribute, and more workers enter high-wage sectors. The hypothesis implies inequality may be a temporary necessary stage of development.'
      },
      {
        id: 'cue-2',
        blockId: 'list-2',
        prompt: 'What is the "Great Gatsby Curve" and what does it show?',
        answer: 'The Great Gatsby Curve (Miles Corak) shows a positive correlation between income inequality (Gini) and intergenerational income immobility. More unequal societies have less social mobility — children\'s outcomes are more strongly determined by their parents\' income, reducing the equality of opportunity.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'What did the 2014 IMF research conclude about inequality and growth?',
        answer: 'IMF (Ostry, Berg, Tsangarides 2014): higher inequality reduces the duration of growth spells; redistribution does not harm growth except in extreme cases; the net effect of redistribution on growth is broadly neutral or positive at typical levels. This challenged the 1980s supply-side view that redistribution always reduces growth.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_21_7;
