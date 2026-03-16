export const note_physics_1_2_6 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Analyse projectile motion by treating horizontal and vertical components as independent; calculate time of flight, range, and maximum height" } },
    { id: 'head-1', type: 'heading', data: { text: "Projectiles", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "A projectile is any object that has been launched into the air and is moving under gravity alone (air resistance ignored)" },
      { text: "The key principle of projectile motion is that the horizontal and vertical components of motion are completely independent of each other." },
      { text: "This allows the motion to be analysed separately in each direction, using the SUVAT equations." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "The Independence Principle Horizontally: there is no <strong>force</strong> (ignoring air resistance), so horizontal <strong>acceleration</strong> = 0." },
      { text: "This means horizontal <strong>velocity</strong> is constant throughout the flight: vx = ux = u cosθ." },
      { text: "The horizontal <strong>displacement</strong> is simply: x = ux t = u cosθ × t." },
      { text: "Vertically: gravity acts downward with g = 9.81 m/s²" },
      { text: "The vertical motion is uniformly accelerated (or decelerated on the way up)" },
      { text: "Applying SUVAT vertically with a = -g (taking upward as positive): vy = uy - gt; y = uy t - ½gt²." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="190" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Projectile Motion: Parabolic Path</text><line x1="30" y1="155" x2="385" y2="155" stroke="#212529" stroke-width="2"/><line x1="30" y1="155" x2="30" y2="30" stroke="#212529" stroke-width="2"/><text x="207" y="175" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Horizontal distance x / m</text><text x="13" y="95" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle" transform="rotate(-90 13,95)">Height y / m</text><path d="M 40 155 Q 200 30 360 155" stroke="#339af0" stroke-width="2.5" fill="none"/><circle cx="40" cy="155" r="5" fill="#40c057"/><text x="40" y="148" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">Launch</text><circle cx="200" cy="42" r="5" fill="#fa5252"/><text x="200" y="35" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">Max height H</text><circle cx="360" cy="155" r="5" fill="#fab005"/><text x="360" y="148" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">Land</text><line x1="40" y1="155" x2="360" y2="155" stroke="#fab005" stroke-width="1.5" stroke-dasharray="5,3"/><text x="200" y="170" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">Range R</text><line x1="200" y1="42" x2="200" y2="155" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="4,3"/><text x="215" y="100" font-family="sans-serif" font-size="10" fill="#c92a2a">H</text></svg>', caption: 'Parabolic trajectory: launch point, maximum height H, and range R' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Initial Components of <strong>Velocity</strong> If a projectile is launched at speed u at angle θ above the horizontal, the initial <strong>velocity</strong> components are: horizontal: ux = u cosθ; vertical: uy = u sinθ." },
      { text: "These components are found by resolving the initial <strong>velocity</strong> <strong>vector</strong> (as covered in note 1_2_4)" },
      { text: "For a horizontally launched projectile (θ = 0°), ux = u and uy = 0 — there is no initial vertical <strong>velocity</strong>." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Time of Flight For a projectile launched from and landing at the same height, the vertical <strong>displacement</strong> is zero at landing: y = 0." },
      { text: "Using y = uy t - ½gt²: 0 = uy t - ½gt², so 0 = t(uy - ½gt)" },
      { text: "Two solutions: t = 0 (at launch) and t = 2uy/g (at landing)" },
      { text: "Therefore, time of flight T = 2uy/g = 2u sinθ / g." },
      { text: "The time to reach maximum height is half this: t_max = uy/g = u sinθ / g (this is when vertical <strong>velocity</strong> = 0)." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Maximum Height At maximum height, the vertical <strong>velocity</strong> is zero: vy = 0." },
      { text: "Using vy² = uy² - 2gH: 0 = uy² - 2gH, so H = uy²/(2g) = (u sinθ)²/(2g)" },
      { text: "Alternatively, using y = uy t - ½gt² at t = uy/g: H = uy(uy/g) - ½g(uy/g)² = uy²/g - uy²/(2g) = uy²/(2g)" },
      { text: "Both approaches give the same answer." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Range The horizontal range R is the horizontal distance covered during the time of flight T: R = ux × T = u cosθ × (2u sinθ)/g = u² sin2θ / g (using the double-angle identity: 2 sinθ cosθ = sin2θ)" },
      { text: "The range is maximum when θ = 45° (since sin2θ is maximum when 2θ = 90°, i.e. θ = 45°)" },
      { text: "This assumes launch and landing heights are the same." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Horizontal Projectile (dropped from height)</text><line x1="30" y1="40" x2="380" y2="40" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="30" y1="155" x2="380" y2="155" stroke="#212529" stroke-width="2"/><line x1="30" y1="40" x2="30" y2="155" stroke="#212529" stroke-width="2"/><text x="205" y="172" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Horizontal distance x / m</text><text x="13" y="97" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle" transform="rotate(-90 13,97)">Height y / m</text><path d="M 30 40 Q 120 42 360 155" stroke="#339af0" stroke-width="2.5" fill="none"/><line x1="30" y1="40" x2="30" y2="155" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="4,3"/><text x="20" y="97" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">h</text><text x="50" y="35" font-family="sans-serif" font-size="10" fill="#339af0">ux = u</text><text x="50" y="48" font-family="sans-serif" font-size="10" fill="#339af0">uy = 0</text><text x="200" y="100" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Horizontal: x = u t</text><text x="200" y="115" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Vertical: h = &#189;gt&#178;  &#8594;  t = sqrt(2h/g)</text></svg>', caption: 'Horizontal projectile: launched horizontally from height h. Time found from vertical fall: t = sqrt(2h/g)' } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Horizontally Launched Projectiles A special case is when a projectile is launched horizontally from a height h (e.g. a ball rolling off a table)" },
      { text: "The initial vertical <strong>velocity</strong> is zero, so: vertical motion: h = ½gt², giving time of flight t = sqrt(2h/g); horizontal motion: range R = ux × t = u × sqrt(2h/g)" },
      { text: "Notice the range increases with speed u and with height h." },
      { text: "Also note: the horizontal <strong>velocity</strong> component stays constant throughout, but the vertical <strong>velocity</strong> increases — so the speed at landing is greater than the launch speed." }
    ] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A stone is thrown horizontally at 15 m/s from the edge of a cliff 45 m high." },
      { text: "Find: (a) the time of flight, and (b) the horizontal range." },
      { text: "(a) Vertically: h = ½gt², 45 = ½(9.81)t², t² = 45/4.905 = 9.17, t = 3.03 s." },
      { text: "(b) Horizontally: R = ux × t = 15 × 3.03 = 45.4 m." },
      { text: "The stone lands 45.4 m from the base of the cliff after 3.03 s of flight." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Principle', text: 'Horizontal and vertical motions are INDEPENDENT. Horizontal: no <strong>acceleration</strong> (ax = 0), so vx = constant = u cosθ. Vertical: <strong>acceleration</strong> = g downward. Analyse each direction separately using SUVAT.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "State the key principle of projectile motion (independence of horizontal and vertical)", checked: false },
      { text: "Calculate the time of flight for a projectile launched at angle θ", checked: false },
      { text: "Calculate the maximum height and horizontal range of a projectile", checked: false },
      { text: "Solve a problem involving a horizontally launched projectile", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Projectile motion: horizontal (ax = 0, vx = u cosθ = constant) and vertical (ay = -g, vy = uy - gt) are independent. Time of flight T = 2u sinθ / g. Maximum height H = u²sin²θ / 2g. Range R = u²sin2θ / g. For a horizontal launch from height h: t = sqrt(2h/g), R = u × t." } },
    { id: 'enr-1', type: 'callout', data: { style: 'worked', title: 'Measuring g Using Light Gates', text: 'A steel ball of diameter d = 0.020 m is dropped through two light gates separated by s = 0.800 ± 0.002 m. The ball interrupts each gate for times t₁ = 0.0423 s (upper gate) and t₂ = 0.0267 s (lower gate). Step 1 — Velocities at each gate: v₁ = d / t₁ = 0.020 / 0.0423 = 0.473 m/s; v₂ = d / t₂ = 0.020 / 0.0267 = 0.749 m/s. Step 2 — Apply v² = u² + 2as with a = g: g = (v₂² − v₁²) / (2s) = (0.749² − 0.473²) / (2 × 0.800) = (0.561 − 0.224) / 1.600 = 0.337 / 1.600 ≈ 9.81 m/s².' } },
    { id: 'enr-2', type: 'callout', data: { style: 'warning', title: 'Air Resistance in Free Fall', text: 'A feather and a hammer fall at the same rate in a VACUUM — demonstrated on the Moon in 1971 by Apollo 15 astronaut David Scott. In air, the <strong>drag</strong> <strong>force</strong> on a feather is enormous compared to its <strong>weight</strong>. When the <strong>drag</strong>-to-<strong>weight</strong> ratio is large, objects do not accelerate at g and reach <strong>terminal velocity</strong> almost instantly. Only in a vacuum, or for dense/streamlined objects over short distances, is free fall truly at g = 9.81 m/s².' } },
    { id: 'enr-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Using g', text: "Use g = 9.81 m/s² (or the value stated in the paper — some papers allow 9.8 or 10). Always state that g acts DOWNWARD. Choose a consistent sign convention: taking downward as positive gives a = +9.81 m/s²; taking upward as positive gives a = −9.81 m/s². Inconsistent signs are the most common source of error in kinematics questions." } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'State the key principle of projectile motion. What is the horizontal acceleration? What is the vertical acceleration?' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'Derive the time of flight for a projectile launched at angle θ from the same horizontal level.' },
    { id: 'cue-3', blockId: 'para-8', prompt: 'A ball is launched horizontally from height h at speed u. Find the time of flight and horizontal range.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
