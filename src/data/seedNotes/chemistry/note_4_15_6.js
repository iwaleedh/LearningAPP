export const note_chemistry_4_15_6 = {
  blocks: [

    // ── Objective ────────────────────────────────────────────────────────────
    {
      id: 'obj-acyl-esters',
      type: 'objective',
      data: {
        text: 'Know the nomenclature, formulae, and reactions of acyl chlorides (4 key reactions) and esters (naming, drawing, hydrolysis, saponification, polyesters). IAL Unit 4, Topic 15d — Carboxylic Acid Derivatives.'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // PART 1 — ACYL CHLORIDES
    // ════════════════════════════════════════════════════════════════════════

    {
      id: 'h-acyl-chlorides',
      type: 'heading',
      data: { text: 'Part 1: Acyl Chlorides', level: 2 }
    },

    // ── Structure & Naming ──────────────────────────────────────────────────
    {
      id: 'h-acyl-structure',
      type: 'heading',
      data: { text: 'Structure, Naming & Formulae', level: 3 }
    },
    {
      id: 'list-acyl-structure',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Acyl chlorides are derivatives of carboxylic acids — the –OH of the carboxyl group is replaced by –Cl',
          'Functional group: –COCl (carbonyl C + Cl on same carbon)',
          'General formula: R–CO–Cl (also written RCOCl)',
          'Naming: use IUPAC prefix (meth–, eth–, prop–, but–) + –oyl chloride',
          '   → ethanoyl chloride (CH₃COCl), propanoyl chloride (CH₃CH₂COCl), butanoyl chloride (CH₃CH₂CH₂COCl)',
          'Despite having a C=O group, acyl chlorides are NOT classified as carbonyls (aldehydes/ketones)',
          '   → The Cl gives properties of BOTH carbonyls AND haloalkanes combined',
          '   → They behave differently from aldehydes/ketones in reactions'
        ]
      }
    },
    {
      id: 'table-acyl-names',
      type: 'comparisonTable',
      data: {
        headers: ['Name', 'Formula', 'Parent carboxylic acid'],
        rows: [
          ['Methanoyl chloride', 'HCOCl', 'Methanoic acid'],
          ['Ethanoyl chloride', 'CH₃COCl', 'Ethanoic acid'],
          ['Propanoyl chloride', 'CH₃CH₂COCl', 'Propanoic acid'],
          ['Butanoyl chloride', 'CH₃CH₂CH₂COCl', 'Butanoic acid']
        ],
        caption: 'Acyl chloride naming — same prefix as the parent acid, suffix changes to –oyl chloride. Must be able to draw displayed and skeletal formulae.'
      }
    },

    // ── Reactivity ──────────────────────────────────────────────────────────
    {
      id: 'h-acyl-reactivity',
      type: 'heading',
      data: { text: 'Why Acyl Chlorides Are Very Reactive', level: 3 }
    },
    {
      id: 'list-acyl-reactivity',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The carbonyl carbon (C=O) is bonded to BOTH oxygen AND chlorine — both are highly δ⁻',
          'This makes the carbon strongly δ⁺ (electron deficient)',
          'Any nucleophile with lone pairs (especially those containing O or N) readily attacks this carbon',
          'No catalyst or heat required — reactions are fast and often vigorous at room temperature',
          'Cl⁻ is an excellent leaving group (weak base, very stable) → easily displaced during reaction'
        ]
      }
    },
    {
      id: 'svg-acyl-structure',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" font-family="Arial,sans-serif" font-size="13">
  <text x="250" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Acyl Chloride — Electrophilic Carbon</text>

  <!-- R group -->
  <text x="44" y="108" font-size="15" fill="#374151">R</text>
  <line x1="58" y1="103" x2="86" y2="103" stroke="#374151" stroke-width="2"/>

  <!-- C atom -->
  <text x="88" y="108" font-size="15" fill="#374151">C</text>
  <text x="99" y="92" font-size="12" fill="#2563eb">δ+</text>

  <!-- C=O double bond -->
  <line x1="98" y1="96" x2="122" y2="76" stroke="#374151" stroke-width="2.5"/>
  <line x1="101" y1="100" x2="125" y2="80" stroke="#374151" stroke-width="2.5"/>
  <text x="126" y="74" font-size="15" fill="#dc2626">O</text>
  <text x="140" y="68" font-size="11" fill="#dc2626">δ−</text>

  <!-- C–Cl single bond -->
  <line x1="98" y1="108" x2="122" y2="128" stroke="#374151" stroke-width="2.5"/>
  <text x="126" y="136" font-size="15" fill="#7c3aed">Cl</text>
  <text x="140" y="150" font-size="11" fill="#7c3aed">δ−</text>

  <!-- Annotation arrow pointing to C -->
  <path d="M 230 103 Q 190 103 115 103" stroke="#0284c7" fill="none" stroke-width="1.8" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0284c7"/></marker></defs>
  <text x="234" y="90" font-size="12" fill="#0284c7">C is very δ+</text>
  <text x="234" y="106" font-size="12" fill="#0284c7">(attacked by</text>
  <text x="234" y="120" font-size="12" fill="#0284c7">nucleophiles)</text>

  <!-- Box: both O and Cl pull electrons from C -->
  <rect x="14" y="148" width="330" height="38" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="24" y="166" font-size="12" fill="#92400e">Both O and Cl are δ− → both pull electron density from C</text>
  <text x="24" y="182" font-size="12" fill="#92400e">→ C is more δ+ than in aldehydes/ketones → MORE reactive</text>
</svg>`,
        caption: 'Acyl chloride electrophilic carbon. Both O and Cl are electronegative, making the C so electron-deficient it is readily attacked by any nucleophile with a lone pair.'
      }
    },

    // ── Nucleophile Types ────────────────────────────────────────────────────
    {
      id: 'h-nucleophile-types',
      type: 'heading',
      data: { text: 'Types of Nucleophile That React With Acyl Chlorides', level: 3 }
    },
    {
      id: 'list-nucleophile-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'All nucleophiles that react with acyl chlorides have a lone pair on O or N, PLUS at least one H attached to that O or N:',
          '─── Oxygen-based nucleophiles:',
          '   • Water (H₂O) — lone pair on O, two H atoms',
          '   • Alcohols (R–OH) — lone pair on O, one H atom',
          '   Both behave almost identically — the lone pair on O attacks the δ+ C',
          '─── Nitrogen-based nucleophiles:',
          '   • Ammonia (NH₃) — lone pair on N, three H atoms',
          '   • Primary amines (R–NH₂) — lone pair on N, two H atoms',
          '   Both behave almost identically — the lone pair on N attacks the δ+ C',
          'KEY REQUIREMENT: the nucleophile must have at least one H on the attacking O or N atom',
          '   → This H is removed in the final step to form HCl (the elimination step)',
          '   → If no H on N (e.g. tertiary amines R₃N): reaction cannot be completed'
        ]
      }
    },
    {
      id: 'callout-addelim-naming',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Addition/Elimination — Why Two Names?',
        text: 'The reaction of an acyl chloride with a nucleophile can be called by three names:\n\n1. NUCLEOPHILIC SUBSTITUTION — the overall result: Cl is replaced by Nu\n2. ADDITION/ELIMINATION — the mechanism has two distinct stages:\n   • Addition stage: Nu adds on to the acyl chloride → tetrahedral intermediate forms (C=O breaks; O becomes O⁻)\n   • Elimination stage: the intermediate collapses → C=O reforms; Cl⁻ leaves; then Cl⁻ removes H from Nu → HCl is eliminated\n3. CONDENSATION REACTION — two molecules join to give a bigger product + a small molecule (HCl)\n\nAQA A-level calls these \"addition/elimination reactions\" and requires the full 3-step mechanism.\nEdexcel IAL does NOT require the mechanism — only equations and products are tested.'
      }
    },
    {
      id: 'svg-addelim-general',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 465" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <marker id="ah-ae" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#ef4444"/>
    </marker>
    <marker id="sa-ae" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="#374151"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="325" y="20" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Addition/Elimination Mechanism — Acyl Chlorides (General, 3 Steps)</text>

  <!-- ── STEP 1: Addition ── -->
  <rect x="8" y="30" width="634" height="120" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="20" y="50" font-weight="bold" font-size="13" fill="#1e40af">Step 1 — Addition  (Nu attacks C; tetrahedral intermediate forms)</text>
  <text x="20" y="63" font-size="11" fill="#6b7280">Lone pair on Nu → attacks δ+ C of C=O · C=O π-electrons pushed onto O · O becomes O⁻ · Nu becomes Nu⁺</text>
  <!-- Reactants box -->
  <rect x="18" y="72" width="190" height="64" rx="6" fill="white" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="113" y="95" text-anchor="middle" font-size="13" fill="#374151">R–C(=O)–Cl</text>
  <text x="113" y="111" text-anchor="middle" font-size="11" fill="#2563eb">C is strongly δ+</text>
  <text x="113" y="128" text-anchor="middle" font-size="13" fill="#374151">+  :Nu–H</text>
  <!-- Curly arrow: Nu attacks C -->
  <path d="M 172 126 Q 222 90 232 90" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-ae)"/>
  <text x="237" y="104" font-size="21" text-anchor="middle" fill="#374151">→</text>
  <!-- Intermediate box -->
  <rect x="258" y="72" width="216" height="64" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="366" y="92" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">Tetrahedral Intermediate</text>
  <text x="366" y="111" text-anchor="middle" font-size="13" fill="#374151">R–C(O⁻)(Cl)(Nu⁺H)</text>
  <text x="366" y="128" text-anchor="middle" font-size="11" fill="#6b7280">O is −ve  ·  Nu is +ve</text>

  <!-- ── STEP 2: Elimination A ── -->
  <rect x="8" y="162" width="634" height="120" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="20" y="182" font-weight="bold" font-size="13" fill="#15803d">Step 2 — Elimination A  (C=O reforms; Cl⁻ leaves)</text>
  <text x="20" y="195" font-size="11" fill="#6b7280">O⁻ lone pair reforms C=O double bond · C–Cl electrons pushed entirely onto Cl → Cl⁻ departs as an ion</text>
  <!-- Intermediate box -->
  <rect x="18" y="204" width="200" height="64" rx="6" fill="white" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="118" y="226" text-anchor="middle" font-size="12" fill="#374151">R–C(O⁻)(Cl)(Nu⁺H)</text>
  <text x="118" y="244" text-anchor="middle" font-size="11" fill="#15803d">O⁻ lone pair → reforms C=O</text>
  <text x="118" y="261" text-anchor="middle" font-size="11" fill="#6b7280">(tetrahedral → planar)</text>
  <text x="253" y="237" font-size="21" text-anchor="middle" fill="#374151">→</text>
  <!-- After step 2 box -->
  <rect x="270" y="204" width="232" height="64" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="386" y="224" text-anchor="middle" font-weight="bold" font-size="12" fill="#15803d">After Step 2</text>
  <text x="386" y="244" text-anchor="middle" font-size="13" fill="#374151">R–C(=O)–Nu⁺H  +  Cl⁻</text>
  <text x="386" y="261" text-anchor="middle" font-size="11" fill="#6b7280">Nu still +ve (H not yet removed)</text>

  <!-- ── STEP 3: Elimination B ── -->
  <rect x="8" y="294" width="634" height="120" rx="8" fill="#fff7ed" stroke="#d97706" stroke-width="1.5"/>
  <text x="20" y="314" font-weight="bold" font-size="13" fill="#b45309">Step 3 — Elimination B  (Cl⁻ removes H⁺ from Nu; HCl forms)</text>
  <text x="20" y="327" font-size="11" fill="#6b7280">Cl⁻ uses lone pair to remove H⁺ from Nu⁺H → HCl produced · positive charge on Nu cancelled</text>
  <!-- Before deprotonation box -->
  <rect x="18" y="336" width="216" height="64" rx="6" fill="white" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="126" y="358" text-anchor="middle" font-size="12" fill="#374151">R–C(=O)–Nu⁺H  +  Cl⁻</text>
  <text x="126" y="376" text-anchor="middle" font-size="11" fill="#b45309">Cl⁻ removes H⁺ from Nu⁺H</text>
  <text x="126" y="393" text-anchor="middle" font-size="11" fill="#6b7280">(lone pair on Cl attacks H)</text>
  <!-- Curly arrow: Cl⁻ → H -->
  <path d="M 180 354 Q 210 338 222 338" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-ae)"/>
  <text x="266" y="368" font-size="21" text-anchor="middle" fill="#374151">→</text>
  <!-- Final products box -->
  <rect x="286" y="336" width="210" height="64" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="391" y="358" text-anchor="middle" font-weight="bold" font-size="13" fill="#b45309">Final Products</text>
  <text x="391" y="378" text-anchor="middle" font-size="13" fill="#374151">R–CO–Nu  +  HCl↑</text>
  <text x="391" y="393" text-anchor="middle" font-size="11" fill="#6b7280">Nu replaces Cl · HCl always formed</text>

  <!-- Summary strip -->
  <rect x="8" y="424" width="634" height="34" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="325" y="439" text-anchor="middle" font-size="12" fill="#374151" font-weight="bold">Overall: R–COCl  +  Nu–H  →  R–CO–Nu  +  HCl</text>
  <text x="325" y="454" text-anchor="middle" font-size="11" fill="#6b7280">Nu = H₂O → RCOOH  ·  ROH → ester  ·  NH₃ → amide  ·  R′NH₂ → N-substituted amide</text>
</svg>`,
        caption: 'General addition/elimination mechanism for acyl chlorides — 3 steps. Step 1 (Addition): Nu lone pair attacks δ+ C → tetrahedral intermediate (O⁻, Cl, Nu⁺H all on C). Step 2 (Elimination A): O⁻ reforms C=O → Cl⁻ leaves. Step 3 (Elimination B): Cl⁻ removes H⁺ from Nu⁺ → HCl is released, neutral product forms. HCl is ALWAYS a co-product. AQA requires this mechanism; Edexcel IAL does not.'
      }
    },

    // ── Four Key Reactions ──────────────────────────────────────────────────
    {
      id: 'h-acyl-reactions',
      type: 'heading',
      data: { text: 'Four Key Reactions of Acyl Chlorides', level: 3 }
    },
    {
      id: 'callout-four-key',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'IAL Exam — What You Need to Know',
        text: 'For all four reactions: know the reagent, the product(s), and HCl is ALWAYS produced as a co-product.\n\nMechanisms are NOT required. No special conditions needed (all at room temperature).'
      }
    },

    // Reaction 1: Water
    {
      id: 'h-acyl-water',
      type: 'heading',
      data: { text: 'Reaction 1 — With Water (Hydrolysis)', level: 3 }
    },
    {
      id: 'list-acyl-water',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: cold water (H₂O)',
          'Reaction: vigorous, exothermic — happens immediately on contact',
          'Products: carboxylic acid (R–COOH) + hydrogen chloride gas (HCl↑)',
          'Observation: misty white fumes of HCl → confirms HCl is produced',
          'The –OH from water replaces the –Cl of the acyl chloride',
          'General pattern: RCOCl loses Cl, gains OH → becomes RCOOH'
        ]
      }
    },
    {
      id: 'eq-acyl-water',
      type: 'equation',
      data: {
        html: 'CH₃COCl + H₂O → CH₃COOH + HCl↑',
        caption: 'Ethanoyl chloride + water → ethanoic acid + HCl (misty fumes). Reaction is vigorous (violent in some cases).'
      }
    },
    {
      id: 'svg-acyl-water-mechanism',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 480" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <marker id="ah-aw" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#ef4444"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="325" y="18" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Mechanism: CH₃COCl + H₂O  (3-Step Addition/Elimination)</text>

  <!-- ── STEP 1: Addition ── -->
  <rect x="8" y="26" width="634" height="122" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="20" y="44" font-weight="bold" font-size="13" fill="#1e40af">Step 1 — Addition  (H₂O attacks δ+ C → tetrahedral intermediate)</text>

  <!-- Ethanoyl chloride label -->
  <text x="22" y="68" font-size="12" fill="#6b7280" text-anchor="start">ethanoyl chloride</text>
  <!-- CH₃–C(=O)–Cl drawn as text + bond paths -->
  <text x="30" y="93" font-size="15" fill="#374151" text-anchor="start">CH₃</text>
  <line x1="65" y1="88" x2="90" y2="88" stroke="#374151" stroke-width="2"/>
  <text x="92" y="93" font-size="15" fill="#374151" text-anchor="start">C</text>
  <text x="95" y="78" font-size="11" fill="#2563eb" text-anchor="start">δ+</text>
  <!-- C=O double bond (diagonal up) -->
  <line x1="102" y1="84" x2="118" y2="67" stroke="#374151" stroke-width="2"/>
  <line x1="105" y1="87" x2="121" y2="70" stroke="#374151" stroke-width="2"/>
  <text x="122" y="66" font-size="15" fill="#374151" text-anchor="start">O</text>
  <!-- C–Cl bond (diagonal down) -->
  <line x1="102" y1="92" x2="118" y2="109" stroke="#374151" stroke-width="2"/>
  <text x="120" y="116" font-size="15" fill="#7c3aed" text-anchor="start">Cl</text>

  <!-- + -->
  <text x="152" y="93" font-size="18" fill="#374151" text-anchor="middle">+</text>

  <!-- H₂O with lone pair dots -->
  <text x="172" y="68" font-size="12" fill="#6b7280" text-anchor="start">nucleophile (H₂O)</text>
  <text x="165" y="93" font-size="15" fill="#374151" text-anchor="start">H₂O</text>
  <!-- lone pair dots on O -->
  <circle cx="170" cy="73" r="1.8" fill="#374151"/>
  <circle cx="178" cy="73" r="1.8" fill="#374151"/>

  <!-- Curly arrow: lone pair on O attacks C -->
  <path d="M 173 78 Q 120 60 105 82" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-aw)"/>

  <!-- Arrow → -->
  <text x="232" y="93" font-size="20" text-anchor="middle" fill="#374151">→</text>

  <!-- Tetrahedral intermediate -->
  <text x="255" y="55" font-size="12" fill="#6b7280" text-anchor="start">tetrahedral intermediate</text>
  <rect x="250" y="62" width="220" height="70" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="360" y="84" text-anchor="middle" font-size="14" fill="#374151">CH₃</text>
  <text x="360" y="102" text-anchor="middle" font-size="13" fill="#374151">  |</text>
  <text x="360" y="118" text-anchor="middle" font-size="14" fill="#374151">C(O⁻)(Cl)(OH₂⁺)</text>
  <text x="360" y="129" text-anchor="middle" font-size="11" fill="#1d4ed8">C now tetrahedral  ·  O is −ve  ·  H₂O becomes +ve</text>

  <!-- Exam note -->
  <text x="488" y="80" font-size="11" fill="#6b7280" text-anchor="start">* Only one lone pair</text>
  <text x="488" y="94" font-size="11" fill="#6b7280" text-anchor="start">of H₂O shown</text>
  <text x="488" y="108" font-size="11" fill="#6b7280" text-anchor="start">(exam convention)</text>

  <!-- ── STEP 2: C=O reforms, Cl⁻ leaves ── -->
  <rect x="8" y="158" width="634" height="122" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="20" y="176" font-weight="bold" font-size="13" fill="#15803d">Step 2 — Elimination A  (C=O reforms; Cl⁻ leaves)</text>
  <text x="20" y="190" font-size="11" fill="#6b7280">O⁻ lone pair pushes back to reform C=O  ·  C–Cl bond electrons shift entirely onto Cl → Cl⁻ departs</text>

  <rect x="18" y="198" width="205" height="68" rx="6" fill="white" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="120" y="220" text-anchor="middle" font-size="13" fill="#374151">CH₃–C(O⁻)(Cl)(OH₂⁺)</text>
  <text x="120" y="238" text-anchor="middle" font-size="11" fill="#15803d">O⁻ lone pair → C=O reforms</text>
  <text x="120" y="255" text-anchor="middle" font-size="11" fill="#7c3aed">C–Cl electrons → Cl⁻ leaves</text>

  <text x="258" y="234" font-size="20" text-anchor="middle" fill="#374151">→</text>

  <rect x="275" y="198" width="240" height="68" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="395" y="220" text-anchor="middle" font-weight="bold" font-size="12" fill="#15803d">After Step 2</text>
  <text x="395" y="240" text-anchor="middle" font-size="14" fill="#374151">CH₃–C(=O)–OH₂⁺  +  Cl⁻</text>
  <text x="395" y="258" text-anchor="middle" font-size="11" fill="#6b7280">H₂O still attached  ·  carries + charge</text>

  <!-- ── STEP 3: Cl⁻ removes H⁺ → HCl ── -->
  <rect x="8" y="290" width="634" height="130" rx="8" fill="#fff7ed" stroke="#d97706" stroke-width="1.5"/>
  <text x="20" y="308" font-weight="bold" font-size="13" fill="#b45309">Step 3 — Elimination B  (Cl⁻ removes H⁺ → HCl; ethanoic acid forms)</text>
  <text x="20" y="322" font-size="11" fill="#6b7280">Cl⁻ lone pair attacks H on the +ve OH₂  ·  H–O bond pair stays on O  ·  HCl leaves  ·  positive charge cancelled</text>

  <rect x="18" y="330" width="218" height="68" rx="6" fill="white" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="127" y="352" text-anchor="middle" font-size="13" fill="#374151">CH₃–C(=O)–OH₂⁺  +  Cl⁻</text>
  <!-- curly arrow: Cl⁻ → H on OH₂⁺ -->
  <path d="M 212 370 Q 230 348 222 348" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-aw)"/>
  <text x="127" y="370" text-anchor="middle" font-size="11" fill="#b45309">Cl⁻ removes H⁺ from OH₂⁺</text>
  <text x="127" y="394" text-anchor="middle" font-size="11" fill="#6b7280">(lone pair on Cl attacks H)</text>

  <text x="272" y="366" font-size="20" text-anchor="middle" fill="#374151">→</text>

  <rect x="288" y="330" width="222" height="68" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="399" y="352" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309">Products</text>
  <text x="399" y="372" text-anchor="middle" font-size="14" fill="#374151">CH₃COOH  +  HCl↑</text>
  <text x="399" y="390" text-anchor="middle" font-size="11" fill="#6b7280">ethanoic acid  +  HCl (misty fumes)</text>

  <!-- Summary strip -->
  <rect x="8" y="430" width="634" height="42" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="325" y="446" text-anchor="middle" font-size="12" fill="#374151" font-weight="bold">CH₃COCl + H₂O  →  CH₃COOH + HCl↑</text>
  <text x="325" y="463" text-anchor="middle" font-size="11" fill="#6b7280">Reaction is vigorous and exothermic  ·  HCl gives misty white fumes  ·  same 3-step pattern for all acyl chloride + nucleophile reactions</text>
</svg>`,
        caption: 'Addition/elimination mechanism for ethanoyl chloride + water. Step 1: H₂O lone pair attacks δ+ C → tetrahedral intermediate (O⁻ on carbonyl O; OH₂⁺ on attacking O). Step 2: O⁻ reforms C=O; Cl⁻ is expelled. Step 3: Cl⁻ removes H⁺ from OH₂⁺ → HCl; ethanoic acid + HCl are the products. Exam note: only one of the two lone pairs on O in H₂O is drawn (convention to avoid clutter).'
      }
    },
    {
      id: 'callout-water-mech-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Technique — Drawing the Water Mechanism',
        text: 'Show ONLY ONE lone pair on the oxygen of H₂O (the one attacking C). The other lone pair is real but drawing both clutters the diagram — examiners do not penalise omitting the second lone pair.\n\nCheckpoint: in the tetrahedral intermediate:\n• The original carbonyl O becomes O⁻ (negative)\n• The O from H₂O becomes OH₂⁺ (positive — it donated its lone pair so has a positive formal charge)\n• There is still a C–Cl bond at this stage (Cl has NOT left yet)\n\nStep order matters: Cl⁻ doesn\'t leave in Step 1 — it leaves in Step 2 when C=O reforms.'
      }
    },

    // Reaction 2: Alcohol
    {
      id: 'h-acyl-alcohol',
      type: 'heading',
      data: { text: 'Reaction 2 — With Alcohol (Esterification)', level: 3 }
    },
    {
      id: 'list-acyl-alcohol',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: alcohol (R′–OH)',
          'Products: ester (R–COO–R′) + HCl↑ (misty fumes)',
          'Reaction is COMPLETE (goes to completion) — NOT reversible → better yield than Fischer esterification',
          'No heat or catalyst required (unlike Fischer esterification with conc. H₂SO₄)',
          'Main DISADVANTAGE: HCl gas is produced → toxic/corrosive → not ideal for large-scale synthesis',
          'In contrast, Fischer esterification produces water (non-toxic) but is reversible (lower yield)',
          'Trade-off: acyl chloride = complete reaction but toxic HCl; carboxylic acid = equilibrium but safer'
        ]
      }
    },
    {
      id: 'eq-acyl-alcohol',
      type: 'equation',
      data: {
        html: 'CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl↑',
        caption: 'Ethanoyl chloride + ethanol → ethyl ethanoate + HCl. Complete reaction (no equilibrium). Compare: Fischer esterification gives the same ester but is reversible and produces water instead of HCl.'
      }
    },
    {
      id: 'svg-acyl-alcohol-mechanism',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 480" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <marker id="ah-alc" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#ef4444"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="325" y="18" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Mechanism: CH₃COCl + CH₃CH₂OH  (3-Step Addition/Elimination)</text>

  <!-- ── STEP 1: Addition ── -->
  <rect x="8" y="26" width="634" height="122" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="20" y="44" font-weight="bold" font-size="13" fill="#1e40af" text-anchor="start">Step 1 — Addition  (ethanol O attacks δ+ C → tetrahedral intermediate)</text>

  <!-- ethanoyl chloride -->
  <text x="22" y="64" font-size="12" fill="#6b7280" text-anchor="start">ethanoyl chloride</text>
  <text x="30" y="90" font-size="15" fill="#374151" text-anchor="start">CH₃</text>
  <line x1="65" y1="85" x2="90" y2="85" stroke="#374151" stroke-width="2"/>
  <text x="92" y="90" font-size="15" fill="#374151" text-anchor="start">C</text>
  <text x="95" y="76" font-size="11" fill="#2563eb" text-anchor="start">δ+</text>
  <!-- C=O -->
  <line x1="102" y1="81" x2="118" y2="64" stroke="#374151" stroke-width="2"/>
  <line x1="105" y1="84" x2="121" y2="67" stroke="#374151" stroke-width="2"/>
  <text x="122" y="63" font-size="15" fill="#374151" text-anchor="start">O</text>
  <!-- C-Cl -->
  <line x1="102" y1="89" x2="118" y2="106" stroke="#374151" stroke-width="2"/>
  <text x="120" y="113" font-size="15" fill="#7c3aed" text-anchor="start">Cl</text>

  <!-- + -->
  <text x="152" y="90" font-size="18" fill="#374151" text-anchor="middle">+</text>

  <!-- ethanol with lone pair -->
  <text x="165" y="64" font-size="12" fill="#6b7280" text-anchor="start">nucleophile (ethanol)</text>
  <text x="165" y="90" font-size="15" fill="#374151" text-anchor="start">CH₃CH₂</text>
  <text x="212" y="90" font-size="15" fill="#374151" text-anchor="start">O</text>
  <text x="224" y="90" font-size="15" fill="#374151" text-anchor="start">–H</text>
  <!-- lone pair dots on O of ethanol -->
  <circle cx="215" cy="72" r="1.8" fill="#374151"/>
  <circle cx="223" cy="72" r="1.8" fill="#374151"/>

  <!-- Curly arrow: lone pair on O attacks C -->
  <path d="M 218 78 Q 160 60 105 80" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-alc)"/>

  <!-- Arrow → -->
  <text x="256" y="90" font-size="20" text-anchor="middle" fill="#374151">→</text>

  <!-- Tetrahedral intermediate -->
  <text x="270" y="52" font-size="12" fill="#6b7280" text-anchor="start">tetrahedral intermediate</text>
  <rect x="268" y="60" width="242" height="72" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="389" y="82" text-anchor="middle" font-size="14" fill="#374151">CH₃</text>
  <text x="389" y="100" text-anchor="middle" font-size="13" fill="#374151">  |</text>
  <text x="389" y="116" text-anchor="middle" font-size="13" fill="#374151">C(O⁻)(Cl)(OCH₂CH₃·H⁺)</text>
  <text x="389" y="128" text-anchor="middle" font-size="11" fill="#1d4ed8">carbonyl O = O⁻  ·  ethanol O = +ve  ·  Cl still bonded</text>

  <!-- exam note -->
  <text x="522" y="76" font-size="11" fill="#6b7280" text-anchor="start">* Only one lone pair</text>
  <text x="522" y="90" font-size="11" fill="#6b7280" text-anchor="start">of ethanol O shown</text>
  <text x="522" y="104" font-size="11" fill="#6b7280" text-anchor="start">(exam convention)</text>

  <!-- ── STEP 2: C=O reforms, Cl⁻ leaves ── -->
  <rect x="8" y="158" width="634" height="122" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="20" y="176" font-weight="bold" font-size="13" fill="#15803d" text-anchor="start">Step 2 — Elimination A  (C=O reforms; Cl⁻ leaves)</text>
  <text x="20" y="190" font-size="11" fill="#6b7280" text-anchor="start">O⁻ lone pair reforms C=O  ·  C–Cl electrons shift entirely onto Cl → Cl⁻ departs</text>

  <rect x="18" y="198" width="214" height="68" rx="6" fill="white" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="125" y="220" text-anchor="middle" font-size="12" fill="#374151">CH₃–C(O⁻)(Cl)(OCH₂CH₃·H⁺)</text>
  <text x="125" y="238" text-anchor="middle" font-size="11" fill="#15803d">O⁻ lone pair → reforms C=O</text>
  <text x="125" y="255" text-anchor="middle" font-size="11" fill="#7c3aed">C–Cl electrons → Cl⁻ leaves</text>

  <text x="264" y="234" font-size="20" text-anchor="middle" fill="#374151">→</text>

  <rect x="280" y="198" width="242" height="68" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="401" y="220" text-anchor="middle" font-weight="bold" font-size="12" fill="#15803d">After Step 2</text>
  <text x="401" y="240" text-anchor="middle" font-size="13" fill="#374151">CH₃–C(=O)–OCH₂CH₃·H⁺  +  Cl⁻</text>
  <text x="401" y="258" text-anchor="middle" font-size="11" fill="#6b7280">ethanol O still +ve  ·  H not yet removed</text>

  <!-- ── STEP 3: Cl⁻ removes H⁺ ── -->
  <rect x="8" y="290" width="634" height="130" rx="8" fill="#fff7ed" stroke="#d97706" stroke-width="1.5"/>
  <text x="20" y="308" font-weight="bold" font-size="13" fill="#b45309" text-anchor="start">Step 3 — Elimination B  (Cl⁻ removes H⁺ from O⁺; HCl forms; ester product)</text>
  <text x="20" y="322" font-size="11" fill="#6b7280" text-anchor="start">Cl⁻ lone pair attacks H on ethanol O⁺  ·  H–O bond pair stays on O  ·  HCl leaves  ·  +ve charge cancelled</text>

  <rect x="18" y="330" width="228" height="68" rx="6" fill="white" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="132" y="352" text-anchor="middle" font-size="12" fill="#374151">CH₃–C(=O)–OCH₂CH₃·H⁺  +  Cl⁻</text>
  <path d="M 220 348 Q 240 330 232 330" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-alc)"/>
  <text x="132" y="370" text-anchor="middle" font-size="11" fill="#b45309">Cl⁻ removes H⁺ from O⁺</text>
  <text x="132" y="387" text-anchor="middle" font-size="11" fill="#6b7280">(lone pair on Cl attacks H)</text>

  <text x="286" y="366" font-size="20" text-anchor="middle" fill="#374151">→</text>

  <rect x="300" y="330" width="230" height="68" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="415" y="352" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309">Products</text>
  <text x="415" y="372" text-anchor="middle" font-size="14" fill="#374151">CH₃COOCH₂CH₃  +  HCl↑</text>
  <text x="415" y="390" text-anchor="middle" font-size="11" fill="#6b7280">ethyl ethanoate  +  HCl (misty fumes)</text>

  <!-- Summary strip -->
  <rect x="8" y="430" width="634" height="42" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="325" y="446" text-anchor="middle" font-size="12" fill="#374151" font-weight="bold">CH₃COCl + CH₃CH₂OH  →  CH₃COOCH₂CH₃ + HCl↑</text>
  <text x="325" y="463" text-anchor="middle" font-size="11" fill="#6b7280">Identical 3-step pattern to water mechanism  ·  only the alkyl group on O changes  ·  product is an ester not a carboxylic acid</text>
</svg>`,
        caption: 'Addition/elimination mechanism for ethanoyl chloride + ethanol. Step 1: ethanol O lone pair attacks δ+ C → tetrahedral intermediate (carbonyl O becomes O⁻; ethanol O becomes OCH₂CH₃·H⁺ — positive charge). Step 2: O⁻ reforms C=O; Cl⁻ is expelled. Step 3: Cl⁻ removes H⁺ from the +ve ethanol O → HCl; ethyl ethanoate forms. Only one lone pair on the ethanol O is shown (exam convention). Pattern is IDENTICAL to water mechanism — only the alkyl group differs.'
      }
    },
    {
      id: 'callout-alcohol-parallel',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Parallel With Water Mechanism — The Key Insight',
        text: 'Water (H₂O) and ethanol (CH₃CH₂OH) are structurally very similar around the oxygen atom — both have:\n• A lone pair on O (used to attack δ+ C in Step 1)\n• A H atom attached to O (removed by Cl⁻ in Step 3)\n\nThis is why the mechanisms are IDENTICAL in pattern. The only difference:\n→ Water: attacking O is OH₂ → becomes OH₂⁺ in Step 1 → gives –OH after Step 3 → product is RCOOH (carboxylic acid)\n→ Ethanol: attacking O is OCH₂CH₃ → becomes OCH₂CH₃·H⁺ in Step 1 → gives –OCH₂CH₃ after Step 3 → product is RCOOC₂H₅ (ester)\n\nExam shortcut: once you know the water mechanism, simply swap –OH₂⁺ for –OCH₂CH₃·H⁺ throughout.'
      }
    },
    {
      id: 'table-ester-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Acyl chloride + alcohol', 'Carboxylic acid + alcohol (Fischer)'],
        rows: [
          ['Completeness', 'Complete reaction (→)', 'Reversible equilibrium (⇌)'],
          ['Yield', 'Higher', 'Lower (limited by equilibrium)'],
          ['Catalyst', 'None needed', 'Conc. H₂SO₄ required'],
          ['Co-product', 'HCl (toxic, corrosive gas)', 'H₂O (harmless)'],
          ['Industrial use', 'Lab / specialised synthesis', 'Preferred for large-scale (safer)'],
          ['Conditions', 'Room temperature', 'Heat required']
        ],
        caption: 'Comparison of two methods for making esters. Acyl chloride gives higher yield but HCl is a hazard. Fischer esterification is safer but equilibrium-limited.'
      }
    },

    // Reaction 3: Ammonia
    {
      id: 'h-acyl-ammonia',
      type: 'heading',
      data: { text: 'Reaction 3 — With Concentrated Ammonia', level: 3 }
    },
    {
      id: 'list-acyl-ammonia',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: concentrated ammonia solution (NH₃)',
          'Products: primary amide (R–CO–NH₂) + hydrogen chloride (HCl)',
          'Functional group of amide: –CONH₂ (carbonyl + NH₂ on same carbon)',
          'IMPORTANT side reaction: HCl produced then reacts further with excess NH₃:',
          '   NH₃ + HCl → NH₄Cl (ammonium chloride salt)',
          '   So two products form overall: the amide AND ammonium chloride',
          'The amide nitrogen has TWO hydrogens (–NH₂) — see N-substituted amides below for comparison',
          'Amides will be studied further in Topic 19 (Unit 5)'
        ]
      }
    },
    {
      id: 'eq-acyl-ammonia',
      type: 'equation',
      data: {
        html: 'CH₃COCl + NH₃ → CH₃CONH₂ + HCl<br/>Then: HCl + NH₃ → NH₄Cl<br/>Overall: CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl',
        caption: 'Ethanoyl chloride + ammonia → ethanamide. The HCl produced immediately reacts with excess NH₃ to form ammonium chloride (NH₄Cl) as a salt by-product.'
      }
    },
    {
      id: 'svg-acyl-ammonia-mechanism',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 510" style="font-family:Arial,sans-serif;font-size:12px;">
  <defs>
    <marker id="ah-amm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#374151"/></marker>
  </defs>

  <!-- Step 1: Addition -->
  <rect x="10" y="10" width="630" height="120" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
  <text x="20" y="32" font-size="12" font-weight="bold" fill="#1D4ED8">Step 1 — Addition (nucleophilic attack)</text>
  <text x="25" y="56" font-size="12" fill="#111827">CH₃COCl  +  :NH₃</text>
  <path d="M120 51 Q145 36 165 51" stroke="#374151" stroke-width="1.5" fill="none" marker-end="url(#ah-amm)"/>
  <text x="174" y="56" font-size="12" fill="#374151">→</text>
  <text x="192" y="56" font-size="12" fill="#111827">CH₃–C(O⁻)(Cl)(N⁺H₃)  [tetrahedral intermediate]</text>
  <text x="25" y="76" font-size="10.5" fill="#2563EB">N lone pair of NH₃ attacks δ+ carbon of C=O; π-electrons of C=O shift onto O → O⁻; N becomes N⁺H₃ (positive formal charge)</text>
  <text x="25" y="94" font-size="10.5" fill="#6B7280">Tetrahedral intermediate: CH₃–C(O⁻)(Cl)(N⁺H₃) — sp³ carbon, four groups bonded to central C</text>
  <text x="25" y="112" font-size="10" fill="#6B7280">[Identical pattern to H₂O/alcohol — but N donates the lone pair, not O; intermediate has N⁺H₃ not O⁺H₂]</text>

  <!-- Step 2: Elimination A -->
  <rect x="10" y="140" width="630" height="92" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.5"/>
  <text x="20" y="162" font-size="12" font-weight="bold" fill="#15803D">Step 2 — Elimination A (Cl⁻ leaves)</text>
  <text x="25" y="184" font-size="12" fill="#111827">CH₃–C(O⁻)(Cl)(N⁺H₃)</text>
  <path d="M148 180 Q165 166 182 180" stroke="#374151" stroke-width="1.5" fill="none" marker-end="url(#ah-amm)"/>
  <text x="190" y="184" font-size="12" fill="#374151">→</text>
  <text x="204" y="184" font-size="12" fill="#111827">CH₃–C(=O)–N⁺H₃  +  Cl⁻</text>
  <text x="25" y="204" font-size="10.5" fill="#15803D">O⁻ lone pair reforms C=O double bond; electrons in C–Cl bond pushed entirely onto Cl → Cl⁻ departs</text>
  <text x="25" y="222" font-size="10.5" fill="#DC2626">⚠ Cl does NOT leave in Step 1 — it leaves here in Step 2 (a common exam mistake!)</text>

  <!-- Step 3: Two Variants -->
  <rect x="10" y="242" width="630" height="200" rx="8" fill="#FFF7ED" stroke="#F97316" stroke-width="1.5"/>
  <text x="20" y="264" font-size="12" font-weight="bold" fill="#C2410C">Step 3 — Elimination B: two possible routes (unique to NH₃)</text>
  <line x1="330" y1="272" x2="330" y2="432" stroke="#F97316" stroke-width="1" stroke-dasharray="5,3"/>
  <!-- Route 3a -->
  <text x="25" y="286" font-size="11" font-weight="bold" fill="#92400E">Route 3a — Cl⁻ removes H⁺:</text>
  <text x="25" y="304" font-size="11" fill="#111827">Cl⁻  +  CH₃–C(=O)–N⁺H₃</text>
  <text x="25" y="322" font-size="11" fill="#374151">→  CH₃CONH₂  +  HCl</text>
  <text x="25" y="340" font-size="11" fill="#374151">then immediately:  HCl  +  NH₃  →  NH₄Cl</text>
  <text x="25" y="368" font-size="10" fill="#92400E">Cl⁻ uses lone pair to abstract H⁺ from N⁺H₃;</text>
  <text x="25" y="382" font-size="10" fill="#92400E">HCl escapes but instantly reacts with excess NH₃ in solution</text>
  <!-- Route 3b -->
  <text x="342" y="286" font-size="11" font-weight="bold" fill="#92400E">Route 3b — NH₃ removes H⁺:</text>
  <text x="342" y="304" font-size="11" fill="#111827">NH₃  +  CH₃–C(=O)–N⁺H₃  +  Cl⁻</text>
  <text x="342" y="322" font-size="11" fill="#374151">→  CH₃CONH₂  +  NH₄⁺  +  Cl⁻</text>
  <text x="342" y="340" font-size="11" fill="#374151">→  CH₃CONH₂  +  NH₄Cl</text>
  <text x="342" y="368" font-size="10" fill="#92400E">An NH₃ molecule directly removes H⁺ from N⁺H₃;</text>
  <text x="342" y="382" font-size="10" fill="#92400E">NH₄⁺ formed pairs with Cl⁻ already present → NH₄Cl</text>
  <!-- Note spanning both -->
  <text x="18" y="424" font-size="10" font-style="italic" fill="#C2410C">Both routes give identical products — in practice both occur simultaneously. Unlike water/alcohol reactions, NO free HCl gas is observed.</text>

  <!-- Summary -->
  <rect x="10" y="452" width="630" height="48" rx="8" fill="#F5F3FF" stroke="#7C3AED" stroke-width="1.5"/>
  <text x="20" y="471" font-size="12" font-weight="bold" fill="#5B21B6">Overall (2 mol NH₃ required):</text>
  <text x="25" y="490" font-size="13" fill="#111827">CH₃COCl  +  2NH₃  →  CH₃CONH₂  +  NH₄Cl</text>
</svg>`,
        caption: 'Full 3-step mechanism for ethanoyl chloride + ammonia. Step 3 has two possible routes — both give ethanamide and ammonium chloride. No free HCl is observed (unlike water/alcohol reactions), as all HCl is consumed by excess NH₃ → NH₄Cl.'
      }
    },
    {
      id: 'callout-ammonia-step3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why Two Step 3 Routes — and Why No Free HCl?',
        text: 'With water and alcohols, Step 3 produces HCl gas (visible as misty white fumes). With ammonia, any HCl formed immediately reacts with the excess NH₃ present:\n\nHCl + NH₃ → NH₄Cl\n\nThis means the overall reaction consumes TWO moles of NH₃ — one donates its lone pair to attack the carbonyl carbon, and one neutralises the HCl. Products are ethanamide (an amide) + ammonium chloride (a white solid salt).\n\nStep 3 has two mechanistically equivalent routes:\n• Route 3a — Cl⁻ removes H⁺ from N⁺H₃ → HCl → HCl + NH₃ → NH₄Cl\n• Route 3b — NH₃ directly removes H⁺ from N⁺H₃ → NH₄⁺ + Cl⁻ → NH₄Cl\n\nBoth routes reach the same products. The two-route treatment is unique to nitrogen nucleophiles (NH₃ and amines) — not needed for O-nucleophiles (water, alcohols).'
      }
    },

    // Reaction 4: Amines
    {
      id: 'h-acyl-amines',
      type: 'heading',
      data: { text: 'Reaction 4 — With Primary and Secondary Amines', level: 3 }
    },
    {
      id: 'list-acyl-amines',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Primary amine (R′–NH₂): reacts with acyl chloride → N-substituted amide (R–CO–NH–R′) + HCl',
          '   One H is removed from the –NH₂ group to form HCl; the remaining –NH–R′ bonds to the acyl part',
          'Secondary amine (R′₂NH): reacts with acyl chloride → N,N-disubstituted amide (R–CO–NR′₂) + HCl',
          '   One H is removed from –NHR′; the two R′ groups remain on nitrogen',
          'Tertiary amine (R′₃N): does NOT react — no H on nitrogen to be removed to form HCl',
          'General rule: must have at least ONE H on nitrogen for the reaction to occur'
        ]
      }
    },
    {
      id: 'callout-amide-naming',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Naming N-Substituted Amides',
        text: 'The "N" locant shows the alkyl group is on the NITROGEN atom (not on a carbon in the chain).\n\nExample 1 — primary amine:\nCH₃COCl + CH₃NH₂ → CH₃CONHCH₃  =  N-methylethanamide\n(ethanamide backbone + methyl on N)\n\nExample 2 — secondary amine:\nCH₃COCl + (CH₃)₂NH → CH₃CON(CH₃)₂  =  N,N-dimethylethanamide\n(ethanamide backbone + TWO methyls on N)\n\nAnalogy: just like numbering a carbon position (e.g. 2-methylpropane), the N tells you the substituent is on nitrogen rather than on a chain carbon.'
      }
    },
    {
      id: 'eq-acyl-primary-amine',
      type: 'equation',
      data: {
        html: 'CH₃COCl + CH₃NH₂ → CH₃CONHCH₃ + HCl↑<br/><span style="font-size:0.9em;color:#6b7280">Ethanoyl chloride + methylamine → N-methylethanamide + HCl</span>',
        caption: 'Acyl chloride + primary amine → N-substituted amide. One H is lost from –NH₂; the remaining N–H and the N–CH₃ are retained in the product.'
      }
    },
    {
      id: 'eq-acyl-secondary-amine',
      type: 'equation',
      data: {
        html: 'CH₃COCl + (CH₃)₂NH → CH₃CON(CH₃)₂ + HCl↑<br/><span style="font-size:0.9em;color:#6b7280">Ethanoyl chloride + dimethylamine → N,N-dimethylethanamide + HCl</span>',
        caption: 'Acyl chloride + secondary amine → N,N-disubstituted amide. The single N–H is lost; both CH₃ groups remain on nitrogen.'
      }
    },
    {
      id: 'svg-acyl-amine-mechanism',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 510" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <marker id="ah-am2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#374151"/></marker>
  </defs>

  <!-- Step 1: Addition -->
  <rect x="10" y="10" width="630" height="118" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
  <text x="20" y="32" font-size="12" font-weight="bold" fill="#1D4ED8" text-anchor="start">Step 1 — Addition (nucleophilic attack)</text>
  <text x="25" y="56" font-size="12" fill="#111827" text-anchor="start">CH₃COCl  +  :NH₂(CH₂CH₃)</text>
  <path d="M138 51 Q160 36 178 51" stroke="#374151" stroke-width="1.5" fill="none" marker-end="url(#ah-am2)"/>
  <text x="188" y="56" font-size="12" fill="#374151" text-anchor="start">→</text>
  <text x="202" y="56" font-size="12" fill="#111827" text-anchor="start">CH₃–C(O⁻)(Cl)(N⁺H·CH₂CH₃)  [tetrahedral intermediate]</text>
  <text x="25" y="76" font-size="10.5" fill="#2563EB" text-anchor="start">N lone pair of ethylamine attacks δ+ C of C=O; π-electrons of C=O shift onto O → O⁻; N becomes N⁺H (positive formal charge)</text>
  <text x="25" y="94" font-size="10.5" fill="#6B7280" text-anchor="start">Tetrahedral intermediate: sp³ central C bonded to O⁻, Cl, CH₃, and N⁺H(CH₂CH₃)</text>
  <text x="25" y="112" font-size="10" fill="#6B7280" text-anchor="start">[Identical to NH₃ pattern — R group on N makes no difference to the mechanism steps]</text>

  <!-- Step 2: Elimination A -->
  <rect x="10" y="138" width="630" height="90" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.5"/>
  <text x="20" y="160" font-size="12" font-weight="bold" fill="#15803D" text-anchor="start">Step 2 — Elimination A (Cl⁻ leaves)</text>
  <text x="25" y="182" font-size="12" fill="#111827" text-anchor="start">CH₃–C(O⁻)(Cl)(N⁺H·CH₂CH₃)</text>
  <path d="M168 178 Q185 164 200 178" stroke="#374151" stroke-width="1.5" fill="none" marker-end="url(#ah-am2)"/>
  <text x="210" y="182" font-size="12" fill="#374151" text-anchor="start">→</text>
  <text x="224" y="182" font-size="12" fill="#111827" text-anchor="start">CH₃–C(=O)–N⁺H(CH₂CH₃)  +  Cl⁻</text>
  <text x="25" y="202" font-size="10.5" fill="#15803D" text-anchor="start">O⁻ lone pair reforms C=O double bond; electrons in C–Cl bond pushed entirely onto Cl → Cl⁻ departs</text>
  <text x="25" y="220" font-size="10.5" fill="#DC2626" text-anchor="start">⚠ Cl does NOT leave in Step 1 — it leaves here in Step 2</text>

  <!-- Step 3: Two Variants -->
  <rect x="10" y="238" width="630" height="202" rx="8" fill="#FFF7ED" stroke="#F97316" stroke-width="1.5"/>
  <text x="20" y="260" font-size="12" font-weight="bold" fill="#C2410C" text-anchor="start">Step 3 — Elimination B: two possible routes (same as NH₃ pattern)</text>
  <line x1="330" y1="268" x2="330" y2="430" stroke="#F97316" stroke-width="1" stroke-dasharray="5,3"/>
  <!-- Route 3a -->
  <text x="25" y="282" font-size="11" font-weight="bold" fill="#92400E" text-anchor="start">Route 3a — Cl⁻ removes H⁺:</text>
  <text x="25" y="300" font-size="11" fill="#111827" text-anchor="start">Cl⁻  +  CH₃–C(=O)–N⁺H(CH₂CH₃)</text>
  <text x="25" y="318" font-size="11" fill="#374151" text-anchor="start">→  CH₃CONHCH₂CH₃  +  HCl</text>
  <text x="25" y="336" font-size="11" fill="#374151" text-anchor="start">then:  HCl  +  CH₃CH₂NH₂  →  [CH₃CH₂NH₃]⁺Cl⁻</text>
  <text x="25" y="362" font-size="10" fill="#92400E" text-anchor="start">Cl⁻ abstracts H⁺ from N⁺H; HCl immediately</text>
  <text x="25" y="376" font-size="10" fill="#92400E" text-anchor="start">neutralised by excess amine → alkylammonium chloride</text>
  <!-- Route 3b -->
  <text x="342" y="282" font-size="11" font-weight="bold" fill="#92400E" text-anchor="start">Route 3b — amine removes H⁺:</text>
  <text x="342" y="300" font-size="11" fill="#111827" text-anchor="start">CH₃CH₂NH₂  +  N⁺H(CH₂CH₃)–C(=O)CH₃  +  Cl⁻</text>
  <text x="342" y="318" font-size="11" fill="#374151" text-anchor="start">→  CH₃CONHCH₂CH₃  +  [CH₃CH₂NH₃]⁺  +  Cl⁻</text>
  <text x="342" y="336" font-size="11" fill="#374151" text-anchor="start">→  CH₃CONHCH₂CH₃  +  [CH₃CH₂NH₃]Cl</text>
  <text x="342" y="362" font-size="10" fill="#92400E" text-anchor="start">Amine molecule directly removes H⁺ from N⁺H;</text>
  <text x="342" y="376" font-size="10" fill="#92400E" text-anchor="start">[RNH₃]⁺ + Cl⁻ → alkylammonium chloride salt</text>
  <!-- Note spanning both -->
  <text x="18" y="428" font-size="10" font-style="italic" fill="#C2410C" text-anchor="start">Both routes identical in pattern to the NH₃ mechanism; R group on N has no effect on the mechanism steps.</text>

  <!-- Summary -->
  <rect x="10" y="450" width="630" height="50" rx="8" fill="#F5F3FF" stroke="#7C3AED" stroke-width="1.5"/>
  <text x="20" y="469" font-size="12" font-weight="bold" fill="#5B21B6" text-anchor="start">Overall (2 mol amine required):</text>
  <text x="25" y="489" font-size="13" fill="#111827" text-anchor="start">CH₃COCl  +  2CH₃CH₂NH₂  →  CH₃CONHCH₂CH₃  +  [CH₃CH₂NH₃]Cl</text>
</svg>`,
        caption: 'Full 3-step mechanism for ethanoyl chloride + ethylamine (primary amine). Pattern is identical to the NH₃ mechanism — the R group on nitrogen makes no difference to the steps. Two Step 3 routes; no free HCl observed; products are N-ethylethanamide + ethylammonium chloride.'
      }
    },
    {
      id: 'callout-amine-parallel',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Amine Mechanism = Ammonia Mechanism with R Group on N',
        text: 'The mechanism for acyl chloride + primary amine is IDENTICAL to the ammonia mechanism. The R group attached to nitrogen is completely irrelevant to the mechanism steps — it is just a spectator attached to N throughout.\n\nKey points (same as NH₃):\n• N lone pair attacks δ+ C (Step 1)\n• Cl⁻ leaves when O⁻ reforms C=O (Step 2)\n• Two possible Step 3 routes: Cl⁻ or amine removes H⁺ from N⁺H\n• Any HCl formed immediately neutralised by excess amine → alkylammonium chloride\n• NO free HCl gas observed (unlike water/alcohol reactions)\n• Overall equation needs 2 mol amine\n\nFor a secondary amine (R₂NH), the same 3 steps apply — but the tetrahedral intermediate has N⁺(R₂) with only ONE H available to be removed in Step 3 → N,N-disubstituted amide product.\n\nFor a tertiary amine (R₃N): NO H on N → reaction cannot proceed past Step 1 (no H to remove in Step 3).'
      }
    },

    // Summary table for 4 reactions
    {
      id: 'h-acyl-benzene',
      type: 'heading',
      data: { text: 'Reaction 5: Friedel-Crafts Acylation (Benzene)', level: 3 }
    },
    {
      id: 'list-acyl-benzene',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Acyl chlorides react with benzene to substitute an acyl group ($CH_3CO–$) onto the aromatic ring.',
          '**Conditions:** Heating to around 60°C under reflux.',
          '**Catalyst:** Aluminium chloride ($AlCl_3$).',
          '**Observation:** Misty fumes of $HCl$ gas are given off as the reaction proceeds.'
        ]
      }
    },
    {
      id: 'eq-acyl-benzene',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl → C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + HCl',
        caption: 'Benzene + Ethanoyl chloride → Phenylethanone + Hydrogen chloride.'
      }
    },
    // Summary table for 5 reactions
    {
      id: 'table-acyl-summary',
      type: 'comparisonTable',
      data: {
        headers: ['Reaction', 'Reagent', 'Main product', 'Co-product(s)'],
        rows: [
          ['① + Water', 'H₂O (cold)', 'Carboxylic acid (R–COOH)', 'HCl↑ (misty fumes)'],
          ['② + Alcohol', 'R′–OH', 'Ester (R–COO–R′)', 'HCl↑ (misty fumes)'],
          ['③ + Ammonia', 'conc. NH₃', 'Primary amide (R–CONH₂)', 'HCl → reacts with NH₃ → NH₄Cl'],
          ['④ + Primary amine', 'R′–NH₂', 'N-substituted amide (R–CO–NHR′)', 'HCl↑'],
          ['④ + Secondary amine', 'R′₂NH', 'N,N-disubstituted amide (R–CO–NR′₂)', 'HCl↑'],
          ['⑤ + Benzene ($C_6H_6$)', 'Heat (60°C), $AlCl_3$', 'Ketone (Acylation)', '$HCl$'],
          ['Tertiary amine R′₃N', '—', 'No reaction', '(no N–H to remove)']
        ],
        caption: 'All five acyl chloride reactions — HCl is ALWAYS produced. No mechanisms required for IAL exam. Learn reagent + product for each.'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // PART 1.5 — ACID ANHYDRIDES
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-acid-anhydrides',
      type: 'heading',
      data: { text: 'Acid Anhydrides', level: 2 }
    },
    {
      id: 'list-anhydride-physical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Structure:** Formed by dehydrating two carboxylic acid molecules. Functional group: –CO–O–CO–',
          '**Naming:** Name the parent acid, but replace "acid" with "anhydride" (e.g. ethanoic anhydride).',
          '**Appearance:** Colourless liquid smelling strongly of vinegar (due to reacting with water vapour in the air to produce ethanoic acid).',
          '**Boiling point:** Ethanoic anhydride boils at 140°C. It is polar but **cannot** form hydrogen bonds to itself. Therefore, its boiling point is lower than a similarly sized carboxylic acid.',
          '**Reactivity:** Think of them as modified acyl chlorides. The "–O–CO–CH₃" part behaves just like the "–Cl" leaving group. Instead of HCl, they eliminate **carboxylic acid** as a byproduct (e.g., ethanoic acid).'
        ]
      }
    },
    {
      id: 'h-anhydride-reactions',
      type: 'heading',
      data: { text: 'Reactions of Acid Anhydrides with –OH Compounds', level: 3 }
    },
    {
      id: 'p-anhydride-reactions-intro',
      type: 'paragraph',
      data: {
        text: 'The reactions of acid anhydrides with compounds containing an –OH group (water, alcohols, phenols) are very similar to those of acyl chlorides. However, the reactions are <strong>slower</strong>, less violently reactive, and produce <strong>ethanoic acid</strong> as the second product rather than toxic hydrogen chloride gas.'
      }
    },
    {
      id: 'list-anhydride-water',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Water:</strong> Happens slowly at room temperature (faster on gentle warming). Unlike the acyl chloride reaction, there is no dramatic fuming.',
          '<strong>Product:</strong> Two molecules of carboxylic acid.',
          '<strong>Example:</strong> Ethanoic anhydride + Water → Ethanoic acid<br/>$(CH_3CO)_2O + H_2O \\rightarrow 2CH_3COOH$'
        ]
      }
    },
    {
      id: 'list-anhydride-alcohols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Alcohols:</strong> Needs gentle heating for a reasonable rate.',
          '<strong>Product:</strong> An ester and ethanoic acid (as the byproduct). No catalyst is needed, unlike the reversible reaction between a normal acid and an alcohol.',
          '<strong>Example:</strong> Ethanoic anhydride + Ethanol → Ethyl ethanoate + Ethanoic acid<br/>$(CH_3CO)_2O + CH_3CH_2OH \\rightarrow CH_3COOCH_2CH_3 + CH_3COOH$'
        ]
      }
    },
    {
      id: 'list-anhydride-phenols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Phenols:</strong> Phenols ($C_6H_5OH$) also react to form esters, known as phenyl esters.',
          '<strong>Reaction type:</strong> Acylation (specifically, ethanoylation when ethanoic anhydride is used). The hydrogen of the phenol –OH group is replaced by an ethanoyl group ($CH_3CO–$).',
          '<strong>Example:</strong> Ethanoic anhydride + Phenol → Phenyl ethanoate + Ethanoic acid<br/>$(CH_3CO)_2O + C_6H_5OH \\rightarrow CH_3COOC_6H_5 + CH_3COOH$'
        ]
      }
    },
    {
      id: 'callout-aspirin',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Industrial Synthesis of Aspirin',
        text: 'Aspirin is manufactured by reacting <strong>2-hydroxybenzoic acid</strong> (salicylic acid) with <strong>ethanoic anhydride</strong> at 90°C.<br/><br/><strong>Why use ethanoic anhydride instead of ethanoyl chloride?</strong><br/>• <strong>Cheaper:</strong> Ethanoic anhydride costs less.<br/>• <strong>Safer:</strong> It is less corrosive and reacts slower with water.<br/>• <strong>No toxic fumes:</strong> It produces ethanoic acid rather than dangerous, corrosive hydrogen chloride fumes.'
      },
      terms: ['Aspirin']
    },
    {
      id: 'h-anhydride-nitrogen',
      type: 'heading',
      data: { text: 'Reactions of Acid Anhydrides with Nitrogen Compounds', level: 3 }
    },
    {
      id: 'p-anhydride-nitrogen-intro',
      type: 'paragraph',
      data: {
        text: 'Acid anhydrides react with ammonia and primary amines in a similar manner to acyl chlorides. The nitrogen lone pair acts as a nucleophile, resulting in an acylation reaction. The key difference is that <strong>ethanoic acid</strong> (which then forms an ethanoate salt) is produced instead of hydrogen chloride.'
      }
    },
    {
      id: 'list-anhydride-ammonia',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Ammonia:</strong> Produces a primary amide and an ammonium salt.',
          '<strong>Mechanism:</strong> Two stages. First, the anhydride reacts with ammonia to form the amide and a carboxylic acid. Then, the formed acid reacts with excess ammonia to form an ammonium salt.',
          '<strong>Example:</strong> Ethanoic anhydride + Ammonia &rarr; Ethanamide + Ammonium ethanoate<br/>$(CH_3CO)_2O + 2NH_3 \rightarrow CH_3CONH_2 + CH_3COO^–NH_4^+$'
        ]
      }
    },
    {
      id: 'list-anhydride-amines',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Primary Amines:</strong> Produces an N-substituted amide and an alkylammonium salt.',
          '<strong>Example:</strong> Ethanoic anhydride + Methylamine ($CH_3NH_2$) &rarr; N-methylethanamide + Methylammonium ethanoate<br/>$(CH_3CO)_2O + 2CH_3NH_2 \rightarrow CH_3CONHCH_3 + CH_3COO^–CH_3NH_3^+$',
          '<strong>Reaction with Phenylamine (Aniline):</strong> Produces N-phenylethanamide and phenylammonium ethanoate. This is highly useful in industry for acylation (ethanoylation) of aromatic amines without toxic HCl side-products.'
        ]
      }
    },
    // ════════════════════════════════════════════════════════════════════════
    // PART 2 — ESTERS
    // ════════════════════════════════════════════════════════════════════════

    {
      id: 'h-esters',
      type: 'heading',
      data: { text: 'Part 2: Esters', level: 2 }
    },

    // ── Structure, Naming, Drawing ──────────────────────────────────────────
    {
      id: 'h-ester-naming',
      type: 'heading',
      data: { text: 'Naming and Drawing Esters', level: 3 }
    },
    {
      id: 'list-ester-naming',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Made from a carboxylic acid + alcohol (with conc. H₂SO₄ catalyst and heat)',
          'Functional group: –COO– (carbonyl adjacent to single-bond oxygen)',
          'General formula: R–COO–R′',
          'Naming is TWO words: [alcohol-derived part] [acid-derived part]',
          '   Step 1: take the alcohol name, remove "–ol", add "–yl" → ethanol = ethyl–',
          '   Step 2: take the acid name, remove "–ic acid", add "–oate" → propanoic = –propanoate',
          '   → methanol + propanoic acid = methyl propanoate',
          'DRAWING ORDER is OPPOSITE to naming: draw the acid part FIRST, then the alcohol part',
          '   → Functional group appears as: (acid)–C(=O)–O–(alcohol)',
          '   Reason: the C=O is always drawn first (it comes from the acid) then the single-bond O',
          'Exam note: you will NOT lose marks if you draw alcohol part first, but acid first is good practice'
        ]
      }
    },
    {
      id: 'table-ester-names',
      type: 'comparisonTable',
      data: {
        headers: ['Ester name', 'From acid', 'From alcohol', 'Formula'],
        rows: [
          ['Methyl methanoate', 'Methanoic acid', 'Methanol', 'HCOOCH₃'],
          ['Methyl ethanoate', 'Ethanoic acid', 'Methanol', 'CH₃COOCH₃'],
          ['Ethyl methanoate', 'Methanoic acid', 'Ethanol', 'HCOOCH₂CH₃'],
          ['Ethyl ethanoate', 'Ethanoic acid', 'Ethanol', 'CH₃COOCH₂CH₃'],
          ['Methyl propanoate', 'Propanoic acid', 'Methanol', 'CH₃CH₂COOCH₃']
        ],
        caption: 'Ester naming examples. Name = [alcohol]-yl + [acid]-oate. Draw: acid part first, then –O–, then alcohol part.'
      }
    },

    // ── Physical Properties ──────────────────────────────────────────────────
    {
      id: 'h-ester-properties',
      type: 'heading',
      data: { text: 'Physical Properties of Esters', level: 3 }
    },
    {
      id: 'list-ester-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Colourless liquids with relatively low melting and boiling points',
          'Lower boiling points than equivalent carboxylic acids — esters CANNOT form hydrogen bonds with each other (no O–H group), so they only have dipole-dipole and London dispersion forces',
          'Short-chain esters (e.g., methyl ethanoate) ARE fairly soluble in water — the lone pairs on the ester oxygens can accept hydrogen bonds from water molecules',
          'Solubility rapidly decreases as the carbon chain lengthens — the large non-polar hydrocarbon parts force themselves between water molecules, breaking water-water H-bonds without replacing them',
          'Very pleasant, distinctive fruity smells — used in artificial flavourings and perfumes',
          'Pentyl methanoate smells of pears; methyl butanoate smells of apples (not required to memorise)',
          'Also used as solvents (e.g., ethyl ethanoate in nail polish remover) and plasticisers'
        ]
      }
    },
    {
      id: 'callout-fats-oils',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fats and Oils (Large Esters)',
        text: 'Animal and vegetable fats and oils are large, complex esters called triglycerides (triesters of glycerol / propane-1,2,3-triol).\n\n• **Fats** are usually solid at room temp. Their hydrocarbon chains are mostly saturated (no C=C double bonds), allowing the molecules to pack closely together ⇒ stronger London dispersion forces ⇒ higher melting point.\n• **Oils** are usually liquid at room temp. Their chains are unsaturated (contain one or more cis C=C double bonds) which creates kinks in the chain. This prevents close, tidy packing ⇒ weaker London dispersion forces ⇒ lower melting point.'
      }
    },

    // ── Ester Hydrolysis ─────────────────────────────────────────────────────
    {
      id: 'h-ester-hydrolysis',
      type: 'heading',
      data: { text: 'Reactions of Esters — Hydrolysis', level: 3 }
    },
    {
      id: 'p-ester-hydrolysis-intro',
      type: 'paragraph',
      data: {
        text: 'Hydrolysis is the REVERSE of esterification — the ester bond is broken by adding water. The ester splits in the middle of the –COO– group: the acid part regains –OH; the alcohol part regains –H. Two conditions exist: acidic and alkaline hydrolysis.'
      }
    },
    {
      id: 'h-acidic-hydrolysis',
      type: 'heading',
      data: { text: 'Acidic Hydrolysis', level: 3 }
    },
    {
      id: 'list-acidic-hydrolysis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: dilute H₂SO₄ (or dilute HCl) + water',
          'Conditions: warm/heat',
          'Products: carboxylic acid (R–COOH) + alcohol (R′–OH)',
          'Reaction is REVERSIBLE (equilibrium ⇌) — same catalyst speeds up both forward and reverse',
          'This is why esterification and hydrolysis reach equilibrium at the same time',
          'One-step reaction'
        ]
      }
    },
    {
      id: 'eq-acidic-hydrolysis',
      type: 'equation',
      data: {
        html: 'CH₃COOCH₂CH₃ + H₂O ⇌ CH₃COOH + CH₃CH₂OH<br/><span style="font-size:0.9em;color:#6b7280">Ethyl ethanoate + water ⇌ ethanoic acid + ethanol (dilute H₂SO₄ catalyst, warm)</span>',
        caption: 'Acidic hydrolysis of an ester. Reversible equilibrium — the same catalyst promotes both esterification and hydrolysis, so both occur simultaneously.'
      }
    },
    {
      id: 'h-alkaline-hydrolysis',
      type: 'heading',
      data: { text: 'Alkaline Hydrolysis (Saponification)', level: 3 }
    },
    {
      id: 'list-alkaline-hydrolysis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagent: NaOH(aq) or KOH(aq)',
          'Conditions: heat under reflux',
          'Products (Step 1): carboxylate salt (R–COO⁻Na⁺) + alcohol (R′–OH)',
          'Reaction goes to COMPLETION (not an equilibrium) → better yield',
          'To get the free carboxylic acid: Step 2 — add dilute acid (H⁺) to protonate the carboxylate salt',
          'The NaOH is NOT truly a catalyst — it is consumed in the reaction (alkali decreases as reaction proceeds)'
        ]
      }
    },
    {
      id: 'eq-alkaline-hydrolysis',
      type: 'equation',
      data: {
        html: 'Step 1: CH₃CH₂COOCH₃ + NaOH → CH₃CH₂COO⁻Na⁺ + CH₃OH<br/>Step 2: CH₃CH₂COO⁻Na⁺ + H⁺ → CH₃CH₂COOH<br/><span style="font-size:0.9em;color:#6b7280">Methyl propanoate + NaOH → sodium propanoate + methanol → (+ HCl) → propanoic acid</span>',
        caption: 'Alkaline hydrolysis of methyl propanoate. Step 1 gives carboxylate salt (complete reaction). Step 2 adds dilute acid to give the free carboxylic acid.'
      }
    },
    {
      id: 'table-hydrolysis-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Acidic hydrolysis', 'Alkaline hydrolysis'],
        rows: [
          ['Reagent', 'Dilute H₂SO₄ + water', 'NaOH(aq)'],
          ['No. of steps', '1 step', '2 steps'],
          ['Reversible?', 'Yes — equilibrium (⇌)', 'No — goes to completion'],
          ['Direct product', 'Carboxylic acid + alcohol', 'Carboxylate salt + alcohol'],
          ['To get acid', 'Direct', 'Add dilute acid (Step 2)'],
          ['Yield', 'Lower (equilibrium)', 'Higher (complete)']
        ],
        caption: 'Acidic vs alkaline ester hydrolysis comparison. Alkaline = 2 steps but complete; acidic = 1 step but equilibrium.'
      }
    },

    // ── Saponification ───────────────────────────────────────────────────────
    {
      id: 'h-saponification',
      type: 'heading',
      data: { text: 'Saponification — Soap Making', level: 3 }
    },
    {
      id: 'list-saponification',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Saponification = alkaline hydrolysis of a triglyceride (triester) to make soap',
          'Triglycerides (triesters) are found in vegetable oils and animal fats — they have THREE ester groups',
          'Reagent: 3 moles of NaOH per triglyceride',
          'Products: glycerol (propane-1,2,3-triol) + 3 carboxylate salts (the soaps)',
          'The carboxylate salts (long-chain RCOONa) are the actual soap molecules',
          'The glycerol backbone is always propane-1,2,3-triol regardless of which fats are used',
          'You do NOT need to know specific triglyceride names — just understand the process',
          'Saponification = a specific type of alkaline hydrolysis'
        ]
      }
    },
    {
      id: 'svg-saponification',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 290" font-family="Arial,sans-serif" font-size="12">
  <text x="310" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Saponification — Alkaline Hydrolysis of a Triglyceride</text>

  <!-- Triglyceride box -->
  <rect x="10" y="36" width="200" height="195" rx="8" fill="#fef9ec" stroke="#d97706" stroke-width="2"/>
  <text x="110" y="58" text-anchor="middle" font-weight="bold" font-size="12" fill="#92400e">Triglyceride (triester)</text>
  <!-- Glycerol backbone -->
  <text x="26" y="84" font-size="11" fill="#374151">CH₂–O–CO–(fatty acid 1)</text>
  <line x1="26" y1="90" x2="26" y2="112" stroke="#374151" stroke-width="1.5"/>
  <text x="26" y="126" font-size="11" fill="#374151">CH –O–CO–(fatty acid 2)</text>
  <line x1="26" y1="132" x2="26" y2="154" stroke="#374151" stroke-width="1.5"/>
  <text x="26" y="168" font-size="11" fill="#374151">CH₂–O–CO–(fatty acid 3)</text>
  <text x="42" y="205" font-size="11" fill="#7c3aed">↑ ↑ ↑ three ester bonds</text>
  <text x="42" y="220" font-size="11" fill="#374151">(glycerol backbone)</text>

  <!-- + 3 NaOH -->
  <text x="220" y="147" font-size="22" fill="#374151">+</text>
  <text x="238" y="135" font-size="13" font-weight="bold" fill="#374151">3 NaOH</text>
  <text x="238" y="152" font-size="12" fill="#6b7280">(heat /</text>
  <text x="238" y="167" font-size="12" fill="#6b7280">reflux)</text>

  <!-- Arrow -->
  <line x1="292" y1="145" x2="322" y2="145" stroke="#374151" stroke-width="2.5"/>
  <polygon points="322,139 334,145 322,151" fill="#374151"/>

  <!-- Products box left -->
  <rect x="338" y="36" width="120" height="90" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="398" y="58" text-anchor="middle" font-weight="bold" font-size="12" fill="#15803d">Glycerol</text>
  <text x="348" y="78" font-size="11" fill="#374151">CH₂–OH</text>
  <text x="348" y="94" font-size="11" fill="#374151">CH –OH</text>
  <text x="348" y="110" font-size="11" fill="#374151">CH₂–OH</text>
  <text x="348" y="126" font-size="10" fill="#15803d">(propane-1,2,3-triol)</text>

  <!-- + -->
  <text x="464" y="90" font-size="20" fill="#374151">+</text>

  <!-- Products box right -->
  <rect x="478" y="36" width="128" height="105" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="542" y="56" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">3 Soaps</text>
  <text x="488" y="76" font-size="11" fill="#374151">R₁–COO⁻Na⁺</text>
  <text x="488" y="94" font-size="11" fill="#374151">R₂–COO⁻Na⁺</text>
  <text x="488" y="112" font-size="11" fill="#374151">R₃–COO⁻Na⁺</text>
  <text x="482" y="132" font-size="10" fill="#1d4ed8">(carboxylate salts)</text>

  <!-- Key notes -->
  <rect x="10" y="240" width="596" height="38" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="20" y="257" font-size="11" fill="#92400e">• Each ester bond is hydrolysed by one NaOH molecule → 3 NaOH for a triglyceride</text>
  <text x="20" y="272" font-size="11" fill="#92400e">• Glycerol is ALWAYS the alcohol product (same regardless of the fat used)  •  Carboxylate salts = soaps</text>
</svg>`,
        caption: 'Saponification: alkaline hydrolysis of a triglyceride by 3 mol NaOH → glycerol (propane-1,2,3-triol) + 3 carboxylate salts (soaps). You are not required to know specific triglyceride names — know the process and products.'
      }
    },

    // ── Polyesters ───────────────────────────────────────────────────────────
    {
      id: 'h-polyesters',
      type: 'heading',
      data: { text: 'Polyesters — Condensation Polymerisation', level: 3 }
    },
    {
      id: 'list-polyesters',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Polyesters are made by condensation polymerisation — a small molecule (water or HCl) is eliminated at each bond',
          'Unlike addition polymerisation (one monomer, no by-product), condensation needs TWO types of monomer',
          'Standard monomers: (1) a dicarboxylic acid (–COOH at both ends) and (2) a diol (–OH at both ends)',
          '"di–" = two functional groups on the same molecule → allows chain growth in BOTH directions',
          'Every time a –COOH meets an –OH, one ester bond forms and one water molecule is lost',
          'Result: a long alternating chain of diacid–diol–diacid–diol… with ester linkages at every junction',
          'The repeat unit is enclosed in square brackets with bond extensions and subscript n',
          'Alternative: diacyl chloride + diol can also form polyesters but produces HCl (toxic) → less common',
          'Common polyester: PET (polyethylene terephthalate) — from terephthalic acid + ethane-1,2-diol',
          'Terylene is the brand name for PET fibre (may be given in questions but not required to memorise)',
          'Uses: plastic bottles (drink/food packaging), polyester clothing, duvet/pillow fillings, fibre optics'
        ]
      }
    },
    {
      id: 'svg-polyester',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 380" font-family="Arial,sans-serif" font-size="12">
  <text x="340" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">PET Polyester — Condensation Polymerisation</text>

  <!-- ── MONOMERS ── -->
  <text x="10" y="48" font-weight="bold" font-size="13" fill="#374151">Step 1 — Monomers</text>

  <!-- Terephthalic acid -->
  <rect x="10" y="56" width="280" height="80" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="150" y="76" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">Terephthalic acid (dicarboxylic acid)</text>
  <text x="22" y="106" font-size="13" fill="#dc2626">HOOC</text>
  <!-- benzene ring simplified -->
  <line x1="60" y1="101" x2="76" y2="101" stroke="#374151" stroke-width="2"/>
  <rect x="76" y="88" width="46" height="26" rx="4" fill="none" stroke="#374151" stroke-width="2"/>
  <text x="99" y="106" text-anchor="middle" font-size="11" fill="#374151">⬡</text>
  <line x1="122" y1="101" x2="138" y2="101" stroke="#374151" stroke-width="2"/>
  <text x="140" y="106" font-size="13" fill="#dc2626">COOH</text>
  <text x="22" y="126" font-size="10" fill="#6b7280">Two –COOH groups (one on each side)</text>

  <!-- + -->
  <text x="298" y="100" font-size="26" fill="#374151">+</text>

  <!-- Ethane-1,2-diol -->
  <rect x="318" y="56" width="200" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="418" y="76" text-anchor="middle" font-weight="bold" font-size="12" fill="#15803d">Ethane-1,2-diol (diol)</text>
  <text x="330" y="106" font-size="13" fill="#374151">HO–CH₂–CH₂–OH</text>
  <text x="330" y="126" font-size="10" fill="#6b7280">Two –OH groups (one on each end)</text>

  <!-- ── CONDENSATION ── -->
  <text x="10" y="162" font-weight="bold" font-size="13" fill="#374151">Step 2 — Bond Formation (×n times)</text>

  <rect x="10" y="172" width="500" height="60" rx="8" fill="#fff7ed" stroke="#d97706" stroke-width="2"/>
  <text x="22" y="195" font-size="12" fill="#374151">–COOH  +  HO–  →  –COO–  +  H₂O</text>
  <text x="22" y="214" font-size="11" fill="#92400e">Each junction: one ester bond formed, one water molecule lost (condensation)</text>
  <text x="22" y="228" font-size="11" fill="#92400e">Repeat alternating: diacid – ester – diol – ester – diacid – ester – diol ...</text>

  <!-- Arrow -->
  <text x="10" y="260" font-weight="bold" font-size="13" fill="#374151">Step 3 — Repeat Unit of PET</text>

  <!-- Repeat unit box -->
  <rect x="10" y="270" width="580" height="80" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
  <!-- Extension bond left -->
  <line x1="28" y1="310" x2="52" y2="310" stroke="#374151" stroke-width="2.5"/>
  <!-- C=O left -->
  <text x="54" y="329" font-size="13" fill="#374151">O</text>
  <line x1="62" y1="305" x2="62" y2="295" stroke="#374151" stroke-width="2.5"/>
  <line x1="62" y1="305" x2="62" y2="296" stroke="#374151" stroke-width="2.5"/>
  <!-- draw it as text for simplicity -->
  <text x="54" y="315" font-size="13" fill="#374151">–C(=O)–</text>
  <!-- benzene -->
  <text x="102" y="315" font-size="13" fill="#374151">⬡</text>
  <!-- –CO– other side -->
  <text x="120" y="315" font-size="13" fill="#374151">–(O=)C–O–CH₂–CH₂–O–</text>

  <line x1="282" y1="310" x2="305" y2="310" stroke="#374151" stroke-width="2.5"/>
  <!-- bracket -->
  <text x="308" y="315" font-size="20" fill="#7c3aed">[       ]</text>
  <text x="358" y="302" font-size="13" fill="#7c3aed">n</text>

  <text x="20" y="340" font-size="11" fill="#5b21b6">Each repeat unit contains TWO ester bonds (–COO–). Brackets + n = polymer.</text>

  <!-- Note row -->
  <rect x="10" y="358" width="600" height="18" rx="4" fill="#fef2f2"/>
  <text x="20" y="371" font-size="10.5" fill="#991b1b">Terephthalic acid has a benzene ring — don't be put off. Only FUNCTIONAL GROUPS react; the middle section is irrelevant to the reaction.</text>
</svg>`,
        caption: 'PET polyester formation by condensation polymerisation. Terephthalic acid (diacid) + ethane-1,2-diol (diol) → repeating ester bonds + water. The only parts that react are the functional groups (–COOH and –OH).'
      }
    },
    {
      id: 'callout-polyester-monomers',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'How to Find Monomers from a Polyester Repeat Unit (Exam Technique)',
        text: '1. Identify the ester bonds (–COO–) in the repeat unit\n2. Split each ester bond: cut between C and O\n3. Add –OH to the acid part (rebuilds –COOH)\n4. Add –H to the alcohol part (rebuilds –OH)\n5. These two fragments are your two monomers\n\nNote: the Edexcel IAL mark scheme also accepts diacyl chloride + diol as an alternative answer (acyl chloride version of the same monomers).'
      }
    },

    // ── Checklist ────────────────────────────────────────────────────────────
    {
      id: 'checklist-acyl-esters',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can name acyl chlorides (–oyl chloride suffix) and draw their displayed/skeletal formulae.', checked: false },
          { text: 'I know why acyl chlorides are reactive (both O and Cl make C very δ+, Cl⁻ is a good leaving group).', checked: false },
          { text: 'I can write equations for all four acyl chloride reactions (water, alcohol, ammonia, primary amine) including HCl as co-product.', checked: false },
          { text: 'I know the side reaction of NH₃ + HCl → NH₄Cl when reacting acyl chlorides with ammonia.', checked: false },
          { text: 'I understand N-substituted and N,N-disubstituted amide naming and why tertiary amines do not react.', checked: false },
          { text: 'I can name and draw esters using the alcohol-yl + acid-oate convention, and know drawing order is acid first.', checked: false },
          { text: 'I can explain why esters are insoluble in water (all H atoms bonded to C, not O/N/F).', checked: false },
          { text: 'I can compare acidic hydrolysis (1 step, equilibrium) with alkaline hydrolysis (2 steps, complete) of esters.', checked: false },
          { text: 'I can describe saponification (triglyceride + NaOH → glycerol + carboxylate salts/soaps).', checked: false },
          { text: 'I understand PET polyester formation (terephthalic acid + ethane-1,2-diol → repeating ester bonds + H₂O) and can identify monomers from a repeat unit.', checked: false }
        ]
      }
    },

    // ── Summary ──────────────────────────────────────────────────────────────
    {
      id: 'summary-acyl-esters',
      type: 'summary',
      data: {
        text: 'Acyl chlorides (R–COCl): functional group –COCl; named –oyl chloride. Very reactive — both O and Cl make C strongly δ+; Cl⁻ is an excellent leaving group. Four reactions (HCl always produced): ① +H₂O → carboxylic acid + HCl; ② +alcohol → ester + HCl (complete, no catalyst, but HCl is toxic); ③ +NH₃ → amide + HCl → NH₄Cl side-product; ④ +primary amine → N-substituted amide + HCl; +secondary amine → N,N-disubstituted amide + HCl; tertiary amines do NOT react (no N–H). Esters (R–COO–R′): named [alcohol]-yl [acid]-oate; drawn acid part first; colourless liquids; insoluble in water (all H on C); pleasant smells. Hydrolysis: acidic (dilute H₂SO₄/H₂O, 1 step, equilibrium → acid + alcohol); alkaline (NaOH, 2 steps, complete → carboxylate salt then add acid). Saponification = alkaline hydrolysis of triglyceride → glycerol + 3 carboxylate salts (soaps). Polyesters: condensation polymerisation of dicarboxylic acid + diol → ester bonds + H₂O; PET from terephthalic acid + ethane-1,2-diol.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-addelim',
        blockId: 'svg-addelim-general',
        prompt: 'Describe the 3 steps of the addition/elimination mechanism for acyl chlorides. What forms in Step 1? What happens in Steps 2 and 3? Why must the nucleophile have at least one H on O or N? What are the three names for this type of reaction?'
      },
      {
        id: 'cue-water-mech',
        blockId: 'svg-acyl-water-mechanism',
        prompt: 'Draw out (or describe) the 3-step mechanism for CH₃COCl + H₂O. Name the tetrahedral intermediate. What charge forms on the water oxygen and why? Which step does Cl⁻ leave? Why is only ONE lone pair of H₂O shown in diagrams?'
      },
      {
        id: 'cue-alcohol-mech',
        blockId: 'svg-acyl-alcohol-mechanism',
        prompt: 'Describe the 3-step mechanism for CH₃COCl + CH₃CH₂OH. How does it differ from the water mechanism? What charge forms on the ethanol oxygen in the intermediate? What is the product and why is it an ester rather than a carboxylic acid?'
      },
      {
        id: 'cue-ammonia-mech',
        blockId: 'svg-acyl-ammonia-mechanism',
        prompt: 'Describe the 3-step mechanism for CH₃COCl + NH₃. What formal charge forms on the nitrogen in the tetrahedral intermediate? What are the two possible routes for Step 3, and how do they differ? Why is no free HCl gas observed (unlike water/alcohol reactions)? What are the final products and why does the overall equation require 2 mol NH₃?'
      },
      {
        id: 'cue-amine-mech',
        blockId: 'svg-acyl-amine-mechanism',
        prompt: 'Describe the 3-step mechanism for CH₃COCl + CH₃CH₂NH₂ (ethylamine). What formal charge forms on N in the tetrahedral intermediate? How is this mechanism the same as the NH₃ mechanism — and what is the only difference? What are the two Step 3 routes? Why is no free HCl gas observed? What are the final products and why does the overall equation require 2 mol amine? Why do tertiary amines NOT react?'
      },
        { id: 'cue-oil-fat', blockId: 'callout-fats-oils', prompt: 'Why do saturated fats generally have higher melting points than unsaturated oils?' },

      {
        id: 'cue-1',
        blockId: 'table-acyl-summary',
        prompt: 'State the reagent and ALL products for each of the four acyl chloride reactions. What is always produced as a co-product?'
      },
      {
        id: 'cue-2',
        blockId: 'callout-amide-naming',
        prompt: 'Explain how to name an N-substituted amide. Why does the "N" appear in the name, and why do tertiary amines not react with acyl chlorides?'
      },
      {
        id: 'cue-2.5',
        blockId: 'list-anhydride-amines',
        prompt: 'What are the products of the reaction between ethanoic anhydride and a primary amine (like methylamine or phenylamine)?'
      },
      {
        id: 'cue-2.5',
        blockId: 'list-anhydride-amines',
        prompt: 'What are the products of the reaction between ethanoic anhydride and a primary amine (like methylamine or phenylamine)?'
      },
      {
        id: 'cue-3',
        blockId: 'table-ester-comparison',
        prompt: 'Compare making an ester via acyl chloride vs Fischer esterification: yield, conditions, co-product. What is the key advantage and disadvantage of each?'
      },
      {
        id: 'cue-4',
        blockId: 'list-ester-naming',
        prompt: 'How do you name an ester? What is unusual about the drawing order compared to the naming order?'
      },
      {
        id: 'cue-5',
        blockId: 'table-hydrolysis-compare',
        prompt: 'Compare acidic and alkaline hydrolysis of esters: number of steps, reversibility, and products at each stage.'
      },
      {
        id: 'cue-6',
        blockId: 'svg-polyester',
        prompt: 'Describe how PET polyester is made from its two monomers. What type of polymerisation is this, and what small molecule is eliminated?'
      }
    ],
    summaryText: 'Acyl chlorides (RCOCl) — very reactive (C is δ+ due to both O and Cl); named –oyl chloride. HCl always a co-product. Reactions: +H₂O → RCOOH; +R′OH → ester (complete, no catalyst; HCl is toxic trade-off); +NH₃ → amide + NH₄Cl side product; +primary amine → N-substituted amide; +secondary amine → N,N-disubstituted amide; tertiary amines: no reaction (no N–H). Esters: name = [alcohol]-yl [acid]-oate; draw acid part first; insoluble (all H on C, can\'t H-bond); pleasant smells. Hydrolysis: acidic (1 step, eq., → acid + alcohol); alkaline (2 steps, complete → carboxylate salt then add acid). Saponification = NaOH + triglyceride → glycerol + soaps. Polyesters: diacid + diol → ester bonds + H₂O (PET = terephthalic acid + ethane-1,2-diol).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'PET polyester recycling via hydrolysis',
      detail: 'Polyethylene terephthalate (PET) can be chemically recycled by breaking its ester bonds via hydrolysis. Acidic or alkaline hydrolysis regenerates the monomers (terephthalic acid and ethylene glycol), enabling closed-loop recycling. Enzymatic depolymerisation using engineered cutinase enzymes (e.g. LCCICCG) can degrade PET at near-room temperature, making sustainable recycling economically viable. Understanding ester hydrolysis is therefore central to modern green chemistry.',
      year: '2023',
      source: 'Edexcel IAL Chemistry / Green Chemistry Applications',
      tags: ['polyesters', 'PET', 'hydrolysis', 'sustainability', 'recycling']
    },
    {
      id: 'ev-2',
      title: 'Aspirin synthesis via acyl chloride',
      detail: 'Aspirin (acetylsalicylic acid) is industrially synthesised by reacting salicylic acid with acetic anhydride (or ethanoyl chloride HSOML alternative). The acyl chloride route gives a complete, fast reaction at room temperature without a catalyst — demonstrating the practical advantage of acyl chlorides over Fischer esterification (no equilibrium limitation) despite the hazard of HCl gas production.',
      year: '2023',
      source: 'Pharmaceutical Chemistry & IAL Unit 4 Organic Chemistry',
      tags: ['acyl chlorides', 'esterification', 'pharmaceutical', 'aspirin']
    },
    {
      id: 'ev-3',
      title: 'Addition/Elimination mechanism of acyl chlorides — nucleophile types and 3-step general mechanism',
      detail: 'Acyl chlorides undergo nucleophilic addition/elimination (also called condensation reactions). Nucleophiles used are O-based (H₂O, alcohols — lone pair on O) and N-based (NH₃, primary amines — lone pair on N). Water and alcohols behave identically around the O atom; ammonia and primary amines behave identically around the N atom. The nucleophile must have at least ONE H on O or N — required for the final HCl elimination. 3-step mechanism: Step 1 (Addition) — Nu lone pair attacks δ+ C of C=O; π-electrons of C=O shift to O → O becomes O⁻; tetrahedral intermediate R–C(O⁻)(Cl)(Nu⁺H) forms; Nu becomes positively charged. Step 2 (Elimination A) — O⁻ lone pair reforms the C=O double bond; C–Cl electrons pushed entirely onto Cl → Cl⁻ leaves; planar R–C(=O)–Nu⁺H remains. Step 3 (Elimination B) — Cl⁻ uses lone pair to remove H⁺ from Nu⁺H; HCl formed; positive charge on Nu cancelled; final product R–CO–Nu + HCl↑. Three names for the same reaction: nucleophilic substitution (overall effect), addition/elimination (mechanism stages), condensation (two molecules → product + HCl). AQA A-level requires the full mechanism; Edexcel IAL requires only equations/products.',
      year: '2024',
      source: 'chemguide.co.uk/mechanisms/addelim/whatis.html',
      tags: ['acyl chlorides', 'addition-elimination', 'nucleophilic substitution', 'condensation', 'mechanism', 'tetrahedral intermediate', 'O-nucleophile', 'N-nucleophile', 'HCl', 'AQA', 'nucleophile types', 'water', 'alcohol', 'ammonia', 'primary amine']
    },
    {
      id: 'ev-4',
      title: 'Specific mechanism: ethanoyl chloride + water (3-step addition/elimination, tetrahedral intermediate)',
      detail: 'Ethanoyl chloride (CH₃COCl) reacts instantly with cold water — vigorous, highly exothermic, misty white HCl fumes immediately visible. Mechanism (3 steps): Step 1 (Addition) — one lone pair on O of H₂O attacks δ+ C of C=O; π-electrons of C=O shift entirely onto O → carbonyl O becomes O⁻; the attacking H₂O oxygen becomes OH₂⁺ (positive formal charge because it donated its lone pair); tetrahedral intermediate CH₃–C(O⁻)(Cl)(OH₂⁺) forms. Exam convention: draw only ONE lone pair on H₂O (the attacking pair) to avoid clutter. Step 2 (Elimination A) — O⁻ lone pair pushes back to reform C=O double bond; electrons in C–Cl bond are pushed entirely onto Cl → Cl⁻ departs as an ion; product is CH₃–C(=O)–OH₂⁺ + Cl⁻. Cl has NOT left in Step 1 — this is a critical exam point. Step 3 (Elimination B) — Cl⁻ uses its lone pair to remove H⁺ from OH₂⁺; the H–O electron pair stays on O, restoring the neutral –OH group; HCl is released; final products: CH₃COOH (ethanoic acid) + HCl↑. Pattern: applies to all acyl chloride + nucleophile reactions — replace H₂O with any Nu–H species.',
      year: '2024',
      source: 'chemguide.co.uk/mechanisms/addelim/water.html',
      tags: ['acyl chlorides', 'water', 'addition-elimination', 'mechanism', 'tetrahedral intermediate', 'ethanoyl chloride', 'ethanoic acid', 'HCl', 'O⁻', 'OH₂⁺', 'lone pair', 'AQA', 'exothermic', 'vigorous', 'misty fumes']
    },
    {
      id: 'ev-5',
      title: 'Specific mechanism: ethanoyl chloride + ethanol (3-step addition/elimination, ester product)',
      detail: 'Ethanoyl chloride (CH₃COCl) reacts instantly with cold ethanol — vigorous, exothermic, misty HCl fumes. Product: ethyl ethanoate (CH₃COOCH₂CH₃). Mechanism (3 steps, identical pattern to water): Step 1 (Addition) — one lone pair on O of CH₃CH₂OH attacks δ+ C of C=O; π-electrons of C=O shift onto O → carbonyl O becomes O⁻; attacking ethanol O becomes OCH₂CH₃·H⁺ (positive formal charge); tetrahedral intermediate CH₃–C(O⁻)(Cl)(OCH₂CH₃·H⁺) forms. Exam convention: draw only ONE lone pair on ethanol O to avoid clutter. Step 2 (Elimination A) — O⁻ lone pair reforms C=O; electrons in C–Cl bond pushed entirely onto Cl → Cl⁻ leaves; species CH₃–C(=O)–OCH₂CH₃·H⁺ + Cl⁻ remain. Step 3 (Elimination B) — Cl⁻ removes H⁺ from the +ve ethanol O; H–O electron pair stays on O → neutral ester –OCH₂CH₃ group restored; HCl released. Final products: CH₃COOCH₂CH₃ (ethyl ethanoate) + HCl↑. Key insight: mechanism IDENTICAL to water; only difference is –OH₂⁺ (water) is replaced by –OCH₂CH₃·H⁺ (ethanol) throughout — result is ester instead of carboxylic acid.',
      year: '2024',
      source: 'chemguide.co.uk/mechanisms/addelim/alcohol.html',
      tags: ['acyl chlorides', 'ethanol', 'alcohol', 'addition-elimination', 'mechanism', 'esterification', 'tetrahedral intermediate', 'ethanoyl chloride', 'ethyl ethanoate', 'HCl', 'O⁻', 'OCH₂CH₃⁺', 'lone pair', 'AQA', 'ester', 'parallel mechanism']
    },
    {
      id: 'ev-6',
      title: 'Specific mechanism: ethanoyl chloride + ammonia (unique Step 3 routes, amide + NH₄Cl products)',
      detail: 'Ethanoyl chloride reacts violently with cold concentrated NH₃ — vigorous, produces a white solid mixture of ethanamide + ammonium chloride (NH₄Cl). Overall: CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl. Mechanism (3 steps): Step 1 (Addition) — lone pair on N of NH₃ attacks δ+ C of C=O; π-electrons of C=O shift onto O → O⁻; N becomes N⁺H₃ (positive formal charge); tetrahedral intermediate CH₃–C(O⁻)(Cl)(N⁺H₃) forms. Step 2 (Elimination A) — O⁻ lone pair reforms C=O; C–Cl electrons pushed entirely onto Cl → Cl⁻ leaves; CH₃–C(=O)–N⁺H₃ + Cl⁻ remain. Step 3 (Elimination B) — TWO possible routes (unique to nitrogen nucleophiles): Route 3a: Cl⁻ removes H⁺ from N⁺H₃ → HCl formed, but HCl immediately neutralised by excess NH₃ (HCl + NH₃ → NH₄Cl); Route 3b: An NH₃ molecule directly removes H⁺ from N⁺H₃ → NH₄⁺ formed; NH₄⁺ + Cl⁻ → NH₄Cl. Both routes give identical products: CH₃CONH₂ (ethanamide) + NH₄Cl (ammonium chloride). Critical exam point: unlike water/alcohol reactions, NO free HCl gas is observed — all HCl is consumed by excess NH₃. Overall equation requires 2 mol NH₃: one for nucleophilic attack, one for neutralisation of the HCl side-product.',
      year: '2024',
      source: 'chemguide.co.uk/mechanisms/addelim/ammonia.html',
      tags: ['acyl chlorides', 'ammonia', 'addition-elimination', 'mechanism', 'ethanamide', 'ammonium chloride', 'NH₄Cl', 'N⁺H₃', 'tetrahedral intermediate', 'Step 3 two routes', 'no free HCl', 'AQA', 'amide', 'white solid', 'nitrogen nucleophile']
    },
    {
      id: 'ev-7',
      title: 'Specific mechanism: ethanoyl chloride + ethylamine (primary amine — same 3-step pattern as NH₃)',
      detail: 'Ethanoyl chloride reacts violently with cold concentrated ethylamine — vigorous, white solid product (N-ethylethanamide + ethylammonium chloride). Overall: CH₃COCl + 2CH₃CH₂NH₂ → CH₃CONHCH₂CH₃ + [CH₃CH₂NH₃]Cl. Mechanism (3 steps, IDENTICAL to NH₃): Step 1 (Addition) — N lone pair of ethylamine attacks δ+ C of C=O; π-electrons of C=O shift onto O → O⁻; N becomes N⁺H (positive formal charge, one H still remains on N); tetrahedral intermediate CH₃–C(O⁻)(Cl)(N⁺H·CH₂CH₃) forms. Step 2 (Elimination A) — O⁻ lone pair reforms C=O; C–Cl electrons pushed onto Cl → Cl⁻ leaves; CH₃–C(=O)–N⁺H(CH₂CH₃) + Cl⁻ remain. Step 3 (Elimination B) — two routes: Route 3a: Cl⁻ removes H⁺ from N⁺H → HCl, which immediately reacts with excess ethylamine → [CH₃CH₂NH₃]Cl; Route 3b: ethylamine molecule directly removes H⁺ from N⁺H → [CH₃CH₂NH₃]⁺ + Cl⁻ → [CH₃CH₂NH₃]Cl. Products: N-ethylethanamide + ethylammonium chloride (white solid). Key distinction from water/alcohol: no free HCl gas observed; R group on N has no effect on mechanism — mechanism is identical to NH₃ pattern. Secondary amine: same 3 steps, but only one N–H in intermediate; tertiary amine: no H on N → no reaction possible.',
      year: '2024',
      source: 'chemguide.co.uk/mechanisms/addelim/amines.html',
      tags: ['acyl chlorides', 'primary amine', 'secondary amine', 'addition-elimination', 'mechanism', 'N-ethylethanamide', 'ethylammonium chloride', 'N-substituted amide', 'N⁺H', 'tetrahedral intermediate', 'Step 3 two routes', 'no free HCl', 'AQA', 'amide', 'white solid', 'nitrogen nucleophile', 'tertiary amine no reaction']
    }
  ]
};
