export const note_physics_2_11_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Representing Waves on Graphs" } },
    { id: 'head-1', type: 'heading', data: { text: "Representing Waves on Graphs", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Representing Waves on Graphs will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <path d="M50 150 Q 150 50 350 50" fill="none" stroke="#22d3ee" stroke-width="4"/>
  <text x="200" y="40" fill="#f8fafc" font-size="18" text-anchor="middle" font-weight="bold">Terminal Velocity Graph</text>
  <text x="50" y="180" fill="#cbd5e1" font-size="12">0</text>
  <text x="350" y="180" fill="#cbd5e1" font-size="12">t</text>
  <line x1="50" y1="160" x2="350" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <line x1="50" y1="40" x2="50" y2="160" stroke="#94a3b8" stroke-width="2"/>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Representing Waves on Graphs' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
