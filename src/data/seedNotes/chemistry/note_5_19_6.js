export const note_chemistry_5_19_6 = {
  blocks: [
    {
      id: 'obj-peptides',
      type: 'objective',
      data: {
        text: 'Explain peptide bond formation between amino acids; describe primary, secondary, tertiary, and quaternary structure of proteins; understand hydrogen bonding, disulfide bonds, and ionic interactions that stabilise proteins'
      }
    },
    {
      id: 'h-peptide-bond',
      type: 'heading',
      data: { text: 'Peptide Bond Formation', level: 2 }
    },
    {
      id: 'p-peptide-1',
      type: 'paragraph',
      data: {
        text: 'A peptide bond is a covalent C−N bond formed between the carboxyl group of one amino acid and the amino group of another. When two amino acids condense (join with loss of water), a peptide bond forms. The carboxyl carbon (C=O) of one amino acid reacts with the amino group (−NH₂) of the next amino acid, forming the −CO−NH− linkage and releasing H₂O.'
      }
    },
    {
      id: 'eq-peptide-formation',
      type: 'equation',
      data: {
        html: 'H₂N−CHR₁−COOH + H₂N−CHR₂−COOH →<br />H₂N−CHR₁−CO−NH−CHR₂−COOH + H₂O<br />(dipeptide: two amino acids linked by peptide bond)<br /><br />The −CO−NH− is the peptide bond. The molecule is now a dipeptide.'
      }
    },
    {
      id: 'p-peptide-2',
      type: 'paragraph',
      data: {
        text: 'In cells, peptide bonds form via a condensation reaction catalysed by ribosomes during protein synthesis. The process requires energy (ATP) and involves nucleophilic attack of the amino group on the carboxyl carbon of an activated acyl intermediate.'
      }
    },
    {
      id: 'callout-peptide-definition',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Peptides vs Proteins',
        text: 'Dipeptide: 2 amino acids linked by 1 peptide bond. Tripeptide: 3 amino acids, 2 peptide bonds. Polypeptide: many amino acids (typically > 10), many peptide bonds. Protein: a large polypeptide (usually > 50 amino acids) with a specific 3D structure. Small peptides and large polypeptides are collectively called peptides until they fold into a functional protein.'
      }
    },
    {
      id: 'h-protein-structure-primary',
      type: 'heading',
      data: { text: 'Protein Structure: Primary, Secondary, Tertiary, Quaternary', level: 2 }
    },
    {
      id: 'p-structure-primary',
      type: 'paragraph',
      data: {
        text: 'Primary structure is the linear sequence of amino acids in the polypeptide chain. It is determined by the genetic code (DNA) and specifies which amino acid goes where. The sequence is written from the N-terminal (free −NH₃⁺ group) to the C-terminal (free −COO⁻ group). Primary structure determines all higher levels of structure and function. Two proteins with different amino acid sequences will have different properties.'
      }
    },
    {
      id: 'p-structure-secondary',
      type: 'paragraph',
      data: {
        text: 'Secondary structure is the local organisation of the polypeptide backbone into regular shapes, stabilised by hydrogen bonding. The two main secondary structures are: (1) α-helix: the backbone coils in a right-handed spiral, with hydrogen bonds between C=O of one residue and N−H of residue 4 positions ahead. (2) β-sheet (or β-pleated sheet): the backbone stretches out in an extended conformation, with side-by-side chains linked by hydrogen bonds perpendicular to the chain direction.'
      }
    },
    {
      id: 'p-structure-tertiary',
      type: 'paragraph',
      data: {
        text: 'Tertiary structure is the three-dimensional (3D) shape of a single polypeptide chain. It results from interactions between side chains (R groups) far apart in the primary sequence but close in 3D space. Key interactions include: (1) Hydrogen bonds between polar side chains (−OH of serine, −NH₂ of asparagine, etc.). (2) Disulfide bonds (covalent S−S bridges) between cysteine residues. (3) Ionic interactions (salt bridges) between oppositely charged side chains (e.g., lysine −NH₃⁺ with aspartate −COO⁻). (4) Hydrophobic interactions between nonpolar side chains buried in the protein interior.'
      }
    },
    {
      id: 'eq-disulfide-bond',
      type: 'equation',
      data: {
        html: 'Disulfide bond formation:<br />−CH₂−SH + HS−CH₂− → −CH₂−S−S−CH₂− + 2H⁺ + 2e⁻<br />(between two cysteine residues, covalent S−S bond)'
      }
    },
    {
      id: 'callout-tertiary-forces',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Tertiary Structure Stabilisation',
        text: 'Hydrophobic effect: nonpolar residues cluster inside protein (away from water). Disulfide bonds: strong covalent bridges (S−S), especially important in extracellular proteins. Ionic interactions: quick-forming but weaker than disulfide bonds. Hydrogen bonds: numerous, weak individually, strong collectively. The 3D shape is essential for function; misfolding causes disease (e.g., prion diseases, Alzheimer\'s).'
      }
    },
    {
      id: 'p-structure-quaternary',
      type: 'paragraph',
      data: {
        text: 'Quaternary structure is the arrangement of multiple polypeptide chains (subunits) in a multi-subunit protein. Not all proteins have quaternary structure; single-chain proteins lack it. Multi-chain proteins like haemoglobin (4 subunits) have quaternary structure. The subunits are held together by the same non-covalent interactions as in tertiary structure: hydrogen bonds, ionic interactions, hydrophobic effects. Disulfide bonds between chains are rare.'
      }
    },
    {
      id: 'h-protein-hydrolysis',
      type: 'heading',
      data: { text: 'Protein Hydrolysis', level: 2 }
    },
    {
      id: 'p-hydrolysis-1',
      type: 'paragraph',
      data: {
        text: 'Proteins can be hydrolysed (broken down) to amino acids by heating with dilute hydrochloric acid or dilute sodium hydroxide solution. The acid or base hydrolyses the peptide bonds (the −CO−NH− linkages), cleaving the polypeptide chain into individual amino acids.'
      }
    },
    {
      id: 'eq-protein-hydrolysis',
      type: 'equation',
      data: {
        html: 'Protein (large polypeptide) + H₂O + HCl (heat, 6M, 110°C, 24 h) →<br />20 amino acids (as hydrochloride salts)'
      }
    },
    {
      id: 'p-hydrolysis-2',
      type: 'paragraph',
      data: {
        text: 'The process is similar to amide hydrolysis: water breaks the peptide bond, and the carboxyl and amino groups of adjacent amino acids are regenerated. In acidic conditions, the amino acids are protonated (forming ammonium ions). In basic conditions, they are deprotonated. Complete hydrolysis requires extended heating (6M HCl, 110°C, 24 hours) to ensure all peptide bonds are broken.'
      }
    },
    {
      id: 'p-hydrolysis-3',
      type: 'paragraph',
      data: {
        text: 'Enzymes (proteases like pepsin, trypsin, chymotrypsin) can catalyse selective protein hydrolysis. These enzymes cleave peptide bonds at specific amino acid sequences, producing peptide fragments of defined size. This is more gentle than acid hydrolysis and useful for studying protein structure and function.'
      }
    },
    {
      id: 'checklist-protein-structure',
      type: 'checklist',
      data: {
        items: [
          { text: 'Peptide bond: −CO−NH− linkage formed by condensation of amino acids', checked: false },
          { text: 'Primary structure: linear sequence of amino acids (N-terminal to C-terminal)', checked: false },
          { text: 'Secondary structure: α-helix or β-sheet, stabilised by backbone hydrogen bonds', checked: false },
          { text: 'Tertiary structure: 3D shape, stabilised by H-bonds, disulfide bonds, ionic interactions', checked: false },
          { text: 'Quaternary structure: arrangement of multiple polypeptide chains (subunits)', checked: false }
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
        text: 'Understand: Peptide bonds link α-amino acids via condensation. Protein structure: primary (sequence), secondary (α-helix, β-sheet), tertiary (3D fold), quaternary (multi-subunit).\n\nApply: Draw the dipeptide formed from glycine and alanine. How many different dipeptides can form?\n\nAnalyze: Why is the tertiary structure essential for enzyme function? What happens during denaturation?\n\nEvaluate: Sickle cell disease results from a single amino acid change. Discuss how primary structure determines all higher levels.'
      },
      terms: []
    },
    {
      id: 'summary-proteins',
      type: 'summary',
      data: {
        text: 'Peptide bonds form when two amino acids condense, with loss of water, joining the carboxyl of one to the amino group of the next (−CO−NH− linkage). Proteins have four levels of structure: Primary (amino acid sequence), Secondary (α-helix/β-sheet from backbone H-bonding), Tertiary (3D fold from side chain interactions: H-bonds, disulfide bonds, ionic interactions), Quaternary (multi-subunit arrangement). Disulfide bonds between cysteines are strong covalent links. Hydrophobic residues bury inside; hydrophilic residues expose to water. Proteins are hydrolysed by heating with dilute HCl or NaOH, breaking all peptide bonds to yield individual amino acids.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-peptide-formation', prompt: 'Write the equation for condensation of two amino acids to form a peptide bond.' },
      { id: 'cue-2', blockId: 'p-structure-secondary', prompt: 'Describe α-helix and β-sheet secondary structures and their hydrogen bonding.' },
      { id: 'cue-3', blockId: 'p-structure-tertiary', prompt: 'List the four types of interactions that stabilise tertiary structure.' },
      { id: 'cue-4', blockId: 'p-hydrolysis-2', prompt: 'Describe protein hydrolysis with acid and explain what happens to the peptide bonds.' }
    ],
    summaryText: 'Peptide bond: H₂N−CHR₁−COOH + H₂N−CHR₂−COOH → H₂N−CHR₁−CO−NH−CHR₂−COOH + H₂O. Primary: amino acid sequence. Secondary: α-helix (H-bonds every 4 residues) or β-sheet (side-by-side H-bonding). Tertiary: 3D fold from H-bonds, disulfide bonds (cysteine), ionic interactions, hydrophobic effect. Quaternary: multiple subunits (if present). Hydrolysis: heat with HCl/NaOH → individual amino acids.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Peptide bonds and protein structure',
      detail: 'Peptide bond formation, condensation reactions, secondary structure (α-helix, β-sheet), tertiary structure stabilisation (H-bonds, disulfide bonds, ionic interactions), quaternary structure, protein folding and misfolding',
      year: '2023',
      source: 'chemguide.co.uk — peptide bonds and protein structure',
      tags: ['peptide', 'protein', 'structure', 'primary', 'secondary', 'tertiary', 'quaternary']
    }
  ]
};
