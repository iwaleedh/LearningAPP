export const note_olevel_biology_3_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/3 Movement Into And Out Of Cells/3-2-1-osmosis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define osmosis, explain the concept of water potential, and describe the effects of osmosis on plant and animal cells in solutions of different concentrations.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Osmosis?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Osmosis',
        text: '<strong>Osmosis</strong> is the net movement of <strong>water molecules</strong> from a region of <strong>higher water potential</strong> (dilute solution) to a region of <strong>lower water potential</strong> (concentrated solution) through a <strong>partially permeable membrane</strong>.<br/><br/>Osmosis is a <strong>passive process</strong> — it requires <strong>no energy (ATP)</strong>. Only <strong>water</strong> moves by osmosis; solutes cannot cross the partially permeable membrane.'
      }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>Water potential</strong> is a measure of the tendency of water molecules to move. Pure water has the <strong>highest water potential</strong>. Adding solutes <strong>lowers</strong> water potential — the more concentrated the solution, the lower the water potential. Water always moves from high water potential (dilute) to low water potential (concentrated) across a partially permeable membrane.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effects on Plant Cells', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Plant cells have a <strong>cell wall</strong> (rigid) and a <strong>cell membrane</strong> (partially permeable). The large central vacuole contains cell sap. The effects of osmosis on plant cells depend on the surrounding solution.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Effects of osmosis on plant cells in different solutions',
        headers: ['Solution type', 'Direction of water movement', 'Effect on cell', 'State of cell'],
        rows: [
          ['Hypotonic (dilute — lower solute concentration than cell)', 'Water enters cell by osmosis', 'Vacuole swells; cell membrane pushes against cell wall; cell wall resists further expansion', 'Turgid (firm)'],
          ['Isotonic (same concentration as cell)', 'No net movement of water', 'No change in cell volume or pressure', 'Flaccid (limp)'],
          ['Hypertonic (concentrated — higher solute concentration than cell)', 'Water leaves cell by osmosis', 'Vacuole shrinks; cell membrane pulls away from the cell wall', 'Plasmolysed']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Term: Plasmolysis',
        text: '<strong>Plasmolysis</strong> is the process by which the cell membrane pulls away from the cell wall due to water loss by osmosis in a hypertonic solution. The plant cell loses turgor pressure.<br/><br/><strong>Turgor pressure</strong> is the pressure exerted by the cell contents against the cell wall when the cell is turgid — it is vital for supporting plant structure.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effects on Animal Cells', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Animal cells have <strong>no cell wall</strong>, only a cell membrane. This means they are not protected from swelling caused by excess water entry. Red blood cells are the classic example used in examinations.'
      }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Effects of osmosis on animal cells (e.g. red blood cells) in different solutions',
        headers: ['Solution type', 'Direction of water movement', 'Effect on cell', 'State of cell'],
        rows: [
          ['Hypotonic (dilute)', 'Water enters cell by osmosis', 'Cell swells and may burst (lyse) — no cell wall to resist pressure', 'Lysed / burst'],
          ['Isotonic', 'No net movement of water', 'Cell maintains normal shape and volume', 'Normal'],
          ['Hypertonic (concentrated)', 'Water leaves cell by osmosis', 'Cell shrivels and becomes spiky (crenation)', 'Crenated']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Animal cells do <strong>not</strong> become turgid or plasmolysed — these terms apply only to plant cells. Animal cells <strong>lyse</strong> (burst) in dilute solution and <strong>crenate</strong> (shrivel) in concentrated solution. Also, do not say "water concentration" — the correct term is <strong>water potential</strong>.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Osmosis: effects on plant and animal cells in hypotonic, isotonic, and hypertonic solutions',
        svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="11">
  <rect width="560" height="320" fill="#1c3a64" rx="12"/>
  <text x="280" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">Osmosis — Effects on Plant and Animal Cells</text>

  <!-- Column headers -->
  <text x="95" y="45" text-anchor="middle" font-weight="bold" fill="#1d4ed8">Hypotonic (Dilute)</text>
  <text x="280" y="45" text-anchor="middle" font-weight="bold" fill="#15803d">Isotonic</text>
  <text x="465" y="45" text-anchor="middle" font-weight="bold" fill="#b45309">Hypertonic (Conc.)</text>

  <!-- Row label: Plant cell -->
  <text x="10" y="110" font-size="10" font-weight="bold" fill="#374151" transform="rotate(-90,10,110)" text-anchor="middle">Plant cell</text>

  <!-- Plant cell - Hypotonic (Turgid) -->
  <rect x="55" y="60" width="80" height="80" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2.5"/>
  <rect x="65" y="70" width="60" height="60" rx="2" fill="#1250a0" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="72" y="77" width="46" height="46" rx="2" fill="#60a5fa" opacity="0.7"/>
  <text x="95" y="155" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="bold">Turgid</text>
  <text x="95" y="167" text-anchor="middle" font-size="9" fill="#374151">Water enters →</text>
  <text x="95" y="178" text-anchor="middle" font-size="9" fill="#374151">cell swells, firm</text>

  <!-- Plant cell - Isotonic (Flaccid) -->
  <rect x="240" y="65" width="80" height="75" rx="4" fill="#0a3020" stroke="#16a34a" stroke-width="2"/>
  <rect x="252" y="75" width="56" height="55" rx="2" fill="#0a2e1a" stroke="#15803d" stroke-width="1.5"/>
  <rect x="260" y="82" width="40" height="41" rx="2" fill="#0a4a1a" opacity="0.7"/>
  <text x="280" y="155" text-anchor="middle" font-size="10" fill="#15803d" font-weight="bold">Flaccid</text>
  <text x="280" y="167" text-anchor="middle" font-size="9" fill="#374151">No net movement</text>
  <text x="280" y="178" text-anchor="middle" font-size="9" fill="#374151">of water</text>

  <!-- Plant cell - Hypertonic (Plasmolysed) -->
  <rect x="425" y="62" width="80" height="80" rx="4" fill="#532407" stroke="#ea580c" stroke-width="2.5"/>
  <rect x="437" y="74" width="50" height="50" rx="2" fill="#7c2d12" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,2"/>
  <rect x="447" y="82" width="30" height="30" rx="2" fill="#7c2d12" opacity="0.7"/>
  <text x="465" y="155" text-anchor="middle" font-size="10" fill="#c2410c" font-weight="bold">Plasmolysed</text>
  <text x="465" y="167" text-anchor="middle" font-size="9" fill="#374151">Water leaves →</text>
  <text x="465" y="178" text-anchor="middle" font-size="9" fill="#374151">membrane pulls away</text>

  <!-- Row label: Animal cell -->
  <text x="10" y="250" font-size="10" font-weight="bold" fill="#374151" transform="rotate(-90,10,250)" text-anchor="middle">Animal cell</text>

  <!-- Animal cell - Hypotonic (Lysed) -->
  <circle cx="95" cy="228" r="38" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="95" cy="228" r="26" fill="#1250a0" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="95" y="278" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="bold">Lysed (burst)</text>
  <text x="95" y="290" text-anchor="middle" font-size="9" fill="#374151">Swells → bursts</text>
  <text x="95" y="302" text-anchor="middle" font-size="9" fill="#374151">(no cell wall)</text>

  <!-- Animal cell - Isotonic (Normal) -->
  <circle cx="280" cy="228" r="30" fill="#0a3020" stroke="#16a34a" stroke-width="2"/>
  <circle cx="280" cy="228" r="20" fill="#0a2e1a" stroke="#15803d" stroke-width="1"/>
  <text x="280" y="272" text-anchor="middle" font-size="10" fill="#15803d" font-weight="bold">Normal</text>
  <text x="280" y="284" text-anchor="middle" font-size="9" fill="#374151">Normal shape</text>
  <text x="280" y="296" text-anchor="middle" font-size="9" fill="#374151">and volume</text>

  <!-- Animal cell - Hypertonic (Crenated) -->
  <path d="M465,192 Q474,197 480,192 Q488,200 487,210 Q494,218 490,228 Q496,238 490,246 Q488,256 480,260 Q474,267 465,264 Q456,267 450,260 Q442,256 440,246 Q434,238 440,228 Q434,218 443,210 Q442,200 450,192 Q456,185 465,192 Z" fill="#532407" stroke="#ea580c" stroke-width="2"/>
  <circle cx="465" cy="228" r="16" fill="#fdba74" stroke="#c2410c" stroke-width="1"/>
  <text x="465" y="278" text-anchor="middle" font-size="10" fill="#c2410c" font-weight="bold">Crenated</text>
  <text x="465" y="290" text-anchor="middle" font-size="9" fill="#374151">Shrivels → spiky</text>
  <text x="465" y="302" text-anchor="middle" font-size="9" fill="#374151">appearance</text>

  <!-- Water movement arrows -->
  <text x="145" y="105" font-size="18" fill="#3b82f6" text-anchor="middle">←</text>
  <text x="415" y="105" font-size="18" fill="#c2410c" text-anchor="middle">→</text>
  <text x="145" y="240" font-size="18" fill="#3b82f6" text-anchor="middle">←</text>
  <text x="415" y="240" font-size="18" fill="#c2410c" text-anchor="middle">→</text>
</svg>`
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always use the correct IGCSE definition: osmosis involves the movement of <strong>water molecules</strong> (not just "water"), from a region of <strong>higher water potential</strong> to <strong>lower water potential</strong>, through a <strong>partially permeable membrane</strong>. All three phrases must be present in a full-mark answer.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Osmosis is the net movement of water molecules from high water potential (dilute) to low water potential (concentrated) through a partially permeable membrane — no energy required. Plant cells become turgid in dilute solution, flaccid in isotonic solution, and plasmolysed in concentrated solution. Animal cells lyse in dilute solution, remain normal in isotonic solution, and crenate in concentrated solution.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Osmosis moves water from dilute (high water potential) to concentrated (low water potential) through a partially permeable membrane. Plant cells: turgid/flaccid/plasmolysed. Animal cells: lyse/normal/crenate.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'State the full definition of osmosis.',
        answer: 'Osmosis is the net movement of water molecules from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution) through a partially permeable membrane. No energy is required.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'What happens to a plant cell placed in a hypertonic (concentrated) solution?',
        answer: 'Water leaves the cell by osmosis. The vacuole shrinks, the cell membrane pulls away from the cell wall, and the cell becomes plasmolysed (loses turgor pressure).'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-2',
        prompt: 'Why does an animal cell burst in a dilute (hypotonic) solution, but a plant cell does not?',
        answer: 'Animal cells have no cell wall, so water entering by osmosis causes the cell to swell and lyse. Plant cells have a rigid cell wall that resists expansion, so the cell becomes turgid rather than bursting.'
      },
      {
        id: 'cue-4',
        blockId: 'para-1',
        prompt: 'How does adding solutes to water affect its water potential?',
        answer: 'Adding solutes lowers water potential. Pure water has the highest water potential. The more solute is dissolved, the lower the water potential of the solution.'
      },
      {
        id: 'cue-5',
        blockId: 'call-2',
        prompt: 'Define the term "turgor pressure".',
        answer: 'Turgor pressure is the pressure exerted by the cell contents (swollen vacuole) pushing outward against the cell wall. It is what keeps plant tissues firm and is essential for support in non-woody plants.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_3_3_1;
