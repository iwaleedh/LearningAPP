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
                    ['Iron Catalyst', 'Crucial. It allows the reaction to happen at the lower compromise temperature (450°C) with a fast enough rate to be economically viable. (Often used with a Potassium Hydroxide promoter to increase efficiency).'],
                    ['Reactant Proportions (1:3 N₂ to H₂)', 'Matches the equation stoichiometry. Using an excess of either reactant would waste valuable space on the catalyst surface without improving overall conversion efficiency.'],
                    ['Recycling & Separation', 'At each pass, only ~15% converts to ammonia. The hot gases are cooled, causing ammonia to liquefy so it can be removed. The unreacted N₂ and H₂ gases are continuously recycled, boosting the overall conversion to ~98%.']
                ]
            },
            terms: ['Compromise conditions']
        },
        {
            id: 'callout-contact',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Case Study 2: The Contact Process (Sulphuric Acid)',
                text: 'Equation: $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$ ; $\\Delta H$ = -196 kJ mol⁻¹ (Exothermic forward reaction)<br/><br/><strong>Ideal conditions for YIELD (Le Chatelier):</strong><br/>• Low temperature (favors the exothermic forward reaction)<br/>• High pressure (shifts to the right, 3 moles of gas → 2 moles of gas)<br/>• Excess Oxygen<br/><br/><strong>Ideal conditions for RATE (Collision Theory):</strong><br/>• High temperature<br/>• High pressure<br/>• Use of a Vanadium(V) oxide ($V_2O_5$) catalyst'
            },
            terms: ['Contact process']
        },
        {
            id: 'h-contact-compromise',
            type: 'heading',
            data: { text: 'Contact Process Compromises', level: 3 },
            terms: []
        },
        {
            id: 'table-contact-compromise',
            type: 'comparisonTable',
            data: {
                caption: 'Contact Process Conditions',
                headers: ['Chosen Condition', 'Why it is chosen in industry'],
                rows: [
                    ['Temperature: ~450°C', 'Same compromise as the Haber process. Low temperature gives maximal yield for the exothermic process but a terrible rate. A compromise of 400-450°C gives a fairly high yield in a very short time.'],
                    ['Pressure: 1 - 2 atm', 'Unlike Haber, high pressure is NOT used. Even at 1-2 atmospheres, the conversion of $SO_2$ to $SO_3$ is ~99.5%. The very small improvement from increasing the pressure does not justify the massive economic cost of building and maintaining high-pressure pipes.'],
                    ['Reactant Proportions (1:1 $SO_2$ to $O_2$)', 'The equation ratio is 2:1. By using a 1:1 volume, Oxygen is in excess. This shifts the equilibrium to the right (Le Chatelier), increasing $SO_2$ conversion. Air is a very cheap source of excess oxygen. However, too much excess would waste catalyst space.'],
                    ['Vanadium(V) oxide ($V_2O_5$) Catalyst', 'Allows the reaction to proceed fast enough at the moderate 450°C temperature for dynamic equilibrium to be established in the short time the gases are in the reactor.']
                ]
            },
            terms: ['Compromise conditions']
        }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Industrial Compromises",
        "text": "For exothermic reversible reactions, lower temperatures offer a high theoretical yield but a very slow rate of reaction. A 'compromise temperature' balances a viable rate of production with a reasonable yield."
      }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Industrial Compromises",
        "text": "For exothermic reversible reactions, lower temperatures offer a high theoretical yield but a very slow rate of reaction. A 'compromise temperature' balances a viable rate of production with a reasonable yield."
      }
    }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-haber', prompt: 'For the Haber process (exothermic forward reaction), what temperature gives the highest theoretical equilibrium yield?' },
            { id: 'c2', blockId: 'table-compromise', prompt: 'In the Haber process, why is a compromise temperature of 450°C used instead of a very low temperature?' },
            { id: 'c3', blockId: 'table-compromise', prompt: 'Although very high pressures increase both the rate and yield of the Haber process, why are extremely high pressures (>1000 atm) not used in industry?' },
            { id: 'c4', blockId: 'table-compromise', prompt: 'What is the most vital role of the iron catalyst in the industrial Haber process?' },
            { id: 'c5', blockId: 'table-compromise', prompt: 'Why are nitrogen and hydrogen fed into the Haber Process reactor in exactly a 1:3 ratio rather than using an excess of one gas?' },
            { id: 'c6', blockId: 'table-compromise', prompt: 'Explain how ammonia is separated from unreacted nitrogen and hydrogen after passing through the Haber reactor.' },
            { id: 'c7', blockId: 'table-contact-compromise', prompt: 'In the Contact process, why is a pressure of only 1-2 atm used, despite high pressure favoring the product side (2SO₂ + O₂ ⇌ 2SO₃)?' },
            { id: 'c8', blockId: 'table-contact-compromise', prompt: 'What catalyst is used in the Contact process, and what is its effect on the equilibrium yield of SO₃?' },
            { id: 'c9', blockId: 'table-contact-compromise', prompt: 'Why is oxygen used in excess (a 1:1 volume ratio with SO₂) in the Contact process?' }
        ],
        summaryText: 'Industrial processes must balance Yield (equilibrium position) with Rate (speed) and Economics (cost/safety). A low temperature gives maximum yield for exothermic reactions (Haber/Contact), but is too slow; so a compromise (~450°C) is used. In Haber, high pressure (~200 atm) is a safety/cost compromise. In the Contact process, low pressure (1-2 atm) is used because conversion is already 99.5%, making expensive high-pressure pipes unnecessary. Catalysts (Iron for Haber, V₂O₅ for Contact) are essential to maintain rates at these compromise temperatures. Reactant excess is avoided in Haber (wastes space) but used in Contact (air is cheap).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_7;
