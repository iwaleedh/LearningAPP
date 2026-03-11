export const note_chemistry_2_7_8 = {
  blocks: [
    {
      id: "obj-phase-diagrams",
      type: "objective",
      data: {
        text: "Understand and interpret phase diagrams for pure substances, including phase boundaries, the triple point, the critical point, and the anomalous behaviour of water and carbon dioxide."
      }
    },
    {
      id: "h-what-is-phase",
      type: "heading",
      data: {
        text: "What is a Phase?",
        level: 2
      }
    },
    {
      id: "p-phase-def",
      type: "paragraph",
      data: {
        text: "A phase is a physically distinctive form of matter, such as a solid, liquid, or gas. Different phases in a system are separated by distinct boundaries. For example, a mixture of ice and liquid water consists of two phases (solid and liquid). A mixture of oil and water also consists of two phases, but in this case, two distinct liquid phases."
      }
    },
    {
      id: "h-basic-diagram",
      type: "heading",
      data: {
        text: "The Basic Phase Diagram",
        level: 2
      }
    },
    {
      id: "p-diagram-intro",
      type: "paragraph",
      data: {
        text: "A phase diagram is a graph showing the conditions of temperature and pressure under which different phases of a pure substance exist. The axes are Pressure (y-axis) against Temperature (x-axis)."
      }
    },
    {
      id: "list-areas",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "The graph is divided into three main areas representing the Solid, Liquid, and Vapour (Gas) phases.",
          "High pressures and low temperatures favour the solid phase.",
          "Moderate conditions typically favour the liquid phase.",
          "Low pressures and high temperatures favour the vapour (gas) phase."
        ]
      }
    },
    {
      id: "h-boundaries",
      type: "heading",
      data: {
        text: "Phase Boundaries (Equilibrium Lines)",
        level: 3
      }
    },
    {
      id: "p-boundaries",
      type: "paragraph",
      data: {
        text: "The lines separating the areas represent conditions under which two phases co-exist in dynamic equilibrium. Crossing a line by changing temperature or pressure results in a phase change."
      }
    },
    {
      id: "callout-solid-liquid",
      type: "callout",
      data: {
        style: "key",
        title: "Solid-Liquid Boundary (Melting/Freezing Line)",
        text: "Shows the effect of pressure on the melting point. For most substances, the solid is denser than the liquid. Increasing pressure on the equilibrium (Solid ⇌ Liquid) shifts it to the left (Le Chatelier's Principle) to take up less volume. Thus, applying higher pressure raises the melting point, making the line slope slightly forward to the right."
      }
    },
    {
      id: "callout-liquid-vapour",
      type: "callout",
      data: {
        style: "key",
        title: "Liquid-Vapour Boundary (Boiling/Condensation Line)",
        text: "Shows the effect of pressure on boiling point. As external pressure increases, more heat is required to make the vapour pressure equal the external pressure, so the boiling point rises. This line represents the exact same data as a saturated vapour pressure curve."
      }
    },
    {
      id: "callout-solid-vapour",
      type: "callout",
      data: {
        style: "key",
        title: "Solid-Vapour Boundary (Sublimation/Deposition Line)",
        text: "Shows conditions under which the solid converts directly to vapour (sublimation) and vice versa, only occurring at specific, very low temperatures and pressures."
      }
    },
    {
      id: "h-special-points",
      type: "heading",
      data: {
        text: "The Triple Point and Critical Point",
        level: 2
      }
    },
    {
      id: "list-points",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "**The Triple Point:** The exact temperature and pressure where all three boundaries meet. At this unique set of conditions, solid, liquid, and vapour all exist simultaneously in dynamic equilibrium. The substance is melting, freezing, boiling, condensing, subliming, and depositing all at the same time." },
          { text: "**The Critical Point:** The upper limit of the liquid-vapour boundary line. Above this critical temperature, the substance cannot be liquefied by increasing pressure alone; the particles have too much kinetic energy. The substance is termed a supercritical fluid or a gas." }
        ]
      }
    },
    {
      id: "h-water",
      type: "heading",
      data: {
        text: "The Phase Diagram for Water",
        level: 2
      }
    },
    {
      id: "p-water",
      type: "paragraph",
      data: {
        text: "Water is highly unusual because ice is less dense than liquid water due to an open hydrogen-bonded structure. Consequently, its phase diagram has one major difference from the norm."
      }
    },
    {
      id: "list-water",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "The Solid-Liquid equilibrium line slopes **backwards** (to the left).",
          "According to Le Chatelier's Principle, increasing pressure on the equilibrium (Ice ⇌ Water) shifts it to the denser state (smaller volume) to reduce pressure.",
          "Therefore, increasing pressure on ice forces it to melt into liquid water.",
          "This means higher pressures result in a lower melting (freezing) point."
        ]
      }
    },
    {
      id: "h-co2",
      type: "heading",
      data: {
        text: "The Phase Diagram for Carbon Dioxide",
        level: 2
      }
    },
    {
      id: "p-co2",
      type: "paragraph",
      data: {
        text: "The phase diagram for carbon dioxide has the normal forward-sloping solid-liquid line. However, its Triple Point is notable because it occurs at a pressure of 5.11 atmospheres (well above normal atmospheric pressure of 1 atm)."
      }
    },
    {
      id: "list-co2",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Because liquid carbon dioxide cannot exist below 5.11 atmospheres, you cannot observe liquid CO₂ under normal room conditions.",
          "At 1 atmosphere of pressure, solid CO₂ (\"dry ice\") transitions directly into gas at −78°C without melting.",
          "This makes it an excellent refrigerant that sublimes cleanly away."
        ]
      }
    },
    {
      id: "checklist-phase",
      type: "checklist",
      data: {
        items: [
          { text: "Can interpret sections of a phase diagram (solid, liquid, gap/vapour)?", checked: false },
          { text: "Can explain the significance of phase boundary lines using Le Chatelier's principle?", checked: false },
          { text: "Know the definitions of the Triple Point and Critical Point?", checked: false },
          { text: "Understand why water's solid-liquid line slopes backwards (ice is less dense)?", checked: false },
          { text: "Understand why carbon dioxide sublimes under 1 atm pressure (Triple point > 1 atm)?", checked: false }
        ]
      }
    },
    {
      id: "summary-phase",
      type: "summary",
      data: {
        text: "Phase diagrams map out state equilibria against pressure and temperature. The lines represent dynamic equilibrium between phases, converging at the unique Triple Point. The liquid-gas line terminates at the Critical Point. Water uniquely possesses a backwards-sloping melting line, while Carbon Dioxide exhibits a triple point at 5.11 atm causing it to undergo sublimation under standard atmospheric conditions."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: "cue-1",
        blockId: "callout-solid-liquid",
        prompt: "Why does the solid-liquid line typically slope forwards (to the right) for most substances?"
      },
      {
        id: "cue-2",
        blockId: "list-points",
        prompt: "What is the Triple Point?"
      },
      {
        id: "cue-3",
        blockId: "list-points",
        prompt: "What happens above the Critical Temperature?"
      },
      {
        id: "cue-4",
        blockId: "list-water",
        prompt: "Why does the Solid-Liquid phase boundary curve backwards for water?"
      },
      {
        id: "cue-5",
        blockId: "list-co2",
        prompt: "Why does Carbon Dioxide sublime (act as 'dry ice') at 1 atmosphere, rather than melt?"
      }
    ],
    summaryText: "Most substances map dense solids, so melting point rises with pressure (Le Chatelier). The Triple Point is the P/T exact match where 3 phases coexist. Above critical temp, gases can't be liquefied by pressure. Water's melting line slopes backwards because ice is less dense than water. CO2 has a triple point above 5.11 atm, so it sublimes at 1 atm without forming liquid.",
    ready: true
  },
  evidence: [
    {
      id: "ev-1",
      title: "Chemguide: Phase Diagrams",
      detail: "Outlines interpretation of pure substance phase diagrams, triple vs critical points, and the Le Chatelier behaviour of water and CO2.",
      year: "2024",
      source: "Chemguide",
      tags: ["physical", "intermolecular forces", "equilibria", "phase diagrams", "water", "carbon dioxide"]
    }
  ]
};