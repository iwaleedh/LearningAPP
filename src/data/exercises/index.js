const exerciseModules = import.meta.glob('./**/exercises_*.js', { eager: true });

function parseIdPart(value) {
  return /^\d+$/.test(value) ? Number(value) : value;
}

function getExerciseExport(module) {
  return Object.entries(module).find(
    ([key, value]) => key.startsWith('exercises_') && value && typeof value === 'object'
  );
}

function buildExerciseSets() {
  const sets = {};

  for (const module of Object.values(exerciseModules)) {
    const entry = getExerciseExport(module);
    if (!entry) continue;

    const [exportName, exerciseSet] = entry;
    const parts = exportName.split('_');
    if (parts.length < 4) continue;

    const topicId = parts.pop();
    const unitId = parts.pop();
    const subject = parts.slice(1).join('_');
    sets[`${subject}:${unitId}:${topicId}`] = exerciseSet;
  }

  return sets;
}

export const exerciseSets = buildExerciseSets();

export function getExerciseSet(subject, unitId, topicId) {
  return exerciseSets[`${subject}:${unitId}:${topicId}`];
}

export function getAvailableTopics(subject) {
  return Object.keys(exerciseSets)
    .filter((key) => key.startsWith(`${subject}:`))
    .map((key) => {
      const [, unitId, topicId] = key.split(':');
      return { unitId: parseIdPart(unitId), topicId: parseIdPart(topicId) };
    });
}
