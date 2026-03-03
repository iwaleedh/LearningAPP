export const note_biology_2_4_10 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-niches',
      data: {
        text: 'Understand ecological niches, competitive exclusion, resource partitioning, and adaptive features of organisms.',
      },
    },
    {
      type: 'heading',
      id: 'h-niche-def',
      data: { text: 'Ecological Niche', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-niche',
      data: {
        text: 'An ecological niche is the role and position an organism occupies within its environment. It encompasses all the conditions and resources an organism uses: the food it eats, the space it inhabits, the time of day/year it is active, its predators, its competitors, its temperature tolerance, humidity preference, light requirements, and all other environmental factors affecting its survival and reproduction. A niche is multidimensional: a bird\'s niche includes the height of trees it forages in, the size of insects it eats, the season it breeds, its nest site, and more. Two species cannot occupy the exact same niche in the same place at the same time.',
      },
    },
    {
      type: 'heading',
      id: 'h-competitive-exclusion',
      data: { text: 'Competitive Exclusion Principle (Gause\'s Law)', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-exclusion',
      data: {
        text: 'Gause\'s principle states: two species cannot indefinitely coexist if they use the same resource and occupy the same niche in the same place. In competition experiments with Paramecium protozoa, Gause found that when two species (P. aurelia and P. caudatum) were grown together, one outcompeted and eliminated the other within weeks. The competitive exclusion principle predicts that species must diverge (differentiate their niches) to coexist, or one must be excluded. In nature, competitive exclusion is common: when an invasive species is introduced (e.g. cane toad in Australia), it often outcompetes native species for food and space, causing local extinction.',
      },
    },
    {
      type: 'heading',
      id: 'h-resource-partitioning',
      data: { text: 'Resource Partitioning and Niche Differentiation', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-partitioning',
      data: {
        text: 'Resource partitioning is the division of resources among species to reduce competition. Darwin\'s finches (Galapagos) exemplify this: 13 species evolved from a common ancestor, each with beak shapes and sizes adapted to different food sources. Large-beaked finches crack hard seeds; medium-beaked eat medium seeds; small-beaked eat small seeds and insects. This morphological divergence (character displacement) reduces competition and allows coexistence. Temporal partitioning also occurs: nocturnal species avoid competition with diurnal ones. Spatial partitioning: different species forage at different heights (warblers in different tree layers). Resource partitioning reflects evolutionary adaptation to available resources; it enables high species richness in ecosystems (rainforests support thousands of species via extensive partitioning).',
      },
    },
    {
      type: 'heading',
      id: 'h-adaptive-features',
      data: { text: 'Adaptive Features: Structural, Physiological, Behavioural', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-adaptations',
      data: {
        text: 'Adaptive features are characteristics enabling organisms to survive and reproduce in their environment. Structural (morphological) adaptations: finch beak shape, leaf shape in plants, body size. Physiological adaptations: metabolic rate, salt tolerance, temperature regulation. Behavioural adaptations: feeding strategy, mating system, migration. Adaptations to different niches vary: a nectar-feeding hummingbird has a long, thin beak; a seed-cracking finch has a thick, powerful beak. A desert plant has waxy cuticle and reduced leaves; a rainforest plant has large leaves and thin cuticle.',
      },
    },
    {
      type: 'heading',
      id: 'h-xerophytes',
      data: { text: 'Xerophytes: Adaptation to Dry Environments', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-xerophytes',
      data: {
        text: 'Xerophytes are plants adapted to dry (xeric) environments. Adaptations reduce water loss and increase water uptake: (1) Reduced leaf area—some xerophytes have no leaves (e.g. cacti with spines instead of leaves) or very small leaves (pine needles), reducing transpirational surface. (2) Rolled or folded leaves (e.g. marram grass)—rolling encloses stomata on the lower surface, trapping humid air and reducing transpiration. (3) Sunken stomata—stomata positioned in pits or grooves below the leaf surface, surrounded by hairs (trichomes) that trap moist air. (4) Thick cuticle—waxy, multilayered cuticle reduces cuticular transpiration. (5) Water storage tissues—succulent plants (cacti, aloe) store water in fleshy tissues (parenchyma cells with large vacuoles), enabling survival during droughts. (6) Deep root systems—long roots penetrate deep soil to access groundwater. (7) CAM photosynthesis (some xerophytes)—open stomata at night (cooler, lower transpiration) to absorb CO₂, store it as malic acid, and perform photosynthesis during the day with stomata closed.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-niche',
      data: {
        style: 'key',
        title: 'Niche ≠ Habitat',
        text: 'Habitat is the place where an organism lives (e.g. "the forest"). Niche is the role it plays within that place (what it eats, where/when it forages, its interactions). Many species can share a habitat but occupy different niches. A rainforest is one habitat; trees, epiphytes, insects, fungi, and soil microbes all occupy the same habitat but very different niches.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-xerophytes',
      data: {
        style: 'tip',
        title: 'Xerophyte Adaptations: Water Conservation',
        text: 'Think: reduce loss (small/rolled leaves, thick cuticle, sunken stomata), store water (succulence), and access water (deep roots). CAM photosynthesis is advanced: open stomata at night (low transpiration), close by day (prevents water loss), yet still photosynthesise. This temporal separation (night CO₂ uptake, day photosynthesis) is a clever adaptation.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why does Simpson's index weight abundant species more heavily than rare species? The formula D = 1 − Σ(n/N)² squares the proportional abundance of each species; a few very abundant species contribute disproportionately to the sum, reducing D. This reflects the principle that a community dominated by one species is functionally less diverse than one with many equally abundant species.",
        apply: "A grassland contains: A (40), B (30), C (20), D (5), E (5 individuals). N = 100. Calculate Simpson's index D. Then compare with a grassland where each of the 5 species has 20 individuals. Calculate D and explain which community is more diverse and why.",
        analyze: "Compare two woodland habitats: Habitat X has 15 species with D = 0.92; Habitat Y has 8 species with D = 0.85. Which has higher species richness, and which has greater evenness? Explain why a habitat with more species can have a lower diversity index.",
        evaluate: "Evaluate the limitations of using Simpson's index as the sole measure for conservation site designation. Consider what it does not measure (keystone species, trophic levels, functional diversity, genetic diversity within species) and whether single-metric approaches to biodiversity assessment are sufficient.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-niches',
      data: {
        items: [
          { text: 'Define ecological niche: all conditions and resources an organism uses', checked: false },
          { text: 'Explain Gause\'s competitive exclusion principle', checked: false },
          { text: 'Understand resource partitioning enables coexistence (Darwin\'s finches example)', checked: false },
          { text: 'Know structural, physiological, behavioural adaptations', checked: false },
          { text: 'Can list xerophyte adaptations: reduced leaves, rolled leaves, sunken stomata, thick cuticle, water storage, deep roots, CAM', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-niches',
      data: {
        text: 'Ecological niche: multidimensional (food, space, time, conditions) role of organism in ecosystem. Gause\'s principle: two species cannot indefinitely coexist occupying same niche; competition excludes one. Resource partitioning: species differentiate niches (Darwin\'s finches—beak size/shape for different seeds; temporal partitioning—nocturnal vs. diurnal; spatial—different foraging heights). Morphological character displacement: adaptive divergence reducing competition. Adaptations: structural (beak, leaf), physiological (metabolic rate, salt tolerance), behavioural (feeding, mating). Xerophytes (dry environment): reduced leaves (less transpiration), rolled/folded leaves (sunken stomata trap humid air), thick cuticle (waxy, reduces cuticular transpiration), water storage (succulence: vacuolated parenchyma), deep roots (access groundwater), CAM photosynthesis (open stomata night, close day, photosynthesise with stored CO₂).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-niche',
        prompt: 'Define an ecological niche and distinguish it from habitat.',
      },
      {
        id: 'cue-2',
        blockId: 'p-exclusion',
        prompt: 'State Gause\'s principle and explain its ecological significance.',
      },
      {
        id: 'cue-3',
        blockId: 'p-partitioning',
        prompt: 'Explain resource partitioning with Darwin\'s finches as an example.',
      },
      {
        id: 'cue-4',
        blockId: 'p-xerophytes',
        prompt: 'List seven adaptations of xerophytes to dry environments.',
      },
    ],
    summaryText: 'Ecological niche: multidimensional (food, space, time, temperature, humidity, predators, competitors) role organism occupies in ecosystem. Habitat: physical place (forest, desert); niche: organism\'s role within habitat. Gause\'s principle: two species cannot coexist indefinitely if occupying same niche (competition excludes one). Resource partitioning: species differentiate niches to coexist—Darwin\'s finches evolved different beak sizes/shapes (different food sources); temporal partitioning (nocturnal/diurnal); spatial partitioning (different foraging heights). Character displacement: morphological divergence reducing competition. Adaptations: structural (finch beak, leaf shape, body size), physiological (metabolism, salt tolerance, temperature), behavioural (feeding, mating, migration). Xerophytes: reduced/small leaves (↓ transpiration), rolled/folded leaves (sunken stomata, trap humid air), thick waxy cuticle (↓ cuticular transpiration), water storage tissues/succulence (vacuolated parenchyma), deep roots (access groundwater), CAM photosynthesis (night CO₂ uptake/storage, day photosynthesis with stomata closed).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Resource Partitioning and Species Coexistence',
      detail: 'Darwin\'s finches demonstrate resource partitioning via beak morphology divergence, enabling 13 species to coexist on small islands by specialising on different food sources, exemplifying how niche differentiation prevents competitive exclusion.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['niches', 'competition', 'adaptation'],
    },
  ],
};
