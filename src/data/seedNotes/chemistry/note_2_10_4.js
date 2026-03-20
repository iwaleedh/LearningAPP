/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 4
 * "Alcohols: Classification and reactions"
 * Source: Pearson Edexcel IAL Chemistry — Section 10C.1
 */
export const note_chemistry_2_10_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Classify alcohols as primary, secondary, or tertiary, understand their reaction with sodium, combustion, halogenation reactions, dehydration (elimination) to alkenes, and their industrial uses.' },
            terms: []
        },
        {
            id: 'h-classification',
            type: 'heading',
            data: { text: 'Classification of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'list-classification',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Primary (1°):</strong> The -OH group is on a carbon attached to 0 or 1 alkyl groups (e.g. ethanol, propan-1-ol).',
                    '<strong>Secondary (2°):</strong> The -OH group is on a carbon attached to 2 alkyl groups (e.g. propan-2-ol).',
                    '<strong>Tertiary (3°):</strong> The -OH group is on a carbon attached to 3 alkyl groups (e.g. 2-methylpropan-2-ol).'
                ]
            },
            terms: ['Primary alcohol', 'Secondary alcohol', 'Tertiary alcohol']
        },
        {
            id: 'h-physical-props',
            type: 'heading',
            data: { text: 'Physical Properties of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'p-bp-solubility',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Boiling points:</strong> Alcohols have significantly higher boiling points than alkanes of similar molar mass due to <strong>hydrogen bonding</strong> between the highly electronegative oxygen and the $\\delta+$ hydrogen on the –OH group. This requires more energy to overcome than London forces.',
                    '<strong>Solubility in water:</strong> Small alcohols (like methanol, ethanol, propanol) are completely soluble in water because they form hydrogen bonds with water molecules.',
                    '<strong>Effect of chain length:</strong> As the hydrocarbon chain gets longer, the molecule becomes increasingly non-polar. London forces between the long chains dominate, disrupting the hydrogen bonding lattice of water, so larger alcohols (e.g. pentanol, hexanol) are much less soluble or insoluble.'
                ]
            },
            terms: ['Hydrogen bonding', 'London forces']
        },
        {
            id: 'h-manufacture',
            type: 'heading',
            data: { text: 'Manufacture of Ethanol', level: 2 },
            terms: []
        },
        {
            id: 'table-manufacture',
            type: 'comparisonTable',
            data: {
                caption: 'Comparing Methods for Manufacturing Ethanol',
                headers: ['Feature', 'Hydration of Ethene', 'Fermentation of Sugars'],
                rows: [
                    ['<strong>Raw Material</strong>', 'Ethene (from cracking crude oil) — Finite resource', 'Carbohydrates/Sugars (e.g. sugar cane, maize) — Renewable resource'],
                    ['<strong>Reaction Conditions</strong>', '300 °C, 60 atm, solid H₃PO₄ catalyst', 'Warm (approx 35 °C), anaerobic (no air), yeast enzymes'],
                    ['<strong>Process Type</strong>', 'Continuous flow process (efficient for large scale)', 'Batch process (slower, less efficient)']
                ]
            },
            terms: ['Hydration', 'Fermentation']
        },
        {
            id: 'p-fermentation-details',
            type: 'paragraph',
            data: { text: '<strong>Fermentation details:</strong> Yeast undergoes anaerobic respiration, turning sugars (C₆H₁₂O₆) into ethanol (2C₂H₅OH) and carbon dioxide (2CO₂). The mixture must be kept anaerobic; otherwise, the ethanol will oxidise into ethanoic acid. Fermentation stops when the ethanol concentration hits ~15% because it kills the yeast. Fractional distillation is then required to purify the ethanol.' },
            terms: ['Anaerobic']
        },
        {
            id: 'p-hydration-details',
            type: 'paragraph',
            data: { text: '<strong>Addition across unsymmetrical alkenes:</strong> If reacting propene (CH₃CH=CH₂) with steam, you primarily obtain propan-2-ol, not propan-1-ol. This is because the hydrogen atom adds to the carbon already containing the most hydrogen atoms (Markovnikov\'s rule).' },
            terms: []
        },
        {
            id: 'h-combustion',
            type: 'heading',
            data: { text: 'Combustion', level: 2 },
            terms: []
        },
        {
            id: 'p-combustion',
            type: 'paragraph',
            data: { text: 'Alcohols combust completely in plenty of oxygen to produce carbon dioxide and water. They are highly flammable and often used as fuels or fuel additives. Example: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.' },
            terms: ['Combustion']
        },
        {
            id: 'h-halogenation',
            type: 'heading',
            data: { text: 'Halogenation (Conversion to Halogenoalkanes)', level: 2 },
            terms: []
        },
        {
            id: 'table-halogenation',
            type: 'comparisonTable',
            data: {
                caption: 'Reagents for making Halogenoalkanes from Alcohols',
                headers: ['Desired Product', 'Reagents Needed', 'Equation / Notes'],
                rows: [
                    ['Chloroalkane', 'PCl₅ (solid) <br/>OR PCl₃ (liquid) <br/>OR conc. HCl (for 3° alcohols)', '<strong>PCl₅:</strong> ROH + PCl₅ → RCl + POCl₃ + <strong>HCl</strong> (steamy fumes). Violent reaction at room temp, used as -OH test.<br/><strong>PCl₃:</strong> 3ROH + PCl₃ → 3RCl + H₃PO₃<br/><br/><em>Tertiary alcohols react rapidly with conc. HCl at room temp without extra heating!</em>'],
                    ['Bromoalkane', 'KBr + 50% conc. H₂SO₄ <br/>OR Red phosphorus + Bromine', '<strong>KBr/H₂SO₄:</strong> Forms HBr <em>in situ</em> which then reacts with the alcohol. ROH + HBr → RBr + H₂O<br/><strong>Red P / Br₂:</strong> Reacts to form PBr₃ in situ, which then reacts: 3ROH + PBr₃ → 3RBr + H₃PO₃'],
                    ['Iodoalkane', 'Red phosphorus + Iodine (makes PI₃)<br/>OR KI + conc. H₃PO₄', '3ROH + PI₃ → 3RI + H₃PO₃<br/><br/><em>Note: If using KI, we use H₃PO₄ instead of H₂SO₄ because H₂SO₄ would oxidise the iodide ions to I₂.</em>']
                ]
            },
            terms: ['PCl5 test', 'In situ']
        },
        {
            id: 'h-sodium',
            type: 'heading',
            data: { text: 'Reaction with Sodium', level: 2 },
            terms: []
        },
        {
            id: 'p-sodium',
            type: 'paragraph',
            data: { text: 'Alcohols react steadily with metallic sodium at room temperature, releasing bubbles of hydrogen gas and leaving a colourless solution of a sodium alkoxide (e.g. sodium ethoxide). If evaporated to dryness, a white solid remains.' },
            terms: ['Alkoxide']
        },
        {
            id: 'callout-sodium',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Sodium Reaction Equation',
                text: 'Like the reaction of sodium with water, the reaction with alcohols cleaves the O-H bond, but it is less vigorous.<br/><br/>2CH₃CH₂OH + 2Na → 2CH₃CH₂O⁻Na⁺ + H₂<br/><br/>This reaction can be used as a test for the -OH group (provided the liquid is strictly neutral and perfectly anhydrous, as sodium acts violently with acids and water). It is also commonly used to safely dispose of small pieces of leftover sodium in the lab.'
            },
            terms: []
        },
        {
            id: 'h-dehydration',
            type: 'heading',
            data: { text: 'Dehydration of Alcohols (Elimination)', level: 2 },
            terms: []
        },
        {
            id: 'callout-dehydration',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Catalytic Dehydration to Alkenes',
                text: 'Alcohols can be <strong>dehydrated</strong> (lose a molecule of water) to form an <strong>alkene</strong>. This is an <strong>elimination reaction</strong>.<br/><br/><strong>Reagents & Conditions:</strong><br/>• Heat the alcohol with an excess of a concentrated acid catalyst.<br/>• Concentrated <strong>sulphuric acid (H₂SO₄)</strong> at around 170°C or concentrated <strong>phosphoric(V) acid (H₃PO₄)</strong> can be used.<br/>• The acid is a catalyst — it is regenerated at the end of the reaction.<br/><br/><strong>Examples:</strong><br/>CH₃CH₂OH → CH₂=CH₂ + H₂O<br/><em>(ethanol → ethene + water)</em><br/><br/>CH₃CH(OH)CH₃ → CH₃CH=CH₂ + H₂O<br/><em>(propan-2-ol → propene + water)</em>'
            },
            terms: ['Dehydration', 'Elimination', 'Acid Catalyst']
        },
        {
            id: 'callout-dehyd-mechanism',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Mechanism: Acid-Catalysed Dehydration',
                text: 'The mechanism for the dehydration of secondary and tertiary alcohols (like propan-2-ol) involves the following steps:<br/><br/><strong>1. Protonation:</strong> A lone pair of electrons on the alcohol oxygen picks up a hydrogen ion (H⁺) from the acid catalyst. The oxygen becomes positively charged.<br/><strong>2. Carbocation formation:</strong> The protonated alcohol loses a water molecule, leaving behind a positively charged <strong>carbocation</strong>.<br/><strong>3. Elimination:</strong> A base (such as the HSO₄⁻ ion or water) pulls off a hydrogen ion from a carbon <strong>adjacent</strong> to the carbocation. The electron pair from the broken C-H bond folds in to form the C=C double bond, producing the alkene and regenerating the H⁺ catalyst.'
            },
            terms: ['Protonation', 'Carbocation']
        },
        {
            id: 'svg-dehydration-mechanism',
      type: 'svg',
      data: {
        caption: 'Mechanism of acid-catalysed dehydration of propan-2-ol.',
        svg: `<svg viewBox="0 0 650 480" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="14">
  <defs>
    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#ef4444" />
    </marker>
    <style>
      .txt { fill: #1f2937; }
      .atom { fill: #111827; font-family: monospace; font-size: 16px; }
      .charge { fill: #ef4444; font-weight: bold; font-size: 14px; }
      .bond { stroke: #111827; stroke-width: 1.5; }
      .curve { fill: none; stroke: #ef4444; stroke-width: 1.5; marker-end: url(#arrowhead); }
      .hd { fill: #1e40af; font-weight: bold; }
    </style>
  </defs>

  <!-- ======================== STEP 1 ======================== -->
  <text x="20" y="30" class="hd">1. Protonation of the alcohol</text>
  
  <text x="50" y="110" class="atom" text-anchor="start">CH&#8323;&#8212;</text>
  <text x="100" y="110" class="atom" text-anchor="middle">CH</text>
  <text x="115" y="110" class="atom" text-anchor="start">&#8212;CH&#8323;</text>
  
  <path d="M 100 94 L 100 74" class="bond" />
  
  <text x="100" y="70" class="atom" text-anchor="middle">O</text>
  <text x="80" y="70" class="atom" text-anchor="end">H&#8212;</text>
  <text x="110" y="70" class="atom" text-anchor="start">:</text>

  <text x="180" y="110" class="atom" text-anchor="middle">+</text>
  <text x="220" y="110" class="atom" text-anchor="middle" fill="#2563eb">H</text>
  <text x="228" y="100" class="charge" text-anchor="start">+</text>
  
  <path d="M 115 65 Q 170 60 220 90" class="curve" />
  
  <text x="280" y="110" class="atom">&#8594;</text>

  <text x="360" y="110" class="atom" text-anchor="start">CH&#8323;&#8212;</text>
  <text x="410" y="110" class="atom" text-anchor="middle">CH</text>
  <text x="425" y="110" class="atom" text-anchor="start">&#8212;CH&#8323;</text>
  
  <path d="M 410 94 L 410 74" class="bond" />
  
  <text x="410" y="70" class="atom" text-anchor="middle">O</text>
  <text x="390" y="70" class="atom" text-anchor="end">H&#8212;</text>
  <text x="430" y="70" class="atom" text-anchor="start">&#8212;H</text>
  <text x="418" y="60" class="charge" text-anchor="start">+</text>

  <!-- ======================== STEP 2 ======================== -->
  <text x="20" y="180" class="hd">2. Loss of water to form a carbocation</text>
  
  <text x="50" y="260" class="atom" text-anchor="start">CH&#8323;&#8212;</text>
  <text x="100" y="260" class="atom" text-anchor="middle">CH</text>
  <text x="115" y="260" class="atom" text-anchor="start">&#8212;CH&#8323;</text>
  
  <path d="M 100 244 L 100 224" class="bond" />
  
  <text x="100" y="220" class="atom" text-anchor="middle">O</text>
  <text x="80" y="220" class="atom" text-anchor="end">H&#8212;</text>
  <text x="130" y="220" class="atom" text-anchor="start">&#8212;H</text>
  <text x="108" y="210" class="charge" text-anchor="start">+</text>
  
  <path d="M 106 234 Q 125 225 125 210" class="curve" />
  
  <text x="200" y="260" class="atom">&#8594;</text>

  <text x="260" y="260" class="atom" text-anchor="start">CH&#8323;&#8212;</text>
  <text x="310" y="260" class="atom" text-anchor="middle">CH</text>
  <text x="310" y="240" class="charge" text-anchor="middle">+</text>
  <text x="335" y="260" class="atom" text-anchor="start">&#8212;CH&#8323;</text>
  
  <text x="410" y="260" class="atom" text-anchor="middle">+</text>
  
  <text x="460" y="260" class="atom" text-anchor="middle">H&#8322;O</text>


  <!-- ======================== STEP 3 ======================== -->
  <text x="20" y="330" class="hd">3. Elimination of H&#8314; to form the alkene</text>
  
  <text x="75" y="420" class="atom" text-anchor="middle">CH&#8322;</text>
  <text x="94" y="434" class="atom" text-anchor="start">&#8212;</text>
  <text x="125" y="420" class="atom" text-anchor="middle">CH</text>
  
  <text x="125" y="400" class="charge" text-anchor="middle">+</text>
  <text x="150" y="420" class="atom" text-anchor="start">&#8212;CH&#8323;</text>

  <path d="M 75 404 L 75 384" class="bond" />
  <text x="75" y="380" class="atom" text-anchor="middle">H</text>

  <text x="30" y="380" class="atom" text-anchor="end" fill="#047857">:B</text>
  
  <path d="M 35 375 Q 50 370 60 375" class="curve" />
  <path d="M 82 394 Q 105 394 105 410" class="curve" />

  <text x="240" y="420" class="atom">&#8594;</text>

  <text x="300" y="420" class="atom" text-anchor="middle">CH&#8322;</text>
  <text x="330" y="420" class="atom" text-anchor="middle">=</text>
  <text x="360" y="420" class="atom" text-anchor="middle">CH</text>
  <text x="380" y="420" class="atom" text-anchor="start">&#8212;CH&#8323;</text>
  
  <text x="460" y="420" class="atom" text-anchor="middle">+</text>
  
  <text x="500" y="420" class="atom" text-anchor="middle" fill="#2563eb">BH</text>
  <text x="515" y="410" class="charge" text-anchor="start">+</text>
  
  <text x="545" y="415" class="txt" font-size="12" text-anchor="start">(catalyst</text>
  <text x="545" y="430" class="txt" font-size="12" text-anchor="start"> regen.)</text>
</svg>`
      }
    },
        {
            id: 'svg-dehyd-propan2ol-simplified',
            type: 'svg',
            data: {
                caption: 'Simplified E1 mechanism for acid-catalysed dehydration of propan-2-ol. Step 1: O lone pair accepts H⁺ → protonated propan-2-ol. Step 2: C–O bond breaks → secondary carbocation + H₂O. Step 3: base removes H⁺ from adjacent β-carbon → C=C π bond forms → propene. H⁺ catalyst is regenerated. Write H⁺ directly for any acid (H₂SO₄ or H₃PO₄). Propan-2-ol is symmetric: H from either CH₃ gives same propene product.',
                svg: `<svg viewBox="0 0 540 415" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="ah-dp" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker><marker id="ra-dp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker><style>.adp{fill:#111827;font-weight:bold;font-size:14px}.hdp{fill:#1e40af;font-weight:bold;font-size:12px}.ddp{fill:#6b7280;font-size:11px}.cdp{fill:#ef4444;font-weight:bold;font-size:11px}</style></defs><text x="270" y="16" class="hdp" text-anchor="middle">Simplified E1 Mechanism &#8212; Dehydration of Propan-2-ol</text><text x="270" y="29" class="ddp" text-anchor="middle">conc. H&#8322;SO&#8324; or H&#8323;PO&#8324; at ~170&#xb0;C &#xb7; H&#8314; notation works for either acid catalyst</text><text x="20" y="48" class="hdp" text-anchor="start">1. Protonation &#8212; O lone pair accepts H&#8314; from acid</text><text x="50" y="88" class="adp" text-anchor="middle">CH&#8323;</text><path d="M 73 83 L 95 83" stroke="#111827" stroke-width="1.5" fill="none"/><text x="109" y="88" class="adp" text-anchor="middle">CH</text><path d="M 109 75 L 109 59" stroke="#111827" stroke-width="1.5" fill="none"/><text x="109" y="55" class="adp" text-anchor="middle">O</text><path d="M 117 50 L 129 41" stroke="#111827" stroke-width="1.5" fill="none"/><text x="135" y="38" class="adp" text-anchor="middle">H</text><circle cx="98" cy="53" r="1.8" fill="#374151"/><circle cx="100" cy="59" r="1.8" fill="#374151"/><path d="M 121 83 L 143 83" stroke="#111827" stroke-width="1.5" fill="none"/><text x="160" y="88" class="adp" text-anchor="middle">CH&#8323;</text><text x="183" y="86" class="adp" text-anchor="middle">+</text><text x="200" y="86" fill="#1d4ed8" font-weight="bold" font-size="14" text-anchor="middle">H</text><text x="208" y="76" class="cdp" text-anchor="start">+</text><path d="M 101 57 Q 150 38 195 80" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-dp)"/><path d="M 220 83 L 248 83" stroke="#374151" stroke-width="2" marker-end="url(#ra-dp)" fill="none"/><text x="278" y="88" class="adp" text-anchor="middle">CH&#8323;</text><path d="M 301 83 L 323 83" stroke="#111827" stroke-width="1.5" fill="none"/><text x="337" y="88" class="adp" text-anchor="middle">CH</text><path d="M 337 75 L 337 59" stroke="#111827" stroke-width="1.5" fill="none"/><text x="337" y="55" class="adp" text-anchor="middle">O</text><text x="345" y="46" class="cdp" text-anchor="start">+</text><path d="M 329 50 L 319 41" stroke="#111827" stroke-width="1.5" fill="none"/><text x="314" y="38" class="adp" text-anchor="middle">H</text><path d="M 345 50 L 355 41" stroke="#111827" stroke-width="1.5" fill="none"/><text x="360" y="38" class="adp" text-anchor="middle">H</text><path d="M 349 83 L 371 83" stroke="#111827" stroke-width="1.5" fill="none"/><text x="388" y="88" class="adp" text-anchor="middle">CH&#8323;</text><text x="338" y="108" class="ddp" text-anchor="middle">protonated propan-2-ol (O bonded to 3 groups &#8594; carries +ve charge)</text><text x="20" y="133" class="hdp" text-anchor="start">2. Carbocation formation &#8212; protonated alcohol loses H&#8322;O</text><text x="55" y="183" class="adp" text-anchor="middle">CH&#8323;</text><path d="M 78 178 L 100 178" stroke="#111827" stroke-width="1.5" fill="none"/><text x="114" y="183" class="adp" text-anchor="middle">CH</text><path d="M 114 170 L 114 154" stroke="#111827" stroke-width="1.5" fill="none"/><text x="114" y="150" class="adp" text-anchor="middle">O</text><text x="122" y="140" class="cdp" text-anchor="start">+</text><path d="M 106 145 L 96 136" stroke="#111827" stroke-width="1.5" fill="none"/><text x="91" y="133" class="adp" text-anchor="middle">H</text><path d="M 122 145 L 132 136" stroke="#111827" stroke-width="1.5" fill="none"/><text x="137" y="133" class="adp" text-anchor="middle">H</text><path d="M 126 178 L 148 178" stroke="#111827" stroke-width="1.5" fill="none"/><text x="165" y="183" class="adp" text-anchor="middle">CH&#8323;</text><path d="M 114 157 Q 108 148 120 142" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-dp)"/><path d="M 188 178 L 216 178" stroke="#374151" stroke-width="2" marker-end="url(#ra-dp)" fill="none"/><text x="250" y="183" class="adp" text-anchor="middle">CH&#8323;</text><path d="M 273 178 L 295 178" stroke="#111827" stroke-width="1.5" fill="none"/><text x="309" y="183" class="adp" text-anchor="middle">CH</text><text x="319" y="171" class="cdp" text-anchor="start">+</text><path d="M 321 178 L 343 178" stroke="#111827" stroke-width="1.5" fill="none"/><text x="360" y="183" class="adp" text-anchor="middle">CH&#8323;</text><text x="388" y="181" class="adp" text-anchor="middle">+</text><text x="414" y="183" class="adp" text-anchor="middle">H&#8322;O</text><text x="309" y="200" class="ddp" text-anchor="middle">2&#xb0; carbocation &#8212; stable (two CH&#8323; groups donate electron density)</text><text x="20" y="228" class="hdp" text-anchor="start">3. Elimination &#8212; base removes H&#8314; from &#946;-carbon, C=C forms</text><text x="25" y="295" fill="#15803d" font-weight="bold" font-size="13" text-anchor="middle">:B</text><text x="33" y="284" class="cdp" text-anchor="start">&#8722;</text><text x="90" y="270" class="adp" text-anchor="middle">H</text><path d="M 90 277 L 90 288" stroke="#111827" stroke-width="1.5" fill="none"/><text x="90" y="298" class="adp" text-anchor="middle">CH&#8322;</text><path d="M 109 293 L 131 293" stroke="#111827" stroke-width="1.5" fill="none"/><text x="145" y="298" class="adp" text-anchor="middle">CH</text><text x="155" y="286" class="cdp" text-anchor="start">+</text><path d="M 157 293 L 179 293" stroke="#111827" stroke-width="1.5" fill="none"/><text x="196" y="298" class="adp" text-anchor="middle">CH&#8323;</text><path d="M 38 291 Q 60 274 82 268" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-dp)"/><path d="M 96 278 Q 118 275 121 285" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-dp)"/><path d="M 220 293 L 248 293" stroke="#374151" stroke-width="2" marker-end="url(#ra-dp)" fill="none"/><text x="278" y="298" class="adp" text-anchor="middle">CH&#8322;</text><path d="M 297 289 L 319 289" stroke="#111827" stroke-width="1.5" fill="none"/><path d="M 297 295 L 319 295" stroke="#111827" stroke-width="1.5" fill="none"/><text x="333" y="298" class="adp" text-anchor="middle">CH</text><path d="M 345 293 L 367 293" stroke="#111827" stroke-width="1.5" fill="none"/><text x="384" y="298" class="adp" text-anchor="middle">CH&#8323;</text><text x="408" y="296" class="adp" text-anchor="middle">+</text><text x="432" y="298" fill="#15803d" font-weight="bold" font-size="13" text-anchor="middle">BH</text><text x="333" y="316" class="ddp" text-anchor="middle">propene (base accepts H&#8314; &#8594; H&#8314; catalyst regenerated)</text><line x1="20" y1="334" x2="520" y2="334" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4,3"/><text x="270" y="349" fill="#1e40af" font-weight="bold" font-size="11" text-anchor="middle">Overall: (CH&#8323;)&#8322;CHOH &#x27F6; CH&#8322;=CHCH&#8323; + H&#8322;O &#xb7; acid = catalyst (regenerated each cycle)</text><text x="270" y="364" class="ddp" text-anchor="middle">Propan-2-ol is symmetric: H from either CH&#8323; group &#8594; propene (same molecule)</text><text x="270" y="378" class="ddp" text-anchor="middle">Full: base = HSO&#8324;&#8315; (H&#8322;SO&#8324; drawn out) &#xb7; Simplified: label as :B &#xb7; exam boards accept either</text><text x="270" y="392" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">&#x26a0; Curly arrows: 1 in step 1 &#xb7; 1 in step 2 &#xb7; 2 in step 3 (all required for exam marks)</text><text x="270" y="406" class="ddp" text-anchor="middle">E1: rate = k[propan-2-ol] &#8212; first order; rate-determining step = ionisation (step 2)</text></svg>`
            }
        },
        {
            id: 'callout-dehyd-simplified',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Simplified vs Full Mechanism, and Propan-2-ol Symmetry',
                text: '<strong>Two ways to write the mechanism — both accepted at A-level:</strong><br/><br/><strong>Full mechanism (drawing H₂SO₄):</strong><br/>• Step 1 — H₂SO₄ donates H⁺ → propan-2-ol protonated, producing HSO₄⁻<br/>• Step 3 — HSO₄⁻ acts as the base, abstracting H⁺ from the β-carbon → H₂SO₄ regenerated<br/>• Advantage: clearly shows the acid acting as a catalyst<br/><br/><strong>Simplified mechanism (H⁺ notation):</strong><br/>• Write H⁺ directly over the reaction arrow instead of drawing H₂SO₄<br/>• Use a generic base (:B) in step 3 — no structure required<br/>• Works unchanged for <em>either</em> H₂SO₄ or H₃PO₄<br/>• "Your examiner will accept either version"<br/><br/><strong>Why H₃PO₄ is often preferred in labs:</strong><br/>• Concentrated H₂SO₄ is also a strong oxidising agent → chars the alcohol (carbon deposits) and produces SO₂ as a side product<br/>• H₃PO₄ gives a cleaner reaction with less oxidation side-products<br/><br/><strong>Symmetry of propan-2-ol:</strong><br/>• Propan-2-ol has two identical CH₃ groups (C1 and C3) both directly bonded to C2 (the C–OH carbon)<br/>• In step 3, the base can remove H from C1 or from C3 — the product is propene either way (CH₂=CHCH₃ from either direction is the same molecule)<br/>• Result: dehydration of propan-2-ol gives only <em>one</em> alkene product (propene) — no mixture issues'
            },
            terms: ['Simplified mechanism', 'H₃PO₄', 'Symmetry', 'Propan-2-ol']
        },
        {
            id: 'callout-dehyd-primary',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Primary Alcohols: The Concerted Mechanism',
                text: 'Unlike secondary or tertiary alcohols that dehydrate via an E1 mechanism (involving a carbocation), <strong>primary alcohols</strong> undergo elimination differently.<br/><br/>If ethanol were to form a carbocation, it would be a highly unstable primary carbocation (CH₃CH₂⁺). To avoid this high activation energy, the reaction occurs via an <strong>E2 mechanism</strong>, where the loss of water and removal of a hydrogen ion happen simultaneously in one concerted step.<br/><br/><strong>1. Protonation:</strong> A lone pair of electrons on the oxygen picks up a hydrogen ion (H⁺) from the acid catalyst.<br/><strong>2. Concerted elimination:</strong> A base (e.g. HSO₄⁻ or water) removes a hydrogen ion from the adjacent carbon. At exactly the same time, the electron pair from the broken C-H bond folds in to form the C=C double bond, pushing off the water molecule.'
            },
            terms: ['Concerted mechanism', 'Primary alcohol dehydration']
        },
        {
            id: 'callout-primary-no-simplified',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Primary Alcohols: The Base MUST Be Shown — No Simplified H⁺ Notation',
                text: 'For secondary and tertiary alcohols (E1 mechanism), the simplified notation — writing H⁺ directly without drawing the acid structure — is acceptable at A-level. In E1, the base only acts in the final step after the carbocation has formed.<br/><br/>For primary alcohols (E2, concerted mechanism), this is different. The base abstracting H⁺ from the adjacent carbon is the defining, central feature of the mechanism. The concerted step only works <em>because</em> the base pulls H⁺ at the exact same moment the C–O bond breaks and the C=C forms. Omitting the base hides the E2 mechanism entirely.<br/><br/><strong>Always draw the base explicitly in the concerted step for primary alcohol dehydration:</strong><br/>• Full: use HSO₄⁻ (from H₂SO₄) or H₂PO₄⁻ (from H₃PO₄)<br/>• Abbreviated: label as :B or :B⁻ — acceptable<br/>• Do NOT write just H⁺ floating in space in the concerted step<br/><br/><em>Chemguide: "If you don\'t show something removing the hydrogen ion from the protonated alcohol, you are really missing an important feature of the reaction."</em>'            },
            terms: ['E2 mechanism', 'Primary carbocation', 'Concerted', 'Base']
        },
        {
            id: 'svg-dehydration-primary',
            type: 'svg',
            data: {
                caption: 'Acid-catalysed dehydration of a primary alcohol (ethanol) proceeds via a concerted (E2) mechanism to bypass forming an unstable primary carbocation.',
                svg: `<svg viewBox="0 0 650 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="14">
  <defs>
    <marker id="arrowhead-prim" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#ef4444" />
    </marker>
    <style>
      .txt { fill: #1f2937; }
      .atom { fill: #111827; font-family: monospace; font-size: 16px; }
      .charge { fill: #ef4444; font-weight: bold; font-size: 14px; }
      .bond { stroke: #111827; stroke-width: 1.5; }
      .curve { fill: none; stroke: #ef4444; stroke-width: 1.5; marker-end: url(#arrowhead-prim); }
      .hd { fill: #1e40af; font-weight: bold; }
    </style>
  </defs>

  <!-- ======================== STEP 1 ======================== -->
  <text x="20" y="30" class="hd">1. Protonation of the alcohol</text>
  
  <text x="75" y="80" class="atom" text-anchor="middle">CH&#8323;</text>
  <path d="M 94 75 L 108 75" class="bond" />
  <text x="125" y="80" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 144 75 L 165 75" class="bond" />
  <text x="180" y="80" class="atom" text-anchor="middle">O</text>
  <path d="M 185 68 L 195 58" class="bond"/>
  <text x="200" y="56" class="atom" text-anchor="start">H</text>

  <!-- Lone pairs -->
  <circle cx="177" cy="58" r="1.5" class="txt" />
  <circle cx="183" cy="58" r="1.5" class="txt" />
  <circle cx="194" cy="72" r="1.5" class="txt" />
  <circle cx="194" cy="78" r="1.5" class="txt" />

  <text x="240" y="80" class="atom" text-anchor="middle">+</text>
  <text x="285" y="80" class="atom" text-anchor="middle" fill="#2563eb">H</text>
  <text x="295" y="70" class="charge" text-anchor="start">+</text>

  <path d="M 199 75 Q 230 105 275 85" class="curve" />

  <text x="340" y="80" class="atom">&#8594;</text>

  <text x="400" y="80" class="atom" text-anchor="middle">CH&#8323;</text>
  <path d="M 419 75 L 433 75" class="bond" />
  <text x="450" y="80" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 469 75 L 485 75" class="bond" />
  <text x="500" y="80" class="atom" text-anchor="middle">O</text>
  <text x="510" y="66" class="charge" text-anchor="start">+</text>

  <path d="M 500 64 L 500 44" class="bond" />
  <text x="500" y="40" class="atom" text-anchor="middle">H</text>
  
  <path d="M 508 68 L 522 58" class="bond"/>
  <text x="528" y="58" class="atom" text-anchor="start">H</text>

  <text x="565" y="80" class="txt" font-size="12" text-anchor="start">protonated</text>
  <text x="565" y="96" class="txt" font-size="12" text-anchor="start">alcohol</text>

  <!-- ======================== STEP 2 ======================== -->
  <text x="20" y="180" class="hd">2. Concerted elimination: base removes H&#8314; and water leaves simultaneously</text>
  
  <!-- Base -->
  <text x="50" y="270" class="atom" text-anchor="middle" fill="#2563eb">B</text>
  <text x="60" y="260" class="charge" text-anchor="start">-</text>
  <circle cx="65" cy="254" r="1.5" class="txt" fill="#2563eb" />
  <circle cx="65" cy="260" r="1.5" class="txt" fill="#2563eb" />

  <text x="135" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 152 265 L 168 265" class="bond" />
  <text x="185" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 202 265 L 220 265" class="bond" />
  <text x="235" y="270" class="atom" text-anchor="middle">O</text>
  <text x="245" y="256" class="charge" text-anchor="start">+</text>

  <!-- C-H bond down -->
  <path d="M 135 254 L 135 234" class="bond" />
  <text x="135" y="230" class="atom" text-anchor="middle">H</text>

  <!-- O-H bonds up/right -->
  <path d="M 235 254 L 235 234" class="bond" />
  <text x="235" y="230" class="atom" text-anchor="middle">H</text>
  <path d="M 240 258 L 260 248" class="bond"/>
  <text x="267" y="248" class="atom" text-anchor="start">H</text>

  <!-- Mechanism arrows -->
  <!-- Base taking H -->
  <path d="M 75 257 Q 105 240 120 235" class="curve" />
  <!-- C-H electrons forming pi bond -->
  <path d="M 142 244 Q 160 244 160 260" class="curve" />
  <!-- C-O electrons leaving with O -->
  <path d="M 215 264 Q 220 250 235 250" class="curve" />

  <text x="290" y="270" class="atom">&#8594;</text>

  <text x="355" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  <text x="385" y="270" class="atom" text-anchor="middle">=</text>
  <text x="415" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  
  <text x="470" y="270" class="atom" text-anchor="middle">+</text>
  <text x="515" y="270" class="atom" text-anchor="middle" fill="#2563eb">BH</text>
  
  <text x="560" y="270" class="atom" text-anchor="middle">+</text>
  <text x="600" y="270" class="atom" text-anchor="middle">H&#8322;O</text>

</svg>`
            }
        },
        {
            id: 'table-elim-compare',
            type: 'comparisonTable',
            data: {
                caption: 'Summary: E1 vs E2 elimination in alcohol dehydration',
                headers: ['Feature', 'E1 Mechanism', 'E2 (Concerted) Mechanism'],
                rows: [
                    ['Alcohol type', 'Secondary or tertiary', 'Primary'],
                    ['Intermediate', 'Carbocation (stable: 2° or 3°)', 'No intermediate — single step'],
                    ['Steps', '3 steps: protonate → lose H₂O → lose H⁺', '2 steps: protonate → concerted elimination'],
                    ['Base role', 'Removes H⁺ after carbocation forms', 'Removes H⁺ at the same time as C–O bond breaks'],
                    ['Stability reason', 'Secondary/tertiary carbocations are relatively stable', 'Primary carbocation would be too unstable — avoided'],
                    ['Example', 'Propan-2-ol → propene', 'Ethanol → ethene']
                ]
            },
            terms: ['E1 mechanism', 'E2 mechanism']
        },
        {
            id: 'callout-elim-examtip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Which Mechanism to Use?',
                text: '<strong>For secondary and tertiary alcohols</strong> (e.g. propan-2-ol, 2-methylpropan-2-ol): always use the <strong>E1 mechanism</strong> — protonation → carbocation → elimination.<br/><br/><strong>For primary alcohols</strong> (e.g. ethanol, propan-1-ol): the correct mechanism is <strong>E2</strong> (concerted, no carbocation). A primary carbocation would be too unstable to form.<br/><br/><strong>AQA &amp; IB note:</strong> Both exam boards now award equal marks for either mechanism in case of primary alcohols. However, the E2 concerted mechanism is considered scientifically correct and is the preferred answer. AQA confirmed in 2018: <em>"either mechanism will score the same mark."</em><br/><br/>If in doubt, always show the protonation step — this is required regardless of which mechanism you use.'
            },
            terms: ['E1 mechanism', 'E2 mechanism', 'Primary carbocation']
        },
        {
            id: 'h-complex-dehyd',
            type: 'heading',
            data: { text: 'Dehydration of Complex Alcohols — Multiple Products', level: 2 },
            terms: []
        },
        {
            id: 'list-complex-products',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'When the carbocation formed in Step 2 of E1 has <strong>two different adjacent (β) carbons</strong>, each bearing at least one H, the base can remove H⁺ from <em>either</em> β-carbon → more than one structural isomer of the alkene forms.',
                    '<strong>Butan-2-ol example:</strong> carbocation = CH₃–CH⁺–CH₂–CH₃ (β₁ = left CH₃, β₂ = right CH₂). Three products: (1) <strong>but-1-ene</strong> CH₂=CH–CH₂–CH₃ (H⁺ from β₁); (2) <strong>cis-but-2-ene</strong> and (3) <strong>trans-but-2-ene</strong> CH₃–CH=CH–CH₃ (both from H⁺ from β₂).',
                    '<strong>Geometric (E/Z) isomerism:</strong> the C=C π bond prevents free rotation — substituents are locked either on the same side (cis / Z) or opposite sides (trans / E). Any internal alkene (C=C not at the chain end) where each C of the double bond carries two <em>different</em> groups will have E/Z isomers.',
                    '<strong>Exam rule:</strong> always draw alkenes with <strong>120° bond angles</strong> around the C=C bond — never write them as a flat string (e.g. CH₃CH=CHCH₃). Drawing the geometry forces you to notice when E/Z pairs are possible and prevents losing marks.'
                ]
            },
            terms: ['Geometric isomerism', 'E/Z isomerism', 'But-1-ene', 'But-2-ene', 'Butan-2-ol', 'Beta-carbon', 'Multiple products']
        },
        {
            id: 'svg-complex-dehyd',
            type: 'svg',
            data: {
                svg: `<svg viewBox="0 0 650 430" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="14">
  <defs>
    <marker id="ah-cpx" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#6366f1" />
    </marker>
    <style>
      .atm { fill: #111827; font-size: 15px; }
      .hd  { fill: #1e40af; font-weight: bold; }
      .sub { fill: #6b7280; font-size: 11px; }
      .lbl { fill: #4c1d95; font-size: 12px; }
      .prd { fill: #065f46; font-weight: 600; font-size: 13px; }
      .bnd { stroke: #111827; stroke-width: 1.8; fill: none; }
      .arr { stroke: #6366f1; stroke-width: 1.5; fill: none; marker-end: url(#ah-cpx); }
    </style>
  </defs>
  <text x="325" y="22" text-anchor="middle" class="hd" font-size="14">Butan-2-ol → Three Products (E1 Dehydration)</text>
  <rect x="170" y="34" width="310" height="58" rx="6" fill="#1c3a64" stroke="#bfdbfe" stroke-width="1.2"/>
  <text x="325" y="51" text-anchor="middle" class="hd" font-size="11">butan-2-ol carbocation (formed in Step 2 of E1)</text>
  <text x="255" y="80" text-anchor="middle" class="atm">CH&#8323;</text>
  <line x1="272" y1="74" x2="287" y2="74" class="bnd"/>
  <text x="300" y="80" text-anchor="middle" class="atm">CH</text>
  <text x="311" y="63" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="13">+</text>
  <line x1="316" y1="74" x2="333" y2="74" class="bnd"/>
  <text x="348" y="80" text-anchor="middle" class="atm">CH&#8322;</text>
  <line x1="365" y1="74" x2="383" y2="74" class="bnd"/>
  <text x="398" y="80" text-anchor="middle" class="atm">CH&#8323;</text>
  <text x="255" y="93" text-anchor="middle" class="lbl">&#946;&#8321;</text>
  <text x="348" y="93" text-anchor="middle" class="lbl">&#946;&#8322;</text>
  <path d="M 255 96 Q 195 125 130 150" class="arr"/>
  <text x="182" y="128" text-anchor="middle" class="lbl">H&#8314; from &#946;&#8321;</text>
  <path d="M 348 96 Q 415 125 475 150" class="arr"/>
  <text x="427" y="125" text-anchor="middle" class="lbl">H&#8314; from &#946;&#8322;</text>
  <rect x="10" y="155" width="235" height="60" rx="6" fill="#0a2e1a" stroke="#6ee7b7" stroke-width="1.2"/>
  <text x="127" y="174" text-anchor="middle" class="prd">but-1-ene</text>
  <text x="127" y="193" text-anchor="middle" class="atm" font-size="14">CH&#8322;=CH&#8212;CH&#8322;&#8212;CH&#8323;</text>
  <text x="127" y="208" text-anchor="middle" class="sub">terminal alkene &#8212; 1 structural product</text>
  <rect x="258" y="155" width="382" height="60" rx="6" fill="#44370a" stroke="#fde68a" stroke-width="1.2"/>
  <text x="449" y="174" text-anchor="middle" class="prd">but-2-ene (internal alkene)</text>
  <text x="449" y="193" text-anchor="middle" class="atm" font-size="14">CH&#8323;&#8212;CH=CH&#8212;CH&#8323;</text>
  <text x="449" y="208" text-anchor="middle" class="sub">2 stereoisomers &#8212; E/Z geometric isomerism</text>
  <line x1="20" y1="238" x2="630" y2="238" stroke="#d1d5db" stroke-width="1"/>
  <text x="325" y="257" text-anchor="middle" class="hd" font-size="12">Geometric Isomers of But-2-ene (draw with 120&#176; bond angles)</text>
  <rect x="20" y="265" width="290" height="152" rx="6" fill="#1c3a64" stroke="#7dd3fc" stroke-width="1.2"/>
  <text x="165" y="284" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">cis (Z)-but-2-ene</text>
  <line x1="115" y1="330" x2="215" y2="330" class="bnd"/>
  <line x1="115" y1="337" x2="215" y2="337" class="bnd"/>
  <text x="108" y="337" text-anchor="end" class="atm">C</text>
  <text x="222" y="337" text-anchor="start" class="atm">C</text>
  <line x1="115" y1="330" x2="78" y2="302" class="bnd"/>
  <text x="71" y="299" text-anchor="end" class="atm" font-size="13">CH&#8323;</text>
  <line x1="115" y1="337" x2="78" y2="365" class="bnd"/>
  <text x="71" y="370" text-anchor="end" class="atm" font-size="13">H</text>
  <line x1="215" y1="330" x2="252" y2="302" class="bnd"/>
  <text x="259" y="299" text-anchor="start" class="atm" font-size="13">CH&#8323;</text>
  <line x1="215" y1="337" x2="252" y2="365" class="bnd"/>
  <text x="259" y="370" text-anchor="start" class="atm" font-size="13">H</text>
  <text x="165" y="408" text-anchor="middle" class="sub">Both CH&#8323; groups on the same side</text>
  <rect x="340" y="265" width="290" height="152" rx="6" fill="#532407" stroke="#fdba74" stroke-width="1.2"/>
  <text x="485" y="284" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="13">trans (E)-but-2-ene</text>
  <line x1="435" y1="330" x2="535" y2="330" class="bnd"/>
  <line x1="435" y1="337" x2="535" y2="337" class="bnd"/>
  <text x="428" y="337" text-anchor="end" class="atm">C</text>
  <text x="542" y="337" text-anchor="start" class="atm">C</text>
  <line x1="435" y1="330" x2="398" y2="302" class="bnd"/>
  <text x="391" y="299" text-anchor="end" class="atm" font-size="13">CH&#8323;</text>
  <line x1="435" y1="337" x2="398" y2="365" class="bnd"/>
  <text x="391" y="370" text-anchor="end" class="atm" font-size="13">H</text>
  <line x1="535" y1="330" x2="572" y2="302" class="bnd"/>
  <text x="579" y="299" text-anchor="start" class="atm" font-size="13">H</text>
  <line x1="535" y1="337" x2="572" y2="365" class="bnd"/>
  <text x="579" y="370" text-anchor="start" class="atm" font-size="13">CH&#8323;</text>
  <text x="485" y="408" text-anchor="middle" class="sub">CH&#8323; groups on opposite sides</text>
</svg>`,
                caption: 'Butan-2-ol E1 dehydration: the carbocation in Step 2 can lose H⁺ from either β-carbon, giving three alkene products. But-2-ene has restricted rotation about C=C, so both E and Z stereoisomers form in the reaction mixture.'
            },
            terms: ['Geometric isomerism', 'But-1-ene', 'But-2-ene', 'Butan-2-ol', 'E/Z isomerism', 'Beta-carbon']
        },
        {
            id: 'callout-geom-isomer',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Exam Trap: Missing Geometric Isomers',
                text: 'Dehydration producing an <strong>internal alkene</strong> is a classic source of lost exam marks — students list one but-2-ene and miss the second stereoisomer.<br/><br/><strong>Checklist for every alkene product:</strong><br/>1. Draw the C=C with <strong>120° bond angles</strong> — not as a flat string.<br/>2. Does the left C of the C=C carry two <em>different</em> substituents? Yes → continue.<br/>3. Does the right C carry two <em>different</em> substituents? Yes → E/Z isomers exist.<br/>4. List <strong>both</strong> (Z)/cis and (E)/trans forms as separate distinct products.<br/><br/>Chemguide: <em>"If you take a short cut and write but-2-ene as CH₃CH=CHCH₃, you will almost certainly miss the fact that cis and trans forms are possible. This is a rich source of questions in an exam."</em>'
            },
            terms: ['Geometric isomerism', 'E/Z isomerism', 'cis-but-2-ene', 'trans-but-2-ene', '120 degree bond angle']
        },
        {
            id: 'h-uses',
            type: 'heading',
            data: { text: 'Common Uses of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'list-uses',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Ethanol (CH₃CH₂OH):</strong> Used globally in alcoholic drinks. It is an excellent solvent for cosmetics and perfumes. Industrially, it is used as a motor fuel (either pure or mixed with petrol as "gasohol," which is essential for countries without oil industries). Ethanol mixed with poisonous methanol and dye is sold as "methylated spirits" to deter drinking and avoid beverage taxes.',
                    '<strong>Methanol (CH₃OH):</strong> Primarily used as a clean-burning fuel or petrol additive, and as a crucial industrial feedstock to manufacture other chemicals like methanal (formaldehyde), ethanoic acid, and various esters.',
                    '<strong>Propan-2-ol (CH₃CH(OH)CH₃):</strong> Extensively used as an industrial and household solvent (often called "rubbing alcohol") because it dissolves a wide range of non-polar compounds and evaporates quickly.'
                ]
            },
            terms: ['Methylated spirits', 'Gasohol']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-classification', prompt: 'Classify butan-2-ol as primary, secondary, or tertiary.' },
            { id: 'c-bg1', blockId: 'p-bp-solubility', prompt: 'Why is ethanol completely soluble in water but hexan-1-ol is almost insoluble?' },
            { id: 'c-bg2', blockId: 'p-bp-solubility', prompt: 'Why is the boiling point of ethanol much higher than that of an alkane of similar mass?' },
            { id: 'c-mfg1', blockId: 'table-manufacture', prompt: 'Give three differences between the industrial hydration of ethene and the fermentation of sugars to produce ethanol.' },
            { id: 'c-mfg2', blockId: 'p-fermentation-details', prompt: 'In the fermentation of sugars, why must air be excluded from the reaction vessel?' },
            { id: 'c-mfg3', blockId: 'p-hydration-details', prompt: 'Why does the hydration of propene with steam produce propan-2-ol rather than propan-1-ol?' },
            { id: 'c2', blockId: 'table-halogenation', prompt: 'What reagent is used to convert an alcohol into a chloroalkane, and what observation is made during this reaction?' },
            { id: 'c3', blockId: 'table-halogenation', prompt: 'When converting an alcohol to an iodoalkane using KI, why must we use concentrated H₃PO₄ rather than concentrated H₂SO₄?' },
            { id: 'c4', blockId: 'table-halogenation', prompt: 'State the reagents used to produce a bromoalkane from an alcohol.' },
            { id: 'c5', blockId: 'table-halogenation', prompt: 'How can a tertiary alcohol be converted into a chloroalkane very quickly at room temperature?' },
            { id: 'c-sodium', blockId: 'callout-sodium', prompt: 'Describe what is observed when a small piece of sodium is dropped into ethanol, and state the name of the organic product formed.' },
            { id: 'c-dehyd', blockId: 'callout-dehydration', prompt: 'State the reagents and conditions required to dehydrate an alcohol to an alkene.' },
            { id: 'c-dehyd-mech', blockId: 'callout-dehyd-mechanism', prompt: 'In the acid-catalysed dehydration of an alcohol, what are the three main steps of the mechanism?' },
            { id: 'cue-dehyd-svg-simplified', blockId: 'svg-dehyd-propan2ol-simplified', prompt: 'Draw or describe the three-step simplified E1 mechanism for dehydration of propan-2-ol. How many curly arrows are needed in each step? Why can H be abstracted from either CH₃ group? Why is H₃PO₄ often preferred over H₂SO₄ in practice? What is meant by the simplified mechanism?' },
            { id: 'c-dehyd-primary', blockId: 'callout-dehyd-primary', prompt: 'Why do primary alcohols like ethanol dehydrate via a concerted (E2) mechanism rather than the E1 carbocation mechanism?' },
            { id: 'cue-primary-no-simplified', blockId: 'callout-primary-no-simplified', prompt: 'Explain why the simplified H⁺ notation is NOT appropriate for the dehydration of a primary alcohol. What must always be shown in the concerted step, and why? How does this differ from secondary/tertiary? What is the AQA and IB position on E1 vs E2 for primary alcohols?' },
            { id: 'c-elim-compare', blockId: 'table-elim-compare', prompt: 'State two differences between the E1 and E2 elimination mechanisms for alcohol dehydration.' },
            { id: 'cue-complex-dehyd', blockId: 'svg-complex-dehyd', prompt: 'What three products form when butan-2-ol is dehydrated? Draw or describe the carbocation intermediate and explain why multiple alkenes form. Why does but-2-ene give two products? What exam rule applies to drawing alkene products?' },
            { id: 'c-uses', blockId: 'list-uses', prompt: 'State one use for methanol, and two different uses for ethanol. Why is methanol often added to industrial ethanol?' }
        ],
        summaryText: 'Ethanol can be manufactured continuously by hydrating ethene (fossil-based, using steam + H₂PO₄) or via batch fermentation of sugars (renewable, anaerobic, needs purifying). Alcohols have higher boiling points than alkanes and are soluble in water (if short-chained) due to hydrogen bonding. They react with metallic sodium to form an alkoxide and hydrogen gas. They combust cleanly as fuels. They can be dehydrated (elimination) into alkenes using concentrated H₂SO₄ or H₃PO₄ at 170°C via E1 (ionic) mechanism for 2°/3° alcohols: (1) O lone pair accepts H⁺ → protonated alcohol (O now bonded to 3 groups, +ve charge); (2) C–O bond breaks, both electrons go to O → secondary/tertiary carbocation + H₂O leaves (rate-determining step, first order); (3) base removes H⁺ from β-carbon → C–H electrons form C=C π bond → alkene, H⁺ regenerated (catalyst). Simplified: write H⁺ over arrow (no acid structure needed, works for either acid; exam boards accept). H₃PO₄ preferred in labs (H₂SO₄ is also oxidising agent → carbon deposits + SO₂). Propan-2-ol symmetry: both CH₃ groups equivalent → only one product (propene). PRIMARY ALCOHOL E2 (ethanol → ethene): same protonation step; then ONE concerted step: base (HSO₄⁻) removes β-H simultaneously as C–O breaks and C=C forms — avoids unstable primary carbocation. BASE MUST BE SHOWN — no simplified H⁺ shorthand (base is the defining feature of E2 and must be drawn). AQA 2018: technically expects E1 for most questions (secondary/tertiary); accepts E2 for equal marks. IB: E2 correct/preferred. COMPLEX ALCOHOL DEHYDRATION: carbocation can lose H⁺ from either β-carbon when two different β-carbons each carry H → multiple structural isomers. Butan-2-ol → three products: but-1-ene (H⁺ from left CH₃ β₁) + cis/(Z)-but-2-ene AND trans/(E)-but-2-ene (H⁺ from right CH₂ β₂). Internal alkenes exhibit E/Z geometric isomerism (C=C π bond locks rotation). Exam rule: ALWAYS draw alkenes with 120° bond angles around C=C — never write as a flat string — to identify E/Z pairs. They can be turned into halogenoalkanes. Chloroalkanes: use solid PCl₅ (violent, releases steamy HCl fumes), liquid PCl₃, or conc HCl for 3° alcohols. Bromoalkanes: use 50% H₂SO₄ + KBr to make HBr in situ. Iodoalkanes: use red phosphorus + iodine (to make PI₃), or KI + conc H₃PO₄ (H₂SO₄ cannot be used as it would oxidise iodide to iodine). Alcohols are widely used as fuels, solvents (ethanol in perfumes, propan-2-ol for cleaning), and industrial feedstocks (methanol).',
        ready: false
    },
    evidence: [
        {
            id: 'ev-1',
            title: 'Acid-catalysed dehydration of propan-2-ol — E1 mechanism (full and simplified), symmetry, H₃PO₄ vs H₂SO₄',
            detail: 'Propan-2-ol + conc. H₂SO₄ or H₃PO₄ at ~170°C → propene + H₂O (acid = catalyst, regenerated). E1 mechanism: (1) protonation — O lone pair picks up H⁺ → protonated propan-2-ol (O bonded to 3 groups, carries +ve charge, just like N normally does); (2) water loss — C–O bond breaks, both electrons go to O → secondary carbocation (CH₃–CH⁺–CH₃) + H₂O; rate-determining step; (3) elimination — base (HSO₄⁻ in full mechanism, or :B in simplified) removes H⁺ from β-carbon (adjacent CH₃) → C–H electrons form C=C π bond → propene + H⁺ regenerated. Simplified: write H⁺ directly (works for H₂SO₄ or H₃PO₄; exam boards accept). Full: draws out H₂SO₄ → HSO₄⁻ in step 1, HSO₄⁻ removes H⁺ in step 3. H₃PO₄ preferred in labs (H₂SO₄ also oxidises alcohol). Symmetry: both CH₃ groups of propan-2-ol equivalent → only propene produced (no mixture). Curly arrows: 1 in step 1, 1 in step 2, 2 in step 3.',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/elim/dhpropan2ol.html',
            tags: ['dehydration', 'propan-2-ol', 'E1 mechanism', 'carbocation', 'protonation', 'H2SO4', 'H3PO4', 'simplified mechanism', 'secondary carbocation', 'propene', 'symmetry', 'acid catalyst', 'beta-carbon', 'curly arrows']
        },
        {
            id: 'ev-2',
            title: 'Dehydration of ethanol (primary) — E2 concerted, no simplified notation, AQA/IB positions',
            detail: 'Ethanol + conc. H2SO4 or H3PO4 at ~170C → ethene + H2O (acid = catalyst). Primary alcohol cannot form primary carbocation (CH3CH2+) — too unstable → uses E2 (concerted) not E1. Mechanism: (1) protonation — O lone pair picks up H+ → protonated ethanol (same as E1 step 1); (2) concerted elimination — base (HSO4-) removes H+ from beta-C at the SAME TIME as C-O breaks (H2O leaves) and C=C forms → ethene + H2O + H+ regenerated. Base MUST be drawn explicitly — simplified H+ notation (used for secondary/tertiary E1) is NOT appropriate for primary E2 because the base is the defining feature of the concerted step. AQA (2018): "still expects E1 because most examples involve 2°/3° alcohols"; accepts either mechanism for equal marks. IB: E2 preferred/correct; accepts E1 with no penalty. Chemguide: "If you don\'t show something removing the hydrogen ion from the protonated alcohol, you are really missing an important feature of the reaction." Academic papers support non-carbocation (E2) mechanism for primary alcohols.',
            year: '2019',
            source: 'chemguide.co.uk/mechanisms/elim/dhethanol.html',
            tags: ['dehydration', 'ethanol', 'primary alcohol', 'E2 mechanism', 'concerted', 'no carbocation', 'primary carbocation', 'protonation', 'base', 'ethene', 'exam tip', 'AQA', 'IB', 'no simplified mechanism', 'H2SO4', 'H3PO4']
        },
        {
            id: 'ev-3',
            title: 'Dehydration of butan-2-ol — three products, geometric isomerism of but-2-ene',
            detail: 'Butan-2-ol + conc. H2SO4 or H3PO4 at 170°C → mixture of three alkenes (E1 mechanism). Steps 1-2 same as propan-2-ol: protonation → secondary carbocation CH3-CH+-CH2-CH3. In step 3, base removes H+ from either β-carbon: from left CH3 (β₁) → but-1-ene CH2=CHCH2CH3 (terminal); from right CH2 (β₂) → but-2-ene CH3CH=CHCH3 (internal). But-2-ene shows E/Z geometric isomerism (C=C π bond locks rotation): cis/(Z)-but-2-ene (both CH3 on same side) and trans/(E)-but-2-ene (CH3 on opposite sides). Final product mixture: but-1-ene + cis-but-2-ene + trans-but-2-ene (3 total). Exam trap: writing CH3CH=CHCH3 in a flat line makes it nearly impossible to notice that both E and Z isomers form. Always draw alkenes with 120° bond angles around C=C. Chemguide: "This is a rich source of questions in an exam."',
            year: '2023',
            source: 'chemguide.co.uk/mechanisms/elim/dhcomplex.html',
            tags: ['dehydration', 'butan-2-ol', 'complex alcohol', 'multiple products', 'but-1-ene', 'but-2-ene', 'E1 mechanism', 'carbocation', 'beta-carbon', 'geometric isomerism', 'E/Z isomerism', 'cis-but-2-ene', 'trans-but-2-ene', '120 degree bond angle', 'exam tip']
        }
    ]
};
export default note_chemistry_2_10_4;
