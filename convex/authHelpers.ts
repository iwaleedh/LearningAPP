import type { MutationCtx, QueryCtx } from "./_generated/server";

type PublicCtx = MutationCtx | QueryCtx;
type UserRole = "student" | "teacher";
type IdentityWithRoleClaims = {
  subject: string;
  preferredUsername?: string;
  nickname?: string;
  name?: string;
  email?: string;
  role?: unknown;
  appRole?: unknown;
  app_role?: unknown;
  publicMetadata?: { role?: unknown };
  public_metadata?: { role?: unknown };
};

// ── Admin config — read from environment variables (S4 fix) ──────────
// Set ADMIN_EMAILS and ADMIN_USERNAMES in the Convex dashboard → Settings → Environment Variables.
// Comma-separated lists: e.g. ADMIN_EMAILS="alice@example.com,bob@example.com"
// Falls back to compile-time defaults ONLY if env vars are absent (dev convenience).
const processEnv = (globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
}).process?.env;

function parseEnvList(key: string, devFallback: string[]): string[] {
  const raw = processEnv?.[key];
  if (raw && raw.trim()) {
    return raw.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  }
  // S4 fix: In production, admin lists MUST come from environment variables.
  // Hardcoded fallbacks are only acceptable during local development.
  const isProduction = processEnv?.CONVEX_CLOUD_URL || processEnv?.NODE_ENV === "production";
  if (isProduction) {
    console.error(`[authHelpers] FATAL: ${key} env var is not set in production. Admin features are disabled until configured in the Convex dashboard.`);
    return [];
  }
  console.warn(`[authHelpers] ${key} env var not set — using dev-only fallback. Set it in Convex dashboard for production.`);
  return devFallback;
}

// S4 fix: Dev-only defaults are used ONLY when env vars are absent AND
// the runtime is not production.  In production the list will be empty
// (effectively disabling admin access) until properly configured.
const ADMIN_EMAILS: string[] = parseEnvList("ADMIN_EMAILS", ["iwaleedh@gmail.com"]);
const ADMIN_USERNAMES: string[] = parseEnvList("ADMIN_USERNAMES", ["admin"]);

export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.trim().toLowerCase());
}

export function isAdminUsername(username: string | undefined | null): boolean {
  if (!username) return false;
  return ADMIN_USERNAMES.includes(username.trim().toLowerCase());
}

export async function isAdmin(ctx: PublicCtx): Promise<boolean> {
  const identity = await getAuthenticatedIdentity(ctx);
  if (!identity?.subject) return false;
  if (isAdminEmail(identity.email) || isAdminUsername(identity.preferredUsername)) return true;
  const user = await getUserRecordById(ctx, identity.subject);
  return isAdminEmail(user?.email) || isAdminUsername(user?.username);
}

export async function requireAdmin(ctx: PublicCtx): Promise<string> {
  const userId = await requireAuthenticatedUserId(ctx);
  const identity = await getAuthenticatedIdentity(ctx);
  if (isAdminEmail(identity?.email) || isAdminUsername(identity?.preferredUsername)) return userId;
  const user = await getUserRecordById(ctx, userId);
  if (isAdminEmail(user?.email) || isAdminUsername(user?.username)) return userId;
  throw new Error("Admin access required.");
}

/**
 * Returns the effective account status for a user record.
 * Missing/undefined accountStatus is treated as 'approved' (backward compat).
 */
export function effectiveAccountStatus(
  user: { email?: string; username?: string, accountStatus?: string } | null | undefined,
): "pending" | "approved" | "blocked" {
  if (!user) return "approved";
  if (isAdminEmail(user.email) || isAdminUsername(user.username)) return "approved";
  const status = user.accountStatus;
  if (status === "pending" || status === "blocked") return status;
  return "approved";
}

/**
 * Throws if the calling user's account is not approved.
 * Admin emails always pass. Missing accountStatus = approved (legacy users).
 */
export async function requireApprovedAccount(ctx: PublicCtx): Promise<void> {
  const identity = await getAuthenticatedIdentity(ctx);
  if (!identity?.subject) return; // anonymous — no account to check
  if (isAdminEmail(identity.email)) return;
  const user = await getUserRecordById(ctx, identity.subject);
  if (!user) {
    // D7: A valid JWT with no DB record means the user is in the brief post-signup
    // window before registerUser completes. Treat as pending rather than approved so
    // unpaid users cannot access gated content during this window.
    throw new Error("Account registration is completing. Please wait a moment and try again.");
  }
  const status = effectiveAccountStatus(user);
  if (status === "pending") {
    throw new Error("Account pending approval.");
  }
  if (status === "blocked") {
    throw new Error("Account blocked by administrator.");
  }
}

function hasHostUserId(value: unknown): value is { hostUserId: string } {
  return typeof value === "object" && value !== null && "hostUserId" in value;
}

function isLiveClassSession(value: unknown): value is { hostUserId: string; backgroundType: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "hostUserId" in value &&
    "backgroundType" in value
  );
}

function deriveUsernameFromIdentity(identity: {
  preferredUsername?: string;
  nickname?: string;
  name?: string;
  email?: string;
  subject: string;
}) {
  return (
    identity.preferredUsername ||
    identity.nickname ||
    identity.name ||
    identity.email?.split("@")[0] ||
    `user_${identity.subject.slice(-6)}`
  );
}

function normalizeRole(value: unknown): UserRole | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  if (normalized === "teacher" || normalized === "student") {
    return normalized;
  }
  return null;
}

export function getRoleFromIdentity(identity: IdentityWithRoleClaims | null | undefined): UserRole | null {
  if (!identity) return null;
  return (
    normalizeRole(identity.role) ||
    normalizeRole(identity.appRole) ||
    normalizeRole(identity.app_role) ||
    normalizeRole(identity.publicMetadata?.role) ||
    normalizeRole(identity.public_metadata?.role)
  );
}

export async function getAuthenticatedIdentity(ctx: PublicCtx) {
  return (await ctx.auth.getUserIdentity()) as IdentityWithRoleClaims | null;
}

export async function requireAuthenticatedIdentity(ctx: PublicCtx) {
  const identity = await getAuthenticatedIdentity(ctx);
  if (!identity?.subject) {
    throw new Error("Authentication required.");
  }
  return identity;
}

export async function requireAuthenticatedUserId(ctx: PublicCtx) {
  const identity = await requireAuthenticatedIdentity(ctx);
  return identity.subject;
}

export async function requireApprovedAuthenticatedUserId(ctx: PublicCtx) {
  const userId = await requireAuthenticatedUserId(ctx);
  await requireApprovedAccount(ctx);
  return userId;
}

export async function requireApprovedMatchingUserId(ctx: PublicCtx, claimedUserId?: string) {
  const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
  if (claimedUserId && claimedUserId !== currentUserId) {
    throw new Error("Not authorized to act as another user.");
  }
  return currentUserId;
}

export async function getUserRecordById(ctx: PublicCtx, userId: string) {
  return await ctx.db
    .query("users")
    .withIndex("by_userId", (q) => q.eq("userId", userId))
    .first();
}

export async function getCurrentUserRecord(ctx: PublicCtx) {
  const identity = await getAuthenticatedIdentity(ctx);
  if (!identity?.subject) return null;
  return await getUserRecordById(ctx, identity.subject);
}

export async function getCurrentUsername(ctx: PublicCtx) {
  const identity = await requireAuthenticatedIdentity(ctx);
  const user = await getUserRecordById(ctx, identity.subject);
  return user?.username || deriveUsernameFromIdentity(identity);
}

/**
 * S3 fix: Determine teacher status from the **database only**.
 * JWT claims are untrusted for authorization — a crafted token with
 * role:"teacher" must not grant access.  The DB record is set exclusively
 * by admin.setUserRole(), so it is the single source of truth.
 */
export async function isTeacherUserId(ctx: PublicCtx, userId: string) {
  const user = await getUserRecordById(ctx, userId);
  return user?.role === "teacher";
}

/**
 * S3 fix: Resolve role from the **database only** — never trust JWT claims
 * for authorization decisions.  This closes the privilege-escalation path
 * where a crafted JWT with role:"teacher" bypassed the DB lookup entirely.
 */
export async function getCurrentUserRole(ctx: PublicCtx): Promise<UserRole> {
  const identity = await getAuthenticatedIdentity(ctx);
  if (!identity?.subject) {
    return "student";
  }
  const user = await getUserRecordById(ctx, identity.subject);
  return user?.role === "teacher" ? "teacher" : "student";
}

export async function requireTeacher(ctx: PublicCtx) {
  const userId = await requireApprovedAuthenticatedUserId(ctx);
  if (!(await isTeacherUserId(ctx, userId))) {
    throw new Error("Teacher access required.");
  }
  return userId;
}

export async function requireMatchingUserId(ctx: PublicCtx, claimedUserId?: string) {
  const currentUserId = await requireAuthenticatedUserId(ctx);
  if (claimedUserId && claimedUserId !== currentUserId) {
    throw new Error("Not authorized to act as another user.");
  }
  return currentUserId;
}

export async function getHostedSessionByStringId(ctx: PublicCtx, sessionId: string) {
  return await ctx.db.get(sessionId as any);
}

export async function getSessionParticipant(ctx: PublicCtx, sessionId: string, userId: string) {
  return await ctx.db
    .query("sessionParticipants")
    .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
    .filter((q) => q.eq(q.field("userId"), userId))
    .first();
}

export async function requireHostedSessionHostOrTeacher(ctx: PublicCtx, sessionId: string) {
  const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
  const session = await getHostedSessionByStringId(ctx, sessionId);
  if (!session || !hasHostUserId(session)) {
    throw new Error("Session not found.");
  }

  // S7 fix: A teacher must be the HOST of THIS specific session, not merely any teacher.
  // The previous check `isTeacherUserId(ctx, currentUserId)` allowed any teacher to
  // access, modify, or drop into any active session system-wide (privilege escalation).
  if (session.hostUserId === currentUserId) {
    return { currentUserId, session };
  }

  // Admins retain override access (for support/moderation purposes only).
  if (await isAdmin(ctx)) {
    return { currentUserId, session };
  }

  throw new Error("Only the session host or an admin can perform this action.");
}

export async function requireHostedSessionAccess(ctx: PublicCtx, sessionId: string) {
  const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
  const session = await getHostedSessionByStringId(ctx, sessionId);
  if (!session || !hasHostUserId(session)) {
    throw new Error("Session not found.");
  }

  if (session.hostUserId === currentUserId) {
    return { currentUserId, session, participant: null };
  }

  const participant = await getSessionParticipant(ctx, sessionId, currentUserId);
  if (participant) {
    return { currentUserId, session, participant };
  }

  throw new Error("You do not have access to this session.");
}

export async function requireLiveClassInviteAuthority(ctx: PublicCtx, sessionId: string) {
  const session = await getHostedSessionByStringId(ctx, sessionId);
  if (!session || !hasHostUserId(session)) {
    throw new Error("Session not found.");
  }

  if (isLiveClassSession(session)) {
    return await requireHostedSessionHostOrTeacher(ctx, sessionId);
  }

  return await requireHostedSessionAccess(ctx, sessionId);
}
