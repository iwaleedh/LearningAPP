export const note_biology_4_5_20 = {
  noteId: 'biology:4:5:20',
  blocks: [
    {
      type: 'objective',
      id: 'obj-cp11',
      data: {
        text: 'Understand Core Practical 11: Investigate the distribution and abundance of organisms in a habitat using quadrats and transects.',
      },
    },
    {
      type: 'heading',
      id: 'h-cp11-intro',
      data: { text: 'Core Practical 11: Quadrat & Transect Study', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-cp11',
      data: {
        text: 'Ecologists use sampling to estimate population sizes and distribution without having to count every individual. Sampling must be representative to avoid bias.',
      },
    },
    {
      type: 'heading',
      id: 'h-quadrats',
      data: { text: 'Random Sampling with Quadrats', level: 3 },
    },
    {
      type: 'list',
      id: 'list-quadrats',
      data: {
        style: 'bullet',
        items: [
          'Used for estimating abundance in a visually uniform habitat.',
          'A grid is laid out over the area using measuring tapes. Coordinates are generated using a random number generator to remove human bias.',
          'A frame quadrat (e.g. 0.5m x 0.5m) is placed at the coordinates.',
          'Estimations: count individual plants, or use percentage cover if individuals are hard to distinguish (e.g. moss or grass).',
          'Repeat many times to calculate a reliable mean abundance per square metre.'
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-transects',
      data: { text: 'Systematic Sampling with Transects', level: 3 },
    },
    {
      type: 'list',
      id: 'list-transects',
      data: {
        style: 'bullet',
        items: [
          'Used to measure how distribution changes along an environmental gradient (e.g. moving away from the shore, or from light into forest shade).',
          'A measuring tape (transect line) is laid across the habitat.',
          'In a **Line Transect**, organisms touching the line at regular intervals are recorded.',
          'In a **Belt Transect**, quadrats are placed at regular intervals (e.g. every 2 metres) continuously or interrupted, to give both distribution and abundance data.'
        ],
      },
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-quadrats', prompt: 'How is bias avoided when choosing quadrat locations?' },
      { id: 'cue-2', blockId: 'list-transects', prompt: 'When would a systematic belt transect be more appropriate than random quadrat sampling?' }
    ],
    summaryText: 'Quadrats placed at random coordinates estimate uniform abundance, while belt transects measure changing distribution along an environmental gradient.',
    ready: true,
  },
  evidence: [],
  mentions: [],
};
