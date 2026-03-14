export const note_biology_6_6A_3 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Evaluate procedures to suggest improvements regarding validity and reliability." }
    },
    {
      id: "h-eval",
      type: "heading",
      data: { text: "Validity vs Reliability", level: 2 }
    },
    {
      id: "list-val",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Reliability: Can the results be consistently reproduced? Improved by conducting more repeats, calculating means, and formally excluding anomalies. High standard deviation indicates low reliability.",
          "Validity: Does the experiment actually measure what it claims to measure? Improved by identifying uncontrolled variables and controlling them more tightly. Without proper controls, results are invalid, regardless of repeats."
        ]
      }
    },
    {
      id: "h-improve",
      type: "heading",
      data: { text: "Common Improvements", level: 2 }
    },
    {
      id: "list-imp",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Use a colorimeter instead of naked eye to judge color changes objectively.",
          "Use a thermostatically controlled electric water bath instead of a beaker of hot water that constantly cools down.",
          "Measure exact volumes with a highly graded graduated pipette or auto-pipette, rather than a measuring cylinder.",
          "Increase the range of independent variables to pinpoint the exact optimum/peak."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-val", prompt: "What is the core difference between reliability and validity?" },
      { id: "cue-2", blockId: "list-imp", prompt: "Why is an electric water bath considered an improvement over a beaker of hot water?" },
      { id: "cue-3", blockId: "list-imp", prompt: "Which piece of equipment removes subjective human error when judging colour changes?" }
    ],
    summaryText: "Reliability means consistent, repeatable measurements (improved by repeats). Validity means accurately testing the hypothesis (improved by strict control variables). Common improvements include colorimeters for objectivity, electric water baths for temperature control, and greater IV intervals.",
    ready: true
  },
  evidence: []
};