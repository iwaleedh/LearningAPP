export const note_business_3_11_2 = {
  pdfPath: '/notes/business/wbs13-11.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and apply key corporate strategy models (Ansoff Matrix, Porter\'s Generic Strategies, BCG Matrix). Evaluate the usefulness and limitations of each model in strategic planning.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What Is Corporate Strategy?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: '<b>Corporate strategy</b> is the long-term plan that defines how a business will achieve its objectives and fulfil its mission. Strategy answers three fundamental questions: <i>Where are we now? Where do we want to be? How will we get there?</i>' }
    },
    {
      id: 'callout-key-strategy',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Strategic vs Operational Decisions',
        text: '<b>Strategic decisions</b> are long-term, high-risk, difficult to reverse, and made by senior management (e.g. entering a new market). <b>Operational (tactical) decisions</b> are short-term, lower risk, and made by middle/junior management (e.g. running a promotional discount).'
      }
    },
    {
      id: 'h-models',
      type: 'heading',
      data: { text: 'Overview of Key Strategy Models', level: 2 }
    },
    {
      id: 'tbl-models',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of main corporate strategy models',
        headers: ['Model', 'Core Question Answered', 'Key Output', 'Level of Analysis'],
        rows: [
          ['Ansoff Matrix', 'How should we grow?', '4 growth strategies with risk levels', 'Corporate / market level'],
          ['Porter\'s Generic Strategies', 'How do we compete?', 'Cost leadership, Differentiation, Focus', 'Competitive positioning'],
          ['BCG Matrix (Boston Consulting Group)', 'Where should we invest?', 'Portfolio categorisation: Stars, Dogs, Cash Cows, Question Marks', 'Product portfolio level'],
          ['SWOT Analysis', 'What is our current position?', 'Internal strengths/weaknesses + external opportunities/threats', 'Situational / audit level'],
          ['PESTLE Analysis', 'What macro forces affect us?', 'Environmental scan across 6 dimensions', 'External environment level'],
          ['Porter\'s Five Forces', 'How attractive is our industry?', 'Assessment of competitive intensity and profitability potential', 'Industry / sector level']
        ]
      }
    },
    {
      id: 'h-process',
      type: 'heading',
      data: { text: 'The Strategic Planning Process', level: 2 }
    },
    {
      id: 'list-process',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<b>Strategic analysis</b> — understand the current position using SWOT, PESTLE, Five Forces.' },
          { text: '<b>Strategic choice</b> — identify and evaluate strategic options (Ansoff, Porter\'s Generic Strategies, BCG).' },
          { text: '<b>Strategic implementation</b> — put the chosen strategy into action (organisational structure, resources, culture).' },
          { text: '<b>Review and control</b> — monitor progress against objectives and adjust if necessary.' }
        ]
      }
    },
    {
      id: 'h-limitations',
      type: 'heading',
      data: { text: 'Limitations of Strategy Models', level: 2 }
    },
    {
      id: 'list-limits',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Static snapshots</b> — models show a point-in-time view; markets change faster than strategy cycles.' },
          { text: '<b>Oversimplification</b> — real competitive environments are more complex than 2×2 matrices suggest.' },
          { text: '<b>Data quality</b> — conclusions depend on accurate, timely information, which is costly to gather.' },
          { text: '<b>Implementation gap</b> — a theoretically perfect strategy may fail due to poor execution, resistance from staff, or resource constraints.' },
          { text: '<b>Bias</b> — managers may unconsciously select data that confirms their preferred strategy (confirmation bias).' }
        ]
      }
    },
    {
      id: 'callout-tip-eval',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Evaluating Strategy Models',
        text: 'When evaluating any strategy model, always ask: (1) Is the data reliable? (2) How dynamic is the environment? (3) Does the model account for internal culture and capabilities? A business in a fast-moving tech industry should weight PESTLE and Five Forces analysis more heavily than a stable, mature industry player.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Corporate strategy models provide frameworks for analysing position, making growth choices, and managing product portfolios. Key models include Ansoff (growth direction), Porter\'s Generic Strategies (competitive advantage), BCG Matrix (portfolio balance), SWOT (internal/external position), PESTLE (macro environment), and Five Forces (industry attractiveness). All models have limitations — they are tools to aid judgement, not replace it.' }
    },
    {
      id: 'enr-svg-ansoff',
      type: 'svg',
      data: {
        svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 358' font-family='Inter,Arial,sans-serif'><text x='148' y='353' text-anchor='middle' font-size='11' font-weight='600' fill='#374151'>Existing Markets</text><text x='370' y='353' text-anchor='middle' font-size='11' font-weight='600' fill='#374151'>New Markets</text><text x='17' y='97' text-anchor='middle' font-size='10' font-weight='600' fill='#374151' transform='rotate(-90,17,97)'>New Products</text><text x='17' y='255' text-anchor='middle' font-size='10' font-weight='600' fill='#374151' transform='rotate(-90,17,255)'>Existing Products</text><rect x='36' y='18' width='218' height='152' rx='7' fill='#1e3a8a' stroke='#93c5fd' stroke-width='1.5'/><text x='145' y='45' text-anchor='middle' font-size='11' font-weight='700' fill='#1e40af'>PRODUCT DEVELOPMENT</text><text x='145' y='64' text-anchor='middle' font-size='9.5' fill='#1d4ed8'>New product, existing market</text><text x='145' y='82' text-anchor='middle' font-size='9' fill='#1d4ed8'>e.g. Apple iPhone &#8594; iPad</text><text x='145' y='105' text-anchor='middle' font-size='9' font-weight='600' fill='#1e40af'>Medium-High Risk</text><rect x='262' y='18' width='218' height='152' rx='7' fill='#3d1212' stroke='#fca5a5' stroke-width='1.5'/><text x='371' y='45' text-anchor='middle' font-size='11' font-weight='700' fill='#991b1b'>DIVERSIFICATION</text><text x='371' y='64' text-anchor='middle' font-size='9.5' fill='#b91c1c'>New product, new market</text><text x='371' y='82' text-anchor='middle' font-size='9' fill='#b91c1c'>e.g. Virgin: music &#8594; airlines</text><text x='371' y='105' text-anchor='middle' font-size='9' font-weight='600' fill='#991b1b'>Highest Risk</text><rect x='36' y='178' width='218' height='152' rx='7' fill='#0a2e1a' stroke='#6ee7b7' stroke-width='1.5'/><text x='145' y='205' text-anchor='middle' font-size='11' font-weight='700' fill='#065f46'>MARKET PENETRATION</text><text x='145' y='224' text-anchor='middle' font-size='9.5' fill='#047857'>Existing product, existing market</text><text x='145' y='242' text-anchor='middle' font-size='9' fill='#047857'>e.g. Tesco: price cuts, Clubcard</text><text x='145' y='265' text-anchor='middle' font-size='9' font-weight='600' fill='#065f46'>Lowest Risk</text><rect x='262' y='178' width='218' height='152' rx='7' fill='#532407' stroke='#fdba74' stroke-width='1.5'/><text x='371' y='205' text-anchor='middle' font-size='11' font-weight='700' fill='#9a3412'>MARKET DEVELOPMENT</text><text x='371' y='224' text-anchor='middle' font-size='9.5' fill='#c2410c'>Existing product, new market</text><text x='371' y='242' text-anchor='middle' font-size='9' fill='#c2410c'>e.g. Costa Coffee &#8594; China</text><text x='371' y='265' text-anchor='middle' font-size='9' font-weight='600' fill='#9a3412'>Medium Risk</text></svg>",
        caption: 'Ansoff Matrix: four growth strategies mapped by product newness (y-axis) and market newness (x-axis)'
      }
    },
    {
      id: 'enr-callout-worked-netflix',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Netflix\'s Ansoff Matrix Journey',
        text: '<b>Stage 1 — Market Penetration:</b> Netflix competed aggressively in the US streaming market, gaining more US subscribers through competitive pricing and content investment.<br><br><b>Stage 2 — Market Development:</b> Entered 190 countries using the <i>same</i> streaming product, targeting new geographic markets — classic market development.<br><br><b>Stage 3 — Product Development:</b> Created original content (Stranger Things, The Crown) for its <i>existing</i> subscriber base — new product, same market.<br><br><b>Stage 4 — Diversification:</b> Expanded into video gaming, a new product for new segments — the highest-risk Ansoff quadrant.<br><br><b>Key insight:</b> Netflix progressed through all four Ansoff quadrants over 25 years, managing risk by mastering each stage before expanding further.'
      }
    },
    {
      id: 'enr-callout-tip-named',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Always Use Named Business Examples',
        text: 'Generic strategy answers score Level 1 (knowledge). To reach Level 2 (application) and Level 3 (analysis/evaluation), you must name a business and explain <i>why</i> they chose that strategy and what the trade-offs were.<br><br><b>Formula:</b> [Model] identifies [Company] is pursuing [Strategy]. This is because [business context]. However, this carries [risk/limitation] because [reason]. Therefore [judgement].'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Know which models suit which contexts: Ansoff for market entry decisions, Porter's Forces for competitive position, BCG for portfolio management, SWOT for internal/external audit, PESTLE for macro-environmental screening. Matching the right tool to the business problem is a top-level skill."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Applying one model mechanically without stating assumptions or limitations. Every strategic model operates on certain assumptions (e.g., static competitive environment, rational decision-making). Acknowledge these to lift analysis from basic to excellent."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Corporate strategy = long-term plan for achieving objectives. Key models: Ansoff (growth), Porter\'s Generic (competition), BCG (portfolio), SWOT (position), PESTLE (macro), Five Forces (industry). All models have limitations — static, simplified, data-dependent.',
    cues: [
      { id: 'cue-1', blockId: 'p-what', prompt: 'What three questions does corporate strategy answer?', answer: 'Where are we now? Where do we want to be? How will we get there?' },
      { id: 'cue-2', blockId: 'callout-key-strategy', prompt: 'Distinguish between a strategic decision and an operational (tactical) decision.', answer: 'Strategic decisions are long-term, high-risk, and hard to reverse (e.g. entering a new country). Operational decisions are short-term, lower risk, and made at middle/junior management level (e.g. running a promotion).' },
      { id: 'cue-3', blockId: 'tbl-models', prompt: 'What question does the Ansoff Matrix answer, and what are its four strategies?', answer: 'How should we grow? The four strategies are: market penetration, market development, product development, and diversification.' },
      { id: 'cue-4', blockId: 'list-process', prompt: 'State the four stages of the strategic planning process.', answer: 'Strategic analysis → Strategic choice → Strategic implementation → Review and control.' },
      { id: 'cue-5', blockId: 'list-limits', prompt: 'Give two limitations of using corporate strategy models.', answer: 'Models are static snapshots (markets change faster); they oversimplify complex competitive environments; conclusions depend on data quality; implementation may fail due to staff resistance or resource gaps.' }
    ]
  },
  evidence: [],
  mentions: []
};
