export const note_biology_4_6_13 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand DNA profiling using STRs (short tandem repeats), restriction enzymes, Southern blotting, PCR-based profiling, and probability calculations for kinship analysis and paternity testing.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'DNA Profiling and Kinship Analysis', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'DNA profiling (DNA fingerprinting) exploits natural variation in DNA sequences to uniquely identify individuals. Short tandem repeats (STRs) are highly variable between individuals. Profiling uses PCR or restriction enzymes to amplify/cut DNA, producing individual-specific patterns. Probability calculations determine likelihood of kinship or paternity.'
      },
      terms: []
    },
    {
      id: 'h-str',
      type: 'heading',
      data: { text: 'Short Tandem Repeats (STRs)', level: 2 },
      terms: []
    },
    {
      id: 'p-str-1',
      type: 'paragraph',
      data: {
        text: 'Short tandem repeats (STRs) are short DNA sequences (2–6 base pairs) repeated multiple times in tandem. The number of repeats varies between individuals, creating genetic variation. For example, the STR D16S539 consists of repeats of GATA. One person might have 9 repeats (GATX9), another might have 12 repeats (GATX12). This variation is inherited: a child inherits one allele from each parent.'
      },
      terms: []
    },
    {
      id: 'list-str-features',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Hypervariable: The number of repeat units varies widely in the population (5–20 repeats per allele).',
          'Autosomal: Most STRs are on autosomes (not sex-linked); inherited from both parents.',
          'Codominant: Both alleles are expressed; a heterozygous individual shows two bands on a gel.',
          'Highly informative: With 13+ STR loci tested, the probability of two unrelated individuals having identical profiles is <1 in billions.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-str',
      type: 'callout',
      data: {
        style: 'key',
        title: 'STR Advantages for Profiling',
        text: 'Hypervariable (many alleles per locus); codominant (both alleles visible); easy to amplify by PCR; results reproducible. Standard DNA databases use 13 core STR loci (CODIS system in USA). Combined match probability: extremely low (individualisation).'
      },
      terms: []
    },
    {
      id: 'h-restriction-enzymes',
      type: 'heading',
      data: { text: 'Restriction Enzymes and RFLP Analysis', level: 2 },
      terms: []
    },
    {
      id: 'p-restriction-1',
      type: 'paragraph',
      data: {
        text: 'Restriction enzymes (restriction endonucleases) are bacterial enzymes that cut DNA at specific recognition sequences. Restriction fragment length polymorphism (RFLP) analysis uses restriction enzymes to cut DNA; if mutations alter restriction sites, fragments differ in size. RFLP was historically important but is now largely replaced by STR profiling and SNP analysis because it is slower and less informative.'
      },
      terms: []
    },
    {
      id: 'list-restriction',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Restriction site polymorphisms: Mutations that create or destroy restriction sites result in different fragment patterns between individuals.',
          'Example: If individual A has restriction sites at positions 100 and 300 bp, cutting produces 200 bp fragments. If individual B has sites at 100 and 350 bp, cutting produces 250 bp fragments. The different sizes distinguish them.',
          'Detection: Restricted DNA is separated by gel electrophoresis, creating a banding pattern. Southern blotting (hybridising with a radioactive or fluorescent probe) increases sensitivity.'
        ]
      },
      terms: []
    },
    {
      id: 'h-southern-blot',
      type: 'heading',
      data: { text: 'Southern Blotting', level: 2 },
      terms: []
    },
    {
      id: 'p-southern-blot-1',
      type: 'paragraph',
      data: {
        text: 'Southern blotting is a technique that uses DNA probes (radioactively or fluorescently labelled DNA sequences) to detect specific DNA fragments after restriction digestion and gel electrophoresis. Named after Edwin Southern.'
      },
      terms: []
    },
    {
      id: 'list-southern-blot-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Restriction digestion: DNA is cut with restriction enzymes.',
          'Gel electrophoresis: Fragments are separated by size in an agarose gel.',
          'Blotting: Gel is placed against a nitrocellulose or nylon membrane. Buffer is drawn through the gel, transferring DNA fragments to the membrane.',
          'Hybridisation: Labelled probe (complementary to target sequence) is added. Probe binds to matching sequences on the membrane.',
          'Detection: Radioactive probes produce autoradiograph (X-ray film); fluorescent probes are detected by fluorescence scanner.',
          'Result: Specific DNA fragments are visualised; other fragments remain invisible.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-southern-blot',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Southern Blotting Advantage',
        text: 'Detects specific DNA fragments (those hybridising to probe) while ignoring irrelevant fragments. Much more informative than simple gel staining. Historically gold standard for RFLP analysis; now largely replaced by PCR-based STR typing (faster, easier, less radioactive).'
      },
      terms: []
    },
    {
      id: 'h-pcr-str',
      type: 'heading',
      data: { text: 'PCR-Based STR Profiling', level: 2 },
      terms: []
    },
    {
      id: 'p-pcr-str-1',
      type: 'paragraph',
      data: {
        text: 'Modern DNA profiling uses PCR to amplify STR loci. Primers are designed to flank the STR region; PCR amplifies the entire STR (including all repeats). The PCR product size varies with repeat number: 9 repeats = shorter product; 12 repeats = longer product. Products are separated by gel electrophoresis or capillary electrophoresis, revealing the STR alleles.'
      },
      terms: []
    },
    {
      id: 'callout-pcr-str',
      type: 'callout',
      data: {
        style: 'key',
        title: 'PCR-Based STR Profiling Advantages',
        text: 'Fast (PCR in 2–3 hours); requires tiny DNA amounts (degraded DNA still works); no radioactivity; highly reproducible; automated analysis. Standard DNA databases use 13 core STR loci for profile comparison.'
      },
      terms: []
    },
    {
      id: 'h-probability',
      type: 'heading',
      data: { text: 'Probability Calculations and the Product Rule', level: 2 },
      terms: []
    },
    {
      id: 'p-probability-1',
      type: 'paragraph',
      data: {
        text: 'In kinship analysis and paternity testing, probability is calculated using the product rule. If two loci segregate independently, the probability of both conditions occurring is the product of individual probabilities.'
      },
      terms: []
    },
    {
      id: 'eq-product-rule',
      type: 'equation',
      data: {
        html: 'Probability of both events = P(locus 1) × P(locus 2)<br>Example: P(matching at locus 1) = 0.01; P(matching at locus 2) = 0.02<br>P(matching both loci) = 0.01 × 0.02 = 0.0002 = 1 in 5,000'
      },
      terms: []
    },
    {
      id: 'h-paternity-example',
      type: 'heading',
      data: { text: 'Paternity Testing: Worked Example', level: 2 },
      terms: []
    },
    {
      id: 'ex-paternity',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Paternity Testing Scenario',
        text: 'Mother has STR alleles: 8, 10 at locus D16S539\nChild has alleles: 10, 12 at locus D16S539\nChild must inherit one allele from mother (10) and one from father.\nChild\'s father must have allele 12.\n\nAlleged father 1: has alleles 5, 9 → does NOT have allele 12 → EXCLUDED\nAlleged father 2: has alleles 11, 12 → HAS allele 12 → NOT EXCLUDED (for this locus)\n\nAfter testing 13 loci and calculating combined probability:\nIf probabilities match at all loci, combined probability of match may be >99.9%.\nIf mismatch at any locus, paternity is excluded (assuming no mutation).'
      },
      terms: []
    },
    {
      id: 'h-kinship-analysis',
      type: 'heading',
      data: { text: 'Kinship Analysis: General Approach', level: 2 },
      terms: []
    },
    {
      id: 'p-kinship-1',
      type: 'paragraph',
      data: {
        text: 'Kinship analysis (determining biological relationships: parent-child, siblings, etc.) uses STR profiles and probability calculations. Key principle: biological relatives share alleles inherited from common ancestors. The probability of sharing alleles by chance is low; matching profiles at multiple loci provides strong evidence of kinship.'
      },
      terms: []
    },
    {
      id: 'list-kinship',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Parent-child: Child inherits exactly one allele from each parent at each locus. At least one allele must match parent at each locus.',
          'Siblings: Share alleles from same parents. Expected to match at ~50% of loci by chance (not all loci).',
          'Unrelated: Probability of matching at multiple loci is the product of individual locus probabilities (very low).',
          'Exclusion: If profiles cannot be explained by relationship, relationship is excluded with high confidence.'
        ]
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'STRs are hypervariable tandem repeats; number of repeats varies between individuals and is inherited. PCR-based profiling amplifies STR loci, creating individual-specific patterns. Probability calculations use product rule: P(both) = P(locus1) × P(locus2). With 13+ STR loci, combined probability of random match is <1 in billions, allowing individualisation. Paternity testing excludes alleged fathers if they lack required alleles.',
        apply: 'If P(matching at locus 1) = 0.05, P(locus 2) = 0.03, and P(locus 3) = 0.02, what is the combined probability of random match? (0.05 × 0.03 × 0.02 = 0.00003 = 1 in 33,000)',
        analyze: 'Why are multiple STR loci necessary for DNA profiling? Why is one locus insufficient?',
        evaluate: 'In paternity testing, if an alleged father is not excluded at 13 loci but matches at all of them, what is the likelihood he is the biological father? How would you explain this to a court?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain what STRs are and why they vary between individuals', checked: false },
          { text: 'I understand that STRs are codominant and inherited', checked: false },
          { text: 'I know what restriction enzymes do and how RFLP analysis works', checked: false },
          { text: 'I can describe the steps of Southern blotting', checked: false },
          { text: 'I understand why PCR-based STR profiling replaced RFLP analysis', checked: false },
          { text: 'I can apply the product rule to calculate matching probability', checked: false },
          { text: 'I can interpret STR profiles to include/exclude paternity', checked: false },
          { text: 'I understand how kinship analysis uses STR matching', checked: false },
          { text: 'I know why 13+ STR loci are used in profiling', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'STRs (short tandem repeats): hypervariable repeats (e.g. GATA×9 vs GATA×12); codominant; inherited from both parents. Restriction enzymes cut at recognition sites; RFLP analysis detects polymorphisms. Southern blotting uses labelled probes to detect specific fragments (more sensitive than ethidium bromide). PCR-based STR profiling: primers flank STR region, PCR amplifies, product size varies with repeat number. Gel/capillary electrophoresis separates alleles. Product rule: P(both loci match) = P(locus1) × P(locus2). Paternity testing: child must inherit one allele from each parent; mismatch at any locus excludes paternity. 13 core STR loci give combined match probability <1 in billions.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-str', prompt: 'What are STRs and why do they vary between individuals?' },
      { id: 'cue-2', blockId: 'list-str-features', prompt: 'List four features of STRs that make them useful for profiling.' },
      { id: 'cue-3', blockId: 'list-southern-blot-steps', prompt: 'Describe the steps of Southern blotting.' },
      { id: 'cue-4', blockId: 'eq-product-rule', prompt: 'Write the product rule and give a calculation example.' },
      { id: 'cue-5', blockId: 'ex-paternity', prompt: 'Explain how paternity is excluded based on STR alleles.' }
    ],
    summaryText: 'STRs: tandem repeats (e.g. GATA×9 vs ×12); number varies between individuals; codominant; inherited. Hypervariable → informative for profiling. Restriction enzymes cut DNA at recognition sites (RFLP analysis). Southern blot: restriction digest → gel → transfer to membrane → hybridisation with labelled probe → detect specific fragments. PCR-based STR: primers flank STR → PCR amplifies → product size varies with repeats → gel/capillary separation. Product rule: P(both) = P(locus1) × P(locus2). Paternity: child inherits one allele from each parent; mismatch excludes paternity.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'DNA Profiling and Kinship Analysis', detail: 'Butler JM. Fundamentals of Forensic DNA Typing (2nd ed.). Academic Press', year: '2015', source: 'Academic Press', tags: ['DNA profiling', 'STR', 'paternity testing', 'kinship analysis'] }
  ]
};
