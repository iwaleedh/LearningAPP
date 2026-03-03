export const note_chemistry_5_20_5 = {
  blocks: [
    {
      id: 'obj-purification-techniques',
      type: 'objective',
      data: {
        text: 'Apply laboratory techniques to purify organic compounds: distillation, reflux, recrystallisation, solvent extraction, drying, and filtration; measure purity using melting point, boiling point, and TLC.'
      }
    },
    {
      id: 'h-purification-overview',
      type: 'heading',
      data: { text: 'Organic Purification Overview', level: 2 }
    },
    {
      id: 'p-purification-intro',
      type: 'paragraph',
      data: {
        text: 'Organic reactions rarely give a single pure product. The crude product typically contains unreacted starting material, byproducts, solvent, and side products. Purification removes impurities, leaving pure compound. Choice of technique depends on the physical properties of the product (boiling point, melting point, solubility) and the nature of impurities. A-level practicals use distillation (liquids), recrystallisation (solids), and extraction (separating immiscible layers).'
      }
    },
    {
      id: 'h-distillation',
      type: 'heading',
      data: { text: 'Distillation: Separating by Boiling Point', level: 2 }
    },
    {
      id: 'p-distillation-intro',
      type: 'paragraph',
      data: {
        text: 'Distillation separates liquids by differences in boiling point. The mixture is heated; the component with the lowest boiling point evaporates first, condenses in a cool condenser, and is collected in a receiving flask. As temperature increases, other components evaporate in order of increasing boiling point. By collecting fractions at different temperature ranges, pure components can be isolated. Simple distillation works well for separating a liquid product from non-volatile impurities or solvent.'
      }
    },
    {
      id: 'list-distillation-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Round-bottom flask: holds the mixture to be distilled, heated by water bath or electric mantle',
          'Thermometer: measures vapour temperature; placed with bulb at the level of the side arm outlet',
          'Liebig condenser (water-jacketed): cools and condenses vapour; water flows in at bottom, out at top (counter-current cooling)',
          'Adapter: connects condenser outlet to receiving flask',
          'Receiving flask: collects distillate',
          'Heat source: water bath (for < 100°C), Bunsen burner (for higher bp), or electric mantle (safest, controlled heating)'
        ]
      }
    },
    {
      id: 'p-distillation-technique',
      type: 'paragraph',
      data: {
        text: 'Setup must be secure; condenser inlet and outlet are connected to water flow. The thermometer bulb is positioned at the side arm (vapour outlet) to accurately measure the boiling point of the fraction being distilled. Heating is gradual; rapid heating causes bumping (violent boiling) or allows liquid to condense in the condenser. The product is collected in fractions at specific boiling point ranges (e.g. 70–75°C for ethanol from a mixture).'
      }
    },
    {
      id: 'callout-distillation-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Simple Distillation: Separating Ethanol from Water',
        text: 'Mixture: 50 mL ethanol (bp 78°C) + water (bp 100°C) + non-volatile salt impurity\n\nProcedure:\n1. Add mixture to round-bottom flask with a few boiling stones\n2. Assemble apparatus; water flows through condenser jacket\n3. Heat gently with water bath or low Bunsen flame\n4. Temperature rises slowly; watch thermometer\n5. At ~78°C, ethanol vapour forms, condenses in condenser, drops into receiving flask\n6. Collect fraction 1 (70–80°C): mainly pure ethanol\n7. Temperature rises toward 100°C; collect fraction 2 (80–95°C): mixed\n8. At ~100°C, water vapour appears; stop and discard if impure\n9. Fraction 1 is pure ethanol; water and salt remain in distillation flask'
      }
    },
    {
      id: 'h-reflux',
      type: 'heading',
      data: { text: 'Reflux: Heating Without Loss of Solvent', level: 2 }
    },
    {
      id: 'p-reflux-intro',
      type: 'paragraph',
      data: {
        text: 'Reflux is a technique where a mixture is heated to boiling, but the vapour is immediately condensed and returns (reflects) back into the reaction flask. This allows prolonged heating at the boiling point of the solvent without losing it. The mixture is heated for hours if necessary while solvent continuously cycles. Reflux is essential for slow reactions (SN2, esterification, nitrile hydrolysis) that require extended heating.'
      }
    },
    {
      id: 'list-reflux-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Round-bottom or flat-bottom flask: contains the reaction mixture, heated by water bath or electric mantle',
          'Condenser (Liebig or Graham type): positioned vertically above the flask, condenses vapour which drips back down',
          'Boiling stones: prevent bumping and vigorous boiling',
          'Heat source: water bath (~60°C for moderate heating) or electric mantle (for precise control)',
          'Optional: thermometer or drying tube to monitor or protect reaction from moisture'
        ]
      }
    },
    {
      id: 'p-reflux-technique',
      type: 'paragraph',
      data: {
        text: 'The condenser is clamped vertically. Water flows through the jacket (cooled by tap water, typically 15–20°C). The flask is heated gently; liquid begins to boil and evaporate. Vapour rises into the condenser, cools, and condenses back as liquid, which dribbles back into the flask. The level of liquid in the flask remains roughly constant. This allows reactions to proceed at elevated temperature without solvent loss. Typical reflux times: 2–6 hours depending on reaction.'
      }
    },
    {
      id: 'callout-reflux-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reflux vs Distillation',
        text: 'Distillation: condenser is angled downward (vapour escapes to receiving flask); product collected in separate vessel; used to separate liquids by boiling point.\n\nReflux: condenser is vertical (vapour returns to reaction flask); product stays in original flask; used to drive reactions forward by prolonged heating without solvent loss.\n\nExample reactions requiring reflux: nitrile hydrolysis (RCN + H₂O/H⁺ → RCOOH, requires 2–3 h at boiling point), Fischer esterification (RCOOH + R\'OH ⇌ RCOOR\', driven by azeotrope removal or prolonged heating)'
      }
    },
    {
      id: 'h-recrystallisation-detailed',
      type: 'heading',
      data: { text: 'Recrystallisation: Purifying Solids', level: 2 }
    },
    {
      id: 'p-recrystallisation-detailed',
      type: 'paragraph',
      data: {
        text: 'Recrystallisation is the primary method for purifying organic solids. A hot solvent dissolves all components (desired compound + impurities). Upon cooling, the desired compound (less soluble cold) crystallises out, while impurities (more soluble cold, or with different solubility profiles) remain in solution. This selectively purifies based on solubility differences. The recrystallised crystals are collected by filtration and dried.'
      }
    },
    {
      id: 'list-recrystallisation-steps-detailed',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Select solvent: choose one where the desired compound is soluble when hot, insoluble when cold. Impurities should be soluble in both or insoluble in both (but more soluble when hot).',
          'Add crude solid to a beaker with minimum amount of hot solvent (just enough to dissolve when boiling)',
          'Heat the suspension to boiling on a water bath or Bunsen flame until all solid dissolves',
          'Filter the hot solution through a funnel with hot filter paper (hot to prevent premature crystallisation) into a clean beaker',
          'Insoluble impurities are trapped on the filter; the clear solution is the filtrate',
          'Cover loosely with filter paper and allow to cool slowly to room temperature on a bench (slow cooling gives large, pure crystals)',
          'Further cool in an ice bath for 10–15 minutes to maximise crystallisation',
          'Collect crystals by vacuum filtration (Buchner funnel + filter flask) or gravity filtration with Buchner funnel',
          'Rinse crystals with small portions of ice-cold solvent to wash away soluble impurities remaining in pores',
          'Dry thoroughly: oven (80–100°C, 20 minutes), heat lamp, or vacuum drying'
        ]
      }
    },
    {
      id: 'p-recrystallisation-solvent-choice',
      type: 'paragraph',
      data: {
        text: 'Common recrystallisation solvents for organic compounds: ethanol (good for many organic solids, moderate solubility at both temperatures), water (for ionic compounds and polar organics), acetone (good for esters and carbonyl compounds), hot water + ethanol mixtures (adjustable solubility), and petroleum ether (for non-polar compounds). A small trial recrystallisation tests whether the solvent is suitable before committing to a large batch.'
      }
    },
    {
      id: 'h-solvent-extraction',
      type: 'heading',
      data: { text: 'Solvent Extraction: Separating Immiscible Layers', level: 2 }
    },
    {
      id: 'p-extraction-intro',
      type: 'paragraph',
      data: {
        text: 'Solvent extraction (or liquid-liquid extraction) separates compounds between two immiscible liquids (typically aqueous and organic). The compounds partition into the layer in which they are more soluble. A separatory funnel holds the mixture; layers are allowed to separate by gravity, then the lower layer is run off through a stopcock. The upper layer can then be removed. Multiple extractions with fresh solvent increase efficiency.'
      }
    },
    {
      id: 'list-extraction-procedure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Reaction mixture (e.g. organic product in aqueous solution) is poured into a separatory funnel clamped on a ring stand',
          'Add organic solvent (e.g. ether, dichloromethane) immiscible with water; the mixture separates into two distinct layers',
          'Stopper the funnel; invert it (hold stopper in place) and gently shake to increase contact between layers (allows compounds to dissolve/partition)',
          'Open the stopper to release any pressure; re-stopper',
          'Let the funnel stand; layers separate by gravity (~5 minutes) into clear aqueous (lower) and organic (upper) layers',
          'Remove the stopper; run off the lower aqueous layer into a beaker by opening the stopcock at the bottom',
          'Close the stopcock when the interface reaches the stopcock; run the organic layer into a separate beaker',
          'The organic layer contains the desired product; aqueous layer is discarded (or further extracted)',
          'Repeat extraction 2–3 times with fresh organic solvent to maximise transfer of product',
          'Combine all organic extracts; organic solvent is then removed by distillation or rotary evaporator'
        ]
      }
    },
    {
      id: 'callout-extraction-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Extraction Example: Separating Organic Acid from Ether',
        text: 'Scenario: product (organic acid, RCOOH) dissolved in ether (organic layer); aqueous solution contains salt byproduct (water layer).\n\nExtraction:\n1. Add ether solution to separatory funnel\n2. Add aqueous NaOH solution (acid is deprotonated to water-soluble carboxylate RCOONa)\n3. Shake gently; organic acid converts to salt in aqueous layer\n4. Separate: organic layer (ether, no acid now) discarded; aqueous layer (NaOH + RCOONa) saved\n5. Add HCl to aqueous layer to re-protonate: RCOONa + HCl → RCOOH + NaCl (acid precipitates or returned to organic layer)\n6. Extract with ether again to recover pure acid in organic layer\n\nResult: selective separation of acid from neutral impurities'
      }
    },
    {
      id: 'h-drying-organic-solvents',
      type: 'heading',
      data: { text: 'Drying Organic Solutions', level: 2 }
    },
    {
      id: 'p-drying-intro',
      type: 'paragraph',
      data: {
        text: 'After extraction, organic solutions are contaminated with water. Water reduces product yield and purity, and can cause decomposition of water-sensitive compounds. Drying agents (desiccants) absorb water from the organic solution. Anhydrous sodium sulphate (Na₂SO₄) and anhydrous magnesium sulphate (MgSO₄) are common choices: inert, cheap, effective. The solution is shaken with drying agent, allowed to stand, then filtered to remove the desiccant.'
      }
    },
    {
      id: 'list-drying-agents',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Sodium sulphate (Na₂SO₄): absorbs water by forming hydrate Na₂SO₄·10H₂O; slow to act but very effective; leaves no residue on product',
          'Magnesium sulphate (MgSO₄): forms MgSO₄·7H₂O; faster than Na₂SO₄; very effective; slightly hygroscopic so remove carefully from solution',
          'Calcium chloride (CaCl₂): fast-acting; not compatible with alcohols or carboxylic acids (forms complexes)',
          'Silica gel: granular desiccant; can be heated to regenerate; good for volatile solvents',
          'Molecular sieves (zeolites): synthetic desiccants; very effective; regenerable by heating'
        ]
      }
    },
    {
      id: 'p-drying-procedure',
      type: 'paragraph',
      data: {
        text: 'Add a spatula of anhydrous Na₂SO₄ (or MgSO₄) to the organic solution in a flask. Stir for 5–10 minutes; the solvent becomes clearer as water is absorbed. If the desiccant clumps, add more (indicates insufficient desiccant). Once dissolved, filter the solution through a fluted filter paper into a clean flask. The filtrate is now dry (usually < 0.1% water residual). Volatile organic solvent can then be removed by gentle heating or distillation.'
      }
    },
    {
      id: 'h-filtration-vacuum',
      type: 'heading',
      data: { text: 'Filtration Under Reduced Pressure (Buchner Funnel)', level: 2 }
    },
    {
      id: 'p-buchner-intro',
      type: 'paragraph',
      data: {
        text: 'Vacuum (Buchner) filtration uses a partial vacuum to speed up collection of crystals or precipitates from a mother liquor. A special flat-bottomed funnel (Buchner funnel) with perforated base sits on a filter flask; filter paper lines the funnel bed. The flask is connected to a vacuum pump or aspirator (water-jet pump). Negative pressure pulls liquid through the filter quickly, leaving crystals behind. This is much faster than gravity filtration (2–3 minutes vs 20–30 minutes) and gives drier crystals.'
      }
    },
    {
      id: 'list-buchner-procedure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Assemble Buchner funnel on filter flask; clamp flask securely',
          'Place a circle of filter paper on the funnel bed; wet it slightly with distilled water to seal',
          'Connect flask to vacuum source (aspirator or electric pump) via a side-arm connection',
          'Turn on vacuum; negative pressure holds filter paper down',
          'Pour the mixture (crystals + mother liquor) into the funnel',
          'Vacuum pulls liquid through filter; crystals are left on paper',
          'Once all liquid is through, wash crystals with small portions of ice-cold solvent to remove impurities',
          'Continue vacuum for 1–2 minutes after rinsing to remove excess solvent',
          'Turn off vacuum; remove the filter paper with crystals and transfer to oven for drying',
          'Crystals dry quickly under vacuum, often ready in 10–15 minutes vs hours for gravity filtration'
        ]
      }
    },
    {
      id: 'h-purity-assessment',
      type: 'heading',
      data: { text: 'Assessing Purity of Purified Compounds', level: 2 }
    },
    {
      id: 'p-purity-assessment',
      type: 'paragraph',
      data: {
        text: 'Several techniques confirm that a purified organic compound is pure and identify any remaining impurities. Melting point and boiling point are simple physical constants; impurities change these values predictably. TLC (thin-layer chromatography) visually separates components and shows if multiple compounds are present. NMR and IR also assess purity but are more specialised.'
      }
    },
    {
      id: 'h-melting-boiling-point',
      type: 'heading',
      data: { text: 'Melting Point and Boiling Point', level: 3 }
    },
    {
      id: 'p-melting-point-purity',
      type: 'paragraph',
      data: {
        text: 'A pure solid has a characteristic, sharp melting point (range < 2°C, e.g. 135.0–136.0°C). Impurities lower the melting point and broaden the range (e.g. 128–145°C for mixed crystals). The more impurity, the greater the depression. Melting point apparatus: place crystals in a capillary tube and heat at ~1°C per minute; note when crystals first show liquid (onset) and when fully melted (endpoint). The difference (endpoint − onset) ≤ 2°C indicates high purity. A boiling point measured similarly (liquid heated slowly, temperature at which first drops of vapour condense) indicates purity for liquids: sharp boiling point = pure, broad range = impure.'
      }
    },
    {
      id: 'h-tlc',
      type: 'heading',
      data: { text: 'Thin-Layer Chromatography (TLC)', level: 3 }
    },
    {
      id: 'p-tlc-intro',
      type: 'paragraph',
      data: {
        text: 'TLC is a rapid, visual technique for separating and assessing purity. A small amount of sample is spotted near the bottom of a TLC plate (glass or plastic coated with silica gel). The plate is placed in a solvent (mobile phase) which rises by capillarity, carrying compounds upward. Different compounds travel different distances (Rf values). The plate is removed, solvent evaporated, and spots visualised (under UV light if fluorescent, or by staining). A pure compound gives a single spot; a mixture shows multiple spots.'
      }
    },
    {
      id: 'list-tlc-procedure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Draw a pencil line ~1 cm from the bottom of TLC plate (baseline)',
          'Dissolve sample in a small volume of organic solvent (e.g. ethanol); must be very dilute',
          'Using a capillary tube, spot the solution on the baseline (aim for a small point, 2–3 mm diameter)',
          'Allow the spot to dry (< 1 minute)',
          'Pour solvent mixture into a TLC chamber (tall, narrow container); solvent level < baseline',
          'Place the TLC plate in the chamber with baseline in solvent; solvent wicks upward',
          'Allow solvent to rise to ~1 cm from the top; remove the plate',
          'Mark the solvent front (highest point reached) with pencil',
          'Visualise spots: under UV254 lamp (if fluorescent), or spray with visualising reagent (e.g. 2,4-DNP for carbonyls, iodine for many organics)',
          'Spots appear as coloured or UV-absorbing points; calculate Rf = distance of spot from baseline / distance of solvent front from baseline'
        ]
      }
    },
    {
      id: 'callout-tlc-purity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'TLC for Purity Assessment',
        text: 'Pure compound: 1 spot (or 1 main spot with very faint impurities < 5%)\nMixture: 2+ spots at different Rf values (different compounds, different polarity)\nRf = (distance of spot) / (distance of solvent front)\nExample: aspirin pure if 1 spot at Rf ~0.6; salicylic acid impurity appears as second spot at Rf ~0.3 (more polar, lower Rf)\nSolvent choice affects Rf: polar solvents move all compounds up (Rf → 1); non-polar solvents leave compounds at baseline (Rf → 0). Choose solvent to give Rf 0.3–0.7 for best separation.'
      }
    },
    {
      id: 'checklist-purification',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand when to use distillation vs reflux vs recrystallisation', checked: false },
          { text: 'I can assemble and use a distillation apparatus safely', checked: false },
          { text: 'I can set up a reflux apparatus and explain how it works', checked: false },
          { text: 'I can choose an appropriate recrystallisation solvent', checked: false },
          { text: 'I can perform liquid-liquid extraction using a separatory funnel', checked: false },
          { text: 'I know common drying agents (Na₂SO₄, MgSO₄) and their use', checked: false },
          { text: 'I can use Buchner filtration to collect crystals under vacuum', checked: false },
          { text: 'I can interpret melting point and TLC to assess purity', checked: false }
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
        text: 'Understand: Purification techniques exploit different physical properties: distillation (boiling point), recrystallisation (solubility), extraction (partition coefficient), drying (water removal).\n\nApply: Describe how to purify a liquid organic product using distillation and drying with anhydrous CaCl₂.\n\nAnalyze: Why must the recrystallisation solvent dissolve the compound when hot but not when cold?\n\nEvaluate: A student obtains a pure product with a sharp melting point but only 30% yield. Suggest where losses may have occurred and how to improve.'
      },
      terms: []
    },
    {
      id: 'summary-purification',
      type: 'summary',
      data: {
        text: 'Purification techniques: distillation (separate by boiling point, product in receiving flask), reflux (heat prolonged without solvent loss, product returns to reaction flask), recrystallisation (dissolve hot, cool to crystallise, collect by filtration), extraction (separate between immiscible layers using separatory funnel), drying (Na₂SO₄/MgSO₄ remove water). Purity tests: melting point (sharp = pure), boiling point, TLC (single spot = pure). Vacuum filtration (Buchner funnel) faster than gravity filtration.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-distillation-intro',
        prompt: 'Explain distillation and describe the purpose of the condenser and thermometer in the apparatus.'
      },
      {
        id: 'cue-2',
        blockId: 'callout-reflux-key',
        prompt: 'What is the key difference between distillation and reflux? When would you use each?'
      },
      {
        id: 'cue-3',
        blockId: 'list-recrystallisation-steps-detailed',
        prompt: 'Outline the steps of recrystallisation from choosing a solvent to drying the crystals.'
      },
      {
        id: 'cue-4',
        blockId: 'list-extraction-procedure',
        prompt: 'Describe how to use a separatory funnel to extract an organic product from an aqueous solution.'
      },
      {
        id: 'cue-5',
        blockId: 'p-tlc-intro',
        prompt: 'What does a single spot on a TLC plate indicate? How would a mixture appear on the same plate?'
      }
    ],
    summaryText: 'Distillation: separate by boiling point, product in separate flask. Reflux: heat under condenser, vapour returns to reaction flask. Recrystallisation: hot solvent → dissolve → cool → crystallise. Extraction: separate immiscible layers (aqueous/organic) using separatory funnel. Drying: use Na₂SO₄ or MgSO₄ to remove water. Purity: melting point (sharp 2°C range = pure), TLC (1 spot = pure, multiple spots = mixture).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Organic Purification Techniques in A-Level Practical Chemistry',
      detail: 'Essential laboratory skills for isolating and purifying organic compounds; used in nearly all organic synthesis practicals.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15) — Practical Skills',
      tags: ['purification', 'practical', 'distillation', 'recrystallisation', 'extraction']
    }
  ]
};
