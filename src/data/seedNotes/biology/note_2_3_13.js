export const note_biology_2_3_13 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-core-prac-6',
      data: {
        text: 'Understand the practical method for observing root tip mitosis, identify mitotic stages in micrographs, and calculate the mitotic index.',
      },
    },
    {
      type: 'heading',
      id: 'h-core-prac-6',
      data: { text: 'Core Practical 6: Root Tip Mitosis', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro-prac-6',
      data: {
        text: 'Core Practical 6 involves preparing and observing cells undergoing mitosis in the root tip of a growing plant (typically onion, Allium cepa). The root tip contains a meristem (growth region) where cells undergo rapid mitosis, making it ideal for observing the stages of mitosis. The aims are: (1) to prepare root tip tissue for microscopy, (2) to identify cells in different mitotic stages (Prophase, Metaphase, Anaphase, Telophase), (3) to count cells in each stage, and (4) to calculate the mitotic index.',
      },
    },
    {
      type: 'heading',
      id: 'h-method-6',
      data: { text: 'Method', level: 2 },
    },
    {
      type: 'list',
      id: 'list-method-6',
      data: {
        style: 'numbered',
        items: [
          'Grow root tips: germinate onion seeds or place onion bulb on water; allow roots to grow to ~1 cm length (3–7 days)',
          'Fix tissue: remove root tips and immerse in ethanol and acetic acid solution (typically 3:1 ethanol:acetic acid) for 10–15 minutes. This kills the cells and fixes proteins, stopping mitosis',
          'Hydrolyse cell wall: transfer to dilute hydrochloric acid (HCl) for 5–10 minutes. Acid hydrolyses the cell wall (pectin and hemicellulose), making cells easier to separate; also hydrolyses DNA, allowing stain penetration',
          'Wash: rinse thoroughly with distilled water to remove excess acid',
          'Stain: add a stain like aceto-carmine or orcein (traditional) or Giemsa stain (modern). These stain chromosomes dark red/purple, making them visible. Aceto-carmine also acts as a fixative and mordant',
          'Squash preparation: place root tip on a glass slide with a drop of stain. Using a clean glass rod or coverslip edge, gently squash (crush) the tissue to spread cells into a single layer without excessive damage',
          'Mount: carefully lower a coverslip onto the squashed tissue',
          'Observe: examine under light microscope (×40 objective, ×400 magnification). Root tip cells are small (~20 μm), but chromosomes (if condensed in mitosis) are visible as dark threads',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-stages-observed',
      data: { text: 'Identifying Mitotic Stages', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-identify-stages',
      data: {
        text: 'In a well-prepared slide, cells in different mitotic stages are visible: (1) Interphase cells—appear as nuclei with dispersed chromatin (not staining as intensely as mitotic cells); chromosomes are not visible as distinct structures. (2) Prophase—chromosomes condense and become visible as dark threads; the nuclear envelope is breaking down or absent; spindle fibres may be visible (though difficult at light microscope resolution). (3) Metaphase—chromosomes are maximally condensed and aligned at the cell equator (metaphase plate); the spindle is visible connecting poles. (4) Anaphase—sister chromatids (now called chromosomes) are separated and moving toward opposite poles; cells appear elongated. (5) Telophase—chromosomes decondense; nuclear envelopes reform around each set; cell is preparing for cytokinesis. (6) Cytokinesis—cell membrane pinches inward, dividing the cytoplasm; may appear as a cell partially divided.',
      },
    },
    {
      type: 'heading',
      id: 'h-counting-protocol',
      data: { text: 'Counting Cells and Calculating Mitotic Index', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-counting-method',
      data: {
        text: 'To calculate the mitotic index: (1) Select a representative area of the root tip meristem (avoid the cap region, which has few dividing cells, and mature cells, which have stopped dividing). (2) Count all cells in that field or along a transect line across the root tip. Aim for at least 100–200 cells. (3) Tally cells in each mitotic stage (Prophase, Metaphase, Anaphase, Telophase, Cytokinesis) and interphase. (4) Calculate total cells in mitosis = Prophase + Metaphase + Anaphase + Telophase + Cytokinesis. (5) Mitotic Index (%) = (Cells in mitosis / Total cells) × 100. (6) Optionally, calculate the proportion of time spent in each stage: (Number in stage / Total cells) × 100%, or multiply by total cell cycle duration (e.g. 24 hours) to estimate time in each stage.',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-mi-prac',
      data: {
        style: 'worked',
        title: 'Mitotic Index Calculation from Root Tip',
        text: 'Count 250 cells in root tip meristem: 30 in Prophase, 8 in Metaphase, 10 in Anaphase, 8 in Telophase, 4 in Cytokinesis = 60 total in mitosis. 190 in interphase. MI = (60 / 250) × 100 = 24%. This indicates 24% of root tip cells are dividing at any moment. Time in mitosis: if cell cycle = 24 hours, time in M phase = 24 × 0.24 = 5.76 hours ≈ 346 minutes. Time in Prophase = (30/60) × 346 = 173 minutes ≈ 2.9 hours.',
      },
    },
    {
      type: 'heading',
      id: 'h-sources-error-6',
      data: { text: 'Sources of Error and Limitations', level: 2 },
    },
    {
      type: 'list',
      id: 'list-sources-6',
      data: {
        style: 'bullet',
        items: [
          'Incomplete squashing: cells not fully separated or spread unevenly. Risk: some cells overlap or are out of focus, reducing accurate counts. Solution: apply gentle, even pressure when squashing; practice on spare slides first',
          'Over-squashing: excessive crushing damages cells and obscures structures. Solution: use moderate, careful pressure; stop when cells are visible as a single layer',
          'Unequal staining: some regions stain intensely (dark) while others are pale. Risk: pale cells are harder to identify. Solution: ensure thorough contact with stain; leave slide in stain for adequate time',
          'Sampling bias: counting only one field or easily visible cells. Risk: not representative of whole root tip. Solution: count multiple fields; randomly select counting areas; count at least 100–200 cells',
          'Difficulty distinguishing stages: Metaphase and Anaphase can be hard to distinguish if resolution is poor; Prophase and Metaphase are sometimes confused. Solution: count cells carefully; refer to standard images; if uncertain, re-examine under higher magnification',
          'Fixed and killed cells: cells are dead and fixed; cannot observe living processes or chromosome movement in real-time. Solution: use time-lapse microscopy or live imaging for dynamic observation (advanced technique)',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-variations',
      data: { text: 'Variations and Improvements', level: 2 },
    },
    {
      type: 'list',
      id: 'list-variations',
      data: {
        style: 'bullet',
        items: [
          'Try different plant species: garlic (Allium sativum), lily roots, or fava bean roots all have cells suitable for observing mitosis',
          'Use different fixatives: alcohol-acetic acid vs. formalin-acetic acid vs. ethanol-formalin; compare effects on preservation',
          'Use different stains: aceto-carmine (traditional, dark red), orcein (traditional, dark red/purple), Giemsa (modern, blue), or even crystal violet (purple). Different stains may highlight chromosomes differently',
          'Time-lapse microscopy: if available, film living root tips (without fixation) to observe mitosis in real-time, seeing chromosome movement and spindle dynamics',
          'Measure cell diameters: measure meristematic cells vs. elongating cells to show that cell size increases as cells leave the mitotic region',
          'Temperature effects: grow roots at different temperatures and compare mitotic index; expect higher MI at higher temperatures (within physiological range) due to faster enzyme activity',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-connection-growth',
      data: { text: 'Connecting Mitotic Index to Plant Growth', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-connection',
      data: {
        text: 'The mitotic index in root tips reflects the growth rate of roots. A root tip with high MI is growing rapidly; one with low MI is growing slowly. Environmental factors affect MI: optimal temperature (~25°C for most plants) maximizes enzyme activity and mitotic rate; cooler temperatures slow mitosis; nutrient availability (especially nitrogen) affects MI; water stress (drought) suppresses root growth and lowers MI. By comparing MI of roots grown under different conditions, students can experimentally test the effects of environmental factors on plant growth.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is the root tip meristem the best tissue to observe mitosis? Root apical meristems contain actively dividing undifferentiated cells; since cells are dividing rapidly, a high proportion will be in mitosis at any given moment. The cells are also arranged in regular files, making individual cells easy to distinguish.',
        apply: 'A student counts 200 cells in a root tip squash. They identify: interphase 150, prophase 30, metaphase 10, anaphase 5, telophase 5. Calculate the mitotic index and the duration of each mitotic phase if the total cell cycle is 12 hours. Which phase is longest, and why?',
        analyze: 'Compare the squash technique used for root tips with ultramicrotome sectioning used for electron microscopy. Consider sample preparation steps, time required, information obtained, and whether the cells are living or fixed at the time of imaging.',
        evaluate: 'Evaluate the reliability of estimating cell cycle phase duration from the proportion of cells in each phase (as in this practical). What assumption is made (cells spend time in each phase proportional to phase duration), and under what conditions could this assumption break down?',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-prac-6',
      data: {
        items: [
          { text: 'Can prepare a root tip tissue for microscopy: fix, hydrolyse, stain, squash', checked: false },
          { text: 'Can identify cells in Prophase, Metaphase, Anaphase, Telophase under light microscope', checked: false },
          { text: 'Can count cells in mitosis and interphase systematically', checked: false },
          { text: 'Can calculate mitotic index and time spent in each mitotic stage', checked: false },
          { text: 'Understand sources of error: incomplete squashing, unequal staining, sampling bias', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-prac-6',
      data: {
        text: 'Core Practical 6: Grow onion root tips (~1 cm), fix in ethanol:acetic acid (3:1), hydrolyse cell wall with dilute HCl (pectin breakdown allows cell separation), wash, stain with aceto-carmine (stains chromosomes dark red/purple), squash gently to spread cells in single layer, mount, observe at ×400. Identify stages: Interphase (dispersed chromatin), Prophase (chromosomes condense, nuclear envelope breaks), Metaphase (chromosomes align at equator), Anaphase (chromatids separate and move apart), Telophase (nuclear envelopes reform), Cytokinesis (cell divides). Count at least 100–200 cells, tally in each stage. MI = (cells in mitosis / total cells) × 100%. Root tips ~20–24% MI (very high MI) because roots are growth regions. Time in mitosis = (MI/100) × cell cycle duration. Errors: incomplete squashing, over-squashing, unequal staining, sampling bias, difficulty distinguishing stages. Improvements: try different species/stains, time-lapse imaging, measure cell sizes, test temperature/nutrient effects.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-method-6',
        prompt: 'Describe the step-by-step method for preparing a root tip slide, including fixation, hydrolysis, and staining.',
      },
      {
        id: 'cue-2',
        blockId: 'p-identify-stages',
        prompt: 'How would you visually distinguish Metaphase from Anaphase in a micrograph?',
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked-mi-prac',
        prompt: 'If 60 cells in mitosis out of 250 total, calculate MI and estimate time in M phase if cell cycle is 24 hours.',
      },
      {
        id: 'cue-4',
        blockId: 'list-sources-6',
        prompt: 'What are two common sources of error in this practical, and how would you address them?',
      },
    ],
    summaryText: 'Method: grow onion root tips (~1 cm), fix in ethanol:acetic acid (kills cells, preserves structures), hydrolyse in dilute HCl (breaks down cell wall pectin), wash, stain with aceto-carmine (chromosomes dark red), squash gently (spreads cells), mount, observe ×400. Stages: Interphase (dispersed chromatin, not condensed), Prophase (chromosomes condense, nuclear envelope breaks), Metaphase (condensed chromosomes align at cell equator), Anaphase (chromatids separate, move to poles), Telophase (nuclear envelopes reform), Cytokinesis (cell pinches/divides). Count 100–200 cells, tally each stage. MI = (cells in mitosis / total) × 100%. Root tip meristem has very high MI (~20–24%) because cells actively divide. Time in mitosis = (MI/100) × total cell cycle duration. Errors: incomplete squashing (cells overlap), over-squashing (damage), unequal staining (pale regions), sampling bias (count multiple fields), distinguishing stages (refer to images). Improvements: different species, stains, time-lapse imaging, measure cell sizes, temperature/nutrient effects.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Root Tip Meristem as a Model for Cell Division',
      detail: 'Root apical meristems are classical model systems for studying mitosis and cell division due to their high mitotic index and accessibility; widely used in education and research.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['mitosis', 'practical skills', 'plant growth'],
    },
  ],
};
