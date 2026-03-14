export const note_physics_2_13_8 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Thin Lenses in Combination" } },
    { id: 'head-1', type: 'heading', data: { text: "Thin Lenses in Combination", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Thin Lenses in Combination will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <path d="M100 50 Q 200 150 300 50" fill="none" stroke="#38bdf8" stroke-width="4"/>
  <line x1="100" y1="100" x2="300" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <text x="200" y="160" fill="#f8fafc" font-size="16" text-anchor="middle">Convergence (Convex Lens)</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Thin Lenses in Combination' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
