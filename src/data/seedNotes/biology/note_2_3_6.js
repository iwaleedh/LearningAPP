export const note_biology_2_3_6 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-mitotic-index',
      data: {
        text: 'Calculate and interpret the mitotic index from micrographs, understand what it reveals about growth rate and cell division, and apply it to assess cancer.',
      },
    },
    {
      type: 'heading',
      id: 'h-mitotic-index-def',
      data: { text: 'Definition and Calculation of Mitotic Index', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-mitotic-index-def',
      data: {
        text: 'The mitotic index is a measure of the proportion of cells undergoing mitosis (in M phase) at a given time. It is calculated as: Mitotic Index (%) = (Number of cells in mitosis / Total number of cells counted) × 100%. Cells in mitosis include those in Prophase, Metaphase, Anaphase, and Telophase. Cells in interphase (G1, S, G2) are not counted as in mitosis. The mitotic index reflects the growth rate of a tissue: a higher mitotic index indicates faster cell division and faster tissue growth.',
      },
    },
    {
      type: 'equation',
      id: 'eq-mitotic-index',
      data: {
        html: 'MI (%) = <span class="nb-frac"><span class="nb-num">Cells in mitosis</span><span class="nb-den">Total cells</span></span> × 100',
        caption: 'Formula for calculating mitotic index from cell counts.',
      },
    },
    {
      type: 'heading',
      id: 'h-worked-example',
      data: { text: 'Worked Example: Calculating Mitotic Index', level: 2 },
    },
    {
      type: 'callout',
      id: 'callout-worked-mi',
      data: {
        style: 'worked',
        title: 'Mitotic Index Calculation',
        text: 'A micrograph of an onion root tip shows 200 cells total. Count: 8 in Prophase, 2 in Metaphase, 3 in Anaphase, 2 in Telophase. Total in mitosis = 8 + 2 + 3 + 2 = 15 cells. MI = (15 / 200) × 100 = 7.5%. This indicates that at any given moment, 7.5% of root tip cells are dividing. Given a cell cycle duration of ~24 hours, we can estimate time spent in mitosis: 24 × 0.075 = 1.8 hours ≈ 108 minutes for the entire M phase.',
      },
    },
    {
      type: 'heading',
      id: 'h-interpreting-mi',
      data: { text: 'Interpreting Mitotic Index Values', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-growth-tissues',
      data: {
        text: 'Different tissues have different mitotic indices depending on their growth rates and functions. Rapidly growing tissues (embryonic tissues, bone marrow, root tips, intestinal crypts) have high mitotic indices (5–10%). These tissues require continuous cell replacement or growth. Slowly growing or quiescent tissues (nerve tissue, muscle tissue, skin dermis) have low mitotic indices (<1%). Long-lived, specialised cells (neurons, cardiac muscle) divide rarely or not at all (MI ≈ 0%).',
      },
    },
    {
      type: 'list',
      id: 'list-mi-values',
      data: {
        style: 'bullet',
        items: [
          'Root tips (apical meristem): MI ~5–10%; rapid growth',
          'Bone marrow (blood cell production): MI ~8–12%; continuous replacement of blood cells',
          'Intestinal epithelium (crypts): MI ~5–8%; cells replaced every 4–5 days',
          'Skin epidermis (basal layer): MI ~1–2%; slower replacement',
          'Liver: MI ~0.5–1% (quiescent but can increase if regenerating)',
          'Nerve tissue: MI ≈ 0%; neurons do not divide in adults',
          'Cardiac muscle: MI ≈ 0%; cardiac muscle cells do not divide',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-cancer-mi',
      data: { text: 'Mitotic Index and Cancer Diagnosis', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-cancer-intro',
      data: {
        text: 'Cancer cells divide continuously and uncontrollably due to mutations that disable cell cycle checkpoints and apoptosis (programmed cell death). Cancerous tissues show abnormally high mitotic indices compared to their normal tissue counterparts. For example, normal breast tissue has MI ~1–2%, but breast cancer may show MI >20%. A pathologist examining a biopsy will count the mitotic index to assess the grade of the cancer: higher MI indicates more aggressive tumour growth and worse prognosis.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-cancer-hallmarks',
      data: {
        text: 'High mitotic index is one of several hallmarks of cancer: uncontrolled division (high MI), loss of differentiation (anaplasia), loss of contact inhibition, invasion into surrounding tissues, and metastasis (spread to distant sites). A high MI alone does not diagnose cancer (embryonic tissues also have high MI), but when combined with other features (abnormal cell morphology, loss of differentiation, invasion), high MI strongly supports a cancer diagnosis.',
      },
    },
    {
      type: 'heading',
      id: 'h-factors-affecting',
      data: { text: 'Factors Affecting Mitotic Index', level: 2 },
    },
    {
      type: 'list',
      id: 'list-factors',
      data: {
        style: 'bullet',
        items: [
          'Growth hormones and growth factors: stimulate cell division; high levels increase MI',
          'Nutrient availability: cells require amino acids, nucleotides, ATP to divide; poor nutrition decreases MI',
          'Temperature: enzyme activity increases with temperature (up to optimum), increasing cell division and MI',
          'Stage of development: embryonic tissues have high MI; adult tissues have lower MI',
          'Environmental stress: stress hormones (e.g. cortisol) inhibit growth and lower MI',
          'Cell cycle inhibitors (e.g. contact inhibition in normal cells): keep MI low; loss of inhibition in cancer increases MI',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-counting-technique',
      data: { text: 'Technique for Counting Cells in Micrographs', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-counting-tips',
      data: {
        text: 'When counting cells in a micrograph: (1) Choose a representative area; count multiple fields to reduce sampling bias. (2) Use a grid overlay or count along a diagonal line. (3) Distinguish cells in mitosis by presence of visible chromosomes and spindle (visible in TEM, less obvious in light microscopy). (4) Count all cells—interphase cells appear as nuclei without visible chromosomes. (5) Record data as a tally; count at least 100–200 cells for statistical reliability. (6) Calculate the mitotic index and any sub-indices (% in each stage if required). (7) Compare with known values for that tissue type to assess normality.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is the mitotic index higher in cancer cells than normal cells? Cancer cells have lost normal cell cycle regulation — mutations in proto-oncogenes and tumour suppressor genes disable checkpoints, allowing cells to divide continuously regardless of growth signals or DNA damage.',
        apply: 'A histology slide shows 400 cells total, of which 60 are in mitosis. Calculate the mitotic index. If a patient undergoes chemotherapy that reduces the mitotic index from 15% to 3%, calculate the percentage reduction in dividing cells and explain what this means clinically.',
        analyze: 'Compare the mitotic index in rapidly dividing tissues (gut epithelium, bone marrow) versus slowly dividing tissues (neurons, cardiac muscle). Explain why chemotherapy damages gut and hair follicle cells as a side effect but rarely affects neurons.',
        evaluate: 'Evaluate the mitotic index as a diagnostic and prognostic tool in cancer pathology. Consider what it measures, its limitations (does not distinguish abnormal from normal mitosis), and how it is used alongside other markers (Ki-67 immunostaining, tumour grading).',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-mi',
      data: {
        items: [
          { text: 'Can calculate mitotic index using the formula', checked: false },
          { text: 'Understand higher MI indicates faster growth and more cell division', checked: false },
          { text: 'Know rapidly growing tissues (root tips, bone marrow) have high MI; quiescent tissues (nerve, muscle) have low MI', checked: false },
          { text: 'Appreciate cancer cells show abnormally high MI and use this in diagnosis', checked: false },
          { text: 'Can count cells in a micrograph and distinguish mitotic from interphase cells', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-mi',
      data: {
        text: 'Mitotic index = (cells in mitosis / total cells) × 100%. High MI (5–10%) in rapidly dividing tissues (root tips, bone marrow, intestinal crypts); low MI (<1%) in quiescent tissues (neurons, cardiac muscle). Cancer cells show abnormally high MI (>20% in some cancers) due to loss of checkpoint control; high MI is used in cancer grading and prognosis assessment. Factors affecting MI include growth hormones, nutrient availability, temperature, development stage, and stress. Counting technique requires counting >100 cells, using representative samples, and distinguishing mitotic from interphase cells via visible chromosomes.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-mitotic-index',
        prompt: 'Write the formula for calculating mitotic index and explain what cells are counted.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-worked-mi',
        prompt: 'Work through the example: 15 cells in mitosis out of 200 total cells. Calculate MI.',
      },
      {
        id: 'cue-3',
        blockId: 'p-cancer-intro',
        prompt: 'Why is mitotic index elevated in cancer, and how is this used in diagnosis?',
      },
      {
        id: 'cue-4',
        blockId: 'list-mi-values',
        prompt: 'Give examples of tissues with high and low mitotic indices, and explain why.',
      },
    ],
    summaryText: 'MI = (cells in mitosis / total cells) × 100%. Rapidly dividing tissues (root apical meristem, bone marrow, intestinal crypts) have high MI (5–10%); quiescent tissues (nerves, cardiac muscle) have MI ≈ 0%. Cancer cells have abnormally high MI (often >20%) due to loss of cell cycle control; high MI is used in cancer grading. Factors affecting MI: growth hormones (increase), nutrients (affect), temperature (affects enzyme activity), development stage (embryonic high, adult low), stress (inhibits). Counting requires >100 cells, identifying mitotic cells by visible chromosomes, and calculating percentage.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Mitotic Index as a Cancer Marker',
      detail: 'Pathological examination of biopsies uses mitotic index (along with morphological abnormalities and invasiveness) to grade cancers: high mitotic index correlates with more aggressive phenotype and worse prognosis.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['mitosis', 'cancer biology', 'pathology'],
    },
  ],
};
