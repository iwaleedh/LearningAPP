export const note_biology_4_6_10 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the difference between active vs passive immunity, and natural vs artificial immunity." }
    },
    {
      id: "h-immunity",
      type: "heading",
      data: { text: "Developing Immunity", level: 2 }
    },
    {
      id: "p-immunity",
      type: "paragraph",
      data: { text: "Immunity refers to the presence of memory cells (B and T) that remain in the blood decades after the original infection. During a secondary infection by the same pathogen, memory cells divide rapidly, producing antibodies faster and in greater concentration, destroying the pathogen before symptoms appear." }
    },
    {
      id: "table-immunity",
      type: "comparisonTable",
      data: {
        caption: "Summary of Immunity Types",
        headers: ["Type", "Natural", "Artificial"],
        rows: [
          ["Active (Body makes memory cells & antibodies; long-lasting)", "Catching a disease and recovering.", "Getting a vaccination (contains dead/attenuated pathogen)."],
          ["Passive (Body receives premade antibodies; short-term, no memory cells)", "Antibodies passed from mother to baby via placenta or breast milk.", "Injecting antibodies directly (e.g., antivenom, rabies shot)."]
        ]
      }
    },
    {
      id: "h-vaccines",
      type: "heading",
      data: { text: "Vaccines", level: 3 }
    },
    {
      id: "p-vaccines",
      type: "paragraph",
      data: { text: "Vaccines contain antigens from a pathogen (e.g., dead, weakened, or fragments). They trick the immune system into triggering a primary specific response (creating memory cells) without causing the disease itself." }
    },
{ 'id': 'callout-examiner-75b9bf1d', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Passive vs Active', 'text': 'Passive immunity provides immediate but temporary protection (no memory cells), whereas active immunity takes time to develop but is long-lasting.' } },
{ 'id': 'callout-examiner-86e95c96', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Vaccines', 'text': 'A common mistake is saying vaccines \'contain antibodies\'. They contain antigens (or attenuated pathogens) which trigger the body to actively produce its own antibodies and memory cells.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-immunity", prompt: "Why is a secondary immune response quicker than a primary response?" },
      { id: "cue-2", blockId: "table-immunity", prompt: "Give an example of natural passive immunity." },
      { id: "cue-3", blockId: "table-immunity", prompt: "What type of immunity does a vaccine provide?" }
    ],
    summaryText: "Secondary responses are faster due to pre-existing memory cells. Active immunity is long-lasting as the body produces its own antibodies/memory cells (natural = infection, artificial = vaccine). Passive immunity is short-lived as antibodies are received (natural = breast milk, artificial = antivenom injections).",
    ready: true
  },
  evidence: []
};