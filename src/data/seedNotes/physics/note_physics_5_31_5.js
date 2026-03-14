export const note_physics_5_31_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Comparing Electric & Gravitational Fields" } },
    { id: 'head-1', type: 'heading', data: { text: "Comparing Electric & Gravitational Fields", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Comparing Electric & Gravitational Fields Comparing Electric & Gravitational Fields The similarities and differences between gravitational and electrostatic forces are listed in the table below:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "Table Comparing G and E Fields" } },
    {
      "id": "svg-orbital-motion",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"150\" cy=\"150\" r=\"30\" fill=\"#F59E0B\"/><circle cx=\"150\" cy=\"150\" r=\"100\" fill=\"none\" stroke=\"#94A3B8\" stroke-dasharray=\"4,4\"/><circle cx=\"250\" cy=\"150\" r=\"10\" fill=\"#3B82F6\"/><path d=\"M 250 150 L 250 90\" stroke=\"#EF4444\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"260\" y=\"110\" fill=\"#EF4444\">v</text><path d=\"M 250 150 L 190 150\" stroke=\"#10B981\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"210\" y=\"140\" fill=\"#10B981\">F</text></svg>",
        "caption": "Orbital Motion Velocity"
      }
    },
    {
      "id": "svg-kepler-3",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><text x=\"150\" y=\"80\" text-anchor=\"middle\" font-size=\"24\" fill=\"#334155\" font-style=\"italic\">T² ∝ r³</text><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"#64748B\">Period squared is proportional to radius cubed</text></svg>",
        "caption": "Kepler's Third Law"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Comparing Electric & Gravitational Fields' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
