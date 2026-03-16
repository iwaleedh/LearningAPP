export const note_olevel_chemistry_3_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-1-2-empirical-formulae-and-formulae-of-ionic-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the empirical formula of a compound from experimental data and determine formulae of ionic compounds from their names.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Empirical Formula', level: 2 }
    },
    {
      id: 'call-emp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is an Empirical Formula?',
        text: 'The <strong>empirical formula</strong> is the <strong>simplest whole-number ratio</strong> of atoms of each element in a compound.<br/><br/>It is the most reduced ratio possible.<br/><br/>Examples:<br/>• Glucose C₆H₁₂O₆ → empirical formula CH₂O<br/>• Hydrogen peroxide H₂O₂ → empirical formula HO<br/>• Water H₂O → empirical formula H₂O (already simplest)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Calculating Empirical Formula from Data', level: 2 }
    },
    {
      id: 'call-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Steps to find empirical formula',
        text: '1. Write the masses (or percentages) of each element<br/>2. Divide each by the element\'s relative atomic mass (Aᵣ) → gives moles<br/>3. Divide each by the smallest number of moles → gives ratio<br/>4. Round to whole numbers (if close) or multiply up if needed'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Empirical formula from masses',
        text: 'A compound contains 2.4 g of carbon and 6.4 g of oxygen.<br/>Aᵣ: C = 12, O = 16<br/><br/>Moles of C = 2.4 ÷ 12 = 0.2 mol<br/>Moles of O = 6.4 ÷ 16 = 0.4 mol<br/><br/>Ratio: C : O = 0.2 : 0.4 = 1 : 2<br/><br/><strong>Empirical formula = CO₂</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Empirical formula from percentages',
        text: 'Compound: 40% C, 6.7% H, 53.3% O (by mass). Aᵣ: C=12, H=1, O=16<br/><br/>Moles: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33<br/>Ratio: 3.33 : 6.7 : 3.33 → divide by 3.33 → 1 : 2 : 1<br/><br/><strong>Empirical formula = CH₂O</strong>'
      }
    },
    {
      id: 'svg-empirical-steps',
      type: 'svg',
      data: {
        caption: 'Step-by-step table method for calculating empirical formulae.',
        svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(20, 20)">
    <!-- Table Background and Borders -->
    <rect x="0" y="0" width="560" height="220" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2"/>
    
    <!-- Rows lines -->
    <line x1="0" y1="40" x2="560" y2="40" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="0" y1="80" x2="560" y2="80" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="0" y1="120" x2="560" y2="120" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="0" y1="160" x2="560" y2="160" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="0" y1="220" x2="560" y2="220" stroke="var(--color-border)" stroke-width="1"/>
    
    <!-- Col lines -->
    <line x1="200" y1="0" x2="200" y2="220" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="320" y1="0" x2="320" y2="220" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="440" y1="0" x2="440" y2="220" stroke="var(--color-border)" stroke-width="1"/>

    <!-- Row 1: Headers -->
    <text x="100" y="26" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Element</text>
    <text x="260" y="26" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)" text-anchor="middle">C</text>
    <text x="380" y="26" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)" text-anchor="middle">H</text>
    <text x="500" y="26" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)" text-anchor="middle">O</text>

    <!-- Row 2: Mass / % -->
    <text x="100" y="66" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">1. Mass / %</text>
    <text x="260" y="66" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">40.0</text>
    <text x="380" y="66" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">6.7</text>
    <text x="500" y="66" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">53.3</text>

    <!-- Row 3: Ar -->
    <text x="100" y="106" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">2. Aᵣ (Atomic Mass)</text>
    <text x="260" y="106" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">12.0</text>
    <text x="380" y="106" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">1.0</text>
    <text x="500" y="106" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">16.0</text>

    <!-- Row 4: Divide Mass by Ar -->
    <text x="100" y="146" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">3. Divide (Moles)</text>
    <text x="260" y="146" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">40 ÷ 12 = 3.33</text>
    <text x="380" y="146" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">6.7 ÷ 1 = 6.7</text>
    <text x="500" y="146" font-family="var(--font-sans)" fill="var(--color-text-secondary)" text-anchor="middle">53.3 ÷ 16 = 3.33</text>

    <!-- Row 5: Divide by Smallest -->
    <text x="100" y="196" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">4. ÷ Smallest</text>
    <text x="100" y="210" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-tertiary)" text-anchor="middle">(Smallest = 3.33)</text>
    <text x="260" y="196" font-family="var(--font-sans)" font-weight="bold" fill="#059669" text-anchor="middle">1</text>
    <text x="380" y="196" font-family="var(--font-sans)" font-weight="bold" fill="#059669" text-anchor="middle">2</text>
    <text x="500" y="196" font-family="var(--font-sans)" font-weight="bold" fill="#059669" text-anchor="middle">1</text>

    <!-- Final Result -->
    <text x="280" y="255" font-family="var(--font-sans)" font-size="18" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Resulting Empirical Formula:</text>
    <text x="410" y="255" font-family="var(--font-sans)" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">CH₂O</text>
  </g>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Formulae of Ionic Compounds', level: 2 }
    },
    {
      id: 'call-ionic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Naming and formulae of ionic compounds',
        text: 'The <strong>name</strong> of an ionic compound tells you the ions present:<br/>• First word = cation (positive ion)<br/>• Second word = anion (negative ion)<br/><br/>Common suffixes:<br/>• "-ide" → simple anion (e.g. chloride = Cl⁻, oxide = O²⁻)<br/>• "-ate" → oxyanion (e.g. sulfate = SO₄²⁻, nitrate = NO₃⁻, carbonate = CO₃²⁻)<br/>• "-ite" → oxyanion with less oxygen (e.g. sulfite = SO₃²⁻)<br/>• Roman numerals → variable charge metals: iron(II) = Fe²⁺, iron(III) = Fe³⁺'
      }
    },
    {
      id: 'tbl-ions',
      type: 'comparisonTable',
      data: {
        caption: 'Common ions and their charges',
        headers: ['Ion name', 'Formula', 'Charge'],
        rows: [
          ['Ammonium', 'NH₄⁺', '+1'],
          ['Sodium', 'Na⁺', '+1'],
          ['Calcium', 'Ca²⁺', '+2'],
          ['Iron(II)', 'Fe²⁺', '+2'],
          ['Iron(III)', 'Fe³⁺', '+3'],
          ['Hydroxide', 'OH⁻', '−1'],
          ['Nitrate', 'NO₃⁻', '−1'],
          ['Chloride', 'Cl⁻', '−1'],
          ['Carbonate', 'CO₃²⁻', '−2'],
          ['Sulfate', 'SO₄²⁻', '−2']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Empirical formula = simplest whole-number ratio of atoms. Calculate by: masses → divide by Aᵣ → divide by smallest → whole number ratio. Ionic formulae from ion charges using cross-over method, ensuring overall neutrality.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Empirical formula = simplest ratio. Steps: mass → ÷Aᵣ → ÷smallest → ratio. Ionic formulae from charges using cross-over method.',
    cues: [
      { id: 'cue-1', blockId: 'call-emp', prompt: 'What is an empirical formula?', answer: 'The simplest whole-number ratio of atoms of each element in a compound.' },
      { id: 'cue-2', blockId: 'call-steps', prompt: 'State the steps to calculate an empirical formula from masses.', answer: '1. Write masses of each element. 2. Divide by Aᵣ to get moles. 3. Divide by smallest mole value. 4. Round to whole numbers.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'A compound has 1.2 g C and 4.8 g O. Find the empirical formula.', answer: 'Moles C = 1.2/12 = 0.1; moles O = 4.8/16 = 0.3. Ratio C:O = 0.1:0.3 = 1:3. Empirical formula = CO₃.' }
    ]
  },
  evidence: [],
  mentions: []
};
