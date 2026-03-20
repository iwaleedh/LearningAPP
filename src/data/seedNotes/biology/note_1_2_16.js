export const note_biology_1_2_16 = {
  "blocks": [
    {
      "id": "obj-17",
      "type": "objective",
      "data": {
        "text": "Understand inheritance, phenotypes, genotypes, and sex linkage."
      }
    },
    {
      "id": "h-terms",
      "type": "heading",
      "data": {
        "text": "Key Genetic Terms",
        "level": 2
      }
    },
    {
      "id": "list-terms",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Allele: An alternative version of a gene.",
          "Genotype: The genetic constitution of an organism (e.g., Bb).",
          "Phenotype: The observable characteristic resulting from the genotype and the environment.",
          "Dominant: An allele whose trait always shows up in the phenotype when present.",
          "Recessive: An allele whose trait only shows up if two copies are present (homozygous)."
        ]
      }
    },
    {
      "id": "h-sex-linkage",
      "type": "heading",
      "data": {
        "text": "Sex Linkage",
        "level": 2
      }
    },
    {
      "id": "p-sex",
      "type": "paragraph",
      "data": {
        "text": "Some genes are carried on the sex chromosomes (usually the X chromosome). Males have one X and one Y chromosome (XY), while females have two (XX). Because the Y chromosome is much smaller and lacks many genes found on the X, males only need one recessive allele to express a sex-linked trait, making them more likely to suffer from sex-linked conditions (like color blindness)."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-16-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 160' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='50' width='60' height='50' fill='#1e293b' stroke='#333'/><rect x='120' y='50' width='60' height='50' fill='#1e293b' stroke='#333'/><rect x='60' y='100' width='60' height='50' fill='#1e293b' stroke='#333'/><rect x='120' y='100' width='60' height='50' fill='#1e293b' stroke='#333'/><text x='85' y='40'>F</text><text x='145' y='40'>f</text><text x='40' y='80'>F</text><text x='40' y='130'>f</text><text x='75' y='80' font-weight='bold'>FF</text><text x='135' y='80' font-weight='bold'>Ff</text><text x='75' y='130' font-weight='bold'>Ff</text><text x='135' y='130' font-weight='bold'>ff</text><text x='200' y='100' font-size='11'>Ratio: 3 Dom : 1 Rec</text></svg>",
            "caption": "Monohybrid Punnett Square"
        }
    },
    {
        "id": "svg-diag-1-2-16-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='80' y='20' width='20' height='20' fill='#1e293b' stroke='#333'/><circle cx='180' cy='30' r='10' fill='#333'/><line x1='100' y1='30' x2='170' y2='30' stroke='#333' stroke-width='2'/><line x1='135' y1='30' x2='135' y2='60' stroke='#333' stroke-width='2'/><line x1='90' y1='60' x2='180' y2='60' stroke='#333' stroke-width='2'/><line x1='90' y1='60' x2='90' y2='80' stroke='#333' stroke-width='2'/><circle cx='90' cy='90' r='10' fill='#1e293b' stroke='#333'/><line x1='180' y1='60' x2='180' y2='80' stroke='#333' stroke-width='2'/><rect x='170' y='80' width='20' height='20' fill='#333'/><text x='210' y='35' font-size='10'>Affected Female</text><text x='210' y='90' font-size='10'>Affected Male</text></svg>",
            "caption": "Pedigree Chart Basics"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-terms",
        "prompt": "Define \"phenotype\"."
      },
      {
        "id": "cue-2",
        "blockId": "p-sex",
        "prompt": "Why are males more likely than females to show sex-linked recessive phenotypes?"
      }
    ],
    "summaryText": "Genotype dictates phenotype via dominant and recessive alleles. Males are more susceptible to X-linked recessive conditions because they only possess one X chromosome.",
    "ready": true
  },
  "evidence": []
};
