export const note_biology_5_8_6 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Identify the main regions of the human brain and their primary functions." }
    },
    {
      id: "h-brain",
      type: "heading",
      data: { text: "Brain Regions", level: 2 }
    },
    {
      id: "list-brain",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Cerebrum: The highly folded outer layer (cerebral cortex). Split into two hemispheres. Controls higher cognitive functions: voluntary movement, memory, learning, language, and conscious thought.",
          "Cerebellum: Located at the rear, just below the cerebrum. Coordinates smooth movement, balance, and posture by integrating sensory data with motor commands.",
          "Medulla Oblongata: Found at the base of the brainstem. Regulates unconscious autonomic functions such as breathing rate, heart rate, and peristalsis.",
          "Hypothalamus: Regulates homeostasis (body temperature, water potential) and coordinates the endocrine system via the attached pituitary gland."
        ]
      }
    },
{ 'id': 'callout-examiner-5ff6ff26', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-brain", prompt: "Which part of the brain is responsible for complex problem solving?" },
      { id: "cue-2", blockId: "list-brain", prompt: "Which region acts as the autonomic control center for heart and breathing rates?" },
      { id: "cue-3", blockId: "list-brain", prompt: "Damage to the cerebellum would likely affect what kind of physical traits?" }
    ],
    summaryText: "The Cerebrum controls conscious thought and learning. The Cerebellum coordinates balance and motor skills. The Medulla controls autonomic life-support functions (heart, lungs). The Hypothalamus handles homeostasis and the endocrine system.",
    ready: true
  },
  evidence: []
};