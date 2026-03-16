export const note_economics_4_22_7 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define and measure fiscal deficit and surplus, explain their relationship to the national debt, and analyse the role of the fiscal balance in macroeconomic policy.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Fiscal Deficit, Surplus and Balance', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>fiscal balance</strong> (government budget balance) is the difference between government revenues (primarily tax receipts) and total public expenditure in a given year. It determines whether the government is net borrowing from or lending to the rest of the economy.'
      }
    },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: '\\text{Fiscal Balance} = T - G',
        caption: 'T = total government revenues; G = total government expenditure (including transfers)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Deficit, Surplus and Balanced Budget', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Fiscal Balance',
        headers: ['Balance', 'Condition', 'Implication', 'UK Context'],
        rows: [
          ['Fiscal deficit', 'G > T (spending exceeds revenue)', 'Government must borrow — issues gilts to financial markets; national debt rises', 'UK ran deficits continuously 2002-2018 and again during COVID-19; deficit peaked at ~12% GDP in 2009-10'],
          ['Fiscal surplus', 'T > G (revenue exceeds spending)', 'Government is net lender — can repay debt or build reserves; national debt falls (or grows more slowly)', 'UK ran a small surplus briefly in 1999-2001 under Gordon Brown (Labour); rare in modern UK history'],
          ['Balanced budget', 'T = G (revenue equals spending)', 'No net borrowing or repayment; national debt stable in absolute terms but falls as % GDP if economy grows', 'Germany\'s "Schwarze Null" (black zero) policy: constitutional commitment to balanced budget 2014-2019']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Deficit and National Debt', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The <strong>national debt</strong> (or public sector net debt) is the accumulated stock of past fiscal deficits less repayments. Each year\'s deficit adds to the national debt: Debt(t) = Debt(t-1) + Deficit(t). The UK national debt as a share of GDP rose from ~40% in 2007 to ~100% by 2023, driven by the 2008 GFC and COVID-19 pandemic borrowing. <strong>Debt/GDP ratio</strong> is the standard sustainability measure — debt is easier to service when GDP grows relative to debt.'
      }
    },
    {
      id: 'equation-2',
      type: 'equation',
      data: {
        latex: '\\text{National Debt}_t = \\text{National Debt}_{t-1} + \\text{Fiscal Deficit}_t',
        caption: 'Annual deficits accumulate into the national debt stock'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'The Fiscal Stance: Expansionary vs Contractionary', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'A <strong>fiscal deficit</strong> represents an expansionary fiscal stance — government is injecting more into the economy (spending) than it is withdrawing (taxes), adding to aggregate demand. A <strong>fiscal surplus</strong> is contractionary — government withdraws more than it injects. The size and direction of the deficit/surplus is a core tool of Keynesian demand management. However, the deficit does not directly measure the fiscal <em>impulse</em> — only the change in the structural (cyclically adjusted) balance reflects deliberate policy, as the cyclical component moves automatically with the economy.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Deficit vs Debt',
        text: 'A very common error: confusing deficit (a FLOW — what the government borrows in one year) with debt (a STOCK — the accumulated borrowing over many years). The deficit can be falling (improving) while the debt is still rising (because a deficit, however small, still adds to debt). Only a surplus reduces the debt stock.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Fiscal balance = T − G; a deficit (G > T) requires borrowing and adds to the national debt stock; a surplus reduces debt; the UK ran deficits for most of 2002-2023; national debt/GDP is the key sustainability measure.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'equation-1',
        prompt: 'Define fiscal deficit and explain its relationship to the national debt.',
        answer: 'Fiscal deficit = G − T (when government spending G exceeds tax revenues T). Each year\'s deficit must be financed by borrowing (issuing government bonds), adding to the accumulated national debt stock. National Debt(t) = National Debt(t-1) + Deficit(t). Only a fiscal surplus reduces the debt stock.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'Why is a balanced budget different from a falling national debt?',
        answer: 'A balanced budget (G = T) means no new net borrowing, so the debt stock stays constant in absolute terms. The debt/GDP ratio falls if the economy grows, but the absolute debt level does not fall. To actually reduce the debt stock, the government must run a fiscal SURPLUS (T > G), using excess revenue to repay outstanding bonds.'
      },
      {
        id: 'cue-3',
        blockId: 'para-3',
        prompt: 'Why does a fiscal deficit represent an expansionary fiscal stance?',
        answer: 'A deficit means the government is injecting more money into the economy through spending (G) than it is withdrawing through taxation (T). This net injection adds to aggregate demand (AD = C + I + G + X − M), providing expansionary stimulus. A surplus is contractionary as it withdraws more than it injects.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_7;
