export const note_biology_5_8_10 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand vectors in gene technology: plasmid vectors (small, circular, autonomous replication, antibiotic resistance, MCS); bacteriophage vectors (higher insert capacity); BAC (bacterial artificial chromosome) (~150 kb inserts); viral vectors for gene therapy: adenovirus (transient expression), AAV (semi-persistent), retrovirus/lentivirus (integrating, insertional mutagenesis risk).' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Vectors in Gene Technology', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'A vector is a DNA molecule used to deliver a gene of interest into a host cell. Vectors are chosen based on the insert size required, the host cell type, and whether transient or stable expression is desired. Common vectors include plasmids, bacteriophages, BACs, and viral vectors.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Plasmid Vectors', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'Plasmids are small circular double-stranded DNA molecules, typically 2–10 kb, that exist independently from chromosomal DNA in bacteria. Plasmid vectors have several essential features: (1) Origin of replication (ori): allows autonomous replication in the host. (2) Selectable marker (e.g., antibiotic resistance gene): identifies transformed cells. (3) Multiple cloning site (MCS): contains multiple restriction sites for inserting foreign DNA. (4) Reporter genes (optional): e.g., lacZα for blue-white screening.' },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'Plasmids are ideal for cloning small genes (up to ~10 kb) and producing recombinant proteins in bacterial hosts. They replicate autonomously, so inserted genes are copied each time the plasmid replicates. Copy number varies: some plasmids exist at 1–2 copies per cell (low copy), others at 50–500 copies (high copy), affecting gene expression levels.' },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Plasmid Stability',
        text: 'Plasmids can be lost during cell division (plasmid curing), especially in dividing cells without antibiotic selection. This is why selectable markers are essential for maintaining plasmids in culture.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Bacteriophage Vectors', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'Bacteriophages (viruses that infect bacteria, especially lambda phage) can be used as vectors for larger inserts (10–45 kb). Some phage vectors can integrate into the bacterial chromosome, providing stable inheritance. Phage vectors can package DNA up to their head capacity, allowing larger inserts than plasmids. However, phage vectors are more complex to use and less commonly employed than plasmids for routine cloning.' },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'BAC (Bacterial Artificial Chromosome)', level: 3 },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'BACs are vectors derived from the F (fertility) plasmid of E. coli, capable of carrying very large DNA inserts (100–150 kb). BACs have been essential for the Human Genome Project, allowing the cloning of large genomic fragments. They replicate at low copy number (1–2 copies per cell) to prevent instability from carrying such large inserts. BACs are maintained with stringent selectable markers to ensure stability.' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Viral Vectors for Gene Therapy', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'Viral vectors are engineered viruses used to deliver therapeutic genes into human cells. The virus is rendered replication-incompetent (unable to replicate) so it acts only as a delivery vehicle. Different viral vectors have different properties based on their natural biology.' },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Adenoviral Vectors', level: 3 },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'Adenoviruses infect a wide variety of human cells. Adenoviral vectors provide transient expression: the viral DNA does not integrate into the host genome, so the therapeutic gene is expressed temporarily (days to weeks) before being diluted out by cell division or degraded. This is advantageous for acute conditions. Adenoviral vectors produce strong immune responses (neutralising antibodies), limiting repeated dosing. Insert capacity is ~7–8 kb.' },
    },
    {
      id: 'h7',
      type: 'heading',
      data: { text: 'AAV (Adeno-Associated Virus) Vectors', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'AAV vectors provide semi-persistent expression. AAV integrates into the host genome at a specific locus (AAVS1), allowing long-term expression (months to years). AAV triggers weak immune responses, allowing repeat dosing. However, insert capacity is small (~4.7 kb), limiting the size of genes that can be delivered. AAV has been used in approved gene therapies (e.g., voretigene for retinal dystrophy).' },
    },
    {
      id: 'h8',
      type: 'heading',
      data: { text: 'Retroviral and Lentiviral Vectors', level: 3 },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'Retroviral and lentiviral vectors integrate their genetic material into the host genome via the reverse transcriptase and integrase enzymes. This provides stable, long-term expression of the therapeutic gene. However, integration is random (not site-specific like AAV), creating a risk of insertional mutagenesis: the integration might disrupt a tumour suppressor gene or activate an oncogene, potentially causing cancer.' },
    },
    {
      id: 'p10',
      type: 'paragraph',
      data: { text: 'Lentiviruses (e.g., HIV-derived vectors) can infect non-dividing cells, whereas retroviruses require dividing cells. Lentiviruses are therefore preferred for most gene therapy applications. These vectors have been used in CAR-T cell therapy: T cells are transduced with a lentiviral vector carrying a CAR (chimeric antigen receptor) gene, then expanded ex vivo and returned to patients to attack cancer cells.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Vector', 'Insert Size', 'Duration of Expression', 'Integration', 'Immune Response', 'Clinical Use'],
        rows: [
          ['Plasmid', '1–20 kb', 'Transient (episomal)', 'No', 'None (bacteria)', 'Protein production in bacteria'],
          ['Bacteriophage', '10–45 kb', 'Stable (integrated)', 'Optional', 'Varies', 'Large insert cloning'],
          ['BAC', '100–150 kb', 'Stable', 'No', 'None (bacteria)', 'Genomic cloning, HGP'],
          ['Adenovirus', '7–8 kb', 'Transient (weeks)', 'No', 'Strong', 'Acute gene therapy'],
          ['AAV', '~4.7 kb', 'Semi-persistent (years)', 'Yes (site-specific)', 'Weak', 'Approved therapies (retinal)'],
          ['Lentivirus', '8–10 kb', 'Persistent (lifetime)', 'Yes (random)', 'Weak', 'CAR-T therapy, HIV studies'],
        ],
        caption: 'Comparison of vectors for gene delivery',
      },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Insertional Mutagenesis Risk',
        text: 'Retroviral and lentiviral integration is random, not site-specific. Early retroviral gene therapy trials using leukaemia-causing virus led to insertional mutagenesis and patient deaths. Current safeguards include: (1) using self-inactivating (SIN) vectors, (2) integrase mutations to reduce integration, (3) careful patient monitoring.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Plasmids: small, circular, autonomous, up to 10 kb. Phage: 10–45 kb, can integrate. BAC: 100–150 kb. Adenovirus: 7–8 kb, transient, strong immune response. AAV: 4.7 kb, semi-persistent, site-specific integration. Lentivirus: 8–10 kb, persistent, random integration (mutagenesis risk).',
        apply: 'You want to express a 3 kb human cDNA in bacteria long-term and a 8 kb mammalian genomic gene in human cells. Which vectors would you use for each?',
        analyze: 'Why is AAV preferred over lentivirus for treating inherited retinal diseases, despite smaller insert size?',
        evaluate: 'Discuss the ethical and safety considerations in using lentiviral vectors for CAR-T therapy in cancer patients.',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe plasmid vector features and suitable insert sizes', checked: false },
          { text: 'Explain bacteriophage and BAC vectors', checked: false },
          { text: 'Compare adenoviral, AAV, and lentiviral vectors', checked: false },
          { text: 'Distinguish transient, semi-persistent, and persistent expression', checked: false },
          { text: 'Explain insertional mutagenesis risk with random integration', checked: false },
          { text: 'Identify clinical applications of different vectors', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Vectors deliver genes: plasmids (2–10 kb, autonomous), phage (10–45 kb), BAC (100–150 kb, HGP), adenovirus (7–8 kb, transient, strong immune), AAV (4.7 kb, semi-persistent, site-specific), lentivirus (8–10 kb, persistent, random integration risk). Choice depends on insert size, expression duration, and host cell type.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h2', prompt: 'What are plasmid vectors and what features do they have?' },
      { id: 'cue-2', blockId: 'h4', prompt: 'What are BACs and why are they important?' },
      { id: 'cue-3', blockId: 'h6', prompt: 'Describe adenoviral vectors and their expression characteristics.' },
      { id: 'cue-4', blockId: 'h7', prompt: 'Compare AAV and lentiviral vectors for gene therapy.' },
      { id: 'cue-5', blockId: 'callout2', prompt: 'What is insertional mutagenesis and which vectors pose this risk?' },
    ],
    summaryText: 'Plasmids: 2–10 kb, autonomous, bacteria. Phage: 10–45 kb, integration option. BAC: 100–150 kb (HGP). Adenovirus: 7–8 kb, transient (weeks), strong immune. AAV: 4.7 kb, semi-persistent (years), site-specific. Lentivirus: 8–10 kb, persistent, random integration (mutagenesis risk).',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Human Genome Project', detail: 'Used BAC clones to map and sequence the human genome', year: '2003', source: 'Genomics milestone', tags: ['BAC', 'genome sequencing'] },
  ],
};
