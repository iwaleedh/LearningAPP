export const note_biology_1_1_5 = {
  blocks: [
    {
      id: 'obj-heart-structure',
      type: 'objective',
      data: {
        text: 'Explain why large organisms need a mass transport system. Describe the closed, double circulatory system of mammals. Describe the structure of the mammalian heart (chambers, valves, major vessels). Explain the sequence of events in the cardiac cycle and interpret pressure–time graphs.',
      },
    },
    {
      id: 'h-mass-transport',
      type: 'heading',
      data: { text: 'Why Do Organisms Need a Circulatory System?', level: 2 },
    },
    {
      id: 'list-mass-transport',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Single-celled organisms obtain O₂ and glucose directly from surroundings — diffusion distances are short',
          'Large, multicellular organisms have many cell layers; diffusion alone would be far too slow to supply every cell',
          'A mass transport system solves this: it bulk-moves substances through vessels at speed',
          'Mass transport: brings substances quickly between exchange surfaces; maintains diffusion gradients; supplies reactants and removes waste',
          'The digestive system and lungs are both connected to the circulatory system as exchange surfaces',
        ],
      },
    },
    {
      id: 'h-double-circulation',
      type: 'heading',
      data: { text: 'Double Circulatory System', level: 2 },
    },
    {
      id: 'p-double-circulation',
      type: 'paragraph',
      data: {
        text: 'Mammals have a closed, double circulatory system — the blood is always contained within vessels and passes through the heart twice per complete circuit. The right side pumps deoxygenated blood to the lungs (pulmonary circulation); blood returns oxygenated to the left side which pumps it at high pressure to the rest of the body (systemic circulation). This double system maintains high blood pressure throughout and keeps oxygenated and deoxygenated blood separate.',
      },
    },
    {
      id: 'svg-double-circulation',
      type: 'svg',
      data: {
        caption: 'Double circulatory system: pulmonary (right side → lungs) and systemic (left side → body)',
        svg: `<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.txt{fill:#1f2937;} .dim{fill:#6b7280;} .oxy{fill:#fee2e2;stroke:#b91c1c;stroke-width:1.5;} .deoxy{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5;} .heart{fill:#fce7f3;stroke:#9d174d;stroke-width:2;}</style>
    <marker id="arr-r" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#b91c1c"/></marker>
    <marker id="arr-b" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#1d4ed8"/></marker>
  </defs>
  <!-- Heart box -->
  <rect x="195" y="120" width="130" height="100" rx="12" class="heart"/>
  <text x="260" y="158" text-anchor="middle" font-weight="bold" fill="#9d174d" font-size="13">HEART</text>
  <text x="222" y="178" text-anchor="middle" fill="#9d174d" font-size="10">Right side</text>
  <text x="298" y="178" text-anchor="middle" fill="#9d174d" font-size="10">Left side</text>
  <line x1="260" y1="128" x2="260" y2="212" stroke="#9d174d" stroke-width="1.5" stroke-dasharray="4,2"/>
  <!-- Lungs box -->
  <rect x="170" y="20" width="180" height="52" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="260" y="42" text-anchor="middle" font-weight="bold" fill="#0284c7" font-size="13">LUNGS</text>
  <text x="260" y="58" text-anchor="middle" class="dim" font-size="10">Gas exchange</text>
  <!-- Body tissues box -->
  <rect x="170" y="268" width="180" height="52" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="260" y="288" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="13">BODY TISSUES</text>
  <text x="260" y="304" text-anchor="middle" class="dim" font-size="10">Oxygen delivered, CO₂ removed</text>
  <!-- Pulmonary artery: right side → lungs (deoxygenated, blue) -->
  <path d="M 225 120 L 225 72" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr-b)"/>
  <text x="155" y="100" text-anchor="middle" fill="#1d4ed8" font-size="10">Pulmonary</text>
  <text x="155" y="113" text-anchor="middle" fill="#1d4ed8" font-size="10">artery</text>
  <!-- Pulmonary vein: lungs → left side (oxygenated, red) -->
  <path d="M 295 72 L 295 120" stroke="#b91c1c" stroke-width="2" marker-end="url(#arr-r)"/>
  <text x="360" y="100" text-anchor="middle" fill="#b91c1c" font-size="10">Pulmonary</text>
  <text x="360" y="113" text-anchor="middle" fill="#b91c1c" font-size="10">vein</text>
  <!-- Aorta: left side → body (oxygenated, red) -->
  <path d="M 295 220 L 295 268" stroke="#b91c1c" stroke-width="2" marker-end="url(#arr-r)"/>
  <text x="370" y="248" text-anchor="middle" fill="#b91c1c" font-size="10">Aorta</text>
  <!-- Vena cava: body → right side (deoxygenated, blue) -->
  <path d="M 225 268 L 225 220" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr-b)"/>
  <text x="150" y="248" text-anchor="middle" fill="#1d4ed8" font-size="10">Vena cava</text>
  <!-- Labels -->
  <text x="68" y="172" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="bold">PULMONARY</text>
  <text x="68" y="186" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="bold">CIRCULATION</text>
  <text x="452" y="172" text-anchor="middle" fill="#b91c1c" font-size="11" font-weight="bold">SYSTEMIC</text>
  <text x="452" y="186" text-anchor="middle" fill="#b91c1c" font-size="11" font-weight="bold">CIRCULATION</text>
  <!-- Legend -->
  <rect x="30" y="300" width="14" height="10" fill="#fee2e2" stroke="#b91c1c" stroke-width="1"/>
  <text x="48" y="310" class="dim" font-size="10">Oxygenated blood</text>
  <rect x="160" y="300" width="14" height="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1"/>
  <text x="178" y="310" class="dim" font-size="10">Deoxygenated blood</text>
</svg>`,
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
      id: 'table-heart-adaptations',
      type: 'comparisonTable',
      data: {
        caption: 'Structural adaptations of heart components and their functions',
        headers: ['Structure', 'Adaptation / feature', 'Function'],
        rows: [
          ['Left ventricle', 'Much thicker muscle than right ventricle', 'Must pump blood all the way round the body (systemic circulation — long distance, high resistance); right ventricle only pumps to nearby lungs'],
          ['Ventricles', 'Thicker walls than atria', 'Pump blood out of the heart; atria only pump blood into the ventricles over a short distance'],
          ['Atrioventricular (AV) valves', 'Attached to heart wall by valve tendons (cords)', 'Prevent backflow of blood from ventricles into atria; tendons prevent valves inverting under high pressure'],
          ['Semilunar (SL) valves', 'Three cusps at exit of ventricles', 'Prevent backflow of blood from aorta or pulmonary artery back into the ventricles'],
          ['Coronary arteries', 'Branch across surface of heart', 'Supply the heart muscle with oxygenated blood; heart cannot use blood inside its own chambers'],
        ],
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
      id: 'h-pressure-vol-analysis',
      type: 'heading',
      data: { text: 'Analysing the Cardiac Cycle Graph', level: 2 },
    },
    {
      id: 'p-pressure-vol-intro',
      type: 'paragraph',
      data: {
        text: 'A pressure–time graph of the cardiac cycle plots the pressure in the left atrium, left ventricle, and aorta over one heartbeat (~0.8 s). The points where the lines cross indicate when valves open and close.',
      },
    },
    {
      id: 'svg-cardiac-cycle-graph',
      type: 'svg',
      data: {
        caption: 'Pressure–time graph of the cardiac cycle showing key events (A–E)',
        svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.ax{stroke:#9ca3af;stroke-width:1.5;fill:none;} .txt{fill:#1f2937;} .dim{fill:#6b7280;} .ven{stroke:#1d4ed8;stroke-width:2;fill:none;} .aor{stroke:#b91c1c;stroke-width:2;fill:none;} .atr{stroke:#16a34a;stroke-width:1.5;fill:none;stroke-dasharray:6,3;}</style>
  </defs>
  <!-- Axes -->
  <line x1="60" y1="280" x2="520" y2="280" class="ax"/>
  <line x1="60" y1="20" x2="60" y2="280" class="ax"/>
  <!-- X axis labels -->
  <text x="60" y="298" text-anchor="middle" class="dim" font-size="11">0</text>
  <text x="175" y="298" text-anchor="middle" class="dim" font-size="11">0.2</text>
  <text x="290" y="298" text-anchor="middle" class="dim" font-size="11">0.4</text>
  <text x="405" y="298" text-anchor="middle" class="dim" font-size="11">0.6</text>
  <text x="510" y="298" text-anchor="middle" class="dim" font-size="11">0.8</text>
  <text x="290" y="318" text-anchor="middle" class="dim" font-size="11">Time / s</text>
  <!-- Y axis labels -->
  <text x="52" y="284" text-anchor="end" class="dim" font-size="10">0</text>
  <text x="52" y="220" text-anchor="end" class="dim" font-size="10">5</text>
  <text x="52" y="156" text-anchor="end" class="dim" font-size="10">10</text>
  <text x="52" y="92" text-anchor="end" class="dim" font-size="10">15</text>
  <text x="52" y="28" text-anchor="end" class="dim" font-size="10">20</text>
  <text x="18" y="160" text-anchor="middle" class="dim" font-size="11" transform="rotate(-90,18,160)">Pressure / kPa</text>
  <!-- Grid lines (faint) -->
  <line x1="60" y1="220" x2="520" y2="220" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="60" y1="156" x2="520" y2="156" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="60" y1="92" x2="520" y2="92" stroke="#e5e7eb" stroke-width="1"/>
  <!-- Left ventricle pressure curve (blue) -->
  <!-- Diastole: low ~1 kPa; atrial systole: slight rise; ventricular systole: rises sharply to ~16 kPa; falls back -->
  <path d="M 60,268 L 120,264 L 155,262 L 175,255 L 195,240 L 210,200 L 225,140 L 245,64 L 265,52 L 285,68 L 305,130 L 320,186 L 335,230 L 355,256 L 400,264 L 460,266 L 520,268" class="ven"/>
  <!-- Aorta pressure curve (red — stays higher, smoother) -->
  <path d="M 60,164 L 120,168 L 165,172 L 195,176 L 215,186 L 235,136 L 255,76 L 275,56 L 295,64 L 310,88 L 330,118 L 350,136 L 385,148 L 430,156 L 480,160 L 520,164" class="aor"/>
  <!-- Left atrium pressure curve (green dashed — low, peaks during atrial systole) -->
  <path d="M 60,256 L 100,255 L 125,248 L 145,238 L 165,248 L 190,256 L 210,260 L 250,258 L 300,256 L 330,252 L 365,248 L 400,250 L 440,253 L 480,255 L 520,256" class="atr"/>
  <!-- Key points A-E -->
  <!-- A: end diastole, before atrial systole (~0.1s, atrial pressure slightly > ventricular) -->
  <circle cx="120" cy="264" r="5" fill="#7c3aed"/>
  <text x="114" y="248" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">A</text>
  <!-- B: AV valve closes (ventricular pressure crosses atrial, ~0.22s) -->
  <circle cx="195" cy="240" r="5" fill="#7c3aed"/>
  <text x="189" y="224" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">B</text>
  <!-- C: aortic valve opens (ventricular exceeds aortic, ~0.28s) -->
  <circle cx="230" cy="162" r="5" fill="#7c3aed"/>
  <text x="224" y="146" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">C</text>
  <!-- D: aortic valve closes (ventricular falls below aortic, ~0.5s) -->
  <circle cx="320" cy="140" r="5" fill="#7c3aed"/>
  <text x="314" y="124" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">D</text>
  <!-- E: AV valve reopens (atrial > ventricular again, ~0.6s) -->
  <circle cx="380" cy="250" r="5" fill="#7c3aed"/>
  <text x="374" y="234" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">E</text>
  <!-- Phase labels -->
  <text x="130" y="36" text-anchor="middle" fill="#1d4ed8" font-size="10" font-weight="bold">ATRIAL SYSTOLE</text>
  <text x="260" y="36" text-anchor="middle" fill="#b91c1c" font-size="10" font-weight="bold">VENTRICULAR SYSTOLE</text>
  <text x="440" y="36" text-anchor="middle" fill="#16a34a" font-size="10" font-weight="bold">DIASTOLE</text>
  <line x1="70" y1="42" x2="175" y2="42" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="185" y1="42" x2="335" y2="42" stroke="#b91c1c" stroke-width="1"/>
  <line x1="345" y1="42" x2="510" y2="42" stroke="#16a34a" stroke-width="1"/>
  <!-- Legend -->
  <line x1="70" y1="315" x2="95" y2="315" class="ven"/>
  <text x="99" y="319" class="dim" font-size="10">Left ventricle</text>
  <line x1="180" y1="315" x2="205" y2="315" class="aor"/>
  <text x="209" y="319" class="dim" font-size="10">Aorta</text>
  <line x1="285" y1="315" x2="310" y2="315" class="atr"/>
  <text x="314" y="319" class="dim" font-size="10">Left atrium</text>
  <circle cx="420" cy="315" r="4" fill="#7c3aed"/>
  <text x="428" y="319" class="dim" font-size="10">Key events (A–E)</text>
</svg>`,
      },
    },
    {
      id: 'table-pressure-events',
      type: 'comparisonTable',
      data: {
        caption: 'Key events on the cardiac cycle pressure–time graph',
        headers: ['Point', 'Event', 'Valve changes'],
        rows: [
          ['A', 'End of diastole — atrium full; atrial pressure just exceeds ventricular', 'AV valve is open; SL valves closed'],
          ['A→B', 'Atrial systole — atrium contracts; blood pushed into ventricle; ventricular pressure rises slightly', 'AV valve remains open'],
          ['B', 'Beginning of ventricular systole — ventricular pressure rises above atrial pressure', 'AV valve closes (→ "lub" sound)'],
          ['B→C', 'Ventricular pressure rises; blood not yet ejected (isovolumetric contraction)', 'Both sets of valves closed'],
          ['C', 'Ventricular pressure exceeds aortic pressure — blood ejected', 'SL (aortic) valve opens'],
          ['D', 'Ventricular systole ends; ventricle relaxes; pressure falls below aortic', 'SL valve closes (→ "dub" sound)'],
          ['E', 'Diastole — atrial pressure exceeds ventricular (atrium has filled); blood flows passively into ventricle', 'AV valve reopens'],
        ],
      },
    },
    {
      id: 'callout-we-heartrate',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculating Heart Rate from a Graph',
        text: 'From a graph, one complete cardiac cycle lasts 0.7 s.\n\nStep 1: 1 cycle = 0.7 s → 1 ÷ 0.7 = 1.43 cycles per second\n\nStep 2: 1.43 × 60 = 85.7 beats per minute\n\nHeart rate ≈ 86 beats min⁻¹\n\nNote: cardiac output = heart rate × stroke volume. If SV = 75 mL, CO = 86 × 75 = 6450 mL min⁻¹ ≈ 6.5 L min⁻¹.',
      },
    },
    {
      id: 'callout-tip-graph',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Interpreting the Cardiac Cycle Graph',
        text: 'Exam tip: where two pressure lines cross = a valve opens or closes. Ventricular pressure crosses ABOVE atrial pressure → AV valve closes ("lub"). Ventricular pressure crosses ABOVE aortic pressure → SL valve opens. Ventricular pressure drops BELOW aortic → SL valve closes ("dub"). Ventricular pressure drops BELOW atrial → AV valve opens.',
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
          { text: 'Explain why large organisms need a mass transport system rather than relying on diffusion', checked: false },
          { text: 'Describe the difference between a single and double circulatory system', checked: false },
          { text: 'Name all four chambers and state what blood each receives and sends', checked: false },
          { text: 'Explain why the left ventricle wall is thicker than the right', checked: false },
          { text: 'Name all four valves and state what they prevent', checked: false },
          { text: 'Describe the three phases of the cardiac cycle in order', checked: false },
          { text: 'Explain what produces the "lub-dub" heart sounds and at which valve events', checked: false },
          { text: 'Identify points A–E on a cardiac cycle pressure–time graph and state the events at each', checked: false },
          { text: 'Calculate heart rate from a graph and then calculate cardiac output', checked: false },
          { text: 'State the role of the SA node, AV node, bundle of His, and Purkinje fibres', checked: false },
        ],
      },
    },
    {
      id: 'summary-heart',
      type: 'summary',
      data: {
        text: 'Large organisms need a mass transport (circulatory) system because diffusion alone is too slow over long distances. Mammals have a closed, double circulatory system: pulmonary (heart → lungs → heart) and systemic (heart → body → heart). Heart: four chambers separated by septum; left ventricle wall thickest (pumps to body). Four valves (tricuspid, mitral, pulmonary, aortic) ensure one-way blood flow. Cardiac cycle: atrial systole (0.1 s) → ventricular systole (0.3 s) → diastole (0.4 s). AV valve closure = "lub"; SL valve closure = "dub". On the pressure–time graph, valve events occur at curve crossings (A = diastole end; B = AV closes; C = SL opens; D = SL closes; E = AV reopens). Cardiac output = stroke volume × heart rate. SA node → AV node → Bundle of His → Purkinje fibres.',
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
