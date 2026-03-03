export const note_biology_6_6A_2 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand parametric and non-parametric statistical tests used in A-Level biology, including t-tests, chi-squared, Spearman\'s rank correlation, Mann-Whitney U, and ANOVA. Learn when to apply each test and how to interpret p-values.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Statistical Tests at A2 Level', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Statistical tests allow biologists to determine whether observed results are significantly different from expected results, or whether differences between groups are due to chance or genuine biological variation. Selecting the correct test depends on data type, distribution, and research question.',
      },
    },
    {
      id: 'h-parametric',
      type: 'heading',
      data: { text: 'Parametric Tests: Student\'s t-Test', level: 3 },
    },
    {
      id: 'p-t-1',
      type: 'paragraph',
      data: {
        text: 'The t-test compares the means of two groups and tests whether they are significantly different. It is parametric, meaning it assumes data are normally distributed with equal variances. Two versions exist:',
      },
    },
    {
      id: 'list-t',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Unpaired t-test: compares means from two independent groups (e.g. enzyme activity in wild-type vs mutant yeast).' },
          { text: 'Paired t-test: compares means from the same individuals measured twice (e.g. heart rate before and after exercise).' },
          { text: 'Welch\'s t-test: used when variances are unequal (more robust than standard t-test).' },
        ],
      },
    },
    {
      id: 'p-t-2',
      type: 'paragraph',
      data: {
        text: 'The t-test calculates a test statistic (t), which is compared to a critical value from a t-distribution table. The p-value indicates the probability of observing data this extreme if the null hypothesis (no difference) were true.',
      },
    },
    {
      id: 'h-chi2',
      type: 'heading',
      data: { text: 'Chi-Squared Test for Categorical Data', level: 3 },
    },
    {
      id: 'p-chi2-1',
      type: 'paragraph',
      data: {
        text: 'The chi-squared test (χ²) compares observed frequencies to expected frequencies in categorical data. It tests whether the observed distribution differs significantly from the expected distribution (e.g. genetic ratios in a cross, or goodness-of-fit to a model).',
      },
    },
    {
      id: 'eq-chi2',
      type: 'equation',
      data: {
        html: 'χ² = Σ <span class="nb-frac"><span class="nb-num">(O − E)<sup>2</sup></span><span class="nb-den">E</span></span>',
        caption: 'Chi-squared formula: where O = observed frequency, E = expected frequency, Σ = sum across all categories',
      },
    },
    {
      id: 'p-chi2-2',
      type: 'paragraph',
      data: {
        text: 'Degrees of freedom (df) depend on the type of test. For goodness-of-fit (comparing against a theoretical ratio), df = number of categories − 1. For a contingency table, df = (rows − 1) × (columns − 1). The calculated χ² is compared to a critical value table at p = 0.05.',
      },
    },
    {
      id: 'h-spearman',
      type: 'heading',
      data: { text: 'Spearman\'s Rank Correlation Coefficient', level: 3 },
    },
    {
      id: 'p-spearman-1',
      type: 'paragraph',
      data: {
        text: 'Spearman\'s rank correlation (r<sub>s</sub>) measures the strength of association between two variables. Unlike Pearson\'s r, it is non-parametric and uses ranked data, making it suitable for non-normally distributed or ordinal data (e.g. enzyme rank vs temperature, or student ranking vs exam score).',
      },
    },
    {
      id: 'eq-spearman',
      type: 'equation',
      data: {
        html: 'r<sub>s</sub> = 1 − <span class="nb-frac"><span class="nb-num">6Σd²</span><span class="nb-den">n(n² − 1)</span></span>',
        caption: 'Spearman\'s rank correlation: where d = difference in ranks for each pair, n = number of pairs',
      },
    },
    {
      id: 'p-spearman-2',
      type: 'paragraph',
      data: {
        text: 'r<sub>s</sub> ranges from −1 to +1. A value of +1 indicates a perfect positive monotonic relationship (as one variable increases, so does the other). A value of 0 indicates no relationship. A value of −1 indicates a perfect negative relationship. The significance is determined by comparing r<sub>s</sub> to a critical value table at p = 0.05.',
      },
    },
    {
      id: 'h-mann',
      type: 'heading',
      data: { text: 'Mann-Whitney U Test (Non-Parametric Alternative to t-Test)', level: 3 },
    },
    {
      id: 'p-mann',
      type: 'paragraph',
      data: {
        text: 'The Mann-Whitney U test compares the medians (not means) of two independent groups when data are not normally distributed or sample sizes are very small. It ranks all observations combined and calculates a U statistic. Like the t-test, a p-value indicates whether groups differ significantly. Use this when normality assumptions are violated or data are ordinal.',
      },
    },
    {
      id: 'h-anova',
      type: 'heading',
      data: { text: 'ANOVA: Comparing More Than Two Groups', level: 3 },
    },
    {
      id: 'p-anova',
      type: 'paragraph',
      data: {
        text: 'ANOVA (Analysis of Variance) tests whether means of three or more groups differ significantly. It calculates an F statistic (ratio of between-group variance to within-group variance). If F is large, at least one group mean differs from the others. Post-hoc tests (e.g. Tukey HSD) identify which specific groups differ after a significant ANOVA result.',
      },
    },
    {
      id: 'h-choosing',
      type: 'heading',
      data: { text: 'Choosing the Right Statistical Test', level: 3 },
    },
    {
      id: 'p-choosing',
      type: 'paragraph',
      data: {
        text: 'Selection depends on: (1) research question (difference vs correlation?), (2) number of groups/variables, (3) data type (continuous, ordinal, categorical), and (4) whether data are normally distributed. The flowchart below guides this choice:',
      },
    },
    {
      id: 'table-tests',
      type: 'comparisonTable',
      data: {
        headers: ['Test Name', 'Data Type', 'Number of Groups', 'Parametric?', 'Use When…'],
        rows: [
          ['Student\'s t-test (unpaired)', 'Continuous', '2 groups', 'Yes', 'Normally distributed, equal variance, independent samples'],
          ['Paired t-test', 'Continuous', '2 groups (paired)', 'Yes', 'Normally distributed, same individuals measured twice'],
          ['Welch\'s t-test', 'Continuous', '2 groups', 'Yes', 'Normally distributed, unequal variance'],
          ['Chi-squared (χ²)', 'Categorical', '2+ categories', 'No', 'Frequency data (e.g. genetic ratios, phenotypic classes)'],
          ['Spearman\'s r<sub>s</sub>', 'Continuous/ordinal', 'Correlation', 'No', 'Non-normal data, ordinal data, testing monotonic relationship'],
          ['Pearson\'s r', 'Continuous', 'Correlation', 'Yes', 'Normally distributed, testing linear relationship'],
          ['Mann-Whitney U', 'Continuous/ordinal', '2 groups', 'No', 'Non-normal data, small sample, ordinal data'],
          ['ANOVA', 'Continuous', '3+ groups', 'Yes', 'Normally distributed, comparing means of multiple groups'],
          ['Kruskal-Wallis', 'Continuous/ordinal', '3+ groups', 'No', 'Non-normal data, 3+ independent groups (non-parametric ANOVA)'],
        ],
        caption: 'Comparison of statistical tests: choose based on data type, group count, and distribution',
      },
    },
    {
      id: 'h-pvalue',
      type: 'heading',
      data: { text: 'Interpreting P-Values and Significance Levels', level: 3 },
    },
    {
      id: 'list-pvalue',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'p < 0.05: Result is statistically significant at the 5% significance level (conventional threshold in biology).' },
          { text: 'p < 0.01: Result is highly significant (1% level); stronger evidence against the null hypothesis.' },
          { text: 'p > 0.05: Result is not statistically significant; no strong evidence to reject the null hypothesis (may be due to chance).' },
          { text: 'p-value represents the probability of observing this result (or more extreme) if the null hypothesis were true — it is NOT the probability that the null hypothesis is true.' },
        ],
      },
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Type I and Type II Errors', level: 3 },
    },
    {
      id: 'p-errors',
      type: 'paragraph',
      data: {
        text: 'Statistical tests can produce false conclusions:',
      },
    },
    {
      id: 'list-errors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Type I error (false positive): rejecting the null hypothesis when it is true. Probability = α (usually 0.05). Minimised by using lower significance levels (p < 0.01) but increases risk of Type II error.' },
          { text: 'Type II error (false negative): failing to reject the null hypothesis when it is false. Probability = β. Occurs when sample size is too small or effect size is small. Minimised by increasing sample size.' },
        ],
      },
    },
    {
      id: 'h-ci',
      type: 'heading',
      data: { text: 'Confidence Intervals', level: 3 },
    },
    {
      id: 'p-ci',
      type: 'paragraph',
      data: {
        text: 'A 95% confidence interval (CI) gives a range of values within which the true population parameter is likely to lie with 95% confidence. For example, if the mean enzyme activity is 5.2 ± 0.8 units (95% CI), we can be 95% confident the true mean lies between 4.4 and 6.0 units. A confidence interval that does not include zero (or the null value) indicates statistical significance at p < 0.05.',
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example: Chi-Squared Test in Genetics', level: 3 },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Chi-Squared Test for a Monohybrid Cross',
        text: 'A student crossed two heterozygous pea plants (Aa × Aa) and expected a 3:1 phenotypic ratio (dominant:recessive). The observed results were 56 dominant and 24 recessive seeds (total 80).\n\nExpected frequencies: 3:1 ratio of 80 = 60 dominant, 20 recessive\n\nχ² = [(56−60)² ÷ 60] + [(24−20)² ÷ 20]\n   = [16 ÷ 60] + [16 ÷ 20]\n   = 0.267 + 0.8\n   = 1.067\n\nDegrees of freedom = 2 categories − 1 = 1\nCritical value at p = 0.05, df = 1 is 3.84\n\nSince 1.067 < 3.84, the calculated χ² is less than the critical value.\nConclusion: The observed ratio does not differ significantly from the expected 3:1 ratio (p > 0.05). The deviation is likely due to chance, not biological factors.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Parametric tests assume data follow a normal distribution; non-parametric tests do not. Parametric tests are more powerful (more likely to detect real differences) if assumptions are met, but are misleading if violated. Non-parametric tests are robust but have lower power. Understanding when each is appropriate prevents incorrect conclusions.',
        apply: 'A student measured enzyme activity (U/ml) in wild-type and mutant bacteria in triplicate: WT [5.2, 5.5, 5.1], Mutant [3.8, 4.1, 3.9]. Would you use a t-test or Mann-Whitney U? Justify your choice and explain the null hypothesis.',
        analyze: 'Compare Type I and Type II errors in the context of testing a new cancer drug. Which error type has graver consequences, and how would you design a study to minimise it?',
        evaluate: 'A researcher reports p = 0.048 as "significant" and p = 0.052 as "not significant," treating p = 0.05 as a hard threshold. Critique this approach and suggest how confidence intervals provide additional insight.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain when to use unpaired t-test vs paired t-test vs Welch\'s t-test.', checked: false },
          { text: 'I can calculate and interpret a chi-squared statistic for a genetic cross or contingency table.', checked: false },
          { text: 'I can rank data and calculate Spearman\'s r<sub>s</sub>, interpreting the coefficient (−1 to +1).', checked: false },
          { text: 'I know the difference between parametric (assumes normal distribution) and non-parametric tests.', checked: false },
          { text: 'I can interpret p-values (p < 0.05 significant, p < 0.01 highly significant).', checked: false },
          { text: 'I understand Type I error (false positive) vs Type II error (false negative) and how sample size affects them.', checked: false },
          { text: 'I can select the appropriate test based on: number of groups, data type, and distribution shape.', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Statistical tests determine whether observed differences are significant or due to chance. Parametric tests (t-test, ANOVA, Pearson\'s r) assume normal distribution; non-parametric tests (Mann-Whitney U, Kruskal-Wallis, Spearman\'s r<sub>s</sub>) do not. Chi-squared tests categorical data. Selection depends on group count, data type, and distribution. P-values < 0.05 indicate significance; Type I errors are false positives and Type II are false negatives. Confidence intervals provide a range estimate of the true parameter.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-parametric',
        prompt: 'What is the difference between unpaired, paired, and Welch\'s t-tests?',
      },
      {
        id: 'cue-2',
        blockId: 'eq-chi2',
        prompt: 'Write the chi-squared formula and explain what O and E represent.',
      },
      {
        id: 'cue-3',
        blockId: 'eq-spearman',
        prompt: 'Write the Spearman\'s rank formula and explain when this test is used instead of Pearson\'s r.',
      },
      {
        id: 'cue-4',
        blockId: 'table-tests',
        prompt: 'Given data from three enzyme treatments (continuous, normally distributed), which test would you use and why?',
      },
      {
        id: 'cue-5',
        blockId: 'h-pvalue',
        prompt: 'What does p < 0.05 mean? Is it the probability the null hypothesis is true?',
      },
      {
        id: 'cue-6',
        blockId: 'h-errors',
        prompt: 'Define Type I and Type II error, and explain how sample size affects each.',
      },
    ],
    summaryText: 'Choose parametric tests (t-test, ANOVA) for normally distributed continuous data; non-parametric tests (Mann-Whitney U, Kruskal-Wallis, Spearman\'s r<sub>s</sub>) for non-normal or ordinal data. Chi-squared tests categorical frequencies. P < 0.05 indicates significance. Type I error = false positive; Type II error = false negative. Sample size increases power.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Student\'s t-Distribution Theory',
      detail: 'Gosset (1908) derived the t-distribution for small sample hypothesis testing.',
      year: '1908',
      source: 'Biometrika',
      tags: ['parametric-test', 'hypothesis-testing'],
    },
    {
      id: 'ev-2',
      title: 'Chi-Squared Goodness of Fit',
      detail: 'Pearson (1900) developed the chi-squared test for comparing observed vs expected frequencies.',
      year: '1900',
      source: 'Philosophical Magazine',
      tags: ['categorical-data', 'statistical-inference'],
    },
    {
      id: 'ev-3',
      title: 'Spearman\'s Rank Correlation',
      detail: 'Spearman (1904) introduced rank correlation as a non-parametric alternative to Pearson\'s r.',
      year: '1904',
      source: 'American Journal of Psychology',
      tags: ['non-parametric', 'correlation'],
    },
  ],
};
