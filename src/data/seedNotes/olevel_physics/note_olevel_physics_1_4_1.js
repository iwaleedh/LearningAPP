export const note_olevel_physics_1_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-4-2-newtons-first-law.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State Newton\'s First Law of Motion; explain inertia and its dependence on mass; apply the law to objects at rest, moving at constant velocity, and changing velocity.' },
    },
    {
      id: 'h-statement',
      type: 'heading',
      data: { text: 'Newton\'s First Law of Motion', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Newton\'s First Law',
        text: 'An object will remain <strong>at rest</strong> or continue to move in a <strong>straight line at constant velocity</strong> unless acted upon by a <strong>resultant (net) force</strong>.',
      },
    },
    {
      id: 'para-inertia',
      type: 'paragraph',
      data: { text: '<strong>Inertia</strong> is the tendency of an object to resist any change in its state of motion. It is directly related to mass — a more massive object has greater inertia and is harder to start, stop, or change direction.' },
    },
    {
      id: 'svg-n1l',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="220" fill="#f0fdf4" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Newton\'s First Law: Three Cases</text>
  <!-- Case 1: At rest -->
  <rect x="20" y="35" width="120" height="80" fill="white" stroke="#16a34a" stroke-width="1.5" rx="6"/>
  <text x="80" y="53" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">At Rest</text>
  <rect x="55" y="60" width="50" height="30" fill="#6366f1" rx="4"/>
  <line x1="80" y1="60" x2="80" y2="40" stroke="#ef4444" stroke-width="2"/>
  <polygon points="80,40 77,47 83,47" fill="#ef4444"/>
  <text x="95" y="45" font-size="9" fill="#ef4444">N</text>
  <line x1="80" y1="90" x2="80" y2="108" stroke="#ef4444" stroke-width="2"/>
  <polygon points="80,108 77,100 83,100" fill="#ef4444"/>
  <text x="90" y="108" font-size="9" fill="#ef4444">W</text>
  <text x="80" y="122" text-anchor="middle" font-size="9" fill="#16a34a">Balanced → stays still</text>
  <!-- Case 2: Constant velocity -->
  <rect x="160" y="35" width="120" height="80" fill="white" stroke="#16a34a" stroke-width="1.5" rx="6"/>
  <text x="220" y="53" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Constant Velocity</text>
  <rect x="195" y="60" width="50" height="28" fill="#6366f1" rx="4"/>
  <line x1="245" y1="74" x2="260" y2="74" stroke="#2563eb" stroke-width="2"/>
  <polygon points="260,74 253,70 253,78" fill="#2563eb"/>
  <text x="268" y="78" font-size="9" fill="#2563eb">F</text>
  <line x1="195" y1="74" x2="175" y2="74" stroke="#ef4444" stroke-width="2"/>
  <polygon points="175,74 182,70 182,78" fill="#ef4444"/>
  <text x="160" y="69" font-size="9" fill="#ef4444">Fr</text>
  <text x="220" y="122" text-anchor="middle" font-size="9" fill="#16a34a">Balanced → v stays same</text>
  <!-- Case 3: Unbalanced (accelerates) -->
  <rect x="300" y="35" width="120" height="80" fill="white" stroke="#ef4444" stroke-width="1.5" rx="6"/>
  <text x="360" y="53" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Net Force</text>
  <rect x="330" y="60" width="50" height="28" fill="#6366f1" rx="4"/>
  <line x1="380" y1="74" x2="405" y2="74" stroke="#2563eb" stroke-width="3"/>
  <polygon points="405,74 396,69 396,79" fill="#2563eb"/>
  <text x="408" y="78" font-size="9" fill="#2563eb">F</text>
  <line x1="330" y1="74" x2="318" y2="74" stroke="#ef4444" stroke-width="2"/>
  <polygon points="318,74 325,70 325,78" fill="#ef4444"/>
  <text x="306" y="69" font-size="9" fill="#ef4444">Fr</text>
  <text x="360" y="122" text-anchor="middle" font-size="9" fill="#ef4444">Unbalanced → accelerates</text>
  <!-- Bottom summary -->
  <text x="220" y="165" text-anchor="middle" font-size="11" fill="#374151">If resultant = 0 N → no change in motion (N1L)</text>
  <text x="220" y="182" text-anchor="middle" font-size="11" fill="#374151">If resultant ≠ 0 N → motion changes (N2L → F = ma)</text>
</svg>`,
        caption: 'Newton\'s First Law: balanced forces keep the current state; any net force changes it.',
      },
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Real-World Examples', level: 2 },
    },
    {
      id: 'list-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Seatbelts:</strong> when a car brakes suddenly, inertia keeps passengers moving forward — seatbelts provide the backward force needed to decelerate them.' },
          { text: '<strong>Satellites:</strong> once in orbit with no air resistance, a satellite continues at constant velocity in a near-circle (the gravitational force changes direction only).' },
          { text: '<strong>Book on a table:</strong> weight downwards balanced by normal reaction upwards → stays at rest.' },
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Common Misconception',
        text: 'Many students think a moving object needs a force to KEEP it moving. This is wrong! Newton\'s 1st Law says a force is only needed to <em>change</em> motion. An object in space with no friction keeps moving forever without any force.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Newton\'s First Law: no resultant force → no change in motion (stays still or moves at constant velocity). Inertia = resistance to change; depends on mass. A resultant force is needed to start, stop, speed up, slow down, or change direction.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'N1L: resultant = 0 N → constant velocity or rest. Inertia resists changes in motion.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State Newton\'s First Law of Motion in full.', answer: 'An object remains at rest or moves in a straight line at constant velocity unless acted upon by a resultant (net) force.' },
      { id: 'cue-2', blockId: 'para-inertia', prompt: 'What is inertia and what physical quantity does it depend on?', answer: 'Inertia is the tendency of an object to resist changes in its state of motion. It depends on mass — greater mass means greater inertia.' },
      { id: 'cue-3', blockId: 'list-examples', prompt: 'Explain in terms of Newton\'s First Law why passengers lurch forward when a bus brakes.', answer: 'The passengers have inertia — they tend to keep moving forward at the original speed. The braking force acts on the bus, but not on the passengers unless a seatbelt or seat provides a force.' },
      { id: 'cue-4', blockId: 'svg-n1l', prompt: 'A car travels at 30 m/s on a motorway. The engine force is 800 N. What must the drag force be?', answer: '800 N backwards — the forces must be balanced (resultant = 0) since velocity is constant.' },
    ],
  },
  evidence: [],
  mentions: [],
};
