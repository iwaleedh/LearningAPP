export const note_chemistry_5_17_1 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-econfig',
      data: {
        text: 'Write electronic configurations for first-row transition metals; understand exceptions (Cr, Cu); apply the aufbau principle when forming ions, losing 4s electrons first.'
      }
    },
    {
      type: 'heading',
      id: 'h-aufbau-principle',
      data: { text: 'Aufbau Principle and d-Block Filling', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-aufbau-intro',
      data: {
        text: 'The aufbau principle states that electrons fill orbitals in order of increasing energy. For the first transition series (Period 4), electrons enter the 3d sub-shell after the 4s² is filled. However, the 3d and 4s orbitals have very similar energies, leading to interesting patterns. The general configuration for transition metals is [Ar] 3d<sup>x</sup> 4s², where x ranges from 1 to 10 as we move from Sc to Zn.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-orbital-energy',
      data: {
        text: 'Although 4s fills before 3d in the neutral atom, the 3d and 4s orbitals remain energetically similar. This proximity is crucial: it allows the 3d electrons to participate in bonding, and it explains why filling patterns can deviate from strict aufbau predictions. The 4s orbital extends further from the nucleus, making it easier to remove during ion formation.'
      }
    },
    {
      type: 'heading',
      id: 'h-standard-configs',
      data: { text: 'Standard Configurations: Sc to Ni', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-standard-pattern',
      data: {
        text: 'Most transition metals follow the expected pattern of filling 3d orbitals one by one while maintaining 4s²:' +
        '<br/>Sc ([Ar] 3d¹ 4s²) → Ti ([Ar] 3d² 4s²) → V ([Ar] 3d³ 4s²) → Cr* ([Ar] 3d⁵ 4s¹) → Mn ([Ar] 3d⁵ 4s²) → Fe ([Ar] 3d⁶ 4s²) → Co ([Ar] 3d⁷ 4s²) → Ni ([Ar] 3d⁸ 4s²)' +
        '<br/>*Chromium is an exception (see below).'
      }
    },
    {
      type: 'callout',
      id: 'callout-half-filled-stability',
      data: {
        style: 'key',
        title: 'Half-Filled d-Orbital Stability',
        text: 'Half-filled sub-shells (d⁵) and fully-filled sub-shells (d¹⁰, s², p⁶) are extra stable due to electron-electron repulsion considerations. This extra stability causes anomalies in electron configuration filling.'
      }
    },
    {
      type: 'heading',
      id: 'h-chromium-exception',
      data: { text: 'Chromium Exception: [Ar] 3d⁵ 4s¹', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-chromium-reason',
      data: {
        text: 'Chromium (Cr, Z = 24): Expected configuration would be [Ar] 3d⁴ 4s², but the actual configuration is [Ar] 3d⁵ 4s¹. This occurs because a half-filled d sub-shell (3d⁵) is exceptionally stable. The atom achieves this by promoting one 4s electron to the 3d orbital, sacrificing the stability of a filled 4s² pair to achieve the very high stability of d⁵. This is energetically favourable overall.'
      }
    },
    {
      type: 'heading',
      id: 'h-copper-exception',
      data: { text: 'Copper Exception: [Ar] 3d¹⁰ 4s¹', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-copper-reason',
      data: {
        text: 'Copper (Cu, Z = 29): Expected configuration would be [Ar] 3d⁹ 4s², but the actual configuration is [Ar] 3d¹⁰ 4s¹. Similar to chromium, copper achieves a fully-filled d sub-shell (3d¹⁰) by promoting one 4s electron to 3d. A completely filled d-orbital is highly stable, and this configuration is more favourable than the expected [Ar] 3d⁹ 4s² configuration. Cu exhibits +1 and +2 oxidation states, with +2 being more common.'
      }
    },
    {
      type: 'heading',
      id: 'h-ion-formation',
      data: { text: 'Forming Transition Metal Ions: The 4s Rule', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-4s-removal-principle',
      data: {
        text: 'When transition metals form cations, the 4s electrons are ALWAYS removed first, before any 3d electrons are lost. This occurs because the 4s orbital is further from the nucleus and experiences greater shielding, making 4s electrons easier to remove. Even though d-electrons occupy lower energy orbitals (n = 3), the ionisation energy for 4s is lower due to shielding effects.'
      }
    },
    {
      type: 'callout',
      id: 'callout-ion-rule',
      data: {
        style: 'tip',
        title: 'Ion Formation Rule',
        text: 'Remove 4s electrons FIRST, then 3d electrons. Example: Fe ([Ar] 3d⁶ 4s²) loses 2×4s → Fe²⁺ ([Ar] 3d⁶); loses 4s² + one 3d → Fe³⁺ ([Ar] 3d⁵).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-worked-iron',
      data: {
        text: '<strong>Worked Example:</strong> Iron (Fe, Z = 26)<br/>' +
        'Neutral: [Ar] 3d⁶ 4s²<br/>' +
        'Fe²⁺: Remove 2 × 4s electrons → [Ar] 3d⁶<br/>' +
        'Fe³⁺: Remove 2 × 4s + 1 × 3d → [Ar] 3d⁵<br/>' +
        'Note: Fe³⁺ has the half-filled 3d⁵ configuration, giving it extra stability.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-worked-copper-ion',
      data: {
        text: '<strong>Worked Example:</strong> Copper (Cu, Z = 29)<br/>' +
        'Neutral: [Ar] 3d¹⁰ 4s¹<br/>' +
        'Cu⁺: Remove 1 × 4s → [Ar] 3d¹⁰ (very stable, fully-filled d)<br/>' +
        'Cu²⁺: Remove 4s¹ + one 3d → [Ar] 3d⁹ (more common, but less stable than Cu⁺)<br/>' +
        'Both oxidation states exist; Cu⁺ is actually more stable due to the full d¹⁰ shell.'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-econfig',
      data: {
        items: [
          { text: 'Standard transition metals fill 3d before 4s (aufbau)', checked: false },
          { text: 'Cr is [Ar] 3d⁵ 4s¹ (half-filled d stability)', checked: false },
          { text: 'Cu is [Ar] 3d¹⁰ 4s¹ (fully-filled d stability)', checked: false },
          { text: 'When forming cations, always remove 4s electrons first', checked: false },
          { text: 'Fe²⁺ is [Ar] 3d⁶ and Fe³⁺ is [Ar] 3d⁵', checked: false }
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
        text: 'Understand: Transition metals lose 4s electrons before 3d when forming ions (4s fills first but empties first). Cr and Cu have anomalous configurations due to half/full d-subshell stability.\n\nApply: Write the electron configurations of Fe, Fe²⁺, and Fe³⁺. Explain which electrons are removed first.\n\nAnalyze: Why is Cr [Ar] 3d⁵4s¹ instead of [Ar] 3d⁴4s²? Relate to exchange energy stabilisation.\n\nEvaluate: "4s fills before 3d but empties before 3d." This seems contradictory. Resolve this apparent paradox.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-econfig',
      data: {
        text: 'Transition metals typically have [Ar] 3d<sup>x</sup> 4s² configurations, following aufbau filling. Chromium and copper are exceptions, achieving half-filled (d⁵) and fully-filled (d¹⁰) d-orbitals respectively due to their extra stability. When forming ions, 4s electrons are always removed first, before 3d electrons. This rule explains why Fe²⁺ is [Ar] 3d⁶ and Fe³⁺ is [Ar] 3d⁵.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-aufbau-principle',
        prompt: 'State the general electron configuration pattern for first-row transition metals.'
      },
      {
        id: 'cue-2',
        blockId: 'h-chromium-exception',
        prompt: 'What is the electron configuration of chromium and why is it an exception?'
      },
      {
        id: 'cue-3',
        blockId: 'h-copper-exception',
        prompt: 'Write the electron configuration of copper and explain why it differs from aufbau predictions.'
      },
      {
        id: 'cue-4',
        blockId: 'h-ion-formation',
        prompt: 'Explain the rule for removing electrons when forming transition metal cations.'
      },
      {
        id: 'cue-5',
        blockId: 'p-worked-iron',
        prompt: 'Write the electron configurations of Fe, Fe²⁺, and Fe³⁺.'
      }
    ],
    summaryText: 'Transition metals: [Ar] 3d<sup>x</sup> 4s². Exceptions: Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) for d-orbital stability. When forming cations, remove 4s electrons first. Fe²⁺ = [Ar] 3d⁶; Fe³⁺ = [Ar] 3d⁵.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Aufbau Principle and Orbital Energies',
      detail: 'The 4s and 3d orbitals have similar energies in transition metals, explaining both the filling order and the stability of exceptions.',
      year: '2023',
      source: 'A-Level Chemistry Textbook',
      tags: ['electronic-configuration', 'orbital-theory']
    }
  ]
};
