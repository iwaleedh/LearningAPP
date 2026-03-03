export const note_biology_1_1_8 = {
  blocks: [
    {
      id: 'obj-cholesterol',
      type: 'objective',
      data: {
        text: 'Understand cholesterol transport via LDL and HDL, their roles in atherosclerosis, and how statins and diet affect cholesterol levels.'
      }
    },
    {
      id: 'h-cholesterol-transport',
      type: 'heading',
      data: {
        text: 'LDL and HDL: Cholesterol Transport',
        level: 2
      }
    },
    {
      id: 'p-ldl',
      type: 'paragraph',
      data: {
        text: 'Cholesterol is a lipid essential for cell membrane structure and steroid hormone synthesis, but excess blood cholesterol is a major CVD risk factor. Cholesterol is hydrophobic and cannot dissolve in blood; it is transported in lipoproteins, which are particles containing a lipid core surrounded by a protein and phospholipid shell. Low-density lipoprotein (LDL) is the primary cholesterol transport vehicle in blood. The liver synthesises cholesterol via the enzyme HMG-CoA reductase and packages it with apolipoprotein B-100 (ApoB-100) into LDL particles. LDL particles circulate and deliver cholesterol to peripheral tissues (muscle, fat, other organs) by binding to LDL receptors on cell surfaces. Cells internalise LDL via receptor-mediated endocytosis, extracting cholesterol for membrane synthesis or hormone production. High blood LDL (>3.6 mmol/L or >140 mg/dL) is associated with atherosclerosis and CVD risk.'
      }
    },
    {
      id: 'p-hdl',
      type: 'paragraph',
      data: {
        text: 'High-density lipoprotein (HDL) plays a "reverse cholesterol transport" role, removing excess cholesterol from tissues and arteries. HDL particles, produced by the liver and intestine, circulate and collect cholesterol from peripheral tissues via the ATP-binding cassette transporter A-1 (ABCA1). HDL carries cholesterol to the liver via apolipoprotein A-1 (ApoA-1) receptors, where it is excreted in bile or converted to bile acids. HDL also removes oxidised lipids from atherosclerotic lesions and has anti-inflammatory and antiplatelet effects. High HDL (>1.0 mmol/L or >40 mg/dL in men, >1.3 mmol/L or >50 mg/dL in women) is protective against CVD. The ratio HDL:LDL (or LDL:HDL) is more predictive of CVD risk than either alone: a high ratio indicates excellent cardiovascular health, while a low ratio indicates elevated risk.'
      }
    },
    {
      id: 'p-ldl-atherosclerosis',
      type: 'paragraph',
      data: {
        text: 'LDL deposits cholesterol in artery walls, directly contributing to atherosclerotic plaque formation. When LDL particles accumulate in the arterial intima, they undergo oxidation (in the presence of free radicals and inflammatory mediators) to oxLDL. OxLDL is taken up by macrophages via scavenger receptors, forming foam cells. The foam cells secrete pro-inflammatory cytokines, attracting more macrophages and smooth muscle cells, promoting plaque growth. Therefore, elevated LDL is a causal risk factor for atherosclerosis. Conversely, HDL removes cholesterol from plaques and macrophages, and its anti-inflammatory effects slow plaque progression. This explains why reducing LDL and raising HDL are primary targets for CVD prevention.'
      }
    },
    {
      id: 'table-ldl-hdl',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'LDL', 'HDL'],
        rows: [
          ['Density', 'Low (lipid-rich, less protein)', 'High (protein-rich, less lipid)'],
          ['Function', 'Transport cholesterol to tissues', 'Remove cholesterol from tissues (reverse transport)'],
          ['Source', 'Liver synthesis (VLDL → LDL)', 'Liver, intestine'],
          ['Apolipoproteins', 'ApoB-100', 'ApoA-1'],
          ['Receptors', 'LDL receptor (cells)', 'SR-B1, ABCA1 (tissue); ApoA-1 receptor (liver)'],
          ['CVD Effect', 'Increases risk (deposits in plaques)', 'Decreases risk (removes cholesterol, anti-inflammatory)'],
          ['Target level', '<2.6 mmol/L (<100 mg/dL) for high-risk', '>1.0 mmol/L (>40 mg/dL) men, >1.3 mmol/L (>50 mg/dL) women'],
          ['Effect of sat. fat', 'Raises LDL', 'Can lower HDL (if very high sat. fat)'],
          ['Effect of unsaturated fat', 'Can lower LDL', 'Raises HDL']
        ],
        caption: 'LDL and HDL comparison'
      }
    },
    {
      id: 'h-statins',
      type: 'heading',
      data: {
        text: 'Statins: HMG-CoA Reductase Inhibitors',
        level: 2
      }
    },
    {
      id: 'p-statins-mech',
      type: 'paragraph',
      data: {
        text: 'Statins are a class of drugs that inhibit HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis in hepatocytes. By blocking this enzyme, statins reduce intracellular hepatic cholesterol concentration. In response to lower intracellular cholesterol, the liver upregulates LDL receptor expression on hepatocyte surfaces. Increased LDL receptors remove more LDL particles from the blood via receptor-mediated endocytosis, thereby lowering blood LDL by 25–50% depending on the statin and dose. Common statins include atorvastatin, simvastatin, and rosuvastatin. Statins are highly effective at lowering LDL and are considered the gold standard for CVD prevention in patients with high LDL or established atherosclerosis.'
      }
    },
    {
      id: 'p-statins-additional',
      type: 'paragraph',
      data: {
        text: 'Beyond LDL lowering, statins have pleiotropic effects (multiple beneficial effects beyond their primary mechanism). They stabilise atherosclerotic plaques by reducing inflammation and macrophage activity, decreasing plaque rupture risk. They improve endothelial function and nitric oxide (NO) bioavailability, enhancing vasodilation. They reduce platelet aggregation, lowering thrombosis risk. They may have direct antiioxidant effects. Consequently, statins reduce MI and stroke risk in both primary prevention (high-risk individuals without previous CVD) and secondary prevention (after MI or stroke). Large randomised controlled trials demonstrate that statins reduce all-cause mortality. Side effects are generally mild (muscle pain in ~10%) but rare serious effects can occur (myositis, hepatotoxicity). Current guidelines recommend statins for patients with established CVD, very high LDL (familial hypercholesterolaemia), or high calculated 10-year CVD risk (>20%).'
      }
    },
    {
      id: 'eq-statin-effect',
      type: 'equation',
      data: {
        html: 'HMG-CoA + NADPH → Mevalonate (rate-limiting step)<br/>Statins inhibit this step → ↓ hepatic cholesterol → ↑ LDL receptors → ↓ blood LDL',
        caption: 'Statin mechanism of action'
      }
    },
    {
      id: 'h-diet-cholesterol',
      type: 'heading',
      data: {
        text: 'Dietary Effects on Cholesterol Levels',
        level: 2
      }
    },
    {
      id: 'p-diet-sat-fat',
      type: 'paragraph',
      data: {
        text: 'Dietary saturated fat is the strongest dietary predictor of blood LDL. Saturated fatty acids (palmitate, stearate) reduce LDL receptor expression and increase LDL production, raising blood LDL by ~0.1 mmol/L for each 1% increase in saturated fat calories. Conversely, reducing saturated fat to <7% of calories can lower LDL by ~10%. Trans fats have even worse effects: they raise LDL and lower HDL, increasing CVD risk disproportionately. Dietary cholesterol (from eggs, meat, full-fat dairy) has a smaller effect on blood cholesterol than saturated fat, though the effect varies between individuals (some are "hyper-responders").'
      }
    },
    {
      id: 'p-diet-unsat-fat',
      type: 'paragraph',
      data: {
        text: 'Unsaturated fats (monounsaturated and polyunsaturated) lower LDL and raise HDL. Monounsaturated fats (olive oil, avocados, nuts) are particularly effective at raising HDL and have anti-inflammatory effects. Polyunsaturated fats (fish oils, seed oils) lower both LDL and triglycerides. The omega-3 polyunsaturated fatty acids (EPA, DHA) found in fatty fish have additional benefits: they reduce triglycerides, lower blood pressure, reduce platelet aggregation, and have anti-inflammatory effects. Replacing saturated fat calories with unsaturated fat can improve the LDL:HDL ratio by ~20%. Plant sterols and stanols (in fortified foods, nuts, seeds) inhibit cholesterol absorption in the intestine, lowering LDL by ~10%. Soluble fibre (oats, beans, pectin) also lowers LDL by binding cholesterol in the GI tract.'
      }
    },
    {
      id: 'callout-worked-statin',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'How Statins Lower LDL',
        text: 'Statin blocks HMG-CoA reductase → ↓ hepatic cholesterol → liver senses low cholesterol → upregulates LDL receptors → more LDL particles removed from blood → ↓ blood LDL. Simple feedback control: the cell detects deficit and compensates by clearing more LDL from circulation.'
      }
    },
    {
      id: 'callout-key-ratio',
      type: 'callout',
      data: {
        style: 'key',
        title: 'HDL:LDL Ratio Matters',
        text: 'LDL deposits cholesterol in arteries; HDL removes it. High LDL and low HDL = very high risk. High HDL and low LDL = very low risk. The ratio is more predictive of CVD than either alone. Target: LDL <2.6 mmol/L AND HDL >1.0 mmol/L (men) or >1.3 mmol/L (women).'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'LDL raises cardiovascular risk because it deposits cholesterol in arterial walls, directly promoting plaque formation. HDL is protective because it removes excess cholesterol from tissues and arteries via reverse cholesterol transport, returning it to the liver for excretion. The different fates of cholesterol transported by LDL versus HDL determine their opposing effects on CVD risk.',
        apply: 'A patient has total cholesterol 6.2 mmol/L, HDL 1.0 mmol/L. Calculate their LDL level (using Friedewald equation: LDL = Total − HDL − Triglycerides/2.2, given triglycerides = 1.8 mmol/L). Is this in the high-risk range (LDL > 3 mmol/L)?',
        analyze: 'Compare the mechanism of action of statins and dietary modification in lowering LDL cholesterol. Which acts faster, and which has broader health benefits beyond cholesterol reduction?',
        evaluate: 'Evaluate the role of genetic factors (familial hypercholesterolaemia) versus lifestyle in determining an individual\'s cardiovascular risk. Should all individuals with high LDL be offered statins regardless of lifestyle?'
      },
      terms: []
    },
    {
      id: 'checklist-cholesterol',
      type: 'checklist',
      data: {
        items: [
          { text: 'LDL transports cholesterol to tissues; excess LDL deposits in plaques', checked: false },
          { text: 'HDL removes cholesterol from tissues and plaques via reverse transport', checked: false },
          { text: 'Statins inhibit HMG-CoA reductase, reducing hepatic cholesterol and upregulating LDL receptors', checked: false },
          { text: 'Saturated fats raise LDL; unsaturated fats lower LDL and raise HDL', checked: false },
          { text: 'The LDL:HDL ratio is more predictive of CVD risk than either lipid alone', checked: false }
        ]
      }
    },
    {
      id: 'summary-cholesterol',
      type: 'summary',
      data: {
        text: 'LDL transports cholesterol to tissues but deposits excess in arterial plaques (atherogenic). HDL removes cholesterol via reverse transport and has anti-inflammatory effects (protective). Statins inhibit HMG-CoA reductase, blocking cholesterol synthesis and increasing LDL receptor expression, lowering blood LDL by 25–50%. Saturated fats raise LDL and increase CVD risk; unsaturated fats lower LDL and raise HDL. Diet rich in unsaturated fats, plant sterols, and fibre optimises the cholesterol profile. Statins plus lifestyle modification are the standard for CVD prevention.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-ldl',
        prompt: 'What is LDL? How is it synthesised and transported? What is its role in atherosclerosis?'
      },
      {
        id: 'cue-2',
        blockId: 'p-hdl',
        prompt: 'Describe HDL\'s role in reverse cholesterol transport. Why is high HDL protective?'
      },
      {
        id: 'cue-3',
        blockId: 'p-statins-mech',
        prompt: 'How do statins work? What enzyme do they inhibit and how does this lower blood LDL?'
      },
      {
        id: 'cue-4',
        blockId: 'p-diet-sat-fat',
        prompt: 'How do saturated fats affect blood LDL? Quantify the effect.'
      },
      {
        id: 'cue-5',
        blockId: 'p-diet-unsat-fat',
        prompt: 'What beneficial effects do unsaturated fats and omega-3 have on lipid profile and CVD risk?'
      }
    ],
    summaryText: 'LDL: synthesised in liver, transports cholesterol to tissues, excess deposits in plaques. HDL: removes cholesterol via reverse transport, anti-inflammatory. Statins: inhibit HMG-CoA reductase → ↓ hepatic cholesterol → ↑ LDL receptors → ↓ blood LDL 25–50%. Saturated fat ↑ LDL (~0.1 mmol/L per 1% calories); unsaturated fat ↓ LDL, ↑ HDL. Omega-3s lower triglycerides. Plant sterols and fibre also ↓ LDL. HDL:LDL ratio predictive of CVD risk.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cholesterol Transport and Lipid-Lowering Therapy',
      detail: 'Mechanisms of LDL and HDL transport, and evidence for statin and dietary interventions.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['ldl', 'hdl', 'cholesterol', 'statins', 'diet', 'hgm-coa-reductase']
    }
  ]
};
