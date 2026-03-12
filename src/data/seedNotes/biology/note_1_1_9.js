export const note_biology_1_1_9 = {
  blocks: [
    {
      id: 'obj-cvd-risk',
      type: 'objective',
      data: {
        text: 'Understand modifiable and non-modifiable risk factors for cardiovascular disease, and the role of antioxidants in protecting against CVD.'
      }
    },
    {
      id: 'h-modifiable-risk',
      type: 'heading',
      data: {
        text: 'Modifiable Risk Factors for CVD',
        level: 2
      }
    },
    {
      id: 'p-smoking',
      type: 'paragraph',
      data: {
        text: 'Smoking is a major modifiable risk factor for CVD. Cigarette smoke contains over 7000 chemicals, many of which are harmful. Carbon monoxide (CO) binds to haemoglobin with an affinity ~200 times higher than oxygen, forming carboxyhaemoglobin (COHb). This reduces the oxygen-carrying capacity of blood, causing chronic hypoxia even in smokers at rest. Nicotine acts as a stimulant, increasing heart rate and blood pressure acutely and promoting vasoconstriction via sympathetic nervous system activation. Over time, nicotine contributes to hypertension. Smoking also increases oxidative stress, promoting LDL oxidation and atherosclerosis. Additionally, smoking damages the endothelium, impairs vasodilation (via reduced nitric oxide availability), and increases blood viscosity, raising CVD risk.'
      }
    },
    {
      id: 'p-diet',
      type: 'paragraph',
      data: {
        text: 'Diet plays a crucial role in CVD risk. A diet high in saturated fat and cholesterol raises blood LDL cholesterol levels, promoting atherosclerosis. Trans fats (found in processed foods) are particularly harmful, raising LDL and lowering HDL. In contrast, a diet rich in unsaturated fats (olive oil, fish, nuts) raises HDL and can lower LDL and triglycerides. High salt intake increases blood volume and raises blood pressure, increasing CVD risk. Excessive sugar consumption contributes to obesity, diabetes, and elevated triglycerides. A diet rich in fruit and vegetables provides antioxidants (vitamins C, E, β-carotene) and fibre, both protective. The Mediterranean diet (high in unsaturated fats, vegetables, fish, and low in saturated fat) is associated with lower CVD mortality.'
      }
    },
    {
      id: 'p-hypertension',
      type: 'paragraph',
      data: {
        text: 'Hypertension (elevated blood pressure) is a major risk factor for atherosclerosis, MI, and stroke. High blood pressure causes shear stress on the arterial endothelium, promoting damage and initiating atherosclerosis. It also increases the workload on the left ventricle, causing left ventricular hypertrophy (thickening). Chronic hypertension reduces the elasticity of arterial walls (arteriosclerosis), further raising blood pressure. Risk factors for hypertension include high salt intake, obesity, excessive alcohol, stress, and genetic predisposition. Management involves reducing salt intake, weight loss, regular exercise, stress reduction, and medications (ACE inhibitors, β-blockers, calcium channel blockers).'
      }
    },
    {
      id: 'p-obesity-diabetes',
      type: 'paragraph',
      data: {
        text: 'Obesity (BMI > 30) is associated with multiple CVD risk factors: elevated blood pressure, higher cholesterol, insulin resistance, and systemic inflammation. Excess adipose tissue produces inflammatory cytokines (IL-6, TNF-α) that promote atherosclerosis. Type 2 diabetes is both a consequence of obesity and an independent CVD risk factor. High blood glucose damages the endothelium via glycation of proteins, promotes LDL oxidation, and increases thrombosis risk. Diabetic patients have accelerated atherosclerosis and are at high risk of MI and stroke. Tight glycaemic control reduces CVD complications.'
      }
    },
    {
      id: 'p-sedentary',
      type: 'paragraph',
      data: {
        text: 'Physical inactivity (sedentary lifestyle) increases CVD risk independently of other factors. Regular exercise has multiple protective effects: it increases HDL and lowers triglycerides, reduces blood pressure, improves insulin sensitivity, reduces obesity, and promotes endothelial function. Exercise training also improves cardiac output and coronary collateralisation (development of additional blood vessels), providing a buffer against coronary stenosis. The recommended minimum is 150 minutes of moderate-intensity aerobic exercise per week. Even light activity (walking) is beneficial; sedentary time accumulation increases CVD risk regardless of exercise amount.'
      }
    },
    {
      id: 'table-modifiable',
      type: 'comparisonTable',
      data: {
        headers: ['Risk Factor', 'Mechanism', 'CVD Risk Change', 'Intervention'],
        rows: [
          ['Smoking', 'CO reduces O₂ capacity; nicotine → hypertension; oxidative stress; endothelial damage', 'Greatly increased', 'Cessation; nicotine replacement'],
          ['High sat. fat diet', 'Raises LDL; promotes atherosclerosis', 'Greatly increased', 'Reduce saturated fat; increase fibre'],
          ['Hypertension', 'Endothelial damage; LV hypertrophy; arteriosclerosis', 'Greatly increased', 'Reduce salt; exercise; medication'],
          ['Obesity', 'Hypertension; dyslipidaemia; inflammation; insulin resistance', 'Increased', 'Weight loss; exercise; diet'],
          ['Diabetes', 'Endothelial damage; LDL oxidation; thrombosis', 'Greatly increased', 'Glycaemic control; metformin'],
          ['Sedentary', 'No protective effects of exercise; dyslipidaemia; hypertension', 'Increased', 'Regular aerobic exercise']
        ],
        caption: 'Modifiable CVD risk factors and interventions'
      }
    },
    {
      id: 'h-non-modifiable',
      type: 'heading',
      data: {
        text: 'Non-Modifiable Risk Factors',
        level: 2
      }
    },
    {
      id: 'p-non-modifiable',
      type: 'paragraph',
      data: {
        text: 'Non-modifiable risk factors include age, sex, and genetic predisposition. CVD risk increases with age in both men and women, but men develop CVD 10–15 years earlier on average. Oestrogen has protective effects in premenopausal women; after menopause, CVD risk rises. Genetic factors determine baseline lipid levels, blood pressure, and atherosclerosis susceptibility. Familial hypercholesterolaemia (FH), caused by mutations in the LDL receptor gene, results in extremely high LDL levels and premature atherosclerosis (MI in childhood if homozygous). Family history of premature CVD (male relative with MI before age 55, female before age 65) is a strong risk factor. These factors cannot be changed, but awareness allows preventive measures (medication, lifestyle optimisation) in high-risk individuals.'
      }
    },
    {
      id: 'h-antioxidants',
      type: 'heading',
      data: {
        text: 'Antioxidants and CVD Protection',
        level: 2
      }
    },
    {
      id: 'p-antioxidants-def',
      type: 'paragraph',
      data: {
        text: 'Antioxidants are molecules that neutralise free radicals—highly reactive species with unpaired electrons (e.g. O₂⁻, OH•, H₂O₂). Free radicals are produced during normal metabolism, especially in mitochondria during aerobic respiration, and by inflammation. They damage cellular components: lipids (lipid peroxidation), proteins (oxidative modification), and DNA (mutations). In atherosclerosis, free radicals promote LDL oxidation, the critical first step in plaque formation. Antioxidants prevent or slow free radical reactions by donating an electron, becoming slightly more stable themselves but less reactive. Key dietary antioxidants include vitamin C (ascorbic acid), vitamin E (tocopherol), β-carotene (provitamin A), and flavonoids (in berries, tea, red wine).'
      }
    },
    {
      id: 'p-antioxidants-mechanisms',
      type: 'paragraph',
      data: {
        text: 'Vitamin C (present in citrus, berries, peppers) is a water-soluble antioxidant that operates in aqueous environments (plasma, cytoplasm). It directly scavenges free radicals and regenerates vitamin E. Vitamin E (in nuts, seeds, vegetable oils) is a fat-soluble antioxidant that operates in lipid environments (cell membranes, lipoproteins). It prevents lipid peroxidation and is particularly important for protecting LDL from oxidation. β-carotene (in orange/red vegetables) is a precursor to vitamin A and acts as an antioxidant, particularly against singlet oxygen. Flavonoids (in berries, tea, dark chocolate) have potent antioxidant and anti-inflammatory effects, reduce platelet aggregation, and improve endothelial function. Enzyme-based antioxidant defences include superoxide dismutase (SOD), catalase, and glutathione peroxidase, which catalyse breakdown of free radicals.'
      }
    },
    {
      id: 'p-antioxidants-cvd',
      type: 'paragraph',
      data: {
        text: 'The antioxidant hypothesis proposed that dietary antioxidants reduce CVD risk by preventing LDL oxidation and atherosclerosis. Observational studies showed inverse correlations between antioxidant intake and CVD. However, large randomised controlled trials (e.g. HOPE for vitamin E, SELECT for vitamin E and selenium) found that supplementation did not reduce CVD events in primary or secondary prevention, contradicting the hypothesis. The reasons are complex: antioxidant supplements may lack the co-nutrients and bioactivity of whole foods, or excessive antioxidants might inhibit beneficial reactive oxygen species signalling. Current evidence supports consuming antioxidants through diet (fruits, vegetables, nuts, whole grains, olive oil) rather than supplements. The Mediterranean diet\'s CVD benefit likely involves antioxidants plus anti-inflammatory, lipid-lowering, and antiplatelet effects of whole foods.'
      }
    },
    {
      id: 'callout-key-antioxidants',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Antioxidants Neutralise Free Radicals',
        text: 'Free radicals: unpaired electrons, damage lipids/proteins/DNA, promote LDL oxidation and atherosclerosis. Antioxidants donate electrons to free radicals, neutralising them. Dietary sources (vitamin C, E, β-carotene, flavonoids) are protective; supplements unclear benefit.'
      }
    },
    {
      id: 'callout-tip-salt',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Salt and Hypertension',
        text: 'High salt intake → increased blood volume → increased blood pressure. Reducing salt from 10g/day (typical Western diet) to <6g/day can lower BP by ~5 mmHg. This modest reduction, applied to populations, prevents many strokes and MIs. Most salt comes from processed foods, not table salt.'
      }
    },
    {
      id: 'h-obesity-measures',
      type: 'heading',
      data: { text: 'Measuring Obesity: BMI and Waist:Hip Ratio', level: 2 }
    },
    {
      id: 'eq-bmi',
      type: 'equation',
      data: {
        html: 'BMI = <span class="nb-frac"><span class="nb-num">mass (kg)</span><span class="nb-den">height² (m²)</span></span>',
        caption: 'Body Mass Index formula'
      }
    },
    {
      id: 'table-bmi',
      type: 'comparisonTable',
      data: {
        headers: ['BMI (kg/m²)', 'Classification', 'CVD Risk'],
        rows: [
          ['< 18.5', 'Underweight', 'Some increased risk'],
          ['18.5 – 24.9', 'Normal weight', 'Lowest CVD risk'],
          ['25.0 – 29.9', 'Overweight', 'Moderately increased'],
          ['≥ 30', 'Obese', 'Significantly increased']
        ],
        caption: 'BMI classification bands and CVD risk'
      }
    },
    {
      id: 'p-waist-hip',
      type: 'paragraph',
      data: {
        text: 'Waist:hip ratio (WHR) = waist circumference (cm) ÷ hip circumference (cm). Abdominal (visceral) fat is metabolically active and strongly linked to CVD, type 2 diabetes, and metabolic syndrome. Healthy WHR thresholds: women < 0.86; men < 1.0. A high WHR indicates greater central fat and higher CVD risk. WHR is often more useful than BMI alone since BMI cannot distinguish fat from muscle.'
      }
    },
    {
      id: 'callout-tip-bmi-whr',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'BMI vs Waist:Hip Ratio',
        text: 'BMI does not distinguish fat from muscle — a heavily muscled athlete may have BMI >30 (classed "obese"). Waist:hip ratio is a better measure of central fat distribution, which is more strongly linked to CVD risk. Learn both formulas and the threshold values for examinations.'
      }
    },
    {
      id: 'h-data-skills',
      type: 'heading',
      data: { text: 'Interpreting Data on CVD Risk', level: 2 }
    },
    {
      id: 'table-data-skills',
      type: 'comparisonTable',
      data: {
        headers: ['Question type', 'Technique required', 'Key phrases'],
        rows: [
          ['Describe', 'Quote specific figures with units; state the trend; note anomalies', '"As X increases, Y increases from ___ to ___"; "at X = ___, Y = ___"'],
          ['Conclude', 'State what the data shows; link independent and dependent variables', '"The data suggests a positive correlation between…"; "These results indicate…"'],
          ['Evaluate', 'Discuss sample size, randomisation, controls, confounders, reproducibility; distinguish correlation from causation', '"The small sample size reduces reliability"; "Correlation ≠ causation because other variables may…"']
        ],
        caption: 'Data interpretation guide for IAL Biology examinations'
      }
    },
    {
      id: 'callout-we-passive-smoking',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Passive Smoking and CVD Relative Risk',
        text: 'Study data — relative CVD risk in non-smokers by daily passive smoke exposure:\n• 0 cigarettes/day (no passive exposure): relative risk = 1.00 (baseline)\n• 1–19 cigarettes/day: relative risk = 1.23\n• 20+ cigarettes/day: relative risk = 1.31\n\nDescribe: As daily passive smoke exposure increases, relative CVD risk increases. Non-smokers exposed to 20+ cigarettes/day have a relative risk of 1.31 compared to 1.00 for no exposure.\n\nConclude: The data suggests a positive correlation between passive smoke exposure and CVD risk.\n\nEvaluate: This is correlational — it cannot prove causation. Possible confounders: people regularly around smokers may share other risk factors (e.g. unhealthy diet, stress, lower income). Study population and duration not specified, limiting generalisability.'
      }
    },
    {
      id: 'callout-tip-corr-caus',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Correlation vs Causation — Essential Exam Point',
        text: 'Correlation = two variables change together. Causation = one directly causes the other. Correlational studies cannot prove causation because confounding variables may explain the relationship.\n• Use: "The data shows a positive correlation between…"\n• Avoid: "This proves that…"\n• In evaluations: suggest possible confounding variables\n• Meta-analyses (combining many studies) provide stronger evidence but still cannot prove causation definitively.'
      }
    },
    {
      id: 'h-study-design',
      type: 'heading',
      data: { text: 'Designing a Good Scientific Study', level: 2 }
    },
    {
      id: 'list-study-design',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Large sample size — reduces the effect of individual variation; results more representative of the wider population',
          'Random selection — every member of the target population has an equal chance of being selected; minimises selection bias',
          'Control of variables — all variables other than the independent variable kept constant; allows attribution of changes in the dependent variable to the independent variable alone',
          'Avoiding bias — double-blind design: neither participants nor researchers know who is in the treatment/control group; prevents expectations affecting results',
          'Control group — receives no treatment or a placebo; provides a baseline for comparison',
          'Repetition — multiple measurements within the study reduce the effect of random error',
          'Reproducibility — independent researchers should be able to repeat the study and obtain similar results; essential for scientific consensus'
        ]
      }
    },
    {
      id: 'h-perceived-risk',
      type: 'heading',
      data: { text: 'Perception of Risk', level: 2 }
    },
    {
      id: 'p-perceived-risk',
      type: 'paragraph',
      data: {
        text: 'Risk is the probability that a hazard will cause harm. Perceived risk is how risky a person believes a hazard to be. These often differ, influencing health behaviours and the effectiveness of public health campaigns.'
      }
    },
    {
      id: 'table-perceived-risk',
      type: 'comparisonTable',
      data: {
        headers: ['Perception', 'Causing factors', 'Examples'],
        rows: [
          ['Overestimation of risk', 'Heavy media coverage; dramatic consequences; unfamiliar hazard; no perceived control; involuntary exposure', 'Plane crashes; terrorism; drug side effects (make headlines while common risks like CVD do not)'],
          ['Underestimation of risk', 'Familiar, everyday hazard; perceived control; immediate reward; gradual harm with no immediate sensation', 'Driving; smoking; poor diet; CVD — risk develops gradually over years with no immediate symptoms'],
          ['CVD risk specifically', 'Atherosclerosis and high BP cause no symptoms for years; lifestyle changes are effortful; advertising promotes unhealthy foods', 'Most people significantly underestimate their personal CVD risk; public health campaigns use statistics and vivid imagery to correct this']
        ],
        caption: 'Perceived versus actual risk in public health contexts'
      }
    },
    {
      id: 'h-cvd-treatments',
      type: 'heading',
      data: { text: 'Medical Treatments to Reduce CVD Risk', level: 2 }
    },
    {
      id: 'table-cvd-treatments',
      type: 'comparisonTable',
      data: {
        headers: ['Drug class', 'Mechanism', 'Benefits', 'Side effects / risks'],
        rows: [
          ['Antihypertensives — beta-blockers', 'Block β-adrenergic receptors → reduce heart rate and cardiac output → lower blood pressure', 'Lower BP; reduce post-MI mortality; treat arrhythmias', 'Fatigue; cold extremities; bradycardia; contraindicated in asthma'],
          ['Antihypertensives — vasodilators', 'Relax smooth muscle in artery walls → widen vessels → lower BP', 'Effective for acute hypertensive episodes; can be combined with other antihypertensives', 'Headaches; ankle swelling; dizziness; reflex tachycardia'],
          ['Antihypertensives — ACE inhibitors', 'Block angiotensin-converting enzyme → prevent angiotensin II formation → arteries dilate → BP falls', 'Lower BP; protect kidneys in diabetics; reduce post-MI mortality', 'Persistent dry cough; first-dose hypotension; raised potassium (hyperkalaemia)'],
          ['Antihypertensives — diuretics', 'Reduce sodium reabsorption in kidneys → less water reabsorbed → lower blood volume → lower BP', 'Effective; inexpensive; often combined with other antihypertensives', 'Electrolyte imbalance; frequent urination; drowsiness; possible gout'],
          ['Statins', 'Inhibit HMG-CoA reductase in liver → reduce cholesterol synthesis → lower LDL; also reduce arterial inflammation', 'Lower LDL; slightly raise HDL; reduce atheroma progression; lower MI and stroke risk', 'Muscle and joint pain (myopathy); liver damage; neurological effects; may give false security → lifestyle neglect'],
          ['Anticoagulants (warfarin)', 'Reduce production of prothrombin in liver → reduced clotting → decreased thrombosis risk', 'Prevent new blood clots; may reduce existing clots; used post-MI and in atrial fibrillation', 'Excessive bleeding (bruising, internal haemorrhage); dangerous in pregnancy; osteoporosis; requires regular INR blood tests'],
          ['Platelet inhibitors (aspirin, clopidogrel)', 'Prevent platelet aggregation → reduce arterial thrombus formation', 'Prevent stroke and MI from new arterial clots; reduce arterial blockage', 'Excessive bleeding; stomach lining damage; rash; liver dysfunction; combining with anticoagulants increases bleeding risk greatly']
        ],
        caption: 'CVD drug treatments: mechanisms, benefits, and risks'
      }
    },
    {
      id: 'callout-key-treatments',
      type: 'callout',
      data: {
        style: 'key',
        title: 'CVD Drug Treatment Summary',
        text: '• Antihypertensives → lower BLOOD PRESSURE:\n  – Beta-blockers: ↓ heart rate and cardiac output\n  – Vasodilators: ↑ vessel diameter\n  – ACE inhibitors: block angiotensin II → arteries dilate\n  – Diuretics: ↓ blood volume (↓ Na⁺ reabsorption)\n• Statins → lower LDL CHOLESTEROL (block HMG-CoA reductase in liver; also anti-inflammatory)\n• Anticoagulants (warfarin) → prevent THROMBOSIS (↓ prothrombin production)\n• Platelet inhibitors (aspirin/clopidogrel) → prevent PLATELET AGGREGATION\nAll drug classes carry significant side effects — benefits must outweigh risks for each patient.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Carbon monoxide (CO) from cigarette smoke increases CVD risk by binding to haemoglobin with an affinity ~200 times higher than oxygen, forming carboxyhaemoglobin (COHb). This reduces the oxygen-carrying capacity of blood, causing chronic hypoxia (low blood oxygen) even in smokers at rest, forcing the heart to work harder to deliver oxygen to tissues.',
        apply: 'A study shows that smokers have a 2.5× higher risk of CVD than non-smokers. If the baseline risk for non-smokers is 4% over 10 years, calculate the absolute risk for smokers and the number needed to harm (NNH).',
        analyze: 'Compare the mechanisms by which smoking, high salt intake, and obesity each independently increase blood pressure and CVD risk.',
        evaluate: 'Evaluate whether lifestyle interventions or pharmacological treatments (e.g. statins, antihypertensives) are more effective at reducing CVD risk at the population level. Consider compliance, cost, side effects, and efficacy.'
      },
      terms: []
    },
    {
      id: 'checklist-cvd-risk',
      type: 'checklist',
      data: {
        items: [
          { text: 'Smoking: CO + Hb (200× O₂ affinity) → ↓O₂ capacity; nicotine → ↑platelet stickiness + vasoconstriction; smoking ↓antioxidants', checked: false },
          { text: 'High saturated fat → ↑LDL → atherosclerosis; high salt → ↑BP → endothelial damage', checked: false },
          { text: 'Non-modifiable CVD risk: genetics (alleles for ↑BP/cholesterol), age (plaques accumulate), sex (oestrogen protective pre-menopause)', checked: false },
          { text: 'BMI = mass (kg) ÷ height² (m²); bands: <18.5 underweight, 18.5–24.9 normal, 25–29.9 overweight, ≥30 obese', checked: false },
          { text: 'Waist:hip ratio = waist ÷ hip circumference; healthy: women <0.86, men <1.0; high ratio → central fat → high CVD risk', checked: false },
          { text: 'Data skills: describe (specific numbers), conclude (correlation not causation), evaluate (sample size, controls, confounders)', checked: false },
          { text: 'Study design: large random sample, controlled variables, double-blind, control/placebo group, repetition, reproducibility', checked: false },
          { text: 'Perception of risk: CVD risk underestimated (gradual, no immediate symptoms); people overestimate dramatic/unfamiliar risks', checked: false },
          { text: 'Statins: block HMG-CoA reductase → ↓LDL; antihypertensives target BP; anticoagulants (warfarin): ↓prothrombin; platelet inhibitors (aspirin): ↓platelet aggregation', checked: false }
        ]
      }
    },
    {
      id: 'summary-cvd-risk',
      type: 'summary',
      data: {
        text: 'CVD risk factors — modifiable: smoking (CO + Hb → ↓O₂; nicotine → ↑platelet stickiness + vasoconstriction; ↓antioxidants), high saturated fat (↑LDL → atheroma), high salt (↑BP → endothelial damage), obesity, diabetes, sedentary lifestyle. Non-modifiable: age (plaques accumulate), biological sex (oestrogen protective pre-menopause), genetics. Obesity: BMI = mass÷height² (obese ≥30); waist:hip ratio (women <0.86, men <1.0). Data skills: describe with numbers; conclude with correlation not causation; evaluate sample size, controls, confounders. Study design: large random sample, controlled variables, double-blind, control group, reproducibility. Perception of risk: CVD risk underestimated (gradual, asymptomatic). Treatments: antihypertensives (beta-blockers ↓HR, vasodilators, ACE inhibitors, diuretics ↓blood volume), statins (↓LDL — block HMG-CoA reductase), anticoagulants (warfarin ↓prothrombin), platelet inhibitors (aspirin ↓platelet aggregation).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-smoking',
        prompt: 'Explain three ways smoking increases CVD risk. What does CO do to haemoglobin? What does nicotine do to platelets?'
      },
      {
        id: 'cue-2',
        blockId: 'table-modifiable',
        prompt: 'Compare how high saturated fat and high salt intake each increase CVD risk through different mechanisms.'
      },
      {
        id: 'cue-3',
        blockId: 'p-non-modifiable',
        prompt: 'Give three non-modifiable CVD risk factors. Why does biological sex affect CVD risk differently before and after menopause?'
      },
      {
        id: 'cue-4',
        blockId: 'table-bmi',
        prompt: 'State the BMI formula and the four classification bands. Give the healthy threshold values for waist:hip ratio in men and women.'
      },
      {
        id: 'cue-5',
        blockId: 'table-data-skills',
        prompt: 'Distinguish between: describing data, drawing a conclusion, and evaluating a study. Why can correlational studies not prove causation?'
      },
      {
        id: 'cue-6',
        blockId: 'table-cvd-treatments',
        prompt: 'Name four classes of CVD drug. Give the mechanism of action for statins and for warfarin. State one side effect for each class.'
      }
    ],
    summaryText: 'CVD risk — modifiable: smoking (CO+Hb, nicotine→platelets, ↓antioxidants), sat fat (↑LDL), salt (↑BP). Non-modifiable: genetics, age, sex (oestrogen protective). BMI = mass÷height²; obese ≥30. Waist:hip: women <0.86, men <1.0. Data skills: describe (numbers), conclude (correlation not causation), evaluate (sample size, confounders). Study design: large random sample, double-blind, controls, reproducibility. Perception: CVD risk underestimated. Treatments: antihypertensives (beta-blockers, vasodilators, ACE inhibitors, diuretics), statins (↓LDL, block HMG-CoA), anticoagulants (warfarin ↓prothrombin), platelet inhibitors (aspirin ↓aggregation).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'CVD Risk Factors and Antioxidant Defence',
      detail: 'Overview of modifiable and non-modifiable risk factors, and evidence for antioxidant protection.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['cvd', 'risk-factors', 'smoking', 'hypertension', 'diet', 'antioxidants', 'free-radicals']
    }
  ]
};
