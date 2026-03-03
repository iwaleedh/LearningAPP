export const note_biology_2_4_8 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-biodiversity',
      data: {
        text: 'Understand biodiversity (species richness, genetic diversity, ecosystem diversity), endemism, hotspots, and conservation status classification.',
      },
    },
    {
      type: 'heading',
      id: 'h-biodiversity-def',
      data: { text: 'Biodiversity: Three Levels', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-levels',
      data: {
        text: 'Biodiversity encompasses three interconnected levels: (1) Species richness—the number of different species in a given area or ecosystem. A rainforest with 500 tree species is more species-rich than a temperate forest with 100. (2) Genetic diversity—variation within a species; populations with high genetic diversity can adapt to environmental changes; low genetic diversity (bottlenecks) limits adaptability. (3) Ecosystem diversity—variety of habitats and ecological communities; a landscape with forests, wetlands, grasslands, and rivers has higher ecosystem diversity than one dominated by a single habitat.',
      },
    },
    {
      type: 'heading',
      id: 'h-endemism',
      data: { text: 'Endemism and Biodiversity Hotspots', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-endemic',
      data: {
        text: 'An endemic species is found naturally only in a specific geographic area, nowhere else on Earth. Endemism often results from geographic isolation (islands, isolated mountain ranges) combined with speciation over millions of years. Tropical rainforests have extremely high endemism; the Atlantic Forest of Brazil, covering only ~1% of South America, harbours ~40% endemic bird species. Madagascar, an island isolated from Africa and Asia, has ~90% endemic mammals—most lemur species exist nowhere else. Biodiversity hotspots are regions with exceptionally high species richness and high endemism, particularly under threat from habitat loss. Conservation International identifies 34 biodiversity hotspots (e.g. tropical rainforests, coral reefs, Madagascar, Succulent Karoo) covering ~2% of Earth\'s land but containing ~50% of all land species.',
      },
    },
    {
      type: 'heading',
      id: 'h-threats',
      data: { text: 'Major Threats to Biodiversity', level: 2 },
    },
    {
      type: 'list',
      id: 'list-threats',
      data: {
        style: 'bullet',
        items: [
          'Habitat loss and degradation: deforestation, wetland drainage, agricultural conversion; the primary cause of species extinction',
          'Overexploitation (overhunting, overfishing): unsustainable harvest of species faster than reproduction; rhinoceros poaching, shark finning',
          'Invasive species: non-native species introduced (accidentally or intentionally) that outcompete native species; example: cane toad in Australia',
          'Climate change: temperature/precipitation shifts force species to migrate or adapt; polar ice loss threatens seals and polar bears; coral bleaching from warming oceans',
          'Pollution: pesticides, heavy metals, plastics in soil, water, air; impacts reproduction, immune function, and development',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-iucn-list',
      data: { text: 'IUCN Red List Categories', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-categories',
      data: {
        text: 'The International Union for Conservation of Nature (IUCN) Red List assigns conservation status to species based on risk of extinction. Categories (from least to most threatened): (1) Extinct (EX)—no individuals remaining (e.g. dodo, thylacine). (2) Extinct in the Wild (EW)—only survive in captivity; e.g. Arabian oryx (extinct in wild, reintroduced via captive breeding "Operation Oryx"). (3) Critically Endangered (CR)—extremely high extinction risk; <250 individuals or <50% population surviving (<10 years). (4) Endangered (EN)—high extinction risk; <2500 individuals. (5) Vulnerable (VU)—moderate extinction risk; <10,000 individuals or population decline >30%. (6) Near Threatened (NT)—approaching threatened threshold. (7) Least Concern (LC)—stable populations, abundant. (8) Data Deficient (DD)—insufficient data. These categories guide conservation priorities; CR and EN species receive urgent intervention.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-hotspots',
      data: {
        style: 'key',
        title: 'Biodiversity Hotspots: Conservation Priorities',
        text: 'Biodiversity hotspots (tropical rainforests, coral reefs, Mediterranean regions) contain disproportionately high species richness and endemism, making them critical for global conservation. Protecting ~2% of hotspot land would conserve ~50% of threatened species. Focus on hotspots maximises conservation impact with limited resources.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-status',
      data: {
        style: 'tip',
        title: 'IUCN Categories: Remember CR = Critically Endangered',
        text: 'CR (Critically Endangered) = most urgent (e.g. Sumatran rhino ~80 individuals). EN (Endangered) = high risk. VU (Vulnerable) = moderate risk. LC (Least Concern) = stable. Think of it as a risk scale: higher letters = higher risk. EX (Extinct) is the end state.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why are island species particularly vulnerable to extinction? Island endemics evolve in isolation without mammalian predators and often show no fear response (tameness). When humans introduce predators (rats, cats), their naivety makes them extremely vulnerable. Small island populations also suffer from genetic drift and inbreeding, reducing adaptive capacity.",
        apply: "Hawaii has 1,000 native plant species, of which 850 are endemic. Calculate the endemism rate. If invasive species cause a 40% loss of native plant species over 50 years, calculate: (a) species remaining, (b) endemic species lost. Explain why this represents a disproportionate global biodiversity loss.",
        analyze: "Compare the threats to biodiversity posed by habitat loss, invasive species, climate change, and overexploitation. For each: describe the mechanism of species loss, give a specific case study, and assess whether the damage is reversible.",
        evaluate: "Evaluate the IUCN Red List as a tool for conservation prioritisation. Consider its strengths (standardised, data-rich, globally recognised), limitations (taxonomic bias towards vertebrates, data-deficient species), and whether prioritising flagship species (pandas, tigers) diverts resources from ecologically important but less charismatic organisms.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-biodiversity',
      data: {
        items: [
          { text: 'Define species richness, genetic diversity, ecosystem diversity', checked: false },
          { text: 'Know endemism = species unique to one geographic area', checked: false },
          { text: 'Understand biodiversity hotspots: high richness/endemism, under threat', checked: false },
          { text: 'List five major threats to biodiversity', checked: false },
          { text: 'Know IUCN categories: CR, EN, VU, LC; understand what each indicates', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-biodiversity',
      data: {
        text: 'Biodiversity: (1) species richness (number of species), (2) genetic diversity (within-species variation), (3) ecosystem diversity (habitat variety). Endemic species found naturally only in one area; high endemism in isolated regions (islands, mountains). Biodiversity hotspots: ~2% of land with ~50% of species, high endemism, under threat (tropical rainforests, coral reefs, Madagascar). Threats: habitat loss (deforestation, primary cause), overexploitation (poaching, overfishing), invasive species (outcompete natives), climate change (temperature/moisture shifts), pollution (pesticides, plastics). IUCN Red List: Extinct (EX), Extinct in Wild (EW), Critically Endangered (CR, <250 individuals, <50% surviving), Endangered (EN, <2500), Vulnerable (VU, <10,000 or >30% decline), Near Threatened (NT), Least Concern (LC), Data Deficient (DD). Conservation priority: protect hotspots to conserve maximum species.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-levels',
        prompt: 'Define species richness, genetic diversity, and ecosystem diversity.',
      },
      {
        id: 'cue-2',
        blockId: 'p-endemic',
        prompt: 'What is endemism, and why do hotspots have high endemism?',
      },
      {
        id: 'cue-3',
        blockId: 'list-threats',
        prompt: 'List and explain five major threats to biodiversity.',
      },
      {
        id: 'cue-4',
        blockId: 'p-categories',
        prompt: 'Describe IUCN Red List categories from least to most threatened.',
      },
    ],
    summaryText: 'Biodiversity: species richness (number of species in area), genetic diversity (variation within species, affects adaptability), ecosystem diversity (habitat variety, e.g. forest-wetland-grassland). Endemic species: found naturally only in one area (e.g. Madagascar lemurs, ~90% endemic). Biodiversity hotspots: regions with exceptional richness + high endemism, under threat; ~34 hotspots cover ~2% Earth but contain ~50% terrestrial species. Threats: habitat loss (deforestation, primary cause), overexploitation (poaching, overfishing), invasive species (outcompete natives), climate change (temp/precipitation shifts), pollution (pesticides, heavy metals, plastics). IUCN Red List: EX (Extinct), EW (Extinct in Wild, e.g. Arabian oryx captive only), CR (Critically Endangered, <250 or <50% surviving, most urgent), EN (Endangered, <2500), VU (Vulnerable, <10,000), NT (Near Threatened), LC (Least Concern), DD (Data Deficient). Conservation focus: protect hotspots to maximise species protected with limited resources.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Biodiversity Hotspots and Conservation Strategy',
      detail: 'Conservation International identified 34 biodiversity hotspots with exceptional species richness and endemism; protecting these regions maximises conservation impact, protecting ~50% of threatened species with investment in ~2% of Earth\'s land.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['biodiversity', 'conservation', 'hotspots'],
    },
  ],
};
