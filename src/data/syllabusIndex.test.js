import test from 'node:test';
import assert from 'node:assert/strict';
import { syllabusesBySubject } from './syllabusCatalog.js';
import { getSyllabusBySubject, normalizeSubjectKey, subjectNoteCounts } from './syllabusIndex.js';

const expectedSubjects = [
    'chemistry',
    'biology',
    'physics',
    'math',
    'mathematics',
    'business',
    'economics',
    'accounting',
];

function validateSyllabusShape(subjectKey, syllabus) {
    assert.ok(syllabus?.qualification, `${subjectKey}: missing qualification`);
    assert.ok(syllabus?.source, `${subjectKey}: missing source`);
    assert.ok(Array.isArray(syllabus.units) && syllabus.units.length > 0, `${subjectKey}: missing units`);

    const unitIds = new Set();
    for (const unit of syllabus.units) {
        assert.ok(unit.id !== undefined && unit.id !== null, `${subjectKey}: unit missing id`);
        assert.ok(!unitIds.has(unit.id), `${subjectKey}: duplicate unit id ${unit.id}`);
        unitIds.add(unit.id);

        assert.ok(typeof unit.code === 'string' && unit.code.length > 0, `${subjectKey}: unit ${unit.id} missing code`);
        assert.ok(typeof unit.title === 'string' && unit.title.length > 0, `${subjectKey}: unit ${unit.id} missing title`);
        assert.ok(Array.isArray(unit.topics) && unit.topics.length > 0, `${subjectKey}: unit ${unit.id} missing topics`);

        for (const topic of unit.topics) {
            assert.ok(topic.id !== undefined && topic.id !== null, `${subjectKey}: topic missing id in unit ${unit.id}`);
            assert.ok(typeof topic.title === 'string' && topic.title.trim().length > 0, `${subjectKey}: empty topic title in unit ${unit.id}`);
            assert.ok(Array.isArray(topic.subtopics) && topic.subtopics.length > 0, `${subjectKey}: topic ${topic.id} missing subtopics`);

            for (const subtopic of topic.subtopics) {
                // Pages render subtopics directly as React children, so objects would crash them.
                assert.equal(typeof subtopic, 'string', `${subjectKey}: non-string subtopic in topic ${topic.id}`);
                const label = subtopic.trim();
                assert.ok(label.length > 0, `${subjectKey}: empty subtopic in topic ${topic.id}`);
                assert.ok(label.length <= 70, `${subjectKey}: subtopic too long (${label.length})`);
                assert.equal(/^(know|understand|be able to)\b/i.test(label), false, `${subjectKey}: instructional prefix in ${label}`);
            }
        }
    }
}

test('syllabus map includes expected subjects', () => {
    for (const key of expectedSubjects) {
        assert.ok(syllabusesBySubject[key], `Missing syllabus map entry for ${key}`);
    }
});

test('all subject syllabuses have valid concise structure', async () => {
    const seen = new Set();

    for (const key of expectedSubjects) {
        if (seen.has(key)) continue;
        const syllabus = await getSyllabusBySubject(key);
        validateSyllabusShape(key, syllabus);

        if (key === 'math') seen.add('mathematics');
        if (key === 'mathematics') seen.add('math');
        seen.add(key);
    }
});

test('unknown subject falls back to chemistry', async () => {
    const fallback = await getSyllabusBySubject('unknown-subject');
    const chemistry = await getSyllabusBySubject('chemistry');
    assert.equal(fallback, chemistry);
});

test('every catalogued syllabus uses plain-string subtopics', () => {
    for (const [key, syllabus] of Object.entries(syllabusesBySubject)) {
        for (const unit of syllabus.units) {
            for (const topic of unit.topics) {
                for (const subtopic of topic.subtopics) {
                    assert.equal(typeof subtopic, 'string', `${key}: non-string subtopic in ${unit.id}:${topic.id}`);
                }
            }
        }
    }
});

test('subjectNoteCounts match syllabus subtopic totals', async () => {
    for (const [subject, count] of Object.entries(subjectNoteCounts)) {
        const syllabus = await getSyllabusBySubject(subject);
        const total = syllabus.units.reduce(
            (sum, unit) => sum + unit.topics.reduce((topicSum, topic) => topicSum + topic.subtopics.length, 0),
            0,
        );
        assert.equal(count, total, `${subject}: subjectNoteCounts is ${count} but the syllabus has ${total} subtopics`);
    }
});

test('legacy igcse-physics key resolves to olevel_physics', () => {
    assert.equal(normalizeSubjectKey('igcse-physics'), 'olevel_physics');
});
