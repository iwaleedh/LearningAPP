/**
 * WBI15 — Topic 7.18: Integration of Homeostatic Systems
 * Interactions between thermoregulation, osmoregulation, glucose regulation
 */

export const note_biology_5_7_18 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand how thermoregulation, osmoregulation, and blood glucose regulation are integrated via nervous and endocrine systems to maintain homeostasis during rest, exercise, and stress.',
      },
    },
    {
      id: 'h-integration',
      type: 'heading',
      data: { text: 'Integration of Homeostatic Systems', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'The body maintains multiple physiological variables (temperature, osmolarity, glucose, pH, blood pressure) simultaneously via overlapping negative feedback loops. These systems are not isolated; rather, they interact and are coordinated by the central nervous system (hypothalamus) and endocrine system. During exercise, stress, or extreme environments, all systems respond in a coordinated manner.',
      },
    },
    {
      id: 'h-exercise',
      type: 'heading',
      data: { text: 'Homeostasis During Exercise', level: 3 },
    },
    {
      id: 'p-exercise-overview',
      type: 'paragraph',
      data: {
        text: 'During intense exercise, multiple homeostatic challenges occur simultaneously: (1) muscles consume ATP and generate heat; (2) metabolic rate increases 10–20 fold; (3) CO₂ and lactate accumulate; (4) blood glucose falls (muscles consume glucose); (5) dehydration occurs (water loss via sweat). The body coordinates responses across multiple systems.',
      },
    },
    {
      id: 'h-respiration-exercise',
      type: 'heading',
      data: { text: 'Respiratory Response', level: 4 },
    },
    {
      id: 'p-respiration-exercise',
      type: 'paragraph',
      data: {
        text: 'As exercise begins, CO₂ production increases. Chemoreceptors in the carotid body and aortic arch detect elevated arterial CO₂ and decreased O₂. They send signals to the respiratory centre in the medulla, increasing ventilation rate. Increased ventilation removes excess CO₂ and increases O₂ uptake. This response is rapid (seconds), preventing acidosis (pH drop) from lactate accumulation.',
      },
    },
    {
      id: 'p-respiration-mechanism',
      type: 'paragraph',
      data: {
        text: 'The ventilation increase during exercise is partly chemoreceptor-driven (CO₂, O₂, H⁺) and partly central command (feed-forward from motor cortex to respiratory centres). This dual control ensures ventilation increases before CO₂ accumulates significantly.',
      },
    },
    {
      id: 'h-glucose-exercise',
      type: 'heading',
      data: { text: 'Blood Glucose Response', level: 4 },
    },
    {
      id: 'p-glucose-exercise',
      type: 'paragraph',
      data: {
        text: 'During exercise, muscles consume glucose at rates far exceeding baseline. Blood glucose would fall dangerously if not maintained. Two hormones prevent hypoglycaemia: (1) glucagon: released by alpha cells when blood glucose starts to fall; promotes glycogenolysis and gluconeogenesis in liver; (2) epinephrine (adrenaline): released by adrenal medulla in response to sympathetic activation; promotes lipolysis and glycogenolysis.',
      },
    },
    {
      id: 'list-glucose-exercise',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Early exercise (<10 min): hepatic glycogenolysis supplies glucose; insulin levels fall (sympathetic inhibition)',
          'Prolonged exercise (>30 min): hepatic gluconeogenesis (from lactate, amino acids) becomes important; glucagon levels rise; cortisol rises (hypothalamic-pituitary-adrenal axis activated)',
          'Post-exercise: glucose consumption declines; insulin levels rise (parasympathetic recovery); liver glycogen is replenished',
        ],
      },
    },
    {
      id: 'h-temperature-exercise',
      type: 'heading',
      data: { text: 'Thermoregulation During Exercise', level: 4 },
    },
    {
      id: 'p-temperature-exercise',
      type: 'paragraph',
      data: {
        text: 'Exercise generates tremendous metabolic heat. Core body temperature can rise to 38–39°C during intense exercise. To prevent hyperthermia, multiple cooling mechanisms activate: (1) sweating: water evaporation from skin causes maximum cooling (~6 mL sweat per minute); (2) vasodilation: skin blood vessels dilate, increasing skin blood flow from ~10% to ~50% of cardiac output; (3) increased ventilation: breathing rate rises, some evaporative cooling from lungs; (4) postural changes: adopting horizontal position reduces metabolic rate.',
      },
    },
    {
      id: 'callout-heat-loss',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Heat Loss During Exercise',
        text: 'Sweating is the most important cooling mechanism. One litre of sweat evaporation removes ~2.4 MJ (2400 kJ) of heat. During marathon running, athletes can lose 1–2 L sweat per hour. This cooling capacity is vital; without sweating, core temperature would reach lethal levels (>42°C) within 15 minutes.',
      },
    },
    {
      id: 'h-osmoregulation-exercise',
      type: 'heading',
      data: { text: 'Osmoregulation & Fluid Balance During Exercise', level: 4 },
    },
    {
      id: 'p-osmoregulation-exercise',
      type: 'paragraph',
      data: {
        text: 'Sweating causes water and salt loss, which threatens both osmolarity and blood volume. The body responds: (1) ADH release increases (triggered by rising osmolarity and falling blood volume); collecting duct becomes more water-permeable, reducing urine volume (water conserved); (2) aldosterone increases (via RAAS activation by lower blood pressure); promotes Na⁺ reabsorption and water retention; (3) thirst mechanism activated (osmoreceptors in hypothalamus sense high osmolarity); athlete drinks to replace fluids.',
      },
    },
    {
      id: 'p-hyponatraemia',
      type: 'paragraph',
      data: {
        text: 'A danger in endurance sports: athletes may drink excessive pure water (hypotonic fluid) without adequate electrolytes, leading to hyponatraemia (low blood Na⁺). This can cause cerebral oedema and seizures. Sports drink formulations (with glucose and electrolytes) prevent this by maintaining osmolarity.',
      },
    },
    {
      id: 'h-stress-response',
      type: 'heading',
      data: { text: 'Integration: Acute Stress Response ("Fight or Flight")', level: 3 },
    },
    {
      id: 'p-stress-overview',
      type: 'paragraph',
      data: {
        text: 'During acute stress (threat, fear), the sympathetic nervous system is activated, triggering the "fight or flight" response. Multiple homeostatic systems shift to support immediate physical action. The response involves both rapid nervous signalling and slower hormonal changes.',
      },
    },
    {
      id: 'table-stress-response',
      type: 'comparisonTable',
      data: {
        headers: ['System', 'Response', 'Mechanism', 'Benefit'],
        rows: [
          [
            'Cardiovascular',
            'Heart rate ↑, blood pressure ↑',
            'Sympathetic activation (noradrenaline)',
            'Deliver oxygen & glucose to muscles',
          ],
          [
            'Respiratory',
            'Ventilation rate ↑',
            'Sympathetic + chemoreceptors',
            'Increase O₂ uptake, remove CO₂',
          ],
          [
            'Blood glucose',
            'Glucose ↑ (hyperglycaemia)',
            'Epinephrine + glucagon ↑; insulin ↓',
            'Fuel for muscle action',
          ],
          [
            'Muscle',
            'Blood flow ↑ (redirected from GI)',
            'Sympathetic vasoconstriction GI; vasodilation muscle',
            'Power output for fight/flight',
          ],
          [
            'Thermoregulation',
            'Heat production ↑; initial vasoconstriction',
            'Sympathetic activation; shivering in some',
            'Preparedness for action',
          ],
          [
            'Urination/defecation',
            'Often inhibited (or involuntary loss in extreme fear)',
            'Sympathetic suppression of parasympathetic tone',
            'Conserve energy, lightweight',
          ],
        ],
        caption: 'Acute stress response: integration of multiple homeostatic systems',
      },
    },
    {
      id: 'h-hpa-axis',
      type: 'heading',
      data: { text: 'Chronic Stress: Hypothalamic-Pituitary-Adrenal (HPA) Axis', level: 3 },
    },
    {
      id: 'p-hpa-axis',
      type: 'paragraph',
      data: {
        text: 'If stress is prolonged, a slower hormonal cascade occurs: (1) hypothalamus releases corticotropin-releasing hormone (CRH); (2) anterior pituitary releases adrenocorticotropic hormone (ACTH); (3) adrenal cortex releases cortisol. Cortisol increases glucose production (gluconeogenesis), suppresses immune function, and promotes fat and protein catabolism. This prepares the body for sustained stress but, if chronic, causes adverse effects (immunosuppression, muscle wasting, osteoporosis).',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'During exercise, CO₂ rises → ventilation increases (chemoreceptor reflex). Blood glucose falls → glucagon and epinephrine released → hepatic glucose production. Metabolic heat generated → sweating and vasodilation activate (thermoregulation). Dehydration → ADH and aldosterone rise → water retention. All systems coordinate via hypothalamus and sympathetic nervous system.',
        apply: 'An athlete runs a marathon (intense exercise, 2+ hours). Predict and explain: (a) blood glucose changes; (b) core temperature dynamics; (c) fluid balance response; (d) ventilation; (e) post-exercise recovery.',
        analyze: 'Why is the "fight or flight" response adaptive in acute stress but harmful if chronic? Discuss the long-term health consequences of chronic HPA axis activation.',
        evaluate: 'Integration of homeostatic systems during exercise is remarkable. What evolutionary pressures favoured this coordination? How does it relate to ancestral survival challenges?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the respiratory response during exercise and its triggers', checked: false },
          { text: 'Explain how blood glucose is maintained during prolonged exercise', checked: false },
          { text: 'Describe the thermoregulatory response to exercise', checked: false },
          { text: 'Explain how osmoregulation responds to dehydration from sweating', checked: false },
          { text: 'Describe the acute stress response and the HPA axis', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Exercise integration: (1) CO₂ rises → chemoreceptors detect → ventilation increases; (2) glucose consumed → glucagon/epinephrine released → hepatic glucose production; (3) heat generated → sweating/vasodilation activate; (4) dehydration → ADH/aldosterone rise → water retained. Stress: sympathetic activation (fight/flight) → HR ↑, BP ↑, glucose ↑, blood redirected to muscles. Chronic stress: HPA axis activated → cortisol rises → long-term metabolic changes. All systems coordinate via hypothalamus.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-respiration-exercise',
        prompt: 'Describe how chemoreceptors detect CO₂ rise during exercise and trigger ventilation increase.',
      },
      {
        id: 'cue-2',
        blockId: 'list-glucose-exercise',
        prompt: 'Explain how blood glucose is maintained during early and prolonged exercise. Which hormones are involved?',
      },
      {
        id: 'cue-3',
        blockId: 'p-temperature-exercise',
        prompt: 'Describe the thermoregulatory mechanisms activated during intense exercise.',
      },
      {
        id: 'cue-4',
        blockId: 'p-osmoregulation-exercise',
        prompt: 'How does ADH and aldosterone respond to dehydration from sweating?',
      },
      {
        id: 'cue-5',
        blockId: 'table-stress-response',
        prompt: 'Describe the acute stress ("fight or flight") response and explain why each change is adaptive.',
      },
    ],
    summaryText:
      'Exercise: CO₂ rises → ventilation increases (chemoreceptor reflex); glucose consumed → glucagon + epinephrine released → hepatic glycogenolysis/gluconeogenesis. Heat generated → sweating (max cooling) + vasodilation. Dehydration → ADH/aldosterone rise → water/Na⁺ retained. Stress: sympathetic activation → HR ↑, BP ↑, glucose ↑, blood redirected muscle (fight/flight). Chronic: HPA axis → cortisol released → sustained metabolic changes.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cannon stress response',
      detail: 'Walter Cannon described "fight or flight"; physiological basis of acute stress response',
      year: '1915',
      source: 'History of physiology',
      tags: ['stress'],
    },
  ],
};
