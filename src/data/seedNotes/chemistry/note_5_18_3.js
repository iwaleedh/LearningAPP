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
        headers: ['Reaction', 'Reagents', 'Conditions', 'Product(s)'],
        rows: [
          ['Nitration', 'conc HNO₃ + conc H₂SO₄', '50–60°C, 30 min (mono-sub only)', 'Nitrobenzene (C₆H₅NO₂) + H₂O'],
          ['Halogenation (bromination)', 'Br₂ + AlBr₃ (or FeBr₃ / Fe filings)', 'Heat under reflux, anhydrous', 'Bromobenzene (C₆H₅Br) + HBr'],
          ['Friedel-Crafts alkylation', 'RCl (e.g. CH₃Cl) + AlCl₃', 'Anhydrous, mild heat', 'Alkylbenzene (e.g. toluene) + HCl'],
          ['Friedel-Crafts acylation', 'RCOCl (acyl chloride) + AlCl₃', 'Anhydrous, mild heat', 'Aryl ketone (C₆H₅COR) + HCl'],
          ['Sulphonation', 'Fuming H₂SO₄ (oleum)', '~40°C, 20–30 min', 'Benzene sulphonic acid (C₆H₅SO₃H) + H₂O']
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
        text: 'Benzene halogenation requires a halogen (Br₂ or Cl₂) and a halogen carrier (Lewis acid) catalyst. For bromination, Br₂ and AlBr₃ (or FeBr₃) are used under anhydrous conditions — water would hydrolyse AlBr₃ and destroy the catalyst. In practice, iron filings can be used as the catalyst source: they react with Br₂ to form FeBr₃ in situ. The reaction is carried out under reflux, and bromobenzene (C₆H₅Br) is the product along with HBr. Chlorination follows the same pattern with Cl₂ and AlCl₃.'
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
        title: 'Anhydrous Conditions Critical for Friedel-Crafts',
        text: 'Lewis acid catalysts (AlCl₃, AlBr₃, FeCl₃) react with water: AlCl₃ + 3H₂O → Al(OH)₃ + 3HCl. This destroys the catalyst and produces HCl gas. All Friedel-Crafts reactions must use dry reagents and apparatus. For halogenation: iron filings react with Br₂/Cl₂ in situ → FeBr₃/FeCl₃ (the halogen carrier catalyst).'
      }
    },
    {
      id: 'h-combustion-hydrogenation',
      type: 'heading',
      data: { text: 'Combustion and Hydrogenation of Benzene', level: 2 }
    },
    {
      id: 'list-combust-hydrog',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Hydrogenation: C₆H₆ + 3H₂ → C₆H₁₂ (cyclohexane); conditions: heat + pressure + Ni catalyst. Benzene ring is fully saturated — aromaticity is destroyed.' },
          { text: 'Complete combustion: C₆H₆ + 7½O₂ → 6CO₂ + 3H₂O; requires a very high ratio of oxygen to benzene (7.5:1), so complete combustion is hard to achieve in practice.' },
          { text: 'Incomplete combustion: benzene burns with a very smoky, sooty yellow/orange flame — produces carbon particulates. Another hazard alongside its carcinogenicity.' },
          { text: 'These reactions follow the same pattern as other hydrocarbons; the distinctive chemistry of benzene is its EAS reactions (not combustion/hydrogenation).' }
        ]
      }
    },
    {
      id: 'h-sulphonation',
      type: 'heading',
      data: { text: 'Sulphonation of Benzene', level: 2 }
    },
    {
      id: 'p-sulphonation-1',
      type: 'paragraph',
      data: {
        text: 'Benzene can be sulphonated by warming with fuming sulphuric acid (oleum) at approximately 40°C for 20–30 minutes. Fuming sulphuric acid (oleum) is made by dissolving sulfur trioxide (SO₃) in concentrated sulphuric acid. The products are benzene sulphonic acid (C₆H₅SO₃H) and water. The −SO₃H group replaces one hydrogen on the ring.'
      }
    },
    {
      id: 'eq-sulphonation',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + SO<sub>3</sub> → C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H<br />(fuming H₂SO₄/oleum, ~40°C, 20–30 min)<br />Product: benzene sulphonic acid + H₂O'
      }
    },
    {
      id: 'callout-sulphonation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sulphonation Summary',
        text: 'Reagent: fuming sulphuric acid (oleum = SO₃ dissolved in conc H₂SO₄).\nConditions: ~40°C, 20–30 minutes.\nProduct: benzene sulphonic acid (C₆H₅SO₃H) + water.\nMechanism: SO₃ acts as the electrophile (electrophilic aromatic substitution). No separate Lewis acid catalyst is needed.\nUse: the −SO₃H group is the basis of sulfonamide drugs, synthetic dyes, and detergents.'
      }
    },
    {
      id: 'checklist-eas-reactions',
      type: 'checklist',
      data: {
        items: [
          { text: 'Nitration: conc HNO₃ + conc H₂SO₄, 50–60°C → nitrobenzene + H₂O', checked: false },
          { text: 'Halogenation: Br₂ + AlBr₃ (or FeBr₃/Fe filings), reflux, anhydrous → bromobenzene + HBr', checked: false },
          { text: 'Friedel-Crafts alkylation: RCl + AlCl₃, anhydrous → alkylbenzene (risk of polyalkylation)', checked: false },
          { text: 'Friedel-Crafts acylation: RCOCl + AlCl₃, anhydrous → aryl ketone (no polyacylation)', checked: false },
          { text: 'Sulphonation: fuming H₂SO₄, ~40°C, 20–30 min → benzene sulphonic acid + H₂O', checked: false },
          { text: 'All Friedel-Crafts reactions require anhydrous conditions', checked: false },
          { text: 'Benzene combustion: smoky yellow flame (usually incomplete); hydrogenation: Ni catalyst, heat, pressure', checked: false }
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
        text: 'Benzene undergoes five main electrophilic aromatic substitution reactions. (1) Nitration: conc HNO₃ + H₂SO₄ at 50–60°C → nitrobenzene (stay at 50°C to avoid polynitration). (2) Halogenation: Br₂ + AlBr₃ (or Fe filings) under reflux, anhydrous → bromobenzene + HBr. (3) Friedel-Crafts alkylation: RCl + AlCl₃, anhydrous → alkylbenzene (polyalkylation risk). (4) Friedel-Crafts acylation: RCOCl + AlCl₃, anhydrous → aryl ketone (no polyacylation — acyl group deactivates ring). (5) Sulphonation: fuming H₂SO₄, ~40°C → benzene sulphonic acid + H₂O. Benzene also undergoes combustion (smoky flame) and hydrogenation (Ni, heat, pressure → cyclohexane).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-nitration-1', prompt: 'State the reagents, conditions, and product for benzene nitration. Why must temperature be kept at 50–60°C?' },
      { id: 'cue-2', blockId: 'p-halogenation-1', prompt: 'How is benzene brominated? Why is a Lewis acid catalyst needed, and what can be used instead of AlBr₃?' },
      { id: 'cue-3', blockId: 'callout-fc-alkylation', prompt: 'What are the reagents and conditions for Friedel-Crafts alkylation? Why can polyalkylation occur?' },
      { id: 'cue-4', blockId: 'p-acylation-2', prompt: 'Why does acylation give only monosubstitution while alkylation can polysubstitute?' },
      { id: 'cue-5', blockId: 'callout-sulphonation', prompt: 'State reagents, conditions, and product for sulphonation of benzene. What is fuming sulphuric acid?' }
    ],
    summaryText: 'Nitration: conc HNO₃ + H₂SO₄, 50–60°C → nitrobenzene. Halogenation: Br₂ + AlBr₃/Fe filings, reflux, anhydrous → bromobenzene. FC alkylation: RCl + AlCl₃, anhydrous → alkylbenzene. FC acylation: RCOCl + AlCl₃, anhydrous → aryl ketone (monosubstitution only). Sulphonation: fuming H₂SO₄, ~40°C → benzene sulphonic acid. Combustion: smoky flame; hydrogenation: Ni, heat, pressure → cyclohexane.',
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
