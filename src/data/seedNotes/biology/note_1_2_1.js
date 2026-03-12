export const note_biology_1_2_1 = {
  blocks: [
    {
      id: 'obj-alveoli',
      type: 'objective',
      data: {
        text: 'Describe the structure of the human gas exchange system. Explain the adaptations of alveoli for efficient gas exchange by applying Fick\'s Law. Describe the mechanism of ventilation (breathing).',
      },
    },
    {
      id: 'h-lung-structure',
      type: 'heading',
      data: { text: 'Structure of the Human Gas Exchange System', level: 2 },
    },
    {
      id: 'p-lung-intro',
      type: 'paragraph',
      data: {
        text: 'Air travels from the nose or mouth through a series of branching airways before reaching the gas exchange surface. The lungs are located in the thorax (chest cavity), protected by the rib cage and separated from the abdomen by the diaphragm.',
      },
    },
    {
      id: 'list-airways',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Trachea (windpipe) — wide tube; rings of cartilage keep it open; lined with ciliated epithelium and goblet cells that secrete mucus',
          'Bronchi (singular: bronchus) — trachea divides into two bronchi, one to each lung; cartilage sections in walls',
          'Bronchioles — repeatedly branched smaller tubes; smaller bronchioles have only smooth muscle and elastic fibres (no cartilage), so they can expand and contract',
          'Alveoli — microscopic air sacs at the ends of the bronchioles, arranged in clusters; site of gas exchange',
        ],
      },
    },
    {
      id: 'svg-lung-structure',
      type: 'svg',
      data: {
        caption: 'Diagram of the human respiratory system showing the hierarchy of airways',
        svg: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" font-size="11">
  <rect width="480" height="320" fill="#f8f9ff" rx="8"/>
  <!-- Trachea -->
  <rect x="220" y="20" width="40" height="60" rx="4" fill="#b8d4f0" stroke="#4a7fbf" stroke-width="1.5"/>
  <text x="240" y="14" text-anchor="middle" fill="#2c4a7c" font-weight="bold">Trachea</text>
  <!-- Left bronchus -->
  <path d="M220 80 Q180 100 160 120" stroke="#4a7fbf" stroke-width="3" fill="none"/>
  <!-- Right bronchus -->
  <path d="M260 80 Q300 100 320 120" stroke="#4a7fbf" stroke-width="3" fill="none"/>
  <!-- Left lung outline -->
  <ellipse cx="130" cy="190" rx="80" ry="90" fill="#e8f4e8" stroke="#5a9a6a" stroke-width="1.5"/>
  <!-- Right lung outline -->
  <ellipse cx="350" cy="190" rx="80" ry="90" fill="#e8f4e8" stroke="#5a9a6a" stroke-width="1.5"/>
  <!-- Left bronchioles (simplified) -->
  <path d="M160 120 Q150 150 130 160" stroke="#6ba3d0" stroke-width="2" fill="none"/>
  <path d="M130 160 Q110 175 100 185" stroke="#6ba3d0" stroke-width="1.5" fill="none"/>
  <path d="M130 160 Q140 175 145 190" stroke="#6ba3d0" stroke-width="1.5" fill="none"/>
  <!-- Right bronchioles -->
  <path d="M320 120 Q330 150 350 160" stroke="#6ba3d0" stroke-width="2" fill="none"/>
  <path d="M350 160 Q360 175 370 185" stroke="#6ba3d0" stroke-width="1.5" fill="none"/>
  <path d="M350 160 Q340 175 335 190" stroke="#6ba3d0" stroke-width="1.5" fill="none"/>
  <!-- Alveoli clusters (small circles) -->
  <circle cx="98" cy="191" r="7" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="111" cy="183" r="6" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="101" cy="201" r="6" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="148" cy="196" r="7" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="138" cy="187" r="6" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="373" cy="191" r="7" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="360" cy="183" r="6" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="376" cy="201" r="6" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="333" cy="196" r="7" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <circle cx="343" cy="187" r="6" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1"/>
  <!-- Diaphragm -->
  <path d="M40 285 Q240 310 440 285" stroke="#b06040" stroke-width="2.5" fill="none"/>
  <text x="240" y="308" text-anchor="middle" fill="#804020" font-weight="bold">Diaphragm</text>
  <!-- Labels -->
  <text x="62" y="190" text-anchor="middle" fill="#2c5a3a" font-size="9">alveoli</text>
  <text x="395" y="190" text-anchor="middle" fill="#2c5a3a" font-size="9">alveoli</text>
  <text x="130" y="145" text-anchor="middle" fill="#2c4a7c" font-size="9">bronchioles</text>
  <text x="350" y="145" text-anchor="middle" fill="#2c4a7c" font-size="9">bronchioles</text>
  <text x="176" y="114" text-anchor="end" fill="#2c4a7c">left bronchus</text>
  <text x="304" y="114" text-anchor="start" fill="#2c4a7c">right bronchus</text>
</svg>`,
      },
    },
    {
      id: 'callout-cartilage',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cartilage in Airways',
        text: 'The trachea has C-shaped rings of cartilage in its walls. The C-shape (open at the back) is important: it keeps the trachea open during inhalation when air pressure drops, while the gap at the back allows the oesophagus (directly behind the trachea) to expand when swallowing food. The bronchi have cartilage in rings and plates. The smallest bronchioles lack cartilage entirely \u2014 their walls contain only smooth muscle and elastic fibres, allowing them to dilate and constrict to regulate airflow to different parts of the lung. The very smallest bronchioles have elastic fibres only.',
      },
    },
    {
      id: 'callout-cilia-mucus',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cilia and Mucus \u2014 Keeping Airways Clear',
        text: 'Goblet cells in the epithelium of the trachea and bronchi secrete mucus, which traps dust particles, bacteria, and other pathogens before they reach the alveoli. Cilia on the lining cells beat rhythmically to waft the mucus upwards along the airway towards the throat, where it is swallowed or expelled. This mucociliary escalator is a key first line of defence against respiratory infection. Cigarette smoke paralyses cilia, causing mucus to accumulate in the airways.',
      },
    },
    {
      id: 'h-alveoli-adaptations',
      type: 'heading',
      data: { text: 'Adaptations of Alveoli for Gas Exchange', level: 2 },
    },
    {
      id: 'p-ficks-intro',
      type: 'paragraph',
      data: {
        text: 'Gas exchange occurs by diffusion across the alveolar wall. The rate of diffusion is described by Fick\'s Law. Alveoli are highly adapted to maximise each factor in this law.',
      },
    },
    {
      id: 'eq-ficks',
      type: 'equation',
      data: {
        html: 'Rate of diffusion ∝ <span class="nb-frac"><span class="nb-num">surface area × concentration difference</span><span class="nb-den">thickness of exchange surface</span></span>',
        caption: "Fick's Law — the three variables alveoli are adapted to optimise",
      },
    },
    {
      id: 'table-adaptations',
      type: 'comparisonTable',
      data: {
        caption: 'Alveolar adaptations mapped to each factor in Fick\'s Law',
        headers: ["Fick's Law factor", 'Adaptation', 'Detail'],
        rows: [
          ['Large surface area', '~700 million alveoli', 'Total surface area ≈ 70 m² in an adult; each alveolus is tiny (~0.1–0.2 mm diameter) so many fit in the lung volume'],
          ['Short diffusion distance', 'Squamous (flattened) epithelial cells', 'Both alveolus wall and capillary wall are one cell thick; RBCs pressed close to capillary wall; total distance ≈ 0.5 µm'],
          ['High concentration gradient', 'Ventilation + blood flow', 'Breathing constantly replaces air in alveoli (high O₂); blood carries O₂ away and brings CO₂ (maintains gradient)'],
          ['Moist exchange surface', 'Thin water film on inner surface', 'O₂ dissolves in water before diffusing into cells; unavoidable because cell-surface membranes permeable to water'],
        ],
      },
    },
    {
      id: 'callout-moist',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'The Moist Surface Trade-off',
        text: 'The water film on the inner surface of alveoli slightly reduces the rate of gas diffusion (gases diffuse more slowly in water than in air) and increases the effective diffusion distance. However, a moist exchange surface is unavoidable — any membrane permeable to gases must also be permeable to water. In pneumonia, this water layer becomes much thicker, seriously reducing gas exchange efficiency.',
      },
    },
    {
      id: 'svg-alveolus',
      type: 'svg',
      data: {
        caption: 'Cross-section of an alveolus showing the short diffusion pathway from air to red blood cell',
        svg: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" font-size="11">
  <rect width="420" height="260" fill="#f8f9ff" rx="8"/>
  <!-- Alveolus air space -->
  <ellipse cx="200" cy="110" rx="110" ry="80" fill="#ddeeff" stroke="none"/>
  <text x="200" y="108" text-anchor="middle" fill="#2c4a7c" font-size="13" font-weight="bold">Air space</text>
  <text x="200" y="124" text-anchor="middle" fill="#2c4a7c" font-size="10">(alveolus)</text>
  <!-- Water film on inner surface -->
  <ellipse cx="200" cy="110" rx="110" ry="80" fill="none" stroke="#6ab0f0" stroke-width="5" stroke-dasharray="4,2"/>
  <!-- Alveolus wall (squamous epithelium) -->
  <ellipse cx="200" cy="110" rx="116" ry="86" fill="none" stroke="#e0905a" stroke-width="3"/>
  <!-- Capillary lumen -->
  <ellipse cx="200" cy="110" rx="135" ry="100" fill="none" stroke="#e85050" stroke-width="5"/>
  <!-- RBC inside capillary -->
  <ellipse cx="132" cy="165" rx="14" ry="8" fill="#f05050" stroke="#b03030" stroke-width="1"/>
  <ellipse cx="280" cy="60" rx="14" ry="8" fill="#f05050" stroke="#b03030" stroke-width="1"/>
  <!-- Arrow: O2 diffuses in -->
  <line x1="200" y1="130" x2="200" y2="195" stroke="#2a9040" stroke-width="2" marker-end="url(#arr)"/>
  <text x="215" y="168" fill="#2a9040" font-size="10">O₂</text>
  <!-- Arrow: CO2 diffuses out -->
  <line x1="175" y1="195" x2="175" y2="130" stroke="#c04020" stroke-width="2" marker-end="url(#arr2)"/>
  <text x="148" y="168" fill="#c04020" font-size="10">CO₂</text>
  <!-- Labels -->
  <text x="330" y="100" text-anchor="start" fill="#9c5020" font-size="10">alveolus wall</text>
  <line x1="316" y1="97" x2="290" y2="115" stroke="#9c5020" stroke-width="1"/>
  <text x="330" y="120" text-anchor="start" fill="#e85050" font-size="10">capillary wall</text>
  <line x1="316" y1="117" x2="308" y2="128" stroke="#e85050" stroke-width="1"/>
  <text x="330" y="140" text-anchor="start" fill="#6ab0f0" font-size="10">water film</text>
  <line x1="316" y1="137" x2="302" y2="130" stroke="#6ab0f0" stroke-width="1"/>
  <text x="330" y="160" text-anchor="start" fill="#f05050" font-size="10">red blood cell</text>
  <line x1="316" y1="162" x2="293" y2="165" stroke="#f05050" stroke-width="1"/>
  <text x="200" y="240" text-anchor="middle" fill="#444" font-size="10">Total diffusion distance ≈ 0.5 µm</text>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2a9040"/>
    </marker>
    <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#c04020"/>
    </marker>
  </defs>
</svg>`,
      },
    },
    {
      id: 'h-ventilation',
      type: 'heading',
      data: { text: 'Ventilation: The Breathing Mechanism', level: 2 },
    },
    {
      id: 'p-ventilation-intro',
      type: 'paragraph',
      data: {
        text: 'Because the lungs are tucked inside the chest, gases cannot reach them by diffusion alone. Ventilation (breathing) is a mass transport process that constantly replaces the air in the alveoli, maintaining a high O₂ and low CO₂ concentration there. Changes in thorax volume cause pressure changes that drive airflow in and out.',
      },
    },
    {
      id: 'table-breathing',
      type: 'comparisonTable',
      data: {
        caption: 'Mechanism of inspiration and expiration',
        headers: ['Stage', 'What happens', 'Why air moves'],
        rows: [
          ['Inspiration (breathing in)', 'Diaphragm muscle contracts → flattens; external intercostal muscles contract → ribs pulled upward and outward', 'Volume of thorax increases → pressure in alveoli falls below atmospheric → air rushes in down pressure gradient'],
          ['Quiet expiration (breathing out)', 'Diaphragm and external intercostal muscles relax → rib cage and diaphragm return to resting position under elastic recoil', 'Volume of thorax decreases → alveolar pressure rises above atmospheric → air pushed out'],
          ['Forced/deep expiration', 'Internal intercostal muscles contract → rib cage pulled down; abdominal muscles contract → push organs against diaphragm', 'Greater reduction in thorax volume → more air expelled; reduces lung volume toward residual volume'],
        ],
      },
    },
    {
      id: 'callout-ventilation-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ventilation Maintains the Concentration Gradient',
        text: 'Without ventilation, O₂ in the alveoli would be used up and CO₂ would accumulate, eliminating the diffusion gradient. Ventilation (mass transport) constantly refreshes alveolar air. Simultaneously, blood flow through the pulmonary capillaries carries dissolved O₂ away and delivers CO₂. Both are essential to maintain the large concentration gradient required by Fick\'s Law.',
      },
    },
    {
      id: 'callout-we-adaptation',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Applying Fick\'s Law to Alveoli',
        text: 'Question: Explain how the structure of alveoli allows efficient gas exchange.\n\nAnswer: Alveoli have a very large combined surface area (~70 m²) due to the presence of ~700 million alveoli in the lungs, maximising the area for diffusion. The alveolus wall and capillary wall are each only one cell thick (squamous epithelium), minimising the diffusion distance to ~0.5 µm. Ventilation replaces alveolar air with fresh O₂-rich air while blood flow carries O₂ away from the capillaries, maintaining a steep concentration gradient. Together these maximise the rate of diffusion according to Fick\'s Law.',
      },
    },
    {
      id: 'h-gas-exchange-surface',
      type: 'heading',
      data: { text: 'Key Features of Any Efficient Gas Exchange Surface', level: 2 },
    },
    {
      id: 'list-gas-exchange-features',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Large surface area relative to volume',
          'Thin exchange surface (short diffusion distance)',
          'Moist surface (gases dissolve before diffusing)',
          'Good supply/removal of gases — ventilation on one side, blood flow on the other',
          'Permeable to the gases being exchanged',
        ],
      },
    },
    {
      id: 'checklist-alveoli',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the pathway of air from nose to alveoli (trachea → bronchi → bronchioles → alveoli)', checked: false },
          { text: 'State the role of cartilage in the trachea and bronchi', checked: false },
          { text: 'Describe the role of smooth muscle and elastic fibres in bronchioles', checked: false },
          { text: 'Explain how alveoli achieve a large surface area', checked: false },
          { text: 'Explain how the squamous epithelium minimises diffusion distance', checked: false },
          { text: 'Explain why a moist surface is unavoidable and its slight disadvantage', checked: false },
          { text: 'Describe how ventilation and blood flow maintain a concentration gradient', checked: false },
          { text: 'Describe the roles of the diaphragm and intercostal muscles during inspiration and expiration', checked: false },
          { text: 'Apply Fick\'s Law to evaluate alveolar adaptations', checked: false },
        ],
      },
    },
    {
      id: 'summary-alveoli',
      type: 'summary',
      data: {
        text: 'The human gas exchange system has a hierarchy: trachea → bronchi → bronchioles → alveoli. Alveoli are adapted for efficient gas exchange via Fick\'s Law: ~700 million alveoli give a huge surface area (~70 m²); squamous (flattened) epithelium of both alveolus and capillary walls minimises diffusion distance (~0.5 µm); ventilation and blood flow maintain the concentration gradient. A thin water film on the inner surface is unavoidable. Inspiration involves contraction of the diaphragm (flattens) and external intercostal muscles (ribs up and out), increasing thorax volume and reducing pressure so air flows in. Expiration is largely passive — muscles relax, volume decreases, pressure rises, air flows out.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-ficks', prompt: 'State Fick\'s Law and identify the three factors alveoli are adapted to maximise.' },
      { id: 'cue-2', blockId: 'table-adaptations', prompt: 'How does the structure of the alveolus wall minimise diffusion distance? What type of cells form the wall?' },
      { id: 'cue-3', blockId: 'p-ventilation-intro', prompt: 'Why is ventilation (breathing) necessary, rather than relying on diffusion alone to supply oxygen?' },
      { id: 'cue-4', blockId: 'table-breathing', prompt: 'Describe the muscle actions that produce inspiration. What happens to thorax volume and pressure?' },
      { id: 'cue-5', blockId: 'callout-moist', prompt: 'Why is a moist alveolar surface both necessary and slightly disadvantageous for gas exchange?' },
    ],
    summaryText: 'Alveoli are adapted by: large SA (~700 million alveoli, 70 m²), short diffusion distance (squamous epithelium, ~0.5 µm), and maintained concentration gradient (ventilation + blood flow). Breathing in = diaphragm and external intercostals contract → volume up, pressure down → air in. Breathing out = muscles relax → volume down, pressure up → air out.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Alveolar surface area measurement', detail: 'Adult human lungs contain ~300 million to 700 million alveoli; total surface area approximately 50–70 m².', year: '2004', source: 'Ochs et al., Proc Natl Acad Sci', tags: ['anatomy', 'lungs'] },
    { id: 'ev-2', title: 'Diffusion distance in lung tissue', detail: 'The combined thickness of alveolar epithelium and capillary endothelium is approximately 0.5–1 µm, far thinner than most membranes in the body.', year: '1991', source: 'Weibel, The Pathway for Oxygen', tags: ['diffusion', 'gas exchange'] },
  ],
};
