export const note_economics_4_23_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Critically evaluate the strengths and limitations of the HDI, including the Inequality-Adjusted HDI (IHDI) as an improvement.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'HDI: Strengths and Limitations', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Strengths of the HDI', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Beyond GDP</strong> — captures non-income dimensions of wellbeing (health, education) that GDP ignores; a country can have high GDP but poor health systems (USA has lower HDI rank than GDP rank)' },
          { text: '<strong>Internationally comparable</strong> — standardised methodology across 190+ countries allows meaningful cross-country comparisons and ranking' },
          { text: '<strong>Tracks progress over time</strong> — available from 1990, allowing monitoring of development trends; global HDI has improved significantly, showing progress even in low-income countries' },
          { text: '<strong>Policy focus</strong> — draws attention to health and education as development priorities, not just economic growth; influenced development policy (UN Millennium Development Goals, Sustainable Development Goals)' },
          { text: '<strong>Simple and communicable</strong> — single number between 0 and 1 that non-specialists can understand; useful for advocacy and public communication' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Limitations of the HDI', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Ignores inequality</strong> — two countries with the same HDI may have very different distributions; the standard HDI is an average that masks disparities by gender, region, ethnicity' },
          { text: '<strong>Ignores sustainability</strong> — a country that depletes its natural resources to boost short-run income and health will score well on HDI despite undermining future development' },
          { text: '<strong>Ignores political freedom and governance</strong> — Cuba scores higher on HDI than many richer countries but has severe political repression; HDI cannot capture this' },
          { text: '<strong>Data quality varies</strong> — in low-income countries, data on life expectancy, school attendance, and income are often estimated with large margins of error' },
          { text: '<strong>Narrow education measure</strong> — years of schooling does not capture learning quality; a country with high enrolment but poor teaching quality will score similarly to one with high enrolment and good quality' },
          { text: '<strong>Does not capture subjective wellbeing</strong> — happiness, life satisfaction, and mental health are not reflected' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Inequality-Adjusted HDI (IHDI)', level: 3 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>IHDI</strong> adjusts the HDI downward by the degree of inequality in each dimension. If all people in a country had the same life expectancy, education, and income, the IHDI would equal the HDI. But if there is inequality within each dimension, the IHDI is lower. The "Human Development Loss" due to inequality = (1 - IHDI/HDI) × 100%. The USA has one of the largest gaps between HDI and IHDI among advanced economies due to high income inequality and unequal health outcomes — its IHDI rank falls significantly below its HDI rank.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked to evaluate the HDI, structure your answer as: (1) what does it capture that GDP misses? (2) what does it still miss? (3) what improvements exist (IHDI, GII, MPI)? The strongest critique is inequality — the HDI gives no information about distribution. The IHDI addresses this by discounting the HDI by the degree of inequality within each dimension.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Critique HDI systematically: it ignores income inequality (Inequality-Adjusted HDI attempts fix but data gaps remain), omits environmental sustainability (high HDI, poor carbon footprint), doesn't measure governance quality or political freedom, and uses arbitrary weightings (why average equally?). IHDI adjusts for inequality within each dimension \u2014 if income is more unequal (Gini=0.4), IHDI drops. Examiners reward evidence: 'South Africa has high GDP and HDI but extreme inequality (IHDI falls 25%+).'"
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students cite HDI limitations without proposing alternatives or acknowledging data challenges. IHDI exists but requires inequality data, which is sparse for poor countries. Don't just say 'HDI is flawed'; say 'these limitations are recognized; IHDI partially addresses inequality, but comprehensive sustainability measures remain underdeveloped.' Also, measuring what's omitted (governance, freedom) is hard. Edexcel expects: 'No perfect measure; choose metric for purpose: inequality \u2192 IHDI, sustainability \u2192 Genuine Progress Indicator.'"
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'HDI strengths: goes beyond GDP, internationally comparable, tracks progress, simple to communicate. Limitations: ignores inequality (IHDI addresses this), sustainability, political freedom, data quality issues, and subjective wellbeing; IHDI adjusts downward by within-dimension inequality.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-1',
        prompt: 'Give three reasons why the HDI is a better measure of development than GDP per capita alone.',
        answer: 'It captures non-income dimensions: health (life expectancy) and education (years of schooling), which GDP ignores. It is internationally comparable across 190+ countries. It draws policy attention to health and education as development priorities rather than only economic growth.'
      },
      {
        id: 'cue-2',
        blockId: 'list-2',
        prompt: 'Identify three important dimensions of development that the HDI fails to capture.',
        answer: 'Inequality (the same HDI can hide very different distributions by gender, region, ethnicity). Sustainability (resource depletion boosts short-run income without ensuring long-run development). Political freedom and governance (Cuba scores relatively well on HDI but has severe political repression that HDI cannot capture).'
      },
      {
        id: 'cue-3',
        blockId: 'para-1',
        prompt: 'How does the IHDI improve on the standard HDI?',
        answer: 'The IHDI adjusts the HDI downward by the degree of inequality within each dimension (health, education, income). Countries with highly unequal distributions get a lower IHDI than HDI. The USA has one of the largest HDI-IHDI gaps among advanced economies, falling significantly in rank when inequality is accounted for.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_1;
