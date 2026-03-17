export const note_olevel_maths_core_9_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Statistics/stem-and-leaf-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Construct and interpret stem-and-leaf diagrams for a single data set. Draw a back-to-back stem-and-leaf diagram to compare two data sets. Read off the median, mode, and range directly from the diagram.',
      },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Stem-and-Leaf Diagram?', level: 2 },
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: {
        text: 'A <b>stem-and-leaf diagram</b> displays data so that individual values are retained. The data is split into a <b>stem</b> (leading digit(s)) and a <b>leaf</b> (the final digit). All the original data can be read back from the diagram.',
      },
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Stems are written in a <b>vertical column</b> in order' },
          { text: 'Leaves are written to the <b>right of the stem</b> in ascending order' },
          { text: 'Each leaf represents a <b>single data value</b>' },
          { text: 'A <b>key</b> is essential: e.g. "2 | 4 means 24"' },
          { text: 'The diagram must be <b>ordered</b> (leaves in ascending order)' },
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Drawing a stem-and-leaf diagram',
        text: 'The ages of 15 people at a cinema are:<br><b>14, 17, 22, 25, 19, 31, 18, 23, 27, 16, 29, 35, 21, 18, 24</b><br><br><b>Step 1 — Identify stems:</b> The tens digits are 1, 2, and 3.<br><b>Step 2 — Insert leaves in order:</b><br><br><table style="border-collapse:collapse;font-family:monospace;font-size:0.95em"><tr><td style="padding:2px 8px;border-right:2px solid #444;font-weight:bold">1</td><td style="padding:2px 8px">4 6 7 8 8 9</td></tr><tr><td style="padding:2px 8px;border-right:2px solid #444;font-weight:bold">2</td><td style="padding:2px 8px">1 2 3 4 5 7 9</td></tr><tr><td style="padding:2px 8px;border-right:2px solid #444;font-weight:bold">3</td><td style="padding:2px 8px">1 5</td></tr></table><br><b>Key:</b> 2 | 3 means 23 years old<br><br><b>Median:</b> n = 15, position = (15+1)/2 = 8th value<br>Counting: 14,16,17,18,18,19,21,<u>23</u>,24,25,27,29,31,35 → <b>Median = 23</b><br><b>Mode:</b> 18 (appears twice — no other value appears more than once) → <b>Mode = 18</b><br><b>Range:</b> 35 − 14 = <b>21</b>',
      },
    },
    {
      id: 'h-back',
      type: 'heading',
      data: { text: 'Back-to-Back Stem-and-Leaf Diagrams', level: 2 },
    },
    {
      id: 'p-back',
      type: 'paragraph',
      data: {
        text: 'A <b>back-to-back</b> stem-and-leaf diagram compares <b>two data sets</b>. The stems are in the middle. Leaves for one group go to the <b>right</b>; leaves for the other group go to the <b>left</b>. Left leaves are written <b>away from the stem</b> (largest first).',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Back-to-back stem-and-leaf',
        text: 'Maths test scores:<br><b>Class A:</b> 42, 55, 61, 67, 73, 78, 84, 89, 91, 95<br><b>Class B:</b> 38, 45, 52, 59, 64, 68, 72, 77, 83, 90<br><br><table style="border-collapse:collapse;font-family:monospace;font-size:0.95em"><tr style="background:#f0f0f0"><th style="padding:2px 10px">Class A (leaves)</th><th style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444">Stem</th><th style="padding:2px 10px">Class B (leaves)</th></tr><tr><td style="padding:2px 10px;text-align:right"></td><td style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444;text-align:center;font-weight:bold">3</td><td style="padding:2px 10px">8</td></tr><tr><td style="padding:2px 10px;text-align:right">2</td><td style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444;text-align:center;font-weight:bold">4</td><td style="padding:2px 10px">5</td></tr><tr><td style="padding:2px 10px;text-align:right">5</td><td style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444;text-align:center;font-weight:bold">5</td><td style="padding:2px 10px">2 9</td></tr><tr><td style="padding:2px 10px;text-align:right">7 1</td><td style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444;text-align:center;font-weight:bold">6</td><td style="padding:2px 10px">4 8</td></tr><tr><td style="padding:2px 10px;text-align:right">8 3</td><td style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444;text-align:center;font-weight:bold">7</td><td style="padding:2px 10px">2 7</td></tr><tr><td style="padding:2px 10px;text-align:right">9 4</td><td style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444;text-align:center;font-weight:bold">8</td><td style="padding:2px 10px">3</td></tr><tr><td style="padding:2px 10px;text-align:right">5 1</td><td style="padding:2px 10px;border-left:2px solid #444;border-right:2px solid #444;text-align:center;font-weight:bold">9</td><td style="padding:2px 10px">0</td></tr></table><br>Key: For Class A: 4 | 2 means 42. For Class B: 6 | 4 means 64.<br><br><b>Class A:</b> Median = mean of 5th and 6th = (73+78)/2 = <b>75.5</b>. Range = 95−42 = <b>53</b><br><b>Class B:</b> Median = mean of 5th and 6th = (64+68)/2 = <b>66</b>. Range = 90−38 = <b>52</b><br><br>Class A has a higher median (75.5 vs 66), suggesting Class A performed better on average.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip',
        text: 'When constructing a stem-and-leaf diagram:<br>1. First <b>order the raw data</b>, or order leaves as you insert them<br>2. Always write the <b>key</b><br>3. For back-to-back: Class A leaves go <b>left</b> of the stem, ascending from stem outward (so the stem is 7, and leaves 3, 8 are shown as "<b>8 3</b>" reading left from stem)<br>4. Count leaves systematically to verify total matches n',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Stem-and-leaf: stem = leading digit(s), leaf = units digit; leaves in ascending order; key required. Median, mode, and range can all be read directly. Back-to-back: two groups share stems; compare medians and ranges for a full comparison.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Stem = leading digit(s), leaf = units digit, leaves ordered. Back-to-back compares two groups. Key always required.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-rules',
        prompt: 'What must you always include in a stem-and-leaf diagram?',
        answer: 'A key (e.g. "2 | 4 means 24"), stems in order, and leaves in ascending order from the stem.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-we1',
        prompt: 'In the cinema ages example (n=15), what is the median and how is it found?',
        answer: 'The 8th value in the ordered diagram. Reading from the diagram: 14,16,17,18,18,19,21,23,... The 8th value is 23. Median = 23.',
      },
      {
        id: 'cue-3',
        blockId: 'p-back',
        prompt: 'In a back-to-back stem-and-leaf diagram, how are the leaves arranged on the left side?',
        answer: 'The left leaves are written away from the stem in order — smallest values are furthest from the stem. (So reading from stem outward, values increase.)',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we2',
        prompt: 'From the back-to-back example, which class performed better, and how do you know?',
        answer: 'Class A performed better — its median is 75.5 compared to Class B\'s 66. Both ranges are similar (53 vs 52), so Class A is consistently higher.',
      },
    ],
  },
  evidence: [],
};
