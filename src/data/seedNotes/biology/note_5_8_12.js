export const note_biology_5_8_12 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Discuss the potential risks and ethical implications of Genetically Modified Organisms (GMOs)." }
    },
    {
      id: "h-gmo",
      type: "heading",
      data: { text: "The Risks of Transgenic Organisms", level: 2 }
    },
    {
      id: "list-gmo",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Horizontal Gene Transfer: A major fear is that antibiotic resistance marker genes (used frequently in bacterial genetic engineering) could spread freely through wild bacterial populations, worsening the antibiotic resistance crisis.",
          "Agricultural Contamination: Pollen from GM crop plants (e.g. herbicide-resistant soy) could blow into wild fields, cross-fertilizing with wild weeds to accidentally create 'super-weeds' that are immune to chemical weedkillers.",
          "Biodiversity Loss: Over-reliance on widespread, genetically identical GM crops could drastically reduce local insect populations and disrupt entire food webs (e.g. Bt corn producing toxins that might inadvertently injure non-target butterfly species).",
          "Corporate Monopolies: Large agricultural corporations patent GM seeds, preventing poor farmers in developing countries from saving seeds year-on-year, enforcing a cycle of extreme debt."
        ]
      }
    },
{ 'id': 'callout-examiner-a1e71d01', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': 'In long-answer questions about GMOs, provide a balanced scientific argument. Discuss specific ecological risks, such as potential horizontal gene transfer to wild relatives creating \'superweeds\', alongside the economic and nutritional benefits.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-gmo", prompt: "What is the biological mechanism by which a 'super-weed' might inadvertently be created?" },
      { id: "cue-2", blockId: "list-gmo", prompt: "Why does the use of antibiotic resistance marker genes in GM bacteria pose a medical threat?" },
      { id: "cue-3", blockId: "list-gmo", prompt: "How might mass GM farming affect wide-scale biodiversity?" }
    ],
    summaryText: "While GMOs promise massive agricultural yields, ecological risks include creating herbicide-resistant super-weeds via cross-pollination, disrupting insect food webs, transferring antibiotic resistance traits to wild bacteria, and fueling corporate agricultural monopolies.",
    ready: true
  },
  evidence: []
};