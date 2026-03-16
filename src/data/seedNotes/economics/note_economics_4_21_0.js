export const note_economics_4_21_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between absolute and relative poverty, explain their measurement, and evaluate the significance of each concept for policy.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Absolute vs Relative Poverty', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Poverty can be defined and measured in two fundamentally different ways: <strong>absolute poverty</strong> measures deprivation against a fixed material standard, while <strong>relative poverty</strong> measures deprivation relative to the living standards prevailing in a particular society. Both concepts capture important aspects of poverty but have different policy implications and lead to different conclusions about progress.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Absolute Poverty', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Absolute poverty</strong> is defined as lacking the minimum resources required for basic survival and physical well-being — sufficient food, shelter, clean water, and sanitation. The <strong>World Bank international poverty lines</strong> provide globally comparable measures: $2.15 per day (PPP 2017 prices) for extreme poverty (updated in 2022 from the $1.90 line). At this threshold, approximately 700 million people globally live in extreme poverty — concentrated in Sub-Saharan Africa and South Asia. The share in extreme poverty has fallen dramatically from ~36% in 1990 to ~9% in 2019, primarily due to growth in China and East Asia.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Relative Poverty', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<strong>Relative poverty</strong> defines poverty as having income or resources substantially below the prevailing standard in a society. In the UK, the most commonly used measure is having a household income below <strong>60% of the median income</strong> (after housing costs, adjusted for household size). The EU uses the same 60% threshold. Relative poverty can persist or worsen even when absolute living standards rise — if the median income grows faster than incomes at the bottom, relative poverty increases. In the UK, approximately 14-17% of the population (around 10 million people) are in relative poverty.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Absolute vs Relative Poverty',
        headers: ['Feature', 'Absolute Poverty', 'Relative Poverty'],
        rows: [
          ['Definition', 'Below a fixed minimum threshold (basic survival needs)', 'Below a proportion of median income in society (typically 60%)'],
          ['Measurement', 'World Bank $2.15/day (PPP); national subsistence baskets', 'Household income surveys; 60% of median income in UK/EU'],
          ['Can improve while the other worsens?', 'Yes — absolute poverty can fall while relative poverty rises (if growth benefits middle more than bottom)', 'Yes — relative poverty can worsen while absolute poverty falls'],
          ['Appropriate context', 'Developing countries; comparing across countries over time', 'Developed countries; examining social exclusion and inequality within society'],
          ['Policy focus', 'Minimum income floors; basic service provision', 'Redistribution; reducing income inequality; benefits adequacy'],
          ['Main criticism', 'Fixed threshold may not account for rising social expectations; PPP comparisons imperfect', 'Moving target — impossible to eliminate if inequality persists; may conflate poverty with inequality']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Poverty vs Inequality',
        text: 'Absolute poverty and inequality are related but distinct concepts. It is possible to have falling poverty (everyone richer) with rising inequality (the rich getting richer faster). Relative poverty is partly a measure of inequality — if the income distribution widens, relative poverty can rise even as absolute living standards improve throughout the distribution.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When a question mentions "poverty", clarify which type you are discussing — examiners reward the distinction. Note that the UK uses 60% of median income (relative measure) as its main poverty benchmark. When discussing global poverty reduction, use the World Bank absolute measure — this shows dramatic progress driven by China and India.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Absolute poverty measures deprivation against a fixed minimum (World Bank $2.15/day) and has fallen dramatically since 1990; relative poverty measures deprivation relative to median income (60% threshold in UK/EU) and can persist even as absolute living standards rise.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'State the World Bank extreme poverty line and how many people live below it globally.',
        answer: 'The World Bank\'s extreme poverty line is $2.15 per day (PPP, 2017 prices, updated 2022). Approximately 700 million people live below this threshold, concentrated in Sub-Saharan Africa and South Asia. The share has fallen from ~36% in 1990 to ~9% in 2019.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'How is relative poverty measured in the UK?',
        answer: 'In the UK, relative poverty is defined as having household income below 60% of the median income (after housing costs, adjusted for household size). Approximately 14-17% of the UK population (around 10 million people) are in relative poverty by this measure.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'Give an example of how absolute poverty can fall while relative poverty rises.',
        answer: 'If economic growth raises incomes across the distribution but benefits the middle and upper groups proportionally more than the poorest, median income rises faster than the incomes of the poorest. This raises the relative poverty threshold (60% of rising median) even if the poorest are materially better off in absolute terms.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_21_0;
