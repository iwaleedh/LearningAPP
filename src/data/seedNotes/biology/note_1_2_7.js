export const note_biology_1_2_7 = {
  blocks: [
    {
      id: 'obj-dna-replication',
      type: 'objective',
      data: {
        text: 'Understand DNA replication mechanism, semi-conservative replication, and the Meselson-Stahl experiment proving it.'
      }
    },
    {
      id: 'h-replication-mechanism',
      type: 'heading',
      data: {
        text: 'DNA Replication Mechanism',
        level: 2
      }
    },
    {
      id: 'p-helicase',
      type: 'paragraph',
      data: {
        text: 'DNA replication is semi-conservative: each strand of the parental double helix serves as a template for a new complementary strand. The process begins at origins of replication (ORIs) where helicase enzyme unwinds the double helix, breaking hydrogen bonds between bases. This unwinding creates a replication fork—a Y-shaped structure where new DNA synthesis occurs. Unwound single-stranded DNA (ssDNA) is protected by single-strand binding proteins (SSB proteins) to prevent re-annealing and secondary structure formation. Topoisomerases relieve the tension created by unwinding (supercoiling) ahead of the replication fork, allowing helicase to continue unwinding.'
      }
    },
    {
      id: 'p-polymerase',
      type: 'paragraph',
      data: {
        text: 'DNA polymerase III (the main replicative enzyme in bacteria; DNA Pol α/δ/ε in eukaryotes) synthesises new DNA by adding nucleotides to the 3\'-OH group of the growing strand, extending 5\' → 3\'. The enzyme reads the template strand 3\' → 5\' and adds complementary nucleotides. Nucleotides are selected with high fidelity: Watson-Crick base pairing (A−T, G−C) is geometrically favourable; mismatches are rare (~1 error per 10⁷ nucleotides before proofreading). DNA polymerase has 3\' → 5\' exonuclease activity (proofreading): it can remove mismatched nucleotides and continue synthesis, reducing errors to ~1 per 10⁹. Synthesis requires a primer—a short RNA or DNA sequence to which the polymerase adds nucleotides. Primase synthesises ~10 nt RNA primers to start synthesis.'
      }
    },
    {
      id: 'p-leading-lagging',
      type: 'paragraph',
      data: {
        text: 'DNA replication presents a directionality problem: the two template strands run antiparallel, but DNA polymerase only synthesises 5\' → 3\'. The leading strand is synthesised continuously in the 5\' → 3\' direction, following the replication fork. The lagging strand must be synthesised 5\' → 3\' as well, but this is in the opposite direction of fork movement. Solution: the lagging strand is synthesised as short ~1000 nt fragments (Okazaki fragments in eukaryotes; ~1000–2000 nt in bacteria), each primed separately, synthesised 5\' → 3\', then joined. Ligase enzyme seals nicks (breaks in the sugar-phosphate backbone) between fragments, joining them covalently. This sophisticated mechanism allows rapid, accurate synthesis of both strands despite the directionality constraint.'
      }
    },
    {
      id: 'table-replication-enzymes',
      type: 'comparisonTable',
      data: {
        headers: ['Enzyme/Protein', 'Function'],
        rows: [
          ['Helicase', 'Unwinds double helix, breaks H-bonds'],
          ['SSB proteins', 'Protect ssDNA from secondary structure, re-annealing'],
          ['Primase', 'Synthesises short RNA primers'],
          ['DNA Polymerase III (or α/δ/ε)', 'Main synthesis enzyme; 5\'→3\' synthesis, proofreading'],
          ['Topoisomerase', 'Relieves supercoiling tension ahead of fork'],
          ['DNA Ligase', 'Seals nicks between Okazaki fragments'],
          ['Single-stranded binding proteins', 'Coat ssDNA; prevent folding']
        ],
        caption: 'Key enzymes in DNA replication'
      }
    },
    {
      id: 'h-semi-conservative',
      type: 'heading',
      data: {
        text: 'Semi-Conservative Replication',
        level: 2
      }
    },
    {
      id: 'p-semi-conservative',
      type: 'paragraph',
      data: {
        text: 'Semi-conservative replication means that after one round of DNA replication, each daughter DNA molecule consists of one original (parental) strand and one newly synthesised strand. This is distinguished from conservative replication (entire original DNA is conserved; two copies are made) or dispersive replication (each strand contains patches of old and new DNA). Semi-conservative replication was proven by the Meselson-Stahl experiment. They grew E. coli for many generations in medium containing ¹⁵N (heavy nitrogen), labelling all DNA bases with ¹⁵N. The bacteria were then transferred to medium with ¹⁴N (normal nitrogen). DNA was extracted at different time points and analysed by CsCl density gradient centrifugation. DNA with ¹⁵N is denser and sediments lower (lower buoyant density); DNA with ¹⁴N is lighter and sediments higher. After one round of replication in ¹⁴N medium, all DNA was hybrid (¹⁵N/¹⁴N)—intermediate density. After two rounds, half the DNA was hybrid (¹⁵N/¹⁴N) and half was light (¹⁴N/¹⁴N). This pattern is consistent with semi-conservative replication and rules out conservative and dispersive models.'
      }
    },
    {
      id: 'p-meselson-stahl',
      type: 'paragraph',
      data: {
        text: 'The Meselson-Stahl experiment (1958) was elegantly simple and definitive. Generation 0 (parental): DNA is ¹⁵N/¹⁵N (both strands heavy). Generation 1 (after one replication in ¹⁴N): DNA is ¹⁵N/¹⁴N (hybrid). If conservative, one original ¹⁵N/¹⁵N and one new ¹⁴N/¹⁴N would be expected—not hybrid. If dispersive, DNA would be intermediate between heavy and light but not distinct—would show as a smear. The observation of pure hybrid DNA proved semi-conservative. Generation 2 (after two replications in ¹⁴N): 50% hybrid (¹⁵N/¹⁴N), 50% light (¹⁴N/¹⁴N), consistent with semi-conservative replication where each hybrid molecule separates in round 2, and each ¹⁵N strand pairs with new ¹⁴N strand. This experiment is a classic example of elegant experimental design proving a fundamental biological principle.'
      }
    },
    {
      id: 'eq-replication-fidelity',
      type: 'equation',
      data: {
        html: 'Error rate (before proofreading): ~1 per 10<sup>7</sup> nucleotides<br/>Error rate (after proofreading by exonuclease): ~1 per 10<sup>9</sup> nucleotides<br/>Proofreading reduces errors ~100-fold'
      }
    },
    {
      id: 'callout-worked-meselson',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Meselson-Stahl Experiment Summary',
        text: 'Gen 0: Grow E. coli in ¹⁵N medium → DNA is ¹⁵N-labelled (heavy). Transfer to ¹⁴N medium. Gen 1: Extract DNA → CsCl centrifuge → all DNA is hybrid ¹⁵N/¹⁴N (intermediate density). Conclusion: semi-conservative (each strand pairs with new strand). Gen 2: All hybrid DNA separates during replication → 50% ¹⁵N/¹⁴N (hybrid), 50% ¹⁴N/¹⁴N (light). Consistent with semi-conservative.'
      }
    },
    {
      id: 'callout-tip-proofreading',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Proofreading is Critical',
        text: 'Human genome has 3 billion bp. Replication happens once per cell division. Error rate with proofreading: ~1 error per 10⁹ nt = ~3 errors per human cell replication. Without proofreading: ~1 per 10⁷ = ~300 errors per replication. Those 297 extra mutations would accumulate over cell divisions, causing cancer, senescence. That\'s why proofreading is essential for genome stability and life itself.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why can DNA polymerase only synthesise DNA in the 5\' to 3\' direction? Explain the chemistry: the 3\'-OH group of the growing strand attacks the α-phosphate of the incoming dNTP, and only this end has a free hydroxyl group for the reaction.',
        apply: 'In Meselson and Stahl\'s experiment, bacteria grown in ¹⁵N medium were transferred to ¹⁴N medium. After one generation, all DNA was hybrid density. After two generations, predict the ratio of light:hybrid:heavy DNA bands and sketch the expected CsCl gradient result.',
        analyze: 'Compare the three models of DNA replication (conservative, semi-conservative, dispersive) in terms of their predictions for the Meselson-Stahl result. Explain clearly why only the semi-conservative model fits all the data.',
        evaluate: 'Evaluate the importance of DNA ligase, helicase, and primase in ensuring accurate DNA replication. Which enzyme is most critical for fidelity (accuracy), and what would happen if it were absent or mutated?',
      },
      terms: [],
    },
    {
      id: 'checklist-replication',
      type: 'checklist',
      data: {
        items: [
          { text: 'Helicase unwinds DNA; SSB proteins protect ssDNA; primase synthesises primers', checked: false },
          { text: 'DNA polymerase synthesises 5\'→3\'; reads template 3\'→5\'; proofreads errors', checked: false },
          { text: 'Leading strand: continuous synthesis; lagging strand: Okazaki fragments', checked: false },
          { text: 'Semi-conservative replication: each daughter DNA = one old + one new strand', checked: false },
          { text: 'Meselson-Stahl: ¹⁵N/¹⁴N labelling proved semi-conservative mechanism', checked: false }
        ]
      }
    },
    {
      id: 'summary-replication',
      type: 'summary',
      data: {
        text: 'DNA replication is semi-conservative: each strand serves as template for new strand. Helicase unwinds; primase provides primers; DNA polymerase synthesises 5\'→3\' (leading strand continuous, lagging strand Okazaki fragments); ligase joins fragments. Error rate proofreading reduces errors to ~1 per 10⁹ nt. Meselson-Stahl experiment used ¹⁵N/¹⁴N labelling to prove semi-conservative mechanism: generation 1 all hybrid, generation 2 half hybrid and half light.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-helicase',
        prompt: 'Describe the role of helicase, SSB proteins, and topoisomerase in DNA replication.'
      },
      {
        id: 'cue-2',
        blockId: 'p-polymerase',
        prompt: 'How does DNA polymerase synthesise DNA? What is its proofreading function?'
      },
      {
        id: 'cue-3',
        blockId: 'p-leading-lagging',
        prompt: 'Explain the difference between leading and lagging strand synthesis. What are Okazaki fragments?'
      },
      {
        id: 'cue-4',
        blockId: 'p-semi-conservative',
        prompt: 'Define semi-conservative replication. How did Meselson-Stahl prove it?'
      },
      {
        id: 'cue-5',
        blockId: 'p-meselson-stahl',
        prompt: 'Describe the Meselson-Stahl experiment in detail. What were the results and conclusions?'
      }
    ],
    summaryText: 'Helicase unwinds DNA; SSB protects ssDNA; primase synthesises RNA primers; DNA Pol III synthesises 5\'→3\' (proofreads, ~1 error per 10⁹). Leading strand continuous; lagging strand Okazaki fragments (~1000 nt). Ligase joins fragments. Semi-conservative: each daughter = 1 old + 1 new strand. Meselson-Stahl: Gen 0 ¹⁵N/¹⁵N → Gen 1 all hybrid ¹⁵N/¹⁴N → Gen 2 half hybrid, half light ¹⁴N/¹⁴N. Proves semi-conservative.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'DNA Replication and Semi-Conservative Model',
      detail: 'Detailed mechanism of DNA replication and historical evidence from Meselson-Stahl experiment.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['dna-replication', 'semi-conservative', 'meselson-stahl', 'helicase', 'polymerase', 'okazaki-fragments']
    }
  ]
};
