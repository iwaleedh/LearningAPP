export const note_biology_5_7_15 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the overall gross structure of the mammalian kidney and nephron." }
    },
    {
      id: "h-kidney",
      type: "heading",
      data: { text: "Kidney Structure", level: 2 }
    },
    {
      id: "p-kidney",
      type: "paragraph",
      data: { text: "The kidneys are the main excretory organs in mammals. They filter waste (like urea) out of the blood and osmoregulate blood water potential." }
    },
    {
      id: "list-macro",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Fibrous capsule: Tough outer protective layer.",
          "Cortex: The lighter outer region containing Bowman's capsules and convoluted tubules.",
          "Medulla: The darker, inner region organized into pyramids, containing the Loops of Henle and collecting ducts.",
          "Renal Pelvis: The funnel-like central cavity that collects urine and funnels it into the ureter.",
          "Ureter: Tube carrying urine to the bladder."
        ]
      }
    },
    {
      id: "h-nephron",
      type: "heading",
      data: { text: "The Nephron", level: 3 }
    },
    {
      id: "p-nephron",
      type: "paragraph",
      data: { text: "The nephron is the functional filtering unit of the kidney (~1 million per kidney). Blood enters via the afferent arteriole, which forms a knot of capillaries (glomerulus) inside the Bowman's capsule. Filtered blood leaves via the efferent arteriole, wrapping around the subsequent tubules." }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-macro", prompt: "Which part of the kidney contains the Loops of Henle?" },
      { id: "cue-2", blockId: "list-macro", prompt: "What connects the renal pelvis to the bladder?" },
      { id: "cue-3", blockId: "p-nephron", prompt: "What is the name of the knot of capillaries located inside the Bowman's capsule?" }
    ],
    summaryText: "The kidney consists of an outer cortex (capsules and tubules), an inner medulla (Loops of Henle), and a pelvis feeding into the ureter. The functional unit is the nephron, which begins with the glomerulus.",
    ready: true
  },
  evidence: []
};