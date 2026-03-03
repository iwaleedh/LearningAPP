export const note_biology_2_3_11 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-polygenic',
      data: {
        text: 'Understand polygenic inheritance, continuous variation, and how multiple genes and environmental factors produce normal distributions of phenotypes.',
      },
    },
    {
      type: 'heading',
      id: 'h-polygenic-intro',
      data: { text: 'Polygenic Inheritance and Quantitative Traits', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-polygenic-def',
      data: {
        text: 'Polygenic inheritance refers to the control of a single trait by multiple genes (typically 3 or more), each contributing a small additive effect to the phenotype. Examples include human height, skin colour, eye colour, and intelligence (IQ). In contrast to single-gene traits (like ABO blood type, controlled by one gene with discrete phenotypic classes), polygenic traits show continuous variation—a range of phenotypes with no clear boundaries between classes. The more genes involved, the smoother and more continuous the distribution of phenotypes in a population.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-additive-effects',
      data: {
        text: 'In the additive model of polygenic inheritance, alleles at different loci contribute independently and additively to the phenotype. For example, if height is controlled by 3 genes (A, B, C), and each capital letter allele (A, B, C) adds 5 cm to the base height of 150 cm, then an individual with genotype AABBCC would be 150 + (6 × 5) = 180 cm tall, while aabbcc would be 150 cm. Intermediate genotypes (AaBbCc) would be 150 + (3 × 5) = 165 cm. If we plot the frequency of each genotype across a population, we see a bell curve (normal distribution) centred on the mean phenotype.',
      },
    },
    {
      type: 'heading',
      id: 'h-continuous-variation',
      data: { text: 'Continuous Variation and Normal Distribution', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-continuous-def',
      data: {
        text: 'Continuous variation is the range of phenotypes across a spectrum, with no distinct categories—individuals can fall anywhere within that range. Polygenic traits typically show continuous variation because many alleles at many loci, each with small effects, combine to produce a smooth distribution. The distribution of a polygenic trait in a large population approximates a normal (Gaussian) distribution: a bell curve symmetrical about the mean, with most individuals near the mean and fewer at the extremes. The shape and position of the curve depend on (1) the number of genes involved (more genes → smoother curve), (2) the effect size of each gene (larger effects → wider spread), and (3) environmental factors.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-env-contribution',
      data: {
        text: 'Polygenic traits are profoundly influenced by environment. Height is a classic example: genetic potential may be for 180 cm, but poor nutrition during childhood limits actual height to 170 cm. Intelligence (IQ) shows high heritability (h² ~0.5 in twin studies) but also strong environmental effects (education, socioeconomic status, early childhood experiences). Skin colour is determined by multiple genes controlling melanin production, but sun exposure alters the phenotype temporarily (tanning). The normal distribution of a polygenic trait reflects the combined effects of multiple genes and multiple environmental factors, making it impossible to partition phenotype neatly into discrete genotypic classes.',
      },
    },
    {
      type: 'heading',
      id: 'h-heritability',
      data: { text: 'Heritability and Quantitative Trait Loci (QTL)', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-heritability',
      data: {
        text: 'Heritability (h²) is the proportion of phenotypic variance in a population that is attributable to genetic variance, ranging from 0 (purely environmental) to 1 (purely genetic). It is calculated as: h² = V_G / V_P, where V_G is genetic variance and V_P is phenotypic variance (V_P = V_G + V_E, where V_E is environmental variance). Heritability is population-specific and trait-specific; it is not a fixed property but depends on the genetic diversity and environmental diversity in that population. For example, height has h² ~0.8 in wealthy nations (low environmental variance due to adequate nutrition) but lower h² in populations with variable nutrition. Intelligence has h² ~0.5, indicating substantial genetic and environmental contributions.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-qtl',
      data: {
        text: 'Quantitative trait loci (QTL) are genomic regions containing genes that influence a quantitative (polygenic) trait. QTL mapping identifies associations between genetic markers (SNPs, microsatellites) and variation in a quantitative trait, localising the genes contributing to the trait. Modern genome-wide association studies (GWAS) have identified hundreds of QTL for height, intelligence, and disease susceptibility. Each QTL has a small effect size (explaining 0.1–2% of variance), requiring very large sample sizes to detect. The polygenicity of complex traits means that no single gene "causes" the phenotype; instead, many genes with small effects, modulated by environment, determine the trait.',
      },
    },
    {
      type: 'heading',
      id: 'h-discontinuous-vs-continuous',
      data: { text: 'Discontinuous versus Continuous Variation', level: 2 },
    },
    {
      type: 'comparisonTable',
      id: 'table-variation',
      data: {
        headers: ['Feature', 'Discontinuous Variation', 'Continuous Variation'],
        rows: [
          ['Genetic basis', 'Single gene; discrete alleles', 'Multiple genes; additive effects'],
          ['Number of phenotypic classes', 'Few distinct categories (e.g. 3 for ABO)', 'Many or infinite along a spectrum'],
          ['Distribution', 'Histogram with discrete bars', 'Bell curve (normal distribution)'],
          ['Environmental influence', 'Little to none', 'Substantial'],
          ['Examples', 'ABO blood type, pea seed shape, flower colour', 'Height, weight, skin colour, intelligence'],
          ['Ratio patterns', 'Predictable Mendelian ratios (3:1, 9:3:3:1)', 'No simple ratios; population statistics used'],
        ],
        caption: 'Comparison of discontinuous and continuous variation.',
      },
    },
    {
      type: 'heading',
      id: 'h-bell-curve',
      data: { text: 'Normal Distribution and Statistical Measures', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-normal-dist',
      data: {
        text: 'The normal distribution is symmetrical about the mean (μ). Key statistics: (1) Mean (μ): average phenotype value. (2) Standard deviation (σ): measure of spread; approximately 68% of individuals fall within μ ± 1σ, 95% within μ ± 2σ, 99.7% within μ ± 3σ (68-95-99.7 rule). (3) Variance (σ²): square of standard deviation. For a polygenic trait, the shape of the curve depends on the number of loci and allele frequencies; traits with many loci producing small effects approximate a normal distribution more closely than traits with few loci.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-polygenic',
      data: {
        style: 'key',
        title: 'Polygenic Traits Have No Typical Phenotype',
        text: 'Unlike single-gene traits where a phenotypic class is clearly defined (e.g. blood type O), polygenic traits have a spectrum of phenotypes. The "average" or "mean" phenotype (e.g. average height) represents just one point on a continuum; there is no single "typical" phenotype. This is why polygenic traits are described by population statistics (mean, standard deviation) rather than discrete categories.',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-polygenic',
      data: {
        style: 'worked',
        title: 'Polygenic Model: Three Genes',
        text: 'Assume height controlled by 3 genes (A, B, C) with additive effects: base height 150 cm, each capital allele adds 5 cm. Genotype AABBCC: 150 + 6(5) = 180 cm. Genotype AaBbCc: 150 + 3(5) = 165 cm. Genotype aabbcc: 150 cm. If allele frequencies are 0.5 for each capital allele, the population mean approaches 165 cm. The number of phenotypic classes = 2n + 1 (for n genes) = 7 for 3 genes, showing a discrete distribution that approaches a bell curve as n increases.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does polygenic inheritance produce a continuous normal distribution rather than distinct phenotypic classes? Each gene contributes a small, additive effect on the phenotype; with many genes (and environmental variation), the combined effect approximates a normal distribution by the central limit theorem.',
        apply: 'Skin colour in humans is controlled by at least 6 genes, each with two alleles (dark-contributing and light-contributing). If all 6 genes act additively, how many distinct phenotypic classes are possible? Draw a histogram showing the expected distribution if both parents are heterozygous at all loci.',
        analyze: 'Compare monogenic (single-gene) traits with polygenic traits in terms of phenotypic distribution, heritability, environmental influence, ease of genetic mapping, and examples. Explain why height is more difficult to predict from genotype than cystic fibrosis.',
        evaluate: 'Evaluate the usefulness of genome-wide association studies (GWAS) for understanding complex polygenic traits such as intelligence, height, and schizophrenia risk. Consider what GWAS can and cannot reveal, the problem of missing heritability, and the ethical implications of predicting complex traits from genetic data.',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-polygenic',
      data: {
        items: [
          { text: 'Understand polygenic inheritance involves multiple genes with additive effects', checked: false },
          { text: 'Can explain continuous variation as range of phenotypes along a spectrum', checked: false },
          { text: 'Know normal distribution: mean, standard deviation, 68-95-99.7 rule', checked: false },
          { text: 'Understand heritability (h²) and how it varies with population environment', checked: false },
          { text: 'Can compare discontinuous (single gene) and continuous (polygenic) variation', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-polygenic',
      data: {
        text: 'Polygenic inheritance: multiple genes (3+), each with small additive effects, control one trait (height, skin colour, intelligence). Phenotype shows continuous variation (spectrum) rather than discrete classes. Normal distribution: bell curve centred on mean (μ), spread measured by standard deviation (σ); 68% within ±1σ, 95% within ±2σ. Heritability h² = V_G/V_P; population and trait-specific (height ~0.8, intelligence ~0.5). Environmental factors significantly influence final phenotype. QTL mapping identifies genetic regions influencing the trait; each QTL has small effect. Discontinuous variation (single gene, discrete phenotypes, e.g. blood type) vs. continuous variation (polygenic, spectrum, normal distribution, e.g. height). Most human traits of biological significance are polygenic and environmentally influenced.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-polygenic-def',
        prompt: 'Define polygenic inheritance and give three human examples.',
      },
      {
        id: 'cue-2',
        blockId: 'p-additive-effects',
        prompt: 'Explain the additive model with a worked example of three genes controlling height.',
      },
      {
        id: 'cue-3',
        blockId: 'p-heritability',
        prompt: 'Define heritability (h²) and explain why it is population-specific.',
      },
      {
        id: 'cue-4',
        blockId: 'table-variation',
        prompt: 'Compare discontinuous variation (single gene) and continuous variation (polygenic).',
      },
    ],
    summaryText: 'Polygenic inheritance: multiple genes (3+) each contribute small additive effects to phenotype (height, skin colour, intelligence). Phenotype = additive effects of alleles at multiple loci ± environment. Continuous variation: spectrum of phenotypes (no discrete classes), approximates normal distribution in large population. Normal distribution: bell curve centred on mean (μ), described by standard deviation (σ); 68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ. Heritability h² = V_G / V_P (genetic variance / phenotypic variance); ranges 0–1; population-specific (height h² ~0.8, intelligence h² ~0.5). Environmental factors (nutrition, education, socioeconomic status) substantially influence final phenotype. QTL (quantitative trait loci) are genomic regions containing genes affecting the trait; GWAS identifies QTL. Discontinuous variation: single gene, discrete phenotypes (e.g. ABO blood type); Continuous variation: polygenic, spectrum, normal distribution.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Polygenic Nature of Complex Traits',
      detail: 'GWAS studies have identified hundreds of QTL for height, intelligence, and disease susceptibility, confirming the highly polygenic nature of complex traits and the need for large sample sizes to detect individual locus effects.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['polygenic inheritance', 'quantitative traits', 'GWAS'],
    },
  ],
};
