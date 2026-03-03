export const note_biology_4_6_8 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand pathogen evasion strategies including antigenic variation, capsules, intracellular survival, immunosuppression, and molecular mimicry; recognise the host-pathogen evolutionary arms race.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Pathogen Evasion and the Host-Pathogen Arms Race', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Pathogens have evolved sophisticated mechanisms to evade the immune system and survive within hosts. These strategies include changing surface antigens, hiding inside cells, suppressing immune function, and disguising themselves as self. The host-pathogen relationship is an evolutionary arms race: as the immune system evolves new defences, pathogens evolve new evasion tactics (the "Red Queen" hypothesis).'
      },
      terms: []
    },
    {
      id: 'h-antigen-var',
      type: 'heading',
      data: { text: 'Antigenic Variation', level: 2 },
      terms: []
    },
    {
      id: 'p-antigen-var-1',
      type: 'paragraph',
      data: {
        text: 'Antigenic variation is the change of surface antigens by a pathogen, allowing it to evade antibodies produced during previous infections or after vaccination. Pathogens accomplish this through rapid genetic mutations or genetic recombination. Influenza virus is the classic example.'
      },
      terms: []
    },
    {
      id: 'list-antigen-var',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Antigenic drift: Gradual accumulation of point mutations in genes encoding surface proteins (haemagglutinin and neuraminidase). This creates minor variants every 1–3 years, evading existing antibodies slightly. Antigenic drift is why annual influenza vaccines are needed.',
          'Antigenic shift: Reassortment of gene segments between different viral strains (only possible in segmented RNA viruses like influenza). This creates new viral subtypes (e.g. H1N1, H3N2) that are antigenically very different from previous strains. Antigenic shift can cause pandemics because existing antibodies do not recognise the new subtype.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-antigen-var',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Antigenic Variation in Influenza',
        text: 'Drift (gradual mutations): annual changes, minor antigen variation, evades antibodies partially. Shift (reassortment): rare major changes, new subtypes, evades antibodies completely. Example: 1918 Spanish Flu (H1N1), 1957 Asian Flu (H2N2), 1968 Hong Kong Flu (H3N2), 2009 Swine Flu pandemic (H1N1).'
      },
      terms: []
    },
    {
      id: 'h-capsule',
      type: 'heading',
      data: { text: 'Capsule and Resistance to Phagocytosis', level: 2 },
      terms: []
    },
    {
      id: 'p-capsule-1',
      type: 'paragraph',
      data: {
        text: 'Many bacteria produce a thick polysaccharide capsule around their cell wall. The capsule is poorly immunogenic (does not trigger strong antibody responses) and resists complement deposition and phagocytosis. Without opsonisation (coating with complement or antibodies), phagocytes cannot efficiently recognise and engulf capsulated bacteria.'
      },
      terms: []
    },
    {
      id: 'callout-capsule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Capsule as Evasion Strategy',
        text: 'Thick polysaccharide coat; prevents complement deposition; resists phagocytosis; poorly immunogenic. Examples: Streptococcus pneumoniae (major cause of meningitis), Neisseria meningitidis (meningococcus), Haemophilus influenzae. Vaccines target polysaccharide capsules to generate opsonising antibodies.'
      },
      terms: []
    },
    {
      id: 'h-intracell',
      type: 'heading',
      data: { text: 'Intracellular Survival', level: 2 },
      terms: []
    },
    {
      id: 'p-intracell-1',
      type: 'paragraph',
      data: {
        text: 'Some pathogens survive and replicate inside host cells, evading extracellular immune responses (antibodies, complement). These intracellular pathogens are protected from antibodies (which cannot cross cell membranes) but are vulnerable to cytotoxic T cells (which kill infected cells).'
      },
      terms: []
    },
    {
      id: 'list-intracell',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Mycobacterium tuberculosis: Survives inside macrophage phagosomes by inhibiting phagolysosome fusion and producing catalase to neutralise reactive oxygen species (ROS).',
          'Listeria monocytogenes: Escapes the phagosome into cytoplasm and polymerises actin to propel itself (actin comet tail).',
          'Salmonella: Manipulates endosomal trafficking to avoid lysosomal degradation.',
          'Viruses: Obligately intracellular (all viruses must replicate inside cells). HIV, herpesviruses, and others hide in immune privileged sites (e.g. brain, latently infected cells).'
        ]
      },
      terms: []
    },
    {
      id: 'callout-intracell',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Intracellular Pathogens',
        text: 'Survive inside host cells (protected from antibodies and complement); vulnerable to cytotoxic T cells; cause chronic infections. M. tuberculosis: persists for years despite immune response (basis for latent TB). Requires cell-mediated immunity (Th1 and CD8+ T cells) to clear.'
      },
      terms: []
    },
    {
      id: 'h-immuno-suppress',
      type: 'heading',
      data: { text: 'Immunosuppression', level: 2 },
      terms: []
    },
    {
      id: 'p-immuno-suppress-1',
      type: 'paragraph',
      data: {
        text: 'Some pathogens actively suppress the host immune response, allowing them to persist. HIV is the most dramatic example: it infects and destroys CD4+ T helper cells, the "master coordinators" of immunity. As CD4 count declines, the immune system fails progressively (AIDS = acquired immunodeficiency syndrome), allowing opportunistic infections (Pneumocystis jirovecii pneumonia, tuberculosis, toxoplasmosis, cryptococcal meningitis).'
      },
      terms: []
    },
    {
      id: 'list-immuno-suppress',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'HIV: Destroys CD4+ T cells, causing progressive immunodeficiency. Without treatment, CD4 count drops from normal (~1000 cells/microL) to <200 cells/microL (AIDS threshold).',
          'Cytomegalovirus (CMV): Produces viral homologues of chemokines and cytokine receptors that interfere with immune signalling.',
          'Measles virus: Immunosuppression may last weeks after infection, predisposing to secondary infections.',
          'Toxoplasma: Produces bradyzoites that evade immune recognition within tissue cysts.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-immuno-suppress',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Immunosuppression by Pathogens',
        text: 'HIV (CD4+ destruction, AIDS); CMV (cytokine/chemokine interference); measles (T cell exhaustion); parasites (Th2 response skewing). Allows opportunistic infections to become lethal. Treatment: antiretrovirals (HIV), prophylaxis (TB, fungal infections in AIDS).'
      },
      terms: []
    },
    {
      id: 'h-molecular-mim',
      type: 'heading',
      data: { text: 'Molecular Mimicry', level: 2 },
      terms: []
    },
    {
      id: 'p-molecular-mim-1',
      type: 'paragraph',
      data: {
        text: 'Molecular mimicry occurs when pathogen antigens structurally resemble host antigens, causing the immune system to mistake the pathogen for self or to produce cross-reactive antibodies. This allows pathogens to evade destruction but can also trigger autoimmune disease when the immune system attacks self-tissues.'
      },
      terms: []
    },
    {
      id: 'list-molecular-mim',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Streptococcus pyogenes (Group A Strep): M protein resembles human myosin and tropomyosin. Antibodies to M protein cross-react with cardiac muscle, causing acute rheumatic fever.',
          'Campylobacter jejuni: Lipopolysaccharide epitopes resemble gangliosides on myelin. Antibodies cross-react, causing Guillain–Barré syndrome (paralysis).',
          'Molecular mimicry is not always evasion: It can make pathogens more visible to the immune system, but the cross-reactivity can harm the host through autoimmunity.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-molecular-mim',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Molecular Mimicry Examples',
        text: 'Strep A → rheumatic fever (heart damage). Campylobacter → Guillain–Barré (paralysis). Mimicked antigens allow pathogen to "hide" and cause autoimmunity simultaneously. Vaccination against pathogens using mimicry epitopes poses theoretical risk of autoimmunity (low in practice).'
      },
      terms: []
    },
    {
      id: 'h-red-queen',
      type: 'heading',
      data: { text: 'The Red Queen Hypothesis: Evolutionary Arms Race', level: 2 },
      terms: []
    },
    {
      id: 'p-red-queen-1',
      type: 'paragraph',
      data: {
        text: 'The Red Queen hypothesis (named after Lewis Carroll\'s character who must run constantly to stay in place) describes the evolutionary arms race between hosts and pathogens. As the host immune system evolves new defences, pathogens evolve new evasion tactics. Neither side "wins"—both must continuously evolve or lose the evolutionary race. Examples:'
      },
      terms: []
    },
    {
      id: 'list-red-queen',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'MHC diversity: Humans have hundreds of MHC alleles (major histocompatibility complex), increasing the chance that some individuals can present any given pathogenic peptide. Pathogens counter with sequence variation.',
          'Influenza evolution: Annual vaccine development follows influenza evolution—scientists predict which antigenic drift variants will circulate next year and design vaccines accordingly.',
          'Antibiotic resistance: Bacteria evolve resistance; medicine develops new antibiotics; bacteria evolve resistance to new antibiotics. This endless cycle continues.',
          'Sexual reproduction: Hosts reproduce sexually (recombining genes), creating genetic diversity that slows pathogen adaptation. Asexual hosts are more vulnerable to pathogen specialisation.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-red-queen',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Red Queen Arms Race',
        text: 'Host: evolve new immune defences → Pathogen: evolve evasion tactics → Host: evolve stronger defences. Cycle repeats endlessly. This is why pathogens never become completely non-virulent and why new infectious diseases continually emerge. Neither side can achieve permanent advantage.'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Pathogens evade immunity via antigenic variation (drift/shift), capsules (resist phagocytosis), intracellular survival (escape antibodies), immunosuppression (destroy immune cells), and molecular mimicry (resemble self). The Red Queen hypothesis explains why this is an endless arms race—as hosts evolve defences, pathogens evolve counters, and the cycle continues indefinitely.',
        apply: 'Why does annual influenza vaccination only provide partial protection? (Antigenic drift occurs during the year, and vaccine is not perfectly matched.) How would a pandemic strain (antigenic shift) be different?',
        analyze: 'Why is M. tuberculosis so difficult to treat (takes 6 months of antibiotics)? Consider intracellular survival, immune suppression of infected cells, and latent TB.',
        evaluate: 'Molecular mimicry can cause autoimmunity (e.g. rheumatic fever). Should we avoid vaccinating against streptococcus despite this risk? Justify your answer with epidemiological data (rheumatic fever deaths vs vaccination risks).'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can distinguish antigenic drift from antigenic shift', checked: false },
          { text: 'I understand why annual influenza vaccines are necessary (antigenic drift)', checked: false },
          { text: 'I know how capsules resist phagocytosis', checked: false },
          { text: 'I can name three examples of intracellular pathogens', checked: false },
          { text: 'I understand why intracellular pathogens are harder to treat (antibiotics less effective)', checked: false },
          { text: 'I know how HIV causes AIDS through CD4+ T cell destruction', checked: false },
          { text: 'I can explain molecular mimicry and give two disease examples', checked: false },
          { text: 'I understand the Red Queen hypothesis and its implications', checked: false },
          { text: 'I can explain why pathogen evasion is an evolutionary arms race', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Pathogen evasion mechanisms: (1) Antigenic variation—drift (gradual mutations, annual flu changes) and shift (reassortment, pandemics). (2) Capsules—resist phagocytosis and complement. (3) Intracellular survival—M. tuberculosis (phagosome inhibition), Listeria (actin propulsion), viruses (obligate intracellular). (4) Immunosuppression—HIV destroys CD4+ T cells, causing AIDS. (5) Molecular mimicry—pathogen antigens resemble host antigens (strep → rheumatic fever). Red Queen hypothesis: host and pathogen continuously co-evolve; neither gains permanent advantage.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-antigen-var', prompt: 'Explain antigenic drift vs antigenic shift in influenza.' },
      { id: 'cue-2', blockId: 'h-capsule', prompt: 'How does a bacterial capsule help pathogens evade phagocytosis?' },
      { id: 'cue-3', blockId: 'list-intracell', prompt: 'Give two examples of intracellular pathogens and their survival mechanisms.' },
      { id: 'cue-4', blockId: 'p-immuno-suppress-1', prompt: 'How does HIV cause AIDS and what opportunistic infections result?' },
      { id: 'cue-5', blockId: 'h-red-queen', prompt: 'What is the Red Queen hypothesis and why is it relevant to host-pathogen evolution?' }
    ],
    summaryText: 'Antigenic drift: gradual mutations (annual flu changes). Antigenic shift: reassortment (pandemics). Capsule: resists phagocytosis and complement. Intracellular: M. tb inhibits phagolysosome; Listeria uses actin; viruses obligate. Immunosuppression: HIV → CD4 destruction → AIDS (CD4 <200) → opportunistic infections. Molecular mimicry: pathogen antigens mimic self (strep M protein → myosin → rheumatic fever). Red Queen: endless arms race of coevolution.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Pathogen Evolution and Immune Evasion', detail: 'Woolhouse ME, Webster JP, Domingo E, Charlesworth B, Levin BR. Biological and biomedical implications of the co-evolution of pathogens and their hosts. Nat Genet. 2002;32(4):569-577', year: '2002', source: 'Nature Genetics', tags: ['pathogen evasion', 'coevolution', 'arms race', 'red queen'] }
  ]
};
