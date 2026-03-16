export const note_olevel_physics_2_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-3-4-intensity-of-radiation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define intensity of radiation; apply the inverse square law to solve problems; explain why intensity decreases with distance from a point source; and apply this to solar irradiance.'
      }
    },
    {
      id: 'h-intensity',
      type: 'heading',
      data: { text: 'Intensity of Radiation', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: 'The <strong>intensity (I)</strong> of radiation is defined as the <strong>power (P) per unit area (A)</strong> incident on a surface perpendicular to the radiation. It measures how much energy per second arrives at (or passes through) each square metre.'
      }
    },
    {
      id: 'eq-intensity',
      type: 'equation',
      data: {
        html: 'I = <span class="nb-frac"><span class="nb-num">P</span><span class="nb-den">A</span></span>',
        caption: 'I = intensity (W/m²),  P = power (W),  A = area (m²)'
      }
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Intensity — Definition',
        text: '<strong>Intensity</strong> is the power transmitted per unit area perpendicular to the direction of propagation.<br/>Unit: <strong>W m⁻²</strong> (watts per square metre).'
      }
    },
    {
      id: 'h-inverse-square',
      type: 'heading',
      data: { text: 'The Inverse Square Law', level: 2 }
    },
    {
      id: 'p-point',
      type: 'paragraph',
      data: {
        text: 'For a <strong>point source</strong> radiating equally in all directions, the power spreads evenly over an ever-growing spherical surface. When the distance from the source doubles, the same power is spread over <strong>four times</strong> the area — so the intensity decreases to <strong>one quarter</strong>.'
      }
    },
    {
      id: 'eq-sphere',
      type: 'equation',
      data: {
        html: 'I = <span class="nb-frac"><span class="nb-num">P</span><span class="nb-den">4πd²</span></span>',
        caption: 'P = source power (W),  d = distance from source (m);  4πd² = surface area of sphere at radius d'
      }
    },
    {
      id: 'eq-isq',
      type: 'equation',
      data: {
        html: 'I ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">d²</span></span>',
        caption: 'Inverse square law: intensity is inversely proportional to the square of the distance from the source'
      }
    },
    {
      id: 'svg-isq',
      type: 'svg',
      data: {
        caption: 'Inverse square law — same power spreads over 4× the area when distance doubles',
        svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Point source -->
  <circle cx="40" cy="100" r="12" fill="#ff9900" stroke="#cc6600" stroke-width="2"/>
  <text x="20" y="130" fill="#cc6600" font-size="11">Source P</text>

  <!-- Expanding spheres (arcs) -->
  <path d="M40,100 Q100,60 120,100 Q100,140 40,100" fill="none" stroke="#4488ff" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
  <path d="M40,100 Q140,30 200,100 Q140,170 40,100" fill="none" stroke="#2266cc" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.8"/>

  <!-- Rays (spoke lines) -->
  <line x1="52" y1="92" x2="200" y2="55" stroke="#ff9900" stroke-width="1.2" opacity="0.5"/>
  <line x1="52" y1="100" x2="205" y2="100" stroke="#ff9900" stroke-width="1.2" opacity="0.5"/>
  <line x1="52" y1="108" x2="200" y2="145" stroke="#ff9900" stroke-width="1.2" opacity="0.5"/>

  <!-- Distance d1 label -->
  <line x1="40" y1="162" x2="120" y2="162" stroke="#4488ff" stroke-width="1.2" marker-end="url(#arrd)" marker-start="url(#arrd)"/>
  <text x="65" y="175" fill="#4488ff" font-size="10">d</text>

  <!-- Distance 2d label -->
  <line x1="40" y1="175" x2="200" y2="175" stroke="#2266cc" stroke-width="1.2" marker-end="url(#arrd)" marker-start="url(#arrd)"/>
  <text x="110" y="191" fill="#2266cc" font-size="10">2d</text>

  <!-- Area squares at d and 2d -->
  <rect x="110" y="75" width="20" height="20" fill="#4488ff" opacity="0.3" stroke="#4488ff" stroke-width="1.5"/>
  <text x="113" y="107" fill="#4488ff" font-size="9">Area = 1</text>
  <text x="113" y="117" fill="#4488ff" font-size="9">I = I₀</text>

  <rect x="185" y="55" width="40" height="40" fill="#2266cc" opacity="0.2" stroke="#2266cc" stroke-width="1.5"/>
  <text x="187" y="107" fill="#2266cc" font-size="9">Area = 4</text>
  <text x="187" y="117" fill="#2266cc" font-size="9">I = I₀/4</text>

  <!-- Explanation text -->
  <text x="240" y="80" fill="#333" font-size="11">Double the distance →</text>
  <text x="240" y="96" fill="#c33" font-size="11">intensity drops to ¼</text>
  <text x="240" y="120" fill="#333" font-size="11">Triple the distance →</text>
  <text x="240" y="136" fill="#c33" font-size="11">intensity drops to 1/9</text>

  <defs>
    <marker id="arrd" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#4488ff"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Distance doubles',
        text: 'A lamp has intensity 200 W/m² at a distance of 1 m. What is the intensity at 2 m?\n\nUsing I ∝ 1/d²:\nI₂/I₁ = (d₁/d₂)² = (1/2)² = 1/4\nI₂ = 200 × ¼ = 50 W/m²'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Point source power',
        text: 'A 100 W point source radiates uniformly in all directions. Calculate the intensity at d = 2 m.\n\nI = P / (4πd²) = 100 / (4π × 4) = 100 / 50.3 ≈ 1.99 W/m²'
      }
    },
    {
      id: 'h-solar',
      type: 'heading',
      data: { text: 'Solar Irradiance', level: 2 }
    },
    {
      id: 'p-solar',
      type: 'paragraph',
      data: {
        text: 'The <strong>solar irradiance (solar constant)</strong> is the intensity of solar radiation at the top of Earth\'s atmosphere, at Earth\'s mean distance from the Sun. Its value is approximately <strong>1360 W/m²</strong>. This value decreases at greater distances from the Sun — for example, the irradiance at Mars is lower because Mars is further from the Sun.'
      }
    },
    {
      id: 'p-solar-surface',
      type: 'paragraph',
      data: {
        text: 'At Earth\'s <em>surface</em>, the intensity is lower (about 1000 W/m² on a clear day at the equator) because the atmosphere absorbs and scatters some radiation. The angle of incidence also matters: radiation hitting at an angle (e.g. near the poles) is spread over a larger area, reducing effective intensity per unit horizontal area.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When using the inverse square law, remember it applies to a <em>point source</em> radiating uniformly in all directions. Real sources are not always point sources, but the law is a useful approximation. If distance multiplied by factor k, intensity changes by factor 1/k².'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Intensity I = P/A (W m⁻²). For a point source: I = P/(4πd²), giving the inverse square law I ∝ 1/d². Doubling the distance reduces intensity to ¼. Solar irradiance ≈ 1360 W/m² at top of Earth\'s atmosphere. Intensity at Earth\'s surface is lower due to atmospheric absorption and reflection.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'I = P/A (W m⁻²); inverse square law: I ∝ 1/d²; double distance → I drops to ¼; solar irradiance ≈ 1360 W m⁻².',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-def', prompt: 'Define the intensity of radiation and state its unit.' },
      { id: 'cue-2', blockId: 'eq-isq', prompt: 'State the inverse square law for the intensity of radiation from a point source.' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'A lamp produces an intensity of 200 W/m² at 1 m. What is the intensity at 2 m? Show your working.' },
      { id: 'cue-4', blockId: 'p-solar', prompt: 'State the approximate value of solar irradiance at the top of Earth\'s atmosphere and explain why it is lower at Earth\'s surface.' }
    ]
  },
  evidence: []
};
