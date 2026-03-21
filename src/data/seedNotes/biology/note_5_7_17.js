export const note_biology_5_7_17 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the counter-current multiplier of the Loop of Henle and how ADH regulates water reabsorption." }
    },
    {
      id: "h-henle",
      type: "heading",
      data: { text: "The Loop of Henle", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "The loop creates a very low water potential in the tissue fluid of the medulla, allowing water to be reabsorbed from the collecting duct." }
    },
    {
      id: "list-henle",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Ascending Limb: Thick walls, impermeable to water. Na+ and Cl- are actively pumped out of the filtrate into the surrounding medulla tissue fluid.",
          "The Tissue Fluid: Becomes highly concentrated (very negative water potential) near the bottom of the loop.",
          "Descending Limb: Thin walls, highly permeable to water. As filtrate flows down, water leaves via osmosis into the salty tissue fluid and is swept away by capillaries.",
          "Result: The filtrate becomes very concentrated at the hairpin bend. A counter-current multiplier is established."
        ]
      }
    },
    {
      id: "h-adh",
      type: "heading",
      data: { text: "Osmoregulation and ADH", level: 2 }
    },
    {
      id: "list-adh",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Detection: Osmoreceptors in the hypothalamus detect a decrease in blood water potential (e.g., due to sweating).",
          "Secretion: The posterior pituitary gland releases Anti-Diuretic Hormone (ADH) into the blood.",
          "Action: ADH binds to receptors on the cell membranes of the Collecting Duct. This causes vesicles containing water channels (aquaporins) to fuse with the cell membrane.",
          "Reabsorption: The fully permeable collecting duct runs through the salty medulla. A massive amount of water leaves via osmosis back into the blood.",
          "Result: A small volume of highly concentrated, hypertonic urine is produced. Blood water potential rises."
        ]
      }
    },
{ 'id': 'callout-examiner-c2676c09', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-6b63925f', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-henle", prompt: "Which limb of the Loop of Henle is impermeable to water?" },
      { id: "cue-2", blockId: "list-adh", prompt: "Where are osmoreceptors located?" },
      { id: "cue-3", blockId: "list-adh", prompt: "What exact effect does ADH have on the cells of the collecting duct?" }
    ],
    summaryText: "The ascending limb pumps out ions to lower the medulla's water potential. If dehydrated, osmoreceptors signal the pituitary to release ADH. ADH inserts aquaporins into the collecting duct, maximizing water reabsorption and producing concentrated urine.",
    ready: true
  },
  evidence: []
};