export const note_chemistry_5_18_3 = {
  blocks: [
    {
      id: 'obj-eas-reactions',
      type: 'objective',
      data: {
        text: 'Describe electrophilic aromatic substitution (EAS) reactions of benzene: nitration, halogenation, Friedel-Crafts alkylation, and Friedel-Crafts acylation; state reagents, conditions, and products for each'
      }
    },
    {
      id: 'h-eas-overview',
      type: 'heading',
      data: { text: 'Electrophilic Aromatic Substitution (EAS) Reactions', level: 2 }
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Benzene undergoes a series of important electrophilic aromatic substitution reactions. In each case, an electrophile attacks the ring, displacing a hydrogen atom. Different electrophiles are used, generated under specific conditions, often with the aid of Lewis acid catalysts. The table below summarises the four main EAS reactions.'
      }
    },
    {
      id: 'table-eas',
      type: 'comparisonTable',
      data: {
        headers: ['Reaction', 'Reagents', 'Conditions', 'Product'],
        rows: [
          ['Nitration', 'conc HNO₃ + conc H₂SO₄', '50°C, 30 min', 'Nitrobenzene (C₆H₅NO₂)'],
          ['Halogenation', 'Br₂ + AlBr₃', 'Room temp, anhydrous', 'Bromobenzene (C₆H₅Br)'],
          ['Friedel-Crafts alkylation', 'RCl + AlCl₃', 'Anhydrous', 'Alkylbenzene (C₆H₅R)'],
          ['Friedel-Crafts acylation', 'RCOCl + AlCl₃', 'Anhydrous', 'Aryl ketone (C₆H₅COR)']
        ],
        caption: 'Main Electrophilic Aromatic Substitution Reactions of Benzene'
      }
    },
    {
      id: 'h-nitration',
      type: 'heading',
      data: { text: 'Nitration of Benzene', level: 2 }
    },
    {
      id: 'p-nitration-1',
      type: 'paragraph',
      data: {
        text: 'Benzene is nitrated using concentrated nitric acid and concentrated sulphuric acid at 50°C for about 30 minutes. The products are nitrobenzene (C₆H₅NO₂) and water. The sulphuric acid acts as a catalyst and as a dehydrating agent. The conditions are carefully controlled: temperature is kept moderate (50°C) to avoid polynitration and side reactions.'
      }
    },
    {
      id: 'eq-nitration',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + HNO<sub>3</sub> ⇌ C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + H<sub>2</sub>O<br />(conc HNO₃ + conc H₂SO₄, 50°C)'
      }
    },
    {
      id: 'p-nitration-2',
      type: 'paragraph',
      data: {
        text: 'The nitro group (−NO₂) is strongly electron-withdrawing and deactivates the ring towards further substitution. Nitrobenzene is therefore resistant to further nitration under normal conditions. The product is a yellow oil at room temperature.'
      }
    },
    {
      id: 'h-halogenation',
      type: 'heading',
      data: { text: 'Halogenation of Benzene', level: 2 }
    },
    {
      id: 'p-halogenation-1',
      type: 'paragraph',
      data: {
        text: 'Benzene halogenation requires a halogen (Br₂ or Cl₂) and a Lewis acid catalyst. For bromination, Br₂ and AlBr₃ are mixed under anhydrous conditions (water would hydrolyse AlBr₃). The reaction occurs readily at room temperature. Bromobenzene (C₆H₅Br) is the product. Chlorination follows the same pattern with Cl₂ and AlCl₃, producing chlorobenzene (C₆H₅Cl).'
      }
    },
    {
      id: 'eq-halogenation',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + Br<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>Br + HBr<br />(AlBr₃ catalyst, anhydrous, room temp)'
      }
    },
    {
      id: 'callout-fc-alkylation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Friedel-Crafts Alkylation',
        text: 'Benzene + haloalkane (RCl) + AlCl₃ → alkylbenzene (C₆H₅R) + HCl. Example: C₆H₆ + CH₃Cl + AlCl₃ → toluene (C₆H₅CH₃). Conditions: anhydrous, mild heat. The alkyl group (−CH₃, −C₂H₅, etc.) is electron-donating and activates the ring, so polyalkylation can occur if excess haloalkane is used.'
      }
    },
    {
      id: 'h-friedel-crafts',
      type: 'heading',
      data: { text: 'Friedel-Crafts Acylation', level: 2 }
    },
    {
      id: 'p-acylation-1',
      type: 'paragraph',
      data: {
        text: 'Friedel-Crafts acylation uses an acyl chloride (RCOCl) and AlCl₃ catalyst under anhydrous conditions. The product is an aryl ketone (aromatic ketone, C₆H₅COR). For example, benzene + acetyl chloride (CH₃COCl) + AlCl₃ gives acetophenone (C₆H₅COCH₃), a pale yellow liquid.'
      }
    },
    {
      id: 'eq-acylation',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + RCOCl → C<sub>6</sub>H<sub>5</sub>COR + HCl<br />(AlCl₃ catalyst, anhydrous, mild heat)'
      }
    },
    {
      id: 'p-acylation-2',
      type: 'paragraph',
      data: {
        text: 'Unlike the alkyl group in Friedel-Crafts alkylation, the acyl group (−COR) is electron-withdrawing (due to the adjacent C=O). It deactivates the ring, preventing polyacylation. This makes Friedel-Crafts acylation more selective and useful for preparing monosubstituted products.'
      }
    },
    {
      id: 'callout-anhydrous',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Anhydrous Conditions Critical',
        text: 'Lewis acid catalysts (AlCl₃, AlBr₃, FeCl₃) react with water: AlCl₃ + 3H₂O → Al(OH)₃ + 3HCl. This destroys the catalyst and produces HCl gas. All Friedel-Crafts reactions must use dry reagents and apparatus to prevent hydrolysis.'
      }
    },
    {
      id: 'checklist-eas-reactions',
      type: 'checklist',
      data: {
        items: [
          { text: 'Nitration: conc HNO₃ + conc H₂SO₄ at 50°C → nitrobenzene', checked: false },
          { text: 'Halogenation: X₂ + AlX₃ (anhydrous) → halobenzene', checked: false },
          { text: 'Friedel-Crafts alkylation: RCl + AlCl₃ → alkylbenzene (risk of polyalkylation)', checked: false },
          { text: 'Friedel-Crafts acylation: RCOCl + AlCl₃ → aryl ketone (no polyacylation)', checked: false },
          { text: 'All Friedel-Crafts reactions require anhydrous conditions', checked: false }
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
        text: 'Understand: EAS reactions replace one H on benzene with an electrophile. Key reactions: nitration (HNO₃/H₂SO₄), halogenation (Br₂/AlBr₃), Friedel-Crafts alkylation and acylation.\n\nApply: Write the equation and conditions for the nitration of benzene. Name the electrophile formed.\n\nAnalyze: Why does Friedel-Crafts acylation require a Lewis acid catalyst? What role does AlCl₃ play?\n\nEvaluate: Compare Friedel-Crafts alkylation vs acylation. Why is acylation often preferred for synthesis?'
      },
      terms: []
    },
    {
      id: 'summary-eas',
      type: 'summary',
      data: {
        text: 'Benzene undergoes four main electrophilic aromatic substitution reactions. Nitration uses conc HNO₃/H₂SO₄ at 50°C to form nitrobenzene. Halogenation uses X₂ and AlX₃ catalyst to form halobenzenes. Friedel-Crafts alkylation uses RCl + AlCl₃ to form alkylbenzenes (watch for polyalkylation). Friedel-Crafts acylation uses RCOCl + AlCl₃ to form aryl ketones (no polyacylation due to deactivation). All Friedel-Crafts reactions require anhydrous conditions.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-nitration-1', prompt: 'State the reagents, conditions, and product for benzene nitration.' },
      { id: 'cue-2', blockId: 'eq-halogenation', prompt: 'How is benzene brominated? Why is a catalyst needed?' },
      { id: 'cue-3', blockId: 'callout-fc-alkylation', prompt: 'What are the reagents and conditions for Friedel-Crafts alkylation?' },
      { id: 'cue-4', blockId: 'p-acylation-2', prompt: 'Why does acylation give only monosubstitution while alkylation can polysubstitute?' }
    ],
    summaryText: 'Nitration: conc HNO₃ + H₂SO₄, 50°C → nitrobenzene. Halogenation: X₂ + AlX₃, anhydrous, room temp → halobenzene. Friedel-Crafts alkylation: RCl + AlCl₃, anhydrous → alkylbenzene (polysubstitution risk). Friedel-Crafts acylation: RCOCl + AlCl₃, anhydrous → aryl ketone (only monosubstitution due to deactivation).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Benzene electrophilic aromatic substitution reactions',
      detail: 'Reaction mechanisms, reagents, conditions, and product yields for nitration, halogenation, Friedel-Crafts alkylation and acylation',
      year: '2023',
      source: 'chemguide.co.uk — benzene EAS reactions',
      tags: ['electrophilic', 'substitution', 'nitration', 'halogenation', 'Friedel-Crafts']
    }
  ]
};
