export const note_economics_2_7_11 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand how unemployment is measured using the ILO/LFS method and the Claimant Count, and interpret key labour market statistics including the employment and activity rates.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Employment and Unemployment Measures', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Labour Market Definitions',
        text: '<strong>Working-age population</strong>: people aged 16–64 in the UK (excludes students, retired, disabled unable to work).<br/><br/><strong>Economically active</strong>: those in work OR actively seeking work (employed + unemployed).<br/><br/><strong>Economically inactive</strong>: working-age people neither employed nor seeking work (students, carers, early retirees).<br/><br/><strong>Unemployed (ILO definition)</strong>: without a job, available to start work within 2 weeks, and have actively looked for work in the past 4 weeks.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Labour Market Rates', level: 3 }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Unemployment Rate} = \\frac{\\text{Unemployed}}{\\text{Economically Active}} \\times 100',
        caption: 'ILO unemployment rate'
      }
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: '\\text{Employment Rate} = \\frac{\\text{Employed}}{\\text{Working-age Population}} \\times 100',
        caption: 'Employment rate (% of working-age population in work)'
      }
    },
    {
      id: 'eq-3',
      type: 'equation',
      data: {
        latex: '\\text{Activity Rate} = \\frac{\\text{Economically Active}}{\\text{Working-age Population}} \\times 100',
        caption: 'Economic activity rate'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'ILO/LFS measure vs Claimant Count',
        headers: ['Feature', 'ILO/LFS Measure', 'Claimant Count'],
        rows: [
          ['Method', 'Labour Force Survey — sample survey of ~40,000 households', 'Administrative count of people claiming unemployment-related benefits'],
          ['Definition of unemployed', 'Without work, available, and actively seeking — regardless of benefit status', 'Claiming Jobseeker\'s Allowance or Universal Credit conditioned on seeking work'],
          ['Coverage', 'Broader — captures those not eligible for benefits', 'Narrower — misses those not claiming (e.g., those with savings)'],
          ['Frequency', 'Quarterly', 'Monthly'],
          ['International comparability', 'Yes — ILO standard used globally', 'No — benefit rules differ between countries'],
          ['Advantage', 'More comprehensive; international standard', 'More timely (monthly); lower data collection cost'],
          ['Disadvantage', 'Delayed; sampling error; expensive', 'Affected by benefit rule changes; misses non-claimants']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When comparing unemployment levels, note that <strong>ILO and Claimant Count can move in opposite directions</strong> if benefit rules change. Always specify which measure you are using. ILO is better for international comparisons; Claimant Count is more current.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'ILO unemployment is survey-based, broader, and internationally comparable. Claimant Count is based on benefit claims — narrower but more timely. Key rates: unemployment rate, employment rate, and activity rate.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'ILO = survey-based, broad, international standard; Claimant Count = benefit claims, narrower, monthly.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What are the three conditions for someone to be classified as unemployed under the ILO definition?',
        answer: 'Without a job, available to start within 2 weeks, and actively looked for work in the past 4 weeks.'
      },
      {
        id: 'cue-2',
        blockId: 'eq-1',
        prompt: 'What is the formula for the ILO unemployment rate?',
        answer: 'Unemployment rate = (Unemployed / Economically Active) × 100'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'Why might the Claimant Count understate true unemployment?',
        answer: 'It only counts those claiming benefits — people who are unemployed but not eligible for (or not claiming) unemployment benefits are missed.'
      },
      {
        id: 'cue-4',
        blockId: 'call-1',
        prompt: 'What is the difference between the unemployment rate and the activity rate?',
        answer: 'Unemployment rate = unemployed / economically active. Activity rate = economically active (employed + unemployed) / working-age population.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_11;
