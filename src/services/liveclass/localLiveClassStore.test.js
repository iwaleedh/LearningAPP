import test from 'node:test';
import assert from 'node:assert/strict';
import {
  __resetLocalLiveStoreForTests,
  createLocalLiveClass,
} from './localLiveClassStore.js';

test('local live class creation requires a teacher role', () => {
  __resetLocalLiveStoreForTests();

  assert.throws(
    () => createLocalLiveClass({
      hostUserId: 'student_123',
      title: 'Student session',
      actorRole: 'student',
    }),
    /Only teacher accounts can create a live class\./
  );
});

test('local live class creation succeeds for teachers', () => {
  __resetLocalLiveStoreForTests();

  const session = createLocalLiveClass({
    hostUserId: 'teacher_123',
    title: 'Teacher session',
    actorRole: 'teacher',
  });

  assert.ok(session);
  assert.match(session._id, /^local_/);
  assert.equal(session.title, 'Teacher session');
  assert.equal(session.status, 'active');
  assert.equal(session.hostUserId, 'teacher_123');
  assert.equal(session.joinCode.length, 6);
});
