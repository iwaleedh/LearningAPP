const exerciseModuleLoaders = import.meta.glob('./**/exercises_*.js');

function parseIdPart(value) {
  return /^\d+$/.test(value) ? Number(value) : value;
}

function buildExerciseModuleIndex() {
  const index = {};

  for (const modulePath of Object.keys(exerciseModuleLoaders)) {
    const fileName = modulePath.split('/').pop()?.replace(/\.js$/, '');
    if (!fileName) continue;

    const parts = fileName.split('_');
    if (parts.length < 4) continue;

    const topicId = parts.pop();
    const unitId = parts.pop();
    const subject = parts.slice(1).join('_');
    index[`${subject}:${unitId}:${topicId}`] = modulePath;
  }

  return index;
}

function getExerciseExport(module) {
  return Object.entries(module).find(
    ([key, value]) => key.startsWith('exercises_') && value && typeof value === 'object',
  );
}

const exerciseModuleIndex = buildExerciseModuleIndex();

export const exerciseSetKeys = Object.freeze(Object.keys(exerciseModuleIndex));

export async function getExerciseSet(subject, unitId, topicId) {
  const modulePath = exerciseModuleIndex[`${subject}:${unitId}:${topicId}`];
  if (!modulePath) return null;

  const module = await exerciseModuleLoaders[modulePath]();
  const entry = getExerciseExport(module);
  return entry ? entry[1] : null;
}

export function getAvailableTopics(subject) {
  return exerciseSetKeys
    .filter((key) => key.startsWith(`${subject}:`))
    .map((key) => {
      const [, unitId, topicId] = key.split(':');
      return { unitId: parseIdPart(unitId), topicId: parseIdPart(topicId) };
    });
}
