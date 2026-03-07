export const note_chemistry_5_20_1 = {
  blocks: [
    {
      id: 'obj-structure-deduction',
      type: 'objective',
      data: {
        text: 'Deduce molecular structure from IR, ¹H NMR, and mass spectrometry data; interpret absorption peaks and splitting patterns to identify functional groups and carbon skeleton.'
      }
    },
    {
      id: 'h-ir-spectroscopy',
      type: 'heading',
      data: { text: 'Infrared Spectroscopy', level: 2 }
    },
    {
      id: 'p-ir-intro',
      type: 'paragraph',
      data: {
        text: 'Infrared (IR) spectroscopy identifies functional groups by measuring the absorption of infrared radiation. Different bonds absorb IR at characteristic wavenumbers (measured in cm⁻¹). The IR spectrum is split into functional group region (4000–1500 cm⁻¹) and fingerprint region (1500–400 cm⁻¹). Key functional groups show distinct, reliable peaks that aid in structure determination.'
      }
    },
    {
      id: 'p-ir-principle',
      type: 'paragraph',
      data: {
        text: 'When IR radiation matches the vibrational frequency of a bond, it is absorbed. Bonds with greater polarity (like O−H, C=O) give stronger absorptions. Bond strength and atomic mass affect wavenumber: stronger bonds and lighter atoms absorb at higher wavenumbers. Sharp peaks indicate specific bonds; broad peaks suggest hydrogen bonding.'
      }
    },
    {
      id: 'table-ir-absorptions',
      type: 'comparisonTable',
      data: {
        headers: ['Bond', 'Wavenumber (cm⁻¹)', 'Functional group'],
        rows: [
          ['O−H (broad)', '2500–3300', 'Carboxylic acid'],
          ['O−H (sharp)', '3200–3550', 'Alcohol'],
          ['N−H', '3100–3500', 'Amine/amide'],
          ['C=O', '1630–1820', 'Carbonyl (aldehyde/ketone/acid/ester)'],
          ['C−O', '1000–1300', 'Alcohol/ester'],
          ['C−H', '~2850–3000', 'Alkane/alkyl']
        ],
        caption: 'Key IR absorptions for functional group identification'
      }
    },
    {
      id: 'callout-ir-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Distinguishing Functional Groups by IR',
        text: 'O−H broad (2500–3300) → carboxylic acid (hydrogen bonding to nearby carboxyl O)\nO−H sharp (3200–3550) → alcohol (or phenol if aromatic)\nN−H (3100–3500) → amine or amide; primary amine shows 2 bands, secondary shows 1\nC=O (1630–1820) → carbonyl: esters higher (~1735), acids ~1700, amides lower (~1650)'
      }
    },
    {
      id: 'h-1h-nmr',
      type: 'heading',
      data: { text: '¹H NMR Spectroscopy', level: 2 }
    },
    {
      id: 'p-nmr-intro',
      type: 'paragraph',
      data: {
        text: 'Proton NMR (¹H NMR) measures the magnetic environment of hydrogen nuclei. Protons in different chemical environments absorb radiofrequency radiation at different frequencies, producing peaks at different chemical shifts (δ, measured in ppm relative to TMS standard). The number of peaks indicates the number of different H environments; peak area (integration) gives the ratio of H atoms; splitting patterns (multiplicity) reveal nearby protons.'
      }
    },
    {
      id: 'p-nmr-shift',
      type: 'paragraph',
      data: {
        text: 'Chemical shift (δ) is determined by the electron density around the H nucleus. Protons attached to electron-withdrawing groups (O, N, aromatic) are deshielded and appear downfield (high δ). Protons on saturated C atoms are shielded and appear upfield (low δ). TMS (tetramethylsilane) is set as δ = 0 ppm as the internal reference.'
      }
    },
    {
      id: 'table-nmr-shifts',
      type: 'comparisonTable',
      data: {
        headers: ['Proton environment', 'δ / ppm'],
        rows: [
          ['R−CH₃', '0.7–1.6'],
          ['R−CH₂−R', '1.2–1.4'],
          ['R₃CH', '1.6–2.0'],
          ['O−CH₃ (ester)', '3.5–4.1'],
          ['Ar−H', '6.5–8.0'],
          ['CHO', '9.4–10.0'],
          ['COOH', '11.0–12.0']
        ],
        caption: '¹H NMR chemical shifts for common proton environments'
      }
    },
    {
      id: 'h-nmr-splitting',
      type: 'heading',
      data: { text: 'NMR Splitting Patterns', level: 3 }
    },
    {
      id: 'p-splitting-intro',
      type: 'paragraph',
      data: {
        text: 'Protons on adjacent carbons split each other\'s signals via spin-spin coupling. The n+1 rule states that a proton with n equivalent neighbouring protons appears as an (n+1)-multiplet. For example, CH₃−CH₂− → CH₃ sees 2 neighbouring H, so appears as triplet; CH₂ sees 3 neighbouring H, so appears as quartet.'
      }
    },
    {
      id: 'list-splitting-patterns',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Singlet (s): no neighbouring H, or equivalent H all couple together → appears as one peak',
          'Doublet (d): 1 neighbouring H → appears as 2 peaks (1:1 ratio)',
          'Triplet (t): 2 neighbouring H → appears as 3 peaks (1:2:1 ratio)',
          'Quartet (q): 3 neighbouring H → appears as 4 peaks (1:3:3:1 ratio)',
          'Multiplet (m): complex splitting from multiple different neighbouring H'
        ]
      }
    },
    {
      id: 'callout-nmr-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: '¹H NMR of Ethyl Acetate (CH₃COOCH₂CH₃)',
        text: 'CH₃−CO− protons: 3H, no neighbours → singlet at δ ~2.0 ppm\nOCH₂− protons: 2H, 3 neighbours (CH₃) → quartet at δ ~4.1 ppm (deshielded by O)\n−CH₃ protons: 3H, 2 neighbours (CH₂) → triplet at δ ~1.2 ppm\n\nIntegration ratio: 3:2:3 (or 1:0.67:1 when normalized)'
      }
    },
    {
      id: 'h-mass-spec',
      type: 'heading',
      data: { text: 'Mass Spectrometry and Fragmentation', level: 2 }
    },
    {
      id: 'p-ms-intro',
      type: 'paragraph',
      data: {
        text: 'Mass spectrometry measures the mass-to-charge ratio (m/z) of molecular and fragment ions. The molecular ion peak (M⁺ or [M]⁺) gives the molar mass. Fragment peaks result from breaking bonds, with characteristic losses revealing functional groups. Common fragments include loss of small groups (CH₃ = 15, OH = 17, CHO = 29, COOH = 45, OC₂H₅ = 45) and rearrangement ions.'
      }
    },
    {
      id: 'list-fragmentation-patterns',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Molecular ion peak M⁺: intact molecule, gives molar mass',
          'M − 15: loss of CH₃ → suggests methyl group attached to positive centre',
          'M − 17: loss of OH → suggests alcohol or phenol',
          'M − 29: loss of CHO → suggests aldehyde or formate group',
          'M − 45: loss of COOH or OC₂H₅ → suggests carboxylic acid or ethyl ester',
          'Base peak: most abundant ion (often a stable fragment like CH₃CO⁺ from ketones)'
        ]
      }
    },
    {
      id: 'callout-ms-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Mass Spectrum Analysis: Ethanoic Acid',
        text: 'M⁺ peak at m/z = 60 → molar mass 60 (CH₃COOH)\nM − 17 peak at m/z = 43 → loss of OH, leaving CH₃CO⁺ (acetylium ion, stable)\nBase peak typically at m/z = 43 (CH₃CO⁺)\nFragmentation pattern strongly suggests carboxylic acid functional group'
      }
    },
    {
      id: 'h-combined-interpretation',
      type: 'heading',
      data: { text: 'Combined Spectroscopic Deduction', level: 2 }
    },
    {
      id: 'p-combined-strategy',
      type: 'paragraph',
      data: {
        text: 'Structure determination combines data from combustion analysis (molecular formula), mass spectrometry (molar mass, M⁺ peak, fragmentation), IR spectroscopy (functional groups), and ¹H NMR (number of H environments, integration, splitting). Start with molecular formula and DoU; IR identifies functional groups; NMR counts H atoms and reveals connectivity; MS fragmentation confirms structure.'
      }
    },
    {
      id: 'callout-combined-example',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Strategy for Structure Determination',
        text: '1. Molecular formula (C, H, N, O content) + molar mass M\n2. Calculate degree of unsaturation\n3. IR: identify O−H, N−H, C=O, C≡N, C=C, aromatic\n4. ¹H NMR: count peaks (H environments), measure integration (H ratios), interpret splitting (neighbouring H)\n5. Mass spectrum: M⁺ peak confirms molar mass, fragments suggest functional groups\n6. Chemical tests: add to confirm (2,4-DNPH for carbonyl, Tollens for aldehyde, Br₂ for alkene, etc.)\n7. Propose structure fitting all data\n8. Double-check: total H matches integration, DoU matches structure'
      }
    },
    {
      id: 'callout-compound-x-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Full Worked Example — Compound X (Exam-Style)',
        text: 'Data given:\n• Percentage by mass: C = 62.1%, H = 10.3%, O = 27.6%\n• Chemical test 1: gives orange precipitate with 2,4-DNPH → carbonyl group present\n• Chemical test 2: does NOT react with Tollens\'\u00bf reagent or Fehling\'s solution → NOT an aldehyde → must be a KETONE\n• Mass spectrum: molecular ion peak M⁺ at m/z = 58\n• IR: strong absorption around 1715 cm⁻¹ → confirms C=O (ketone)\n• ¹H NMR: ONE peak at δ ≈2.2 ppm, integrating for 6 equivalent H atoms\n\nStep 1 — Empirical formula from percentages:\nC: 62.1 ÷ 12 = 5.175 | H: 10.3 ÷ 1 = 10.3 | O: 27.6 ÷ 16 = 1.725\nRatio: 5.175 : 10.3 : 1.725 → divide by 1.725 → 3 : 6 : 1\nEmpirical formula: C₃H₆O\n\nStep 2 — Molecular formula:\nMr of C₃H₆O = 36 + 6 + 16 = 58\nM⁺ = 58 from mass spec → n = 58/58 = 1\nMolecular formula: C₃H₆O (same as empirical)\n\nStep 3 — DoU:\nDoU = (2×3 + 2 − 6) / 2 = 2/2 = 1 → one double bond → consistent with C=O\n\nStep 4 — Chemical tests confirm ketone (not aldehyde)\n\nStep 5 — NMR: 1 singlet, 6 equivalent H at δ 2.2 ppm → two CH₃ groups in identical environments on either side of C=O\n\nConclusion: Compound X is PROPANONE (acetone) CH₃−CO−CH₃\nThe two CH₃ groups are equivalent → one NMR peak, 6H, singlet (no adjacent H to cause splitting)'
      }
    },
    {
      id: 'checklist-spectra',
      type: 'checklist',
      data: {
        items: [
          { text: 'I know IR peak positions for common functional groups', checked: false },
          { text: 'I can distinguish O−H (acid vs alcohol) by IR peak shape', checked: false },
          { text: 'I can read ¹H NMR chemical shift tables and identify proton environments', checked: false },
          { text: 'I can apply the n+1 rule to predict splitting patterns', checked: false },
          { text: 'I understand integration = number of equivalent H atoms', checked: false },
          { text: 'I can interpret MS fragmentation patterns and common losses', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: IR identifies functional groups (broad O−H, sharp C=O); ¹H NMR gives chemical environment, integration (H ratio), and splitting (n+1 rule); MS gives M⁺ and fragmentation.\n\nApply: An IR spectrum shows a broad absorption at 2500-3300 cm⁻¹ and sharp peak at 1710 cm⁻¹. Identify the functional group.\n\nAnalyze: Why does the ¹H NMR of ethanol show a triplet and a quartet but not a doublet?\n\nEvaluate: Can you always determine a complete structure from one type of spectrum alone? Discuss why combined techniques are essential.'
      },
      terms: []
    },
    {
      id: 'summary-spectra',
      type: 'summary',
      data: {
        text: 'IR identifies functional groups by characteristic peak positions (O−H, N−H, C=O, C−O, C−H). ¹H NMR shows H environments (δ ppm), integration (H count), and splitting (neighbouring H via n+1 rule). MS gives molar mass (M⁺) and fragments revealing functional groups. Combined interpretation yields molecular structure.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-ir-intro',
        prompt: 'What is the difference between a broad O−H peak in IR (~2700 cm⁻¹) and a sharp O−H peak (~3300 cm⁻¹)?'
      },
      {
        id: 'cue-2',
        blockId: 'table-nmr-shifts',
        prompt: 'Give the approximate ¹H NMR chemical shift ranges for alkyl (R−CH₃), aromatic (Ar−H), and carboxylic acid (COOH) protons.'
      },
      {
        id: 'cue-3',
        blockId: 'p-splitting-intro',
        prompt: 'State the n+1 rule and explain why a CH₃ next to CH₂ appears as a triplet and quartet respectively.'
      },
      {
        id: 'cue-4',
        blockId: 'list-fragmentation-patterns',
        prompt: 'What common mass spectrum losses indicate (a) a methyl group, (b) a carboxylic acid, (c) an aldehyde?'
      },
      {
        id: 'cue-5',
        blockId: 'p-combined-strategy',
        prompt: 'Outline the step-by-step strategy for deducing structure from IR, NMR, and MS data.'
      }
    ],
    summaryText: 'IR peaks identify functional groups (O−H broad=acid, sharp=alcohol; C=O 1700; C−O 1000−1300). ¹H NMR: δ (ppm) shows environment, integration shows H count, n+1 rule predicts splitting. MS: M⁺ = molar mass, fragments show losses (−15=CH₃, −45=COOH/OEt). Combine all three spectroscopic methods.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Spectroscopic Structure Determination in Organic Chemistry',
      detail: 'IR, NMR, and MS are the primary tools for identifying unknown organic compounds at A-level and beyond.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15)',
      tags: ['spectroscopy', 'IR', 'NMR', 'MS']
    }
  ]
};
