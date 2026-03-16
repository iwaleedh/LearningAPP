export const note_olevel_chemistry_6_6_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-4-explaining-rates-using-collision-theory.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use collision theory to explain how concentration, temperature, surface area, and catalysts change the rate of reaction.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Explaining Rate Factors Using Collision Theory', level: 2 }
    },
    {
      id: 'call-conc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Concentration (solutions) / Pressure (gases)',
        text: '<strong>Increasing concentration</strong> (or pressure for gases) <strong>increases the rate</strong>.<br/><br/>Explanation: More particles per unit volume → particles are closer together → <strong>more frequent collisions</strong> per unit time → more successful collisions → faster rate.<br/><br/>The energies of the particles are unchanged — only collision frequency increases.'
      }
    },
    {
      id: 'call-temp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Temperature',
        text: '<strong>Increasing temperature increases the rate.</strong><br/><br/>Explanation (two effects):<br/>1. Particles move faster → <strong>more frequent collisions</strong><br/>2. Particles have more kinetic energy → <strong>greater proportion of particles have energy ≥ Eₐ</strong> → more successful collisions<br/><br/>Effect 2 is the more important/dominant effect. A 10 °C rise roughly doubles the rate for many reactions.'
      }
    },
    {
      id: 'call-sa',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Surface Area (Solid Reactants)',
        text: '<strong>Increasing surface area increases the rate.</strong><br/><br/>How: Break solid into smaller pieces (e.g. powder vs lumps).<br/><br/>Explanation: More surface exposed → more reactant particles available for collision at the surface → <strong>more frequent collisions</strong> between reactant particles → faster rate.<br/><br/>Example: Marble chips (CaCO₃) + HCl: powder reacts much faster than large lumps.'
      }
    },
    {
      id: 'call-catalyst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Catalyst',
        text: '<strong>A catalyst increases the rate without being used up.</strong><br/><br/>Explanation: Provides an alternative reaction pathway with a <strong>lower activation energy (Eₐ)</strong> → larger fraction of particles have energy ≥ Eₐ → more successful collisions → faster rate.<br/><br/>On the Maxwell–Boltzmann curve: Eₐ line moves left; same curve but larger shaded area under it.<br/><br/>The enthalpy change (ΔH) is NOT affected by a catalyst.'
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Marble Chips in HCl',
        text: 'CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)<br/><br/>If you increase HCl concentration from 1 mol/dm³ to 2 mol/dm³:<br/>• More H⁺ ions per unit volume<br/>• More frequent collisions with CaCO₃ surface<br/>• CO₂ produced faster<br/><br/>If you use CaCO₃ powder instead of lumps:<br/>• Greater surface area exposed<br/>• More frequent collisions<br/>• CO₂ produced faster (but total amount produced is the SAME)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Concentration/pressure and surface area increase collision frequency. Temperature increases both frequency and the proportion with energy ≥ Eₐ. Catalysts lower Eₐ so more particles succeed — without being consumed. All speed up rate; none change the total amount of product.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Conc/pressure/SA affect collision frequency. Temperature affects frequency + proportion ≥ Eₐ. Catalyst lowers Eₐ.',
    cues: [
      { id: 'cue-1', blockId: 'call-temp', prompt: 'Give two collision-theory reasons why heating speeds up a reaction.', answer: '(1) More frequent collisions because particles move faster; (2) more particles have energy ≥ activation energy, so a higher proportion of collisions are successful.' },
      { id: 'cue-2', blockId: 'call-sa', prompt: 'Why does crushing a solid into powder speed up a reaction?', answer: 'It increases the surface area, exposing more reactant particles at the surface and allowing more frequent collisions with the other reactant.' },
      { id: 'cue-3', blockId: 'call-catalyst', prompt: 'What happens to the Maxwell–Boltzmann curve when a catalyst is added?', answer: 'The curve itself does not change. The activation energy line (Eₐ) shifts to the left (lower value), so the shaded area — representing particles with enough energy to react — becomes larger.' }
    ]
  },
  evidence: [],
  mentions: []
};
