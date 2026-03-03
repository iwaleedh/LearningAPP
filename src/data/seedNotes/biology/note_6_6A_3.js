export const note_biology_6_6A_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Learn to plan comprehensive biological investigations with clear hypotheses, controlled variables, and appropriate statistical tests. Develop skills to critically evaluate investigations for reliability, validity, reproducibility, and accuracy.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Planning and Evaluating Investigations', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'A robust investigation follows a logical structure: background research → hypothesis → method → data collection → statistical analysis → conclusion. Equally important is the ability to critically evaluate investigations, identifying strengths, weaknesses, and suggesting improvements.',
      },
    },
    {
      id: 'h-planning',
      type: 'heading',
      data: { text: 'Writing a Full Investigation Plan', level: 3 },
    },
    {
      id: 'p-plan-1',
      type: 'paragraph',
      data: {
        text: 'An investigation plan should address each of the following components:',
      },
    },
    {
      id: 'list-plan',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Background research: Review relevant literature and prior experiments. Justify why the investigation is needed.' },
          { text: 'Hypothesis: A clear, testable prediction of the relationship between variables. Should be based on theory or prior evidence.' },
          { text: 'Null hypothesis (H₀): A statement that there is no difference/relationship. Statistical tests evaluate whether to reject this.' },
          { text: 'Method: Step-by-step procedure, detailed enough for another scientist to replicate. Include apparatus, materials, safety considerations.' },
          { text: 'Variables: Identify and justify the independent variable (IV—what you change), dependent variable (DV—what you measure), and all controlled variables (what you keep constant).' },
          { text: 'Risk assessment: Identify hazards (e.g. corrosive chemicals, hot equipment, biological cultures) and control measures.' },
          { text: 'Statistical test selection: Justify which test (t-test, chi-squared, correlation) will be used and why it is appropriate for your data type and research question.' },
          { text: 'Sample size justification: Explain how many replicates and why (e.g. "three biological replicates per treatment, as this allows calculation of mean and standard deviation").' },
        ],
      },
    },
    {
      id: 'h-variables',
      type: 'heading',
      data: { text: 'Defining Variables Precisely', level: 3 },
    },
    {
      id: 'p-var-1',
      type: 'paragraph',
      data: {
        text: 'Vague variable definitions lead to irreproducible results. Each variable must be operationally defined:',
      },
    },
    {
      id: 'list-variables',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Independent variable: "Temperature of enzyme reaction mixture" NOT "hot." Specify the range (e.g. 20 °C, 30 °C, 40 °C, 50 °C) and how it will be controlled (e.g. water bath, thermostatic block).' },
          { text: 'Dependent variable: "Absorbance at 540 nm after 3 minutes reaction time" NOT "enzyme activity." Include units, measurement technique, and timing.' },
          { text: 'Controlled variables: "pH of buffer solution (held at 7.0 ± 0.1)", "enzyme concentration (10 μg/ml in all reactions)", "substrate concentration (2 mmol/L)", "reaction time (180 ± 10 seconds)".' },
        ],
      },
    },
    {
      id: 'h-reliability',
      type: 'heading',
      data: { text: 'Evaluating Investigations: Reliability', level: 3 },
    },
    {
      id: 'p-reliability',
      type: 'paragraph',
      data: {
        text: 'Reliability refers to consistency — whether repeating the investigation produces similar results. A reliable experiment has low variability between repeats.',
      },
    },
    {
      id: 'list-reliability',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Evidence of reliability: multiple repeats show similar results (low standard deviation or range); data points cluster closely around the mean.' },
          { text: 'Improving reliability: increase number of repeats (3–5 independent replicates per condition); use precise equipment (calibrated thermometers, analytical balances); standardise procedures (same operator, same timing, same apparatus).' },
          { text: 'Sources of unreliability: inconsistent technique, faulty equipment, environmental variation (temperature, humidity, light).' },
        ],
      },
    },
    {
      id: 'h-validity',
      type: 'heading',
      data: { text: 'Evaluating Investigations: Validity', level: 3 },
    },
    {
      id: 'p-validity',
      type: 'paragraph',
      data: {
        text: 'Validity refers to whether the investigation actually tests what it claims to test. A valid experiment has appropriate design, correct controls, and measures the true dependent variable.',
      },
    },
    {
      id: 'list-validity',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Evidence of validity: a control group (negative control — no IV effect; positive control — known positive result) shows expected results; DV changes appropriately with IV; confounding variables are controlled.' },
          { text: 'Common validity flaws: missing negative control (cannot distinguish enzyme activity from non-enzymatic reaction), measuring wrong variable (e.g. colour instead of actual enzyme product), uncontrolled IV (temperature changes during experiment).' },
          { text: 'Improving validity: include appropriate controls (blank, negative control, positive control); randomise treatment order; use blinding (observer does not know which treatment is which).' },
        ],
      },
    },
    {
      id: 'h-reproducibility',
      type: 'heading',
      data: { text: 'Evaluating Investigations: Reproducibility', level: 3 },
    },
    {
      id: 'p-repro',
      type: 'paragraph',
      data: {
        text: 'Reproducibility (or replicability) is the ability for another scientist, in a different lab, using different apparatus, to obtain the same result. This is the gold standard of scientific evidence. A method must be described in enough detail that the exact procedure could be followed independently.',
      },
    },
    {
      id: 'h-accuracy',
      type: 'heading',
      data: { text: 'Evaluating Investigations: Accuracy and Precision', level: 3 },
    },
    {
      id: 'p-accuracy',
      type: 'paragraph',
      data: {
        text: 'Accuracy is how close a measured value is to the true value; precision is the range (spread) of repeated measurements. A measurement can be precise but inaccurate (e.g. a biased thermometer consistently reads 2 °C too high). Both are important:',
      },
    },
    {
      id: 'list-acc',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Accuracy: improved by calibrating instruments before use, using standard reference materials, and minimising systematic error.' },
          { text: 'Precision: improved by using high-resolution instruments (e.g. analytical balance to 0.0001 g, rather than top-pan to 0.1 g) and controlling environmental variation.' },
        ],
      },
    },
    {
      id: 'table-eval',
      type: 'comparisonTable',
      data: {
        headers: ['Evaluation Criterion', 'Definition', 'How to Improve'],
        rows: [
          ['Reliability', 'Consistency of results across repeats; low variability', 'Multiple repeats (≥3), standardised technique, calibrated equipment, controlled environment'],
          ['Validity', 'Does the investigation test what it claims? Appropriate controls and DV', 'Include negative, positive, and blank controls; control all confounding variables; randomise treatments'],
          ['Reproducibility', 'Can another scientist obtain the same result in a different lab?', 'Detailed method description, specify exact apparatus/reagents/concentrations, avoid ambiguous instructions'],
          ['Accuracy', 'How close to the true value?', 'Calibrate instruments, use reference standards, minimise systematic errors'],
          ['Precision', 'How tightly clustered are repeated measurements?', 'Use high-resolution instruments, control temperature/humidity, reduce human error'],
        ],
        caption: 'Criteria for evaluating the quality of biological investigations',
      },
    },
    {
      id: 'h-conclusion',
      type: 'heading',
      data: { text: 'Writing a Robust Conclusion', level: 3 },
    },
    {
      id: 'p-conclusion',
      type: 'paragraph',
      data: {
        text: 'A strong conclusion summarises findings and places results in context:',
      },
    },
    {
      id: 'list-conclusion',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'State whether the null hypothesis was rejected (p < 0.05) or accepted (p ≥ 0.05).',
          'Quantify the effect: "Enzyme activity increased by 85% from 20 °C to 40 °C" rather than "activity went up a lot."',
          'Provide biological explanation: relate results to enzyme kinetics, cellular function, evolutionary pressure, etc.',
          'Discuss limitations: what could affect the reliability or validity of the results?',
          'Suggest future directions: how could the investigation be extended or improved?',
        ],
      },
    },
    {
      id: 'callout-peel',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'PEEL Structure for Evaluation Answers',
        text: 'Use PEEL to write concise, structured evaluations of investigations:\n\nPoint: Make a single criticism or strength (e.g. "The investigation lacked a negative control.")\n\nEvidence: Quote or reference the method/data (e.g. "Only sterile water was used as blank, not a reaction mixture without enzyme.")\n\nExplain: State why this is a problem (e.g. "Without a negative control, the contribution of non-enzymatic reaction cannot be determined, affecting validity.")\n\nLink: Connect back to the evaluation criterion (e.g. "This compromises validity because the true enzyme activity may be overestimated.")\n\nExample: Point: Insufficient sample size. Evidence: Only two replicates per treatment. Explain: Small sample sizes give high standard deviation and low statistical power. Link: The study lacks reliability because variation between repeats is high.',
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example: Evaluating an Enzyme Investigation', level: 3 },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identifying Flaws and Suggesting Improvements',
        text: 'A student investigated the effect of temperature on amylase enzyme activity by incubating starch suspension with amylase at different temperatures (20, 30, 40, 50 °C) for 5 minutes, then measuring the remaining starch using iodine colour change.\n\nFlaw 1 — Invalid DV measurement: Iodine colour is qualitative and subjective.\nImprovement: Use spectrophotometry at 620 nm to quantify starch remaining (continuous, objective data).\n\nFlaw 2 — Confounded variables: The student did not control for reaction time variation; some samples were tested after 4.5 min, others after 5.5 min.\nImprovement: Use a timer to start reactions simultaneously; stop all reactions at exactly 5 min by adding HCl or heat.\n\nFlaw 3 — Missing control: No negative control (enzyme denatured by boiling) to confirm that any starch breakdown is enzymatic, not chemical.\nImprovement: Include a boiled amylase control at each temperature; starch in this tube should remain unchanged (iodine remains dark blue).\n\nSuggested improvement to method: Use three independent replicates per temperature; perform a two-way ANOVA (temperature × replicate) to account for systematic variation; increase temperature range to 10 °C intervals (10–70 °C) to better characterise the optimum.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Reliability, validity, and reproducibility are distinct concepts. An unreliable experiment has high variability but may still be valid (measuring the right thing with the wrong precision). An invalid experiment might be reliable if the same mistake is repeated consistently. Reproducibility requires both reliability and validity, plus detailed methodology. Understanding these distinctions prevents conflating improvements.',
        apply: 'Design an experiment to investigate whether ethanol concentration affects the permeability of cell membranes (using onion epidermal cells and plasmolysis). Define IV, DV, three controlled variables, and justify your choice of statistical test.',
        analyze: 'An investigation found that enzyme activity increased from 20 to 40 °C but data scattered widely (SD ≈ 20% of mean). Compare whether this result is "reliable" vs "valid" vs "reproducible", and explain what each term means.',
        evaluate: 'A researcher publishes an investigation showing a strong correlation (r = 0.92, p < 0.001) between dietary salt intake and blood pressure, based on a single measurement per person. Critique the claim that "salt causes high blood pressure" using concepts of causation, confounding, and study design.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write a clear hypothesis and null hypothesis based on background research.', checked: false },
          { text: 'I can define independent, dependent, and controlled variables operationally.', checked: false },
          { text: 'I can select appropriate controls (negative, positive, blank) for an investigation.', checked: false },
          { text: 'I understand the distinction between reliability, validity, reproducibility, accuracy, and precision.', checked: false },
          { text: 'I can identify at least three flaws in a student investigation and suggest specific improvements using the PEEL structure.', checked: false },
          { text: 'I can justify why a particular statistical test is suitable for an investigation.', checked: false },
          { text: 'I can write a conclusion that states whether H₀ was rejected, quantifies the effect, and provides biological explanation.', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'A robust investigation plan includes background research, hypothesis, null hypothesis, detailed method, variable definitions, risk assessment, statistical test justification, and sample size rationale. Evaluation criteria include: reliability (consistency across repeats), validity (appropriate controls and DV), reproducibility (detailed method for independent replication), accuracy (closeness to true value), and precision (low variability). Use PEEL structure to evaluate investigations: Point, Evidence, Explain, Link. A strong conclusion rejects or accepts H₀, quantifies effects, provides biological explanation, discusses limitations, and suggests improvements.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-planning',
        prompt: 'List the eight key components that must be included in a comprehensive investigation plan.',
      },
      {
        id: 'cue-2',
        blockId: 'h-variables',
        prompt: 'What is an operational definition of a variable? Give an example for temperature in an enzyme investigation.',
      },
      {
        id: 'cue-3',
        blockId: 'table-eval',
        prompt: 'Define reliability and validity. Can an investigation be valid but unreliable, and vice versa?',
      },
      {
        id: 'cue-4',
        blockId: 'callout-peel',
        prompt: 'Explain the PEEL structure and use it to evaluate: "The investigation used only two replicates."',
      },
      {
        id: 'cue-5',
        blockId: 'h-conclusion',
        prompt: 'List five elements that must be included in a strong investigation conclusion.',
      },
      {
        id: 'cue-6',
        blockId: 'h-worked',
        prompt: 'Identify one validity flaw and one reliability flaw in a qualitative starch measurement, and suggest improvements.',
      },
    ],
    summaryText: 'Plan investigations with clear hypothesis, controlled variables, appropriate controls, and justified statistical tests. Evaluate using five criteria: reliability (consistency), validity (measures what intended), reproducibility (detailed method), accuracy (true value), precision (tight clustering). Use PEEL structure: Point-Evidence-Explain-Link. Conclusions must state whether H₀ rejected, quantify effects, explain biology, discuss limitations, and suggest improvements.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Scientific Method and Experimental Design',
      detail: 'Popper (1959) formalised hypothesis-deductive approach: hypothesis → prediction → test → falsification or confirmation.',
      year: '1959',
      source: 'The Logic of Scientific Discovery',
      tags: ['methodology', 'hypothesis-testing'],
    },
    {
      id: 'ev-2',
      title: 'Reliability and Validity in Social Science Research',
      detail: 'Campbell & Stanley (1966) defined internal validity (causation), external validity (generalisation), and reliability (consistency).',
      year: '1966',
      source: 'Experimental and Quasi-Experimental Designs for Research',
      tags: ['research-design', 'evaluation'],
    },
    {
      id: 'ev-3',
      title: 'Reproducibility Crisis in Science',
      detail: 'Recent meta-analyses show <50% of psychology and medicine studies replicate, highlighting importance of detailed methodology and sample size.',
      year: '2015–2020',
      source: 'Nature, Science',
      tags: ['reproducibility', 'scientific-integrity'],
    },
  ],
};
