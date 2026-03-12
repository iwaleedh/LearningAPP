export const note_biology_1_1_12 = {
  blocks: [
    {
      id: 'obj-vitamin-c',
      type: 'objective',
      data: {
        text: 'Understand the DCPIP titration method for quantifying vitamin C, and apply it to analyse vitamin C content in food samples.'
      }
    },
    {
      id: 'h-vitamin-c-overview',
      type: 'heading',
      data: {
        text: 'Vitamin C and DCPIP',
        level: 2
      }
    },
    {
      id: 'p-vitamin-c-structure',
      type: 'paragraph',
      data: {
        text: 'Vitamin C (ascorbic acid, C₆H₈O₆) is a water-soluble antioxidant essential for collagen synthesis, iron absorption, and immune function. Humans cannot synthesise vitamin C and must obtain it from dietary sources: citrus fruits (orange, lemon), berries (strawberry, kiwi), peppers, and leafy greens (broccoli, kale). Vitamin C deficiency causes scurvy, characterised by weak collagen, bleeding gums, and poor wound healing. The adult recommended dietary intake is 45 mg/day; smokers require 125 mg/day due to increased oxidative stress. Vitamin C is easily oxidised by heat, light, and oxygen, so storage and cooking affect vitamin C content. Fresh citrus fruit contains ~50–100 mg/100g; commercial juice may have less if oxidised.'
      }
    },
    {
      id: 'p-dcpip',
      type: 'paragraph',
      data: {
        text: 'DCPIP (2,6-dichlorophenolindophenol) is a blue dye that acts as an oxidising agent. In its oxidised form (which is blue), DCPIP accepts electrons from reducing agents, including vitamin C. When reduced by vitamin C, DCPIP changes from blue to colourless. The reaction is: vitamin C + DCPIP (blue) → dehydroascorbic acid + DCPIP (colourless). The colour change is sharp and easily observed: the solution changes from blue to colourless when all DCPIP has been reduced. DCPIP is therefore used as an indicator in a titration: vitamin C solution is titrated against a standard DCPIP solution until the blue colour just disappears, indicating complete reaction.'
      }
    },
    {
      id: 'callout-warning-dcpip-risk',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Risk Assessment: DCPIP Solution',
        text: 'DCPIP is an irritant.\n• Wear safety goggles at ALL times during this practical\n• Avoid skin contact with DCPIP — rinse with water immediately if contact occurs\n• Do not pipette by mouth\n• Dispose of DCPIP solution appropriately (dilute before disposal down the sink)'
      }
    },
    {
      id: 'h-cp2-edexcel-method',
      type: 'heading',
      data: { text: 'Edexcel Core Practical 2: Drop Method', level: 2 }
    },
    {
      id: 'p-cp2-overview',
      type: 'paragraph',
      data: {
        text: 'The Edexcel Core Practical 2 uses a simple drop method rather than a formal burette titration. A fixed volume of DCPIP (1 cm³) is placed in a test tube and vitamin C solution is added drop by drop using a plastic syringe or graduated pipette. The volume of vitamin C required to decolourise the DCPIP is recorded. Higher concentration solutions require a smaller volume — the calibration curve therefore shows an inverse (negative) relationship between vitamin C concentration and volume required.'
      }
    },
    {
      id: 'list-cp2-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Prepare a stock vitamin C solution (e.g. 1 mg cm⁻³) and make serial dilutions to give a range of known concentrations (e.g. 0.25, 0.5, 0.75, 1.0 mg cm⁻³)',
          'Pipette exactly 1 cm³ of 1% DCPIP solution into a test tube for each concentration tested',
          'Using a plastic syringe or graduated pipette, add the first vitamin C concentration drop by drop to the DCPIP, swirling gently after each drop',
          'Record the total volume (cm³) of vitamin C solution added when the DCPIP turns from blue to colourless (the endpoint)',
          'Repeat steps 2–4 for each vitamin C concentration; repeat each at least three times, discard anomalies, and calculate the mean volume',
          'Test unknown samples (e.g. fresh orange juice, commercial juice) using the same method; read their vitamin C concentration from the calibration curve',
          'Plot a calibration curve: vitamin C concentration (x-axis) vs. volume to decolourise (y-axis) — expect a negative gradient (inverse relationship)'
        ]
      }
    },
    {
      id: 'callout-tip-inverse-curve',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Understanding the Inverse Calibration Curve',
        text: 'HIGHER concentration → SMALLER volume needed to decolourise the same amount of DCPIP (more vitamin C molecules per cm³ → fewer drops required to reduce all the DCPIP). The calibration curve has a NEGATIVE gradient. To use it for an unknown sample: find the volume for your sample on the y-axis, read across to the curve, then read down to the x-axis to get the concentration.'
      }
    },
    {
      id: 'callout-tip-controls-cp2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Control Variables in Core Practical 2',
        text: 'To ensure fair and reliable results:\n• Same volume of DCPIP (1 cm³) for every trial\n• Same drop size — use the same syringe throughout and maintain a consistent drop rate\n• Same temperature — vitamin C oxidises faster at higher temperatures\n• Swirl consistently after each drop\n• Work quickly — vitamin C in solution oxidises when exposed to air, reducing effective concentration over time\n• Use freshly prepared DCPIP — DCPIP itself can be reduced (bleached) by light or air, giving inaccurate results'
      }
    },
    {
      id: 'h-dcpip-titration',
      type: 'heading',
      data: {
        text: 'DCPIP Titration Procedure',
        level: 2
      }
    },
    {
      id: 'p-titration-procedure',
      type: 'paragraph',
      data: {
        text: 'Equipment: burette (for vitamin C solution), conical flask, pipette, DCPIP solution (standard concentration, e.g. 0.5 mg/mL or equivalent). Procedure: (1) Pipette a fixed volume of standard DCPIP solution (typically 25 mL) into a conical flask. (2) Record the initial burette reading of the vitamin C solution. (3) Slowly add vitamin C solution from the burette into the flask, swirling constantly. (4) Stop when the blue colour just disappears (endpoint). Record the final burette reading. (5) Calculate volume added: final reading − initial reading. (6) Repeat at least three times until concordant readings are obtained (within 0.1 mL of each other). Average the concordant volumes. (7) Calculate moles of vitamin C using: moles = concentration × volume (in litres). (8) Determine vitamin C content in the original food sample.'
      }
    },
    {
      id: 'p-calibration-curve',
      type: 'paragraph',
      data: {
        text: 'A calibration curve is prepared to relate DCPIP volume used to vitamin C concentration. Pure vitamin C solutions of known concentrations (e.g. 0.1, 0.2, 0.3, 0.4, 0.5 mg/mL) are each titrated against the standard DCPIP solution. The volume of vitamin C required to decolorise DCPIP is plotted against vitamin C concentration. The resulting graph is linear; using the equation, unknown vitamin C concentrations can be calculated from their titration volumes. This is more accurate than using a single standard, as it accounts for variations in DCPIP concentration and technique.'
      }
    },
    {
      id: 'eq-vitamin-c-calc',
      type: 'equation',
      data: {
        html: 'Moles of vitamin C = Concentration (mol/L) × Volume (L)<br/>Mass of vitamin C = Moles × Molar mass (M = 176 g/mol)<br/>Concentration in sample = (Mass of vitamin C / Mass of sample) × 100%',
        caption: 'Calculating vitamin C content'
      }
    },
    {
      id: 'h-sample-analysis',
      type: 'heading',
      data: {
        text: 'Analysing Food Samples',
        level: 2
      }
    },
    {
      id: 'p-sample-prep',
      type: 'paragraph',
      data: {
        text: 'Fruit and vegetable samples are prepared by homogenisation (blending or grinding) to ensure uniform distribution of vitamin C. A known mass (typically 10–25g) is weighed and mixed with distilled water to create a homogeneous extract. This extract is filtered or centrifuged to remove solid debris, producing a solution to be titrated. Some samples (citrus juice, tomato juice) can be titrated directly without extensive preparation. Commercial juices should be tested fresh and in parallel with freshly extracted juice to demonstrate oxidation effects. Frozen fruit (if thawed) or canned fruit are useful for showing how processing and storage reduce vitamin C content.'
      }
    },
    {
      id: 'p-sample-results',
      type: 'paragraph',
      data: {
        text: 'Typical results: orange juice (fresh) contains ~50–100 mg vitamin C per 100 mL; lemon juice ~30–50 mg/100mL; strawberries ~50–100 mg/100g; bell pepper ~100–150 mg/100g (very high, often ignored in favour of fruits). Processed or stored samples contain much less: pasteurised commercial juice ~5–30 mg/100mL; canned fruit ~5–20 mg/100g; frozen berries (if thawed) ~20–50 mg/100g. Variation between seasons and cultivars is significant. Results are presented as mg per 100 mL (beverages) or mg per 100 g (solids), allowing comparison of vitamin C content across samples and to dietary recommendations.'
      }
    },
    {
      id: 'h-sources-of-error',
      type: 'heading',
      data: {
        text: 'Sources of Error and Improvements',
        level: 2
      }
    },
    {
      id: 'p-errors',
      type: 'paragraph',
      data: {
        text: 'Systematic errors: DCPIP concentration may drift if exposed to light or air (DCPIP is oxidised); use a freshly prepared solution. Burette readings are subject to parallax error; always read at eye level, at the bottom of the meniscus. Vitamin C is oxidised if samples are left exposed to air; work quickly or purge samples with nitrogen. Sample heterogeneity: fruit/vegetable tissues vary in vitamin C concentration; multiple replicates are needed. Temperature affects reaction kinetics; carry out titrations at room temperature consistently. Time delays between sample preparation and titration can result in vitamin C loss; analyse samples as soon as possible.'
      }
    },
    {
      id: 'p-improvements',
      type: 'paragraph',
      data: {
        text: 'To improve accuracy: (1) Use a pH buffer (e.g. phosphate buffer, pH 7) to standardise sample pH, as vitamin C oxidation rate is pH-dependent. (2) Add anti-oxidants (e.g. metaphosphoric acid) to the sample immediately after extraction to prevent oxidation during analysis. (3) Repeat titrations (minimum three) until concordant readings are obtained; average only concordant values. (4) Use a burette with fine graduations (0.05 mL) for greater precision. (5) Include positive and negative controls: a pure vitamin C standard (should give a calculated result close to its known concentration) and a blank (distilled water, should require zero volume of DCPIP). (6) Prepare a calibration curve using pure vitamin C standards at several concentrations, rather than relying on a single standard.'
      }
    },
    {
      id: 'table-sources-error',
      type: 'comparisonTable',
      data: {
        headers: ['Error Type', 'Cause', 'Effect on Result', 'Minimisation'],
        rows: [
          ['DCPIP oxidation', 'Exposed to light/air', 'Overestimate vitamin C (less DCPIP needed to decolour)', 'Fresh solution; light-protected bottle'],
          ['Sample oxidation', 'Delay between prep and titration', 'Underestimate vitamin C (oxidised to dehydroascorbic acid)', 'Analyse immediately; use anti-oxidants'],
          ['Parallax error', 'Burette reading not at eye level', 'Systematic bias (under- or over-estimation)', 'Always read at eye level, meniscus bottom'],
          ['Sample heterogeneity', 'Non-uniform vitamin C distribution', 'High variability between replicates', 'Homogenise thoroughly; multiple replicates'],
          ['pH variation', 'Different sample pH', 'Affects oxidation kinetics; inconsistent results', 'Use pH buffer; standardise sample pH']
        ],
        caption: 'Common sources of error in DCPIP titration'
      }
    },
    {
      id: 'h-interpretation',
      type: 'heading',
      data: {
        text: 'Interpreting Results and Drawing Conclusions',
        level: 2
      }
    },
    {
      id: 'p-interpretation',
      type: 'paragraph',
      data: {
        text: 'Results should be presented clearly: vitamin C content in mg per 100 mL (juice) or mg per 100 g (fruit), with standard deviations from repeated measurements. Graphs comparing vitamin C across samples (fresh vs canned, citrus types, storage conditions) aid visualisation. Conclusions should relate findings to hypotheses: Does fresh orange juice have more vitamin C than commercial juice? (Expected: yes, if commercial juice is pasteurised.) Does vitamin C content vary between citrus fruits? (Expected: yes, lemons lower than oranges.) Does freezing reduce vitamin C? (Expected: minimal loss if frozen promptly; thawing may increase loss.) Discussion should address error sources, limitations of the method, and biological significance: vitamin C deficiency is rare in developed countries but remains significant in populations with limited access to fresh produce.'
      }
    },
    {
      id: 'callout-worked-titration',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example DCPIP Titration Calculation',
        text: 'Burette readings: Initial = 0.5 mL, Final = 24.3 mL. Volume of vitamin C used = 23.8 mL = 0.0238 L. Concentration of DCPIP standard = 0.5 mg/mL. Assuming 1:1 molar ratio (vitamin C : DCPIP), calculate vitamin C concentration. Use calibration curve: 23.8 mL → 0.120 mg/mL vitamin C. Sample (10g citrus extract): contains 0.120 × 25 mL = 3.0 mg vitamin C. Content = 3.0 mg / 10g = 30 mg per 100g. Repeat ≥2 more times; if results concordant (within ±0.1 mL), average and report.'
      }
    },
    {
      id: 'callout-tip-endpoint',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Identifying the Endpoint',
        text: 'The endpoint is when the blue colour JUST disappears. Not faint blue—completely colourless. Add DCPIP dropwise near the end; with each drop, swirl the flask. Stop immediately when the blue completely vanishes. If you overshoot, the entire sample is overoxidised and the titration fails. With practice, you\'ll nail it!'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Vitamin C (ascorbic acid) decolourises DCPIP because it is a strong reducing agent. Vitamin C donates electrons to the DCPIP molecule, reducing the blue oxidised form (which contains an unpaired electron system) to the colourless reduced form. This is a classic redox reaction in which vitamin C is oxidised to dehydroascorbic acid while DCPIP is reduced.',
        apply: 'A student uses 12.5 cm³ of juice to decolourise 1 cm³ of 0.1% DCPIP. A standard solution of 1 mg/cm³ vitamin C requires 6.25 cm³ to decolourise the same volume of DCPIP. Calculate the vitamin C concentration in the juice in mg/cm³.',
        analyze: 'Compare the DCPIP titration method with the iodine titration method for determining vitamin C. Consider accuracy, ease of use, interferences, and suitability for school laboratories.',
        evaluate: 'Evaluate sources of error in the DCPIP vitamin C assay. Which is the largest source of error — preparation of DCPIP solution, judgment of endpoint, or oxidation of vitamin C during storage — and how would you minimise it?'
      },
      terms: []
    },
    {
      id: 'checklist-vitamin-c',
      type: 'checklist',
      data: {
        items: [
          { text: 'Vitamin C (reducing agent) decolourises blue DCPIP (oxidising agent) to colourless — vitamin C → dehydroascorbic acid', checked: false },
          { text: 'Edexcel CP2 drop method: serial dilutions → add drops to 1 cm³ DCPIP → record volume to decolourise → repeat ≥3 times → plot calibration curve', checked: false },
          { text: 'Calibration curve: INVERSE relationship — higher [vitamin C] → smaller volume needed to decolourise DCPIP (negative gradient)', checked: false },
          { text: 'DCPIP is an IRRITANT — always wear safety goggles; avoid skin contact; rinse with water immediately if contact occurs', checked: false },
          { text: 'Control variables: same DCPIP volume (1 cm³), same drop rate, same temperature, freshly prepared reagents, work quickly to prevent vitamin C oxidation', checked: false },
          { text: 'Sources of error: DCPIP oxidation (use fresh, protect from light), sample oxidation (analyse quickly), variation in drop size', checked: false }
        ]
      }
    },
    {
      id: 'summary-vitamin-c',
      type: 'summary',
      data: {
        text: 'Vitamin C is quantified by DCPIP titration: vitamin C reduces blue DCPIP to colourless, and the volume used indicates vitamin C concentration. A calibration curve is prepared using pure vitamin C standards. Food samples are analysed by homogenisation and titration. Results show vitamin C content varies: fresh citrus and peppers high (~50–150 mg/100g), commercial juice and canned fruit low (~5–30 mg/100g). Sources of error include DCPIP and sample oxidation, parallax error, and heterogeneity. Improvements: fresh reagents, immediate analysis, pH buffering, multiple replicates, concordant readings.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-vitamin-c-structure',
        prompt: 'What is vitamin C? Why is it important and where do we obtain it?'
      },
      {
        id: 'cue-2',
        blockId: 'p-dcpip',
        prompt: 'How does DCPIP detect vitamin C? What colour change indicates complete reaction?'
      },
      {
        id: 'cue-3',
        blockId: 'p-titration-procedure',
        prompt: 'Describe the DCPIP titration procedure. What marks the endpoint?'
      },
      {
        id: 'cue-4',
        blockId: 'p-sample-results',
        prompt: 'What are typical vitamin C contents of fresh vs processed food? Quantify with examples.'
      },
      {
        id: 'cue-5',
        blockId: 'p-errors',
        prompt: 'List three sources of error in DCPIP titration and how to minimise them.'
      }
    ],
    summaryText: 'Vitamin C (ascorbic acid) reduces blue DCPIP dye to colourless. Titration: pipette DCPIP into flask, add vitamin C from burette until colour disappears (endpoint). Volume = vitamin C concentration. Calibration curve from pure standards. Samples (fresh citrus, berries, peppers) analysed by homogenisation. Results: fresh fruit 50–150 mg/100g; commercial juice 5–30 mg/100mL. Errors: DCPIP/sample oxidation, parallax, heterogeneity. Improve: fresh reagents, quick analysis, pH buffer, concordant replicates.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 2: Vitamin C Analysis by DCPIP Titration',
      detail: 'Protocol and principles for quantifying vitamin C in food samples using redox titration.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['practical', 'dcpip', 'vitamin-c', 'titration', 'redox', 'food-analysis']
    }
  ]
};
