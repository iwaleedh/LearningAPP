export const note_olevel_chemistry_3_3_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-6-empirical-and-molecular-formula.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Determine the molecular formula of a compound from its empirical formula and relative molecular mass.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Empirical vs Molecular Formula', level: 2 }
    },
    {
      id: 'svg-formula',
      type: 'svg',
      data: {
        caption: 'Empirical (simplest ratio) vs Molecular (actual) formula for Ethene (C₂H₄)',
        svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
  <rect width="500" height="200" fill="var(--color-surface)" rx="8"/>
  
  <!-- Empirical -->
  <rect x="50" y="40" width="160" height="120" fill="white" fill-opacity="0.05" stroke="var(--color-primary)" stroke-width="2" rx="8"/>
  <text x="130" y="70" font-family="sans-serif" font-size="16" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">Empirical Formula</text>
  <text x="130" y="110" font-family="sans-serif" font-size="28" font-weight="bold" fill="var(--color-text)" text-anchor="middle">CH₂</text>
  <text x="130" y="140" font-family="sans-serif" font-size="14" fill="var(--color-text-secondary)" text-anchor="middle">Ratio 1:2</text>
  
  <!-- Multiplier -->
  <path d="M 220 100 L 280 100" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="250" y="90" font-family="sans-serif" font-size="16" font-weight="bold" fill="var(--color-success)" text-anchor="middle">× 2 (n)</text>
  
  <!-- Molecular -->
  <rect x="290" y="40" width="160" height="120" fill="var(--color-primary)" fill-opacity="0.1" stroke="var(--color-primary)" stroke-width="2" rx="8"/>
  <text x="370" y="70" font-family="sans-serif" font-size="16" font-weight="bold" fill="var(--color-primary)" text-anchor="middle">Molecular Formula</text>
  <text x="370" y="110" font-family="sans-serif" font-size="28" font-weight="bold" fill="var(--color-text)" text-anchor="middle">C₂H₄</text>
  <text x="370" y="140" font-family="sans-serif" font-size="14" fill="var(--color-text-secondary)" text-anchor="middle">Actual number</text>

  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="var(--color-text)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-diff',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Empirical vs Molecular Formula',
        text: '<strong>Empirical formula:</strong> simplest whole-number ratio of atoms in a compound<br/>e.g. CH₂O<br/><br/><strong>Molecular formula:</strong> actual number of atoms of each element in one molecule<br/>e.g. C₆H₁₂O₆ (glucose)<br/><br/>The molecular formula is always a whole-number multiple of the empirical formula.<br/><br/>Molecular formula = (empirical formula) × n<br/>where n = Mᵣ(molecular) ÷ Mᵣ(empirical)'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Find molecular from empirical',
        text: 'Empirical formula = CH₂. Mᵣ of compound = 56. (Aᵣ: C=12, H=1)<br/><br/>Mᵣ of CH₂ = 12 + 2 = 14<br/>n = 56 ÷ 14 = 4<br/>Molecular formula = (CH₂) × 4 = <strong>C₄H₈</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: From percentage composition to molecular formula',
        text: 'Compound: 85.7% C, 14.3% H. Mᵣ = 42. (Aᵣ: C=12, H=1)<br/><br/><strong>Step 1 — Empirical formula:</strong><br/>Moles: C = 85.7/12 = 7.14; H = 14.3/1 = 14.3<br/>Ratio: 7.14:14.3 = 1:2 → empirical formula CH₂<br/><br/><strong>Step 2 — Molecular formula:</strong><br/>Mᵣ(CH₂) = 14; n = 42 ÷ 14 = 3<br/><strong>Molecular formula = C₃H₆</strong>'
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of empirical and molecular formulae',
        headers: ['Compound', 'Empirical', 'Molecular', 'Mᵣ(emp)', 'Mᵣ(mol)', 'n'],
        rows: [
          ['Glucose', 'CH₂O', 'C₆H₁₂O₆', '30', '180', '6'],
          ['Ethyne (acetylene)', 'CH', 'C₂H₂', '13', '26', '2'],
          ['Benzene', 'CH', 'C₆H₆', '13', '78', '6'],
          ['Hydrogen peroxide', 'HO', 'H₂O₂', '17', '34', '2']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'n (the multiplier) must always be a whole number. If you get a non-integer, recheck your empirical formula calculation. Note: compounds like water (H₂O) and CO₂ have molecular formula = empirical formula (n=1).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Molecular formula = empirical formula × n, where n = Mᵣ(molecular) ÷ Mᵣ(empirical). Find empirical formula from % composition first, then scale up using the given Mᵣ.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Molecular formula = (empirical formula) × n, where n = Mᵣ(molecule)/Mᵣ(empirical).',
    cues: [
      { id: 'cue-1', blockId: 'call-diff', prompt: 'What is the difference between empirical and molecular formula?', answer: 'Empirical formula is the simplest whole-number ratio of atoms. Molecular formula is the actual number of each atom in one molecule. The molecular formula is a whole-number multiple of the empirical formula.' },
      { id: 'cue-2', blockId: 'call-worked1', prompt: 'Empirical formula CH with Mᵣ = 26. Find the molecular formula.', answer: 'Mᵣ(CH) = 13; n = 26/13 = 2; molecular formula = C₂H₂.' },
      { id: 'cue-3', blockId: 'call-worked2', prompt: 'State the steps to go from % composition to molecular formula.', answer: '1. Convert % to moles (÷Aᵣ). 2. Find simplest whole-number ratio = empirical formula. 3. Calculate n = Mᵣ(molecule)/Mᵣ(empirical). 4. Multiply empirical by n.' }
    ]
  },
  evidence: [],
  mentions: []
};
