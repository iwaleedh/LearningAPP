const fs = require('fs');

const makeNote = (name, obj) => {
  const fileContent = "export const note_biology_" + name.replace("note_", "") + " = " + JSON.stringify(obj, null, 2) + ";\n";
  fs.writeFileSync("src/data/seedNotes/biology/" + name + ".js", fileContent);
};

makeNote('note_1_1_6', {
  blocks: [
    { id: "obj-1", type: "objective", data: { text: "Understand the structure and function of blood vessels: arteries, veins, and capillaries, and how they relate to their functions." } },
    { id: "h-vessels", type: "heading", data: { text: "Blood Vessels", level: 2 } },
    { id: "list-arteries", type: "list", data: { style: "bullet", items: [
      "Arteries: Carry blood away from the heart at high pressure.",
      "Thick wall: Withstands high pressure without bursting.",
      "Elastic tissue: Stretches during systole and recoils during diastole to maintain pressure and smooth out blood flow.",
      "Smooth muscle: Can contract or relax to control blood flow.",
      "Narrow lumen: Maintains high blood pressure."
    ]}},
    { id: "list-veins", type: "list", data: { style: "bullet", items: [
      "Veins: Carry blood towards the heart at low pressure.",
      "Wide lumen: Reduces resistance to blood flow.",
      "Thin walls: Little elastic or muscle tissue as pressure is low.",
      "Valves: Prevent the backflow of blood.",
      "Skeletal muscle contraction: Helps compress veins and push blood towards the heart."
    ]}},
    { id: "list-caps", type: "list", data: { style: "bullet", items: [
      "Capillaries: Site of metabolic exchange between blood and cells.",
      "One cell thick wall (squamous endothelium): Provides a short diffusion distance.",
      "Narrow lumen: Forces red blood cells to squeeze through, slowing blood flow to allow more time for exchange and reducing diffusion distance.",
      "Large total cross-sectional area: Slows down velocity of blood flow to maximize exchange time."
    ]}},
    { id: "callout-compare", type: "callout", data: { style: "key", title: "Structure-Function Relationship", text: "Arteries need elastic tissue to maintain high pressure via recoil. Veins need valves due to low pressure. Capillaries need an extremely short diffusion path." }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-arteries", prompt: "How does elastic tissue in arteries maintain blood pressure?" },
      { id: "cue-2", blockId: "list-veins", prompt: "Why do veins contain valves?" },
      { id: "cue-3", blockId: "list-caps", prompt: "How are capillaries adapted for rapid diffusion?" }
    ],
    summaryText: "Arteries withstand high pressure with thick walls and elastic tissue. Veins have valves to prevent backflow of low-pressure blood. Capillaries have walls one-cell thick to minimize diffusion paths.",
    ready: true
  },
  evidence: []
});

makeNote('note_1_1_7', {
  blocks: [
    { id: "obj-1", type: "objective", data: { text: "Explain the role of haemoglobin in the transport of oxygen and the Bohr effect." } },
    { id: "h-haemoglobin", type: "heading", data: { text: "Haemoglobin and Oxygen Transport", level: 2 } },
    { id: "p-hb1", type: "paragraph", data: { text: "Haemoglobin is a globular protein made of four polypeptide chains (two alpha, two beta), each containing a haem prosthetic group with an iron (Fe2+) ion. Each iron ion can bind to one oxygen molecule, so one haemoglobin molecule can carry up to four oxygen molecules." } },
    { id: "h-dissociation", type: "heading", data: { text: "Oxygen Dissociation Curve", level: 3 } },
    { id: "p-curve", type: "paragraph", data: { text: "The oxygen dissociation curve is an S-shaped (sigmoidal) curve. At low partial pressures of oxygen (pO2), haemoglobin does not readily bind to oxygen because the haem groups are closely packed. As the first oxygen molecule binds, it changes the quaternary structure (cooperative binding), making it easier for subsequent oxygen molecules to bind." } },
    { id: "list-affinity", type: "list", data: { style: "bullet", items: [
      "High pO2 (e.g. in lungs): Haemoglobin has a high affinity for oxygen. Oxygen loads (associates) to form oxyhaemoglobin.",
      "Low pO2 (e.g. in respiring tissues): Haemoglobin has a low affinity for oxygen. Oxygen unloads (dissociates) readily to supply the tissues."
    ]}},
    { id: "h-bohr", type: "heading", data: { text: "The Bohr Effect", level: 2 } },
    { id: "p-bohr", type: "paragraph", data: { text: "When carbon dioxide levels are high (such as in actively respiring tissues), the affinity of haemoglobin for oxygen decreases. This causes the oxygen dissociation curve to shift to the right. As a result, more oxygen is unloaded to the tissues at a given pO2, which meets the increased metabolic demand." } },
    { id: "callout-foetal", type: "callout", data: { style: "worked", title: "Foetal vs Adult Haemoglobin", text: "Foetal haemoglobin has a higher affinity for oxygen than adult haemoglobin (curve shifts left). This allows the foetus to load oxygen from the mother's blood across the placenta, where pO2 is relatively low." }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-hb1", prompt: "What is the structure of haemoglobin?" },
      { id: "cue-2", blockId: "p-curve", prompt: "Why is the oxygen dissociation curve S-shaped?" },
      { id: "cue-3", blockId: "p-bohr", prompt: "Describe and explain the Bohr effect." }
    ],
    summaryText: "Haemoglobin binds up to four oxygen molecules cooperatively. The Bohr effect acts to decrease oxygen affinity in the presence of CO2, facilitating oxygen unloading at respiring tissues.",
    ready: true
  },
  evidence: []
});

makeNote('note_1_1_8', {
  blocks: [
    { id: "obj-1", type: "objective", data: { text: "Understand the process of atherosclerosis, blood clotting machinery, and their role in cardiovascular disease." } },
    { id: "h-athero", type: "heading", data: { text: "Atherosclerosis", level: 2 } },
    { id: "p-ath1", type: "paragraph", data: { text: "Atherosclerosis is the hardening of arteries due to the build-up of plaque (atheroma). It narrows the arterial lumen, raising blood pressure and restricting blood flow to tissues. It is triggered by damage to the endothelium." } },
    { id: "list-ath-stages", type: "list", data: { style: "numbered", items: [
      "Endothelial damage: The single cell layer of the artery is damaged (e.g. by high blood pressure, toxins from smoke).",
      "Inflammatory response: White blood cells (macrophages) leave the blood vessel and migrate into the artery wall along with cholesterol from the blood, building up as a fatty deposit.",
      "Plaque formation: Calcium salts and fibrous tissue build up around the fatty deposit, forming a hard plaque called an atheroma.",
      "Loss of elasticity: The artery wall loses its elasticity and the lumen is narrowed, which further increases blood pressure, leading to a positive feedback loop."
    ]}},
    { id: "h-clot", type: "heading", data: { text: "Blood Clotting (Thrombosis)", level: 2 } },
    { id: "p-clot intro", type: "paragraph", data: { text: "Blood clots form to seal wounds, prevent blood loss, and block entry of pathogens. If a clot forms inside an atheroma-narrowed blood vessel, it can completely block the vessel (coronary thrombosis), causing a stroke or myocardial infarction." } },
    { id: "list-clotting", type: "list", data: { style: "numbered", items: [
      "Damage triggers: Damaged exposed collagen or damaged platelets release the enzyme thromboplastin.",
      "Thromboplastin converts: With calcium ions and vitamin K, thromboplastin converts the soluble plasma protein prothrombin into the active enzyme thrombin.",
      "Thrombin converts: Thrombin then catalyses the conversion of the soluble plasma protein fibrinogen into the insoluble protein fibrin.",
      "Fibrin mesh: Fibrin fibres form a mesh that traps red blood cells and platelets, forming a solid clot."
    ]}},
    { id: "callout-risk", type: "callout", data: { style: "warning", title: "Risk Factors for CVD", text: "Genetics, age, gender (men are at higher risk due to lack of oestrogen which lowers LDL), high blood pressure, high LDL cholesterol diets, smoking, and physical inactivity all increase the risk of atherosclerosis and CVD." }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-ath-stages", prompt: "Describe the stages in the development of atherosclerosis." },
      { id: "cue-2", blockId: "list-clotting", prompt: "Outline the cascade of reactions that leads to blood clotting." },
      { id: "cue-3", blockId: "p-clot intro", prompt: "How can an atheroma lead to a myocardial infarction?" }
    ],
    summaryText: "Atherosclerosis involves endothelial damage, cholesterol deposition, and hard plaque formation. The clotting cascade relies on thromboplastin converting prothrombin to thrombin, which converts fibrinogen to fibrin.",
    ready: true
  },
  evidence: []
});

console.log("All nodes created!");
