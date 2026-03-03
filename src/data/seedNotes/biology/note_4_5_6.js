export const note_biology_4_5_6 = {
  blocks: [
    {
      id: 'obj-practical10',
      type: 'objective',
      data: {
        text: 'Understand Core Practical 10: investigating the effect of light intensity on photosynthetic rate using aquatic plants, including the inverse square law, bubble counting methods, sources of error, and improvements.',
      },
    },
    {
      id: 'h-practical-overview',
      type: 'heading',
      data: {
        text: 'Core Practical 10: Light Intensity and Photosynthesis',
        level: 2,
      },
    },
    {
      id: 'p-practical-intro',
      type: 'paragraph',
      data: {
        text: 'Core Practical 10 investigates the effect of light intensity on the rate of photosynthesis using freshwater aquatic plants such as Elodea (waterweed) or Cabomba. The experimental design measures oxygen production (an indicator of photosynthetic rate) at different light intensities. This practical illustrates how photosynthetic rate depends on light availability and demonstrates the inverse square law of light.',
      },
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: {
        text: 'Apparatus and Materials',
        level: 2,
      },
    },
    {
      id: 'list-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Fresh aquatic plant (Elodea or Cabomba) cut with a sharp blade to expose a fresh surface.',
          },
          {
            text: 'Test tube or boiling tube filled with NaHCO₃ solution (sodium bicarbonate, 0.1 M), which serves as a carbon source.',
          },
          {
            text: 'Lamp with a known power (typically 60–100 W incandescent or LED equivalent).',
          },
          {
            text: 'Ruler or measuring tape to vary the distance between lamp and plant.',
          },
          {
            text: 'Thermometer to monitor water temperature (which affects photosynthetic rate).',
          },
          {
            text: 'Gas collection tube (capillary tube or gas syringe) to collect oxygen bubbles.',
          },
        ],
      },
    },
    {
      id: 'h-method',
      type: 'heading',
      data: {
        text: 'Method',
        level: 2,
      },
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          {
            text: 'Set up the apparatus: place the plant in a test tube filled with NaHCO₃ solution. Position the lamp at a fixed distance (e.g. 10 cm) from the plant.',
          },
          {
            text: 'Allow the system to reach thermal equilibrium (~5 minutes). Record the initial water temperature.',
          },
          {
            text: 'Observe and count the number of oxygen bubbles released per unit time (e.g. bubbles per minute) for a fixed period (typically 3–5 minutes).',
          },
          {
            text: 'Move the lamp to a new distance (e.g. 15 cm, 20 cm, 30 cm, 40 cm) and repeat bubble counting, waiting for thermal equilibration each time.',
          },
          {
            text: 'Continue until bubbles are produced very slowly (indicating limiting light intensity).',
          },
          {
            text: 'Repeat the entire sequence at least twice to obtain mean values.',
          },
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gas Collection Tube Position',
        text: 'The capillary tube collecting bubbles must be positioned at the cut end of the plant, where oxygen is released. Some oxygen dissolves in the solution rather than forming visible bubbles, so bubble counting underestimates oxygen production. Despite this, bubble counting is simple and allows relative comparisons.',
      },
    },
    {
      id: 'h-inverse-square-law',
      type: 'heading',
      data: {
        text: 'The Inverse Square Law of Light',
        level: 2,
      },
    },
    {
      id: 'p-inverse-square',
      type: 'paragraph',
      data: {
        text: 'The inverse square law states that the intensity of light is inversely proportional to the square of the distance from a point light source. This relationship is fundamental to the design of Practical 10: by varying the distance between the lamp and the plant, you vary light intensity in a predictable, quantifiable way.',
      },
    },
    {
      id: 'eq-inverse-square',
      type: 'equation',
      data: {
        html: 'Intensity ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">distance<sup>2</sup></span></span>',
        caption: 'Inverse square law of light',
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Inverse Square Law Calculation',
        text: 'If the lamp is at 10 cm distance, the intensity is I. At 20 cm, intensity = I/(2²) = I/4. At 30 cm, intensity = I/(3²) = I/9. If oxygen bubbles at 10 cm number 24 per minute, and assuming photosynthetic rate is proportional to light intensity, you would predict ~6 bubbles at 20 cm and ~2.7 bubbles at 30 cm. Real data often shows non-linear relationships due to photosynthesis saturation.',
      },
    },
    {
      id: 'h-sources-of-error',
      type: 'heading',
      data: {
        text: 'Sources of Error',
        level: 2,
      },
    },
    {
      id: 'list-errors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Bubble size variability: bubbles vary in size and may coalesce, making counting imprecise. Small bubbles may dissolve in the solution rather than reaching the collecting tube.',
          },
          {
            text: 'Dissolved oxygen: much of the produced oxygen dissolves in the solution and is not counted as bubbles. This represents a constant underestimation.',
          },
          {
            text: 'Temperature changes: moving the lamp closer increases heating. The NaHCO₃ solution may warm, increasing photosynthetic rate independently of light intensity changes (confounding variable).',
          },
          {
            text: 'Lamp spectrum changes: incandescent lamps emit more infrared at closer distances, which heats rather than drives photosynthesis. LED lamps are cooler but may differ in spectrum.',
          },
          {
            text: 'Plant condition: the plant may photosynthesize at different rates depending on the time of day, previous light exposure (photoacclimation), or water stress.',
          },
          {
            text: 'Measurement time: if the observation period is short, random fluctuations in bubble rate become more significant.',
          },
        ],
      },
    },
    {
      id: 'h-improvements',
      type: 'heading',
      data: {
        text: 'Improvements to the Method',
        level: 2,
      },
    },
    {
      id: 'list-improvements',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Measure dissolved oxygen using a dissolved oxygen meter or oxygen electrode, which directly measures O₂ concentration and is more accurate than bubble counting.',
          },
          {
            text: 'Use an LED lamp with constant spectrum and minimal heat output. Place a heat filter (glass of water) between the lamp and apparatus to absorb infrared.',
          },
          {
            text: 'Control temperature precisely using a water bath, ensuring the NaHCO₃ solution remains at constant temperature throughout the experiment.',
          },
          {
            text: 'Increase observation time (10–15 minutes per distance) to reduce the effect of random fluctuations.',
          },
          {
            text: 'Use a gas syringe rather than bubble counting, which directly measures volume of gas produced.',
          },
          {
            text: 'Standardise plant condition by acclimating it to low light overnight, then exposing it to experimental conditions in a consistent order.',
          },
          {
            text: 'Measure light intensity at the plant location using a light meter calibrated in units of photosynthetic photon flux (PPFD, μmol photons/(m²·s)).',
          },
        ],
      },
    },
    {
      id: 'h-data-analysis',
      type: 'heading',
      data: {
        text: 'Data Analysis and Presentation',
        level: 2,
      },
    },
    {
      id: 'p-data-analysis',
      type: 'paragraph',
      data: {
        text: 'Experimental data are plotted as a graph of photosynthetic rate (y-axis, bubbles per minute or O₂ volume per unit time) versus lamp distance (x-axis) or light intensity. Alternatively, you can plot rate versus 1/distance² to linearise the relationship and check whether the inverse square law holds. The graph typically shows a curve that rises steeply at short distances (high intensity, rate limited by other factors) and plateaus at long distances (low intensity, light-limited). The light compensation point can be estimated as the intensity at which bubbles are produced very slowly or cease entirely.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Core Practical 10 measures oxygen production (a proxy for photosynthesis) at different light intensities, using the inverse square law to vary intensity predictably. Photosynthetic rate increases with light until reaching saturation. Sources of error include bubble size variability, temperature changes, lamp spectrum shifts, and plant condition variation. Improvements use direct oxygen measurement, controlled temperature, calibrated light intensity measurements, and optimised observation times.',
        apply: 'In an experiment, bubbles are produced at 24 per minute at 10 cm lamp distance. Predict bubble rate at 20 cm assuming (a) photosynthesis is purely light-limited, and (b) accounting for light saturation likely occurring by 20 cm.',
        analyze: 'Explain why measuring dissolved oxygen is superior to counting bubbles. What fraction of oxygen production might be missed by the bubble-counting method?',
        evaluate: 'The inverse square law assumes a point source of light. Real lamps are not point sources. Evaluate how this limitation affects the validity of the experiment and how it might be minimised.',
      },
      terms: [],
    },
    {
      id: 'checklist-practical10',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the apparatus and method for Core Practical 10', checked: false },
          { text: 'I understand the inverse square law and how it applies to this experiment', checked: false },
          { text: 'I can calculate predicted oxygen production using the inverse square law', checked: false },
          { text: 'I know major sources of error in bubble counting', checked: false },
          { text: 'I can suggest improvements to increase accuracy and precision', checked: false },
          { text: 'I can interpret a graph of photosynthetic rate vs light intensity', checked: false },
        ],
      },
    },
    {
      id: 'summary-practical10',
      type: 'summary',
      data: {
        text: 'Core Practical 10 measures oxygen production from aquatic plants at different lamp distances, exploiting the inverse square law (intensity ∝ 1/distance²). Bubble counting is simple but imprecise due to bubble variability, dissolved oxygen, and temperature effects. Improvements include dissolved oxygen measurement, LED lamps with heat filters, temperature control, and calibrated light intensity measurement. Data show photosynthetic rate increasing with light intensity until saturation, when other factors (CO₂, temperature) become limiting.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-practical-overview',
        prompt: 'Describe Core Practical 10 and explain why oxygen bubbles are used as an indicator of photosynthetic rate.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-inverse-square',
        prompt: 'State the inverse square law of light. How is this law used in Practical 10 to vary light intensity?',
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked1',
        prompt: 'If photosynthetic rate is 30 bubbles/min at 10 cm, predict the rate at 20 cm using the inverse square law.',
      },
      {
        id: 'cue-4',
        blockId: 'list-errors',
        prompt: 'Name three major sources of error in bubble counting and explain how each affects results.',
      },
      {
        id: 'cue-5',
        blockId: 'list-improvements',
        prompt: 'Suggest three improvements to the bubble-counting method and explain why each improves accuracy.',
      },
    ],
    summaryText: 'Core Practical 10 measures oxygen bubbles produced by aquatic plants (Elodea/Cabomba) at different lamp distances. Light intensity follows the inverse square law: intensity ∝ 1/distance². Photosynthetic rate (bubbles/min) increases with light until saturation. Major errors: bubble variability, dissolved oxygen not counted, temperature changes, lamp spectrum shifts. Improvements: dissolved oxygen measurement, LED + heat filter, temperature control, longer observation times, calibrated light meters.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 10 Specification',
      detail: 'The OCR A-Level Biology practical handbook describes this experiment as investigating the effect of light intensity on photosynthetic rate using gas production as a measure.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14), Core Practical 10',
      tags: ['practical', 'specification'],
    },
    {
      id: 'ev-2',
      title: 'Inverse Square Law Validation',
      detail: 'Modern experiments with calibrated light meters confirm the inverse square law holds accurately for simple lamps in small-scale laboratory settings.',
      year: '2023',
      source: 'Physics and optics literature',
      tags: ['physics', 'light'],
    },
  ],
};
