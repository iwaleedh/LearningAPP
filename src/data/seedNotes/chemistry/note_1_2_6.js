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
      data: { text: 'Explain the periodic trend in first ionisation energies across Periods 2 and 3, including the two dips, and down groups of the Periodic Table.' },
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
        text: '<strong>IE₁(Al) < IE₁(Mg)</strong> — despite Al having a higher nuclear charge.<br/><br/><strong>Reason:</strong> Al\'s outer electron is in the 3p subshell (configuration: [Ne]3s²3p¹). The 3p subshell is at a slightly higher energy level than 3s, and is partially shielded by the 3s² electrons beneath it. The outer electron is therefore easier to remove.<br/><br/><em>Similarly in Period 2:</em> IE₁(B) < IE₁(Be)'
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
      { id: 'c6', blockId: 'callout-pq-2b4', prompt: 'Explain why IE₁(N) > IE₁(P), using quantum shells and electron-electron repulsion. Give 3 marking points.' }
    ],
    summaryText: 'Period trend: IE₁ generally increases (Z↑, same shell). Dip at G2→G3 (outer e⁻ in higher-energy p subshell). Dip at G5→G6 (paired e⁻ repulsion in p⁴ orbital). Group trend: IE₁ decreases (greater distance + more electron-electron repulsion from inner shells). Atomic radius: decreases across period (Z↑), increases down group (more shells). Melting points: metallic (high) → covalent lattice (very high) → simple molecular (low).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_6;