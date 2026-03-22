export const note_economics_2_12_10 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain monetary policy instruments — primarily interest rates — and how they influence aggregate demand through consumption, investment, and exchange rates.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Monetary Policy Tools', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Bank Rate (base rate)</strong>: set by Bank of England MPC (meets 8 times/year). Determines overnight borrowing rate for banks → feeds through to mortgage and loan rates.' }, { text: '<strong>Quantitative Easing (QE)</strong>: central bank buys government bonds → injects money into financial system → lowers long-term yields → stimulates lending. Used at zero lower bound (2009 onwards).' }, { text: '<strong>Forward guidance</strong>: central bank signals future rate intentions → shapes expectations → businesses plan investment accordingly.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Transmission Mechanism', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>↓Interest rates → ↑Consumption</strong>: mortgage payments fall → households have more disposable income; cost of borrowing falls → credit card / personal loan spending rises.' }, { text: '<strong>↓Interest rates → ↑Investment</strong>: cheaper borrowing lowers cost of financing capital projects → more projects exceed the MEC threshold.' }, { text: '<strong>↓Interest rates → ↓Exchange rate</strong>: lower returns on UK assets → capital outflows → £ depreciates → exports cheaper → ↑net exports → ↑AD.' }, { text: '<strong>Asset price channel</strong>: lower rates raise house/share prices → wealth effect → ↑consumption.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The transmission mechanism has time lags (~12–18 months for full effect). This makes monetary policy difficult to time precisely. Also: effectiveness limited at zero lower bound — hence QE used after 2008.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Monetary policy tools: Bank Rate, QE, forward guidance. Transmission: ↓rates → ↑C + ↑I + ↓exchange rate → ↑net exports → ↑AD. Lags ~12–18 months.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Remember the monetary transmission mechanism: interest rate cuts \u2192 lower borrowing costs \u2192 increased investment and consumption \u2192 higher AD \u2192 output and employment rise. However, this mechanism takes 12\u201318 months and can be slow or broken during credit crunches (liquidity trap). Acknowledge time lags and limits when evaluating monetary policy effectiveness."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Monetary tools: Bank Rate, QE, forward guidance. ↓rates → ↑C, ↑I, ↓£ → ↑X. Transmission lags ~12–18 months.',
    cues: [
      { id: 'cue-1', blockId: 'list-2', prompt: 'Explain the exchange rate channel of monetary policy transmission.', answer: 'Lower interest rates make UK assets less attractive to foreign investors → capital outflows → £ depreciates → exports are cheaper for foreigners (↑X) and imports are more expensive (↓M) → net exports improve → AD rises.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is Quantitative Easing and when is it used?', answer: 'QE is when the central bank creates money to buy financial assets (government bonds), injecting liquidity into the banking system. It is used when the base rate is at (or near) the zero lower bound and conventional rate cuts are insufficient to stimulate the economy.' },
    ]
  },
  evidence: [], mentions: []
};
