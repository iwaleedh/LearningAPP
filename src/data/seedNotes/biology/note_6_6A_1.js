export const note_biology_6_6A_1 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Plan an experiment logically, including variables, equipment, and risk assessment." }
    },
    {
      id: "h-corms",
      type: "heading",
      data: { text: "Experiment Planning Frame", level: 2 }
    },
    {
      id: "list-plan",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "I (Independent Variable): What are you changing? State at least 5 different values/intervals.",
          "D (Dependent Variable): What are you measuring? How exactly are you measuring it (equipment)? Over what time frame?",
          "C (Control Variables): Name at least 2 variables that must be kept constant. Explain HOW you will keep them constant (e.g. 'Use a thermostatically controlled water bath').",
          "R (Reliability): State that the experiment must be repeated at least 3 times at each interval to calculate a trustworthy mean and identify anomalies.",
          "S (Safety/Risk): Identify a specific hazard (e.g. bacteria, scalpel, hot water), the risk it poses, and the control measure (e.g. aseptic technique, cut away from body, use tongs)."
        ]
      }
    },
{ 'id': 'callout-examiner-62d50451', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-plan", prompt: "How many intervals of an independent variable are typically expected for a reliable trend?" },
      { id: "cue-2", blockId: "list-plan", prompt: "How should you ensure reliability in your experimental plan?" },
      { id: "cue-3", blockId: "list-plan", prompt: "Provide an example of how to securely control temperature." }
    ],
    summaryText: "When planning, stipulate the Independent variable (5 values), Dependent variable (measurement method), Control variables (with exact methods), Repeats (x3 for means), and Safety (hazard -> risk -> precaution).",
    ready: true
  },
  evidence: []
};