export const note_biology_1_2_3 = {
  blocks: [
    {
      id: 'obj-transport',
      type: 'objective',
      data: {
        text: 'Understand passive and active membrane transport mechanisms, including diffusion, facilitated diffusion, osmosis, active transport, and endocytosis/exocytosis.'
      }
    },
    {
      id: 'h-diffusion',
      type: 'heading',
      data: {
        text: 'Diffusion and Facilitated Diffusion',
        level: 2
      }
    },
    {
      id: 'p-diffusion',
      type: 'paragraph',
      data: {
        text: 'Diffusion is the random movement of molecules or ions from a region of high concentration to a region of low concentration, driven by the kinetic energy of molecules. It is passive—no ATP is required. Substances that readily diffuse across lipid membranes are small, non-polar molecules: oxygen (O₂), carbon dioxide (CO₂), lipid-soluble hormones (oestrogen, testosterone), and ethanol. The rate of diffusion depends on the concentration gradient (larger gradient = faster diffusion), temperature (higher temperature = faster movement), and surface area (larger area = faster diffusion overall). Diffusion continues until concentrations equalise on both sides of the membrane. Inside cells, diffusion is rapid over short distances (micrometers), delivering oxygen to mitochondria and removing CO₂; over long distances, diffusion is slow and insufficient, requiring circulatory systems.'
      }
    },
    {
      id: 'p-facilitated-diffusion',
      type: 'paragraph',
      data: {
        text: 'Facilitated diffusion is the movement of molecules across a membrane down their concentration gradient, assisted by carrier or channel proteins, but without ATP. The substance cannot cross the lipid bilayer alone (too large, too polar, or charged), so it requires protein help. Glucose enters muscle cells via GLUT4 glucose transporter (carrier protein) down its concentration gradient (high in blood, low in muscle cells). The transporter binds glucose on the outside, changes shape, and releases glucose inside. The protein then resets. Ions (Na⁺, K⁺, Cl⁻) also use channel proteins: ion channels form aqueous pores that ions can pass through without contacting lipids. Ion channels are selective; different channels pass different ions. Both carrier and channel proteins facilitate diffusion without energy input, so diffusion stops when concentrations equalise. The process is passive but requires specific proteins, making it selective. The rate is limited by the number of available proteins (saturation effect).'
      }
    },
    {
      id: 'h-active-transport',
      type: 'heading',
      data: {
        text: 'Active Transport',
        level: 2
      }
    },
    {
      id: 'p-active-transport-def',
      type: 'paragraph',
      data: {
        text: 'Active transport is the movement of substances across a membrane against their concentration gradient, requiring energy (ATP) and a carrier protein. This allows cells to accumulate substances at higher concentrations than the external environment, enabling controlled nutrient uptake and waste export. The Na⁺/K⁺ pump (sodium-potassium ATPase) is a classic example: it uses one ATP to pump three Na⁺ out of the cell and two K⁺ into the cell, against their concentration gradients. This pump maintains low intracellular Na⁺ and high K⁺ crucial for resting membrane potential, nerve signal conduction, and muscle contraction. The pump is electrogenic: it creates a net outward positive charge, contributing to the negative membrane potential inside cells. Other active transport examples: calcium pumps (maintain low intracellular Ca²⁺), proton pumps (H⁺ pumps in lysosomes and vacuoles, creating acidic compartments), and peptide transporters in the intestine.'
      }
    },
    {
      id: 'p-cotransport',
      type: 'paragraph',
      data: {
        text: 'Co-transport (also called secondary active transport) couples the movement of one substance down its gradient to the uphill movement of another. No direct ATP hydrolysis is involved, but ATP was used earlier to establish the gradient for the first substance. In the intestine, glucose is absorbed by an apical Na⁺-glucose cotransporter: Na⁺ enters down its concentration gradient (maintained by the Na⁺/K⁺ pump), and this movement powers glucose uptake against its gradient. The same carrier protein binds both Na⁺ and glucose, and both move into the cell together. This is rapid and highly efficient, allowing the intestine to absorb glucose from meals. Symport (both substances move same direction) and antiport (opposite directions) are two types of co-transport.'
      }
    },
    {
      id: 'eq-atp-hydrolysis',
      type: 'equation',
      data: {
        html: 'ATP + H₂O → ADP + Pi + energy (≈30.5 kJ/mol at physiological conditions)<br/>Energy drives active transport against concentration gradients.'
      }
    },
    {
      id: 'h-endocytosis-exocytosis',
      type: 'heading',
      data: {
        text: 'Endocytosis and Exocytosis',
        level: 2
      }
    },
    {
      id: 'p-endocytosis',
      type: 'paragraph',
      data: {
        text: 'Endocytosis is the internalisation of materials by the cell membrane surrounding them and enclosing them in a vesicle. Receptor-mediated endocytosis begins with ligand (e.g. hormone, antibody, LDL) binding to specific receptors on the cell surface. The membrane invaginates (folds inward) around the bound material, forming a coated pit (lined with coat protein clathrin). The pit deepens into a coated vesicle, which pinches off and enters the cell. The vesicle then uncoats (loses clathrin), fusing with early endosomes for sorting. Materials can be recycled (receptors returned to the membrane), degraded (proteins sent to lysosomes), or transcytosed (transported across the cell). This process is highly selective, allowing cells to take up specific molecules in large amounts. Phagocytosis is a form of endocytosis where cells engulf large particles (bacteria, dead cells) in vacuoles; macrophages and neutrophils are professional phagocytes. Pinocytosis is the uptake of small amounts of liquid and dissolved solutes in tiny vesicles.'
      }
    },
    {
      id: 'p-exocytosis',
      type: 'paragraph',
      data: {
        text: 'Exocytosis is the expulsion of material from the cell via fusion of vesicles with the cell membrane. Constitutive exocytosis continuously delivers membrane and secretory proteins to the cell surface (e.g. during cell growth). Regulated exocytosis releases material in response to signals: neurotransmitter release at synapses, hormone secretion, and enzyme release from pancreatic acinar cells are all regulated exocytosis. The process begins in the ER, where proteins are synthesised. Secretory proteins are packaged into COPII-coated vesicles, transported to the Golgi apparatus, modified, and re-packaged into secretory vesicles. Upon signal (e.g. Ca²⁺ influx at nerve terminals), these vesicles fuse with the plasma membrane, releasing their contents. The SNARE proteins mediate the fusion: v-SNAREs on vesicles bind t-SNAREs on the target membrane, pulling them together. Exocytosis is ATP-dependent and highly regulated.'
      }
    },
    {
      id: 'table-transport-types',
      type: 'comparisonTable',
      data: {
        headers: ['Transport Type', 'Gradient', 'Energy (ATP)', 'Protein Required', 'Example', 'Rate Control'],
        rows: [
          ['Diffusion', 'Down (high→low)', 'No', 'No (lipid soluble)', 'O₂, CO₂', 'Concentration gradient'],
          ['Facilitated diffusion', 'Down (high→low)', 'No', 'Yes (channel/carrier)', 'Glucose (GLUT4), ions', 'Protein availability (saturation)'],
          ['Osmosis', 'Down (high→low Ψ)', 'No', 'Aquaporins (water channels)', 'Water', 'Water potential gradient'],
          ['Active transport', 'Up (low→high)', 'Yes', 'Yes (ATPase)', 'Na⁺/K⁺ pump, Ca²⁺ pump', 'ATP availability, signal'],
          ['Co-transport', 'One up, one down', 'Indirect (ATP establishes gradient)', 'Yes (dual carrier)', 'Na⁺-glucose cotransporter', 'Gradient of first substance'],
          ['Endocytosis', 'N/A (bulk)', 'Yes', 'Yes (clathrin, SNAREs)', 'LDL, antibodies, bacteria', 'Signal (receptors, particles)'],
          ['Exocytosis', 'N/A (bulk)', 'Yes', 'Yes (SNAREs)', 'Neurotransmitters, hormones', 'Signal (Ca²⁺, hormones)']
        ],
        caption: 'Summary of membrane transport mechanisms'
      }
    },
    {
      id: 'callout-worked-na-pump',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Na⁺/K⁺ Pump Mechanism',
        text: 'Pump binds 3 Na⁺ inside + 1 ATP → ATP hydrolysed → ADP + Pi released, pump changes shape → 3 Na⁺ extruded. Pump then binds 2 K⁺ outside → K⁺ enters cell, pump resets. Net: 3 Na⁺ out, 2 K⁺ in, per ATP. This maintains high [K⁺] inside (~140 mM) and low [Na⁺] inside (~10 mM) crucial for excitability.'
      }
    },
    {
      id: 'callout-tip-glucose',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Glucose Needs a Transporter',
        text: 'Glucose is polar and large (6 carbons, many −OH groups). It cannot dissolve in lipids. But cells need glucose inside. Solution: GLUT1-GLUT4 glucose transporters. Without them, glucose cannot cross the membrane. That\'s why glucose transport is selective (uses specific transporters) and can be regulated (GLUT4 translocation by insulin).'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does active transport require ATP while facilitated diffusion does not? Explain the thermodynamic principle: active transport moves substances against their electrochemical gradient (increasing order), requiring energy input from ATP hydrolysis.',
        apply: 'The Na⁺/K⁺ pump transports 3 Na⁺ out and 2 K⁺ in per ATP hydrolysed. If a neuron hydrolyses 70 ATP molecules per second to maintain its resting potential, calculate the net charge movement per second and explain how this contributes to the negative resting membrane potential.',
        analyze: 'Compare co-transport, active transport, and facilitated diffusion in the absorption of glucose from the small intestine. Explain why co-transport of glucose with Na⁺ is necessary even when the glucose concentration inside the cell is lower than in the lumen.',
        evaluate: 'Evaluate the importance of the Na⁺/K⁺ ATPase pump for cell survival. Consider its role in maintaining osmotic balance, resting membrane potential, and secondary active transport, and estimate what proportion of a cell\'s energy budget it consumes.',
      },
      terms: [],
    },
    {
      id: 'checklist-transport',
      type: 'checklist',
      data: {
        items: [
          { text: 'Diffusion: passive, concentration gradient, no protein needed for lipid-soluble substances', checked: false },
          { text: 'Facilitated diffusion: passive, down gradient, requires channel or carrier protein', checked: false },
          { text: 'Active transport: against gradient, requires ATP and carrier protein', checked: false },
          { text: 'Na⁺/K⁺ pump: active transport, 3 Na⁺ out and 2 K⁺ in per ATP', checked: false },
          { text: 'Endocytosis/exocytosis: bulk transport, requires ATP, SNAREs, signal-dependent', checked: false }
        ]
      }
    },
    {
      id: 'summary-transport',
      type: 'summary',
      data: {
        text: 'Passive transport (diffusion, facilitated diffusion, osmosis) moves substances down concentration gradients without ATP. Active transport moves against gradient, requiring ATP and carrier proteins (Na⁺/K⁺ pump, Ca²⁺ pump, H⁺ pumps). Co-transport couples uphill movement of one substance to downhill movement of another. Endocytosis internalises large particles via vesicles (receptor-mediated, phagocytosis). Exocytosis exports material via vesicle fusion with the membrane, regulated by signals and SNAREs. All transport mechanisms are essential for cellular nutrition, communication, and waste management.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-diffusion',
        prompt: 'Define diffusion. What substances readily diffuse across membranes and why?'
      },
      {
        id: 'cue-2',
        blockId: 'p-facilitated-diffusion',
        prompt: 'Explain facilitated diffusion. Distinguish between carrier and channel proteins.'
      },
      {
        id: 'cue-3',
        blockId: 'p-active-transport-def',
        prompt: 'Define active transport. Explain the Na⁺/K⁺ pump mechanism and its significance.'
      },
      {
        id: 'cue-4',
        blockId: 'p-cotransport',
        prompt: 'How does co-transport couple movement of two substances? Give an example.'
      },
      {
        id: 'cue-5',
        blockId: 'p-endocytosis',
        prompt: 'Describe receptor-mediated endocytosis. How does it differ from phagocytosis?'
      }
    ],
    summaryText: 'Diffusion (passive, no protein, lipid soluble): O₂, CO₂. Facilitated diffusion (passive, protein, down gradient): glucose, ions. Osmosis (passive, water). Active transport (ATP, against gradient): Na⁺/K⁺ pump (3 Na out, 2 K in), Ca²⁺, H⁺. Co-transport: couples uphill + downhill; Na⁺-glucose in intestine. Endocytosis: vesicles internalise (receptor-mediated, phagocytosis). Exocytosis: vesicles fuse externally, release (regulated by signals, SNAREs).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cell Membrane Transport Mechanisms',
      detail: 'Comprehensive overview of passive and active transport, co-transport, and vesicular transport.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['transport', 'diffusion', 'facilitated-diffusion', 'active-transport', 'endocytosis', 'exocytosis', 'na-pump']
    }
  ]
};
