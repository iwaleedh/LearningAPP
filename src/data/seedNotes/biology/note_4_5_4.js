export const note_biology_4_5_4 = {
  blocks: [
    {
      id: 'obj-chromatography',
      type: 'objective',
      data: {
        text: 'Understand paper and thin-layer chromatography of photosynthetic pigments, calculate Rf values, interpret absorption and action spectra, and explain why plants appear green.',
      },
    },
    {
      id: 'h-chromatography-intro',
      type: 'heading',
      data: {
        text: 'Chromatography of Photosynthetic Pigments',
        level: 2,
      },
    },
    {
      id: 'p-chromatography-intro',
      type: 'paragraph',
      data: {
        text: 'Photosynthetic pigments are organic molecules that absorb light of specific wavelengths. Leaf extracts contain a mixture of pigments that can be separated by paper chromatography (PC) or thin-layer chromatography (TLC). These techniques exploit differences in the solubility of pigments in the mobile phase and their affinity for the stationary phase (paper or silica gel), causing different pigments to migrate at different rates.',
      },
    },
    {
      id: 'h-pigment-types',
      type: 'heading',
      data: {
        text: 'Types of Photosynthetic Pigments',
        level: 2,
      },
    },
    {
      id: 'p-pigments-intro',
      type: 'paragraph',
      data: {
        text: 'Four main pigments are found in most green plants. Chlorophyll a (blue-green) is the primary light-harvesting pigment in both PSII and PSI. Chlorophyll b (yellow-green) is an accessory pigment that extends the range of wavelengths absorbed. Carotenoids and xanthophylls (collectively yellow/orange) are secondary pigments that protect chlorophyll from photodamage and transfer energy to chlorophyll.',
      },
    },
    {
      id: 'table-pigments',
      type: 'comparisonTable',
      data: {
        headers: ['Pigment', 'Colour', 'Primary/Accessory', 'Key Wavelengths (nm)', 'Function'],
        rows: [
          ['Chlorophyll a', 'Blue-green', 'Primary', '430, 663', 'Main photosynthetic pigment; reaction centre'],
          ['Chlorophyll b', 'Yellow-green', 'Accessory', '453, 644', 'Antenna pigment; extends absorption range'],
          ['Carotenoids', 'Orange-yellow', 'Accessory', '400–500', 'Light harvesting, photodamage protection'],
          ['Xanthophylls', 'Yellow', 'Accessory', '400–500', 'Light harvesting, excess energy dissipation'],
        ],
        caption: 'Photosynthetic pigments and their characteristics',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pigment Ratio',
        text: 'The typical ratio of chlorophyll a : chlorophyll b : carotenoid : xanthophyll in green leaves is approximately 2 : 1 : 1 : 1. This ratio varies between plant species and light conditions (shade-adapted leaves have higher chlorophyll b ratios).',
      },
    },
    {
      id: 'h-chromatography-method',
      type: 'heading',
      data: {
        text: 'Chromatography Method',
        level: 2,
      },
    },
    {
      id: 'list-procedure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          {
            text: 'Grind fresh leaves with ethanol or acetone (organic solvent) in a pestle and mortar, forming a pigment extract.',
          },
          {
            text: 'Spot the extract near the bottom of chromatography paper or TLC plate using a capillary tube.',
          },
          {
            text: 'Place the paper/plate vertically in a solvent tank containing the mobile phase (typically petroleum ether with acetone or ethanol).',
          },
          {
            text: 'Allow the solvent to travel up by capillary action until it reaches the solvent front.',
          },
          {
            text: 'Remove the paper/plate and mark the solvent front position. Measure distances from the origin.',
          },
        ],
      },
    },
    {
      id: 'h-rf-values',
      type: 'heading',
      data: {
        text: 'Rf Values and Calculations',
        level: 2,
      },
    },
    {
      id: 'p-rf-definition',
      type: 'paragraph',
      data: {
        text: 'The Rf (retention factor or retardation factor) value quantifies how far a pigment migrates relative to the solvent front. It is a dimensionless number between 0 and 1. Pigments with lower Rf values (more polar) are retained by the stationary phase and migrate less; pigments with higher Rf values (less polar) migrate further with the solvent.',
      },
    },
    {
      id: 'eq-rf',
      type: 'equation',
      data: {
        html: 'Rf = <span class="nb-frac"><span class="nb-num">distance travelled by pigment</span><span class="nb-den">distance travelled by solvent front</span></span>',
        caption: 'Rf value calculation',
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Rf Calculation',
        text: 'The solvent front travels 100 mm from the origin. Chlorophyll a travels 60 mm, chlorophyll b 40 mm, carotenoid 85 mm, xanthophyll 50 mm. Rf values: Chl a = 0.60, Chl b = 0.40, carotenoid = 0.85, xanthophyll = 0.50. Pigments are identified by comparing Rf values to a reference table. Higher Rf indicates less polarity.',
      },
    },
    {
      id: 'h-absorption-action',
      type: 'heading',
      data: {
        text: 'Absorption Spectrum vs Action Spectrum',
        level: 2,
      },
    },
    {
      id: 'p-absorption',
      type: 'paragraph',
      data: {
        text: 'The absorption spectrum shows the wavelengths of light that are absorbed by a particular pigment (or mixture of pigments). It is measured by passing light of different wavelengths through a pigment solution and measuring the fraction transmitted. Peaks in the absorption spectrum indicate wavelengths strongly absorbed.',
      },
    },
    {
      id: 'p-action',
      type: 'paragraph',
      data: {
        text: 'The action spectrum shows the effectiveness of different wavelengths of light in driving a photosynthetic process (e.g. oxygen evolution or CO₂ fixation). It is measured by exposing plants to different wavelengths at equal photon flux and measuring photosynthetic rate. The action spectrum roughly matches the absorption spectrum of chlorophyll and accessory pigments, indicating that the pigments responsible for light absorption are directly involved in photosynthesis.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Spectrum Interpretation',
        text: 'If the action spectrum is narrower than the absorption spectrum, it may indicate that not all absorbed light is used for photosynthesis (some energy is lost as heat or fluorescence). Conversely, if the action spectrum matches the absorption spectrum closely, it suggests that all absorbed light drives the photosynthetic process.',
      },
    },
    {
      id: 'h-green-colour',
      type: 'heading',
      data: {
        text: 'Why Plants Appear Green',
        level: 2,
      },
    },
    {
      id: 'p-green-colour',
      type: 'paragraph',
      data: {
        text: 'Chlorophyll absorbs strongly in the blue (430 nm) and red (663 nm) regions of the spectrum but poorly in the green region (500–600 nm). Light in the green region is largely transmitted through or reflected by chlorophyll. This reflected green light reaches our eyes, making plants appear green. The colour we perceive is not what chlorophyll uses for photosynthesis—it is what chlorophyll rejects. Accessory pigments (carotenoids, xanthophylls) absorb some green light and transfer energy to chlorophyll, but their contribution is insufficient to change the overall green appearance.',
      },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Evolutionary Perspective',
        text: 'Plants evolved on Earth when the sun\'s spectrum had already been filtered by the atmosphere, removing much UV and blue light. Green light penetrates water better than blue or red. However, plants absorb predominantly blue and red, not green, suggesting that ancestral photosynthetic organisms evolved in anaerobic conditions with different light environments, and modern plants inherited this "inefficient" absorption spectrum.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Chromatography separates pigments by their differential migration in a mobile phase. Chlorophyll a and b, carotenoids, and xanthophylls are separated based on polarity. Rf values (pigment distance ÷ solvent front distance) are used to identify pigments. The absorption spectrum shows which wavelengths a pigment absorbs; the action spectrum shows the effectiveness of different wavelengths for photosynthesis. Plants appear green because chlorophyll absorbs blue and red light but reflects green light, which our eyes detect.',
        apply: 'A student performs chromatography on a leaf extract and finds 5 pigment spots instead of the expected 4. Suggest explanations and propose how to determine the identity of the extra spot.',
        analyze: 'Compare the absorption spectrum of chlorophyll a with its action spectrum. Explain why they might differ and what this reveals about energy transfer within the photosystem.',
        evaluate: 'If plants absorbed all wavelengths of visible light equally, they would appear black. Yet they appear green. Evaluate whether this is a design flaw in photosynthesis or an evolutionary advantage. Consider the ecological implications.',
      },
      terms: [],
    },
    {
      id: 'checklist-chromatography',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can name the four main photosynthetic pigments and their colours', checked: false },
          { text: 'I understand the principle of paper and thin-layer chromatography', checked: false },
          { text: 'I can calculate and interpret Rf values to identify pigments', checked: false },
          { text: 'I can distinguish between absorption and action spectra', checked: false },
          { text: 'I understand why plants appear green and what this tells us about light absorption', checked: false },
          { text: 'I know which wavelengths are most effectively used for photosynthesis', checked: false },
        ],
      },
    },
    {
      id: 'summary-chromatography',
      type: 'summary',
      data: {
        text: 'Chromatography separates photosynthetic pigments (chlorophyll a and b, carotenoids, xanthophylls) based on their solubility differences. Rf values identify pigments; higher Rf means less polar and less retained. Absorption spectrum shows wavelengths absorbed by pigments; action spectrum shows the effectiveness of wavelengths for photosynthesis—they correlate closely. Plants appear green because chlorophyll strongly absorbs blue (430 nm) and red (663 nm) light but poorly absorbs green (500–600 nm), which is reflected.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-pigments',
        prompt: 'Name the four main photosynthetic pigments, state their colours, and explain whether each is primary or accessory.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-rf',
        prompt: 'Define Rf value and explain how it is calculated. How does Rf help identify pigments?',
      },
      {
        id: 'cue-3',
        blockId: 'list-procedure',
        prompt: 'Describe the procedure for paper chromatography of leaf pigments, from extraction to solvent front identification.',
      },
      {
        id: 'cue-4',
        blockId: 'h-green-colour',
        prompt: 'Why do plants appear green? Which wavelengths are absorbed by chlorophyll and which are reflected?',
      },
      {
        id: 'cue-5',
        blockId: 'h-absorption-action',
        prompt: 'Explain the difference between an absorption spectrum and an action spectrum. Why do they match closely?',
      },
    ],
    summaryText: 'Photosynthetic pigments are separated by chromatography: chlorophyll a (blue-green, primary), chlorophyll b (yellow-green, accessory), carotenoids and xanthophylls (orange-yellow, accessory). Rf = pigment distance ÷ solvent front distance; higher Rf indicates less polarity and greater migration. Absorption spectrum shows wavelengths absorbed (blue 430 nm, red 663 nm for chlorophyll); action spectrum shows effectiveness for photosynthesis. Plants appear green because green light (500–600 nm) is poorly absorbed and reflected, while blue and red are absorbed.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Chromatography Technique',
      detail: 'Thin-layer chromatography is now the standard method for pigment separation. Paper chromatography remains valuable for educational purposes and can be adapted for different solvent systems.',
      year: '2023',
      source: 'A-Level Biology Practical (Core Practical 11)',
      tags: ['practical', 'technique'],
    },
    {
      id: 'ev-2',
      title: 'Absorption and Action Spectra',
      detail: 'Engel­mann\'s 1882 work on action spectrum and modern absorption measurements show that photosynthetic efficiency closely matches the absorption profile of chlorophyll and carotenoids.',
      year: '2023',
      source: 'Historical and modern spectrophotometry',
      tags: ['spectrum', 'light'],
    },
  ],
};
