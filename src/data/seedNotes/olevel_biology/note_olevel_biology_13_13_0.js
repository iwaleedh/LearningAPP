export const note_olevel_biology_13_13_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/13 Excretion In Humans/13-1-1-excretion-overview-skin.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define excretion; distinguish it from egestion; identify the main metabolic waste products and their organs of removal; describe the structure of the skin and its role in excretion and temperature regulation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Excretion?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Excretion</strong> is the removal of <strong>metabolic waste products</strong> from the body — substances produced by chemical reactions <em>inside</em> cells. It is essential because many metabolic wastes are <strong>toxic</strong> if allowed to accumulate.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Excretion vs Egestion — Do NOT Confuse These',
        text: '<strong>Excretion</strong>: removal of <em>metabolic</em> waste produced by cell reactions (e.g. CO₂, urea, excess water).<br/><br/><strong>Egestion</strong>: removal of <em>undigested food</em> (faeces) that was never absorbed into the body. Faeces is NOT a metabolic waste product.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Main Metabolic Waste Products', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Metabolic waste products and their organs of excretion',
        headers: ['Waste Product', 'Source', 'Organ of Excretion'],
        rows: [
          ['Carbon dioxide (CO₂)', 'Aerobic respiration in all cells', 'Lungs (exhaled in air)'],
          ['Urea', 'Deamination of excess amino acids in the liver', 'Kidneys (excreted in urine)'],
          ['Water (excess)', 'Respiration and other metabolic reactions', 'Kidneys, lungs, skin (sweat)'],
          ['Mineral salts (excess)', 'From diet', 'Kidneys and skin (sweat)']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Skin as an Excretory Organ', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'The skin excretes waste by producing <strong>sweat</strong> from <strong>sweat glands</strong> in the dermis. Sweat contains <strong>water</strong>, <strong>urea</strong>, and dissolved <strong>mineral salts</strong>. Although the primary function of sweating is <strong>temperature regulation</strong>, excretion of urea is a secondary function.' }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Structure of the Skin', level: 2 }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Cross-section through human skin showing key structures',
        svg: `<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Background layers -->
  <!-- Epidermis -->
  <rect x="0" y="0" width="580" height="70" fill="#fde8c8"/>
  <text x="10" y="20" font-weight="bold" fill="#7a3a00">EPIDERMIS</text>
  <text x="10" y="38" fill="#7a3a00" font-size="11">Outer protective layer; dead cells on surface</text>

  <!-- Dermis -->
  <rect x="0" y="70" width="580" height="180" fill="#fcd9b0"/>
  <text x="10" y="90" font-weight="bold" fill="#7a3a00">DERMIS</text>

  <!-- Subcutaneous fat -->
  <rect x="0" y="250" width="580" height="70" fill="#f5c48a"/>
  <text x="10" y="275" font-weight="bold" fill="#5a2a00">SUBCUTANEOUS FAT</text>
  <text x="10" y="293" fill="#5a2a00" font-size="11">Insulation and energy store</text>

  <!-- Hair follicle -->
  <line x1="120" y1="0" x2="120" y2="180" stroke="#8B6914" stroke-width="4"/>
  <ellipse cx="120" cy="185" rx="12" ry="18" fill="#8B6914" stroke="#7a4a00" stroke-width="1.5"/>
  <text x="150" y="200" fill="#555" font-size="11">Hair follicle</text>
  <line x1="148" y1="196" x2="135" y2="192" stroke="#555" stroke-width="1"/>

  <!-- Sweat gland (coiled) -->
  <path d="M280 240 Q270 220 285 205 Q300 190 285 175 Q270 160 285 145" fill="none" stroke="#2563eb" stroke-width="3"/>
  <path d="M280 240 Q300 240 295 200 Q290 170 295 145" fill="none" stroke="#2563eb" stroke-width="2" opacity="0.5"/>
  <!-- Sweat duct to surface -->
  <path d="M285 145 Q290 100 295 60 Q298 30 300 0" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="320" y="120" fill="#2563eb" font-size="11">Sweat duct</text>
  <line x1="318" y1="116" x2="300" y2="90" stroke="#2563eb" stroke-width="1"/>
  <text x="310" y="250" fill="#2563eb" font-size="11">Sweat gland</text>
  <line x1="308" y1="246" x2="291" y2="228" stroke="#2563eb" stroke-width="1"/>

  <!-- Blood capillaries -->
  <path d="M60 130 Q90 120 130 135 Q170 150 210 130 Q240 115 270 130" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M60 155 Q90 165 130 150 Q170 135 210 155 Q240 170 270 155" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="60" y="112" fill="#dc2626" font-size="11">Blood capillaries</text>

  <!-- Sebaceous gland -->
  <ellipse cx="150" cy="150" rx="22" ry="14" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
  <text x="160" y="152" fill="#14532d" font-size="10">Sebaceous</text>
  <text x="165" y="164" fill="#14532d" font-size="10">gland</text>

  <!-- Nerve ending -->
  <path d="M420 250 Q430 200 415 170 Q400 140 420 110" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="420" cy="105" r="5" fill="#7c3aed"/>
  <text x="435" y="115" fill="#7c3aed" font-size="11">Sensory nerve</text>
  <text x="440" y="128" fill="#7c3aed" font-size="11">ending</text>

  <!-- Erector pili muscle -->
  <line x1="110" y1="80" x2="122" y2="140" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="60" y="115" fill="#b45309" font-size="10">Erector pili</text>
</svg>`
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Role of the Skin in Temperature Regulation', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Sweating</strong> — sweat glands produce sweat; water in sweat <strong>evaporates</strong> from the skin surface, taking heat energy with it and cooling the body' },
          { text: '<strong>Vasodilation</strong> — when hot, arterioles near skin surface <strong>widen</strong>, increasing blood flow to the skin; more heat is lost by radiation and convection' },
          { text: '<strong>Vasoconstriction</strong> — when cold, arterioles <strong>narrow</strong>, reducing blood flow to the skin surface; less heat is lost' },
          { text: '<strong>Shivering</strong> — involuntary muscle contractions generate heat through increased respiration' },
          { text: '<strong>Erector pili muscles</strong> — contract when cold, raising hairs to trap a layer of insulating air (less effective in humans than in furred animals)' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Sweat Composition',
        text: 'Sweat contains: <strong>water</strong>, <strong>urea</strong> (small amounts — the kidneys excrete most urea), and dissolved <strong>mineral salts</strong> (mainly sodium chloride). Because sweat contains urea, the skin is an excretory organ — but the kidneys are the <strong>main</strong> organ for urea excretion.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Excretion removes metabolic waste (CO₂, urea, water). Excretion differs from egestion (removal of undigested food). The skin excretes via sweat (water + urea + salts) and regulates temperature through sweating, vasodilation/vasoconstriction, and shivering.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Excretion = removal of metabolic waste. Skin removes urea in sweat and regulates temperature via sweating and vasodilation.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is the difference between excretion and egestion?', answer: 'Excretion removes metabolic waste produced by cell reactions; egestion removes undigested food (faeces) that was never absorbed.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Name three metabolic waste products and the organ that excretes each.', answer: 'CO₂ — lungs; urea — kidneys; excess water — kidneys/skin/lungs.' },
      { id: 'cue-3', blockId: 'para-2', prompt: 'What does sweat contain?', answer: 'Water, urea, and dissolved mineral salts (sodium chloride).' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'How does vasodilation help cool the body?', answer: 'Arterioles near the skin surface widen, increasing blood flow; more heat is lost by radiation and convection from the skin.' },
      { id: 'cue-5', blockId: 'list-1', prompt: 'What is vasoconstriction and when does it occur?', answer: 'Vasoconstriction is narrowing of arterioles near the skin surface; it occurs when the body is cold, reducing heat loss.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_13_13_0;
