export const note_biology_1_1_9 = {
  blocks: [
    {
      id: 'obj-cvd-treat',
      type: 'objective',
      data: {
        text: 'Understand CVD treatments including lifestyle modifications, pharmacological interventions, surgical procedures, and transplantation, with consideration of ethical implications.'
      }
    },
    {
      id: 'h-lifestyle',
      type: 'heading',
      data: {
        text: 'Lifestyle Interventions',
        level: 2
      }
    },
    {
      id: 'p-lifestyle-diet',
      type: 'paragraph',
      data: {
        text: 'Lifestyle modifications are the foundation of CVD treatment and prevention. Dietary changes include reducing saturated fat (<7% of calories), increasing unsaturated fats (olive oil, fish, nuts), reducing salt intake (<6g/day), increasing fibre (soluble fibre from oats, beans), and increasing fruit and vegetable intake (≥5 portions daily). The Mediterranean diet (high unsaturated fats, vegetables, fish, moderate wine, minimal processed foods) has strong evidence for CVD risk reduction and improved outcomes after MI. Weight loss of 5–10% in obese patients reduces blood pressure, improves lipid profile, and improves insulin sensitivity. Smoking cessation is paramount; CVD risk falls by ~50% within 1 year and approaches that of never-smokers within 10 years.'
      }
    },
    {
      id: 'p-lifestyle-exercise',
      type: 'paragraph',
      data: {
        text: 'Regular aerobic exercise (at least 150 minutes per week of moderate intensity, or 75 minutes of vigorous intensity) is crucial. Exercise raises HDL, lowers LDL and triglycerides, lowers blood pressure, improves insulin sensitivity, reduces obesity, reduces inflammation, improves endothelial function, and increases coronary collateralisation (development of additional blood vessels that can bypass stenotic arteries). Resistance training is also beneficial, improving strength and metabolic health. Exercise also has psychological benefits: it reduces stress, anxiety, and depression, all CVD risk factors. Cardiac rehabilitation programs combining supervised exercise, education, and psychological support improve outcomes after MI and reduce mortality by ~25%.'
      }
    },
    {
      id: 'p-lifestyle-other',
      type: 'paragraph',
      data: {
        text: 'Stress reduction is important; chronic stress raises cortisol and increases thrombosis risk. Stress management techniques (meditation, yoga, counselling) are beneficial. Alcohol moderation (no more than 2 units per day for men, 1 unit for women) is recommended; excessive alcohol raises blood pressure and triglycerides. Sleep quality matters; inadequate sleep increases CVD risk. Combined lifestyle modification addressing diet, exercise, smoking, stress, and sleep can lower CVD risk by >50%, rivalling or exceeding drug therapy in some patients.'
      }
    },
    {
      id: 'h-pharmacological',
      type: 'heading',
      data: {
        text: 'Pharmacological Treatments',
        level: 2
      }
    },
    {
      id: 'p-statins-drugs',
      type: 'paragraph',
      data: {
        text: 'Statins (covered previously) are first-line agents for lowering LDL in patients with high cholesterol or established CVD. They reduce MI and stroke risk by ~30% over 2 years. Other lipid-lowering agents include ezetimibe (inhibits intestinal cholesterol absorption, further lowers LDL), PCSK9 inhibitors (monoclonal antibodies that increase LDL receptor expression, lower LDL by ~50%), and fibrates (increase HDL and lower triglycerides, useful in hypertriglyceridaemia).'
      }
    },
    {
      id: 'p-anticoagulants',
      type: 'paragraph',
      data: {
        text: 'Anticoagulants reduce thrombosis risk. Warfarin is a vitamin K antagonist that inhibits clotting factors II, VII, IX, and X. It is used in atrial fibrillation (a-fib) to prevent stroke and in patients with venous thrombosis. Direct oral anticoagulants (DOACs: apixaban, rivaroxaban, dabigatran) directly inhibit factor Xa or thrombin, with quicker onset and no dietary interaction. Aspirin irreversibly inhibits platelet cyclooxygenase, preventing thromboxane A₂ synthesis and platelet aggregation. Low-dose aspirin (75–100 mg daily) is used for secondary prevention (after MI or stroke) and in some high-risk individuals for primary prevention. Antiplatelet agents reduce MI and stroke risk by inhibiting thrombosis.'
      }
    },
    {
      id: 'p-antihypertensives',
      type: 'paragraph',
      data: {
        text: 'Antihypertensive drugs lower blood pressure, reducing MI, stroke, and heart failure risk. ACE inhibitors (e.g. lisinopril) block angiotensin II synthesis, reducing vasoconstriction and aldosterone, lowering blood pressure and reducing cardiac workload. Angiotensin II receptor blockers (ARBs: losartan) block angiotensin II receptors with similar effects. β-blockers (e.g. bisoprolol) reduce heart rate and contractility via beta-adrenergic antagonism, lowering blood pressure and myocardial oxygen demand. Calcium channel blockers (e.g. amlodipine) cause vasodilation by blocking L-type calcium channels. Diuretics (e.g. furosemide) reduce blood volume. Combination therapy (e.g. ACE inhibitor + calcium channel blocker) is often used to achieve target blood pressure (<140/90 mmHg for most, <130/80 mmHg for high-risk patients).'
      }
    },
    {
      id: 'table-drugs',
      type: 'comparisonTable',
      data: {
        headers: ['Drug Class', 'Example', 'Mechanism', 'CVD Benefit', 'Target Condition'],
        rows: [
          ['Statin', 'Atorvastatin', 'Inhibit HMG-CoA reductase', 'Lower LDL ~30%, reduce MI/stroke', 'High LDL'],
          ['Anticoagulant', 'Warfarin, Apixaban', 'Inhibit clotting factors', 'Reduce stroke in a-fib', 'Thrombosis risk'],
          ['Antiplatelet', 'Aspirin', 'Inhibit platelet aggregation', 'Reduce MI/stroke recurrence', 'Secondary prevention'],
          ['ACE inhibitor', 'Lisinopril', 'Block angiotensin II', 'Lower BP, reduce LV workload', 'Hypertension'],
          ['β-blocker', 'Bisoprolol', 'Reduce HR and contractility', 'Lower BP, ↓ myocardial O₂ demand', 'Hypertension, post-MI'],
          ['Calcium channel blocker', 'Amlodipine', 'Cause vasodilation', 'Lower BP, improve coronary flow', 'Hypertension, angina']
        ],
        caption: 'Major drug classes for CVD treatment'
      }
    },
    {
      id: 'h-surgical',
      type: 'heading',
      data: {
        text: 'Surgical and Interventional Treatments',
        level: 2
      }
    },
    {
      id: 'p-angioplasty',
      type: 'paragraph',
      data: {
        text: 'Coronary angioplasty (percutaneous coronary intervention, PCI) is a catheter-based procedure for opening narrowed coronary arteries. A catheter is advanced through the femoral or radial artery into the aorta and into the coronary artery. A balloon is inflated across the stenotic lesion, compressing the plaque and widening the lumen. In modern practice, a metallic stent (expandable mesh tube) is placed to scaffold the vessel open and prevent restenosis (re-narrowing). Drug-eluting stents (DES) release antiproliferative agents that reduce neointimal hyperplasia and restenosis risk further. PCI rapidly restores blood flow in acute MI, reducing myocardial damage. Success rates exceed 95% for suitable lesions, with low procedural mortality (~0.1%). Complications include stent thrombosis (if antiplatelet therapy is stopped prematurely), re-stenosis (5–15% at 6 months even with DES), and vessel perforation.'
      }
    },
    {
      id: 'p-bypass',
      type: 'paragraph',
      data: {
        text: 'Coronary artery bypass grafting (CABG) is surgical revascularisation where a vein (saphenous vein) or artery (internal mammary artery, radial artery) is grafted to bypass the stenotic coronary artery. The graft is anastomosed (connected) distally to a healthy portion of the artery beyond the stenosis. Multiple grafts (single, double, triple vessel CABG) can be placed in one operation. CABG is preferred for left main coronary stenosis, three-vessel disease, or when PCI is not feasible (very long lesions, total occlusions, severe calcification). Operative mortality is ~1–2% but higher in elderly, diabetic, or unstable patients. Long-term survival is excellent; 80–90% of vein grafts remain patent at 10 years, though arterial grafts (internal mammary) last longer (>95% at 10 years). CABG offers superior long-term outcomes compared to PCI in multivessel disease.'
      }
    },
    {
      id: 'p-valve-transplant',
      type: 'paragraph',
      data: {
        text: 'Artificial heart valve replacement is necessary when native valves are damaged by endocarditis, rheumatic disease, degenerative calcification, or other conditions. Mechanical valves (bileaflet design) are durable (>25 years) but require lifelong anticoagulation (warfarin), increasing bleeding risk. Bioprosthetic valves (porcine or bovine pericardium) avoid anticoagulation but degenerate (10–15 year durability), requiring reoperation. Ross procedure (pulmonary autograft) uses the patient\'s own pulmonary valve to replace the aortic valve; excellent long-term outcomes but requires pulmonary valve replacement with a prosthesis. Heart transplantation is the definitive treatment for end-stage heart failure refractory to medical and surgical therapy. However, donor scarcity limits transplantation; median survival is ~10 years, limited by chronic rejection. Artificial heart devices (left ventricular assist devices, LVAD) can sustain life awaiting transplant or as destination therapy.'
      }
    },
    {
      id: 'h-ethical',
      type: 'heading',
      data: {
        text: 'Ethical Considerations',
        level: 2
      }
    },
    {
      id: 'p-ethical-access',
      type: 'paragraph',
      data: {
        text: 'Ethical challenges in CVD treatment include access and equity. Expensive treatments (PCSK9 inhibitors, transplantation, LVAD) are not available to all populations, creating disparities. Some argue that resources should prioritise prevention (diet, exercise, smoking cessation programs) over expensive interventions in wealthy individuals. Statins are widely available and cost-effective but remain underused in low-income countries. Shared decision-making is ethically important: patients should understand risks/benefits of procedures (e.g. stent restenosis, bypass graft failure) and choose based on their values.'
      }
    },
    {
      id: 'p-ethical-lifestyle',
      type: 'paragraph',
      data: {
        text: 'Ethical issues also arise regarding lifestyle modifications. Some argue that patients with modifiable risk factors (smoking, obesity, poor diet) should receive less aggressive treatment until they improve these factors, citing fairness and resource allocation. However, others argue this is coercive and discriminatory, especially given the role of social determinants (poverty, education, food access) in lifestyle factors. Paternalism vs autonomy is another tension: should doctors limit treatment to patients who "comply" with lifestyle advice, or should patients autonomously choose their risk level? Modern ethics emphasises shared decision-making, harm reduction (helping patients reduce CVD risk incrementally rather than expecting perfection), and addressing social determinants of health.'
      }
    },
    {
      id: 'callout-worked-pci-vs-cabg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PCI vs CABG: Which to Choose?',
        text: 'PCI (stent): quick, catheter-based, low operative mortality, good for single vessel or acute MI. Restenosis risk 5–15%. CABG (bypass): surgical, requires general anaesthetic, higher operative mortality (~2%), excellent long-term patency. Preferred for left main, three-vessel disease. Multivessel disease: CABG has better long-term outcomes; PCI is less invasive initially.'
      }
    },
    {
      id: 'callout-tip-anticoagulation',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Anticoagulation after Stent Placement',
        text: 'After PCI + stent: must take dual antiplatelet therapy (DAPT): aspirin 75 mg daily PLUS clopidogrel/ticagrelor for 12 months (or longer). Stopping early risks stent thrombosis, usually fatal. Never stop without cardiologist approval!'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'ACE inhibitors lower blood pressure by blocking the conversion of angiotensin I to angiotensin II via the angiotensin-converting enzyme (ACE). Since angiotensin II is a potent vasoconstrictor and stimulates aldosterone secretion (which increases blood volume), blocking ACE reduces vasoconstriction and sodium/water retention, thereby lowering blood pressure.',
        apply: 'A bypass graft uses a 20 cm length of saphenous vein. If the graft has an internal diameter of 4 mm vs the blocked coronary artery\'s original 3 mm, how much does blood flow increase (using Poiseuille\'s law: flow ∝ r⁴)?',
        analyze: 'Compare angioplasty with stent insertion versus coronary artery bypass grafting (CABG). Consider procedural risk, recovery time, long-term patency, and which patients benefit most from each.',
        evaluate: 'Evaluate the ethical considerations of heart transplantation as a treatment for end-stage heart failure. Consider organ availability, immunosuppression burden, quality of life, and allocation justice.'
      },
      terms: []
    },
    {
      id: 'checklist-cvd-treat',
      type: 'checklist',
      data: {
        items: [
          { text: 'Lifestyle: diet (Mediterranean), exercise (150 min/week), smoking cessation, stress reduction', checked: false },
          { text: 'Statins lower LDL; anticoagulants (warfarin, DOAC) prevent thrombosis; aspirin reduces recurrence', checked: false },
          { text: 'Antihypertensives: ACE inhibitors, ARBs, β-blockers, calcium channel blockers lower BP', checked: false },
          { text: 'PCI + stent: quick, low operative mortality, but 5–15% restenosis risk', checked: false },
          { text: 'CABG: superior long-term outcomes for multivessel disease; requires surgery', checked: false }
        ]
      }
    },
    {
      id: 'summary-cvd-treat',
      type: 'summary',
      data: {
        text: 'CVD treatment combines lifestyle (diet, exercise, smoking cessation, stress reduction) and pharmacotherapy (statins, anticoagulants, antiplatelets, antihypertensives). PCI with stent is minimally invasive for acute MI and single-vessel disease but has restenosis risk. CABG offers superior long-term patency for multivessel disease. Valve replacement (mechanical vs bioprosthetic) and heart transplantation are for advanced valve disease and end-stage heart failure. Ethical considerations: equity of access, shared decision-making, addressing social determinants of health, harm reduction approach to lifestyle modification.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-lifestyle-diet',
        prompt: 'What dietary changes reduce CVD risk? Describe the Mediterranean diet.'
      },
      {
        id: 'cue-2',
        blockId: 'p-lifestyle-exercise',
        prompt: 'How does regular exercise reduce CVD risk? Quantify the recommended exercise.'
      },
      {
        id: 'cue-3',
        blockId: 'p-antihypertensives',
        prompt: 'Name four classes of antihypertensive drugs and explain how each lowers blood pressure.'
      },
      {
        id: 'cue-4',
        blockId: 'p-angioplasty',
        prompt: 'Explain PCI and stent placement. What is restenosis and how do drug-eluting stents reduce it?'
      },
      {
        id: 'cue-5',
        blockId: 'p-bypass',
        prompt: 'What is CABG? When is it preferred over PCI? What are graft patency rates?'
      }
    ],
    summaryText: 'Lifestyle: Mediterranean diet, 150 min/week aerobic exercise, smoking cessation, stress reduction, weight loss. Drugs: statins (↓LDL), anticoagulants (warfarin/DOAC, prevent stroke in a-fib), aspirin (secondary prevention), antihypertensives (ACE-I, ARB, β-block, CCB). PCI + stent: minimally invasive, quick, restenosis 5–15%. CABG: surgical bypass, better long-term patency, preferred for multivessel disease. Valve replacement (mechanical vs bio). Ethical: equity of access, shared decision-making, harm reduction.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'CVD Treatment and Intervention Strategies',
      detail: 'Comprehensive overview of lifestyle, pharmacological, and surgical interventions for CVD.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['cvd-treatment', 'lifestyle', 'statins', 'anticoagulants', 'pci', 'cabg', 'ethics']
    }
  ]
};
