export const note_olevel_chemistry_2_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-1-4-isotopes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define isotopes, describe examples of isotopes, and calculate relative atomic mass as a weighted average from isotope data.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What are Isotopes?', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Isotopes',
        text: '<strong>Isotopes</strong> are atoms of the <strong>same element</strong> that have the <strong>same atomic number (Z)</strong> but <strong>different mass numbers (A)</strong>.<br/><br/>This means they have:<br/>• The <strong>same number of protons</strong> (same element)<br/>• The <strong>same number of electrons</strong> (same chemical properties)<br/>• <strong>Different numbers of neutrons</strong> (different mass numbers)<br/><br/>Isotopes have <strong>identical chemical properties</strong> (same electron configuration) but slightly different <strong>physical properties</strong> (different densities, slightly different boiling points).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Examples of Isotopes', level: 2 }
    },
    {
      id: 'svg-isotopes-carbon',
      type: 'svg',
      data: {
        caption: 'Isotopes of Carbon: C-12 has 6 neutrons, C-14 has 8 neutrons. Both have 6 protons and 6 electrons.',
        svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <!-- C-12 -->
  <g transform="translate(150, 140)">
    <!-- Nucleus -->
    <circle cx="0" cy="0" r="25" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <text x="0" y="-4" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444">6p⁺</text>
    <text x="0" y="10" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#64748b">6n⁰</text>
    
    <!-- Shells -->
    <circle cx="0" cy="0" r="50" fill="none" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="4,4"/>
    <circle cx="0" cy="-50" r="5" fill="#3b82f6"/>
    <circle cx="0" cy="50" r="5" fill="#3b82f6"/>

    <circle cx="0" cy="0" r="80" fill="none" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="4,4"/>
    <circle cx="0" cy="-80" r="5" fill="#3b82f6"/>
    <circle cx="80" cy="0" r="5" fill="#3b82f6"/>
    <circle cx="0" cy="80" r="5" fill="#3b82f6"/>
    <circle cx="-80" cy="0" r="5" fill="#3b82f6"/>

    <text x="0" y="115" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="var(--color-text)">Carbon-12</text>
    <text x="0" y="135" text-anchor="middle" font-family="var(--font-sans)" font-size="14" fill="var(--color-text-secondary)">¹²C (98.9%)</text>
  </g>

  <!-- C-14 -->
  <g transform="translate(450, 140)">
    <!-- Nucleus -->
    <circle cx="0" cy="0" r="25" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <text x="0" y="-4" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444">6p⁺</text>
    <text x="0" y="10" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#64748b">8n⁰</text>
    
    <!-- Shells -->
    <circle cx="0" cy="0" r="50" fill="none" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="4,4"/>
    <circle cx="0" cy="-50" r="5" fill="#3b82f6"/>
    <circle cx="0" cy="50" r="5" fill="#3b82f6"/>

    <circle cx="0" cy="0" r="80" fill="none" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="4,4"/>
    <circle cx="0" cy="-80" r="5" fill="#3b82f6"/>
    <circle cx="80" cy="0" r="5" fill="#3b82f6"/>
    <circle cx="0" cy="80" r="5" fill="#3b82f6"/>
    <circle cx="-80" cy="0" r="5" fill="#3b82f6"/>

    <text x="0" y="115" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="16" fill="var(--color-text)">Carbon-14</text>
    <text x="0" y="135" text-anchor="middle" font-family="var(--font-sans)" font-size="14" fill="var(--color-text-secondary)">¹⁴C (~0.01%)</text>
  </g>
</svg>`
      }
    },
    {
      id: 'tbl-isotopes',
      type: 'comparisonTable',
      data: {
        caption: 'Isotopes of common elements',
        headers: ['Element', 'Isotope', 'Protons', 'Neutrons', 'Electrons', 'Natural Abundance'],
        rows: [
          ['Chlorine', 'Cl-35 (³⁵₁₇Cl)', '17', '18', '17', '75%'],
          ['Chlorine', 'Cl-37 (³⁷₁₇Cl)', '17', '20', '17', '25%'],
          ['Carbon', 'C-12 (¹²₆C)', '6', '6', '6', '98.9%'],
          ['Carbon', 'C-14 (¹⁴₆C)', '6', '8', '6', '~0.01% (radioactive)'],
          ['Hydrogen', 'H-1 (protium)', '1', '0', '1', '99.98%'],
          ['Hydrogen', 'H-2 (deuterium)', '1', '1', '1', '0.02%']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Calculating Relative Atomic Mass (Ar)', level: 2 }
    },
    {
      id: 'call-ar',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Relative Atomic Mass Formula',
        text: 'The relative atomic mass (Ar) is the <strong>weighted average</strong> of the masses of all naturally occurring isotopes, taking into account their relative abundance:<br/><br/>Ar = Σ (mass of isotope × % abundance) ÷ 100'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Ar of Chlorine',
        text: 'Chlorine has two isotopes:<br/>• Cl-35: 75% abundance, mass 35<br/>• Cl-37: 25% abundance, mass 37<br/><br/>Ar = (35 × 75 + 37 × 25) ÷ 100<br/>Ar = (2625 + 925) ÷ 100<br/>Ar = 3550 ÷ 100<br/>Ar = <strong>35.5</strong><br/><br/>This explains why chlorine\'s Ar is 35.5 (not a whole number).'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Why Ar is Not Always a Whole Number',
        text: 'Relative atomic mass values that are not whole numbers (e.g. Cl = 35.5, Cu = 63.5) are due to the existence of isotopes. The Ar is a weighted average, not the mass of a single atom.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Isotopes are atoms of the same element with the same proton number but different neutron numbers. They have identical chemical properties but different physical properties. Relative atomic mass is the weighted average of isotope masses based on their natural abundances.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Isotopes: same protons, different neutrons; same chemical properties. Ar = weighted average of isotope masses × abundances / 100.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define isotopes and state what is the same and different between them.', answer: 'Isotopes are atoms of the same element with the same atomic number (Z) but different mass numbers (A). Same protons, same electrons → same chemical properties. Different neutrons → different physical properties.' },
      { id: 'cue-2', blockId: 'tbl-isotopes', prompt: 'How many neutrons do Cl-35 and Cl-37 each have?', answer: 'Cl-35: 35−17 = 18 neutrons. Cl-37: 37−17 = 20 neutrons.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'Calculate the Ar of chlorine given Cl-35 (75%) and Cl-37 (25%).', answer: 'Ar = (35×75 + 37×25) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100 = 35.5' }
    ]
  },
  evidence: [],
  mentions: []
};
