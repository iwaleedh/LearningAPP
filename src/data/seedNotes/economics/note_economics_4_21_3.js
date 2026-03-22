export const note_economics_4_21_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between income and wealth inequality, explain why wealth is typically more unequally distributed than income, and analyse the relationship between returns to capital and wealth concentration.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Income vs Wealth Inequality', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Definitions', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Income vs Wealth: Key Distinctions',
        headers: ['Feature', 'Income', 'Wealth'],
        rows: [
          ['Definition', 'A flow: money received per time period (wages, dividends, rents, benefits, interest)', 'A stock: accumulated assets held at a point in time (property, shares, savings, pensions, businesses)'],
          ['Typical components', 'Employment income (80% for most households); investment income; transfers', 'Property (50%+ of UK household wealth); financial assets (stocks, bonds); pension rights; physical assets'],
          ['How measured', 'Income surveys (HBAI in UK); national accounts', 'Wealth surveys (Wealth and Assets Survey, UK); estate records; Forbes lists'],
          ['Gini coefficient (UK, approx)', '~0.34-0.36 for disposable income', '~0.60-0.65 for net household wealth — far more unequal'],
          ['Tax treatment', 'Income tax; National Insurance; capital gains tax (on returns)', 'Council tax; inheritance tax; stamp duty — relatively lightly taxed'],
          ['Relationship', 'Income can accumulate into wealth; wealth generates income (returns to capital)', 'Wealth inequality compounds over time as returns accumulate to existing wealth holders']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Why Wealth Is More Unequal than Income', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Cumulative advantage</strong> — wealth generates returns (dividends, rents, capital gains) that compound over time; those with more wealth accumulate proportionally more wealth each year' },
          { text: '<strong>Inheritance and gifts</strong> — wealth is passed across generations; inherited wealth is far more concentrated than earned income' },
          { text: '<strong>Housing appreciation</strong> — property price rises over decades have delivered large capital gains to homeowners while renters build no wealth' },
          { text: '<strong>Asset price inflation</strong> — QE and low interest rates (post-2008) inflated equity and property prices, disproportionately benefiting wealth holders' },
          { text: '<strong>Limited redistribution of wealth</strong> — inheritance tax coverage is narrow; wealth taxes are rare; income taxes can only redistribute income flows, not stocks of wealth' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Piketty: r > g and Wealth Concentration', level: 3 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'In <em>Capital in the Twenty-First Century</em> (2014), Thomas Piketty argued that the fundamental driver of rising wealth inequality is the relationship between the rate of return on capital (<strong>r</strong>) and the economic growth rate (<strong>g</strong>). When r > g — when capital earns more than the economy grows — wealth tends to concentrate because returns to existing wealth outpace new income generation. Piketty found r has historically averaged ~4-5% while g has averaged ~1-2%, so r > g is the historical norm, tending toward rising wealth concentration.'
      }
    },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: 'r > g \\Rightarrow \\text{Wealth concentration increases over time}',
        caption: 'Piketty\'s fundamental inequality: when returns to capital exceed growth, wealth inequality rises'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'UK Wealth Inequality Facts',
        text: 'The top 10% of UK households hold approximately 45% of total wealth. The top 1% hold approximately 20%. The bottom 50% hold less than 10%. Median household wealth is around £300,000 (mostly property and pensions) but highly skewed — average is much higher than median due to extreme wealth at the top.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Distinguish clearly: income inequality (Gini ~0.34 in UK) vs wealth inequality (Gini ~0.62). Always note that wealth is MORE unequally distributed. Piketty\'s r > g is a powerful evaluative point — it suggests wealth inequality is self-reinforcing under capitalism unless addressed by wealth taxes or stronger redistribution.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Examiners test whether you understand the distinction matters. Explain that wealth is more concentrated (fewer wealthy individuals) while income is relatively dispersed. Use the concept of returns to capital: wealth-owners earn capital gains, while wage-earners depend on hourly rates. This underpins inequality trends. Always link to piketty's r > g inequality driver."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students confuse income and wealth inequality, treating them as synonymous. They are not \u2014 a wealthy person with low income exists (retirees with assets), as does a high-income person with low wealth (new professional). Also, students forget that wealth includes property, stocks, and savings, not just income flows. Don't say 'they measure the same thing.'"
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Clearly differentiate direct taxes (levied on income/wealth) from indirect taxes (levied on expenditure). Understand how they affect incentive to work versus inequality."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Income is a flow (wages, dividends) while wealth is a stock (property, shares); wealth is far more unequally distributed (UK Gini ~0.62 vs ~0.35 for income) due to cumulative returns, inheritance, and housing appreciation; Piketty\'s r > g shows returns to capital outpacing growth tends to concentrate wealth.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Define income and wealth and state approximate UK Gini coefficients for each.',
        answer: 'Income is a flow of money received per period (wages, dividends, benefits). Wealth is a stock of assets (property, financial assets, pensions). UK income Gini ~0.34-0.36; wealth Gini ~0.60-0.65 — wealth is significantly more unequally distributed.'
      },
      {
        id: 'cue-2',
        blockId: 'para-1',
        prompt: 'State Piketty\'s fundamental inequality and explain its implications for wealth distribution.',
        answer: 'Piketty argued r > g — when the rate of return on capital (historically ~4-5%) exceeds the economic growth rate (~1-2%), wealth tends to concentrate because existing wealth grows faster than new income is created. This makes rising wealth inequality the historical norm under capitalism without redistribution.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'Give three reasons why wealth is more unequally distributed than income.',
        answer: 'Cumulative returns compound — those with more wealth accumulate proportionally more each year; inheritance transfers concentrated wealth across generations; housing appreciation creates large capital gains for owners while renters build no wealth. QE post-2008 also inflated asset prices benefiting wealth-holders disproportionately.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_21_3;
