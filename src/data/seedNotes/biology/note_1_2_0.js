export const note_biology_1_2_0 = {
  blocks: [
    {
      id: 'obj-gas-exchange',
      type: 'objective',
      data: {
        text: 'Understand Fick\'s Law of diffusion, adaptations for efficient gas exchange, and the structure and mechanics of the respiratory system.'
      }
    },
    {
      id: 'h-fick-law',
      type: 'heading',
      data: {
        text: 'Fick\'s Law of Diffusion',
        level: 2
      }
    },
    {
      id: 'p-fick-law',
      type: 'paragraph',
      data: {
        text: 'Fick\'s Law describes the rate of diffusion of a substance across a membrane or interface. The rate of diffusion is proportional to the surface area available for exchange and the concentration difference across the interface, and inversely proportional to the thickness of the diffusion barrier. Mathematically: Rate of diffusion = (Surface area × Concentration difference) / Thickness. For gas exchange: high surface area (large alveolar surface), high concentration difference (low O₂ in blood compared to alveolar air), and thin diffusion barrier (one-cell-thick alveolar epithelium and capillary endothelium) all facilitate rapid oxygen transfer from air to blood. Similarly, CO₂ diffuses from blood (high concentration) to air (low concentration). Fick\'s Law explains why organisms have evolved respiratory surfaces with these characteristics: large alveolar surface (ہ300 m² in human lungs), moist surfaces (facilitated by thin water layer), and extensive perfusion (capillaries surrounding alveoli).'
      }
    },
    {
      id: 'eq-fick-law',
      type: 'equation',
      data: {
        html: 'Rate of diffusion = <span class="nb-frac"><span class="nb-num">Surface area × Concentration difference</span><span class="nb-den">Thickness</span></span>',
        caption: 'Fick\'s Law of diffusion'
      }
    },
    {
      id: 'h-adaptations',
      type: 'heading',
      data: {
        text: 'Adaptations for Efficient Gas Exchange',
        level: 2
      }
    },
    {
      id: 'p-adaptations',
      type: 'paragraph',
      data: {
        text: 'All gas exchange surfaces share common adaptations to maximise the rate of diffusion. (1) Large surface area: alveoli provide ~300 m² in humans; gills in fish have extensive lamellae; insect tracheal systems have blind-ending tracheoles. (2) Thin diffusion barrier: the respiratory epithelium is one cell thick (simple squamous epithelium in alveoli); capillaries are also one cell thick; the distance from air to blood is ~0.5 μm. (3) Moist surface: oxygen and CO₂ must dissolve in water to diffuse across membranes; all respiratory surfaces are kept moist. (4) Ventilation: continuous movement of air/water over the surface maintains a concentration gradient; lungs are ventilated by breathing; gills are ventilated by water movement; insect tracheoles are filled with air. (5) Perfusion: blood flow past the respiratory surface is maintained; haemoglobin transports oxygen away, maintaining a low blood O₂ partial pressure and sustaining the diffusion gradient. These adaptations work together; deficiency in any reduces gas exchange efficiency.'
      }
    },
    {
      id: 'callout-key-adaptations',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Universal Gas Exchange Adaptations',
        text: 'Large surface area (increases contact). Thin barrier (reduces diffusion distance). Moist surface (oxygen dissolves). Ventilation (maintains concentration gradient). Perfusion (removes oxygen, maintains gradient). All respiratory surfaces share these features.'
      }
    },
    {
      id: 'h-lung-structure',
      type: 'heading',
      data: {
        text: 'Lung Structure and Alveoli',
        level: 2
      }
    },
    {
      id: 'p-lung-structure',
      type: 'paragraph',
      data: {
        text: 'The human respiratory system begins at the nose/mouth, where air is filtered, humidified, and warmed. Air flows through the trachea (windpipe), which branches into two primary bronchi (left and right), one for each lung. Each bronchus divides recursively into smaller bronchioles, eventually terminating in alveoli (singular: alveolus). An alveolus is a tiny air sac (~0.1–0.2 mm diameter) surrounded by a capillary network. The alveolar wall consists of three cell types: type I pneumocytes (simple squamous epithelial cells covering ~95% of alveolar surface, site of gas exchange), type II pneumocytes (cuboidal cells producing surfactant, a phospholipid that reduces surface tension), and scattered alveolar macrophages (immune cells removing pathogens and debris). The vast number of alveoli (~500 million per lung) and their extensive capillary network enable rapid, efficient gas exchange.'
      }
    },
    {
      id: 'p-surfactant',
      type: 'paragraph',
      data: {
        text: 'Surfactant is a mixture of lipids (~90%) and proteins (~10%) secreted by type II pneumocytes. Its primary function is to reduce surface tension at the air-liquid interface in alveoli. Water molecules at a surface are attracted more strongly to other water molecules than to air, creating surface tension. This surface tension would cause alveoli to collapse (atelectasis) unless countered. Surfactant molecules have a hydrophobic end that orients toward air and a hydrophilic end toward water, disrupting hydrogen bonding and reducing surface tension by ~60–70%. This allows alveoli to remain open at lower pressure, reducing the work of breathing. Surfactant is absent in premature infants, causing respiratory distress syndrome; treatment with artificial surfactant is life-saving. Surfactant also has immune functions, aiding phagocytosis by macrophages.'
      }
    },
    {
      id: 'h-ventilation-mechanics',
      type: 'heading',
      data: {
        text: 'Ventilation Mechanics',
        level: 2
      }
    },
    {
      id: 'p-inspiration',
      type: 'paragraph',
      data: {
        text: 'Inspiration (inhalation) is active, involving muscle contraction. The external intercostal muscles (between ribs) contract, lifting the rib cage upward and outward. Simultaneously, the diaphragm (a dome-shaped muscle beneath the lungs) contracts and flattens, moving downward. These movements increase the volume of the thoracic cavity. By Boyle\'s Law (pressure inversely proportional to volume at constant temperature), the increased volume causes a decrease in intrapulmonary pressure (pressure inside the lungs) below atmospheric pressure. This pressure gradient draws air into the lungs. Tidal volume is the volume of air inspired per breath at rest (~500 mL in adults). Vital capacity is the maximum volume of air that can be inspired after maximum expiration (~4.8 L in adult males, ~3.1 L in adult females).'
      }
    },
    {
      id: 'p-expiration',
      type: 'paragraph',
      data: {
        text: 'Expiration (exhalation) is normally passive at rest. The external intercostal muscles relax, the rib cage falls inward and downward. The diaphragm relaxes and domes upward. These movements decrease the thoracic cavity volume, increasing intrapulmonary pressure above atmospheric pressure. Air is passively expelled. During exercise or forced expiration, the internal intercostal muscles (between ribs, oriented differently) contract, actively pulling the rib cage down and in. The abdominal muscles contract, pushing abdominal contents against the diaphragm, further increasing intrapulmonary pressure. This active expiration removes stale air more completely, improving alveolar ventilation. Dead space is the volume of the respiratory system (trachea, bronchi, bronchioles) that does not participate in gas exchange (~150 mL); the remaining tidal volume (~350 mL) ventilates the alveoli.'
      }
    },
    {
      id: 'table-lung-volumes',
      type: 'comparisonTable',
      data: {
        headers: ['Lung Volume', 'Definition', 'Typical Value (mL)', 'Significance'],
        rows: [
          ['Tidal volume (TV)', 'Air inspired/expired per breath at rest', '~500', 'Normal breathing'],
          ['Inspiratory reserve (IRV)', 'Maximum additional air inspired after normal inspiration', '~3100', 'Breathing capacity reserve'],
          ['Expiratory reserve (ERV)', 'Maximum additional air expired after normal expiration', '~1200', 'Breathing capacity reserve'],
          ['Residual volume (RV)', 'Air remaining after maximum expiration (cannot be expelled)', '~1200', 'Prevents alveolar collapse; keeps lungs open'],
          ['Vital capacity (VC)', 'TV + IRV + ERV (maximum air moveable)', '~4800 (M), ~3100 (F)', 'Lung function test; reduced in disease'],
          ['Total lung capacity (TLC)', 'VC + RV (all air in lungs)', '~6000', 'Total lung volume']
        ],
        caption: 'Lung volumes and capacities'
      }
    },
    {
      id: 'callout-worked-volumes',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculating Vital Capacity',
        text: 'Vital Capacity = TV + IRV + ERV = 500 + 3100 + 1200 = 4800 mL (4.8 L). This is the maximum volume a person can breathe in one breath after maximum expiration and inspiration. In spirometry testing, VC is measured to assess lung function; values <80% predicted indicate restrictive or obstructive disease.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why do alveoli need both a large surface area AND a rich blood supply? Explain how ventilation-perfusion matching ensures that oxygen diffuses continuously despite a diminishing concentration gradient.',
        apply: 'A lung has 700 million alveoli each with a radius of 0.1 mm. Calculate the total surface area available for gas exchange. Compare this to the body surface area (~1.8 m²) and explain why the lungs are so efficient.',
        analyze: 'Compare gas exchange in fish gills, insect tracheae, and mammalian lungs. Explain how countercurrent flow in fish gills achieves ~80% oxygen extraction while mammalian lungs achieve only ~25%.',
        evaluate: 'Evaluate the claim that surfactant is more important to lung function than the large surface area of the alveoli. Consider what happens in respiratory distress syndrome (RDS) in premature babies when surfactant is absent.',
      },
      terms: [],
    },
    {
      id: 'checklist-gas-exchange',
      type: 'checklist',
      data: {
        items: [
          { text: 'Fick\'s Law: diffusion rate ∝ area × concentration difference, ∝ 1/thickness', checked: false },
          { text: 'Gas exchange surfaces: large area, thin barrier, moist, ventilated, perfused', checked: false },
          { text: 'Alveoli: type I (gas exchange), type II (surfactant), macrophages (immune)', checked: false },
          { text: 'Surfactant reduces surface tension; absent in premature infants', checked: false },
          { text: 'Inspiration active (diaphragm/intercostals contract); expiration passive or active', checked: false }
        ]
      }
    },
    {
      id: 'summary-gas-exchange',
      type: 'summary',
      data: {
        text: 'Fick\'s Law quantifies diffusion: rate ∝ (surface area × concentration difference) / thickness. Gas exchange surfaces are adapted with large area (~300 m² alveoli), thin barrier (~0.5 μm), moisture, ventilation, and perfusion. Alveoli contain type I pneumocytes (gas exchange), type II pneumocytes (surfactant), and macrophages. Surfactant reduces surface tension, preventing atelectasis. Inspiration is active (diaphragm/intercostals), increasing thoracic volume and decreasing pressure. Expiration is passive at rest. Tidal volume ~500 mL; vital capacity ~4800 mL; residual volume ~1200 mL.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-fick-law',
        prompt: 'State Fick\'s Law. What three factors increase the rate of gas diffusion?'
      },
      {
        id: 'cue-2',
        blockId: 'p-adaptations',
        prompt: 'List five universal adaptations for efficient gas exchange.'
      },
      {
        id: 'cue-3',
        blockId: 'p-lung-structure',
        prompt: 'Describe alveolar structure. Name the three cell types and their functions.'
      },
      {
        id: 'cue-4',
        blockId: 'p-surfactant',
        prompt: 'What is surfactant? Why is it essential for breathing?'
      },
      {
        id: 'cue-5',
        blockId: 'p-inspiration',
        prompt: 'Explain inspiration. How do diaphragm and intercostal muscles work?'
      }
    ],
    summaryText: 'Fick\'s Law: diffusion rate = (SA × ΔC) / thickness. Gas exchange surfaces: large area, thin barrier, moist, ventilated, perfused. Alveoli: type I pneumocytes (exchange), type II (surfactant), macrophages. Surfactant reduces surface tension. Inspiration: diaphragm contracts, rib cage lifts, volume ↑, pressure ↓, air in. Expiration: relax, volume ↓, pressure ↑, air out. TV ~500mL, VC ~4800mL, RV ~1200mL.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Gas Exchange and Respiratory Mechanics',
      detail: 'Fick\'s Law, alveolar structure, surfactant, and ventilation mechanics in A-Level biology.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['gas-exchange', 'fick-law', 'alveoli', 'surfactant', 'ventilation', 'diaphragm']
    }
  ]
};
