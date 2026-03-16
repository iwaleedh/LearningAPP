export const note_olevel_physics_2_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-2-4-specific-latent-heat.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define specific latent heat of fusion and vaporisation; use Q = mL to solve problems; explain why latent heat of vaporisation is greater than latent heat of fusion; and interpret a heating/cooling curve.'
      }
    },
    {
      id: 'h-latent',
      type: 'heading',
      data: { text: 'What is Latent Heat?', level: 2 }
    },
    {
      id: 'p-latent-def',
      type: 'paragraph',
      data: {
        text: '<strong>Latent heat</strong> is the thermal energy absorbed or released during a <strong>change of state</strong>, with <em>no change in temperature</em>. When a solid melts or a liquid boils, energy is being used to break or weaken inter-particle bonds rather than to increase the kinetic energy of particles — so the temperature stays constant during the state change.'
      }
    },
    {
      id: 'callout-def-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Specific Latent Heat — Definition',
        text: 'The <strong>specific latent heat (L)</strong> of a substance is the energy required to change the state of <strong>1 kg</strong> of the substance <strong>without any change in temperature</strong>.<br/><br/><strong>Lf</strong> = specific latent heat of <em>fusion</em> (solid ↔ liquid)<br/><strong>Lv</strong> = specific latent heat of <em>vaporisation</em> (liquid ↔ gas)<br/>Unit: J/kg'
      }
    },
    {
      id: 'h-equation',
      type: 'heading',
      data: { text: 'Formula and Values', level: 2 }
    },
    {
      id: 'eq-slh',
      type: 'equation',
      data: {
        html: 'Q = m × L',
        caption: 'Q = thermal energy (J),  m = mass (kg),  L = specific latent heat (J/kg)'
      }
    },
    {
      id: 'p-rearrange',
      type: 'paragraph',
      data: {
        text: 'Rearranging: &nbsp;L = <span class="nb-frac"><span class="nb-num">Q</span><span class="nb-den">m</span></span>&nbsp;&nbsp;and&nbsp;&nbsp;m = <span class="nb-frac"><span class="nb-num">Q</span><span class="nb-den">L</span></span>'
      }
    },
    {
      id: 'tbl-values',
      type: 'comparisonTable',
      data: {
        caption: 'Specific latent heat values for water',
        headers: ['Process', 'Symbol', 'Value (J/kg)', 'What energy overcomes'],
        rows: [
          ['Melting (fusion)', 'Lf', '340 000', 'Partial weakening of bonds in ice lattice'],
          ['Boiling (vaporisation)', 'Lv', '2 260 000', 'Complete separation of water molecules from liquid']
        ]
      }
    },
    {
      id: 'h-why-lv',
      type: 'heading',
      data: { text: 'Why Lv ≫ Lf', level: 2 }
    },
    {
      id: 'p-why',
      type: 'paragraph',
      data: {
        text: 'The latent heat of <strong>vaporisation is about 6–7× greater</strong> than the latent heat of fusion for water. This is because:<ul><li>During <em>melting</em>, the solid structure is only <strong>partially disrupted</strong> — molecules move from fixed positions into a mobile liquid state, but they are still close together and still attracted to each other.</li><li>During <em>boiling</em>, molecules must be <strong>completely separated</strong> from all their neighbours against strong intermolecular attractive forces, and they must also do work expanding against atmospheric pressure. This requires far more energy per kg.</li></ul>'
      }
    },
    {
      id: 'h-curve',
      type: 'heading',
      data: { text: 'Heating Curve Interpretation', level: 2 }
    },
    {
      id: 'p-curve',
      type: 'paragraph',
      data: {
        text: 'When a substance is heated at a constant rate, a temperature–time graph shows <strong>flat regions (plateaux)</strong> at the melting and boiling points. During these flat regions, all the energy input is being used as latent heat — breaking bonds — so the temperature does not rise. The steepness of the sloping sections depends on the specific heat capacity (lower c → steeper slope for the same power input).'
      }
    },
    {
      id: 'svg-curve',
      type: 'svg',
      data: {
        caption: 'Temperature–time heating curve for a pure substance (e.g. water)',
        svg: `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Axes -->
  <line x1="50" y1="20" x2="50" y2="220" stroke="#555" stroke-width="2"/>
  <line x1="50" y1="220" x2="400" y2="220" stroke="#555" stroke-width="2"/>
  <text x="160" y="244" fill="#555" font-size="12">Time / s</text>
  <text x="10" y="130" fill="#555" font-size="12" transform="rotate(-90,18,130)">Temperature / °C</text>

  <!-- Temperature labels -->
  <line x1="46" y1="180" x2="54" y2="180" stroke="#555" stroke-width="1.5"/>
  <text x="25" y="184" fill="#555" font-size="10">0</text>
  <line x1="46" y1="80" x2="54" y2="80" stroke="#555" stroke-width="1.5"/>
  <text x="20" y="84" fill="#555" font-size="10">100</text>

  <!-- Heating curve: solid heating -->
  <polyline points="50,220 100,200 140,180" stroke="#4080cc" stroke-width="2.5" fill="none"/>
  <!-- Melting plateau -->
  <polyline points="140,180 200,180" stroke="#ff8c00" stroke-width="2.5" fill="none"/>
  <!-- Liquid heating -->
  <polyline points="200,180 260,80" stroke="#4080cc" stroke-width="2.5" fill="none"/>
  <!-- Boiling plateau -->
  <polyline points="260,80 350,80" stroke="#ff8c00" stroke-width="2.5" fill="none"/>
  <!-- Gas heating -->
  <polyline points="350,80 390,55" stroke="#4080cc" stroke-width="2.5" fill="none"/>

  <!-- Region labels -->
  <text x="55" y="215" fill="#4080cc" font-size="10">Solid heating</text>
  <text x="148" y="174" fill="#ff8c00" font-size="10">Melting (0 °C)</text>
  <text x="208" y="150" fill="#4080cc" font-size="10">Liquid heating</text>
  <text x="268" y="74" fill="#ff8c00" font-size="10">Boiling (100 °C)</text>
  <text x="355" y="50" fill="#4080cc" font-size="10">Gas heating</text>

  <!-- Latent heat annotation arrows -->
  <line x1="170" y1="155" x2="170" y2="178" stroke="#ff8c00" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arr2)"/>
  <text x="100" y="153" fill="#ff8c00" font-size="10">Latent heat of fusion (Lf)</text>
  <line x1="305" y1="58" x2="305" y2="78" stroke="#ff8c00" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arr2)"/>
  <text x="230" y="58" fill="#ff8c00" font-size="10">Latent heat of vaporisation (Lv)</text>

  <defs>
    <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#ff8c00"/>
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
        title: 'Worked Example 1: Energy to melt ice',
        text: 'How much energy is needed to melt 0.5 kg of ice at 0 °C? (Lf = 340 000 J/kg)\n\nQ = m × Lf = 0.5 × 340 000 = 170 000 J = 170 kJ'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Mass of steam condensed',
        text: 'A radiator releases 678 000 J when steam condenses to water at 100 °C. What mass of steam condenses? (Lv = 2 260 000 J/kg)\n\nm = Q ÷ Lv = 678 000 ÷ 2 260 000 = 0.3 kg'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Latent heat problems do not involve a temperature change (Δθ = 0). If the question asks for the total energy to heat ice from −10 °C to steam at 110 °C, you must add <em>three separate calculations</em>: (1) heat ice to 0 °C using Q = mcΔθ, (2) melt ice at 0 °C using Q = mLf, (3) heat water to 100 °C using Q = mcΔθ, (4) vaporise water at 100 °C using Q = mLv, (5) heat steam using Q = mcΔθ.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Specific latent heat L (J/kg) is the energy for a 1 kg state change at constant temperature. Q = mL. For water: Lf = 340 000 J/kg (melting), Lv = 2 260 000 J/kg (boiling). Lv ≫ Lf because complete separation of molecules requires far more energy than partial disruption of the solid lattice. Flat sections on a temperature–time graph indicate a state change.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Q = mL; Lf(water) = 340 kJ/kg; Lv(water) = 2260 kJ/kg; Lv > Lf because complete particle separation needs more energy than partial lattice disruption.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def-key', prompt: 'Define specific latent heat of fusion and state its unit.' },
      { id: 'cue-2', blockId: 'tbl-values', prompt: 'State the specific latent heat of vaporisation of water and compare it to the latent heat of fusion. Why is one larger?' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'Calculate the energy needed to melt 0.5 kg of ice at 0 °C. (Lf = 340 000 J/kg)' },
      { id: 'cue-4', blockId: 'svg-curve', prompt: 'On a temperature–time heating curve for water, what do the two flat (horizontal) sections represent and why is the temperature constant during those sections?' }
    ]
  },
  evidence: []
};
