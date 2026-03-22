export const note_economics_2_7_6 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate the limitations of GDP and GNI as measures of living standards, and identify alternative composite indicators used to assess national welfare.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'GDP/GNI Limitations', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'GDP and GNI measure the monetary value of economic output, but they fail to capture many dimensions of human welfare. A country can have rising GDP while citizens become less happy, the environment deteriorates, and inequality worsens.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Key limitations of GDP/GNI as welfare measures',
        headers: ['Limitation', 'Explanation', 'Example'],
        rows: [
          ['Income distribution', 'GDP/GNI is an average — does not show how income is shared', 'Saudi Arabia has high GDP per capita but extreme inequality'],
          ['Environmental damage', 'Pollution, deforestation, resource depletion reduce welfare but may raise GDP (clean-up costs add to GDP)', 'BP oil spill boosted US GDP through clean-up spending'],
          ['Informal/shadow economy', 'Unpaid work (childcare, home farming) and black market activity not recorded', 'Subsistence farming in developing countries understated'],
          ['Leisure time', 'Shorter working hours raise welfare but reduce GDP', 'France works fewer hours than US; GDP comparison misleading'],
          ['Public service quality', 'GDP records government spending, not outcomes (e.g., health quality, education attainment)', 'More spending on failed projects raises GDP'],
          ['Composition of output', 'GDP rises even if spending is on weapons, prisons, or disaster recovery', 'War spending raises GDP but reduces welfare'],
          ['Happiness and wellbeing', 'Non-material satisfaction not captured', 'Bhutan uses Gross National Happiness index instead']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Alternative Welfare Indicators', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Human Development Index (HDI)</strong>: composite of life expectancy, education (mean/expected years of schooling), and GNI per capita (PPP). Published annually by UNDP' },
          { text: '<strong>Happiness Index (World Happiness Report)</strong>: survey-based measure of subjective wellbeing across 6 factors (income, social support, health, freedom, trust, generosity)' },
          { text: '<strong>Green GDP / Genuine Progress Indicator (GPI)</strong>: adjusts GDP for environmental costs, crime, inequality, and adds unpaid work value' },
          { text: '<strong>ONS Wellbeing Framework (UK)</strong>: 10 domains including health, relationships, environment, work-life balance' },
          { text: '<strong>OECD Better Life Index</strong>: allows countries to be compared across 11 dimensions of wellbeing' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'HDI Formula',
        text: 'HDI = (Health Index × Education Index × Income Index)^(1/3)<br/><br/>All three indices are normalised to a 0–1 scale. HDI close to 1 = very high development.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When evaluating GDP as a measure of living standards, use the mnemonic <strong>DELISH</strong>: Distribution, Environment, Leisure, Informal economy, Services quality, Happiness. Name the alternative indicator (e.g., HDI) and explain why it is better.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'GDP/GNI miss income distribution, environmental damage, informal activity, leisure, public service quality, and wellbeing. Alternative measures like HDI and wellbeing indices provide a more comprehensive picture.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "When evaluating GDP as a measure of living standards, use the mnemonic DELISH: Distribution, Environment, Leisure, Informal economy, Services quality, Happiness. Name the alternative indicator (e.g., HDI) and explain why it is better."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'GDP/GNI limitations: miss inequality, environment, informal economy, leisure, public service quality, and happiness.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Why does GDP fail to capture income distribution?',
        answer: 'GDP and GNI are averages — they do not show how income is distributed across the population, so a few very wealthy individuals can mask widespread poverty.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'Give an example of how environmental damage can paradoxically raise GDP.',
        answer: 'After the BP oil spill, clean-up spending added to US GDP — the disaster caused welfare loss but a GDP increase.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'What three components make up the Human Development Index (HDI)?',
        answer: 'Life expectancy (health), education (mean and expected years of schooling), and GNI per capita (PPP).'
      },
      {
        id: 'cue-4',
        blockId: 'call-2',
        prompt: 'Name four limitations of GDP as a welfare measure (DELISH).',
        answer: 'Distribution (inequality), Environment, Leisure, Informal economy, Services quality, Happiness — any four of these.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_6;
