/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 3
 * "Halogenoalkane Reactions and Mechanisms (SN1 & SN2)"
 * Source: Pearson Edexcel IAL Chemistry — Section 10B.3
 */
export const note_chemistry_2_10_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the reactions of halogenoalkanes with cyanide ions, ammonia, aqueous KOH, and ethanolic KOH (and understand the competition between substitution and elimination). Understand the SN1 and SN2 nucleophilic substitution mechanisms.' },
            terms: []
        },
        {
            id: 'h-classification',
            type: 'heading',
            data: { text: 'Primary, Secondary and Tertiary Halogenoalkanes', level: 2 },
            terms: []
        },
        {
            id: 'p-classification',
            type: 'paragraph',
            data: {
                text: 'Halogenoalkanes are classified by the number of alkyl groups attached to the carbon atom that bears the halogen (C–X carbon). This classification directly determines which mechanism a halogenoalkane uses for nucleophilic substitution.'
            }
        },
        {
            id: 'list-classification',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Primary (1°):</strong> The C–X carbon is attached to ONE other alkyl group (and two H atoms). Example: CH₃CH₂CH₂Br (1-bromopropane). The alkyl group can be simple or branched — only the count at the C–X carbon matters.',
                    '<strong>Secondary (2°):</strong> The C–X carbon is attached to TWO other alkyl groups (and one H atom). Example: (CH₃)₂CHBr (2-bromopropane).',
                    '<strong>Tertiary (3°):</strong> The C–X carbon is attached to THREE other alkyl groups and carries NO hydrogen. Example: (CH₃)₃CBr (2-bromo-2-methylpropane).',
                    '<strong>Special case — methyl halides (CH₃X):</strong> Although the carbon has no alkyl groups attached, methyl halides such as CH₃Br are counted as primary by convention.'
                ]
            }
        },
        {
            id: 'svg-classification',
            type: 'svg',
            data: {
                caption: 'Structural distinction between primary, secondary, and tertiary halogenoalkanes. R = alkyl group. The number of R groups on the C–X carbon determines the class.',
                svg: `<svg viewBox="0 0 540 232" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><style>.bnd{stroke:#111827;stroke-width:1.5;fill:none}.atm{fill:#111827;font-weight:bold;font-size:15px}.lbl{fill:#1e40af;font-weight:bold;font-size:14px}.dim{fill:#6b7280;font-size:11px}.br{fill:#dc2626;font-weight:bold;font-size:15px}.sep{stroke:#d1d5db;stroke-width:1;stroke-dasharray:4,3}</style></defs><line x1="185" y1="8" x2="185" y2="224" class="sep"/><line x1="365" y1="8" x2="365" y2="224" class="sep"/><!-- Panel 1: Primary 1° --><text x="90" y="22" class="lbl" text-anchor="middle">Primary &#x2014; 1&#xb0;</text><text x="90" y="102" class="atm" text-anchor="middle">C</text><path d="M 90 110 L 90 147" class="bnd"/><text x="90" y="162" class="br" text-anchor="middle">Br</text><path d="M 84 93 L 52 64" class="bnd"/><text x="44" y="59" class="atm" text-anchor="middle">H</text><path d="M 96 93 L 128 64" class="bnd"/><text x="136" y="59" class="atm" text-anchor="middle">H</text><path d="M 100 100 L 150 100" class="bnd"/><text x="158" y="104" class="atm" text-anchor="start">R</text><text x="90" y="191" class="dim" text-anchor="middle">ONE alkyl group</text><text x="90" y="206" class="dim" text-anchor="middle">e.g. CH&#x2083;CH&#x2082;CH&#x2082;Br</text><text x="90" y="221" class="dim" text-anchor="middle">(1-bromopropane)</text><!-- Panel 2: Secondary 2° --><text x="275" y="22" class="lbl" text-anchor="middle">Secondary &#x2014; 2&#xb0;</text><text x="275" y="102" class="atm" text-anchor="middle">C</text><path d="M 275 110 L 275 147" class="bnd"/><text x="275" y="162" class="br" text-anchor="middle">Br</text><path d="M 275 91 L 275 56" class="bnd"/><text x="275" y="49" class="atm" text-anchor="middle">H</text><path d="M 265 100 L 222 100" class="bnd"/><text x="214" y="104" class="atm" text-anchor="end">R</text><path d="M 285 100 L 328 100" class="bnd"/><text x="336" y="104" class="atm" text-anchor="start">R</text><text x="275" y="191" class="dim" text-anchor="middle">TWO alkyl groups</text><text x="275" y="206" class="dim" text-anchor="middle">e.g. (CH&#x2083;)&#x2082;CHBr</text><text x="275" y="221" class="dim" text-anchor="middle">(2-bromopropane)</text><!-- Panel 3: Tertiary 3° --><text x="452" y="22" class="lbl" text-anchor="middle">Tertiary &#x2014; 3&#xb0;</text><text x="452" y="102" class="atm" text-anchor="middle">C</text><path d="M 452 110 L 452 147" class="bnd"/><text x="452" y="162" class="br" text-anchor="middle">Br</text><path d="M 452 91 L 452 56" class="bnd"/><text x="452" y="49" class="atm" text-anchor="middle">R</text><path d="M 442 100 L 399 100" class="bnd"/><text x="391" y="104" class="atm" text-anchor="end">R</text><path d="M 462 100 L 505 100" class="bnd"/><text x="513" y="104" class="atm" text-anchor="start">R</text><text x="452" y="191" class="dim" text-anchor="middle">THREE alkyl groups</text><text x="452" y="206" fill="#dc2626" font-size="11" text-anchor="middle">NO hydrogen at C&#x2013;X</text><text x="452" y="221" class="dim" text-anchor="middle">e.g. (CH&#x2083;)&#x2083;CBr</text></svg>`
            }
        },
        {
            id: 'callout-methyl-exception',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Special Case: Methyl Halides Count as Primary',
                text: 'Methyl halides (CH₃Cl, CH₃Br, CH₃I) have no alkyl groups attached to the C–X carbon — yet they are classified as primary by convention. This is because they behave like primary halogenoalkanes (SN2 mechanism, back-attack possible), and the classification would otherwise be incomplete.'
            }
        },
        {
            id: 'h-reactions',
            type: 'heading',
            data: { text: 'Other Halogenoalkane Reactions', level: 2 },
            terms: []
        },
        {
            id: 'table-reactions',
            type: 'comparisonTable',
            data: {
                caption: 'Reactions of Halogenoalkanes (Nucleophilic Substitution & Elimination)',
                headers: ['Reagent', 'Conditions', 'Reaction Type', 'Product'],
                rows: [
                    ['Aqueous Alkali (KOH or NaOH)', 'Heat under reflux', 'Nucleophilic Substitution', 'Alcohol'],
                    ['Potassium Cyanide (KCN) in ethanol', 'Heat under reflux', 'Nucleophilic Substitution', 'Nitrile (increases the carbon chain length by 1!)'],
                    ['Ammonia (NH₃) in ethanol (excess)', 'Heat under pressure in a sealed tube', 'Nucleophilic Substitution', 'Primary Amine'],
                    ['Ethanolic Alkali (KOH in ethanol, NO water)', 'Heat under reflux', 'Elimination', 'Alkene']
                ]
            },
            terms: ['Nitrile', 'Primary amine']
        },
        {
            id: 'callout-oh-conditions',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Conditions for Halogenoalkane + OH⁻ Reactions',
                text: '<strong>Reagent:</strong> NaOH (aq) or KOH (aq) — provides OH⁻ as the nucleophile.<br/><br/><strong>Solvent:</strong> 50:50 mixture of <strong>ethanol and water</strong>. Pure water cannot be used as the sole solvent because halogenoalkanes are <em>insoluble</em> in water — the two layers do not mix and the reaction could only occur at the interface. Ethanol dissolves both the ionic hydroxide and the organic halogenoalkane, creating a <strong>homogeneous mixture</strong>.<br/><br/><strong>Temperature:</strong> Heated under reflux (condenser placed vertically to prevent loss of volatile substances).<br/><br/><strong>Product:</strong> Alcohol + halide ion (e.g. Br⁻).<br/><br/><strong>Which mechanism?</strong> Depends on the type of halogenoalkane:<br/>• <strong>Primary</strong> → SN2 (back-attack, one concerted step, rate = k[RX][OH⁻])<br/>• <strong>Tertiary</strong> → SN1 (slow ionisation → carbocation, then fast OH⁻ attack, rate = k[RX])<br/>• <strong>Secondary</strong> → both SN1 and SN2 simultaneously'
            },
            terms: ['Reflux', 'Homogeneous', 'Halide ion']
        },
        {
            id: 'h-competition',
            type: 'heading',
            data: { text: 'Substitution vs. Elimination Competition', level: 3 },
            terms: []
        },
        {
            id: 'callout-competition',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Factors Favouring Substitution vs Elimination',
                text: 'When a halogenoalkane reacts with hydroxide ions (OH⁻), nucleophilic substitution (forming an alcohol) and elimination (forming an alkene) compete against each other. What you get <em>most</em> of depends on the conditions and the type of halogenoalkane:<br/><br/><strong>1. Type of Halogenoalkane:</strong><br/>• <strong>Primary:</strong> mainly substitution.<br/>• <strong>Secondary:</strong> both substitution and elimination.<br/>• <strong>Tertiary:</strong> mainly elimination.<br/><br/><strong>2. Conditions Favouring Substitution:</strong><br/>• Lower temperatures.<br/>• More dilute solutions of NaOH / KOH.<br/>• More <strong>water</strong> in the solvent mixture (aqueous conditions).<br/><br/><strong>3. Conditions Favouring Elimination:</strong><br/>• Higher temperatures.<br/>• Concentrated solutions of NaOH / KOH.<br/>• Pure <strong>ethanol</strong> as the solvent (ethanolic conditions).'
            },
            terms: ['Competition', 'Aqueous', 'Ethanolic']
        },
        {
            id: 'svg-competition',
            type: 'svg',
            data: {
                caption: 'Two competing pathways when 2-bromopropane reacts with hydroxide ions. Left: OH⁻ acts as nucleophile → substitution → propan-2-ol. Right: OH⁻ acts as base → elimination → propene. Ratio determined by solvent, temperature, concentration, and — most importantly — the type of halogenoalkane.',
                svg: `<svg viewBox="0 0 540 235" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-ev" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker></defs><text x="270" y="16" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">2-bromopropane + OH&#x207b; &#x2014; Two Competing Pathways</text><text x="270" y="28" font-size="10" fill="#6b7280" text-anchor="middle">Both reactions occur; ratio controlled by conditions and type of halogenoalkane</text><rect x="165" y="36" width="210" height="26" rx="5" fill="#0f172a" stroke="#9ca3af" stroke-width="1.5"/><text x="270" y="53" font-size="13" font-weight="bold" fill="#111827" text-anchor="middle">(CH&#x2083;)&#x2082;CHBr + OH&#x207b;</text><line x1="220" y1="62" x2="130" y2="103" stroke="#374151" stroke-width="2" marker-end="url(#ah-ev)"/><line x1="320" y1="62" x2="410" y2="103" stroke="#374151" stroke-width="2" marker-end="url(#ah-ev)"/><rect x="8" y="107" width="238" height="72" rx="5" fill="#1c3a64" stroke="#bfdbfe" stroke-width="1.5"/><text x="127" y="122" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">SUBSTITUTION (SN1/SN2)</text><text x="17" y="136" font-size="11" fill="#374151" text-anchor="start">OH&#x207b; = NUCLEOPHILE</text><text x="17" y="149" font-size="11" fill="#374151" text-anchor="start">lone pair attacks &#x3b4;+ C &#x2192; C&#x2013;OH forms</text><text x="17" y="164" font-size="11" font-weight="bold" fill="#111827" text-anchor="start">&#x2192; propan-2-ol + Br&#x207b;</text><rect x="294" y="107" width="238" height="72" rx="5" fill="#0a2e1a" stroke="#bbf7d0" stroke-width="1.5"/><text x="413" y="122" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">ELIMINATION (E2)</text><text x="303" y="136" font-size="11" fill="#374151" text-anchor="start">OH&#x207b; = BASE</text><text x="303" y="149" font-size="11" fill="#374151" text-anchor="start">removes H from &#x3b2;-carbon &#x2192; C=C forms</text><text x="303" y="164" font-size="11" font-weight="bold" fill="#111827" text-anchor="start">&#x2192; propene + H&#x2082;O + Br&#x207b;</text><text x="127" y="191" font-size="10" fill="#1d4ed8" text-anchor="middle">Favour: aqueous &#xb7; dilute NaOH &#xb7; lower temp</text><text x="413" y="191" font-size="10" fill="#15803d" text-anchor="middle">Favour: ethanol &#xb7; conc. NaOH &#xb7; higher temp</text><text x="270" y="211" font-size="11" font-weight="bold" fill="#374151" text-anchor="middle">MOST IMPORTANT factor: type of halogenoalkane</text><text x="270" y="226" font-size="10" fill="#6b7280" text-anchor="middle">Primary &#x2192; mainly substitution &#xb7; Secondary &#x2192; both &#xb7; Tertiary &#x2192; mainly elimination</text></svg>`
            }
        },
        {
            id: 'callout-ohm-dual-role',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Why OH⁻ Can Both Substitute AND Eliminate',
                text: 'Hydroxide ion (OH⁻) has a lone pair <em>and</em> is a very strong base — both properties are active simultaneously, so which reaction dominates depends on <em>where</em> the OH⁻ can most easily attack.<br/><br/><strong>As a Nucleophile (substitution):</strong> The lone pair is attracted to the electron-deficient (δ+) carbon bonded to the halogen. OH⁻ attacks here directly → forms C–OH bond → halide ion departs → alcohol.<br/><br/><strong>As a Base (elimination):</strong> The lone pair abstracts a proton (H⁺) from an adjacent β-carbon → triggers E2 cascade (C–H electrons form C=C π bond; C–X electrons leave as X⁻) → alkene + H₂O.<br/><br/><strong>Why tertiary → mainly elimination:</strong> Three bulky alkyl groups crowd the C–X carbon, blocking OH⁻ from approaching it. OH⁻ is forced to attack the less hindered β-H instead → elimination dominates even under aqueous conditions.<br/><br/><strong>Why primary → mainly substitution:</strong> Only one alkyl group — the C–X carbon is accessible; direct nucleophilic attack is fast and unhindered.<br/><br/><em>Exam note: You do NOT need to explain why conditions shift the ratio — just memorise the rules. Questions almost always focus on secondary halogenoalkanes (e.g. 2-bromopropane), because these are most sensitive to conditions.</em>'
            },
            terms: ['Dual role', 'Nucleophile', 'Base', 'Steric hindrance']
        },
        {
            id: 'callout-elimination-mechanism',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Elimination Mechanism (Hydroxide as a Base)',
                text: 'In an elimination reaction, the hydroxide ion (OH⁻) does not act as a nucleophile, but instead acts as a <strong>base</strong> by removing a hydrogen ion (H⁺) from a carbon atom <strong>adjacent</strong> to the carbon holding the halogen.<br/><br/><strong>Mechanism steps:</strong><br/>1. The OH⁻ ion uses its lone pair to form a bond with a hydrogen atom on an adjacent carbon, pulling it off as H⁺.<br/>2. The electron pair from the broken C-H bond folds in to form a C=C double bond.<br/>3. The formation of the double bond forces the halogen atom to leave as a halide ion (e.g. Br⁻), taking the bonding electrons with it.<br/><br/>The result is the formation of an <strong>alkene</strong>, water, and a halide ion.'
            },
            terms: ['Base', 'Elimination', 'Mechanism']
        },
        {
            id: 'svg-elim-mech',
            type: 'svg',
            data: {
                caption: 'E2 elimination mechanism for 2-bromopropane + OH⁻. Three concerted curly arrows: (1) OH⁻ lone pair → H on the β-carbon (CH₃ adjacent to C–Br), (2) C(β)–H bond electrons → forming C=C π bond, (3) C(α)–Br bond electrons → Br⁻. Product: propene + H₂O + Br⁻. Conditions: concentrated KOH/NaOH in ethanol, heated under reflux.',
                svg: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-el" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-el" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.bel{stroke:#111827;stroke-width:1.5;fill:none}.ael{fill:#111827;font-weight:bold;font-size:14px}.hel{fill:#1e40af;font-weight:bold;font-size:12px}.del{fill:#6b7280;font-size:11px}.rel{fill:#ef4444;font-weight:bold;font-size:13px}</style></defs><text x="270" y="18" class="hel" text-anchor="middle">Elimination Mechanism &#x2014; 2-bromopropane + OH&#x207b; &#x2192; Propene</text><text x="270" y="30" class="del" text-anchor="middle">conc. KOH/NaOH in ethanol, heat under reflux &#x2014; OH&#x207b; acts as BASE (not nucleophile)</text><circle cx="18" cy="101" r="2.2" fill="#374151"/><circle cx="18" cy="113" r="2.2" fill="#374151"/><text x="26" y="113" class="ael" text-anchor="start">HO</text><text x="46" y="102" class="rel" font-size="11" text-anchor="start">&#x2212;</text><path d="M 21 98 Q 68 52 103 67" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-el)"/><text x="110" y="68" class="ael" text-anchor="middle">H</text><line x1="110" y1="76" x2="120" y2="102" stroke="#111827" stroke-width="1.5"/><text x="84" y="113" class="ael" text-anchor="end">H&#x2082;</text><line x1="85" y1="110" x2="119" y2="110" stroke="#111827" stroke-width="1.5"/><path d="M 114 88 Q 127 100 140 105" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-el)"/><line x1="121" y1="110" x2="170" y2="110" stroke="#111827" stroke-width="1.5"/><text x="173" y="99" class="rel" font-size="11" text-anchor="middle">&#x3b4;+</text><line x1="172" y1="119" x2="172" y2="143" stroke="#111827" stroke-width="1.5"/><text x="172" y="155" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><path d="M 168 132 Q 155 148 164 153" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-el)"/><line x1="180" y1="110" x2="215" y2="110" stroke="#111827" stroke-width="1.5"/><text x="218" y="113" class="ael" text-anchor="start">CH&#x2083;</text><line x1="252" y1="110" x2="282" y2="110" stroke="#374151" stroke-width="2" marker-end="url(#ra-el)"/><text x="290" y="113" class="ael" text-anchor="start">H&#x2082;C=CH&#x2013;CH&#x2083;</text><text x="382" y="113" class="ael" text-anchor="middle">+</text><text x="394" y="113" class="ael" text-anchor="start">H&#x2082;O</text><text x="430" y="113" class="ael" text-anchor="middle">+</text><text x="442" y="113" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="start">Br</text><text x="460" y="102" class="rel" font-size="11" text-anchor="start">&#x2212;</text><text x="336" y="128" class="del" text-anchor="middle">propene</text><text x="270" y="172" class="del" text-anchor="middle">3 curly arrows: (1) OH&#x207b; lone pair&#x2192;H  (2) C(&#x3b2;)&#x2013;H electrons&#x2192;C=C  (3) C&#x2013;Br electrons&#x2192;Br&#x207b; &#x2014; all concerted</text><text x="270" y="186" class="del" text-anchor="middle">&#x3b2;-carbon = adjacent to C&#x2013;Br; H removed from &#x3b2;-C; double bond forms between &#x3b2;-C and &#x3b1;-C</text><text x="270" y="201" fill="#dc2626" font-size="11" text-anchor="middle">rate = k[(CH&#x2083;)&#x2082;CHBr][OH&#x207b;] &#x2014; second order; favoured by conc. ethanolic KOH, high temp, tertiary/secondary RX</text></svg>`
            }
        },
        {
            id: 'callout-elimination-unsymmetrical',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Elimination in Unsymmetrical Halogenoalkanes',
                text: 'When a halogenoalkane is <strong>unsymmetrical</strong> (like 2-bromobutane), elimination can occur in more than one direction because there are <strong>different adjacent carbon atoms</strong> with hydrogen atoms that can be removed.<br/><br/><strong>Example: 2-bromobutane + ethanolic KOH</strong><br/>• Removing H from the CH₃ group at the end forms <strong>but-1-ene</strong>.<br/>• Removing H from the CH₂ group in the middle forms <strong>but-2-ene</strong>.<br/><br/>Furthermore, but-2-ene exhibits <strong>geometric isomerism</strong> (E/Z isomerism). Therefore, this reaction produces a mixture of <strong>three isomeric alkenes</strong>:<br/>1. but-1-ene<br/>2. <em>E</em>-but-2-ene (trans)<br/>3. <em>Z</em>-but-2-ene (cis)'
            },
            terms: ['Unsymmetrical', 'Isomeric Alkenes', 'E/Z Isomerism']
        },
        {
            id: 'svg-elim-unsym',
            type: 'svg',
            data: {
                caption: 'Two elimination pathways from 2-bromobutane (ethanolic KOH, heat under reflux). Left: OH⁻ removes H from C1 (β-left, CH₃) → but-1-ene. Right: OH⁻ removes H from C3 (β-right, CH₂) → but-2-ene, which further splits into (Z)-but-2-ene (cis) and (E)-but-2-ene (trans) due to geometric isomerism locked by the C=C bond. Total: 3 alkene products. C4 (terminal CH₃) cannot supply H — it would require H⁻ expulsion from C3 (too high energy).',
                svg: `<svg viewBox="0 0 540 295" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-eu" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-eu" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.beu{stroke:#111827;stroke-width:1.5;fill:none}.aeu{fill:#111827;font-weight:bold;font-size:14px}.heu{fill:#1e40af;font-weight:bold;font-size:12px}.deu{fill:#6b7280;font-size:11px}.reu{fill:#ef4444;font-weight:bold;font-size:13px}</style></defs><text x="270" y="18" class="heu" text-anchor="middle">Elimination from 2-bromobutane &#x2014; Three Possible Products</text><text x="270" y="30" class="deu" text-anchor="middle">conc. KOH in ethanol, heat under reflux &#x2014; OH&#x207b; acts as BASE</text><text x="70" y="55" fill="#1e40af" font-weight="bold" font-size="11" text-anchor="middle">&#x3b2;-C</text><text x="280" y="55" fill="#1e40af" font-weight="bold" font-size="11" text-anchor="middle">&#x3b2;-C</text><text x="185" y="73" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="start">&#x3b1;</text><text x="70" y="78" class="aeu" text-anchor="middle">CH&#x2083;</text><line x1="90" y1="75" x2="160" y2="75" stroke="#111827" stroke-width="1.5"/><text x="170" y="78" class="aeu" text-anchor="middle">C</text><line x1="170" y1="66" x2="170" y2="52" stroke="#111827" stroke-width="1.5"/><text x="170" y="49" class="aeu" text-anchor="middle">H</text><line x1="170" y1="84" x2="170" y2="100" stroke="#111827" stroke-width="1.5"/><text x="170" y="113" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><line x1="180" y1="75" x2="261" y2="75" stroke="#111827" stroke-width="1.5"/><text x="278" y="78" class="aeu" text-anchor="middle">CH&#x2082;</text><line x1="297" y1="75" x2="350" y2="75" stroke="#111827" stroke-width="1.5"/><text x="368" y="78" class="aeu" text-anchor="middle">CH&#x2083;</text><text x="368" y="92" fill="#9ca3af" font-size="10" text-anchor="middle">not &#x3b2;</text><line x1="70" y1="88" x2="70" y2="127" stroke="#374151" stroke-width="1.5" marker-end="url(#ra-eu)"/><line x1="278" y1="88" x2="278" y2="127" stroke="#374151" stroke-width="1.5" marker-end="url(#ra-eu)"/><text x="110" y="141" fill="#1e40af" font-weight="bold" font-size="11" text-anchor="middle">H from C1 (&#x3b2;)</text><text x="350" y="141" fill="#1e40af" font-weight="bold" font-size="11" text-anchor="middle">H from C3 (&#x3b2;)</text><text x="110" y="158" class="aeu" text-anchor="middle">CH&#x2082;=CHCH&#x2082;CH&#x2083;</text><text x="350" y="158" class="aeu" text-anchor="middle">CH&#x2083;CH=CHCH&#x2083;</text><text x="110" y="173" class="heu" text-anchor="middle">but-1-ene</text><text x="350" y="173" class="heu" text-anchor="middle">but-2-ene</text><text x="110" y="186" class="deu" text-anchor="middle">1 product</text><line x1="335" y1="181" x2="300" y2="198" stroke="#374151" stroke-width="1"/><line x1="366" y1="181" x2="403" y2="198" stroke="#374151" stroke-width="1"/><text x="295" y="213" fill="#374151" font-weight="bold" font-size="12" text-anchor="middle">(Z)-but-2-ene</text><text x="295" y="226" class="deu" text-anchor="middle">cis</text><text x="408" y="213" fill="#374151" font-weight="bold" font-size="12" text-anchor="middle">(E)-but-2-ene</text><text x="408" y="226" class="deu" text-anchor="middle">trans</text><text x="350" y="241" class="deu" text-anchor="middle">2 stereoisomers</text><line x1="222" y1="130" x2="222" y2="247" stroke="#d1d5db" stroke-width="1" stroke-dasharray="5,3"/><text x="270" y="261" fill="#1e40af" font-weight="bold" font-size="12" text-anchor="middle">Total: but-1-ene + (Z)-but-2-ene + (E)-but-2-ene = 3 alkene products</text><text x="270" y="276" fill="#dc2626" font-size="11" text-anchor="middle">&#x26a0; Always draw C=C at 120&#xb0; &#x2014; CH&#x2083;CH=CHCH&#x2083; shorthand misses (E)/(Z) isomers!</text><text x="270" y="289" class="deu" text-anchor="middle">H only from &#x3b2;-carbons (adjacent to C&#x2013;Br); C4 terminal CH&#x2083; removal impossible (H&#x207b; expulsion too costly)</text></svg>`
            }
        },
        {
            id: 'callout-elim-geom-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Two Exam Traps in Unsymmetrical Elimination Questions',
                text: '<strong>Trap 1 — Missing E/Z isomers:</strong> Whenever an alkene product has different groups on each carbon of the C=C, ask yourself “could these be locked cis or trans?”. Always draw the C=C with the correct <strong>120° bond angles</strong>. Writing but-2-ene as a single-line formula CH₃CH=CHCH₃ hides the fact that two separate geometric isomers exist. An examiner will expect both (E) and (Z) forms to be listed.<br/><br/><strong>Trap 2 — Wrong β-carbon:</strong> A hydrogen can <strong>only</strong> be removed from a carbon <strong>directly bonded</strong> to the C–Br carbon (β-carbon). In 2-bromobutane, C1 (CH₃) and C3 (CH₂) are both directly bonded to C2 (the C–Br carbon) and are both valid β-carbons. C4 (terminal CH₃) is bonded to C3, not to C2 — it is <em>two carbons away</em> from the C–Br; removing H from C4 would require expelling H⁻ from C3, which is energetically impossible.'
            },
            terms: ['Geometric isomerism', 'β-carbon', '120° bond angle']
        },
        {
            id: 'callout-cyanide',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Reaction with Cyanide Ions (-CN)',
                text: 'Heating a halogenoalkane under reflux with a solution of potassium cyanide (KCN) in <strong>ethanol</strong> produces a <strong>nitrile</strong>.<br/><br/>• <strong>Chain Lengthening:</strong> This is synthetically very useful because it <strong>increases the carbon chain length by 1</strong> (e.g. 1-bromopropane → butanenitrile).<br/>• <strong>Solvent Importance:</strong> The solvent must be pure ethanol. A solution of potassium cyanide in water is quite alkaline and contains significant amounts of hydroxide ions (OH⁻). These would react with the halogenoalkane to yield an alcohol instead.'
            },
            terms: ['Nitrile', 'Reflux', 'Chain lengthening']
        },
        {
            id: 'callout-cyanide-naming',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Watch Out: Naming Nitriles',
                text: 'When naming the nitrile product, you <strong>must include the carbon in the -CN group</strong> when counting the longest carbon chain. For example, reacting bromoethane (2 carbons) with KCN produces <strong>propanenitrile</strong> (3 carbons), not ethanenitrile!'
            },
            terms: ['Nomenclature']
        },
        {
            id: 'svg-sn2-cn',
            type: 'svg',
            data: {
                caption: 'SN2 mechanism for the reaction of bromoethane with potassium cyanide (KCN) in ethanol. CN⁻ lone pair (on the carbon end) attacks the δ+ carbon from the anti side in one concerted step, forming a new C–C bond. The C–Br bond breaks heterolytically as Br⁻ leaves. Product is propanenitrile (chain length +1C) and bromide ion.',
                svg: `<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-cn" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-cn" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.bcn{stroke:#111827;stroke-width:1.5;fill:none}.acn{fill:#111827;font-weight:bold;font-size:14px}.hcn{fill:#1e40af;font-weight:bold;font-size:12px}.dcn{fill:#6b7280;font-size:11px}.rcn{fill:#ef4444;font-weight:bold;font-size:13px}</style></defs><text x="270" y="19" class="hcn" text-anchor="middle">SN2 &#x2014; Bromoethane + CN&#x207b; &#x2192; Propanenitrile + Br&#x207b;</text><text x="270" y="32" class="dcn" text-anchor="middle">KCN/ethanol; heat under reflux &#x2014; primary halogenoalkane</text><circle cx="18" cy="93" r="2.2" fill="#374151"/><circle cx="18" cy="103" r="2.2" fill="#374151"/><text x="26" y="103" class="acn" text-anchor="start">C&#x2261;N</text><text x="63" y="92" class="rcn" font-size="11" text-anchor="start">&#x2212;</text><path d="M 22 91 Q 80 62 130 83" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-cn)"/><text x="143" y="76" class="rcn" font-size="11" text-anchor="middle">&#x3b4;+</text><text x="143" y="101" class="acn" text-anchor="middle">C</text><line x1="143" y1="89" x2="143" y2="63" class="bcn"/><text x="143" y="58" class="acn" text-anchor="middle">H</text><line x1="143" y1="109" x2="143" y2="134" class="bcn"/><text x="143" y="148" class="acn" text-anchor="middle">H</text><line x1="153" y1="95" x2="178" y2="79" class="bcn"/><text x="190" y="78" class="acn" text-anchor="start">CH&#x2083;</text><line x1="153" y1="101" x2="218" y2="101" class="bcn"/><text x="223" y="81" class="rcn" font-size="11" text-anchor="middle">&#x3b4;&#x2212;</text><text x="223" y="101" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><path d="M 200 104 Q 213 118 220 111" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-cn)"/><line x1="252" y1="101" x2="289" y2="101" stroke="#374151" stroke-width="2" marker-end="url(#ra-cn)"/><text x="300" y="101" class="acn" text-anchor="start">CH&#x2083;CH&#x2082;C&#x2261;N</text><text x="408" y="101" class="acn" text-anchor="middle">+</text><text x="428" y="101" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="start">Br</text><text x="445" y="91" class="rcn" font-size="11" text-anchor="start">&#x2212;</text><text x="350" y="117" class="dcn" text-anchor="middle">propanenitrile</text><text x="270" y="168" class="dcn" text-anchor="middle">CN&#x207b; attacks via CARBON end (C&#x2261;N&#x207b;) &#x2014; back-attack from anti side; one concerted step</text><text x="270" y="183" fill="#dc2626" font-size="11" text-anchor="middle">rate = k[CH&#x2083;CH&#x2082;Br][CN&#x207b;] &#x2014; second order (SN2)</text></svg>`
            }
        },
        {
            id: 'callout-cn-attack-end',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'CN⁻ Attacks via Its Carbon End — Not Nitrogen',
                text: 'The cyanide ion is written <strong>C≡N⁻</strong>. The nucleophilic lone pair sits on the <strong>carbon atom</strong>. This matters in two ways:<br/><br/>• <strong>Bond formed:</strong> a new <strong>C–C bond</strong> → product is a <strong>nitrile (R–C≡N)</strong>, not an isocyanide (R–N≡C).<br/>• <strong>Chain grows by one carbon:</strong> the CN carbon adds to the existing chain.<br/><br/>Examples:<br/>• CH₃CH₂Br (bromoethane, 2C) + CN⁻ → CH₃CH₂C≡N (propanenitrile, 3C)<br/>• CH₃CH₂CH₂Br (1-bromopropane, 3C) + CN⁻ → CH₃CH₂CH₂C≡N (butanenitrile, 4C)<br/><br/><strong>Exam tip:</strong> In the mechanism, show the lone pair on the <strong>C end</strong> of CN⁻. The curly arrow must start from those lone pair dots on carbon, not nitrogen.'
            },
            terms: ['Nitrile', 'Carbon end', 'Chain lengthening']
        },
        {
            id: 'callout-ammonia-products',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Reaction with Ammonia (NH₃)',
                text: 'Halogenoalkanes react with a concentrated solution of ammonia in ethanol. It must be heated in a <strong>sealed tube</strong> (heating under reflux would allow ammonia gas to escape).<br/><br/>• <strong>Mixture of Products:</strong> The primary amine formed can act as a nucleophile and attack another halogenoalkane, leading to secondary amines, tertiary amines, and finally quaternary ammonium salts.<br/>• <strong>To get mainly Primary Amine:</strong> Use a large excess of ammonia.<br/>• <strong>To get mainly Quaternary Salt:</strong> Use a large excess of the halogenoalkane.'
            },
            terms: ['Sealed tube', 'Primary amine', 'Quaternary ammonium salt']
        },
        {
            id: 'h-cx-bonding',
            type: 'heading',
            data: { text: 'C–X Bond Polarity and Reactivity', level: 2 },
            terms: []
        },
        {
            id: 'p-cx-polarity',
            type: 'paragraph',
            data: {
                text: 'The reactivity of halogenoalkanes in nucleophilic substitution depends on two properties of the C–X bond: its <strong>polarity</strong> (which attracts nucleophiles to the δ+ carbon) and its <strong>bond strength</strong> (which determines how easily it breaks). These two factors can oppose each other: C–F is the most polar bond but is also the strongest — so despite the high δ+ on carbon, fluoroalkanes are effectively unreactive and are simply ignored in nucleophilic substitution.'
            }
        },
        {
            id: 'table-cx-bonds',
            type: 'comparisonTable',
            data: {
                caption: 'C–X Bond Properties and Reactivity (EN of C = 2.5 on Pauling scale)',
                headers: ['Bond', 'EN of Halogen', 'Bond Enthalpy / kJ mol⁻¹', 'Polarity', 'Reactivity in SN'],
                rows: [
                    ['C–F', '4.0', '467', 'Very high δ+ on C / δ− on F', 'Very unreactive — bond too strong; ignored in SN reactions'],
                    ['C–Cl', '3.0', '346', 'High δ+ on C / δ− on Cl', 'Slowest of the three reactive haloalkanes'],
                    ['C–Br', '2.8', '290', 'Moderate δ+ on C / δ− on Br', 'Moderate — often used in laboratory synthesis'],
                    ['C–I', '2.5 (= C)', '228', 'No permanent dipole; easily polarised', 'Fastest — weakest bond; easily broken']
                ]
            }
        },
        {
            id: 'callout-cx-rate',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bond Strength Dominates Over Polarity — Rate Order: RCl < RBr < RI',
                text: 'For C–Cl, C–Br, and C–I: bond strength decreases down the group while polarity also decreases. Bond strength is the dominant factor, so reactivity increases: RCl (slowest) → RBr (moderate) → RI (fastest).\n\nC–I special case: carbon and iodine have the SAME electronegativity (2.5), so there is no permanent dipole. However, the bond is very easily polarised when a nucleophile approaches, and is very weak (228 kJ mol⁻¹) — both effects make iodoalkanes the fastest.\n\nC–F: although maximum polarity, bond enthalpy (467 kJ mol⁻¹) is even stronger than C–H (413 kJ mol⁻¹). Fluoroalkanes are essentially inert in nucleophilic substitution.'
            }
        },
        {
            id: 'h-mechanisms',
            type: 'heading',
            data: { text: 'Nucleophilic Substitution Mechanisms: SN1 vs SN2', level: 2 },
            terms: []
        },
        {
            id: 'callout-nucleophile',
            type: 'callout',
            data: {
                style: 'key',
                title: 'What is a Nucleophile?',
                text: 'A <strong>nucleophile</strong> is a species (ion or molecule) strongly attracted to a region of positive charge, which donates a lone pair of electrons to form a new covalent (dative) bond.\n\nAll nucleophiles have at least one lone pair and are either:\n• <strong>Fully negative ions</strong> — e.g. OH⁻, CN⁻, Br⁻ (lone pair on negatively charged atom)\n• <strong>Neutral molecules with a δ− atom</strong> — e.g. H₂O (lone pair on O), NH₃ (lone pair on N)\n\nCommon nucleophiles: OH⁻ (aqueous alkali), CN⁻ (cyanide), H₂O (water), NH₃ (ammonia).\n\nNote: it is always the LONE PAIR that must be shown in the curly-arrow mechanism — exam mark schemes require it.'
            }
        },
        {
            id: 'p-sn1',
            type: 'paragraph',
            data: { text: '<strong>SN1 Mechanism (Tertiary Halogenoalkanes):</strong> <em>Substitution, Nucleophilic, Unimolecular</em>. Occurs in <strong>two steps</strong>. First, the C-X bond breaks heterolytically to form a planar carbocation intermediate. Second, the nucleophile attacks the carbocation from either above or below. Since it involves a stable tertiary carbocation, this mechanism is very fast.' },
            terms: ['SN1', 'Carbocation']
        },
        {
            id: 'svg-sn1-mech',
            type: 'svg',
            data: {
                caption: 'SN1 mechanism for 2-bromo-2-methylpropane. Stage 1 (slow, rate-determining): heterolytic C–Br ionisation → planar tertiary carbocation + Br⁻. Stage 2 (fast): Nu⁻ attacks from either face of the planar carbocation.',
                svg: `<svg viewBox="0 0 540 286" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-sn1m" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-sn1m" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.bnd{stroke:#111827;stroke-width:1.5;fill:none}.atm{fill:#111827;font-weight:bold;font-size:14px}.hd{fill:#1e40af;font-weight:bold;font-size:12px}.dim{fill:#6b7280;font-size:11px}.rch{fill:#ef4444;font-weight:bold;font-size:13px}.sep{stroke:#d1d5db;stroke-width:1;stroke-dasharray:5,3}</style></defs><text x="270" y="19" class="hd" text-anchor="middle">SN1 &#x2014; Two Steps (Tertiary Halogenoalkane)</text><text x="270" y="32" class="dim" text-anchor="middle">Example: (CH&#x2083;)&#x2083;CBr (2-bromo-2-methylpropane) + Nu&#x207b;</text><text x="18" y="50" class="hd" text-anchor="start">(1) Slow step &#x2014; heterolytic ionisation (rate-determining)</text><text x="78" y="96" class="atm" text-anchor="start">(CH&#x2083;)&#x2083;C</text><path d="M 130 93 L 157 93" class="bnd"/><text x="170" y="82" class="rch" font-size="11" text-anchor="middle">&#x3b4;&#x2212;</text><text x="170" y="95" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><path d="M 144 90 Q 154 77 161 83" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-sn1m)"/><text x="207" y="85" class="dim" text-anchor="middle">slow</text><path d="M 190 95 L 227 95" stroke="#374151" stroke-width="2" marker-end="url(#ra-sn1m)"/><text x="248" y="96" class="atm" text-anchor="start">(CH&#x2083;)&#x2083;C</text><text x="296" y="83" fill="#ef4444" font-weight="bold" font-size="16" text-anchor="start">+</text><text x="318" y="96" class="atm" text-anchor="middle">+</text><text x="336" y="96" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="start">Br</text><text x="352" y="84" class="rch" text-anchor="start">&#x2212;</text><text x="270" y="116" class="dim" text-anchor="middle">tertiary carbocation: planar sp&#xb2; carbon, relatively stable</text><text x="270" y="130" fill="#dc2626" font-size="11" text-anchor="middle">rate = k[(CH&#x2083;)&#x2083;CBr] &#x2014; FIRST ORDER (only 1 species in slow step)</text><line x1="18" y1="147" x2="522" y2="147" class="sep"/><text x="18" y="165" class="hd" text-anchor="start">(2) Fast step &#x2014; nucleophilic attack on carbocation</text><text x="80" y="215" class="atm" text-anchor="middle">(CH&#x2083;)&#x2083;C</text><text x="118" y="203" fill="#ef4444" font-weight="bold" font-size="16" text-anchor="start">+</text><circle cx="192" cy="209" r="2.2" fill="#374151"/><circle cx="192" cy="218" r="2.2" fill="#374151"/><text x="205" y="218" class="atm" text-anchor="start">Nu</text><text x="222" y="207" class="rch" text-anchor="start">&#x2212;</text><path d="M 188 207 Q 155 193 128 206" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-sn1m)"/><text x="275" y="207" class="dim" text-anchor="middle">fast</text><path d="M 258 215 L 295 215" stroke="#374151" stroke-width="2" marker-end="url(#ra-sn1m)"/><text x="315" y="215" class="atm" text-anchor="start">(CH&#x2083;)&#x2083;C&#x2212;Nu</text><text x="270" y="240" class="dim" text-anchor="middle">carbocation is planar &#x2192; Nu attacks from EITHER face</text><text x="270" y="254" class="dim" text-anchor="middle">if chiral centre forms &#x2192; racemic mixture produced</text><text x="270" y="270" fill="#dc2626" font-size="11" text-anchor="middle">Tertiary &#x2260; SN2: three CH&#x2083; groups completely block back-attack on C</text><text x="270" y="283" fill="#dc2626" font-size="11" text-anchor="middle">Primary &#x2260; SN1: primary carbocation too unstable to form (no alkyl stabilisation)</text></svg>`
            }
        },
        {
            id: 'p-sn2',
            type: 'paragraph',
            data: { text: '<strong>SN2 Mechanism (Primary Halogenoalkanes):</strong> <em>Substitution, Nucleophilic, Bimolecular</em>. Occurs in <strong>one step</strong>. The nucleophile attacks the slightly positive carbon atom from the back at the exact same time as the C-X bond starts to break. It forms an unstable pentavalent "transition state". Primary halogenoalkanes use this because they lack the alkyl groups to stabilise a carbocation intermediate.' },
            terms: ['SN2', 'Transition state']
        },
        {
            id: 'svg-sn2-mech',
            type: 'svg',
            data: {
                caption: 'SN2 mechanism for bromoethane. In one concerted step: Nu⁻ lone pair attacks the δ+ carbon from the anti side while C–Br electrons move to Br. The configuration at carbon is inverted (umbrella inversion).',
                svg: `<svg viewBox="0 0 540 185" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-sn2m" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-sn2m" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.bnd{stroke:#111827;stroke-width:1.5;fill:none}.atm{fill:#111827;font-weight:bold;font-size:14px}.hd{fill:#1e40af;font-weight:bold;font-size:13px}.dim{fill:#6b7280;font-size:11px}.rch{fill:#ef4444;font-weight:bold;font-size:13px}</style></defs><text x="270" y="19" class="hd" text-anchor="middle">SN2 &#x2014; One Concerted Step (Primary Halogenoalkane)</text><text x="270" y="32" class="dim" text-anchor="middle">Example: bromoethane (CH&#x2083;CH&#x2082;Br) + Nu&#x207b;</text><text x="28" y="99" class="atm" text-anchor="start">Nu</text><text x="47" y="89" class="rch" text-anchor="start">&#x2212;</text><circle cx="55" cy="92" r="2.2" fill="#374151"/><circle cx="55" cy="101" r="2.2" fill="#374151"/><path d="M 58 89 Q 98 62 127 84" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-sn2m)"/><text x="138" y="77" class="rch" font-size="11" text-anchor="middle">&#x3b4;+</text><text x="138" y="99" class="atm" text-anchor="middle">C</text><path d="M 138 89 L 138 63" class="bnd"/><text x="138" y="58" class="atm" text-anchor="middle">H</text><path d="M 138 108 L 138 133" class="bnd"/><text x="138" y="146" class="atm" text-anchor="middle">H</text><path d="M 148 94 L 175 78" class="bnd"/><text x="186" y="76" class="atm" text-anchor="start">CH&#x2083;</text><path d="M 149 100 L 208 100" class="bnd"/><text x="222" y="78" class="rch" font-size="11" text-anchor="middle">&#x3b4;&#x2212;</text><text x="222" y="100" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><path d="M 193 103 Q 208 116 216 108" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-sn2m)"/><path d="M 250 99 L 287 99" stroke="#374151" stroke-width="2" marker-end="url(#ra-sn2m)"/><text x="302" y="99" class="atm" text-anchor="start">Nu&#x2212;CH&#x2082;CH&#x2083;</text><text x="406" y="99" class="atm" text-anchor="middle">+</text><text x="427" y="99" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="start">Br</text><text x="444" y="89" class="rch" text-anchor="start">&#x2212;</text><text x="105" y="162" class="dim" text-anchor="middle">Nu attacks ANTI to Br (back-attack only)</text><text x="105" y="175" class="dim" text-anchor="middle">BOTH species in rate step &#x2192; bimolecular (SN2)</text><text x="400" y="162" class="dim" text-anchor="middle">Configuration INVERTED at C</text><text x="400" y="175" class="dim" text-anchor="middle">(&#x201c;umbrella inversion&#x201d;)</text></svg>`
            }
        },
        {
            id: 'callout-sn2-inversion',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'SN2 Transition State and Umbrella Inversion',
                text: 'At the mid-point of SN2 there is a high-energy <strong>transition state</strong> (not isolable — it is not a reaction intermediate). The central carbon is briefly pentavalent: Nu is half-bonded from the rear and Br is half-bonded from the front, with the remaining three groups (H, H, CH₃) lying in a plane perpendicular to the Nu···C···Br axis.<br/><br/>As the reaction completes, the three groups swing through to the opposite face — like an umbrella blown inside-out — giving <strong>inversion of configuration</strong> at the carbon centre.<br/><br/><strong>Edexcel IAL exam note:</strong> you may be asked to draw the transition state showing Nu and Br with dotted bonds (Nu&#xb7;&#xb7;&#xb7;C&#xb7;&#xb7;&#xb7;Br) and the other groups with wedge/dash bonds in the equatorial plane.'
            }
        },
        {
            id: 'svg-sn2-oh',
            type: 'svg',
            data: {
                caption: 'SN2 mechanism for the specific reaction of bromoethane with hydroxide ions (OH⁻). OH⁻ lone pair attacks the δ+ carbon from the anti side in one concerted step, producing ethanol and bromide ion. Conditions: aqueous NaOH or KOH, 50:50 ethanol:water, heated under reflux.',
                svg: `<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-sn2oh" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-sn2oh" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.boh{stroke:#111827;stroke-width:1.5;fill:none}.aoh{fill:#111827;font-weight:bold;font-size:14px}.hoh{fill:#1e40af;font-weight:bold;font-size:12px}.doh{fill:#6b7280;font-size:11px}.roh{fill:#ef4444;font-weight:bold;font-size:13px}</style></defs><text x="270" y="19" class="hoh" text-anchor="middle">SN2 &#x2014; Bromoethane + OH&#x207b; &#x2192; Ethanol + Br&#x207b;</text><text x="270" y="32" class="doh" text-anchor="middle">aq. NaOH/KOH, 50:50 ethanol:water, heated under reflux</text><circle cx="38" cy="90" r="2.2" fill="#374151"/><circle cx="38" cy="100" r="2.2" fill="#374151"/><text x="50" y="101" class="aoh" text-anchor="start">HO</text><text x="71" y="90" class="roh" font-size="11" text-anchor="start">&#x2212;</text><path d="M 44 88 Q 90 61 132 83" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-sn2oh)"/><text x="145" y="77" class="roh" font-size="11" text-anchor="middle">&#x3b4;+</text><text x="145" y="101" class="aoh" text-anchor="middle">C</text><path d="M 145 89 L 145 63" class="boh"/><text x="145" y="58" class="aoh" text-anchor="middle">H</text><path d="M 145 109 L 145 135" class="boh"/><text x="145" y="148" class="aoh" text-anchor="middle">H</text><path d="M 155 95 L 180 79" class="boh"/><text x="193" y="77" class="aoh" text-anchor="start">CH&#x2083;</text><path d="M 155 101 L 218 101" class="boh"/><text x="222" y="79" class="roh" font-size="11" text-anchor="middle">&#x3b4;&#x2212;</text><text x="222" y="101" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><path d="M 195 104 Q 210 118 218 110" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-sn2oh)"/><path d="M 252 101 L 287 101" stroke="#374151" stroke-width="2" marker-end="url(#ra-sn2oh)"/><text x="300" y="101" class="aoh" text-anchor="start">CH&#x2083;CH&#x2082;OH</text><text x="400" y="101" class="aoh" text-anchor="middle">+</text><text x="420" y="101" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="start">Br</text><text x="437" y="90" class="roh" font-size="11" text-anchor="start">&#x2212;</text><text x="348" y="117" class="doh" text-anchor="middle">ethanol</text><text x="270" y="168" class="doh" text-anchor="middle">HO&#x207b; lone pair attacks C from ANTI side &#x2014; back-attack; one concerted step</text><text x="270" y="182" fill="#dc2626" font-size="11" text-anchor="middle">rate = k[CH&#x2083;CH&#x2082;Br][OH&#x207b;] &#x2014; second order (SN2) &#x2014; primary halogenoalkane only</text></svg>`
            }
        },
        {
            id: 'p-sn-secondary',
            type: 'paragraph',
            data: { text: '<strong>Secondary Halogenoalkanes:</strong> Undergo nucleophilic substitution via <strong>both</strong> S<sub>N</sub>1 and S<sub>N</sub>2 mechanisms simultaneously. Depending on specific reaction conditions and the halogen involved, one may be slightly favoured over the other, but both pathways are always active.' },
            terms: []
        },
        {
            id: 'callout-water',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Mechanism with Water (Nu: H₂O)',
                text: 'Unlike OH⁻, a water molecule is neutral, making it a weaker nucleophile. However, it can still substitute the halogen atom using one of the lone pairs on oxygen.<br/><br/><strong>Key Difference - The Extra Step:</strong><br/>1. The nucleophilic attack happens via SN1 or SN2 depending on the halogenoalkane.<br/>2. When water attacks, the immediate intermediate formed has an extra hydrogen attached (it is derived from water, not hydroxide), giving the oxygen a positive charge (an "alkyloxonium ion").<br/>3. A final <strong>"tidy up" deprotonation step</strong> is required: a second water molecule acts as a base to remove a proton (H⁺), yielding the final alcohol and forming a hydroxonium ion (H₃O⁺).'
            },
            terms: ['Neutral nucleophile', 'Deprotonation', 'Hydroxonium ion']
        },
        {
            id: 'svg-water-primary',
            type: 'svg',
            data: {
                caption: 'Two-step mechanism for primary halogenoalkane + water (SN2). Step 1 (slow): water lone pair attacks δ+ carbon from anti side → alkyloxonium ion intermediate + Br⁻. Step 2 (fast): second water molecule removes H⁺ from the oxonium → alcohol + hydroxonium ion (H₃O⁺). The combined H₃O⁺ and Br⁻ form hydrobromic acid in solution.',
                svg: `<svg viewBox="0 0 540 292" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-wp" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-wp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.bwp{stroke:#111827;stroke-width:1.5;fill:none}.awp{fill:#111827;font-weight:bold;font-size:14px}.hwp{fill:#1e40af;font-weight:bold;font-size:12px}.dwp{fill:#6b7280;font-size:11px}.rwp{fill:#ef4444;font-weight:bold;font-size:13px}</style></defs><text x="270" y="19" class="hwp" text-anchor="middle">Primary Halogenoalkane + H&#x2082;O &#x2014; Two-Step Mechanism</text><text x="270" y="32" class="dwp" text-anchor="middle">Example: bromoethane + H&#x2082;O &#x2192; ethanol + hydrobromic acid</text><text x="18" y="51" class="hwp" text-anchor="start">(1) SN2 nucleophilic substitution &#x2014; SLOW</text><circle cx="22" cy="92" r="2.2" fill="#374151"/><circle cx="22" cy="102" r="2.2" fill="#374151"/><text x="35" y="102" class="awp" text-anchor="start">H&#x2082;O</text><path d="M 28 89 Q 85 62 130 84" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-wp)"/><text x="148" y="78" class="rwp" font-size="11" text-anchor="middle">&#x3b4;+</text><text x="148" y="102" class="awp" text-anchor="middle">C</text><path d="M 148 90 L 148 65" class="bwp"/><text x="148" y="60" class="awp" text-anchor="middle">H</text><path d="M 148 110 L 148 135" class="bwp"/><text x="148" y="149" class="awp" text-anchor="middle">H</text><path d="M 158 96 L 183 80" class="bwp"/><text x="195" y="78" class="awp" text-anchor="start">CH&#x2083;</text><path d="M 158 102 L 218 102" class="bwp"/><text x="222" y="80" class="rwp" font-size="11" text-anchor="middle">&#x3b4;&#x2212;</text><text x="222" y="102" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><path d="M 197 105 Q 212 119 220 111" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-wp)"/><path d="M 252 102 L 287 102" stroke="#374151" stroke-width="2" marker-end="url(#ra-wp)"/><text x="298" y="102" class="awp" text-anchor="start">[CH&#x2083;CH&#x2082;&#x2013;OH&#x2082;]</text><text x="402" y="91" class="rwp" text-anchor="start">+</text><text x="421" y="102" class="awp" text-anchor="middle">+</text><text x="441" y="102" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="start">Br</text><text x="458" y="91" class="rwp" font-size="11" text-anchor="start">&#x2212;</text><text x="348" y="118" class="dwp" text-anchor="middle">alkyloxonium ion</text><text x="270" y="138" fill="#dc2626" font-size="11" text-anchor="middle">SLOW &#x2014; H&#x2082;O carries no full &#x2212;ve charge; far weaker nucleophile than OH&#x207b;</text><line x1="18" y1="152" x2="522" y2="152" stroke="#d1d5db" stroke-width="1" stroke-dasharray="5,3"/><text x="18" y="171" class="hwp" text-anchor="start">(2) Deprotonation &#x2018;tidy up&#x2019; &#x2014; fast</text><circle cx="22" cy="212" r="2.2" fill="#374151"/><circle cx="22" cy="222" r="2.2" fill="#374151"/><text x="35" y="222" class="awp" text-anchor="start">H&#x2082;O</text><text x="87" y="222" class="awp" text-anchor="middle">+</text><text x="100" y="222" class="awp" text-anchor="start">[CH&#x2083;CH&#x2082;&#x2013;OH&#x2082;]</text><text x="206" y="211" class="rwp" text-anchor="start">+</text><path d="M 28 210 Q 68 192 96 208" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-wp)"/><path d="M 252 218 L 287 218" stroke="#374151" stroke-width="2" marker-end="url(#ra-wp)"/><text x="298" y="218" class="awp" text-anchor="start">CH&#x2083;CH&#x2082;OH</text><text x="396" y="218" class="awp" text-anchor="middle">+</text><text x="412" y="218" class="awp" text-anchor="start">H&#x2083;O</text><text x="444" y="208" class="rwp" text-anchor="start">+</text><text x="346" y="234" class="dwp" text-anchor="middle">ethanol</text><text x="425" y="234" class="dwp" text-anchor="middle">hydroxonium</text><text x="270" y="264" class="dwp" text-anchor="middle">H&#x2083;O&#x207a; + Br&#x207b; in solution = hydrobromic acid (never call it hydrogen bromide gas)</text><text x="270" y="279" fill="#dc2626" font-size="11" text-anchor="middle">Tertiary + H&#x2082;O is FASTER: rate = k[RX] &#x2014; ionisation is slow step; nucleophile quality is irrelevant</text></svg>`
            }
        },
        {
            id: 'callout-water-rate',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why Primary + H₂O is Slow but Tertiary + H₂O is Faster',
                text: '<strong>Primary halogenoalkane + H₂O → SLOW:</strong> Water is directly involved in the SN2 rate-determining step (the back-attack on carbon). Because water carries no full negative charge, it is a much weaker nucleophile than OH⁻. This makes the collision less effective and the reaction slow.<br/><strong>Rate (primary):</strong> rate = k[RBr][H₂O] — second order.<br/><br/><strong>Tertiary halogenoalkane + H₂O → FASTER (than primary):</strong> The SN1 mechanism operates. The <strong>slow, rate-determining step is the ionisation</strong> of the C–X bond to a tertiary carbocation — this step does <em>not involve water at all</em>. Water quality as a nucleophile is completely irrelevant to the overall rate; all that matters is how quickly the halogenoalkane ionises.<br/><strong>Rate (tertiary):</strong> rate = k[(CH₃)₃CBr] — first order, independent of [H₂O].<br/><br/><strong>Why tertiary can ionise but primary cannot:</strong> Tertiary carbocations are stabilised by three alkyl groups (hyperconjugation/induction). Primary carbocations have no such stabilisation — far too unstable to form — so SN1 is inaccessible for primary halogenoalkanes.'
            },
            terms: ['Rate-determining step', 'Carbocation stability', 'First order', 'Second order']
        },
        {
            id: 'callout-hydrohalic',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Naming the Inorganic Product',
                text: 'In the reaction with water, the halide ion (X⁻) remains in solution alongside the generated hydroxonium ion (H₃O⁺). Although you might be tempted to write the side product as "hydrogen bromide (HBr)", you <strong>must not</strong> call it a gas. The correct name for H⁺ and Br⁻ in aqueous solution is <strong>hydrobromic acid</strong>. Calling it hydrogen bromide gas is incorrect because water is present as the reactant/solvent.'
            },
            terms: ['Hydrobromic acid', 'Aqueous solution']
        },
        {
            id: 'callout-ammonia',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Mechanism with Ammonia (NH₃)',
                text: 'The reaction between a halogenoalkane and ammonia involves exactly <strong>two steps</strong> and requires <strong>excess ammonia</strong>:<br/>1. The nucleophilic lone pair on the NH₃ molecule attacks the slightly positive carbon, forming an intermediate alkylammonium ion with a positive charge on the nitrogen.<br/>2. <strong>Reversible "Tidy Up" Step:</strong> A <em>second</em> ammonia molecule acts as a base, removing a hydrogen ion (H⁺) from the intermediate to yield the neutral primary amine and an ammonium ion (NH₄⁺). Because this second step is <strong>reversible</strong>, a large excess of ammonia pushes the equilibrium forward to maximise the yield of the primary amine.'
            },
            terms: ['Alkylammonium ion', 'Reversible step', 'Base']
        },
        {
            id: 'svg-sn2-nh3',
            type: 'svg',
            data: {
                caption: 'Two-step mechanism for a primary halogenoalkane reacting with ammonia (SN2). Step 1 (slow): NH₃ lone pair attacks the δ+ carbon from the anti side → ethylammonium bromide salt [CH₃CH₂NH₃]⁺ + Br⁻. Step 2 (fast, reversible): a second NH₃ molecule acts as a base and removes H⁺ from the alkylammonium ion → ethylamine + ammonium ion (NH₄⁺). Conditions: concentrated NH₃ in ethanol, heated in a sealed tube.',
                svg: `<svg viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-nh3" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-nh3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.bnh{stroke:#111827;stroke-width:1.5;fill:none}.anh{fill:#111827;font-weight:bold;font-size:14px}.hnh{fill:#1e40af;font-weight:bold;font-size:12px}.dnh{fill:#6b7280;font-size:11px}.rnh{fill:#ef4444;font-weight:bold;font-size:13px}.sep{stroke:#d1d5db;stroke-width:1;stroke-dasharray:5,3}</style></defs><text x="270" y="18" class="hnh" text-anchor="middle">Primary Halogenoalkane + NH&#x2083; &#x2014; Two-Step Mechanism</text><text x="270" y="30" class="dnh" text-anchor="middle">Example: bromoethane + NH&#x2083; &#x2192; ethylamine (ethanol, sealed tube)</text><text x="18" y="50" class="hnh" text-anchor="start">(1) SN2 nucleophilic substitution &#x2014; SLOW</text><circle cx="22" cy="93" r="2.2" fill="#374151"/><circle cx="22" cy="103" r="2.2" fill="#374151"/><text x="35" y="102" class="anh" text-anchor="start">H&#x2083;N</text><path d="M 28 90 Q 85 62 130 83" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-nh3)"/><text x="143" y="78" class="rnh" font-size="11" text-anchor="middle">&#x3b4;+</text><text x="143" y="101" class="anh" text-anchor="middle">C</text><line x1="143" y1="89" x2="143" y2="63" class="bnh"/><text x="143" y="58" class="anh" text-anchor="middle">H</text><line x1="143" y1="109" x2="143" y2="134" class="bnh"/><text x="143" y="148" class="anh" text-anchor="middle">H</text><line x1="153" y1="95" x2="178" y2="79" class="bnh"/><text x="190" y="78" class="anh" text-anchor="start">CH&#x2083;</text><line x1="153" y1="101" x2="218" y2="101" class="bnh"/><text x="222" y="81" class="rnh" font-size="11" text-anchor="middle">&#x3b4;&#x2212;</text><text x="222" y="101" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="middle">Br</text><path d="M 197 104 Q 210 118 218 110" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-nh3)"/><line x1="250" y1="101" x2="287" y2="101" stroke="#374151" stroke-width="2" marker-end="url(#ra-nh3)"/><text x="298" y="101" class="anh" text-anchor="start">[CH&#x2083;CH&#x2082;NH&#x2083;]</text><text x="406" y="91" class="rnh" text-anchor="start">+</text><text x="421" y="101" class="anh" text-anchor="middle">+</text><text x="441" y="101" fill="#7c3aed" font-weight="bold" font-size="14" text-anchor="start">Br</text><text x="458" y="90" class="rnh" font-size="11" text-anchor="start">&#x2212;</text><text x="350" y="117" class="dnh" text-anchor="middle">ethylammonium bromide salt</text><text x="270" y="132" fill="#dc2626" font-size="11" text-anchor="middle">rate = k[CH&#x2083;CH&#x2082;Br][NH&#x2083;] &#x2014; second order (SN2); NH&#x2083; attacks via N lone pair from ANTI side</text><line x1="18" y1="148" x2="522" y2="148" class="sep"/><text x="18" y="167" class="hnh" text-anchor="start">(2) Deprotonation &#x2018;tidy up&#x2019; &#x2014; fast but REVERSIBLE (&#x21cc;)</text><circle cx="22" cy="211" r="2.2" fill="#374151"/><circle cx="22" cy="221" r="2.2" fill="#374151"/><text x="35" y="218" class="anh" text-anchor="start">NH&#x2083;</text><text x="82" y="218" class="anh" text-anchor="middle">+</text><text x="94" y="218" class="anh" text-anchor="start">[CH&#x2083;CH&#x2082;NH&#x2083;]</text><text x="201" y="207" class="rnh" text-anchor="start">+</text><path d="M 28 209 Q 66 190 92 207" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-nh3)"/><line x1="228" y1="218" x2="265" y2="218" stroke="#374151" stroke-width="2" marker-end="url(#ra-nh3)"/><text x="276" y="218" class="anh" text-anchor="start">CH&#x2083;CH&#x2082;NH&#x2082;</text><text x="380" y="218" class="anh" text-anchor="middle">+</text><text x="400" y="218" class="anh" text-anchor="start">NH&#x2084;</text><text x="433" y="207" class="rnh" text-anchor="start">+</text><text x="320" y="233" class="dnh" text-anchor="middle">ethylamine (primary amine)</text><text x="416" y="233" class="dnh" text-anchor="middle">ammonium ion</text><text x="270" y="258" class="dnh" text-anchor="middle">Step 2 is reversible &#x21cc; &#x2014; large excess NH&#x2083; drives equilibrium forward (Le Chatelier&#x2019;s principle)</text><text x="270" y="271" class="dnh" text-anchor="middle">Ethylamine is also a nucleophile &#x2192; can attack unused RBr &#x2192; secondary/tertiary amines and quaternary salts form</text><text x="270" y="285" fill="#dc2626" font-size="11" text-anchor="middle">Use LARGE EXCESS NH&#x2083; &#x2192; mainly primary amine; use LARGE EXCESS RBr &#x2192; mainly quaternary ammonium salt</text></svg>`
            }
        },
        {
            id: 'callout-nh3-tertiary',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Tertiary Halogenoalkane + NH₃ — SN1 Route',
                text: 'Tertiary halogenoalkanes react with ammonia via <strong>SN1</strong>, not SN2, because three bulky alkyl groups prevent back-attack on the central carbon.<br/><br/><strong>Three stages:</strong><br/>1. <strong>Slow (rate-determining):</strong> (CH&#x2083;)&#x2083;CBr ionises without NH&#x2083; involvement &#x2192; stable tertiary carbocation (CH&#x2083;)&#x2083;C&#x207a; + Br&#x207b;.<br/>Rate = k[(CH&#x2083;)&#x2083;CBr] &#x2014; first order; rate is independent of [NH&#x2083;].<br/>2. <strong>Fast:</strong> NH&#x2083; lone pair attacks the planar carbocation from <strong>either face</strong> (not back-attack; no steric restriction on a sp&#xb2; carbocation) &#x2192; alkylammonium ion [(CH&#x2083;)&#x2083;CNH&#x2083;]&#x207a;.<br/>3. <strong>Fast, reversible:</strong> Second NH&#x2083; removes H&#x207a; from [(CH&#x2083;)&#x2083;CNH&#x2083;]&#x207a; &#x2192; (CH&#x2083;)&#x2083;CNH&#x2082; (tertiary amine) + NH&#x2084;&#x207a;.<br/><br/><strong>Conditions are identical</strong> to primary: concentrated NH&#x2083;/ethanol in a sealed tube. The difference is entirely in the mechanism (SN1 vs SN2), not the reagents or conditions.'
            },
            terms: ['SN1', 'Carbocation', 'Tertiary amine']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-classification', blockId: 'svg-classification', prompt: 'Define primary, secondary and tertiary halogenoalkanes. How many alkyl groups does each type have on the C–X carbon? What is special about methyl halides?' },
            { id: 'c-cn-solvent', blockId: 'callout-cyanide', prompt: 'Why must the reaction between a halogenoalkane and KCN be carried out in pure ethanol? What happens if water is present?' },
            { id: 'cue-cn-naming', blockId: 'callout-cyanide-naming', prompt: 'If you react bromoethane with KCN, what is the IUPAC name of the product? Explain why.' },
            { id: 'cue-sn2-cn', blockId: 'svg-sn2-cn', prompt: 'Draw or describe the SN2 mechanism for bromoethane reacting with KCN in ethanol. Which end of CN⁻ carries the nucleophilic lone pair? What is the product and why does chain length increase by 1? Write the rate expression.' },
            { id: 'c-nh3-sealed', blockId: 'callout-ammonia-products', prompt: 'Why is the reaction between a halogenoalkane and ammonia carried out in a heated sealed tube rather than under reflux?' },
            { id: 'c-nh3-excess', blockId: 'callout-ammonia-products', prompt: 'If you react bromoethane with ammonia, how can you favour the production of a primary amine over secondary or tertiary amines?' },
            { id: 'c-comp1', blockId: 'callout-competition', prompt: 'Which type of halogenoalkane (primary, secondary, or tertiary) is most likely to undergo an elimination reaction when treated with hydroxide ions?' },
            { id: 'c-comp2', blockId: 'callout-competition', prompt: 'State three reaction conditions that would favour elimination over substitution when reacting a halogenoalkane with potassium hydroxide.' },
            { id: 'cue-competition-svg', blockId: 'svg-competition', prompt: 'Describe the two competing pathways when 2-bromopropane reacts with hydroxide ions. What is the dual role of OH⁻? What are the products of each pathway? List three conditions that favour elimination over substitution, and state which factor is the most important.' },
            { id: 'c-elim-mech', blockId: 'callout-elimination-mechanism', prompt: 'In the elimination reaction of halogenoalkanes with hydroxide ions, what role does the hydroxide ion play, and what does it remove from the molecule?' },
            { id: 'cue-elim-svg', blockId: 'svg-elim-mech', prompt: 'Draw or describe the E2 elimination mechanism for 2-bromopropane reacting with ethanolic KOH. How many curly arrows are needed? Where does each start and end? What is the product and what conditions favour elimination over substitution?' },
            { id: 'c-elim-unsym', blockId: 'callout-elimination-unsymmetrical', prompt: 'When an unsymmetrical halogenoalkane like 2-bromobutane undergoes elimination, why is a mixture of products formed, and what are the three possible alkene isomers produced?' },
            { id: 'cue-elim-unsym-svg', blockId: 'svg-elim-unsym', prompt: 'Draw the two elimination pathways from 2-bromobutane. Which β-carbons supply an H? Name all 3 products. Why can the terminal C4 CH₃ NOT supply H? What is the exam drawing rule for alkenes with E/Z isomerism?' },
            { id: 'c1', blockId: 'table-reactions', prompt: 'State the reagents and conditions to convert a halogenoalkane into a nitrile. Why is this reaction synthetically very useful?' },
            { id: 'c2', blockId: 'table-reactions', prompt: 'Heating 1-bromobutane with AQUEOUS KOH produces an alcohol. What is the product if you heat it with ETHANOLIC KOH instead, and what type of reaction is that?' },
            { id: 'c3', blockId: 'p-sn1', prompt: 'State the type of mechanism that tertiary halogenoalkanes primarily use for substitution, and outline its two main steps.' },
            { id: 'c4', blockId: 'p-sn2', prompt: 'Why do primary halogenoalkanes undergo SN2 exclusively instead of forming a carbocation via SN1?' },
            { id: 'cue-sn-secondary', blockId: 'p-sn-secondary', prompt: 'Which nucleophilic substitution mechanism(s) do secondary halogenoalkanes undergo when reacting with hydroxide ions?' },
            { id: 'cue-water-tidy', blockId: 'callout-water', prompt: 'In the nucleophilic substitution mechanism of a halogenoalkane with water, what happens in the final "tidy up" step?' },
            { id: 'cue-hydrohalic', blockId: 'callout-hydrohalic', prompt: 'Why is the inorganic product of a halogenoalkane reacting with water called hydrobromic acid rather than hydrogen bromide?' },
            { id: 'c5', blockId: 'callout-ammonia', prompt: 'In the mechanism for reacting a halogenoalkane with ammonia, why is a large excess of ammonia required beyond just minimizing further substitutions?' },
            { id: 'cue-sn2-nh3', blockId: 'svg-sn2-nh3', prompt: 'Draw or describe the two-step mechanism for bromoethane reacting with excess ammonia. What salt forms in step 1? What happens in the reversible step 2? What is the overall product and why must conditions be a sealed tube?' },
            { id: 'cue-cx-rate', blockId: 'callout-cx-rate', prompt: 'State the rate order for nucleophilic substitution: RCl, RBr, RI. Why is C–F unreactive despite being the most polar C–X bond? Why is C–I the fastest despite having no permanent dipole?' },
            { id: 'cue-nucleophile', blockId: 'callout-nucleophile', prompt: 'Define a nucleophile. What feature must every nucleophile possess? Give two examples of (a) anionic nucleophiles and (b) neutral molecular nucleophiles.' },
            { id: 'cue-sn1-svg', blockId: 'svg-sn1-mech', prompt: 'Outline the two steps of the SN1 mechanism and identify which is rate-determining. Write the rate expression for SN1. Why can tertiary halogenoalkanes not use SN2?' },
            { id: 'cue-sn2-svg', blockId: 'svg-sn2-mech', prompt: 'Describe the SN2 mechanism in one sentence. Why does the nucleophile attack from the anti side? What happens to the configuration at the carbon centre? What is the transition state?' },
            { id: 'cue-oh-conditions', blockId: 'callout-oh-conditions', prompt: 'State the reagents and conditions for the reaction of a halogenoalkane with hydroxide ions to form an alcohol. Why can pure water NOT be used as the sole solvent?' },
            { id: 'cue-sn2-oh', blockId: 'svg-sn2-oh', prompt: 'Draw or describe the SN2 mechanism for bromoethane reacting with aqueous hydroxide ions. What is the product? Write the rate expression and state why it is second order.' },
            { id: 'cue-water-svg', blockId: 'svg-water-primary', prompt: 'Describe the two-step mechanism for a primary halogenoalkane reacting with water. Name the intermediate formed in step 1. What is the role of the second water molecule in step 2?' },
            { id: 'cue-water-rate', blockId: 'callout-water-rate', prompt: 'Why is the reaction of a primary halogenoalkane with water much slower than the same reaction with OH⁻? Why is the tertiary + water reaction faster than the primary + water reaction, even though water is still a weak nucleophile?' }
        ],
        summaryText: 'COMPETITION (subst. vs elim.): Same reagents (RX + NaOH/KOH, heat, reflux) give a mixture of substitution and elimination. OH⁻ DUAL ROLE: (1) as NUCLEOPHILE — lone pair attacks δ+ C–X carbon → C–OH forms, Br⁻ leaves → alcohol; (2) as BASE — lone pair removes β-H → E2 cascade: C(β)–H electrons → C=C, C–Br electrons → Br⁻ → alkene + H₂O. MOST IMPORTANT FACTOR — type of halogenoalkane: primary→mainly substitution (C–X accessible); secondary→both; tertiary→mainly elimination (3 alkyl groups block nucleophilic approach; OH⁻ attacks β-H instead). Conditions favouring elimination: pure ethanol, higher temp, conc. NaOH/KOH. Favouring substitution: aqueous, lower temp, dilute. Exam focus: 2-bromopropane (secondary) — conditions control ratio; no mechanistic explanation required at A-level. C–X BOND REACTIVITY: Bond strength (not polarity) determines SN rate. Order: RCl < RBr < RI. C–F unreactive — bond enthalpy 467 > C–H 413 kJ/mol. C–I fastest — weakest bond (228 kJ/mol) + easily polarised despite no permanent dipole. NUCLEOPHILE: species with lone pair attracted to δ+ C. Two types: fully −ve ions (OH⁻, CN⁻) or neutral molecules with δ− atom (H₂O, NH₃). Lone pair MUST be shown in exam mechanism. SN2 (primary): ONE concerted step; Nu lone pair attacks C from anti side (back-attack); pentavalent transition state; configuration INVERTED (umbrella inversion); rate = k[RX][Nu⁻] — second order. SN1 (tertiary): Step 1 SLOW (C–X ionises → planar tertiary carbocation + X⁻); Step 2 FAST (Nu attacks from either face); rate = k[RX] — first order; racemic product if chiral. WATER + HALOGENOALKANE: Primary → SN2 SLOW (H₂O weak nucleophile, no full −ve charge); two steps: SN2 → [R–OH₂]⁺ alkyloxonium intermediate, then H₂O removes H⁺ → alcohol + H₃O⁺; rate = k[RX][H₂O]. Tertiary → SN1 FASTER; rate = k[RX] (ionisation slowstep; nucleophile quality irrelevant). Both produce alcohol + hydrobromic acid (NOT hydrogen bromide gas). OH⁻ REACTION CONDITIONS: NaOH or KOH (aq); 50:50 ethanol:water solvent (halogenoalkane insoluble in pure water — ethanol creates homogeneous mixture); heated under reflux; product = alcohol + halide ion. PRIMARY (1°): one alkyl group on C–X carbon (+2H). SECONDARY (2°): two alkyl groups (+1H). TERTIARY (3°): three alkyl groups (no H). Methyl halides = primary by convention. Reactions: (1) aq KOH → alcohol, (2) KCN/ethanol → nitrile (+1C), (3) excess NH₃/ethanol → primary amine, (4) ethanolic KOH → alkene (elimination). Secondary halogenoalkanes use both SN1 and SN2 simultaneously. NH₃ MECHANISM (primary → SN2): Step 1 SLOW — NH₃ lone pair back-attacks δ+ C (ANTI to Br) → ethylammonium salt [CH₃CH₂NH₃]⁺ + Br⁻; rate = k[RBr][NH₃] second order. Step 2 FAST REVERSIBLE — second NH₃ removes H⁺ from alkylammonium → primary amine + NH₄⁺; must use excess NH₃ to drive equilibrium and minimise further substitution. NH₃ MECHANISM (tertiary → SN1): Step 1 slow ionisation (rate = k[RBr], first order) → tertiary carbocation + Br⁻; Step 2 fast — NH₃ attacks from EITHER face; Step 3 fast reversible tidy-up → amine + NH₄⁺. Conditions identical (sealed tube, NH₃/ethanol) regardless of mechanism. Ethylamine (product) is also a nucleophile → attacks more RBr → secondary/tertiary amines and quaternary ammonium salt; use excess NH₃ to favour primary amine; excess RBr to favour quaternary salt. CN⁻ REACTION: KCN/ethanol, reflux; CN⁻ attacks via CARBON end (C≡N⁻) — not nitrogen; SN2 for primary, rate = k[RX][CN⁻], second order; chain length +1C; name nitrile including CN carbon (bromoethane C₂ → propanenitrile C₃); solvent must be ethanol (aq KCN has OH⁻ → alcohol instead of nitrile). ELIMINATION MECHANISM: 2-bromopropane + conc. ethanolic KOH/NaOH, heat under reflux → propene + H₂O + Br⁻. OH⁻ acts as BASE (not nucleophile). α-carbon = C bonded to X; β-carbon = adjacent C that contributes H. 3 concerted curly arrows (E2): (1) OH⁻ lone pair → H on β-C; (2) C(β)–H electrons → C=C π bond; (3) C(α)–Br electrons → Br⁻. Rate = k[RX][OH⁻] — second order. Favoured by: tertiary/secondary RX, conc. ethanolic KOH, high temperature. Unsymmetrical halogenoalkanes (e.g. 2-bromobutane) give mixture of alkene products (but-1-ene, E-but-2-ene, Z-but-2-ene). β-CARBON RULE: H can only be removed from a carbon directly bonded to C–Br (β-carbon); terminal C4 CH₃ in 2-bromobutane is not adjacent to C–Br — H⁻ expulsion from C3 is energetically impossible. 120° DRAWING RULE: always draw C=C with 120° bond angles — shorthand CH₃CH=CHCH₃ hides E/Z isomers in exam answers.',
        ready: false
    },
    evidence: [
        {
            id: 'ev-1',
            title: 'Classification of halogenoalkanes — primary, secondary, tertiary',
            detail: 'Defines primary, secondary and tertiary halogenoalkanes by the number of alkyl groups on the C–X carbon. Methyl halides counted as primary by convention. Classification predicts SN1 vs SN2 mechanism.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/nucsub/types.html',
            tags: ['halogenoalkane', 'primary', 'secondary', 'tertiary', 'classification', 'SN1', 'SN2']
        },
        {
            id: 'ev-2',
            title: 'C–X bond polarity/strength, nucleophile definition, SN1 and SN2 mechanisms',
            detail: 'C–X bond enthalpy table (C–F 467, C–Cl 346, C–Br 290, C–I 228 kJ/mol). Bond strength dominates over polarity — rate order RCl < RBr < RI. C–F unreactive (bond > C–H). C–I fastest (no dipole but weakest + polarisable). Nucleophile definition: lone-pair donor to δ+ centre; ions (OH⁻, CN⁻) or neutral molecules (H₂O, NH₃). SN2: back-attack (steric + electrostatic), concerted, pentavalent transition state, inversion of configuration. SN1: two-step, slow ionisation to tertiary carbocation (rate-determining), fast Nu attack from either face, first-order kinetics, racemic if chiral. Secondary uses both mechanisms.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/nucsub/whatis.html',
            tags: ['C-X bond', 'bond enthalpy', 'nucleophile', 'SN1', 'SN2', 'back-attack', 'inversion', 'carbocation', 'transition state', 'rate order']
        },
        {
            id: 'ev-3',
            title: 'Halogenoalkane + OH⁻ reactions — conditions, SN1/SN2 mechanisms for each type',
            detail: 'Specific conditions for OH⁻ substitution: NaOH or KOH; 50:50 ethanol:water solvent (halogenoalkane insoluble in pure water, ethanol creates homogeneous mixture); heated under reflux. Primary → SN2 (OH⁻ back-attack on bromoethane → ethanol + Br⁻, rate = k[RX][OH⁻], second order). Tertiary → SN1 (slow ionisation → carbocation, fast OH⁻ attack from either face). Secondary → both SN1 and SN2.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/nucsub/hydroxide.html',
            tags: ['hydroxide', 'OH⁻', 'nucleophile', 'reflux', 'solvent', 'ethanol:water', 'SN1', 'SN2', 'bromoethane', 'ethanol', 'primary', 'tertiary', 'secondary']        },
        {
            id: 'ev-4',
            title: 'Halogenoalkane + water — two-step mechanisms, alkyloxonium intermediate, rate comparison',
            detail: 'Primary + H₂O → SN2 (SLOW): H₂O lone pair attacks C from anti side → alkyloxonium intermediate [R–OH₂]⁺ + X⁻; second H₂O removes H⁺ → alcohol + H₃O⁺. Rate = k[RX][H₂O]; second order. Slow because H₂O has no full −ve charge (weaker than OH⁻). Tertiary + H₂O → SN1 (FASTER): slow ionisation (rate = k[RX]) → tertiary carbocation; fast H₂O attack from either face → [R–OH₂]⁺; fast tidy-up → alcohol + H₃O⁺. Rate independent of [H₂O]. H₃O⁺ + X⁻ in solution = hydrohalic acid.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/nucsub/water.html',
            tags: ['water', 'H₂O', 'alkyloxonium', 'deprotonation', 'tidy-up', 'SN1', 'SN2', 'rate', 'weak nucleophile', 'hydroxonium', 'hydrobromic acid', 'primary', 'tertiary']        },
        {
            id: 'ev-5',
            title: 'Halogenoalkane + CN⁻ — nitrile formation, carbon-end attack, solvent rationale',
            detail: 'KCN/ethanol, reflux → nitrile (+1C chain). CN⁻ attacks via CARBON end (C≡N⁻); product R–C≡N is a nitrile (new C–C bond forms). Primary → SN2: one concerted step, back-attack, rate = k[RX][CN⁻], second order. Tertiary → SN1: slow ionisation → carbocation, fast CN⁻ attack from either face. Solvent must be ethanol — aqueous KCN is alkaline (contains OH⁻) → alcohol instead of nitrile. Naming: count CN carbon in longest chain (bromoethane C₂ → propanenitrile C₃).',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/nucsub/cyanide.html',
            tags: ['cyanide', 'KCN', 'nitrile', 'chain lengthening', 'SN2', 'SN1', 'carbon end attack', 'ethanol solvent', 'CN⁻']
        },
        {
            id: 'ev-6',
            title: 'Halogenoalkane + NH₃ — SN2 primary mechanism, SN1 tertiary, sealed tube, product control',
            detail: 'NH₃/ethanol, sealed tube (not reflux — NH₃ would escape). Primary → SN2: NH₃ lone pair back-attacks δ+ C → ethylammonium salt [CH₃CH₂NH₃]⁺ + Br⁻; rate = k[RX][NH₃], second order. Step 2 reversible: second NH₃ removes H⁺ → ethylamine + NH₄⁺; excess NH₃ drives forward. Tertiary → SN1: slow ionisation → tertiary carbocation; fast NH₃ attack from either face → alkylammonium ion; tidy-up gives amine + NH₄⁺. Further substitution: amine is also a nucleophile → attacks more RBr → secondary/tertiary amines/quaternary salt. Use excess NH₃ for primary amine; excess RBr for quaternary ammonium salt.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/nucsub/ammonia.html',
            tags: ['ammonia', 'NH₃', 'primary amine', 'SN2', 'SN1', 'sealed tube', 'ethylammonium', 'alkylammonium', 'deprotonation', 'reversible', 'excess ammonia', 'quaternary ammonium salt']
        },
        {
            id: 'ev-7',
            title: 'Elimination mechanism — 2-bromopropane + OH⁻, concerted E2, ethanolic KOH',
            detail: '2-bromopropane + conc. KOH/NaOH in ethanol, heat under reflux → propene + H₂O + Br⁻. OH⁻ acts as BASE (not nucleophile): removes H from β-carbon (adjacent to C–Br). 3 concerted curly arrows (E2): (1) OH⁻ lone pair → H on β-C; (2) C(β)–H bond electrons → C=C π bond; (3) C(α)–Br bond electrons → Br⁻. Rate = k[RX][OH⁻]; second order. Page focuses on 2-bromopropane (secondary) as the classic example because secondary halogenoalkanes can do either substitution or elimination depending on conditions.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/elim/elim.html',
            tags: ['elimination', 'E2', 'dehydrohalogenation', 'base', 'beta-carbon', '2-bromopropane', 'propene', 'alkene', 'ethanolic KOH', 'curly arrows', 'concerted', 'second order']
        },
        {
            id: 'ev-8',
            title: 'Unsymmetrical elimination — 2-bromobutane gives 3 products, β-carbon rule, E/Z isomers',
            detail: '2-bromobutane + ethanolic KOH → 3 products: but-1-ene (H from C1/β-left), (E)-but-2-ene and (Z)-but-2-ene (H from C3/β-right). but-2-ene has geometric isomerism because C=C is “locked” (rotation requires breaking π bond). β-carbon rule: H can only come from a carbon directly bonded to C–Br; C4 terminal CH₃ cannot give H (would need H⁻ expulsion from C3 — too high energy). 120° drawing rule: write alkene products with correct bond angles or E/Z isomers will be missed.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/elim/elimunsym.html',
            tags: ['elimination', 'unsymmetrical', '2-bromobutane', 'but-1-ene', 'but-2-ene', 'E/Z isomerism', 'geometric isomerism', 'beta-carbon', '120 degrees', 'three products']
        },
        {
            id: 'ev-9',
            title: 'Elimination vs substitution — dual role of OH⁻, conditions control ratio, 2-bromopropane',
            detail: 'Same reagents (RX + NaOH/KOH, heat, reflux) → mixture of substitution (alcohol) and elimination (alkene). OH⁻ dual role: as nucleophile — lone pair attacks δ+ C → C–OH bond forms, Br⁻ leaves → alcohol (SN1/SN2); as base — lone pair removes β-H → E2 cascade: C(β)–H electrons → C=C π bond, C–Br electrons → Br⁻ → alkene + H₂O. Three factors: (1) type of halogenoalkane (MOST IMPORTANT) — primary→mainly substitution (accessible C–X); secondary→both; tertiary→mainly elimination (3 alkyl groups block nucleophilic attack on C–X; OH⁻ attacks β-H instead); (2) solvent — water→substitution, ethanol→elimination; (3) temp + conc. — higher temp + conc. NaOH → elimination. To favour elimination: conc. ethanolic NaOH/KOH + heat. A-level scope: no mechanistic explanation required; exam focuses on 2-bromopropane (secondary).',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/elim/elimvsubst.html',
            tags: ['elimination', 'substitution', 'competition', 'dual role', 'OH⁻', 'nucleophile', 'base', '2-bromopropane', 'aqueous', 'ethanolic', 'conditions', 'secondary', 'steric hindrance', 'tertiary']
        }
    ]
};
export default note_chemistry_2_10_3;
