// WBI11 — Topic 1: Lifestyle, Health and Risk
// AL Biology — 6 exercise types, sourced from seed notes 1_1_0 through 1_1_12

export const exercises_biology_1_1 = {
    subject: 'biology',
    unitId: 1,
    unitCode: 'WBI11',
    unitTitle: 'Molecules, Diet, Transport and Health',
    topicId: 1,
    topicTitle: 'Lifestyle, Health and Risk',

    // ─────────────────────────────────────────────
    // MCQ — 30 questions (subtopics 0–12)
    // correctAnswer is the 0-based index of the correct option
    // ─────────────────────────────────────────────
    mcq: [
        // Subtopic 0 — Water (×2)
        {
            id: 'mcq-bio-1-1-001',
            stem: 'Why is water described as a dipolar molecule?',
            options: [
                'Because it contains two hydrogen atoms bonded to oxygen',
                'Because oxygen is more electronegative, giving it δ− and the hydrogens δ+',
                'Because it has an equal distribution of charge across the molecule',
                'Because it forms two hydrogen bonds with every neighbouring molecule',
            ],
            correctAnswer: 1,
            rationale: 'Oxygen is more electronegative than hydrogen, so it pulls shared electrons towards itself, acquiring a slight negative charge (δ−). The hydrogen atoms become slightly positive (δ+), making water a dipolar molecule.',
            topic: 'Water dipolar properties',
        },
        {
            id: 'mcq-bio-1-1-002',
            stem: 'Which property of water makes it an effective coolant in sweating?',
            options: [
                'High specific heat capacity',
                'High surface tension',
                'High latent heat of vaporisation',
                'Excellent solvent properties',
            ],
            correctAnswer: 2,
            rationale: 'The high latent heat of vaporisation means water requires a large amount of energy to evaporate. When sweat evaporates from skin, it removes a large amount of heat energy, cooling the body effectively.',
            topic: 'Water dipolar properties',
        },
        // Subtopic 1 — Monosaccharides & polysaccharides (×3)
        {
            id: 'mcq-bio-1-1-003',
            stem: 'In alpha-glucose, where is the hydroxyl (−OH) group on carbon 1 positioned?',
            options: ['Above the plane of the ring', 'Below the plane of the ring', 'At right angles to the ring', 'Bonded to the oxygen in the ring'],
            correctAnswer: 1,
            rationale: 'In alpha-glucose the −OH group on carbon 1 points downward (below the ring plane). In beta-glucose it points upward. This seemingly small difference has huge structural consequences for the polysaccharides formed.',
            topic: 'Monosaccharides and polysaccharides',
        },
        {
            id: 'mcq-bio-1-1-004',
            stem: 'What type of reaction joins two monosaccharides to form a disaccharide?',
            options: ['Hydrolysis', 'Oxidation', 'Condensation', 'Reduction'],
            correctAnswer: 2,
            rationale: 'A condensation reaction joins two monosaccharides by removing a molecule of water and forming a glycosidic bond. The reverse reaction (adding water to break the bond) is called hydrolysis.',
            topic: 'Monosaccharides and polysaccharides',
        },
        {
            id: 'mcq-bio-1-1-005',
            stem: 'Which structural feature of cellulose makes it a strong building material for plant cell walls?',
            options: [
                'It is made of alpha-glucose units with extensive branching',
                'Beta-glucose units are linked by 1,6-glycosidic bonds forming a helix',
                'Alternate beta-glucose molecules are inverted, allowing H-bonds to cross-link straight chains into microfibrils',
                'It can be rapidly hydrolysed to release glucose when energy is needed',
            ],
            correctAnswer: 2,
            rationale: 'In cellulose, alternate beta-glucose molecules are rotated 180°. This allows 1,4-glycosidic bonds to produce straight unbranched chains. Hydrogen bonds form between parallel chains, bundling them into strong microfibrils that give the cell wall tensile strength.',
            topic: 'Monosaccharides and polysaccharides',
        },
        // Subtopic 2 — Triglycerides & phospholipids (×2)
        {
            id: 'mcq-bio-1-1-006',
            stem: 'How many water molecules are released when a triglyceride is formed?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 2,
            rationale: 'A triglyceride is formed from one glycerol and three fatty acids. Each ester bond formation releases one water molecule in a condensation reaction, so three water molecules are released in total.',
            topic: 'Triglycerides and phospholipids',
        },
        {
            id: 'mcq-bio-1-1-007',
            stem: 'Why are unsaturated fats typically liquid at room temperature whereas saturated fats are solid?',
            options: [
                'Unsaturated fats have more carbon atoms, making them heavier',
                'C=C double bonds introduce kinks into the chain, preventing close packing and lowering melting point',
                'Saturated fats contain a phosphate group that causes solidification',
                'Unsaturated fats have shorter fatty acid chains than saturated fats',
            ],
            correctAnswer: 1,
            rationale: 'Each C=C double bond in an unsaturated fatty acid introduces a bend (kink) in the hydrocarbon chain. This prevents the molecules packing tightly together, reducing the van der Waals interactions and lowering the melting point — hence they are liquid at room temperature.',
            topic: 'Triglycerides and phospholipids',
        },
        // Subtopic 3 — Cholesterol, HDL, LDL (×3)
        {
            id: 'mcq-bio-1-1-008',
            stem: 'What is the primary function of LDL in cholesterol transport?',
            options: [
                'Transports cholesterol from body cells back to the liver for breakdown',
                'Transports cholesterol from the liver to body cells throughout the body',
                'Carries fatty acids from adipose tissue to muscles for energy',
                'Neutralises free radicals in the bloodstream',
            ],
            correctAnswer: 1,
            rationale: 'LDL (Low-Density Lipoprotein) transports cholesterol from the liver to peripheral body cells. High LDL levels are associated with increased deposition of cholesterol in artery walls, raising CVD risk — hence it is called "bad cholesterol".',
            topic: 'Cholesterol, HDL and LDL',
        },
        {
            id: 'mcq-bio-1-1-009',
            stem: 'Why is cholesterol not dissolved freely in blood plasma?',
            options: [
                'It is too small to remain in the bloodstream',
                'Blood plasma is acidic and would destroy cholesterol',
                'Cholesterol is mostly non-polar and hydrophobic, making it insoluble in the aqueous plasma',
                'The liver retains all cholesterol within its cells',
            ],
            correctAnswer: 2,
            rationale: 'Cholesterol is a lipid with four fused hydrophobic carbon rings and a short non-polar hydrocarbon tail. Its mostly hydrophobic nature means it cannot dissolve in the aqueous blood plasma and must be packaged in lipoprotein particles for transport.',
            topic: 'Cholesterol, HDL and LDL',
        },
        {
            id: 'mcq-bio-1-1-010',
            stem: 'A patient has a high LDL : HDL ratio. What does this indicate?',
            options: [
                'The patient has a reduced risk of atherosclerosis',
                'The patient is transporting more cholesterol away from artery walls than depositing it',
                'The patient has an increased risk of cardiovascular disease',
                'The patient has lower total blood cholesterol levels',
            ],
            correctAnswer: 2,
            rationale: 'A high LDL : HDL ratio suggests more cholesterol is being delivered to body tissues (LDL function) than is being returned to the liver (HDL function). This is associated with increased cholesterol deposition in artery walls and a higher risk of atherosclerosis and CVD.',
            topic: 'Cholesterol, HDL and LDL',
        },
        // Subtopic 4 — Biological molecule tests (×3)
        {
            id: 'mcq-bio-1-1-011',
            stem: "A student tests a food sample with Benedict's reagent and the solution turns brick-red after heating. What does this result indicate?",
            options: [
                'Protein is present in the sample',
                'A non-reducing sugar such as sucrose is present',
                'A reducing sugar is present in high concentration',
                'Lipids have emulsified in the reagent',
            ],
            correctAnswer: 2,
            rationale: "A brick-red precipitate in Benedict's test indicates a high concentration of reducing sugar (such as glucose). The copper(II) ions (Cu²⁺) are reduced to copper(I) oxide (Cu₂O), producing the brick-red insoluble precipitate.",
            topic: 'Biological molecule tests',
        },
        {
            id: 'mcq-bio-1-1-012',
            stem: "What colour change indicates a POSITIVE result in the Biuret test for proteins?",
            options: ['Blue to brick-red', 'Orange-brown to blue-black', 'Blue to lilac/purple', 'Clear to white emulsion'],
            correctAnswer: 2,
            rationale: "In the Biuret test, NaOH and dilute copper sulfate are added. Cu²⁺ ions form a coordination complex with the nitrogen atoms of peptide bonds, giving a lilac/purple colour. The pale blue of the CuSO₄ reagent is the negative result.",
            topic: 'Biological molecule tests',
        },
        {
            id: 'mcq-bio-1-1-013',
            stem: 'A student dissolves a food sample in ethanol then pours it into cold water. A white cloudy emulsion forms. What does this confirm?',
            options: ['Starch is present', 'A reducing sugar is present', 'A lipid is present', 'Protein is present'],
            correctAnswer: 2,
            rationale: 'The emulsion test detects lipids. Lipids dissolve in ethanol but not water. When the ethanol-lipid solution is added to water, the lipid is dispersed as tiny droplets, forming a white cloudy emulsion. A clear solution is a negative result.',
            topic: 'Biological molecule tests',
        },
        // Subtopic 5 — Heart structure & cardiac cycle (×3)
        {
            id: 'mcq-bio-1-1-014',
            stem: 'Why does the left ventricle have a much thicker muscular wall than the right ventricle?',
            options: [
                'The left ventricle is larger so it holds more blood',
                'It must pump blood at high pressure around the entire systemic circulation',
                'The right ventricle only relaxes and never contracts during the cardiac cycle',
                'It needs to prevent blood flowing back into the left atrium',
            ],
            correctAnswer: 1,
            rationale: 'The left ventricle pumps blood into the aorta for the systemic circulation, which supplies the entire body. This requires generating much higher pressure than the right ventricle (which only pumps blood the short distance to the lungs), so its wall is significantly thicker.',
            topic: 'Heart structure and cardiac cycle',
        },
        {
            id: 'mcq-bio-1-1-015',
            stem: 'During atrial systole in the cardiac cycle, what happens to the atrioventricular (AV) valves?',
            options: [
                'They snap shut to prevent backflow into the atria',
                'They are forced open by rising pressure in the atria, allowing blood into the ventricles',
                'They remain closed while the semilunar valves open',
                'They open to allow blood from the veins to enter the atria',
            ],
            correctAnswer: 1,
            rationale: 'During atrial systole the atria contract, raising pressure above that in the ventricles. This pressure difference forces the AV valves open, pushing blood into the relaxed ventricles. The AV valves close in ventricular systole when ventricular pressure exceeds atrial pressure.',
            topic: 'Heart structure and cardiac cycle',
        },
        {
            id: 'mcq-bio-1-1-016',
            stem: "The 'lub' sound of the heartbeat is produced by which event?",
            options: [
                'Semilunar valves opening during ventricular systole',
                'Atrioventricular valves closing at the start of ventricular systole',
                'Atria contracting during atrial systole',
                'Semilunar valves closing at the start of diastole',
            ],
            correctAnswer: 1,
            rationale: "The first heart sound ('lub') is produced by the AV valves snapping shut at the beginning of ventricular systole, when ventricular pressure exceeds atrial pressure. The second sound ('dub') is the semilunar valves closing at the start of diastole.",
            topic: 'Heart structure and cardiac cycle',
        },
        // Subtopic 6 — Blood vessels (×2)
        {
            id: 'mcq-bio-1-1-017',
            stem: 'Which structural feature of veins prevents the backflow of blood?',
            options: ['Thick muscular walls', 'Narrow lumen diameter', 'Pocket valves along the vessel', 'High elastic tissue content'],
            correctAnswer: 2,
            rationale: 'Veins carry blood at low pressure back to the heart. Without valves, the blood would tend to pool or flow backwards. Pocket valves within the vein lumen open to allow forward blood flow but close when blood attempts to reverse, preventing backflow.',
            topic: 'Blood vessels',
        },
        {
            id: 'mcq-bio-1-1-018',
            stem: 'Why is the wall of a capillary only one cell thick?',
            options: [
                'To withstand the high blood pressure in capillary beds',
                'To provide a short diffusion distance for the exchange of substances with body cells',
                'To allow red blood cells to multiply inside the capillary',
                'Because capillaries do not need to contract or relax',
            ],
            correctAnswer: 1,
            rationale: 'The single layer of squamous endothelial cells forming the capillary wall minimises the diffusion distance between blood and body cells. This maximises the rate of exchange of oxygen, glucose, carbon dioxide, and other metabolites, in accordance with Fick\'s Law.',
            topic: 'Blood vessels',
        },
        // Subtopic 7 — Blood, tissue fluid & lymph (×2)
        {
            id: 'mcq-bio-1-1-019',
            stem: 'At the arterial end of a capillary, why does fluid move out of the capillary into the surrounding tissues?',
            options: [
                'The oncotic pressure of plasma proteins exceeds the hydrostatic pressure',
                'The hydrostatic pressure from the heart exceeds the inward oncotic pressure',
                'Active transport pumps water across the capillary endothelium',
                'Plasma proteins are forced through pores in the capillary wall',
            ],
            correctAnswer: 1,
            rationale: 'At the arterial end of the capillary, the high hydrostatic pressure generated by the heart\'s pumping action exceeds the inward osmotic pull (oncotic pressure) of the plasma proteins retained in the blood. This net outward pressure forces small molecules (water, glucose, O₂) out through pores in the capillary wall, forming tissue fluid.',
            topic: 'Blood, tissue fluid and lymph',
        },
        {
            id: 'mcq-bio-1-1-020',
            stem: 'Approximately what percentage of tissue fluid drains into lymph capillaries rather than returning to the bloodstream?',
            options: ['1%', '5%', '10%', '25%'],
            correctAnswer: 2,
            rationale: 'At the venous end of capillaries, oncotic pressure draws most tissue fluid back into the blood. However, approximately 10% of tissue fluid is not reabsorbed and instead drains into blind-ended lymph capillaries, becoming lymph. This lymph eventually returns to the bloodstream via the thoracic duct.',
            topic: 'Blood, tissue fluid and lymph',
        },
        // Subtopic 8 — Atherosclerosis & thrombosis (×3)
        {
            id: 'mcq-bio-1-1-021',
            stem: 'What is the first stage in the development of atherosclerosis?',
            options: [
                'Calcium salts deposit to form a hard plaque',
                'Macrophages migrate into the artery wall',
                'Damage to the endothelium lining of the artery',
                'Blood clot forms inside the artery lumen',
            ],
            correctAnswer: 2,
            rationale: 'Atherosclerosis begins with damage to the endothelium — the single-cell inner lining of an artery. This damage can be caused by high blood pressure, cigarette smoke toxins, or other factors. The damage triggers an inflammatory response, initiating subsequent stages of plaque formation.',
            topic: 'Atherosclerosis and thrombosis',
        },
        {
            id: 'mcq-bio-1-1-022',
            stem: 'In the blood clotting cascade, which protein is converted into fibrin by thrombin?',
            options: ['Prothrombin', 'Fibrinogen', 'Thromboplastin', 'Collagen'],
            correctAnswer: 1,
            rationale: 'Thrombin (formed from prothrombin by thromboplastin in the presence of Ca²⁺ and vitamin K) catalyses the conversion of the soluble plasma protein fibrinogen into insoluble fibrin. Fibrin strands then mesh together, trapping red blood cells and platelets to form a solid blood clot.',
            topic: 'Atherosclerosis and thrombosis',
        },
        {
            id: 'mcq-bio-1-1-023',
            stem: 'A narrowed coronary artery due to atherosclerosis increases blood pressure in the vessel above the plaque. What positive feedback effect does this have?',
            options: [
                'Blood clotting factors are diluted, reducing further clot risk',
                'Raised blood pressure causes further endothelial damage, accelerating atherosclerosis',
                'The artery widens to compensate through smooth muscle relaxation',
                'Increased pressure denatures the atheroma, dissolving the plaque',
            ],
            correctAnswer: 1,
            rationale: 'Atherosclerosis narrows the arterial lumen, which increases resistance and therefore blood pressure. This elevated blood pressure further damages the endothelium, triggering more inflammation and plaque formation — a positive feedback loop that accelerates the disease.',
            topic: 'Atherosclerosis and thrombosis',
        },
        // Subtopic 9 — CVD risk factors (×2)
        {
            id: 'mcq-bio-1-1-024',
            stem: 'Why are pre-menopausal women generally at lower risk of CVD than men of the same age?',
            options: [
                'Women have lower blood pressure on average than men',
                'Oestrogen appears to offer cardioprotection partly by raising HDL cholesterol levels',
                'Women consume less saturated fat in their diet',
                'Men are more genetically predisposed to all diseases',
            ],
            correctAnswer: 1,
            rationale: 'Epidemiological studies show pre-menopausal women have lower CVD risk than men of the same age. Oestrogen is thought to provide cardioprotection, in part by raising HDL cholesterol (which helps remove cholesterol from artery walls). After the menopause, women\'s risk rises to match that of men.',
            topic: 'CVD risk factors',
        },
        {
            id: 'mcq-bio-1-1-025',
            stem: 'A study shows a strong positive correlation between amount of chocolate consumed and CVD risk in a population. What is the most correct conclusion?',
            options: [
                'Eating chocolate directly causes CVD',
                'Eating chocolate is the main risk factor for CVD',
                'Chocolate consumption and CVD incidence are correlated, but this does not prove causation',
                'All people who eat chocolate will develop CVD',
            ],
            correctAnswer: 2,
            rationale: 'Epidemiological data can show correlation (two variables change together) but cannot on its own prove causation. A confounding variable (e.g. sugar intake, physical inactivity) might be the actual cause. Experimental/mechanistic evidence is required before claiming a causal relationship.',
            topic: 'CVD risk factors',
        },
        // Subtopic 10 — Antioxidants & free radicals (×2)
        {
            id: 'mcq-bio-1-1-026',
            stem: 'How do antioxidants such as vitamin C reduce the risk of atherosclerosis?',
            options: [
                'They directly dissolve cholesterol plaques in artery walls',
                'They lower blood pressure by relaxing smooth muscle in artery walls',
                'They neutralise free radicals, preventing oxidation of LDL cholesterol and subsequent macrophage uptake',
                'They increase the production of HDL in the liver',
            ],
            correctAnswer: 2,
            rationale: 'Free radicals can oxidise LDL cholesterol. Oxidised LDL is preferentially taken up by macrophages in the artery wall, accelerating atheroma formation. Antioxidants (e.g. vitaminC and E) donate electrons to free radicals, neutralising them and preventing LDL oxidation, thus slowing atherosclerosis.',
            topic: 'Antioxidants and free radicals',
        },
        {
            id: 'mcq-bio-1-1-027',
            stem: 'What is a free radical?',
            options: [
                'A protein that activates the inflammatory response in artery walls',
                'A molecule released by macrophages as part of the immune response',
                'An atom or molecule with an unpaired electron, making it highly reactive',
                'A type of LDL particle that has been oxidised by UV radiation',
            ],
            correctAnswer: 2,
            rationale: 'A free radical is any atom or molecule with an unpaired electron in its outer shell. This makes it chemically unstable and highly reactive — it attempts to gain an electron from neighbouring molecules, causing a chain reaction of oxidative damage to proteins, lipids, and DNA.',
            topic: 'Antioxidants and free radicals',
        },
        // Subtopic 11 — Core Practical 1: food tests (×2)
        {
            id: 'mcq-bio-1-1-028',
            stem: "A student tests a solution for non-reducing sugars. After adding HCl and boiling, she neutralises with NaHCO₃ and repeats Benedict's test. The solution turns orange. What was most likely present in the ORIGINAL sample?",
            options: [
                'Glucose (a reducing sugar)',
                'Starch (a polysaccharide)',
                'Sucrose (a non-reducing sugar)',
                'Glycogen (a polysaccharide)',
            ],
            correctAnswer: 2,
            rationale: "If Benedict's test on the original sample was negative (no reducing sugar) but then positive after acid hydrolysis, it indicates a non-reducing sugar was present. HCl hydrolyses sucrose into its monosaccharide components (glucose + fructose), which are reducing sugars that then give a positive Benedict's result.",
            topic: 'Core Practical 1: food tests',
        },
        {
            id: 'mcq-bio-1-1-029',
            stem: 'In the iodine test for starch, what causes the characteristic blue-black colour?',
            options: [
                'Iodine is reduced by the aldehyde groups in glucose units',
                'Iodine molecules fit inside the amylose helix, forming a coloured complex',
                'KI reacts with the 1,6-glycosidic bonds in branched polysaccharides',
                'Iodine oxidises the beta-glucose units in cellulose',
            ],
            correctAnswer: 1,
            rationale: 'Amylose, the unbranched component of starch, has a helical structure. Iodine molecules (I₂) can fit into the central cavity of this helix, forming a starch-iodine complex that absorbs light at around 620 nm, giving the characteristic blue-black colour.',
            topic: 'Core Practical 1: food tests',
        },
        // Subtopic 12 — Core Practical 2: vitamin C and DCPIP (×1)
        {
            id: 'mcq-bio-1-1-030',
            stem: 'In the DCPIP test for vitamin C, a student finds that 2.5 cm³ of fruit juice is needed to decolourise 1 cm³ of DCPIP, whereas only 0.5 cm³ of pure ascorbic acid solution is needed for the same volume of DCPIP. What does this indicate?',
            options: [
                'The fruit juice contains more vitamin C than the ascorbic acid solution',
                'The fruit juice contains less vitamin C per cm³ than the pure ascorbic acid solution',
                'DCPIP is decolourised by fruit sugars rather than vitamin C in the juice',
                'The fruit juice contains the same concentration of vitamin C as the ascorbic acid solution',
            ],
            correctAnswer: 1,
            rationale: 'A larger volume of fruit juice is needed to decolourise the same amount of DCPIP, meaning the fruit juice has a lower concentration of vitamin C per cm³ than the pure ascorbic acid solution. The lower the vitamin C concentration, the more volume is required to reduce and decolourise the DCPIP.',
            topic: 'Core Practical 2: vitamin C and DCPIP',
        },
    ],

    // ─────────────────────────────────────────────
    // DRAG & DROP — 10 questions
    // items must include { text, category } where category matches one in categories[]
    // ─────────────────────────────────────────────
    dragdrop: [
        {
            id: 'dd-bio-1-1-001',
            stem: 'Sort these substances by whether they are reducing or non-reducing sugars:',
            categories: ['Reducing Sugar', 'Non-Reducing Sugar'],
            items: [
                { text: 'Glucose', category: 'Reducing Sugar' },
                { text: 'Fructose', category: 'Reducing Sugar' },
                { text: 'Maltose', category: 'Reducing Sugar' },
                { text: 'Sucrose', category: 'Non-Reducing Sugar' },
                { text: 'Lactose', category: 'Reducing Sugar' },
                { text: 'Galactose', category: 'Reducing Sugar' },
            ],
        },
        {
            id: 'dd-bio-1-1-002',
            stem: 'Classify these polysaccharides by their main role in organisms:',
            categories: ['Energy Storage', 'Structural Support'],
            items: [
                { text: 'Starch', category: 'Energy Storage' },
                { text: 'Glycogen', category: 'Energy Storage' },
                { text: 'Cellulose', category: 'Structural Support' },
                { text: 'Amylopectin (branched starch)', category: 'Energy Storage' },
                { text: 'Cellulose microfibrils', category: 'Structural Support' },
                { text: 'Amylose (coiled starch)', category: 'Energy Storage' },
            ],
        },
        {
            id: 'dd-bio-1-1-003',
            stem: 'Classify fatty acids as saturated or unsaturated based on the description:',
            categories: ['Saturated Fatty Acid', 'Unsaturated Fatty Acid'],
            items: [
                { text: 'No C=C double bonds; straight chain; found in animal fats', category: 'Saturated Fatty Acid' },
                { text: 'Contains one C=C double bond; monounsaturated', category: 'Unsaturated Fatty Acid' },
                { text: 'Solid at room temperature', category: 'Saturated Fatty Acid' },
                { text: 'Liquid at room temperature; found in plant oils', category: 'Unsaturated Fatty Acid' },
                { text: 'Molecules pack closely together', category: 'Saturated Fatty Acid' },
                { text: 'C=C double bond creates a kink in the chain', category: 'Unsaturated Fatty Acid' },
            ],
        },
        {
            id: 'dd-bio-1-1-004',
            stem: 'Sort the properties into HDL or LDL lipoprotein:',
            categories: ['HDL', 'LDL'],
            items: [
                { text: 'Transports cholesterol FROM liver TO body cells', category: 'LDL' },
                { text: 'Transports cholesterol FROM body cells BACK TO liver', category: 'HDL' },
                { text: '"Good" cholesterol — associated with reduced CVD risk', category: 'HDL' },
                { text: '"Bad" cholesterol — associated with increased atherosclerosis', category: 'LDL' },
                { text: 'High levels associated with cholesterol deposition in artery walls', category: 'LDL' },
                { text: 'High levels associated with removal of arterial cholesterol', category: 'HDL' },
            ],
        },
        {
            id: 'dd-bio-1-1-005',
            stem: 'Sort each food test reagent to the molecule it detects:',
            categories: ['Carbohydrate Test', 'Protein or Lipid Test', 'Vitamin Test'],
            items: [
                { text: "Benedict's reagent", category: 'Carbohydrate Test' },
                { text: 'Iodine/KI solution', category: 'Carbohydrate Test' },
                { text: 'Biuret reagent (NaOH + CuSO₄)', category: 'Protein or Lipid Test' },
                { text: 'Ethanol then cold water (emulsion test)', category: 'Protein or Lipid Test' },
                { text: 'Acid hydrolysis followed by Benedict\'s', category: 'Carbohydrate Test' },
                { text: 'DCPIP solution (tests for vitamin C)', category: 'Vitamin Test' },
            ],
        },
        {
            id: 'dd-bio-1-1-006',
            stem: 'Sort these features into the correct blood vessel type:',
            categories: ['Artery', 'Vein'],
            items: [
                { text: 'Carries blood away from the heart', category: 'Artery' },
                { text: 'Contains pocket valves to prevent backflow', category: 'Vein' },
                { text: 'Has a narrow lumen to maintain high pressure', category: 'Artery' },
                { text: 'Has a wide lumen to reduce resistance at low pressure', category: 'Vein' },
                { text: 'Has a thick wall with abundant elastic tissue', category: 'Artery' },
                { text: 'Has thin walls with little elastic tissue', category: 'Vein' },
            ],
        },
        {
            id: 'dd-bio-1-1-007',
            stem: 'Sort these CVD risk factors into modifiable (lifestyle) or non-modifiable:',
            categories: ['Modifiable Risk Factor', 'Non-Modifiable Risk Factor'],
            items: [
                { text: 'Smoking', category: 'Modifiable Risk Factor' },
                { text: 'Genetics / family history', category: 'Non-Modifiable Risk Factor' },
                { text: 'High-saturated-fat diet', category: 'Modifiable Risk Factor' },
                { text: 'Age', category: 'Non-Modifiable Risk Factor' },
                { text: 'Physical inactivity', category: 'Modifiable Risk Factor' },
                { text: 'Sex (being male)', category: 'Non-Modifiable Risk Factor' },
            ],
        },
        {
            id: 'dd-bio-1-1-008',
            stem: 'Match each substance with its location during blood/tissue fluid formation:',
            categories: ['Remains in Capillary', 'Passes into Tissue Fluid'],
            items: [
                { text: 'Plasma proteins (albumin)', category: 'Remains in Capillary' },
                { text: 'Glucose', category: 'Passes into Tissue Fluid' },
                { text: 'Red blood cells', category: 'Remains in Capillary' },
                { text: 'Water molecules', category: 'Passes into Tissue Fluid' },
                { text: 'Oxygen', category: 'Passes into Tissue Fluid' },
                { text: 'White blood cells (most)', category: 'Remains in Capillary' },
            ],
        },
        {
            id: 'dd-bio-1-1-009',
            stem: 'Sort these stages into the correct phase of the cardiac cycle:',
            categories: ['Systole (contraction)', 'Diastole (relaxation)'],
            items: [
                { text: 'Ventricles contract and push blood into arteries', category: 'Systole (contraction)' },
                { text: 'Semilunar valves close as arterial pressure exceeds ventricular pressure', category: 'Diastole (relaxation)' },
                { text: 'Atria contract to push blood into ventricles', category: 'Systole (contraction)' },
                { text: 'Blood passively fills both atria and ventricles', category: 'Diastole (relaxation)' },
                { text: 'AV valves snap shut as ventricular pressure exceeds atrial pressure', category: 'Systole (contraction)' },
                { text: 'Both chambers are relaxed and refilling from veins', category: 'Diastole (relaxation)' },
            ],
        },
        {
            id: 'dd-bio-1-1-010',
            stem: 'Classify each property as belonging to phospholipid heads or tails:',
            categories: ['Hydrophilic Head', 'Hydrophobic Tail'],
            items: [
                { text: 'Contains phosphate group', category: 'Hydrophilic Head' },
                { text: 'Faces the aqueous environment in a bilayer', category: 'Hydrophilic Head' },
                { text: 'Fatty acid chains — non-polar', category: 'Hydrophobic Tail' },
                { text: 'Points inward in the bilayer away from water', category: 'Hydrophobic Tail' },
                { text: 'Attracts water molecules (polar interactions)', category: 'Hydrophilic Head' },
                { text: 'Repels water; interacts with other lipid tails', category: 'Hydrophobic Tail' },
            ],
        },
    ],

    // ─────────────────────────────────────────────
    // FILL IN THE BLANKS — 15 questions
    // template uses __BLANK__ for each blank; blanks[] lists expected answers in order
    // ─────────────────────────────────────────────
    fillblank: [
        {
            id: 'fb-bio-1-1-001',
            stem: 'Complete this description of water\'s molecular properties:',
            template: 'Water is a __BLANK__ molecule because oxygen is more __BLANK__ than hydrogen. The oxygen atom carries a slight __BLANK__ charge (δ−), while each hydrogen carries a slight __BLANK__ charge (δ+).',
            blanks: [
                { answer: 'dipolar' },
                { answer: 'electronegative' },
                { answer: 'negative' },
                { answer: 'positive' },
            ],
            rationale: 'Oxygen\'s greater electronegativity pulls shared electrons towards itself, creating partial charges that make water a dipolar (polar) molecule capable of forming hydrogen bonds.',
        },
        {
            id: 'fb-bio-1-1-002',
            stem: 'Complete the sentence about glycosidic bond formation:',
            template: 'Two monosaccharides are joined by a __BLANK__ reaction that releases a molecule of __BLANK__ and forms a covalent __BLANK__ bond.',
            blanks: [
                { answer: 'condensation' },
                { answer: 'water' },
                { answer: 'glycosidic' },
            ],
            rationale: 'Condensation reactions join monomers together by removing water. In carbohydrates, the resulting bond between sugar units is called a glycosidic bond.',
        },
        {
            id: 'fb-bio-1-1-003',
            stem: 'Complete this comparison of starch and glycogen:',
            template: 'Both starch and glycogen are made of __BLANK__-glucose joined by glycosidic bonds. Starch is the energy store in __BLANK__ cells, whereas glycogen is the energy store in __BLANK__ cells.',
            blanks: [
                { answer: 'alpha' },
                { answer: 'plant' },
                { answer: 'animal' },
            ],
            rationale: 'Both storage polysaccharides use alpha-glucose monomers. Starch (in chloroplasts/amyloplasts) stores energy in plant cells, while glycogen (in liver and muscle) stores energy in animal cells.',
        },
        {
            id: 'fb-bio-1-1-004',
            stem: 'Complete the description of a triglyceride:',
            template: 'A triglyceride consists of one __BLANK__ molecule joined to three __BLANK__ chains by __BLANK__ bonds, formed via condensation reactions.',
            blanks: [
                { answer: 'glycerol' },
                { answer: 'fatty acid' },
                { answer: 'ester' },
            ],
            rationale: 'Triglycerides are formed when one glycerol combines with three fatty acids via condensation reaction, creating three ester bonds and releasing three molecules of water.',
        },
        {
            id: 'fb-bio-1-1-005',
            stem: 'Complete the sentence about phospholipids in membranes:',
            template: 'In an aqueous environment, phospholipids spontaneously form a __BLANK__, with hydrophilic __BLANK__ facing outward and hydrophobic __BLANK__ pointing inward.',
            blanks: [
                { answer: 'bilayer' },
                { answer: 'heads' },
                { answer: 'tails' },
            ],
            rationale: 'The amphipathic nature of phospholipids (polar head + non-polar tails) drives spontaneous bilayer formation in water. The hydrophobic tails are shielded from the aqueous environment by facing inward.',
        },
        {
            id: 'fb-bio-1-1-006',
            stem: "Complete the description of the Biuret test:",
            template: 'In the Biuret test, __BLANK__ is first added, then dilute __BLANK__ sulfate. The __BLANK__ ions form a complex with __BLANK__ bonds in proteins, producing a lilac/purple colour.',
            blanks: [
                { answer: 'sodium hydroxide' },
                { answer: 'copper' },
                { answer: 'copper' },
                { answer: 'peptide' },
            ],
            rationale: 'The Biuret test uses NaOH to create alkaline conditions, then dilute CuSO₄. In alkaline conditions, Cu²⁺ ions form a purple coordination complex with nitrogen atoms of peptide bonds — this is the positive result.',
        },
        {
            id: 'fb-bio-1-1-007',
            stem: 'Complete the description of the double circulatory system:',
            template: 'Mammals have a __BLANK__ circulatory system. The __BLANK__ circulation carries blood to the lungs, while the __BLANK__ circulation carries blood to the rest of the body.',
            blanks: [
                { answer: 'double' },
                { answer: 'pulmonary' },
                { answer: 'systemic' },
            ],
            rationale: 'In a double circulatory system, blood passes through the heart twice per complete circuit — once being pumped to the lungs (pulmonary) and once to the rest of the body (systemic). This maintains high pressure in the systemic circulation.',
        },
        {
            id: 'fb-bio-1-1-008',
            stem: 'Complete the cardiac cycle sequence:',
            template: 'In __BLANK__ systole, the atria contract and the AV valves __BLANK__. Then in __BLANK__ systole, the ventricles contract, the AV valves __BLANK__, and blood is ejected into the arteries.',
            blanks: [
                { answer: 'atrial' },
                { answer: 'open' },
                { answer: 'ventricular' },
                { answer: 'close' },
            ],
            rationale: 'In atrial systole, rising atrial pressure forces AV valves open. In ventricular systole, rising ventricular pressure (exceeding atrial) snaps the AV valves shut, while the higher ventricular pressure then forces semilunar valves open.',
        },
        {
            id: 'fb-bio-1-1-009',
            stem: 'Complete the description of tissue fluid formation at the arterial end:',
            template: 'At the arterial end of a capillary, __BLANK__ pressure is high. This exceeds the inward __BLANK__ pressure of the plasma proteins, so fluid is forced __BLANK__ through pores in the capillary wall.',
            blanks: [
                { answer: 'hydrostatic' },
                { answer: 'oncotic' },
                { answer: 'out' },
            ],
            rationale: 'The heart\'s contractions generate hydrostatic pressure in the blood. At the arterial end of capillaries this outward pressure exceeds the inward oncotic (osmotic) pull of plasma proteins, driving filtration of tissue fluid out of the capillary.',
        },
        {
            id: 'fb-bio-1-1-010',
            stem: 'Complete the description of atherosclerosis development:',
            template: 'Atherosclerosis begins with damage to the __BLANK__. White blood cells called __BLANK__ migrate into the artery wall along with __BLANK__, forming a fatty deposit that eventually hardens into an __BLANK__.',
            blanks: [
                { answer: 'endothelium' },
                { answer: 'macrophages' },
                { answer: 'cholesterol' },
                { answer: 'atheroma' },
            ],
            rationale: 'The atherosclerosis sequence is: endothelial damage → inflammatory response → macrophages and cholesterol infiltrate wall → fatty streak → calcium salts and fibrous tissue harden into atheroma (plaque).',
        },
        {
            id: 'fb-bio-1-1-011',
            stem: 'Complete the blood clotting cascade:',
            template: 'Damaged tissues release __BLANK__, which converts __BLANK__ into the enzyme thrombin. Thrombin then catalyses the conversion of __BLANK__ (soluble) into __BLANK__ (insoluble), forming a mesh clot.',
            blanks: [
                { answer: 'thromboplastin' },
                { answer: 'prothrombin' },
                { answer: 'fibrinogen' },
                { answer: 'fibrin' },
            ],
            rationale: 'The clotting cascade: thromboplastin (from damaged platelets/collagen) + Ca²⁺ + vitamin K converts prothrombin → thrombin. Thrombin then converts soluble fibrinogen → insoluble fibrin, forming the structural scaffold of the clot.',
        },
        {
            id: 'fb-bio-1-1-012',
            stem: 'Complete the description of free radical damage:',
            template: 'A free radical is an atom with an __BLANK__ electron. Free radicals can __BLANK__ LDL cholesterol. Oxidised LDL is taken up by __BLANK__ in artery walls, accelerating __BLANK__ formation.',
            blanks: [
                { answer: 'unpaired' },
                { answer: 'oxidise' },
                { answer: 'macrophages' },
                { answer: 'atheroma' },
            ],
            rationale: 'Unpaired electrons make free radicals highly reactive. They oxidise LDL particles which become more readily taken up by macrophages in the artery wall, accelerating the formation of fatty deposits (atheromas) that underlie atherosclerosis.',
        },
        {
            id: 'fb-bio-1-1-013',
            stem: 'Complete the description of LDL and HDL functions:',
            template: '__BLANK__ lipoprotein (LDL) transports cholesterol FROM the liver TO the body. __BLANK__ lipoprotein (HDL) transports cholesterol FROM body cells BACK TO the liver. A high LDL:HDL ratio is associated with increased __BLANK__ risk.',
            blanks: [
                { answer: 'low-density' },
                { answer: 'high-density' },
                { answer: 'cardiovascular' },
            ],
            rationale: 'LDL delivers cholesterol to body cells — excess LDL leads to cholesterol deposition in walls. HDL collects cholesterol from peripheral tissues and returns it to the liver for breakdown. A high LDL:HDL ratio therefore indicates greater risk of atherosclerotic CVD.',
        },
        {
            id: 'fb-bio-1-1-014',
            stem: 'Complete the procedure for testing for non-reducing sugars:',
            template: 'First, perform __BLANK__ test on the original sample. If negative (remains __BLANK__), add dilute __BLANK__ acid and boil to hydrolyse. Neutralise with __BLANK__. Repeat test — a positive result now indicates a non-reducing sugar was present.',
            blanks: [
                { answer: "Benedict's" },
                { answer: 'blue' },
                { answer: 'hydrochloric' },
                { answer: 'sodium hydrogencarbonate' },
            ],
            rationale: "The non-reducing sugar test requires: initial negative Benedict's → acid hydrolysis (HCl) to break glycosidic bonds → neutralisation with NaHCO₃ → repeat Benedict's. A positive result after hydrolysis but not before indicates a non-reducing sugar (e.g. sucrose).",
        },
        {
            id: 'fb-bio-1-1-015',
            stem: 'Complete the description of the DCPIP vitamin C test:',
            template: 'DCPIP is a __BLANK__ dye that is decolourised by __BLANK__ (vitamin C). A larger volume of sample needed to decolourise a fixed amount of DCPIP indicates a __BLANK__ concentration of vitamin C in the sample.',
            blanks: [
                { answer: 'blue' },
                { answer: 'ascorbic acid' },
                { answer: 'lower' },
            ],
            rationale: 'DCPIP (blue oxidising dye) is reduced and decolourised by ascorbic acid. The more vitamin C in a sample, the less volume is needed to decolourise a given amount of DCPIP. A larger required volume means lower vitamin C concentration.',
        },
    ],

    // ─────────────────────────────────────────────
    // SEQUENCE — 8 questions
    // steps[] are in CORRECT ORDER; the component shuffles them for the student
    // ─────────────────────────────────────────────
    sequence: [
        {
            id: 'seq-bio-1-1-001',
            stem: 'Arrange the stages of the cardiac cycle in the correct order (starting from diastole):',
            steps: [
                'Diastole: both chambers relax; blood fills atria passively from veins',
                'Atrial systole: atria contract; AV valves open; blood pushed into ventricles',
                'Ventricular systole: ventricles contract; ventricular pressure exceeds atrial pressure — AV valves close',
                'Ventricular pressure exceeds arterial pressure — semilunar valves open; blood ejected into aorta/pulmonary artery',
                'Ventricular pressure drops below arterial pressure — semilunar valves close; diastole begins again',
            ],
        },
        {
            id: 'seq-bio-1-1-002',
            stem: 'Arrange the stages of atherosclerosis in the correct sequence:',
            steps: [
                'Endothelium of the artery is damaged by high blood pressure or smoke toxins',
                'White blood cells (macrophages) migrate into the artery wall',
                'Cholesterol from the blood is taken up by macrophages, forming a fatty streak',
                'Calcium salts and fibrous tissue accumulate around the fatty deposit',
                'Atheroma hardens into a plaque, narrowing the lumen and reducing elasticity',
                'Increased blood pressure from narrowed lumen causes further endothelial damage (positive feedback)',
            ],
        },
        {
            id: 'seq-bio-1-1-003',
            stem: 'Arrange the steps of the blood clotting cascade in order:',
            steps: [
                'Damage exposes collagen; damaged platelets aggregate and release thromboplastin',
                'Thromboplastin, calcium ions and vitamin K convert prothrombin to thrombin',
                'Thrombin catalyses the conversion of fibrinogen to fibrin',
                'Fibrin strands form a mesh at the wound site',
                'Red blood cells and platelets are trapped in the mesh, forming a solid clot',
                'The clot dries and hardens to form a scab, sealing the wound',
            ],
        },
        {
            id: 'seq-bio-1-1-004',
            stem: 'Order the steps to test a food sample for a non-reducing sugar (sucrose):',
            steps: [
                "Test original sample with Benedict's reagent — note negative (blue) result",
                'Add dilute hydrochloric acid to a fresh sample and boil gently for 2 minutes',
                'Allow to cool, then neutralise with sodium hydrogencarbonate solution',
                "Add Benedict's reagent and heat in a water bath at 80°C",
                'Observe positive result (brick-red precipitate) — confirms non-reducing sugar was present',
            ],
        },
        {
            id: 'seq-bio-1-1-005',
            stem: 'Arrange the steps for the emulsion test for lipids in the correct order:',
            steps: [
                'Dissolve a small amount of the food sample in ethanol (absolute)',
                'Pour the ethanol-sample mixture into a clean tube of cold distilled water',
                'Observe whether a white cloudy emulsion forms',
                'A white emulsion = positive result (lipids present); clear solution = negative',
            ],
        },
        {
            id: 'seq-bio-1-1-006',
            stem: 'Arrange the events of tissue fluid formation from arterial to venous end:',
            steps: [
                'Blood enters the arterial end of the capillary bed at high hydrostatic pressure',
                'Hydrostatic pressure exceeds the oncotic pressure — fluid forced out through capillary pores',
                'Small molecules (water, glucose, O₂) filter into the interstitial space as tissue fluid',
                'Large plasma proteins remain in the capillary, increasing the oncotic pressure',
                'At the venous end, hydrostatic pressure has fallen; oncotic pressure now exceeds it',
                'Excess tissue fluid containing CO₂ and waste is drawn back into the capillary by osmosis',
                'Remaining tissue fluid (≈10%) drains into lymph capillaries, forming lymph',
            ],
        },
        {
            id: 'seq-bio-1-1-007',
            stem: 'Arrange the DCPIP vitamin C titration procedure in the correct order:',
            steps: [
                'Pipette 1 cm³ of DCPIP solution into a clean test tube',
                'Fill a graduated syringe or burette with the vitamin C / fruit juice sample',
                'Add the sample dropwise to the DCPIP, swirling after each addition',
                'Continue adding sample until the blue DCPIP is just permanently decolourised (goes colourless)',
                'Record the volume of sample used',
                'Repeat and average to obtain a reliable result; compare with standard solutions',
            ],
        },
        {
            id: 'seq-bio-1-1-008',
            stem: 'Order the stages in which free radical damage leads to atherosclerosis:',
            steps: [
                'Free radicals (e.g. from cigarette smoke) are formed in the body',
                'Free radicals oxidise LDL cholesterol particles in the bloodstream',
                'Oxidised LDL is preferentially engulfed by macrophages in the artery wall',
                'Macrophages become engorged with oxidised LDL, forming foam cells',
                'Foam cells accumulate under the endothelium, contributing to the fatty streak and atheroma',
            ],
        },
    ],

    // ─────────────────────────────────────────────
    // KEYWORD CHECK — 12 questions
    // keywords[] are the words the component scans for in the student's answer
    // ─────────────────────────────────────────────
    keyword: [
        {
            id: 'kw-bio-1-1-001',
            stem: 'Describe the dipolar nature of water and explain how this gives water its solvent properties. [4 marks]',
            marks: 4,
            keywords: ['electronegative', 'oxygen', 'partial', 'hydrogen bond', 'polar', 'dissolve', 'ionic'],
            modelAnswer: 'Water is a dipolar molecule because oxygen is more electronegative than hydrogen, drawing shared electrons towards it. This gives oxygen a partial negative charge (δ−) and each hydrogen a partial positive charge (δ+). Water can form hydrogen bonds between its δ+ hydrogen and the δ− oxygen of neighbouring molecules. Polar and ionic solutes can interact with the charges on water molecules, allowing them to dissolve — making water an excellent solvent.',
        },
        {
            id: 'kw-bio-1-1-002',
            stem: 'Compare the structures of amylose, amylopectin and cellulose with reference to the type of glucose monomer and glycosidic bonds present. [6 marks]',
            marks: 6,
            keywords: ['alpha', 'beta', 'glycosidic', '1,4', '1,6', 'branched', 'straight', 'cellulose', 'amylose', 'amylopectin'],
            modelAnswer: 'Amylose and amylopectin are both made of alpha-glucose; cellulose is made of beta-glucose. Amylose: unbranched; 1,4-glycosidic bonds; forms a coiled helix. Amylopectin: branched; 1,4 and 1,6-glycosidic bonds; highly branched allowing rapid hydrolysis. Cellulose: alternate beta-glucose monomers are inverted; 1,4-glycosidic bonds; straight unbranched chains that form hydrogen bonds between parallel chains → microfibrils providing structural strength.',
        },
        {
            id: 'kw-bio-1-1-003',
            stem: 'Explain how phospholipids form a bilayer and why this is important for cell membranes. [4 marks]',
            marks: 4,
            keywords: ['hydrophilic', 'hydrophobic', 'phosphate', 'head', 'tail', 'bilayer', 'spontaneous', 'selectively permeable'],
            modelAnswer: 'Phospholipids have a hydrophilic phosphate head and two hydrophobic fatty acid tails. In an aqueous environment, they spontaneously arrange into a bilayer, with hydrophilic heads facing the aqueous exterior and hydrophobic tails pointing inward away from water. This bilayer is the basic structure of all cell membranes. It creates a selectively permeable barrier that allows some substances to pass while restricting the movement of others (particularly hydrophilic/ionic substances).',
        },
        {
            id: 'kw-bio-1-1-004',
            stem: 'Describe the roles of LDL and HDL cholesterol in the body and explain why a high LDL:HDL ratio increases cardiovascular disease risk. [5 marks]',
            marks: 5,
            keywords: ['LDL', 'HDL', 'liver', 'body cells', 'atherosclerosis', 'artery', 'cholesterol', 'atheroma'],
            modelAnswer: 'LDL (Low-Density Lipoprotein) transports cholesterol from the liver to body cells throughout the body. High LDL levels result in excess cholesterol being deposited in artery walls, triggering macrophage infiltration and atheroma formation (atherosclerosis). HDL (High-Density Lipoprotein) transports cholesterol from peripheral body cells back to the liver for breakdown or excretion in bile. A high LDL:HDL ratio means more cholesterol is being delivered than removed from artery walls, increasing the risk of atherosclerosis and CVD events such as myocardial infarction.',
        },
        {
            id: 'kw-bio-1-1-005',
            stem: 'Explain why large multicellular organisms require a mass transport system rather than relying solely on diffusion. [3 marks]',
            marks: 3,
            keywords: ['surface area', 'volume', 'diffusion distance', 'gradient', 'metabolic rate', 'mass transport'],
            modelAnswer: 'In large multicellular organisms, the surface area to volume ratio is very small. Diffusion distances from the surface to internal cells would be too great for substances to reach cells at sufficient rate. Furthermore, high metabolic rate demands rapid delivery of oxygen and nutrients. A mass transport system (circulatory system) maintains concentration gradients and rapidly moves substances over long distances, enabling all cells to be supplied adequately.',
        },
        {
            id: 'kw-bio-1-1-006',
            stem: 'Describe the adaptations of arteries, veins and capillaries in relation to their functions. [6 marks]',
            marks: 6,
            keywords: ['elastic', 'muscle', 'valve', 'lumen', 'endothelium', 'diffusion', 'pressure', 'wall'],
            modelAnswer: 'Arteries: carry blood at high pressure away from the heart; thick wall with abundant elastic tissue (recoils to smooth pressure surges) and smooth muscle (controls flow); narrow lumen maintains pressure. Veins: carry blood at low pressure towards the heart; thin walls with little elastic tissue; wide lumen reduces resistance; pocket valves prevent backflow. Capillaries: site of exchange; wall is one endothelial cell thick (minimises diffusion distance); narrow lumen slows blood flow maximising exchange time; large total cross-sectional area decreases blood velocity.',
        },
        {
            id: 'kw-bio-1-1-007',
            stem: 'Explain the process of atherosclerosis and how it can lead to a myocardial infarction. [5 marks]',
            marks: 5,
            keywords: ['endothelium', 'macrophages', 'cholesterol', 'atheroma', 'lumen', 'thrombosis', 'coronary', 'blood supply'],
            modelAnswer: 'Atherosclerosis: damage to artery endothelium triggers inflammation; macrophages migrate into wall and engulf cholesterol, forming a fatty streak; calcium salts and fibrous tissue harden it into an atheroma. The atheroma narrows the arterial lumen, reducing blood flow and increasing blood pressure. If the atheroma in a coronary artery ruptures, a blood clot (thrombus) forms, completely blocking the vessel. The heart muscle supplied by that artery receives no oxygen (ischaemia) and begins to die — this is a myocardial infarction (heart attack).',
        },
        {
            id: 'kw-bio-1-1-008',
            stem: 'Describe how the risk factors for cardiovascular disease (CVD) interact, giving specific examples. [5 marks]',
            marks: 5,
            keywords: ['smoking', 'diet', 'blood pressure', 'LDL', 'oestrogen', 'genetics', 'obesity', 'endothelium'],
            modelAnswer: 'Multiple risk factors can interact multiplicatively. Smoking: carbon monoxide binds haemoglobin (reducing O₂ delivery) and nicotine raises heart rate; toxins damage the endothelium triggering atherosclerosis. Diet high in saturated fat raises LDL cholesterol, accelerating atheroma formation. High blood pressure (from obesity, inactivity, or high salt diet) further damages endothelium. Genetics can make individuals predisposed to high blood pressure or poor cholesterol regulation. Gender: men have higher risk partly because pre-menopausal women have oestrogen which raises HDL. Together, multiple risk factors compound overall CVD risk.',
        },
        {
            id: 'kw-bio-1-1-009',
            stem: 'Explain how antioxidants may reduce the risk of cardiovascular disease. [4 marks]',
            marks: 4,
            keywords: ['free radical', 'unpaired', 'oxidise', 'LDL', 'macrophage', 'antioxidant', 'electron', 'atheroma'],
            modelAnswer: 'Free radicals are molecules with unpaired electrons that are highly reactive. They can oxidise LDL cholesterol in the bloodstream. Oxidised LDL is preferentially taken up by macrophages in the artery wall, accelerating atheroma formation and atherosclerosis. Antioxidants (e.g. vitamin C, vitamin E) donate electrons to free radicals, neutralising them without becoming unstable themselves. By preventing LDL oxidation, antioxidants slow the accumulation of fatty plaques and may reduce CVD risk.',
        },
        {
            id: 'kw-bio-1-1-010',
            stem: 'Describe how tissue fluid is formed and returned to the blood or lymphatic system. [5 marks]',
            marks: 5,
            keywords: ['hydrostatic', 'oncotic', 'protein', 'filtration', 'osmosis', 'lymph', 'thoracic duct', 'capillary'],
            modelAnswer: 'At the arterial end of capillaries, high hydrostatic pressure (from heart contractions) exceeds the inward oncotic pressure (osmotic pull of plasma proteins that cannot leave the capillary). Small molecules (water, glucose, O₂) are filtered out through capillary pores into the interstitial space as tissue fluid. At the venous end, hydrostatic pressure has fallen; the retained proteins\' oncotic pressure now exceeds it, drawing water back in by osmosis. Approximately 10% of tissue fluid is not reabsorbed and instead enters blind-ended lymph capillaries, becoming lymph. Lymph returns to the bloodstream via the thoracic duct.',
        },
        {
            id: 'kw-bio-1-1-011',
            stem: 'Evaluate the extent to which epidemiological data can establish a causal link between lifestyle factors and CVD risk. [4 marks]',
            marks: 4,
            keywords: ['correlation', 'causation', 'confounding', 'epidemiological', 'experimental', 'mechanism', 'bias', 'data'],
            modelAnswer: 'Epidemiological studies identify correlations — two variables changing together — but cannot on their own prove causation. A confounding variable (a third factor linked to both the exposure and the outcome) might be the true cause. For example, people who smoke may also have poor diets, making it unclear which factor drives CVD. To establish causation, a plausible biological mechanism must be identified and supported by experimental evidence. However, epidemiological data from large cohort studies (e.g. showing dose-response relationships) significantly strengthens the case for causation alongside mechanistic studies.',
        },
        {
            id: 'kw-bio-1-1-012',
            stem: 'Explain why cellulose is suitable as a structural molecule in plant cell walls, using its molecular structure. [4 marks]',
            marks: 4,
            keywords: ['beta-glucose', '1,4', 'straight', 'hydrogen bond', 'microfibril', 'tensile', 'insoluble', 'unbranched'],
            modelAnswer: 'Cellulose is made of beta-glucose monomers linked by 1,4-glycosidic bonds. Alternate beta-glucose molecules are rotated 180°, producing straight unbranched chains that can lie parallel to each other. Hydrogen bonds form between parallel chains, cross-linking them into rigid microfibrils. These microfibrils provide high tensile strength to the cell wall, allowing plant cells to resist the pressure of the water potential gradient (turgor pressure) without bursting. Cellulose is also insoluble, so it does not affect the water potential of the cell.',
        },
    ],

    // ─────────────────────────────────────────────
    // FLASHCARDS — 25 cards
    // front: prompt/question; back: answer/explanation
    // ─────────────────────────────────────────────
    flashcards: [
        {
            id: 'fc-bio-1-1-001',
            front: 'Why is water described as a "dipolar" or "polar" molecule?',
            back: 'Because oxygen is more electronegative than hydrogen, it pulls shared electrons towards itself, acquiring a slight negative charge (δ−). The hydrogen atoms carry slight positive charges (δ+). This unequal charge distribution across the molecule makes it dipolar (polar).',
            topic: 'Water dipolar properties',
        },
        {
            id: 'fc-bio-1-1-002',
            front: 'Give TWO properties of water that are directly due to hydrogen bonding.',
            back: '1. High specific heat capacity — H-bonds absorb large amounts of heat energy per degree rise in temperature, providing thermal stability. 2. High latent heat of vaporisation — breaking H-bonds to evaporate water requires large energy input, making evaporation an effective cooling mechanism (sweating).',
            topic: 'Water dipolar properties',
        },
        {
            id: 'fc-bio-1-1-003',
            front: 'What is the structural difference between alpha-glucose and beta-glucose?',
            back: 'In alpha-glucose, the −OH group on carbon 1 points DOWN (below the ring plane). In beta-glucose, the −OH group on carbon 1 points UP (above the ring plane). This small difference determines whether straight (cellulose) or coiled (starch/glycogen) polysaccharide structures form.',
            topic: 'Monosaccharides and polysaccharides',
        },
        {
            id: 'fc-bio-1-1-004',
            front: 'What type of bond forms between glucose monomers in a polysaccharide, and how is it formed?',
            back: 'A glycosidic bond. It forms via a condensation reaction between two monosaccharides, releasing one molecule of water. The reverse (breaking the bond by adding water) is hydrolysis.',
            topic: 'Monosaccharides and polysaccharides',
        },
        {
            id: 'fc-bio-1-1-005',
            front: 'Compare the glycosidic bonds and branching in amylopectin and cellulose.',
            back: 'Amylopectin: α-glucose; 1,4 and 1,6-glycosidic bonds; highly branched (can be rapidly hydrolysed). Cellulose: β-glucose; 1,4-glycosidic bonds only; straight unbranched chains (alternate monomers inverted); H-bonds cross-link chains into microfibrils.',
            topic: 'Monosaccharides and polysaccharides',
        },
        {
            id: 'fc-bio-1-1-006',
            front: 'In a triglyceride, what type of bond forms between the glycerol and each fatty acid, and by what reaction?',
            back: 'An ester bond forms between the −OH group of glycerol and the −COOH of each fatty acid, via a condensation reaction. Three ester bonds form overall, releasing three molecules of water.',
            topic: 'Triglycerides and phospholipids',
        },
        {
            id: 'fc-bio-1-1-007',
            front: 'Why do unsaturated fatty acids have lower melting points than saturated fatty acids?',
            back: 'C=C double bonds introduce kinks (bends) into the hydrocarbon chain. These kinks prevent molecules from packing tightly together, reducing van der Waals forces between chains, resulting in a lower melting point — hence unsaturated fats are liquid (oils) at room temperature.',
            topic: 'Triglycerides and phospholipids',
        },
        {
            id: 'fc-bio-1-1-008',
            front: "What is the function of cholesterol in cell membranes?",
            back: 'Cholesterol acts as a fluidity buffer: it inserts between phospholipid tails. At high temperatures it reduces excessive fluidity (prevents membrane becoming too liquid); at low temperatures it prevents rigidity (prevents membrane becoming too solid/gel-like). It also reduces membrane permeability to small polar molecules.',
            topic: 'Cholesterol, HDL and LDL',
        },
        {
            id: 'fc-bio-1-1-009',
            front: 'Distinguish between the roles of LDL and HDL in cholesterol transport.',
            back: 'LDL (Low-Density Lipoprotein): transports cholesterol FROM the liver TO body cells — high LDL is associated with plaque depositing in arteries ("bad" cholesterol). HDL (High-Density Lipoprotein): transports cholesterol FROM body cells BACK TO the liver for breakdown — high HDL is cardioprotective ("good" cholesterol). High LDL:HDL ratio = increased CVD risk.',
            topic: 'Cholesterol, HDL and LDL',
        },
        {
            id: 'fc-bio-1-1-010',
            front: "What colour change indicates a POSITIVE Benedict's test, and what does it confirm?",
            back: "The solution changes from blue to brick-red (via green → yellow → orange). The brick-red precipitate is copper(I) oxide (Cu₂O), formed when Cu²⁺ ions are reduced by a reducing sugar. It confirms the presence of a reducing sugar (e.g., glucose, fructose, maltose, lactose). Higher brick-red intensity = higher sugar concentration.",
            topic: 'Biological molecule tests',
        },
        {
            id: 'fc-bio-1-1-011',
            front: 'What colours do you observe in positive and negative iodine tests for starch?',
            back: 'Positive: orange-brown iodine turns BLUE-BLACK (starch–iodine complex forms inside the amylose helix). Negative: solution remains orange-brown (no starch present). The test should be performed at room temperature.',
            topic: 'Biological molecule tests',
        },
        {
            id: 'fc-bio-1-1-012',
            front: 'Describe the double circulatory system of mammals.',
            back: 'Blood passes through the heart TWICE per complete circuit. Circuit 1 — Pulmonary circulation: right ventricle → lungs (for gas exchange) → left atrium. Circuit 2 — Systemic circulation: left ventricle → body organs → right atrium. This maintains high pressure in the systemic circuit after reoxygenation.',
            topic: 'Heart structure and cardiac cycle',
        },
        {
            id: 'fc-bio-1-1-013',
            front: 'List the events of the cardiac cycle in order, starting with diastole.',
            back: '1. Diastole: both chambers relax; blood fills atria from veins. 2. Atrial systole: atria contract; AV valves open; blood pushed into ventricles. 3. Ventricular systole: ventricles contract; pressure exceeds atria → AV valves close; pressure exceeds arteries → SL valves open; blood ejected. 4. Pressure drops → SL valves close; back to diastole.',
            topic: 'Heart structure and cardiac cycle',
        },
        {
            id: 'fc-bio-1-1-014',
            front: 'Why does the left ventricle have a thicker wall than the right ventricle?',
            back: 'The left ventricle pumps blood into the aorta for the systemic circulation — which covers the whole body and requires high pressure. The right ventricle only pumps blood the short distance to the lungs (pulmonary circulation), requiring lower pressure. Thicker muscle generates more contractile force and higher pressure.',
            topic: 'Heart structure and cardiac cycle',
        },
        {
            id: 'fc-bio-1-1-015',
            front: 'Give ONE structural adaptation of veins and explain how it relates to function.',
            back: 'Pocket/semi-lunar valves: veins carry blood back to the heart at LOW pressure. Without valves, gravity would cause blood to pool or flow backwards (especially in legs). Valves open to allow forward flow but close when blood reverses direction, ensuring one-way flow back to the heart.',
            topic: 'Blood vessels',
        },
        {
            id: 'fc-bio-1-1-016',
            front: 'Why is the capillary wall only one cell thick?',
            back: 'To minimise the diffusion distance between blood and surrounding body cells. A shorter diffusion path increases the rate of exchange of O₂, glucose, CO₂, and waste products — satisfying the high metabolic demands of active tissues (in accordance with Fick\'s Law: rate ∝ 1/thickness).',
            topic: 'Blood vessels',
        },
        {
            id: 'fc-bio-1-1-017',
            front: 'Explain why plasma proteins do not pass into tissue fluid.',
            back: 'Plasma proteins (e.g. albumin) are large macromolecules. The pores in capillary walls (filtration slits between endothelial cells) are too small to allow them through. They remain in the blood, where they exert an osmotic (oncotic) pressure that pulls water back into the capillary at the venous end.',
            topic: 'Blood, tissue fluid and lymph',
        },
        {
            id: 'fc-bio-1-1-018',
            front: 'What is oncotic pressure and what role does it play in tissue fluid formation?',
            back: 'Oncotic pressure is the osmotic pressure created by plasma proteins retained in the capillary blood. It exerts an inward pull on water. At the arterial end, hydrostatic pressure exceeds oncotic pressure (fluid moves out). At the venous end, hydrostatic pressure drops below oncotic pressure — water is drawn back into the capillary by osmosis.',
            topic: 'Blood, tissue fluid and lymph',
        },
        {
            id: 'fc-bio-1-1-019',
            front: 'Describe the four stages of atherosclerosis.',
            back: '1. Endothelial damage (high BP, smoking toxins). 2. Inflammatory response: macrophages + cholesterol migrate into artery wall → fatty streak. 3. Calcification: calcium salts + fibrous tissue harden around fatty deposit → atheroma. 4. Lumen narrows → BP rises → further endothelial damage (positive feedback loop).',
            topic: 'Atherosclerosis and thrombosis',
        },
        {
            id: 'fc-bio-1-1-020',
            front: 'What is the role of thrombin in blood clotting?',
            back: 'Thrombin is a proteolytic enzyme formed from inactive prothrombin by thromboplastin (+ Ca²⁺ + vitamin K). It catalyses the conversion of the soluble plasma protein fibrinogen into insoluble fibrin. Fibrin strands polymerise into a mesh that traps red blood cells and platelets, forming a stable clot.',
            topic: 'Atherosclerosis and thrombosis',
        },
        {
            id: 'fc-bio-1-1-021',
            front: 'How does smoking increase the risk of cardiovascular disease? Give TWO mechanisms.',
            back: '1. Carbon monoxide in smoke binds irreversibly to haemoglobin (forming carboxyhaemoglobin), reducing the blood\'s O₂-carrying capacity and causing the heart to work harder. 2. Nicotine raises heart rate. 3. Toxins in smoke directly damage the arterial endothelium, triggering the inflammatory response that initiates atherosclerosis.',
            topic: 'CVD risk factors',
        },
        {
            id: 'fc-bio-1-1-022',
            front: "Explain the difference between 'actual risk' and 'perceived risk' in the context of CVD.",
            back: 'Actual risk is the statistically measured probability of a harmful outcome (e.g. from large epidemiological studies). Perceived risk is an individual\'s subjective estimate of that probability. People tend to overestimate dramatic/unfamiliar/involuntary risks (e.g. plane crash) and underestimate familiar/voluntary lifestyle risks (e.g. poor diet, smoking) even though the latter is statistically greater for CVD.',
            topic: 'CVD risk factors',
        },
        {
            id: 'fc-bio-1-1-023',
            front: 'How do free radicals contribute to the development of atherosclerosis?',
            back: 'Free radicals (molecules with unpaired electrons) oxidise LDL cholesterol in the blood. Oxidised LDL is preferentially engulfed by macrophages in the artery wall, forming foam cells. These accumulate as a fatty streak that progresses to an atheroma, narrowing the artery lumen and increasing CVD risk.',
            topic: 'Antioxidants and free radicals',
        },
        {
            id: 'fc-bio-1-1-024',
            front: 'In Core Practical 1, why must you include a negative control in food tests?',
            back: 'A negative control (e.g. distilled water with the test reagent) confirms that any colour change observed in the sample is due to the food being tested, and not contamination of the reagent or the tube. It ensures the result is valid and repeatable.',
            topic: 'Core Practical 1: food tests',
        },
        {
            id: 'fc-bio-1-1-025',
            front: 'In the DCPIP test (Core Practical 2), how does the volume of sample needed to decolourise DCPIP relate to vitamin C concentration?',
            back: 'An INVERSE relationship: a SMALLER volume of sample needed to decolourise a fixed amount of DCPIP indicates a HIGHER vitamin C concentration (more ascorbic acid per cm³). A LARGER volume needed indicates a LOWER vitamin C concentration per cm³ of the sample.',
            topic: 'Core Practical 2: vitamin C and DCPIP',
        },
    ],
};
