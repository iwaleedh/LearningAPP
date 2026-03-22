export const note_biology_4_5_22 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Investigate the effect of temperature on the development of organisms (e.g., seedling growth rate or hatching of brine shrimp)." }
    },
    {
      id: "h-cp12",
      type: "heading",
      data: { text: "Core Practical 12: Temperature and Development", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "By incubating organisms (such as brine shrimp eggs or germinating seeds) at a range of controlled temperatures, we can measure how temperature impacts their metabolic rate and development speed." }
    },
    {
      id: "list-method",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Set up several water baths or incubators at different temperatures (e.g., 5°C, 15°C, 25°C, 35°C, 45°C).",
          "Place an equal number of brine shrimp eggs (or seeds) into a beaker of saltwater (or on damp filter paper) for each temperature.",
          "Control key variables: For brine shrimp, control the salinity of water, light intensity, oxygen concentration, and the time allowed for hatching (e.g., 24 hours).",
          "After the set time, count the number of hatched larvae (or measure the length of the seedling radicle).",
          "Calculate the rate of development (e.g., number hatched per hour or mm grown per day)."
        ]
      }
    },
    {
      id: "p-conclusion",
      type: "paragraph",
      data: { text: "The highest count (or longest growth) will occur at the optimum temperature due to maximal enzyme activity. Temperatures far above or below this reduce the rate drastically due to low kinetic energy or enzyme denaturation." }
    },
    {
      id: "callout-ethics",
      type: "callout",
      data: { style: "warning", title: "Ethical Considerations", text: "When using animals like brine shrimp, minimize suffering. Return them to their natural habitat if possible, or maintain them appropriately. Do not use extreme temperatures that unnecessarily cause death." }
    },
{ 'id': 'callout-examiner-efa6433b', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Control Variables', 'text': 'In practical investigations on temperature effects, explicitly list the variables to be kept constant (like pH, light intensity, or water availability) to ensure valid conclusions about the relationship.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Q10 Coefficient",
        text: "You may be asked to calculate Q10. Remember it represents the factor by which the rate of reaction increases for every 10\u00b0C rise in temperature. A Q10 of 2 means the rate doubles."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-method", prompt: "Name three variables that must be controlled when investigating brine shrimp hatching rate." },
      { id: "cue-2", blockId: "p-conclusion", prompt: "Explain the biological reason for the optimum temperature having the highest hatch rate." },
      { id: "cue-3", blockId: "callout-ethics", prompt: "What are the ethical considerations when using live invertebrates in an experiment?" }
    ],
    summaryText: "Hatching rate or seedling growth is measured at various temperatures using water baths. Variables like salinity, light, and duration must be controlled. Development peaks at optimum temperatures (optimal enzyme kinetics).",
    ready: true
  },
  evidence: []
};