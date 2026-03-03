export const note_biology_1_2_2 = {
  blocks: [
    {
      id: 'obj-osmosis',
      type: 'objective',
      data: {
        text: 'Understand water potential, osmosis, and the effects of osmotic pressure on plant and animal cells.'
      }
    },
    {
      id: 'h-water-potential',
      type: 'heading',
      data: {
        text: 'Water Potential (Ψ)',
        level: 2
      }
    },
    {
      id: 'p-water-potential-def',
      type: 'paragraph',
      data: {
        text: 'Water potential (Ψ, Greek letter psi) is the measure of the tendency of water molecules to move (diffuse) from one place to another. It has units of pressure (kPa or MPa). Pure distilled water has a water potential of zero (0 kPa) by definition. When solutes dissolve in water, they reduce the water potential, making it negative. The more concentrated the solution, the more negative (lower) the water potential. Water moves by osmosis from regions of high (less negative) water potential to regions of low (more negative) water potential. This movement is driven by the tendency to equalise solute concentration and water potential across a membrane.'
      }
    },
    {
      id: 'p-water-potential-equation',
      type: 'paragraph',
      data: {
        text: 'Water potential is calculated as: Ψ (water potential) = Ψs (solute potential) + Ψp (pressure potential). Solute potential (Ψs, also called osmotic potential) is always negative (or zero for pure water) and is determined by solute concentration. The more dissolved solutes, the more negative Ψs becomes. Pressure potential (Ψp) represents the physical pressure exerted on the solution. In plant cells with a rigid cell wall, when water enters and the cell becomes turgid, the cell wall exerts an inward pressure (wall pressure). This pressure potential is positive in turgid plant cells. In animal cells without a rigid cell wall, pressure potential is normally zero. The equation shows that: pure water (Ψs = 0, Ψp = 0) has Ψ = 0; a dilute solution (slightly negative Ψs, Ψp ≈ 0) has Ψ slightly negative; a concentrated solution (very negative Ψs, Ψp ≈ 0) has Ψ very negative.'
      }
    },
    {
      id: 'eq-water-potential',
      type: 'equation',
      data: {
        html: 'Ψ (water potential) = Ψ<sub>s</sub> (solute potential) + Ψ<sub>p</sub> (pressure potential)<br/>Units: kPa or MPa'
      }
    },
    {
      id: 'h-osmosis',
      type: 'heading',
      data: {
        text: 'Osmosis',
        level: 2
      }
    },
    {
      id: 'p-osmosis-def',
      type: 'paragraph',
      data: {
        text: 'Osmosis is the movement of water molecules across a partially permeable membrane from a region of high water potential (or low solute concentration) to a region of low water potential (or high solute concentration). It is a form of passive transport—no energy (ATP) is required. The driving force is the tendency to dilute solute concentrations on both sides of the membrane until they are equal. From a water potential perspective: water moves from high Ψ to low Ψ. A key point: osmosis moves water, not solutes. The membrane is permeable to water (and small molecules) but not to dissolved salts or large molecules like proteins or starch. If a membrane were permeable to all substances, osmosis would not occur (solutes would diffuse out, eliminating the concentration gradient). The rate of osmosis depends on the magnitude of the water potential difference (gradient) and the surface area of the membrane.'
      }
    },
    {
      id: 'callout-key-osmosis',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Osmosis Definition',
        text: 'Movement of water across a partially permeable membrane from high Ψ to low Ψ (or high [water] to low [water]). Driven by solute concentration difference. Requires selectively permeable membrane. No energy needed (passive). Water moves, not solutes.'
      }
    },
    {
      id: 'h-plant-cells',
      type: 'heading',
      data: {
        text: 'Osmosis in Plant Cells',
        level: 2
      }
    },
    {
      id: 'p-turgidity',
      type: 'paragraph',
      data: {
        text: 'Plant cells have a rigid cell wall that surrounds the cell membrane. When a plant cell is placed in hypotonic solution (low solute concentration, high water potential), water enters the cell by osmosis. The cell membrane remains pressed against the cell wall as water fills the vacuole. This state is called turgidity; the cell is turgid. The cell wall prevents over-expansion, exerting an inward pressure (wall pressure) equal and opposite to the turgor pressure (outward pressure of the cell contents). In a turgid cell, the pressure potential is positive (typically +0.5 to +1.0 MPa), and the cell is rigid and maintains its shape. Turgidity is essential for plant structure: herbaceous plants rely on turgor to maintain upright posture; without turgor, plants wilt.'
      }
    },
    {
      id: 'p-plasmolysis',
      type: 'paragraph',
      data: {
        text: 'When a plant cell is placed in hypertonic solution (high solute concentration, low water potential), the cell sap has higher water potential than the surrounding solution. Water leaves the cell by osmosis, moving into the external solution. The protoplast (cell membrane, cytoplasm, nucleus, organelles) shrinks away from the cell wall, a process called plasmolysis. In plasmolysis, the cell becomes flaccid; the wall pressure falls to zero or negative (tension), and the cell wilts. If the external solution is very concentrated, the plasmolysed cell may not recover even if returned to water (cytoplasm is damaged). If the external solution is moderately hypertonic, the plasmolysed cell is called incipient plasmolysis (just beginning to shrink). If the cell is returned to hypotonic solution before plasmolysis becomes irreversible, water re-enters and the cell becomes turgid again (deplasmolysis). Plasmolysis is used experimentally to demonstrate that the cell membrane is selectively permeable (water leaves) while the cell wall is freely permeable (solute remains inside).'
      }
    },
    {
      id: 'h-animal-cells',
      type: 'heading',
      data: {
        text: 'Osmosis in Animal Cells',
        level: 2
      }
    },
    {
      id: 'p-animal-cells-iso',
      type: 'paragraph',
      data: {
        text: 'Animal cells lack a rigid cell wall and are therefore vulnerable to osmotic damage. In isotonic solution (equal solute concentration inside and outside), water potential is equal on both sides; no net water movement occurs. The cell volume remains constant. Most body fluids are isotonic with cells: blood plasma, tissue fluid, and cerebrospinal fluid are carefully maintained at physiological osmolarity (~0.3 osmol/L or ~0.3 M glucose equivalent). When an animal cell is placed in hypotonic solution (low solute concentration), water enters the cell by osmosis faster than it leaves. The cell swells and may burst, a process called lysis or cytolysis. Red blood cells in hypotonic solution undergo haemolysis (burst), releasing haemoglobin and cell contents. This is why intravenous fluids must be isotonic; hypotonic fluids would cause haemolysis.'
      }
    },
    {
      id: 'p-animal-cells-hyper',
      type: 'paragraph',
      data: {
        text: 'When an animal cell is placed in hypertonic solution (high solute concentration), water leaves the cell by osmosis. The cell shrinks and becomes crenated (spiky, with irregular edges). This is called crenation. Red blood cells in hypertonic solution shrink to a spiky crenated form. Severe dehydration (loss of water due to hypertonic conditions, like excessive sweating without water intake) can cause crenation of blood cells and cellular dysfunction. The body maintains homeostasis by regulating blood osmolarity, ensuring cells are in an isotonic environment. Kidneys excrete excess water or solutes to maintain constant blood osmolarity (~285–295 mOsmol/kg). Derangements in osmolarity (hypernatraemia = high sodium, hyponatraemia = low sodium) cause cellular malfunction: hyponatraemia can cause cerebral oedema (swelling) and seizures; hypernatraemia can cause cell shrinkage.'
      }
    },
    {
      id: 'table-osmotic-effects',
      type: 'comparisonTable',
      data: {
        headers: ['Solution Type', 'Solute Conc.', 'Water Potential', 'Plant Cell Effect', 'Animal Cell Effect'],
        rows: [
          ['Hypertonic', 'High (>cell)', 'Low (<cell)', 'Plasmolysis (shrinks, wall-induced)', 'Crenation (shrinks, spiky)'],
          ['Isotonic', 'Equal (=cell)', 'Equal (=cell)', 'No change (normal)', 'No change (normal)'],
          ['Hypotonic', 'Low (<cell)', 'High (>cell)', 'Turgidity (swells, rigid)', 'Lysis/haemolysis (bursts)']
        ],
        caption: 'Osmotic effects on plant and animal cells'
      }
    },
    {
      id: 'callout-worked-plasmolysis',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Observing Plasmolysis in a Plant Cell',
        text: 'Procedure: Place a thin section of onion epidermal cell on a slide. Add concentrated salt solution (hypertonic). Observe under microscope: protoplast shrinks away from cell wall (plasmolysis). Add water dropwise; protoplast gradually returns to contact cell wall (deplasmolysis). Conclusion: cell membrane is selectively permeable (water leaves, solutes stay), cell wall is permeable (solution penetrates outside membrane).'
      }
    },
    {
      id: 'callout-tip-blood',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Blood Must Be Isotonic',
        text: 'If IV fluid is hypotonic: water enters RBC → haemolysis (burst) → death. If hypertonic: water leaves RBC → crenation → death. Must be isotonic (0.9% saline or 5% glucose) to keep RBCs in normal shape. This is why hospitals use specific IV fluids!'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why is water potential always negative or zero in biological solutions, never positive? Explain how solute particles reduce the free energy of water molecules and why pure water at atmospheric pressure is defined as ψ = 0.',
        apply: 'A plant cell has a solute potential of −800 kPa and a pressure potential of +300 kPa. Calculate its water potential. If it is placed in a solution with ψ = −600 kPa, which direction will water move, and will the cell become more or less turgid?',
        analyze: 'Compare the response of a plant cell and an animal cell to being placed in a hypertonic solution. Explain why plant cells undergo plasmolysis while animal cells undergo crenation, and why plant cells do not lyse in hypotonic solution.',
        evaluate: 'Evaluate the importance of turgor pressure in plant support. Is it more or less important than sclerenchyma fibres and lignified xylem in maintaining plant rigidity? Consider herbaceous vs woody plants.',
      },
      terms: [],
    },
    {
      id: 'checklist-osmosis',
      type: 'checklist',
      data: {
        items: [
          { text: 'Water potential Ψ = Ψs + Ψp; water moves from high to low Ψ', checked: false },
          { text: 'Osmosis: water movement across partially permeable membrane, no ATP required', checked: false },
          { text: 'Plant cells hypertonic → turgid (positive Ψp); hypertonic → plasmolysis (Ψp ≤ 0)', checked: false },
          { text: 'Animal cells isotonic → stable; hypotonic → lysis; hypertonic → crenation', checked: false },
          { text: 'Body maintains blood osmolarity ~285–295 mOsmol/kg for cell homeostasis', checked: false }
        ]
      }
    },
    {
      id: 'summary-osmosis',
      type: 'summary',
      data: {
        text: 'Water potential (Ψ = Ψs + Ψp) quantifies water\'s tendency to move. Osmosis is water movement from high to low Ψ across partially permeable membranes. Plant cells: hypotonic → turgid (Ψp > 0, rigid); hypertonic → plasmolysis (Ψp ≤ 0, wilted). Animal cells: isotonic → normal; hypotonic → lysis (burst); hypertonic → crenation (shrink). Physiological osmolarity ~0.3 M. Blood osmolarity maintained at ~285–295 mOsmol/kg by kidneys.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-water-potential-def',
        prompt: 'Define water potential. What is the Ψ of pure water and why?'
      },
      {
        id: 'cue-2',
        blockId: 'p-water-potential-equation',
        prompt: 'State the water potential equation. Explain Ψs and Ψp.'
      },
      {
        id: 'cue-3',
        blockId: 'p-osmosis-def',
        prompt: 'Define osmosis. Why does it require a partially permeable membrane?'
      },
      {
        id: 'cue-4',
        blockId: 'p-turgidity',
        prompt: 'Describe turgidity in plant cells. Why is it important?'
      },
      {
        id: 'cue-5',
        blockId: 'p-animal-cells-iso',
        prompt: 'Explain the effects of hypotonic, isotonic, and hypertonic solutions on red blood cells.'
      }
    ],
    summaryText: 'Water potential Ψ = Ψs (solute) + Ψp (pressure). Pure water Ψ = 0. Osmosis: water moves high Ψ → low Ψ across partially permeable membrane. Plant cells hypertonic → turgid (Ψp +0.5–+1.0 MPa, rigid); hypertonic → plasmolysis (Ψp ≤ 0, wilts). Animal cells isotonic → normal; hypotonic → lysis; hypertonic → crenation. Blood osmolarity 285–295 mOsmol/kg (isotonic with cells).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Water Potential and Osmosis',
      detail: 'Water potential equation, osmosis definition, and effects on plant and animal cells.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['water-potential', 'osmosis', 'solute-potential', 'pressure-potential', 'turgidity', 'plasmolysis']
    }
  ]
};
