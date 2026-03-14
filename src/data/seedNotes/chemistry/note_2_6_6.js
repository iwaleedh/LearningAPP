/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 6
 * "Bond enthalpies and mean bond enthalpies"
 * Source: Pearson Edexcel IAL Chemistry — WCH12 Section 6D
 */
export const note_chemistry_2_6_6 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define bond (dissociation) enthalpy and mean bond enthalpy. Calculate approximate enthalpy changes for reactions using mean bond enthalpies from the data booklet. Explain why the results are approximate and apply phase corrections when products or reactants are not gaseous.' },
            terms: []
        },

        // ─ SECTION A: DEFINITIONS ───────────────────────────────────────────────
        {
            id: 'h-def',
            type: 'heading',
            data: { text: 'Bond Enthalpy — Definitions', level: 2 },
            terms: []
        },
        {
            id: 'callout-bond-def',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bond (Dissociation) Enthalpy',
                text: '• <strong>Bond dissociation enthalpy:</strong> the energy required to break <em>one mole</em> of a specified covalent bond in gaseous molecules by homolytic fission, at 298 K and 100 kPa.<br/>• Always <strong>positive</strong> (endothermic) — energy must be supplied to overcome the electrostatic attraction between the bonded atoms.<br/>• Units: kJ mol⁻¹.<br/>• Example: Cl₂(g) → 2Cl(g); E(Cl–Cl) = +243 kJ mol⁻¹.<br/>• By symmetry, the same magnitude of energy is <em>released</em> when that bond forms: 2Cl(g) → Cl₂(g); ΔH = −243 kJ mol⁻¹.'
            },
            terms: ['Bond enthalpy']
        },
        {
            id: 'callout-mean-def',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Mean Bond Enthalpy',
                text: '• <strong>Mean bond enthalpy:</strong> the average bond enthalpy for a given bond type, calculated from data taken from many different compounds in which that bond appears.<br/>• Necessary because the bond energy of e.g. C–H varies slightly between CH₄, C₂H₆, CHCl₃, etc. due to different electronic environments around the carbon.<br/>• Example: mean E(C–H) = 413 kJ mol⁻¹, but in CH₄ specifically, breaking the first C–H requires ≈ 435 kJ mol⁻¹ and each subsequent one requires progressively less energy.<br/>• <strong>All bond enthalpy values apply only to gaseous species</strong> — state symbol must be (g) for both reactants and products when using these data.'
            },
            terms: ['Mean bond enthalpy']
        },

        // ─ SECTION B: BOND BREAKING AND MAKING ─────────────────────────────
        {
            id: 'h-bbm',
            type: 'heading',
            data: { text: 'Bond Breaking and Bond Making', level: 2 },
            terms: []
        },
        {
            id: 'callout-bbm',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Energy Changes: Breaking and Making Bonds',
                text: '• <strong>Breaking bonds:</strong> endothermic — energy is absorbed from the surroundings → ΔH is <strong>positive (+)</strong>.<br/>• <strong>Making bonds:</strong> exothermic — energy is released to the surroundings → ΔH is <strong>negative (−)</strong>.<br/>• Overall reaction enthalpy: <strong>ΔH = Σ(bonds broken) − Σ(bonds made)</strong> (units: kJ mol⁻¹).<br/>• If Σ(broken) > Σ(made): overall endothermic (ΔH > 0).<br/>• If Σ(made) > Σ(broken): overall exothermic (ΔH < 0).<br/>• Conceptual route: Reactants → [break all bonds → isolated gaseous atoms] → [form all product bonds] → Products. Valid by Hess’s Law (enthalpy is a state function).'
            },
            terms: []
        },
        {
            id: 'svg-energy',
            type: 'svg',
            data: {
                caption: 'Bond enthalpy energy cycle. Reactants are fully dissociated into separate gaseous atoms (bonds broken, ↑ endothermic, purple arrow). Atoms then combine into products (bonds made, ↓ exothermic, green arrow). Net ΔH (indigo dashed) = Σ(broken) − Σ(made). All species must be gaseous.',
                svg: '<svg viewBox="0 0 490 310" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><defs><marker id="e-up" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0,0 9,3.5 0,7" fill="#7c3aed"/></marker><marker id="e-dn" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0,0 9,3.5 0,7" fill="#15803d"/></marker><marker id="e-dh" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0,0 9,3.5 0,7" fill="#6366f1"/></marker></defs><text x="245" y="16" text-anchor="middle" font-weight="bold" font-size="12" fill="#374151">Bond Enthalpy Energy Cycle (Exothermic Example)</text><!-- y-axis --><line x1="32" y1="275" x2="32" y2="28" stroke="#374151" stroke-width="1.5"/><polygon points="27,28 37,28 32,18" fill="#374151"/><text x="20" y="155" text-anchor="middle" fill="#374151" font-size="11" transform="rotate(-90,20,155)">Enthalpy</text><!-- Atoms level - highest, purple --><line x1="160" y1="66" x2="330" y2="66" stroke="#7c3aed" stroke-width="3"/><rect x="155" y="51" width="180" height="28" rx="4" fill="#fdf4ff" stroke="#d8b4fe" stroke-width="1.5" opacity="0.9"/><text x="245" y="68" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="11">Separated gaseous atoms</text><!-- Reactants level - middle left, blue --><line x1="52" y1="162" x2="178" y2="162" stroke="#1d4ed8" stroke-width="3"/><rect x="44" y="148" width="143" height="28" rx="4" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" opacity="0.9"/><text x="115" y="166" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="11">Reactants (g)</text><!-- Products level - lower right, green --><line x1="312" y1="244" x2="458" y2="244" stroke="#15803d" stroke-width="3"/><rect x="304" y="230" width="162" height="28" rx="4" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" opacity="0.9"/><text x="385" y="248" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">Products (g)</text><!-- Arrow: reactants to atoms (bonds broken, up, purple) --><line x1="170" y1="159" x2="212" y2="72" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#e-up)"/><rect x="65" y="96" width="100" height="30" rx="3" fill="white" opacity="0.92"/><text x="115" y="110" text-anchor="middle" fill="#7c3aed" font-size="10" font-weight="bold">Σ bonds broken</text><text x="115" y="122" text-anchor="middle" fill="#7c3aed" font-size="10">(+, endothermic)</text><!-- Arrow: atoms to products (bonds made, down, green) --><line x1="278" y1="72" x2="360" y2="237" stroke="#15803d" stroke-width="2.5" marker-end="url(#e-dn)"/><rect x="303" y="122" width="100" height="30" rx="3" fill="white" opacity="0.92"/><text x="353" y="136" text-anchor="middle" fill="#15803d" font-size="10" font-weight="bold">Σ bonds made</text><text x="353" y="148" text-anchor="middle" fill="#15803d" font-size="10">(−, exothermic)</text><!-- Arrow: reactants to products (net ΔH, dashed indigo) --><line x1="158" y1="165" x2="312" y2="241" stroke="#6366f1" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#e-dh)"/><rect x="165" y="212" width="156" height="30" rx="3" fill="#eff6ff" opacity="0.96" stroke="#a5b4fc"/><text x="243" y="226" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="bold">ΔH = Σ(broken) − Σ(made)</text><text x="243" y="239" text-anchor="middle" fill="#6366f1" font-size="10">(negative = exothermic)</text><!-- footnote --><text x="245" y="298" text-anchor="middle" fill="#6b7280" font-size="9" font-style="italic">All species must be gaseous for bond enthalpy values to be valid (state symbol (g) required).</text></svg>'
            },
            terms: []
        },

        // ─ SECTION C: WHY APPROXIMATE ─────────────────────────────────────────
        {
            id: 'h-approx',
            type: 'heading',
            data: { text: 'Why Bond Enthalpy Calculations Are Approximate', level: 2 },
            terms: []
        },
        {
            id: 'list-approx',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Averaged values:</strong> mean bond enthalpies are averages across many molecular environments. The actual bond energy in a specific molecule may differ from the mean, so the calculation is not exact.',
                    '<strong>Gas-phase restriction:</strong> bond enthalpy values are only valid for gaseous species. If a reactant or product is a liquid or solid, the latent heat of vaporisation (or fusion) is not accounted for, introducing error.',
                    '<strong>Intermolecular forces ignored:</strong> van der Waals forces, hydrogen bonds, and dipole–dipole interactions between molecules in the liquid/solid state are not included in bond enthalpy tables.',
                    '<strong>Practical consequence:</strong> calculated ΔH values may differ from experimental (calorimetric or Hess’s Law) values by 5–15%. Use calorimetry or Hess’s Law when accurate values are needed.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-liquid',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Correction for Liquid Products or Reactants',
                text: '• Bond enthalpy values apply only to <strong>gaseous</strong> species (state symbol (g)).<br/>• If a product is liquid (e.g. H₂O(l) in a combustion equation), the bond enthalpy calculation over-counts the energy released because it ignores the energy needed to condense the water.<br/>• ΔH<sub>vap</sub>(H₂O) = +44 kJ mol⁻¹ (liquid → gas); so condensing = −44 kJ mol⁻¹ per mol H₂O(l).<br/>• <strong>Correction:</strong> ΔH(actual, liquid products) = ΔH(bond enthalpy calc, all gas) − n × 44, where n = moles of H₂O(l) produced.<br/>• In most exam questions, assume all products are gaseous <em>unless the equation explicitly shows (l)</em>.'
            },
            terms: []
        },

        // ─ SECTION D: BOND STRENGTH DATA ───────────────────────────────────
        {
            id: 'h-table',
            type: 'heading',
            data: { text: 'Mean Bond Enthalpy Data', level: 2 },
            terms: []
        },
        {
            id: 'list-tablenote',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'All values in kJ mol⁻¹; all <strong>positive</strong> (energy required to break one mole of that bond).',
                    '<strong>Bond order trend:</strong> single bond &lt; double bond &lt; triple bond in both bond enthalpy and bond strength.',
                    'Greater number of shared electron pairs → stronger electrostatic attraction → <strong>higher bond enthalpy</strong> → <strong>shorter bond length</strong>.'
                ]
            },
            terms: []
        },
        {
            id: 'table-bonds',
            type: 'comparisonTable',
            data: {
                caption: 'Mean bond enthalpies (kJ mol⁻¹) — Edexcel IAL Chemistry data booklet values',
                headers: ['Bond', 'E / kJ mol⁻¹', 'Bond', 'E / kJ mol⁻¹'],
                rows: [
                    ['H–H', '436', 'C–H', '413'],
                    ['Cl–Cl', '243', 'C–C', '347'],
                    ['H–Cl', '432', 'C=C', '614'],
                    ['O=O', '498', 'C≡C', '839'],
                    ['O–H', '464', 'C–O', '358'],
                    ['N≡N', '945', 'C=O (in CO₂)', '805'],
                    ['N–H', '391', 'C–Cl', '340'],
                    ['F–F', '158', 'C–N', '286']
                ]
            },
            terms: []
        },
        {
            id: 'table-bond-order',
            type: 'comparisonTable',
            data: {
                caption: 'Bond order, enthalpy, and length — carbon–carbon series',
                headers: ['Bond', 'Bond order', 'E / kJ mol⁻¹', 'Approx. length / pm', 'Comment'],
                rows: [
                    ['C–C', 'Single (1 σ)', '347', '154', 'Weakest; longest'],
                    ['C=C', 'Double (1 σ + 1 π)', '614', '134', 'Intermediate'],
                    ['C≡C', 'Triple (1 σ + 2 π)', '839', '120', 'Strongest; shortest'],
                    ['N≡N', 'Triple', '945', '110', 'Very strong — explains N₂ inertness']
                ]
            },
            terms: []
        },

        // ─ SECTION E: CALCULATION METHOD ────────────────────────────────────
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Calculation Method: Step by Step', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    '<strong>Draw displayed (full structural) formulae</strong> of all reactants and products — show every covalent bond explicitly. Critical for CO₂ (2 C=O per molecule) and H₂O (2 O–H per molecule).',
                    '<strong>List bonds broken</strong> in all reactant molecules. Multiply each bond enthalpy by the number of that bond type. Multiply again by the stoichiometric coefficient of the molecule. Sum all to get Σ(bonds broken).',
                    '<strong>List bonds made</strong> in all product molecules in the same way. Sum to get Σ(bonds made).',
                    '<strong>Apply:</strong> ΔH = Σ(bonds broken) − Σ(bonds made), in kJ mol⁻¹.',
                    '<strong>Check sign:</strong> negative ΔH → exothermic (more energy released in bond making than absorbed in bond breaking). Positive ΔH → endothermic.'
                ]
            },
            terms: []
        },

        // ─ WORKED EXAMPLE 1: HCl (SIMPLE) ─────────────────────────────────
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Formation of HCl', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'H₂(g) + Cl₂(g) → 2HCl(g)',
                text: '<strong>Bonds broken (reactants):</strong><br/>• 1 × H–H: 1 × 436 = +436 kJ mol⁻¹<br/>• 1 × Cl–Cl: 1 × 243 = +243 kJ mol⁻¹<br/>• Σ(broken) = 436 + 243 = <strong>+679 kJ mol⁻¹</strong><br/><br/><strong>Bonds made (products):</strong><br/>• 2 × H–Cl: 2 × 432 = <strong>864 kJ mol⁻¹</strong><br/><br/><strong>ΔH = 679 − 864 = −185 kJ mol⁻¹ (exothermic)</strong><br/><br/><em>Note: experimental value = −184 kJ mol⁻¹. Excellent agreement because H–H, Cl–Cl, and H–Cl all have single well-defined bond environments.</em>'
            },
            terms: []
        },

        // ─ WORKED EXAMPLE 2: METHANE COMBUSTION ──────────────────────────
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Combustion of Methane', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)',
                text: '<strong>Step 1: Displayed structures.</strong><br/>• CH₄: 4 C–H bonds. • 2O₂: 2 O=O bonds. • CO₂ (O=C=O): 2 C=O per molecule, 1 molecule = 2 C=O. • 2H₂O: 2 O–H per molecule × 2 = 4 O–H.<br/><br/><strong>Step 2: Bonds broken (reactants):</strong><br/>• 4 × C–H = 4 × 413 = +1652 kJ mol⁻¹<br/>• 2 × O=O = 2 × 498 = +996 kJ mol⁻¹<br/>• Σ(broken) = 1652 + 996 = <strong>+2648 kJ mol⁻¹</strong><br/><br/><strong>Step 3: Bonds made (products):</strong><br/>• 2 × C=O (in CO₂) = 2 × 805 = +1610 kJ mol⁻¹<br/>• 4 × O–H (in 2H₂O) = 4 × 464 = +1856 kJ mol⁻¹<br/>• Σ(made) = 1610 + 1856 = <strong>+3466 kJ mol⁻¹</strong><br/><br/><strong>Step 4: ΔH = 2648 − 3466 = −818 kJ mol⁻¹ (exothermic)</strong><br/><em>Note: all products gaseous. Experimental ΔH (gaseous H₂O) ≈ −802 kJ mol⁻¹; ~2% error due to mean bond enthalpy approximation.</em><br/><em>Common mistake: counting C=O as 1 bond in CO₂ — O=C=O has 2 C=O bonds per molecule.</em>'
            },
            terms: []
        },

        // ─ ATOMISATION + BOND ENTHALPY FOR ΔfH ──────────────────────────
        {
            id: 'h-atom',
            type: 'heading',
            data: { text: 'Enthalpy of Formation Using Atomisation and Bond Enthalpies', level: 2 },
            terms: []
        },
        {
            id: 'list-atom',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'For elements that are <strong>solid</strong> at standard conditions (e.g. C(s) in graphite, Si(s)), there is no simple molecular bond to break using a bond enthalpy.',
                    'Instead, use the <strong>enthalpy of atomisation</strong>: Δ<sub>at</sub>H⦵ = energy to convert 1 mole of an element in its standard state to 1 mole of isolated gaseous atoms. Always positive (endothermic).',
                    'Example: C(s, graphite) → C(g); Δ<sub>at</sub>H⦵[C] = +715 kJ mol⁻¹.',
                    '<strong>Route for ΔfH calculation:</strong> atomise all solid elements + break all bonds in gaseous elements (reactants) → isolated atoms → form all bonds in product molecule.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-atom-worked',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example: ΔfH⦵ of Methane using Atomisation',
                text: '<strong>C(s) + 2H₂(g) → CH₄(g)</strong><br/>Given: Δ<sub>at</sub>H⦵[C] = +715 kJ mol⁻¹; E(H–H) = 436 kJ mol⁻¹; E(C–H) = 413 kJ mol⁻¹.<br/><br/><strong>Energy in (atomisation + bond breaking):</strong><br/>• Atomise 1 mol C(s): +715 kJ mol⁻¹<br/>• Break 2 × H–H: 2 × 436 = +872 kJ mol⁻¹<br/>• Σ(energy in) = 715 + 872 = <strong>+1587 kJ mol⁻¹</strong><br/><br/><strong>Energy out (bonds made):</strong><br/>• 4 × C–H: 4 × 413 = <strong>1652 kJ mol⁻¹</strong><br/><br/><strong>ΔfH = 1587 − 1652 = −65 kJ mol⁻¹</strong><br/><em>Literature ΔfH⦵[CH₄] = −74.8 kJ mol⁻¹. Difference (~14%) due to mean bond enthalpy approximation for E(C–H) and the Hess’s cycle assumptions.</em>'
            },
            terms: []
        },

        // ─ CHECKLIST ────────────────────────────────────────────────────────────
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can define bond dissociation enthalpy and mean bond enthalpy, and explain why they differ.', checked: false },
                    { text: 'I can state that bond breaking is endothermic (+) and bond making is exothermic (−), and write ΔH = Σ(broken) − Σ(made).', checked: false },
                    { text: 'I can draw displayed formulae for molecules and correctly count all bonds, including the two C=O bonds in CO₂.', checked: false },
                    { text: 'I can give two reasons why bond enthalpy calculations give only approximate values.', checked: false },
                    { text: 'I can apply the liquid water correction for combustion reactions where H₂O(l) is a product.', checked: false },
                    { text: 'I can use enthalpy of atomisation alongside bond enthalpies to calculate ΔfH for an organic compound.', checked: false },
                    { text: 'I can use the trend: bond order ↑ → bond enthalpy ↑ → bond length ↓, and apply it to C–C, C=C, C≡C.', checked: false },
                    { text: 'I can correctly calculate ΔH for simple reactions (e.g. H₂ + Cl₂ → 2HCl) and more complex ones (e.g. CH₄ combustion) using bond enthalpies.', checked: false }
                ]
            },
            terms: []
        },

        // ─ SUMMARY ──────────────────────────────────────────────────────────────
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Bond enthalpy: energy to break 1 mol of a gaseous covalent bond, always positive. Mean bond enthalpy: averaged across many molecules. ΔH = Σ(bonds broken) − Σ(bonds made). Breaking = endothermic (+); making = exothermic (−). Approximate because: mean values used; all species must be gaseous. Liquid correction: subtract 44 kJ per mol H₂O(l). Solid C: use atomisation enthalpy (+715 kJ mol⁻¹). Bond order ↑ → bond enthalpy ↑ → bond length ↓.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-bond-def', prompt: 'Define bond dissociation enthalpy. Why is it always positive? Give an example with its value.' },
            { id: 'c2', blockId: 'callout-mean-def', prompt: 'What is mean bond enthalpy? Why does the C–H bond have a mean value rather than a single exact value?' },
            { id: 'c3', blockId: 'callout-bbm', prompt: 'State the formula for calculating ΔH from bond enthalpies. Which process is endothermic and which is exothermic?' },
            { id: 'c4', blockId: 'list-approx', prompt: 'Give two reasons why bond enthalpy calculations give only approximate values.' },
            { id: 'c5', blockId: 'callout-we1', prompt: 'Calculate ΔH for H₂(g) + Cl₂(g) → 2HCl(g) using the bond enthalpy table. Show all steps.' },
            { id: 'c6', blockId: 'callout-we2', prompt: 'Calculate ΔH for CH₄ combustion. How many C=O bonds are in 1 mol of CO₂? How many O–H bonds in 2 mol H₂O?' },
            { id: 'c7', blockId: 'callout-liquid', prompt: 'Why must a correction be made when H₂O(l) is a product? What is ΔHvap(H₂O) and how is it applied?' },
            { id: 'c8', blockId: 'callout-atom-worked', prompt: 'Why is atomisation enthalpy used instead of bond enthalpy for solid carbon? Calculate ΔfH[CH₄] using atomisation and bond data.' }
        ],
        summaryText: 'Bond enthalpy: break 1 mol gaseous bond, always +. Mean = averaged. ΔH = Σ(broken) − Σ(made). Approximate: means used; all must be gaseous. Liquid correction: −44 kJ/mol H₂O(l). Solid C: use Δ_at H (+715). Bond order ↑ → enthalpy ↑ → length ↓.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_6;
