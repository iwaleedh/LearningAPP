export const note_economics_4_22_10 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate the appropriate mix of fiscal, monetary, and supply-side policies for achieving macroeconomic objectives under different economic conditions.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Demand and Supply Policy Mix', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'No single policy instrument can simultaneously achieve all macroeconomic objectives. A complete macroeconomic strategy combines <strong>fiscal policy</strong> (government spending and taxation), <strong>monetary policy</strong> (interest rates and money supply, typically delegated to independent central banks), and <strong>supply-side policy</strong> (improving productive capacity). The appropriate mix depends on the economic conditions — recession vs boom, closed vs open economy, high vs low debt.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Policy Combinations: Conditions, Goals and Examples',
        headers: ['Policy Combination', 'Conditions', 'Expected Effect', 'Historical Example'],
        rows: [
          ['Expansionary fiscal + loose monetary', 'Severe recession; deflation risk; interest rates near zero', 'Maximises AD stimulus; fiscal multiplier + low borrowing cost', 'UK/US/Eurozone 2009: coordinated G20 fiscal stimulus + emergency rate cuts'],
          ['Tight fiscal (austerity) + loose monetary', 'Post-crisis consolidation; high debt; need to maintain demand', 'Fiscal consolidation reduces deficit without deep recession; QE offsets fiscal drag', 'UK 2010-15: Coalition austerity + BoE QE and low rates; ECB QE + Eurozone austerity'],
          ['Expansionary fiscal + tight monetary', 'Boom; need to control inflation while boosting specific sectors', 'Higher interest rates crowd out some private spending; net effect uncertain', 'US 1981 Reagan tax cuts + Fed Volcker tight money; risk of high interest rates offsetting fiscal stimulus'],
          ['Tight fiscal + tight monetary', 'High inflation + high debt; need credibility', 'Both AD channels contractionary; sharp recession risk; used as last resort', 'UK 1979-81: Thatcher spending cuts + high interest rates; deep recession but inflation squeezed out'],
          ['Supply-side + neutral demand', 'Productivity problem; long-run competitiveness', 'Shifts LRAS right; raises sustainable growth rate', 'UK reforms 1980s-90s (privatisation, deregulation); Hartz reforms Germany 2003-05']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Policy Conflicts and Complementarities', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Complementarity</strong>: Supply-side reform + expansionary demand = maximises both short-run output and long-run potential. The "virtuous circle" of increasing both SRAS and AD simultaneously' },
          { text: '<strong>Conflict</strong>: Fiscal stimulus + tight monetary = interest rates rise to offset inflation risk; high rates crowd out private investment; mixed net effect on output' },
          { text: '<strong>Timing mismatch</strong>: Fiscal policy works with 6-18 month lag; monetary policy 12-24 months; supply-side 5-20 years. In short crises, only monetary policy can respond quickly' },
          { text: '<strong>Credibility issue</strong>: If markets believe fiscal expansion will be accommodated by inflation, bond yields rise immediately, partly offsetting the intended stimulus' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Always Discuss the Mix',
        text: 'A strong exam answer evaluates which policy combination is most appropriate given the specific economic context in the question. Key factors: (1) current output gap (positive or negative); (2) inflation rate; (3) level of national debt; (4) monetary policy space (how far from zero lower bound?); (5) exchange rate and trade position. Reference real examples to support your analysis.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Show toolkit thinking: different conditions require different mixes. In a demand-shock recession (2008), fiscal stimulus works; in supply-side crisis (stagflation 1970s), supply-side reform is needed. Monetary policy is powerful for managing inflation but weak at stimulating demand in liquidity trap (near-zero rates). Examiners reward dynamic reasoning: 'Given current inflation and unemployment, a mix of some demand management plus medium-term supply investment is optimal.' Use examples."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students favour one policy tool (e.g. 'always use monetary policy' or 'fiscal is best') regardless of context. This is incorrect. Also, conflating policy aims: fiscal policy can pursue equity (redistribution) or efficiency (supply-side investment), but not both simultaneously if budgets are tight. Don't say 'do everything'; explain constraints and trade-offs. Edexcel values context-awareness and sequencing (short-run demand, long-run supply)."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Analyze the moral hazard created when a central bank acts as a 'lender of last resort'; if banks believe they are 'too big to fail', they may take reckless risks."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Effective macroeconomic management combines fiscal, monetary, and supply-side policy; expansionary fiscal + loose monetary maximises demand stimulus (2009); tight fiscal + loose monetary consolidates without recession (2010-15 UK); supply-side raises long-run capacity; the optimal mix depends on the economic context.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Why did the UK combine fiscal austerity with loose monetary policy (QE) in 2010-15?',
        answer: 'Austerity aimed to reduce the large structural deficit and restore market confidence in UK fiscal sustainability. However, fiscal contraction risked reducing AD and causing recession. Quantitative Easing and low interest rates were maintained to offset the demand-reducing effects of fiscal consolidation — supporting lending, asset prices, and consumer spending. The combination aimed to consolidate without a deep recession.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'Explain a potential conflict between fiscal and monetary policy.',
        answer: 'Expansionary fiscal policy (higher spending/lower taxes) boosts AD but may trigger inflationary pressure. If the central bank then raises interest rates to control inflation (tight monetary policy), higher rates crowd out private investment, partially or fully offsetting the fiscal stimulus. The net effect is uncertain and depends on the relative magnitudes of the fiscal multiplier and the crowding-out effect.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_10;
