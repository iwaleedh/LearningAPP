export const note_biology_4_6_11 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the modes of action of bactericidal and bacteriostatic antibiotics, and how the evolutionary arms race has led to antibiotic resistance.' }
    },
    {
      id: 'h-antibiotics',
      type: 'heading',
      data: { text: 'Introduction to Antibiotics', level: 2 }
    },
    {
      id: 'p-antibiotics',
      type: 'paragraph',
      data: { text: 'Antibiotics are chemical substances that damage or kill bacterial cells with little to no harm to human tissue. They are broadly classified into two types:' }
    },
    {
      id: 'list-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Bactericidal:** These antibiotics actively kill bacterial cells.',
          '**Bacteriostatic:** These inhibit bacterial growth and reproduction. However, at high enough doses, they can sometimes cause cell death.'
        ]
      }
    },
    {
      id: 'h-mode-action',
      type: 'heading',
      data: { text: 'How Antibiotics Work', level: 3 }
    },
    {
      id: 'p-mode-intro',
      type: 'paragraph',
      data: { text: 'Antibiotics interfere with the specific growth requirements or metabolism processes of the target bacterium. Examples of their mechanisms include:' }
    },
    {
      id: 'list-mode',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Inhibiting cell wall synthesis:** Prohibiting enzymes from forming bonds in bacterial cell walls (e.g. penicillin). The weakened cell bursts (lysis) due to the osmotic pressure of water entering.',
          '**Preventing protein synthesis:** Binding to bacterial ribosomes, inhibiting enzyme production and metabolic processes.',
          '**Damaging cell membranes:** Leading to the loss of useful metabolites or the uncontrolled entry of water.',
          '**Inhibiting DNA coiling:** Preventing bacterial DNA from coiling tightly into rings, so it can no longer fit in the cell.'
        ]
      }
    },
    {
      id: 'callout-eukaryotes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why are mammalian cells and viruses unaffected?',
        text: 'Mammalian cells are eukaryotic; they do not have a cell wall, and they possess different enzymes and ribosomes than prokaryotic bacteria. \n\n**Viruses** consist only of genetic material surrounded by a protein coat. They lack cellular structures (like ribosomes and cell walls), so antibiotics have no metabolic processes to target.'
      }
    },
    {
      id: 'h-resistance',
      type: 'heading',
      data: { text: 'Antibiotic Resistance', level: 2 }
    },
    {
      id: 'p-resistance',
      type: 'paragraph',
      data: { text: 'Antibiotic resistance in bacteria arises by natural selection. Bacteria reproduce rapidly, and mutations can spontaneously create genes that confer resistance to an antibiotic.' }
    },
    {
      id: 'list-resistance',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The heavy use of antibiotics (especially in hospitals) creates a strong **selection pressure**.',
          'Susceptible bacteria die, while resistant individuals survive and reproduce.',
          'Bacteria can also pass plasmids containing resistance genes to other bacterial species via **horizontal gene transfer**.',
          'This leads to strains like **MRSA** (methicillin-resistant *Staphylococcus aureus*), which are extremely difficult to treat.'
        ]
      }
    },
    {
      id: 'h-prescription',
      type: 'heading',
      data: { text: 'Codes of Practice for Prescribing Antibiotics', level: 3 }
    },
    {
      id: 'p-prescribe',
      type: 'paragraph',
      data: { text: 'To reduce the risk of resistant strains emerging, specific medical practices have been developed:' }
    },
    {
      id: 'list-prescribe',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'No antibiotic prescriptions for minor infections or viral diseases.',
          'No use of antibiotics as a preventative prophylactic measure.',
          'Preferential use of **narrow-spectrum** antibiotics (effective against a few target bacteria) rather than **broad-spectrum** antibiotics. This reduces the risk that resistance transferred horizontally will render treatment ineffective for other species.',
          '**Rotating** the types of antibiotics used, to decrease the prolonged selection pressure of a single drug.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What is the main difference between cidal and static antibiotics?' },
      { id: 'cue-2', prompt: 'Explain why antibiotics do not work against viruses.' },
      { id: 'cue-3', prompt: 'What is the advantage of prescribing narrow-spectrum antibiotics rather than broad-spectrum?' }
    ],
    summaryText: 'Bactericidal antibiotics kill bacteria directly, whereas bacteriostatic antibiotics inhibit their growth. Viruses lack cellular structures like cell walls and ribosomes, so antibiotics have no target. Narrow-spectrum antibiotics reduce the risk that resistance (if acquired and transferred horizontally) will compromise the ability to treat completely different infections.'
  }
};
