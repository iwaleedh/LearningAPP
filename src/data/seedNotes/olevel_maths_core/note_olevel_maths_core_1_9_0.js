export const note_olevel_maths_core_1_9_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/introduction-to-ratios.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand ratio notation, read and write ratios, and express ratios in simplest form.' }
    },
    {
      id: 'h-what-is-ratio',
      type: 'heading',
      data: { text: 'What is a Ratio?', level: 2 }
    },
    {
      id: 'p-what-is-ratio',
      type: 'paragraph',
      data: { text: 'A <strong>ratio</strong> compares two (or more) quantities of the same type. It shows how much of one quantity there is compared to another. Written as <strong>a : b</strong> (read as "a to b").' }
    },
    {
      id: 'callout-worked-eg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Reading Ratios',
        text: 'In a class of 30 students there are 18 girls and 12 boys.<br>Ratio of girls to boys = 18 : 12<br>This means for every 18 girls, there are 12 boys.'
      }
    },
    {
      id: 'h-simplify',
      type: 'heading',
      data: { text: 'Simplifying Ratios', level: 2 }
    },
    {
      id: 'p-simplify',
      type: 'paragraph',
      data: { text: 'Divide both parts of the ratio by their <strong>HCF</strong> (highest common factor). The ratio is in simplest form when the parts share no common factor other than 1.' }
    },
    {
      id: 'callout-worked-simplify',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Simplifying a Ratio',
        text: 'Simplify 18 : 12<br>HCF(18, 12) = 6<br>18 ÷ 6 = 3, 12 ÷ 6 = 2<br>Simplified: <strong>3 : 2</strong><br><br>Simplify 45 : 30 : 15<br>HCF = 15<br><strong>3 : 2 : 1</strong>'
      }
    },
    {
      id: 'h-units',
      type: 'heading',
      data: { text: 'Ratios and Units', level: 2 }
    },
    {
      id: 'p-units',
      type: 'paragraph',
      data: { text: 'Both quantities must be in the <em>same units</em> before writing a ratio. Convert first if necessary.' }
    },
    {
      id: 'callout-worked-units',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Different Units — Convert First',
        text: 'Write the ratio of 50 cm to 2 m.<br>Convert to same units: 50 cm : 200 cm<br>Simplify (HCF = 50): <strong>1 : 4</strong>'
      }
    },
    {
      id: 'callout-key-ratio',
      type: 'callout',
      data: { style: 'key', title: 'Key Points', text: '1. A ratio has no units — just numbers.<br>2. Order matters: 3 : 2 ≠ 2 : 3.<br>3. Ratios can have more than two parts: a : b : c.' }
    },
    {
      id: 'callout-tip-ratio',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always check the order: "ratio of A to B" means write A first, then B. A common mistake is reversing the order.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A ratio compares quantities of the same type using a : b notation. Simplify by dividing by HCF. Ensure same units before writing ratio. Order matters.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-what-is-ratio', prompt: 'What does the ratio 3 : 2 mean? Does order matter?' },
      { id: 'cue-2', blockId: 'callout-worked-simplify', prompt: 'Simplify the ratio 18 : 12. What method do you use?' },
      { id: 'cue-3', blockId: 'callout-worked-units', prompt: 'Write the ratio of 50 cm to 2 m in simplest form. What must you do first?' },
      { id: 'cue-4', blockId: 'callout-key-ratio', prompt: 'List three key properties of ratios.' }
    ],
    summaryText: 'Ratio compares like quantities: a : b. Simplify using HCF. Units must match. Order matters.',
    ready: true
  },
  evidence: []
};
