export const note_biology_4_5_5 = {
  blocks: [
    {
      id: 'obj-respiration-balance',
      type: 'objective',
      data: {
        text: 'Understand the relationship between photosynthesis and respiration, the compensation point, and how environmental factors affect the balance between gross and net photosynthesis.',
      },
    },
    {
      id: 'h-gross-net',
      type: 'heading',
      data: {
        text: 'Gross and Net Photosynthesis',
        level: 2,
      },
    },
    {
      id: 'p-gross-net-intro',
      type: 'paragraph',
      data: {
        text: 'Gross photosynthesis (also called gross primary productivity, GPP) is the total amount of organic matter produced by photosynthesis per unit time. However, the plant simultaneously respires, consuming some of this organic matter for energy. Net photosynthesis (or net primary productivity, NPP) is the amount of organic matter remaining after respiration.',
      },
    },
    {
      id: 'eq-net-gross',
      type: 'equation',
      data: {
        html: 'Net Photosynthesis = Gross Photosynthesis − Respiration<br>NPP = GPP − R',
        caption: 'Relationship between net and gross photosynthesis',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Growth vs Energy Use',
        text: 'Gross photosynthesis represents the total energy captured from light. Net photosynthesis represents the energy available for growth and storage. The difference (respiration) is the energy cost of maintaining the plant. In ecological terms, NPP determines how much organic matter is available to herbivores; GPP determines the total energy input from the sun.',
      },
    },
    {
      id: 'h-compensation-point-detail',
      type: 'heading',
      data: {
        text: 'The Compensation Point',
        level: 2,
      },
    },
    {
      id: 'p-compensation-point-detail',
      type: 'paragraph',
      data: {
        text: 'The light compensation point (LCP) is the light intensity at which the rate of gross photosynthesis exactly equals the rate of cellular respiration. At this intensity, NPP = 0; the plant produces no net gain in organic matter. Below the compensation point, respiration exceeds photosynthesis, and the plant uses stored reserves. Above the compensation point, photosynthesis exceeds respiration, and the plant accumulates organic matter (growth occurs).',
      },
    },
    {
      id: 'p-compensation-factors',
      type: 'paragraph',
      data: {
        text: 'The compensation point varies with several environmental factors. Temperature increases respiration rate (Q₁₀ ~ 2), raising the compensation point. CO₂ concentration affects photosynthetic rate more steeply than respiration, so elevated CO₂ lowers the compensation point. Plant species differ: shade-adapted plants have a lower compensation point, allowing survival in dim light; sun-adapted plants have a higher compensation point and require bright light to accumulate biomass.',
      },
    },
    {
      id: 'table-compensation',
      type: 'comparisonTable',
      data: {
        headers: ['Factor', 'Effect on LCP', 'Mechanism', 'Example'],
        rows: [
          ['Increased temperature', 'Increases', 'Respiration increases faster than photosynthesis', 'LCP at 25 °C > LCP at 15 °C'],
          ['Increased [CO₂]', 'Decreases', 'Photosynthesis increases; respiration unchanged', 'Enriched atmosphere lowers LCP'],
          ['Shade adaptation', 'Decreases', 'Low respiration rate; low photosynthetic optimum', 'Forest understorey plants'],
          ['Sun adaptation', 'Increases', 'High respiration; high photosynthetic optimum', 'Open grassland plants'],
        ],
        caption: 'Factors affecting the light compensation point',
      },
    },
    {
      id: 'h-daily-cycle',
      type: 'heading',
      data: {
        text: 'Daily Cycle of Photosynthesis and Respiration',
        level: 2,
      },
    },
    {
      id: 'p-daily-cycle',
      type: 'paragraph',
      data: {
        text: 'During the day, when light intensity exceeds the compensation point, the plant accumulates organic matter through net photosynthesis. The rate increases to a peak around midday (depending on light intensity, temperature, and CO₂) and then decreases as the sun sets. At dusk, the light intensity falls below the compensation point, and photosynthesis can no longer exceed respiration. During the night, only respiration occurs—the plant consumes stored organic matter. Over a 24-hour period, the net change in organic matter is the balance between daytime NPP and nighttime respiration.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Leaf Positioning',
        text: 'Many plants position leaves to maximise light exposure during the day, increasing the duration and rate of net photosynthesis. Some leaves show heliotropism (tracking the sun) or nyctinasty (closing at night to conserve water and reduce photorespiration). These behaviours reflect the ecological importance of maximising NPP relative to respiration.',
      },
    },
    {
      id: 'h-seasonal-variation',
      type: 'heading',
      data: {
        text: 'Seasonal Variation in Compensation Point',
        level: 2,
      },
    },
    {
      id: 'p-seasonal-variation',
      type: 'paragraph',
      data: {
        text: 'In temperate regions, the compensation point changes seasonally. In spring and summer, lengthening photoperiods and warmer temperatures increase both photosynthesis and respiration, but the effect on photosynthesis is stronger, lowering the compensation point. In autumn and winter, decreasing light intensity and falling temperatures increase the compensation point. Deciduous plants shed leaves in autumn (leaf senescence) partly because the compensation point rises too high for leaves to remain profitable—the cost of maintaining leaves exceeds the organic matter they produce. Evergreen plants in temperate regions often have lower compensation points and more cold-tolerant photosynthetic machinery.',
      },
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Winter Survival',
        text: 'In winter, many plants enter dormancy (loss of leaves, reduced metabolism). Those that retain leaves (evergreens) must be able to photosynthesise enough during short, dim days to exceed nighttime respiration. This requires either a very low compensation point or stored energy reserves from autumn accumulation.',
      },
    },
    {
      id: 'h-co2-at-night',
      type: 'heading',
      data: {
        text: 'CO₂ Exchange at Night and the Compensation Point',
        level: 2,
      },
    },
    {
      id: 'p-co2-at-night',
      type: 'paragraph',
      data: {
        text: 'At night, below the compensation point, photosynthesis is negligible and respiration dominates. Stomata may remain partially closed to conserve water, limiting CO₂ uptake. However, respiration produces CO₂ within the leaf, raising internal [CO₂]. Some of this CO₂ may be re-assimilated by residual light-independent reactions (especially in C4 and CAM plants), or it may diffuse out of the leaf. In aquatic environments, night-time CO₂ release by submerged plants can lower water pH and affect nutrient cycling.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Net photosynthesis (NPP) is gross photosynthesis minus respiration. The compensation point is the light intensity where these rates are equal; below it, the plant loses organic matter, above it, the plant gains. Temperature raises the compensation point by increasing respiration faster than photosynthesis. CO₂ enrichment lowers it by increasing photosynthesis. Shade plants have low compensation points; sun plants have high ones. Seasonally, compensation points rise in autumn/winter, explaining deciduous leaf abscission.',
        apply: 'A plant is exposed to 12 hours of light at 400 μmol/(m²·s) and 12 hours of darkness. Its respiration rate is constant at 2 μmol O₂/(m²·s). In light, net photosynthesis is +3 μmol O₂/(m²·s). Calculate the 24-hour net gas exchange and predict what happens if the photoperiod is reduced to 8 hours.',
        analyze: 'Evergreen plants retain leaves in winter despite low light. Explain how their physiology differs from deciduous plants to make this strategy viable.',
        evaluate: 'The compensation point is often used to classify plants as shade-tolerant or sun-loving. Evaluate whether this single metric adequately predicts a plant\'s ecological niche, or whether other factors are equally important.',
      },
      terms: [],
    },
    {
      id: 'checklist-balance',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can define gross and net photosynthesis and explain their relationship', checked: false },
          { text: 'I understand the light compensation point and its ecological significance', checked: false },
          { text: 'I can explain how temperature and CO₂ concentration affect the compensation point', checked: false },
          { text: 'I know the differences between shade-adapted and sun-adapted plants', checked: false },
          { text: 'I can describe the daily and seasonal cycles of photosynthesis and respiration', checked: false },
          { text: 'I understand why deciduous trees shed leaves in autumn', checked: false },
        ],
      },
    },
    {
      id: 'summary-balance',
      type: 'summary',
      data: {
        text: 'Net photosynthesis = Gross photosynthesis − Respiration. The light compensation point is where gross photosynthesis equals respiration (NPP = 0). Below this point, the plant cannot accumulate organic matter; above it, growth occurs. Temperature increases respiration, raising the compensation point. CO₂ enrichment increases photosynthesis, lowering it. Shade-adapted plants have low compensation points; sun plants have high ones. Seasonally, rising compensation points in autumn/winter trigger leaf abscission in deciduous plants.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-net-gross',
        prompt: 'Define gross photosynthesis and net photosynthesis. Explain what happens to a plant when net photosynthesis is zero.',
      },
      {
        id: 'cue-2',
        blockId: 'h-compensation-point-detail',
        prompt: 'What is the light compensation point? Why is it important for plant survival?',
      },
      {
        id: 'cue-3',
        blockId: 'table-compensation',
        prompt: 'How does temperature affect the compensation point? How does CO₂ concentration affect it?',
      },
      {
        id: 'cue-4',
        blockId: 'h-seasonal-variation',
        prompt: 'Explain why deciduous plants shed leaves in autumn in terms of the compensation point.',
      },
      {
        id: 'cue-5',
        blockId: 'h-daily-cycle',
        prompt: 'Describe the daily cycle of photosynthesis and respiration. What is the net effect over 24 hours?',
      },
    ],
    summaryText: 'Net photosynthesis = Gross photosynthesis − Respiration. The light compensation point (LCP) is where GPP = respiration and NPP = 0. Below LCP, plants consume reserves; above it, they accumulate biomass. Temperature raises LCP (increases respiration); CO₂ enrichment lowers it. Shade plants have low LCP; sun plants have high LCP. Seasonally, LCP rises in autumn/winter, making leaves unproductive; deciduous plants abscise leaves to conserve resources.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Compensation Point Measurements',
      detail: 'Field studies show shade plants (understory herbs, moss) have LCP of 10–50 μmol/(m²·s), while sun plants (grasses, cereal crops) have LCP of 100–300 μmol/(m²·s).',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['ecology', 'plant physiology'],
    },
    {
      id: 'ev-2',
      title: 'Leaf Senescence Timing',
      detail: 'Deciduous tree leaf abscission timing correlates with rising compensation points as day length decreases and temperature falls in autumn, supporting the economic model of leaf retention.',
      year: '2023',
      source: 'Plant ecology and physiology studies',
      tags: ['seasonality', 'adaptation'],
    },
  ],
};
