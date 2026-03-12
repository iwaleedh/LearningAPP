export const note_biology_1_1_6 = {
  blocks: [
    {
      id: 'obj-blood-vessels',
      type: 'objective',
      data: {
        text: 'Describe the structure of arteries, veins and capillaries and relate their structure to their function. Understand how the structure of each vessel type is adapted to the pressures and flow requirements they experience.',
      },
    },
    {
      id: 'h-vessel-overview',
      type: 'heading',
      data: { text: 'Overview of Blood Vessel Types', level: 2 },
    },
    {
      id: 'p-vessel-intro',
      type: 'paragraph',
      data: {
        text: 'The body contains several types of blood vessel forming a continuous network. Arteries transport blood away from the heart — usually at high pressure — to the tissues. Arterioles are smaller branches of arteries that carry blood into capillaries. Veins transport blood back to the heart at low pressure. Venules carry blood from capillaries to veins. Capillaries are microscopic vessels that carry blood directly to cells and are the site of exchange. Blood flows through the lumen; the size of the lumen varies with vessel type.',
      },
    },
    {
      id: 'h-wall-layers',
      type: 'heading',
      data: { text: 'The Three Tunics of Blood Vessel Walls', level: 2 },
    },
    {
      id: 'list-tunicae',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Tunica intima (innermost) — thin layer of smooth endothelium (one cell thick); reduces friction; in capillaries, this is the only layer',
          'Tunica media (middle) — circular layer of smooth muscle and elastic fibres; controls vessel diameter by vasoconstriction/vasodilation',
          'Tunica adventitia (outermost) — fibrous connective tissue; anchors the vessel to surrounding tissues; provides strength',
        ],
      },
    },
    {
      id: 'h-arteries',
      type: 'heading',
      data: { text: 'Arteries', level: 2 },
    },
    {
      id: 'p-arteries',
      type: 'paragraph',
      data: {
        text: 'Arteries carry blood at high pressure away from the heart. Their defining feature is a thick tunica media containing abundant elastic fibres. This elastic tissue stretches when the ventricles contract (systole), then recoils when the ventricles relax (diastole), maintaining continuous blood flow and smoothing out the pulsatile pressure from the heartbeat. The smooth muscle layer allows vasoconstriction and vasodilation to regulate blood distribution to different organs. The narrow lumen and thick walls keep blood pressure high during transport.',
      },
    },
    {
      id: 'callout-key-arteries',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Arterial Adaptations',
        text: '• Thick tunica media with elastic fibres → stretches during systole, recoils during diastole → maintains pressure between heartbeats (windkessel effect)\n• Smooth muscle → vasoconstriction/vasodilation → controls blood flow distribution\n• Narrow lumen → maintains high pressure for long-distance transport\n• Thick walls → withstand high blood pressure without rupture',
      },
    },
    {
      id: 'h-veins',
      type: 'heading',
      data: { text: 'Veins', level: 2 },
    },
    {
      id: 'p-veins',
      type: 'paragraph',
      data: {
        text: 'Veins return blood to the heart at low pressure. They have a wider lumen than arteries, thinner walls (less elastic and smooth muscle tissue), and contain semilunar valves. The thin walls and wide lumen offer little resistance to blood flow at low pressure. Valves prevent backflow, particularly in the legs where blood must travel against gravity. Venous return depends on the skeletal muscle pump (contracting muscles squeeze veins), the respiratory pump (breathing creates pressure changes that draw blood toward the heart), and the low pressure at the right atrium.',
      },
    },
    {
      id: 'callout-key-veins',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Venous Adaptations',
        text: '• Wide lumen → low resistance to flow at low pressure\n• Thin walls → less muscular (low pressure, less recoil needed)\n• Semilunar pocket valves → prevent backflow, especially against gravity in limbs\n• Large volume capacity → veins hold ~70% of total blood volume at rest (blood reservoir)',
      },
    },
    {
      id: 'h-capillaries',
      type: 'heading',
      data: { text: 'Capillaries', level: 2 },
    },
    {
      id: 'p-capillaries',
      type: 'paragraph',
      data: {
        text: 'Capillaries are the site of exchange between blood and tissue cells. They have walls consisting of just a single layer of endothelial cells (tunica intima only), with a basement membrane. This very thin wall provides a short diffusion distance for gases, nutrients, and waste products. The diameter of capillaries is approximately 7–10 µm — barely enough for one red blood cell to pass through at a time. The huge number of capillaries gives a very large total surface area for exchange. Blood flow is slow through capillaries, maximising time for exchange.',
      },
    },
    {
      id: 'callout-key-capillaries',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Capillary Adaptations',
        text: '• Wall = single endothelium layer only → minimal diffusion distance\n• Very small diameter (~8 µm) → large total surface area; slows blood flow\n• Gaps between endothelial cells (fenestrations) → allows fluid and small molecules to pass into tissues\n• Basement membrane → selective barrier',
      },
    },
    {
      id: 'table-vessel-comparison',
      type: 'comparisonTable',
      data: {
        caption: 'Structural and functional comparison of blood vessels',
        headers: ['Feature', 'Artery', 'Vein', 'Capillary'],
        rows: [
          ['Lumen diameter', 'Narrow (relative to wall)', 'Wide (relative to wall)', 'Very narrow (~8 µm)'],
          ['Wall thickness', 'Very thick', 'Thin', 'One cell thick'],
          ['Tunica media', 'Thick — elastic fibres + smooth muscle', 'Thin — some smooth muscle', 'Absent'],
          ['Elastic fibres', 'Abundant', 'Few', 'None'],
          ['Semilunar valves', 'None (except aortic/pulmonary)', 'Present — prevents backflow', 'None'],
          ['Blood pressure', 'High (~120/80 mmHg in aorta)', 'Low (~5–10 mmHg)', 'Medium (~30 mmHg in arterioles → ~10 mmHg in venules)'],
          ['Blood flow direction', 'Away from heart', 'Toward heart', 'From arteriole to venule'],
          ['Function', 'Transport at high pressure', 'Return at low pressure', 'Exchange of materials'],
        ],
      },
    },
    {
      id: 'svg-artery-vein-crosssection',
      type: 'svg',
      data: {
        caption: 'Cross-section comparison of an artery (left) and a vein (right), showing tunica layers and relative lumen sizes',
        svg: `<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>.txt{fill:#1f2937;} .dim{fill:#6b7280;} .lbl{fill:#374151;font-size:11px;}</style>
  </defs>
  <!-- ARTERY (left) -->
  <!-- Tunica adventitia (outermost) -->
  <circle cx="140" cy="130" r="90" fill="#fde8d0" stroke="#9a3412" stroke-width="1.5"/>
  <!-- Tunica media -->
  <circle cx="140" cy="130" r="68" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <!-- Tunica intima -->
  <circle cx="140" cy="130" r="46" fill="#fee2e2" stroke="#b91c1c" stroke-width="1.5"/>
  <!-- Lumen (narrow) -->
  <circle cx="140" cy="130" r="28" fill="#bfdbfe"/>
  <!-- ARTERY labels -->
  <text x="140" y="134" text-anchor="middle" fill="#1d4ed8" font-size="10" font-weight="bold">Lumen</text>
  <line x1="168" y1="130" x2="195" y2="115" stroke="#b91c1c" stroke-width="1"/>
  <text x="198" y="112" fill="#b91c1c" font-size="10">Tunica intima</text>
  <line x1="175" y1="110" x2="200" y2="92" stroke="#dc2626" stroke-width="1"/>
  <text x="203" y="89" fill="#dc2626" font-size="10">Tunica media</text>
  <text x="203" y="101" fill="#dc2626" font-size="10">(thick — muscle +</text>
  <text x="203" y="113" fill="#dc2626" font-size="10">elastic fibres)</text>
  <line x1="180" y1="90" x2="200" y2="72" stroke="#9a3412" stroke-width="1"/>
  <text x="203" y="69" fill="#9a3412" font-size="10">Tunica adventitia</text>
  <text x="140" y="248" text-anchor="middle" fill="#1f2937" font-weight="bold" font-size="13">ARTERY</text>
  <text x="140" y="263" text-anchor="middle" class="dim" font-size="10">Narrow lumen · Thick media</text>
  <!-- VEIN (right) -->
  <!-- Tunica adventitia -->
  <circle cx="400" cy="130" r="88" fill="#e0e7ff" stroke="#3730a3" stroke-width="1.5"/>
  <!-- Tunica media (thin) -->
  <circle cx="400" cy="130" r="70" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5"/>
  <!-- Tunica intima -->
  <circle cx="400" cy="130" r="60" fill="#ddd6fe" stroke="#7c3aed" stroke-width="1.5"/>
  <!-- Lumen (wide) -->
  <circle cx="400" cy="130" r="55" fill="#bfdbfe"/>
  <!-- Valve symbol inside vein -->
  <path d="M 375,110 L 400,130 L 425,110" stroke="#1d4ed8" stroke-width="1.5" fill="none"/>
  <text x="400" y="145" text-anchor="middle" fill="#1d4ed8" font-size="9">valve</text>
  <!-- VEIN labels -->
  <line x1="430" y1="130" x2="455" y2="115" stroke="#7c3aed" stroke-width="1"/>
  <text x="458" y="112" fill="#7c3aed" font-size="10">Tunica intima</text>
  <line x1="445" y1="115" x2="455" y2="96" stroke="#4f46e5" stroke-width="1"/>
  <text x="458" y="93" fill="#4f46e5" font-size="10">Tunica media</text>
  <text x="458" y="105" fill="#4f46e5" font-size="10">(thin)</text>
  <line x1="455" y1="80" x2="458" y2="74" stroke="#3730a3" stroke-width="1"/>
  <text x="458" y="71" fill="#3730a3" font-size="10">Tunica adventitia</text>
  <text x="400" y="248" text-anchor="middle" fill="#1f2937" font-weight="bold" font-size="13">VEIN</text>
  <text x="400" y="263" text-anchor="middle" class="dim" font-size="10">Wide lumen · Thin media · Valve</text>
</svg>`,
      },
    },
    {
      id: 'callout-tip-vessel-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Structure–Function Pairing',
        text: 'For "explain" questions, always pair a structural feature with how it helps the vessel function. For example: "Capillary walls are one cell thick, which enables quick diffusion due to the short diffusion distance." Remember: muscle tissue contracts (active narrowing) and elastic tissue recoils (passive, to smooth out pressure fluctuations). Capillary walls are one cell thick — they do NOT have cell walls.',
      },
    },
    {
      id: 'h-arterioles',
      type: 'heading',
      data: { text: 'Arterioles: The Control Valves', level: 2 },
    },
    {
      id: 'p-arterioles',
      type: 'paragraph',
      data: {
        text: 'Arterioles are small branches of arteries that lead into capillary beds. They have relatively more smooth muscle in their walls than arteries, allowing fine control of blood flow into capillaries. Vasoconstriction of arterioles reduces blood flow to a capillary bed; vasodilation increases it. This allows the body to redistribute blood to active tissues (e.g. muscles during exercise) and away from resting tissues. Arterioles are sometimes called "resistance vessels" because they contribute most to total peripheral resistance, which determines blood pressure.',
      },
    },
    {
      id: 'callout-we-blood-vessels',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identifying a Blood Vessel from a Micrograph',
        text: 'A blood vessel has: very thick walls; narrow lumen; abundant elastic tissue in the wall; no valves visible.\n\nIdentification: ARTERY\n\nReasoning: Thick walls and abundant elastic tissue indicate it must withstand/smooth out high pressure from the heart. Narrow lumen relative to wall thickness is characteristic of arteries. No valves are needed because pressure is high enough to prevent backflow.',
      },
    },
    {
      id: 'checklist-blood-vessels',
      type: 'checklist',
      data: {
        items: [
          { text: 'Name the three layers (tunicae) of artery and vein walls', checked: false },
          { text: 'Explain how the elastic fibres in arteries maintain blood pressure between heartbeats', checked: false },
          { text: 'Explain why veins need valves but arteries generally do not', checked: false },
          { text: 'Describe the wall structure of a capillary and explain why it is adapted for exchange', checked: false },
          { text: 'Compare relative wall thickness, lumen size, and pressure in arteries, veins, and capillaries', checked: false },
          { text: 'Explain how arterioles regulate blood distribution to tissues', checked: false },
          { text: 'From a micrograph description, identify whether a vessel is artery, vein, or capillary', checked: false },
        ],
      },
    },
    {
      id: 'summary-blood-vessels',
      type: 'summary',
      data: {
        text: 'Blood vessels all have three tunics (intima, media, adventitia) except capillaries (one endothelial cell thick only). Arteries: thick elastic media → withstand and smooth high-pressure pulsatile flow; narrow lumen; smooth muscle for vasoconstriction/vasodilation. Veins: thin walls; wide lumen; pocket valves prevent backflow; return blood at low pressure with help of skeletal muscle pump. Capillaries: single endothelial layer → minimal diffusion distance; slow flow; large surface area → site of exchange. Arterioles have proportionally high smooth muscle → fine control of blood flow to tissues (peripheral resistance).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-tunicae', prompt: 'Name the three layers (tunicae) of blood vessel walls and state the function of each.' },
      { id: 'cue-2', blockId: 'p-arteries', prompt: 'How do elastic fibres in arteries allow them to maintain blood pressure between heartbeats?' },
      { id: 'cue-3', blockId: 'p-veins', prompt: 'Why do veins need valves? Describe two mechanisms that assist venous return.' },
      { id: 'cue-4', blockId: 'p-capillaries', prompt: 'Describe the wall structure of a capillary and explain how it is adapted for efficient exchange.' },
      { id: 'cue-5', blockId: 'table-vessel-comparison', prompt: 'Compare any artery and vein in terms of: lumen size, wall thickness, elastic fibres, valves, and blood pressure.' },
    ],
    summaryText: 'Arteries: thick elastic walls, narrow lumen, high pressure, no valves (except exit). Veins: thin walls, wide lumen, low pressure, pocket valves. Capillaries: one cell thick, tiny diameter, site of exchange. Three tunicae: intima (endothelium), media (muscle+elastic), adventitia (fibrous). Arterioles = resistance vessels, control blood distribution.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Blood vessel wall stress', detail: 'Laplace\'s law: wall tension = pressure × radius. Large vessels like the aorta experience enormous wall stress despite the elastic wall compensating. This explains why aneurysms (focal dilations) grow progressively — larger radius → greater wall tension → more dilation.', year: '2005', source: 'Nichols WW, Vascular Physiology', tags: ['blood vessels', 'pressure'] },
  ],
};
