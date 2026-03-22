export const note_economics_3_17_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the regulatory framework for supplier and worker protection and evaluate the economic effects of consumer and employment protection legislation.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Supplier and Worker Protection', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Consumer / Supplier Protection', level: 2 } },
    { id: 'list-consumer', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Consumer Rights Act 2015</strong>: goods must be of satisfactory quality, fit for purpose, as described. Right to repair, replacement or refund.' }, { text: '<strong>Trading Standards</strong>: enforces consumer law, investigates fraud and unsafe products.' }, { text: '<strong>Competition Act 1998</strong>: prohibits anti-competitive practices harmful to consumers (cartels, price-fixing).' }, { text: '<strong>Advertising Standards Authority (ASA)</strong>: regulates misleading advertising — addresses information failure in markets.' }, { text: '<strong>Financial Conduct Authority (FCA)</strong>: protects financial service consumers from mis-selling, fraud and exploitation.' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'Worker Protection', level: 2 } },
    { id: 'list-worker', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Health and Safety at Work Act 1974 (HSWA)</strong>: employers must ensure safe working conditions; enforced by Health and Safety Executive (HSE).' }, { text: '<strong>Equality Act 2010</strong>: prohibits discrimination on grounds of age, sex, race, religion, disability, sexual orientation.' }, { text: '<strong>National Living Wage (NLW)</strong>: minimum wage floor prevents exploitation of workers, especially in low-skill monopsonistic labour markets.' }, { text: '<strong>Employment Rights Act 1996</strong>: protects against unfair dismissal, guarantees redundancy rights, sick pay entitlements.' }, { text: '<strong>Working Time Directive</strong>: max 48 hours/week (opt-out allowed in UK), paid holiday entitlement (28 days including bank holidays).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Evaluation', text: '<strong>Benefits:</strong> prevents exploitation, addresses information failures, reduces harm to vulnerable groups.<br/><strong>Costs:</strong> compliance costs for firms, may reduce labour flexibility, small firms disproportionately burdened, may deter hiring.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Consumer protection: Consumer Rights Act, ASA, FCA, Trading Standards — address information failure and market power. Worker protection: HSWA, Equality Act, NLW, unfair dismissal rights — prevent exploitation and address labour market failures.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Regulation for supplier and worker protection does not automatically reduce efficiency \u2014 it may internalise externalities or reduce information failures. Argue whether efficiency improves or worsens based on the specific regulation and market context."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Intervention protecting suppliers (like guaranteed minimum prices) or workers (health and safety laws) limits monopsonist exploitation. A classic counter-argument is that overly strict worker protection might discourage firms from hiring."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Consumer protections: Consumer Rights Act, FCA, ASA, Trading Standards. Worker protections: Health & Safety, NLW, Equality Act, 48-hr work week. All address information failure, exploitation, or market power.',
    cues: [
      { id: 'cue-1', blockId: 'list-worker', prompt: 'Give three examples of worker protection legislation in the UK.', answer: 'Health and Safety at Work Act 1974 (HSE enforcement of safe conditions), Equality Act 2010 (prohibits discrimination), National Living Wage (prevents wage exploitation), Employment Rights Act 1996 (unfair dismissal, redundancy), Working Time Directive (48-hour week, 28 days holiday).' },
    ]
  },
  evidence: [], mentions: []
};
