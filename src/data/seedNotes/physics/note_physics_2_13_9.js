export const note_physics_2_13_9 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Real & Virtual Images" } },
    { id: 'head-1', type: 'heading', data: { text: "Real & Virtual Images", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Real & Virtual Images will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <line x1="50" y1="100" x2="350" y2="100" stroke="#f472b6" stroke-width="2"/>
  <path d="M150 100 Q 200 70 250 100 Q 200 130 150 100" fill="none" stroke="#22d3ee" stroke-width="3"/>
  <text x="200" y="40" fill="#f8fafc" font-size="16" text-anchor="middle">Stationary Waves on a String</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Real & Virtual Images' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
