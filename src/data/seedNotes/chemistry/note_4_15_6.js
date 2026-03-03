export const note_chemistry_4_15_6 = {
  blocks: [
    {
      id: 'obj-acyl-esters',
      type: 'objective',
      data: {
        text: 'Understand acyl chlorides, their reactivity, reactions with nucleophiles, and ester synthesis and uses.'
      }
    },
    {
      id: 'h-acyl-chlorides',
      type: 'heading',
      data: { text: 'Acyl Chlorides: Structure & Reactivity', level: 2 }
    },
    {
      id: 'p-acyl-structure',
      type: 'paragraph',
      data: {
        text: 'Acyl chlorides (RCOCl, also called acid chlorides or alkanoyl chlorides) are highly reactive derivatives of carboxylic acids. The C=O bond is polarised: the chlorine is more electronegative than oxygen, withdrawing electron density and making the carbonyl carbon even more electrophilic than in carboxylic acids. The general structure is R–C(=O)–Cl. Common examples: acetyl chloride (CH₃COCl), butanoyl chloride (CH₃CH₂CH₂COCl), benzoyl chloride (C₆H₅COCl).'
      }
    },
    {
      id: 'p-acyl-reactivity',
      type: 'paragraph',
      data: {
        text: 'Acyl chlorides are much more reactive than carboxylic acids because: (1) The C=O carbon is more electrophilic (Cl is highly electronegative). (2) Cl⁻ is an excellent leaving group (weak base, stable in solution). (3) The leaving group can depart easily during nucleophilic acyl substitution, unlike the –OH in carboxylic acids. As a result, acyl chlorides react rapidly and often exothermically with nucleophiles at room temperature, without the need for catalysts or heat.'
      }
    },
    {
      id: 'callout-acyl-reactivity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity Order',
        text: 'For carboxylic acid derivatives, reactivity towards nucleophilic acyl substitution decreases in this order: Acyl chloride (RCOCl) > Anhydride (RCOORC) > Ester (RCOOR′) > Carboxylic acid (RCOOH) > Amide (RCONR₂). This is because the leaving group ability increases: Cl⁻ >> OR⁻ >> OH⁻. Acyl chlorides are most reactive; amides are least reactive.'
      }
    },
    {
      id: 'h-acyl-reactions',
      type: 'heading',
      data: { text: 'Reactions of Acyl Chlorides', level: 2 }
    },
    {
      id: 'table-acyl-reactions',
      type: 'comparisonTable',
      data: {
        headers: ['Nucleophile', 'Reaction', 'Product', 'Conditions'],
        rows: [
          ['Water (H₂O)', 'Hydrolysis', 'R–COOH (carboxylic acid)', 'Room temp, fast, exothermic'],
          ['Alcohol (R′OH)', 'Esterification', 'R–COO–R′ (ester)', 'Room temp, no catalyst needed'],
          ['Primary amine (R′NH₂)', 'Amidation', 'R–CO–NHR′ (amide)', 'Room temp, produces R′NH₃⁺Cl⁻'],
          ['Ammonia (NH₃)', 'Amidation', 'R–CONH₂ (primary amide)', 'Room temp, excess NH₃ needed'],
          ['Aromatic ring (with catalyst)', 'Friedel-Crafts acylation', 'Ar–CO–R (ketone)', 'AlCl₃ or FeBr₃ catalyst, room temp']
        ],
        caption: 'Acyl chloride reactions with various nucleophiles. All are fast, exothermic, and require no heat or strong catalysts (except Friedel-Crafts).'
      }
    },
    {
      id: 'h-hydrolysis',
      type: 'heading',
      data: { text: 'Hydrolysis to Carboxylic Acid', level: 3 }
    },
    {
      id: 'p-hydrolysis',
      type: 'paragraph',
      data: {
        text: 'Acyl chlorides react with water to form carboxylic acids and hydrogen chloride: R–COCl + H₂O → R–COOH + HCl. The reaction is rapid and exothermic. In organic synthesis, if you want to prevent hydrolysis, you must exclude water (use anhydrous conditions). If hydrolysis occurs accidentally, the HCl gas evolved is acidic and corrosive. This is why acyl chlorides must be stored under inert atmosphere or in sealed bottles, away from moisture.'
      }
    },
    {
      id: 'equation-acyl-hydrolysis',
      type: 'equation',
      data: {
        html: 'R–COCl + H<sub>2</sub>O → R–COOH + HCl',
        caption: 'Hydrolysis of acyl chlorides. The reaction is rapid, exothermic, and produces acidic HCl gas.'
      }
    },
    {
      id: 'h-esterification-acyl',
      type: 'heading',
      data: { text: 'Esterification via Acyl Chlorides', level: 3 }
    },
    {
      id: 'p-esterification-acyl',
      type: 'paragraph',
      data: {
        text: 'Acyl chlorides react with alcohols to form esters: R–COCl + R′–OH → R–COO–R′ + HCl. This is a nucleophilic acyl substitution reaction where the nucleophile is the alcohol and the leaving group is Cl⁻. The reaction is rapid at room temperature and does not require heat or acid catalyst (unlike Fischer esterification). The mechanism: (1) the alcohol (nucleophile) attacks the electrophilic carbonyl carbon, (2) a tetrahedral intermediate forms, (3) Cl⁻ leaves, (4) the carbonyl is regenerated with the alcohol group now bonded as an ester. This method is preferred when: (a) high yield and speed are needed, (b) the substrate is heat-sensitive, (c) avoiding water (no Fischer equilibrium) is important.'
      }
    },
    {
      id: 'equation-esterification-acyl',
      type: 'equation',
      data: {
        html: 'R–COCl + R′–OH → R–COO–R′ + HCl',
        caption: 'Esterification via acyl chlorides. Rapid, room temperature, no heat or catalyst needed. Preferred for acid-labile or heat-sensitive alcohols.'
      }
    },
    {
      id: 'p-amidation-acyl',
      type: 'paragraph',
      data: {
        text: 'Acyl chlorides react with amines to form amides: R–COCl + R′NH₂ → R–CO–NHR′ + HCl. Primary amines (RNH₂) and ammonia (NH₃) both react. With NH₃, you need excess to ensure complete reaction (the NH₃ also acts as a base to neutralise HCl produced). Secondary amines (R₂NH) also react: R–COCl + R₂NH → R–CO–NR₂ + HCl, forming a tertiary amide. The reaction is very fast and exothermic. This is a key method for synthesising amides, which are important in pharmaceuticals, proteins, and polymers.'
      }
    },
    {
      id: 'h-esters-uses',
      type: 'heading',
      data: { text: 'Esters: Synthesis, Properties & Uses', level: 2 }
    },
    {
      id: 'p-ester-synthesis',
      type: 'paragraph',
      data: {
        text: 'Esters can be synthesised in two main ways: (1) Fischer esterification (carboxylic acid + alcohol, acid catalyst, heat, reversible), (2) Acyl chloride + alcohol (room temp, no catalyst, fast, irreversible). The second method is preferred in industry when cost and speed matter. Esters can also be made from anhydrides (RCO–O–COR′) + alcohols, or from carboxylic salts (R–COO⁻Na⁺) + alkyl halides.'
      }
    },
    {
      id: 'p-ester-properties',
      type: 'paragraph',
      data: {
        text: 'Esters are polar molecules with a C=O group, but they lack an O–H group for hydrogen bonding. As a result, they have lower boiling points than alcohols or carboxylic acids of similar molecular weight. Small esters are volatile and have pleasant, fruity, or floral odours. Larger esters are less volatile. Esters are slightly soluble in water (can accept H-bonds through the C=O oxygen but cannot donate). They are excellent solvents for organic compounds.'
      }
    },
    {
      id: 'list-ester-uses',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Perfumes & flavorings: ethyl acetate (fruity), isobutyl formate (raspberry), etc.',
          'Solvents: ethyl acetate, methyl ethyl ketone (MEK), diethyl ether',
          'Plasticisers: diethyl phthalate, tributyl phthalate (soften PVC)',
          'Polyesters: polyethylene terephthalate (PET, used in bottles, clothing, polyester fibres)',
          'Fats & oils: triglycerides (esters of glycerol + fatty acids); used in food, cosmetics',
          'Insecticides & pesticides: many are esters',
          'Pharmaceuticals: many drug esters (e.g., aspirin)'
        ]
      }
    },
    {
      id: 'callout-polyesters',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Polyesters',
        text: 'Polyesters are formed by condensation polymerisation of a dicarboxylic acid (or derivative) and a diol. Example: terephthalic acid + ethylene glycol → polyethylene terephthalate (PET). The ester linkage (–COO–) repeats along the polymer backbone. Polyesters are strong, durable, and used in synthetic fibres (polyester textiles), plastic bottles, and engineering plastics. They can be chemically recycled by hydrolysis (breaking ester bonds back to monomers).'
      }
    },
    {
      id: 'p-hydrolysis-esters',
      type: 'paragraph',
      data: {
        text: 'Esters can be hydrolysed (broken down) by acids, bases, or enzymes. Acid hydrolysis (ester + dilute H₂SO₄/HCl, heat) reverses Fischer esterification: R–COO–R′ + H₂O → R–COOH + R′–OH. Base hydrolysis (saponification, ester + NaOH, heat) produces the sodium salt of the acid and the alcohol: R–COO–R′ + NaOH → R–COONa + R′–OH. Saponification is irreversible because the carboxylic acid is deprotonated. Enzymatic hydrolysis occurs in living systems via esterases, allowing selective breakdown of esters in metabolism.'
      }
    },
    {
      id: 'checklist-acyl-esters',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand why acyl chlorides are more reactive than carboxylic acids.', checked: false },
          { text: 'I can write equations for acyl chloride reactions with water, alcohols, and amines.', checked: false },
          { text: 'I know that esterification via acyl chlorides is faster and requires no heat.', checked: false },
          { text: 'I can list key uses of esters (perfumes, solvents, plasticisers, polyesters).', checked: false }
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
        text: 'Understand: Acyl chlorides (RCOCl) are highly reactive because the C=O is made more δ+ by the electron-withdrawing Cl. They react violently with water, alcohols, and amines.\n\nApply: Write equations for ethanoyl chloride reacting with (a) water (b) ethanol (c) ammonia.\n\nAnalyze: Why are acyl chlorides more reactive than carboxylic acids for making esters? Compare the leaving groups.\n\nEvaluate: Aspirin synthesis uses an acyl chloride rather than a carboxylic acid. Justify this choice in terms of yield and reaction conditions.'
      },
      terms: []
    },
    {
      id: 'summary-acyl-esters',
      type: 'summary',
      data: {
        text: 'Acyl chlorides (RCOCl) are highly reactive because Cl⁻ is an excellent leaving group and the C=O is very electrophilic. They undergo rapid nucleophilic acyl substitution at room temperature: with H₂O → carboxylic acid + HCl, with alcohols → esters + HCl (no heat needed), with amines → amides + HCl. Esters have lower boiling points than carboxylic acids, pleasant odours, and are used as perfumes, solvents, plasticisers, and in polyester synthesis. Esters can be hydrolysed by acids, bases (saponification), or enzymes back to the carboxylic acid and alcohol.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-acyl-reactivity',
        prompt: 'Why are acyl chlorides much more reactive than carboxylic acids?'
      },
      {
        id: 'cue-2',
        blockId: 'table-acyl-reactions',
        prompt: 'Write equations for acyl chlorides reacting with water, alcohols, and amines.'
      },
      {
        id: 'cue-3',
        blockId: 'p-esterification-acyl',
        prompt: 'Explain why esterification via acyl chlorides is preferred over Fischer esterification in some cases.'
      },
      {
        id: 'cue-4',
        blockId: 'list-ester-uses',
        prompt: 'Name five industrial uses of esters.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-polyesters',
        prompt: 'How are polyesters formed and what is an example of a common polyester?'
      }
    ],
    summaryText: 'Acyl chlorides (RCOCl) are highly reactive; Cl⁻ is an excellent leaving group. React rapidly with H₂O → R–COOH + HCl; with R′OH → ester + HCl (room temp, no heat); with R′NH₂ → amide + HCl. Esterification via acyl chlorides is faster and irreversible vs Fischer esterification. Esters have lower bp than carboxylic acids, pleasant odours. Uses: perfumes, solvents, plasticisers, polyesters (PET from diacid + diol), fats/oils. Esters hydrolysed by acids (reversible) or bases (saponification, irreversible) or enzymes.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'PET polyester in sustainable packaging',
      detail: 'Polyethylene terephthalate (PET) is synthesised by condensation polymerisation of terephthalic acid and ethylene glycol, both containing ester linkages. PET is widely used in plastic bottles for beverages and water. Its chemical and thermal stability make it suitable for food contact. Recent advances in enzymatic depolymerisation (breaking ester bonds with engineered enzymes) offer sustainable recycling pathways for PET waste, reducing environmental impact.',
      year: '2023',
      source: 'Materials Chemistry & Sustainability',
      tags: ['esters', 'polyesters', 'synthesis', 'polymers', 'sustainability']
    }
  ]
};
