export const note_biology_5_8_8 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the differences between innate and learned animal behavior, including the critical period for visual development." }
    },
    {
      id: "h-innate",
      type: "heading",
      data: { text: "Innate vs Learned Behaviour", level: 2 }
    },
    {
      id: "list-behaviors",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Innate Behaviours: Genetically hardwired, stereotyped responses. E.g., reflexes, taxes (directional movement), kinesis (random movement in response to intensity). Essential for immediate survival.",
          "Learned Behaviours: Altered by experience. Includes habituation (ignoring repeated safe stimuli), classical conditioning (Pavlov's dogs), operant conditioning (trial and error), and insight learning."
        ]
      }
    },
    {
      id: "h-hubel",
      type: "heading",
      data: { text: "Critical Periods: Hubel and Wiesel", level: 2 }
    },
    {
      id: "p-hubel",
      type: "paragraph",
      data: { text: "Visual development in mammals relies heavily on early environmental inputs. Hubel and Wiesel demonstrated this using kittens and monkeys." }
    },
    {
      id: "list-hubel",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Hypothesis: The visual cortex requires visual stimulation during a specific 'critical period' in early life to develop proper neural connections.",
          "Experiment: They sutured one eye shut in newborn kittens. After a few months, they opened the eye.",
          "Findings: The deprived eye was structurally normal, but the kitten was blind in that eye. Ocular dominance columns corresponding to the open eye had expanded and completely taken over the brain territory of the closed eye.",
          "Conclusion: If synapses aren't stimulated during the critical period, they are permanently pruned away. This proves visual cortex development is plastic and activity-dependent."
        ]
      }
    },
{ 'id': 'callout-examiner-7825103a', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-behaviors", prompt: "What is habituation?" },
      { id: "cue-2", blockId: "p-hubel", prompt: "Explain the concept of a 'critical period' in neural development." },
      { id: "cue-3", blockId: "list-hubel", prompt: "According to Hubel and Wiesel, what happens to the visual cortex synapses of a deprived eye?" }
    ],
    summaryText: "Innate behaviours are genetically fixed, while learned behaviours (like habituation) adjust to experience. Hubel & Wiesel proved that visual stimulation during an early 'critical period' is essential to maintain and shape neural connections in the visual cortex.",
    ready: true
  },
  evidence: []
};