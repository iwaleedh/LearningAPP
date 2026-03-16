export const note_olevel_biology_4_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/4 Biological Molecules/4-2-1-dna-structure-and-function.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the structure of DNA including the double helix, nucleotide components, and base pairing rules; and explain the function of DNA in storing and transmitting genetic information.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is DNA?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: DNA',
        text: '<strong>DNA</strong> (deoxyribonucleic acid) is a <strong>double-stranded molecule</strong> that carries the <strong>genetic information</strong> of an organism. It is found in the <strong>nucleus</strong> of eukaryotic cells (also in mitochondria and chloroplasts).<br/><br/>DNA is arranged into <strong>chromosomes</strong>, and specific sections of DNA that code for a protein are called <strong>genes</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Structure of DNA', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'DNA is a <strong>polymer</strong> made of repeating units called <strong>nucleotides</strong>. Each nucleotide consists of three components joined together: (1) a <strong>deoxyribose sugar</strong> (5-carbon sugar), (2) a <strong>phosphate group</strong>, and (3) one of four <strong>nitrogenous bases</strong>. The nucleotides are linked together through their phosphate and sugar groups to form a <strong>sugar-phosphate backbone</strong>.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Four Bases and Base Pairing',
        text: 'The four bases in DNA are:<br/>• <strong>Adenine (A)</strong><br/>• <strong>Thymine (T)</strong><br/>• <strong>Cytosine (C)</strong><br/>• <strong>Guanine (G)</strong><br/><br/><strong>Complementary base pairing rules (always paired):</strong><br/>• <strong>A pairs with T</strong> (and T with A)<br/>• <strong>C pairs with G</strong> (and G with C)<br/><br/>The two strands are held together by <strong>hydrogen bonds</strong> between complementary base pairs.'
      }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The two strands of DNA are <strong>antiparallel</strong> (run in opposite directions) and twist around each other to form the famous <strong>double helix</strong> shape, first described by Watson and Crick in 1953 using X-ray crystallography data from Rosalind Franklin. The bases point inward and pair up, while the sugar-phosphate backbone forms the outer "rails" of the helix.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Structure of the DNA double helix showing base pairs and the sugar-phosphate backbone',
        svg: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="11">
  <rect width="480" height="340" fill="#f0fdf4" rx="12"/>
  <text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">DNA Double Helix Structure</text>

  <!-- Left backbone (sugar-phosphate) -->
  <path d="M 80,40 C 60,80 100,120 80,160 C 60,200 100,240 80,280 C 60,320 100,335 80,340" stroke="#16a34a" stroke-width="8" fill="none" stroke-linecap="round"/>
  <!-- Right backbone -->
  <path d="M 220,40 C 240,80 200,120 220,160 C 240,200 200,240 220,280 C 240,320 200,335 220,340" stroke="#16a34a" stroke-width="8" fill="none" stroke-linecap="round"/>

  <!-- Base pair rungs -->
  <!-- Rung 1: A-T at ~y=70 -->
  <line x1="82" y1="72" x2="218" y2="72" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="88" y="62" width="36" height="20" rx="4" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="106" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">A</text>
  <rect x="176" y="62" width="36" height="20" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="194" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">T</text>

  <!-- Rung 2: C-G at ~y=110 -->
  <line x1="82" y1="112" x2="218" y2="112" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="88" y="102" width="36" height="20" rx="4" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="106" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">C</text>
  <rect x="176" y="102" width="36" height="20" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="194" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#4c1d95">G</text>

  <!-- Rung 3: T-A at ~y=150 -->
  <line x1="82" y1="152" x2="218" y2="152" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="88" y="142" width="36" height="20" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="106" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">T</text>
  <rect x="176" y="142" width="36" height="20" rx="4" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="194" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">A</text>

  <!-- Rung 4: G-C at ~y=190 -->
  <line x1="82" y1="192" x2="218" y2="192" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="88" y="182" width="36" height="20" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="106" y="196" text-anchor="middle" font-size="11" font-weight="bold" fill="#4c1d95">G</text>
  <rect x="176" y="182" width="36" height="20" rx="4" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="194" y="196" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">C</text>

  <!-- Rung 5: A-T at ~y=230 -->
  <line x1="82" y1="232" x2="218" y2="232" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="88" y="222" width="36" height="20" rx="4" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="106" y="236" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">A</text>
  <rect x="176" y="222" width="36" height="20" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="194" y="236" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">T</text>

  <!-- Rung 6: C-G at ~y=270 -->
  <line x1="82" y1="272" x2="218" y2="272" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="88" y="262" width="36" height="20" rx="4" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="106" y="276" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">C</text>
  <rect x="176" y="262" width="36" height="20" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="194" y="276" text-anchor="middle" font-size="11" font-weight="bold" fill="#4c1d95">G</text>

  <!-- Labels left column -->
  <text x="40" y="75" text-anchor="middle" font-size="10" fill="#374151">Strand 1</text>
  <text x="40" y="190" text-anchor="middle" font-size="10" fill="#374151">5' → 3'</text>

  <!-- Labels right column -->
  <text x="260" y="75" text-anchor="middle" font-size="10" fill="#374151">Strand 2</text>
  <text x="260" y="190" text-anchor="middle" font-size="10" fill="#374151">3' → 5'</text>

  <!-- Key / legend -->
  <rect x="295" y="40" width="170" height="200" rx="8" fill="white" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="380" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#111827">Key</text>
  <rect x="308" y="68" width="30" height="16" rx="3" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="348" y="80" font-size="10" fill="#374151">Adenine (A)</text>
  <rect x="308" y="90" width="30" height="16" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="348" y="102" font-size="10" fill="#374151">Thymine (T)</text>
  <rect x="308" y="112" width="30" height="16" rx="3" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="348" y="124" font-size="10" fill="#374151">Cytosine (C)</text>
  <rect x="308" y="134" width="30" height="16" rx="3" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="348" y="146" font-size="10" fill="#374151">Guanine (G)</text>
  <line x1="308" y1="162" x2="338" y2="162" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
  <text x="348" y="166" font-size="10" fill="#374151">Sugar-phosphate</text>
  <text x="348" y="178" font-size="10" fill="#374151">backbone</text>
  <line x1="308" y1="192" x2="338" y2="192" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="348" y="196" font-size="10" fill="#374151">Hydrogen bonds</text>
  <text x="348" y="208" font-size="10" fill="#374151">(between bases)</text>

  <!-- Base pairing summary -->
  <rect x="295" y="255" width="170" height="60" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="380" y="271" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Base Pairing Rules</text>
  <text x="380" y="288" text-anchor="middle" font-size="12" fill="#1e40af">A</text>
  <text x="380" y="288" text-anchor="start" dx="10" font-size="10" fill="#374151"> pairs with </text>
  <text x="430" y="288" font-size="12" font-weight="bold" fill="#92400e">T</text>
  <text x="380" y="305" text-anchor="middle" font-size="12" fill="#9d174d">C</text>
  <text x="380" y="305" text-anchor="start" dx="10" font-size="10" fill="#374151"> pairs with </text>
  <text x="430" y="305" font-size="12" font-weight="bold" fill="#4c1d95">G</text>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Function of DNA', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'DNA functions as the <strong>hereditary material</strong> of an organism — it carries all genetic information in the sequence of its bases. A <strong>gene</strong> is a specific sequence of DNA bases that codes for a particular <strong>protein</strong> (usually an enzyme or structural protein). The sequence of bases acts as a code — every three bases (a <strong>codon</strong>) codes for one amino acid, and the order of amino acids determines the protein produced.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Components of a DNA nucleotide',
        headers: ['Component', 'Description', 'Role in DNA'],
        rows: [
          ['Deoxyribose sugar', '5-carbon (pentose) sugar', 'Forms part of the sugar-phosphate backbone; connects to base and phosphate'],
          ['Phosphate group', 'Contains phosphorus (P) and oxygen', 'Links nucleotides together to form the backbone; gives DNA its negative charge'],
          ['Nitrogenous base', 'One of A, T, C, or G', 'Carries the genetic information; pairs with the complementary base on the opposite strand via hydrogen bonds']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gene Definition',
        text: 'A <strong>gene</strong> is a section (sequence) of DNA that codes for the production of a specific <strong>protein</strong>. The base sequence of a gene determines the amino acid sequence of the protein, which in turn determines the protein\'s structure and function.'
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'In DNA, <strong>A pairs with T</strong> (not U — uracil is found in RNA, not DNA). <strong>C pairs with G</strong>. These are the only correct pairings. Also remember: the two strands of DNA are <strong>complementary</strong> and <strong>antiparallel</strong>, not identical. Never say the strands are "the same".'
      }
    },
    {
      id: 'call-5',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If given one strand of DNA and asked for the complementary strand, apply the base pairing rules: A→T, T→A, C→G, G→C. For example: if one strand reads <strong>ATCGGA</strong>, the complementary strand reads <strong>TAGCCT</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'DNA is a double-stranded helix made of nucleotides, each containing deoxyribose sugar, a phosphate group, and a nitrogenous base (A, T, C, or G). Base pairing rules: A with T, C with G. The two strands are held together by hydrogen bonds. A gene is a section of DNA coding for a specific protein. The sequence of bases along DNA carries all the genetic information of an organism.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'DNA: double helix of nucleotides (deoxyribose + phosphate + base). Base pairs: A-T and C-G. Genes are sections of DNA coding for proteins.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Where is DNA found in a eukaryotic cell, and what is a gene?',
        answer: 'DNA is found in the nucleus (also in mitochondria and chloroplasts). A gene is a specific section of DNA that codes for the production of a particular protein.'
      },
      {
        id: 'cue-2',
        blockId: 'call-2',
        prompt: 'State the base pairing rules for DNA.',
        answer: 'Adenine (A) pairs with Thymine (T), and Cytosine (C) pairs with Guanine (G). The base pairs are held together by hydrogen bonds.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'What are the three components of a DNA nucleotide?',
        answer: 'A DNA nucleotide consists of: (1) a deoxyribose (5-carbon) sugar, (2) a phosphate group, and (3) a nitrogenous base (either A, T, C, or G).'
      },
      {
        id: 'cue-4',
        blockId: 'call-5',
        prompt: 'What is the complementary DNA strand for the sequence TACGGT?',
        answer: 'Applying base pairing rules (A↔T, C↔G): T→A, A→T, C→G, G→C, G→C, T→A. The complementary strand is ATGCCA.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_4_4_1;
