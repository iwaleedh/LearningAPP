export const note_physics_5_30_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand The Random Nature of Nuclear Decay" } },
    { id: 'head-1', type: 'heading', data: { text: "The Random Nature of Nuclear Decay", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for The Random Nature of Nuclear Decay will be updated." } },
    {
      "id": "svg-radiometric-dating",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"#22C55E\" opacity=\"0.7\"/><text x=\"100\" y=\"105\" text-anchor=\"middle\" fill=\"white\">100% C-14</text><circle cx=\"200\" cy=\"100\" r=\"40\" fill=\"#A3E635\" opacity=\"0.5\"/><text x=\"200\" y=\"105\" text-anchor=\"middle\" fill=\"#334155\">25% C-14</text><path d=\"M 145 100 L 155 100\" stroke=\"#94A3B8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/></svg>",
        "caption": "Carbon-14 Dating"
      }
    },
    {
      "id": "svg-medical-tracers",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><path d=\"M 100 100 Q 150 50 200 100\" stroke=\"#CBD5E1\" fill=\"none\" stroke-width=\"20\" stroke-linecap=\"round\"/><circle cx=\"150\" cy=\"75\" r=\"10\" fill=\"#F59E0B\"/><path d=\"M 150 75 L 180 30\" stroke=\"#EF4444\" stroke-dasharray=\"2,2\"/><text x=\"185\" y=\"25\" fill=\"#EF4444\">γ ray</text></svg>",
        "caption": "Medical Tracers"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise The Random Nature of Nuclear Decay' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
