export const note_biology_6_6A_4 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Master advanced data presentation techniques including kite diagrams, semi-log graphs, scatter plots, error bars, and correlation coefficients. Learn to interpret complex biological data and evaluate statistical significance.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Presentation and Analysis of Complex Data', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Biological data can take many forms: spatial distributions, exponential growth, correlations, or distributions across populations. Choosing the appropriate graph type and including error bars allows clear communication of both the data and its uncertainty.',
      },
    },
    {
      id: 'h-kite',
      type: 'heading',
      data: { text: 'Kite Diagrams for Community Ecology', level: 3 },
    },
    {
      id: 'p-kite-1',
      type: 'paragraph',
      data: {
        text: 'A kite diagram displays the abundance of different species along a transect (a line across a habitat). It uses the ACFOR abundance scale (Absent, Rare, Common, Frequent, Abundant) or numerical scales (percentage cover or count). The diagram is symmetrical, with species names in the centre and abundance increasing left and right from that centre line.',
      },
    },
    {
      id: 'list-kite',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'ACFOR scale: A (absent, 0%), R (rare, 1–5%), C (common, 6–25%), F (frequent, 26–75%), A (abundant, 76–100%).' },
          { text: 'Example use: monitoring plant species along a coastal to inland transect, showing salt marsh zonation (halophytes near coast, mesophytes inland).' },
          { text: 'Advantage: visually shows species turnover across environmental gradient; easy to compare to a previous transect to track change over time.' },
        ],
      },
    },
    {
      id: 'h-semilog',
      type: 'heading',
      data: { text: 'Semi-Logarithmic Graphs for Exponential Growth', level: 3 },
    },
    {
      id: 'p-semilog-1',
      type: 'paragraph',
      data: {
        text: 'When a variable grows or decays exponentially (e.g. bacterial population doubling every 20 minutes, radioactive decay), a standard linear graph produces a curve. Plotting the logarithm of the variable (log scale on y-axis) against time (linear scale on x-axis) converts the exponential curve into a straight line, allowing easy determination of the growth rate.',
      },
    },
    {
      id: 'p-semilog-2',
      type: 'paragraph',
      data: {
        text: 'For exponential bacterial growth, N(t) = N₀ × e^(μt), where N₀ is initial population, μ is the specific growth rate (per hour), and t is time. Taking logarithms: log₁₀[N(t)] = log₁₀(N₀) + μ × t × log₁₀(e). Plotting log[N] vs t gives a straight line with slope = μ × 0.434 (for base-10 logarithm).',
      },
    },
    {
      id: 'list-semilog',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Interpretation: a steeper slope indicates faster exponential growth; a plateau (horizontal line) indicates stationary phase when nutrients are limiting.' },
          { text: 'Example: plotting bacterial cell count (log scale) vs time for E. coli culture in LB broth shows lag phase (low slope, adaptation), exponential phase (steep slope), and stationary phase (flat line).' },
          { text: 'Advantage: straightens the curve, allowing calculation of doubling time (generation time) = 0.693 ÷ growth rate constant.' },
        ],
      },
    },
    {
      id: 'h-scatter',
      type: 'heading',
      data: { text: 'Scatter Plots and Pearson\'s Correlation Coefficient', level: 3 },
    },
    {
      id: 'p-scatter-1',
      type: 'paragraph',
      data: {
        text: 'A scatter plot shows the relationship between two continuous variables. Each point represents one observation. A line of best fit (linear regression line, y = mx + c) can be drawn to summarise the trend. Pearson\'s correlation coefficient (r) quantifies the strength of a linear relationship.',
      },
    },
    {
      id: 'eq-pearson',
      type: 'equation',
      data: {
        html: 'r = <span class="nb-frac"><span class="nb-num">Σ[(x − x̄)(y − ȳ)]</span><span class="nb-den">√[Σ(x − x̄)² × Σ(y − ȳ)²]</span></span>',
        caption: 'Pearson\'s correlation coefficient: r ranges from −1 to +1; x̄ and ȳ are means',
      },
    },
    {
      id: 'list-scatter',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'r = +1: perfect positive correlation (as x increases, y always increases proportionally).' },
          { text: 'r = 0: no linear correlation (points scattered randomly; no trend).' },
          { text: 'r = −1: perfect negative correlation (as x increases, y always decreases proportionally).' },
          { text: 'r² (coefficient of determination): fraction of y variance explained by x. E.g., r² = 0.81 means 81% of variation in y is explained by x.' },
          { text: 'Significance: r is compared to a critical value table at p = 0.05. A significant r indicates the correlation is unlikely due to chance.' },
        ],
      },
    },
    {
      id: 'h-histograms',
      type: 'heading',
      data: { text: 'Histograms for Continuous Data Distributions', level: 3 },
    },
    {
      id: 'p-histogram',
      type: 'paragraph',
      data: {
        text: 'A histogram displays the frequency distribution of a continuous variable (e.g. height, mass, enzyme activity). The x-axis shows class intervals (e.g. 10–20, 20–30 mm) with no gaps; the y-axis shows frequency (or frequency density = frequency ÷ class width). The area of each bar represents the frequency, so bars of different widths are comparable.',
      },
    },
    {
      id: 'h-errorbars',
      type: 'heading',
      data: { text: 'Error Bars: Standard Deviation, Standard Error, and Confidence Intervals', level: 3 },
    },
    {
      id: 'p-errorbars-1',
      type: 'paragraph',
      data: {
        text: 'Error bars visualise the variability or uncertainty in data. Three common types represent different concepts:',
      },
    },
    {
      id: 'list-errorbars',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Standard deviation (SD): measures the spread of individual data points around the mean. Approximately 68% of data fall within ± 1 SD; 95% within ± 2 SD. Used when emphasising the range of raw variation.' },
          { text: 'Standard error of the mean (SEM): measures precision of the mean estimate. SEM = SD ÷ √n, where n = sample size. Smaller SEM indicates more reliable mean (larger sample or less variability).' },
          { text: '95% confidence interval (CI): range within which the true population mean is likely to lie with 95% confidence. CI = mean ± 1.96 × SEM. If two groups\' CIs do not overlap, they differ significantly (p < 0.05).' },
        ],
      },
    },
    {
      id: 'eq-sem',
      type: 'equation',
      data: {
        html: 'SEM = <span class="nb-frac"><span class="nb-num">SD</span><span class="nb-den">√n</span></span>  ;  95% CI = mean ± 1.96 × SEM',
        caption: 'Standard error and confidence interval formulas',
      },
    },
    {
      id: 'p-errorbars-2',
      type: 'paragraph',
      data: {
        text: 'Interpreting error bars: non-overlapping SEM bars between two treatments suggest a significant difference (p < 0.05). Overlapping SEM bars indicate the difference may not be significant. Note: non-overlapping SD bars are needed for a more conservative significance threshold.',
      },
    },
    {
      id: 'h-anomalous',
      type: 'heading',
      data: { text: 'Handling Anomalous Data', level: 3 },
    },
    {
      id: 'p-anomalous',
      type: 'paragraph',
      data: {
        text: 'An anomalous data point (outlier) is one that deviates greatly from others in the dataset. Before excluding it, investigate:',
      },
    },
    {
      id: 'list-anomalous',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Was a mistake made in recording or transcription (e.g. 12.5 recorded as 125)? Correct if possible.',
          'Was there a procedural error (e.g. wrong temperature, contamination)? Exclude with justification.',
          'Is the outlier biologically meaningful (e.g. a mutant among wild-types)? Investigate further; may reveal important variation.',
          'Apply a statistical test (e.g. Grubbs test or Z-score > 3) to formally decide whether to exclude.',
        ],
      },
    },
    {
      id: 'h-metanalysis',
      type: 'heading',
      data: { text: 'Meta-Analysis and Systematic Reviews', level: 3 },
    },
    {
      id: 'p-metanalysis',
      type: 'paragraph',
      data: {
        text: 'A meta-analysis combines results from multiple independent studies, calculating a pooled effect size and confidence interval. This increases statistical power (larger total sample size) and identifies consistent effects across different conditions. A systematic review critically appraises the quality of included studies and synthesises findings in narrative form. Both approaches reduce bias from publication bias (tendency to publish positive results) and allow stronger conclusions than any single study.',
      },
    },
    {
      id: 'table-graphs',
      type: 'comparisonTable',
      data: {
        headers: ['Graph Type', 'Data Type', 'Example Use', 'Key Feature'],
        rows: [
          ['Kite diagram', 'Categorical (ACFOR scale) or % cover', 'Species abundance along transect (zonation)', 'Symmetrical display; shows species turnover across gradient'],
          ['Semi-log graph', 'Continuous, exponential growth/decay', 'Bacterial growth curves, radioactive decay', 'Log y-axis linearises exponential trends; slope = growth rate'],
          ['Scatter plot + line of best fit', 'Two continuous variables', 'Leaf area vs dry mass, temperature vs enzyme activity', 'Pearson\'s r quantifies linear correlation strength'],
          ['Histogram', 'Continuous variable, frequency distribution', 'Height distribution, mass distribution in population', 'Area of bar = frequency; no gaps between bars'],
          ['Bar chart with error bars (SEM)', 'Mean values from multiple groups/replicates', 'Mean enzyme activity at different pH values', 'Error bars show precision; non-overlapping SEM suggests significance'],
          ['Box plot', 'Continuous variable, quartile distribution', 'Distribution of exam scores across year groups', 'Shows median, quartiles, range, outliers'],
        ],
        caption: 'Graph types for different data and research questions',
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example: Calculating and Interpreting SEM and Error Bars', level: 3 },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: SEM Calculation and Interpretation',
        text: 'A student measured enzyme activity (units/ml) in five replicate reactions:\n7.2, 7.5, 7.1, 7.8, 7.4 units/ml\n\nCalculations:\nMean = (7.2 + 7.5 + 7.1 + 7.8 + 7.4) ÷ 5 = 7.4 units/ml\n\nSD = √[Σ(x − mean)² ÷ (n − 1)]\n   = √[((−0.2)² + (0.1)² + (−0.3)² + (0.4)² + 0²) ÷ 4]\n   = √[0.3 ÷ 4] = √0.075 = 0.27 units/ml\n\nSEM = SD ÷ √n = 0.27 ÷ √5 = 0.27 ÷ 2.24 = 0.12 units/ml\n\n95% CI = 7.4 ± 1.96 × 0.12 = 7.4 ± 0.24 = 7.16 to 7.64 units/ml\n\nPlot error bars extending ± 0.12 units/ml from the mean (7.4). If a second treatment gives mean 7.0 with SEM 0.15, the error bars (7.0 ± 0.15 = 6.85–7.15) overlap with the first treatment (7.28–7.52 after SEM). This suggests the difference may not be statistically significant (p > 0.05).',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Standard deviation (SD) describes the spread of raw data points; standard error (SEM) describes the precision of the estimated mean. As sample size increases, SEM decreases (mean becomes more precise) while SD remains unchanged (spread of raw data is unchanged). This is why larger samples give more reliable estimates despite similar variation in individual measurements.',
        apply: 'A student measures mitochondrial respiration rate (μmol O₂/min) in three tissue types, with five replicates each. Tissue A: mean 5.2 ± 0.8 (SD); Tissue B: mean 4.8 ± 0.9; Tissue C: mean 6.1 ± 0.7. Calculate SEM for each, plot with error bars, and suggest whether any tissue differs significantly.',
        analyze: 'Compare kite diagrams and scatter plots for ecological data. When would you use each? How would a kite diagram along two perpendicular transects better reveal 2D spatial patterns than a single transect?',
        evaluate: 'A paper reports correlation r = 0.68 (p < 0.001) between dietary calcium intake and bone mineral density in 500 people. The authors claim "calcium intake causes stronger bones." Critique this conclusion. Does strong statistical significance mean strong practical effect? What confounding variables might explain the correlation?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can construct and interpret a kite diagram using ACFOR scale along a transect.', checked: false },
          { text: 'I can explain why semi-log graphs linearise exponential growth and use this to calculate growth rate.', checked: false },
          { text: 'I can calculate Pearson\'s correlation coefficient and interpret r values (−1 to +1).', checked: false },
          { text: 'I can calculate standard deviation, standard error (SEM), and 95% confidence interval from raw data.', checked: false },
          { text: 'I understand when to use SD vs SEM vs CI error bars and what each represents.', checked: false },
          { text: 'I can identify outliers/anomalous data and justify whether to exclude them.', checked: false },
          { text: 'I can read complex graphs and interpret overlapping vs non-overlapping error bars.', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Data presentation depends on type: kite diagrams show species abundance along transects; semi-log graphs linearise exponential growth; scatter plots with best-fit lines and Pearson\'s r quantify linear correlation; histograms display frequency distributions. Error bars communicate uncertainty: SD shows raw variation, SEM shows precision of the mean (SEM = SD ÷ √n), and 95% CI gives range of likely true mean. Non-overlapping SEM bars suggest significant differences (p < 0.05). Outliers must be investigated and excluded only with justification. Meta-analysis pools results from multiple studies to increase statistical power and reduce bias.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-kite',
        prompt: 'What is the ACFOR scale, and how is a kite diagram used in community ecology?',
      },
      {
        id: 'cue-2',
        blockId: 'h-semilog',
        prompt: 'Why does plotting log[population] vs time linearise exponential bacterial growth? How would you calculate the growth rate from the slope?',
      },
      {
        id: 'cue-3',
        blockId: 'eq-pearson',
        prompt: 'What does Pearson\'s correlation coefficient r measure? What do values of r = +1, 0, and −1 represent?',
      },
      {
        id: 'cue-4',
        blockId: 'eq-sem',
        prompt: 'Write the formula for SEM and explain the difference between SD, SEM, and 95% CI.',
      },
      {
        id: 'cue-5',
        blockId: 'h-errorbars',
        prompt: 'If two groups have non-overlapping SEM bars, what does this suggest about statistical significance?',
      },
      {
        id: 'cue-6',
        blockId: 'h-anomalous',
        prompt: 'List four steps for handling an anomalous data point. When is exclusion justified?',
      },
    ],
    summaryText: 'Kite diagrams display species abundance (ACFOR scale) along transects. Semi-log graphs (log y-axis) linearise exponential growth. Scatter plots with Pearson\'s r (−1 to +1) quantify linear correlation. Error bars show variation: SD (raw spread), SEM = SD ÷ √n (mean precision), 95% CI = mean ± 1.96 × SEM (true mean range). Non-overlapping SEM bars suggest p < 0.05. Outliers must be investigated before exclusion. Meta-analysis combines multiple studies for increased power.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'ACFOR Scale in Ecology',
      detail: 'Braun-Blanquet (1951) developed the abundance-dominance scale (precursor to ACFOR) for vegetation surveys.',
      year: '1951',
      source: 'Plant Sociology',
      tags: ['community-ecology', 'survey-methods'],
    },
    {
      id: 'ev-2',
      title: 'Bacterial Growth Kinetics',
      detail: 'Monod (1942) characterised bacterial growth phases (lag, log, stationary, decline) using semi-log plots.',
      year: '1942',
      source: 'Recherches sur la croissance des cultures bactériennes',
      tags: ['microbiology', 'growth-models'],
    },
    {
      id: 'ev-3',
      title: 'Pearson Correlation Coefficient',
      detail: 'Pearson (1895) developed the product-moment correlation coefficient for quantifying linear association.',
      year: '1895',
      source: 'Proceedings of the Royal Society',
      tags: ['statistics', 'correlation-analysis'],
    },
  ],
};
