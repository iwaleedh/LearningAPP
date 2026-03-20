/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 10
 * "Intermolecular forces"
 * Source: Pearson Edexcel IAL Chemistry — Section 3G
 */
export const note_chemistry_1_3_10 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe and explain three types of intermolecular force: London (dispersion) forces, permanent dipole-dipole interactions, and hydrogen bonds. State the conditions required for hydrogen bonding. Compare their relative strengths.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'London (Dispersion) Forces', level: 2 },
      terms: []
    },
    {
      id: 'svg-london',
      type: 'svg',
      data: {
        caption: 'London forces arise from instantaneous and induced dipoles. Even non-polar molecules/noble gas atoms have a temporary uneven electron distribution → momentary δ+/δ− → induces a dipole in a neighbouring atom. These weak attractive forces exist in ALL substances.',
        svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Step 1: Non-polar atom -->
  <rect x="5" y="10" width="200" height="178" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="105" y="28" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="12">Step 1: Neutral atom</text>
  <circle cx="105" cy="110" r="50" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <!-- uniform electron cloud shown as small circles -->
  <circle cx="80"  cy="100" r="5" fill="#3b82f6" opacity="0.5"/>
  <circle cx="120" cy="90"  r="5" fill="#3b82f6" opacity="0.5"/>
  <circle cx="115" cy="125" r="5" fill="#3b82f6" opacity="0.5"/>
  <circle cx="85"  cy="130" r="5" fill="#3b82f6" opacity="0.5"/>
  <text x="105" cy="114" text-anchor="middle" fill="#1e40af" font-size="9">nucleus</text>
  <text x="105" y="175" text-anchor="middle" fill="#374151" font-size="10">Electrons spread evenly</text>

  <!-- Step 2: Instantaneous dipole -->
  <rect x="218" y="10" width="200" height="178" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="318" y="28" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="12">Step 2: Instantaneous dipole</text>
  <circle cx="318" cy="110" r="50" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
  <!-- electron cloud shifted left (more e- on left) -->
  <circle cx="290" cy="100" r="7" fill="#f59e0b" opacity="0.7"/>
  <circle cx="285" cy="120" r="7" fill="#f59e0b" opacity="0.7"/>
  <circle cx="295" cy="90"  r="6" fill="#f59e0b" opacity="0.7"/>
  <!-- sparse on right -->
  <circle cx="345" cy="115" r="3" fill="#f59e0b" opacity="0.3"/>
  <text x="292" y="75"  text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold">δ−</text>
  <text x="350" y="108" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="bold">δ+</text>
  <text x="318" y="175" text-anchor="middle" fill="#374151" font-size="10">Random fluctuation creates δ+/δ−</text>

  <!-- Step 3: Induced dipole in neighbour -->
  <rect x="432" y="10" width="242" height="178" rx="8" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
  <text x="553" y="28" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="12">Step 3: Induced dipole attracts</text>
  <!-- first atom with shift -->
  <circle cx="490" cy="110" r="42" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="466" cy="100" r="6" fill="#f59e0b" opacity="0.7"/>
  <circle cx="462" cy="118" r="6" fill="#f59e0b" opacity="0.7"/>
  <text x="458" y="96"  fill="#dc2626" font-size="10" font-weight="bold">δ−</text>
  <text x="512" y="106" fill="#1d4ed8" font-size="10" font-weight="bold">δ+</text>
  <!-- attraction arrow -->
  <line x1="535" y1="110" x2="560" y2="110" stroke="#10b981" stroke-width="2.5"/>
  <polygon points="560,104 574,110 560,116" fill="#10b981"/>
  <!-- neighbour atom: e- attracted toward first atom -->
  <circle cx="605" cy="110" r="42" fill="#bbf7d0" stroke="#10b981" stroke-width="2"/>
  <circle cx="585" cy="108" r="6" fill="#10b981" opacity="0.7"/>
  <circle cx="583" cy="122" r="6" fill="#10b981" opacity="0.7"/>
  <text x="580" y="96"  fill="#dc2626" font-size="10" font-weight="bold">δ−</text>
  <text x="625" y="108" fill="#1d4ed8" font-size="10" font-weight="bold">δ+</text>
  <text x="553" y="168" text-anchor="middle" fill="#065f46" font-size="10">δ+ of atom A attracts e⁻ in atom B → induced dipole → attraction</text>
</svg>`
      },
      terms: ['London dispersion force', 'Instantaneous dipole', 'Induced dipole']
    },
    {
      id: 'key-london',
      type: 'callout',
      data: {
        style: 'key',
        title: 'London Force Strength Depends On…',
        text: '<strong>Number of electrons (polarisability):</strong> More electrons → larger, more diffuse cloud → larger temporary dipoles → stronger London forces.<br/><br/>Examples: F₂ (18e⁻) → weak; Cl₂ (34e⁻) → stronger; Br₂ (70e⁻) → stronger still; I₂ (106e⁻) → strongest. Explains solid I₂ but gas F₂ at room temperature.<br/><br/>London forces act between <strong>all</strong> molecules — even those with other types of IMF.'
      },
      terms: ['London dispersion force', 'Polarisability']
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Hydrogen Bonding', level: 2 },
      terms: []
    },
    {
      id: 'svg-hbond',
      type: 'svg',
      data: {
        caption: 'Hydrogen bonding: a particularly strong dipole-dipole force between an H atom bonded to N, O or F (δ+) and a lone pair on another N, O or F atom. Water: each molecule can form up to 4 H-bonds (2 as donor, 2 as acceptor).',
        svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- H₂O dimer panel -->
  <rect x="5" y="5" width="310" height="210" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="160" y="23" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="13">H₂O — Hydrogen Bonding</text>

  <!-- Molecule 1 (top-left) -->
  <circle cx="80" cy="90"  r="22" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
  <text x="80" y="94" text-anchor="middle" fill="#991b1b" font-size="12" font-weight="bold">O</text>
  <!-- lone pairs -->
  <text x="60" y="77" fill="#374151" font-size="14">:</text>
  <text x="88" y="66" fill="#374151" font-size="14">:</text>
  <!-- H atoms -->
  <line x1="62" y1="100" x2="44" y2="122" stroke="#475569" stroke-width="2.5"/>
  <circle cx="38" cy="130" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="38" y="134" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <text x="52" y="108" fill="#1e40af" font-size="9">δ+</text>
  <line x1="98" y1="100" x2="116" y2="122" stroke="#475569" stroke-width="2.5"/>
  <circle cx="122" cy="130" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="122" y="134" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <text x="120" y="108" fill="#1e40af" font-size="9">δ+</text>
  <text x="68" y="80" fill="#dc2626" font-size="9">δ−</text>

  <!-- H-bond (dashed) between H of mol1 and O of mol2 -->
  <line x1="122" y1="118" x2="185" y2="100" stroke="#f97316" stroke-width="2.5" stroke-dasharray="6,4"/>
  <!-- label -->
  <text x="155" y="104" fill="#c2410c" font-size="9" font-weight="bold">H-bond</text>

  <!-- Molecule 2 (right) -->
  <circle cx="210" cy="80"  r="22" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
  <text x="210" y="84" text-anchor="middle" fill="#991b1b" font-size="12" font-weight="bold">O</text>
  <text x="190" y="67" fill="#374151" font-size="14">:</text>
  <text x="218" y="58" fill="#374151" font-size="14">:</text>
  <line x1="192" y1="90" x2="174" y2="112" stroke="#475569" stroke-width="2.5"/>
  <circle cx="168" cy="120" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="168" y="124" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <line x1="228" y1="90" x2="246" y2="112" stroke="#475569" stroke-width="2.5"/>
  <circle cx="252" cy="120" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="252" y="124" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <text x="208" y="66" fill="#dc2626" font-size="9">δ−</text>

  <!-- Lone pair labels -->
  <text x="60" y="185" fill="#374151" font-size="10">Lone pair on O acts as</text>
  <text x="60" y="199" fill="#374151" font-size="10">H-bond acceptor (attracts δ+H)</text>

  <!-- Conditions panel -->
  <rect x="328" y="5" width="345" height="210" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="500" y="24" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="13">Conditions for H-bonding</text>

  <rect x="338" y="35" width="325" height="50" rx="6" fill="#fde68a" stroke="#f59e0b" stroke-width="1"/>
  <text x="500" y="52" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">DONOR molecule must have:</text>
  <text x="500" y="70" text-anchor="middle" fill="#374151" font-size="10">H directly bonded to N, O or F (small, very electronegative)</text>

  <rect x="338" y="95" width="325" height="50" rx="6" fill="#fde68a" stroke="#f59e0b" stroke-width="1"/>
  <text x="500" y="112" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">ACCEPTOR molecule must have:</text>
  <text x="500" y="130" text-anchor="middle" fill="#374151" font-size="10">Lone pair on N, O or F to accept the δ+ H</text>

  <rect x="338" y="155" width="325" height="50" rx="6" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
  <text x="500" y="172" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="11">Strength comparison (approximate):</text>
  <text x="500" y="190" text-anchor="middle" fill="#374151" font-size="10">London forces &lt; dipole-dipole &lt; H-bonds &lt; ionic / cov. bonds</text>
  <text x="500" y="205" text-anchor="middle" fill="#374151" font-size="9">(~1–5 kJ mol⁻¹) (&lt;10 kJ mol⁻¹)  (~10–40 kJ mol⁻¹) (~200–900 kJ mol⁻¹)</text>
</svg>`
      },
      terms: ['Hydrogen bond', 'H-bond donor', 'H-bond acceptor', 'Dipole-dipole force']
    },
    {
      id: 'tip-hbond-anomalies',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Anomalous Properties Caused by H-bonding',
        text: 'Water&#x2019;s H-bonding explains its unusually high m.p./b.p. compared with H₂S, H₂Se, H₂Te: those lack H-bond donors because S/Se/Te are not electronegative enough.<br/><br/>Ice is LESS DENSE than liquid water because H-bonds force an open hexagonal lattice in ice, with larger average spacing between molecules than in liquid water.<br/><br/>HF has a similarly high b.p. compared with HCl due to H-bonding (even though HF can only donate one H-bond per molecule vs two in H₂O).'
      },
      terms: ['Hydrogen bond', 'Anomalous boiling point', 'Ice density']
    }
  ],
  presentationSlides: [
    {
      layout: 'bento',
      title: 'Intermolecular Forces',
      subtitle: 'WCH11 — Chemistry Topic 3.10',
      elements: [
        { delay: 0, colSpan: 1, icon: '⚡', title: 'London Dispersion Forces', html: 'Present in <em>all</em> molecules (polar and non-polar).<br/>Caused by <strong>instantaneous dipoles</strong> inducing temporary dipoles in neighbours.<br/>Strength increases with number of electrons (more polarisable).' },
        { delay: 1, colSpan: 1, icon: '⊕⊖', title: 'Permanent Dipole–Dipole', html: 'Between polar molecules with permanent δ+ and δ− ends.<br/>Stronger than London forces for molecules of similar mass.<br/>e.g. HCl, SO₂, CH₂Cl₂.' },
        { delay: 2, colSpan: 1, icon: '💧', title: 'Hydrogen Bonding', html: 'Strongest intermolecular force.<br/>Requires H directly bonded to <strong>F, O, or N</strong>.<br/>H interacts with a lone pair on another F/O/N atom.<br/>e.g. H₂O, HF, NH₃, alcohols, DNA base pairs.' },
        { delay: 3, colSpan: 2, icon: '📈', title: 'Effect on Boiling Point', html: '<strong>Strength order:</strong> London < dipole–dipole < hydrogen bonding.<br/>All IMF types increase with molecular size.<br/>H₂O bp (100°C) &gt;&gt; H₂S bp (−60°C) despite H₂S having larger Mᵣ — hydrogen bonding in H₂O dominates.' },
      ]
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Three IMF types: (1) London forces — instantaneous/induced dipoles, present in ALL substances, increase with electron count; (2) Permanent dipole-dipole — between polar molecules; (3) Hydrogen bonds — requires H directly on N/O/F, lone pair on N/O/F, strongest IMF (~10-40 kJ/mol). H-bonding explains water&#x2019;s high b.p. and ice density anomaly.',
    cues: [
      { id: 'c1', blockId: 'svg-london', prompt: 'Explain the origin of London dispersion forces. Why do larger molecules (e.g. I₂ vs F₂) have stronger London forces?' },
      { id: 'c2', blockId: 'key-london', prompt: 'List the boiling points trend F₂ < Cl₂ < Br₂ < I₂ and explain it using London force strength.' },
      { id: 'c3', blockId: 'svg-hbond', prompt: 'State the two conditions that must be met for a hydrogen bond to form. Identify donor and acceptor in an H₂O dimer.' },
      { id: 'c4', blockId: 'tip-hbond-anomalies', prompt: 'Why is the boiling point of H₂O much higher than H₂S? Why is ice less dense than liquid water?' },
      { id: 'c5', blockId: 'svg-hbond', prompt: 'Rank these interactions from weakest to strongest: covalent bonds, London forces, hydrogen bonds, ionic bonds. Give typical energy ranges.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
