export const note_olevel_physics_3_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-4-1-seismic-waves.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe P-waves and S-waves in terms of wave type, speed, and which media they can travel through. Explain the role of seismographs in detecting seismic waves.' },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What are Seismic Waves?', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: { text: 'An <strong>earthquake</strong> releases energy at a point called the <strong>focus</strong> (or hypocenter), typically below the Earth\'s surface. This energy travels outward as <strong>seismic waves</strong> — mechanical waves that travel through the Earth. The point on the surface directly above the focus is the <strong>epicentre</strong>.' },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Seismic Waves', level: 2 },
    },
    {
      id: 'h-p-waves',
      type: 'heading',
      data: { text: 'P-waves (Primary Waves)', level: 3 },
    },
    {
      id: 'para-p',
      type: 'paragraph',
      data: { text: '<strong>P-waves</strong> are <em>longitudinal</em> waves — particles vibrate parallel to the direction of wave travel (compressions and rarefactions). They travel through <strong>solids, liquids and gases</strong>. P-waves are faster than S-waves and are the first to arrive at seismometers after an earthquake.' },
    },
    {
      id: 'callout-p',
      type: 'callout',
      data: {
        style: 'key',
        title: 'P-waves Summary',
        text: '• Type: longitudinal (compression wave)\n• Speed: 5–8 km/s in crust; ~14 km/s near core\n• Travel through: solids AND liquids AND gases\n• Arrive: FIRST at seismometers (P = Primary)',
      },
    },
    {
      id: 'h-s-waves',
      type: 'heading',
      data: { text: 'S-waves (Secondary Waves)', level: 3 },
    },
    {
      id: 'para-s',
      type: 'paragraph',
      data: { text: '<strong>S-waves</strong> are <em>transverse</em> waves — particles vibrate perpendicular to the direction of wave travel (like waves on a rope). They can only travel through <strong>solids</strong>. S-waves are slower than P-waves and arrive second.' },
    },
    {
      id: 'callout-s',
      type: 'callout',
      data: {
        style: 'key',
        title: 'S-waves Summary',
        text: '• Type: transverse (shear wave)\n• Speed: 3–5 km/s in crust\n• Travel through: ONLY solids (NOT liquids or gases)\n• Arrive: SECOND at seismometers (S = Secondary)\n• Key evidence: S-waves do NOT pass through Earth\'s outer core → outer core is liquid',
      },
    },
    {
      id: 'h-surface',
      type: 'heading',
      data: { text: 'Surface Waves', level: 3 },
    },
    {
      id: 'para-surface',
      type: 'paragraph',
      data: { text: '<strong>Surface waves</strong> travel along the Earth\'s crust (not through the interior). They have a complex motion combining horizontal and vertical displacement. Although slower than P and S waves, surface waves carry the most energy to the surface and cause most of the <strong>damage</strong> in an earthquake.' },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of P-waves, S-waves and surface waves',
        headers: ['Property', 'P-waves', 'S-waves', 'Surface Waves'],
        rows: [
          ['Wave type', 'Longitudinal', 'Transverse', 'Complex (mixed)'],
          ['Speed', 'Fastest (5–14 km/s)', 'Medium (3–7 km/s)', 'Slowest (~2–5 km/s)'],
          ['Travel through', 'Solid, liquid, gas', 'Solid only', 'Earth\'s crust only'],
          ['Arrival order', '1st', '2nd', '3rd (last)'],
          ['Damage', 'Moderate', 'Moderate', 'Most destructive'],
        ],
      },
    },
    {
      id: 'h-seismograph',
      type: 'heading',
      data: { text: 'Seismographs', level: 2 },
    },
    {
      id: 'para-seismo',
      type: 'paragraph',
      data: { text: 'A <strong>seismograph</strong> (seismometer) is an instrument that detects and records ground motion caused by seismic waves. Modern seismographs are electronic, measuring ground displacement, velocity, or acceleration. The output is a <strong>seismogram</strong> — a graphical record showing wave amplitude against time.' },
    },
    {
      id: 'para-time-diff',
      type: 'paragraph',
      data: { text: 'Because P-waves travel faster than S-waves, there is a time difference between the P and S wave arrivals at a seismograph station. This <strong>P–S time difference</strong> is proportional to the distance from the epicentre — larger gap means the earthquake was further away.' },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'S-waves Cannot Travel Through Liquids — Key Evidence',
        text: 'Because S-waves are transverse (shear waves), liquids cannot support the sideways shear they require. The fact that S-waves do not reach the other side of Earth (S-wave shadow zone exists) is direct evidence that Earth\'s outer core is liquid.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Earthquakes generate P-waves (longitudinal — travel through solids & liquids, arrive first) and S-waves (transverse — travel through solids only, arrive second). Surface waves travel along the crust and cause most earthquake damage. Seismographs record arrivals; the P–S time difference indicates distance to epicentre. S-waves\' inability to pass through Earth\'s outer core proves the outer core is liquid.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P-waves = longitudinal, travels through solids+liquids, arrives 1st. S-waves = transverse, solids only, arrives 2nd. S-wave shadow → outer core is liquid.',
    cues: [
      { id: 'cue-1', blockId: 'callout-p', prompt: 'What type of wave are P-waves and what media can they travel through?', answer: 'P-waves are longitudinal waves. They can travel through solids, liquids, and gases. They are the fastest seismic waves and arrive at seismometers first.' },
      { id: 'cue-2', blockId: 'callout-s', prompt: 'Why can S-waves only travel through solids?', answer: 'S-waves are transverse (shear) waves — the medium must resist side-to-side (shear) deformation. Liquids and gases cannot support shear stress, so S-waves cannot pass through them.' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'Which seismic waves cause the most damage in an earthquake? Why?', answer: 'Surface waves cause the most damage because they travel along the Earth\'s crust (where structures are), have the largest amplitude, and their complex motion (vertical and horizontal) puts maximum stress on buildings.' },
      { id: 'cue-4', blockId: 'callout-tip1', prompt: 'What does the existence of the S-wave shadow zone tell us about Earth\'s interior?', answer: 'Because S-waves cannot travel through liquids, the S-wave shadow zone (where S-waves don\'t arrive) proves that the outer core of the Earth is liquid.' },
    ],
  },
  evidence: [],
  mentions: [],
};
