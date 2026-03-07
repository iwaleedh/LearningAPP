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
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-reversible', prompt: 'What symbol is used to denote a reversible reaction in a chemical equation?' },
            { id: 'c2', blockId: 'callout-dynamic', prompt: 'State the two main conditions that must be true for a reaction to be described as being in a state of dynamic equilibrium.' },
            { id: 'c3', blockId: 'callout-dynamic', prompt: 'In a dynamic equilibrium, do the concentrations of the reactants and products have to be equal? Explain.' }
        ],
        summaryText: 'Reversible reactions (⇌) can go both forwards and backwards. In a closed system, they reach dynamic equilibrium. Key features: the rate of the forward reaction exactly equals the rate of the backward reaction, meaning the macroscopic concentrations of all species remain perfectly constant. The system is "dynamic" because both reactions are still continuously happening at a microscopic level.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_5;
