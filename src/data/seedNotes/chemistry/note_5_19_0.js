export const note_chemistry_5_19_0 = {
  blocks: [
    {
      id: 'obj-amine-amide-names',
      type: 'objective',
      data: {
        text: 'Name amines, amides, and amino acids using IUPAC nomenclature; understand primary, secondary, and tertiary amine classifications; distinguish between alkylamines and arylamines'
      }
    },
    {
      id: 'h-amine-names',
      type: 'heading',
      data: { text: 'Amine Nomenclature', level: 2 }
    },
    {
      id: 'p-amine-1',
      type: 'paragraph',
      data: {
        text: 'Amines are compounds containing a nitrogen atom with a lone pair of electrons. They are classified by the number of carbon groups attached to nitrogen: primary amines (1° or 1°) have one R group bonded to N; secondary amines (2°) have two R groups; tertiary amines (3°) have three R groups.'
      }
    },
    {
      id: 'p-amine-2',
      type: 'paragraph',
      data: {
        text: 'In alkylamines, carbon chains are bonded to nitrogen. IUPAC names are derived from the parent alkane with the suffix −amine added. For primary alkylamines: methanamine (CH₃NH₂), ethanamine (CH₃CH₂NH₂), propanamine (CH₃CH₂CH₂NH₂). For secondary and tertiary alkylamines, the longest carbon chain is the parent, and other groups are prefixed with N−.'
      }
    },
    {
      id: 'eq-amine-examples',
      type: 'equation',
      data: {
        html: 'Primary: CH₃NH₂ = methanamine<br />Primary: CH₃CH₂NH₂ = ethanamine<br />Secondary: CH₃NHCH₂CH₃ = N−methylethanamine<br />Tertiary: (CH₃)₃N = N,N−dimethylmethanamine'
      }
    },
    {
      id: 'callout-amine-class',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Primary, Secondary, Tertiary Amines',
        text: 'Primary (1°): R−NH₂. One C bonded to N, two H on N. Secondary (2°): R₂NH. Two C bonded to N, one H on N. Tertiary (3°): R₃N. Three C bonded to N, no H on N. A fourth R group plus a positive charge gives quaternary ammonium salt (R₄N⁺).'
      }
    },
    {
      id: 'h-arylamine-names',
      type: 'heading',
      data: { text: 'Arylamine Nomenclature', level: 2 }
    },
    {
      id: 'p-arylamine-1',
      type: 'paragraph',
      data: {
        text: 'Arylamines have the amine group directly attached to an aromatic ring. The simplest is phenylamine (aniline), C₆H₅NH₂. In phenylamine, the −NH₂ is the functional group, so the compound is named as a substituted benzene with the amine as the principal functional group.'
      }
    },
    {
      id: 'eq-arylamine-examples',
      type: 'equation',
      data: {
        html: 'C₆H₅NH₂ = phenylamine (or aniline)<br />C₆H₄(NH₂)₂ = 1,4−benzenediamine (para−phenylenediamine)<br />CH₃C₆H₄NH₂ = 4−methylbenzenamine (or p−toluidine)<br />C₆H₅NHCH₃ = N−methylphenylamine'
      }
    },
    {
      id: 'p-arylamine-2',
      type: 'paragraph',
      data: {
        text: 'Arylamines can also be secondary or tertiary if additional groups are bonded to nitrogen. For example, N−methylphenylamine has one methyl group on nitrogen and the phenyl ring. The N− prefix indicates substitution on the nitrogen atom.'
      }
    },
    {
      id: 'h-amide-names',
      type: 'heading',
      data: { text: 'Amide Nomenclature', level: 2 }
    },
    {
      id: 'p-amide-1',
      type: 'paragraph',
      data: {
        text: 'Amides are compounds with a C=O bonded to nitrogen: R−CO−NR₂. The carbonyl carbon is part of the main chain. IUPAC naming uses the suffix −amide (from the carboxylic acid name). Primary amides (−CONH₂) have no groups on N; secondary amides (−CONHR) have one group; tertiary amides (−CONR₂) have two groups.'
      }
    },
    {
      id: 'eq-amide-examples',
      type: 'equation',
      data: {
        html: 'HCONH₂ = methanamide (formamide)<br />CH₃CONH₂ = ethanamide (acetamide)<br />CH₃CONHCH₃ = N−methylethanamide<br />C₆H₅CONH₂ = benzenamide'
      }
    },
    {
      id: 'callout-amide-structure',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Amide vs Amine',
        text: 'Amide: R−C(=O)−NR₂. Nitrogen is bonded to a C=O. Amine: R−NR₂. Nitrogen bonded to alkyl/aryl groups, no C=O attached. Different functional groups, different chemistry.'
      }
    },
    {
      id: 'h-amino-acid-names',
      type: 'heading',
      data: { text: 'Amino Acid Nomenclature', level: 2 }
    },
    {
      id: 'p-amino-acid-1',
      type: 'paragraph',
      data: {
        text: 'Amino acids are compounds with both an amino group (−NH₂) and a carboxylic acid group (−COOH) on the same molecule. The general structure is H₂N−CHR−COOH, where R is the side chain (varies for 20 amino acids). IUPAC naming is based on the carboxylic acid, with the amino group as a substituent.'
      }
    },
    {
      id: 'eq-amino-acid-examples',
      type: 'equation',
      data: {
        html: 'H₂N−CH₂−COOH = 2−aminoethanal (glycine)<br />H₂N−CH(CH₃)−COOH = 2−aminopropanoic acid (alanine)<br />H₂N−CH(CH₂OH)−COOH = 2−amino−3−hydroxypropanoic acid (serine)'
      }
    },
    {
      id: 'p-amino-acid-2',
      type: 'paragraph',
      data: {
        text: 'Amino acids are much more commonly referred to by their common names (glycine, alanine, valine, leucine, etc.). The α-carbon is the carbon bonded to both −NH₂ and −COOH. The R group varies and determines the chemical properties and identity of the amino acid. All 20 standard amino acids are α-amino acids.'
      }
    },
    {
      id: 'checklist-names',
      type: 'checklist',
      data: {
        items: [
          { text: 'Primary amine: RNH₂ (e.g., methanamine, phenylamine)', checked: false },
          { text: 'Secondary amine: R₂NH (e.g., N−methylethanamine)', checked: false },
          { text: 'Tertiary amine: R₃N (e.g., N,N−dimethylmethanamine)', checked: false },
          { text: 'Amide: RCONH₂, RCONHR, RCONR₂ (−amide suffix)', checked: false },
          { text: 'Amino acid: H₂N−CHR−COOH (α-amino acid)', checked: false }
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
        text: 'Understand: Amines are organic bases with a lone pair on nitrogen. Primary (RNH₂), secondary (R₂NH), tertiary (R₃N) classifications depend on the number of alkyl/aryl groups attached.\n\nApply: Name CH₃CH₂NHCH₃ and classify it. Draw its structure.\n\nAnalyze: Why are alkylamines stronger bases than ammonia but arylamines (like phenylamine) are weaker?\n\nEvaluate: Quaternary ammonium salts (R₄N⁺) have no lone pair. Can they act as bases? Discuss.'
      },
      terms: []
    },
    {
      id: 'summary-names',
      type: 'summary',
      data: {
        text: 'Amines are classified by the number of carbon groups on N: primary (RNH₂), secondary (R₂NH), tertiary (R₃N). Alkylamines use the −amine suffix (methanamine, ethanamine). Arylamines have N attached to a benzene ring (phenylamine, C₆H₅NH₂). Amides have a C=O bonded to N and use the −amide suffix (methanamide, ethanamide). Amino acids have both −NH₂ and −COOH and are referred to by common names (glycine, alanine, etc.) or IUPAC names (2−aminoethanoic acid).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-amine-2', prompt: 'How are primary, secondary, and tertiary alkylamines named?' },
      { id: 'cue-2', blockId: 'p-arylamine-1', prompt: 'What is phenylamine, and how does arylamine naming differ from alkylamine naming?' },
      { id: 'cue-3', blockId: 'p-amide-1', prompt: 'Define an amide and explain the −amide naming convention.' },
      { id: 'cue-4', blockId: 'p-amino-acid-1', prompt: 'What is the structure of an amino acid, and name the key functional groups?' }
    ],
    summaryText: 'Alkylamines: primary RNH₂ (methanamine), secondary R₂NH (N−methylethanamine), tertiary R₃N (N,N−dimethylmethanamine). Arylamines: N bonded to benzene ring, e.g. phenylamine (C₆H₅NH₂). Amides: RCONH₂/RCONHR/RCONR₂ with −amide suffix. Amino acids: H₂N−CHR−COOH (α-amino acids), named by common names (glycine, alanine, etc.).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Nomenclature of amines, amides, and amino acids',
      detail: 'IUPAC naming rules for primary, secondary, tertiary amines; arylamine vs alkylamine; amide functional group; amino acid structure and classification',
      year: '2023',
      source: 'chemguide.co.uk — amine, amide, and amino acid nomenclature',
      tags: ['nomenclature', 'amine', 'amide', 'amino acid', 'primary', 'secondary', 'tertiary']
    }
  ]
};
