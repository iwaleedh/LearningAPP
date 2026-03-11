/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 5
 * "Reversible reactions and dynamic equilibrium"
 * Source: Pearson Edexcel IAL Chemistry — Section 9B.1
 */
export const note_chemistry_2_9_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Know that many reactions are reversible and understand the concept of dynamic equilibrium in a closed system.' },
            terms: []
        },
        {
            id: 'callout-reversible',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Reversible Reactions',
                text: 'A <strong>reversible reaction</strong> is one that can go either forwards (reactants to products) or backwards (products to reactants). This is shown using a double arrow symbol: ⇌'
            },
            terms: ['Reversible reaction']
        },
        {
            id: 'h-dynamic',
            type: 'heading',
            data: { text: 'Dynamic Equilibrium', level: 2 },
            terms: []
        },
        {
            id: 'callout-dynamic',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Features of Dynamic Equilibrium',
                text: 'If a reversible reaction is allowed to proceed in a <strong>closed system</strong> (where nothing can enter or leave), it will eventually reach a state of <strong>dynamic equilibrium</strong>.<br/><br/>The three defining features of dynamic equilibrium are:<br/>1. The <strong>rate of the forward reaction equals the rate of the reverse reaction</strong>.<br/>2. The <strong>concentrations of reactants and products remain constant</strong> (they do not have to be equal to each other).<br/>3. The reactions are still constantly occurring (it is "dynamic", not static).'
            },
            terms: ['Dynamic equilibrium', 'Closed system']
        },
        {
            id: 'p-graphs',
            type: 'paragraph',
            data: { text: 'On a Rate vs Time graph for a reaching equilibrium, the forward rate starts high and decreases, while the reverse rate starts at zero and increases, until both curves merge into a single horizontal line. On a Concentration vs Time graph, the reactant concentrations decrease and product concentrations increase until all curves become perfectly horizontal (constant).' },
            terms: []
        },
        {
            id: 'h-examples',
            type: 'heading',
            data: { text: 'Example: Iron and Steam', level: 2 },
            terms: []
        },
        {
            id: 'p-iron-steam',
            type: 'paragraph',
            data: { text: 'Consider the reaction of hot iron with steam: <br/><br/>$3Fe(s) + 4H_2O(g) \\rightleftharpoons Fe_3O_4(s) + 4H_2(g)$<br/><br/>If this takes place in an <strong>open system</strong> (where gases can escape), the hydrogen gas produced is swept away. Without the reverse reactants present together, the reverse reaction cannot occur, and it operates effectively as a one-way reaction to completion. <br/><br/>For dynamic equilibrium to be established, it MUST be in a <strong>closed system</strong> where no substances can enter or leave, meaning both the forward and back reactions can proceed continuously.' },
            terms: []
        },
        {
            id: 'h-position',
            type: 'heading',
            data: { text: 'Position of Equilibrium', level: 2 },
            terms: []
        },
        {
            id: 'p-position',
            type: 'paragraph',
            data: { text: 'The <strong>position of equilibrium</strong> describes the relative proportions of reactants and products in the equilibrium mixture.<br/><br/>• If the position of equilibrium "lies to the right", the mixture contains a higher proportion of products than reactants.<br/>• If it "lies to the left", the mixture contains a higher proportion of reactants.<br/><br/>Even though concentrations are constant at equilibrium, they are rarely equal. The conditions of the reaction (such as temperature or pressure) can be changed to shift the position of equilibrium in a desired direction.' },
            terms: ['Position of equilibrium']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-reversible', prompt: 'What symbol is used to denote a reversible reaction in a chemical equation?' },
            { id: 'c2', blockId: 'callout-dynamic', prompt: 'State the two main conditions that must be true for a reaction to be described as being in a state of dynamic equilibrium.' },
            { id: 'c3', blockId: 'callout-dynamic', prompt: 'In a dynamic equilibrium, do the concentrations of the reactants and products have to be equal? Explain.' },
            { id: 'c4', blockId: 'p-iron-steam', prompt: 'Why must a reaction vessel be closed for a dynamic equilibrium to be established?' },
            { id: 'c5', blockId: 'p-position', prompt: 'What does it mean if the "position of equilibrium lies to the right"?' }
        ],
        summaryText: 'Reversible reactions (⇌) can go both forwards and backwards. In a closed system (where no substances can enter or leave), they reach dynamic equilibrium. Key features: the rate of the forward reaction exactly equals the rate of the backward reaction, meaning the macroscopic concentrations of all species remain perfectly constant. The system is "dynamic" because both reactions are still continuously happening at a microscopic level. The *position of equilibrium* describes the relative proportions of products to reactants: if it lies to the right, products dominate.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_5;
