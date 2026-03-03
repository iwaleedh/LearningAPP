export const note_biology_1_2_8 = {
  blocks: [
    {
      id: 'obj-genetic-code',
      type: 'objective',
      data: {
        text: 'Understand the genetic code, transcription, translation, and the role of key RNA types in protein synthesis.'
      }
    },
    {
      id: 'h-genetic-code',
      type: 'heading',
      data: {
        text: 'The Genetic Code',
        level: 2
      }
    },
    {
      id: 'p-genetic-code',
      type: 'paragraph',
      data: {
        text: 'The genetic code is the correspondence between DNA/mRNA sequences and amino acids. mRNA is read in triplets called codons; each codon (3 nucleotides) specifies one amino acid or a stop signal. There are 64 possible codons (4³ = 64, since 4 bases × 3 positions): 61 code for amino acids, and 3 are stop codons (UAA, UAG, UGA). The code is universal across nearly all organisms (a few rare exceptions in mitochondria), suggesting a common evolutionary origin. The code is degenerate: multiple codons encode the same amino acid (e.g. leucine has 6 codons: UUA, UUG, CUU, CUC, CUA, CUG). Stop codons are shared (3 total). The first codon is usually AUG (start codon), which codes for methionine. The code is read in the 5\' → 3\' direction on mRNA, and codons do not overlap; each nucleotide is part of only one codon.'
      }
    },
    {
      id: 'p-codon-degeneracy',
      type: 'paragraph',
      data: {
        text: 'Degeneracy is most pronounced at the third codon position (wobble position). Many amino acids have codons that differ only at the third base; e.g. codons ending in U and C often encode the same amino acid (e.g. CUU and CUC both code for leucine). This wobble pairing allows fewer tRNAs than codons: ~40 tRNAs recognise ~61 sense codons via flexible pairing at the wobble position. This redundancy is protective: silent mutations (synonymous changes) at the third position often do not change the amino acid and have no effect on protein function. Non-silent (missense) mutations at the first or second position typically change the amino acid. Nonsense mutations change a codon to a stop codon, truncating the protein.'
      }
    },
    {
      id: 'h-transcription',
      type: 'heading',
      data: {
        text: 'Transcription: DNA to mRNA',
        level: 2
      }
    },
    {
      id: 'p-transcription-process',
      type: 'paragraph',
      data: {
        text: 'Transcription is the synthesis of mRNA from a DNA template, catalysed by RNA polymerase. The enzyme reads the template strand (also called the antisense strand) in the 3\' → 5\' direction and synthesises mRNA in the 5\' → 3\' direction, creating an mRNA sequence complementary to the template (and identical to the coding strand, except U for T). The promoter region (upstream of the gene) contains binding sites for RNA polymerase and transcription factors. In prokaryotes, RNA polymerase directly recognises the promoter (−10 and −35 sequences). In eukaryotes, transcription factors (TFIID, TFIIB, etc.) bind the TATA box (−25 bp upstream of start) and recruit RNA polymerase II. Initiation (polymerase binds promoter), elongation (synthesis of mRNA), and termination (polymerase releases) complete transcription. In eukaryotes, the initial mRNA transcript is a pre-mRNA containing exons (coding sequences) and introns (non-coding, removed). Splicing removes introns and joins exons, producing mature mRNA. The 5\' cap (7-methylguanosine) and 3\' poly-A tail (200 adenines) stabilise mRNA and facilitate translation.'
      }
    },
    {
      id: 'h-translation',
      type: 'heading',
      data: {
        text: 'Translation: mRNA to Protein',
        level: 2
      }
    },
    {
      id: 'p-translation-initiation',
      type: 'paragraph',
      data: {
        text: 'Translation begins at the start codon (AUG), where a special initiator tRNA (carrying N-formyl-methionine in prokaryotes, methionine in eukaryotes) binds. The small ribosomal subunit scans mRNA from the 5\' cap (eukaryotes) until it encounters AUG in the proper context. The start codon positions the initiator tRNA in the P (peptidyl) site of the ribosome. Initiation factors (IF2 in prokaryotes, eIF2 in eukaryotes) facilitate this process, requiring GTP energy. The large ribosomal subunit then joins, forming a complete ribosome with three tRNA binding sites: P site (holding the tRNA with the growing chain), A site (receiving the next tRNA), and E site (exiting tRNA).'
      }
    },
    {
      id: 'p-translation-elongation',
      type: 'paragraph',
      data: {
        text: 'Elongation is the repetitive cycle of codon recognition and peptide bond formation. (1) Codon recognition: EF-Tu (prokaryotes) or eEF1A (eukaryotes), bound to GTP and carrying an aminoacyl-tRNA, enters the A site. If the anticodon matches the mRNA codon (Watson-Crick pairing), GTP hydrolysis occurs, and the tRNA enters the A site. (2) Peptidyl transferase: the ribosome (specifically, the rRNA) catalyses peptide bond formation between the carboxyl group of the amino acid in the P site and the amino group of the amino acid in the A site. The growing chain transfers to the A-site tRNA. (3) Translocation: EF-G (prokaryotes) or eEF2 (eukaryotes) catalyses movement of the ribosome: the tRNA in the P site moves to the E site (and exits), the tRNA in the A site moves to the P site, and a vacant A site is ready for the next tRNA. This cycle repeats 3–5 times per second in prokaryotes, 2–3 times per second in eukaryotes.'
      }
    },
    {
      id: 'p-translation-termination',
      type: 'paragraph',
      data: {
        text: 'Termination occurs when a stop codon (UAA, UAG, UGA) enters the A site. Release factors (RF1/RF2 in prokaryotes, eRF1 in eukaryotes) recognise stop codons and catalyse hydrolysis of the bond between the polypeptide and the tRNA in the P site. The polypeptide is released from the ribosome. The ribosome then dissociates from mRNA, and the mRNA and tRNA are released. Ribosomal subunits are recycled for the next round of translation.'
      }
    },
    {
      id: 'table-genetic-code',
      type: 'comparisonTable',
      data: {
        headers: ['Codon', 'Amino Acid', 'Type'],
        rows: [
          ['AUG', 'Methionine (Met)', 'Start codon'],
          ['UAA, UAG, UGA', 'Stop', 'Termination codons'],
          ['UUU, UUC', 'Phenylalanine (Phe)', 'Sense (2 codons)'],
          ['UUA, UUG, CUU, CUC, CUA, CUG', 'Leucine (Leu)', 'Sense (6 codons—most degenerate)'],
          ['CCC, CCU, CCA, CCG', 'Proline (Pro)', 'Sense (4 codons—all wobble)'],
          ['GGG, GGU, GGA, GGG', 'Glycine (Gly)', 'Sense (4 codons—all wobble)']
        ],
        caption: 'Selected genetic code codons'
      }
    },
    {
      id: 'callout-worked-translation',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Protein Synthesis: From Gene to Protein',
        text: 'Gene (DNA): 3\'-TAC GTA TTG CAG-5\' (template strand). Transcription: RNA Pol II reads 3\'→5\' → mRNA 5\'-AUG CAU AAC GUC-3\'. Translation: Ribosome reads AUG (Met), CAU (His), AAC (Asn), GUC (Val), then AAA... codons 5\'→3\'. Each tRNA delivers amino acid; peptide bonds form. At stop codon → release protein. Result: Met−His−Asn−Val−... protein.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is the genetic code described as degenerate but not ambiguous? Explain: degenerate means multiple codons code for the same amino acid (64 codons, 20 amino acids + stop codons), while non-ambiguous means each codon codes for only one amino acid — so the code is read reliably even with some mutations.',
        apply: 'The mRNA sequence 5\'-AUGCCGUUAAGCUGA-3\' is translated. Using the standard genetic code, determine the amino acid sequence. How many tRNA molecules are used, and which codon triggers release of the polypeptide?',
        analyze: 'Compare transcription and translation in terms of location in the cell, template used, enzymes involved, direction of synthesis, and the nature of the product. Create a comparison table with at least 6 criteria.',
        evaluate: 'Evaluate the universality of the genetic code as evidence for common ancestry of all life. Consider the very few exceptions (e.g. mitochondrial code variations, Mycoplasma) and explain why these exceptions actually support rather than undermine the common ancestor argument.',
      },
      terms: [],
    },
    {
      id: 'checklist-gene-expression',
      type: 'checklist',
      data: {
        items: [
          { text: 'Genetic code: triplet (codon), 64 codons (61 sense, 3 stop), degenerate, universal', checked: false },
          { text: 'Start codon AUG (Met); stop codons UAA/UAG/UGA', checked: false },
          { text: 'Transcription: DNA template → mRNA via RNA Pol II, 5\'→3\' synthesis', checked: false },
          { text: 'Translation: mRNA codon read by tRNA anticodon; ribosome catalyses peptide bonds', checked: false },
          { text: 'Initiation (start codon), elongation (3–5 codons/sec), termination (stop codon)', checked: false }
        ]
      }
    },
    {
      id: 'summary-gene-expression',
      type: 'summary',
      data: {
        text: 'Genetic code: triplet codons (64 total: 61 sense, 3 stop); degenerate (multiple codons per amino acid); universal across organisms. Transcription: RNA Pol II reads DNA template 3\'→5\', synthesising mRNA 5\'→3\'. In eukaryotes, pre-mRNA is spliced (introns removed, exons joined), capped, and poly-A tailed. Translation: ribosome reads mRNA codons 5\'→3\'; tRNA anticodons match codons; peptidyl transferase forms peptide bonds; EF-Tu/EF-G facilitate elongation. Initiation at AUG (Met); elongation ~3–5 codons/sec; termination at stop codon. Result: polypeptide chain (protein).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-genetic-code',
        prompt: 'What is the genetic code? How many codons are there and what do they specify?'
      },
      {
        id: 'cue-2',
        blockId: 'p-codon-degeneracy',
        prompt: 'What is wobble pairing? How does it relate to codon degeneracy?'
      },
      {
        id: 'cue-3',
        blockId: 'p-transcription-process',
        prompt: 'Describe transcription. How does RNA polymerase read the template strand?'
      },
      {
        id: 'cue-4',
        blockId: 'p-translation-elongation',
        prompt: 'Describe the elongation cycle in translation. What is the role of EF-Tu and EF-G?'
      },
      {
        id: 'cue-5',
        blockId: 'p-translation-termination',
        prompt: 'How does translation terminate? What happens to the polypeptide and ribosome?'
      }
    ],
    summaryText: 'Genetic code: 64 codons (61 sense, 3 stop); AUG start (Met); UAA/UAG/UGA stop; degenerate (multiple codons per aa); wobble at 3rd position. Transcription: RNA Pol II reads template 3\'→5\' → mRNA 5\'→3\'. Eukaryotes: pre-mRNA → spliced (exons only), capped, poly-A. Translation: codon read by tRNA anticodon; ribosome catalyses peptide bonds; EF-Tu (incoming), EF-G (translocation); initiation (AUG), elongation (3–5 codons/s), termination (stop) → release protein.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Genetic Code and Protein Synthesis',
      detail: 'Genetic code properties, transcription mechanism, and detailed translation process.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['genetic-code', 'codon', 'transcription', 'translation', 'mrna', 'ribosome', 'protein-synthesis']
    }
  ]
};
