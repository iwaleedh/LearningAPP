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
      id: 'h-early-ie',
      type: 'heading',
      data: { text: 'IE\u2081 Values for the First Elements and Period 2', level: 2 },
      terms: []
    },
    {
      id: 'table-ie1-period2',
      type: 'comparisonTable',
      data: {
        caption: 'First ionisation energies (kJ mol\u207b\u00b9) \u2014 H and He, then the full Period 2 sequence.',
        headers: ['Element', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'],
        rows: [
          ['IE\u2081', '1310', '2370', '520', '900', '799', '1086', '1402', '1314', '1681', '2080']
        ]
      },
      terms: []
    },
    {
      id: 'callout-ie1-early',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Explaining IE\u2081 of the First Three Elements',
        text: '<strong>Hydrogen (H): 1s\u00b9 \u2014 IE\u2081 = 1310 kJ mol\u207b\u00b9</strong><br/>\u2022 Very small atom; one electron close to the nucleus.<br/>\u2022 No inner electrons provide any shielding.<br/>\u2022 High IE\u2081 despite only 1 proton \u2014 because the electron is so close to the nucleus.<br/><br/><strong>Helium (He): 1s\u00b2 \u2014 IE\u2081 = 2370 kJ mol\u207b\u00b9 (highest of any element)</strong><br/>\u2022 Same 1s orbital as hydrogen \u2014 same small distance, zero shielding.<br/>\u2022 But 2 protons instead of 1 attract both electrons far more strongly.<br/><br/><strong>Lithium (Li): 1s\u00b22s\u00b9 \u2014 IE\u2081 = 519 kJ mol\u207b\u00b9</strong><br/>\u2022 Outer electron is in the 2s orbital \u2014 much further from the nucleus.<br/>\u2022 Shielded by the 1s\u00b2 electrons (net pull from centre \u2248 +1).<br/>\u2022 Despite having 3 protons, IE\u2081 drops dramatically \u2014 distance and shielding together outweigh the extra nuclear charge.<br/><br/><em>Key comparison: Li (519 kJ mol\u207b\u00b9) vs H (1310 kJ mol\u207b\u00b9). H has only 1 proton yet higher IE\u2081 than Li with 3 protons. This demonstrates that distance from the nucleus and electron shielding can dominate over nuclear charge.</em>'
      },
      terms: []
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
      id: 'list-period',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>General trend:</strong> IE₁ increases across a period (e.g. Period 3: Na to Ar).',
          'Nuclear charge (Z) increases by 1 for each successive element.',
          'Additional electrons enter the <strong>same quantum shell</strong> (n = 3 in Period 3), so shielding and distance from nucleus remain approximately constant.',
          'Effective nuclear charge (Z<sub>eff</sub>) therefore increases → stronger attraction on outer electron → harder to remove → higher IE₁.',
          'Two anomalous dips occur: at Group 3 (Al) and Group 6 (S) — see callout below.'
        ]
      },
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
      id: 'svg-period3-ie',
      type: 'svg',
      data: {
        caption: 'Figure: First ionisation energies across Period 3 (kJ mol⁻¹). Orange bars = anomalous dips at Al (Dip 1, Group 3) and S (Dip 2, Group 6).',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 240" font-family="Arial,sans-serif"><text x="215" y="16" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">First Ionisation Energies — Period 3</text><line x1="50" y1="20" x2="50" y2="178" stroke="#374151" stroke-width="1.5"/><polygon points="50,18 46,28 54,28" fill="#374151"/><line x1="50" y1="178" x2="415" y2="178" stroke="#374151" stroke-width="1.5"/><text x="14" y="99" text-anchor="middle" font-size="10" fill="#374151" transform="rotate(-90,14,99)">IE&#x2081; / kJ mol&#x207B;&#xB9;</text><line x1="45" y1="136" x2="50" y2="136" stroke="#94a3b8"/><text x="43" y="139" text-anchor="end" font-size="9" fill="#64748b">500</text><line x1="45" y1="93" x2="50" y2="93" stroke="#94a3b8"/><text x="43" y="96" text-anchor="end" font-size="9" fill="#64748b">1000</text><line x1="45" y1="50" x2="50" y2="50" stroke="#94a3b8"/><text x="43" y="53" text-anchor="end" font-size="9" fill="#64748b">1500</text><line x1="50" y1="136" x2="415" y2="136" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/><line x1="50" y1="93" x2="415" y2="93" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/><line x1="50" y1="50" x2="415" y2="50" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/><rect x="55" y="136" width="32" height="42" fill="#3b82f6" rx="2" opacity="0.85"/><text x="71" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">Na</text><text x="71" y="203" text-anchor="middle" font-size="8" fill="#64748b">496</text><rect x="98" y="115" width="32" height="63" fill="#3b82f6" rx="2" opacity="0.85"/><text x="114" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">Mg</text><text x="114" y="203" text-anchor="middle" font-size="8" fill="#64748b">738</text><rect x="141" y="129" width="32" height="49" fill="#78350f" rx="2" opacity="0.9"/><text x="157" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">Al</text><text x="157" y="203" text-anchor="middle" font-size="8" fill="#64748b">577</text><text x="157" y="119" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">&#x25BC; Dip 1</text><text x="157" y="127" text-anchor="middle" font-size="7" fill="#b45309">3p above 3s</text><rect x="184" y="111" width="32" height="67" fill="#3b82f6" rx="2" opacity="0.85"/><text x="200" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">Si</text><text x="200" y="203" text-anchor="middle" font-size="8" fill="#64748b">786</text><rect x="227" y="92" width="32" height="86" fill="#3b82f6" rx="2" opacity="0.85"/><text x="243" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">P</text><text x="243" y="203" text-anchor="middle" font-size="8" fill="#64748b">1012</text><rect x="270" y="93" width="32" height="85" fill="#78350f" rx="2" opacity="0.9"/><text x="286" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">S</text><text x="286" y="203" text-anchor="middle" font-size="8" fill="#64748b">1000</text><text x="286" y="79" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">&#x25BC; Dip 2</text><text x="286" y="87" text-anchor="middle" font-size="7" fill="#b45309">paired e&#x207B; repulsion</text><rect x="313" y="72" width="32" height="106" fill="#3b82f6" rx="2" opacity="0.85"/><text x="329" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">Cl</text><text x="329" y="203" text-anchor="middle" font-size="8" fill="#64748b">1251</text><rect x="356" y="49" width="32" height="129" fill="#3b82f6" rx="2" opacity="0.85"/><text x="372" y="191" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">Ar</text><text x="372" y="203" text-anchor="middle" font-size="8" fill="#64748b">1521</text><rect x="55" y="217" width="12" height="9" rx="2" fill="#3b82f6" opacity="0.85"/><text x="71" y="226" font-size="9" fill="#374151">General trend (increases)</text><rect x="215" y="217" width="12" height="9" rx="2" fill="#78350f" opacity="0.9"/><text x="231" y="226" font-size="9" fill="#374151">Anomalous dip</text></svg>'
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
      id: 'list-group',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'IE₁ <strong>decreases</strong> down a group (e.g. Group 1: Li → Na → K → Rb → Cs).',
          'Each successive element has its outer electron in a <strong>higher quantum shell</strong> (n increases) → greater distance from nucleus → weaker electrostatic attraction.',
          'More inner electron shells → greater <strong>electron-electron repulsion</strong> experienced by the outer electron.',
          'Both increased distance and increased repulsion outweigh the increase in nuclear charge going down the group.',
          'Result: outer electron less tightly held → lower energy needed to remove it → lower IE₁.'
        ]
      },
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
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" font-family="Arial,sans-serif"><text x="260" y="16" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Successive Ionisation Energies of Na (Z=11)</text><text x="260" y="30" text-anchor="middle" font-size="10" fill="#6b7280">Bar height = log10(IE / kJ mol-1). Big jumps reveal electron shell boundaries.</text><line x1="50" y1="38" x2="50" y2="168" stroke="#374151" stroke-width="1.5"/><line x1="50" y1="168" x2="515" y2="168" stroke="#374151" stroke-width="1.5"/><text x="14" y="110" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,14,110)">log10(IE)</text><rect x="52" y="138" width="28" height="30" fill="#3b82f6" rx="2"/><rect x="95" y="100" width="28" height="68" fill="#78350f" rx="2"/><rect x="138" y="92" width="28" height="76" fill="#78350f" rx="2"/><rect x="181" y="87" width="28" height="81" fill="#78350f" rx="2"/><rect x="224" y="81" width="28" height="87" fill="#78350f" rx="2"/><rect x="267" y="77" width="28" height="91" fill="#78350f" rx="2"/><rect x="310" y="74" width="28" height="94" fill="#78350f" rx="2"/><rect x="353" y="70" width="28" height="98" fill="#78350f" rx="2"/><rect x="396" y="68" width="28" height="100" fill="#78350f" rx="2"/><rect x="439" y="40" width="28" height="128" fill="#ef4444" rx="2"/><rect x="482" y="38" width="28" height="130" fill="#ef4444" rx="2"/><text x="66" y="183" text-anchor="middle" font-size="9" fill="#374151">1</text><text x="109" y="183" text-anchor="middle" font-size="9" fill="#374151">2</text><text x="152" y="183" text-anchor="middle" font-size="9" fill="#374151">3</text><text x="195" y="183" text-anchor="middle" font-size="9" fill="#374151">4</text><text x="238" y="183" text-anchor="middle" font-size="9" fill="#374151">5</text><text x="281" y="183" text-anchor="middle" font-size="9" fill="#374151">6</text><text x="324" y="183" text-anchor="middle" font-size="9" fill="#374151">7</text><text x="367" y="183" text-anchor="middle" font-size="9" fill="#374151">8</text><text x="410" y="183" text-anchor="middle" font-size="9" fill="#374151">9</text><text x="453" y="183" text-anchor="middle" font-size="9" fill="#374151">10</text><text x="496" y="183" text-anchor="middle" font-size="9" fill="#374151">11</text><text x="283" y="196" text-anchor="middle" font-size="10" fill="#374151">Ionisation number</text><text x="66" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">n=3</text><text x="246" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">n=2 shell (8 electrons)</text><text x="467" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">n=1</text><line x1="80" y1="96" x2="95" y2="96" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/><text x="87" y="90" text-anchor="middle" font-size="8" fill="#1d4ed8">jump</text><line x1="424" y1="62" x2="439" y2="62" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/><text x="431" y="56" text-anchor="middle" font-size="8" fill="#991b1b">jump</text><rect x="52" y="200" width="12" height="8" fill="#3b82f6" rx="1"/><text x="67" y="208" font-size="9" fill="#374151">n=3 (outer)</text><rect x="135" y="200" width="12" height="8" fill="#78350f" rx="1"/><text x="150" y="208" font-size="9" fill="#374151">n=2 shell</text><rect x="215" y="200" width="12" height="8" fill="#ef4444" rx="1"/><text x="230" y="208" font-size="9" fill="#374151">n=1 (inner)</text></svg>',
        caption: 'Successive IEs of Na on a log scale. Blue = n=3 shell (1 electron). Amber = n=2 shell (8 electrons). Red = n=1 shell (2 electrons). The large jumps indicate shell boundaries.'
      },
      terms: []
    },
    {
      id: 'h-transition-ie',
      type: 'heading',
      data: { text: 'IE\u2081 Across the Transition Metals (d-block)', level: 2 },
      terms: []
    },
    {
      id: 'table-ie1-transition',
      type: 'comparisonTable',
      data: {
        caption: 'First ionisation energies across the first d-block series (kJ mol\u207b\u00b9). Values stay roughly constant from Sc to Cu, then rise sharply at Zn.',
        headers: ['Element', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'],
        rows: [
          ['IE\u2081', '631', '658', '650', '652', '717', '762', '758', '737', '745', '908']
        ]
      },
      terms: []
    },
    {
      id: 'callout-transition-ie',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why IE\u2081 is Roughly Constant Across the Transition Metals (Sc \u2192 Cu)',
        text: '<strong>All transition metals: [Ar]3d\u207f4s\u00b2</strong> (except Cr [Ar]3d\u20754s\u00b9 and Cu [Ar]3d\u00b9\u20704s\u00b9). The electron removed in IE\u2081 always comes from the <strong>4s orbital</strong> (outermost shell).<br/><br/><strong>Why IE\u2081 stays roughly constant from Sc (Z=21) to Cu (Z=29):</strong><br/>\u2022 Going Sc \u2192 Cu, nuclear charge increases by 8 protons.<br/>\u2022 The number of 3d electrons also increases by 8.<br/>\u2022 The 3d electrons are closer to the nucleus than 4s, so they partially screen the 4s electrons from the increasing nuclear charge.<br/>\u2022 Effect of extra proton \u2248 cancelled by extra 3d electron screening \u2192 IE\u2081 stays roughly constant.<br/><br/><strong>The rise from Cu to Zn:</strong><br/>Cu: [Ar]3d\u00b9\u20704s\u00b9 \u2192 IE\u2081 = 745 kJ mol\u207b\u00b9 | Zn: [Ar]3d\u00b9\u20704s\u00b2 \u2192 IE\u2081 = 908 kJ mol\u207b\u00b9<br/>Both remove a 4s electron with identical 3d\u00b9\u2070 screening present. The extra proton in Zn pulls 4s more tightly \u2192 higher IE\u2081.<br/><br/><em>Important: In actual transition metal atoms, 4s has HIGHER energy than 3d (opposite to Aufbau filling order). This means 4s electrons are always removed first when forming ions \u2014 e.g. Fe\u00b2\u207a removes 4s\u00b2 first, giving [Ar]3d\u2076, not [Ar]4s\u00b23d\u2074.</em>'
      },
      terms: ['Transition metal', '4s orbital']
    },
    {
      id: 'callout-ie-reactivity',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Link Between IE\u2081 and Reactivity of Group 1 Metals',
        text: '<strong>Lower IE\u2081 \u2192 easier to form M\u207a(g) \u2192 lower activation energy \u2192 more reactive</strong><br/><br/>Group 1 metals must form M\u207a ions to react. A lower IE\u2081 means less energy is needed to remove the outer electron, so reactions proceed more readily.<br/><br/><strong>Group 1 IE\u2081 values (kJ mol\u207b\u00b9):</strong><br/>Li (520) > Na (496) > K (419) > Rb (403) > Cs (375)<br/>Reactivity: Li &lt; Na &lt; K &lt; Rb &lt; Cs (increasing down the group). ✓<br/><br/><em>Caution: IE\u2081 alone is not the complete explanation for reactivity. The full thermodynamic cycle includes enthalpy of atomisation, hydration enthalpy (in aqueous reactions) and lattice enthalpy. However, within the same group these terms change less dramatically than IE\u2081, so IE\u2081 is the dominant comparative factor.</em>'
      },
      terms: ['Reactivity', 'Group 1']
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
    },
    {
      id: 'svg-ie1-factors-group',
      type: 'svg',
      data: {
        caption: 'Cross-topic visual: the three factors controlling IE₁ illustrated on an atom (links to Atomic Structure 2.0), plus IE₁ trend down Group 1 showing how increasing atomic radius dominates.',
        svg: `<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif">
  <line x1="308" y1="8" x2="308" y2="292" stroke="#e5e7eb" stroke-width="1.5"/>
  <rect x="8" y="8" width="292" height="284" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="8" y="8" width="292" height="28" rx="8" fill="#6366f1" fill-opacity="0.5"/>
  <rect x="8" y="26" width="292" height="10" fill="#6366f1" fill-opacity="0.5"/>
  <text x="154" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">Three Factors Controlling IE₁</text>
  <circle cx="154" cy="160" r="30" fill="#1e293b" opacity="1"/>
  <text x="154" y="156" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e293b">Nucleus</text>
  <text x="154" y="168" text-anchor="middle" font-size="8" fill="#1e293b">Z protons</text>
  <circle cx="154" cy="160" r="60" fill="none" stroke="#6366f1" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="154" cy="160" r="85" fill="none" stroke="#6366f1" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="154" cy="75" r="6" fill="#ef4444"/>
  <text x="154" y="72" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="bold">e⁻</text>
  <defs>
    <marker id="arr-up" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M1,5 L3,0 L5,5 Z" fill="#374151"/></marker>
    <marker id="arr-dn" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto"><path d="M1,1 L3,6 L5,1 Z" fill="#374151"/></marker>
    <marker id="arr-rt" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,1 L5,3 L0,5 Z" fill="#374151"/></marker>
  </defs>
  <line x1="154" y1="130" x2="154" y2="100" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/>
  <rect x="16" y="46" width="116" height="46" rx="5" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="74" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">① Nuclear charge (Z)</text>
  <text x="74" y="73" text-anchor="middle" font-size="9" fill="#374151">Higher Z → stronger</text>
  <text x="74" y="85" text-anchor="middle" font-size="9" fill="#374151">pull on electrons → ↑IE</text>
  <line x1="132" y1="79" x2="148" y2="120" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr-dn)"/>
  <rect x="16" y="200" width="116" height="44" rx="5" fill="#3d1212" stroke="#ef4444" stroke-width="1.5"/>
  <text x="74" y="214" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">② Atomic radius (r)</text>
  <text x="74" y="227" text-anchor="middle" font-size="9" fill="#374151">Larger r → e⁻ further</text>
  <text x="74" y="239" text-anchor="middle" font-size="9" fill="#374151">from nucleus → ↓IE</text>
  <line x1="132" y1="222" x2="148" y2="200" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr-up)"/>
  <rect x="172" y="200" width="120" height="44" rx="5" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="232" y="214" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">③ Shielding</text>
  <text x="232" y="227" text-anchor="middle" font-size="9" fill="#374151">Inner e⁻ shield outer</text>
  <text x="232" y="239" text-anchor="middle" font-size="9" fill="#374151">e⁻ from nucleus → ↓IE</text>
  <line x1="210" y1="207" x2="183" y2="192" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr-dn)"/>
  <rect x="62" y="265" width="184" height="20" rx="4" fill="#44370a"/>
  <text x="154" y="279" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">Going down a group: r↑ and shielding↑ dominate over Z↑</text>
  <rect x="316" y="8" width="296" height="284" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="316" y="8" width="296" height="28" rx="8" fill="#ef4444" fill-opacity="0.4"/>
  <rect x="316" y="26" width="296" height="10" fill="#ef4444" fill-opacity="0.4"/>
  <text x="464" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">IE₁ Trend Down Group 1</text>
  <text x="324" y="52" font-size="10" fill="#374151" font-weight="bold">Element</text>
  <text x="394" y="52" text-anchor="middle" font-size="10" fill="#374151" font-weight="bold">IE₁ / kJ mol⁻¹</text>
  <text x="510" y="52" font-size="10" fill="#374151" font-weight="bold">Reason for ↓</text>
  <line x1="324" y1="56" x2="604" y2="56" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="324" y="58" width="28" height="26" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="338" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Li</text>
  <text x="394" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">520</text>
  <rect x="360" y="64" width="104" height="12" rx="2" fill="#6366f1" opacity="0.55"/>
  <text x="480" y="75" font-size="9" fill="#374151">2 shells, r small</text>
  <line x1="324" y1="86" x2="604" y2="86" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="324" y="88" width="28" height="26" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="338" y="105" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Na</text>
  <text x="394" y="105" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">496</text>
  <rect x="360" y="94" width="99" height="12" rx="2" fill="#6366f1" opacity="0.43"/>
  <text x="480" y="105" font-size="9" fill="#374151">3 shells, n=3</text>
  <line x1="324" y1="116" x2="604" y2="116" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="324" y="118" width="28" height="26" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="338" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">K</text>
  <text x="394" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">419</text>
  <rect x="360" y="124" width="84" height="12" rx="2" fill="#6366f1" opacity="0.36"/>
  <text x="480" y="135" font-size="9" fill="#374151">4 shells, more shielding</text>
  <line x1="324" y1="146" x2="604" y2="146" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="324" y="148" width="28" height="26" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="338" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Rb</text>
  <text x="394" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">403</text>
  <rect x="360" y="154" width="81" height="12" rx="2" fill="#6366f1" opacity="0.32"/>
  <text x="480" y="165" font-size="9" fill="#374151">5 shells, r larger</text>
  <line x1="324" y1="176" x2="604" y2="176" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="324" y="178" width="28" height="26" rx="3" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="338" y="195" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Cs</text>
  <text x="394" y="195" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">376</text>
  <rect x="360" y="184" width="75" height="12" rx="2" fill="#6366f1" opacity="0.26"/>
  <text x="480" y="195" font-size="9" fill="#374151">6 shells, r largest</text>
  <line x1="324" y1="206" x2="604" y2="206" stroke="#e2e8f0" stroke-width="1"/>
  <text x="360" y="224" font-size="9" fill="#374151">← bar width ∝ IE₁ value</text>
  <rect x="324" y="234" width="272" height="56" rx="6" fill="#3d1212" stroke="#ef4444" stroke-width="1"/>
  <text x="460" y="250" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">Why IE₁ decreases down Group 1:</text>
  <text x="336" y="264" font-size="9" fill="#374151">• Each period adds a new shell → r increases</text>
  <text x="336" y="277" font-size="9" fill="#374151">• More inner shells → greater shielding</text>
  <text x="336" y="290" font-size="9" fill="#374151">• These effects outweigh the increase in Z</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'checklist-1-2-4',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define IE₁ and write the equation for element X with all gaseous state symbols', checked: false },
          { text: 'State the three factors affecting IE and explain the effect of each (nuclear charge, radius, electron-electron repulsion)', checked: false },
          { text: 'Explain why IE₁ generally increases across Period 3 (Z↑, same shell, Zeff↑)', checked: false },
          { text: 'Explain Dip 1 (Mg→Al): Al has outer electron in higher-energy 3p subshell (above 3s)', checked: false },
          { text: 'Explain Dip 2 (P→S): S\'s 4th 3p electron must pair — extra repulsion lowers IE₁', checked: false },
          { text: 'Explain why IE₁ decreases down Group 1 (outer electron further away, more inner shells, outweighs Z↑)', checked: false },
          { text: 'Distinguish "electron-electron repulsion" from "shielding" — use the more precise term', checked: false },
          { text: 'Write equations for successive IEs: nth IE starts from E^(n−1)+(g)', checked: false },
          { text: 'Interpret successive IE data: identify shell boundaries from large jumps', checked: false },
          { text: 'Explain why IE₁ is roughly constant across Sc→Cu (extra 3d screens extra proton)', checked: false },
          { text: 'State which Period 3 element has the highest 2nd IE (Na) and explain why (2nd e⁻ from inner n=2 shell)', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'IE₁ = energy to remove 1 mol e⁻ from 1 mol X(g); equation: X(g) → X⁺(g) + e⁻; units kJ mol⁻¹; all state symbols required. Three factors: ↑ nuclear charge → ↑ IE; ↑ atomic radius → ↓ IE; ↑ electron-electron repulsion → ↓ IE. Across Period 3: IE₁ generally increases (Z↑, all electrons added to same n=3 shell, Zeff rises). Dip 1 (Mg→Al): Al outer e⁻ in 3p (higher energy/further than 3s of Mg). Dip 2 (P→S): S has paired 3p e⁻ — extra repulsion makes it easier to remove. Down Group 1: IE₁ decreases (outer e⁻ in higher shell = further + more inner shells shielding; both outweigh extra protons). Successive IEs always increase; large jump = shell boundary (Na: huge jump IE₁→IE₂ confirming 1 outer e⁻). Transition metals Sc→Cu: roughly constant IE₁ (extra 3d e⁻ screens extra proton). Na has highest 2nd IE in Period 3 (2nd e⁻ removed from inner n=2 shell).'
      },
      terms: []
    }
  ],
  presentationSlides: [
    {
      layout: 'bento',
      title: 'Ionisation Energies',
      subtitle: 'WCH11 — Chemistry Topic 2.4',
      elements: [
        { delay: 0, colSpan: 2, icon: '💡', title: 'First Ionisation Energy (IE₁)', html: '<strong>Energy required to remove 1 mol of electrons from 1 mol of gaseous atoms:</strong><br/>X(g) → X<sup>+</sup>(g) + e⁻ ΔH = IE₁<br/>Always endothermic (+ve). Units: kJ mol⁻¹.' },
        { delay: 1, colSpan: 1, icon: '📐', title: '3 Factors Affecting IE₁', html: '1. <strong>Atomic radius:</strong> larger → lower IE₁.<br/>2. <strong>Electron shielding:</strong> more inner shells → lower IE₁.<br/>3. <strong>Nuclear charge (Z):</strong> more protons → higher IE₁.' },
        { delay: 2, colSpan: 1, icon: '📈', title: 'Across Period 3', html: 'Generally <strong>increases</strong> Na → Ar.<br/><strong>Dip at Al</strong>: 3p electron screened by 3s — easier to remove.<br/><strong>Dip at S</strong>: paired 3p electron has extra repulsion.' },
        { delay: 3, colSpan: 2, icon: '🔬', title: 'Successive IEs — Shell Evidence', html: 'IEs increase as each electron is removed (atom becomes more positive).<br/><strong>Large jumps</strong> in successive IEs indicate removal from an inner, lower-energy shell.<br/>e.g. For Na: IE₂/IE₁ ratio ≈ 10× — confirms one electron in the outer 3s shell.' },
      ]
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
      { id: 'c7', blockId: 'callout-successive', prompt: 'Explain how successive ionisation energies provide evidence for electron shells. Why is there a large jump between IE\u2081 and IE\u2082 for Na?' },
      { id: 'c8', blockId: 'callout-transition-ie', prompt: 'Why is the first ionisation energy roughly constant across the transition metals from Sc to Cu? What causes the rise at Zn? Which orbital is always removed first in transition metals, and why?' },
      { id: 'c9', blockId: 'callout-ie-reactivity', prompt: 'How does IE\u2081 relate to the reactivity of Group 1 metals? Give IE\u2081 values for Li and Cs. State one limitation of using IE\u2081 alone to explain reactivity.' }
    ],
    summaryText: 'IE\u2081: energy to remove 1 mol e\u207b from 1 mol X(g). Units: kJ mol\u207b\u00b9. Equation: X(g) \u2192 X\u207a(g) + e\u207b \u2014 state symbols REQUIRED. Three factors: nuclear charge (+IE), atomic radius (\u2212IE), electron-electron repulsion (\u2212IE). H (1310), He (2370 \u2014 highest), Li drops to 520 (outer e\u207b in n=2, shielded). Successive IEs always increase; big jumps indicate shell boundaries. Across period: generally increases; dips at Group 3 (3p above 3s) and Group 6 (pairing repulsion). Down group: decreases. IE\u2082(Al) > IE\u2082(Mg) [higher Z, same 3s orbital]. IE\u2082(Al) > IE\u2082(Si) [Al removes from 3s, Si removes from 3p \u2014 subshell effect dominates]. Transition metals: roughly constant IE\u2081 Sc\u2192Cu (extra 3d screens extra proton); rise at Zn (extra proton, same 3d\u00b9\u2070). Always lose 4s first. IE\u2081 + reactivity: lower IE\u2081 \u2192 easier M\u207a formation \u2192 lower activation energy \u2192 more reactive (Li &lt; Na &lt; K &lt; Rb &lt; Cs).',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_4;