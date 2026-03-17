export const note_olevel_maths_core_1_5_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/percentage-change.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate percentage increase, percentage decrease, and express a change as a percentage of the original value.' }
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'Percentage Change Formula', level: 2 }
    },
    {
      id: 'eq-pct-change',
      type: 'equation',
      data: {
        html: 'Percentage change = <span class="nb-frac"><span class="nb-num">change</span><span class="nb-den">original</span></span> × 100%',
        caption: 'Always divide by the ORIGINAL value'
      }
    },
    {
      id: 'p-change-def',
      type: 'paragraph',
      data: { text: '"Change" means: <strong>new value − original value</strong>. A positive result is an increase; a negative result is a decrease.' }
    },
    {
      id: 'callout-worked-increase',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Percentage Increase',
        text: 'A coat costs $80. It is now $92. Find the percentage increase.<br><br>Change = 92 − 80 = 12<br><br>% change = (12 ÷ 80) × 100 = <strong>15%</strong> increase'
      }
    },
    {
      id: 'callout-worked-decrease',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Percentage Decrease',
        text: 'A plant is 45 cm tall. After drought it is 36 cm. Find the % decrease.<br><br>Change = 45 − 36 = 9<br><br>% change = (9 ÷ 45) × 100 = <strong>20%</strong> decrease'
      }
    },
    {
      id: 'callout-key-original',
      type: 'callout',
      data: { style: 'key', title: 'Critical Rule: Always Divide by the Original', text: 'Percentage change ALWAYS uses the <em>original</em> (starting) value as the denominator. Never divide by the new value.' }
    },
    {
      id: 'h-express-fraction',
      type: 'heading',
      data: { text: 'Expressing One Amount as a Percentage of Another', level: 2 }
    },
    {
      id: 'eq-as-pct',
      type: 'equation',
      data: {
        html: 'A as % of B = <span class="nb-frac"><span class="nb-num">A</span><span class="nb-den">B</span></span> × 100%',
        caption: ''
      }
    },
    {
      id: 'callout-worked-express',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Express 45 as a Percentage of 60',
        text: '(45 ÷ 60) × 100 = 0.75 × 100 = <strong>75%</strong>'
      }
    },
    {
      id: 'callout-tip-pct-change',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Read carefully: "express as a percentage of" ≠ "percentage change". In the formula for express, the denominator is simply the reference value (not necessarily the starting value in a change scenario).' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Percentage change = (change ÷ original) × 100%. Change = new − original. Always use the original as denominator. To express A as % of B: (A ÷ B) × 100%.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-pct-change', prompt: 'Write the formula for percentage change. What does "change" mean?' },
      { id: 'cue-2', blockId: 'callout-worked-increase', prompt: 'A price rises from $80 to $92. Calculate the percentage increase.' },
      { id: 'cue-3', blockId: 'callout-worked-decrease', prompt: 'A height drops from 45 cm to 36 cm. Find the percentage decrease.' },
      { id: 'cue-4', blockId: 'callout-key-original', prompt: 'Why must you always divide by the original value, not the new value?' },
      { id: 'cue-5', blockId: 'eq-as-pct', prompt: 'Express 36 marks out of 48 as a percentage.' }
    ],
    summaryText: 'Percentage change = (change/original) × 100. Always the original as denominator. Increase: new>original; Decrease: new<original.',
    ready: true
  },
  evidence: []
};
