export const note_mathematics_6_6_2 = {
  blocks: [
    {
      id: 'obj-hyp-corr',
      type: 'objective',
      data: {
        text: 'Conduct a hypothesis test for zero correlation using the Product Moment Correlation Coefficient (PMCC).'
      }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: {
        text: 'Hypothesis Testing for Correlation',
        level: 2
      }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'We can use the Product Moment Correlation Coefficient (PMCC), usually denoted as r for a sample, to test whether there is a linear relationship in the entire population. The population PMCC is denoted by the Greek letter ρ (rho).'
      }
    },
    {
      id: 'h-hypotheses',
      type: 'heading',
      data: {
        text: 'Setting Up the Hypotheses',
        level: 2
      }
    },
    {
      id: 'p-hypotheses',
      type: 'paragraph',
      data: {
        text: 'The null hypothesis always assumes no correlation in the population:'
      }
    },
    {
      id: 'eq-null',
      type: 'equation',
      data: {
        html: 'H<sub>0</sub>: ρ = 0',
        caption: 'Null Hypothesis'
      }
    },
    {
      id: 'p-alternative',
      type: 'paragraph',
      data: {
        text: 'The alternative hypothesis depends on what we are testing for:'
      }
    },
    {
      id: 'list-alternative',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'One-tailed (positive correlation): H<sub>1</sub>: ρ > 0' },
          { text: 'One-tailed (negative correlation): H<sub>1</sub>: ρ < 0' },
          { text: 'Two-tailed (any correlation): H<sub>1</sub>: ρ ≠ 0' }
        ]
      }
    },
    {
      id: 'h-critical-values',
      type: 'heading',
      data: {
        text: 'Critical Values',
        level: 2
      }
    },
    {
      id: 'p-critical',
      type: 'paragraph',
      data: {
        text: 'To determine if the sample correlation r is significant, we look up a critical value in the PMCC tables based on the sample size n and the significance level (e.g., 5% or 1%).'
      }
    },
    {
      id: 'callout-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Decision Rule',
        text: 'If the magnitude of r is greater than or equal to the critical value (|r| ≥ critical value), reject H₀. There is evidence of correlation.'
      }
    },
    {
      id: 'summary-hyp-corr',
      type: 'summary',
      data: {
        text: 'To test for correlation, state H₀: ρ = 0 and H₁ based on the prompt, find the critical value from the table, and compare it with the test statistic r.'
      }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "In correlation hypothesis tests, clearly state your null hypothesis as rho = 0, using the Greek letter rho. Do not use 'r', as 'r' represents the sample statistic. Always conclude a hypothesis test in the specific context of the original question."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: 'Hypothesis testing for PMCC tests if population correlation ρ = 0. We compare sample r to critical values from a table.',
    cues: [
      {
        id: 'cue-rho',
        blockId: 'p-intro',
        prompt: 'What symbol is used for the population product moment correlation coefficient?',
        answer: 'ρ (rho)'
      },
      {
        id: 'cue-null',
        blockId: 'eq-null',
        prompt: 'What is the standard null hypothesis for a correlation test?',
        answer: 'H₀: ρ = 0'
      },
      {
        id: 'cue-alt-two-tail',
        blockId: 'list-alternative',
        prompt: 'What is the alternative hypothesis for a two-tailed test for correlation?',
        answer: 'H₁: ρ ≠ 0'
      },
      {
        id: 'cue-decision',
        blockId: 'callout-rule',
        prompt: 'When do you reject the null hypothesis in a correlation test?',
        answer: 'When the absolute value of the sample PMCC (|r|) is greater than or equal to the critical value.'
      }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
