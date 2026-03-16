export const note_olevel_biology_6_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/6 Plant Nutrition/6-1-1-photosynthesis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'State the word and balanced chemical equations for photosynthesis, explain the roles of chlorophyll and chloroplasts, and describe the uses of glucose produced by plants.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Photosynthesis?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Photosynthesis',
        text: '<strong>Photosynthesis</strong> is the process by which green plants (and other photosynthetic organisms) use <strong>light energy</strong> to convert <strong>carbon dioxide</strong> and <strong>water</strong> into <strong>glucose</strong> and <strong>oxygen</strong>.<br/><br/><strong>Word equation:</strong><br/>carbon dioxide + water → glucose + oxygen<br/>(using light energy and chlorophyll)<br/><br/><strong>Balanced chemical equation:</strong><br/>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂<br/><br/>Photosynthesis is an <strong>endothermic</strong> reaction — it absorbs light energy and converts it to chemical energy stored in glucose.'
      }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Photosynthesis takes place in the <strong>chloroplasts</strong>, organelles found mainly in the cells of green leaves. Inside the chloroplasts is a green pigment called <strong>chlorophyll</strong>, which absorbs light energy — primarily red and blue wavelengths, and reflects green light (which is why leaves appear green). The absorbed light energy is used to drive the reaction that produces glucose from CO₂ and water.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Chloroplasts and Chlorophyll', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of chloroplast features and their roles in photosynthesis',
        headers: ['Structure', 'Description', 'Role in photosynthesis'],
        rows: [
          ['Chloroplast', 'Double-membrane organelle in plant cells; contains thylakoids and stroma', 'Site of photosynthesis; contains all necessary components'],
          ['Chlorophyll', 'Green pigment found in thylakoid membranes within chloroplasts', 'Absorbs light energy (red and blue wavelengths) to power photosynthesis'],
          ['Thylakoids', 'Flattened membrane sacs stacked into grana inside the chloroplast', 'Site of light absorption; chlorophyll is embedded here'],
          ['Stroma', 'Fluid-filled space inside chloroplast surrounding the thylakoids', 'Where CO₂ is fixed into glucose (Calvin cycle reactions)']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Summary diagram of photosynthesis — raw materials, products, and the role of chloroplasts',
        svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="11">
  <rect width="520" height="300" fill="#f0fdf4" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">Photosynthesis Summary</text>

  <!-- Central chloroplast shape -->
  <ellipse cx="260" cy="155" rx="85" ry="65" fill="#86efac" stroke="#16a34a" stroke-width="2.5"/>
  <!-- Thylakoid stacks inside -->
  <rect x="220" y="128" width="80" height="10" rx="3" fill="#4ade80" stroke="#15803d" stroke-width="1"/>
  <rect x="220" y="142" width="80" height="10" rx="3" fill="#4ade80" stroke="#15803d" stroke-width="1"/>
  <rect x="220" y="156" width="80" height="10" rx="3" fill="#4ade80" stroke="#15803d" stroke-width="1"/>
  <text x="260" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#14532d">CHLOROPLAST</text>
  <text x="260" y="185" text-anchor="middle" font-size="9" fill="#14532d">Contains chlorophyll</text>

  <!-- Sun / Light energy -->
  <circle cx="90" cy="75" r="32" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <text x="90" y="71" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">☀ Light</text>
  <text x="90" y="84" text-anchor="middle" font-size="10" fill="#92400e">energy</text>
  <!-- Arrow from sun to chloroplast -->
  <defs>
    <marker id="arrowPS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#d97706"/>
    </marker>
  </defs>
  <line x1="120" y1="100" x2="185" y2="135" stroke="#d97706" stroke-width="2" marker-end="url(#arrowPS)"/>
  <text x="145" y="110" font-size="9" fill="#92400e">absorbed by</text>
  <text x="145" y="121" font-size="9" fill="#92400e">chlorophyll</text>

  <!-- CO2 input -->
  <rect x="15" y="150" width="90" height="35" rx="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">CO₂</text>
  <text x="60" y="178" text-anchor="middle" font-size="9" fill="#374151">from air via stomata</text>
  <defs>
    <marker id="arrowPS2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6"/>
    </marker>
  </defs>
  <line x1="105" y1="162" x2="173" y2="155" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowPS2)"/>

  <!-- H2O input -->
  <rect x="15" y="210" width="90" height="35" rx="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="60" y="225" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">H₂O</text>
  <text x="60" y="238" text-anchor="middle" font-size="9" fill="#374151">from soil via roots</text>
  <line x1="105" y1="225" x2="173" y2="175" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowPS2)"/>

  <!-- Glucose output -->
  <defs>
    <marker id="arrowPS3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#d97706"/>
    </marker>
  </defs>
  <rect x="415" y="148" width="90" height="35" rx="8" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <text x="460" y="163" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Glucose</text>
  <text x="460" y="176" text-anchor="middle" font-size="9" fill="#374151">C₆H₁₂O₆</text>
  <line x1="345" y1="155" x2="413" y2="163" stroke="#d97706" stroke-width="2" marker-end="url(#arrowPS3)"/>

  <!-- Oxygen output -->
  <defs>
    <marker id="arrowPS4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/>
    </marker>
  </defs>
  <rect x="415" y="208" width="90" height="35" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
  <text x="460" y="223" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Oxygen</text>
  <text x="460" y="236" text-anchor="middle" font-size="9" fill="#374151">released via stomata</text>
  <line x1="345" y1="170" x2="413" y2="220" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowPS4)"/>

  <!-- Equation at bottom -->
  <rect x="100" y="262" width="320" height="30" rx="8" fill="white" stroke="#6b7280" stroke-width="1.5"/>
  <text x="260" y="281" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂   (light + chlorophyll)</text>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Uses of Glucose by Plants', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Respiration:</strong> Glucose is used in cellular respiration to release energy (ATP) for all metabolic processes — this occurs in all living cells of the plant.' },
          { text: '<strong>Converted to starch for storage:</strong> Excess glucose is converted to <strong>starch</strong> (insoluble, does not affect osmosis) and stored in chloroplasts, roots, and seeds.' },
          { text: '<strong>Converted to cellulose:</strong> Glucose is used to make <strong>cellulose</strong> for cell walls — essential for structural support and growth.' },
          { text: '<strong>Converted to sucrose for transport:</strong> Glucose is converted to <strong>sucrose</strong> for transport through the phloem to other parts of the plant.' },
          { text: '<strong>Protein synthesis:</strong> Combined with mineral ions (particularly <strong>nitrate ions</strong> to provide nitrogen), glucose provides carbon skeletons for making <strong>amino acids</strong> and proteins.' },
          { text: '<strong>Converted to lipids (fats/oils):</strong> Used for energy storage in seeds and other plant tissues.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Plants do <strong>not</strong> only photosynthesise — they also <strong>respire continuously</strong> (24 hours a day). Photosynthesis only occurs in the light. During the day, when the rate of photosynthesis exceeds the rate of respiration, there is a net release of oxygen. At night, only respiration occurs and plants take in O₂ and release CO₂.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'You must be able to recall both the <strong>word equation</strong> and <strong>balanced chemical equation</strong> for photosynthesis. Also know that glucose is stored as <strong>starch</strong> (not as glucose, because starch is insoluble and does not affect osmotic concentration). When asked why plants store glucose as starch: starch is <strong>insoluble</strong> (does not affect water potential) and <strong>compact</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Photosynthesis converts CO₂ + H₂O → glucose + O₂ using light energy absorbed by chlorophyll in chloroplasts. Equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Glucose is used for respiration, converted to starch (storage), cellulose (cell walls), sucrose (transport), combined with nitrates to make amino acids and proteins, or converted to lipids.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Photosynthesis: CO₂ + H₂O → glucose + O₂ using light and chlorophyll. 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Glucose used for respiration, starch, cellulose, proteins, lipids.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'State the word equation and balanced chemical equation for photosynthesis.',
        answer: 'Word equation: carbon dioxide + water → glucose + oxygen (using light energy and chlorophyll). Chemical equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.'
      },
      {
        id: 'cue-2',
        blockId: 'para-1',
        prompt: 'Where exactly does photosynthesis occur in a plant cell, and which pigment is responsible for absorbing light?',
        answer: 'Photosynthesis occurs in the chloroplasts. The pigment chlorophyll (located in the thylakoid membranes within chloroplasts) absorbs light energy — primarily red and blue wavelengths.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'State FOUR uses of glucose produced during photosynthesis.',
        answer: '1. Respiration (release of energy). 2. Converted to starch for storage. 3. Used to make cellulose for cell walls. 4. Combined with nitrate ions to make amino acids and proteins. (Also: converted to sucrose for transport; converted to lipids for storage.)'
      },
      {
        id: 'cue-4',
        blockId: 'call-3',
        prompt: 'Why do plants store excess glucose as starch rather than keeping it as glucose?',
        answer: 'Starch is insoluble, so it does not affect the water potential of cells (does not interfere with osmosis). It is also compact and does not dissolve into the cell sap. Glucose is soluble and would lower the water potential if accumulated in large amounts.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_6_6_0;
