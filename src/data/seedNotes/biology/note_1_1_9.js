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
          { text: 'Smoking: CO reduces O₂ capacity; nicotine increases BP; oxidative stress damages endothelium', checked: false },
          { text: 'High saturated fat diet raises LDL; promotes atherosclerosis', checked: false },
          { text: 'Hypertension damages endothelium and causes LV hypertrophy', checked: false },
          { text: 'Obesity and diabetes increase inflammation, dyslipidaemia, and thrombosis risk', checked: false },
          { text: 'Antioxidants prevent LDL oxidation; dietary sources more beneficial than supplements', checked: false }
        ]
      }
    },
    {
      id: 'summary-cvd-risk',
      type: 'summary',
      data: {
        text: 'Modifiable CVD risk factors: smoking (CO, nicotine, oxidative stress), high saturated fat diet (raises LDL), hypertension (endothelial damage), obesity (inflammation), diabetes (endothelial damage), and sedentary lifestyle. Non-modifiable: age, sex, genetics. Antioxidants (vitamin C, E, β-carotene, flavonoids) prevent LDL oxidation but supplementation lacks evidence; dietary sources recommended. Mediterranean diet combines antioxidants, anti-inflammatory effects, and lipid benefits.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-smoking',
        prompt: 'Explain three ways smoking increases CVD risk. What is the role of carbon monoxide?'
      },
      {
        id: 'cue-2',
        blockId: 'p-diet',
        prompt: 'How do saturated fats, trans fats, and unsaturated fats affect CVD risk?'
      },
      {
        id: 'cue-3',
        blockId: 'p-hypertension',
        prompt: 'Why is hypertension a major CVD risk factor? What causes it?'
      },
      {
        id: 'cue-4',
        blockId: 'p-antioxidants-def',
        prompt: 'What are free radicals? How do antioxidants neutralise them?'
      },
      {
        id: 'cue-5',
        blockId: 'p-antioxidants-cvd',
        prompt: 'What does the evidence say about antioxidant supplementation for CVD prevention?'
      }
    ],
    summaryText: 'Modifiable risk factors: smoking (CO↓O₂, nicotine↑BP, oxidative stress); high sat. fat (↑LDL); hypertension (endothelial damage); obesity (inflammation); diabetes (glycation); sedentary (no exercise benefits). Non-modifiable: age, sex, genetics. Antioxidants (vit C/E, β-carotene, flavonoids) prevent LDL oxidation; dietary sources superior to supplements. Free radicals: unpaired electrons, damage biomolecules. Mediterranean diet: antioxidants + anti-inflammatory + lipid benefits.',
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
