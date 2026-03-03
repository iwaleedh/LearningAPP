export const note_biology_1_2_13 = {
  blocks: [
    {
      id: 'obj-membrane-perm',
      type: 'objective',
      data: {
        text: 'Understand membrane permeability changes with temperature, protein denaturation, and practical analysis of membrane integrity using beetroot tissue.'
      }
    },
    {
      id: 'h-membrane-perm-theory',
      type: 'heading',
      data: {
        text: 'Membrane Permeability and Temperature',
        level: 2
      }
    },
    {
      id: 'p-permeability-temp',
      type: 'paragraph',
      data: {
        text: 'Membrane permeability is the ease with which molecules cross the cell membrane. It depends on several factors: membrane composition (lipid saturation, cholesterol content), temperature, and presence of transport proteins. Temperature affects permeability dramatically. At low temperatures (0–20°C), the phospholipid bilayer is relatively rigid; membrane proteins are less active. Permeability to small molecules (including leakage of small ions and dyes) is low. As temperature increases (20–40°C), the bilayer becomes more fluid; lipids and proteins move laterally; membranes become more permeable. This is reversible: cooling restores rigidity and reduces permeability. However, above ~40°C (optimal temperature for most human enzymes ~37°C), denaturation begins. Proteins unfold; hydrogen bonds and weak interactions stabilising their structure break. Membrane proteins lose function. Phospholipid bilayer integrity is compromised. Permeability increases dramatically as the membrane becomes increasingly leaky. Above ~50°C, denaturation becomes irreversible; the cell dies.'
      }
    },
    {
      id: 'p-protein-denaturation',
      type: 'paragraph',
      data: {
        text: 'Protein denaturation is the loss of protein tertiary and quaternary structure, resulting in loss of function. High temperature causes thermal denaturation: energy input breaks hydrogen bonds and weak interactions, causing the protein to unfold. The polypeptide backbone remains intact (primary structure unchanged), but the 3D shape is lost and the active site is destroyed. Other denaturants include extreme pH (H⁺ or OH⁻ ions disrupt ionic interactions), detergents (dissolve lipids, disrupting hydrophobic interactions), and reducing agents (break disulphide bonds). For membrane integrity, thermal denaturation is most relevant. Membrane proteins denature at high temperature, losing function; the lipid bilayer becomes less organised; permeability increases. Cells attempt to maintain membrane fluidity by adjusting lipid composition: increasing unsaturated fats in cold, decreasing in heat.'
      }
    },
    {
      id: 'h-beetroot-practical',
      type: 'heading',
      data: {
        text: 'Core Practical 3: Membrane Permeability Using Beetroot',
        level: 2
      }
    },
    {
      id: 'p-beetroot-principle',
      type: 'paragraph',
      data: {
        text: 'Beetroot contains anthocyanin pigments in its vacuoles. These pigments are red/purple when intracellular (vacuolar), but if the cell membrane becomes damaged (increased permeability), anthocyanins leak out of the cell into the surrounding liquid, turning it red/purple. This colour change is easily measured spectrophotometrically using a colorimeter or spectrophotometer. The intensity of colour (absorbance at ~540 nm) is proportional to the amount of leaked pigment, which reflects the extent of membrane damage. This makes beetroot a perfect model organism for studying membrane permeability: the pigment leakage is visible, quantifiable, and directly indicates loss of membrane integrity.'
      }
    },
    {
      id: 'p-beetroot-procedure',
      type: 'paragraph',
      data: {
        text: 'Procedure: (1) Cut beetroot tissue into uniform discs or cubes (~5 mm) using a cork borer or knife. (2) Rinse thoroughly with distilled water to remove surface pigment (cells may have been cut). (3) Prepare water baths at set temperatures (e.g. 20°C, 30°C, 40°C, 50°C, 60°C, 70°C). (4) Place discs in test tubes containing distilled water. Immerse tubes in water baths for a fixed time (~5 minutes at each temperature to allow pigment leakage). (5) Remove discs; measure the absorbance of the liquid using a colorimeter (wavelength 540 nm, red light). (6) Plot absorbance (y-axis) vs temperature (x-axis). (7) Repeat with multiple discs at each temperature; calculate mean absorbance and standard deviation. Controls: (a) negative control—distilled water at room temperature (no leakage expected, low absorbance). (b) Positive control—beetroot disc boiled (all membranes destroyed, maximum absorbance). (c) Blank—distilled water in colorimeter (set absorbance = 0).'
      }
    },
    {
      id: 'h-results-interpretation',
      type: 'heading',
      data: {
        text: 'Results and Interpretation',
        level: 2
      }
    },
    {
      id: 'p-results',
      type: 'paragraph',
      data: {
        text: 'Typical results: absorbance increases gradually from 20°C to ~40°C (linear increase), reflecting increased membrane fluidity and slight permeability increase. From 40°C to 50°C, absorbance increases more steeply (exponential increase), indicating accelerated protein denaturation and rapid membrane permeability increase. Above 50°C, absorbance plateaus (maximum or near-maximum), indicating complete cell death. The steepest part of the curve (~40–50°C) represents the transition from reversible to irreversible denaturation. This matches the known optimal temperature for human enzymes (~37°C) and lethal temperature ranges for most cells. The curve is typically sigmoid (S-shaped) or exponential, not linear.'
      }
    },
    {
      id: 'p-interpretation',
      type: 'paragraph',
      data: {
        text: 'Interpretation: (1) Low-temperature region (0–40°C): gradual absorbance increase reflects increased membrane fluidity. Permeability change is modest and reversible. (2) Transition region (40–50°C): steep absorbance increase indicates rapid membrane denaturation. Protein loss of function accelerates. (3) High-temperature region (>50°C): absorbance plateaus. Cells are completely dead; all membranes are damaged. The data demonstrate that: (a) temperature critically affects membrane permeability; (b) the effect is not linear—a critical temperature range (~40–50°C) marks a sharp transition; (c) protein denaturation drives the permeability change (supported by knowing proteins are the main heat-sensitive membrane component).'
      }
    },
    {
      id: 'h-sources-of-error',
      type: 'heading',
      data: {
        text: 'Sources of Error and Improvements',
        level: 2
      }
    },
    {
      id: 'p-errors',
      type: 'paragraph',
      data: {
        text: 'Systematic errors: (1) Beetroot discs may be damaged during cutting, causing immediate pigment leakage independent of temperature. Improvement: use a cork borer for uniform cuts; handle carefully. (2) Initial rinse may be incomplete, leaving surface pigment. Improvement: rinse thoroughly until water is clear. (3) Unequal heating: test tubes may not reach set temperature uniformly, or temperature may drift during the 5-minute incubation. Improvement: use a thermometer to verify each tube\'s temperature; use insulated water baths or thermostatic heaters. (4) Variable incubation time: some discs left longer than others. Improvement: use a timer; remove all discs simultaneously. (5) Colorimeter reading errors: air bubbles in cuvettes, inconsistent cuvette position. Improvement: check for bubbles; wipe cuvettes; use cuvette holders. (6) Beetroot variety varies: some varieties have higher anthocyanin content. Improvement: use consistent beetroot source and variety.'
      }
    },
    {
      id: 'p-improvements',
      type: 'paragraph',
      data: {
        text: 'Improvements: (1) Use multiple discs per temperature (n ≥ 3) to obtain mean and standard deviation. (2) Test more temperature points (e.g. every 5°C) to resolve the transition region better. (3) Use a temperature probe in one test tube to confirm actual temperature. (4) Standardise disc size and mass (weigh discs). (5) Repeat the experiment on different days to assess reproducibility. (6) Use absorbance vs time plot for each temperature to confirm pigment leakage reaches a plateau (equilibrium) before reading. (7) Calculate Q10 (change in rate per 10°C) in the linear region to quantify the temperature effect.'
      }
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        headers: ['Error', 'Cause', 'Effect', 'Minimisation'],
        rows: [
          ['Damaged discs', 'Cutting causes cell damage', 'High baseline pigment leakage', 'Use cork borer; careful handling'],
          ['Surface pigment', 'Incomplete rinse', 'Overestimate absorbance at low temp', 'Thorough rinsing until clear'],
          ['Temperature variation', 'Unequal heating or drift', 'Inconsistent absorbance readings', 'Verify temperature with thermometer'],
          ['Variable incubation time', 'Asynchronous disc removal', 'Inconsistent pigment leakage', 'Use timer; remove all simultaneously'],
          ['Colorimeter error', 'Air bubbles, cuvette position', 'Incorrect absorbance reading', 'Check bubbles; standardise positioning'],
          ['Beetroot variability', 'Different anthocyanin content', 'Experiment-to-experiment variation', 'Use consistent beetroot type/source']
        ],
        caption: 'Sources of error in beetroot permeability practical'
      }
    },
    {
      id: 'callout-worked-data',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Analysing Beetroot Data',
        text: 'Example data: 20°C (A=0.05), 30°C (A=0.08), 40°C (A=0.15), 50°C (A=0.45), 60°C (A=0.72), 70°C (A=0.75). Plot these on a graph. Observe: linear increase 20–40°C (ΔA ~0.01 per °C). Steep increase 40–50°C (ΔA ~0.30 per °C; 30× faster!). Plateau 50–70°C (ΔA ~0.03 per °C; rate slowing). Conclusion: membrane denaturation accelerates 40–50°C; critical transition region. Above 50°C, maximum damage reached.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does increasing temperature above ~40°C cause a sudden increase in membrane permeability in beetroot cells? Explain: at moderate temperatures H-bonds in membrane proteins are disrupted, but above ~40°C the lipid bilayer becomes too fluid and integral proteins denature, creating gaps and allowing anthocyanin to leak out rapidly.',
        apply: 'A student measures absorbance of the solution containing beetroot-released anthocyanin at temperatures 20, 30, 40, 50, 60°C. At 40°C absorbance = 0.15; at 50°C = 0.45; at 60°C = 0.80. Calculate the Q₁₀ for membrane permeability between 40–60°C and explain what this tells you about the process.',
        analyze: 'Compare the effect of temperature and ethanol concentration on membrane permeability. Both increase permeability, but via different mechanisms — explain each mechanism and predict which would cause more permanent damage to the membrane.',
        evaluate: 'Evaluate the beetroot practical as a model for understanding membrane permeability. Consider what it does well (demonstrates temperature effect, quantitative, safe) and what it cannot tell us (cannot distinguish protein denaturation from lipid fluidisation, anthocyanin may not represent all membrane transport).',
      },
      terms: [],
    },
    {
      id: 'checklist-permeability',
      type: 'checklist',
      data: {
        items: [
          { text: 'Membrane permeability increases with temperature due to increased fluidity and protein denaturation', checked: false },
          { text: 'Below 40°C: reversible increase in permeability (fluidity); above 40°C: irreversible (denaturation)', checked: false },
          { text: 'Beetroot anthocyanin pigments leak out when cell membranes are damaged', checked: false },
          { text: 'Colorimeter (absorbance ~540 nm) quantifies leaked pigment; indicates membrane permeability', checked: false },
          { text: 'Graph typically shows sigmoid/exponential curve with steep transition 40–50°C', checked: false }
        ]
      }
    },
    {
      id: 'summary-permeability',
      type: 'summary',
      data: {
        text: 'Membrane permeability increases gradually with temperature (20–40°C) due to increased lipid fluidity. Above 40°C, protein denaturation accelerates, dramatically increasing permeability. Above ~50°C, cell death/maximum damage. Beetroot practical uses anthocyanin leakage (measured by colorimeter, absorbance 540 nm) as an indicator of membrane damage. Results show sigmoid curve: gradual increase to 40°C, steep 40–50°C transition, plateau >50°C. Errors include disc damage, incomplete rinsing, temperature variation, timing inconsistency. Multiple replicates and temperature points improve reliability.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-permeability-temp',
        prompt: 'Explain how temperature affects membrane permeability. Describe reversible vs irreversible changes.'
      },
      {
        id: 'cue-2',
        blockId: 'p-protein-denaturation',
        prompt: 'What is protein denaturation? How does high temperature cause it?'
      },
      {
        id: 'cue-3',
        blockId: 'p-beetroot-principle',
        prompt: 'Why is beetroot suitable for studying membrane permeability? What does anthocyanin leakage indicate?'
      },
      {
        id: 'cue-4',
        blockId: 'p-beetroot-procedure',
        prompt: 'Describe the beetroot permeability practical procedure. What is the control?'
      },
      {
        id: 'cue-5',
        blockId: 'p-results',
        prompt: 'What pattern do you expect in the absorbance vs temperature graph? Why?'
      }
    ],
    summaryText: 'Temperature increases permeability: <40°C gradual (fluidity), >40°C rapid (denaturation). Reversible <40°C; irreversible >40°C. Beetroot anthocyanins (vacuolar) leak when membrane damaged, turning solution red. Colorimeter measures absorbance (~540 nm) = pigment leakage = permeability. Procedure: discs in water at various temps (20–70°C), measure colour. Graph: sigmoid (gradual 20–40°C, steep 40–50°C, plateau >50°C). Errors: disc damage, incomplete rinse, temperature variation, timing. Improvements: multiple discs, frequent temps, verify temperature, standardise.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 3: Membrane Permeability and Temperature',
      detail: 'Experimental investigation of how temperature affects cell membrane integrity using beetroot tissue.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['practical', 'membrane-permeability', 'temperature', 'beetroot', 'anthocyanin', 'denaturation']
    }
  ]
};
