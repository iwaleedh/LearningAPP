import test from "node:test";
import assert from "node:assert/strict";

import {
  hasUnlimitedAccessWindow,
  isTeacherUserId,
  isProductionAdminRuntime,
  resolveAccessStatus,
  resolveAdminEnvList,
  shouldSuppressAdminFallbackWarnings,
} from "./authHelpers";
import { createMockConvexCtx } from "./testUtils";

test("shouldSuppressAdminFallbackWarnings detects automated test runtimes", () => {
  assert.equal(shouldSuppressAdminFallbackWarnings({ NODE_ENV: "test" }, []), true);
  assert.equal(shouldSuppressAdminFallbackWarnings({}, ["node", "--test"]), true);
  assert.equal(shouldSuppressAdminFallbackWarnings({ NODE_ENV: "development" }, ["node", "script.js"]), false);
});

test("isProductionAdminRuntime only treats cloud and production envs as production", () => {
  assert.equal(isProductionAdminRuntime({ NODE_ENV: "production" }), true);
  assert.equal(isProductionAdminRuntime({ CONVEX_CLOUD_URL: "https://example.convex.cloud" }), true);
  assert.equal(isProductionAdminRuntime({ NODE_ENV: "development" }), false);
});

test("resolveAdminEnvList suppresses fallback warnings during tests", () => {
  const warnings: string[] = [];
  const result = resolveAdminEnvList(
    "ADMIN_EMAILS",
    ["dev@example.com"],
    { NODE_ENV: "test" },
    ["node", "--test"],
    {
      warn: (message) => warnings.push(String(message)),
      error: (message) => warnings.push(`error:${String(message)}`),
    },
  );

  assert.deepEqual(result, ["dev@example.com"]);
  assert.deepEqual(warnings, []);
});

test("resolveAdminEnvList emits a single production error and returns no fallbacks", () => {
  const errors: string[] = [];
  const logger = {
    warn: (_message: string) => {},
    error: (message: string) => errors.push(String(message)),
  };

  const first = resolveAdminEnvList(
    "ADMIN_EMAILS_TEST_ONLY",
    ["dev@example.com"],
    { NODE_ENV: "production" },
    ["node"],
    logger,
  );
  const second = resolveAdminEnvList(
    "ADMIN_EMAILS_TEST_ONLY",
    ["dev@example.com"],
    { NODE_ENV: "production" },
    ["node"],
    logger,
  );

  assert.deepEqual(first, []);
  assert.deepEqual(second, []);
  assert.equal(errors.length, 1);
  assert.match(errors[0] || "", /ADMIN_EMAILS_TEST_ONLY/);
});

test("hasUnlimitedAccessWindow recognises the configured admin email", () => {
  assert.equal(hasUnlimitedAccessWindow({ email: "iwaleedh@gmail.com" }), true);
  assert.equal(hasUnlimitedAccessWindow({ email: "student@example.com" }), false);
});

test("resolveAccessStatus keeps admin accounts active without an expiry", () => {
  assert.equal(resolveAccessStatus({ email: "iwaleedh@gmail.com", accountStatus: "approved" }), "active");
});

test("isTeacherUserId treats the configured admin email as teacher-capable", async () => {
  const { ctx } = createMockConvexCtx({
    identity: null,
    tables: {
      users: [{
        _id: "users:admin",
        userId: "admin_user",
        username: "Admin",
        email: "iwaleedh@gmail.com",
        role: "student",
        createdAt: 1,
      }],
    },
  });

  assert.equal(await isTeacherUserId(ctx as any, "admin_user"), true);
});