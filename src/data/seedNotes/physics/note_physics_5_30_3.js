export const note_physics_5_30_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Core Practical 15: Investigating Gamma Radiation Absorption" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 15: Investigating Gamma Radiation Absorption", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Core Practical 15: Investigating Gamma Radiation Absorption will be updated." } },
    {
      "id": "svg-background-radiation",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 250\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"200\" cy=\"125\" r=\"100\" fill=\"#F1F5F9\"/><path d=\"M 200 125 L 200 25 A 100 100 0 0 1 295 155 Z\" fill=\"#C084FC\"/><path d=\"M 200 125 L 295 155 A 100 100 0 0 1 120 185 Z\" fill=\"#60A5FA\"/><path d=\"M 200 125 L 120 185 A 100 100 0 0 1 200 25 Z\" fill=\"#34D399\"/><text x=\"250\" y=\"80\" fill=\"#334155\" font-size=\"12\">Radon gas (50%)</text></svg>",
        "caption": "Background Radiation Sources"
      }
    },
    {
      "id": "svg-gm-tube",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><rect x=\"100\" y=\"60\" width=\"200\" height=\"80\" rx=\"10\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"3\"/><line x1=\"100\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"200\" y=\"160\" text-anchor=\"middle\" fill=\"#64748B\">Argon Gas + Halogen</text></svg>",
        "caption": "Geiger-Muller Tube"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Core Practical 15: Investigating Gamma Radiation Absorption' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
