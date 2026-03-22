export const note_business_3_11_5 = {
  pdfPath: '/notes/business/wbs13-11.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and apply portfolio analysis, including the Boston Consulting Group (BCG) Matrix. Classify products into Stars, Cash Cows, Question Marks, and Dogs. Evaluate the model\'s usefulness for strategic decision-making.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is Portfolio Analysis?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Portfolio analysis</b> examines the range of products or business units a company operates to determine where to invest, maintain, or withdraw resources. A <b>balanced portfolio</b> generates current cash flow while also investing in future growth, reducing the risk of relying on a single product or market.' }
    },
    {
      id: 'h-bcg',
      type: 'heading',
      data: { text: 'The BCG Matrix (Boston Consulting Group)', level: 2 }
    },
    {
      id: 'p-bcg',
      type: 'paragraph',
      data: { text: 'Developed in 1970 by the Boston Consulting Group, the <b>BCG Matrix</b> classifies a business\'s products using two axes: <b>relative market share</b> (x-axis) and <b>market growth rate</b> (y-axis). This creates four categories.' }
    },
    {
      id: 'tbl-bcg',
      type: 'comparisonTable',
      data: {
        caption: 'BCG Matrix — the four product categories',
        headers: ['', 'High Market Share', 'Low Market Share'],
        rows: [
          ['<b>High Market Growth</b>', '⭐ Stars', '❓ Question Marks (Problem Children)'],
          ['<b>Low Market Growth</b>', '🐄 Cash Cows', '🐕 Dogs']
        ]
      }
    },
    {
      id: 'h-stars',
      type: 'heading',
      data: { text: '⭐ Stars', level: 2 }
    },
    {
      id: 'list-stars',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>High market share, high market growth rate.</b>' },
          { text: 'Generate significant revenue but require ongoing heavy investment to maintain their position.' },
          { text: 'As market growth slows, Stars that maintain their high share become Cash Cows.' },
          { text: '<b>Strategy:</b> Invest and grow — protect market share.' },
          { text: '<b>Example:</b> iPhone (when smartphones were growing rapidly).' }
        ]
      }
    },
    {
      id: 'h-cc',
      type: 'heading',
      data: { text: '🐄 Cash Cows', level: 2 }
    },
    {
      id: 'list-cc',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>High market share, low market growth rate.</b>' },
          { text: 'Mature products in stable markets; generate more cash than they consume.' },
          { text: 'The surplus cash generated is used to fund Stars and Question Marks.' },
          { text: '<b>Strategy:</b> "Milk" — maintain with minimal investment; harvest profits.' },
          { text: '<b>Example:</b> Microsoft Office (stable, dominant, high margins).' }
        ]
      }
    },
    {
      id: 'h-qm',
      type: 'heading',
      data: { text: '❓ Question Marks (Problem Children)', level: 2 }
    },
    {
      id: 'list-qm',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Low market share, high market growth rate.</b>' },
          { text: 'Exist in growing markets but have not yet captured significant share — uncertain future.' },
          { text: 'Require heavy investment to grow share; if they fail, they become Dogs.' },
          { text: '<b>Strategy:</b> Selective investment — choose those with best potential and invest; divest the rest.' },
          { text: '<b>Example:</b> A new electric vehicle model from a traditional car brand entering a growing market.' }
        ]
      }
    },
    {
      id: 'h-dogs',
      type: 'heading',
      data: { text: '🐕 Dogs', level: 2 }
    },
    {
      id: 'list-dogs',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Low market share, low market growth rate.</b>' },
          { text: 'Products in declining or stagnant markets with a weak competitive position.' },
          { text: 'Usually break even or make a small loss; consume management time disproportionately.' },
          { text: '<b>Strategy:</b> Divest or harvest (minimise costs, extract remaining cash, then discontinue).' },
          { text: '<b>Example:</b> DVD players in the era of streaming; printed encyclopaedias.' }
        ]
      }
    },
    {
      id: 'h-life',
      type: 'heading',
      data: { text: 'Product Life Cycle Link', level: 2 }
    },
    {
      id: 'p-life',
      type: 'paragraph',
      data: { text: 'BCG categories broadly mirror the product life cycle: <b>Question Mark → Star → Cash Cow → Dog</b> corresponds to <b>Introduction → Growth → Maturity → Decline</b>. However, not all products follow this path — some Question Marks never become Stars.' }
    },
    {
      id: 'h-eval',
      type: 'heading',
      data: { text: 'Evaluating the BCG Matrix', level: 2 }
    },
    {
      id: 'tbl-eval',
      type: 'comparisonTable',
      data: {
        caption: 'Benefits and limitations of the BCG Matrix',
        headers: ['Benefits', 'Limitations'],
        rows: [
          ['Simple to use; easy to communicate to stakeholders', 'Only two variables — ignores quality, price, brand strength, competition'],
          ['Helps identify which products need investment vs divestment', 'Market share does not always predict profitability'],
          ['Encourages a balanced portfolio view — reduces over-reliance on one product', 'Defining "market" is subjective — a different market definition changes classification'],
          ['Supports long-term strategic cash flow management', 'Can lead to premature withdrawal from "Dog" products that still serve niche customers profitably'],
          ['Useful for conglomerates managing diverse business units', 'Does not indicate how to move a product from Question Mark to Star']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Portfolio Balance',
        text: 'A business needs <b>balance</b>: Cash Cows to fund Stars and Question Marks. Too many Dogs drain resources. Too many Question Marks with no Cash Cows creates cash flow problems. In an exam, justify investment decisions by referring to cash flow implications and market conditions.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The BCG Matrix classifies products by <b>market share</b> and <b>market growth rate</b> into four categories: <b>Stars</b> (invest, grow), <b>Cash Cows</b> (maintain, harvest), <b>Question Marks</b> (selective investment), and <b>Dogs</b> (divest or harvest). A balanced portfolio generates current income (Cash Cows) while funding future growth (Stars, selective Question Marks). The model is simple but oversimplifies complex markets.' }
    },
    {
      id: 'enr-h-bcg-viz',
      type: 'heading',
      data: { text: 'BCG Matrix — Visual Overview', level: 2 }
    },
    {
      id: 'enr-svg-bcg',
      type: 'svg',
      data: {
        svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 360' font-family='Arial,sans-serif'><rect width='440' height='360' fill='#0f172a' rx='8'/><text x='220' y='26' text-anchor='middle' font-size='14' font-weight='bold' fill='#1f2937'>BCG Matrix — Product Portfolio</text><rect x='50' y='45' width='170' height='140' fill='#1e3a8a' stroke='#3b82f6' stroke-width='2' rx='4'/><text x='135' y='80' text-anchor='middle' font-size='20' fill='#1d4ed8'>+</text><text x='135' y='102' text-anchor='middle' font-size='14' font-weight='bold' fill='#1d4ed8'>Stars</text><text x='135' y='120' text-anchor='middle' font-size='10' fill='#1e40af'>High share, High growth</text><text x='135' y='136' text-anchor='middle' font-size='10' fill='#1e40af'>Invest and Grow</text><text x='135' y='154' text-anchor='middle' font-size='9' fill='#374151' font-style='italic'>e.g. iPhone (growth phase)</text><rect x='230' y='45' width='170' height='140' fill='#78350f' stroke='#f59e0b' stroke-width='2' rx='4'/><text x='315' y='82' text-anchor='middle' font-size='26' fill='#b45309'>?</text><text x='315' y='104' text-anchor='middle' font-size='14' font-weight='bold' fill='#b45309'>Question Marks</text><text x='315' y='122' text-anchor='middle' font-size='10' fill='#92400e'>Low share, High growth</text><text x='315' y='138' text-anchor='middle' font-size='10' fill='#92400e'>Selective invest / divest</text><text x='315' y='154' text-anchor='middle' font-size='9' fill='#374151' font-style='italic'>e.g. Apple Vision Pro (2024)</text><rect x='50' y='195' width='170' height='140' fill='#0a2e1a' stroke='#10b981' stroke-width='2' rx='4'/><text x='135' y='232' text-anchor='middle' font-size='22' fill='#065f46'>$</text><text x='135' y='255' text-anchor='middle' font-size='14' font-weight='bold' fill='#065f46'>Cash Cows</text><text x='135' y='273' text-anchor='middle' font-size='10' fill='#065f46'>High share, Low growth</text><text x='135' y='289' text-anchor='middle' font-size='10' fill='#065f46'>Milk / Maintain</text><text x='135' y='306' text-anchor='middle' font-size='9' fill='#374151' font-style='italic'>e.g. MacBook Pro (stable)</text><rect x='230' y='195' width='170' height='140' fill='#3d1212' stroke='#ef4444' stroke-width='2' rx='4'/><text x='315' y='232' text-anchor='middle' font-size='22' fill='#b91c1c'>X</text><text x='315' y='255' text-anchor='middle' font-size='14' font-weight='bold' fill='#b91c1c'>Dogs</text><text x='315' y='273' text-anchor='middle' font-size='10' fill='#b91c1c'>Low share, Low growth</text><text x='315' y='289' text-anchor='middle' font-size='10' fill='#b91c1c'>Divest / Harvest</text><text x='315' y='306' text-anchor='middle' font-size='9' fill='#374151' font-style='italic'>e.g. iPod (discontinued 2022)</text><text x='25' y='195' text-anchor='middle' font-size='10' fill='#6b7280' transform='rotate(-90,25,195)'>Market Growth Rate</text><text x='135' y='350' text-anchor='middle' font-size='10' fill='#6b7280'>High Market Share</text><text x='315' y='350' text-anchor='middle' font-size='10' fill='#6b7280'>Low Market Share</text></svg>",
        caption: 'BCG Matrix: four product categories by relative market share (x-axis) and market growth rate (y-axis)'
      }
    },
    {
      id: 'enr-callout-worked-apple',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Worked Example \u2014 Apple's Product Portfolio (BCG Matrix, 2024)",
        text: '<b>Stars:</b> iPhone 15 Pro \u2014 high and growing share of the premium smartphone segment. Apple invests heavily in chip technology (A17 Pro) and camera systems to maintain dominance in this high-growth niche.<br><br><b>Cash Cows:</b> MacBook and iPad Pro \u2014 Apple dominates the premium laptop and tablet niches, which grow slowly but generate enormous margins, funding newer ventures.<br><br><b>Question Marks:</b> Apple Vision Pro (launched 2024) \u2014 very low market share in a potentially high-growth spatial computing market. Apple is investing billions but market validation is unconfirmed: a textbook Question Mark.<br><br><b>Dogs:</b> iPod (discontinued 2022) \u2014 competed in a declining physical music player market with a tiny share. Apple correctly divested, freeing capital for strategic priorities.<br><br><b>Portfolio verdict:</b> Strong Cash Cows (MacBook, iPad) fund Stars (iPhone) and Question Marks (Vision Pro), demonstrating best-practice BCG portfolio management.'
      }
    },
    {
      id: 'enr-callout-tip-bcg',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip \u2014 Applying BCG to Context Questions',
        text: 'When applying the BCG Matrix: <b>(1) Define the market precisely</b> \u2014 use "premium smartphones" not just "technology". <b>(2) Justify classification</b> with case evidence (market share data, growth rate figures). <b>(3) Link strategy to cash flow reasoning</b> \u2014 e.g., "As a Cash Cow, the MacBook generates surplus cash to fund the high-risk Vision Pro Question Mark." <b>(4) Evaluate the model</b> in top-band answers by noting it only uses two variables and that market definition is subjective.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Use the BCG matrix to generate strategic questions rather than definitive answers: Should we milk the Cash Cow or reinvest? Can Question Marks be turned into Stars or should we divest? These questions reveal dynamic strategic thinking that examiners value."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Assuming Dogs should always be divested immediately. Some Dogs generate cash with minimal investment; others are strategically important for market presence. Always contextualize\u2014is divestiture truly optimal or just obvious? This thinking elevates analysis significantly."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'BCG Matrix: Stars (high share, high growth → invest), Cash Cows (high share, low growth → harvest), Question Marks (low share, high growth → selective invest), Dogs (low share, low growth → divest). Cash Cows fund Stars.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-bcg', prompt: 'Draw and complete the BCG Matrix, labelling each quadrant with its category name and the axes.', answer: 'X-axis: Relative market share (high left → low right). Y-axis: Market growth rate (high top). Quadrants: Stars (top-left), Question Marks (top-right), Cash Cows (bottom-left), Dogs (bottom-right).' },
      { id: 'cue-2', blockId: 'list-cc', prompt: 'What is a Cash Cow, and what is the recommended strategy for managing one?', answer: 'A product with high market share in a low-growth market. Strategy: "milk" it — maintain with minimal investment and use the cash generated to fund Stars and Question Marks.' },
      { id: 'cue-3', blockId: 'list-stars', prompt: 'Why do "Stars" require heavy investment despite generating significant revenue?', answer: 'Because they are in high-growth markets, maintaining their high market share requires ongoing heavy investment in marketing, capacity, and innovation. Without investment, competitors may erode their share.' },
      { id: 'cue-4', blockId: 'list-dogs', prompt: 'What strategy should a business apply to a "Dog" product, and why?', answer: 'Divest or harvest — minimise costs and extract remaining cash before discontinuing, because Dogs are in low-growth markets with weak competitive positions and typically break even or make losses.' },
      { id: 'cue-5', blockId: 'p-life', prompt: 'How does the BCG Matrix link to the product life cycle?', answer: 'Question Mark = Introduction, Star = Growth, Cash Cow = Maturity, Dog = Decline.' },
      { id: 'cue-6', blockId: 'tbl-eval', prompt: 'Give two limitations of the BCG Matrix as a strategic planning tool.', answer: 'Only uses two variables, ignoring quality, brand, and competition. Defining the market is subjective, which changes the classification. Does not indicate how to move a product up in classification.' }
    ]
  },
  evidence: [],
  mentions: []
};
