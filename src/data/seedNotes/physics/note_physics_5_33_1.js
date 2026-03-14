export const note_physics_5_33_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Core Practical 16: Investigating Resonance" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 16: Investigating Resonance", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Core Practical 16: Investigating Resonance will be updated." } },
    {
      "id": "svg-resonance-curve",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 250\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"200\" x2=\"350\" y2=\"200\" stroke=\"#64748B\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"200\" stroke=\"#64748B\"/><path d=\"M 50 190 Q 200 190 200 50 Q 200 190 350 190\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"3\"/><line x1=\"200\" y1=\"200\" x2=\"200\" y2=\"210\" stroke=\"#64748B\"/><text x=\"200\" y=\"230\" text-anchor=\"middle\" fill=\"#334155\">f₀</text><text x=\"280\" y=\"230\" fill=\"#64748B\">Driving frequency (f)</text><text x=\"0\" y=\"130\" fill=\"#64748B\" transform=\"rotate(-90 20,130)\">Amplitude</text></svg>",
        "caption": "Resonance Curve"
      }
    },
    {
      "id": "svg-phase-resonance",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><text x=\"150\" y=\"80\" text-anchor=\"middle\" font-size=\"20\" fill=\"#334155\">Phase diff = π/2</text><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"#64748B\">Velocity in phase with driving force</text></svg>",
        "caption": "Phase Difference at Resonance"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Core Practical 16: Investigating Resonance' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
