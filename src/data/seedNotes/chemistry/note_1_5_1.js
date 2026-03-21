/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 1
 * "Geometric (E/Z) isomerism"
 * Source: Pearson Edexcel IAL Chemistry — Section 5A.2
 */
export const note_chemistry_1_5_1 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand geometric (cis/trans and E/Z) isomerism. Use the CIP priority rules to assign E or Z configuration. Identify whether a molecule can exhibit geometric isomerism.' },
      terms: []
    },
    {
      id: 'h-cause',
      type: 'heading',
      data: { text: 'Cause of Geometric Isomerism', level: 2 },
      terms: []
    },
    {
      id: 'callout-cause',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why geometric isomers exist',
        text: 'Geometric isomers arise because the <strong>π bond locks the C=C</strong> — no rotation is possible. If <strong>each carbon in the C=C has two DIFFERENT groups attached</strong>, the molecule can exist in two arrangements that cannot interconvert without breaking the π bond.<br/><br/>Condition: For geometric isomerism, each carbon of the C=C must have <strong>two different substituents</strong>.'
      },
      terms: ['Geometric isomerism', 'E/Z isomerism', 'cis/trans isomerism']
    },
    {
      id: 'h-cis-trans',
      type: 'heading',
      data: { text: 'cis/trans Isomerism', level: 2 },
      terms: []
    },
    {
      id: 'table-cistrans',
      type: 'comparisonTable',
      data: {
        caption: 'cis and trans isomers of but-2-ene',
        headers: ['Name', 'Description', 'Arrangement'],
        rows: [
          ['cis-but-2-ene', 'CH₃ groups on the SAME side of the double bond', 'CH₃ | H on left carbon; CH₃ | H on right carbon → both CH₃ same side'],
          ['trans-but-2-ene', 'CH₃ groups on OPPOSITE sides of the double bond', 'Different physical properties despite having the same molecular formula']
        ]
      },
      terms: ['cis isomer', 'trans isomer']
    },
        {
            id: 'svg-cistrans',
            type: 'svg',
            data: {
                title: 'cis vs trans but-2-ene',
                svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(100, 100)">
    <text x="50" y="-70" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">cis-but-2-ene</text>
    <line x1="20" y1="0" x2="80" y2="0" stroke="var(--color-primary)" stroke-width="4" />
    <line x1="20" y1="-10" x2="80" y2="-10" stroke="var(--color-primary)" stroke-width="4" />
    <text x="10" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" text-anchor="end" dominant-baseline="middle">C</text>
    <text x="90" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" dominant-baseline="middle">C</text>
    <line x1="-5" y1="10" x2="-25" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="10" x2="125" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="-5" y1="-20" x2="-25" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="-20" x2="125" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <text x="-30" y="-55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-success)">CH₃</text>
    <text x="130" y="-55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-success)">CH₃</text>
    <text x="-30" y="55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-text-secondary)">H</text>
    <text x="130" y="55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H</text>
    <ellipse cx="50" cy="-60" rx="90" ry="30" fill="none" stroke="var(--color-success)" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
    <text x="50" y="-105" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="middle">Same side (polar)</text>
  </g>
  <line x1="300" y1="20" x2="300" y2="230" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="4,4" />
  <g transform="translate(400, 100)">
    <text x="50" y="-70" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">trans-but-2-ene</text>
    <line x1="20" y1="0" x2="80" y2="0" stroke="var(--color-primary)" stroke-width="4" />
    <line x1="20" y1="-10" x2="80" y2="-10" stroke="var(--color-primary)" stroke-width="4" />
    <text x="10" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" text-anchor="end" dominant-baseline="middle">C</text>
    <text x="90" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" dominant-baseline="middle">C</text>
    <line x1="-5" y1="10" x2="-25" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="10" x2="125" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="-5" y1="-20" x2="-25" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="-20" x2="125" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <text x="-30" y="-55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-success)">CH₃</text>
    <text x="130" y="-55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H</text>
    <text x="-30" y="55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-text-secondary)">H</text>
    <text x="130" y="55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-success)">CH₃</text>
    <path d="M-20,-50 L120,50" fill="none" stroke="var(--color-success)" stroke-width="2" stroke-dasharray="5,5" opacity="0.6" />
    <text x="140" y="-20" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="start">Opposite sides</text>
    <text x="140" y="-5" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="start">(non-polar)</text>
  </g>
</svg>`,
                caption: 'In the cis isomer, the two identical methyl groups sit on the same side of the double bond, creating a net dipole. In the trans isomer, they sit opposite each other, cancelling out their dipoles.'
            }
        },
        {
            id: 'svg-cistrans',
            type: 'svg',
            data: {
                title: 'cis vs trans but-2-ene',
                svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(100, 100)">
    <text x="50" y="-70" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">cis-but-2-ene</text>
    <line x1="20" y1="0" x2="80" y2="0" stroke="var(--color-primary)" stroke-width="4" />
    <line x1="20" y1="-10" x2="80" y2="-10" stroke="var(--color-primary)" stroke-width="4" />
    <text x="10" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" text-anchor="end" dominant-baseline="middle">C</text>
    <text x="90" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" dominant-baseline="middle">C</text>
    <line x1="-5" y1="10" x2="-25" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="10" x2="125" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="-5" y1="-20" x2="-25" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="-20" x2="125" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <text x="-30" y="-55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-success)">CH₃</text>
    <text x="130" y="-55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-success)">CH₃</text>
    <text x="-30" y="55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-text-secondary)">H</text>
    <text x="130" y="55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H</text>
    <ellipse cx="50" cy="-60" rx="90" ry="30" fill="none" stroke="var(--color-success)" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
    <text x="50" y="-105" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="middle">Same side (polar)</text>
  </g>
  <line x1="300" y1="20" x2="300" y2="230" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="4,4" />
  <g transform="translate(400, 100)">
    <text x="50" y="-70" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">trans-but-2-ene</text>
    <line x1="20" y1="0" x2="80" y2="0" stroke="var(--color-primary)" stroke-width="4" />
    <line x1="20" y1="-10" x2="80" y2="-10" stroke="var(--color-primary)" stroke-width="4" />
    <text x="10" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" text-anchor="end" dominant-baseline="middle">C</text>
    <text x="90" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" dominant-baseline="middle">C</text>
    <line x1="-5" y1="10" x2="-25" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="10" x2="125" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="-5" y1="-20" x2="-25" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="-20" x2="125" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <text x="-30" y="-55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-success)">CH₃</text>
    <text x="130" y="-55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H</text>
    <text x="-30" y="55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-text-secondary)">H</text>
    <text x="130" y="55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-success)">CH₃</text>
    <path d="M-20,-50 L120,50" fill="none" stroke="var(--color-success)" stroke-width="2" stroke-dasharray="5,5" opacity="0.6" />
    <text x="140" y="-20" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="start">Opposite sides</text>
    <text x="140" y="-5" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="start">(non-polar)</text>
  </g>
</svg>`,
                caption: 'In the cis isomer, the two identical methyl groups sit on the same side of the double bond, creating a net dipole. In the trans isomer, they sit opposite each other, cancelling out their dipoles.'
            }
        },
    {
      id: 'h-properties',
      type: 'heading',
      data: { text: 'Physical Properties of cis/trans Isomers', level: 2 },
      terms: []
    },
    {
      id: 'callout-bp-mp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Boiling vs Melting points',
        text: '<strong>Boiling Point:</strong> <em>Cis</em> isomers are generally polar (bond dipoles do not cancel). <em>Trans</em> isomers are usually non-polar (dipoles cancel out). Because <em>cis</em> isomers have stronger dipole-dipole intermolecular forces, they have a <strong>higher boiling point</strong>.<br/><br/><strong>Melting Point:</strong> <em>Trans</em> isomers are straighter and pack more efficiently in the solid lattice than the "U-shaped" <em>cis</em> isomers. Better packing means stronger intermolecular forces in the solid state, giving <em>trans</em> isomers a <strong>higher melting point</strong>.'
      },
      terms: ['Dipoles', 'Polarity', 'Packing']
    },
    {
      id: 'h-ez',
      type: 'heading',
      data: { text: 'E/Z Naming — CIP Priority Rules', level: 2 },
      terms: []
    },
    {
      id: 'p-ez',
      type: 'paragraph',
      data: { text: 'The cis/trans system only works when each carbon has a hydrogen. For compounds with <strong>three or four different groups</strong> attached to the C=C bond, we use the <strong>E/Z nomenclature</strong> based on the <strong>Cahn–Ingold–Prelog (CIP) priority rules</strong>.' },
      terms: ['Cahn-Ingold-Prelog rules']
    },
    {
      id: 'callout-cip',
      type: 'callout',
      data: {
        style: 'key',
        title: 'CIP Priority Rules',
        text: 'Assign priorities to the two groups on each C of the double bond based on <strong>atomic number</strong>:<br/>• Higher atomic number → higher priority (e.g. Br > Cl > O > N > C > H)<br/>• If first atoms are the same, compare the next atom in the chain.<br/><br/>• <strong>Z</strong> (from German <em>zusammen</em> = "together"): higher priority groups on <strong>same side</strong> of the double bond.<br/>• <strong>E</strong> (from German <em>entgegen</em> = "opposite"): higher priority groups on <strong>opposite sides</strong>.'
      },
      terms: ['E isomer', 'Z isomer', 'CIP rules', 'Priority']
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Assign E/Z to CHBr=CClF',
        text: 'Left carbon (CHBr=): H and Br. Br > H (higher at. no.) → Br has priority.<br/>Right carbon (=CClF): Cl and F. Cl > F (at. no. 17 > 9) → Cl has priority.<br/><br/>If Br and Cl are on the SAME side → <strong>Z</strong>-CHBr=CClF<br/>If Br and Cl are on OPPOSITE sides → <strong>E</strong>-CHBr=CClF'
      },
      terms: []
    },
        {
            id: 'svg-cip-worked',
            type: 'svg',
            data: {
                title: 'Assigning E or Z configuration',
                svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-cip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-primary)" />
    </marker>
  </defs>
  <text x="300" y="30" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">CHBr=CClF</text>
  <rect x="50" y="60" width="200" height="130" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2" rx="8" />
  <text x="150" y="85" font-family="Inter, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="var(--color-text)">Left Carbon</text>
  <text x="80" y="120" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">1.</text>
  <text x="110" y="120" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="var(--color-success)">Br (At. No. 35)</text>
  <text x="80" y="160" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">2.</text>
  <text x="110" y="160" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H (At. No. 1)</text>
  <rect x="350" y="60" width="200" height="130" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2" rx="8" />
  <text x="450" y="85" font-family="Inter, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="var(--color-text)">Right Carbon</text>
  <text x="380" y="120" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">1.</text>
  <text x="410" y="120" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="var(--color-success)">Cl (At. No. 17)</text>
  <text x="380" y="160" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">2.</text>
  <text x="410" y="160" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">F (At. No. 9)</text>
  <path d="M 260 135 L 340 135" stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#arrow-cip)" />
  <text x="300" y="125" font-family="Inter, sans-serif" font-size="12" fill="var(--color-primary)" text-anchor="middle">Compare</text>
  <text x="300" y="220" font-family="Inter, sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="var(--color-text-secondary)">Z-isomer = Br &amp; Cl same side. E-isomer = Br &amp; Cl opposite.</text>
</svg>`,
                caption: 'The highest priority groups on each carbon are identified using Cahn-Ingold-Prelog (CIP) rules (based on atomic number). Their relative positions then determine if it is E or Z.'
            }
        },
        {
            id: 'svg-cip-worked',
            type: 'svg',
            data: {
                title: 'Assigning E or Z configuration',
                svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-cip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-primary)" />
    </marker>
  </defs>
  <text x="300" y="30" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">CHBr=CClF</text>
  <rect x="50" y="60" width="200" height="130" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2" rx="8" />
  <text x="150" y="85" font-family="Inter, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="var(--color-text)">Left Carbon</text>
  <text x="80" y="120" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">1.</text>
  <text x="110" y="120" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="var(--color-success)">Br (At. No. 35)</text>
  <text x="80" y="160" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">2.</text>
  <text x="110" y="160" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H (At. No. 1)</text>
  <rect x="350" y="60" width="200" height="130" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2" rx="8" />
  <text x="450" y="85" font-family="Inter, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="var(--color-text)">Right Carbon</text>
  <text x="380" y="120" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">1.</text>
  <text x="410" y="120" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="var(--color-success)">Cl (At. No. 17)</text>
  <text x="380" y="160" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">2.</text>
  <text x="410" y="160" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">F (At. No. 9)</text>
  <path d="M 260 135 L 340 135" stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#arrow-cip)" />
  <text x="300" y="125" font-family="Inter, sans-serif" font-size="12" fill="var(--color-primary)" text-anchor="middle">Compare</text>
  <text x="300" y="220" font-family="Inter, sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="var(--color-text-secondary)">Z-isomer = Br &amp; Cl same side. E-isomer = Br &amp; Cl opposite.</text>
</svg>`,
                caption: 'The highest priority groups on each carbon are identified using Cahn-Ingold-Prelog (CIP) rules (based on atomic number). Their relative positions then determine if it is E or Z.'
            }
        }
  ,
    {
      id: 'callout-exam-5-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "E/Z Priority Rules",
        text: "Do not mix up Z and E. Remember that E is 'Enemies' (highest priority groups on <strong>opposite</strong> sides) and Z is 'Zame Zide' (<strong>same side</strong>). Priority is ALWAYS based on atomic number of the directly attached atom."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-cause', prompt: 'State the two conditions required for a molecule to exhibit geometric isomerism.' },
      { id: 'c2', blockId: 'table-cistrans', prompt: 'Describe the difference between cis-but-2-ene and trans-but-2-ene.' },
      { id: 'c3', blockId: 'callout-bp-mp', prompt: 'Explain why cis isomers generally have higher boiling points, whereas trans isomers have higher melting points.' },
      { id: 'c4', blockId: 'callout-cip', prompt: 'Explain the CIP priority rules. What do E and Z mean?' },
      { id: 'c5', blockId: 'callout-worked', prompt: 'Assign E or Z to the following: (CHCl=CBrCH₃) where the Cl and Br are on the same side.' }
    ],
    summaryText: 'Geometric isomers: exist because C=C π bond prevents rotation. Condition: each C must have two different groups. cis = same-side; trans = opposite-side (for simple cases with H). E/Z uses CIP priority rules (higher atomic number = higher priority). Z = together (higher priority groups same side). E = entgegen (opposite sides). cis isomers have higher boiling points (polar, dipole-dipole). trans isomers have higher melting points (straighter, better packing).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_1;