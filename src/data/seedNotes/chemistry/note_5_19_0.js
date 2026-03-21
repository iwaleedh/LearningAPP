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
    { type: 'svg', id: 'svg-amine-classification', data: { caption: 'Classification of Amines (1°, 2°, 3°) and Quaternary Salts', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 160" width="100%" height="auto"><style>text{font-family:sans-serif;fill:#1e293b;font-size:14px;font-weight:bold;text-anchor:middle;} .bond{stroke:#1e293b;stroke-width:2;} .r-group{fill:#3b82f6;} .h-group{fill:#64748b;} .lp{fill:#f59e0b;} .lbl{font-size:12px;fill:#64748b;font-weight:normal;}</style><g transform="translate(87.5, 60)"><text x="0" y="0" font-size="20px">N</text><text x="-35" y="0" class="r-group">R</text><path class="bond" d="M -15 -5 L -8 -5" /><text x="35" y="0" class="h-group">H</text><path class="bond" d="M 10 -5 L 20 -5" /><text x="0" y="35" class="h-group">H</text><path class="bond" d="M 0 5 L 0 15" /><circle cx="-5" cy="-20" r="2.5" class="lp" /><circle cx="5" cy="-20" r="2.5" class="lp" /><text x="0" y="70">Primary (1°)</text><text x="0" y="85" class="lbl">1 alkyl group</text></g><g transform="translate(262.5, 60)"><text x="0" y="0" font-size="20px">N</text><text x="-35" y="0" class="r-group">R</text><path class="bond" d="M -15 -5 L -8 -5" /><text x="35" y="0" class="r-group">R</text><path class="bond" d="M 10 -5 L 20 -5" /><text x="0" y="35" class="h-group">H</text><path class="bond" d="M 0 5 L 0 15" /><circle cx="-5" cy="-20" r="2.5" class="lp" /><circle cx="5" cy="-20" r="2.5" class="lp" /><text x="0" y="70">Secondary (2°)</text><text x="0" y="85" class="lbl">2 alkyl groups</text></g><g transform="translate(437.5, 60)"><text x="0" y="0" font-size="20px">N</text><text x="-35" y="0" class="r-group">R</text><path class="bond" d="M -15 -5 L -8 -5" /><text x="35" y="0" class="r-group">R</text><path class="bond" d="M 10 -5 L 20 -5" /><text x="0" y="35" class="r-group">R</text><path class="bond" d="M 0 5 L 0 15" /><circle cx="-5" cy="-20" r="2.5" class="lp" /><circle cx="5" cy="-20" r="2.5" class="lp" /><text x="0" y="70">Tertiary (3°)</text><text x="0" y="85" class="lbl">3 alkyl groups</text></g><g transform="translate(612.5, 60)"><text x="0" y="0" font-size="20px">N</text><text x="-35" y="0" class="r-group">R</text><path class="bond" d="M -15 -5 L -8 -5" /><text x="35" y="0" class="r-group">R</text><path class="bond" d="M 10 -5 L 20 -5" /><text x="0" y="35" class="r-group">R</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="-35" class="r-group">R</text><path class="bond" d="M 0 -15 L 0 -22" /><text x="25" y="-20" fill="#ef4444">+</text><text x="0" y="70">Quaternary (4°)</text><text x="0" y="85" class="lbl">4 alkyl groups (Salt)</text></g></svg>' } },
    {
      id: 'h-amine-physical-props',
      type: 'heading',
      data: { text: 'Physical Properties of Amines', level: 2 }
    },
    {
      id: 'callout-amine-bp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Boiling Points of Amines',
        text: 'Primary > Secondary > Tertiary (for isomers). Primary and secondary amines can form hydrogen bonds with each other (they have N−H bonds). Tertiary amines lack N−H bonds, so they cannot form intermolecular hydrogen bonds, resulting in much lower boiling points.'
      }
    },
    {
      id: 'list-amine-physical-details',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Boiling points increase with chain length due to greater London dispersion forces' },
          { text: 'Primary amines have slightly higher boiling points than secondary isomers because the terminal N creates a stronger permanent dipole' },
          { text: 'Solubility: All small amines (1°, 2°, 3°) are very soluble in water because the nitrogen lone pair can form hydrogen bonds with water molecules' },
          { text: 'Solubility decreases as hydrocarbon chain length increases (non-polar chains disrupt water\'s hydrogen bonds)' },
          { text: 'Smell: Small amines smell like ammonia; larger amines smell fishy or of decay (e.g., trimethylamine smells like decaying flesh)' }
        ]
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
      id: 'h-amide-physical-props',
      type: 'heading',
      data: { text: 'Physical Properties of Amides', level: 2 }
    },
    {
      id: 'list-amide-state',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'All simple aliphatic amides are solids at room temperature EXCEPT methanamide (HCONH₂), which is a liquid' },
          { text: 'Methanamide (1C), ethanamide (2C), propanamide (3C), butanamide (4C) — all share the −CONH₂ functional group' },
          { text: 'Lower aliphatic amides (short chain) are soluble in water — due to hydrogen bonding between the polar −CONH₂ group and water molecules' },
          { text: 'Both O (on C=O) and N (on NH₂) are electronegative → both form hydrogen bonds with water' },
          { text: 'As the hydrocarbon chain length increases, London dispersion forces become more dominant, reducing water solubility' }
        ]
      }
    },
    {
      id: 'callout-amide-hbond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Amide Hydrogen Bonding',
        text: 'The −CONH₂ group is highly polar. Strong intermolecular hydrogen bonds give amides high melting points for their size (most are solids EXCEPT methanamide). They can also hydrogen bond with water (acting as both donor and acceptor), making short-chain amides very water-soluble.'
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
        text: 'Amino acids are compounds with both an amino group (−NH₂) and a carboxylic acid group (−COOH) on the same molecule, separated by the α-carbon. The general formula is H₂N−CHR−COOH, where R is the side chain that varies among the 20 standard amino acids. They are also referred to as α-amino acids (or 2-amino acids) because both groups are on the same (α) carbon.'
      }
    },
    {
      id: 'list-amino-acid-features',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '20 amino acids found in humans — some made naturally, others obtained from diet' },
          { text: 'All share the same backbone structure: H₂N−CHR−COOH (the α-carbon holds both groups)' },
          { text: 'The R group (side chain) is what differentiates one amino acid from another' },
          { text: 'Glycine is the simplest: R = H (the only amino acid where R is just a hydrogen atom)' },
          { text: 'You are NOT expected to memorise all 20 structures, but you must identify an amino acid when shown one (look for both −NH₂ and −COOH on the same structure)' }
        ]
      }
    },
    {
      id: 'p-amino-acid-iupac',
      type: 'paragraph',
      data: {
        text: 'Amino acids are usually called by their common names (glycine, alanine, leucine, glutamic acid, lysine, etc.). IUPAC names treat them as amine derivatives of carboxylic acids — use the prefix "amino−" followed by the position number to indicate where the amino group is attached on the parent carboxylic acid chain.'
      }
    },
    {
      id: 'eq-amino-acid-examples',
      type: 'equation',
      data: {
        html: 'H₂N−CH₂−COOH = 2-aminoethanoic acid (glycine)<br />H₂N−CH(CH₃)−COOH = 2-aminopropanoic acid (alanine)<br />H₂N−CH₂CH₂−COOH = 3-aminopropanoic acid<br />H₂N−CH(CH₂OH)−COOH = 2-amino-3-hydroxypropanoic acid (serine)<br /><br />The base chain = the carboxylic acid; the amino group is a substituent with its position number.'
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
          { text: 'Amine properties: 1°/2° form H-bonds (higher bp); 3° cannot. Small amines are water-soluble', checked: false },
          { text: 'Amide: RCONH₂ — all solids except methanamide (liquid); soluble in water via H-bonding', checked: false },
          { text: 'Amide solubility ↓ as chain length ↑ (London forces increase)', checked: false },
          { text: 'Amino acid: H₂N−CHR−COOH (α-amino acid); named as "X-aminocarboxylic acid"', checked: false },
          { text: 'Glycine: R = H — simplest amino acid; named by common names in practice', checked: false }
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
        text: 'Amines are classified by the number of carbon groups on N: primary (RNH₂), secondary (R₂NH), tertiary (R₃N). Alkylamines use the −amine suffix. Arylamines have N on a benzene ring (phenylamine). Amides (RCONH₂) are all solids except methanamide (liquid). Lower amides are water-soluble due to H-bonding through their electronegative O and N atoms; solubility decreases as chain length increases. Amino acids (H₂N−CHR−COOH) are α-amino acids; IUPAC names use the "amino-" prefix (e.g., 2-aminoethanoic acid = glycine); 20 standard amino acids exist, differentiated by their R group.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-amine-2', prompt: 'How are primary, secondary, and tertiary alkylamines named?' },
      { id: 'cue-amine-bp', blockId: 'callout-amine-bp', prompt: 'Why do primary amines have higher boiling points than their tertiary isomers?' },
      { id: 'cue-2', blockId: 'p-arylamine-1', prompt: 'What is phenylamine, and how does arylamine naming differ from alkylamine naming?' },
      { id: 'cue-3', blockId: 'list-amide-state', prompt: 'What are the key physical properties of amides? Which is the exception to the "all solids" rule?' },
      { id: 'cue-4', blockId: 'p-amino-acid-iupac', prompt: 'How are amino acids named using IUPAC rules? Give two examples.' }
    ],
    summaryText: 'Alkylamines: 1° RNH₂, 2° R₂NH, 3° R₃N (−amine). Bp: 1° > 2° > 3° (3° cannot H-bond). Small amines water-soluble. Arylamines: N on benzene. Amides: RCONH₂ — all solids EXCEPT methanamide (liquid). Amino acids: H₂N−CHR−COOH; IUPAC = "X-amino[carboxylic acid]".',
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
