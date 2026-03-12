export const note_biology_1_1_10 = {
  blocks: [
    {
      id: 'obj-antioxidants',
      type: 'objective',
      data: {
        text: 'Describe the nature of free radicals and reactive oxygen species (ROS). Explain how antioxidants neutralise free radicals and protect cells from oxidative damage. Understand the link between antioxidants, CVD, and diet.',
      },
    },
    {
      id: 'h-free-radicals',
      type: 'heading',
      data: { text: 'Free Radicals and Reactive Oxygen Species', level: 2 },
    },
    {
      id: 'p-free-radicals',
      type: 'paragraph',
      data: {
        text: 'A free radical is an atom or molecule with one or more unpaired electrons in its outermost shell. This makes it highly reactive — it seeks to gain (or donate) an electron by reacting with other molecules. Reactive oxygen species (ROS) are a family of free radicals and related compounds derived from oxygen. They are produced as natural by-products of aerobic respiration in mitochondria, and also from immune responses, UV radiation, tobacco smoke, and air pollution.',
      },
    },
    {
      id: 'list-ros-sources',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Normal aerobic metabolism — electrons "leak" from the electron transport chain in mitochondria and combine with O₂ → superoxide (O₂•⁻) and hydrogen peroxide (H₂O₂)',
          'Tobacco smoke — contains high concentrations of free radicals',
          'UV radiation — causes DNA damage and generates ROS in skin cells',
          'Ionising radiation — splits water molecules, generating hydroxyl radicals (•OH)',
          'Immune cell activation — neutrophils deliberately produce ROS to kill bacteria ("oxidative burst")',
        ],
      },
    },
    {
      id: 'h-oxidative-damage',
      type: 'heading',
      data: { text: 'Oxidative Damage to Cells', level: 2 },
    },
    {
      id: 'p-oxidative-damage',
      type: 'paragraph',
      data: {
        text: 'When free radicals react with macromolecules in cells, they cause oxidative damage. This contributes to ageing, cancer, and CVD.',
      },
    },
    {
      id: 'table-radical-damage',
      type: 'comparisonTable',
      data: {
        caption: 'Targets of free radical damage and consequences',
        headers: ['Target molecule', 'Damage caused', 'Consequence'],
        rows: [
          ['Lipids (unsaturated fatty acids in membranes)', 'Lipid peroxidation — chain reaction oxidising membrane phospholipid tails', 'Membrane disruption; cell damage; LDL oxidation → atherosclerosis'],
          ['Proteins (enzymes, structural proteins)', 'Oxidation of amino acid side-chains; cross-linking', 'Loss of enzyme activity; structural damage; clumping of proteins (e.g. cataracts)'],
          ['DNA', 'Base oxidation (e.g. G → 8-oxoguanine); strand breaks', 'Mutations → cancer; mitochondrial dysfunction'],
          ['LDL cholesterol', 'Oxidation of lipid in LDL particle (oxLDL)', 'OxLDL taken up by macrophages → foam cells → atherosclerotic plaques'],
        ],
      },
    },
    {
      id: 'callout-key-ldl-oxidation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Free Radicals, LDL, and CVD',
        text: 'Free radicals oxidise LDL particles in blood plasma → oxidised LDL (oxLDL). OxLDL is taken up by macrophages (via scavenger receptors, not normal LDL receptors) → forms foam cells → accumulates in artery walls. This is key in the progression from healthy artery → fatty streak → atherosclerotic plaque. Antioxidants prevent LDL oxidation and therefore may reduce CVD risk.',
      },
    },
    {
      id: 'h-antioxidants',
      type: 'heading',
      data: { text: 'Antioxidants', level: 2 },
    },
    {
      id: 'p-antioxidants',
      type: 'paragraph',
      data: {
        text: 'Antioxidants are molecules that can donate electrons to free radicals, neutralising them without themselves becoming dangerously reactive. By "scavenging" free radicals, antioxidants break the chain reaction of oxidative damage. Antioxidants are found both inside cells (enzymatic) and in foods (dietary).',
      },
    },
    {
      id: 'table-antioxidants',
      type: 'comparisonTable',
      data: {
        caption: 'Key antioxidants and their sources',
        headers: ['Antioxidant', 'Type', 'Sources', 'Mechanism'],
        rows: [
          ['Vitamin C (ascorbic acid)', 'Water-soluble dietary antioxidant', 'Citrus fruits, peppers, broccoli, kiwi', 'Donates electrons to free radicals in cytoplasm and plasma; directly reduces ROS; also regenerates vitamin E'],
          ['Vitamin E (tocopherol)', 'Fat-soluble dietary antioxidant', 'Nuts, seeds, vegetable oils, green vegetables', 'Protects cell membranes from lipid peroxidation; intercalates into phospholipid bilayer; stops radical chain reactions'],
          ['Beta-carotene (provitamin A)', 'Fat-soluble dietary antioxidant', 'Carrots, tomatoes, sweet potato, green leafy veg', 'Quenches singlet oxygen free radicals in membranes'],
          ['Superoxide dismutase (SOD)', 'Enzymatic antioxidant (endogenous)', 'Produced by cells — not dietary', 'Converts superoxide (O₂•⁻) → H₂O₂; works in cytoplasm and mitochondria'],
          ['Catalase, Glutathione peroxidase', 'Enzymatic antioxidants (endogenous)', 'Produced by cells', 'Converts H₂O₂ → water + oxygen; prevents hydroxyl radical formation from H₂O₂'],
        ],
      },
    },
    {
      id: 'callout-worked-antioxidant',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'How Vitamin C Neutralises a Free Radical',
        text: 'Free radical (R•) has unpaired electron → attacks lipid membrane to steal electron → chain reaction continues.\n\nVitamin C (ascorbate) donates an electron to R•:\n  R• + ascorbate → R-H + ascorbyl radical•\n\nThe ascorbyl radical• is stable (unpaired electron delocalised) and does not cause further damage. Vitamin C is then "used up" (oxidised to dehydroascorbate) but can be regenerated by glutathione or vitamin E.',
      },
    },
    {
      id: 'h-diet-antioxidants',
      type: 'heading',
      data: { text: 'Diet, Antioxidants, and CVD', level: 2 },
    },
    {
      id: 'p-diet-antioxidants',
      type: 'paragraph',
      data: {
        text: 'Diets rich in fruits and vegetables (which contain vitamins C and E, carotenoids, and polyphenols) are associated with lower rates of CVD and some cancers. Epidemiological studies show an inverse correlation between antioxidant intake and CVD mortality. The likely mechanism is that antioxidants prevent LDL oxidation, reducing foam cell formation and atherosclerosis. Additionally, antioxidant vitamins help protect the endothelial lining of arteries from free radical damage, reducing the initiation of plaque formation.',
      },
    },
    {
      id: 'callout-tip-study-design',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Correlation vs. Causation in Antioxidant Research',
        text: 'Observational studies show people eating more antioxidants have less CVD. However, some large clinical trials of antioxidant supplements FAILED to reduce CVD mortality. This suggests: (1) the beneficial effects may come from WHOLE FOODS (multiple compounds working together), not isolated supplements; or (2) antioxidants are a marker of a generally healthy diet, not the direct cause. This is an important lesson about correlation vs. causation.',
      },
    },
    {
      id: 'h-balance',
      type: 'heading',
      data: { text: 'Balance Between Free Radicals and Antioxidants', level: 2 },
    },
    {
      id: 'p-oxidative-stress',
      type: 'paragraph',
      data: {
        text: 'In healthy cells, production of free radicals and antioxidant defences are in balance. When free radical production exceeds antioxidant capacity, oxidative stress occurs. Factors increasing oxidative stress: smoking, pollution, prolonged intense exercise, high-fat diet, ageing, disease states. Lifestyle factors that reduce oxidative stress: eating antioxidant-rich foods (fruit and vegetables), not smoking, moderate exercise, maintaining a healthy weight.',
      },
    },
    {
      id: 'checklist-antioxidants',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define a free radical and explain what makes it reactive', checked: false },
          { text: 'Name three sources of free radicals inside the body', checked: false },
          { text: 'Explain how free radicals damage lipids, proteins, and DNA', checked: false },
          { text: 'Explain how LDL oxidation by free radicals contributes to atherosclerosis', checked: false },
          { text: 'Define antioxidant and explain how it neutralises free radicals', checked: false },
          { text: 'Name three dietary antioxidants and their food sources', checked: false },
          { text: 'Explain the epidemiological evidence linking antioxidant diet and CVD', checked: false },
        ],
      },
    },
    {
      id: 'summary-antioxidants',
      type: 'summary',
      data: {
        text: 'Free radicals (unpaired electrons) are produced during aerobic respiration, by smoking, UV, and radiation. They damage lipids (membrane peroxidation → oxLDL → foam cells → atherosclerosis), proteins (enzyme inactivation), and DNA (mutations → cancer). Antioxidants donate electrons to neutralise radicals: vitamin C (water-soluble, regenerates vitamin E), vitamin E (fat-soluble, protects membranes), beta-carotene (quenches singlet O₂), enzymatic antioxidants (SOD, catalase convert superoxide/H₂O₂ to harmless products). Diet rich in fruit and vegetables reduces CVD risk, partly by preventing LDL oxidation. Smoking increases free radical load and depletes antioxidants.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-free-radicals', prompt: 'What is a free radical? Why are free radicals chemically reactive?' },
      { id: 'cue-2', blockId: 'table-radical-damage', prompt: 'Explain how free radicals cause damage to (a) lipids, (b) DNA, and (c) LDL cholesterol.' },
      { id: 'cue-3', blockId: 'callout-key-ldl-oxidation', prompt: 'Explain the link between free radicals, LDL oxidation, and atherosclerosis.' },
      { id: 'cue-4', blockId: 'table-antioxidants', prompt: 'Name two dietary antioxidants and explain how each protects cells from free radical damage.' },
      { id: 'cue-5', blockId: 'p-diet-antioxidants', prompt: 'What is the evidence that dietary antioxidants reduce CVD risk? Why might antioxidant supplements be less effective than whole foods?' },
    ],
    summaryText: 'Free radicals = unpaired electrons → highly reactive. Sources: respiration, smoking, UV. Damage: lipid peroxidation, DNA mutation, protein oxidation, LDL oxidation → atherosclerosis. Antioxidants (vit C, E, carotene, SOD, catalase) donate electrons → neutralise radicals. High-antioxidant diet (fruit + veg) correlates with lower CVD risk; mechanism = prevent oxLDL formation.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'HOPE trial — Vitamin E and CVD', detail: 'The Heart Outcomes Prevention Evaluation (HOPE) trial (2000, n=9541) found that vitamin E supplementation did not significantly reduce CVD outcomes. This contrasts with observational studies, suggesting dietary antioxidants work through complex mechanisms or the beneficial component in food is not isolated vitamin E.', year: '2000', source: 'Yusuf S et al., NEJM', tags: ['antioxidants', 'CVD', 'clinical trial'] },
  ],
};
