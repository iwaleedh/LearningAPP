export const note_olevel_physics_1_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-3-3-measuring-density.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe methods to measure the density of regular solids, irregular solids, and liquids; use ρ = m/V with appropriate measurements of mass and volume.' },
    },
    {
      id: 'h-regular',
      type: 'heading',
      data: { text: 'Regular Solids', level: 2 },
    },
    {
      id: 'para-regular',
      type: 'paragraph',
      data: { text: 'For regular solids (cuboid, sphere, cylinder), measure the <strong>dimensions</strong> with a ruler or vernier calliper, then calculate the volume using the appropriate geometric formula. Measure <strong>mass</strong> using an electronic balance. Then calculate ρ = m/V.' },
    },
    {
      id: 'tbl-shapes',
      type: 'comparisonTable',
      data: {
        caption: 'Volume formulae for common shapes',
        headers: ['Shape', 'Formula', 'Measurements needed'],
        rows: [
          ['Cuboid (rectangular block)', 'V = l × w × h', 'length, width, height'],
          ['Cylinder', 'V = π r² × h', 'radius, height'],
          ['Sphere', 'V = 4/3 π r³', 'radius'],
        ],
      },
    },
    {
      id: 'h-irregular',
      type: 'heading',
      data: { text: 'Irregular Solids: Displacement Method', level: 2 },
    },
    {
      id: 'para-irreg',
      type: 'paragraph',
      data: { text: 'Irregular solids cannot have their volume calculated from dimensions, so the <strong>water displacement method</strong> (Archimedes\' principle) is used. The increase in water level when the object is submerged equals its volume.' },
    },
    {
      id: 'svg-disp',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="420" height="260" fill="#1c3a64" rx="10"/>
  <text x="210" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#0c4a6e">Water Displacement Method for Irregular Solids</text>
  <!-- Measuring cylinder 1 (before) -->
  <rect x="50" y="50" width="60" height="160" fill="none" stroke="#374151" stroke-width="2" rx="3"/>
  <rect x="50" y="130" width="60" height="80" fill="#1e3a8a" opacity="0.8"/>
  <line x1="40" y1="130" x2="120" y2="130" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="80" y="123" text-anchor="middle" font-size="10" fill="#1d4ed8">50 cm³</text>
  <text x="80" y="226" text-anchor="middle" font-size="11" fill="#374151">Before</text>
  <!-- Arrow -->
  <text x="175" y="135" text-anchor="middle" font-size="24" fill="#374151">→</text>
  <!-- Object being lowered -->
  <ellipse cx="175" cy="100" rx="18" ry="14" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
  <text x="175" y="104" text-anchor="middle" font-size="10" fill="#1e293b">rock</text>
  <!-- Measuring cylinder 2 (after) -->
  <rect x="240" y="50" width="60" height="160" fill="none" stroke="#374151" stroke-width="2" rx="3"/>
  <rect x="240" y="110" width="60" height="100" fill="#1e3a8a" opacity="0.8"/>
  <!-- Submerged rock -->
  <ellipse cx="270" cy="156" rx="16" ry="12" fill="#94a3b8" opacity="0.7"/>
  <line x1="230" y1="110" x2="310" y2="110" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="270" y="103" text-anchor="middle" font-size="10" fill="#1d4ed8">72 cm³</text>
  <text x="270" y="226" text-anchor="middle" font-size="11" fill="#374151">After</text>
  <!-- Calculation box -->
  <rect x="330" y="80" width="80" height="80" fill="#1e293b" rx="6" stroke="#d1d5db" stroke-width="1"/>
  <text x="370" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Volume</text>
  <text x="370" y="116" text-anchor="middle" font-size="11" fill="#374151">= 72 − 50</text>
  <text x="370" y="132" text-anchor="middle" font-size="11" fill="#1d4ed8" font-weight="bold">= 22 cm³</text>
  <!-- Thread -->
  <line x1="270" y1="50" x2="270" y2="64" stroke="#374151" stroke-width="1.5" stroke-dasharray="2,2"/>
  <line x1="240" y1="226" x2="300" y2="226" stroke="#374151" stroke-width="0.5"/>
</svg>`,
        caption: 'Displacement method: volume of object = rise in water level (72 − 50 = 22 cm³)',
      },
    },
    {
      id: 'list-irreg-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Measure the mass of the irregular object using a balance.' },
          { text: 'Partially fill a measuring cylinder with water. Record the initial volume (V₁).' },
          { text: 'Carefully lower the object into the water using a thread. Record the new volume (V₂).' },
          { text: 'Volume of object = V₂ − V₁.' },
          { text: 'Calculate density: ρ = m / (V₂ − V₁).' },
        ],
      },
    },
    {
      id: 'h-liquid',
      type: 'heading',
      data: { text: 'Density of a Liquid', level: 2 },
    },
    {
      id: 'para-liquid',
      type: 'paragraph',
      data: { text: 'To find the density of a liquid: measure a known volume using a <strong>measuring cylinder</strong>, then measure the mass of the liquid using a balance (subtracting the mass of the empty container). Calculate ρ = m/V.' },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> An irregular stone has mass 88 g. When placed in a measuring cylinder, the water level rises from 40 cm³ to 73 cm³. Find the density.<br><br><strong>V = 73 − 40 = 33 cm³</strong><br><strong>ρ = m/V = 88/33 = 2.67 g/cm³ ≈ 2.7 g/cm³</strong>',
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Overflow Can',
        text: 'For very large irregular objects, use an <strong>overflow (Eureka) can</strong>: fill it to the brim, submerge the object, and collect the overflow water in a beaker. The volume of overflow = volume of the object. Weigh the overflow water to find its volume (using density of water = 1 g/cm³).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Regular solid: measure dimensions → calculate V → ρ = m/V. Irregular solid: displacement method — volume = rise in water level when submerged. Liquid: use measuring cylinder for V and balance for m. All use ρ = m/V.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Regular solid: geometry; irregular solid: water displacement; liquid: measuring cylinder + balance.',
    cues: [
      { id: 'cue-1', blockId: 'para-regular', prompt: 'How do you find the volume of a regular solid to calculate its density?', answer: 'Measure dimensions with a ruler and use the geometric formula (e.g. V = l × w × h for a cuboid).' },
      { id: 'cue-2', blockId: 'svg-disp', prompt: 'Describe how to find the volume of an irregular solid.', answer: 'Partially fill a measuring cylinder, record level V₁. Submerge the object, record V₂. Volume = V₂ − V₁.' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'A rock has mass 88 g. Water level rises from 40 cm³ to 73 cm³. Find the density.', answer: 'V = 73 − 40 = 33 cm³; ρ = 88/33 ≈ 2.7 g/cm³.' },
      { id: 'cue-4', blockId: 'call-tip-1', prompt: 'When is an overflow can used instead of a measuring cylinder?', answer: 'When the object is too large to fit in a measuring cylinder. The overflow water collected equals the object\'s volume.' },
    ],
  },
  evidence: [],
  mentions: [],
};
