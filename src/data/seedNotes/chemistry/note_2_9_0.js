/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 0
 * "Rate of reaction and calculating from graphs"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.1
 */
export const note_chemistry_2_9_0 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Know what is meant by rate of reaction, and calculate it from the gradient of a tangent on a concentration-time graph.' },
            terms: []
        },
        {
            id: 'callout-definition',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Defining Rate of Reaction',
                text: 'The <strong>rate of reaction</strong> is defined as the change in concentration of a reactant or product per unit time.<br/><br/>Units: mol dm⁻³ s⁻¹ (or mol dm⁻³ min⁻¹ etc.)'
            },
            terms: ['Rate of reaction']
        },
        {
            id: 'h-graphs',
            type: 'heading',
            data: { text: 'Concentration-Time Graphs', level: 2 },
            terms: []
        },
        {
            id: 'p-graphs',
            type: 'paragraph',
            data: { text: 'To find the rate of a reaction at a specific instant in time from a curved concentration-time graph (like a volume-time or mass-time graph), you must draw a <strong>tangent</strong> to the curve at that specific time and calculate its gradient.' },
            terms: ['Tangent', 'Gradient']
        },
        {
            id: 'callout-gradient',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Calculating the Gradient',
                text: '1. Locate the time (e.g. t = 30s) on the x-axis and follow it up to the curve.<br/>2. Draw a straight line that touches the curve only at that point (the tangent).<br/>3. Choose two points on the tangent line that are far apart (to minimise uncertainty).<br/>4. Calculate: Gradient = (change in y) / (change in x).<br/><br/>If the curve represents a reactant being used up, the gradient will be negative, but the reaction rate is given as a positive value.'
            },
            terms: []
        },
        {
            id: 'h-shape',
            type: 'heading',
            data: { text: 'Changes in Rate Over Time', level: 2 },
            terms: []
        },
        {
            id: 'callout-shape',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why does the rate change during a reaction?',
                text: 'If you look at a typical volume vs. time curve for a reaction producing a gas:<br/>• <strong>Start:</strong> The curve is steepest. The rate is at its <strong>maximum</strong> because the concentration of reactant particles is at its highest, leading to the highest frequency of successful collisions.<br/>• <strong>Middle:</strong> The curve becomes less steep. The rate <strong>decreases</strong> because the reactants are being used up, so the frequency of successful collisions decreases.<br/>• <strong>End:</strong> The curve becomes perfectly horizontal. The rate is <strong>zero</strong> because the limiting reactant has been completely consumed.'
            },
            terms: ['Collision frequency', 'Limiting reactant']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-definition', prompt: 'Give the definition and the standard units for the rate of a chemical reaction.' },
            { id: 'c2', blockId: 'p-graphs', prompt: 'How do you determine the rate of reaction at a specific time (e.g., t = 20s) from a volume-time graph?' },
            { id: 'c3', blockId: 'callout-gradient', prompt: 'When calculating a gradient from a tangent, why is it good practice to choose two points on the line that are far apart?' },
            { id: 'c4', blockId: 'callout-shape', prompt: 'Explain, in terms of collisions, why the rate of a reaction is typically fastest at the very beginning.' },
            { id: 'c5', blockId: 'callout-shape', prompt: 'Why does a rate vs time graph eventually become a flat horizontal line?' }
        ],
        summaryText: 'Rate of reaction is the change in concentration of a reactant/product per unit time (units: mol dm⁻³ s⁻¹). To find the rate at a specific instant, draw a tangent to the curve at that time and calculate the gradient (Δy/Δx). The rate is always fastest at the start (highest concentration means most frequent collisions), slows down as reactants are used up, and reaches zero when the limiting reactant is completely consumed.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_0;
