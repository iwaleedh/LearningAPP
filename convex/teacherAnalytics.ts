import { query } from "./_generated/server";
import { effectiveAccountStatus, requireTeacher } from "./authHelpers";

const SUBJECT_LABELS: Record<string, string> = {
  chemistry: "AL Chemistry",
  biology: "AL Biology",
  physics: "AL Physics",
  mathematics: "AL Mathematics",
  business: "AL Business",
  economics: "AL Economics",
  accounting: "AL Accounting",
  cae: "CAE (C1 Advanced)",
  cpe: "CPE (C2 Proficiency)",
  olevel_biology: "IGCSE Biology",
  olevel_chemistry: "IGCSE Chemistry",
  olevel_physics: "IGCSE Physics",
  olevel_business: "IGCSE Business",
  olevel_maths_core: "IGCSE Maths Core",
  olevel_maths_extended: "IGCSE Maths Extended",
};

const ACTIVITY_LABELS: Record<string, string> = {
  mcq: "MCQ Exercises",
  "drag-drop": "Drag & Drop",
  "fill-blank": "Fill in the Blanks",
  sequence: "Sequence Ordering",
  keyword: "Theory / Keyword Check",
  flashcards: "Flashcard Review",
  completed_session: "Past Papers",
};

function getSubjectLabel(subject: string) {
  return SUBJECT_LABELS[subject] || subject.replace(/[_-]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function getStudentAvatar(username: string) {
  const parts = String(username || "Student")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) return "ST";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

function getActivityLabel(activityType: string) {
  return ACTIVITY_LABELS[activityType] || activityType.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function getAttemptTopicLabel(attempt: {
  topic?: string;
  paperTitle?: string;
  subject: string;
}) {
  return attempt.topic || attempt.paperTitle || getSubjectLabel(attempt.subject);
}

function getAttemptMasteryScore(attempt: {
  correct?: boolean;
  scorePercent?: number;
}) {
  if (typeof attempt.scorePercent === "number") {
    return Math.max(0, Math.min(100, Math.round(attempt.scorePercent)));
  }

  if (typeof attempt.correct === "boolean") {
    return attempt.correct ? 100 : 0;
  }

  return null;
}

function formatAttemptOutcome(attempt: {
  activityType: string;
  correct?: boolean;
  scorePercent?: number;
  confidence?: string;
}) {
  if (typeof attempt.scorePercent === "number") {
    return `${Math.round(attempt.scorePercent)}% score`;
  }

  if (typeof attempt.correct === "boolean") {
    return attempt.correct ? "Correct" : "Incorrect";
  }

  if (attempt.confidence) {
    return `${getActivityLabel(attempt.activityType)} • ${attempt.confidence}`;
  }

  return getActivityLabel(attempt.activityType);
}

export const getDashboardSummary = query({
  args: {},
  handler: async (ctx) => {
    await requireTeacher(ctx);

    const users = await ctx.db.query("users").collect();
    const students = users
      .filter((user) => user.role !== "teacher")
      .filter((user) => effectiveAccountStatus(user) === "approved");

    const studentIds = new Set(students.map((student) => student.userId));
    const allNotes = (await ctx.db.query("notes").collect())
      .filter((note) => studentIds.has(note.ownerUserId));
    const allAttempts = (await ctx.db.query("studyAttempts").collect())
      .filter((attempt) => studentIds.has(attempt.ownerUserId));
    const exerciseAttempts = allAttempts.filter((attempt) => attempt.sourceType === "exercise");

    const notesByStudent = new Map<string, typeof allNotes>();
    const attemptsByStudent = new Map<string, typeof allAttempts>();
    students.forEach((student) => {
      notesByStudent.set(student.userId, allNotes.filter((note) => note.ownerUserId === student.userId));
      attemptsByStudent.set(student.userId, allAttempts.filter((attempt) => attempt.ownerUserId === student.userId));
    });

    const masteryAttemptCounts = new Map<string, number>();
    exerciseAttempts.forEach((attempt) => {
      const masteryScore = getAttemptMasteryScore(attempt);
      if (masteryScore === null) return;
      const topicLabel = getAttemptTopicLabel(attempt);
      masteryAttemptCounts.set(topicLabel, (masteryAttemptCounts.get(topicLabel) || 0) + 1);
    });

    const subjectCounts = new Map<string, number>();
    allNotes.forEach((note) => {
      subjectCounts.set(note.subject, (subjectCounts.get(note.subject) || 0) + 1);
    });

    const topics = masteryAttemptCounts.size > 0
      ? [...masteryAttemptCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([label]) => ({
          key: label,
          label,
          source: "attempt" as const,
        }))
      : [...subjectCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([key]) => ({
          key,
          label: getSubjectLabel(key),
          source: "note" as const,
        }));

    const heatmapRows = students.map((student) => {
      const studentNotes = notesByStudent.get(student.userId) || [];
      const studentAttempts = attemptsByStudent.get(student.userId) || [];
      const scores = topics.map((topic) => {
        if (topic.source === "attempt") {
          const attemptScores = studentAttempts
            .filter((attempt) => getAttemptTopicLabel(attempt) === topic.key)
            .map((attempt) => getAttemptMasteryScore(attempt))
            .filter((value): value is number => value !== null);

          if (attemptScores.length === 0) return 0;
          return Math.round(attemptScores.reduce((sum, value) => sum + value, 0) / attemptScores.length);
        }

        const matchingNotes = studentNotes.filter((note) => note.subject === topic.key);
        if (matchingNotes.length === 0) return 0;
        const averageConfidence = matchingNotes.reduce((sum, note) => sum + note.confidenceScore, 0) / matchingNotes.length;
        return Math.round(averageConfidence * 20);
      });

      const filledScores = scores.filter((score) => score > 0);
      const average = filledScores.length > 0
        ? Math.round(filledScores.reduce((sum, score) => sum + score, 0) / filledScores.length)
        : 0;

      return {
        studentId: student.userId,
        name: student.username,
        avatar: getStudentAvatar(student.username),
        scores,
        average,
        notesSaved: studentNotes.length,
        attempts: studentAttempts.length,
      };
    });

    const classAverages = topics.map((_, topicIndex) => {
      const filledScores = heatmapRows
        .map((row) => row.scores[topicIndex] || 0)
        .filter((score) => score > 0);

      if (filledScores.length === 0) return 0;
      return Math.round(filledScores.reduce((sum, score) => sum + score, 0) / filledScores.length);
    });

    const masterySignals = [
      ...allNotes.map((note) => note.confidenceScore * 20),
      ...exerciseAttempts
        .map((attempt) => getAttemptMasteryScore(attempt))
        .filter((value): value is number => value !== null),
    ];
    const avgMastery = masterySignals.length > 0
      ? Math.round(masterySignals.reduce((sum, value) => sum + value, 0) / masterySignals.length)
      : 0;

    const questionGroups = new Map<string, {
      questionKey: string;
      stem: string;
      topic: string;
      activityType: string;
      attempts: number;
      correct: number;
      totalSeconds: number;
    }>();

    exerciseAttempts.forEach((attempt) => {
      const existing = questionGroups.get(attempt.questionKey) || {
        questionKey: attempt.questionKey,
        stem: attempt.prompt,
        topic: attempt.topic || getSubjectLabel(attempt.subject),
        activityType: attempt.activityType,
        attempts: 0,
        correct: 0,
        totalSeconds: 0,
      };
      existing.attempts += 1;
      if (attempt.correct) existing.correct += 1;
      existing.totalSeconds += attempt.durationSeconds || 0;
      questionGroups.set(attempt.questionKey, existing);
    });

    const questionAnalytics = [...questionGroups.values()]
      .map((entry, index) => {
        const successRate = entry.attempts > 0
          ? Math.round((entry.correct / entry.attempts) * 100)
          : 0;
        const avgSeconds = entry.attempts > 0
          ? Math.round(entry.totalSeconds / entry.attempts)
          : 0;

        return {
          id: `${entry.questionKey}:${index}`,
          stem: entry.stem,
          topic: entry.topic,
          activityType: entry.activityType,
          attempts: entry.attempts,
          successRate,
          avgTime: `${Math.max(avgSeconds, 1)}s`,
          flagged: successRate < 30,
        };
      })
      .sort((a, b) => {
        if (a.successRate !== b.successRate) return a.successRate - b.successRate;
        return b.attempts - a.attempts;
      })
      .slice(0, 20);

    const lowConfidenceNotes = allNotes
      .filter((note) => note.confidenceScore <= 2)
      .sort((a, b) => b.lastEditedAt - a.lastEditedAt)
      .slice(0, 12)
      .map((note) => {
        const student = students.find((user) => user.userId === note.ownerUserId);
        return {
          noteId: note.noteId,
          student: student?.username || "Unknown student",
          subject: getSubjectLabel(note.subject),
          noteTitle: note.subtopicTitle || note.title || note.noteId,
          confidenceScore: note.confidenceScore,
          estimatedReadMinutes: note.estimatedReadMinutes,
          lastEditedAt: note.lastEditedAt,
        };
      });

    const timeData = [];

    if (allNotes.length > 0) {
      const totalReadMinutes = allNotes.reduce((sum, note) => sum + note.estimatedReadMinutes, 0);
      timeData.push({
        activity: "Notes Reading",
        avgMinutes: Math.max(1, Math.round(totalReadMinutes / allNotes.length)),
        sessions: allNotes.length,
      });
    }

    const timedAttempts = allAttempts.filter((attempt) => (attempt.durationSeconds || 0) > 0);
    const attemptTimeMap = new Map<string, { totalSeconds: number; sessions: number }>();
    timedAttempts.forEach((attempt) => {
      const seconds = attempt.durationSeconds || 0;
      if (seconds <= 0) return;
      const current = attemptTimeMap.get(attempt.activityType) || { totalSeconds: 0, sessions: 0 };
      current.totalSeconds += seconds;
      current.sessions += 1;
      attemptTimeMap.set(attempt.activityType, current);
    });

    timeData.push(
      ...[...attemptTimeMap.entries()]
        .map(([activityType, stats]) => ({
          activity: getActivityLabel(activityType),
          avgMinutes: Math.max(1, Math.round((stats.totalSeconds / stats.sessions) / 60)),
          sessions: stats.sessions,
        }))
        .sort((a, b) => b.sessions - a.sessions),
    );

    const trimmedTimeData = timeData
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 6);

    const recentNoteActivity = allNotes.map((note) => {
      const student = students.find((user) => user.userId === note.ownerUserId);
      return {
        id: `note:${note._id}`,
        student: student?.username || "Unknown student",
        activity: "Note Update",
        subject: getSubjectLabel(note.subject),
        itemTitle: note.subtopicTitle || note.title || note.noteId,
        outcome: `${note.confidenceScore}/5 confidence`,
        durationMinutes: note.estimatedReadMinutes,
        recordedAt: note.lastEditedAt,
      };
    });

    const recentAttemptActivity = allAttempts.map((attempt) => {
      const student = students.find((user) => user.userId === attempt.ownerUserId);
      return {
        id: `attempt:${attempt._id}`,
        student: student?.username || "Unknown student",
        activity: getActivityLabel(attempt.activityType),
        subject: getSubjectLabel(attempt.subject),
        itemTitle: attempt.prompt || attempt.paperTitle || attempt.questionKey,
        outcome: formatAttemptOutcome(attempt),
        durationMinutes: (attempt.durationSeconds || 0) > 0
          ? Math.max(1, Math.round((attempt.durationSeconds || 0) / 60))
          : 0,
        recordedAt: attempt.createdAt,
      };
    });

    const recentActivity = [...recentNoteActivity, ...recentAttemptActivity]
      .sort((a, b) => b.recordedAt - a.recordedAt)
      .slice(0, 12);

    return {
      summary: {
        totalStudents: students.length,
        avgMastery,
        lowConfidenceCount: allNotes.filter((note) => note.confidenceScore <= 2).length,
        totalNotes: allNotes.length,
        totalAttempts: allAttempts.length,
        flaggedQuestions: questionAnalytics.filter((question) => question.flagged).length,
      },
      heatmap: {
        topics,
        rows: heatmapRows,
        classAverages,
      },
      questionAnalytics,
      lowConfidenceNotes,
      timeData: trimmedTimeData,
      recentActivity,
    };
  },
});
