import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistrySyllabus } from './chemistrySyllabus.js';

function flattenTopics() {
    return chemistrySyllabus.units.flatMap((unit) => unit.topics);
}

test('topic IDs are unique and include expected syllabus IDs', () => {
    const topicIds = flattenTopics().map((topic) => topic.id);
    const idSet = new Set(topicIds);

    assert.equal(idSet.size, topicIds.length, 'Topic IDs must be unique');

    const numericIds = topicIds.filter((id) => typeof id === 'number').sort((a, b) => a - b);
    assert.deepEqual(numericIds, Array.from({ length: 20 }, (_, i) => i + 1));

    assert.ok(idSet.has('3A'));
    assert.ok(idSet.has('6A'));
});

test('topic titles and subtopics use concise non-empty labels', () => {
    const blockedPrefix = /^(know|understand|be able to)\b/i;

    for (const topic of flattenTopics()) {
        assert.equal(typeof topic.title, 'string');
        assert.ok(topic.title.trim().length > 0, `Empty topic title for ${topic.id}`);

        assert.ok(Array.isArray(topic.subtopics), `Subtopics missing for topic ${topic.id}`);
        assert.ok(topic.subtopics.length > 0, `Subtopics empty for topic ${topic.id}`);

        for (const subtopic of topic.subtopics) {
            assert.equal(typeof subtopic, 'string');
            const label = subtopic.trim();
            assert.ok(label.length > 0, `Empty subtopic in topic ${topic.id}`);
            assert.ok(label.length <= 70, `Subtopic too long (${label.length}) in topic ${topic.id}: ${label}`);
            assert.equal(blockedPrefix.test(label), false, `Instructional boilerplate in topic ${topic.id}: ${label}`);
        }
    }
});
