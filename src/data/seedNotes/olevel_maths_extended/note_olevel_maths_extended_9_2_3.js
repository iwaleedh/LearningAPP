export const note_olevel_maths_extended_9_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Statistics/stem-and-leaf-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Construct and interpret stem-and-leaf diagrams, including back-to-back diagrams, and find averages from them.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Stem-and-Leaf Diagrams', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>stem-and-leaf diagram</strong> displays data in a compact way while keeping each individual value. The <strong>stem</strong> is the leading digit(s) and the <strong>leaf</strong> is the last digit. Leaves must be in <strong>numerical order</strong>.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Data: 12, 15, 21, 24, 24, 27, 31, 35, 38<br><br>Stem | Leaf<br>1 | 2 5<br>2 | 1 4 4 7<br>3 | 1 5 8<br>Key: 2|4 = 24<br><br>Median = 5th value = <strong>24</strong><br>Mode = <strong>24</strong><br>Range = 38 − 12 = <strong>26</strong>'
      }
    },
    {
      id: 'callout-key-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rules for Stem-and-Leaf Diagrams',
        text: '• Leaves must be in ascending order<br>• Always include a <strong>key</strong> (e.g. 3|1 = 31)<br>• Each leaf represents one data value<br>• You can read off the median, mode, and range directly'
      }
    },
    {
      id: 'h-btb',
      type: 'heading',
      data: { text: 'Back-to-Back Stem-and-Leaf', level: 2 }
    },
    {
      id: 'p-btb',
      type: 'paragraph',
      data: { text: 'A <strong>back-to-back</strong> stem-and-leaf diagram compares two data sets. One set has leaves to the right of the stem, the other to the left (read from the stem outward).' }
    },
    {
      id: 'callout-tip-key',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Forgetting the key is one of the most common errors. The key is essential — without it the examiner cannot tell if 2|4 means 24 or 2.4.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Stem-and-leaf diagrams keep raw data visible. Leaves must be ordered and a key must be included. Back-to-back diagrams compare two data sets using the same stem.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Stem = leading digits, leaf = last digit. Order leaves; always include a key.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What are the stem and leaf?', answer: 'Stem = leading digit(s); leaf = last digit of each value.' },
      { id: 'cue-2', blockId: 'callout-key-rules', prompt: 'What must always be included with a stem-and-leaf diagram?', answer: 'A key (e.g. 2|4 = 24) and leaves in order.' },
      { id: 'cue-3', blockId: 'p-btb', prompt: 'How does a back-to-back stem-and-leaf diagram work?', answer: 'Two sets share the stem — one goes left, the other right.' },
      { id: 'cue-4', blockId: 'callout-worked-1', prompt: 'How do you find the median from a stem-and-leaf diagram?', answer: 'Count to the middle value — all data is already in order.' }
    ]
  },
  evidence: []
};
