export const note_biology_2_3_5 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-mitosis',
      data: {
        text: 'Describe the stages of the cell cycle and mitosis, explain the role of checkpoint control, and understand why mitosis is essential for growth and repair.',
      },
    },
    {
      type: 'heading',
      id: 'h-cell-cycle',
      data: { text: 'The Cell Cycle: Interphase', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-interphase',
      data: {
        text: 'The cell cycle consists of interphase (cell growth and DNA replication) and M phase (mitosis and cytokinesis). Interphase accounts for approximately 90% of the cell cycle in fast-dividing cells. Interphase is divided into three stages: G1 phase (Gap 1), S phase (synthesis), and G2 phase (Gap 2).',
      },
    },
    {
      type: 'list',
      id: 'list-interphase',
      data: {
        style: 'bullet',
        items: [
          'G1 phase: cell grows and increases in size; cytoplasm accumulates, organelles are synthesised, nucleotides and amino acids are produced; cell performs normal functions; G1/S checkpoint checks cell size, DNA damage, and growth signals',
          'S phase (synthesis): DNA replication occurs; each chromosome is duplicated into two sister chromatids joined at the centromere; histone proteins are synthesised; centrioles are duplicated',
          'G2 phase: cell continues to grow; proteins for mitosis are synthesised (tubulins for spindle, condensins for chromosome condensation); G2/M checkpoint checks DNA integrity and readiness for mitosis',
        ],
      },
    },
    {
      type: 'paragraph',
      id: 'p-g0-phase',
      data: {
        text: 'Some cells exit the cell cycle and enter G0 phase (Gap 0), a quiescent state. In G0, cells cease dividing, remain metabolically active, and perform specialised functions. Neurons and cardiac muscle cells are permanently in G0 and do not divide. Other cells (e.g. liver cells) can re-enter the cell cycle if stimulated by growth factors or injury.',
      },
    },
    {
      type: 'heading',
      id: 'h-mitosis',
      data: { text: 'Mitosis: Nuclear Division', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-prophase',
      data: {
        text: 'Prophase: Chromosomes condense from chromatin, becoming visible under a light microscope. Each chromosome consists of two sister chromatids joined at the centromere. Centrioles move to opposite poles of the cell, forming the mitotic spindle (composed of microtubules: polar microtubules organised by kinetochores, and astral microtubules extending to the cell periphery). The nuclear envelope breaks down, and chromosomes become accessible to spindle microtubules. Spindle checkpoint proteins monitor kinetochore-microtubule attachments.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-metaphase',
      data: {
        text: 'Metaphase: Chromosomes align at the cell equator (metaphase plate). Kinetochores of sister chromatids are attached to microtubules from opposite poles. The spindle checkpoint (SAC: spindle assembly checkpoint) ensures all chromosomes are correctly attached before anaphase proceeds. Any unattached kinetochore signals a halt to the cycle until attachment is achieved. This checkpoint prevents aneuploidy (incorrect chromosome number).',
      },
    },
    {
      type: 'paragraph',
      id: 'p-anaphase',
      data: {
        text: 'Anaphase: Sister chromatids separate at the centromere. Separated chromatids (now called chromosomes) are pulled toward opposite poles by microtubules shortening at the kinetochore. Simultaneously, polar microtubules push against each other, forcing the poles apart and elongating the cell. The cell becomes increasingly elongated.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-telophase',
      data: {
        text: 'Telophase: Nuclear envelopes reform around each set of chromosomes. Chromosomes begin to decondense back into chromatin. Spindle microtubules disappear. The cell is now binucleate (two nuclei). Telophase overlaps with cytokinesis, the physical division of cytoplasm.',
      },
    },
    {
      type: 'heading',
      id: 'h-cytokinesis',
      data: { text: 'Cytokinesis: Cell Division', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-cytokinesis',
      data: {
        text: 'Cytokinesis divides the cytoplasm into two daughter cells. In animal cells, a cleavage furrow forms at the cell equator, deepening until the cell pinches in two. The furrow is created by a contractile ring composed of actin and myosin filaments that contracts, pulling the plasma membrane inward. In plant cells, cytokinesis differs: a cell plate (new cell wall) forms at the cell equator by deposition of cellulose and pectin from Golgi-derived vesicles. The cell plate grows outward until it fuses with the existing cell membrane, completely separating the two daughter cells.',
      },
    },
    {
      type: 'heading',
      id: 'h-duration',
      data: { text: 'Duration of Mitotic Stages', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-duration',
      data: {
        text: 'The duration of mitotic stages varies with cell type and species. In mammalian cells undergoing rapid division (e.g. bone marrow cells), Prophase lasts ~8–10 minutes, Metaphase ~2–3 minutes, Anaphase ~3–4 minutes, and Telophase ~3–4 minutes. The entire M phase (mitosis + cytokinesis) lasts approximately 20–40 minutes. Interphase is much longer, lasting 12–24 hours depending on cell type. The relative proportions of time spent in each mitotic stage can be calculated from a micrograph using the mitotic index (see next subtopic).',
      },
    },
    {
      type: 'heading',
      id: 'h-importance',
      data: { text: 'Importance of Mitosis', level: 2 },
    },
    {
      type: 'list',
      id: 'list-importance',
      data: {
        style: 'bullet',
        items: [
          'Growth: organisms increase in cell number, enabling increase in body size and mass',
          'Repair: damaged or dead cells are replaced; skin cells shed continuously and are replaced; liver cells can regenerate after partial removal',
          'Asexual reproduction: some organisms (bacteria, yeast, some plants) reproduce asexually, producing genetically identical offspring via mitosis',
          'Replacement: in animals, red blood cells (lifespan ~120 days) and intestinal epithelial cells (lifespan ~4–5 days) are continuously replaced via mitosis in bone marrow and intestinal crypts',
        ],
      },
    },
    {
      type: 'callout',
      id: 'callout-key-checkpoint',
      data: {
        style: 'key',
        title: 'Cell Cycle Checkpoints',
        text: 'Checkpoints (G1/S, G2/M, spindle) are control mechanisms that halt the cycle if conditions are unfavourable. The spindle checkpoint ensures all chromosomes are attached before anaphase, preventing aneuploidy. p53 protein ("guardian of the genome") detects DNA damage and triggers either cycle arrest for repair or apoptosis (programmed cell death) if damage is irreparable. Loss of checkpoint control leads to uncontrolled division and cancer.',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-mitosis',
      data: {
        style: 'worked',
        title: 'Identifying Mitotic Stages in a Micrograph',
        text: 'Given a micrograph of 100 cells: count cells in each stage. Example: 6 in Prophase, 2 in Metaphase, 2 in Anaphase, 2 in Telophase. Total dividing: 12 cells. Proportions: Prophase 50%, Metaphase 17%, Anaphase 17%, Telophase 17%. Prophase is longest (most time spent); anaphase and telophase are shortest.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why must DNA replication occur in S phase before mitosis begins? If a cell divided without replicating its DNA, each daughter cell would receive only half the genetic information, rendering them non-functional. The cell cycle checkpoints (G1, G2, and spindle assembly checkpoint) ensure replication is complete and accurate before division.',
        apply: 'A student counts cells in an onion root tip: 80% in interphase, 10% prophase, 5% metaphase, 3% anaphase, 2% telophase. If the total cell cycle is 24 hours, calculate the duration of each phase. What does the long interphase tell you about cell division rates in this tissue?',
        analyze: 'Compare the events of prophase, metaphase, anaphase, and telophase in detail. Explain how spindle fibres, centromeres, and the nuclear envelope each contribute to the precise separation of chromatids.',
        evaluate: 'Evaluate the importance of the G2 checkpoint in preventing cancer. What types of damage does it detect? How do tumour suppressor genes (e.g. p53, BRCA1) contribute to this checkpoint, and why does their loss lead to uncontrolled division?',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-mitosis',
      data: {
        items: [
          { text: 'Can describe G1, S, and G2 phases of interphase', checked: false },
          { text: 'Know mitotic stages: Prophase (chromosomes condense, spindle forms), Metaphase (align at equator), Anaphase (chromatids separate), Telophase (nuclear envelopes reform)', checked: false },
          { text: 'Understand cytokinesis differs in animal (cleavage furrow) and plant (cell plate) cells', checked: false },
          { text: 'Can list reasons mitosis is important: growth, repair, replacement, asexual reproduction', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-mitosis',
      data: {
        text: 'Cell cycle: Interphase (G1: growth; S: DNA replication to 2n→4n; G2: preparation) followed by M phase (mitosis + cytokinesis). Mitosis: Prophase (chromosomes condense, spindle forms), Metaphase (chromosomes align, spindle checkpoint), Anaphase (sister chromatids separate), Telophase (nuclear envelopes reform). Cytokinesis: cleavage furrow in animal cells, cell plate in plant cells. Mitosis produces two identical daughter cells and is essential for growth, repair, replacement, and asexual reproduction. Checkpoints (G1/S, G2/M, spindle) ensure accurate division.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-interphase',
        prompt: 'Describe G1, S, and G2 phases, and explain what happens at the G1/S and G2/M checkpoints.',
      },
      {
        id: 'cue-2',
        blockId: 'p-metaphase',
        prompt: 'What is the spindle checkpoint, and why is it important for preventing aneuploidy?',
      },
      {
        id: 'cue-3',
        blockId: 'p-cytokinesis',
        prompt: 'How does cytokinesis differ between animal and plant cells?',
      },
      {
        id: 'cue-4',
        blockId: 'list-importance',
        prompt: 'List four reasons why mitosis is essential to living organisms.',
      },
    ],
    summaryText: 'Interphase: G1 (growth, checkpoint screens cell size and damage), S (DNA replication: 2n → 4n), G2 (preparation, checkpoint checks DNA integrity). Mitosis: Prophase (chromosomes condense, spindle forms), Metaphase (chromosomes align, spindle checkpoint ensures attachments), Anaphase (sister chromatids separate), Telophase (nuclear envelopes reform). Cytokinesis: animal cells use contractile ring forming cleavage furrow; plant cells form cell plate via Golgi vesicles. Mitosis is essential for growth, repair, replacement of worn cells, and asexual reproduction.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Mitotic Checkpoint Control and Cancer Prevention',
      detail: 'Loss of checkpoint control (e.g. p53 mutations) leads to uncontrolled mitosis and cancer; understanding checkpoints is key to developing cancer therapies targeting cell cycle regulation.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['mitosis', 'cell cycle', 'cancer biology'],
    },
  ],
};
