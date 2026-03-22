export const note_economics_2_10_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and explain the circular flow of income model, including the roles of households, firms, factor markets, product markets, injections, and withdrawals.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Circular Flow of Income', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>circular flow of income</strong> is a model that shows how money flows between households and firms in an economy. In its simplest (two-sector) form, <strong>households</strong> provide factors of production (labour, land, capital, enterprise) to <strong>firms</strong> via the <strong>factor market</strong>, and receive <strong>factor incomes</strong> (wages, rent, interest, profit) in return. Firms use these factors to produce goods and services, which households purchase via the <strong>product market</strong>.' }] } },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Circular flow of income with households, firms, injections (I, G, X) and withdrawals (S, T, M)',
        svg: '<svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect width="560" height="420" fill="#0f172a"/><text x="280" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Circular Flow of Income</text><!-- Households box --><rect x="30" y="160" width="120" height="60" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/><text x="90" y="186" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">HOUSEHOLDS</text><text x="90" y="202" text-anchor="middle" fill="#1e40af" font-size="10">Consumers / Workers</text><!-- Firms box --><rect x="410" y="160" width="120" height="60" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/><text x="470" y="186" text-anchor="middle" font-weight="bold" fill="#166534" font-size="12">FIRMS</text><text x="470" y="202" text-anchor="middle" fill="#166534" font-size="10">Producers / Employers</text><!-- Upper flow: factor services --><line x1="150" y1="175" x2="410" y2="175" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/><text x="280" y="165" text-anchor="middle" fill="#3b82f6" font-size="11">Factor services (labour etc.)</text><!-- Lower flow: factor income --><line x1="410" y1="205" x2="150" y2="205" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow2)"/><text x="280" y="220" text-anchor="middle" fill="#16a34a" font-size="11">Factor incomes (wages, profit)</text><!-- Product market: goods --><path d="M 470 220 Q 470 310 280 330 Q 90 350 90 220" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3"/><text x="280" y="360" text-anchor="middle" fill="#b45309" font-size="11">Goods &amp; Services (product market)</text><!-- Injections --><rect x="220" y="60" width="120" height="45" rx="6" fill="#78350f" stroke="#d97706" stroke-width="1.5"/><text x="280" y="80" text-anchor="middle" fill="#92400e" font-size="11" font-weight="bold">Injections</text><text x="280" y="97" text-anchor="middle" fill="#92400e" font-size="10">I + G + X</text><line x1="280" y1="105" x2="280" y2="160" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,3"/><text x="287" y="135" fill="#d97706" font-size="10">&#8595;</text><!-- Withdrawals --><rect x="220" y="370" width="120" height="40" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="1.5"/><text x="280" y="388" text-anchor="middle" fill="#991b1b" font-size="11" font-weight="bold">Withdrawals</text><text x="280" y="404" text-anchor="middle" fill="#991b1b" font-size="10">S + T + M</text><line x1="280" y1="340" x2="280" y2="370" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><text x="287" y="358" fill="#dc2626" font-size="10">&#8595;</text><!-- Arrow markers --><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#3b82f6"/></marker><marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/></marker></defs></svg>'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Injections and Withdrawals', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'In a more realistic <strong>open economy with government</strong>, the circular flow is modified by <strong>injections</strong> (flows of income into the circular flow from outside) and <strong>withdrawals/leakages</strong> (flows of income out of the circular flow).' }] } },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Injections (J = I + G + X):</strong><br/>• <strong>Investment (I)</strong> — firm spending on capital goods<br/>• <strong>Government spending (G)</strong> — public expenditure on goods and services<br/>• <strong>Exports (X)</strong> — foreign spending on domestic output' },
          { text: '<strong>Withdrawals (W = S + T + M):</strong><br/>• <strong>Saving (S)</strong> — households not spending all income<br/>• <strong>Taxation (T)</strong> — government takes income out of the flow<br/>• <strong>Imports (M)</strong> — domestic spending on foreign output' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Equilibrium Condition',
        text: 'The economy is in <strong>macroeconomic equilibrium</strong> when <strong>total injections equal total withdrawals</strong>: I + G + X = S + T + M. If injections exceed withdrawals, national income rises. If withdrawals exceed injections, national income falls.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Why the Model Matters', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'The circular flow model provides the foundation for understanding <strong>national income determination</strong>, the <strong>multiplier</strong>, and how fiscal and monetary policies affect the economy. It shows that an increase in any injection — for example, a rise in government spending (G) — will increase national income, while an increase in any withdrawal — for example, higher taxes (T) — will reduce it.' }] } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume all income is re-spent in the next round of the circular flow. In reality, households withdraw income through savings (S), taxation (T), and imports (M). These leakages reduce the multiplier effect. Always identify and quantify leakages to calculate the true multiplier impact."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'The circular flow shows money moving between households and firms; injections (I+G+X) add to the flow, withdrawals (S+T+M) remove from it; equilibrium when J=W.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'What are the two main actors in the simple circular flow model?', answer: 'Households (consumers/workers) and Firms (producers/employers), connected via factor and product markets.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Name the three injections into the circular flow.', answer: 'Investment (I), Government spending (G), and Exports (X).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Name the three withdrawals from the circular flow.', answer: 'Saving (S), Taxation (T), and Imports (M).' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'What is the equilibrium condition in the circular flow?', answer: 'Total injections equal total withdrawals: I + G + X = S + T + M.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_10_0;
