export const note_biology_2_4_9 = {
  "blocks": [
    {
      "id": "obj-10",
      "type": "objective",
      "data": {
        "text": "Explain the Hardy-Weinberg principle and use its equations to calculate allele and genotype frequencies."
      }
    },
    {
      "id": "h-hw",
      "type": "heading",
      "data": {
        "text": "The Hardy-Weinberg Principle",
        "level": 2
      }
    },
    {
      "id": "p-hw",
      "type": "paragraph",
      "data": {
        "text": "The Hardy-Weinberg principle predicts that allele frequencies in a population will remain constant from one generation to the next, provided no evolutionary influences act upon them."
      }
    },
    {
      "id": "list-cond",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "For HW to apply, specific conditions must hold true:",
          "The population is large.",
          "Mating is completely random.",
          "There is no mutation.",
          "There is no natural selection (all genotypes are equally fit).",
          "There is no migration (no gene flow in or out)."
        ]
      }
    },
    {
      "id": "h-eqs",
      "type": "heading",
      "data": {
        "text": "The Two Equations",
        "level": 2
      }
    },
    {
      "id": "p-assump",
      "type": "paragraph",
      "data": {
        "text": "Assume a single gene with two alleles: dominant allele (p) and recessive allele (q)."
      }
    },
    {
      "id": "callout-eq1",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Allele Frequency Equation",
        "text": "p + q = 1\np = frequency of the dominant allele\nq = frequency of the recessive allele"
      }
    },
    {
      "id": "callout-eq2",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Genotype Frequency Equation",
        "text": "p² + 2pq + q² = 1\np² = frequency of homozygous dominant individuals\n2pq = frequency of heterozygous individuals\nq² = frequency of homozygous recessive individuals"
      }
    },
    {
      "id": "callout-calc",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Calculation Strategy",
        "text": "If a question states \"16% of the population suffers from the recessive disease\", that means q² = 0.16. From there, take the square root to find q (q = 0.4). Then use p = 1 - q to find p (p = 0.6). Finally, calculate 2pq to find the number of carriers."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-cond",
        "prompt": "Name three conditions required for the Hardy-Weinberg principle to be valid."
      },
      {
        "id": "cue-2",
        "blockId": "callout-calc",
        "prompt": "In the Hardy-Weinberg equation, what does \"2pq\" represent?"
      }
    ],
    "summaryText": "Hardy-Weinberg asserts allele frequencies stay constant if no selection/migration occurs in a large randomly-mating population. The equations p+q=1 and p²+2pq+q²=1 track allele and genotype proportions respectively.",
    "ready": true
  },
  "evidence": []
};
