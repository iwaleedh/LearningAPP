/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 7
 * "Compromises in Industrial Processes"
 * Source: Pearson Edexcel IAL Chemistry — Section 9B.3
 */
export const note_chemistry_2_9_7 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Evaluate data to explain the necessity, for many industrial processes, of reaching a compromise between the yield and the rate of reaction.' },
            terms: []
        },
        {
            id: 'callout-haber',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Case Study: The Haber Process',
                text: 'Equation: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) ; ΔH = -92 kJ mol⁻¹ (Exothermic forward reaction)<br/><br/><strong>Ideal conditions for YIELD (Le Chatelier):</strong><br/>• Low temperature (favors the exothermic forward reaction)<br/>• High pressure (shifts to the right, fewer gas molecules)<br/><br/><strong>Ideal conditions for RATE (Collision Theory):</strong><br/>• High temperature (many more successful collisions)<br/>• High pressure (more frequent collisions)<br/>• Use of an iron catalyst'
            },
            terms: ['Haber process']
        },
        {
            id: 'h-compromise',
            type: 'heading',
            data: { text: 'The Compromise', level: 2 },
            terms: []
        },
        {
            id: 'table-compromise',
            type: 'comparisonTable',
            data: {
                caption: 'Why compromise conditions are chosen in industry',
                headers: ['Chosen Condition', 'Why it is a compromise between Rate, Yield, and Cost'],
                rows: [
                    ['Temperature: ~450°C', 'A low temperature gives a great yield but the rate is too slow to be profitable. A very high temperature gives a fast rate but a terrible yield. 450°C is a compromise: giving an acceptable yield in a decently short amount of time.'],
                    ['Pressure: ~200 atm', 'High pressure gives both an excellent yield and a fast rate. However, generating extreme pressures is very expensive (strong pipes needed) and dangerous (explosion risk). 200 atm is an economic safety compromise.'],
                    ['Iron Catalyst', 'Crucial. It allows the reaction to happen at the lower compromise temperature (450°C) with a fast enough rate to be economically viable.']
                ]
            },
            terms: ['Compromise conditions']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-haber', prompt: 'For the Haber process (exothermic forward reaction), what temperature gives the highest theoretical equilibrium yield?' },
            { id: 'c2', blockId: 'table-compromise', prompt: 'In the Haber process, why is a compromise temperature of 450°C used instead of a very low temperature?' },
            { id: 'c3', blockId: 'table-compromise', prompt: 'Although very high pressures increase both the rate and yield of the Haber process, why are extremely high pressures (>1000 atm) not used in industry?' },
            { id: 'c4', blockId: 'table-compromise', prompt: 'What is the most vital role of the iron catalyst in the industrial Haber process?' }
        ],
        summaryText: 'Industrial processes (like Haber: N₂ + 3H₂ ⇌ 2NH₃) must balance Yield (equilibrium position) with Rate (speed) and Economics (cost/safety). A low temperature gives maximum yield for an exothermic reaction, but it makes the rate far too slow; so a compromise temperature (~450°C) is used. High pressure gives both good yield and rate, but extreme pressures are expensive and dangerous, so a moderate high pressure (~200 atm) is used. A catalyst is essential to maintain an acceptable rate at the lower compromise temperature.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_7;
