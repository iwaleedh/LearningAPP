export const note_biology_4_5_25 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Evaluate the contentious nature of evaluating data and communicating findings about climate change." }
    },
    {
      id: "h-data",
      type: "heading",
      data: { text: "Contentious Environmental Issues", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Data regarding climate change is often debated. Scientists rely on publishing findings in peer-reviewed scientific journals and presenting at scientific conferences to validate their work." }
    },
    {
      id: "list-validation",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Peer Review: Before research is published, independent experts in the same field critically evaluate the data, methods, and conclusions to ensure it is robust, valid, and not biased.",
          "Conferences: Let scientists present new data to their peers for instant debate and critique."
        ]
      }
    },
    {
      id: "h-reasons",
      type: "heading",
      data: { text: "Why Climate Change is Contentious", level: 3 }
    },
    {
      id: "list-reasons",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Lack of absolute certainty: Historical data (e.g., ice cores) are estimates, and extrapolation models cannot account for every future variable.",
          "Economic interests: Industries like fossil fuels and aviation stand to lose money from strict climate regulations, so they may fund biased research or lobby governments to play down the risk.",
          "Political agendas: Governments might minimize the threat of climate change to win votes, avoid expensive infrastructure changes, or protect domestic jobs in polluting sectors.",
          "Complexity: Ecosystems are incredibly complex, and establishing a direct 100% causal link between one country's emissions and a specific weather event is incredibly difficult."
        ]
      }
    },
{ 'id': 'callout-examiner-bd8b4eb9', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-validation", prompt: "Explain the role of peer review in validating scientific data." },
      { id: "cue-2", blockId: "list-reasons", prompt: "State two reasons why conclusions on climate change data are often contentious." }
    ],
    summaryText: "Scientific claims are validated via peer review and conferences. However, climate change conclusions remain contentious due to predictive uncertainty, economic lobbying from fossil fuel industries, and political agendas protecting jobs.",
    ready: true
  },
  evidence: []
};