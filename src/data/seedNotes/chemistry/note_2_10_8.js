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
            data: { text: 'Use fragmentation patterns from mass spectra to distinguish between different isomers and deduce the structure of organic compounds.' },
            terms: []
        },
        {
            id: 'h-fragments',
            type: 'heading',
            data: { text: 'Common Fragment Ions', level: 2 },
            terms: []
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
            id: 'callout-isomers',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Distinguishing Isomers (Example 1)',
                text: 'Pentane and 2-methylbutane both have the formula C₅H₁₂ (M_r = 72). Their molecular ion peaks will both be at m/z 72.<br/><br/>However, pentane (a straight chain) easily breaks into a propyl ion (m/z 43) and an ethyl ion (m/z 29).<br/>2-methylbutane (branched) will have a completely different fragmentation pattern due to its structure, perhaps featuring a massive peak at m/z 57 ([C₄H₉]⁺) from losing a single methyl group. The <strong>fragmentation pattern acts as a unique fingerprint</strong>.'
            },
            terms: ['Fingerprint']
        },
        {
            id: 'callout-isomers2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Distinguishing Isomers (Example 2: C₃H₆O)',
                text: 'Propanal (an aldehyde) and propanone (a ketone) share the molecular formula C₃H₆O, yielding a molecular ion peak at m/z 58.<br/><br/>• <strong>Propanal (CH₃CH₂CHO)</strong> will exhibit a distinct peak at m/z 29 because it can lose the [CHO]⁺ fragment.<br/>• <strong>Propanone (CH₃COCH₃)</strong> cannot form a [CHO]⁺ fragment easily. Instead, it cleaves to form a prominent peak at m/z 43 due to the [CH₃CO]⁺ fragment.'
            },
            terms: []
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
            { id: 'c1', blockId: 'table-fragments', prompt: 'In a mass spectrum, what chemical group is most likely responsible for a fragment peak at m/z 15?' },
            { id: 'c2', blockId: 'table-fragments', prompt: 'Which fragment ion is likely responsible for a peak at m/z 29?' },
            { id: 'c3', blockId: 'callout-isomers2', prompt: 'How could you use a mass spectrum to distinguish between propanal and propanone?' },
            { id: 'c4', blockId: 'list-isotopes', prompt: 'A mass spectrum shows two molecular ion peaks separated by 2 mass units, with the heavier peak being roughly one-third the height of the lighter peak. What element does the compound contain?' },
            { id: 'c5', blockId: 'list-isotopes', prompt: 'How can you identify the presence of a single Bromine atom in a molecule by looking at its mass spectrum?' }
        ],
        summaryText: 'Molecules fragment in the mass spectrometer. Common fragment peaks: 15 ([CH₃]⁺), 29 ([C₂H₅]⁺ or [CHO]⁺), 43 ([C₃H₇]⁺ or [CH₃CO]⁺). The distinct fragmentation pattern acts as a fingerprint to distinguish between structural isomers that share the exact same M⁺ peak (e.g., propanone has an m/z 43 peak, while propanal has an m/z 29 peak). Halogens can be identified by characteristic isotopes: A 1:1 ratio of M and M+2 peaks indicates Bromine (⁷⁹Br, ⁸¹Br). A 3:1 ratio of M and M+2 indicates Chlorine (³⁵Cl, ³⁷Cl).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_8;
