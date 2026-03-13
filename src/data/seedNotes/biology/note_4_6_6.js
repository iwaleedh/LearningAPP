export const note_biology_4_6_6 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the different routes pathogens take to enter the body and the natural barriers (skin, flora, stomach acid, lysozyme) that prevent infection.' }
    },
    {
      id: 'h-routes',
      type: 'heading',
      data: { text: 'Pathogens: Routes of Entry', level: 2 }
    },
    {
      id: 'p-routes-intro',
      type: 'paragraph',
      data: { text: 'To cause disease, a pathogen must first enter the host body. This can occur through natural body openings (mouth, eyes, respiratory or urinary tracts) or directly into the bloodstream through breaks in the skin.' }
    },
    {
      id: 'h-transmission',
      type: 'heading',
      data: { text: 'Modes of Transmission', level: 3 }
    },
    {
      id: 'list-transmission',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Vectors:** Living organisms (like mosquitoes or flies) carry pathogens and transmit them between hosts (e.g., malaria).',
          '**Inhalation:** Infected droplets from coughing/sneezing are suspended in the air and inhaled into the respiratory tract (e.g., flu, TB).',
          '**Ingestion:** Pathogens enter the digestive system via contaminated food or drink. Undercooked food is a common source (e.g., Salmonella, cholera).',
          '**Indirect Contact:** Pathogens on inanimate objects (fomites like towels, surfaces) transfer to a healthy person who touches them and then touches their face.',
          '**Direct Contact:** Physical contact involving skin or body fluids (e.g., shaking hands, sexual transmission). Examples include HIV and syphilis.',
          '**Inoculation:** Entering directly into the bloodstream through broken skin, animal bites, scratches, or shared needles (e.g., rabies, tetanus).'
        ]
      }
    },
    {
      id: 'h-barriers',
      type: 'heading',
      data: { text: 'Barriers to Pathogenic Entry', level: 2 }
    },
    {
      id: 'p-barriers-intro',
      type: 'paragraph',
      data: { text: 'The human body has several physiological and chemical mechanisms to prevent pathogens from successfully entering or establishing an infection.' }
    },
    {
      id: 'list-barriers',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Skin:** Acts as a tough physical barrier. If cut, the blood clotting mechanism rapidly seals the wound to prevent pathogen entry.',
          '**Stomach Acid:** Gastric juices contain hydrochloric acid, creating a highly acidic environment (low pH) that kills most pathogens ingested on food or drink.',
          '**Gut and Skin Flora:** Harmless symbiotic microorganisms live on the skin and in the intestine. They compete with pathogenic microbes for nutrients and space, limiting pathogen reproduction.',
          '**Lysozyme:** An antibacterial enzyme secreted in mucosal surfaces, including tears, saliva, and mucus. Lysozyme damages bacterial cell walls, causing them to lyse (burst).'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Define a vector in the context of disease transmission and give an example.' },
      { id: 'cue-2', prompt: 'How does stomach acid act as a barrier to infection?' },
      { id: 'cue-3', prompt: 'What role does gut flora play in preventing disease?' },
      { id: 'cue-4', prompt: 'Where is lysozyme found and how does it destroy bacteria?' }
    ],
    summaryText: 'A vector is an organism that transmits pathogens (e.g., mosquitoes carrying malaria). Stomach acid destroys ingested pathogens due to its low pH. Gut flora outcompetes pathogenic bacteria for resources and space. Lysozyme is found in tears, saliva, and mucus, and it works by digesting bacterial cell walls, causing them to burst.'
  }
};
