export const note_biology_6_6A_5 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Master synoptic connections across A2 biology topics, linking energy metabolism, gene expression, immunity, photosynthesis, and homeostasis. Develop skills for writing high-scoring 6-mark synoptic essays by integrating multiple biological systems.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Synthesis Across A2 Topics', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Synoptic questions require integration of knowledge from across the entire A-Level curriculum. Rather than isolated topics (respiration, photosynthesis, gene expression), you must connect multiple systems to explain complex biological phenomena. Success requires identifying how different topics interact and building multi-step explanations.',
      },
    },
    {
      id: 'h-synoptic1',
      type: 'heading',
      data: { text: 'Synoptic Connection 1: Respiration, ATP, Muscle Contraction, and Exercise Fatigue', level: 3 },
    },
    {
      id: 'p-syn1-1',
      type: 'paragraph',
      data: {
        text: 'The response to prolonged exercise reveals integration of respiration, metabolic adaptation, and homeostatic control:',
      },
    },
    {
      id: 'list-syn1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Energy demand: Muscle contraction requires ATP. Myosin ATPase hydrolyses ATP on the thick filament, powering the power stroke that pulls actin towards the centre of the sarcomere.' },
          { text: 'Aerobic respiration: Glucose and fatty acids are oxidised through glycolysis, Krebs cycle, and oxidative phosphorylation, generating ~30–32 ATP per glucose. Oxygen availability is critical.' },
          { text: 'Oxygen deficit during early exercise: At exercise onset, oxygen delivery lags behind demand. Mitochondria cannot oxidise substrate fast enough.' },
          { text: 'Anaerobic metabolism: Pyruvate from glycolysis is reduced to lactate by lactate dehydrogenase (LDH), regenerating NAD⁺ to sustain glycolysis. This yields only 2 ATP per glucose but is rapid.' },
          { text: 'Lactate accumulation: Lactate diffuses into blood. Blood pH drops (lactate is a weak acid, H⁺ + lactate⁻). This is perceived as metabolic acidosis.' },
          { text: 'Chemoreceptor response: Peripheral chemoreceptors (carotid and aortic bodies) sense decreased blood pH and increased CO₂. They increase action potential frequency.' },
          { text: 'Ventilation increase: Increased respiratory centre activity → increased breathing rate and depth. More O₂ is inhaled and delivered to blood.' },
          { text: 'Aerobic resumption: As oxygen delivery increases and lactate is removed (oxidised in muscle and liver gluconeogenesis), aerobic respiration resumes. Lactate ↘, pH ↗, ventilation normalises.' },
        ],
      },
    },
    {
      id: 'h-synoptic2',
      type: 'heading',
      data: { text: 'Synoptic Connection 2: Gene Technology, CRISPR, Cancer Prevention, and Immunotherapy', level: 3 },
    },
    {
      id: 'p-syn2-1',
      type: 'paragraph',
      data: {
        text: 'Modern cancer treatment exemplifies the integration of gene technology and immunology:',
      },
    },
    {
      id: 'list-syn2',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Oncogene mutations: Cancers arise from mutations in oncogenes (e.g. BRCA1, p53, EGFR) that promote uncontrolled proliferation or prevent apoptosis.' },
          { text: 'CRISPR-Cas9 correction: CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) uses the Cas9 nuclease to recognise and cut specific mutant DNA sequences. A repair template can restore the normal gene sequence. This corrects oncogenic mutations in cancer cells or in germline cells to prevent hereditary cancer.' },
          { text: 'CAR-T cell therapy: Patient T cells are extracted and genetically engineered using a lentiviral vector to express chimeric antigen receptors (CARs) targeting tumour-associated antigens (e.g. CD19 on leukaemia cells).' },
          { text: 'T cell activation: CAR-T cells bind tumour cells via their CARs. Intracellular signalling cascades activate T cell proliferation (IL-2 autocrine loop) and cytokine production (IFN-γ, TNF-α).' },
          { text: 'Cytotoxic killing: Activated CAR-T cells release perforins (create pores in tumour cell membrane) and granzymes (trigger caspase cascades → apoptosis). Tumour cell death follows.' },
          { text: 'Immune memory: Long-lived CAR-T cells (memory T cells) persist and can recognise and kill tumour cells that recur, providing durable remission.' },
        ],
      },
    },
    {
      id: 'h-synoptic3',
      type: 'heading',
      data: { text: 'Synoptic Connection 3: Photosynthesis, Respiration, and Plant Growth in Food Chains', level: 3 },
    },
    {
      id: 'p-syn3-1',
      type: 'paragraph',
      data: {
        text: 'Energy flow through ecosystems depends on the coordinated action of photosynthesis and respiration:',
      },
    },
    {
      id: 'list-syn3',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Light reactions (thylakoid membrane): Photosystem II absorbs light, exciting chlorophyll electrons to drive water-splitting (photolysis: 2H₂O → O₂ + 4H⁺ + 4e⁻). Electrons pass through the electron transport chain, pumping H⁺ into the thylakoid lumen. ATP synthase uses the H⁺ gradient to phosphorylate ADP → ATP. NADP⁺ is reduced to NADPH.' },
          { text: 'Calvin cycle (stroma): CO₂ is fixed to RuBP (5-carbon) by Rubisco, forming 3-PG (3-carbon). ATP and NADPH (from light reactions) are used to reduce 3-PG to G3P. Most G3P regenerates RuBP; some G3P exits to form glucose.' },
          { text: 'Glucose synthesis and storage: G3P is used for starch synthesis (storage in chloroplasts) and cellulose (cell wall). These provide structural and chemical energy for plant growth.' },
          { text: 'Active transport and mineral uptake: ATP from respiration powers root hair Na⁺/K⁺ ATPase, creating an electrochemical gradient for mineral uptake (NO₃⁻, PO₄³⁻, etc.). These minerals are essential for protein synthesis (N), nucleic acid synthesis (P), and enzyme cofactors (Mg²⁺, Zn²⁺).' },
          { text: 'Plant growth: Synthesised proteins, carbohydrates, and lipids are assembled into new tissues (leaves, roots, vascular tissue). Increased leaf area captures more light → more photosynthesis → more growth (positive feedback, limited by water and nutrients).' },
          { text: 'Energy transfer to consumers: Herbivores consume plant tissue. ~10% of plant energy is retained as herbivore biomass; ~90% is lost as heat in respiration or undigested material (fecal energy loss).' },
          { text: 'Trophic efficiency: Each trophic level (herbivore, carnivore, top predator) shows ~10% energy retention. This is why ecosystems have pyramids of energy (broad producers base, narrow predator apex).' },
        ],
      },
    },
    {
      id: 'h-essay',
      type: 'heading',
      data: { text: 'How to Approach 6-Mark Synoptic Essays', level: 3 },
    },
    {
      id: 'p-essay-1',
      type: 'paragraph',
      data: {
        text: 'A 6-mark synoptic essay typically asks you to "Explain how [System A] and [System B] interact to [achieve biological outcome]." The key is continuous prose linking multiple concepts in logical order.',
      },
    },
    {
      id: 'callout-essay',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Essay Writing Strategy for Synoptic Questions',
        text: 'Step 1: Plan with a spider diagram (5 minutes)\n- Write the central concept in the middle (e.g. "Exercise response")\n- Draw branches for each system: respiratory, circulatory, muscular, metabolic, hormonal, nervous\n- Add 2–3 key points per system\n\nStep 2: Write continuous prose (15 minutes for 6-mark)\n- Introduction (1–2 sentences): Define key terms, state the biological principle\n- Body (3–4 paragraphs): Explain mechanisms in logical order. Use connectives: "As a result," "This causes," "Consequently," "In response to"\n- Conclusion (1 sentence): Summarise the integrated outcome or adaptive value\n\nStep 3: Mark-gaining techniques\n- Use precise terminology: "myosin ATPase" not "enzyme," "chemoreceptors" not "sensors"\n- Include a worked calculation if relevant (shows deep understanding)\n- Reference a named example or specific case study (e.g. "CAR-T therapy for ALL")\n- Use linking phrases to show integration: "This mechanism is linked to…," "As part of this integrated response…"\n- Evaluate or contrast if the question allows (e.g. "In anaerobic conditions, the yield drops to 2 ATP per glucose, limiting endurance")\n\nCommon pitfall: Writing separate paragraphs about each system without linking them. Instead, weave systems together: "This requires increased respiration to generate ATP, which demands increased oxygen delivery via the cardiovascular system, triggering increased ventilation via chemoreceptor feedback".',
      },
    },
    {
      id: 'h-themes',
      type: 'heading',
      data: { text: 'Common Synoptic Themes and Connections', level: 3 },
    },
    {
      id: 'table-themes',
      type: 'comparisonTable',
      data: {
        headers: ['Biological Principle', 'System A (Input)', 'System B (Output)', 'Connecting Mechanism'],
        rows: [
          ['Negative feedback (homeostasis)', 'Body temperature ↑', 'Thermoregulation (sweating, vasodilation)', 'Temperature receptors → hypothalamus → sympathetic nerves/hormones → effectors'],
          ['Energy supply and demand', 'Muscle contraction demand ↑', 'Respiration and glucose mobilisation ↑', 'ATP depletion → AMP kinase activation → glycogenolysis and aerobic respiration'],
          ['Gene expression to cell function', 'Insulin gene transcription ↑', 'Pancreatic β-cell insulin secretion ↑', 'Blood glucose ↑ → transcription factors → mRNA translation → insulin protein synthesis and exocytosis'],
          ['Population growth and limiting factors', 'Bacterial growth rate ↑', 'Nutrient depletion, waste accumulation', 'Density-dependent factors reduce fecundity and increase mortality → stationary phase'],
          ['Evolution and natural selection', 'Antibiotic exposure', 'MRSA resistance allele frequency ↑', 'Mutations create resistance genes → selection pressure favours resistant phenotype → allele frequency change'],
          ['Immune response integration', 'Pathogen invasion', 'T cell activation, antibody production, memory formation', 'Antigen presentation → clonal selection → differentiation → humoral and cellular immune response'],
          ['Enzyme kinetics and regulation', 'Substrate concentration ↑', 'Enzyme velocity initially ↑, then plateaus (Vmax)', 'Enzyme active sites saturate; further velocity increase requires increased enzyme concentration (allosteric regulation or increased expression)'],
          ['Photosynthesis and respiration balance', 'Light intensity ↑', 'Carbon fixation rate ↑, stomatal opening ↑', 'Light reactions generate ATP and NADPH → drive Calvin cycle ↑; photosynthate production ↑ → growth ↑'],
        ],
        caption: 'Common synoptic themes linking two or more A-Level topics',
      },
    },
    {
      id: 'h-practice',
      type: 'heading',
      data: { text: 'Practice Synoptic Question', level: 3 },
    },
    {
      id: 'callout-practice',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Question: Prolonged Exercise Response (6 marks)',
        text: 'Question: "Explain how the body responds to prolonged exercise, referring to respiratory, circulatory, muscular, and endocrine systems. Your answer should relate energy supply to demand and account for fatigue."\n\nOutline answer (combining all synoptic connections):\n\n1. Energy demand: Muscle contraction requires ATP hydrolysis by myosin ATPase. Prolonged contraction rapidly depletes muscle ATP/phosphocreatine stores.\n\n2. Metabolic response: Glycolysis accelerates, yielding pyruvate. Oxidative phosphorylation in mitochondria oxidises pyruvate, increasing ATP regeneration. However, oxygen delivery initially lags.\n\n3. Anaerobic supplement: When oxygen is limited, pyruvate → lactate (LDH). This causes blood lactate accumulation and pH drop (metabolic acidosis).\n\n4. Respiratory response: Chemoreceptors (carotid/aortic bodies) detect ↓pH and ↑CO₂. They signal the respiratory centre. Ventilation rate ↑, minute volume ↑. More O₂ is inhaled; blood oxygen tension ↑.\n\n5. Circulatory response: Sympathetic nervous system ↑ heart rate and stroke volume (via noradrenaline on β-adrenergic receptors). Cardiac output (HR × SV) ↑. Vasoconstriction in non-essential organs (digestive) and vasodilation in muscles (local metabolites) prioritise blood to working muscles.\n\n6. Hormonal response: ↑Adrenaline (from adrenal medulla) reinforces sympathetic effects. Glucagon ↑ (and cortisol), promoting liver glycogenolysis and gluconeogenesis, maintaining blood glucose for muscle uptake.\n\n7. Fatigue mechanisms: Lactate accumulation → acidosis → inhibits glycolytic enzymes and interferes with cross-bridge cycling (actin-myosin interaction) → reduced force. Central fatigue also occurs (CNS neurotransmitter depletion). Recovery requires lactate removal (Cori cycle: lactate → glucose in liver) and replenishment of PCr and glycogen.',
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example: Linking Five Systems in One Answer', level: 3 },
    },
    {
      id: 'p-worked',
      type: 'paragraph',
      data: {
        text: 'The practice question above demonstrates synoptic thinking: it connects muscular (contraction, fatigue), metabolic (respiration, anaerobic metabolism, lactate), nervous (chemoreceptors, respiratory centre), endocrine (adrenaline, glucagon), and circulatory (cardiac output, blood distribution) systems. Each sentence advances the explanation; none is isolated. This is the hallmark of a 6-mark answer.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Synoptic questions test understanding of how biological systems are integrated, not just how each works in isolation. Homeostatic mechanisms (negative feedback), energy flow (ATP depletion → increased respiration), and signalling cascades (chemoreceptors → breathing → oxygen delivery) are the "glue" connecting topics. Recognising these patterns across different contexts is key.',
        apply: 'Outline a synoptic answer to: "Explain how photosynthesis and respiration are linked in sustaining plant growth and ecosystem energy flow." Include at least three systems or processes (photosynthesis light/dark reactions, respiration, active transport, nutrient uptake, growth).',
        analyze: 'Compare the synoptic connection between "Gene technology for cancer" (CRISPR correction + CAR-T immunotherapy) with "Respiration and exercise" (oxygen demand → chemoreceptor feedback → ventilation). Both involve feedback loops. Why is feedback central to synoptic thinking?',
        evaluate: 'A student writes: "Exercise causes increased breathing because muscles need more oxygen." This is true but not synoptic. Rewrite it as a synoptic explanation that includes anaerobic metabolism, lactate, pH, and chemoreceptors. What depth is gained by connecting more systems?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can trace the energy pathway from glucose/fatty acids → ATP → myosin ATPase → muscle contraction.', checked: false },
          { text: 'I understand how anaerobic metabolism, lactate accumulation, pH drop, and chemoreceptor feedback integrate during exercise.', checked: false },
          { text: 'I can explain CRISPR and CAR-T therapy and how they integrate gene technology with immune function.', checked: false },
          { text: 'I can link photosynthesis (light reactions → Calvin cycle), respiration, active transport, and plant growth in a coherent explanation.', checked: false },
          { text: 'I can identify at least three synoptic connections within the A-Level curriculum (negative feedback, energy flow, gene expression).', checked: false },
          { text: 'I can write a 6-mark synoptic essay using a spider diagram plan, continuous prose, and linking phrases.', checked: false },
          { text: 'I can include precise terminology, worked calculations, and specific examples in synoptic answers.', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Synoptic questions integrate multiple A-Level topics into coherent explanations. Key connections include: (1) Exercise response linking respiration, lactate metabolism, chemoreceptor feedback, ventilation, and circulation; (2) Cancer treatment integrating CRISPR gene correction, CAR-T immunotherapy, T cell activation, and cytotoxic killing; (3) Ecosystem energy flow linking photosynthesis (light reactions + Calvin cycle), respiration, ATP-driven active transport, plant growth, and trophic efficiency (~10% transfer). Write synoptic essays using spider diagram planning, continuous prose with linking phrases, precise terminology, and specific examples. Common themes include negative feedback, energy supply-demand coupling, gene expression to function, and natural selection. Success requires recognising how different systems work together to achieve biological outcomes.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-synoptic1',
        prompt: 'Trace the pathway from oxygen deficit during exercise → anaerobic metabolism → lactate accumulation → pH drop → chemoreceptor response → increased ventilation.',
      },
      {
        id: 'cue-2',
        blockId: 'h-synoptic2',
        prompt: 'Explain how CRISPR and CAR-T therapy together address cancer: gene correction + immune activation.',
      },
      {
        id: 'cue-3',
        blockId: 'h-synoptic3',
        prompt: 'Link photosynthesis (ATP/NADPH from light reactions, glucose from Calvin cycle) → respiration → active transport → plant growth.',
      },
      {
        id: 'cue-4',
        blockId: 'h-essay',
        prompt: 'List the five steps for writing a strong 6-mark synoptic essay, including planning, prose, and mark-gaining techniques.',
      },
      {
        id: 'cue-5',
        blockId: 'table-themes',
        prompt: 'Give three examples of synoptic themes and explain how negative feedback links them.',
      },
      {
        id: 'cue-6',
        blockId: 'h-practice',
        prompt: 'Outline the synoptic pathway: muscle ATP demand ↑ → anaerobic + aerobic respiration → lactate ↑ → pH ↓ → chemoreceptors ↑ → ventilation ↑ → O₂ delivery ↑.',
      },
    ],
    summaryText: 'Synoptic thinking integrates multiple A-Level systems. Exercise response: ATP depletion → anaerobic metabolism → lactate → pH drop → chemoreceptor feedback → ventilation ↑ → oxygen delivery ↑. Cancer treatment: CRISPR corrects oncogenic mutations; CAR-T therapy engineers T cells to recognise and kill tumour cells. Energy flow: photosynthesis generates ATP/NADPH and glucose; respiration yields ATP for active transport; minerals support protein synthesis; plant growth feeds food chains (~10% energy transfer/trophic level). Write 6-mark essays with spider diagram planning, continuous prose, linking phrases, precise terminology, and examples.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Lactate Metabolism During Exercise',
      detail: 'Rowell et al. (1966) showed lactate accumulation correlates with chemoreceptor stimulation and increased ventilation, not lactic acid buffering.',
      year: '1966',
      source: 'Journal of Applied Physiology',
      tags: ['exercise-physiology', 'respiration'],
    },
    {
      id: 'ev-2',
      title: 'CRISPR-Cas9 Gene Editing',
      detail: 'Jinek et al. (2012) and Ran et al. (2013) developed CRISPR-Cas9 as a programmable gene-editing tool, revolutionising genetic therapy.',
      year: '2012–2013',
      source: 'Science, Nature Biotechnology',
      tags: ['gene-technology', 'cancer-therapy'],
    },
    {
      id: 'ev-3',
      title: 'CAR-T Cell Immunotherapy',
      detail: 'Maude et al. (2014) demonstrated CAR-T cell therapy achieved complete remission in 90% of children with relapsed/refractory ALL.',
      year: '2014',
      source: 'New England Journal of Medicine',
      tags: ['immunotherapy', 'cancer-treatment'],
    },
    {
      id: 'ev-4',
      title: 'Ecological Energy Transfer',
      detail: 'Lindeman (1942) established the 10% energy transfer law, showing ~90% is lost as heat and non-digested material per trophic level.',
      year: '1942',
      source: 'The Trophic-Dynamic Aspect of Ecology',
      tags: ['ecosystem-ecology', 'energy-flow'],
    },
  ],
};
