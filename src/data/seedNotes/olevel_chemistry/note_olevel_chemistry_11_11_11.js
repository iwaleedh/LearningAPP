export const note_olevel_chemistry_11_11_11 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-3-1-polymers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define monomers, polymers, and polymerisation. Distinguish between addition and condensation polymerisation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Polymers', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Monomer:</strong> A small, simple molecule that can join to form a polymer. Must have a functional group that allows bonding.<br/><br/><strong>Polymer:</strong> A very large molecule made of many repeating units (monomers) joined together by covalent bonds.<br/><br/><strong>Polymerisation:</strong> The reaction in which many monomer molecules join together to form a polymer.<br/><br/>n(monomer) → [-monomer-]ₙ (polymer)<br/><br/><strong>Two types:</strong><br/>1. <strong>Addition polymerisation</strong> — monomers with C=C double bonds; only one product formed.<br/>2. <strong>Condensation polymerisation</strong> — monomers with two functional groups; small molecule (H₂O or HCl) released each time bonds form.'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Addition vs condensation polymerisation',
        headers: ['Feature', 'Addition', 'Condensation'],
        rows: [
          ['Monomer type', 'Alkenes (contain C=C)', 'Two functional groups (OH+COOH, or diamine+diacid etc.)'],
          ['Small molecule produced?', 'No — only the polymer', 'Yes — water (H₂O) or HCl released each bond formed'],
          ['Chain growth mechanism', 'Double bond opens; atoms add', 'Functional groups react, releasing small molecule'],
          ['Examples', 'poly(ethene), poly(propene), PVC, PTFE', 'Nylon, polyester, protein, DNA'],
          ['Repeat unit formula', 'Same as monomer (minus double bond)', 'Two monomers minus the small molecule']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: identify the type of polymerisation',
        text: 'If the monomer contains a C=C double bond → addition polymerisation.<br/>If the monomer has two different functional groups (like –OH and –COOH) → condensation polymerisation.<br/>If H₂O or HCl is released → condensation polymerisation.'
      }
    },
    {
      id: 'svg-poly',
      type: 'svg',
      data: {
        caption: 'Addition vs Condensation Polymerisation basics',
        svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Addition Polymerisation -->
  <text x="20" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">Addition Polymerisation (e.g., Ethene → Poly(ethene))</text>
  
  <g transform="translate(60, 60)">
    <!-- Monomers -->
    <text x="0" y="0" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">C</text>
    <path d="M 15 -10 L 35 -10" fill="none" stroke="#ef4444" stroke-width="2"/>
    <path d="M 15 -2 L 35 -2" fill="none" stroke="#ef4444" stroke-width="2"/>
    <text x="40" y="0" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">C</text>

    <text x="-15" y="-15" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M -5 -12 L 0 -5" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
    <text x="-15" y="15" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M -5 0 L 0 -5" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>

    <text x="60" y="-15" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M 50 -5 L 55 -12" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
    <text x="60" y="15" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M 50 -5 L 55 5" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
    
    <text x="-30" y="0" font-family="var(--font-mono)" font-size="20" fill="#3b82f6">n</text>
  </g>

  <!-- Arrow -->
  <path d="M 180 50 L 230 50" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Polymer -->
  <g transform="translate(280, 60)">
    <text x="0" y="0" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">C</text>
    <!-- Single bond now -->
    <path d="M 15 -5 L 35 -5" fill="none" stroke="#10b981" stroke-width="2"/>
    <text x="40" y="0" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">C</text>

    <!-- Side continuing bonds -->
    <path d="M -20 -5 L -5 -5" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2"/>
    <path d="M 55 -5 L 70 -5" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2"/>

    <!-- Brackets -->
    <path d="M -10 -25 L -15 -25 L -15 15 L -10 15" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <path d="M 60 -25 L 65 -25 L 65 15 L 60 15" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <text x="75" y="15" font-family="var(--font-mono)" font-size="16" fill="#3b82f6">n</text>

    <text x="-5" y="-20" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M 5 -12 L 5 -20" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
    <text x="-5" y="20" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M 5 2 L 5 10" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>

    <text x="45" y="-20" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M 45 -12 L 45 -20" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
    <text x="45" y="20" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">H</text>
    <path d="M 45 2 L 45 10" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
  </g>


  <!-- Condensation Polymerisation -->
  <path d="M 20 120 L 580 120" fill="none" stroke="var(--color-border)" stroke-width="1"/>
  
  <text x="20" y="150" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#f59e0b">Condensation Polymerisation (e.g., Diacid + Diol → Polyester)</text>
  
  <g transform="translate(40, 180)">
    <!-- Diacid Block -->
    <rect x="0" y="0" width="80" height="30" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
    <text x="40" y="18" font-family="var(--font-sans)" font-size="12" fill="#991b1b" text-anchor="middle">Diacid</text>
    <text x="-25" y="20" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">HO</text>
    <path d="M -5 15 L 0 15" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
    <text x="85" y="20" font-family="var(--font-mono)" font-size="14" fill="#ef4444">OH</text>
    <path d="M 80 15 L 85 15" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
  </g>

  <g transform="translate(170, 180)">
    <text x="-15" y="22" font-family="var(--font-mono)" font-size="20" fill="var(--color-text)">+</text>
    <!-- Diol Block -->
    <rect x="0" y="0" width="80" height="30" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
    <text x="40" y="18" font-family="var(--font-sans)" font-size="12" fill="#1e40af" text-anchor="middle">Diol</text>
    <text x="-15" y="20" font-family="var(--font-mono)" font-size="14" fill="#3b82f6">H</text>
    <path d="M -5 15 L 0 15" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
    <text x="85" y="20" font-family="var(--font-mono)" font-size="14" fill="var(--color-text)">OH</text>
    <path d="M 80 15 L 85 15" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>
  </g>

  <path d="M 280 195 L 330 195" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>

  <g transform="translate(350, 180)">
    <!-- Polymer Chain -->
    <path d="M -15 15 L 0 15" fill="none" stroke="var(--color-text)" stroke-width="2" stroke-dasharray="4,2"/>
    
    <rect x="0" y="0" width="80" height="30" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
    <text x="40" y="18" font-family="var(--font-sans)" font-size="12" fill="#991b1b" text-anchor="middle">Diacid</text>
    
    <!-- Ester linkage showing O joined -->
    <path d="M 80 15 L 100 15" fill="none" stroke="#10b981" stroke-width="3"/>
    
    <rect x="100" y="0" width="80" height="30" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
    <text x="140" y="18" font-family="var(--font-sans)" font-size="12" fill="#1e40af" text-anchor="middle">Diol</text>

    <path d="M 180 15 L 195 15" fill="none" stroke="var(--color-text)" stroke-width="2" stroke-dasharray="4,2"/>

    <!-- Brackets -->
    <path d="M -5 -10 L -10 -10 L -10 40 L -5 40" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <path d="M 185 -10 L 190 -10 L 190 40 L 185 40" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <text x="200" y="35" font-family="var(--font-mono)" font-size="16" fill="#f59e0b">n</text>

    <text x="230" y="20" font-family="var(--font-mono)" font-size="18" fill="var(--color-text)">+ nH₂O</text>
  </g>

  <!-- Water loss highlight box -->
  <path d="M 125 170 Q 150 150, 170 170" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="145" y="145" font-family="var(--font-sans)" font-size="12" fill="#d97706" text-anchor="middle">H₂O removed</text>

  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Monomer = small molecule; polymer = many monomers joined. Addition polymerisation: alkene monomers (C=C); no small molecule released. Condensation: bifunctional monomers; H₂O or HCl released. Addition → poly(alkenes); condensation → nylon, polyester, proteins.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Polymer = many monomers joined. Addition (C=C monomers, no small molecule). Condensation (two functional groups, releases H₂O or HCl).',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define monomer and polymer.', answer: 'A monomer is a small molecule that can join to others to form a polymer. A polymer is a large molecule made of many repeating monomer units joined by covalent bonds.' },
      { id: 'cue-2', blockId: 'tbl-compare', prompt: 'What distinguishes addition from condensation polymerisation?', answer: 'Addition: monomers contain C=C double bonds; no other molecule is released; only polymer forms. Condensation: monomers have two functional groups; a small molecule (H₂O or HCl) is released each time bonds form.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'How can you identify whether a polymer is made by addition or condensation polymerisation?', answer: 'If the monomer contains a C=C double bond → addition. If the monomer has two functional groups and a small molecule (H₂O or HCl) is produced → condensation.' }
    ]
  },
  evidence: [],
  mentions: []
};
