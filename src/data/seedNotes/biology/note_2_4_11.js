export const note_biology_2_4_11 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-hardy-weinberg',
      data: {
        text: 'Understand Hardy-Weinberg equilibrium, calculate allele frequencies, and identify conditions for evolutionary change.',
      },
    },
    {
      type: 'heading',
      id: 'h-hw-principle',
      data: { text: 'Hardy-Weinberg Principle', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-hw-def',
      data: {
        text: 'The Hardy-Weinberg principle states that allele frequencies in a population remain constant across generations if certain conditions are met. Mathematically: p² + 2pq + q² = 1, and p + q = 1, where p = frequency of dominant allele A, q = frequency of recessive allele a, p² = frequency of AA genotype, 2pq = frequency of Aa, q² = frequency of aa. If a population is in Hardy-Weinberg equilibrium, allele frequencies do not change, and genotype frequencies can be predicted from allele frequencies.',
      },
    },
    {
      type: 'equation',
      id: 'eq-hw',
      data: {
        html: 'p<sup>2</sup> + 2pq + q<sup>2</sup> = 1 &nbsp; and &nbsp; p + q = 1',
        caption: 'Hardy-Weinberg equation relating allele and genotype frequencies.',
      },
    },
    {
      type: 'heading',
      id: 'h-hw-conditions',
      data: { text: 'Conditions for Hardy-Weinberg Equilibrium', level: 2 },
    },
    {
      type: 'list',
      id: 'list-conditions',
      data: {
        style: 'bullet',
        items: [
          'Large population size: random sampling error (genetic drift) is negligible in large populations; small populations experience drift',
          'No mutations: alleles are not created or destroyed by mutation',
          'No selection: all genotypes survive and reproduce equally; no differential survival or fertility',
          'No migration (gene flow): no individuals move into or out of the population',
          'Random mating: individuals mate randomly; no mating preference based on genotype (no sexual selection)',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-worked-example',
      data: { text: 'Worked Example: Calculating Allele Frequencies', level: 2 },
    },
    {
      type: 'callout',
      id: 'callout-worked-hw',
      data: {
        style: 'worked',
        title: 'Hardy-Weinberg Calculation',
        text: 'Population of 1000 individuals: 640 AA, 320 Aa, 40 aa. Allele frequencies: A frequency = (2 × AA + Aa) / (2 × total) = (2 × 640 + 320) / 2000 = 1600/2000 = 0.8 (p=0.8). a frequency = (2 × aa + Aa) / 2000 = (80 + 320) / 2000 = 400/2000 = 0.2 (q=0.2). Check: p + q = 0.8 + 0.2 = 1 ✓. Expected genotypes: p² = 0.64 (640 AA), 2pq = 0.32 (320 Aa), q² = 0.04 (40 aa). Observed matches expected—population is in HW equilibrium.',
      },
    },
    {
      type: 'heading',
      id: 'h-deviations',
      data: { text: 'Deviations from Equilibrium: Evidence of Evolution', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-deviations',
      data: {
        text: 'If observed genotype frequencies differ significantly from Hardy-Weinberg predictions, at least one condition is violated—evolution is occurring. Sources of deviation: (1) Selection—if AA individuals survive better than Aa or aa, A frequency increases over generations. (2) Mutation—introduces new alleles, changing allele frequencies. (3) Migration—influx of individuals with different allele frequencies changes population frequencies. (4) Genetic drift—in small populations, random sampling can cause large changes in allele frequency (especially at rare alleles; fixation or loss more likely). (5) Non-random mating—inbreeding increases homozygosity, reducing heterozygosity without changing allele frequencies.',
      },
    },
    {
      type: 'heading',
      id: 'h-genetic-drift',
      data: { text: 'Genetic Drift and Population Size', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-drift',
      data: {
        text: 'Genetic drift is random change in allele frequencies due to sampling error in small populations. A rare allele (e.g. 1%) in a population of 1 million individuals is unlikely to be lost by chance alone. But in a population of 100 individuals, the rare allele might not be inherited by any offspring in a generation, causing it to be lost (frequency drops to 0). Conversely, a slightly advantageous allele in a small population might be lost by drift before selection can increase it. Bottlenecks (dramatic population size reductions) cause rapid drift and loss of genetic diversity (founder effect: founding population is unrepresentative of source population). Population size Ne (effective population size) is typically lower than census size (actual count) because not all individuals reproduce equally.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-hw',
      data: {
        style: 'key',
        title: 'Hardy-Weinberg: A Null Hypothesis for Evolution',
        text: 'Hardy-Weinberg equilibrium is a null hypothesis—if conditions are met, allele frequencies remain constant. Finding deviations from equilibrium indicates evolution is occurring. The more a population deviates from HW predictions, the stronger the evolutionary force (selection, drift, migration).',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-drift',
      data: {
        style: 'tip',
        title: 'Drift vs. Selection',
        text: 'Drift: random, stronger in small populations, acts on all alleles equally. Selection: directional, acts on advantageous alleles, stronger when allele effects are large. In small populations, drift can overpower weak selection. In large populations, selection dominates drift.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why can no two species permanently occupy the same ecological niche (Gause's competitive exclusion principle)? Two species with identical niches compete for the same resources; the slightly better competitor will always reproduce faster and eventually drive the other to local extinction. Real coexistence requires niche differentiation — a resource or microhabitat that each species uses more efficiently.",
        apply: "Two warbler species both feed on insects in spruce trees. Species A forages in the top 30%, species B in the middle 40%, with a 30–70% overlap zone. If each species spends 80% of foraging time in its preferred zone and 20% in the shared zone, calculate the degree of niche overlap. Does this represent competitive exclusion or resource partitioning?",
        analyze: "Compare xerophyte adaptations (cactus, marram grass) for water conservation. For each adaptation — reduced leaf area, sunken stomata, thick waxy cuticle, CAM photosynthesis, extensive root systems — explain the precise mechanism by which it reduces water loss or increases water uptake.",
        evaluate: "Evaluate the ecological niche concept as a tool for predicting species' responses to climate change. Can niche modelling accurately predict where species will shift their ranges as temperature rises? Consider the limitations of static niche models and the role of biotic interactions in constraining realised niches.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-hw',
      data: {
        items: [
          { text: 'Know Hardy-Weinberg equation: p² + 2pq + q² = 1', checked: false },
          { text: 'Can calculate allele frequencies from genotype counts', checked: false },
          { text: 'List five conditions for HW equilibrium', checked: false },
          { text: 'Understand deviations from HW indicate evolution', checked: false },
          { text: 'Know genetic drift is stronger in small populations', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-hw',
      data: {
        text: 'Hardy-Weinberg: p² + 2pq + q² = 1 (p = dominant allele freq, q = recessive). Conditions: large population (↓ drift), no mutations, no selection, no migration, random mating. If met, allele frequencies remain constant (no evolution). Allele frequency calculation: p = (2×AA + Aa) / 2N, q = (2×aa + Aa) / 2N. Deviations from HW: selection (advantageous alleles ↑), mutation (new alleles), migration (alleles from elsewhere), drift (random in small pop), non-random mating (inbreeding ↑ homozygosity). Genetic drift: random allele freq change, stronger in small pop (Ne), can cause fixation/loss of rare alleles; bottleneck = rapid drift + loss of diversity (founder effect).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-hw-def',
        prompt: 'State the Hardy-Weinberg principle and write the equation.',
      },
      {
        id: 'cue-2',
        blockId: 'list-conditions',
        prompt: 'List five conditions required for Hardy-Weinberg equilibrium.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked-hw',
        prompt: 'Calculate allele frequencies from genotype counts: 100 AA, 200 Aa, 100 aa (N=400).',
      },
      {
        id: 'cue-4',
        blockId: 'p-drift',
        prompt: 'Explain genetic drift and why it is stronger in small populations.',
      },
    ],
    summaryText: 'Hardy-Weinberg principle: p² + 2pq + q² = 1, p + q = 1 (p = dominant allele freq, q = recessive allele freq); if conditions met, allele frequencies constant (no evolution). Conditions: large population (↓ drift), no mutations, no selection (all genotypes equally viable), no migration, random mating. Allele freq calculation: p = (2×homozygous dominant + heterozygous) / 2×total. Deviations from HW indicate evolution: selection (advantageous alleles ↑ freq), mutation (creates new alleles), migration (changes frequencies), genetic drift (random change, stronger in small pop), non-random mating (inbreeding ↑ homozygosity). Genetic drift: random sampling error in small populations; can cause fixation (freq→1) or loss (freq→0) of alleles; bottleneck = rapid drift + loss of genetic diversity; founder effect: founding population unrepresentative.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Hardy-Weinberg and Population Genetics',
      detail: 'Hardy-Weinberg equilibrium provides a quantitative framework for detecting evolutionary change in populations; deviations reveal which evolutionary forces (selection, drift, migration) are acting.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['Hardy-Weinberg', 'population genetics', 'evolution'],
    },
  ],
};
