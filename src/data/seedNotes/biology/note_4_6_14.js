export const note_biology_4_6_14 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the role of microorganisms in the decomposition of organic matter and the recycling of carbon." }
    },
    {
      id: "h-decomposition",
      type: "heading",
      data: { text: "Decomposition and the Carbon Cycle", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "When living organisms die, the complex organic biological molecules in their bodies (proteins, carbohydrates, lipids, nucleic acids) lock away vital chemical elements like carbon. Decomposers are essential for recycling these elements." }
    },
    {
      id: "list-decomp",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Microorganisms (bacteria and fungi) secrete extracellular enzymes (e.g., proteases, cellulases) onto dead organic matter.",
          "The enzymes hydrolyze the large, complex polymers into smaller, soluble monomers (e.g., amino acids, glucose).",
          "The decomposers then absorb these monomers by diffusion or active transport.",
          "The decomposers use the absorbed monomers for respiration, releasing carbon dioxide back into the atmosphere.",
          "Plants then absorb this CO2 for photosynthesis, completing the carbon cycle."
        ]
      }
    },
    {
      id: "callout-factors",
      type: "callout",
      data: { style: "worked", title: "Factors Affecting Decay", text: "The rate of decomposition relies on temperature (enzyme kinetics), water availability (for hydrolysis and survival), and oxygen levels (for aerobic respiration by the microbes)." }
    },
{ 'id': 'callout-examiner-de9a1dda', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Respiration', 'text': 'Don\'t forget that decomposers (bacteria and fungi) respire aerobically, which is the process that releases carbon in organic compounds back into the atmosphere as CO₂.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Autolysis vs Putrefaction",
        text: "Make sure you distinguish them clearly. Autolysis is the self-digestion of tissue by its own intracellular enzymes inside lysosomes. Putrefaction follows this, caused by the hydrolytic enzymes of external bacteria."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-decomp", prompt: "How do bacteria break down the large polymers in dead matter?" },
      { id: "cue-2", blockId: "list-decomp", prompt: "How is carbon from a dead animal returned to the atmosphere?" },
      { id: "cue-3", blockId: "callout-factors", prompt: "Why does decomposition halt in waterlogged, anaerobic soil?" }
    ],
    summaryText: "Decomposers (bacteria/fungi) secrete extracellular enzymes that hydrolyze dead organic material into soluble monomers. They absorb these and aerobically respire, releasing locked carbon back into the atmosphere as CO2.",
    ready: true
  },
  evidence: []
};