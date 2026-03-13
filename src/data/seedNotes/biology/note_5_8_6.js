export const note_biology_5_8_6 = {
  blocks: [
    {
      id: 'obj-6',
      type: 'objective',
      data: { text: 'Know the functions of the main regions of the brain, including the cerebrum, hypothalamus, cerebellum, and medulla oblongata.' }
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Human Brain Structures & Functions', level: 2 }
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'The brain, alongside the spinal cord, is part of the central nervous system (CNS). It is composed of billions of interconnected neurones. The brain contains several distinct regions that carry out specific functions.' }
    },
    {
      id: 'table-brain-regions',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of Brain Regions',
        headers: ['Region', 'Primary Functions'],
        rows: [
          ['Cerebrum', 'Vision, hearing, speech, thinking, memory.'],
          ['Hypothalamus', 'Thermoregulation, osmoregulation, hormone secretion (via pituitary gland).'],
          ['Cerebellum', 'Coordination of movement and balance.'],
          ['Medulla oblongata', 'Unconscious life functions (heart rate, breathing rate).']
        ]
      }
    },
    {
      id: 'h-cerebrum',
      type: 'heading',
      data: { text: 'The Cerebrum', level: 3 }
    },
    {
      id: 'p-cerebrum',
      type: 'paragraph',
      data: { text: 'The cerebrum is the largest part of the human brain, accounting for about 80% of its total mass. It controls conscious activities.' }
    },
    {
      id: 'list-cer',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Divided into two halves (cerebral hemispheres) joined by a band of nerve fibres called the corpus callosum.',
          'The right hemisphere controls the left side of the body, and the left hemisphere controls the right side.',
          'The thin outer layer is called the cerebral cortex or "grey matter", which consists of the cell bodies of neurones.',
          'The cerebral cortex is highly folded to increase its surface area, allowing it to contain a greater number of neurones and connections for complex behaviours.',
          'Beneath the grey matter lies the "white matter", consisting of myelinated axons of neurones.'
        ]
      }
    },
    {
      id: 'h-hypothalamus',
      type: 'heading',
      data: { text: 'The Hypothalamus', level: 3 }
    },
    {
      id: 'p-hypo',
      type: 'paragraph',
      data: { text: 'The hypothalamus monitors the blood flowing through it and initiates homeostatic responses. It can release hormones directly or stimulate the neighbouring pituitary gland to secrete hormones.' }
    },
    {
      id: 'list-hypo',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Regulating body temperature:** Monitors blood temperature and initiates responses if it gets too high or too low.',
          '**Osmoregulation:** Monitors water potential of the blood and adjusts antidiuretic hormone (ADH) release from the pituitary gland.',
          '**Regulating digestive activity:** Oversees enzyme secretion in the gut and regulates the feeling of fullness/hunger.'
        ]
      }
    },
    {
      id: 'h-cerebellum',
      type: 'heading',
      data: { text: 'The Cerebellum', level: 3 }
    },
    {
      id: 'p-cerebellum',
      type: 'paragraph',
      data: { text: 'The cerebellum coordinates movement. This includes balance, a highly complex function requiring the synthesis of sensory inputs from the eyes, the semicircular canals in the ears, and numerous muscles.' }
    },
    {
      id: 'h-medulla',
      type: 'heading',
      data: { text: 'The Medulla Oblongata', level: 3 }
    },
    {
      id: 'p-medulla',
      type: 'paragraph',
      data: { text: 'Also known simply as the medulla, this region contains coordination centres controlling unconscious autonomy. These functions continue to maintain life even if higher parts of the brain (like the cerebrum) are severely damaged.' }
    },
    {
      id: 'list-medulla',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The cardiac centre controls the heart rate.',
          'The respiratory centre controls the breathing rate.'
        ]
      }
    },
    {
      id: 'summary-6',
      type: 'summary',
      data: { text: 'The brain is compartmentalised: the highly folded cerebrum manages conscious thought, the hypothalamus maintains homeostasis and hormone release, the cerebellum ensures coordinated movement, and the medulla oblongata controls autonomous survival functions like heart rate and breathing.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'q1', blockId: 'table-brain-regions', prompt: 'State the roles of the cerebellum and the medulla oblongata.' },
      { id: 'q2', blockId: 'list-cer', prompt: 'Explain the functional benefit of the cerebral cortex being highly folded.' },
      { id: 'q3', blockId: 'list-cer', prompt: 'What distinguishes the grey matter from the white matter in the cerebrum?' },
      { id: 'q4', blockId: 'list-hypo', prompt: 'Give two examples of homeostatic control mediated by the hypothalamus.' }
    ],
    summaryText: 'Cerebrum = conscious thought and memory; Cerebellum = coordination/balance; Medulla = heart/breathing rates; Hypothalamus = homeostasis (temp/water) and endocrine control.',
    ready: true
  },
  evidence: []
};