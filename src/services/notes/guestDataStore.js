const DB_NAME = 'lt-guest-study-data';
const DB_VERSION = 1;

const STORE_NOTES = 'guestNotes';
const STORE_FLASHCARDS = 'guestFlashcards';
const STORE_ASSETS = 'guestNoteAssets';

let dbPromise = null;
let memNotes = new Map();
let memFlashcards = new Map();
let memAssets = new Map();

function hasIndexedDb() {
  return typeof indexedDB !== 'undefined';
}

function getMemoryStore(storeName) {
  if (storeName === STORE_NOTES) return memNotes;
  if (storeName === STORE_FLASHCARDS) return memFlashcards;
  return memAssets;
}

function sortByDateDesc(items, field) {
  return [...items].sort((a, b) => String(b?.[field] || '').localeCompare(String(a?.[field] || '')));
}

export function getGuestStoreCapabilities() {
  const indexedDbAvailable = hasIndexedDb();
  return {
    indexedDbAvailable,
    usingMemoryFallback: !indexedDbAvailable,
    message: indexedDbAvailable
      ? 'Guest data is stored locally in this browser until you import it.'
      : 'Guest data is stored in memory for this session only.',
  };
}

export async function openGuestDataDb() {
  if (!hasIndexedDb()) return null;
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NOTES)) {
        db.createObjectStore(STORE_NOTES, { keyPath: 'noteId' });
      }
      if (!db.objectStoreNames.contains(STORE_FLASHCARDS)) {
        db.createObjectStore(STORE_FLASHCARDS, { keyPath: 'cardId' });
      }
      if (!db.objectStoreNames.contains(STORE_ASSETS)) {
        db.createObjectStore(STORE_ASSETS, { keyPath: 'assetId' });
      }
    };
    req.onsuccess = (event) => resolve(event.target.result);
    req.onerror = () => {
      dbPromise = null;
      reject(req.error);
    };
  });

  return dbPromise;
}

async function putRecord(storeName, key, value) {
  if (!hasIndexedDb()) {
    getMemoryStore(storeName).set(key, value);
    return;
  }

  let db;
  try {
    db = await openGuestDataDb();
  } catch {
    getMemoryStore(storeName).set(key, value);
    return;
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(value);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getRecord(storeName, key) {
  if (!hasIndexedDb()) {
    return getMemoryStore(storeName).get(key) || null;
  }

  let db;
  try {
    db = await openGuestDataDb();
  } catch {
    return getMemoryStore(storeName).get(key) || null;
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const req = tx.objectStore(storeName).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function getAllRecords(storeName) {
  if (!hasIndexedDb()) {
    return [...getMemoryStore(storeName).values()];
  }

  let db;
  try {
    db = await openGuestDataDb();
  } catch {
    return [...getMemoryStore(storeName).values()];
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const results = [];
    const req = store.openCursor();
    req.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        results.push(cursor.value);
        cursor.continue();
        return;
      }
      resolve(results);
    };
    req.onerror = () => reject(req.error);
  });
}

async function deleteRecord(storeName, key) {
  if (!hasIndexedDb()) {
    getMemoryStore(storeName).delete(key);
    return;
  }

  let db;
  try {
    db = await openGuestDataDb();
  } catch {
    getMemoryStore(storeName).delete(key);
    return;
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function clearStore(storeName) {
  if (!hasIndexedDb()) {
    getMemoryStore(storeName).clear();
    return;
  }

  let db;
  try {
    db = await openGuestDataDb();
  } catch {
    getMemoryStore(storeName).clear();
    return;
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function saveGuestNote(noteDoc) {
  await putRecord(STORE_NOTES, noteDoc.noteId, noteDoc);
}

export async function getGuestNote(noteId) {
  return await getRecord(STORE_NOTES, String(noteId));
}

export async function listGuestNotesBySubject(subject) {
  const key = String(subject).toLowerCase();
  const notes = await getAllRecords(STORE_NOTES);
  return sortByDateDesc(
    notes.filter((note) => String(note?.subject || '').toLowerCase() === key),
    'lastEditedAt'
  );
}

export async function getAllGuestNotes() {
  return sortByDateDesc(await getAllRecords(STORE_NOTES), 'lastEditedAt');
}

export async function deleteGuestNote(noteId) {
  await deleteRecord(STORE_NOTES, String(noteId));
}

export async function saveGuestFlashcard(card) {
  await putRecord(STORE_FLASHCARDS, card.cardId, card);
}

export async function listGuestFlashcards(filters = {}) {
  const cards = await getAllRecords(STORE_FLASHCARDS);
  const subject = filters.subject ? String(filters.subject).toLowerCase() : null;
  const sourceNoteId = filters.sourceNoteId ? String(filters.sourceNoteId) : null;

  return sortByDateDesc(
    cards.filter((card) => {
      if (subject && String(card?.subject || '') !== subject) return false;
      if (sourceNoteId && String(card?.sourceNoteId || '') !== sourceNoteId) return false;
      return true;
    }),
    'createdAt'
  );
}

export async function getAllGuestFlashcards() {
  return sortByDateDesc(await getAllRecords(STORE_FLASHCARDS), 'createdAt');
}

export async function deleteGuestFlashcard(cardId) {
  await deleteRecord(STORE_FLASHCARDS, String(cardId));
}

export async function saveGuestNoteAsset(asset) {
  await putRecord(STORE_ASSETS, asset.assetId, asset);
}

export async function getAllGuestNoteAssets() {
  return sortByDateDesc(await getAllRecords(STORE_ASSETS), 'createdAt');
}

export async function deleteGuestNoteAsset(assetId) {
  await deleteRecord(STORE_ASSETS, String(assetId));
}

export async function getGuestDataSummary() {
  const [notes, flashcards, assets] = await Promise.all([
    getAllGuestNotes(),
    getAllGuestFlashcards(),
    getAllGuestNoteAssets(),
  ]);

  return {
    notes: notes.length,
    flashcards: flashcards.length,
    assets: assets.length,
    totalItems: notes.length + flashcards.length + assets.length,
  };
}

export async function clearGuestData() {
  await Promise.all([
    clearStore(STORE_NOTES),
    clearStore(STORE_FLASHCARDS),
    clearStore(STORE_ASSETS),
  ]);
}

export async function __resetGuestDataStoreForTests() {
  memNotes = new Map();
  memFlashcards = new Map();
  memAssets = new Map();

  if (!hasIndexedDb()) return;

  await clearGuestData();
}
