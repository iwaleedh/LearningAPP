export const note_physics_2_13_11 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Magnification" } },
    { id: 'head-1', type: 'heading', data: { text: "Magnification", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Magnification will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <path d="M50 150 L350 150" stroke="#94a3b8" stroke-width="4"/>
  <path d="M100 150 L200 50 L300 150" fill="none" stroke="#a78bfa" stroke-width="3"/>
  <text x="200" y="40" fill="#f8fafc" font-size="16" text-anchor="middle">Total Internal Reflection</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Magnification' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
