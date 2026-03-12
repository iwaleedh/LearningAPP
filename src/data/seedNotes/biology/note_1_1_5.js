export const note_biology_1_1_5 = {
  blocks: [
    {
      id: 'obj-heart-structure',
      type: 'objective',
      data: {
        text: 'Describe the structure of the mammalian heart including the four chambers, valves, and their roles. Explain the sequence of events in the cardiac cycle (atrial systole, ventricular systole, diastole). Calculate and interpret cardiac output.',
      },
    },
    {
      id: 'h-heart-structure',
      type: 'heading',
      data: { text: 'Structure of the Heart', level: 2 },
    },
    {
      id: 'p-heart-intro',
      type: 'paragraph',
      data: {
        text: 'The heart is a double pump located in the thorax. It is divided into left and right halves by the septum. Each half has an atrium (upper chamber, receives blood) and a ventricle (lower chamber, pumps blood out). The right side pumps deoxygenated blood to the lungs (pulmonary circuit); the left side pumps oxygenated blood to the rest of the body (systemic circuit).',
      },
    },
    {
      id: 'table-heart-chambers',
      type: 'comparisonTable',
      data: {
        caption: 'The four chambers of the heart and their functions',
        headers: ['Chamber', 'Receives blood from', 'Pumps blood to', 'Wall thickness'],
        rows: [
          ['Right atrium', 'Body (via superior and inferior vena cava — deoxygenated)', 'Right ventricle', 'Thin (low pressure pump)'],
          ['Right ventricle', 'Right atrium', 'Lungs (via pulmonary artery)', 'Moderately muscular'],
          ['Left atrium', 'Lungs (via pulmonary veins — oxygenated)', 'Left ventricle', 'Thin'],
          ['Left ventricle', 'Left atrium', 'Body (via aorta)', 'Very thick musular wall — highest pressure'],
        ],
      },
    },
    {
      id: 'callout-key-wall-thickness',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why is the Left Ventricle Wall Thicker?',
        text: 'The left ventricle must pump blood at high pressure around the entire body (systemic circulation — very long distance, high resistance). The right ventricle only pumps blood to the nearby lungs (pulmonary circulation — shorter distance, lower resistance). Therefore the left ventricle wall is much thicker and more muscular than the right ventricle. Ventricle walls are also thicker than atrial walls because ventricles generate the main pumping force.',
      },
    },
    {
      id: 'h-valves',
      type: 'heading',
      data: { text: 'Valves of the Heart', level: 2 },
    },
    {
      id: 'p-valves-intro',
      type: 'paragraph',
      data: {
        text: 'Valves ensure one-way blood flow through the heart, opening and closing passively in response to pressure differences on either side.',
      },
    },
    {
      id: 'table-valves',
      type: 'comparisonTable',
      data: {
        caption: 'Heart valves and their functions',
        headers: ['Valve', 'Location', 'Open when', 'Close when', 'Prevents'],
        rows: [
          ['Tricuspid (right AV)', 'Between right atrium and right ventricle', 'Atrial pressure > ventricular pressure', 'Ventricular pressure > atrial pressure (ventricular systole)', 'Backflow from right ventricle to right atrium'],
          ['Mitral / Bicuspid (left AV)', 'Between left atrium and left ventricle', 'Atrial pressure > ventricular pressure', 'Ventricular pressure > atrial pressure', 'Backflow from left ventricle to left atrium'],
          ['Pulmonary semilunar', 'Between right ventricle and pulmonary artery', 'Ventricular pressure > pulmonary artery pressure', 'Pulmonary pressure > ventricular pressure (relaxation)', 'Backflow from pulmonary artery into right ventricle'],
          ['Aortic semilunar', 'Between left ventricle and aorta', 'Ventricular pressure > aortic pressure', 'Aortic pressure > ventricular pressure (relaxation)', 'Backflow from aorta into left ventricle'],
        ],
      },
    },
    {
      id: 'svg-heart',
      type: 'svg',
      data: {
        caption: 'Schematic cross-section of the heart showing chambers, valves, and major blood vessels',
        svg: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" font-size="10">
  <rect width="420" height="320" fill="#f8f9ff" rx="8"/>
  <!-- Septum -->
  <line x1="210" y1="50" x2="210" y2="260" stroke="#888" stroke-width="2.5"/>
  <!-- Right atrium -->
  <rect x="70" y="60" width="130" height="80" rx="12" fill="#cce5ff" stroke="#3b78c3" stroke-width="1.5"/>
  <text x="135" y="95" text-anchor="middle" fill="#1a3a6b" font-weight="bold">Right</text>
  <text x="135" y="108" text-anchor="middle" fill="#1a3a6b" font-weight="bold">Atrium</text>
  <!-- Left atrium -->
  <rect x="220" y="60" width="130" height="80" rx="12" fill="#ffe0d0" stroke="#c05030" stroke-width="1.5"/>
  <text x="285" y="95" text-anchor="middle" fill="#7a2010" font-weight="bold">Left</text>
  <text x="285" y="108" text-anchor="middle" fill="#7a2010" font-weight="bold">Atrium</text>
  <!-- AV valves -->
  <line x1="105" y1="140" x2="165" y2="140" stroke="#3b78c3" stroke-width="2.5"/>
  <text x="135" y="136" text-anchor="middle" fill="#3b78c3" font-size="9">tricuspid</text>
  <line x1="245" y1="140" x2="305" y2="140" stroke="#c05030" stroke-width="2.5"/>
  <text x="275" y="136" text-anchor="middle" fill="#c05030" font-size="9">mitral</text>
  <!-- Right ventricle -->
  <path d="M70 145 Q70 260 135 260 Q200 260 200 145 Z" fill="#9dc8f5" stroke="#3b78c3" stroke-width="1.5"/>
  <text x="135" y="205" text-anchor="middle" fill="#1a3a6b" font-weight="bold">Right</text>
  <text x="135" y="220" text-anchor="middle" fill="#1a3a6b" font-weight="bold">Ventricle</text>
  <!-- Left ventricle (thicker walls implied by shape) -->
  <path d="M220 145 Q220 265 285 265 Q355 265 350 145 Z" fill="#f5a080" stroke="#c05030" stroke-width="2.5"/>
  <text x="285" y="205" text-anchor="middle" fill="#7a2010" font-weight="bold">Left</text>
  <text x="285" y="220" text-anchor="middle" fill="#7a2010" font-weight="bold">Ventricle</text>
  <!-- Vena cava -->
  <rect x="20" y="85" width="50" height="30" rx="4" fill="#9dc8f5" stroke="#3b78c3" stroke-width="1"/>
  <text x="45" y="98" text-anchor="middle" fill="#1a3a6b" font-size="9">Vena</text>
  <text x="45" y="110" text-anchor="middle" fill="#1a3a6b" font-size="9">Cava</text>
  <line x1="70" y1="100" x2="70" y2="100" stroke="#3b78c3" stroke-width="2"/>
  <!-- Aorta -->
  <rect x="350" y="85" width="50" height="30" rx="4" fill="#f5a080" stroke="#c05030" stroke-width="1"/>
  <text x="375" y="105" text-anchor="middle" fill="#7a2010" font-size="9">Aorta</text>
  <!-- Pulmonary artery -->
  <rect x="85" y="20" width="80" height="28" rx="4" fill="#9dc8f5" stroke="#3b78c3" stroke-width="1"/>
  <text x="125" y="32" text-anchor="middle" fill="#1a3a6b" font-size="9">Pulmonary</text>
  <text x="125" y="43" text-anchor="middle" fill="#1a3a6b" font-size="9">Artery</text>
  <!-- Pulmonary veins -->
  <rect x="250" y="20" width="80" height="28" rx="4" fill="#f5a080" stroke="#c05030" stroke-width="1"/>
  <text x="290" y="32" text-anchor="middle" fill="#7a2010" font-size="9">Pulmonary</text>
  <text x="290" y="43" text-anchor="middle" fill="#7a2010" font-size="9">Vein</text>
  <!-- Semilunar valves -->
  <text x="125" y="58" text-anchor="middle" fill="#3b78c3" font-size="8">(pulmonary valve)</text>
  <text x="290" y="58" text-anchor="middle" fill="#c05030" font-size="8">(aortic valve)</text>
  <!-- Labels key -->
  <rect x="10" y="280" width="12" height="12" fill="#cce5ff" stroke="#3b78c3"/>
  <text x="26" y="290" fill="#1a3a6b" font-size="9">Deoxygenated blood</text>
  <rect x="150" y="280" width="12" height="12" fill="#ffe0d0" stroke="#c05030"/>
  <text x="166" y="290" fill="#7a2010" font-size="9">Oxygenated blood</text>
</svg>`,
      },
    },
    {
      id: 'h-cardiac-cycle',
      type: 'heading',
      data: { text: 'The Cardiac Cycle', level: 2 },
    },
    {
      id: 'p-cardiac-cycle-intro',
      type: 'paragraph',
      data: {
        text: 'The cardiac cycle is the sequence of events that occurs with each heartbeat. It consists of systole (contraction) and diastole (relaxation). The average heart rate at rest is about 70 beats per minute, giving one complete cycle every ~0.8 seconds. The cycle is initiated by electrical impulses from the sinoatrial (SA) node — the natural pacemaker of the heart — located in the right atrium.',
      },
    },
    {
      id: 'table-cardiac-cycle',
      type: 'comparisonTable',
      data: {
        caption: 'Phases of the cardiac cycle',
        headers: ['Phase', 'Duration', 'Events', 'Valves open', 'Heart sound'],
        rows: [
          ['Atrial systole', '~0.1 s', 'SA node fires → both atria contract → blood pushed into ventricles', 'AV valves (tricuspid + mitral) open; semilunar valves closed', '—'],
          ['Ventricular systole', '~0.3 s', 'AV node delays signal → ventricles contract → pressure rises → blood ejected into arteries', 'Semilunar valves open (pressure exceeds artery pressure); AV valves snap shut → "lub" sound', '"lub" (1st sound — AV valves closing)'],
          ['Diastole (relaxation)', '~0.4 s', 'All chambers relax; ventricles refill passively; coronary arteries perfuse heart muscle', 'Semilunar valves snap shut → "dub" sound; AV valves reopen', '"dub" (2nd sound — semilunar valves closing)'],
        ],
      },
    },
    {
      id: 'callout-tip-lub-dub',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Heart Sounds: "Lub-Dub"',
        text: '"Lub" = 1st sound = atrioventricular (AV) valves closing at the START of ventricular systole. "Dub" = 2nd sound = semilunar valves closing at the END of ventricular systole (start of diastole). A heart murmur indicates faulty valve closure (turbulent blood flow).',
      },
    },
    {
      id: 'h-cardiac-output',
      type: 'heading',
      data: { text: 'Cardiac Output', level: 2 },
    },
    {
      id: 'eq-cardiac-output',
      type: 'equation',
      data: {
        html: 'Cardiac output (CO) = Stroke volume (SV) × Heart rate (HR)<br/>CO (mL min<sup>−1</sup>) = SV (mL beat<sup>−1</sup>) × HR (beats min<sup>−1</sup>)',
        caption: 'Cardiac output formula — at rest: 70 mL × 70 bpm ≈ 4900 mL min⁻¹ ≈ 5 L min⁻¹',
      },
    },
    {
      id: 'list-co-regulation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Sympathetic nervous system (noradrenaline) → increases heart rate and stroke volume',
          'Parasympathetic nervous system (vagus nerve, acetylcholine) → decreases heart rate',
          'Adrenaline (hormone, from adrenal medulla) → increases heart rate and force of contraction',
          'During exercise: CO can increase to 25–35 L min⁻¹ (both HR and SV increase)',
          'Starling\'s Law: greater venous return → greater stretch of ventricle walls → greater force of contraction → greater stroke volume',
        ],
      },
    },
    {
      id: 'callout-we-co',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Cardiac Output Calculation',
        text: 'A patient at rest has a heart rate of 72 beats per minute and a stroke volume of 68 mL per beat. Calculate their cardiac output.\n\nCO = SV × HR = 68 mL × 72 min⁻¹ = 4896 mL min⁻¹ ≈ 4.9 L min⁻¹\n\nDuring exercise, HR increases to 150 bpm and SV to 110 mL. CO = 110 × 150 = 16,500 mL min⁻¹ = 16.5 L min⁻¹.',
      },
    },
    {
      id: 'h-conduction-system',
      type: 'heading',
      data: { text: 'The Cardiac Conduction System', level: 2 },
    },
    {
      id: 'list-conduction',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'SA node (sinoatrial node) in right atrium wall — initiates the electrical impulse; natural pacemaker',
          'Impulse spreads across both atria → atria contract (atrial systole)',
          'AV node (atrioventricular node) at junction of atria and ventricles — delays impulse briefly (~0.1 s) to allow atria to finish contracting before ventricles begin',
          'Bundle of His — conducts impulse down the septum to the apex of the heart',
          'Purkinje fibres — spread impulse rapidly through ventricle walls from apex upward → both ventricles contract simultaneously (ventricular systole)',
        ],
      },
    },
    {
      id: 'callout-key-sa-node',
      type: 'callout',
      data: {
        style: 'key',
        title: 'SA Node = Pacemaker',
        text: 'The SA node sets the heart rate. It fires automatically at ~70 times per minute at rest. The AV node delays the impulse to ensure atria empty before ventricles contract. If the SA node is damaged, the AV node takes over at a slower rate (40–60 bpm). Artificial pacemakers can be implanted to take over this role.',
      },
    },
    {
      id: 'checklist-heart',
      type: 'checklist',
      data: {
        items: [
          { text: 'Name all four chambers and state what blood each receives and sends', checked: false },
          { text: 'Explain why the left ventricle wall is thicker than the right', checked: false },
          { text: 'Name all four valves and state what they prevent', checked: false },
          { text: 'Describe the three phases of the cardiac cycle in order', checked: false },
          { text: 'Explain what produces the "lub-dub" heart sounds', checked: false },
          { text: 'Calculate cardiac output given heart rate and stroke volume', checked: false },
          { text: 'State the role of the SA node, AV node, bundle of His, and Purkinje fibres', checked: false },
          { text: 'Explain Starling\'s Law', checked: false },
        ],
      },
    },
    {
      id: 'summary-heart',
      type: 'summary',
      data: {
        text: 'The heart has four chambers: right atrium → right ventricle (pulmonary circuit) → left atrium → left ventricle (systemic circuit). Four valves (tricuspid, mitral, pulmonary, aortic) ensure one-way blood flow; the "lub" sound = AV valves closing, "dub" = semilunar valves closing. The cardiac cycle: atrial systole (0.1 s) → ventricular systole (0.3 s) → diastole (0.4 s). Initiated by SA node impulse spreading via AV node → Bundle of His → Purkinje fibres. Cardiac output = stroke volume × heart rate (≈5 L min⁻¹ at rest); regulated by autonomic nervous system and adrenaline. Starling\'s Law: increased venous return → increased SV.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-heart-chambers', prompt: 'Name the four chambers and state what blood each receives and where it pumps to.' },
      { id: 'cue-2', blockId: 'table-valves', prompt: 'Name the two atrioventricular valves. When do they open and close?' },
      { id: 'cue-3', blockId: 'table-cardiac-cycle', prompt: 'Describe the three phases of the cardiac cycle including key events and valve positions.' },
      { id: 'cue-4', blockId: 'eq-cardiac-output', prompt: 'Write the cardiac output formula and calculate CO for a heart rate of 75 bpm and stroke volume of 80 mL.' },
      { id: 'cue-5', blockId: 'list-conduction', prompt: 'What is the role of the SA node? Describe how the electrical impulse travels through the heart.' },
    ],
    summaryText: 'Atria receive, ventricles pump. Left ventricle = thickest wall (pumps to body). AV valves prevent atria→ventricle backflow; semilunar valves prevent aorta/PA→ventricle backflow. Cycle: atrial systole → ventricular systole (AV close = "lub") → diastole (semilunar close = "dub"). SA node sets pace → AV node delays → His/Purkinje fibres spread. CO = SV × HR.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Cardiac output measurement', detail: 'Adult resting cardiac output is approximately 4.7–5.0 L/min. Elite athletes can achieve cardiac outputs of 35–40 L/min during maximal exercise due to enlarged left ventricle (eccentric hypertrophy) increasing stroke volume.', year: '2010', source: 'Levine BD, Exercise Cardiology', tags: ['heart', 'cardiac output'] },
  ],
};
