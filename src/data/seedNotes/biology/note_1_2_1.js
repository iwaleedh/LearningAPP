export const note_biology_1_2_1 = {
  blocks: [
    {
      id: 'obj-membrane',
      type: 'objective',
      data: {
        text: 'Understand the fluid mosaic model of cell membrane structure, including components and their functions.'
      }
    },
    {
      id: 'h-fluid-mosaic',
      type: 'heading',
      data: {
        text: 'Fluid Mosaic Model: Overview',
        level: 2
      }
    },
    {
      id: 'p-fluid-mosaic',
      type: 'paragraph',
      data: {
        text: 'The fluid mosaic model, proposed by Singer and Nicolson (1972), describes the cell membrane as a dynamic, flexible structure composed of a phospholipid bilayer interspersed with proteins, cholesterol, and carbohydrates. The model is "fluid" because the components (especially lipids) are not static but move laterally within the membrane, allowing flexibility and accommodation of changing cellular needs. The model is "mosaic" because many different types of molecules are arranged in a complex, heterogeneous pattern. The phospholipid bilayer is the fundamental framework: hydrophilic phosphate heads face the aqueous environment (inside and outside the cell), while hydrophobic fatty acid tails cluster in the interior, away from water. This structure is self-assembling and forms spontaneously in aqueous solution. The bilayer is selectively permeable, allowing water and small ions to cross slowly; larger or hydrophobic molecules require transport proteins.'
      }
    },
    {
      id: 'callout-key-fluid-mosaic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fluid Mosaic Model',
        text: '"Fluid": lipids move laterally, membrane is flexible. "Mosaic": many different molecules (proteins, cholesterol, glycolipids) arranged heterogeneously. Phospholipid bilayer: framework. Proteins: functions. Cholesterol: fluidity regulation. Carbohydrates: recognition.'
      }
    },
    {
      id: 'h-phospholipids',
      type: 'heading',
      data: {
        text: 'Phospholipid Bilayer',
        level: 2
      }
    },
    {
      id: 'p-phospholipid-detail',
      type: 'paragraph',
      data: {
        text: 'The phospholipid bilayer consists of two layers of phospholipid molecules arranged tail-to-tail. Each phospholipid has a polar phosphate-containing head group and two non-polar fatty acid tails. The bilayer is approximately 5–10 nm thick and is transparent to non-polar substances (lipids, oxygen, CO₂) but impermeable to charged ions and large polar molecules (glucose, amino acids, ions). The degree of unsaturation in the fatty acid tails affects bilayer fluidity: saturated fats have straight chains and pack tightly, reducing fluidity and increasing rigidity; unsaturated fats have kinks that prevent tight packing, increasing fluidity. Membrane fluidity is essential for protein function and cellular processes; too rigid and proteins cannot move; too fluid and the membrane becomes unstable. Temperature also affects fluidity: cold temperatures decrease fluidity (membrane "freezes"), while heat increases it. Organisms regulate membrane composition (ratio of saturated to unsaturated fats, cholesterol content) to maintain optimal fluidity across temperature ranges.'
      }
    },
    {
      id: 'h-proteins',
      type: 'heading',
      data: {
        text: 'Membrane Proteins',
        level: 2
      }
    },
    {
      id: 'p-protein-types',
      type: 'paragraph',
      data: {
        text: 'Membrane proteins are functionally diverse and classified by their location and orientation. Integral proteins (transmembrane proteins) span the entire bilayer, with hydrophobic regions embedded in the lipid core and hydrophilic regions exposed to the aqueous environment. These proteins have various functions: channel proteins form aqueous pores (e.g. aquaporins for water, ion channels for sodium), allowing polar molecules and ions to cross without touching lipids; carrier proteins bind and transport specific molecules against concentration gradients (active transport); receptor proteins bind signalling molecules (hormones, neurotransmitters), triggering cellular responses. Peripheral proteins are located on the surface (inside or outside), attached to integral proteins or directly to lipids via non-covalent interactions. Peripheral proteins often function in cytoskeletal anchoring or as enzymes. Glycoproteins are proteins covalently bonded to carbohydrates on their external surface; the carbohydrate moiety (oligosaccharide) functions in cell recognition and immune responses.'
      }
    },
    {
      id: 'p-protein-distribution',
      type: 'paragraph',
      data: {
        text: 'Proteins are asymmetrically distributed across the bilayer, reflecting their specific functions. Proteins on the external surface are involved in cell recognition and signalling; proteins on the internal surface interact with the cytoskeleton. The outer half of the bilayer contains the carbohydrate portions of glycoproteins and glycolipids, forming the glycocalyx—a carbohydrate-rich layer that is important for cell-cell recognition, immunity, and blood group antigens. Protein content varies by cell type and membrane: red blood cell membranes are ~50% protein by mass; myelin (insulating nerve sheath) is ~80% lipid and only ~20% protein. The ratio of protein to lipid affects membrane function; high protein content enables rapid transport and signalling, while high lipid content provides structural support.'
      }
    },
    {
      id: 'h-cholesterol-carbs',
      type: 'heading',
      data: {
        text: 'Cholesterol and Carbohydrates',
        level: 2
      }
    },
    {
      id: 'p-cholesterol-membrane',
      type: 'paragraph',
      data: {
        text: 'Cholesterol is a lipid found in animal cell membranes (absent in plants and bacteria). Its steroid ring structure allows it to insert between phospholipids, with its hydroxyl group (−OH) hydrogen bonding to phospholipid heads and its ring system interacting with fatty acid tails. Cholesterol acts as a "fluidity buffer": at high temperatures, it restricts phospholipid movement, maintaining membrane integrity and preventing excessive fluidity; at low temperatures, its presence prevents tight packing, maintaining fluidity and preventing membrane rigidity. This bidirectional effect is crucial for organisms facing temperature fluctuations. Cholesterol content (~20–25% of membrane lipids in animal cells) is dynamically regulated; cells can adjust cholesterol levels in response to temperature or metabolic needs. Additionally, cholesterol is essential for raft formation—specialised membrane microdomains enriched in cholesterol and sphingolipids that serve as platforms for signalling and protein trafficking.'
      }
    },
    {
      id: 'p-carbohydrates-membrane',
      type: 'paragraph',
      data: {
        text: 'Carbohydrates in membranes (as glycoproteins and glycolipids) are always on the external surface, forming part of the glycocalyx. Their functions include: (1) Cell recognition: the specific oligosaccharide sequences on glycoproteins are "identity cards" for the cell; immune cells recognise these patterns, distinguishing self from non-self. (2) Blood groups: ABO blood group antigens are oligosaccharides on red blood cell glycoproteins; AB+ individuals have both A and B antigens. (3) Fertilisation: sperm recognise eggs via specific glycoprotein interactions. (4) Infection: viruses and bacteria often attach to specific glycoproteins on host cells; HIV binds to CD4 and CCR5 glycoproteins on immune cells. (5) Inflammation: damaged cells express "eat me" signals (phosphatidylserine and specific glycoproteins) recognised by macrophages. The carbohydrate composition is determined genetically and is highly specific to each cell type and individual.'
      }
    },
    {
      id: 'table-membrane-components',
      type: 'comparisonTable',
      data: {
        headers: ['Component', 'Structure', 'Location', 'Function(s)'],
        rows: [
          ['Phospholipid', 'Polar head + 2 non-polar tails', 'Bilayer', 'Framework; selective permeability'],
          ['Cholesterol', 'Steroid ring + −OH group', 'Between phospholipids', 'Fluidity buffer; raft formation'],
          ['Integral protein', 'Transmembrane', 'Span bilayer', 'Transport (channels/carriers); signalling (receptors)'],
          ['Peripheral protein', 'Surface-bound', 'Inside or outside surface', 'Cytoskeletal anchoring; enzymatic'],
          ['Glycoprotein', 'Protein + oligosaccharide', 'External surface', 'Cell recognition; blood groups; pathogen attachment'],
          ['Glycolipid', 'Lipid + carbohydrate', 'External surface (outer layer)', 'Cell recognition; immune responses']
        ],
        caption: 'Membrane components and their functions'
      }
    },
    {
      id: 'callout-worked-fluidity',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Membrane Fluidity Regulation',
        text: 'Cold environment: ↓ temperature → lipids would pack tightly → rigidity. Solution: ↑ unsaturated fats (kinks prevent packing), ↑ cholesterol (prevents tight packing). Result: maintained fluidity. Hot environment: ↑ temperature → lipids move rapidly → fluidity too high. Solution: ↓ unsaturated fats, ↓ cholesterol. Result: maintained optimal fluidity. Bacteria and plants adjust lipid composition seasonally.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is the membrane described as \'fluid\'? Explain how the lateral movement of phospholipids and proteins within the bilayer (demonstrated by FRAP — fluorescence recovery after photobleaching) contributes to membrane function.',
        apply: 'A researcher increases the proportion of unsaturated fatty acids in a membrane at 37°C. Predict and explain the effect on membrane fluidity, permeability to small non-polar molecules, and the rate of vesicle formation.',
        analyze: 'Compare the roles of cholesterol, unsaturated fatty acids, and membrane proteins in regulating membrane fluidity. Which factor is most important at physiological temperature, and why?',
        evaluate: 'Evaluate the fluid mosaic model as a description of membrane structure. What evidence supports it (FRAP, freeze-fracture EM), and what refinements (lipid rafts, membrane asymmetry) have been proposed since Singer and Nicolson (1972)?',
      },
      terms: [],
    },
    {
      id: 'checklist-membrane',
      type: 'checklist',
      data: {
        items: [
          { text: 'Fluid mosaic model: phospholipid bilayer + proteins + cholesterol + carbohydrates', checked: false },
          { text: 'Phospholipids: amphipathic, self-assemble, selectively permeable', checked: false },
          { text: 'Integral proteins: transmembrane, channels/carriers/receptors', checked: false },
          { text: 'Peripheral proteins: surface-bound, cytoskeletal/enzymatic', checked: false },
          { text: 'Cholesterol: fluidity buffer; carbohydrates: cell recognition, immune', checked: false }
        ]
      }
    },
    {
      id: 'summary-membrane',
      type: 'summary',
      data: {
        text: 'The fluid mosaic model describes membranes as dynamic structures: phospholipid bilayer (framework, selective permeability), integral proteins (channels, carriers, receptors), peripheral proteins (cytoskeletal support, enzymes), cholesterol (fluidity regulator), and carbohydrates (recognition, immunity). Unsaturated fats increase fluidity; saturated fats decrease it. Cholesterol acts as a bidirectional fluidity buffer. Glycoproteins and glycolipids mediate cell recognition and immune responses. Membrane composition varies by cell type and is regulated in response to temperature.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-fluid-mosaic',
        prompt: 'Explain the fluid mosaic model. Why is it called "fluid" and "mosaic"?'
      },
      {
        id: 'cue-2',
        blockId: 'p-phospholipid-detail',
        prompt: 'Describe phospholipid bilayer structure. How do saturated and unsaturated fats affect fluidity?'
      },
      {
        id: 'cue-3',
        blockId: 'p-protein-types',
        prompt: 'Distinguish integral and peripheral proteins. Name functions of integral proteins.'
      },
      {
        id: 'cue-4',
        blockId: 'p-cholesterol-membrane',
        prompt: 'How does cholesterol regulate membrane fluidity? Why is this important?'
      },
      {
        id: 'cue-5',
        blockId: 'p-carbohydrates-membrane',
        prompt: 'Where are carbohydrates located in membranes? List four functions of glycoproteins.'
      }
    ],
    summaryText: 'Fluid mosaic model: phospholipid bilayer (framework) + integral proteins (channels/carriers/receptors) + peripheral proteins (support/enzymes) + cholesterol (fluidity buffer) + carbohydrates (recognition). Bilayer: hydrophilic heads out, hydrophobic tails in. Unsaturated fats ↑ fluidity; saturated ↓. Cholesterol buffers fluidity at temperature extremes. Glycoproteins/glycolipids: cell recognition, blood groups, immune responses, pathogen attachment.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cell Membrane Structure: Fluid Mosaic Model',
      detail: 'Comprehensive overview of membrane components and their roles in cell function.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['membrane', 'fluid-mosaic', 'phospholipids', 'proteins', 'cholesterol', 'glycoproteins']
    }
  ]
};
