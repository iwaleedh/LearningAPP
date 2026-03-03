export const note_biology_2_3_9 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-rna-proc',
      data: {
        text: 'Understand post-transcriptional RNA processing, including splicing, alternative splicing, and the addition of 5\' caps and 3\' poly-A tails, and appreciate how these modifications enable protein diversity.',
      },
    },
    {
      type: 'heading',
      id: 'h-pre-mrna',
      data: { text: 'Pre-mRNA and Processing', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-pre-mrna',
      data: {
        text: 'In eukaryotes, the primary transcript produced by RNA polymerase II is called pre-mRNA (precursor mRNA) or hnRNA (heterogeneous nuclear RNA). Pre-mRNA is much longer than the mature mRNA because it contains both exons (expressed sequences that are retained in mature mRNA) and introns (intervening sequences that are removed before translation). The typical human gene has 8–9 exons and 7–8 introns, and introns can be very large (up to several kilobases). For example, the human dystrophin gene has 79 exons separated by 78 introns and spans 2.4 million base pairs; yet mature mRNA is only ~14 kilobases. Pre-mRNA undergoes three modifications before it becomes mature mRNA: 5\' capping, 3\' polyadenylation, and splicing.',
      },
    },
    {
      type: 'heading',
      id: 'h-capping-poly',
      data: { text: '5\' Cap and 3\' Poly-A Tail', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-5cap',
      data: {
        text: 'The 5\' cap is a 7-methylguanosine (m⁷G) structure added to the 5\' end of pre-mRNA co-transcriptionally (while transcription is ongoing). The cap is linked via an unusual 5\'-5\' triphosphate linkage (instead of the normal 3\'-5\' linkage). Functions of the 5\' cap: (1) Protects mRNA from degradation by exonucleases (enzymes that chew DNA/RNA from the ends). Uncapped mRNAs are rapidly degraded. (2) Facilitates ribosome binding—the ribosome recognises and binds the 5\' cap structure, positioning itself for efficient translation initiation. (3) Aids nuclear export—the cap is required for mRNA to exit the nucleus through nuclear pore complexes.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-3poly',
      data: {
        text: 'The 3\' poly-A tail is a string of ~200–250 adenine nucleotides added post-transcriptionally after cleavage of the pre-mRNA downstream of a polyadenylation signal (typically AAUAAA). Poly-A polymerase adds adenines without a template. Functions of the poly-A tail: (1) Protects mRNA from 3\'→5\' degradation by exonucleases. (2) Enhances translation efficiency—poly-A binding proteins (PABPs) coat the tail and interact with translation initiation factors, forming a "closed loop" structure (5\' cap and 3\' tail connected via protein interactions) that increases translation initiation rate. (3) Aids mRNA localisation—some mRNAs are transported to specific cellular locations; the poly-A tail is required for proper localisation. (4) Facilitates nuclear export. The length of the poly-A tail inversely correlates with mRNA stability: shorter tails indicate older mRNAs destined for degradation.',
      },
    },
    {
      type: 'heading',
      id: 'h-splicing',
      data: { text: 'Splicing and the Spliceosome', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-splicing-def',
      data: {
        text: 'Splicing is the removal of introns and joining of exons to form mature mRNA. The process is catalysed by the spliceosome, a large ribonucleoprotein complex composed of small nuclear RNAs (snRNAs: U1, U2, U4, U5, U6) and >150 proteins. The spliceosome recognises conserved splice site sequences: the 5\' splice site (typically GU at the intron start), the 3\' splice site (typically AG at the intron end), and branch point sequences (internal A residue ~20–50 nucleotides upstream of the 3\' splice site).',
      },
    },
    {
      type: 'paragraph',
      id: 'p-splicing-mech',
      data: {
        text: 'Splicing mechanism: (1) Spliceosome assembles at the 5\' splice site via base-pairing of U1 snRNA with the pre-mRNA. (2) U2 and U6 snRNAs form a catalytic centre. (3) The intron is cleaved at the 5\' splice site, creating a free 3\'-OH on the upstream exon and a 5\'-phosphate on the intron. (4) The 5\' end of the intron loops back and forms a lariat structure by bonding to the branch point A. (5) The 3\' splice site is cleaved, releasing the intron lariat and generating a 5\'-phosphate on the downstream exon. (6) The two exons are ligated together, forming a phosphodiester bond. The intron lariat is subsequently degraded. This process is repeated for each intron, with different snRNAs in the spliceosome handling different introns sequentially.',
      },
    },
    {
      type: 'heading',
      id: 'h-alt-splicing',
      data: { text: 'Alternative Splicing and Protein Diversity', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-alt-splicing',
      data: {
        text: 'Alternative splicing is the selective inclusion or exclusion of exons during splicing, allowing a single gene to produce multiple protein isoforms (versions). Mechanisms of alternative splicing: (1) Exon skipping/inclusion—one or more exons are skipped or included in the mature mRNA. (2) Alternative 5\' or 3\' splice sites—different splice sites are used, changing intron/exon boundaries. (3) Intron retention—an intron is retained in the mature mRNA (if it doesn\'t contain a stop codon). (4) Mutually exclusive exons—only one exon from a group is included per transcript.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-alt-splicing-importance',
      data: {
        text: 'Alternative splicing massively increases protein diversity. Humans have ~20,000 genes but >100,000 different proteins, a difference accounted for largely by alternative splicing. For example, the immunoglobulin (antibody) genes use alternative splicing to generate antibodies with different heavy and light chain configurations. The human DSCAM gene can theoretically produce >38,000 different proteins via alternative splicing. Tissue-specific and developmental stage-specific splicing adds another layer of regulation: different tissues express different splicing factors (SR proteins, hnRNPs), leading to tissue-specific isoforms. Dysregulation of splicing is implicated in diseases: some mutations create cryptic splice sites or disrupt normal splice sites, leading to aberrant splicing and disease (e.g. spinal muscular atrophy, β-thalassemia).',
      },
    },
    {
      type: 'heading',
      id: 'h-rna-editing',
      data: { text: 'RNA Editing', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-rna-editing',
      data: {
        text: 'RNA editing is the enzymatic modification of individual nucleotides in RNA after transcription. Two main types: (1) A-to-I editing—adenosine is converted to inosine (I) by ADAR enzymes (adenosine deaminases acting on RNA). Inosine is recognised as guanosine by the translation machinery, changing the codon and altering the amino acid sequence. (2) C-to-U editing—cytidine is converted to uridine by APOBEC enzymes (apolipoprotein B mRNA editing catalytic polypeptide). A famous example is APOB gene editing in liver: an ApoB mRNA is edited at a specific CAA (glutamine) codon, changing it to UAA (stop codon), producing a shorter protein (APOB48) instead of the full-length APOB100. This shorter protein is needed for proper lipoprotein assembly. RNA editing adds another layer of post-transcriptional regulation and protein diversity.',
      },
    },
    {
      type: 'heading',
      id: 'h-nuclear-export',
      data: { text: 'Nuclear Export of Mature mRNA', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-export',
      data: {
        text: 'Mature mRNA (capped, polyadenylated, spliced) is exported from the nucleus to the cytoplasm through nuclear pore complexes (NPCs). NPCs are selective: only properly processed mRNAs are exported; improperly spliced or uncapped transcripts are retained and degraded. Export factors (e.g. Nxf1/Nxt1 heterodimer) recognise the mature mRNA (via cap and poly-A tail) and guide it through the NPC in a RanGTP-gradient-driven process. Once in the cytoplasm, the mRNA is available for translation. Some mRNAs are localised to specific cellular regions (e.g. axons in neurons, posterior end in oocytes) via specific sequences (zip codes) and localisation factors that direct transport and anchor the mRNA.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-splicing',
      data: {
        style: 'key',
        title: 'Spliceosome is a Ribozyme',
        text: 'The spliceosome\'s catalytic activity resides in the RNA components (snRNAs), not the proteins. This makes the spliceosome a ribozyme (RNA enzyme). The snRNAs (especially U2 and U6) perform the transesterification reactions that cut and ligate introns and exons. This is a classic example of RNA\'s catalytic capacity, supporting the RNA World hypothesis.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-alt-splicing',
      data: {
        style: 'tip',
        title: 'Alternative Splicing Increases Protein Diversity',
        text: 'One gene → multiple mRNA isoforms (via exon skipping, alternative splice sites) → multiple protein isoforms. This dramatically increases proteomic complexity without expanding genome size. The immunoglobulin gene family uses alternative splicing for combinatorial antibody generation; the nervous system uses it for receptor and channel variants.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is alternative splicing important for proteome diversity? A single gene with multiple exons can produce different mRNA molecules by including or excluding specific exons during splicing — the same gene can therefore encode dozens of different proteins, enormously expanding proteome complexity without increasing genome size.',
        apply: 'A pre-mRNA has 5 exons and 4 introns. If alternative splicing can include or exclude each of exons 2, 3, and 4 independently (exons 1 and 5 are always included), calculate the maximum number of different mRNA variants that could be produced.',
        analyze: 'Compare the roles of the 5\' cap, 3\' poly-A tail, and intron splicing in protecting mRNA from degradation and facilitating translation. Which modification is most important for mRNA stability, and what evidence supports this?',
        evaluate: 'Evaluate the discovery of alternative splicing as a revision of the \'one gene, one protein\' hypothesis. How did this discovery change our understanding of genome complexity, and what implications does it have for interpreting the human genome sequence (which contains only ~20,000 protein-coding genes)?',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-rna-proc',
      data: {
        items: [
          { text: 'Understand 5\' cap (m⁷G) and 3\' poly-A tail functions: protection, translation, export', checked: false },
          { text: 'Can explain the spliceosome mechanism: recognition of splice sites, intron removal, exon ligation', checked: false },
          { text: 'Know alternative splicing mechanisms: exon skipping, alternative splice sites, intron retention', checked: false },
          { text: 'Appreciate how alternative splicing creates protein diversity from a single gene', checked: false },
          { text: 'Understand RNA editing (A-to-I, C-to-U) as post-transcriptional modification', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-rna-proc',
      data: {
        text: 'Pre-mRNA contains exons (coding) and introns (removed). Three modifications: (1) 5\' cap (m⁷G, protects from degradation, aids ribosome binding, enables export). (2) 3\' poly-A tail (~200–250 A\'s, protects, aids translation, enables export). (3) Splicing: spliceosome (snRNAs U1/U2/U6 + proteins) recognises splice sites (GU/AG), catalyses intron removal via lariat formation, ligates exons. Alternative splicing (exon skipping, alternative splice sites, intron retention) enables one gene to produce multiple protein isoforms; explains protein diversity (20K genes, 100K+ proteins). RNA editing (A-to-I, C-to-U) further modifies transcripts post-transcriptionally. Mature mRNA exported via nuclear pores when properly processed.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-5cap',
        prompt: 'What is the 5\' cap, and what are its three main functions?',
      },
      {
        id: 'cue-2',
        blockId: 'p-3poly',
        prompt: 'Describe the 3\' poly-A tail and explain how it protects mRNA and aids translation.',
      },
      {
        id: 'cue-3',
        blockId: 'p-splicing-mech',
        prompt: 'Explain the spliceosome mechanism, including lariat formation and exon ligation.',
      },
      {
        id: 'cue-4',
        blockId: 'p-alt-splicing-importance',
        prompt: 'How does alternative splicing explain the discrepancy between gene number (~20K) and protein number (>100K) in humans?',
      },
    ],
    summaryText: '5\' cap (m⁷G): protects from exonucleases, aids ribosome binding, enables nuclear export. 3\' poly-A tail (~200–250 A\'s): protects from 3\'→5\' degradation, forms closed-loop with cap for efficient translation, aids export. Splicing: spliceosome (U1/U2/U6 snRNAs + proteins) recognises GU at 5\' splice site and AG at 3\' splice site, catalyses transesterification (intron loop/lariat forms), ligates exons. Alternative splicing: exon skipping/inclusion, alternative 5\'/3\' splice sites, intron retention, mutually exclusive exons; enables one gene (20K in humans) to produce multiple proteins (100K+). RNA editing: A-to-I (ADAR), C-to-U (APOBEC); changes codons and adds diversity. Processed mRNA exported via NPC when capped, tailed, spliced.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Alternative Splicing and Proteomic Complexity',
      detail: 'Genome-wide studies and RNA-seq data show that >90% of human multi-exon genes undergo alternative splicing, producing diverse protein isoforms that increase functional complexity without expanding genome size.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['RNA processing', 'alternative splicing', 'gene expression'],
    },
  ],
};
