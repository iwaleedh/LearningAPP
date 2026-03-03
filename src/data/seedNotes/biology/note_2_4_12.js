export const note_biology_2_4_12 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-speciation',
      data: {
        text: 'Understand natural selection, speciation mechanisms, and reproductive isolation.',
      },
    },
    {
      type: 'heading',
      id: 'h-natural-selection',
      data: { text: 'Natural Selection and Evolution', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-selection',
      data: {
        text: 'Natural selection is the mechanism of evolution: (1) Variation—individuals in a population differ in traits (heritable genetic differences). (2) Selection pressure—environmental factors (predation, disease, competition, climate) favour certain traits over others. (3) Differential survival and reproduction—individuals with advantageous traits survive longer and reproduce more, passing traits to offspring. (4) Heritable change—over generations, advantageous alleles increase in frequency, disadvantageous ones decrease. Example: in industrial England, peppered moths evolved from light to dark phenotypes as pollution darkened tree bark; dark moths (camouflaged) survived predation better than light moths on dark bark.',
      },
    },
    {
      type: 'heading',
      id: 'h-allopatric-speciation',
      data: { text: 'Allopatric Speciation: Geographic Isolation', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-allopatric',
      data: {
        text: 'Allopatric speciation occurs when populations are geographically isolated and diverge due to different selection pressures and genetic drift. Example: Darwin\'s finches on the Galápagos Islands originated from a South American ancestor. When separated on different islands, populations experienced different food availability (different seed sizes), leading to divergent selection on beak morphology. Over ~1–2 million years, distinct species evolved with different beak sizes, preventing successful hybridisation even if they later came into secondary contact (on the same island). Geographic isolation is the key; physical separation prevents gene flow, allowing accumulated genetic differences and reproductive isolation.',
      },
    },
    {
      type: 'heading',
      id: 'h-sympatric-speciation',
      data: { text: 'Sympatric Speciation: Speciation Without Geographic Isolation', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-sympatric',
      data: {
        text: 'Sympatric speciation occurs without geographic isolation, typically via polyploidy in plants. Polyploidy (whole-genome duplication) instantly creates reproductive isolation: a triploid (3n) organism cannot produce viable diploid (2n) offspring because of meiotic problems (uneven chromosome segregation). Allopolyploid speciation (polyploidy from two different species) is common in plants. Example: wheat (Triticum aestivum) is an allohexaploid (6n = 42) derived from hybridisation and polyploidization of three diploid species over ~10,000 years. Modern wheat is thus a "new species" created via polyploidy. Sympatric speciation by polyploidy is rare in animals (meiotic problems more severe) but common in plants (~30–70% of flowering plant speciation events).',
      },
    },
    {
      type: 'heading',
      id: 'h-reproductive-isolation',
      data: { text: 'Reproductive Isolation Mechanisms', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-iso-mechanisms',
      data: {
        text: 'Reproductive isolation prevents gene flow between populations. Pre-zygotic barriers prevent fertilisation: (1) Behavioural isolation—different courtship, mating calls, or displays; fireflies have species-specific flash patterns. (2) Temporal isolation—breeding at different times (seasons, times of day); prevents meeting. (3) Mechanical isolation—reproductive structures incompatible; insect genitalia are species-specific, preventing mating. Post-zygotic barriers reduce hybrid viability/fertility: (1) Hybrid inviability—hybrid embryos fail to develop or die as juveniles. (2) Hybrid sterility—hybrids are viable but sterile (e.g. mules from horse-donkey crosses); cannot backcross to parents.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-speciation',
      data: {
        style: 'key',
        title: 'Speciation: The Origin of Species',
        text: 'Speciation is the process by which one ancestral species diverges into two or more daughter species. Allopatric speciation (geographic isolation) is the dominant mode. Reproductive isolation (pre- or post-zygotic barriers) ensures the species remain separate even if geographic barriers are later removed. Without reproductive isolation, populations can interbreed and merge back into one species.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-isolation',
      data: {
        style: 'tip',
        title: 'Pre- vs. Post-Zygotic Barriers',
        text: 'Pre-zygotic barriers are more efficient (prevent wasteful gamete production and meiosis). Post-zygotic barriers are less efficient (energy spent on inviable hybrids). Natural selection favours pre-zygotic reinforcement—evolution of barriers preventing hybridisation when species come back into contact.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why do Hardy-Weinberg equilibrium conditions never truly exist in natural populations? Random genetic drift always occurs in finite populations, mutations constantly arise, natural selection favours certain genotypes, and migration alters allele frequencies. H-W equilibrium is a null model — deviations from it indicate that evolution is occurring and reveal which evolutionary force is responsible.",
        apply: "In a population of 1000 individuals, 360 show the recessive phenotype (aa). Using Hardy-Weinberg: calculate q, p, the frequencies of AA, Aa, and aa, and the number of carriers (Aa). If selection removes all aa individuals before reproduction, calculate the new allele frequencies after one generation.",
        analyze: "Compare the four evolutionary forces that cause deviation from Hardy-Weinberg equilibrium: mutation, natural selection, genetic drift, and gene flow. For each: describe the direction of effect on allele frequency, population size dependence, and whether it acts on genotype or phenotype.",
        evaluate: "Evaluate the importance of genetic drift versus natural selection in determining allele frequency changes in small, isolated populations (e.g. cheetahs, island species). Under what circumstances does drift overwhelm selection, and what conservation implications does this have for minimum viable population size?",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-speciation',
      data: {
        items: [
          { text: 'Explain natural selection: variation, selection pressure, differential reproduction, heritable change', checked: false },
          { text: 'Know allopatric speciation occurs via geographic isolation and divergent selection', checked: false },
          { text: 'Understand sympatric speciation via polyploidy in plants', checked: false },
          { text: 'List pre-zygotic barriers: behavioural, temporal, mechanical isolation', checked: false },
          { text: 'Know post-zygotic barriers: hybrid inviability, hybrid sterility', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-speciation',
      data: {
        text: 'Natural selection: variation + selection pressure → differential survival/reproduction → heritable change → allele freq shift. Allopatric speciation: geographic isolation → divergent selection (different environments) + drift → reproductive isolation. Darwin\'s finches: from SA ancestor, isolated on Galápagos islands, diverged to 13 species via beak morphology selection. Sympatric speciation: polyploidy (plant whole-genome duplication) → instant reproductive isolation (meiotic problems). Wheat example: allohexaploid from 3 diploid species. Reproductive isolation: pre-zygotic (behavioural, temporal, mechanical prevent mating), post-zygotic (hybrid inviability, sterility reduce success). Pre-zygotic more efficient; selected for when species re-contact (reinforcement).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-selection',
        prompt: 'Explain natural selection with four steps and an example.',
      },
      {
        id: 'cue-2',
        blockId: 'p-allopatric',
        prompt: 'How does allopatric speciation lead to new species? Use Darwin\'s finches as example.',
      },
      {
        id: 'cue-3',
        blockId: 'p-sympatric',
        prompt: 'Explain sympatric speciation by polyploidy, with wheat as an example.',
      },
      {
        id: 'cue-4',
        blockId: 'p-iso-mechanisms',
        prompt: 'List pre-zygotic and post-zygotic reproductive isolation mechanisms.',
      },
    ],
    summaryText: 'Natural selection: (1) variation (heritable trait differences), (2) selection pressure (environment favours certain traits), (3) differential reproduction (advantageous traits reproduced more), (4) heritable change (alleles ↑ freq over generations). Allopatric speciation: geographic isolation (e.g. islands) → different selection pressures (food availability) → divergent evolution → reproductive isolation (>1 million years). Darwin\'s finches: one SA ancestor on Galápagos, isolated islands → divergent beak selection → 13 species with reproductive isolation. Sympatric speciation: polyploidy (whole-genome duplication, instant) → reproductive isolation (meiotic dysfunction in odd-ploidy hybrids). Wheat: allohexaploid (6n) from 3 diploid species. Reproductive isolation: pre-zygotic (behavioural—firefly flash patterns; temporal—different breeding times; mechanical—genitalia incompatibility), post-zygotic (hybrid inviability, sterility—mules). Pre-zygotic more efficient; natural selection favours reinforcement (stronger pre-zygotic barriers) when species re-contact.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Speciation and Reproductive Isolation',
      detail: 'Darwin\'s finches demonstrate allopatric speciation via geographic isolation and divergent selection; reproductive isolation (pre-zygotic behavioral differences) maintains species boundaries.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['speciation', 'natural selection', 'evolution'],
    },
  ],
};
