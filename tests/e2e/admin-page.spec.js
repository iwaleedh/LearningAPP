import { test, expect } from '@playwright/test';
import { seedAdminDashboardFixture, seedDevAuthSession } from './support/browserSeeds.js';
import { SEEDED_ADMIN_DASHBOARD_FIXTURE, createDebugSession } from '../support/testSeeds.js';

const adminSession = createDebugSession({
  role: 'admin',
  userId: 'debug_admin_dashboard',
  username: 'Admin QA',
});

test.describe('admin dashboard QA', () => {
  test.beforeEach(async ({ page }) => {
    await seedDevAuthSession(page, adminSession);
    await seedAdminDashboardFixture(page, SEEDED_ADMIN_DASHBOARD_FIXTURE);
  });

  test('users tab exposes direct access controls and the expiry modal', async ({ page }) => {
    await page.goto('/admin');

    await expect(page.getByText('Admin Dashboard')).toBeVisible();
    await expect(page.getByText('Recent Login Events')).toBeVisible();
    await expect(page.getByText('Fixture Student')).toBeVisible();

    await page.getByRole('button', { name: /^Users(?:\s+\d+)?$/ }).click();
    await expect(page.getByText('Fixture Student')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Set Expiry' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Reset Window' }).first()).toBeVisible();

    await page.getByRole('button', { name: 'Set Expiry' }).first().click();
    await expect(page.getByText('Set Access Expiry')).toBeVisible();
    await expect(page.locator('#admin-access-expiry-input')).toBeVisible();
    await expect(page.locator('.admin-modal-hint')).toBeVisible();

    await page.getByRole('button', { name: '+90 days' }).click();
    await expect(page.locator('.admin-modal-hint')).toContainText('Effective UTC timestamp:');

    await page.locator('#admin-access-expiry-reason').fill('Manual extension for QA');
    await expect(page.locator('#admin-access-expiry-reason')).toHaveValue('Manual extension for QA');
  });

  test('overview exposes the legacy pending migration control in fixture mode', async ({ page }) => {
    await page.goto('/admin');

    await expect(page.locator('.admin-section-heading--flush')).toHaveText('Legacy Pending Users');
    await expect(page.getByLabel('Start 7-day trial for users who have never used one')).toBeChecked();
    await expect(page.getByRole('button', { name: 'Migrate Legacy Pending Users' })).toBeDisabled();
    await expect(page.getByText('Unavailable in fixture mode.')).toBeVisible();
  });

  test('users tab stays usable on mobile and protects the current admin row', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await seedAdminDashboardFixture(page, {
      ...SEEDED_ADMIN_DASHBOARD_FIXTURE,
      allUsers: [
        ...SEEDED_ADMIN_DASHBOARD_FIXTURE.allUsers,
        {
          _id: 'users:admin-fixture',
          userId: 'debug_admin_dashboard',
          username: 'Admin QA',
          email: 'iwaleedh@gmail.com',
          role: 'admin',
          accountStatus: 'approved',
          accessStatus: 'active',
          accessGrantKind: 'unlimited',
          accessExpiresAt: null,
          createdAt: Date.now(),
          isAdmin: true,
        },
      ],
    });

    await page.goto('/admin');
    await page.getByRole('button', { name: /^Users(?:\s+\d+)?$/ }).click();

    const usersTableWrap = page.locator('.admin-table-wrap').first();
    const overflows = await usersTableWrap.evaluate((node) => node.scrollWidth > node.clientWidth + 1);

    await expect(page.locator('.admin-user-row .admin-user-name').filter({ hasText: 'Admin QA' })).toBeVisible();
    await expect(page.getByText('Protected')).toBeVisible();
    await expect(page.getByRole('button', { name: /Delete Fixture Student/i })).toBeVisible();
    expect(overflows).toBe(false);
  });

  test('observability tab renders seeded alerts and delivery tables', async ({ page }) => {
    await page.goto('/admin');

    await page.getByRole('button', { name: 'Observability' }).click();

    await expect(page.getByText(/Release health is/)).toContainText('degraded');
    await expect(page.getByText('Active Alerts')).toBeVisible();
    await expect(page.getByText('email_delivery_failures')).toBeVisible();
    await expect(page.getByText('cron_failures')).toBeVisible();
    await expect(page.getByText('Recent Email Delivery Failures')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'email_trace_fixture_1' })).toBeVisible();
    await expect(page.getByText('Recent Cron Runs')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'process pending login alert emails' })).toBeVisible();
  });

  test('feature flags tab renders seeded fixture flags in read-only mode', async ({ page }) => {
    await page.goto('/admin');

    await page.getByRole('button', { name: 'Feature Flags' }).click();

    const requireApprovalRow = page.locator('.flag-row').filter({ hasText: 'Require Approval' });
    const paymentsRow = page.locator('.flag-row').filter({ hasText: 'Payments' });

    await expect(requireApprovalRow).toContainText('New sign-ups must be approved by admin before access');
    await expect(requireApprovalRow.getByRole('button')).toContainText('Enabled');
    await expect(requireApprovalRow.getByRole('button')).toBeDisabled();
    await expect(paymentsRow).toContainText('Payment slip upload and payment-review workflow');
    await expect(paymentsRow.getByRole('button')).toContainText('Disabled');
    await expect(paymentsRow.getByRole('button')).toBeDisabled();
  });

  test('payments tab renders seeded requests and status filters', async ({ page }) => {
    await page.goto('/admin');

    await page.getByRole('button', { name: 'Payments 1' }).click();

    await expect(page.getByText('Fixture Student')).toBeVisible();
    await expect(page.locator('.admin-table .admin-badge').filter({ hasText: 'Received' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Approve' })).toBeDisabled();

    await page.getByRole('button', { name: 'Accepted 1' }).click();
    await expect(page.getByText('Expired Student')).toBeVisible();
    await expect(page.getByText('Verified by finance.')).toBeVisible();
    await expect(page.getByRole('link', { name: /View PDF/i })).toBeVisible();
  });
});