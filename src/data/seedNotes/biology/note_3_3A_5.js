export const note_biology_3_3A_5 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand COSHH regulations, biosafety levels, ethical considerations when using biological materials, and correct disposal procedures in A-level Biology practicals.' },
      terms: ['COSHH', 'risk assessment', 'biosafety level'],
    },
    {
      id: 'h-coshh',
      type: 'heading',
      data: { text: 'COSHH and Chemical Safety', level: 2 },
      terms: [],
    },
    {
      id: 'p-coshh',
      type: 'paragraph',
      data: { text: 'COSHH (Control of Substances Hazardous to Health) is UK law requiring identification and control of hazardous substances. Common hazardous substances in biology practicals include: ethanol (flammable, irritant), phloroglucinol stain (toxic), hydrochloric acid (corrosive), and phenol (corrosive). Control measures include using fume hoods, wearing PPE (gloves, goggles, lab coat), working in small quantities, and following correct disposal procedures.' },
      terms: ['COSHH'],
    },
    {
      id: 'h-risk',
      type: 'heading',
      data: { text: 'Risk Assessment Framework', level: 2 },
      terms: [],
    },
    {
      id: 'p-risk',
      type: 'paragraph',
      data: { text: 'Risk = Hazard × Likelihood × Severity. Each factor is scored 1–5. Example: broken glass (hazard = 4, likelihood = 2, severity = 3) gives a risk score of 24 (moderate). Risk can be reduced by: eliminating the hazard, reducing likelihood (safe handling procedures), or reducing severity (first aid training, PPE). All biology practicals must have a written risk assessment before starting.' },
      terms: ['risk assessment'],
    },
    {
      id: 'callout-risk-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Risk Assessment Steps',
        text: '1. Identify hazards (chemical, biological, physical). 2. Identify who is at risk. 3. Assess likelihood and severity. 4. List control measures. 5. Record and review. 6. Implement and monitor.',
      },
      terms: [],
    },
    {
      id: 'h-biosafety',
      type: 'heading',
      data: { text: 'Biosafety Levels and Safe Use of Microorganisms', level: 2 },
      terms: [],
    },
    {
      id: 'p-biosafety',
      type: 'paragraph',
      data: { text: 'Microorganisms are classified into biosafety levels (BSL 1–4) based on pathogenicity and risk of infection. School biology uses only BSL1 organisms: non-pathogenic species that pose minimal risk to healthy individuals. Examples include Bacillus subtilis (gram-positive, soil bacterium), E. coli K12 (lab strain, lacks virulence factors), and Saccharomyces cerevisiae (baker\'s yeast). BSL2–4 organisms (e.g. MRSA, HIV) require specialist containment facilities and are not used in schools.' },
      terms: ['biosafety level'],
    },
    {
      id: 'table-bsl',
      type: 'comparisonTable',
      data: {
        headers: ['BSL Level', 'Risk', 'Examples', 'Containment'],
        rows: [
          ['BSL1', 'Minimal', 'E. coli K12, B. subtilis, yeast', 'Basic microbiology lab, PPE'],
          ['BSL2', 'Moderate', 'Salmonella, MRSA', 'Limited access, biological safety cabinets'],
          ['BSL3', 'High', 'M. tuberculosis, HIV', 'Specialist facility, negative pressure rooms'],
          ['BSL4', 'Extreme', 'Ebola, smallpox', 'Maximum containment, full pressure suits'],
        ],
        caption: 'Biosafety levels and containment requirements',
      },
      terms: [],
    },
    {
      id: 'h-ethics',
      type: 'heading',
      data: { text: 'Ethical Considerations and Disposal', level: 2 },
      terms: [],
    },
    {
      id: 'p-ethics',
      type: 'paragraph',
      data: { text: 'Using human samples (cheek cells, blood) requires informed consent, anonymisation, and confidentiality. All samples should be treated as potentially infectious (standard precautions: gloves, safe sharps disposal). Ethical issues also arise with animal tissue — minimise use, use alternatives where possible, avoid causing unnecessary suffering. Biological waste must be autoclaved (121°C, 15 min at 1 atm) before disposal. Chemical waste is disposed of via licensed contractors (not poured down drains).' },
      terms: [],
    },
    {
      id: 'callout-tip-ethics',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Aseptic Technique Links to Safety',
        text: 'Aseptic technique (flaming loops, working near Bunsen, not touching agar) protects both the experiment (prevents contamination) and the student (prevents exposure to organisms). Always incubate at 25°C in schools — not 37°C — to avoid selecting for human pathogens.',
      },
      terms: [],
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why must biological waste from microorganism experiments be autoclaved before disposal, whereas chemical waste requires specialist licensed disposal? Autoclaving (121°C, 15 min, 1 atm pressure) kills all living organisms including spores, rendering biological waste non-infectious. Chemical waste cannot be denatured by heat and requires specialist chemical treatment or incineration to prevent environmental contamination.",
        apply: "A student plans to test the antimicrobial activity of five plant extracts on E. coli K12 using the disk diffusion method. Write a risk assessment for this practical: identify three hazards, state the risk level (low/medium/high) for each, and suggest a specific control measure for each hazard.",
        analyze: "Compare the ethical frameworks applied to: (a) using human cheek cells (consent, genetic privacy), (b) using animal tissue (minimise suffering, use alternatives), and (c) culturing microorganisms (containment, disposal). What principles are common to all three, and where do the ethical considerations differ?",
        evaluate: "Evaluate whether the COSHH regulations adequately protect students and teachers in school biology laboratories. Consider the types of hazards covered (chemical and biological), the limitations of COSHH for novel hazards (new antimicrobials, GMOs), and whether current safety training in schools is sufficient to ensure compliance.",
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify COSHH hazards in biology practicals and state control measures', checked: false },
          { text: 'I can write a risk assessment using hazard × likelihood × severity', checked: false },
          { text: 'I know which organisms are BSL1 and why they are safe for school use', checked: false },
          { text: 'I understand ethical requirements when using human or animal tissue', checked: false },
          { text: 'I know correct disposal methods for biological and chemical waste', checked: false },
        ],
      },
      terms: [],
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'COSHH: identify hazardous substances (ethanol, acids, phenol), assess risk (hazard × likelihood × severity), implement controls (PPE, fume hoods, safe disposal). BSL1 organisms (E. coli K12, B. subtilis, yeast) are safe for school use. Human tissue requires informed consent and standard precautions. Biological waste: autoclave before disposal. Chemical waste: licensed contractor disposal only.' },
      terms: [],
    },
{ 'id': 'callout-examiner-e3862574', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Acrosome vs. Cortical Reactions', 'text': 'Do not confuse these two processes. The acrosome reaction involves the release of digestive enzymes from the sperm head to penetrate the zona pellucida. In contrast, the cortical reaction occurs *after* fusion, releasing granules that harden the zona pellucida to prevent polyspermy.' } },
{ 'id': 'callout-examiner-0678884b', 'type': 'callout', 'data': { 'style': 'tip', 'title': 'Measuring Pollen Tube Growth', 'text': 'For measuring the dependent variable (pollen tube length) accurately under a microscope, state that you must use an eyepiece graticule that has been properly calibrated with a stage micrometer.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-coshh', prompt: 'Name three hazardous substances used in biology practicals and state a control measure for each.' },
      { id: 'cue-2', blockId: 'p-risk', prompt: 'Explain how risk is calculated and how it can be reduced.' },
      { id: 'cue-3', blockId: 'p-biosafety', prompt: 'What is a BSL1 organism? Give two examples and explain why they are safe to use in schools.' },
      { id: 'cue-4', blockId: 'p-ethics', prompt: 'What ethical considerations apply when using human samples in biology practicals?' },
    ],
    summaryText: 'COSHH requires risk assessment (hazard × likelihood × severity) and control measures. BSL1 organisms (E. coli K12, yeast) are safe for schools. Human tissue needs consent. Biological waste: autoclave; chemical waste: licensed disposal.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Safety and Ethics in Biological Investigation', detail: 'COSHH, biosafety levels, ethical review, and waste disposal ensure safe and responsible biology practicals.', year: '2024', source: 'Edexcel IAL Biology Specification', tags: ['safety', 'COSHH', 'ethics', 'biosafety'] },
  ],
};
