/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 2
 * "Anomalous properties of water"
 * Source: Pearson Edexcel IAL Chemistry — Section 7B
 */
export const note_chemistry_2_7_2 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand, in terms of intermolecular interactions, the anomalous physical properties of water including its melting/boiling temperatures and the density of ice vs water.' },
            terms: []
        },
        {
            id: 'h-anomalous',
            type: 'heading',
            data: { text: 'Anomalous Properties of Water', level: 2 },
            terms: []
        },
        {
            id: 'p-why',
            type: 'paragraph',
            data: { text: 'Water consists of small, light molecules (Mr = 18). Based on London forces alone, it should be a gas at room temperature with a very low boiling point (similar to H₂S or CH₄). However, the extensive <strong>hydrogen bonding</strong> between water molecules gives it unusual (anomalous) physical properties.' },
            terms: ['Anomalous']
        },
        {
            id: 'callout-temp',
            type: 'callout',
            data: {
                style: 'key',
                title: 'High Melting and Boiling Temperatures',
                text: 'Water has unexpectedly high melting (0°C) and boiling (100°C) points compared to similar hydrides (like H₂S) because a significant amount of thermal energy is required to break the strong hydrogen bonds.<br/><br/><strong>Comparison with HF and NH₃:</strong> Water (100°C), hydrogen fluoride (20°C), and ammonia (–33°C) all have 10 electrons, so their London forces are nearly identical. Water has the highest boiling point because <strong>each water molecule can form up to 4 hydrogen bonds</strong> (2 lone pairs, 2 hydrogens), whereas HF can effectively form only 2 per molecule, and NH₃ forms 1. More hydrogen bonds per molecule = more energy required to boil.'
            },
            terms: []
        },
        {
            id: 'callout-density',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Density: Ice is less dense than liquid water',
                text: 'Normally, solid states are denser than liquid states because particles pack closer together. Water is an exception: solid ice floats on liquid water.<br/><br/><strong>Explanation:</strong> In ice, hydrogen bonds hold the H₂O molecules in a rigid, <strong>open tetrahedral lattice structure</strong> to maximise hydrogen bonding (4 bonds per molecule). This open structure leaves large empty spaces, making ice less dense. When ice melts, this lattice partially collapses, allowing molecules to move closer together, increasing the density.'
            },
            terms: ['Density', 'Tetrahedral lattice']
        },
        {
            id: 'p-biological',
            type: 'paragraph',
            data: { text: 'This density anomaly is biologically crucial: ice forms on the surface of lakes and oceans, insulating the water below and allowing aquatic life to survive winter.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-why', prompt: 'Based on molar mass alone, what state would you expect water to be in at room temperature? Why?' },
            { id: 'c2', blockId: 'callout-temp', prompt: 'Explain why water has a much higher boiling point than hydrogen sulfide (H₂S).' },
            { id: 'c3', blockId: 'callout-temp', prompt: 'Water, hydrogen fluoride (HF), and ammonia (NH₃) all have 10 electrons and form hydrogen bonds. Explain why water has the highest boiling point of the three.' },
            { id: 'c4', blockId: 'callout-density', prompt: 'Why is ice less dense than liquid water? Describe the structure of ice.' }
        ],
        summaryText: 'Water has anomalous properties due to extensive hydrogen bonding. (1) High melting/boiling points: H-bonds require lots of energy to break compared to London forces. It boils higher than HF/NH3 because it forms 4 H-bonds per molecule compared to 2 and 1. (2) Solid ice is less dense than liquid water: in ice, H-bonds form a rigid, open tetrahedral lattice with large gaps. Melting collapses this structure, packing molecules closer together.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_7_2;
