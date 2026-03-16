export const note_olevel_chemistry_6_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-1-physical-and-chemical-changes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between physical and chemical changes, giving examples of each.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Physical vs Chemical Changes', level: 2 }
    },
    {
      id: 'call-phys',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Physical Changes',
        text: '<strong>Physical changes</strong> do not produce new substances. The change is reversible and no new chemical bonds are made or broken.<br/><br/>Examples:<br/>• Melting ice (H₂O solid → H₂O liquid)<br/>• Dissolving salt in water<br/>• Boiling water<br/>• Stretching a spring<br/>• Cutting a material<br/><br/>The substance can be recovered unchanged — same chemical identity.'
      }
    },
    {
      id: 'call-chem',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Changes',
        text: '<strong>Chemical changes (reactions)</strong> produce new substances with different properties. Usually irreversible. New chemical bonds are made and broken.<br/><br/>Signs of a chemical change:<br/>• Gas produced (bubbles/effervescence)<br/>• Colour change<br/>• Precipitate formed<br/>• Permanent temperature change<br/>• Light or sound produced<br/><br/>Examples:<br/>• Iron rusting: 4Fe + 3O₂ → 2Fe₂O₃<br/>• Burning magnesium: 2Mg + O₂ → 2MgO<br/>• Acid + carbonate → salt + water + CO₂'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Physical vs Chemical Changes',
        headers: ['Feature', 'Physical Change', 'Chemical Change'],
        rows: [
          ['New substance formed?', 'No', 'Yes'],
          ['Reversible?', 'Usually Yes', 'Usually No'],
          ['Bonds', 'No bonds broken', 'Bonds broken and formed'],
          ['Example', 'Melting ice', 'Burning magnesium'],
          ['Energy change', 'Small', 'Often large']
        ]
      }
    },
    {
      id: 'svg-physical-chemical',
      type: 'svg',
      data: {
        caption: 'Physical changes (like melting ice) are easily reversed and form no new substances. Chemical changes (like burning magnesium) are difficult to reverse and form new substances (MgO).',
        svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="100%" height="100%" fill="var(--color-surface)" rx="8" />
  
  <line x1="300" y1="20" x2="300" y2="200" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="6,6"/>

  <!-- Left Side: Physical Change -->
  <text x="150" y="40" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Physical Change</text>
  <text x="150" y="60" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">Melting Ice</text>

  <!-- Ice Cube -->
  <rect x="70" y="90" width="40" height="40" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="4"/>
  <text x="90" y="115" font-family="var(--font-sans)" font-size="20" fill="#0284c7" text-anchor="middle">🧊</text>
  <text x="90" y="145" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">H₂O (s)</text>

  <!-- Reversible Arrow -->
  <path d="M 125 105 L 165 105" stroke="var(--color-primary)" stroke-width="2" marker-end="url(#arrow-fwd)"/>
  <path d="M 165 115 L 125 115" stroke="var(--color-primary)" stroke-width="2" marker-end="url(#arrow-back)"/>
  
  <!-- Water Puddle -->
  <path d="M 180 125 Q 190 115 200 125 Q 220 120 230 125 Q 240 135 220 135 L 185 135 Z" fill="#38bdf8" />
  <text x="205" y="145" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">H₂O (l)</text>
  
  <text x="150" y="180" font-family="var(--font-sans)" font-size="12" font-style="italic" fill="var(--color-success)" text-anchor="middle">Reversible • Same Molecule</text>

  <!-- Right Side: Chemical Change -->
  <text x="450" y="40" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Chemical Change</text>
  <text x="450" y="60" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)" text-anchor="middle">Burning Magnesium</text>

  <!-- Mg Ribbon -->
  <rect x="360" y="105" width="40" height="8" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
  <text x="380" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Mg + O₂</text>

  <!-- Irreversible Arrow -->
  <path d="M 415 110 L 465 110" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-fwd-red)"/>
  
  <!-- Fire / Glowing MgO -->
  <circle cx="510" cy="100" r="16" fill="#fef08a" />
  <circle cx="510" cy="100" r="10" fill="#fde047" />
  <path d="M 495 115 Q 510 90 525 115" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
  <text x="510" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">MgO</text>
  <text x="510" y="145" font-family="var(--font-sans)" font-size="10" fill="var(--color-text-secondary)" text-anchor="middle">(White Ash)</text>

  <text x="450" y="180" font-family="var(--font-sans)" font-size="12" font-style="italic" fill="#ef4444" text-anchor="middle">Irreversible • New Substance</text>

  <!-- Marker Defs -->
  <defs>
    <marker id="arrow-fwd" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="var(--color-primary)"/>
    </marker>
    <marker id="arrow-back" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="6 0, 0 2, 6 4" fill="var(--color-primary)"/>
    </marker>
    <marker id="arrow-fwd-red" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#ef4444"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The key test is: "Is a new substance formed?" If yes, it is a chemical change. Dissolving is physical (the ions just separate; they can be recovered by evaporation). Burning is always a chemical change. Electrolysis is a chemical change (new substances made).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Physical change: no new substance formed, usually reversible (melting, dissolving). Chemical change: new substance formed, usually irreversible, large energy change (burning, rusting, reactions with acids).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Physical change: no new substance, reversible. Chemical change: new substance, usually irreversible. Signs: gas, colour change, precipitate, temperature change.',
    cues: [
      { id: 'cue-1', blockId: 'call-phys', prompt: 'State three examples of physical changes.', answer: 'Melting, dissolving, boiling, cutting, stretching. No new substance formed.' },
      { id: 'cue-2', blockId: 'call-chem', prompt: 'State four signs that a chemical change has occurred.', answer: 'Gas produced; colour change; precipitate formed; large temperature change; light or sound produced.' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'What is the key difference between a physical and chemical change?', answer: 'In a chemical change, new substances are formed. In a physical change, no new substances are formed.' }
    ]
  },
  evidence: [],
  mentions: []
};
