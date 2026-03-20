export const note_economics_2_7_9 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between inflation, disinflation, and deflation, understand the dangers of deflation, and explain the debt-deflation spiral.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Deflation and Disinflation', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Inflation</strong>: a sustained rise in the general price level (positive CPI inflation rate).<br/><br/><strong>Disinflation</strong>: a <em>fall in the rate</em> of inflation — prices are still rising, just more slowly. The inflation rate is positive but declining.<br/><br/><strong>Deflation</strong>: a sustained <em>fall in the general price level</em> — the inflation rate becomes negative (e.g., CPI = −1%).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Inflation vs disinflation vs deflation',
        headers: ['Concept', 'Price Level', 'Inflation Rate', 'Example'],
        rows: [
          ['Inflation', 'Rising', 'Positive (e.g., +4%)', 'UK 2022: CPI rose to 11%'],
          ['Disinflation', 'Still rising, but more slowly', 'Falling but still positive (e.g., 4% → 2%)', 'UK 2023: CPI fell from 11% to 4%'],
          ['Deflation', 'Falling', 'Negative (e.g., −1%)', 'Japan 1990s–2000s; UK briefly in 2015']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Dangers of Deflation', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Consumers delay spending</strong>: if prices are expected to fall further, households postpone purchases → AD falls → output falls → unemployment rises' },
          { text: '<strong>Debt-deflation spiral</strong>: the real value of debt rises as prices fall (same nominal debt, lower income to repay it) → debtors cut spending → further fall in AD' },
          { text: '<strong>Falling profits and investment</strong>: firms\' revenues fall in nominal terms → profits squeezed → less investment → lower future capacity' },
          { text: '<strong>Rising real interest rates</strong>: nominal rates cannot go below zero (zero lower bound), so if prices fall, real rates rise even with zero nominal rates → money becomes more valuable just by holding it → less borrowing and spending' },
          { text: '<strong>Wage resistance</strong>: workers resist nominal wage cuts even as prices fall → real wages rise → firms cut employment' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Price Level Over Time', level: 3 }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Price level paths showing inflation, disinflation, and deflation',
        svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect width="520" height="300" fill="#0f172a"/><line x1="60" y1="250" x2="500" y2="250" stroke="#374151" stroke-width="2"/><line x1="60" y1="250" x2="60" y2="30" stroke="#374151" stroke-width="2"/><text x="280" y="285" text-anchor="middle" fill="#374151">Time</text><text x="18" y="145" text-anchor="middle" fill="#374151" transform="rotate(-90,18,145)">Price Level</text><polyline points="60,210 160,160 260,110 360,60 460,20" stroke="#ef4444" stroke-width="2.5" fill="none"/><text x="465" y="20" fill="#ef4444" font-size="11">Inflation</text><polyline points="60,210 160,185 260,165 360,150 460,140" stroke="#f59e0b" stroke-width="2.5" fill="none"/><text x="465" y="140" fill="#f59e0b" font-size="11">Disinflation</text><polyline points="60,210 160,220 260,235 360,245 460,258" stroke="#6366f1" stroke-width="2.5" fill="none"/><text x="440" y="275" fill="#6366f1" font-size="11">Deflation</text><line x1="60" y1="210" x2="500" y2="210" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4"/><text x="63" y="206" fill="#9ca3af" font-size="10">Base level</text><text x="60" y="22" fill="#374151" font-size="12" font-weight="bold">Price Level Paths Over Time</text></svg>'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Warning',
        text: '<strong>Do not confuse disinflation with deflation.</strong> Disinflation means prices are still rising — just more slowly. Only deflation means prices are actually falling. Stating "prices fell" when inflation slowed is incorrect.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Disinflation is a slowing of inflation (still positive); deflation is negative inflation (prices falling). Deflation is dangerous: it causes spending delays, debt-deflation spirals, rising real rates, and falling profits.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Disinflation = falling inflation rate (still positive); deflation = prices falling. Deflation triggers spending delays and debt spirals.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What is the difference between disinflation and deflation?',
        answer: 'Disinflation is a falling rate of inflation (prices still rising, just more slowly). Deflation is when the price level actually falls (negative inflation rate).'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'Why might deflation cause consumers to delay spending?',
        answer: 'If prices are expected to fall further, consumers postpone purchases to buy at lower prices later — this reduces AD and worsens the deflation.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'What is the debt-deflation spiral?',
        answer: 'As prices fall, the real value of nominal debts rises — debtors\' purchasing power is eroded, they cut spending, AD falls further, worsening the deflation.'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'Why does deflation raise real interest rates even when nominal rates are near zero?',
        answer: 'Real interest rate = nominal rate − inflation. With negative inflation (deflation), even a 0% nominal rate gives a positive real rate, discouraging borrowing and spending.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_9;
