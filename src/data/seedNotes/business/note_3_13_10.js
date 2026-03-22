export const note_business_3_13_10 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Synthesize the limitations of quantitative strategic decision tools in a broader corporate environment.' } },
    { id: 'h1', type: 'heading', data: { text: 'Tool Limitations and Evidence-based Decision Making', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Throughout strategic decision making, tools such as Net Present Value, Decision Trees, and Critical Path Analysis provide managers a numerical advantage. This evidence-based decision-making restricts bias and emotions. However, all tools share universal limitations.' } },
    { id: 'h2', type: 'heading', data: { text: 'Common Broad Limitations', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**The Data Quality Problem:** The model outcome will only be as accurate as the estimates supplied. The GIGO principle applies: "Garbage In, Garbage Out". Inaccurate inputs yield incorrect output models.' },
      { text: '**Internal Qualitative Ignorance:** Tools cannot measure human factors. A highly profitable NPV project may destroy workforce morale or drastically alter corporate culture.' },
      { text: '**External Volatility:** Quantitative models utilize static conditions over time periods (time value of money uses static discount rates). Real-life economic recessions, competitor interference, and legal changes invalidate the mathematical forecasts quickly.' },
      { text: '**Cost and Time:** Implementing intricate CPA software planning or deep Investment Appraisal algorithms consumes significant capital and time.' }
    ]} },
    { id: 'h3', type: 'heading', data: { text: 'Evidence-Based vs. Subjective Decision Making', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'Many entrepreneurial businesses (such as Steve Jobs at Apple) relied heavily on gut feeling, experience, and subjective intuition. The advantage is an incredibly fast, innovative response.' } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Scientific vs Subjective Strategy',
      headers: ['Evidence-Based (Scientific)', 'Subjective (Hunches)'],
      rows: [
        ['Backed by data, NPV, Decision Trees, and past moving averages.', 'Driven by entrepreneur instincts and intuition.'],
        ['Can be easily justified to stakeholders, banks, and shareholders.', 'Extremely difficult to justify asking for massive bank loans.'],
        ['Can be slow to accumulate the research heavily limiting market pioneer advantage.', 'Promotes incredible agility; firm can be first-to-market and shape the industry.']
      ]
    }},
    { id: 'call1', type: 'callout', data: { style: 'tip', title: 'Exam Application', text: 'In twenty-mark evaluation questions, argue that mathematical models must ALWAYS be paired with qualitative assessment (PESTLE, market research, brand alignment) to formulate an optimal strategy.' } },
    { id: 'sum', type: 'summary', data: { text: 'Strategic tools provide powerful scientific data. However, their reliance on accurate forecasting and static environments necessitates that an experienced management team combines these numerical indicators with human qualitative intuition.' } },
    { id: 'enr-worked1', type: 'callout', data: { style: 'worked', title: 'COVID-19: When Quantitative Tools Failed', text: 'Quantitative tools failed spectacularly during COVID-19. Airlines used 5-year revenue forecasts to justify buying new aircraft — all cancelled within weeks. All models assumed \'business as usual\'. Black Swan events show quantitative tools have a hard boundary: they cannot model the unknown unknown.' } },
    { id: 'enr-warning1', type: 'callout', data: { style: 'warning', title: 'Decision Trees: False Precision', text: 'Decision trees require probability estimates — but who decides 0.6 vs 0.7? Small changes in probability completely change the EMV. These tools give a false sense of precision to what are actually judgement calls.' } },
    { id: 'enr-tip1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Level 3 Qualitative Override', text: 'Always end a tools analysis with a qualitative override argument: \'Despite the NPV being negative, the strategic importance of entering the Chinese market means the investment may still be justified.\' This shows Level 3 analysis.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Synthesize limitations into a coherent argument: Quantitative tools assume rational decision-making, stable environments, and available data\u2014but real firms face uncertainty, bounded rationality, and incomplete information. Integrate qualitative judgment with quantitative rigor for rounded strategy."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Making quantitative tools seem more powerful than they are. NPV assumes discount rates are *knowable*; Decision Trees assume all outcomes are *predictable*. Acknowledge uncertainty bounds\u2014tools guide decisions but cannot eliminate business risk inherent in strategy."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Quantitative tools provide scientific backing but rely heavily on data accuracy and ignore qualitative human realities.',
    cues: [
      { id: 'c1', blockId: 'list1', prompt: 'What is meant by the principle "Garbage In, Garbage Out"?', answer: 'If the data or estimates inputted into models like NPV or Decision Trees are inaccurate, the output will also be flawed.' },
      { id: 'c2', blockId: 'list1', prompt: 'Outline one way external volatility harms mathematical decision tools.', answer: 'Changes in the macroeconomy like changing interest rates or unexpected inflation ruin long-term calculations.' },
      { id: 'c3', blockId: 'table', prompt: 'Give one strength and one flaw of subjective, hunch-based decision making.', answer: 'Strength: it is fast and allows first-mover advantage. Flaw: hard to justify to banks and shareholders.' },
      { id: 'c4', blockId: 'call1', prompt: 'How should management counter the limitations of mathematical strategic tools?', answer: 'By combining the empirical math data with qualitative models like PESTLE and market research before acting.' }
    ]
  }
};