export const note_physics_4_18_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', terms: [], data: { text: "Understand <strong>Electric Field</strong> & Potential" } },
    { id: 'head-1', type: 'heading', terms: [], data: { text: "<strong>Electric Field</strong> & Potential", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Electric potential</strong> energy</strong> — a positive test charge has <strong>electric potential</strong> energy due to its position in an <strong>electric field</strong>. The amount of <strong>electric potential</strong> energy depends on: the magnitude of charge, and the value of the <strong>electric potential</strong> in the field." }] } },
    { id: 'callout-1', type: 'callout', terms: [], data: { style: 'key', title: 'Definition: <strong>Electric Potential</strong>', text: '<strong>Electric potential</strong> V at a point is defined as the work done per unit positive charge in bringing a small positive test charge from infinity to that point.<br/>V = W / Q (units: Volts, V or J C⁻¹)<br/>V is a scalar quantity — it has no direction.' } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Work is done on a positive test charge Q to move it from the negatively charged plate A to the positively charged plate B. This means its <strong>electric potential</strong> energy increases</strong>. This is analogous to lifting a mass in a gravitational field — work is done against the field and potential energy is stored." }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Electric potential</strong> is defined as the amount of work done per unit of charge at that point. A stronger <strong>electric field</strong> means the <strong>electric potential</strong> changes more rapidly</strong> with distance as the test charge moves through it. Hence, the relationship between the <strong>electric field</strong> strength and the <strong>electric potential</strong> is: E = −dV/dr." }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>electric field</strong> strength is proportional to the <strong>gradient of the <strong>electric potential</strong>. This means: if the <strong>electric potential</strong> changes very rapidly with distance, the <strong>electric field</strong> strength is large; if the <strong>electric potential</strong> changes very gradually with distance, the <strong>electric field</strong> strength is small." }] } },
    { id: 'callout-2', type: 'callout', terms: [], data: { style: 'key', title: 'E and V Relationship', text: 'E = −dV/dr<br/>The <strong>electric field</strong> is the negative gradient of the potential.<br/>For a uniform field: E = −ΔV/Δr = V/d<br/>For a radial field: V = kQ/r, so E = kQ/r² (consistent with Coulomb\'s law)' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "If the <strong>electric potential</strong> changes very gradually with distance, the <strong>electric field</strong> strength is small</strong>. An <strong>electric field</strong> can be defined in terms of the variation of <strong>electric potential</strong> at different points in the field: the <strong>electric field</strong> at a particular point is equal to the gradient of a potential-distance graph at that point." }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>potential gradient</strong> in an <strong>electric field</strong> is defined as the rate of change of <strong>electric potential</strong> with respect to displacement in the direction of the field. The graph of potential V against distance r for a negative or positive charge is a 1/r relationship — a hyperbola." }] } },
    { id: 'callout-3', type: 'callout', terms: [], data: { style: 'warning', title: 'Common Misconception: Sign of Gradient', text: 'E = −dV/dr: notice the negative sign. The <strong>electric field</strong> points from high potential to low potential (in the direction of decreasing V). This is why field lines always point from positive to negative plates — they go from high V to low V.' } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>electric potential</strong> around a positive charge</strong> decreases with distance and increases with distance around a negative charge. The key features of this V-r graph are: the values for V are all negative for a negative charge; the values for V are all positive for a positive charge." }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "As r increases, V against r follows a <strong>1/r relation</strong> for a positive charge and a −1/r relation for a negative charge. The gradient of the graph at any particular point is the value of E at that point. The graph has a shallow increase (or decrease) as r increases." }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "As r increases, V against r follows a 1/r relation for a positive charge and -1/r relation for a negative charge. The gradient of the graph at any particular point is the <strong>value of E</strong> at that point. The graph has a shallow increase (or decrease) as r increases." }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>electric potential</strong> changes according to the charge creating the potential as the distance r increases from the centre: if the charge is positive, the potential decreases with distance; if the charge is negative, the potential increases with distance (becomes less negative)." }] } },
    { id: 'callout-4', type: 'callout', terms: [], data: { style: 'worked', title: 'Real-World Context: Thunderstorm & <strong>Electric Potential</strong>', text: 'In a thunderstorm, as charge builds up in a storm cloud, the electric <strong>potential difference</strong> between cloud and ground increases. When V/d exceeds ~3 × 10⁶ V m⁻¹ (breakdown field of air), the air ionises. The steep potential gradient = large E field = lightning. The sharp tip of a lightning rod concentrates field lines, triggering discharge safely.' } },
    {
      id: 'svg-physics_4_18_4-0',
      type: 'svg',
      terms: [],
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">\n  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>\n  <text x="200" y="30" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Electric Potential (V)</text>\n  <text x="200" y="60" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">Work done per unit positive charge</text>\n  <text x="200" y="80" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">moving from infinity to a point</text>\n  <rect x="120" y="110" width="160" height="60" fill="#44370a" rx="8" stroke="#ca8a04" stroke-width="2"/>\n  <text x="200" y="145" font-family="Arial" font-size="20" fill="#b45309" font-weight="bold" text-anchor="middle">V = W / Q</text>\n  <text x="200" y="190" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">Units: Volts (V) or J C&#8315;&#185;</text>\n</svg>',
        caption: 'Diagram illustrating concepts of 18_4'
      }
    },
    {
      id: 'svg-physics_4_18_4-1',
      type: 'svg',
      terms: [],
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">\n  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>\n  <rect x="80" y="70" width="240" height="60" fill="#0a2e1a" rx="8" stroke="#10b981" stroke-width="2"/>\n  <text x="200" y="105" font-family="Arial" font-size="20" fill="#047857" font-weight="bold" text-anchor="middle">E = - dV / dr</text>\n  <text x="200" y="160" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">Potential Gradient</text>\n  <text x="200" y="40" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Relationship between E and V</text>\n</svg>',
        caption: 'Diagram illustrating concepts of 18_4'
      }
    },
    {
      id: 'enr-svg-2',
      type: 'svg',
      terms: [],
      data: {
        svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">  <rect x="0" y="0" width="500" height="240" fill="#0f172a" rx="8"/>  <text x="250" y="18" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Electric Potential V vs Distance r</text>  <line x1="75" y1="210" x2="450" y2="210" stroke="#334155" stroke-width="1.5"/>  <line x1="75" y1="30" x2="75" y2="215" stroke="#334155" stroke-width="1.5"/>  <line x1="75" y1="120" x2="450" y2="120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/>  <text x="455" y="213" font-family="Arial" font-size="12" fill="#334155">r</text>  <text x="65" y="33" font-family="Arial" font-size="12" fill="#334155" text-anchor="end">V</text>  <text x="68" y="124" font-family="Arial" font-size="11" fill="#94a3b8" text-anchor="end">0</text>  <path d="M 88 35 Q 110 45 140 72 Q 180 98 230 110 Q 290 117 390 120" stroke="#ef4444" stroke-width="2.5" fill="none"/>  <text x="395" y="116" font-family="Arial" font-size="12" fill="#ef4444" font-weight="bold">+Q</text>  <path d="M 88 210 Q 110 200 140 174 Q 180 148 230 134 Q 290 125 390 122" stroke="#3b82f6" stroke-width="2.5" fill="none"/>  <text x="395" y="130" font-family="Arial" font-size="12" fill="#3b82f6" font-weight="bold">&#8722;Q</text>  <rect x="155" y="50" width="145" height="26" fill="#44370a" rx="5" stroke="#ca8a04" stroke-width="1.5"/>  <text x="228" y="68" font-family="Arial" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle">V = kQ / r</text>  <text x="325" y="88" font-family="Arial" font-size="11" fill="#7c3aed" text-anchor="middle">gradient = &#8722;E</text>  <line x1="180" y1="86" x2="230" y2="108" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/>  <text x="250" y="232" font-family="Arial" font-size="11" fill="#64748b" text-anchor="middle">+Q: V positive (1/r curve above axis); &#8722;Q: V negative (&#8722;1/r curve below axis)</text></svg>',
        caption: 'Electric potential V vs distance r: 1/r relationship for positive and negative point charges'
      }
    },
    { id: 'enr-worked-3', type: 'callout', terms: [], data: { style: 'worked', title: 'Worked Example: Finding Q and E from Potential', text: 'The <strong>electric potential</strong> at a point 0.50 m from a positive charge is +180 V. Find (a) the charge Q and (b) the <strong>electric field</strong> strength at that point.<br/><br/>(a) V = kQ / r → Q = Vr / k<br/>Q = (180 × 0.50) / (8.99 × 10⁹) = 90 / (8.99 × 10⁹)<br/>Q = 1.0 × 10⁻⁸ C<br/><br/>(b) E = kQ / r² = (8.99 × 10⁹ × 1.0 × 10⁻⁸) / (0.50)² = 89.9 / 0.25 = 360 N C⁻¹<br/>Cross-check: E = V / r = 180 / 0.50 = 360 N C⁻¹ ✓<br/>Direction: radially outward from the charge (positive Q).' } },
    { id: 'enr-tip-3', type: 'callout', terms: [], data: { style: 'tip', title: 'Exam Tip: V, E and the Potential Gradient', text: 'E = −dV/dr: the field equals the negative gradient of the V–r graph. A steeper slope means a stronger field.<br/>V is a scalar (no direction); E is a vector — always state its direction in exam answers.<br/>For a radial field: since V = kQ/r and E = kQ/r², it follows that E = V/r at the same point — a useful shortcut.<br/>Equipotential surfaces are perpendicular to field lines; no work is done moving a charge along an equipotential.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Potential Gradient Sign",
        text: "E = \u2212dV/dr \u2014 note the negative sign. Electric field points from high to low potential (direction of decreasing V)."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'key',
        title: "Equipotential Perpendicularity",
        text: "Equipotential surfaces are always perpendicular to field lines \u2014 useful for quickly sketching field diagrams."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Electric Field</strong> & Potential' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
