export const note_chemistry_5_17_0 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-dblock',
      data: {
        text: 'Understand the definition of d-block elements and transition metals, and why Sc, Zn, and Cu have special classifications.'
      }
    },
    {
      type: 'heading',
      id: 'h-dblock-elements',
      data: { text: 'd-Block Elements', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-dblock-def',
      data: {
        text: 'The d-block comprises elements in Groups 3–12 of the periodic table, spanning Period 4 (Sc to Zn) through Period 7. These elements have their highest energy electrons occupying d-orbitals. The first transition series includes scandium (Sc, Z = 21) to zinc (Zn, Z = 30), with electron configurations filling the 3d sub-shell while the 4s orbital remains occupied.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-dblock-valence',
      data: {
        text: 'D-block elements characteristically have partially or completely filled d-orbitals, which leads to their distinctive chemistry. Unlike s and p-block elements, d-orbitals have sufficient energy proximity to the valence shell, allowing them to participate readily in bonding and ion formation. This accessibility of d-electrons is responsible for the unique properties observed in transition metals.'
      }
    },
    {
      type: 'heading',
      id: 'h-transition-metal-definition',
      data: { text: 'Transition Metal Definition', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-tm-def',
      data: {
        text: 'A transition metal is defined as an element whose atom or ion has an incomplete d sub-shell. This definition is the key to understanding which d-block elements are classified as "true" transition metals. The presence of unpaired or partially filled d-electrons, whether in the neutral atom or any of its ions, is the defining characteristic.'
      }
    },
    {
      type: 'callout',
      id: 'callout-tm-definition',
      data: {
        style: 'key',
        title: 'Official Definition',
        text: 'A transition metal: element whose atom or ion contains one or more unpaired electrons in d-orbitals. Alternatively: an element that can form a stable ion with an incomplete d sub-shell.'
      }
    },
    {
      type: 'heading',
      id: 'h-scandium-zinc-exceptions',
      data: { text: 'Sc and Zn: Why They Aren\'t Transition Metals', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-scandium-analysis',
      data: {
        text: 'Scandium (Sc): Neutral atom configuration is [Ar] 3d¹ 4s². When Sc forms its most stable ion Sc³⁺, both 4s and 3d electrons are removed, leaving Sc³⁺ with configuration [Ar] (empty 3d sub-shell). Since the stable ion has no d-electrons, scandium does NOT satisfy the definition of a transition metal—neither the atom nor its characteristic ion has an incomplete d sub-shell.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-zinc-analysis',
      data: {
        text: 'Zinc (Zn): Neutral atom configuration is [Ar] 3d¹⁰ 4s². When Zn forms its stable ion Zn²⁺ by losing the two 4s electrons, the result is [Ar] 3d¹⁰ (fully filled d sub-shell, not incomplete). A completely filled d-sub-shell does not contribute to transition metal chemistry—no d-orbitals are available for bonding or colour formation. Therefore, zinc is NOT classified as a transition metal.'
      }
    },
    {
      type: 'callout',
      id: 'callout-sc-zn',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often assume all d-block elements are transition metals. In fact: Sc³⁺ has empty d (not a TM), and Zn²⁺ has full d¹⁰ (not a TM). Only 21 of the 30 d-block elements qualify as true transition metals.'
      }
    },
    {
      type: 'heading',
      id: 'h-copper-is-tm',
      data: { text: 'Why Copper IS a Transition Metal', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-copper-analysis',
      data: {
        text: 'Copper (Cu): Neutral atom configuration is [Ar] 3d¹⁰ 4s¹ (note the single 4s electron due to d¹⁰ stability). When Cu forms Cu²⁺ (losing both 3d and 4s electrons would leave Cu³⁺, which is unstable), the most stable oxidation state Cu²⁺ has configuration [Ar] 3d⁹. With nine d-electrons, the 3d sub-shell is INCOMPLETE. Therefore, Cu²⁺ contains an incomplete d sub-shell, satisfying the definition—copper IS a transition metal because its stable ion has unpaired d-electrons available for bonding and colour formation.'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-sc-cu-zn',
      data: {
        items: [
          { text: 'Scandium: [Ar] 3d¹ atom → Sc³⁺ [Ar] empty d (NOT a TM)', checked: false },
          { text: 'Copper: [Ar] 3d¹⁰ 4s¹ atom → Cu²⁺ [Ar] 3d⁹ incomplete d (IS a TM)', checked: false },
          { text: 'Zinc: [Ar] 3d¹⁰ 4s² atom → Zn²⁺ [Ar] 3d¹⁰ full d (NOT a TM)', checked: false },
          { text: 'Remember: definition requires INCOMPLETE d sub-shell in atom OR ion', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Transition metals are d-block elements that form at least one ion with a partially filled d subshell. Sc³⁺ (d⁰) and Zn²⁺ (d¹⁰) are exceptions — not true transition metals.\n\nApply: Explain why Zn is not a transition metal despite being in the d-block.\n\nAnalyze: Why do transition metals typically have higher densities, melting points, and hardness than s-block metals?\n\nEvaluate: The definition of "transition metal" varies between textbooks. Assess whether Cu (which only forms Cu²⁺ commonly) should be classified as one.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-dblock',
      data: {
        text: 'The d-block spans Groups 3–12. Transition metals are defined as elements with incomplete d sub-shells in their atoms or ions. Scandium (loses all d-electrons) and zinc (has full d¹⁰) are d-block but NOT transition metals. Copper, despite having full d¹⁰ in the atom, IS a transition metal because Cu²⁺ has 3d⁹ (incomplete). This distinction is crucial for understanding transition metal chemistry.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-transition-metal-definition',
        prompt: 'Define a transition metal.'
      },
      {
        id: 'cue-2',
        blockId: 'p-scandium-analysis',
        prompt: 'Why is scandium NOT classified as a transition metal?'
      },
      {
        id: 'cue-3',
        blockId: 'p-zinc-analysis',
        prompt: 'Explain why zinc is not a transition metal despite being in the d-block.'
      },
      {
        id: 'cue-4',
        blockId: 'p-copper-analysis',
        prompt: 'Why is copper a transition metal? What is the electron configuration of Cu²⁺?'
      },
      {
        id: 'cue-5',
        blockId: 'h-dblock-elements',
        prompt: 'What is the first transition series and which elements does it include?'
      }
    ],
    summaryText: 'Transition metals are d-block elements with incomplete d sub-shells in their atoms or ions. Sc is not a TM (Sc³⁺ empty d), Zn is not a TM (Zn²⁺ full d¹⁰), but Cu is a TM (Cu²⁺ has 3d⁹).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'IUPAC Classification',
      detail: 'The transition metal classification based on incomplete d sub-shells is used internationally in periodic table organization.',
      year: '2023',
      source: 'IUPAC Periodic Table',
      tags: ['definition', 'periodic-table']
    }
  ]
};
