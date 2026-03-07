/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 5
 * "Free radical substitution of alkanes"
 * Source: Pearson Edexcel IAL Chemistry — Section 4B.4
 */
export const note_chemistry_1_4_5 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe the mechanism of free radical substitution (FRS) of alkanes with halogens. Write equations for all three stages: initiation, propagation and termination. Know the role of UV light.' },
      terms: []
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Overview: Free Radical Substitution', level: 2 },
      terms: []
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: { text: '<strong>Alkanes</strong> are generally unreactive, but they do react with halogens in the presence of UV light. In free radical substitution, a hydrogen atom on the alkane is replaced by a halogen atom.<br/><br/>Example: CH₄ + Cl₂ → CH₃Cl + HCl (chloromethane + hydrogen chloride)' },
      terms: ['Free radical substitution', 'Free radical', 'Homolytic fission']
    },
    {
      id: 'h-stages',
      type: 'heading',
      data: { text: 'Three Stages of FRS: Cl₂/CH₄ example', level: 2 },
      terms: []
    },
    {
      id: 'callout-init',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stage 1: Initiation',
        text: 'UV light (photons) causes <strong>homolytic fission</strong> of the Cl–Cl bond. Each chlorine atom receives ONE electron from the shared pair, forming two chlorine radicals.<br/><br/>Cl₂ → 2Cl• (UV light required)<br/><br/><strong>Homolytic fission:</strong> one electron goes to each atom. The movement of a <em>single</em> electron is represented by a <strong>half-curly arrow</strong> (fish-hook arrow).<br/>A <strong>free radical</strong> is a species with an unpaired electron, represented by •.'
      },
      terms: ['Initiation', 'Homolytic fission', 'Free radical', 'Half-curly arrow']
    },
    {
      id: 'callout-prop',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stage 2: Propagation (two steps, repeated)',
        text: 'The chain is sustained by two alternating steps that regenerate radicals:<br/><br/><strong>Step 1:</strong> Cl• + CH₄ → HCl + CH₃•<br/>A chlorine radical abstracts a hydrogen atom from methane, forming HCl and a methyl radical.<br/><br/><strong>Step 2:</strong> CH₃• + Cl₂ → CH₃Cl + Cl•<br/>The methyl radical reacts with Cl₂, forming chloromethane and regenerating a chlorine radical — which can then repeat Step 1.<br/><br/>These steps are exothermic and continue until termination.'
      },
      terms: ['Propagation']
    },
    {
      id: 'callout-term',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stage 3: Termination',
        text: 'The chain ends when any two radicals combine (no new radicals produced):<br/><br/>Cl• + Cl• → Cl₂<br/>CH₃• + CH₃• → C₂H₆<br/>CH₃• + Cl• → CH₃Cl<br/><br/>Note: termination can produce unexpected by-products such as ethane (C₂H₆).'
      },
      terms: ['Termination']
    },
    {
      id: 'callout-exam-trick',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Trick: Propagation vs Termination Yield',
        text: '<strong>Why is much more chloromethane formed in propagation than termination?</strong><br/><br/>In propagation, a molecule of chloromethane is produced <em>alongside a new radical</em>. This means the cycle can repeat continuously, producing lots of product. In termination, two radicals react but <em>the reaction cycle stops</em> because no new radicals are formed. Therefore, the vast majority of the product comes from the repeating propagation steps.'
      },
      terms: []
    },
    {
      id: 'callout-further',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Further substitution / mixture of products',
        text: 'The reaction produces a mixture of products because substitution can continue:<br/>CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄<br/>(chloromethane → dichloromethane → trichloromethane → tetrachloromethane)<br/><br/>This limits the usefulness of FRS as a synthetic method for pure products.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-init', prompt: 'Describe the initiation step of free radical substitution of methane. What does a half-curly arrow represent?' },
      { id: 'c2', blockId: 'callout-prop', prompt: 'Write the two propagation steps for the chlorination of methane.' },
      { id: 'c3', blockId: 'callout-term', prompt: 'Write three possible termination steps for the chlorination of methane. What unexpected product is commonly formed?' },
      { id: 'c4', blockId: 'callout-exam-trick', prompt: 'Explain why much more chloromethane is formed during the propagation steps than during the termination step.' },
      { id: 'c5', blockId: 'callout-further', prompt: 'Why does free radical substitution give a mixture of products?' }
    ],
    summaryText: 'FRS = substitution of H by halogen in alkane, requires UV light. Initiation: UV causes homolytic fission of Cl₂ → 2Cl• (shown with half-curly arrows). Propagation: Cl• abstracts H → HCl + CH₃•; then CH₃• + Cl₂ → CH₃Cl + Cl• (repeating cycle = main source of product). Termination: two radicals combine, stopping the chain. Mixture of products forms due to further substitution.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_5;