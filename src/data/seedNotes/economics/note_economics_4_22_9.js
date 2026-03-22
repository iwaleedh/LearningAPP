export const note_economics_4_22_9 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse national debt dynamics, assess sustainability criteria, and evaluate the risks of high national debt including crowding out, intergenerational fairness, and market confidence.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'National Debt Dynamics', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>national debt</strong> is the accumulated stock of all past government borrowing less repayments. In the UK, it is measured as Public Sector Net Debt (PSND). The debt-to-GDP ratio is the standard measure of sustainability — it indicates whether the debt burden is growing or shrinking relative to the economy\'s capacity to service it. UK national debt rose from ~38% of GDP in 2007 to approximately 100% of GDP by 2023.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Sustainability: The r vs g Condition for Debt', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'A key insight from debt dynamics: the debt/GDP ratio is sustainable in the long run only if the nominal interest rate paid on debt (r) is not persistently higher than the nominal GDP growth rate (g). When <strong>r > g</strong>, debt/GDP rises even if the primary balance (budget balance before interest payments) is zero — the interest burden compounds faster than the economy grows. This is the debt analogue of Piketty\'s wealth inequality theorem. From 2009-2021, historically low interest rates made debt sustainable despite high levels; rising rates post-2022 have increased debt servicing costs significantly.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Risks of High National Debt', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Crowding out</strong> — high government borrowing may push up interest rates, reducing private sector investment and long-run growth potential' },
          { text: '<strong>Higher future taxes</strong> — debt must eventually be serviced and repaid; this represents a burden on future taxpayers and reduces fiscal space' },
          { text: '<strong>Debt interest burden</strong> — with UK debt ~100% of GDP and interest rates at 5%+, annual interest payments exceed £100bn — more than the education budget; crowding out other spending' },
          { text: '<strong>Loss of market confidence</strong> — if investors doubt a government\'s ability to service its debt, they demand higher risk premiums on bonds, creating a self-fulfilling crisis (e.g. Italy 2011, UK Truss mini-budget September 2022)' },
          { text: '<strong>Reduced fiscal space</strong> — high debt constrains the government\'s ability to deploy fiscal stimulus in future recessions ("fiscal ammunition" depleted)' },
          { text: '<strong>Intergenerational unfairness</strong> — current generation benefits from spending while future taxpayers bear the debt burden' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Counter-Arguments: Is High Debt Always a Problem?', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Japan</strong> has national debt over 250% of GDP but has not faced a debt crisis — it has very low interest rates, high domestic savings, and its debt is largely held by Japanese institutions' },
          { text: '<strong>Investment vs current spending</strong> — debt used to finance productive public investment may increase future GDP growth, making debt self-financing' },
          { text: '<strong>Ricardian equivalence</strong> (Barro) — if households anticipate future taxes to repay debt, they save more now, offsetting the demand effect of deficits (though empirical support is weak)' },
          { text: '<strong>Modern Monetary Theory (MMT)</strong> — countries that borrow in their own currency (UK, US) can never be forced to default; inflation, not debt, is the binding constraint (controversial and contested)' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Case Study: Truss Mini-Budget September 2022',
        text: 'Chancellor Kwarteng announced £45bn of unfunded tax cuts in September 2022. Bond markets reacted immediately — 10-year gilt yields spiked from 3.5% to over 4.5% in days. The pound fell to near-parity with the dollar. UK pension funds faced margin calls, threatening a financial crisis. The Bank of England intervened, buying gilts. Truss and Kwarteng were removed from office within 6 weeks. Lesson: market confidence in fiscal sustainability is fragile — and can be lost rapidly.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Assess sustainability: debt/GDP ratio stabilizes if deficit (% of GDP) equals growth rate \u00d7 existing debt/GDP ratio. Examiners reward numerical examples. If UK debt/GDP is 100% and growth is 2%, structural deficit must be \u22642% to stabilize debt. Risks of high debt: crowding out (public borrowing raises interest rates, private investment falls); intergenerational fairness (future taxpayers repay); market confidence loss (if debt spirals, rates spike, default risk rises). Use Italy example: 130% debt/GDP limits policy space."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume high debt is always unsustainable. This is too simple. Japan has 260% debt/GDP but low rates (domestic savers, low default risk); Greece had 170% and crisis occurred (foreign borrowers, lost confidence). Debt sustainability depends on growth, interest rates, currency control, and confidence. Also, don't confuse nominal and real debt accumulation. Examiners expect: 'High debt constrains policy but isn't automatically catastrophic; sustainability depends on growth and investor confidence.'"
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'National debt/GDP is sustainable when g > r; risks of high debt include crowding out, higher future taxes, debt interest burden, loss of market confidence (Truss mini-budget 2022), and reduced fiscal space; Japan shows very high debt need not trigger crisis under specific conditions.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Explain the r vs g condition for national debt sustainability.',
        answer: 'If the interest rate on debt (r) persistently exceeds the GDP growth rate (g), the debt/GDP ratio rises automatically even with a balanced primary budget — interest compounds faster than the economy grows. Debt is sustainable when g > r. Post-2022 UK faces this challenge as interest rates rose above growth rates.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'What happened following the Truss mini-budget in September 2022 and what lesson does it provide?',
        answer: 'Kwarteng announced £45bn of unfunded tax cuts. Gilt yields spiked from 3.5% to 4.5%+ in days; sterling fell near dollar parity; pension funds faced margin calls requiring BoE emergency intervention. Truss and Kwarteng removed from office within 6 weeks. Lesson: market confidence in fiscal sustainability is fragile and can be lost rapidly — large unfunded fiscal packages can trigger sudden loss of credibility.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'Give three risks associated with a very high national debt ratio.',
        answer: 'Crowding out (high borrowing raises interest rates, reducing private investment); debt interest burden (UK paying >£100bn/year in interest — crowding out other spending); loss of market confidence (investors demand higher yields, creating self-fulfilling crisis as in Italy 2011 or UK 2022).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_9;
