/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 7
 * "Mass Spectrometry intro"
 * Source: Pearson Edexcel IAL Chemistry — Section 10D.1
 */
export const note_chemistry_2_10_7 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the use of mass spectrometry to determine the molecular formula and structure of organic compounds.' },
            terms: []
        },
        {
            id: 'h-ms',
            type: 'heading',
            data: { text: 'Mass Spectrometry Overview', level: 2 },
            terms: []
        },
        {
            id: 'p-ms',
            type: 'paragraph',
            data: { text: 'A mass spectrometer works by bombarding a sample with high-energy electrons. This knocks an electron out of the molecule, creating a <strong>molecular ion (M⁺)</strong>. It essentially measures the mass-to-charge ratio (m/z) of the ions produced. Since the charge (z) is almost always +1, the m/z value is simply the relative mass of the ion.' },
            terms: ['Mass spectrometer', 'Molecular ion', 'm/z ratio']
        },
        {
            id: 'callout-molecularion',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Molecular Ion Peak (M⁺ peak)',
                text: 'The peak with the highest m/z value (ignoring small M+1 isotope peaks) is the <strong>molecular ion peak</strong>. Its m/z value tells you the exact <strong>Relative Molecular Mass (M_r)</strong> of the intact molecule.<br/><br/>Equation for formation: M(g) + e⁻ → M⁺•(g) + 2e⁻'
            },
            terms: ['M⁺ peak', 'Relative molecular mass']
        },
        {
            id: 'h-fragmentation',
            type: 'heading',
            data: { text: 'Fragmentation', level: 2 },
            terms: []
        },
        {
            id: 'p-fragmentation',
            type: 'paragraph',
            data: { text: 'The high-energy electron bombardment is very aggressive. It doesn\'t just ionise the molecule; it also causes many molecular ions to break apart (fragment) into smaller pieces. A molecular ion fragments into one smaller positive ion (which is detected) and one uncharged free radical (which is ignored by the detector).' },
            terms: ['Fragmentation', 'Free radical']
        },
        {
            id: 'callout-m1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The M+1 Peak',
                text: 'You will often see a tiny peak exactly 1 unit to the right of the main molecular ion (M⁺) peak. This is the <strong>M+1 peak</strong>. It exists because about 1.1% of all naturally occurring carbon atoms are the heavier <strong>Carbon-13 (¹³C)</strong> isotope instead of Carbon-12.'
            },
            terms: ['M+1 peak', 'Carbon-13']
        },
        {
            id: 'h-highres',
            type: 'heading',
            data: { text: 'High Resolution Mass Spectrometry', level: 2 },
            terms: []
        },
        {
            id: 'p-highres',
            type: 'paragraph',
            data: { text: '<strong>High-resolution mass spectrometers</strong> can measure expected m/z values to 3 or 4 decimal places. This is incredibly useful for distinguishing between different organic compounds that have the exact same relative molecular mass when rounded to a whole number. This is done using exact isotopic masses based on the Carbon-12 scale.' },
            terms: ['High-resolution mass spectrometry']
        },
        {
            id: 'callout-highres-example',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Distinguishing Molecules with the Same M_r',
                text: 'Two compounds, <strong>propane (C₃H₈)</strong> and <strong>ethanal (CH₃CHO)</strong>, both have a relative molecular mass of 44 if whole numbers are used.<br/><br/>However, using exact relative isotopic masses (¹H = 1.0078, ¹²C = 12.0000, ¹⁶O = 15.9949):<br/>• <strong>C₃H₈</strong> = (3 × 12.0000) + (8 × 1.0078) = <strong>44.0624</strong><br/>• <strong>CH₃CHO</strong> = (2 × 12.0000) + (4 × 1.0078) + 15.9949 = <strong>44.0261</strong><br/><br/>A high-resolution mass spectrometer easily distinguishes between these two molecular ion peaks.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-ms', prompt: 'In a mass spectrum, what does the m/z value of a peak represent, assuming a charge of +1?' },
            { id: 'c2', blockId: 'callout-molecularion', prompt: 'Write the equation for the formation of the molecular ion (M⁺) when a molecule M is bombarded by high-energy electrons.' },
            { id: 'c3', blockId: 'callout-molecularion', prompt: 'What key piece of information does the m/z value of the molecular ion peak provide about an unknown compound?' },
            { id: 'c4', blockId: 'callout-m1', prompt: 'What causes the very small M+1 peak often seen on a mass spectrum of an organic compound?' },
            { id: 'c5', blockId: 'p-highres', prompt: 'How does high-resolution mass spectrometry help in identifying organic compounds with the same whole-number Relative Molecular Mass?' }
        ],
        summaryText: 'Mass Spectrometry ionises molecules (M → M⁺• + e⁻) and measures their mass-to-charge ratio (m/z). Because z is usually +1, m/z equals the mass. The peak with the highest m/z is the molecular ion (M⁺) peak, which gives the exact relative molecular mass (M_r) of the compound. The small M+1 peak is due to the 1.1% natural abundance of Carbon-13. The molecule also breaks apart to form smaller detected fragment ions. High-resolution mass spectrometry measures mass to 3–4 decimal places, allowing chemists to distinguish molecular formulas that share the same whole integer mass.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_7;
