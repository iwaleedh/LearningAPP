export const note_biology_1_2_13 = {
  blocks: [
    {
      id: 'obj-tt',
      type: 'objective',
      data: { text: 'Describe the processes of transcription and translation, including the roles of RNA polymerase, mRNA codons, tRNA anticodons, and ribosomes in protein synthesis.' },
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Overview: Gene \u2192 Protein', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: { text: 'Protein synthesis involves two stages: <strong>transcription</strong> (in the nucleus) and <strong>translation</strong> (at ribosomes in the cytoplasm). The DNA sequence of a gene is first copied into a mobile mRNA molecule, which then acts as a template for building a polypeptide chain.' },
    },
    {
      id: 'callout-central-dogma',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Central Dogma',
        text: 'DNA \u2192 (Transcription) \u2192 mRNA \u2192 (Translation) \u2192 Protein\n\nDNA stays in the nucleus as the master copy. mRNA is a temporary messenger that carries the code out to the ribosomes.',
      },
    },
    {
      id: 'h-transcription',
      type: 'heading',
      data: { text: 'Transcription (in the Nucleus)', level: 2 },
    },
    {
      id: 'list-transcription',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>RNA polymerase</strong> binds to the promoter region of the DNA at the start of the gene.',
          'RNA polymerase unwinds a section of the DNA double helix (breaks H-bonds) and moves along the <strong>template strand</strong> (antisense strand) in the 3′\u21925′ direction.',
          'Free RNA nucleotides pair with complementary bases on the template strand: A pairs with U (uracil, not thymine); T pairs with A; C pairs with G.',
          'RNA polymerase catalyses the formation of phosphodiester bonds between the RNA nucleotides, building a strand of <strong>pre-mRNA</strong> (5′\u21923′).',
          'The DNA strands re-pair behind RNA polymerase. The pre-mRNA strand detaches when RNA polymerase reaches a terminator sequence.',
          '<strong>RNA processing</strong>: the pre-mRNA contains non-coding sequences called <strong>introns</strong> as well as coding sequences called <strong>exons</strong>. The introns are removed (spliced out) and the exons join together to form the mature <strong>mRNA</strong>.',
          'The mature mRNA leaves the nucleus through a <strong>nuclear pore</strong> and moves to ribosomes in the cytoplasm.',
        ],
      },
    },
    {
      id: 'svg-transcription',
      type: 'svg',
      data: {
        caption: 'Transcription: RNA polymerase reads the template DNA strand and builds a complementary mRNA strand. Introns are spliced out to give mature mRNA.',
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="560" height="220" fill="#f8f9ff" rx="8"/><text x="280" y="18" fill="#555" font-size="11" text-anchor="middle">NUCLEUS</text><rect x="10" y="22" width="540" height="150" rx="8" fill="#e8f4f8" opacity="0.6"/><text x="50" y="50" fill="#3498db" font-size="10">Coding strand (5′\u21923′)</text><text x="50" y="80" fill="#c0392b" font-size="10">Template strand (3′\u21925′)</text><g font-size="10" text-anchor="middle"><rect x="120" y="38" width="20" height="15" rx="2" fill="#3498db"/><text x="130" y="49" fill="white">A</text><rect x="145" y="38" width="20" height="15" rx="2" fill="#27ae60"/><text x="155" y="49" fill="white">T</text><rect x="170" y="38" width="20" height="15" rx="2" fill="#e74c3c"/><text x="180" y="49" fill="white">G</text><rect x="195" y="38" width="20" height="15" rx="2" fill="#f39c12"/><text x="205" y="49" fill="white">C</text><rect x="220" y="38" width="20" height="15" rx="2" fill="#3498db"/><text x="230" y="49" fill="white">A</text><rect x="245" y="38" width="20" height="15" rx="2" fill="#f39c12"/><text x="255" y="49" fill="white">C</text><rect x="120" y="67" width="20" height="15" rx="2" fill="#f39c12"/><text x="130" y="78" fill="white">T</text><rect x="145" y="67" width="20" height="15" rx="2" fill="#e74c3c"/><text x="155" y="78" fill="white">A</text><rect x="170" y="67" width="20" height="15" rx="2" fill="#27ae60"/><text x="180" y="78" fill="white">C</text><rect x="195" y="67" width="20" height="15" rx="2" fill="#3498db"/><text x="205" y="78" fill="white">G</text><rect x="220" y="67" width="20" height="15" rx="2" fill="#f39c12"/><text x="230" y="78" fill="white">T</text><rect x="245" y="67" width="20" height="15" rx="2" fill="#27ae60"/><text x="255" y="78" fill="white">G</text></g><ellipse cx="310" cy="74" rx="28" ry="20" fill="#9b59b6" opacity="0.9"/><text x="310" y="71" fill="white" font-size="9" text-anchor="middle">RNA</text><text x="310" y="82" fill="white" font-size="9" text-anchor="middle">polymerase</text><g font-size="10" text-anchor="middle"><rect x="345" y="95" width="20" height="15" rx="2" fill="#e74c3c" opacity="0.9"/><text x="355" y="106" fill="white">U</text><rect x="370" y="95" width="20" height="15" rx="2" fill="#f39c12" opacity="0.9"/><text x="380" y="106" fill="white">A</text><rect x="395" y="95" width="20" height="15" rx="2" fill="#3498db" opacity="0.9"/><text x="405" y="106" fill="white">C</text><rect x="420" y="95" width="20" height="15" rx="2" fill="#27ae60" opacity="0.9"/><text x="430" y="106" fill="white">G</text><rect x="445" y="95" width="20" height="15" rx="2" fill="#e74c3c" opacity="0.9"/><text x="455" y="106" fill="white">U</text></g><text x="400" y="125" fill="#c0392b" font-size="10" text-anchor="middle">pre-mRNA being built (5′\u21923′)</text><text x="280" y="180" fill="#666" font-size="10" text-anchor="middle">Introns removed \u21d2 mature mRNA leaves through nuclear pore \u21d2 cytoplasm</text><line x1="280" y1="172" x2="280" y2="180" stroke="#666" stroke-width="1"/></svg>',
      },
    },
    {
      id: 'h-translation',
      type: 'heading',
      data: { text: 'Translation (at Ribosomes)', level: 2 },
    },
    {
      id: 'p-translation',
      type: 'paragraph',
      data: { text: 'Translation is the process by which the mRNA sequence is decoded to produce a specific sequence of amino acids (a polypeptide). It occurs at ribosomes, which may be free in the cytoplasm or attached to the rough endoplasmic reticulum.' },
    },
    {
      id: 'list-translation',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'The mature mRNA attaches to a <strong>ribosome</strong>. The ribosome holds the mRNA and the tRNAs in position.',
          'A <strong>tRNA</strong> molecule with the complementary <strong>anticodon</strong> binds to the first <strong>codon</strong> (sequence of 3 bases) on the mRNA at the P-site. Each tRNA carries a specific amino acid attached to its 3\'\u2212end.',
          'A second tRNA with a complementary anticodon binds to the next codon at the A-site of the ribosome.',
          'A <strong>peptide bond</strong> forms between the two amino acids (catalysed by rRNA in the ribosome \u2014 it acts as a <strong>ribozyme</strong>).',
          'The ribosome moves along the mRNA one codon at a time (5′\u21923′). The first tRNA leaves; the polypeptide chain grows by one amino acid.',
          'This continues until a <strong>stop codon</strong> is reached on the mRNA (UAA, UAG, or UGA). No tRNA has a complementary anticodon \u2014 the ribosome detaches and the completed polypeptide is released.',
        ],
      },
    },
    {
      id: 'svg-translation',
      type: 'svg',
      data: {
        caption: 'Translation: ribosome reads mRNA codons; tRNAs bring amino acids; peptide bonds form; polypeptide chain grows.',
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="560" height="230" fill="#f8f9ff" rx="8"/><rect x="60" y="100" width="440" height="25" rx="4" fill="#f5cba7"/><text x="280" y="116" fill="#922b21" font-size="10" text-anchor="middle">mRNA: 5′...AUG-UUC-GGA-CCU-UAA...3′</text><g font-size="10" text-anchor="middle"><rect x="145" y="90" width="40" height="55" rx="6" fill="#aed6f1" stroke="#2980b9" stroke-width="1.5"/><text x="165" y="105" fill="#1a5276">tRNA</text><text x="165" y="118" fill="#1a5276">U-A-C</text><text x="165" y="130" fill="#1a5276">anticodon</text><rect x="148" y="50" width="34" height="18" rx="3" fill="#27ae60"/><text x="165" y="62" fill="white">Met</text><line x1="165" y1="68" x2="165" y2="90" stroke="#27ae60" stroke-width="1.5"/><rect x="225" y="90" width="40" height="55" rx="6" fill="#a9dfbf" stroke="#1e8449" stroke-width="1.5"/><text x="245" y="105" fill="#1a5276">tRNA</text><text x="245" y="118" fill="#1a5276">A-A-G</text><text x="245" y="130" fill="#1a5276">anticodon</text><rect x="228" y="50" width="34" height="18" rx="3" fill="#e74c3c"/><text x="245" y="62" fill="white">Phe</text><line x1="245" y1="68" x2="245" y2="90" stroke="#e74c3c" stroke-width="1.5"/><line x1="190" y1="59" x2="228" y2="59" stroke="#666" stroke-width="1.5" stroke-dasharray="3,2"/><text x="210" y="56" fill="#666" font-size="9">peptide bond forming</text></g><rect x="130" y="88" width="165" height="80" rx="12" fill="none" stroke="#8e44ad" stroke-width="2.5" stroke-dasharray="6,3"/><text x="212" y="185" fill="#8e44ad" font-size="10" text-anchor="middle">Ribosome</text><text x="212" y="197" fill="#666" font-size="9" text-anchor="middle">(reads 5′\u21923′)</text><text x="430" y="170" fill="#c0392b" font-size="10" text-anchor="middle">Stop codon (UAA)</text><text x="430" y="182" fill="#c0392b" font-size="10" text-anchor="middle">\u2192 polypeptide released</text><text x="430" y="116" fill="#888" font-size="9" text-anchor="middle">Next codon (GGA)</text></svg>',
      },
    },
    {
      id: 'table-tt-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary comparison of transcription and translation.',
        headers: ['Feature', 'Transcription', 'Translation'],
        rows: [
          ['Location', 'Nucleus', 'Ribosomes (cytoplasm or RER)'],
          ['Template', 'DNA template strand', 'mRNA codons'],
          ['Product', 'Pre-mRNA \u2192 mature mRNA', 'Polypeptide (protein)'],
          ['Key enzyme/molecule', 'RNA polymerase', 'Ribosome (rRNA + ribosomal proteins)'],
          ['Monomer units', 'RNA nucleotides', 'Amino acids (carried by tRNA)'],
          ['Bond formed', 'Phosphodiester bonds', 'Peptide bonds'],
        ],
      },
    },
    {
      id: 'callout-vocab',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key Vocabulary',
        text: '<strong>Codon</strong> \u2014 a sequence of 3 consecutive bases on mRNA that encodes one amino acid.\n<strong>Anticodon</strong> \u2014 a sequence of 3 bases on tRNA that is complementary to an mRNA codon.\n<strong>Template strand</strong> \u2014 the DNA strand read by RNA polymerase (3′\u21925′).\n<strong>Coding strand</strong> \u2014 the non-template DNA strand; has the same sequence as the mRNA (with T instead of U).',
      },
    },
    {
      id: 'checklist-tt',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the role of RNA polymerase in transcription', checked: false },
          { text: 'Explain why uracil is used in mRNA instead of thymine', checked: false },
          { text: 'Describe how mRNA is processed between transcription and translation (splicing introns)', checked: false },
          { text: 'Describe the role of tRNA in translation, including anticodon-codon binding', checked: false },
          { text: 'Explain how a ribosome moves along mRNA and builds a polypeptide', checked: false },
          { text: 'State what causes translation to stop', checked: false },
        ],
      },
    },
    {
      id: 'summary-tt',
      type: 'summary',
      data: { text: 'Transcription (nucleus): RNA polymerase reads DNA template strand 3′\u21925′, builds complementary pre-mRNA (A\u2192U, T\u2192A, C\u2192G, G\u2192C). Introns spliced out \u2192 mature mRNA leaves via nuclear pores. Translation (ribosomes): ribosome attaches to mRNA; tRNA anticodon pairs with mRNA codon; tRNA delivers specific amino acid; peptide bond forms between adjacent amino acids; ribosome moves one codon along; continues until stop codon (UAA/UAG/UGA) \u2192 polypeptide released. RNA polymerase links nucleotides; ribosome (rRNA) catalyses peptide bonds.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-central-dogma', prompt: 'Summarise the central dogma. Where do transcription and translation each occur?' },
      { id: 'cue-2', blockId: 'h-transcription', prompt: 'Describe the role of RNA polymerase in transcription. Which DNA strand is used as the template?' },
      { id: 'cue-3', blockId: 'list-transcription', prompt: 'What happens to pre-mRNA before it leaves the nucleus? What is the difference between introns and exons?' },
      { id: 'cue-4', blockId: 'h-translation', prompt: 'Describe how a tRNA molecule delivers an amino acid during translation. What is an anticodon?' },
      { id: 'cue-5', blockId: 'list-translation', prompt: 'What happens when a ribosome reaches a stop codon? Name the three stop codons.' },
    ],
    summaryText: 'Transcription: RNA polymerase \u2192 reads DNA template strand \u2192 builds pre-mRNA \u2192 splice introns \u2192 mature mRNA leaves nucleus. Translation: ribosome + mRNA + tRNA; tRNA anticodon pairs with mRNA codon; tRNA brings amino acid; peptide bond forms; ribosome moves along; stop codon (UAA/UAG/UGA) \u2192 polypeptide released.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Transcription and translation', detail: 'RNA polymerase, pre-mRNA processing (intron splicing), tRNA anticodon-codon binding, ribosome movement, and stop codons all described in AQA A Level Biology Student Book 1, Chapter 4.', year: '2023', source: 'AQA A Level Biology Student Book 1, Chapter 4, pp74-77', tags: ['transcription', 'translation', 'protein-synthesis'] },
  ],
};
