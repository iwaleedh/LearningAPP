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

// ── Admin email list ──────────────────────────────────────────────────
// Users whose Clerk email matches an entry are treated as admins.
// Add additional emails to support multiple admins in the future.
const ADMIN_EMAILS: string[] = ["iwaleedh@gmail.com"];
const ADMIN_USERNAMES: string[] = ["admim", "admin"];

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
  if (!user) return; // not yet registered — will be gated at first query
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

export async function isTeacherUserId(ctx: PublicCtx, userId: string) {
  const identity = await getAuthenticatedIdentity(ctx);
  if (identity?.subject === userId) {
    return getRoleFromIdentity(identity) === "teacher" || (await getUserRecordById(ctx, userId))?.role === "teacher";
  }
  const user = await getUserRecordById(ctx, userId);
  return user?.role === "teacher";
}

export async function getCurrentUserRole(ctx: PublicCtx): Promise<UserRole> {
  const identity = await getAuthenticatedIdentity(ctx);
  const claimedRole = getRoleFromIdentity(identity);
  if (claimedRole) {
    return claimedRole;
  }

  if (!identity?.subject) {
    return "student";
  }

  const user = await getUserRecordById(ctx, identity.subject);
  return user?.role === "teacher" ? "teacher" : "student";
}

export async function requireTeacher(ctx: PublicCtx) {
  const userId = await requireAuthenticatedUserId(ctx);
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
  const currentUserId = await requireAuthenticatedUserId(ctx);
  const session = await getHostedSessionByStringId(ctx, sessionId);
  if (!session || !hasHostUserId(session)) {
    throw new Error("Session not found.");
  }

  if (session.hostUserId !== currentUserId && !(await isTeacherUserId(ctx, currentUserId))) {
    throw new Error("Teacher or host access required.");
  }

  return { currentUserId, session };
}

export async function requireHostedSessionAccess(ctx: PublicCtx, sessionId: string) {
  const currentUserId = await requireAuthenticatedUserId(ctx);
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

  if (await isTeacherUserId(ctx, currentUserId)) {
    return { currentUserId, session, participant: null };
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
