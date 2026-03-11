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
            id: 'h-mechanisms',
            type: 'heading',
            data: { text: 'Nucleophilic Substitution Mechanisms: SN1 vs SN2', level: 2 },
            terms: []
        },
        {
            id: 'p-sn1',
            type: 'paragraph',
            data: { text: '<strong>SN1 Mechanism (Tertiary Halogenoalkanes):</strong> <em>Substitution, Nucleophilic, Unimolecular</em>. Occurs in <strong>two steps</strong>. First, the C-X bond breaks heterolytically to form a planar carbocation intermediate. Second, the nucleophile attacks the carbocation from either above or below. Since it involves a stable tertiary carbocation, this mechanism is very fast.' },
            terms: ['SN1', 'Carbocation']
        },
        {
            id: 'p-sn2',
            type: 'paragraph',
            data: { text: '<strong>SN2 Mechanism (Primary Halogenoalkanes):</strong> <em>Substitution, Nucleophilic, Bimolecular</em>. Occurs in <strong>one step</strong>. The nucleophile attacks the slightly positive carbon atom from the back at the exact same time as the C-X bond starts to break. It forms an unstable pentavalent "transition state". Primary halogenoalkanes use this because they lack the alkyl groups to stabilise a carbocation intermediate.' },
            terms: ['SN2', 'Transition state']
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
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c-cn-solvent', blockId: 'callout-cyanide', prompt: 'Why must the reaction between a halogenoalkane and KCN be carried out in pure ethanol? What happens if water is present?' },
            { id: 'cue-cn-naming', blockId: 'callout-cyanide-naming', prompt: 'If you react bromoethane with KCN, what is the IUPAC name of the product? Explain why.' },
            { id: 'c-nh3-sealed', blockId: 'callout-ammonia-products', prompt: 'Why is the reaction between a halogenoalkane and ammonia carried out in a heated sealed tube rather than under reflux?' },
            { id: 'c-nh3-excess', blockId: 'callout-ammonia-products', prompt: 'If you react bromoethane with ammonia, how can you favour the production of a primary amine over secondary or tertiary amines?' },
            { id: 'c-comp1', blockId: 'callout-competition', prompt: 'Which type of halogenoalkane (primary, secondary, or tertiary) is most likely to undergo an elimination reaction when treated with hydroxide ions?' },
            { id: 'c-comp2', blockId: 'callout-competition', prompt: 'State three reaction conditions that would favour elimination over substitution when reacting a halogenoalkane with potassium hydroxide.' },
            { id: 'c-elim-mech', blockId: 'callout-elimination-mechanism', prompt: 'In the elimination reaction of halogenoalkanes with hydroxide ions, what role does the hydroxide ion play, and what does it remove from the molecule?' },
            { id: 'c-elim-unsym', blockId: 'callout-elimination-unsymmetrical', prompt: 'When an unsymmetrical halogenoalkane like 2-bromobutane undergoes elimination, why is a mixture of products formed, and what are the three possible alkene isomers produced?' },
            { id: 'c1', blockId: 'table-reactions', prompt: 'State the reagents and conditions to convert a halogenoalkane into a nitrile. Why is this reaction synthetically very useful?' },
            { id: 'c2', blockId: 'table-reactions', prompt: 'Heating 1-bromobutane with AQUEOUS KOH produces an alcohol. What is the product if you heat it with ETHANOLIC KOH instead, and what type of reaction is that?' },
            { id: 'c3', blockId: 'p-sn1', prompt: 'State the type of mechanism that tertiary halogenoalkanes primarily use for substitution, and outline its two main steps.' },
            { id: 'c4', blockId: 'p-sn2', prompt: 'Why do primary halogenoalkanes undergo SN2 exclusively instead of forming a carbocation via SN1?' },
            { id: 'cue-sn-secondary', blockId: 'p-sn-secondary', prompt: 'Which nucleophilic substitution mechanism(s) do secondary halogenoalkanes undergo when reacting with hydroxide ions?' },
            { id: 'cue-water-tidy', blockId: 'callout-water', prompt: 'In the nucleophilic substitution mechanism of a halogenoalkane with water, what happens in the final "tidy up" step?' },
            { id: 'cue-hydrohalic', blockId: 'callout-hydrohalic', prompt: 'Why is the inorganic product of a halogenoalkane reacting with water called hydrobromic acid rather than hydrogen bromide?' },
            { id: 'c5', blockId: 'callout-ammonia', prompt: 'In the mechanism for reacting a halogenoalkane with ammonia, why is a large excess of ammonia required beyond just minimizing further substitutions?' }
        ],
        summaryText: 'Halogenoalkanes react with: (1) aq KOH -> Alcohol, (2) KCN in ethanol -> Nitrile (chain length +1), (3) excess NH₃ in ethanol -> Primary Amine, (4) ethanolic KOH -> Alkene (Elimination instead of substitution). Mechanisms: SN1 (Tertiary) happens in 2 steps via a stable carbocation intermediate. SN2 (Primary) happens in 1 step via a transition state because primary carbocations are too unstable. Secondary halogenoalkanes use both SN1 and SN2 mechanisms simultaneously. The mechanism with ammonia specifically requires two NH₃ molecules: one acts as the nucleophile, the other acts as a base.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_3;
