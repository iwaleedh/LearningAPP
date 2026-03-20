/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 6
 * "Simple molecular substances and their properties"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.4
 */
export const note_chemistry_1_3_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe the structure of simple molecular covalent substances. Explain why they have low melting/boiling points and poor electrical conductivity.' },
      terms: []
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'Simple Molecular Substances', level: 2 },
      terms: []
    },
    {
      id: 'p-structure',
      type: 'paragraph',
      data: { text: 'Many covalent compounds exist as <strong>discrete (simple) molecules</strong> — individual molecules containing a small, fixed number of atoms bonded by covalent bonds (e.g. H₂O, CO₂, CH₄, Cl₂, I₂). Between these molecules there are only <strong>weak intermolecular forces</strong> (van der Waals, dipole–dipole, or hydrogen bonds). The covalent bonds within each molecule are strong.' },
      terms: ['Simple molecular substance', 'Intermolecular forces']
    },
    {
      id: 'callout-props',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Simple Molecular Substances',
        text: '• <strong>Low melting and boiling points</strong>: Only the weak <em>intermolecular forces</em> need to be overcome (not the strong covalent bonds themselves). The larger the molecule, the more electrons → stronger London forces → higher bp.<br/>• <strong>Do NOT conduct electricity</strong>: No ions or free electrons. Molecules are electrically neutral.<br/>• <strong>Often volatile</strong>: Low boiling points → liquids easily evaporate at room temperature.<br/>• <strong>Solubility</strong>: Polar molecules dissolve in polar solvents; non-polar in non-polar solvents ("like dissolves like").'
      },
      terms: []
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common misconception: melting ≠ breaking covalent bonds',
        text: 'When a simple molecular substance melts or boils, the <strong>intermolecular forces</strong> are broken (the weak forces between molecules). The <strong>covalent bonds</strong> within the molecules remain intact.<br/><br/><em>Example: Iodine (I₂) melts at 114°C. The I–I covalent bond is NOT broken during melting — only London forces between I₂ molecules are overcome.</em>'
      },
      terms: []
    },
    {
      id: 'callout-shape-forces',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Molecular Shape Affects London Force Strength',
        text: 'Two molecules with the same molecular formula (same number of electrons) can have <em>different</em> boiling points if their shapes differ, because shape affects how closely molecules can approach each other.<br/><br/><strong>Example: C₄H₁₀ isomers</strong><br/>• <strong>Butane</strong> (straight chain): bp = <strong>−1°C</strong><br/>• <strong>2-Methylpropane</strong> (branched): bp = <strong>−12°C</strong><br/><br/>Butane is higher because the long, thin chain maximises contact area between adjacent molecules → larger temporary dipoles → stronger London forces.<br/>2-Methylpropane is more spherical/compact → less surface contact → weaker London forces → lower bp.<br/><br/><strong>Also:</strong> Permanent dipole–dipole forces act <em>in addition to</em> London forces — not instead of them. A polar molecule will experience both types of intermolecular attraction simultaneously.'
      },
      terms: []
    },
    {
      id: 'table-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of simple molecular substances',
        headers: ['Substance', 'Formula', 'State at 25°C', 'Main intermol. force', 'Approx. bp'],
        rows: [
          ['Hydrogen', 'H₂', 'Gas', 'London', '−253°C'],
          ['Chlorine', 'Cl₂', 'Gas', 'London', '−34°C'],
          ['Bromine', 'Br₂', 'Liquid', 'London', '59°C'],
          ['Iodine', 'I₂', 'Solid (dark grey crystals)', 'London', '184°C'],
          ['Water', 'H₂O', 'Liquid', 'Hydrogen bonds', '100°C']
        ]
      },
      terms: []
    },
    {
      id: 'h-iodine',
      type: 'heading',
      data: { text: 'Case Study: Iodine Crystal Structure', level: 2 },
      terms: []
    },
    {
      id: 'callout-iodine',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Iodine — Dark Grey Crystalline Solid',
        text: 'Iodine at room temperature is a <strong>dark grey (almost black) crystalline solid</strong> with a purple vapour. Despite being a solid, it has a comparatively low melting point (114°C) because only the <em>weak London dispersion forces between I₂ molecules</em> need to be overcome on melting — the I–I covalent bonds are NOT broken.<br/><br/>Structure:<br/>• Iodine forms a <strong>face-centred cubic</strong> crystal — I₂ molecules are packed in a cubic arrangement with one molecule at the centre of each face of the cube.<br/>• Within each molecule, the I–I bond is short and strong (covalent, 266 pm).<br/>• Between molecules, the intermolecular distance is much larger (349 pm) reflecting the much weaker London forces.<br/><br/><em>Key exam point: iodine is described as a molecular solid — it tests whether you know the difference between covalent bond breaking (requires much more energy) and intermolecular force breaking.</em>'
      },
      terms: []
    },
    {
      id: 'h-ice',
      type: 'heading',
      data: { text: 'Case Study: Ice and the Density Anomaly of Water', level: 2 },
      terms: []
    },
    {
      id: 'callout-ice',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Ice Is Less Dense Than Liquid Water',
        text: 'Ice is unusual because it is <strong>less dense than liquid water</strong> — most solids are denser than their liquid form.<br/><br/>Reason:<br/>• In ice, every H₂O molecule forms <strong>4 hydrogen bonds</strong> (2 donated + 2 accepted) in a fixed, open, hexagonal lattice structure.<br/>• This open arrangement contains a lot of <strong>empty space</strong> — the hydrogen bonds hold molecules further apart than they would be in a close-packed arrangement.<br/>• When ice melts, this rigid H-bond network partially collapses. The molecules fill some of the wasted space → <strong>liquid water is denser than ice</strong>.<br/>• This is why ice <strong>floats</strong> on water.<br/><br/><strong>0°C to 4°C anomaly:</strong> Between 0°C and 4°C, liquid water continues to <em>increase</em> in density as more of the residual hydrogen-bonded ice-like structure collapses. Above 4°C, normal thermal expansion dominates and density decreases. Water is at its <strong>maximum density at 4°C</strong>.'
      },
      terms: []
    },
    {
      id: 'svg-ice',
      type: 'svg',
      data: {
        caption: 'Figure: Ice structure — each water molecule forms 4 hydrogen bonds (shown as dashed lines), creating an open hexagonal arrangement with empty space inside the rings. This makes ice less dense than liquid water.',
        svg: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="240" y="16" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Ice — Open Hydrogen-Bonded Network</text>

  <!-- Central hexagonal ring of O atoms (simplified ice Ic) -->
  <!-- Oxygen atoms at vertices of a hexagon (approximate positions) -->
  <circle cx="240" cy="80" r="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="240" y="84" text-anchor="middle" fill="#1e40af" font-size="9">O</text>

  <circle cx="290" cy="110" r="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="290" y="114" text-anchor="middle" fill="#1e40af" font-size="9">O</text>

  <circle cx="290" cy="160" r="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="290" y="164" text-anchor="middle" fill="#1e40af" font-size="9">O</text>

  <circle cx="240" cy="190" r="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="240" y="194" text-anchor="middle" fill="#1e40af" font-size="9">O</text>

  <circle cx="190" cy="160" r="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="190" y="164" text-anchor="middle" fill="#1e40af" font-size="9">O</text>

  <circle cx="190" cy="110" r="12" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="190" y="114" text-anchor="middle" fill="#1e40af" font-size="9">O</text>

  <!-- H-bonds (dashed lines between O atoms — each line represents O-H···O) -->
  <line x1="252" y1="88" x2="280" y2="108" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="290" y1="122" x2="290" y2="148" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="280" y1="167" x2="252" y2="183" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="228" y1="187" x2="200" y2="168" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="190" y1="148" x2="190" y2="122" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="202" y1="106" x2="228" y2="88" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,3"/>

  <!-- H atoms along each bond (small circles) -->
  <circle cx="268" cy="99" r="6" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="268" y="103" text-anchor="middle" fill="#92400e" font-size="7">H</text>
  <circle cx="290" cy="136" r="6" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="290" y="140" text-anchor="middle" fill="#92400e" font-size="7">H</text>
  <circle cx="266" cy="175" r="6" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="266" y="179" text-anchor="middle" fill="#92400e" font-size="7">H</text>
  <circle cx="213" cy="176" r="6" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="213" y="180" text-anchor="middle" fill="#92400e" font-size="7">H</text>
  <circle cx="190" cy="136" r="6" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="190" y="140" text-anchor="middle" fill="#92400e" font-size="7">H</text>
  <circle cx="214" cy="97" r="6" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="214" y="101" text-anchor="middle" fill="#92400e" font-size="7">H</text>

  <!-- Empty space label inside ring -->
  <text x="240" y="138" text-anchor="middle" fill="#94a3b8" font-size="10" font-style="italic">empty space</text>
  <text x="240" y="152" text-anchor="middle" fill="#94a3b8" font-size="10" font-style="italic">inside ring</text>

  <!-- Right panel: key points -->
  <rect x="370" y="40" width="100" height="140" rx="6" fill="#1c3a64" stroke="#3b82f6" stroke-width="1"/>
  <text x="420" y="56" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="10">Key Points</text>
  <text x="375" y="74" fill="#374151" font-size="9">• 4 H-bonds per H₂O</text>
  <text x="375" y="90" fill="#374151" font-size="9">• Open lattice →</text>
  <text x="375" y="103" fill="#374151" font-size="9">  lots of empty space</text>
  <text x="375" y="118" fill="#374151" font-size="9">• Ice less dense</text>
  <text x="375" y="131" fill="#374151" font-size="9">  than water → floats</text>
  <text x="375" y="147" fill="#374151" font-size="9">• Max density 4°C</text>
  <text x="375" y="162" fill="#374151" font-size="9">  (structure collapses)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-polymers',
      type: 'heading',
      data: { text: 'Case Study: Poly(ethene) — High Density vs Low Density', level: 2 },
      terms: []
    },
    {
      id: 'callout-polymers',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Poly(ethene) — Molecular Structure Controls Properties',
        text: 'Poly(ethene) (polythene) consists of very long carbon chains with hydrogen atoms attached. The molecules are attracted to each other by <strong>London (van der Waals) dispersion forces</strong>.<br/><br/>By controlling the polymerisation conditions (temperature, pressure, catalyst), the degree of <strong>chain branching</strong> can be controlled, producing two distinct types:<br/><br/><strong>High Density Poly(ethene) (HDPE):</strong><br/>• Very few branches on the chains<br/>• Chains pack closely and regularly → nearly crystalline arrangement<br/>• Closer packing → stronger London forces (more contact between chains)<br/>• <em>Higher melting point, stronger, more rigid</em><br/>• Uses: containers for household chemicals, buckets, bowls<br/><br/><strong>Low Density Poly(ethene) (LDPE):</strong><br/>• Many short branches on the chains<br/>• Branches prevent chains from lying close together in a tidy arrangement → irregular packing<br/>• More wasted space → weaker London forces between chains<br/>• <em>Lower melting point, weaker, more flexible, lower density</em><br/>• Uses: plastic bags, flexible packaging<br/><br/><em>Key principle: In polymers, the degree of branching controls how closely chains pack → controls London force strength → controls physical properties.</em>'
      },
      terms: ['High density poly(ethene)', 'Low density poly(ethene)']
    },
    {
      id: 'callout-dissolving',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Why Some Substances Dissolve and Others Don\'t',
        text: '<strong>Methane (CH₄) does NOT dissolve in water:</strong><br/>• Methane molecules are separated (it is a gas), so there is little energy cost in separating them.<br/>• The problem is the <em>water side</em>: methane would have to disrupt the strong hydrogen bonds between water molecules to squeeze in.<br/>• The only attractions formed between CH₄ and H₂O are very weak London forces — not enough to replace the lost H-bonds.<br/>• Overall energy balance is unfavourable → CH₄ remains insoluble.<br/><br/><strong>Ammonia (NH₃) DOES dissolve in water:</strong><br/>• NH₃ can form hydrogen bonds (N–H groups + lone pair on N).<br/>• When NH₃ displaces the H₂O ··· H₂O H-bonds, it can replace them with N–H···O and N···H–O bonds of similar strength.<br/>• NH₃ also partially reacts with water: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (~1% reacts).<br/>• Overall: energetically favourable → highly soluble.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-structure', prompt: 'Describe what holds molecules together WITHIN a simple molecular substance and what holds molecules together BETWEEN each other.' },
      { id: 'c2', blockId: 'callout-props', prompt: 'Why do simple molecular substances have low melting points?' },
      { id: 'c3', blockId: 'callout-iodine', prompt: 'Iodine is a dark grey solid. Explain why it has a relatively low melting point for a solid. What is broken when it melts?' },
      { id: 'c4', blockId: 'callout-ice', prompt: 'Explain why ice is less dense than liquid water. Why does water reach its maximum density at 4°C rather than at 0°C?' },
      { id: 'c5', blockId: 'callout-polymers', prompt: 'Explain why HDPE has a higher melting point than LDPE, even though both are made of poly(ethene).' },
      { id: 'c6', blockId: 'callout-dissolving', prompt: 'Explain why methane is insoluble in water but ammonia is freely soluble.' }
    ],
    summaryText: 'Simple molecular substances = discrete covalent molecules held by weak intermolecular forces. Low mp/bp (only intermolecular forces broken — covalent bonds intact). No electrical conductivity. Iodine: dark grey crystalline solid, face-centred cubic, low mp (London forces only). Ice: open hexagonal H-bond network (4 H-bonds per H₂O) → empty space → less dense than water → floats. Maximum density of water at 4°C. Poly(ethene): HDPE (few branches → close packing → stronger London → higher mp, rigid) vs LDPE (many branches → irregular packing → weaker London → lower mp, flexible). Methane insoluble in water (CH₄ cannot replace H₂O H-bonds); ammonia soluble (can H-bond with water + partly reacts).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_6;