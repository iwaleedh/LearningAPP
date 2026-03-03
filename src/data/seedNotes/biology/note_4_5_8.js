export const note_biology_4_5_8 = {
  blocks: [
    {
      id: 'obj-atp',
      type: 'objective',
      data: {
        text: 'Understand ATP structure, hydrolysis, synthesis mechanisms (substrate-level and oxidative phosphorylation), and why ATP is the universal energy currency of cells.',
      },
    },
    {
      id: 'h-atp-structure',
      type: 'heading',
      data: {
        text: 'ATP Structure',
        level: 2,
      },
    },
    {
      id: 'p-atp-structure',
      type: 'paragraph',
      data: {
        text: 'Adenosine triphosphate (ATP) is a nucleotide consisting of three main components: adenine (a nitrogenous base), ribose (a five-carbon sugar), and three phosphate groups linked by high-energy phosphodiester bonds. The adenine and ribose together form adenosine; the three phosphate groups are attached in sequence to the 5\' carbon of the ribose. The bonds between phosphate groups are particularly rich in energy, making ATP a highly energetic molecule.',
      },
    },
    {
      id: 'list-atp-parts',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Adenine: a purine nitrogenous base (double-ring structure), essential for base-pairing in DNA and RNA.',
          },
          {
            text: 'Ribose: a five-carbon sugar with hydroxyl groups; the 5\' phosphate linkage is critical for ATP function.',
          },
          {
            text: 'Phosphate groups: three high-energy phosphate groups (PO₄³⁻); the outermost two bonds are particularly labile.',
          },
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Phosphodiester Bonds',
        text: 'The bonds between phosphate groups in ATP contain high potential energy due to electrostatic repulsion between the negatively charged phosphate groups. Breaking these bonds releases energy that cells harness for biosynthesis, active transport, and muscle contraction.',
      },
    },
    {
      id: 'h-atp-hydrolysis',
      type: 'heading',
      data: {
        text: 'ATP Hydrolysis',
        level: 2,
      },
    },
    {
      id: 'p-atp-hydrolysis',
      type: 'paragraph',
      data: {
        text: 'ATP hydrolysis is the breaking of the terminal phosphodiester bond by the addition of water. This reaction releases energy and produces adenosine diphosphate (ADP) and an inorganic phosphate ion (Pᵢ). The reaction is spontaneous and exergonic under standard cellular conditions (ΔG°\' ≈ −30.5 kJ/mol).',
      },
    },
    {
      id: 'eq-atp-hydrolysis',
      type: 'equation',
      data: {
        html: 'ATP + H<sub>2</sub>O → ADP + Pi + energy (~30.5 kJ/mol)',
        caption: 'Hydrolysis of ATP',
      },
    },
    {
      id: 'p-hydrolysis-reversible',
      type: 'paragraph',
      data: {
        text: 'Although ATP hydrolysis is thermodynamically favourable, it is slow in the absence of catalysts. Enzymes called ATPases catalyse the hydrolysis and couple the energy release to the performance of cellular work. The energy released is not captured in a single step but rather dissipates as heat; however, the coupling of hydrolysis to other reactions allows the cell to harness this energy for biosynthesis, ion pumping, and mechanical work.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Energy Coupling',
        text: 'Cells do not store energy by rapidly hydrolyzing ATP and capturing the energy. Instead, they perform "coupled reactions" in which ATP hydrolysis drives an otherwise unfavourable reaction forward. For example, in the Calvin cycle, ATP hydrolysis provides energy for RuBP regeneration.',
      },
    },
    {
      id: 'h-atp-synthesis',
      type: 'heading',
      data: {
        text: 'ATP Synthesis Mechanisms',
        level: 2,
      },
    },
    {
      id: 'p-atp-synthesis-intro',
      type: 'paragraph',
      data: {
        text: 'Cells synthesise ATP through two main mechanisms: substrate-level phosphorylation and oxidative phosphorylation. Both couple energy release from fuel molecules or electrochemical gradients to the phosphorylation of ADP.',
      },
    },
    {
      id: 'h-substrate-level',
      type: 'heading',
      data: {
        text: 'Substrate-Level Phosphorylation',
        level: 3,
      },
    },
    {
      id: 'p-substrate-level',
      type: 'paragraph',
      data: {
        text: 'Substrate-level phosphorylation occurs when a high-energy phosphate group from a substrate is transferred directly to ADP by an enzyme. This mechanism occurs in two key pathways: glycolysis (pyruvate kinase transfers the phosphate from phosphoenolpyruvate to ADP, producing ATP and pyruvate) and the Krebs cycle (succinyl-CoA synthetase catalyses GTP formation, which can be used to phosphorylate ADP). The energy for phosphorylation comes from breaking the high-energy bond in the substrate, not from an external electron transport chain.',
      },
    },
    {
      id: 'list-substrate-level-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Glycolysis, step 10: 1,3-bisphosphoglycerate → 3-phosphoglycerate; phosphate transfer produces 1 ATP per glucose.',
          },
          {
            text: 'Glycolysis, step 12: phosphoenolpyruvate → pyruvate; phosphate transfer produces 1 ATP per glucose.',
          },
          {
            text: 'Krebs cycle: succinyl-CoA → succinate; energy released produces GTP (equivalent to ATP).',
          },
        ],
      },
    },
    {
      id: 'h-oxidative-phosphorylation',
      type: 'heading',
      data: {
        text: 'Oxidative Phosphorylation',
        level: 3,
      },
    },
    {
      id: 'p-oxidative-phosphorylation',
      type: 'paragraph',
      data: {
        text: 'Oxidative phosphorylation couples the transfer of electrons along an electron transport chain to the phosphorylation of ADP to ATP. Electrons released from fuel molecules (glucose, fatty acids) are passed through a series of carriers (NAD⁺/NADH, FAD/FADH₂) to the electron transport chain embedded in mitochondrial inner membrane (in aerobic respiration) or thylakoid membrane (in photosynthesis). As electrons move through the chain, they lose energy in discrete steps. This energy is used to pump protons across the membrane, creating an electrochemical gradient. ATP synthase harnesses this gradient, using the proton flow to phosphorylate ADP.',
      },
    },
    {
      id: 'p-chemiosmotic-mechanism',
      type: 'paragraph',
      data: {
        text: 'The chemiosmotic mechanism is the process by which oxidative phosphorylation works. Protons are pumped into the matrix (mitochondria) or lumen (thylakoid) creating a high proton concentration gradient (ΔpH). This gradient represents stored potential energy. ATP synthase is a channel protein with a catalytic head; as protons flow back down the gradient through the channel, the rotating mechanism in ATP synthase phosphorylates ADP to ATP. This elegant mechanism directly couples electron transport energy to ATP synthesis.',
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'ATP Yield Calculation',
        text: 'One glucose molecule yields: Glycolysis: 2 ATP (substrate-level). Krebs cycle: 2 GTP (≈2 ATP; substrate-level). Oxidative phosphorylation: NADH from glycolysis yields ~2.5 ATP; NADH from Krebs (×3) yields ~7.5 ATP; FADH₂ from Krebs yields ~1.25 ATP; other FADH₂ yields ~1.25 ATP. Total ≈ 2 + 2 + 2.5 + 7.5 + 1.25 + 1.25 = ~30–32 ATP per glucose (modern estimates; older estimates were ~38).',
      },
    },
    {
      id: 'h-why-atp',
      type: 'heading',
      data: {
        text: 'Why ATP and Not Glucose Directly?',
        level: 2,
      },
    },
    {
      id: 'p-why-atp',
      type: 'paragraph',
      data: {
        text: 'Cells use ATP as the immediate energy currency rather than using glucose or other fuel molecules directly. There are several advantages to this strategy:',
      },
    },
    {
      id: 'list-atp-advantages',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Rapid energy release: ATP hydrolysis releases energy in a single, fast reaction. Glucose oxidation is gradual, occurring across multiple enzymatic steps. ATP allows cells to meet sudden energy demands quickly.',
          },
          {
            text: 'Energy matching: The energy released by ATP hydrolysis (~30.5 kJ/mol) is matched to the typical energetic cost of cellular processes (protein synthesis costs ~50 kJ/mol, meaning one ATP provides half the energy needed, preventing wasteful energy dissipation).',
          },
          {
            text: 'Versatility: ATP is recognised by hundreds of different enzymes and can be used for diverse processes (biosynthesis, active transport, muscle contraction, bioluminescence).',
          },
          {
            text: 'Regulation: ATP levels and the ATP/ADP ratio directly regulate glycolysis and other pathways through allosteric inhibition and activation, allowing metabolic control.',
          },
          {
            text: 'Energetic efficiency: Using small, readily available ATP molecules allows cells to avoid carrying around large fuel molecules that require complex breakdown pathways.',
          },
        ],
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'ATP is adenine + ribose + 3 phosphate groups. Its high-energy phosphodiester bonds release ~30.5 kJ/mol upon hydrolysis: ATP + H₂O → ADP + Pᵢ. Cells synthesise ATP via substrate-level phosphorylation (direct phosphate transfer in glycolysis/Krebs) and oxidative phosphorylation (electron transport chain pumps protons, ATP synthase harnesses the gradient). ATP is preferred over glucose because it provides rapid, controlled energy release matched to cellular demand, is recognised by many enzymes, and allows metabolic regulation via ATP/ADP ratios.',
        apply: 'Calculate the number of ATP molecules needed to synthesise one glucose from CO₂ in the Calvin cycle, knowing that 3 ATP are needed per CO₂ fixed. Compare this to the ATP yield from glucose oxidation.',
        analyze: 'Explain how the proton gradient across the thylakoid or mitochondrial membrane represents stored energy, and how ATP synthase converts this electrochemical potential into chemical potential in ATP bonds.',
        evaluate: 'Argue whether cells would be more efficient using a single energy currency (ATP) or multiple currencies matched to different processes. Consider the regulatory implications of each approach.',
      },
      terms: [],
    },
    {
      id: 'checklist-atp',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can name the three components of ATP and describe their structure', checked: false },
          { text: 'I can write the equation for ATP hydrolysis and state the energy released', checked: false },
          { text: 'I understand substrate-level phosphorylation and can name examples', checked: false },
          { text: 'I understand oxidative phosphorylation and the chemiosmotic mechanism', checked: false },
          { text: 'I can explain why ATP is used instead of glucose as the energy currency', checked: false },
          { text: 'I know the ATP yield from one glucose molecule in aerobic respiration', checked: false },
        ],
      },
    },
    {
      id: 'summary-atp',
      type: 'summary',
      data: {
        text: 'ATP consists of adenine, ribose, and three phosphate groups. Hydrolysis releases ~30.5 kJ/mol: ATP + H₂O → ADP + Pᵢ. ATP is synthesised via substrate-level phosphorylation (direct phosphate transfer in glycolysis/Krebs) yielding 4 ATP per glucose, and oxidative phosphorylation (electron transport chain coupled to ATP synthase via proton gradient) yielding ~26–28 ATP per glucose. ATP is preferred over glucose as the energy currency because it provides rapid, controlled energy matched to cellular demand, is versatile (recognised by many enzymes), and allows metabolic regulation.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-atp-structure',
        prompt: 'Name the three components of ATP. Which bonds are high-energy and why?',
      },
      {
        id: 'cue-2',
        blockId: 'eq-atp-hydrolysis',
        prompt: 'Write the equation for ATP hydrolysis. How much energy is released?',
      },
      {
        id: 'cue-3',
        blockId: 'h-substrate-level',
        prompt: 'Define substrate-level phosphorylation. Name two pathways where it occurs.',
      },
      {
        id: 'cue-4',
        blockId: 'h-oxidative-phosphorylation',
        prompt: 'Explain how oxidative phosphorylation couples electron transport to ATP synthesis.',
      },
      {
        id: 'cue-5',
        blockId: 'list-atp-advantages',
        prompt: 'Why do cells use ATP as the energy currency instead of using glucose directly? Name three advantages.',
      },
    ],
    summaryText: 'ATP = adenine + ribose + 3 phosphate groups. Hydrolysis: ATP + H₂O → ADP + Pᵢ, releases ~30.5 kJ/mol. Substrate-level phosphorylation: direct phosphate transfer (glycolysis, Krebs cycle) produces 4 ATP/glucose. Oxidative phosphorylation: electron transport chain pumps protons, ATP synthase harnesses gradient to produce ~26–28 ATP/glucose. ATP is preferred because it provides rapid, matched energy release, is versatile (hundreds of enzymes recognised), allows metabolic regulation, and avoids carrying large fuel molecules.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'ATP Energy Content',
      detail: 'ΔG°\' for ATP hydrolysis under standard conditions is −30.5 kJ/mol. Under cellular conditions (not at equilibrium), the actual ΔG can be more negative, typically −50 to −65 kJ/mol, making ATP synthesis and hydrolysis thermodynamically very favourable.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['biochemistry', 'energetics'],
    },
    {
      id: 'ev-2',
      title: 'Chemiosmotic Hypothesis',
      detail: 'Peter Mitchell received the Nobel Prize in Chemistry (1978) for proposing the chemiosmotic mechanism of ATP synthesis, which is now universally accepted.',
      year: '2023',
      source: 'Nobel Prize history',
      tags: ['history', 'ATP synthesis'],
    },
  ],
};
