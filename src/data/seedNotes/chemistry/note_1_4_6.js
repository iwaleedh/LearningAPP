/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 6
 * "Properties of alkanes"
 */
export const note_chemistry_1_4_6 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Know and explain the physical properties of alkanes (state at room temperature, boiling points, solubility) in terms of intermolecular forces. Understand why alkanes are generally unreactive.' } },
    { id: 'h-structure', type: 'heading', data: { text: 'Structure and Bonding in Alkanes', level: 2 } },
    { id: 'svg-props', type: 'svg', data: {
      caption: 'Physical properties of the first six alkanes — boiling point rises with chain length',
      svg: `<svg viewBox="0 0 580 205" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="57" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Alkane</text><text x="157" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Formula</text><text x="233" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Mᵣ</text><text x="327" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Boiling point</text><text x="485" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">State at 25 °C</text><line x1="114" y1="0" x2="114" y2="205" stroke="#475569" stroke-width="1"/><line x1="200" y1="0" x2="200" y2="205" stroke="#475569" stroke-width="1"/><line x1="265" y1="0" x2="265" y2="205" stroke="#475569" stroke-width="1"/><line x1="390" y1="0" x2="390" y2="205" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="28" fill="#f0f9ff"/><text x="8" y="53" fill="#374151" font-size="11">Methane</text><text x="120" y="53" fill="#374151" font-size="11">CH₄</text><text x="210" y="53" fill="#374151" font-size="11">16</text><text x="270" y="53" fill="#2563eb" font-size="11">−162 °C</text><text x="398" y="53" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="62" width="580" height="28" fill="white"/><text x="8" y="81" fill="#374151" font-size="11">Ethane</text><text x="120" y="81" fill="#374151" font-size="11">C₂H₆</text><text x="210" y="81" fill="#374151" font-size="11">30</text><text x="270" y="81" fill="#2563eb" font-size="11">−89 °C</text><text x="398" y="81" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="90" width="580" height="28" fill="#f0f9ff"/><text x="8" y="109" fill="#374151" font-size="11">Propane</text><text x="120" y="109" fill="#374151" font-size="11">C₃H₈</text><text x="210" y="109" fill="#374151" font-size="11">44</text><text x="270" y="109" fill="#2563eb" font-size="11">−42 °C</text><text x="398" y="109" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="118" width="580" height="28" fill="white"/><text x="8" y="137" fill="#374151" font-size="11">Butane</text><text x="120" y="137" fill="#374151" font-size="11">C₄H₁₀</text><text x="210" y="137" fill="#374151" font-size="11">58</text><text x="270" y="137" fill="#2563eb" font-size="11">−1 °C</text><text x="398" y="137" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="146" width="580" height="28" fill="#f0fdf4"/><text x="8" y="165" fill="#374151" font-size="11">Pentane</text><text x="120" y="165" fill="#374151" font-size="11">C₅H₁₂</text><text x="210" y="165" fill="#374151" font-size="11">72</text><text x="270" y="165" fill="#15803d" font-size="11">+36 °C</text><text x="398" y="165" fill="#15803d" font-weight="bold" font-size="11">Liquid</text><rect x="0" y="174" width="580" height="28" fill="white"/><text x="8" y="193" fill="#374151" font-size="11">Hexane</text><text x="120" y="193" fill="#374151" font-size="11">C₆H₁₄</text><text x="210" y="193" fill="#374151" font-size="11">86</text><text x="270" y="193" fill="#15803d" font-size="11">+69 °C</text><text x="398" y="193" fill="#15803d" font-weight="bold" font-size="11">Liquid</text><rect x="0" y="0" width="580" height="205" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'callout-bp-trend', type: 'callout', data: {
      style: 'key', title: 'Why do boiling points increase with chain length?',
      text: 'Longer alkane chains have more electrons &#x2192; larger, more polarisable electron clouds &#x2192; stronger <strong>London dispersion forces</strong> between adjacent molecules. More energy is needed to overcome these forces, so the boiling point rises.'
    }},
    {
      id: 'svg-bp-graph',
      type: 'svg',
      data: {
        caption: 'Boiling point of alkanes rises with chain length due to increasing London forces',
        svg: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <!-- Background -->
  <rect x="0" y="0" width="500" height="300" rx="8" fill="#0b0f1a" />
  
  <!-- Title -->
  <text x="250" y="25" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Boiling Point vs Carbon Chain Length</text>
  
  <!-- Y-axis grid lines & labels -->
  <!-- 150 C -->
  <line x1="50" y1="50" x2="470" y2="50" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="54" text-anchor="end" fill="#94a3b8" font-size="10">150</text>
  <!-- 100 C -->
  <line x1="50" y1="78.6" x2="470" y2="78.6" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="82.6" text-anchor="end" fill="#94a3b8" font-size="10">100</text>
  <!-- 50 C -->
  <line x1="50" y1="107.1" x2="470" y2="107.1" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="111.1" text-anchor="end" fill="#94a3b8" font-size="10">50</text>
  <!-- 0 C cross line -->
  <line x1="50" y1="135.7" x2="470" y2="135.7" stroke="#475569" stroke-width="1.5" stroke-dasharray="4" />
  <text x="45" y="139.7" text-anchor="end" fill="#94a3b8" font-size="10">0</text>
  <!-- -50 C -->
  <line x1="50" y1="164.3" x2="470" y2="164.3" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="168.3" text-anchor="end" fill="#94a3b8" font-size="10">-50</text>
  <!-- -100 C -->
  <line x1="50" y1="192.9" x2="470" y2="192.9" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="196.9" text-anchor="end" fill="#94a3b8" font-size="10">-100</text>
  <!-- -150 C -->
  <line x1="50" y1="221.4" x2="470" y2="221.4" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="225.4" text-anchor="end" fill="#94a3b8" font-size="10">-150</text>
  <!-- -200 C -->
  <line x1="50" y1="250" x2="470" y2="250" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="254" text-anchor="end" fill="#94a3b8" font-size="10">-200</text>
  
  <!-- Y-axis Label -->
  <text x="-150" y="15" transform="rotate(-90)" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">Boiling Point (°C)</text>

  <!-- Axes -->
  <line x1="50" y1="40" x2="50" y2="260" stroke="#64748b" stroke-width="2" />
  <line x1="50" y1="250" x2="470" y2="250" stroke="#64748b" stroke-width="2" />
  
  <!-- X-axis Label -->
  <text x="260" y="290" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">Number of Carbon Atoms (Chain Length)</text>

  <!-- X-axis Grid Lines and Labels -->
  <path d="M 60 250 L 60 255" stroke="#64748b" stroke-width="2" />
  <text x="60" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">1</text>
  <path d="M 117.1 250 L 117.1 255" stroke="#64748b" stroke-width="2" />
  <text x="117.1" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">2</text>
  <path d="M 174.3 250 L 174.3 255" stroke="#64748b" stroke-width="2" />
  <text x="174.3" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">3</text>
  <path d="M 231.4 250 L 231.4 255" stroke="#64748b" stroke-width="2" />
  <text x="231.4" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">4</text>
  <path d="M 288.6 250 L 288.6 255" stroke="#64748b" stroke-width="2" />
  <text x="288.6" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">5</text>
  <path d="M 345.7 250 L 345.7 255" stroke="#64748b" stroke-width="2" />
  <text x="345.7" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">6</text>
  <path d="M 402.8 250 L 402.8 255" stroke="#64748b" stroke-width="2" />
  <text x="402.8" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">7</text>
  <path d="M 460 250 L 460 255" stroke="#64748b" stroke-width="2" />
  <text x="460" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">8</text>

  <!-- State shading backgrounds -->
  <rect x="51" y="124.3" width="419" height="125.7" fill="#ef4444" fill-opacity="0.05" />
  <text x="460" y="240" text-anchor="end" fill="#ef4444" font-size="11" font-style="italic" opacity="0.6">Gases</text>
  
  <rect x="51" y="40" width="419" height="84.3" fill="#3b82f6" fill-opacity="0.05" />
  <text x="460" y="55" text-anchor="end" fill="#3b82f6" font-size="11" font-style="italic" opacity="0.6">Liquids</text>

  <!-- Plotting the curve -->
  <path d="M 60 229.4 L 117.1 186.6 L 174.3 159.7 L 231.4 136.3 L 288.6 115.2 L 345.7 96.3 L 402.8 79.7 L 460 63.7" stroke="#10b981" stroke-width="3" fill="none" stroke-linejoin="round" />
  
  <!-- Data Points -->
  <circle cx="60" cy="229.4" r="4" fill="#10b981" />
  <circle cx="117.1" cy="186.6" r="4" fill="#10b981" />
  <circle cx="174.3" cy="159.7" r="4" fill="#10b981" />
  <circle cx="231.4" cy="136.3" r="4" fill="#10b981" />
  <circle cx="288.6" cy="115.2" r="4" fill="#10b981" />
  <circle cx="345.7" cy="96.3" r="4" fill="#10b981" />
  <circle cx="402.8" cy="79.7" r="4" fill="#10b981" />
  <circle cx="460" cy="63.7" r="4" fill="#10b981" />
  
  <!-- Data Value Labels -->
  <!-- Gases (red text) -->
  <text x="60" y="218" text-anchor="middle" fill="#fca5a5" font-size="9">-164</text>
  <text x="117.1" y="175" text-anchor="middle" fill="#fca5a5" font-size="9">-89</text>
  <text x="174.3" y="148" text-anchor="middle" fill="#fca5a5" font-size="9">-42</text>
  <text x="231.4" y="125" text-anchor="middle" fill="#fca5a5" font-size="9">-1</text>
  <!-- Liquids (blue text) -->
  <text x="288.6" y="104" text-anchor="middle" fill="#93c5fd" font-size="9">+36</text>
  <text x="345.7" y="85" text-anchor="middle" fill="#93c5fd" font-size="9">+69</text>
  <text x="402.8" y="68" text-anchor="middle" fill="#93c5fd" font-size="9">+98</text>
  <text x="460" y="52" text-anchor="middle" fill="#93c5fd" font-size="9">+126</text>

  <!-- Curve behavior explanation box -->
  <rect x="250" y="200" width="200" height="35" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="260" y="215" fill="#e2e8f0" font-size="10">London forces strengthen with chain</text>
  <text x="260" y="228" fill="#e2e8f0" font-size="10">length, raising the boiling point.</text>
</svg>`
      }
    },{ id: 'callout-branching', type: 'callout', data: {
      style: 'key', title: 'Effect of branching on boiling point',
      text: 'Branched alkanes have a more <strong>compact/spherical shape</strong>, which reduces the surface area of contact between molecules. Fewer London forces act between them &#x2192; <strong>lower boiling point</strong> than the straight-chain isomer.<br/><br/>Example: pentane (bp 36&#xB0;C) &gt; 2-methylbutane (bp 28&#xB0;C) &gt; 2,2-dimethylpropane (bp 10&#xB0;C)'
    }},
    { id: 'h-sol-react', type: 'heading', data: { text: 'Solubility and Reactivity', level: 2 } },
    { id: 'svg-sol-react', type: 'svg', data: {
      caption: 'Alkane solubility and reactivity — reasons and key exceptions',
      svg: `<svg viewBox="0 0 580 155" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="2" y="2" width="276" height="151" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/><rect x="302" y="2" width="276" height="151" rx="8" fill="#fef9c3" stroke="#fbbf24" stroke-width="1.5"/><text x="140" y="22" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="13">Insoluble in Water</text><text x="440" y="22" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="13">Low Chemical Reactivity</text><text x="10" y="45" fill="#374151" font-size="11">Alkanes are <tspan font-weight="bold">non-polar</tspan>.</text><text x="10" y="62" fill="#374151" font-size="10">They cannot form hydrogen bonds with</text><text x="10" y="76" fill="#374151" font-size="10">water molecules or break its H-bond network.</text><text x="10" y="96" fill="#374151" font-size="10">&#x2022; Soluble in non-polar solvents (like dissolves</text><text x="10" y="110" fill="#374151" font-size="10"> like): e.g. hexane dissolves in CCl₄.</text><text x="10" y="128" fill="#374151" font-size="10">&#x2022; Short-chain alkanes are <tspan font-weight="bold">volatile</tspan>: low bp,</text><text x="10" y="142" fill="#374151" font-size="10"> evaporate easily at room temperature.</text><text x="310" y="45" fill="#374151" font-size="11">C&#x2013;C and C&#x2013;H bonds are <tspan font-weight="bold">non-polar</tspan>:</text><text x="310" y="62" fill="#374151" font-size="10">No &#x03B4;&#x207A;/&#x03B4;&#x207B; centres &#x2192; polar reagents and ions</text><text x="310" y="76" fill="#374151" font-size="10">do not attack alkane molecules.</text><text x="310" y="96" fill="#374151" font-size="10">C&#x2013;C and C&#x2013;H bonds are also <tspan font-weight="bold">strong</tspan>:</text><text x="310" y="110" fill="#374151" font-size="10">C&#x2013;H: 413 kJ mol&#x207B;&#xB9;; C&#x2013;C: 348 kJ mol&#x207B;&#xB9;</text><text x="310" y="128" fill="#374151" font-size="10">Exceptions: combust with O&#x2082;; react with</text><text x="310" y="142" fill="#374151" font-size="10">halogens under UV (free radical subst.)</text></svg>`
    }}
  ,
    {
      id: 'callout-exam-4-6',
      type: 'callout',
      data: {
        style: 'warning',
        title: "London Forces and Boiling Points",
        text: "When explaining boiling point trends, always mention the <strong>'increased number of electrons'</strong> leading to stronger London forces. Just stating 'bigger mass' or 'longer chain' is insufficient for full marks."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'svg-props', prompt: 'Which alkanes are gases at room temperature? At what chain length do they become liquids?' },
      { id: 'c2', blockId: 'callout-bp-trend', prompt: 'Explain why butane has a higher boiling point than ethane.' },
      { id: 'c3', blockId: 'callout-branching', prompt: 'Explain why 2,2-dimethylpropane has a lower boiling point than pentane (both C₅H₁₂).' },
      { id: 'c4', blockId: 'svg-sol-react', prompt: 'Why are alkanes insoluble in water and generally unreactive with polar reagents?' }
    ],
    summaryText: 'Alkanes: CₙH₂ₙ₊₂, only C–H and C–C bonds, non-polar. IMFs = London forces only. bp increases with chain length (more e⁻ → stronger LF). Branching → lower bp (less surface area). Insoluble in water (non-polar, no H-bonds). Unreactive (non-polar, strong bonds). React with O₂ (combustion) and halogens/UV (FRS).',
    ready: false
  },
  evidence: [], mentions: []
};
