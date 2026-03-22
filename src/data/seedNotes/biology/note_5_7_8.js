export const note_biology_5_7_8 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the ultrastructure of skeletal muscle, including myofibrils, sarcomeres, actin, and myosin." }
    },
    {
      id: "h-muscle",
      type: "heading",
      data: { text: "Skeletal Muscle Ultrastructure", level: 2 }
    },
    {
      id: "p-structure",
      type: "paragraph",
      data: { text: "Skeletal muscle consists of bundles of long, multinucleated cells called muscle fibres. These fibres contain many highly organized protein filaments called myofibrils." }
    },
    {
      id: "list-sarc",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Sarcolemma: The unique plasma membrane of a muscle fibre. It folds inward to form Transverse (T) tubules.",
          "Sarcoplasm: The cytoplasm of a muscle fibre, containing many mitochondria and a specialized endoplasmic reticulum (sarcoplasmic reticulum) that stores calcium ions."
        ]
      }
    },
    {
      id: "h-sarcomere",
      type: "heading",
      data: { text: "The Sarcomere", level: 2 }
    },
    {
      id: "p-myofilaments",
      type: "paragraph",
      data: { text: "Myofibrils are made of repeating contractile units called sarcomeres. They consist of two types of interacting protein filaments:" }
    },
    {
      id: "list-banding",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Actin: Thin filaments. Consist of two twisted strands. Associated with the regulatory proteins tropomyosin and troponin.",
          "Myosin: Thick filaments. Consist of long rod-shaped tails with bulbous, hinged heads that project outward.",
          "Z-line: The boundaries at the ends of a single sarcomere, where actin is anchored.",
          "I-band: Light band containing only thin actin filaments.",
          "A-band: Dark band containing the entire length of the thick myosin filaments (where actin and myosin overlap).",
          "H-zone: The lighter region in the center of the completely dark A-band containing only myosin."
        ]
      }
    },
{ 'id': 'callout-examiner-bb867f7e', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'Students often confuse the various bands and zones in a sarcomere. Remember that **Actin** is the thin filament and corresponds to the **I band** (which is l**i**ght), while myosin is thick and corresponds to the **A band** (which is d**a**rk).' } },
{ 'id': 'callout-examiner-c2380dd3', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'Students often confuse the various bands and zones in a sarcomere. Remember that **Actin** is the thin filament and corresponds to the **I band** (which is l**i**ght), while myosin is thick and corresponds to the **A band** (which is d**a**rk).' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-sarc", prompt: "What is the function of the sarcoplasmic reticulum in muscle cells?" },
      { id: "cue-2", blockId: "list-banding", prompt: "Which protein makes up the thick filaments?" },
      { id: "cue-3", blockId: "list-banding", prompt: "What does the I-band represent in a sarcomere?" }
    ],
    summaryText: "Muscle fibres contain myofibrils divided into repeating sarcomeres. Myosin (thick) and Actin (thin) filaments overlap. The A-band is dark (myosin present), the I-band is light (only actin). The Sarcoplasmic Reticulum stores Ca2+.",
    ready: true
  },
  evidence: []
};