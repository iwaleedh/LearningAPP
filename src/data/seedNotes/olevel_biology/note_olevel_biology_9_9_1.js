export const note_olevel_biology_9_9_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/9 Transport In Animals/9-1-3-the-mammalian-heart.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the structure of the mammalian heart, trace the route of blood through its chambers and valves, and explain the function of coronary arteries and the left ventricle\'s thick wall.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Structure of the Heart', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The mammalian heart is a <strong>muscular pump</strong> with <strong>four chambers</strong>: two upper chambers called <strong>atria</strong> (singular: atrium) that receive blood, and two lower chambers called <strong>ventricles</strong> that pump blood out. The heart is divided left and right by a muscular wall called the <strong>septum</strong>, which prevents oxygenated and deoxygenated blood from mixing.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Four Chambers of the Heart',
        text: '<strong>Right atrium:</strong> receives deoxygenated blood from the body via the vena cava.<br/><strong>Right ventricle:</strong> pumps deoxygenated blood to the lungs via the pulmonary artery.<br/><strong>Left atrium:</strong> receives oxygenated blood from the lungs via the pulmonary vein.<br/><strong>Left ventricle:</strong> pumps oxygenated blood to the whole body via the aorta. Has the THICKEST wall.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Valves in the Heart', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Valves ensure blood flows in <strong>one direction only</strong>. There are two types:<br/><br/><strong>Atrioventricular (AV) valves</strong> — between atria and ventricles. They prevent backflow of blood from ventricles into atria when ventricles contract.<br/><br/><strong>Semilunar valves</strong> — at the exits of the ventricles (in aorta and pulmonary artery). They prevent backflow from arteries back into ventricles when ventricles relax.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Route of Blood Through the Heart', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Deoxygenated blood arrives at the <strong>right atrium</strong> via the <strong>vena cava</strong>.' },
          { text: 'Right atrium contracts → blood passes through AV valve into <strong>right ventricle</strong>.' },
          { text: 'Right ventricle contracts → blood pushed through semilunar valve into <strong>pulmonary artery</strong> → to the lungs.' },
          { text: 'Blood is oxygenated in the lungs; returns via the <strong>pulmonary vein</strong> to the <strong>left atrium</strong>.' },
          { text: 'Left atrium contracts → blood passes through AV valve into <strong>left ventricle</strong>.' },
          { text: 'Left ventricle contracts → blood pushed through semilunar valve into the <strong>aorta</strong> → to the body.' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Why is the Left Ventricle Wall Thicker?', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'The <strong>left ventricle</strong> has a much thicker, more muscular wall than the right ventricle. This is because it must pump blood at <strong>high pressure</strong> all the way around the entire body (systemic circuit), which is a longer distance and requires much more force than the right ventricle, which only pumps blood the shorter distance to the lungs.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Coronary Arteries', level: 2 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<strong>Coronary arteries</strong> branch from the aorta and supply the heart muscle itself with oxygenated blood and nutrients. The heart muscle must work continuously, so it has its own blood supply. If coronary arteries become blocked (e.g. by fatty deposits), heart muscle cells are deprived of oxygen and die — this is a <strong>heart attack</strong> (myocardial infarction).'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Labelled diagram of the human heart showing chambers, valves, and major blood vessels',
        svg: `<svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="480" height="380" fill="#fff0f0" rx="12"/>
  <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c3aed">The Mammalian Heart</text>
  <!-- Heart outline -->
  <path d="M240 340 Q120 260 100 180 Q80 100 160 90 Q200 85 240 130 Q280 85 320 90 Q400 100 380 180 Q360 260 240 340 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="2.5"/>
  <!-- Septum -->
  <line x1="240" y1="130" x2="240" y2="310" stroke="#7f1d1d" stroke-width="2.5" stroke-dasharray="5,3"/>
  <!-- Right atrium -->
  <ellipse cx="180" cy="145" rx="50" ry="35" fill="#fed7d7" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="180" y="141" text-anchor="middle" font-size="10" font-weight="bold" fill="#7f1d1d">Right</text>
  <text x="180" y="154" text-anchor="middle" font-size="10" font-weight="bold" fill="#7f1d1d">Atrium</text>
  <!-- Left atrium -->
  <ellipse cx="300" cy="145" rx="50" ry="35" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="300" y="141" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Left</text>
  <text x="300" y="154" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Atrium</text>
  <!-- Right ventricle -->
  <path d="M130 200 Q140 280 200 300 Q220 310 240 310 L240 200 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="182" y="262" text-anchor="middle" font-size="10" font-weight="bold" fill="#7f1d1d">Right</text>
  <text x="182" y="275" text-anchor="middle" font-size="10" font-weight="bold" fill="#7f1d1d">Ventricle</text>
  <!-- Left ventricle (thicker wall) -->
  <path d="M240 200 L240 310 Q260 310 280 300 Q340 280 350 200 Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="300" y="262" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Left</text>
  <text x="300" y="275" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Ventricle</text>
  <!-- Vena cava (top right, into right atrium) -->
  <rect x="100" y="50" width="18" height="55" fill="#fca5a5" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="60" y="65" text-anchor="middle" font-size="9" fill="#b91c1c">Vena cava</text>
  <text x="60" y="77" text-anchor="middle" font-size="9" fill="#b91c1c">(deoxy.)</text>
  <line x1="85" y1="72" x2="100" y2="95" stroke="#b91c1c" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Aorta (top left, from left ventricle) -->
  <path d="M340 50 Q370 60 360 90" fill="none" stroke="#3b82f6" stroke-width="3"/>
  <text x="390" y="55" text-anchor="middle" font-size="9" fill="#1d4ed8">Aorta</text>
  <text x="390" y="67" text-anchor="middle" font-size="9" fill="#1d4ed8">(oxy., to body)</text>
  <!-- Pulmonary artery (right vent → lungs) -->
  <path d="M155 90 Q180 60 210 55" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <text x="145" y="48" text-anchor="middle" font-size="9" fill="#ef4444">Pulmonary</text>
  <text x="145" y="60" text-anchor="middle" font-size="9" fill="#ef4444">artery</text>
  <!-- Pulmonary vein (lungs → left atrium) -->
  <path d="M310 55 Q330 60 330 100" fill="none" stroke="#60a5fa" stroke-width="2.5"/>
  <text x="355" y="50" text-anchor="middle" font-size="9" fill="#1d4ed8">Pulmonary</text>
  <text x="355" y="62" text-anchor="middle" font-size="9" fill="#1d4ed8">vein (oxy.)</text>
  <!-- AV valve label -->
  <text x="240" y="198" text-anchor="middle" font-size="8" fill="#7f1d1d">← AV valves →</text>
  <!-- Septum label -->
  <text x="240" y="340" text-anchor="middle" font-size="9" fill="#7f1d1d">Septum</text>
  <!-- Thick wall arrow -->
  <line x1="360" y1="240" x2="350" y2="255" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arrP)"/>
  <text x="390" y="237" text-anchor="middle" font-size="9" fill="#7c3aed">Thick</text>
  <text x="390" y="248" text-anchor="middle" font-size="9" fill="#7c3aed">muscular</text>
  <text x="390" y="259" text-anchor="middle" font-size="9" fill="#7c3aed">wall</text>
  <defs>
    <marker id="arrP" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Right vs Left',
        text: 'Remember: in diagrams of the heart, the <strong>left side of the heart appears on the RIGHT side of the page</strong> (because you are looking at the heart from the front as if it were facing you). The left ventricle has a thicker wall. The pulmonary artery (leaving the right ventricle) carries <strong>deoxygenated</strong> blood — it is an artery that does NOT carry oxygenated blood!'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The heart has four chambers: right atrium and ventricle (deoxygenated blood to lungs) and left atrium and ventricle (oxygenated blood to body). Valves prevent backflow. The left ventricle has the thickest wall (pumps to whole body). Coronary arteries supply the heart muscle with blood.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Heart: 4 chambers, septum separates left/right. Right side → lungs (pulmonary). Left side → body (systemic). Left ventricle wall thickest. Valves prevent backflow.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Trace the route of blood through the heart from the vena cava to the aorta.',
        answer: 'Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'Explain why the left ventricle has a thicker wall than the right ventricle.',
        answer: 'The left ventricle must pump blood at high pressure all the way around the body (systemic circuit), requiring much more force than the right ventricle, which only pumps blood to the nearby lungs.'
      },
      {
        id: 'cue-3',
        blockId: 'para-2',
        prompt: 'State the function of the valves in the heart.',
        answer: 'Valves ensure blood flows in one direction only, preventing backflow. AV valves prevent backflow from ventricles to atria; semilunar valves prevent backflow from arteries to ventricles.'
      },
      {
        id: 'cue-4',
        blockId: 'para-4',
        prompt: 'What are coronary arteries and what happens if they become blocked?',
        answer: 'Coronary arteries supply the heart muscle with oxygenated blood. If blocked by fatty deposits, heart muscle cells are deprived of oxygen and die, causing a heart attack.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_9_9_1;
