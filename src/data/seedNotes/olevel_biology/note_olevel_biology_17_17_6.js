export const note_olevel_biology_17_17_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/17 Inheritance/17-7-1-codominance-and-sex-linked.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain codominance using blood groups, and predict outcomes of sex-linked inheritance crosses.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Codominance', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Codominance Definition',
        text: '<strong>Codominance</strong> occurs when two alleles are <strong>both expressed equally</strong> in the heterozygote — neither is dominant over the other.<br/><br/>Example: <strong>ABO blood groups</strong> — alleles I<sup>A</sup>, I<sup>B</sup>, and I<sup>O</sup>.<br/>I<sup>A</sup> and I<sup>B</sup> are codominant; I<sup>O</sup> is recessive to both.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'ABO blood group genotypes and phenotypes',
        headers: ['Genotype', 'Blood Group (Phenotype)', 'Antigens on red blood cells'],
        rows: [
          ['I\u1d2aI\u1d2a', 'A', 'A antigens only'],
          ['I\u1d2aI\u1d52', 'A', 'A antigens only'],
          ['I\u1d2bI\u1d2b', 'B', 'B antigens only'],
          ['I\u1d2bI\u1d52', 'B', 'B antigens only'],
          ['I\u1d2aI\u1d2b', 'AB (codominant)', 'Both A and B antigens'],
          ['I\u1d52I\u1d52', 'O', 'No A or B antigens']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Blood Group Cross',
        text: 'Parents: Blood group A (I\u1d2aI\u1d52) × Blood group B (I\u1d2bI\u1d52)<br/><br/>Gametes: I\u1d2a or I\u1d52 from one parent; I\u1d2b or I\u1d52 from other.<br/><br/>Offspring: I\u1d2aI\u1d2b (AB), I\u1d2aI\u1d52 (A), I\u1d2bI\u1d52 (B), I\u1d52I\u1d52 (O)<br/>Ratio: 1 AB : 1 A : 1 B : 1 O — all four blood groups possible!'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Sex-Linked Inheritance', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'A <strong>sex-linked gene</strong> is located on one of the sex chromosomes (usually the X chromosome). Males (XY) have only one X chromosome, so they only need <strong>one copy</strong> of a recessive allele to show the condition. Females (XX) have two X chromosomes, so they need two recessive alleles to be affected.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Red-Green Colour Blindness — X-Linked Recessive',
        text: 'Alleles carried on X chromosome: <strong>X<sup>B</sup></strong> = normal colour vision; <strong>X<sup>b</sup></strong> = colour blind.<br/><br/><strong>Female genotypes:</strong><br/>X<sup>B</sup>X<sup>B</sup> = normal vision<br/>X<sup>B</sup>X<sup>b</sup> = carrier (normal phenotype, carries recessive allele)<br/>X<sup>b</sup>X<sup>b</sup> = colour blind<br/><br/><strong>Male genotypes:</strong><br/>X<sup>B</sup>Y = normal vision<br/>X<sup>b</sup>Y = colour blind (only ONE recessive allele needed)'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Punnett square: carrier female × normal male for colour blindness',
        svg: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="400" height="290" fill="#fdf4ff" rx="12"/>
  <text x="200" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce">Sex-Linked Cross: Carrier Female × Normal Male</text>
  <text x="200" y="40" text-anchor="middle" font-size="11" fill="#7e22ce">X\u1d2aX\u1d2a\u1d2c (carrier female) × X\u1d2aY (normal male)</text>
  <!-- Headers -->
  <text x="185" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">X\u1d2a</text>
  <text x="295" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Y</text>
  <text x="95" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">X\u1d2a</text>
  <text x="95" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">X\u1d2a\u1d2c</text>
  <!-- Grid -->
  <rect x="120" y="75" width="240" height="170" fill="white" stroke="#7e22ce" stroke-width="2"/>
  <line x1="240" y1="75" x2="240" y2="245" stroke="#7e22ce" stroke-width="1.5"/>
  <line x1="120" y1="160" x2="360" y2="160" stroke="#7e22ce" stroke-width="1.5"/>
  <!-- Cell contents -->
  <text x="180" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">X\u1d2aX\u1d2a</text>
  <text x="180" y="128" text-anchor="middle" font-size="10" fill="#166534">Normal female</text>
  <text x="300" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">X\u1d2aY</text>
  <text x="300" y="128" text-anchor="middle" font-size="10" fill="#166534">Normal male</text>
  <text x="180" y="196" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce">X\u1d2aX\u1d2a\u1d2c</text>
  <text x="180" y="212" text-anchor="middle" font-size="10" fill="#7e22ce">Carrier female</text>
  <text x="300" y="196" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">X\u1d2a\u1d2cY</text>
  <text x="300" y="212" text-anchor="middle" font-size="10" fill="#dc2626">Colour blind male</text>
  <!-- Result -->
  <text x="200" y="262" text-anchor="middle" font-size="11" fill="#374151">25% of sons are colour blind; daughters are normal or carriers</text>
</svg>`
      }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Why males are more commonly affected by X-linked recessive conditions',
        headers: ['Sex', 'Chromosomes', 'Alleles needed to be affected', 'Result'],
        rows: [
          ['Male', 'XY — only one X', 'Only ONE recessive allele (X\u1d2a\u1d2cY)', 'More commonly affected'],
          ['Female', 'XX — two X chromosomes', 'TWO recessive alleles (X\u1d2a\u1d2cX\u1d2a\u1d2c)', 'Less commonly affected; can be carrier']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Codominance: both alleles expressed in heterozygote (e.g. blood group AB = I\u1d2aI\u1d2b). Sex-linked conditions (e.g. colour blindness) are carried on X chromosome. Males (XY) need only one recessive allele to be affected; females (XX) can be carriers.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Codominance: both alleles expressed (e.g. AB blood group). X-linked recessive: males need only 1 recessive allele to be affected; females can be carriers.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is codominance? Give one example.', answer: 'Codominance is when both alleles are expressed equally in the heterozygote. Example: ABO blood groups — genotype IAIB gives blood group AB (both A and B antigens expressed).' },
      { id: 'cue-2', blockId: 'call-3', prompt: 'Why are males more likely to be colour blind than females?', answer: 'Males have only one X chromosome (XY), so one copy of the recessive colour blind allele (X\u1d2a\u1d2c) is enough to cause the condition. Females (XX) need two copies, so they are more often carriers.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'What blood group does a person with genotype IAIB have?', answer: 'Blood group AB — since IA and IB are codominant, both antigens are expressed on the red blood cell surface.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_17_17_6;
