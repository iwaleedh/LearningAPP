export const note_biology_2_3_1 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-ultra',
      data: {
        text: 'Describe the ultrastructure of eukaryotic and prokaryotic cells, identify key organelles and their functions, and explain the structural differences between cell types.',
      },
    },
    {
      type: 'heading',
      id: 'h-euk-intro',
      data: { text: 'Eukaryotic Cell Ultrastructure', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-nucleus',
      data: {
        text: 'The nucleus is the largest membrane-bound organelle, containing the cell\'s DNA. It is bounded by a double membrane called the nuclear envelope, which has nuclear pores allowing selective transport of mRNA, ribosomal proteins, and other molecules. Inside the nucleus, DNA is associated with histone proteins, forming chromatin (dispersed during interphase, condensing into chromosomes during mitosis). The nucleolus is a dense region within the nucleus where ribosomal RNA (rRNA) is synthesised and ribosomal subunits are assembled.',
      },
    },
    {
      type: 'list',
      id: 'list-nucleus',
      data: {
        style: 'bullet',
        items: [
          'Nuclear envelope: double membrane with nuclear pores',
          'Nucleolus: site of rRNA synthesis and ribosome assembly',
          'Chromatin: DNA + histone proteins; dispersed during interphase',
          'Function: storage and expression of genetic information',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-mitochondria',
      data: { text: 'Mitochondria and Chloroplasts', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-mito',
      data: {
        text: 'Mitochondria are the site of aerobic respiration. They are bounded by a double membrane: the outer membrane is smooth, while the inner membrane is folded into cristae, increasing surface area for oxidative phosphorylation. The cristae enclose the matrix, a gel-like compartment containing enzymes for the Krebs cycle. The double membrane and presence of their own DNA (mtDNA) suggest mitochondria originated from prokaryotic endosymbionts. Cells with high energy demand (muscle, sperm, pancreatic cells) have numerous mitochondria.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-chloro',
      data: {
        text: 'Chloroplasts, found in plant cells and photosynthetic protists, are the site of photosynthesis. Like mitochondria, they are bounded by a double membrane. Inside, stacked thylakoid membranes form grana (plural: stacks of thylakoids), which are the site of light-dependent reactions. The stroma is the fluid-filled region surrounding the grana, where the light-independent reactions (Calvin cycle) occur. Chloroplasts also contain their own DNA (cpDNA) and ribosomes.',
      },
    },
    {
      type: 'heading',
      id: 'h-er-golgi',
      data: { text: 'Endoplasmic Reticulum and Golgi Apparatus', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-er',
      data: {
        text: 'The endoplasmic reticulum (ER) is an extensive network of membrane-bound cisternae (flattened sacs). Rough ER has ribosomes attached to its cytoplasmic surface, making it appear rough under electron microscopy; these ribosomes synthesise proteins for export or for membrane incorporation. Smooth ER lacks ribosomes and is involved in lipid synthesis, carbohydrate metabolism, and detoxification. In liver cells, smooth ER is abundant due to detoxification functions.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-golgi',
      data: {
        text: 'The Golgi apparatus consists of stacked, curved cisternae with a distinct cis face (receiving side, close to the ER) and trans face (releasing side, toward the plasma membrane). Proteins from the rough ER are transported in vesicles to the Golgi, where they are modified (glycosylation, phosphorylation), sorted, and repackaged into vesicles for transport to their final destinations. The Golgi also produces lysosomes and modifies carbohydrates on proteins.',
      },
    },
    {
      type: 'callout',
      id: 'callout-protein-secretion',
      data: {
        title: 'Pathway of Protein Secretion',
        text: 'The production of extracellular enzymes and proteins follows a specific sequence:\n1. **Nucleus:** Transcription of the DNA code produces mRNA.\n2. **Ribosomes (on RER):** Translation of mRNA to produce proteins.\n3. **RER:** Proteins pass into the lumen where they are folded and processed, then pinched off in vesicles.\n4. **Golgi apparatus:** Receives vesicles at the cis face, modifies proteins, and repackages them into vesicles at the trans face.\n5. **Cell surface membrane:** Secretory vesicles fuse with the membrane, releasing proteins via exocytosis.',
        style: 'key',
      },
    },
    {
      type: 'heading',
      id: 'h-ribosomes-lyso',
      data: { text: 'Ribosomes, Lysosomes, and Other Organelles', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-ribosomes',
      data: {
        text: 'Ribosomes are the site of protein synthesis, composed of ribosomal RNA (rRNA) and ribosomal proteins. Eukaryotic ribosomes are 80S (80 Svedberg units), consisting of a 60S large subunit and a 40S small subunit. They may float free in the cytoplasm (making cytoplasmic proteins) or be attached to the rough ER (making secreted/membrane proteins). Lysosomes are membrane-bound compartments containing hydrolytic enzymes (proteases, nucleases, lipases) at acidic pH (4.5–5.0). They digest cellular waste, engulfed pathogens, and damaged organelles via autophagy.',
      },
    },
    {
      type: 'heading',
      id: 'h-prokaryote',
      data: { text: 'Prokaryotic Cell Ultrastructure', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-prok-intro',
      data: {
        text: 'Prokaryotic cells (bacteria and archaea) lack a membrane-bound nucleus and organelles. Instead, DNA is located in a nucleoid region, not enclosed by a membrane. Prokaryotic ribosomes are 70S (smaller than eukaryotic 80S), consisting of a 50S large subunit and a 30S small subunit. Plasmids are small, circular, double-stranded DNA molecules separate from chromosomal DNA, often carrying genes for antibiotic resistance or metabolic advantages. The cell wall in bacteria is composed of peptidoglycan, a complex polymer of amino sugars and amino acids, providing structural support and protection.',
      },
    },
    {
      type: 'list',
      id: 'list-prokaryote',
      data: {
        style: 'bullet',
        items: [
          'Nucleoid: region of concentrated DNA (not membrane-bound)',
          '70S ribosomes: smaller than eukaryotic ribosomes',
          'Peptidoglycan cell wall: provides rigidity and shape',
          'Plasmids: small circular DNA; genes for resistance or metabolism',
          'Flagella: long whip-like structures for movement',
          'Pili: short hair-like structures; sex pili for genetic exchange',
          'Capsule: polysaccharide layer outside cell wall; protection and adhesion',
        ],
      },
    },
    {
      type: 'callout',
      id: 'callout-key-endo',
      data: {
        style: 'key',
        title: 'Endosymbiotic Theory',
        text: 'Mitochondria and chloroplasts are thought to have originated as prokaryotic cells engulfed by early eukaryotes. Evidence includes: their own DNA, ribosomes (70S, like prokaryotes), double membranes, and ability to replicate independently. This explains their prokaryotic-like ultrastructure within eukaryotic cells.',
      },
    },
    {
      type: 'callout',
      id: 'callout-warn-size',
      data: {
        style: 'warning',
        title: 'Common Confusion: Ribosome Sizes',
        text: 'Eukaryotic ribosomes are 80S; prokaryotic ribosomes are 70S. Many antibiotics (e.g. streptomycin, tetracycline) target prokaryotic 70S ribosomes, killing bacteria without harming human 80S ribosomes. This selectivity is crucial for antibiotic safety.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why do eukaryotic cells have membrane-bound organelles while prokaryotic cells do not? The endosymbiotic theory explains the origin of mitochondria and chloroplasts. Explain the evidence: own circular DNA, 70S ribosomes, binary fission, double membrane.',
        apply: 'An electron micrograph shows a cell with many mitochondria, rough ER, and a large nucleus. Calculate the magnification if the nucleus appears 40 mm wide on the image and its actual diameter is 5 micrometres. Identify two other features you would expect to see in this metabolically active cell.',
        analyze: 'Compare the ultrastructure of a prokaryotic cell (E. coli) with a eukaryotic animal cell in terms of size, nucleus, ribosomes, membrane-bound organelles, cell wall, and DNA organisation. Present as a structured comparison.',
        evaluate: 'Evaluate the endosymbiotic theory as an explanation for the origin of mitochondria. What is the strongest evidence supporting it, and what aspects remain incompletely explained?',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-ultra',
      data: {
        items: [
          { text: 'Can describe the structure and function of nucleus, mitochondria, and chloroplasts', checked: false },
          { text: 'Understand the role of rough and smooth ER, and the Golgi apparatus', checked: false },
          { text: 'Know prokaryotic cell features: nucleoid, 70S ribosomes, peptidoglycan, plasmids, flagella, pili', checked: false },
          { text: 'Can compare eukaryotic and prokaryotic ultrastructure', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-ultra',
      data: {
        text: 'Eukaryotic cells have a nucleus (DNA storage and expression) and membrane-bound organelles: mitochondria (aerobic respiration, cristae increase surface area), chloroplasts (photosynthesis, grana and stroma), rough ER (protein synthesis), Golgi (protein modification and sorting), lysosomes (digestion), and ribosomes (80S). Prokaryotic cells lack these; instead, they have a nucleoid (unenclosed DNA), 70S ribosomes, peptidoglycan cell walls, plasmids, flagella, and pili. The endosymbiotic theory explains the prokaryotic origin of mitochondria and chloroplasts.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-nucleus',
        prompt: 'Describe the structure of the nucleus, including the nuclear envelope and nucleolus.',
      },
      {
        id: 'cue-2',
        blockId: 'p-mito',
        prompt: 'Explain the structure of a mitochondrion and relate it to its function in aerobic respiration.',
      },
      {
        id: 'cue-3',
        blockId: 'p-er',
        prompt: 'Compare rough and smooth endoplasmic reticulum in terms of structure and function.',
      },
      {
        id: 'cue-4',
        blockId: 'p-prok-intro',
        prompt: 'List five key structural features that distinguish prokaryotic cells from eukaryotic cells.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-key-endo',
        prompt: 'What evidence supports the endosymbiotic theory for mitochondrial and chloroplast origin?',
      },
    ],
    summaryText: 'Eukaryotic cells contain nucleus (chromatin, nucleolus), mitochondria (cristae, matrix), chloroplasts (grana, stroma), ER (rough with ribosomes; smooth for lipids), Golgi (cis/trans faces, modification, sorting), lysosomes (hydrolytic enzymes), and 80S ribosomes. Prokaryotic cells lack membrane-bound organelles; they have nucleoid (DNA), 70S ribosomes, peptidoglycan cell wall, plasmids, flagella, and pili. Mitochondria and chloroplasts likely originated as engulfed prokaryotes, explaining their DNA, ribosomes, and double membranes.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Organellar Ultrastructure and Endosymbiotic Theory',
      detail: 'Mitochondria possess double membranes, their own mtDNA, and 70S ribosomes—features characteristic of prokaryotes—supporting the endosymbiotic origin hypothesis.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['ultrastructure', 'evolution', 'endosymbiosis'],
    },
  ],
};
