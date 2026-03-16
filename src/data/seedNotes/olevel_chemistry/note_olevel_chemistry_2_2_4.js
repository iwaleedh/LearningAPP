export const note_olevel_chemistry_2_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-2-1-ions-and-ionic-bonds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how ions are formed by electron transfer, describe ionic bonding, and draw dot-and-cross diagrams for ionic compounds.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Ion Formation', level: 2 }
    },
    {
      id: 'call-ions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How Ions Form',
        text: 'An <strong>ion</strong> is a charged particle formed when an atom loses or gains electrons.<br/><br/><strong>Cations (positive ions)</strong> — formed when metal atoms <strong>lose</strong> electrons to achieve a stable full outer shell. E.g. Na → Na⁺ + e⁻<br/><br/><strong>Anions (negative ions)</strong> — formed when non-metal atoms <strong>gain</strong> electrons. E.g. Cl + e⁻ → Cl⁻<br/><br/>Atoms form ions to achieve the <strong>stable electron configuration of a noble gas</strong> (full outer shell).'
      }
    },
    {
      id: 'tbl-common-ions',
      type: 'comparisonTable',
      data: {
        caption: 'Common ion charges',
        headers: ['Group', 'Ion charge', 'Examples'],
        rows: [
          ['Group 1', '+1', 'Li⁺, Na⁺, K⁺'],
          ['Group 2', '+2', 'Mg²⁺, Ca²⁺, Ba²⁺'],
          ['Group 3', '+3', 'Al³⁺'],
          ['Group 6', '−2', 'O²⁻, S²⁻'],
          ['Group 7', '−1', 'F⁻, Cl⁻, Br⁻, I⁻'],
          ['Transition metals', 'variable', 'Fe²⁺, Fe³⁺, Cu²⁺, Cu⁺, Zn²⁺'],
          ['Ammonium', '+1', 'NH₄⁺'],
          ['Hydroxide', '−1', 'OH⁻'],
          ['Nitrate', '−1', 'NO₃⁻'],
          ['Carbonate', '−2', 'CO₃²⁻'],
          ['Sulfate', '−2', 'SO₄²⁻']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Ionic Bonding', level: 2 }
    },
    {
      id: 'call-ionic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ionic Bond Definition',
        text: 'An <strong>ionic bond</strong> is the strong <strong>electrostatic attraction</strong> between oppositely charged ions (+ve and −ve).<br/><br/>It forms between a <strong>metal</strong> and a <strong>non-metal</strong> when electrons are transferred from the metal to the non-metal.'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Dot-and-Cross: Sodium Chloride (NaCl)',
        text: 'Na has configuration 2,8,1 — it loses 1 electron → Na⁺ (2,8) [noble gas config of Ne]<br/>Cl has configuration 2,8,7 — it gains 1 electron → Cl⁻ (2,8,8) [noble gas config of Ar]<br/><br/>In the dot-and-cross diagram:<br/>• Draw Na with its outer electron as a dot<br/>• Draw Cl with its 7 outer electrons as crosses<br/>• Show the electron transferred from Na to Cl<br/>• Draw both ions with square brackets and charges: [Na]⁺ [Cl]⁻'
      }
    },
    {
      id: 'svg-nacl-ionic',
      type: 'svg',
      data: {
        caption: 'Dot-and-cross diagram for sodium chloride (NaCl). The sodium atom transfers its outer electron to the chlorine atom.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150">
    <defs>
        <style>
            .nucleus { font-weight: bold; font-family: var(--font-sans); font-size: 16px; text-anchor: middle; dominant-baseline: middle; fill: var(--color-text); }
            .electron-dot { fill: #e74c3c; }
            .electron-cross { stroke: #3498db; stroke-width: 2; stroke-linecap: round; }
            .shell { fill: none; stroke: var(--color-text-tertiary); stroke-width: 1.5; stroke-dasharray: 4,4; }
            .bracket { fill: none; stroke: var(--color-text); stroke-width: 2; }
            .charge { font-weight: bold; font-family: var(--font-sans); font-size: 16px; fill: var(--color-text); }
        </style>
    </defs>
    <!-- Na+ Ion -->
    <text x="100" y="75" class="nucleus">Na</text>
    <circle cx="100" cy="75" r="45" class="shell"/>
    <circle cx="100" cy="30" r="4" class="electron-dot"/>
    <circle cx="100" cy="120" r="4" class="electron-dot"/>
    <circle cx="55" cy="75" r="4" class="electron-dot"/>
    <circle cx="145" cy="75" r="4" class="electron-dot"/>
    <circle cx="68" cy="43" r="4" class="electron-dot"/>
    <circle cx="132" cy="107" r="4" class="electron-dot"/>
    <circle cx="132" cy="43" r="4" class="electron-dot"/>
    <circle cx="68" cy="107" r="4" class="electron-dot"/>
    <path d="M 45 20 L 40 20 L 40 130 L 45 130" class="bracket"/>
    <path d="M 155 20 L 160 20 L 160 130 L 155 130" class="bracket"/>
    <text x="165" y="25" class="charge">+</text>

    <!-- Cl- Ion -->
    <text x="280" y="75" class="nucleus">Cl</text>
    <circle cx="280" cy="75" r="45" class="shell"/>
    <circle cx="235" cy="75" r="4" class="electron-dot"/>
    <path d="M 276 26 L 284 34 M 284 26 L 276 34" class="electron-cross"/>
    <path d="M 276 116 L 284 124 M 284 116 L 276 124" class="electron-cross"/>
    <path d="M 321 71 L 329 79 M 329 71 L 321 79" class="electron-cross"/>
    <path d="M 244 39 L 252 47 M 252 39 L 244 47" class="electron-cross"/>
    <path d="M 308 103 L 316 111 M 316 103 L 308 111" class="electron-cross"/>
    <path d="M 308 39 L 316 47 M 316 39 L 308 47" class="electron-cross"/>
    <path d="M 244 103 L 252 111 M 252 103 L 244 111" class="electron-cross"/>
    <path d="M 225 20 L 220 20 L 220 130 L 225 130" class="bracket"/>
    <path d="M 335 20 L 340 20 L 340 130 L 335 130" class="bracket"/>
    <text x="345" y="25" class="charge">−</text>
</svg>`
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Dot-and-Cross Diagrams',
        text: 'Show only the outer shell electrons. Use dots for one atom and crosses for the other to show electron origin. Both resulting ions must show full outer shells. Always include charges and square brackets in the final diagram.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ions form when atoms gain or lose electrons to achieve noble gas configurations. Metals lose electrons to form cations; non-metals gain electrons to form anions. Ionic bonds are strong electrostatic attractions between oppositely charged ions, typically between metals and non-metals.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Ions form by electron transfer; metals lose electrons (cations), non-metals gain electrons (anions); ionic bond is electrostatic attraction between opposite charges.',
    cues: [
      { id: 'cue-1', blockId: 'call-ions', prompt: 'How do cations and anions differ in how they form?', answer: 'Cations (positive) form when atoms LOSE electrons (metals). Anions (negative) form when atoms GAIN electrons (non-metals). Both achieve a noble gas electron configuration.' },
      { id: 'cue-2', blockId: 'tbl-common-ions', prompt: 'State the charge of ions formed by Group 1, Group 2, Group 6 and Group 7 elements.', answer: 'Group 1: +1 (e.g. Na⁺). Group 2: +2 (e.g. Ca²⁺). Group 6: −2 (e.g. O²⁻). Group 7: −1 (e.g. Cl⁻).' },
      { id: 'cue-3', blockId: 'call-ionic', prompt: 'Define an ionic bond.', answer: 'An ionic bond is the strong electrostatic attraction between oppositely charged ions (+ve and −ve), formed by electron transfer from a metal to a non-metal.' }
    ]
  },
  evidence: [],
  mentions: []
};
