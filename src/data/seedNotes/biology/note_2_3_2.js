export const note_biology_2_3_2 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-micro',
      data: {
        text: 'Understand light and electron microscopy techniques, calculate magnification and resolution, and appreciate how these tools reveal cellular ultrastructure.',
      },
    },
    {
      type: 'heading',
      id: 'h-light-micro',
      data: { text: 'Light Microscopy: Principles and Limitations', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-light-basic',
      data: {
        text: 'Light microscopes use visible light and glass lenses to magnify specimens. Light enters the specimen, is refracted by the lenses, and forms a magnified image. The maximum useful magnification is approximately ×1500 (using oil immersion to increase the refractive index at the lens-slide interface). However, the theoretical maximum resolution (the ability to distinguish two closely-spaced points as separate) is limited by the wavelength of light. Since visible light has wavelengths of 400–700 nm, the maximum resolution of a light microscope is approximately 200 nm (0.2 μm). This means structures smaller than 200 nm (such as ribosomes, thylakoids, or cristae) cannot be resolved as distinct objects.',
      },
    },
    {
      type: 'equation',
      id: 'eq-magnification',
      data: {
        html: 'Magnification = <span class="nb-frac"><span class="nb-num">Image size</span><span class="nb-den">Actual size</span></span>',
        caption: 'Magnification is the ratio of image size to actual specimen size.',
      },
    },
    {
      type: 'heading',
      id: 'h-light-staining',
      data: { text: 'Light Microscopy: Specimen Preparation and Staining', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-staining',
      data: {
        text: 'Most biological tissue is naturally colourless and transparent, so stains are used to increase contrast. Common stains include haematoxylin-eosin (H&E): haematoxylin stains nuclei blue-purple (basophilic structures rich in DNA/RNA), and eosin stains cytoplasm and muscle fibres pink (acidophilic structures rich in proteins). Methylene blue is used for simple cells (e.g. cheek cells) and stains the nucleus and ribosomes blue. Specimen preparation involves fixation (killing and preserving tissue with formalin or ethanol), sectioning (thin slices cut with a microtome or razor blade), mounting on a glass slide, and staining.',
      },
    },
    {
      type: 'heading',
      id: 'h-electron-micro',
      data: { text: 'Electron Microscopy: TEM and SEM', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-tem',
      data: {
        text: 'Transmission electron microscopes (TEMs) use a beam of electrons instead of light. Electrons have much shorter wavelengths than visible light (approximately 0.01 nm at standard operating voltages), allowing resolution down to approximately 0.1 nm. TEMs can magnify up to ×1,000,000 or more. The electron beam is accelerated through a vacuum and passes through a thin specimen (typically 50–100 nm thick). Electromagnets focus the beam, replacing glass lenses. As electrons pass through the specimen, they are scattered by atoms; denser structures scatter more electrons and appear darker. A fluorescent screen or detector captures the transmitted electrons, forming an image. TEMs reveal ultrastructural details: cristae in mitochondria, thylakoids in chloroplasts, and ribosomes on the ER.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-sem',
      data: {
        text: 'Scanning electron microscopes (SEMs) scan a focused electron beam across the specimen surface. Electrons scattered from the surface are detected, and an image is built up point-by-point. SEMs do not require ultra-thin specimens and can magnify up to ×500,000, with resolution of approximately 3–5 nm. The main advantage is three-dimensional (3D) surface imaging: SEMs reveal the surface topology of structures like pollen grains, insect exoskeletons, or bacterial flagella. However, SEMs do not show internal ultrastructure like TEMs do.',
      },
    },
    {
      type: 'heading',
      id: 'h-em-staining',
      data: { text: 'Electron Microscopy: Specimen Preparation', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-em-prep',
      data: {
        text: 'Electron microscopy requires extensive specimen preparation. Heavy metal stains are used to increase electron scattering and contrast. Osmium tetroxide (OsO₄) stains lipids black, revealing cell membranes and lipid-rich regions. Uranium salts and lead salts stain proteins and carbohydrates. Specimens are fixed in buffered formalin or glutaraldehyde, dehydrated through a series of ethanol concentrations, infiltrated with resin, and polymerised. Ultra-thin sections (50–100 nm) are cut using an ultramicrotome with a diamond or glass knife. For SEMs, specimens must be electrically conductive, so they are often coated with a thin layer of gold or platinum.',
      },
    },
    {
      type: 'heading',
      id: 'h-resolution-magnif',
      data: { text: 'Resolution versus Magnification', level: 3 },
    },
    {
      type: 'paragraph',
      id: 'p-resolution-def',
      data: {
        text: 'Resolution and magnification are distinct concepts. Resolution is the ability to distinguish two closely-spaced points as separate structures; it is fundamentally limited by wavelength. Magnification is simply the enlargement of an image. High magnification without corresponding high resolution results in "empty magnification": the image is larger but no additional structural detail is visible. Light microscopes magnify ×1500 but resolve only to 200 nm; electron microscopes resolve to 0.1 nm (10,000 times better) and can magnify accordingly.',
      },
    },
    {
      type: 'comparisonTable',
      id: 'table-micro-compare',
      data: {
        headers: ['Feature', 'Light Microscope', 'TEM', 'SEM'],
        rows: [
          ['Light source', 'Visible light (400–700 nm)', 'Electrons (0.01 nm)', 'Electrons (0.01 nm)'],
          ['Maximum magnification', '×1500', '×1,000,000', '×500,000'],
          ['Resolution', '~200 nm', '~0.1 nm', '~3–5 nm'],
          ['Specimen thickness', 'Full organism or thin section', '50–100 nm (ultra-thin)', 'Surface only'],
          ['Image type', '2D (colour or B&W)', '2D (B&W)', '3D (topographic)'],
          ['Main use', 'Tissue structure, organelles', 'Ultrastructure (cristae, thylakoids)', 'Surface detail, 3D structure'],
          ['Staining', 'Haematoxylin-eosin, methylene blue', 'Osmium tetroxide, uranium/lead', 'Gold/platinum coating'],
        ],
        caption: 'Comparison of light microscopy and electron microscopy techniques.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-resolution',
      data: {
        style: 'key',
        title: 'Resolution Limit',
        text: 'The resolution limit of any optical system is approximately half the wavelength of radiation used. For light (500 nm average), resolution ≈ 250 nm. For electrons (0.01 nm), resolution ≈ 0.005 nm theoretically. This fundamental limit explains why TEM can reveal structures that light microscopy cannot.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-magnif',
      data: {
        style: 'tip',
        title: 'Calculating Magnification in Exams',
        text: 'If given an image size and actual size, magnification = image/actual. For example, a nucleus image is 8 cm, actual nucleus is 8 μm: magnification = 8 cm / 8 μm = 80 mm / 0.008 mm = 10,000×. Always convert to same units first!',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does the electron microscope have a much higher resolution than the light microscope? Resolution is limited by wavelength — electrons have a wavelength ~100,000x shorter than visible light (~0.004 nm vs 400-700 nm), allowing structures as small as 0.1 nm to be distinguished.',
        apply: 'A cell organelle is 2 micrometres long. In an electron micrograph it appears 40 mm long. Calculate the magnification. If you wanted to view the same organelle at x500 magnification under a light microscope, how large would the image be?',
        analyze: 'Compare TEM (transmission electron microscopy) and SEM (scanning electron microscopy) in terms of specimen preparation, type of image produced (2D vs 3D), resolution, and best use cases in cell biology.',
        evaluate: 'Evaluate the limitations of electron microscopy compared to live-cell fluorescence microscopy. Consider the trade-off between resolution and the ability to observe living processes, and explain how super-resolution microscopy (STORM, PALM) addresses some of these limitations.',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-microscopy',
      data: {
        items: [
          { text: 'Understand light microscope structure, magnification (×1500), and resolution (200 nm)', checked: false },
          { text: 'Know common stains: haematoxylin-eosin, methylene blue', checked: false },
          { text: 'Can describe TEM ultrastructure, magnification (×1,000,000), resolution (0.1 nm)', checked: false },
          { text: 'Know SEM produces 3D surface images, resolution ~3–5 nm', checked: false },
          { text: 'Can calculate magnification and explain resolution limits', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-microscopy',
      data: {
        text: 'Light microscopes magnify ×1500 with ~200 nm resolution, limited by visible light wavelength. Specimens are stained (H&E, methylene blue) and fixed. Electron microscopes use electrons (much shorter wavelength) to achieve higher magnification and resolution: TEMs reach ×1,000,000 (0.1 nm resolution) for internal ultrastructure; SEMs reach ×500,000 (3–5 nm resolution) for 3D surface imaging. Specimen preparation differs: light microscopy uses sectioning and dyes; TEM uses ultra-thin sections and heavy metal stains (osmium tetroxide); SEM uses conductive coating. Resolution, not magnification, is the key limitation of optical systems.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-light-basic',
        prompt: 'What is the maximum magnification and resolution of a light microscope, and why are they limited?',
      },
      {
        id: 'cue-2',
        blockId: 'p-tem',
        prompt: 'Describe how a transmission electron microscope works and what ultrastructural details it can reveal.',
      },
      {
        id: 'cue-3',
        blockId: 'p-sem',
        prompt: 'What is the main advantage of scanning electron microscopy compared to transmission electron microscopy?',
      },
      {
        id: 'cue-4',
        blockId: 'p-resolution-def',
        prompt: 'Explain the difference between resolution and magnification, and why empty magnification is unhelpful.',
      },
    ],
    summaryText: 'Light microscopes magnify ×1500 with 200 nm resolution (limited by light wavelength); use H&E or methylene blue staining. TEMs magnify ×1,000,000 with 0.1 nm resolution for internal ultrastructure; require ultra-thin (50–100 nm) sections and heavy metal stains (osmium tetroxide). SEMs magnify ×500,000 with 3–5 nm resolution for 3D surface imaging. Resolution is fundamentally limited by wavelength; magnification alone (empty magnification) without high resolution does not reveal finer details.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Electron Microscopy Reveals Organellar Ultrastructure',
      detail: 'TEMs revealed mitochondrial cristae and chloroplast thylakoids, confirming subcellular compartmentalisation and explaining aerobic respiration and photosynthesis mechanisms.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['microscopy', 'ultrastructure', 'methods'],
    },
  ],
};
