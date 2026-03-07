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
      id: 'h-dipeptide-order',
      type: 'heading',
      data: { text: 'Dipeptides: Order Matters', level: 2 }
    },
    {
      id: 'list-dipeptide-order',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'When two DIFFERENT amino acids (e.g., alanine and glycine) combine, TWO different dipeptides can form' },
          { text: 'Alanine–Glycine (Ala-Gly): the carboxyl end of alanine bonds to the amino end of glycine' },
          { text: 'Glycine–Alanine (Gly-Ala): the carboxyl end of glycine bonds to the amino end of alanine' },
          { text: 'These two products are DIFFERENT molecules — sequences are read from N-terminal (free −NH₂) to C-terminal (free −COOH)' },
          { text: 'Both are formed by a condensation reaction with loss of water (H₂O)' }
        ]
      }
    },
    {
      id: 'eq-dipeptide-both',
      type: 'equation',
      data: {
        html: 'Possible dipeptides from Ala + Gly:<br />Ala−Gly: H₂N−CH(CH₃)−CO−NH−CH₂−COOH + H₂O<br />Gly−Ala: H₂N−CH₂−CO−NH−CH(CH₃)−COOH + H₂O<br /><br />Both are formed by condensation (−CO−NH− linkage with loss of H₂O).'
      }
    },
    {
      id: 'h-tripeptides',
      type: 'heading',
      data: { text: 'Tripeptides: 6 Possible Combinations', level: 2 }
    },
    {
      id: 'list-tripeptides',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '3 different amino acids (e.g., Ala, Gly, Glu) can be arranged in 3! = 6 different sequences' },
          { text: 'Three-letter codes are used to summarise (e.g., Ala, Gly, Glu are their codes)' },
          { text: 'You are NOT expected to memorise three-letter codes — they would be provided in the exam' },
          { text: 'The 6 tripeptide sequences: Ala-Gly-Glu / Ala-Glu-Gly / Gly-Ala-Glu / Gly-Glu-Ala / Glu-Ala-Gly / Glu-Gly-Ala' },
          { text: 'Each arrangement gives a different molecule with different properties' }
        ]
      }
    },
    {
      id: 'h-polypeptide-molar-mass',
      type: 'heading',
      data: { text: 'Polypeptides and Molar Masses', level: 2 }
    },
    {
      id: 'p-polypeptide-1',
      type: 'paragraph',
      data: {
        text: 'Polypeptides are long-chain condensation polymers of many amino acids. Long chain polypeptides that have adopted specific 3D shapes and functions are classified as proteins. Proteins have extremely large molar masses due to the large number of amino acids they contain.'
      }
    },
    {
      id: 'p-polypeptide-2',
      type: 'paragraph',
      data: {
        text: 'It is important to know both which amino acids are present AND the order (sequence) in which they appear — even a single amino acid substitution can dramatically alter protein function (e.g., sickle cell disease results from one amino acid change in haemoglobin).'
      }
    },
    {
      id: 'table-molar-masses',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of protein molar masses',
        headers: ['Protein', 'Approx. amino acids', 'Approx. Mᵣ (g mol⁻¹)'],
        rows: [
          ['Insulin', '51', '5,700'],
          ['Haemoglobin', '574', '66,000'],
          ['Ferritin', '~4,500', '480,000']
        ]
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
        text: 'Proteins can be hydrolysed (broken down) to individual amino acids by prolonged heating with concentrated hydrochloric acid. The acid hydrolyses all peptide bonds (the −CO−NH− linkages), cleaving the polypeptide chain into its constituent amino acids. Acidic conditions protonate all the amino groups (−NH₂ → −NH₃⁺).'
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
      id: 'h-chromatography',
      type: 'heading',
      data: { text: 'Identifying Amino Acids by Paper Chromatography', level: 2 }
    },
    {
      id: 'list-chromatography-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Hydrolyse the protein (concentrated HCl, prolonged heating) → gives a mixture of individual amino acids' },
          { text: 'Spot the hydrolysate onto chromatography paper at the baseline' },
          { text: 'Run the chromatogram: allow the solvent front to move up the paper' },
          { text: 'Dry the paper — amino acids are COLOURLESS and cannot be seen at this stage' },
          { text: 'Spray with ninhydrin solution — a developing agent that reacts with amino acids to produce a purple/lilac colour' },
          { text: 'Identify each spot by calculating its RF value' },
          { text: 'Compare RF values to known control samples run on the same chromatogram to identify each amino acid' }
        ]
      }
    },
    {
      id: 'eq-rf-value',
      type: 'equation',
      data: {
        html: 'R<sub>F</sub> = <span class="nb-frac"><span class="nb-num">distance moved by spot</span><span class="nb-den">distance moved by solvent front</span></span><br /><br />Important: R<sub>F</sub> value must ALWAYS be less than 1 (spot cannot travel further than solvent front). If R<sub>F</sub> > 1, a calculation error has been made.'
      }
    },
    {
      id: 'callout-ninhydrin',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Ninhydrin: Why It\'s Needed',
        text: 'Amino acids are colourless compounds — they cannot be seen on chromatography paper under normal light. Ninhydrin is sprayed as a developing agent; it reacts with amino acids to produce a distinctive purple/lilac colour. Each spot can then be measured for its RF value and compared against control samples to identify which amino acid is present.'
      }
    },
    {
      id: 'callout-chrom-note',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Scope for Chromatography',
        text: 'At A2 level you need to know: the overall method (hydrolyse → spot → run → ninhydrin → RF calculation), and be able to identify amino acids using RF values and control samples. You do NOT need to know the detailed chemistry of how ninhydrin works, or specific two-dimensional chromatography techniques — these are more advanced techniques.'
      }
    },
    {
      id: 'checklist-protein-structure',
      type: 'checklist',
      data: {
        items: [
          { text: 'Peptide bond: −CO−NH− formed by condensation of amino acids (loss of H₂O)', checked: false },
          { text: '2 different amino acids → 2 possible dipeptides (sequence order matters)', checked: false },
          { text: '3 different amino acids → 6 possible tripeptides (3! = 6 arrangements)', checked: false },
          { text: 'Primary: sequence (N→C-terminal); Secondary: α-helix/β-sheet via backbone H-bonds', checked: false },
          { text: 'Tertiary: 3D shape from H-bonds, disulfide bonds (cysteine S−S), ionic interactions', checked: false },
          { text: 'Quaternary: multiple polypeptide subunits (e.g., haemoglobin = 4 subunits)', checked: false },
          { text: 'Hydrolysis: prolonged heating with CONCENTRATED HCl → breaks peptide bonds → amino acids', checked: false },
          { text: 'Chromatography: ninhydrin → purple spots → RF = spot dist/solvent dist (< 1) → compare to controls', checked: false }
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
        text: 'Peptide bonds form by condensation of amino acids (−CO−NH− + H₂O). Two different amino acids give 2 possible dipeptides; three different amino acids give 6 possible tripeptides. Polypeptides are condensation polymers; proteins have large Mᵣ values (insulin: 5700, haemoglobin: 66000, ferritin: 480000). Protein structure: Primary (amino acid sequence), Secondary (α-helix/β-sheet via H-bonds), Tertiary (3D fold: H-bonds, disulfide bonds S−S, ionic interactions, hydrophobic), Quaternary (multi-subunit). Proteins are hydrolysed by prolonged heating with concentrated HCl, breaking all peptide bonds to yield individual amino acids. Amino acids identified by paper chromatography: spots developed with ninhydrin (purple colour); RF = distance by spot ÷ distance by solvent front (always < 1); compare to known control samples.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-dipeptide-both', prompt: 'How many dipeptides can form from two different amino acids? Why?' },
      { id: 'cue-2', blockId: 'list-tripeptides', prompt: 'How many tripeptides can form from 3 different amino acids? What codes are used to summarise them?' },
      { id: 'cue-3', blockId: 'p-structure-tertiary', prompt: 'List the four types of interactions that stabilise tertiary structure of a protein.' },
      { id: 'cue-4', blockId: 'p-hydrolysis-1', prompt: 'How are proteins hydrolysed in the lab? What conditions are required?' },
      { id: 'cue-5', blockId: 'eq-rf-value', prompt: 'How do you calculate RF value in chromatography? What must it always be less than?' }
    ],
    summaryText: 'Peptide bond: −CO−NH− (condensation, loss H₂O). 2 amino acids → 2 dipeptides; 3 amino acids → 6 tripeptides. Primary: sequence. Secondary: α-helix/β-sheet. Tertiary: H-bonds, S−S bonds, ionic, hydrophobic. Quaternary: multi-subunit. Hydrolysis: concentrated HCl, prolonged heat → amino acids. Chromatography: spot + ninhydrin → purple; RF = spot/solvent front (< 1).',
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
