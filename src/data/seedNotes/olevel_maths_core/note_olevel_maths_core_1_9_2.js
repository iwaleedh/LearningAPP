export const note_olevel_maths_core_1_9_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/sharing-in-a-ratio.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Divide a quantity in a given ratio using the unitary method (find the value of one part, then scale).' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method: Sharing in a Ratio', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Add up all the parts of the ratio to find the <strong>total number of parts</strong>.' },
          { text: 'Divide the total quantity by the total parts to find the <strong>value of one part</strong>.' },
          { text: 'Multiply each ratio number by the value of one part.' }
        ]
      }
    },
    {
      id: 'callout-worked-basic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Share $120 in the ratio 3 : 2',
        text: 'Total parts = 3 + 2 = 5<br>Value of 1 part = $120 ÷ 5 = $24<br><br>Share 1 (ratio 3) = 3 × $24 = <strong>$72</strong><br>Share 2 (ratio 2) = 2 × $24 = <strong>$48</strong><br><br>Check: 72 + 48 = 120 ✓'
      }
    },
    {
      id: 'callout-worked-three',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Share 90 ml in the ratio 1 : 2 : 3',
        text: 'Total parts = 1 + 2 + 3 = 6<br>Value of 1 part = 90 ÷ 6 = 15 ml<br><br>Shares: 1×15 = <strong>15 ml</strong>, 2×15 = <strong>30 ml</strong>, 3×15 = <strong>45 ml</strong><br>Check: 15 + 30 + 45 = 90 ✓'
      }
    },
    {
      id: 'h-given-one-part',
      type: 'heading',
      data: { text: 'Finding the Total When One Share is Known', level: 2 }
    },
    {
      id: 'callout-worked-reverse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Given One Share, Find Total',
        text: 'Two friends split a prize in ratio 3 : 5. The larger share is $40.<br>The larger part corresponds to 5 in the ratio.<br>Value of 1 part = 40 ÷ 5 = $8<br>Total = (3 + 5) × $8 = <strong>$64</strong><br>Smaller share = 3 × $8 = <strong>$24</strong>'
      }
    },
    {
      id: 'callout-key-sharing',
      type: 'callout',
      data: { style: 'key', title: 'Key Method', text: 'Total parts = sum of ratio numbers. Value of 1 part = total quantity ÷ total parts. Each share = ratio number × 1 part value. Always check your shares sum to the original total.' }
    },
    {
      id: 'callout-tip-sharing',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Always add a check: do your shares add back to the original quantity? This catches arithmetic mistakes and earns follow-through marks.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Sharing in ratio: (1) add parts, (2) divide total by parts count, (3) multiply each ratio part by the unit value. Verify shares sum to original total.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-method', prompt: 'Describe the 3-step method for sharing a quantity in a ratio.' },
      { id: 'cue-2', blockId: 'callout-worked-basic', prompt: 'Share $120 in the ratio 3 : 2. Find each share and verify.' },
      { id: 'cue-3', blockId: 'callout-worked-three', prompt: 'Share 90 ml in the ratio 1 : 2 : 3.' },
      { id: 'cue-4', blockId: 'callout-worked-reverse', prompt: 'Two friends split in ratio 3 : 5 and the larger share is $40. Find the total prize.' },
      { id: 'cue-5', blockId: 'callout-tip-sharing', prompt: 'What check should you always do after sharing in a ratio?' }
    ],
    summaryText: 'Sharing: add ratio parts, divide total by sum (= 1 part), multiply each ratio number by 1 part. Check: parts sum to total.',
    ready: true
  },
  evidence: []
};
