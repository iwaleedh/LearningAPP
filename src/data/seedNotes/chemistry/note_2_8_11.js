/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 11
 * "Properties of Period 3 Hydroxides and Oxyacids"
 * Source: chemguide.co.uk/inorganic/period3/hydroxides.html
 *         Pearson Edexcel IAL Chemistry WCH12
 */
export const note_chemistry_2_8_11 = {
  blocks: [

    // ─── OBJECTIVE ───────────────────────────────────────────────────
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the broad definition of "hydroxide" for Period 3 elements; classify them as ionic or covalent; explain and compare the acid–base properties of NaOH, Mg(OH)₂, Al(OH)₃ and the covalent oxyacids (H₄SiO₄, H₃PO₄, H₂SO₄, HClO₄); relate acid strength to charge delocalization in the conjugate anion.'
      }
    },

    // ─── DEFINING "HYDROXIDE" ─────────────────────────────────────────
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What Counts as a "Hydroxide" in Period 3?', level: 2 }
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Broad Definition',
        text: 'A Period 3 "hydroxide" is any compound that contains either:<br>• an <strong>ionic hydroxide ion (OH⁻)</strong> — Na and Mg compounds; or<br>• a <strong>covalently bonded –OH group</strong> attached to the Period 3 element — Si, P, S, Cl compounds.<br>Al(OH)₃ sits between these two extremes.'
      }
    },
    {
      id: 'list-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Na, Mg:</strong> Ionic hydroxides containing free OH⁻ → strongly or moderately basic',
          '<strong>Al:</strong> Al(OH)₃ — amphoteric (reacts with both acids and bases)',
          '<strong>Si, P, S, Cl:</strong> Covalent –OH groups → all acidic; strength increases rapidly left to right',
          'The shift from ionic to covalent bonding is driven by increasing electronegativity of the central atom across the period',
          '<strong>Argon</strong> forms no hydroxide — it has zero valency'
        ]
      }
    },

    // ─── SVG: OVERVIEW CLASSIFICATION ────────────────────────────────
    {
      id: 'svg-overview',
      type: 'svg',
      data: {
        caption: 'Figure: Period 3 "hydroxides" — classification by bonding type and acid–base character',
        svg: `<svg viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Background zones -->
  <rect x="4"   y="0" width="165" height="160" rx="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="175" y="0" width="90"  height="160" rx="7" fill="#f3e8ff" stroke="#a855f7" stroke-width="1.5"/>
  <rect x="271" y="0" width="421" height="160" rx="7" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>

  <!-- Zone headers -->
  <text x="87"  y="16" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Ionic OH⁻ → Basic</text>
  <text x="220" y="16" text-anchor="middle" fill="#6b21a8" font-weight="bold" font-size="12">Amphoteric</text>
  <text x="481" y="16" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="12">Covalent –OH → Acidic</text>

  <!-- Element boxes: Na -->
  <rect x="16"  y="30" width="66" height="80" rx="5" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="49"  y="52" text-anchor="middle" fill="#1e3a8a" font-weight="bold" font-size="14">Na</text>
  <text x="49"  y="68" text-anchor="middle" fill="#1e3a8a" font-size="10">NaOH</text>
  <text x="49"  y="82" text-anchor="middle" fill="#1e3a8a" font-size="9">Ionic OH⁻</text>
  <text x="49"  y="96" text-anchor="middle" fill="#1e3a8a" font-size="9">pH ~14</text>
  <text x="49" y="108" text-anchor="middle" fill="#2563eb" font-size="9" font-weight="bold">Strong base</text>

  <!-- Mg -->
  <rect x="96"  y="30" width="66" height="80" rx="5" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="129" y="52" text-anchor="middle" fill="#1e3a8a" font-weight="bold" font-size="14">Mg</text>
  <text x="129" y="68" text-anchor="middle" fill="#1e3a8a" font-size="10">Mg(OH)₂</text>
  <text x="129" y="82" text-anchor="middle" fill="#1e3a8a" font-size="9">Ionic OH⁻</text>
  <text x="129" y="96" text-anchor="middle" fill="#1e3a8a" font-size="9">slightly soluble</text>
  <text x="129" y="108" text-anchor="middle" fill="#2563eb" font-size="9" font-weight="bold">Weak base</text>

  <!-- Al -->
  <rect x="183" y="30" width="74" height="80" rx="5" fill="#e9d5ff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="220" y="52" text-anchor="middle" fill="#6b21a8" font-weight="bold" font-size="14">Al</text>
  <text x="220" y="68" text-anchor="middle" fill="#6b21a8" font-size="10">Al(OH)₃</text>
  <text x="220" y="82" text-anchor="middle" fill="#6b21a8" font-size="9">Complex/uncertain</text>
  <text x="220" y="96" text-anchor="middle" fill="#6b21a8" font-size="9">acid + base</text>
  <text x="220" y="108" text-anchor="middle" fill="#6b21a8" font-size="9" font-weight="bold">Amphoteric</text>

  <!-- Si -->
  <rect x="280" y="30" width="80" height="80" rx="5" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="320" y="52" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="14">Si</text>
  <text x="320" y="68" text-anchor="middle" fill="#78350f" font-size="10">Si(OH)₄</text>
  <text x="320" y="82" text-anchor="middle" fill="#78350f" font-size="9">Covalent –OH</text>
  <text x="320" y="96" text-anchor="middle" fill="#78350f" font-size="9">No Si=O bonds</text>
  <text x="320" y="108" text-anchor="middle" fill="#d97706" font-size="9" font-weight="bold">Very weak acid</text>

  <!-- P -->
  <rect x="368" y="30" width="80" height="80" rx="5" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <text x="408" y="52" text-anchor="middle" fill="#7c2d12" font-weight="bold" font-size="14">P</text>
  <text x="408" y="68" text-anchor="middle" fill="#7c2d12" font-size="10">H₃PO₄</text>
  <text x="408" y="82" text-anchor="middle" fill="#7c2d12" font-size="9">1 P=O bond</text>
  <text x="408" y="96" text-anchor="middle" fill="#7c2d12" font-size="9">pKₐ ≈ 2.15</text>
  <text x="408" y="108" text-anchor="middle" fill="#ea580c" font-size="9" font-weight="bold">Weak acid</text>

  <!-- S -->
  <rect x="456" y="30" width="80" height="80" rx="5" fill="#fecaca" stroke="#ef4444" stroke-width="1.5"/>
  <text x="496" y="52" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="14">S</text>
  <text x="496" y="68" text-anchor="middle" fill="#991b1b" font-size="10">H₂SO₄</text>
  <text x="496" y="82" text-anchor="middle" fill="#991b1b" font-size="9">2 S=O bonds</text>
  <text x="496" y="96" text-anchor="middle" fill="#991b1b" font-size="9">pKₐ ≈ −3</text>
  <text x="496" y="108" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">Strong acid</text>

  <!-- Cl -->
  <rect x="544" y="30" width="140" height="80" rx="5" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
  <text x="614" y="52" text-anchor="middle" fill="#7f1d1d" font-weight="bold" font-size="14">Cl</text>
  <text x="614" y="68" text-anchor="middle" fill="#7f1d1d" font-size="10">HClO₄</text>
  <text x="614" y="82" text-anchor="middle" fill="#7f1d1d" font-size="9">3 Cl=O bonds</text>
  <text x="614" y="96" text-anchor="middle" fill="#7f1d1d" font-size="9">pKₐ ≈ −10</text>
  <text x="614" y="108" text-anchor="middle" fill="#dc2626" font-size="9" font-weight="bold">Very strong acid</text>

  <!-- Increasing acidity arrow at bottom -->
  <defs>
    <marker id="arro" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#6b7280"/>
    </marker>
  </defs>
  <line x1="25" y1="148" x2="680" y2="148" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arro)"/>
  <text x="25"  y="158" fill="#1e40af" font-size="9" font-weight="bold">← More basic</text>
  <text x="560" y="158" fill="#dc2626" font-size="9" font-weight="bold">More acidic →</text>
</svg>`
      }
    },

    // ─── SODIUM AND MAGNESIUM HYDROXIDES ─────────────────────────────
    {
      id: 'h-na-mg',
      type: 'heading',
      data: { text: 'NaOH and Mg(OH)₂ — Ionic Basic Hydroxides', level: 2 }
    },
    {
      id: 'list-na-mg',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Both contain <strong>free OH⁻ ions</strong> — the source of their basic character',
          'OH⁻ is a strong base; it accepts H⁺ readily from acids',
          '<strong>NaOH</strong> — soluble in water; forms strongly alkaline solution (pH ~14)',
          '<strong>Mg(OH)₂</strong> — only slightly soluble in water; forms a weakly alkaline suspension (pH ~9–10); used as "milk of magnesia" antacid',
          'Both react with dilute hydrochloric acid to form salt + water (neutralisation)',
          'NaOH reacts more vigorously than Mg(OH)₂ because it is fully ionic and very soluble'
        ]
      }
    },
    {
      id: 'eq-naoh-hcl',
      type: 'equation',
      data: {
        html: 'NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)',
        caption: 'Sodium hydroxide + hydrochloric acid → sodium chloride + water (neutralisation)'
      }
    },
    {
      id: 'eq-mgoh2-hcl',
      type: 'equation',
      data: {
        html: 'Mg(OH)₂(s) + 2HCl(aq) → MgCl₂(aq) + 2H₂O(l)',
        caption: 'Magnesium hydroxide + hydrochloric acid → magnesium chloride + water'
      }
    },
    {
      id: 'callout-mg-solubility',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Is Mg(OH)₂ Less Soluble Than NaOH?',
        text: '• Mg²⁺ has a higher charge and smaller ionic radius than Na⁺ → stronger lattice energy in Mg(OH)₂<br>• More energy is needed to break the Mg(OH)₂ lattice → less dissolves<br>• NaOH has a weaker lattice (1+/1−) → much more soluble → fully ionises in water → strongly alkaline'
      }
    },

    // ─── ALUMINIUM HYDROXIDE ─────────────────────────────────────────
    {
      id: 'h-al-oh3',
      type: 'heading',
      data: { text: 'Al(OH)₃ — Amphoteric Hydroxide', level: 2 }
    },
    {
      id: 'list-al-oh3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Al(OH)₃ is amphoteric</strong> — it can react with both acids and alkalis',
          'Formed when aqueous ammonia (NH₃) or a small amount of NaOH is added to a solution of Al³⁺ (e.g. AlCl₃): a white gelatinous precipitate',
          'The exact structure is uncertain; it may initially form [Al(H₂O)₃(OH)₃] from hexaaquaaluminium ions, then rearrange on standing',
          '<strong>Reaction with acids (basic character):</strong> Al(OH)₃ donates OH⁻ to neutralise H⁺',
          '<strong>Reaction with alkalis (acidic character):</strong> Al(OH)₃ accepts OH⁻ from a base; Al acts as a Lewis acid',
          'The product NaAl(OH)₄ is called <strong>sodium tetrahydroxoaluminate</strong>; also written NaAlO₂ (dehydrated form) — always check what your examiner expects',
          'This amphoteric behaviour is unique among the Period 3 metals — Na and Mg cannot react with NaOH because their electronegativity is too low to form covalent Al–O bonds'
        ]
      }
    },
    {
      id: 'eq-aloh3-acid',
      type: 'equation',
      data: {
        html: 'Al(OH)₃(s) + 3HCl(aq) → AlCl₃(aq) + 3H₂O(l)',
        caption: 'Al(OH)₃ + acid → aluminium chloride + water (basic character of Al(OH)₃)'
      }
    },
    {
      id: 'eq-aloh3-alkali',
      type: 'equation',
      data: {
        html: 'Al(OH)₃(s) + NaOH(aq) → NaAl(OH)₄(aq)',
        caption: 'Al(OH)₃ + sodium hydroxide → sodium tetrahydroxoaluminate (acidic character of Al(OH)₃)'
      }
    },
    {
      id: 'callout-al-examiners',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Examiner Note: Aluminate Formula',
        text: 'Different sources write the aluminate product differently:<br>• <strong>NaAl(OH)₄</strong> — sodium tetrahydroxoaluminate (most common in Edexcel mark schemes)<br>• <strong>NaAlO₂</strong> — dehydrated form (Al₂O₃ reacting with NaOH at high temperature)<br>• <strong>Na₃Al(OH)₆</strong> — different product under different conditions<br>Always check your specific mark scheme — the formula may vary with conditions.'
      }
    },

    // ─── FLOWCHART: HOW Al IS AMPHOTERIC ─────────────────────────────
    {
      id: 'svg-al-amphoteric',
      type: 'svg',
      data: {
        caption: 'Figure: Al(OH)₃ amphoteric reactions — reacts with acid (top) and base (bottom)',
        svg: `<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Central Al(OH)₃ box -->
  <rect x="230" y="90" width="160" height="60" rx="8" fill="#e9d5ff" stroke="#a855f7" stroke-width="2"/>
  <text x="310" y="115" text-anchor="middle" fill="#6b21a8" font-weight="bold" font-size="14">Al(OH)₃</text>
  <text x="310" y="133" text-anchor="middle" fill="#6b21a8" font-size="11">White precipitate</text>

  <!-- TOP BRANCH: + HCl (acid) -->
  <rect x="10"  y="10" width="160" height="50" rx="7" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="90"  y="32" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="12">+ HCl (acid)</text>
  <text x="90"  y="50" text-anchor="middle" fill="#dc2626" font-size="10">Base behaviour</text>

  <rect x="450" y="10" width="160" height="50" rx="7" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="530" y="32" text-anchor="middle" fill="#7f1d1d" font-weight="bold" font-size="12">AlCl₃(aq) + 3H₂O</text>
  <text x="530" y="50" text-anchor="middle" fill="#7f1d1d" font-size="10">Salt formed</text>

  <!-- arrows top -->
  <line x1="170" y1="35"  x2="228" y2="100" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="392" y1="100" x2="448" y2="35"  stroke="#ef4444" stroke-width="1.8" marker-end="url(#ra)"/>
  <text x="320" y="60" text-anchor="middle" fill="#ef4444" font-size="10">Al(OH)₃ + 3HCl →</text>

  <!-- BOTTOM BRANCH: + NaOH (alkali) -->
  <rect x="10"  y="180" width="160" height="50" rx="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="90"  y="202" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">+ NaOH (alkali)</text>
  <text x="90"  y="220" text-anchor="middle" fill="#1e40af" font-size="10">Acid behaviour</text>

  <rect x="450" y="180" width="160" height="50" rx="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="530" y="200" text-anchor="middle" fill="#1e3a8a" font-weight="bold" font-size="12">NaAl(OH)₄(aq)</text>
  <text x="530" y="218" text-anchor="middle" fill="#1e3a8a" font-size="9">sodium tetrahydroxo-</text>
  <text x="530" y="229" text-anchor="middle" fill="#1e3a8a" font-size="9">aluminate</text>

  <!-- arrows bottom -->
  <line x1="170" y1="205" x2="228" y2="145" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="392" y1="145" x2="448" y2="205" stroke="#3b82f6" stroke-width="1.8" marker-end="url(#rb)"/>
  <text x="320" y="175" text-anchor="middle" fill="#1e40af" font-size="10">Al(OH)₃ + NaOH →</text>

  <defs>
    <marker id="ra" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#ef4444"/>
    </marker>
    <marker id="rb" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
    </marker>
  </defs>
</svg>`
      }
    },

    // ─── COVALENT OXYACIDS ────────────────────────────────────────────
    {
      id: 'h-oxyacids',
      type: 'heading',
      data: { text: 'Covalent –OH Acids: Si, P, S and Cl', level: 2 }
    },
    {
      id: 'list-oxyacids-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Si, P, S and Cl all form compounds with covalently bonded –OH groups — these behave as <strong>acids</strong>',
          'None contain free OH⁻ ions — the O–H bond is covalent; H⁺ can be <em>donated</em> to a base',
          'All four are in the element\'s highest oxidation state when considering the oxyacids below',
          'The key structural difference is the number of <strong>=O (oxo) groups</strong> alongside the –OH groups — this controls acid strength'
        ]
      }
    },

    // ─── SVG: OXYACID STRUCTURES ──────────────────────────────────────
    {
      id: 'svg-oxyacid-structures',
      type: 'svg',
      data: {
        caption: 'Figure: Structures of the Period 3 covalent oxyacids (highest oxidation state). Note how the number of =O bonds increases from Si to Cl — this drives increasing acid strength.',
        svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Column labels -->
  <text x="78"  y="15" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="12">Si(OH)₄</text>
  <text x="78"  y="27" text-anchor="middle" fill="#78350f" font-size="10">Orthosilicic acid</text>
  <text x="230" y="15" text-anchor="middle" fill="#7c2d12" font-weight="bold" font-size="12">H₃PO₄</text>
  <text x="230" y="27" text-anchor="middle" fill="#7c2d12" font-size="10">Phosphoric(V) acid</text>
  <text x="410" y="15" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="12">H₂SO₄</text>
  <text x="410" y="27" text-anchor="middle" fill="#991b1b" font-size="10">Sulphuric acid</text>
  <text x="590" y="15" text-anchor="middle" fill="#7f1d1d" font-weight="bold" font-size="12">HClO₄</text>
  <text x="590" y="27" text-anchor="middle" fill="#7f1d1d" font-size="10">Perchloric(VII) acid</text>

  <!-- ── Si(OH)4 ── central Si, 4 OH groups, no =O -->
  <circle cx="78"  cy="130" r="16" fill="#d1d5db" stroke="#4b5563" stroke-width="2"/>
  <text x="78"  y="135" text-anchor="middle" fill="#111827" font-weight="bold" font-size="11">Si</text>
  <!-- 4 OH groups: top, left, right, bottom -->
  <line x1="78" y1="114" x2="78" y2="90" stroke="#374151" stroke-width="1.8"/>
  <circle cx="78"  cy="82"  r="9"  fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="78"  y="86"  text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="78" y1="73"  x2="78" y2="60"  stroke="#374151" stroke-width="1.5"/>
  <circle cx="78"  cy="53"  r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="78"  y="57"  text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <line x1="62" y1="130" x2="34" y2="130" stroke="#374151" stroke-width="1.8"/>
  <circle cx="26"  cy="130" r="9"  fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="26"  y="134" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="17" y1="130" x2="6"  y2="130" stroke="#374151" stroke-width="1.5"/>
  <circle cx="4"   cy="130" r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="4"   y="134" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <line x1="94" y1="130" x2="122" y2="130" stroke="#374151" stroke-width="1.8"/>
  <circle cx="130" cy="130" r="9"  fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="130" y="134" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="139" y1="130" x2="150" y2="130" stroke="#374151" stroke-width="1.5"/>
  <circle cx="152" cy="130" r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="152" y="134" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <line x1="78" y1="146" x2="78" y2="168" stroke="#374151" stroke-width="1.8"/>
  <circle cx="78"  cy="176" r="9"  fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="78"  y="180" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="78" y1="185" x2="78" y2="196" stroke="#374151" stroke-width="1.5"/>
  <circle cx="78"  cy="200" r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="78"  y="204" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <text x="78"  y="225" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">0 oxo (=O) groups</text>
  <text x="78"  y="238" text-anchor="middle" fill="#d97706" font-size="9">Very weak acid</text>
  <text x="78"  y="250" text-anchor="middle" fill="#d97706" font-size="9">No charge delocalisation</text>

  <!-- Divider -->
  <line x1="162" y1="30" x2="162" y2="260" stroke="#e5e7eb" stroke-width="1"/>

  <!-- ── H₃PO₄ ── P, 3 OH, 1 =O (top) -->
  <circle cx="230" cy="130" r="16" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
  <text x="230" y="135" text-anchor="middle" fill="#7c2d12" font-weight="bold" font-size="11">P</text>
  <!-- top =O double bond -->
  <line x1="227" y1="114" x2="227" y2="82" stroke="#374151" stroke-width="2.2"/>
  <line x1="233" y1="114" x2="233" y2="82" stroke="#374151" stroke-width="2.2"/>
  <circle cx="230" cy="74" r="9" fill="#fbbf24" stroke="#d97706" stroke-width="1.8"/>
  <text x="230" y="78" text-anchor="middle" fill="#78350f" font-size="9">O</text>
  <text x="246" y="95" fill="#d97706" font-size="8">=O</text>

  <!-- left OH -->
  <line x1="214" y1="124" x2="186" y2="112" stroke="#374151" stroke-width="1.8"/>
  <circle cx="178" cy="108" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="178" y="112" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="170" y1="104" x2="162" y2="96" stroke="#374151" stroke-width="1.5"/>
  <circle cx="157" cy="92" r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="157" y="96" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <!-- right OH -->
  <line x1="245" y1="124" x2="273" y2="112" stroke="#374151" stroke-width="1.8"/>
  <circle cx="281" cy="108" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="281" y="112" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="289" y1="104" x2="297" y2="96" stroke="#374151" stroke-width="1.5"/>
  <circle cx="302" cy="92" r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="302" y="96" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <!-- bottom OH -->
  <line x1="230" y1="146" x2="230" y2="168" stroke="#374151" stroke-width="1.8"/>
  <circle cx="230" cy="176" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="230" y="180" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="230" y1="185" x2="230" y2="196" stroke="#374151" stroke-width="1.5"/>
  <circle cx="230" cy="200" r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="230" y="204" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <text x="230" y="225" text-anchor="middle" fill="#ea580c" font-size="10" font-weight="bold">1 oxo (=O) group</text>
  <text x="230" y="238" text-anchor="middle" fill="#ea580c" font-size="9">Weak acid</text>
  <text x="230" y="250" text-anchor="middle" fill="#ea580c" font-size="9">Limited delocalisation</text>

  <!-- Divider -->
  <line x1="325" y1="30" x2="325" y2="260" stroke="#e5e7eb" stroke-width="1"/>

  <!-- ── H₂SO₄ ── S, 2 OH, 2 =O -->
  <circle cx="410" cy="130" r="16" fill="#fef08a" stroke="#a16207" stroke-width="2"/>
  <text x="410" y="135" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="11">S</text>
  <!-- top-left =O -->
  <line x1="395" y1="118" x2="371" y2="94" stroke="#374151" stroke-width="2.2"/>
  <line x1="400" y1="113" x2="376" y2="90" stroke="#374151" stroke-width="2.2"/>
  <circle cx="365" cy="85" r="9" fill="#fbbf24" stroke="#d97706" stroke-width="1.8"/>
  <text x="365" y="89" text-anchor="middle" fill="#78350f" font-size="9">O</text>
  <text x="350" y="104" fill="#d97706" font-size="8">=O</text>
  <!-- top-right =O -->
  <line x1="424" y1="118" x2="448" y2="94" stroke="#374151" stroke-width="2.2"/>
  <line x1="420" y1="114" x2="444" y2="90" stroke="#374151" stroke-width="2.2"/>
  <circle cx="454" cy="85" r="9" fill="#fbbf24" stroke="#d97706" stroke-width="1.8"/>
  <text x="454" y="89" text-anchor="middle" fill="#78350f" font-size="9">O</text>
  <text x="462" y="104" fill="#d97706" font-size="8">=O</text>
  <!-- left OH -->
  <line x1="398" y1="143" x2="374" y2="163" stroke="#374151" stroke-width="1.8"/>
  <circle cx="366" cy="170" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="366" y="174" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="357" y1="168" x2="348" y2="180" stroke="#374151" stroke-width="1.5"/>
  <circle cx="344" cy="185" r="7" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="344" y="189" text-anchor="middle" fill="#1e40af" font-size="8">H</text>
  <!-- right OH -->
  <line x1="422" y1="143" x2="446" y2="163" stroke="#374151" stroke-width="1.8"/>
  <circle cx="454" cy="170" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="454" y="174" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="463" y1="168" x2="472" y2="180" stroke="#374151" stroke-width="1.5"/>
  <circle cx="476" cy="185" r="7" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="476" y="189" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <text x="410" y="225" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">2 oxo (=O) groups</text>
  <text x="410" y="238" text-anchor="middle" fill="#ef4444" font-size="9">Strong acid (1st H)</text>
  <text x="410" y="250" text-anchor="middle" fill="#ef4444" font-size="9">Good delocalisation</text>

  <!-- Divider -->
  <line x1="504" y1="30" x2="504" y2="260" stroke="#e5e7eb" stroke-width="1"/>

  <!-- ── HClO₄ ── Cl, 1 OH, 3 =O -->
  <circle cx="590" cy="130" r="16" fill="#bbf7d0" stroke="#059669" stroke-width="2"/>
  <text x="590" y="135" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="11">Cl</text>
  <!-- top =O -->
  <line x1="587" y1="114" x2="587" y2="84" stroke="#374151" stroke-width="2.2"/>
  <line x1="593" y1="114" x2="593" y2="84" stroke="#374151" stroke-width="2.2"/>
  <circle cx="590" cy="76" r="9" fill="#fbbf24" stroke="#d97706" stroke-width="1.8"/>
  <text x="590" y="80" text-anchor="middle" fill="#78350f" font-size="9">O</text>
  <!-- left =O -->
  <line x1="574" y1="122" x2="548" y2="102" stroke="#374151" stroke-width="2.2"/>
  <line x1="578" y1="117" x2="552" y2="97" stroke="#374151" stroke-width="2.2"/>
  <circle cx="543" cy="92" r="9" fill="#fbbf24" stroke="#d97706" stroke-width="1.8"/>
  <text x="543" y="96" text-anchor="middle" fill="#78350f" font-size="9">O</text>
  <!-- right =O -->
  <line x1="606" y1="122" x2="632" y2="102" stroke="#374151" stroke-width="2.2"/>
  <line x1="602" y1="117" x2="628" y2="97" stroke="#374151" stroke-width="2.2"/>
  <circle cx="637" cy="92" r="9" fill="#fbbf24" stroke="#d97706" stroke-width="1.8"/>
  <text x="637" y="96" text-anchor="middle" fill="#78350f" font-size="9">O</text>
  <!-- bottom OH -->
  <line x1="590" y1="146" x2="590" y2="168" stroke="#374151" stroke-width="1.8"/>
  <circle cx="590" cy="178" r="9" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="590" y="182" text-anchor="middle" fill="#7f1d1d" font-size="9">O</text>
  <line x1="590" y1="187" x2="590" y2="198" stroke="#374151" stroke-width="1.5"/>
  <circle cx="590" cy="204" r="7" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="590" y="208" text-anchor="middle" fill="#1e40af" font-size="8">H</text>

  <text x="590" y="225" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">3 oxo (=O) groups</text>
  <text x="590" y="238" text-anchor="middle" fill="#dc2626" font-size="9">Very strong acid</text>
  <text x="590" y="250" text-anchor="middle" fill="#dc2626" font-size="9">Maximum delocalisation</text>

  <!-- legend at bottom -->
  <circle cx="30"  cy="270" r="7"  fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="42" y="274" fill="#374151" font-size="10">O-H (acidic hydrogen)</text>
  <circle cx="200" cy="270" r="7"  fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
  <text x="212" y="274" fill="#374151" font-size="10">Oxo group (=O)</text>
  <circle cx="360" cy="270" r="7"  fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="372" y="274" fill="#374151" font-size="10">Oxygen</text>
</svg>`
      }
    },

    // ─── INDIVIDUAL OXYACID DESCRIPTIONS ─────────────────────────────
    {
      id: 'h-orthosilicic',
      type: 'heading',
      data: { text: 'Orthosilicic Acid, Si(OH)₄ — Very Weak', level: 3 }
    },
    {
      id: 'list-orthosilicic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Also written H₄SiO₄; formed only if SiO₂ is dissolved in very hot concentrated alkali then acidified — SiO₂ does NOT dissolve in water at room temperature',
          'Contains <strong>four O–H groups and zero Si=O bonds</strong>',
          '<strong>Very weakly acidic</strong> — when it loses H⁺, the negative charge remains concentrated on just one oxygen atom of SiO(OH)₃⁻; no =O bonds are available to spread the charge → the anion is very unstable → easily recaptures H⁺',
          'pKₐ₁ ≈ 9.9 (weaker than water is a Brønsted acid!); effectively considered a non-acid for most purposes',
          'Decomposes to form silicic acid gel or SiO₂ on standing'
        ]
      }
    },
    {
      id: 'h-phosphoric',
      type: 'heading',
      data: { text: 'Phosphoric(V) Acid, H₃PO₄ — Weak', level: 3 }
    },
    {
      id: 'list-phosphoric',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Contains <strong>three O–H groups and one P=O bond</strong>',
          'When H⁺ is lost, the negative charge on H₂PO₄⁻ is delocalized over <strong>two oxygen atoms</strong> (the P=O and the P–O⁻)',
          'Only partial delocalization → moderately stable anion → weak acid, pKₐ ≈ 2.15',
          '<strong>Triprotic</strong> — can lose up to 3 H⁺; successive ionisations get progressively weaker',
          'Used in fertilisers, food industry, and rust treatment'
        ]
      }
    },
    {
      id: 'h-sulphuric',
      type: 'heading',
      data: { text: 'Sulphuric Acid, H₂SO₄ — Strong (1st ionisation)', level: 3 }
    },
    {
      id: 'list-sulphuric',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Contains <strong>two O–H groups and two S=O bonds</strong>',
          'When the first H⁺ is lost, the negative charge on HSO₄⁻ is delocalized over <strong>three oxygen atoms</strong> (the two S=O bonds + the S–O⁻) → highly stable anion → strong 1st ionisation (essentially 100% in dilute solution)',
          'The 2nd ionisation (HSO₄⁻ → H⁺ + SO₄²⁻) is an equilibrium — two negative charges must be delocalized over four O atoms → pKₐ₂ ≈ +1.99 (HSO₄⁻ is a weak acid)',
          '<strong>SO₄²⁻</strong> has full charge delocalisation over all four identical S–O bonds (resonance hybrid) → very stable anion',
          'Diprotic acid; produced industrially by the Contact Process'
        ]
      }
    },
    {
      id: 'h-perchloric',
      type: 'heading',
      data: { text: 'Perchloric Acid, HClO₄ — Very Strong', level: 3 }
    },
    {
      id: 'list-perchloric',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Contains <strong>one O–H group and three Cl=O bonds</strong>',
          'When H⁺ is lost, the resulting ClO₄⁻ (perchlorate ion) has the negative charge delocalized over <strong>all four oxygen atoms</strong>',
          'All four Cl–O bonds in ClO₄⁻ are <em>identical</em> (equal bond lengths ~1.46 Å) — the ion is a perfect tetrahedral resonance hybrid',
          'Maximum charge delocalization → maximum anion stability → acid donates H⁺ extremely easily → one of the strongest known acids',
          'pKₐ ≈ −10; essentially fully ionised even in concentrated solutions'
        ]
      }
    },

    // ─── SVG: ClO₄⁻ DELOCALIZATION ───────────────────────────────────
    {
      id: 'svg-clo4-deloc',
      type: 'svg',
      data: {
        caption: 'Figure: Charge delocalization in ClO₄⁻ (perchlorate ion). Unlike a single Lewis structure (left), the true structure (right) has identical Cl–O bonds — the negative charge is spread equally over all four oxygen atoms.',
        svg: `<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- LEFT: single Lewis structure ClO4- (before delocalization) -->
  <text x="130" y="20" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">Lewis Structure</text>
  <text x="130" y="34" text-anchor="middle" fill="#6b7280" font-size="10">(one of four resonance forms)</text>

  <!-- Central Cl -->
  <circle cx="130" cy="120" r="18" fill="#bbf7d0" stroke="#059669" stroke-width="2"/>
  <text x="130" y="125" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="12">Cl</text>

  <!-- Top double bond O -->
  <line x1="127" y1="102" x2="127" y2="74" stroke="#374151" stroke-width="2.5"/>
  <line x1="133" y1="102" x2="133" y2="74" stroke="#374151" stroke-width="2.5"/>
  <circle cx="130" cy="64"  r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <text x="130" y="68" text-anchor="middle" fill="#78350f" font-size="10">O</text>
  <text x="150" y="85"  fill="#374151" font-size="10">=O</text>

  <!-- Left double bond O -->
  <line x1="112" y1="113" x2="79"  y2="98"  stroke="#374151" stroke-width="2.5"/>
  <line x1="115" y1="108" x2="82"  y2="93"  stroke="#374151" stroke-width="2.5"/>
  <circle cx="70"  cy="88"  r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <text x="70" y="92" text-anchor="middle" fill="#78350f" font-size="10">O</text>
  <text x="55" y="108" fill="#374151" font-size="10">=O</text>

  <!-- Right double bond O -->
  <line x1="148" y1="113" x2="181" y2="98"  stroke="#374151" stroke-width="2.5"/>
  <line x1="145" y1="108" x2="178" y2="93"  stroke="#374151" stroke-width="2.5"/>
  <circle cx="190" cy="88"  r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <text x="190" y="92" text-anchor="middle" fill="#78350f" font-size="10">O</text>
  <text x="200" y="108" fill="#374151" font-size="10">=O</text>

  <!-- Bottom single bond O⁻ -->
  <line x1="130" y1="138" x2="130" y2="162" stroke="#374151" stroke-width="2"/>
  <circle cx="130" cy="174" r="14" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
  <text x="130" y="178" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <text x="148" y="178" fill="#dc2626" font-size="11" font-weight="bold">⁻</text>
  <text x="130" y="202" text-anchor="middle" fill="#dc2626" font-size="9">Single bond;</text>
  <text x="130" y="214" text-anchor="middle" fill="#dc2626" font-size="9">charge on 1 O</text>

  <!-- NOT EQUALS sign in middle -->
  <text x="270" y="125" text-anchor="middle" fill="#374151" font-size="30">≠</text>
  <text x="270" y="150" text-anchor="middle" fill="#374151" font-size="10">actual structure</text>

  <!-- RIGHT: Resonance hybrid - all bonds equal -->
  <text x="440" y="20" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">Resonance Hybrid</text>
  <text x="440" y="34" text-anchor="middle" fill="#6b7280" font-size="10">(actual ClO₄⁻ in solution)</text>

  <circle cx="440" cy="120" r="18" fill="#bbf7d0" stroke="#059669" stroke-width="2"/>
  <text x="440" y="125" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="12">Cl</text>

  <!-- Four identical bonds (dashed: between single and double) -->
  <!-- Top O -->
  <line x1="440" y1="102" x2="440" y2="74" stroke="#6366f1" stroke-width="2.5" stroke-dasharray="5,2"/>
  <circle cx="440" cy="64"  r="14" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
  <text x="440" y="68" text-anchor="middle" fill="#312e81" font-size="10">O</text>
  <text x="458" y="62" fill="#4338ca" font-size="10" font-weight="bold">¼⁻</text>
  <!-- Left O -->
  <line x1="425" y1="112" x2="394" y2="96"  stroke="#6366f1" stroke-width="2.5" stroke-dasharray="5,2"/>
  <circle cx="382" cy="88"  r="14" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
  <text x="382" y="92" text-anchor="middle" fill="#312e81" font-size="10">O</text>
  <text x="363" y="88" fill="#4338ca" font-size="10" font-weight="bold">¼⁻</text>
  <!-- Right O -->
  <line x1="455" y1="112" x2="486" y2="96"  stroke="#6366f1" stroke-width="2.5" stroke-dasharray="5,2"/>
  <circle cx="498" cy="88"  r="14" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
  <text x="498" y="92" text-anchor="middle" fill="#312e81" font-size="10">O</text>
  <text x="514" y="88" fill="#4338ca" font-size="10" font-weight="bold">¼⁻</text>
  <!-- Bottom O -->
  <line x1="440" y1="138" x2="440" y2="162" stroke="#6366f1" stroke-width="2.5" stroke-dasharray="5,2"/>
  <circle cx="440" cy="174" r="14" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
  <text x="440" y="178" text-anchor="middle" fill="#312e81" font-size="10">O</text>
  <text x="458" y="178" fill="#4338ca" font-size="10" font-weight="bold">¼⁻</text>

  <text x="440" y="202" text-anchor="middle" fill="#4338ca" font-size="10" font-weight="bold">All 4 bonds identical (1.46 Å)</text>
  <text x="440" y="214" text-anchor="middle" fill="#4338ca" font-size="10">Charge = ¼⁻ per O atom</text>
  <text x="440" y="226" text-anchor="middle" fill="#059669" font-size="10">Very stable → very strong acid</text>
</svg>`
      }
    },

    // ─── MECHANISM: WHY DOES ACID STRENGTH INCREASE? ─────────────────
    {
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Why Acid Strength Increases Si → Cl: Charge Delocalisation', level: 2 }
    },
    {
      id: 'list-mechanism',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'When an oxyacid loses H⁺, the negative charge is left on the oxygen atom that donated the proton',
          '<strong>If charge stays concentrated on ONE oxygen</strong> → the anion strongly attracts H⁺ back → equilibrium lies to the left → <em>weak acid</em>',
          '<strong>If charge spreads (delocalized) across MULTIPLE oxygens</strong> via P=O, S=O or Cl=O bonds → the anion is more stable → equilibrium lies further right → <em>stronger acid</em>',
          'The oxo (=O) bonds act as "resonance pathways" — the electron density from the negative charge is drawn into these bonds, spreading it across the molecule',
          'The more =O bonds available, the greater the delocalization, the more stable the anion, the stronger the acid',
          '<strong>Si:</strong> 0 Si=O bonds → charge stays on 1 O → very weak',
          '<strong>P:</strong> 1 P=O bond → charge shared between 2 O → weak (pKₐ ~2.15)',
          '<strong>S:</strong> 2 S=O bonds → charge shared between 3 O in HSO₄⁻ → strong (pKₐ ~−3)',
          '<strong>Cl:</strong> 3 Cl=O bonds → charge shared equally over ALL 4 O in ClO₄⁻ → very strong (pKₐ ~−10)'
        ]
      }
    },

    // ─── SEQUENTIAL FLOWCHART: Acid strength mechanism ───────────────
    {
      id: 'svg-acid-strength-flow',
      type: 'svg',
      data: {
        caption: 'Figure: Sequential mechanism — how charge delocalization determines oxyacid strength',
        svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <defs>
    <marker id="flarr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#4b5563"/>
    </marker>
  </defs>

  <!-- Step 1 -->
  <rect x="10" y="10" width="190" height="60" rx="7" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="105" y="34" text-anchor="middle" fill="#0c4a6e" font-weight="bold" font-size="11">Step 1: Oxyacid loses H⁺</text>
  <text x="105" y="50" text-anchor="middle" fill="#0c4a6e" font-size="10">R–O–H → R–O⁻ + H⁺</text>
  <text x="105" y="63" text-anchor="middle" fill="#0c4a6e" font-size="9">Negative charge on O</text>

  <line x1="200" y1="40" x2="230" y2="40" stroke="#4b5563" stroke-width="1.5" marker-end="url(#flarr)"/>

  <!-- Step 2 -->
  <rect x="232" y="10" width="190" height="60" rx="7" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="327" y="30" text-anchor="middle" fill="#0c4a6e" font-weight="bold" font-size="11">Step 2: Is charge</text>
  <text x="327" y="45" text-anchor="middle" fill="#0c4a6e" font-weight="bold" font-size="11">delocalised?</text>
  <text x="327" y="62" text-anchor="middle" fill="#0c4a6e" font-size="9">Are there =O bonds to spread it?</text>

  <!-- YES branch (right) -->
  <line x1="422" y1="40" x2="452" y2="40" stroke="#059669" stroke-width="1.5" marker-end="url(#flarr)"/>
  <text x="437" y="35" text-anchor="middle" fill="#059669" font-size="9">YES</text>

  <rect x="454" y="10" width="170" height="60" rx="7" fill="#d1fae5" stroke="#059669" stroke-width="1.8"/>
  <text x="539" y="30" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">Anion is STABLE</text>
  <text x="539" y="46" text-anchor="middle" fill="#065f46" font-size="10">Charge spread over multiple O</text>
  <text x="539" y="60" text-anchor="middle" fill="#059669" font-size="9">→ STRONG acid</text>

  <!-- NO branch (down) -->
  <line x1="327" y1="70" x2="327" y2="100" stroke="#ef4444" stroke-width="1.5" marker-end="url(#flarr)"/>
  <text x="335" y="90" fill="#ef4444" font-size="9">NO</text>

  <rect x="232" y="102" width="190" height="60" rx="7" fill="#fee2e2" stroke="#ef4444" stroke-width="1.8"/>
  <text x="327" y="124" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="11">Anion is UNSTABLE</text>
  <text x="327" y="140" text-anchor="middle" fill="#991b1b" font-size="10">Charge on 1 O only</text>
  <text x="327" y="155" text-anchor="middle" fill="#ef4444" font-size="9">→ WEAK acid</text>

  <!-- EXAMPLES BOX -->
  <rect x="10" y="185" width="620" height="108" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="205" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">Examples: Number of =O bonds and acid strength</text>

  <!-- Si row -->
  <rect x="25"  y="212" width="130" height="72" rx="5" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="90"  y="228" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="11">Si(OH)₄</text>
  <text x="90"  y="243" text-anchor="middle" fill="#78350f" font-size="10">0 Si=O bonds</text>
  <text x="90"  y="258" text-anchor="middle" fill="#78350f" font-size="9">Charge on 1 O</text>
  <text x="90"  y="272" text-anchor="middle" fill="#d97706" font-size="9" font-weight="bold">Very weak (pKₐ ~9.9)</text>

  <!-- P row -->
  <rect x="168" y="212" width="130" height="72" rx="5" fill="#fed7aa" stroke="#ea580c" stroke-width="1.2"/>
  <text x="233" y="228" text-anchor="middle" fill="#7c2d12" font-weight="bold" font-size="11">H₃PO₄</text>
  <text x="233" y="243" text-anchor="middle" fill="#7c2d12" font-size="10">1 P=O bond</text>
  <text x="233" y="258" text-anchor="middle" fill="#7c2d12" font-size="9">Charge over 2 O</text>
  <text x="233" y="272" text-anchor="middle" fill="#ea580c" font-size="9" font-weight="bold">Weak (pKₐ ≈ 2.15)</text>

  <!-- S row -->
  <rect x="311" y="212" width="130" height="72" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="376" y="228" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="11">H₂SO₄</text>
  <text x="376" y="243" text-anchor="middle" fill="#991b1b" font-size="10">2 S=O bonds</text>
  <text x="376" y="258" text-anchor="middle" fill="#991b1b" font-size="9">Charge over 3 O (HSO₄⁻)</text>
  <text x="376" y="272" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">Strong (pKₐ ≈ −3)</text>

  <!-- Cl row -->
  <rect x="454" y="212" width="168" height="72" rx="5" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="538" y="228" text-anchor="middle" fill="#7f1d1d" font-weight="bold" font-size="11">HClO₄</text>
  <text x="538" y="243" text-anchor="middle" fill="#7f1d1d" font-size="10">3 Cl=O bonds</text>
  <text x="538" y="258" text-anchor="middle" fill="#7f1d1d" font-size="9">Charge over ALL 4 O (ClO₄⁻)</text>
  <text x="538" y="272" text-anchor="middle" fill="#dc2626" font-size="9" font-weight="bold">V. strong (pKₐ ≈ −10)</text>
</svg>`
      }
    },

    // ─── SUMMARY TABLE ────────────────────────────────────────────────
    {
      id: 'h-summary-table',
      type: 'heading',
      data: { text: 'Summary Table: All Period 3 "Hydroxides"', level: 2 }
    },
    {
      id: 'table-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Properties and acid–base character of Period 3 "hydroxides"',
        headers: ['Compound', 'Formula', 'Bond Type', 'Character', 'Reaction with HCl', 'Reaction with NaOH'],
        rows: [
          ['Sodium hydroxide', 'NaOH', 'Ionic OH⁻', 'Strong base', 'NaOH + HCl → NaCl + H₂O', '—'],
          ['Magnesium hydroxide', 'Mg(OH)₂', 'Ionic OH⁻', 'Weak base', 'Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O', '—'],
          ['Aluminium hydroxide', 'Al(OH)₃', 'Uncertain / mixed', 'Amphoteric', 'Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O', 'Al(OH)₃ + NaOH → NaAl(OH)₄'],
          ['Orthosilicic acid', 'Si(OH)₄', 'Covalent O–H', 'Very weak acid', '—', 'Si(OH)₄ + 2NaOH → Na₂SiO₃ + 3H₂O'],
          ['Phosphoric(V) acid', 'H₃PO₄', 'Covalent O–H', 'Weak acid', '—', 'H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O (3 stages)'],
          ['Sulphuric acid', 'H₂SO₄', 'Covalent O–H', 'Strong acid (1st H)', '—', 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O'],
          ['Perchloric acid', 'HClO₄', 'Covalent O–H', 'Very strong acid', '—', 'HClO₄ + NaOH → NaClO₄ + H₂O']
        ]
      }
    },

    // ─── KEY CALLOUT ─────────────────────────────────────────────────
    {
      id: 'callout-key-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Trend Summary',
        text: '<strong>Ionic OH⁻ → basic:</strong> NaOH > Mg(OH)₂<br><strong>Amphoteric:</strong> Al(OH)₃ (reacts with both acids and bases)<br><strong>Covalent –OH → acidic (increasing strength):</strong> Si(OH)₄ ≪ H₃PO₄ < H₂SO₄ < HClO₄<br><br>Acid strength is governed by <strong>charge delocalization in the conjugate anion</strong>: more =O bonds on the central atom → more stable anion → stronger acid.'
      }
    },

    // ─── CHECKLIST ────────────────────────────────────────────────────
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Classify Period 3 "hydroxides" as ionic (OH⁻) or covalent (–OH)', checked: false },
          { text: 'Write and explain reactions of NaOH and Mg(OH)₂ with HCl', checked: false },
          { text: 'Write equations for Al(OH)₃ reacting with HCl and with NaOH; explain its amphoteric nature', checked: false },
          { text: 'Explain why NaOH is a stronger base than Mg(OH)₂ (lattice energy / solubility)', checked: false },
          { text: 'State the number of =O groups in Si(OH)₄, H₃PO₄, H₂SO₄, HClO₄', checked: false },
          { text: 'Explain what charge delocalisation means and how it relates to acid strength', checked: false },
          { text: 'Explain why Si(OH)₄ is very weak and HClO₄ is very strong using anion stability', checked: false },
          { text: 'Describe the structure of ClO₄⁻ as a resonance hybrid (all bonds identical)', checked: false },
          { text: 'Order acid strength: H₂SO₄ vs H₃PO₄ vs HClO₄ and justify', checked: false }
        ]
      }
    },

    // ─── SUMMARY ──────────────────────────────────────────────────────
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Period 3 "hydroxides" span a huge range of acid–base behaviour: <strong>NaOH and Mg(OH)₂</strong> are ionic (contain OH⁻) and basic; <strong>Al(OH)₃</strong> is amphoteric — it reacts with both HCl and NaOH; <strong>Si, P, S, Cl</strong> form covalent –OH acids of increasing strength. Acid strength is determined by <strong>charge delocalization in the anion</strong>: Si(OH)₄ (0 Si=O bonds, very weak) → H₃PO₄ (1 P=O, weak) → H₂SO₄ (2 S=O, strong) → HClO₄ (3 Cl=O, very strong). The ClO₄⁻ ion is uniquely stable because the −1 charge is spread equally over all four oxygen atoms.'
      }
    }
  ],

  recall: {
    enabled: true,
    cues: [
      {
        id: 'rc1',
        blockId: 'list-overview',
        prompt: 'Classify Period 3 "hydroxides" as ionic or covalent and state their acid–base character.'
      },
      {
        id: 'rc2',
        blockId: 'eq-aloh3-alkali',
        prompt: 'Write equations for Al(OH)₃ reacting with (a) HCl and (b) NaOH. What is the name of the product in (b)?'
      },
      {
        id: 'rc3',
        blockId: 'list-orthosilicic',
        prompt: 'Why is orthosilicic acid Si(OH)₄ an extremely weak acid? Why is HClO₄ one of the strongest acids?'
      },
      {
        id: 'rc4',
        blockId: 'list-mechanism',
        prompt: 'Explain the mechanism by which charge delocalisation determines oxyacid strength. Give the number of =O bonds for H₃PO₄, H₂SO₄, and HClO₄.'
      },
      {
        id: 'rc5',
        blockId: 'svg-clo4-deloc',
        prompt: 'Describe the structure of the ClO₄⁻ ion. Why are all four Cl–O bonds identical?'
      }
    ],
    summaryText: 'Period 3 hydroxides: NaOH, Mg(OH)₂ (ionic OH⁻, basic) → Al(OH)₃ (amphoteric, reacts with acid and NaOH) → Si(OH)₄ (very weak acid) → H₃PO₄ (weak) → H₂SO₄ (strong) → HClO₄ (very strong). Acid strength = stability of conjugate anion = extent of charge delocalization via =O bonds. ClO₄⁻ has charge spread over all 4 O atoms → most stable → strongest acid. Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O; Al(OH)₃ + NaOH → NaAl(OH)₄.',
    ready: false
  },

  evidence: []
};
