export const note_biology_4_6_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the lytic and latent (lysogenic) viral infection cycles, the processes occurring in each, and examples including bacteriophages and HIV in T-helper cells.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Viral Infection Cycles: Lytic and Latent', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Viruses can follow two distinct infection pathways: lytic and latent (lysogenic). In the lytic cycle, the virus replicates and destroys the host cell. In the latent cycle, the viral DNA integrates into the host chromosome and replicates without immediate lysis. Understanding these cycles is crucial for treating viral infections and understanding viral persistence.'
      },
      terms: []
    },
    {
      id: 'h-lytic',
      type: 'heading',
      data: { text: 'The Lytic Cycle', level: 2 },
      terms: []
    },
    {
      id: 'p-lytic-1',
      type: 'paragraph',
      data: {
        text: 'The lytic cycle results in the destruction of the host cell and release of new viral particles. The process occurs in five main stages: attachment, penetration, biosynthesis, assembly, and lysis.'
      },
      terms: []
    },
    {
      id: 'list-lytic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Attachment: Viral proteins (e.g. tail fibres in bacteriophages) bind to specific receptors on the host cell surface.',
          'Penetration: Viral genetic material is injected into the host cell. In phages, a tail sheath retracts to drive DNA through the cell wall.',
          'Biosynthesis: Host cell machinery (ribosomes, ATP, nucleotides) is commandeered. Viral DNA is replicated; viral proteins (capsid, enzymes) are synthesised.',
          'Assembly: New viral particles self-assemble from replicated DNA and synthesised protein coats.',
          'Lysis: The host cell bursts (lyses), releasing 100–200 new viral particles. Cell death results from accumulation of viral proteins or enzymatic degradation of the cell wall.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-lytic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Features of Lytic Cycle',
        text: 'Host cell destroyed; rapid replication (1–24 hours for phages); large number of offspring (100–200 per cell); viral DNA not integrated; acute infection; seen in most RNA viruses (influenza, measles) and some DNA viruses.'
      },
      terms: []
    },
    {
      id: 'h-latent',
      type: 'heading',
      data: { text: 'The Latent (Lysogenic) Cycle', level: 2 },
      terms: []
    },
    {
      id: 'p-latent-1',
      type: 'paragraph',
      data: {
        text: 'In the latent cycle, viral DNA integrates into the host chromosome without immediate replication and lysis. The integrated viral DNA is called a prophage (in bacteriophages) or provirus (in animal viruses). The host cell survives and continues dividing, replicating the viral DNA along with its own chromosome. This allows the virus to persist in the host for extended periods.'
      },
      terms: []
    },
    {
      id: 'list-latent',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Attachment and penetration: Same as lytic cycle.',
          'Integration: Viral DNA integrates into the host chromosome via recombination (site-specific or random).',
          'Replication: The integrated prophage replicates with host DNA during cell division. Host cell machinery maintains both viral and host DNA.',
          'Induction: Stress signals (UV radiation, chemicals, immune activation) trigger the prophage to exit latency and enter the lytic cycle.',
          'Lysis: Once induced, the cycle becomes lytic; viral DNA excises from the chromosome and enters biosynthesis, assembly, and lysis phases.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-latent',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Features of Latent Cycle',
        text: 'Host cell survives; viral DNA integrated as prophage/provirus; minimal viral gene expression; replicates with host DNA; can persist indefinitely until induction; seen in some bacteriophages (λ phage) and DNA viruses (herpesviruses, HIV).'
      },
      terms: []
    },
    {
      id: 'h-hiv',
      type: 'heading',
      data: { text: 'Example: HIV and Latency in T-Helper Cells', level: 2 },
      terms: []
    },
    {
      id: 'p-hiv-1',
      type: 'paragraph',
      data: {
        text: 'HIV (Human Immunodeficiency Virus) is a retrovirus that infects CD4+ T-helper cells. HIV can follow both lytic and latent pathways. In the lytic pathway, active infection leads to viral replication and eventual T-cell death (CD4 count declines, leading to AIDS). In the latent pathway, integrated HIV DNA (integrated as a provirus) remains dormant in T-cell memory cells for years or decades.'
      },
      terms: []
    },
    {
      id: 'p-hiv-2',
      type: 'paragraph',
      data: {
        text: 'This latency is a major obstacle to HIV cure. Antiretroviral drugs suppress active viral replication but cannot fully eliminate latent provirus in resting memory T cells. This is why HIV requires lifelong treatment. The "shock and kill" strategy aims to activate latent virus (shock) so antiretroviral drugs can kill it (kill).'
      },
      terms: []
    },
    {
      id: 'callout-hiv',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'HIV Infection Pattern',
        text: 'Acute infection: rapid viral replication (lytic phase), CD4 count drops rapidly, flu-like symptoms.\n\nChronic phase: partly controlled by immune system; partial viral replication; latent infection in memory cells.\n\nAIDS: CD4 < 200 cells/microL; immune failure; opportunistic infections (Pneumocystis, tuberculosis, toxoplasmosis).\n\nLatent provirus in memory cells: persists despite antiretroviral therapy, barriers to cure.'
      },
      terms: []
    },
    {
      id: 'svg-cycles',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg"><defs><style>.cell { fill: #e0e7ff; stroke: #4f46e5; stroke-width: 2; } .virus { fill: #6366f1; } .label { font-size: 11px; font-weight: bold; } .arrow-path { stroke: #333; stroke-width: 1.5; fill: none; marker-end: url(#arrow); } .side-label { font-size: 10px; font-style: italic; }</style><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#333"/></marker></defs></defs><g id="lytic"><circle class="cell" cx="100" cy="100" r="40"/><circle class="virus" cx="100" cy="100" r="5"/><text x="100" y="15" text-anchor="middle" class="label">LYTIC CYCLE</text><path class="arrow-path" d="M 140 100 L 180 100"/><circle class="cell" cx="220" cy="100" r="40" fill="#fff9e6" stroke="#d97706" stroke-width="2"/><circle class="virus" cx="210" cy="95" r="3"/><circle class="virus" cx="225" cy="105" r="3"/><circle class="virus" cx="230" cy="90" r="3"/><text x="220" y="180" text-anchor="middle" class="side-label">Biosynthesis & Assembly</text><path class="arrow-path" d="M 260 100 L 300 100"/><circle cx="320" cy="100" r="20" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,5"/><text x="320" y="105" text-anchor="middle" style="font-size: 10px; color: #dc2626;">Lysis</text><text x="320" y="180" text-anchor="middle" class="side-label">Host cell bursts<br/>100–200 virions</text></g><g id="latent"><circle class="cell" cx="100" cy="250" r="40"/><circle class="virus" cx="100" cy="250" r="5"/><text x="100" y="165" text-anchor="middle" class="label">LATENT CYCLE</text><path class="arrow-path" d="M 140 250 L 180 250"/><circle class="cell" cx="220" cy="250" r="40" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="240" x2="240" y2="260" stroke="#16a34a" stroke-width="1.5"/><text x="220" y="280" text-anchor="middle" class="side-label">Integration as prophage</text><path class="arrow-path" d="M 260 250 L 300 250"/><circle class="cell" cx="340" cy="250" r="40" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><circle class="cell" cx="360" cy="250" r="38" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="340" y="290" text-anchor="middle" class="side-label">Latent replication<br/>with host DNA</text><path class="arrow-path" d="M 340 210 L 300 150" stroke="#f59e0b" stroke-width="2"/><text x="320" y="160" class="side-label" fill="#f59e0b">Induction</text></g></svg>',
        caption: 'Lytic vs latent viral cycles: lytic produces new virions and lyses the cell; latent integrates and replicates silently with host DNA'
      },
      terms: []
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Lytic Cycle', 'Latent Cycle'],
        rows: [
          ['Host cell fate', 'Destroyed (lysis)', 'Survives, continues dividing'],
          ['Viral DNA integration', 'No', 'Yes (prophage/provirus)'],
          ['Viral gene expression', 'High (all genes expressed)', 'Low (limited genes expressed)'],
          ['Offspring per cell', '100–200 virions', '0 (none released until induction)'],
          ['Duration', '1–24 hours (rapid)', 'Days to years (slow)'],
          ['Host awareness', 'Immune system detects viral proteins', 'Often hidden from immune system'],
          ['Induction trigger', 'N/A', 'Stress (UV, chemicals, immune activation)'],
          ['Examples', 'Measles, influenza, most RNA viruses', 'Herpes, HIV (in memory T cells), λ phage']
        ],
        caption: 'Comparison of lytic and latent viral infection cycles'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Lytic cycle destroys the host immediately by replicating viral DNA/RNA and assembling new virions until the cell bursts. Latent cycle integrates viral DNA into the host chromosome and replicates silently with host DNA, allowing persistence. HIV uses both: acute lytic infection in CD4+ T cells, and latent integration in memory T cells, which is why HIV is so difficult to cure.',
        apply: 'If a bacteriophage infects at 10 a.m. and has a 30-minute lytic cycle, with 150 virions released per cell, how many infected cells result from one initial infection after 3 hours? (Answer: starts with 1, after 30 min → 150, after 60 min → 150 × 150 = 22,500, after 90 min → 22,500 × 150, etc.)',
        analyze: 'Why is latent infection more dangerous for a host organism than a rapid lytic infection in terms of long-term disease outcome?',
        evaluate: 'Explain why antiretroviral drugs fail to cure HIV despite suppressing viral replication. How does the latent reservoir complicate treatment strategy?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can list the five stages of the lytic cycle in order', checked: false },
          { text: 'I understand what happens during viral attachment and penetration', checked: false },
          { text: 'I can explain biosynthesis and assembly phases', checked: false },
          { text: 'I know why the host cell lyses and how many virions are released', checked: false },
          { text: 'I understand what a prophage is and how it forms', checked: false },
          { text: 'I can explain how latent viral DNA replicates with host DNA', checked: false },
          { text: 'I understand what induction is and what causes it', checked: false },
          { text: 'I can explain HIV latency in T-helper cells', checked: false },
          { text: 'I know why HIV latency complicates treatment and cure strategies', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Lytic cycle: attachment → penetration → biosynthesis → assembly → lysis (host cell bursts, 100–200 virions released, 1–24 hours). Latent cycle: attachment → penetration → integration as prophage/provirus → silent replication with host DNA → induction (stress) → lytic phase. HIV uses both cycles: lytic replication in active CD4+ T cells; latent integration in memory T cells. Latency explains HIV persistence despite antiretroviral therapy.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-lytic', prompt: 'List the five stages of the lytic cycle in order.' },
      { id: 'cue-2', blockId: 'list-lytic', prompt: 'What happens during the penetration stage of the lytic cycle?' },
      { id: 'cue-3', blockId: 'h-latent', prompt: 'What is a prophage and how is it formed?' },
      { id: 'cue-4', blockId: 'p-hiv-1', prompt: 'How does HIV infect T-helper cells and why is latency important?' },
      { id: 'cue-5', blockId: 'tbl-compare', prompt: 'What is the main difference between lytic and latent cycles regarding host cell survival?' }
    ],
    summaryText: 'Lytic: attach → penetrate → synthesise → assemble → lyse (1–24h, 100–200 virions, host dies). Latent: attach → penetrate → integrate as prophage → replicate silently with host DNA → induction → lytic. HIV: lytic in active CD4+ T cells; latent in memory T cells; latency blocks cure. Stress/UV induces prophage to switch to lytic.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Viral Replication Cycles', detail: 'Campbell & Reece: Biology textbook chapters on viral replication strategies', year: '2020', source: 'Campbell Biology 12th ed.', tags: ['viral replication', 'lytic', 'latent', 'lysogenic'] }
  ]
};
