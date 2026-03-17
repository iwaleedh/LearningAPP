export const note_olevel_maths_core_5_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/problem-solving-with-volumes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Solve multi-step volume problems: find dimensions from given volume, calculate compound volumes, apply volume-capacity conversions, use the density formula, and solve real-world problems.',
      },
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Finding Dimensions from Volume', level: 2 },
    },
    {
      id: 'p-reverse',
      type: 'paragraph',
      data: {
        text: 'Rearrange the volume formula to find a missing dimension. For a cuboid: h = V ÷ (l × w). For a cylinder: h = V ÷ (πr²). For a cone: h = 3V ÷ (πr²).',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Find height of cylinder from volume',
        text: 'A cylinder has volume 500 cm³ and radius 5 cm. Find the height.<br><br>V = πr²h<br>500 = π × 25 × h<br>h = 500 ÷ (25π) = 20/π ≈ <b>6.37 cm</b>',
      },
    },
    {
      id: 'h-compound',
      type: 'heading',
      data: { text: 'Compound Volumes', level: 2 },
    },
    {
      id: 'p-compound',
      type: 'paragraph',
      data: {
        text: 'Compound 3D shapes can be formed by joining or removing standard shapes. Find each piece\'s volume separately, then add or subtract.',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Cylinder with hemispherical top',
        text: 'A shape consists of a cylinder (r = 4 cm, h = 10 cm) with a hemisphere (half-sphere) on top (r = 4 cm).<br><br>Cylinder volume = πr²h = π × 16 × 10 = 160π cm³<br>Hemisphere volume = (1/2) × (4/3)πr³ = (2/3)π × 64 = 128π/3 cm³<br>Total = 160π + 128π/3 = (480π + 128π)/3 = 608π/3 ≈ <b>636 cm³</b> (3 s.f.)',
      },
    },
    {
      id: 'h-convert',
      type: 'heading',
      data: { text: 'Volume and Capacity Conversions', level: 2 },
    },
    {
      id: 'tbl-convert',
      type: 'comparisonTable',
      data: {
        caption: 'Volume unit conversions',
        headers: ['Conversion', 'Relationship'],
        rows: [
          ['1 cm³ = 1 ml', '1 cm³ holds 1 millilitre of liquid'],
          ['1 litre = 1000 cm³', '1000 ml = 1 litre'],
          ['1 m³ = 1 000 000 cm³', '1 m³ = 10⁶ cm³'],
          ['1 m³ = 1000 litres', 'Large containers'],
        ],
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Volume to litres',
        text: 'A rectangular fish tank measures 60 cm × 30 cm × 40 cm. How many litres of water does it hold when full?<br><br>Volume = 60 × 30 × 40 = 72 000 cm³<br>Capacity = 72 000 ÷ 1000 = <b>72 litres</b>',
      },
    },
    {
      id: 'h-density',
      type: 'heading',
      data: { text: 'Density', level: 2 },
    },
    {
      id: 'p-density',
      type: 'paragraph',
      data: {
        text: '<b>Density</b> relates mass and volume. It measures how much mass is packed into a unit volume. Units are g/cm³ (grams per cubic centimetre) or kg/m³.',
      },
    },
    {
      id: 'eq-density',
      type: 'equation',
      data: {
        html: 'Density = <span class="nb-frac"><span class="nb-num">Mass</span><span class="nb-den">Volume</span></span>',
        caption: 'Density formula (D = M/V)',
      },
    },
    {
      id: 'callout-density-tri',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Density Triangle',
        text: 'Use the triangle to rearrange the formula:<br>• D = M ÷ V<br>• M = D × V<br>• V = M ÷ D',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Density',
        text: 'A metal cuboid has dimensions 5 cm × 4 cm × 3 cm and mass 480 g. Find its density.<br><br>Volume = 5 × 4 × 3 = 60 cm³<br>Density = Mass ÷ Volume = 480 ÷ 60 = <b>8 g/cm³</b>',
      },
    },
    {
      id: 'callout-we5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 5 — Find mass from density',
        text: 'A sphere has radius 3 cm. It is made of material with density 7 g/cm³. Find its mass.<br><br>Volume = (4/3)π × 3³ = (4/3)π × 27 = 36π ≈ 113.1 cm³<br>Mass = Density × Volume = 7 × 113.1 ≈ <b>792 g</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For swimming pool or tank problems: calculate volume in cm³ first, then convert to litres (÷1000). For compound volume problems: always draw a diagram labelling which parts are added and which are removed.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can rearrange volume formulas to find a missing dimension', checked: false },
          { text: 'I can find volumes of compound 3D shapes', checked: false },
          { text: 'I can convert between cm³ and litres', checked: false },
          { text: 'I can apply D = M ÷ V and rearrange for M or V', checked: false },
          { text: 'I can solve multi-step problems involving volume and density', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'To find a dimension from volume, rearrange the formula. Compound volumes: add or subtract parts. Conversions: 1 cm³ = 1 ml; 1000 cm³ = 1 litre. Density = Mass ÷ Volume; Mass = D × V; Volume = M ÷ D.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Volume problems: rearrange formula. Compound: add/subtract. 1000 cm³ = 1 litre. Density = M/V.',
    cues: [
      { id: 'cue-1', blockId: 'p-reverse', prompt: 'A cylinder has volume 400 cm³ and radius 4 cm. How do you find the height?' },
      { id: 'cue-2', blockId: 'tbl-convert', prompt: 'How many cm³ are in 1 litre?' },
      { id: 'cue-3', blockId: 'eq-density', prompt: 'Write the formula for density in terms of mass and volume.' },
      { id: 'cue-4', blockId: 'callout-density-tri', prompt: 'If density and volume are known, how do you find mass?' },
      { id: 'cue-5', blockId: 'callout-we4', prompt: 'A metal cuboid has volume 60 cm³ and mass 480 g. What is its density?' },
    ],
  },
  evidence: [],
  mentions: [],
};
