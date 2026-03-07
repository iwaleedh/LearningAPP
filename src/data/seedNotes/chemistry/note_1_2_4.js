/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 4
 * "Ionisation energies (first IE)"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.4–2A.5
 */
export const note_chemistry_1_2_4 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Define the first ionisation energy. Explain trends in first ionisation energy across a period and down a group. Know factors affecting ionisation energy.' },
      terms: []
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Definition: First Ionisation Energy (IE₁)', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'First Ionisation Energy',
        text: 'The <strong>first ionisation energy</strong> is the energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous +1 ions.<br/><br/><strong>Equation:</strong> X(g) → X⁺(g) + e⁻<br/><br/>Units: kJ mol⁻¹<br/><br/>Note: all species must be in the <strong>gaseous</strong> state!'
      },
      terms: ['First ionisation energy', 'Ionisation energy']
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Three Factors Affecting Ionisation Energy', level: 2 },
      terms: []
    },
    {
      id: 'table-factors',
      type: 'comparisonTable',
      data: {
        caption: 'Factors that determine ionisation energy',
        headers: ['Factor', 'Effect on IE', 'Explanation'],
        rows: [
          ['<strong>Nuclear charge (Z)</strong>', 'Higher Z → Higher IE', 'More protons attract the outer electron more strongly, making it harder to remove.'],
          ['<strong>Atomic/ionic radius (distance)</strong>', 'Larger radius → Lower IE', 'Greater distance from nucleus → weaker attraction (Coulomb\'s law). Electrostatic force ∝ 1/r².'],
          ['<strong>Shielding (screening)</strong>', 'More shielding → Lower IE', 'Inner-shell electrons repel the outer electron and partially cancel the nuclear attraction.']
        ]
      },
      terms: ['Shielding', 'Nuclear charge', 'Effective nuclear charge']
    },
    {
      id: 'h-trend-period',
      type: 'heading',
      data: { text: 'Trend Across a Period (e.g., Period 3: Na → Ar)', level: 2 },
      terms: []
    },
    {
      id: 'p-period',
      type: 'paragraph',
      data: { text: '<strong>General trend:</strong> IE₁ increases across a period. Nuclear charge (Z) increases, adding electrons go into the <em>same</em> shell (same shielding and similar distance), so effective nuclear charge increases → stronger attraction → higher IE₁.' },
      terms: []
    },
    {
      id: 'callout-dip',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Two dips across Period 3 (and Period 2)',
        text: '<strong>Dip 1:</strong> Going from Group 2 (Mg) to Group 3 (Al).<br/>Al (1s²2s²2p⁶3s²<strong>3p¹</strong>) has its outer electron in a 3p subshell. The 3p subshell is at a slightly higher energy (further) than 3s, and is shielded by the 3s electrons. So IE₁(Al) < IE₁(Mg).<br/><br/><strong>Dip 2:</strong> Going from Group 5 (P) to Group 6 (S).<br/>Phosphorus (3p³): each 3p electron is in a separate orbital (Hund\'s rule). Sulfur (3p⁴): the 4th 3p electron must <em>pair up</em>. The paired electrons repel each other, making it easier to remove one → IE₁(S) < IE₁(P).'
      },
      terms: []
    },
    {
      id: 'h-trend-group',
      type: 'heading',
      data: { text: 'Trend Down a Group', level: 2 },
      terms: []
    },
    {
      id: 'p-group',
      type: 'paragraph',
      data: { text: 'IE₁ <strong>decreases</strong> down a group. Going down: the outer electron is in a shell that is further from the nucleus AND there are more inner shells providing greater shielding. Both effects outweigh the increase in nuclear charge → weaker attraction → lower IE₁.' },
      terms: []
    },
    {
      id: 'h-ee-repulsion',
      type: 'heading',
      data: { text: 'Electron-Electron Repulsion (NOT just "Shielding")', level: 2 },
      terms: []
    },
    {
      id: 'callout-ee-repulsion',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why "Electron-Electron Repulsion" is More Precise than "Shielding"',
        text: 'The term <strong>shielding</strong> implies a physical barrier reducing nuclear attraction. At A-level, the preferred term is <strong>electron-electron repulsion</strong>:<br/><br/>Inner electrons (in lower shells) repel outer electrons because <em>like charges repel</em>. This raises the energy of outer electrons above what they would have if no repulsion existed, making them easier to remove (lower IE).<br/><br/><strong>Electron-electron repulsion within the same orbital:</strong><br/>Two electrons in the same orbital repel each other. This is why a <em>paired</em> electron is slightly easier to remove than a singly-occupied one — repulsion lowers the effective energy holding it in place.<br/><br/><em>Example: IE₁(S) &lt; IE₁(P) — the extra electron in S must pair up in a 3p orbital, experiencing extra repulsion from its partner, so it is easier to remove.</em>'
      },
      terms: ['Electron-electron repulsion', 'Shielding']
    },
    {
      id: 'callout-ie-equations',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠ Writing IE Equations: State Symbols are REQUIRED',
        text: 'The equation for the first ionisation energy of element E is:<br/><strong>E(g) → E⁺(g) + e⁻</strong><br/><br/>The equation for the <em>n</em>th ionisation energy:<br/><strong>E^(n−1)+(g) → Eⁿ⁺(g) + e⁻</strong><br/><br/>Examples:<br/>2nd IE of Al: Al⁺(g) → Al²⁺(g) + e⁻<br/>3rd IE of Mg: Mg²⁺(g) → Mg³⁺(g) + e⁻<br/><br/><em>If you omit the (g) state symbols for ALL species, you will lose marks. This applies to both the ion and the electron.</em>'
      },
      terms: []
    },
    {
      id: 'h-practice-ie',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-ie1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Comparing Second IEs of Mg, Al and Si (Past Paper)',
        text: '<strong>Question:</strong> The second ionisation energy of aluminium is greater than that of magnesium, but less than that of silicon. Explain these two observations.<br/><br/><strong>Mg vs Al (Al > Mg for 2nd IE):</strong><br/>For 2nd IE, we have already removed 1 electron from each atom.<br/>Both Mg⁺ and Al⁺ have their second electron in the 3s orbital. However, Al has one more proton (Z = 13) than Mg (Z = 12). The greater nuclear charge in Al attracts the 3s electron more strongly, so a higher energy is needed to remove it.<br/>∴ 2nd IE(Al) > 2nd IE(Mg)<br/><br/><strong>Al vs Si (Si > Al for 2nd IE):</strong><br/>For the 2nd IE of Si: Si(g) has config 1s² 2s² 2p⁶ 3s² 3p². After removing first electron (the 3p¹), Si⁺ has config ...3s² 3p¹. The second electron is now removed from the 3p subshell.<br/>For Al: Al⁺ has config ...3s². The second electron is removed from the 3s subshell.<br/>The 3p subshell is at a <em>higher energy</em> than 3s (less tightly held), so the 3p electron in Si⁺ is actually <em>easier</em> to remove — meaning 2nd IE(Si) > 2nd IE(Al) because... wait:<br/><em>Actually:</em> Al²⁺ second electron from 3s (harder to remove, lower energy orbital). Si⁺ second electron from 3p (slightly higher energy, easier to remove).<br/>∴ 2nd IE(Si) &lt; 2nd IE(Al). But we can also consider nuclear charge: Si has more protons, counteracting the 3p effect.<br/><br/><em>Exam tip: Focus on which orbital the second electron is removed from (3s or 3p) AND relative nuclear charge.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-ie2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Write IE Equations with State Symbols',
        text: '<strong>Question:</strong> Write equations representing the following:<br/>(a) The first ionisation energy of potassium<br/>(b) The second ionisation energy of aluminium<br/>(c) The third ionisation energy of magnesium<br/><br/><strong>(a)</strong> K(g) → K⁺(g) + e⁻<br/><strong>(b)</strong> Al⁺(g) → Al²⁺(g) + e⁻<br/><strong>(c)</strong> Mg²⁺(g) → Mg³⁺(g) + e⁻<br/><br/><em>Tip: The starting ion for the nth IE has charge (n−1)+. The state symbol (g) must appear for ALL species.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-ie3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Highest Second IE in Period 3',
        text: '<strong>Question:</strong> Which element in Period 3 has the highest second ionisation energy? Explain your answer.<br/><br/><strong>Answer: Sodium (Na)</strong><br/><br/>Explanation:<br/>Sodium has the configuration 1s² 2s² 2p⁶ 3s¹. The 1st IE removes the 3s¹ electron. For the 2nd IE, the electron must be removed from the 2p subshell — which is in a lower (inner) quantum shell, closer to the nucleus, with less shielding from above.<br/>This means the electron is much more tightly held than for any other Period 3 element (whose 2nd electron would still come from n=3).<br/>∴ Sodium has the greatest jump from 1st to 2nd IE, giving it the <strong>highest 2nd IE in Period 3</strong>.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define the first ionisation energy. Write the equation that represents it for element X.' },
      { id: 'c2', blockId: 'table-factors', prompt: 'State the three factors that affect ionisation energy and explain the effect of each on the value of IE.' },
      { id: 'c3', blockId: 'callout-dip', prompt: 'Explain why IE₁(Al) < IE₁(Mg) despite Al having a higher atomic number.' },
      { id: 'c4', blockId: 'callout-ee-repulsion', prompt: 'Explain why "electron-electron repulsion" is preferred over "shielding" at A-level. What is the effect of paired electrons on ionisation energy?' },
      { id: 'c5', blockId: 'callout-ie-equations', prompt: 'Write the equation for the third ionisation energy of magnesium, including all state symbols.' },
      { id: 'c6', blockId: 'callout-pq-ie3', prompt: 'Which element in Period 3 has the highest second ionisation energy? Explain your reasoning in terms of electron configuration.' }
    ],
    summaryText: 'IE₁: energy to remove 1 mol e⁻ from 1 mol X(g). Units: kJ mol⁻¹. Equation: X(g) → X⁺(g) + e⁻ — state symbols REQUIRED. Three factors: nuclear charge (+IE), atomic radius (−IE), electron-electron repulsion (−IE — preferred over "shielding"). Across period: generally increases; dips at Group 3 (p above s) and Group 6 (pairing repulsion). Down group: decreases (radius↑, repulsion/shielding↑).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_4;