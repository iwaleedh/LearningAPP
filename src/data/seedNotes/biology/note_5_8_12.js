export const note_biology_5_8_12 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand CRISPR-Cas9 gene editing: guide RNA (gRNA) design, complementarity to target DNA, Cas9 nuclease endonuclease activity; double-strand break (DSB); NHEJ (non-homologous end joining) causing insertions/deletions (gene knockout); HDR (homology-directed repair) enabling precise editing with template; applications: sickle cell disease, cancer immunotherapy (CAR-T), agricultural GM crops; ethical considerations.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'CRISPR-Cas9 Gene Editing', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'CRISPR-Cas9 (Clustered Regularly Interspaced Short Palindromic Repeats, and the associated Cas9 nuclease) is a precise gene-editing tool adapted from a bacterial immune system. It allows researchers to cut DNA at specific target sequences and make edits—from disabling genes to correcting mutations. CRISPR has revolutionised genetic engineering, winning the 2020 Nobel Prize in Chemistry for Emmanuelle Charpentier and Jennifer Doudna.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'How CRISPR-Cas9 Works', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'CRISPR-Cas9 has two components: (1) Guide RNA (gRNA): a synthetic RNA molecule designed to be complementary to the target DNA sequence (typically 20 bp). It directs Cas9 to the correct location. (2) Cas9 nuclease: an endonuclease enzyme that cuts both strands of DNA when the gRNA binds to the target sequence.' },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'The mechanism: Step 1: gRNA-Cas9 complex scans the genome for sequences matching the guide RNA. Step 2: When a match is found (preceded by a PAM—Protospacer Adjacent Motif, typically NGG sequence in S. pyogenes Cas9), Cas9 unwinds the DNA double helix. Step 3: gRNA hybridises with the target DNA strand. Step 4: Cas9 is activated and cuts both DNA strands, creating a double-strand break (DSB) ~3 bp upstream of the PAM.' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'gRNA (20 bp) + target DNA → complementary binding → Cas9 activation → DSB (both strands cut)',
        caption: 'CRISPR-Cas9 target recognition and double-strand break formation',
      },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Guide RNA Design',
        text: 'The gRNA must be designed to perfectly complement the target DNA and avoid off-target sites. Bioinformatic tools scan the genome to identify optimal gRNA sequences. PAM sequences (NGG) help identify valid Cas9 target sites.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'DNA Repair Pathways: NHEJ vs HDR', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'After Cas9 cuts DNA, the cell must repair the double-strand break. Two pathways compete: (1) Non-homologous end joining (NHEJ): a quick but error-prone repair pathway. The DSB is simply ligated together, but small insertions or deletions (indels) often occur at the break site. NHEJ-induced indels cause frameshift mutations, typically disrupting the gene (knockout). (2) Homology-directed repair (HDR): a precise repair pathway that uses a DNA template with homology to the break site.' },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'NHEJ-Mediated Gene Knockout', level: 3 },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'NHEJ is the dominant repair pathway in most cell types. When CRISPR-Cas9 creates a DSB, NHEJ quickly ligates the ends. If ligation is imperfect, small indels (insertions or deletions) are introduced. A 1 bp insertion or 2 bp deletion causes a frameshift, changing the reading frame for all downstream codons and typically introducing premature stop codons. This results in a non-functional, truncated protein—a gene knockout.' },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'NHEJ-mediated knockouts are useful for loss-of-function studies: determining what happens when a specific gene is inactivated. Clinical applications include knocking out disease-associated genes (e.g., CCR5 in HIV-resistant cells, β-globin mutations in sickle cell disease).' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'HDR-Mediated Precise Editing', level: 3 },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'For precise editing (correcting point mutations, inserting functional genes), HDR is used. A DNA repair template with homology flanking the target is provided. The template contains the desired sequence (corrected mutation or new gene insert) flanked by regions matching sequences on either side of the DSB. HDR uses this template to repair the break accurately, incorporating the desired change.' },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'HDR is less efficient than NHEJ (~5–30%) and is slower (requires S phase of the cell cycle). However, in cells where HDR works, the result is precise: point mutations are corrected, and new sequences are incorporated exactly as designed. Enhancing HDR (using cell cycle synchronisation, synthetic DNA ligands, or Cas9 variants) is an active research area.' },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'NHEJ vs HDR: A Practical Example',
        text: 'Sickle cell disease: geneA has a point mutation (GAG → GTG, glutamic acid → valine). Approach 1 (knockout): CRISPR cuts the gene; NHEJ causes indel → frameshift → loss-of-function. Approach 2 (correction): CRISPR cuts; HDR template with wild-type sequence (GAG) → precise repair, functional protein restored.',
      },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Clinical Applications', level: 3 },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'Sickle cell disease and β-thalassemia: CTX001 therapy (CRISPR-edited T cells) uses CRISPR to knock out the BCL11A gene, re-activating fetal hemoglobin expression, alleviating disease symptoms. First CRISPR therapy approved by FDA (2023). Cancer immunotherapy: CAR-T cells are edited with CRISPR to enhance anti-tumour function; simultaneously, PD-1 checkpoint inhibitors are disabled to prevent T cell exhaustion. Agricultural applications: CRISPR-edited crops with improved yield, disease resistance, or nutritional content (e.g., disease-resistant cassava, pest-resistant maize).' },
    },
    {
      id: 'h7',
      type: 'heading',
      data: { text: 'Ethical Considerations', level: 3 },
    },
    {
      id: 'p10',
      type: 'paragraph',
      data: { text: 'Somatic vs germline editing: somatic gene therapy edits only body cells; modifications are not inherited. Germline editing (editing egg, sperm, or embryo) alters the heritable genome. Most jurisdictions permit somatic therapy for disease treatment but restrict or prohibit germline editing due to ethical concerns (unknown long-term effects, designer babies, inequality). Off-target effects: gRNAs can sometimes bind similar (not identical) sequences, causing unintended cuts. Thorough bioinformatic analysis minimises this risk.' },
    },
    {
      id: 'p11',
      type: 'paragraph',
      data: { text: 'Equity and access: CRISPR therapies are expensive. Ensuring equitable access globally (vs wealthy nations) is an ongoing challenge. Informed consent: patients must understand the potential benefits, risks, and unknown long-term effects before undergoing CRISPR therapy.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'gRNA-Cas9: target sequence (20 bp) + PAM (NGG) → DSB. NHEJ (quick, error-prone): indels → frameshift → knockout. HDR (precise, slow): template-directed repair → exact correction.',
        apply: 'Design a gRNA to disrupt the human HTT gene (huntingtin) in Huntington disease cells. What PAM must be present? What would be the likely outcome via NHEJ?',
        analyze: 'Why is HDR-mediated correction more difficult than NHEJ-mediated knockout? What are the practical limitations?',
        evaluate: 'Should germline CRISPR editing be permitted for severe genetic diseases? Discuss the scientific, ethical, and social implications.',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Explain gRNA design and Cas9 target recognition', checked: false },
          { text: 'Describe the CRISPR-Cas9 mechanism and DSB formation', checked: false },
          { text: 'Compare NHEJ and HDR repair pathways', checked: false },
          { text: 'Explain NHEJ-mediated gene knockout via frameshift', checked: false },
          { text: 'Describe HDR-mediated precise correction', checked: false },
          { text: 'List clinical applications and ethical considerations', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'CRISPR-Cas9: gRNA (20 bp) directs Cas9 to target DNA (PAM = NGG) → DSB. NHEJ (quick, dominant): indels → frameshift → knockout. HDR (precise, slow): template directs accurate repair. Applications: sickle cell (BCL11A knockout), cancer (CAR-T editing), crops (disease resistance). Ethics: somatic OK, germline controversial; off-target risks; equity concerns.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h2', prompt: 'Describe the gRNA and Cas9 components of CRISPR.' },
      { id: 'cue-2', blockId: 'h3', prompt: 'Explain NHEJ and HDR repair pathways.' },
      { id: 'cue-3', blockId: 'h4', prompt: 'How does NHEJ cause gene knockout?' },
      { id: 'cue-4', blockId: 'h5', prompt: 'How is HDR used for precise gene correction?' },
      { id: 'cue-5', blockId: 'h6', prompt: 'Name two clinical CRISPR applications.' },
    ],
    summaryText: 'gRNA (20 bp) + Cas9 → target DNA (PAM NGG) → DSB. NHEJ (quick, error): indels → frameshift → knockout. HDR (precise, slow): template → exact repair. Apps: sickle cell (BCL11A KO), cancer (CAR-T), crops. Ethics: somatic OK, germline controversial, off-target risks.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'CTX001 (CRISPR-edited therapy)', detail: 'First CRISPR therapy approved for sickle cell disease and β-thalassemia', year: '2023', source: 'FDA approval', tags: ['CRISPR therapy', 'sickle cell'] },
  ],
};
