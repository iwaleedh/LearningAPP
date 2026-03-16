export const note_olevel_physics_1_9_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-9-2-pressure-in-liquids.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recall and apply P = ρgh for pressure in a liquid; explain why pressure increases with depth; describe the principle of hydraulic systems and the manometer.' },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Pressure in a Liquid', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A liquid exerts pressure in <strong>all directions</strong>. The pressure at any point depends only on the <strong>depth</strong> below the surface, the <strong>density</strong> of the liquid, and the strength of gravity. It does not depend on the shape or volume of the container.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Liquid Pressure Formula',
        text: 'P = ρgh<br><br>P = pressure (Pa)<br>ρ (rho) = density of liquid (kg/m³)<br>g = gravitational field strength (10 N/kg)<br>h = depth below the surface (m)',
      },
    },
    {
      id: 'eq-liquid',
      type: 'equation',
      data: {
        html: 'P = ρgh',
        caption: 'Pressure in a liquid: density (kg/m³) × g (N/kg) × depth (m)',
      },
    },
    {
      id: 'svg-depth',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="380" height="220" fill="#eff6ff" rx="10"/>
  <text x="190" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Pressure Increases with Depth</text>
  <!-- Container of water -->
  <rect x="60" y="35" width="140" height="150" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2" rx="4"/>
  <!-- Water surface label -->
  <text x="130" y="30" text-anchor="middle" font-size="9" fill="#1d4ed8">Surface (P = 0 gauge)</text>
  <!-- Depth arrows and pressure arrow -->
  <!-- Depth 1 = 2m -->
  <line x1="210" y1="35" x2="250" y2="35" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="245" y1="35" x2="245" y2="95" stroke="#2563eb" stroke-width="2"/>
  <polygon points="245,95 241,87 249,87" fill="#2563eb"/>
  <text x="260" y="68" font-size="9" fill="#2563eb">h = 2 m</text>
  <!-- Hole 1 at h=2m -->
  <circle cx="200" cy="95" r="5" fill="#dc2626"/>
  <polygon points="200,95 220,88 220,102" fill="#dc2626"/>
  <text x="220" y="102" font-size="9" fill="#dc2626" font-weight="bold">Low pressure</text>
  <!-- Depth 2 = 6m -->
  <line x1="64" y1="35" x2="40" y2="35" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="40" y1="35" x2="40" y2="155" stroke="#2563eb" stroke-width="2"/>
  <polygon points="40,155 36,147 44,147" fill="#2563eb"/>
  <text x="4" y="97" text-anchor="start" font-size="9" fill="#2563eb">h = 6 m</text>
  <!-- Hole 2 at h=6m -->
  <circle cx="60" cy="155" r="5" fill="#7c3aed"/>
  <polygon points="60,155 35,148 35,162" fill="#7c3aed"/>
  <text x="5" y="162" text-anchor="start" font-size="9" fill="#7c3aed" font-weight="bold">High pressure</text>
  <!-- Pressure values -->
  <text x="130" y="95" text-anchor="middle" font-size="10" fill="#374151">P₁ = ρg(2)</text>
  <text x="130" y="155" text-anchor="middle" font-size="10" fill="#374151">P₂ = ρg(6)</text>
  <!-- Formula box -->
  <rect x="240" y="140" width="120" height="50" rx="5" fill="white" stroke="#e5e7eb"/>
  <text x="300" y="160" text-anchor="middle" font-size="10" fill="#374151">Water: ρ = 1000 kg/m³</text>
  <text x="300" y="175" text-anchor="middle" font-size="10" fill="#374151">P = 1000 × 10 × h</text>
  <text x="300" y="188" text-anchor="middle" font-size="10" fill="#374151">P = 10 000h Pa</text>
</svg>`,
        caption: 'Holes at different depths — deeper hole → higher pressure → water spurts further. P = ρgh.',
      },
    },
    {
      id: 'h-hydraulic',
      type: 'heading',
      data: { text: 'Hydraulic Systems', level: 2 },
    },
    {
      id: 'p-hydraulic',
      type: 'paragraph',
      data: { text: 'Liquids are <strong>nearly incompressible</strong> — pressure applied at one point is transmitted equally through the whole liquid. This is the principle behind hydraulic machines (car brakes, hydraulic jacks, digger arms). A small force on a small piston produces the <em>same pressure</em> which, acting on a large piston, creates a <strong>large force</strong>.' },
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1: Pressure at Depth',
        text: 'Calculate the pressure due to water at a depth of 4 m. (ρ = 1000 kg/m³, g = 10 N/kg)<br><br>P = ρgh = 1000 × 10 × 4 = <strong>40 000 Pa = 40 kPa</strong>',
      },
    },
    {
      id: 'call-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2: Hydraulic System',
        text: 'A force of 100 N acts on a small piston of area 0.01 m². What force is produced on a large piston of area 0.5 m²?<br><br>P = F/A = 100 ÷ 0.01 = 10 000 Pa (transmitted through liquid)<br>F_large = P × A = 10 000 × 0.5 = <strong>5000 N</strong>',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Properties of Liquid Pressure',
        text: 'Three key properties to remember:<br>1. Acts in <strong>all directions</strong> at any point.<br>2. Increases with <strong>depth</strong> (P = ρgh).<br>3. Depends on <strong>density</strong> of liquid (mercury is denser than water, so mercury is used in manometers).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'P = ρgh. Pressure in a liquid increases with depth, depends on density, acts in all directions, and is independent of container shape. Hydraulics use incompressible liquids to transmit pressure and multiply forces. Key units: ρ in kg/m³, g = 10 N/kg, h in m, P in Pa.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P = ρgh. Pressure increases with depth. Hydraulics transmit and multiply force.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Write the equation for pressure in a liquid. What do ρ, g, and h represent?', answer: 'P = ρgh. ρ (rho) = density of the liquid (kg/m³), g = gravitational field strength (10 N/kg), h = depth below the surface (m). Answer in Pa.' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'Calculate the pressure due to water at a depth of 4 m. (ρ = 1000 kg/m³)', answer: 'P = ρgh = 1000 × 10 × 4 = 40 000 Pa = 40 kPa.' },
      { id: 'cue-3', blockId: 'h-hydraulic', prompt: 'Explain the principle of a hydraulic system and give one example of its use.', answer: 'Liquids are almost incompressible, so pressure applied at one point is transmitted equally throughout the liquid. A small force on a small piston creates pressure which acts on a large piston, producing a much larger force. Examples: car brakes, hydraulic jack, excavator arms.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'State three properties of pressure in a liquid.', answer: '1. Pressure acts in all directions at any point in the liquid. 2. Pressure increases with depth (P = ρgh). 3. Pressure depends on the density of the liquid, not the shape or volume of the container.' },
    ],
  },
  evidence: [],
  mentions: [],
};
