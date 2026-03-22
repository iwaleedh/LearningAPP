export const note_biology_4_6_2 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the four phases of the bacterial growth curve." }
    },
    {
      id: "h-growth-curve",
      type: "heading",
      data: { text: "The Bacterial Growth Curve", level: 2 }
    },
    {
      id: "p-curve",
      type: "paragraph",
      data: { text: "When bacteria are introduced into a closed liquid culture (batch culture) with limited nutrients and no removal of waste, their population growth follows a predictable curve with four distinct phases." }
    },
    {
      id: "list-phases",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Lag Phase: Population size does not increase. Bacteria are acclimating to the new environment, synthesizing RNA, enzymes, and other molecules necessary for growth.",
          "Log (Exponential) Phase: The bacteria reproduce by binary fission at their maximum rate. The population doubles at a constant rate because nutrients are plentiful and space is unconstrained.",
          "Stationary Phase: Growth rate equals death rate. Nutrients begin to run out, and toxic waste products (like lactic acid) build up. The population plateaus.",
          "Death (Decline) Phase: Death rate exceeds growth rate. Nutrients become severely depleted, and toxicity reaches lethal levels. The population crashes."
        ]
      }
    },
    {
      id: "callout-logs",
      type: "callout",
      data: { style: "key", title: "Logarithmic Scales", text: "Because bacterial numbers increase so rapidly in the log phase, population data is almost always plotted on a log base 10 scale (y-axis) against time (x-axis) to fit the data on a single readable graph." }
    },
{ 'id': 'callout-examiner-0da48692', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Logarithmic Scales', 'text': 'When interpreting or drawing bacterial growth curves, make sure you understand that the y-axis is logarithmic (usually $log_{10}$ of the number of cells). This is because bacterial numbers increase exponentially and vary over too large a range for a linear scale.' } },
{ 'id': 'callout-examiner-283623f6', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Stationary Phase Explanation', 'text': 'In the stationary phase, bacterial cells do not stop dividing entirely. Instead, the rate of cell division equals the rate of cell death, usually due to limiting nutrients and the build-up of toxic waste products.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Logarithmic Scales",
        text: "Bacterial growth graphs often use a log\u2081\u2080 scale on the y-axis because the numbers get so large so quickly. Pay close attention to the axes before reading off a value."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-phases", prompt: "Name the four phases of the bacterial growth curve in order." },
      { id: "cue-2", blockId: "list-phases", prompt: "Explain what occurs during the lag phase." },
      { id: "cue-3", blockId: "list-phases", prompt: "Why does population growth cease in the stationary phase?" }
    ],
    summaryText: "The bacterial growth curve in batch culture consists of the Lag phase (acclimation), Log phase (exponential reproduction), Stationary phase (nutrients decline, wastes rise, birth = death), and Death phase (population crashes). Data is plotted logarithmically.",
    ready: true
  },
  evidence: []
};