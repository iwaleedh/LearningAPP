export const note_physics_5_33_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Resonance Graphs" } },
    { id: 'head-1', type: 'heading', data: { text: "Resonance Graphs", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Resonance Graphs Resonance Graphs A graph of driving frequency f against amplitude A of oscillations is called a resonance curve. It has the following key features:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "When f < f, the amplitude of oscillations increases At the peak where f = f, the amplitude is at its maximum. This is resonance When f > f, the amplitude of oscillations starts to decrease The maximum amplitude of the oscillations occurs when the driving frequency is equal to" } },
    { id: 'para-4', type: 'paragraph', data: { text: "the natural frequency of the oscillator Damping & Resonance Damping reduces the amplitude of resonance vibrations The height and shape of the resonance curve will therefore change slightly depending" } },
    { id: 'para-5', type: 'paragraph', data: { text: "on the degree of damping Note: the natural frequency fof the oscillator will remain the same As the degree of damping is increased, the resonance graph is altered in the following ways:" } },
    { id: 'para-6', type: 'paragraph', data: { text: "The amplitude of resonance vibrations decrease, meaning the peak of the curve lowers The resonance peak broadens0 0" } },
    {
      "id": "svg-energy-transfer",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><rect x=\"50\" y=\"50\" width=\"200\" height=\"20\" fill=\"#E2E8F0\"/><rect x=\"50\" y=\"50\" width=\"150\" height=\"20\" fill=\"#10B981\"/><text x=\"150\" y=\"40\" text-anchor=\"middle\" fill=\"#334155\">Maximum Energy Transfer</text></svg>",
        "caption": "Energy Transfer in Resonance"
      }
    },
    {
      "id": "svg-q-factor",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><text x=\"150\" y=\"80\" text-anchor=\"middle\" font-size=\"20\" fill=\"#334155\" font-style=\"italic\">Q = f₀ / Δf</text><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"#64748B\">Sharpness of resonance</text></svg>",
        "caption": "Q Factor Concept"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Resonance Graphs' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
