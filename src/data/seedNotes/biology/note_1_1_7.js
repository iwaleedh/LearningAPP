export const note_biology_1_1_7 = {
  blocks: [
    {
      id: 'obj-blood-tissue-fluid',
      type: 'objective',
      data: {
        text: 'Describe the composition of blood and the role of haemoglobin in oxygen and CO₂ transport. Explain the oxygen dissociation curve, cooperative binding, the Bohr effect, and foetal haemoglobin. Explain tissue fluid formation from blood and reabsorption. Describe the role of the lymphatic system.',
      },
    },
    {
      id: 'h-blood-composition',
      type: 'heading',
      data: { text: 'Composition of Blood', level: 2 },
    },
    {
      id: 'table-blood-components',
      type: 'comparisonTable',
      data: {
        caption: 'Components of blood and their functions',
        headers: ['Component', '% of blood', 'Structure', 'Main function(s)'],
        rows: [
          ['Plasma', '~55%', 'Straw-coloured liquid; mostly water (~90%) with dissolved substances', 'Transport: glucose, amino acids, fatty acids, hormones, CO₂, urea, proteins, ions; temperature regulation; osmotic balance'],
          ['Red blood cells (erythrocytes)', '~44%', 'Biconcave disc; no nucleus; contains haemoglobin', 'Transport O₂ (via haemoglobin); also carry CO₂ as HCO₃⁻'],
          ['White blood cells (leucocytes)', '<1%', 'Nucleated cells; include neutrophils, lymphocytes, monocytes', 'Immune defence: phagocytosis (neutrophils), antibody production (B lymphocytes), cell-mediated immunity (T lymphocytes)'],
          ['Platelets (thrombocytes)', '<1%', 'Small cell fragments; no nucleus; derived from megakaryocytes', 'Blood clotting (haemostasis); form platelet plug at wound sites'],
        ],
      },
    },
    {
      id: 'callout-key-rbc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Red Blood Cell Adaptations',
        text: 'Biconcave disc shape → large surface area relative to volume → efficient O₂ diffusion. No nucleus → more space for haemoglobin molecules. Flexible → can squeeze through narrow capillaries. Each red blood cell contains ~280 million haemoglobin molecules.',
      },
    },
    {
      id: 'h-plasma',
      type: 'heading',
      data: { text: 'Blood Plasma', level: 2 },
    },
    {
      id: 'list-plasma-contents',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Water (~90%) — solvent; transports substances; involved in temperature regulation',
          'Plasma proteins: albumin (osmotic regulation, transport), globulins (antibodies, transport), fibrinogen (blood clotting)',
          'Nutrients: glucose, amino acids, fatty acids, glycerol, vitamins',
          'Hormones: insulin, glucagon, thyroxine, oestrogen, etc.',
          'Waste products: urea (from amino acid catabolism), CO₂',
          'Ions: Na⁺, K⁺, Ca²⁺, Cl⁻, HCO₃⁻ — osmotic balance, pH buffering, nerve/muscle function',
        ],
      },
    },
    {
      id: 'h-haemoglobin',
      type: 'heading',
      data: { text: 'Haemoglobin: Structure and Oxygen Transport', level: 2 },
    },
    {
      id: 'p-haemo-structure',
      type: 'paragraph',
      data: {
        text: 'Haemoglobin is a globular protein found in red blood cells. Each molecule consists of four polypeptide (globin) subunits — two α-globin and two β-globin chains. Each subunit contains a haem prosthetic group, which contains a Fe²⁺ ion. One oxygen molecule binds to each Fe²⁺, so one haemoglobin molecule can carry four oxygen molecules (eight oxygen atoms). Red blood cells each contain about 280 million haemoglobin molecules.',
      },
    },
    {
      id: 'callout-key-haemo-reaction',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reversible Oxygen Binding',
        text: '4O₂ + Hb ⇌ Hb(O₂)₄\n\nHigh O₂ partial pressure (e.g. in lungs) → reaction moves right → oxyhaemoglobin formed\nLow O₂ partial pressure (e.g. in respiring tissues) → reaction moves left → O₂ released to cells',
      },
    },
    {
      id: 'h-co2-transport',
      type: 'heading',
      data: { text: 'Carbon Dioxide Transport', level: 2 },
    },
    {
      id: 'list-co2-transport',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'A small percentage of CO₂ dissolves directly in blood plasma and is transported in solution',
          'Some CO₂ binds to haemoglobin, forming carbaminohaemoglobin',
          'The majority (greatest percentage) is transported as hydrogen carbonate ions (HCO₃⁻) in the plasma',
        ],
      },
    },
    {
      id: 'p-hco3-formation',
      type: 'paragraph',
      data: {
        text: 'CO₂ from respiring tissues diffuses into red blood cells. Inside the cell, CO₂ combines with water to form carbonic acid (H₂CO₃), catalysed by the enzyme carbonic anhydrase. Without this enzyme the reaction is very slow. Carbonic acid then dissociates to produce hydrogen ions (H⁺) and hydrogen carbonate ions (HCO₃⁻). The HCO₃⁻ ions diffuse out of the red blood cell into the plasma, where they are transported in solution. The H⁺ ions bind to haemoglobin, forming haemoglobinic acid — haemoglobin acts as a buffer, preventing the H⁺ ions from lowering the pH of the red blood cell.',
      },
    },
    {
      id: 'svg-co2-transport',
      type: 'svg',
      data: {
        caption: 'CO₂ transport in a red blood cell — formation of hydrogen carbonate ions',
        svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.txt{fill:#1f2937;} .dim{fill:#6b7280;} .node{fill:#e0e7ff;stroke:#6366f1;stroke-width:1.5;}</style>
    <marker id="arr-co2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#6366f1"/></marker>
  </defs>
  <!-- RBC outline -->
  <ellipse cx="280" cy="140" rx="240" ry="90" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <text x="280" y="232" text-anchor="middle" fill="#ea580c" font-size="11" font-weight="bold">RED BLOOD CELL (ERYTHROCYTE)</text>
  <!-- CO2 enters -->
  <rect x="15" y="118" width="55" height="28" rx="6" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="43" y="136" text-anchor="middle" fill="#166534" font-size="11">CO₂</text>
  <path d="M 70 132 L 100 132" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-co2)"/>
  <text x="85" y="125" text-anchor="middle" fill="#16a34a" font-size="9">diffuses in</text>
  <!-- CO2 + H2O step -->
  <rect x="105" y="112" width="110" height="38" rx="6" class="node"/>
  <text x="160" y="129" text-anchor="middle" class="txt" font-size="10">CO₂ + H₂O</text>
  <text x="160" y="143" text-anchor="middle" fill="#6366f1" font-size="9">carbonic anhydrase</text>
  <!-- Arrow to H2CO3 -->
  <path d="M 215 131 L 248 131" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-co2)"/>
  <!-- H2CO3 -->
  <rect x="252" y="112" width="80" height="38" rx="6" class="node"/>
  <text x="292" y="133" text-anchor="middle" class="txt" font-size="10">H₂CO₃</text>
  <!-- Arrow to H+ + HCO3- -->
  <path d="M 332 131 L 365 131" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-co2)"/>
  <text x="350" y="122" text-anchor="middle" fill="#6366f1" font-size="9">dissociates</text>
  <!-- H+ + HCO3- -->
  <rect x="368" y="112" width="120" height="38" rx="6" class="node"/>
  <text x="428" y="129" text-anchor="middle" class="txt" font-size="11">H⁺  +  HCO₃⁻</text>
  <!-- H+ pathway: binds Hb -->
  <path d="M 428 150 L 428 178" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr-co2)"/>
  <rect x="360" y="180" width="140" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="430" y="197" text-anchor="middle" fill="#991b1b" font-size="10">Hb + H⁺ → HHb (buffer)</text>
  <!-- HCO3- exits -->
  <path d="M 428 150 L 500 200" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr-co2)"/>
  <text x="510" y="215" text-anchor="start" fill="#2563eb" font-size="10">HCO₃⁻ diffuses</text>
  <text x="510" y="228" text-anchor="start" fill="#2563eb" font-size="10">into plasma</text>
  <!-- Labels -->
  <text x="155" y="53" text-anchor="middle" fill="#ea580c" font-size="11">Carbonic anhydrase catalyses CO₂ + H₂O → H₂CO₃</text>
  <text x="280" y="70" text-anchor="middle" class="dim" font-size="10">H₂CO₃ → H⁺ + HCO₃⁻  |  H⁺ binds Hb (buffer)  |  HCO₃⁻ exits to plasma</text>
</svg>`,
      },
    },
    {
      id: 'h-dissociation-curve',
      type: 'heading',
      data: { text: 'The Oxygen Dissociation Curve', level: 2 },
    },
    {
      id: 'p-dissociation-intro',
      type: 'paragraph',
      data: {
        text: 'The oxygen dissociation curve shows the percentage saturation of haemoglobin with oxygen at different partial pressures of oxygen (pO₂). Partial pressure of oxygen is a measure of oxygen concentration. Haemoglobin is said to be saturated when all four binding sites are occupied. The affinity of haemoglobin for oxygen describes how easily it binds and releases O₂: high affinity = binds easily, releases slowly; low affinity = binds slowly, releases easily.',
      },
    },
    {
      id: 'p-s-shape-explanation',
      type: 'paragraph',
      data: {
        text: 'The dissociation curve is S-shaped (sigmoid) because of cooperative binding. At low pO₂, the first oxygen molecule binds slowly (haemoglobin shape makes it difficult) — explains the shallow lower part of the curve. After one O₂ binds, the haemoglobin changes conformation (shape), making it easier for subsequent O₂ molecules to bind — explains the steep middle section. As saturation approaches 100%, the fourth O₂ becomes harder to bind (fewer free sites left) — explains the levelling off at the top. The steep central section is critical: a small decrease in pO₂ in the tissues causes a large release of O₂.',
      },
    },
    {
      id: 'svg-dissociation-curve',
      type: 'svg',
      data: {
        caption: 'Oxygen dissociation curve for haemoglobin — S-shaped due to cooperative binding',
        svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.ax{stroke:#9ca3af;stroke-width:1.5;fill:none;} .txt{fill:#1f2937;} .dim{fill:#6b7280;} .curve{stroke:#6366f1;stroke-width:2.5;fill:none;}</style>
    <marker id="arr-g" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#16a34a"/></marker>
  </defs>
  <!-- Axes -->
  <line x1="60" y1="240" x2="480" y2="240" class="ax"/>
  <line x1="60" y1="20" x2="60" y2="240" class="ax"/>
  <!-- X axis -->
  <text x="60" y="258" text-anchor="middle" class="dim" font-size="10">0</text>
  <text x="150" y="258" text-anchor="middle" class="dim" font-size="10">2</text>
  <text x="240" y="258" text-anchor="middle" class="dim" font-size="10">4</text>
  <text x="330" y="258" text-anchor="middle" class="dim" font-size="10">6</text>
  <text x="420" y="258" text-anchor="middle" class="dim" font-size="10">8</text>
  <text x="480" y="258" text-anchor="middle" class="dim" font-size="10">10</text>
  <text x="270" y="276" text-anchor="middle" class="dim" font-size="11">Partial pressure of O₂ (pO₂) / kPa</text>
  <!-- Y axis -->
  <text x="52" y="244" text-anchor="end" class="dim" font-size="10">0</text>
  <text x="52" y="196" text-anchor="end" class="dim" font-size="10">20</text>
  <text x="52" y="148" text-anchor="end" class="dim" font-size="10">60</text>
  <text x="52" y="100" text-anchor="end" class="dim" font-size="10">80</text>
  <text x="52" y="35" text-anchor="end" class="dim" font-size="10">100</text>
  <text x="18" y="140" text-anchor="middle" class="dim" font-size="11" transform="rotate(-90,18,140)">% Saturation of Hb with O₂</text>
  <!-- S-shaped curve (adult Hb) -->
  <path d="M 60,240 C 90,238 120,232 150,224 C 175,216 190,200 210,173 C 230,145 255,95 290,55 C 315,32 345,28 380,26 C 415,24 450,25 480,25" class="curve"/>
  <!-- Annotation: low pO2 = tissues -->
  <line x1="150" y1="224" x2="150" y2="243" stroke="#9ca3af" stroke-dasharray="3,2"/>
  <text x="90" y="285" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">Low pO₂</text>
  <text x="90" y="296" text-anchor="middle" fill="#dc2626" font-size="10">(respiring tissues)</text>
  <!-- Annotation: high pO2 = lungs -->
  <line x1="420" y1="25" x2="420" y2="243" stroke="#9ca3af" stroke-dasharray="3,2"/>
  <text x="438" y="86" text-anchor="start" fill="#16a34a" font-size="10" font-weight="bold">High pO₂</text>
  <text x="438" y="99" text-anchor="start" fill="#16a34a" font-size="10">(lungs)</text>
  <!-- Annotations on curve -->
  <text x="130" y="220" text-anchor="start" fill="#6b7280" font-size="9">Slow uptake</text>
  <text x="130" y="230" text-anchor="start" fill="#6b7280" font-size="9">(1st O₂ hard to bind)</text>
  <text x="220" y="120" text-anchor="start" fill="#6b7280" font-size="9">Steep — large O₂</text>
  <text x="220" y="132" text-anchor="start" fill="#6b7280" font-size="9">release per Δ pO₂</text>
  <text x="350" y="48" text-anchor="start" fill="#6b7280" font-size="9">Levels off (sites full)</text>
  <!-- Dashed drop lines to show release -->
  <path d="M 420,25 L 60,25" stroke="#6366f1" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M 150,224 L 60,224" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="63" y="22" fill="#6366f1" font-size="9">~97%</text>
  <text x="63" y="221" fill="#dc2626" font-size="9">~30%</text>
</svg>`,
      },
    },
    {
      id: 'h-bohr-effect',
      type: 'heading',
      data: { text: 'The Bohr Effect', level: 2 },
    },
    {
      id: 'p-bohr-effect',
      type: 'paragraph',
      data: {
        text: 'The Bohr effect is the shift in the oxygen dissociation curve caused by changes in CO₂ concentration. When pCO₂ is high (e.g. in respiring tissues), CO₂ combines with water to form carbonic acid, which dissociates to produce H⁺ ions. These H⁺ ions bind to haemoglobin, reducing its affinity for oxygen and causing it to release O₂ more readily. On a graph, the curve shifts to the RIGHT at higher CO₂ levels — at any given pO₂, haemoglobin is less saturated. This is extremely beneficial: in active tissues where CO₂ production is high, haemoglobin automatically releases more O₂ where it is most needed.',
      },
    },
    {
      id: 'svg-bohr-shift',
      type: 'svg',
      data: {
        caption: 'Bohr effect — rhe oxygen dissociation curve shifts right when CO₂ (pCO₂) increases',
        svg: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.ax{stroke:#9ca3af;stroke-width:1.5;fill:none;} .dim{fill:#6b7280;} .normal{stroke:#6366f1;stroke-width:2.5;fill:none;} .bohr{stroke:#dc2626;stroke-width:2.5;fill:none;stroke-dasharray:7,3;}</style>
  </defs>
  <!-- Axes -->
  <line x1="60" y1="240" x2="480" y2="240" class="ax"/>
  <line x1="60" y1="20" x2="60" y2="240" class="ax"/>
  <text x="270" y="270" text-anchor="middle" class="dim" font-size="11">Partial pressure of O₂ / kPa</text>
  <text x="18" y="135" text-anchor="middle" class="dim" font-size="11" transform="rotate(-90,18,135)">% Saturation of Hb with O₂</text>
  <!-- X labels -->
  <text x="60" y="257" text-anchor="middle" class="dim" font-size="10">0</text>
  <text x="170" y="257" text-anchor="middle" class="dim" font-size="10">2</text>
  <text x="280" y="257" text-anchor="middle" class="dim" font-size="10">4</text>
  <text x="390" y="257" text-anchor="middle" class="dim" font-size="10">6</text>
  <text x="480" y="257" text-anchor="middle" class="dim" font-size="10">8</text>
  <!-- Y labels -->
  <text x="54" y="244" text-anchor="end" class="dim" font-size="10">0</text>
  <text x="54" y="144" text-anchor="end" class="dim" font-size="10">50</text>
  <text x="54" y="28" text-anchor="end" class="dim" font-size="10">100</text>
  <!-- Normal curve (low CO2) -->
  <path d="M 60,240 C 95,238 130,228 165,212 C 195,195 215,165 250,128 C 280,90 320,40 370,30 C 400,26 440,25 480,25" class="normal"/>
  <!-- Bohr curve (high CO2, shifted right) -->
  <path d="M 60,240 C 90,239 120,234 155,228 C 190,218 215,195 255,165 C 285,140 315,95 360,65 C 390,48 430,35 480,32" class="bohr"/>
  <!-- Shift arrow -->
  <path d="M 250,128 L 310,165" stroke="#d97706" stroke-width="2" marker-end="url(#arr-shift)"/>
  <defs><marker id="arr-shift" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#d97706"/></marker></defs>
  <text x="283" y="140" text-anchor="middle" fill="#d97706" font-size="11" font-weight="bold">Bohr shift →</text>
  <!-- At same pO2, lower saturation with high CO2 -->
  <line x1="280" y1="28" x2="280" y2="240" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="280" cy="128" r="4" fill="#6366f1"/>
  <circle cx="280" cy="165" r="4" fill="#dc2626"/>
  <line x1="60" y1="128" x2="280" y2="128" stroke="#6366f1" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="60" y1="165" x2="280" y2="165" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Legend -->
  <line x1="70" y1="20" x2="110" y2="20" class="normal"/>
  <text x="115" y="24" fill="#6366f1" font-size="11">Low pCO₂ (normal)</text>
  <line x1="70" y1="40" x2="110" y2="40" class="bohr"/>
  <text x="115" y="44" fill="#dc2626" font-size="11">High pCO₂ (Bohr effect)</text>
</svg>`,
      },
    },
    {
      id: 'h-foetal-haemoglobin',
      type: 'heading',
      data: { text: 'Foetal Haemoglobin', level: 2 },
    },
    {
      id: 'p-foetal-haemo',
      type: 'paragraph',
      data: {
        text: 'Foetal haemoglobin (HbF) has a higher affinity for oxygen than adult haemoglobin (HbA). This is vital because the foetus must obtain oxygen from the mother\'s blood at the placenta. At the low pO₂ of the placenta, adult haemoglobin is releasing its oxygen — foetal haemoglobin can pick that oxygen up because it remains more saturated at the same pO₂. On the dissociation curve, the HbF curve lies to the LEFT of the HbA curve — at any given pO₂, foetal haemoglobin has a higher percentage saturation. After birth, the baby gradually replaces foetal haemoglobin with adult haemoglobin, which is better suited to releasing oxygen in the more metabolically active tissues of the growing infant.',
      },
    },
    {
      id: 'svg-foetal-haemoglobin',
      type: 'svg',
      data: {
        caption: 'Foetal haemoglobin (HbF) curve lies to the left of adult haemoglobin (HbA) — HbF has a higher O₂ affinity',
        svg: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.ax{stroke:#9ca3af;stroke-width:1.5;fill:none;} .dim{fill:#6b7280;} .adult{stroke:#3b82f6;stroke-width:2.5;fill:none;} .foetal{stroke:#16a34a;stroke-width:2.5;fill:none;}</style>
  </defs>
  <!-- Axes -->
  <line x1="60" y1="240" x2="480" y2="240" class="ax"/>
  <line x1="60" y1="20" x2="60" y2="240" class="ax"/>
  <text x="270" y="270" text-anchor="middle" class="dim" font-size="11">Partial pressure of O₂ / kPa</text>
  <text x="18" y="135" text-anchor="middle" class="dim" font-size="11" transform="rotate(-90,18,135)">% Saturation of Hb with O₂</text>
  <!-- X labels -->
  <text x="60" y="257" text-anchor="middle" class="dim" font-size="10">0</text>
  <text x="170" y="257" text-anchor="middle" class="dim" font-size="10">2</text>
  <text x="280" y="257" text-anchor="middle" class="dim" font-size="10">4</text>
  <text x="390" y="257" text-anchor="middle" class="dim" font-size="10">6</text>
  <text x="480" y="257" text-anchor="middle" class="dim" font-size="10">8</text>
  <!-- Y labels -->
  <text x="54" y="244" text-anchor="end" class="dim" font-size="10">0</text>
  <text x="54" y="144" text-anchor="end" class="dim" font-size="10">50</text>
  <text x="54" y="28" text-anchor="end" class="dim" font-size="10">100</text>
  <!-- Adult HbA (shifted right relative to HbF) -->
  <path d="M 60,240 C 95,238 130,228 165,212 C 195,195 215,165 250,128 C 280,90 320,40 370,30 C 400,26 440,25 480,25" class="adult"/>
  <!-- Foetal HbF (shifted left — higher affinity) -->
  <path d="M 60,240 C 90,237 115,225 145,200 C 170,175 195,142 225,100 C 255,62 300,34 350,28 C 390,25 440,25 480,25" class="foetal"/>
  <!-- At same pO2, HbF more saturated -->
  <line x1="240" y1="28" x2="240" y2="240" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="240" cy="128" r="4" fill="#3b82f6"/>
  <circle cx="240" cy="100" r="4" fill="#16a34a"/>
  <line x1="60" y1="128" x2="240" y2="128" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="60" y1="100" x2="240" y2="100" stroke="#16a34a" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="63" y="97" fill="#16a34a" font-size="9">~70% (HbF)</text>
  <text x="63" y="125" fill="#3b82f6" font-size="9">~55% (HbA)</text>
  <!-- Arrow showing HbF picks up O2 that HbA releases -->
  <text x="340" y="72" text-anchor="middle" fill="#166534" font-size="10" font-weight="bold">HbF picks up O₂</text>
  <text x="340" y="85" text-anchor="middle" fill="#166534" font-size="10">released by HbA</text>
  <text x="340" y="98" text-anchor="middle" fill="#166534" font-size="10">at the placenta</text>
  <!-- Legend -->
  <line x1="70" y1="20" x2="110" y2="20" class="foetal"/>
  <text x="115" y="24" fill="#16a34a" font-size="11">Foetal Hb (HbF) — higher affinity (left shift)</text>
  <line x1="70" y1="40" x2="110" y2="40" class="adult"/>
  <text x="115" y="44" fill="#3b82f6" font-size="11">Adult Hb (HbA)</text>
</svg>`,
      },
    },
    {
      id: 'h-tissue-fluid',
      type: 'heading',
      data: { text: 'Formation and Reabsorption of Tissue Fluid', level: 2 },
    },
    {
      id: 'p-tissue-fluid-intro',
      type: 'paragraph',
      data: {
        text: 'Tissue fluid (interstitial fluid) is the fluid that bathes the cells of the body\'s tissues. It allows exchange of materials between blood and cells without direct contact. It forms from blood plasma leaking out of capillaries and is distinct from blood because it lacks large plasma proteins (which cannot pass through capillary walls) and red blood cells.',
      },
    },
    {
      id: 'p-tissue-fluid-formation',
      type: 'paragraph',
      data: {
        text: 'At the arterial end of a capillary, blood pressure (hydrostatic pressure) is high (~35 mmHg). This outward pressure overcomes the inward osmotic force from plasma proteins (oncotic pressure ~25 mmHg). Therefore net outward pressure ≈ +10 mmHg, forcing plasma filtrate out of the capillary into the surrounding tissue spaces, forming tissue fluid. This filtrate contains water, glucose, amino acids, O₂, ions — but NOT plasma proteins (too large to cross the capillary wall) and NOT red blood cells.',
      },
    },
    {
      id: 'p-tissue-fluid-reabsorption',
      type: 'paragraph',
      data: {
        text: 'At the venous end of the capillary, blood pressure has fallen (~15 mmHg) as fluid has left. However, the oncotic pressure from plasma proteins remains unchanged (~25 mmHg). Net inward pressure ≈ −10 mmHg, so fluid is reabsorbed back into the capillary, carrying CO₂, urea, and other waste products from the tissue cells. About 90% of tissue fluid is reabsorbed this way. The remaining ~10% enters the lymphatic capillaries.',
      },
    },
    {
      id: 'svg-tissue-fluid',
      type: 'svg',
      data: {
        caption: 'Formation and reabsorption of tissue fluid at a capillary — pressure gradients',
        svg: `<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" font-size="10">
  <rect width="440" height="220" fill="#f8f9ff" rx="8"/>
  <!-- Capillary tube -->
  <rect x="50" y="85" width="340" height="50" rx="6" fill="#ffd0d0" stroke="#c04040" stroke-width="2"/>
  <text x="220" y="115" text-anchor="middle" fill="#8b0000" font-weight="bold">Blood capillary</text>
  <!-- Arterial end label -->
  <text x="80" y="75" text-anchor="middle" fill="#2040a0" font-size="9" font-weight="bold">Arterial end</text>
  <text x="80" y="86" text-anchor="middle" fill="#2040a0" font-size="9">High pressure</text>
  <text x="80" y="96" text-anchor="middle" fill="#2040a0" font-size="9">~35 mmHg</text>
  <!-- Venous end label -->
  <text x="360" y="75" text-anchor="middle" fill="#2040a0" font-size="9" font-weight="bold">Venous end</text>
  <text x="360" y="86" text-anchor="middle" fill="#2040a0" font-size="9">Low pressure</text>
  <text x="360" y="96" text-anchor="middle" fill="#2040a0" font-size="9">~15 mmHg</text>
  <!-- Arrows: filtration (out) at arterial end -->
  <line x1="100" y1="135" x2="100" y2="165" stroke="#2a9040" stroke-width="2" marker-end="url(#arr-down)"/>
  <line x1="120" y1="135" x2="120" y2="165" stroke="#2a9040" stroke-width="2" marker-end="url(#arr-down)"/>
  <text x="110" y="180" text-anchor="middle" fill="#2a9040" font-size="9">Filtration</text>
  <text x="110" y="190" text-anchor="middle" fill="#2a9040" font-size="9">(fluid out)</text>
  <!-- Arrows: reabsorption (in) at venous end -->
  <line x1="320" y1="165" x2="320" y2="135" stroke="#c04020" stroke-width="2" marker-end="url(#arr-up)"/>
  <line x1="340" y1="165" x2="340" y2="135" stroke="#c04020" stroke-width="2" marker-end="url(#arr-up)"/>
  <text x="330" y="180" text-anchor="middle" fill="#c04020" font-size="9">Reabsorption</text>
  <text x="330" y="190" text-anchor="middle" fill="#c04020" font-size="9">(fluid in)</text>
  <!-- Tissue space -->
  <rect x="50" y="150" width="340" height="55" rx="6" fill="#e8f8e8" stroke="#5a9a6a" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="220" y="185" text-anchor="middle" fill="#2c5a3a" font-size="10">Tissue fluid (interstitial space)</text>
  <text x="220" y="198" text-anchor="middle" fill="#2c5a3a" font-size="9">Contains: water, glucose, O₂, amino acids, ions — NO plasma proteins, NO RBCs</text>
  <!-- Lymph arrow (10% not reabsorbed) -->
  <line x1="200" y1="200" x2="200" y2="215" stroke="#6a4090" stroke-width="1.5" marker-end="url(#arr-purple)"/>
  <text x="230" y="215" text-anchor="start" fill="#6a4090" font-size="9">→ 10% drains to lymphatic capillaries</text>
  <defs>
    <marker id="arr-down" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2a9040"/>
    </marker>
    <marker id="arr-up" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#c04020"/>
    </marker>
    <marker id="arr-purple" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#6a4090"/>
    </marker>
  </defs>
</svg>`,
      },
    },
    {
      id: 'callout-key-pressure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Two Opposing Pressures in Capillary Exchange',
        text: 'Hydrostatic pressure (blood pressure) — pushes fluid OUT of the capillary. Oncotic pressure (osmotic pressure from plasma proteins) — pulls fluid IN to the capillary. At arterial end: hydrostatic (35) > oncotic (25) → net outward → filtration. At venous end: hydrostatic (15) < oncotic (25) → net inward → reabsorption.',
      },
    },
    {
      id: 'h-lymphatic',
      type: 'heading',
      data: { text: 'The Lymphatic System', level: 2 },
    },
    {
      id: 'p-lymph',
      type: 'paragraph',
      data: {
        text: 'The ~10% of tissue fluid not reabsorbed by capillaries drains into blind-ended lymphatic capillaries that permeate the tissues. This fluid is then called lymph. Lymph is similar in composition to tissue fluid — low protein, no RBCs. The lymphatic capillaries join into larger lymphatic vessels, which eventually drain into the subclavian veins (returning lymph to the bloodstream). Lymph nodes along the lymphatic vessels contain immune cells and filter pathogens from the lymph.',
      },
    },
    {
      id: 'list-lymphatic-functions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Returns excess tissue fluid to the blood (prevents oedema — tissue swelling)',
          'Returns plasma proteins that have leaked out of capillaries back to the bloodstream',
          'Absorbs dietary fat (as chylomicrons) from the small intestine lacteals',
          'Immune surveillance — lymph nodes filter lymph and trigger immune responses',
        ],
      },
    },
    {
      id: 'callout-warning-oedema',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Oedema — When Tissue Fluid Accumulates',
        text: 'If lymphatic drainage is blocked (e.g. by parasites, surgery) or if capillary hydrostatic pressure rises (e.g. heart failure), or if plasma protein concentration falls (e.g. liver disease, malnutrition), tissue fluid accumulates → oedema (swelling). Oedema in the lungs (pulmonary oedema) is particularly dangerous as it impairs gas exchange.',
      },
    },
    {
      id: 'checklist-blood-tissue',
      type: 'checklist',
      data: {
        items: [
          { text: 'List the four main components of blood and the function of each', checked: false },
          { text: 'Explain why red blood cells are adapted for oxygen transport (biconcave, no nucleus, haemoglobin)', checked: false },
          { text: 'State the three ways CO₂ is transported in the blood', checked: false },
          { text: 'Describe how HCO₃⁻ ions are formed inside red blood cells (carbonic anhydrase pathway)', checked: false },
          { text: 'Explain the S-shaped oxygen dissociation curve in terms of cooperative binding', checked: false },
          { text: 'Describe the Bohr effect and explain why it is beneficial to respiring tissues', checked: false },
          { text: 'Explain why foetal haemoglobin has a curve shifted to the left of adult haemoglobin', checked: false },
          { text: 'Explain tissue fluid FORMATION: which pressure dominates at the arterial end and why?', checked: false },
          { text: 'Explain tissue fluid REABSORPTION: which pressure dominates at the venous end and why?', checked: false },
          { text: 'State what happens to the ~10% of tissue fluid that is not reabsorbed', checked: false },
        ],
      },
    },
    {
      id: 'summary-blood-tissue-fluid',
      type: 'summary',
      data: {
        text: 'Blood = plasma (55%) + RBCs (44%) + WBCs + platelets. Haemoglobin: 4 subunits + 4 haem groups, each binds one O₂ (4O₂ + Hb ⇌ HbO₂₄). Cooperative binding → S-shaped dissociation curve. CO₂ transported as: dissolved in plasma (small %), carbaminohaemoglobin, and mainly as HCO₃⁻ (formed via carbonic anhydrase in RBCs). Bohr effect: high CO₂ → H⁺ binds Hb → O₂ released → curve shifts right → more O₂ delivered to actively respiring tissues. Foetal Hb: higher O₂ affinity (curve left-shifted) → picks up O₂ from mother at placenta. Tissue fluid: forms at arterial end (hydrostatic > oncotic), reabsorbed at venous end (oncotic > hydrostatic), 10% → lymph → subclavian veins.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-haemo-structure', prompt: 'Describe the structure of haemoglobin. How many oxygen molecules can one haemoglobin molecule carry, and why?' },
      { id: 'cue-2', blockId: 'p-s-shape-explanation', prompt: 'Explain why the oxygen dissociation curve is S-shaped in terms of cooperative binding.' },
      { id: 'cue-3', blockId: 'p-bohr-effect', prompt: 'What is the Bohr effect? How does raised CO₂ cause haemoglobin to release more oxygen?' },
      { id: 'cue-4', blockId: 'p-foetal-haemo', prompt: 'Why does foetal haemoglobin have a higher affinity for oxygen than adult haemoglobin? Why is this important?' },
      { id: 'cue-5', blockId: 'p-tissue-fluid-formation', prompt: 'Explain why tissue fluid is formed at the arterial end of a capillary. Which two pressures are involved?' },
      { id: 'cue-6', blockId: 'p-hco3-formation', prompt: 'Describe the steps by which CO₂ from tissues is converted into hydrogen carbonate ions inside red blood cells.' },
    ],
    summaryText: 'Haemoglobin: 4 subunits, 4 haem-Fe²⁺, carries 4 O₂. S-shaped curve = cooperative binding. CO₂ transport: plasma (small), carbaminoHb, HCO₃⁻ (main — carbonic anhydrase in RBCs). Bohr effect: ↑CO₂ → ↑H⁺ → Hb releases O₂ → curve right-shifts. Foetal Hb: higher affinity → left-shift → picks up O₂ from mother. Tissue fluid: arterial end (hydrostatic > oncotic → out), venous end (oncotic > hydrostatic → in), 10% → lymph.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Cooperative oxygen binding in haemoglobin', detail: 'First oxygen binds slowly; subsequent binding accelerates due to conformational change in the protein. This cooperative (allosteric) binding produces the characteristic S-shaped (sigmoidal) dissociation curve, optimal for O₂ loading in lungs and unloading in tissues.', year: '1965', source: 'Perutz MF, J Mol Biol', tags: ['haemoglobin', 'oxygen', 'cooperative binding'] },
    { id: 'ev-2', title: 'Starling principle of microvascular fluid exchange', detail: 'Ernest Starling (1896) first described the balance between hydrostatic and osmotic (oncotic) pressures determining capillary fluid exchange. This principle is the foundation of understanding oedema formation and treatment.', year: '1896', source: 'Starling EH, J Physiol', tags: ['tissue fluid', 'capillaries'] },
  ],
};
