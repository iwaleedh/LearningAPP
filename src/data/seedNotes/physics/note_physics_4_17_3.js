export const note_physics_4_17_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Apply F = mv²/r = mω²r as <strong>centripetal force</strong>; identify the physical force providing <strong>centripetal force</strong> in specific situations (tension, gravity, friction, normal force, magnetic force); analyse motion in vertical circles including minimum speed conditions" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Centripetal Force</strong> in Circular Motion", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "An object moving in a circle is accelerating towards the centre even if its speed is constant, because its velocity direction is continuously changing." },
      { text: "By Newton's second law (F = ma), a resultant force must act on the object directed towards the centre of the circle." },
      { text: "This force is called the <strong>centripetal force</strong>." },
      { text: "It is always directed radially inward — towards the centre of the circle — and its magnitude is: F_c = mv²/r = mω²r, where m is the mass, v is the speed, r is the radius, and ω is the <strong>angular velocity</strong>." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Centripetal Force</strong> is Not a New Force The <strong>centripetal force</strong> is not a separate type of force — it is the name given to the resultant force that happens to be directed towards the centre of the circle." },
      { text: "Depending on the situation, this <strong>centripetal force</strong> is provided by one or more familiar forces: Tension in a string (e.g. ball on a string, hammer throw)" },
      { text: "Gravitational attraction (e.g. planets orbiting the Sun, Moon orbiting Earth, satellites)" },
      { text: "Friction between tyres and road (e.g. car cornering)" },
      { text: "Normal contact force (e.g. rider at the top of a loop-the-loop)" },
      { text: "Magnetic force (e.g. charged particle in a <strong>magnetic field</strong>)" },
      { text: "A combination (e.g. object on a banked curve)." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="170" fill="#0f172a"/><text x="200" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Examples of Centripetal Force</text><circle cx="80" cy="90" r="35" fill="none" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="80" cy="55" r="10" fill="#339af0" stroke="#1864ab" stroke-width="1.5"/><line x1="80" y1="90" x2="80" y2="65" stroke="#fa5252" stroke-width="2"/><polygon points="80,65 76,73 84,73" fill="#fa5252"/><text x="80" y="50" font-family="sans-serif" font-size="7" fill="#1864ab" text-anchor="middle">ball</text><text x="80" y="145" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">Tension</text><text x="80" y="155" font-family="sans-serif" font-size="8" fill="#1864ab" text-anchor="middle">(string)</text><circle cx="200" cy="90" r="35" fill="none" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="200" cy="55" r="10" fill="#2f9e44" stroke="#1864ab" stroke-width="1.5"/><line x1="200" y1="90" x2="200" y2="65" stroke="#fa5252" stroke-width="2"/><polygon points="200,65 196,73 204,73" fill="#fa5252"/><text x="200" y="50" font-family="sans-serif" font-size="7" fill="#2f9e44" text-anchor="middle">car</text><text x="200" y="145" font-family="sans-serif" font-size="9" fill="#2f9e44" text-anchor="middle">Friction</text><text x="200" y="155" font-family="sans-serif" font-size="8" fill="#2f9e44" text-anchor="middle">(tyres/road)</text><circle cx="320" cy="90" r="35" fill="none" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="320" cy="55" r="7" fill="#fab005" stroke="#e67700" stroke-width="1.5"/><line x1="320" y1="90" x2="320" y2="65" stroke="#fa5252" stroke-width="2"/><polygon points="320,65 316,73 324,73" fill="#fa5252"/><text x="320" y="50" font-family="sans-serif" font-size="7" fill="#e67700" text-anchor="middle">planet</text><text x="320" y="145" font-family="sans-serif" font-size="9" fill="#e67700" text-anchor="middle">Gravity</text><text x="320" y="155" font-family="sans-serif" font-size="8" fill="#e67700" text-anchor="middle">(Sun-planet)</text><text x="80" y="130" font-family="sans-serif" font-size="8" fill="#fa5252" text-anchor="middle">F_c &#8592; centre</text><text x="200" y="130" font-family="sans-serif" font-size="8" fill="#fa5252" text-anchor="middle">F_c &#8592; centre</text><text x="320" y="130" font-family="sans-serif" font-size="8" fill="#fa5252" text-anchor="middle">F_c &#8592; centre</text></svg>', caption: 'Centripetal force examples: tension (ball on string), friction (car cornering), gravity (planet orbiting). Always directed towards centre.' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A car of mass 1200 kg travels around a roundabout of radius 40 m at a speed of 15 m s⁻¹." },
      { text: "Find the <strong>centripetal force</strong> and the minimum coefficient of friction needed to maintain this circular motion." },
      { text: "F_c = mv²/r = 1200 × 15² / 40 = 1200 × 225 / 40 = 6750 N." },
      { text: "This is provided by friction: F_friction = μmg." },
      { text: "So μ = F_c/(mg) = 6750/(1200 × 9.81) = 6750/11772 = 0.57." },
      { text: "If the coefficient of friction is less than 0.57, the car will not be able to maintain this circular path at 15 m s⁻¹." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Vertical Circles When an object moves in a vertical circle, the required <strong>centripetal force</strong> is the same (mv²/r) at all points, but the forces providing it change because gravity acts downward throughout. At the top of the circle: the <strong>centripetal force</strong> is directed downward (toward the centre). Both weight (mg) and normal force N or tension T act downward: N + mg = mv²/r → N = mv²/r − mg. The minimum speed at the top is when N = 0: mv²_min/r = mg → v_min = √(gr). If v < v_min, the object leaves the circular path at the top." }] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="170" fill="#0f172a"/><text x="200" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Vertical Circle: Force Analysis</text><circle cx="200" cy="90" r="65" fill="none" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="200" cy="25" r="10" fill="#339af0" stroke="#1864ab" stroke-width="1.5"/><line x1="200" y1="25" x2="200" y2="50" stroke="#fa5252" stroke-width="2"/><polygon points="200,50 196,42 204,42" fill="#fa5252"/><line x1="200" y1="25" x2="200" y2="5" stroke="#212529" stroke-width="2"/><polygon points="200,5 196,13 204,13" fill="#212529"/><text x="210" y="20" font-family="sans-serif" font-size="8" fill="#c92a2a">N or T</text><text x="210" y="12" font-family="sans-serif" font-size="8" fill="#212529">mg</text><text x="200" y="17" font-family="sans-serif" font-size="8" fill="#1864ab" text-anchor="middle">TOP</text><text x="140" y="30" font-family="sans-serif" font-size="8" fill="#495057">F_c = mv&#178;/r</text><text x="120" y="42" font-family="sans-serif" font-size="8" fill="#495057">= N + mg</text><circle cx="200" cy="155" r="10" fill="#fa5252" stroke="#c92a2a" stroke-width="1.5"/><line x1="200" y1="155" x2="200" y2="130" stroke="#fa5252" stroke-width="2"/><polygon points="200,130 196,138 204,138" fill="#fa5252"/><line x1="200" y1="165" x2="200" y2="168" stroke="#212529" stroke-width="2"/><polygon points="200,168 196,160 204,160" fill="#212529"/><text x="212" y="153" font-family="sans-serif" font-size="8" fill="#c92a2a">N</text><text x="212" y="165" font-family="sans-serif" font-size="8" fill="#212529">mg</text><text x="200" y="168" font-family="sans-serif" font-size="8" fill="#c92a2a" text-anchor="middle">BOTTOM</text><text x="268" y="175" font-family="sans-serif" font-size="8" fill="#495057">F_c = N &#8722; mg</text><text x="200" y="90" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Top: N = mv&#178;/r &#8722; mg</text><text x="200" y="103" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">v_min = &#8730;(gr) when N=0</text><text x="200" y="116" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Bottom: N = mv&#178;/r + mg</text></svg>', caption: 'Vertical circle: top: F_c = N + mg → N = mv²/r − mg. Bottom: F_c = N − mg → N = mv²/r + mg. Minimum speed at top: v_min = √(gr).' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "At the Bottom of a Vertical Circle At the bottom of the circle, the <strong>centripetal force</strong> is directed upward (toward the centre)" },
      { text: "The normal force N acts upward and weight mg acts downward: N − mg = mv²/r → N = mv²/r + mg." },
      { text: "The normal force is always greater than mg at the bottom — you feel heavier (apparent weight > real weight)" },
      { text: "This is why riders feel a compression force at the bottom of a loop and a sensation of weightlessness at the top." },
      { text: "The same analysis applies to a bucket of water swung in a vertical circle: at the top, the minimum speed to keep water in the bucket is v_min = √(gr)." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Charged Particle in a <strong>Magnetic Field</strong> A charged particle (charge q, mass m) moving with speed v perpendicular to a uniform <strong>magnetic field</strong> B experiences a magnetic force F = Bqv." },
      { text: "This force is always perpendicular to the velocity (and to B), so it does no work and the speed remains constant." },
      { text: "The magnetic force provides the <strong>centripetal force</strong>: Bqv = mv²/r → r = mv/(Bq)" },
      { text: "The particle moves in a circle of radius r." },
      { text: "A larger mass or speed means a larger radius; a stronger field or larger charge means a smaller radius." },
      { text: "This is the principle behind particle accelerators (cyclotrons) and mass spectrometers." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Equations', text: '<strong>Centripetal force</strong>: F_c = mv²/r = mω²r. Not a new force — provided by tension/friction/gravity/magnetic force. Vertical circle top: N + mg = mv²/r; v_min = √(gr) (when N=0). Vertical circle bottom: N − mg = mv²/r; N = mv²/r + mg (always > mg). Charged particle in B field: Bqv = mv²/r → r = mv/(Bq).' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "For three different situations, identify which physical force provides the <strong>centripetal force</strong> and write the equation equating it to mv²/r", checked: false },
      { text: "Analyse an object at the top and bottom of a vertical circle, writing equations for the normal force and finding the minimum speed at the top", checked: false },
      { text: "Derive the radius of circular motion for a charged particle in a <strong>magnetic field</strong> and explain what happens to r as B increases", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Centripetal force</strong> F_c = mv²/r = mω²r: always toward centre; provided by tension, friction, gravity, normal force, or magnetic force. Vertical circle: top — N = mv²/r − mg; v_min = √(gr) when N=0. Bottom — N = mv²/r + mg (heavier). Charged particle in B field: Bqv = mv²/r → r = mv/(Bq); larger m or v → larger circle; larger B or q → smaller circle." } },
    {
      id: 'enr-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Vertical Circle — Minimum Speed & Tension',
        text: "A ball (m = 0.3 kg) is attached to a string of length 1.2 m and swung in a vertical circle. (g = 9.81 m s⁻²) ► (a) Find the minimum speed at the top for the string to remain taut. At the top, minimum condition is T = 0: mg = mv²_min/r → v_min = √(gr) = √(9.81 × 1.2) = √11.77 = 3.43 m s⁻¹. ► (b) Find the tension when the ball passes the bottom at 7 m s⁻¹. At the bottom: T − mg = mv²/r → T = m(v²/r + g) = 0.3 × (49/1.2 + 9.81) = 0.3 × (40.83 + 9.81) = 0.3 × 50.64 = 15.2 N. Note T > mg at the bottom — the rider feels 'heavier' at the lowest point of a loop."
      }
    },
    {
      id: 'enr-worked-planet',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Satellite Orbital Speed & Period',
        text: "Satellite orbit: circular orbit radius r = 4.2 × 10⁷ m. Gravitational force provides <strong>centripetal force</strong>: GMm/r² = mv²/r → v = √(GM/r). G = 6.67 × 10⁻¹¹ N m² kg⁻², M_Earth = 6 × 10²⁴ kg. ► v = √(6.67 × 10⁻¹¹ × 6 × 10²⁴ / 4.2 × 10⁷) = √(4.002 × 10¹⁴ / 4.2 × 10⁷) = √(9.53 × 10⁶) ≈ 3080 m s⁻¹. ► Orbital period: T = 2πr/v = 2π × 4.2 × 10⁷ / 3080 ≈ 85,700 s ≈ 23.8 h. Geostationary orbit (T = 24 h) sits at roughly 36,000 km altitude above the equator."
      }
    },
    {
      id: 'enr-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Circular Orbits',
        text: "For orbit problems set gravitational force = <strong>centripetal force</strong>: GMm/r² = mv²/r, giving v = √(GM/r). The satellite mass cancels — orbital speed is independent of the satellite's own mass. Geostationary satellites have T = 24 h, orbit directly above the equator, and appear stationary from Earth's surface. Always convert T from hours to seconds before substituting. Don't confuse orbital speed v = √(GM/r) with escape velocity v_esc = √(2GM/r) — escape velocity is √2 times the orbital speed at the same radius."
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "What is Centripetal Force?",
        text: "Centripetal force is NOT a new type of force \u2014 it is the name given to the resultant force that happens to be directed toward the centre."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Minimum Speed at Top",
        text: "Vertical circles: minimum speed at top v_min = \u221a(gr) occurs when normal force N = 0 \u2014 all centripetal force comes from gravity."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Name four physical forces that can act as a <strong>centripetal force</strong> in different situations. Is <strong>centripetal force</strong> a new type of force?' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'For an object at the top of a vertical circle, write the equation for the normal force. What is the minimum speed required at the top, and what happens if speed drops below this?' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'A charged particle enters a <strong>magnetic field</strong> perpendicular to B. Derive an expression for the radius of its circular path. What determines whether the radius is large or small?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
