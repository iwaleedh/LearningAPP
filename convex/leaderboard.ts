import { query } from "./_generated/server";
import { effectiveAccountStatus, getAuthenticatedIdentity } from "./authHelpers";

function getStudentAvatar(username: string) {
  const parts = String(username || "Student")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) return "ST";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

function buildDateKeys(timestamps: number[]) {
  return [...new Set(timestamps.map((value) => new Date(value).toISOString().slice(0, 10)))].sort();
}

function computeCurrentStreak(dateKeys: string[]) {
  if (dateKeys.length === 0) return 0;

  const dates = new Set(dateKeys);
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  if (!dates.has(todayStr) && !dates.has(yesterdayStr)) return 0;

  const startOffset = dates.has(todayStr) ? 0 : 1;
  let streak = 0;
  for (let offset = startOffset; ; offset += 1) {
    const date = new Date(today);
    date.setDate(date.getDate() - offset);
    if (dates.has(date.toISOString().slice(0, 10))) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

function computeLongestStreak(dateKeys: string[]) {
  if (dateKeys.length === 0) return 0;
  let longest = 1;
  let current = 1;

  for (let i = 1; i < dateKeys.length; i += 1) {
    const diffDays = Math.round(
      (new Date(dateKeys[i]).getTime() - new Date(dateKeys[i - 1]).getTime()) / 86400000,
    );
    if (diffDays === 1) {
      current += 1;
      if (current > longest) longest = current;
    } else {
      current = 1;
    }
  }

  return longest;
}

export const getStudentLeaderboard = query({
  args: {},
  handler: async (ctx) => {
    const identity = await getAuthenticatedIdentity(ctx);
    const users = await ctx.db.query("users").collect();
    const notes = await ctx.db.query("notes").collect();
    const attempts = await ctx.db.query("studyAttempts").collect();

    const students = users
      .filter((user) => user.role !== "teacher")
      .filter((user) => effectiveAccountStatus(user) === "approved");

    const rows = students.map((student) => {
      const studentNotes = notes.filter((note) => note.ownerUserId === student.userId);
      const studentAttempts = attempts.filter((attempt) => attempt.ownerUserId === student.userId);
      const totalNotes = studentNotes.length;
      const averageConfidence = totalNotes > 0
        ? studentNotes.reduce((sum, note) => sum + note.confidenceScore, 0) / totalNotes
        : 0;
      const mastery = Math.round(averageConfidence * 20);
      const minutes = studentNotes.reduce((sum, note) => sum + note.estimatedReadMinutes, 0);
      const exerciseAttempts = studentAttempts.filter((attempt) => attempt.sourceType === "exercise");
      const completedPastPapers = studentAttempts.filter(
        (attempt) => attempt.sourceType === "pastpaper" && attempt.activityType === "completed_session",
      );
      const totalAttempts = exerciseAttempts.length;
      const correctAttempts = exerciseAttempts.filter((attempt) => attempt.correct).length;
      const pastPaperActions = studentAttempts.filter((attempt) => attempt.sourceType === "pastpaper").length;
      const completedPastPaperCount = completedPastPapers.length;
      const avgPastPaperScore = completedPastPaperCount > 0
        ? Math.round(completedPastPapers.reduce((sum, attempt) => sum + (attempt.scorePercent || 0), 0) / completedPastPaperCount)
        : 0;
      const attemptMinutes = Math.round(studentAttempts.reduce((sum, attempt) => sum + ((attempt.durationSeconds || 0) / 60), 0));
      const dateKeys = buildDateKeys([
        ...studentNotes.map((note) => note.lastEditedAt),
        ...studentAttempts.map((attempt) => attempt.createdAt),
      ]);
      const streak = computeCurrentStreak(dateKeys);
      const longestStreak = computeLongestStreak(dateKeys);
      const score = Math.round(
        mastery * 5 +
        totalNotes * 20 +
        totalAttempts * 8 +
        correctAttempts * 4 +
        pastPaperActions * 3 +
        completedPastPaperCount * 25 +
        avgPastPaperScore * 2 +
        streak * 35 +
        longestStreak * 10 +
        minutes +
        attemptMinutes,
      );

      return {
        userId: student.userId,
        name: student.username,
        avatar: getStudentAvatar(student.username),
        score,
        mastery,
        streak,
        longestStreak,
        notesSaved: totalNotes,
        minutes,
        attempts: totalAttempts,
        correctAttempts,
        pastPaperActions,
        completedPastPaperCount,
        avgPastPaperScore,
      };
    })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.mastery !== a.mastery) return b.mastery - a.mastery;
        return b.notesSaved - a.notesSaved;
      })
      .map((row, index) => ({
        ...row,
        rank: index + 1,
      }));

    const topRows = rows.slice(0, 10);
    const currentRow = identity?.subject
      ? rows.find((row) => row.userId === identity.subject) || null
      : null;

    return {
      rows: topRows,
      currentUserId: identity?.subject || null,
      currentRow,
    };
  },
});
