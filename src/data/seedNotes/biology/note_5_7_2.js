/**
 * WBI15 — Topic 7.2: Link Reaction and Acetyl CoA
 * Pyruvate dehydrogenase, CoA carrier, CO₂ & NADH production
 */

export const note_biology_5_7_2 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the link reaction: the conversion of pyruvate to acetyl CoA catalysed by pyruvate dehydrogenase complex, the role of CoA as a carrier, and the products produced per glucose molecule.',
      },
    },
    {
      id: 'h-link',
      type: 'heading',
      data: { text: 'The Link Reaction: Pyruvate → Acetyl CoA', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'The link reaction (also called the transition reaction) occurs in the mitochondrial matrix and bridges glycolysis to the Krebs cycle. Each pyruvate molecule (3-carbon) is oxidatively decarboxylated by the pyruvate dehydrogenase complex to form acetyl CoA (2-carbon acetyl group) and CO₂. Electrons released in this oxidation are transferred to NAD⁺, forming NADH.',
      },
    },
    {
      id: 'h-equation',
      type: 'heading',
      data: { text: 'Link Reaction Equation', level: 3 },
    },
    {
      id: 'eq-link',
      type: 'equation',
      data: {
        html: 'Pyruvate (3C) + CoA + NAD<sup>+</sup> → Acetyl CoA (2C) + CO<sub>2</sub> + NADH + H<sup>+</sup>',
        caption: 'Single link reaction (one pyruvate)',
      },
    },
    {
      id: 'p-twice',
      type: 'paragraph',
      data: {
        text: 'Since one glucose molecule produces two pyruvate molecules in glycolysis, the link reaction occurs twice per glucose molecule. Per glucose: 2 CO₂ released, 2 NADH produced, 2 Acetyl CoA formed.',
      },
    },
    {
      id: 'h-enzyme',
      type: 'heading',
      data: { text: 'The Pyruvate Dehydrogenase Complex', level: 3 },
    },
    {
      id: 'p-complex',
      type: 'paragraph',
      data: {
        text: 'Pyruvate dehydrogenase is a large, multi-enzyme complex located in the inner mitochondrial matrix. It contains three sub-enzymes (E1, E2, E3) and requires several cofactors: thiamine pyrophosphate (TPP), lipoic acid, FAD, NAD⁺, and Coenzyme A. The complexity of this enzyme reflects the importance of the reaction and allows for sophisticated regulation.',
      },
    },
    {
      id: 'callout-complex',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Multi-Enzyme Complex',
        text: 'The pyruvate dehydrogenase complex is one of the largest protein complexes in the cell, similar in size to the ribosome. This organization allows the three sub-enzymes to work in close proximity, passing intermediates directly between them without releasing them to the solution (substrate channelling). This increases efficiency and prevents loss of reactive intermediates.',
      },
    },
    {
      id: 'h-coa',
      type: 'heading',
      data: { text: 'Coenzyme A (CoA) as a Carrier', level: 3 },
    },
    {
      id: 'p-coa-role',
      type: 'paragraph',
      data: {
        text: 'Coenzyme A is a large, complex molecule derived from the vitamin pantothenic acid (vitamin B₅). The acetyl group produced by pyruvate dehydrogenase is attached to CoA via a thioester bond to form Acetyl-CoA. This high-energy bond makes Acetyl-CoA a "central hub" of metabolism: it can feed into the Krebs cycle for energy production, or be used for biosynthesis of fatty acids, cholesterol, and amino acids. The CoA moiety keeps the acetyl group activated and prevents it from diffusing away.',
      },
    },
    {
      id: 'callout-hub',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Acetyl-CoA: The Central Hub',
        text: 'Acetyl-CoA is not only a product of pyruvate oxidation but also a key starting point for many biosynthetic pathways. If energy is abundant, cells reduce Acetyl-CoA entry into the Krebs cycle and instead use it for fatty acid and cholesterol synthesis. If energy is needed, Acetyl-CoA is oxidised in the Krebs cycle.',
      },
    },
    {
      id: 'h-irreversible',
      type: 'heading',
      data: { text: 'Irreversibility of the Link Reaction', level: 3 },
    },
    {
      id: 'p-irreversible',
      type: 'paragraph',
      data: {
        text: 'The link reaction is essentially irreversible under physiological conditions (ΔG° is highly negative). This has important implications: (1) once pyruvate is converted to Acetyl-CoA, the carbon atoms cannot be reformed into glucose (gluconeogenesis can regenerate glucose from oxaloacetate, not Acetyl-CoA); (2) the reaction is a committed step in carbohydrate catabolism; (3) regulation of this step directly controls the rate of glucose oxidation.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The link reaction is catalysed by pyruvate dehydrogenase, a complex multi-enzyme machine in the mitochondrial matrix. Pyruvate is oxidatively decarboxylated to Acetyl-CoA, with CO₂ release and NADH production. The reaction occurs twice per glucose and is irreversible, committing the carbon atoms to oxidation.',
        apply: 'If pyruvate dehydrogenase is inhibited, describe what would happen to: (a) NAD⁺ regeneration; (b) pyruvate accumulation; (c) Krebs cycle activity; (d) ATP production.',
        analyze: 'Why is the link reaction located in the mitochondrial matrix and not the cytoplasm? What would be the consequence if it occurred in the cytoplasm?',
        evaluate: 'The link reaction is irreversible, meaning Acetyl-CoA cannot be converted back to pyruvate. What does this tell you about the metabolic fate of carbohydrate carbon atoms after this step?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Write the equation for the link reaction and state inputs and outputs', checked: false },
          { text: 'Identify pyruvate dehydrogenase and describe its structure', checked: false },
          { text: 'Explain the role of CoA in the link reaction and as a metabolic hub', checked: false },
          { text: 'State how many times the link reaction occurs per glucose', checked: false },
          { text: 'Explain why the link reaction is irreversible and its consequences', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'The link reaction converts pyruvate → Acetyl-CoA in the mitochondrial matrix, catalysed by pyruvate dehydrogenase complex. Per pyruvate: 1 Acetyl-CoA, 1 CO₂, 1 NADH. Per glucose: 2 Acetyl-CoA, 2 CO₂, 2 NADH. CoA acts as a high-energy carrier. The reaction is irreversible and is tightly regulated by energy status. Acetyl-CoA is a central metabolic hub feeding into catabolism and biosynthesis.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-link',
        prompt: 'Write the equation for the link reaction and state the cofactors required.',
      },
      {
        id: 'cue-2',
        blockId: 'p-twice',
        prompt: 'How many times does the link reaction occur per glucose molecule? What is the total output?',
      },
      {
        id: 'cue-3',
        blockId: 'p-complex',
        prompt: 'Describe the pyruvate dehydrogenase complex and explain why it is such a large, multi-enzyme structure.',
      },
      {
        id: 'cue-4',
        blockId: 'p-coa-role',
        prompt: 'What is CoA and why is the acetyl group attached to CoA rather than released as free acetate?',
      },
      {
        id: 'cue-5',
        blockId: 'p-irreversible',
        prompt: 'Why is the link reaction irreversible, and what does this mean for gluconeogenesis?',
      },
    ],
    summaryText:
      'Link reaction: pyruvate → Acetyl-CoA in mitochondrial matrix (pyruvate dehydrogenase complex). Per pyruvate: 1 Acetyl-CoA, 1 CO₂, 1 NADH. Per glucose (2×): 2 Acetyl-CoA, 2 CO₂, 2 NADH. CoA is a high-energy carrier from vitamin B₅. Irreversible step. Acetyl-CoA is central metabolic hub for oxidation and biosynthesis.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Pyruvate dehydrogenase regulation',
      detail: 'Regulated by phosphorylation (inhibitory, via kinase) and dephosphorylation (activating, via phosphatase)',
      year: '—',
      source: 'Biochemistry',
      tags: ['regulation'],
    },
  ],
};
