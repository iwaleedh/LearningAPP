export const note_economics_4_23_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain the components and methodology of the Human Development Index (HDI), interpret HDI scores, and evaluate the HDI as a measure of development.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Human Development Index (HDI)', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>Human Development Index (HDI)</strong> was developed by Mahbub ul Haq and Amartya Sen for the UNDP in 1990. It measures development beyond GDP alone, capturing key capabilities that allow people to live full and healthy lives. The HDI is published annually in the UNDP Human Development Report and has become the standard alternative to GDP per capita for measuring development.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'HDI Components', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'HDI: Three Dimensions and Indicators',
        headers: ['Dimension', 'Indicator(s)', 'Rationale', 'Min-Max Goalposts'],
        rows: [
          ['Health', 'Life expectancy at birth', 'Long life reflects good health, nutrition, and healthcare system quality', '20 years (min) to 85 years (max)'],
          ['Education', 'Mean years of schooling (adults 25+); Expected years of schooling (children)', 'Education enhances capabilities, opens opportunities, raises productivity', 'MYS: 0-15 years; EYS: 0-18 years'],
          ['Standard of living', 'Gross National Income (GNI) per capita (PPP, constant 2017 USD, log scale)', 'Income needed to achieve basic needs and broader capabilities; log scale reflects diminishing returns', '$100 (min) to $75,000 (max)']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'HDI Calculation', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Each dimension index is calculated as: (Actual value - Minimum value) / (Maximum value - Minimum value). The overall HDI is the <strong>geometric mean</strong> of the three dimension indices: HDI = (Health index × Education index × Income index)^(1/3). The geometric mean penalises imbalances — a country cannot compensate for very low performance in one dimension with high performance in another.'
      }
    },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: 'HDI = (I_{Health} \\times I_{Education} \\times I_{Income})^{1/3}',
        caption: 'HDI = geometric mean of three dimension indices'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'HDI Classification', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Very High Human Development</strong>: HDI ≥ 0.800 — typically advanced economies; Norway (0.966), Switzerland (0.962), Germany (0.942)' },
          { text: '<strong>High Human Development</strong>: 0.700-0.799 — many Latin American, Eastern European, East Asian countries; China (0.788)' },
          { text: '<strong>Medium Human Development</strong>: 0.550-0.699 — much of South and Southeast Asia; India (0.644), Bangladesh (0.661)' },
          { text: '<strong>Low Human Development</strong>: < 0.550 — concentrated in Sub-Saharan Africa; South Sudan (0.385), Niger (0.394)' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'HDI vs GDP Per Capita',
        text: 'The UK HDI rank (14th, 0.929) is similar to its GDP per capita rank. But interesting divergences occur: Costa Rica ranks higher on HDI than on GDP (long life expectancy despite modest income). Saudi Arabia ranks lower on HDI than GDP (high income but weaker education/gender equality). The HDI reveals that income is not the only dimension of development.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "HDI = average of (Life Expectancy Index, Education Index, GNI per Capita Index). Examiners reward numeracy: show how to construct HDI from components. Key insight: HDI captures non-income dimensions (health, education) missing from GDP. Interpret findings: Sub-Saharan Africa has low HDI (~0.5) due to low life expectancy and education; Scandinavian high HDI (~0.95) across all dimensions. Compare HDI rankings to GDP rankings \u2014 development \u2260 just wealth. Use country examples strategically."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume HDI is a perfect development measure. It's not \u2014 it misses inequality (Costa Rica high HDI but unequal), omits environmental degradation (Mauritius high HDI, coral bleaching), and ignores governance quality. Also, averaging three indices masks trade-offs: a country can have high health but low education. Don't say 'HDI is better than GDP' absolutely; say 'HDI captures non-income dimensions but has limitations.' Edexcel expects critical perspective, not advocacy."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'The HDI measures development across three dimensions: health (life expectancy), education (mean and expected years schooling), and income (GNI per capita PPP, log scale); calculated as geometric mean of three indices; thresholds from Low (<0.550) to Very High (≥0.800).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'State the three dimensions of the HDI and one indicator for each.',
        answer: 'Health: life expectancy at birth. Education: mean years of schooling (adults) AND expected years of schooling (children). Standard of living: GNI per capita PPP (log scale, constant 2017 dollars).'
      },
      {
        id: 'cue-2',
        blockId: 'equation-1',
        prompt: 'How is the overall HDI calculated from its component indices, and why use a geometric mean?',
        answer: 'HDI = (Health index × Education index × Income index)^(1/3) — the geometric mean of the three indices. The geometric mean penalises imbalances: a very low score in one dimension cannot be fully compensated by high scores in others, unlike a simple average.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'Give the HDI thresholds for the four development categories and examples for each.',
        answer: 'Very High: ≥0.800 (Norway 0.966, UK 0.929). High: 0.700-0.799 (China 0.788). Medium: 0.550-0.699 (India 0.644). Low: <0.550 (South Sudan 0.385, Niger 0.394).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_0;
