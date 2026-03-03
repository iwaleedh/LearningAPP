export const note_biology_2_4_13 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-conservation',
      data: {
        text: 'Understand in-situ and ex-situ conservation strategies, including zoos, seed banks, and rewilding.',
      },
    },
    {
      type: 'heading',
      id: 'h-conservation-intro',
      data: { text: 'Conservation Strategies: In-Situ and Ex-Situ', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro',
      data: {
        text: 'Conservation aims to preserve biodiversity, prevent extinction, and maintain ecosystem function. Two main approaches: In-situ (in place) conservation protects species in their natural habitats. Ex-situ (away from place) conservation maintains species outside their natural range, typically in captivity. Both approaches are necessary; ex-situ buys time while in-situ habitat restoration occurs.',
      },
    },
    {
      type: 'heading',
      id: 'h-in-situ',
      data: { text: 'In-Situ Conservation', level: 2 },
    },
    {
      type: 'list',
      id: 'list-in-situ',
      data: {
        style: 'bullet',
        items: [
          'Protected areas (national parks, nature reserves): land legally protected from development; examples include Serengeti (Tanzania), Yellowstone (USA)',
          'Wildlife corridors: connected habitats allowing animal movement between fragmented reserves, maintaining gene flow',
          'Habitat restoration: active reconstruction of degraded ecosystems (reforestation, wetland restoration)',
          'Sustainable use: regulated harvest of species (sustainable fishing, timber harvesting) that balances use with regeneration',
          'Legal protection: endangered species laws (CITES, CBD) prohibit international trade and hunting',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-ex-situ',
      data: { text: 'Ex-Situ Conservation', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-zoos',
      data: {
        text: 'Zoos and aquariums maintain endangered species through captive breeding programs. Breeding is managed genetically to maintain diversity and prevent inbreeding. Example: Arabian oryx (extinct in wild by 1970s, 9 individuals in captive stock) were bred in zoos and reintroduced to Oman in "Operation Oryx" (1982); ~1000 now live in the wild. Zoos also provide education and research opportunities. However, captive breeding has limitations: small founding populations may have low genetic diversity (founder effect); adaptation to captivity can reduce fitness for reintroduction; space is limited.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-seed-banks',
      data: {
        text: 'Seed banks conserve plant genetic diversity. The Svalbard Global Seed Vault (Norway) stores millions of seed samples from crop varieties and wild plants at -18°C with low humidity, preserving viability for centuries. Seeds can be tested for viability and regenerated if populations are lost. Seed banking is ideal for long-lived storage of large diversity in small space. Limitations: not all plants produce viable seeds (recalcitrant seeds in tropical plants); dead/sterile species cannot be banked; genetic diversity is frozen at the time of collection.',
      },
    },
    {
      type: 'heading',
      id: 'h-cites-cbd',
      data: { text: 'International Agreements: CITES and CBD', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-cites-cbd',
      data: {
        text: 'CITES (Convention on International Trade in Endangered Species, 1973) regulates international trade in endangered species and their products, preventing overhunting (e.g. ban on ivory trade reduces elephant poaching). CBD (Convention on Biological Diversity, 1992) commits nations to conserve biodiversity, maintain sustainable use, and equitably share benefits from genetic resources. Together, these treaties provide legal frameworks for conservation.',
      },
    },
    {
      type: 'heading',
      id: 'h-rewilding',
      data: { text: 'Rewilding: Restoring Ecosystems', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-rewilding',
      data: {
        text: 'Rewilding aims to restore ecosystems to a "wilder" state by reintroducing species, removing invasive species, and reducing human control. Examples: reintroducing wolves to Yellowstone (1995) restored ecosystem balance; reintroducing beavers to UK rivers restores riparian habitats. Rewilding improves biodiversity, ecosystem resilience, and carbon sequestration. However, conflicts arise: local people may oppose predator reintroduction; reintroduced species may compete with native species if ecosystems have changed.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-conservation',
      data: {
        style: 'key',
        title: 'In-Situ is Ideal, Ex-Situ is Essential',
        text: 'In-situ conservation is preferred: species maintain natural behaviours, genetic diversity, and ecological interactions. Ex-situ is necessary when in-situ fails (habitat destroyed, species functionally extinct in wild). Both together are most effective: ex-situ breeding maintains species while in-situ habitat restoration occurs.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-conservation',
      data: {
        style: 'tip',
        title: 'Conservation Priorities',
        text: 'Focus on: (1) prevent habitat loss (main cause of extinction), (2) protect hotspots (high richness, endemism), (3) maintain genetic diversity (large populations), (4) reduce human-wildlife conflict (local support essential).',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why is reproductive isolation the defining criterion for speciation, rather than morphological difference? Morphology can differ widely within a species (dog breeds) and can be similar across species (cryptic species). Reproductive isolation — inability to produce fertile offspring — defines the species boundary because gene flow ceases, allowing independent evolutionary trajectories.",
        apply: "Two lizard populations are separated by a mountain range for 100,000 years. Population A evolves heat tolerance; Population B evolves camouflage. When they meet again, they can interbreed but hybrids have 50% lower survival. Classify the reproductive isolation mechanism and predict what will happen to allele frequencies over the next 10,000 years.",
        analyze: "Compare allopatric speciation (geographic isolation) with sympatric speciation (polyploidy in plants). For each: describe the isolation mechanism, speed of speciation, role of natural selection, and give a specific example. Which is more common in animals vs plants, and why?",
        evaluate: "Evaluate the biological species concept (BSC) as a definition of species. Consider its strengths (clear criterion: reproductive isolation), weaknesses (cannot be applied to asexual organisms, fossils, or organisms that produce fertile hybrids), and compare with the phylogenetic species concept.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-conservation',
      data: {
        items: [
          { text: 'Know in-situ conservation: protected areas, wildlife corridors, habitat restoration', checked: false },
          { text: 'Understand ex-situ: zoos (captive breeding), seed banks, genetic management', checked: false },
          { text: 'Know Operation Oryx example: Arabian oryx extinct in wild, bred in zoos, reintroduced', checked: false },
          { text: 'Understand Svalbard Global Seed Vault stores millions of seed samples', checked: false },
          { text: 'Know CITES and CBD are international conservation agreements', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-conservation',
      data: {
        text: 'In-situ (in place): protected areas (national parks, nature reserves), wildlife corridors (connect habitats, enable gene flow), habitat restoration, sustainable use, legal protection (CITES, CBD). Ex-situ (away from place): zoos (captive breeding, e.g. Arabian oryx Operation Oryx, 1970s extinct wild→9 captive→1000 wild now), seed banks (Svalbard: -18°C, low humidity, millions of seeds preserved centuries), genetic management (avoid inbreeding). CITES (1973): regulate endangered species trade. CBD (1992): commit to conservation, sustainable use, benefit-sharing. Rewilding: reintroduce species, remove invasives, restore ecosystem (e.g. wolves to Yellowstone). In-situ ideal (natural behaviours, diversity, interactions); ex-situ essential (buys time for habitat restoration). Both needed for effective conservation.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-intro',
        prompt: 'Distinguish in-situ and ex-situ conservation.',
      },
      {
        id: 'cue-2',
        blockId: 'p-zoos',
        prompt: 'Describe Operation Oryx and explain its success.',
      },
      {
        id: 'cue-3',
        blockId: 'p-seed-banks',
        prompt: 'Describe the Svalbard Global Seed Vault and its role in plant conservation.',
      },
      {
        id: 'cue-4',
        blockId: 'p-rewilding',
        prompt: 'What is rewilding, and give an example.',
      },
    ],
    summaryText: 'In-situ: protect species in natural habitats—protected areas (national parks), wildlife corridors (connect fragmented reserves, maintain gene flow), habitat restoration (reforestation), sustainable use (regulated harvest), legal protection (CITES, CBD). Ex-situ: captive breeding (zoos) and seed banking—maintain species away from natural range. Arabian oryx: extinct in wild (1970s, 9 captive founders) → Operation Oryx (1982 reintroduction) → ~1000 wild now. Svalbard Global Seed Vault: -18°C, low humidity, millions of crop/wild seeds, preserves viability centuries. CITES (1973): ban endangered species trade. CBD (1992): conservation, sustainable use, benefit-sharing. Rewilding: reintroduce species, remove invasives, restore ecosystem (wolves→Yellowstone). In-situ preferred (natural behaviours, diversity); ex-situ essential (buy time for habitat restoration). Effective conservation: prevent habitat loss, protect hotspots, maintain genetic diversity, reduce human-wildlife conflict.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Conservation Success: Operation Oryx',
      detail: 'Arabian oryx extinct in wild by 1970 but successfully bred in captive zoo programs and reintroduced to Oman, demonstrating the effectiveness of ex-situ conservation combined with in-situ habitat protection.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['conservation', 'ex-situ', 'species recovery'],
    },
  ],
};
