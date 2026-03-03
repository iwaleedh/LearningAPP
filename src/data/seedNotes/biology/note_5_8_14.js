export const note_biology_5_8_14 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Evaluate the ethical issues surrounding GM crops, gene therapy, designer babies and genetic enhancement, applying ethical frameworks to justify a reasoned position.' },
      terms: ['GM crops', 'gene therapy', 'germline editing', 'eugenics'],
    },
    {
      id: 'h-gm',
      type: 'heading',
      data: { text: 'GM Crops: Arguments and Evidence', level: 2 },
      terms: [],
    },
    {
      id: 'p-gm',
      type: 'paragraph',
      data: { text: 'GM crops include: herbicide-resistant crops (Roundup Ready soybean — glyphosate resistance via EPSPS gene from Agrobacterium), Bt crops (Cry protein gene from Bacillus thuringiensis — toxic to insect larvae, not mammals), Golden Rice (beta-carotene biosynthesis genes — addresses vitamin A deficiency in developing countries). Benefits: increased yield, reduced pesticide use, nutritional enhancement. Concerns: herbicide-resistant weed evolution (superweeds), gene flow to wild relatives, corporate monopoly on seed supply, untested long-term ecological effects, consumer choice.' },
      terms: ['GM crops'],
    },
    {
      id: 'table-gm',
      type: 'comparisonTable',
      data: {
        headers: ['Argument FOR GM crops', 'Argument AGAINST GM crops'],
        rows: [
          ['Increased yield → food security', 'Corporate control of seed supply (Monsanto/Bayer)'],
          ['Reduced pesticide use (Bt crops)', 'Evolution of resistant pests/weeds'],
          ['Nutritional enhancement (Golden Rice)', 'Gene flow to wild relatives — unknown ecological impact'],
          ['Drought/flood tolerance → climate adaptation', 'Consumer choice undermined (unlabelled in USA)'],
          ['Reduced agricultural land needed', 'Long-term safety not fully established'],
        ],
        caption: 'Arguments for and against GM crops',
      },
      terms: [],
    },
    {
      id: 'h-gt',
      type: 'heading',
      data: { text: 'Somatic vs Germline Gene Therapy', level: 2 },
      terms: [],
    },
    {
      id: 'p-gt',
      type: 'paragraph',
      data: { text: 'Somatic gene therapy: corrects genetic defects in non-reproductive cells; changes not heritable; examples: Luxturna (RPE65 gene for blindness), Zolgensma (SMN1 for spinal muscular atrophy), CAR-T cell therapy (engineering T cells ex vivo). Widely accepted ethically as it affects only the treated patient. Germline gene therapy: edits embryo, sperm or eggs; changes heritable to all descendants. Banned in most countries (He Jiankui 2018 scandal: CRISPR-edited CCR5 in human embryos — criminal prosecution in China). Concerns: unknown off-target effects propagated through generations, true consent impossible (affects unborn individuals), risk of misuse for enhancement.' },
      terms: ['gene therapy', 'germline editing'],
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'He Jiankui (2018) — Cautionary Case Study',
        text: 'Chinese scientist He Jiankui used CRISPR to disable CCR5 (HIV co-receptor) in human embryos, resulting in live births. This was widely condemned: no medical necessity (mother was HIV-negative), inadequate safety data, deceptive consent process, no regulatory approval. He received a 3-year prison sentence. This case led to international calls for a global moratorium on germline editing.',
      },
      terms: [],
    },
    {
      id: 'h-eugenics',
      type: 'heading',
      data: { text: 'Designer Babies and Eugenics', level: 2 },
      terms: [],
    },
    {
      id: 'p-eugenics',
      type: 'paragraph',
      data: { text: 'Designer babies: selecting or editing embryo genotype for desired traits. PGD for disease prevention is widely accepted. Selecting for non-medical traits (intelligence, height, eye colour) raises eugenics concerns — historically associated with compulsory sterilisation programmes (Nazi Germany, USA 1920s–1960s). Modern distinction: individual reproductive choice vs state-directed programmes. The "expressivist objection": selecting against disability implies disabled lives are less valuable. Enhancement vs treatment boundary is blurred (deafness as disability vs cultural identity).' },
      terms: ['eugenics'],
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Regulatory Frameworks to Know',
        text: 'UK: HFEA (Human Fertilisation and Embryology Authority) licenses IVF and PGD; research on embryos permitted up to 14 days. International: Oviedo Convention bans germline modification; WHO Expert Advisory Committee on Human Genome Editing (2021) recommends oversight framework. USA: FDA regulates gene therapy; Congress bans federal funding for germline research.',
      },
      terms: [],
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is germline editing considered more ethically problematic than somatic gene therapy, even if the intention is to prevent serious disease? Germline changes are heritable — they affect all descendants without their consent. If off-target mutations are introduced, they could spread through a population over generations. The person most affected (the future child and their descendants) cannot give informed consent, which violates the fundamental ethical principle of autonomy.',
        apply: 'Golden Rice contains beta-carotene precursors. In regions with vitamin A deficiency (VAD), 670,000 children die annually from VAD complications. If Golden Rice adoption reduced VAD deaths by 10%, calculate the annual lives saved. Weigh this benefit against the concern that Golden Rice normalises GM food acceptance. Does the scale of human suffering justify commercial release despite unresolved ecological concerns?',
        analyze: 'Compare somatic gene therapy (CAR-T, Luxturna, Zolgensma) with germline editing in terms of: heritability of change, ethical acceptability, regulatory status, technical maturity, and risk of off-target effects. Explain why somatic therapy is universally accepted while germline editing remains controversial even for preventing lethal genetic disease.',
        evaluate: 'Evaluate whether a global moratorium on germline gene editing is the right policy response to the He Jiankui case. Consider: whether it prevents legitimate research that could eliminate heritable diseases (Huntington\'s, Tay-Sachs), whether it disadvantages countries that comply while others do not (international governance problem), and whether strict regulation (rather than prohibition) would better balance innovation with safety.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can give three specific examples of GM crops and explain the gene modification in each', checked: false },
          { text: 'I can distinguish somatic gene therapy from germline editing with ethical analysis of each', checked: false },
          { text: 'I can describe the He Jiankui case and explain why it was condemned', checked: false },
          { text: 'I can apply ethical frameworks (autonomy, beneficence, justice, non-maleficence) to genetic ethics questions', checked: false },
          { text: 'I can explain the regulatory role of the HFEA in the UK', checked: false },
        ],
      },
      terms: [],
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'GM crops: Roundup Ready (herbicide resistance), Bt (insect resistance), Golden Rice (vitamin A). Arguments: food security, reduced pesticide use vs corporate control, gene flow, consumer choice. Somatic gene therapy (Luxturna, CAR-T) widely accepted — non-heritable. Germline editing heritable, banned in most countries after He Jiankui scandal. Designer babies: PGD for disease acceptable; enhancement raises eugenics concerns. UK: HFEA regulates. Ethical frameworks: autonomy, beneficence, non-maleficence, justice.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-gm', prompt: 'Name three examples of GM crops and the specific genetic modification in each.' },
      { id: 'cue-2', blockId: 'p-gt', prompt: 'Distinguish somatic gene therapy from germline editing. Give one approved example of somatic gene therapy.' },
      { id: 'cue-3', blockId: 'callout-warning', prompt: 'Describe the He Jiankui case. Why was it widely condemned by the scientific community?' },
      { id: 'cue-4', blockId: 'p-eugenics', prompt: 'What is the expressivist objection to selecting against genetic conditions in embryos?' },
    ],
    summaryText: 'GM crops: herbicide resistance, Bt toxin, Golden Rice. Somatic gene therapy non-heritable, accepted. Germline editing heritable, banned. He Jiankui: CCR5 CRISPR in embryos, condemned, imprisoned. Designer babies: disease prevention acceptable; enhancement = eugenics concerns.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Ethics of Gene Editing — Nuffield Council on Bioethics', detail: 'Report on heritable genome editing concludes it could be morally permissible under stringent conditions, but international governance framework is essential.', year: '2018', source: 'Nuffield Council on Bioethics', tags: ['ethics', 'gene editing', 'germline', 'CRISPR'] },
  ],
};
