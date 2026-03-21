export const note_physics_4_17_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Angular Velocity</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Angular Velocity</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Angular Velocity</strong> <strong>Angular Velocity</strong> The <strong>angular velocity</strong> ω of a body in circular motion is defined as: The rate of change of angular displacement" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "In other words, <strong>angular velocity</strong> is the angle swept out by an object in circular motion, per second <strong>Angular velocity</strong> is a vector quantity and is measured in rad s Since it is a vector, it has a magnitude (angular speed) and direction" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Angular velocity</strong> is calculated using: ω =Δθ Δt Where:" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Δ θ = change in angular displacement (radians) Δt = time interval (s) It is related to linear speed, v by the equation v = ωr" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Where: v = linear speed, v (m s) ω = angular speed (rad s) r = radius of orbit (m)–1" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "-1 -1 When an object is in uniform circular motion, velocity constantly changes direction, but the speed stays the same" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "Taking the angular displacement of a complete orbit or revolution as 2 π  radians, the <strong>angular velocity</strong> ω an be calculated using the equation: Where: T = the time period (s)" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "f = frequency (Hz) This equation shows that: The greater the rotation angle θ in a given amount of time T, the greater the <strong>angular velocity</strong> ω" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "An object travelling with the same linear velocity, but further from the centre of orbit (larger r) moves with a smaller <strong>angular velocity</strong> (smaller ω) Worked Example A bird flies in a horizontal circle with an angular speed of 5.25 rad s of radius 650 m." }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Calculate: a) The linear speed of the bird b) The frequency of the bird Examiner Tips and Tricks" }] } },

  
    {
      id: 'svg-physics_4_17_1-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
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
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <text x="200" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Angular Velocity (ω)</text>
  <text x="200" y="80" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">Rate of change of angular displacement</text>
  <rect x="120" y="110" width="160" height="60" fill="#0a2e1a" rx="8" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="145" font-family="Arial" font-size="20" fill="#047857" font-weight="bold" text-anchor="middle">ω = 2π / T = 2πf</text>
  <text x="200" y="190" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">Units: rad s⁻¹</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 17_1'
      }
    },
    {
      id: 'enr-svg-centripetal',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L0,8 L8,4 Z" fill="#10b981"/>
    </marker>
    <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L0,8 L8,4 Z" fill="#ef4444"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="480" height="260" fill="#0f172a" rx="8"/>
  <circle cx="220" cy="120" r="90" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,4"/>
  <circle cx="220" cy="120" r="5" fill="#1e293b"/>
  <text x="226" y="125" font-family="Arial" font-size="12" fill="#1e293b">centre</text>
  <circle cx="284" cy="56" r="11" fill="#6366f1"/>
  <text x="298" y="52" font-family="Arial" font-size="12" fill="#6366f1" font-weight="bold">m</text>
  <line x1="284" y1="56" x2="344" y2="84" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowG)"/>
  <text x="346" y="82" font-family="Arial" font-size="12" fill="#10b981" font-weight="bold">v (tangential)</text>
  <line x1="284" y1="56" x2="237" y2="95" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowR)"/>
  <text x="165" y="40" font-family="Arial" font-size="12" fill="#ef4444" font-weight="bold">a = v²/r (toward centre)</text>
  <rect x="10" y="218" width="460" height="32" fill="#78350f" rx="6" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="240" y="239" font-family="Arial" font-size="12" fill="#92400e" font-weight="bold" text-anchor="middle">F = mv²/r = mω²r   |   a = v²/r = ω²r   (toward centre)</text>
  <text x="20" y="210" font-family="Arial" font-size="11" fill="#f59e0b" font-weight="bold">Centripetal force always points toward centre</text>
</svg>`,
        caption: 'Centripetal acceleration: a=v²/r=ω²r. Directed toward centre'
      }
    },
    {
      id: 'enr-worked-orbit',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: ISS Orbit',
        text: 'ISS orbit: r = 6.78 × 10⁶ m (400 km altitude + Earth radius 6380 km). Speed v = 7660 m/s.\n\na = v²/r = 7660² / 6.78×10⁶ = 8.66 m/s²\n\nThis <strong>centripetal acceleration</strong> is provided by gravity (g = 8.66 m/s² at that altitude). Astronauts feel weightless because they are in freefall — both them and the station accelerate toward Earth at the same rate.'
      }
    },
    {
      id: 'enr-tip-centripetal',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Centripetal Force',
        text: '<strong>Centripetal force</strong> is NOT a new force — it is the resultant of existing forces (gravity, tension, friction, normal reaction, etc.) directed toward the centre.\n\na = v²/r = ω²r.  F = mv²/r = mω²r.\n\nAt top of loop: mg + N = mv²/r.\nAt bottom: N − mg = mv²/r.\nNet force always points toward centre of circular path.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Vertical Circle Forces",
        text: "Force equations differ at top vs bottom: at top mg + N = mv\u00b2/r; at bottom N \u2212 mg = mv\u00b2/r \u2014 easy mistake to invert these."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'key',
        title: "Velocity and Acceleration",
        text: "Velocity is tangential, acceleration is centripetal (perpendicular to velocity) \u2014 direction constantly changes but speed remains constant."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Angular Velocity</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
