export const note_olevel_biology_9_9_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/9 Transport In Animals/9-1-5-coronary-heart-disease.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the coronary circulation; explain atherosclerosis; identify risk factors for coronary heart disease; describe what happens during a heart attack; outline treatments and lifestyle interventions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Coronary Circulation', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'The heart is a muscular organ that pumps blood continuously. Like all muscles, the <strong>heart muscle (myocardium)</strong> requires a constant supply of oxygen and glucose for aerobic respiration. It cannot rely on the blood passing through its chambers — instead, the heart has its own dedicated blood supply through the <strong>coronary arteries</strong>, which branch off from the aorta just above the heart.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Coronary arteries</strong> — two main arteries (left and right) originate from the aorta and branch over the surface of the heart, supplying oxygenated blood to all parts of the myocardium.' },
          { text: '<strong>Coronary veins</strong> — carry deoxygenated blood from the heart muscle back to the right atrium via the coronary sinus.' },
          { text: 'If the coronary arteries become partially or fully blocked, the heart muscle is deprived of oxygen — this causes <strong>coronary heart disease (CHD)</strong>.' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Atherosclerosis — the Underlying Process', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: '<strong>Atherosclerosis</strong> is the progressive narrowing and hardening of arteries caused by the build-up of fatty deposits called <strong>plaques (atheromas)</strong> inside the arterial wall. It is the underlying cause of most CHD.' }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Damage to the endothelium (inner lining) of an artery occurs — caused by high blood pressure, smoking, or high glucose levels.' },
          { text: '<strong>LDL cholesterol</strong> (low-density lipoprotein — "bad cholesterol") accumulates at the damaged site beneath the endothelium.' },
          { text: 'White blood cells enter the arterial wall to engulf the cholesterol, forming foam cells. These, along with calcium and fibrous tissue, build up to form a hard, fatty <strong>plaque (atheroma)</strong>.' },
          { text: 'The plaque bulges into the lumen of the artery, <strong>narrowing</strong> it and reducing blood flow.' },
          { text: 'The artery wall becomes less elastic (<strong>hardened</strong>), raising blood pressure further.' },
          { text: 'If a plaque ruptures, a <strong>blood clot (thrombus)</strong> can form at the site, potentially blocking the artery entirely.' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Cross-section of a coronary artery showing plaque build-up and narrowing of the lumen',
        svg: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="460" height="260" fill="#f8f9fa" rx="10"/>
  <text x="230" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Atherosclerosis — Plaque Build-up in an Artery</text>

  <!-- HEALTHY ARTERY (left) -->
  <text x="100" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">Healthy Artery</text>
  <!-- Outer wall -->
  <circle cx="100" cy="145" r="72" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
  <!-- Muscle / elastic layer -->
  <circle cx="100" cy="145" r="56" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
  <!-- Endothelium (smooth inner lining) -->
  <circle cx="100" cy="145" r="42" fill="#fef3c7" stroke="#92400e" stroke-width="1.5"/>
  <!-- Wide lumen -->
  <circle cx="100" cy="145" r="36" fill="#ef4444"/>
  <text x="100" y="149" text-anchor="middle" font-size="10" fill="#fff">Wide lumen</text>
  <text x="100" y="238" text-anchor="middle" font-size="11" fill="#15803d">Normal blood flow</text>

  <!-- Labels healthy -->
  <line x1="44" y1="110" x2="20" y2="95" stroke="#b91c1c" stroke-width="1"/>
  <text x="0" y="93" font-size="10" fill="#b91c1c">Artery wall</text>
  <line x1="60" y1="145" x2="20" y2="145" stroke="#92400e" stroke-width="1"/>
  <text x="0" y="143" font-size="10" fill="#92400e">Endothelium</text>

  <!-- Arrow between -->
  <line x1="195" y1="145" x2="255" y2="145" stroke="#64748b" stroke-width="2" marker-end="url(#arrCHD)"/>
  <defs>
    <marker id="arrCHD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#64748b"/>
    </marker>
  </defs>
  <text x="225" y="135" text-anchor="middle" font-size="10" fill="#64748b">Atherosclerosis</text>

  <!-- DISEASED ARTERY (right) -->
  <text x="360" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">Atherosclerotic Artery</text>
  <!-- Outer wall -->
  <circle cx="360" cy="145" r="72" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
  <!-- Thickened wall -->
  <circle cx="360" cy="145" r="56" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
  <!-- Plaque (atheroma) — asymmetric build-up -->
  <path d="M 325 120 Q 320 140 325 165 Q 330 185 350 188 Q 370 190 385 178 Q 400 165 398 145 Q 396 125 380 115 Q 365 108 348 110 Q 333 112 325 120 Z" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
  <text x="362" y="155" text-anchor="middle" font-size="9" fill="#fff">Plaque</text>
  <!-- Narrow lumen -->
  <ellipse cx="350" cy="127" rx="14" ry="11" fill="#ef4444"/>
  <text x="350" y="131" text-anchor="middle" font-size="9" fill="#fff">Narrow</text>
  <text x="350" y="143" text-anchor="middle" font-size="9" fill="#fff">lumen</text>

  <!-- Labels diseased -->
  <line x1="400" y1="158" x2="430" y2="170" stroke="#451a03" stroke-width="1"/>
  <text x="432" y="168" font-size="10" fill="#451a03">Plaque (atheroma)</text>
  <text x="432" y="180" font-size="10" fill="#451a03">— fatty deposit</text>
  <text x="360" y="238" text-anchor="middle" font-size="11" fill="#b91c1c">Reduced / blocked blood flow</text>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Coronary Heart Disease (CHD) and Heart Attack', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: { text: '<strong>Coronary heart disease (CHD)</strong> results when the coronary arteries become narrowed by atherosclerosis, reducing blood flow to the heart muscle. Symptoms include <strong>angina</strong> (chest pain on exertion due to insufficient oxygen to the heart muscle). A <strong>heart attack (myocardial infarction)</strong> occurs when a coronary artery becomes completely blocked — most often by a blood clot (thrombus) forming on a ruptured plaque. Without oxygen, the affected heart muscle cells die, and if large enough, this can be fatal.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Heart Attack — What Happens',
        text: '1. Atherosclerotic plaque in a coronary artery ruptures.<br/>2. A blood clot (thrombus) forms rapidly at the rupture site.<br/>3. The clot <strong>completely blocks</strong> the coronary artery.<br/>4. Blood (and oxygen) cannot reach part of the heart muscle.<br/>5. The deprived heart muscle cells <strong>die</strong> — this is a myocardial infarction.<br/>Symptoms: severe chest pain, shortness of breath, pain radiating to arm/jaw.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Risk Factors for CHD', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Risk factors for coronary heart disease',
        headers: ['Risk Factor', 'How It Increases CHD Risk', 'Modifiable?'],
        rows: [
          ['High blood cholesterol (LDL)', 'LDL deposits in arterial walls, forming plaques (atherosclerosis)', 'Yes — diet, statins'],
          ['Smoking', 'Nicotine raises blood pressure; carbon monoxide reduces O₂ carrying capacity; toxins damage artery endothelium promoting plaque formation', 'Yes — stop smoking'],
          ['High blood pressure (hypertension)', 'Damages artery endothelium, accelerating plaque formation; heart works harder', 'Yes — diet, exercise, medication'],
          ['Diet high in saturated fats', 'Raises LDL cholesterol levels, promoting atherosclerosis', 'Yes — dietary changes'],
          ['Lack of physical exercise', 'Contributes to obesity, high blood pressure, and high cholesterol', 'Yes — increase exercise'],
          ['Obesity', 'Associated with high blood pressure, high cholesterol, and type 2 diabetes', 'Yes — weight management'],
          ['Type 2 diabetes', 'High blood glucose damages artery walls', 'Partly — lifestyle management'],
          ['Age', 'Plaque accumulates over time; arteries less elastic with age', 'No'],
          ['Sex (male)', 'Males at greater risk before age ~50; oestrogen in females is protective', 'No'],
          ['Family history (genetics)', 'Inherited tendency to high cholesterol or hypertension', 'No (but risk managed)']
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Prevention and Treatment of CHD', level: 2 }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Treatments and lifestyle changes for CHD',
        headers: ['Intervention', 'How It Helps'],
        rows: [
          ['Statins (medication)', 'Reduce LDL cholesterol levels in blood, slowing or halting plaque formation'],
          ['Antihypertensives (medication)', 'Lower blood pressure, reducing strain on artery walls and the heart'],
          ['Aspirin (antiplatelet)', 'Reduces blood clotting tendency, lowering risk of thrombosis'],
          ['Angioplasty (surgical)', 'A balloon catheter is used to widen a narrowed coronary artery; a stent (metal mesh tube) is left in place to keep the artery open'],
          ['Coronary artery bypass graft (CABG)', 'A section of healthy blood vessel (from leg or chest) is grafted to bypass the blocked coronary artery'],
          ['Lifestyle changes', 'Reduce saturated fat intake; stop smoking; increase exercise; maintain healthy weight; reduce salt intake (lowers BP)']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Explaining Risk Factors',
        text: 'When asked to <strong>explain</strong> (not just state) a risk factor, you must give a mechanism. For example: "Smoking increases CHD risk because <strong>nicotine raises blood pressure</strong>, which damages artery endothelium and accelerates atherosclerosis, and <strong>carbon monoxide</strong> reduces haemoglobin\'s oxygen-carrying capacity, reducing oxygen supply to the heart."'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Heart Attack vs Cardiac Arrest',
        text: 'A <strong>heart attack</strong> (myocardial infarction) is caused by a blocked coronary artery — heart muscle is damaged but the heart may keep beating. A <strong>cardiac arrest</strong> is when the heart stops beating entirely. A heart attack can trigger a cardiac arrest, but they are not the same thing.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Coronary arteries supply the heart muscle with oxygen. Atherosclerosis — build-up of fatty plaques in coronary artery walls — narrows the lumen and reduces blood flow, causing coronary heart disease. A complete blockage (thrombus on a ruptured plaque) causes a heart attack (myocardial infarction). Risk factors: high LDL cholesterol, smoking, high blood pressure, poor diet, inactivity, obesity, diabetes, age, sex, and genetics. Treatments include statins, angioplasty, bypass surgery, and lifestyle changes.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Coronary arteries supply heart muscle with O₂. Atherosclerosis = fatty plaques narrow artery lumen. CHD results; complete blockage = heart attack (myocardial infarction). Risk factors: high LDL, smoking, hypertension, diet, inactivity, obesity. Treatments: statins, angioplasty, CABG, lifestyle.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'Why do the coronary arteries exist, and what happens if they become blocked?', answer: 'The heart muscle (myocardium) needs a constant supply of oxygen and glucose for respiration. The coronary arteries branch from the aorta and supply the heart muscle directly. If they become blocked by atherosclerotic plaques or a thrombus, the heart muscle is deprived of oxygen and cells die — a heart attack (myocardial infarction).' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Describe the process of atherosclerosis (plaque formation) in 4 steps.', answer: '1. Damage to artery endothelium (from high BP, smoking). 2. LDL cholesterol accumulates at damage site; white blood cells engulf it, forming foam cells. 3. Calcium and fibrous tissue build up, forming a hard plaque (atheroma) that bulges into the lumen. 4. Lumen narrows, reducing blood flow; if plaque ruptures, a thrombus (clot) can block the artery completely.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Explain how smoking increases the risk of coronary heart disease.', answer: 'Nicotine in cigarettes raises blood pressure, which damages the artery endothelium, accelerating atherosclerosis. Carbon monoxide reduces haemoglobin\'s ability to carry oxygen. Toxins in smoke promote inflammation and plaque formation. Combined, these effects significantly increase CHD risk.' },
      { id: 'cue-4', blockId: 'tbl-2', prompt: 'What is a statin, and how does it reduce the risk of CHD?', answer: 'Statins are drugs that reduce the level of LDL (bad) cholesterol in the blood. By lowering LDL, they slow or prevent the build-up of fatty plaques (atheromas) in artery walls, reducing the progression of atherosclerosis and the risk of coronary heart disease and heart attack.' },
      { id: 'cue-5', blockId: 'tbl-2', prompt: 'Describe how an angioplasty treats coronary heart disease.', answer: 'A thin catheter (tube) with a deflated balloon at its tip is inserted into the narrowed coronary artery. The balloon is inflated to compress the plaque and widen the lumen. A metal mesh tube (stent) is often left in place to keep the artery open and maintain blood flow to the heart muscle.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_9_9_4;
