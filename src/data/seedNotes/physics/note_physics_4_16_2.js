export const note_physics_4_16_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Applying Conservation of Linear Momentum" } },
    { id: 'head-1', type: 'heading', data: { text: "Applying Conservation of Linear Momentum", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Applying Conservation of Linear Momentum will be updated." } },

  
    {
      id: 'svg-physics_4_16_2-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <text x="200" y="30" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Before Collision</text>
  <circle cx="120" cy="100" r="25" fill="#3b82f6"/>
  <circle cx="280" cy="100" r="25" fill="#ef4444"/>
  <path d="M 155 100 L 205 100" stroke="#334155" stroke-width="2" marker-end="url(#arrow-dark)"/>
  <path d="M 245 100 L 215 100" stroke="#334155" stroke-width="2" marker-end="url(#arrow-dark)"/>
  <text x="120" y="105" font-family="Arial" font-size="14" fill="white" text-anchor="middle">A</text>
  <text x="280" y="105" font-family="Arial" font-size="14" fill="white" text-anchor="middle">B</text>
  <text x="120" y="145" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">m₁ = 2kg, u₁ = 3m/s</text>
  <text x="280" y="145" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">m₂ = 3kg, u₂ = -1m/s</text>
  <defs>
    <marker id="arrow-dark" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#334155" />
    </marker>
  </defs>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_2'
      }
    },
    {
      id: 'svg-physics_4_16_2-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <text x="200" y="30" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">After Collision</text>
  <circle cx="180" cy="100" r="25" fill="#3b82f6"/>
  <circle cx="220" cy="100" r="25" fill="#ef4444"/>
  <path d="M 255 100 L 305 100" stroke="#334155" stroke-width="2" marker-end="url(#arrow-dark)"/>
  <text x="180" y="105" font-family="Arial" font-size="14" fill="white" text-anchor="middle">A</text>
  <text x="220" y="105" font-family="Arial" font-size="14" fill="white" text-anchor="middle">B</text>
  <text x="200" y="150" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">v = ? (Stuck together)</text>
  <text x="200" y="180" font-family="Arial" font-size="14" font-weight="bold" fill="#10b981" text-anchor="middle">m₁u₁ + m₂u₂ = (m₁ + m₂)v</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_2'
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Applying Conservation of Linear Momentum' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
