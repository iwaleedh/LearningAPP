export const note_biology_5_7_13 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the role of adrenaline in the \"fight or flight\" response." }
    },
    {
      id: "h-adrenaline",
      type: "heading",
      data: { text: "The Role of Adrenaline", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Adrenaline is a hormone secreted into the blood by the adrenal glands (located above the kidneys) during times of acute stress or anticipation of exercise (the 'fight or flight' response)." }
    },
    {
      id: "list-effects",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Heart: Adrenaline binds to receptors on the SAN, increasing the frequency of electrical excitation. This increases heart rate and stroke volume, rapidly pumping oxygenated blood to muscles.",
          "Lungs: Relaxes the smooth muscle of the bronchioles, causing bronchodilation, maximizing airflow and gaseous exchange.",
          "Liver: Stimulates enzymes to convert stored glycogen back into glucose (glycogenolysis), releasing it into the blood to fuel muscle respiration.",
          "Vascular System: Causes vasoconstriction of arterioles to the gut and skin, but vasodilation to skeletal muscles, prioritizing blood flow to active tissues."
        ]
      }
    },
{ 'id': 'callout-examiner-027e5b60', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-198a82f2', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-intro", prompt: "Where is adrenaline produced?" },
      { id: "cue-2", blockId: "list-effects", prompt: "How does adrenaline affect the liver during exercise?" },
      { id: "cue-3", blockId: "list-effects", prompt: "What effect does adrenaline have on the lungs?" }
    ],
    summaryText: "Adrenaline preps the body for action. It increases SAN firing (HR up), dilates bronchioles (airflow up), triggers glycogenolysis in the liver (blood glucose up), and shunts blood away from digestion towards skeletal muscles.",
    ready: true
  },
  evidence: []
};