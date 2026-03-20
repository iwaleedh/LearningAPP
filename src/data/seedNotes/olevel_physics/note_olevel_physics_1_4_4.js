export const note_olevel_physics_1_4_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-4-5-hookes-law.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State Hooke\'s Law; use F = ke to calculate force, spring constant, or extension; calculate the spring constant from force–extension graph gradients.' },
    },
    {
      id: 'h-statement',
      type: 'heading',
      data: { text: 'Hooke\'s Law', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hooke\'s Law',
        text: 'The extension of a spring is <strong>directly proportional</strong> to the applied force, provided the <strong>limit of proportionality is not exceeded</strong>.<br><br><strong>F = k e</strong><br>F = force (N), k = spring constant (N/m), e = extension (m)',
      },
    },
    {
      id: 'eq-hooke',
      type: 'equation',
      data: {
        html: 'F = k × e &nbsp;&nbsp; ⟹ &nbsp;&nbsp; k = <span class="nb-frac"><span class="nb-num">F</span><span class="nb-den">e</span></span>',
        caption: 'k = spring constant (N/m or N/cm); larger k means stiffer spring',
      },
    },
    {
      id: 'h-constant',
      type: 'heading',
      data: { text: 'The Spring Constant', level: 2 },
    },
    {
      id: 'para-k',
      type: 'paragraph',
      data: { text: 'The <strong>spring constant k</strong> is a measure of the spring\'s stiffness. A larger k means the spring is stiffer — it requires more force to produce the same extension. The spring constant is the <em>gradient of the F–extension graph</em>:' },
    },
    {
      id: 'svg-hooke',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="210" fill="#44370a" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Hooke's Law: F–Extension Graph</text>
  <!-- Axes -->
  <line x1="60" y1="170" x2="360" y2="170" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="170" x2="60" y2="30" stroke="#374151" stroke-width="2"/>
  <polygon points="360,170 352,166 352,174" fill="#374151"/>
  <polygon points="60,30 56,38 64,38" fill="#374151"/>
  <text x="365" y="174" font-size="11" fill="#374151">e (m)</text>
  <text x="45" y="28" font-size="11" fill="#374151">F (N)</text>
  <!-- Gridlines (faint) -->
  <line x1="60" y1="130" x2="350" y2="130" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="60" y1="90" x2="350" y2="90" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="160" y1="170" x2="160" y2="30" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="260" y1="170" x2="260" y2="30" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- Hooke region (linear) -->
  <line x1="60" y1="170" x2="240" y2="70" stroke="#2563eb" stroke-width="2.5"/>
  <!-- P label -->
  <circle cx="240" cy="70" r="5" fill="#ef4444"/>
  <text x="248" y="68" font-size="11" fill="#ef4444" font-weight="bold">P</text>
  <text x="248" y="82" font-size="10" fill="#ef4444">Limit of proportionality</text>
  <!-- Curve beyond P -->
  <path d="M 240 70 Q 280 55 310 50 Q 330 48 350 47" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <!-- Gradient annotation -->
  <line x1="60" y1="170" x2="160" y2="170" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="160" y1="170" x2="160" y2="120" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="100" y="185" font-size="10" fill="#16a34a">Δe</text>
  <text x="165" y="150" font-size="10" fill="#16a34a">ΔF</text>
  <text x="80" y="135" font-size="10" fill="#16a34a">gradient = k = ΔF/Δe</text>
  <!-- Legend -->
  <line x1="80" y1="195" x2="110" y2="195" stroke="#2563eb" stroke-width="2.5"/>
  <text x="115" y="199" font-size="10" fill="#374151">Hooke's region</text>
  <line x1="200" y1="195" x2="230" y2="195" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="235" y="199" font-size="10" fill="#374151">Beyond P (non-proportional)</text>
</svg>`,
        caption: 'The gradient of the linear section = spring constant k. Curve beyond P = Hooke\'s Law no longer applies.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A spring has a spring constant of 40 N/m. A force of 120 N is applied (within the elastic limit). Calculate the extension.<br><br>e = F ÷ k = 120 ÷ 40 = <strong>3 m</strong><br><br>(or 300 cm — always check units)',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Reading k from a Graph',
        text: 'k = gradient = ΔF/Δe. Pick two clear points on the <em>straight</em> line region, read off ΔF and Δe, then divide. Do NOT use points beyond the limit of proportionality P.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Hooke\'s Law: F = ke. Force is proportional to extension below the limit of proportionality. Spring constant k (N/m) = stiffness. Larger k = stiffer spring. k = gradient of F–extension graph in the linear region.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'F = ke; spring constant k = gradient of linear F–e graph; larger k → stiffer spring.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State Hooke\'s Law and write the formula.', answer: 'Extension is directly proportional to applied force (below limit of proportionality). F = ke, where k is the spring constant in N/m.' },
      { id: 'cue-2', blockId: 'eq-hooke', prompt: 'A spring extends by 0.05 m when a 10 N force is applied. What is the spring constant?', answer: 'k = F/e = 10 ÷ 0.05 = 200 N/m.' },
      { id: 'cue-3', blockId: 'svg-hooke', prompt: 'How do you determine the spring constant from a force–extension graph?', answer: 'k = gradient = ΔF/Δe. Calculate using two points on the straight-line (proportional) region only.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'A spring constant is 25 N/m. What force is needed to extend it by 0.08 m?', answer: 'F = ke = 25 × 0.08 = 2 N.' },
    ],
  },
  evidence: [],
  mentions: [],
};
