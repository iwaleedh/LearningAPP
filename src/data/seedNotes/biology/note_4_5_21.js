export const note_biology_4_5_21 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the effect of temperature on the rate of enzyme activity and relate it to Q10." }
    },
    {
      id: "h-temp-enzyme",
      type: "heading",
      data: { text: "Temperature and Enzyme Activity", level: 2 }
    },
    {
      id: "p-kinetic",
      type: "paragraph",
      data: { text: "Below the optimum temperature: Increasing temperature increases the kinetic energy of enzymes and substrates. They move faster, resulting in more frequent successful collisions. More enzyme-substrate complexes form, accelerating the rate of reaction." }
    },
    {
      id: "p-denature",
      type: "paragraph",
      data: { text: "Above the optimum temperature: The increased kinetic energy causes molecular vibrations that break the weak hydrogen and ionic bonds holding the enzyme's tertiary structure together. The active site changes shape, preventing the substrate from binding. The enzyme is denatured, and the reaction rate sharply drops." }
    },
    {
      id: "h-q10",
      type: "heading",
      data: { text: "Temperature Coefficient (Q10)", level: 2 }
    },
    {
      id: "p-q10",
      type: "paragraph",
      data: { text: "The temperature coefficient (Q10) calculates how much the rate of a reaction changes when the temperature is raised by 10 °C." }
    },
    {
      id: "callout-q10-formula",
      type: "callout",
      data: { style: "key", title: "Q10 Formula", text: "Q10 = Rate of reaction at (T + 10) °C / Rate of reaction at T °C" }
    },
    {
      id: "p-q10-val",
      type: "paragraph",
      data: { text: "For most enzyme-controlled reactions (before the optimum temperature is reached), the Q10 value is roughly 2. This means the rate of reaction doubles for every 10 °C rise in temperature." }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-kinetic", prompt: "Why does an increase in temperature (below optimum) increase the rate of an enzyme-controlled reaction?" },
      { id: "cue-2", blockId: "p-denature", prompt: "What happens to an enzyme above its optimum temperature?" },
      { id: "cue-3", blockId: "callout-q10-formula", prompt: "State the formula for calculating the temperature coefficient (Q10)." }
    ],
    summaryText: "Up to the optimum, higher temps increase kinetic energy and successful collisions (often doubling the rate per 10°C, Q10=2). Above the optimum, vibrations break bonds, denaturing the active site.",
    ready: true
  },
  evidence: []
};