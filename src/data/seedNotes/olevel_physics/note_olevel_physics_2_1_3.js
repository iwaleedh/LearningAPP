export const note_olevel_physics_2_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-1-4-pressure-in-gases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain gas pressure in terms of molecular collisions; apply Boyle\'s Law (p₁V₁ = p₂V₂); convert between Celsius and Kelvin; use the combined gas law p₁V₁/T₁ = p₂V₂/T₂.',
      },
    },
    {
      id: 'h-gas-pressure',
      type: 'heading',
      data: { text: 'Gas Pressure — Particle Explanation', level: 2 },
    },
    {
      id: 'p-pressure',
      type: 'paragraph',
      data: {
        text: 'Gas particles are in continuous, rapid, random motion. They constantly collide with the walls of their container. Each collision exerts a tiny force on the wall. The total effect of billions of these collisions per second produces a measurable <strong>pressure</strong> on the container walls.',
      },
    },
    {
      id: 'callout-pressure-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gas Pressure Definition',
        text: '<strong>Gas pressure</strong> is the force per unit area exerted by gas molecules colliding with the walls of the container. Increasing the number of molecules, increasing their speed, or decreasing the volume all increase the pressure.',
      },
    },
    {
      id: 'h-boyle',
      type: 'heading',
      data: { text: "Boyle's Law", level: 2 },
    },
    {
      id: 'p-boyle',
      type: 'paragraph',
      data: {
        text: "At <strong>constant temperature</strong>, the pressure of a fixed mass of gas is inversely proportional to its volume. Doubling the volume halves the pressure; halving the volume doubles the pressure.",
      },
    },
    {
      id: 'eq-boyle',
      type: 'equation',
      data: {
        html: 'p<sub>1</sub>V<sub>1</sub> = p<sub>2</sub>V<sub>2</sub>',
        caption: "Boyle's Law — constant temperature, fixed mass of gas",
      },
    },
    {
      id: 'p-boyle-particle',
      type: 'paragraph',
      data: {
        text: "Particle explanation: If the volume is halved, the same number of molecules are packed into half the space. Molecules hit the walls more frequently, so the pressure doubles.",
      },
    },
    {
      id: 'h-kelvin',
      type: 'heading',
      data: { text: 'Absolute Zero and the Kelvin Scale', level: 2 },
    },
    {
      id: 'p-kelvin',
      type: 'paragraph',
      data: {
        text: '<strong>Absolute zero (0 K = −273°C)</strong> is the lowest possible temperature. At absolute zero, particles have zero kinetic energy and would exert no pressure on the walls of a container. The Kelvin (K) scale starts at absolute zero.',
      },
    },
    {
      id: 'callout-convert',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Temperature Conversion',
        text: 'T (K) = θ (°C) + 273 &nbsp;&nbsp;|&nbsp;&nbsp; θ (°C) = T (K) − 273<br/><br/>Examples: 0°C = 273 K &nbsp;|&nbsp; 100°C = 373 K &nbsp;|&nbsp; −273°C = 0 K<br/><br/><strong>Always use Kelvin in gas law calculations.</strong>',
      },
    },
    {
      id: 'h-combined',
      type: 'heading',
      data: { text: 'Combined (Ideal) Gas Law', level: 2 },
    },
    {
      id: 'p-combined',
      type: 'paragraph',
      data: {
        text: 'For a fixed mass of ideal gas, the ratio pV/T is constant. This combines Boyle\'s law (p ∝ 1/V at constant T) with the pressure law (p ∝ T at constant V) and Charles\'s law (V ∝ T at constant p).',
      },
    },
    {
      id: 'eq-combined',
      type: 'equation',
      data: {
        html: '<span class="nb-frac"><span class="nb-num">p<sub>1</sub>V<sub>1</sub></span><span class="nb-den">T<sub>1</sub></span></span> = <span class="nb-frac"><span class="nb-num">p<sub>2</sub>V<sub>2</sub></span><span class="nb-den">T<sub>2</sub></span></span>',
        caption: 'Combined gas law — T must be in Kelvin',
      },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Worked Example — Boyle's Law",
        text: "<strong>Question:</strong> A gas occupies a volume of 2.0 dm³ at a pressure of 150 kPa. The temperature is kept constant. Find the pressure when the volume is compressed to 0.50 dm³.<br/><br/><strong>Solution:</strong><br/>Using p₁V₁ = p₂V₂<br/>p₁ = 150 kPa, V₁ = 2.0 dm³, V₂ = 0.50 dm³<br/><br/>p₂ = p₁V₁ ÷ V₂ = (150 × 2.0) ÷ 0.50 = 300 ÷ 0.50 = <strong>600 kPa</strong><br/><br/>The pressure quadruples because the volume is quartered.",
      },
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Combined Gas Law',
        text: '<strong>Question:</strong> A gas has pressure 100 kPa, volume 3.0 dm³ and temperature 27°C. It is heated to 127°C and the volume changes to 4.0 dm³. Find the new pressure.<br/><br/><strong>Solution:</strong><br/>T₁ = 27 + 273 = 300 K, T₂ = 127 + 273 = 400 K<br/>p₁ = 100 kPa, V₁ = 3.0 dm³, V₂ = 4.0 dm³<br/><br/>p₂ = p₁V₁T₂ ÷ (T₁V₂) = (100 × 3.0 × 400) ÷ (300 × 4.0) = 120 000 ÷ 1200 = <strong>100 kPa</strong><br/><br/>In this case p is unchanged because the volume increase exactly compensates for the temperature increase.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Using Celsius Instead of Kelvin',
        text: 'Gas law equations involving temperature MUST use the Kelvin scale. Using °C gives completely wrong answers. Always convert: T(K) = T(°C) + 273 before substituting.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: "Gas pressure arises from particle collisions with container walls. Boyle's Law: p₁V₁ = p₂V₂ at constant T. Absolute zero = 0 K = −273°C; convert with T(K) = θ(°C) + 273. Combined gas law: p₁V₁/T₁ = p₂V₂/T₂. Always use Kelvin in gas law calculations.",
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: "Gas pressure = particle wall collisions. Boyle's law p₁V₁ = p₂V₂. 0K = −273°C. Combined law p₁V₁/T₁ = p₂V₂/T₂. Always use Kelvin.",
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-pressure-key',
        prompt: 'Explain, using particle theory, why compressing a gas (reducing its volume) increases its pressure.',
        answer: 'When volume decreases, the same number of molecules occupy a smaller space. Molecules hit the walls more frequently per second, so the force per unit area (pressure) increases.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-boyle',
        prompt: "State Boyle's Law in words and as an equation.",
        answer: "At constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume: p₁V₁ = p₂V₂.",
      },
      {
        id: 'cue-3',
        blockId: 'callout-convert',
        prompt: 'What is absolute zero in both Kelvin and Celsius, and how do you convert between the two scales?',
        answer: 'Absolute zero is 0 K = −273°C. Convert using T(K) = θ(°C) + 273.',
      },
      {
        id: 'cue-4',
        blockId: 'eq-combined',
        prompt: 'Write the combined gas law equation. What must be true about the temperature units used?',
        answer: 'p₁V₁/T₁ = p₂V₂/T₂. Temperature must always be in Kelvin.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
