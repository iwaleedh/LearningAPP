/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 6
 * "Periodicity of first ionisation energies"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.5
 */
export const note_chemistry_1_2_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Explain the periodic trend in first ionisation energies across Periods 2 and 3, including the two dips, and down groups of the Periodic Table. Know the definition of periodicity. Describe types of atomic radius measurement and explain trends in atomic radius and melting point.' },
      terms: []
    },
    {
      id: 'callout-periodicity-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is a Periodic Property (Periodicity)?',
        text: 'A <strong>periodic property</strong> (also called <strong>periodicity</strong>) is a regularly repeating pattern of atomic, physical or chemical properties across periods or down groups of the Periodic Table.<br/><br/>• Patterns can be <em>predicted</em> from an element\'s position in the Periodic Table.<br/>• Patterns can be <em>explained</em> using electronic configurations.<br/>• Edexcel IAL focuses on Periods 2 and 3 (from Period 4 onwards the d-block transition metals cause anomalies that make trends less straightforward).<br/>• Key periodic properties: atomic radius, first ionisation energy, melting and boiling point.'
      },
      terms: ['Periodic property', 'Periodicity']
    },
    {
      id: 'h-comparison',
      type: 'heading',
      data: { text: 'Comparison of IE\u2081 Across Periods 2 and 3', level: 2 },
      terms: []
    },
    {
      id: 'table-period2',
      type: 'comparisonTable',
      data: {
        caption: 'First ionisation energies across Period 2 (kJ mol\u207b\u00b9) \u2014 same wave pattern as Period 3 but at higher values.',
        headers: ['Element', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'],
        rows: [
          ['IE\u2081', '520', '900', '799', '1086', '1402', '1314', '1681', '2080']
        ]
      },
      terms: []
    },
    {
      id: 'callout-p2-vs-p3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Period 2 vs Period 3: Same Pattern, Different Heights',
        text: '<strong>Both periods show the identical wave pattern:</strong> general increase interrupted by two dips at the same group positions (Group 2\u21923 and Group 5\u21926).<br/><br/>\u2022 <strong>Period 3 IE\u2081 values are consistently lower than Period 2</strong> \u2014 n=3 outer electrons are further from the nucleus and shielded by more inner electrons than n=2 electrons.<br/>\u2022 This <em>same pattern repeating</em> each period is the definition of <strong>periodicity</strong>.<br/><br/><strong>Dip positions are identical:</strong><br/>\u2022 Dip 1: Be\u2192B (Period 2) and Mg\u2192Al (Period 3) \u2014 outer electron moves from s subshell to higher-energy p subshell.<br/>\u2022 Dip 2: N\u2192O (Period 2) and P\u2192S (Period 3) \u2014 4th p electron must pair up in an occupied orbital, experiencing extra electron\u2013electron repulsion.<br/><br/><em>Exam note: Edexcel often asks you to compare data from both periods. Seeing the dips at exactly the same positions in both periods confirms that the pattern is truly periodic.</em>'
      },
      terms: []
    },
    {
      id: 'h-period',
      type: 'heading',
      data: { text: 'Trend Across Period 3 (Na → Ar)', level: 2 },
      terms: []
    },
    {
      id: 'table-period3',
      type: 'comparisonTable',
      data: {
        caption: 'First ionisation energies across Period 3 (kJ mol⁻¹)',
        headers: ['Element', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
        rows: [
          ['IE₁', '496', '738', '577', '786', '1012', '1000', '1251', '1521']
        ]
      },
      terms: []
    },
    {
      id: 'callout-general',
      type: 'callout',
      data: {
        style: 'key',
        title: 'General Trend: Increases across a period',
        text: 'Across Period 3, nuclear charge (Z) increases from Na (+11) to Ar (+18). Electrons are added to the <em>same quantum shell</em> (n = 3), so shielding and distance stay roughly constant. The increasing Z means stronger attraction on outer electrons → higher IE₁.'
      },
      terms: []
    },
    {
      id: 'callout-dip1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Dip 1: Mg → Al (Group 2 → Group 3)',
        text: '<strong>IE₁(Al) < IE₁(Mg)</strong> — despite Al having a higher nuclear charge.<br/><br/><strong>Reason:</strong> Al\'s outer electron is in the 3p subshell (configuration: [Ne]3s²3p¹). The 3p subshell is at a slightly higher energy level than 3s, and is partially shielded by the 3s² electrons beneath it. The outer electron is therefore easier to remove.<br/><br/><em>Similarly in Period 2:</em> IE₁(B) < IE₁(Be) — explained in detail below.'
      },
      terms: []
    },
    {
      id: 'callout-boron-anomaly',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'The Boron–Beryllium Anomaly (Period 2) — MUST KNOW',
        text: '<strong>IE₁(B) < IE₁(Be)</strong> — despite boron having a higher nuclear charge (Z = 5 vs Z = 4).<br/><br/><strong>Be (Z=4):</strong> 1s² 2s² — the first electron removed comes from the <strong>2s</strong> subshell.<br/><strong>B (Z=5):</strong> 1s² 2s² 2p¹ — the first electron removed comes from the <strong>2p</strong> subshell.<br/><br/><strong>Why IE₁(B) is lower:</strong><br/>• The 2p subshell is at a <em>higher energy</em> than 2s — the 2p electron is slightly further from the nucleus and is partially shielded by the 2s² electrons beneath it.<br/>• Even though boron has a greater nuclear charge, the energy required to remove a 2p electron is <em>less</em> than the energy required to remove a 2s electron.<br/>• The subshell effect outweighs the nuclear charge effect in this case.<br/><br/><em>Exam rule:</em> This is the Period 2 version of the Mg → Al dip. When comparing IE₁ of adjacent elements, always check which subshell the electron is removed from — subshell type can override nuclear charge.'
      },
      terms: []
    },
    {
      id: 'callout-dip2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Dip 2: P → S (Group 5 → Group 6)',
        text: '<strong>IE₁(S) < IE₁(P)</strong> — despite S having a higher nuclear charge.<br/><br/><strong>Reason:</strong> Phosphorus (3p³) — each 3p electron occupies a <em>separate</em> orbital (Hund\'s Rule). Sulfur (3p⁴) — one orbital has two paired electrons. Those paired electrons repel each other, reducing the energy needed to remove one.<br/><br/><em>Similarly in Period 2:</em> IE₁(O) < IE₁(N)'
      },
      terms: []
    },
    {
      id: 'h-group',
      type: 'heading',
      data: { text: 'Trend Down a Group', level: 2 },
      terms: []
    },
    {
      id: 'table-group1',
      type: 'comparisonTable',
      data: {
        caption: 'First IE down Group 1',
        headers: ['Element', 'Li', 'Na', 'K', 'Rb'],
        rows: [
          ['IE₁ (kJ mol⁻¹)', '520', '496', '419', '403']
        ]
      },
      terms: []
    },
    {
      id: 'callout-repulsion-group',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Down a Group: More Electron-Electron Repulsion Too',
        text: 'Going down a group, the decrease in IE₁ has two causes:<br/>1. <strong>Greater atomic radius</strong> — outer electron is further from the nucleus, attraction is weaker.<br/>2. <strong>Increased electron-electron repulsion</strong> — more inner shells of electrons repel the outer electron upward, raising its energy and making it easier to remove.<br/><br/><em>Example (N vs P):</em> Nitrogen (Period 2) has two quantum shells; phosphorus (Period 3) has three. The outer electron in P experiences more repulsion from the inner electrons and is further from the nucleus → IE₁(P) &lt; IE₁(N).'
      },
      terms: []
    },
    {
      id: 'h-atomic-radius',
      type: 'heading',
      data: { text: 'Atomic Radius (Periodicity)', level: 2 },
      terms: []
    },
    {
      id: 'callout-atomic-radius',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition and Trend: Atomic Radius',
        text: '<strong>Atomic radius</strong> is the measure of the size of an atom — the distance from the nucleus to the boundary of the electron cloud (determined by halving the distance between two adjacent nuclei).<br/><br/><strong>Across a period → DECREASES:</strong><br/>Nuclear charge (Z) increases; electrons are added to the same quantum shell (same shielding). The increased nuclear attraction pulls the electron cloud inward → smaller atom.<br/><br/><strong>Down a group → INCREASES:</strong><br/>Each new period adds a whole new quantum shell. More shells = greater distance from the nucleus = larger atom. (The increase in nuclear charge does not compensate for the extra shells.)<br/><br/><em>Note: electron-electron repulsion from inner shells also pushes outer electrons further out, contributing to the increase down a group.</em>'
      },
      terms: ['Atomic radius']
    },
    {
      id: 'callout-atomic-radius-types',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Three Ways to Measure Atomic Radius',
        text: 'Because the electron cloud has no definite outer boundary (electron density just decreases), atomic radius cannot be measured directly. Instead, we measure the <strong>distance between two adjacent nuclei and halve it</strong>. Three methods are used depending on the bonding:<br/><br/><strong>1. Covalent radius</strong> — half the distance between the nuclei of two atoms that are <em>covalently bonded</em> to each other (e.g. in Cl₂ or O₂).<br/><br/><strong>2. Van der Waals radius</strong> — half the distance between the nuclei of two atoms that are <em>close together but not bonded</em> (used for noble gases and across molecular contacts). Larger than covalent radius for the same element.<br/><br/><strong>3. Metallic radius</strong> — half the distance between neighbouring nuclei in a <em>metallic lattice</em> (used for metals such as Na, Mg, Al).<br/><br/><em>All three methods give consistent values for comparison. The method chosen depends on the bonding type of the element.</em>'
      },
      terms: ['Covalent radius', 'Van der Waals radius', 'Metallic radius']
    },
    {
      id: 'h-melting',
      type: 'heading',
      data: { text: 'Melting and Boiling Point Trends Across Period 2 & 3', level: 2 },
      terms: []
    },
    {
      id: 'callout-melting',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pattern: Metallic → Covalent Giant → Simple Molecular',
        text: 'Going across Periods 2 and 3, the melting/boiling point follows a predictable pattern:<br/><br/><strong>Metallic structures (Groups 1–3):</strong> Giant metallic lattice → high melting point (e.g. Na, Mg, Al).<br/><br/><strong>Covalent giant lattice (e.g. C as diamond, Si):</strong> Very strong covalent bonds throughout → extremely high melting point (diamond = 3550 °C).<br/><br/><strong>Simple molecular covalent structures (Groups 5–8):</strong> Only weak van der Waals forces between molecules → very low melting point (e.g. N₂, O₂, F₂, Cl₂ are gases at room temperature).<br/><br/><em>Summary: metallic = high; covalent lattice = very high; simple molecular = low. Pattern shows an increase then a sharp decrease across the period.</em>'
      },
      terms: ['Melting point trend', 'Periodicity']
    },
    {
      id: 'table-mps-comparison',
      type: 'comparisonTable',
      data: {
        caption: 'Melting point comparison — same structural pattern repeats across both Period 2 and Period 3.',
        headers: ['Structure type', 'Period 2 examples', 'Period 3 examples', 'MP trend'],
        rows: [
          ['Metallic lattice', 'Li (180 °C), Be (1287 °C)', 'Na (98 °C), Mg (650 °C), Al (660 °C)', 'High'],
          ['Covalent giant lattice', 'B (~2076 °C), C — diamond (3550 °C)', 'Si (1414 °C)', 'Very high (peak in period)'],
          ['Simple molecular covalent', 'N\u2082 (\u2212196 \u00b0C), O\u2082 (\u2212183 \u00b0C), F\u2082 (\u2212220 \u00b0C), Ne (\u2212249 \u00b0C)', 'P\u2084 (44 \u00b0C), S\u2088 (113 \u00b0C), Cl\u2082 (\u2212101 \u00b0C), Ar (\u2212189 \u00b0C)', 'Low (weak van der Waals only)']
        ]
      },
      terms: []
    },
    {
      id: 'h-ionic-radius',
      type: 'heading',
      data: { text: 'Ionic Radius', level: 2 },
      terms: []
    },
    {
      id: 'callout-ionic-radii',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ionic Radius Trends',
        text: '<strong>Down a group \u2014 ionic radii increase:</strong><br/>Each successive period adds a complete new electron shell \u2192 ions are progressively larger.<br/>Example: Li\u207a (0.076 nm) \u2192 Na\u207a (0.102 nm) \u2192 K\u207a (0.138 nm)<br/><br/><strong>Across a period \u2014 positive ions (isoelectronic series) decrease in size:</strong><br/>Na\u207a, Mg\u00b2\u207a and Al\u00b3\u207a all have the electron configuration 2, 8. However, nuclear charge increases from 11 \u2192 12 \u2192 13. More protons pulling the <em>same number</em> of electrons inward more strongly \u2192 radius decreases.<br/><br/><strong>Large jump from cations to anions (e.g. Al\u00b3\u207a \u2192 P\u00b3\u207b):</strong><br/>Cations (Na\u207a, Mg\u00b2\u207a, Al\u00b3\u207a) have configuration 2, 8 (10 electrons).<br/>Anions (P\u00b3\u207b, S\u00b2\u207b, Cl\u207b) have configuration 2, 8, 8 (18 electrons).<br/>The extra electron shell in anions makes them dramatically larger than cations from the same period.<br/><br/><em>Note: ionic radii depend on coordination number in a crystal lattice and method of measurement. Always compare values from the same source.</em>'
      },
      terms: ['Ionic radius', 'Isoelectronic']
    },
    {
      id: 'table-ionic-period3',
      type: 'comparisonTable',
      data: {
        caption: 'Ionic radii across Period 3 (nm, 6-coordinated). Note the large jump from cations (config 2,8) to anions (config 2,8,8).',
        headers: ['Ion', 'Na\u207a', 'Mg\u00b2\u207a', 'Al\u00b3\u207a', 'P\u00b3\u207b', 'S\u00b2\u207b', 'Cl\u207b'],
        rows: [
          ['Protons (Z)', '11', '12', '13', '15', '16', '17'],
          ['Electron config', '2, 8', '2, 8', '2, 8', '2, 8, 8', '2, 8, 8', '2, 8, 8'],
          ['Ionic radius (nm)', '0.102', '0.072', '0.054', '0.212', '0.184', '0.181']
        ]
      },
      terms: []
    },
    {
      id: 'table-isoelectronic',
      type: 'comparisonTable',
      data: {
        caption: 'Isoelectronic series: all contain 10 electrons (config 2,8). Increasing nuclear charge pulls electrons inward \u2192 smaller radius.',
        headers: ['Ion', 'N\u00b3\u207b', 'O\u00b2\u207b', 'F\u207b', 'Na\u207a', 'Mg\u00b2\u207a', 'Al\u00b3\u207a'],
        rows: [
          ['Protons (Z)', '7', '8', '9', '11', '12', '13'],
          ['Electron config', '2, 8', '2, 8', '2, 8', '2, 8', '2, 8', '2, 8'],
          ['Ionic radius (nm)', '0.171', '0.140', '0.133', '0.102', '0.072', '0.054']
        ]
      },
      terms: ['Isoelectronic']
    },
    {
      id: 'h-practice-2b',
      type: 'heading',
      data: { text: 'Practice Questions (Past Paper Style)', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-2b1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Phosphorus Box Notation (Jan 2016 Paper)',
        text: '<strong>Question:</strong> Complete the box (orbital) notation for phosphorus (Z = 15). Label each subshell.<br/><br/><strong>Configuration: 1s² 2s² 2p⁶ 3s² 3p³</strong><br/><br/>1s: [↑↓]<br/>2s: [↑↓]<br/>2p: [↑↓][↑↓][↑↓]<br/>3s: [↑↓]<br/>3p: [↑][↑][↑]<br/><br/><em>Key rule: the three 3p electrons each occupy a separate orbital (Hund\'s rule). Never place a paired electron when an orbital is available. Award: 1 mark for correct arrows, 1 mark for correct labels.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-2b2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Why is IE₁(S) < IE₁(P)? (Jan 2016 Paper)',
        text: '<strong>Question:</strong> Explain why the first ionisation energy of sulfur (Z=16) is lower than that of phosphorus (Z=15), even though S has a higher nuclear charge.<br/><br/><strong>P (Z=15):</strong> 3p³ — three 3p electrons, each in a separate orbital. No pairing.<br/><strong>S (Z=16):</strong> 3p⁴ — one 3p orbital must contain a pair of electrons.<br/><br/><strong>These paired electrons experience electron-electron repulsion within the same orbital.</strong> This repulsion raises the energy of the paired electron, making it easier to remove.<br/>∴ Less energy is required to remove the outer electron from S than from P → IE₁(S) < IE₁(P).<br/><br/><em>Exam tip: Always reference "electron-electron repulsion" in the same orbital, NOT just "pairing". State that this makes the electron easier to remove.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-2b3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Write the Equation for 3rd IE of Phosphorus',
        text: '<strong>Question:</strong> Write the equation, including state symbols, for the third ionisation energy of phosphorus.<br/><br/><strong>For the nth IE:</strong> the starting species has charge (n−1)+<br/>3rd IE → start with P²⁺<br/><br/><strong>Equation: P²⁺(g) → P³⁺(g) + e⁻</strong><br/><br/><em>Missing state symbols (g) will cost marks. All species — ion, product ion, and electron — must be shown in the gaseous state.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-2b4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q4: Why is IE₁(N) > IE₁(P)? (Down Group)',
        text: '<strong>Question:</strong> Explain why the first ionisation energy of nitrogen is greater than that of phosphorus. (3 marks)<br/><br/><strong>N (Period 2):</strong> outer electron in 2p (quantum shell 2)<br/><strong>P (Period 3):</strong> outer electron in 3p (quantum shell 3)<br/><br/><strong>Mark-scheme points:</strong><br/>1. Phosphorus has more quantum shells (3) than nitrogen (2), so its outer electron is further from the nucleus.<br/>2. Phosphorus has more inner-shell electrons, causing greater electron-electron repulsion on the outer electron.<br/>3. Both effects reduce the attraction between the outer electron and the nucleus in phosphorus → less energy needed to remove it → lower IE₁.<br/><br/><em>∴ IE₁(N) > IE₁(P)</em>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-general', prompt: 'Why does the first ionisation energy generally increase across a period?' },
      { id: 'c2', blockId: 'callout-dip1', prompt: 'Explain why IE₁(Al) < IE₁(Mg) even though Al has a higher nuclear charge.' },
      { id: 'c3', blockId: 'callout-dip2', prompt: 'Explain why IE₁(S) < IE₁(P) even though S has a higher nuclear charge.' },
      { id: 'c4', blockId: 'callout-atomic-radius', prompt: 'Describe and explain the trend in atomic radius across a period and down a group.' },
      { id: 'c5', blockId: 'callout-melting', prompt: 'Describe the melting point trend across Period 3 and explain the sharp drop after Group 4.' },
      { id: 'c6', blockId: 'callout-pq-2b4', prompt: 'Explain why IE₁(N) > IE₁(P), using quantum shells and electron-electron repulsion. Give 3 marking points.' },
      { id: 'c7', blockId: 'callout-boron-anomaly', prompt: 'Explain why IE\u2081(B) < IE\u2081(Be) in Period 2, despite boron having a higher nuclear charge. Which subshell does each element remove from?' },
      { id: 'c8', blockId: 'callout-ionic-radii', prompt: 'Explain why ionic radius decreases from Na\u207a to Mg\u00b2\u207a to Al\u00b3\u207a across Period 3. Why is there a large jump in ionic radius when moving from Al\u00b3\u207a to P\u00b3\u207b?' },
      { id: 'c9', blockId: 'table-isoelectronic', prompt: 'Define isoelectronic. For the series N\u00b3\u207b, O\u00b2\u207b, F\u207b, Na\u207a, Mg\u00b2\u207a: all have 10 electrons. How does ionic radius change across this series and why?' }
    ],
    summaryText: 'Periodicity: regularly repeating pattern of properties; predicted from position; explained from electronic configuration. Period trend (IE\u2081): generally increases (Z\u2191, same shell). Dip G2\u2192G3: outer e\u207b in higher-energy p subshell (Al < Mg; B < Be). Dip G5\u2192G6: paired e\u207b repulsion in shared p orbital (S < P; O < N). Group trend: IE\u2081 decreases (greater atomic radius + more inner-shell shielding). Atomic radius: decreases across period (Z\u2191, same shell); increases down group (more shells). Radius types: covalent (bonded), van der Waals (non-bonded, largest), metallic. Melting points: metallic (high) \u2192 covalent giant lattice (very high) \u2192 simple molecular covalent (low). Ionic radius: decreases across period for cations (isoelectronic \u2014 more protons, same config); large jump from cations to anions (extra electron shell); decreases across isoelectronic series as Z increases.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_6;