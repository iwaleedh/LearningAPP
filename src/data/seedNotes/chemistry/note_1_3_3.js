/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 3
 * "Metallic bonding and properties of metals"
 * Source: Pearson Edexcel IAL Chemistry — Section 3A.3
 */
export const note_chemistry_1_3_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe metallic bonding as the attraction between a lattice of positive metal ions and a sea of delocalised electrons. Explain the physical properties of metals in terms of this structure.' },
      terms: []
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Metallic Bonding', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Metallic Bonding',
        text: 'In a metal, the atoms release their outer electrons to form a <strong>"sea" of delocalised electrons</strong>. These electrons are no longer associated with any one atom. The metal atoms become positive ions (cations) and arrange in a giant metallic lattice.<br/><br/><strong>Metallic bonding</strong> is the strong electrostatic attraction between the regular lattice of positive metal ions and the surrounding sea of mobile, delocalised electrons.'
      },
      terms: ['Metallic bonding', 'Delocalised electrons', 'Giant metallic lattice']
    },
    {
      id: 'h-props',
      type: 'heading',
      data: { text: 'Physical Properties of Metals', level: 2 },
      terms: []
    },
    {
      id: 'table-props',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of metals explained by metallic bonding',
        headers: ['Property', 'Explanation (linking to metallic bonding)'],
        rows: [
          ['<strong>High melting/boiling points</strong>', 'Large amounts of energy needed to overcome many strong electrostatic attractions between the positive ion lattice and the delocalised electrons.'],
          ['<strong>Good conductors of electricity</strong>', 'The delocalised electrons are free to move through the lattice and carry charge when a potential difference is applied.'],
          ['<strong>Good conductors of heat</strong>', 'Mobile delocalised electrons can transfer kinetic energy rapidly through the structure.'],
          ['<strong>Malleable and ductile</strong>', 'Layers of positive ions can slide over one another without breaking the bonding, since the sea of electrons rearranges to maintain attraction throughout.'],
          ['<strong>High density</strong>', 'Metal atoms pack closely together in a lattice, resulting in a high mass per unit volume.']
        ]
      },
      terms: ['Malleable', 'Ductile']
    },
    {
      id: 'callout-strength',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Factors Affecting Metallic Bond Strength',
        text: 'Metallic bond strength (and therefore melting/boiling point) increases with:<br/>• <strong>More delocalised electrons per atom:</strong> e.g. Mg²⁺ (2 delocalised e⁻ per atom) has stronger metallic bonding than Na⁺ (1 delocalised e⁻). Al has 3 → even higher still.<br/>• <strong>Smaller ionic radius:</strong> ions sit closer to the electron sea → stronger electrostatic attraction. Mg²⁺ is smaller than Na⁺, contributing further to Mg\'s higher melting point.<br/>• <strong>More nearest neighbours:</strong> Na has 8 nearest neighbours; Mg has 12 (different packing). More interactions per atom → more energy needed to disrupt.<br/><br/><strong>Melting point trend (approximate):</strong> Na 98°C → Mg 650°C → Al 660°C — reflecting increasing delocalisable electrons and stronger lattice.'
      },
      terms: []
    },
    {
      id: 'callout-transition-metals',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Transition Metals: Extra Strong Metallic Bonding',
        text: 'Transition metals (e.g. Fe, Cu, Ti, W) have particularly strong metallic bonding because they delocalise <strong>both their 4s electrons AND some of their 3d electrons</strong> into the sea. This gives a much larger "sea" of electrons per atom.<br/><br/>Results:<br/>• Very high melting and boiling points (e.g. tungsten melts at 3422°C)<br/>• Very high tensile strength and hardness<br/><br/><strong>Boiling point vs melting point:</strong> Boiling point is a better indicator of the <em>true</em> strength of metallic bonding than melting point. When a metal melts, the bonding is <em>weakened</em> but not fully broken (liquid metals still have partial metallic bonding). Boiling completely separates the atoms, fully overcoming metallic attraction.'
      },
      terms: ['Transition metals', 'Delocalised electrons']
    },
    {
      id: 'h-packing',
      type: 'heading',
      data: { text: 'Crystal Structure: Packing of Metal Atoms', level: 2 },
      terms: []
    },
    {
      id: 'callout-12coord',
      type: 'callout',
      data: {
        style: 'key',
        title: '12-Co-ordination (Close-Packed) — Most Metals',
        text: 'Most metals are <strong>close-packed</strong>, fitting as many atoms as possible into the available volume. Each atom has <strong>12 touching neighbours</strong> (6 in the same layer + 3 above + 3 below).<br/><br/>Close-packing gives the maximum density and the maximum number of metallic bonds per atom, so close-packed metals tend to have <strong>higher melting points and greater strength</strong> than 8-co-ordinated metals.<br/><br/><em>Examples of 12-co-ordinated metals: Mg, Al, Fe, Cu, Ni</em>'
      },
      terms: ['Close-packed', 'Co-ordination number']
    },
    {
      id: 'callout-8coord',
      type: 'callout',
      data: {
        style: 'key',
        title: '8-Co-ordination (Body-Centred Cubic) — Group 1 Metals',
        text: 'Group 1 metals (Li, Na, K, Rb, Cs) have a <strong>less efficient, body-centred cubic</strong> packing. Each atom touches only <strong>8 neighbours</strong> (4 in the layer above and 4 in the layer below; none in the same layer).<br/><br/>Group 1 metals have lower melting points than most other metals because:<br/>• 8 nearest neighbours (fewer bonds per atom) vs 12<br/>• Only <strong>1 delocalised electron per atom</strong> contributes to the electron sea<br/>• <strong>Large atomic radius</strong> means the nucleus is further from the electron sea → weaker attraction<br/><br/><em>This explains why sodium melts at only 98°C while magnesium (12-co-ordinated, 2 delocalised e⁻) melts at 650°C.</em>'
      },
      terms: ['Body-centred cubic']
    },
    {
      id: 'svg-packing',
      type: 'svg',
      data: {
        caption: 'Figure: Left — 12-co-ordination (close-packed): each atom touches 6 in the same layer + 3 above + 3 below. Right — 8-co-ordination (body-centred cubic): atoms only touch those in the layer above and below (4 each), not in the same layer.',
        svg: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Title left -->
  <text x="120" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">12-Co-ordination (Close-Packed)</text>
  <text x="120" y="32" text-anchor="middle" fill="#64748b" font-size="10">Most metals (Mg, Al, Fe, Cu...)</text>

  <!-- Bottom layer (3 atoms) -->
  <circle cx="60" cy="130" r="24" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="110" cy="130" r="24" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="160" cy="130" r="24" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <!-- Middle layer (2 atoms sitting in hollows) -->
  <circle cx="85" cy="97" r="24" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  <circle cx="135" cy="97" r="24" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  <!-- Top layer (1 atom) -->
  <circle cx="110" cy="64" r="24" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- Labels -->
  <text x="85" y="170" text-anchor="middle" fill="#374151" font-size="10">Layer 1</text>
  <text x="85" y="99" text-anchor="middle" fill="#1e40af" font-size="9" font-weight="bold">centre</text>
  <text x="85" y="112" text-anchor="middle" fill="#64748b" font-size="9">atom</text>
  <text x="120" y="185" text-anchor="middle" fill="#1e40af" font-size="10">12 touching neighbours total</text>
  <text x="120" y="198" text-anchor="middle" fill="#64748b" font-size="9">(6 same layer + 3 above + 3 below)</text>

  <!-- Divider -->
  <line x1="250" y1="10" x2="250" y2="210" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Title right -->
  <text x="380" y="18" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">8-Co-ordination (Body-Centred Cubic)</text>
  <text x="380" y="32" text-anchor="middle" fill="#64748b" font-size="10">Group 1 metals (Na, K, Li...)</text>

  <!-- Bottom layer (4 atoms, not touching each other) -->
  <circle cx="300" cy="150" r="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="360" cy="150" r="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="420" cy="150" r="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="480" cy="150" r="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <!-- Gap labels -->
  <text x="330" y="153" text-anchor="middle" fill="#94a3b8" font-size="16">·</text>
  <text x="390" y="150" text-anchor="middle" fill="#94a3b8" font-size="9">gap</text>
  <text x="450" y="153" text-anchor="middle" fill="#94a3b8" font-size="16">·</text>

  <!-- Middle centre atom (touches all 4 below and 4 above) -->
  <circle cx="390" cy="107" r="20" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
  <text x="390" y="111" text-anchor="middle" fill="#4c1d95" font-size="9" font-weight="bold">centre</text>

  <!-- Lines to bottom neighbours -->
  <line x1="380" y1="121" x2="310" y2="137" stroke="#7c3aed" stroke-width="1.2" opacity="0.5"/>
  <line x1="383" y1="123" x2="365" y2="134" stroke="#7c3aed" stroke-width="1.2" opacity="0.5"/>
  <line x1="397" y1="123" x2="423" y2="134" stroke="#7c3aed" stroke-width="1.2" opacity="0.5"/>
  <line x1="400" y1="121" x2="470" y2="137" stroke="#7c3aed" stroke-width="1.2" opacity="0.5"/>

  <!-- Labels -->
  <text x="390" y="185" text-anchor="middle" fill="#7c3aed" font-size="10">8 touching neighbours total</text>
  <text x="390" y="198" text-anchor="middle" fill="#64748b" font-size="9">(4 above + 4 below; none in same layer)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-grains',
      type: 'heading',
      data: { text: 'Crystal Grains and Grain Boundaries', level: 2 },
      terms: []
    },
    {
      id: 'callout-grains',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Crystal Grains',
        text: 'A real piece of metal is NOT perfectly crystalline throughout. It is made up of many small <strong>crystal grains</strong> — regions where the atoms are arranged regularly. At the <strong>grain boundaries</strong>, the rows of atoms from adjacent grains meet at mismatched angles, so atoms are not in neat contact.<br/><br/>Effect of grain boundaries:<br/>• <strong>Prevent layers sliding</strong> → rows of atoms cannot slip over each other at a boundary → makes the metal <strong>harder</strong><br/>• <strong>Weaker contact between atoms</strong> at the boundary → metals tend to <strong>fracture</strong> at grain boundaries under stress<br/>• More (smaller) grains → more boundaries → <strong>harder but more brittle</strong><br/>• Fewer (larger) grains → fewer boundaries → <strong>softer but more workable</strong>'
      },
      terms: ['Crystal grain', 'Grain boundary']
    },
    {
      id: 'callout-hardness',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Controlling Grain Size: Cold Working and Heat Treatment',
        text: '<strong>Cold working</strong> (hammering or bending the metal when cold) produces many small grains → increases hardness (but also increases brittleness).<br/><br/><strong>Heat treatment</strong> (annealing) causes atoms to rearrange into fewer, larger grains → decreases the number of grain boundaries → metal becomes <strong>softer and more workable</strong> again.<br/><br/<strong>Key point:</strong> To restore a hardened, worked metal to a workable state, it must be <em>reheated</em>.'
      },
      terms: []
    },
    {
      id: 'h-alloys',
      type: 'heading',
      data: { text: 'Alloys — Why They Are Harder Than Pure Metals', level: 2 },
      terms: []
    },
    {
      id: 'callout-alloys',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Alloys',
        text: 'An <strong>alloy</strong> is a mixture of two or more metals (or a metal and a non-metal). When atoms of a <strong>different size</strong> are introduced into the metallic lattice, they disrupt the regular arrangement. This prevents layers of atoms from sliding over each other as easily, making alloys <strong>harder and stronger</strong> than the pure metals they contain.<br/><br/>Examples:<br/>• <strong>Brass</strong> (Cu + Zn) — harder than either pure copper or pure zinc<br/>• <strong>Steel</strong> (Fe + C) — harder than pure iron; small carbon atoms sit in gaps in the Fe lattice<br/>• <strong>Bronze</strong> (Cu + Sn)<br/><br/><em>The key idea: size irregularity in the lattice prevents the layer-rolling mechanism that makes pure metals malleable.</em>'
      },
      terms: ['Alloy']
    },
    {
      id: 'svg-alloy',
      type: 'svg',
      data: {
        caption: 'Figure: Pure metal (left) — uniform atom size, layers slip easily. Alloy (right) — differently sized atoms disrupt regular arrangement, preventing layer slipping → harder.',
        svg: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <text x="110" y="16" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Pure Metal — layers slip</text>
  <!-- Pure metal grid (uniform atoms) -->
  <circle cx="30" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="70" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="110" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="150" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="190" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="30" cy="90" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="70" cy="90" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="110" cy="90" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="150" cy="90" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="190" cy="90" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="30" cy="130" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="70" cy="130" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="110" cy="130" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="150" cy="130" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="190" cy="130" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- Slip arrow -->
  <text x="110" y="170" text-anchor="middle" fill="#1e40af" font-size="10">Regular → layers slide freely</text>
  <path d="M 30 155 L 190 155" stroke="#1e40af" stroke-width="1.5" marker-end="url(#arrowB)"/>
  <text x="110" y="185" text-anchor="middle" fill="#64748b" font-size="9">malleable, low hardness</text>

  <!-- Divider -->
  <line x1="240" y1="10" x2="240" y2="195" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Title right -->
  <text x="365" y="16" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="12">Alloy — layers blocked</text>
  <!-- Alloy grid (mixed atom sizes) -->
  <circle cx="260" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="300" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="340" cy="50" r="24" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <circle cx="385" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="425" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="260" cy="92" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="300" cy="92" r="12" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <circle cx="340" cy="92" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="385" cy="92" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="425" cy="92" r="22" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <circle cx="260" cy="132" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="300" cy="132" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="340" cy="132" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="385" cy="132" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="425" cy="132" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="365" y="170" text-anchor="middle" fill="#dc2626" font-size="10">Size irregularity blocks layer sliding</text>
  <text x="365" y="185" text-anchor="middle" fill="#64748b" font-size="9">harder, stronger than pure metals</text>
  <!-- Legend -->
  <circle cx="255" cy="195" r="7" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>
  <text x="265" y="198" fill="#374151" font-size="9">host metal</text>
  <circle cx="320" cy="195" r="7" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
  <text x="330" y="198" fill="#374151" font-size="9">alloying element (different size)</text>
</svg>`
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define metallic bonding.' },
      { id: 'c2', blockId: 'table-props', prompt: 'Explain why metals are good conductors of electricity.' },
      { id: 'c3', blockId: 'callout-12coord', prompt: 'What is close-packing, and how many neighbouring atoms does each atom in a close-packed metal touch?' },
      { id: 'c4', blockId: 'callout-grains', prompt: 'Explain how grain boundaries make a metal harder but also more brittle.' },
      { id: 'c5', blockId: 'callout-alloys', prompt: 'Explain, in terms of structure, why alloys are harder than pure metals.' },
      { id: 'c6', blockId: 'callout-strength', prompt: 'Why does Mg have a higher melting point than Na? Give at least two structural reasons.' }
    ],
    summaryText: 'Metallic bonding = electrostatic attraction between lattice of +ve metal ions and sea of delocalised electrons. Conducts (mobile e⁻). Malleable (layers slide, sea rearranges). High mp/bp (strong attraction). Bond strength: more delocalised e⁻ (Na < Mg < Al), smaller radius, more neighbours. 12-co-ordination (close-packed, most metals) vs 8-co-ordination (Group 1, lower mp). Crystal grains: more boundaries → harder but more brittle; cold working increases hardness; heat treatment restores workability. Alloys: differently-sized atoms disrupt regular layers → layers cannot slip → harder/stronger (e.g. brass = Cu+Zn).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_3;