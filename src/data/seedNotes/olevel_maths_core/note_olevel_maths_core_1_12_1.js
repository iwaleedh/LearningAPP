export const note_olevel_maths_core_1_12_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/exchange-rates.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use exchange rates to convert between currencies; determine which operation (multiply or divide) is correct for a given conversion.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What Is an Exchange Rate?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'An <strong>exchange rate</strong> tells you how much of one currency you get for one unit of another. For example, if £1 = $1.28, then to change pounds to dollars you multiply by 1.28.' }
    },
    {
      id: 'callout-key-direction',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Which Operation to Use',
        text: 'If the rate is: 1 unit of Currency A = r units of Currency B<br><br>• A → B: <strong>multiply by r</strong><br>• B → A: <strong>divide by r</strong><br><br>Tip: You can always write the rate as a fraction and check which cancels the unwanted unit.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Convert Pounds to Dollars',
        text: 'Exchange rate: £1 = $1.28<br>Convert £350 to dollars.<br><br>£ → $: multiply by 1.28<br>$350 × 1.28 = <strong>$448</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Convert Dollars to Pounds',
        text: 'Exchange rate: £1 = $1.28<br>Convert $640 to pounds.<br><br>$ → £: divide by 1.28<br>$640 ÷ 1.28 = <strong>£500</strong>'
      }
    },
    {
      id: 'h-best-rate',
      type: 'heading',
      data: { text: 'Comparing Exchange Rates', level: 2 }
    },
    {
      id: 'p-best-rate',
      type: 'paragraph',
      data: { text: 'To find the best deal, convert the same amount using each rate and compare. The rate giving the most foreign currency is the best deal when buying, and giving back the most home currency is best when returning.' }
    },
    {
      id: 'callout-worked-compare',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Best Exchange Rate',
        text: 'Bank A: £1 = €1.15. Bank B: £1 = €1.12. Which gives more euros for £400?<br><br>Bank A: 400 × 1.15 = €460<br>Bank B: 400 × 1.12 = €448<br><strong>Bank A gives more euros — better deal.</strong>'
      }
    },
    {
      id: 'callout-tip-rounding',
      type: 'callout',
      data: { style: 'tip', title: 'Rounding Tip', text: 'Give currency answers to 2 decimal places unless told otherwise. E.g. €45.678 rounds to €45.68. Be careful not to round too early in multi-step problems.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Exchange rate: 1 Currency A = r Currency B. A→B: multiply by r. B→A: divide by r. To compare rates, convert the same amount and compare the results.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-direction', prompt: 'The rate is £1 = $1.28. Do you multiply or divide when converting £350 to dollars? What about $640 to pounds?' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Convert £350 to dollars using rate £1 = $1.28.' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'Convert $640 to pounds using rate £1 = $1.28.' },
      { id: 'cue-4', blockId: 'callout-worked-compare', prompt: 'Bank A: £1 = €1.15. Bank B: £1 = €1.12. Which is better for converting £400? Show calculations.' },
      { id: 'cue-5', blockId: 'callout-tip-rounding', prompt: 'How should you round currency answers? Why should you not round early?' }
    ],
    summaryText: 'Rate: 1 A = r B. A→B: multiply. B→A: divide. Compare rates by converting the same amount.',
    ready: true
  },
  evidence: []
};
