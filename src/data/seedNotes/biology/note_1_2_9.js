export const note_biology_1_2_9 = {
  blocks: [
    {
      id: 'obj-mutations',
      type: 'objective',
      data: {
        text: 'Understand mutation types, effects on proteins, and examples of genetic diseases caused by mutations.'
      }
    },
    {
      id: 'h-point-mutations',
      type: 'heading',
      data: {
        text: 'Point Mutations: Substitutions',
        level: 2
      }
    },
    {
      id: 'p-substitution',
      type: 'paragraph',
      data: {
        text: 'A point mutation is a change in a single nucleotide. Substitutions replace one base with another. Three types exist based on the codon change: (1) Silent (synonymous) mutation: the new codon still codes for the same amino acid. Example: serine codons are UCU, UCC, UCA, UCG. A mutation from UCU → UCC still codes for serine—no change in protein. Silent mutations are tolerated because they do not alter the protein. (2) Missense mutation: the new codon codes for a different amino acid. Example: sickle cell anaemia—codon 6 of β-globin changes from GAG (glutamic acid) to GTG (valine). The change is GAG (mRNA GAG = CAG in DNA) → GUG (mRNA) = GTG (DNA). Glutamic acid is hydrophilic; valine is hydrophobic. This single change causes valine residues to interact hydrophobically, polymerising into fibres that distort red blood cells into a sickle shape. (3) Nonsense mutation: the new codon is a stop codon. Example: codon 39 of β-globin is CAG (glutamine); a mutation to TAA (stop) terminates translation prematurely, producing a truncated, non-functional β-globin (β-thalassaemia major). Truncated proteins are usually degraded and non-functional.'
      }
    },
    {
      id: 'h-frameshift',
      type: 'heading',
      data: {
        text: 'Frameshift Mutations: Insertion and Deletion',
        level: 2
      }
    },
    {
      id: 'p-frameshift',
      type: 'paragraph',
      data: {
        text: 'Frameshift mutations result from insertion or deletion of nucleotides not in multiples of 3. The genetic code is read in triplets (codons); if you insert or delete 1 or 2 nucleotides, the reading frame (which triplet is read as a codon) shifts. All downstream codons are misread, producing an entirely different sequence of amino acids downstream of the mutation. Example: normal sequence 5\'-AUG CAU AAC GUC GAU-3\' codes for Met−His−Asn−Val−Asp. If 1 nucleotide (U) is inserted: 5\'-AUG CAU UAA CGU CGA U-3\' → codons become AUG (Met), CAU (His), UAA (stop). Translation terminates prematurely. The sequence is shifted; all downstream codons are wrong. Frameshift mutations usually produce severe effects: either truncated proteins (if a premature stop codon appears) or completely altered amino acid sequences. Insertions or deletions of 3 or multiples of 3 do not shift the frame, though they add or remove amino acids. These are less severe than frameshift mutations unless the deleted residues are critical.'
      }
    },
    {
      id: 'h-chromosome-mutations',
      type: 'heading',
      data: {
        text: 'Chromosome Mutations',
        level: 2
      }
    },
    {
      id: 'p-chromosome-mutations',
      type: 'paragraph',
      data: {
        text: 'Chromosome mutations involve changes in chromosome structure or number. Structural mutations: (1) Deletion: a segment of chromosome is lost. This removes genes; if the deleted genes are essential, the deletion is lethal. (2) Duplication: a segment is copied, resulting in extra genes. (3) Inversion: a segment is reversed; genes remain but in opposite order. (4) Translocation: a segment moves to another chromosome. Structural mutations can be balanced (no net loss of genetic material, like inversion or reciprocal translocation) or unbalanced (net loss, like deletion). Unbalanced mutations usually cause disease. Numerical mutations: (1) Aneuploidy: abnormal chromosome numbers (not multiples of haploid number). Trisomy (3 copies, like trisomy 21 or Down syndrome) or monosomy (1 copy, like monosomy X or Turner syndrome) are common. (2) Euploidy: multiples of the haploid number (triploidy 3n, tetraploidy 4n). Euploidy is common in plants but rare (usually lethal) in animals.'
      }
    },
    {
      id: 'h-sickle-cell',
      type: 'heading',
      data: {
        text: 'Sickle Cell Anaemia: A Molecular Disease',
        level: 2
      }
    },
    {
      id: 'p-sickle-cell-genetics',
      type: 'paragraph',
      data: {
        text: 'Sickle cell anaemia is caused by a single missense mutation in the β-globin gene (chromosome 11). The mutation changes codon 6 from GAG (glutamic acid, negative charge, hydrophilic) to GTG (valine, nonpolar, hydrophobic). Glutamic acid is normally on the surface of haemoglobin; valine is usually buried. The valine residue causes abnormal hydrophobic interactions: under low oxygen conditions (venous blood, tissues), haemoglobin molecules polymerise via valine−valine interactions, forming long fibres. These fibres distort the red blood cell from its normal biconcave disc shape into a rigid, sickle shape. Sickled cells cannot deform to pass through small capillaries; they cause blockages (vaso-occlusive crises), damaging tissues. Sickled cells are also fragile and are destroyed prematurely (haemolysis), causing anaemia. Sickle cell is autosomal recessive: homozygous individuals (genotype ss) have sickle cell disease; heterozygotes (Ss) have sickle cell trait (mostly asymptomatic but some sickling under extreme hypoxia). Sickle cell trait is protective against malaria (heterozygous advantage), explaining its high frequency in malaria-endemic regions.'
      }
    },
    {
      id: 'h-cancer-mutations',
      type: 'heading',
      data: {
        text: 'Oncogenes and Tumour Suppressor Genes',
        level: 2
      }
    },
    {
      id: 'p-cancer-mutations',
      type: 'paragraph',
      data: {
        text: 'Cancer results from mutations in genes controlling cell division and death. Two categories: (1) Oncogenes: normally regulate cell growth (RAS, MYC, growth factor receptors). Mutations make them hyperactive, driving uncontrolled cell division. A single mutated copy (dominant) is sufficient. Example: RAS mutations occur in ~30% of cancers. (2) Tumour suppressor genes: normally inhibit cell division (p53, RB, BRCA1, BRCA2). Mutations inactivate them, removing the brake on division. Both copies (recessive) usually must be mutated for loss of function. p53 ("guardian of the genome") is the most commonly mutated gene in cancers (~50%). It detects DNA damage and either triggers repair or apoptosis; loss of p53 allows damaged cells to divide. BRCA1/BRCA2 mutations increase breast and ovarian cancer risk. Cancers typically require multiple mutations (Knudson\'s "two-hit hypothesis" for suppressors; multiple hits for oncogenes).'
      }
    },
    {
      id: 'table-mutations',
      type: 'comparisonTable',
      data: {
        headers: ['Mutation Type', 'Change', 'Effect', 'Example'],
        rows: [
          ['Silent (synonymous)', 'Codon → different codon, same amino acid', 'No amino acid change; no effect', 'UCU → UCC (both serine)'],
          ['Missense', 'Codon → different codon, different amino acid', 'Amino acid change; variable effect (mild to severe)', 'Sickle cell: Glu → Val'],
          ['Nonsense', 'Codon → stop codon', 'Premature termination; truncated, usually non-functional protein', 'β-thalassaemia: CAG → TAA (stop)'],
          ['Frameshift (insertion/deletion)', '+1 or +2 nt (not ÷3)', 'Reading frame shifted; all downstream codons misread', 'Duchenne muscular dystrophy (DMD)'],
          ['Deletion (chromosome)', 'Loss of DNA segment', 'Loss of genes; usually harmful (unbalanced)', 'Wolf-Hirschhorn syndrome (4p deletion)'],
          ['Oncogene mutation', 'Hyperactivation of growth gene', 'Uncontrolled cell division → cancer', 'RAS mutations (~30% cancers)'],
          ['Tumour suppressor inactivation', 'Loss of inhibitory gene function', 'Loss of growth brake → cancer', 'p53 mutations (~50% cancers)']
        ],
        caption: 'Summary of mutation types and effects'
      }
    },
    {
      id: 'callout-worked-sickle',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Sickle Cell: Genotype to Phenotype',
        text: 'DNA mutation: 6th codon GAG → GTG. mRNA: GAG → GUG. Protein: Glu6Val. Phenotype (ss homozygous): valine causes polymerisation under low O₂ → sickling → vaso-occlusion, haemolysis, anaemia. Heterozygous (Ss): trait, mostly asymptomatic, malaria-protected. This shows how one nucleotide change propagates from gene → protein → cell → organism → disease.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why do frameshift mutations (insertions/deletions) cause more severe effects than point substitutions? Explain how a single nucleotide insertion changes every subsequent codon downstream, altering the entire amino acid sequence from the mutation point to the stop codon.',
        apply: 'The normal β-globin codon sequence is ...GAG... (Glu). In sickle cell disease, this becomes ...GTG... (Val). Classify this mutation type, explain why valine causes sickling under low oxygen conditions, and explain why heterozygous carriers have a selective advantage in malaria-endemic regions.',
        analyze: 'Compare the potential effects of a substitution mutation in three locations: within a gene\'s coding sequence, within a promoter region, and within an intron. Which is most likely to affect the phenotype, and why?',
        evaluate: 'Evaluate the statement: \'All mutations are harmful.\' Consider silent mutations, beneficial mutations (antibiotic resistance, sickle cell heterozygote advantage), neutral mutations, and the role of mutations as the ultimate source of all genetic variation and evolution.',
      },
      terms: [],
    },
    {
      id: 'checklist-mutations',
      type: 'checklist',
      data: {
        items: [
          { text: 'Point mutations: silent (no change), missense (amino acid change), nonsense (stop codon)', checked: false },
          { text: 'Frameshift: insertion/deletion of ±1, ±2 nt shifts reading frame; all downstream codons wrong', checked: false },
          { text: 'Sickle cell: GAG → GTG (Glu → Val); polymerisation, sickling, pain, organ damage', checked: false },
          { text: 'Oncogenes: mutations cause hyperactivity, uncontrolled growth (dominant)', checked: false },
          { text: 'Tumour suppressors: mutations cause loss of function, remove growth inhibition (recessive)', checked: false }
        ]
      }
    },
    {
      id: 'summary-mutations',
      type: 'summary',
      data: {
        text: 'Mutations are DNA changes. Point mutations: silent (no protein effect), missense (amino acid change, variable severity), nonsense (stop, truncated protein). Frameshift (insertion/deletion ±1,±2) shifts reading frame, affecting all downstream codons. Sickle cell (Glu6Val) causes polymerisation, sickling. Cancer mutations: oncogenes (hyperactive, dominant), tumour suppressors (inactive, recessive). Multiple mutations typically required for cancer. Effects range from no change (silent) to severe disease (nonsense, frameshift) to cancer (combined mutations).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-substitution',
        prompt: 'Explain silent, missense, and nonsense mutations. Give examples of each.'
      },
      {
        id: 'cue-2',
        blockId: 'p-frameshift',
        prompt: 'What is a frameshift mutation? Why is it usually more severe than a point mutation?'
      },
      {
        id: 'cue-3',
        blockId: 'p-sickle-cell-genetics',
        prompt: 'Describe the molecular basis of sickle cell anaemia. What is the genotype-phenotype relationship?'
      },
      {
        id: 'cue-4',
        blockId: 'p-cancer-mutations',
        prompt: 'Explain oncogenes and tumour suppressor genes. How do mutations in each cause cancer?'
      },
      {
        id: 'cue-5',
        blockId: 'p-chromosome-mutations',
        prompt: 'What are the main types of chromosome mutations? Give examples.'
      }
    ],
    summaryText: 'Point mutations: silent (no change, same aa), missense (different aa, variable effect), nonsense (stop codon, truncated). Frameshift (±1,±2 nt) shifts reading frame, changes all downstream codons. Sickle cell: Glu6Val (GAG→GTG), hydrophobic Val polymerises, sickling. Oncogenes (RAS, MYC): mutations hyperactive, uncontrolled growth, dominant. Tumour suppressors (p53, BRCA): mutations inactivate, lose growth inhibition, recessive. Chromosomal: deletion, duplication, inversion, translocation, aneuploidy, euploidy.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Mutation Types and Disease',
      detail: 'Classification of mutations, effects on proteins, and examples of genetic diseases.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['mutations', 'point-mutations', 'frameshift', 'sickle-cell', 'cancer', 'oncogenes', 'tumour-suppressors']
    }
  ]
};
