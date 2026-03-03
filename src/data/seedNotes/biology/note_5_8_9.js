export const note_biology_5_8_9 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand gene cloning: restriction endonucleases cut at palindromic recognition sequences, producing sticky ends; ligation: T4 DNA ligase joins insert and vector (plasmid); transformation: heat shock or electroporation; selectable markers (antibiotic resistance, lacZα blue-white screening); amplification in bacterial hosts; clone selection.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Gene Cloning', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'Gene cloning is the process of isolating a specific gene and producing multiple identical copies. This technique is fundamental to molecular biology and biotechnology, enabling the study of gene function, production of recombinant proteins, and genetic engineering. The process involves: (1) cutting DNA with restriction enzymes, (2) inserting the gene into a vector, (3) transforming host cells, and (4) selecting and amplifying clones.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Restriction Endonucleases', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'Restriction endonucleases are bacterial enzymes that recognize specific DNA sequences (usually 4–8 bp, palindromic) and cut the DNA at those sites. A palindromic sequence reads the same on both strands in the 5′ → 3′ direction. For example, EcoRI recognizes GAATTC and cuts between G and A, producing sticky ends (overhanging 5′ ends) that are complementary to other EcoRI-cut DNA.' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: '5\'─ ...G↓AATTC... ─3\'<br />3\'─ ...CTTAA↑G... ─5\'<br /><br />Result: 5\' overhangs (AATT) on both fragments',
        caption: 'EcoRI restriction enzyme cutting pattern (sticky ends)',
      },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'Sticky ends (also called cohesive ends or overhangs) are short complementary single-stranded regions that can base-pair with compatible sticky ends from other DNA fragments. This complementarity allows efficient ligation of fragments cut with the same restriction enzyme. Some restriction enzymes produce blunt ends (no overhangs), which are less efficient for ligation.' },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Palindromic Recognition',
        text: 'Restriction enzymes recognize palindromic sequences because they function as homodimers (two identical subunits). Each subunit recognizes one strand of the palindromic sequence, ensuring symmetrical cutting.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'DNA Ligation', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'After restriction enzyme cutting, the desired DNA insert (gene of interest) and the vector plasmid are mixed together. Complementary sticky ends anneal (base-pair) spontaneously. However, this annealing creates a single-stranded nick in the phosphodiester backbone. T4 DNA ligase (from bacteriophage T4) catalyses the formation of phosphodiester bonds, sealing the nick and creating covalently closed circular DNA.' },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'T4 DNA ligase requires ATP (or NAD⁺, depending on source) as a cofactor. The reaction is: 3′-OH + 5′-phosphate → 3′-O-PO₂-5′ (phosphodiester bond). Ligation is highly efficient when sticky ends are compatible (from the same restriction enzyme).' },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Transformation', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'Transformation is the uptake of recombinant (vector + insert) DNA into a host cell. In bacteria, two common methods are: (1) Heat shock: competent bacterial cells (treated with CaCl₂) are exposed to 42 °C for ~30–90 seconds, which creates temporary pores in the cell membrane, allowing DNA entry. (2) Electroporation: electrical pulses create temporary pores in the cell membrane through which DNA enters. Electroporation is efficient and works for many cell types.' },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'After transformation, cells are incubated at 37 °C to allow DNA repair and gene expression. Only a fraction of cells take up the recombinant DNA; other cells may take up no DNA, or non-recombinant vector DNA.' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Selectable Markers', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'Selectable markers are genes that allow identification of successfully transformed cells. Antibiotic resistance genes (e.g., ampicillin resistance, tetracycline resistance) are commonly used. Transformed cells carrying the resistance gene survive when cultured on antibiotic-containing media; non-transformed cells die. This selection dramatically enriches for transformed cells.' },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'Blue-white screening uses lacZα complementation: the plasmid contains lacZα (encodes α-galactosidase fragment) and a multiple cloning site (MCS) within lacZα. When an insert is ligated into the MCS, lacZα is disrupted (insertional inactivation). On X-gal medium, lacZα-producing cells are blue; insertional mutants are white. White colonies are selected for further analysis (they contain recombinant plasmids).' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Selection Method', 'Selectable Marker', 'Principle', 'Advantage', 'Disadvantage'],
        rows: [
          ['Antibiotic resistance', 'ampicillin, tetracycline gene', 'Resistance allows growth on antibiotic plates', 'Simple, universal', 'Does not distinguish recombinant from non-recombinant'],
          ['Blue-white screening', 'lacZα with insertional inactivation', 'Insert disrupts lacZα → white colonies; non-insert → blue', 'Distinguishes recombinant from non-recombinant', 'Requires X-gal; more complex'],
        ],
        caption: 'Selection methods in gene cloning',
      },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Clone Amplification and Selection', level: 3 },
    },
    {
      id: 'p10',
      type: 'paragraph',
      data: { text: 'After selection, individual colonies are grown in liquid culture (e.g., Luria-Bertani broth) to amplify the recombinant plasmid. A single colony contains millions of identical cells, all carrying the same recombinant plasmid. Large-scale fermentation can produce kilograms of purified plasmid DNA.' },
    },
    {
      id: 'p11',
      type: 'paragraph',
      data: { text: 'Clone verification: the recombinant plasmid is extracted from each colony, cut with the original restriction enzyme, and analysed by gel electrophoresis to confirm the presence and size of the insert. DNA sequencing can verify the insert sequence. Multiple clones are usually screened to identify those with the correct insert and orientation.' },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Gene Cloning Workflow Summary',
        text: '1. Cut target gene and plasmid with same restriction enzyme (EcoRI) → sticky ends. 2. Mix insert + vector → anneal. 3. Add T4 ligase + ATP → seal nicks. 4. Transform into competent E. coli (heat shock 42 °C). 5. Plate on antibiotic medium (amp-resistant colonies = transformed). 6. Blue-white screening: white = recombinant insert. 7. Grow selected clones; verify by restriction digest & sequencing.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Restriction enzymes cut palindromic sequences → sticky ends. Ligase seals nicks. Transformation: heat shock or electroporation. Selection: antibiotic resistance or blue-white screening identifies transformed cells. Amplification in bacterial culture → purification.',
        apply: 'Design a cloning strategy to insert a 2 kb human insulin cDNA into a plasmid using EcoRI and BamHI restriction sites. What would you do if the insert has EcoRI but not BamHI sites?',
        analyze: 'Why is blue-white screening more informative than antibiotic selection alone? What does each colour tell you?',
        evaluate: 'Discuss potential limitations of using E. coli as a host for cloning eukaryotic genes. When would you choose a different host?',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Explain how restriction endonucleases work and recognize sequences', checked: false },
          { text: 'Define sticky ends and blunt ends', checked: false },
          { text: 'Describe T4 DNA ligase and its role', checked: false },
          { text: 'Explain heat shock and electroporation methods', checked: false },
          { text: 'Describe antibiotic resistance and blue-white screening', checked: false },
          { text: 'Outline clone verification by restriction digest and sequencing', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Gene cloning: restrict target gene and plasmid (same enzyme) → sticky ends. Ligate with T4 DNA ligase (ATP-dependent). Transform via heat shock (42 °C) or electroporation. Select with antibiotic resistance (all transformed) or blue-white screening (recombinant vs non-recombinant). Amplify clones in liquid culture. Verify by restriction digest and DNA sequencing.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h2', prompt: 'How do restriction endonucleases work? What are sticky ends?' },
      { id: 'cue-2', blockId: 'h3', prompt: 'Explain the role of T4 DNA ligase in gene cloning.' },
      { id: 'cue-3', blockId: 'h4', prompt: 'Describe heat shock and electroporation methods for bacterial transformation.' },
      { id: 'cue-4', blockId: 'h5', prompt: 'Compare antibiotic resistance vs blue-white screening selection.' },
      { id: 'cue-5', blockId: 'h6', prompt: 'How is a clone verified and amplified?' },
    ],
    summaryText: 'Restrict (palindromic sequences) → sticky ends. Ligate (T4 ligase, ATP). Transform: heat shock 42 °C or electroporation. Select: antibiotic resistance (all transformed) or blue-white (recombinant only). Amplify in culture. Verify by restriction digest, sequencing.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'First recombinant DNA', detail: 'Created by Cohen & Boyer (1973) using EcoRI and T4 ligase', year: '1973', source: 'Milestone in biotechnology', tags: ['gene cloning', 'recombinant DNA'] },
  ],
};
