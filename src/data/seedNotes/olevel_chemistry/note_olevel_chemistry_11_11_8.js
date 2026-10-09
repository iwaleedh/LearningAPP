export const note_olevel_chemistry_11_11_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-5-alcohols.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the general formula, structure, and reactions of alcohols including combustion, oxidation, dehydration, and fermentation of glucose to ethanol.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alcohols', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts',
        text: '<strong>General formula:</strong> CₙH₂ₙ₊₁OH (or CₙH₂ₙ₊₂O)<br/><strong>Functional group:</strong> –OH (hydroxyl)<br/><br/><strong>Common alcohols:</strong><br/>• Methanol (CH₃OH) — industrial solvent; toxic<br/>• Ethanol (C₂H₅OH) — in drinks; fuel; solvent<br/>• Propan-1-ol (C₃H₇OH) — solvent<br/><br/><strong>Typical properties:</strong><br/>• Miscible with water (polar –OH group)<br/>• Flammable — burn with clean blue flame<br/>• Not acids (no H⁺ donated to water easily) but react with Na: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂ (hydrogen gas produced)'
      }
    },
    {
      id: 'tbl-reacts',
      type: 'comparisonTable',
      data: {
        caption: 'Reactions of ethanol',
        headers: ['Reaction', 'Conditions/Reagent', 'Products'],
        rows: [
          ['Complete combustion', 'Excess O₂, ignition', 'CO₂ + H₂O: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O'],
          ['Oxidation', 'Acidified K₂Cr₂O₇ (orange→green) or air', 'Ethanoic acid CH₃COOH'],
          ['Dehydration', 'Concentrated H₂SO₄ or Al₂O₃ catalyst, ~170°C', 'Ethene + water: C₂H₅OH → CH₂=CH₂ + H₂O'],
          ['Fermentation', 'Yeast (enzyme), ~30°C, anaerobic (no air)', 'Ethanol + CO₂: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂']
        ]
      }
    },
    {
      id: 'call-ferm',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Fermentation to Produce Ethanol',
        text: '<strong>Raw material:</strong> Glucose (C₆H₁₂O₆) — from sugar cane, sugar beet, starch crops (renewable)<br/><br/><strong>Equation:</strong> C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂<br/><br/><strong>Conditions:</strong><br/>• Yeast (contains enzymes that catalyse the reaction)<br/>• Temperature ~30°C (optimum for enzyme activity; higher denatures enzymes)<br/>• Anaerobic conditions (no air/O₂) — O₂ would oxidise ethanol to ethanoic acid (vinegar)<br/><br/><strong>Limitations:</strong><br/>• Product is only ~10–15% ethanol (yeast dies at higher concentrations)<br/>• Must be distilled to obtain concentrated ethanol<br/>• Uses renewable feedstocks (sustainable) but requires agricultural land'
      }
    },
    {
      id: 'svg-fermentation',
      type: 'svg',
      data: {
        caption: 'Experimental setup for the fermentation of glucose to produce ethanol and carbon dioxide.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-76 0 579 300">
    <defs>
        <style>
            .glass { fill: rgba(255,255,255,0.1); stroke: var(--color-text); stroke-width: 2; stroke-linejoin: round; }
            .liquid-ferment { fill: rgba(241, 196, 15, 0.2); }
            .liquid-limewater { fill: rgba(236, 240, 241, 0.4); }
            .bung { fill: #7f8c8d; stroke: var(--color-text); stroke-width: 2; }
            .tube { fill: none; stroke: var(--color-text); stroke-width: 4; stroke-linejoin: round; }
            .bubble { fill: none; stroke: var(--color-text); stroke-width: 1.5; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .line-pointer { stroke: var(--color-text); stroke-width: 1; stroke-dasharray: 4,4; }
        </style>
    </defs>

    <!-- Conical Flask (Fermentation mixture) -->
    <g transform="translate(100, 150)">
        <!-- Liquid -->
        <path d="M-40,80 L40,80 L25,0 L-25,0 Z" class="liquid-ferment" />
        
        <!-- Flask -->
        <path d="M-15,-60 L15,-60 L15,-20 L50,80 A10,10 0 0,1 40,90 L-40,90 A10,10 0 0,1 -50,80 L-15,-20 Z" class="glass" />
        
        <!-- Bung -->
        <polygon points="-16,-60 16,-60 12,-40 -12,-40" class="bung" />
        
        <!-- Yeast particles (dots in liquid) -->
        <circle cx="-10" cy="40" r="2" fill="var(--color-text)"/>
        <circle cx="20" cy="50" r="2" fill="var(--color-text)"/>
        <circle cx="-20" cy="65" r="2" fill="var(--color-text)"/>
        <circle cx="10" cy="70" r="2" fill="var(--color-text)"/>
        <circle cx="5" cy="30" r="2" fill="var(--color-text)"/>
        <circle cx="-30" cy="80" r="2" fill="var(--color-text)"/>

        <!-- CO2 bubbles in flask -->
        <circle cx="0" cy="20" r="4" class="bubble"/>
        <circle cx="-10" cy="10" r="3" class="bubble"/>
        <circle cx="5" cy="0" r="5" class="bubble"/>
    </g>

    <!-- Delivery Tube -->
    <path d="M100,100 L100,70 A10,10 0 0,1 110,60 L310,60 A10,10 0 0,1 320,70 L320,230" class="tube" />

    <!-- Test Tube (Limewater) -->
    <g transform="translate(320, 150)">
        <!-- Liquid -->
        <rect x="-15" y="40" width="30" height="50" class="liquid-limewater"/>
        <!-- Tube -->
        <path d="M-17,-20 L-17,80 A17,17 0 0,0 17,80 L17,-20" class="glass"/>
        <!-- CO2 bubbles in limewater -->
        <circle cx="0" cy="80" r="3" class="bubble"/>
        <circle cx="-5" cy="70" r="4" class="bubble"/>
        <circle cx="5" cy="60" r="3" class="bubble"/>
        <circle cx="0" cy="50" r="4" class="bubble"/>
    </g>

    <!-- Labels and pointers -->
    <text x="50" y="270" class="label" text-anchor="middle">Glucose solution</text>
    <text x="50" y="285" class="label" text-anchor="middle">+ yeast</text>
    <line x1="50" y1="255" x2="80" y2="200" class="line-pointer"/>

    <text x="210" y="45" class="label">CO₂ gas bubbles through delivery tube</text>

    <text x="400" y="190" class="label">Limewater</text>
    <text x="400" y="210" class="label">(Turns milky if</text>
    <text x="400" y="230" class="label">CO₂ is present)</text>
    <line x1="395" y1="190" x2="340" y2="210" class="line-pointer"/>

    <!-- Oil layer option (optional, but good to ensure anaerobic) -->
    <text x="10" y="110" class="label" text-anchor="end">Air excluded</text>
    <text x="10" y="125" class="label" text-anchor="end">(anaerobic)</text>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alcohols (CₙH₂ₙ₊₁OH): –OH functional group. Combustion → CO₂ + H₂O. Oxidation → carboxylic acid. Dehydration (H₂SO₄) → alkene + H₂O. Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast, ~30°C, anaerobic).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Alcohols: –OH group, CₙH₂ₙ₊₁OH. Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast, 30°C, anaerobic). Dehydration → alkene.',
    cues: [
      { id: 'cue-1', blockId: 'call-ferm', prompt: 'Write the equation for fermentation of glucose and state the conditions required.', answer: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Conditions: yeast, ~30°C, anaerobic (no oxygen).' },
      { id: 'cue-2', blockId: 'tbl-reacts', prompt: 'What happens when ethanol is oxidised? What reagent is used?', answer: 'Ethanol is oxidised to ethanoic acid (CH₃COOH). Acidified potassium dichromate(VI) is used — it changes from orange to green as it is reduced.' },
      { id: 'cue-3', blockId: 'tbl-reacts', prompt: 'Write the equation for the dehydration of ethanol and state the conditions.', answer: 'C₂H₅OH → CH₂=CH₂ + H₂O. Conditions: concentrated H₂SO₄ or Al₂O₃ catalyst, ~170°C.' }
    ]
  },
  evidence: [],
  mentions: []
};
