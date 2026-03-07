const fs = require('fs');
const path = require('path');

// Dynamically use import() since the syllabuses are ES modules but this script is CommonJS
async function generateNotes() {
    try {
        const { accountingSyllabus } = await import('../src/data/accountingSyllabus.js');
        const { businessSyllabus } = await import('../src/data/businessSyllabus.js');
        const { economicsSyllabus } = await import('../src/data/economicsSyllabus.js');
        const { mathematicsSyllabus } = await import('../src/data/mathematicsSyllabus.js');

        const subjects = [
            { name: 'accounting', syllabus: accountingSyllabus },
            { name: 'business', syllabus: businessSyllabus },
            { name: 'economics', syllabus: economicsSyllabus },
            { name: 'mathematics', syllabus: mathematicsSyllabus }
        ];

        for (const subject of subjects) {
            const subjectName = subject.name;
            const syllabus = subject.syllabus;

            // Ensure directory exists
            const dirPath = path.join(__dirname, `../src/data/seedNotes/${subjectName}`);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            // Get first unit, topic, subtopic
            const firstUnit = syllabus.units[0];
            const firstTopic = firstUnit?.topics[0];
            const firstSubtopic = firstTopic?.subtopics[0];

            if (firstUnit && firstTopic && firstSubtopic) {
                // Determine topicId - sometimes it's a number, sometimes a string like '3A'
                let topicId = firstTopic.id;

                const noteContent = `/**
 * Seed note: ${subjectName.charAt(0).toUpperCase() + subjectName.slice(1)} · Unit ${firstUnit.id} · Topic ${topicId} · Subtopic 0
 * "${firstSubtopic}"
 */

export const note_${subjectName}_${firstUnit.id}_${topicId}_0 = {
    blocks: [
        {
            id: 'objective-block',
            type: 'objective',
            data: {
                text: 'Understand the core concepts of ${firstSubtopic}.'
            },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: {
                text: 'This is a placeholder seed note for the ${subjectName} subject. Content for this section is currently empty and pending further expansion.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: false,
        cues: [],
        summaryText: 'Placeholder note.',
        ready: false
    },
    evidence: []
};

export default note_${subjectName}_${firstUnit.id}_${topicId}_0;
`;

                const filePath = path.join(dirPath, `note_${firstUnit.id}_${topicId}_0.js`);
                fs.writeFileSync(filePath, noteContent, 'utf8');
                console.log(`Created starter note for ${subjectName} at ${filePath}`);
            }
        }

    } catch (e) {
        console.error("Failed to generate notes:", e);
    }
}

generateNotes();
