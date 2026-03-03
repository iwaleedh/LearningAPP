export const note_biology_4_6_2 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Compare bacterial and viral structure, including cell walls, ribosomes, plasmids, and metabolic capabilities. Understand bacteriophage structure and how viruses differ fundamentally from living organisms.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Bacteria vs Viruses: Fundamental Differences', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Bacteria and viruses are often confused, but they are fundamentally different. Bacteria are living prokaryotic cells capable of independent growth and metabolism. Viruses are non-living infectious particles that can only replicate inside host cells. Understanding these differences is crucial for microbiology, infection control, and developing appropriate treatments.'
      },
      terms: []
    },
    {
      id: 'h-bact-struct',
      type: 'heading',
      data: { text: 'Bacterial Structure', level: 2 },
      terms: []
    },
    {
      id: 'p-bact-size',
      type: 'paragraph',
      data: {
        text: 'Bacteria are prokaryotic cells, typically 1–10 micrometres (microm) in diameter. They possess a cell membrane (phospholipid bilayer), a rigid cell wall composed primarily of peptidoglycan (a polymer of amino sugars and amino acids), and cytoplasm containing 70S ribosomes. Many bacteria also contain plasmids—small, circular, double-stranded DNA molecules separate from the main chromosome.'
      },
      terms: []
    },
    {
      id: 'callout-bact-feat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Bacterial Features',
        text: 'Prokaryotic; 1–10 microm size; peptidoglycan cell wall; 70S ribosomes; contain DNA and RNA; capable of reproduction by binary fission; have metabolism (respiration); can be cultured on agar medium; exist in diverse environments.'
      },
      terms: []
    },
    {
      id: 'h-virus-struct',
      type: 'heading',
      data: { text: 'Viral Structure', level: 2 },
      terms: []
    },
    {
      id: 'p-virus-size',
      type: 'paragraph',
      data: {
        text: 'Viruses are much smaller than bacteria, typically 20–300 nanometres (nm) in diameter. A virus consists of a protein shell called a capsid that encloses genetic material—either DNA or RNA (single or double-stranded). Some viruses have an additional lipid envelope derived from the host cell membrane. Viruses lack ribosomes, mitochondria, and other organelles; they have no cell wall or cell membrane of their own.'
      },
      terms: []
    },
    {
      id: 'callout-virus-feat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Viral Features',
        text: 'Non-cellular; 20–300 nm size; protein capsid (no membrane); nucleic acid core (DNA or RNA); no ribosomes or metabolism; obligate intracellular parasite (requires host cell); cannot be cultured on agar; replicate only inside host cells.'
      },
      terms: []
    },
    {
      id: 'h-bact-meta',
      type: 'heading',
      data: { text: 'Metabolism and Independence', level: 2 },
      terms: []
    },
    {
      id: 'p-bact-meta',
      type: 'paragraph',
      data: {
        text: 'Bacteria are living organisms because they have metabolism—they can obtain energy and nutrients from their environment, synthesise proteins using their 70S ribosomes, and perform all life processes. They grow, reproduce independently, and respond to environmental stimuli. They are culturable on nutrient agar media.'
      },
      terms: []
    },
    {
      id: 'p-virus-meta',
      type: 'paragraph',
      data: {
        text: 'Viruses lack metabolism and cannot survive independently. They cannot synthesise their own proteins or ATP. Instead, they are obligate intracellular parasites that hijack host cell machinery (ribosomes, ATP, nucleotides) to replicate. Outside a host cell, a virus is inert—neither alive nor dead. Viruses cannot be cultured on nutrient agar; they require living host cells.'
      },
      terms: []
    },
    {
      id: 'h-phage',
      type: 'heading',
      data: { text: 'Bacteriophage Structure', level: 2 },
      terms: []
    },
    {
      id: 'p-phage-intro',
      type: 'paragraph',
      data: {
        text: 'Bacteriophages (phages) are viruses that infect bacteria. A typical phage (like T4 phage) has a distinctive structure: an icosahedral protein head containing DNA, a helical tail tube, tail sheath, base plate, and tail fibres. The head is called the capsid; the DNA inside is the genome. The tail and base plate are used for attachment and DNA injection into the bacterial cell.'
      },
      terms: []
    },
    {
      id: 'svg-phage',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><defs><style>.phage-head { fill: #6366f1; } .phage-label { font-size: 11px; } .arrow { stroke: #333; stroke-width: 1; marker-end: url(#arrowhead); }</style><defs><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#333"/></marker></defs></defs><polygon class="phage-head" points="150,50 170,80 160,110 140,110 130,80"/><text x="175" y="65" class="phage-label">Head (capsid)</text><text x="175" y="80" class="phage-label">DNA genome</text><line x1="150" y1="110" x2="150" y2="170" stroke="#333" stroke-width="3"/><text x="155" y="140" class="phage-label">Tail sheath</text><circle cx="150" cy="175" r="8" fill="none" stroke="#333" stroke-width="2"/><text x="160" y="180" class="phage-label">Base plate</text><line x1="140" y1="175" x2="110" y2="210" stroke="#333" stroke-width="1"/><text x="95" y="220" class="phage-label">Tail fibres</text><line x1="160" y1="175" x2="190" y2="210" stroke="#333" stroke-width="1"/><text x="190" y="220" class="phage-label">Attachment</text></svg>',
        caption: 'Typical bacteriophage structure (T4-like): icosahedral head with DNA, tail sheath, base plate, and tail fibres'
      },
      terms: []
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Bacteria', 'Virus'],
        rows: [
          ['Classification', 'Living prokaryote', 'Non-living particle'],
          ['Size', '1–10 microm', '20–300 nm'],
          ['Genetic material', 'DNA (chromosome + plasmids)', 'DNA or RNA (single or double-stranded)'],
          ['Ribosomes', '70S (can synthesise proteins)', 'None'],
          ['Cell wall', 'Peptidoglycan', 'None (capsid protein coat instead)'],
          ['Envelope', 'Cell membrane', 'None (some have lipid envelope)'],
          ['Metabolism', 'Yes (respiration, photosynthesis)', 'None'],
          ['Reproduction', 'Binary fission (independent)', 'Only inside host cells (obligate parasite)'],
          ['Cultivation', 'Can grow on nutrient agar', 'Requires living host cells'],
          ['Antibiotics effective?', 'Yes (target cell wall, ribosomes)', 'No (lack affected targets)']
        ],
        caption: 'Bacteria vs viruses: structural and functional comparison'
      },
      terms: []
    },
    {
      id: 'callout-life',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Viruses Are Not Living',
        text: 'Viruses lack metabolism, ribosomes, and the ability to synthesise molecules. They cannot perform any life process outside a host cell. They are genetic material packaged in protein, entirely dependent on hijacking host machinery. By this definition, they are non-living infectious agents, not organisms.'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Bacteria are prokaryotic cells with cell walls (peptidoglycan), ribosomes, and metabolism. Viruses are non-cellular packages of DNA/RNA in protein coats. The fundamental difference is that bacteria have metabolism and independence; viruses are obligate intracellular parasites with no metabolism. Bacteriophages are viruses infecting bacteria, with characteristic head-tail architecture.',
        apply: 'A phage has a head diameter of 100 nm and DNA content of 48 kb. A bacterium has diameter of 2 microm and chromosome of 4.6 million bp. Calculate the size ratio (200×) and genetic material ratio (~96×). Why is the phage so much smaller?',
        analyze: 'Why can antibiotics kill bacteria but not viruses? What would happen if antibiotics targeted peptidoglycan in a viral infection?',
        evaluate: 'Some scientists argue viruses should be classified as living. What criteria would they need to meet? Is this a scientific or philosophical question?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state the size ranges of bacteria and viruses', checked: false },
          { text: 'I can name the main structural components of a bacterial cell', checked: false },
          { text: 'I understand what peptidoglycan is and its role in bacterial cell walls', checked: false },
          { text: 'I can explain what plasmids are and their significance', checked: false },
          { text: 'I can describe viral structure (capsid, genetic material, envelope)', checked: false },
          { text: 'I understand why viruses are obligate intracellular parasites', checked: false },
          { text: 'I can explain why bacteria have metabolism but viruses do not', checked: false },
          { text: 'I know the structure of a typical bacteriophage', checked: false },
          { text: 'I can explain why viruses are not classified as living organisms', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Bacteria (1–10 microm) are living prokaryotes with peptidoglycan cell walls, 70S ribosomes, DNA/RNA, and metabolism. Viruses (20–300 nm) are non-living particles with protein capsids, nucleic acid genomes, no ribosomes, and no metabolism. Viruses are obligate intracellular parasites requiring host cells to replicate. Bacteriophages (phages) infect bacteria; typical structure includes icosahedral head (DNA), tail, base plate, and tail fibres. Antibiotics kill bacteria but not viruses.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-bact-struct', prompt: 'What is the typical size range of bacteria and what is peptidoglycan?' },
      { id: 'cue-2', blockId: 'p-virus-size', prompt: 'What is the size range of viruses and what are the main structural components?' },
      { id: 'cue-3', blockId: 'h-bact-meta', prompt: 'Why can bacteria survive independently while viruses cannot?' },
      { id: 'cue-4', blockId: 'h-phage', prompt: 'Describe the structure of a typical bacteriophage.' },
      { id: 'cue-5', blockId: 'tbl-compare', prompt: 'Which is larger: a bacterium or a virus? Give a comparison.' }
    ],
    summaryText: 'Bacteria: 1–10 microm, prokaryotic, peptidoglycan wall, 70S ribosomes, DNA, metabolism, culturable. Viruses: 20–300 nm, non-cellular, protein capsid, DNA or RNA, no metabolism, obligate parasites. Phages: head (DNA), tail, base plate, fibres. Why viruses not living: no metabolism, no ribosomes, depend entirely on host.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Viral Structure and Classification', detail: 'International Committee on Taxonomy of Viruses (ICTV) classification system and structural nomenclature', year: '2023', source: 'ICTV', tags: ['virus structure', 'bacteriophage', 'classification'] }
  ]
};
