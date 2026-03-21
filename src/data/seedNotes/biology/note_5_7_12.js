export const note_biology_5_7_12 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Explain how pulmonary ventilation rate is controlled by the ventilation centre." }
    },
    {
      id: "h-ventilation",
      type: "heading",
      data: { text: "Control of Ventilation Rate", level: 2 }
    },
    {
      id: "callout-vr",
      type: "callout",
      data: { style: "key", title: "Equation", text: "Pulmonary Ventilation Rate (dm³/min) = Tidal Volume (dm³) × Breathing Rate (breaths/min)" }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "Similar to heart rate, breathing must increase during exercise to expel CO2 and acquire O2. This is coordinated by the Ventilation Centre in the medulla oblongata." }
    },
    {
      id: "list-steps",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Increased cell respiration raises blood CO2, lowering the pH of blood and cerebrospinal fluid.",
          "Central chemoreceptors in the medulla and peripheral chemoreceptors in the carotid/aortic bodies detect this drop in pH.",
          "Nerve impulses are sent to the Ventilation Centre.",
          "The center sends more frequent impulses via motor neurons to the intercostal muscles and diaphragm.",
          "These muscles contract more forcefully and frequently.",
          "Breathing rate and depth (tidal volume) both increase, lowering blood CO2 back to normal."
        ]
      }
    },
    {
      id: "p-stretch",
      type: "paragraph",
      data: { text: "Stretch receptors in the bronchioles also prevent the lungs from over-inflating by sending inhibitory signals to the ventilation center, triggering exhalation (the Hering-Breuer reflex)." }
    },
{ 'id': 'callout-examiner-9d68c93a', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-79a1f2fe', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-steps", prompt: "Where is the ventilation centre located?" },
      { id: "cue-2", blockId: "list-steps", prompt: "Which muscles receive impulses to increase breathing depth?" },
      { id: "cue-3", blockId: "p-stretch", prompt: "What stops the lungs from over-inflating?" }
    ],
    summaryText: "High CO2 lowers pH, stimulating chemoreceptors. The medullary Ventilation centre sends more frequent impulses to the diaphragm and intercostal muscles, increasing both breathing rate and tidal volume. Stretch receptors prevent lung over-inflation.",
    ready: true
  },
  evidence: []
};