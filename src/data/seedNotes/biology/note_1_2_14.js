export const note_biology_1_2_14 = {
  blocks: [
    {
      id: 'obj-enzyme-practical',
      type: 'objective',
      data: {
        text: 'Understand factors affecting enzyme rate, design experiments to measure enzyme activity, and analyse kinetic data.'
      }
    },
    {
      id: 'h-enzyme-assays',
      type: 'heading',
      data: {
        text: 'Enzyme Activity Assays',
        level: 2
      }
    },
    {
      id: 'p-enzyme-assay-principle',
      type: 'paragraph',
      data: {
        text: 'An enzyme assay measures the rate at which an enzyme converts substrate to product. Enzyme activity is quantified as the amount of product formed per unit time (e.g. μmol/min) or the amount of substrate consumed per unit time. Assays can be continuous (measure product formation or substrate depletion in real time) or discontinuous (sample at intervals, stop reaction, measure product/substrate). Enzyme rate depends on several factors: substrate concentration, enzyme concentration, temperature, pH, and presence of inhibitors. To understand enzyme kinetics, we design experiments varying one factor while holding others constant, then measure rate.'
      }
    },
    {
      id: 'h-substrate-concentration',
      type: 'heading',
      data: {
        text: 'Effect of Substrate Concentration',
        level: 2
      }
    },
    {
      id: 'p-substrate-conc-expt',
      type: 'paragraph',
      data: {
        text: 'Experiment: measure enzyme rate at various substrate concentrations (e.g. 0.1, 0.5, 1.0, 2.0, 5.0, 10.0 mM), keeping enzyme concentration and temperature constant. Enzyme: catalase (decomposes H₂O₂ to H₂O + O₂). Substrate: H₂O₂ at different concentrations. Method: (1) Add a fixed volume of enzyme solution to a cuvette. (2) Add substrate at a known concentration. (3) Immediately start a timer and measure product (O₂ gas volume, or H₂O₂ disappearance by absorbance change) at short intervals (every 10–30 seconds for the first 2–3 minutes). (4) Plot product vs time; the initial linear slope is the initial rate (v₀). (5) Repeat with different substrate concentrations. (6) Plot initial rate (y-axis) vs substrate concentration (x-axis). Results: hyperbolic curve (Michaelis-Menten kinetics) showing rate increases at low [S], then plateaus as enzyme saturates.'
      }
    },
    {
      id: 'h-temperature-effect',
      type: 'heading',
      data: {
        text: 'Effect of Temperature on Enzyme Rate',
        level: 2
      }
    },
    {
      id: 'p-temperature-expt',
      type: 'paragraph',
      data: {
        text: 'Experiment: measure enzyme rate at various temperatures (e.g. 10°C, 20°C, 30°C, 37°C, 45°C, 55°C), keeping substrate and enzyme concentration constant. Enzyme: trypsin (protease). Substrate: milk protein (casein). Method: (1) Prepare water baths at each temperature. (2) Equilibrate enzyme and substrate solutions to each temperature. (3) Mix enzyme + substrate; measure time to clear turbidity (as protease digests casein, solution clears). Record time-to-clear (inverse of rate: shorter time = faster rate). (4) Calculate rate as 1/time (proportional to enzyme activity). (5) Plot rate (y-axis) vs temperature (x-axis). Results: bell-shaped curve with optimal activity around 37°C (body temperature). Below 37°C, rate increases linearly (Q10 ≈ 2, doubling per 10°C). Above 37°C, rate decreases as enzyme denatures.'
      }
    },
    {
      id: 'h-ph-effect',
      type: 'heading',
      data: {
        text: 'Effect of pH on Enzyme Rate',
        level: 2
      }
    },
    {
      id: 'p-ph-expt',
      type: 'paragraph',
      data: {
        text: 'Experiment: measure enzyme rate at various pH values (e.g. 3, 4, 5, 6, 7, 8, 9), keeping substrate concentration, enzyme concentration, and temperature constant. Enzyme: pepsin (optimum pH ~2, gastric protease) or amylase (optimum pH ~7). Method: (1) Prepare buffer solutions at each pH (e.g. acetate buffer for pH 3–5, phosphate for pH 6–8, carbonate for pH 9–10). (2) Incubate enzyme in buffer at each pH for a short time (to allow ionisation equilibration). (3) Add substrate; measure product formation (colour change, turbidity reduction, or absorbance). (4) Calculate rate. (5) Plot rate (y-axis) vs pH (x-axis). Results: bell-shaped curve (usually) with sharp peak at optimal pH. Away from optimum, rate drops steeply, reflecting enzyme denaturation and loss of active site ionisation.'
      }
    },
    {
      id: 'h-enzyme-concentration',
      type: 'heading',
      data: {
        text: 'Effect of Enzyme Concentration',
        level: 2
      }
    },
    {
      id: 'p-enzyme-conc-expt',
      type: 'paragraph',
      data: {
        text: 'Experiment: measure enzyme rate at various enzyme concentrations (e.g. 1×, 2×, 3×, 5×, 10× dilutions of stock enzyme), keeping substrate concentration, temperature, and pH constant. Enzyme: lactase (hydrolyses lactose). Substrate: lactose. Method: (1) Prepare enzyme dilutions (serial dilutions of stock solution). (2) Add a fixed volume of each enzyme dilution to substrate. (3) Measure product (glucose + galactose) by colorimetric assay (e.g. reducing sugar test with absorbance). (4) Calculate rate. (5) Plot rate (y-axis) vs enzyme concentration (x-axis). Results: linear relationship (at constant substrate): doubling enzyme concentration doubles rate (provided substrate is not limiting). This confirms the enzyme is the limiting factor.'
      }
    },
    {
      id: 'table-enzyme-experiments',
      type: 'comparisonTable',
      data: {
        headers: ['Variable', 'Method', 'Graph Pattern', 'Interpretation'],
        rows: [
          ['Substrate [S]', 'Vary [S], measure initial rate', 'Hyperbolic (Michaelis-Menten)', 'Low [S]: rate ∝ [S]; high [S]: rate = Vmax (saturation)'],
          ['Temperature', 'Vary temp, measure rate', 'Bell-shaped, peak ~37°C', 'Optimal temp; above: denaturation; Q10 ≈ 2 below optimum'],
          ['pH', 'Vary pH (buffers), measure rate', 'Bell-shaped, peak varies by enzyme', 'Optimal pH; outside: ionisation change, denaturation'],
          ['Enzyme conc. [E]', 'Vary [E], keep [S] constant', 'Linear (at constant [S])', 'Rate ∝ [E]; if [S] is not limiting'],
          ['Inhibitor', 'Add inhibitor, measure rate', 'Competitive: ↑Km, Vmax same; Non-comp: ↓Vmax, Km same', 'Type depends on curve change']
        ],
        caption: 'Enzyme experiments: variables, methods, and expected patterns'
      }
    },
    {
      id: 'h-rate-measurement',
      type: 'heading',
      data: {
        text: 'Measuring Enzyme Rate',
        level: 2
      }
    },
    {
      id: 'p-rate-methods',
      type: 'paragraph',
      data: {
        text: 'Enzyme rate can be measured by several methods: (1) Time taken for a colour change: e.g. time for starch-iodine colour to disappear (amylase breaking starch). Record time; rate = 1/time. Quick but less precise. (2) Initial linear slope (Michaelis-Menten): plot product or substrate vs time; measure the slope of the linear portion (first 1–2 minutes). More accurate because it captures initial rate before product inhibition occurs. (3) Continuous spectrophotometry: measure absorbance (colour intensity) continuously as reaction proceeds; calculate rate from the slope of absorbance vs time. Very accurate; requires spectrophotometer. (4) Biochemical assays: e.g. reducing sugar test (Benedict\'s) on samples removed at intervals; measure absorbance of coloured product (brick-red Cu₂O). More labour-intensive but gives discrete data points. (5) Gas volume: for reactions producing gas (catalase: H₂O₂ → O₂), measure O₂ volume produced per minute using a gas syringe or collection tube. Each method has trade-offs between accuracy, speed, and equipment required.'
      }
    },
    {
      id: 'h-data-analysis',
      type: 'heading',
      data: {
        text: 'Data Analysis and Graphing',
        level: 2
      }
    },
    {
      id: 'p-data-analysis',
      type: 'paragraph',
      data: {
        text: 'After collecting data, graph results: (1) X-axis: independent variable (substrate concentration, temperature, pH, or enzyme concentration). (2) Y-axis: enzyme rate (product per minute, absorbance per minute, or time-to-event). (3) Plot data points with error bars (if multiple replicates). (4) Draw a curve fitting the data (not just connecting dots)—use trend lines in Excel or manually. (5) Identify patterns: linear, hyperbolic, bell-shaped, sigmoidal. (6) Determine key values: Vmax (y-intercept or saturation level), Km (substrate concentration at rate = Vmax/2), optimal temperature/pH, Q10 if applicable. (7) Compare to theoretical expectations. Deviations may indicate errors, inhibitors, or unusual enzyme behaviour. Always include error analysis: calculate mean and standard deviation (SD) for replicates; plot SD as error bars. If SD is large, precision is poor; repeat measurements or troubleshoot sources of error.'
      }
    },
    {
      id: 'h-sources-of-error',
      type: 'heading',
      data: {
        text: 'Sources of Error in Enzyme Experiments',
        level: 2
      }
    },
    {
      id: 'p-errors-enzyme',
      type: 'paragraph',
      data: {
        text: 'Common errors: (1) Temperature variation: enzymes are temperature-sensitive; small fluctuations cause large rate changes. Improvement: use precise thermostats, thermometers, or temperature probes. (2) Substrate depletion: if reaction proceeds too long, substrate may become limiting, slowing observed rate. Improvement: measure only initial rate (first 10–20% of total substrate consumed). (3) Product inhibition: in some enzymes, accumulated product inhibits activity. Improvement: short time courses, remove product if possible. (4) pH drift: pH buffers maintain pH, but buffers can drift; unbuffered solutions drift rapidly. Improvement: use high-concentration buffers, verify pH before reaction. (5) Enzyme inactivation: enzymes may lose activity over time (storage degradation, oxidation). Improvement: use fresh enzyme solutions, store at 4°C, minimise air exposure. (6) Incomplete equilibration: enzyme, substrate, and reaction vessel may not be at the same temperature initially. Improvement: pre-equilibrate all components in water bath. (7) Measurement error: spectrophotometer, timer, volume pipettes may introduce error. Improvement: calibrate instruments, use high-precision equipment, make multiple measurements.'
      }
    },
    {
      id: 'callout-worked-kinetics',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example Enzyme Rate Calculation',
        text: 'Substrate concentration experiment: at [S]=1 mM, product formed = 5 μmol in 30 seconds. Rate = 5 μmol / 0.5 min = 10 μmol/min. At [S]=5 mM, product = 18 μmol in 30 sec. Rate = 18 / 0.5 = 36 μmol/min. At [S]=20 mM, product = 40 μmol in 30 sec. Rate = 40 / 0.5 = 80 μmol/min. At [S]=50 mM, product = 82 μmol in 30 sec. Rate = 82 / 0.5 = 164 μmol/min (only 2× increase vs 2.5× [S] increase = approaching Vmax). Plot rates vs [S]; estimate Vmax (asymptote) and Km ([S] at half Vmax).'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does enzyme activity increase with temperature up to the optimum and then decrease sharply? Explain the dual effect: below optimum, increasing temperature raises kinetic energy → more successful enzyme-substrate collisions per second; above optimum, heat breaks non-covalent bonds maintaining active site shape → denaturation.',
        apply: 'A student measures trypsin activity (rate of casein digestion) at pH 6, 7, 8, 9, 10. Activity peaks at pH 8. If the student then repeats at pH 8 using trypsin concentrations of 0.1, 0.2, 0.4, 0.8 g/L while keeping substrate constant, predict and explain the shape of the rate vs enzyme concentration graph.',
        analyze: 'Compare the use of trypsin/casein and catalase/hydrogen peroxide as model systems for studying enzyme kinetics. Consider the advantages and limitations of each in measuring initial rate, controlling variables, and demonstrating Michaelis-Menten kinetics.',
        evaluate: 'Evaluate whether measuring the time for the milk to clear (with trypsin) is a valid method for calculating initial rate of reaction. What assumptions does this method make, and how could continuous measurement using a colorimeter improve the investigation?',
      },
      terms: [],
    },
    {
      id: 'checklist-enzyme-exp',
      type: 'checklist',
      data: {
        items: [
          { text: 'Enzyme rate measured by product formation or substrate consumption per unit time', checked: false },
          { text: 'Substrate effect: hyperbolic curve (Michaelis-Menten); rate increases, then plateaus', checked: false },
          { text: 'Temperature effect: bell-shaped curve; optimal ~37°C; Q10 ≈ 2 below optimum', checked: false },
          { text: 'pH effect: bell-shaped; peak varies by enzyme; ionisation and denaturation affect rate', checked: false },
          { text: 'Enzyme concentration: linear effect (rate ∝ [E]) when substrate not limiting', checked: false }
        ]
      }
    },
    {
      id: 'summary-enzyme-exp',
      type: 'summary',
      data: {
        text: 'Enzyme activity assays measure rate of product formation or substrate depletion. Substrate concentration: hyperbolic curve (Michaelis-Menten kinetics; Vmax and Km determined). Temperature: bell-shaped (optimal ~37°C; Q10 ≈ 2 below optimum; denaturation above). pH: bell-shaped (optimum varies by enzyme; ionisation and denaturation effects). Enzyme concentration: linear rate increase (if substrate not limiting). Rate measurement methods: time-to-colour change, initial slope, continuous spectrophotometry, biochemical assays. Data graphed; error bars included. Sources of error: temperature variation, substrate depletion, product inhibition, pH drift, enzyme inactivation, incomplete equilibration, measurement error.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-enzyme-assay-principle',
        prompt: 'What is an enzyme assay and what does it measure?'
      },
      {
        id: 'cue-2',
        blockId: 'p-substrate-conc-expt',
        prompt: 'Describe an experiment to investigate the effect of substrate concentration on enzyme rate.'
      },
      {
        id: 'cue-3',
        blockId: 'p-temperature-expt',
        prompt: 'Describe an experiment to investigate the effect of temperature on enzyme rate. What pattern is expected?'
      },
      {
        id: 'cue-4',
        blockId: 'p-rate-methods',
        prompt: 'List five methods for measuring enzyme rate. What are the advantages and disadvantages?'
      },
      {
        id: 'cue-5',
        blockId: 'p-errors-enzyme',
        prompt: 'List five sources of error in enzyme experiments and how to minimise each.'
      }
    ],
    summaryText: 'Enzyme assay measures rate of product/substrate change per unit time. Substrate effect: vary [S], measure initial rate, plot hyperbolic Michaelis-Menten curve; low [S] rate ∝ [S], high [S] approaches Vmax. Temperature: bell-shaped, optimum ~37°C, Q10 ~2 below optimum, denatures above. pH: bell-shaped, varies by enzyme, ionisation + denaturation effects. Enzyme conc: linear rate increase (at constant non-limiting [S]). Methods: time-to-colour, initial slope, spectrophotometry, biochemical assay, gas volume. Graph with error bars. Errors: temperature variation, substrate depletion, product inhibition, pH drift, enzyme loss, incomplete equilibration, measurement error.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 4: Enzyme Rate Factors',
      detail: 'Investigation of factors affecting enzyme rate including substrate concentration, temperature, pH, and enzyme concentration.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['practical', 'enzyme-kinetics', 'substrate-concentration', 'temperature', 'ph', 'enzyme-concentration', 'rate-measurement']
    }
  ]
};
