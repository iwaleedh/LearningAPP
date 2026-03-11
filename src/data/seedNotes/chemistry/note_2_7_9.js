export const note_chemistry_2_7_9 = {
  blocks: [
    {
      id: "obj-raoult",
      type: "objective",
      data: {
        text: "Understand Raoult's Law for non-volatile solutes, explain why vapour pressure decreases, and apply it to explain boiling point elevation and freezing point depression using phase diagrams."
      }
    },
    {
      id: "h-raoult-law",
      type: "heading",
      data: {
        text: "Raoult's Law and Non-Volatile Solutes",
        level: 2
      }
    },
    {
      id: "p-non-volatile",
      type: "paragraph",
      data: {
        text: "A non-volatile solute is one that has effectively no tendency to form a vapour at the temperature of the solution (e.g., salt or sugar dissolved in water). When a non-volatile solute is added to a volatile solvent, the vapour pressure of the solvent is lowered."
      }
    },
    {
      id: "callout-law",
      type: "callout",
      data: {
        style: "key",
        title: "Raoult's Law Definition",
        text: "The vapour pressure of a solution containing a non-volatile solute is equal to the vapour pressure of the pure solvent at that temperature multiplied by its mole fraction."
      }
    },
    {
      id: "eq-raoult",
      type: "equation",
      data: {
        html: "<i>P</i> = <i>P</i>° × <i>x</i><sub>solvent</sub>",
        caption: "Where P is vapour pressure of solution, P° is vapour pressure of pure solvent, and x is the mole fraction of the solvent."
      }
    },
    {
      id: "callout-mole-fraction",
      type: "callout",
      data: {
        style: "key",
        title: "Mole Fraction (x)",
        text: "The mole fraction of the solvent is the number of moles of solvent divided by the total number of moles of all substances present (solvent + all solutes)."
      }
    },
    {
      id: "h-explanation",
      type: "heading",
      data: {
        text: "Why Raoult's Law Works",
        level: 2
      }
    },
    {
      id: "p-explanation",
      type: "paragraph",
      data: {
        text: "Saturated vapour pressure is established when the rate of evaporation precisely equals the rate of condensation. Adding a solute disrupts this:"
      }
    },
    {
      id: "list-explanation",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Solute particles occupy space at the surface of the liquid.",
          "This reduces the fraction of solvent molecules at the surface.",
          "Fewer solvent molecules are available to break away and enter the vapour phase, reducing the overall rate of evaporation.",
          "The rate at which vapour molecules strike the surface and condense remains mostly unaffected.",
          "The system reaches a new equilibrium with fewer molecules in the vapour phase, resulting in a lower vapour pressure."
        ]
      }
    },
    {
      id: "h-limitations",
      type: "heading",
      data: {
        text: "Limitations and Ideal Solutions",
        level: 2
      }
    },
    {
      id: "p-ideal",
      type: "paragraph",
      data: {
        text: "An ideal solution is defined as one that perfectly obeys Raoult's Law. In an ideal solution, the intermolecular forces between solvent-solvent, solute-solute, and solvent-solute particles are exactly identical. Real solutions deviate from this, but very dilute solutions behave ideally."
      }
    },
    {
      id: "warning-particles",
      type: "callout",
      data: {
        style: "warning",
        title: "Nature of the Solute: Dissociation",
        text: "When calculating mole fractions, you must use the total number of moles of particles formed in solution. For example, 1 mole of NaCl dissociates into 1 mole of Na⁺ and 1 mole of Cl⁻ (giving 2 moles of particles). Sugar does not dissociate, so 1 mole of sugar remains 1 mole of dissolved particles. Ionic solutes lower vapour pressure more than an equal molar amount of a covalent solute due to this splitting."
      }
    },
    {
      id: "h-melting-boiling",
      type: "heading",
      data: {
        text: "Effect on Boiling and Freezing Points",
        level: 2
      }
    },
    {
      id: "p-diagram-shift",
      type: "paragraph",
      data: {
        text: "Because adding a non-volatile solute lowers the vapour pressure across all temperatures, the entire liquid-vapour equilibrium curve on a phase diagram shifts downwards. This dramatically affects the boiling and freezing points."
      }
    },
    {
      id: "list-shift-effects",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "**Boiling Point Elevation:** A liquid boils when its vapour pressure equals external pressure. Since the solution's vapour pressure is lower, a higher temperature is required to reach an external pressure of 1 atm. Thus, the boiling point is higher.",
          "**Freezing Point Depression:** The shifted liquid-vapour curve intersects the solid-vapour curve at a lower temperature, giving a new, lower triple point. Because the solid-liquid boundary originates from the triple point, the entire freezing boundary shifts, meaning the solution freezes at a lower temperature than the pure solvent."
        ]
      }
    },
    {
      id: "svg-raoult-phase",
      type: "svg",
      data: {
        caption: "Phase Diagram showing Boiling Point Elevation and Freezing Point Depression. Solid lines = Pure Solvent. Dashed lines = Solution.",
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
  <!-- Axes -->
  <line x1="50" y1="250" x2="380" y2="250" stroke="currentColor" stroke-width="2" />
  <line x1="50" y1="250" x2="50" y2="30" stroke="currentColor" stroke-width="2" />
  <text x="210" y="280" text-anchor="middle" fill="currentColor" font-size="14">Temperature (T)</text>
  <text x="20" y="140" text-anchor="middle" transform="rotate(-90 20,140)" fill="currentColor" font-size="14">Pressure (P)</text>

  <!-- 1 atm line -->
  <line x1="50" y1="80" x2="380" y2="80" stroke="var(--color-border)" stroke-dasharray="2,2" stroke-width="1.5" />
  <text x="15" y="85" fill="var(--color-text-secondary)" font-size="12">1 atm</text>

  <!-- Pure Solvent Curves (Solid) -->
  <path d="M50 250 Q 80 200 130 160" fill="none" stroke="var(--color-text)" stroke-width="2" />
  <line x1="130" y1="160" x2="160" y2="40" stroke="var(--color-text)" stroke-width="2" />
  <path d="M130 160 Q 220 120 300 40" fill="none" stroke="var(--color-text)" stroke-width="2" />

  <!-- Intersection drops down for pure solvent BP / FP -->
  <line x1="150" y1="80" x2="150" y2="250" stroke="var(--color-border)" stroke-dasharray="4,4" stroke-width="1" />
  <line x1="260" y1="80" x2="260" y2="250" stroke="var(--color-border)" stroke-dasharray="4,4" stroke-width="1" />

  <text x="150" y="265" text-anchor="middle" fill="currentColor" font-size="11">T<tspan dy="5" font-size="8">f</tspan><tspan dy="-5">°</tspan></text>
  <text x="260" y="265" text-anchor="middle" fill="currentColor" font-size="11">T<tspan dy="5" font-size="8">b</tspan><tspan dy="-5">°</tspan></text>

  <!-- Solution Curves (Dashed) -->
  <!-- Shifted Vapour pressure curve -->
  <path d="M110 178 Q 200 138 310 50" fill="none" stroke="var(--color-primary)" stroke-dasharray="5,5" stroke-width="2" />
  <!-- Shifted freezing curve -->
  <line x1="110" y1="178" x2="135" y2="40" stroke="var(--color-primary)" stroke-dasharray="5,5" stroke-width="2" />

  <!-- Dots for new intersections -->
  <circle cx="282" cy="80" r="4" fill="var(--color-primary)" />
  <circle cx="127" cy="80" r="4" fill="var(--color-primary)" />

  <!-- New BP / FP drops -->
  <line x1="127" y1="80" x2="127" y2="250" stroke="var(--color-primary)" stroke-dasharray="2,2" stroke-width="1" />
  <line x1="282" y1="80" x2="282" y2="250" stroke="var(--color-primary)" stroke-dasharray="2,2" stroke-width="1" />

  <text x="127" y="265" text-anchor="middle" fill="var(--color-primary)" font-size="11">T<tspan dy="5" font-size="8">f</tspan></text>
  <text x="282" y="265" text-anchor="middle" fill="var(--color-primary)" font-size="11">T<tspan dy="5" font-size="8">b</tspan></text>

  <!-- Arrows -->
  <path d="M145 240 L132 240" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <path d="M265 240 L277 240" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  
  <defs>
    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: "checklist-raoult",
      type: "checklist",
      data: {
        items: [
          { text: "Can define Raoult's Law and calculate using mole fraction?", checked: false },
          { text: "Can explain why a surface covered partly by solute Lowers evaporation rate?", checked: false },
          { text: "Know to count particles (e.g. ions) when calculating mole fractions?", checked: false },
          { text: "Understand why lowering vapour pressure raises Boiling Point?", checked: false },
          { text: "Understand why lowered vapour pressure curves depress the Freezing Point?", checked: false }
        ]
      }
    },
    {
      id: "summary-raoult",
      type: "summary",
      data: {
        text: "Adding a non-volatile solute lowers the vapour pressure of a solvent, predicted by Raoult's Law. Solute particles displace solvent molecules at the surface, reducing evaporation frequency. This downward shift fundamentally alters phase diagram boundaries, increasing the required temperature to boil (Boiling Point Elevation) and decreasing the temperature required to freeze (Freezing Point Depression)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: "cue-1",
        blockId: "callout-law",
        prompt: "State Raoult's Law for a non-volatile solute."
      },
      {
        id: "cue-2",
        blockId: "list-explanation",
        prompt: "Kinetic-theoretically, why does a non-volatile solute decrease vapour pressure?"
      },
      {
        id: "cue-3",
        blockId: "warning-particles",
        prompt: "Why would 1 mole of NaCl lower vapour pressure more than 1 mole of sugar in the same amount of water?"
      },
      {
        id: "cue-4",
        blockId: "list-shift-effects",
        prompt: "How does adding a non-volatile solute affect boiling and freezing points?"
      }
    ],
    summaryText: "Raoult's Law states solution vapour pressure = pure vapour pressure × solvent mole fraction. Solute blocks surface solvent molecules, reducing evaporation rate. NaCl splits into 2 moles of particles, doubling the effect versus sugar. The overall reduction in vapour pressure causes boiling point elevation and freezing point depression.",
    ready: true
  },
  evidence: [
    {
      id: "ev-1",
      title: "Chemguide: Raoult's Law and non-volatile solutes",
      detail: "Explains Raoult's Law, surface kinetics, the need to count ionic dissociation particles, and the resulting elevation of BP and depression of FP via shifted phase diagrams.",
      year: "2024",
      source: "Chemguide",
      tags: ["physical", "intermolecular forces", "equilibria", "Raoult's Law", "colligative properties"]
    }
  ]
};