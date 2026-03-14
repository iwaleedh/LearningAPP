export const note_physics_2_13_6 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Using Ray Diagrams" } },
    { id: 'head-1', type: 'heading', data: { text: "Using Ray Diagrams", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Using Ray Diagrams will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <rect x="50" y="100" width="300" height="80" fill="#1e40af" opacity="0.5"/>
  <line x1="100" y1="50" x2="200" y2="100" stroke="#a7f3d0" stroke-width="4"/>
  <line x1="200" y1="100" x2="250" y2="180" stroke="#a7f3d0" stroke-width="4"/>
  <line x1="200" y1="50" x2="200" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
  <text x="200" y="30" fill="#f8fafc" font-size="16" text-anchor="middle">Refraction &amp; Snell's Law</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Using Ray Diagrams' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
