export const note_economics_4_20_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate expenditure-switching, expenditure-reducing, and supply-side policies for rebalancing a current account deficit.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Current Account Rebalancing Policies', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Persistent current account deficits may require policy intervention to rebalance the external position. Policies fall into three broad categories: <strong>expenditure-switching</strong> (redirecting spending from imports to domestic goods), <strong>expenditure-reducing</strong> (reducing total domestic demand), and <strong>supply-side policies</strong> (improving long-run competitiveness and export capacity). Each approach has different mechanisms, time horizons, and side effects.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Expenditure-Switching Policies', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Devaluation/depreciation</strong> of the currency makes imports more expensive in domestic currency terms and exports cheaper in foreign currency, switching spending towards domestic goods and boosting export revenues. For depreciation to improve the current account, the Marshall-Lerner condition must hold (sum of price elasticities of demand for exports and imports must exceed 1). Even if ML holds, there may be a short-run worsening (J-curve effect) before improvement. <strong>Tariffs and quotas</strong> are alternative expenditure-switching tools but invite retaliation and conflict with WTO rules.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Expenditure-Reducing Policies', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<strong>Contractionary fiscal policy</strong> (cutting government spending or raising taxes) and <strong>tight monetary policy</strong> (raising interest rates) reduce aggregate demand, which reduces import spending. However, these policies reduce real GDP and employment — causing a recession to cure a trade deficit is politically costly. They work best when the deficit reflects excess domestic demand rather than structural competitiveness problems.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Supply-Side Policies', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'Supply-side policies aim to improve the <strong>long-run price and non-price competitiveness</strong> of the economy. They include: investment in education and skills (raising labour productivity), R&D subsidies (improving product quality and innovation), infrastructure investment (reducing business costs), and industrial policy (supporting key export sectors). Supply-side approaches take time to work — typically years or decades — but address the root cause of structural deficits without the side effects of expenditure reduction.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Policies to Reduce a Current Account Deficit',
        headers: ['Policy', 'Mechanism', 'Advantages', 'Limitations'],
        rows: [
          ['Depreciation / devaluation', 'Makes exports cheaper, imports dearer in domestic currency', 'Works relatively quickly; improves competitiveness', 'Requires ML condition; J-curve delay; import-cost inflation; risk of retaliation'],
          ['Tariffs and quotas', 'Directly restrict import volumes or raise import costs', 'Certain reduction in import volumes', 'Invite retaliation; violate WTO rules; raise domestic prices; protect inefficiency'],
          ['Contractionary fiscal policy', 'Reduces domestic demand and import spending', 'Directly lowers import bill', 'Causes recession and unemployment; politically unpopular; may worsen debt position'],
          ['Tight monetary policy (higher rates)', 'Reduces consumption and import demand; attracts capital inflows boosting exchange rate', 'Can reduce both demand and inflation', 'Higher rates reduce investment; may worsen recession; exchange rate effect cuts both ways'],
          ['Supply-side policies', 'Improve productivity, quality, innovation — boost export competitiveness', 'Addresses root cause; improves living standards long-run', 'Very slow to work (10-20 years); expensive; uncertain outcomes']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Policy Trade-offs',
        text: 'The best answer will discuss the trade-off between effectiveness and side effects. Expenditure-reducing works quickly but causes unemployment. Supply-side avoids side effects but takes too long. Depreciation is the most commonly used tool but depends on elasticities. A combination of policies is usually optimal — short-run expenditure switching plus long-run supply-side.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Current account rebalancing uses expenditure-switching (depreciation, tariffs), expenditure-reducing (tight fiscal/monetary policy), or supply-side policies (productivity); each has different effectiveness and side effects.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'What condition must be satisfied for a depreciation to improve the current account?',
        answer: 'The Marshall-Lerner condition must hold: the sum of the price elasticities of demand for exports and imports must exceed 1. If combined PED > 1, revenue from exports rises and import spending falls enough to improve the current account.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'Why might expenditure-reducing policies be an unsatisfactory way to reduce a current account deficit?',
        answer: 'Contractionary fiscal or monetary policy reduces domestic demand and import spending, but also reduces real GDP, investment, and employment — causing a recession. They address the symptom (excess demand) rather than structural competitiveness problems.'
      },
      {
        id: 'cue-3',
        blockId: 'para-4',
        prompt: 'Why are supply-side policies the most effective long-run approach to current account rebalancing?',
        answer: 'Supply-side policies improve price and non-price competitiveness (productivity, quality, innovation) which addresses the structural root cause of deficits. However they take years or decades to work and are expensive with uncertain outcomes.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_2;
