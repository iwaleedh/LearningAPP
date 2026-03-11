/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 10
 * "Using Infrared Spectra"
 * Source: Pearson Edexcel IAL Chemistry — Section 10D.4
 */
export const note_chemistry_2_10_10 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use infrared spectra to identify functional groups present in an organic compound and understand the significance of the fingerprint region.' },
            terms: []
        },
        {
            id: 'h-functional',
            type: 'heading',
            data: { text: 'Identifying Functional Groups', level: 2 },
            terms: []
        },
        {
            id: 'list-functional-bonds',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>C-H bonds:</strong> Almost all organic compounds absorb strongly just under 3000 cm⁻¹. This trough is standard and usually ignored when hunting for functional groups.' },
                    { text: '<strong>C=O (Carbonyl):</strong> A very sharp, exceptionally strong/deep spike around 1680 - 1750 cm⁻¹. It is crucial for identifying aldehydes, ketones, carboxylic acids, and esters.' },
                    { text: '<strong>O-H (Alcohol):</strong> A broad, fairly smooth trough at a higher wavenumber between 3230 - 3550 cm⁻¹.' },
                    { text: '<strong>O-H (Carboxylic Acid):</strong> An extremely broad, often "hairy" or messy trough covering 2500 - 3300 cm⁻¹, which physically overlaps and swallows the C-H peak area. If you see this alongside a C=O peak, the molecule is a carboxylic acid.' },
                    { text: '<strong>N-H (Primary Amine):</strong> Found in -NH₂ groups, absorbing between 3100 - 3500 cm⁻¹. It typically presents as a distinct "double trough" to the left of the C-H area.' },
                    { text: '<strong>C-O single bond:</strong> Absorbs between 1000 - 1300 cm⁻¹. Because this sits right inside the crowded fingerprint region, it is very difficult to pick out reliably without confusing it for another bending vibration.' }
                ]
            },
            terms: ['O-H peak', 'C=O peak']
        },
        {
            id: 'callout-hydroxy-acid',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Complex Spectra: Hydroxy-acids',
                text: 'Molecules with multiple different O-H environments (such as lactic acid, which has an alcohol -OH and a carboxylic acid -COOH) will produce an immense, continuous trough spanning both O-H absorption shapes simultaneously (2500 - 3550 cm⁻¹).'
            },
            terms: []
        },
        {
            id: 'h-fingerprint',
            type: 'heading',
            data: { text: 'The Fingerprint Region', level: 2 },
            terms: []
        },
        {
            id: 'p-fingerprint',
            type: 'paragraph',
            data: { text: 'The area to the right of 1500 cm⁻¹ (below 1500) contains many small, complex, overlapping peaks caused by bending vibrations (like C-C and C-O) of the entire carbon skeleton. This complex pattern is called the <strong>fingerprint region</strong>.' },
            terms: ['Fingerprint region']
        },
        {
            id: 'callout-fingerprint',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Using the Fingerprint Region',
                text: 'The fingerprint region is totally unique for almost every single compound (like a human fingerprint). By comparing the fingerprint region of an unknown sample to a computer database of known spectra, you can perfectly identify the exact molecule.'
            },
            terms: []
        },
        {
            id: 'p-greenhouse',
            type: 'paragraph',
            data: { text: '<strong>Greenhouse Gases:</strong> Gases like H₂O, CO₂, CO, and CH₄ are greenhouse gases because their bonds strongly absorb the infrared radiation being radiated back from the Earth\'s surface. This trapped vibrational energy heats up the atmosphere.' },
            terms: ['Greenhouse gases']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-functional-bonds', prompt: 'Describe the visual difference between an O-H absorption peak in an alcohol versus in a carboxylic acid.' },
            { id: 'c2', blockId: 'list-functional-bonds', prompt: 'What very distinct feature on an IR spectrum proves the presence of a carbonyl (C=O) group, such as in a ketone or ester?' },
            { id: 'c3', blockId: 'list-functional-bonds', prompt: 'Why is it difficult to confidently identify a C-O single bond on an IR spectrum?' },
            { id: 'c4', blockId: 'list-functional-bonds', prompt: 'What does the IR absorption peak for a primary amine (N-H bond) typically look like?' },
            { id: 'c5', blockId: 'p-fingerprint', prompt: 'What is the "fingerprint region" on an IR spectrum, and what wavenumber range does it occupy?' },
            { id: 'c6', blockId: 'callout-fingerprint', prompt: 'How is the fingerprint region used practically by chemists to identify an unknown compound?' },
            { id: 'c7', blockId: 'p-greenhouse', prompt: 'Explain the link between infrared absorption and greenhouse gases.' }
        ],
        summaryText: 'Above 1500 cm⁻¹ on an IR spectrum, we look for key functional groups. C=O is a very sharp, deep spike near 1700 cm⁻¹. Alcohols have a broad, smooth O-H peak (~3300 cm⁻¹). Carboxylic acids have a massively broad, messy O-H peak that covers the typical C-H region under 3000 cm⁻¹. Primary amines (-NH₂) show a double trough at 3100-3500 cm⁻¹. C-O bonds fall within the messy fingerprint region below 1500 cm⁻¹, making them hard to pinpoint. Comparing this fingerprint region to known databases allows the exact identification of a molecule. Infrared absorption by bonds is the exact mechanism of the Greenhouse Effect.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_10;
