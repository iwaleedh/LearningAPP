export const note_chemistry_5_18_5 = {
  blocks: [
    {
      id: 'obj-phenol-reactivity',
      type: 'objective',
      data: {
        text: 'Explain the enhanced reactivity of phenol and methylbenzene (toluene) towards electrophilic aromatic substitution compared to benzene; understand directing effects (2,4- vs 3,5-) and the role of electron-donating vs electron-withdrawing groups'
      }
    },
    {
      id: 'h-phenol-bromination',
      type: 'heading',
      data: { text: 'Phenol Bromination: Reactivity Without Catalyst', level: 2 }
    },
    {
      id: 'p-phenol-1',
      type: 'paragraph',
      data: {
        text: 'Phenol (C₆H₅OH) reacts with bromine water (Br₂(aq)) immediately at room temperature without a catalyst. A white precipitate forms, which is 2,4,6-tribromophenol (three bromine atoms on the ring). This is in striking contrast to benzene, which does not react with bromine water under the same conditions and requires a Lewis acid catalyst.'
      }
    },
    {
      id: 'eq-phenol-bromination',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>5</sub>OH + 3Br<sub>2</sub> → 2,4,6−(BrO)<sub>3</sub>C<sub>6</sub>H<sub>2</sub>OH + 3HBr (white precipitate)<br />(room temp, water, no catalyst)'
      }
    },
    {
      id: 'p-phenol-2',
      type: 'paragraph',
      data: {
        text: 'The reason for this enhanced reactivity is the electron-donating effect of the hydroxyl group (−OH). Oxygen is more electronegative than carbon, but it has a lone pair that can donate electron density into the aromatic ring via resonance. This increases the electron density on the ring and makes it much more nucleophilic (more π electrons available to attack an electrophile).'
      }
    },
    {
      id: 'callout-oh-activation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydroxyl Group as Electron-Donating',
        text: 'The −OH group has a lone pair on oxygen that resonates into the ring. This pushes electron density onto the carbons, especially at the ortho and para positions. These positions become electron-rich and react readily with electrophiles.'
      }
    },
    {
      id: 'h-directing-effects',
      type: 'heading',
      data: { text: 'Directing Effects: Ortho/Para vs Meta', level: 2 }
    },
    {
      id: 'p-directing-1',
      type: 'paragraph',
      data: {
        text: 'The −OH group is said to be an ortho/para director. This means that incoming electrophiles preferentially attack the ortho and para positions (positions 2,4, and 6 relative to the −OH at position 1). In phenol bromination, all three bromines go into the 2,4,6 positions because these are the most electron-rich. The meta positions (3,5) are less activated.'
      }
    },
    {
      id: 'p-directing-2',
      type: 'paragraph',
      data: {
        text: 'The reason is resonance: the arenium ion intermediate is more stable when the positive charge can be delocalised onto the oxygen atom (via resonance structures). This happens at ortho and para positions but not at meta. Therefore, these positions have lower activation energies and react faster.'
      }
    },
    {
      id: 'callout-directing-mechanism',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Ortho/Para Directors Work',
        text: 'Arenium ion from ortho attack: positive charge can be on carbon α to O, allowing O to donate lone pair and delocalise positive charge. Arenium ion from meta attack: positive charge cannot reach O, so less resonance stabilisation. Ortho/para arenium ions are lower energy → lower activation energy → faster reaction at these positions.'
      }
    },
    {
      id: 'h-methylbenzene-reactivity',
      type: 'heading',
      data: { text: 'Methylbenzene (Toluene) Reactivity', level: 2 }
    },
    {
      id: 'p-methylbenzene-1',
      type: 'paragraph',
      data: {
        text: 'Methylbenzene (toluene, C₆H₅CH₃) is also more reactive than benzene towards electrophilic aromatic substitution. The methyl group (−CH₃) is an alkyl group, which is electron-donating through an inductive effect (electron-pushing via σ bonds). This increases electron density on the ring, making it more nucleophilic. However, the activation is weaker than with −OH because alkyl donation is weaker than resonance donation from −OH.'
      }
    },
    {
      id: 'p-methylbenzene-2',
      type: 'paragraph',
      data: {
        text: 'Like the hydroxyl group, the methyl group is an ortho/para director. Incoming electrophiles preferentially attack positions 2, 4, and 6 (ortho and para to the methyl group). The inductive donation of the methyl group is strongest at the ortho and para carbons, and resonance effects in the arenium ion further stabilise these positions.'
      }
    },
    {
      id: 'h-arenium-substituted',
      type: 'heading',
      data: { text: 'Drawing the Arenium Ion in Substituted Rings', level: 3 }
    },
    {
      id: 'p-arenium-rule',
      type: 'paragraph',
      data: {
        text: 'When writing the mechanism for EAS into a substituted benzene ring, the mechanism is identical to that for benzene itself — but you must draw the arenium ion intermediate correctly. The key rule: the partial delocalisation (shown by alternating double bonds) covers ALL ring carbons EXCEPT the sp³ carbon at which the electrophile bonded. The existing substituent (e.g. CH₃) remains attached throughout and does not participate in the mechanism.'
      }
    },
    {
      id: 'svg-toluene-nitration-mech',
      type: 'svg',
      data: {
        caption: 'Stage 1: Nitration of methylbenzene at C4 (para position). Arenium ion shows partial delocalisation (double bonds at C2=C3 and C5=C6, + at C1) over five carbons — NOT over sp³ C4.',
        svg: `<svg viewBox="0 0 540 315" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-tol" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ca-tol" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.bnd{stroke:#111827;stroke-width:1.5;fill:none}.arc{stroke:#6b7280;stroke-width:1.5;fill:none;stroke-dasharray:4,3}.atm{fill:#111827;font-weight:bold;font-size:14px}.lbl{fill:#374151;font-size:12px}.pos{fill:#1e40af;font-weight:bold;font-size:17px}.sp3c{fill:#dc2626;font-size:11px}.dim{fill:#6b7280;font-size:11px}</style></defs><text x="108" y="22" class="lbl" text-anchor="middle">Methylbenzene (aromatic)</text><text x="390" y="22" class="lbl" text-anchor="middle">Arenium Ion &#x2014; Stage 1 product</text><path d="M 108 105 L 151 130 L 151 180 L 108 205 L 65 180 L 65 130 Z" class="bnd"/><circle cx="108" cy="155" r="30" class="arc"/><path d="M 108 105 L 108 78" class="bnd"/><text x="108" y="71" class="atm" text-anchor="middle">CH&#x2083;</text><text x="120" y="103" class="dim" text-anchor="start">1</text><text x="108" y="222" class="dim" text-anchor="middle">4</text><text x="108" y="248" fill="#ef4444" font-weight="bold" font-size="14" text-anchor="middle">NO&#x2082;&#x207a;</text><path d="M 104 206 Q 78 228 97 245" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-tol)"/><text x="108" y="270" class="dim" text-anchor="middle">Attacks C4 (para to CH&#x2083;)</text><text x="108" y="283" class="dim" text-anchor="middle">conc. HNO&#x2083;/H&#x2082;SO&#x2084;, 25&#xb0;C</text><path d="M 221 153 L 261 153" stroke="#374151" stroke-width="2" marker-end="url(#ca-tol)"/><path d="M 390 105 L 433 130 L 433 180 L 390 205 L 347 180 L 347 130 Z" class="bnd"/><path d="M 428 133 L 428 177" class="bnd"/><path d="M 352 133 L 352 177" class="bnd"/><text x="399" y="106" class="pos" text-anchor="start">+</text><path d="M 390 105 L 390 78" class="bnd"/><text x="390" y="71" class="atm" text-anchor="middle">CH&#x2083;</text><path d="M 390 205 L 413 220" class="bnd"/><text x="420" y="227" class="atm" text-anchor="start">H</text><path d="M 390 205 L 390 238" class="bnd"/><text x="390" y="252" class="atm" text-anchor="middle">NO&#x2082;</text><text x="365" y="210" class="sp3c" text-anchor="end">sp&#xb3;</text><text x="390" y="276" class="dim" text-anchor="middle">+ delocalised over C1, C2, C3, C5, C6</text><text x="390" y="290" fill="#dc2626" font-size="11" text-anchor="middle">NOT over sp&#xb3; C4</text><text x="390" y="305" class="dim" text-anchor="middle">CH&#x2083; at C1 stabilises adjacent + charge</text></svg>`
      }
    },
    {
      id: 'callout-toluene-arenium-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Arenium Ion Drawing Rule',
        text: 'In the arenium ion intermediate for a substituted ring, show partial delocalisation over ALL ring carbons EXCEPT the one where the electrophile bonded (which is sp³). The existing substituent (CH₃, NO₂, etc.) is simply carried through. For 4-position nitration of methylbenzene: + is shared over C1, C2, C3, C5, and C6. One resonance form places + at C1 (the CH₃ carbon) — this shows how CH₃ inductively stabilises the cation and why methylbenzene is more reactive than benzene.'
      }
    },
    {
      id: 'callout-ring-vs-sidechain',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Ring EAS vs Side-Chain Substitution — Conditions Control the Product',
        text: 'Methylbenzene + Cl₂: Two very different reactions are possible.\n\n• Dark conditions + AlCl₃ (or FeCl₃) catalyst → Electrophilic substitution INTO THE RING → gives 2-chloromethylbenzene and 4-chloromethylbenzene (ionic, EAS mechanism).\n\n• UV light, no catalyst → Free radical substitution on the CH₃ SIDE CHAIN → gives (chloromethyl)benzene, C₆H₅CH₂Cl (radical chain mechanism).\n\nConditions completely change both the mechanism and the position of substitution.'
      }
    },
    {
      id: 'h-nitro-deactivation',
      type: 'heading',
      data: { text: 'Nitro Group: Electron-Withdrawing and Meta-Directing', level: 2 }
    },
    {
      id: 'p-nitro-1',
      type: 'paragraph',
      data: {
        text: 'The nitro group (−NO₂) is electron-withdrawing. It has a C=O double bond with oxygen (highly electronegative), which pulls electron density away from the ring. This deactivates the ring towards further electrophilic substitution. Nitrobenzene is therefore much less reactive than benzene towards EAS.'
      }
    },
    {
      id: 'p-nitro-2',
      type: 'paragraph',
      data: {
        text: 'Furthermore, the nitro group is a meta director. If substitution does occur on nitrobenzene, electrophiles attack the meta positions (positions 3,5) much more readily than ortho or para. This is because the arenium ion from meta attack avoids placing the positive charge ortho to the strongly electron-withdrawing −NO₂ group. Placing the charge ortho or para to an electron-withdrawing group is destabilising.'
      }
    },
    {
      id: 'callout-deactivating',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Deactivating Groups vs Activating Groups',
        text: 'Activating groups (−OH, −CH₃): electron-donating, increase ring electron density, ortho/para directors. Deactivating groups (−NO₂, −CN): electron-withdrawing, decrease ring electron density, meta directors. Nitrobenzene reacts much more slowly than benzene; methylbenzene reacts much faster.'
      }
    },
    {
      id: 'h-reactivity-order',
      type: 'heading',
      data: { text: 'Reactivity Order for EAS', level: 3 }
    },
    {
      id: 'p-reactivity-order',
      type: 'paragraph',
      data: {
        text: 'For electrophilic aromatic substitution, reactivity increases with increasing electron density on the ring. The approximate order is: phenol >> toluene >> benzene >> nitrobenzene. Phenol is far more reactive (no catalyst needed for bromination); nitrobenzene is far less reactive (very difficult to substitute further). Benzene is intermediate and requires a Lewis acid catalyst for most reactions.'
      }
    },
    {
      id: 'checklist-directing',
      type: 'checklist',
      data: {
        items: [
          { text: 'Phenol reacts with Br₂(aq) at room temp without catalyst', checked: false },
          { text: 'Hydroxyl group (−OH) is electron-donating and ortho/para director', checked: false },
          { text: 'Methyl group (−CH₃) is electron-donating and ortho/para director', checked: false },
          { text: 'Nitro group (−NO₂) is electron-withdrawing and meta director', checked: false },
          { text: 'Reactivity order: phenol >> toluene >> benzene >> nitrobenzene', checked: false },
          { text: 'Arenium ion rule: partial delocalisation over ALL ring carbons EXCEPT the sp³ carbon where E⁺ bonded', checked: false },
          { text: 'Methylbenzene + Cl₂: dark + AlCl₃ → ring EAS (2-/4-chloromethylbenzene); UV light only → side-chain free radical', checked: false }
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
        text: 'Understand: Electron-donating groups (−OH, −CH₃) activate the ring and direct to 2,4-positions. They increase electron density, making electrophilic attack easier.\n\nApply: Predict the major product of nitrating methylbenzene. Explain using directing effects.\n\nAnalyze: Why does phenol react with Br₂(aq) without a catalyst, while benzene requires AlBr₃?\n\nEvaluate: The −NO₂ group is deactivating and meta-directing. Explain why the order of electrophilic substitutions matters in multi-step synthesis.'
      },
      terms: []
    },
    {
      id: 'summary-phenol',
      type: 'summary',
      data: {
        text: 'Phenol is much more reactive than benzene towards electrophilic aromatic substitution because the hydroxyl group donates electron density into the ring via resonance. Phenol reacts with Br₂(aq) immediately at room temperature to form 2,4,6-tribromophenol. The −OH group is an ortho/para director: the arenium ion is more stable when the positive charge can be delocalised onto oxygen. Methylbenzene (toluene) is also more reactive than benzene but less reactive than phenol, and is also ortho/para directing. In contrast, electron-withdrawing groups like −NO₂ deactivate the ring and are meta directors. Reactivity increases with electron density: phenol >> toluene >> benzene >> nitrobenzene. KEY EXAM SKILL: When drawing the arenium ion for a substituted ring (e.g. methylbenzene nitration at C4), show partial delocalisation over ALL ring carbons EXCEPT the sp³ carbon where the electrophile bonded. For methylbenzene + Cl₂: dark conditions + AlCl₃ → ring EAS (ionic, 2-/4-chloromethylbenzene); UV light, no catalyst → side-chain free radical substitution → (chloromethyl)benzene.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-phenol-1', prompt: 'Why does phenol react with Br₂(aq) at room temp without catalyst, unlike benzene?' },
      { id: 'cue-2', blockId: 'p-directing-1', prompt: 'What are ortho/para directing effects, and why does −OH direct to positions 2,4,6?' },
      { id: 'cue-3', blockId: 'p-methylbenzene-1', prompt: 'How does a methyl group activate the benzene ring towards EAS?' },
      { id: 'cue-4', blockId: 'p-nitro-1', prompt: 'Why is the nitro group (−NO₂) a deactivating group? How does it affect reactivity?' },
      { id: 'cue-5', blockId: 'svg-toluene-nitration-mech', prompt: 'Draw the arenium ion when NO₂⁺ attacks C4 of methylbenzene. Which carbons show partial delocalisation? Where is the + charge? What is special about C4?' }
    ],
    summaryText: 'Phenol: −OH donates electrons via resonance → ring highly electron-rich → reacts with Br₂(aq) at room temp (no catalyst). Forms 2,4,6-tribromophenol. −OH is ortho/para director (arenium ion stabilised by O lone pair donation at these positions). Methylbenzene: −CH₃ donates via inductive effect → more reactive than benzene, ortho/para director. Nitrobenzene: −NO₂ withdraws electrons → less reactive than benzene, meta director. Reactivity: phenol >> toluene >> benzene >> nitrobenzene. ARENIUM ION RULE: partial delocalisation over all carbons EXCEPT sp³ C where E⁺ bonded. CONDITION DISTINCTION: methylbenzene + Cl₂ → ring EAS (dark, AlCl₃) OR side-chain radical substitution (UV light).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Phenol and methylbenzene EAS reactivity and directing effects',
      detail: 'Bromination of phenol with Br₂(aq), activation and deactivation by substituents, ortho/para vs meta directing effects, arenium ion stability',
      year: '2023',
      source: 'chemguide.co.uk — phenol and toluene EAS reactivity',
      tags: ['phenol', 'toluene', 'directing', 'activation', 'deactivation', 'aromaticity']
    },
    {
      id: 'ev-2',
      title: 'EAS into substituted benzene rings — drawing the arenium ion correctly',
      detail: 'CH₃ group directs to 2,4-positions; NO₂ directs to 3-position. Mechanism identical to unsubstituted benzene but arenium ion must show delocalisation over all carbons EXCEPT the sp³ one. Condition controls ring vs side-chain substitution in methylbenzene + Cl₂ (dark + AlCl₃ → ring EAS; UV light → radical side-chain).',
      year: '2023',
      source: 'chemguide.co.uk/mechanisms/elsub/toluene.html',
      tags: ['methylbenzene', 'toluene', 'arenium ion', 'directing', 'ring substitution', 'side-chain', 'sp3']
    }
  ]
};
