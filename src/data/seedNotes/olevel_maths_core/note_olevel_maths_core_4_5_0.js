export const note_olevel_maths_core_4_5_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Name and identify all parts of a circle; use the property that the perpendicular from the centre to a chord bisects the chord; understand the symmetry of a circle.' }
    },
    {
      id: 'h-parts',
      type: 'heading',
      data: { text: 'Parts of a Circle', level: 2 }
    },
    {
      id: 'list-parts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Centre (O):</strong> the fixed point equidistant from every point on the circle' },
          { text: '<strong>Radius (r):</strong> any straight line from the centre to the circumference' },
          { text: '<strong>Diameter (d):</strong> a chord that passes through the centre; d = 2r' },
          { text: '<strong>Circumference:</strong> the perimeter (boundary) of the circle' },
          { text: '<strong>Chord:</strong> a straight line joining any two points on the circumference (not necessarily through the centre)' },
          { text: '<strong>Arc:</strong> a part of the circumference. The <em>minor arc</em> is the shorter part; the <em>major arc</em> is the longer part' },
          { text: '<strong>Sector:</strong> the "pie-slice" region bounded by two radii and an arc' },
          { text: '<strong>Segment:</strong> the region bounded by a chord and an arc (minor or major)' },
          { text: '<strong>Tangent:</strong> a straight line that touches the circle at exactly one point (the point of tangency), and does not cross it' }
        ]
      }
    },
    {
      id: 'svg-circle',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 310" width="520" height="310">
  <style>
    text { font-family: sans-serif; font-size: 11px; fill: #374151; }
    .lbl { font-weight: 700; fill: #3b82f6; font-size: 11px; }
    .arr { fill: #3b82f6; }
  </style>
  <!-- Main circle -->
  <circle cx="230" cy="155" r="110" fill="#2d2f72" fill-opacity="0.4" stroke="#3b82f6" stroke-width="2"/>
  <!-- Centre dot -->
  <circle cx="230" cy="155" r="4" fill="#3b82f6"/>
  <text x="235" y="150" class="lbl">O (centre)</text>
  <!-- Radius -->
  <line x1="230" y1="155" x2="315" y2="85" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="290" y="105" class="lbl">radius r</text>
  <!-- Diameter -->
  <line x1="120" y1="155" x2="340" y2="155" stroke="#9333ea" stroke-width="2"/>
  <text x="120" y="145" fill="#9333ea" font-weight="700" font-size="11">diameter d = 2r</text>
  <!-- Chord (not through centre) -->
  <line x1="155" y1="78" x2="310" y2="220" stroke="#ef4444" stroke-width="2"/>
  <text x="90" y="75" fill="#ef4444" font-weight="700" font-size="11">chord</text>
  <line x1="148" y1="74" x2="158" y2="82" stroke="#ef4444" stroke-width="1"/>
  <!-- Tangent -->
  <line x1="340" y1="55" x2="340" y2="255" stroke="#10b981" stroke-width="2"/>
  <circle cx="340" cy="155" r="4" fill="#10b981"/>
  <text x="348" y="160" fill="#10b981" font-weight="700" font-size="11">tangent</text>
  <!-- Minor arc indicator -->
  <path d="M230,45 A110,110 0 0,1 340,155" fill="none" stroke="#f59e0b" stroke-width="3"/>
  <text x="300" y="60" fill="#f59e0b" font-weight="700" font-size="11">minor arc</text>
  <!-- Sector shading -->
  <path d="M230,155 L230,45 A110,110 0 0,1 310,88 Z" fill="#44370a" fill-opacity="0.6" stroke="none"/>
  <text x="240" y="100" fill="#ca8a04" font-weight="700" font-size="10">sector</text>
  <!-- Segment -->
  <path d="M155,78 A110,110 0 0,1 310,220" fill="#4a1040" fill-opacity="0.6" stroke="none"/>
  <text x="200" y="220" fill="#9333ea" font-size="10" font-weight="700">segment</text>
</svg>`,
        caption: 'Labelled circle showing centre, radius, diameter, chord, arc, sector, segment, and tangent'
      }
    },
    {
      id: 'h-diameter',
      type: 'heading',
      data: { text: 'Diameter and Radius Relationship', level: 2 }
    },
    {
      id: 'eq-diameter',
      type: 'equation',
      data: { html: 'd = 2r &nbsp; ⟺ &nbsp; r = d ÷ 2', caption: 'Diameter is twice the radius' }
    },
    {
      id: 'h-perp',
      type: 'heading',
      data: { text: 'Perpendicular from Centre to a Chord', level: 2 }
    },
    {
      id: 'p-perp',
      type: 'paragraph',
      data: { text: 'A key property: if a line is drawn from the <strong>centre O</strong> to a <strong>chord</strong>, and that line is <strong>perpendicular</strong> to the chord, then it <strong>bisects the chord</strong> — it cuts the chord exactly in half. This works in reverse too: the perpendicular bisector of any chord passes through the centre of the circle.' }
    },
    {
      id: 'h-symmetry',
      type: 'heading',
      data: { text: 'Symmetry of a Circle', level: 2 }
    },
    {
      id: 'p-symmetry',
      type: 'paragraph',
      data: { text: 'A circle has <strong>infinite lines of symmetry</strong> — every diameter is a line of symmetry. It also has <strong>infinite rotational symmetry</strong> — it maps onto itself after any rotation about its centre.' }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Perpendicular Bisector',
        text: '<strong>Q:</strong> A chord AB has length 16 cm. The perpendicular from centre O meets AB at M. Find OM if the radius is 10 cm.<br><br>O⊥AB means OM ⊥ AB, so M is the midpoint of AB.<br>AM = 16 ÷ 2 = 8 cm<br>Using Pythagoras in triangle OMA:<br>OA² = OM² + AM²<br>10² = OM² + 8²<br>100 = OM² + 64<br>OM² = 36 → OM = <strong>6 cm</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Circle Facts',
        text: '• Diameter = 2 × radius<br>• Chord: any line across the circle (diameter is the longest chord)<br>• <strong>Perpendicular from centre to chord bisects the chord</strong><br>• Tangent touches the circle at exactly one point<br>• Circle has infinite lines of symmetry (every diameter)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Sector vs Segment',
        text: 'Students often confuse sector and segment. Remember: a <strong>sector</strong> is bounded by <em>two radii</em> and an arc (like a pizza slice). A <strong>segment</strong> is bounded by a <em>chord</em> and an arc (cut off by a straight line). If you see radii, it\'s a sector; if you see a chord, it\'s a segment.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Circle parts: centre, radius (r), diameter (d = 2r), chord, arc (minor/major), sector (2 radii + arc), segment (chord + arc), tangent. The perpendicular from centre to a chord bisects it. Use Pythagoras to find distances with radius, chord half-length, and perpendicular distance.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Circle parts: radius, diameter (d=2r), chord, arc, sector, segment, tangent. Perpendicular from O to chord bisects it.',
    cues: [
      { id: 'cue-1', blockId: 'list-parts', prompt: 'What is the difference between a chord and a diameter? What is the difference between a sector and a segment?' },
      { id: 'cue-2', blockId: 'p-perp', prompt: 'State the property of the perpendicular from the centre to a chord. How can you use it with Pythagoras?' },
      { id: 'cue-3', blockId: 'p-symmetry', prompt: 'How many lines of symmetry does a circle have? Why?' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'A chord is 24 cm long. The radius is 13 cm. Find the perpendicular distance from the centre to the chord.' }
    ]
  },
  evidence: []
};
