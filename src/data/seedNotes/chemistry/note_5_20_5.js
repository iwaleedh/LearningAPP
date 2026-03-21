export const note_chemistry_5_20_5 = {
  blocks: [
    {
      id: 'obj-purification-techniques',
      type: 'objective',
      data: {
        text: 'Apply laboratory techniques to purify organic compounds: heating under reflux, simple/fractional/steam distillation, solvent extraction, washing, drying (desiccator/anhydrous salts), recrystallisation, and vacuum filtration (Buchner/Hirsch funnel); measure purity using melting point (capillary tube), boiling point, and TLC; understand the limitation that different compounds may share the same mp/bp; conduct risk assessments identifying hazards, risks, and control measures for reactants, products, and intermediates.'
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
      id: 'svg-distillation-apparatus',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 300' style='font-family:Arial,sans-serif;background:#f0f9ff;border-radius:8px'>
  <text x='110' y='24' font-size='13' font-weight='bold' fill='#1e3a5f'>Simple Distillation Apparatus</text>
  <text x='80' y='39' font-size='9' fill='#6b7280'>vapour travels along condenser and is collected as distillate in a separate flask</text>
  <!-- Round-bottom flask (left) -->
  <ellipse cx='75' cy='220' rx='52' ry='38' fill='#1e3a8a' stroke='#1d4ed8' stroke-width='2'/>
  <line x1='56' y1='185' x2='52' y2='162' stroke='#1d4ed8' stroke-width='2'/>
  <line x1='94' y1='185' x2='98' y2='162' stroke='#1d4ed8' stroke-width='2'/>
  <line x1='52' y1='162' x2='98' y2='162' stroke='#1d4ed8' stroke-width='2'/>
  <!-- Still head horizontal arm -->
  <line x1='75' y1='150' x2='150' y2='150' stroke='#1d4ed8' stroke-width='2'/>
  <!-- Thermometer (vertical) in still head -->
  <line x1='75' y1='120' x2='75' y2='153' stroke='#374151' stroke-width='2'/>
  <ellipse cx='75' cy='117' rx='5' ry='8' fill='#ef4444'/>
  <text x='14' y='115' font-size='9' fill='#374151'>thermometer</text>
  <text x='12' y='127' font-size='9' fill='#374151'>(bulb at side arm)</text>
  <!-- Liebig condenser outer jacket (angled right-down) -->
  <line x1='150' y1='143' x2='328' y2='215' stroke='#1d4ed8' stroke-width='2'/>
  <line x1='150' y1='157' x2='328' y2='229' stroke='#1d4ed8' stroke-width='2'/>
  <!-- Inner tube (vapour channel) -->
  <line x1='151' y1='148' x2='327' y2='220' stroke='#93c5fd' stroke-width='5' opacity='0.7'/>
  <!-- Water in arrow (bottom/right of condenser) -->
  <line x1='328' y1='219' x2='352' y2='219' stroke='#0ea5e9' stroke-width='1.5'/>
  <polygon points='344,215 352,219 344,223' fill='#0ea5e9'/>
  <text x='354' y='223' font-size='9' fill='#0ea5e9'>water in</text>
  <!-- Water out arrow (top/left of condenser) -->
  <line x1='150' y1='148' x2='130' y2='136' stroke='#0ea5e9' stroke-width='1.5'/>
  <polygon points='138,132 130,136 138,140' fill='#0ea5e9'/>
  <text x='88' y='131' font-size='9' fill='#0ea5e9'>water out</text>
  <!-- Condenser label -->
  <text x='200' y='162' font-size='9' fill='#374151' transform='rotate(21,200,162)'>Liebig condenser (water-cooled)</text>
  <!-- Adaptor to collection flask -->
  <line x1='328' y1='222' x2='346' y2='238' stroke='#1d4ed8' stroke-width='2'/>
  <!-- Collection flask (right) -->
  <ellipse cx='375' cy='264' rx='40' ry='28' fill='#0a2e1a' stroke='#15803d' stroke-width='2'/>
  <text x='348' y='298' font-size='9' fill='#15803d'>collecting flask</text>
  <text x='362' y='308' font-size='9' fill='#15803d'>(distillate)</text>
  <!-- Flask labels -->
  <text x='28' y='205' font-size='9' fill='#1d4ed8'>reaction</text>
  <text x='30' y='216' font-size='9' fill='#1d4ed8'>mixture</text>
  <text x='46' y='266' font-size='10' fill='#dc2626'>▲ heat</text>
  <!-- Vapour arrow -->
  <text x='108' y='145' font-size='9' fill='#7c3aed'>→ vapour</text>
</svg>`,
        caption: 'Simple distillation: condenser is angled downward; product collected in separate receiving flask. Watch thermometer — a temperature spike signals a new fraction; swap the receiving flask at that point.'
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
      id: 'svg-reflux-apparatus',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 370' style='font-family:Arial,sans-serif;background:#f0f9ff;border-radius:8px'>
  <text x='62' y='22' font-size='13' font-weight='bold' fill='#1e3a5f'>Reflux Apparatus</text>
  <text x='30' y='38' font-size='9' fill='#6b7280'>vapour condenses in vertical condenser and drips back into reaction flask</text>
  <!-- Round-bottom flask -->
  <ellipse cx='150' cy='305' rx='58' ry='40' fill='#1e3a8a' stroke='#1d4ed8' stroke-width='2'/>
  <!-- Flask neck -->
  <line x1='128' y1='268' x2='134' y2='248' stroke='#1d4ed8' stroke-width='2'/>
  <line x1='172' y1='268' x2='166' y2='248' stroke='#1d4ed8' stroke-width='2'/>
  <line x1='134' y1='248' x2='166' y2='248' stroke='#1d4ed8' stroke-width='2'/>
  <!-- Anti-bumping granules -->
  <circle cx='135' cy='300' r='3' fill='#6b7280'/>
  <circle cx='150' cy='306' r='3' fill='#6b7280'/>
  <circle cx='164' cy='298' r='3' fill='#6b7280'/>
  <text x='80' y='330' font-size='8' fill='#6b7280'>anti-bumping granules</text>
  <!-- Condenser outer jacket (vertical, dashed) -->
  <rect x='132' y='62' width='36' height='186' rx='4' fill='none' stroke='#93c5fd' stroke-width='1.2' stroke-dasharray='5,3'/>
  <!-- Inner condenser tube -->
  <rect x='142' y='57' width='16' height='192' rx='3' fill='#1e3a8a' stroke='#1d4ed8' stroke-width='1.5'/>
  <!-- Water in at bottom of outer jacket -->
  <line x1='132' y1='215' x2='105' y2='215' stroke='#0ea5e9' stroke-width='1.5'/>
  <polygon points='114,211 105,215 114,219' fill='#0ea5e9'/>
  <text x='32' y='218' font-size='9' fill='#0ea5e9'>cold water in</text>
  <!-- Water out at top of outer jacket -->
  <line x1='168' y1='95' x2='195' y2='95' stroke='#0ea5e9' stroke-width='1.5'/>
  <polygon points='187,91 195,95 187,99' fill='#0ea5e9'/>
  <text x='197' y='98' font-size='9' fill='#0ea5e9'>water out</text>
  <!-- Vapour arrow (up inside condenser) -->
  <text x='133' y='170' font-size='9' fill='#7c3aed'>↑ vapour</text>
  <!-- Condensate arrow (down) -->
  <text x='133' y='200' font-size='9' fill='#059669'>↓ condensate</text>
  <text x='120' y='246' font-size='9' fill='#059669'>returns to flask</text>
  <!-- Condenser label -->
  <text x='194' y='155' font-size='9' fill='#374151'>vertical</text>
  <text x='188' y='166' font-size='9' fill='#374151'>condenser</text>
  <!-- Flask label -->
  <text x='95' y='282' font-size='9' fill='#1d4ed8'>reaction flask</text>
  <text x='108' y='353' font-size='10' fill='#dc2626'>▲ water bath / mantle</text>
</svg>`,
        caption: 'Reflux apparatus: condenser is vertical — vapour condenses and returns to the reaction flask. Cold water flows in at bottom, out at top (counter-current). Anti-bumping granules prevent violent boiling.'
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
      id: 'h-fractional-distillation',
      type: 'heading',
      data: { text: 'Fractional Distillation: Separating Liquids with Similar Boiling Points', level: 2 }
    },
    {
      id: 'p-fractional-distillation',
      type: 'paragraph',
      data: {
        text: 'Fractional distillation is used when the boiling points of the liquids in a mixture are similar (typically less than ~20–25°C apart). Simple distillation cannot separate these — the fractions overlap. A fractionating column inserted between the flask and the condenser provides surfaces for repeated condensation and re-evaporation, greatly improving separation.'
      }
    },
    {
      id: 'list-fractional-distillation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Fractionating column: inserted between flask and condenser; filled with glass beads or broken glass that act as condensation surfaces',
          'As hot vapour rises through the column, it condenses on the glass beads and is re-evaporated by the next portion of hot vapour — repeated condensing and re-evaporation acts as many mini-distillations',
          'The more volatile component (lower bp) reaches the top first and passes into the condenser',
          'Less volatile components remain liquid lower down in the column and drip back into the flask',
          'Result: much sharper separation than simple distillation even for similar boiling points',
          'Example: crude oil fractional distillation — same principle, industrial scale fractionating column'
        ]
      }
    },
    {
      id: 'table-distillation-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Simple Distillation', 'Fractional Distillation'],
        rows: [
          ['Boiling point difference needed', '> 25°C apart', '< 25°C apart (similar bp)', ],
          ['Fractionating column', 'No', 'Yes (filled with glass beads/broken glass)'],
          ['Condenser orientation', 'Angled downward', 'Angled downward (same)'],
          ['Collection', 'Fractions collected at steady temperatures', 'Sharper fraction separation possible'],
          ['Example use', 'Ethanol from water (bp 78 vs 100°C)', 'Separating petroleum fractions, ethanol/water close mixture']
        ],
        caption: 'Simple vs fractional distillation — choice depends on boiling point difference'
      }
    },
    {
      id: 'h-steam-distillation',
      type: 'heading',
      data: { text: 'Steam Distillation: Separating Insoluble Liquids at Low Temperature', level: 2 }
    },
    {
      id: 'p-steam-distillation',
      type: 'paragraph',
      data: {
        text: 'Steam distillation is used to separate an organic liquid that is immiscible (insoluble) in water from an aqueous mixture. Steam is bubbled through the reaction mixture via a tube. The steam causes agitation at the surface of both liquids, and both components evaporate together. Crucially, the immiscible liquid can be removed at a temperature much lower than its own boiling point — the steam lowers the effective boiling point of the mixture.'
      }
    },
    {
      id: 'list-steam-distillation-points',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Used for: separating an insoluble (immiscible) liquid from an aqueous solution',
          'Steam is passed in through a tube into the base of the reaction mixture',
          'Steam causes agitation of the immiscible mixture — creates turbulence at the liquid surface',
          'Both liquids (water + organic) evaporate together from the agitated surface',
          'KEY advantage: the organic liquid boils at a temperature much LOWER than its normal boiling point — avoids decomposing thermally-sensitive compounds',
          'The distillate (water + organic) is collected, then the two immiscible layers separated using a separating funnel',
          'Example use: extracting essential oils (e.g. lavender, eucalyptus) which are immiscible with water and have high boiling points'
        ]
      }
    },
    {
      id: 'svg-steam-distillation',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 260' style='font-family:Arial,sans-serif;background:#f0f9ff;border-radius:8px'>
  <text x='140' y='22' font-size='13' font-weight='bold' fill='#1e3a5f'>Steam Distillation</text>
  <!-- Steam generator flask (left) -->
  <ellipse cx='55' cy='165' rx='40' ry='30' fill='#44370a' stroke='#ca8a04' stroke-width='2'/>
  <text x='22' y='200' font-size='9' fill='#ca8a04'>steam</text>
  <text x='18' y='210' font-size='9' fill='#ca8a04'>generator</text>
  <text x='26' y='220' font-size='9' fill='#ca8a04'>(heated)</text>
  <!-- Steam pipe right into reaction flask -->
  <line x1='95' y1='160' x2='168' y2='160' stroke='#ca8a04' stroke-width='2' stroke-dasharray='5,2'/>
  <polygon points='160,156 168,160 160,164' fill='#ca8a04'/>
  <text x='100' y='153' font-size='9' fill='#ca8a04'>steam →</text>
  <!-- Reaction flask (centre) containing immiscible layers -->
  <ellipse cx='215' cy='170' rx='52' ry='38' fill='#2d2d72' stroke='#4338ca' stroke-width='2'/>
  <!-- Two liquid layers inside -->
  <ellipse cx='215' cy='163' rx='43' ry='12' fill='#0c4a6e' opacity='0.85'/>
  <text x='186' y='166' font-size='8' fill='#0369a1'>organic layer</text>
  <ellipse cx='215' cy='182' rx='43' ry='13' fill='#0a3020' opacity='0.85'/>
  <text x='192' y='186' font-size='8' fill='#15803d'>water layer</text>
  <!-- Agitation bubbles from steam -->
  <circle cx='200' cy='150' r='3' fill='none' stroke='#7c3aed' stroke-width='1.2'/>
  <circle cx='218' cy='144' r='4' fill='none' stroke='#7c3aed' stroke-width='1.2'/>
  <circle cx='233' cy='148' r='3' fill='none' stroke='#7c3aed' stroke-width='1.2'/>
  <text x='192' y='140' font-size='8' fill='#7c3aed'>agitation</text>
  <!-- Reaction flask neck and still head -->
  <line x1='215' y1='133' x2='272' y2='133' stroke='#4338ca' stroke-width='2'/>
  <!-- Condenser (angled right-down) -->
  <line x1='272' y1='127' x2='372' y2='173' stroke='#4338ca' stroke-width='2'/>
  <line x1='272' y1='139' x2='372' y2='185' stroke='#4338ca' stroke-width='2'/>
  <line x1='273' y1='131' x2='371' y2='177' stroke='#93c5fd' stroke-width='5' opacity='0.7'/>
  <text x='290' y='143' font-size='9' fill='#374151' transform='rotate(25,290,143)'>condenser</text>
  <!-- Collection flask (right) -->
  <ellipse cx='400' cy='215' rx='33' ry='22' fill='#0a2e1a' stroke='#16a34a' stroke-width='2'/>
  <line x1='372' y1='179' x2='382' y2='200' stroke='#4338ca' stroke-width='2'/>
  <text x='377' y='243' font-size='9' fill='#16a34a'>distillate</text>
  <text x='368' y='253' font-size='9' fill='#16a34a'>(two layers →</text>
  <text x='368' y='263' font-size='9' fill='#16a34a'>sep. funnel)</text>
  <!-- Key callout box -->
  <rect x='80' y='55' width='230' height='38' rx='4' fill='#78350f' stroke='#f59e0b' stroke-width='1'/>
  <text x='90' y='71' font-size='10' fill='#92400e'>Key: organic liquid distils at temperature</text>
  <text x='90' y='85' font-size='10' fill='#92400e' font-weight='bold'>LOWER than its own boiling point</text>
</svg>`,
        caption: 'Steam distillation: steam bubbled through immiscible mixture → agitation causes evaporation at temperature below the organic compound\'s normal boiling point. Distillate collected then separated in a separating funnel.'
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
      id: 'h-washing',
      type: 'heading',
      data: { text: 'Washing: Removing Impurities from Solids and Liquids', level: 2 }
    },
    {
      id: 'p-washing-intro',
      type: 'paragraph',
      data: {
        text: 'Washing is a purification technique used to remove impurities from both solids and liquids. The key principle is that the washing solvent dissolves only the impurities — keeping as much of the desired product as possible. For solids, ice-cold solvent is used to avoid dissolving the product. For liquids, washing is carried out in a separating funnel similarly to solvent extraction.'
      }
    },
    {
      id: 'list-washing-technique',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Washing solvents used: water, organic solvent, or sodium carbonate solution — choice depends on the impurity',
          'Excess acid impurity: wash with sodium carbonate (Na₂CO₃) solution — acid reacts, dissolves into the aqueous wash layer',
          'Non-polar impurities: wash with non-polar organic solvent (e.g. cyclohexane, diethyl ether)',
          'Water-soluble impurities: wash with distilled water',
          'Washing a solid: stir/mix with chosen solvent → filter to remove impurities that dissolved into the solvent',
          'Washing a liquid product: add washing solvent to separating funnel → shake → allow layers to separate → drain off the wash layer containing impurities',
          'Repeat washing 2–3 times with fresh solvent for more complete removal',
          'After washing a liquid, always dry the organic layer (Na₂SO₄ or MgSO₄) to remove residual water from the wash'
        ]
      }
    },
    {
      id: 'callout-washing-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Washing — Exam Key Points',
        text: 'The washing solvent must be:\n(1) Immiscible with the product (for liquid washing) so two clear layers form\n(2) Able to dissolve the impurities but NOT the desired product\n\nCommon example: reaction produces an ester in the presence of excess acid catalyst (H₂SO₄(aq)) → wash with Na₂CO₃(aq) to neutralise and remove the acid\n  RCOOH + Na₂CO₃ → RCOONa (water-soluble) + CO₂ + H₂O\n\nNOTE: after washing you will see bubbles (CO₂) if washing with carbonate.'
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
      id: 'p-desiccator',
      type: 'paragraph',
      data: {
        text: 'A desiccator is used to dry solid organic compounds. It is a sealed glass jar with a drying agent (such as anhydrous calcium chloride or silica gel) placed in the bottom. The organic solid is placed on a shelf or in an open dish inside the jar. The drying agent absorbs all water vapour inside the sealed container, leaving the solid completely dry. An alternative for solids is simply leaving them in a warm place. For a liquid, the drying agent is added directly to the liquid, then removed by decanting (careful pouring off the liquid) or by filtration through fluted filter paper.'
      }
    },
    {
      id: 'h-filtration-vacuum',
      type: 'heading',
      data: { text: 'Filtration Under Reduced Pressure (Buchner / Hirsch Funnel)', level: 2 }
    },
    {
      id: 'p-buchner-intro',
      type: 'paragraph',
      data: {
        text: 'Vacuum (Buchner) filtration uses a partial vacuum to speed up collection of crystals or precipitates from a mother liquor. Two types of funnel are used: the Buchner funnel (larger, flat circular base with perforated plate — most common for bulk filtration) and the Hirsch funnel (smaller conical shape, used for smaller scale). Both sit on a filter flask and are connected to a vacuum pump or aspirator (water-jet pump). Negative pressure pulls liquid through the filter quickly, leaving crystals behind. This is much faster than gravity filtration (2–3 minutes vs 20–30 minutes) and gives drier crystals.'
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
        text: 'A pure solid has a characteristic, sharp melting point (range < 2°C, e.g. 135.0–136.0°C). Impurities lower the melting point and broaden the range (e.g. 128–145°C for mixed crystals). The more impurity, the greater the depression.\n\nCapillary tube method: pack a small amount of the solid into a capillary tube sealed at one end (by briefly heating to fuse the glass tip). Attach the tube to a thermometer using a rubber band. Immerse both in a liquid bath (e.g. paraffin oil) on a hotplate or Meldometer apparatus. Heat slowly at ~1°C per minute. Note the temperature at which crystals first begin to melt (onset) and when all solid has melted (endpoint). A range of ≤ 2°C indicates a pure compound. Modern electric melting point apparatus uses the same capillary tube — simply insert and observe through the viewing window while the block heats automatically.\n\nA boiling point similarly: heat liquid slowly, observe the temperature at which vapour first forms and rises steadily — that temperature is the boiling point.'
      }
    },
    {
      id: 'callout-mp-limitation',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitation: Same Melting/Boiling Point ≠ Same Compound',
        text: 'Different organic compounds can sometimes have the same melting or boiling point.\nExample: aspirin (mp 135°C) and another compound may share the same mp by coincidence.\n\nWhen melting/boiling point alone cannot identify the compound:\n→ Use mass spectrometry (molecular mass + fragmentation pattern)\n→ Use IR spectroscopy (functional group fingerprint)\n→ Use NMR spectroscopy (structure of carbon skeleton + hydrogen environments)\n\nThese techniques also reveal impurities that mp/bp cannot detect (e.g. a trace of a compound with the same mp would not affect the range).'
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
      id: 'h-ppq-june-2017',
      type: 'heading',
      data: { text: 'PPQ — June 2017: Recrystallisation (5 marks)', level: 2 }
    },
    {
      id: 'p-ppq-2017-intro',
      type: 'paragraph',
      data: {
        text: 'Question: "An impure sample of mandelic acid is to be purified by recrystallisation using methanol as the solvent. The steps of recrystallisation are summarised below. For each step, state the purpose, referring to any words in bold." (5 marks)'
      }
    },
    {
      id: 'callout-ppq-2017-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ June 2017: Recrystallisation of Mandelic Acid in Methanol',
        text: 'STEP 1: Dissolve the sample in the MINIMUM AMOUNT of HOT methanol\nPurpose: using the minimum amount of hot solvent forms a SATURATED solution. A saturated solution ensures that when cooled, crystals will form. Using excess solvent would make the solution too dilute → fewer/no crystals would form on cooling.\n\nSTEP 2: Filter the HOT solution\nPurpose: hot filtration removes INSOLUBLE impurities (undissolved solids). Filtering HOT ensures maximum amount of mandelic acid remains dissolved in solution — if it cooled, mandelic acid would crystallise out on the filter paper and be lost.\n\nSTEP 3: Allow the filtrate to cool in an ICE BATH\nPurpose: cooling causes mandelic acid to crystallise out (less soluble when cold). Using an ice bath ensures the MAXIMUM YIELD of crystals by reducing temperature as low as possible. Note: this is NOT about speeding up crystallisation — slow cooling actually gives purer, larger crystals — but the ice bath maximises total yield.\n\nSTEP 4: Filter using SUCTION FILTRATION (Buchner funnel)\nPurpose: suction filtration collects the crystals on the filter paper and drains away the SOLUBLE (dissolved) impurities that are in the mother liquor. Washing with ice-cold solvent removes any remaining soluble impurities from the crystal surface without re-dissolving the crystals.\n\nSummary of purposes:\n  Step 1 → saturated solution → maximum crystallisation on cooling\n  Step 2 → remove insoluble impurities; done hot to prevent loss of product\n  Step 3 → maximum yield of crystals (not about rate)\n  Step 4 → remove soluble/dissolved impurities'
      }
    },
    {
      id: 'h-hazards-risks',
      type: 'heading',
      data: { text: 'Hazards, Risks and Control Measures', level: 2 }
    },
    {
      id: 'p-hazards-intro',
      type: 'paragraph',
      data: {
        text: 'Before any organic synthesis practical, a risk assessment is required. Three terms must be clearly distinguished: a hazard is a property of a substance, a risk is the potential harm from using it, and a control measure is a step taken to minimise that risk. Chemists must consider not just the starting materials but also all intermediates and products — some may be more hazardous than the reactants.'
      }
    },
    {
      id: 'table-hazard-risk-control',
      type: 'comparisonTable',
      data: {
        headers: ['Term', 'Definition', 'Example'],
        rows: [
          ['Hazard', 'A property of the substance itself that could cause harm', '"Flammable", "toxic", "corrosive", "oxidising"'],
          ['Risk', 'The possible harmful outcome from working with the hazard', '"Skin burns if conc. H₂SO₄ is splashed onto hands"'],
          ['Control measure', 'Action taken to reduce the risk to an acceptable level', '"Wear nitrile gloves and safety goggles; use fume cupboard"']
        ],
        caption: 'Hazard, risk and control measure — clear distinction required in exam answers'
      }
    },
    {
      id: 'list-hazards-substances',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Must assess ALL THREE categories: REACTANTS + PRODUCTS + INTERMEDIATES — not just the starting material',
          'Concentrated acids (H₂SO₄, HCl, HNO₃): corrosive, causes severe burns — goggles, gloves, fume cupboard; add acid to water slowly',
          'Flammable solvents (ether, ethanol, acetone): fire/explosion hazard when near naked flames — switch off Bunsen burners; use water bath or electric mantle',
          'Potassium cyanide (KCN) / HCN: acutely toxic (even small amounts lethal); risk of poisoning — fume cupboard essential; no skin contact; emergency protocol in place',
          'Organic halogens (PCl₅, SOCl₂): fumes, corrosive vapour — fume cupboard; dispose carefully',
          'LiAlH₄: reacts explosively with water; flammable H₂ produced — strictly anhydrous conditions; no water nearby; small quantities',
          'Oxidising agents (K₂Cr₂O₇, KMnO₄): toxic, potential carcinogen (Cr(VI)) — gloves; limited exposure; dispose as hazardous waste'
        ]
      }
    },
    {
      id: 'callout-control-measures',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Standard Control Measures (Always Applied in Organic Practicals)',
        text: '• Safety goggles (splash protection for eyes)\n• Nitrile gloves (chemical resistance to most organic solvents/acids)\n• Laboratory coat (protect clothing and skin)\n• Fume cupboard: required for volatile toxic substances (HCN/KCN, conc. acids, acyl chlorides, organic halides)\n• Electric mantle or water bath instead of naked flame when using flammable solvents\n• Fire extinguisher (CO₂ type for organic solvent fires — never water)\n• Emergency eye-wash station and cold water source nearby\n• No eating, drinking, or applying cosmetics in the lab\n• Read Safety Data Sheet (SDS/MSDS) for each reagent before starting\n\nGHS hazard symbols on reagent bottles give at-a-glance hazard information (flame = flammable, skull = toxic, corrosion = corrosive, exclamation = irritant/harmful).'
      }
    },
    {
      id: 'callout-risk-assessment-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Risk Assessment Example: Preparation of Ethyl Ethanoate',
        text: 'Reaction: CH₃CH₂OH + CH₃COOH (H₂SO₄ catalyst, heat) → CH₃COOC₂H₅ + H₂O\n\nREACTANTS:\n• Ethanol: hazard = flammable liquid (bp 78°C); risk = fire/explosion near flame; control = no Bunsen, use water bath\n• Glacial acetic acid: hazard = corrosive, pungent vapour; risk = skin/eye burns, respiratory irritation; control = goggles, gloves, fume cupboard\n• Conc. H₂SO₄ (catalyst): hazard = highly corrosive, exothermic with water; risk = severe burns; control = add drop by drop, goggles, gloves\n\nINTERMEDIATES: none significant here\n\nPRODUCT:\n• Ethyl ethanoate: hazard = flammable (bp 77°C), vapour irritates lungs; risk = fire hazard during distillation; control = electric mantle for distillation, fume cupboard\n\nOverall control: goggles + gloves + lab coat + water bath + fume cupboard at collection step'
      }
    },
    {
      id: 'checklist-purification',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe reflux: vertical condenser; vapour condenses and returns to flask', checked: false },
          { text: 'I understand simple distillation: angled condenser; product collected in separate flask; swap flask when temperature spikes', checked: false },
          { text: 'I know fractional distillation uses a fractionating column (glass beads) for similar-bp liquids', checked: false },
          { text: 'I can explain steam distillation: steam bubbled through immiscible liquid; boils BELOW its normal bp', checked: false },
          { text: 'I can perform liquid-liquid extraction using a separating funnel (shake → layers → drain)', checked: false },
          { text: 'I can describe washing: use Na₂CO₃ to remove excess acid; solvent dissolves only impurities', checked: false },
          { text: 'I know drying agents (Na₂SO₄, MgSO₄, CaCl₂) and how to remove them (decant or filter)', checked: false },
          { text: 'I can describe desiccator use: sealed glass jar, drying agent at bottom, absorbs water vapour', checked: false },
          { text: 'I can choose an appropriate recrystallisation solvent and explain each step with its purpose', checked: false },
          { text: 'PPQ June 2017: step 1 = saturated solution; step 2 = hot filter (keep product in solution); step 3 = ice bath (max yield); step 4 = suction filter (remove soluble impurities)', checked: false },
          { text: 'I can use Buchner or Hirsch funnel for vacuum filtration', checked: false },
          { text: 'I can use the capillary tube method to determine melting point; pure = ≤2°C range', checked: false },
          { text: 'I know the limitation: different compounds may share same mp/bp → use MS/IR/NMR to confirm identity', checked: false },
          { text: 'I can interpret TLC: 1 spot = pure; Rf = distance of spot / distance of solvent front', checked: false },
          { text: 'I distinguish hazard / risk / control measure and assess all three: reactants + products + intermediates', checked: false }
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
        text: 'Reflux: vertical condenser, vapour returns to flask (prolonged heating without solvent loss). Simple distillation: angled condenser, distillate collected separately (bp difference > 25°C). Fractional distillation: fractionating column with glass beads for similar-bp mixtures. Steam distillation: steam bubbled through immiscible liquid; distils BELOW normal bp. Washing: dissolve impurities in immiscible solvent (Na₂CO₃ for excess acid). Drying: anhydrous Na₂SO₄/MgSO₄ in solution, or desiccator for solids. Recrystallisation: minimum hot solvent → saturated solution → hot filter (remove insoluble impurities) → ice bath (maximum yield) → suction filter (remove soluble impurities). Purity: mp sharp ≤2°C = pure; same mp/bp for different compounds is possible → confirm with MS/IR/NMR. TLC: 1 spot = pure.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Reflux vs Distillation: Condenser Orientation",
        text: "Distillation: condenser angled downward (DIVERGES from vertical) \u2014 product escapes to receiving flask. Reflux: condenser VERTICAL \u2014 vapour immediately condenses and returns to reaction flask. Distillation separates by bp; reflux drives reaction forward. Critical apparatus design choice affecting experimental success."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-reflux-key',
        prompt: 'What is the key difference between distillation and reflux? Describe the condenser orientation in each and when you would use each technique.'
      },
      {
        id: 'cue-2',
        blockId: 'list-fractional-distillation',
        prompt: 'When is fractional distillation used instead of simple distillation? What is in the fractionating column and what does it do?'
      },
      {
        id: 'cue-3',
        blockId: 'p-steam-distillation',
        prompt: 'Explain how steam distillation works and state the key advantage over normal distillation for immiscible liquids.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-ppq-2017-worked',
        prompt: 'PPQ June 2017: State the purpose of each step in recrystallisation: (a) minimum hot solvent, (b) hot filtration, (c) cooling in ice bath, (d) suction filtration.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-mp-limitation',
        prompt: 'Why is melting point alone insufficient to identify an organic compound? What further analysis would you use?'
      },
      {
        id: 'cue-6',
        blockId: 'table-hazard-risk-control',
        prompt: 'Distinguish between hazard, risk, and control measure. Why must you consider intermediates and products — not just reactants — in a risk assessment?'
      }
    ],
    summaryText: 'Reflux: vertical condenser, vapour returns (prolonged heating). Simple distillation: angled condenser, distillate to separate flask (bp diff > 25°C). Fractional: fractionating column (glass beads) for similar bp. Steam: steam through immiscible liquid → distils BELOW normal bp. Washing: Na₂CO₃ removes excess acid; solvent dissolves only impurities. Drying: Na₂SO₄/MgSO₄ in solution; desiccator for solids. Recrystallisation: min hot solvent → saturated → hot filter (insoluble impurities) → ice bath (max yield) → suction filter (soluble impurities). PPQ 2017: 4 steps + purposes. MP limitation: same mp/bp possible for different compounds → confirm with MS/IR/NMR. TLC: 1 spot = pure.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Organic Purification Techniques in A-Level Practical Chemistry',
      detail: 'Essential laboratory skills for isolating and purifying organic compounds: reflux, simple/fractional/steam distillation, washing, solvent extraction, drying, recrystallisation, vacuum filtration, melting point determination, TLC, and hazard risk assessment. Covers PPQ June 2017 recrystallisation worked example.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15) — Practical Skills',
      tags: ['purification', 'practical', 'distillation', 'fractional-distillation', 'steam-distillation', 'reflux', 'recrystallisation', 'extraction', 'washing', 'drying', 'melting-point', 'TLC', 'hazards', 'PPQ-2017']
    }
  ]
};
