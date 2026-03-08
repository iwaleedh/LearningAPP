/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 5
 * "Bond polarity and electronegativity"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.3
 */
export const note_chemistry_1_3_5 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Define electronegativity. Use electronegativity to determine bond polarity. Predict whether a molecule is polar or non-polar based on its shape and bond polarities.' },
      terms: []
    },
    {
      id: 'h-en',
      type: 'heading',
      data: { text: 'Electronegativity', level: 2 },
      terms: []
    },
    {
      id: 'callout-en',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Electronegativity (Pauling Scale)',
        text: '<strong>Electronegativity</strong> is the ability of an atom in a covalent bond to attract the shared pair of electrons towards itself.<br/><br/>Electronegativity increases:<br/>• Across a period (left to right) — increasing nuclear charge, same shielding.<br/>• Up a group — smaller atomic radius, closer nucleus to bonding pair.<br/><br/>Fluorine (F) is the most electronegative element (Pauling value ≈ 4.0).'
      },
      terms: ['Electronegativity']
    },
    {
      id: 'h-polar',
      type: 'heading',
      data: { text: 'Polar Bonds (Bond Dipoles)', level: 2 },
      terms: []
    },
    {
      id: 'p-polar',
      type: 'paragraph',
      data: { text: 'When two atoms of <strong>different electronegativity</strong> form a covalent bond, the shared electrons are pulled unequally — closer to the more electronegative atom. This creates a <strong>permanent dipole</strong>: the more electronegative atom carries a partial negative charge (δ−) and the less electronegative atom carries a partial positive charge (δ+).' },
      terms: ['Polar bond', 'Dipole', 'δ+', 'δ-']
    },
    {
      id: 'callout-polar-ex',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: HCl',
        text: 'Cl is more electronegative than H.<br/>The shared pair is pulled towards Cl.<br/>Result: H<sup>δ+</sup>—Cl<sup>δ−</sup> (a polar bond with a permanent dipole → towards Cl).'
      },
      terms: []
    },
    {
      id: 'h-mol-polar',
      type: 'heading',
      data: { text: 'Polar Molecules vs Non-Polar Molecules', level: 2 },
      terms: []
    },
    {
      id: 'p-mol-polar',
      type: 'paragraph',
      data: { text: 'A molecule is polar <strong>only if</strong> it has polar bonds AND the bond dipoles do NOT cancel out due to symmetry. The overall molecular dipole is the vector sum of all individual bond dipoles.' },
      terms: ['Polar molecule']
    },
    {
      id: 'table-polar',
      type: 'comparisonTable',
      data: {
        caption: 'Polar vs non-polar molecules',
        headers: ['Molecule', 'Polar bonds?', 'Shape', 'Dipoles cancel?', 'Overall polarity'],
        rows: [
          ['HCl', 'Yes (H–Cl)', 'Linear (diatomic)', 'No', 'Polar (dipole → Cl)'],
          ['CO₂', 'Yes (C=O)', 'Linear (symmetric)', 'Yes (equal/opposite)', 'Non-polar'],
          ['H₂O', 'Yes (O–H)', 'Bent (asymmetric)', 'No', 'Polar (net dipole)'],
          ['CCl₄', 'Yes (C–Cl)', 'Tetrahedral (symmetric)', 'Yes', 'Non-polar'],
          ['CHCl₃', 'Yes (C–H, C–Cl)', 'Tetrahedral (asymmetric)', 'No', 'Polar']
        ]
      },
      terms: []
    },
    {
      id: 'h-continuum',
      type: 'heading',
      data: { text: 'The Bonding Continuum', level: 2 },
      terms: []
    },
    {
      id: 'callout-continuum',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ionic → Polar Covalent → Pure Covalent',
        text: 'Bonding is not simply "ionic" or "covalent" — it exists on a <strong>continuum</strong> based on the electronegativity difference (ΔEN) between bonding atoms:<br/><br/><strong>ΔEN &gt; 1.8 (approx)</strong> → <strong>Ionic bond</strong> (electron fully transferred): e.g. NaF (ΔEN ≈ 3.1)<br/><strong>ΔEN = 0.5 – 1.8</strong> → <strong>Polar covalent bond</strong> (shared, but unequal): e.g. HCl (ΔEN ≈ 0.9), H₂O<br/><strong>ΔEN = 0</strong> → <strong>Pure (non-polar) covalent bond</strong> (equally shared): e.g. H₂, Cl₂, N₂<br/><br/><em>Note: polarization (ionic → covalent character) and covalent compounds with polar bonds (covalent → ionic character) further blur the distinction. The key is to recognise bonding type from ΔEN values.</em>'
      },
      terms: ['Bonding continuum', 'Polar covalent']
    },
    {
      id: 'callout-diagonal',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Diagonal Relationships in the Periodic Table',
        text: 'Some pairs of elements in diagonally adjacent positions in the periodic table have very similar electronegativities and chemical behaviour. This is the <strong>diagonal relationship</strong>:<br/><br/><strong>Pauling electronegativity values (selected):</strong><br/>• Li (1.0) ≈ Mg (1.2)<br/>• Be (1.5) ≈ Al (1.5)<br/>• B (2.0) ≈ Si (1.8)<br/><br/>Consequence: BeF₂ behaves more like AlF₃ than like MgF₂; Li acts more like Mg than Na in some reactions. This arises because a smaller radius (going up) and lower charge (going left) combine to give similar charge densities diagonally.<br/><br/><strong>Examiner note:</strong> The diagonal relationship is a good illustration of why the Pauling scale and charge density together explain bonding character across the periodic table.'
      },
      terms: ['Diagonal relationship', 'Pauling scale']
    },
    {
      id: 'h-practice-en',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-en1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Why is CCl₄ Non-Polar?',
        text: '<strong>Question:</strong> CCl₄ has four polar C–Cl bonds. Explain why the molecule is overall non-polar.<br/><br/><strong>Step 1 — Identify bond polarity:</strong><br/>Cl is more electronegative than C → each C–Cl bond has a dipole pointing toward Cl (δ−).<br/><br/><strong>Step 2 — Consider shape:</strong><br/>CCl₄ is tetrahedral (4 bonding pairs, 0 lone pairs) — perfectly symmetric.<br/><br/><strong>Step 3 — Vector sum of dipoles:</strong><br/>The four C–Cl dipoles point symmetrically outward from the central C in all directions. They cancel each other exactly.<br/><br/><strong>Conclusion: Net dipole = 0 → non-polar molecule.</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-en2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Why is NH₃ Polar?',
        text: '<strong>Question:</strong> Is ammonia (NH₃) a polar molecule? Explain.<br/><br/><strong>N is more electronegative than H</strong> → each N–H bond is polar (δ+ on H, δ− on N).<br/><br/><strong>Shape = trigonal pyramidal</strong> (3 bonding pairs, 1 lone pair). The lone pair creates asymmetry — the three N–H bond dipoles all point in roughly the same direction toward N and do NOT cancel.<br/><br/><strong>Also:</strong> the lone pair on N itself contributes to a net dipole pointing away from N (toward the H atoms).<br/><br/><strong>Conclusion: NH₃ is a polar molecule.</strong> The asymmetric shape means dipoles don\'t cancel.'
      },
      terms: []
    },
    {
      id: 'callout-pq-en3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Identify Bond Type from ΔEN',
        text: '<strong>Question:</strong> Classify the following bonds as ionic, polar covalent, or pure covalent, based on electronegativity values (Na=0.9, Cl=3.0, H=2.1, O=3.5, N=3.0):<br/>(a) NaCl (b) HCl (c) N₂ (d) H₂O<br/><br/>(a) NaCl: ΔEN = 3.0 − 0.9 = <strong>2.1 → Ionic</strong><br/>(b) HCl: ΔEN = 3.0 − 2.1 = <strong>0.9 → Polar covalent</strong><br/>(c) N₂: ΔEN = 3.0 − 3.0 = <strong>0 → Pure covalent</strong><br/>(d) H₂O: ΔEN = 3.5 − 2.1 = <strong>1.4 → Polar covalent</strong>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-en', prompt: 'Define electronegativity. Which element is the most electronegative?' },
      { id: 'c2', blockId: 'p-polar', prompt: 'Explain what causes a polar bond to form, using the example of H-Cl.' },
      { id: 'c3', blockId: 'table-polar', prompt: 'Explain why CO₂ has polar bonds but is overall a non-polar molecule.' },
      { id: 'c4', blockId: 'table-polar', prompt: 'Explain why H₂O is a polar molecule.' },
      { id: 'c5', blockId: 'callout-continuum', prompt: 'Describe the bonding continuum from ionic to covalent. Which pair of elements produces a bond closest to pure covalent?' },
      { id: 'c6', blockId: 'callout-pq-en1', prompt: 'Explain why CCl₄ is a non-polar molecule despite each C–Cl bond being polar.' }
    ],
    summaryText: 'Electronegativity = ability to attract shared electrons. F is most electronegative; increases up and across to the right. Polar bond: shared pair pulled toward more EN atom (δ−). Molecule is polar if bond dipoles do NOT cancel (asymmetric shape). CO₂ has polar bonds but is non-polar (linear, symmetric). H₂O is polar (bent). Bonding is a continuum: large EN difference → ionic; moderate → polar covalent; zero → pure covalent.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_5;