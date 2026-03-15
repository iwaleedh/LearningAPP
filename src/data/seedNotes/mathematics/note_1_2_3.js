/**
 * Seed note: Mathematics · Unit 1 · Topic 2 · Subtopic 3
 * "Modelling with straight lines"
 */

export const note_mathematics_1_2_3 = {
    pdfPath: '/notes/mathematics/coordinate-geometry/modelling-with-straight-lines.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply straight line equations to real-world contexts; interpret the gradient as a rate of change and the y-intercept as an initial value; evaluate and refine linear models.' },
            terms: []
        },
        {
            id: 'h-model',
            type: 'heading',
            data: { text: 'What is a Straight Line Model?', level: 2 },
            terms: []
        },
        {
            id: 'p-model',
            type: 'paragraph',
            data: { text: 'A <strong>mathematical model</strong> is a simplified equation or formula that represents a real-world situation. When a relationship is approximately linear, the model y = mx + c is used, where the variables x and y represent real quantities (time, distance, temperature, etc.).' },
            terms: []
        },
        {
            id: 'key-interpret',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Interpreting m and c in Context',
                text: '<strong>Gradient m</strong> = rate of change of y per unit increase in x.<br/>e.g. If y = cost (£) and x = hours: m = cost per hour (£/hr).<br/><br/><strong>y-intercept c</strong> = initial value of y when x = 0.<br/>e.g. c = starting charge before any hours are worked.'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Setting Up a Linear Model', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Define your variables clearly (state what x and y represent, including units).' },
                    { text: 'Extract two data points or a gradient and one point from the question.' },
                    { text: 'Calculate gradient m and y-intercept c.' },
                    { text: 'Write the model y = mx + c.' },
                    { text: 'Interpret m and c in the real-world context.' },
                    { text: 'Use the model to predict future values, and comment on validity.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-sprint',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Hooke\'s Law Spring',
                text: 'A spring has natural length 20 cm. A mass of 500 g extends it to 22 cm; a mass of 1500 g extends it to 26 cm. Find a linear model for length L in terms of mass m (grams), and interpret the gradient and intercept.<br/><br/>Two points: (500, 22) and (1500, 26).<br/>Gradient = (26−22)/(1500−500) = 4/1000 = 0.004 cm/g<br/>Using (500, 22): 22 = 0.004(500) + c → c = 22 − 2 = 20<br/><strong>L = 0.004m + 20</strong><br/>• Gradient 0.004 cm/g: each additional gram extends the spring by 0.004 cm.<br/>• Intercept 20 cm: the natural length of the spring (with no mass).'
            },
            terms: []
        },
        {
            id: 'h-validity',
            type: 'heading',
            data: { text: 'Model Limitations', level: 2 },
            terms: []
        },
        {
            id: 'p-validity',
            type: 'paragraph',
            data: { text: 'Linear models are only valid for the range of data used to create them. Extrapolation (predicting beyond the data range) can be unreliable. For example, a spring model breaks down once the elastic limit is exceeded.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always interpret m and c in the context of the problem — include units in your interpretation.<br/>• "State the value of c and interpret it" means say what c represents in real life, not just write the number.<br/>• Comment on whether extrapolation is reliable when asked about predictions.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Linear modelling: write y = mx + c with x and y as real-world variables. Gradient m = rate of change; y-intercept c = initial value. Find m and c from two data points. State units in all interpretations. Models are only valid within the data range.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-interpret', prompt: 'In y = mx + c, what do m and c each represent in a real-world context?' },
            { id: 'cue-2', blockId: 'worked-sprint', prompt: 'Construct a linear model for a spring using points (500, 22) and (1500, 26).' },
            { id: 'cue-3', blockId: 'p-validity', prompt: 'Why might a linear model fail when extrapolating beyond the data range?' },
            { id: 'cue-4', blockId: 'list-method', prompt: 'List the 6 steps for setting up and using a linear model.' }
        ],
        summaryText: 'm = rate of change (with units), c = initial value. Find from two data points. Interpret both in context. Models valid only within data range.',
        ready: true
    },
    evidence: []
};
