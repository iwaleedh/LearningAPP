export const note_economics_4_22_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Categorise and explain public spending types, analyse their composition in the UK economy, and assess the macroeconomic significance of each category.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Public Spending Categories', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Government expenditure encompasses all spending by central and local government and public bodies. In the UK, total public spending typically runs at 40-45% of GDP. Understanding the composition of public spending is essential for analysing fiscal policy, the multiplier effect, and the drivers of fiscal deficits. Spending falls into four broad categories: current expenditure, capital expenditure, transfer payments, and debt interest.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'UK Public Spending Categories',
        headers: ['Category', 'Definition', 'UK Share (approx)', 'Key Examples'],
        rows: [
          ['Current spending (resource)', 'Day-to-day spending on public service delivery — wages, materials, administration', '~70% of public spending', 'NHS staff salaries; teacher wages; police; defence operations; civil service'],
          ['Capital spending (investment)', 'Spending that creates future productive capacity — infrastructure, equipment', '~10-12% of public spending', 'Road and rail construction; hospital buildings; school building programme; broadband infrastructure'],
          ['Transfer payments', 'Payments from government to households and firms with no direct good/service exchange', '~40% of total spending (overlaps current)', 'State pension (largest UK transfer); Universal Credit; housing benefit; child benefit; unemployment benefit; disability benefits'],
          ['Debt interest', 'Interest payments on accumulated national debt (gilts)', '~5-8% of public spending (rising)', 'Annual coupon payments on UK gilts held by investors globally — over £100bn in 2023-24 due to higher rates and inflation-linked gilts']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'UK Spending by Function', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Social protection</strong> (~40% of total spending) — pensions, benefits, housing support; largest single category' },
          { text: '<strong>Health</strong> (~20%) — NHS spending; one of fastest-growing categories due to ageing population and rising medical costs' },
          { text: '<strong>Education</strong> (~12%) — schools, further and higher education' },
          { text: '<strong>Debt interest</strong> (~8% and rising) — increased sharply due to higher interest rates post-2022 and large pandemic borrowing' },
          { text: '<strong>Defence and police</strong> (~8%) — national security functions' },
          { text: '<strong>Infrastructure/transport</strong> (~5%) — roads, rail, HS2 (cancelled 2023)' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Transfer Payments vs Exhaustive Spending', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'A key distinction for multiplier analysis: <strong>exhaustive (direct) spending</strong> (buying goods/services) directly adds to aggregate demand and GDP. <strong>Transfer payments</strong> (benefits, pensions) do not directly count as government expenditure in GDP national income accounting — they are redistributions of purchasing power. Their impact on AD depends on the marginal propensity to consume of recipients — generally high for transfer recipients (low-income households), so transfers do have a significant multiplier effect.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Automatic Stabilisers',
        text: 'Transfer payments (benefits) act as automatic stabilisers — they rise automatically in recessions (as unemployment rises and tax revenues fall) and fall in booms. This means fiscal policy partially stabilises the economic cycle without deliberate policy changes, though this creates a cyclical component of the fiscal deficit.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Public spending comprises current (day-to-day delivery), capital (infrastructure), transfer payments (benefits/pensions — ~40%), and debt interest; social protection is the largest UK category at ~40% of total; transfers act as automatic stabilisers.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Distinguish between current spending, capital spending, and transfer payments in the public budget.',
        answer: 'Current spending: day-to-day service delivery costs (wages, materials) — ~70% of public spending. Capital spending: investment in future productive capacity (infrastructure, buildings) — ~10-12%. Transfer payments: redistributive payments to households with no good/service exchange (pensions, benefits) — ~40% of total (overlapping categories). Debt interest: coupon payments on national debt — ~5-8%.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Why do transfer payments not directly appear in the GDP calculation?',
        answer: 'In national income accounting, GDP measures production of goods and services. Transfer payments (benefits, pensions) are redistributions of purchasing power — no good or service is produced in exchange. They affect GDP indirectly by raising the consumption of recipients (through their MPC), but they do not directly add to G in the AD = C + I + G + (X-M) formula.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'Explain how transfer payments act as automatic stabilisers.',
        answer: 'In recessions, unemployment rises, automatically triggering higher benefit payments without any new policy decision. This cushions the fall in household incomes and supports consumption. In booms, unemployment falls, reducing benefit spending. This automatic counter-cyclical response dampens business cycle swings without policy lags.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_0;
