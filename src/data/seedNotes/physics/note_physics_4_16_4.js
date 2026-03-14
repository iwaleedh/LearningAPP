export const note_physics_4_16_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Elastic & Inelastic Collisions" } },
    { id: 'head-1', type: 'heading', data: { text: "Elastic & Inelastic Collisions", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Elastic & Inelastic Collisions will be updated." } },

  
    {
      id: 'svg-physics_4_16_4-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <rect x="20" y="20" width="360" height="70" fill="#ecfdf5" rx="8" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="45" font-family="Arial" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">Elastic Collision</text>
  <text x="200" y="65" font-family="Arial" font-size="14" fill="#047857" text-anchor="middle">Kinetic Energy is CONSERVED</text>
  <text x="200" y="82" font-family="Arial" font-size="14" fill="#047857" text-anchor="middle">Σ½mu² = Σ½mv²</text>
  
  <rect x="20" y="110" width="360" height="70" fill="#fef2f2" rx="8" stroke="#ef4444" stroke-width="2"/>
  <text x="200" y="135" font-family="Arial" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">Inelastic Collision</text>
  <text x="200" y="155" font-family="Arial" font-size="14" fill="#991b1b" text-anchor="middle">Kinetic Energy is NOT conserved</text>
  <text x="200" y="172" font-family="Arial" font-size="14" fill="#991b1b" text-anchor="middle">(Lost to heat, sound, deformation)</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_4'
      }
    },
    {
      id: 'svg-physics_4_16_4-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <path d="M 50 100 Q 100 50 150 100 T 250 100 T 350 100" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
  <circle cx="50" cy="180" r="15" fill="#3b82f6"/>
  <circle cx="150" cy="180" r="15" fill="#3b82f6"/>
  <circle cx="250" cy="180" r="15" fill="#3b82f6"/>
  <path d="M 50 180 L 150 180" stroke="#334155" stroke-width="2" opacity="0.3"/>
  <path d="M 150 180 L 250 180" stroke="#334155" stroke-width="2" opacity="0.3"/>
  <text x="200" y="30" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Bouncing Ball (Inelastic)</text>
  <text x="200" y="200" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">Height decreases with each bounce (KE lost)</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_4'
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Elastic & Inelastic Collisions' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
