export const note_biology_4_6_7 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand natural and artificial immunity (active and passive), herd immunity threshold, vaccine types, and the role of adjuvants.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Natural and Artificial Immunity', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Immunity refers to the body\'s ability to resist infection. Immunity can be acquired naturally (through infection or breast milk) or artificially (through vaccination or antiserum injection). Each type can be active (the body produces immune responses) or passive (immune components are provided ready-made). Understanding these types is essential for public health vaccination strategies and disease prevention.'
      },
      terms: []
    },
    {
      id: 'h-active-nat',
      type: 'heading',
      data: { text: 'Active Natural Immunity', level: 2 },
      terms: []
    },
    {
      id: 'p-active-nat-1',
      type: 'paragraph',
      data: {
        text: 'Active natural immunity develops when a person is infected with a pathogen and mounts an adaptive immune response. The immune system produces antibodies (primarily IgG) and memory B and T cells specific to that pathogen. This immunity is long-lasting—memory cells can persist for years or decades, providing rapid secondary responses if re-exposure occurs. The person experiences symptoms during the primary infection.'
      },
      terms: []
    },
    {
      id: 'callout-active-nat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Active Natural Immunity',
        text: 'Acquired by infection; primary immune response (slow, ~5–7 days for IgG); generates memory B and T cells; long-lasting (years to lifetime); strong secondary response on re-exposure; person experiences symptoms.'
      },
      terms: []
    },
    {
      id: 'h-active-art',
      type: 'heading',
      data: { text: 'Active Artificial Immunity', level: 2 },
      terms: []
    },
    {
      id: 'p-active-art-1',
      type: 'paragraph',
      data: {
        text: 'Active artificial immunity is acquired through vaccination. A vaccine contains antigen (or a weakened/inactivated pathogen) that triggers an adaptive immune response without causing disease. The immune system produces antibodies and memory cells, conferring protection without the risk of severe infection. Vaccination mimics infection but is safer.'
      },
      terms: []
    },
    {
      id: 'callout-active-art',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Active Artificial Immunity',
        text: 'Acquired by vaccination; primary immune response to vaccine antigen; generates memory B and T cells; long-lasting (varies by vaccine: years to lifetime); person does not get the disease; booster doses may be needed.'
      },
      terms: []
    },
    {
      id: 'h-passive-nat',
      type: 'heading',
      data: { text: 'Passive Natural Immunity', level: 2 },
      terms: []
    },
    {
      id: 'p-passive-nat-1',
      type: 'paragraph',
      data: {
        text: 'Passive natural immunity is acquired in utero and during infancy. During pregnancy, maternal IgG antibodies cross the placenta and enter fetal circulation, protecting the newborn from pathogens the mother is immune to. After birth, a breastfeeding mother passes IgA antibodies (and some IgG) in colostrum and breast milk, providing protection against respiratory and gastrointestinal pathogens.'
      },
      terms: []
    },
    {
      id: 'p-passive-nat-2',
      type: 'paragraph',
      data: {
        text: 'This immunity is temporary—maternal antibodies are degraded over weeks to months (half-life ~3–6 weeks for IgG). No memory cells are generated because the infant\'s immune system did not produce the antibodies. The infant is vulnerable once maternal antibodies wane, which is why vaccination begins around 2 months of age.'
      },
      terms: []
    },
    {
      id: 'callout-passive-nat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Passive Natural Immunity',
        text: 'Maternal IgG via placenta; maternal IgA in breast milk; temporary (weeks to months); no memory cells formed; short-lived protection. Breastfeeding benefits: continued passive immunity + early exposure to safe antigens (tolerance training).'
      },
      terms: []
    },
    {
      id: 'h-passive-art',
      type: 'heading',
      data: { text: 'Passive Artificial Immunity', level: 2 },
      terms: []
    },
    {
      id: 'p-passive-art-1',
      type: 'paragraph',
      data: {
        text: 'Passive artificial immunity is conferred by injection of ready-made antibodies or antiserum. This is used in emergency situations—for example, rabies post-exposure prophylaxis (rabies immunoglobulin injection) or tetanus antitoxin injection. Antibodies provide immediate protection, but it is temporary (days to weeks) because the antibodies are degraded. No memory cells are generated.'
      },
      terms: []
    },
    {
      id: 'callout-passive-art',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Passive Artificial Immunity',
        text: 'Injection of antibodies or antiserum; immediate protection; very short-lived (days to weeks); no memory cells; used for post-exposure prophylaxis (rabies, tetanus, hepatitis B) or emergency treatment.'
      },
      terms: []
    },
    {
      id: 'tbl-compare-immun',
      type: 'comparisonTable',
      data: {
        headers: ['Type', 'Route', 'Speed', 'Duration', 'Memory Cells?', 'Examples'],
        rows: [
          ['Active natural', 'Natural infection', 'Slow (5–7 days)', 'Long-lasting (years–lifetime)', 'Yes', 'Chickenpox, measles infection'],
          ['Active artificial', 'Vaccination', 'Moderate (days–weeks)', 'Long-lasting (years–lifetime)', 'Yes', 'Vaccines (MMR, COVID-19, polio)'],
          ['Passive natural', 'Maternal antibodies', 'Immediate', 'Short (weeks–months)', 'No', 'Maternal IgG, breast milk IgA'],
          ['Passive artificial', 'Antiserum/antibody injection', 'Immediate', 'Very short (days–weeks)', 'No', 'Rabies IG, tetanus antitoxin']
        ],
        caption: 'Four types of immunity: natural vs artificial, active vs passive'
      },
      terms: []
    },
    {
      id: 'h-vaccine-types',
      type: 'heading',
      data: { text: 'Vaccine Types', level: 2 },
      terms: []
    },
    {
      id: 'list-vaccines',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Attenuated (live) vaccines: Contain weakened pathogen that replicates poorly in the host. Examples: MMR (measles, mumps, rubella), polio (OPV), varicella (chickenpox). Pros: strong immunity. Cons: cannot be given to immunocompromised patients.',
          'Inactivated (killed) vaccines: Contain pathogen that has been chemically killed or heat-inactivated. Examples: polio (IPV), hepatitis B (killed virus), influenza (killed virus). Pros: safe for immunocompromised. Cons: weaker immunity, may need boosters.',
          'Subunit vaccines: Contain only specific antigenic proteins (not whole pathogen). Examples: hepatitis B (surface antigen), HPV (viral proteins), pertussis (toxoid—inactivated toxin). Pros: very safe, specific response. Cons: may be less immunogenic.',
          'mRNA vaccines: Contain mRNA encoding the pathogenic antigen. Example: COVID-19 (Pfizer, Moderna). Pros: rapid design/production, strong immunity. Cons: new technology, requires cold storage. The host cell translates mRNA to produce antigen.'
        ]
      },
      terms: []
    },
    {
      id: 'h-adjuvants',
      type: 'heading',
      data: { text: 'Adjuvants', level: 2 },
      terms: []
    },
    {
      id: 'p-adjuvants-1',
      type: 'paragraph',
      data: {
        text: 'Adjuvants are substances added to vaccines to enhance immune response without being antigens themselves. Adjuvants act by activating pattern recognition receptors on innate immune cells (e.g. toll-like receptors), increasing inflammation and recruiting immune cells to the vaccination site. This amplifies the adaptive immune response—more B and T cells are activated, and they become more effective.'
      },
      terms: []
    },
    {
      id: 'list-adjuvants',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Aluminium salts (alum): Classic adjuvant; binds and activates antigen-presenting cells; increases IgG and IgE responses.',
          'Oil-in-water emulsions: Create local inflammation; recruit antigen-presenting cells; used in some influenza and COVID-19 vaccines.',
          'Toll-like receptor agonists: Directly activate innate immune receptors; very potent but require careful dosing to avoid excessive inflammation.',
          'Liposomes: Artificial lipid vesicles that mimic viral particles; enhance antigen presentation.'
        ]
      },
      terms: []
    },
    {
      id: 'h-herd-immunity',
      type: 'heading',
      data: { text: 'Herd Immunity Threshold', level: 2 },
      terms: []
    },
    {
      id: 'p-herd-immunity-1',
      type: 'paragraph',
      data: {
        text: 'Herd immunity (community immunity) occurs when sufficient proportion of a population is immune to a pathogen, either through natural infection or vaccination. When the proportion of immune individuals exceeds a critical threshold, the pathogen cannot spread efficiently because most of its potential hosts are immune. This protects even unimmunised individuals.'
      },
      terms: []
    },
    {
      id: 'eq-herd-immunity',
      type: 'equation',
      data: {
        html: 'Herd immunity threshold = 1 - <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">R₀</span></span><br>where R₀ = basic reproduction number (number of infections caused by one case)'
      },
      terms: []
    },
    {
      id: 'ex-herd-immunity',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Herd Immunity Threshold Examples',
        text: 'Measles: R₀ ≈ 12–18\nThreshold = 1 - (1/15) ≈ 0.93 = 93% of population must be immune\n\nCOVID-19 (original strain): R₀ ≈ 2–3\nThreshold = 1 - (1/2.5) ≈ 0.60 = 60% of population must be immune\n\nOnce threshold is reached, pathogen transmission slows and may be eliminated.'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Active immunity (infection or vaccine) generates memory cells and lasts years. Passive immunity (maternal antibodies or antiserum) is temporary (weeks/months) with no memory. Vaccines can be attenuated, inactivated, subunit, or mRNA. Adjuvants enhance immune response by activating innate receptors. Herd immunity threshold (1 - 1/R₀) is the proportion needed to prevent spread—measles needs 93%, COVID-19 original needs 60%.',
        apply: 'If a disease has R₀ = 4, what herd immunity threshold is needed? (1 - 1/4 = 0.75 = 75%). If 70% are vaccinated, will herd immunity be achieved?',
        analyze: 'Why can attenuated vaccines not be given to immunocompromised patients but inactivated vaccines can be?',
        evaluate: 'Compare cost, safety, and efficacy of attenuated vs inactivated vs mRNA vaccines. Which would be best for rapid pandemic response? For endemic disease control in low-income countries?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can define active and passive immunity', checked: false },
          { text: 'I can distinguish natural and artificial routes of immunity', checked: false },
          { text: 'I understand how maternal antibodies protect infants', checked: false },
          { text: 'I know why passive immunity is short-lived (no memory cells)', checked: false },
          { text: 'I can name four vaccine types and give examples of each', checked: false },
          { text: 'I understand the difference between attenuated and inactivated vaccines', checked: false },
          { text: 'I know what adjuvants do and why they are added', checked: false },
          { text: 'I can calculate herd immunity threshold from R₀', checked: false },
          { text: 'I understand why herd immunity protects unimmunised individuals', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Four immunity types: Active natural (infection, long-lasting memory), active artificial (vaccination, long-lasting memory), passive natural (maternal antibodies via placenta/breast milk, temporary), passive artificial (antiserum injection, temporary). Vaccine types: attenuated (live, weakened), inactivated (killed), subunit (antigenic proteins only), mRNA (encodes antigen). Adjuvants enhance response via innate activation. Herd immunity threshold = 1 - 1/R₀ (measles 93%, COVID-19 original 60%). Once threshold reached, disease transmission slows even in unimmunised.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-active-nat', prompt: 'How does active natural immunity develop and what immune components does it generate?' },
      { id: 'cue-2', blockId: 'p-passive-nat-2', prompt: 'Why is passive immunity short-lived and why do infants need vaccination?' },
      { id: 'cue-3', blockId: 'list-vaccines', prompt: 'Name four vaccine types and give one example of each.' },
      { id: 'cue-4', blockId: 'p-adjuvants-1', prompt: 'What are adjuvants and how do they enhance vaccine response?' },
      { id: 'cue-5', blockId: 'eq-herd-immunity', prompt: 'Write the herd immunity threshold formula and explain R₀.' }
    ],
    summaryText: 'Active natural: infection → memory cells + antibodies (long-lasting). Active artificial: vaccine → memory cells + antibodies (long-lasting). Passive natural: maternal IgG/IgA (weeks–months, no memory). Passive artificial: antiserum injection (days–weeks, no memory). Vaccines: attenuated (live), inactivated (killed), subunit, mRNA. Adjuvants activate innate receptors → enhance response. Herd immunity: threshold = 1 - 1/R₀ (measles 93%, COVID 60%).',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Vaccination and Herd Immunity', detail: 'WHO Immunological Basis for Immunization. WHO reference series', year: '2018', source: 'World Health Organization', tags: ['vaccination', 'herd immunity', 'R0', 'vaccine types'] }
  ]
};
