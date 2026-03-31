import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildAccessNotice,
  buildProtectedRouteState,
  getLocationPath,
  resolvePostAuthRedirect,
  sanitizeRedirectPath,
} from './accessControl.js';

test('getLocationPath preserves pathname, search, and hash', () => {
  assert.equal(
    getLocationPath({ pathname: '/live/abc', search: '?tab=chat', hash: '#latest' }),
    '/live/abc?tab=chat#latest'
  );
});

test('sanitizeRedirectPath only allows in-app paths', () => {
  assert.equal(sanitizeRedirectPath('/teacher/monitor?tab=live#current'), '/teacher/monitor?tab=live#current');
  assert.equal(sanitizeRedirectPath('https://example.com/teacher', '/settings'), '/settings');
  assert.equal(sanitizeRedirectPath('//example.com/teacher', '/settings'), '/settings');
  assert.equal(sanitizeRedirectPath('javascript:alert(1)', '/settings'), '/settings');
});

test('buildProtectedRouteState captures the requested page and access details', () => {
  const state = buildProtectedRouteState(
    { pathname: '/teacher', search: '?tab=live', hash: '#queue' },
    {
      reason: 'monitor live teacher sessions',
      accessRequired: 'role',
      requiredRoles: ['teacher'],
      deniedRole: 'student',
    }
  );

  assert.deepEqual(state, {
    focusSection: 'profile',
    from: '/teacher?tab=live#queue',
    accessRequired: 'role',
    accessReason: 'monitor live teacher sessions',
    requiredRoles: ['teacher'],
    deniedRole: 'student',
  });
});

test('buildAccessNotice describes sign-in requirements and role limits', () => {
  assert.deepEqual(
    buildAccessNotice({
      accessRequired: 'auth',
      accessReason: 'join a live class',
      canSignIn: true,
    }),
    {
      title: 'Sign-In Required',
      body: 'You need to sign in to join a live class.',
    }
  );

  assert.deepEqual(
    buildAccessNotice({
      accessRequired: 'role',
      accessReason: 'view student live notes',
      deniedRole: 'student',
      requiredRoles: ['teacher'],
      role: 'student',
    }),
    {
      title: 'Access Limited',
      body: 'This account is currently student. teacher access is required to view student live notes.',
    }
  );
});

test('resolvePostAuthRedirect only resumes auth-blocked requests', () => {
  assert.equal(
    resolvePostAuthRedirect({
      accessRequired: 'auth',
      fromPath: '/live/session-42',
      fallback: '/settings',
    }),
    '/live/session-42'
  );

  assert.equal(
    resolvePostAuthRedirect({
      accessRequired: 'auth',
      fromPath: 'https://example.com/teacher',
      fallback: '/settings',
    }),
    '/settings'
  );

  assert.equal(
    resolvePostAuthRedirect({
      accessRequired: 'role',
      fromPath: '/teacher',
      fallback: '/settings',
    }),
    null
  );
});
