export const note_biology_4_5_25 = {
  blocks: [
    {
      id: 'obj-25',
      type: 'objective',
      data: { text: 'Evaluate statements about climate change, understanding the causes of contentiousness, data reliability, and potential biases.' }
    },
    {
      id: 'h-contentious-intro',
      type: 'heading',
      data: { text: 'Scientific Consensus and Contention', level: 2 }
    },
    {
      id: 'p-consensus',
      type: 'paragraph',
      data: { text: 'There is a strong consensus among the scientific community that increasing greenhouse gas concentrations cause global warming, and that human activities are the direct cause of these increases. Despite this, some individuals claim the correlation is not a causal relationship, suggesting global warming is just a natural cycle.' }
    },
    {
      id: 'h-evaluating-data',
      type: 'heading',
      data: { text: 'Evaluating the Data', level: 3 }
    },
    {
      id: 'p-eval-data',
      type: 'paragraph',
      data: { text: 'When evaluating statements about climate change, consider how good the evidence is:' }
    },
    {
      id: 'list-evaluating',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Completeness:** Does the statement address all the evidence, or just part of it? (E.g. temperatures may drop in one specific year, but the long-term trend is strongly upward).',
          '**Reliability:** Does the data come from several independent studies? Is there plenty of evidence?',
          '**Statistical Significance:** Has proper statistical analysis been performed to show the findings are not just due to chance?'
        ]
      }
    },
    {
      id: 'h-bias',
      type: 'heading',
      data: { text: 'Identifying Bias', level: 3 }
    },
    {
      id: 'p-bias',
      type: 'paragraph',
      data: { text: 'It is vital to find out whether a statement comes from a trustworthy, unbiased source. Bias can arise from financial, political, or emotional interests:' }
    },
    {
      id: 'list-bias-sources',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Financial/Political interests:** Individuals working for oil companies or governments whose economies depend on fossil fuels may be biased to lower the perceived threat of climate change.',
          '**Green energy interests:** Individuals working for renewable energy companies might be biased because a move away from fossil fuels financially benefits their technologies.',
          '**Emotional stakes:** Conservation campaigners may be biased because they passionately believe humans are causing climate change and have an emotional stake in the outcome of studies.'
        ]
      }
    },
    {
      id: 'callout-complexity',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Climate Complexity',
        text: 'Climate is highly complex. Scientists must be careful not to attribute one specific extreme weather event solely to climate change. Instead, they point out its place within a broader trend of increasingly extreme weather. Also, climate change is not expected to be purely linear; tipping points can cause sudden, faster changes.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What does the general scientific consensus state about global warming?' },
      { id: 'cue-2', prompt: 'Name three factors you should consider when evaluating climate change evidence.' },
      { id: 'cue-3', prompt: 'Why might an oil company employee or a conservationist show bias in presenting climate data?' },
      { id: 'cue-4', prompt: 'Why is it difficult to make exact predictions about future climate conditions?' }
    ],
    summaryText: 'The consensus is that human activities increase greenhouse gases, directly causing global warming. Evaluate completeness, reliability (independent studies), and statistical significance. Oil workers have financial interests to downplay effects, while conservationists have emotional stakes. Complexity and "tipping points" make precise predictions very difficult.'
  }
};
