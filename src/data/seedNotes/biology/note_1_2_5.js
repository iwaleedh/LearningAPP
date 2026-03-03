export const note_biology_1_2_5 = {
  blocks: [
    {
      id: 'obj-enzyme',
      type: 'objective',
      data: {
        text: 'Understand enzyme kinetics, substrate concentration effects, factors influencing enzyme rate, inhibition types, and the Michaelis-Menten equation.'
      }
    },
    {
      id: 'h-enzyme-models',
      type: 'heading',
      data: {
        text: 'Lock and Key vs Induced Fit Models',
        level: 2
      }
    },
    {
      id: 'p-lock-key',
      type: 'paragraph',
      data: {
        text: 'The lock and key model (Emil Fischer, 1890) proposes that the enzyme active site is a rigid structure complementary to the substrate. The substrate fits into the active site like a key into a lock. Binding is specific: only substrates with the correct shape bind. Upon binding, the enzyme-substrate complex (ES) is formed. Catalysis occurs, converting substrate to product, and the product is released. The model explains substrate specificity but suggests enzymes are static and don\'t change shape. The induced fit model (Daniel Koshland, 1958) is more accurate: the enzyme active site is flexible. Substrate binding induces conformational changes in both the enzyme and substrate, properly positioning catalytic residues and stabilising the transition state. The enzyme "molds" around the substrate, optimising catalysis. This model explains why enzymes are such efficient catalysts: they don\'t just bind substrates; they distort them toward the transition state, lowering activation energy dramatically. Most modern enzymes follow the induced fit model.'
      }
    },
    {
      id: 'h-michaelis-menten',
      type: 'heading',
      data: {
        text: 'Substrate Concentration and Michaelis-Menten Kinetics',
        level: 2
      }
    },
    {
      id: 'p-mm-kinetics',
      type: 'paragraph',
      data: {
        text: 'Michaelis-Menten kinetics describes how enzyme velocity varies with substrate concentration. At very low [substrate], the enzyme is unsaturated; most enzyme molecules lack substrate. Increasing [substrate] increases velocity linearly because more enzyme molecules are bound. As [substrate] increases, velocity plateaus—all enzyme active sites are occupied (saturation). Further [substrate] increase doesn\'t increase velocity; the reaction is limited by enzyme amount and the rate constant kcat (turnover number, molecules per second per enzyme molecule). The hyperbolic curve (substrate concentration vs velocity) is characteristic. Key parameters: Vmax = maximum velocity when enzyme is fully saturated; Km (Michaelis constant) = [substrate] at which velocity = Vmax/2. Km is inversely related to affinity: low Km indicates high affinity (enzyme binds substrate readily); high Km indicates low affinity. The Michaelis-Menten equation is: v = (Vmax × [S]) / (Km + [S]), where v = velocity, [S] = substrate concentration. A Lineweaver-Burk plot (1/v vs 1/[S]) is linear and useful for determining Vmax and Km from experimental data.'
      }
    },
    {
      id: 'eq-mm-equation',
      type: 'equation',
      data: {
        html: 'v = <span class="nb-frac"><span class="nb-num">V<sub>max</sub> × [S]</span><span class="nb-den">K<sub>m</sub> + [S]</span></span><br/>where v = reaction velocity, V<sub>max</sub> = maximum velocity, K<sub>m</sub> = Michaelis constant, [S] = substrate concentration'
      }
    },
    {
      id: 'h-enzyme-factors',
      type: 'heading',
      data: {
        text: 'Factors Affecting Enzyme Rate',
        level: 2
      }
    },
    {
      id: 'p-temperature',
      type: 'paragraph',
      data: {
        text: 'Temperature affects enzyme rate via two opposing mechanisms. Increasing temperature increases molecular kinetic energy, causing more frequent enzyme-substrate collisions and faster reaction rate. The Q10 coefficient quantifies this: Q10 = (reaction rate at T+10°C) / (reaction rate at T). For most enzymes, Q10 ≈ 2, meaning the rate doubles for every 10°C increase (in the physiological range, ~5–40°C). However, high temperature denatures enzymes: hydrogen bonds and weak interactions stabilising tertiary structure break, unfolding the protein and destroying the active site. The enzyme loses function permanently above its optimal temperature (typically 37°C for human enzymes, 50–80°C for thermophilic organisms). The bell-shaped curve (temperature vs rate) reflects these opposing effects: rate increases with temperature until denaturation begins, then falls sharply.'
      }
    },
    {
      id: 'p-ph',
      type: 'paragraph',
      data: {
        text: 'pH affects enzyme catalytic efficiency and stability. Most enzymes have an optimal pH where they function maximally (e.g. pepsin pH 2, trypsin pH 8). pH changes alter the ionisation state of amino acid side chains: histidine (pKa ~6), lysine (pKa ~10.5), and aspartate (pKa ~3.9) become protonated or deprotonated at different pH. These ionisation changes affect: (1) Active site residues: a catalytic histidine must be protonated to function; changing pH alters its ionisation, reducing activity. (2) Substrate binding: charged substrate interactions with charged active site residues depend on ionisation state. (3) Enzyme stability: extreme pH denatures the protein by disrupting ionic bonds and salt bridges. Enzymes are most active at their optimal pH; moving away from optimum reduces activity, following a bell-shaped curve.'
      }
    },
    {
      id: 'p-enzyme-concentration',
      type: 'paragraph',
      data: {
        text: 'At constant substrate concentration, reaction rate is directly proportional to enzyme concentration, provided substrate is not limiting. Doubling enzyme amount doubles the rate (linear relationship). This assumes the reaction is not substrate-limited (saturation). In cells, enzyme concentration is regulated via gene expression (transcription, translation) and post-translational modification (phosphorylation, ubiquitination for degradation). Hormonal signals (e.g. insulin, glucagon) regulate enzyme expression in response to metabolic needs. This regulation allows cells to adjust reaction rates without changing pathway topology.'
      }
    },
    {
      id: 'h-inhibition',
      type: 'heading',
      data: {
        text: 'Competitive and Non-Competitive Inhibition',
        level: 2
      }
    },
    {
      id: 'p-competitive',
      type: 'paragraph',
      data: {
        text: 'Competitive inhibition occurs when an inhibitor molecule resembles the substrate and competes for binding to the active site. The inhibitor is not a substrate but occupies the binding site, preventing substrate access. Classic example: statins competitively inhibit HMG-CoA reductase by resembling HMG-CoA (the natural substrate). Increasing [substrate] can overcome competitive inhibition because substrate outcompetes inhibitor for the limited enzyme active sites. The kinetic effect: Km appears to increase (requires higher [substrate] to reach Vmax/2), while Vmax remains unchanged. On a Lineweaver-Burk plot, competitive inhibition shows increased slope and x-intercept but the same y-intercept. Competitive inhibition is reversible if the inhibitor-enzyme interaction is weak.'
      }
    },
    {
      id: 'p-noncompetitive',
      type: 'paragraph',
      data: {
        text: 'Non-competitive inhibition occurs when the inhibitor binds to an allosteric site (not the active site), distinct from where substrate binds. The inhibitor does not directly block substrate access but changes enzyme conformation, reducing catalytic efficiency. Non-competitive inhibitors cannot be overcome by increasing [substrate] because they bind independently of substrate presence. The kinetic effect: Vmax decreases (fewer enzyme molecules are catalytically active), while Km remains unchanged. On a Lineweaver-Burk plot, non-competitive inhibition shows the same slope but different intercepts. Heavy metal ions (Pb²⁺, Hg²⁺) often bind to cysteine residues in allosteric sites, causing non-competitive inhibition and toxicity. Non-competitive inhibition is also often reversible but cannot be overcome by substrate.'
      }
    },
    {
      id: 'table-inhibition',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Competitive', 'Non-Competitive'],
        rows: [
          ['Binding site', 'Active site (competes with substrate)', 'Allosteric site (not active site)'],
          ['Effect of ↑[substrate]', 'Overcome inhibition; rate increases', 'No effect; inhibition persists'],
          ['Vmax', 'Unchanged', 'Decreased'],
          ['Km', 'Increased (higher Km)', 'Unchanged'],
          ['Mechanism', 'Substrate and inhibitor mutually exclusive', 'Inhibitor reduces enzyme efficiency'],
          ['Reversibility', 'Reversible (low affinity inhibitor)', 'Usually reversible'],
          ['Example', 'Statin vs HMG-CoA reductase', 'Heavy metals (Pb²⁺, Hg²⁺) on cysteines']
        ],
        caption: 'Competitive vs non-competitive inhibition'
      }
    },
    {
      id: 'callout-worked-kinetics',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Interpreting Enzyme Kinetics',
        text: 'If substrate concentration increases but reaction rate doesn\'t change, enzyme is saturated (substrate-limited). If enzyme concentration increases and rate increases proportionally, substrate is not limiting. If inhibitor is added and increasing substrate increases rate → competitive. If increasing substrate has no effect → non-competitive. Understanding these principles lets you design efficient experiments and troubleshoot enzyme reactions.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does enzyme denaturation above the optimum temperature cause a rapid, irreversible loss of activity? Explain how increased thermal energy breaks the non-covalent bonds (H-bonds, ionic bonds) maintaining tertiary structure, distorting the active site.',
        apply: 'An enzyme has a Km of 2 mmol/L and Vmax of 100 μmol/min. Using the Michaelis-Menten equation v = Vmax[S]/(Km+[S]), calculate the reaction rate when [S] = 2 mmol/L, 6 mmol/L, and 20 mmol/L. Plot these points and describe the curve shape.',
        analyze: 'Compare competitive and non-competitive inhibition in terms of effect on Km, Vmax, mechanism of inhibition, and reversibility. Give one biological example of each type and explain its physiological significance.',
        evaluate: 'Evaluate the induced fit model of enzyme action compared to the lock-and-key model. What experimental evidence (e.g. X-ray crystallography, NMR studies) supports induced fit, and in what situations does the lock-and-key model still provide a useful approximation?',
      },
      terms: [],
    },
    {
      id: 'checklist-enzyme',
      type: 'checklist',
      data: {
        items: [
          { text: 'Induced fit: enzyme active site is flexible; substrate binding induces conformational change', checked: false },
          { text: 'Michaelis-Menten: v = (Vmax × [S]) / (Km + [S]); describes substrate concentration effect', checked: false },
          { text: 'Km = [substrate] at Vmax/2; inverse measure of affinity', checked: false },
          { text: 'Temperature: Q10 ≈ 2; optimal ~37°C for human enzymes; heat denatures above optimum', checked: false },
          { text: 'Competitive inhibition: overcomes by ↑[substrate]; non-competitive cannot be overcome', checked: false }
        ]
      }
    },
    {
      id: 'summary-enzyme',
      type: 'summary',
      data: {
        text: 'Induced fit model: enzyme active site is flexible; substrate binding induces conformational changes, lowering Ea dramatically. Michaelis-Menten kinetics: velocity increases with [substrate] hyperbolically, saturating at Vmax. Km indicates affinity (low Km = high affinity). Temperature increases rate (Q10 ~2) until denaturation. pH affects ionisation and activity (bell-shaped curve around optimum). Enzyme concentration is directly proportional to rate (when substrate non-limiting). Competitive inhibition (active site): overcome by ↑[substrate], ↑Km. Non-competitive inhibition (allosteric): cannot overcome, ↓Vmax.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-lock-key',
        prompt: 'Compare lock and key and induced fit models. Why is induced fit more accurate?'
      },
      {
        id: 'cue-2',
        blockId: 'p-mm-kinetics',
        prompt: 'Explain Michaelis-Menten kinetics. What is Km and what does it indicate?'
      },
      {
        id: 'cue-3',
        blockId: 'p-temperature',
        prompt: 'How does temperature affect enzyme rate? What is Q10?'
      },
      {
        id: 'cue-4',
        blockId: 'p-competitive',
        prompt: 'Explain competitive inhibition. Can it be overcome and how?'
      },
      {
        id: 'cue-5',
        blockId: 'p-noncompetitive',
        prompt: 'Explain non-competitive inhibition. How does it differ from competitive?'
      }
    ],
    summaryText: 'Induced fit: enzyme active site flexible; substrate binding causes conformational change, lowers Ea. Michaelis-Menten: v = (Vmax × [S]) / (Km + [S]); hyperbolic curve. Km = [S] at Vmax/2 (affinity indicator). Temperature: Q10 ~2 (double per 10°C); optimal ~37°C; denatures above. pH: bell curve around optimal; ionisation affects catalysis. Competitive inhibition (active site): ↑Km, Vmax unchanged, overcome by ↑[S]. Non-competitive (allosteric): ↓Vmax, Km unchanged, cannot overcome by ↑[S].',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Enzyme Kinetics and Regulation',
      detail: 'Michaelis-Menten equation, substrate kinetics, factors affecting rate, and inhibition types.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['enzyme', 'kinetics', 'michaelis-menten', 'substrate', 'temperature', 'ph', 'inhibition']
    }
  ]
};
