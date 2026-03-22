export const note_economics_4_21_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate different methods of measuring poverty including the headcount ratio, poverty gap, and Multidimensional Poverty Index (MPI).'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Poverty Measurement Methods', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'How poverty is measured significantly affects what policies are recommended and how progress is assessed. Simple income-based measures capture economic deprivation but miss important non-monetary dimensions of poverty. More sophisticated measures attempt to capture the multidimensional nature of deprivation but are more complex to compute and interpret.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Headcount Ratio', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The <strong>headcount ratio</strong> (poverty incidence) simply counts the proportion of the population living below a poverty line: P₀ = (number of poor) / (total population). It is the most commonly cited measure — the World Bank\'s "$2.15/day" figures use this. It is simple, transparent, and internationally comparable. However, it ignores the depth of poverty — someone $0.10 below the line counts the same as someone $2 below it. It also does not reflect inequality among the poor.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Poverty Gap', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'The <strong>poverty gap</strong> measures the average shortfall of income below the poverty line, expressed as a percentage of the poverty line. It captures the depth of poverty — how poor are the poor? The poverty gap index = (average shortfall from poverty line) / poverty line, averaged across the whole population (counting the non-poor as having zero gap). It tells us the minimum cost of eliminating poverty through perfectly targeted transfers, which the headcount does not.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Multidimensional Poverty Index (MPI)', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'The <strong>Multidimensional Poverty Index (MPI)</strong>, developed by Alkire and Foster for UNDP/OPHI, captures deprivation across three dimensions and ten indicators: <strong>Health</strong> (child mortality, nutrition), <strong>Education</strong> (years of schooling, school attendance), <strong>Living Standards</strong> (cooking fuel, sanitation, drinking water, electricity, housing, assets). A person is considered multidimensionally poor if they are deprived in at least one-third (weighted) of the indicators. The MPI = (Headcount) × (Intensity of deprivation). Around 1.1 billion people are multidimensionally poor globally (UNDP 2023).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Poverty Measurement Methods',
        headers: ['Measure', 'What it Captures', 'Advantage', 'Key Limitation'],
        rows: [
          ['Headcount Ratio', 'Share of population below poverty line', 'Simple; internationally comparable; widely used', 'Ignores depth of poverty; a $0.01 rise in income for the very poor eliminates them from count even if still severely deprived'],
          ['Poverty Gap Index', 'Average depth of poverty below the line', 'Shows how poor the poor are; indicates minimum transfer cost to eliminate poverty', 'Does not capture inequality among the poor; sensitive to poverty line choice'],
          ['Squared Poverty Gap (P₂)', 'Severity — weighted by depth, gives more weight to poorest', 'Captures inequality among poor; most sensitive to worst-off', 'Most complex; difficult to communicate; rarely used in policy'],
          ['Multidimensional Poverty Index (MPI)', 'Deprivation across health, education, living standards', 'Beyond income; captures quality of life; identifies worst-deprived groups', 'Data-intensive; indicator weights are somewhat arbitrary; harder to aggregate across countries']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Examiners like to see discussion of the limitations of income-based poverty measures. The MPI is the go-to alternative — mention its three dimensions and that it identifies where poverty is concentrated and what deprivations matter most for targeted policy. Remember: ~700m in extreme income poverty vs ~1.1bn in multidimensional poverty globally.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Show numerical calculation skills. When invited to construct measures like the headcount ratio (proportion below poverty line), show your working. Examiners value understanding that the MPI captures multiple deprivations simultaneously \u2014 far superior to single-metric approaches. Reference the UNDP's MPI methodology."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume headcount ratio is sufficient to measure poverty. This is incorrect \u2014 Edexcel expects you to critique it for ignoring depth of poverty. The poverty gap accounts for this; MPI adds dimensions of health, education, and living standards. Avoid saying 'headcount is simpler so it's better.' Explain trade-offs between simplicity and accuracy."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Poverty measures include the headcount ratio (proportion below poverty line), poverty gap (depth of poverty), and MPI (multidimensional index across health, education, living standards); each captures different aspects of deprivation with different policy implications.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'What is the headcount ratio and what is its main weakness?',
        answer: 'The headcount ratio counts the proportion of the population below the poverty line. Its main weakness is it ignores depth of poverty — someone $0.01 below the line counts the same as someone $2 below. It cannot distinguish between shallow and severe poverty.'
      },
      {
        id: 'cue-2',
        blockId: 'para-4',
        prompt: 'State the three dimensions and criteria for multidimensional poverty in the MPI.',
        answer: 'Health (child mortality, nutrition); Education (years of schooling, school attendance); Living Standards (cooking fuel, sanitation, drinking water, electricity, housing, assets). A person is multidimensionally poor if deprived in at least one-third (weighted) of these indicators.'
      },
      {
        id: 'cue-3',
        blockId: 'para-3',
        prompt: 'What additional information does the poverty gap provide compared to the headcount ratio?',
        answer: 'The poverty gap measures the average shortfall below the poverty line — capturing the depth of poverty. It tells us the minimum cost of eliminating poverty through perfectly targeted transfers, which the headcount cannot tell us. A country could reduce the headcount while the poverty gap worsens if the extreme poor fall further below the line.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_21_1;
