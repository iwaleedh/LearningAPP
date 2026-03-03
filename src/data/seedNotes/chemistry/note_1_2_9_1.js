/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 1
 * Activation energy concept
 */

export const note_chemistry_1_2_9_1 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Define activation energy and explain its role in determining reaction rate. Use enthalpy profile diagrams to illustrate activation energy for exothermic and endothermic reactions.' } },
        { id: 'h-ea', type: 'heading', data: { text: 'Activation Energy', level: 2 }, terms: ['Activation energy'] },
        { id: 'callout-ea-def', type: 'callout', data: { style: 'key', title: '💡 Definition — Activation Energy', text: 'Activation energy (Eₐ) is the minimum energy that colliding particles must possess for a reaction to occur.\n\nEₐ is always positive — energy is always required to break bonds in reactants.\nEₐ is independent of ΔH — a very exothermic reaction can have a high Eₐ (e.g. combustion needs a spark).\n\nHigh Eₐ → few particles have sufficient energy → slow reaction\nLow Eₐ → many particles have sufficient energy → fast reaction' } },
        { id: 'callout-ts-key', type: 'callout', data: { style: 'key', title: '💡 Transition State', text: 'At the top of the energy barrier (the peak of the enthalpy profile) is the transition state (also called the activated complex).\n\nThe transition state is the highest energy point along the reaction pathway.\nIt is unstable and cannot be isolated.\nEₐ = energy difference between reactants and the transition state.' } },
        { id: 'callout-ea-tip', type: 'callout', data: { style: 'tip', title: '💬 Exam Tip — Eₐ vs ΔH', text: 'Eₐ and ΔH are independent:\n  A reaction with very negative ΔH (very exothermic) can still be SLOW if Eₐ is high.\n  Example: H₂ + ½O₂ → H₂O  (ΔH = −286 kJ mol⁻¹, but very slow at room temperature — needs ignition)\n\n  A catalyst lowers Eₐ but does NOT change ΔH.\n  Temperature increase raises average KE → more particles exceed Eₐ → faster rate.' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Eₐ = minimum energy for reaction to occur; always positive', checked: false }, { text: 'High Eₐ → slow reaction; low Eₐ → fast reaction', checked: false }, { text: 'Eₐ is independent of ΔH', checked: false }, { text: 'Transition state is at the peak of enthalpy profile; highest energy; unstable', checked: false }, { text: 'Catalyst lowers Eₐ but leaves ΔH unchanged', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Activation energy (Eₐ) is the minimum energy colliding particles must have for reaction. High Eₐ means slow reaction; low Eₐ means fast. Eₐ is independent of ΔH. The transition state is at the energy peak — unstable and cannot be isolated. Catalysts lower Eₐ without affecting ΔH.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-ea-def', prompt: 'Define activation energy. Why can a very exothermic reaction still be slow?' },
            { id: 'cue-2', blockId: 'callout-ts-key', prompt: 'What is the transition state? Where does it appear on an enthalpy profile diagram?' },
        ],
        summaryText: 'Activation energy definition, transition state, Eₐ vs ΔH, catalyst effect.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 9: Kinetics', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Kinetics', 'Activation energy'] }],
};
