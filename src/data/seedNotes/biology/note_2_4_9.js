export const note_biology_2_4_9 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-diversity-indices',
      data: {
        text: 'Understand species richness, heterozygosity index, Simpson\'s diversity index, and how these measures inform conservation.',
      },
    },
    {
      type: 'heading',
      id: 'h-species-richness',
      data: { text: 'Species Richness', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-richness-def',
      data: {
        text: 'Species richness is the simplest measure of biodiversity: the total number of different species in a community or ecosystem. A rainforest with 500 tree species has higher richness than a temperate forest with 100. Species richness is easy to understand but has limitations: it does not account for abundance (a community dominated by one species is counted the same as an evenly diverse community) or rarity (endangered species weighted equally to common ones). Richness alone does not indicate conservation status; a community with high richness but uneven distribution (one dominant, many rare) may be more vulnerable than one with fewer but more evenly distributed species.',
      },
    },
    {
      type: 'heading',
      id: 'h-heterozygosity',
      data: { text: 'Genetic Diversity: Heterozygosity Index', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-heterozygosity',
      data: {
        text: 'Heterozygosity index (H) measures genetic diversity within a population. H is calculated as: H = (number of heterozygotes / total individuals) × 100 (expressed as percentage). High H indicates high genetic variation; alleles are diverse, and individuals are genetically different. Low H indicates low genetic variation; populations are genetically similar, often due to inbreeding or bottlenecks. H is used to assess population health: low H indicates inbreeding risk, reduced adaptability, increased vulnerability to disease. Conservation programs aim to maintain or increase H by preventing inbreeding, maximising census size, and using genetic management (assortative mating in captive breeding to maintain diversity).',
      },
    },
    {
      type: 'heading',
      id: 'h-simpson-index',
      data: { text: 'Simpson\'s Diversity Index (D)', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-simpson-formula',
      data: {
        text: 'Simpson\'s diversity index (D) measures community diversity, accounting for both richness (number of species) and evenness (relative abundance). The formula is: D = 1 - Σ(n/N)² or equivalently D = N(N-1) / Σn(n-1), where n = number of individuals of a species, N = total individuals. D ranges from 0 (no diversity; one species present) to 1 (maximum diversity; all species equally abundant). Higher D values indicate higher diversity. A community with 100 individuals of one species (D ≈ 0) is less diverse than a community with 20 individuals each of five species (D ≈ 0.8), even though richness is higher in the second case.',
      },
    },
    {
      type: 'equation',
      id: 'eq-simpson',
      data: {
        html: 'Simpson\'s D = 1 - Σ<span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">N</span></span><span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">N</span></span> &nbsp; or &nbsp; D = <span class="nb-frac"><span class="nb-num">N(N-1)</span><span class="nb-den">Σn(n-1)</span></span>',
        caption: 'Simpson\'s diversity index; D ranges 0 (no diversity) to 1 (maximum diversity).',
      },
    },
    {
      type: 'heading',
      id: 'h-worked-example',
      data: { text: 'Worked Example: Calculating Simpson\'s D', level: 2 },
    },
    {
      type: 'callout',
      id: 'callout-worked-simpson',
      data: {
        style: 'worked',
        title: 'Simpson\'s Index Calculation',
        text: 'Meadow A: 200 daisy, 150 clover, 50 grass (N=400). Using formula D = 1 - Σ(n/N)²: daisy: (200/400)² = 0.25; clover: (150/400)² = 0.141; grass: (50/400)² = 0.0156. Σ = 0.407. D = 1 - 0.407 = 0.593. Meadow B: 90 daisy, 90 clover, 90 grass, 30 buttercup (N=300). daisy: (90/300)² = 0.09; clover: 0.09; grass: 0.09; buttercup: (30/300)² = 0.01. Σ = 0.28. D = 1 - 0.28 = 0.72. Meadow B is more diverse (higher D, more evenly distributed) despite same richness in main species.',
      },
    },
    {
      type: 'heading',
      id: 'h-limitations',
      data: { text: 'Limitations of Diversity Indices', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-limitations',
      data: {
        text: 'No single index captures all aspects of biodiversity. Species richness ignores abundance and evenness. Simpson\'s D emphasises evenness and can be insensitive to rare species (a species with 1 individual contributes negligibly). Shannon index (H = -Σpi ln pi, where pi is proportion of species i) is an alternative that weights both richness and evenness. Conservation decisions require multiple indices: high richness is important (more species = more biological heritage), but evenness is also crucial (uneven communities vulnerable if dominant species fails). Rarity also matters: a species found nowhere else (endemic, high conservation value) is weighted equally to a common species in simple indices. Integrating indices with other information (endemism, threat status, ecosystem function) provides comprehensive conservation guidance.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-evenness',
      data: {
        style: 'key',
        title: 'Evenness and Community Stability',
        text: 'A community with many species but unequal abundance (one dominant, many rare) is less stable than one with equal abundance. Unequal communities risk ecosystem collapse if the dominant species is lost. Even distribution of abundance suggests niche partitioning (species dividing resources) and resilience. Simpson\'s D captures this; communities with high D are more stable.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why is genetic diversity within a species as important as species diversity for conservation? A population with low genetic diversity has limited capacity to adapt to environmental change — if all individuals are genetically similar, a single disease or climate shift could cause total population collapse (as seen with the Gros Michel banana and Panama disease).",
        apply: "A cheetah population has only 2% heterozygosity (compared to ~15% in domestic cats). If 1000 cheetahs are genotyped at 50 microsatellite loci and the expected heterozygous loci per individual is 1 (2%), calculate the heterozygosity index H. Explain why this value indicates high extinction risk.",
        analyze: "Compare three measures of biodiversity: species richness (S), Shannon index (H'), and Simpson's index (D). For each: state what it measures, its formula, its range, and its sensitivity to rare vs common species. Which is most useful for conservation management?",
        evaluate: "Evaluate whether it is more important to conserve genetic diversity within a single endangered species (e.g. mountain gorilla, ~1000 individuals) or to protect a diverse ecosystem (e.g. a rainforest patch) containing thousands of less endangered species. Justify using biodiversity metrics and conservation principles.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-diversity-indices',
      data: {
        items: [
          { text: 'Define species richness and understand its limitations', checked: false },
          { text: 'Know heterozygosity index (H) measures genetic diversity within populations', checked: false },
          { text: 'Can calculate Simpson\'s D using either formula', checked: false },
          { text: 'Understand D ranges 0–1; higher values = greater diversity', checked: false },
          { text: 'Know Simpson\'s D accounts for evenness; richness alone does not', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-diversity-indices',
      data: {
        text: 'Species richness: count of different species; easy but ignores abundance/evenness. Heterozygosity index H = (heterozygotes/total) × 100%; measures genetic diversity within population; low H indicates inbreeding/bottleneck risk. Simpson\'s D = 1 - Σ(n/N)² = N(N-1)/Σn(n-1); D ∈ [0,1]; D=0 (single species), D=1 (all species equal, maximum diversity). Simpson\'s D accounts for both richness and evenness; two communities with same richness can have different D. Limitations: richness ignores abundance; Simpson\'s D insensitive to rare species. Shannon index (H = -Σpi ln pi) alternative. Conservation requires multiple indices plus consideration of endemism, threat status, ecosystem function.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-richness-def',
        prompt: 'Define species richness and explain its limitations.',
      },
      {
        id: 'cue-2',
        blockId: 'p-heterozygosity',
        prompt: 'What is heterozygosity index, and why is high H important for conservation?',
      },
      {
        id: 'cue-3',
        blockId: 'eq-simpson',
        prompt: 'Write the Simpson\'s D formula and explain what D = 0 and D = 1 mean.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-worked-simpson',
        prompt: 'Calculate Simpson\'s D for a community with 100 species A, 50 species B, 50 species C (N=200).',
      },
    ],
    summaryText: 'Species richness: total number of species; simple but ignores abundance (uneven distribution not captured). Heterozygosity index H = (heterozygotes/total) × 100%; genetic diversity within population; low H = inbreeding risk, reduced adaptability; conservation aims to maintain high H. Simpson\'s D = 1 - Σ(n/N)² = N(N-1)/Σn(n-1); accounts for richness AND evenness (abundance distribution). D ranges 0–1: D=0 (single species, no diversity), D=1 (all species equally abundant, maximum diversity). Example: community with 100 A, 50 B, 50 C (N=200) has D = 1 - [(0.5)² + (0.25)² + (0.25)²] = 1 - 0.375 = 0.625. Two communities with same richness can differ in D if abundance is uneven. Limitations: richness ignores abundance; Simpson\'s D insensitive to rare species. Multiple indices needed for conservation; also consider endemism, threat status, ecosystem function.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Diversity Indices in Ecological Assessment',
      detail: 'Simpson\'s D and other indices quantify community diversity integrating both richness and evenness; widely used in conservation planning to identify biodiversity hotspots and assess ecosystem health.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['diversity indices', 'conservation', 'ecology'],
    },
  ],
};
