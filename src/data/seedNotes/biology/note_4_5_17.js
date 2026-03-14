export const note_biology_4_5_17 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Evaluate the evidence for climate change and global warming." }
    },
    {
      id: "h-evidence",
      type: "heading",
      data: { text: "Evidence for Climate Change", level: 2 }
    },
    {
      id: "p-def",
      type: "paragraph",
      data: { text: "Climate change refers to significant long-term alterations in global weather patterns. Global warming is the specific rapid increase in average global temperatures, particularly over the last 100 years." }
    },
    {
      id: "list-evidence",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Temperature Records: Reliable thermometer records over the past ~150 years show a clear upward trend in global mean temperature.",
          "Peat Bogs: Peat contains pollen grains perfectly preserved due to acidic, anaerobic conditions. The pollen extracted from deeper (older) layers identifies the plant species present at that time. Knowing the climate those species preferred allows scientists to infer past climates.",
          "Dendrochronology: (Tree ring dating). Trees grow more in warmer, wetter years, producing thicker rings. Ring thickness indicates climate conditions up to thousands of years ago.",
          "Ice Cores: Deep ice cores trap air bubbles. Analyzing the isotopic composition of oxygen and the concentration of CO₂ in these bubbles reveals the atmospheric composition and temperature at the time the snow fell (up to 800,000 years ago)."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-evidence", prompt: "How can peat bogs provide evidence for past climates?" },
      { id: "cue-2", blockId: "list-evidence", prompt: "What does dendrochronology measure?" },
      { id: "cue-3", blockId: "list-evidence", prompt: "How are ice cores used to reveal past temperatures and atmospheres?" }
    ],
    summaryText: "Climate change is evidenced by direct temperature records, peat bog pollen analysis (indicating past plant species), dendrochronology (tree ring widths for temperature/moisture), and ice cores (trapped gas bubbles).",
    ready: true
  },
  evidence: []
};