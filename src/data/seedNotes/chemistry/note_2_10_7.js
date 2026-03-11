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
                style: 'key',
                title: 'The M+1 Peak',
                text: 'You will often see a tiny peak exactly 1 unit to the right of the main molecular ion (M⁺) peak. This is the <strong>M+1 peak</strong>. It exists because about 1.1% of all naturally occurring carbon atoms are the heavier <strong>Carbon-13 (¹³C)</strong> isotope instead of Carbon-12.'
            },
            terms: ['M+1 peak', 'Carbon-13']
        },
        {
            id: 'eq-carbon-atoms',
            type: 'equation',
            data: {
                html: 'n = <span class="nb-frac"><span class="nb-num">100</span><span class="nb-den">1.1</span></span> × <span class="nb-frac"><span class="nb-num">height of M+1 peak</span><span class="nb-den">height of M⁺ peak</span></span>',
                caption: 'Estimating the number of carbon atoms (n) in an organic molecule'
            },
            terms: []
        },
        {
            id: 'callout-mplus1-calculation',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Estimating Carbon Atoms from M+1',
                text: 'Because each carbon atom has an approx. 1.1% chance of being ¹³C, the height of the M+1 peak grows proportionally with the number of carbon atoms. By measuring the relative heights of the M+1 and M⁺ peaks, you can use the formula above to predict the number of carbon atoms.<br/><br/><em>Note: This approximation is reliable for small molecules (up to ~3-5 carbons), but the simple 1.1% ratio breaks down for larger molecules due to compounding statistical factors.</em>'
            },
            terms: []
        },
        {
            id: 'h-mplus2',
            type: 'heading',
            data: { text: 'The M+2 Peak (Halogen Isotopes)', level: 2 },
            terms: []
        },
        {
            id: 'p-mplus2',
            type: 'paragraph',
            data: { text: 'When a molecule contains highly abundant heavier isotopes (such as Chlorine-37 or Bromine-81), a prominent peak emerges 2 m/z units heavier than the molecular ion. This is known as the <strong>M+2 peak</strong>. The ratio of the M⁺ and M+2 peak heights can uniquely identify the presence of these halogens.' },
            terms: ['M+2 peak', 'Isotopes', 'Halogenoalkanes']
        },
        {
            id: 'callout-mplus2-chlorine',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Chlorine: The 3:1 Ratio',
                text: 'Chlorine exists naturally as two main isotopes: ³⁵Cl (approx. 75%) and ³⁷Cl (approx. 25%).<br/><br/>If a molecule contains <strong>one chlorine atom</strong>, the mass spectrum will show two peaks in the molecular ion region separated by 2 m/z units. Because ³⁵Cl is three times more common than ³⁷Cl, the heights of the M⁺ : M+2 peaks will be in a <strong>3 : 1 ratio</strong>.'
            },
            terms: ['Chlorine-35', 'Chlorine-37', '3:1 ratio']
        },
        {
            id: 'callout-mplus2-bromine',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bromine: The 1:1 Ratio',
                text: 'Bromine also exists as two main isotopes: ⁷⁹Br (approx. 50.5%) and ⁸¹Br (approx. 49.5%).<br/><br/>If a molecule contains <strong>one bromine atom</strong>, the spectrum will display two peaks in the molecular ion region separated by 2 m/z units. Because they are almost equally abundant, the M⁺ : M+2 peaks will be roughly equal in height, forming a <strong>1 : 1 ratio</strong>.'
            },
            terms: ['Bromine-79', 'Bromine-81', '1:1 ratio']
        },
        {
            id: 'callout-mplus2-multiple',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Multiple Halogen Atoms',
                text: 'If a compound contains <strong>two chlorine atoms</strong>, three peaks appear: M⁺, M+2, and M+4.<br/>The combinations of isotopes (³⁵Cl-³⁵Cl, ³⁵Cl-³⁷Cl, ³⁷Cl-³⁷Cl) appear in a distinctive <strong>9 : 6 : 1</strong> peak height ratio.'
            },
            terms: []
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
            { id: 'c5', blockId: 'callout-mplus1-calculation', prompt: 'How can you use the M+1 peak to estimate the number of carbon atoms in a small organic molecule?' },
            { id: 'c6', blockId: 'callout-mplus2-chlorine', prompt: 'What peak height ratio in the molecular ion region confirms the presence of a single chlorine atom in a molecule?' },
            { id: 'c7', blockId: 'callout-mplus2-bromine', prompt: 'What peak height ratio in the molecular ion region confirms the presence of a single bromine atom in a molecule?' },
            { id: 'c8', blockId: 'p-highres', prompt: 'How does high-resolution mass spectrometry help in identifying organic compounds with the same whole-number Relative Molecular Mass?' }
        ],
        summaryText: 'Mass Spectrometry ionises molecules (M → M⁺• + e⁻) and measures their mass-to-charge ratio (m/z). The peak with the highest m/z is the M⁺ peak, giving the exact relative molecular mass. The small M+1 peak is due to the 1.1% natural abundance of Carbon-13. Compounds containing one chlorine atom show an M⁺ and M+2 peak in a 3:1 ratio (due to ³⁵Cl and ³⁷Cl). Compounds with one bromine atom show a 1:1 ratio (due to ⁷⁹Br and ⁸¹Br). High-resolution mass spectrometry measures mass to 3–4 decimal places, allowing chemists to distinguish molecular formulas that share the same whole integer mass.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_7;
