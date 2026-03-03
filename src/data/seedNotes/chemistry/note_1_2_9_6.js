/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 6
 * Le Chatelier condition effects
 */

export const note_chemistry_1_2_9_6 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'State Le Chatelier\'s principle and apply it to predict the effect of changes in concentration, pressure and temperature on the position of equilibrium and on Kc.' } },
        { id: 'h-lec', type: 'heading', data: { text: "Le Chatelier's Principle", level: 2 }, terms: ["Le Chatelier's principle"] },
        { id: 'callout-lec-def', type: 'callout', data: { style: 'key', title: "💡 Le Chatelier's Principle", text: "If a system at equilibrium is subjected to a change in conditions, the equilibrium will shift in the direction that opposes the change and minimises the effect of that change.\n\nThe three conditions that can shift equilibrium:\n  1. Change in CONCENTRATION\n  2. Change in PRESSURE (for gases)\n  3. Change in TEMPERATURE\n\nNote: adding a CATALYST does NOT shift equilibrium — it only speeds up reaching equilibrium." } },
        { id: 'h-concentration', type: 'heading', data: { text: 'Effect of Concentration', level: 3 } },
        { id: 'callout-conc-key', type: 'callout', data: { style: 'key', title: '💡 Concentration Changes', text: 'Add more reactant → equilibrium shifts RIGHT (forward) to use up the added reactant → more product formed\nRemove reactant → equilibrium shifts LEFT (backward) to replace it\nAdd more product → equilibrium shifts LEFT to use up the added product\nRemove product → equilibrium shifts RIGHT to replace it\n\nKc is UNCHANGED by concentration changes — only position changes.' } },
        { id: 'h-pressure', type: 'heading', data: { text: 'Effect of Pressure', level: 3 } },
        { id: 'callout-pressure-key', type: 'callout', data: { style: 'key', title: '💡 Pressure Changes (gases only)', text: 'Increase pressure → equilibrium shifts to the side with FEWER moles of gas\nDecrease pressure → equilibrium shifts to the side with MORE moles of gas\n\nIf moles of gas are equal on both sides → pressure change has NO effect on position\n\nExample: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)\n  Left side: 1 + 3 = 4 mol gas; Right side: 2 mol gas\n  Increase pressure → shifts RIGHT (fewer moles) → more NH₃\n\nKc is UNCHANGED by pressure changes.' } },
        { id: 'h-temperature', type: 'heading', data: { text: 'Effect of Temperature', level: 3 } },
        { id: 'callout-temp-key', type: 'callout', data: { style: 'key', title: '💡 Temperature Changes', text: 'Increase temperature → equilibrium shifts in the ENDOTHERMIC direction (absorbs heat)\nDecrease temperature → equilibrium shifts in the EXOTHERMIC direction (releases heat)\n\nExample: N₂ + 3H₂ ⇌ 2NH₃   ΔH = −92 kJ mol⁻¹  (exothermic forward)\n  Increase T → shifts LEFT (endothermic direction) → less NH₃\n  Decrease T → shifts RIGHT (exothermic direction) → more NH₃\n\nTEMPERATURE is the ONLY condition that changes Kc:\n  Exothermic forward reaction: increase T → Kc DECREASES\n  Endothermic forward reaction: increase T → Kc INCREASES' } },
        { id: 'table-lec', type: 'comparisonTable', data: { caption: "Summary of Le Chatelier's principle", headers: ['Change', 'Equilibrium shifts', 'Effect on Kc'], rows: [['Add reactant', 'Right (forward)', 'Unchanged'], ['Remove reactant', 'Left (backward)', 'Unchanged'], ['Increase pressure', 'Toward fewer gas moles', 'Unchanged'], ['Decrease pressure', 'Toward more gas moles', 'Unchanged'], ['Increase T (exothermic forward)', 'Left (endothermic)', 'Decreases'], ['Increase T (endothermic forward)', 'Right (endothermic)', 'Increases'], ['Add catalyst', 'No shift', 'Unchanged']] } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: "Le Chatelier: equilibrium shifts to oppose the change", checked: false }, { text: 'Add reactant → shift right; add product → shift left', checked: false }, { text: 'Increase P → shift to fewer gas moles', checked: false }, { text: 'Increase T → shift in endothermic direction', checked: false }, { text: 'ONLY temperature changes Kc; catalyst does not shift equilibrium', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: "Le Chatelier's principle: equilibrium shifts to oppose any change. Adding reactant shifts right; increasing pressure shifts to fewer gas moles; increasing temperature shifts in the endothermic direction. Only temperature changes Kc. A catalyst does not shift equilibrium — it only speeds up reaching it." } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-lec-def', prompt: "State Le Chatelier's principle. Which three conditions can shift equilibrium position?" },
            { id: 'cue-2', blockId: 'callout-pressure-key', prompt: 'N₂ + 3H₂ ⇌ 2NH₃. What happens to the equilibrium position when pressure is increased? Why?' },
            { id: 'cue-3', blockId: 'callout-temp-key', prompt: 'N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ mol⁻¹. What happens to Kc and equilibrium position when temperature is increased?' },
        ],
        summaryText: "Le Chatelier's principle, concentration/pressure/temperature effects, Kc changes.",
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 9: Equilibrium', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Equilibrium', "Le Chatelier"] }],
};
