export const note_olevel_chemistry_7_7_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-1-3-proton-transfer-strong-and-weak-acids.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain acid–base reactions as proton transfer, and distinguish between strong and weak acids.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Acid–Base Theory: Proton Transfer', level: 2 }
    },
    {
      id: 'call-brønsted',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Brønsted–Lowry Definitions',
        text: '<strong>Acid</strong> = proton (H⁺) donor<br/><strong>Base</strong> = proton (H⁺) acceptor<br/><br/>In the reaction: HCl + H₂O → H₃O⁺ + Cl⁻<br/>• HCl <strong>donates</strong> H⁺ → acid<br/>• H₂O <strong>accepts</strong> H⁺ → base<br/><br/>In the reaction: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻<br/>• H₂O <strong>donates</strong> H⁺ → acid<br/>• NH₃ <strong>accepts</strong> H⁺ → base<br/><br/>Note: H₂O can act as both acid and base (amphoteric).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Strong vs Weak Acids', level: 2 }
    },
    {
      id: 'tbl-strength',
      type: 'comparisonTable',
      data: {
        caption: 'Strong vs Weak Acids',
        headers: ['Property', 'Strong Acid', 'Weak Acid'],
        rows: [
          ['Ionisation', 'Completely ionised in water', 'Partially / incompletely ionised in water'],
          ['Equation arrow', '→ (one-way)', '⇌ (equilibrium)'],
          ['pH (same concentration)', 'Lower pH (more H⁺)', 'Higher pH (fewer H⁺)'],
          ['Conductivity', 'Higher (more ions)', 'Lower (fewer ions)'],
          ['Examples', 'HCl, H₂SO₄, HNO₃', 'CH₃COOH (ethanoic acid), H₂CO₃, HCN, citric acid']
        ]
      }
    },
    {
      id: 'call-comparison',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Comparing HCl vs CH₃COOH (both 0.1 mol/dm³)',
        text: 'HCl(aq) → H⁺(aq) + Cl⁻(aq) [complete: all HCl ionises]<br/>• pH ≈ 1<br/><br/>CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq) [partial: only ≈1% ionises]<br/>• pH ≈ 3<br/><br/>Same concentration but very different H⁺ concentrations → different pH and electrical conductivity.'
      }
    },
    {
      id: 'svg-strong-weak',
      type: 'svg',
      data: {
        caption: 'Strong vs Weak Acid at the molecular level: Strong acid fully ionises, generating many H⁺ ions. Weak acid mostly stays as molecules (HA) with very few H⁺ ions.',
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- LEFT BEAKER: Strong Acid -->
  <path d="M 60 70 L 60 180 A 10 10 0 0 0 70 190 L 170 190 A 10 10 0 0 0 180 180 L 180 70" fill="none" stroke="var(--color-text)" stroke-width="3" />
  <ellipse cx="120" cy="70" rx="60" ry="10" fill="none" stroke="var(--color-text)" stroke-width="2" />
  
  <path d="M 62 120 Q 90 125 120 120 T 178 120 L 178 180 A 8 8 0 0 1 170 188 L 70 188 A 8 8 0 0 1 62 180 Z" fill="#3d1212" />
  <text x="120" y="40" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">Strong Acid (HCl)</text>
  <text x="120" y="55" font-family="var(--font-sans)" font-size="10" fill="#b91c1c" text-anchor="middle">Fully ionised (100%)</text>

  <!-- Ions in strong acid -->
  <circle cx="80" cy="140" r="8" fill="#ef4444" /> <text x="80" y="143" font-family="var(--font-sans)" font-size="8" fill="#1e293b" text-anchor="middle">H⁺</text>
  <circle cx="100" cy="160" r="10" fill="#94a3b8" /> <text x="100" y="163" font-family="var(--font-sans)" font-size="8" fill="#1e293b" text-anchor="middle">Cl⁻</text>
  
  <circle cx="140" cy="130" r="8" fill="#ef4444" /> <text x="140" y="133" font-family="var(--font-sans)" font-size="8" fill="#1e293b" text-anchor="middle">H⁺</text>
  <circle cx="160" cy="150" r="10" fill="#94a3b8" /> <text x="160" y="153" font-family="var(--font-sans)" font-size="8" fill="#1e293b" text-anchor="middle">Cl⁻</text>
  
  <circle cx="130" cy="170" r="8" fill="#ef4444" /> <text x="130" y="173" font-family="var(--font-sans)" font-size="8" fill="#1e293b" text-anchor="middle">H⁺</text>
  <circle cx="90" cy="135" r="10" fill="#94a3b8" /> <text x="90" y="138" font-family="var(--font-sans)" font-size="8" fill="#1e293b" text-anchor="middle">Cl⁻</text>
  

  <!-- RIGHT BEAKER: Weak Acid -->
  <path d="M 320 70 L 320 180 A 10 10 0 0 0 330 190 L 430 190 A 10 10 0 0 0 440 180 L 440 70" fill="none" stroke="var(--color-text)" stroke-width="3" />
  <ellipse cx="380" cy="70" rx="60" ry="10" fill="none" stroke="var(--color-text)" stroke-width="2" />
  
  <path d="M 322 120 Q 350 125 380 120 T 438 120 L 438 180 A 8 8 0 0 1 430 188 L 330 188 A 8 8 0 0 1 322 180 Z" fill="#532407" />
  <text x="380" y="40" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#f59e0b" text-anchor="middle">Weak Acid (Ethanoic)</text>
  <text x="380" y="55" font-family="var(--font-sans)" font-size="10" fill="#b45309" text-anchor="middle">Partially ionised (~1%)</text>

  <!-- Particles in weak acid -->
  <circle cx="350" cy="140" r="8" fill="#ef4444" /> <text x="350" y="143" font-family="var(--font-sans)" font-size="8" fill="#1e293b" text-anchor="middle">H⁺</text>
  <circle cx="370" cy="160" r="12" fill="#532407" /> <text x="370" y="163" font-family="var(--font-sans)" font-size="8" fill="#b45309" text-anchor="middle">A⁻</text>
  
  <!-- Intact molecules HA -->
  <ellipse cx="410" cy="140" rx="14" ry="8" fill="#532407" /> <text x="410" y="143" font-family="var(--font-sans)" font-size="8" fill="#9a3412" text-anchor="middle">HA</text>
  <ellipse cx="380" cy="130" rx="14" ry="8" fill="#532407" /> <text x="380" y="133" font-family="var(--font-sans)" font-size="8" fill="#9a3412" text-anchor="middle">HA</text>
  <ellipse cx="400" cy="170" rx="14" ry="8" fill="#532407" /> <text x="400" y="173" font-family="var(--font-sans)" font-size="8" fill="#9a3412" text-anchor="middle">HA</text>
  <ellipse cx="340" cy="170" rx="14" ry="8" fill="#532407" /> <text x="340" y="173" font-family="var(--font-sans)" font-size="8" fill="#9a3412" text-anchor="middle">HA</text>

</svg>`
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Misconception',
        text: '"Strong" does not mean "concentrated"! A strong acid (like HCl) is fully ionised regardless of concentration. A weak acid (like CH₃COOH) is always partially ionised regardless of concentration.<br/><br/>You can have:<br/>• Concentrated weak acid (high molarity CH₃COOH) — still partially ionised<br/>• Dilute strong acid (low molarity HCl) — still fully ionised'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acid = proton donor; base = proton acceptor (Brønsted–Lowry). Strong acid: fully ionised (→), low pH. Weak acid: partially ionised (⇌), higher pH for same concentration. Strength ≠ concentration.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acid = H⁺ donor; base = H⁺ acceptor. Strong acid (HCl): fully ionised. Weak acid (CH₃COOH): partially ionised. Same concentration → different pH.',
    cues: [
      { id: 'cue-1', blockId: 'call-brønsted', prompt: 'Define an acid and a base according to Brønsted–Lowry theory.', answer: 'An acid is a proton (H⁺) donor; a base is a proton (H⁺) acceptor.' },
      { id: 'cue-2', blockId: 'tbl-strength', prompt: 'Explain why ethanoic acid has a higher pH than hydrochloric acid at the same concentration.', answer: 'Ethanoic acid is a weak acid — it only partially ionises in water, producing fewer H⁺ ions. HCl is a strong acid that completely ionises, producing more H⁺ ions, so its pH is lower.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'A student says a concentrated weak acid must have a lower pH than a dilute strong acid. Is this always true? Explain.', answer: 'Not necessarily. "Strong" and "concentrated" are independent. A concentrated weak acid can have more H⁺ at very high molarity, but for typical exam questions the strong acid has a lower pH at the same concentration.' }
    ]
  },
  evidence: [],
  mentions: []
};
