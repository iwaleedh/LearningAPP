# Flaky Test Triage

This is the required process for any test that fails intermittently.

## Definition

A test is flaky when it fails and passes without a meaningful code or environment change.

## Immediate Response

1. Capture the failing command, commit SHA, and failure signature.
2. Re-run the smallest failing scope locally using the same seed data.
3. Check Playwright trace or test logs before changing the test.
4. Classify the failure as product defect, test harness defect, environment issue, or unknown.

## Required Record

Open or update a tracking item with:

- Test name and file path
- First failing SHA and timestamp
- Failure message or screenshot
- Reproduction command
- Suspected root cause
- Assigned owner
- Target fix date

## Allowed Actions

- Fix the product or harness and keep the test enabled
- Add targeted retries only when the underlying failure is being actively fixed
- Quarantine temporarily only with an owner and expiry date

## Disallowed Actions

- Deleting the test to unblock a merge
- Broadening selectors until assertions become meaningless
- Marking the test skipped without a tracking record and expiry date

## Quarantine Rule

If a test must be quarantined:

1. Record the reason and owner in the tracking item.
2. Add an expiry date no more than 14 days out.
3. Keep the test in the repository and visible in CI history.
4. Re-enable it immediately after the root cause is fixed.

## Suggested Reproduction Commands

```bash
npm run test:seed
npx playwright test tests/e2e/<spec>.js --repeat-each=10
npm run test:integration
```

## Exit Criteria

A flaky test is considered closed only when:

- the root cause is identified,
- the fix is merged,
- the test passes reliably for at least 5 consecutive local or CI runs.
