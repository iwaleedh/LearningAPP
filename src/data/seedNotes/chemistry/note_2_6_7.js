/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 7
 * "Bond enthalpy and reactivity"
 * Source: Pearson Edexcel IAL Chemistry — WCH12 Section 6D
 */
export const note_chemistry_2_6_7 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Explain how bond enthalpy governs chemical reactivity. Distinguish thermodynamic from kinetic stability. Use C–X bond enthalpy data to explain the halogenoalkane reactivity trend, and explain why bond enthalpy dominates over bond polarity in determining reaction rate.' },
            terms: []
        },

        // ─ SECTION A: BOND ENTHALPY AND REACTIVITY ─────────────────
        {
            id: 'h-reactivity',
            type: 'heading',
            data: { text: 'Bond Enthalpy and Chemical Reactivity', level: 2 },
            terms: []
        },
        {
            id: 'callout-key-reactivity',
            type: 'callout',
            data: {
                style: 'key',
                title: 'How Bond Enthalpy Controls Reactivity',
                text: '• Bond enthalpy = energy required to break 1 mol of a covalent bond in the gaseous state; always <strong>endothermic (+)</strong>.<br/>• <strong>Higher bond enthalpy → stronger bond → higher activation energy (E<sub>a</sub>) required → slower reaction rate</strong> at a given temperature.<br/>• At a fixed temperature, only a fraction of molecules have kinetic energy ≥ E<sub>a</sub>; high E<sub>a</sub> means very few productive collisions → very slow rate.<br/>• A molecule is <strong>kinetically stable</strong> when its bonds are so strong that E<sub>a</sub> is barely attainable under normal conditions, even if the reaction is thermodynamically favourable (ΔH < 0).<br/>• Summary rule: bond enthalpy ↑ → E<sub>a</sub> ↑ → reactivity ↓.'
            },
            terms: ['Kinetic stability', 'Activation energy']
        },
        {
            id: 'callout-stability',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Thermodynamic Stability vs Kinetic Stability',
                text: '• <strong>Thermodynamic stability:</strong> indicates whether products are more stable (lower energy) than reactants; measured by sign of ΔH or ΔG. Tells us <em>if</em> a reaction is energetically favourable.<br/>• <strong>Kinetic stability:</strong> indicates how fast a reaction proceeds; determined by E<sub>a</sub>, which is largely governed by bond enthalpies. Tells us <em>how readily</em> a reaction occurs.<br/>• <strong>Key insight:</strong> a compound can be thermodynamically unstable yet kinetically stable if E<sub>a</sub> is very high.<br/>• <strong>Diamond example:</strong> diamond is thermodynamically less stable than graphite (ΔG > 0 for conversion), yet does not convert at room temperature because breaking C–C bonds in the diamond lattice requires enormous energy → kinetically stable.<br/>• <strong>N₂ example:</strong> N≡N bond enthalpy = 945 kJ mol⁻¹ (one of the highest for any covalent bond) → N₂ is kinetically extremely stable; barely reacts at ambient conditions despite many N₂ reactions having favourable ΔH.'
            },
            terms: ['Thermodynamic stability', 'Kinetic stability']
        },

        // ─ SECTION B: ALKANES ───────────────────────────────────────────────────
        {
            id: 'h-alkanes',
            type: 'heading',
            data: { text: 'Alkanes: Kinetically Stable and Unreactive', level: 2 },
            terms: []
        },
        {
            id: 'list-alkanes',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Alkanes contain <strong>only σ (sigma) C–H and C–C bonds</strong>; no π bonds and no lone pairs on carbon atoms.',
                    'E(C–H) = 413 kJ mol⁻¹ and E(C–C) = 347 kJ mol⁻¹ — both strong; high E<sub>a</sub> required to break either bond.',
                    'Both bonds are <strong>non-polar</strong>: ΔEN(C–H) ≈ 0.4 (negligible dipole); ΔEN(C–C) = 0 (identical atoms).',
                    'Non-polar bonds carry no significant δ+ or δ− centres → no attraction for nucleophiles (electron-pair donors) or electrophiles (electron-pair acceptors) → no polar reaction pathway available.',
                    'Alkanes only undergo two types of reaction under forcing conditions:<br/>&nbsp;&nbsp;• <strong>Combustion</strong> — requires ignition (heat/flame) to supply initial activation energy.<br/>&nbsp;&nbsp;• <strong>Free-radical substitution</strong> — requires UV light to initiate homolytic fission of Cl–Cl or Br–Br bonds.',
                    'Free-radical substitution mechanism: <strong>initiation</strong> (UV light homolytically breaks X–X bond, forming two radicals) → <strong>propagation</strong> (chain-carrying steps with alkyl and halogen radicals) → <strong>termination</strong> (two radicals combine, ending the chain).'
                ]
            },
            terms: ['Free-radical substitution', 'Sigma bond', 'Homolytic fission']
        },

        // ─ SECTION C: ALKENES VS ALKANES ─────────────────────────────────
        {
            id: 'h-alkenes',
            type: 'heading',
            data: { text: 'Alkenes: More Reactive than Alkanes', level: 2 },
            terms: []
        },
        {
            id: 'callout-alkenes',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why the C=C π Bond Increases Reactivity',
                text: '• C=C double bond = 1 σ bond + 1 π bond. E(C=C) = 614 kJ mol⁻¹; E(C–C) = 347 kJ mol⁻¹.',
            },
            terms: []
        },
        {
            id: 'list-alkenes',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'The π bond energy ≈ 614 − 347 = <strong>267 kJ mol⁻¹</strong> — significantly weaker than the σ component; easier to break.',
                    'π bond electron density is concentrated <strong>above and below</strong> the internuclear axis (not between the nuclei) → exposed and accessible to electrophilic attack.',
                    'Alkenes undergo <strong>electrophilic addition</strong> readily (e.g. Br₂, HBr, H₂SO₄, H₂O) at room temperature without requiring UV light or ignition.',
                    'Alkanes cannot undergo electrophilic addition (no π bond, no exposed electrons).',
                    '<strong>Bond enthalpy comparison:</strong> the easily broken π bond gives alkenes a much lower E<sub>a</sub> for addition reactions compared to the very high E<sub>a</sub> needed to break C–H or C–C in alkanes.'
                ]
            },
            terms: ['Pi bond', 'Electrophilic addition']
        },

        // ─ SECTION D: HALOGENOALKANES ─────────────────────────────────────────
        {
            id: 'h-halogenoalkanes',
            type: 'heading',
            data: { text: 'Halogenoalkanes: C–X Bond Enthalpy Trend', level: 2 },
            terms: []
        },
        {
            id: 'list-halo-intro',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Halogenoalkanes contain a C–X bond (X = F, Cl, Br, I) which undergoes <strong>nucleophilic substitution</strong>: the C–X bond is broken heterolytically and a nucleophile (e.g. OH⁻) attacks the δ+ carbon.',
                    'The rate of nucleophilic substitution depends primarily on <strong>how easily the C–X bond breaks</strong>, i.e. the bond enthalpy.<br/>Lower bond enthalpy → lower E<sub>a</sub> → faster reaction rate.',
                    'Bond enthalpy decreases down Group 7 (C–F > C–Cl > C–Br > C–I) because the bonding atomic orbital of X becomes larger and more diffuse → weaker overlap with the C orbital.<br/>Reactivity order: <strong>C–I > C–Br > C–Cl > C–F</strong>.'
                ]
            },
            terms: ['Nucleophilic substitution', 'Heterolytic fission']
        },
        {
            id: 'table-halogens',
            type: 'comparisonTable',
            data: {
                caption: 'C–X bond enthalpies and reactivity in nucleophilic substitution (Edexcel IAL data)',
                headers: ['Bond', 'E(C–X) / kJ mol⁻¹', 'Bond polarity (Cδ+–Xδ−)', 'Rate of nucleophilic substitution'],
                rows: [
                    ['C–F', '467', 'Highest (F most electronegative, EN = 4.0)', 'Very slow — practically unreactive under normal conditions'],
                    ['C–Cl', '340', 'High (EN = 3.2)', 'Slow'],
                    ['C–Br', '280', 'Moderate (EN = 3.0)', 'Fast'],
                    ['C–I', '228', 'Lowest (I EN ≈ C EN = 2.7 vs 2.5)', 'Very fast']
                ]
            },
            terms: ['Bond enthalpy', 'Electronegativity']
        },

        // ─ SECTION E: BOND POLARITY VS BOND ENTHALPY ────────────────────
        {
            id: 'h-polarity',
            type: 'heading',
            data: { text: 'Bond Polarity vs Bond Enthalpy: Which Controls Rate?', level: 2 },
            terms: []
        },
        {
            id: 'callout-polarity',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bond Polarity in C–X Bonds',
                text: '• Electronegativity (EN) decreases down Group 7: F (4.0) > Cl (3.2) > Br (3.0) > I (2.7). Carbon EN = 2.5.<br/>• <strong>C–F:</strong> largest EN difference (1.5) → highest δ+ on C → C is most electrophilic → nucleophilic attack at C should be most favourable.<br/>• <strong>C–I:</strong> smallest EN difference (0.2) → C is least δ+ → nucleophilic attack at C is least favoured on polarity grounds alone.<br/>• <strong>BUT:</strong> experimental observation shows C–I reacts <em>fastest</em> and C–F is practically <em>inert</em> to nucleophilic substitution.<br/>• Conclusion: <strong>bond enthalpy, not bond polarity, is the dominant factor</strong> controlling the rate of nucleophilic substitution in halogenoalkanes.'
            },
            terms: ['Bond polarity', 'Electronegativity']
        },
        {
            id: 'callout-polarity-vs-enthalpy',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Bond Polarity vs Bond Enthalpy — Summary Comparison',
                text: '<strong>Polarity prediction:</strong><br/>• C–F most polar (Cδ+–Fδ−) → most electrophilic C → should attract nucleophiles most strongly → predict C–F reacts fastest.<br/><br/><strong>Experimental result:</strong><br/>• Reactivity order: C–I >> C–Br >> C–Cl >> C–F (opposite of polarity prediction).<br/><br/><strong>Explanation:</strong><br/>• C–F (467 kJ mol⁻¹) is the strongest C–X bond → very high E<sub>a</sub> for bond breaking → reaction very slow regardless of polarity.<br/>• C–I (228 kJ mol⁻¹) is the weakest C–X bond → low E<sub>a</sub> → reaction is fast despite low polarity.<br/><br/><strong>Conclusion: bond enthalpy is the dominant factor; bond polarity plays only a minor role in determining the rate of nucleophilic substitution.</strong>'
            },
            terms: ['Bond polarity', 'Bond enthalpy']
        },
        {
            id: 'svg-cx',
            type: 'svg',
            data: {
                caption: 'C–X mean bond enthalpies. Bars shorten from C–F to C–I, showing bond enthalpy decreases down Group 7. Reactivity in nucleophilic substitution increases in the opposite direction.',
                svg: '<svg viewBox="0 0 500 265" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><defs><marker id="r-arr" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto"><polygon points="0,0 8,3.5 0,7" fill="#4f46e5"/></marker></defs><text x="245" y="17" text-anchor="middle" font-weight="bold" font-size="13" fill="#374151">C–X Mean Bond Enthalpies and Reactivity Trend</text><line x1="88" y1="27" x2="88" y2="208" stroke="#374151" stroke-width="1.5"/><rect x="90" y="34" width="305" height="33" rx="3" fill="#dc2626" opacity="0.82"/><text x="83" y="55" text-anchor="end" fill="#374151" font-size="12" font-weight="bold">C–F</text><text x="243" y="55" text-anchor="middle" fill="white" font-size="11" font-weight="bold">467 kJ mol⁻¹</text><rect x="90" y="76" width="222" height="33" rx="3" fill="#ea580c" opacity="0.82"/><text x="83" y="97" text-anchor="end" fill="#374151" font-size="12" font-weight="bold">C–Cl</text><text x="201" y="97" text-anchor="middle" fill="white" font-size="11" font-weight="bold">340 kJ mol⁻¹</text><rect x="90" y="118" width="183" height="33" rx="3" fill="#d97706" opacity="0.82"/><text x="83" y="139" text-anchor="end" fill="#374151" font-size="12" font-weight="bold">C–Br</text><text x="182" y="139" text-anchor="middle" fill="white" font-size="11" font-weight="bold">280 kJ mol⁻¹</text><rect x="90" y="160" width="149" height="33" rx="3" fill="#16a34a" opacity="0.82"/><text x="83" y="181" text-anchor="end" fill="#374151" font-size="12" font-weight="bold">C–I</text><text x="165" y="181" text-anchor="middle" fill="white" font-size="11" font-weight="bold">228 kJ mol⁻¹</text><line x1="88" y1="208" x2="400" y2="208" stroke="#9ca3af" stroke-width="1"/><text x="244" y="222" text-anchor="middle" fill="#6b7280" font-size="10">Mean bond enthalpy / kJ mol⁻¹</text><text x="455" y="36" text-anchor="middle" fill="#6b7280" font-size="9">Least</text><text x="455" y="47" text-anchor="middle" fill="#6b7280" font-size="9">reactive</text><line x1="455" y1="54" x2="455" y2="182" stroke="#4f46e5" stroke-width="2.5" marker-end="url(#r-arr)"/><text x="455" y="198" text-anchor="middle" fill="#4f46e5" font-size="9" font-weight="bold">Most</text><text x="455" y="208" text-anchor="middle" fill="#4f46e5" font-size="9" font-weight="bold">reactive</text><text x="10" y="250" fill="#6b7280" font-size="9" font-style="italic">C–I bond weakest → lowest activation energy → fastest nucleophilic substitution.</text><text x="10" y="260" fill="#6b7280" font-size="9" font-style="italic">C–F bond strongest → highest activation energy → practically unreactive.</text></svg>'
            },
            terms: []
        },

        // ─ SECTION F: HYDROLYSIS COMPARISON ─────────────────────────────
        {
            id: 'h-hydrolysis',
            type: 'heading',
            data: { text: 'Comparing Hydrolysis Rates: Practical Application', level: 2 },
            terms: []
        },
        {
            id: 'callout-hydrolysis',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Hydrolysis of CH₃Cl, CH₃Br, and CH₃I with NaOH(aq)',
                text: '<strong>Reaction type:</strong> nucleophilic substitution; OH⁻(aq) is the nucleophile.<br/><strong>General equation:</strong> R–X(aq) + NaOH(aq) → R–OH(aq) + NaX(aq)<br/><br/><strong>Experimental procedure:</strong><br/>• Add each halogenoalkane to aqueous NaOH/ethanol; warm gently in a water bath at the same temperature.<br/>• After equal reaction times: acidify each mixture with dilute HNO₃(aq), then add AgNO₃(aq).<br/><br/><strong>Observed precipitate colours (AgX):</strong><br/>• CH₃Cl → AgCl(s): <strong>white</strong> precipitate (forms very slowly; C–Cl bond strong, 340 kJ mol⁻¹).<br/>• CH₃Br → AgBr(s): <strong>cream</strong> precipitate (forms at a moderate rate; C–Br = 280 kJ mol⁻¹).<br/>• CH₃I → AgI(s): <strong>yellow</strong> precipitate (forms quickly; C–I = 228 kJ mol⁻¹, weakest bond).<br/><br/><strong>Interpretation:</strong> the faster the precipitate forms, the faster the hydrolysis, directly demonstrating the bond enthalpy trend. Rate: CH₃I > CH₃Br > CH₃Cl.'
            },
            terms: ['Nucleophilic substitution', 'Silver nitrate test']
        },

        // ─ SECTION G: N₂ KINETIC STABILITY ──────────────────────────────────
        {
            id: 'h-n2',
            type: 'heading',
            data: { text: 'N₂: An Extreme Example of Kinetic Stability', level: 2 },
            terms: []
        },
        {
            id: 'callout-n2',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why N₂ is Kinetically Stable Despite Thermodynamically Feasible Reactions',
                text: '• N≡N triple bond enthalpy = <strong>945 kJ mol⁻¹</strong> — amongst the highest for any common covalent bond; extremely strong due to 1 σ + 2 π bonds with very short bond length (110 pm).<br/>• Breaking the N≡N bond requires enormous activation energy → N₂ is kinetically very stable and nearly inert under ambient conditions.<br/>• Many reactions of N₂ are thermodynamically feasible (e.g. forming NH₃ or NO), but these are extremely slow at room temperature because E<sub>a</sub> is too high.<br/>• <strong>Haber process</strong> (industrial N₂ fixation): N₂(g) + 3H₂(g) ⇌ 2NH₃(g) requires <strong>450 °C</strong>, <strong>200 atm</strong>, and an <strong>iron catalyst</strong> to achieve an acceptable reaction rate, precisely because the N≡N bond is so strong.<br/>• <strong>Biological nitrogen fixation:</strong> nitrogenase enzyme (with Fe–Mo cofactor) breaks N≡N at room temperature — a remarkable feat that industrial chemistry cannot replicate without extreme conditions.',
            },
            terms: ['Kinetic stability', 'Haber process']
        },

        // ─ CHECKLIST ─────────────────────────────────────────────────────────────
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can explain how bond enthalpy relates to activation energy and therefore to reaction rate (bond enthalpy ↑ → E_a ↑ → rate ↓).', checked: false },
                    { text: 'I can distinguish thermodynamic stability (energy of products vs reactants) from kinetic stability (size of activation energy barrier), with examples.', checked: false },
                    { text: 'I can explain why alkanes are unreactive: strong non-polar C–H and C–C bonds; no π bond; no δ+ site for nucleophilic attack.', checked: false },
                    { text: 'I can explain why alkenes are more reactive than alkanes: the exposed, weaker C=C π bond (267 kJ mol⁻¹) is accessible to electrophilic attack.', checked: false },
                    { text: 'I can state and explain the reactivity order of halogenoalkanes in nucleophilic substitution: C–I > C–Br > C–Cl > C–F.', checked: false },
                    { text: 'I can explain why C–I reacts faster than C–F despite C–F being more polar: bond enthalpy dominates over polarity in determining the rate.', checked: false },
                    { text: 'I can describe the AgNO₃(aq) test for halide ions and give the precipitate colours for Cl⁻, Br⁻, and I⁻.', checked: false },
                    { text: 'I can explain why N⁢N (945 kJ mol⁻¹) makes N₂ kinetically stable, and why the Haber process requires high temperature, high pressure, and a catalyst.', checked: false }
                ]
            },
            terms: []
        },

        // ─ SUMMARY ────────────────────────────────────────────────────────────────
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Bond enthalpy ↑ → E_a ↑ → reactivity ↓. Thermodynamic stability = ΔH/ΔG. Kinetic stability = size of E_a barrier. Alkanes: strong non-polar σ bonds; react only via combustion or UV-initiated free-radical substitution. Alkenes: exposed π bond (267 kJ mol⁻¹) → electrophilic addition at RT. Halogenoalkanes: reactivity C–I > C–Br > C–Cl > C–F — bond enthalpy dominant over polarity. N⁡N = 945 kJ mol⁻¹ → N₂ kinetically stable; Haber process requires 450 °C, 200 atm, Fe catalyst.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key-reactivity', prompt: 'How does bond enthalpy relate to activation energy and reaction rate? What does it mean for a molecule to be kinetically stable?' },
            { id: 'c2', blockId: 'callout-stability', prompt: 'Distinguish thermodynamic stability from kinetic stability. Give one example of a compound that is thermodynamically unstable but kinetically stable.' },
            { id: 'c3', blockId: 'list-alkanes', prompt: 'Why are alkanes unreactive? Give two reasons, one related to bond strength and one related to bond polarity.' },
            { id: 'c4', blockId: 'callout-alkenes', prompt: 'Why are alkenes significantly more reactive than alkanes? What property of the π bond makes it accessible to attack?' },
            { id: 'c5', blockId: 'table-halogens', prompt: 'State the reactivity order for C–X bonds in nucleophilic substitution. Use bond enthalpy values to justify the order.' },
            { id: 'c6', blockId: 'callout-polarity-vs-enthalpy', prompt: 'A student predicts that fluoroalkanes react fastest because C–F is the most polar bond. Explain the error in this reasoning and give the correct explanation.' },
            { id: 'c7', blockId: 'callout-hydrolysis', prompt: 'Describe the AgNO₃(aq) test to compare hydrolysis rates; state the precipitate colours and what they indicate about rate.' },
            { id: 'c8', blockId: 'callout-n2', prompt: 'Why is N₂ kinetically stable at room temperature? Why does the Haber process require high temperature, pressure, and a catalyst?' }
        ],
        summaryText: 'Bond enthalpy ↑ → E_a ↑ → rate ↓. Alkanes: strong non-polar σ bonds, only combust/radical substitution. Alkenes: π bond exposed, electrophilic addition. Halogenoalkanes: C–I > C–Br > C–Cl > C–F (bond enthalpy rules, not polarity). N⁢N=945: N₂ kinetically very stable; Haber needs 450°C/200 atm/Fe.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_7;
