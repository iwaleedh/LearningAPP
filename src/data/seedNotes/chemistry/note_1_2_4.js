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
          ['<strong>Electron-electron repulsion (shielding)</strong>', 'More repulsion → Lower IE', 'Inner electrons repel outer electrons (like charges repel), reducing the effective nuclear attraction. At A-level, <em>electron-electron repulsion</em> is the preferred precise term — shielding is a simplified description of the same effect.']
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
      id: 'h-successive',
      type: 'heading',
      data: { text: 'Successive Ionisation Energies', level: 2 },
      terms: []
    },
    {
      id: 'callout-successive',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What Successive IEs Tell Us About Electron Structure',
        text: 'Successive IEs are the energies required to remove electrons one at a time from an already-ionised atom.<br/><br/><strong>Key patterns:</strong><br/>• Successive IEs <em>always increase</em> (each electron is removed from a more positive ion with a stronger effective nuclear charge).<br/>• A <strong>large jump</strong> between adjacent IEs indicates a <em>change of quantum shell</em> — moving from the outer shell to the next inner shell (lower energy, closer to nucleus, harder to remove).<br/><br/><strong>Example — Na (1s² 2s² 2p⁶ 3s¹, one outer electron):</strong><br/>IE₁ = 496 kJ mol⁻¹ (removes 3s¹ electron)<br/>IE₂ = 4562 kJ mol⁻¹ — <strong>massive jump</strong> (now removing from n=2 shell)<br/>IE₃–IE₉: gradual increase (removing remaining 8 electrons from n=2)<br/>IE₁₀: another big jump (now removing from n=1 shell)<br/><br/><strong>Example — Mg (1s² 2s² 2p⁶ 3s²):</strong><br/>IE₁ ≈ 738 and IE₂ ≈ 1451 kJ mol⁻¹ — relatively close (both from 3s)<br/>Big jump between IE₂ and IE₃ — confirms 2 outer electrons.<br/><br/>This pattern is the main experimental evidence for the existence of discrete electron shells.'
      },
      terms: ['Successive ionisation energies']
    },
    {
      id: 'svg-na-successive-ie',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 215" font-family="Arial,sans-serif"><text x="260" y="16" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Successive Ionisation Energies of Na (Z=11)</text><text x="260" y="30" text-anchor="middle" font-size="10" fill="#6b7280">Bar height = log10(IE / kJ mol-1). Big jumps reveal electron shell boundaries.</text><line x1="50" y1="38" x2="50" y2="168" stroke="#374151" stroke-width="1.5"/><line x1="50" y1="168" x2="515" y2="168" stroke="#374151" stroke-width="1.5"/><text x="14" y="110" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,14,110)">log10(IE)</text><rect x="52" y="138" width="28" height="30" fill="#3b82f6" rx="2"/><rect x="95" y="100" width="28" height="68" fill="#f59e0b" rx="2"/><rect x="138" y="92" width="28" height="76" fill="#f59e0b" rx="2"/><rect x="181" y="87" width="28" height="81" fill="#f59e0b" rx="2"/><rect x="224" y="81" width="28" height="87" fill="#f59e0b" rx="2"/><rect x="267" y="77" width="28" height="91" fill="#f59e0b" rx="2"/><rect x="310" y="74" width="28" height="94" fill="#f59e0b" rx="2"/><rect x="353" y="70" width="28" height="98" fill="#f59e0b" rx="2"/><rect x="396" y="68" width="28" height="100" fill="#f59e0b" rx="2"/><rect x="439" y="40" width="28" height="128" fill="#ef4444" rx="2"/><rect x="482" y="38" width="28" height="130" fill="#ef4444" rx="2"/><text x="66" y="183" text-anchor="middle" font-size="9" fill="#374151">1</text><text x="109" y="183" text-anchor="middle" font-size="9" fill="#374151">2</text><text x="152" y="183" text-anchor="middle" font-size="9" fill="#374151">3</text><text x="195" y="183" text-anchor="middle" font-size="9" fill="#374151">4</text><text x="238" y="183" text-anchor="middle" font-size="9" fill="#374151">5</text><text x="281" y="183" text-anchor="middle" font-size="9" fill="#374151">6</text><text x="324" y="183" text-anchor="middle" font-size="9" fill="#374151">7</text><text x="367" y="183" text-anchor="middle" font-size="9" fill="#374151">8</text><text x="410" y="183" text-anchor="middle" font-size="9" fill="#374151">9</text><text x="453" y="183" text-anchor="middle" font-size="9" fill="#374151">10</text><text x="496" y="183" text-anchor="middle" font-size="9" fill="#374151">11</text><text x="283" y="196" text-anchor="middle" font-size="10" fill="#374151">Ionisation number</text><text x="66" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">n=3</text><text x="246" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">n=2 shell (8 electrons)</text><text x="467" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">n=1</text><line x1="80" y1="96" x2="95" y2="96" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/><text x="87" y="90" text-anchor="middle" font-size="8" fill="#1d4ed8">jump</text><line x1="424" y1="62" x2="439" y2="62" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/><text x="431" y="56" text-anchor="middle" font-size="8" fill="#991b1b">jump</text><rect x="52" y="200" width="12" height="8" fill="#3b82f6" rx="1"/><text x="67" y="208" font-size="9" fill="#374151">n=3 (outer)</text><rect x="135" y="200" width="12" height="8" fill="#f59e0b" rx="1"/><text x="150" y="208" font-size="9" fill="#374151">n=2 shell</text><rect x="215" y="200" width="12" height="8" fill="#ef4444" rx="1"/><text x="230" y="208" font-size="9" fill="#374151">n=1 (inner)</text></svg>',
        caption: 'Successive IEs of Na on a log scale. Blue = n=3 shell (1 electron). Amber = n=2 shell (8 electrons). Red = n=1 shell (2 electrons). The large jumps indicate shell boundaries.'
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
        text: '<strong>Question:</strong> Explain why IE₂(Al) &gt; IE₂(Mg) and why IE₂(Al) &gt; IE₂(Si).<br/>(Actual values: Mg=1451, Si=1577, Al=1817 kJ mol⁻¹)<br/><br/><strong>Part (a) — Why IE₂(Al) &gt; IE₂(Mg):</strong><br/>After removing the 1st electron from each:<br/>• Mg⁺: [Ne] 3s¹ — 2nd electron removed from 3s; Z=12<br/>• Al⁺: [Ne] 3s² — 2nd electron removed from 3s; Z=13<br/>Both 2nd electrons come from the 3s subshell, but Al has higher nuclear charge (13 vs 12). Greater attraction → harder to remove → higher IE₂.<br/>∴ IE₂(Al) &gt; IE₂(Mg) ✓<br/><br/><strong>Part (b) — Why IE₂(Al) &gt; IE₂(Si):</strong><br/>After removing the 1st electron from each:<br/>• Al⁺: [Ne] 3s² — 2nd electron removed from <strong>3s</strong> subshell<br/>• Si⁺: [Ne] 3s² 3p¹ — 2nd electron removed from <strong>3p</strong> subshell<br/>The 3p subshell is at <em>higher energy</em> than 3s — 3p electrons are further from the nucleus and less tightly bound. Even though Si (Z=14) has one more proton than Al (Z=13), the subshell effect dominates: a 3p electron is easier to remove than a 3s electron.<br/>∴ IE₂(Si) &lt; IE₂(Al) ✓<br/><br/><em>Exam tip: Always identify WHICH subshell the second electron is removed from — this is usually the deciding factor when comparing IE₂ across elements.</em>'
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
      { id: 'c6', blockId: 'callout-pq-ie3', prompt: 'Which element in Period 3 has the highest second ionisation energy? Explain your reasoning in terms of electron configuration.' },
      { id: 'c7', blockId: 'callout-successive', prompt: 'Explain how successive ionisation energies provide evidence for electron shells. Why is there a large jump between IE₁ and IE₂ for Na?' }
    ],
    summaryText: 'IE₁: energy to remove 1 mol e⁻ from 1 mol X(g). Units: kJ mol⁻¹. Equation: X(g) → X⁺(g) + e⁻ — state symbols REQUIRED. Three factors: nuclear charge (+IE), atomic radius (−IE), electron-electron repulsion (−IE). Successive IEs always increase; big jumps indicate shell boundaries (evidence for shells). Across period: generally increases; dips at Group 3 (3p above 3s) and Group 6 (pairing repulsion). Down group: decreases. IE₂(Al) > IE₂(Mg) [higher Z, same 3s orbital]. IE₂(Al) > IE₂(Si) [Al removes from 3s, Si removes from 3p — subshell effect dominates].',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_4;