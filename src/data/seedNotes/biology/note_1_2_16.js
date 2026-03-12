export const note_biology_1_2_16 = {
  blocks: [
    {
      id: 'obj-monohybrid',
      type: 'objective',
      data: {
        text: 'Apply Mendelian monohybrid inheritance to predict offspring ratios. Distinguish between dominant, recessive, codominant, and multiple allele systems. Explain sex linkage and apply it to X-linked inheritance. Construct and interpret Punnett squares for genetic crosses.',
      },
    },
    {
      id: 'h-key-terms',
      type: 'heading',
      data: { text: 'Key Genetic Terms', level: 2 },
    },
    {
      id: 'table-key-terms',
      type: 'comparisonTable',
      data: {
        caption: 'Essential genetics vocabulary',
        headers: ['Term', 'Definition'],
        rows: [
          ['Gene', 'A section of DNA (sequence of base triplets) that codes for one or more polypeptides'],
          ['Allele', 'One of two or more alternative forms of a gene that occupy the same locus on homologous chromosomes'],
          ['Locus', 'The specific position/location of a gene on a chromosome'],
          ['Genotype', 'The combination of alleles present in an organism (e.g. Aa, BB, cf/cf)'],
          ['Phenotype', 'The observable characteristics determined by genotype AND environment'],
          ['Dominant', 'Allele that is expressed in both homozygous (AA) and heterozygous (Aa) state; masks the recessive allele'],
          ['Recessive', 'Allele that is only expressed in the homozygous recessive state (aa); masked by dominant in heterozygotes'],
          ['Homozygous', 'Both alleles at a locus are identical (AA or aa)'],
          ['Heterozygous', 'Two different alleles at a locus (Aa) — also called a carrier if the recessive allele causes disease'],
          ['Codominance', 'Both alleles are expressed equally in the heterozygote (e.g. ABO blood groups type AB; sickle cell trait — normal + sickle Hb both present)'],
          ['Multiple alleles', 'More than two alleles exist in the population for one gene (though any individual can only carry two) — e.g. ABO blood groups have alleles I^A, I^B, i'],
        ],
      },
    },
    {
      id: 'h-monohybrid',
      type: 'heading',
      data: { text: 'Monohybrid Inheritance', level: 2 },
    },
    {
      id: 'p-monohybrid',
      type: 'paragraph',
      data: {
        text: 'Monohybrid inheritance involves ONE gene with two alleles. Mendel\'s First Law (Law of Segregation) states: the two alleles of each gene separate during gamete formation, each gamete carrying one allele. A Punnett square predicts the probability of offspring genotypes.',
      },
    },
    {
      id: 'callout-worked-autosomal-recessive',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — CF (Autosomal Recessive)',
        text: 'CF: F = normal allele (functional CFTR), f = CF allele (non-functional CFTR)\nBoth parents are carriers: genotype Ff × Ff\n\nPunnett square:\n         F        f\n    F | FF    | Ff\n    f | Ff    | ff\n\nGenotype ratio: 1 FF : 2 Ff : 1 ff\nPhenotype ratio: 3 unaffected (FF + Ff) : 1 affected (ff)\n→ 25% probability each pregnancy will produce an affected child\n→ 50% probability child will be a carrier\n\nKey: FF = homozygous dominant (unaffected, non-carrier)\n     Ff = heterozygous (unaffected carrier)\n     ff = homozygous recessive (has CF)',
      },
    },
    {
      id: 'callout-worked-codominance',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Sickle Cell Anaemia (Codominance)',
        text: 'HbA = normal haemoglobin allele, HbS = sickle haemoglobin allele (codominant)\nParent cross: HbA HbS × HbA HbS (both carriers)\n\n            HbA         HbS\n  HbA  | HbA HbA  | HbA HbS\n  HbS  | HbA HbS  | HbS HbS\n\nPhenotype ratio: 1 normal : 2 sickle cell trait (carriers, both Hb expressed) : 1 sickle cell anaemia\n→ In codominance, heterozygotes show BOTH phenotypes (have both types of haemoglobin)',
      },
    },
    {
      id: 'h-sex-linkage',
      type: 'heading',
      data: { text: 'Sex Linkage and X-Linked Inheritance', level: 2 },
    },
    {
      id: 'p-sex-determination',
      type: 'paragraph',
      data: {
        text: 'Humans have 23 pairs of chromosomes: 22 pairs of autosomes and 1 pair of sex chromosomes (females: XX; males: XY). The short arm of the Y chromosome has very few genes, so genes on the X chromosome that are absent from Y are described as X-linked. Males have only one copy of X-linked genes — they are hemizygous — so a single recessive allele on the X chromosome is expressed (since there is no corresponding allele on Y to mask it).',
      },
    },
    {
      id: 'callout-worked-haemophilia',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Haemophilia A (X-linked Recessive)',
        text: 'Haemophilia A: gene for clotting Factor VIII is on X chromosome.\nAlleles: X^H = normal (dominant), X^h = haemophilia (recessive)\n\nCarrier mother (X^H X^h) × Normal father (X^H Y)\n\n           X^H       X^h\n  X^H  | X^H X^H | X^H X^h\n   Y   | X^H Y   | X^h Y\n\nFemale offspring: 50% normal (X^H X^H), 50% carriers (X^H X^h) — all unaffected\nMale offspring: 50% normal (X^H Y), 50% haemophiliac (X^h Y)\n\nKey observations:\n• Haemophilia almost exclusively affects males\n• Females are usually carriers not affected (need two copies of X^h)\n• Father CANNOT pass haemophilia to sons (sons get Y from father)\n• Carrier mother passes condition to sons with 50% probability',
      },
    },
    {
      id: 'table-autosomal-sex-linked',
      type: 'comparisonTable',
      data: {
        caption: 'Autosomal vs. X-linked inheritance — key differences',
        headers: ['Feature', 'Autosomal recessive', 'X-linked recessive'],
        rows: [
          ['Affected ratio M:F', 'Approximately 1:1', 'Predominantly males affected'],
          ['Carrier status', 'Males and females can be carriers', 'Females can be carriers (X^H X^h); males cannot be carriers (are either X^H Y or X^h Y — hemizygous)'],
          ['Father → son transmission', 'Yes — 50% chance if father is Aa', 'No — father passes Y to son, not X'],
          ['Mother → son', 'Yes — 50% if mother is Aa', 'Yes — X-linked gene on maternal X. Carrier mother gives 50% chance affected son'],
          ['Examples', 'CF, PKU, albinism, sickle cell', 'Haemophilia A and B, Duchenne muscular dystrophy, red-green colour blindness'],
        ],
      },
    },
    {
      id: 'h-abo',
      type: 'heading',
      data: { text: 'Multiple Alleles — ABO Blood Groups', level: 2 },
    },
    {
      id: 'p-abo',
      type: 'paragraph',
      data: {
        text: 'The ABO blood group system is controlled by a single gene (I gene) with three alleles: I^A, I^B, and i. I^A and I^B are codominant to each other; both are dominant over i. This gives rise to four phenotypes from six possible genotypes. Blood groups are important in transfusions — mismatching leads to agglutination (immune attack on transfused cells).',
      },
    },
    {
      id: 'table-abo',
      type: 'comparisonTable',
      data: {
        caption: 'ABO blood group system',
        headers: ['Blood group (phenotype)', 'Possible genotypes', 'Antigens on RBCs', 'Antibodies in plasma'],
        rows: [
          ['A', 'I^A I^A or I^A i', 'A antigen', 'Anti-B antibodies'],
          ['B', 'I^B I^B or I^B i', 'B antigen', 'Anti-A antibodies'],
          ['AB', 'I^A I^B', 'A and B antigens (codominance)', 'Neither (universal recipient)'],
          ['O', 'ii', 'Neither', 'Anti-A and Anti-B antibodies (universal donor)'],
        ],
      },
    },
    {
      id: 'checklist-monohybrid',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define: gene, allele, locus, genotype, phenotype, dominant, recessive, codominance', checked: false },
          { text: 'Construct and interpret a Punnett square for an autosomal recessive cross (e.g. CF)', checked: false },
          { text: 'Explain why males are more commonly affected by X-linked recessive conditions', checked: false },
          { text: 'Construct and interpret a Punnett square for an X-linked recessive cross (e.g. haemophilia)', checked: false },
          { text: 'Explain codominance using haemoglobin or ABO blood groups as an example', checked: false },
          { text: 'State the three alleles of the ABO blood group system and explain the phenotype of each genotype', checked: false },
        ],
      },
    },
    {
      id: 'summary-monohybrid',
      type: 'summary',
      data: {
        text: 'Monohybrid inheritance: one gene, Punnett square predicts offspring ratios. Autosomal recessive (e.g. CF): 3 unaffected : 1 affected from two carriers. Codominance: both alleles expressed in heterozygote (sickle cell trait). X-linked recessive: gene on X chromosome; males are hemizygous — only one recessive allele needed to express condition; females can be carriers. ABO blood groups: three alleles (I^A, I^B codominant; both dominant over i); four phenotypes. Haemophilia A = X-linked recessive; carrier females pass condition to 50% of sons.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-key-terms', prompt: 'Distinguish between: genotype and phenotype; homozygous and heterozygous; dominant and recessive.' },
      { id: 'cue-2', blockId: 'callout-worked-autosomal-recessive', prompt: 'Two carriers of CF (Ff × Ff) have children. Draw a Punnett square and state the probability of having an affected child.' },
      { id: 'cue-3', blockId: 'p-sex-determination', prompt: 'Why are males more likely to be affected by X-linked recessive conditions than females?' },
      { id: 'cue-4', blockId: 'callout-worked-haemophilia', prompt: 'A carrier woman (X^H X^h) has children with a normal man. What is the probability that a son will have haemophilia A?' },
      { id: 'cue-5', blockId: 'table-abo', prompt: 'A person with blood group A (genotype I^A i) and a person with blood group B (genotype I^B i) have children. What blood groups are possible in the children?' },
    ],
    summaryText: 'Monohybrid: Punnett squares for autosomal recessive (3:1 from carriers), codominance (both alleles expressed in heterozygote), X-linked recessive (males hemizygous → mostly boys affected). CF: Ff × Ff → 25% ff (affected). Haemophilia A: carrier X^H X^h → 50% sons affected. ABO: I^A and I^B codominant; both dominant over i → 4 phenotypes (A, B, AB, O).',
    ready: false,
  },
  evidence: [],
};
