export const note_biology_5_7_4 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the process of Oxidative Phosphorylation, including the electron transport chain and chemiosmosis." }
    },
    {
      id: "h-oxphos",
      type: "heading",
      data: { text: "Oxidative Phosphorylation", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "The final stage of aerobic respiration takes place on the inner mitochondrial membrane (cristae), which contains the proteins of the electron transport chain and ATP synthase." }
    },
    {
      id: "list-process",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Hydrogen atoms are delivered by reduced NAD and reduced FAD. The H atoms split into protons (H+) and electrons (e-).",
          "The electrons pass along the electron transport chain (ETC) in a series of redox reactions, losing energy at each carrier.",
          "This energy is used by the carriers to pump protons from the matrix into the intermembrane space.",
          "A high concentration of protons builds up, creating an electrochemical gradient.",
          "Protons diffuse back into the matrix down their gradient through the enzyme ATP synthase. This movement drives the rotary synthesis of ATP from ADP and Pi (chemiosmosis).",
          "At the end of the ETC, oxygen acts as the final electron acceptor. It combines with electrons and protons to form water."
        ]
      }
    },
    {
      id: "callout-oxygen",
      type: "callout",
      data: { style: "warning", title: "Role of Oxygen", text: "Without oxygen to accept the electrons, the ETC halts. Protons cannot be pumped, ATP synthases stops, and NADH cannot be oxidized back to NAD. The Krebs cycle and Link reaction stop." }
    },
{ 'id': 'callout-examiner-f146262d', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Role of Oxygen', 'text': 'The most common error is forgetting the exact role of oxygen. It acts as the \'final electron acceptor\', combining with electrons emerging from the electron transport chain and protons from the matrix to form water. Without it, the entire chain (and Krebs cycle) would halt.' } },
{ 'id': 'callout-examiner-884232f8', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Role of Oxygen', 'text': 'The most common error is forgetting the exact role of oxygen. It acts as the \'final electron acceptor\', combining with electrons emerging from the electron transport chain and protons from the matrix to form water. Without it, the entire chain (and Krebs cycle) would halt.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-process", prompt: "How do protons enter the intermembrane space?" },
      { id: "cue-2", blockId: "list-process", prompt: "Explain chemiosmosis." },
      { id: "cue-3", blockId: "callout-oxygen", prompt: "What is the final electron acceptor in the electron transport chain?" }
    ],
    summaryText: "NADH/FADH2 release H atoms that split into electrons and protons. Electrons move down the ETC, releasing energy to pump protons into the intermembrane space. Protons flow back through ATP synthase to make ATP. Oxygen is the final electron acceptor, forming water.",
    ready: true
  },
  evidence: []
};