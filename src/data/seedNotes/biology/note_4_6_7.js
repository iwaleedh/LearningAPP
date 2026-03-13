export const note_biology_4_6_7 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the roles of antigens and the non-specific immune responses, including inflammation, interferons, and phagocytosis by macrophages.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Antigens and Immune Responses', level: 2 }
    },
    {
      id: 'p-antigen',
      type: 'paragraph',
      data: { text: '**Antigens** are molecules (usually proteins or glycoproteins) located on the surface of cells. They act as "ID tags", identifying a cell as either \'self\' (belonging to the body) or \'non-self\' (foreign). Pathogens possess non-self antigens, allowing the immune system to recognise them as invaders.' }
    },
    {
      id: 'p-response-types',
      type: 'paragraph',
      data: { text: 'When a pathogen invades, the body mounts two types of immune response:' }
    },
    {
      id: 'list-response-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Non-specific:** The response is the same regardless of which pathogen enters. It is immediate.',
          '**Specific:** The response is tailored to a particular pathogen, usually taking longer to develop.'
        ]
      }
    },
    {
      id: 'h-inflammation',
      type: 'heading',
      data: { text: 'Inflammation', level: 2 }
    },
    {
      id: 'p-inflammation',
      type: 'paragraph',
      data: { text: 'If tissue is damaged or infected, the surrounding area becomes swollen, warm, and painful. This is inflammation, driven by cell signalling:' }
    },
    {
      id: 'list-inflammation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Damaged tissues and **mast cells** secrete a chemical signalling molecule called **histamine**.',
          'Histamine causes **vasodilation** (widening of blood vessels), increasing blood flow to the infected area (causing heat and redness).',
          'Histamine makes capillary walls more permeable (\"leaky\").',
          'Fluid and blood plasma proteins leak into the surrounding tissues, causing swelling (oedema).',
          'The increased permeability allows phagocytes to leave the blood and enter the tissue to engulf foreign particles.',
          'Cells also release **cytokines** to trigger further immune responses in the area.'
        ]
      }
    },
    {
      id: 'h-interferons',
      type: 'heading',
      data: { text: 'Interferons', level: 2 }
    },
    {
      id: 'p-interferons',
      type: 'paragraph',
      data: { text: 'When cells are infected by viruses, they produce and release anti-viral proteins called **interferons** before they die.' }
    },
    {
      id: 'list-interferons',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'They prevent viruses from spreading to surrounding uninfected cells.',
          'They inhibit the production of viral proteins, stopping viral replication.',
          'They activate white blood cells of the specific immune response to destroy infected cells.',
          'They promote inflammation, boosting the non-specific response.'
        ]
      }
    },
    {
      id: 'h-phagocytosis',
      type: 'heading',
      data: { text: 'Phagocytosis', level: 2 }
    },
    {
      id: 'p-phago-intro',
      type: 'paragraph',
      data: { text: 'Phagocytes are a type of white blood cell (e.g., macrophages) responsible for engulfing and digesting dead cells and microorganisms.' }
    },
    {
      id: 'list-phagocytosis',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Chemicals released by pathogens and host cells (e.g., histamine) attract phagocytes to the infection site.',
          'The phagocyte moves towards the pathogen and recognises its non-self antigens.',
          'The cell surface membrane of the phagocyte extends around the pathogen, engulfing it via **endocytosis**.',
          'The pathogen is trapped inside a vesicle called a **phagocytic vacuole** (or phagosome).',
          '**Lysosomes** within the phagocyte fuse with the phagocytic vacuole and release digestive enzymes (such as lysozyme).',
          'These enzymes digest and destroy the pathogen.',
          'Most importantly, macrophages take the pathogen\'s antigens and display them on their own cell surface membrane, becoming an **antigen-presenting cell (APC)**. This initiates the specific immune response.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What chemical do mast cells release during inflammation, and what is its effect on capillaries?' },
      { id: 'cue-2', prompt: 'Which pathogens trigger the release of interferons from infected cells?' },
      { id: 'cue-3', prompt: 'What organelle fuses with the phagocytic vacuole during phagocytosis?' },
      { id: 'cue-4', prompt: 'What does a phagocyte become after it has digested a pathogen and displayed its antigens?' }
    ],
    summaryText: 'Mast cells release histamine, which causes vasodilation and makes capillaries more permeable. Viruses trigger infected cells to release interferons. Lysosomes fuse with the phagocytic vacuole to release digestive enzymes like lysozyme. The phagocyte becomes an antigen-presenting cell (APC), bridging the non-specific and specific immune responses.'
  }
};
