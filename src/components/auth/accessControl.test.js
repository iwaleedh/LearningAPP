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
    getLocationPath({ pathname: '/notes', search: '?subject=chemistry', hash: '#latest' }),
    '/notes?subject=chemistry#latest'
  );
});

test('sanitizeRedirectPath only allows in-app paths', () => {
  assert.equal(sanitizeRedirectPath('/progress?subject=chemistry#current'), '/progress?subject=chemistry#current');
  assert.equal(sanitizeRedirectPath('https://example.com/teacher', '/settings'), '/settings');
  assert.equal(sanitizeRedirectPath('//example.com/teacher', '/settings'), '/settings');
  assert.equal(sanitizeRedirectPath('javascript:alert(1)', '/settings'), '/settings');
});

test('buildProtectedRouteState captures the requested page and access details', () => {
  const state = buildProtectedRouteState(
    { pathname: '/admin', search: '?tab=users', hash: '#queue' },
    {
      reason: 'manage accounts',
      accessRequired: 'role',
      requiredRoles: ['admin'],
      deniedRole: 'student',
    }
  );

  assert.deepEqual(state, {
    focusSection: 'profile',
    from: '/admin?tab=users#queue',
    accessRequired: 'role',
    accessReason: 'manage accounts',
    requiredRoles: ['admin'],
    deniedRole: 'student',
  });
});

test('buildAccessNotice describes sign-in requirements and role limits', () => {
  assert.deepEqual(
    buildAccessNotice({
      accessRequired: 'auth',
      accessReason: 'study subjects',
      canSignIn: true,
    }),
    {
      title: 'Sign-In Required',
      body: 'You need to sign in to study subjects.',
    }
  );

  assert.deepEqual(
    buildAccessNotice({
      accessRequired: 'role',
      accessReason: 'manage accounts',
      deniedRole: 'student',
      requiredRoles: ['admin'],
      role: 'student',
    }),
    {
      title: 'Access Limited',
      body: 'This account is currently student. admin access is required to manage accounts.',
    }
  );
});

test('resolvePostAuthRedirect only resumes auth-blocked requests', () => {
  assert.equal(
    resolvePostAuthRedirect({
      accessRequired: 'auth',
      fromPath: '/chapters?subject=chemistry',
      fallback: '/settings',
    }),
    '/chapters?subject=chemistry'
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
