export const note_olevel_biology_17_17_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/17 Inheritance/17-3-protein-synthesis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the role of DNA in protein synthesis. Explain transcription (DNA → mRNA) and translation (mRNA → protein at ribosome). Define codon, anticodon, and state the role of tRNA.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'DNA as the Code for Proteins', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>DNA</strong> (deoxyribonucleic acid) carries the genetic code as a sequence of <strong>bases</strong> (adenine, thymine, guanine, cytosine). Every three consecutive bases form a <strong>codon</strong>, each coding for a specific <strong>amino acid</strong>. The sequence of codons in a gene determines the sequence of amino acids in a protein, and therefore the protein\'s structure and function.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Molecules in Protein Synthesis',
        text: '<strong>DNA:</strong> double-stranded, contains the master code; stays in the nucleus.<br/><strong>mRNA</strong> (messenger RNA): single-stranded; copy of one DNA strand; carries the code out of the nucleus to ribosomes.<br/><strong>tRNA</strong> (transfer RNA): carries specific amino acids to the ribosome; has an <strong>anticodon</strong> (3 bases) complementary to the mRNA codon.<br/><strong>Ribosome:</strong> organelle in cytoplasm where translation occurs; assembles the polypeptide chain.<br/><strong>Codon:</strong> triplet of bases on mRNA coding for one amino acid.<br/><strong>Anticodon:</strong> complementary triplet of bases on tRNA.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Stage 1: Transcription (Nucleus)', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'The relevant section of the <strong>DNA double helix unwinds and unzips</strong> (hydrogen bonds between base pairs break).' },
          { text: 'The enzyme <strong>RNA polymerase</strong> moves along the template (antisense) strand of DNA.' },
          { text: 'Free <strong>RNA nucleotides</strong> align opposite complementary DNA bases and are joined together, forming a strand of <strong>mRNA</strong> (using complementary base pairing: A↔U, T↔A, G↔C, C↔G — note: RNA has <strong>uracil (U)</strong> instead of thymine).' },
          { text: 'The mRNA strand is released and <strong>leaves the nucleus through nuclear pores</strong>, moving to the cytoplasm.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Stage 2: Translation (Ribosome)', level: 2 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'mRNA attaches to a <strong>ribosome</strong> in the cytoplasm.' },
          { text: '<strong>tRNA</strong> molecules bring specific amino acids to the ribosome. Each tRNA has a specific <strong>anticodon</strong> (3 bases) that pairs with the complementary <strong>codon</strong> on the mRNA.' },
          { text: 'When a tRNA anticodon pairs with the mRNA codon, the amino acid it carries is added to the growing <strong>polypeptide chain</strong> via a <strong>peptide bond</strong>.' },
          { text: 'The ribosome moves along the mRNA, reading each codon in turn, until a stop codon is reached.' },
          { text: 'The completed <strong>polypeptide/protein</strong> is released. It may fold into its 3D shape or be modified further.' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Overview of transcription (nucleus) and translation (ribosome)',
        svg: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="520" height="260" fill="#fafafa" rx="8"/>
  <!-- Nucleus region -->
  <ellipse cx="130" cy="130" rx="115" ry="100" fill="#e3f2fd" stroke="#1e88e5" stroke-width="2" stroke-dasharray="6"/>
  <text x="130" y="22" text-anchor="middle" fill="#1e88e5" font-size="12" font-weight="bold">NUCLEUS</text>
  <!-- DNA double helix simplified -->
  <path d="M60,60 Q90,80 60,100 Q90,120 60,140 Q90,160 60,180" stroke="#5c6bc0" stroke-width="3" fill="none"/>
  <path d="M90,60 Q60,80 90,100 Q60,120 90,140 Q60,160 90,180" stroke="#5c6bc0" stroke-width="3" fill="none"/>
  <text x="75" y="200" text-anchor="middle" fill="#3949ab" font-size="11">DNA</text>
  <!-- mRNA being made -->
  <path d="M100,110 Q135,80 165,110" stroke="#e65100" stroke-width="2.5" fill="none"/>
  <text x="140" y="75" text-anchor="middle" fill="#e65100" font-size="11">mRNA</text>
  <text x="140" y="87" text-anchor="middle" fill="#e65100" font-size="10">(being made)</text>
  <!-- Transcription label -->
  <text x="130" y="218" text-anchor="middle" fill="#1565c0" font-size="11" font-weight="bold">TRANSCRIPTION</text>
  <!-- Arrow from nucleus to cytoplasm -->
  <line x1="245" y1="130" x2="285" y2="130" stroke="#555" stroke-width="2"/>
  <polygon points="285,124 295,130 285,136" fill="#555"/>
  <text x="268" y="122" text-anchor="middle" fill="#555" font-size="10">mRNA</text>
  <text x="268" y="134" text-anchor="middle" fill="#555" font-size="10">exits</text>
  <text x="268" y="146" text-anchor="middle" fill="#555" font-size="10">nucleus</text>
  <!-- Cytoplasm / Ribosome region -->
  <rect x="295" y="75" width="210" height="150" rx="10" fill="#f3e5f5" stroke="#8e24aa" stroke-width="1.5"/>
  <text x="400" y="92" text-anchor="middle" fill="#6a1b9a" font-size="11" font-weight="bold">CYTOPLASM / RIBOSOME</text>
  <!-- Ribosome shape -->
  <ellipse cx="400" cy="145" rx="45" ry="22" fill="#ce93d8" stroke="#8e24aa" stroke-width="2"/>
  <text x="400" y="148" text-anchor="middle" fill="#4a148c" font-weight="bold" font-size="11">Ribosome</text>
  <!-- mRNA strand at ribosome -->
  <line x1="310" y1="145" x2="490" y2="145" stroke="#e65100" stroke-width="2.5"/>
  <!-- Codons -->
  <text x="335" y="162" text-anchor="middle" fill="#e65100" font-size="9">AUG</text>
  <text x="360" y="162" text-anchor="middle" fill="#e65100" font-size="9">UUU</text>
  <text x="385" y="162" text-anchor="middle" fill="#e65100" font-size="9">GCC</text>
  <!-- tRNA -->
  <path d="M360,145 L360,108 Q370,98 380,108 L380,145" stroke="#388e3c" stroke-width="2" fill="#c8e6c9"/>
  <text x="370" y="105" text-anchor="middle" fill="#1b5e20" font-size="9">tRNA</text>
  <!-- Amino acid on tRNA -->
  <circle cx="370" cy="95" r="10" fill="#ffb300"/>
  <text x="370" y="99" text-anchor="middle" fill="#333" font-size="9">AA</text>
  <!-- Polypeptide chain -->
  <circle cx="430" cy="115" r="9" fill="#ffb300" opacity="0.7"/>
  <circle cx="448" cy="115" r="9" fill="#ff8f00" opacity="0.7"/>
  <circle cx="466" cy="115" r="9" fill="#ffa726" opacity="0.7"/>
  <text x="450" y="100" text-anchor="middle" fill="#555" font-size="9">Growing chain</text>
  <!-- Translation label -->
  <text x="400" y="215" text-anchor="middle" fill="#6a1b9a" font-size="11" font-weight="bold">TRANSLATION</text>
  <text x="10" y="15" fill="#333" font-size="12" font-weight="bold">Protein Synthesis: Transcription → Translation</text>
</svg>`
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Transcription vs Translation',
        headers: ['Feature', 'Transcription', 'Translation'],
        rows: [
          ['Location', 'Nucleus', 'Ribosome (cytoplasm)'],
          ['Input', 'DNA template strand', 'mRNA strand'],
          ['Output', 'mRNA strand', 'Polypeptide (protein)'],
          ['Key molecule made', 'mRNA', 'Protein / polypeptide'],
          ['Base pairing rule', 'DNA → RNA (T pairs with A; A pairs with U)', 'mRNA codon pairs with tRNA anticodon'],
          ['RNA involved', 'mRNA produced', 'mRNA read; tRNA brings amino acids']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'RNA vs DNA Base Differences',
        text: 'RNA uses <strong>Uracil (U)</strong> instead of Thymine (T). So when copying a DNA strand during transcription: DNA base <strong>A</strong> → mRNA base <strong>U</strong> (not T). All other pairing rules remain the same: G↔C, C↔G, T (DNA) ↔ A (RNA).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Protein synthesis has two stages. Transcription (nucleus): DNA unzips, RNA polymerase makes an mRNA copy using complementary base pairing (A↔U, T↔A, G↔C). mRNA leaves nucleus. Translation (ribosome): tRNA brings amino acids matching the mRNA codons via anticodon complementary base pairing; amino acids are joined by peptide bonds to form a polypeptide/protein.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Transcription (nucleus): DNA → mRNA (RNA polymerase, complementary base pairing, U replaces T). Translation (ribosome): mRNA codon pairs with tRNA anticodon; amino acids join by peptide bonds → protein.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is a codon and what is an anticodon?', answer: 'Codon: a triplet of bases on mRNA that codes for a specific amino acid. Anticodon: a complementary triplet of bases on tRNA that pairs with the mRNA codon.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Describe transcription in three steps.', answer: '(1) DNA double helix unwinds and unzips in the nucleus. (2) RNA polymerase uses the template strand to synthesise a complementary mRNA strand (A↔U, T↔A, G↔C). (3) mRNA leaves nucleus through nuclear pores.' },
      { id: 'cue-3', blockId: 'list-2', prompt: 'Describe translation in three steps.', answer: '(1) mRNA attaches to ribosome in cytoplasm. (2) tRNA molecules bring specific amino acids; anticodon pairs with mRNA codon. (3) Amino acids are joined by peptide bonds to build the polypeptide; ribosome moves along mRNA until stop codon is reached.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'How does RNA differ from DNA in terms of bases?', answer: 'RNA contains uracil (U) instead of thymine (T). So in transcription, DNA adenine (A) pairs with mRNA uracil (U).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_17_17_2;
