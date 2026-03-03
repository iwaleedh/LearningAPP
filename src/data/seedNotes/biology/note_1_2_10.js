export const note_biology_1_2_10 = {
  blocks: [
    {
      id: 'obj-inheritance',
      type: 'objective',
      data: {
        text: 'Understand monohybrid inheritance, dominance, codominance, and sex-linked traits, including pedigree analysis.'
      }
    },
    {
      id: 'h-monohybrid',
      type: 'heading',
      data: {
        text: 'Monohybrid Inheritance',
        level: 2
      }
    },
    {
      id: 'p-monohybrid-def',
      type: 'paragraph',
      data: {
        text: 'Monohybrid inheritance involves a single gene with two or more alleles (alternative forms). An allele is a variant of a gene; e.g. the gene for pea plant seed colour has two common alleles: Y (yellow, dominant) and y (green, recessive). An organism\'s genotype is its genetic makeup (e.g. YY, Yy, yy); its phenotype is the observable trait (e.g. yellow or green). Dominant alleles are expressed in both homozygous (AA) and heterozygous (Aa) states; recessive alleles are only expressed when homozygous (aa). A test cross is a cross between an individual with the dominant phenotype (could be AA or Aa) and a homozygous recessive (aa). If the dominant individual is AA, all offspring are Aa (dominant phenotype). If the dominant individual is Aa, offspring are 1 Aa (dominant): 1 aa (recessive). This 1:1 ratio confirms the heterozygous genotype.'
      }
    },
    {
      id: 'p-punnett-square',
      type: 'paragraph',
      data: {
        text: 'A Punnett square is a grid used to predict offspring genotypes from known parental genotypes. The alleles from one parent are listed along the top; alleles from the other parent along the side. Each cell is filled with the allele combination that results. Example: cross Yy (yellow) × yy (green). Punnett square shows 50% Yy (yellow) and 50% yy (green). For a dihybrid cross (two genes), a 4×4 grid is used. Punnett squares show expected phenotypic ratios under Mendelian inheritance (assuming independent assortment and complete dominance).'
      }
    },
    {
      id: 'h-codominance',
      type: 'heading',
      data: {
        text: 'Codominance and ABO Blood Groups',
        level: 2
      }
    },
    {
      id: 'p-codominance',
      type: 'paragraph',
      data: {
        text: 'Codominance occurs when both alleles are fully expressed in the heterozygote, producing an intermediate or new phenotype. The classic example is ABO blood groups. Three alleles exist: I^A (produces A antigen), I^B (produces B antigen), and i (produces neither). Dominance relationships: I^A and I^B are codominant with each other; both are dominant over i. Genotypes and phenotypes: I^AI^A or I^Ai → Type A blood (A antigen); I^BI^B or I^Bi → Type B blood (B antigen); I^AI^B → Type AB blood (both A and B antigens, codominant); ii → Type O blood (neither antigen). In ABO, the heterozygote I^AI^B expresses both antigens; this is codominance. This is different from dominance, where Aa would show only the dominant phenotype.'
      }
    },
    {
      id: 'h-sex-linked',
      type: 'heading',
      data: {
        text: 'Sex-Linked Inheritance',
        level: 2
      }
    },
    {
      id: 'p-sex-linked-def',
      type: 'paragraph',
      data: {
        text: 'Sex-linked traits are controlled by genes on the sex chromosomes, typically the X chromosome. Females are XX; males are XY. Since males have only one X, they express all X-linked alleles (hemizygous). Females have two X chromosomes and can be homozygous or heterozygous. X-linked traits are typically recessive (e.g. colour blindness, haemophilia). Examples: (1) Colour blindness: allele X^C (normal vision) is dominant over X^c (colour blind). Females: X^CX^C (normal), X^CX^c (carrier, normal vision), X^cX^c (colour blind, rare). Males: X^CY (normal), X^cY (colour blind). A colour-blind female (X^cX^c) is rare because she needs two copies of the recessive allele; affected males are much more common. (2) Haemophilia A: X^H (normal clotting) dominant over X^h (haemophilia). Males X^hY are haemophilic; females usually are not (unless rare homozygous X^hX^h). Carrier females (X^HX^h) have normal clotting but can pass the allele to offspring.'
      }
    },
    {
      id: 'p-carrier-females',
      type: 'paragraph',
      data: {
        text: 'A carrier female is heterozygous for a recessive X-linked trait; she expresses the dominant allele and is phenotypically normal but carries the recessive allele. A carrier female can pass the recessive allele to her children: 50% of sons will be affected (X^hY), 50% of daughters will be carriers (X^HX^h) if the father is normal (X^HY). If a carrier female (X^HX^h) mates with an affected male (X^hY), 50% of sons are affected (X^hY) and 50% are normal (X^HY); 50% of daughters are carriers (X^HX^h) and 50% are affected (X^hX^h). This inheritance pattern (skipping generations, more affected males than females, affected females rare) is characteristic of X-linked recessive traits.'
      }
    },
    {
      id: 'table-sex-linked',
      type: 'comparisonTable',
      data: {
        headers: ['Genotype', 'Female (XX)', 'Male (XY)', 'Phenotype'],
        rows: [
          ['Homozygous dominant', 'X^AX^A', 'X^AY', 'Normal'],
          ['Heterozygous', 'X^AX^a', 'N/A', 'Normal (carrier)'],
          ['Homozygous recessive', 'X^aX^a', 'X^aY', 'Affected/colour blind'],
          ['Hemizygous', 'N/A', 'X^aY', 'Affected (males only; all X^a males affected)']
        ],
        caption: 'X-linked inheritance patterns'
      }
    },
    {
      id: 'h-pedigree',
      type: 'heading',
      data: {
        text: 'Pedigree Analysis',
        level: 2
      }
    },
    {
      id: 'p-pedigree',
      type: 'paragraph',
      data: {
        text: 'A pedigree is a family tree showing inheritance of a trait across generations. Symbols: squares = males, circles = females. Filled shapes = affected individuals; unfilled = normal; half-filled = carriers. A horizontal line between two individuals indicates a mating. A vertical line from the mating line connects to offspring (siblings are connected horizontally). Roman numerals (I, II, III) denote generations. Pedigree analysis can determine inheritance pattern: autosomal dominant (appears in every generation, both sexes equally, unaffected parents can have affected children if both are carriers), autosomal recessive (skips generations, both sexes equally, usually appears when parents are carriers or both affected), X-linked recessive (more affected males than females, affected males have carrier mothers, no male-to-male transmission).'
      }
    },
    {
      id: 'callout-worked-pedigree',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Interpreting a Pedigree: X-Linked Recessive',
        text: 'A pedigree shows an affected male (I-1, X^hY) and normal female (I-2, X^HX^H). Their daughters (II) are all carriers (X^HX^h) and phenotypically normal. Sons would be normal (X^HY). Generation II: a carrier female (X^HX^h) mates with normal male (X^HY). Their children: 50% sons affected (X^hY), 50% normal (X^HY); 50% daughters carriers (X^HX^h), 50% normal (X^HX^H). Affected daughters only appear if father is affected AND mother is carrier/affected—rare for X-linked recessive.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why are males more commonly affected by X-linked recessive conditions than females? Explain in terms of genotype: males are hemizygous (XY) and have only one X chromosome, so a single recessive allele on the X is expressed, whereas females need two copies (homozygous recessive XX) to express the condition.',
        apply: 'Two carriers of cystic fibrosis (Cc × Cc) have four children. Draw a Punnett square and calculate the probability that all four children are unaffected. Then calculate the probability that exactly one child has CF.',
        analyze: 'Compare codominance (ABO blood groups) with incomplete dominance and with simple dominance/recessiveness. Give an example of each, explain the molecular basis where possible, and explain why the concept of \'dominant\' and \'recessive\' is a simplification.',
        evaluate: 'Evaluate the ethical implications of genetic testing for autosomal recessive conditions like cystic fibrosis before and during pregnancy. Consider benefits (informed decisions), risks (psychological impact, discrimination), and autonomy versus paternalism.',
      },
      terms: [],
    },
    {
      id: 'checklist-inheritance',
      type: 'checklist',
      data: {
        items: [
          { text: 'Genotype: genetic makeup (AA, Aa, aa); phenotype: observable trait', checked: false },
          { text: 'Dominant allele expressed in AA and Aa; recessive only in aa', checked: false },
          { text: 'Test cross (dominant × homozygous recessive) reveals if dominant is AA or Aa', checked: false },
          { text: 'Codominance: heterozygote shows both phenotypes (ABO: AB blood)', checked: false },
          { text: 'X-linked recessive: more affected males; affected females rare; no male-to-male transmission', checked: false }
        ]
      }
    },
    {
      id: 'summary-inheritance',
      type: 'summary',
      data: {
        text: 'Monohybrid inheritance involves one gene; dominant/recessive determine phenotype. Test cross (dominant × homozygous recessive) reveals genotype. Punnett squares predict offspring ratios. Codominance (ABO blood groups) shows both alleles in heterozygote. X-linked traits (colour blindness, haemophilia) are on X chromosome; males (XY) are hemizygous, expressing all X-linked alleles; females (XX) can be homozygous or heterozygous. X-linked recessive: more affected males, affected females rare, carrier females possible. Pedigrees show inheritance patterns across families; analysis reveals dominant/recessive and autosomal/sex-linked.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-monohybrid-def',
        prompt: 'Explain genotype vs phenotype. What is a test cross and what does it reveal?'
      },
      {
        id: 'cue-2',
        blockId: 'p-codominance',
        prompt: 'What is codominance? Describe ABO blood group inheritance.'
      },
      {
        id: 'cue-3',
        blockId: 'p-sex-linked-def',
        prompt: 'Explain X-linked inheritance. Why are affected females rare for recessive traits?'
      },
      {
        id: 'cue-4',
        blockId: 'p-carrier-females',
        prompt: 'What is a carrier female? What are the possible offspring from a carrier female × normal male?'
      },
      {
        id: 'cue-5',
        blockId: 'p-pedigree',
        prompt: 'How do you read a pedigree? What patterns indicate autosomal recessive vs X-linked recessive?'
      }
    ],
    summaryText: 'Genotype (genes) vs phenotype (trait). Dominant expressed AA/Aa; recessive aa. Test cross (dominant × aa) reveals if dominant AA or Aa. Punnett square predicts offspring. Codominance (ABO): I^AI^B → AB (both antigens). Sex-linked (X chromosome): females XX, males XY (hemizygous). X-linked recessive (colour blindness, haemophilia): more affected males; affected females rare (X^aX^a); carriers (X^AX^a) normal phenotype. Pedigree: autosomal recessive skips generations, both sexes; X-linked more males, no male-to-male transmission.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Inheritance Patterns and Genetics',
      detail: 'Monohybrid inheritance, codominance, sex-linked traits, and pedigree analysis.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['inheritance', 'monohybrid', 'codominance', 'sex-linked', 'pedigree', 'test-cross']
    }
  ]
};
