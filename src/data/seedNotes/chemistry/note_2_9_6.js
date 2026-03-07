/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 6
 * "Le Chatelier condition effects"
 * Source: Pearson Edexcel IAL Chemistry
 */
export const note_chemistry_2_9_6 = {
  blocks: [
    {
      id: "objective",
      type: "objective",
      data: {
        text: "Understand the application of Le Chatelier’s principle to industrial processes (e.g. Haber process, methanol synthesis) and evaluate the effects of changing conditions on equilibrium yield, rate, and cost.",
      },
      terms: []
    },
    {
      id: "h-le-chat",
      type: "heading",
      data: { text: "Le Chatelier's Principle & Industrial Compromise", level: 2 },
      terms: []
    },
    {
      id: "callout-le-chat",
      type: "callout",
      data: {
        style: "key",
        title: "The Core Principle",
        text: "<strong>Le Chatelier’s Principle:</strong> If a system at dynamic equilibrium is subjected to a change in conditions (temperature, pressure, or concentration), the position of equilibrium will shift to minimise or oppose that change.<br/><br/>In industry, we use this to maximise the <strong>yield</strong> of our desired product. However, we must balance yield against the <strong>rate of reaction</strong> and the <strong>economic cost</strong> of maintaining those conditions.",
      },
      terms: ["Le Chatelier's Principle", "Dynamic equilibrium"]
    },
    {
      id: "h-methanol",
      type: "heading",
      data: { text: "Example 1: Synthesis of Methanol", level: 3 },
      terms: []
    },
    {
      id: "p-methanol",
      type: "paragraph",
      data: {
        text: "Methanol is synthesised from carbon monoxide and hydrogen gas:<br/><br/>CO(g) + 2H₂(g) ⇌ CH₃OH(g)      ΔH = −90 kJ mol⁻¹",
      },
      terms: []
    },
    {
      id: "table-methanol",
      type: "comparisonTable",
      data: {
        caption: "Conditions for Methanol Synthesis",
        headers: ["Condition", "Theoretical Ideal (Yield)", "Actual Industrial Compromise"],
        rows: [
          [
            "<strong>Temperature</strong>",
            "<strong>Low</strong> (Forward reaction is exothermic, so a low temperature shifts eq. to the right)",
            "<strong>250°C (Moderate)</strong><br/>Too low = reaction is too slow. 250°C provides a usable rate without dropping yield too much.",
          ],
          [
            "<strong>Pressure</strong>",
            "<strong>High</strong> (3 moles of gas on left → 1 mole on right. High pressure shifts to fewer moles)",
            "<strong>50–100 atm (High)</strong><br/>Increases both yield and rate. But generating massive pressure is expensive and dangerous.",
          ],
          [
            "<strong>Catalyst</strong>",
            "N/A (Does not affect yield)",
            "<strong>Copper/Zinc oxide/Alumina</strong><br/>Speeds up both forward and backward reactions, allowing a lower temperature to be used.",
          ],
        ],
      },
      terms: []
    },
    {
      id: "h-ethanol",
      type: "heading",
      data: { text: "Example 2: Hydration of Ethene (Ethanol Synthesis)", level: 3 },
      terms: []
    },
    {
      id: "p-ethanol",
      type: "paragraph",
      data: {
        text: "Ethanol is industrially produced by reacting ethene with steam:<br/><br/>C₂H₄(g) + H₂O(g) ⇌ C₂H₅OH(g)      ΔH = −45 kJ mol⁻¹",
      },
      terms: []
    },
    {
      id: "table-ethanol",
      type: "comparisonTable",
      data: {
        caption: "Conditions for Ethanol Synthesis",
        headers: ["Condition", "Theoretical Ideal (Yield)", "Actual Industrial Compromise"],
        rows: [
          [
            "<strong>Temperature</strong>",
            "<strong>Low</strong> (Forward reaction is exothermic)",
            "<strong>300°C (Moderate)</strong><br/>Compromise between a fast rate and an acceptable yield.",
          ],
          [
            "<strong>Pressure</strong>",
            "<strong>High</strong> (2 moles of gas → 1 mole of gas)",
            "<strong>60–70 atm (Moderate-High)</strong><br/>We want high pressure, but too high pressure causes ethene to polymerise into polythene!",
          ],
          [
            "<strong>Catalyst</strong>",
            "N/A",
            "<strong>Phosphoric acid (H₃PO₄)</strong><br/>Coated onto solid silica. Allows the use of lower temperatures.",
          ],
        ],
      },
      terms: []
    },
    {
      id: "p-recycling",
      type: "paragraph",
      data: {
        text: "In both processes, the reaction does not reach 100% completion in one pass. To prevent waste and push the overall yield closer to 95%, the <strong>unreacted gases are continuously recycled</strong> back into the reaction chamber.",
      },
      terms: []
    },
    {
      id: "h-graphs",
      type: "heading",
      data: { text: "Interpreting Yield vs Conditions Graphs", level: 2 },
      terms: []
    },
    {
      id: "callout-graphs",
      type: "callout",
      data: {
        style: "worked",
        title: "Example: The Haber Process Graph",
        text: "Exams often present graphs showing Yield (%) on the y-axis against Pressure on the x-axis, with multiple lines for different Temperatures. You must deduce the reaction parameters from the graph:<br/><br/><strong>1. Deducing pressure effects:</strong> If the lines slope upwards from left to right, this means high pressure = high yield. Therefore, the forward reaction must produce <em>fewer moles of gas</em>.<br/><strong>2. Deducing temperature effects:</strong> Look at a single pressure slice (e.g., 200 atm). If the line for 400°C is <em>higher</em> than the line for 500°C, then a lower temperature gives a higher yield. Therefore, the forward reaction must be <em>exothermic</em>.<br/><strong>3. Selecting conditions:</strong> You might be asked why 400°C is chosen over 300°C, even though 300°C gives a better yield. The answer is always: <em>Rate of reaction. 300°C is too slow to be economically viable.</em>",
      },
      terms: []
    },
    {
      id: "summary-le-chat",
      type: "summary",
      data: {
        text: "Industrial scale reactions rely on Le Chatelier's principle to find optimal reaction conditions. For exothermic reactions (like methanol and Haber), a low temperature increases yield but decreases rate, so a moderate 'compromise' temperature is used with a catalyst. For reactions producing fewer gas moles, a high pressure increases both yield and rate, but is limited by the massive financial cost and safety risks of high-pressure equipment.",
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-le-chat', prompt: 'State Le Chatelier’s principle.' },
      { id: 'c2', blockId: 'table-methanol', prompt: 'Explain why a temperature of 250°C is used in methanol synthesis rather than a lower temperature, even though the forward reaction is exothermic.' },
      { id: 'c3', blockId: 'table-ethanol', prompt: 'Explain why the pressure used in ethanol synthesis (60–70 atm) is not simply increased further to maximise yield.' },
      { id: 'c4', blockId: 'callout-graphs', prompt: 'If an equilibrium yield vs pressure graph shows that higher pressure gives higher yield, what can you deduce about the moles of gas in the reaction?' }
    ],
    summaryText: "Le Chatelier's principle says industrial conditions are a compromise. Exothermic reactions need low T for yield, but high T for rate, so we use a moderate T + catalyst. Reactions heading to fewer gas moles need high P for yield, but making extreme P is unsafe/expensive, so we use moderate P.",
    ready: false
  },
  evidence: []
};
export default note_chemistry_2_9_6;
