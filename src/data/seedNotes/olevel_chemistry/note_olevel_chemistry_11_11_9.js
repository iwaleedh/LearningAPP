export const note_olevel_chemistry_11_11_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-6-carboxylic-acids.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure and reactions of carboxylic acids including reactions with metals, bases, carbonates, and alcohols to form esters.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Carboxylic Acids', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts',
        text: '<strong>Functional group:</strong> –COOH (carboxyl group)<br/><strong>General formula:</strong> CₙH₂ₙ₊₁COOH<br/><br/><strong>Common carboxylic acids:</strong><br/>• Methanoic acid (HCOOH) — in ant stings; irritant<br/>• Ethanoic acid (CH₃COOH) — vinegar; widely used industrial acid<br/>• Propanoic acid (C₂H₅COOH)<br/><br/><strong>Properties:</strong><br/>• <strong>Weak acids</strong> — partially dissociate in water (pH 3–5)<br/>• Dissolve in water to give acidic solutions<br/>• Have pungent/sour smell<br/>• React in the same ways as other acids (but more slowly)'
      }
    },
    {
      id: 'svg-carboxyl-structure',
      type: 'svg',
      data: {
        caption: 'Displayed formula of ethanoic acid showing the carboxyl group (–COOH).',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; }
            .atom-c { font-family: var(--font-sans); font-size: 24px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .atom-h { font-family: var(--font-sans); font-size: 24px; fill: #7f8c8d; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .atom-o { font-family: var(--font-sans); font-size: 24px; fill: #e74c3c; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .highlight { fill: none; stroke: rgba(231, 76, 60, 0.3); stroke-width: 40; stroke-linecap: round; stroke-linejoin: round; }
            .label { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: #e74c3c; text-anchor: middle; }
        </style>
    </defs>

    <g transform="translate(180, 100)">
        
        <!-- Highlight carboxyl group -->
        <path d="M0,0 L60,0 L100,0 M60,0 L60,-50" class="highlight"/>
        <text x="60" y="-80" class="label">Carboxyl group (–COOH)</text>

        <!-- Atoms -->
        <text x="-60" y="0" class="atom-c">C</text>
        <text x="0" y="0" class="atom-c">C</text>
        <text x="0" y="-60" class="atom-o">O</text>
        <text x="60" y="0" class="atom-o">O</text>
        <text x="100" y="0" class="atom-h">H</text>
        
        <text x="-60" y="-60" class="atom-h">H</text>
        <text x="-60" y="60" class="atom-h">H</text>
        <text x="-120" y="0" class="atom-h">H</text>
        
        <!-- C-C bond -->
        <line x1="-40" y1="0" x2="-20" y2="0" class="bond"/>

        <!-- C=O bond -->
        <line x1="-5" y1="-20" x2="-5" y2="-45" class="double-bond"/>
        <line x1="5" y1="-20" x2="5" y2="-45" class="double-bond"/>

        <!-- C-O bond -->
        <line x1="20" y1="0" x2="40" y2="0" class="bond"/>
        
        <!-- O-H bond -->
        <line x1="75" y1="0" x2="85" y2="0" class="bond"/>

        <!-- CH3 bonds -->
        <line x1="-60" y1="-20" x2="-60" y2="-45" class="bond"/>
        <line x1="-60" y1="20" x2="-60" y2="45" class="bond"/>
        <line x1="-80" y1="0" x2="-105" y2="0" class="bond"/>
    </g>
</svg>`
      }
    },
    {
      id: 'tbl-rx',
      type: 'comparisonTable',
      data: {
        caption: 'Reactions of ethanoic acid (CH₃COOH)',
        headers: ['Reaction', 'Equation', 'Observations'],
        rows: [
          ['With metal (Mg)', 'CH₃COOH + Mg → (CH₃COO)₂Mg + H₂', 'Bubbles of H₂; Mg dissolves (slow reaction — weak acid)'],
          ['With base (NaOH)', 'CH₃COOH + NaOH → CH₃COONa + H₂O', 'No visible change; neutralisation'],
          ['With carbonate (Na₂CO₃)', '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂', 'Effervescence (CO₂ gas); CO₂ turns limewater milky'],
          ['With carbonate (CaCO₃)', '2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + H₂O + CO₂', 'Marble/limestone dissolves; effervescence']
        ]
      }
    },
    {
      id: 'call-ester',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Esterification',
        text: 'Carboxylic acids react with alcohols to form esters in a reversible reaction:<br/><br/><strong>CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</strong><br/>(ethanoic acid + ethanol ⇌ ethyl ethanoate + water)<br/><br/><strong>Conditions:</strong> concentrated H₂SO₄ catalyst; heat; reflux<br/><br/><strong>Naming esters:</strong><br/>• First part: from the alcohol (ethanol → ethyl)<br/>• Second part: from the carboxylic acid (-anoic acid → -anoate)<br/>• Ethanol + ethanoic acid → ethyl ethanoate<br/>• Propanol + methanoic acid → propyl methanoate'
      }
    },
    {
      id: 'svg-esterification',
      type: 'svg',
      data: {
        caption: 'Formation of ethyl ethanoate from ethanoic acid and ethanol. The acid loses an –OH group and the alcohol loses an –H atom to form water.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; }
            .atom { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .water-group { font-family: var(--font-sans); font-size: 20px; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .op { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: var(--color-text); }
            .label { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
        </style>
    </defs>

    <!-- Ethanoic Acid -->
    <g transform="translate(150, 100)">
        <text x="-30" y="0" class="atom">CH₃</text>
        <text x="20" y="0" class="atom">C</text>
        <text x="20" y="-40" class="atom">O</text>
        <text x="60" y="0" class="water-group" fill="#3498db">OH</text>
        
        <line x1="-5" y1="0" x2="5" y2="0" class="bond"/>
        <line x1="15" y1="-15" x2="15" y2="-25" class="double-bond"/>
        <line x1="25" y1="-15" x2="25" y2="-25" class="double-bond"/>
        <line x1="35" y1="0" x2="40" y2="0" class="bond" stroke="#3498db"/>
        
        <text x="10" y="60" class="label">Ethanoic acid</text>
    </g>

    <text x="250" y="100" class="op">+</text>

    <!-- Ethanol (drawn backwards: HO-CH2-CH3) -->
    <g transform="translate(340, 100)">
        <text x="-40" y="0" class="water-group" fill="#e74c3c">H</text>
        <text x="-15" y="0" class="atom">O</text>
        <text x="25" y="0" class="atom">CH₂</text>
        <text x="75" y="0" class="atom">CH₃</text>
        
        <line x1="-30" y1="0" x2="-25" y2="0" class="bond" stroke="#e74c3c"/>
        <line x1="-3" y1="0" x2="5" y2="0" class="bond"/>
        <line x1="45" y1="0" x2="55" y2="0" class="bond"/>
        
        <text x="20" y="60" class="label">Ethanol</text>
    </g>

    <!-- Arrow -->
    <g transform="translate(450, 100)">
        <!-- Reversible arrow approx -->
        <line x1="0" y1="-5" x2="40" y2="-5" stroke="var(--color-text)" stroke-width="2"/>
        <polygon points="40,-10 40,0 50,-5" fill="var(--color-text)"/>
        
        <line x1="10" y1="5" x2="50" y2="5" stroke="var(--color-text)" stroke-width="2"/>
        <polygon points="10,10 10,0 0,5" fill="var(--color-text)"/>

        <text x="25" y="-20" class="label" font-size="12">conc. H₂SO₄</text>
    </g>

    <!-- Ester (Ethyl Ethanoate) -->
    <!-- CH3-C(=O)-O-CH2-CH3 -->
    <g transform="translate(180, 200)">
        <text x="-30" y="0" class="atom">CH₃</text>
        <text x="20" y="0" class="atom">C</text>
        <text x="20" y="-40" class="atom">O</text>
        <text x="60" y="0" class="atom">O</text>
        <text x="100" y="0" class="atom">CH₂</text>
        <text x="150" y="0" class="atom">CH₃</text>

        <line x1="-5" y1="0" x2="5" y2="0" class="bond"/>
        <line x1="15" y1="-15" x2="15" y2="-25" class="double-bond"/>
        <line x1="25" y1="-15" x2="25" y2="-25" class="double-bond"/>
        <line x1="35" y1="0" x2="45" y2="0" class="bond"/>
        <line x1="75" y1="0" x2="80" y2="0" class="bond"/>
        <line x1="120" y1="0" x2="130" y2="0" class="bond"/>

        <text x="60" y="40" class="label">Ethyl ethanoate</text>
    </g>

    <text x="360" y="200" class="op">+</text>

    <!-- Water -->
    <g transform="translate(460, 200)">
        <text x="0" y="0" class="water-group" fill="#3498db">H₂O</text>
        <text x="0" y="40" class="label">Water</text>

        <!-- small visual to show where water came from -->
        <text x="-50" y="-120" class="label" fill="#8e44ad" font-size="12">H and OH combine</text>
        <path d="M-60,-105 C-60,-80 -90,-20 -90,0" fill="none" stroke="#8e44ad" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow)"/>
    </g>

    <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8e44ad" />
        </marker>
    </defs>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Carboxylic acids: –COOH group, weak acids. React with metals (→ salt + H₂), bases (→ salt + H₂O), carbonates (→ salt + H₂O + CO₂). React with alcohols + conc. H₂SO₄ catalyst → ester + water (esterification).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Carboxylic acids: –COOH, weak acids. React with carbonates → CO₂. With alcohols (H₂SO₄ catalyst) → ester + water.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What makes carboxylic acids weak acids compared to HCl?', answer: 'Carboxylic acids partially dissociate in water — only a small fraction of molecules release H⁺ ions. HCl is a strong acid that dissociates completely. Carboxylic acids therefore produce solutions with pH around 3–5 rather than 1.' },
      { id: 'cue-2', blockId: 'tbl-rx', prompt: 'Write the equation for ethanoic acid reacting with sodium carbonate.', answer: '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂' },
      { id: 'cue-3', blockId: 'call-ester', prompt: 'Name the ester formed from propanol and ethanoic acid, and state the catalyst needed.', answer: 'Propyl ethanoate. Concentrated sulfuric acid (H₂SO₄) is used as catalyst, with heat.' }
    ]
  },
  evidence: [],
  mentions: []
};
