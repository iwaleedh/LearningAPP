export const note_biology_1_1_4 = {
  blocks: [
    {
      id: 'obj-cardiac',
      type: 'objective',
      data: {
        text: 'Understand the cardiac cycle, pressure changes, valve function, and factors determining cardiac output and tissue fluid formation.'
      }
    },
    {
      id: 'h-cardiac-cycle',
      type: 'heading',
      data: {
        text: 'Cardiac Cycle: Systole and Diastole',
        level: 2
      }
    },
    {
      id: 'p-atrial-systole',
      type: 'paragraph',
      data: {
        text: 'The cardiac cycle begins with atrial systole (atrial contraction). The sinoatrial (SA) node depolarises, causing both atria to contract simultaneously, pushing blood into the relaxed ventricles. During this phase, ventricular pressure remains low, the atrioventricular valves (tricuspid and mitral) are open, and semilunar valves (aortic and pulmonary) are closed. Atrial systole lasts approximately 0.1 seconds and contributes about 25% of ventricular filling; the remaining 75% occurs passively during ventricular diastole. After atrial systole, the SA node\'s signal terminates, atrial muscles relax, and the atrioventricular valves remain open briefly as blood continues to flow into the ventricles.'
      }
    },
    {
      id: 'p-ventricular-systole',
      type: 'paragraph',
      data: {
        text: 'Ventricular systole (ventricular contraction) follows atrial systole. The ventricles contract, raising ventricular pressure rapidly. When ventricular pressure exceeds atrial pressure, the atrioventricular valves snap shut, preventing backflow. This closure produces the first heart sound ("lub"). As ventricular pressure continues to rise and exceeds aortic/pulmonary artery pressure, the semilunar valves open, and blood is ejected into the aorta and pulmonary artery. The amount of blood ejected per beat is the stroke volume (typically 70 mL). Ventricular systole lasts approximately 0.3 seconds. When the ventricles begin to relax, ventricular pressure falls below aortic/pulmonary artery pressure, and the semilunar valves close, producing the second heart sound ("dub").'
      }
    },
    {
      id: 'p-diastole',
      type: 'paragraph',
      data: {
        text: 'Diastole is the relaxation phase of the entire heart. All chambers relax, ventricular pressure drops, and the atrioventricular valves reopen as atrial pressure exceeds ventricular pressure. Blood flows from the atria into the ventricles, and the coronary arteries dilate (unlike during systole when they are compressed), allowing blood to perfuse the heart muscle. Diastole lasts approximately 0.5 seconds. The cycle then repeats. The pressure changes during the cardiac cycle can be visualised on graphs showing atrial, ventricular, and aortic pressure over time.'
      }
    },
    {
      id: 'eq-cardiac-output',
      type: 'equation',
      data: {
        html: 'Cardiac output (CO) = Stroke volume (SV) × Heart rate (HR)<br/>CO (mL min<sup>−1</sup>) = SV (mL) × HR (beats min<sup>−1</sup>)',
        caption: 'Cardiac output calculation'
      }
    },
    {
      id: 'h-cardiac-output',
      type: 'heading',
      data: {
        text: 'Cardiac Output and Heart Rate Control',
        level: 2
      }
    },
    {
      id: 'p-co-def',
      type: 'paragraph',
      data: {
        text: 'Cardiac output (CO) is the volume of blood pumped by the heart per minute. At rest, the heart rate is approximately 70 beats per minute, and stroke volume is approximately 70 mL, giving a cardiac output of about 5000 mL min⁻¹ (5 L min⁻¹)—roughly the total blood volume, meaning all blood circulates once per minute. During exercise, cardiac output can increase to 35 L min⁻¹ or more in trained athletes, achieved by increases in both heart rate (up to 180–200 bpm) and stroke volume. The sympathetic nervous system increases heart rate via noradrenaline and adrenaline, while the parasympathetic system (vagus nerve) decreases it via acetylcholine. Heart rate is also influenced by hormones (adrenaline, thyroxine), body temperature, emotions, and physical fitness.'
      }
    },
    {
      id: 'p-starling',
      type: 'paragraph',
      data: {
        text: 'Starling\'s law (the Frank-Starling mechanism) states that cardiac muscle contraction is proportional to the length of muscle fibres before contraction, up to an optimal length. During diastole, as ventricular volume increases with incoming blood, the ventricular wall stretches. This stretching increases the overlap of thick and thin filaments in myocardial sarcomeres, enhancing the force of contraction during the subsequent systole. Therefore, increased venous return (end-diastolic volume) increases stroke volume automatically, without neural or hormonal intervention. This ensures that the left and right ventricles pump equal volumes despite being on separate circuits: if venous return to the right heart increases, right ventricular stroke volume increases, sending more blood to the lungs, increasing left atrial filling and left ventricular stroke volume in response.'
      }
    },
    {
      id: 'table-pressure-changes',
      type: 'comparisonTable',
      data: {
        headers: ['Phase', 'Atrial Pressure', 'Ventricular Pressure', 'Aortic Pressure', 'AV Valve', 'SL Valve'],
        rows: [
          ['Atrial systole', 'High (contracting)', 'Low (relaxed)', 'Steady (~80 mmHg)', 'Open', 'Closed'],
          ['Ventricular systole', 'Low (relaxed)', 'Rising then high', 'Rising (peak ~120 mmHg)', 'Closed', 'Open then closed'],
          ['Diastole', 'Rising (filling)', 'Low (relaxing)', 'Falling (~80 mmHg)', 'Opening', 'Closed']
        ],
        caption: 'Pressure changes during the cardiac cycle (AV = atrioventricular, SL = semilunar)'
      }
    },
    {
      id: 'h-tissue-fluid',
      type: 'heading',
      data: {
        text: 'Tissue Fluid Formation and Reabsorption',
        level: 2
      }
    },
    {
      id: 'p-tissue-fluid-form',
      type: 'paragraph',
      data: {
        text: 'Tissue fluid is the fluid bathing cells, formed from blood plasma. At the arteriole end of capillaries, hydrostatic pressure (blood pressure inside the capillary) is high (~40 mmHg) compared to oncotic pressure (osmotic pressure due to plasma proteins, ~25 mmHg). The net outward force (filtration) is 40 − 25 = 15 mmHg, forcing water and small solutes (glucose, amino acids, ions, urea) out through the permeable capillary wall. Large molecules (proteins, red blood cells) remain in the blood. The filtrate becomes tissue fluid, bathing the cells. Cells take up oxygen and glucose and release CO₂ and waste products into the tissue fluid.'
      }
    },
    {
      id: 'p-tissue-fluid-reabs',
      type: 'paragraph',
      data: {
        text: 'At the venule end of capillaries, hydrostatic pressure falls (~15 mmHg) due to blood loss and vessel diameter increase, while oncotic pressure remains high (~25 mmHg). The net force now favours reabsorption inward (15 mmHg inward), returning water and waste products to the blood. However, not all tissue fluid is reabsorbed; approximately 10% drains into lymphatic capillaries as lymph, which eventually returns to the bloodstream via the thoracic duct. If hydrostatic pressure is too high (e.g. during prolonged standing or venous obstruction), or if plasma protein concentration is too low (malnutrition, liver disease, nephrotic syndrome), tissue fluid accumulates in tissues, causing oedema (swelling). Lymphatic vessel dysfunction or removal (e.g. after cancer surgery) also causes lymphoedema.'
      }
    },
    {
      id: 'callout-worked-cardiac-cycle',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Tracing a Complete Cardiac Cycle',
        text: 'Begin: Both atria contract (atrial systole, 0.1s). Blood pushed into relaxed ventricles. Then: Both ventricles contract (ventricular systole, 0.3s). AV valves close (1st sound "lub"). Pressure rises, SL valves open, blood ejected into aorta/pulmonary artery. Finally: All relax (diastole, 0.5s). SL valves close (2nd sound "dub"). AV valves open. Blood refills ventricles. Cycle repeats (~0.8s total at 75 bpm).'
      }
    },
    {
      id: 'callout-tip-starling',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Starling\'s Law Exam Tip',
        text: 'Remember: more blood in (venous return) = more stretch on ventricle = stronger contraction = larger stroke volume. Automatic adjustment. This is how the right and left hearts stay balanced despite being separate pumps.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The atrioventricular valves must close before the semilunar valves open because of the pressure sequence: as the ventricle begins to contract, ventricular pressure rises above atrial pressure, forcing the AV valves shut. Only after ventricular pressure exceeds aortic/pulmonary artery pressure do the semilunar valves open.',
        apply: 'Using a pressure-volume diagram, identify the phase where the left ventricle is filling (diastole) and the phase where it is ejecting blood (systole). What is the significance of the dicrotic notch on the aortic pressure trace?',
        analyze: 'Compare the pressure changes in the left and right ventricles during the cardiac cycle. Why does the left ventricle generate much higher pressure despite having the same stroke volume?',
        evaluate: 'Evaluate the use of ECG and echocardiography as tools for diagnosing heart conditions. Which provides more information about mechanical function, and which about electrical conduction?'
      },
      terms: []
    },
    {
      id: 'checklist-cardiac',
      type: 'checklist',
      data: {
        items: [
          { text: 'Atrial systole lasts ~0.1s and contributes ~25% of ventricular filling', checked: false },
          { text: 'Ventricular systole lasts ~0.3s; AV valves close ("lub"), then SL valves open and blood is ejected', checked: false },
          { text: 'Diastole lasts ~0.5s; all chambers relax, SL valves close ("dub"), AV valves open', checked: false },
          { text: 'Cardiac output = stroke volume × heart rate; at rest ~5 L min⁻¹', checked: false },
          { text: 'Starling\'s law: increased venous return increases stroke volume via increased sarcomere stretch', checked: false }
        ]
      }
    },
    {
      id: 'summary-cardiac',
      type: 'summary',
      data: {
        text: 'The cardiac cycle has three phases: atrial systole (0.1s), ventricular systole (0.3s), and diastole (0.5s). Valves open/close passively due to pressure differences, producing heart sounds. Cardiac output (mL min⁻¹) = stroke volume × heart rate. Starling\'s law ensures left and right ventricles pump equal volumes. At capillaries, high hydrostatic pressure at arteriole end filters tissue fluid; low pressure at venule end reabsorbs it. Oedema results from high hydrostatic pressure or low oncotic pressure.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-atrial-systole',
        prompt: 'Describe atrial systole. What percentage of ventricular filling does it contribute?'
      },
      {
        id: 'cue-2',
        blockId: 'p-ventricular-systole',
        prompt: 'Outline ventricular systole. When do the valve sounds occur and why?'
      },
      {
        id: 'cue-3',
        blockId: 'p-diastole',
        prompt: 'What happens during diastole? Why do coronary arteries dilate during this phase?'
      },
      {
        id: 'cue-4',
        blockId: 'p-starling',
        prompt: 'Explain Starling\'s law. How does it ensure balanced output between left and right ventricles?'
      },
      {
        id: 'cue-5',
        blockId: 'p-tissue-fluid-form',
        prompt: 'Describe tissue fluid formation at the arteriole end of capillaries. What forces are involved?'
      }
    ],
    summaryText: 'Atrial systole (0.1s): atria contract, push blood into ventricles. Ventricular systole (0.3s): ventricles contract, AV valves close (lub), SL valves open, blood ejected. Diastole (0.5s): all relax, SL valves close (dub), AV valves open. CO = SV × HR (~5 L/min rest). Starling\'s law: increased stretch increases contraction force. Tissue fluid: arteriole end filtration (hydrostatic pressure high), venule end reabsorption (osmotic pressure high).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cardiac Cycle and Tissue Fluid Exchange',
      detail: 'Comprehensive explanation of pressure changes, valve timing, and Starling\'s law.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['cardiac-cycle', 'systole', 'diastole', 'cardiac-output', 'tissue-fluid', 'starling-law']
    }
  ]
};
