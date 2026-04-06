export const FIXED_TEST_NOW_ISO = '2026-04-06T12:00:00.000Z';
export const FIXED_TEST_NOW = Date.parse(FIXED_TEST_NOW_ISO);

export function createDebugSession({ role = 'student', userId, username }) {
  return {
    role,
    userId,
    username,
  };
}

export const SEEDED_MISTAKES = Object.freeze([
  Object.freeze({
    id: 'm:test:1',
    topic: 'Formulae & Amount',
    question: 'What is the formula for amount of substance?',
    yourAnswer: 'mass x molar mass',
    correctAnswer: 'mass / molar mass',
    attempts: 2,
    lastAttempt: '2026-01-01T00:00:00.000Z',
  }),
]);

export const SEEDED_FLASHCARDS = Object.freeze([
  Object.freeze({
    cardId: 'card:test:1',
    subject: 'chemistry',
    sourceNoteId: 'note:chemistry:1:1:0',
    sourceLabel: 'Formulae & Amount',
    front: 'What is Avogadro constant?',
    back: '6.02 x 10^23 mol^-1',
    createdAt: '2026-01-01T00:00:00.000Z',
  }),
  Object.freeze({
    cardId: 'card:test:2',
    subject: 'chemistry',
    sourceNoteId: 'note:chemistry:1:1:1',
    sourceLabel: 'The Mole',
    front: 'Define molar mass.',
    back: 'Mass per mole of a substance.',
    createdAt: '2026-01-02T00:00:00.000Z',
  }),
]);

export const SEEDED_ACCESS_EXPIRED_NOTICE = Object.freeze({
  type: 'expired',
  accessExpiresAt: FIXED_TEST_NOW - 5_000,
  accessDurationMonths: 1,
});

export const SEEDED_ADMIN_DASHBOARD_FIXTURE = Object.freeze({
  pendingUsers: Object.freeze([
    Object.freeze({
      _id: 'users:pending-admin-fixture',
      userId: 'pending_admin_fixture',
      username: 'Pending Student',
      email: 'pending@example.com',
      role: 'student',
      accountStatus: 'pending',
      accessStatus: 'selection_required',
      accessExpiresAt: null,
      createdAt: FIXED_TEST_NOW - 86_400_000,
    }),
  ]),
  allUsers: Object.freeze([
    Object.freeze({
      _id: 'users:fixture-1',
      userId: 'fixture_student_1',
      username: 'Fixture Student',
      email: 'fixture.student@example.com',
      role: 'student',
      accountStatus: 'approved',
      accessStatus: 'active',
      accessExpiresAt: FIXED_TEST_NOW + 30 * 24 * 60 * 60 * 1000,
      createdAt: FIXED_TEST_NOW - 14 * 24 * 60 * 60 * 1000,
    }),
    Object.freeze({
      _id: 'users:fixture-2',
      userId: 'fixture_student_2',
      username: 'Expired Student',
      email: 'expired.student@example.com',
      role: 'student',
      accountStatus: 'approved',
      accessStatus: 'expired',
      accessExpiresAt: FIXED_TEST_NOW - 60 * 60 * 1000,
      createdAt: FIXED_TEST_NOW - 21 * 24 * 60 * 60 * 1000,
    }),
    Object.freeze({
      _id: 'users:pending-admin-fixture',
      userId: 'pending_admin_fixture',
      username: 'Pending Student',
      email: 'pending@example.com',
      role: 'student',
      accountStatus: 'pending',
      accessStatus: 'selection_required',
      accessExpiresAt: null,
      createdAt: FIXED_TEST_NOW - 86_400_000,
    }),
  ]),
  recentLogins: Object.freeze([
    Object.freeze({
      _id: 'loginEvents:fixture-1',
      username: 'Fixture Student',
      provider: 'google',
      eventType: 'sign_in',
      accessExpiresAt: FIXED_TEST_NOW + 30 * 24 * 60 * 60 * 1000,
      emailDeliveryStatus: 'sent',
    }),
    Object.freeze({
      _id: 'loginEvents:fixture-2',
      username: 'Expired Student',
      provider: 'clerk',
      eventType: 'access_selected',
      accessExpiresAt: FIXED_TEST_NOW - 60 * 60 * 1000,
      emailDeliveryStatus: 'failed',
    }),
  ]),
  flags: Object.freeze([
    Object.freeze({ key: 'requireApproval', label: 'Require Approval', description: 'New sign-ups must be approved by admin before access', enabled: true }),
    Object.freeze({ key: 'payments', label: 'Payments', description: 'Payment slip upload and payment-review workflow', enabled: false }),
  ]),
  paymentRequests: Object.freeze([
    Object.freeze({
      _id: 'paymentRequests:fixture-1',
      userId: 'fixture_student_1',
      username: 'Fixture Student',
      email: 'fixture.student@example.com',
      avatarUrl: null,
      plan: 'monthly',
      amount: 350,
      fileName: 'fixture-slip.jpg',
      mimeType: 'image/jpeg',
      status: 'pending',
      submittedAt: FIXED_TEST_NOW - 2 * 60 * 60 * 1000,
      reviewedAt: null,
      reviewedBy: null,
      adminNotes: null,
      slipUrl: 'https://example.com/fixture-slip.jpg',
    }),
    Object.freeze({
      _id: 'paymentRequests:fixture-2',
      userId: 'fixture_student_2',
      username: 'Expired Student',
      email: 'expired.student@example.com',
      avatarUrl: null,
      plan: 'yearly',
      amount: 3600,
      fileName: 'fixture-slip.pdf',
      mimeType: 'application/pdf',
      status: 'approved',
      submittedAt: FIXED_TEST_NOW - 4 * 60 * 60 * 1000,
      reviewedAt: FIXED_TEST_NOW - 90 * 60 * 1000,
      reviewedBy: 'admin_user',
      adminNotes: 'Verified by finance.',
      slipUrl: 'https://example.com/fixture-slip.pdf',
    }),
  ]),
  paymentCounts: Object.freeze({ pending: 1, approved: 1, rejected: 0, total: 2 }),
  observabilitySummary: Object.freeze({
    generatedAt: FIXED_TEST_NOW,
    windowMs: 24 * 60 * 60 * 1000,
    routeViews24h: 12,
    noteViews24h: 8,
    fullscreenEntries24h: 3,
    recallOpens24h: 5,
    errors24h: 1,
    warnings24h: 2,
    pendingEvents: 1,
    emailAttempts24h: 4,
    emailDelivered24h: 2,
    emailFailures24h: 1,
    pendingLoginAlerts: 1,
    cronRuns24h: 6,
    cronFailures24h: 1,
    status: 'degraded',
    topRoutes: Object.freeze([
      Object.freeze({ route: '/notes/chemistry/1/1/0', count: 5 }),
      Object.freeze({ route: '/progress', count: 3 }),
    ]),
    recentErrors: Object.freeze([
      Object.freeze({ level: 'error', component: 'authNotifications', message: 'SendGrid request failed', timestamp: FIXED_TEST_NOW - 10_000 }),
    ]),
    alerts: Object.freeze([
      Object.freeze({ severity: 'error', code: 'email_delivery_failures', message: '1 email delivery attempt(s) failed in the last 24 hours.', traceId: 'email_trace_fixture_1' }),
      Object.freeze({ severity: 'error', code: 'cron_failures', message: '1 cron run(s) failed in the last 24 hours.', traceId: 'cron_trace_fixture_1', jobName: 'process pending login alert emails' }),
    ]),
    recentEmailFailures: Object.freeze([
      Object.freeze({ traceId: 'email_trace_fixture_1', attemptNumber: 2, recipientMasked: 'al***@example.com', errorMessage: 'SendGrid request failed: 502 upstream timeout', httpStatus: 502, createdAt: FIXED_TEST_NOW - 9_000 }),
    ]),
    recentCronFailures: Object.freeze([
      Object.freeze({ traceId: 'cron_trace_fixture_1', jobName: 'process pending login alert emails', errorMessage: 'Cron failed', startedAt: FIXED_TEST_NOW - 8_000, completedAt: FIXED_TEST_NOW - 7_500 }),
    ]),
    recentCronRuns: Object.freeze([
      Object.freeze({ jobName: 'process pending login alert emails', traceId: 'cron_trace_fixture_1', status: 'failed', startedAt: FIXED_TEST_NOW - 8_000, completedAt: FIXED_TEST_NOW - 7_500, durationMs: 500 }),
      Object.freeze({ jobName: 'cleanup old logs', traceId: 'cron_trace_fixture_2', status: 'succeeded', startedAt: FIXED_TEST_NOW - 20_000, completedAt: FIXED_TEST_NOW - 19_100, durationMs: 900 }),
    ]),
    lastSuccessfulCronAt: FIXED_TEST_NOW - 19_100,
  }),
});