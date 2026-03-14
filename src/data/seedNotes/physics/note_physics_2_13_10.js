export const note_physics_2_13_10 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand The Lens Equation" } },
    { id: 'head-1', type: 'heading', data: { text: "The Lens Equation", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for The Lens Equation will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <rect x="50" y="50" width="300" height="100" fill="#334155" rx="8"/>
  <circle cx="100" cy="100" r="10" fill="#facc15"/>
  <circle cx="200" cy="100" r="10" fill="#facc15"/>
  <circle cx="300" cy="100" r="10" fill="#facc15"/>
  <line x1="100" y1="100" x2="200" y2="100" stroke="#818cf8" stroke-width="4"/>
  <text x="200" y="180" fill="#f8fafc" font-size="16" text-anchor="middle">Polarisation</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise The Lens Equation' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
