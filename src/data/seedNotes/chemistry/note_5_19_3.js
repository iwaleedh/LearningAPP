export const note_chemistry_5_19_3 = {
  blocks: [
    {
      id: 'obj-diazotisation',
      type: 'objective',
      data: {
        text: 'Explain diazotisation of phenylamine to form benzenediazonium ions; understand temperature control and stability; describe reactions of aliphatic amines with nitrous acid; describe azo coupling to form azo compounds and azo dyes; explain uses of azo compounds'
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
        text: 'The mechanism involves: (1) HNO₂ (nitrous acid) is generated IN SITU by mixing NaNO₂ (sodium nitrite) with HCl — the nitrous acid is NOT added directly but forms in solution from the reaction NaNO₂ + HCl → HNO₂ + NaCl. (2) HNO₂ is the actual reactive species that converts phenylamine into the diazonium ion. (3) Phenylamine attacks HNO₂, forming an N−nitroso intermediate (C₆H₅−N−N=O). (4) This intermediate protonates and loses water, forming the diazonium ion (C₆H₅−N₂⁺). The diazonium ion is highly electrophilic and reactive.'
      }
    },
    {
      id: 'callout-temperature-critical',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Temperature Control is Vital',
        text: 'Diazonium ions are UNSTABLE above ~5°C (NOT ~10°C). If the temperature rises above 5°C during diazotisation, the diazonium ion decomposes — the product of decomposition is PHENOL (C₆H₅OH) + N₂ gas. This is why ice is always used: to keep the solution as close to 0°C as possible. Once formed, the diazonium ion should be used immediately in a coupling reaction and NOT stored.'
      }
    },
    {
      id: 'h-aliphatic-nitrous',
      type: 'heading',
      data: { text: 'Reactions of Aliphatic Amines with Nitrous Acid', level: 2 }
    },
    {
      id: 'p-aliphatic-nitrous-1',
      type: 'paragraph',
      data: {
        text: 'While aromatic amines like phenylamine form relatively stable diazonium ions below 5°C, aliphatic amines behave quite differently. Nitrous acid (HNO₂) is unstable and weak, so it is always prepared in situ using sodium nitrite (NaNO₂) and hydrochloric acid.'
      }
    },
    {
      id: 'p-aliphatic-nitrous-2',
      type: 'paragraph',
      data: {
        text: 'This reaction historically served as a test to distinguish between primary, secondary, and tertiary aliphatic amines due to their starkly different observations:'
      }
    },
    {
      id: 'list-aliphatic-nitrous',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Primary aliphatic amines: React to form a highly unstable diazonium ion that immediately decomposes, releasing a burst of colourless, odourless nitrogen gas (N₂) and leaving a complex mixture of organic products (principally alcohols).' },
          { text: 'Secondary aliphatic amines: React to produce a yellow oil known as a nitrosamine (Note: these are powerful carcinogens, so this practical test is heavily restricted).' },
          { text: 'Tertiary aliphatic amines: Simply form a colourless soluble salt solution (e.g., an alkylammonium ion) with the acid, with no gas or visual change.' }
        ]
      }
    },
    {
      id: 'callout-aliphatic-nitrous',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Comparing Aromatic vs Aliphatic',
        text: 'Aromatic primary amine (Phenylamine) + HNO₂ (0−5°C) → Stable diazonium ion (no gas evolved while kept cold).<br /><br />Aliphatic primary amine + HNO₂ → Unstable diazonium ion → Immediate fizzing/effervescence of N₂ gas.'
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
      id: 'callout-phenoxide-coupling',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Phenoxide Ion — The Actual Coupling Partner',
        text: 'Coupling with "phenol" does not use phenol directly. Alkaline conditions (Na₂CO₃ or NaOH) convert phenol into the PHENOXIDE ION (C₆H₅O⁻). The phenoxide ion is MORE reactive towards electrophilic attack than phenol because the negative charge increases electron density on the ring. The diazonium ion (an electrophile) attacks the electron-rich ring at the para position. This is electrophilic aromatic substitution on the phenoxide.\n\nIn summary: phenol + NaOH → sodium phenoxide (C₆H₅O⁻ Na⁺) → this reacts with the diazonium ion.'
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
        text: 'Azo compounds are used as synthetic dyes for textiles (fabrics), inks, and food colouring. Examples: Methyl orange (acid-base indicator), Sunset yellow (food dye), Congo red (pH indicator). The −N=N− chromophore absorbs visible light, giving bright colours. Large-scale industrial synthesis uses the same diazotisation/coupling sequence.\n\nMethyl orange structure: dimethylaminobenzene−N=N−benzenesulfonate; the two benzene rings connected by the N=N group form the conjugated system. The diazonium ion from aniline couples with N,N-dimethylaniline.\n\nCoupling with phenol → para-hydroxyazobenzene → YELLOW azo dye. The specific yellow colour is characteristic of the 4-hydroxyphenyl azo product.'
      }
    },
        {
          id: 'h-diazonium-substitution',
          type: 'heading',
          data: { text: 'Substitution Reactions of Diazonium Ions', level: 2 }
        },
        {
          id: 'list-diazonium-substitution',
          type: 'list',
          data: {
            style: 'numbered',
            items: [
              'Warming benzenediazonium chloride solution causes substitution by −OH: phenol is formed and N₂ gas is released.',
              'Adding potassium iodide (KI) to cold benzenediazonium chloride solution substitutes −N₂⁺ with iodine: iodobenzene is formed and N₂ gas is released.',
              'Both reactions are useful for introducing groups (−OH, −I) onto benzene rings that are otherwise difficult to attach.'
            ]
          }
        },
        {
          id: 'eq-diazonium-substitution',
          type: 'equation',
          data: {
            html: 'C₆H₅N₂⁺Cl⁻ + H₂O (warm) → C₆H₅OH + N₂ + HCl<br />C₆H₅N₂⁺Cl⁻ + KI (cold) → C₆H₅I + N₂ + KCl'
          }
        },
        {
          id: 'svg-diazonium-substitution',
          type: 'svg',
          data: {
            svg: '<svg width="220" height="80" viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="220" height="80" fill="#f9f9f9"/><text x="10" y="20" font-size="14" fill="#333">Diazonium ion (C₆H₅N₂⁺) + H₂O (warm)</text><text x="10" y="40" font-size="14" fill="#333">→ Phenol + N₂</text><text x="10" y="60" font-size="14" fill="#333">Diazonium ion + KI (cold) → Iodobenzene + N₂</text></svg>',
            caption: 'Substitution reactions: −N₂⁺ replaced by −OH (warm) or −I (cold), releasing nitrogen gas.'
          }
        },
        {
          id: 'h-diazonium-coupling',
          type: 'heading',
          data: { text: 'Coupling Reactions: Formation of Azo Dyes', level: 2 }
        },
        {
          id: 'list-diazonium-coupling',
          type: 'list',
          data: {
            style: 'numbered',
            items: [
              'Phenol (as sodium phenoxide, in NaOH) couples with benzenediazonium chloride (cold) to form an orange azo compound.',
              'Naphthalen-2-ol (2-naphthol, in NaOH) couples with benzenediazonium chloride (cold) to form an intense orange-red azo compound.',
              'Phenylamine (aniline, cold) couples with benzenediazonium chloride to form a yellow azo compound (aniline yellow).',
              'Azo compounds are intensely coloured and used as dyes (azo dyes).'
            ]
          }
        },
        {
          id: 'eq-diazonium-coupling',
          type: 'equation',
          data: {
            html: 'C₆H₅N₂⁺Cl⁻ + C₆H₅O⁻ (phenoxide, cold, NaOH) → C₆H₅−N=N−C₆H₄−OH (azo dye, orange)<br />C₆H₅N₂⁺Cl⁻ + C₁₀H₇O⁻ (naphthoxide, cold, NaOH) → C₆H₅−N=N−C₁₀H₆−OH (azo dye, red)<br />C₆H₅N₂⁺Cl⁻ + C₆H₅NH₂ (aniline, cold) → C₆H₅−N=N−C₆H₄−NH₂ (azo dye, yellow)'
          }
        },
        {
          id: 'svg-diazonium-coupling',
          type: 'svg',
          data: {
            svg: '<svg width="220" height="80" viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="220" height="80" fill="#f9f9f9"/><text x="10" y="20" font-size="14" fill="#333">Diazonium ion + phenoxide (NaOH, cold)</text><text x="10" y="40" font-size="14" fill="#333">→ Orange azo dye</text><text x="10" y="60" font-size="14" fill="#333">Diazonium ion + naphthoxide → Red azo dye</text></svg>',
            caption: 'Coupling reactions: diazonium ion forms azo dyes with phenol, naphthol, or aniline under cold, alkaline conditions.'
          }
        },
        {
          id: 'callout-azo-dye-uses',
          type: 'callout',
          data: {
            style: 'tip',
            title: 'Azo Dyes — Uses and Colour',
            text: 'Azo compounds (−N=N− bridge) are highly conjugated and absorb visible light, giving intense colours (orange, red, yellow). Over half of modern dyes are azo dyes. The exact colour depends on substituents and conjugation.'
          }
        },
        {
          id: 'h-methyl-orange-indicator',
          type: 'heading',
          data: { text: 'Azo Dye Indicator: Methyl Orange', level: 2 }
        },
        {
          id: 'list-methyl-orange',
          type: 'list',
          data: {
            style: 'bullet',
            items: [
              'Methyl orange is an azo dye indicator.',
              'Red in acidic solution (pH < 3.1), yellow in alkaline (pH > 4.4), orange in between.',
              'Colour change is due to protonation/deprotonation affecting electron delocalisation.'
            ]
          }
        },
        {
          id: 'svg-methyl-orange-colours',
          type: 'svg',
          data: {
            svg: '<svg width="220" height="80" viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="220" height="80" fill="#f9f9f9"/><text x="10" y="20" font-size="14" fill="#333">Methyl orange: red (acid), orange (mid), yellow (alkali)</text></svg>',
            caption: 'Methyl orange colour changes: red in acid, yellow in alkali, orange in between.'
          }
        },
        {
          id: 'callout-diazonium-exam-tips',
          type: 'callout',
          data: {
            style: 'tip',
            title: 'Exam Tips: Diazonium Reactions',
            text: '• Always specify temperature (cold for coupling, warm for −OH substitution).\n• Use alkaline conditions for coupling with phenol/naphthol.\n• Azo dyes are intensely coloured due to conjugation.\n• Methyl orange is an azo dye indicator: red in acid, yellow in alkali.'
          }
        },
        {
          id: 'summary-diazonium-reactions',
          type: 'summary',
          data: {
            text: 'Diazonium ions undergo substitution (−OH, −I) and coupling reactions to form azo dyes. Coupling requires cold, alkaline conditions. Azo dyes are used as indicators (e.g., methyl orange) and industrial dyes. Colour arises from electron delocalisation.'
          }
        },
    {
      id: 'callout-azo-stability-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Point: Why Azo Dyes Don\'t Fade',
        text: 'Azo dyes are PERMANENT dyes (they don\'t wash out or fade). The reason is conjugation: the extensive delocalised π system through both benzene rings and the N=N bridge creates a thermodynamically stable structure. When visible light is absorbed, the electrons can be excited but return to the same ground state — the molecule itself is not broken down. This makes azo dyes ideal for permanent textile dyeing.'
      }
    },
    {
      id: 'h-bonding-theory-uv',
      type: 'heading',
      data: { text: 'Bonding Theory & UV-Visible Absorption', level: 2 }
    },
    {
      id: 'p-antibonding',
      type: 'paragraph',
      data: {
        text: 'To understand why organic molecules absorb UV or visible light, we must consider molecular orbital theory. When atomic orbitals overlap to form bonds, they create both <strong>bonding orbitals</strong> (lower energy, filled with electrons) and <strong>anti-bonding orbitals</strong> (higher energy, normally empty). For carbon compounds, we consider σ (sigma) and π (pi) bonding orbitals, alongside their corresponding σ* and π* anti-bonding orbitals. There are also <strong>non-bonding (n) orbitals</strong> containing lone pairs of electrons, such as on nitrogen or oxygen atoms.'
      }
    },
    {
      id: 'callout-transitions',
      type: 'callout',
      data: {
        style: 'key',
        title: '⚡ Electronic Transitions',
        text: 'When light passes through a compound, energy is absorbed if it exactly matches the gap between a filled orbital and an empty anti-bonding orbital. The most common transitions in organic spectroscopy are:<br/><br/>• <strong>π → π* transitions:</strong> Electrons jump from a pi bonding orbital to a pi anti-bonding orbital (occurs in double bonds and aromatic rings).<br/>• <strong>n → π* transitions:</strong> Electrons jump from a non-bonding lone pair to a pi anti-bonding orbital (occurs when atoms with lone pairs are attached to a π system).<br/><br/>In simple alkenes, the π → π* energy gap is large, meaning they absorb high-energy, short-wavelength <strong>Ultraviolet (UV)</strong> light.'
      }
    },
    {
      id: 'h-conjugation-gap',
      type: 'heading',
      data: { text: 'Conjugation and the Energy Gap', level: 3 }
    },
    {
      id: 'p-conjugation-def',
      type: 'paragraph',
      data: {
        text: '<strong>Conjugation</strong> refers to a system of alternating single and double bonds. In molecules like buta-1,3-diene or benzene, the overlapping p-orbitals create a continuous delocalised π electron system over several atoms. This delocalisation can extend even further when atoms with lone pairs (like the -OH oxygen in phenol or the -NH₂ nitrogen in phenylamine) interact with the ring.'
      }
    },
    {
      id: 'p-conjugation-effect',
      type: 'paragraph',
      data: {
        text: 'The key effect of extended conjugation is that it <strong>decreases the energy gap</strong> between the highest occupied bonding level (HOMO) and the lowest unoccupied anti-bonding level (LUMO). As the conjugated system gets larger:<br/>1. The energy gap decreases.<br/>2. Less energy is needed to promote an electron.<br/>3. The wavelength of light absorbed increases (because E = hc/λ).<br/><br/>When conjugation is extensive enough, the absorption shifts completely out of the UV region and into the <strong>Visible Light</strong> region.'
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
        text: 'The colour of an azo compound is determined by the energy gap between electronic states. The −N=N− group creates an EXTENDED CONJUGATED SYSTEM — alternating single and double bonds extend continuously through BOTH benzene rings and the N=N link. This delocalisation spreads electrons throughout the entire molecule. The result: (1) the compound absorbs VISIBLE light (not just UV), making it intensely coloured; (2) the conjugated system is THERMODYNAMICALLY STABLE — the electrons are delocalised over a large area, lowering overall energy; (3) because the structure is stable, the compound does NOT fade when exposed to light — making azo dyes useful as permanent dyes. Specific colours depend on substituents: phenol coupling at para position → yellow-orange azo dye; adding electron-donating groups extends delocalisation → shifts colour to longer wavelengths.'
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
          { text: 'Extended conjugation lowers the energy gap for π → π* transitions', checked: false },
          { text: 'Lower energy gap shifts absorption from UV into the Visible region', checked: false },
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
        text: 'Understand: Diazotisation converts ArNH₂ to ArN₂⁺ using NaNO₂/HCl below 5°C. The diazonium ion can undergo coupling with phenol or amine to form azo dyes.\n\nApply: Write the equation for diazotisation of phenylamine. Why must the temperature be kept below 5°C?\n\nAnalyze: Why are azo dyes intensely coloured? Relate to the extended conjugated system, the lowering of the π → π* energy gap, and the resulting absorption of visible light.\n\nEvaluate: Azo dyes are widely used in food colouring and textiles. Discuss the safety considerations of synthetic dyes vs natural alternatives.'
      },
      terms: []
    },
    {
      id: 'summary-diazotisation',
      type: 'summary',
      data: {
        text: 'Diazotisation converts phenylamine into benzenediazonium chloride using NaNO₂ and dilute HCl at 0−5°C. Diazonium ions are highly unstable and must be kept cold. The diazonium ion is a powerful electrophile that couples with phenols and amines in alkaline conditions to form azo compounds. The resulting azo compound contains the −N=N− chromophore and forms a highly extended conjugated system spanning both rings, absorbing visible light to produce intense colours. In contrast, aliphatic primary amines react with nitrous acid to form highly unstable diazonium ions that instantly decompose, releasing quantitative amounts of N₂ gas. Secondary aliphatic amines form a yellow carcinogenic nitrosamine oil. Tertiary aliphatic amines just form a dissolved colourless salt.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-diazotisation', prompt: 'Write the equation for diazotisation of phenylamine. Why is temperature control critical?' },
      { id: 'cue-2', blockId: 'p-coupling-1', prompt: 'Explain what azo coupling is and what the product contains.' },
      { id: 'cue-3', blockId: 'p-colour-1', prompt: 'Explain in terms of bonding and conjugation why azo compounds are brightly coloured.' },
      { id: 'cue-4', blockId: 'callout-aliphatic-nitrous', prompt: 'How do the reactions of primary aromatic and primary aliphatic amines with nitrous acid distinctly differ?' }
    ],
    summaryText: 'Diazotisation: C₆H₅NH₂ + NaNO₂ + HCl (0−5°C) → C₆H₅N₂⁺Cl⁻. Azo coupling: diazonium + phenol/amine (alkaline) → Ar−N=N−Ar′ (coloured due to extended conjugation). Aliphatic primary amines with nitrous acid produce an instant burst of N₂ gas; secondary give a yellow oil; tertiary give a colourless solution.',
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
