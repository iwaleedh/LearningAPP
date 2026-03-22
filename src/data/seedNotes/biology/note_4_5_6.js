export const note_biology_4_5_6 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Investigate the rate of photosynthesis using aquatic plants and understand Core Practical 10." }
    },
    {
      id: "h-cp10",
      type: "heading",
      data: { text: "Core Practical 10: Investigating Photosynthesis Rate", level: 2 }
    },
    {
      id: "p-cp10",
      type: "paragraph",
      data: { text: "The rate of photosynthesis can be estimated by measuring the volume of oxygen produced by an aquatic plant (like Elodea or Cabomba) over time, while changing a limiting factor (e.g., light intensity)." }
    },
    {
      id: "list-method",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Place a piece of aquatic plant into a boiling tube filled with sodium hydrogencarbonate solution (to provide an unlimited supply of CO₂).",
          "Attach the test tube to a capillary tube and gas syringe (or collect gas in an inverted measuring cylinder) to collect oxygen gas.",
          "Place a lamp at a specific distance (e.g., 10 cm) to set light intensity.",
          "Place a glass tank of water between the lamp and boiling tube to absorb heat, acting as a heat shield so temperature remains constant.",
          "Allow 5 minutes for the plant to acclimatise, then collect gas for a set time (e.g., 10 minutes).",
          "Record the volume of oxygen collected, then repeat for reliability.",
          "Change light intensity by moving the lamp further away (e.g., 20, 30, 40 cm)."
        ]
      }
    },
    {
      id: "callout-errors",
      type: "callout",
      data: { style: "warning", title: "Sources of Error", text: "The gas collected may contain nitrogen or oxygen lost due to plant respiration. Counting bubbles is inaccurate as bubble size varies; collecting the volume is more precise." }
    },
{ 'id': 'callout-examiner-c94dcd2b', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'When evaluating the method of counting oxygen bubbles to measure the rate of photosynthesis, remember to state that bubbles can vary in volume. A more accurate method is to collect the gas using a gas syringe.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-method", prompt: "Why is sodium hydrogencarbonate used in the photosynthesis practical?" },
      { id: "cue-2", blockId: "list-method", prompt: "Why place a tank of water between the lamp and the plant?" },
      { id: "cue-3", blockId: "callout-errors", prompt: "Why is collecting gas volume better than counting bubbles?" }
    ],
    summaryText: "Photosynthesis rate is investigated using aquatic plants by measuring oxygen volume over time. A water tank controls temperature, and sodium hydrogencarbonate provides excess CO₂, ensuring light intensity is the only variable.",
    ready: true
  },
  evidence: []
};