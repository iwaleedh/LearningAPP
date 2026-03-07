/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 3
 * "Maxwell-Boltzmann distribution and Temperature"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.3
 */
export const note_chemistry_2_9_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand qualitatively, in terms of the Maxwell-Boltzmann distribution of molecular energies, how changes in temperature affect the rate of a reaction.' },
            terms: []
        },
        {
            id: 'h-maxwell',
            type: 'heading',
            data: { text: 'The Maxwell-Boltzmann Distribution', level: 2 },
            terms: []
        },
        {
            id: 'p-maxwell',
            type: 'paragraph',
            data: { text: 'In any gas or liquid, particles are moving at different speeds and thus have different kinetic energies. A <strong>Maxwell-Boltzmann distribution curve</strong> plots the number of molecules (or fraction of molecules) against their kinetic energy.' },
            terms: ['Maxwell-Boltzmann distribution']
        },
        {
            id: 'list-features',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'The curve starts at the origin (0,0) because no molecules have zero energy.',
                    'The peak represents the <strong>most probable energy</strong>.',
                    'The average (mean) energy is slightly to the right of the peak.',
                    'The curve never touches the x-axis at high energies; there is no maximum limit to the energy a particle can have.',
                    'The total area under the curve represents the total number of molecules.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-activation',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Activation Energy on the Curve',
                text: 'We can mark the activation energy (E_a) as a vertical line on the x-axis. Only the area under the curve to the <strong>right</strong> of E_a belongs to molecules that have enough energy to react when they collide.'
            },
            terms: []
        },
        {
            id: 'h-temperature',
            type: 'heading',
            data: { text: 'Effect of Changing Temperature', level: 2 },
            terms: []
        },
        {
            id: 'callout-temperature',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why temperature dramatically increases reaction rate',
                text: 'When you increase the temperature:<br/>1. The peak of the Maxwell-Boltzmann curve moves to the <strong>right</strong> (higher energy) and becomes <strong>lower/flatter</strong>, meaning a wider spread of energies. The total area remains constant.<br/>2. There is a huge increase in the area under the curve to the right of the E_a line.<br/>3. A much larger <strong>proportion of molecules</strong> now possess energy greater than or equal to the activation energy (E ≥ E_a).<br/>4. This leads to a massive increase in the <strong>frequency of successful collisions</strong>.'
            },
            terms: ['Area under curve', 'Proportion of molecules']
        },
        {
            id: 'p-temperature',
            type: 'paragraph',
            data: { text: 'Note: Increasing temperature also slightly increases the frequency of all collisions because particles move faster, but this effect is negligible compared to the huge increase in the <em>proportion of successful</em> collisions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-features', prompt: 'State two key features of a Maxwell-Boltzmann curve regarding its start and end points.' },
            { id: 'c2', blockId: 'callout-activation', prompt: 'What does the area under a Maxwell-Boltzmann curve entirely to the right of the Activation Energy (E_a) line represent?' },
            { id: 'c3', blockId: 'callout-temperature', prompt: 'Describe how the shape of the Maxwell-Boltzmann curve changes when the temperature is increased.' },
            { id: 'c4', blockId: 'callout-temperature', prompt: 'Using the Maxwell-Boltzmann distribution, explain why a small increase in temperature leads to a large increase in the rate of reaction.' }
        ],
        summaryText: 'Maxwell-Boltzmann curves plot the number of molecules against kinetic energy. They start at (0,0), have a peak (most probable energy), and tail off infinitely. The area to the right of E_a shows particles capable of reacting. Increasing T broadens and flattens the curve to the right. This significantly increases the proportion of molecules with E ≥ E_a, leading to a much higher frequency of successful collisions.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_3;
