export const note_olevel_business_5_5_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Financial Information And Decisions/liquidity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define liquidity, calculate and interpret the current ratio and acid test ratio, evaluate what these ratios reveal about a business\'s short-term financial health, and recommend strategies to improve liquidity.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Liquidity?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>Liquidity</strong> refers to a business\'s ability to pay its <strong>short-term debts</strong> (current liabilities) when they fall due, using its <strong>short-term assets</strong> (current assets). A business with good liquidity can meet its immediate financial obligations without difficulty; a business with poor liquidity may struggle to pay wages, suppliers, or utility bills — even if it is profitable.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Liquidity',
        text: 'Liquidity is the ability of a business to convert assets into cash quickly enough to pay its short-term obligations. A liquid asset is one that can be rapidly converted to cash without significant loss of value. Cash itself is the most liquid asset.'
      }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Liquidity is assessed using <strong>liquidity ratios</strong>, which compare current assets (or near-liquid assets) to current liabilities. The two main liquidity ratios are the <strong>current ratio</strong> and the <strong>acid test ratio</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Current Ratio', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'The <strong>current ratio</strong> compares all current assets to current liabilities. It indicates how many dollars of current assets are available to cover each dollar of current liabilities.'
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}',
        caption: 'Current Ratio formula (expressed as X : 1)'
      }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'The current ratio is expressed as a ratio (e.g., 2:1 or simply 2), not as a percentage. Using the BlueSky Electronics example from the balance sheet: Current Assets = $43,000; Current Liabilities = $26,000.'
      }
    },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: '\\text{Current Ratio} = \\frac{\\$43{,}000}{\\$26{,}000} = 1.65 : 1',
        caption: 'BlueSky Electronics — Current Ratio'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Interpreting the Current Ratio', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Interpreting Current Ratio Results',
        headers: ['Ratio', 'Interpretation', 'Implication'],
        rows: [
          ['Below 1:1', 'Current liabilities exceed current assets', 'Serious liquidity problem — cannot pay short-term debts from current assets; risk of insolvency'],
          ['Around 1:1 to 1.5:1', 'Borderline — tight liquidity', 'Limited buffer; any unexpected outflow could cause cash problems'],
          ['1.5:1 to 2:1', 'Generally regarded as healthy', 'Business can comfortably meet short-term obligations; adequate buffer'],
          ['Above 2:1', 'Very high liquidity', 'May indicate too much cash sitting idle or excess stock — inefficient use of assets; opportunity cost']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'info',
        title: 'Ideal Current Ratio ≈ 1.5 to 2 : 1',
        text: 'The generally accepted "ideal" range for the current ratio is 1.5:1 to 2:1 for most manufacturing businesses. However, this varies by industry. Supermarkets and retailers often operate with current ratios below 1:1 because they receive cash immediately from customers but pay suppliers after 30–60 days — their model generates strong cash flow despite apparent low liquidity ratios.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'The Acid Test Ratio (Quick Ratio)', level: 2 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'The <strong>acid test ratio</strong> (also called the <strong>quick ratio</strong> or <strong>liquid ratio</strong>) is a stricter measure of liquidity that <strong>excludes inventory (stock)</strong> from current assets. This is because inventory is the least liquid current asset — it must first be sold and then payment collected before it becomes cash. The acid test therefore gives a more conservative picture of immediate liquidity.'
      }
    },
    {
      id: 'eq-3',
      type: 'equation',
      data: {
        latex: '\\text{Acid Test Ratio} = \\frac{\\text{Current Assets} - \\text{Inventory}}{\\text{Current Liabilities}}',
        caption: 'Acid Test Ratio formula (expressed as X : 1)'
      }
    },
    {
      id: 'para-6',
      type: 'paragraph',
      data: {
        text: 'Using BlueSky Electronics: Current Assets = $43,000; Inventory = $15,000; Current Liabilities = $26,000.'
      }
    },
    {
      id: 'eq-4',
      type: 'equation',
      data: {
        latex: '\\text{Acid Test} = \\frac{\\$43{,}000 - \\$15{,}000}{\\$26{,}000} = \\frac{\\$28{,}000}{\\$26{,}000} = 1.08 : 1',
        caption: 'BlueSky Electronics — Acid Test Ratio'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Interpreting the Acid Test Ratio', level: 3 }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Interpreting Acid Test Ratio Results',
        headers: ['Ratio', 'Interpretation'],
        rows: [
          ['Below 0.75:1', 'Very poor immediate liquidity — significant risk of inability to pay short-term debts quickly'],
          ['0.75:1 to 1:1', 'Borderline — acceptable but tight; little room for error'],
          ['At or above 1:1', 'Generally regarded as satisfactory — liquid assets approximately cover current liabilities'],
          ['Well above 1:1', 'Strong liquidity, but may indicate idle cash that could be invested more productively']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Acid Test Matters More Than Current Ratio',
        text: 'A business can have a healthy current ratio but a poor acid test if most of its current assets are tied up in slow-moving inventory. For example: Current assets = $100,000 (of which $90,000 is stock), Current liabilities = $60,000. Current ratio = 1.67:1 (looks fine), but Acid test = ($100k − $90k) / $60k = 0.17:1 (dangerously low). The acid test reveals the true picture.'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'How to Improve Liquidity', level: 2 }
    },
    {
      id: 'para-7',
      type: 'paragraph',
      data: {
        text: 'If a business\'s liquidity ratios are too low, it must take action to either <strong>increase current assets</strong> or <strong>reduce current liabilities</strong> (or both).'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Increase cash inflows:</strong> sell more goods/services faster; offer discounts to encourage customers to pay early.' },
          { text: '<strong>Reduce debtors:</strong> chase outstanding customer payments more aggressively; reduce credit terms given to customers.' },
          { text: '<strong>Reduce stock levels:</strong> avoid over-ordering; use just-in-time stock management to free up cash.' },
          { text: '<strong>Extend credit from suppliers:</strong> negotiate longer payment terms (e.g., 60 instead of 30 days) to delay outflows.' },
          { text: '<strong>Obtain short-term finance:</strong> arrange a bank overdraft to cover temporary shortfalls.' },
          { text: '<strong>Convert long-term assets to cash:</strong> sell surplus non-current assets and use proceeds for working capital.' },
          { text: '<strong>Reschedule debt repayments:</strong> convert short-term debt (current liabilities) into long-term debt (non-current liabilities) to reduce current liabilities.' }
        ]
      }
    },
    {
      id: 'tbl-3',
      type: 'comparisonTable',
      data: {
        caption: 'Liquidity Improvement Strategies — Evaluation',
        headers: ['Strategy', 'Effect on Ratio', 'Potential Drawback'],
        rows: [
          ['Reduce stock levels', 'Decreases current assets but frees up cash — net effect depends on what replaces stock in assets', 'Risk of stockouts, lost sales'],
          ['Chase debtors faster', 'Converts debtors (current asset) to cash — improves liquidity', 'May damage customer relationships'],
          ['Extend supplier credit', 'Reduces outflows — keeps cash in the business longer', 'May damage supplier relationships if extended beyond agreed terms'],
          ['Arrange overdraft', 'Provides access to cash quickly', 'High interest rate; bank can withdraw facility'],
          ['Sell non-current assets', 'Cash increases current assets significantly', 'Loses use of the asset; may harm operations']
        ]
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'info',
        title: 'Exam Tip: Context is Everything',
        text: 'Always interpret liquidity ratios in context. Consider: the industry (retailers vs manufacturers), the trend over time (improving or worsening?), and comparison with competitors. A single ratio figure in isolation is less useful than a trend or comparison. Evaluation answers should always discuss both the implications of the ratio AND the limitations of using ratios alone.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Liquidity is the ability to pay short-term debts when due. Current Ratio = Current Assets / Current Liabilities (ideal: 1.5–2:1). Acid Test = (Current Assets − Inventory) / Current Liabilities (ideal: ≥1:1). The acid test is more conservative because it excludes stock. Improvement strategies include reducing debtors, extending supplier credit, reducing stock, arranging overdrafts, and selling assets. Always interpret ratios in industry context.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Liquidity = ability to pay short-term debts. Current ratio (ideal 1.5–2:1) and acid test (excludes stock, ideal ≥1:1) measure this.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-1',
        prompt: 'What is liquidity and why is it important even for profitable businesses?',
        answer: 'Liquidity is the ability to pay short-term debts when due. It matters even for profitable businesses because a profitable business can run out of cash if customers pay slowly — without liquidity it cannot pay wages, suppliers, or bills, risking insolvency.'
      },
      {
        id: 'cue-2',
        blockId: 'eq-1',
        prompt: 'What is the formula for the current ratio?',
        answer: 'Current Ratio = Current Assets / Current Liabilities. Expressed as X:1.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'What current ratio range is generally considered healthy, and what does a ratio above 2:1 suggest?',
        answer: '1.5:1 to 2:1 is generally considered healthy. A ratio above 2:1 may suggest the business is holding too much idle cash or excess stock — inefficient use of assets with an opportunity cost.'
      },
      {
        id: 'cue-4',
        blockId: 'eq-3',
        prompt: 'What is the formula for the acid test ratio and why does it exclude inventory?',
        answer: 'Acid Test = (Current Assets − Inventory) / Current Liabilities. Inventory is excluded because it is the least liquid current asset — it must first be sold and payment collected before it becomes cash, making it less reliable for immediate debt repayment.'
      },
      {
        id: 'cue-5',
        blockId: 'call-3',
        prompt: 'Explain how a business can have a good current ratio but a poor acid test ratio.',
        answer: 'If most of the current assets are tied up in slow-moving stock/inventory, the current ratio looks healthy (includes all current assets) but the acid test is very low (excludes stock). For example: if current assets are $100k but $90k is stock, and liabilities are $60k — CR = 1.67:1 (fine) but ATR = 0.17:1 (dangerously low).'
      },
      {
        id: 'cue-6',
        blockId: 'list-1',
        prompt: 'Give three ways a business can improve its liquidity ratios.',
        answer: 'Any three of: chase debtors for faster payment; reduce stock levels; extend credit terms from suppliers; arrange a bank overdraft; sell surplus non-current assets; reschedule long-term debt to reduce current liabilities.'
      }
    ]
  },
  evidence: [],
  mentions: []
};
