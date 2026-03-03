export const note_biology_1_1_5 = {
  blocks: [
    {
      id: 'obj-haem',
      type: 'objective',
      data: {
        text: 'Understand haemoglobin structure, oxygen binding, the oxyhaemoglobin dissociation curve, the Bohr effect, and cooperative binding in oxygen transport.'
      }
    },
    {
      id: 'h-haem-struct',
      type: 'heading',
      data: {
        text: 'Haemoglobin Structure and Haem Groups',
        level: 2
      }
    },
    {
      id: 'p-haem-quat',
      type: 'paragraph',
      data: {
        text: 'Haemoglobin is a quaternary protein consisting of four polypeptide subunits arranged in a tetrameric structure: two α (alpha) chains and two β (beta) chains. Each subunit is a globin chain that encloses a haem group. A haem group is a prosthetic group consisting of an iron-protoporphyrin IX ring with a central Fe²⁺ (ferrous iron) ion. The Fe²⁺ is coordinated to the nitrogen atoms of the porphyrin ring and to a histidine residue of the globin chain (at the proximal position). The iron can reversibly bind oxygen at a site on the distal side, forming oxyhaemoglobin. The quaternary structure is stabilised by ionic interactions (salt bridges) and hydrogen bonds between the subunits. Haemoglobin exhibits cooperativity: binding of oxygen to one subunit increases the affinity of the other subunits for oxygen, due to conformational changes that propagate through the tetrameric structure.'
      }
    },
    {
      id: 'callout-key-haem',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Haemoglobin Cooperativity',
        text: 'Haemoglobin shows positive cooperativity: binding O₂ to one subunit increases O₂ affinity in the other three. This produces a sigmoidal (S-shaped) dissociation curve, enabling efficient loading in lungs and unloading in tissues.'
      }
    },
    {
      id: 'h-oxyhaem-curve',
      type: 'heading',
      data: {
        text: 'Oxyhaemoglobin Dissociation Curve',
        level: 2
      }
    },
    {
      id: 'p-oxyhaem-curve',
      type: 'paragraph',
      data: {
        text: 'The oxyhaemoglobin dissociation curve plots oxygen saturation (%) of haemoglobin against oxygen partial pressure (pO₂, measured in kPa or mmHg). The curve is sigmoidal (S-shaped) due to cooperativity. At high pO₂ (in the lungs, ~13.3 kPa), haemoglobin is nearly fully saturated (~98%), loading oxygen efficiently. At low pO₂ (in resting tissues, ~5.3 kPa), saturation is lower (~75%), allowing oxygen unloading. The steep middle section (7–10 kPa) represents tissue pO₂ where small changes in oxygen pressure cause large changes in saturation, maximising oxygen delivery. This sigmoidal shape is unique to cooperative binding; a non-cooperative protein (like myoglobin) would show a hyperbolic curve, with poor unloading efficiency at physiological pO₂ values.'
      }
    },
    {
      id: 'p-bohr-effect',
      type: 'paragraph',
      data: {
        text: 'The Bohr effect describes how changes in CO₂ concentration and pH shift the oxyhaemoglobin dissociation curve to the right (or left). In active tissues, cellular respiration produces CO₂, which dissolves in blood forming carbonic acid (H₂CO₃), lowering pH. Additionally, metabolic activity increases temperature and produces lactic acid, further lowering pH. Low pH (high H⁺ concentration) and high CO₂ decrease haemoglobin\'s oxygen affinity, shifting the curve right. This rightward shift means that at any given pO₂, haemoglobin saturation is lower, promoting oxygen unloading in metabolically active tissues. In the lungs, where respiration is minimal, pH is higher and CO₂ is low, shifting the curve left and promoting oxygen loading. This physiological adaptation ensures oxygen is unloaded where it is needed most.'
      }
    },
    {
      id: 'p-fetal-haem',
      type: 'paragraph',
      data: {
        text: 'Fetal haemoglobin (HbF) differs from adult haemoglobin (HbA) in its β-chain subunits: HbF has two γ (gamma) chains instead of two β chains. The different primary structure gives HbF a higher oxygen affinity than HbA at any given pO₂. This is advantageous in the placenta: oxygen diffuses from maternal HbA in the placental blood across the placental barrier to fetal HbF. The higher affinity of HbF ensures oxygen flows from mother to fetus even when pO₂ is similar on both sides. After birth, HbF is gradually replaced by HbA over the first few months of life. In certain diseases (e.g. sickle cell anaemia, β-thalassaemia), HbF production can be therapeutically increased to compensate for abnormal HbA.'
      }
    },
    {
      id: 'h-myoglobin',
      type: 'heading',
      data: {
        text: 'Myoglobin: A Hyperbolic Binding Curve',
        level: 2
      }
    },
    {
      id: 'p-myoglobin',
      type: 'paragraph',
      data: {
        text: 'Myoglobin is a monomeric protein (single polypeptide chain) found in skeletal and cardiac muscle, with one haem group similar to haemoglobin. Because it is a monomer, myoglobin lacks cooperativity and shows hyperbolic oxygen binding (not sigmoidal). At low pO₂, myoglobin has higher affinity for oxygen than haemoglobin, allowing oxygen transfer from oxyhaemoglobin in the blood to myoglobin in muscle cells. Once bound, myoglobin oxygen is released only at very low pO₂ (during intense muscle activity), serving as a local oxygen reservoir for the mitochondria. Myoglobin\'s high affinity and hyperbolic curve make it excellent for oxygen storage but poor for oxygen transport; its physiological role is entirely different from haemoglobin\'s. The hyperbolic curve means myoglobin cannot efficiently unload oxygen at physiological pO₂ unless oxygen becomes extremely scarce.'
      }
    },
    {
      id: 'table-haem-myoglobin',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Haemoglobin', 'Myoglobin'],
        rows: [
          ['Structure', 'Quaternary (4 subunits: 2α, 2β)', 'Monomeric (1 subunit)'],
          ['Haem groups', '4 (one per subunit)', '1'],
          ['Cooperativity', 'Yes (positive)', 'No'],
          ['Binding curve', 'Sigmoidal (S-shaped)', 'Hyperbolic'],
          ['Oxygen affinity', 'Lower at low pO₂', 'Higher at low pO₂'],
          ['pO₂ for 50% saturation', '~3.6 kPa', '~0.3 kPa (much lower)'],
          ['Function', 'Transport O₂ from lungs to tissues', 'Storage of O₂ in muscle; releases at very low pO₂'],
          ['Location', 'Red blood cells', 'Muscle cells (skeletal, cardiac)']
        ],
        caption: 'Haemoglobin vs Myoglobin'
      }
    },
    {
      id: 'h-oxygen-transport',
      type: 'heading',
      data: {
        text: 'Oxygen Loading and Unloading',
        level: 2
      }
    },
    {
      id: 'p-oxygen-loading',
      type: 'paragraph',
      data: {
        text: 'In the lungs, alveolar air has pO₂ of ~13.3 kPa. Deoxygenated blood entering the lungs has pO₂ of ~5.3 kPa. The oxygen pressure gradient causes oxygen to dissolve in the blood plasma and bind to haemoglobin. Due to cooperativity, binding the first oxygen molecule increases affinity, facilitating rapid loading of the remaining three oxygen-binding sites. High pH and low CO₂ in the lungs further promote oxygen loading (left shift of the dissociation curve). By the time blood leaves the lungs, haemoglobin is ~98% saturated. Each litre of blood carries approximately 200 mL of oxygen (mostly bound to haemoglobin; a tiny amount dissolved in plasma).'
      }
    },
    {
      id: 'p-oxygen-unloading',
      type: 'paragraph',
      data: {
        text: 'In resting tissues, metabolic activity produces CO₂, lactic acid, and heat, lowering pH and increasing temperature. The Bohr effect shifts the haemoglobin dissociation curve to the right, decreasing oxygen affinity. Additionally, low pO₂ in the tissue (~5.3 kPa in resting muscle, much lower in active muscle) promotes oxygen unloading from haemoglobin. Oxygen diffuses from the blood into cells, where it is taken up by myoglobin (in muscle) or used directly in mitochondrial aerobic respiration. During intense exercise, tissue pO₂ can fall below 1 kPa, causing myoglobin oxygen release and anaerobic respiration. The Bohr effect is crucial: metabolically active tissues produce the exact conditions (low pH, high CO₂) that promote oxygen unloading, ensuring oxygen reaches tissues that need it most.'
      }
    },
    {
      id: 'callout-worked-bohr',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'The Bohr Effect in Action',
        text: 'In working muscle: respiration produces CO₂ (↓pH), lactic acid (↓pH), heat (↑T). These lower O₂ affinity, shifting the curve right. Result: at same pO₂, haemoglobin releases more O₂ to the tissue. In lungs: CO₂ is blown off (↑pH), no lactic acid (↑pH), lower temperature (↓T). These raise O₂ affinity, shifting curve left. Result: haemoglobin loads O₂ efficiently. Perfect adaptation!'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The oxyhaemoglobin dissociation curve is sigmoidal (S-shaped) rather than hyperbolic because haemoglobin exhibits cooperative binding: when one oxygen molecule binds to a subunit, it increases the oxygen affinity of the other three subunits. This positive cooperativity ensures efficient loading in the lungs (high pO₂) and unloading in tissues (low pO₂).',
        apply: 'At an alveolar pO₂ of 13 kPa, haemoglobin is 97% saturated. At exercising muscle tissue where pO₂ = 4 kPa and pH = 7.2, saturation drops to 50%. Calculate the percentage of oxygen unloaded per 100 cm³ of blood.',
        analyze: 'Compare the oxygen dissociation curves of adult haemoglobin, fetal haemoglobin, and myoglobin. Explain how the positions of the curves relate to the function of each protein.',
        evaluate: 'Evaluate the Bohr effect as an adaptation for efficient oxygen delivery during exercise. How does the simultaneous increase in CO₂ and decrease in pH enhance the unloading of oxygen precisely where it is needed most?'
      },
      terms: []
    },
    {
      id: 'checklist-haem',
      type: 'checklist',
      data: {
        items: [
          { text: 'Haemoglobin is quaternary (4 subunits), each with a haem group containing Fe²⁺', checked: false },
          { text: 'Cooperativity in haemoglobin produces a sigmoidal dissociation curve', checked: false },
          { text: 'The Bohr effect: low pH and high CO₂ decrease O₂ affinity, promoting unloading', checked: false },
          { text: 'Fetal haemoglobin has higher O₂ affinity than adult haemoglobin', checked: false },
          { text: 'Myoglobin is monomeric, has hyperbolic binding, and serves as a muscle O₂ reservoir', checked: false }
        ]
      }
    },
    {
      id: 'summary-haem',
      type: 'summary',
      data: {
        text: 'Haemoglobin (quaternary, 4 haem groups) exhibits positive cooperativity, producing a sigmoidal dissociation curve that enables efficient oxygen loading in lungs and unloading in tissues. The Bohr effect (low pH, high CO₂ decrease affinity) ensures oxygen is unloaded where it is needed most. Fetal haemoglobin has higher affinity for oxygen uptake across the placenta. Myoglobin (monomeric, 1 haem group) shows hyperbolic binding and serves as an oxygen reservoir in muscle, releasing oxygen only at very low pO₂.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-haem-quat',
        prompt: 'Describe the quaternary structure of haemoglobin. What is a haem group and how does oxygen bind?'
      },
      {
        id: 'cue-2',
        blockId: 'p-oxyhaem-curve',
        prompt: 'Explain the sigmoidal shape of the oxyhaemoglobin dissociation curve and its advantage over a hyperbolic curve.'
      },
      {
        id: 'cue-3',
        blockId: 'p-bohr-effect',
        prompt: 'What is the Bohr effect? How do low pH and high CO₂ affect oxygen affinity?'
      },
      {
        id: 'cue-4',
        blockId: 'p-fetal-haem',
        prompt: 'Why does fetal haemoglobin have higher oxygen affinity than adult haemoglobin?'
      },
      {
        id: 'cue-5',
        blockId: 'p-myoglobin',
        prompt: 'Compare myoglobin to haemoglobin. Why is myoglobin\'s hyperbolic curve suitable for oxygen storage?'
      }
    ],
    summaryText: 'Haemoglobin: quaternary (4 subunits, 4 haem groups, Fe²⁺), cooperative binding → sigmoidal curve. Loads O₂ in lungs (high pH, low CO₂, high pO₂), unloads in tissues (low pH, high CO₂, low pO₂). Bohr effect: ↓pH/↑CO₂ shift curve right, promoting unloading. Fetal Hb: higher affinity for placental O₂ transfer. Myoglobin: monomeric, hyperbolic curve, O₂ reservoir in muscle, releases only at very low pO₂.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Haemoglobin and Oxygen Transport',
      detail: 'Structure-function relationship of haemoglobin, cooperativity, Bohr effect, and comparison with myoglobin.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['haemoglobin', 'oxygen-transport', 'dissociation-curve', 'bohr-effect', 'cooperativity', 'myoglobin']
    }
  ]
};
