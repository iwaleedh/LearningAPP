/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 7
 * "Giant covalent substances (macromolecular structures)"
 * Source: Pearson Edexcel IAL Chemistry — Section 3D.2
 */
export const note_chemistry_1_3_7 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe the giant covalent (macromolecular) structures of diamond, graphite and silicon dioxide. Explain their physical properties in terms of strong covalent bonds throughout the lattice. Identify graphite as a conductor.' },
      terms: []
    },
    {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Link the atomic network to each property",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Giant covalent substances contain an extended network of atoms joined by strong covalent bonds. Many bonds must be overcome to melt the structure, explaining high melting temperatures. They are generally insoluble because a solvent cannot easily separate the network into individual particles.<br/><br/>In diamond, each carbon forms four covalent bonds in a tetrahedral network. All four outer electrons are involved in bonding: diamond is hard and does not conduct electricity. In graphite, each carbon bonds to three others in hexagonal layers. One electron per carbon is delocalised; graphite conducts along the layers. Weak attractions between layers allow them to slide, so graphite is soft despite its strong bonds within each layer. In SiO₂, each silicon bonds to four oxygens and each oxygen bridges two silicons; the formula gives a 1:2 atom ratio, not a molecule."
  }
},
{
      id: 'h1',
      type: 'heading',
      data: { text: 'Diamond — Giant Covalent Network', level: 2 },
      terms: []
    },
    {
      id: 'svg-diamond',
      type: 'svg',
      data: {
        caption: 'Diamond structure: each carbon forms 4 covalent bonds to neighbouring C atoms in a tetrahedral arrangement (bond angle 109.5°). Forms a 3D lattice — not a repeating molecular unit. Compare: graphite (right) with hexagonal layers held by van der Waals forces.',
        svg: `<svg viewBox="0 -17 680 297" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Diamond panel -->
  <rect x="5" y="5" width="320" height="270" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="165" y="24" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="13">Diamond</text>
  <text x="165" y="39" text-anchor="middle" fill="#64748b" font-size="10">Each C: 4 bonds, tetrahedral (109.5°)</text>

  <!-- Diamond tetrahedral unit: central C + 4 neighbours -->
  <circle cx="165" cy="135" r="16" fill="#1e40af" stroke="#1e3a8a" stroke-width="2"/>
  <text x="165" y="139" text-anchor="middle" fill="white" font-size="10" font-weight="bold">C</text>
  <!-- 4 bond lines to corner C atoms -->
  <line x1="105" y1="90" x2="150" y2="122" stroke="#374151" stroke-width="2.5"/>
  <line x1="105" y1="90" x2="150" y2="122" stroke="#374151" stroke-width="2.5"/>
  <line x1="225" y1="90" x2="180" y2="122" stroke="#374151" stroke-width="2.5"/>
  <line x1="115" y1="190" x2="150" y2="148" stroke="#374151" stroke-width="2.5"/>
  <line x1="215" y1="190" x2="180" y2="148" stroke="#374151" stroke-width="2.5"/>
  <!-- A 5th C above (3D illusion) -->
  <line x1="165" y1="118" x2="165" y2="68" stroke="#374151" stroke-width="2.5" stroke-dasharray="5,3"/>
  <!-- 4 corner C atoms -->
  <circle cx="105" cy="82" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="105" y="86" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="225" cy="82" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="225" y="86" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="105" cy="196" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="105" y="200" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="225" cy="196" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="225" y="200" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="165" cy="58" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="165" y="62" text-anchor="middle" fill="white" font-size="10">C</text>
  <!-- Bond angle label -->
  <path d="M 155 120 A 20 20 0 0 1 152 107" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="128" y="112" fill="#dc2626" font-size="9">109.5°</text>

  <!-- Diamond properties -->
  <rect x="15" y="218" width="300" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
  <text x="165" y="237" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Properties</text>
  <text x="25" y="253" fill="#374151" font-size="10">• Hardest natural substance (all 4 bonds must break to deform)</text>
  <text x="25" y="266" fill="#374151" font-size="10">• Very high m.p. ~3550°C  •  Non-conductor (no free e⁻ or ions)</text>

  <!-- Graphite panel -->
  <rect x="342" y="5" width="333" height="270" rx="10" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="508" y="24" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="13">Graphite</text>
  <text x="508" y="39" text-anchor="middle" fill="#64748b" font-size="10">Each C: 3 bonds, hexagonal layers (120°)</text>

  <!-- Hexagonal layer 1: 6-membered ring -->
  <!-- Centre ~(475,130), radius ~45 -->
  <!-- Vertices of hexagon: angle 0,60,120,180,240,300 -->
  <!-- Points: (520,130),(497.5,86.95),(452.5,86.95),(430,130),(452.5,173),(497.5,173) -->
  <polygon points="520,130 497,88 453,88 430,130 453,172 497,172" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <!-- C atoms at vertices -->
  <circle cx="520" cy="130" r="12" fill="#a855f7" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="520" cy="134" text-anchor="middle" fill="#0f172a" font-size="9" style="fill:#0f172a">C</text>
  <circle cx="497" cy="88" r="12" fill="#a855f7" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="497" y="92" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="453" cy="88" r="12" fill="#a855f7" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="453" y="92" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="430" cy="130" r="12" fill="#a855f7" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="430" y="134" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="453" cy="172" r="12" fill="#a855f7" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="453" y="176" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="497" cy="172" r="12" fill="#a855f7" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="497" y="176" text-anchor="middle" fill="white" font-size="9">C</text>

  <!-- Delocalised e- shown as orange dots -->
  <circle cx="475" cy="118" r="4" fill="#f97316"/>
  <circle cx="470" cy="134" r="4" fill="#f97316"/>
  <circle cx="480" cy="148" r="4" fill="#f97316"/>
  <text x="540" y="130" fill="#0f172a" font-size="9.5" style="fill:#0f172a">π e⁻</text>
  <text x="540" y="143" fill="#0f172a" font-size="9.5" style="fill:#0f172a">(delocalised)</text>

  <!-- Layer spacing arrow -->
  <line x1="355" y1="130" x2="355" y2="195" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="358" y="165" fill="#64748b" font-size="9">335 pm</text>
  <text x="358" y="178" fill="#64748b" font-size="9">weak vdW</text>

  <!-- Graphite properties -->
  <rect x="352" y="204" width="313" height="64" rx="6" fill="#ede9fe" stroke="#1d4ed8" stroke-width="1"/>
  <text x="508" y="221" text-anchor="middle" fill="#4c1d95" font-weight="bold" font-size="11">Properties</text>
  <text x="360" y="237" fill="#374151" font-size="10">• High m.p. ~3600°C (strong cov. bonds in layers)</text>
  <text x="360" y="252" fill="#374151" font-size="10">• Electrical conductor (delocalised π e⁻ move between layers)</text>
  <text x="360" y="265" fill="#374151" font-size="10">• Slippery/lubricant (layers slide over weak vdW forces)</text>
</svg>`
      },
      terms: ['Giant covalent structure', 'Diamond', 'Graphite', 'Delocalised electrons']
    },
    {
      id: 'key-sio2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Silicon Dioxide (SiO₂) — Third Giant Covalent',
        text: 'Structure: each Si forms <strong>4 covalent bonds</strong> to O, and each O bridges between 2 Si atoms. Forms a 3D tetrahedral network like diamond but with Si–O bonds.<br/><br/>• Formula SiO₂: empirical formula (not discrete molecules)<br/>• Very high m.p. ~1700°C (many strong Si–O bonds, ~466 kJ mol⁻¹)<br/>• Hard but brittle<br/>• Non-conductor (no free electrons or ions)'
      },
      terms: ['Silicon dioxide', 'Empirical formula']
    },
    {
      id: 'tip-graphite',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Graphite Conducts — and Diamond Does Not',
        text: 'In graphite, each C forms only <strong>3 σ bonds</strong> within the layer. The 4th valence electron enters a delocalised π system above and below each hexagonal layer → free to move → electrical conductor.<br/><br/>In diamond, each C forms <strong>4 σ bonds</strong> → all valence electrons are localised in bonds → no free electrons → non-conductor.<br/><br/>Graphite is also a lubricant because the weak van der Waals forces between layers allow them to <em>slide</em> easily.'
      },
      terms: ['Delocalised electrons', 'Sigma bond', 'Pi bond']
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "A substance has a very high melting point, is hard, is insoluble and does not conduct. A giant covalent network such as diamond or silica is consistent with these observations. If it is soft and conducts, graphite is a better candidate. Use the complete pattern of properties: a high melting point alone cannot distinguish ionic and giant covalent structures."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not explain graphite’s softness by calling its C–C covalent bonds weak. The weak attractions are between layers. Silicon dioxide is not made of separate SiO₂ molecules."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Why is diamond hard?",
        "checked": false
      },
      {
        "text": "Why does graphite conduct?",
        "checked": false
      },
      {
        "text": "Why can graphite act as a lubricant?",
        "checked": false
      },
      {
        "text": "What does the formula SiO₂ describe?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Giant covalent substances contain an extended network of atoms joined by strong covalent bonds. Many bonds must be overcome to melt the structure, explaining high melting temperatures. They are generally insoluble because a solvent cannot easily separate the network into individual particles."
  }
}
  ],

  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Why is diamond hard?",
      "answer": "Each carbon is covalently bonded to four others in a rigid three-dimensional network."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Why does graphite conduct?",
      "answer": "Each carbon supplies an electron to a delocalised system within the layers; these electrons can carry charge."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Why can graphite act as a lubricant?",
      "answer": "Layers slide because the attractions between them are weak relative to the covalent bonds within a layer."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "What does the formula SiO₂ describe?",
      "answer": "The atom ratio in a giant covalent network: one silicon for every two oxygens, not a discrete molecule."
    }
  ],
  "summaryText": "Giant covalent substances contain an extended network of atoms joined by strong covalent bonds. Many bonds must be overcome to melt the structure, explaining high melting temperatures. They are generally insoluble because a solvent cannot easily separate the network into individual particles.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}],
  mentions: []
};
