export const note_biology_5_7_14 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the principle of homeostasis and the mechanism of negative feedback." }
    },
    {
      id: "h-homeostasis",
      type: "heading",
      data: { text: "Homeostasis", level: 2 }
    },
    {
      id: "p-homeostasis",
      type: "paragraph",
      data: { text: "Homeostasis is the maintenance of a constant internal environment (e.g., core body temperature, blood pH, blood glucose, water potential) despite changes in external or internal conditions." }
    },
    {
      id: "h-negative",
      type: "heading",
      data: { text: "Negative Feedback Mechanisms", level: 2 }
    },
    {
      id: "p-negative",
      type: "paragraph",
      data: { text: "A mechanism that acts to reverse any deviation from an optimum reference point." }
    },
    {
      id: "list-feedback",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Receptor: Detects a deviation (stimulus) from the optimum set point.",
          "Coordinator: The brain/medulla/hypothalamus evaluates the data and sends a signal.",
          "Effector: A muscle or gland carries out a physiological response.",
          "Correction: The internal condition returns to the optimum, turning off the receptor's initial alarm."
        ]
      }
    },
    {
      id: "callout-positive",
      type: "callout",
      data: { style: "warning", title: "Positive Feedback", text: "Contrast with positive feedback, where a deviation causes a response that amplifies the deviation (e.g., sodium channels opening rapidly during a nerve action potential, or oxytocin during childbirth). Positive feedback does not lead to homeostasis." }
    },
{ 'id': 'callout-examiner-55142576', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-homeostasis", prompt: "Define homeostasis." },
      { id: "cue-2", blockId: "list-feedback", prompt: "What are the three core components of a negative feedback loop?" },
      { id: "cue-3", blockId: "callout-positive", prompt: "Why is positive feedback not used to maintain homeostasis?" }
    ],
    summaryText: "Homeostasis maintains dynamic equilibrium. In negative feedback, a receptor detects a change, the coordinator signals an effector, and the effector reverses the change back to optimum. Positive feedback amplifies the change instead.",
    ready: true
  },
  evidence: []
};