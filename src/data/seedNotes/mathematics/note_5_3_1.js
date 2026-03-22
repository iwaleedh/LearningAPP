/**
 * WME01 · Topic 3 · Subtopic 1 — Kinematics graphs and interpretation
 */
export const note_mathematics_5_3_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Interpret and sketch displacement-time, velocity-time, and acceleration-time graphs, using areas and gradients to extract kinematic information.' },
            terms: []
        },
        {
            id: 'h-vt', type: 'heading',
            data: { text: 'Velocity-Time Graph', level: 2 }, terms: []
        },
        {
            id: 'callout-key1', type: 'callout',
            data: {
                style: 'key',
                title: 'v-t Graph',
                text: 'Gradient of v-t graph = acceleration\n\nArea under v-t graph = displacement\n  (area below axis = negative displacement)\n\nHorizontal line (v = constant) \u27a2 a = 0\nStraight line with slope \u27a2 uniform acceleration'
            }, terms: []
        },
        {
            id: 'h-st', type: 'heading',
            data: { text: 'Displacement-Time Graph', level: 2 }, terms: []
        },
        {
            id: 'callout-key2', type: 'callout',
            data: {
                style: 'key',
                title: 's-t Graph',
                text: 'Gradient of s-t graph = velocity\n\nHorizontal line \u27a2 v = 0 (stationary)\nCurve concave up \u27a2 acceleration\nNegative gradient \u27a2 moving in negative direction'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Total Distance vs Displacement',
                text: 'Displacement = net area (areas below axis are negative).\nTotal distance = sum of |areas| (all areas added regardless of sign).\nIf particle changes direction, split the v-t graph at v=0.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Trapezium on a v-t graph: v goes from 0 to 6 m s\u207b\u00b9 uniformly over 4 s, stays at 6 for 3 s, then decreases to 0 in 2 s. Find total displacement.',
                text: 'Area of triangle (0 to 4 s): \u00bd \u00d7 4 \u00d7 6 = 12 m\nArea of rectangle (4 to 7 s): 3 \u00d7 6 = 18 m\nArea of triangle (7 to 9 s): \u00bd \u00d7 2 \u00d7 6 = 6 m\n\nTotal displacement = 12+18+6 = 36 m'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'v-t graph: gradient=a, area=displacement. s-t graph: gradient=v. Total distance=sum of |areas|. Particle reverses when v=0 on v-t graph.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "For velocity-time graphs, remember that the gradient gives acceleration and the area under the graph gives displacement. In multi-stage journeys, splitting the area into simple shapes (triangles and rectangles) is much safer and less error-prone than trying to use suvat across the whole journey."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key1', prompt: 'State two facts about a v-t graph (gradient and area).' },
            { id: 'c2', blockId: 'callout-key2', prompt: 'What does the gradient of a s-t graph represent?' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'How do you find total distance (not displacement) from a v-t graph?' },
            { id: 'c4', blockId: 'callout-we1', prompt: 'Find the total displacement for a trapezoidal v-t profile (0\u21926 over 4s, 6 for 3s, 6\u21920 over 2s).' }
        ],
        summaryText: 'v-t: gradient=a, area=s. s-t: gradient=v. Distance=\u03a3|areas|. Split at v=0 for direction change.',
        ready: true
    },
    evidence: []
};
