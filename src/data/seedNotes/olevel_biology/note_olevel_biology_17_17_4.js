export const note_olevel_biology_17_17_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/17 Inheritance/17-5-meiosis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe meiosis as cell division that produces haploid gametes with genetic variation. Explain the importance of meiosis in sexual reproduction. Compare meiosis and mitosis.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Meiosis?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Meiosis</strong> is a type of cell division that occurs in the <strong>gonads</strong> (testes in males; ovaries in females) to produce <strong>gametes</strong> (sex cells — sperm and egg cells). Starting from one diploid parent cell (2n = 46 chromosomes), meiosis involves <strong>two successive divisions</strong> and produces <strong>four haploid daughter cells</strong> (n = 23 chromosomes), each genetically different from one another.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Meiosis at a Glance',
        text: '<strong>Location:</strong> testes (sperm production) and ovaries (egg production).<br/><strong>Input:</strong> 1 diploid cell (2n = 46 chromosomes).<br/><strong>Output:</strong> 4 haploid cells (n = 23 chromosomes), each genetically unique.<br/><strong>Purpose:</strong> produce gametes for sexual reproduction; maintain chromosome number across generations; introduce genetic variation.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Two Divisions of Meiosis', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Interphase:</strong> DNA replication occurs (same as before mitosis — chromosomes are duplicated into sister chromatids).' },
          { text: '<strong>Meiosis I (reduction division):</strong> homologous chromosome pairs line up together. <strong>Crossing over</strong> occurs — chromatids from homologous chromosomes exchange segments (increases genetic variation). Homologous pairs are pulled apart to opposite poles → produces two cells, each with 23 chromosomes (but each chromosome still has 2 chromatids). This halves the chromosome number.' },
          { text: '<strong>Meiosis II:</strong> the two cells divide again (no further DNA replication). Sister chromatids are separated → <strong>four haploid daughter cells</strong> produced, each with 23 single chromosomes. Due to crossing over and independent assortment, each of the 4 cells is genetically unique.' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Meiosis overview: 1 diploid cell → 4 haploid cells (gametes)',
        svg: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <rect width="520" height="220" fill="#fafafa" rx="8"/>
  <!-- Parent cell -->
  <ellipse cx="55" cy="110" rx="46" ry="55" fill="#e8eaf6" stroke="#3949ab" stroke-width="2"/>
  <text x="55" y="95" text-anchor="middle" fill="#1a237e" font-size="10" font-weight="bold">Parent</text>
  <text x="55" y="107" text-anchor="middle" fill="#1a237e" font-size="10" font-weight="bold">Cell</text>
  <text x="37" y="120" text-anchor="middle" fill="#5c6bc0" font-size="14">X</text>
  <text x="72" y="120" text-anchor="middle" fill="#9c27b0" font-size="14">X</text>
  <text x="55" y="138" text-anchor="middle" fill="#555" font-size="9">diploid (2n=4</text>
  <text x="55" y="148" text-anchor="middle" fill="#555" font-size="9">simplified)</text>
  <!-- Arrow Meiosis I -->
  <line x1="103" y1="110" x2="128" y2="110" stroke="#555" stroke-width="2"/>
  <polygon points="128,104 138,110 128,116" fill="#555"/>
  <text x="118" y="98" text-anchor="middle" fill="#c62828" font-size="10" font-weight="bold">Meiosis I</text>
  <text x="118" y="130" text-anchor="middle" fill="#555" font-size="9">homologous</text>
  <text x="118" y="140" text-anchor="middle" fill="#555" font-size="9">pairs separate</text>
  <!-- Two intermediate cells -->
  <ellipse cx="195" cy="70" rx="38" ry="35" fill="#fce4ec" stroke="#e91e63" stroke-width="1.5"/>
  <text x="195" y="62" text-anchor="middle" fill="#880e4f" font-size="10">Cell A</text>
  <text x="183" y="76" text-anchor="middle" fill="#5c6bc0" font-size="14">X</text>
  <text x="207" y="76" text-anchor="middle" fill="#5c6bc0" font-size="14">X</text>
  <text x="195" y="92" text-anchor="middle" fill="#555" font-size="9">haploid</text>
  <ellipse cx="195" cy="155" rx="38" ry="35" fill="#fce4ec" stroke="#e91e63" stroke-width="1.5"/>
  <text x="195" y="147" text-anchor="middle" fill="#880e4f" font-size="10">Cell B</text>
  <text x="183" y="161" text-anchor="middle" fill="#9c27b0" font-size="14">X</text>
  <text x="207" y="161" text-anchor="middle" fill="#9c27b0" font-size="14">X</text>
  <text x="195" y="177" text-anchor="middle" fill="#555" font-size="9">haploid</text>
  <!-- Arrow Meiosis II -->
  <line x1="236" y1="70" x2="260" y2="70" stroke="#555" stroke-width="2"/>
  <polygon points="260,64 270,70 260,76" fill="#555"/>
  <line x1="236" y1="155" x2="260" y2="155" stroke="#555" stroke-width="2"/>
  <polygon points="260,149 270,155 260,161" fill="#555"/>
  <text x="248" y="57" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Meiosis II</text>
  <text x="248" y="130" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Meiosis II</text>
  <text x="248" y="143" text-anchor="middle" fill="#555" font-size="9">chromatids</text>
  <!-- Four haploid cells -->
  <ellipse cx="320" cy="45" rx="32" ry="28" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>
  <text x="320" y="39" text-anchor="middle" fill="#1b5e20" font-size="9" font-weight="bold">Gamete 1</text>
  <text x="320" y="52" text-anchor="middle" fill="#388e3c" font-size="14">X</text>
  <text x="320" y="62" text-anchor="middle" fill="#555" font-size="9">n=2</text>
  <ellipse cx="320" cy="107" rx="32" ry="28" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>
  <text x="320" y="101" text-anchor="middle" fill="#1b5e20" font-size="9" font-weight="bold">Gamete 2</text>
  <text x="320" y="114" text-anchor="middle" fill="#388e3c" font-size="14">X</text>
  <text x="320" y="124" text-anchor="middle" fill="#555" font-size="9">n=2 (varies)</text>
  <ellipse cx="320" cy="143" rx="32" ry="28" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>
  <text x="320" y="137" text-anchor="middle" fill="#1b5e20" font-size="9" font-weight="bold">Gamete 3</text>
  <text x="320" y="150" text-anchor="middle" fill="#9c27b0" font-size="14">X</text>
  <text x="320" y="160" text-anchor="middle" fill="#555" font-size="9">n=2</text>
  <ellipse cx="320" cy="197" rx="32" ry="20" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>
  <text x="320" y="192" text-anchor="middle" fill="#1b5e20" font-size="9" font-weight="bold">Gamete 4</text>
  <text x="320" y="203" text-anchor="middle" fill="#9c27b0" font-size="14">X</text>
  <text x="320" y="213" text-anchor="middle" fill="#555" font-size="9">n=2 (varies)</text>
  <!-- Summary box -->
  <rect x="368" y="30" width="142" height="160" rx="8" fill="#fff9c4" stroke="#f9a825" stroke-width="1.5"/>
  <text x="439" y="48" text-anchor="middle" fill="#e65100" font-size="10" font-weight="bold">Result Summary</text>
  <text x="439" y="64" text-anchor="middle" fill="#333" font-size="10">4 gametes</text>
  <text x="439" y="78" text-anchor="middle" fill="#333" font-size="10">All haploid (n)</text>
  <text x="439" y="92" text-anchor="middle" fill="#333" font-size="10">All genetically</text>
  <text x="439" y="104" text-anchor="middle" fill="#333" font-size="10">different</text>
  <text x="439" y="120" text-anchor="middle" fill="#555" font-size="9">Variation from:</text>
  <text x="439" y="133" text-anchor="middle" fill="#555" font-size="9">• Crossing over</text>
  <text x="439" y="146" text-anchor="middle" fill="#555" font-size="9">• Independent</text>
  <text x="439" y="158" text-anchor="middle" fill="#555" font-size="9">  assortment</text>
  <text x="439" y="180" text-anchor="middle" fill="#333" font-size="9">2n→4 haploid cells</text>
  <text x="10" y="14" fill="#333" font-size="12" font-weight="bold">Meiosis: 1 Diploid Cell → 4 Haploid Gametes</text>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Sources of Genetic Variation in Meiosis', level: 2 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Crossing over:</strong> during meiosis I, homologous chromosomes exchange segments of chromatids at points called chiasmata. This reshuffles alleles onto different chromosomes, creating new combinations.' },
          { text: '<strong>Independent assortment:</strong> during meiosis I, homologous chromosome pairs line up randomly at the cell equator. Which chromosome of each pair goes to which pole is random, producing many possible chromosome combinations in gametes (2²³ for humans = over 8 million combinations).' },
          { text: '<strong>Random fertilisation:</strong> any sperm can fertilise any egg, further multiplying genetic diversity.' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Mitosis vs Meiosis — Key Differences',
        headers: ['Feature', 'Mitosis', 'Meiosis'],
        rows: [
          ['Number of divisions', 'One', 'Two (Meiosis I + II)'],
          ['Cells produced', '2 daughter cells', '4 daughter cells (gametes)'],
          ['Chromosome number', 'Same as parent (diploid → diploid)', 'Half of parent (diploid → haploid)'],
          ['Genetic identity', 'Genetically identical (clones)', 'Genetically different (variation)'],
          ['Purpose', 'Growth, repair, asexual reproduction', 'Production of gametes (sexual reproduction)'],
          ['Location', 'All body tissues', 'Gonads only (testes, ovaries)'],
          ['Crossing over', 'Does not occur', 'Occurs in meiosis I (source of variation)']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why Haploid Gametes Are Essential',
        text: 'If gametes were diploid (46 chromosomes), fertilisation would double the chromosome number each generation (46+46=92). Meiosis halves the chromosome number to <strong>23 (haploid)</strong>, so that when sperm (23) + egg (23) fuse at fertilisation, the <strong>diploid number (46) is restored</strong>. This is essential for maintaining a species\' constant chromosome number.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Meiosis: 1 diploid cell undergoes two divisions → 4 haploid gametes, each genetically unique. Meiosis I separates homologous pairs (chromosome number halved); meiosis II separates sister chromatids. Genetic variation arises from crossing over and independent assortment. Haploid gametes are essential so that fertilisation restores the diploid number.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Meiosis: 2 divisions → 4 haploid genetically different gametes. Meiosis I halves chromosome number. Variation: crossing over + independent assortment. Compare: mitosis → 2 identical diploid cells.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'State the location, input, and output of meiosis.', answer: 'Location: testes (sperm) and ovaries (eggs). Input: 1 diploid cell (2n=46). Output: 4 haploid gametes (n=23), each genetically different.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Name two ways meiosis produces genetic variation.', answer: 'Crossing over (exchange of chromatid segments between homologous chromosomes in meiosis I) and independent assortment (random orientation of chromosome pairs, giving many chromosome combinations).' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Give three differences between mitosis and meiosis.', answer: 'Any three: mitosis = 1 division, 2 cells, diploid, identical. Meiosis = 2 divisions, 4 cells, haploid, genetically different. Crossing over only in meiosis. Meiosis only in gonads; mitosis in all dividing body cells.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'Why is it essential that gametes are haploid?', answer: 'If gametes were diploid, fertilisation would double the chromosome number each generation. Haploid gametes (n=23) fuse at fertilisation to restore the diploid number (2n=46), maintaining the constant chromosome number of the species.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_17_17_4;
