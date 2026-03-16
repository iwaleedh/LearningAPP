export const note_olevel_chemistry_3_3_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-5-titration-calculations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use titration results and mole ratios to calculate the concentration or volume of a reactant or product.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Acid-Base Titration', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is a Titration?',
        text: 'A <strong>titration</strong> is a method to find the exact volume of one solution that reacts with a known volume of another solution.<br/><br/>The <strong>equivalence point (end point)</strong> is when moles of acid exactly react with moles of base — shown by a colour change of an indicator.<br/><br/><strong>Mean titre</strong> = average of concordant (close) titre results.'
      }
    },
    {
      id: 'svg-titration-setup',
      type: 'svg',
      data: {
        caption: 'A standard titration setup: Using a burette to accurately add an acid to a base until the indicator changes colour.',
        svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.8"/>
      <stop offset="20%" stop-color="#f8fafc" stop-opacity="0.4"/>
      <stop offset="80%" stop-color="#e2e8f0" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="acid" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fca5a5" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#fee2e2" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#fca5a5" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="base" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#e0f2fe" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.8"/>
    </linearGradient>
  </defs>

  <g transform="translate(150, 20)">
    <!-- Burette outline -->
    <path d="M 40 10 L 40 220 L 45 230 L 45 260 L 55 260 L 55 230 L 60 220 L 60 10 Z" fill="url(#glass)" stroke="var(--color-border)" stroke-width="2"/>
    <!-- Burette tap -->
    <rect x="35" y="240" width="30" height="8" rx="2" fill="var(--color-text-secondary)"/>
    <circle cx="50" cy="244" r="6" fill="#333"/>
    
    <!-- Acid liquid in burette -->
    <path d="M 42 60 L 42 220 L 47 230 L 47 240 L 53 240 L 53 230 L 58 220 L 58 60 Z" fill="url(#acid)"/>
    <!-- Meniscus -->
    <ellipse cx="50" cy="60" rx="8" ry="3" fill="#ef4444" fill-opacity="0.6" stroke="#b91c1c" stroke-width="1"/>
    
    <!-- Scale markings -->
    <line x1="40" y1="30" x2="48" y2="30" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="40" y1="50" x2="45" y2="50" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="40" y1="70" x2="48" y2="70" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="40" y1="90" x2="45" y2="90" stroke="var(--color-border)" stroke-width="1"/>
    <line x1="40" y1="110" x2="48" y2="110" stroke="var(--color-border)" stroke-width="1"/>

    <!-- Labels for Burette -->
    <text x="100" y="65" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Burette (Acid)</text>
    <path d="M 90 60 L 65 60" stroke="var(--color-text-secondary)" stroke-width="1" fill="none"/>
    
    <text x="100" y="245" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Tap / Stopcock</text>
    <path d="M 90 240 L 70 240" stroke="var(--color-text-secondary)" stroke-width="1" fill="none"/>

    <!-- Drops falling -->
    <circle cx="50" cy="275" r="3" fill="#fca5a5"/>
    <circle cx="50" cy="290" r="3" fill="#fca5a5"/>

    <!-- Conical Flask -->
    <g transform="translate(0, 310)">
      <path d="M 40 -10 L 60 -10 L 60 10 L 90 60 L 10 60 L 40 10 Z" fill="url(#glass)" stroke="var(--color-border)" stroke-width="2"/>
      
      <!-- Base liquid in flask -->
      <path d="M 22 40 L 78 40 L 88 58 L 12 58 Z" fill="url(#base)"/>
      <ellipse cx="50" cy="40" rx="28" ry="4" fill="#0284c7" fill-opacity="0.4" stroke="#0369a1" stroke-width="1"/>
    </g>

    <!-- Label for Flask -->
    <text x="-80" y="360" font-family="var(--font-sans)" font-size="14" fill="var(--color-text)">Conical Flask</text>
    <text x="-80" y="375" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">(Alkali + Indicator)</text>
    <path d="M -5 355 L 20 355" stroke="var(--color-text-secondary)" stroke-width="1" fill="none"/>
  </g>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Calculation Method', level: 2 }
    },
    {
      id: 'call-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Titration Calculation Steps',
        text: '1. Calculate moles of one substance: n = c × V (V in dm³)<br/>2. Use the mole ratio from the balanced equation<br/>3. Calculate moles of the other substance<br/>4. Calculate concentration: c = n ÷ V<br/>   (or mass: m = n × M)'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Find concentration of NaOH',
        text: '25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.1 mol/dm³ HCl.<br/>Equation: HCl + NaOH → NaCl + H₂O<br/>Mole ratio HCl : NaOH = 1 : 1<br/><br/>n(HCl) = 0.1 × (20.0/1000) = 0.002 mol<br/>n(NaOH) = 0.002 mol (1:1 ratio)<br/>c(NaOH) = 0.002 ÷ (25.0/1000) = 0.002 ÷ 0.025<br/><strong>c(NaOH) = 0.08 mol/dm³</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Sulfuric acid + NaOH (2:1 ratio)',
        text: '25.0 cm³ of 0.2 mol/dm³ NaOH is neutralised by H₂SO₄ 0.1 mol/dm³.<br/>Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O<br/>Ratio H₂SO₄ : NaOH = 1 : 2<br/><br/>n(NaOH) = 0.2 × 0.025 = 0.005 mol<br/>n(H₂SO₄) = 0.005 ÷ 2 = 0.0025 mol<br/>V(H₂SO₄) = n ÷ c = 0.0025 ÷ 0.1 = 0.025 dm³<br/><strong>= 25.0 cm³</strong>'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The most common mistakes in titration calculations:<br/>1. Forgetting to convert cm³ to dm³ (÷1000)<br/>2. Using the wrong mole ratio — always check H₂SO₄ + 2NaOH (1:2 ratio)<br/>3. Using the titre instead of the mean titre<br/><br/>Show each step clearly for full marks.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Titration: use n = c × V, then mole ratio, then c = n/V for the unknown. Always convert cm³ to dm³. Check the mole ratio from the balanced equation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Titration steps: n = c×V; mole ratio; c = n/V. Convert cm³ to dm³. Check mole ratio from balanced equation.',
    cues: [
      { id: 'cue-1', blockId: 'call-steps', prompt: 'State the steps for a titration calculation.', answer: '1. n = c×V for known substance. 2. Use mole ratio from balanced equation. 3. Find moles of unknown. 4. c = n/V or m = n×M.' },
      { id: 'cue-2', blockId: 'call-worked1', prompt: '25 cm³ of KOH neutralises 12.5 cm³ of 0.2 mol/dm³ H₂SO₄. Find [KOH]. (H₂SO₄+2KOH→K₂SO₄+2H₂O)', answer: 'n(H₂SO₄) = 0.2×0.0125 = 0.0025 mol; n(KOH) = 2×0.0025 = 0.005 mol; c(KOH) = 0.005/0.025 = 0.2 mol/dm³.' },
      { id: 'cue-3', blockId: 'call-def', prompt: 'What is meant by the end point of a titration?', answer: 'The point at which the acid and alkali have completely reacted (equivalence point). Shown by a permanent colour change of the indicator.' }
    ]
  },
  evidence: [],
  mentions: []
};
