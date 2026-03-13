export const note_biology_4_6_10 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the primary and secondary immune responses, the differences between active and passive immunity, vaccination, and the evolutionary race between pathogens and hosts.' }
    },
    {
      id: 'h-responses',
      type: 'heading',
      data: { text: 'Primary vs Secondary Immune Response', level: 2 }
    },
    {
      id: 'p-primary',
      type: 'paragraph',
      data: { text: 'The **primary immune response** occurs the first time the immune system encounters a specific new antigen.' }
    },
    {
      id: 'list-primary',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The number of T and B cells with correct complementary receptors is initially very low.',
          'It takes several days for clones to be produced and for plasma cells to secrete sufficient antibodies.',
          'Due to this delay, the infected person will experience symptoms of the disease.',
          'During this time, both T and B memory cells are produced and remain in the blood.'
        ]
      }
    },
    {
      id: 'p-secondary',
      type: 'paragraph',
      data: { text: 'The **secondary immune response** occurs if the exact same antigen is encountered again in the future.' }
    },
    {
      id: 'list-secondary',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'It is much **faster and stronger** than the primary response.',
          'Memory cells are already present in large quantities.',
          'They immediately detect the antigen, divide rapidly, and differentiate.',
          'Antibodies are produced much quicker and in larger concentrations, often eliminating the pathogen before symptoms can develop.'
        ]
      }
    },
    {
      id: 'h-immunity-types',
      type: 'heading',
      data: { text: 'Types of Immunity', level: 2 }
    },
    {
      id: 'table-immunity',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of Active and Passive Immunity',
        headers: ['Type', 'Definition', 'Natural Example', 'Artificial Example'],
        rows: [
          ['Active', 'Antibodies produced by own immune system in response to an antigen. Memory cells created (long-term immunity).', 'Catching a disease and recovering (exposure to pathogen).', 'Vaccination (injection of dead/attenuated pathogen).'],
          ['Passive', 'Antibodies gained from an outside source. No immune response triggered, no memory cells created (short-term immunity).', 'Antibodies crossing the placenta to a foetus, or via breast milk.', 'Injection or transfusion of antibodies (e.g., tetanus antitoxin).']
        ]
      }
    },
    {
      id: 'h-vaccination',
      type: 'heading',
      data: { text: 'Vaccination', level: 2 }
    },
    {
      id: 'p-vaccine',
      type: 'paragraph',
      data: { text: 'Vaccines contain the antigen (or a harmless/dead/attenuated version of the pathogen). The immune system mounts a primary response to these safe antigens, generating memory cells without causing the severe disease. If the real pathogen is encountered later, the stronger secondary response eliminates it quickly.' }
    },
    {
      id: 'h-evolutionary-race',
      type: 'heading',
      data: { text: 'Pathogens vs Hosts: An Evolutionary Arms Race', level: 2 }
    },
    {
      id: 'p-ev-race-intro',
      type: 'paragraph',
      data: { text: 'As vertebrates have evolved complex immune systems, pathogens have simultaneously evolved evasion mechanisms—a continuous evolutionary arms race.' }
    },
    {
      id: 'list-hiv-evasion',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**HIV Evasion:**',
          'Destroys T helper cells, removing the \"directors\" of the specific immune response.',
          'High mutation rates in genes coding for antigen proteins lead to **antigenic variability**. Memory cells for one strain will not recognise a newly mutated strain.',
          'Prevents infected cells from presenting viral antigens on their cell surface membrane.'
        ]
      }
    },
    {
      id: 'list-tb-evasion',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Tuberculosis (Mycobacterium tuberculosis) Evasion:**',
          'Once engulfed by phagocytes, TB bacteria produce substances that prevent the lysosome from fusing with the phagocytic vacuole.',
          'The bacteria are protected from digestive enzymes and multiply safely inside the phagocyte.',
          'They disrupt antigen presentation in infected phagocytes, hiding from the immune system.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Why is the secondary immune response faster and stronger than the primary response?' },
      { id: 'cue-2', prompt: 'Give an example of natural passive immunity.' },
      { id: 'cue-3', prompt: 'What happens when a pathogen undergoes antigenic variation?' },
      { id: 'cue-4', prompt: 'How does Mycobacterium tuberculosis survive inside phagocytes?' }
    ],
    summaryText: 'The secondary response is faster because memory cells from the primary infection quickly launch a massive clone production of plasma cells. Natural passive immunity involves antibodies passed from mother to baby (via placenta or breast milk). Antigenic variation means mutated surface antigens no longer match existing memory cells, requiring a new primary response. TB bacteria evade destruction by preventing the fusion of lysosomes with the phagocytic vacuole, growing safely inside the macrophage.'
  }
};
