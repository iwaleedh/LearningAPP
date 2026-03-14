export const note_physics_2_13_7 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Power of a Lens" } },
    { id: 'head-1', type: 'heading', data: { text: "Power of a Lens", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Power of a Lens will be updated." } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <circle cx="200" cy="100" r="80" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <circle cx="210" cy="100" r="60" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <circle cx="230" cy="100" r="40" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <text x="200" y="195" fill="#f8fafc" font-size="16" text-anchor="middle">Doppler Effect</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Power of a Lens' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
