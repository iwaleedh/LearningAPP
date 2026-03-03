export const note_biology_4_5_3 = {
  blocks: [
    {
      id: 'obj-limiting',
      type: 'objective',
      data: {
        text: 'Understand the factors that limit photosynthetic rate: light intensity, CO₂ concentration, and temperature. Understand the concept of the limiting factor and compensation point.',
      },
    },
    {
      id: 'h-light-intensity',
      type: 'heading',
      data: {
        text: 'Light Intensity as a Limiting Factor',
        level: 2,
      },
    },
    {
      id: 'p-light-intro',
      type: 'paragraph',
      data: {
        text: 'At low light intensities, the rate of photosynthesis increases linearly with increasing light intensity. This is because light-dependent reactions are limited by the number of photons available. As light intensity increases, more photons are absorbed, more ATP and NADPH are generated, and the Calvin cycle proceeds faster. However, at high light intensities, the rate plateaus at a saturation point beyond which light intensity no longer increases the photosynthetic rate.',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Light Saturation',
        text: 'At light saturation, the light-dependent reactions are producing ATP and NADPH faster than the Calvin cycle can use them. Beyond this point, another factor (usually CO₂ concentration or temperature) becomes limiting. The saturation intensity varies between plant species and environmental conditions.',
      },
    },
    {
      id: 'h-co2-concentration',
      type: 'heading',
      data: {
        text: 'CO₂ Concentration as a Limiting Factor',
        level: 2,
      },
    },
    {
      id: 'p-co2-intro',
      type: 'paragraph',
      data: {
        text: 'At low CO₂ concentrations, the rate of photosynthesis increases roughly linearly with CO₂ concentration, as limited substrate availability reduces the rate of fixation by RuBisCO. As CO₂ concentration increases, the enzyme becomes increasingly saturated, and the rate of photosynthesis plateaus. The saturation concentration varies between plant types (typically 800–1000 ppm for C3 plants under standard conditions), but is much lower for C4 plants due to their CO₂-concentrating mechanisms.',
      },
    },
    {
      id: 'list-co2-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Low CO₂: RuBisCO operates below Km; rate increases steeply with [CO₂].',
          },
          {
            text: 'Optimal CO₂: RuBisCO operates near Vmax; rate plateaus.',
          },
          {
            text: 'Elevated CO₂: Saturation reached; further increases have minimal effect.',
          },
          {
            text: 'High temperature with high [CO₂]: Photorespiration is minimised.',
          },
        ],
      },
    },
    {
      id: 'h-temperature',
      type: 'heading',
      data: {
        text: 'Temperature as a Limiting Factor',
        level: 2,
      },
    },
    {
      id: 'p-temp-intro',
      type: 'paragraph',
      data: {
        text: 'Temperature affects photosynthetic rate in multiple ways. Below the optimum temperature, enzyme activity increases with temperature (Q₁₀ effect: roughly doubling reaction rate per 10 °C rise). However, above the optimum temperature (typically 25–35 °C for most C3 plants), enzymes including RuBisCO begin to denature irreversibly, photosynthetic membranes become more fluid and unstable, and photorespiration increases relative to photosynt­hesis. At very high temperatures, the photosynthetic rate drops sharply.',
      },
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Temperature and Enzyme Stability',
        text: 'Unlike light and CO₂ concentration, temperature is not reversibly limiting. Once enzymes like RuBisCO denature at high temperatures, the damage is permanent until new enzyme is synthesised. Plants adapted to hot environments often have thermally stable enzyme isoforms.',
      },
    },
    {
      id: 'h-chlorophyll',
      type: 'heading',
      data: {
        text: 'Chlorophyll Concentration',
        level: 2,
      },
    },
    {
      id: 'p-chlorophyll',
      type: 'paragraph',
      data: {
        text: 'The concentration of chlorophyll in chloroplasts directly affects the rate of light absorption. Plants with low chlorophyll content (e.g. in nutrient-poor soil or shade conditions) have a lower light absorption capacity and hence a lower photosynthetic rate. Chlorophyll is synthesised using nitrogen and magnesium; deficiencies in these nutrients reduce photosynthetic potential. However, beyond a certain chlorophyll concentration, further increases have diminishing returns because the physical arrangement of chlorophyll molecules limits additional light capture.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Chlorophyll and Nutrient Cycling',
        text: 'Nitrogen limitation is often the primary factor reducing photosynthetic capacity in natural ecosystems, as nitrogen is essential for chlorophyll synthesis (each chlorophyll molecule contains one magnesium atom) and for RuBisCO protein synthesis.',
      },
    },
    {
      id: 'h-limiting-factor',
      type: 'heading',
      data: {
        text: 'The Limiting Factor Concept',
        level: 2,
      },
    },
    {
      id: 'p-limiting-factor',
      type: 'paragraph',
      data: {
        text: 'The limiting factor is the environmental variable that is in shortest supply relative to demand, and which therefore restricts the rate of a process. At any moment, only one factor is limiting (Liebig\'s law of the minimum). In the morning, light may be limiting. As light intensity increases midday, CO₂ concentration becomes limiting. At high temperatures, temperature becomes limiting. Identifying the limiting factor is crucial for optimising photosynthetic rate in agricultural or horticultural settings.',
      },
    },
    {
      id: 'h-compensation-point',
      type: 'heading',
      data: {
        text: 'Light Compensation Point',
        level: 2,
      },
    },
    {
      id: 'p-compensation-point',
      type: 'paragraph',
      data: {
        text: 'The light compensation point is the light intensity at which the rate of gross photosynthesis equals the rate of cellular respiration. At this point, there is zero net gas exchange: O₂ released by photosynthesis equals O₂ consumed by respiration, and CO₂ fixed by photosynthesis equals CO₂ released by respiration. Below the compensation point, the plant loses more organic matter through respiration than it gains from photosynthesis (net autotrophy is impossible). Above the compensation point, the plant accumulates organic matter. The compensation point varies between species, light wavelengths, and temperatures.',
      },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Compensation Point and Plant Ecology',
        text: 'Shade-adapted plants typically have a lower light compensation point than sun plants, allowing them to survive in low-light environments. Conversely, sun plants have a higher compensation point and are more competitive in bright light. This represents an ecological trade-off.',
      },
    },
    {
      id: 'h-worked-example',
      type: 'heading',
      data: {
        text: 'Worked Example: Identifying Limiting Factors',
        level: 2,
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Greenhouse Tomato Production',
        text: 'A tomato grower observes that increasing light from 200 to 400 μmol photons/(m²·s) increases yield, but further increases to 600 and 800 μmol/m² yield no benefit. The grower should next increase CO₂ concentration from ambient 400 ppm, as CO₂ is now limiting. If CO₂ is increased to 800 ppm and yield increases, then light at 800 μmol/m² becomes limiting again. This iterative process optimises production by addressing the most limiting factor.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Photosynthetic rate is limited by whichever factor is in shortest supply. Light intensity, CO₂ concentration, temperature, and chlorophyll are the main limiting factors. At low intensities, light is limiting and rate ∝ intensity. At saturating light, CO₂ concentration becomes limiting and rate ∝ [CO₂] until RuBisCO saturation. Temperature affects enzyme kinetics and stability; above the optimum, irreversible denaturation occurs. The compensation point is where gross photosynthesis = respiration; below it, the plant cannot survive on photosynthesis alone.',
        apply: 'A plant is cultured at 25 °C, 400 ppm CO₂, and increasing light. Initially, photosynthetic rate increases linearly with light. At 600 μmol photons/(m²·s), the rate plateaus. Predict which factor is now limiting and explain what would happen if you doubled the CO₂ concentration.',
        analyze: 'Compare the light compensation points of a shade plant and a sun plant. Explain how this difference reflects their ecological niches and evolutionary adaptations.',
        evaluate: 'The limiting factor concept assumes that factors act independently. Critique this assumption: are there interactions between light, CO₂, and temperature that violate this principle?',
      },
      terms: [],
    },
    {
      id: 'checklist-limiting',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand how light intensity limits photosynthesis and the concept of light saturation', checked: false },
          { text: 'I can explain how CO₂ concentration affects photosynthetic rate', checked: false },
          { text: 'I understand temperature effects: Q₁₀ and enzyme denaturation', checked: false },
          { text: 'I know the definition and significance of the light compensation point', checked: false },
          { text: 'I can identify which factor is limiting in a given scenario', checked: false },
          { text: 'I understand how chlorophyll concentration affects light capture', checked: false },
        ],
      },
    },
    {
      id: 'summary-limiting',
      type: 'summary',
      data: {
        text: 'Photosynthetic rate is limited by light intensity, CO₂ concentration, temperature, or chlorophyll—whichever is in shortest supply. At low light, rate ∝ intensity. At saturating light, rate ∝ [CO₂] until enzyme saturation. Temperature increases rate ~2-fold per 10 °C (Q₁₀), but above the optimum (~25–35 °C), enzymes denature irreversibly. The light compensation point is where photosynthesis equals respiration; below it, the plant uses more organic matter than it produces.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-light-intensity',
        prompt: 'Describe the relationship between light intensity and photosynthetic rate. What happens at the light saturation point?',
      },
      {
        id: 'cue-2',
        blockId: 'h-co2-concentration',
        prompt: 'How does CO₂ concentration affect the rate of photosynthesis? What enzyme is involved and what is its role?',
      },
      {
        id: 'cue-3',
        blockId: 'h-temperature',
        prompt: 'Explain the Q₁₀ effect and why temperature becomes non-reversibly limiting at high values.',
      },
      {
        id: 'cue-4',
        blockId: 'h-compensation-point',
        prompt: 'Define the light compensation point. Why is it important for plant survival?',
      },
      {
        id: 'cue-5',
        blockId: 'h-limiting-factor',
        prompt: 'What is a limiting factor? How would you identify which factor is limiting in a photosynthesis experiment?',
      },
    ],
    summaryText: 'Light intensity, CO₂ concentration, temperature, and chlorophyll all limit photosynthetic rate. At low light, rate ∝ intensity. At high light (saturation), CO₂ becomes limiting. Temperature increases rate by Q₁₀ (~2-fold per 10 °C) up to the optimum (~25–35 °C); above this, enzymes denature. Chlorophyll concentration affects light absorption. The limiting factor is the resource in shortest supply. The light compensation point is where photosynthesis = respiration; the plant cannot accumulate organic matter below this intensity.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Limiting Factor Research',
      detail: 'Agricultural studies consistently show that yield increases when the most limiting factor is improved. Greenhouse CO₂ enrichment to 800–1000 ppm increases crop yield by 20–50% when light is saturating.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['limiting factors', 'agriculture'],
    },
    {
      id: 'ev-2',
      title: 'Compensation Point Ecology',
      detail: 'Shade-adapted plant species show compensation points of 10–50 μmol/(m²·s), while sun plants require 100–300 μmol/(m²·s). This difference enables species coexistence in stratified forest canopies.',
      year: '2023',
      source: 'Plant ecology research',
      tags: ['ecology', 'adaptation'],
    },
  ],
};
