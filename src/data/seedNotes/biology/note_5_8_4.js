export const note_biology_5_8_4 = {
  blocks: [
    {
      id: 'obj-4',
      type: 'objective',
      data: { text: 'Understand how imbalances in naturally occurring brain chemicals contribute to ill health, including dopamine in Parkinson’s disease and serotonin in depression, and the drugs used to treat these conditions.' }
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Neurotransmitter Imbalances and Brain Disease', level: 2 }
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'Neurotransmitters are chemicals that transmit nerve impulses across synapses. Some neurological disorders and diseases are linked to an imbalance of specific neurotransmitters in the brain, including Parkinson\'s disease and depression.' }
    },
    {
      id: 'h-parkinsons',
      type: 'heading',
      data: { text: 'Parkinson\'s Disease', level: 3 }
    },
    {
      id: 'p-park',
      type: 'paragraph',
      data: { text: 'Parkinson\'s disease is a brain disorder that affects movement coordination, caused by the loss of neurones in specific regions of the brain.' }
    },
    {
      id: 'list-park-symptoms',
      type: 'list',
      data: { 
        style: 'bullet',
        items: [
          'Tremors in specific parts of the body',
          'Slow movement',
          'Stiff and inflexible muscles',
          'Difficulties with balance',
          'Changes to speech'
        ]
      }
    },
    {
      id: 'callout-dopamine',
      type: 'callout',
      data: { 
        style: 'key',
        title: 'Role of Dopamine',
        text: 'The lost neurones normally produce the neurotransmitter dopamine, which is involved in muscle control. Those with Parkinson\'s produce insufficient amounts of dopamine.'
      }
    },
    {
      id: 'p-dopamine-mechanism',
      type: 'paragraph',
      data: { text: 'Due to the loss of dopamine-producing neurones: Less dopamine is released into the synaptic cleft. Less dopamine binds to receptors on the postsynaptic membrane. Fewer sodium channels open, preventing depolarisation. Fewer action potentials are generated, leading to tremors and slow movement.' }
    },
    {
      id: 'h-park-treatments',
      type: 'heading',
      data: { text: 'Treatments for Parkinson\'s Disease', level: 3 }
    },
    {
      id: 'table-park-drugs',
      type: 'comparisonTable',
      data: {
        caption: 'Common drugs used to treat Parkinson\'s disease',
        headers: ['Drug Type', 'Mechanism of Action'],
        rows: [
          ['Dopamine agonists', 'Produce the same effect as dopamine by binding to and activating the dopamine receptors on the postsynaptic membrane.'],
          ['Dopamine precursors (e.g. L-dopa)', 'Chemicals that cross into the brain and can be converted into dopamine within the neurones.'],
          ['Enzyme inhibitors (e.g. MAOB inhibitors)', 'Inhibit enzymes that would normally break down dopamine in the synaptic cleft, raising dopamine levels in the brain.']
        ]
      }
    },
    {
      id: 'p-park-future',
      type: 'paragraph',
      data: { text: 'Current research into newer treatments includes: Gene therapy (adding genes to affected brain cells to increase dopamine production or prevent cell destruction) and Stem cell therapy (replacing lost dopamine-producing cells in the brain with new cells).' }
    },
    {
      id: 'h-depression',
      type: 'heading',
      data: { text: 'Depression', level: 3 }
    },
    {
      id: 'p-depression',
      type: 'paragraph',
      data: { text: 'Depression is strongly linked to low levels of the neurotransmitter serotonin. Serotonin transmits nerve impulses through the areas of the brain that control mood. Other brain chemicals implicated include noradrenaline and dopamine.' }
    },
    {
      id: 'table-antidepressants',
      type: 'comparisonTable',
      data: {
        caption: 'Antidepressant drug classes and their mechanisms',
        headers: ['Drug Class', 'Mechanism of Action'],
        rows: [
          ['SSRIs (Selective Serotonin Reuptake Inhibitors)', 'Prevent the reuptake of serotonin at synapses, increasing the overall concentration of serotonin remaining in the synaptic cleft.'],
          ['TCAs (Tricyclic Antidepressants)', 'Increase levels of both serotonin and noradrenaline in the brain.'],
          ['MAOB inhibitors', 'Inhibit the enzymes that break down neurotransmitters in the synaptic clefts.']
        ]
      }
    },
    {
      id: 'summary-4',
      type: 'summary',
      data: { text: 'Understanding the role of neurotransmitters allows the targeted treatment of neurological conditions. Parkinson\'s disease (caused by a lack of dopamine) is treated with L-dopa, agonists, or MAOB inhibitors, whereas depression (linked to low serotonin) is typically treated with SSRIs to prolong synaptic serotonin levels.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'q1', blockId: 'callout-dopamine', prompt: 'Which neurotransmitter is deficient in individuals with Parkinson\'s disease, and what is its normal function?' },
      { id: 'q2', blockId: 'p-dopamine-mechanism', prompt: 'Explain how a lack of dopamine leads to the symptoms of Parkinson\'s disease.' },
      { id: 'q3', blockId: 'table-park-drugs', prompt: 'How does L-dopa differ from dopamine agonists in treating Parkinson\'s?' },
      { id: 'q4', blockId: 'table-antidepressants', prompt: 'How do SSRIs work to alleviate the symptoms of depression?' }
    ],
    summaryText: 'Parkinson\'s involves dopamine deficiency leading to reduced postsynaptic depolarisation, treated by L-dopa or agonists. Depression involves low serotonin, treated by SSRIs to prevent reuptake.',
    ready: true
  },
  evidence: []
};