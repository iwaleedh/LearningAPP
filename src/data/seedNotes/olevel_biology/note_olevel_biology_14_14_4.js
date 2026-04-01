export const note_olevel_biology_14_14_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/14 Coordination And Response/14-5-1-homeostasis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define homeostasis and explain how blood glucose levels and body temperature are regulated by negative feedback.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Homeostasis?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Homeostasis Definition',
        text: '<strong>Homeostasis</strong> is the maintenance of a <strong>constant internal environment</strong> despite changes in external conditions.<br/><br/>Regulated variables include: <strong>blood glucose concentration</strong>, <strong>body temperature</strong> (37°C), <strong>blood water content</strong> (osmoregulation).<br/><br/>Homeostasis uses <strong>negative feedback</strong>: a change triggers a corrective response that returns conditions to normal.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Negative Feedback', level: 2 }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Negative feedback loop — the basis of homeostasis',
        svg: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="520" height="200" fill="#0a2e1a" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">Negative Feedback Loop</text>
  <!-- Boxes -->
  <rect x="20" y="60" width="100" height="40" rx="6" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="70" y="84" text-anchor="middle" font-size="11" fill="#166534">Normal level</text>
  <rect x="165" y="60" width="100" height="40" rx="6" fill="#44370a" stroke="#b45309" stroke-width="1.5"/>
  <text x="215" y="84" text-anchor="middle" font-size="11" fill="#92400e">Change detected</text>
  <rect x="315" y="60" width="100" height="40" rx="6" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="365" y="79" text-anchor="middle" font-size="11" fill="#991b1b">Corrective</text>
  <text x="365" y="93" text-anchor="middle" font-size="11" fill="#991b1b">response</text>
  <!-- Arrows -->
  <line x1="120" y1="80" x2="163" y2="80" stroke="#374151" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="265" y1="80" x2="313" y2="80" stroke="#374151" stroke-width="2" marker-end="url(#arr)"/>
  <!-- Feedback arrow back -->
  <path d="M415 100 Q415 155 260 155 Q110 155 110 100" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr2)"/>
  <text x="260" y="175" text-anchor="middle" font-size="10" fill="#3b82f6">Returns to normal (negative feedback)</text>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#374151"/>
    </marker>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Blood Glucose Regulation', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Blood glucose is regulated by the <strong>pancreas</strong>. When blood glucose rises (after a meal), <strong>beta cells</strong> of the pancreas secrete <strong>insulin</strong>. Insulin causes cells (especially liver and muscle) to take up glucose and convert it to <strong>glycogen</strong> (glycogenesis), lowering blood glucose. When blood glucose falls, <strong>alpha cells</strong> secrete <strong>glucagon</strong>, causing the liver to convert glycogen back to glucose (glycogenolysis), raising blood glucose.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Insulin vs glucagon in blood glucose regulation',
        headers: ['Feature', 'Insulin', 'Glucagon'],
        rows: [
          ['Produced by', 'Beta cells of pancreas', 'Alpha cells of pancreas'],
          ['Released when', 'Blood glucose too HIGH', 'Blood glucose too LOW'],
          ['Effect on liver', 'Converts glucose → glycogen (glycogenesis)', 'Converts glycogen → glucose (glycogenolysis)'],
          ['Overall effect', 'LOWERS blood glucose', 'RAISES blood glucose']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Temperature Regulation (Thermoregulation)', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Thermoregulation Responses',
        text: '<strong>When too HOT:</strong><br/>• Sweating — evaporation removes heat<br/>• Vasodilation — blood vessels near skin dilate → more heat lost by radiation<br/>• Hair lies flat (erector muscles relax)<br/><br/><strong>When too COLD:</strong><br/>• Shivering — muscle contractions generate heat<br/>• Vasoconstriction — blood vessels near skin narrow → less heat lost<br/>• Hair stands up — traps air for insulation<br/>• Increased metabolic rate<br/><br/><strong>Detected by:</strong> hypothalamus in brain (monitors blood temperature).'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Vasoconstriction does NOT stop blood flowing to the skin — it reduces blood flow. Also, blood vessels do NOT move towards/away from the skin — only the <strong>diameter of the vessels changes</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Homeostasis maintains constant internal conditions via negative feedback. Blood glucose: regulated by insulin (lowers) and glucagon (raises) from the pancreas. Temperature: regulated by sweating/vasodilation (cooling) or shivering/vasoconstriction (warming), detected by hypothalamus.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Homeostasis = maintaining constant internal environment via negative feedback. Insulin lowers blood glucose; glucagon raises it. Hypothalamus detects temperature changes.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Define homeostasis.', answer: 'Homeostasis is the maintenance of a constant internal environment despite external changes, using negative feedback mechanisms.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What happens when blood glucose rises above normal?', answer: 'The pancreas releases insulin, causing cells to take up glucose and the liver to convert glucose to glycogen (glycogenesis), lowering blood glucose back to normal.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Explain how the body responds when body temperature is too high.', answer: 'Sweating increases (evaporation cools the skin), vasodilation widens skin capillaries so more heat is lost by radiation, and hair lies flat.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_14_14_4;
