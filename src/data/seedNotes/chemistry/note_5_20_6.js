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
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 710" font-family="system-ui,sans-serif">
  <rect x="0" y="0" width="760" height="710" rx="20" fill="#0f172a"/>
  <text x="380" y="30" text-anchor="middle" font-size="18" font-weight="700" fill="#f8fafc" letter-spacing="0.6">ORGANIC MECHANISM TYPES — COMPLETE OVERVIEW</text>
  <rect x="20" y="46" width="720" height="34" rx="10" fill="rgba(99,102,241,0.18)" stroke="#60a5fa" stroke-width="1.2"/>
  <text x="380" y="67" text-anchor="middle" font-size="11.5" fill="#e2e8f0">Match the functional group to the mechanism type, then use the correct arrow style and intermediate.</text>

  <rect x="24" y="98" width="340" height="122" rx="14" fill="rgba(251,146,60,0.16)" stroke="#fb923c" stroke-width="1.8"/>
  <text x="194" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="#fdba74">FREE RADICAL SUBSTITUTION (SR)</text>
  <text x="194" y="144" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: alkanes</text>
  <text x="194" y="164" text-anchor="middle" font-size="11.5" fill="#f8fafc">RH + X₂ → RX + HX</text>
  <text x="194" y="184" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Initiation: UV splits X₂ to make 2X•</text>
  <text x="194" y="200" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Propagation: radical chain steps keep the reaction going</text>
  <text x="194" y="216" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Termination: radical + radical → stable molecule</text>

  <rect x="396" y="98" width="340" height="122" rx="14" fill="rgba(52,211,153,0.16)" stroke="#34d399" stroke-width="1.8"/>
  <text x="566" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="#86efac">ELECTROPHILIC ADDITION (EA)</text>
  <text x="566" y="144" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: alkenes with a localised C=C bond</text>
  <text x="566" y="164" text-anchor="middle" font-size="11.5" fill="#f8fafc">π bond attacks E⁺ → carbocation → nucleophile adds</text>
  <text x="566" y="184" text-anchor="middle" font-size="10.5" fill="#e2e8f0">π electrons behave as the nucleophile</text>
  <text x="566" y="200" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Markovnikov pattern: E⁺ adds to the less substituted carbon</text>
  <text x="566" y="216" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Examples: HBr, Br₂, steam / acid hydration</text>

  <rect x="24" y="234" width="340" height="122" rx="14" fill="rgba(96,165,250,0.16)" stroke="#60a5fa" stroke-width="1.8"/>
  <text x="194" y="258" text-anchor="middle" font-size="13" font-weight="700" fill="#93c5fd">ELECTROPHILIC SUBSTITUTION (EAS)</text>
  <text x="194" y="280" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: arenes such as benzene</text>
  <text x="194" y="300" text-anchor="middle" font-size="11.5" fill="#f8fafc">C₆H₆ + E⁺ → C₆H₅E + H⁺</text>
  <text x="194" y="320" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Ring attacks the electrophile to form an arenium ion</text>
  <text x="194" y="336" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Loss of H⁺ restores aromaticity instead of adding across the ring</text>
  <text x="194" y="352" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Examples: nitration, halogenation, Friedel–Crafts acylation</text>

  <rect x="396" y="234" width="340" height="122" rx="14" fill="rgba(239,68,68,0.16)" stroke="#ef4444" stroke-width="1.8"/>
  <text x="566" y="258" text-anchor="middle" font-size="13" font-weight="700" fill="#fda4af">NUCLEOPHILIC SUBSTITUTION (SN1)</text>
  <text x="566" y="280" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: tertiary halogenoalkanes</text>
  <text x="566" y="300" text-anchor="middle" font-size="11.5" fill="#f8fafc">Step 1: C–X breaks to give a carbocation</text>
  <text x="566" y="320" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Step 2: nucleophile attacks the planar carbocation</text>
  <text x="566" y="336" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Racemic product if a chiral centre is formed</text>
  <text x="566" y="352" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Rate law: k[RX]</text>

  <rect x="24" y="370" width="340" height="122" rx="14" fill="rgba(244,114,182,0.16)" stroke="#f472b6" stroke-width="1.8"/>
  <text x="194" y="394" text-anchor="middle" font-size="13" font-weight="700" fill="#f9a8d4">NUCLEOPHILIC SUBSTITUTION (SN2)</text>
  <text x="194" y="416" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: primary halogenoalkanes</text>
  <text x="194" y="436" text-anchor="middle" font-size="11.5" fill="#f8fafc">Nu⁻ + RX → [Nu···R···X]‡ → NuR + X⁻</text>
  <text x="194" y="456" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Single concerted step with backside attack</text>
  <text x="194" y="472" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Configuration inverts at the reacting carbon</text>
  <text x="194" y="488" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Rate law: k[RX][Nu⁻]</text>

  <rect x="396" y="370" width="340" height="122" rx="14" fill="rgba(232,121,249,0.16)" stroke="#e879f9" stroke-width="1.8"/>
  <text x="566" y="394" text-anchor="middle" font-size="13" font-weight="700" fill="#f0abfc">NUCLEOPHILIC ADDITION (NA)</text>
  <text x="566" y="416" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: aldehydes and ketones</text>
  <text x="566" y="436" text-anchor="middle" font-size="11.5" fill="#f8fafc">Nu⁻ attacks the δ+ carbonyl carbon</text>
  <text x="566" y="456" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Examples: HCN gives cyanohydrins, NaBH₄ gives alcohols</text>
  <text x="566" y="472" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Carbonyl C=O is more reactive than an alkene C=C</text>
  <text x="566" y="488" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Aldehydes can give racemic products when a chiral centre forms</text>

  <rect x="24" y="506" width="340" height="122" rx="14" fill="rgba(99,102,241,0.16)" stroke="#818cf8" stroke-width="1.8"/>
  <text x="194" y="530" text-anchor="middle" font-size="13" font-weight="700" fill="#c7d2fe">NUCLEOPHILIC ADDITION–ELIMINATION</text>
  <text x="194" y="552" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: acyl chlorides, esters, acid anhydrides</text>
  <text x="194" y="572" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Nu attacks C=O → tetrahedral intermediate → leaving group departs</text>
  <text x="194" y="588" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Typical products: esters, amides, carboxylic acids</text>
  <text x="194" y="604" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Example: RCOCl + ROH → ester + HCl</text>
  <text x="194" y="620" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Fast because Cl⁻ is a very good leaving group</text>

  <rect x="396" y="506" width="340" height="122" rx="14" fill="rgba(16,185,129,0.16)" stroke="#34d399" stroke-width="1.8"/>
  <text x="566" y="530" text-anchor="middle" font-size="13" font-weight="700" fill="#86efac">ELIMINATION (E2)</text>
  <text x="566" y="552" text-anchor="middle" font-size="11.5" fill="#f8fafc">Compound: halogenoalkanes or alcohols under dehydrating conditions</text>
  <text x="566" y="572" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Base removes β-H while the leaving group departs → C=C forms</text>
  <text x="566" y="588" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Hot ethanolic KOH favours alkene formation from halogenoalkanes</text>
  <text x="566" y="604" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Concentrated acid or Al₂O₃ favours dehydration of alcohols</text>
  <text x="566" y="620" text-anchor="middle" font-size="10.5" fill="#e2e8f0">Competes strongly with substitution for secondary and tertiary substrates</text>

  <rect x="20" y="646" width="720" height="42" rx="12" fill="rgba(15,23,42,0.88)" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="380" y="668" text-anchor="middle" font-size="11.5" fill="#f8fafc">Quick rule: saturated carbon chains favour substitution, π bonds attract electrophiles, carbonyl carbons attract nucleophiles.</text>
</svg>`,
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