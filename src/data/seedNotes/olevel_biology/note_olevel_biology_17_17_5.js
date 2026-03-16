export const note_olevel_biology_17_17_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/17 Inheritance/17-6-1-monohybrid-inheritance.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use Punnett squares to predict outcomes of monohybrid crosses and interpret phenotype and genotype ratios.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Key Genetic Terms', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Essential genetics vocabulary',
        headers: ['Term', 'Definition', 'Example'],
        rows: [
          ['Dominant', 'Allele expressed when one or two copies present', 'T (tall) — expressed in TT and Tt'],
          ['Recessive', 'Allele only expressed when two copies present', 't (short) — only expressed in tt'],
          ['Homozygous', 'Two identical alleles for a gene', 'TT or tt'],
          ['Heterozygous', 'Two different alleles for a gene', 'Tt'],
          ['Genotype', 'The alleles an organism carries', 'Tt, TT, tt'],
          ['Phenotype', 'The observable characteristic shown', 'Tall, short'],
          ['Carrier', 'Heterozygous individual carrying a recessive allele but showing dominant phenotype', 'Ff for cystic fibrosis']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Punnett Square Method', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Tall × Tall (Heterozygous)',
        text: 'Parents: Tt (tall) × Tt (tall)<br/>Gametes: T or t from each parent<br/><br/>Punnett square:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;t<br/>T | TT | Tt |<br/>t | Tt | tt |<br/><br/>Genotype ratio: 1 TT : 2 Tt : 1 tt<br/>Phenotype ratio: <strong>3 tall : 1 short</strong><br/><br/>Probability of tall offspring = 75%; short = 25%'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Punnett square: Tt × Tt cross showing 3:1 phenotype ratio',
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="400" height="300" fill="#f0fdf4" rx="12"/>
  <text x="200" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">Monohybrid Cross: Tt × Tt</text>
  <!-- Parent labels -->
  <text x="80" y="55" text-anchor="middle" font-size="12" fill="#166534">Parent genotypes: <tspan font-weight="bold">Tt × Tt</tspan></text>
  <!-- Grid -->
  <rect x="140" y="70" width="220" height="180" fill="white" stroke="#16a34a" stroke-width="2"/>
  <!-- Column headers -->
  <text x="195" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">T</text>
  <text x="305" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">t</text>
  <!-- Row headers -->
  <text x="125" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">T</text>
  <text x="125" y="235" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">t</text>
  <!-- Dividers -->
  <line x1="250" y1="70" x2="250" y2="250" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="140" y1="160" x2="360" y2="160" stroke="#16a34a" stroke-width="1.5"/>
  <!-- Cell contents -->
  <text x="195" y="122" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">TT</text>
  <text x="195" y="140" text-anchor="middle" font-size="10" fill="#16a34a">Tall</text>
  <text x="305" y="122" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Tt</text>
  <text x="305" y="140" text-anchor="middle" font-size="10" fill="#16a34a">Tall</text>
  <text x="195" y="202" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Tt</text>
  <text x="195" y="220" text-anchor="middle" font-size="10" fill="#16a34a">Tall</text>
  <text x="305" y="202" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">tt</text>
  <text x="305" y="220" text-anchor="middle" font-size="10" fill="#dc2626">Short</text>
  <!-- Results -->
  <text x="200" y="272" text-anchor="middle" font-size="11" fill="#166534">Phenotype ratio: <tspan font-weight="bold">3 Tall : 1 Short</tspan></text>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Recessive Disease — Carrier Crosses', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Cystic Fibrosis (Carrier × Carrier)',
        text: 'Cystic fibrosis alleles: <strong>F</strong> (normal, dominant) and <strong>f</strong> (cystic fibrosis, recessive)<br/>Carriers: Ff × Ff<br/><br/>Punnett square gives: FF (1) : Ff (2) : ff (1)<br/>Phenotypes: 3 normal : 1 cystic fibrosis<br/><br/>A <strong>carrier (Ff)</strong> has the normal phenotype but can pass the recessive allele to offspring. Two carriers have a <strong>25% chance</strong> of an affected child each pregnancy.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always show <strong>gametes</strong> as well as the Punnett square.<br/>• State phenotype ratios, not just genotype ratios.<br/>• Each pregnancy is <strong>independent</strong> — 25% chance does not mean 1 in every 4 children will be affected.<br/>• Use capital/lowercase consistently: capital = dominant, lowercase = recessive.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Monohybrid inheritance involves one gene with dominant and recessive alleles. Punnett squares predict offspring ratios. A Tt × Tt cross gives a 3:1 phenotype ratio. Carriers (Ff) are phenotypically normal but can pass on recessive alleles.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Monohybrid cross: Tt × Tt → 3 tall : 1 short (3:1 ratio). Carriers are heterozygous (Ff) — normal phenotype but carry recessive allele. Punnett square shows all possible genotypes.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What phenotype ratio is produced from a Tt × Tt cross?', answer: '3 tall : 1 short (75% tall, 25% short).' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Define "carrier" in the context of genetics.', answer: 'A carrier is a heterozygous individual (e.g. Ff) who shows the dominant phenotype but carries one recessive allele that can be passed to offspring.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Two parents are both carriers for cystic fibrosis. What is the probability of each child having cystic fibrosis?', answer: '25% (1 in 4 chance), because Ff × Ff gives genotype ratio 1FF : 2Ff : 1ff, so ff (affected) = 1/4.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_17_17_5;
