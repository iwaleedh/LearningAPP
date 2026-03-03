export const note_biology_5_8_13 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand genetic screening methods, pharmacogenomics, and the ethical issues surrounding personalised medicine and direct-to-consumer genetic testing.' },
      terms: ['pharmacogenomics', 'SNP', 'next-generation sequencing'],
    },
    {
      id: 'h-ngs',
      type: 'heading',
      data: { text: 'Next-Generation Sequencing (NGS)', level: 2 },
      terms: [],
    },
    {
      id: 'p-ngs',
      type: 'paragraph',
      data: { text: 'Next-generation sequencing (NGS) can sequence an entire human genome in hours at a cost of ~$200 (2024). Sequencing-by-synthesis: DNA is fragmented, adapters ligated, amplified, and millions of short reads sequenced simultaneously. Whole-genome sequencing (WGS) covers all 3 billion base pairs; whole-exome sequencing (WES) covers only the ~1.5% that codes for proteins. SNP arrays detect millions of single-nucleotide polymorphisms simultaneously and are used in genome-wide association studies (GWAS).' },
      terms: ['next-generation sequencing'],
    },
    {
      id: 'h-pgx',
      type: 'heading',
      data: { text: 'Pharmacogenomics', level: 2 },
      terms: [],
    },
    {
      id: 'p-pgx',
      type: 'paragraph',
      data: { text: 'Pharmacogenomics studies how genetic variation affects drug response. Cytochrome P450 enzymes (CYP450) in the liver metabolise most drugs. CYP2D6 variants: poor metabolisers (two non-functional alleles) — codeine not converted to morphine (ineffective); ultra-rapid metabolisers — dangerously high morphine levels. CYP2C19 variants affect clopidogrel (antiplatelet) activation. Warfarin dosing guided by CYP2C9 and VKORC1 genotypes. Personalised medicine aims to prescribe the right drug at the right dose for the right patient based on genotype.' },
      terms: ['pharmacogenomics'],
    },
    {
      id: 'callout-key-pgx',
      type: 'callout',
      data: {
        style: 'key',
        title: 'CYP2D6 and Codeine',
        text: 'Poor metabolisers (7% Europeans): codeine → no morphine → no pain relief. Ultra-rapid metabolisers (1-2%): codeine → excess morphine → respiratory depression risk. Genotyping before prescribing codeine prevents harm. FDA recommends against codeine in ultra-rapid metabolisers.',
      },
      terms: [],
    },
    {
      id: 'h-pgd',
      type: 'heading',
      data: { text: 'Preimplantation Genetic Diagnosis (PGD)', level: 2 },
      terms: [],
    },
    {
      id: 'p-pgd',
      type: 'paragraph',
      data: { text: 'PGD is performed during IVF: one or two cells are biopsied from a day-5 blastocyst and tested for specific gene mutations or chromosome abnormalities. Only unaffected embryos are transferred. Used for: single-gene disorders (CF, Huntington\'s, BRCA1/2), chromosomal translocations, aneuploidy screening. Advantages over prenatal diagnosis: avoids termination of pregnancy. Disadvantages: costly, lower IVF success rate, limited cells for testing.' },
      terms: [],
    },
    {
      id: 'h-dtc',
      type: 'heading',
      data: { text: 'Direct-to-Consumer Genetic Testing', level: 2 },
      terms: [],
    },
    {
      id: 'p-dtc',
      type: 'paragraph',
      data: { text: 'Companies like 23andMe and AncestryDNA offer saliva-based SNP testing for ancestry, traits, and disease risk (BRCA1/2, APOE ε4 for Alzheimer\'s risk). Issues: accuracy of risk predictions (polygenic risk scores have wide CIs), psychological impact of receiving risk information without counselling, data privacy (23andMe sold data to pharmaceutical companies), insurance discrimination risk, false reassurance if negative result.' },
      terms: [],
    },
    {
      id: 'table-screening',
      type: 'comparisonTable',
      data: {
        headers: ['Method', 'When performed', 'What detected', 'Advantage', 'Disadvantage'],
        rows: [
          ['Carrier screening', 'Pre-conception', 'Recessive alleles (CF, SMA)', 'Informs reproductive choices', 'Psychological burden'],
          ['PGD', 'During IVF', 'Specific mutations, aneuploidy', 'Avoids termination', 'Costly, IVF required'],
          ['CVS', '10–12 weeks', 'Chromosomal & gene mutations', 'Early result', '1% miscarriage risk'],
          ['Amniocentesis', '15–20 weeks', 'Chromosomal & gene mutations', 'Lower risk than CVS', 'Later result'],
          ['Newborn heel-prick', 'Day 5 after birth', 'PKU, hypothyroidism, SCD', 'Population-wide, cheap', 'Post-birth only'],
          ['Pharmacogenomics', 'Any time', 'Drug metabolism variants', 'Personalises treatment', 'Limited clinical uptake'],
        ],
        caption: 'Comparison of genetic screening methods',
      },
      terms: [],
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Ethical Framework',
        text: 'Always consider both sides: autonomy (right to know), beneficence (benefit to patient), non-maleficence (avoid harm), and justice (fair access). For 6-mark ethics questions, give 3 points for AND 3 points against, with specific examples.',
      },
      terms: [],
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does the same genetic variant cause different drug responses in different individuals? Drug metabolism involves multiple enzymes, transporters, and targets — each encoded by different genes. A variant in CYP2D6 only affects drugs metabolised by that enzyme. For other drugs, different CYP variants (CYP3A4, CYP2C19) or transporter genes (ABCB1) may be more relevant, making personalised dosing a complex multi-gene problem.',
        apply: 'A patient is prescribed clopidogrel (a prodrug activated by CYP2C19) after a heart attack. Genotyping reveals they are homozygous for the CYP2C19*2 loss-of-function allele (poor metaboliser). Predict the effect on clopidogrel efficacy and suggest an alternative antiplatelet drug. Calculate the probability that two heterozygous carriers (*1/*2) would have a poor metaboliser child.',
        analyze: 'Compare whole-genome sequencing (WGS) with SNP array genotyping in terms of: information content, cost, clinical utility, speed, and ability to detect rare variants. Which technology is more appropriate for newborn screening programmes, and which is better for research into complex disease genetics?',
        evaluate: 'Evaluate whether direct-to-consumer genetic testing should be regulated more strictly. Consider the benefits (patient empowerment, early disease detection, ancestry information), the risks (misinterpretation of probabilistic risk, psychological harm, data privacy, insurance discrimination), and whether the medical profession should act as gatekeepers to genetic information.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain how NGS and SNP arrays work and their clinical applications', checked: false },
          { text: 'I can explain how CYP2D6 variants affect codeine and morphine metabolism', checked: false },
          { text: 'I can describe PGD and compare it with prenatal diagnosis methods', checked: false },
          { text: 'I can evaluate the ethical issues around direct-to-consumer genetic testing', checked: false },
          { text: 'I can apply an ethical framework (autonomy, beneficence, justice) to genetic screening questions', checked: false },
        ],
      },
      terms: [],
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'NGS enables whole-genome sequencing at low cost. Pharmacogenomics matches drugs to genotype (CYP2D6 → codeine metabolism; CYP2C9/VKORC1 → warfarin dosing). PGD during IVF selects unaffected embryos before transfer. Direct-to-consumer testing raises concerns about data privacy, psychological impact, and insurance discrimination. Ethical frameworks (autonomy, beneficence, justice) must guide policy decisions about genetic testing access.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-pgx', prompt: 'How does CYP2D6 genotype affect codeine metabolism? Name two problematic genotypes and their consequences.' },
      { id: 'cue-2', blockId: 'p-pgd', prompt: 'Describe how PGD is performed during IVF and state two conditions it can detect.' },
      { id: 'cue-3', blockId: 'table-screening', prompt: 'Compare CVS and amniocentesis in terms of timing, risk, and what they can detect.' },
      { id: 'cue-4', blockId: 'p-dtc', prompt: 'State three ethical concerns about direct-to-consumer genetic testing.' },
    ],
    summaryText: 'NGS sequences entire genomes; pharmacogenomics (CYP2D6, CYP2C19) personalises drug prescribing; PGD selects healthy embryos during IVF; DTC testing raises privacy, psychological and insurance concerns.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Pharmacogenomics — CYP450 variants and drug metabolism', detail: 'CYP2D6 variants affecting codeine/morphine conversion are a key example of personalised medicine in clinical practice.', year: '2024', source: 'Edexcel IAL Biology WBI15 Specification', tags: ['pharmacogenomics', 'genetics', 'personalised medicine'] },
  ],
};
