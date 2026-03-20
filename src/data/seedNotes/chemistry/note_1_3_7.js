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
        svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
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
  <text x="508" y="24" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="13">Graphite</text>
  <text x="508" y="39" text-anchor="middle" fill="#64748b" font-size="10">Each C: 3 bonds, hexagonal layers (120°)</text>

  <!-- Hexagonal layer 1: 6-membered ring -->
  <!-- Centre ~(475,130), radius ~45 -->
  <!-- Vertices of hexagon: angle 0,60,120,180,240,300 -->
  <!-- Points: (520,130),(497.5,86.95),(452.5,86.95),(430,130),(452.5,173),(497.5,173) -->
  <polygon points="520,130 497,88 453,88 430,130 453,172 497,172" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <!-- C atoms at vertices -->
  <circle cx="520" cy="130" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="520" cy="134" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="497" cy="88" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="497" y="92" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="453" cy="88" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="453" y="92" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="430" cy="130" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="430" y="134" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="453" cy="172" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="453" y="176" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="497" cy="172" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="497" y="176" text-anchor="middle" fill="white" font-size="9">C</text>

  <!-- Delocalised e- shown as orange dots -->
  <circle cx="475" cy="118" r="4" fill="#f97316"/>
  <circle cx="470" cy="134" r="4" fill="#f97316"/>
  <circle cx="480" cy="148" r="4" fill="#f97316"/>
  <text x="540" y="130" fill="#f97316" font-size="9.5">π e⁻</text>
  <text x="540" y="143" fill="#f97316" font-size="9.5">(delocalised)</text>

  <!-- Layer spacing arrow -->
  <line x1="355" y1="130" x2="355" y2="195" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="358" y="165" fill="#64748b" font-size="9">335 pm</text>
  <text x="358" y="178" fill="#64748b" font-size="9">weak vdW</text>

  <!-- Graphite properties -->
  <rect x="352" y="204" width="313" height="64" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1"/>
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
  ],
  presentationSlides: [
    {
      layout: 'bento',
      title: 'Giant Covalent Structures',
      subtitle: 'WCH11 — Chemistry Topic 3.7',
      elements: [
        { delay: 0, colSpan: 1, icon: '💎', title: 'Diamond', html: 'Each C bonded to <strong>4 C atoms</strong> (tetrahedral, 109.5°).<br/>Giant 3D covalent lattice.<br/><strong>Hardest natural substance</strong> — mp ≈3550°C.<br/>Non-conductor (no free electrons).' },
        { delay: 1, colSpan: 1, icon: '✏️', title: 'Graphite', html: 'Each C bonded to <strong>3 C atoms</strong> (trigonal planar, 120°) in hexagonal layers.<br/>4th electron <strong>delocalised</strong> between layers → good electrical conductor.<br/>Layers held by weak van der Waals forces → slippery/lubricant.' },
        { delay: 2, colSpan: 1, icon: '🏖️', title: 'Silicon Dioxide (SiO₂)', html: 'Each Si bonded to <strong>4 O atoms</strong> in giant tetrahedral lattice.<br/>mp ≈1650°C — very high.<br/>Hard, brittle, non-conductor. Found in quartz/sand.' },
        { delay: 3, colSpan: 2, icon: '📊', title: 'vs Simple Molecules', html: '<strong>Giant covalent:</strong> very high mp/bp, hard, non-conductor (except graphite), insoluble.<br/><strong>Simple molecular:</strong> low mp/bp, soft, always non-conductor, solubility varies.<br/><em>Key:</em> giant structures require breaking many strong covalent bonds to melt.' },
      ]
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Diamond: each C with 4 cov. bonds, tetrahedral (109.5°), hardest substance, non-conductor, very high m.p. Graphite: each C with 3 cov. bonds (120°), layered hexagons, delocalised π e⁻ → conductor, layers slide → lubricant. SiO₂: 3D network Si–O bonds, empirical formula, high m.p. All giant covalent structures: high m.p., non-conductors (except graphite).',
    cues: [
      { id: 'c1', blockId: 'svg-diamond', prompt: 'Describe the bonding and structure of diamond. Why is it the hardest natural substance?' },
      { id: 'c2', blockId: 'svg-diamond', prompt: 'Why does graphite have a much lower density and can act as a lubricant, unlike diamond?' },
      { id: 'c3', blockId: 'tip-graphite', prompt: 'Explain precisely why graphite conducts electricity but diamond does not. Reference the number of bonds each carbon forms.' },
      { id: 'c4', blockId: 'key-sio2', prompt: 'Describe the structure of SiO₂. Why does it have a much higher melting point than CO₂, despite both containing only C or Si with oxygen?' },
      { id: 'c5', blockId: 'svg-diamond', prompt: 'State two physical properties shared by diamond, graphite and SiO₂, and one property where graphite is unique.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
