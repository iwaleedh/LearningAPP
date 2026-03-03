export const note_biology_4_6_9 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand bacteriostatic vs bactericidal antibiotics, their mechanisms of action (cell wall, protein synthesis, DNA gyrase), minimum inhibitory concentration (MIC), antibiotic resistance mechanisms, and why antibiotics do not work on viruses.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Bacteriostatic vs Bactericidal Antibiotics', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Antibiotics are drugs that kill or inhibit bacteria. They fall into two categories: bactericidal antibiotics kill bacteria directly, while bacteriostatic antibiotics inhibit growth, allowing the immune system to kill the bacteria. Understanding which type is used and why is essential for clinical microbiology and infection control.'
      },
      terms: []
    },
    {
      id: 'h-bactericidal',
      type: 'heading',
      data: { text: 'Bactericidal Antibiotics (Kill Bacteria)', level: 2 },
      terms: []
    },
    {
      id: 'p-bactericidal-1',
      type: 'paragraph',
      data: {
        text: 'Bactericidal antibiotics directly kill bacteria by disrupting essential cellular processes. They are generally more effective in severe infections because they reduce bacterial burden rapidly, even in immunocompromised patients. Main bactericidal classes include:'
      },
      terms: []
    },
    {
      id: 'list-bactericidal',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Beta-lactams (penicillins and cephalosporins): Inhibit cell wall synthesis by blocking peptidoglycan cross-linking. The enzyme transpeptidase (penicillin-binding protein) is inhibited, weakening the cell wall. Without a rigid wall, bacteria lyse and die. Examples: penicillin G, amoxicillin, cephalexin.',
          'Aminoglycosides (streptomycin, gentamicin, tobramycin): Inhibit protein synthesis by binding to the 30S ribosomal subunit (prokaryotic ribosomes). This causes misreading of mRNA and produces non-functional proteins. Bactericidal effect.',
          'Fluoroquinolones (ciprofloxacin, levofloxacin): Inhibit DNA gyrase (topoisomerase), the enzyme that unwinds DNA supercoils. Without gyrase activity, DNA replication and transcription stop. Bactericidal.',
          'Vancomycin: Inhibits peptidoglycan synthesis (similar mechanism to beta-lactams but different target). Used for MRSA (methicillin-resistant Staphylococcus aureus).'
        ]
      },
      terms: []
    },
    {
      id: 'callout-bactericidal',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bactericidal Antibiotics',
        text: 'Kill bacteria directly; reduce bacterial burden quickly; more effective in severe infections and immunocompromised hosts; examples: penicillins, cephalosporins, aminoglycosides, fluoroquinolones, vancomycin.'
      },
      terms: []
    },
    {
      id: 'h-bacteriostatic',
      type: 'heading',
      data: { text: 'Bacteriostatic Antibiotics (Inhibit Growth)', level: 2 },
      terms: []
    },
    {
      id: 'p-bacteriostatic-1',
      type: 'paragraph',
      data: {
        text: 'Bacteriostatic antibiotics inhibit bacterial growth without killing bacteria directly. They allow the immune system (phagocytes and antibodies) to clear the infection. These are used for non-life-threatening infections and in patients with functioning immune systems. Main bacteriostatic classes:'
      },
      terms: []
    },
    {
      id: 'list-bacteriostatic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Tetracyclines (tetracycline, doxycycline): Inhibit protein synthesis by binding to the 30S ribosomal subunit and blocking aminoacyl-tRNA binding. Bacteria cannot synthesise proteins, so growth stops. Bacteriostatic.',
          'Chloramphenicol: Inhibits protein synthesis by binding to the 50S ribosomal subunit and blocking peptide bond formation. Bacteriostatic.',
          'Sulfonamides and trimethoprim: Inhibit nucleotide synthesis by blocking folic acid metabolism. Without nucleotides, DNA replication stops. Bacteriostatic.',
          'Macrolides (erythromycin, azithromycin): Inhibit protein synthesis by binding to the 50S ribosomal subunit. Bacteriostatic.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-bacteriostatic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bacteriostatic Antibiotics',
        text: 'Inhibit growth; allow immune system to clear bacteria; slower action; adequate for non-severe infections in immunocompetent hosts; examples: tetracyclines, chloramphenicol, sulfonamides, macrolides.'
      },
      terms: []
    },
    {
      id: 'h-mech',
      type: 'heading',
      data: { text: 'Mechanisms of Action Summary', level: 2 },
      terms: []
    },
    {
      id: 'tbl-mech',
      type: 'comparisonTable',
      data: {
        headers: ['Class', 'Target', 'Mechanism', 'Bactericidal/static', 'Examples'],
        rows: [
          ['Beta-lactams', 'Cell wall', 'Block peptidoglycan cross-linking via transpeptidase inhibition', 'Bactericidal', 'Penicillin, cephalosporin'],
          ['Aminoglycosides', '30S ribosome', 'Inhibit protein synthesis (misreading)', 'Bactericidal', 'Streptomycin, gentamicin'],
          ['Fluoroquinolones', 'DNA gyrase', 'Inhibit DNA unwinding and replication', 'Bactericidal', 'Ciprofloxacin'],
          ['Tetracyclines', '30S ribosome', 'Inhibit protein synthesis (block tRNA)', 'Bacteriostatic', 'Doxycycline'],
          ['Macrolides', '50S ribosome', 'Inhibit protein synthesis', 'Bacteriostatic', 'Azithromycin'],
          ['Sulfonamides', 'Folic acid metabolism', 'Inhibit nucleotide synthesis', 'Bacteriostatic', 'Trimethoprim-sulfamethoxazole']
        ],
        caption: 'Antibiotic mechanisms of action'
      },
      terms: []
    },
    {
      id: 'h-mic',
      type: 'heading',
      data: { text: 'Minimum Inhibitory Concentration (MIC)', level: 2 },
      terms: []
    },
    {
      id: 'p-mic-1',
      type: 'paragraph',
      data: {
        text: 'The minimum inhibitory concentration (MIC) is the lowest concentration of an antibiotic that inhibits visible bacterial growth in vitro. It is measured in microg/mL and is used to assess bacterial susceptibility and predict clinical efficacy. Susceptible bacteria have low MIC values; resistant bacteria have high MIC values.'
      },
      terms: []
    },
    {
      id: 'eq-mic',
      type: 'equation',
      data: {
        html: 'MIC breakpoint (clinical susceptibility) is determined by correlating in vitro MIC with in vivo efficacy. For example:<br>Penicillin vs Staphylococcus aureus: MIC ≤ 2 microg/mL = susceptible; MIC ≥ 4 microg/mL = resistant'
      },
      terms: []
    },
    {
      id: 'h-resistance',
      type: 'heading',
      data: { text: 'Antibiotic Resistance Mechanisms', level: 2 },
      terms: []
    },
    {
      id: 'p-resistance-1',
      type: 'paragraph',
      data: {
        text: 'Bacteria develop antibiotic resistance through various mechanisms. Resistance can be intrinsic (inherent to the species) or acquired (evolved during antibiotic use). Major mechanisms include:'
      },
      terms: []
    },
    {
      id: 'list-resistance',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Enzymatic inactivation: Beta-lactamase (penicillinase) breaks the beta-lactam ring in penicillins and cephalosporins, destroying their activity. MRSA produces methicillin-resistant penicillin-binding proteins.',
          'Target modification: Ribosomal mutations make ribosomal binding sites resistant to tetracyclines or macrolides. DNA gyrase mutations reduce fluoroquinolone binding.',
          'Efflux pumps: Active transport proteins pump antibiotics out of the cell, reducing intracellular concentration below MIC. Multi-drug efflux pumps expel multiple antibiotic classes (e.g. Pseudomonas aeruginosa).',
          'Reduced uptake: Alterations in outer membrane permeability reduce antibiotic entry (especially important in Gram-negative bacteria).',
          'Alternative metabolic pathways: Sulfonamide-resistant bacteria use alternative folic acid sources, bypassing the blocked metabolic step.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-resistance',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Antibiotic Resistance Crisis',
        text: 'Resistance develops through natural selection: bacteria exposed to antibiotics survive if resistant, then multiply. Overuse of antibiotics accelerates resistance development. MRSA, vancomycin-resistant enterococci (VRE), and carbapenem-resistant Enterobacteriaceae (CRE) are major concerns. Antibiotic stewardship (using antibiotics only when necessary) is critical.'
      },
      terms: []
    },
    {
      id: 'h-viruses-no-abx',
      type: 'heading',
      data: { text: 'Why Antibiotics Do Not Work on Viruses', level: 2 },
      terms: []
    },
    {
      id: 'p-viruses-no-abx-1',
      type: 'paragraph',
      data: {
        text: 'Antibiotics are ineffective against viruses because viruses lack the cellular structures and processes that antibiotics target. Key reasons:'
      },
      terms: []
    },
    {
      id: 'list-viruses-no-abx',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'No cell wall: Viruses have no peptidoglycan cell wall, so beta-lactams cannot work.',
          'No ribosomes: Viruses lack 70S ribosomes; they use host ribosomes to synthesise proteins. Antibiotics that target bacterial ribosomes do not affect the host ribosomes (which are 80S eukaryotic ribosomes and more complex). Targeting host ribosomes would poison host cells.',
          'No DNA gyrase: Viruses that use RNA do not have DNA gyrase; DNA viruses often use host DNA replication machinery.',
          'No metabolism: Viruses have no independent metabolism; they hijack host cell machinery. Antibiotics cannot differentiate viral from host enzymes without harming the host.',
          'Result: Giving antibiotics for viral infections is futile and promotes antibiotic resistance. Antiviral drugs (e.g. acyclovir for herpes, oseltamivir for influenza) are needed for viral infections.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-viruses-no-abx',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Antibiotics Fail on Viruses',
        text: 'Viruses lack: cell wall, bacterial ribosomes, DNA gyrase, independent metabolism. Antibiotics cannot target viral structures without harming host cells. Antiviral drugs are specific to viral processes (e.g. reverse transcriptase in HIV, neuraminidase in influenza). Using antibiotics for viral infections wastes drugs and promotes bacterial resistance.'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Bactericidal antibiotics (beta-lactams, aminoglycosides, fluoroquinolones) kill bacteria directly; used for severe infections. Bacteriostatic antibiotics (tetracyclines, macrolides) inhibit growth; require immune system. MIC measures susceptibility; resistance develops via enzymatic inactivation, target modification, efflux pumps, reduced uptake. Antibiotics do not work on viruses (lack cell wall, ribosomes, gyrase, metabolism); antivirals are needed.',
        apply: 'A patient with meningitis caused by penicillin-resistant S. pneumoniae (penicillin MIC 4 microg/mL, breakpoint 2 microg/mL) should receive what antibiotic? (Cephalosporin or vancomycin, which penetrate CNS and have activity). Why not tetracycline (bacteriostatic)?',
        analyze: 'Explain why overuse of antibiotics in agriculture promotes the spread of resistance genes. Consider horizontal gene transfer between species.',
        evaluate: 'Should antibiotics ever be given for viral infections (e.g. cold, flu)? Consider both patient benefit and public health impact. What messaging would reduce unnecessary antibiotic use?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can distinguish bactericidal from bacteriostatic antibiotics', checked: false },
          { text: 'I know when to use each type (severe infections vs mild)', checked: false },
          { text: 'I can name three bactericidal antibiotic classes and their mechanisms', checked: false },
          { text: 'I can name three bacteriostatic antibiotic classes and their mechanisms', checked: false },
          { text: 'I understand what MIC is and how it relates to resistance', checked: false },
          { text: 'I can explain four mechanisms of antibiotic resistance', checked: false },
          { text: 'I know what beta-lactamase does and why MRSA is resistant', checked: false },
          { text: 'I understand why antibiotics do not work on viruses', checked: false },
          { text: 'I can explain why using antibiotics for viral infections is harmful', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Bactericidal antibiotics (penicillins, cephalosporins, aminoglycosides, fluoroquinolones, vancomycin) kill bacteria; rapid action; for severe infections. Mechanisms: block cell wall synthesis (beta-lactams), inhibit protein synthesis (aminoglycosides), inhibit DNA gyrase (fluoroquinolones). Bacteriostatic antibiotics (tetracyclines, macrolides, sulfonamides) inhibit growth; slower; for mild infections. MIC = lowest concentration inhibiting growth; resistance measured against MIC breakpoint. Resistance mechanisms: beta-lactamase, target modification, efflux pumps, reduced uptake. Antibiotics fail on viruses (no cell wall, ribosomes, gyrase, metabolism); use antivirals instead.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-bactericidal', prompt: 'Name three bactericidal antibiotic classes and their mechanisms.' },
      { id: 'cue-2', blockId: 'list-bacteriostatic', prompt: 'Give three examples of bacteriostatic antibiotics.' },
      { id: 'cue-3', blockId: 'h-mic', prompt: 'What is minimum inhibitory concentration (MIC) and how is it used clinically?' },
      { id: 'cue-4', blockId: 'list-resistance', prompt: 'Explain beta-lactamase and how it causes resistance.' },
      { id: 'cue-5', blockId: 'list-viruses-no-abx', prompt: 'Why do antibiotics not work on viruses? List three reasons.' }
    ],
    summaryText: 'Bactericidal: kill bacteria; beta-lactams (block cell wall), aminoglycosides (30S ribosome), fluoroquinolones (DNA gyrase), vancomycin. Bacteriostatic: inhibit growth; tetracyclines (30S ribosome), macrolides (50S), sulfonamides (folic acid). MIC = lowest inhibitory concentration; breakpoint determines susceptible vs resistant. Resistance: beta-lactamase (breaks beta-lactam), target modification, efflux pumps, reduced uptake. Antibiotics fail on viruses (lack cell wall, ribosomes, gyrase, metabolism).',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Antibiotic Mechanisms and Resistance', detail: 'Gould IM. Antibiotics: from prehistory to the present day. J Antimicrob Chemother. 2016;71(3):572-575', year: '2016', source: 'Journal of Antimicrobial Chemotherapy', tags: ['antibiotics', 'resistance mechanisms', 'MIC', 'bactericidal'] }
  ]
};
