export const note_biology_2_3_10 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-genotype-env',
      data: {
        text: 'Understand the relationship between genotype and environment in determining phenotype, explore epigenetics and heritable epigenetic changes, and evaluate evidence for epigenetic inheritance.',
      },
    },
    {
      type: 'heading',
      id: 'h-genotype-env',
      data: { text: 'Phenotype = Genotype + Environment', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-formula',
      data: {
        text: 'An organism\'s phenotype is determined by both its genotype (the alleles it carries) and the environment in which it develops and lives. The relative contribution of genes versus environment varies by trait. Some traits are primarily genetic (e.g. ABO blood type, cystic fibrosis); others are heavily influenced by environment (e.g. height, skin colour, intelligence). Height exemplifies gene-environment interaction: tall parents tend to have tall children (genetic contribution), yet average height in populations has increased markedly over the past century due to improved nutrition (environmental contribution). Twin studies help partition variance: identical (monozygotic) twins share 100% of DNA; fraternal (dizygotic) twins share 50%. If a trait is purely genetic, identical twins should be 100% concordant (both express the trait) and fraternal twins 50% concordant. Actual concordance rates reveal environmental influence.',
      },
    },
    {
      type: 'heading',
      id: 'h-epigenetics-def',
      data: { text: 'Epigenetics: Heritable Changes Without DNA Sequence Alterations', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-epigenetics-intro',
      data: {
        text: 'Epigenetics is the study of heritable changes in gene expression that do not involve changes to the underlying DNA sequence. In other words, two organisms with identical DNA sequences can have different gene expression patterns and thus different phenotypes if they differ in epigenetic marks (DNA methylation, histone modifications). Epigenetic changes are reversible—unlike mutations—and can respond dynamically to environmental signals. Crucially, epigenetic marks can be transmitted through cell divisions and, in some cases, across generations (transgenerational epigenetic inheritance), making them "heritable" in the epigenetic sense (distinct from genetic inheritance via alleles).',
      },
    },
    {
      type: 'heading',
      id: 'h-dna-methylation',
      data: { text: 'DNA Methylation and Gene Silencing', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-cpg-islands',
      data: {
        text: 'DNA methylation involves the addition of methyl groups (-CH₃) to cytosine residues in CpG dinucleotides (CG sequences). This reaction is catalysed by DNA methyltransferases (DNMTs), with S-adenosylmethionine (SAM) as the methyl donor. CpG islands are regions with high frequency of CpG sequences (usually at gene promoters); these are typically unmethylated in normal, healthy cells, allowing gene expression. Methylated promoter regions prevent transcription factor binding and recruit methyl-CpG-binding proteins (MBPs) and histone deacetylases (HDACs) that compact chromatin, silencing the gene. Abnormal hypermethylation is a hallmark of cancer: tumour suppressor genes (e.g. VHL, MLH1, BRCA1) are often silenced by promoter methylation rather than mutation, providing a silent second hit in Knudson\'s two-hit hypothesis.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-methylation-memory',
      data: {
        text: 'DNA methylation is semi-conserved through cell division via maintenance methylation. When DNA replicates, the new strand is unmethylated initially. DNMT1 (maintenance methyltransferase) recognises hemimethylated DNA (methylation on the parental strand only) and adds a methyl group to the new strand, restoring the symmetric methylation pattern. This mechanism ensures epigenetic marks persist through mitosis, maintaining cell identity. However, maintenance methylation is not 100% accurate; some sites may escape methylation or be incorrectly methylated, allowing epigenetic variation even among genetically identical cells.',
      },
    },
    {
      type: 'heading',
      id: 'h-histone-mods',
      data: { text: 'Histone Acetylation and Methylation', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-acetylation',
      data: {
        text: 'Histone acetylation loosens the grip of histones on DNA, creating an open chromatin state (euchromatin) conducive to transcription. Histone acetyltransferases (HATs, e.g. CBP, p300) add acetyl groups to lysine residues on histones H3 and H4; histone deacetylases (HDACs) remove them. Acetylation neutralises positive charges on lysine, weakening DNA-histone interactions. Acetylated histones are actively transcribed; deacetylated histones are silent. Some cancers involve HDAC overexpression, leading to silencing of tumour suppressor genes via deacetylation and chromatin compaction.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-methylation-marks',
      data: {
        text: 'Histone methylation can activate or repress genes depending on which residue is methylated. H3K4me3 (histone H3, lysine 4, trimethylated) is an activation mark: typically found at active gene promoters. H3K27me3 (histone H3, lysine 27, trimethylated) is a repression mark: associated with gene silencing via PRC2 (polycomb repressor complex 2). H3K9me3 is another repression mark associated with heterochromatin. These histone marks create a "histone code" that is read by other proteins to regulate transcription.',
      },
    },
    {
      type: 'heading',
      id: 'h-genomic-imprinting',
      data: { text: 'Genomic Imprinting', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-imprinting',
      data: {
        text: 'Genomic imprinting is an epigenetic phenomenon where certain genes are expressed in a parent-of-origin-specific manner: one allele is active, the other is silenced via methylation. Imprinted genes are marked during gametogenesis (egg and sperm formation): the maternal allele might be methylated (and thus silenced) while the paternal allele is unmethylated (and active), or vice versa. After fertilisation, these parental imprints are maintained in somatic cells, ensuring parent-specific expression throughout life. Classic examples: IGF2 (insulin-like growth factor 2) is expressed only from the paternal allele; H19 is expressed only from the maternal allele. Loss of imprinting is implicated in diseases like Beckwith-Wiedemann syndrome (overgrowth) and Prader-Willi/Angelman syndromes (developmental and neurological disorders).',
      },
    },
    {
      type: 'heading',
      id: 'h-env-epigenome',
      data: { text: 'Environmental Effects on the Epigenome', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-nutrition-stress',
      data: {
        text: 'Environmental factors profoundly influence epigenetic marks. Nutrition: methyl donors (folate, B12, choline, methionine) are required for DNA methylation via SAM synthesis. Folate deficiency during pregnancy increases disease risk in offspring via altered methylation patterns. Stress: chronic stress increases cortisol, which suppresses histone acetylation and activates HDACs, silencing genes involved in stress response and immune function. Temperature and light also modulate histone acetylation in some organisms. In plants, pathogen infection triggers rapid histone acetylation of defence genes, enabling rapid immune response.',
      },
    },
    {
      type: 'heading',
      id: 'h-epigenetic-inheritance',
      data: { text: 'Transgenerational Epigenetic Inheritance', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-famine-dutch',
      data: {
        text: 'Epigenetic marks can be inherited across generations, a phenomenon called transgenerational epigenetic inheritance. A landmark example is the Dutch Hunger Winter (1944–1945): Dutch fetuses exposed to severe famine in utero showed altered methylation of metabolic genes (e.g. IGF2 methylation increased) decades later. Adults who experienced famine prenatally showed higher rates of obesity, cardiovascular disease, and metabolic syndrome in adulthood—attributed to fetal epigenetic reprogramming toward a "thrifty" metabolic phenotype that increased disease risk in an environment of food abundance. Critically, some methylation changes persisted into offspring (F2 generation), suggesting true transgenerational epigenetic inheritance.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-inheritance-mechanisms',
      data: {
        text: 'How epigenetic marks escape reprogramming (which typically erases marks during meiosis and early embryogenesis) remains an open question. Some histone marks may be resistant to erasure; some DNA methylation patterns at imprinted loci and repetitive elements escape reprogramming. In plants, DNA methylation in non-CpG contexts (CHG, CHH) and small RNAs (24-nt siRNAs from RNA-directed DNA methylation, RdDM) enable transgenerational silencing of transposable elements. In animals, the mechanisms are less clear, but evidence suggests that certain epialleles can be inherited via incomplete reprogramming.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-epigenetics',
      data: {
        style: 'key',
        title: 'Epigenetics Bridges Nature and Nurture',
        text: 'Epigenetics provides a molecular mechanism for environmental influences on phenotype: environmental signals (nutrition, stress, temperature) trigger epigenetic changes (methylation, histone modifications) that alter gene expression, producing different phenotypes from the same genotype. This reconciles the gene-environment dichotomy and explains phenomena like phenotypic plasticity and fetal programming.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-imprinting',
      data: {
        style: 'tip',
        title: 'Genomic Imprinting: Parent Matters',
        text: 'For imprinted genes, the origin of the allele (maternal vs. paternal) matters, not just the allele itself. A child inheriting a mutant IGF2 allele from mother will not express it (maternal imprint keeps it silent), so phenotype is normal. But inheriting the same mutation from father causes disease (paternal allele is active). This explains parent-of-origin effects in disease.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why can identical twins become phenotypically different as they age despite having identical DNA? Epigenetic marks (DNA methylation, histone modifications) are influenced by environmental factors (diet, stress, exercise, toxins) and accumulate differently over time, leading to divergent gene expression patterns.',
        apply: 'Studies of monozygotic (MZ) twins show they are epigenetically nearly identical at age 3 but increasingly different by age 50. Design an experiment to test whether the epigenetic differences in MZ twins aged 50 are correlated with lifestyle differences (diet, smoking, exercise). What samples would you collect, and what would you measure?',
        analyze: 'Compare the relative contributions of genotype and environment to three traits: blood group (fully genetic), height (strongly genetic but environment-modifiable), and language spoken (entirely environmental). Use these examples to explain why the nature vs nurture debate is a false dichotomy.',
        evaluate: 'Evaluate the evidence that epigenetic modifications acquired by parents can be inherited by their offspring. Consider the molecular mechanism (how could methylation marks survive reprogramming in the germline?), the Dutch Hunger Winter data, and the methodological challenges in distinguishing true epigenetic inheritance from genetic effects.',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-epi',
      data: {
        items: [
          { text: 'Understand phenotype results from both genotype and environment', checked: false },
          { text: 'Know DNA methylation (CpG, CpG islands) typically silences genes; histone acetylation activates', checked: false },
          { text: 'Can explain genomic imprinting and parent-of-origin effects on gene expression', checked: false },
          { text: 'Appreciate environmental factors (nutrition, stress) alter epigenetic marks', checked: false },
          { text: 'Know transgenerational epigenetic inheritance (Dutch Hunger Winter example)', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-epi',
      data: {
        text: 'Phenotype = genotype + environment. Epigenetics: heritable gene expression changes without DNA sequence alteration. DNA methylation: cytosine in CpG → -CH₃ (via DNMT), typically silences genes; CpG islands unmethylated in normal cells; abnormal hypermethylation silences tumour suppressors. Histone acetylation (HATs/HDACs) loosens chromatin, enables transcription; deacetylation silences. Histone methylation: H3K4me3 (active), H3K27me3 (repressed). Genomic imprinting: parent-specific expression via parent-specific methylation; e.g. IGF2 (paternal), H19 (maternal); loss causes disease (Prader-Willi, Angelman, Beckwith-Wiedemann). Environment influences epigenome: nutrition (methyl donors for methylation), stress (cortisol suppresses acetylation), temperature, light. Transgenerational inheritance: Dutch Hunger Winter—fetal famine → methylation of metabolic genes → lifelong obesity/metabolic disease risk; some changes inherited to F2.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-formula',
        prompt: 'Explain the formula "phenotype = genotype + environment" with an example.',
      },
      {
        id: 'cue-2',
        blockId: 'p-cpg-islands',
        prompt: 'Describe DNA methylation in CpG islands and how it affects gene expression and cancer.',
      },
      {
        id: 'cue-3',
        blockId: 'p-imprinting',
        prompt: 'What is genomic imprinting, and give an example of a parent-of-origin effect.',
      },
      {
        id: 'cue-4',
        blockId: 'p-famine-dutch',
        prompt: 'Explain the Dutch Hunger Winter example and how prenatal famine causes epigenetic changes with lifelong effects.',
      },
    ],
    summaryText: 'Phenotype = genotype + environment; height and intelligence show both genetic and environmental effects. Epigenetics: heritable expression changes without sequence changes. DNA methylation: -CH₃ on cytosine in CpG (via DNMT) silences genes; CpG islands unmethylated; abnormal hypermethylation silences tumour suppressors (two-hit hypothesis). Histone acetylation (HATs) loosens DNA-histone → active transcription; deacetylation (HDACs) silences. H3K4me3 (active), H3K27me3 (repressed). Genomic imprinting: parent-specific expression via parent-specific methylation; IGF2 (paternal active, maternal silent); loss → Prader-Willi, Angelman, Beckwith-Wiedemann. Environment: nutrition (methyl donors, folate), stress (cortisol, HDAC activation), temperature, light affect methylation and acetylation. Transgenerational inheritance: Dutch Hunger Winter (fetal malnutrition → IGF2 hypermethylation → thrifty metabolism → obesity, metabolic disease in adulthood and F2 generation).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Epigenetic Mechanisms in Fetal Programming',
      detail: 'Dutch Hunger Winter and Överkalix cohort studies show that environmental stress during fetal development alters DNA methylation patterns, causing lifelong metabolic disease risk and some evidence of transgenerational inheritance.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['epigenetics', 'fetal programming', 'transgenerational inheritance'],
    },
  ],
};
