/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 10
 * "Intermolecular forces"
 * Source: Pearson Edexcel IAL Chemistry — Section 3C.2
 */
export const note_chemistry_1_3_10 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe and compare the three types of intermolecular forces: London (dispersion) forces, permanent dipole–dipole interactions, and hydrogen bonds. Explain how these forces affect the physical properties of substances.' },
      terms: []
    },
    {
      id: 'h-london',
      type: 'heading',
      data: { text: '1. London (Dispersion) Forces', level: 2 },
      terms: []
    },
    {
      id: 'callout-london',
      type: 'callout',
      data: {
        style: 'key',
        title: 'London (Instantaneous Dipole–Induced Dipole) Forces',
        text: 'Present in <strong>all molecules</strong> (polar and non-polar). At any instant, the random movement of electrons creates a <strong>temporary instantaneous dipole</strong>, which induces a dipole in an adjacent molecule. These two dipoles attract each other weakly.<br/><br/><strong>Strength increases with:</strong><br/>• More electrons → more polarisable electron cloud → larger temporary dipoles<br/>• Larger contact surface area between molecules<br/><br/>This is why I₂ has a higher boiling point than F₂.'
      },
      terms: ['London forces', 'Instantaneous dipole', 'Induced dipole', 'van der Waals forces']
    },
    {
      id: 'h-dipole',
      type: 'heading',
      data: { text: '2. Permanent Dipole–Dipole Interactions', level: 2 },
      terms: []
    },
    {
      id: 'callout-dipole',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Permanent Dipole–Dipole Forces',
        text: 'Present in <strong>polar molecules only</strong>. Because the molecule has a permanent dipole, the δ+ end of one molecule attracts the δ− end of a neighbouring molecule.<br/><br/>Stronger than London forces of similar-sized molecules, but weaker than hydrogen bonds.<br/>Example: HCl molecules attract each other via permanent dipole–dipole forces.'
      },
      terms: ['Permanent dipole-dipole']
    },
    {
      id: 'h-hbond',
      type: 'heading',
      data: { text: '3. Hydrogen Bonds', level: 2 },
      terms: []
    },
    {
      id: 'callout-hbond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydrogen Bonds — Definition and Conditions',
        text: 'A <strong>hydrogen bond</strong> is a strong type of permanent dipole–dipole interaction formed when hydrogen is covalently bonded to a <strong>very electronegative atom</strong> (F, O, or N) and the slightly positive H atom (δ+) is attracted to a lone pair on a nearby F, O, or N atom of another molecule.<br/><br/>Conditions for H-bond formation:<br/>• H must be bonded to <strong>F, O, or N</strong> — these are the only electronegative enough small atoms.<br/>• The acceptor atom must have a <strong>lone pair</strong>.<br/><br/>Represented by a dotted line: O–H···O<br/><br/>Examples: H₂O (4 H-bonds possible per molecule), HF (2 H-bonds), NH₃ (1 H-bond donated, 3 accepted)'
      },
      terms: ['Hydrogen bond']
    },
    {
      id: 'table-effects',
      type: 'comparisonTable',
      data: {
        caption: 'Effects of intermolecular forces on boiling points',
        headers: ['Effect / Anomaly', 'Explanation via H-bonds or London forces'],
        rows: [
          ['H₂O has a surprisingly high bp (100°C) vs H₂S (−60°C)', 'H₂O molecules form strong H-bonds (O-H···O); H₂S only has London + dipole forces'],
          ['HF has a higher bp than HCl', 'HF has strong F-H···F hydrogen bonds; HCl only has permanent dipole-dipole + London'],
          ['Ice is less dense than water', 'In ice, each H₂O forms 4 H-bonds in an open tetrahedral lattice; when melted, structure partially collapses → liquid is denser'],
          ['I₂ boiling point > Br₂ > Cl₂ > F₂', 'All halogens are non-polar; as molar mass increases, more electrons → stronger London dispersion forces → higher bp']
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-london', prompt: 'Explain the origin of London dispersion forces and what factors affect their strength.' },
      { id: 'c2', blockId: 'callout-hbond', prompt: 'Define a hydrogen bond. State the three elements that can form hydrogen bonds with H, and explain why.' },
      { id: 'c3', blockId: 'table-effects', prompt: 'Explain why water has an unexpectedly high boiling point compared to H₂S.' },
      { id: 'c4', blockId: 'table-effects', prompt: 'Explain why ice is less dense than liquid water.' }
    ],
    summaryText: 'Three intermolecular forces in order of strength: London (all molecules, ∝ size and e⁻ count) < permanent dipole-dipole (polar molecules) < hydrogen bonds (H bonded to F/O/N). H-bonds explain anomalously high bp of H₂O, HF, NH₃ and the ice density anomaly.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_10;