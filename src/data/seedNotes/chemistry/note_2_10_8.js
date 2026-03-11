/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 8
 * "Deducing structures from Mass Spec"
 * Source: Pearson Edexcel IAL Chemistry — Section 10D.2
 */
export const note_chemistry_2_10_8 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use fragmentation patterns from mass spectra to distinguish between different isomers and deduce the structure of organic compounds. Understand base peaks and how the stability of carbocations influences peak heights.' },
            terms: []
        },
        {
            id: 'h-fragments',
            type: 'heading',
            data: { text: 'Common Fragment Ions and the Base Peak', level: 2 },
            terms: []
        },
        {
            id: 'p-base-peak',
            type: 'paragraph',
            data: { text: 'When a molecular ion breaks apart into a positive ion and an uncharged free radical, only the positive ion is deflected and detected by the machine. The <strong>base peak</strong> is the tallest peak in the mass spectrum. It is usually assigned an arbitrary height of 100, and it represents the most common (and therefore most stable) fragment ion formed.' },
            terms: ['Base peak', 'Free radical']
        },
        {
            id: 'table-fragments',
            type: 'comparisonTable',
            data: {
                caption: 'm/z Values of Common Fragments',
                headers: ['m/z Value', 'Likely Fragment Ion', 'Context'],
                rows: [
                    ['15', '[CH₃]⁺', 'End of an alkyl chain'],
                    ['29', '[CH₃CH₂]⁺ or [CHO]⁺', 'Ethyl group or aldehyde group'],
                    ['43', '[CH₃CH₂CH₂]⁺ or [CH₃CHCH₃]⁺ or [CH₃CO]⁺', 'Propyl group or methyl ketone group'],
                    ['17', '[OH]⁺', 'Alcohol group (less common to see cleanly)'],
                    ['31', '[CH₂OH]⁺', 'Primary alcohol end-group']
                ]
            },
            terms: ['Fragment ion']
        },
        {
            id: 'h-isomers',
            type: 'heading',
            data: { text: 'Distinguishing Isomers & Fragment Stability', level: 2 },
            terms: []
        },
        {
            id: 'callout-isomers',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Distinguishing Isomers (Pentane vs 2-methylbutane)',
                text: 'Both have the formula C₅H₁₂ (M_r = 72).<br/><br/><strong>Pentane (straight chain):</strong> Breaks easily into a propyl ion (m/z 43) and an ethyl ion (m/z 29).<br/><strong>2-methylbutane (branched):</strong> Has a completely different fragmentation pattern. It produces a massive peak at m/z 57 ([C₄H₉]⁺).<br/><br/><strong>Why? Stability of carbocations.</strong> The loss of a methyl group from 2-methylbutane produces a <em>secondary</em> carbocation, which is much more stable than the <em>primary</em> carbocations produced by breaking pure straight chains like pentane. Therefore, the peak for the more stable ion is dramatically taller.'
            },
            terms: ['Carbocation stability']
        },
        {
            id: 'callout-isomers2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example 2: Pentan-2-one vs Pentan-3-one',
                text: 'Acylium ions (ions with a positive charge on the carbon of a C=O group, [RCO]⁺) are particularly stable and will often form the base peak.<br/><br/><strong>Pentan-2-one:</strong> Can split beside the C=O group to form [CH₃CO]⁺ (m/z 43) or [COCH₂CH₂CH₃]⁺ (m/z 71). Both will be strong peaks.<br/><strong>Pentan-3-one:</strong> Splitting either side of the central C=O group produces exactly the same very strong acylium ion fragment: [CH₃CH₂CO]⁺ (m/z 57).<br/><br/>Thus, pentan-3-one lacks the peaks at 43 and 71, and pentan-2-one lacks the peak at 57.'
            },
            terms: ['Acylium ion']
        },
        {
            id: 'h-isotopes',
            type: 'heading',
            data: { text: 'Identifying Halogens using Isotopes', level: 2 },
            terms: []
        },
        {
            id: 'p-isotopes',
            type: 'paragraph',
            data: { text: 'Halogens have distinct isotopes that create obvious patterns in the molecular ion region:' },
            terms: []
        },
        {
            id: 'list-isotopes',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Chlorine:</strong> Has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). If a molecule contains ONE chlorine atom, you will see two molecular ion peaks separated by 2 mass units (M and M+2) in a <strong>3:1 ratio</strong>.',
                    '<strong>Bromine:</strong> Has two isotopes: ⁷⁹Br (50%) and ⁸¹Br (50%). If a molecule contains ONE bromine atom, you will see two molecular ion peaks separated by 2 mass units (M and M+2) in a <strong>1:1 ratio</strong> (equal heights).'
                ]
            },
            terms: ['Isotopes', 'M+2 peak']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c-base', blockId: 'p-base-peak', prompt: 'What does the base peak in a mass spectrum represent?' },
            { id: 'c1', blockId: 'table-fragments', prompt: 'In a mass spectrum, what chemical group is most likely responsible for a fragment peak at m/z 15?' },
            { id: 'c2', blockId: 'table-fragments', prompt: 'Which fragment ion is likely responsible for a peak at m/z 29?' },
            { id: 'c-isomers', blockId: 'callout-isomers', prompt: 'Explain why 2-methylbutane has a very tall peak at m/z 57 compared to its straight-chain isomer, pentane.' },
            { id: 'c3', blockId: 'callout-isomers2', prompt: 'How could you use a mass spectrum to distinguish between pentan-2-one and pentan-3-one?' },
            { id: 'c4', blockId: 'list-isotopes', prompt: 'A mass spectrum shows two molecular ion peaks separated by 2 mass units, with the heavier peak being roughly one-third the height of the lighter peak. What element does the compound contain?' },
            { id: 'c5', blockId: 'list-isotopes', prompt: 'How can you identify the presence of a single Bromine atom in a molecule by looking at its mass spectrum?' }
        ],
        summaryText: 'Molecules fragment in the mass spectrometer forming positive ions and uncharged radicals completely lost to the machine. The base peak (tallest peak) represents the most common/stable fragment. Carbocation stability (tertiary > secondary > primary) dictates peak height; e.g. 2-methylbutane strongly forms a secondary C₄H₉⁺ carbocation (m/z 57). Acylium ions ([RCO]⁺) are also very stable causing strong peaks for ketones (e.g. pentan-3-one forms a huge [CH₃CH₂CO]⁺ peak at 57, distinguishing it from pentan-2-one). Halogen isotopes are unique: 1:1 ratio of M/M+2 peaks indicates Bromine (⁷⁹Br/⁸¹Br); 3:1 ratio indicates Chlorine (³⁵Cl/³⁷Cl).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_8;
