export const note_biology_1_1_3 = {
  blocks: [
    {
      id: 'obj-heart',
      type: 'objective',
      data: {
        text: 'Understand the structure of the heart and blood vessels, including chambers, valves, and the adaptations of arteries, veins, and capillaries for their functions.'
      }
    },
    {
      id: 'h-heart-chambers',
      type: 'heading',
      data: {
        text: 'Heart Structure: Chambers and Valves',
        level: 2
      }
    },
    {
      id: 'p-chambers',
      type: 'paragraph',
      data: {
        text: 'The heart is a four-chambered muscular organ divided into left and right halves by the septum. Each half has an atrium (receives blood) and a ventricle (pumps blood out). The right atrium receives deoxygenated blood from the body via the superior and inferior vena cava. The right ventricle pumps this blood to the lungs via the pulmonary artery. The left atrium receives oxygenated blood from the lungs via pulmonary veins. The left ventricle pumps oxygenated blood to the body via the aorta. The walls of the ventricles are thicker than the atria because they must generate greater pressure to pump blood out. The left ventricle wall is thicker than the right because it must pump blood around the entire body, whereas the right pumps only to the nearby lungs.'
      }
    },
    {
      id: 'p-valves',
      type: 'paragraph',
      data: {
        text: 'Valves prevent backflow of blood. Atrioventricular valves (between atria and ventricles) open when atrial pressure exceeds ventricular pressure, allowing atrial blood to enter the ventricle. When the ventricle contracts, ventricular pressure exceeds atrial pressure, closing these valves. The right atrioventricular valve is the tricuspid (three cusps); the left is the mitral (bicuspid, two cusps). Semilunar valves are at the exit of each ventricle: the aortic valve at the aorta exit and the pulmonary valve at the pulmonary artery exit. These open when ventricular pressure exceeds aortic/pulmonary artery pressure (allowing blood out) and close when the vessel pressure exceeds ventricular pressure (preventing backflow). Valve dysfunction can cause serious complications.'
      }
    },
    {
      id: 'callout-key-valves',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Valve Function',
        text: 'Atrioventricular valves (tricuspid, mitral) prevent backflow from ventricles to atria. Semilunar valves (aortic, pulmonary) prevent backflow from arteries into ventricles. All work passively due to pressure differences.'
      }
    },
    {
      id: 'h-vessels',
      type: 'heading',
      data: {
        text: 'Blood Vessel Types and Adaptations',
        level: 2
      }
    },
    {
      id: 'p-arteries',
      type: 'paragraph',
      data: {
        text: 'Arteries carry blood away from the heart at high pressure. Their walls have three layers: the tunica intima (thin endothelium), tunica media (thick layer of elastic tissue and smooth muscle), and tunica adventitia (fibrous tissue). The thick elastic layer allows arteries to stretch when blood is ejected from the ventricle, then recoil to maintain pressure between heartbeats (elastic recoil). Smooth muscle in the media allows vasoconstriction (narrowing) and vasodilation (widening) to control blood flow and pressure. The thick, muscular walls resist high pressure and prevent rupture. Coronary arteries supply the heart muscle itself with oxygenated blood; blockage causes myocardial infarction (heart attack).'
      }
    },
    {
      id: 'p-veins',
      type: 'paragraph',
      data: {
        text: 'Veins carry blood back to the heart at low pressure. Their walls are thinner and less muscular than arteries, with a larger lumen (cavity). The thin walls reduce resistance to blood flow despite low pressure. Veins have semilunar valves that prevent backflow, particularly in the limbs where blood must flow against gravity. These valves work in conjunction with the skeletal muscle pump: contraction of surrounding muscles compresses veins, pushing blood upward, and valve closure prevents return flow. Veins can hold large volumes of blood (capacitance vessels), acting as a blood reservoir. Venous return to the heart is assisted by respiratory movements and skeletal muscle contraction.'
      }
    },
    {
      id: 'p-capillaries',
      type: 'paragraph',
      data: {
        text: 'Capillaries are narrow vessels (5–10 μm diameter) composed of a single layer of endothelial cells surrounded by a basement membrane. This thin, permeable structure is perfect for exchange of materials between blood and tissues. Capillaries are numerous and form extensive networks, increasing total surface area for exchange. Hydrostatic pressure in capillaries forces small molecules (glucose, amino acids, ions) and water out of the blood into tissue fluid at the arteriole end. At the venule end, low pressure and high plasma protein (solute) concentration cause osmotic reabsorption of water and waste products back into the blood. Red blood cells are forced into single file through the narrow lumen, maximising contact with endothelial cells and efficient gas exchange.'
      }
    },
    {
      id: 'table-vessels',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Artery', 'Vein', 'Capillary'],
        rows: [
          ['Wall thickness', 'Thick (elastic + muscle)', 'Thin', 'Single cell layer'],
          ['Lumen diameter', 'Narrow', 'Wide', 'Very narrow (5–10 μm)'],
          ['Pressure', 'High', 'Low', 'Medium → Low'],
          ['Function', 'Transport high-pressure blood from heart', 'Return low-pressure blood to heart', 'Exchange with tissues'],
          ['Valves', 'No (semilunar at heart only)', 'Yes (prevent backflow)', 'No'],
          ['Elastic recoil', 'Yes (maintain pressure)', 'No', 'No']
        ],
        caption: 'Blood vessel structure and function'
      }
    },
    {
      id: 'h-coronary',
      type: 'heading',
      data: {
        text: 'Coronary Circulation',
        level: 2
      }
    },
    {
      id: 'p-coronary-art',
      type: 'paragraph',
      data: {
        text: 'The coronary arteries arise from the aorta just above the aortic valve and branch to supply the heart muscle (myocardium) with oxygenated blood. The left coronary artery divides into the left anterior descending (LAD) and left circumflex arteries; the right coronary artery supplies the right side of the heart. These vessels branch extensively, forming a network that ensures all cardiac muscle receives adequate oxygen. During systole (contraction), the arteries are compressed, reducing blood flow. During diastole (relaxation), the arteries relax and blood flows through. If a coronary artery becomes blocked (usually by atherosclerotic plaque or thrombosis), the downstream myocardium becomes oxygen-deprived, leading to angina (chest pain) or myocardial infarction (heart attack). This is one of the most common causes of death in developed countries.'
      }
    },
    {
      id: 'callout-worked-pressure',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Why the Left Ventricle Wall is Thicker',
        text: 'The left ventricle must generate enough pressure to pump blood around the entire body (systemic circulation). The right ventricle only pumps to the nearby lungs (pulmonary circulation), requiring less pressure. Therefore, the left ventricular wall develops more smooth muscle and is visibly thicker.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Arteries need thick, elastic walls because they carry blood at high pressure from the ventricles; the elastic recoil helps maintain pressure between heartbeats. Veins need valves because they carry blood at low pressure against gravity (especially in the limbs); without valves, blood would flow backwards.',
        apply: 'A patient\'s resting heart rate is 72 bpm and their stroke volume is 70 mL. Calculate their cardiac output. If exercise increases heart rate to 150 bpm and stroke volume to 100 mL, what is the new cardiac output?',
        analyze: 'Compare the structure of arteries, veins, and capillaries in terms of wall thickness, lumen diameter, elasticity, and valves. Relate each feature to function.',
        evaluate: 'Evaluate whether the double circulatory system of mammals is more efficient than the single circulatory system of fish. Consider oxygen delivery, pressure maintenance, and metabolic demands.'
      },
      terms: []
    },
    {
      id: 'checklist-cv-struct',
      type: 'checklist',
      data: {
        items: [
          { text: 'Heart has four chambers: right/left atria and ventricles', checked: false },
          { text: 'Atrioventricular valves (tricuspid, mitral) prevent backflow into atria', checked: false },
          { text: 'Semilunar valves (aortic, pulmonary) prevent backflow into ventricles', checked: false },
          { text: 'Arteries have thick, elastic walls for high-pressure transport', checked: false },
          { text: 'Veins have thin walls, valves, and low pressure; capillaries are one cell thick for exchange', checked: false }
        ]
      }
    },
    {
      id: 'summary-cv-struct',
      type: 'summary',
      data: {
        text: 'The heart is a four-chambered pump with thick-walled ventricles and one-way valves (atrioventricular, semilunar) preventing backflow. Arteries have thick, elastic walls for high-pressure transport and vasoconstriction control. Veins have thin walls, valves, and act as reservoirs. Capillaries (one cell layer) enable material exchange via hydrostatic and osmotic pressure. Coronary arteries supply the heart itself; their blockage causes myocardial infarction.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-chambers',
        prompt: 'Describe the four chambers of the heart and why the left ventricle wall is thicker than the right.'
      },
      {
        id: 'cue-2',
        blockId: 'p-valves',
        prompt: 'What is the difference between atrioventricular and semilunar valves? Name them.'
      },
      {
        id: 'cue-3',
        blockId: 'p-arteries',
        prompt: 'How are arteries adapted for high-pressure transport? What is elastic recoil?'
      },
      {
        id: 'cue-4',
        blockId: 'p-veins',
        prompt: 'Why do veins have valves? How does the skeletal muscle pump assist venous return?'
      },
      {
        id: 'cue-5',
        blockId: 'p-capillaries',
        prompt: 'Why are capillaries ideal for exchange? How do hydrostatic and osmotic pressure drive exchange?'
      }
    ],
    summaryText: 'Heart: 4 chambers (RA/LA/RV/LV); left ventricle thicker (pumps whole body). Atrioventricular valves (tricuspid/mitral) prevent backflow to atria. Semilunar valves (aortic/pulmonary) prevent backflow from arteries. Arteries: thick elastic walls, high pressure, elastic recoil. Veins: thin walls, low pressure, valves, muscle pump. Capillaries: single cell layer for exchange. Coronary arteries supply heart; blockage = MI.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cardiovascular System Structure',
      detail: 'Detailed anatomy of the heart and blood vessels in relation to function.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['heart', 'arteries', 'veins', 'capillaries', 'valves', 'coronary-circulation']
    }
  ]
};
