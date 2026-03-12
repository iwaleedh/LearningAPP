export const note_biology_1_2_9 = {
  blocks: [
    {
      id: 'obj-enzyme',
      type: 'objective',
      data: {
        text: 'Understand how enzymes act as biological catalysts, the role of the active site, the lock-and-key and induced-fit models, how enzymes reduce activation energy, and the difference between intracellular and extracellular enzymes.',
      },
    },

    // ── Enzymes and the active site ──────────────────────────────────────────────
    {
      id: 'h-enzyme-globular',
      type: 'heading',
      data: { text: 'Enzymes and the Active Site', level: 2 },
    },
    {
      id: 'p-enzyme-globular',
      type: 'paragraph',
      data: {
        text: 'Enzymes are globular proteins that act as biological catalysts — they speed up metabolic reactions without being used up. The three-dimensional shape of an enzyme, including the shape of its active site, is determined by its complex tertiary structure. The active site is a specific region on the enzyme surface where the substrate binds. For catalysis to occur, the substrate must have a complementary shape to the active site so that an enzyme-substrate complex can form.',
      },
    },
    {
      id: 'callout-active-site',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Active Site — Key Point',
        text: 'If the order of amino acids in a protein changes (e.g. due to a gene mutation), the 3D shape of the protein changes. This alters the shape of the active site, so the substrate no longer fits — no enzyme-substrate complex forms and the enzyme loses its catalytic function.',
      },
    },

    // ── Lock-and-Key model ───────────────────────────────────────────────────────
    {
      id: 'h-lock-key',
      type: 'heading',
      data: { text: 'Lock-and-Key Model', level: 2 },
    },
    {
      id: 'p-lock-key',
      type: 'paragraph',
      data: {
        text: 'The lock-and-key model was the first model proposed to explain enzyme-substrate specificity. It states that the substrate fits exactly into the active site — like a key fitting into a lock. The active site is rigid and does not change shape during the reaction.',
      },
    },
    {
      id: 'list-lock-key-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Substrate approaches the active site — the two have exactly complementary shapes',
          'Substrate binds → enzyme-substrate complex forms',
          'Reaction takes place within the complex',
          'Enzyme-product complex forms',
          'Products are released; the enzyme is unchanged and free to catalyse further reactions',
        ],
      },
    },

    // ── Induced-Fit model ────────────────────────────────────────────────────────
    {
      id: 'h-induced-fit',
      type: 'heading',
      data: { text: 'Induced-Fit Model (Currently Accepted)', level: 2 },
    },
    {
      id: 'p-induced-fit',
      type: 'paragraph',
      data: {
        text: 'The induced-fit model is the currently accepted model of enzyme action. Unlike lock-and-key, the substrate does NOT fit perfectly into the active site initially. When the substrate binds, the active site changes shape in a conformational change, moulding itself around the substrate for an ideal binding arrangement. This maximises the ability of the enzyme to catalyse the reaction.',
      },
    },
    {
      id: 'svg-induced-fit',
      type: 'svg',
      data: {
        caption: 'Induced-fit model: substrate approaches (poor fit) → active site undergoes conformational change → ideal binding → products released, enzyme restored.',
        svg: '<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12"><defs><style>.enz{fill:#dbeafe;stroke:#3b82f6;stroke-width:2}.sub{fill:#dcfce7;stroke:#16a34a;stroke-width:2}.prod{fill:#fef9c3;stroke:#d97706;stroke-width:2}.dim{fill:#6b7280;font-size:10px}.ttl{fill:#1e40af;font-size:11px;font-weight:bold}</style><marker id="arr-if9" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#6b7280"/></marker></defs><text x="85" y="14" text-anchor="middle" class="ttl">1. Substrate approaches</text><path d="M 14 82 Q 85 46, 155 82 Q 85 116, 14 82 Z" class="enz"/><ellipse cx="85" cy="82" rx="30" ry="15" fill="white" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,3"/><text x="85" y="85" text-anchor="middle" class="dim">active site</text><rect x="55" y="100" width="60" height="20" rx="4" class="sub"/><text x="85" y="114" text-anchor="middle" fill="#15803d" font-size="10" font-weight="700">substrate</text><text x="85" y="144" text-anchor="middle" class="dim">poor initial fit</text><line x1="164" y1="86" x2="192" y2="86" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr-if9)"/><text x="178" y="80" text-anchor="middle" class="dim">induces</text><text x="178" y="93" text-anchor="middle" class="dim">change</text><text x="285" y="14" text-anchor="middle" class="ttl">2. Conformational change</text><path d="M 202 76 Q 285 34, 368 76 Q 285 120, 202 76 Z" class="enz"/><rect x="252" y="64" width="68" height="24" rx="4" class="sub"/><text x="286" y="80" text-anchor="middle" fill="#15803d" font-size="10" font-weight="700">substrate</text><text x="285" y="144" text-anchor="middle" class="dim">active site moulded</text><text x="285" y="156" text-anchor="middle" class="dim">around substrate</text><line x1="378" y1="86" x2="406" y2="86" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr-if9)"/><text x="392" y="80" text-anchor="middle" class="dim">reaction</text><text x="392" y="93" text-anchor="middle" class="dim">occurs</text><text x="480" y="14" text-anchor="middle" class="ttl">3. Products released</text><path d="M 415 82 Q 480 46, 546 82 Q 480 116, 415 82 Z" class="enz"/><ellipse cx="480" cy="82" rx="32" ry="16" fill="white" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,3"/><text x="480" y="85" text-anchor="middle" class="dim">free active site</text><rect x="451" y="108" width="60" height="20" rx="4" class="prod"/><text x="481" y="122" text-anchor="middle" fill="#92400e" font-size="10" font-weight="700">products</text><text x="480" y="156" text-anchor="middle" class="dim">enzyme unchanged</text></svg>',
      },
    },
    {
      id: 'table-models',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of lock-and-key and induced-fit models of enzyme action',
        headers: ['Feature', 'Lock-and-Key', 'Induced-Fit'],
        rows: [
          ['Substrate fit', 'Exact — perfect complementary shape', 'Not an exact fit initially'],
          ['Active site', 'Rigid; does not change shape', 'Flexible; changes shape (conformational change) when substrate binds'],
          ['Currently accepted?', 'No — outdated model', 'Yes — currently accepted model'],
          ['Explains enzyme specificity?', 'Yes (partially)', 'Yes (more accurately)'],
        ],
      },
    },

    // ── Activation energy ────────────────────────────────────────────────────────
    {
      id: 'h-activation-energy',
      type: 'heading',
      data: { text: 'Activation Energy', level: 2 },
    },
    {
      id: 'p-activation-energy',
      type: 'paragraph',
      data: {
        text: 'Activation energy is the minimum amount of energy that reacting molecules must have for a reaction to occur — it is the energy needed to make the substrate molecules just unstable enough so that bonds can break or form and products can be generated. Enzymes speed up reactions by reducing the activation energy required, so reactions can proceed at lower temperatures within living organisms.',
      },
    },
    {
      id: 'callout-activation-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How Enzymes Lower Activation Energy',
        text: 'When a substrate binds to the active site, the enzyme strains or distorts bonds in the substrate (induced-fit model), and brings reacting groups into close proximity and the correct orientation. Both effects lower the energy barrier (activation energy), allowing reactions to proceed rapidly at physiological temperatures (~37°C in humans).',
      },
    },

    // ── Metabolic pathways ───────────────────────────────────────────────────────
    {
      id: 'h-metabolism',
      type: 'heading',
      data: { text: 'Metabolic Pathways', level: 2 },
    },
    {
      id: 'p-metabolism',
      type: 'paragraph',
      data: {
        text: 'Metabolism is the sum of all the chemical reactions occurring in an organism. Enzymes control metabolic pathways — sequences of enzyme-catalysed reactions forming biochemical cascades. Some enzymes consist of a single polypeptide; others have quaternary structure (multiple subunits).',
      },
    },
    {
      id: 'list-metabolism',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Anabolic reactions: build up larger molecules from smaller ones (require energy); e.g. protein synthesis, DNA replication',
          'Catabolic reactions: break down larger molecules into smaller ones (release energy); e.g. digestion, cellular respiration',
        ],
      },
    },

    // ── Intracellular vs Extracellular ───────────────────────────────────────────
    {
      id: 'h-intra-extra',
      type: 'heading',
      data: { text: 'Intracellular and Extracellular Enzymes', level: 2 },
    },
    {
      id: 'table-intra-extra',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of intracellular and extracellular enzymes',
        headers: ['Feature', 'Intracellular enzymes', 'Extracellular enzymes'],
        rows: [
          ['Where they act', 'Inside the cell', 'Outside the cell (in body fluids, gut lumen, etc.)'],
          ['How released', 'Remain within cells', 'Secreted by cells (e.g. via exocytosis)'],
          ['Named example', 'Catalase', 'Trypsin, amylase'],
          ['Reaction catalysed (example)', 'Catalase: 2H₂O₂ → 2H₂O + O₂', 'Trypsin: hydrolyses proteins in small intestine'],
          ['Why important', 'Removes toxic H₂O₂ byproduct before it damages the cell', 'Digests food in gut lumen before absorption'],
        ],
      },
    },
    {
      id: 'callout-catalase-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Catalase — Intracellular Enzyme',
        text: 'Hydrogen peroxide (H₂O₂) is produced as a toxic byproduct of many metabolic reactions. If it built up inside cells, it would damage proteins, DNA, and membranes. Catalase is an intracellular enzyme (found in almost all living cells) that rapidly converts H₂O₂ into harmless products:\n\n2H₂O₂ → 2H₂O + O₂\n\nThis is why when fresh liver (rich in catalase) is added to H₂O₂ in Core Practical 4, rapid bubbling of oxygen is observed.',
      },
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Lock-and-Key vs Induced-Fit',
        text: 'Always state that induced-fit is the currently accepted model. When describing induced-fit, use the phrase "conformational change" — the active site changes shape when the substrate binds, not before. A common error is saying the active site changes before the substrate arrives — it does not.',
      },
    },

    // ── Checklist + Summary ──────────────────────────────────────────────────────
    {
      id: 'checklist-enzyme',
      type: 'checklist',
      data: {
        items: [
          { text: 'State that enzymes are globular proteins; active site shape determined by tertiary structure', checked: false },
          { text: 'Describe the lock-and-key model: substrate fits exactly; active site rigid', checked: false },
          { text: 'Describe the induced-fit model: substrate does not fit exactly; active site undergoes conformational change', checked: false },
          { text: 'State that induced-fit is the currently accepted model', checked: false },
          { text: 'Define activation energy and explain how enzymes reduce it', checked: false },
          { text: 'Distinguish anabolic (building up) and catabolic (breaking down) reactions; give one example of each', checked: false },
          { text: 'Compare intracellular (e.g. catalase, H₂O₂ → H₂O + O₂) and extracellular (e.g. trypsin) enzymes', checked: false },
        ],
      },
    },
    {
      id: 'summary-enzyme',
      type: 'summary',
      data: {
        text: 'Enzymes are globular proteins; active site shape is determined by tertiary structure. Lock-and-key: substrate fits exactly, active site rigid (outdated). Induced-fit (currently accepted): substrate does not fit exactly; active site undergoes conformational change on binding, achieving ideal geometry for catalysis. Enzymes reduce activation energy → reactions proceed faster at physiological temperatures. Metabolism = anabolic (build up) + catabolic (break down) reactions. Intracellular enzymes act inside cells (e.g. catalase: 2H₂O₂ → 2H₂O + O₂). Extracellular enzymes are secreted and act outside cells (e.g. digestive enzymes).',
      },
    },
  ],

  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-enzyme-1',
        blockId: 'h-induced-fit',
        prompt: 'Compare the lock-and-key model and the induced-fit model. Which is currently accepted, and what happens to the active site in each?',
      },
      {
        id: 'cue-enzyme-2',
        blockId: 'h-activation-energy',
        prompt: 'Define activation energy. Explain how enzymes reduce it to speed up reactions.',
      },
      {
        id: 'cue-enzyme-3',
        blockId: 'callout-active-site',
        prompt: 'Explain why changing the amino acid sequence of an enzyme can destroy its catalytic activity.',
      },
      {
        id: 'cue-enzyme-4',
        blockId: 'h-intra-extra',
        prompt: 'Compare intracellular and extracellular enzymes. Give a named example of each and state the reaction it catalyses.',
      },
      {
        id: 'cue-enzyme-5',
        blockId: 'h-metabolism',
        prompt: 'Define anabolic and catabolic reactions. Give one example of each.',
      },
    ],
    summaryText:
      'Enzymes = globular proteins; active site shape from tertiary structure. Lock-and-key (outdated): exact fit, rigid active site. Induced-fit (current): active site changes shape (conformational change) on substrate binding. Activation energy = minimum energy for reaction; enzymes lower it. Anabolic = build up; catabolic = break down. Intracellular: catalase (H₂O₂→H₂O+O₂, inside cell). Extracellular: digestive enzymes (secreted, act outside).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Edexcel IAL Biology 2.2 Proteins — SaveMyExam Revision Notes',
      detail: 'Enzyme mechanism, lock-and-key vs induced-fit models, activation energy, metabolic pathways, intracellular and extracellular enzymes (pages 15–21).',
      year: '2024',
      source: 'SaveMyExam — Edexcel International A Level (IAL) Biology Revision Notes 2.2',
      tags: ['enzymes', 'active-site', 'lock-and-key', 'induced-fit', 'activation-energy', 'catalase', 'intracellular', 'extracellular'],
    },
  ],
};
