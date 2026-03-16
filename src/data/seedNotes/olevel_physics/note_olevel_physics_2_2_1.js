export const note_olevel_physics_2_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-2-2-specific-heat-capacity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define specific heat capacity; use the equation Q = mcΔθ to calculate energy transfers; compare SHC values for common materials and explain their practical significance.'
      }
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'Specific Heat Capacity (SHC)', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: 'The <strong>specific heat capacity (c)</strong> of a substance is the amount of thermal energy required to raise the temperature of <strong>1 kg</strong> of the substance by <strong>1 °C (or 1 K)</strong>. It tells us how much energy a material can store per unit mass per degree of temperature change.'
      }
    },
    {
      id: 'callout-def-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition to Learn',
        text: 'Specific heat capacity is the <strong>thermal energy required to raise the temperature of 1 kg of a substance by 1 K (or 1 °C)</strong>. Unit: J/(kg·K) or J kg⁻¹ K⁻¹.'
      }
    },
    {
      id: 'h-equation',
      type: 'heading',
      data: { text: 'The SHC Equation', level: 2 }
    },
    {
      id: 'eq-shc',
      type: 'equation',
      data: {
        html: 'Q = m × c × Δθ',
        caption: 'Q = thermal energy (J),  m = mass (kg),  c = specific heat capacity (J kg⁻¹ K⁻¹),  Δθ = temperature change (K or °C)'
      }
    },
    {
      id: 'p-eq-note',
      type: 'paragraph',
      data: {
        text: 'Rearranging gives: <br/><br/>c = <span class="nb-frac"><span class="nb-num">Q</span><span class="nb-den">m Δθ</span></span>&nbsp;&nbsp;and&nbsp;&nbsp;Δθ = <span class="nb-frac"><span class="nb-num">Q</span><span class="nb-den">m c</span></span>'
      }
    },
    {
      id: 'tbl-shc',
      type: 'comparisonTable',
      data: {
        caption: 'Specific heat capacity values for common substances',
        headers: ['Material', 'c (J kg⁻¹ K⁻¹)', 'Common use'],
        rows: [
          ['Water', '4200', 'Coolant in car engines, domestic hot water systems'],
          ['Aluminium', '900', 'Saucepan bodies — heats up and cools quickly'],
          ['Iron / steel', '450', 'Structural and engineering uses'],
          ['Copper', '390', 'Saucepan bases — conducts heat fast'],
          ['Glass', '840', 'Ovenware; retains heat moderately'],
          ['Concrete', '880', 'Building thermal mass — stores daytime heat']
        ]
      }
    },
    {
      id: 'p-water-high',
      type: 'paragraph',
      data: {
        text: 'Water has an exceptionally high SHC of 4200 J/(kg·K). This means it requires a large amount of energy to heat up, and it releases a large amount of energy when cooling. This makes water an excellent <strong>coolant</strong> (e.g. car radiators) and explains why coastal climates are milder — the sea warms up slowly in summer and cools slowly in winter compared to the land.'
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
        title: 'Worked Example 1: Heating water',
        text: 'Calculate the energy needed to heat 2 kg of water from 20 °C to 80 °C.\n\nGiven: m = 2 kg, c = 4200 J/(kg·K), Δθ = 80 − 20 = 60 °C\n\nQ = m × c × Δθ = 2 × 4200 × 60 = 504 000 J = 504 kJ'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Finding SHC',
        text: 'A 0.5 kg iron block absorbs 9000 J of energy and its temperature rises from 25 °C to 45 °C. Calculate its SHC.\n\nΔθ = 45 − 25 = 20 °C\n\nc = Q ÷ (m × Δθ) = 9000 ÷ (0.5 × 20) = 9000 ÷ 10 = 900 J/(kg·K)'
      }
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Temperature rise',
        text: 'A 3 kg aluminium block (c = 900 J/(kg·K)) is given 54 000 J. What temperature rise results?\n\nΔθ = Q ÷ (m × c) = 54 000 ÷ (3 × 900) = 54 000 ÷ 2700 = 20 °C'
      }
    },
    {
      id: 'h-high-vs-low',
      type: 'heading',
      data: { text: 'High vs Low SHC — Practical Implications', level: 2 }
    },
    {
      id: 'list-implications',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>High SHC (e.g. water, concrete)</strong> — heats up slowly but stores lots of energy; good for thermal storage and climate regulation.' },
          { text: '<strong>Low SHC (e.g. iron, copper)</strong> — heats up quickly with little energy; useful for cooking tools where rapid heating is desired.' },
          { text: '<strong>Thermal masses</strong> — buildings use materials with high SHC (concrete, brick) to absorb daytime heat and release it slowly at night, reducing temperature swings.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check what Δθ is — it is the <em>change</em> in temperature, not the final temperature. Δθ in °C equals Δθ in K (since a change of 1 °C = a change of 1 K). Make sure mass is in kg before substituting into Q = mcΔθ.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Specific heat capacity c (J kg⁻¹ K⁻¹) is the energy needed to raise 1 kg of a substance by 1 K. Q = mcΔθ. Water (4200) has the highest SHC of common substances, making it an excellent coolant. Low SHC materials (iron 450, copper 390) heat up quickly with less energy.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'SHC (c) — energy per kg per K; Q = mcΔθ; water c = 4200, iron c = 450; high SHC → slow to heat, good thermal store.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def-key', prompt: 'State the definition of specific heat capacity and give its unit.' },
      { id: 'cue-2', blockId: 'eq-shc', prompt: 'Write the equation for thermal energy Q in terms of mass m, specific heat capacity c and temperature change Δθ.' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'Calculate the energy needed to heat 2 kg of water (c = 4200 J kg⁻¹ K⁻¹) from 20 °C to 80 °C.' },
      { id: 'cue-4', blockId: 'p-water-high', prompt: 'Why is water used as a coolant in car engines? Your answer should refer to specific heat capacity.' }
    ]
  },
  evidence: []
};
