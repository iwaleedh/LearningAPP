/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 2
 * "Effect of concentration and pressure"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.2
 */
export const note_chemistry_2_9_2 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand, in terms of collision theory, the effect of changes in solution concentration, gas pressure, and solid surface area on the rate of a reaction.' },
            terms: []
        },
        {
            id: 'h-concentration',
            type: 'heading',
            data: { text: 'Effect of Concentration (Solutions)', level: 2 },
            terms: []
        },
        {
            id: 'p-concentration',
            type: 'paragraph',
            data: { text: 'Increasing the concentration of a reactant in solution <strong>increases the rate of reaction</strong>.' },
            terms: []
        },
        {
            id: 'callout-concentration',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Collision Theory Explanation: Concentration',
                text: '1. Higher concentration means there are <strong>more particles per unit volume</strong>.<br/>2. Therefore, the particles are closer together.<br/>3. This leads to a <strong>higher frequency of collisions</strong> (more collisions per second) between reactant particles.<br/>4. This results in a higher frequency of <em>successful</em> collisions, increasing the overall rate.'
            },
            terms: ['Frequency of collisions']
        },
        {
            id: 'h-pressure',
            type: 'heading',
            data: { text: 'Effect of Pressure (Gases)', level: 2 },
            terms: []
        },
        {
            id: 'p-pressure',
            type: 'paragraph',
            data: { text: 'Increasing the pressure of a reaction involving gases <strong>increases the rate of reaction</strong>. Changing the pressure of a gas is exactly the same concept as changing the concentration of a solution.' },
            terms: []
        },
        {
            id: 'callout-pressure',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Collision Theory Explanation: Pressure',
                text: '1. Higher pressure (achieved by compressing the gas into a smaller volume) means there are <strong>more gas molecules per unit volume</strong>.<br/>2. The gas molecules are closer together.<br/>3. This leads to a <strong>higher frequency of collisions</strong>.<br/>4. This results in a higher frequency of successful collisions, increasing the rate.'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'What remains unchanged?',
                text: 'Changing the concentration or pressure <strong>does not</strong> change the Activation Energy (E_a) or the energy of the particles. It ONLY changes the density of particles in space, thereby affecting the <em>frequency</em> of collisions.'
            },
            terms: []
        },
        {
            id: 'h-surface',
            type: 'heading',
            data: { text: 'Effect of Surface Area (Solids)', level: 2 },
            terms: []
        },
        {
            id: 'callout-surface',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Collision Theory Explanation: Surface Area',
                text: 'Reactions involving solids can only occur at the <strong>surface</strong> of the solid. The particles deep inside a large lump cannot react until the outer layers are removed.<br/><br/>1. Breaking a solid into smaller pieces (e.g., using a powder instead of large chips) <strong>increases the total exposed surface area</strong>.<br/>2. More solid particles are immediately available to collide with the other reactant.<br/>3. This leads to a <strong>higher frequency of successful collisions</strong>, increasing the rate.'
            },
            terms: ['Surface area']
        },
        {
            id: 'h-solvent',
            type: 'heading',
            data: { text: 'Solvent Cages (Solutions)', level: 2 },
            terms: []
        },
        {
            id: 'p-solvent',
            type: 'paragraph',
            data: { text: 'In a solution, solute molecules are often tightly surrounded by solvent molecules, forming a <strong>solvent cage</strong>. For a reaction between two different solute particles to occur, they must first diffuse through the solvent until they become trapped within the <em>same</em> solvent cage. Only then are they close enough to collide and potentially react.' },
            terms: ['Solvent cage']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-concentration', prompt: 'Use collision theory to explain why increasing the concentration of hydrochloric acid increases its rate of reaction with marble chips.' },
            { id: 'c2', blockId: 'callout-pressure', prompt: 'Explain the effect of increasing gas pressure on the rate of reaction.' },
            { id: 'c3', blockId: 'callout-warning', prompt: 'Does increasing the concentration increase the proportion of particles with energy greater than the activation energy? Explain.' },
            { id: 'c4', blockId: 'callout-surface', prompt: 'Explain why powdered zinc reacts much faster with acid than a single large lump of zinc of the same mass.' },
            { id: 'c5', blockId: 'p-solvent', prompt: 'What is a "solvent cage" and why must two solute molecules enter the same one to react?' }
        ],
        summaryText: 'Higher concentration (solutions), higher pressure (gases), or larger surface area (powders vs lumps) all increase the rate of reaction. Explanation: They provide more reactant particles available to collide per unit volume/area, which leads to a higher frequency of successful collisions. Changing these conditions does not change particle energy or activation energy. In solutions, reactants must diffuse into the same "solvent cage" before they can collide.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_2;
