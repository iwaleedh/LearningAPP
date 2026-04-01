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
            data: { text: 'The region to the right-hand side of the IR spectrum (from about 1500 cm⁻¹ to 500 cm⁻¹) usually contains a very complicated series of absorptions. These are mainly due to a variety of complex bending vibrations within the entire molecule. This area is called the <strong>fingerprint region</strong>.' },
            terms: ['Fingerprint region']
        },
        {
            id: 'callout-fingerprint-use',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Using the Fingerprint Region',
                text: 'While the region above 1500 cm⁻¹ is used to identify specific functional groups (like an –OH or C=O bond), the fingerprint region is unique to each specific compound. Even molecules with identical functional groups (like propan-1-ol and propan-2-ol) produce completely different patterns between 1500 cm⁻¹ and 500 cm⁻¹. An unknown compound can be positively identified by comparing its fingerprint pattern to a database of known spectra.'
            },
            terms: []
        },
        {
            id: 'svg-spectroscopy-guide',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">COMBINED SPECTROSCOPY GUIDE</text><!-- LEFT: Mass Spectrometry --><rect x="10" y="32" width="330" height="406" rx="10" fill="rgba(244,114,182,0.08)" stroke="#f472b6" stroke-width="1.5"/><text x="175" y="52" text-anchor="middle" font-size="11" fill="#f472b6" font-weight="700">MASS SPECTROMETRY</text><text x="175" y="67" text-anchor="middle" font-size="9" fill="#4a1040">Molecular ion M⁺• = m/z gives Mr</text><!-- Common fragments table --><rect x="24" y="74" width="302" height="20" rx="4" fill="rgba(244,114,182,0.25)"/><text x="70" y="87" font-size="8.5" fill="#4a1040" font-weight="700">Loss</text><text x="165" y="87" text-anchor="middle" font-size="8.5" fill="#4a1040" font-weight="700">m/z of fragment</text><text x="290" y="87" text-anchor="middle" font-size="8.5" fill="#4a1040" font-weight="700">Suggests</text><!-- Fragment rows --><text x="30" y="106" font-size="8.5" fill="#532407">−15</text><text x="165" y="106" text-anchor="middle" font-size="8.5" fill="#1e293b">M − 15 = m/z</text><text x="290" y="106" text-anchor="middle" font-size="8.5" fill="#532407">−CH₃ group</text><text x="30" y="121" font-size="8.5" fill="#532407">−29</text><text x="165" y="121" text-anchor="middle" font-size="8.5" fill="#1e293b">M − 29 = m/z</text><text x="290" y="121" text-anchor="middle" font-size="8.5" fill="#532407">−CHO or −C₂H₅</text><text x="30" y="136" font-size="8.5" fill="#532407">−31</text><text x="165" y="136" text-anchor="middle" font-size="8.5" fill="#1e293b">M − 31</text><text x="290" y="136" text-anchor="middle" font-size="8.5" fill="#532407">−OCH₃ or −CH₂OH</text><text x="30" y="151" font-size="8.5" fill="#532407">−45</text><text x="165" y="151" text-anchor="middle" font-size="8.5" fill="#1e293b">M − 45</text><text x="290" y="151" text-anchor="middle" font-size="8.5" fill="#532407">−OC₂H₅ or −CO₂H</text><text x="30" y="166" font-size="8.5" fill="#532407">m/z = 29</text><text x="165" y="166" text-anchor="middle" font-size="8.5" fill="#1e293b">fragment at 29</text><text x="290" y="166" text-anchor="middle" font-size="8.5" fill="#532407">CHO⁺ cation</text><text x="30" y="181" font-size="8.5" fill="#532407">m/z = 77</text><text x="165" y="181" text-anchor="middle" font-size="8.5" fill="#1e293b">fragment at 77</text><text x="290" y="181" text-anchor="middle" font-size="8.5" fill="#532407">C₆H₅⁺ phenyl cation</text><!-- MS interpretation strategy --><rect x="22" y="192" width="306" height="130" rx="8" fill="rgba(244,114,182,0.12)" stroke="#f472b6" stroke-width="1"/><text x="175" y="210" text-anchor="middle" font-size="9.5" fill="#f472b6" font-weight="700">HOW TO INTERPRET MS</text><text x="30" y="228" font-size="8.5" fill="#4a1040">1. Identify M⁺• (highest m/z peak) → Mr</text><text x="30" y="243" font-size="8.5" fill="#4a1040">2. Look for M+1 peak → % ×0.011 = # carbons</text><text x="30" y="258" font-size="8.5" fill="#4a1040">3. M+2 peak: Cl isotopes (ratio 3:1) or Br (ratio 1:1)</text><text x="30" y="273" font-size="8.5" fill="#4a1040">4. Work out losses from M: M − fragment = lost group</text><text x="30" y="288" font-size="8.5" fill="#4a1040">5. Base peak (tallest) = most stable carbocation</text><text x="30" y="303" font-size="8.5" fill="#78350f">6. Cross-reference with IR/NMR for functional groups</text><!-- MS example --><rect x="22" y="333" width="306" height="96" rx="8" fill="rgba(99,102,241,0.15)" stroke="#60a5fa" stroke-width="1"/><text x="175" y="352" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">EXAMPLE: Mr = 60, loss of 15</text><text x="30" y="368" font-size="8.5" fill="#2d2d72">M⁺• at 60 → Mr = 60</text><text x="30" y="383" font-size="8.5" fill="#2d2d72">Fragment at 45 → loss of 15 → −CH₃</text><text x="30" y="398" font-size="8.5" fill="#2d2d72">IR: broad 3200-3550 → OH present</text><text x="30" y="413" font-size="8.5" fill="#1e293b" font-weight="700">→ Likely propan-1-ol or propan-2-ol</text><!-- RIGHT: Infrared Spectroscopy --><rect x="360" y="32" width="330" height="406" rx="10" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="1.5"/><text x="525" y="52" text-anchor="middle" font-size="11" fill="#60a5fa" font-weight="700">INFRARED SPECTROSCOPY</text><text x="525" y="67" text-anchor="middle" font-size="9" fill="#1e3a8a">Wavenumber (cm⁻¹) → functional group bond identified</text><!-- IR bands --><rect x="374" y="74" width="302" height="20" rx="4" fill="rgba(96,165,250,0.25)"/><text x="440" y="87" text-anchor="middle" font-size="8.5" fill="#1e3a8a" font-weight="700">Wavenumber</text><text x="570" y="87" text-anchor="middle" font-size="8.5" fill="#1e3a8a" font-weight="700">Bond / Group</text><rect x="374" y="97" width="302" height="28" rx="4" fill="rgba(52,211,153,0.15)"/><text x="440" y="107" text-anchor="middle" font-size="8.5" fill="#34d399">3200–3550</text><text x="440" y="118" text-anchor="middle" font-size="8" fill="#065f46">(broad)</text><text x="570" y="113" text-anchor="middle" font-size="8.5" fill="#065f46">O−H (alcohol) — broad dip</text><rect x="374" y="130" width="302" height="28" rx="4" fill="rgba(232,121,249,0.12)"/><text x="440" y="140" text-anchor="middle" font-size="8.5" fill="#e879f9">2500–3300</text><text x="440" y="151" text-anchor="middle" font-size="8" fill="#4a1040">(v. broad)</text><text x="570" y="145" text-anchor="middle" font-size="8.5" fill="#4a1040">O−H (carboxylic acid) — very broad</text><rect x="374" y="164" width="302" height="26" rx="4" fill="rgba(239,68,68,0.12)"/><text x="440" y="178" text-anchor="middle" font-size="8.5" fill="#ef4444">1700–1750</text><text x="570" y="179" text-anchor="middle" font-size="8.5" fill="#7f1d1d">C=O (aldehyde, ketone, acid, ester)</text><rect x="374" y="195" width="302" height="26" rx="4" fill="rgba(251,146,60,0.12)"/><text x="440" y="206" text-anchor="middle" font-size="8.5" fill="#fb923c">3300–3500</text><text x="440" y="217" text-anchor="middle" font-size="8" fill="#532407">(sharp, 1 or 2)</text><text x="570" y="212" text-anchor="middle" font-size="8.5" fill="#532407">N−H (amine / amide)</text><rect x="374" y="226" width="302" height="26" rx="4" fill="rgba(96,165,250,0.12)"/><text x="440" y="240" text-anchor="middle" font-size="8.5" fill="#60a5fa">2850–3000</text><text x="570" y="240" text-anchor="middle" font-size="8.5" fill="#1e3a8a">C−H (not very diagnostic)</text><rect x="374" y="257" width="302" height="26" rx="4" fill="rgba(99,102,241,0.2)"/><text x="440" y="271" text-anchor="middle" font-size="8.5" fill="#60a5fa">500–1500</text><text x="570" y="271" text-anchor="middle" font-size="8.5" fill="#2d2d72">FINGERPRINT REGION (unique to each compound)</text><!-- IR strategy --><rect x="374" y="294" width="302" height="130" rx="8" fill="rgba(96,165,250,0.12)" stroke="#60a5fa" stroke-width="1"/><text x="525" y="312" text-anchor="middle" font-size="9.5" fill="#60a5fa" font-weight="700">HOW TO INTERPRET IR</text><text x="378" y="328" font-size="8.5" fill="#1e3a8a">1. Look for broad dip 3200-3550 → OH (alcohol)</text><text x="378" y="343" font-size="8.5" fill="#1e3a8a">2. Look for sharp dip ~1720 → C=O present</text><text x="378" y="358" font-size="8.5" fill="#1e3a8a">3. If C=O + broad 2500-3300 → carboxylic acid</text><text x="378" y="373" font-size="8.5" fill="#1e3a8a">4. If C=O + no OH → aldehyde or ketone</text><text x="378" y="388" font-size="8.5" fill="#1e3a8a">5. Compare fingerprint to database for ID</text><text x="378" y="403" font-size="8.5" fill="#1e3a8a">6. Cannot distinguish ABOVE fingerprint region alone</text><text x="378" y="418" font-size="8.5" fill="#1e3a8a">   — additional data (MS/NMR) needed</text></svg>',
                caption: 'Combined Spectroscopy Guide — MS (left): identify Mr from M⁺ ion, deduce functional groups from fragment losses. IR (right): O-H broad at 3200-3550, C=O sharp at 1700-1750, fingerprint region 500-1500 allows unique compound ID by comparison.'
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
            { id: 'c6', blockId: 'callout-wavenumber', prompt: 'On an IR spectrum, what does a strong downward "peak" indicate?' },
            { id: 'c7', blockId: 'p-fingerprint', prompt: 'Which wavenumber range makes up the fingerprint region in an IR spectrum?' },
            { id: 'c8', blockId: 'callout-fingerprint-use', prompt: 'How is the fingerprint region used to positively identify an exact molecule?' }
        ],
        summaryText: 'Covalent bonds act like springs. They absorb specific frequencies of Infrared (IR) radiation, causing them to vibrate more vigorously by stretching or bending. Bending usually requires less energy than stretching. This absorption only happens if the vibration changes the molecule\'s dipole moment. An IR spectrum plots % Transmittance vs Wavenumber (cm⁻¹). Downward peaks indicate strong absorption. The region from ~1500 to 500 cm⁻¹ is the Fingerprint Region, containing complex peaks (mostly bending). It acts as a unique signature pattern identifying the specific compound when compared to known databases, while frequencies above 1500 cm⁻¹ are used to identify particular functional groups.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_9;
