export const note_physics_5_32_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Period of Simple Harmonic Oscillators" } },
    { id: 'head-1', type: 'heading', data: { text: "Period of Simple Harmonic Oscillators", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Period of Simple Harmonic Oscillators will be updated." } },
    {
      "id": "svg-shm-energy",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 250\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"200\" x2=\"350\" y2=\"200\" stroke=\"#64748B\"/><line x1=\"200\" y1=\"50\" x2=\"200\" y2=\"200\" stroke=\"#64748B\" stroke-dasharray=\"2,2\"/><path d=\"M 100 50 Q 200 250 300 50\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2\"/><path d=\"M 100 200 Q 200 0 300 200\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2\"/><line x1=\"100\" y1=\"50\" x2=\"300\" y2=\"50\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"310\" y=\"50\" fill=\"#10B981\">Total E</text></svg>",
        "caption": "Energy in SHM"
      }
    },
    {
      "id": "svg-spring-mass",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 200 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"50\" x2=\"150\" y2=\"50\" stroke=\"#334155\" stroke-width=\"4\"/><path d=\"M 100 50 L 100 70 L 80 80 L 120 100 L 80 120 L 120 140 L 80 160 L 100 170 C 100 170 100 180 100 180\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"2\"/><rect x=\"80\" y=\"180\" width=\"40\" height=\"40\" fill=\"#F59E0B\"/><text x=\"60\" y=\"200\" fill=\"#EF4444\">m</text></svg>",
        "caption": "Mass-Spring System"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Period of Simple Harmonic Oscillators' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
