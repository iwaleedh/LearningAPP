export const note_chemistry_4_15_5 = {
  blocks: [
    {
      id: 'obj-carboxylic',
      type: 'objective',
      data: {
        text: 'Understand carboxylic acid structure, acidity, and key reactions: with metals, bases, alcohols (esterification), and reduction.'
      }
    },
    {
      id: 'h-carboxylic-structure',
      type: 'heading',
      data: { text: 'Carboxylic Acid Structure & Acidity', level: 2 }
    },
    {
      id: 'p-carboxylic-def',
      type: 'paragraph',
      data: {
        text: 'Carboxylic acids contain the carboxyl group (–COOH), which is a combination of a carbonyl (C=O) and a hydroxyl (O–H) group on the same carbon. The general formula is R–COOH. The structure is: R–C(=O)–O–H. Carboxylic acids are weak acids (pKa typically 3–5) because the O–H bond is polar and the resulting anion (R–COO⁻) is stabilised by resonance: the negative charge is delocalised between the two oxygen atoms of the carboxylate ion.'
      }
    },
    {
      id: 'equation-carboxylic-ionisation',
      type: 'equation',
      data: {
        html: 'R–COOH ⇌ R–COO<sup>−</sup> + H<sup>+</sup><br/><br/>Resonance structures of carboxylate: R–C(=O)–O<sup>−</sup> ⇌ R–C(−O)=O',
        caption: 'Carboxylic acid ionisation. The carboxylate anion is stabilised by resonance between two equivalent structures, explaining the weak acidity.'
      }
    },
    {
      id: 'p-acidity-explanation',
      type: 'paragraph',
      data: {
        text: 'The acidity of carboxylic acids is much greater than that of simple alcohols (pKa ~15) because: (1) the O–H bond is more polar in carboxylic acids (the nearby C=O withdraws electron density), and (2) the resulting anion is resonance-stabilised (negative charge spread over two oxygens), making it more stable than an alkoxide anion. Common carboxylic acids: formic acid (HCOOH, pKa 3.75), acetic acid (CH₃COOH, pKa 4.76), propionic acid (CH₃CH₂COOH), butanoic acid (CH₃CH₂CH₂COOH).'
      }
    },
    {
      id: 'h-carboxylic-reactions',
      type: 'heading',
      data: { text: 'Reactions of Carboxylic Acids', level: 2 }
    },
    {
      id: 'h-metals-bases',
      type: 'heading',
      data: { text: 'Reactions with Metals & Bases', level: 3 }
    },
    {
      id: 'p-metal-base-reactions',
      type: 'paragraph',
      data: {
        text: 'Carboxylic acids react with metals (Na, Mg) and bases (NaOH, Na₂CO₃, NaHCO₃) because they are weak acids. With sodium metal: 2R–COOH + 2Na → 2R–COONa + H₂↑. With NaOH: R–COOH + NaOH → R–COONa + H₂O (complete neutralisation). With Na₂CO₃: 2R–COOH + Na₂CO₃ → 2R–COONa + H₂O + CO₂↑. With NaHCO₃: R–COOH + NaHCO₃ → R–COONa + H₂O + CO₂↑. These reactions form sodium salts (carboxylates), which are ionic solids, often soluble in water.'
      }
    },
    {
      id: 'list-acid-reactions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'With Na metal: produces H₂ gas (vigorous reaction)',
          'With NaOH: neutralisation to salt + water',
          'With Na₂CO₃ or NaHCO₃: forms salt, water, and CO₂ gas',
          'With NH₃: forms ammonium salt (R–COONH₄)',
          'With alcohols: esterification (see below)'
        ]
      }
    },
    {
      id: 'h-esterification',
      type: 'heading',
      data: { text: 'Esterification with Alcohols', level: 3 }
    },
    {
      id: 'p-esterification-intro',
      type: 'paragraph',
      data: {
        text: 'Carboxylic acids react with alcohols in the presence of a strong acid catalyst (typically H₂SO₄ or HCl) to form esters and water. This is called Fischer esterification. The general equation is: R–COOH + R′–OH ⇌ R–COO–R′ + H₂O (with H⁺ catalyst). The reaction is reversible and reaches equilibrium; the yield depends on conditions. To drive the reaction forward: (1) use excess alcohol (shifts equilibrium to products), (2) remove water as it forms (e.g., Dean-Stark apparatus), or (3) use a large excess of one reactant.'
      }
    },
    {
      id: 'equation-esterification',
      type: 'equation',
      data: {
        html: 'R–COOH + R′–OH <span style="font-size: 0.9em; vertical-align: super;">H<sup>+</sup></span>→ R–COO–R′ + H<sub>2</sub>O',
        caption: 'Fischer esterification: carboxylic acid + alcohol → ester + water. The reaction is acid-catalysed and reversible.'
      }
    },
    {
      id: 'p-esterification-mechanism',
      type: 'paragraph',
      data: {
        text: 'Mechanism (simplified): (1) The carboxylic acid is protonated by H⁺, activating the C=O. (2) The alcohol (nucleophile) attacks the electrophilic carbon, forming a tetrahedral intermediate. (3) Water is eliminated, forming a protonated ester. (4) Deprotonation gives the final ester. The catalyst is regenerated. Because the reaction is reversible, esters can be hydrolysed back to the acid and alcohol (saponification if base is used; acid hydrolysis if acid is used).'
      }
    },
    {
      id: 'callout-esterification-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Esterification Conditions',
        text: 'Fischer esterification requires: (1) Carboxylic acid, (2) Alcohol, (3) Strong acid catalyst (H₂SO₄ or HCl), (4) Heat (often 60–80°C) to drive the equilibrium and evaporate water. The reaction does NOT work with weak bases (NaOH will deprotonate the acid instead of promoting esterification). For high yields, use excess alcohol or remove water by azeotropic distillation.'
      }
    },
    {
      id: 'h-reduction',
      type: 'heading',
      data: { text: 'Reduction of Carboxylic Acids', level: 3 }
    },
    {
      id: 'p-reduction-intro',
      type: 'paragraph',
      data: {
        text: 'Carboxylic acids are reduced to primary alcohols by lithium aluminium hydride (LiAlH₄). NaBH₄ does NOT reduce carboxylic acids. The reaction mechanism involves hydride (H⁻) attack on the carbonyl carbon, followed by hydrolysis. The two-step reduction is: (1) R–COOH + LiAlH₄ → R–CHO (aldehyde intermediate, not usually isolated), (2) further hydride attack reduces the aldehyde → R–CH₂OH. In practice, one equivalent of LiAlH₄ is used, and with careful control, you can isolate the aldehyde; with excess LiAlH₄, the primary alcohol is the major product.'
      }
    },
    {
      id: 'equation-reduction',
      type: 'equation',
      data: {
        html: 'R–COOH + LiAlH<sub>4</sub> → R–CH<sub>2</sub>OH  (primary alcohol)<br/><br/>(excess LiAlH<sub>4</sub> reduces carboxylic acids; NaBH<sub>4</sub> does not)',
        caption: 'LiAlH₄ reduction of carboxylic acids to primary alcohols. NaBH₄ is too weak to reduce the COOH group.'
      }
    },
    {
      id: 'p-reduction-mechanism',
      type: 'paragraph',
      data: {
        text: 'LiAlH₄ is a very strong reducing agent; it provides hydride ions (H⁻) that attack the electrophilic carbonyl carbon. The sequence for carboxylic acid: (1) Nucleophilic attack by H⁻ on C=O → tetrahedral intermediate with C–H and O⁻. (2) Internal hydride transfer or rearrangement gives R–CHO (if only 1 equiv. LiAlH₄). (3) With excess LiAlH₄, further hydride attack on the aldehyde → tetrahedral C–H and O⁻ → after hydrolysis, R–CH₂OH. The O⁻ is protonated during aqueous workup.'
      }
    },
    {
      id: 'p-esters-from-acids',
      type: 'paragraph',
      data: {
        text: 'Esters are important carboxylic acid derivatives. Common examples: ethyl acetate (CH₃COOC₂H₅, solvent), methyl salicylate (oil of wintergreen), triglycerides (fats and oils, esters of glycerol and fatty acids). Esters have lower boiling points than carboxylic acids (no O–H hydrogen bonding), pleasant odours (fruity, floral), and are less soluble in water. They are used as perfumes, solvents, plasticisers, and in polyester production.'
      }
    },
    {
      id: 'checklist-carboxylic',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand why carboxylic acids are weak acids (resonance stabilisation of anion).', checked: false },
          { text: 'I can write equations for reactions with Na, NaOH, Na₂CO₃, and NaHCO₃.', checked: false },
          { text: 'I can write the Fischer esterification equation and explain conditions needed.', checked: false },
          { text: 'I know that LiAlH₄ (not NaBH₄) reduces carboxylic acids to primary alcohols.', checked: false }
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
        text: 'Understand: Carboxylic acids are weak acids (partially dissociate). Their acidity comes from the stabilisation of the carboxylate ion (RCOO⁻) by delocalisation of the negative charge.\n\nApply: Write the equation for the reaction of ethanoic acid with Na₂CO₃. State the observations.\n\nAnalyze: Why are carboxylic acids stronger acids than alcohols despite both having an −OH group?\n\nEvaluate: Compare the acid strength of CH₃COOH vs CCl₃COOH. Explain the inductive effect of Cl on acidity.'
      },
      terms: []
    },
    {
      id: 'summary-carboxylic',
      type: 'summary',
      data: {
        text: 'Carboxylic acids (R–COOH) are weak acids (pKa ~3–5) because the carboxylate anion is resonance-stabilised. They react with metals (Na) to produce H₂, and with bases (NaOH, Na₂CO₃, NaHCO₃) to form salts + H₂O (and CO₂ if carbonate used). Fischer esterification: R–COOH + R′–OH ⇌ ester + H₂O (acid catalyst, heat, reversible). LiAlH₄ reduces R–COOH → R–CH₂OH (primary alcohol); NaBH₄ does not reduce carboxylic acids. Esters are lower-boiling, pleasant-smelling carboxylic acid derivatives.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-carboxylic-def',
        prompt: 'Explain why carboxylic acids are weak acids, referring to resonance stabilisation.'
      },
      {
        id: 'cue-2',
        blockId: 'p-metal-base-reactions',
        prompt: 'Write equations for carboxylic acid reactions with Na, NaOH, and Na₂CO₃.'
      },
      {
        id: 'cue-3',
        blockId: 'equation-esterification',
        prompt: 'Write the Fischer esterification equation and state the required conditions.'
      },
      {
        id: 'cue-4',
        blockId: 'p-reduction-intro',
        prompt: 'Which reducing agent reduces carboxylic acids to primary alcohols: NaBH₄ or LiAlH₄? Explain.'
      },
      {
        id: 'cue-5',
        blockId: 'p-esters-from-acids',
        prompt: 'Give three physical properties that distinguish esters from carboxylic acids.'
      }
    ],
    summaryText: 'Carboxylic acids (R–COOH, pKa ~3–5) are weak because the anion (R–COO⁻) is resonance-stabilised. React with Na → salt + H₂; with NaOH → salt + H₂O; with Na₂CO₃ → salt + H₂O + CO₂. Fischer esterification: R–COOH + R′–OH → ester + H₂O (H⁺ catalyst, heat, reversible). LiAlH₄ reduces R–COOH → R–CH₂OH (primary alcohol); NaBH₄ is too weak. Esters are derivatives with lower boiling points, pleasant odours, used as solvents and perfumes.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Aspirin synthesis via esterification',
      detail: 'Aspirin is synthesised by Fischer esterification: salicylic acid (2-hydroxybenzoic acid) + acetic anhydride (or acetic acid) → acetylsalicylic acid (aspirin). This reaction is acid-catalysed and demonstrates the practical importance of esterification in pharmaceutical synthesis. Aspirin is one of the most widely used drugs globally, making esterification a fundamental industrial process.',
      year: '2023',
      source: 'Pharmaceutical Chemistry & Organic Synthesis',
      tags: ['esterification', 'carboxylic acids', 'pharmaceutical', 'synthesis']
    }
  ]
};
