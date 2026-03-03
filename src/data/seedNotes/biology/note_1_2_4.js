export const note_biology_1_2_4 = {
  blocks: [
    {
      id: 'obj-protein',
      type: 'objective',
      data: {
        text: 'Understand amino acid structure, peptide bond formation, and the four levels of protein structure determining function.'
      }
    },
    {
      id: 'h-amino-acids',
      type: 'heading',
      data: {
        text: 'Amino Acid Structure',
        level: 2
      }
    },
    {
      id: 'p-amino-acid-general',
      type: 'paragraph',
      data: {
        text: 'Amino acids are organic molecules that serve as building blocks for proteins. All amino acids have the same basic structure: a central carbon atom (α-carbon) bonded to four groups: an amino group (−NH₂), a carboxyl group (−COOH), a hydrogen atom (−H), and a variable side chain (R group). The R group differs among the 20 common amino acids, determining the amino acid\'s identity and properties. Some R groups are nonpolar and hydrophobic (leucine, isoleucine, valine, phenylalanine, alanine), making these amino acids hydrophobic and favouring burial in protein interiors. Others are polar and uncharged (serine, threonine, asparagine, glutamine), or polar and charged—negatively (aspartate, glutamate) or positively (lysine, arginine, histidine). Charged amino acids are hydrophilic and often located on protein surfaces. Proline is unique: its R group is a ring attached to the backbone nitrogen, restricting flexibility. Cysteine contains a thiol group (−SH) capable of forming disulphide bonds with other cysteines. Glycine has only a hydrogen R group, making it the smallest and most flexible.'
      }
    },
    {
      id: 'table-amino-acids',
      type: 'comparisonTable',
      data: {
        headers: ['Category', 'Examples', 'R Group Property', 'Location in Protein'],
        rows: [
          ['Nonpolar (hydrophobic)', 'Leucine, isoleucine, valine, phenylalanine, alanine, methionine', 'Hydrocarbon chains', 'Protein interior (hydrophobic core)'],
          ['Polar uncharged', 'Serine, threonine, asparagine, glutamine', 'Hydroxyl or amide groups', 'Surface, flexible regions'],
          ['Charged negative', 'Aspartate (Asp), glutamate (Glu)', 'Carboxyl group (−COO⁻)', 'Surface, salt bridges'],
          ['Charged positive', 'Lysine (Lys), arginine (Arg), histidine (His)', 'Amino or guanidinium groups', 'Surface, salt bridges'],
          ['Special', 'Cysteine (disulphide bonds), proline (rigidity)', 'Thiol (−SH) or ring', 'Variable']
        ],
        caption: 'Amino acid categories and locations in proteins'
      }
    },
    {
      id: 'h-peptide-bond',
      type: 'heading',
      data: {
        text: 'Peptide Bond Formation',
        level: 2
      }
    },
    {
      id: 'p-peptide-bond',
      type: 'paragraph',
      data: {
        text: 'A peptide bond is a covalent bond formed between the carboxyl group (−COOH) of one amino acid and the amino group (−NH₂) of an adjacent amino acid via a condensation reaction (release of water). The resulting bond is −CO−NH− (carbonyl−nitrogen). Chains of amino acids linked by peptide bonds are called polypeptides. The chain has directionality: the N-terminus (free amino group) and C-terminus (free carboxyl group). By convention, sequences are written from N-terminus to C-terminus. A dipeptide contains two amino acids (one peptide bond); a tripeptide has three; and so on. Proteins are large polypeptides, typically 100–1000 amino acids, though some are longer or shorter. The order of amino acids in the polypeptide chain is the primary structure, determined entirely by genetic information (DNA sequence). Breaking a peptide bond requires hydrolysis (addition of water), catalysed by proteases (protease enzymes). Peptide bonds are strong and stable; proteins can persist for years or longer.'
      }
    },
    {
      id: 'eq-peptide-bond',
      type: 'equation',
      data: {
        html: 'Amino acid 1 (−COOH) + Amino acid 2 (−NH₂) → Dipeptide (−CO−NH−) + H₂O<br/>(Condensation reaction; reversible by hydrolysis)'
      }
    },
    {
      id: 'h-primary-structure',
      type: 'heading',
      data: {
        text: 'Primary Structure',
        level: 2
      }
    },
    {
      id: 'p-primary-structure',
      type: 'paragraph',
      data: {
        text: 'Primary structure is the linear sequence of amino acids in a polypeptide chain, linked by peptide bonds. It is determined by the DNA template through transcription and translation. Each protein has a unique primary structure; even a single amino acid substitution can alter function dramatically (e.g. sickle cell anaemia: glutamic acid → valine at position 6 of β-globin). The primary structure is the foundation for all higher levels of structure. Although primary structure appears linear and simple, it dictates the spatial arrangement of atoms and thus the overall protein shape and function. Primary structure is determined experimentally by protein sequencing (original Edman degradation; now DNA sequencing of the gene is faster). The Human Genome Project identified ~20,000 genes, each encoding a protein with unique primary structure.'
      }
    },
    {
      id: 'h-secondary-structure',
      type: 'heading',
      data: {
        text: 'Secondary Structure: α-Helix and β-Pleated Sheet',
        level: 2
      }
    },
    {
      id: 'p-secondary-structure',
      type: 'paragraph',
      data: {
        text: 'Secondary structure refers to regular, repeating structural patterns in localised regions of polypeptide chains, stabilised by hydrogen bonds between the backbone carbonyl oxygen (−C=O) and amide hydrogen (−N−H) atoms. Two major secondary structures exist. (1) α-Helix: the polypeptide backbone spirals in a right-handed helix, with 3.6 amino acids per turn. Hydrogen bonds form between the carbonyl of amino acid n and the amide of amino acid n+4. This regularly spaced bonding creates a spring-like structure. The side chains (R groups) project outward. (2) β-Pleated Sheet: the polypeptide backbone is extended, with adjacent strands (from same or different parts of the protein) arranged side-by-side. Hydrogen bonds form between the carbonyl oxygen of one strand and the amide hydrogen of the adjacent strand. The structure looks like a corrugated sheet, with side chains alternating above and below. β-Sheets can be parallel (N→C direction same) or antiparallel (opposite directions). Many proteins contain both α-helices and β-sheets in different regions, along with irregular loops and turns. Secondary structure is predicted from primary sequence and determined experimentally by circular dichroism spectroscopy or X-ray crystallography.'
      }
    },
    {
      id: 'h-tertiary-structure',
      type: 'heading',
      data: {
        text: 'Tertiary Structure',
        level: 2
      }
    },
    {
      id: 'p-tertiary-structure',
      type: 'paragraph',
      data: {
        text: 'Tertiary structure is the overall 3D shape of a polypeptide chain, determined by interactions between side chains (R groups). These interactions include: (1) Disulphide bonds (−S−S−): covalent bonds between cysteine residues, strongest interactions, often stabilising proteins secreted outside cells (extracellular proteins). (2) Ionic bonds (salt bridges): electrostatic attractions between positively charged (Lys, Arg, His) and negatively charged (Asp, Glu) amino acids. (3) Hydrogen bonds: between polar side chains (e.g. Ser −OH and Asp −COOH). (4) Hydrophobic interactions: nonpolar amino acids cluster in the protein interior, away from water; hydrophilic amino acids prefer the surface. These are collectively weak interactions, but numerous and collectively important. Hydrogen bonds and ionic bonds are readily broken by heat, pH change, or detergents, causing protein denaturation (loss of shape). Disulphide bonds are covalent and resist denaturation. Tertiary structure is what gives proteins their unique shape and creates active sites (for enzymes), binding pockets (for receptors), and specific functions. X-ray crystallography and cryo-electron microscopy determine tertiary structure at atomic resolution.'
      }
    },
    {
      id: 'h-quaternary-structure',
      type: 'heading',
      data: {
        text: 'Quaternary Structure',
        level: 2
      }
    },
    {
      id: 'p-quaternary-structure',
      type: 'paragraph',
      data: {
        text: 'Quaternary structure is the arrangement of multiple polypeptide subunits in proteins that contain more than one subunit. Examples: haemoglobin (four subunits: 2α, 2β), antibodies (four subunits: 2 light, 2 heavy), collagen (three polypeptide chains in triple helix). Subunits are held together by the same non-covalent interactions that stabilise tertiary structure: hydrogen bonds, ionic bonds, and hydrophobic interactions. Quaternary structure enables cooperativity (as seen in haemoglobin) and functional specialisation (different subunits perform different functions). Not all proteins have quaternary structure; single-chain proteins (monomeric) only have primary, secondary, and tertiary structure. Quaternary structure is determined by X-ray crystallography, cryo-EM, or other physical methods.'
      }
    },
    {
      id: 'table-protein-structure',
      type: 'comparisonTable',
      data: {
        headers: ['Level', 'Definition', 'Held by', 'Determined by', 'Example', 'Effects of Denaturation'],
        rows: [
          ['Primary', 'Sequence of amino acids', 'Peptide bonds (covalent)', 'DNA, ribosome', 'Insulin (51 aa)', 'Not reversible (bonds must break)'],
          ['Secondary', 'α-helix, β-sheet regions', 'Hydrogen bonds (backbone)', 'Primary sequence, physics', 'Collagen triple helix', 'Reversible (H-bonds break)'],
          ['Tertiary', '3D shape of polypeptide', 'Disulphide, H-bonds, ionic, hydrophobic', 'Primary sequence, environment', 'Lysozyme enzyme', 'Often reversible (except S−S bonds)'],
          ['Quaternary', 'Multi-subunit arrangement', 'H-bonds, ionic, hydrophobic', 'Primary sequences, assembly', 'Haemoglobin (4 subunits)', 'Subunits may dissociate (reversible)']
        ],
        caption: 'Four levels of protein structure'
      }
    },
    {
      id: 'callout-worked-sickle-cell',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Sickle Cell: Primary Structure Mutation',
        text: 'Normal β-globin: amino acid 6 = Glu (glutamic acid, negative charge, hydrophilic). Sickle cell β-globin: position 6 = Val (valine, nonpolar, hydrophobic). This single change (one nucleotide mutation in DNA) causes valine to cluster and polymerise, distorting the haemoglobin structure into a sickle shape. Result: misshapen RBCs, blockages, pain, organ damage. One amino acid = life-threatening disease.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does the tertiary structure of a globular protein determine its function? Explain how the specific 3D arrangement of amino acid R groups creates an active site with precise shape, charge distribution, and hydrophobicity — essential for substrate binding.',
        apply: 'Haemoglobin has a quaternary structure of four polypeptide subunits. If a point mutation changes one glutamate (charged) to valine (hydrophobic) in the β-globin chain, predict the structural and functional consequences. (This is the sickle cell mutation.)',
        analyze: 'Compare fibrous proteins (collagen, keratin) and globular proteins (haemoglobin, enzymes) in terms of structure, solubility, and function. Explain why fibrous proteins are insoluble and structural while globular proteins are soluble and functional.',
        evaluate: 'Evaluate the statement: \'Primary structure determines all higher levels of protein structure.\' Consider protein folding (Anfinsen\'s experiment with ribonuclease), the role of chaperone proteins, and cases where the same sequence folds differently (prions).',
      },
      terms: [],
    },
    {
      id: 'checklist-protein-structure',
      type: 'checklist',
      data: {
        items: [
          { text: 'Amino acids: −NH₂, −COOH, −H, R group on central carbon', checked: false },
          { text: 'Peptide bonds form via condensation between −COOH and −NH₂', checked: false },
          { text: 'Primary structure: linear sequence of amino acids (DNA → ribosome)', checked: false },
          { text: 'Secondary structure: α-helix and β-pleated sheet (H-bonds between backbone)', checked: false },
          { text: 'Tertiary structure: 3D shape (disulphide, ionic, H-bonds, hydrophobic)', checked: false }
        ]
      }
    },
    {
      id: 'summary-protein-structure',
      type: 'summary',
      data: {
        text: 'Amino acids have −NH₂, −COOH, and variable R groups. Peptide bonds link them (condensation). Primary structure is the amino acid sequence (determined by DNA). Secondary structure (α-helix, β-sheet) is stabilised by hydrogen bonds between backbone atoms. Tertiary structure is the 3D fold stabilised by disulphide bonds, ionic bonds, hydrogen bonds, and hydrophobic interactions. Quaternary structure is multi-subunit arrangement. Structure determines function: mutations in primary sequence (like sickle cell) can cause disease.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-amino-acid-general',
        prompt: 'Describe amino acid structure. How do R groups differ and where do hydrophobic amino acids locate?'
      },
      {
        id: 'cue-2',
        blockId: 'p-peptide-bond',
        prompt: 'How does a peptide bond form? What is the N-terminus and C-terminus?'
      },
      {
        id: 'cue-3',
        blockId: 'p-secondary-structure',
        prompt: 'Describe α-helix and β-pleated sheet. How are they stabilised?'
      },
      {
        id: 'cue-4',
        blockId: 'p-tertiary-structure',
        prompt: 'List four types of interactions that stabilise tertiary structure.'
      },
      {
        id: 'cue-5',
        blockId: 'p-quaternary-structure',
        prompt: 'What is quaternary structure? Give an example of a multi-subunit protein.'
      }
    ],
    summaryText: 'Amino acids: central C with −NH₂, −COOH, −H, R group. R groups vary: nonpolar (hydrophobic, interior), polar, charged. Peptide bonds: −COOH + −NH₂ → −CO−NH− + H₂O. Primary: amino acid sequence. Secondary: α-helix (H-bonds backbone, 3.6 aa/turn), β-sheet (H-bonds between strands). Tertiary: 3D shape via disulphide, ionic, H-bonds, hydrophobic. Quaternary: multi-subunit (haemoglobin 4 units). Mutation in primary → disease (sickle cell).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Protein Structure: Four Levels',
      detail: 'Amino acid structure, peptide bonds, and primary through quaternary protein organization.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['protein', 'amino-acids', 'peptide-bonds', 'primary-structure', 'secondary-structure', 'tertiary-structure', 'quaternary-structure']
    }
  ]
};
