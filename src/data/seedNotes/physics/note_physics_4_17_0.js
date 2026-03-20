export const note_physics_4_17_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Radians & Angular Displacement" } },
    { id: 'head-1', type: 'heading', data: { text: "Radians & Angular Displacement", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Radians & Angular Displacement <strong>Angular Velocity</strong> <strong>Centripetal Acceleration</strong> Maintaining Circular Motion" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Radians & Angular Displacement Radians A radian (rad) is defined as: The angle subtended at the centre of a circle by an arc equal in length to the radius of" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "the circle Radians are used whenever describing the angular displacement of objects in circular motion Angular displacement can be calculated using the equation:" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Where: Δ θ = angular displacement, or angle of rotation (radians) s = length of the arc, or the distance travelled around the circle (m) r = radius of the circle (m)" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Radians are commonly written in terms of π The angle in radians for a complete circle (360) is equal to: Radian Conversions If an angle of 360 = 2 π  radians, then 1 radian in degrees is equal to:" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "Use the following equation to convert from degrees to radians: Table of common degrees to radians conversions o o" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "Worked Example Convert the following angular displacement into degrees: Answer: Examiner Tips and Tricks" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "You will notice your calculator has a degree (Deg) and radians (Rad) mode This is shown by the “D” or “R” highlighted at the top of the screen Remember to make sure it's in the right mode when using trigonometric functions (sin, cos, tan) depending on whether the answer is required in degrees" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Angular Displacement The angular displacement Δ θ is the ratio of: Angular displacement describes the changeinangle, in radians, of a body as it moves in a circle" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "This angle is measured with respect to the centre of orbitIt is extremely common for students to get the wrong answer (and lose marks) because their calculator is in the wrong mode when using trigonometric functions - make sure this doesn't happen to you! When the angle is equal to one radian, the length of the arc ( Δs) is equal to the radius (r) of" }] } },

  
    {
      id: 'svg-physics_4_17_0-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <circle cx="150" cy="100" r="80" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <path d="M 150 100 L 230 100 A 80 80 0 0 0 206 43 Z" fill="#0c4a6e" opacity="0.5" stroke="#3b82f6"/>
  <line x1="150" y1="100" x2="230" y2="100" stroke="#3b82f6" stroke-width="2"/>
  <line x1="150" y1="100" x2="206" y2="43" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="90" font-family="Arial" font-size="16" fill="#1e293b">θ</text>
  <text x="190" y="125" font-family="Arial" font-size="14" fill="#3b82f6">r</text>
  <text x="235" y="70" font-family="Arial" font-size="14" fill="#ef4444">s = rθ</text>
  <text x="280" y="60" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">1 Radian</text>
  <text x="280" y="80" font-family="Arial" font-size="12" fill="#475569">when arc length s = r</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 17_0'
      }
    },
    {
      id: 'svg-physics_4_17_0-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <text x="200" y="30" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Degrees to Radians</text>
  <rect x="60" y="60" width="120" height="40" fill="#2d2f72" rx="4"/>
  <rect x="220" y="60" width="120" height="40" fill="#44370a" rx="4"/>
  <text x="120" y="85" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle">360°</text>
  <text x="280" y="85" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle">2π radians</text>
  <path d="M 190 80 L 210 80" stroke="#334155" stroke-width="2"/>
  <text x="200" y="140" font-family="Arial" font-size="14" fill="#047857" font-weight="bold" text-anchor="middle">Radians = Degrees × (π / 180)</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 17_0'
      }
    },
    {
      id: 'enr-svg-radians',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="480" height="280" fill="#0f172a" rx="8"/>
  <circle cx="200" cy="145" r="100" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="200" cy="145" r="4" fill="#1e293b"/>
  <line x1="200" y1="145" x2="300" y2="145" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="248" y="138" font-family="Arial" font-size="14" fill="#3b82f6" font-weight="bold">r</text>
  <path d="M 300 145 A 100 100 0 0 0 257 50" fill="none" stroke="#ef4444" stroke-width="3"/>
  <line x1="200" y1="145" x2="257" y2="50" stroke="#3b82f6" stroke-width="2.5"/>
  <path d="M 240 145 A 40 40 0 0 0 224 108" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="248" y="115" font-family="Arial" font-size="16" fill="#f59e0b" font-weight="bold">θ</text>
  <text x="305" y="100" font-family="Arial" font-size="14" fill="#ef4444" font-weight="bold">s (arc length)</text>
  <text x="20" y="36" font-family="Arial" font-size="15" fill="#1e293b" font-weight="bold">θ = s/r (radians)</text>
  <text x="345" y="60" font-family="Arial" font-size="13" fill="#334155" font-weight="bold">Key angles:</text>
  <text x="345" y="82" font-family="Arial" font-size="12" fill="#475569">360° = 2π rad</text>
  <text x="345" y="100" font-family="Arial" font-size="12" fill="#475569">180° = π rad</text>
  <text x="345" y="118" font-family="Arial" font-size="12" fill="#475569">90°  = π/2 rad</text>
  <rect x="20" y="200" width="220" height="62" fill="#2d2f72" rx="6" stroke="#6366f1" stroke-width="1.5"/>
  <text x="130" y="220" font-family="Arial" font-size="13" fill="#3730a3" font-weight="bold" text-anchor="middle">Angular velocity</text>
  <text x="130" y="240" font-family="Arial" font-size="13" fill="#3730a3" text-anchor="middle">ω = Δθ/Δt (rad s⁻¹)</text>
  <text x="130" y="256" font-family="Arial" font-size="13" fill="#3730a3" text-anchor="middle">v = ωr (tangential speed)</text>
</svg>`,
        caption: 'Radian measure: θ=s/r. Angular velocity ω=v/r'
      }
    },
    {
      id: 'enr-worked-car',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Car Wheel',
        text: 'Car wheel: radius r = 0.30 m, v = 30 m/s (108 km/h).\n\nω = v/r = 30/0.30 = 100 rad/s\nFrequency f = ω/2π = 15.9 rev/s = 954 rpm\nPeriod T = 1/f = 0.063 s (wheel completes one revolution every 63 ms)\n\nF1 car at 300 km/h: ω = 100 × (300/108) = 278 rad/s → ~2650 rpm just from rolling. Engine spins much faster.'
      }
    },
    {
      id: 'enr-tip-radians',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Radians & Angular Velocity',
        text: 'ω = 2πf = 2π/T.  v = ωr.\n\nAt constant speed |v| is constant but direction changes → acceleration exists (centripetal).\n\nθ in radians: 360° = 2π, 180° = π, 90° = π/2.\nConvert degrees to radians: multiply by π/180.'
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Radians & Angular Displacement' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
