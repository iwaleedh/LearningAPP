export const note_biology_1_2_6 = {
  blocks: [
    {
      id: 'obj-dna-rna',
      type: 'objective',
      data: {
        text: 'Understand DNA and RNA nucleotide structure, base pairing, DNA double helix geometry, and the roles of different RNA types.'
      }
    },
    {
      id: 'h-nucleotide',
      type: 'heading',
      data: {
        text: 'Nucleotide Structure',
        level: 2
      }
    },
    {
      id: 'p-nucleotide',
      type: 'paragraph',
      data: {
        text: 'A nucleotide is composed of three parts: (1) a pentose sugar (5-carbon sugar), (2) a phosphate group, and (3) a nitrogenous base. DNA nucleotides contain deoxyribose sugar (missing an oxygen at the 2\' carbon compared to ribose); RNA nucleotides contain ribose. The phosphate group links nucleotides via a phosphodiester bond between the 3\' carbon of one sugar and the 5\' carbon of the next, creating a sugar-phosphate backbone with a directional 5\' → 3\' orientation. The nitrogenous base is attached to the 1\' carbon of the sugar. Bases are classified as purines (two-ring structures: adenine A, guanine G) or pyrimidines (single-ring: cytosine C, thymine T in DNA, uracil U in RNA). DNA and RNA are distinguished by sugar (deoxyribose vs ribose) and one base (T vs U).'
      }
    },
    {
      id: 'table-bases',
      type: 'comparisonTable',
      data: {
        headers: ['Molecule', 'Purines', 'Pyrimidines', 'Base Pairing (Rules)', 'Sugar', 'Found In'],
        rows: [
          ['DNA', 'Adenine (A), Guanine (G)', 'Cytosine (C), Thymine (T)', 'A−T (2 H-bonds), G−C (3 H-bonds)', 'Deoxyribose', 'Cell nucleus, mitochondria, chloroplasts'],
          ['RNA', 'Adenine (A), Guanine (G)', 'Cytosine (C), Uracil (U)', 'A−U (2 H-bonds), G−C (3 H-bonds)', 'Ribose', 'Cell cytoplasm, nucleus, ribosomes']
        ],
        caption: 'DNA and RNA bases and pairing'
      }
    },
    {
      id: 'h-dna-structure',
      type: 'heading',
      data: {
        text: 'DNA Double Helix Structure',
        level: 2
      }
    },
    {
      id: 'p-dna-double-helix',
      type: 'paragraph',
      data: {
        text: 'DNA typically exists as a double helix consisting of two complementary strands wound around each other. The two strands are antiparallel: one runs 5\' → 3\', the other 3\' → 5\'. Base pairing follows Chargaff\'s rules: adenine (A) pairs with thymine (T) via two hydrogen bonds; guanine (G) pairs with cytosine (C) via three hydrogen bonds. The specificity of base pairing is the foundation of DNA replication and gene expression: if you know one strand sequence, you can deduce the complementary strand. The double helix has precise dimensions: ~2 nm in diameter, ~3.4 nm per complete turn (10 base pairs per turn), and ~0.34 nm between adjacent bases. The helical structure is stabilised by hydrogen bonds between bases and hydrophobic stacking interactions between base pair planes. The sugar-phosphate backbone faces outward (hydrophilic), protecting the hydrophobic bases inside. This elegant structure allows efficient packing of genetic information while preserving accessibility for replication and transcription.'
      }
    },
    {
      id: 'eq-base-pairing',
      type: 'equation',
      data: {
        html: 'DNA base pairing: A−T (2 H-bonds), G−C (3 H-bonds)<br/>DNA antiparallel: 5\'−[Sugar−Phosphate]−3\' ║ 3\'−[Sugar−Phosphate]−5\'<br/>Double helix: 2 nm diameter, 3.4 nm per turn, 0.34 nm between bases'
      }
    },
    {
      id: 'h-rna-types',
      type: 'heading',
      data: {
        text: 'RNA Types and Functions',
        level: 2
      }
    },
    {
      id: 'p-mrna',
      type: 'paragraph',
      data: {
        text: 'Messenger RNA (mRNA) is a temporary copy of a gene\'s coding sequence, synthesised during transcription. mRNA carries the genetic code from DNA to the ribosome. Each sequence of three nucleotides (codon) specifies one amino acid or a stop signal. mRNA is relatively short-lived (minutes to hours in bacteria, hours to days in eukaryotes), allowing cells to respond dynamically to changing needs: if an enzyme is no longer needed, its mRNA is degraded and new protein production stops. mRNA is synthesised in the nucleus (eukaryotes) but functions in the cytoplasm at ribosomes. Some mRNAs encode regulatory proteins (transcription factors, kinases) that control other genes; others encode structural proteins, enzymes, or signalling molecules. The genetic code is read in one direction: 5\' → 3\' on mRNA.'
      }
    },
    {
      id: 'p-trna',
      type: 'paragraph',
      data: {
        text: 'Transfer RNA (tRNA) is a small RNA (~75 nucleotides) with a characteristic cloverleaf secondary structure and an L-shaped tertiary structure. Each tRNA is specific: it carries one amino acid (aminoacylation by aminoacyl-tRNA synthetase) and recognises the corresponding mRNA codon via a three-nucleotide anticodon. The anticodon is complementary and antiparallel to the codon; e.g. if the mRNA codon is 5\'-AUG-3\' (start codon, methionine), the tRNA anticodon is 3\'-UAC-5\'. During translation, the tRNA delivers its amino acid to the growing polypeptide chain, then dissociates. Because there are 61 sense codons but only ~40 tRNAs, some tRNAs recognise multiple codons via wobble base pairing (flexible pairing at the third codon position). tRNA is highly conserved; its sequence and structure are similar across organisms.'
      }
    },
    {
      id: 'p-rrna',
      type: 'paragraph',
      data: {
        text: 'Ribosomal RNA (rRNA) is a structural and catalytic component of the ribosome. In eukaryotes, the ribosome is a 80S particle (60S and 40S subunits) containing four rRNA molecules (28S, 18S, 5.8S, 5S) and numerous ribosomal proteins. In bacteria, the 70S ribosome contains three rRNAs (23S, 16S, 5S). rRNA comprises ~60% of the ribosome by mass; the rest is protein. rRNA catalyses the formation of peptide bonds (ribozyme activity), making rRNA a ribozyme—an RNA molecule with enzymatic activity. The ribosome functions as a molecular machine, reading mRNA and catalysing protein synthesis. rRNA is synthesised in the nucleolus (eukaryotes) and is the most abundant RNA in the cell.'
      }
    },
    {
      id: 'table-rna-types',
      type: 'comparisonTable',
      data: {
        headers: ['RNA Type', 'Size', 'Structure', 'Function', 'Stability', 'Abundance'],
        rows: [
          ['mRNA', '~0.5–10 kb', 'Linear, 5\' cap, 3\' poly-A', 'Carries genetic code; template for translation', 'Short-lived (min–days)', 'Varies (~5% of total RNA)'],
          ['tRNA', '~75 nt', 'Cloverleaf 2°, L-shaped 3°', 'Delivers amino acids; recognises codons', 'Stable (hours–days)', 'Abundant (~15% of total RNA)'],
          ['rRNA', '~120–3000 nt', 'Complex 2°, part of ribosome', 'Ribosomal structure; peptide bond catalysis', 'Stable (hours–days)', 'Very abundant (~80% of total RNA)']
        ],
        caption: 'Characteristics of RNA types'
      }
    },
    {
      id: 'h-dna-packaging',
      type: 'heading',
      data: {
        text: 'DNA Packaging and Chromatin',
        level: 2
      }
    },
    {
      id: 'p-dna-packaging',
      type: 'paragraph',
      data: {
        text: 'Human DNA totals ~3 billion base pairs; if stretched, it would be ~2 meters long per cell, yet it must fit into a nucleus ~10 μm diameter. This is achieved via hierarchical packaging. DNA wraps around histone octamers (8 histone proteins: 2 copies each of H2A, H2B, H3, H4), forming nucleosomes (DNA + histone core). Each nucleosome contains ~147 base pairs of DNA and ~20 bp of linker DNA, giving a repeat of ~200 bp. Nucleosomes compact DNA ~7-fold. Higher-order structure involves histone H1 and 30 nm chromatin fibres (~40-fold compaction). Further looping and condensation yields chromosomes visible during mitosis (>1000-fold compaction). This packaging is reversible: chromatin can be loosened to allow transcription (open chromatin, euchromatin) or kept condensed for gene silencing (heterochromatin). Histone modifications (acetylation, methylation, phosphorylation) regulate chromatin structure and gene expression epigenetically.'
      }
    },
    {
      id: 'callout-key-dna-rna',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Central Dogma of Molecular Biology',
        text: 'DNA → RNA → Protein. DNA is replicated (DNA → DNA) for inheritance. DNA is transcribed to mRNA. mRNA is translated to protein by tRNA and ribosomes. This is how genetic information flows in all organisms.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does DNA use thymine while RNA uses uracil? Explain the chemical difference (thymine = uracil + methyl group), the energetic cost of methylation, and the advantage it confers: deamination of cytosine produces uracil, which can be detected and repaired in DNA because uracil is not normally present.',
        apply: 'A double-stranded DNA molecule contains 30% adenine bases. Calculate the percentage of guanine, cytosine, and thymine bases. If the molecule has 10,000 base pairs, how many hydrogen bonds are present in total?',
        analyze: 'Compare the structure of DNA and mRNA in terms of sugar type, base composition, strand number, length, location in the cell, and stability. Explain why each structural feature is important for the molecule\'s function.',
        evaluate: 'Evaluate the claim that the double-helix structure of DNA is perfectly adapted for its twin functions of storing genetic information and enabling accurate replication. Consider base-pairing rules, antiparallel strands, and the role of the phosphodiester backbone.',
      },
      terms: [],
    },
    {
      id: 'checklist-nucleic-acids',
      type: 'checklist',
      data: {
        items: [
          { text: 'Nucleotide: sugar + phosphate + base; DNA has deoxyribose, RNA has ribose', checked: false },
          { text: 'DNA bases: A, G, C, T; RNA bases: A, G, C, U', checked: false },
          { text: 'Base pairing: A−T (2 H-bonds), G−C (3 H-bonds); DNA antiparallel; 2 nm diameter, 3.4 nm/turn', checked: false },
          { text: 'mRNA: carries genetic code (codons); tRNA: delivers amino acids (anticodon); rRNA: ribosomal structure', checked: false },
          { text: 'DNA packaged around histones (nucleosomes); ~7-fold compaction per nucleosome', checked: false }
        ]
      }
    },
    {
      id: 'summary-nucleic-acids',
      type: 'summary',
      data: {
        text: 'Nucleotides consist of sugar, phosphate, and base. DNA: deoxyribose, A/G/C/T; double helix (antiparallel, A−T/G−C pairing, 2 nm diameter, 3.4 nm/turn). RNA: ribose, A/G/C/U. mRNA carries genetic code (codons); tRNA delivers amino acids (anticodon); rRNA catalyses protein synthesis. DNA packaged with histones in nucleosomes (~7× compaction), higher-order chromatin, then chromosomes. Central dogma: DNA → RNA → Protein.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-nucleotide',
        prompt: 'Describe nucleotide structure. How do DNA and RNA nucleotides differ?'
      },
      {
        id: 'cue-2',
        blockId: 'p-dna-double-helix',
        prompt: 'Describe DNA double helix structure. What are the base pairing rules?'
      },
      {
        id: 'cue-3',
        blockId: 'p-mrna',
        prompt: 'What is mRNA and what is its function? How stable is it?'
      },
      {
        id: 'cue-4',
        blockId: 'p-trna',
        prompt: 'Describe tRNA structure and function. What is an anticodon?'
      },
      {
        id: 'cue-5',
        blockId: 'p-dna-packaging',
        prompt: 'How is DNA packaged in eukaryotic cells? What is a nucleosome?'
      }
    ],
    summaryText: 'Nucleotide: sugar (deoxyribose/ribose) + phosphate + base. DNA: A/G/C/T, double helix (antiparallel), A−T (2 H-bonds)/G−C (3 H-bonds), 2 nm diameter, 3.4 nm/turn. RNA: A/G/C/U, typically single strand. mRNA: ~0.5–10 kb, codes for proteins, short-lived. tRNA: ~75 nt, cloverleaf structure, delivers amino acids, anticodon pairs codon. rRNA: ~120–3000 nt, ribosomal structure, catalyses peptide bonds. DNA packaged: histone nucleosomes (7× compaction), 30 nm chromatin, condensed chromosome.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'DNA and RNA Structure and Function',
      detail: 'Nucleotide structure, DNA double helix geometry, base pairing, and RNA types.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['dna', 'rna', 'nucleotide', 'base-pairing', 'mrna', 'trna', 'rrna', 'double-helix']
    }
  ]
};
