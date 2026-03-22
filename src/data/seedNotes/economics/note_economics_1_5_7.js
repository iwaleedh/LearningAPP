export const note_economics_1_5_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Define moral hazard, identify contexts where it arises, and evaluate solutions used to limit its effects on market efficiency.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'What is Moral Hazard?', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Moral Hazard Definition', text: '<strong>Moral hazard</strong> is the tendency for a party who is <strong>protected against risk</strong> (by insurance, contract, or guarantee) to take on <strong>more risky behaviour</strong> than they would otherwise, because they do not bear the full consequences of their actions.<br/><br/>It occurs <strong>after</strong> a contract or agreement — it is a <strong>post-contractual</strong> information problem.' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Examples by Sector', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Moral hazard across sectors', headers: ['Sector', 'Situation', 'Moral hazard behaviour'], rows: [['Insurance', 'Person insures car fully', 'Takes less care parking, drives more recklessly'], ['Banking', 'Banks deemed "too big to fail"', 'Take excessive speculative risks knowing government will bail them out (2008 crisis)'], ['Healthcare', 'Free healthcare (NHS)', 'Over-use of GP appointments, A&E for minor ailments'], ['Employment', 'Job security after probation', 'Reduced effort once permanent employment is secured'], ['Lending', 'Student loans with income-contingent repayment', 'Study low-earning subjects with less concern for debt repayment']] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Solutions to Moral Hazard', level: 2 }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Co-payments and deductibles</strong>: require the insured to bear part of the cost (e.g. excess payments in car insurance) — restores incentive to avoid risk.' }, { text: '<strong>Monitoring and surveillance</strong>: insurers track driving behaviour via telematics "black boxes"; employers use performance reviews.' }, { text: '<strong>Performance-linked pay</strong>: bonuses tied to careful behaviour or performance, aligning incentives.' }, { text: '<strong>Regulation</strong>: capital adequacy requirements for banks (Basel III) prevent excessive risk-taking.' }, { text: '<strong>Reducing "too big to fail"</strong>: break up large banks; living wills for orderly bank failure prevent bailout expectations.' }] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Moral Hazard vs Adverse Selection', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'warning', title: 'Do Not Confuse These', text: '<strong>Adverse selection</strong>: hidden information <em>before</em> the contract (e.g. high-risk customers seeking insurance without revealing their risk).<br/><strong>Moral hazard</strong>: changed behaviour <em>after</em> the contract (e.g. once insured, taking more risks).<br/>Both are forms of asymmetric information — they just occur at different stages.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Moral hazard occurs post-contract when one party is shielded from risk and therefore acts less carefully. Key examples: insurance, banking ("too big to fail"), employment. Solutions: co-payments, monitoring, regulation, performance-linked pay.' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Adverse selection: hidden information before the contract (e.g. high-risk customers seeking insurance without revealing their risk).\nMoral hazard: changed behaviour after the contract (e.g. once insured, taking more risks).\nBoth are forms of asymmetric information \u2014 they just occur at different stages."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Asymmetric information happens when one party in a transaction knows more than the other (e.g. second-hand cars or healthcare). Do not confuse it with imperfect information, which means both parties lack complete knowledge."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Moral hazard = post-contract reckless behaviour due to risk being transferred. Solutions: co-payments, monitoring, regulation.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Define moral hazard.', answer: 'The tendency to take more risk after being protected from its consequences by insurance, contract, or guarantee.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Explain the "too big to fail" moral hazard in banking.', answer: 'Large banks expect government bailouts if they fail. This encourages excessive risk-taking because losses will be borne by taxpayers, not shareholders.' },
      { id: 'cue-3', blockId: 'h-3', prompt: 'How does a deductible (excess) in car insurance reduce moral hazard?', answer: 'The insured must pay the first part of any claim, so they still have a financial incentive to drive carefully even when insured.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'What is the key timing difference between adverse selection and moral hazard?', answer: 'Adverse selection occurs before the contract; moral hazard occurs after.' },
    ]
  },
  evidence: [],
  mentions: []
};
