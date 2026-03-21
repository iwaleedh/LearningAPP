export const note_biology_5_7_21 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Investigate the effects of exercise on tidal volume, breathing rate and minute ventilation." }
    },
    {
      id: "h-cp17",
      type: "heading",
      data: { text: "Core Practical 17: Exercise Physiology", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "To investigate the cardiovascular and respiratory response to exercise, a spirometer is used." }
    },
    {
      id: "list-spiro",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "A spirometer consists of a chamber filled with pure oxygen floating on a tank of water. As a person breathes in and out through a mouthpiece, the chamber bobs down and up.",
          "Soda lime in the system absorbs CO2. Therefore, the total volume of gas in the chamber drops over time as O2 is continuously used up.",
          "A pen attached to the chamber draws a trace on a rotating kymograph drum.",
          "The amplitude of the waves represents Tidal Volume. The frequency of the waves represents Breathing Rate."
        ]
      }
    },
    {
      id: "p-exercise",
      type: "paragraph",
      data: { text: "By measuring resting traces, having the subject perform 5 minutes of exercise (e.g., step-ups), and then measuring post-exercise traces immediately, students can mathematically demonstrate the vast increase in Minute Ventilation required to clear CO2 and repay the oxygen debt." }
    },
{ 'id': 'callout-examiner-14015347', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-8877d775', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-spiro", prompt: "What does the amplitude of a spirometer trace wave represent?" },
      { id: "cue-2", blockId: "list-spiro", prompt: "Why does the overall volume of air in a traditional spirometer trace steadily drop downward?" },
      { id: "cue-3", blockId: "p-exercise", prompt: "Why does minute ventilation remain high immediately after exercise abruptly stops?" }
    ],
    summaryText: "A spirometer records breathing. Wave height = Tidal volume. Wave count/min = Breathing rate. Because soda lime absorbs CO2, O2 consumption makes the lid drop over time. Exercise drastically increases tidal volume and breathing rate.",
    ready: true
  },
  evidence: []
};