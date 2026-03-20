export const note_olevel_physics_1_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-3-2-density.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define density as mass per unit volume; use ρ = m/V; state units kg/m³ and g/cm³; convert between units; compare densities of common materials.' },
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'Density', level: 2 },
    },
    {
      id: 'para-def',
      type: 'paragraph',
      data: { text: '<strong>Density</strong> is a measure of how much mass is packed into a unit volume of a substance. A material with high density has lots of mass in a small volume. Density is a <em>scalar</em> quantity.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Density Formula',
        text: 'ρ = m ÷ V<br>where ρ (rho) = density, m = mass, V = volume<br><strong>SI unit:</strong> kg/m³ (kilograms per cubic metre)<br><strong>Also used:</strong> g/cm³ (grams per cubic centimetre)',
      },
    },
    {
      id: 'eq-density',
      type: 'equation',
      data: {
        html: 'ρ = <span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">V</span></span>',
        caption: 'ρ = density (kg/m³), m = mass (kg), V = volume (m³)',
      },
    },
    {
      id: 'h-units',
      type: 'heading',
      data: { text: 'Units and Conversion', level: 2 },
    },
    {
      id: 'para-units',
      type: 'paragraph',
      data: { text: 'The SI unit is <strong>kg/m³</strong>. However, in school chemistry and physics labs, <strong>g/cm³</strong> is often used. The conversion is: <strong>1 g/cm³ = 1000 kg/m³</strong>. For example, water has a density of 1 g/cm³ = 1000 kg/m³.' },
    },
    {
      id: 'tbl-densities',
      type: 'comparisonTable',
      data: {
        caption: 'Typical Densities of Common Materials',
        headers: ['Material', 'Density (kg/m³)', 'Density (g/cm³)'],
        rows: [
          ['Air (at sea level)', '1.2', '0.0012'],
          ['Wood (typical)', '600–800', '0.6–0.8'],
          ['Water', '1000', '1.0'],
          ['Seawater', '1025', '1.025'],
          ['Aluminium', '2700', '2.7'],
          ['Iron / Steel', '7900', '7.9'],
          ['Copper', '8900', '8.9'],
          ['Lead', '11 300', '11.3'],
        ],
      },
    },
    {
      id: 'svg-density',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="420" height="180" fill="#44370a" rx="10"/>
  <text x="210" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#713f12">Density: Same Volume, Different Mass</text>
  <!-- Box 1: Low density (wood) -->
  <rect x="40" y="50" width="120" height="90" fill="#1a3a08" stroke="#65a30d" stroke-width="2" rx="4"/>
  <text x="100" y="92" text-anchor="middle" font-size="13" fill="#365314" font-weight="bold">Wood</text>
  <text x="100" y="110" text-anchor="middle" font-size="11" fill="#365314">m = 72 kg</text>
  <text x="100" y="126" text-anchor="middle" font-size="11" fill="#65a30d">ρ = 720 kg/m³</text>
  <text x="100" y="155" text-anchor="middle" font-size="10" fill="#6b7280">V = 0.1 m³</text>
  <!-- Box 2: High density (iron) -->
  <rect x="210" y="50" width="120" height="90" fill="#2d2d72" stroke="#4338ca" stroke-width="2" rx="4"/>
  <text x="270" y="92" text-anchor="middle" font-size="13" fill="#1e1b4b" font-weight="bold">Iron</text>
  <text x="270" y="110" text-anchor="middle" font-size="11" fill="#1e1b4b">m = 790 kg</text>
  <text x="270" y="126" text-anchor="middle" font-size="11" fill="#4338ca">ρ = 7900 kg/m³</text>
  <text x="270" y="155" text-anchor="middle" font-size="10" fill="#6b7280">V = 0.1 m³</text>
  <!-- Label -->
  <text x="375" y="100" text-anchor="middle" font-size="11" fill="#92400e">Same</text>
  <text x="375" y="114" text-anchor="middle" font-size="11" fill="#92400e">volume,</text>
  <text x="375" y="128" text-anchor="middle" font-size="11" fill="#92400e">different</text>
  <text x="375" y="142" text-anchor="middle" font-size="11" fill="#92400e">mass</text>
</svg>`,
        caption: 'Two objects with the same volume: iron has much greater mass because it is denser',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> A block of metal has mass 270 g and volume 100 cm³. Find the density and identify the metal.<br><br><strong>ρ = m/V = 270/100 = 2.7 g/cm³ = 2700 kg/m³</strong><br><br>From the table: this is <strong>aluminium</strong> (ρ = 2700 kg/m³).',
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Units',
        text: 'Be consistent with units! If mass is in grams and volume in cm³, density will be in g/cm³. If the answer should be in kg/m³, convert: 1 g/cm³ = 1000 kg/m³. Alternatively convert mass to kg and volume to m³ before using the formula.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Density ρ = m/V. SI unit: kg/m³; also g/cm³ (× 1000 to convert to kg/m³). Water = 1000 kg/m³; iron ≈ 7900 kg/m³; air ≈ 1.2 kg/m³. Dense materials pack more mass into the same volume.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'ρ = m/V; water density = 1000 kg/m³ = 1 g/cm³; 1 g/cm³ = 1000 kg/m³.',
    cues: [
      { id: 'cue-1', blockId: 'eq-density', prompt: 'Write the density equation and state the SI unit of density.', answer: 'ρ = m/V; SI unit is kg/m³ (kilograms per cubic metre).' },
      { id: 'cue-2', blockId: 'para-units', prompt: 'Convert a density of 8.9 g/cm³ to kg/m³.', answer: '8.9 g/cm³ × 1000 = 8900 kg/m³.' },
      { id: 'cue-3', blockId: 'tbl-densities', prompt: 'State the density of water in both kg/m³ and g/cm³.', answer: '1000 kg/m³ = 1.0 g/cm³.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'A metal cube has mass 540 g and volume 200 cm³. Find its density.', answer: 'ρ = 540/200 = 2.7 g/cm³ = 2700 kg/m³ (this is aluminium).' },
    ],
  },
  evidence: [],
  mentions: [],
};
