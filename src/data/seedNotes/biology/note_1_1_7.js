export const note_biology_1_1_7 = {
  blocks: [
    {
      id: 'obj-blood-tissue-fluid',
      type: 'objective',
      data: {
        text: 'Describe the composition of blood (plasma, red blood cells, white blood cells, platelets). Explain how tissue fluid is formed from blood at the arterial end of capillaries and reabsorbed at the venous end. Describe the role of the lymphatic system in returning excess tissue fluid to the blood.',
      },
    },
    {
      id: 'h-blood-composition',
      type: 'heading',
      data: { text: 'Composition of Blood', level: 2 },
    },
    {
      id: 'table-blood-components',
      type: 'comparisonTable',
      data: {
        caption: 'Components of blood and their functions',
        headers: ['Component', '% of blood', 'Structure', 'Main function(s)'],
        rows: [
          ['Plasma', '~55%', 'Straw-coloured liquid; mostly water (~90%) with dissolved substances', 'Transport: glucose, amino acids, fatty acids, hormones, CO₂, urea, proteins, ions; temperature regulation; osmotic balance'],
          ['Red blood cells (erythrocytes)', '~44%', 'Biconcave disc; no nucleus; contains haemoglobin', 'Transport O₂ (via haemoglobin); also carry CO₂ as HCO₃⁻'],
          ['White blood cells (leucocytes)', '<1%', 'Nucleated cells; include neutrophils, lymphocytes, monocytes', 'Immune defence: phagocytosis (neutrophils), antibody production (B lymphocytes), cell-mediated immunity (T lymphocytes)'],
          ['Platelets (thrombocytes)', '<1%', 'Small cell fragments; no nucleus; derived from megakaryocytes', 'Blood clotting (haemostasis); form platelet plug at wound sites'],
        ],
      },
    },
    {
      id: 'callout-key-rbc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Red Blood Cell Adaptations',
        text: 'Biconcave disc shape → large surface area relative to volume → efficient O₂ diffusion. No nucleus → more space for haemoglobin. Flexible → can squeeze through narrow capillaries. Haemoglobin (4 globin chains + 4 haem groups) reversibly binds O₂: Hb + 4O₂ ⇌ HbO₂₄ (oxyhaemoglobin). High O₂ in lungs → binding; low O₂ in tissues → release.',
      },
    },
    {
      id: 'h-plasma',
      type: 'heading',
      data: { text: 'Blood Plasma', level: 2 },
    },
    {
      id: 'list-plasma-contents',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Water (~90%) — solvent; transports substances; involved in temperature regulation',
          'Plasma proteins: albumin (osmotic regulation, transport), globulins (antibodies, transport), fibrinogen (blood clotting)',
          'Nutrients: glucose, amino acids, fatty acids, glycerol, vitamins',
          'Hormones: insulin, glucagon, thyroxine, oestrogen, etc.',
          'Waste products: urea (from amino acid catabolism), CO₂',
          'Ions: Na⁺, K⁺, Ca²⁺, Cl⁻, HCO₃⁻ — osmotic balance, pH buffering, nerve/muscle function',
        ],
      },
    },
    {
      id: 'h-tissue-fluid',
      type: 'heading',
      data: { text: 'Formation and Reabsorption of Tissue Fluid', level: 2 },
    },
    {
      id: 'p-tissue-fluid-intro',
      type: 'paragraph',
      data: {
        text: 'Tissue fluid (interstitial fluid) is the fluid that bathes the cells of the body\'s tissues. It allows exchange of materials between blood and cells without direct contact. It forms from blood plasma leaking out of capillaries and is distinct from blood because it lacks large plasma proteins (which cannot pass through capillary walls) and red blood cells.',
      },
    },
    {
      id: 'p-tissue-fluid-formation',
      type: 'paragraph',
      data: {
        text: 'At the arterial end of a capillary, blood pressure (hydrostatic pressure) is high (~35 mmHg). This outward pressure overcomes the inward osmotic force from plasma proteins (oncotic pressure ~25 mmHg). Therefore net outward pressure ≈ +10 mmHg, forcing plasma filtrate out of the capillary into the surrounding tissue spaces, forming tissue fluid. This filtrate contains water, glucose, amino acids, O₂, ions — but NOT plasma proteins (too large to cross the capillary wall) and NOT red blood cells.',
      },
    },
    {
      id: 'p-tissue-fluid-reabsorption',
      type: 'paragraph',
      data: {
        text: 'At the venous end of the capillary, blood pressure has fallen (~15 mmHg) as fluid has left. However, the oncotic pressure from plasma proteins remains unchanged (~25 mmHg). Net inward pressure ≈ −10 mmHg, so fluid is reabsorbed back into the capillary, carrying CO₂, urea, and other waste products from the tissue cells. About 90% of tissue fluid is reabsorbed this way. The remaining ~10% enters the lymphatic capillaries.',
      },
    },
    {
      id: 'svg-tissue-fluid',
      type: 'svg',
      data: {
        caption: 'Formation and reabsorption of tissue fluid at a capillary — pressure gradients',
        svg: `<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" font-size="10">
  <rect width="440" height="220" fill="#f8f9ff" rx="8"/>
  <!-- Capillary tube -->
  <rect x="50" y="85" width="340" height="50" rx="6" fill="#ffd0d0" stroke="#c04040" stroke-width="2"/>
  <text x="220" y="115" text-anchor="middle" fill="#8b0000" font-weight="bold">Blood capillary</text>
  <!-- Arterial end label -->
  <text x="80" y="75" text-anchor="middle" fill="#2040a0" font-size="9" font-weight="bold">Arterial end</text>
  <text x="80" y="86" text-anchor="middle" fill="#2040a0" font-size="9">High pressure</text>
  <text x="80" y="96" text-anchor="middle" fill="#2040a0" font-size="9">~35 mmHg</text>
  <!-- Venous end label -->
  <text x="360" y="75" text-anchor="middle" fill="#2040a0" font-size="9" font-weight="bold">Venous end</text>
  <text x="360" y="86" text-anchor="middle" fill="#2040a0" font-size="9">Low pressure</text>
  <text x="360" y="96" text-anchor="middle" fill="#2040a0" font-size="9">~15 mmHg</text>
  <!-- Arrows: filtration (out) at arterial end -->
  <line x1="100" y1="135" x2="100" y2="165" stroke="#2a9040" stroke-width="2" marker-end="url(#arr-down)"/>
  <line x1="120" y1="135" x2="120" y2="165" stroke="#2a9040" stroke-width="2" marker-end="url(#arr-down)"/>
  <text x="110" y="180" text-anchor="middle" fill="#2a9040" font-size="9">Filtration</text>
  <text x="110" y="190" text-anchor="middle" fill="#2a9040" font-size="9">(fluid out)</text>
  <!-- Arrows: reabsorption (in) at venous end -->
  <line x1="320" y1="165" x2="320" y2="135" stroke="#c04020" stroke-width="2" marker-end="url(#arr-up)"/>
  <line x1="340" y1="165" x2="340" y2="135" stroke="#c04020" stroke-width="2" marker-end="url(#arr-up)"/>
  <text x="330" y="180" text-anchor="middle" fill="#c04020" font-size="9">Reabsorption</text>
  <text x="330" y="190" text-anchor="middle" fill="#c04020" font-size="9">(fluid in)</text>
  <!-- Tissue space -->
  <rect x="50" y="150" width="340" height="55" rx="6" fill="#e8f8e8" stroke="#5a9a6a" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="220" y="185" text-anchor="middle" fill="#2c5a3a" font-size="10">Tissue fluid (interstitial space)</text>
  <text x="220" y="198" text-anchor="middle" fill="#2c5a3a" font-size="9">Contains: water, glucose, O₂, amino acids, ions — NO plasma proteins, NO RBCs</text>
  <!-- Lymph arrow (10% not reabsorbed) -->
  <line x1="200" y1="200" x2="200" y2="215" stroke="#6a4090" stroke-width="1.5" marker-end="url(#arr-purple)"/>
  <text x="230" y="215" text-anchor="start" fill="#6a4090" font-size="9">→ 10% drains to lymphatic capillaries</text>
  <defs>
    <marker id="arr-down" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2a9040"/>
    </marker>
    <marker id="arr-up" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#c04020"/>
    </marker>
    <marker id="arr-purple" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#6a4090"/>
    </marker>
  </defs>
</svg>`,
      },
    },
    {
      id: 'callout-key-pressure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Two Opposing Pressures in Capillary Exchange',
        text: 'Hydrostatic pressure (blood pressure) — pushes fluid OUT of the capillary. Oncotic pressure (osmotic pressure from plasma proteins) — pulls fluid IN to the capillary. At arterial end: hydrostatic (35) > oncotic (25) → net outward → filtration. At venous end: hydrostatic (15) < oncotic (25) → net inward → reabsorption.',
      },
    },
    {
      id: 'h-lymphatic',
      type: 'heading',
      data: { text: 'The Lymphatic System', level: 2 },
    },
    {
      id: 'p-lymph',
      type: 'paragraph',
      data: {
        text: 'The ~10% of tissue fluid not reabsorbed by capillaries drains into blind-ended lymphatic capillaries that permeate the tissues. This fluid is then called lymph. Lymph is similar in composition to tissue fluid — low protein, no RBCs. The lymphatic capillaries join into larger lymphatic vessels, which eventually drain into the subclavian veins (returning lymph to the bloodstream). Lymph nodes along the lymphatic vessels contain immune cells and filter pathogens from the lymph.',
      },
    },
    {
      id: 'list-lymphatic-functions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Returns excess tissue fluid to the blood (prevents oedema — tissue swelling)',
          'Returns plasma proteins that have leaked out of capillaries back to the bloodstream',
          'Absorbs dietary fat (as chylomicrons) from the small intestine lacteals',
          'Immune surveillance — lymph nodes filter lymph and trigger immune responses',
        ],
      },
    },
    {
      id: 'callout-warning-oedema',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Oedema — When Tissue Fluid Accumulates',
        text: 'If lymphatic drainage is blocked (e.g. by parasites, surgery) or if capillary hydrostatic pressure rises (e.g. heart failure), or if plasma protein concentration falls (e.g. liver disease, malnutrition), tissue fluid accumulates → oedema (swelling). Oedema in the lungs (pulmonary oedema) is particularly dangerous as it impairs gas exchange.',
      },
    },
    {
      id: 'checklist-blood-tissue',
      type: 'checklist',
      data: {
        items: [
          { text: 'List the four main components of blood and the function of each', checked: false },
          { text: 'State what plasma contains (proteins, nutrients, hormones, waste)', checked: false },
          { text: 'Explain why tissue fluid does NOT contain large plasma proteins or red blood cells', checked: false },
          { text: 'Explain tissue fluid FORMATION: which pressure dominates at the arterial end and why?', checked: false },
          { text: 'Explain tissue fluid REABSORPTION: which pressure dominates at the venous end and why?', checked: false },
          { text: 'State what happens to the ~10% of tissue fluid that is not reabsorbed', checked: false },
          { text: 'Describe the functions of the lymphatic system beyond returning tissue fluid', checked: false },
        ],
      },
    },
    {
      id: 'summary-blood-tissue-fluid',
      type: 'summary',
      data: {
        text: 'Blood = plasma (55%) + RBCs (44%) + WBCs + platelets (<1%). Plasma contains water, proteins (albumin, globulins, fibrinogen), glucose, amino acids, hormones, CO₂, urea. Tissue fluid forms at arterial end of capillary: hydrostatic pressure (35 mmHg) > oncotic pressure (25 mmHg) → net outward → filtration. Reabsorbed at venous end: hydrostatic (15 mmHg) < oncotic (25 mmHg) → net inward. ~10% drains into lymphatic capillaries as lymph; returned to blood via subclavian veins. If lymphatic flow blocked → oedema.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-blood-components', prompt: 'Name the four components of blood and give the main function of each.' },
      { id: 'cue-2', blockId: 'p-tissue-fluid-formation', prompt: 'Explain why tissue fluid is formed at the arterial end of a capillary. Which two pressures are involved?' },
      { id: 'cue-3', blockId: 'p-tissue-fluid-reabsorption', prompt: 'Explain why tissue fluid is reabsorbed at the venous end of a capillary.' },
      { id: 'cue-4', blockId: 'callout-key-pressure', prompt: 'What is the difference between hydrostatic pressure and oncotic pressure? How do they change along the length of a capillary?' },
      { id: 'cue-5', blockId: 'h-lymphatic', prompt: 'What is lymph? What role does the lymphatic system play? What happens if lymphatic drainage is blocked?' },
    ],
    summaryText: 'Plasma: 55% of blood; contains proteins, glucose, CO₂, hormones. RBCs: 44%, biconcave, haemoglobin. Tissue fluid: formed at arterial end (blood pressure > osmotic pressure), reabsorbed at venous end, 10% → lymph. Oncotic pressure from plasma proteins opposes filtration but assists reabsorption. Lymph returns to bloodstream via subclavian veins.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Starling principle of microvascular fluid exchange', detail: 'Ernest Starling (1896) first described the balance between hydrostatic and osmotic (oncotic) pressures determining capillary fluid exchange. This principle (Starling forces) is the foundation of understanding oedema formation and treatment.', year: '1896', source: 'Starling EH, J Physiol', tags: ['tissue fluid', 'capillaries'] },
  ],
};
