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