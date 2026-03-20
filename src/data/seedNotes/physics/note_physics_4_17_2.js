export const note_physics_4_17_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Centripetal Acceleration</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Centripetal Acceleration</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Centripetal Acceleration</strong> Maintaining Circular Motion Radians & Angular Displacement Radians" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "A radian (rad) is defined as: The angle subtended at the centre of a circle by an arc equal in length to the radius of the circle Radians are used whenever describing the angular displacement of objects in circular" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "motion Angular displacement can be calculated using the equation: Where: Δ θ = angular displacement, or angle of rotation (radians)" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "s = length of the arc, or the distance travelled around the circle (m) r = radius of the circle (m) Radians are commonly written in terms of π The angle in radians for a complete circle (360) is equal to:" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Radian Conversions If an angle of 360 = 2 π  radians, then 1 radian in degrees is equal to: Use the following equation to convert from degrees to radians: Table of common degrees to radians conversions" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "o o Worked Example Convert the following angular displacement into degrees:" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "Answer: Examiner Tips and Tricks You will notice your calculator has a degree (Deg) and radians (Rad) mode This is shown by the “D” or “R” highlighted at the top of the screen" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "Remember to make sure it's in the right mode when using trigonometric functions (sin, cos, tan) depending on whether the answer is required in degrees Angular Displacement The angular displacement Δ θ is the ratio of:" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Angular displacement describes the changeinangle, in radians, of a body as it moves in a circle This angle is measured with respect to the centre of orbitIt is extremely common for students to get the wrong answer (and lose marks) because their calculator is in the wrong mode when using trigonometric functions" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "- make sure this doesn't happen to you! When the angle is equal to one radian, the length of the arc ( Δs) is equal to the radius (r) of the circle Examiner Tips and Tricks" }] } },

  
    {
      id: 'svg-physics_4_17_2-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="240" fill="#0f172a" rx="8"/>
  <circle cx="200" cy="120" r="90" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
  <circle cx="200" cy="120" r="5" fill="#334155"/>
  <circle cx="200" cy="30" r="12" fill="#3b82f6"/>
  <path d="M 200 30 L 260 30" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)"/>
  <text x="265" y="25" font-family="Arial" font-size="14" fill="#10b981">v (constant speed)</text>
  <path d="M 200 30 L 200 80" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)"/>
  <text x="210" y="70" font-family="Arial" font-size="14" fill="#ef4444">a (acceleration)</text>
  <text x="200" y="230" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Velocity changes direction ∴ App is accelerating</text>
  <defs>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
    </marker>
  </defs>
</svg>`,
        caption: 'Diagram illustrating concepts of 17_2'
      }
    },
    {
      id: 'svg-physics_4_17_2-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <text x="200" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Centripetal Acceleration Equations</text>
  <rect x="60" y="80" width="120" height="70" fill="#2d2f72" rx="8" stroke="#3b82f6" stroke-width="2"/>
  <rect x="220" y="80" width="120" height="70" fill="#2d2f72" rx="8" stroke="#3b82f6" stroke-width="2"/>
  <text x="120" y="120" font-family="Arial" font-size="20" fill="#1d4ed8" font-weight="bold" text-anchor="middle">a = v² / r</text>
  <text x="280" y="120" font-family="Arial" font-size="20" fill="#1d4ed8" font-weight="bold" text-anchor="middle">a = rω²</text>
  <text x="200" y="180" font-family="Arial" font-size="14" fill="#64748b" text-anchor="middle">Directed towards the centre of the circle</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 17_2'
      }
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="240" fill="#0f172a" rx="8"/>
  <text x="250" y="22" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Radian Definition: θ = s / r</text>
  <circle cx="200" cy="125" r="85" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="200" cy="125" r="4" fill="#1e293b"/>
  <line x1="200" y1="125" x2="285" y2="125" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="242" y="143" font-family="Arial" font-size="13" fill="#3b82f6" text-anchor="middle">r</text>
  <path d="M 285 125 A 85 85 0 0 0 248 51" stroke="#f59e0b" stroke-width="3" fill="none"/>
  <text x="308" y="85" font-family="Arial" font-size="12" fill="#f59e0b" font-weight="bold">arc s = r</text>
  <line x1="200" y1="125" x2="248" y2="51" stroke="#3b82f6" stroke-width="2.5"/>
  <path d="M 225 125 A 25 25 0 0 0 213 102" stroke="#ef4444" stroke-width="2" fill="none"/>
  <text x="245" y="107" font-family="Arial" font-size="13" fill="#ef4444" font-weight="bold">θ = 1 rad</text>
  <text x="420" y="88" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">360° = 2π rad</text>
  <text x="420" y="106" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">180° = π rad</text>
  <text x="420" y="124" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">90° = π/2 rad</text>
  <text x="420" y="142" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">1 rad ≈ 57.3°</text>
  <text x="250" y="215" font-family="Arial" font-size="12" fill="#475569" text-anchor="middle">When arc s = radius r, the angle θ = 1 radian ≈ 57.3°</text>
  <text x="250" y="232" font-family="Arial" font-size="12" fill="#475569" text-anchor="middle">Angular displacement: Δθ = s / r (radians)</text>
</svg>`,
        caption: 'Radian definition: when arc length s equals radius r, angle θ = 1 rad ≈ 57.3°. Full revolution = 2π rad.'
      }
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Centripetal Acceleration',
        text: "A car (m = 900 kg) travels around a circular bend of radius 50 m at a constant speed of 20 m s⁻¹. Find (a) the <strong>centripetal acceleration</strong> and (b) the <strong>centripetal force</strong>. ► (a) a = v²/r = 20² / 50 = 400 / 50 = 8.0 m s⁻² (directed towards the centre of the circle). ► (b) F = ma = 900 × 8.0 = 7200 N — provided by friction between the tyres and road. ► Cross-check using ω: ω = v/r = 20/50 = 0.4 rad s⁻¹; a = rω² = 50 × (0.4)² = 50 × 0.16 = 8.0 m s⁻² ✓"
      }
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Radians & Centripetal Acceleration',
        text: "Always set your calculator to Radians mode for circular motion calculations. Both a = v²/r and a = rω² are valid — use whichever matches the given data; they are related via v = ωr. <strong>Centripetal acceleration</strong> always points towards the centre (perpendicular to v), so it changes direction but not speed — <strong>kinetic energy</strong> is constant. Remember: one full revolution = 2π rad ≈ 6.28 rad; half revolution = π rad."
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Centripetal Acceleration</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
