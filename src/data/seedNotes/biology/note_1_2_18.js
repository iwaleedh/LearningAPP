export const note_biology_1_2_18 = {
  blocks: [
    {
      id: 'obj-cp4',
      type: 'objective',
      data: {
        text: 'Describe Core Practical 4: investigating factors affecting enzyme activity (temperature, pH, substrate concentration, enzyme concentration, inhibitors). Use trypsin/casein or catalase/H₂O₂ systems. Measure reaction rate and analyse results.',
      },
    },
    {
      id: 'h-enzyme-context',
      type: 'heading',
      data: { text: 'Enzyme Rate Investigations — Overview', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Core Practical 4 can be conducted with several enzyme-substrate systems. Common choices: (1) Trypsin acting on casein (milk protein) — the milk turns clear as casein is digested; (2) Catalase acting on hydrogen peroxide (H₂O₂) — gas (O₂) is produced and can be collected; (3) Amylase acting on starch — iodine test monitors disappearance of starch. The rate of reaction is the dependent variable; factors tested include temperature, pH, substrate concentration, enzyme concentration, and inhibitors.',
      },
    },
    {
      id: 'h-trypsin-casein',
      type: 'heading',
      data: { text: 'System 1 — Trypsin/Casein (Milk Protease)', level: 2 },
    },
    {
      id: 'p-trypsin-principle',
      type: 'paragraph',
      data: {
        text: 'Casein is a protein that makes milk opaque/white. Trypsin is a protease that hydrolyses peptide bonds, breaking casein into small peptides that dissolve, making the solution transparent. Rate can be measured by recording the time for the milk solution to go clear, then calculating rate = 1/time. Alternatively, opacity can be measured with a colorimeter over time.',
      },
    },
    {
      id: 'table-trypsin-method',
      type: 'comparisonTable',
      data: {
        caption: 'Trypsin/casein investigation — temperature effect',
        headers: ['Step', 'Action', 'Why'],
        rows: [
          ['1', 'Set water bath to required temperature (e.g. 10, 20, 30, 40, 50, 60°C)', 'Controls temperature — independent variable'],
          ['2', 'Place tubes of trypsin solution and milk (casein) separately in the water bath for 5 min to equilibrate', 'Ensures both enzyme and substrate are at the target temperature before mixing — prevents variation due to initial temperature differences'],
          ['3', 'Mix trypsin and milk in a cuvette; start timer immediately', 'Starts the reaction at a known temperature'],
          ['4', 'Place in colorimeter (milky solution = high turbidity = high absorbance at blue wavelength ~420 nm)', 'Absorbance decreases as milk becomes clear — records rate of casein digestion'],
          ['5', 'Record absorbance every 30 s; note time to reach minimum/clear solution', 'Rate = 1/time for clearing, OR slope of initial absorbance vs. time graph'],
          ['6', 'Repeat at each temperature, 3 replicates', 'Reliability'],
        ],
      },
    },
    {
      id: 'h-catalase',
      type: 'heading',
      data: { text: 'System 2 — Catalase/H₂O₂', level: 2 },
    },
    {
      id: 'p-catalase',
      type: 'paragraph',
      data: {
        text: 'Catalase (from potato, liver, or yeast) catalyses: 2H₂O₂ → 2H₂O + O₂. The oxygen gas produced can be collected in an inverted measuring cylinder over water (gas collection), or volume of O₂ per unit time can be measured with a gas syringe. Rate = cm³ O₂ per second (initial rate from slope of gas volume vs. time graph).',
      },
    },
    {
      id: 'table-catalase-method',
      type: 'comparisonTable',
      data: {
        caption: 'Catalase/H₂O₂ investigation method (substrate concentration)',
        headers: ['Step', 'Action', 'Why'],
        rows: [
          ['1', 'Prepare a series of H₂O₂ concentrations by dilution with distilled water (e.g. 20, 15, 10, 5, 2, 1% v/v)', 'Vary substrate concentration — independent variable'],
          ['2', 'Add fixed volume (e.g. 5 cm³) of each concentration to a conical flask; attach gas syringe', 'Controls volume; gas syringe measures O₂ collected'],
          ['3', 'Add fixed volume (e.g. 2 cm³) of catalase solution (e.g. potato extract) and start timer', 'Same amount of enzyme in each trial'],
          ['4', 'Record gas volume every 10 s for 3 min', 'Measures progress of reaction over time'],
          ['5', 'Calculate initial rate from the gradient of the first 30 s of the gas volume vs. time graph', 'Initial rate avoids substrate depletion effects'],
          ['6', 'Plot initial rate vs. substrate concentration', 'Shows relationship (Michaelis-Menten kinetics — rate increases then plateaus at Vmax when all active sites occupied)'],
        ],
      },
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Effect of Variables on Enzyme Rate', level: 2 },
    },
    {
      id: 'table-enzyme-factors',
      type: 'comparisonTable',
      data: {
        caption: 'Effect of each variable on enzyme rate with explanation',
        headers: ['Variable', 'Effect on rate', 'Biological explanation'],
        rows: [
          ['Temperature (0→optimal)', 'Rate increases', 'Higher KE → more frequent enzyme-substrate collisions → more enzyme-substrate complexes per second'],
          ['Temperature (above optimal)', 'Rate falls sharply', 'Thermal energy denatures enzyme: hydrogen bonds/etc. in active site break → active site shape changes → substrate no longer fits → irreversible'],
          ['pH (away from optimal)', 'Rate falls', 'H⁺/OH⁻ alter ionisation of R-groups in active site → breaks ionic bonds and H-bonds → active site shape changes → reduced enzyme-substrate complementarity'],
          ['Substrate concentration ↑', 'Rate increases (up to Vmax)', 'More substrate molecules available → more enzyme-substrate complex formation per second → rate increases until all active sites occupied (Vmax)'],
          ['Enzyme concentration ↑', 'Rate increases proportionally', 'More active sites available → more substrate molecules converted per second (assuming substrate is not limiting)'],
          ['Competitive inhibitor ↑', 'Rate decreases; can be overcome by ↑ substrate', 'Inhibitor has similar shape to substrate → occupies active site → reduces frequency of enzyme-substrate binding; high substrate concentration outcompetes inhibitor'],
          ['Non-competitive inhibitor ↑', 'Rate decreases; cannot be overcome by ↑ substrate', 'Binds allosteric site → changes active site shape → substrate no longer fits, regardless of substrate concentration'],
        ],
      },
    },
    {
      id: 'callout-specific-values',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Specific Values to Know',
        text: 'Optimum temperature: most human/mammalian enzymes have an optimum of approximately 35–40°C (body temperature ~37°C). Above the optimum, denaturation occurs rapidly.\n\nOptimum pH examples:\n• Pepsin (stomach protease): pH 2\n• Urease: pH 7\n• Trypsin (pancreatic protease): pH 8\n\nEach enzyme has its own specific optimum pH because its active site R groups are ionised appropriately at that pH.',
      },
    },
    {
      id: 'callout-initial-rate',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculating Initial Rate of Reaction',
        text: 'The initial rate is the fastest rate, measured from the steepest part of the graph at time = 0 (before substrate is depleted).\n\nMethod: draw a tangent to the curve at t = 0, then calculate:\n\n  Rate = rise ÷ run\n\nExample: if a tangent rises 70 cm³ over 3.5 s:\n  Rate = 70 ÷ 3.5 = 20 cm³ s⁻¹\n\nUsing initial rates prevents the confounding effect of substrate depletion as the reaction proceeds.',
      },
    },
    {
      id: 'h-variables-cp4',
      type: 'heading',
      data: { text: 'Variables Table (Substrate Concentration Investigation)', level: 2 },
    },
    {
      id: 'table-cp4-variables',
      type: 'comparisonTable',
      data: {
        caption: 'Variables for CP4 substrate concentration experiment',
        headers: ['Variable type', 'Variable', 'How controlled'],
        rows: [
          ['Independent', '[H₂O₂] (substrate concentration)', 'Serial dilution with distilled water; confirmed with pH meter or measured volumes'],
          ['Dependent', 'Volume O₂ collected per second (cm³ s⁻¹)', 'Gas syringe; calculate initial rate from slope of first 30 s'],
          ['Controlled', 'Volume of substrate', '5 cm³ measured with a pipette'],
          ['Controlled', 'Volume of enzyme', '2 cm³ same potato extract (same mass of potato, same extraction time)'],
          ['Controlled', 'Temperature', 'All tubes at 25°C in water bath'],
          ['Controlled', 'pH', 'Buffer solution added (e.g. pH 7 phosphate buffer)'],
          ['Controlled', 'Surface area of potato', 'Use same volume of blended homogenate, not potato discs'],
        ],
      },
    },
    {
      id: 'callout-tip-cp4',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips — CP4',
        text: '• "How would you measure the initial rate?" — Use the gradient of the graph in the first 10–30 s (before substrate is used up); draw a tangent to the curve at t=0.\n• "Why use a buffer?" — Buffer maintains constant pH; without it, H₂O₂ decomposition may alter pH, which would also affect enzyme activity and confound results.\n• "Why is the rate at Vmax constant even if you add more substrate?" — All enzyme active sites are already occupied (rate-limiting step is enzyme-substrate complex turnover, not collision frequency).\n• "Why are results repeated?" — To check for anomalies and improve reliability of the mean.\n• "How do you prevent substrate being a limiting factor?" — Provide an abundance (excess) of substrate when investigating the effect of enzyme concentration, pH, or temperature.',
      },
    },
    {
      id: 'checklist-cp4',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the method for the trypsin/casein experiment and how rate is measured', checked: false },
          { text: 'Describe the method for the catalase/H₂O₂ gas collection experiment', checked: false },
          { text: 'Explain how temperature affects enzyme rate (both rising and above optimal)', checked: false },
          { text: 'Explain how substrate concentration affects enzyme rate — include Vmax', checked: false },
          { text: 'Distinguish between competitive and non-competitive inhibitors — how each affects Vmax', checked: false },
          { text: 'State the controlled variables in an enzyme experiment and explain why each is controlled', checked: false },
          { text: 'Explain why a buffer is needed in some enzyme rate experiments', checked: false },
        ],
      },
    },
    {
      id: 'summary-cp4',
      type: 'summary',
      data: {
        text: 'CP4: enzyme rate investigations. Trypsin/casein: milk clears as protein digested; rate = 1/time or colorimeter absorbance. Catalase/H₂O₂: O₂ collected in gas syringe; initial rate = gradient of first 30 s. Variables: temp (higher KE → more collisions → denature above optimal); pH (changes R-group ionisation → disrupts active site); [S] (rate ↑ then plateau at Vmax); [E] (rate ∝ enzyme conc). Competitive inhibitor occupies active site (overcome by high [S]); non-competitive inhibitor changes active site shape via allosteric site (not overcome). Buffer keeps pH constant. Initial rate from tangent to curve at t=0.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-catalase', prompt: 'Describe how you would measure the rate of the catalase/H₂O₂ reaction using a gas syringe. How would you calculate the initial rate?' },
      { id: 'cue-2', blockId: 'table-enzyme-factors', prompt: 'Explain why enzyme rate decreases above the optimal temperature. Are these changes reversible?' },
      { id: 'cue-3', blockId: 'table-enzyme-factors', prompt: 'A graph of rate vs. [substrate] reaches a plateau (Vmax). Explain why adding more substrate does not increase the rate above Vmax.' },
      { id: 'cue-4', blockId: 'table-enzyme-factors', prompt: 'Distinguish between competitive and non-competitive inhibitors. How does your answer to "what happens when you increase substrate concentration?" differ for each?' },
      { id: 'cue-5', blockId: 'callout-tip-cp4', prompt: 'Why must pH be controlled in an enzyme rate experiment? How is this achieved?' },
    ],
    summaryText: 'CP4: trypsin/casein (rate = 1/time to clear); catalase/H₂O₂ (O₂ gas syringe, initial rate = slope first 30s). Temperature: higher KE → faster up to optimum; denaturation above (irreversible). pH: ionisation of active site R-groups. [S]: rate increases → Vmax (all active sites occupied). Competitive inhibitor: blocks active site (overcome by ↑[S]). Non-competitive: allosteric (cannot overcome with ↑[S]). Buffer controls pH.',
    ready: false,
  },
  evidence: [],
};
