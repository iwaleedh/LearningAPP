export const note_chemistry_5_18_2 = {
  blocks: [
    {
      id: 'obj-arene-reactivity',
      type: 'objective',
      data: {
        text: 'Contrast the reactivity of arenes (benzene) with alkenes: explain why benzene undergoes electrophilic substitution while alkenes undergo addition, compare reaction mechanisms and rates, and interpret why bromine water does not decolourise with benzene'
      }
    },
    {
      id: 'h-alkene-reactivity',
      type: 'heading',
      data: { text: 'Alkene Reactivity: Addition Reactions', level: 2 }
    },
    {
      id: 'p-alkene-1',
      type: 'paragraph',
      data: {
        text: 'Alkenes contain a C=C double bond with localised π electrons between two carbons. The π electrons are electron-rich and easily attacked by electrophiles. When an electrophile (like Br⁺ from Br₂) approaches, the π electrons form a bond with the electrophile, and the double bond breaks. A new σ bond replaces the π bond, and the second electrophile attacks the carbocation intermediate. The result is an addition product with the original C=C broken and two new groups attached.'
      }
    },
    {
      id: 'eq-alkene-addition',
      type: 'equation',
      data: {
        html: 'C=C + Br<sub>2</sub> → C−Br<sub>|</sub>Br (dark, room temperature, no catalyst needed)'
      }
    },
    {
      id: 'p-alkene-2',
      type: 'paragraph',
      data: {
        text: 'Alkene + bromine reactions occur rapidly in the dark at room temperature because the addition is energetically favourable: the π bond energy is released, and a new σ bond is formed (σ bonds are stronger). Bromine water changes colour from orange/brown to colourless (or pale yellow) as the Br₂ is consumed.'
      }
    },
    {
      id: 'h-benzene-reactivity',
      type: 'heading',
      data: { text: 'Benzene Reactivity: Substitution, Not Addition', level: 2 }
    },
    {
      id: 'p-benzene-1',
      type: 'paragraph',
      data: {
        text: 'Benzene, despite having π electrons, does NOT react with bromine water at room temperature. No colour change occurs. This remarkable behaviour reflects benzene\'s aromaticity: the delocalised π system is highly stable, and breaking it via addition would be energetically unfavourable. The delocalisation energy (~150 kJ/mol) makes the ring resistant to addition.'
      }
    },
    {
      id: 'callout-no-addition',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Benzene Does NOT Decolourise Bromine Water',
        text: 'Benzene + Br₂(aq) → NO REACTION at room temp. This contrasts sharply with alkenes. The aromatic ring is too stable to undergo addition. A Lewis acid catalyst (AlBr₃ or FeBr₃) is needed to activate Br₂ for substitution.'
      }
    },
    {
      id: 'p-benzene-2',
      type: 'paragraph',
      data: {
        text: 'Instead, benzene undergoes electrophilic substitution. An electrophile attacks the ring, breaking a C−H bond (not the C=C π system). A hydrogen atom leaves as H⁺, and the aromatic ring is regenerated. This preserves the delocalised π system and its stabilisation energy. Substitution is energetically less costly than addition.'
      }
    },
    {
      id: 'eq-benzene-substitution',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + Br<sub>2</sub> + AlBr<sub>3</sub> → C<sub>6</sub>H<sub>5</sub>Br + HBr (needs catalyst, mild conditions)'
      }
    },
    {
      id: 'h-mechanism-comparison',
      type: 'heading',
      data: { text: 'Mechanism Comparison: Addition vs Substitution', level: 2 }
    },
    {
      id: 'p-mechanism',
      type: 'paragraph',
      data: {
        text: 'Alkene addition: π bond breaks, electrophile attacks → carbocation intermediate → nucleophile attacks → C−C remains broken. Benzene substitution: aromatic ring attacked by activated electrophile → arenium ion intermediate (delocalisation disrupted momentarily) → H⁺ lost from ring → aromatic ring regenerated. The key difference is that benzene substitution regenerates the aromatic system at the end, preserving the stabilisation energy.'
      }
    },
    { type: 'svg', id: 'svg-alkene-vs-benzene', data: { caption: 'Electrophilic Addition vs Substitution', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" width="100%" height="auto"><defs><marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;font-size:14px;fill:#1e293b;}.bond{stroke:#1e293b;stroke-width:2;fill:none;}.plus{fill:#ef4444;font-weight:bold;font-size:16px;}.hl{font-weight:bold;fill:#ef4444;}</style><text x="150" y="30" text-anchor="middle" font-weight="bold">Alkene (Addition)</text><path class="bond" d="M 120 60 L 180 60 M 120 65 L 180 65" /><text x="150" y="55" text-anchor="middle" font-size="12px">E-N attack</text><path class="bond" d="M 210 62 L 240 62" marker-end="url(#arr2)" /><path class="bond" d="M 270 60 L 300 60" /><text x="270" y="50" text-anchor="middle">E</text><path class="bond" d="M 270 55 L 270 60" /><text x="300" y="50" class="plus" text-anchor="middle">+</text><path class="bond" d="M 330 62 L 360 62" marker-end="url(#arr2)" /><path class="bond" d="M 390 60 L 420 60" /><text x="390" y="50" text-anchor="middle">E</text><path class="bond" d="M 390 55 L 390 60" /><text x="420" y="50" text-anchor="middle">Nu</text><path class="bond" d="M 420 55 L 420 60" /><text x="150" y="90" text-anchor="middle" font-size="12px" fill="#64748b">π bond broken permanently</text><line x1="50" y1="110" x2="550" y2="110" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4" /><text x="150" y="140" text-anchor="middle" font-weight="bold">Benzene (Substitution)</text><path class="bond" d="M 135 150 L 165 150 L 180 176 L 165 202 L 135 202 L 120 176 Z" /><circle cx="150" cy="176" r="16" class="bond" /><path class="bond" d="M 210 176 L 240 176" marker-end="url(#arr2)" /><path class="bond" d="M 285 150 L 315 150 L 330 176 L 315 202 L 285 202 L 270 176 Z" /><path d="M 285 156 A 12 12 0 1 0 315 156" fill="none" stroke="#1e293b" stroke-width="2" /><text x="300" y="181" class="plus" text-anchor="middle">+</text><text x="290" y="140" text-anchor="middle" font-size="12px">H</text><text x="310" y="140" text-anchor="middle" class="hl" font-size="12px">E</text><path class="bond" d="M 300 150 L 290 145 M 300 150 L 310 145" /><path class="bond" d="M 360 176 L 390 176" marker-end="url(#arr2)" /><path class="bond" d="M 435 150 L 465 150 L 480 176 L 465 202 L 435 202 L 420 176 Z" /><circle cx="450" cy="176" r="16" class="bond" /><text x="450" y="140" text-anchor="middle" class="hl">E</text><path class="bond" d="M 450 150 L 450 145" /><text x="300" y="225" text-anchor="middle" font-size="12px" fill="#64748b">Delocalisation broken locally</text><text x="450" y="225" text-anchor="middle" font-size="12px" fill="#10b981">Aromatic ring restored</text></svg>' } },
    {
      id: 'callout-activation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Activation: Why Benzene Needs a Catalyst',
        text: 'Br₂ molecule is not polar enough to attack benzene directly. A Lewis acid catalyst (AlBr₃ or FeBr₃) accepts electrons from Br₂, polarising it strongly: Br₂ + AlBr₃ → [Br−Br−AlBr₃] complex. The Br⁺ becomes a powerful electrophile and can attack the ring.'
      }
    },
    {
      id: 'h-summary-reactivity',
      type: 'heading',
      data: { text: 'Summary of Reactivity Patterns', level: 3 }
    },
    {
      id: 'p-summary',
      type: 'paragraph',
      data: {
        text: 'Alkenes have localised π electrons and readily undergo addition with Br₂ (no catalyst, fast, room temp). Benzene has delocalised π electrons and resists addition because breaking the ring would lose 150 kJ/mol stabilisation energy. Instead, benzene undergoes electrophilic substitution with an activated electrophile (needs catalyst, slower, mild conditions). The aromatic ring is preserved, maintaining stability.'
      }
    },
    {
      id: 'checklist-reactivity',
      type: 'checklist',
      data: {
        items: [
          { text: 'Alkenes undergo addition; benzene undergoes substitution', checked: false },
          { text: 'Benzene does NOT decolourise bromine water at room temp', checked: false },
          { text: 'Addition breaks the C=C and releases π electrons (favourable for alkenes)', checked: false },
          { text: 'Substitution preserves the aromatic ring (favourable for benzene)', checked: false },
          { text: 'Benzene needs a Lewis acid catalyst to activate the electrophile', checked: false }
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
        text: 'Understand: Benzene undergoes electrophilic substitution (not addition) because substitution preserves the stable delocalised π system, while addition would destroy it.\n\nApply: Explain why benzene does not decolourise bromine water, unlike alkenes.\n\nAnalyze: Compare the enthalpy change for addition of Br₂ to cyclohexene vs benzene. Why is the benzene reaction energetically unfavourable?\n\nEvaluate: Under extreme conditions, benzene CAN undergo addition (e.g. hydrogenation with Ni). Why does this require harsher conditions than alkene hydrogenation?'
      },
      terms: []
    },
    {
      id: 'summary-reactivity',
      type: 'summary',
      data: {
        text: 'Arenes like benzene undergo electrophilic substitution rather than addition because the delocalised π system is stabilised by ~150 kJ/mol. Breaking this stability via addition is unfavourable. Alkenes, with localised π electrons, readily undergo addition with Br₂ at room temperature without a catalyst. Benzene requires a Lewis acid catalyst (AlBr₃ or FeBr₃) to activate the electrophile and undergoes slower substitution reactions that preserve the aromatic ring.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-alkene-addition', prompt: 'Describe the addition mechanism of alkenes with Br₂, and why it is fast at room temperature.' },
      { id: 'cue-2', blockId: 'callout-no-addition', prompt: 'Why does benzene NOT react with bromine water, unlike alkenes?' },
      { id: 'cue-3', blockId: 'p-mechanism', prompt: 'Compare the mechanisms of alkene addition and benzene substitution.' },
      { id: 'cue-4', blockId: 'callout-activation', prompt: 'Why is a Lewis acid catalyst needed for benzene bromination?' }
    ],
    summaryText: 'Alkenes undergo fast addition with Br₂ (no catalyst, room temp); benzene undergoes slow substitution (catalyst needed). Addition breaks localised C=C; substitution preserves delocalised aromatic ring. Benzene\'s 150 kJ/mol stabilisation energy makes addition energetically unfavourable. A Lewis acid (AlBr₃/FeBr₃) activates Br₂ to a powerful electrophile.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Arene vs alkene reactivity with halogens',
      detail: 'Experimental observation: alkenes decolourise Br₂(aq) rapidly; benzene does not. Reaction rates and mechanisms for substitution vs addition',
      year: '2023',
      source: 'chemguide.co.uk — benzene and arene reactions with bromine',
      tags: ['substitution', 'addition', 'electrophile', 'catalyst', 'aromatic']
    }
  ]
};
