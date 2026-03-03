export const note_biology_6_6A_0 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand the scope of A2-level core practicals 10–18, plan a full investigation including null hypothesis and statistical test selection, and apply appropriate controls.' },
      terms: ['null hypothesis', 'control experiment', 'statistical test'],
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'A2 Core Practicals Overview (CP10–CP18)', level: 2 },
      terms: [],
    },
    {
      id: 'table-cps',
      type: 'comparisonTable',
      data: {
        headers: ['CP', 'Title', 'Key Technique', 'Key Measurement'],
        rows: [
          ['10', 'Light intensity & photosynthesis', 'Pondweed bubble counting', 'Bubbles per minute vs 1/d²'],
          ['11', 'Chromatography of pigments', 'Paper/TLC chromatography', 'Rf values of pigments'],
          ['12', 'Microbial growth', 'Serial dilution + viable plate count', 'CFU/cm³'],
          ['13', 'Microbial growth curve', 'Turbidimetry (600 nm)', 'Absorbance vs time'],
          ['14', 'Antibiotic sensitivity', 'Disk diffusion (Kirby-Bauer)', 'Zone of inhibition (mm)'],
          ['15', 'Respiration rate', 'Respirometer + manometer', 'O₂ consumed (cm³/min)'],
          ['16', 'Thermoregulation', 'O₂ sensor at different temperatures', 'Rate of O₂ consumption'],
          ['17', 'Kidney tubule model', 'Dialysis tubing + food tests', 'Molecules passing membrane'],
          ['18', 'IAA & plant growth', 'Seed germination + measurement', 'Root/shoot length vs [IAA]'],
        ],
        caption: 'A2 Core Practicals 10–18 summary',
      },
      terms: [],
    },
    {
      id: 'h-hypothesis',
      type: 'heading',
      data: { text: 'Writing Hypotheses and Null Hypotheses', level: 2 },
      terms: [],
    },
    {
      id: 'p-hypothesis',
      type: 'paragraph',
      data: { text: 'A scientific hypothesis is a testable, falsifiable prediction. It should state the expected direction of effect (e.g. "increasing light intensity will increase the rate of photosynthesis in Elodea"). The null hypothesis (H₀) states there is NO significant difference or relationship: "There is no significant difference in photosynthesis rate at different light intensities." Statistical tests assess whether to reject H₀. If p < 0.05, H₀ is rejected and the result is considered statistically significant.' },
      terms: ['null hypothesis'],
    },
    {
      id: 'h-controls',
      type: 'heading',
      data: { text: 'Controls and Variables', level: 2 },
      terms: [],
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Types of Variables',
        text: 'Independent variable (IV): what you deliberately change. Dependent variable (DV): what you measure in response. Controlled variables: all other variables kept constant. Negative control: no IV applied (baseline). Positive control: known to give a positive result (validates method). Blank: reagent without sample (for colorimetry baseline).',
      },
      terms: [],
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Planning CP14 (Antibiotic Sensitivity)',
        text: 'H₁: Disks with penicillin will produce a larger zone of inhibition against E. coli than disks with tetracycline.\nH₀: There is no significant difference in zone of inhibition between penicillin and tetracycline disks.\nIV: Antibiotic type (penicillin vs tetracycline vs ampicillin vs control disk).\nDV: Zone of inhibition diameter (mm) measured with ruler after 24h incubation.\nControlled: E. coli strain, agar type and depth, disk soaking time, incubation temperature (25°C), inoculation method (spread plate).\nNegative control: disk soaked in distilled water.\nStatistical test: one-way ANOVA (comparing means of >2 groups, normally distributed data).',
      },
      terms: [],
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is the null hypothesis always a statement of "no difference" rather than the experimental hypothesis? Statistical tests calculate the probability of observing results as extreme as those obtained if the null hypothesis were true (p-value). We can never prove a hypothesis true — we can only gather evidence against H₀. A p < 0.05 means there is less than a 5% chance of obtaining these results by chance if H₀ is true, so we reject H₀ in favour of H₁.',
        apply: 'A student measures photosynthesis rate (bubbles/min) in Elodea at distances 10, 20, 30, 40, 50 cm from a lamp. She obtains means: 32, 22, 14, 9, 6. She uses a t-test to compare 10 cm vs 50 cm results (n=10 each, normally distributed). What is H₀? If the t-test gives p = 0.002, what conclusion should she draw? Which statistical test should she use to compare all five distances simultaneously?',
        analyze: 'Compare the controls required in CP10 (photosynthesis), CP14 (antibiotic sensitivity), and CP18 (IAA and plant growth). For each practical: identify the negative control, explain what it rules out, and describe what result from the control would indicate the experiment is invalid.',
        evaluate: 'Evaluate whether the core practical approach in A-level Biology adequately prepares students for scientific research. Consider: whether controlled school conditions reflect real-world experimental messiness, whether students develop genuine hypothesis-testing skills or follow prescribed methods, and what changes to practical assessment would better develop scientific thinking.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write a scientific hypothesis and corresponding null hypothesis for any A2 practical', checked: false },
          { text: 'I can identify IV, DV, and controlled variables in an experimental design', checked: false },
          { text: 'I can explain the purpose of positive control, negative control, and blank', checked: false },
          { text: 'I can state what p < 0.05 means and when to reject the null hypothesis', checked: false },
          { text: 'I can name the appropriate statistical test for different experimental designs', checked: false },
        ],
      },
      terms: [],
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'A2 practicals CP10–18 cover photosynthesis, chromatography, microbiology, respiration, muscle/homeostasis, and gene technology. Hypothesis: testable, directional prediction. Null hypothesis (H₀): no significant difference. Reject H₀ if p < 0.05. IV = what changes; DV = what is measured; controlled variables = everything else constant. Negative control = no IV; positive control = validates method. Choose statistical test (t-test, ANOVA, chi-squared, Spearman) based on data type and number of groups.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-hypothesis', prompt: 'Write a null hypothesis for an experiment testing whether temperature affects enzyme activity. What does p < 0.05 mean?' },
      { id: 'cue-2', blockId: 'callout-key', prompt: 'Distinguish between a negative control and a positive control. Give an example of each from A2 biology practicals.' },
      { id: 'cue-3', blockId: 'table-cps', prompt: 'Name the key technique and key measurement for CP10, CP14, and CP18.' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'Describe the experimental design for CP14 including IV, DV, controls, and appropriate statistical test.' },
    ],
    summaryText: 'H₀ = no significant difference; reject if p<0.05. IV changes, DV measured, all else controlled. Negative control = no IV; positive control = validates method. CP10: bubble counting; CP14: zone of inhibition; CP18: root/shoot length vs [IAA].',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel IAL Biology Core Practicals 10–18', detail: 'A2-level core practicals covering photosynthesis, microbiology, respiration, homeostasis, and gene technology as specified in WBI14–WBI16.', year: '2024', source: 'Edexcel IAL Biology Specification', tags: ['core practicals', 'practical skills', 'A2 biology'] },
  ],
};
