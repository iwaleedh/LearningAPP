export const note_biology_1_1_8 = {
  blocks: [
    {
      id: 'obj-atherosclerosis',
      type: 'objective',
      data: {
        text: 'Understand the pathophysiology of atherosclerosis and the blood clotting cascade, including formation of plaques and the mechanism of thrombosis.'
      }
    },
    {
      id: 'h-atherosclerosis',
      type: 'heading',
      data: {
        text: 'Atherosclerosis: From LDL to Arterial Blockage',
        level: 2
      }
    },
    {
      id: 'p-atherosclerosis-ldl',
      type: 'paragraph',
      data: {
        text: 'Atherosclerosis is a chronic inflammatory disease of arteries characterised by the accumulation of lipid deposits (plaques) in the arterial wall. The process begins with oxidation of low-density lipoprotein (LDL) particles in the blood. LDL transports cholesterol from the liver to tissues. In the presence of oxidative stress (from smoking, high blood pressure, diabetes), LDL becomes oxidised, forming oxidised LDL (oxLDL). The arterial endothelium, sensing oxLDL, becomes dysfunctional and expresses adhesion molecules. These molecules recruit circulating monocytes and lymphocytes to adhere to the endothelium and migrate into the subendothelial space.'
      }
    },
    {
      id: 'p-atherosclerosis-foam',
      type: 'paragraph',
      data: {
        text: 'Once in the arterial wall, monocytes differentiate into macrophages. Macrophages engulf oxLDL via scavenger receptors, becoming "foam cells"—swollen cells full of lipid droplets. Foam cells secrete cytokines that recruit more immune cells and promote a chronic inflammatory state. Accumulation of foam cells forms a fatty streak, a visible yellow patch on the arterial intima. If the causative factors (high LDL, smoking, hypertension) persist, the plaque progresses. Smooth muscle cells migrate from the media into the intima, proliferate, and produce extracellular matrix proteins (collagen, elastin). Over time, a complex atherosclerotic plaque develops with a lipid-rich necrotic core covered by a fibrous cap of smooth muscle and collagen.'
      }
    },
    {
      id: 'p-atherosclerosis-progression',
      type: 'paragraph',
      data: {
        text: 'As the plaque grows, it encroaches on the arterial lumen, narrowing the vessel. A significant stenosis (>70% diameter reduction) can reduce blood flow and oxygen delivery to downstream tissues, causing angina pectoris (chest pain during exertion) if in a coronary artery, or claudication (leg pain during walking) if in a leg artery. The fibrous cap is unstable and can rupture if strained by blood pressure or inflammatory factors. Rupture exposes the lipid-rich, thrombogenic interior to the circulating blood. This triggers the blood clotting cascade, forming a thrombus (blood clot) on top of the plaque. The clot can occlude the remaining lumen, causing acute myocardial infarction (MI) if in a coronary artery or stroke if in a cerebral artery.'
      }
    },
    {
      id: 'callout-key-atherosclerosis',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Atherosclerosis Stages',
        text: 'LDL oxidation → endothelial dysfunction → monocyte recruitment → foam cells → fatty streak → fibrous plaque → stenosis/angina → plaque rupture → thrombosis → MI/stroke.'
      }
    },
    {
      id: 'h-clotting',
      type: 'heading',
      data: {
        text: 'Blood Clotting Cascade',
        level: 2
      }
    },
    {
      id: 'p-clotting-initial',
      type: 'paragraph',
      data: {
        text: 'When a blood vessel is damaged, or when atherosclerotic plaque ruptures, tissue damage exposes tissue factor (TF) and phospholipids to the circulating blood. Blood clotting is a cascade of proteolytic reactions. The extrinsic pathway begins: tissue factor combines with circulating clotting factor VII, forming the TF:VII complex. This activates factor X to Xa. Factor Xa, along with its cofactor V, activates prothrombin (factor II) to thrombin (factor IIa). Thrombin is the central enzyme of coagulation and catalyses multiple steps: it converts fibrinogen (a large soluble plasma protein) to fibrin monomers, which polymerise to form fibrin strands; it activates factor XIII (fibrin-stabilising factor), cross-linking fibrin strands; and it promotes platelet aggregation.'
      }
    },
    {
      id: 'p-clotting-platelets',
      type: 'paragraph',
      data: {
        text: 'Platelets (thrombocytes) are small, anucleate cell fragments derived from megakaryocytes. When a vessel is injured, platelets adhere to the exposed collagen in the vessel wall via von Willebrand factor (vWF), a glycoprotein that bridges platelet surface receptors to collagen. This adhesion activates platelets, triggering shape change, release of granule contents (including ADP, serotonin, and thromboxane A₂), and exposure of phosphatidylserine on the platelet surface. Activated platelets recruit additional platelets, forming a platelet plug. Thrombin further amplifies this platelet aggregation via protease-activated receptors (PARs) on the platelet surface. The growing platelet plug is stabilised by fibrin strands, forming a clot. In normal circumstances, clotting is localised to the injury site by natural anticoagulants (antithrombin, protein C, protein S).'
      }
    },
    {
      id: 'p-clotting-cascade-seq',
      type: 'paragraph',
      data: {
        text: 'The complete sequence is: (1) Vessel or plaque injury exposes TF. (2) TF + Factor VII activate Factor X. (3) Factor Xa + Factor V activate Prothrombin → Thrombin. (4) Thrombin converts Fibrinogen → Fibrin monomers. (5) Fibrin polymerises into a loose network. (6) Thrombin activates Factor XIII. (7) Factor XIII cross-links fibrin (stabilisation). (8) Thrombin activates platelets, promoting aggregation and sealing of the clot. (9) Coagulation factors are inhibited by natural anticoagulants, preventing excessive clotting. The entire cascade amplifies rapidly: a small initial signal generates large amounts of thrombin via feedback activation. This is an example of a biological amplification cascade.'
      }
    },
    {
      id: 'eq-clotting',
      type: 'equation',
      data: {
        html: 'Tissue Factor + Factor VII → Factor X → Factor Xa + Factor V → Factor II (Prothrombin) → Factor IIa (Thrombin)<br/>Thrombin: Fibrinogen → Fibrin (polymerised, cross-linked)',
        caption: 'Simplified clotting cascade pathway'
      }
    },
    {
      id: 'table-clotting-factors',
      type: 'comparisonTable',
      data: {
        headers: ['Stage', 'Key Players', 'Event', 'Result'],
        rows: [
          ['Initiation', 'TF, Factor VII, Factor X', 'Tissue damage exposes TF; extrinsic pathway activated', 'Factor X activated to Xa'],
          ['Amplification', 'Factor V, Prothrombin', 'Factor Xa + V catalyse prothrombin activation', 'Thrombin (IIa) produced'],
          ['Coagulation', 'Thrombin, Fibrinogen, Factor XIII', 'Thrombin cleaves fibrinogen; stabilises fibrin', 'Fibrin mesh forms clot'],
          ['Platelet plug', 'Platelets, vWF, ADP, Thrombin', 'Platelets adhere to collagen; aggregate; trapped in fibrin', 'Mechanical plug seals vessel']
        ],
        caption: 'Stages of blood clotting'
      }
    },
    {
      id: 'h-thrombosis-risk',
      type: 'heading',
      data: {
        text: 'Thrombosis in Atherosclerosis',
        level: 2
      }
    },
    {
      id: 'p-thrombosis-risk',
      type: 'paragraph',
      data: {
        text: 'Virchow\'s triad describes three risk factors for pathological thrombosis (formation of a clot that obstructs blood flow): (1) vessel wall damage (endothelial injury), (2) blood flow abnormality (stasis or turbulence), and (3) blood composition abnormality (hypercoagulability). In atherosclerosis, all three are present: the plaque rupture damages the endothelium, stenosis causes turbulent flow and stasis, and inflammation increases procoagulant factors (tissue factor, phospholipids). The resulting thrombus can be partly dislodged and travel downstream as an embolus, becoming lodged in smaller vessels and causing acute ischaemia. Sudden coronary thrombosis causes MI; cerebral thrombosis causes stroke; mesenteric thrombosis causes bowel infarction.'
      }
    },
    {
      id: 'callout-worked-clotting',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Tracing the Clotting Cascade',
        text: 'Vessel ruptures → TF exposed → TF+Factor VII activate Factor X → Factor X becomes Xa → Xa+Factor V activate Prothrombin → Prothrombin becomes Thrombin → Thrombin converts Fibrinogen to Fibrin monomer → Fibrin polymerises → Thrombin activates Factor XIII → XIII cross-links fibrin = stable clot. Meanwhile: Platelets adhere to collagen via vWF → activate → aggregate → trapped in fibrin = platelet plug.'
      }
    },
    {
      id: 'callout-tip-thrombosis',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Virchow\'s Triad Exam Tip',
        text: 'Virchow\'s Triad = (1) Vessel damage, (2) Flow abnormality, (3) Blood composition change. For atherosclerosis: (1) plaque rupture, (2) stenosis/turbulence, (3) inflammation raises coagulation factors. Remember these three factors for thrombosis questions.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Atherosclerosis preferentially occurs at arterial branch points because blood flow becomes turbulent at bifurcations, creating regions of low shear stress. Turbulent flow and low shear stress damage the endothelium (the protective inner lining of arteries), initiating the inflammatory response that leads to LDL oxidation and plaque formation.',
        apply: 'A patient has an arterial plaque that reduces the lumen diameter by 50%. Using Poiseuille\'s law (flow ∝ r⁴), calculate the reduction in blood flow rate through that vessel.',
        analyze: 'Compare the roles of LDL, macrophages, and smooth muscle cells in the progression of atherosclerosis from fatty streak to fibrous plaque.',
        evaluate: 'Evaluate whether thrombosis is purely harmful or whether the clotting cascade represents an essential survival mechanism that is merely dysregulated in cardiovascular disease.'
      },
      terms: []
    },
    {
      id: 'checklist-atherosclerosis',
      type: 'checklist',
      data: {
        items: [
          { text: 'Atherosclerosis begins with LDL oxidation and endothelial dysfunction', checked: false },
          { text: 'Macrophage ingestion of oxLDL creates foam cells and fatty streaks', checked: false },
          { text: 'Fibrous plaque growth causes stenosis, leading to angina or claudication', checked: false },
          { text: 'Plaque rupture exposes TF, triggering the clotting cascade', checked: false },
          { text: 'Thrombin converts fibrinogen to fibrin and promotes platelet aggregation, forming a clot', checked: false }
        ]
      }
    },
    {
      id: 'summary-atherosclerosis',
      type: 'summary',
      data: {
        text: 'Atherosclerosis involves LDL oxidation, endothelial dysfunction, foam cell accumulation, and fibrous plaque formation, progressively narrowing arteries. Plaque rupture exposes tissue factor, triggering the coagulation cascade: TF + Factor VII → Factor X → Prothrombin → Thrombin. Thrombin converts fibrinogen to fibrin and activates platelets. The resulting thrombus can occlude the artery, causing MI or stroke. Virchow\'s triad (vessel damage, flow abnormality, hypercoagulability) predisposes to pathological thrombosis.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-atherosclerosis-ldl',
        prompt: 'Describe the initial steps of atherosclerosis. What is the role of LDL oxidation and oxLDL?'
      },
      {
        id: 'cue-2',
        blockId: 'p-atherosclerosis-foam',
        prompt: 'What are foam cells and how do they form? How do fatty streaks develop?'
      },
      {
        id: 'cue-3',
        blockId: 'p-atherosclerosis-progression',
        prompt: 'What happens when atherosclerotic plaque ruptures? Why does this lead to thrombosis?'
      },
      {
        id: 'cue-4',
        blockId: 'p-clotting-cascade-seq',
        prompt: 'Outline the complete clotting cascade from TF activation to fibrin stabilisation.'
      },
      {
        id: 'cue-5',
        blockId: 'p-clotting-platelets',
        prompt: 'Describe platelet adhesion, activation, and aggregation. What role does thrombin play?'
      }
    ],
    summaryText: 'Atherosclerosis: LDL oxidation → endothelial dysfunction → monocyte adhesion → macrophage foam cells → fatty streak → fibrous plaque (stenosis) → rupture. Clotting cascade: TF+VII activate X → Xa+V activate Prothrombin → Thrombin → converts Fibrinogen to Fibrin (polymerised, cross-linked). Platelets adhere (vWF to collagen), activate, aggregate, trapped in fibrin. Thrombus can embolise → MI/stroke. Virchow\'s triad: vessel damage, flow abnormality, hypercoagulability.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Atherosclerosis and Blood Clotting',
      detail: 'Pathophysiology of plaque formation and the molecular cascade of coagulation.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['atherosclerosis', 'ldl', 'foam-cells', 'clotting-cascade', 'thrombin', 'fibrin', 'platelets']
    }
  ]
};
