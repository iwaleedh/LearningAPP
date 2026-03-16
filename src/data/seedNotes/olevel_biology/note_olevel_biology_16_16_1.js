export const note_olevel_biology_16_16_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/16 Reproduction/16-1-2-sexual-reproduction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define sexual reproduction; describe the role of gametes and fertilisation; explain the significance of genetic variation produced by sexual reproduction; and compare sexual and asexual reproduction.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Sexual Reproduction?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition',
        text: '<strong>Sexual reproduction</strong> is the process of producing offspring that involves the <strong>fusion of two gametes</strong> (sex cells) from <strong>two parents</strong>. The fusion of gametes is called <strong>fertilisation</strong>, and it produces a <strong>zygote</strong> which develops into a new organism. The offspring are <strong>NOT</strong> genetically identical to either parent — they show <strong>genetic variation</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Gametes', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>Gametes</strong> are specialised sex cells produced in the reproductive organs. They are <strong>haploid</strong> — they contain <strong>half the normal number of chromosomes</strong> (n). In humans, body cells are diploid (2n = 46 chromosomes); gametes have n = 23 chromosomes. Gametes are formed by a specialised cell division called <strong>meiosis</strong>.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of Male and Female Gametes',
        headers: ['Feature', 'Male Gamete (Sperm)', 'Female Gamete (Egg / Ovum)'],
        rows: [
          ['Size', 'Very small', 'Much larger'],
          ['Motility', 'Motile — has a tail (flagellum)', 'Non-motile'],
          ['Number produced', 'Millions per day', 'One per month (humans)'],
          ['Cytoplasm', 'Very little', 'Large amount — stores nutrients'],
          ['Produced in', 'Testes', 'Ovaries'],
          ['Chromosome number', 'Haploid (n = 23 in humans)', 'Haploid (n = 23 in humans)']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Fertilisation', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Fertilisation</strong> is the fusion of the male and female gamete nuclei. The sperm nucleus (n) fuses with the egg nucleus (n) to form a <strong>zygote</strong> with the full diploid number (2n). In humans, the zygote has 46 chromosomes — 23 from each parent. The zygote then divides by mitosis repeatedly to form an embryo.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'info',
        title: 'Internal vs External Fertilisation',
        text: '<strong>Internal fertilisation:</strong> Sperm and egg meet inside the female body. More common in land animals (mammals, reptiles, birds). Advantages: egg is protected; fewer gametes needed.<br/><br/><strong>External fertilisation:</strong> Gametes released into the environment (usually water) where fertilisation occurs. Common in fish and frogs. Advantage: no mating required. Disadvantage: gametes may not meet; large numbers of gametes needed; offspring exposed to predators.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Genetic Variation in Sexual Reproduction', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Sexual reproduction produces offspring that are <strong>genetically different</strong> from both parents and from each other. This variation arises because:<br/>1. <strong>Meiosis</strong> produces gametes with different combinations of chromosomes (independent assortment and crossing over).<br/>2. <strong>Random fertilisation</strong> — any sperm can fuse with any egg, creating new combinations of alleles.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why is Genetic Variation Important?',
        text: 'Genetic variation within a population increases the chance that <strong>some individuals will survive</strong> if the environment changes or a new disease arises. Those better-adapted individuals survive and reproduce, passing on their advantageous alleles — this is the basis of <strong>natural selection and evolution</strong>. A population with variation is far less vulnerable than a clone population.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Sexual vs Asexual Reproduction', level: 2 }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Sexual vs Asexual Reproduction — Key Comparisons',
        headers: ['Feature', 'Asexual Reproduction', 'Sexual Reproduction'],
        rows: [
          ['Number of parents', 'One', 'Two'],
          ['Gametes', 'Not required', 'Required (haploid sex cells)'],
          ['Fertilisation', 'Does not occur', 'Occurs (fusion of gametes)'],
          ['Type of cell division', 'Mitosis', 'Meiosis (to form gametes); mitosis (for growth)'],
          ['Genetic variation', 'None — clones produced', 'Yes — offspring genetically unique'],
          ['Speed of reproduction', 'Rapid', 'Slower'],
          ['Offspring survival in stable environment', 'All survive if parent does', 'Some may be less well-adapted'],
          ['Offspring survival if environment changes', 'All equally at risk', 'Some better adapted than others may survive']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Sexual reproduction involves two parents and the fusion of haploid gametes (formed by meiosis) to produce a diploid zygote. The offspring are genetically unique due to independent assortment and random fertilisation. This genetic variation is the raw material for natural selection and evolution, giving sexually reproducing populations greater adaptability than clonal populations.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Sexual reproduction: two parents, gametes fuse at fertilisation, diploid zygote formed, offspring genetically varied.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Define sexual reproduction.',
        answer: 'Sexual reproduction involves the fusion of two gametes (from two parents) to form a zygote. Offspring are genetically different from both parents due to genetic variation.'
      },
      {
        id: 'cue-2',
        blockId: 'para-1',
        prompt: 'What is a gamete and what is its chromosome number relative to a body cell?',
        answer: 'A gamete is a specialised sex cell (sperm or egg). It is haploid — it contains half the normal chromosome number (n = 23 in humans, compared to 2n = 46 in body cells).'
      },
      {
        id: 'cue-3',
        blockId: 'para-2',
        prompt: 'Describe what happens during fertilisation and what cell is produced.',
        answer: 'Fertilisation is the fusion of the male (sperm) and female (egg) gamete nuclei. The haploid nuclei fuse to form a diploid zygote (2n = 46 in humans), which then divides by mitosis to form an embryo.'
      },
      {
        id: 'cue-4',
        blockId: 'para-3',
        prompt: 'State two reasons why offspring produced by sexual reproduction are genetically different from their parents.',
        answer: 'Meiosis produces gametes with new chromosome combinations (independent assortment and crossing over); random fertilisation means any sperm can fuse with any egg, producing further new allele combinations.'
      },
      {
        id: 'cue-5',
        blockId: 'call-3',
        prompt: 'Explain why genetic variation is advantageous to a population.',
        answer: 'Genetic variation means some individuals may have alleles that give them an advantage if the environment changes or a new disease appears. These individuals survive and reproduce, passing on their advantageous alleles — enabling the population to adapt over generations.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_16_16_1;
