export const note_olevel_biology_9_9_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/9 Transport In Animals/9-1-1-circulatory-system.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Compare single and double circulatory systems, explain the advantages of double circulation in mammals, and describe the two circuits of the mammalian circulatory system.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why Do Animals Need a Circulatory System?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Multicellular animals are too large for substances to reach all cells by diffusion alone. A <strong>circulatory system</strong> uses a pumping heart and blood vessels to transport oxygen, nutrients, hormones, and waste products around the body efficiently. Blood is the transport medium.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Single Circulation (Fish)', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Fish have a <strong>single circulation</strong>: blood passes through the heart <strong>once</strong> for each complete circuit of the body. The route is: heart → gills (gas exchange) → body tissues → heart. Because blood loses pressure as it passes through the gills, it arrives at body tissues at lower pressure, making it less efficient at delivering oxygen and nutrients quickly.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Double Circulation (Mammals)', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Mammals (including humans) have a <strong>double circulation</strong>: blood passes through the heart <strong>twice</strong> for each complete circuit of the body. There are two separate loops:<br/><br/><strong>1. Pulmonary circuit:</strong> heart → lungs (oxygenation) → heart<br/><strong>2. Systemic circuit:</strong> heart → body organs and tissues → heart'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Advantages of Double Circulation',
        text: '<strong>1. Higher pressure:</strong> Blood is repressurised in the heart between the pulmonary and systemic circuits, so it reaches body tissues at higher pressure.<br/><strong>2. Faster delivery:</strong> Oxygen and nutrients are delivered to tissues more quickly and efficiently.<br/><strong>3. Oxygenated and deoxygenated blood are kept separate:</strong> Prevents mixing, ensuring organs always receive fully oxygenated blood.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Single vs double circulation',
        headers: ['Feature', 'Single Circulation (Fish)', 'Double Circulation (Mammals)'],
        rows: [
          ['Times blood passes through heart per circuit', 'Once', 'Twice'],
          ['Pressure to body organs', 'Low (pressure drops at gills)', 'High (repressurised after lungs)'],
          ['Separation of oxygenated/deoxygenated blood', 'No (mixed)', 'Yes (separate circuits)'],
          ['Efficiency', 'Less efficient', 'More efficient'],
          ['Example organism', 'Fish', 'Humans, mammals']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Double circulation in mammals — pulmonary and systemic circuits',
        svg: `<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="480" height="340" fill="#532407" rx="12"/>
  <text x="240" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c3aed">Double Circulation in Mammals</text>
  <!-- LUNGS box -->
  <rect x="160" y="40" width="160" height="55" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="240" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">LUNGS</text>
  <text x="240" y="82" text-anchor="middle" font-size="10" fill="#1d4ed8">Gas exchange (oxygenation)</text>
  <!-- HEART box -->
  <rect x="170" y="145" width="140" height="60" rx="8" fill="#4a1040" stroke="#db2777" stroke-width="2.5"/>
  <text x="240" y="172" text-anchor="middle" font-size="14" font-weight="bold" fill="#be185d">HEART</text>
  <text x="240" y="188" text-anchor="middle" font-size="10" fill="#be185d">pumps blood</text>
  <!-- BODY box -->
  <rect x="160" y="255" width="160" height="55" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="240" y="280" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">BODY ORGANS</text>
  <text x="240" y="296" text-anchor="middle" font-size="10" fill="#166534">Tissues receive O₂, nutrients</text>
  <!-- PULMONARY circuit - left side (deoxygenated up, oxygenated down) -->
  <!-- Up: deoxygenated heart→lungs (right side of heart) -->
  <line x1="195" y1="145" x2="195" y2="98" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="100" y="125" text-anchor="middle" font-size="10" fill="#ef4444">pulmonary</text>
  <text x="100" y="137" text-anchor="middle" font-size="10" fill="#ef4444">artery</text>
  <text x="100" y="149" text-anchor="middle" font-size="9" fill="#666">(deoxy.)</text>
  <!-- Down: oxygenated lungs→heart (left side) -->
  <line x1="215" y1="95" x2="215" y2="145" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrB)"/>
  <text x="138" y="120" text-anchor="middle" font-size="10" fill="#1d4ed8">pulmonary</text>
  <text x="138" y="132" text-anchor="middle" font-size="10" fill="#1d4ed8">vein</text>
  <text x="138" y="144" text-anchor="middle" font-size="9" fill="#666">(oxy.)</text>
  <!-- SYSTEMIC circuit - right side -->
  <!-- Down: oxygenated heart→body -->
  <line x1="295" y1="205" x2="295" y2="255" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrB)"/>
  <text x="365" y="238" text-anchor="middle" font-size="10" fill="#1d4ed8">aorta</text>
  <text x="365" y="250" text-anchor="middle" font-size="9" fill="#666">(oxy.)</text>
  <!-- Up: deoxygenated body→heart -->
  <line x1="275" y1="255" x2="275" y2="205" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="340" y="225" text-anchor="middle" font-size="10" fill="#ef4444">vena cava</text>
  <text x="340" y="237" text-anchor="middle" font-size="9" fill="#666">(deoxy.)</text>
  <!-- Labels -->
  <text x="240" y="330" text-anchor="middle" font-size="10" fill="#3b82f6">Blue arrows = oxygenated blood</text>
  <text x="240" y="342" text-anchor="middle" font-size="10" fill="#ef4444">Red arrows = deoxygenated blood</text>
  <!-- Pulmonary circuit label -->
  <text x="52" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">Pulmonary</text>
  <text x="52" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">Circuit</text>
  <!-- Systemic circuit label -->
  <text x="428" y="230" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Systemic</text>
  <text x="428" y="243" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Circuit</text>
  <!-- Arrow defs -->
  <defs>
    <marker id="arrR" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#ef4444"/>
    </marker>
    <marker id="arrB" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Naming the Circuits',
        text: '<strong>Pulmonary circuit:</strong> heart ↔ lungs (pulmon = lung in Latin).<br/><strong>Systemic circuit:</strong> heart ↔ rest of the body.<br/>Remember: the right side of the heart pumps blood to the lungs; the left side pumps blood to the body.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Mammals have double circulation: the pulmonary circuit (heart → lungs → heart) and the systemic circuit (heart → body → heart). This keeps oxygenated and deoxygenated blood separate and maintains high pressure to body tissues, making it more efficient than single circulation in fish.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Double circulation: pulmonary circuit (heart-lungs) and systemic circuit (heart-body). Blood passes through the heart twice per cycle. More efficient than single circulation.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-3',
        prompt: 'Name the two circuits of the mammalian double circulation.',
        answer: 'The pulmonary circuit (heart to lungs and back) and the systemic circuit (heart to body organs and back).'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'Give two advantages of double circulation over single circulation.',
        answer: 'Higher blood pressure reaches body organs (blood is repressurised in the heart); oxygenated and deoxygenated blood are kept separate, so tissues always receive fully oxygenated blood.'
      },
      {
        id: 'cue-3',
        blockId: 'para-2',
        prompt: 'Explain why single circulation in fish is less efficient than double circulation in mammals.',
        answer: 'In single circulation, blood loses pressure as it passes through the gills, so it arrives at body tissues at low pressure, delivering oxygen and nutrients more slowly.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'How many times does blood pass through the heart per circuit in double circulation?',
        answer: 'Twice — once through the pulmonary circuit (to and from the lungs) and once through the systemic circuit (to and from the body).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_9_9_0;
