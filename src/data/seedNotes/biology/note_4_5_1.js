export const note_biology_4_5_1 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the stages of the light-dependent reactions, including photoionisation, photolysis, and photophosphorylation." }
    },
    {
      id: "h-ldr",
      type: "heading",
      data: { text: "Light-Dependent Reactions (LDR)", level: 2 }
    },
    {
      id: "p-ldr",
      type: "paragraph",
      data: { text: "The LDR takes place on the thylakoid membranes. It requires light and water. Its purpose is to produce ATP and reduced NADP (NADPH) to be used in the light-independent reactions." }
    },
    {
      id: "list-stages",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Photoionisation: Light energy hits chlorophyll in Photosystem II. Two electrons are excited to a higher energy level and leave the chlorophyll, ionising it.",
          "Electron Transport Chain: Excited electrons are picked up by electron carriers and passed down the ETC in redox reactions, losing energy at each carrier.",
          "Chemiosmosis: The energy lost by electrons is used to pump protons (H⁺) from the stroma into the thylakoid space, creating a proton gradient.",
          "ATP Synthesis: Protons diffuse back into the stroma through ATP synthase. Energy from this flow couples ADP and Pi to form ATP (photophosphorylation).",
          "Photolysis of Water: Light splits water into protons, electrons, and oxygen (H₂O → 2H⁺ + 2e⁻ + ½O₂). Electrons replace those lost from PSII.",
          "Reduction of NADP: Electrons from PSI are excited by light and, along with protons from water, are accepted by NADP to form reduced NADP (NADPH). "
        ]
      }
    },
{ 'id': 'callout-examiner-df5a1bf3', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'Students often struggle to distinguish between the roles of PSII and PSI. Remember that photolysis of water replaces electrons exclusively in Photosystem II, while NADP is reduced by electrons originating from Photosystem I.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-stages", prompt: "Describe what happens during photoionisation." },
      { id: "cue-2", blockId: "list-stages", prompt: "What is photolysis and what are its products?" },
      { id: "cue-3", blockId: "list-stages", prompt: "How is a proton gradient generated and used to produce ATP?" }
    ],
    summaryText: "In the LDR, light excites electrons (photoionisation) which move down the ETC, creating a proton gradient for ATP synthesis. Photolysis splits water, and electrons/protons reduce NADP.",
    ready: true
  },
  evidence: []
};