export const note_olevel_chemistry_2_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-1-2-atomic-structure.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure of an atom, state the relative charges and masses of subatomic particles, and use atomic number and mass number to describe atomic composition.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Subatomic Particles', level: 2 }
    },
    {
      id: 'tbl-particles',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of subatomic particles',
        headers: ['Particle', 'Symbol', 'Relative Charge', 'Relative Mass', 'Location'],
        rows: [
          ['Proton', 'p', '+1', '1', 'Nucleus'],
          ['Neutron', 'n', '0 (neutral)', '1', 'Nucleus'],
          ['Electron', 'e⁻', '−1', '1/1840 (≈ 0)', 'Shells around nucleus']
        ]
      }
    },
    {
      id: 'svg-atom-structure',
      type: 'svg',
      data: {
        caption: 'Simplified structure of an atom (Lithium-7 shown as an example)',
        svg: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid/background can be omitted for clean look -->
  <defs>
    <radialGradient id="proton-grad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#b91c1c" />
    </radialGradient>
    <radialGradient id="neutron-grad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </radialGradient>
    <radialGradient id="electron-grad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </radialGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <g transform="translate(300, 175)">
    <!-- Electron Shells -->
    <circle cx="0" cy="0" r="60" fill="none" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="8,4" />
    <circle cx="0" cy="0" r="120" fill="none" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="8,4" />

    <!-- Electrons (Lithium: 2, 1) -->
    <!-- Shell 1 -->
    <g transform="rotate(45)">
      <circle cx="0" cy="-60" r="8" fill="url(#electron-grad)" filter="url(#glow)" />
      <text x="0" y="-57" text-anchor="middle" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#1e293b">-</text>
    </g>
    <g transform="rotate(225)">
      <circle cx="0" cy="-60" r="8" fill="url(#electron-grad)" filter="url(#glow)" />
      <text x="0" y="-57" text-anchor="middle" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#1e293b">-</text>
    </g>

    <!-- Shell 2 -->
    <g transform="rotate(0)">
      <circle cx="0" cy="-120" r="8" fill="url(#electron-grad)" filter="url(#glow)" />
      <text x="0" y="-117" text-anchor="middle" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#1e293b">-</text>
    </g>

    <!-- Nucleus (Lithium-7: 3 protons, 4 neutrons) -->
    <!-- Neutrons -->
    <circle cx="-8" cy="-8" r="10" fill="url(#neutron-grad)" />
    <circle cx="10" cy="-5" r="10" fill="url(#neutron-grad)" />
    <circle cx="-5" cy="12" r="10" fill="url(#neutron-grad)" />
    <circle cx="12" cy="10" r="10" fill="url(#neutron-grad)" />
    
    <!-- Protons -->
    <circle cx="0" cy="-15" r="10" fill="url(#proton-grad)" />
    <text x="0" y="-11" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b">+</text>
    
    <circle cx="-12" cy="0" r="10" fill="url(#proton-grad)" />
    <text x="-12" y="4" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b">+</text>
    
    <circle cx="8" cy="5" r="10" fill="url(#proton-grad)" />
    <text x="8" y="9" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b">+</text>

    <!-- Labels -->
    <!-- Nucleus Label -->
    <path d="M 15,-15 L 80,-40 L 120,-40" fill="none" stroke="var(--color-text-secondary)" stroke-width="1.5" />
    <text x="125" y="-45" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">Nucleus</text>
    <text x="125" y="-30" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Contains protons</text>
    <text x="125" y="-16" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">&amp; neutrons</text>
    
    <!-- Shell Label -->
    <path d="M -60,0 L -120,-20 L -130,-20" fill="none" stroke="var(--color-text-secondary)" stroke-width="1.5" />
    <text x="-135" y="-25" text-anchor="end" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">Electron Shell</text>
    <text x="-135" y="-10" text-anchor="end" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">(Energy level)</text>

    <!-- Electron Label -->
    <path d="M -85,-85 L -100,-110 L -130,-110" fill="none" stroke="var(--color-text-secondary)" stroke-width="1.5" />
    <text x="-135" y="-115" text-anchor="end" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">Electron (e⁻)</text>
    <text x="-135" y="-100" text-anchor="end" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Charge: -1</text>
    
    <!-- Proton/Neutron legend -->
    <g transform="translate(-250, 100)">
      <rect x="0" y="0" width="140" height="60" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" />
      
      <circle cx="20" cy="20" r="8" fill="url(#proton-grad)" />
      <text x="20" y="24" text-anchor="middle" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#1e293b">+</text>
      <text x="40" y="24" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Proton (p)</text>
      
      <circle cx="20" cy="40" r="8" fill="url(#neutron-grad)" />
      <text x="40" y="44" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Neutron (n)</text>
    </g>
  </g>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Atomic Number and Mass Number', level: 2 }
    },
    {
      id: 'call-numbers',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Atomic Number (Z) and Mass Number (A)',
        text: '<strong>Atomic number (Z)</strong> = number of protons in the nucleus. This defines which element it is — every atom of the same element has the same atomic number.<br/><br/><strong>Mass number (A)</strong> = total number of protons + neutrons in the nucleus. (Electrons have negligible mass so are not counted.)<br/><br/><strong>Number of neutrons</strong> = A − Z<br/><br/>In a <strong>neutral atom</strong>: number of electrons = number of protons = Z'
      }
    },
    {
      id: 'call-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nuclide Notation',
        text: 'Atoms are represented as: <sup>A</sup><sub>Z</sub>X<br/><br/>Example: <sup>23</sup><sub>11</sub>Na (sodium)<br/>• A = 23 (mass number): 11 protons + 12 neutrons<br/>• Z = 11 (atomic number): 11 protons, 11 electrons<br/>• Neutrons = 23 − 11 = 12'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Determining Particle Numbers',
        text: 'For <sup>40</sup><sub>20</sub>Ca (calcium):<br/>• Atomic number Z = 20 → 20 protons<br/>• Mass number A = 40 → protons + neutrons = 40<br/>• Neutrons = 40 − 20 = 20<br/>• Electrons = 20 (neutral atom)<br/><br/>For the Ca²⁺ ion:<br/>• Electrons = 20 − 2 = 18 (lost 2 electrons)'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Ions and Electron Count',
        text: 'For ions: if a positive ion (cation) has charge +n, subtract n electrons from the neutral atom count. If a negative ion (anion) has charge −n, add n electrons. The number of protons NEVER changes in a chemical reaction.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Atoms contain protons (+1, mass 1) and neutrons (0, mass 1) in the nucleus, with electrons (−1, negligible mass) in shells. Atomic number Z = proton count; mass number A = protons + neutrons; neutrons = A − Z. In a neutral atom, electrons = protons.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Atoms have protons and neutrons in the nucleus with electrons in shells; Z = protons, A = protons + neutrons.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-particles', prompt: 'State the relative charge and mass of a proton, neutron and electron.', answer: 'Proton: charge +1, mass 1. Neutron: charge 0, mass 1. Electron: charge −1, mass ≈ 0 (1/1840).' },
      { id: 'cue-2', blockId: 'call-numbers', prompt: 'Define atomic number and mass number.', answer: 'Atomic number (Z) = number of protons; defines the element. Mass number (A) = number of protons + neutrons. Number of neutrons = A − Z.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'For ⁴⁰₂₀Ca, state the number of protons, neutrons and electrons.', answer: '20 protons, 20 neutrons (40−20), 20 electrons (neutral atom).' }
    ]
  },
  evidence: [],
  mentions: []
};
