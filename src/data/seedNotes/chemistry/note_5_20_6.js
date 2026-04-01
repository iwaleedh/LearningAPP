export const note_chemistry_5_20_6 = {
  blocks: [
    {
      id: 'obj-mechanisms-summary',
      type: 'objective',
      data: {
        text: 'Summarise and classify the key organic reaction mechanisms: free radical, electrophilic, nucleophilic, and elimination pathways.'
      }
    },
    {
      id: 'h-mechanisms-intro',
      type: 'heading',
      data: { text: 'Overview of Organic Mechanisms', level: 2 }
    },
    {
      id: 'p-mechanisms-intro',
      type: 'paragraph',
      data: {
        text: 'In organic chemistry, reaction mechanisms describe the step-by-step sequence of elementary reactions by which an overall chemical change occurs. Knowing the functional group identifies the type of mechanism that a molecule will typically undergo.'
      }
    },
    {
      id: 'h-free-radical',
      type: 'heading',
      data: { text: '1. Free Radical Mechanisms', level: 2 }
    },
    {
      id: 'table-free-radical',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Free Radical Reactions',
        headers: ['Mechanism', 'Typical Reactants', 'Description'],
        rows: [
          ['<strong>Free radical substitution</strong>', 'Alkanes, Alkyl groups (e.g. methyl side-chains)', 'In the presence of UV light, halogens form radicals that substitute hydrogen atoms in saturated chains.'],
          ['<strong>Free radical addition</strong>', 'Alkenes (e.g. ethene)', 'Occurs during addition polymerisation and occasionally in reactions like HBr addition to alkenes under the presence of organic peroxides.']
        ]
      }
    },
    {
      id: 'h-electrophilic',
      type: 'heading',
      data: { text: '2. Electrophilic Mechanisms', level: 2 }
    },
    {
      id: 'p-electrophilic',
      type: 'paragraph',
      data: {
        text: 'Electrophiles are electron-pair acceptors. They are attracted to regions of high electron density (like C=C double bonds or benzene rings).'
      }
    },
    {
      id: 'table-electrophilic',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Electrophilic Reactions',
        headers: ['Mechanism', 'Typical Reactants', 'Description'],
        rows: [
          ['<strong>Electrophilic addition</strong>', 'Alkenes (e.g. ethene, propene)', 'The electron-rich C=C double bond attacks the electrophile, followed by the addition of a nucleophile to the resulting carbocation.'],
          ['<strong>Electrophilic substitution</strong>', 'Arenes (e.g. benzene, phenol)', 'The delocalised pi-electron ring attacks an electrophile. To preserve the stable aromatic ring, a hydrogen ion is eliminated instead of an addition occurring.']
        ]
      }
    },
    {
      id: 'h-nucleophilic',
      type: 'heading',
      data: { text: '3. Nucleophilic Mechanisms', level: 2 }
    },
    {
      id: 'p-nucleophilic',
      type: 'paragraph',
      data: {
        text: 'Nucleophiles are electron-pair donors. They are attracted to electron-deficient (partially positive) carbon atoms, such as those bonded to halogens or oxygen.'
      }
    },
    {
      id: 'table-nucleophilic',
      type: 'comparisonTable',
      data: {
        caption: 'Types of Nucleophilic Reactions',
        headers: ['Mechanism', 'Typical Reactants', 'Description'],
        rows: [
          ['<strong>Nucleophilic substitution</strong>', 'Halogenoalkanes', 'A nucleophile (e.g. OH⁻, CN⁻, NH₃) replaces the halogen atom on the saturated carbon.'],
          ['<strong>Nucleophilic addition</strong>', 'Carbonyl compounds (Aldehydes, Ketones)', 'The nucleophile attacks the partially positive carbonyl carbon (C=O). The pi-bond breaks to form an intermediate that accepts a proton.'],
          ['<strong>Nucleophilic addition / elimination</strong>', 'Acyl chlorides', 'A nucleophile (e.g. H₂O, alcohol, amine) attacks the acyl carbon. The C=O bond temporarily breaks and reforms, eliminating the chloride ion as a leaving group.']
        ]
      }
    },
    {
      id: 'h-elimination',
      type: 'heading',
      data: { text: '4. Elimination Mechanisms', level: 2 }
    },
    {
      id: 'p-elimination',
      type: 'paragraph',
      data: {
        text: 'Elimination reactions involve the removal of atoms or groups from adjacent carbon atoms to form a pi-bond (C=C double bond).'
      }
    },
    {
      id: 'list-elimination-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>From Halogenoalkanes:</strong> Reaction with hot, ethanolic potassium hydroxide (acting as a base) to form an alkene, water, and a halide ion.',
          '<strong>From Alcohols:</strong> Dehydration using hot concentrated phosphoric/sulfuric acid (or aluminium oxide) to form an alkene and water.'
        ]
      }
    },
    {
      id: 'summary-mechanisms',
      type: 'summary',
      data: {
        text: 'All main functional groups have characteristic mechanisms based on their bond polarities and electron densities: alkanes undergo free radical substitution; alkenes undergo electrophilic addition; arenes undergo electrophilic substitution; halogenoalkanes undergo nucleophilic substitution (and elimination); carbonyls undergo nucleophilic addition; and acyl chlorides undergo nucleophilic addition-elimination.'
      }
    },
    {
      id: 'svg-mechanism-map',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 440" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">ORGANIC MECHANISM TYPES — COMPLETE OVERVIEW</text><!-- Header description --><rect x="10" y="30" width="680" height="24" rx="6" fill="rgba(99,102,241,0.2)" stroke="#60a5fa" stroke-width="1"/><text x="350" y="45" text-anchor="middle" font-size="8.5" fill="#2d2d72">Match the functional group → identify the mechanism type → draw arrows correctly using species and bond polarity</text><!-- Row 1 --><rect x="10" y="60" width="215" height="116" rx="10" fill="rgba(251,146,60,0.15)" stroke="#fb923c" stroke-width="1.5"/><text x="118" y="82" text-anchor="middle" font-size="10" fill="#fb923c" font-weight="700">FREE RADICAL SUBSTn. (SR)</text><text x="118" y="98" text-anchor="middle" font-size="9" fill="#532407">Compound: Alkanes</text><text x="118" y="112" text-anchor="middle" font-size="9" fill="#1e293b">RH + X₂ → RX + HX</text><text x="118" y="126" text-anchor="middle" font-size="8.5" fill="#532407">Initiation: UV → X₂ → 2X•</text><text x="118" y="140" text-anchor="middle" font-size="8.5" fill="#532407">Propagation: X• + RH → R• + HX</text><text x="118" y="154" text-anchor="middle" font-size="8.5" fill="#532407">Termination: rad + rad → molecule</text><text x="118" y="168" text-anchor="middle" font-size="8" fill="#78350f">Fish-hook arrows (single electron)</text><rect x="242" y="60" width="215" height="116" rx="10" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1.5"/><text x="350" y="82" text-anchor="middle" font-size="10" fill="#34d399" font-weight="700">ELECTROPHILIC ADDITION (EA)</text><text x="350" y="98" text-anchor="middle" font-size="9" fill="#065f46">Compound: Alkenes (C=C)</text><text x="350" y="112" text-anchor="middle" font-size="9" fill="#1e293b">C=C + E⁺ → product</text><text x="350" y="126" text-anchor="middle" font-size="8.5" fill="#065f46">π electrons are the nucleophile</text><text x="350" y="140" text-anchor="middle" font-size="8.5" fill="#065f46">Carbocation intermediate forms</text><text x="350" y="154" text-anchor="middle" font-size="8.5" fill="#065f46">Markovnikov: E⁺ adds to less sub. C</text><text x="350" y="168" text-anchor="middle" font-size="8" fill="#78350f">Examples: HBr, Br₂, H₂SO₄/H₂O</text><rect x="474" y="60" width="216" height="116" rx="10" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" stroke-width="1.5"/><text x="582" y="82" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="700">ELECTROPHILIC SUBSTn. (EAS)</text><text x="582" y="98" text-anchor="middle" font-size="9" fill="#1e3a8a">Compound: Arenes (benzene)</text><text x="582" y="112" text-anchor="middle" font-size="9" fill="#1e293b">C₆H₆ + E⁺ → C₆H₅E + H⁺</text><text x="582" y="126" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Ring attacks electrophile</text><text x="582" y="140" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Arenium ion = intermediate</text><text x="582" y="154" text-anchor="middle" font-size="8.5" fill="#1e3a8a">H⁺ lost to restore aromaticity</text><text x="582" y="168" text-anchor="middle" font-size="8" fill="#78350f">HNO₃/H₂SO₄, Cl₂/AlCl₃, RCOCl</text><!-- Row 2 --><rect x="10" y="188" width="215" height="122" rx="10" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="1.5"/><text x="118" y="210" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="700">NUCLEOPHILIC SUBSTn. SN1</text><text x="118" y="226" text-anchor="middle" font-size="9" fill="#7f1d1d">Compound: Halogenoalkane (3°)</text><text x="118" y="240" text-anchor="middle" font-size="9" fill="#1e293b">RX → R⁺ → R-Nu (2 steps)</text><text x="118" y="254" text-anchor="middle" font-size="8.5" fill="#7f1d1d">Step 1 (RDS): C-X breaks → carbocation</text><text x="118" y="268" text-anchor="middle" font-size="8.5" fill="#7f1d1d">Step 2: Nu⁻ attacks carbocation</text><text x="118" y="282" text-anchor="middle" font-size="8.5" fill="#7f1d1d">Racemic product (attack both sides)</text><text x="118" y="296" text-anchor="middle" font-size="8" fill="#78350f">rate = k[RX] only</text><rect x="242" y="188" width="215" height="122" rx="10" fill="rgba(244,114,182,0.15)" stroke="#f472b6" stroke-width="1.5"/><text x="350" y="210" text-anchor="middle" font-size="10" fill="#f472b6" font-weight="700">NUCLEOPHILIC SUBSTn. SN2</text><text x="350" y="226" text-anchor="middle" font-size="9" fill="#4a1040">Compound: Halogenoalkane (1°)</text><text x="350" y="240" text-anchor="middle" font-size="9" fill="#1e293b">Nu⁻ + RX → [Nu---R---X]‡ → NuR</text><text x="350" y="254" text-anchor="middle" font-size="8.5" fill="#4a1040">Concerted: backside attack</text><text x="350" y="268" text-anchor="middle" font-size="8.5" fill="#4a1040">Inversion of configuration (Walden)</text><text x="350" y="282" text-anchor="middle" font-size="8.5" fill="#4a1040">Nu⁻: OH⁻, CN⁻, NH₃, RO⁻</text><text x="350" y="296" text-anchor="middle" font-size="8" fill="#78350f">rate = k[RX][Nu⁻]</text><rect x="474" y="188" width="216" height="122" rx="10" fill="rgba(232,121,249,0.15)" stroke="#e879f9" stroke-width="1.5"/><text x="582" y="210" text-anchor="middle" font-size="10" fill="#e879f9" font-weight="700">NUCLEOPHILIC ADDITION (NA)</text><text x="582" y="226" text-anchor="middle" font-size="9" fill="#4a1040">Compound: Aldehydes, Ketones</text><text x="582" y="240" text-anchor="middle" font-size="9" fill="#1e293b">C=O attacked by Nu⁻ at carbon</text><text x="582" y="254" text-anchor="middle" font-size="8.5" fill="#4a1040">HCN: CN⁻ adds → cyanohydrin</text><text x="582" y="268" text-anchor="middle" font-size="8.5" fill="#4a1040">NaBH₄: H⁻ adds → alcohol</text><text x="582" y="282" text-anchor="middle" font-size="8.5" fill="#4a1040">ALDEHYDE: chiral product (equal ±)</text><text x="582" y="296" text-anchor="middle" font-size="8" fill="#78350f">C=O more reactive than C=C</text><!-- Row 3: addition-elimination + elimination --><rect x="10" y="322" width="330" height="106" rx="10" fill="rgba(99,102,241,0.15)" stroke="#60a5fa" stroke-width="1.5"/><text x="175" y="342" text-anchor="middle" font-size="10" fill="#2d2d72" font-weight="700">NUCLEOPHILIC ADD-ELIMINATION</text><text x="25" y="360" font-size="8.5" fill="#2d2d72">Compound: Acyl chlorides (RCOCl), esters, acid anhydrides</text><text x="25" y="375" font-size="8.5" fill="#1e293b">Nu adds to C=O → tetrahedral intermediate</text><text x="25" y="390" font-size="8.5" fill="#2d2d72">Then Cl⁻ / OR⁻ is eliminated</text><text x="25" y="405" font-size="8.5" fill="#2d2d72">Products: esters, amides, carboxylic acid</text><text x="25" y="418" font-size="8.5" fill="#78350f">RCOCl + ROH → ester + HCl (very fast, violent!)</text><rect x="362" y="322" width="328" height="106" rx="10" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.5"/><text x="526" y="342" text-anchor="middle" font-size="10" fill="#34d399" font-weight="700">ELIMINATION (E2)</text><text x="378" y="360" font-size="8.5" fill="#065f46">Compound: Halogenoalkanes</text><text x="378" y="375" font-size="8.5" fill="#1e293b">RX + KOH/ethanol → alkene + HX</text><text x="378" y="390" font-size="8.5" fill="#065f46">OH⁻ removes β-H; C-X breaks → C=C forms</text><text x="378" y="405" font-size="8.5" fill="#065f46">Hot conc. KOH in ethanol (NOT aqueous)</text><text x="378" y="418" font-size="8.5" fill="#78350f">Competition with SN2; 3° → elimination preferred</text></svg>',
        caption: 'Organic Mechanism Types — 6 key mechanistic categories. SR (alkanes + UV), EA (alkenes + electrophile), EAS (benzene + electrophile), SN1/SN2 (halogenoalkanes), NA (carbonyls), add-elimination (acyl chlorides). Each has a characteristic arrow pattern and rate equation.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Mechanism Classification Tree",
        text: "Alkanes (saturated C\u2212H) \u2192 free radical substitution (UV required). Alkenes (C=C) \u2192 electrophilic addition. Arenes (benzene) \u2192 electrophilic substitution (preserves aromaticity, H lost). Halogenoalkanes \u2192 nucleophilic substitution SN1 (3\u00b0 tertiary) or SN2 (primary-secondary). Carbonyls \u2192 nucleophilic addition. Acyl chlorides \u2192 nucleophilic add-elimination."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-free-radical',
        prompt: 'Which homologous series typically reacts via a free radical substitution mechanism?'
      },
      {
        id: 'cue-2',
        blockId: 'table-electrophilic',
        prompt: 'Explain the difference in typical reaction types between alkenes and arenes, even though both are electron-rich species.'
      },
      {
        id: 'cue-3',
        blockId: 'table-nucleophilic',
        prompt: 'Identify the functional group that undergoes nucleophilic addition / elimination.'
      },
      {
        id: 'cue-4',
        blockId: 'list-elimination-examples',
        prompt: 'Give two examples of functional groups that can undergo elimination reactions to form alkenes.'
      }
    ],
    summaryText: 'Alkanes react via free radical substitution. Alkenes undergo electrophilic addition due to the localized C=C, while arenes undergo electrophilic substitution to preserve the stability of the delocalised pi-ring. Acyl chlorides undergo nucleophilic addition/elimination. Halogenoalkanes (base-induced) and alcohols (acid-catalysed dehydration) can both undergo elimination reactions to form alkenes.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Organic mechanisms menu',
      detail: 'A definitive overview mapping different homologous series to their dominant reaction mechanisms: from free radical processes in alkanes to nucleophilic interactions in acyl chlorides.',
      year: '2023',
      source: 'chemguide.co.uk — Organic mechanisms menu',
      tags: ['mechanisms', 'electrophilic', 'nucleophilic', 'free radical', 'elimination']
    }
  ]
};