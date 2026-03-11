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
            id: 'callout-cyanide',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Reaction with Cyanide Ions (-CN)',
                text: 'Heating a halogenoalkane under reflux with a solution of potassium cyanide (KCN) in <strong>ethanol</strong> produces a <strong>nitrile</strong>.<br/><br/>• <strong>Chain Lengthening:</strong> This is synthetically very useful because it <strong>increases the carbon chain length by 1</strong> (e.g. 1-bromopropane → butanenitrile).<br/>• <strong>Solvent Importance:</strong> The solvent must be pure ethanol. If water is present, the cyanide ions interact with water to form hydroxide ions (OH⁻), causing a competing nucleophilic substitution reaction that yields an alcohol instead.'
            },
            terms: ['Nitrile', 'Reflux', 'Chain lengthening']
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
            id: 'callout-ammonia',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Mechanism with Ammonia (NH₃)',
                text: 'The reaction between a halogenoalkane and ammonia involves exactly <strong>two steps</strong> and requires <strong>excess ammonia</strong>:<br/>1. The nucleophilic lone pair on the NH₃ molecule attacks the slightly positive carbon, forming an intermediate alkylammonium ion.<br/>2. A <em>second</em> ammonia molecule then acts as a base, removing a hydrogen atom from the intermediate to yield the neutral primary amine and an ammonium salt (NH₄⁺X⁻).'
            },
            terms: ['Alkylammonium ion', 'Base']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c-cn-solvent', blockId: 'callout-cyanide', prompt: 'Why must the reaction between a halogenoalkane and KCN be carried out in pure ethanol? What happens if water is present?' },
            { id: 'c-nh3-sealed', blockId: 'callout-ammonia-products', prompt: 'Why is the reaction between a halogenoalkane and ammonia carried out in a heated sealed tube rather than under reflux?' },
            { id: 'c-nh3-excess', blockId: 'callout-ammonia-products', prompt: 'If you react bromoethane with ammonia, how can you favour the production of a primary amine over secondary or tertiary amines?' },
            { id: 'c-comp1', blockId: 'callout-competition', prompt: 'Which type of halogenoalkane (primary, secondary, or tertiary) is most likely to undergo an elimination reaction when treated with hydroxide ions?' },
            { id: 'c-comp2', blockId: 'callout-competition', prompt: 'State three reaction conditions that would favour elimination over substitution when reacting a halogenoalkane with potassium hydroxide.' },
            { id: 'c1', blockId: 'table-reactions', prompt: 'State the reagents and conditions to convert a halogenoalkane into a nitrile. Why is this reaction synthetically very useful?' },
            { id: 'c2', blockId: 'table-reactions', prompt: 'Heating 1-bromobutane with AQUEOUS KOH produces an alcohol. What is the product if you heat it with ETHANOLIC KOH instead, and what type of reaction is that?' },
            { id: 'c3', blockId: 'p-sn1', prompt: 'State the type of mechanism that tertiary halogenoalkanes primarily use for substitution, and outline its two main steps.' },
            { id: 'c4', blockId: 'p-sn2', prompt: 'Why do primary halogenoalkanes undergo SN2 exclusively instead of forming a carbocation via SN1?' },
            { id: 'c5', blockId: 'callout-ammonia', prompt: 'Describe the role of the second ammonia molecule in the nucleophilic substitution of a halogenoalkane to form a primary amine.' }
        ],
        summaryText: 'Halogenoalkanes react with: (1) aq KOH -> Alcohol, (2) KCN in ethanol -> Nitrile (chain length +1), (3) excess NH₃ in ethanol -> Primary Amine, (4) ethanolic KOH -> Alkene (Elimination instead of substitution). Mechanisms: SN1 (Tertiary) happens in 2 steps via a stable carbocation intermediate. SN2 (Primary) happens in 1 step via a transition state because primary carbocations are too unstable. The mechanism with ammonia specifically requires two NH₃ molecules: one acts as the nucleophile, the other acts as a base.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_3;
