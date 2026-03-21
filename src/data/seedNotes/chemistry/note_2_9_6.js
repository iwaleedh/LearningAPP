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
      id: "h-applying-rules",
      type: "heading",
      data: { text: "Applying the Principle to Changing Conditions", level: 3 },
      terms: []
    },
    {
      id: "table-le-chat-rules",
      type: "comparisonTable",
      data: {
        caption: "Summary of How Conditions Affect Equilibrium",
        headers: ["Condition Changed", "Effect on Position of Equilibrium", "Reasoning (Le Chatelier)"],
        rows: [
          ["<strong>Increase Concentration</strong> (of a reactant)", "Shifts to the Right", "System attempts to decrease the concentration by converting more reactants into products."],
          ["<strong>Decrease Concentration</strong> (of a product)", "Shifts to the Right", "System attempts to replace the removed product by converting more reactants."],
          ["<strong>Increase Pressure</strong>", "Shifts to the side with <strong>fewer gas molecules</strong>", "System attempts to reduce the pressure by producing fewer molecules to collide with container walls."],
          ["<strong>Decrease Pressure</strong>", "Shifts to the side with <strong>more gas molecules</strong>", "System attempts to increase the pressure by producing more molecules. <em>(No effect if moles of gas are equal on both sides)</em>."],
          ["<strong>Increase Temperature</strong>", "Shifts in the <strong>Endothermic</strong> direction", "System attempts to absorb the excess heat added."],
          ["<strong>Decrease Temperature</strong>", "Shifts in the <strong>Exothermic</strong> direction", "System attempts to generate heat to replace what was lost."],
          ["<strong>Add a Catalyst</strong>", "<strong>No Shift</strong> (Position is unchanged)", "Catalysts speed up the forward and reverse reactions by the <strong>exact same proportion</strong>. They only decrease the time taken to <em>reach</em> equilibrium."]
        ]
      },
      terms: []
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
    },
    {
      id: 'svg-le-chatelier',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 440" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">LE CHATELIER — 4 FACTOR DECISION GUIDE</text><!-- Title strip --><rect x="10" y="30" width="680" height="34" rx="8" fill="rgba(99,102,241,0.25)" stroke="#818cf8" stroke-width="1.5"/><text x="350" y="43" text-anchor="middle" font-size="10" fill="#2d2d72" font-weight="700">Equilibrium shifts to oppose the imposed change — but K only changes with Temperature</text><text x="350" y="58" text-anchor="middle" font-size="9" fill="#2d2d72">A(g) + B(g)  ⇌  C(g)  example throughout (exothermic forward reaction, 2 mol gas → 1 mol gas)</text><!-- FACTOR 1: Temperature --><rect x="10" y="74" width="330" height="158" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="1.5"/><text x="175" y="93" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700">TEMPERATURE</text><text x="30" y="112" font-size="9" fill="#7f1d1d">↑ Temperature (add heat)</text><text x="30" y="127" font-size="9" fill="#1e293b">→ Equilibrium shifts LEFT (endothermic direction)</text><text x="30" y="142" font-size="9" fill="#7f1d1d">→ Less product C at equilibrium</text><text x="30" y="155" font-size="9" fill="#78350f">★ K DECREASES (exothermic reaction)</text><rect x="24" y="163" width="302" height="1" fill="#ef4444" opacity="0.3"/><text x="30" y="178" font-size="9" fill="#7f1d1d">↓ Temperature</text><text x="30" y="193" font-size="9" fill="#1e293b">→ Equilibrium shifts RIGHT (exothermic direction)</text><text x="30" y="208" font-size="9" fill="#78350f">★ K INCREASES (exothermic reaction)</text><text x="175" y="224" text-anchor="middle" font-size="8.5" fill="#ef4444" font-weight="600">★ T is the ONLY factor that changes K</text><!-- FACTOR 2: Pressure --><rect x="360" y="74" width="330" height="158" rx="10" fill="rgba(96,165,250,0.12)" stroke="#60a5fa" stroke-width="1.5"/><text x="525" y="93" text-anchor="middle" font-size="11" fill="#60a5fa" font-weight="700">PRESSURE (gas reactions only)</text><text x="380" y="112" font-size="9" fill="#1e3a8a">↑ Pressure (compress volume)</text><text x="380" y="127" font-size="9" fill="#1e293b">→ Shifts to side with FEWER gas moles</text><text x="380" y="142" font-size="9" fill="#1e3a8a">Here: left has 2 mol, right has 1 mol</text><text x="380" y="155" font-size="9" fill="#1e293b">→ Equilibrium shifts RIGHT → more C</text><text x="380" y="168" font-size="9" fill="#1250a0">K unchanged (position shifts, not K)</text><rect x="374" y="176" width="302" height="1" fill="#60a5fa" opacity="0.3"/><text x="380" y="190" font-size="9" fill="#1e3a8a">↓ Pressure (expand volume)</text><text x="380" y="205" font-size="9" fill="#1e293b">→ Shifts to side with MORE gas moles → left</text><text x="380" y="220" font-size="9" fill="#1250a0">K still unchanged</text><!-- FACTOR 3: Concentration --><rect x="10" y="242" width="330" height="140" rx="10" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.5"/><text x="175" y="261" text-anchor="middle" font-size="11" fill="#34d399" font-weight="700">CONCENTRATION</text><text x="30" y="280" font-size="9" fill="#065f46">↑ [A] or [B] (add reactant)</text><text x="30" y="295" font-size="9" fill="#1e293b">→ Shifts RIGHT → more C produced</text><text x="30" y="310" font-size="9" fill="#065f46">K unchanged (new equilibrium position)</text><rect x="24" y="318" width="302" height="1" fill="#065f46" opacity="0.3"/><text x="30" y="333" font-size="9" fill="#065f46">↑ [C] (add product)</text><text x="30" y="348" font-size="9" fill="#1e293b">→ Shifts LEFT → converts C back to A + B</text><text x="30" y="363" font-size="9" fill="#065f46">Removing product shifts equilibrium RIGHT</text><text x="30" y="374" font-size="9" fill="#065f46">(exploited in industrial removal of NH₃)</text><!-- FACTOR 4: Catalyst --><rect x="360" y="242" width="330" height="140" rx="10" fill="rgba(251,146,60,0.12)" stroke="#fb923c" stroke-width="1.5"/><text x="525" y="261" text-anchor="middle" font-size="11" fill="#fb923c" font-weight="700">CATALYST</text><text x="380" y="280" font-size="9" fill="#532407">Does NOT shift equilibrium position</text><text x="380" y="295" font-size="9" fill="#1e293b">Does NOT change K</text><text x="380" y="310" font-size="9" fill="#532407">Provides alternative lower Ea pathway</text><text x="380" y="325" font-size="9" fill="#1e293b">Both forward and reverse reactions speed up equally</text><text x="380" y="340" font-size="9" fill="#532407">Effect: equilibrium reached FASTER</text><text x="380" y="355" font-size="9" fill="#78350f">In industry: allows lower T → better yield AND fast rate</text><text x="380" y="370" font-size="9" fill="#78350f">e.g. Fe catalyst in Haber; V₂O₅ in Contact Process</text><!-- Summary --><rect x="10" y="394" width="680" height="38" rx="8" fill="rgba(99,102,241,0.2)" stroke="#818cf8" stroke-width="1"/><text x="350" y="410" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">SUMMARY: Only T changes K. Concentration, pressure, and catalyst change the position without changing K.</text><text x="350" y="425" text-anchor="middle" font-size="9" fill="#2d2d72">Industry compromise: moderate T (rate vs yield) + catalyst + high P (if fewer gas moles on product side)</text></svg>',
        caption: 'Le Chatelier Decision Guide — 4 factors summarised. Only temperature changes the equilibrium constant K. Changing concentration, pressure, or adding a catalyst shifts the position of equilibrium but leaves K unchanged.'
      },
      terms: []
    }
  ,
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Trap: Catalyst Does NOT Shift Equilibrium Position",
        text: "Le Chatelier's principle does NOT apply to catalysts. A catalyst affects RATE, not POSITION. Saying 'the equilibrium shifts right when we add a catalyst' gets ZERO marks. The equilibrium arrives faster, but at the same concentrations (if temperature is constant)."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Key Idea: Industrial Compromises Balance Three Factors",
        text: "Methanol synthesis (CO + 2H\u2082 \u21cc CH\u2083OH, exothermic): Low T gives high yield but slow rate. 250\u00b0C is compromise. High pressure (50-100 atm) increases both yield and rate, but is expensive. Choice of catalyst (Cu/ZnO) allows this compromise temperature to work. Examiners ask: 'Why not 100\u00b0C & 1000 atm?' Answer: cost, danger, diminishing returns."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-le-chat', prompt: 'State Le Chatelier’s principle.' },
      { id: 'c1a', blockId: 'table-le-chat-rules', prompt: 'What effect does increasing the pressure have on the position of an equilibrium?' },
      { id: 'c1b', blockId: 'table-le-chat-rules', prompt: 'Explain why adding a catalyst has NO effect on the position of equilibrium.' },
      { id: 'c1c', blockId: 'table-le-chat-rules', prompt: 'If the forward reaction is exothermic, what happens to the position of equilibrium if the temperature is lowered?' },
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
