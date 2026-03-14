export const note_physics_2_13_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Converging & Diverging Lenses" } },
    { id: 'head-1', type: 'heading', data: { text: "Converging & Diverging Lenses", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Converging & Diverging Lenses will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <line x1="100" y1="150" x2="200" y2="50" stroke="#fbbf24" stroke-width="4"/>
  <line x1="200" y1="50" x2="300" y2="150" stroke="#fbbf24" stroke-width="4"/>
  <line x1="50" y1="150" x2="350" y2="150" stroke="#cbd5e1" stroke-width="6"/>
  <line x1="200" y1="50" x2="200" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
  <text x="200" y="30" fill="#f8fafc" font-size="16" text-anchor="middle">Reflection of Light</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Converging & Diverging Lenses' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
