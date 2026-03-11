/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 9
 * "Infrared Spectroscopy Introduction"
 * Source: Pearson Edexcel IAL Chemistry — Section 10D.3
 */
export const note_chemistry_2_10_9 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand how infrared radiation causes covalent bonds to vibrate and how this principle is used in Infrared Spectroscopy.' },
            terms: []
        },
        {
            id: 'h-ir',
            type: 'heading',
            data: { text: 'Infrared Radiation and Molecules', level: 2 },
            terms: []
        },
        {
            id: 'p-ir',
            type: 'paragraph',
            data: { text: 'Covalent bonds in molecules are not rigid sticks; they act like stiff springs. They constantly vibrate by stretching or bending. When particular frequencies of <strong>infrared (IR) radiation</strong> hit a molecule, bonds that have the same natural frequency will <strong>absorb that energy</strong> and vibrate more vigorously.' },
            terms: ['Vibrate']
        },
        {
            id: 'callout-polarity',
            type: 'callout',
            data: {
                style: 'key',
                title: 'What bonds absorb IR?',
                text: 'A bond will only absorb infrared radiation if its vibration causes a <strong>change in the polarity</strong> of the molecule.<br/>• Bonds like C-H, O-H, and C=O absorb IR strongly.<br/>• Perfect non-polar diatomic molecules (like N₂ or O₂) do not absorb IR radiation because their stretching does not change their dipole moment.'
            },
            terms: ['Polarity', 'Dipole moment']
        },
        {
            id: 'h-vibrations',
            type: 'heading',
            data: { text: 'Types of Bond Vibrations', level: 3 },
            terms: []
        },
        {
            id: 'list-vibrations',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Stretching:</strong> The distance between the two atoms increases and decreases rhythmically. The bond length changes, acting like a stretching spring. Heavier atoms or stronger bonds will affect the frequency of this stretch.' },
                    { text: '<strong>Bending:</strong> The bond angle between atoms changes. It generally takes less energy to bend a bond than to stretch it, so bending vibrations typically occur at lower wavenumbers.' }
                ]
            },
            terms: []
        },
        {
            id: 'h-spectroscopy',
            type: 'heading',
            data: { text: 'Infrared Spectroscopy', level: 2 },
            terms: []
        },
        {
            id: 'p-spectroscopy',
            type: 'paragraph',
            data: { text: 'In an IR spectrometer, a beam of infrared radiation containing a continuous spread of frequencies is passed through a sample. A detector measures the intensity of radiation that passes through without being absorbed. The resulting spectrum plots <strong>Transmittance (%)</strong> on the y-axis against <strong>Wavenumber (cm⁻¹)</strong> on the x-axis.' },
            terms: ['Transmittance', 'Wavenumber']
        },
        {
            id: 'callout-wavenumber-def',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Wavenumber (cm⁻¹)',
                text: 'Instead of frequency in Hz, IR uses <strong>wavenumber</strong> (measured in cm⁻¹). This simply means the number of waves that fit into one centimetre. Think of it as directly proportional to frequency and energy: higher wavenumber = higher frequency = more energy required to cause the vibration.'
            },
            terms: ['Wavenumber']
        },
        {
            id: 'callout-wavenumber',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Reading the Spectrum',
                text: 'Because we plot Transmittance (the amount of light that made it through), an <strong>absorption "peak" points downwards</strong>.<br/>A strong downward spike means that specific wavenumber of IR radiation was heavily absorbed by a specific type of bond in the sample.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-ir', prompt: 'What happens to a covalent bond when it absorbs infrared radiation?' },
            { id: 'c2', blockId: 'list-vibrations', prompt: 'What are the two main types of bond vibrations, and which generally requires more energy?' },
            { id: 'c3', blockId: 'callout-polarity', prompt: 'Why do molecules of nitrogen gas (N₂) not absorb infrared radiation?' },
            { id: 'c4', blockId: 'p-spectroscopy', prompt: 'What are the labels for the x-axis and y-axis on an infrared spectrum?' },
            { id: 'c5', blockId: 'callout-wavenumber-def', prompt: 'What does a larger wavenumber indicate about the energy of the vibration?' },
            { id: 'c6', blockId: 'callout-wavenumber', prompt: 'On an IR spectrum, what does a strong downward "peak" indicate?' }
        ],
        summaryText: 'Covalent bonds act like springs. They absorb specific frequencies of Infrared (IR) radiation, causing them to vibrate more vigorously by stretching or bending. Bending usually requires less energy than stretching. This absorption only happens if the vibration changes the molecule\'s dipole moment (e.g., in polar bonds like O-H or C=O). An IR spectrum plots % Transmittance vs Wavenumber (cm⁻¹). Higher wavenumber means higher frequency and energy. Downward peaks indicate that radiation at that frequency was strongly absorbed by a bond.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_9;
