export const note_biology_4_5_8 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the structure of ATP (Adenosine Triphosphate) and its role as the universal energy currency in cells." }
    },
    {
      id: "h-atp-structure",
      type: "heading",
      data: { text: "Structure of ATP", level: 2 }
    },
    {
      id: "p-atp",
      type: "paragraph",
      data: { text: "ATP is a nucleotide derivative. It consists of the nitrogenous base adenine, the pentose sugar ribose, and a chain of three inorganic phosphate groups." }
    },
    {
      id: "h-atp-function",
      type: "heading",
      data: { text: "Function of ATP", level: 2 }
    },
    {
      id: "list-atp",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Universal energy currency: ATP provides immediate, usable energy for cellular processes (e.g., active transport, muscle contraction, protein synthesis).",
          "Hydrolysis: The bond between the second and third phosphate groups is unstable and easily broken by hydrolysis (enzyme: ATP hydrolase), releasing a small, manageable amount of energy.",
          "Phosphorylation: The released inorganic phosphate (Pi) can be added to other compounds to make them more reactive (lower activation energy).",
          "Regeneration: ATP is rapidly resynthesised from ADP and Pi during respiration and photosynthesis (enzyme: ATP synthase) in a condensation reaction."
        ]
      }
    },
    {
      id: "callout-glucose-vs-atp",
      type: "callout",
      data: { style: "worked", title: "ATP vs Glucose", text: "Glucose contains too much energy; if released all at once, much would be wasted as heat, raising cell temperature destructively. ATP releases energy in small, discrete, manageable amounts in a single-step reaction." }
    },
{ 'id': 'callout-examiner-87c58eca', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'Do not confuse the nitrogenous base \'adenine\' in ATP with the nucleoside \'adenosine\'. ATP consists of an adenine base, a ribose sugar, and three phosphate groups.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-atp", prompt: "What are the three components of an ATP molecule?" },
      { id: "cue-2", blockId: "callout-glucose-vs-atp", prompt: "Why is ATP a better immediate source of energy than glucose?" },
      { id: "cue-3", blockId: "list-atp", prompt: "What is the purpose of phosphorylating other compounds using the Pi released from ATP?" }
    ],
    summaryText: "ATP contains adenine, ribose, and three phosphates. It acts as an immediate energy source, releasing small, manageable amounts of energy in a single step upon hydrolysis to ADP + Pi.",
    ready: true
  },
  evidence: []
};