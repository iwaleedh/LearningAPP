const fs = require('fs');
const path = require('path');

async function checkAndScaffoldMissingChemistryNotes() {
    try {
        const { chemistrySyllabus } = await import('../src/data/chemistrySyllabus.js');
        const subjectName = 'chemistry';
        const dirPath = path.join(__dirname, `../src/data/seedNotes/${subjectName}`);

        if (!fs.existsSync(dirPath)) {
            console.error(`Directory ${dirPath} does not exist!`);
            return;
        }

        let missingFiles = [];
        let generatedFilesOutput = [];

        function createNoteFile(unitId, topicId, subtopicIndex, subtopicName) {
            const fileName = `note_${unitId}_${topicId}_${subtopicIndex}.js`;
            const filePath = path.join(dirPath, fileName);

            // Generate basic placeholder note
            const noteContent = `/**
 * Seed note: Chemistry · Unit ${unitId} · Topic ${topicId} · Subtopic ${subtopicIndex}
 * "${subtopicName}"
 */

export const note_chemistry_${unitId}_${topicId}_${subtopicIndex} = {
    blocks: [
        {
            id: 'objective-block',
            type: 'objective',
            data: {
                text: 'Placeholder seed note for ${subtopicName}. Content pending.'
            },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: {
                text: 'This is an auto-generated placeholder note for Chemistry. Content for this section has not yet been authored.'
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

export default note_chemistry_${unitId}_${topicId}_${subtopicIndex};
`;

            fs.writeFileSync(filePath, noteContent, 'utf8');
            missingFiles.push(fileName);
            generatedFilesOutput.push({
                importStr: `import { note_chemistry_${unitId}_${topicId}_${subtopicIndex} } from './chemistry/note_${unitId}_${topicId}_${subtopicIndex}.js';`,
                exportStr: `    'chemistry:${unitId}:${topicId}:${subtopicIndex}': note_chemistry_${unitId}_${topicId}_${subtopicIndex},`
            });
        }


        // Iterate through Syllabus
        for (const unit of chemistrySyllabus.units) {
            for (const topic of unit.topics) {
                // Determine topicId - sometimes string, sometimes number
                const topicId = topic.id;

                let subtopicIndex = 0;
                for (const subtopicName of topic.subtopics) {
                    const expectedFileName = `note_${unit.id}_${topicId}_${subtopicIndex}.js`;
                    const filePath = path.join(dirPath, expectedFileName);

                    if (!fs.existsSync(filePath)) {
                        createNoteFile(unit.id, topicId, subtopicIndex, subtopicName);
                    }
                    subtopicIndex++;
                }
            }
        }

        console.log(`\nFound and generated ${missingFiles.length} missing Chemistry notes.\n`);

        if (generatedFilesOutput.length > 0) {
            console.log('--- IMPORTS TO ADD ---');
            generatedFilesOutput.forEach(out => console.log(out.importStr));

            console.log('\\n--- EXPORTS TO ADD ---');
            generatedFilesOutput.forEach(out => console.log(out.exportStr));
        }

    } catch (e) {
        console.error("Failed to check missing notes:", e);
    }
}

checkAndScaffoldMissingChemistryNotes();
