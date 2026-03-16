export const note_business_3_15_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Examine the limitations of relying purely on ratio analysis when assessing business performance.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Limitations of Ratio Analysis', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'While ratio analysis provides quantitative insights into financial performance, it has several notable limitations. Decision-makers must look beyond ratios to understand the complete picture of a business\'s health and competitiveness.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Weaknesses', level: 3 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\**Historic Data:\** Financial accounts are backward-looking. A strong past performance does not guarantee future success, especially in rapidly changing markets.' },
      { text: '\**Window Dressing:\** Firms can manipulate their accounts to make their financial situation appear more favorable (e.g., delaying payments to creditors to increase cash balances at year-end).' },
      { text: '\**Ignores Qualitative Factors:\** Ratios ignore non-financial indicators like staff morale, customer loyalty, management quality, or brand reputation.' },
      { text: '\**Inflation:\** Over time, inflation distorts financial figures, making comparisons across several years less accurate.' },
      { text: '\**Different Accounting Practices:\** Companies might use different methods for valuing inventory or depreciating assets, complicating industry comparisons.' }
    ] } },
    { id: 'call-1', type: 'callout', data: { style: 'tip', title: 'Context is Crucial', text: 'A single ratio is meaningless in isolation. It must be compared to previous years (trend analysis) or industry averages (cross-sectional analysis) to provide value.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Need for Holistic Assessment', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'To gain a true measure of competitiveness, stakeholders should pair quantitative ratio analysis with qualitative evaluations such as SWOT analysis or PESTLE analysis. A highly profitable firm may still fail if it faces a sudden regulatory shift or high staff turnover.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Ratio analysis is restricted by its reliance on historic, potentially manipulated data, and its omission of qualitative factors like employee motivation and market changes.' } },
    { id: 'enr-callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Case Study: Enron 2001', text: 'Enron 2001: all financial ratios looked healthy right up until the company collapsed. The balance sheet was fraudulently presented using special purpose vehicles to hide debt. Ratios can only be as reliable as the underlying accounts. Creative accounting makes ratio analysis misleading.' } },
    { id: 'enr-callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Core Limitations to Know', text: 'Ratios are backward-looking (based on last year\'s data), use historical cost (not market values), ignore qualitative factors (management quality, brand strength, employee morale), and can be manipulated (timing of asset sales, capitalising expenses).' } },
    { id: 'enr-callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: 3-Mark Limitation Question Structure', text: 'Exam tip: 3-mark limitation question structure — state the limitation, explain WHY it makes the ratio unreliable, give an example of when this matters. E.g. \'Ratios are historical [limitation] so cannot predict future performance [why] — Marks & Spencer\'s 2007 ratios looked healthy but failed to predict the 2008 downturn [example].\'' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Why is the historic nature of financial data a limitation of ratio analysis?', answer: 'Because backward-looking data does not guarantee future success or reflect current market conditions.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is window dressing in accounting?', answer: 'The legal manipulation of financial accounts to make a business\'s financial position appear better than it actually is.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Identify two qualitative factors ignored by ratio analysis.', answer: 'Staff morale, management quality, customer loyalty, or brand reputation.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'Why is a single ratio considered meaningless in isolation?', answer: 'Because it lacks context; ratios must be compared against past trends or industry averages to provide insight.' }
    ],
    summaryText: 'Limitations of ratio analysis include historic data, window dressing, ignoring qualitative factors, inflation distortion, and different accounting policies.'
  }
};