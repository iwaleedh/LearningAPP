export const note_chemistry_5_17_7 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-catalysis',
      data: {
        text: 'Understand heterogeneous and homogeneous catalysis by transition metals; explain how variable oxidation states enable catalytic cycles; apply catalysis concepts to industrial and laboratory examples.'
      }
    },
    {
      type: 'heading',
      id: 'h-catalysis-intro',
      data: { text: 'Transition Metal Catalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-catalysis-def',
      data: {
        text: 'A <strong>catalyst</strong> is a substance that increases the rate of a reaction without being permanently chemically changed. Catalysts work by providing an alternative reaction pathway with a lower activation energy. Transition metals are exceptionally good catalysts because of their <strong>variable oxidation states</strong>. The ability to easily shift between different oxidation states allows transition metals to accept electrons from reactants, activate them, and then transfer the electrons to products—a process that would be very slow or impossible without the catalyst.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-catalytic-cycle',
      data: {
        text: 'The transition metal participates in a <strong>catalytic cycle</strong>: the metal is oxidised (accepts electrons) in one step, then reduced (loses electrons) in a subsequent step, returning to its original oxidation state. Over many cycles, the metal catalyst facilitates the conversion of reactants to products without being consumed. The variable oxidation states are the key—they allow the metal to form intermediate complexes with both reactants and products, lowering the overall activation energy.'
      }
    },
    {
      type: 'heading',
      id: 'h-heterogeneous-catalysis',
      data: { text: 'Heterogeneous Catalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-heterogeneous-def',
      data: {
        text: '<strong>Heterogeneous catalysis</strong> occurs when the catalyst is in a different physical state from the reactants. Typically, the catalyst is a solid metal or metal oxide, while reactants are gases or liquids. The reaction occurs on the surface of the catalyst. Reactant molecules adsorb (stick) to the catalyst surface, undergo reaction, and then desorb as products. This process lowers the activation energy compared to the uncatalysed gas-phase reaction.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-heterogeneous-mechanism',
      data: {
        text: '<strong>Heterogeneous catalytic mechanism (general):</strong><br/>' +
        '1. <strong>Adsorption:</strong> Reactants adsorb onto the catalyst surface, forming weak bonds or donor-acceptor interactions<br/>' +
        '2. <strong>Activation:</strong> The bonds in reactants are stretched and weakened by interaction with the catalyst surface<br/>' +
        '3. <strong>Reaction:</strong> Reaction occurs on the surface (e.g., breaking of bonds, rearrangement)<br/>' +
        '4. <strong>Desorption:</strong> Products desorb (leave the surface), regenerating the catalyst<br/>' +
        'The key advantage: the reaction occurs on the surface where reactant concentration is high, and the transition metal\'s variable oxidation states stabilise intermediate complexes.'
      }
    },
    {
      type: 'heading',
      id: 'h-haber-process',
      data: { text: 'Example 1: Haber Process — Iron Catalyst', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-haber-intro',
      data: {
        text: 'The <strong>Haber process</strong> synthesises ammonia from nitrogen and hydrogen: N₂ + 3H₂ ⇌ 2NH₃. This reaction is thermodynamically favourable but kinetically very slow because the N≡N triple bond is extremely strong. Iron metal (with iron(II) and iron(III) oxides as promoters) is used as the catalyst.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-haber-mechanism',
      data: {
        text: '<strong>Catalytic cycle in the Haber process:</strong><br/>' +
        '1. N₂ and H₂ adsorb onto Fe surface<br/>' +
        '2. Fe accepts electrons from H₂: H₂ + Fe → 2H—Fe (with Fe in mixed oxidation states)<br/>' +
        '3. The weakened N≡N bond breaks: N₂ + Fe → N≡Fe and N≡Fe (activation)<br/>' +
        '4. Hydrogen atoms attack nitrogen: N≡Fe + H—Fe → NH₂—Fe and NH—Fe<br/>' +
        '5. NH₃ forms and desorbs from the surface<br/>' +
        '6. Fe is regenerated and ready for the next cycle<br/>' +
        '<strong>Key role of Fe:</strong> Variable oxidation state (0, +2, +3) allows stabilisation of intermediate complexes with N₂ and H radicals.'
      }
    },
    {
      type: 'heading',
      id: 'h-contact-process',
      data: { text: 'Example 2: Contact Process — Vanadium(V) Oxide Catalyst', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-contact-intro',
      data: {
        text: 'The <strong>Contact Process</strong> oxidises sulfur dioxide to sulfur trioxide: 2SO₂ + O₂ ⇌ 2SO₃. Vanadium(V) oxide (V₂O₅) is the catalyst. The reaction is thermodynamically favourable but needs activation.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-contact-mechanism',
      data: {
        text: '<strong>Catalytic cycle in the Contact Process:</strong><br/>' +
        '<strong>Forward step:</strong> SO₂ + V⁵⁺ (in V₂O₅) → SO₃ + V⁴⁺ (reduction of vanadium)<br/>' +
        '<strong>Regeneration step:</strong> V⁴⁺ + ½O₂ → V⁵⁺ (oxidation of vanadium back to +5)<br/>' +
        '<strong>Overall:</strong> 2SO₂ + O₂ → 2SO₃<br/>' +
        '<strong>Key role of V₂O₅:</strong> Variable oxidation state (+4/+5) allows the oxide to oxidise SO₂ in the first step and then be re-oxidised by O₂ in the second step. Without the variable oxidation state, this cycle could not occur.'
      }
    },
    {
      type: 'callout',
      id: 'callout-contact-process',
      data: {
        style: 'worked',
        title: 'V₂O₅ as a True Catalyst',
        text: 'V₂O₅ is produced at the end of the catalytic cycle in the same form as it started. It is not consumed or changed—it simply facilitates electron transfer between SO₂ and O₂. This is the hallmark of true catalysis.'
      }
    },
    {
      type: 'heading',
      id: 'h-catalytic-converters',
      data: { text: 'Example 3: Catalytic Converters — Pt/Pd', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-converter-intro',
      data: {
        text: 'Modern vehicles use <strong>catalytic converters</strong> to reduce toxic emissions from internal combustion engines. The converters contain platinum and palladium catalysts that oxidise carbon monoxide and unburned hydrocarbons to CO₂ and H₂O, and reduce nitrogen oxides to N₂.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-converter-reactions',
      data: {
        text: '<strong>Catalytic converter reactions:</strong><br/>' +
        '• <strong>Oxidation:</strong> 2CO + O₂ → 2CO₂ (Pt catalyst)<br/>' +
        '• <strong>Oxidation:</strong> C_xH_y + O₂ → CO₂ + H₂O (Pt catalyst)<br/>' +
        '• <strong>Reduction:</strong> NO_x + reducing agent → N₂ (Pd catalyst)<br/>' +
        '<strong>Mechanism:</strong> The exhaust gases pass over the hot Pt/Pd catalyst surface. CO and hydrocarbons adsorb and are oxidised to CO₂ and H₂O; NO_x is reduced to N₂. The catalyst is regenerated after each reaction cycle.'
      }
    },
    {
      type: 'heading',
      id: 'h-homogeneous-catalysis',
      data: { text: 'Homogeneous Catalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-homogeneous-def',
      data: {
        text: '<strong>Homogeneous catalysis</strong> occurs when the catalyst is in the same physical state as the reactants. In homogeneous systems, the catalyst is dissolved in the same solvent as the reactants, forming a single phase. The catalyst forms intermediate complexes with reactants, activates them, and releases products—all in solution.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-homogeneous-mechanism',
      data: {
        text: '<strong>Homogeneous catalytic mechanism (general):</strong><br/>' +
        '1. <strong>Complex formation:</strong> Catalyst M forms a complex with reactant R: M + R → MR<br/>' +
        '2. <strong>Activation:</strong> The complex activates R (stretches/weakens bonds): MR (activated)<br/>' +
        '3. <strong>Reaction:</strong> R is transformed (via electron transfer or bond rearrangement)<br/>' +
        '4. <strong>Product release:</strong> Product P is released: MP → M + P<br/>' +
        '5. <strong>Catalyst regeneration:</strong> M is available for the next cycle<br/>' +
        'Advantage over heterogeneous: higher surface area (entire solution) and easy mixing. Disadvantage: catalyst recovery can be difficult.'
      }
    },
    {
      type: 'heading',
      id: 'h-homogeneous-examples',
      data: { text: 'Examples of Homogeneous Catalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-mn-permanganate',
      data: {
        text: '<strong>Example 1: Mn²⁺ catalysing permanganate reactions</strong><br/>' +
        'Permanganate (MnO₄⁻, Mn in +7 oxidation state) can oxidise organic compounds in acidic solution. Mn²⁺ (manganese in +2 oxidation state) acts as a homogeneous catalyst, forming complexes with organic reactants and facilitating electron transfer. The Mn²⁺ cycles between +2 and +3 oxidation states, activating substrates that would react very slowly with permanganate alone.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-fe-s2o8',
      data: {
        text: '<strong>Example 2: Fe²⁺/Fe³⁺ catalysing S₂O₈²⁻/I⁻ reaction</strong><br/>' +
        'Reaction: S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂<br/>' +
        'This reaction is very slow in the absence of catalyst. Fe²⁺ (or Fe³⁺) acts as a homogeneous catalyst:<br/>' +
        '<strong>Step 1:</strong> 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻ (Fe²⁺ is oxidised)<br/>' +
        '<strong>Step 2:</strong> 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂ (Fe³⁺ is reduced)<br/>' +
        '<strong>Overall:</strong> S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂<br/>' +
        '<strong>Catalysis:</strong> Fe²⁺ is oxidised in step 1 and regenerated in step 2. The variable oxidation states (+2/+3) enable the catalytic cycle. Without the catalyst, the reaction is kinetically slow; with catalyst, it is fast.'
      }
    },
    {
      type: 'heading',
      id: 'h-autocatalysis',
      data: { text: 'Autocatalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-autocatalysis-def',
      data: {
        text: '<strong>Autocatalysis</strong> is a special case where a product of the reaction acts as a catalyst for the reaction. The Mn²⁺-catalysed permanganate oxidations are classic examples of autocatalysis: the Mn²⁺ produced during the reaction catalyses further reaction, causing the reaction rate to increase as the reaction proceeds (until one reactant is depleted).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-autocatalysis-pattern',
      data: {
        text: '<strong>Autocatalytic rate pattern:</strong><br/>' +
        '• Initial phase (t = 0 to early): Reaction is slow (little Mn²⁺ present yet)<br/>' +
        '• Middle phase: Reaction accelerates (Mn²⁺ accumulates, catalysis increases)<br/>' +
        '• Late phase: Reaction slows again (reactant depletion dominates)<br/>' +
        'The overall rate profile shows a characteristic S-shaped (sigmoid) curve when plotting product concentration vs time, with a steep middle section where autocatalysis dominates.'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-catalysis',
      data: {
        items: [
          { text: 'Catalyst lowers activation energy without being permanently changed', checked: false },
          { text: 'Variable oxidation states enable transition metal catalysis', checked: false },
          { text: 'Heterogeneous catalysis: catalyst is solid, reactants are gases/liquids', checked: false },
          { text: 'Haber process: Fe catalyst for N₂ + 3H₂ → 2NH₃', checked: false },
          { text: 'Contact process: V₂O₅ catalyst for SO₂ + ½O₂ → SO₃', checked: false },
          { text: 'Homogeneous catalysis: catalyst in same phase as reactants (dissolved)', checked: false },
          { text: 'Fe²⁺/Fe³⁺ catalyses S₂O₈²⁻/I⁻ reaction', checked: false },
          { text: 'Autocatalysis: product acts as catalyst', checked: false }
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
        text: 'Understand: Transition metals catalyse reactions by providing an alternative pathway with lower Eₐ. They do this by using variable oxidation states or providing a surface for adsorption.\n\nApply: Explain how MnO₂ catalyses the decomposition of H₂O₂, showing how Mn cycles between oxidation states.\n\nAnalyze: Compare heterogeneous catalysis (e.g. Fe in Haber process) with homogeneous catalysis (e.g. Fe²⁺/Fe³⁺ in S₂O₈²⁻/I⁻).\n\nEvaluate: Why are transition metal catalysts preferred over main-group catalysts in industry? Consider cost, selectivity, and recyclability.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-catalysis',
      data: {
        text: 'Transition metals catalyse reactions because their variable oxidation states facilitate electron transfer. Heterogeneous catalysis (solid catalyst, gas/liquid reactants): Haber process (Fe, N₂ + 3H₂ → 2NH₃), Contact process (V₂O₅, SO₂ + ½O₂ → SO₃), catalytic converters (Pt/Pd). Homogeneous catalysis (dissolved catalyst): Mn²⁺ in permanganate oxidations, Fe²⁺/Fe³⁺ in S₂O₈²⁻/I⁻ reaction. The catalyst cycles through different oxidation states, forming intermediates with reactants and activating them. Autocatalysis: product (e.g., Mn²⁺) catalyses the reaction, causing acceleration as reaction proceeds. All examples rely on the flexible oxidation states of transition metals.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-catalysis-intro',
        prompt: 'Define a catalyst and explain why transition metals are good catalysts.'
      },
      {
        id: 'cue-2',
        blockId: 'p-catalytic-cycle',
        prompt: 'Describe a catalytic cycle. How do variable oxidation states enable catalysis?'
      },
      {
        id: 'cue-3',
        blockId: 'p-haber-mechanism',
        prompt: 'Describe the catalytic cycle in the Haber process. What is the role of iron?'
      },
      {
        id: 'cue-4',
        blockId: 'p-contact-mechanism',
        prompt: 'Explain how V₂O₅ catalyses the oxidation of SO₂ to SO₃.'
      },
      {
        id: 'cue-5',
        blockId: 'p-fe-s2o8',
        prompt: 'Show the Fe²⁺-catalysed mechanism for S₂O₈²⁻ + 2I⁻ reaction.'
      }
    ],
    summaryText: 'Catalysts lower activation energy; transition metals excel because variable oxidation states enable electron transfer cycles. Heterogeneous: Fe (Haber: N₂ + 3H₂ ⇌ 2NH₃), V₂O₅ (Contact: SO₂ + ½O₂ → SO₃), Pt/Pd (emissions). Homogeneous: Mn²⁺ in MnO₄⁻ reactions, Fe²⁺/Fe³⁺ (S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂). Catalyst cycles through oxidation states, returning unchanged. Autocatalysis: product catalyses reaction.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Industrial Catalysis by Transition Metals',
      detail: 'The Haber process, Contact process, and catalytic converters are industrial-scale applications of transition metal catalysis, essential to modern society. Over 90% of industrial chemical processes employ catalysts.',
      year: '2023',
      source: 'Industrial Chemistry and A-Level Chemistry',
      tags: ['catalysis', 'haber', 'contact-process', 'homogeneous', 'heterogeneous']
    }
  ]
};
