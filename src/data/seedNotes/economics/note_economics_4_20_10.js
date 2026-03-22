export const note_economics_4_20_10 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Apply the Marshall-Lerner condition and J-curve analysis to evaluate the impact of currency depreciation on the current account balance.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Marshall-Lerner Condition and J-Curve', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Marshall-Lerner Condition', level: 3 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>Marshall-Lerner (ML) condition</strong> states that a currency depreciation will improve the current account balance only if the sum of the price elasticities of demand for exports and imports is greater than 1 (in absolute value):'
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: '|PED_X| + |PED_M| > 1',
        caption: 'Marshall-Lerner Condition — current account improves if sum of elasticities exceeds 1'
      }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'When the exchange rate depreciates: exports become cheaper in foreign currency (export volume rises if |PED_X| > 0); imports become more expensive in domestic currency (import volume falls if |PED_M| > 0). If the combined volume responses are large enough (ML holds), total export revenue rises and total import spending falls, improving the current account. If |PED_X| + |PED_M| < 1 (both demands are inelastic), the current account worsens after depreciation.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The J-Curve Effect', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Even when the ML condition holds in the long run, there is typically a short-run <strong>worsening</strong> of the current account following depreciation — known as the <strong>J-curve effect</strong>. This occurs because: in the short run, quantities of exports and imports are relatively fixed (contracts are pre-agreed, consumers cannot immediately switch suppliers). The higher import prices immediately worsen the import bill in domestic currency terms (value effect), while export volumes do not rise immediately. Only after a lag (6-18 months typically) do volumes adjust, and the current account improves.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="500" height="320" fill="#0f172a" rx="8"/><text x="250" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">The J-Curve Effect</text><line x1="60" y1="260" x2="460" y2="260" stroke="#6b7280" stroke-width="2"/><line x1="60" y1="40" x2="60" y2="260" stroke="#6b7280" stroke-width="2"/><text x="460" y="275" text-anchor="middle" font-size="12" fill="#6b7280">Time</text><text x="25" y="150" text-anchor="middle" font-size="12" fill="#6b7280" transform="rotate(-90,25,150)">CA Balance</text><line x1="60" y1="160" x2="460" y2="160" stroke="#9ca3af" stroke-width="1" stroke-dasharray="5,4"/><text x="55" y="165" text-anchor="end" font-size="11" fill="#9ca3af">0</text><text x="120" y="278" text-anchor="middle" font-size="11" fill="#374151">Depreciation</text><line x1="120" y1="260" x2="120" y2="270" stroke="#374151" stroke-width="1.5"/><path d="M120,160 Q160,230 220,230 Q280,230 340,130 Q380,80 440,80" stroke="#6366f1" stroke-width="2.5" fill="none"/><circle cx="120" cy="160" r="5" fill="#6366f1"/><text x="185" y="250" text-anchor="middle" font-size="11" fill="#ef4444">Short-run worsening</text><text x="370" y="100" text-anchor="middle" font-size="11" fill="#10b981">Long-run improvement</text><text x="240" y="245" font-size="10" fill="#6366f1">CA balance</text><line x1="220" y1="230" x2="220" y2="160" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/><text x="220" y="150" text-anchor="middle" font-size="10" fill="#9ca3af">Trough</text></svg>',
        caption: 'J-Curve: current account worsens initially after depreciation then improves as quantities adjust'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Why the J-Curve Occurs', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>At the moment of depreciation</strong>: export and import quantities are fixed by pre-existing contracts; import prices rise immediately in domestic currency' },
          { text: '<strong>Short run (0-6 months)</strong>: import bill rises in domestic currency (same volume, higher price); export revenue rises modestly as prices fall marginally; CA worsens' },
          { text: '<strong>Medium run (6-18 months)</strong>: consumers switch away from expensive imports; foreign buyers increase demand for cheaper exports; volumes adjust' },
          { text: '<strong>Long run (18+ months)</strong>: if ML holds, full volume adjustment occurs; CA improves beyond initial position — the J-shape is complete' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Linking ML and J-Curve',
        text: 'The ML condition determines whether the CA improves in the long run. The J-curve describes the path — even if ML holds, the CA worsens first before improving. In the UK, estimates suggest PED for exports ~0.5 and PED for imports ~0.5, giving combined elasticity ~1.0 — close to the boundary. This means depreciation may only marginally improve the UK current account, and the J-curve trough may be prolonged.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always link the J-curve to the ML condition in exam answers. State: "In the short run the ML condition does not hold as quantities are fixed (J-curve trough). In the long run, if ML holds, the CA improves." Mention time lags explicitly — this shows strong analytical understanding.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't treat the Marshall-Lerner condition as guaranteed in the short run. The J-curve shows initial BoP worsens post-devaluation (existing contracts, slow quantity adjustment) before improving. Missing this timeframe destroys your analysis of devaluation effectiveness."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'The Marshall-Lerner condition states depreciation improves the current account if |PED_X| + |PED_M| > 1; the J-curve shows the short-run worsening before long-run improvement as quantities take time to adjust.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-1',
        prompt: 'State the Marshall-Lerner condition and explain its significance for exchange rate policy.',
        answer: '|PED_X| + |PED_M| > 1. If the combined price elasticity of demand for exports and imports exceeds 1, currency depreciation will improve the current account. If it is less than 1 (both demands inelastic), depreciation worsens the current account.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'Explain why the current account worsens initially after depreciation (J-curve effect).',
        answer: 'In the short run, export and import quantities are fixed by contracts — they cannot adjust immediately. Import prices rise in domestic currency instantly, increasing the import bill. Export volumes do not rise quickly. So the CA worsens initially. Only after 6-18 months do quantities adjust (if ML holds), and the CA improves.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'What are the estimated price elasticities for UK exports and imports and what does this suggest?',
        answer: 'Estimates suggest PED for UK exports ~0.5 and imports ~0.5, giving a combined elasticity of ~1.0 — close to the ML boundary. This means depreciation may only marginally improve the UK current account over the long run, and the J-curve trough may be prolonged.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_10;
