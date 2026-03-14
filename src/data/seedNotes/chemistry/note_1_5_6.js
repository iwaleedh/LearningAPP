/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 6
 * "Oxidation of Alkenes with KMnO₄"
 * Source: Pearson Edexcel International A Level Chemistry — WCH11 Topic 5
 */
export const note_chemistry_1_5_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: {
        text: 'Know how alkenes react with cold dilute acidified KMnO₄ to form diols, and with hot concentrated acidified KMnO₄ to give oxidative cleavage products. Predict cleavage products based on the substitution at each C=C carbon. Use oxidation products to deduce the structure of an unknown alkene.'
      }
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Overview', level: 2 }
    },
    {
      id: 'list-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Alkenes contain an electron-rich C=C double bond that is readily oxidised by potassium manganate(VII), KMnO₄.',
          'Cold, dilute, acidified KMnO₄ → mild oxidation → diol product (two –OH groups added across C=C).',
          'Hot, concentrated, acidified KMnO₄ → vigorous oxidation → C=C bond is completely cleaved (broken).',
          'In both reactions the purple KMnO₄ solution is decolourised (turns colourless) — MnO₄⁻ (Mn⁷⁺) is reduced to Mn²⁺.',
          'Decolourisation of KMnO₄ is a positive test for the C=C double bond (alongside decolourisation of bromine water).'
        ]
      }
    },
    {
      id: 'table-conditions',
      type: 'comparisonTable',
      data: {
        headers: ['Property', 'Cold Dilute Acidified KMnO₄', 'Hot Conc. Acidified KMnO₄'],
        rows: [
          ['Temperature', 'Room temperature (cold)', 'Heated (hot)'],
          ['Concentration', 'Dilute', 'Concentrated'],
          ['Acid used', 'Dilute H₂SO₄', 'Concentrated H₂SO₄'],
          ['Mn oxidation state change', 'Mn⁷⁺ → Mn²⁺', 'Mn⁷⁺ → Mn²⁺'],
          ['Colour change', 'Purple → colourless', 'Purple → colourless'],
          ['Extent of oxidation', 'Mild — stops at diol stage', 'Vigorous — fully cleaves C=C'],
          ['Organic product', 'Diol (–OH added to each C=C carbon)', 'Depends on C=C carbon type (see below)']
        ],
        caption: 'Comparison of mild and vigorous KMnO₄ oxidation conditions'
      }
    },
    {
      id: 'h-diol',
      type: 'heading',
      data: { text: 'Mild Oxidation — Diol Formation', level: 2 }
    },
    {
      id: 'list-diol',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: cold, dilute, acidified KMnO₄ (potassium manganate(VII) in dilute H₂SO₄).',
          'Observation: purple KMnO₄ solution decolourises (turns colourless) — MnO₄⁻ is reduced to Mn²⁺.',
          'Product: a diol (glycol) — one –OH group is added to each carbon of the C=C bond.',
          'The two –OH groups are on adjacent (vicinal) carbon atoms of the product.',
          'Both –OH groups are added to the same face of the C=C bond (syn addition).',
          'The diol is water-soluble and remains in aqueous solution.',
          'Example: ethene (CH₂=CH₂) is oxidised to ethane-1,2-diol (HOCH₂CH₂OH).'
        ]
      }
    },
    {
      id: 'eq-diol',
      type: 'equation',
      data: {
        html: 'CH<sub>2</sub>=CH<sub>2</sub>&nbsp; + &nbsp;[O]&nbsp; + &nbsp;H<sub>2</sub>O&nbsp; → &nbsp;HO–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        caption: 'Ethene → ethane-1,2-diol (cold dilute acidified KMnO₄). [O] represents the oxygen transferred from KMnO₄.'
      }
    },
    {
      id: 'h-cleavage',
      type: 'heading',
      data: { text: 'Vigorous Oxidation — Oxidative Cleavage', level: 2 }
    },
    {
      id: 'list-cleavage',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: hot, concentrated, acidified KMnO₄ (with concentrated H₂SO₄, heated).',
          'Observation: purple KMnO₄ solution decolourises (turns colourless).',
          'The C=C double bond is completely broken — both the σ-bond framework and the π bond are oxidised.',
          'Each C=C carbon is independently converted to a separate oxidised product.',
          'The type of product formed at each C=C carbon depends on the number of hydrogen atoms attached to it in the original alkene.',
          'Both products are formed simultaneously — list all products in the answer.'
        ]
      }
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'Predicting Cleavage Products', level: 3 }
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '=CH₂ — terminal (unsubstituted) carbon; 2 H atoms on the C=C carbon → CO₂ + H₂O.',
          '=CHR — monosubstituted; 1 H atom and 1 alkyl group (R) on the C=C carbon → carboxylic acid, RCOOH.',
          '=CR₂ or =CRR′ — disubstituted; 0 H atoms and 2 alkyl groups on the C=C carbon → ketone, RCOR′.',
          'Count the H atoms on EACH C=C carbon separately, then apply the rule to determine each product.'
        ]
      }
    },
    {
      id: 'table-products',
      type: 'comparisonTable',
      data: {
        headers: ['C=C Carbon Type', 'H atoms on C', 'Product (hot KMnO₄)', 'Example fragment'],
        rows: [
          ['=CH₂  (terminal)', '2', 'CO₂  +  H₂O', 'H₂C= in propene → CO₂ + H₂O'],
          ['=CHR  (monosubstituted)', '1', 'Carboxylic acid  RCOOH', 'CH₃CH= in but-2-ene → CH₃COOH (ethanoic acid)'],
          ['=CR₂  (disubstituted)', '0', 'Ketone  RCOR′', '(CH₃)₂C= in 2-methylpropene → (CH₃)₂C=O (propanone)']
        ],
        caption: 'Rules for predicting hot concentrated KMnO₄ oxidative cleavage products'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Rule — H Count → Cleavage Product',
        text: '<strong>=CH₂</strong>&nbsp;&nbsp;(2 H)&nbsp;&nbsp;→&nbsp;CO₂ + H₂O<br/><strong>=CHR</strong>&nbsp;&nbsp;(1 H)&nbsp;&nbsp;→&nbsp;RCOOH&nbsp;&nbsp;<em>(carboxylic acid)</em><br/><strong>=CR₂</strong>&nbsp;&nbsp;(0 H)&nbsp;&nbsp;→&nbsp;RCOR′&nbsp;&nbsp;<em>(ketone)</em><br/><br/>The fewer H atoms on the C=C carbon, the less oxidised the cleavage product (CO₂ = most oxidised; ketone = least oxidised).'
      }
    },
    {
      id: 'svg-scheme',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 560 242" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="12">
  <defs>
    <marker id="kmno4-arr" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
      <polygon points="0,0 9,3.5 0,7" fill="#555"/>
    </marker>
  </defs>

  <!-- DIOL BOX (top) -->
  <rect x="125" y="8" width="310" height="38" rx="7" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">Diol  (mild oxidation)</text>
  <text x="280" y="40" text-anchor="middle" fill="#065f46" font-size="11">R–CH(OH)–CH(OH)–R′</text>

  <!-- ARROW: alkene ↑ diol (upward) -->
  <line x1="280" y1="84" x2="280" y2="48" stroke="#555" stroke-width="1.5" marker-end="url(#kmno4-arr)"/>
  <text x="290" y="62" fill="#059669" font-size="10" font-weight="bold">cold, dilute KMnO₄</text>
  <text x="290" y="76" fill="#059669" font-size="10">acidified · room temperature</text>

  <!-- ALKENE BOX (centre) -->
  <rect x="170" y="86" width="220" height="44" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="280" y="104" text-anchor="middle" font-weight="bold" fill="#1e3a8a" font-size="13">Alkene</text>
  <text x="280" y="121" text-anchor="middle" fill="#1e3a8a" font-size="11">R–CH=CH–R′</text>

  <!-- ARROW: alkene ↓ cleavage (downward) -->
  <line x1="280" y1="130" x2="280" y2="162" stroke="#555" stroke-width="1.5" marker-end="url(#kmno4-arr)"/>
  <text x="290" y="144" fill="#dc2626" font-size="10" font-weight="bold">hot, conc. KMnO₄ / H₂SO₄</text>
  <text x="290" y="157" fill="#dc2626" font-size="10">vigorous · heated</text>

  <!-- CLEAVAGE PRODUCTS BOX (bottom) -->
  <rect x="8" y="165" width="544" height="71" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="280" y="181" text-anchor="middle" font-weight="bold" fill="#7f1d1d" font-size="11">Oxidative Cleavage Products</text>

  <!-- Column dividers -->
  <line x1="190" y1="188" x2="190" y2="232" stroke="#fca5a5" stroke-width="1" stroke-dasharray="4"/>
  <line x1="370" y1="188" x2="370" y2="232" stroke="#fca5a5" stroke-width="1" stroke-dasharray="4"/>

  <!-- Column 1: =CH₂ -->
  <text x="99" y="200" text-anchor="middle" fill="#555" font-size="10">=CH₂ · 2 H atoms</text>
  <text x="99" y="218" text-anchor="middle" fill="#111" font-size="12" font-weight="bold">CO₂ + H₂O</text>

  <!-- Column 2: =CHR -->
  <text x="280" y="200" text-anchor="middle" fill="#555" font-size="10">=CHR · 1 H atom</text>
  <text x="280" y="218" text-anchor="middle" fill="#111" font-size="12" font-weight="bold">RCOOH</text>

  <!-- Column 3: =CR₂ -->
  <text x="461" y="200" text-anchor="middle" fill="#555" font-size="10">=CR₂ · 0 H atoms</text>
  <text x="461" y="218" text-anchor="middle" fill="#111" font-size="12" font-weight="bold">RCOR′  (ketone)</text>
</svg>`,
        caption: 'Summary: cold dilute KMnO₄ → diol (mild); hot concentrated KMnO₄ → oxidative cleavage with products determined by H count on each C=C carbon'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — But-2-ene + hot conc. KMnO₄',
        text: '<strong>Alkene:</strong> CH₃–CH=CH–CH₃ &nbsp;(but-2-ene)<br/><br/><strong>Step 1 — Identify each C=C carbon:</strong><br/>• Left C=C carbon: bonded to –CH₃ and –H → type <strong>=CHR</strong> (monosubstituted, 1 H atom)<br/>• Right C=C carbon: bonded to –CH₃ and –H → type <strong>=CHR</strong> (monosubstituted, 1 H atom)<br/><br/><strong>Step 2 — Apply rules:</strong><br/>• Both =CHR → both give carboxylic acids<br/>• Left C (R = CH₃) → CH₃COOH; Right C (R = CH₃) → CH₃COOH<br/><br/><strong>Products:</strong> 2 × CH₃COOH &nbsp;(ethanoic acid)'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — 2-Methylpropene + hot conc. KMnO₄',
        text: '<strong>Alkene:</strong> (CH₃)₂C=CH₂ &nbsp;(2-methylpropene)<br/><br/><strong>Step 1 — Identify each C=C carbon:</strong><br/>• Left C=C carbon: bonded to two –CH₃ groups, no H → type <strong>=CR₂</strong> (disubstituted, 0 H atoms)<br/>• Right C=C carbon: bonded to two H atoms → type <strong>=CH₂</strong> (terminal, 2 H atoms)<br/><br/><strong>Step 2 — Apply rules:</strong><br/>• =CR₂ (left) → ketone: (CH₃)₂C=O &nbsp;(propanone)<br/>• =CH₂ (right) → CO₂ + H₂O<br/><br/><strong>Products:</strong> propanone + CO₂ + H₂O'
      }
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Deducing Alkene Structure from Products',
        text: '<strong>Given:</strong> An unknown alkene with formula C₅H₁₀ is treated with hot conc. acidified KMnO₄ and gives ethanoic acid (CH₃COOH) and propanoic acid (CH₃CH₂COOH).<br/><br/><strong>Step 1 — Identify the fragment that gave each acid (=CHR → RCOOH, so R is the alkyl part):</strong><br/>• CH₃COOH → R = CH₃, so fragment was =CH–CH₃<br/>• CH₃CH₂COOH → R = CH₃CH₂, so fragment was =CH–CH₂CH₃<br/><br/><strong>Step 2 — Rejoin the two =CHR fragments at the original C=C position:</strong><br/>→ CH₃–CH=CH–CH₂CH₃ &nbsp;(pent-2-ene)<br/><br/><strong>Check:</strong> molecular formula C₅H₁₀ ✓ (5 C, 10 H — one degree of unsaturation)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Working Backwards from Oxidation Products',
        text: '1. Identify what type each product is: CO₂ / carboxylic acid / ketone.<br/>2. For each carboxylic acid RCOOH, the fragment was a =CHR unit — R is the alkyl chain in the acid excluding –COOH.<br/>3. For a ketone RCOR′, the fragment was =CR(R′) — both R and R′ are the alkyl groups on the ketone carbon.<br/>4. If CO₂ is produced, there was a terminal =CH₂ group.<br/>5. Rejoin all fragments at the C=C bond to reconstruct the original alkene.<br/>6. Verify by checking the molecular formula adds up.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Do not confuse mild oxidation (diol) with vigorous oxidation (cleavage) — state the correct conditions clearly.<br/>• For vigorous oxidation, remember to analyse EACH C=C carbon independently; the two carbons may give different product types.<br/>• When deducing structure from products, rejoin at C=C — do NOT add a CH₂ between the fragments.<br/>• Do not forget CO₂ + H₂O as a product when a terminal =CH₂ group is present.'
      }
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the conditions for mild oxidation: cold, dilute, acidified KMnO₄.', checked: false },
          { text: 'State the observation for both reactions: purple KMnO₄ → colourless.', checked: false },
          { text: 'State the product of mild oxidation: diol (two –OH groups added across C=C).', checked: false },
          { text: 'State the conditions for vigorous oxidation: hot, concentrated, acidified KMnO₄.', checked: false },
          { text: 'Predict cleavage product from each C=C carbon: =CH₂ → CO₂; =CHR → RCOOH; =CR₂ → ketone.', checked: false },
          { text: 'Correctly apply rules to BOTH C=C carbons and list all oxidation products.', checked: false },
          { text: 'Deduce the structure of an unknown alkene by working backwards from its oxidation products.', checked: false }
        ]
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Cold dilute acidified KMnO₄ (mild): alkene → diol (two –OH added across C=C, syn addition); purple → colourless. Hot conc. acidified KMnO₄ (vigorous): C=C cleaved completely; =CH₂ → CO₂ + H₂O; =CHR → RCOOH; =CR₂ → ketone. To deduce an unknown alkene from products: identify each fragment type, rejoin at C=C, and verify the molecular formula.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'c1',
        blockId: 'list-diol',
        prompt: 'State the conditions and product when an alkene reacts with cold dilute acidified KMnO₄. What colour change is observed?'
      },
      {
        id: 'c2',
        blockId: 'table-products',
        prompt: 'For hot conc. acidified KMnO₄ cleavage, what product forms from each C=C carbon type: (a) =CH₂, (b) =CHR, (c) =CR₂?'
      },
      {
        id: 'c3',
        blockId: 'callout-we1',
        prompt: 'Identify the products when but-2-ene (CH₃CH=CHCH₃) is treated with hot concentrated acidified KMnO₄.'
      },
      {
        id: 'c4',
        blockId: 'callout-we2',
        prompt: 'Predict all products when 2-methylpropene [(CH₃)₂C=CH₂] is treated with hot concentrated acidified KMnO₄.'
      },
      {
        id: 'c5',
        blockId: 'callout-we3',
        prompt: 'Hot conc. KMnO₄ oxidation of an unknown alkene C₅H₁₀ gives ethanoic acid and propanoic acid. Identify the alkene and explain your reasoning.'
      }
    ],
    summaryText: 'Cold dilute KMnO₄ (mild): alkene → diol; purple → colourless. Hot conc. KMnO₄ (vigorous): cleaves C=C; =CH₂ → CO₂+H₂O; =CHR → RCOOH; =CR₂ → ketone. Deduce alkene: identify fragment type per product, rejoin at C=C.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_5_6;