export const note_biology_1_1_8 = {
  blocks: [
    {
      id: 'obj-atherosclerosis',
      type: 'objective',
      data: {
        text: 'Describe the process of atherosclerosis, including damage to the endothelium, formation of fatty streaks, plaques (atheromas), and how this leads to reduced blood flow. Describe the sequence of blood clotting (thromboplastin → prothrombin → thrombin → fibrinogen → fibrin). Explain the consequences of blood clots — stroke, myocardial infarction, and DVT.',
      },
    },
    {
      id: 'h-atherosclerosis',
      type: 'heading',
      data: { text: 'Atherosclerosis', level: 2 },
    },
    {
      id: 'p-athero-def',
      type: 'paragraph',
      data: {
        text: 'Atherosclerosis is a disease in which plaques (atheromas) build up inside the walls of arteries, narrowing the lumen and reducing blood flow. It is a progressive condition that develops over many years and is the underlying cause of most cardiovascular disease.',
      },
    },
    {
      id: 'list-athero-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Damage to the endothelium (inner lining of the artery wall) — caused by factors such as high blood pressure, smoking, old age, diabetes, or obesity.',
          'The damaged endothelium triggers an inflammatory response. White blood cells (mainly macrophages) from the blood migrate into the sub-endothelial space.',
          'Lipids (including cholesterol) from the plasma accumulate in the wall. Macrophages engulf these lipids — the lipid-laden macrophages form fatty streaks (the first visible sign of atherosclerosis).',
          'More immune cells, lipids, and platelets accumulate over time, forming a plaque (atheroma) — a hard, fibrous deposit in the artery wall.',
          'The plaque narrows the arterial lumen, restricting blood flow. It can also harden and calcify, reducing the elasticity of the vessel wall.',
          'Reduced elasticity and narrower lumen → raised blood pressure → further endothelial damage (a self-reinforcing cycle).',
        ],
      },
    },
    {
      id: 'svg-atheroma',
      type: 'svg',
      data: {
        caption: 'Cross-section of a normal artery (left) compared with an artery containing an atherosclerotic plaque (right)',
        svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.lbl{fill:#1f2937;} .dim{fill:#6b7280;} .normal-outer{fill:#fce7d2;stroke:#ea580c;stroke-width:2;} .normal-inner{fill:#fef3c7;stroke:#d97706;stroke-width:1.5;} .plaque{fill:#d97706;stroke:#92400e;stroke-width:1.5;} .endo{fill:#fecaca;stroke:#dc2626;stroke-width:1.5;}</style>
    <marker id="arr-b" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#6b7280"/></marker>
  </defs>
  <!-- NORMAL artery -->
  <text x="130" y="18" text-anchor="middle" font-weight="bold" fill="#1f2937" font-size="12">Normal artery</text>
  <!-- Outer wall -->
  <circle cx="130" cy="108" r="80" class="normal-outer"/>
  <!-- Media -->
  <circle cx="130" cy="108" r="60" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <!-- Endothelium -->
  <circle cx="130" cy="108" r="45" class="endo"/>
  <!-- Lumen -->
  <circle cx="130" cy="108" r="38" fill="#bfdbfe"/>
  <text x="130" y="113" text-anchor="middle" fill="#1e3a8a" font-size="11" font-weight="bold">Lumen</text>
  <!-- Labels -->
  <line x1="210" y1="100" x2="175" y2="100" stroke="#6b7280" stroke-width="1" marker-end="url(#arr-b)"/>
  <text x="215" y="104" text-anchor="start" class="dim" font-size="10">Tunica externa</text>
  <line x1="210" y1="120" x2="180" y2="118" stroke="#6b7280" stroke-width="1" marker-end="url(#arr-b)"/>
  <text x="215" y="124" text-anchor="start" class="dim" font-size="10">Tunica media</text>
  <line x1="210" y1="140" x2="170" y2="135" stroke="#6b7280" stroke-width="1" marker-end="url(#arr-b)"/>
  <text x="215" y="144" text-anchor="start" class="dim" font-size="10">Endothelium</text>

  <!-- DISEASED artery -->
  <text x="390" y="18" text-anchor="middle" font-weight="bold" fill="#1f2937" font-size="12">Atherosclerotic artery</text>
  <!-- Outer wall -->
  <circle cx="390" cy="108" r="80" class="normal-outer"/>
  <!-- Media -->
  <circle cx="390" cy="108" r="60" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <!-- Endothelium -->
  <circle cx="390" cy="108" r="45" class="endo"/>
  <!-- Plaque (atheroma) — bulging into lumen -->
  <ellipse cx="370" cy="88" rx="32" ry="22" class="plaque"/>
  <text x="353" y="86" text-anchor="middle" fill="#fef3c7" font-size="9" font-weight="bold">Plaque</text>
  <text x="353" y="97" text-anchor="middle" fill="#fef3c7" font-size="9">(atheroma)</text>
  <!-- Narrowed Lumen -->
  <ellipse cx="400" cy="118" rx="22" ry="18" fill="#bfdbfe"/>
  <text x="400" y="122" text-anchor="middle" fill="#1e3a8a" font-size="9" font-weight="bold">Narrow lumen</text>
  <!-- Arrow: narrowed -->
  <line x1="480" y1="100" x2="438" y2="100" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr-b)"/>
  <text x="480" y="95" text-anchor="middle" fill="#dc2626" font-size="9">Reduced</text>
  <text x="480" y="108" text-anchor="middle" fill="#dc2626" font-size="9">blood flow</text>

  <!-- Divider line -->
  <line x1="260" y1="20" x2="260" y2="210" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="6,4"/>
</svg>`,
      },
    },
    {
      id: 'callout-tip-risk-factors',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Atherosclerosis Risk Factors — know these',
        text: 'Modifiable: smoking (damages endothelium), high blood pressure, high cholesterol (LDL) diet, obesity, physical inactivity, type 2 diabetes, stress. Non-modifiable: age (endothelium deteriorates), sex (males at higher risk before menopause in females), genetic factors. Exam tip: always link factor to mechanism — e.g. smoking → endothelial damage → inflammatory response → plaque formation.',
      },
    },
    {
      id: 'h-blood-clotting',
      type: 'heading',
      data: { text: 'Blood Clotting (Haemostasis)', level: 2 },
    },
    {
      id: 'p-clotting-purpose',
      type: 'paragraph',
      data: {
        text: 'When a blood vessel is damaged, blood clotting (haemostasis) prevents excessive blood loss and forms a barrier against pathogens entering the wound. Two processes operate together: 1) platelets aggregate to form a physical plug at the wound site; 2) the clotting cascade converts soluble fibrinogen into insoluble fibrin, which forms a reinforcing mesh trapping RBCs and platelets to make a stable clot.',
      },
    },
    {
      id: 'list-clotting-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Damage to the vessel wall exposes collagen fibres. Platelets adhere to the collagen and release thromboplastin (a mixture of clotting factors).',
          'Calcium ions (Ca²⁺) are essential co-factors at every stage of the cascade.',
          'Thromboplastin + Ca²⁺ → activation cascade that converts the inactive plasma protein prothrombin into the active enzyme thrombin.',
          'Thrombin acts as an enzyme: it converts soluble fibrinogen (a plasma protein) into insoluble fibrin.',
          'Fibrin monomers polymerise, forming long fibrin fibres that cross-link into a mesh.',
          'The fibrin mesh traps red blood cells and platelets → clot forms, sealing the wound.',
        ],
      },
    },
    {
      id: 'svg-clotting-cascade',
      type: 'svg',
      data: {
        caption: 'Simplified blood clotting cascade for IAL Biology',
        svg: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.box{fill:#e0e7ff;stroke:#6366f1;stroke-width:1.5;rx:8;} .arrow{stroke:#6366f1;stroke-width:2;fill:none;} .lbl{fill:#1f2937;font-size:12;} .sm{fill:#6b7280;font-size:10;}</style>
    <marker id="arr-cas" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6366f1"/></marker>
  </defs>
  <!-- Step 1: Vessel damage -->
  <rect x="155" y="12" width="170" height="36" rx="8" fill="#fce7d2" stroke="#ea580c" stroke-width="1.5"/>
  <text x="240" y="28" text-anchor="middle" fill="#9a3412" font-size="12" font-weight="bold">Vessel wall damage</text>
  <text x="240" y="42" text-anchor="middle" fill="#9a3412" font-size="10">collagen exposed</text>
  <!-- Arrow 1→2 -->
  <line x1="240" y1="48" x2="240" y2="70" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-cas)"/>
  <!-- Step 2: Platelets + thromboplastin -->
  <rect x="135" y="72" width="210" height="36" rx="8" class="box"/>
  <text x="240" y="88" text-anchor="middle" class="lbl" font-weight="bold">Platelets aggregate</text>
  <text x="240" y="102" text-anchor="middle" class="sm">release thromboplastin + Ca²⁺</text>
  <!-- Arrow 2→3 -->
  <line x1="240" y1="108" x2="240" y2="130" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-cas)"/>
  <text x="245" y="122" fill="#6b7280" font-size="9">+ Ca²⁺ (co-factor)</text>
  <!-- Step 3: Prothrombin → Thrombin -->
  <rect x="120" y="132" width="240" height="36" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="240" y="148" text-anchor="middle" fill="#92400e" font-size="12" font-weight="bold">Prothrombin (inactive)</text>
  <text x="240" y="162" text-anchor="middle" fill="#92400e" font-size="10">→ Thrombin (active enzyme)</text>
  <!-- Arrow 3→4 -->
  <line x1="240" y1="168" x2="240" y2="190" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-cas)"/>
  <!-- Step 4: Fibrinogen → Fibrin -->
  <rect x="120" y="192" width="240" height="36" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="240" y="208" text-anchor="middle" fill="#166534" font-size="12" font-weight="bold">Fibrinogen (soluble)</text>
  <text x="240" y="222" text-anchor="middle" fill="#166534" font-size="10">→ Fibrin (insoluble)</text>
  <!-- Arrow 4→5 -->
  <line x1="240" y1="228" x2="240" y2="250" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-cas)"/>
  <!-- Step 5: Clot -->
  <rect x="140" y="252" width="200" height="50" rx="8" fill="#d1fae5" stroke="#16a34a" stroke-width="2"/>
  <text x="240" y="272" text-anchor="middle" fill="#064e3b" font-size="12" font-weight="bold">Fibrin mesh forms</text>
  <text x="240" y="287" text-anchor="middle" fill="#064e3b" font-size="10">traps RBCs + platelets → clot</text>
  <text x="240" y="300" text-anchor="middle" fill="#064e3b" font-size="10">seals wound</text>
  <!-- Thrombin label (enzyme label) -->
  <text x="295" y="185" fill="#6366f1" font-size="9" font-style="italic">enzyme (thrombin)</text>
  <text x="82" y="208" text-anchor="end" fill="#6b7280" font-size="9">Thromboplastin + Ca²⁺</text>
  <text x="82" y="219" text-anchor="end" fill="#6b7280" font-size="9">activate this conversion</text>
  <path d="M 85 215 L 118 210" stroke="#6b7280" stroke-width="1" marker-end="url(#arr-cas)"/>
</svg>`,
      },
    },
    {
      id: 'callout-key-clotting',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Clotting Sequence — Learn this',
        text: 'Thromboplastin (+ Ca²⁺) → Prothrombin → Thrombin → Fibrinogen → Fibrin → clot\n\nProthrombin and fibrinogen are both inactive plasma proteins that are activated by enzymes in the cascade. The clot is a mesh of fibrin strands with trapped red blood cells and platelets.',
      },
    },
    {
      id: 'h-consequences',
      type: 'heading',
      data: { text: 'Consequences of Blood Clots', level: 2 },
    },
    {
      id: 'p-thrombus',
      type: 'paragraph',
      data: {
        text: 'A thrombus is a blood clot that forms within a blood vessel (artery or vein), partially or completely blocking blood flow. Clotting inside a vessel is abnormal and is triggered by atherosclerosis (plaque rupture) or other vessel wall damage. If a fragment of a thrombus breaks loose and travels in the bloodstream, it is called an embolus, which can lodge in small vessels elsewhere.',
      },
    },
    {
      id: 'table-cvd-consequences',
      type: 'comparisonTable',
      data: {
        caption: 'Major consequences of arterial and venous blood clots',
        headers: ['Condition', 'Where blocked', 'What happens', 'Key symptoms'],
        rows: [
          ['Myocardial infarction (heart attack)', 'Coronary arteries (supplying heart muscle)', 'Heart muscle cells deprived of O₂ and glucose → reduced ATP → cells cannot contract → cell death', 'Intense chest pain (often radiating to arm/jaw), shortness of breath, sweating, dizziness'],
          ['Ischaemic stroke', 'Arteries supplying the brain', 'Brain cells deprived of O₂ and glucose → reduced ATP → brain cell death', 'Sudden numbness/weakness (one side), slurred speech, visual disturbance, severe headache'],
          ['Deep Vein Thrombosis (DVT)', 'Deep veins (usually leg veins)', 'Clot in the deep vein prevents return of blood to heart; embolus can travel to lungs (pulmonary embolism)', 'Leg pain, swelling, redness; pulmonary embolism = sudden breathlessness, chest pain'],
        ],
      },
    },
    {
      id: 'p-ischaemia-mechanism',
      type: 'paragraph',
      data: {
        text: 'The common mechanism in stroke and heart attack is ischaemia — insufficient blood (and thus oxygen and glucose) reaching cells. With less O₂, cells switch to anaerobic respiration, producing lactate and reducing pH. ATP shortfall means ion pumps fail, cells cannot maintain their membrane potentials, and eventually cells die (infarction). Cardiac muscle cells cannot be replaced after death; they are replaced by scar tissue which cannot contract.',
      },
    },
    {
      id: 'callout-tip-thrombus-embolus',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Distinction: Thrombus vs Embolus',
        text: 'Thrombus = stationary clot attached to vessel wall.\nEmbolus = detached clot (or fragment) travelling in the bloodstream.\nIn a stroke or MI, an embolus travels and lodges in a small vessel, completely blocking it. A thrombus in a large artery may not completely block it but still restricts flow (causing angina, for example).',
      },
    },
    {
      id: 'callout-warning-dvt',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Deep Vein Thrombosis (DVT) — Risk Factors',
        text: 'Caused by slow blood flow, damage to vessel walls, or abnormal blood composition. Risk increased by: long periods of immobility (long-haul flights, hospital bed rest), old age, obesity, surgery, pregnancy, some medications (e.g. oral contraceptive pill). Dangerous because DVT clot can become a pulmonary embolus — blocking the pulmonary artery and causing sudden death.',
      },
    },
    {
      id: 'checklist-athero',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the 6 steps in atherosclerosis from endothelial damage to plaque formation', checked: false },
          { text: 'Explain why atherosclerosis raises blood pressure (narrowed lumen → reduced elasticity)', checked: false },
          { text: 'State the clotting sequence: thromboplastin → prothrombin → thrombin → fibrinogen → fibrin', checked: false },
          { text: 'Explain the role of calcium ions (Ca²⁺) in blood clotting', checked: false },
          { text: 'Distinguish between a thrombus and an embolus', checked: false },
          { text: 'Explain how a blocked coronary artery leads to myocardial infarction at the cellular level', checked: false },
          { text: 'Compare the mechanisms and symptoms of ischaemic stroke vs myocardial infarction', checked: false },
        ],
      },
    },
    {
      id: 'summary-athero',
      type: 'summary',
      data: {
        text: 'Atherosclerosis: endothelial damage (smoking, high BP) → inflammatory response → macrophages ingest lipids → fatty streaks → plaque (atheroma) → narrowed lumen + reduced elasticity → raised BP. Blood clotting: damaged vessel → platelets release thromboplastin + Ca²⁺ → prothrombin → thrombin → fibrinogen → fibrin mesh → clot. Thrombus (stationary) or embolus (moving) → myocardial infarction (coronary artery blocked → heart cells die), stroke (cerebral artery blocked → brain cells die), or DVT (leg vein clot → risk of pulmonary embolism).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-athero-steps', prompt: 'Describe the sequence of events from endothelial damage to the formation of an atherosclerotic plaque.' },
      { id: 'cue-2', blockId: 'list-clotting-steps', prompt: 'State the blood clotting cascade sequence in order, naming each substance.' },
      { id: 'cue-3', blockId: 'p-clotting-purpose', prompt: 'What are the two main components of blood clotting (haemostasis), and what does each contribute to forming a stable clot?' },
      { id: 'cue-4', blockId: 'table-cvd-consequences', prompt: 'Explain the mechanism by which a blocked coronary artery causes death of cardiac muscle cells.' },
      { id: 'cue-5', blockId: 'callout-tip-thrombus-embolus', prompt: 'Distinguish between a thrombus and an embolus, and explain how an embolus causes a stroke.' },
    ],
    summaryText: 'Atherosclerosis: endothelial damage → macrophages + lipids → fatty streak → plaque → lumen narrows → BP rises. Clotting: thromboplastin + Ca²⁺ → prothrombin → thrombin → fibrinogen → fibrin → clot. Consequences: MI (coronary artery), stroke (cerebral artery), DVT (leg vein). Thrombus = stationary; embolus = travelling fragment.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Atherosclerosis as an inflammatory disease', detail: 'The "response to injury" hypothesis (Ross 1999) established that endothelial damage triggers the inflammatory cascade leading to plaque formation. Macrophage-derived foam cells are the hallmark of early fatty streaks.', year: '1999', source: 'Ross R, N Engl J Med', tags: ['atherosclerosis', 'inflammation', 'cardiovascular'] },
    { id: 'ev-2', title: 'Blood coagulation cascade', detail: 'The extrinsic clotting cascade culminating in thrombin converting fibrinogen to fibrin is the primary pathway triggered by vessel wall damage. Thrombin is the central enzyme.', year: '1964', source: 'Davie EW, Ratnoff OD, Science', tags: ['blood clotting', 'thrombosis'] },
  ],
};
