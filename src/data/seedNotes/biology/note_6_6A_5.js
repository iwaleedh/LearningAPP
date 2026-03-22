export const note_biology_6_6A_5 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Evaluate biological implications of experimental conclusions and statistical tests." }
    },
    {
      id: "h-stats",
      type: "heading",
      data: { text: "Statistical Testing", level: 2 }
    },
    {
      id: "list-stats",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Students t-test: Used to compare the means of two differing, continuous data sets to see if the difference between them is significant.",
          "Spearman's Rank Correlation: Used to determine if there is a mathematically significant correlation between two variables (e.g. length of leaf vs height on tree).",
          "Chi-squared Test: Used for comparing purely categorical (expected vs observed) frequencies.",
          "Critical Value (p = 0.05): If your calculated test statistic is greater than the critical value at p=0.05, the result is considered statistically significant. You reject the null hypothesis. There is less than a 5% probability that the results are due to chance alone."
        ]
      }
    },
    {
      id: "h-implications",
      type: "heading",
      data: { text: "Biological Implications", level: 2 }
    },
    {
      id: "p-implications",
      type: "paragraph",
      data: { text: "In Unit 6, you must relate numerical conclusions back to A-Level theory. For instance, if an experiment shows a steep drop in plant growth at high temperatures, you must use biological terminology (e.g. 'enzymes, such as RuBisCO, denature because thermal kinetic energy breaks hydrogen bonds, altering the active site shape') to explain the trend." }
    },
{ 'id': 'callout-examiner-983ac085', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': 'When approaching statistical questions, justify your choice of test clearly. Use Student\'s t-test to compare two independent means, Spearman\'s rank for establishing an association between two continuous variables, and Chi-squared for categorical observed versus expected frequencies. Always start with a precise null hypothesis!' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-stats", prompt: "Which statistical test would you use to see if boys are significantly taller than girls on average?" },
      { id: "cue-2", blockId: "list-stats", prompt: "What does p < 0.05 actually mean in biology?" },
      { id: "cue-3", blockId: "list-stats", prompt: "If your calculated T-value is greater than the critical value, what happens to the null hypothesis?" }
    ],
    summaryText: "T-test compares means; Spearman's finds correlations; Chi-squared tests frequencies. A calculated value greater than the critical value (p=0.05) means you reject the null hypothesis, as there is <5% probability the data trend occurred by random chance.",
    ready: true
  },
  evidence: []
};