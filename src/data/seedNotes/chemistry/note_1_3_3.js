/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 3
 * "Metallic bonding and properties of metals"
 * Source: Pearson Edexcel IAL Chemistry — Section 3C.1
 */
export const note_chemistry_1_3_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe metallic bonding as electrostatic attraction between a lattice of positive metal ions and a delocalised sea of electrons. Explain the physical properties of metals (electrical conductivity, thermal conductivity, malleability, high melting point) in terms of metallic bonding.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'The Metallic Bond Model', level: 2 },
      terms: []
    },
    {
      id: 'svg-model',
      type: 'svg',
      data: {
        caption: 'Metallic bonding: outermost electrons leave their atoms and become delocalised throughout the lattice. Residual positive ions arranged in a regular close-packed structure. Electrostatic attraction between the electron sea and the cations = metallic bond.',
        svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Background -->
  <rect x="5" y="10" width="390" height="220" rx="10" fill="#fef9ee" stroke="#d97706" stroke-width="1.5"/>
  <text x="205" y="30" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="13">Metallic Bond Model</text>

  <!-- Positive ion lattice - 3×3 grid -->
  <circle cx="75"  cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="75"  y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="155" cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="155" y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="235" cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="235" y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="315" cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="315" y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>

  <circle cx="75"  cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="75"  y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="155" cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="155" y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="235" cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="235" y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="315" cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="315" y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>

  <!-- Delocalised electrons drifting -->
  <circle cx="105" cy="110" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="185" cy="52"  r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="260" cy="120" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="50"  cy="130" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="290" cy="55"  r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="115" cy="200" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="200" cy="205" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="330" cy="200" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="350" cy="120" r="5" fill="#dc2626" opacity="0.9"/>
  <!-- Electron motion arrows -->
  <line x1="108" y1="107" x2="138" y2="95" stroke="#dc2626" stroke-width="1.5"/>
  <polygon points="138,95 131,103 142,106" fill="#dc2626"/>
  <line x1="263" y1="117" x2="293" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <polygon points="293,100 286,108 297,111" fill="#dc2626"/>

  <text x="10" y="225" fill="#374151" font-size="9.5">⁻ = delocalised electrons (not bound to any single ion)</text>

  <!-- Legend -->
  <text x="205" y="245" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">Metallic bond = attraction between M⁺ lattice and e⁻ sea</text>

  <!-- Properties panel -->
  <rect x="410" y="10" width="265" height="240" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="543" y="30" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="13">Properties Explained</text>

  <!-- Conductor -->
  <rect x="420" y="38" width="245" height="42" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="543" y="56" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">⚡ Electrical Conductor</text>
  <text x="543" y="71" text-anchor="middle" fill="#374151" font-size="10">Free e⁻ move under applied voltage.</text>

  <!-- Thermal -->
  <rect x="420" y="88" width="245" height="42" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="543" y="106" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">🌡 Thermal Conductor</text>
  <text x="543" y="121" text-anchor="middle" fill="#374151" font-size="10">Energetic e⁻ transfer KE rapidly across lattice.</text>

  <!-- Malleable -->
  <rect x="420" y="138" width="245" height="48" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
  <text x="543" y="156" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">🔨 Malleable &amp; Ductile</text>
  <text x="543" y="171" text-anchor="middle" fill="#374151" font-size="10">Ion layers slide; e⁻ sea rearranges →</text>
  <text x="543" y="183" text-anchor="middle" fill="#374151" font-size="10">no repulsion, no fracture.</text>

  <!-- High mp -->
  <rect x="420" y="195" width="245" height="42" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="1"/>
  <text x="543" y="213" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="11">🌡 High Melting Point</text>
  <text x="543" y="228" text-anchor="middle" fill="#374151" font-size="10">Many strong e⁻—ion⁺ attractions must be broken.</text>
  <text x="543" y="243" text-anchor="middle" fill="#374151" font-size="10">Higher charge density M → higher m.p.</text>
</svg>`
      },
      terms: ['Metallic bond', 'Delocalised electrons', 'Malleable', 'Ductile']
    },
    {
      id: 'svg-trend',
      type: 'svg',
      data: {
        caption: 'Melting point trend across Period 3 metals reflects metallic bond strength: more valence electrons and smaller ionic radius → stronger bonding → higher m.p.',
        svg: `<svg viewBox="0 0 680 135" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Bar chart Period 3 metals -->
  <text x="340" y="16" text-anchor="middle" fill="#374151" font-weight="bold" font-size="13">Period 3 Metal Melting Points &amp; Valence Electrons</text>
  <!-- Y-axis label -->
  <text x="18" y="80" text-anchor="middle" fill="#64748b" font-size="9" transform="rotate(-90,18,80)">Melting point / °C</text>
  <!-- Axis -->
  <line x1="40" y1="20" x2="40" y2="115" stroke="#374151" stroke-width="1.5"/>
  <line x1="40" y1="115" x2="670" y2="115" stroke="#374151" stroke-width="1.5"/>

  <!-- Bars: Na(98°C), Mg(650°C), Al(660°C) — relative heights -->
  <!-- Scale: max 660, height 90px → each °C ≈ 0.136px -->
  <!-- Na: 98°C → h≈13 -->
  <rect x="60"  y="102" width="50" height="13" fill="#3b82f6"/>
  <text x="85"  y="130" text-anchor="middle" fill="#374151" font-size="10">Na</text>
  <text x="85"  y="98"  text-anchor="middle" fill="#1d4ed8" font-size="9">98°C</text>
  <text x="85"  y="110"  text-anchor="middle" fill="white" font-size="8">1e⁻</text>

  <!-- Mg: 650°C → h≈88 -->
  <rect x="160" y="27" width="50" height="88" fill="#10b981"/>
  <text x="185" y="130" text-anchor="middle" fill="#374151" font-size="10">Mg</text>
  <text x="185" y="22"  text-anchor="middle" fill="#065f46" font-size="9">650°C</text>
  <text x="185" y="76"  text-anchor="middle" fill="white" font-size="8">2e⁻</text>

  <!-- Al: 660°C → h≈89.8 ≈ 90 -->
  <rect x="260" y="25" width="50" height="90" fill="#6366f1"/>
  <text x="285" y="130" text-anchor="middle" fill="#374151" font-size="10">Al</text>
  <text x="285" y="20"  text-anchor="middle" fill="#4338ca" font-size="9">660°C</text>
  <text x="285" y="75"  text-anchor="middle" fill="white" font-size="8">3e⁻</text>

  <!-- Notes -->
  <rect x="360" y="22" width="300" height="90" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
  <text x="510" y="42" text-anchor="middle" fill="#334155" font-weight="bold" font-size="11">Trend: Na → Mg → Al</text>
  <text x="370" y="60" fill="#374151" font-size="10">▸ More delocalised e⁻ per atom</text>
  <text x="370" y="76" fill="#374151" font-size="10">▸ Higher charge on metal cation</text>
  <text x="370" y="92" fill="#374151" font-size="10">▸ Smaller ionic radius</text>
  <text x="370" y="108" fill="#374151" font-size="10">→ Stronger metallic bond → higher m.p.</text>
</svg>`
      },
      terms: ['Charge density']
    },
    {
      id: 'warn-metallic',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: "Sharing" vs "Sea of Electrons"',
        text: 'Metallic bonding is NOT the same as covalent bonding. The electrons are <strong>delocalised</strong> — they are not shared between two specific atoms. They are free to move throughout the entire lattice.<br/><br/>Also: metals are <em>not</em> described as "ionic". The positively charged ions in a metal are not formed by transfer to a non-metal — they arise from the loss of valence electrons into the delocalised sea.'
      },
      terms: []
    }
  ],

  recall: {
    enabled: true,
    summaryText: 'Metallic bond = electrostatic attraction between lattice of positive metal ions and a sea of delocalised electrons. Properties: good conductor (free e⁻), malleable (layers slide, e⁻ rearrange), high m.p. (many strong forces to break). Trend Na < Mg < Al: more valence e⁻, higher cation charge, smaller radius → stronger bonding.',
    cues: [
      { id: 'c1', blockId: 'svg-model', prompt: 'Define metallic bonding. What specifically forms the "sea of electrons" and where do these electrons come from?' },
      { id: 'c2', blockId: 'svg-model', prompt: 'Explain why metals are good electrical conductors but ionic compounds in the solid state are not.' },
      { id: 'c3', blockId: 'svg-model', prompt: 'Why are metals malleable but ionic compounds are brittle? Refer to the structure of each.' },
      { id: 'c4', blockId: 'svg-trend', prompt: 'Why does the melting point increase from Na to Mg to Al? Give three reasons.' },
      { id: 'c5', blockId: 'warn-metallic', prompt: 'Distinguish between metallic bonding and covalent bonding. Why is "sharing" the wrong word for metallic bonding?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
