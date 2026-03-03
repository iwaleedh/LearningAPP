/**
 * WBI15 — Topic 7.11: Homeostasis Principles
 * Negative feedback, positive feedback, set point, response time
 */

export const note_biology_5_7_11 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand homeostasis as the maintenance of stable internal conditions via negative feedback, distinguish from positive feedback, and compare nervous vs hormonal response times.',
      },
    },
    {
      id: 'h-homeostasis',
      type: 'heading',
      data: { text: 'Homeostasis: Maintaining Stability', level: 2 },
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: 'Homeostasis (Greek: "same state") is the process of maintaining relatively stable internal conditions despite external changes. Homeostatic systems maintain variables such as body temperature, blood glucose, blood pH, blood osmolarity, and blood pressure within narrow ranges. This stability is essential for enzyme function, membrane integrity, and cell survival.',
      },
    },
    {
      id: 'p-claude-bernard',
      type: 'paragraph',
      data: {
        text: 'The concept was developed by French physiologist Claude Bernard (1865), who observed that organisms maintain a stable "milieu intérieur" (internal environment). Walter Cannon later coined the term "homeostasis" (1926).',
      },
    },
    {
      id: 'h-negative-feedback',
      type: 'heading',
      data: { text: 'Negative Feedback: The Basis of Homeostasis', level: 3 },
    },
    {
      id: 'p-negative-feedback',
      type: 'paragraph',
      data: {
        text: 'Negative feedback is a control mechanism in which a deviation from the set point triggers a corrective response that opposes the deviation, returning the system to set point. The system "opposes" change, hence "negative." This is the primary mechanism of homeostasis.',
      },
    },
    {
      id: 'list-negative',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Receptor detects deviation from set point (stimulus)',
          'Signal sent to control centre (brain, endocrine gland)',
          'Control centre processes information and generates response',
          'Effector (muscle, gland) carries out response',
          'Response opposes deviation, restoring set point',
          'Receptor detects correction; response stops (feedback)',
        ],
      },
    },
    {
      id: 'callout-negative',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Negative Feedback: Opposing Change',
        text: 'Negative feedback "resists" change: if temperature rises above set point, the system responds by reducing temperature. If temperature falls below set point, the system responds by increasing temperature. The feedback is "negative" (opposing) not in emotional sense but in control sense.',
      },
    },
    {
      id: 'h-example-temp',
      type: 'heading',
      data: { text: 'Example: Body Temperature Regulation', level: 3 },
    },
    {
      id: 'p-temp-example',
      type: 'paragraph',
      data: {
        text: 'Set point: 37°C. If body temperature rises to 38°C (1°C above set point): (1) hypothalamic thermoreceptors detect rise; (2) hypothalamus triggers cooling response: vasodilation (blood to skin), sweating (evaporative cooling); (3) temperature falls back to 37°C; (4) response stops. Conversely, if temperature falls to 36°C: shivering and vasoconstriction raise temperature back to 37°C.',
      },
    },
    {
      id: 'h-positive-feedback',
      type: 'heading',
      data: { text: 'Positive Feedback: Amplifying Change (Rare)', level: 3 },
    },
    {
      id: 'p-positive-feedback',
      type: 'paragraph',
      data: {
        text: 'Positive feedback is a mechanism in which a deviation triggers a response that amplifies the deviation, moving the system further from set point. This is destabilising and is rare in homeostatic systems. However, positive feedback is important for certain physiological processes.',
      },
    },
    {
      id: 'list-positive-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Childbirth: oxytocin released → uterine contractions increase → more oxytocin released → stronger contractions → delivery',
          'Blood clotting: tissue damage → thrombin formation → thrombin activates more thrombin → clot forms',
          'Fever breaking: during fever recovery, temperature falls below set point → shivering → temperature rises → feedback stops when reaching set point',
        ],
      },
    },
    {
      id: 'callout-positive',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Positive Feedback: Destabilising but Essential',
        text: 'Positive feedback amplifies responses and is inherently destabilising. However, it is valuable when a process must proceed to completion (childbirth, blood clotting) or when rapid amplification is needed. Positive feedback loops must have built-in termination mechanisms to prevent runaway cycles.',
      },
    },
    {
      id: 'h-setpoint',
      type: 'heading',
      data: { text: 'Set Point and Tolerance Range', level: 3 },
    },
    {
      id: 'p-setpoint',
      type: 'paragraph',
      data: {
        text: 'The set point is the target value for a physiological variable. For example, set point for body temperature is ~37°C, for blood glucose is ~5 mmol/L, for blood pH is ~7.4. The tolerance range (or normal range) is the range around set point within which the system is considered healthy. Outside this range, dysfunction occurs.',
      },
    },
    {
      id: 'table-setpoints',
      type: 'comparisonTable',
      data: {
        headers: ['Variable', 'Set Point', 'Normal Range', 'Consequence of Deviation'],
        rows: [
          ['Body temperature', '37°C', '36.5–37.5°C', 'Hypothermia (<35°C), hyperthermia (>40°C)'],
          ['Blood glucose', '5 mmol/L (90 mg/dL)', '3.5–5.5 mmol/L', 'Hypoglycaemia (<3.5), hyperglycaemia (>11)'],
          ['Blood pH', '7.4', '7.35–7.45', 'Acidosis (<7.35), alkalosis (>7.45)'],
          ['Blood osmolarity', '310 mOsm/L', '305–315 mOsm/L', 'Hyposmolarity, hyperosmolarity'],
          ['Blood pressure', '120/80 mmHg', '90/60–140/90 mmHg', 'Hypotension, hypertension'],
        ],
        caption: 'Physiological set points and normal ranges',
      },
    },
    {
      id: 'h-response-time',
      type: 'heading',
      data: { text: 'Nervous vs Hormonal Response Times', level: 3 },
    },
    {
      id: 'table-response',
      type: 'comparisonTable',
      data: {
        headers: ['System', 'Response Time', 'Duration', 'Mechanism', 'Examples'],
        rows: [
          [
            'Nervous (sympathetic)',
            'Milliseconds to seconds',
            'Seconds to minutes',
            'Neurotransmitters (ACh, noradrenaline)',
            'Heart rate, breathing, blood pressure',
          ],
          [
            'Hormonal (endocrine)',
            'Seconds to minutes',
            'Minutes to hours',
            'Hormones (epinephrine, cortisol, insulin)',
            'Glucose regulation, stress response, growth',
          ],
        ],
        caption: 'Nervous vs hormonal response times in homeostasis',
      },
    },
    {
      id: 'p-dual-control',
      type: 'paragraph',
      data: {
        text: 'Many physiological variables are controlled by both nervous and hormonal systems, providing redundancy and flexibility. For example, blood glucose is regulated acutely by the sympathetic nervous system (glucagon + adrenaline) and chronically by insulin. Blood pressure is controlled acutely by the autonomic nervous system (heart rate, vasoconstriction) and chronically by hormones (aldosterone, ADH).',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Homeostasis maintains stable internal conditions via negative feedback: deviation detected → corrective response → restoration to set point. Positive feedback amplifies change (rare, used for completion processes). Set point is target value; tolerance range is normal variation.',
        apply: 'A diabetic patient has blood glucose of 12 mmol/L (above set point of 5 mmol/L). Describe the negative feedback response (glucose monitoring, insulin secretion, glucose uptake) that would restore homeostasis.',
        analyze: 'Compare negative and positive feedback. Why is negative feedback dominant in homeostasis, yet positive feedback used for specific processes?',
        evaluate: 'Ageing can reduce homeostatic capacity (e.g., impaired temperature regulation, glucose tolerance). Why might this occur at the cellular/organ level?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define homeostasis and its importance', checked: false },
          { text: 'Describe negative feedback and give three examples', checked: false },
          { text: 'Distinguish positive feedback from negative feedback', checked: false },
          { text: 'Explain set point and tolerance range', checked: false },
          { text: 'Compare nervous and hormonal response times', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Homeostasis: maintaining stable internal conditions via negative feedback. Deviation detected → response opposes deviation → restores set point. Positive feedback amplifies change (childbirth, clotting). Set point = target (e.g., 37°C, 5 mmol/L glucose); tolerance range = normal variation. Nervous: fast response (ms–s); hormonal: slower (s–min). Most variables controlled by both systems.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-definition',
        prompt: 'Define homeostasis and explain why it is essential for survival.',
      },
      {
        id: 'cue-2',
        blockId: 'list-negative',
        prompt: 'Describe the six steps of negative feedback control.',
      },
      {
        id: 'cue-3',
        blockId: 'p-temp-example',
        prompt: 'Use body temperature as an example to explain how negative feedback restores set point.',
      },
      {
        id: 'cue-4',
        blockId: 'list-positive-examples',
        prompt: 'Name three examples of positive feedback and explain why they are not destabilising in these cases.',
      },
      {
        id: 'cue-5',
        blockId: 'table-response',
        prompt: 'Compare nervous and hormonal response times. Give examples of variables controlled by each.',
      },
    ],
    summaryText:
      'Homeostasis: stable internal conditions via negative feedback. Deviation → receptor detects → control centre → effector → response opposes deviation → restores set point. Positive feedback amplifies change (childbirth, clotting). Set point = target value; tolerance range = normal variation. Nervous system: fast (ms–s); hormonal: slow (s–min).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Claude Bernard & Walter Cannon',
      detail: 'Bernard: milieu intérieur (1865); Cannon: homeostasis (1926)',
      year: '1865–1926',
      source: 'History of physiology',
      tags: ['history'],
    },
  ],
};
