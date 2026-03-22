export const note_biology_4_5_20 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Carry out a study on the ecology of a habitat, using quadrats and transects." }
    },
    {
      id: "h-sampling",
      type: "heading",
      data: { text: "Core Practical 11: Habitat Ecology Survey", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "It is impossible to count every organism, so we take samples. Samples must be random to avoid bias and large enough to be representative." }
    },
    {
      id: "list-random",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Random Sampling (Quadrats): Used for uniform areas. Lay out a grid using measuring tapes. Generate random coordinates using a random number generator. Place the quadrat at those coordinates.",
          "Percentage Cover: Estimate the percentage of the quadrat visually covered by a plant species. Good for grass/moss.",
          "Frequency: If a species is found in 15 out of 30 quadrats, its frequency is 50%."
        ]
      }
    },
    {
      id: "list-systematic",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Systematic Sampling (Transects): Used to look at how species distribution changes across a gradient (e.g., from shore to woodland).",
          "Line transect: A tape measure laid along the gradient, recording species touching the line.",
          "Belt transect: Placing a quadrat along the tape at regular intervals (e.g., every 2m) to record species abundance and abiotic factors (like light meter reading) simultaneously."
        ]
      }
    },
    {
      id: "callout-stats",
      type: "callout",
      data: { style: "key", title: "Statistical Analysis", text: "Spearman's Rank Correlation Coefficient can be used to statistically check if there is a significant correlation between a species' abundance (from the belt transect) and an abiotic factor (like distance or light)." }
    },
{ 'id': 'callout-examiner-7c6f0715', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Sampling Techniques', 'text': 'Examiners often ask for justifications of sampling methods. Use random sampling (with random coordinates) for uniform areas to eliminate bias, and systematic sampling (using transects) across an environmental gradient.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Random vs Systematic Sampling",
        text: "Use a random number generator for quadrats in a uniform area to avoid bias. Only use a transect (systematic sampling) if there is an environmental gradient like a shoreline or forest edge."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-random", prompt: "How do you ensure quadrat sampling is random and unbiased?" },
      { id: "cue-2", blockId: "list-systematic", prompt: "When is a belt transect used instead of random quadrats?" },
      { id: "cue-3", blockId: "callout-stats", prompt: "Which statistical test determines correlation between abundance and an abiotic factor?" }
    ],
    summaryText: "Ecology surveys use random quadrats for uniform areas (coordinates via random number generator) and belt transects for environmental gradients. Data often includes percentage cover and is analyzed using Spearman's rank for correlations.",
    ready: true
  },
  evidence: []
};