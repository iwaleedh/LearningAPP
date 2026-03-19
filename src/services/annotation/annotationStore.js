/**
 * IndexedDB persistence for PDF annotations.
 * DB: 'lt-annotations'  Store: 'annotations'
 * Key format: '{paperId}:qp:{pageNumber}'
 */

const DB_NAME = 'lt-annotations';
const STORE_NAME = 'annotations';
const DB_VERSION = 1;

let _db = null;

export function openAnnotationDB() {
    if (_db) return Promise.resolve(_db);
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'key' });
            }
        };
        req.onsuccess = (e) => {
            _db = e.target.result;
            resolve(_db);
        };
        req.onerror = () => reject(req.error);
    });
}

export async function savePageAnnotation(paperId, pageNumber, fabricJson) {
    const db = await openAnnotationDB();
    return new Promise((resolve, reject) => {
        const key = `${paperId}:qp:${pageNumber}`;
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put({
            key,
            paperId,
            docType: 'qp',
            pageNumber,
            fabricJson,
            updatedAt: new Date().toISOString(),
        });
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

export async function getPageAnnotations(paperId) {
    const db = await openAnnotationDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const results = {};
        const req = store.openCursor();
        req.onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                const rec = cursor.value;
                if (rec.paperId === paperId && rec.docType === 'qp') {
                    results[rec.pageNumber] = rec.fabricJson;
                }
                cursor.continue();
            } else {
                resolve(results);
            }
        };
        req.onerror = () => reject(req.error);
    });
}

export async function getAllAnnotatedPaperIds() {
    const db = await openAnnotationDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const ids = new Set();
        const req = store.openCursor();
        req.onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                ids.add(cursor.value.paperId);
                cursor.continue();
            } else {
                resolve([...ids]);
            }
        };
        req.onerror = () => reject(req.error);
    });
}

export async function deleteAnnotations(paperId) {
    const db = await openAnnotationDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const keysToDelete = [];
        const req = store.openCursor();
        req.onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.value.paperId === paperId) keysToDelete.push(cursor.key);
                cursor.continue();
            } else {
                keysToDelete.forEach(k => store.delete(k));
            }
        };
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}
