export const note_biology_5_7_10 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Compare the structure and function of slow twitch and fast twitch muscle fibres." }
    },
    {
      id: "h-fibres",
      type: "heading",
      data: { text: "Muscle Fibre Types", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Human skeletal muscles contain a mix of two main fibre types, adapted for different types of exercise." }
    },
    {
      id: "table-fibres",
      type: "comparisonTable",
      data: {
        caption: "Comparing Slow vs Fast Twitch Fibres",
        headers: ["Feature", "Slow Twitch Fibres", "Fast Twitch Fibres"],
        rows: [
          ["Contraction Speed", "Slow and sustained.", "Rapid and intense."],
          ["Fatigue Resistance", "High (ideal for endurance running, posture).", "Low (fatigue quickly, ideal for sprinting/weightlifting)."],
          ["Energy Source", "Aerobic Respiration.", "Anaerobic Respiration (glycolysis)."],
          ["Mitochondria", "Many (need lots of ATP oxidatively).", "Few."],
          ["Capillary Network", "Dense (for maximum O2 supply).", "Sparse."],
          ["Myoglobin Content", "High (stores oxygen, gives a dark red colour).", "Low (lighter, whitish colour)."],
          ["Glycogen/Phosphocreatine", "Low.", "High (rapid fuel availability)."]
        ]
      }
    },
{ 'id': 'callout-examiner-25e9971e', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-46b0efaa', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "table-fibres", prompt: "Why do slow twitch fibres appear dark red compared to fast twitch?" },
      { id: "cue-2", blockId: "table-fibres", prompt: "Which type of fibre contains more mitochondria and why?" },
      { id: "cue-3", blockId: "table-fibres", prompt: "Which muscle fibre type would dominate in an Olympic weightlifter?" }
    ],
    summaryText: "Slow twitch fibres contract slowly, rely on aerobic respiration, have high myoglobin/mitochondria, and suit marathon running. Fast twitch fibres contract rapidly, rely on anaerobic respiration, fatigue quickly, and suit heavy short-burst sprinting.",
    ready: true
  },
  evidence: []
};