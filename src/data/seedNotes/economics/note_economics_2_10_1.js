export const note_economics_2_10_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between income and wealth, explain the relationship between them, and understand why this distinction matters in economics.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Income vs Wealth', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'In everyday language, <strong>income</strong> and <strong>wealth</strong> are often used interchangeably, but in economics they refer to distinct concepts. Understanding this distinction is fundamental to discussing inequality, living standards, and economic policy.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Income', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Income</strong> is a <strong>flow</strong> variable — it is measured over a period of time (e.g. per week, month, or year). Income is the flow of money received by an individual or household from various sources:<br/>• <strong>Wages and salaries</strong> — from employment<br/>• <strong>Profit</strong> — from running a business<br/>• <strong>Rent</strong> — from ownership of land or property<br/>• <strong>Interest</strong> — from savings or financial assets<br/>• <strong>Transfer payments</strong> — from the government (e.g. benefits, pensions)' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Wealth', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Wealth</strong> is a <strong>stock</strong> variable — it is measured at a specific point in time. Wealth is the total value of all assets owned by an individual, household, or nation, minus their liabilities (debts). Assets that constitute wealth include:<br/>• <strong>Financial wealth:</strong> savings, shares, bonds, pension funds<br/>• <strong>Physical wealth:</strong> property, vehicles, art, jewellery<br/>• <strong>Human capital:</strong> (sometimes included) skills and education as an asset' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Income vs Wealth: Key Differences',
        headers: ['Feature', 'Income', 'Wealth'],
        rows: [
          ['Type of variable', 'Flow (measured over time)', 'Stock (measured at a point in time)'],
          ['Definition', 'Money received per period from all sources', 'Total value of assets minus liabilities'],
          ['Examples', 'Wages, profit, rent, interest, benefits', 'Property, shares, savings, pension funds'],
          ['Measurement', 'Annual income (e.g. £35,000/year)', 'Net worth (e.g. £200,000)'],
          ['Inequality measure', 'Gini coefficient of income distribution', 'Gini coefficient of wealth distribution'],
          ['Policy tool', 'Income tax, benefits, tax credits', 'Inheritance tax, wealth taxes, capital gains tax']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'The Relationship Between Income and Wealth', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: 'Income and wealth are closely related but not identical. <strong>Income can accumulate into wealth</strong> over time through saving and investment — high earners who save a large fraction of income will build up substantial wealth. Conversely, <strong>wealth generates income</strong>: owning property produces rental income; holding shares produces dividend income; savings generate interest. This creates a virtuous (or vicious) cycle where high wealth generates high income, which in turn generates more wealth.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Important Distinction for Inequality Analysis',
        text: 'Wealth is typically <strong>more unequally distributed</strong> than income. In the UK, the wealthiest 10% of households own around 44% of all wealth, while income inequality, though significant, is less extreme. This is partly because wealth accumulates across generations via inheritance.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always clarify whether a question is about income or wealth inequality — they are distinct. An economy can have rising incomes but increasing wealth inequality if investment returns outpace wage growth (Piketty\'s r > g argument).'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Examiners test understanding of the stock vs. flow distinction: wealth is a stock (total accumulated assets at a point in time), while income is a flow (earnings over a time period). When analysing household behaviour, clarify whether the question concerns wealth effects (consumption from asset changes) or income effects (consumption from earnings changes)."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Income is a flow (money received per period from wages, profit, rent, interest); wealth is a stock (value of all assets minus liabilities at a point in time); income accumulates into wealth, and wealth generates income.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'Give four sources of income.', answer: 'Wages/salaries, profit from business, rent from property, and interest from savings.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'What is wealth, and how does it differ from income in terms of flow vs stock?', answer: 'Wealth is a stock variable — the total value of all assets minus liabilities at a point in time. Income is a flow received over a time period.' },
      { id: 'cue-3', blockId: 'para-4', prompt: 'How is income related to wealth?', answer: 'Income accumulates into wealth through saving and investment; wealth generates income through rent, dividends, and interest.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'Is income or wealth typically more unequally distributed?', answer: 'Wealth is typically more unequally distributed than income, partly due to intergenerational inheritance.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_10_1;
