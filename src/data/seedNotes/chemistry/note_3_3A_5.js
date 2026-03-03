/**
 * Seed note: Chemistry · Unit 3 · Topic 3A · Subtopic 5
 * "Practical reasoning in new contexts"
 * Source: wch13 practical skills specification
 */

export const note_chemistry_3_3A_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply practical knowledge to unfamiliar contexts; use scientific reasoning to explain unexpected results; draw valid conclusions from experimental data; suggest further investigations.' },
        },
        {
            id: 'h-applying',
            type: 'heading',
            data: { text: 'Applying Practical Knowledge to New Contexts', level: 2 },
        },
        {
            id: 'p-applying',
            type: 'list',
            data: {
                style: 'unordered',
                items: [
                    'Exam questions often present unfamiliar practical scenarios that test your ability to transfer core practical skills',
                    'The key is to recognise which underlying principles apply, even when the specific chemicals or apparatus are different',
                    'Common transfers: titration skills → unknown reactions; gas collection → different gases; calorimetry → different fuels'
                ]
            },
        },
        {
            id: 'h-conclusions',
            type: 'heading',
            data: { text: 'Drawing Valid Conclusions', level: 2 },
        },
        {
            id: 'callout-conclusions',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Skills — Drawing Conclusions from Data',
                text: 'A valid conclusion must:\n• Be supported by the data collected\n• Reference specific numerical values or trends\n• Acknowledge limitations and uncertainties\n• Distinguish between correlation and causation\n• State whether the hypothesis is supported or refuted\n\nAvoid over-generalising — conclusions should only extend as far as the data allows.'
            },
        },
        {
            id: 'h-unexpected',
            type: 'heading',
            data: { text: 'Explaining Unexpected Results', level: 2 },
        },
        {
            id: 'list-unexpected',
            type: 'list',
            data: {
                style: 'unordered',
                items: [
                    'Check for systematic errors first — was the apparatus calibrated? Was there a consistent offset?',
                    'Consider whether the method was valid — did it actually measure what was intended?',
                    'Look for uncontrolled variables that could explain the anomaly',
                    'Check assumptions — was the reaction complete? Was the gas ideal? Was equilibrium reached?',
                    'Consider whether the "expected" value is itself reliable'
                ]
            },
        },
        {
            id: 'h-further',
            type: 'heading',
            data: { text: 'Suggesting Further Investigations', level: 2 },
        },
        {
            id: 'callout-further',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tip — Further Investigations',
                text: 'When asked to suggest further work:\n• Extend the range of the independent variable\n• Use more values to improve reliability of the trend\n• Investigate a related variable while keeping others constant\n• Test at different temperatures/concentrations/catalysts\n• Use a more precise method to reduce uncertainty\n\nAlways explain WHY the further investigation would be useful — what question would it answer?'
            },
        },
        {
            id: 'h-common-contexts',
            type: 'heading',
            data: { text: 'Common Unfamiliar Contexts in Exams', level: 2 },
        },
        {
            id: 'table-contexts',
            type: 'comparisonTable',
            data: {
                caption: 'Familiar skills applied to unfamiliar contexts',
                headers: ['Familiar Skill', 'New Context Example', 'Key Transfer'],
                rows: [
                    ['Titration calculation', 'Back titration to find CaCO₃ in antacid', 'Same c = n/V; subtract reacted moles from initial'],
                    ['Gas volume measurement', 'Rate of reaction by gas produced over time', 'Same gas syringe; plot volume vs time graph'],
                    ['Calorimetry', 'Comparing enthalpy of combustion of alcohols', 'Same q = mcΔT; compare per mole of fuel'],
                    ['Bromine water test', 'Testing biodiesel for residual unsaturation', 'Same decolourisation principle; relates to iodine number'],
                    ['Mass loss method', 'Rate of decomposition of carbonate', 'Record mass at intervals; plot mass loss vs time']
                ]
            },
        },
        // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
        // ── SUMMARY ─────────────────────────────────────────────────────────
        // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
        {
          id: 'bloom-understand',
          type: 'callout',
          data: {
            style: 'key',
            title: '🧠 Deeper Understanding — Why It Matters',
            text: 'Understand: Practical reasoning is about transferring learned skills to new situations. The exam tests whether you understand the principles behind techniques, not just the specific steps.\n\nApply: A student is asked to determine the purity of a sample of sodium carbonate by titrating it with 0.100 mol dm⁻³ HCl. Describe how they would carry out this investigation and calculate purity from the titration data.\n\nAnalyze: An experiment to measure the rate of reaction between Mg and HCl gives a graph that levels off at a lower-than-expected volume. Analyze three possible reasons for this observation.\n\nEvaluate: A student concludes that "increasing temperature always doubles the rate of reaction." Using your knowledge of activation energy and the Boltzmann distribution, evaluate whether this generalisation is valid.'
          },
          terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Practical reasoning requires transferring familiar skills to unfamiliar contexts. Valid conclusions must be supported by data, acknowledge limitations, and avoid over-generalisation. Unexpected results should be explained using systematic error analysis, variable control, and assumption checking. Further investigations should extend range, improve precision, or test related variables.'
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-conclusions', prompt: 'What makes a conclusion valid? List five criteria.' },
            { id: 'cue-2', blockId: 'list-unexpected', prompt: 'How would you explain an unexpected result? Give a structured approach.' },
            { id: 'cue-3', blockId: 'callout-further', prompt: 'What should you consider when suggesting further investigations?' },
            { id: 'cue-4', blockId: 'table-contexts', prompt: 'Give an example of transferring titration skills to an unfamiliar context.' },
        ],
        summaryText: 'Transfer practical skills to new contexts. Conclusions must be data-supported and limited. Explain unexpected results through error analysis. Further investigations should extend range or precision.',
        ready: false
    },
    evidence: [
        {
            id: 'ev-1',
            title: 'Pearson Edexcel IAL Chemistry Spec — WCH13 Paper 3',
            detail: 'Application of practical skills to unfamiliar contexts; drawing conclusions; scientific reasoning.',
            year: '2024',
            source: 'Pearson Edexcel',
            tags: ['practical skills', 'reasoning', 'conclusions']
        }
    ]
};
