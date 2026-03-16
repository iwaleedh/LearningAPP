export const note_economics_1_1_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the role of economic models, the meaning of ceteris paribus, and the key assumptions economists use to simplify analysis.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is an Economic Model?', level: 2 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'An <strong>economic model</strong> is a simplified representation of reality designed to highlight key economic relationships while omitting complicating details. Models allow economists to make predictions and test theories. They can take the form of diagrams (e.g. supply and demand curves), mathematical equations, or verbal descriptions.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition: Ceteris Paribus',
        text: '<strong>Ceteris paribus</strong> is a Latin phrase meaning <strong>"all other things being equal"</strong> or "all other things remaining constant." Economists use this assumption to isolate the effect of one variable on another, holding all other influencing factors fixed.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Why Economists Use Ceteris Paribus', level: 2 },
      terms: []
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'In the real world, many variables change simultaneously. To study, for example, how a price change affects quantity demanded, economists assume income, tastes, and prices of related goods are <strong>held constant</strong>. This allows a clear, testable relationship to be identified. Without ceteris paribus, it would be impossible to determine which variable caused an observed outcome.' }] } },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Ceteris Paribus in Action',
        text: 'Question: If the price of coffee rises, what happens to quantity demanded?<br/><br/><strong>Ceteris paribus assumption:</strong> Income, price of substitutes (e.g. tea), and consumer tastes are all held constant.<br/><strong>Conclusion:</strong> A rise in price leads to a fall in quantity demanded — this is a movement along the demand curve. If income also changed at the same time, it would be impossible to separate the two effects.'
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Core Assumptions in Economic Models', level: 2 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Key Assumptions Used in Economic Models',
        headers: ['Assumption', 'Meaning', 'Used In'],
        rows: [
          ['<strong>Rationality</strong>', 'Agents make decisions that maximise their well-being given available information', 'Consumer and firm behaviour models'],
          ['<strong>Profit maximisation</strong>', 'Firms aim to maximise the difference between total revenue and total cost', 'Theory of the firm'],
          ['<strong>Utility maximisation</strong>', 'Consumers choose the bundle of goods that gives them the greatest satisfaction', 'Demand theory'],
          ['<strong>Perfect information</strong>', 'All buyers and sellers have complete knowledge of prices and quality', 'Perfect competition model'],
          ['<strong>Ceteris paribus</strong>', 'All variables except the one being studied are held constant', 'Virtually all economic models']
        ]
      },
      terms: []
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Limitations of Economic Models', level: 2 },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Unrealistic assumptions:</strong> Rationality and perfect information rarely hold in the real world — behavioural economics has shown people often act irrationally.' },
          { text: '<strong>Oversimplification:</strong> By holding variables constant, models may miss important interactions between economic variables.' },
          { text: '<strong>Data limitations:</strong> Economic data is often incomplete, subject to revision, or collected with a lag.' },
          { text: '<strong>Changing behaviour:</strong> Human behaviour changes over time, so a model that worked in the past may not work in the future (Lucas Critique).' },
          { text: '<strong>Value judgements:</strong> Choosing which variables to include in a model reflects the modeller\'s perspective.' }
        ]
      },
      terms: []
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students sometimes treat model predictions as definitive facts. Remember: all economic models are <strong>simplifications</strong>. When evaluating a model\'s conclusion, always consider whether its assumptions are realistic in the specific context being discussed.'
      },
      terms: []
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If asked to evaluate an economic argument, you can critique the <strong>ceteris paribus assumption</strong> by explaining what other variables might change simultaneously and how that would affect the conclusion. This demonstrates sophisticated analytical thinking.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Economic models simplify reality using assumptions such as rationality and ceteris paribus, allowing economists to isolate cause-and-effect relationships, though all models have limitations due to their simplifying assumptions.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What does ceteris paribus mean and why is it used?', answer: '"All other things being equal" — it isolates the effect of one variable by holding all others constant, making cause-and-effect relationships clear.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Name three key assumptions used in economic models.', answer: 'Rationality (agents maximise utility/profit), perfect information (full knowledge of prices/quality), and profit maximisation (firms maximise TR minus TC).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Give two limitations of economic models.', answer: 'Unrealistic assumptions (e.g. perfect rationality rarely holds) and oversimplification (holding variables constant ignores important interactions).' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'Give an example of how ceteris paribus is applied when analysing demand for coffee.', answer: 'When studying the effect of a price rise on quantity demanded, we assume income, taste, and substitute prices are constant, so we can isolate the price effect.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_1_1;
