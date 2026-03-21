export const note_biology_5_7_9 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Describe muscle contraction using the sliding filament theory." }
    },
    {
      id: "h-sliding",
      type: "heading",
      data: { text: "The Sliding Filament Theory", level: 2 }
    },
    {
      id: "p-sliding",
      type: "paragraph",
      data: { text: "When a muscle contracts, the actin and myosin filaments do not shorten; instead, the actin filaments slide over the myosin towards the center of the sarcomere. The Z-lines move closer together, shortening the sarcomere." }
    },
    {
      id: "h-mechanism",
      type: "heading",
      data: { text: "Mechanism of Contraction", level: 3 }
    },
    {
      id: "list-mech",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Action Potential: An impulse arrives via a motor neuron, travelling down the T-tubules and stimulating the sarcoplasmic reticulum to release Ca2+ ions into the sarcoplasm.",
          "Exposing binding sites: Ca2+ binds to troponin, causing it to change shape. This pulls the tropomyosin aside, exposing the myosin-binding sites on the actin filament.",
          "Cross-bridge formation: The bulbous myosin head (carrying ADP and Pi) binds to the exposed actin site, forming an actomyosin cross-bridge.",
          "Power stroke: The myosin head bends backwards, releasing ADP and Pi. This physical bending pulls the actin filament past the myosin.",
          "Detachment: A new ATP molecule binds to the myosin head, breaking the cross-bridge and causing the head to detach from the actin.",
          "Recovery stroke: ATP hydrolase (on the myosin head) hydrolyzes the ATP into ADP + Pi. The energy released resets the myosin head to its original upright position, ready to bind to the next site further down the actin."
        ]
      }
    },
    {
      id: "p-relax",
      type: "paragraph",
      data: { text: "Relaxation occurs when nervous stimulation stops. Ca2+ is actively pumped back into the sarcoplasmic reticulum, tropomyosin recovers the binding sites, and the sarcomere lengthens back to normal." }
    },
{ 'id': 'callout-examiner-0c3291f7', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } },
{ 'id': 'callout-examiner-92060140', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-sliding", prompt: "During contraction, what happens to the length of the A-band and the I-band?" },
      { id: "cue-2", blockId: "list-mech", prompt: "What is the exact role of calcium ions in muscle contraction?" },
      { id: "cue-3", blockId: "list-mech", prompt: "What causes the myosin head to detach from the actin filament?" }
    ],
    summaryText: "Calcium binds troponin, moving tropomyosin to expose actin binding sites. Myosin heads bind actin, perform a power stroke (releasing ADP), then detach when a new ATP binds. ATP hydrolysis resets the head, allowing ratcheting sliding.",
    ready: true
  },
  evidence: []
};