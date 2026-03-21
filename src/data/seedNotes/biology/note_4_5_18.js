export const note_biology_4_5_18 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the causes of climate change, data extrapolation, and the effects on plants and animals." }
    },
    {
      id: "h-greenhouse",
      type: "heading",
      data: { text: "The Greenhouse Effect", level: 2 }
    },
    {
      id: "p-greenhouse",
      type: "paragraph",
      data: { text: "Greenhouse gases (CO₂, methane) absorb infrared radiation emitted by the Earth's surface and reflect some of it back, trapping heat. Human activities have dramatically increased the concentration of these gases, enhancing this effect." }
    },
    {
      id: "h-effects",
      type: "heading",
      data: { text: "Effects on Organisms", level: 2 }
    },
    {
      id: "list-effects",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Enzyme Activity: Increasing temperatures initially increase kinetic energy and collision rates, speeding up metabolism (e.g. growth rates). Above optimum temperatures, enzymes denature, slowing development.",
          "Phenology: Shifting temperatures alter the timing of seasonal events (e.g., earlier flowering, earlier bird migration). This can cause life cycles to fall out of sync with their inter-dependent food sources.",
          "Distribution: Species ranges shift towards the poles or higher altitudes to find cooler climates. Species unable to migrate or adapt face extinction."
        ]
      }
    },
    {
      id: "callout-models",
      type: "callout",
      data: { style: "warning", title: "Predictive Models", text: "Scientists use computer models to extrapolate current data into the future. Extrapolation is uncertain because it assumes current trends continue unchanged, ignoring potential unknown feedback mechanisms, future emission reductions, or unpredictable solar activity." }
    },
{ 'id': 'callout-examiner-5a27328e', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-greenhouse", prompt: "Describe the mechanism of the greenhouse effect." },
      { id: "cue-2", blockId: "list-effects", prompt: "How does climate change alter species distribution?" },
      { id: "cue-3", blockId: "callout-models", prompt: "Why are computer models extrapolating future climate change uncertain?" }
    ],
    summaryText: "Greenhouse gases trap infrared radiation. Rising temperatures affect enzyme reactions (speeding up or denaturing), alter phenology (seasonal timings), and shift species distribution. Extrapolating this data is inherently uncertain due to unpredictable future human behavior and feedback loops.",
    ready: true
  },
  evidence: []
};