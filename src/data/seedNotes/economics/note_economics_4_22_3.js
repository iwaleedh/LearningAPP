export const note_economics_4_22_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between direct and indirect taxes, evaluate their advantages and disadvantages, and analyse their macroeconomic effects.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Direct vs Indirect Taxes', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Government revenue from taxation finances public expenditure and provides the means for redistribution. Taxes are classified as <strong>direct</strong> (levied directly on income or wealth) or <strong>indirect</strong> (levied on expenditure on goods and services). Each type has distinct economic effects on incentives, equity, and macroeconomic stability.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Direct vs Indirect Taxes',
        headers: ['Feature', 'Direct Taxes', 'Indirect Taxes'],
        rows: [
          ['Definition', 'Levied directly on income or wealth of the payer', 'Levied on spending on goods and services; passed on by sellers to buyers'],
          ['UK examples', 'Income tax; corporation tax; capital gains tax; inheritance tax; National Insurance', 'VAT (20% standard rate); fuel duty; tobacco duty; alcohol duty; air passenger duty; council tax (semi-direct)'],
          ['Who bears the burden', 'The taxpayer directly — cannot shift burden to others', 'Shared between producer and consumer depending on PED/PES'],
          ['Revenue share (UK)', '~55-60% of total tax revenue', '~40-45% of total tax revenue'],
          ['Equity', 'Can be made progressive (income tax rates rise with income)', 'Tend to be regressive (VAT takes higher share of poor households\' income)'],
          ['Certainty', 'Government can predict yield reliably from income data', 'More volatile — depends on consumer spending patterns'],
          ['Effect on incentives', 'High income tax may reduce work incentive; high CT may reduce investment', 'High excise duties may affect specific consumption choices; VAT reduces purchasing power'],
          ['Avoidance', 'Subject to avoidance via offshore structures; self-employment income easy to under-report', 'Harder to avoid on mass consumer goods; but can be evaded in cash transactions']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key UK Direct Taxes', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Income tax</strong> — progressive; basic rate 20% (up to ~£50,270), higher rate 40%, additional rate 45%; largest single revenue source (~25% of total tax revenue)' },
          { text: '<strong>National Insurance Contributions</strong> — paid by employees and employers; funds benefits and NHS; effectively a flat payroll tax; second largest revenue source' },
          { text: '<strong>Corporation Tax</strong> — tax on company profits; UK rate raised from 19% to 25% for large companies in April 2023; raises ~10% of tax revenue' },
          { text: '<strong>Capital Gains Tax</strong> — on profits from selling assets; lower rates than income tax (typically 10-28% depending on asset type); raises relatively little revenue' },
          { text: '<strong>Inheritance Tax</strong> — 40% on estates above £325,000 threshold; narrow base (only ~4% of estates); raises ~£7bn p.a.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Key UK Indirect Taxes', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Value Added Tax (VAT)</strong> — 20% standard rate; second-largest UK revenue source (~18% of total); reduced rate 5% on some goods; zero rate on food, children\'s clothing, books' },
          { text: '<strong>Fuel duty</strong> — specific duty per litre; raises ~£25bn p.a.; frozen 2011-2022 as cost-of-living measure' },
          { text: '<strong>Tobacco and alcohol duties</strong> — high rates justify by negative externalities (Pigouvian taxes); also raise significant revenue' },
          { text: '<strong>Air Passenger Duty</strong> — per-flight levy; justified partly as environmental correction; raises ~£4bn p.a.' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Equity vs Efficiency',
        text: 'Direct taxes can be made progressive (equity objective) but may reduce work and investment incentives (efficiency cost). Indirect taxes are more efficient (less distortionary for labour supply decisions) but tend to be regressive (equity concern). The optimal tax mix balances both objectives — most countries use both, with direct taxes dominant for redistribution and indirect taxes for revenue efficiency.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Use supply-and-demand logic. Direct taxes (on income) reduce disposable income, shifting consumption demand leftward; indirect taxes (VAT, excise) raise prices, reducing quantity demanded. Macroeconomic effects vary: direct taxes hit savings and investment more (supply-side harm); indirect taxes are more neutral if substitution is low. Examiners reward quantified examples: 'UK VAT is 20%; 1pp increase reduces consumption by ~0.5% in short run.' Show the policy trade-off: equity vs efficiency."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume direct taxes are always 'better for poor' and indirect taxes 'regressive' but don't quantify incidence. In fact, VAT can be equitable if combined with targeted rebates; income tax can be unfair if loopholes favor the wealthy. Also, don't ignore that indirect taxes (fuel duty, alcohol tax) discourage negative externalities \u2014 efficiency gains matter. Edexcel expects: 'Direct taxes are more progressive, but indirect taxes have efficiency uses; policy must combine both.'"
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Explain how speculative bubbles (like the housing market pre-2008) are a form of financial market failure, driven by herd behavior and excessive risk-taking."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Direct taxes (income tax, corporation tax) are levied on income/wealth and can be progressive; indirect taxes (VAT, excise duties) are levied on spending and tend to be regressive; direct taxes provide ~55-60% of UK revenue; optimal tax policy balances equity (direct) and efficiency (indirect).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Explain the equity difference between direct and indirect taxes.',
        answer: 'Direct taxes can be made progressive — income tax rates rise with income, so the better-off pay a higher proportion of their income. Indirect taxes like VAT tend to be regressive — lower-income households spend a higher proportion of their income on goods, so VAT takes a larger share of poor households\' income than rich households\'.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'Name the two largest sources of UK government tax revenue.',
        answer: 'Income tax (approximately 25% of total tax revenue — the largest single source) and National Insurance Contributions (second largest). Together they account for ~50% of all UK tax revenue. VAT is the third largest.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_3;
