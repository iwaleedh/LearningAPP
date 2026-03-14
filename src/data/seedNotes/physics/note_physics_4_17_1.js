export const note_physics_4_17_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Angular Velocity" } },
    { id: 'head-1', type: 'heading', data: { text: "Angular Velocity", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Angular Velocity Angular Velocity The angular velocity ω of a body in circular motion is defined as: The rate of change of angular displacement" } },
    { id: 'para-3', type: 'paragraph', data: { text: "In other words, angular velocity is the angle swept out by an object in circular motion, per second Angular velocity is a vector quantity and is measured in rad s Since it is a vector, it has a magnitude (angular speed) and direction" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Angular velocity is calculated using: ω =Δθ Δt Where:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Δ θ = change in angular displacement (radians) Δt = time interval (s) It is related to linear speed, v by the equation v = ωr" } },
    { id: 'para-6', type: 'paragraph', data: { text: "Where: v = linear speed, v (m s) ω = angular speed (rad s) r = radius of orbit (m)–1" } },
    { id: 'para-7', type: 'paragraph', data: { text: "-1 -1 When an object is in uniform circular motion, velocity constantly changes direction, but the speed stays the same" } },
    { id: 'para-8', type: 'paragraph', data: { text: "Taking the angular displacement of a complete orbit or revolution as 2 π  radians, the angular velocity ω an be calculated using the equation: Where: T = the time period (s)" } },
    { id: 'para-9', type: 'paragraph', data: { text: "f = frequency (Hz) This equation shows that: The greater the rotation angle θ in a given amount of time T, the greater the angular velocity ω" } },
    { id: 'para-10', type: 'paragraph', data: { text: "An object travelling with the same linear velocity, but further from the centre of orbit (larger r) moves with a smaller angular velocity (smaller ω) Worked Example A bird flies in a horizontal circle with an angular speed of 5.25 rad s of radius 650 m." } },
    { id: 'para-11', type: 'paragraph', data: { text: "Calculate: a) The linear speed of the bird b) The frequency of the bird Examiner Tips and Tricks" } },

  
    {
      id: 'svg-physics_4_17_1-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <circle cx="200" cy="100" r="70" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <path d="M 200 100 L 270 100" stroke="#cbd5e1" stroke-width="2"/>
  <path d="M 200 100 L 249 50" stroke="#3b82f6" stroke-width="3"/>
  <circle cx="249" cy="50" r="8" fill="#ef4444"/>
  <path d="M 220 100 A 20 20 0 0 0 214 86" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="230" y="90" font-family="Arial" font-size="14" fill="#ef4444">ω</text>
  <path d="M 249 50 L 200 1" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)"/>
  <text x="220" y="25" font-family="Arial" font-size="14" fill="#10b981">v (Linear velocity)</text>
  <text x="70" y="180" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b">v = rω</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 17_1'
      }
    },
    {
      id: 'svg-physics_4_17_1-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <text x="200" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Angular Velocity (ω)</text>
  <text x="200" y="80" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">Rate of change of angular displacement</text>
  <rect x="120" y="110" width="160" height="60" fill="#ecfdf5" rx="8" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="145" font-family="Arial" font-size="20" fill="#047857" font-weight="bold" text-anchor="middle">ω = 2π / T = 2πf</text>
  <text x="200" y="190" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">Units: rad s⁻¹</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 17_1'
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Angular Velocity' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
