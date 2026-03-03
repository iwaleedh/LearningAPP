export const note_chemistry_5_19_3 = {
  blocks: [
    {
      id: 'obj-diazotisation',
      type: 'objective',
      data: {
        text: 'Explain diazotisation of phenylamine to form benzenediazonium ions; understand temperature control and stability; describe azo coupling to form azo compounds and azo dyes; explain uses of azo compounds'
      }
    },
    {
      id: 'h-diazotisation',
      type: 'heading',
      data: { text: 'Diazotisation: Formation of Diazonium Ions', level: 2 }
    },
    {
      id: 'p-diazotisation-1',
      type: 'paragraph',
      data: {
        text: 'Diazotisation is the conversion of an aromatic amine into a diazonium ion. Phenylamine (C₆H₅−NH₂) reacts with sodium nitrite (NaNO₂) and dilute hydrochloric acid at a temperature between 0 and 5°C to form benzenediazonium chloride (C₆H₅−N₂⁺Cl⁻). The temperature control is critical: the reaction must be kept cold because diazonium ions decompose and are unstable above about 10°C.'
      }
    },
    {
      id: 'eq-diazotisation',
      type: 'equation',
      data: {
        html: 'C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O<br />(0−5°C, dilute HCl, benzenediazonium chloride forms)'
      }
    },
    {
      id: 'p-diazotisation-2',
      type: 'paragraph',
      data: {
        text: 'The mechanism involves: (1) HNO₂ (nitrous acid) is generated in situ from NaNO₂ + HCl. (2) Phenylamine attacks HNO₂, forming an N−nitroso intermediate (C₆H₅−N−N=O). (3) This intermediate protonates and loses water, forming the diazonium ion (C₆H₅−N₂⁺). The diazonium ion is highly electrophilic and reactive.'
      }
    },
    {
      id: 'callout-temperature-critical',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Temperature Control is Vital',
        text: 'Diazonium ions are UNSTABLE above ~10°C. Above this temperature, they decompose to give phenol, nitrogen gas, and other products. Reactions must be carried out at 0−5°C to prevent decomposition. Once formed, the diazonium ion should be used immediately in a coupling reaction.'
      }
    },
    {
      id: 'h-azo-coupling',
      type: 'heading',
      data: { text: 'Azo Coupling: Formation of Azo Compounds', level: 2 }
    },
    {
      id: 'p-coupling-1',
      type: 'paragraph',
      data: {
        text: 'The benzenediazonium ion is a powerful electrophile. It can couple (react) with phenols and amines in alkaline solution to form azo compounds. An azo compound has an −N=N− group linking two aromatic rings. The reaction is called azo coupling or diazo coupling.'
      }
    },
    {
      id: 'eq-azo-coupling',
      type: 'equation',
      data: {
        html: 'C₆H₅N₂⁺ + C₆H₅OH (phenol) → C₆H₅−N=N−C₆H₄−OH (azo compound, orange-red)<br />(alkaline conditions, e.g., Na₂CO₃ or NaOH solution)<br /><br />C₆H₅N₂⁺ + C₆H₅NH₂ (aniline) → C₆H₅−N=N−C₆H₄−NH₂ (aminoazo compound, bright colour)'
      }
    },
    {
      id: 'p-coupling-2',
      type: 'paragraph',
      data: {
        text: 'The azo group (−N=N−) is a highly conjugated chromophore (a structure that absorbs light in the visible region). Azo compounds are intensely coloured—typically orange, red, or yellow. The exact colour depends on the substituents on the two benzene rings and the extent of conjugation.'
      }
    },
    {
      id: 'p-coupling-3',
      type: 'paragraph',
      data: {
        text: 'The coupling reaction occurs at the ortho or para position to electron-donating groups (−OH or −NH₂) on the second aromatic ring. The diazonium ion attacks the electron-rich position, forming a new C−N bond. The resulting azo compound is stabilised by the conjugation and by the electron donation from the phenol or amine.'
      }
    },
    {
      id: 'callout-azo-dyes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Azo Dyes and Their Uses',
        text: 'Azo compounds are used as synthetic dyes for textiles (fabrics), inks, and food colouring. Examples: Methyl orange (acid-base indicator), Sunset yellow (food dye), Congo red (pH indicator). The −N=N− chromophore absorbs visible light, giving bright colours. Large-scale industrial synthesis uses the same diazotisation/coupling sequence.'
      }
    },
    {
      id: 'h-colour-and-structure',
      type: 'heading',
      data: { text: 'Azo Compound Colour and Structure', level: 2 }
    },
    {
      id: 'p-colour-1',
      type: 'paragraph',
      data: {
        text: 'The colour of an azo compound is determined by the energy gap between electronic states. The −N=N− group is an extended conjugated system that delocalises electrons. Substitution with electron-donating groups (−OH, −NH₂, −CH₃) extends conjugation and can shift the colour from orange towards red. Substitution with electron-withdrawing groups can affect colour as well.'
      }
    },
    {
      id: 'p-colour-2',
      type: 'paragraph',
      data: {
        text: 'Methyl orange (4−(dimethylamino)azobenzene) is a classic azo dye. It appears orange-red because the dimethylamino group (−N(CH₃)₂) is strongly electron-donating and extends conjugation. Methyl orange is used as a pH indicator: it is red below pH 3.1 and yellow above pH 4.4.'
      }
    },
    {
      id: 'h-azo-compound-reactions',
      type: 'heading',
      data: { text: 'Reactions of Azo Compounds', level: 2 }
    },
    {
      id: 'p-azo-reactions',
      type: 'paragraph',
      data: {
        text: 'Azo compounds can be reduced back to amines. For example, azo benzene (C₆H₅−N=N−C₆H₅) can be reduced to aniline and hydrazobenzene. Reduction is achieved using reducing agents like tin + HCl or hydrogen gas with a catalyst. Oxidation of azo compounds can break the −N=N− bond. Under various conditions, azo compounds can also undergo substitution reactions, especially on activated aromatic rings.'
      }
    },
    {
      id: 'checklist-diazotisation',
      type: 'checklist',
      data: {
        items: [
          { text: 'Diazotisation: phenylamine + NaNO₂ + dil HCl at 0−5°C → diazonium ion', checked: false },
          { text: 'Diazonium ions unstable above ~10°C; must be used immediately', checked: false },
          { text: 'Azo coupling: diazonium ion + phenol/amine (alkaline) → azo compound', checked: false },
          { text: 'Azo compounds have −N=N− chromophore; intensely coloured (orange/red/yellow)', checked: false },
          { text: 'Azo dyes used in textiles, food colouring, pH indicators', checked: false }
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
        text: 'Understand: Diazotisation converts ArNH₂ to ArN₂⁺ using NaNO₂/HCl below 5°C. The diazonium ion can undergo coupling with phenol or amine to form azo dyes.\n\nApply: Write the equation for diazotisation of phenylamine. Why must the temperature be kept below 5°C?\n\nAnalyze: Why are azo dyes intensely coloured? Relate to the extended conjugated system and π-electron delocalisation.\n\nEvaluate: Azo dyes are widely used in food colouring and textiles. Discuss the safety considerations of synthetic dyes vs natural alternatives.'
      },
      terms: []
    },
    {
      id: 'summary-diazotisation',
      type: 'summary',
      data: {
        text: 'Diazotisation converts phenylamine into benzenediazonium chloride using NaNO₂ and dilute HCl at 0−5°C. Diazonium ions are highly unstable and must be kept cold (above ~10°C they decompose). The diazonium ion is a powerful electrophile that couples with phenols and amines in alkaline conditions to form azo compounds. Azo compounds contain the −N=N− chromophore, which is highly conjugated and intensely coloured (orange, red, or yellow). They are widely used as synthetic dyes in textiles, food colouring, and pH indicators. The coupling reaction is ortho/para-selective to electron-donating groups.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-diazotisation', prompt: 'Write the equation for diazotisation of phenylamine. Why is temperature control critical?' },
      { id: 'cue-2', blockId: 'p-coupling-1', prompt: 'Explain what azo coupling is and what the product contains.' },
      { id: 'cue-3', blockId: 'p-coupling-2', prompt: 'Why are azo compounds brightly coloured?' },
      { id: 'cue-4', blockId: 'callout-azo-dyes', prompt: 'Name two examples of azo dyes and their applications.' }
    ],
    summaryText: 'Diazotisation: C₆H₅NH₂ + NaNO₂ + HCl (0−5°C) → C₆H₅N₂⁺Cl⁻. Diazonium ions unstable above ~10°C; use immediately. Azo coupling: diazonium + phenol/amine (alkaline) → Ar−N=N−Ar′ (azo compound, bright colour). −N=N− is conjugated chromophore. Azo dyes: textiles, food colours, pH indicators (e.g., methyl orange).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Diazotisation and azo coupling reactions',
      detail: 'Mechanism of diazonium ion formation, stability and decomposition, azo coupling with phenols and amines, structural factors affecting dye colour, industrial dye synthesis',
      year: '2023',
      source: 'chemguide.co.uk — diazotisation and azo dyes',
      tags: ['diazotisation', 'azo', 'dye', 'diazonium', 'coupling', 'chromophore']
    }
  ]
};
