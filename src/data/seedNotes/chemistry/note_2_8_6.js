/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 6
 * "Group 7 Trends, Displacement Reactions, and Other Reactions"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8C.1, 8C.2 + chemguide.co.uk/inorganic/group7
 */
export const note_chemistry_2_8_6 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand physical and chemical trends down Group 7 (halogens), including oxidising ability, displacement reactions, bond enthalpies, solubility, reactions with H₂/Na/Fe/NaOH, and disproportionation.' },
            terms: []
        },
        {
            id: 'h-states',
            type: 'heading',
            data: { text: 'Physical States and Colours', level: 2 },
            terms: []
        },
        {
            id: 'table-states',
            type: 'comparisonTable',
            data: {
                caption: 'Physical states and colours of halogens at room temperature',
                headers: ['Halogen', 'Formula', 'State (25°C)', 'Colour'],
                rows: [
                    ['Fluorine', 'F₂', 'Gas', 'Pale yellow'],
                    ['Chlorine', 'Cl₂', 'Gas', 'Yellow-green'],
                    ['Bromine', 'Br₂', 'Liquid', 'Red-brown; orange-yellow vapour'],
                    ['Iodine', 'I₂', 'Solid', 'Grey/dark solid; purple vapour'],
                ]
            },
            terms: []
        },
        {
            id: 'h-trends',
            type: 'heading',
            data: { text: 'Trends Down Group 7', level: 2 },
            terms: []
        },
        {
            id: 'svg-atomic-radii',
            type: 'svg',
            data: {
                caption: 'Atomic radii increase down Group 7: each halogen has an extra electron shell but the same effective nuclear charge of ~7+',
                svg: '<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="10" y="16" font-size="11" fill="#555">Atomic radius increases down group (more shells, same net +7 pull on outer electrons)</text><circle cx="60" cy="72" r="18" fill="none" stroke="#6366f1" stroke-width="2"/><text x="60" y="76" text-anchor="middle" font-size="11" fill="#6366f1">F</text><text x="60" y="106" text-anchor="middle" font-size="10" fill="#555">smallest</text><circle cx="155" cy="67" r="26" fill="none" stroke="#22c55e" stroke-width="2"/><text x="155" y="71" text-anchor="middle" font-size="11" fill="#22c55e">Cl</text><circle cx="260" cy="62" r="34" fill="none" stroke="#f59e0b" stroke-width="2"/><text x="260" y="66" text-anchor="middle" font-size="11" fill="#f59e0b">Br</text><circle cx="375" cy="57" r="42" fill="none" stroke="#ef4444" stroke-width="2"/><text x="375" y="61" text-anchor="middle" font-size="11" fill="#ef4444">I</text><text x="375" y="106" text-anchor="middle" font-size="10" fill="#555">largest</text></svg>'
            },
            terms: []
        },
        {
            id: 'list-trends',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Atomic radius INCREASES ↓ group:</strong> Each successive halogen has an extra electron shell. The outer electrons always see a net nuclear charge of approximately +7 (7 protons, partially cancelled by inner shells). More shells = outer electrons further from nucleus = larger atom.',
                    '<strong>Boiling/melting points INCREASE ↓ group:</strong> All halogens are diatomic non-polar molecules (X₂). Larger molecules have more electrons → stronger London dispersion forces between molecules → more energy to overcome → higher bp/mp.',
                    '<strong>Electronegativity DECREASES ↓ group:</strong> Atoms get larger and shielding increases. The bonding pair is further from the nucleus and less strongly attracted → lower ability to pull electrons in a bond.',
                    '<strong>Reactivity DECREASES ↓ group:</strong> Halogens react by gaining an electron (X₂ + 2e⁻ → 2X⁻). Increased radius and shielding reduce the nucleus\'s ability to attract an incoming electron → harder to gain an electron → less reactive.'
                ]
            },
            terms: ['Atomic radius', 'Electronegativity', 'London dispersion forces']
        },
        {
            id: 'h-ea',
            type: 'heading',
            data: { text: 'Electron Affinity and the Fluorine Anomaly', level: 2 },
            terms: []
        },
        {
            id: 'callout-ea-anomaly',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Fluorine Electron Affinity Anomaly',
                text: 'Electron affinity (EA) is the energy released when a gaseous atom gains one electron: X(g) + e⁻ → X⁻(g). You might expect F to have the most exothermic EA (most electronegative). Instead, Cl has a more exothermic EA than F — an anomaly.<br/><br/><strong>Explanation:</strong> F is an extremely small atom with three lone pairs already in the compact 2-level. The existing electron density is very high. When an incoming electron tries to enter the 2p orbital, it faces strong repulsion from the densely packed existing electrons → less energy is released than expected.'
            },
            terms: ['Electron affinity']
        },
        {
            id: 'table-ea',
            type: 'comparisonTable',
            data: {
                caption: 'Electron affinity values for halogens (kJ mol⁻¹)',
                headers: ['Halogen', 'EA (kJ mol⁻¹)', 'Note'],
                rows: [
                    ['F', '−328', 'Anomalously less exothermic than Cl — compact 2p, high existing electron density'],
                    ['Cl', '−349', 'Most exothermic in the group (expected trend resumes from here)'],
                    ['Br', '−324', 'Less exothermic than Cl'],
                    ['I', '−295', 'Least exothermic — largest atom, weakest nuclear attraction'],
                ]
            },
            terms: []
        },
        {
            id: 'h-bond',
            type: 'heading',
            data: { text: 'Bond Enthalpies', level: 2 },
            terms: []
        },
        {
            id: 'table-xx-bond',
            type: 'comparisonTable',
            data: {
                caption: 'X–X bond enthalpies (kJ mol⁻¹) — note the F–F anomaly',
                headers: ['Bond', 'Enthalpy (kJ mol⁻¹)', 'Note'],
                rows: [
                    ['F–F', '~158', 'Anomalously WEAK (see below)'],
                    ['Cl–Cl', '~243', 'Strongest in the group'],
                    ['Br–Br', '~193', 'Decreases regularly'],
                    ['I–I', '~151', 'Weakest of Cl/Br/I series'],
                ]
            },
            terms: []
        },
        {
            id: 'callout-ff-anomaly',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'F–F Bond Anomaly and Contrast with H–X Bonds',
                text: '<strong>F–F (~158 kJ mol⁻¹) is weaker than Cl–Cl (~243 kJ mol⁻¹)</strong> — counter-intuitive since smaller atoms normally form stronger bonds.<br/><br/><strong>Reason:</strong> Each F atom has three lone pairs at the 2-level in a very compact space. When two F atoms bond, all six lone pairs are crowded together. The intense lone-pair–lone-pair repulsion between the two electronegative F atoms significantly weakens the bond.<br/><br/><strong>H–X bonds have NO anomaly:</strong> H has no lone pairs, so no such repulsion occurs. H–X bond enthalpies decrease regularly: H–F (~568) > H–Cl (~432) > H–Br (~366) > H–I (~297) kJ mol⁻¹. Thermal stability of HX gases follows this trend: HF and HCl very stable; HBr splits slightly on strong heating; HI splits considerably on heating.'
            },
            terms: []
        },
        {
            id: 'h-solubility',
            type: 'heading',
            data: { text: 'Solubility and Reactions with Water', level: 2 },
            terms: []
        },
        {
            id: 'table-solubility',
            type: 'comparisonTable',
            data: {
                caption: 'Approximate solubility of halogens in water at ~25°C',
                headers: ['Halogen', 'Solubility (mol dm⁻³)', 'Nature of reaction with water'],
                rows: [
                    ['F₂', 'Reacts violently', '2F₂ + 2H₂O → 4HF + O₂ (too reactive to dissolve simply)'],
                    ['Cl₂', '0.091', 'Cl₂ + H₂O ⇌ HCl + HClO (equilibrium; ~⅓ reacts)'],
                    ['Br₂', '0.21', 'Slight disproportionation similar to Cl₂'],
                    ['I₂', '0.0013 (very sparingly soluble)', 'I₂ + I⁻ ⇌ I₃⁻ (dark red-brown) in KI solution'],
                ]
            },
            terms: []
        },
        {
            id: 'list-solubility-notes',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>F₂ reacts violently with water</strong> — too powerful an oxidising agent to use in aqueous displacement reactions.',
                    '<strong>Cl₂ + H₂O:</strong> About ⅓ of dissolved Cl₂ reacts at equilibrium. HClO (chloric(I) acid, Cl at +1) kills bacteria in water treatment.',
                    '<strong>Iodine + KI solution:</strong> I₂ is very sparingly soluble in water alone but dissolves freely in KI via I₃⁻ formation (dark red-brown). When KI is exhausted, dark grey I₂ solid precipitates.',
                    '<strong>Organic solvents:</strong> All halogens are much more soluble in organic solvents (hexane, cyclohexane) than in water — both are non-polar. This is used in displacement tests to clearly identify which halogen is produced.'
                ]
            },
            terms: []
        },
        {
            id: 'h-oxidising',
            type: 'heading',
            data: { text: 'Oxidising Ability — Thermochemical Explanation', level: 2 },
            terms: []
        },
        {
            id: 'p-oxidising',
            type: 'paragraph',
            data: { text: 'Oxidising ability decreases down Group 7: F₂ ≫ Cl₂ > Br₂ > I₂. To explain this properly, we must consider the complete energy cycle when X₂(g) is reduced to X⁻(aq). Three energy changes are involved:' },
            terms: []
        },
        {
            id: 'svg-energy-cycle',
            type: 'svg',
            data: {
                caption: 'Energy cycle for ½X₂(g) → X⁻(aq): three steps determine the total energy released and hence the oxidising power',
                svg: '<svg viewBox="0 0 500 135" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10"><rect x="5" y="20" width="140" height="40" rx="5" fill="#e0e7ff" stroke="#6366f1"/><text x="75" y="36" text-anchor="middle" fill="#3730a3">½X₂(g) → X(g)</text><text x="75" y="50" text-anchor="middle" fill="#3730a3">Atomisation (+ve)</text><text x="150" y="43" text-anchor="middle" fill="#555" font-size="13">→</text><rect x="160" y="20" width="145" height="40" rx="5" fill="#dcfce7" stroke="#22c55e"/><text x="232" y="36" text-anchor="middle" fill="#166534">X(g) + e⁻ → X⁻(g)</text><text x="232" y="50" text-anchor="middle" fill="#166534">Electron affinity (−ve)</text><text x="310" y="43" text-anchor="middle" fill="#555" font-size="13">→</text><rect x="318" y="20" width="140" height="40" rx="5" fill="#fef3c7" stroke="#f59e0b"/><text x="388" y="36" text-anchor="middle" fill="#92400e">X⁻(g) → X⁻(aq)</text><text x="388" y="50" text-anchor="middle" fill="#92400e">Hydration enthalpy (−ve)</text><text x="250" y="80" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Overall = Atomisation + EA + Hydration of X⁻</text><text x="250" y="97" text-anchor="middle" fill="#6366f1">More negative overall energy = stronger oxidising agent</text><text x="250" y="114" text-anchor="middle" fill="#555">Key driver for Cl→Br→I trend: hydration enthalpy of X⁻ (falls as ion gets larger)</text></svg>'
            },
            terms: []
        },
        {
            id: 'table-oxidising-thermo',
            type: 'comparisonTable',
            data: {
                caption: 'Full thermochemical comparison of halogen oxidising power (all values kJ mol⁻¹)',
                headers: ['Halogen', 'Atomisation (½X-X, +ve)', 'EA (X(g)+e⁻→X⁻(g), −ve)', 'Hydration ΔH of X⁻ (−ve)', 'Overall'],
                rows: [
                    ['F₂', '+79', '−328', '−506', '<strong>−755</strong>'],
                    ['Cl₂', '+121', '−349', '−364', '<strong>−592</strong>'],
                    ['Br₂', '+112', '−324', '−335', '<strong>−547</strong>'],
                    ['I₂', '+107', '−295', '−293', '<strong>−481</strong>'],
                ]
            },
            terms: []
        },
        {
            id: 'callout-key-oxidising',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Interpreting the Oxidising Power Data',
                text: '<strong>Why the Cl→Br→I trend exists:</strong> The most important factor is the hydration enthalpy of X⁻. As the halide ion gets larger, it attracts water molecules less strongly → less energy released on hydration → less exothermic overall.<br/><br/><strong>Why F₂ is far stronger than Cl₂ (despite lower EA):</strong><br/>• F₂ has very low atomisation energy (F–F bond is anomalously weak — lone pair repulsion).<br/>• F⁻ has very high hydration enthalpy (exceptionally small ion → very strongly attracted to water).<br/>• These combine to give F₂ an overall of −755 vs −592 for Cl₂.<br/><br/><strong>Misconception warning:</strong> Saying "F₂ is a better oxidising agent because F attracts electrons more" misses the picture — the atomisation and hydration steps matter just as much.'
            },
            terms: []
        },
        {
            id: 'h-displacement',
            type: 'heading',
            data: { text: 'Displacement Reactions of Halogens', level: 2 },
            terms: []
        },
        {
            id: 'callout-displacement-eqs',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Halogen Displacement Equations and Observations',
                text: '<strong>Cl₂ displacing Br⁻:</strong> Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)<br/>Observation: solution turns orange / yellow-brown.<br/><br/><strong>Cl₂ displacing I⁻:</strong> Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)<br/>Observation: dark red-brown (I₃⁻ if excess I⁻) or dark grey solid (if I⁻ exhausted / excess Cl₂).<br/><br/><strong>Br₂ displacing I⁻:</strong> Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq)<br/>Observation: red-brown to dark solution.<br/><br/><strong>I₂ cannot displace Cl⁻ or Br⁻</strong> — I₂ is too weak an oxidising agent.'
            },
            terms: ['Displacement reaction', 'Oxidising power']
        },
        {
            id: 'table-colours',
            type: 'comparisonTable',
            data: {
                caption: 'Identifying halogens using organic solvent (cyclohexane/hexane) extraction',
                headers: ['Halogen', 'Colour in Water', 'Colour in Hexane/Cyclohexane'],
                rows: [
                    ['Cl₂', 'Pale green or colourless', 'Pale green'],
                    ['Br₂', 'Orange-yellow', 'Orange to red'],
                    ['I₂', 'Brown / dark brown', 'Violet / purple (vivid)'],
                ]
            },
            terms: ['Hexane', 'Cyclohexane']
        },
        {
            id: 'p-solvent-extraction',
            type: 'paragraph',
            data: { text: 'Shaking the reaction mixture with cyclohexane or hexane gives a cleaner result — the organic layer floats on top and concentrates the halogen, giving a more vivid colour. This is especially useful to distinguish Br₂ (orange–red) from I₂ (vivid violet), which are harder to tell apart in water alone.' },
            terms: []
        },
        {
            id: 'h-other',
            type: 'heading',
            data: { text: 'Other Reactions of Halogens', level: 2 },
            terms: []
        },
        {
            id: 'table-h2',
            type: 'comparisonTable',
            data: {
                caption: 'Reaction of halogens with hydrogen gas: H₂(g) + X₂(g) → 2HX(g)',
                headers: ['Halogen', 'Conditions / Vigour', 'Notes'],
                rows: [
                    ['F₂', 'Explosive even in cold and dark', 'Most vigorous; F₂ is the strongest oxidising agent'],
                    ['Cl₂', 'Explosive in sunlight or with a flame', 'Also rapid when sparked'],
                    ['Br₂', 'Mild explosion with a flame', 'Needs more energy to initiate'],
                    ['I₂', 'Only partial reaction: H₂(g) + I₂(g) ⇌ 2HI(g)', 'Reversible; I₂ too weak an oxidising agent to drive to completion'],
                ]
            },
            terms: []
        },
        {
            id: 'callout-na-p',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Reactions with Sodium and Phosphorus',
                text: '<strong>With Sodium:</strong> All halogens react — 2Na(s) + X₂ → 2NaX(s). Na burns with a yellow-orange flame in Cl₂ producing white NaCl fumes. Same applies with Br₂ and I₂ vapour.<br/><br/><strong>With Phosphorus:</strong> All form PX₃ (e.g. P₄ + 6Br₂ → 4PBr₃). Excess Cl₂ or Br₂ reacts further to give PX₅ (e.g. PCl₃ + Cl₂ → PCl₅). PI₅ is not formed — five large I atoms cannot geometrically pack around a single P atom.'
            },
            terms: []
        },
        {
            id: 'callout-fe',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Reactions with Iron — Key Difference for I₂',
                text: '<strong>F₂, Cl₂, and Br₂</strong> all oxidise iron to Fe<sup>3+</sup>:<br/>2Fe(s) + 3Cl₂(g) → 2FeCl₃(s) &nbsp; (and similarly with F₂ and Br₂)<br/><br/><strong>I₂ can only oxidise iron to Fe<sup>2+</sup>:</strong><br/>Fe(s) + I₂ → FeI₂(s)<br/><br/>Reason: I₂ is too weak an oxidising agent to pull a second electron from iron (i.e. Fe²⁺ → Fe³⁺). The reduction potential of I₂/I⁻ is insufficient to drive Fe²⁺ → Fe³⁺.'
            },
            terms: []
        },
        {
            id: 'callout-fe2',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Reactions with Fe²⁺ Ions in Solution',
                text: '<strong>Cl₂ and Br₂</strong> oxidise Fe²⁺(aq) → Fe³⁺(aq):<br/>Cl₂(aq) + 2Fe²⁺(aq) → 2Cl⁻(aq) + 2Fe³⁺(aq)<br/>Observation: pale green Fe²⁺ solution turns yellow/orange (Fe³⁺).<br/><br/><strong>I₂ CANNOT oxidise Fe²⁺</strong> — iodine is too weak an oxidising agent.<br/><br/><strong>Reverse reaction — Fe³⁺ oxidises I⁻:</strong><br/>2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(aq)<br/>This reversal is used analytically in iodimetric titrations to determine Fe³⁺ concentration.'
            },
            terms: []
        },
        {
            id: 'h-disproportionation',
            type: 'heading',
            data: { text: 'Disproportionation Reactions with NaOH', level: 2 },
            terms: []
        },
        {
            id: 'p-disproportionation',
            type: 'paragraph',
            data: { text: 'Disproportionation is a redox reaction in which the <strong>same element</strong> is simultaneously oxidised and reduced. Halogens undergo disproportionation in alkaline solution:' },
            terms: ['Disproportionation']
        },
        {
            id: 'callout-water',
            type: 'callout',
            data: {
                style: 'worked',
                title: '1. Reaction with Water',
                text: 'Cl₂(g) + H₂O(l) ⇌ HCl(aq) + HClO(aq)<br/><br/>Cl: 0 → −1 (in HCl, <em>reduced</em>) and 0 → +1 (in HClO, <em>oxidised</em>). About ⅓ of Cl₂ reacts at equilibrium. HClO (chloric(I) acid) kills bacteria and is used in water purification.'
            },
            terms: ['Chloric(I) acid']
        },
        {
            id: 'callout-cold-alkali',
            type: 'callout',
            data: {
                style: 'worked',
                title: '2. Reaction with Cold, Dilute NaOH — Makes Bleach',
                text: 'Cl₂(g) + 2NaOH(aq) → NaCl(aq) + NaClO(aq) + H₂O(l)<br/><br/>Cl: 0 → −1 (NaCl, reduced) and 0 → +1 (NaClO, oxidised).<br/>NaClO = sodium chlorate(I). Active ingredient in household bleach.'
            },
            terms: ['Sodium chlorate(I)', 'Bleach']
        },
        {
            id: 'callout-hot-alkali',
            type: 'callout',
            data: {
                style: 'worked',
                title: '3. Reaction with Hot, Concentrated NaOH — Makes Weed Killer',
                text: '3Cl₂(g) + 6NaOH(aq) → 5NaCl(aq) + NaClO₃(aq) + 3H₂O(l)<br/><br/>Cl: 0 → −1 (NaCl, reduced) and 0 → +5 (NaClO₃, oxidised).<br/>NaClO₃ = sodium chlorate(V). Used as a weed killer. High temperature drives the reaction toward the higher oxidation product.'
            },
            terms: ['Sodium chlorate(V)']
        },
        {
            id: 'callout-br-i-naoh',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Bromine and Iodine with NaOH — Key Differences',
                text: '<strong>Bromine + NaOH at room temperature:</strong> Forms NaBrO₃ (bromate(V), Br at +5). Must cool to ~0°C to get NaBrO (bromate(I), Br at +1). Opposite to chlorine (which needs heating to get the +5 product).<br/><br/><strong>Iodine + NaOH:</strong> Always produces iodate(V), IO₃⁻ (I at +5) regardless of temperature. The iodate(I) ion (IO⁻) is unknown in aqueous solution — too unstable to exist.'
            },
            terms: []
        },
        {
            id: 'svg-ox-power',
            type: 'svg',
            data: {
                caption: 'Relative oxidising power of halogens: more negative overall ΔH = stronger oxidising agent',
                svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="200" y="15" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Oxidising Power — Overall ΔH (kJ mol⁻¹)</text><line x1="60" y1="25" x2="60" y2="155" stroke="#94a3b8" stroke-width="1.5"/><line x1="60" y1="155" x2="385" y2="155" stroke="#94a3b8" stroke-width="1.5"/><rect x="65" y="35" width="290" height="22" fill="#6366f1" rx="3"/><text x="360" y="50" font-size="10" fill="#3730a3">F₂  −755</text><rect x="65" y="65" width="228" height="22" fill="#22c55e" rx="3"/><text x="298" y="80" font-size="10" fill="#166534">Cl₂  −592</text><rect x="65" y="95" width="211" height="22" fill="#f59e0b" rx="3"/><text x="281" y="110" font-size="10" fill="#92400e">Br₂  −547</text><rect x="65" y="125" width="185" height="22" fill="#ef4444" rx="3"/><text x="255" y="140" font-size="10" fill="#991b1b">I₂  −481</text><text x="200" y="168" text-anchor="middle" font-size="10" fill="#64748b">← More negative = stronger oxidising agent</text></svg>'
            },
            terms: []
        },
        {
            id: 'checklist-g7',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State the colour and physical state of each halogen at room temperature.', checked: false },
                    { text: 'Explain why atomic radius increases but reactivity decreases down Group 7.', checked: false },
                    { text: 'Explain the F electron affinity anomaly (compact 2p, high electron density repels incoming electron).', checked: false },
                    { text: 'Explain why the F–F bond is anomalously weak and why H–X bonds show no such anomaly.', checked: false },
                    { text: 'Give solubility values and water reactions of F₂, Cl₂, I₂ (including I₃⁻ formation with KI).', checked: false },
                    { text: 'Use the three-step energy cycle to explain why F₂ is a far stronger oxidising agent than Cl₂.', checked: false },
                    { text: 'Write displacement equations for Cl₂+Br⁻, Cl₂+I⁻, Br₂+I⁻ with observations.', checked: false },
                    { text: 'Explain why I₂ forms FeI₂ only, and write the Fe³⁺ + I⁻ reverse ionic equation.', checked: false },
                    { text: 'Write the cold-NaOH and hot-NaOH disproportionation equations for chlorine and state products\' uses.', checked: false },
                    { text: 'State how Br₂ and I₂ differ from Cl₂ in reactions with NaOH.', checked: false },
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Down Group 7: atomic radius ↑, electronegativity ↓, bp ↑, reactivity ↓ (extra shells + shielding). F EA anomaly: compact 2p → repels incoming electron. F–F bond anomalously weak: lone pair repulsion. Oxidising ability: F₂ ≫ Cl₂ > Br₂ > I₂ — explained by the full energy cycle (atomisation + EA + hydration enthalpy of X⁻). Displacement: stronger halogen displaces weaker halide; cyclohexane distinguishes (Cl₂ pale green, Br₂ orange–red, I₂ violet). Fe: I₂ only forms FeI₂; F₂/Cl₂/Br₂ form FeX₃. Reverse: Fe³⁺ + I⁻ → Fe²⁺ + I₂. Cold NaOH → bleach (NaClO, Cl +1); hot NaOH → weedkiller (NaClO₃, Cl +5).' }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-trends', prompt: 'Explain why boiling points increase but reactivity decreases down Group 7. What structural feature drives both trends?' },
            { id: 'c2', blockId: 'callout-ea-anomaly', prompt: 'Fluorine has a lower (less exothermic) electron affinity than chlorine. Explain why, given that F is the most electronegative element.' },
            { id: 'c3', blockId: 'callout-ff-anomaly', prompt: 'Why is the F–F bond enthalpy (~158 kJ mol⁻¹) lower than the Cl–Cl bond (~243 kJ mol⁻¹)? Why is there no similar anomaly for H–X bond enthalpies?' },
            { id: 'c4', blockId: 'table-oxidising-thermo', prompt: 'Using the three-step energy cycle (atomisation + EA + hydration), explain why F₂ is a much stronger oxidising agent than Cl₂ despite having a lower electron affinity than Cl.' },
            { id: 'c5', blockId: 'callout-displacement-eqs', prompt: 'Write the ionic equation for Br₂(aq) reacting with KI(aq), describe the observation, and explain which species is the oxidising agent.' },
            { id: 'c6', blockId: 'callout-fe2', prompt: 'Iodine cannot oxidise Fe²⁺(aq) to Fe³⁺(aq), but Fe³⁺(aq) CAN oxidise I⁻(aq). Write the ionic equation for this reverse reaction.' },
            { id: 'c7', blockId: 'callout-cold-alkali', prompt: 'Write the equation for Cl₂ reacting with cold dilute NaOH. What product makes this useful, and why is this described as disproportionation?' },
        ],
        summaryText: 'Group 7 trends: atomic radius ↑, electronegativity ↓, bp ↑, reactivity ↓. F EA anomaly: very compact 2-level, high electron density repels incoming electron. F–F weak bond: lone pair repulsion. Oxidising power (F₂ ≫ Cl₂ > Br₂ > I₂): key factor is hydration enthalpy of X⁻. Displacement: Cl₂ + Br⁻ → orange; Cl₂ + I⁻ → dark; Br₂ + I⁻ → I₂. Fe: I₂ → FeI₂ only (too weak); Fe³⁺ oxidises I⁻. Cold NaOH → bleach; hot NaOH → weedkiller.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_6;
