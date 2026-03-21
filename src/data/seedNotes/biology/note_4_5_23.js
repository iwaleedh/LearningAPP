export const note_biology_4_5_23 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the process of evolution via natural selection and how it leads to adaptation." }
    },
    {
      id: "h-natural-selection",
      type: "heading",
      data: { text: "Evolution via Natural Selection", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Evolution is the change in allele frequencies in a population over time. The primary mechanism driving this is natural selection." }
    },
    {
      id: "list-steps",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Mutation: Random mutations introduce new alleles into a population, creating genetic variation.",
          "Selection Pressure: An environmental factor (e.g., disease, predator, climate change) creates a struggle for survival.",
          "Advantageous Allele: Individuals possessing the advantageous allele are better adapted, and are more likely to survive and reproduce.",
          "Inheritance: They pass the advantageous allele onto their offspring.",
          "Increasing Frequency: Over many generations, the frequency of the advantageous allele increases in the population."
        ]
      }
    },
    {
      id: "h-adaptation",
      type: "heading",
      data: { text: "Types of Adaptation", level: 3 }
    },
    {
      id: "list-adaptations",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Anatomical: Structural features of an organism's body (e.g., whales having a thick layer of blubber).",
          "Physiological: Processes inside the body (e.g., some bacteria producing antibiotics or hibernation lowering metabolism).",
          "Behavioural: Ways an organism acts (e.g., possums playing dead or birds migrating)."
        ]
      }
    },
{ 'id': 'callout-examiner-689d9c68', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-steps", prompt: "Outline the five main steps of natural selection." },
      { id: "cue-2", blockId: "list-adaptations", prompt: "Identify the three types of adaptations and give one example of each." }
    ],
    summaryText: "Mutations create variation. Selection pressures mean those with advantageous alleles survive, reproduce, and pass on the alleles. Over generations, creating anatomical, physiological, or behavioural adaptations.",
    ready: true
  },
  evidence: []
};