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
            id: 'callout-functional',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Absorptions above 1500 cm⁻¹',
                text: 'The area to the left (above ~1500 cm⁻¹) is used to spot specific functional groups. In an exam, you will be given a data booklet with these values.<br/><strong>Crucial shapes to recognise:</strong><br/>• <strong>O-H (Alcohol):</strong> A very broad, smooth peak around 3200-3600 cm⁻¹.<br/>• <strong>O-H (Carboxylic Acid):</strong> An extremely broad, "hairy" peak overlapping the C-H area, around 2500-3300 cm⁻¹.<br/>• <strong>C=O (Carbonyl):</strong> A sharp, incredibly strong/deep spike around 1700 cm⁻¹.'
            },
            terms: ['O-H peak', 'C=O peak']
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
            { id: 'c1', blockId: 'callout-functional', prompt: 'Describe the visual appearance and approximate wavenumber of an O-H bond absorption peak in an alcohol.' },
            { id: 'c2', blockId: 'callout-functional', prompt: 'What very distinct feature on an IR spectrum proves the presence of a carbonyl (C=O) group, such as in a ketone or aldehyde?' },
            { id: 'c3', blockId: 'p-fingerprint', prompt: 'What is the "fingerprint region" on an IR spectrum, and what wavenumber range does it occupy?' },
            { id: 'c4', blockId: 'callout-fingerprint', prompt: 'How is the fingerprint region used practically by chemists to identify an unknown compound?' },
            { id: 'c5', blockId: 'p-greenhouse', prompt: 'Explain the link between infrared absorption and greenhouse gases.' }
        ],
        summaryText: 'Above 1500 cm⁻¹ on an IR spectrum, we look for functional groups. Key shapes: C=O is a very sharp, deep spike near 1700. Alcohols have a broad, smooth O-H peak (~3300). Carboxylic acids have a massively broad, messy O-H peak that covers the C-H region. Below 1500 cm⁻¹ is the complex, unique fingerprint region; comparing this region to a database allows exact identification of a molecule. Infrared absorption by bonds is the exact mechanism of the Greenhouse Effect.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_10;
