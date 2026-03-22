export const note_business_3_13_2 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Evaluate the limitations of quantitative forecasting techniques and understand why forecasts may prove inaccurate.' } },
    { id: 'h1', type: 'heading', data: { text: 'Limitations of Forecasting', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'While techniques such as moving averages, scatter graphs, and extrapolation provide mathematical foundations for strategic decisions, they possess significant limitations. Over-reliance on these models can lead to poor business choices.' } },
    { id: 'h2', type: 'heading', data: { text: 'Key Weaknesses', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Assuming past patterns continue:** Extrapolation is based entirely on historical data. It assumes tomorrow will behave like yesterday, which is rarely true in dynamic industries.' },
      { text: '**External shocks:** Forecasts cannot predict sudden macroeconomic shifts (e.g., recessions, pandemics, severe natural disasters).' },
      { text: '**Action of competitors:** A forecasted sales plan can be quickly derailed when a competitor launches a superior product or slashes prices.' },
      { text: '**Qualitative factors ignored:** Models do not account for shifts in consumer taste, brand loyalty, morale of the workforce, or management intuition.' },
      { text: '**Time horizons:** The further into the future a firm tries to forecast, the greater the margin of error.' }
    ]} },
    { id: 'call1', type: 'callout', data: { style: 'tip', title: 'Evaluating Forecasting', text: 'When evaluating quantitative forecasting, always combine it with qualitative methods like market research, Delphi techniques, and expert judgment.' } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Strengths and Weaknesses of Forecasting',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['Provides an objective foundation for targets', 'Rigid reliance on historical data'],
        ['Helps identify seasonal variations to plan stock and cash flow', 'Usually ignores unpredictable external forces (PESTLE changes)'],
        ['Useful in stable, mature markets with regular patterns', 'Inaccurate in rapidly changing technological markets']
      ]
    }},
    { id: 'sum', type: 'summary', data: { text: 'Forecasting uses past data to inform future expectations, but its limitations—especially vulnerability to external shocks and ignorance of qualitative factors—mean it should be used cautiously.' } },
    { id: 'enr-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example: Blockbuster — A Flawed Forecast', text: 'Blockbuster forecasted 2010 DVD rental revenue based on 2005–2009 trends. The trend looked stable. But Netflix streaming destroyed the market entirely by 2012 — a Black Swan event no forecasting model could predict.' } },
    { id: 'enr-warning', type: 'callout', data: { style: 'warning', title: 'Structural Market Change Renders Forecasts Obsolete', text: 'Forecasts are based on past data. If the market changes structurally (new technology, pandemic, war), historical trends are useless. COVID-19 made 2019 forecasts worthless for every airline, hotel and restaurant.' } },
    { id: 'enr-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Evaluating Forecasting Accuracy', text: 'Exam tip: Always evaluate accuracy vs usefulness of forecasting. 3 marks for criticisms: past data, external shocks, subjective choice of technique.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "When evaluating forecasting limits, separate technical from contextual: Technical limits = model choice, data quality (fixable); Contextual = market disruption, regulation change, competitor innovation (unforeseen). Explain both for sophisticated analysis."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Assuming past trends predict future perfectly. COVID-19, iPhone launch, and Brexit all broke forecasts built on historical data. Examiners expect you to recognize that forecasting inherently carries irreducible uncertainty\u2014especially beyond 2\u20133 years."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Quantitative forecasting relies on the past, making it vulnerable to market volatility and external shocks.',
    cues: [
      { id: 'c1', blockId: 'list1', prompt: 'Why is the assumption of extrapolation a major weakness?', answer: 'It assumes past trends will continue in the future, which is dangerous in dynamic, changing markets.' },
      { id: 'c2', blockId: 'list1', prompt: 'Mention two external factors neglected by time series forecasting.', answer: 'Competitor actions and macroeconomic shocks (e.g., recession).' },
      { id: 'c3', blockId: 'call1', prompt: 'How can businesses improve the reliability of their forecasts?', answer: 'By combining quantitative forecasting with qualitative insight and market research.' },
      { id: 'c4', blockId: 'list1', prompt: 'How does time horizon affect forecast reliability?', answer: 'The further into the future a forecast attempts to project, the less reliable it becomes.' }
    ]
  }
};