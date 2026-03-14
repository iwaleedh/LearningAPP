export const note_biology_5_7_5 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Compare aerobic to anaerobic respiration, and understand lactate and ethanol fermentation." }
    },
    {
      id: "h-anaerobic",
      type: "heading",
      data: { text: "Anaerobic Respiration", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "When oxygen is absent, the ETC shuts down, so Krebs and Link stop. Glycolysis can continue to produce a net of 2 ATP per glucose, provided the reduced NAD is oxidized back to NAD by an alternative pathway." }
    },
    {
      id: "h-lactate",
      type: "heading",
      data: { text: "Lactate Fermentation (Animals)", level: 3 }
    },
    {
      id: "list-lactate",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Pyruvate accepts the hydrogen atoms from reduced NAD.",
          "This reduces pyruvate to lactate (lactic acid) and oxidizes NADH back to NAD.",
          "The regenerated NAD returns to glycolysis to pick up more hydrogen, allowing a small continuous supply of ATP.",
          "Lactate lowers cellular pH, which can denature muscle enzymes and cause fatigue. It is later transported to the liver and converted back to glucose."
        ]
      }
    },
    {
      id: "h-ethanol",
      type: "heading",
      data: { text: "Ethanol Fermentation (Plants & Fungi)", level: 3 }
    },
    {
      id: "list-ethanol",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Pyruvate is decarboxylated (loses CO2) to an intermediate called ethanal.",
          "Ethanal accepts the hydrogen atoms from reduced NAD, becoming ethanol, regenerating NAD.",
          "This pathway is irreversible."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-intro", prompt: "Why must reduced NAD be oxidized during anaerobic respiration?" },
      { id: "cue-2", blockId: "list-lactate", prompt: "What happens to the pyruvate in mammalian anaerobic respiration?" },
      { id: "cue-3", blockId: "list-ethanol", prompt: "What are the two end products of anaerobic respiration in yeast?" }
    ],
    summaryText: "Without oxygen, only glycolysis runs (yielding 2 ATP). To keep glycolysis going, NADH must be oxidized. In animals, pyruvate is reduced to toxic lactate. In plants/yeast, pyruvate is decarboxylated to ethanal, then reduced to ethanol and CO2.",
    ready: true
  },
  evidence: []
};