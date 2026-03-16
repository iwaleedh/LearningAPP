export const note_olevel_chemistry_9_9_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-2-2-explaining-reactivity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain differences in reactivity of metals in terms of ease of ion formation, ionisation energy, and atomic radius.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Explaining Reactivity of Metals', level: 2 }
    },
    {
      id: 'svg-atomic-radius',
      type: 'svg',
      data: {
        caption: 'Metals with a larger atomic radius (like Potassium) have weaker attraction between the nucleus and outer electrons, making them easier to lose, and therefore more reactive.',
        svg: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Lithium Atom -->
  <text x="150" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Lithium (Li)</text>
  <text x="150" y="45" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">Smaller radius = Stronger attraction</text>

  <circle cx="150" cy="140" r="15" fill="#ef4444" />
  <text x="150" y="144" font-family="var(--font-sans)" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">+3</text>

  <!-- Shells -->
  <circle cx="150" cy="140" r="35" fill="none" stroke="var(--color-text-secondary)" stroke-dasharray="4,4" />
  <circle cx="150" cy="140" r="55" fill="none" stroke="var(--color-text-secondary)" stroke-dasharray="4,4" />

  <!-- Electrons -->
  <circle cx="150" cy="105" r="4" fill="#3b82f6" />
  <circle cx="150" cy="175" r="4" fill="#3b82f6" />
  <!-- Outer electron -->
  <circle cx="205" cy="140" r="4" fill="#eab308" />

  <!-- Attraction Force -->
  <line x1="168" y1="140" x2="198" y2="140" stroke="#ef4444" stroke-width="3" />
  <path d="M 198 140 L 192 136 L 192 144 Z" fill="#ef4444" />
  <path d="M 168 140 L 174 136 L 174 144 Z" fill="#ef4444" />

  <!-- Potassium Atom -->
  <text x="380" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Potassium (K)</text>
  <text x="380" y="45" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">Larger radius = Weaker attraction</text>

  <circle cx="380" cy="140" r="15" fill="#ef4444" />
  <text x="380" y="144" font-family="var(--font-sans)" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">+19</text>

  <!-- Shells -->
  <circle cx="380" cy="140" r="25" fill="none" stroke="var(--color-text-secondary)" stroke-dasharray="4,4" />
  <circle cx="380" cy="140" r="45" fill="none" stroke="var(--color-text-secondary)" stroke-dasharray="4,4" />
  <circle cx="380" cy="140" r="65" fill="none" stroke="var(--color-text-secondary)" stroke-dasharray="4,4" />
  <circle cx="380" cy="140" r="85" fill="none" stroke="var(--color-text-secondary)" stroke-dasharray="4,4" />

  <!-- Outer electron -->
  <circle cx="465" cy="140" r="4" fill="#eab308" />
  
  <!-- Outer electron escaping -->
  <path d="M 470 140 C 480 130, 490 120, 500 110" fill="none" stroke="#eab308" stroke-width="2" stroke-dasharray="4,4"/>
  <circle cx="500" cy="110" r="4" fill="#eab308" />
  <text x="495" y="100" font-family="var(--font-sans)" font-size="12" fill="#eab308" font-weight="bold">e⁻ lost easily</text>

  <!-- Attraction Force -->
  <line x1="398" y1="140" x2="455" y2="140" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,2"/>
  <path d="M 455 140 L 450 138 L 450 142 Z" fill="#ef4444" />
  <path d="M 398 140 L 403 138 L 403 142 Z" fill="#ef4444" />
</svg>`
      }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What Controls Metal Reactivity?',
        text: 'A metal reacts by <strong>losing electrons</strong> to form positive ions:<br/>M → M<sup>n+</sup> + ne<sup>−</sup><br/><br/>The <strong>easier</strong> it is to remove electrons (i.e. the lower the ionisation energy), the <strong>more reactive</strong> the metal.<br/><br/>Two key factors:<br/><strong>1. Atomic radius</strong> — larger atoms have outer electrons further from the nucleus → weaker attraction → electrons removed more easily → more reactive<br/><strong>2. Nuclear charge</strong> — more protons pull electrons more strongly → harder to remove → less reactive<br/><br/>Going <strong>down Group I or II</strong>: atomic radius increases, shielding increases → reactivity increases'
      }
    },
    {
      id: 'tbl-trends',
      type: 'comparisonTable',
      data: {
        caption: 'Trends in Group I vs reactivity',
        headers: ['Metal', 'Electron config.', 'Atomic radius trend', 'Ionisation energy trend', 'Reactivity'],
        rows: [
          ['Lithium (Li)', '2,1', 'Smallest', 'Highest in group', 'Least reactive in group'],
          ['Sodium (Na)', '2,8,1', 'Medium', 'Medium', 'More reactive'],
          ['Potassium (K)', '2,8,8,1', 'Largest', 'Lowest in group', 'Most reactive in group']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Answering Reactivity Explanation Questions',
        text: 'Use this structure for exam answers:<br/><br/>"When metal X reacts, it loses electrons to form metal ions. Metal X has a <strong>larger atomic radius</strong> than metal Y, so its outer electrons are <strong>further from the nucleus</strong> and experience <strong>less electrostatic attraction</strong>. Therefore, X loses electrons more easily and is more reactive."'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Metals react by losing electrons. Reactivity increases with atomic radius (outer electrons further from nucleus, less attraction → easier loss). Reactivity decreases with increasing nuclear charge. Going down a group in the periodic table, metals become more reactive.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Metals react by losing electrons. Larger atomic radius → outer electrons further from nucleus → easier to lose → more reactive.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What determines the reactivity of a metal, at the atomic level?', answer: 'The ease with which a metal atom loses outer electrons to form positive ions. A larger atomic radius means weaker attraction on outer electrons, so they are lost more easily.' },
      { id: 'cue-2', blockId: 'tbl-trends', prompt: 'Why is potassium more reactive than sodium?', answer: 'Potassium has a larger atomic radius. Its outer electron is further from the nucleus and experiences less electrostatic attraction, so it is lost more easily when potassium reacts.' },
      { id: 'cue-3', blockId: 'call-key', prompt: 'Write a general equation for a metal reacting to form ions.', answer: 'M → Mⁿ⁺ + ne⁻  (the metal loses electrons to form positive ions).' }
    ]
  },
  evidence: [],
  mentions: []
};
