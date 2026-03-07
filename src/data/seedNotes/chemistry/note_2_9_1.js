/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 1
 * "Collision theory and activation energy"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.1
 */
export const note_chemistry_2_9_1 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the core concepts of collision theory, steric hindrance, and activation energy.' },
            terms: []
        },
        {
            id: 'h-collision',
            type: 'heading',
            data: { text: 'Collision Theory', level: 2 },
            terms: []
        },
        {
            id: 'callout-collision',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The two requirements for a successful collision',
                text: 'For a chemical reaction to occur between two particles, they must collide. However, most collisions do not lead to a reaction. For a collision to be <strong>successful</strong>, two conditions must be met:<br/>1. The particles must collide with energy greater than or equal to the <strong>activation energy</strong>.<br/>2. The particles must collide with the correct <strong>collision geometry</strong> (orientation).'
            },
            terms: ['Collision theory', 'Successful collision']
        },
        {
            id: 'h-activation',
            type: 'heading',
            data: { text: 'Activation Energy', level: 2 },
            terms: []
        },
        {
            id: 'p-activation',
            type: 'paragraph',
            data: { text: '<strong>Activation energy (E_a)</strong> is the minimum energy that colliding particles must possess for a reaction to occur. It is the energy required to start breaking the bonds in the reactants so that new ones can form. If particles collide with less energy than E_a, they simply bounce off each other unchanged.' },
            terms: ['Activation energy']
        },
        {
            id: 'h-steric',
            type: 'heading',
            data: { text: 'Steric Factor and Collision Geometry', level: 2 },
            terms: []
        },
        {
            id: 'p-steric',
            type: 'paragraph',
            data: { text: 'Even if particles have enough energy, they might bounce apart if they collide in the wrong orientation. The reactive parts of the molecules must come into direct contact. Bulky groups (like large alkyl groups) around the reactive site can physically block the incoming particle. This blocking effect is called <strong>steric hindrance</strong>.' },
            terms: ['Steric hindrance', 'Collision geometry']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-collision', prompt: 'State the two conditions required for a collision between reactant particles to result in a chemical reaction.' },
            { id: 'c2', blockId: 'p-activation', prompt: 'Define the term "activation energy".' },
            { id: 'c3', blockId: 'p-steric', prompt: 'What is "steric hindrance" and how does it relate to collision theory?' }
        ],
        summaryText: 'Collision theory states reactions only happen when particles collide successfully. Two conditions must be met: (1) Collision energy ≥ Activation energy (min energy needed to break reactant bonds), and (2) Correct collision geometry (reactive parts must touch). Steric hindrance occurs when bulky molecular groups block the reactive site, increasing the proportion of unsuccessful collisions.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_1;
