export const note_biology_2_3_8 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-gene-expr',
      data: {
        text: 'Understand how differential gene expression leads to cell specialisation, the role of transcription factors and promoter regions, and how environmental factors influence gene expression.',
      },
    },
    {
      type: 'heading',
      id: 'h-same-dna',
      data: { text: 'Same Genotype, Different Phenotypes', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-same-dna',
      data: {
        text: 'All somatic cells in a multicellular organism contain identical DNA (with rare exceptions like immune cells). Yet a neuron, muscle cell, and pancreatic beta cell are strikingly different in structure and function. This diversity arises from differential gene expression: although the same genes are present in all cells, different sets of genes are activated or repressed in different cell types. A neuron expresses genes for neurotransmitters and ion channels; a muscle cell expresses genes for contractile proteins (actin, myosin); a beta cell expresses genes for insulin and glucose-sensing enzymes. This selective gene expression determines cell morphology and function.',
      },
    },
    {
      type: 'heading',
      id: 'h-transcription-factors',
      data: { text: 'Transcription Factors and Gene Regulation', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-tf-def',
      data: {
        text: 'Transcription factors (TFs) are proteins that bind to specific DNA sequences (usually near genes) and regulate whether those genes are transcribed into mRNA. TFs can be activators (increase transcription) or repressors (decrease transcription). Each TF recognises a specific DNA sequence called a binding site or motif (typically 6–12 base pairs long). The promoter is the DNA region immediately upstream (5\' direction) of a gene where RNA polymerase binds to initiate transcription. In eukaryotes, the promoter typically contains a TATA box (consensus sequence TATAAA) located ~25–30 base pairs upstream of the transcription start site (+1). Transcription factors bind to the promoter or nearby regions, facilitating or blocking RNA polymerase access.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-tf-mechanism',
      data: {
        text: 'The mechanism of transcriptional regulation: Activator TFs bind to promoter or enhancer regions; their DNA-binding domain contacts the DNA, and their activation domain recruits and stabilizes the transcription machinery (RNA polymerase II, general TFs, mediator complex). This increases the rate of transcription initiation. Repressor TFs bind to silencer regions or compete with activators for binding sites; they block RNA polymerase access or recruit chromatin-modifying enzymes that condense the DNA, making it inaccessible. The specificity of gene expression depends on which combination of TFs is present in a given cell. During development, morphogen gradients (e.g. bicoid in Drosophila) establish positional information: cells at different positions experience different TF concentrations, activating different developmental genes.',
      },
    },
    {
      type: 'heading',
      id: 'h-enhancers-silencers',
      data: { text: 'Enhancers and Silencers', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-enhancers',
      data: {
        text: 'Enhancers are regulatory DNA sequences (typically 50–1500 base pairs) that increase transcription of a gene. Enhancers can be located thousands of base pairs away from the promoter, upstream, downstream, or within introns. Despite their distance, enhancers function by DNA looping: transcription factors bound at the enhancer interact with factors at the promoter via three-dimensional folding of the DNA, bringing them into physical contact. Tissue-specific enhancers are "on" in specific cell types; for example, the enhancer for the insulin gene is active in pancreatic beta cells but silent in neurons. Silencers are regulatory sequences that decrease transcription; they function similarly to enhancers but recruit repressor proteins instead of activators.',
      },
    },
    {
      type: 'heading',
      id: 'h-epigenetics',
      data: { text: 'Epigenetic Regulation: DNA Methylation and Histone Modification', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-methylation',
      data: {
        text: 'DNA methylation involves adding a methyl group (-CH₃) to cytosine residues in CpG dinucleotides (cytosine followed by guanine). Methylation is catalysed by DNA methyltransferase (DNMT) enzymes and is typically associated with gene silencing. Highly methylated promoter regions prevent transcription factor binding and recruit proteins that compact chromatin, making genes inaccessible. CpG islands (regions rich in CpG sequences, typically at gene promoters) are usually unmethylated in normal cells, allowing gene expression. Abnormal hypermethylation of CpG islands in tumour suppressor genes (e.g. VHL, BRCA1) causes their silencing, contributing to cancer development. In contrast, hypomethylation in other regions can activate oncogenes.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-histone-mod',
      data: {
        text: 'Histone acetylation and methylation regulate chromatin structure and gene expression. Histone acetylation (addition of acetyl groups to lysine residues on histones H3 and H4) loosens DNA-histone interactions, creating an open, accessible chromatin state (euchromatin) associated with active transcription. Histone deacetylases (HDACs) remove acetyl groups, promoting a closed, condensed state (heterochromatin) associated with gene silencing. Histone methylation can activate or repress genes depending on which lysine residue is methylated: H3K4me3 (histone H3, lysine 4, trimethylated) marks active promoters (activation mark), while H3K27me3 marks silenced genes (repression mark).',
      },
    },
    {
      type: 'heading',
      id: 'h-environment',
      data: { text: 'Environmental Influences on Gene Expression', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-env-factors',
      data: {
        text: 'Gene expression responds dynamically to environmental signals. Nutrients, hormones, temperature, stress, and light influence which genes are activated or repressed. For example: (1) Nutrients—starvation activates genes for autophagy and metabolic adaptation; glucose availability affects insulin gene expression in beta cells. (2) Hormones—oestrogen activates oestrogen receptor target genes in reproductive tissues; cortisol (stress hormone) suppresses immune genes. (3) Temperature—heat shock factors (HSF) activate heat shock protein genes (Hsp70, Hsp90) to protect proteins from denaturation. (4) Stress—oxidative stress activates antioxidant genes (SOD, catalase); psychological stress affects cortisol-responsive genes in the brain. (5) Light—in plants, phytochrome senses light and activates photomorphogenic genes; in animals, light regulates circadian clock genes (PER, CRY).',
      },
    },
    {
      type: 'heading',
      id: 'h-phenotypic-plasticity',
      data: { text: 'Phenotypic Plasticity', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-plasticity',
      data: {
        text: 'Phenotypic plasticity is the ability of a single genotype to produce multiple phenotypes in response to environmental conditions, via differential gene expression. A classic example is the tadpole: thyroid hormone (T₃) activates metamorphosis genes, causing tadpole-to-frog transformation (gene expression for tail regression, lung development, limb growth). Without thyroid hormone, tadpoles remain in larval form indefinitely. Another example is Dutch hunger winter (1944–45): fetuses and infants exposed to severe malnutrition showed altered gene methylation (especially metabolic genes), predisposing them to obesity and metabolic disease decades later (Barker hypothesis). This demonstrates how environmental stress during critical developmental windows can epigenetically reprogram gene expression with lifelong consequences.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-diff-expr',
      data: {
        style: 'key',
        title: 'Central Dogma of Differentiation',
        text: 'Identical DNA + Different TFs + Different Epigenetic State = Different Cell Types. Neuron and muscle cell both contain insulin genes, but insulin is silent in both (via methylation and repressor TFs). The insulin gene is active only in pancreatic beta cells, where beta-cell-specific TFs (NeuroD1, PDX1) activate it. This exemplifies how transcriptional and epigenetic regulation creates cellular diversity from a single genome.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-enhancers',
      data: {
        style: 'tip',
        title: 'Remember: Enhancers Can Be Distant',
        text: 'Enhancers don\'t need to be immediately adjacent to genes. They can be thousands of base pairs away, in introns, or even downstream. They work via DNA looping, bringing regulatory proteins into contact with the promoter. This 3D genome organisation is crucial for complex gene regulation.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why do all cells in an organism contain the same DNA but express different genes? Transcription factors bind to promoter and enhancer sequences to activate specific genes; epigenetic modifications (DNA methylation silences, histone acetylation activates) create heritable patterns of gene expression without altering DNA sequence.',
        apply: 'A liver cell expresses albumin but not haemoglobin. A red blood cell precursor expresses haemoglobin but not albumin. Both contain identical DNA. Explain how this specificity is achieved, naming at least three molecular mechanisms that could account for the difference.',
        analyze: 'Compare the roles of transcription factors, DNA methylation, and histone acetylation in controlling gene expression. Which mechanism is most heritable, and which is most rapidly reversible in response to environmental signals?',
        evaluate: 'Evaluate the evidence that environmental factors (diet, stress, pollution) can alter epigenetic marks and affect gene expression. Consider the Dutch Hunger Winter study, and discuss whether epigenetic changes acquired during a lifetime can be transmitted to offspring (transgenerational epigenetics).',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-gene-expr',
      data: {
        items: [
          { text: 'Understand differential gene expression produces different cell types from identical genotype', checked: false },
          { text: 'Know transcription factors bind to promoter/enhancer sequences and activate or repress genes', checked: false },
          { text: 'Can explain enhancers and silencers, including their distance from promoters', checked: false },
          { text: 'Understand DNA methylation and histone modifications regulate chromatin and gene expression', checked: false },
          { text: 'Appreciate how environmental factors (nutrients, hormones, stress, light) influence gene expression', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-gene-expr',
      data: {
        text: 'All somatic cells have identical DNA; cell specialisation results from differential gene expression. Transcription factors (activators/repressors) bind promoter/enhancer regions to regulate transcription; promoter contains TATA box (~25–30 bp upstream). Enhancers can be distant but function via DNA looping to contact promoters. Epigenetic regulation: DNA methylation (typically silencing), histone acetylation (activation, euchromatin), histone methylation (activation or repression marks). Environmental signals (nutrients, hormones, temperature, stress, light) alter gene expression via epigenetic changes and TF activation. Phenotypic plasticity: single genotype produces multiple phenotypes in different environments (tadpole metamorphosis, Dutch Hunger Winter fetal programming).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-same-dna',
        prompt: 'How can identical DNA in all cells lead to different cell types like neurons and muscle cells?',
      },
      {
        id: 'cue-2',
        blockId: 'p-tf-def',
        prompt: 'What are transcription factors, and what is a promoter region?',
      },
      {
        id: 'cue-3',
        blockId: 'p-enhancers',
        prompt: 'How do enhancers regulate gene expression despite being far from the promoter?',
      },
      {
        id: 'cue-4',
        blockId: 'p-histone-mod',
        prompt: 'Explain how histone acetylation and methylation affect gene expression.',
      },
      {
        id: 'cue-5',
        blockId: 'p-plasticity',
        prompt: 'Give an example of phenotypic plasticity and explain the molecular basis.',
      },
    ],
    summaryText: 'Differential gene expression: same DNA, different TFs active in each cell type produce neuron, muscle, beta cell phenotypes. TFs are activators/repressors binding promoter/enhancer sequences; promoter contains TATA box. Enhancers can be distant, work via DNA looping bringing regulatory proteins to promoter. Epigenetics: DNA methylation (CpG, usually silencing), histone acetylation (active, euchromatin), histone methylation (H3K4me3 active, H3K27me3 repressed). Environment influences expression: nutrients (autophagy, insulin), hormones (oestrogen, cortisol), temperature (heat shock proteins), stress (antioxidants), light (circadian genes). Phenotypic plasticity: tadpole metamorphosis (thyroid hormone), Dutch Hunger Winter (fetal malnutrition → epigenetic reprogramming → lifelong metabolic effects).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Differential Gene Expression in Cell Specialisation',
      detail: 'Gene expression studies (RNA-seq, ChIP-seq) show distinct transcriptional profiles in different cell types, confirming that cell identity is determined by which genes are expressed, regulated by TFs and epigenetic marks.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['gene expression', 'cell differentiation', 'transcription'],
    },
  ],
};
