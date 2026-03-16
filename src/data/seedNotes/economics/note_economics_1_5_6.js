export const note_economics_1_5_6 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between symmetric and asymmetric information, explain how asymmetric information causes market failure, and differentiate between adverse selection and moral hazard.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Symmetric vs Asymmetric Information', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Comparing information types', headers: ['Type', 'Definition', 'Market Outcome', 'Example'], rows: [['<strong>Symmetric information</strong>', 'Both buyer and seller have the same quality and price information', 'Markets work efficiently; rational decisions made', 'Commodity markets (e.g. wheat) — prices publicly known'], ['<strong>Asymmetric information</strong>', 'One party has more or better information than the other', 'Market failure — wrong quantities produced/consumed; market may collapse', 'Used car market, insurance, healthcare, financial advice']] }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Adverse Selection (Pre-Contract Problem)', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Adverse Selection', text: '<strong>Adverse selection</strong> occurs <em>before</em> a contract is signed, when one party has private information that the other party cannot observe at the time of the agreement.<br/><br/><strong>Classic example — used car market (Akerlof\'s "Market for Lemons")</strong>:<br/>Sellers know whether a car is good or a "lemon" (defective). Buyers cannot tell. Buyers offer only average-quality prices. Good-car sellers withdraw; only lemons remain. Prices fall further; eventually the market collapses.' }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Insurance market</strong>: high-risk individuals are more likely to seek insurance but do not reveal their risk level; insurers offer average premiums; low-risk individuals opt out; only high-risk remain — a "market for lemons" in insurance.' }, { text: '<strong>Labour market</strong>: employers cannot perfectly assess worker quality before hiring; they offer average wages; highly productive workers seek employers who can screen them better.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Moral Hazard (Post-Contract Problem)', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Moral Hazard', text: '<strong>Moral hazard</strong> occurs <em>after</em> a contract is agreed, when one party changes their behaviour because they face fewer consequences — they are now insulated from risk.<br/><br/>Example: once insured, a person may take <strong>less care</strong> (drive recklessly, leave a laptop unattended) because the cost of loss falls on the insurer, not themselves.' }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Solutions to Asymmetric Information', level: 2 }, terms: [] },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Signalling</strong>: the better-informed party reveals quality (e.g. educational qualifications signal worker productivity; warranties signal product quality).' }, { text: '<strong>Screening</strong>: the less-informed party gathers information (e.g. medical tests before insurance; credit checks before loans).' }, { text: '<strong>Regulation</strong>: compulsory disclosure requirements (e.g. annual accounts, product labelling).' }, { text: '<strong>Co-payments and deductibles</strong>: in insurance, requiring individuals to bear part of the loss reduces moral hazard.' }] }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Asymmetric information causes market failure. Adverse selection (pre-contract) arises when a party hides risk at the time of agreement. Moral hazard (post-contract) arises when protection reduces incentives to avoid risk. Solutions: signalling, screening, regulation, co-payments.' }, terms: [] },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Asymmetric info → adverse selection (pre-contract hidden info) and moral hazard (post-contract behaviour change).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What is asymmetric information and why does it cause market failure?', answer: 'One party has more information than the other. This leads to mispriced goods, wrong quantities, or market collapse because rational decision-making breaks down.' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'Explain adverse selection using the used car market example.', answer: 'Sellers know car quality; buyers don\'t. Buyers offer average prices. Good-car sellers withdraw. Only lemons remain, causing the market to unravel.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'What is moral hazard? Give an example.', answer: 'Post-contract behaviour change when risk is transferred (e.g. insured driver taking less care). The insured party no longer bears the full cost of bad outcomes.' },
      { id: 'cue-4', blockId: 'h-4', prompt: 'How does signalling help reduce adverse selection?', answer: 'The better-informed party reveals credible quality information (e.g. warranties, qualifications), helping the less-informed party make better decisions.' },
    ]
  },
  evidence: [],
  mentions: []
};
