/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 9
 * "Comparing types of structure"
 * Source: Pearson Edexcel IAL Chemistry — Section 3F
 */
export const note_chemistry_1_3_9 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Compare and contrast the four major structure types — ionic, metallic, giant covalent (macromolecular) and simple molecular — in terms of their bonding, melting points, electrical conductivity and solubility.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'The Four Structure Types', level: 2 },
      terms: []
    },
    {
      id: 'svg-comparison',
      type: 'svg',
      data: {
        caption: 'Four-panel infographic comparing structure types. Use the bonding type and structure to explain all physical properties. Melting/boiling points all depend on how many and how strong the bonds/interactions that must be broken.',
        svg: `<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Panel 1: Ionic -->
  <rect x="5"   y="5"   width="158" height="368" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="2"/>
  <rect x="5"   y="5"   width="158" height="36" rx="8" fill="#f97316"/>
  <text x="84"  y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">⊕ IONIC</text>
  <!-- mini lattice -->
  <circle cx="52"  cy="88"  r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="52"  y="92"  text-anchor="middle" fill="#991b1b" font-size="9">Na⁺</text>
  <circle cx="84"  cy="60"  r="12" fill="#a5f3fc" stroke="#0891b2" stroke-width="1.5"/>
  <text x="84"  y="64"  text-anchor="middle" fill="#1e3a8a" font-size="9">Cl⁻</text>
  <circle cx="116" cy="88"  r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="116" y="92"  text-anchor="middle" fill="#991b1b" font-size="9">Na⁺</text>
  <circle cx="84"  cy="116" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="84"  y="120" text-anchor="middle" fill="#991b1b" font-size="9">Na⁺</text>
  <line x1="64"  y1="96"  x2="72"  y2="108" stroke="#94a3b8" stroke-width="1"/>
  <line x1="96"  y1="96"  x2="104" y2="108" stroke="#94a3b8" stroke-width="1"/>
  <line x1="64"  y1="82"  x2="72"  y2="70"  stroke="#94a3b8" stroke-width="1"/>
  <!-- properties -->
  <rect x="10" y="135" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="150" text-anchor="middle" fill="#92400e" font-size="9.5">🌡 High m.p. (lattice)</text>
  <rect x="10" y="163" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="178" text-anchor="middle" fill="#92400e" font-size="9.5">⚡ Solid: none</text>
  <rect x="10" y="191" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="206" text-anchor="middle" fill="#92400e" font-size="9.5">⚡ Molten/solution: yes</text>
  <rect x="10" y="219" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="234" text-anchor="middle" fill="#92400e" font-size="9.5">💧 Polar solvents: soluble</text>
  <rect x="10" y="247" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="262" text-anchor="middle" fill="#92400e" font-size="9.5">⚠ Brittle (ions shift)</text>
  <text x="84" y="295" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="84" y="310" text-anchor="middle" fill="#374151" font-size="9">Electrostatic attraction</text>
  <text x="84" y="323" text-anchor="middle" fill="#374151" font-size="9">between + and − ions</text>
  <text x="84" y="338" text-anchor="middle" fill="#374151" font-size="9">E.g. NaCl, MgO, CaCl₂</text>
  <text x="84" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. ~800°C+</text>

  <!-- Panel 2: Metallic -->
  <rect x="175" y="5"   width="158" height="368" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <rect x="175" y="5"   width="158" height="36" rx="8" fill="#16a34a"/>
  <text x="254" y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">⚛ METALLIC</text>
  <!-- sea of electrons -->
  <rect x="183" y="48" width="142" height="90" rx="6" fill="#bbf7d0" stroke="#16a34a" stroke-width="1"/>
  <circle cx="214" cy="73"  r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="214" cy="77" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="253" cy="73"  r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="253" y="77" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="292" cy="73"  r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="292" y="77" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="214" cy="112" r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="214" y="116" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="253" cy="112" r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="253" y="116" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="292" cy="112" r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="292" y="116" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <!-- free electrons -->
  <circle cx="233" cy="93"  r="4" fill="#fbbf24"/>
  <circle cx="272" cy="93"  r="4" fill="#fbbf24"/>
  <circle cx="233" cy="128" r="4" fill="#fbbf24" opacity="0.6"/>
  <!-- properties -->
  <rect x="180" y="148" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="163" text-anchor="middle" fill="#166534" font-size="9.5">🌡 High m.p. (usually)</text>
  <rect x="180" y="176" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="191" text-anchor="middle" fill="#166534" font-size="9.5">⚡ Always conducts</text>
  <rect x="180" y="204" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="219" text-anchor="middle" fill="#166534" font-size="9.5">🔨 Malleable &amp; ductile</text>
  <rect x="180" y="232" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="247" text-anchor="middle" fill="#166534" font-size="9.5">💥 Insoluble in water</text>
  <text x="254" y="291" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="254" y="306" text-anchor="middle" fill="#374151" font-size="9">Cation + delocalised e⁻ sea</text>
  <text x="254" y="319" text-anchor="middle" fill="#374151" font-size="9">E.g. Na, Mg, Al, Fe</text>
  <text x="254" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. varies (Na 98°C → W 3422°C)</text>

  <!-- Panel 3: Giant Covalent -->
  <rect x="345" y="5"   width="158" height="368" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
  <rect x="345" y="5"   width="158" height="36" rx="8" fill="#7c3aed"/>
  <text x="424" y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">💎 GIANT COVALENT</text>
  <!-- Diamond tetrahedral mini -->
  <circle cx="424" cy="90"  r="12" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="424" cy="94" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <line x1="415" y1="80" x2="393" y2="64" stroke="#374151" stroke-width="2"/>
  <line x1="433" y1="80" x2="455" y2="64" stroke="#374151" stroke-width="2"/>
  <line x1="415" y1="100" x2="393" y2="120" stroke="#374151" stroke-width="2"/>
  <line x1="433" y1="100" x2="455" y2="120" stroke="#374151" stroke-width="2"/>
  <circle cx="386" cy="58"  r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="386" cy="62" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <circle cx="462" cy="58"  r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="462" y="62" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <circle cx="386" cy="127" r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="386" y="131" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <circle cx="462" cy="127" r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="462" y="131" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <!-- properties -->
  <rect x="350" y="145" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="160" text-anchor="middle" fill="#4c1d95" font-size="9.5">🌡 Very high m.p.</text>
  <rect x="350" y="173" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="188" text-anchor="middle" fill="#4c1d95" font-size="9.5">⚡ Non-conductor*</text>
  <rect x="350" y="201" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="216" text-anchor="middle" fill="#4c1d95" font-size="9.5">💎 Very hard</text>
  <rect x="350" y="229" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="244" text-anchor="middle" fill="#4c1d95" font-size="9.5">💧 Insoluble</text>
  <text x="424" y="285" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="424" y="300" text-anchor="middle" fill="#374151" font-size="9">Network of cov. bonds</text>
  <text x="424" y="313" text-anchor="middle" fill="#374151" font-size="9">E.g. Diamond, Graphite*, SiO₂</text>
  <text x="424" y="328" text-anchor="middle" fill="#374151" font-size="8.5">(*Graphite IS a conductor)</text>
  <text x="424" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. 1700–3600°C</text>

  <!-- Panel 4: Simple Molecular -->
  <rect x="515" y="5"   width="160" height="368" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
  <rect x="515" y="5"   width="160" height="36" rx="8" fill="#f43f5e"/>
  <text x="595" y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">🔵 SIMPLE MOLECULAR</text>
  <!-- discrete molecules with weak IMF -->
  <circle cx="563" cy="74"  r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <line x1="574" y1="74" x2="590" y2="74" stroke="#374151" stroke-width="2"/>
  <circle cx="601" cy="74"  r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <circle cx="557" cy="122" r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <line x1="568" y1="122" x2="584" y2="122" stroke="#374151" stroke-width="2"/>
  <circle cx="595" cy="122" r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <!-- weak IMF -->
  <line x1="602" y1="82" x2="590" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="568" y1="82" x2="562" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="633" y="99" fill="#94a3b8" font-size="9">weak</text>
  <text x="633" y="112" fill="#94a3b8" font-size="9">IMF</text>
  <!-- properties -->
  <rect x="520" y="145" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="160" text-anchor="middle" fill="#9d174d" font-size="9.5">🌡 Low m.p./b.p.</text>
  <rect x="520" y="173" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="188" text-anchor="middle" fill="#9d174d" font-size="9.5">⚡ Non-conductor</text>
  <rect x="520" y="201" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="216" text-anchor="middle" fill="#9d174d" font-size="9.5">💧 Varies (like/like)</text>
  <rect x="520" y="229" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="244" text-anchor="middle" fill="#9d174d" font-size="9.5">📏 Many are gases/liq.</text>
  <text x="595" y="285" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="595" y="300" text-anchor="middle" fill="#374151" font-size="9">Strong cov. bonds within;</text>
  <text x="595" y="313" text-anchor="middle" fill="#374151" font-size="9">weak IMF between</text>
  <text x="595" y="326" text-anchor="middle" fill="#374151" font-size="9">E.g. Cl₂, HCl, H₂O, CO₂</text>
  <text x="595" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. often below 0°C</text>
</svg>`
      },
      terms: ['Ionic structure', 'Metallic structure', 'Giant covalent structure', 'Simple molecular structure']
    },
    {
      id: 'key-giant',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Giant vs Simple: Key Distinction',
        text: '<strong>Giant structures</strong> (ionic, metallic, giant covalent) have no discrete formula units — the formula (NaCl, Fe, SiO₂) is an <em>empirical/ratio formula</em> describing the repeating pattern throughout the entire lattice.<br/><br/><strong>Simple molecular structures</strong> have discrete molecules. The formula (CO₂, H₂O) represents one actual molecule with a fixed number of atoms.<br/><br/>A quick test: if the substance has a very high melting point AND doesn&#x2019;t conduct when liquid &#x2014; it&#x2019;s likely giant covalent (e.g. SiO&#x2082;, diamond).'
      },
      terms: ['Giant structure', 'Simple molecular structure', 'Empirical formula']
    }
  ],
  presentationSlides: [
    {
      layout: 'bento',
      title: 'Comparing Types of Structure',
      subtitle: 'WCH11 — Chemistry Topic 3.9',
      elements: [
        { delay: 0, colSpan: 1, icon: '⚧️', title: 'Ionic', html: '<strong>High mp/bp</strong> — strong ionic bonds.<br/><strong>Conducts</strong> when molten or in aqueous solution.<br/><strong>Hard & brittle;</strong> soluble in polar solvents.' },
        { delay: 1, colSpan: 1, icon: '🌊', title: 'Metallic', html: '<strong>Variable mp/bp</strong> (Na: 98°C; W: 3422°C).<br/><strong>Conducts in all states</strong> — delocalised electrons.<br/><strong>Malleable & ductile.</strong>' },
        { delay: 2, colSpan: 1, icon: '💎', title: 'Giant Covalent', html: '<strong>Very high mp/bp</strong> — many strong covalent bonds.<br/><strong>Non-conductor</strong> (except graphite).<br/>Hard; insoluble in most solvents.' },
        { delay: 3, colSpan: 2, icon: '🔬', title: 'Simple Molecular', html: '<strong>Low mp/bp</strong> — only weak IMFs between molecules.<br/><strong>Non-conductor</strong> — no ions or free electrons.<br/>Solubility depends on polarity.<br/><em>Key:</em> covalent bonds within molecules are NOT broken on melting/boiling.' },
      ]
    }
  ,
    {
      id: 'callout-exam-9-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "DIAGNOSTIC QUESTION: Identifying Giant Covalent vs Ionic",
        text: "KEY DISTINCTION: (1) High m.p. + conducts when molten/dissolved = IONIC. (2) Very high m.p. + does NOT conduct in any state = GIANT COVALENT. Example: SiO\u2082 (non-conductor) is giant covalent, NOT ionic like CaO despite both having similar m.p."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Four structure types: Ionic (high m.p., conducts molten, brittle, polar-soluble); Metallic (variable m.p., always conducts, malleable); Giant Covalent (very high m.p., non-conductor except graphite, insoluble); Simple Molecular (low m.p., non-conductor, like-dissolves-like). Giant structures: empirical formulas. Simple molecular: discrete molecules.',
    cues: [
      { id: 'c1', blockId: 'svg-comparison', prompt: 'Compare ionic and giant covalent structures: melting points, electrical conductivity, and solubility.' },
      { id: 'c2', blockId: 'svg-comparison', prompt: 'Why does a metal always conduct electricity in both solid and liquid state, whereas an ionic compound only conducts when molten or dissolved?' },
      { id: 'c3', blockId: 'key-giant', prompt: 'Distinguish giant structures from simple molecular structures. Give an example of each and explain how to decide which type a substance is from its properties.' },
      { id: 'c4', blockId: 'svg-comparison', prompt: 'A solid X has a very high melting point, does not conduct electricity in any state, and is insoluble in water. Identify the likely structure type and give an example.' },
      { id: 'c5', blockId: 'svg-comparison', prompt: 'List the four structure types from highest to lowest melting point (typical). Justify the ordering.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
