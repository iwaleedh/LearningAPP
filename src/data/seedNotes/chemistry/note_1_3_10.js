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
      data: { text: 'Describe and compare the three types of intermolecular forces: London (dispersion) forces, permanent dipole–dipole interactions, and hydrogen bonds. Explain anomalous boiling points of H₂O, HF and NH₃ using hydrogen bonding. Understand why water forms 4 H-bonds per molecule and how this compares to HF and NH₃. Apply intermolecular force concepts to organic molecules (ethanol vs methoxymethane).' },
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
        text: 'Present in <strong>polar molecules only</strong>. Because the molecule has a permanent dipole, the δ+ end of one molecule attracts the δ− end of a neighbouring molecule.<br/><br/><strong>Important:</strong> Polar molecules experience <em>both</em> London forces AND permanent dipole–dipole forces — they are additive, not alternatives. For very large polar molecules, London forces can actually exceed dipole–dipole forces in magnitude.<br/><br/>Example: HCl molecules attract each other via permanent dipole–dipole forces <em>as well as</em> London forces.'
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
        text: 'A <strong>hydrogen bond</strong> is a strong type of permanent dipole–dipole interaction formed when hydrogen is covalently bonded to a <strong>very electronegative atom</strong> (F, O, or N) and the slightly positive H atom (δ+) is attracted to a lone pair on a nearby F, O, or N atom of another molecule.<br/><br/>Conditions for H-bond formation:<br/>• H must be bonded to <strong>F, O, or N</strong> — these are the only electronegative enough small atoms.<br/>• The acceptor atom must have a <strong>lone pair</strong> at n=2 level (concentrated, spatially close negative charge).<br/><br/>Represented by a dotted line: O–H···O<br/><br/>Strength: approximately 1/10th of a typical covalent bond — strong compared to London/dipole forces, but not as strong as covalent. Constantly broken and reformed in liquid water.'
      },
      terms: ['Hydrogen bond']
    },
    {
      id: 'callout-bp-trends',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Boiling Point Trends Across Groups: The H-Bonding Anomaly',
        text: '<strong>Group 4 (CH₄ → SnH₄):</strong> Boiling points increase steadily down the group (CH₄ −161°C → GeH₄ −89°C → SnH₄ −52°C) — no H-bonding, just increasing London forces as molecular mass grows. This is the "expected" trend.<br/><br/><strong>Groups 5, 6, and 7 anomaly:</strong> If you extrapolate the Group 4 trend to predict what NH₃, H₂O, and HF should boil at, their actual boiling points are <em>far higher</em> than predicted:<br/>• <strong>H₂O</strong>: expected ≈ −80°C, actual = +100°C<br/>• <strong>HF</strong>: expected ≈ −100°C, actual = +19.5°C<br/>• <strong>NH₃</strong>: expected ≈ −110°C, actual = −33°C<br/><br/>This anomalously high boiling point is explained by the extra energy needed to break <strong>hydrogen bonds</strong> between molecules. H₂O, HF, and NH₃ all contain H bonded directly to O, F or N.'
      },
      terms: []
    },
    {
      id: 'callout-water-perfect',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why H₂O Has The Highest Boiling Point: The "Perfect" H-Bond System',
        text: 'Water has a higher boiling point than both HF and NH₃ despite having a lower molecular mass than HF. This is because water is a <strong>uniquely "perfect" hydrogen-bonding system</strong>:<br/><br/>Each H₂O molecule has:<br/>• <strong>2 δ+ hydrogen atoms</strong> that can donate H-bonds<br/>• <strong>2 lone pairs on oxygen</strong> that can accept H-bonds<br/>→ Every water molecule can form <strong>4 hydrogen bonds</strong> (2 donated + 2 accepted) = a full, balanced network.<br/><br/><strong>HF is limited:</strong> Each HF molecule has 1 δ+H (only 1 donor) but 3 lone pairs (3 potential acceptors). The lone pairs are "wasted" — HF forms chains, not a full network. Fewer H-bonds per molecule → lower bp than H₂O despite being more electronegative.<br/><br/><strong>NH₃ is limited:</strong> Each NH₃ molecule has 3 δ+H (3 donors) but only 1 lone pair (1 acceptor). Many donors are wasted. NH₃ has the fewest H-bonds per molecule → lowest bp of the three.<br/><br/>Order: <strong>H₂O (100°C) > HF (19.5°C) > NH₃ (−33°C)</strong> — reflecting the efficiency of their H-bonding networks.'
      },
      terms: []
    },
    {
      id: 'callout-hbond-apps',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'H-Bonding in Action: Ethanol vs Methoxymethane, and DNA',
        text: '<strong>Ethanol (C₂H₅OH) vs Methoxymethane (CH₃OCH₃):</strong><br/>Both have the same molecular formula — C₂H₆O — and a similar number of electrons.<br/>• Ethanol bp = <strong>78.5°C</strong>: the O–H group allows hydrogen bonding between molecules.<br/>• Methoxymethane bp = <strong>−24.8°C</strong>: the oxygen is between two carbons, no O–H bond → no hydrogen bonding → only London forces and weak dipole-dipole.<br/>This ~103°C difference is almost entirely due to H-bonding in ethanol.<br/><br/><strong>DNA double helix:</strong> The two complementary strands of DNA are held together by hydrogen bonds between specific base pairs (adenine–thymine: 2 H-bonds; guanine–cytosine: 3 H-bonds). H-bonds are individually weak enough to be unzipped during DNA replication but collectively strong enough to hold the double helix stable.'
      },
      terms: []
    },
    {
      id: 'table-effects',
      type: 'comparisonTable',
      data: {
        caption: 'Effects of intermolecular forces on physical properties',
        headers: ['Effect / Anomaly', 'Explanation'],
        rows: [
          ['H₂O has a surprisingly high bp (100°C) vs H₂S (−60°C)', 'H₂O molecules form strong H-bonds (O-H···O); H₂S only has London + weak dipole forces'],
          ['H₂O > HF > NH₃ in boiling point', 'Water is the "perfect" H-bond system — 2 donors and 2 acceptors per molecule (4 H-bonds). HF has only 1 δ+H donor. NH₃ has only 1 lone pair acceptor. Both are limited compared to water.'],
          ['HF has a higher bp than HCl', 'HF has strong F-H···F hydrogen bonds; HCl only has dipole-dipole + London forces'],
          ['Ice is less dense than water', 'In ice, each H₂O forms 4 H-bonds in an open hexagonal lattice. When melted, the lattice partially collapses → liquid water is denser. This is why ice floats.'],
          ['Ethanol (78.5°C) vs methoxymethane (−24.8°C)', 'Both have formula C₂H₆O but only ethanol has an O–H group → H-bonding. Methoxymethane has no O–H → only London + dipole. The ~100°C difference is almost entirely due to H-bonding.'],
          ['I₂ boiling point > Br₂ > Cl₂ > F₂', 'All halogens are non-polar; as molecular mass increases, more electrons → stronger London dispersion forces → higher bp']
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-london', prompt: 'Explain the origin of London dispersion forces and what two factors affect their strength.' },
      { id: 'c2', blockId: 'callout-hbond', prompt: 'Define a hydrogen bond. State the three elements that can form hydrogen bonds with H, and explain why.' },
      { id: 'c3', blockId: 'callout-bp-trends', prompt: 'Explain why H₂O, HF and NH₃ all have anomalously high boiling points compared to the other hydrides in their groups.' },
      { id: 'c4', blockId: 'callout-water-perfect', prompt: 'Explain why H₂O has a higher boiling point than HF, even though F is more electronegative than O.' },
      { id: 'c5', blockId: 'callout-hbond-apps', prompt: 'Ethanol and methoxymethane both have the formula C₂H₆O. Explain why their boiling points differ by about 100°C.' },
      { id: 'c6', blockId: 'table-effects', prompt: 'Explain why ice is less dense than liquid water.' }
    ],
    summaryText: 'Three intermolecular forces: London (all molecules, ∝ e⁻ count + shape) < permanent dipole-dipole (polar molecules — additive with London) < hydrogen bonds (H bonded to F/O/N, acceptor needs lone pair). H-bonds explain anomalously high bp of H₂O/HF/NH₃ vs their group hydrides. H₂O is the "perfect" H-bond system (2 donors + 2 acceptors = 4 bonds/molecule). HF limited (1 donor), NH₃ limited (1 acceptor). Ethanol bp 78.5°C vs methoxymethane −24.8°C: same formula, difference due to H-bonding. DNA strands held by H-bonds.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_10;