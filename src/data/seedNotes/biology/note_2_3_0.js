export const note_biology_2_3_0 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-cell-org',
      data: {
        text: 'Understand the hierarchical organisation of cells in living organisms, from individual cells to organ systems, and how emergent properties arise at each level of organisation.',
      },
    },
    {
      type: 'heading',
      id: 'h-cell-theory',
      data: { text: 'Cell Theory and the Cell as a Unit of Life', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-cell-theory',
      data: {
        text: 'Until microscopes became powerful enough to view individual cells, no-one knew for certain what living organisms were made from. Robert Hooke was the first to use the term \'cell\'. Later, Matthias Schleiden and Theodor Schwann studied animal and plant cells, leading to the idea that all living organisms are made of cells.',
      },
    },
    {
      type: 'callout',
      id: 'callout-cell-theory',
      data: {
        title: 'Cell Theory',
        text: 'The cell theory is a universally accepted unifying concept in biology consisting of three main ideas: (1) All living organisms are made up of one or more cells. (2) Cells are the basic functional unit in living organisms. (3) New cells are produced from pre-existing cells.',
        style: 'key',
      },
    },
    {
      type: 'list',
      id: 'list-common-features',
      data: {
        style: 'bullet',
        items: [
          'The cells of all living organisms share common features: a cell surface membrane, cytoplasm, DNA, and ribosomes.',
          'Prokaryotic cells have no internal membranes and smaller (70S) ribosomes.',
          'Eukaryotic cells have several internal membrane-bound organelles and larger (80S) ribosomes.',
          'Cell ultrastructure refers to the detailed internal structures of these cells visible under a microscope.',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-hierarchy',
      data: { text: 'Hierarchical Organisation of Life', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro',
      data: {
        text: 'Living organisms are organised in a clear hierarchical structure, where each level displays emergent properties — characteristics that cannot be predicted from the lower level alone. This organisation ranges from individual cells up to complete organ systems, with each level increasing in complexity and specialisation.',
      },
    },
    {
      type: 'list',
      id: 'list-hierarchy-levels',
      data: {
        style: 'bullet',
        items: [
          'Cell: basic unit of life; smallest independent living unit',
          'Tissue: group of similar specialised cells with same origin and function',
          'Organ: structure composed of multiple tissues working together',
          'Organ system: several organs coordinating to perform major functions',
          'Organism: complete living system; all organ systems working together',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-cell-tissue',
      data: { text: 'From Cells to Tissues: Emergent Properties', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-epithelium',
      data: {
        text: 'A tissue is a collection of similar cells that share a common origin and function. A key example is squamous epithelium, which lines surfaces such as the alveoli in lungs and blood vessel walls. Individual squamous cells are flat and thin, allowing rapid diffusion. When many squamous cells form a single layer, an emergent property emerges: the tissue becomes semi-permeable and highly efficient at gas exchange. No single cell possesses this property alone.',
      },
    },
    {
      type: 'list',
      id: 'list-tissues',
      data: {
        style: 'bullet',
        items: [
          'Epithelial tissues: protection, absorption, secretion (e.g. columnar in intestines, squamous in lungs)',
          'Connective tissues: support and binding (e.g. bone, cartilage, adipose)',
          'Muscle tissues: contraction and movement (skeletal, smooth, cardiac)',
          'Nerve tissue: communication and control via neurons and glial cells',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-organ-system',
      data: { text: 'Organs and Organ Systems: The Respiratory Example', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-lung-organ',
      data: {
        text: 'The lung is an organ composed of multiple tissues: epithelial tissue (forming alveoli), connective tissue (elastic fibres for elasticity), muscle tissue (smooth muscle in bronchioles), and nerve tissue (autonomic control). At the organ level, a new emergent property appears: efficient gas exchange cannot occur with just one tissue type. The lung\'s structure — millions of alveoli lined with squamous epithelium surrounded by capillaries — creates a massive surface area for diffusion. This property only emerges when tissues are integrated into an organ.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-resp-system',
      data: {
        text: 'The respiratory system comprises the lungs (gas exchange), trachea (airway), diaphragm (breathing muscle), and intercostal muscles. These organs coordinate to deliver oxygen to the body and remove carbon dioxide. At the organ system level, a critical emergent property emerges: homeostatic control of blood pH and O₂ levels via chemoreceptors in the medulla adjusting ventilation rate. This integrative control cannot occur at the organ level alone.',
      },
    },
    {
      type: 'heading',
      id: 'h-stem-diff',
      data: { text: 'Stem Cells and Cellular Differentiation', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-stem-intro',
      data: {
        text: 'All cells in a multicellular organism contain the same DNA, yet they differentiate into hundreds of different cell types (neurons, muscle fibres, pancreatic cells, etc.). This occurs through differential gene expression: although the DNA is identical, different genes are activated or repressed in different cells, leading to different proteins being synthesised and thus different cell morphology and function.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-stem-cell-def',
      data: {
        text: 'A stem cell is an undifferentiated cell with the ability to divide and produce both new stem cells (self-renewal) and specialised daughter cells (differentiation). During development, stem cells respond to signals from neighbouring cells and the extracellular environment. Transcription factors and signalling molecules activate specific genes, causing a stem cell to commit to a differentiation pathway, eventually becoming a nerve cell, muscle cell, or other specialised type. This differentiation is largely irreversible in somatic cells.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-emerge',
      data: {
        style: 'key',
        title: 'Emergent Properties Summary',
        text: 'Each level of organisation (cell, tissue, organ, organ system, organism) has properties that cannot be predicted from the level below. For example, individual muscle cells cannot contract efficiently in isolation; coordination at the organ system level (via motor neurons and synapses) enables precise, powerful movement. This integration is fundamental to understanding how complex organisms function as unified wholes.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-diff',
      data: {
        style: 'tip',
        title: 'Remembering Differentiation',
        text: 'Use the mnemonic "STEM": Speciation, pluripotency → Transcription factors → Expression of genes → Morphological change. Stem cells lose their pluripotency as they differentiate, becoming more specialised but also more limited in their potential.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why do multicellular organisms need specialised tissues and organs? As organisms become larger, diffusion distances increase and the surface-area-to-volume ratio decreases, making it impossible for every cell to exchange materials directly with the environment. Specialised systems solve this.',
        apply: 'A sphere of cells has a radius of 0.1 mm. Calculate its surface area and volume. Now double the radius to 0.2 mm. Calculate the new SA:V ratio and explain what this means for oxygen delivery to cells in the centre.',
        analyze: 'Compare the levels of organisation (cell, tissue, organ, organ system) and give a specific example from the cardiovascular system showing how each level contributes to a function that the level below cannot achieve alone.',
        evaluate: 'Evaluate the claim that stem cell technology may eventually make organ transplantation obsolete. Consider the current state of organoid research, vascularisation challenges, immune rejection, and regulatory hurdles.',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-org-hierarchy',
      data: {
        items: [
          { text: 'Can identify cell, tissue, organ, organ system and organism levels', checked: false },
          { text: 'Understand emergent properties appear at each level of organisation', checked: false },
          { text: 'Can describe squamous epithelium in lung alveoli and its function', checked: false },
          { text: 'Appreciate how stem cells and differentiation enable multicellular development', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-org',
      data: {
        text: 'Life is organised hierarchically: cells → tissues → organs → organ systems → organisms. Emergent properties appear at each level; for example, squamous epithelium enables gas exchange, and the respiratory system integrates chemoreception to maintain blood pH. Stem cells differentiate through differential gene expression, producing the specialised cell types that form tissues and organs. Understanding this organisation is crucial to interpreting how living systems function as integrated wholes.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-0',
        blockId: 'callout-cell-theory',
        prompt: 'What are the three main ideas of the cell theory?'
      },
      {
        id: 'cue-1',
        blockId: 'h-hierarchy',
        prompt: 'What is the hierarchical order of biological organisation, and what is an emergent property?',
      },
      {
        id: 'cue-2',
        blockId: 'p-epithelium',
        prompt: 'Describe squamous epithelium and explain how its tissue-level properties differ from individual cells.',
      },
      {
        id: 'cue-3',
        blockId: 'p-resp-system',
        prompt: 'What emergent properties appear at the organ system level in the respiratory system?',
      },
      {
        id: 'cue-4',
        blockId: 'p-stem-cell-def',
        prompt: 'What is a stem cell, and how does differential gene expression lead to cellular differentiation?',
      },
    ],
    summaryText: 'Cell Theory states living things consist of cells, which are the basic unit of life arising from pre-existing cells. Biological organisation proceeds from cells to tissues (groups of similar cells with same function) to organs (tissues integrated into structures) to organ systems (organs coordinating major functions) to organisms. Emergent properties appear at each level: epithelial tissues enable diffusion; organs enable integrated gas exchange; organ systems enable homeostatic control. Stem cells differentiate through differential gene expression into specialised cell types.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cellular Organisation in Epithelial Tissues',
      detail: 'Squamous epithelial cells in lung alveoli are specialised for gas exchange; their flat morphology and thin cytoplasm reflect their function.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['tissue', 'structure-function', 'epithelium'],
    },
  ],
};
