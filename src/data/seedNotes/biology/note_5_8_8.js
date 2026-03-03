export const note_biology_5_8_8 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand gene mutations and cancer: proto-oncogenes → oncogenes (mutations → uncontrolled proliferation); tumour suppressor genes (p53, Rb): loss causes failure to arrest cell cycle; two-hit hypothesis; epigenetic silencing of TSGs; somatic vs germline mutations; chemical mutagens, UV radiation, viruses (HPV, EBV); hallmarks of cancer (Hanahan & Weinberg).' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Gene Mutations and Cancer', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'Cancer is a disease of uncontrolled cell division caused by mutations in genes that regulate cell growth and division. Normal cells divide in a controlled, regulated manner; cancer cells divide rapidly and uncontrollably, forming tumours. Two main classes of genes are involved in cancer: proto-oncogenes (which promote growth) and tumour suppressor genes (which inhibit growth).' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Proto-Oncogenes and Oncogenes', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'Proto-oncogenes are normal genes that promote cell growth, division, and differentiation. They encode growth factors, growth factor receptors, signal transduction proteins, and transcription factors that drive the cell cycle. When a proto-oncogene is mutated, it can become an oncogene (cancer-causing gene) that drives uncontrolled proliferation.' },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'Oncogenic mutations can occur through: (1) Point mutations: a single nucleotide change alters the protein, increasing its activity. (2) Gene amplification: multiple copies of the oncogene are produced, increasing protein expression. (3) Translocation: the oncogene moves to a new chromosomal location where it is expressed at higher levels. Only ONE mutated copy (one allele) is required to contribute to cancer—oncogenic mutations are dominant.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Proto-Oncogene', 'Normal Function', 'Oncogenic Mutation Effect', 'Cancer Type'],
        rows: [
          ['RAS', 'Growth signal transduction (GTPase)', 'Point mutation → constitutively active → continuous growth signalling', 'Multiple cancers (colorectal, pancreatic)'],
          ['MYC', 'Transcription factor for growth genes', 'Gene amplification/translocation → overexpression → uncontrolled proliferation', 'Lymphomas, carcinomas'],
          ['HER2 (ErbB2)', 'Growth factor receptor (tyrosine kinase)', 'Gene amplification → receptor overexpression → excessive growth signalling', 'Breast cancer'],
        ],
        caption: 'Examples of proto-oncogenes and their oncogenic transformations',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Tumour Suppressor Genes', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'Tumour suppressor genes (TSGs) encode proteins that inhibit cell division, promote DNA repair, and trigger apoptosis (programmed cell death) in damaged cells. Key TSGs include p53 (the "guardian of the genome") and Rb (retinoblastoma protein). Loss of TSG function removes the brakes on cell division, allowing uncontrolled growth.' },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'p53 (tumour protein 53) is a transcription factor that detects DNA damage and triggers either cell cycle arrest (for repair) or apoptosis (if damage is severe). p53 is mutated in >50% of human cancers. Rb (retinoblastoma protein) prevents progression from G1 to S phase of the cell cycle; loss of Rb function removes this checkpoint, allowing damaged cells to replicate.' },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'TSGs vs Oncogenes: Inheritance Pattern',
        text: 'Oncogenic mutations are dominant—one mutated allele causes cancer. TSG mutations are recessive—BOTH alleles must be lost (or silenced) for cancer to develop. This difference is important for inherited cancer syndromes.',
      },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'The Two-Hit Hypothesis', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'The two-hit hypothesis (Knudson hypothesis) states that cancer development requires loss of BOTH alleles of a tumour suppressor gene. The first hit is an initial mutation; the second hit is loss of the remaining normal allele (through mutation, deletion, or epigenetic silencing). This explains why TSG mutations are recessive: one defective allele is insufficient; the second copy must also be lost.' },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'In hereditary cancer syndromes (e.g., Li-Fraumeni syndrome from germline p53 mutations, familial retinoblastoma from germline Rb mutations), individuals inherit one mutated TSG allele. Only a single additional somatic mutation is needed for cancer—significantly increasing cancer risk.' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'First hit: TSG<sup>+/−</sup> (inherited or somatic mutation)<br />Second hit: somatic mutation → TSG<sup>−/−</sup> (loss of function) → cancer',
        caption: 'Two-hit hypothesis for tumour suppressor genes',
      },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Epigenetic Silencing of TSGs', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'Epigenetic silencing (changes in gene expression without DNA sequence change) can inactivate TSGs. DNA methylation of CpG islands in TSG promoters silences transcription, preventing TSG protein expression. Histone deacetylation can also silence TSG expression. Epigenetic changes are reversible (unlike mutations), offering potential therapeutic targets.' },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Somatic vs Germline Mutations', level: 3 },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'Somatic mutations occur in body cells and affect only that cell and its descendants. They are not inherited. Most cancers arise from somatic mutations accumulated over a lifetime (age-related cancer risk increases exponentially). Germline mutations occur in reproductive cells and are inherited by all descendants. Germline mutations in oncogenes or TSGs cause hereditary cancer syndromes, where individuals carry the mutation in every cell.' },
    },
    {
      id: 'h7',
      type: 'heading',
      data: { text: 'Causes of Cancerous Mutations', level: 3 },
    },
    {
      id: 'p10',
      type: 'paragraph',
      data: { text: 'Chemical mutagens (e.g., benzopyrene in tobacco smoke, aflatoxins in contaminated food) cause DNA damage by binding to DNA and inducing mutations. UV radiation (especially UV-B) causes thymine dimers in DNA, leading to mutations if not properly repaired. Ionising radiation (X-rays, gamma rays) breaks DNA strands. Viruses can contribute to cancer through multiple mechanisms.' },
    },
    {
      id: 'p11',
      type: 'paragraph',
      data: { text: 'Human papillomavirus (HPV) produces oncoproteins that inactivate p53 and Rb, promoting cervical and other cancers. Epstein-Barr virus (EBV) is associated with Burkitt lymphoma and nasopharyngeal carcinoma. Hepatitis B and C viruses (HBV, HCV) promote liver cancer through chronic inflammation and cirrhosis.' },
    },
    {
      id: 'h8',
      type: 'heading',
      data: { text: 'Hallmarks of Cancer (Hanahan & Weinberg)', level: 3 },
    },
    {
      id: 'p12',
      type: 'paragraph',
      data: { text: 'Hanahan & Weinberg identified 6 hallmarks of cancer: (1) Sustained proliferative signalling: mutations in oncogenes. (2) Evading growth suppressors: loss of TSG function. (3) Resisting cell death: loss of p53-mediated apoptosis. (4) Enabling replicative immortality: maintenance of telomeres (via telomerase). (5) Inducing angiogenesis: formation of new blood vessels to supply the tumour. (6) Tissue invasion and metastasis: loss of cell adhesion (E-cadherin loss), EMT (epithelial-mesenchymal transition).' },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Multi-Hit Model of Cancer',
        text: 'Most cancers require multiple mutations (typically 4–7 mutations in key genes) to fully develop. This is why cancer incidence increases dramatically with age: time is required to accumulate multiple independent mutations in the same cell lineage.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Proto-oncogenes promote growth; mutations → oncogenes (dominant). TSGs inhibit growth; mutations/epigenetic silencing → loss of function (recessive, two-hit hypothesis). Causes: chemicals, UV, viruses (HPV, EBV). Hallmarks: proliferation, evade suppressors, resist death, immortality, angiogenesis, metastasis.',
        apply: 'A person inherits a germline p53 mutation. Explain why they have elevated lifetime cancer risk compared to individuals with wild-type p53.',
        analyze: 'Why is TSG inactivation considered recessive while oncogenic mutations are dominant? What are the implications for cancer inheritance?',
        evaluate: 'HPV vaccine prevents ~90% of HPV-related cancers. Discuss the public health impact and ethical considerations of universal HPV vaccination.',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define proto-oncogenes and explain oncogenic mutations', checked: false },
          { text: 'Identify key TSGs (p53, Rb) and their functions', checked: false },
          { text: 'Explain the two-hit hypothesis', checked: false },
          { text: 'Distinguish somatic from germline mutations', checked: false },
          { text: 'List causes of cancer-causing mutations', checked: false },
          { text: 'Summarise the 6 hallmarks of cancer', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Proto-oncogenes (growth genes) mutate → oncogenes (dominant, uncontrolled proliferation). TSGs (p53, Rb) inhibit growth; loss/silencing → recessive, requires two hits. Causes: chemicals, UV, viruses (HPV, EBV). Somatic mutations (body cells, not inherited); germline mutations (inherited, hereditary cancer syndromes). 6 hallmarks: proliferation, growth suppression evasion, apoptosis resistance, replicative immortality, angiogenesis, metastasis.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h2', prompt: 'Explain proto-oncogenes and how mutations transform them into oncogenes.' },
      { id: 'cue-2', blockId: 'h3', prompt: 'Describe the functions of p53 and Rb tumour suppressor genes.' },
      { id: 'cue-3', blockId: 'h4', prompt: 'What is the two-hit hypothesis?' },
      { id: 'cue-4', blockId: 'h7', prompt: 'List three causes of cancerous mutations and their mechanisms.' },
      { id: 'cue-5', blockId: 'h8', prompt: 'Name the 6 hallmarks of cancer.' },
    ],
    summaryText: 'Proto-oncogenes: normal growth genes; mutations → oncogenes (dominant, hyperactive). TSGs (p53=guardian, Rb=checkpoint): inhibit growth; mutations → recessive, loss-of-function. Two-hit: both TSG alleles lost. Somatic (body) vs germline (inherited). Causes: chemicals, UV, viruses (HPV, EBV). Hallmarks: proliferation, suppress evasion, apoptosis resistance, immortality, angiogenesis, metastasis.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Two-hit hypothesis (Knudson)', detail: 'Explains why TSGs require both alleles lost for cancer', year: '1971', source: 'Classic cancer genetics', tags: ['tumour suppressor', 'hereditary cancer'] },
    { id: 'ev-2', title: 'p53 mutations', detail: 'Found in >50% of human cancers; central to cancer development', year: 'Modern era', source: 'Cancer genomics', tags: ['p53', 'oncogenesis'] },
  ],
};
