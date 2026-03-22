export const note_economics_2_7_7 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand national wellbeing indicators including the ONS Wellbeing Framework and OECD Better Life Index, their dimensions, advantages over GDP, and their limitations.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'National Wellbeing Indicators', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'In response to the recognised limitations of GDP, governments and international organisations have developed <strong>composite wellbeing indicators</strong> that attempt to measure human welfare more broadly, incorporating social, environmental, and psychological dimensions.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'ONS Wellbeing Framework (UK)', level: 3 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'ONS Wellbeing Framework',
        text: 'The UK\'s Office for National Statistics (ONS) measures national wellbeing across <strong>10 domains</strong>:<br/>1. Personal wellbeing (life satisfaction, happiness, anxiety)<br/>2. Our relationships (social support, loneliness)<br/>3. Health (physical and mental)<br/>4. What we do (employment, volunteering, leisure)<br/>5. Where we live (environment, access to services)<br/>6. Personal finance (income, wealth)<br/>7. The economy (GDP, employment)<br/>8. Education and skills<br/>9. Governance (trust in government)<br/>10. The natural environment (biodiversity, emissions)'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'OECD Better Life Index', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Covers <strong>11 dimensions</strong>: housing, income, jobs, community, education, environment, civic engagement, health, life satisfaction, safety, work-life balance' },
          { text: 'Users can <strong>customise weights</strong> for each dimension, reflecting that different people value different things' },
          { text: 'Allows cross-country comparisons across OECD members and beyond' },
          { text: 'Separates material conditions (income, jobs, housing) from quality of life (health, environment, wellbeing)' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and limitations of wellbeing indicators vs GDP',
        headers: ['Criterion', 'Wellbeing Indicators (e.g., ONS, OECD BLI)', 'GDP/GNI'],
        rows: [
          ['Scope', 'Multi-dimensional: covers health, environment, relationships, governance', 'Narrow: only monetary value of output'],
          ['Subjective measures', 'Includes survey-based wellbeing (life satisfaction)', 'Entirely objective monetary data'],
          ['Environmental dimension', 'Explicitly included', 'Not included'],
          ['Income distribution', 'Can include Gini coefficient or inequality measures', 'Average only; hides inequality'],
          ['Comparability', 'Harder to compare internationally; subjective elements vary culturally', 'Standardised internationally'],
          ['Availability of data', 'Requires surveys; expensive and time-consuming', 'Readily available; published quarterly']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of Wellbeing Indicators',
        text: '<strong>Subjectivity</strong>: survey responses on happiness vary with culture, language, and framing — hard to compare across countries.<br/><strong>Weighting</strong>: different stakeholders would weight dimensions differently; no universal agreement.<br/><strong>Data availability</strong>: comprehensive wellbeing data is harder to collect and less frequent than GDP data.<br/><strong>Not used by financial markets</strong>: investors and governments still primarily use GDP to signal economic performance.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'National wellbeing indicators (ONS Framework, OECD Better Life Index) cover multiple dimensions of welfare beyond GDP, including health, environment, relationships, and subjective wellbeing, but are harder to measure and compare internationally.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Do not just list alternative indicators (like the Easterlin paradox concepts); explain how they capture subjective factors of welfare that pure quantitative GDP data misses, such as health, stress, and work-life balance."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Wellbeing indicators measure welfare across multiple dimensions (health, environment, happiness) beyond GDP.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'How many domains does the ONS Wellbeing Framework cover?',
        answer: '10 domains, including personal wellbeing, health, relationships, education, governance, and the natural environment.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'What unique feature does the OECD Better Life Index have that most indicators lack?',
        answer: 'Users can customise the weights given to each of the 11 dimensions, reflecting different personal or national priorities.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'Give two advantages of wellbeing indicators over GDP.',
        answer: 'They include multi-dimensional welfare (health, environment, relationships) and incorporate subjective life satisfaction surveys.'
      },
      {
        id: 'cue-4',
        blockId: 'call-2',
        prompt: 'What is the main limitation of survey-based wellbeing measures?',
        answer: 'They are subjective — responses vary with culture, language, and question framing, making cross-country comparisons unreliable.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_7;
