export const note_biology_5_8_14 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Summarise Core Practical 18: Investigating the effect of environments on habituation in snails." }
    },
    {
      id: "h-cp18",
      type: "heading",
      data: { text: "Core Practical 18: Snail Habituation", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Habituation is a simple form of learning where an animal learns to ignore a continuous or repeated harmless stimulus, ensuring it doesn't waste energy on false alarms. This practical tests touch habituation in giant African land snails." }
    },
    {
      id: "list-method",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Place a snail on a clean, firm surface and wait for it to fully emerge from its shell and begin acclimatizing.",
          "Using an unused cotton bud, firmly but gently tap the snail directly between its eye-stalks.",
          "The snail will instantly retract into its shell (a protective innate reflex).",
          "Start a stopwatch immediately. Record the exact time (in seconds) it takes for the snail to fully re-emerge and extend its eye-stalks again.",
          "Once fully emerged, immediately tap it again. Repeat this exact process for 10-15 trials.",
          "Plot a graph of Trial Number (x) against Re-emergence Time (y)."
        ]
      }
    },
    {
      id: "p-result",
      type: "paragraph",
      data: { text: "Results normally show a steep negative correlation. Calcium channels in the snail's sensory neurones become less responsive over repeated firings, releasing less neurotransmitter into the synapse, resulting in no motor response. The snail has successfully habituated." }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-intro", prompt: "From an evolutionary perspective, why is habituation highly beneficial?" },
      { id: "cue-2", blockId: "list-method", prompt: "Identify two vital control variables that must be kept identical during the snail trials." },
      { id: "cue-3", blockId: "p-result", prompt: "What is the neurological reason for the snail eventually ceasing to retract?" }
    ],
    summaryText: "Core Practical 18 tests habituation by repeatedly tapping a snail's eye-stalks and measuring the time it takes to re-emerge. Over the trials, sensory calcium channels become less responsive, neurotransmitter release drops, and the withdrawal reflex significantly dramatically shortens.",
    ready: true
  },
  evidence: []
};