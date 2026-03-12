export const note_biology_2_3_3 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-meiosis',
      data: {
        text: 'Understand the stages of meiosis, how it produces genetically diverse haploid gametes, and the sources of genetic variation.',
      },
    },
    {
      type: 'heading',
      id: 'h-gene-locus',
      data: { text: 'Gene Locus and Linkage', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-gene-locus',
      data: {
        text: 'A gene is a length of DNA that codes for a single polypeptide. The specific position of a gene on a chromosome is known as its locus (plural: loci). Each gene occupies a specific locus, ensuring the gene for a particular characteristic is always found at the same position. Different alleles of a gene (different nucleotide sequences) occupy the same locus.',
      },
    },
    {
      type: 'callout',
      id: 'callout-linkage',
      data: {
        title: 'Gene Linkage',
        text: 'Gene loci are linked if they are on the same chromosome:\\n- **Autosomal linkage:** Genes located on the same autosome (chromosomes 1-22 in humans). As they are on the same chromosome, they tend to be inherited together.\\n- **Sex linkage:** Genes located on the same sex chromosome (X or Y).',
        style: 'key',
      },
    },
    {
      type: 'heading',
      id: 'h-meiosis-overview',
      data: { text: 'Meiosis and Reduction Division', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-meiosis-def',
      data: {
        text: 'Meiosis is a reductional division that produces four genetically unique haploid cells (with n chromosomes) from one diploid cell (with 2n chromosomes). In animals, meiosis produces gametes (sperm in males, eggs in females); in plants, it produces spores that later develop into gametophytes. Meiosis involves two nuclear divisions: Meiosis I (reductional, homologous pairs separate) and Meiosis II (equational, sister chromatids separate), following a single DNA replication in S phase.',
      },
    },
    {
      type: 'heading',
      id: 'h-meiosis-i',
      data: { text: 'Meiosis I: Homologous Pair Separation', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-prophase-i',
      data: {
        text: 'Prophase I is prolonged and complex. Homologous chromosomes pair up (synapsis), forming bivalents. During this pairing, crossing over occurs: non-sister chromatids from homologous chromosomes exchange DNA segments at points called chiasmata (singular: chiasma). This exchange shuffles alleles between maternal and paternal chromosomes, creating new combinations. Prophase I is subdivided into leptotene (chromosomes condense), zygotene (synapsis begins), pachytene (synapsis complete, crossing over occurs), diplotene (homologs begin to separate but remain at chiasmata), and diakinesis (nuclear envelope breaks down, bivalents move toward equator).',
      },
    },
    {
      type: 'paragraph',
      id: 'p-metaphase-anaphase-i',
      data: {
        text: 'In Metaphase I, bivalents align randomly at the cell equator. The random orientation of each bivalent (either orientation is possible) ensures independent assortment: each homologous pair segregates independently of other pairs. In Anaphase I, homologous chromosomes separate (not sister chromatids), with each chromosome still consisting of two sister chromatids held together at the centromere. The separated homologs move to opposite poles. This reduction division halves the chromosome number from 2n to n.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-telophase-i',
      data: {
        text: 'Telophase I sees the formation of nuclear envelopes around each set of chromosomes, and cytokinesis separates the cell into two daughter cells. Each daughter cell is haploid (n) but contains replicated chromosomes (still two sister chromatids each). In animals, these cells may enter a brief interkinesis (without DNA replication) before Meiosis II. In some organisms, interkinesis is skipped entirely.',
      },
    },
    {
      type: 'heading',
      id: 'h-meiosis-ii',
      data: { text: 'Meiosis II: Sister Chromatid Separation', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-meiosis-ii-desc',
      data: {
        text: 'Meiosis II resembles mitosis but starts with haploid cells. Prophase II: chromosomes (still double-stranded, consisting of two sister chromatids) condense, and the nuclear envelope breaks down. Metaphase II: individual chromosomes (not pairs) align at the equator. Anaphase II: sister chromatids separate and move to opposite poles. Telophase II: nuclear envelopes reform, chromosomes decondense, and cytokinesis produces four haploid daughter cells, each with single-stranded chromosomes.',
      },
    },
    {
      type: 'heading',
      id: 'h-genetic-variation',
      data: { text: 'Sources of Genetic Variation', level: 2 },
    },
    {
      type: 'list',
      id: 'list-variation',
      data: {
        style: 'bullet',
        items: [
          'Crossing over (recombination): exchange of DNA between non-sister chromatids at chiasmata during Prophase I; creates new allele combinations on single chromosomes',
          'Independent assortment: random orientation of bivalents during Metaphase I; each pair segregates independently, creating 2ⁿ possible gamete combinations (humans: 2²³ ≈ 8 million combinations)',
          'Random fertilisation: any male gamete may fuse with any female gamete, further increasing diversity; humans: 8 million × 8 million ≈ 64 trillion possible zygote combinations',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-meiosis-vs-mitosis',
      data: { text: 'Meiosis versus Mitosis Comparison', level: 2 },
    },
    {
      type: 'comparisonTable',
      id: 'table-meiosis-mitosis',
      data: {
        headers: ['Feature', 'Mitosis', 'Meiosis'],
        rows: [
          ['Starting cell ploidy', 'Diploid (2n)', 'Diploid (2n)'],
          ['Number of divisions', 'One', 'Two (Meiosis I and II)'],
          ['Daughter cells produced', 'Two', 'Four'],
          ['Daughter cell ploidy', 'Diploid (2n)', 'Haploid (n)'],
          ['Genetic identity', 'Clones of parent', 'Genetically unique'],
          ['Homologous pairing', 'No', 'Yes (synapsis in Prophase I)'],
          ['Crossing over', 'No', 'Yes (Prophase I)'],
          ['Sister chromatid separation', 'Anaphase', 'Anaphase II'],
          ['Function', 'Growth, repair, asexual reproduction', 'Gamete formation, genetic diversity'],
        ],
        caption: 'Key differences between mitosis and meiosis.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-variation',
      data: {
        style: 'key',
        title: 'Genetic Variation and Evolution',
        text: 'The variation produced by crossing over, independent assortment, and random fertilisation provides the raw material for natural selection. Without meiotic recombination, offspring would be genetic clones of their parents, and evolution would be impossible. Sexual reproduction, via meiosis, enables populations to adapt to changing environments.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-meiosis',
      data: {
        style: 'tip',
        title: 'Remembering Meiosis I vs II',
        text: 'Meiosis I = "Reduction": homologous pairs separate (2n → n). Meiosis II = "Equational": sister chromatids separate (resembles mitosis). A useful phrase: "Meiosis I separates homologs, Meiosis II separates sisters."',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does crossing over during meiosis I increase genetic variation? When non-sister chromatids of homologous chromosomes exchange segments at chiasmata, new combinations of alleles are created that did not exist in either parent chromosome — producing recombinant chromosomes.',
        apply: 'If a cell has 6 chromosomes (3 homologous pairs) and undergoes meiosis, calculate: (a) the number of possible chromosome combinations from independent assortment alone, (b) the number of genetically unique gametes possible if one crossover occurs per chromosome pair.',
        analyze: 'Compare mitosis and meiosis in terms of number of divisions, chromosome behaviour in division I, genetic outcome, ploidy of daughter cells, and biological purpose. Produce a structured comparison table.',
        evaluate: 'Evaluate whether sexual reproduction (requiring meiosis and fertilisation) is always more advantageous than asexual reproduction. Consider situations where rapid clonal reproduction outcompetes sexual reproduction, and the Red Queen hypothesis.',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-meiosis',
      data: {
        items: [
          { text: 'Can describe the stages of Meiosis I: Prophase I (synapsis, crossing over), Metaphase I, Anaphase I, Telophase I', checked: false },
          { text: 'Understand Meiosis II produces four haploid cells by separating sister chromatids', checked: false },
          { text: 'Know three sources of variation: crossing over, independent assortment, random fertilisation', checked: false },
          { text: 'Can compare meiosis and mitosis in a table', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-meiosis',
      data: {
        text: 'Meiosis produces four haploid gametes from one diploid cell via two divisions. Meiosis I: homologous pairs synapse (forming bivalents), crossing over shuffles alleles, bivalents align randomly (independent assortment), and homologs separate (2n → n). Meiosis II: sister chromatids separate (like mitosis), producing four genetically unique haploid cells. Genetic variation arises from crossing over (new allele combinations), independent assortment (2ⁿ combinations), and random fertilisation (8 million × 8 million combinations in humans). This variation is essential for evolution and adaptation.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-0',
        blockId: 'p-gene-locus',
        prompt: 'What is a gene locus and what does it mean if genes are linked?'
      },
      {
        id: 'cue-1',
        blockId: 'p-prophase-i',
        prompt: 'What happens during Prophase I, including synapsis and crossing over?',
      },
      {
        id: 'cue-2',
        blockId: 'p-metaphase-anaphase-i',
        prompt: 'Explain how independent assortment occurs during Metaphase I and Anaphase I.',
      },
      {
        id: 'cue-3',
        blockId: 'list-variation',
        prompt: 'Name and briefly explain three sources of genetic variation in meiosis.',
      },
      {
        id: 'cue-4',
        blockId: 'h-meiosis-vs-mitosis',
        prompt: 'How does meiosis differ from mitosis in terms of divisions, products, and genetic outcome?',
      },
    ],
    summaryText: 'Meiosis I: homologous pairs synapse (bivalents form), crossing over occurs at chiasmata (shuffles alleles), bivalents align randomly at equator (independent assortment), homologs separate to opposite poles (2n → n). Meiosis II: sister chromatids separate (like mitosis), producing four haploid cells. Variation sources: crossing over (new allele combinations), independent assortment (2ⁿ combinations), random fertilisation. Mitosis produces two identical diploid cells for growth/repair; meiosis produces four unique haploid cells for sexual reproduction.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Meiosis and Genetic Diversity',
      detail: 'Cytological studies of meiosis in species like Drosophila revealed bivalent formation, crossing over at chiasmata, and independent assortment, confirming meiosis as the mechanism generating genetic variation in sexual organisms.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['meiosis', 'genetic variation', 'reproduction'],
    },
  ],
};
