export const note_biology_2_3_12 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-core-prac-5',
      data: {
        text: 'Understand the practical method for preparing and observing animal cells, calculate magnification, and identify cell structures under a light microscope.',
      },
    },
    {
      type: 'heading',
      id: 'h-core-prac-5',
      data: { text: 'Core Practical 5: Animal Cell Microscopy', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro-prac',
      data: {
        text: 'Core Practical 5 involves preparing and observing animal cells (typically cheek cells from the inside of the mouth) under a light microscope. The aims are: (1) to prepare and stain biological material, (2) to use a light microscope to observe cell structures, (3) to calculate magnification, (4) to measure cell sizes and calculate actual sizes from scale bars, and (5) to identify organelles and cell structures (nucleus, cell membrane, cytoplasm).',
      },
    },
    {
      type: 'heading',
      id: 'h-method',
      data: { text: 'Method', level: 2 },
    },
    {
      type: 'list',
      id: 'list-method',
      data: {
        style: 'numbered',
        items: [
          'Prepare a slide: place a drop of distilled water on a clean glass slide',
          'Obtain sample: gently scrape the inside of the cheek with a clean plastic or wooden spatula to collect cells',
          'Add sample: mix the scraped cells into the drop of water on the slide; spread into a thin smear',
          'Add stain: add a drop of methylene blue (or toluidine blue) stain. Methylene blue stains nuclei and ribosomes blue, making them visible',
          'Add coverslip: carefully lower a coverslip onto the slide at a 45° angle to avoid air bubbles',
          'Observe: start with the lowest magnification (×4 or ×10 objective); locate cells, then switch to higher magnification (×40 objective) for detail',
          'Identify structures: locate the nucleus (large blue-staining structure), cytoplasm (surrounding the nucleus), and cell membrane (boundary of the cell)',
          'Avoid common errors: ensure the slide is not too thick (cells should be in a single layer); avoid excessive stain (too dark to see detail); do not press hard on the coverslip (crushes cells)',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-observations',
      data: { text: 'Expected Observations', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-obs-cells',
      data: {
        text: 'Under the light microscope (×40 objective, magnification ×400), cheek cells appear as roughly rectangular or irregular polygonal shapes. The most prominent feature is the nucleus, stained dark blue by methylene blue, located eccentrically (off-centre) within the cell. Around the nucleus is the lighter-staining cytoplasm. The cell membrane (plasma membrane) is visible as the boundary of the cell, though its precise outline may be indistinct in live cells. The nucleolus (darker-staining region within the nucleus) may be visible in some cells. Mitochondria and other organelles are not visible at this magnification; they are too small (typically <1 μm) to resolve with a light microscope.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-cell-size',
      data: {
        text: 'Cheek cells are typically 50–100 μm in diameter. The nucleus is ~5–10 μm. Using an eyepiece graticule (a scale visible in the eyepiece when looking through the microscope) or by measuring an image with a ruler, students can estimate the size of the nucleus and cell, then calculate the actual size using the formula: actual size = image size / magnification.',
      },
    },
    {
      type: 'heading',
      id: 'h-magnification-calc',
      data: { text: 'Calculating Magnification', level: 2 },
    },
    {
      type: 'equation',
      id: 'eq-magnif-prac',
      data: {
        html: 'Magnification = <span class="nb-frac"><span class="nb-num">Image size (mm or cm)</span><span class="nb-den">Actual size (mm or cm)</span></span>',
        caption: 'Formula for calculating magnification from image and actual size.',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-mag',
      data: {
        style: 'worked',
        title: 'Magnification Calculation Example',
        text: 'A nucleus image on a printed micrograph measures 5 cm in diameter. The actual nucleus diameter is 10 μm. First, convert to same units: 5 cm = 50 mm; 10 μm = 0.01 mm. Magnification = 50 mm / 0.01 mm = 5000×. Alternatively, if told the magnification is ×400, and the image is 5 mm, then actual size = 5 mm / 400 = 0.0125 mm = 12.5 μm.',
      },
    },
    {
      type: 'heading',
      id: 'h-limitations',
      data: { text: 'Limitations of Light Microscopy for Cell Study', level: 2 },
    },
    {
      type: 'list',
      id: 'list-limitations',
      data: {
        style: 'bullet',
        items: [
          'Resolution limit (~200 nm): organelles smaller than 200 nm (mitochondria, rough ER, ribosomes, lysosomes) cannot be resolved as distinct structures',
          'Magnification limit (×1500): beyond this, magnification becomes "empty" (no additional detail visible)',
          'Live vs. fixed cells: staining requires fixation, killing the cell; cannot observe living processes like cytoplasmic streaming or organelle movement',
          'Two-dimensionality: light microscopy shows a thin optical section; 3D structure cannot be fully appreciated (electron microscopy or confocal microscopy needed for 3D)',
          'Stain artefacts: staining can introduce colour changes or precipitation not present in living cells',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-improvements',
      data: { text: 'Improvements to the Practical', level: 2 },
    },
    {
      type: 'list',
      id: 'list-improvements',
      data: {
        style: 'bullet',
        items: [
          'Use multiple stains: toluidine blue stains more intensely than methylene blue; acridine orange (fluorescent) makes nuclei stand out if fluorescence microscope available',
          'Try different cell types: onion epidermal cells (have cell wall, interesting for plant vs. animal comparison), human blood smears (see red blood cells lacking nucleus), white blood cells (with diverse nuclear morphologies)',
          'Measure multiple cells and calculate mean size for better accuracy',
          'Use an eyepiece graticule (calibrated scale in eyepiece) for more accurate size measurements than ruler measurements on images',
          'Photograph or draw cells to record observations; sketches help identify structures',
          'Compare with electron micrographs to discuss ultrastructure invisible in light microscopy',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-sources-error',
      data: { text: 'Sources of Error and Safety', level: 2 },
    },
    {
      type: 'list',
      id: 'list-sources',
      data: {
        style: 'bullet',
        items: [
          'Too much stain: makes cells too dark; detail is obscured. Solution: dilute stain or wash excess off before mounting',
          'Air bubbles: disrupt view and may distort cells. Solution: carefully lower coverslip at 45° angle; use a needle to remove bubbles if needed',
          'Thick preparation: cells overlap or are compressed. Solution: use only a thin smear; do not press hard on coverslip',
          'Dried-out slide: preparation dries during observation, distorting cells. Solution: add water under coverslip to maintain moisture',
          'Incorrect focusing: student damages objective by pressing slide against it. Solution: use coarse focus first (lowest power), then fine focus (higher power)',
          'Safety: methylene blue is non-toxic but can stain skin and clothing; wear gloves and apron. Glass slides can break; handle carefully and dispose in sharps container',
        ],
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why must cheek cells be stained before they can be observed clearly under a light microscope? Unstained cells are nearly transparent because their components have similar refractive indices to water. Stains like methylene blue bind to negatively charged DNA and RNA, increasing contrast by absorbing specific wavelengths of light.',
        apply: 'Under the microscope, a cheek cell nucleus appears 4 mm wide in the image. The microscope magnification is x400. Calculate the actual diameter of the nucleus in micrometres. Convert this to nanometres and compare it to the resolution limit of a light microscope.',
        analyze: 'Compare the information obtainable from a light micrograph of a cheek cell with that from a transmission electron micrograph. List at least five structures visible only in TEM, and explain why the extra resolution is necessary to see them.',
        evaluate: 'Evaluate the ethical considerations of using human cheek cells in school practicals. Consider consent, privacy of genetic information potentially revealed, safe handling of human biological material, and compare with the use of onion root cells as an alternative.',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-prac-5',
      data: {
        items: [
          { text: 'Can prepare a cheek cell slide with methylene blue stain', checked: false },
          { text: 'Can identify nucleus, cytoplasm, and cell membrane under light microscope', checked: false },
          { text: 'Can calculate magnification from image size and actual size', checked: false },
          { text: 'Can measure cell and nucleus diameters and calculate actual sizes from scale bars', checked: false },
          { text: 'Understand limitations of light microscopy: resolution, magnification, death of cell', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-prac-5',
      data: {
        text: 'Core Practical 5: prepare cheek cells in water, stain with methylene blue (stains nucleus blue), mount with coverslip, observe under light microscope (×400 magnification). Identify nucleus (dark blue, ~5–10 μm), cytoplasm (lighter), cell membrane (boundary). Measure image size, calculate actual size using magnification formula: actual = image / magnification. Cheek cells ~50–100 μm diameter. Light microscope limits: resolution ~200 nm (cannot see mitochondria, ribosomes, lysosomes); magnification ×1500 max; fixation kills cells; 2D only. Improvements: use multiple stains, try different cell types, measure multiple cells, use eyepiece graticule, compare with electron micrographs. Common errors: excess stain (too dark), air bubbles, thick preparation, drying, incorrect focusing. Safety: wear gloves with methylene blue; handle glass carefully.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-method',
        prompt: 'Describe the step-by-step method for preparing and staining a cheek cell slide.',
      },
      {
        id: 'cue-2',
        blockId: 'p-obs-cells',
        prompt: 'What structures can you identify in a cheek cell under ×400 magnification?',
      },
      {
        id: 'cue-3',
        blockId: 'eq-magnif-prac',
        prompt: 'If a nucleus image is 4 mm and actual size is 8 μm, calculate the magnification.',
      },
      {
        id: 'cue-4',
        blockId: 'list-limitations',
        prompt: 'Why can mitochondria not be seen with a light microscope?',
      },
    ],
    summaryText: 'Method: scrape cheek, mix with water drop on slide, add methylene blue stain, mount coverslip, observe at ×400 magnification. Observations: nucleus (dark blue, ~5–10 μm, eccentrically located), cytoplasm (light staining), cell membrane (boundary). Cheek cells ~50–100 μm. Magnification = image size / actual size (convert to same units). Light microscope limitations: resolution ~200 nm (below which structures like mitochondria, ribosomes cannot be distinguished), magnification max ×1500, kills cells by fixation, 2D only. Improvements: multiple stains, different cell types, multiple measurements, eyepiece graticule, compare with EM. Errors: excess stain (obscures detail), air bubbles, thick preparation, drying, incorrect focus. Safety: gloves (methylene blue stains), careful handling of glass.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Light Microscopy in Cell Biology Education',
      detail: 'Observation of stained animal cells is a foundational practical that introduces students to microscopy techniques, magnification calculations, and cellular structures visible at the light microscope scale.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['microscopy', 'practical skills', 'cell observation'],
    },
  ],
};
