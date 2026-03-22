export const note_economics_4_23_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate alternative development indicators including the Multidimensional Poverty Index, Gender Inequality Index, Happy Planet Index, and Genuine Progress Indicator.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alternative Development Indicators', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'No single indicator can capture all dimensions of human development and wellbeing. The UNDP and other organisations have developed a range of alternative composite indicators to address specific gaps in the HDI, particularly around inequality, gender, environmental sustainability, and subjective wellbeing.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Alternative Development Indicators',
        headers: ['Indicator', 'Developer', 'Dimensions Covered', 'Advantage over HDI', 'Key Limitation'],
        rows: [
          ['Multidimensional Poverty Index (MPI)', 'UNDP/OPHI (Alkire & Foster)', 'Health, education, living standards (10 indicators)', 'Captures non-income poverty; identifies WHERE and HOW people are deprived; useful for targeting policy', 'Data intensive; indicator weights somewhat arbitrary; harder to aggregate for cross-country comparison'],
          ['Inequality-Adjusted HDI (IHDI)', 'UNDP', 'Health, education, income — adjusted for within-dimension inequality', 'Shows "actual" HDI when inequality taken into account; highlights distribution', 'Requires distributional data not always available; can diverge significantly from HDI for high-inequality countries'],
          ['Gender Inequality Index (GII)', 'UNDP', 'Reproductive health, empowerment (parliamentary seats, education), labour market participation', 'Captures gender-based disadvantage; highlights female-specific development gaps', 'Does not capture all gender dimensions (domestic violence, time poverty, legal rights); limited country coverage'],
          ['Happy Planet Index (HPI)', 'New Economics Foundation', 'Wellbeing (life satisfaction), life expectancy, ecological footprint', 'Incorporates environmental sustainability and subjective wellbeing', 'Highly weighted toward ecology — Costa Rica ranks 1st; Nordic countries rank lower due to high ecological footprints; subjective wellbeing data quality varies'],
          ['Genuine Progress Indicator (GPI)', 'Various researchers', 'Adjusts GDP by adding non-market benefits (volunteering, household work) and subtracting costs (pollution, crime, inequality)', 'Accounts for environmental damage and social costs that GDP treats as neutral or positive', 'Methodologically complex; country data very limited; not internationally standardised']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Why Multiple Indicators Are Needed', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Different indicators reveal different aspects of development and can give radically different country rankings. The USA ranks very high on HDI but lower on IHDI (inequality), average on GPI (environmental and social costs), and lower on MPI-style deprivation analysis of its poorest citizens. Costa Rica ranks much higher on the HPI than its HDI rank would suggest because it combines high life satisfaction and life expectancy with a relatively low ecological footprint. No single measure suffices for policy — a dashboard approach (using multiple indicators together) is increasingly recommended.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In essays on development measurement, always mention at least two alternative indicators and explain what each adds to HDI. The MPI is particularly useful for understanding the multi-dimensional nature of poverty; the GII highlights gender as a development dimension; the HPI brings in environmental sustainability. The key evaluative point is that no single indicator is sufficient — policymakers need a dashboard.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Evaluate alternatives comprehensively: Multidimensional Poverty Index (captures health, education, living standards simultaneously; now used by UNDP), Gender Inequality Index (maternal mortality, education, political participation), Happy Planet Index (combines wellbeing + life expectancy + ecological footprint), Genuine Progress Indicator (GPI adjusts GDP for environmental costs, inequality, leisure). Examiners reward explaining why alternatives matter: HDI captures income but misses inequality; GPI reveals high-GDP nations may have poor sustainability. Use country rankings to show differences."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students list alternatives without critically evaluating trade-offs. MPI is detailed but data-intensive (sparse for poor countries). GPI is holistic but requires debatable adjustments (how much reduce GDP for pollution?). Happy Planet Index correlates with tiny economies (Costa Rica ranks high; Luxembourg low due to high carbon). Don't just say 'these are better than HDI'; say 'each measure emphasizes different values; no single metric fits all purposes. Choose based on policy question.' Edexcel values methodological awareness."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Market rigging, such as manipulating benchmark interest rates (e.g., LIBOR), is a critical example of market failure stemming from collusion in the financial sector."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Alternative indicators address HDI gaps: MPI (multidimensional deprivation across health, education, living standards), GII (gender inequality), HPI (wellbeing + ecology), GPI (GDP adjusted for social and environmental costs); each reveals different aspects of development; a dashboard approach is best.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'What does the Gender Inequality Index measure and what does it add to the HDI?',
        answer: 'The GII measures gender-based disadvantage across three dimensions: reproductive health (maternal mortality, adolescent birth rate), empowerment (parliamentary seats, secondary education), and labour market participation. It adds the gender dimension that HDI averages over — highlighting female-specific development gaps invisible in aggregate HDI scores.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'Why does Costa Rica rank high on the Happy Planet Index despite a modest GDP?',
        answer: 'The HPI combines life satisfaction, life expectancy, and ecological footprint. Costa Rica has high life expectancy and life satisfaction relative to its income (evidence of efficient human development) with a relatively low ecological footprint — making it highly "efficient" in converting environmental resources into human wellbeing. High-income Nordic countries have large ecological footprints, pulling them down the HPI despite high wellbeing.'
      },
      {
        id: 'cue-3',
        blockId: 'para-2',
        prompt: 'Why is a "dashboard" of indicators recommended rather than a single development measure?',
        answer: 'Different indicators reveal different dimensions of development and give radically different country rankings. The USA ranks high on GDP and HDI but lower on IHDI, HPI, and MPI analysis of its poorest citizens. No single measure captures all relevant dimensions (income, equality, health, gender, sustainability, subjective wellbeing). A dashboard uses multiple indicators together to give a comprehensive picture.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_2;
