export const note_olevel_physics_6_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-1-1-earth-and-solar-system.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Describe the structure of the solar system; name and order the planets; explain how gravity keeps planets in orbit.' } },
    { id: 'h-solar', type: 'heading', data: { text: 'The Solar System', level: 2 } },
    { id: 'para-solar', type: 'paragraph', data: { text: 'The <strong>solar system</strong> consists of the <strong>Sun</strong> (a star) at its centre, orbited by eight planets, their moons, dwarf planets (e.g. Pluto, Ceres), asteroids, comets, and other small bodies. All objects in the solar system are gravitationally bound to the Sun.' } },
    { id: 'h-planets', type: 'heading', data: { text: 'The Eight Planets', level: 2 } },
    { id: 'para-order', type: 'paragraph', data: { text: 'In order of increasing distance from the Sun: <strong>Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune</strong>. A helpful mnemonic: <em>"My Very Energetic Mother Just Served Us Noodles"</em>.' } },
    { id: 'tbl-planets', type: 'comparisonTable', data: { caption: 'Key facts about the planets', headers: ['Planet', 'Type', 'Notable feature'], rows: [
      ['Mercury', 'Terrestrial (rocky)', 'Closest to Sun; extreme temperature swings'],
      ['Venus', 'Terrestrial', 'Hottest planet; thick CO₂ atmosphere; retrograde rotation'],
      ['Earth', 'Terrestrial', 'Only known planet with liquid water and life'],
      ['Mars', 'Terrestrial', 'Red planet; thin atmosphere; largest volcano in solar system'],
      ['Jupiter', 'Gas giant', 'Largest planet; Great Red Spot (storm); 95 known moons'],
      ['Saturn', 'Gas giant', 'Spectacular ring system; least dense planet'],
      ['Uranus', 'Ice giant', 'Rotates on its side (axial tilt ≈ 98°)'],
      ['Neptune', 'Ice giant', 'Furthest from Sun; strongest winds in solar system'],
    ]}},
    { id: 'h-structure', type: 'heading', data: { text: 'Other Objects in the Solar System', level: 2 } },
    { id: 'list-other', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Asteroid belt:</strong> a region between Mars and Jupiter containing millions of rocky objects (asteroids), ranging from dust to ~950 km diameter (Ceres).' },
      { text: '<strong>Moons:</strong> natural satellites orbiting planets. Earth has 1 moon; Jupiter has at least 95.' },
      { text: '<strong>Comets:</strong> icy bodies from the outer solar system that develop bright tails when close to the Sun.' },
      { text: '<strong>Dwarf planets:</strong> Pluto, Eris, Ceres — not massive enough to clear their orbits.' },
    ]}},
    { id: 'svg-solar', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200" width="520" height="200">
  <rect width="520" height="200" fill="#0f172a" rx="8"/>
  <text x="260" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#f1f5f9">The Solar System (not to scale)</text>
  <!-- Sun -->
  <circle cx="30" cy="100" r="22" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
  <text x="30" y="133" text-anchor="middle" font-size="8" fill="#fbbf24">Sun</text>
  <!-- Orbit ellipses (simplified as lines to show order) -->
  <!-- Mercury -->
  <circle cx="75" cy="100" r="4" fill="#9ca3af"/>
  <text x="75" y="118" text-anchor="middle" font-size="7" fill="#9ca3af">Mer.</text>
  <!-- Venus -->
  <circle cx="110" cy="100" r="6" fill="#fcd34d"/>
  <text x="110" y="120" text-anchor="middle" font-size="7" fill="#fcd34d">Ven.</text>
  <!-- Earth -->
  <circle cx="148" cy="100" r="6" fill="#3b82f6"/>
  <text x="148" y="120" text-anchor="middle" font-size="7" fill="#3b82f6">Earth</text>
  <!-- Mars -->
  <circle cx="188" cy="100" r="5" fill="#ef4444"/>
  <text x="188" y="118" text-anchor="middle" font-size="7" fill="#ef4444">Mars</text>
  <!-- Asteroid belt -->
  <line x1="210" y1="70" x2="230" y2="70" stroke="#a16207" stroke-width="1" stroke-dasharray="2"/>
  <line x1="210" y1="78" x2="230" y2="78" stroke="#a16207" stroke-width="1" stroke-dasharray="2"/>
  <line x1="210" y1="86" x2="230" y2="86" stroke="#a16207" stroke-width="1" stroke-dasharray="2"/>
  <line x1="210" y1="114" x2="230" y2="114" stroke="#a16207" stroke-width="1" stroke-dasharray="2"/>
  <line x1="210" y1="122" x2="230" y2="122" stroke="#a16207" stroke-width="1" stroke-dasharray="2"/>
  <line x1="210" y1="130" x2="230" y2="130" stroke="#a16207" stroke-width="1" stroke-dasharray="2"/>
  <text x="220" y="145" text-anchor="middle" font-size="6" fill="#a16207">Asteroids</text>
  <!-- Jupiter -->
  <circle cx="270" cy="100" r="14" fill="#f97316"/>
  <text x="270" y="123" text-anchor="middle" font-size="7" fill="#f97316">Jup.</text>
  <!-- Saturn + rings -->
  <circle cx="330" cy="100" r="11" fill="#fbbf24"/>
  <ellipse cx="330" cy="100" rx="20" ry="5" fill="none" stroke="#d97706" stroke-width="2"/>
  <text x="330" y="120" text-anchor="middle" font-size="7" fill="#fbbf24">Sat.</text>
  <!-- Uranus -->
  <circle cx="390" cy="100" r="9" fill="#06b6d4"/>
  <text x="390" y="118" text-anchor="middle" font-size="7" fill="#06b6d4">Ura.</text>
  <!-- Neptune -->
  <circle cx="445" cy="100" r="9" fill="#1d4ed8"/>
  <text x="445" y="118" text-anchor="middle" font-size="7" fill="#1d4ed8">Nep.</text>
  <!-- Orbit path line -->
  <line x1="52" y1="100" x2="460" y2="100" stroke="#334155" stroke-width="1" stroke-dasharray="2"/>
</svg>`, caption: 'Solar system order (not to scale): Mercury, Venus, Earth, Mars [asteroid belt], Jupiter, Saturn, Uranus, Neptune.' } },
    { id: 'h-orbits', type: 'heading', data: { text: 'Orbital Motion and Gravity', level: 2 } },
    { id: 'para-orbits', type: 'paragraph', data: { text: 'Every planet travels in an approximately <strong>elliptical orbit</strong> around the Sun. The Sun\'s gravitational force provides the <strong>centripetal force</strong> that continuously changes the planet\'s direction, keeping it in orbit. Without gravity, each planet would travel in a straight line (Newton\'s first law) and fly off into space.' } },
    { id: 'para-speed', type: 'paragraph', data: { text: 'Planets closer to the Sun orbit faster than those further away. This is because the gravitational force is stronger at shorter distances, requiring a higher orbital speed to maintain a circular orbit. Mercury completes its orbit in 88 days; Neptune takes 165 years.' } },
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The Sun is a star, not a planet. Pluto is a dwarf planet, not counted among the eight. Remember: gravity provides centripetal force for orbital motion.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'The solar system: Sun + 8 planets (Mercury to Neptune) + moons, asteroids, comets. Asteroid belt lies between Mars and Jupiter. Gravity provides centripetal force for orbital motion. Closer planets orbit faster.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Solar system: Sun + 8 planets. Order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Gravity keeps orbits.',
    cues: [
      { id: 'cue-1', blockId: 'para-order', prompt: 'Name the eight planets in order from the Sun.', answer: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.' },
      { id: 'cue-2', blockId: 'list-other', prompt: 'Where is the asteroid belt and what does it contain?', answer: 'Between Mars and Jupiter; it contains millions of rocky objects (asteroids) of varying size.' },
      { id: 'cue-3', blockId: 'para-orbits', prompt: 'What force keeps planets in orbit around the Sun?', answer: "The Sun's gravitational force acts as the centripetal force, continuously changing the planet's direction." },
      { id: 'cue-4', blockId: 'para-speed', prompt: 'Why do inner planets orbit the Sun faster than outer planets?', answer: 'The gravitational force is stronger at smaller distances, requiring a higher orbital speed to maintain orbit.' },
      { id: 'cue-5', blockId: 'tbl-planets', prompt: 'Which planet has the most spectacular ring system?', answer: 'Saturn, known for its prominent and extensive ring system.' },
    ],
  },
  evidence: [], mentions: [],
};
