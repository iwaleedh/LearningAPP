/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 1
 * "Isotopes and relative atomic mass"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.2
 */
export const note_chemistry_1_2_1 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Calculate relative atomic mass (Ar) from isotope mass data and percentage abundances. Understand relative isotopic mass.' },
      terms: []
    },
    {
      id: 'h-isotopic',
      type: 'heading',
      data: { text: 'Relative Isotopic Mass', level: 2 },
      terms: []
    },
    {
      id: 'callout-isotopic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Relative Isotopic Mass',
        text: 'The <strong>relative isotopic mass</strong> is the mass of one atom of an isotope compared to ¹⁄₁₂ of the mass of one atom of ¹²C.<br/><br/>Note: Values are very close to the mass number (e.g., ¹²C = exactly 12; ¹³C ≈ 13.003 etc.), but not exact because of nuclear binding energy.'
      },
      terms: ['Relative isotopic mass']
    },
    {
      id: 'h-ar',
      type: 'heading',
      data: { text: 'Calculating Relative Atomic Mass (Aᵣ)', level: 2 },
      terms: []
    },
    {
      id: 'callout-ar',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Formula for Aᵣ from isotopic data',
        text: 'Aᵣ = Σ (relative isotopic mass × % abundance) / 100<br/><br/>Or using fractional abundances:<br/>Aᵣ = Σ (relative isotopic mass × fractional abundance)'
      },
      terms: ['Relative atomic mass']
    },
    {
      id: 'callout-ar-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Chlorine',
        text: 'Isotopes of chlorine: ³⁵Cl (75.5%) and ³⁷Cl (24.5%)<br/><br/>Aᵣ(Cl) = (35 × 75.5 + 37 × 24.5) / 100<br/>= (2642.5 + 906.5) / 100<br/>= 3549 / 100<br/>= <strong>35.5</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Neon (three isotopes)',
        text: 'Isotopes of neon: ²⁰Ne (90.92%), ²¹Ne (0.26%), ²²Ne (8.82%)<br/><br/>Aᵣ(Ne) = (20 × 90.92 + 21 × 0.26 + 22 × 8.82) / 100<br/>= (1818.4 + 5.46 + 194.04) / 100<br/>= 2017.9 / 100<br/>= <strong>20.2</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Find abundance from Aᵣ (Algebraic Method)',
        text: '<strong>Q: Boron has two isotopes: ¹⁰B and ¹¹B. Aᵣ = 10.8. Find % abundance of each.</strong><br/><br/>Let x = % abundance of ¹⁰B. Then (100 − x) = % of ¹¹B.<br/><br/>10x + 11(100 − x) = 10.8 × 100<br/>10x + 1100 − 11x = 1080<br/>−x = −20<br/>x = 20%<br/><br/>∴ ¹⁰B = <strong>20%</strong>, ¹¹B = <strong>80%</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4: The Shortcut Method for Two Isotopes',
        text: 'When there are exactly two isotopes, you can use a faster fractional shortcut instead of algebra:<br/><br/><strong>% of heavier isotope = (Aᵣ − lighter mass) / (heavier mass − lighter mass) × 100</strong><br/><br/><em>Example using Chlorine (Aᵣ = 35.5, isotopes 35 and 37):</em><br/>% of ³⁷Cl (heavier) = (35.5 − 35) / (37 − 35) × 100<br/>% of ³⁷Cl = 0.5 / 2 × 100 = <strong>25%</strong><br/>Therefore, % of ³⁵Cl = 100 − 25 = <strong>75%</strong>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-ar', prompt: 'Write the formula for calculating Aᵣ from isotopic masses and percentage abundances.' },
      { id: 'c2', blockId: 'callout-ar-worked1', prompt: 'Calculate Aᵣ for chlorine: ³⁵Cl (75.5%) and ³⁷Cl (24.5%).' },
      { id: 'c3', blockId: 'callout-ar-worked3', prompt: 'Copper has two isotopes: ⁶³Cu and ⁶⁵Cu. Aᵣ = 63.5. Calculate the percentage abundance of ⁶³Cu.' },
      { id: 'c4', blockId: 'callout-ar-worked4', prompt: 'State the shortcut formula for finding the percentage of the heavier isotope when there are only two isotopes.' }
    ],
    summaryText: 'Relative isotopic mass = mass of isotope relative to ¹⁄₁₂ ¹²C. Aᵣ = Σ(isotopic mass × % abundance)/100. For reverse problems: set up algebra (x and 100−x) OR use the 2-isotope shortcut: % heavier = (Aᵣ − lighter)/(heavier − lighter) × 100.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_1;