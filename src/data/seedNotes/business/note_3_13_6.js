export const note_business_3_13_6 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand and use decision trees to calculate expected values and guide strategic choices.' } },
    { id: 'h1', type: 'heading', data: { text: 'Decision Trees', level: 2 } },
    { id: 'p1', type: 'paragraph', data: { text: 'Decision trees are mathematical models used by managers to map out the potential outcomes, costs, probabilities, and financial rewards of alternative courses of action. It enables a quantifiable comparison.' } },
    { id: 'h2', type: 'heading', data: { text: 'Structure of a Decision Tree', level: 3 } },
    { id: 'list1', type: 'list', data: { style: 'bullet', items: [
      { text: '**Square nodes:** Represent a decision point where management must choose between options.' },
      { text: '**Circular nodes:** Represent chance nodes where probabilities of different outcomes occur (e.g., high success or low success).' },
      { text: '**Branches:** Lines connecting nodes showing different routes and potential paths.' },
      { text: '**Probabilities:** The estimated chance of a specific outcome happening (always adds up to 1.0).' },
      { text: '**Financial Outcomes:** The predicted net profit or revenue resulting from a branch.' }
    ]} },
    { id: 'h3', type: 'heading', data: { text: 'Calculating Expected Value (EV)', level: 3 } },
    { id: 'p2', type: 'paragraph', data: { text: 'The **Expected Value (EV)** is the average financial outcome of a decision node, calculated by multiplying the possibility of an outcome by the expected financial return.' } },
    { id: 'eq', type: 'equation', data: { html: '<p>EV = (Probability 1 × Return 1) + (Probability 2 × Return 2)</p>', caption: 'Expected Value calculation at a chance node' } },
    { id: 'call1', type: 'callout', data: { style: 'worked', title: 'Example: Expected Value', text: 'Option: Launch a new product.\nHigh Success: 0.6 probability, £500k return.\nLow Success: 0.4 probability, £100k return.\nExpected Value = (0.6 × 500,000) + (0.4 × 100,000) = 300,000 + 40,000 = £340,000.' } },
    { id: 'p3', type: 'paragraph', data: { text: 'To find the **Net Expected Value (Net Gain)**, simply subtract the initial cost of taking that option from the overall Expected Value.' } },
    { id: 'table', type: 'comparisonTable', data: {
      caption: 'Evaluation of Decision Trees',
      headers: ['Strengths', 'Weaknesses'],
      rows: [
        ['Provides logic and a quantitative backing for strategic choices, preventing bias.', 'Assigning probabilities is incredibly subjective and open to management optimism bias.'],
        ['Forces management to thoroughly regard all possible options, including doing nothing.', 'Does not account for qualitative changes, like the impact of a choice on brand reputation.'],
        ['Easy to communicate the financial risks to stakeholders and shareholders.', 'External market environments change quickly; an EV calculated today may be irrelevant tomorrow.']
      ]
    }},
    { id: 'sum', type: 'summary', data: { text: 'Decision trees use probability and financial data to calculate Expected Values and Net Gains for different options. Whilst highly logical, the model heavily relies on the accuracy of the probabilities estimated.' } },
    {
      id: 'enr-svg-dtree',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 400"><rect width="620" height="400" fill="#0f172a"/><rect x="20" y="170" width="80" height="40" rx="4" fill="#4f46e5" stroke="#3730a3" stroke-width="2"/><text x="60" y="194" text-anchor="middle" font-size="11" fill="#1e293b" font-family="sans-serif">Decision</text><line x1="100" y1="175" x2="170" y2="130" stroke="#6b7280" stroke-width="2"/><line x1="100" y1="205" x2="170" y2="250" stroke="#6b7280" stroke-width="2"/><circle cx="180" cy="125" r="18" fill="#f59e0b" stroke="#d97706" stroke-width="2"/><text x="180" y="129" text-anchor="middle" font-size="10" fill="#1e293b" font-family="sans-serif">A</text><circle cx="180" cy="255" r="18" fill="#f59e0b" stroke="#d97706" stroke-width="2"/><text x="180" y="259" text-anchor="middle" font-size="10" fill="#1e293b" font-family="sans-serif">B</text><line x1="198" y1="120" x2="290" y2="80" stroke="#10b981" stroke-width="2"/><line x1="198" y1="130" x2="290" y2="155" stroke="#ef4444" stroke-width="2"/><line x1="198" y1="250" x2="290" y2="210" stroke="#10b981" stroke-width="2"/><line x1="198" y1="260" x2="290" y2="290" stroke="#ef4444" stroke-width="2"/><text x="235" y="75" font-size="10" fill="#059669" font-family="sans-serif">Success 0.7</text><text x="235" y="150" font-size="10" fill="#dc2626" font-family="sans-serif">Failure 0.3</text><text x="235" y="205" font-size="10" fill="#059669" font-family="sans-serif">Success 0.5</text><text x="235" y="285" font-size="10" fill="#dc2626" font-family="sans-serif">Failure 0.5</text><rect x="295" y="65" width="90" height="30" rx="3" fill="#0a2e1a"/><text x="340" y="84" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#065f46">£500k</text><rect x="295" y="140" width="90" height="30" rx="3" fill="#3d1212"/><text x="340" y="159" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#991b1b">-£50k</text><rect x="295" y="195" width="90" height="30" rx="3" fill="#0a2e1a"/><text x="340" y="214" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#065f46">£400k</text><rect x="295" y="275" width="90" height="30" rx="3" fill="#3d1212"/><text x="340" y="294" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#991b1b">-£80k</text><rect x="410" y="105" width="180" height="50" rx="4" fill="#1c3a64" stroke="#3b82f6" stroke-width="1"/><text x="500" y="126" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#1d4ed8">EMV(A) = 0.7×500 + 0.3×(-50)</text><text x="500" y="144" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1d4ed8" font-weight="bold">= £335k</text><rect x="410" y="225" width="180" height="50" rx="4" fill="#1c3a64" stroke="#3b82f6" stroke-width="1"/><text x="500" y="246" text-anchor="middle" font-size="10" font-family="sans-serif" fill="#1d4ed8">EMV(B) = 0.5×400 + 0.5×(-80)</text><text x="500" y="264" text-anchor="middle" font-size="11" font-family="sans-serif" fill="#1d4ed8" font-weight="bold">= £160k</text><text x="310" y="365" font-size="12" font-family="sans-serif" fill="#4f46e5" font-weight="bold">Choose A: highest EMV (£335k)</text></svg>`,
        caption: 'Decision tree: compare EMV of two options — choose the highest expected monetary value'
      }
    },
    {
      id: 'enr-callout-worked-ba',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'British Airways — maintenance decision tree',
        text: 'BA decision: Full overhaul now (£2m cost) vs reactive repair later. Probability engine fails in 2 years = 0.3, cost if fails = £10m. EMV of failure = 0.3×£10m = £3m. Since £3m EMV of failure > £2m overhaul cost, do the overhaul. Decision trees make the implicit cost of risk explicit and comparable.'
      }
    },
    {
      id: 'enr-callout-tip-dtree',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: decision tree limitations',
        text: 'EMV = Σ(probability × outcome) for each chance node, then subtract costs. A positive net EMV suggests the option is worthwhile — BUT decision trees assume probabilities are accurate, which they rarely are. Always evaluate the quality/source of probability estimates in your answer.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "When building a decision tree, multiply probabilities downward and values rightward: Each branch shows probability \u00d7 payoff. Compare expected values of competing options clearly. Then note non-financial factors (risk appetite, brand risk) that might override the math."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Treating decision tree outcomes as certainties after calculation. Decision trees *quantify* expected value but cannot eliminate the possibility of worst-case outcomes. A \u00a310k expected value could come from 10% chance of \u00a3100k gain and 90% chance of zero\u2014acknowledge this risk."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Decision trees map options, probabilities, and rewards to calculate expected value and net gain.',
    cues: [
      { id: 'c1', blockId: 'list1', prompt: 'What does a square node represent on a decision tree?', answer: 'A decision point where management must choose between options.' },
      { id: 'c2', blockId: 'list1', prompt: 'What does a circular node represent?', answer: 'A chance node showing uncertain outcomes and probabilities.' },
      { id: 'c3', blockId: 'eq', prompt: 'How do you calculate Expected Value (EV)?', answer: 'Multiply the probability of each outcome by its expected financial return and add them together.' },
      { id: 'c4', blockId: 'table', prompt: 'What is a major limitation of decision trees?', answer: 'The probabilities assigned to outcomes are often subjective estimates, vulnerable to optimism bias.' }
    ]
  }
};