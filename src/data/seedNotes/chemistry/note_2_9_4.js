/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 4
 * "Effect of catalysts on rate"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.4
 */
export const note_chemistry_2_9_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the role of catalysts in providing an alternative reaction route with a lower activation energy, and interpret this using Maxwell-Boltzmann distributions and enthalpy level diagrams.' },
            terms: []
        },
        {
            id: 'h-catalysts',
            type: 'heading',
            data: { text: 'Catalysts', level: 2 },
            terms: []
        },
        {
            id: 'callout-definition',
            type: 'callout',
            data: {
                style: 'key',
                title: 'What is a catalyst?',
                text: 'A <strong>catalyst</strong> is a substance that increases the rate of a chemical reaction without being used up in the overall process. It works by providing an <strong>alternative reaction route</strong> with a <strong>lower activation energy (E_a)</strong>.'
            },
            terms: ['Catalyst', 'Alternative reaction route']
        },
        {
            id: 'p-warning',
            type: 'paragraph',
            data: { text: 'A catalyst does <strong>not</strong> change the energy of the reactant molecules themselves, nor does it lower the original activation energy. It simply offers a completely new path to the products that is "easier" to traverse.' },
            terms: []
        },
        {
            id: 'h-mb-curve',
            type: 'heading',
            data: { text: 'Catalysts on a Maxwell-Boltzmann Curve', level: 2 },
            terms: []
        },
        {
            id: 'callout-mb',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Maxwell-Boltzmann Explanation',
                text: 'On a Maxwell-Boltzmann curve, adding a catalyst does not change the shape of the curve at all. Instead, it places a <strong>new, lower E_a line</strong> to the <em>left</em> of the uncatalysed E_a line.<br/><br/>The area under the curve to the right of this new lower E_a (E_cat) is much larger. Therefore, a much greater <strong>proportion of molecules</strong> have energy greater than or equal to the catalysed activation energy, leading to a higher frequency of successful collisions.'
            },
            terms: ['Proportion of molecules']
        },
        {
            id: 'h-reaction-profile',
            type: 'heading',
            data: { text: 'Catalysts on an Enthalpy Level Diagram', level: 2 },
            terms: []
        },
        {
            id: 'p-profile',
            type: 'paragraph',
            data: { text: 'On an enthalpy-level diagram (reaction profile), the starting enthalpy of reactants and the final enthalpy of products remain exactly the same. Therefore, a catalyst <strong>does not change the overall enthalpy change (ΔH)</strong>. It only lowers the "hump" (activation energy barrier) between them.' },
            terms: ['Enthalpy level diagram', 'Enthalpy change']
        },
        {
            id: 'callout-intermediate',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Reaction Intermediates',
                text: 'Some catalysed reactions proceed via an <strong>intermediate</strong> species. On a reaction profile, this looks like a camel\'s back with two smaller activation energy "humps" and a dip in the middle (the intermediate), rather than one large semi-circle. The highest peak of the two humps is still lower than the single uncatalysed hump.'
            },
            terms: ['Reaction intermediate']
        },
        {
            id: 'h-industry',
            type: 'heading',
            data: { text: 'Catalysts in Industry', level: 2 },
            terms: []
        },
        {
            id: 'callout-industry',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Economic Advantages',
                text: 'Catalysts are crucial in industrial chemistry for several reasons:<br/>1. <strong>Faster production:</strong> They increase the rate of reaction, forming the desired product more quickly.<br/>2. <strong>Lower temperatures:</strong> Because they lower the activation energy, the reaction can be carried out at lower temperatures, saving huge amounts of money on energy costs.<br/>3. <strong>Atom economy:</strong> They can sometimes be used to increase atom economy or percentage yield by directing the reaction towards a specific product.'
            },
            terms: []
        },
        {
            id: 'p-heterogeneous',
            type: 'paragraph',
            data: { text: 'Most industrial catalysts are <strong>heterogeneous catalysts</strong>, meaning they are in a <em>different physical phase</em> to the reactants (e.g. a solid catalyst interacting with gas reactants).<br/>Key examples:<br/>• <strong>Iron (Fe)</strong> is used as the solid catalyst in the Haber process (producing ammonia).<br/>• <strong>Vanadium(V) oxide (V₂O₅)</strong> is used as the solid catalyst in the Contact process (producing sulfuric acid).' },
            terms: ['Heterogeneous catalyst', 'Haber process', 'Contact process']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-definition', prompt: 'Define a catalyst and state precisely how it works.' },
            { id: 'c2', blockId: 'p-warning', prompt: 'True or False: A catalyst increases the kinetic energy of the reactant particles. Explain.' },
            { id: 'c3', blockId: 'callout-mb', prompt: 'Explain, using the Maxwell-Boltzmann distribution, how a catalyst increases the rate of reaction.' },
            { id: 'c4', blockId: 'p-profile', prompt: 'How does a catalyst affect the overall enthalpy change (ΔH) of a reaction?' },
            { id: 'c5', blockId: 'callout-industry', prompt: 'Explain two economic advantages of using catalysts in large-scale industrial processes.' },
            { id: 'c6', blockId: 'p-heterogeneous', prompt: 'Define the term "heterogeneous catalyst" and name the solid catalyst used in the Haber process.' }
        ],
        summaryText: 'Catalyst: increases rate without being used up by providing an alternative reaction route with a lower activation energy. It does not change the kinetic energy of particles or the overall ΔH. On a Maxwell-Boltzmann curve, the catalyst shifts the E_a line left, exponentially increasing the proportion of molecules with E ≥ E_a, yielding a higher frequency of successful collisions. In industry, they save money by allowing faster production at lower temperatures. Examples include Iron in the Haber process and V₂O₅ in the Contact process (both heterogeneous).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_4;
