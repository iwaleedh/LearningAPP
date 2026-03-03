export const note_biology_4_5_10 = {
  blocks: [
    {
      id: 'obj-rubisco',
      type: 'objective',
      data: {
        text: 'Understand RuBisCO structure and kinetics, its role in carbon fixation, photorespiration, and plant adaptations (C3, C4, CAM) to overcome RuBisCO limitations.',
      },
    },
    {
      id: 'h-rubisco-intro',
      type: 'heading',
      data: {
        text: 'RuBisCO: The Most Abundant Enzyme',
        level: 2,
      },
    },
    {
      id: 'p-rubisco-intro',
      type: 'paragraph',
      data: {
        text: 'Ribulose bisphosphate carboxylase-oxygenase (RuBisCO) is the enzyme that catalyses the first committed step of the Calvin cycle: the carboxylation of ribulose-1,5-bisphosphate (RuBP) by CO₂. It is the most abundant protein on Earth, comprising up to 50% of soluble protein in leaves. Despite its abundance, RuBisCO is catalytically slow and suffers from a fundamental limitation: it cannot distinguish efficiently between CO₂ and O₂.',
      },
    },
    {
      id: 'h-rubisco-structure',
      type: 'heading',
      data: {
        text: 'RuBisCO Structure and Kinetics',
        level: 2,
      },
    },
    {
      id: 'p-rubisco-structure',
      type: 'paragraph',
      data: {
        text: 'RuBisCO is a large enzyme with a molecular mass of ~550 kDa. It is composed of 8 large subunits (55 kDa each) and 8 small subunits (15 kDa each), arranged in a barrel-like structure. The active site is located on each large subunit and catalyses the addition of CO₂ to RuBP. However, RuBisCO has a remarkably slow catalytic rate: it catalyses only ~3 reactions per second under optimal conditions. This is orders of magnitude slower than other enzymes (which typically catalyse 100–10,000 reactions per second).',
      },
    },
    {
      id: 'list-rubisco-kinetics',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Turnover number (kcat): ~3 s⁻¹ (three RuBP molecules carboxylated per second per active site).',
          },
          {
            text: 'Michaelis constant (Km) for CO₂: ~10 μM (quite low, indicating moderate affinity).',
          },
          {
            text: 'Km for O₂: ~200 μM (much higher than for CO₂, so the enzyme discriminates against O₂).',
          },
          {
            text: 'Specificity factor (S): Km(O₂) / Km(CO₂) ≈ 20, meaning RuBisCO is about 20-fold selective for CO₂ over O₂.',
          },
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The RuBisCO Paradox',
        text: 'RuBisCO is the most abundant enzyme on Earth, yet it is slow. This is because plants have invested enormous resources (nitrogen, ATP) to produce vast amounts of RuBisCO to compensate for its low catalytic rate. This strategy reflects the evolutionary importance of photosynthesis: even a slow enzyme is valuable if produced in huge quantities.',
      },
    },
    {
      id: 'h-photorespiration',
      type: 'heading',
      data: {
        text: 'Photorespiration: The Oxygenase Reaction',
        level: 2,
      },
    },
    {
      id: 'p-photorespiration-intro',
      type: 'paragraph',
      data: {
        text: 'Although RuBisCO discriminates in favour of CO₂, its specificity is imperfect. RuBisCO also catalyses an oxygenase reaction: when O₂ concentration is high relative to CO₂, the enzyme catalyses the addition of O₂ to RuBP instead of CO₂. This produces 3-phosphoglycerate (the desired product of carboxylation) and 2-phosphoglycolate, which is subsequently metabolised in a wasteful pathway called photorespiration.',
      },
    },
    {
      id: 'eq-photorespiration',
      type: 'equation',
      data: {
        html: 'RuBP + O<sub>2</sub> → 1 × GP (3C) + 1 × 2-phosphoglycolate (2C)',
        caption: 'Oxygenase reaction catalysed by RuBisCO',
      },
    },
    {
      id: 'p-photorespiration-cost',
      type: 'paragraph',
      data: {
        text: 'Photorespiration is costly. The 2-phosphoglycolate is dephosphorylated to glycolate and is subsequently metabolised in the peroxisome and mitochondrion. This metabolism consumes ATP and produces CO₂ without generating any useful ATP or reducing power for the cell. Photorespiration can release up to 50% of the CO₂ that was just fixed by RuBisCO—a dramatic waste of energy. The rate of photorespiration is proportional to the O₂/CO₂ ratio; in warm conditions or dry conditions (when stomata close and internal [CO₂] drops), photorespiration becomes significant.',
      },
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Evolutionary Constraint',
        text: 'RuBisCO\'s oxygenase activity is an evolutionary accident: the enzyme evolved when atmospheric O₂ was lower than today (before the Great Oxidation Event). Modern plants are stuck with this imperfect enzyme. Despite 3+ billion years of evolution, no organism has evolved a RuBisCO that completely avoids the oxygenase reaction.',
      },
    },
    {
      id: 'h-c3-plants',
      type: 'heading',
      data: {
        text: 'C3 Plants: Standard Photosynthesis',
        level: 2,
      },
    },
    {
      id: 'p-c3-intro',
      type: 'paragraph',
      data: {
        text: 'C3 plants (like wheat, rice, and most herbaceous plants) use only the standard Calvin cycle for CO₂ fixation. RuBisCO directly catalyses carboxylation of RuBP, producing 3-phosphoglycerate (3C), the first stable product—hence the name "C3." These plants suffer from significant photorespiration, especially at high temperatures or low CO₂. However, the C3 pathway is energetically efficient when photorespiration is minimised (cool, moist conditions).',
      },
    },
    {
      id: 'h-c4-plants',
      type: 'heading',
      data: {
        text: 'C4 Plants: CO₂ Concentration Mechanism',
        level: 2,
      },
    },
    {
      id: 'p-c4-intro',
      type: 'paragraph',
      data: {
        text: 'C4 plants (maize, sorghum, sugarcane) have evolved a two-step CO₂ fixation mechanism. First, CO₂ is fixed by the enzyme phosphoenolpyruvate carboxylase (PEP carboxylase) in mesophyll cells, producing oxaloacetate (4C), hence "C4." PEP carboxylase has high CO₂ affinity and does not catalyse an oxygenase reaction. Oxaloacetate is rapidly converted to malate and transported to bundle sheath cells. In bundle sheath cells, malate is decarboxylated, releasing CO₂ at high concentration around RuBisCO. This high [CO₂] suppresses photorespiration and makes RuBisCO highly efficient. The released pyruvate returns to mesophyll cells where it is regenerated to PEP using ATP.',
      },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Kranz Anatomy',
        text: 'C4 plants have distinctive leaf anatomy: concentric rings of mesophyll cells surrounding vascular bundles surrounded by bundle sheath cells. This "Kranz anatomy" (from German Kranz = wreath) spatially separates the initial CO₂ fixation from the Calvin cycle, enabling the CO₂ concentration mechanism.',
      },
    },
    {
      id: 'p-c4-cost-benefit',
      type: 'paragraph',
      data: {
        text: 'C4 photosynthesis requires additional ATP to regenerate PEP from pyruvate (5 ATP per 3 CO₂ vs 9 ATP in C3). However, by eliminating photorespiration, C4 plants gain enormous efficiency in warm, dry, high-light environments. C4 plants achieve photosynthetic rates 2–3 times higher than C3 plants at high temperatures and high light, making them dominant in tropical savannas and agricultural systems.',
      },
    },
    {
      id: 'h-cam-plants',
      type: 'heading',
      data: {
        text: 'CAM Plants: Temporal CO₂ Separation',
        level: 2,
      },
    },
    {
      id: 'p-cam-intro',
      type: 'paragraph',
      data: {
        text: 'CAM (Crassulacean Acid Metabolism) plants (cacti, agave, pineapple) live in dry environments and face a dilemma: opening stomata for CO₂ uptake causes water loss; closing stomata prevents CO₂ uptake. CAM plants solve this by separating CO₂ fixation in time rather than space. At night, when transpiration is minimal, CAM plants open stomata and fix CO₂ via PEP carboxylase, producing malate, which accumulates as malic acid in vacuoles. During the day, stomata remain closed (preventing water loss), and stored malate is decarboxylated, releasing CO₂ for the Calvin cycle at high concentration. This temporal separation means CAM plants fix CO₂ at night and use it for photosynthesis during the day.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'CAM Advantage in Deserts',
        text: 'CAM plants can survive on extremely limited water because they close stomata during the day when transpiration is highest. They achieve net CO₂ fixation using minimal water, making them far more efficient than C3 or C4 plants in arid ecosystems.',
      },
    },
    {
      id: 'table-c3-c4-cam',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'C3 Plants', 'C4 Plants', 'CAM Plants'],
        rows: [
          ['First CO₂ fixation enzyme', 'RuBisCO', 'PEP carboxylase', 'PEP carboxylase'],
          ['First stable product', '3-phosphoglycerate (3C)', 'Oxaloacetate (4C)', 'Oxaloacetate (4C)'],
          ['Carboxylation site', 'Leaf mesophyll', 'Leaf mesophyll', 'Leaf cells (night)'],
          ['Calvin cycle site', 'Leaf mesophyll', 'Bundle sheath cells', 'Leaf cells (day)'],
          ['Separation strategy', 'None (co-location)', 'Spatial (Kranz anatomy)', 'Temporal (day/night)'],
          ['Photorespiration rate', 'High at 25–35 °C', 'Minimal', 'Minimal (night fixation)'],
          ['Optimal environment', 'Cool, temperate, moist', 'Hot, dry, high light', 'Desert, arid (extreme drought)'],
          ['ATP cost', '9 ATP per 3 CO₂', '14 ATP per 3 CO₂', 'High (night CO₂ fixation + storage)'],
          ['Examples', 'Wheat, rice, lettuce', 'Maize, sugarcane, sorghum', 'Cactus, agave, pineapple'],
        ],
        caption: 'Comparison of C3, C4, and CAM photosynthesis',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'RuBisCO is the most abundant enzyme on Earth but catalyses only ~3 reactions/s due to slow kinetics and imperfect substrate discrimination. It catalyses both carboxylation (CO₂ + RuBP → GP) and oxygenation (O₂ + RuBP → GP + glycolate), the latter triggering wasteful photorespiration. C3 plants use direct Calvin cycle fixation; photorespiration is significant in hot, dry conditions. C4 plants use PEP carboxylase for initial CO₂ fixation, concentrating CO₂ around RuBisCO in bundle sheath cells via Kranz anatomy, minimising photorespiration. CAM plants temporally separate CO₂ fixation (night, via PEP carboxylase) and Calvin cycle (day, using stored malate).',
        apply: 'A C3 plant experiences drought stress: stomata close, internal [CO₂] drops to 100 ppm, and [O₂] remains at 21%. Calculate the O₂/CO₂ ratio and predict the photorespiration rate relative to photosynthesis.',
        analyze: 'Compare the energy cost of C3 vs C4 vs CAM photosynthesis in hot, dry environments. Which is most efficient and why?',
        evaluate: 'Despite billions of years of evolution, no organism has evolved a perfect RuBisCO with zero oxygenase activity. Discuss whether this represents an unsolvable biological problem or whether evolution has simply not had sufficient time/selection pressure to solve it.',
      },
      terms: [],
    },
    {
      id: 'checklist-rubisco',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe RuBisCO structure and explain why it is so abundant despite being slow', checked: false },
          { text: 'I understand RuBisCO kinetics: Km, kcat, and substrate specificity', checked: false },
          { text: 'I can explain the oxygenase reaction and photorespiration', checked: false },
          { text: 'I understand how photorespiration is wasteful and when it predominates', checked: false },
          { text: 'I can describe C3 photosynthesis and its limitations', checked: false },
          { text: 'I can explain C4 photosynthesis, PEP carboxylase, and Kranz anatomy', checked: false },
          { text: 'I can explain CAM photosynthesis and its advantages in deserts', checked: false },
        ],
      },
    },
    {
      id: 'summary-rubisco',
      type: 'summary',
      data: {
        text: 'RuBisCO is the most abundant enzyme on Earth (~50% leaf protein) but catalyses only ~3 reactions/s. It catalyses carboxylation (RuBP + CO₂ → GP) and oxygenation (RuBP + O₂ → GP + glycolate). Oxygenase reaction triggers photorespiration, a wasteful pathway. C3 plants (wheat, rice) use RuBisCO directly; photorespiration high in heat/drought. C4 plants (maize, sugarcane) use PEP carboxylase for initial fixation, concentrating CO₂ in bundle sheath cells via Kranz anatomy; photorespiration minimal, efficient in hot environments. CAM plants (cacti) fix CO₂ at night via PEP carboxylase, store malate, decarboxylate during day with stomata closed; highly water-efficient.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-rubisco-intro',
        prompt: 'What is RuBisCO? Why is it the most abundant enzyme on Earth despite being slow?',
      },
      {
        id: 'cue-2',
        blockId: 'eq-photorespiration',
        prompt: 'Write the equation for the oxygenase reaction catalysed by RuBisCO. What is photorespiration and why is it wasteful?',
      },
      {
        id: 'cue-3',
        blockId: 'h-c4-plants',
        prompt: 'Describe C4 photosynthesis. How does PEP carboxylase differ from RuBisCO?',
      },
      {
        id: 'cue-4',
        blockId: 'callout-key2',
        prompt: 'What is Kranz anatomy and why is it important for C4 plants?',
      },
      {
        id: 'cue-5',
        blockId: 'h-cam-plants',
        prompt: 'Explain how CAM plants separate CO₂ fixation and the Calvin cycle in time rather than space.',
      },
    ],
    summaryText: 'RuBisCO catalyses CO₂ fixation (RuBP + CO₂ → 3-PG) and oxygenation (RuBP + O₂ → 3-PG + glycolate). Oxygenase reaction triggers photorespiration, wasteful especially at high O₂/CO₂ ratios. C3 plants use RuBisCO directly; photorespiration significant. C4 plants use PEP carboxylase initially, concentrate CO₂ around RuBisCO in bundle sheath cells (Kranz anatomy), suppress photorespiration, thrive in heat. CAM plants (deserts) fix CO₂ at night via PEP carboxylase → malate storage; Calvin cycle during day with closed stomata; highly water-efficient.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'RuBisCO Catalysis Rate',
      detail: 'RuBisCO\'s slow catalytic rate (~3 s⁻¹) is well-established. Modern X-ray crystallography reveals the active site structure and explains the kinetic limitations.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['enzyme kinetics', 'photosynthesis'],
    },
    {
      id: 'ev-2',
      title: 'C4 Plant Evolution',
      detail: 'C4 photosynthesis evolved independently at least 60 times in different plant lineages, indicating strong selective pressure in hot, dry environments.',
      year: '2023',
      source: 'Plant evolution and ecology literature',
      tags: ['evolution', 'adaptation'],
    },
  ],
};
