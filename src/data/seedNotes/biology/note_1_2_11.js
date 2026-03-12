export const note_biology_1_2_11 = {
  blocks: [
    {
      id: 'obj-dna',
      type: 'objective',
      data: { text: 'Describe the structure of DNA and RNA, including the nucleotide monomers, base pairing, and the differences between DNA, mRNA, and tRNA.' },
    },
    {
      id: 'h-nucleotide',
      type: 'heading',
      data: { text: 'DNA Nucleotide Structure', level: 2 },
    },
    {
      id: 'p-nucleotide',
      type: 'paragraph',
      data: { text: 'DNA (deoxyribonucleic acid) is a polynucleotide \u2014 a polymer made of nucleotide monomers joined by phosphodiester bonds.' },
    },
    {
      id: 'list-nucleotide',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Each DNA <strong>nucleotide</strong> consists of three components: a <strong>deoxyribose</strong> (5-carbon sugar) + a <strong>phosphate</strong> group + one of four nitrogenous <strong>bases</strong>.',
          'The four bases in DNA: <strong>adenine (A)</strong>, <strong>thymine (T)</strong>, <strong>cytosine (C)</strong>, <strong>guanine (G)</strong>.',
          'Purines (double ring): adenine and guanine.',
          'Pyrimidines (single ring): cytosine and thymine (in DNA) or uracil (in RNA; replaces thymine).',
          'Adjacent nucleotides in the same strand are joined by <strong>phosphodiester bonds</strong> (condensation reaction between the phosphate of one nucleotide and the 3\'\u2013OH of the next sugar).',
        ],
      },
    },
    {
      id: 'h-double-helix',
      type: 'heading',
      data: { text: 'Double Helix Structure', level: 2 },
    },
    {
      id: 'list-double-helix',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'DNA consists of <strong>two polynucleotide strands</strong> wound around each other in a <strong>double helix</strong>.',
          'The two strands are held together by <strong>hydrogen bonds</strong> between complementary bases: A pairs with T (2 hydrogen bonds); C pairs with G (3 hydrogen bonds).',
          'Base pairing is <strong>complementary and specific</strong> \u2014 only A-T and C-G pairs form.',
          'The two strands are <strong>antiparallel</strong>: one runs 5′\u21923′ (left to right) and the other runs 3′\u21925′ (right to left).',
          '<strong>Chargaff’s rule</strong>: in any DNA molecule, %A = %T and %C = %G (because A always pairs with T, and C with G).',
          'The double helix model was proposed by <strong>Watson and Crick (1953)</strong>, using X-ray crystallography data from Franklin and Wilkins.',
        ],
      },
    },
    {
      id: 'svg-dna',
      type: 'svg',
      data: {
        caption: 'Simplified DNA double helix showing antiparallel strands, complementary base pairing (A-T, C-G), and hydrogen bonds.',
        svg: '<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect width="500" height="260" fill="#f8f9ff" rx="8"/><text x="40" y="20" fill="#888" font-size="10">5′</text><text x="40" y="248" fill="#888" font-size="10">3′</text><text x="440" y="20" fill="#888" font-size="10">3′</text><text x="440" y="248" fill="#888" font-size="10">5′</text><g stroke="#3498db" stroke-width="3" fill="none"><path d="M60,30 Q80,50 60,70 Q40,90 60,110 Q80,130 60,150 Q40,170 60,190 Q80,210 60,230"/><path d="M440,30 Q420,50 440,70 Q460,90 440,110 Q420,130 440,150 Q460,170 440,190 Q420,210 440,230"/></g><g font-size="11" text-anchor="middle"><rect x="80" y="38" width="30" height="18" rx="4" fill="#e74c3c"/><text x="95" y="51" fill="white">A</text><rect x="380" y="38" width="30" height="18" rx="4" fill="#f39c12"/><text x="395" y="51" fill="white">T</text><line x1="110" y1="47" x2="380" y2="47" stroke="#95a5a6" stroke-width="1.5" stroke-dasharray="5,3"/><text x="245" y="44" fill="#7f8c8d" font-size="9">2 H-bonds</text><rect x="80" y="70" width="30" height="18" rx="4" fill="#27ae60"/><text x="95" y="83" fill="white">C</text><rect x="380" y="70" width="30" height="18" rx="4" fill="#8e44ad"/><text x="395" y="83" fill="white">G</text><line x1="110" y1="79" x2="380" y2="79" stroke="#95a5a6" stroke-width="1.5" stroke-dasharray="5,3"/><text x="245" y="76" fill="#7f8c8d" font-size="9">3 H-bonds</text><rect x="76" y="100" width="30" height="18" rx="4" fill="#f39c12"/><text x="91" y="113" fill="white">T</text><rect x="384" y="100" width="30" height="18" rx="4" fill="#e74c3c"/><text x="399" y="113" fill="white">A</text><line x1="106" y1="109" x2="384" y2="109" stroke="#95a5a6" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="78" y="130" width="30" height="18" rx="4" fill="#8e44ad"/><text x="93" y="143" fill="white">G</text><rect x="382" y="130" width="30" height="18" rx="4" fill="#27ae60"/><text x="397" y="143" fill="white">C</text><line x1="108" y1="139" x2="382" y2="139" stroke="#95a5a6" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="78" y="160" width="30" height="18" rx="4" fill="#e74c3c"/><text x="93" y="173" fill="white">A</text><rect x="382" y="160" width="30" height="18" rx="4" fill="#f39c12"/><text x="397" y="173" fill="white">T</text><line x1="108" y1="169" x2="382" y2="169" stroke="#95a5a6" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="78" y="190" width="30" height="18" rx="4" fill="#27ae60"/><text x="93" y="203" fill="white">C</text><rect x="382" y="190" width="30" height="18" rx="4" fill="#8e44ad"/><text x="397" y="203" fill="white">G</text><line x1="108" y1="199" x2="382" y2="199" stroke="#95a5a6" stroke-width="1.5" stroke-dasharray="5,3"/></g><text x="250" y="245" fill="#666" font-size="10" text-anchor="middle">Complementary base pairing: A-T (2 H-bonds) and C-G (3 H-bonds)</text></svg>',
      },
    },
    {
      id: 'h-rna',
      type: 'heading',
      data: { text: 'RNA Structure', level: 2 },
    },
    {
      id: 'p-rna',
      type: 'paragraph',
      data: { text: 'RNA (ribonucleic acid) is also a polynucleotide, but differs from DNA in several ways.' },
    },
    {
      id: 'list-rna-diff',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'RNA nucleotides contain <strong>ribose</strong> sugar (not deoxyribose \u2014 ribose has an extra \u2013OH group at the 2\'\u2212carbon).',
          'RNA contains <strong>uracil (U)</strong> instead of thymine (T). Uracil pairs with adenine (A-U, 2 H-bonds).',
          'Most RNA molecules are <strong>single-stranded</strong> (not double-stranded like DNA).',
          'RNA molecules are generally much shorter than DNA.',
        ],
      },
    },
    {
      id: 'h-rna-types',
      type: 'heading',
      data: { text: 'Types of RNA', level: 2 },
    },
    {
      id: 'table-rna-types',
      type: 'comparisonTable',
      data: {
        caption: 'The three main types of RNA and their roles.',
        headers: ['Type', 'Structure', 'Location', 'Function'],
        rows: [
          ['mRNA (messenger RNA)', 'Single-stranded; linear', 'Nucleus \u2192 cytoplasm / ribosomes', 'Carries genetic code from DNA to ribosome for translation into protein'],
          ['tRNA (transfer RNA)', 'Single-stranded; folded into cloverleaf shape with anticodon loop', 'Cytoplasm / ribosomes', 'Brings specific amino acids to the ribosome during translation; anticodon pairs with mRNA codon'],
          ['rRNA (ribosomal RNA)', 'Complex 3D structure; combined with proteins', 'Ribosomes', 'Structural and catalytic component of ribosomes; catalyses peptide bond formation'],
        ],
      },
    },
    {
      id: 'table-dna-rna-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of DNA, mRNA and tRNA.',
        headers: ['Feature', 'DNA', 'mRNA', 'tRNA'],
        rows: [
          ['Sugar', 'Deoxyribose', 'Ribose', 'Ribose'],
          ['Strands', 'Double (double helix)', 'Single', 'Single (folded)'],
          ['Bases', 'A, T, C, G', 'A, U, C, G', 'A, U, C, G'],
          ['Length', 'Very long', 'Long (variable)', 'Short (around 80 nucleotides)'],
          ['Location', 'Nucleus (also mitochondria)', 'Nucleus \u2192 cytoplasm', 'Cytoplasm'],
          ['Function', 'Stores genetic information', 'Carries code from DNA to ribosome', 'Brings amino acids to ribosome'],
        ],
      },
    },
    {
      id: 'h-prok-euk',
      type: 'heading',
      data: { text: 'Prokaryotic vs Eukaryotic DNA', level: 2 },
    },
    {
      id: 'table-prok-euk',
      type: 'comparisonTable',
      data: {
        caption: 'Key differences in DNA structure between prokaryotic and eukaryotic cells.',
        headers: ['Feature', 'Prokaryotic', 'Eukaryotic'],
        rows: [
          ['Shape', 'Circular', 'Linear (multiple chromosomes)'],
          ['Location', 'In cytoplasm (no nucleus)', 'In nucleus (nuclear envelope)'],
          ['Associated proteins (histones)?', 'No', 'Yes (DNA wound around histone proteins)'],
          ['Additional DNA', 'Plasmids (small circular DNA)', 'Mitochondria / chloroplast DNA'],
          ['Size', 'Smaller', 'Much larger'],
        ],
      },
    },
    {
      id: 'callout-chargaff',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Chargaff’s Rule',
        text: 'A DNA sample contains 22% thymine (T).\n\nStep 1: Since A pairs with T, %A = %T = 22%.\nStep 2: %A + %T = 22% + 22% = 44%.\nStep 3: %C + %G = 100% \u2212 44% = 56%.\nStep 4: Since C pairs with G, %C = %G = 56% \u00f7 2 = 28%.\n\nAnswer: A = 22%, T = 22%, C = 28%, G = 28%.',
      },
    },
    {
      id: 'checklist-dna',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the three components of a DNA nucleotide', checked: false },
          { text: 'Explain complementary base pairing and the number of H-bonds for A-T and C-G', checked: false },
          { text: 'Explain what antiparallel means and apply Chargaff’s rule', checked: false },
          { text: 'List three differences between DNA and RNA', checked: false },
          { text: 'Describe the structure and function of mRNA, tRNA, and rRNA', checked: false },
          { text: 'Compare prokaryotic and eukaryotic DNA (circular/linear, histones, plasmids)', checked: false },
        ],
      },
    },
    {
      id: 'summary-dna',
      type: 'summary',
      data: { text: 'DNA nucleotides = deoxyribose + phosphate + base (A/T/C/G). Two antiparallel strands joined by H-bonds: A=T (2) and C\u2261G (3), forming a double helix. Chargaff’s rule: %A = %T; %C = %G. RNA differs: ribose sugar, uracil instead of thymine, usually single-stranded. mRNA carries code from DNA to ribosome; tRNA brings amino acids (has anticodon loop); rRNA forms ribosome. Prokaryotic DNA: circular, no histones, plasmids; Eukaryotic: linear chromosomes, wound around histones, in nucleus.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-nucleotide', prompt: 'Name the three components of a DNA nucleotide. Name the four DNA bases.' },
      { id: 'cue-2', blockId: 'list-double-helix', prompt: 'Explain what antiparallel means. How many hydrogen bonds join A-T and C-G base pairs?' },
      { id: 'cue-3', blockId: 'callout-chargaff', prompt: 'State Chargaff’s rule. If a DNA sample is 18% guanine, what are the percentages of the other three bases?' },
      { id: 'cue-4', blockId: 'list-rna-diff', prompt: 'Give three structural differences between DNA and RNA.' },
      { id: 'cue-5', blockId: 'table-rna-types', prompt: 'Describe the structure and function of mRNA and tRNA.' },
    ],
    summaryText: 'DNA nucleotide: deoxyribose + phosphate + base (A/T/C/G). Double helix: 2 antiparallel strands, A=T (2 H-bonds), C\u2261G (3 H-bonds). Chargaff: %A=%T, %C=%G. RNA: ribose, uracil, single-stranded. mRNA: carries code to ribosome. tRNA: brings amino acids, has anticodon. rRNA: forms ribosomes. Prokaryotic: circular DNA, no histones, plasmids. Eukaryotic: linear chromosomes, histones, in nucleus.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'DNA structure and Watson-Crick model', detail: 'DNA nucleotide structure, complementary base pairing, and the double helix model described in AQA A Level Biology Student Book 1, Chapter 4.', year: '2023', source: 'AQA A Level Biology Student Book 1, Chapter 4, pp65-72', tags: ['DNA', 'RNA', 'molecular-biology'] },
  ],
};
