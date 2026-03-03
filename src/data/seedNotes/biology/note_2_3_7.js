export const note_biology_2_3_7 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-stem-cells',
      data: {
        text: 'Understand stem cell types (totipotent, pluripotent, multipotent, unipotent), compare embryonic and adult stem cells, and evaluate therapeutic applications and ethical issues.',
      },
    },
    {
      type: 'heading',
      id: 'h-stem-types',
      data: { text: 'Stem Cell Classification by Potency', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-potency-def',
      data: {
        text: 'Potency refers to the range of cell types a stem cell can differentiate into. Stem cells are classified on a spectrum from totipotent (most versatile) to unipotent (most limited).',
      },
    },
    {
      type: 'list',
      id: 'list-potency',
      data: {
        style: 'bullet',
        items: [
          'Totipotent: can differentiate into any cell type, including extraembryonic tissues (placenta, umbilical cord). Example: fertilised egg (zygote), early blastomeres (up to 8-cell stage)',
          'Pluripotent: can differentiate into most cell types but not extraembryonic tissues. Examples: inner cell mass of blastocyst (embryonic stem cells, ESCs), induced pluripotent stem cells (iPSCs)',
          'Multipotent: can differentiate into a limited range of cell types; restricted to a particular lineage. Examples: haematopoietic (blood) stem cells in bone marrow (produce all blood cell types), neural stem cells in brain (produce neurons and glia), mesenchymal stem cells (produce bone, cartilage, fat)',
          'Unipotent: can only differentiate into one cell type; technically just self-renewing. Examples: spermatogonial stem cells (produce only sperm), some cell types in skin epidermis',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-embryonic-vs-adult',
      data: { text: 'Embryonic versus Adult Stem Cells', level: 2 },
    },
    {
      type: 'comparisonTable',
      id: 'table-stem-compare',
      data: {
        headers: ['Feature', 'Embryonic Stem Cells (ESCs)', 'Adult Stem Cells (ASCs)'],
        rows: [
          ['Potency', 'Pluripotent; can form most cell types', 'Multipotent; limited to specific lineages'],
          ['Source', 'Inner cell mass of blastocyst (5–6 days)', 'Bone marrow, fat, skin, neural tissue, etc.'],
          ['Abundance', 'Rare; only ~100–150 cells in blastocyst', 'More abundant in certain tissues'],
          ['Proliferation rate', 'Very high; double every 24–48 hours', 'Lower; slower division'],
          ['Telomere length', 'Long telomeres; high telomerase activity', 'Shorter telomeres; limited divisions (Hayflick limit)'],
          ['Genetic stability', 'Can accumulate mutations after prolonged culture', 'Generally more stable'],
          ['Therapeutic potential', 'High; can produce many cell types', 'Lower; limited lineage options'],
          ['Ethical issues', 'Controversial; involves embryo destruction', 'Less controversial; use adult tissues'],
        ],
        caption: 'Comparison of embryonic and adult stem cells.',
      },
    },
    {
      type: 'heading',
      id: 'h-ipsc',
      data: { text: 'Induced Pluripotent Stem Cells (iPSCs)', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-ipsc-def',
      data: {
        text: 'Induced pluripotent stem cells (iPSCs) are adult cells (e.g. skin fibroblasts) that have been reprogrammed to a pluripotent state through forced expression of four transcription factors: OCT4, SOX2, KLF4, and c-MYC (Yamanaka factors, named after Shinya Yamanaka who discovered the technique in 2006). By introducing these factors (via viral vectors or other methods), the epigenetic landscape of the adult cell is rewritten, switching off adult-specific genes and switching on pluripotency genes. iPSCs are functionally similar to embryonic stem cells but are derived from adult tissues, avoiding ethical concerns.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-ipsc-advantages',
      data: {
        text: 'iPSCs offer significant advantages: (1) No ethical issues—derived from patient tissue, not embryos. (2) Patient-specific: iPSCs from a patient\'s own cells can be differentiated into any needed tissue, avoiding immune rejection. (3) Disease modelling: iPSCs from patients with genetic diseases can be differentiated into affected cell types (e.g. neurons from Parkinson\'s patients) to study disease mechanisms and test drugs. (4) Regenerative medicine: can theoretically produce replacement tissues for damaged organs. However, iPSCs have limitations: (1) reprogramming is inefficient (~0.1–1% of starting cells), (2) risk of forming teratomas (tumours containing multiple tissue types) if undifferentiated iPSCs are transplanted, (3) potential for genetic instability during reprogramming.',
      },
    },
    {
      type: 'heading',
      id: 'h-therapeutic-uses',
      data: { text: 'Therapeutic Applications of Stem Cells', level: 2 },
    },
    {
      type: 'list',
      id: 'list-therapy',
      data: {
        style: 'bullet',
        items: [
          'Leukaemia and other blood cancers: bone marrow transplantation (haematopoietic stem cell transplant) replaces cancerous blood-forming cells with healthy donor cells; donor HSCs repopulate the bone marrow and restore normal blood cell production',
          'Parkinson\'s disease: neural stem cells or ESC-derived dopaminergic neurons transplanted into the substantia nigra (brain region affected in Parkinson\'s) can replace lost neurons and restore dopamine production; clinical trials are ongoing',
          'Type 1 diabetes: pancreatic stem cells or ESC-derived beta cells can be transplanted to replace destroyed islet cells and restore insulin production; aims to eliminate insulin dependency',
          'Myocardial infarction (heart attack): cardiac stem cells or ESC-derived cardiomyocytes transplanted into infarcted regions can regenerate cardiac tissue, improve contractility, and reduce scar formation',
          'Spinal cord injury: neural stem cells can differentiate into neurons and oligodendrocytes to promote nerve regeneration and restore function; clinical trials are underway',
          'Burn and wound healing: stem cells (bone marrow-derived or adipose-derived) secrete growth factors that promote healing and can differentiate into skin cells; applied topically or injected into wounds',
          'Liver disease: hepatic stem cells or ESC-derived hepatocytes can replace liver tissue damaged by cirrhosis or hepatitis; potential for reducing transplant waiting lists',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-ethical-issues',
      data: { text: 'Ethical Issues in Stem Cell Research', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-embryo-issue',
      data: {
        text: 'Embryonic stem cell research raises profound ethical questions: (1) Moral status of the embryo—does a blastocyst (5–6 days old, ~100 cells) merit protection as a potential human? (2) Consent—whose permission is needed (egg donor, sperm donor, both)? (3) Commodification—should embryos and gametes be bought and sold? (4) Religious and philosophical perspectives differ significantly on when personhood begins. Some countries permit ESC research with strict regulations (e.g. use of "spare" IVF embryos only); others prohibit it entirely.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-adult-ethical',
      data: {
        text: 'Adult stem cell research and iPSC research are less ethically contentious but have their own concerns: (1) Informed consent—are donors fully informed about research uses? (2) Commercial use—should profits from stem cell therapies benefit the donor? (3) Access and equity—will therapies be affordable to all or only wealthy populations? (4) Safety and efficacy—untested stem cell therapies marketed directly to patients (direct-to-consumer) raise safety concerns.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-ethical',
      data: {
        style: 'key',
        title: 'Balancing Benefit and Ethics',
        text: 'Stem cell research offers genuine therapeutic hope for devastating diseases, but must be conducted within ethical frameworks. Many countries now favour iPSC research and adult stem cell research as ethically preferable to embryonic stem cell research, while maintaining high standards for patient safety, informed consent, and equitable access to therapies.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-potency',
      data: {
        style: 'tip',
        title: 'Remembering Potency',
        text: 'Think of potency as flexibility: Totipotent = total flexibility (any cell type, including placenta). Pluripotent = plural (many) cell types. Multipotent = multi (several) cell types within a lineage. Unipotent = uni (one) cell type. This mnemonic helps recall which stem cells can differentiate into what.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why can embryonic stem cells differentiate into any cell type while adult stem cells are more restricted? Embryonic stem cells (ESCs) are pluripotent because virtually all genes are accessible (euchromatin). As differentiation proceeds, genes are progressively silenced by epigenetic mechanisms (DNA methylation, histone modification), restricting the developmental potential.',
        apply: 'A patient with Type 1 diabetes has lost all their insulin-producing beta cells. A researcher proposes transplanting iPSC-derived beta cells. Outline the steps needed: from patient skin cell → iPSC → beta cell → transplantation. Identify the main technical and immunological challenges at each step.',
        analyze: 'Compare embryonic stem cells (ESCs), adult stem cells (ASCs), and induced pluripotent stem cells (iPSCs) in terms of potency, source, ethical issues, risk of immune rejection, and current clinical applications.',
        evaluate: 'Evaluate whether the ethical concerns surrounding embryonic stem cell research are resolved by the development of iPSC technology. Consider whether iPSCs are truly equivalent to ESCs, the remaining ethical issues with iPSCs, and the argument that all research that benefits patients is ethically justified.',
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-stem',
      data: {
        items: [
          { text: 'Can define and distinguish totipotent, pluripotent, multipotent, and unipotent cells', checked: false },
          { text: 'Know embryonic stem cells are from blastocyst inner cell mass; adult stem cells from various tissues', checked: false },
          { text: 'Understand iPSCs are adult cells reprogrammed with Yamanaka factors', checked: false },
          { text: 'Can list therapeutic uses: leukaemia (bone marrow), Parkinson\'s (neural cells), diabetes (pancreatic cells)', checked: false },
          { text: 'Appreciate ethical issues with embryonic stem cells vs. less controversial adult/iPSC approaches', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-stem',
      data: {
        text: 'Stem cells classified by potency: totipotent (zygote, 8-cell stage, any cell type), pluripotent (ESCs, iPSCs, most cell types), multipotent (bone marrow, neural, mesenchymal; limited lineages), unipotent (one cell type only). ESCs from blastocyst inner cell mass are pluripotent but raise ethical concerns about embryo destruction. Adult stem cells (ASCs) from bone marrow, fat, etc. are multipotent, less controversial, but limited in scope. iPSCs (adult cells reprogrammed with OCT4, SOX2, KLF4, c-MYC) are pluripotent, patient-specific, ethically preferable, but have reprogramming inefficiency and teratoma risk. Therapeutic uses: leukaemia (HSC transplant), Parkinson\'s (neural cells), diabetes (beta cells), cardiac repair, spinal injury, wound healing. Ethical issues: embryo status, consent, access, safety.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-potency',
        prompt: 'Define totipotent, pluripotent, multipotent, and unipotent, with examples of each.',
      },
      {
        id: 'cue-2',
        blockId: 'p-ipsc-def',
        prompt: 'What are induced pluripotent stem cells, and how are they created?',
      },
      {
        id: 'cue-3',
        blockId: 'list-therapy',
        prompt: 'Give three examples of diseases being treated with stem cell therapy and explain the approach.',
      },
      {
        id: 'cue-4',
        blockId: 'p-embryo-issue',
        prompt: 'What are the main ethical concerns with embryonic stem cell research?',
      },
    ],
    summaryText: 'Potency spectrum: totipotent (any cell, including extraembryonic; zygote), pluripotent (most cell types, not extraembryonic; ESC, iPSC), multipotent (limited lineage; bone marrow HSC), unipotent (one cell type). ESCs from blastocyst are pluripotent, high proliferation, ethical concerns (embryo destruction). ASCs (bone marrow, fat, neural) are multipotent, slower division, less controversial. iPSCs: adult cells reprogrammed with Yamanaka factors (OCT4, SOX2, KLF4, c-MYC); pluripotent, patient-specific, ethically preferable, but low reprogramming efficiency (~0.1–1%), teratoma risk. Therapies: leukaemia (HSC transplant restores blood production), Parkinson\'s (dopaminergic neurons), diabetes (insulin-producing beta cells), cardiac repair, spinal cord injury (neural regeneration). Ethical: embryo status, consent, commodification, access equity.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Induced Pluripotent Stem Cells: Reprogramming Adult Cells',
      detail: 'Yamanaka\'s 2006 discovery that four transcription factors (OCT4, SOX2, KLF4, c-MYC) can reprogram adult fibroblasts to pluripotency transformed regenerative medicine by enabling patient-specific, ethically preferable stem cell generation.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['stem cells', 'iPSC', 'regenerative medicine'],
    },
  ],
};
