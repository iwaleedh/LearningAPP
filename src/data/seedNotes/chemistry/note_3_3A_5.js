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
        {
            id: 'svg-back-titration',
            type: 'svg',
            data: {
                caption: 'Visualising a Back Titration: A common example of applying familiar skills (titration) to a new context.',
                svg: '<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="acidGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fecaca"/><stop offset="100%" stop-color="#ef4444"/></linearGradient><linearGradient id="alkaliGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient></defs><rect width="540" height="260" fill="transparent" rx="10"/><g transform="translate(40,68)"><path d="M 0 0 L 10 92 C 12 106, 48 106, 50 92 L 60 0 Z" fill="none" stroke="#64748b" stroke-width="3"/><path d="M 4 36 L 10 92 C 12 101, 48 101, 50 92 L 56 36 Z" fill="#64748b" opacity="0.55"/><circle cx="30" cy="88" r="8" fill="#94a3b8"/><text x="30" y="132" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="700">1. Solid sample</text><text x="30" y="151" font-family="sans-serif" font-size="10.5" fill="#cbd5e1" text-anchor="middle">(e.g. egg shell)</text></g><g transform="translate(138,105)"><path d="M 14 18 L 74 18 L 68 58 L 20 58 Z" fill="#fda4af" opacity="0.72" stroke="#9f1239" stroke-width="1.5"/><path d="M 0 0 L 28 14 L 44 14 L 56 -12 Z" fill="#ef4444"/><path d="M 56 -12 C 76 -12, 86 10, 92 36" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/><text x="46" y="-22" font-family="sans-serif" font-size="12" fill="#f8fafc" text-anchor="middle" font-weight="700">+ Known Excess Acid</text></g><g transform="translate(268,68)"><path d="M 0 0 L 10 92 C 12 106, 48 106, 50 92 L 60 0 Z" fill="none" stroke="#64748b" stroke-width="3"/><path d="M 4 36 L 10 92 C 12 101, 48 101, 50 92 L 56 36 Z" fill="url(#acidGrad)" opacity="0.62"/><text x="30" y="132" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="700">2. Unreacted Acid</text><text x="30" y="151" font-family="sans-serif" font-size="10.5" fill="#cbd5e1" text-anchor="middle">remains in flask</text></g><g transform="translate(365,62)"><path d="M 0 0 L 70 0 L 52 26 L 52 96 C 52 104, 18 104, 18 96 L 18 26 Z" fill="url(#alkaliGrad)" opacity="0.88"/><line x1="35" y1="104" x2="35" y2="126" stroke="#60a5fa" stroke-width="3" stroke-dasharray="6,6"/><text x="92" y="18" font-family="sans-serif" font-size="12" fill="#dbeafe" font-weight="700">Titrate with alkali</text></g><g transform="translate(438,68)"><path d="M 0 0 L 10 92 C 12 106, 48 106, 50 92 L 60 0 Z" fill="none" stroke="#64748b" stroke-width="3"/><path d="M 4 36 L 10 92 C 12 101, 48 101, 50 92 L 56 36 Z" fill="#e0e7ff" opacity="0.7"/><text x="30" y="132" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="700">3. Neutralised</text><text x="30" y="151" font-family="sans-serif" font-size="10.5" fill="#cbd5e1" text-anchor="middle">calculate excess</text></g><path d="M 112 120 L 130 120 M 130 115 L 136 120 L 130 125" fill="none" stroke="#64748b" stroke-width="2.4"/><path d="M 240 120 L 258 120 M 258 115 L 264 120 L 258 125" fill="none" stroke="#64748b" stroke-width="2.4"/><path d="M 338 120 L 357 120 M 357 115 L 363 120 L 357 125" fill="none" stroke="#64748b" stroke-width="2.4"/></svg>'
            }
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
