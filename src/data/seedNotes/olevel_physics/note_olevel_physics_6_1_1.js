export const note_olevel_physics_6_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-1-2-moons.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe the Moon's orbit around Earth; explain the role of gravity; distinguish natural moons from artificial satellites." } },
    { id: 'h-moon', type: 'heading', data: { text: "Earth's Moon", level: 2 } },
    { id: 'para-moon', type: 'paragraph', data: { text: "The Moon is Earth's only natural satellite. It orbits Earth at an average distance of approximately <strong>384 000 km</strong> with an orbital period of about <strong>27.3 days</strong>. The Moon's radius is about 1740 km — roughly one-quarter of Earth's." } },
    { id: 'list-moon', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Orbital period:</strong> ≈ 27.3 days (sidereal period); the lunar month (phase cycle) ≈ 29.5 days." },
      { text: "<strong>Distance from Earth:</strong> ≈ 384 000 km (average)." },
      { text: "<strong>Tidal locking:</strong> the Moon's rotation period equals its orbital period, so the same face always points toward Earth." },
      { text: "<strong>Tides:</strong> the Moon's gravity pulls on Earth's oceans, causing two high tides and two low tides per day." },
    ]}},
    { id: 'svg-moon', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280">
  <rect width="400" height="280" fill="#0f172a" rx="8"/>
  <text x="200" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Earth–Moon System</text>
  <!-- Stars -->
  <circle cx="50" cy="50" r="1" fill="#1e293b"/><circle cx="120" cy="30" r="1" fill="#1e293b"/>
  <circle cx="350" cy="60" r="1" fill="#1e293b"/><circle cx="380" cy="120" r="1" fill="#1e293b"/>
  <circle cx="30" cy="200" r="1" fill="#1e293b"/><circle cx="370" cy="250" r="1" fill="#1e293b"/>
  <!-- Earth -->
  <circle cx="200" cy="150" r="40" fill="#1d4ed8"/>
  <ellipse cx="200" cy="150" rx="40" ry="15" fill="none" stroke="#22c55e" stroke-width="2" opacity="0.6"/>
  <circle cx="175" cy="135" r="12" fill="#22c55e" opacity="0.8"/>
  <circle cx="220" cy="160" r="8" fill="#22c55e" opacity="0.8"/>
  <text x="200" y="205" text-anchor="middle" font-size="10" fill="#60a5fa">Earth</text>
  <!-- Orbit path -->
  <ellipse cx="200" cy="150" rx="130" ry="90" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="6"/>
  <!-- Moon -->
  <circle cx="330" cy="150" r="15" fill="#94a3b8"/>
  <circle cx="322" cy="144" r="4" fill="#64748b" opacity="0.5"/>
  <circle cx="335" cy="158" r="3" fill="#64748b" opacity="0.5"/>
  <text x="335" y="177" text-anchor="middle" font-size="10" fill="#94a3b8">Moon</text>
  <!-- Gravity arrow -->
  <line x1="315" y1="150" x2="245" y2="150" stroke="#f59e0b" stroke-width="2" marker-end="url(#grav)"/>
  <text x="280" y="143" text-anchor="middle" font-size="8" fill="#f59e0b">gravity</text>
  <!-- Orbital velocity arrow -->
  <line x1="328" y1="135" x2="310" y2="100" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#vel)"/>
  <text x="300" y="92" text-anchor="middle" font-size="8" fill="#2d1b69">orbital</text>
  <text x="300" y="103" text-anchor="middle" font-size="8" fill="#2d1b69">velocity</text>
  <!-- Distance label -->
  <line x1="240" y1="175" x2="315" y2="175" stroke="#94a3b8" stroke-width="1"/>
  <text x="277" y="188" text-anchor="middle" font-size="8" fill="#94a3b8">~384 000 km</text>
  <defs>
    <marker id="grav" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f59e0b"/></marker>
    <marker id="vel" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2d1b69"/></marker>
  </defs>
</svg>`, caption: "The Moon orbits Earth (period ≈ 27 days, distance ≈ 384 000 km). Earth's gravity provides the centripetal force." } },
    { id: 'h-other-moons', type: 'heading', data: { text: 'Moons of Other Planets', level: 2 } },
    { id: 'tbl-moons', type: 'comparisonTable', data: { caption: 'Notable moons in the solar system', headers: ['Moon', 'Parent planet', 'Notable feature'], rows: [
      ['Io', 'Jupiter', 'Most volcanically active body in solar system'],
      ['Europa', 'Jupiter', 'Subsurface liquid water ocean; candidate for life'],
      ['Ganymede', 'Jupiter', "Largest moon in solar system — larger than Mercury"],
      ['Titan', 'Saturn', 'Thick nitrogen atmosphere; lakes of liquid methane'],
      ['Triton', 'Neptune', 'Orbits opposite direction to Neptune; captured object'],
    ]}},
    { id: 'h-satellites', type: 'heading', data: { text: 'Natural vs Artificial Satellites', level: 2 } },
    { id: 'list-satellites', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Natural satellites (moons):</strong> formed naturally, orbiting planets due to gravity. The solar system has at least 290 known moons.' },
      { text: '<strong>Artificial satellites:</strong> human-made objects launched into orbit around Earth (e.g. weather satellites, GPS, ISS, communications satellites). They obey the same orbital physics as natural satellites.' },
      { text: '<strong>Low Earth orbit (LEO):</strong> ≈ 200–2000 km altitude; shorter period (e.g. ISS period ≈ 90 min).' },
      { text: '<strong>Geostationary orbit:</strong> ≈ 35 786 km altitude; period exactly 24 hours; satellite stays above the same spot on Earth. Used for communications and weather monitoring.' },
    ]}},
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Gravity acts as the centripetal force for all orbits — natural or artificial. The orbital speed needed increases as the orbital radius decreases (inner satellites must travel faster).' } },
    { id: 'sum-1', type: 'summary', data: { text: "Earth's Moon: ~384 000 km away, orbits in ~27 days; gravity provides centripetal force. Other planets have many moons. Artificial satellites follow the same orbital principles as natural moons." } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: "Moon: 384 000 km, 27-day orbit, gravity = centripetal force. Tidal locking: same face always faces Earth.",
    cues: [
      { id: 'cue-1', blockId: 'para-moon', prompt: "State the Moon's average distance from Earth and its orbital period.", answer: 'Distance ≈ 384 000 km; orbital period ≈ 27.3 days.' },
      { id: 'cue-2', blockId: 'svg-moon', prompt: 'What force keeps the Moon in orbit around Earth?', answer: "Earth's gravitational force, which acts as the centripetal force." },
      { id: 'cue-3', blockId: 'list-moon', prompt: "What causes the Moon's tidal locking?", answer: "The Moon's rotation period equals its orbital period, so the same face always points toward Earth." },
      { id: 'cue-4', blockId: 'list-satellites', prompt: 'What is a geostationary orbit and what is it used for?', answer: 'An orbit at ~35 786 km altitude where the satellite has a 24-hour period and stays above the same point on Earth; used for communications and weather satellites.' },
      { id: 'cue-5', blockId: 'tbl-moons', prompt: 'What makes Europa a candidate for life in the solar system?', answer: 'It is believed to have a subsurface liquid water ocean beneath its icy crust.' },
    ],
  },
  evidence: [], mentions: [],
};
