/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 4
 * "Markovnikov's rule and carbocation stability"
 * Source: Pearson Edexcel IAL Chemistry — Section 5B.2
 */
export const note_chemistry_1_5_4 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Apply Markovnikov\'s rule to predict the major product of addition reactions to asymmetric alkenes. Explain the rule in terms of carbocation stability.' },
      terms: []
    },
    {
      id: 'h-markov',
      type: 'heading',
      data: { text: 'Markovnikov\'s Rule', level: 2 },
      terms: []
    },
    {
      id: 'callout-markov',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Markovnikov\'s Rule',
        text: 'When an asymmetric alkene reacts with a hydrogen halide HX (e.g. HBr), the hydrogen atom attaches to the <strong>less substituted</strong> carbon (the one with more hydrogens), and the halogen attaches to the <strong>more substituted</strong> carbon (the one with fewer hydrogens).<br/><br/>In other words: "hydrogen goes to the carbon with more hydrogens."<br/><br/><strong>Example:</strong><br/>Propene (CH₂=CHCH₃) + HBr:<br/>Major product: <strong>2-bromopropane</strong> (Br on C-2) — NOT 1-bromopropane'
      },
      terms: ['Markovnikov\'s rule', 'Major product', 'Minor product']
    },
    {
      id: 'h-stab',
      type: 'heading',
      data: { text: 'Explaining Markovnikov via Carbocation Stability', level: 2 },
      terms: []
    },
    {
      id: 'p-stab',
      type: 'paragraph',
      data: { text: 'The major product of unsymmetrical additions is formed via the more stable carbocation intermediate. Alkyl groups are <strong>electron-donating</strong>, which means they reduce the positive charge on the carbon they are attached to. The more you can spread the charge around, the more stable the ion becomes.' },
      terms: ['Carbocation stability']
    },
    {
      id: 'callout-induct-vs-hyper',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why do alkyl groups stabilise the positive charge?',
        text: 'There are two ways to describe how alkyl groups help spread out the positive charge:<br/><br/><strong>1. Positive Inductive Effect (Traditional):</strong> Alkyl groups "push" electrons away from themselves towards the positively charged carbon. The alkyl groups become slightly positive (δ+) and decrease the full positive charge on the central carbon.<br/><br/><strong>2. Hyperconjugation (Accurate):</strong> Involves temporary orbital interaction. Because the C-C single bonds are constantly rotating, empty p-orbitals on the positive carbon can briefly align and interact with the σ (sigma) bond electrons of adjacent C-H bonds in the alkyl group. This shares the electron density and helps spread the positive charge over a wider area.'
      },
      terms: ['Positive inductive effect', 'Hyperconjugation']
    },
    {
      id: 'p-energy-ladder',
      type: 'paragraph',
      data: { text: '<strong>Energetic stability:</strong> Secondary carbocations are lower down an energy "ladder" than primary ones. It takes less activation energy to form a secondary intermediate compared to a primary intermediate, making the secondary pathway much faster and deciding the major product.' },
      terms: ['Activation energy']
    },
    {
      id: 'table-stab',
      type: 'comparisonTable',
      data: {
        caption: 'Order of carbocation stability',
        headers: ['Carbocation type', 'Structure', 'Stability', 'Example'],
        rows: [
          ['Tertiary (3°)', 'C⁺ bonded to 3 alkyl groups', 'Most stable', 'C(CH₃)₃⁺'],
          ['Secondary (2°)', 'C⁺ bonded to 2 alkyl groups', 'Intermediate', 'CH₃CH⁺CH₃'],
          ['Primary (1°)', 'C⁺ bonded to 1 alkyl group', 'Least stable', 'CH₃CH₂⁺'],
          ['Methyl', 'CH₃⁺ (no alkyl groups)', 'Very unstable', '—']
        ]
      },
      terms: ['Tertiary carbocation', 'Secondary carbocation', 'Primary carbocation']
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Propene + HBr — which product and why?',
        text: 'CH₂=CH–CH₃: The C=C carbons are C1 (CH₂=) and C2 (=CHCH₃).<br/><br/>Path A: H⁺ adds to C2 → carbocation on C1 (primary: CH₂⁺CH₂CH₃) → 1-bromopropane (minor)<br/>Path B: H⁺ adds to C1 → carbocation on C2 (secondary: CH₃CH⁺CH₃) → 2-bromopropane (major)<br/><br/>Secondary carbocation (Path B) is more stable → lower activation energy → <strong>major product is 2-bromopropane</strong>.'
      },
      terms: []
    },
    {
      id: 'callout-worked-h2so4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Propene + Concentrated H₂SO₄',
        text: 'The exact same rule applies when propene reacts with <strong>cold concentrated</strong> sulphuric acid (H₂SO₄).<br/><br/>The electrophile is the δ+ hydrogen in the H–O bond of H-OSO₃H. It adds to the C1 carbon (which has more hydrogens) to form the more stable <strong>secondary carbocation</strong> on C2.<br/><br/>The remaining hydrogensulphate ion (HSO₄⁻) then attaches to C2, forming <strong>isopropyl hydrogensulphate</strong> [CH₃CH(OSO₃H)CH₃] as the major product rather than propyl hydrogensulphate.'
      },
      terms: ['Isopropyl hydrogensulphate']
    },
    {
      id: 'callout-sym-reagents',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Symmetrical Reagents (e.g. Br₂) + Unsymmetrical Alkenes',
        text: 'What happens if you add a symmetrical reagent like <strong>pure liquid bromine (Br₂)</strong> to an unsymmetrical alkene like propene?<br/><br/>The reaction proceeds exactly identically to symmetrical alkenes (via an <strong>induced dipole</strong> mechanism). The double bond breaks, and a bromine atom becomes attached to <em>each</em> carbon, forming <strong>1,2-dibromopropane</strong>.<br/><br/>Because you are adding the <em>same</em> atom (Br) to both carbons, there is no major/minor product distinction and <strong>Markovnikov\'s rule does not apply</strong>.'
      },
      terms: ['Symmetrical reagent']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-markov', prompt: 'State Markovnikov\'s rule in your own words. Use propene + HBr as an example.' },
      { id: 'c2', blockId: 'table-stab', prompt: 'State the order of stability of carbocations from most to least stable.' },
      { id: 'c2_a', blockId: 'callout-induct-vs-hyper', prompt: 'Explain the positive inductive effect and how it contributes to carbocation stability.' },
      { id: 'c3', blockId: 'callout-worked', prompt: 'Explain why 2-bromopropane is the major product when propene reacts with HBr, using carbocation stability.' },
      { id: 'c3_a', blockId: 'callout-exam-tip', prompt: 'In an exam, what is the best way to explain why a specific product is formed in the addition of HX to an unsymmetrical alkene?' },
      { id: 'c4', blockId: 'callout-worked-h2so4', prompt: 'What is the major product of the reaction between propene and cold concentrated sulphuric acid, and why?' },
      { id: 'c5', blockId: 'callout-sym-reagents', prompt: 'Does Markovnikov\'s rule apply to the addition of bromine to propene? Explain why.' }
    ],
    summaryText: 'Markovnikov\'s rule: H adds to the carbon with more H attached (so X adds to the more substituted C). This forms the more stable (more substituted) carbocation intermediate. Stability order: tertiary > secondary > primary > methyl. Alkyl groups are electron-donating, stabilising the carbocation via positive inductive effect and hyperconjugation. Major product forms via the more stable carbocation pathway (lower activation energy).',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Markovnikov Addition with HBr and H2SO4',
      detail: 'The electrophilic addition mechanism requires the formation of the most stable carbocation intermediate. Both HBr and H2SO4 form the secondary carbocation when reacting with propene, giving 2-bromopropane and isopropyl hydrogensulphate respectively.',
      source: 'https://www.chemguide.co.uk/mechanisms/eladd/unsymprob.html'
    }
  ]
};
export default note_chemistry_1_5_4;