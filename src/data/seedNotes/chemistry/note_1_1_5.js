/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 5
 * "Empirical and molecular formulae"
 * Source: wch11-1.pdf — Spec refs: 1.1, 1.6, 1.8(iii)
 */

export const note_chemistry_1_1_5 = {
    blocks: [
        {
            id: 'objective-block',
            type: 'objective',
            data: {
                text: 'Use experimental data (percentage composition or combustion analysis) to calculate empirical formulae; determine molecular formulae from empirical formulae and molar mass.',
            },
            terms: [],
        },

        // ── DEFINITIONS ───────────────────────────────────────────────────────
        {
            id: 'h-defs',
            type: 'heading',
            data: { text: 'Definitions', level: 2 },
            terms: [],
        },
        {
            id: 'table-defs',
            type: 'comparisonTable',
            data: {
                caption: 'Empirical formula vs molecular formula',
                headers: ['Formula type', 'What it shows', 'Example (glucose)'],
                rows: [
                    ['Empirical formula', 'Simplest whole-number ratio of atoms of each element', 'CH₂O'],
                    ['Molecular formula', 'Actual number of atoms in one molecule', 'C₆H₁₂O₆'],
                ],
            },
            terms: ['Empirical formula', 'Molecular formula'],
        },
        {
            id: 'eq-n',
            type: 'equation',
            data: {
                html: 'Molecular formula = n × Empirical formula&emsp;&emsp;n = <span class="nb-frac"><span class="nb-num">M<sub>r</sub>(molecular)</span><span class="nb-den">M<sub>r</sub>(empirical)</span></span>',
                caption: 'n is a positive whole number (1, 2, 3, …). The molecular formula is always a whole-number multiple of the empirical formula.',
            },
            terms: ['Empirical formula', 'Molecular formula'],
        },

        // ── METHOD: EMPIRICAL FROM % COMPOSITION ─────────────────────────────
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Finding Empirical Formula from % Composition', level: 2 },
            terms: [],
        },
        {
            id: 'keybox-method',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Steps — Empirical Formula from % Composition',
                text: '1. Assume 100 g of compound → % directly becomes grams\n2. Divide mass of each element by its Aᵣ → gives moles\n3. Divide all mole values by the smallest → gives simplest ratio\n4. If ratio is not whole numbers, multiply all by a small integer (×2, ×3, ×4) until whole numbers are obtained\n5. Write the empirical formula',
            },
            terms: ['Empirical formula'],
        },

        // ── ANIMATED STEP-BY-STEP SVG ─────────────────────────────────────────
        {
            id: 'svg-steps',
            type: 'svg',
            data: {
                caption: 'Step-by-step: empirical formula from % composition',
                svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four step process to find empirical formula from percentage composition">
  <style>.s{font-family:sans-serif;font-size:12px;fill:#111} .h{font-size:11px;font-weight:bold} .sub{font-size:10px;fill:#6b7280}</style>
  <!-- Step 1 -->
  <rect x="10" y="8"   width="250" height="54" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="20" y="26"  class="s h" fill="#92400e">Step 1: Assume 100 g</text>
  <text x="20" y="44"  class="s">40.0% C → 40.0 g   |   6.7% H → 6.7 g</text>
  <text x="20" y="56"  class="sub">53.3% O → 53.3 g</text>

  <!-- Step 2 -->
  <rect x="300" y="8"  width="250" height="54" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="310" y="26" class="s h" fill="#5b21b6">Step 2: Divide by Aᵣ → moles</text>
  <text x="310" y="44" class="s">C: 40.0÷12=3.33   H: 6.7÷1=6.7</text>
  <text x="310" y="56" class="sub">O: 53.3÷16=3.33</text>

  <!-- Arrow row 1 → 2 -->
  <line x1="260" y1="35" x2="298" y2="35" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arrE)"/>

  <!-- Step 3 -->
  <rect x="10" y="90"  width="250" height="54" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="20" y="108" class="s h" fill="#14532d">Step 3: Divide by smallest (3.33)</text>
  <text x="20" y="126" class="s">C: 3.33÷3.33=1   H: 6.7÷3.33=2</text>
  <text x="20" y="138" class="sub">O: 3.33÷3.33=1  → ratio C:H:O = 1:2:1</text>

  <!-- Step 4 -->
  <rect x="300" y="90" width="250" height="54" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="310" y="108" class="s h" fill="#9d174d">Step 4: Write empirical formula</text>
  <text x="310" y="130" class="s" font-size="16" font-weight="bold">CH₂O</text>

  <!-- Arrow step 2→3 (diagonal) -->
  <line x1="298" y1="62" x2="260" y2="90" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arrE)"/>
  <!-- Arrow step 3→4 -->
  <line x1="260" y1="117" x2="298" y2="117" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arrE)"/>

  <!-- Step 5: Molecular formula -->
  <rect x="120" y="175" width="320" height="100" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
  <text x="280" y="196" text-anchor="middle" class="s h" fill="#0c4a6e">Step 5: Find molecular formula (Mᵣ given = 180)</text>
  <text x="280" y="218" text-anchor="middle" class="s">Mᵣ(CH₂O) = 12+2+16 = 30</text>
  <text x="280" y="238" text-anchor="middle" class="s">n = 180 ÷ 30 = 6</text>
  <text x="280" y="262" text-anchor="middle" font-size="15" font-weight="bold" fill="#0c4a6e">Molecular formula = C₆H₁₂O₆ (glucose)</text>

  <!-- Arrow 4→5 -->
  <line x1="280" y1="144" x2="280" y2="173" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrE)"/>

  <defs>
    <marker id="arrE" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#6366f1"/>
    </marker>
  </defs>
</svg>`,
            },
            terms: ['Empirical formula', 'Molecular formula'],
        },

        // ── WORKED EXAMPLES ───────────────────────────────────────────────────
        {
            id: 'h-worked',
            type: 'heading',
            data: { text: 'Worked Examples', level: 2 },
            terms: [],
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example 1 — Simple organic compound (from PDF p.22)',
                text: 'Calculate the empirical formula of a compound with C (1.8 g), O (0.48 g), H (0.3 g).\n\nStep 1: Divide by Aᵣ:\n  C: 1.8 ÷ 12 = 0.15 mol\n  H: 0.3 ÷ 1  = 0.30 mol\n  O: 0.48 ÷ 16 = 0.03 mol\n\nStep 2: Divide by smallest (0.03):\n  C: 0.15/0.03 = 5\n  H: 0.30/0.03 = 10\n  O: 0.03/0.03 = 1\n\nEmpirical formula: C₅H₁₀O',
            },
            terms: ['Empirical formula'],
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example 2 — Molecular formula from empirical formula (from PDF p.22)',
                text: 'Calculate the molecular formula of a compound with empirical formula CH₂ and Mᵣ = 84.\n\nStep 1: Mᵣ of empirical unit (CH₂) = 12 + 2×1 = 14\nStep 2: n = 84 ÷ 14 = 6\nStep 3: Molecular formula = (CH₂)₆ = C₆H₁₂',
            },
            terms: ['Empirical formula', 'Molecular formula'],
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example 3 — Iron oxide (fractional ratio)',
                text: 'An iron oxide contains 70.0% Fe and 30.0% O. Find the empirical formula.\n\nStep 1 (assume 100 g): Fe = 70.0 g, O = 30.0 g\nStep 2 (÷ Aᵣ): Fe: 70.0÷56 = 1.25 mol; O: 30.0÷16 = 1.875 mol\nStep 3 (÷ smallest = 1.25): Fe: 1.00; O: 1.50\nStep 4 (× 2 to clear 0.5): Fe: 2; O: 3\n\nEmpirical formula: Fe₂O₃',
            },
            terms: ['Empirical formula'],
        },

        // ── TABLE: COMMON EXAMPLES ────────────────────────────────────────────
        {
            id: 'h-table',
            type: 'heading',
            data: { text: 'Common Empirical / Molecular Formula Pairs', level: 2 },
            terms: [],
        },
        {
            id: 'table-examples',
            type: 'comparisonTable',
            data: {
                caption: 'Examples of empirical and molecular formulae',
                headers: ['Compound', 'Empirical', 'Molecular', 'Mᵣ', 'n'],
                rows: [
                    ['Glucose', 'CH₂O', 'C₆H₁₂O₆', '180', '6'],
                    ['Hydrogen peroxide', 'HO', 'H₂O₂', '34', '2'],
                    ['Ethene', 'CH₂', 'C₂H₄', '28', '2'],
                    ['Benzene', 'CH', 'C₆H₆', '78', '6'],
                    ['Formaldehyde', 'CH₂O', 'CH₂O', '30', '1 (same)'],
                    ['Iron(III) oxide', 'Fe₂O₃', 'Fe₂O₃', '160', '1 (same)'],
                ],
            },
            terms: ['Empirical formula', 'Molecular formula'],
        },

        // ── HANDLING FRACTIONAL RATIOS ────────────────────────────────────────
        {
            id: 'h-frac',
            type: 'heading',
            data: { text: 'Handling Fractional Ratios', level: 2 },
            terms: [],
        },
        {
            id: 'keybox-frac',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Idea — Dealing with Non-Whole Ratios',
                text: 'If you get a ratio ending in .5 → multiply all values by 2\nIf you get a ratio ending in .33 or .67 → multiply all by 3\nIf you get a ratio ending in .25 or .75 → multiply all by 4\n\nAlways multiply ALL elements in the ratio — not just the fractional ones.',
            },
            terms: ['Empirical formula'],
        },

        // ── EXAM CHECKLIST ────────────────────────────────────────────────────
        {
            id: 'h-tips',
            type: 'heading',
            data: { text: 'Exam Checklist', level: 2 },
            terms: [],
        },
        {
            id: 'checklist-tips',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Assume 100 g so that % values directly equal mass in grams', checked: false },
                    { text: 'Divide each mass by Aᵣ (not Mᵣ) to get moles', checked: false },
                    { text: 'Divide all mole values by the smallest mole value', checked: false },
                    { text: 'If ratio includes .5, multiply all by 2; for .33/.67 multiply by 3', checked: false },
                    { text: 'To find molecular formula: n = Mᵣ(molecular) ÷ Mᵣ(empirical), then multiply all subscripts by n', checked: false },
                    { text: 'Check: Mᵣ of molecular formula must match the given molar mass', checked: false },
                    { text: 'Watch brackets in formulae: Ca(NO₃)₂ means × 2 applies to N and O', checked: false },
                ],
            },
            terms: [],
        },

        // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────

        // ── SUMMARY ───────────────────────────────────────────────────────────
        // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
        {
          id: 'bloom-understand',
          type: 'callout',
          data: {
            style: 'key',
            title: '🧠 Deeper Understanding — Why It Matters',
            text: 'Understand: The empirical formula reveals the simplest ratio of atoms but hides the actual molecule size. Glucose (C₆H₁₂O₆) and methanal (CH₂O) share the same empirical formula CH₂O — you need Mᵣ data to distinguish them.\n\nApply: A compound contains 52.2% C, 13.0% H and 34.8% O by mass. Its Mᵣ is 46. Determine both the empirical and molecular formula. (Answer: empirical = C₂H₆O, molecular = C₂H₆O — they are the same because n = 1.)\n\nAnalyze: When you divide moles by the smallest value and get 1.5, why must you multiply all ratios by 2? What mathematical principle ensures the final subscripts are whole numbers?\n\nEvaluate: A student determines the empirical formula of a hydrocarbon as CH₃ from combustion data. They claim the molecular formula must be C₂H₆ because "you just double everything." Is this always valid? Under what circumstances could the molecular formula be C₃H₉ or higher multiples?'
          },
          terms: []
        },
        {
            id: 'summary-block',
            type: 'summary',
            data: {
                text: 'Empirical formula is the simplest whole-number atom ratio; molecular formula is the actual atoms per molecule. To find empirical formula: assume 100 g, divide by Aᵣ, divide by smallest moles, multiply to clear fractions. Find molecular formula by n = Mᵣ(molecular) ÷ Mᵣ(empirical), then multiply empirical subscripts by n.',
            },
            terms: [],
        },
    ],

    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-defs', prompt: 'Distinguish empirical formula from molecular formula with an example.' },
            { id: 'cue-2', blockId: 'keybox-method', prompt: 'State the four steps for finding empirical formula from % composition.' },
            { id: 'cue-3', blockId: 'callout-we1', prompt: 'Find the empirical formula of a compound with C=1.8g, H=0.3g, O=0.48g.' },
            { id: 'cue-4', blockId: 'callout-we3', prompt: 'An iron oxide has 70% Fe and 30% O. Find the empirical formula.' },
            { id: 'cue-5', blockId: 'keybox-frac', prompt: 'A ratio gives 1:1.5. What do you do to get whole numbers?' },
        ],
        summaryText: 'Empirical formula is the simplest whole-number atom ratio; molecular formula is the actual atoms per molecule. To find empirical formula: assume 100 g, divide by Aᵣ, divide by smallest moles, multiply to clear fractions. Find molecular formula by n = Mᵣ(molecular) ÷ Mᵣ(empirical), then multiply empirical subscripts by n.',
        ready: false,
    },

    evidence: [
        { id: 'ev-1', title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)', detail: 'Section 1D: Empirical and molecular formula; worked examples 1 & 2 (pages 22–23); exercise 8.', year: '2023', source: 'Centre for Higher Secondary Education', tags: ['empirical formula', 'molecular formula'] },
        { id: 'ev-2', title: 'Pearson Edexcel IAL Chemistry Spec — Objectives 1.1, 1.6', detail: 'Use experimental data to calculate empirical and molecular formulae.', year: '2024', source: 'Pearson Edexcel', tags: ['specification'] },
    ],
};
