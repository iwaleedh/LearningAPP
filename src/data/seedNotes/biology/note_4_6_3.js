export const note_biology_4_6_3 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Investigate the rate of growth of microorganisms using a broth culture." }
    },
    {
      id: "h-cp13",
      type: "heading",
      data: { text: "Core Practical 13: Rate of Growth of Microorganisms", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "This practical involves using a colorimeter to continuously monitor the increasing turbidity (absorbance) of a bacterial culture over time." }
    },
    {
      id: "list-method",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Calibrate the colorimeter: Use a cuvette filled with sterile, uninoculated nutrient broth to 'zero' the colorimeter.",
          "Inoculate the broth: Add a known volume of a bacterial culture (e.g., E. coli or yeast) to a flask of sterile nutrient broth. Mix well.",
          "Incubate and sample: Place the flask in an incubator at an optimal temperature. At regular intervals (e.g., every 30 minutes), extract a small sample.",
          "Measure absorbance: Place the sample in a cuvette and read the absorbance using the colorimeter.",
          "Plot the data: Plot the absorbance vs. time to visualize the growth curve."
        ]
      }
    },
    {
      id: "p-analysis",
      type: "paragraph",
      data: { text: "Ensure strict aseptic techniques are maintained whenever withdrawing samples from the flask. As the microorganisms replicate, the broth becomes cloudier, and absorbance strictly rises during the log phase." }
    },
{ 'id': 'callout-examiner-7c9f1eb7', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Serial Dilution Calculation', 'text': 'Be careful when calculating the original bacteria density. You must multiply the number of colonies counted by the dilution factor **and** adjust for the volume plated. For example, if you plate $0.1\text{ cm}^3$, you must multiply by 10 to get the count per $1\text{ cm}^3$.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Log Phase = Exponential Growth",
        text: "During the exponential (log) phase, there are no limiting factors. Nutrients are abundant and waste levels are low, allowing the bacteria to divide at their maximum theoretical rate."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-method", prompt: "In a turbidity experiment, what is used to 'zero' the colorimeter?" },
      { id: "cue-2", blockId: "p-analysis", prompt: "Why does the absorbance reading increase over time?" }
    ],
    summaryText: "Core Practical 13 utilizes a colorimeter. A sterile broth cuvette zeroes the machine. Regular samples of an incubated broth are measured; as bacteria divide, the increasing cloudiness (turbidity) raises the absorbance reading.",
    ready: true
  },
  evidence: []
};