export const note_biology_2_4_7 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-classification',
      data: {
        text: 'Understand taxonomic classification, the three-domain model, and how molecular evidence has revised our understanding of life\'s diversity.',
      },
    },
    {
      type: 'heading',
      id: 'h-binomial-nomenclature',
      data: { text: 'Binomial Nomenclature and Taxonomy', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-binomial',
      data: {
        text: 'Binomial nomenclature (binomial = two names) was formalised by Carolus Linnaeus in 1758. Each organism is given a two-part scientific name: the genus (first name, capitalised) and the species (second name, lowercase), both italicised. Example: Homo sapiens (humans), Escherichia coli (bacterium), Oryza sativa (rice). The genus groups similar species; the species is the fundamental unit of classification, typically defined as populations that can interbreed and produce fertile offspring (though this definition has limits in bacteria and plants). Binomial names are Latin or Latinised, providing a universal language transcending national languages.',
      },
    },
    {
      type: 'heading',
      id: 'h-hierarchy',
      data: { text: 'Hierarchical Classification', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-hierarchy',
      data: {
        text: 'Organisms are classified into nested hierarchical ranks (Linnaean hierarchy): Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species. Each rank groups organisms by shared characteristics. Example for humans: Domain Eukarya, Kingdom Animalia, Phylum Chordata, Class Mammalia, Order Primates, Family Hominidae, Genus Homo, Species sapiens. Moving down the hierarchy, organisms become more similar (each rank is more specific). Moving up, organisms are grouped more broadly. A mnemonic: "Dear King Philip Came Over For Good Soup" (Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species).',
      },
    },
    {
      type: 'heading',
      id: 'h-three-domain',
      data: { text: 'The Three-Domain Model (Woese, 1990)', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-woese',
      data: {
        text: 'Carl Woese revolutionised taxonomy in 1977–1990 by sequencing ribosomal RNA (rRNA) from diverse organisms. rRNA is highly conserved (slowly evolving) and universal (present in all life), making it ideal for evolutionary comparisons. Woese\'s analyses revealed that life falls into three distinct domains, not the traditional kingdom-based classifications. The three domains are: (1) Bacteria—prokaryotes with bacterial cell walls (peptidoglycan), unique lipids, and bacterial ribosomes (70S). (2) Archaea—prokaryotes superficially similar to bacteria but with distinct cell wall chemistry (no peptidoglycan; some have pseudopeptidoglycan), unique lipids (ether-linked), and evolutionary history distinct from bacteria. Many archaea thrive in extreme environments (hot springs, salt lakes, deep sea). (3) Eukarya—eukaryotes with true nucleus, membrane-bound organelles, 80S ribosomes. The three domains reflect fundamental differences in molecular biology and evolutionary history, revealed by rRNA and DNA sequencing.',
      },
    },
    {
      type: 'heading',
      id: 'h-kingdoms',
      data: { text: 'Kingdoms Within Domain Eukarya', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-kingdoms-euk',
      data: {
        text: 'Within Eukarya, four or five kingdoms are traditionally recognised (classification varies slightly): (1) Protoctista (or Protista)—unicellular or simple multicellular eukaryotes, including amoebas, ciliates, flagellates, and algae; very diverse and somewhat a "catch-all" kingdom. (2) Fungi—eukaryotes with cell walls (chitin, not cellulose), heterotrophic (absorptive nutrition), storing energy as glycogen. (3) Plantae—eukaryotes with cellulose cell walls, autotrophic (photosynthesis), storing energy as starch. (4) Animalia—eukaryotes without cell walls, heterotrophic (ingestive nutrition), storing energy as glycogen. Modern molecular phylogenetics is refining these kingdoms; for example, some "protists" are now grouped with plants (green algae), fungi, or animals based on genetic similarity.',
      },
    },
    {
      type: 'heading',
      id: 'h-phylogenetic-trees',
      data: { text: 'Phylogenetic Trees and Evolutionary Relationships', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-phylo-trees',
      data: {
        text: 'Phylogenetic trees (cladograms) show evolutionary relationships among organisms, based on molecular and morphological data. A tree has a root (common ancestor) and branches (lineages). Species at the tips of branches are extant (living); branch points represent common ancestors. Closely related species share a recent common ancestor (shorter branch length); distantly related species share an ancient ancestor (longer branch length). Molecular phylogenies (based on DNA or protein sequence comparisons) are especially powerful: the more nucleotide differences between two sequences, the longer ago they diverged. rRNA, 18S rRNA particularly, is used to compare very distantly related organisms (e.g. bacteria vs. eukaryotes); protein-coding genes (like cytochrome c) compare more closely related organisms.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-domains',
      data: {
        style: 'key',
        title: 'Molecular Evidence Revised Taxonomy',
        text: 'Woese\'s rRNA sequencing revealed that what appeared to be bacteria (archaea) were actually as distinct from bacteria as bacteria are from eukaryotes. This discovery elevated archaea from a status of "odd bacteria" to their own domain, fundamentally reshaping our understanding of life\'s diversity. Molecular data has become the gold standard for phylogenetic inference, revealing evolutionary relationships invisible to morphological study alone.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-reading-trees',
      data: {
        style: 'tip',
        title: 'Reading Phylogenetic Trees',
        text: 'Key principle: branching points (nodes) represent common ancestors; species/groups connected to the same node share that ancestor. Branch length (horizontal distance) can represent time or genetic distance. Two species connected to a recent node are closely related; two connected to an ancient node are distantly related. Ignore the vertical position of labels; what matters is the branching pattern.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why did Woese propose the three-domain system to replace the five-kingdom system? Comparison of 16S/18S rRNA sequences revealed that Archaea are as different from Bacteria as from Eukarya at the molecular level, despite superficially resembling bacteria. The five-kingdom system grouped all prokaryotes together, masking this fundamental evolutionary distinction.",
        apply: "A newly discovered microorganism has: no nucleus, circular DNA, 70S ribosomes, ether-linked membrane lipids, and lives at 95°C in a hot spring. Use Woese's three-domain classification to determine which domain it belongs to, and justify your answer with reference to each feature.",
        analyze: "Compare Linnaeus's binomial classification with Woese's phylogenetic classification based on molecular data. What are the advantages and limitations of each? Why might morphological classification give misleading results for microorganisms?",
        evaluate: "Evaluate the three-domain model as the definitive classification of life. Consider evidence from horizontal gene transfer (HGT) that blurs domain boundaries, the discovery of Asgard archaea that share eukaryotic features, and whether a two-domain model (Bacteria + Archaea/Eukarya) may be more accurate.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-classification',
      data: {
        items: [
          { text: 'Understand binomial nomenclature: genus (capitalised) + species (lowercase)', checked: false },
          { text: 'Know hierarchical ranks: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species', checked: false },
          { text: 'Can explain three-domain model: Bacteria, Archaea, Eukarya (based on rRNA sequences)', checked: false },
          { text: 'Know kingdoms in Eukarya: Protoctista, Fungi, Plantae, Animalia (with characteristics)', checked: false },
          { text: 'Understand phylogenetic trees show evolutionary relationships via branching patterns', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-classification',
      data: {
        text: 'Binomial nomenclature: Genus species (e.g. Homo sapiens). Hierarchy: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species; increasingly specific. Three domains (Woese, 1990, based on rRNA): Bacteria (prokaryote, peptidoglycan wall, 70S ribosomes), Archaea (prokaryote, no peptidoglycan, ether-linked lipids, extremophiles), Eukarya (eukaryote, nucleus, 80S ribosomes). Kingdoms in Eukarya: Protoctista (unicellular/simple, diverse), Fungi (heterotrophic, chitin wall, glycogen storage), Plantae (autotrophic, cellulose wall, starch storage), Animalia (heterotrophic, no cell wall, glycogen). Phylogenetic trees: show evolutionary relationships via branching (nodes = common ancestors); molecular data (rRNA, DNA sequences) infer branching patterns.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-binomial',
        prompt: 'Explain binomial nomenclature with examples.',
      },
      {
        id: 'cue-2',
        blockId: 'p-hierarchy',
        prompt: 'List the eight hierarchical ranks and explain what each represents.',
      },
      {
        id: 'cue-3',
        blockId: 'p-woese',
        prompt: 'Describe how Woese\'s rRNA sequencing led to the three-domain model.',
      },
      {
        id: 'cue-4',
        blockId: 'p-kingdoms-euk',
        prompt: 'List the four kingdoms in Eukarya and state key characteristics of each.',
      },
    ],
    summaryText: 'Binomial nomenclature: genus (capitalised) + species (lowercase), italicised; universal Latin names (e.g. Homo sapiens). Hierarchy: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species (increasingly specific). Three domains (Woese 1990): Bacteria (prokaryote, peptidoglycan, 70S), Archaea (prokaryote, no peptidoglycan, ether lipids, extreme habitats), Eukarya (eukaryote, nucleus, 80S). Kingdoms in Eukarya: Protoctista (unicellular/simple), Fungi (chitin walls, heterotrophic, glycogen), Plantae (cellulose walls, autotrophic, starch), Animalia (no cell wall, heterotrophic, glycogen). Phylogenetic trees: show evolutionary relationships via branching; nodes = common ancestors; branch length = time/genetic distance; molecular data (rRNA, DNA) infer trees.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Molecular Phylogenetics and the Three-Domain Model',
      detail: 'Woese\'s rRNA sequence analysis revealed three primary domains of life with distinct evolutionary histories, fundamentally restructuring biological classification and highlighting the power of molecular data for inferring phylogeny.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['classification', 'three domains', 'phylogenetics'],
    },
  ],
};
