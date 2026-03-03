export const note_biology_6_6A_1 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand calibration curves and spectrophotometry techniques used to quantify coloured substances in biological samples, including the Beer-Lambert law and sources of error.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Calibration Curves and Spectrophotometry', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Spectrophotometry is a quantitative technique used to measure the concentration of coloured substances by determining how much light is absorbed at a specific wavelength. A calibration curve (standard curve) is constructed by measuring the absorbance of known concentrations, allowing you to determine unknown concentrations by comparison.',
      },
    },
    {
      id: 'h-beer-lambert',
      type: 'heading',
      data: { text: 'Beer-Lambert Law', level: 3 },
    },
    {
      id: 'p-beer-1',
      type: 'paragraph',
      data: {
        text: 'The Beer-Lambert law describes the relationship between absorbance (A), the molar extinction coefficient (ε), concentration (c), and the path length through which light passes (l). This fundamental equation underpins all absorbance measurements:',
      },
    },
    {
      id: 'eq-beer',
      type: 'equation',
      data: {
        html: 'A = εcl',
        caption: 'Beer-Lambert Law: where A = absorbance (unitless), ε = molar extinction coefficient (mol<sup>−1</sup> dm<sup>3</sup> cm<sup>−1</sup>), c = concentration (mol dm<sup>−3</sup>), l = path length (cm)',
      },
    },
    {
      id: 'p-beer-2',
      type: 'paragraph',
      data: {
        text: 'Absorbance is logarithmically related to transmittance (T): A = log₁₀(I₀/I), where I₀ is incident light intensity and I is transmitted light intensity. For a given substance at a fixed wavelength, ε and l are constants, so absorbance is directly proportional to concentration — allowing linear calibration curves.',
      },
    },
    {
      id: 'h-standard-curve',
      type: 'heading',
      data: { text: 'Constructing a Standard Curve', level: 3 },
    },
    {
      id: 'p-standard-1',
      type: 'paragraph',
      data: {
        text: 'A standard curve is built by preparing a series of solutions with known concentrations, measuring their absorbance at the chosen wavelength, and plotting absorbance (y-axis) against concentration (x-axis). The procedure:',
      },
    },
    {
      id: 'list-standard',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Prepare at least 5–6 standard solutions with concentrations spanning the expected range of unknowns.',
          'Include a blank (zero concentration, usually distilled water or buffer).',
          'Transfer each standard into an optical cuvette (or test tube for colorimeter).',
          'Set the spectrophotometer to the target wavelength (e.g. 540 nm for reducing sugars with DNS).',
          'Zero the machine on the blank, then measure absorbance of each standard.',
          'Record absorbance values and plot against known concentration.',
          'Perform linear regression to derive the equation of the line (y = mx + c).',
        ],
      },
    },
    {
      id: 'p-standard-2',
      type: 'paragraph',
      data: {
        text: 'The slope of the best-fit line represents the sensitivity (higher slope = greater absorbance change per unit concentration). The y-intercept should be close to zero if the blank is properly set.',
      },
    },
    {
      id: 'h-unknown',
      type: 'heading',
      data: { text: 'Determining Unknown Concentration', level: 3 },
    },
    {
      id: 'p-unknown',
      type: 'paragraph',
      data: {
        text: 'Once the standard curve is established and its linear equation determined (A = m[concentration] + c), measuring the absorbance of an unknown solution allows you to calculate its concentration by substituting the absorbance into the rearranged equation: [concentration] = (A − c) ÷ m. The unknown must fall within the range of the standard curve for accurate interpolation.',
      },
    },
    {
      id: 'h-spectrophotometer',
      type: 'heading',
      data: { text: 'Spectrophotometer Components', level: 3 },
    },
    {
      id: 'p-spec-1',
      type: 'paragraph',
      data: {
        text: 'A spectrophotometer comprises several key parts:',
      },
    },
    {
      id: 'list-spec',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Light source: typically an incandescent bulb or halogen lamp producing white light across UV and visible range.' },
          { text: 'Monochromator: uses a diffraction grating or prism to isolate a specific wavelength (±5 nm bandwidth).' },
          { text: 'Cuvette (or test tube): clear optical container holding the sample; must be filled to the same level for all measurements.' },
          { text: 'Photodiode detector: converts transmitted light into an electrical signal, displayed as absorbance or transmittance.' },
        ],
      },
    },
    {
      id: 'h-technique',
      type: 'heading',
      data: { text: 'Wavelength Selection and Reagents', level: 3 },
    },
    {
      id: 'table-technique',
      type: 'comparisonTable',
      data: {
        headers: ['Technique', 'Wavelength', 'What Measured', 'Key Reagent', 'Common Error Sources'],
        rows: [
          ['Reducing sugars (DNS)', '540 nm', 'Aldehyde or ketone groups', 'DNS (3,5-dinitrosalicylic acid)', 'Excessive heating, old reagent, contamination'],
          ['Biuret test', '625 nm', 'Peptide bonds (≥2)', 'Cu²⁺ in alkali', 'Incorrect pH, insufficient mixing, air bubbles'],
          ['Bradford protein assay', '595 nm', 'Protein concentration', 'Coomassie brilliant blue', 'Dust contamination, wrong dye batch, haze'],
          ['Photosynthetic pigments (chlorophyll)', '663 nm (chlorophyll a)', 'Leaf pigment extract', 'Ethanol or petroleum ether', 'Exposure to light, air oxidation, evaporation'],
        ],
        caption: 'Common spectrophotometry techniques and their parameters',
      },
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error and How to Minimise Them', level: 3 },
    },
    {
      id: 'list-errors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Scratched or dirty cuvette: reduces light transmission. Solution: use clean, optical-grade cuvettes; handle by edges only.' },
          { text: 'Air bubbles: scatter light and increase absorbance artificially. Solution: tap cuvette gently before each measurement; use bubble-free transfer.' },
          { text: 'Contamination: dust particles increase absorbance. Solution: filter samples through 0.22 μm filters; use lint-free wipes.' },
          { text: 'Wrong wavelength: reduces specificity. Solution: consult method protocol and verify wavelength dial.' },
          { text: 'Temperature drift: affects reaction rates and solution density. Solution: use a thermostated cuvette holder; allow samples to reach room temperature.' },
          { text: 'Instrument drift: baseline absorbance changes over time. Solution: re-zero on blank after every 5–10 measurements.' },
        ],
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example: Glucose Standard Curve using DNS Reagent', level: 3 },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Determining Unknown Glucose Concentration',
        text: 'A student prepared six glucose standards (0, 0.5, 1.0, 1.5, 2.0 mg cm⁻³) and mixed each with DNS reagent, heating at 95°C for 3 minutes. After cooling, absorbance at 540 nm was measured:\n\n[Glucose] (mg cm⁻³): 0, 0.5, 1.0, 1.5, 2.0\nAbsorbance: 0.05, 0.25, 0.48, 0.72, 0.95\n\nPlotting these points and performing linear regression yields:\nA = 0.45 × [glucose] + 0.05 (R² = 0.998)\n\nAn unknown sample gave absorbance = 0.68. Calculate its glucose concentration:\n0.68 = 0.45 × [glucose] + 0.05\n0.63 = 0.45 × [glucose]\n[glucose] = 0.63 ÷ 0.45 = 1.4 mg cm⁻³\n\nThe high R² value (0.998) confirms strong linearity and reliability.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The Beer-Lambert law works because absorbance depends on the probability of photon-molecule collision. As light travels through a solution, it is progressively attenuated in proportion to both the number of absorbing molecules (concentration) and the distance light travels (path length). At very high concentrations (typically > 1 mol dm⁻³), deviations occur because molecules interact with each other, violating the law\'s assumptions.',
        apply: 'A student measures absorbance of a protein standard at 595 nm: A = 0.35. If the standard curve equation is A = 0.42 × [protein] mg cm⁻³, calculate [protein]. Then explain how you would prepare a cuvette to ensure accurate measurement.',
        analyze: 'Compare the advantages and limitations of using a spectrophotometer versus a simple colorimeter (e.g. Lovibond apparatus). Consider wavelength precision, cost, speed, and suitability for different sample types.',
        evaluate: 'A calibration curve was constructed using standards that were all prepared in distilled water, but the unknown sample was dissolved in 0.5 mol dm⁻³ NaCl solution. Why might this introduce error, and how would you address it?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state the Beer-Lambert law and define each term (A, ε, c, l).', checked: false },
          { text: 'I can prepare a standard curve with 5–6 standards plus blank and identify the best-fit line.', checked: false },
          { text: 'I can use the linear equation of a calibration curve to calculate unknown concentration.', checked: false },
          { text: 'I can identify appropriate wavelengths for common biochemical tests (DNS 540 nm, biuret 625 nm).', checked: false },
          { text: 'I can identify at least 4 sources of error in spectrophotometry and suggest practical solutions.', checked: false },
          { text: 'I understand why absorbance is proportional to concentration at low absorbance values.', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Spectrophotometry quantifies coloured substances using the Beer-Lambert law (A = εcl). A calibration curve is constructed by measuring absorbance of known-concentration standards, yielding a linear regression equation. Unknown concentration is determined by measuring absorbance and using the curve equation. Common techniques include DNS for reducing sugars (540 nm), biuret for proteins (625 nm), and Bradford assay (595 nm). Critical errors — scratched cuvettes, air bubbles, contamination, wrong wavelength, and instrument drift — must be minimised through careful technique and regular baseline checks.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-beer',
        prompt: 'What does the Beer-Lambert law state, and what does each symbol represent?',
      },
      {
        id: 'cue-2',
        blockId: 'h-standard-curve',
        prompt: 'List the steps for constructing a calibration curve using standards.',
      },
      {
        id: 'cue-3',
        blockId: 'h-errors',
        prompt: 'Name three sources of error in spectrophotometry and how to prevent each.',
      },
      {
        id: 'cue-4',
        blockId: 'table-technique',
        prompt: 'What wavelength is used for DNS reagent (reducing sugars) and why is this chosen?',
      },
      {
        id: 'cue-5',
        blockId: 'h-unknown',
        prompt: 'If a standard curve has equation A = 0.5[glucose] + 0.02, and an unknown gives absorbance 0.77, calculate [glucose].',
      },
    ],
    summaryText: 'Spectrophotometry uses the Beer-Lambert law (A = εcl) to measure unknown concentrations via linear calibration curves. Standards are measured, a regression line is fitted, and unknowns are interpolated. Critical errors include cuvette defects, air bubbles, contamination, wrong wavelength, and temperature drift — all minimised by careful technique.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Beer and Lambert Optical Studies',
      detail: 'Original derivation of the law relating absorbance to concentration and path length.',
      year: '1852–1860',
      source: 'Classical Physics',
      tags: ['fundamental-law', 'light-absorption'],
    },
    {
      id: 'ev-2',
      title: 'DNS Reagent Standard Protocol',
      detail: 'Miller (1959) defined the DNS method for reducing sugar quantification at 540 nm.',
      year: '1959',
      source: 'Analytical Biochemistry',
      tags: ['biochemistry', 'carbohydrates'],
    },
    {
      id: 'ev-3',
      title: 'Bradford Protein Assay',
      detail: 'Bradford (1976) developed the Coomassie blue dye binding method (595 nm).',
      year: '1976',
      source: 'Analytical Biochemistry',
      tags: ['protein-quantification', 'colorimetry'],
    },
  ],
};
