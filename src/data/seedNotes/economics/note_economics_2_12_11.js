export const note_economics_2_12_11 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the roles of the central bank — primarily the Bank of England — in monetary policy, financial stability, and acting as lender of last resort.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Roles of the Central Bank', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Setting monetary policy</strong>: the Monetary Policy Committee (MPC) meets 8 times/year to set Bank Rate to target 2% CPI inflation.' }, { text: '<strong>Lender of last resort</strong>: provides emergency liquidity to solvent commercial banks facing liquidity crisis — prevents bank runs and systemic financial collapse.' }, { text: '<strong>Financial stability</strong>: the Financial Policy Committee (FPC) monitors systemic risks; sets macroprudential policy (e.g. capital buffers).' }, { text: '<strong>Issuing banknotes</strong>: sole issuer of Bank of England notes in England and Wales; manages money supply.' }, { text: '<strong>Foreign exchange reserves</strong>: manages the UK\'s official reserves; may intervene in FX markets if needed.' }, { text: '<strong>Regulating banks</strong>: Prudential Regulation Authority (PRA, part of BoE) sets capital/liquidity requirements for banks.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Why Central Bank Independence Matters', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Granted independence in 1997 to insulate monetary policy from short-term political incentives (politicians may want low rates before elections → risk of inflation).' }, { text: '<strong>Credibility</strong>: independent bank anchors inflation expectations — if people believe inflation will stay at 2%, wage demands remain moderate.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Central bank roles: monetary policy (MPC), lender of last resort, financial stability (FPC/PRA), note issue, FX reserves. Independence reduces political short-termism and anchors inflation expectations.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Reducing central bank roles to 'controlling inflation via interest rates.' Modern central banks also: manage financial stability, act as lenders of last resort, regulate banks, and influence money supply via quantitative easing. The 2008 crisis showed that price stability alone is insufficient\u2014systemic risk and credit conditions matter enormously. Include these broader roles in your answers."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Bank of England: MPC sets rates, lender of last resort, FPC financial stability, PRA bank regulation, note issuer. Independence → credibility, anchors expectations.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What is the lender of last resort role of the central bank?', answer: 'The central bank provides emergency liquidity to banks that are solvent but illiquid (facing a run on deposits). This prevents bank runs from spreading into systemic financial collapse — demonstrated in 2008 (Northern Rock) and 2009 (emergency lending facilities).' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Why was the Bank of England granted independence in 1997?', answer: 'To prevent politically motivated interest rate decisions. Previously, governments set rates — there was an incentive to cut rates before elections, risking inflation. An independent MPC focuses solely on the inflation target, giving the policy credibility and anchoring expectations.' },
    ]
  },
  evidence: [], mentions: []
};
