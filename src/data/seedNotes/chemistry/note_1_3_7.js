/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 7
 * "Giant covalent substances (macromolecular structures)"
 * Source: Pearson Edexcel IAL Chemistry — Section 3C.1
 */
export const note_chemistry_1_3_7 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe the bonding and structure of giant covalent substances (diamond, graphite, silicon dioxide). Explain their properties in terms of their structure.' },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Giant Covalent Structures', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Some covalent substances do not form discrete molecules. Instead, all the atoms are joined by covalent bonds in a continuous three-dimensional network, called a <strong>giant covalent structure</strong> (or macromolecular structure). Because there are millions of strong covalent bonds throughout the structure, these materials are very hard and have extremely high melting points.' },
      terms: ['Giant covalent structure', 'Macromolecular']
    },
    {
      id: 'table-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Key giant covalent structures — comparison',
        headers: ['Substance', 'Formula', 'Structure', 'Bonding at each atom', 'Conducts electricity?', 'Key properties'],
        rows: [
          ['<strong>Diamond</strong>', 'C', '3D network of C atoms each bonded to 4 others in tetrahedral arrangement.', '4 sp³ covalent bonds to C', 'No (no free electrons)', 'Extremely hard; very high mp (3500°C); does not conduct.'],
          ['<strong>Graphite</strong>', 'C', 'Layers of hexagonal rings. Each C bonded to 3 others in the same layer. Layers are held by weak London forces.', '3 sp² bonds in layer + 1 delocalised π e⁻ above/below layer', 'Yes (delocalised electrons between layers)', 'Soft and slippery (layers slide); conducts electricity; used as lubricant and electrode.'],
          ['<strong>Silicon dioxide (SiO₂)</strong>', 'SiO₂', '3D network. Each Si bonded to 4 O atoms; each O bonded to 2 Si atoms.', '4 covalent bonds to O', 'No', 'Very hard; very high mp (1700°C); does not conduct.']
        ]
      },
      terms: ['Diamond', 'Graphite', 'Silicon dioxide']
    },
    {
      id: 'svg-diamond-graphite',
      type: 'svg',
      data: {
        caption: 'Figure: Diamond (left) — tetrahedral 3D network; Graphite (right) — hexagonal layers with delocalised electrons',
        svg: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

  <!-- DIAMOND SECTION -->
  <text x="170" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Diamond</text>
  <text x="170" y="32" text-anchor="middle" fill="#64748b" font-size="10">Each C bonded to 4 others — tetrahedral, 3D</text>

  <!-- Central C atom -->
  <circle cx="170" cy="130" r="16" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="170" y="135" text-anchor="middle" fill="white" font-size="11" font-weight="bold">C</text>

  <!-- 4 bonded C atoms (tetrahedral projection) -->
  <!-- top -->
  <line x1="170" y1="114" x2="170" y2="74" stroke="#475569" stroke-width="2.5"/>
  <circle cx="170" cy="62" r="14" fill="#334155" stroke="#475569" stroke-width="1.5"/>
  <text x="170" y="67" text-anchor="middle" fill="white" font-size="10">C</text>

  <!-- bottom-left -->
  <line x1="157" y1="139" x2="100" y2="180" stroke="#475569" stroke-width="2.5"/>
  <circle cx="88" cy="188" r="14" fill="#334155" stroke="#475569" stroke-width="1.5"/>
  <text x="88" y="193" text-anchor="middle" fill="white" font-size="10">C</text>

  <!-- bottom-right -->
  <line x1="183" y1="139" x2="240" y2="180" stroke="#475569" stroke-width="2.5"/>
  <circle cx="252" cy="188" r="14" fill="#334155" stroke="#475569" stroke-width="1.5"/>
  <text x="252" y="193" text-anchor="middle" fill="white" font-size="10">C</text>

  <!-- back (dashed) -->
  <line x1="170" y1="130" x2="170" y2="200" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,4"/>
  <circle cx="170" cy="212" r="14" fill="#475569" stroke="#64748b" stroke-width="1.5"/>
  <text x="170" y="217" text-anchor="middle" fill="white" font-size="10">C</text>

  <!-- Labels for diamond -->
  <text x="170" y="248" text-anchor="middle" fill="#1e40af" font-size="10">Bond angle = 109.5° (tetrahedral)</text>
  <text x="170" y="262" text-anchor="middle" fill="#64748b" font-size="10">No free electrons → non-conductor</text>
  <text x="170" y="275" text-anchor="middle" fill="#64748b" font-size="10">All bonds strong → hardest natural material</text>

  <!-- DIVIDER -->
  <line x1="350" y1="20" x2="350" y2="270" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- GRAPHITE SECTION -->
  <text x="525" y="18" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="13">Graphite</text>
  <text x="525" y="32" text-anchor="middle" fill="#64748b" font-size="10">Each C bonded to 3 others — hexagonal layers</text>

  <!-- Hexagonal layer 1 (lower, slightly offset) -->
  <g opacity="0.5">
    <polygon points="440,170 460,150 500,150 520,170 500,190 460,190" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="440" y1="170" x2="420" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="520" y1="170" x2="540" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="480" y="174" text-anchor="middle" fill="#64748b" font-size="9">layer 2</text>
  </g>

  <!-- Dashed lines between layers -->
  <line x1="445" y1="155" x2="455" y2="120" stroke="#d1fae5" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="480" y1="148" x2="480" y2="113" stroke="#d1fae5" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="515" y1="155" x2="505" y2="120" stroke="#d1fae5" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="480" y="138" text-anchor="middle" fill="#059669" font-size="9">weak London</text>
  <text x="480" y="149" text-anchor="middle" fill="#059669" font-size="9">forces between layers</text>

  <!-- Hexagonal layer 2 (upper, main) -->
  <polygon points="450,110 470,90 510,90 530,110 510,130 470,130" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <line x1="450" y1="110" x2="425" y2="110" stroke="#16a34a" stroke-width="2"/>
  <line x1="530" y1="110" x2="555" y2="110" stroke="#16a34a" stroke-width="2"/>

  <!-- C atoms on upper hexagon -->
  <circle cx="450" cy="110" r="9" fill="#166534" stroke="#15803d" stroke-width="1.5"/>
  <text x="450" y="114" text-anchor="middle" fill="white" font-size="8">C</text>
  <circle cx="470" cy="90" r="9" fill="#166534" stroke="#15803d" stroke-width="1.5"/>
  <text x="470" y="94" text-anchor="middle" fill="white" font-size="8">C</text>
  <circle cx="510" cy="90" r="9" fill="#166534" stroke="#15803d" stroke-width="1.5"/>
  <text x="510" y="94" text-anchor="middle" fill="white" font-size="8">C</text>
  <circle cx="530" cy="110" r="9" fill="#166534" stroke="#15803d" stroke-width="1.5"/>
  <text x="530" y="114" text-anchor="middle" fill="white" font-size="8">C</text>
  <circle cx="510" cy="130" r="9" fill="#166534" stroke="#15803d" stroke-width="1.5"/>
  <text x="510" y="134" text-anchor="middle" fill="white" font-size="8">C</text>
  <circle cx="470" cy="130" r="9" fill="#166534" stroke="#15803d" stroke-width="1.5"/>
  <text x="470" y="134" text-anchor="middle" fill="white" font-size="8">C</text>

  <!-- Delocalised electron cloud label -->
  <ellipse cx="490" cy="78" rx="30" ry="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1" opacity="0.7"/>
  <text x="490" y="82" text-anchor="middle" fill="#166534" font-size="9">π e⁻ cloud</text>
  <line x1="490" y1="70" x2="490" y2="87" stroke="#16a34a" stroke-width="1" stroke-dasharray="2,2"/>

  <!-- Labels for graphite -->
  <text x="525" y="220" text-anchor="middle" fill="#15803d" font-size="10">Bond angle = 120° (trigonal planar)</text>
  <text x="525" y="234" text-anchor="middle" fill="#64748b" font-size="10">1 delocalised e⁻ per C → conducts between layers</text>
  <text x="525" y="248" text-anchor="middle" fill="#64748b" font-size="10">Layers slide → soft, lubricant</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-graphite',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why graphite is unusual — and conducts electricity',
        text: 'Each carbon in graphite forms only 3 covalent bonds (to 3 neighbouring C atoms in the same layer). This leaves <strong>one delocalised electron per carbon</strong>, which can move freely between the layers. This makes graphite a good electrical conductor — the only non-metal to do so under normal conditions.<br/><br/>The layers are held together by weak <strong>London (van der Waals) forces</strong>. This allows them to slide easily over one another, making graphite soft and a good lubricant (used in pencils).'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-intro', prompt: 'What feature of giant covalent structures makes them have very high melting points?' },
      { id: 'c2', blockId: 'table-examples', prompt: 'How many covalent bonds does each carbon atom form in (a) diamond and (b) graphite?' },
      { id: 'c3', blockId: 'callout-graphite', prompt: 'Explain why graphite can conduct electricity but diamond cannot.' },
      { id: 'c4', blockId: 'callout-graphite', prompt: 'Why is graphite soft and slippery, while diamond is extremely hard?' }
    ],
    summaryText: 'Giant covalent = millions of covalent bonds throughout 3D structure → very hard, very high mp. Diamond: each C bonded to 4 others, no free e⁻, does not conduct. Graphite: each C bonded to 3, 1 delocalised e⁻ per C → conducts; layers slide (London forces between them). SiO₂: 3D network, very hard, does not conduct.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_7;