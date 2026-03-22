export const note_biology_4_5_3 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the concept of limiting factors in photosynthesis and how light intensity, CO₂ concentration, and temperature affect the rate." }
    },
    {
      id: "h-limiting",
      type: "heading",
      data: { text: "Limiting Factors", level: 2 }
    },
    {
      id: "p-limiting",
      type: "paragraph",
      data: { text: "The Law of Limiting Factors states that the rate of a physiological process will be limited by the factor which is nearest to its lowest value. Increasing other factors will not increase the rate." }
    },
    {
      id: "list-factors",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Light Intensity: Limits the light-dependent reactions. Low light means less ATP and NADPH produced, so GP cannot be reduced to GALP.",
          "Carbon Dioxide Concentration: Limits the Calvin cycle. Low CO₂ means less fixation with RuBP, so less GP and GALP are made.",
          "Temperature: Affects enzyme-controlled reactions (like RuBisCO in the Calvin cycle). Too low means low kinetic energy; too high means enzymes denature. Temperature does not strongly affect the light-dependent stage as it is driven by light energy."
        ]
      }
    },
    {
      id: "callout-glasshouse",
      type: "callout",
      data: { style: "worked", title: "Commercial Optimization", text: "Farmers control limiting factors in glasshouses to maximize yield. Heaters/coolers regulate temperature, artificial lamps provide lighting at night, and burning fossil fuels or pumping CO₂ increases CO₂ concentration." }
    },
{ 'id': 'callout-examiner-f76ae8e8', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': 'When interpreting limiting factor graphs, the factor plotted on the x-axis is only the limiting factor on the ascending slope. Once the graph plateaus, you must state that another factor (e.g. temperature or carbon dioxide concentration) has become limiting.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-limiting", prompt: "What is the principle of limiting factors?" },
      { id: "cue-2", blockId: "list-factors", prompt: "How does temperature affect the rate of photosynthesis?" }
    ],
    summaryText: "Photosynthesis rate is limited by the factor closest to its minimum (light, CO₂, or temperature). Light and CO₂ limit substrate availability (ATP/NADPH or RuBP combinations), while temperature restricts enzyme activity.",
    ready: true
  },
  evidence: []
};