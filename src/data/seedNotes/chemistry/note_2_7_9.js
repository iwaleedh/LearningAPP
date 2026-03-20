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
    },
    {
      id: 'svg-imf-hierarchy',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 420" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">INTERMOLECULAR FORCES — HIERARCHY</text><!-- Hierarchy left panel --><rect x="10" y="34" width="310" height="376" rx="12" fill="rgba(99,102,241,0.1)" stroke="#818cf8" stroke-width="1.5"/><!-- Level 1: London --><rect x="24" y="48" width="282" height="90" rx="8" fill="rgba(96,165,250,0.18)" stroke="#60a5fa" stroke-width="1.5"/><text x="165" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa">LONDON (DISPERSION) FORCES</text><text x="165" y="85" text-anchor="middle" font-size="9" fill="#1e3a8a">In ALL substances. Strength increases with:</text><text x="165" y="100" text-anchor="middle" font-size="9" fill="#1e3a8a">more electrons (bigger molecule) → bigger Mr → stronger</text><text x="165" y="115" text-anchor="middle" font-size="9" fill="#1e3a8a">Also: branching reduces surface area → weaker London forces</text><text x="165" y="128" text-anchor="middle" font-size="8.5" fill="#1250a0">Example: I₂ (solid) stronger IMF than Cl₂ (gas at RT)</text><!-- Strength bar level 1 --><text x="165" y="150" text-anchor="middle" font-size="9" fill="#60a5fa">Strength:</text><rect x="80" y="155" width="170" height="12" rx="6" fill="rgba(96,165,250,0.3)"/><rect x="80" y="155" width="57" height="12" rx="6" fill="#60a5fa"/><!-- Level 2: Permanent dipole --><rect x="24" y="160" width="282" height="80" rx="8" fill="rgba(251,146,60,0.18)" stroke="#fb923c" stroke-width="1.5"/><text x="165" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="#fb923c">PERMANENT DIPOLE-DIPOLE</text><text x="165" y="196" text-anchor="middle" font-size="9" fill="#532407">In polar molecules. Exists ALONGSIDE London forces.</text><text x="165" y="212" text-anchor="middle" font-size="9" fill="#532407">Depends on electronegativity difference and molecular shape.</text><text x="165" y="226" text-anchor="middle" font-size="8.5" fill="#78350f">Example: HCl, SO₂, propanone (C=O dipole)</text><text x="165" y="246" text-anchor="middle" font-size="9" fill="#fb923c">Strength:</text><rect x="80" y="251" width="170" height="12" rx="6" fill="rgba(251,146,60,0.3)"/><rect x="80" y="251" width="113" height="12" rx="6" fill="#7c2d12"/><!-- Level 3: H-bond --><rect x="24" y="264" width="282" height="130" rx="8" fill="rgba(52,211,153,0.18)" stroke="#34d399" stroke-width="2"/><text x="165" y="284" text-anchor="middle" font-size="11" font-weight="700" fill="#34d399">HYDROGEN BONDING</text><text x="165" y="300" text-anchor="middle" font-size="9" fill="#065f46">ONLY when H bonded to N, O, or F</text><text x="165" y="315" text-anchor="middle" font-size="9" fill="#065f46">The lone pair of adjacent N/O/F atom acts as acceptor</text><text x="165" y="330" text-anchor="middle" font-size="9" fill="#065f46">Strongest of the 3 IMFs (but still weaker than covalent bonds)</text><text x="165" y="345" text-anchor="middle" font-size="8.5" fill="#065f46">Examples: water (H₂O), ammonia (NH₃), HF, alcohols, DNA</text><text x="165" y="364" text-anchor="middle" font-size="9" fill="#34d399">Strength:</text><rect x="80" y="369" width="170" height="12" rx="6" fill="rgba(52,211,153,0.3)"/><rect x="80" y="369" width="170" height="12" rx="6" fill="#065f46"/><!-- Right panel: Water anomalies --><rect x="330" y="34" width="360" height="376" rx="12" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="1.5"/><text x="510" y="58" text-anchor="middle" font-size="11" fill="#60a5fa" font-weight="700">ANOMALOUS PROPERTIES OF WATER</text><text x="510" y="73" text-anchor="middle" font-size="9" fill="#1e3a8a">All explained by hydrogen bonding</text><!-- Anomaly 1 --><rect x="345" y="82" width="330" height="54" rx="8" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1"/><text x="510" y="100" text-anchor="middle" font-size="9.5" fill="#34d399" font-weight="700">High Boiling Point (100°C)</text><text x="510" y="115" text-anchor="middle" font-size="8.5" fill="#065f46">Expect ~−80°C from trend (H₂S bp = −60°C)</text><text x="510" y="128" text-anchor="middle" font-size="8.5" fill="#065f46">H-bonds require extra energy to break → bp elevated</text><!-- Anomaly 2 --><rect x="345" y="144" width="330" height="54" rx="8" fill="rgba(251,146,60,0.15)" stroke="#fb923c" stroke-width="1"/><text x="510" y="162" text-anchor="middle" font-size="9.5" fill="#fb923c" font-weight="700">High Heat Capacity</text><text x="510" y="177" text-anchor="middle" font-size="8.5" fill="#532407">4.18 J g⁻¹ K⁻¹ — highest of common liquids</text><text x="510" y="190" text-anchor="middle" font-size="8.5" fill="#532407">Energy absorbed breaking H-bonds as T rises</text><!-- Anomaly 3 --><rect x="345" y="206" width="330" height="68" rx="8" fill="rgba(244,114,182,0.15)" stroke="#f472b6" stroke-width="1"/><text x="510" y="224" text-anchor="middle" font-size="9.5" fill="#f472b6" font-weight="700">Ice Less Dense than Liquid Water</text><text x="510" y="240" text-anchor="middle" font-size="8.5" fill="#4a1040">Ice: open hexagonal lattice (max H-bonds)</text><text x="510" y="253" text-anchor="middle" font-size="8.5" fill="#4a1040">liquid: partial lattice — closer packing</text><text x="510" y="266" text-anchor="middle" font-size="8.5" fill="#4a1040">Ice floats → aquatic life survives winter</text><!-- Anomaly 4 --><rect x="345" y="282" width="330" height="54" rx="8" fill="rgba(232,121,249,0.15)" stroke="#e879f9" stroke-width="1"/><text x="510" y="300" text-anchor="middle" font-size="9.5" fill="#e879f9" font-weight="700">High Enthalpy of Vaporisation</text><text x="510" y="316" text-anchor="middle" font-size="8.5" fill="#4a1040">Lots of H-bonds to break on evaporation</text><text x="510" y="330" text-anchor="middle" font-size="8.5" fill="#4a1040">→ effective coolant (sweating, radiators)</text><!-- Conditions for H-bond --><rect x="345" y="344" width="330" height="58" rx="8" fill="rgba(99,102,241,0.15)" stroke="#818cf8" stroke-width="1"/><text x="510" y="362" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">H-BOND REQUIREMENTS</text><text x="510" y="378" text-anchor="middle" font-size="8.5" fill="#2d2d72">1. H attached to N, O or F (small, electronegative atom)</text><text x="510" y="392" text-anchor="middle" font-size="8.5" fill="#2d2d72">2. Adjacent atom with lone pair on N, O or F</text></svg>',
        caption: 'IMF Hierarchy — London forces exist in ALL substances; permanent dipole-dipole forces in polar molecules; hydrogen bonds only when H is directly bonded to N, O, or F. All 4 anomalous properties of water are explained by its extensive network of hydrogen bonds.'
      },
      terms: []
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