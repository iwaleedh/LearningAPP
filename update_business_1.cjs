const fs = require('fs');
const path = require('path');

const makeNote = (index, topic, blocks, recall) => {
  const fileContent = `export const note_business_1_1_${index} = {
  pdfPath: '/notes/business/wbs11-1.pdf',
  blocks: ${JSON.stringify(blocks, null, 4)},
  recall: ${JSON.stringify(recall, null, 4)},
  evidence: [],
  mentions: []
};
`;
  fs.writeFileSync(path.join(__dirname, `src/data/seedNotes/business/note_1_1_${index}.js`), fileContent);
};

makeNote(0, 'Mass vs niche markets', [
  { id: 'obj-1', type: 'objective', data: { text: 'Understand the differences between mass and niche markets, including their relative advantages and disadvantages.' } },
  { id: 'h-1', type: 'heading', data: { text: 'Mass Markets', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'A mass market is a large, unsegmented market where products are designed for a wide appeal. Products in these markets are typically generic and standardized.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Niche Markets', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'A niche market is a smaller, specialized segment of a larger market. Products in niche markets are tailored to the specific needs, preferences, or identity of a distinct group of consumers.' } },
  { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Key Definition', text: 'Market Segment: A subgroup of consumers with similar characteristics, needs, or behaviors within a broader market.' } },
  { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Comparing Mass and Niche Markets',
      headers: ['Feature', 'Mass Market', 'Niche Market'],
      rows: [
        ['Customer Base', 'Broad and diverse', 'Narrow and specific'],
        ['Competition', 'High, many competitors', 'Low, few competitors'],
        ['Economies of Scale', 'Significant, huge potential', 'Limited or non-existent'],
        ['Profit Margins', 'Usually lower (volume driven)', 'Usually higher (premium pricing)']
      ]
  } },
  { id: 'sum-1', type: 'summary', data: { text: 'In summary, mass markets target a broad audience with standardized products and benefit from economies of scale, while niche markets target specialized segments with tailored products, often enjoying higher profit margins but facing lower overall volume.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Mass markets target everyone with unsegmented products, relying on high volume. Niche markets target specific subsets with specialized needs, often enabling premium pricing.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'Define a mass market.', answer: 'A very large market in which products with mass appeal are targeted at all types of consumers.' },
    { id: 'cue-2', blockId: 'p-2', prompt: 'Define a niche market.', answer: 'A smaller, more specialized part of a larger market where customers have specific needs and wants.' },
    { id: 'cue-3', blockId: 'tbl-1', prompt: 'Which type of market usually benefits more from economies of scale?', answer: 'Mass markets, due to the large volume of production.' },
    { id: 'cue-4', blockId: 'tbl-1', prompt: 'Which market type typically allows for higher profit margins?', answer: 'Niche markets, because specialized products can command premium prices.' }
  ]
});

makeNote(1, 'Market size and market share', [
  { id: 'obj-1', type: 'objective', data: { text: 'Understand how to calculate and interpret market size, market share, and brand value in a competitive environment.' } },
  { id: 'h-1', type: 'heading', data: { text: 'Market Size', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Market size represents the total volume or value of sales in a specific market over a given period. It can be measured by volume (number of units sold) or value (total revenue generated).' } },
  { id: 'h-2', type: 'heading', data: { text: 'Market Share', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'Market share is the proportion of total market sales held by a particular firm or product. It is a critical indicator of a company\'s competitiveness and dominance within an industry.' } },
  { id: 'eq-1', type: 'equation', data: { html: 'Market Share (%) = &nbsp;<span class="nb-frac"><span class="nb-num">Sales of a business</span><span class="nb-den">Total market sales</span></span>&nbsp; × 100', caption: 'Formula for Market Share' } },
  { id: 'callout-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Market Share', text: 'If total smartphone sales in a country are $10 billion, and Company X sells $2.5 billion worth of smartphones, Company X\'s market share is (2.5 / 10) × 100 = 25%.' } },
  { id: 'h-3', type: 'heading', data: { text: 'Importance of Market Share', level: 2 } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Higher market share often leads to better economies of scale.' },
      { text: 'It can provide pricing power and influence over suppliers.' },
      { text: 'Acts as a strong indicator of brand strength and customer loyalty.' }
  ]}},
  { id: 'sum-1', type: 'summary', data: { text: 'Market size indicates the total capacity of a market, while market share shows the percentage of that market controlled by a specific business. Calculating market share helps businesses benchmark their performance against competitors.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Market size is the total sales (value/volume) of a market. Market share is the percentage of total sales controlled by a single firm.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'What are the two ways to measure market size?', answer: 'By value (total revenue) and by volume (total units sold).' },
    { id: 'cue-2', blockId: 'eq-1', prompt: 'What is the formula for calculating market share?', answer: '(Sales of a business / Total market sales) × 100.' },
    { id: 'cue-3', blockId: 'list-1', prompt: 'Identify one benefit of having a high market share.', answer: 'Increased economies of scale, greater pricing power, or stronger brand influence.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'Why is it important to track both market size and market share over time?', answer: 'To determine if the business is growing faster or slower than the overall market and to assess competitive performance.' }
  ]
});

makeNote(2, 'Brand identity and value', [
  { id: 'obj-1', type: 'objective', data: { text: 'Analyze the significance of brand identity and how branding adds value to a business and its products.' } },
  { id: 'h-1', type: 'heading', data: { text: 'What is a Brand?', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'A brand is a unique name, sign, symbol, or design used to create a distinct image for a product and differentiate it from competitors. Strong branding helps build customer recognition and loyalty.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Brand Identity vs Brand Value', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'Brand identity focuses on how a business wants to be perceived by consumers (e.g., logos, slogans, messaging). Brand value, or brand equity, refers to the financial premium that a company generates from a product with a recognizable name compared to a generic equivalent.' } },
  { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Why build brand value?', text: 'High brand value allows a business to charge premium prices, ensures more consistent consumer demand, and makes it easier to launch new products under the same brand name.' } },
  { id: 'list-1', type: 'list', data: { style: 'numbered', items: [
      { text: 'Creates brand loyalty, reducing price elasticity of demand.' },
      { text: 'Increases the barrier to entry for new competitors.' },
      { text: 'Facilitates product differentiation in crowded markets.' }
  ]}},
  { id: 'sum-1', type: 'summary', data: { text: 'Effective branding creates a strong brand identity that distinguishes a product from competitors. Over time, this builds brand value, enabling businesses to command premium prices, build customer loyalty, and enhance profitability.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'A brand differentiates a product from competitors. Strong brand value leads to customer loyalty, premium pricing, and lower price elasticity.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'Define a brand.', answer: 'A distinct name, term, sign, symbol, or design that identifies and differentiates a product from its competitors.' },
    { id: 'cue-2', blockId: 'p-2', prompt: 'What is brand value (or brand equity)?', answer: 'The financial premium that a company generates from possessing a recognizable brand compared to a generic equivalent.' },
    { id: 'cue-3', blockId: 'list-1', prompt: 'How does branding affect the price elasticity of demand?', answer: 'Strong branding tends to make demand more price inelastic, as customers are more loyal and willing to pay premium prices.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'Give two benefits of high brand value.', answer: 'Ability to charge premium prices, easier introduction of new products, and better customer retention.' }
  ]
});

makeNote(3, 'Dynamic market change', [
  { id: 'obj-1', type: 'objective', data: { text: 'Understand why markets change and how businesses adapt to dynamic, ever-changing market environments.' } },
  { id: 'h-1', type: 'heading', data: { text: 'What are Dynamic Markets?', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'A dynamic market is one that is subject to rapid or continuous change. In such markets, consumer preferences, competitor actions, and technological advancements force businesses to continuously adapt to survive.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Causes of Dynamic Market Change', level: 2 } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Technological change and innovation (e.g., e-commerce, AI).' },
      { text: 'Changing consumer tastes and preferences.' },
      { text: 'Changes in legislation and government policy.' },
      { text: 'Economic shifts (e.g., inflation, changes in income).' }
  ]}},
  { id: 'callout-1', type: 'callout', data: { style: 'warning', title: 'Risk of Ignoring Change', text: 'Failing to adapt to dynamic markets can lead to product obsolescence, loss of market share, and business failure.' } },
  { id: 'h-3', type: 'heading', data: { text: 'How Businesses Adapt', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'To remain competitive, businesses must be flexible, invest in research and development (R&D), conduct continuous market research, and maintain an agile organizational structure.' } },
  { id: 'sum-1', type: 'summary', data: { text: 'Dynamic markets change due to technology, consumer preferences, and economic factors. Businesses must remain flexible and innovative to adapt successfully, otherwise they risk obsolescence.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Dynamic markets change rapidly due to factors like technology, consumer tastes, and economic conditions. Businesses must adapt quickly through innovation and market research.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'What is a dynamic market?', answer: 'A market that is constantly changing and evolving over time.' },
    { id: 'cue-2', blockId: 'list-1', prompt: 'Identify three main causes of dynamic market change.', answer: 'Technological advancements, changing consumer tastes/preferences, and economic/legislative changes.' },
    { id: 'cue-3', blockId: 'p-2', prompt: 'How can a business adapt to a dynamic market?', answer: 'By investing in R&D, conducting regular market research, and maintaining a flexible organizational structure.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'What is a significant risk of failing to adapt to a dynamic market?', answer: 'Product obsolescence, leading to a loss of market share and potential business failure.' }
  ]
});

makeNote(4, 'Competition effects on markets', [
  { id: 'obj-1', type: 'objective', data: { text: 'Examine how competition affects businesses, consumers, and the overall market structure.' } },
  { id: 'h-1', type: 'heading', data: { text: 'The Role of Competition', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Competition exists when two or more businesses operate in the same market, appealing to the same target audience. High competition generally benefits consumers but forces businesses to differentiate, lower costs, or improve quality.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Impact on Consumers', level: 2 } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Lower prices due to businesses competing for sales.' },
      { text: 'Improved product quality and customer service.' },
      { text: 'Greater choice of products and services in the market.' }
  ]}},
  { id: 'h-3', type: 'heading', data: { text: 'Impact on Businesses', level: 2 } },
  { id: 'list-2', type: 'list', data: { style: 'bullet', items: [
      { text: 'Need to be increasingly efficient to reduce average costs.' },
      { text: 'A constant drive for innovation and new product development.' },
      { text: 'Potential reduction in profit margins if intense price wars occur.' }
  ]}},
  { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Direct vs Indirect Competition', text: 'Direct competitors offer identical or very similar products (e.g., Coke vs Pepsi). Indirect competitors offer products that satisfy the same need but in different ways (e.g., a cinema vs a bowling alley).' } },
  { id: 'sum-1', type: 'summary', data: { text: 'Competition forces businesses to become more efficient, innovate, and lower prices, which ultimately benefits consumers. However, excessive competition can erode profit margins and drive less efficient firms out of the market.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Competition brings lower prices, better quality, and more choice for consumers. For businesses, it requires efficiency and innovation, while often putting downward pressure on profit margins.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'Define competition in a business context.', answer: 'The rivalry among sellers trying to achieve goals such as increasing profits, market share, and sales volume.' },
    { id: 'cue-2', blockId: 'list-1', prompt: 'Give two ways consumers benefit from high market competition.', answer: 'They typically face lower prices and enjoy a wider choice of better quality products.' },
    { id: 'cue-3', blockId: 'list-2', prompt: 'What is a negative potential impact of intense competition on businesses?', answer: 'Reduced profit margins due to price wars and higher marketing or R&D costs.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'What is the difference between direct and indirect competitors?', answer: 'Direct competitors sell identical/similar products; indirect competitors sell alternative products that satisfy the same consumer need.' }
  ]
});

makeNote(5, 'Risk vs uncertainty', [
  { id: 'obj-1', type: 'objective', data: { text: 'Differentiate between risk and uncertainty in the context of business decision-making.' } },
  { id: 'h-1', type: 'heading', data: { text: 'Defining Risk', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Risk refers to a situation where the possible outcomes of a decision are known, and mathematical probabilities can be assigned to those outcomes. Risks can often be quantified, planned for, or insured against.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Defining Uncertainty', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'Uncertainty refers to situations where events are unpredictable. With uncertainty, outcomes are unknown, and probabilities cannot be assigned mathematically. It is difficult or impossible to insure against uncertainty.' } },
  { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Difference between Risk and Uncertainty',
      headers: ['Feature', 'Risk', 'Uncertainty'],
      rows: [
        ['Predictability', 'Outcomes are known or can be estimated', 'Outcomes are completely unknown'],
        ['Probability', 'Can be calculated mathematically', 'Cannot be calculated'],
        ['Insurability', 'Often insurable (e.g., fire, theft)', 'Generally uninsurable (e.g., changes in consumer taste)'],
        ['Management', 'Managed through planned mitigation', 'Requires flexibility and contingency planning']
      ]
  }},
  { id: 'callout-1', type: 'callout', data: { style: 'tip', title: 'Mitigating Risk', text: 'Businesses can mitigate risk through market research, diversification, and purchasing insurance policies.' } },
  { id: 'sum-1', type: 'summary', data: { text: 'While risk involves quantifiable and predictable potential negative occurrences that a business can plan or insure for, uncertainty involves unpredictable, unquantifiable events that require high strategic adaptability.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Risk involves known outcomes that can be assigned probabilities and insured against. Uncertainty involves completely unpredictable future events with no calculable probability.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'What is business risk?', answer: 'A situation where the possible outcomes are known and quantifiable probabilities can be attached to them.' },
    { id: 'cue-2', blockId: 'p-2', prompt: 'What is business uncertainty?', answer: 'A situation in which outcomes are completely unpredictable and mathematical probabilities cannot be assigned.' },
    { id: 'cue-3', blockId: 'tbl-1', prompt: 'Which of the two – risk or uncertainty – is generally insurable?', answer: 'Risk is insurable, while uncertainty is not.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'State one way a firm can attempt to mitigate risk.', answer: 'By conducting market research, diversifying its product portfolio, or purchasing insurance.' }
  ]
});

makeNote(6, 'Primary market research methods', [
  { id: 'obj-1', type: 'objective', data: { text: 'Understand primary (field) market research, evaluate its methods, and weigh its advantages and disadvantages.' } },
  { id: 'h-1', type: 'heading', data: { text: 'What is Primary Research?', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Primary research (often called field research) involves the collection of first-hand data newly generated by a business for a specific purpose. It does not rely on previously published data.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Typical Methods', level: 2 } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Questionnaires and Surveys: Gathering broad quantitative or qualitative data.' },
      { text: 'Focus Groups: In-depth discussions with small groups of target consumers.' },
      { text: 'Interviews: Face-to-face or telephone conversations for detailed qualitative insights.' },
      { text: 'Observations/Test Marketing: Watching consumer behavior or trialing a product in a limited area.' }
  ]}},
  { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Qualitative vs Quantitative', text: 'Quantitative data deals with numbers and statistics (e.g., percentages), whereas qualitative data explores attitudes, feelings, and beliefs (e.g., opinions).' } },
  { id: 'h-3', type: 'heading', data: { text: 'Pros and Cons of Primary Research', level: 2 } },
  { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Strengths and Limitations',
      headers: ['Strengths', 'Limitations'],
      rows: [
        ['Directly relevant to specific business needs', 'Often time-consuming to gather and process'],
        ['Up-to-date and exclusive (hidden from competitors)', 'Can be very expensive (especially focus groups or large surveys)'],
        ['Provides highly specific insights', 'Risk of bias in questionnaire design or interviewer influence']
      ]
  }},
  { id: 'sum-1', type: 'summary', data: { text: 'Primary research generates highly relevant and exclusive data tailored to specific business decisions. While effective, it is often resource-intensive, requiring considerable time and money.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Primary research (field research) collects new, first-hand data specific to a business need. It is relevant and up-to-date, but can be expensive and time-consuming.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'Define primary market research.', answer: 'The collection of new, first-hand data that did not previously exist, gathered entirely for a specific purpose.' },
    { id: 'cue-2', blockId: 'list-1', prompt: 'List three methods of conducting primary research.', answer: 'Surveys/questionnaires, focus groups, interviews, and test marketing/observation.' },
    { id: 'cue-3', blockId: 'tbl-1', prompt: 'State two advantages of primary market research.', answer: 'It is directly relevant to the specific needs of the business, and the data is exclusive and up-to-date.' },
    { id: 'cue-4', blockId: 'tbl-1', prompt: 'State two disadvantages of primary market research.', answer: 'It can be expensive to conduct and very time-consuming.' }
  ]
});

makeNote(7, 'Secondary market research sources', [
  { id: 'obj-1', type: 'objective', data: { text: 'Understand secondary (desk) market research, identify its sources, and evaluate its usefulness to a business.' } },
  { id: 'h-1', type: 'heading', data: { text: 'What is Secondary Research?', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Secondary research (desk research) involves the collection and analysis of existing data that has already been gathered for another purpose. It essentially means utilizing pre-published information.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Common Sources', level: 2 } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Internal sources: Past sales figures, annual reports, historical customer data.' },
      { text: 'External sources: Government reports, census data, industry magazines, internet articles.' },
      { text: 'Commercial reports: Data compiled by market research agencies like Mintel or Nielsen.' }
  ]}},
  { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Strengths and Limitations of Secondary Research',
      headers: ['Strengths', 'Limitations'],
      rows: [
        ['Quick and easy to access', 'May not be specifically relevant to the firm\'s needs'],
        ['Often cheap or completely free (e.g., government data)', 'Data might be outdated'],
        ['Provides an excellent broad overview of a market', 'Competitors have access to the exact same information']
      ]
  }},
  { id: 'callout-1', type: 'callout', data: { style: 'warning', title: 'Data Accuracy', text: 'Always verify the source of secondary data. Poorly conducted prior research or biased reports can lead a business to make heavily flawed decisions.' } },
  { id: 'sum-1', type: 'summary', data: { text: 'Secondary research relies on existing information, making it a fast and cheap starting point. While useful for broad context, it lacks the specific relevance, exclusivity, and timeliness of primary research.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Secondary research uses pre-existing data (desk research). It is generally faster and cheaper than primary research but may be outdated, irrelevant, or accessible to competitors.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'Define secondary market research.', answer: 'The collation and analysis of existing data that has already been gathered for another purpose.' },
    { id: 'cue-2', blockId: 'list-1', prompt: 'Give two examples of external sources of secondary research.', answer: 'Government census data, industry magazines, or commercial market research reports.' },
    { id: 'cue-3', blockId: 'tbl-1', prompt: 'State two advantages of secondary research.', answer: 'It is typically quick to access and often cheap or free.' },
    { id: 'cue-4', blockId: 'tbl-1', prompt: 'What is a major limitation of secondary research?', answer: 'The data might be outdated, lacks specific relevance, and is available to competitors.' }
  ]
});

makeNote(8, 'Sampling methods', [
  { id: 'obj-1', type: 'objective', data: { text: 'Explore how businesses select respondents for primary research using different sampling methods.' } },
  { id: 'h-1', type: 'heading', data: { text: 'What is Sampling?', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Sampling involves selecting a limited group of people (a sample) to represent the characteristics of the target population as a whole. It is necessary because interviewing an entire market population is usually impossible.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Common Sampling Methods', level: 2 } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Random Sampling: Everyone in the population has an equal chance of being selected. Avoids bias but can be impractical.' },
      { text: 'Quota Sampling: The population is divided into groups matching target characteristics (e.g., 60% female, 40% male), and respondents are found to fill these quotas. Widely used and cost-effective.' },
      { text: 'Stratified Sampling: Similar to quota, but the participants within the target categories are chosen randomly.' }
  ]}},
  { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Sample Size Matters', text: 'A larger sample size reduces the margin of error and gives more accurate data. However, larger samples naturally cost more time and money to execute.' } },
  { id: 'sum-1', type: 'summary', data: { text: 'Sampling allows a business to conduct research efficiently by selecting a representative subgroup of consumers. Random sampling prevents bias, while quota sampling ensures demographic targets are accurately hit in a practical, cost-effective way.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Sampling involves picking a representative portion of the target population. Random and quota sampling are common methods balancing accuracy against cost and time constraints.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'Why do businesses use sampling?', answer: 'Because it is too costly and time-consuming to research the entire target population.' },
    { id: 'cue-2', blockId: 'list-1', prompt: 'Explain random sampling.', answer: 'Selecting respondents where every member of the target population has an equal probability of being chosen.' },
    { id: 'cue-3', blockId: 'list-1', prompt: 'Explain quota sampling.', answer: 'Segmenting the target population into groups based on key demographics, then determining a specified number (quota) of respondents needed from each group.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'What is the relationship between sample size and data confidence?', answer: 'A larger sample size reduces the margin of error, making the research findings more statistically reliable.' }
  ]
});

makeNote(9, 'Product vs market orientation', [
  { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between product-orientated and market-orientated business strategies and evaluate their effectiveness.' } },
  { id: 'h-1', type: 'heading', data: { text: 'Market Orientation', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'A market-orientated business places the customer at the center of all decision-making. Continuous market research is conducted to discover what consumers want, and products are subsequently developed to satisfy those specific needs.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Product Orientation', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'A product-orientated business focuses primarily on its internal capabilities, the production process, and the product itself. They develop an innovative or high-quality product first, and then attempt to find a market or heavily persuade consumers to buy it.' } },
  { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Comparing Orientations',
      headers: ['Feature', 'Market Orientation', 'Product Orientation'],
      rows: [
        ['Focus', 'Consumer needs and desires', 'Product quality and innovation'],
        ['Research role', 'Heavy reliance on primary research before development', 'Light research, usually done after product creation to aid marketing'],
        ['Risk level', 'Lower risk (demand is known to exist)', 'Higher risk (product may fail to find eager buyers)'],
        ['Innovation', 'Often incremental, responding to requests', 'Potential to create revolutionary new markets (e.g., the first iPhone)']
      ]
  }},
  { id: 'callout-1', type: 'callout', data: { style: 'worked', title: 'Steve Jobs and Product Orientation', text: 'Apple initially demonstrated strong product orientation. Steve Jobs famously stated, "People don\'t know what they want until you show it to them." Apple focused on groundbreaking tech, trusting consumers would follow.' } },
  { id: 'sum-1', type: 'summary', data: { text: 'Market orientation minimizes risk by delivering exactly what careful research shows the customer wants. Product orientation focuses on building the best possible item via internal expertise, which bears higher market risk but can yield revolutionary breakthroughs.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Market-orientated firms research consumer needs first, minimizing risk. Product-orientated firms rely on internal capabilities to build great products, hoping to attract an audience post-creation.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'What characterizes a market-orientated business?', answer: 'It actively consults consumers through research and produces goods specifically designed to meet identified needs.' },
    { id: 'cue-2', blockId: 'p-2', prompt: 'What characterizes a product-orientated business?', answer: 'It focuses on its own internal strengths to engineer a high-quality product, then tries to sell it, assuming a market will exist.' },
    { id: 'cue-3', blockId: 'tbl-1', prompt: 'Which orientation typically involves a higher risk of failure and why?', answer: 'Product orientation, because the business creates a product without prior assurance that consumers actually want it.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'Why might a tech company choose to be product-orientated?', answer: 'To develop completely revolutionary products that consumers could not have asked for because they didn\'t exist before.' }
  ]
});

makeNote(10, 'Market mapping and segmentation', [
  { id: 'obj-1', type: 'objective', data: { text: 'Understand how markets are segmented and how market maps are utilized to position products against competitors.' } },
  { id: 'h-1', type: 'heading', data: { text: 'Market Segmentation', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Segmentation involves breaking down a large, uniform market into smaller, identifiable subgroups (segments) of consumers with similar needs, characteristics, or behaviors. Common segmentation methods include demographic (age, gender), geographic, income, and psychographic (lifestyles) criteria.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Market Mapping (Positioning)', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'A market map (or positioning map) is a two-dimensional diagram that plots competitor products against two key variables, such as price and quality. It provides a visual representation of how consumers perceive various brands within a sector.' } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Identifies gaps in the market (unmet needs).' },
      { text: 'Helps a business realize its direct and indirect competitors.' },
      { text: 'Assists in product repositioning strategies.' }
  ]}},
  { id: 'callout-1', type: 'callout', data: { style: 'tip', title: 'The Subjectivity of Market Maps', text: 'Market maps are highly valuable but completely subjective based on whoever is conducting the analysis. One consumer\'s "high quality" perception might be totally different from another\'s.' } },
  { id: 'sum-1', type: 'summary', data: { text: 'Market segmentation allows a business to efficiently target specific customer groups, heavily informing marketing and design efforts. Market maps visually align brands against two critical variables to highlight competitive standing and spot gaps in consumer offerings.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Segmentation groups consumers by characteristics like demographics or income. Market mapping visually plots competitors against two variables to identify market gaps and competitive positioning.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'What is market segmentation?', answer: 'The process of grouping consumers into smaller, distinct segments based on shared characteristics, behaviors, or needs.' },
    { id: 'cue-2', blockId: 'p-1', prompt: 'List three common ways to segment a market.', answer: 'Demographic (age/gender), geographic (location), and income.' },
    { id: 'cue-3', blockId: 'p-2', prompt: 'What is a market map?', answer: 'A two-dimensional diagram that plots all competing brands/products in a market against two specific variables.' },
    { id: 'cue-4', blockId: 'list-1', prompt: 'How does a market map help a business?', answer: 'It visually identifies gaps in the market and helps understand the level of direct competition.' }
  ]
});

makeNote(11, 'Differentiation and added value', [
  { id: 'obj-1', type: 'objective', data: { text: 'Explore the methods by which a business can differentiate its products and the critical importance of adding value.' } },
  { id: 'h-1', type: 'heading', data: { text: 'Product Differentiation', level: 2 } },
  { id: 'p-1', type: 'paragraph', data: { text: 'Differentiation is the process of making a product or service distinct from its competitors in a way that appeals to a specific target audience. It creates a unique selling point (USP) that separates the brand from generic alternatives.' } },
  { id: 'h-2', type: 'heading', data: { text: 'Having a Unique Selling Point (USP)', level: 2 } },
  { id: 'p-2', type: 'paragraph', data: { text: 'A USP is a specific feature or aspect of a product that clearly differentiates it. It could be revolutionary design, unparalleled customer service, ethical sourcing, or a highly recognizable brand image.' } },
  { id: 'h-3', type: 'heading', data: { text: 'Added Value', level: 2 } },
  { id: 'p-3', type: 'paragraph', data: { text: 'Added value is the difference between the final selling price of a product and the cost of the raw materials used to create it. Highly differentiated products and strong brands allow firms to increase the added value.' } },
  { id: 'eq-1', type: 'equation', data: { html: 'Added Value = Selling Price − Cost of Raw Materials', caption: 'Formula for Added Value' } },
  { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: 'Methods to Add Value: Excellent design and aesthetics.' },
      { text: 'Customization or personalization.' },
      { text: 'Strong branding and prestigious image.' },
      { text: 'Exceptional convenience (e.g., drive-thru or instant delivery).' }
  ]}},
  { id: 'callout-1', type: 'callout', data: { style: 'warning', title: 'Added Value vs Profit', text: 'Always remember: Added value is NOT the same as profit. Added value subtracts only raw materials, whereas profit must also subtract fixed costs like rent, salaries, and marketing.' } },
  { id: 'sum-1', type: 'summary', data: { text: 'Differentiation separates a product from its competitors, providing a USP that customers desire. Successful differentiation justifies a higher selling price, thereby increasing the added value generated by the business.' } }
], {
  enabled: true,
  ready: true,
  summaryText: 'Differentiation creates a USP that separates a product from competitors. Added value is the difference between final price and raw material cost, which can be maximized through design, convenience, and branding.',
  cues: [
    { id: 'cue-1', blockId: 'p-1', prompt: 'What is product differentiation?', answer: 'Making a product distinct from competing products in the market by offering unique features or branding.' },
    { id: 'cue-2', blockId: 'p-2', prompt: 'What does USP stand for?', answer: 'Unique Selling Point (or Proposition) – a feature that distinctly separates a business from its rivals.' },
    { id: 'cue-3', blockId: 'eq-1', prompt: 'How is added value calculated?', answer: 'Selling Price minus the Cost of Raw Materials.' },
    { id: 'cue-4', blockId: 'callout-1', prompt: 'Why is added value not the same as profit?', answer: 'Because calculating profit also requires deducting operating expenses and fixed costs (like wages and electricity), not just raw materials.' }
  ]
});

console.log('Script execution complete');
