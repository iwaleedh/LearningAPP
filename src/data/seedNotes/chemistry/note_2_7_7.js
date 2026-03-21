export const note_chemistry_2_7_7 = {
  blocks: [
    {
      id: "obj-svp",
      type: "objective",
      data: {
        text: "Understand the concept of saturated vapour pressure, phase equilibria, evaporation, boiling, and sublimation, and interpret saturated vapour pressure curves."
      }
    },
    {
      id: "h-evaporation",
      type: "heading",
      data: {
        text: "Evaporation in an Open Container",
        level: 2
      }
    },
    {
      id: "p-evaporation",
      type: "paragraph",
      data: {
        text: "Evaporation is the process where molecules at the surface of a liquid gain enough kinetic energy to overcome intermolecular forces and escape into the gas phase. In an open container, these vapour molecules disperse away. Because the most energetic molecules leave, the average kinetic energy of the remaining liquid decreases, leading to a cooling effect."
      }
    },
    {
      id: "h-closed-container",
      type: "heading",
      data: {
        text: "Phase Equilibrium in a Closed Container",
        level: 2
      }
    },
    {
      id: "p-closed",
      type: "paragraph",
      data: {
        text: "If the liquid is in a closed container, the vapour molecules cannot escape. They bounce around the available space, and occasionally, they collide with the surface of the liquid and rejoin it (condensation)."
      }
    },
    {
      id: "list-equilibrium",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Initially, the rate of evaporation is high, and the rate of condensation is zero.",
          "As the concentration of vapour molecules increases, the rate of condensation increases.",
          "Eventually, the rate of condensation becomes equal to the rate of evaporation.",
          "This is a state of dynamic equilibrium. The number of vapour molecules remains constant, exerting a constant pressure called the saturated vapour pressure."
        ]
      }
    },
    {
      id: "callout-svp-def",
      type: "callout",
      data: {
        style: "key",
        title: "Saturated Vapour Pressure (SVP)",
        text: "The pressure exerted by a vapour in dynamic equilibrium with its liquid (or solid) phase in a closed system at a given temperature."
      }
    },
    {
      id: "h-factors-svp",
      type: "heading",
      data: {
        text: "Factors Affecting Saturated Vapour Pressure",
        level: 2
      }
    },
    {
      id: "p-factors",
      type: "paragraph",
      data: {
        text: "Saturated vapour pressure depends strictly on temperature. It does not depend on the volume of the container or the volume of the liquid present (as long as some liquid is present to maintain equilibrium)."
      }
    },
    {
      id: "callout-le-chatelier",
      type: "callout",
      data: {
        style: "tipped",
        title: "Applying Le Chatelier's Principle",
        text: "Evaporation is an endothermic process (it requires energy to break intermolecular forces). \n\nLiquid + Energy ⇌ Vapour\n\nIf the temperature is increased, Le Chatelier's principle predicts the system will shift to absorb this extra heat. The equilibrium shifts to the right, producing more vapour. More vapour molecules with higher kinetic energy exert a higher pressure. Thus, SVP increases with temperature."
      }
    },
    {
      id: "h-boiling-point",
      type: "heading",
      data: {
        text: "Saturated Vapour Pressure and Boiling Point",
        level: 2
      }
    },
    {
      id: "p-boiling",
      type: "paragraph",
      data: {
        text: "A liquid boils when its saturated vapour pressure equals the external atmospheric pressure. At this point, bubbles of vapour can form throughout the bulk of the liquid, rather than just evaporating from the surface."
      }
    },
    {
      id: "list-boiling",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "The 'normal boiling point' of a liquid is the temperature at which its saturated vapour pressure is equal to 1 atmosphere (101.3 kPa).",
          "If external pressure is reduced (e.g., at high altitudes), the liquid will boil at a lower temperature because less heat is needed for the vapour pressure to reach the external pressure.",
          "Different liquids have different vapor pressures at the same temperature, depending on the strength of their intermolecular forces. Weaker forces mean a higher vapor pressure and a lower boiling point."
        ]
      }
    },
    {
      id: "h-sublimation",
      type: "heading",
      data: {
        text: "Sublimation",
        level: 2
      }
    },
    {
      id: "p-sublimation",
      type: "paragraph",
      data: {
        text: "Solids can also have a saturated vapour pressure. If the vapour pressure of a solid reaches the external atmospheric pressure below its melting point, it will sublime—passing directly from the solid to the gas phase without becoming a liquid."
      }
    },
    {
      id: "checklist-svp",
      type: "checklist",
      data: {
        items: [
          { text: "Can define saturated vapour pressure?", checked: false },
          { text: "Understand dynamic equilibrium between evaporation and condensation?", checked: false },
          { text: "Know that SVP is dependent on temperature but independent of container volume?", checked: false },
          { text: "Can explain the effect of temperature on SVP using Le Chatelier's principle?", checked: false },
          { text: "Can define boiling point in terms of saturated vapour pressure and external pressure?", checked: false }
        ]
      }
    },
    {
      id: "summary-svp",
      type: "summary",
      data: {
        text: "Saturated vapour pressure is the pressure of a vapour in dynamic equilibrium with its liquid phase. It increases non-linearly with temperature. A liquid boils when its saturated vapour pressure matches the external atmospheric pressure."
      }
    }
  ,
    {
      id: 'callout-exam-7-7',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Bonds vs Intermolecular Forces",
        text: "Be precise: don't just generically say 'bonds are broken'\u2014always explicitly specify whether you mean strong intramolecular covalent bonds or weak intermolecular forces (e.g. London dispersion)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: "cue-1",
        blockId: "callout-svp-def",
        prompt: "What is the definition of Saturated Vapour Pressure (SVP)?"
      },
      {
        id: "cue-2",
        blockId: "list-equilibrium",
        prompt: "Describe the dynamic equilibrium that occurs when a liquid is placed in a closed container."
      },
      {
        id: "cue-3",
        blockId: "callout-le-chatelier",
        prompt: "Why does saturated vapour pressure increase with temperature? Explain using Le Chatelier's principle."
      },
      {
        id: "cue-4",
        blockId: "p-boiling",
        prompt: "What is the condition for a liquid to boil in terms of saturated vapour pressure?"
      }
    ],
    summaryText: "SVP is the pressure of a vapour in dynamic equilibrium with its liquid in a closed system. It increases with temperature because evaporation is endothermic. Boiling occurs when SVP equals external atmospheric pressure.",
    ready: true
  },
  evidence: [
    {
      id: "ev-1",
      title: "Chemguide: Saturated Vapour Pressure",
      detail: "Details phase equilibrium in closed containers, temperature effects on SVP using Le Chatelier, and the definition of boiling point.",
      year: "2024",
      source: "Chemguide",
      tags: ["physical", "intermolecular forces", "equilibria", "vapour pressure"]
    }
  ]
};