const seedNoteModuleLoaders = import.meta.glob('./**/note*.js');

function normalizeSeedNoteKey(noteId) {
  if (!noteId) return '';
  return String(noteId).startsWith('note:') ? String(noteId).slice(5) : String(noteId);
}

function getSeedNoteExport(module) {
  if (module?.default && typeof module.default === 'object') {
    return module.default;
  }

  const namedEntry = Object.entries(module || {}).find(
    ([key, value]) => key.startsWith('note_') && value && typeof value === 'object',
  );

  return namedEntry ? namedEntry[1] : null;
}

function parseSeedNoteModulePath(modulePath) {
  const normalizedPath = modulePath.replace(/\\/g, '/');
  const match = normalizedPath.match(/^\.\/([^/]+)\/([^/]+)\.js$/);
  if (!match) return null;

  const [, subject, fileName] = match;
  const subjectPrefix = `note_${subject}_`;
  const remainder = fileName.startsWith(subjectPrefix)
    ? fileName.slice(subjectPrefix.length)
    : fileName.startsWith('note_')
      ? fileName.slice('note_'.length)
      : '';

  if (!remainder) return null;

  const parts = remainder.split('_');
  if (parts.length !== 3) return null;

  const [unitId, topicId, subtopicIndex] = parts;
  return {
    key: `${subject}:${unitId}:${topicId}:${subtopicIndex}`,
    subject,
  };
}

function buildSeedNoteIndex() {
  const keyToModulePath = {};
  const subjectToKeys = {};

  for (const modulePath of Object.keys(seedNoteModuleLoaders)) {
    const parsed = parseSeedNoteModulePath(modulePath);
    if (!parsed) continue;

    keyToModulePath[parsed.key] = modulePath;
    subjectToKeys[parsed.subject] ||= [];
    subjectToKeys[parsed.subject].push(parsed.key);
  }

  return {
    keyToModulePath,
    subjectToKeys,
  };
}

const { keyToModulePath, subjectToKeys } = buildSeedNoteIndex();
const seedNoteCache = new Map();

async function loadSeedNoteByKey(seedNoteKey) {
  const normalizedKey = normalizeSeedNoteKey(seedNoteKey);
  const modulePath = keyToModulePath[normalizedKey];
  if (!modulePath) return null;

  if (!seedNoteCache.has(normalizedKey)) {
    seedNoteCache.set(
      normalizedKey,
      seedNoteModuleLoaders[modulePath]().then((module) => getSeedNoteExport(module)),
    );
  }

  return seedNoteCache.get(normalizedKey);
}

export const seedNoteKeys = Object.freeze(Object.keys(keyToModulePath));

export function hasSeedNote(noteId) {
  return Boolean(keyToModulePath[normalizeSeedNoteKey(noteId)]);
}

export function getSeedNoteKeysBySubject(subject) {
  return Object.freeze([...(subjectToKeys[String(subject || '').toLowerCase()] || [])]);
}

export async function getSeedNote(noteId) {
  return loadSeedNoteByKey(noteId);
}

export async function getSeedNotes(noteIds) {
  const entries = await Promise.all(
    (noteIds || []).map(async (noteId) => [normalizeSeedNoteKey(noteId), await loadSeedNoteByKey(noteId)]),
  );

  return Object.fromEntries(entries.filter(([, note]) => note));
}
