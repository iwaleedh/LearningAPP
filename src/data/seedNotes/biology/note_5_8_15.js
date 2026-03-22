export const note_biology_5_8_15 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Compare and contrast the nervous system and the endocrine (hormonal) system." }
    },
    {
      id: "h-compare",
      type: "heading",
      data: { text: "Nervous vs Hormonal Coordination", level: 2 }
    },
    {
      id: "table-compare",
      type: "comparisonTable",
      data: {
        headers: ["Feature", "Nervous System", "Endocrine System"],
        rows: [
          ["Message Format", "Electrical impulses (action potentials) along axons", "Chemicals (hormones) dissolved in the blood"],
          ["Transmission Medium", "Nerve cells / Neurones", "Bloodstream"],
          ["Speed of Action", "Extremely rapid (milliseconds)", "Relatively slow (seconds to years)"],
          ["Duration of Effect", "Short-lived (rapidly localized and degraded)", "Long-lasting (broken down slowly by the liver)"],
          ["Target Specificity", "Highly specific (targets exactly one muscle or gland cell)", "Widespread (targets any cell with complementary receptors)"]
        ],
        caption: "Summary of coordination systems."
      }
    },
{ 'id': 'callout-examiner-be624652', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'When comparing the two coordination systems, strictly use established comparative terms: Nervous communication utilizes fast-acting **electrical impulses** along neurones, while the endocrine system relies on slower, longer-lasting **chemical messengers** transported in blood plasma.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "table-compare", prompt: "Which system exerts a longer-lasting effect on the body?" },
      { id: "cue-2", blockId: "table-compare", prompt: "Why is the hormonal system considered less localized than the nervous system?" }
    ],
    summaryText: "The nervous system uses ultra-fast electrical impulses along targeted axons for immediate, brief responses. The endocrine system uses chemical hormones poured into the bloodstream for widespread, slower, and longer-lasting regulatory effects.",
    ready: true
  },
  evidence: []
};