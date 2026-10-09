/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 4
 * "Shapes of molecules — VSEPR theory"
 * Source: Pearson Edexcel IAL Chemistry — Section 3C.2
 */
export const note_chemistry_1_3_4 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Apply VSEPR theory to predict the shapes and bond angles of molecules and ions. Explain how lone pairs of electrons cause deviations from ideal bond angles.' },
      terms: []
    },
    {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "A reliable method for predicting shape",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Electron pairs around a central atom repel and arrange themselves as far apart as possible. First count <strong>regions of electron density</strong>: a single, double or triple bond counts as one bonding region for shape. Then count lone pairs on the central atom. Lone-pair repulsion is stronger than bonding-pair repulsion, so lone pairs compress adjacent bond angles.<br/><br/>Separate the arrangement of all electron regions from the molecular shape, which describes the positions of atoms. Methane has four bonding regions and is tetrahedral. Ammonia has three bonds and one lone pair: four electron regions, but a trigonal pyramidal molecular shape. Water has two bonds and two lone pairs: its molecular shape is bent."
  }
},
{
  "id": "study-comparison",
  "type": "comparisonTable",
  "data": {
    "caption": "A reliable method for predicting shape",
    "headers": [
      "Example",
      "Electron regions",
      "Molecular shape",
      "Bond angles"
    ],
    "rows": [
      [
        "BeCl₂ (isolated molecule)",
        "2 bonds, 0 lone pairs",
        "Linear",
        "180°"
      ],
      [
        "BF₃",
        "3 bonds, 0 lone pairs",
        "Trigonal planar",
        "120°"
      ],
      [
        "CH₄",
        "4 bonds, 0 lone pairs",
        "Tetrahedral",
        "109.5°"
      ],
      [
        "NH₃",
        "3 bonds, 1 lone pair",
        "Trigonal pyramidal",
        "≈107°"
      ],
      [
        "H₂O",
        "2 bonds, 2 lone pairs",
        "Bent",
        "≈104.5°"
      ],
      [
        "SF₆",
        "6 bonds, 0 lone pairs",
        "Octahedral",
        "90° and 180°"
      ]
    ]
  }
},
{
      id: 'key-vsepr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'VSEPR Rules',
        text: '<strong>V</strong>alence <strong>S</strong>hell <strong>E</strong>lectron <strong>P</strong>air <strong>R</strong>epulsion theory:<br/>1. Electron pairs (bonding + lone) around a central atom <strong>repel</strong> each other and arrange as far apart as possible.<br/>2. Repulsion order: <strong>LP–LP &gt; LP–BP &gt; BP–BP</strong><br/>3. Each lone pair reduces the bond angle by ~2.5°.<br/>4. Double/triple bonds count as <em>one</em> electron domain (one region of high electron density).'
      },
      terms: ['VSEPR', 'Lone pair', 'Bonding pair', 'Electron domain']
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Molecular Shapes Reference', level: 2 },
      terms: []
    },
    {
      id: 'svg-shapes',
      type: 'svg',
      data: {
        caption: 'Six common molecular geometries. BP = bonding pairs, LP = lone pairs. Bond angle decreases as lone pairs replace bonding pairs.',
        svg: `<svg viewBox="0 0 700 374" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="10">
  <!-- Row 1: linear, trigonal planar, tetrahedral -->
  <!-- LINEAR BeCl2 / CO2 -->
  <rect x="5"  y="5" width="210" height="165" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="110" y="22" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="12">Linear</text>
  <text x="110" y="36" text-anchor="middle" fill="#64748b" font-size="9">e.g. BeCl₂, CO₂, HCN</text>
  <!-- diagram -->
  <circle cx="110" cy="90" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="110" y="94" text-anchor="middle" fill="white" font-size="9">Be</text>
  <line x1="44" y1="90" x2="96" y2="90" stroke="#475569" stroke-width="2.5"/>
  <circle cx="44" cy="90" r="12" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="44" y="94" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">Cl</text>
  <line x1="124" y1="90" x2="176" y2="90" stroke="#475569" stroke-width="2.5"/>
  <circle cx="176" cy="90" r="12" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="176" y="94" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">Cl</text>
  <text x="110" y="126" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">180°</tspan></text>
  <text x="110" y="142" text-anchor="middle" fill="#374151">BP: 2  |  LP: 0</text>
  <text x="110" y="158" text-anchor="middle" fill="#64748b" font-size="9">No lone pairs → no distortion</text>

  <!-- TRIG PLANAR BF3 -->
  <rect x="230" y="5" width="210" height="165" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="335" y="22" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="12">Trigonal Planar</text>
  <text x="335" y="36" text-anchor="middle" fill="#64748b" font-size="9">e.g. BF₃, BCl₃, AlCl₃</text>
  <circle cx="335" cy="90" r="14" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
  <text x="335" y="94" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">B</text>
  <line x1="335" y1="40" x2="335" y2="76" stroke="#475569" stroke-width="2.5"/>
  <circle cx="335" cy="40" r="11" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="335" y="44" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">F</text>
  <line x1="285" y1="110" x2="321" y2="100" stroke="#475569" stroke-width="2.5"/>
  <circle cx="275" cy="116" r="11" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="275" y="120" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">F</text>
  <line x1="385" y1="110" x2="349" y2="100" stroke="#475569" stroke-width="2.5"/>
  <circle cx="395" cy="116" r="11" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="395" y="120" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">F</text>
  <text x="335" y="142" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">120°</tspan></text>
  <text x="335" y="158" text-anchor="middle" fill="#374151">BP: 3  |  LP: 0</text>

  <!-- TETRAHEDRAL CH4 -->
  <rect x="460" y="5" width="235" height="165" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="578" y="22" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="12">Tetrahedral</text>
  <text x="578" y="36" text-anchor="middle" fill="#64748b" font-size="9">e.g. CH₄, CCl₄, NH₄⁺, SiCl₄</text>
  <circle cx="578" cy="90" r="14" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
  <text x="578" y="94" text-anchor="middle" fill="white" font-size="9">C</text>
  <line x1="535" y1="65" x2="564" y2="81" stroke="#475569" stroke-width="2.5"/>
  <circle cx="528" cy="62" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="528" y="66" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <line x1="621" y1="65" x2="592" y2="81" stroke="#475569" stroke-width="2.5"/>
  <circle cx="628" cy="62" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="628" y="66" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <line x1="560" y1="113" x2="523" y2="133" stroke="#475569" stroke-width="2.5" stroke-dasharray="5,3"/>
  <circle cx="515" cy="137" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="515" y="141" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <line x1="596" y1="113" x2="633" y2="133" stroke="#475569" stroke-width="2.5"/>
  <circle cx="641" cy="137" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="641" y="141" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <text x="578" y="160" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">109.5°</tspan>  BP: 4 LP: 0</text>

  <!-- Row 2: pyramidal, bent (2LP), linear with lone pairs -->
  <!-- PYRAMIDAL NH3 -->
  <rect x="5"  y="185" width="210" height="170" rx="8" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="110" y="202" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="12">Trigonal Pyramidal</text>
  <text x="110" y="216" text-anchor="middle" fill="#64748b" font-size="9">e.g. NH₃, PCl₃, NCl₃</text>
  <circle cx="110" cy="270" r="14" fill="#a855f7" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="110" y="274" text-anchor="middle" fill="white" font-size="9">N</text>
  <!-- LP above -->
  <ellipse cx="110" cy="248" rx="10" ry="6" fill="#fdf4ff" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="110" y="244" text-anchor="middle" fill="#1d4ed8" font-size="8">LP</text>
  <line x1="75"  y1="296" x2="100" y2="281" stroke="#475569" stroke-width="2.5"/>
  <circle cx="69" cy="304" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="69" y="308" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <line x1="110" y1="290" x2="110" y2="316" stroke="#475569" stroke-width="2.5"/>
  <circle cx="110" cy="323" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="110" y="327" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <line x1="145" y1="296" x2="124" y2="281" stroke="#475569" stroke-width="2.5"/>
  <circle cx="151" cy="304" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="151" y="308" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <text x="110" y="348" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">107°</tspan></text>
  <text x="110" y="363" text-anchor="middle" fill="#374151">BP: 3  |  LP: 1  (↓ from 109.5°)</text>

  <!-- BENT H2O -->
  <rect x="230" y="185" width="210" height="170" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="335" y="202" text-anchor="middle" fill="#b91c1c" font-weight="bold" font-size="12">Bent (Non-linear)</text>
  <text x="335" y="216" text-anchor="middle" fill="#64748b" font-size="9">e.g. H₂O, H₂S, SO₂</text>
  <circle cx="335" cy="270" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="335" y="274" text-anchor="middle" fill="white" font-size="9">O</text>
  <!-- 2 LPs -->
  <ellipse cx="320" cy="252" rx="9" ry="5" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4,2"/>
  <ellipse cx="350" cy="252" rx="9" ry="5" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="310" y="245" fill="#b91c1c" font-size="8">LP LP</text>
  <line x1="295" y1="296" x2="321" y2="280" stroke="#475569" stroke-width="2.5"/>
  <circle cx="286" cy="305" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="286" y="309" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <line x1="375" y1="296" x2="349" y2="280" stroke="#475569" stroke-width="2.5"/>
  <circle cx="384" cy="305" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="384" y="309" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">H</text>
  <text x="335" y="345" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">104.5°</tspan></text>
  <text x="335" y="360" text-anchor="middle" fill="#374151">BP: 2  |  LP: 2  (↓↓ from 109.5°)</text>

  <!-- Summary panel -->
  <rect x="460" y="185" width="235" height="170" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="578" y="203" text-anchor="middle" fill="#334155" font-weight="bold" font-size="12">Bond Angle Summary</text>
  <text x="470" y="223" fill="#374151" font-size="10">4 domains total:</text>
  <text x="470" y="240" fill="#374151" font-size="10">0 LP → Tetrahedral    <tspan font-weight="bold">109.5°</tspan></text>
  <text x="470" y="256" fill="#374151" font-size="10">1 LP → Pyramidal      <tspan font-weight="bold">107°</tspan></text>
  <text x="470" y="272" fill="#374151" font-size="10">2 LP → Bent           <tspan font-weight="bold">104.5°</tspan></text>
  <line x1="470" y1="282" x2="685" y2="282" stroke="#e2e8f0" stroke-width="1"/>
  <text x="470" y="298" fill="#374151" font-size="10">3 domains total:</text>
  <text x="470" y="314" fill="#374151" font-size="10">0 LP → Trigonal planar <tspan font-weight="bold">120°</tspan></text>
  <text x="470" y="330" fill="#374151" font-size="10">1 LP → Bent           <tspan font-weight="bold">~117°</tspan></text>
  <line x1="470" y1="340" x2="685" y2="340" stroke="#e2e8f0" stroke-width="1"/>
  <text x="470" y="352" fill="#374151" font-size="10">2 domains → Linear    <tspan font-weight="bold">180°</tspan></text>
</svg>`
      },
      terms: ['Bond angle', 'Linear', 'Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'Bent']
    },
    {
      id: 'tip-ions',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Polyatomic Ions: Apply VSEPR Too',
        text: 'Count the total electron pairs <em>including the charge</em>:<br/>• NH₄⁺: N has 4 BP, 0 LP → <strong>tetrahedral</strong>, 109.5°<br/>• SO₄²⁻: S has 4 BP (treat each S=O as 1 domain), 0 LP → <strong>tetrahedral</strong>, ~109.5°<br/>• NO₂⁻: N has 2 BP, 1 LP → <strong>bent</strong>, ~115°<br/><br/>Also: double bonds count as ONE electron domain in VSEPR (BF₃ with resonance is still trigonal planar, 120°).'
      },
      terms: ['Polyatomic ion']
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Predict CO₂ and NH₃. In CO₂, carbon has two bonding regions (two double bonds) and no lone pairs: linear, 180°. In NH₃, nitrogen has four electron regions: three bonds and one lone pair. The molecular shape is trigonal pyramidal and the H–N–H angle is about 107°, smaller than the ideal tetrahedral angle of 109.5°."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not count the two electron pairs in a double bond as two separate directions. Do not call NH₃ tetrahedral when asked for its molecular shape."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Why is CO₂ linear despite containing four bonding pairs?",
        "checked": false
      },
      {
        "text": "Give the shape and approximate bond angle of NH₃.",
        "checked": false
      },
      {
        "text": "Give the shape and approximate bond angle of H₂O.",
        "checked": false
      },
      {
        "text": "What is the distinction between electron-region geometry and molecular shape?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Electron pairs around a central atom repel and arrange themselves as far apart as possible. First count regions of electron density: a single, double or triple bond counts as one bonding region for shape. Then count lone pairs on the central atom. Lone-pair repulsion is stronger than bonding-pair repulsion, so lone pairs compress adjacent bond angles."
  }
}
  ],

  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Why is CO₂ linear despite containing four bonding pairs?",
      "answer": "Each double bond is one region of electron density, giving two regions around carbon and an angle of 180°."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Give the shape and approximate bond angle of NH₃.",
      "answer": "Trigonal pyramidal, about 107°; one lone pair compresses the angle relative to tetrahedral 109.5°."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Give the shape and approximate bond angle of H₂O.",
      "answer": "Bent, about 104.5°; two lone pairs repel more strongly than bonding pairs."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "What is the distinction between electron-region geometry and molecular shape?",
      "answer": "Electron-region geometry includes lone pairs. Molecular shape describes only the positions of the atoms."
    }
  ],
  "summaryText": "Electron pairs around a central atom repel and arrange themselves as far apart as possible. First count regions of electron density: a single, double or triple bond counts as one bonding region for shape. Then count lone pairs on the central atom. Lone-pair repulsion is stronger than bonding-pair repulsion, so lone pairs compress adjacent bond angles.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}],
  mentions: []
};
