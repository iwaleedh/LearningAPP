export const note_biology_6_6A_4 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Calculate percentage errors and differentiate between quantitative and qualitative uncertainty." }
    },
    {
      id: "h-uncertainty",
      type: "heading",
      data: { text: "Measurement Uncertainty", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "No piece of analogue equipment is perfectly precise. Every measurement carries an inherent absolute uncertainty, typically half of the smallest graduation mark." }
    },
    {
      id: "list-errors",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Percentage Error Formula: % Error = (Absolute Uncertainty / Measured Value) × 100",
          "Double Readings: When reading from a thermometer, you take one reading (1 margin of error). When finding a change in mass on a balance, you take two readings (initial and final). Therefore, you must multiply the absolute equipment uncertainty by 2 before calculating percentage error.",
          "Reducing error: Percentage error becomes smaller when the measured value is larger. E.g., weighing a 10g mass has a smaller percentage error than weighing a 1g mass on the same balance."
        ]
      }
    },
    {
      id: "h-qual",
      type: "heading",
      data: { text: "Qualitative Errors (Limitations)", level: 3 }
    },
    {
      id: "p-qual",
      type: "paragraph",
      data: { text: "Some errors cannot be quantified, such as difficulty judging the exact 'end point' of a reaction visually, biological variations within a genetically diverse sample (e.g. wild leaves), or fluctuating room temperatures." }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-errors", prompt: "What is the formula for percentage error?" },
      { id: "cue-2", blockId: "list-errors", prompt: "Why must you sometimes multiply the equipment uncertainty by 2?" },
      { id: "cue-3", blockId: "list-errors", prompt: "How can you reduce the percentage error without buying a better scale?" }
    ],
    summaryText: "Percentage error = (Absolute uncertainty / Measurement) × 100. If an experiment requires finding a difference (e.g. change in length), absolute uncertainty is doubled because two readings were taken. Larger sample measurements yield smaller percentage errors.",
    ready: true
  },
  evidence: []
};