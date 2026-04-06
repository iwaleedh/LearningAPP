/**
 * IndexedDB persistence for annotations.
 * DB: 'lt-annotations'  Store: 'annotations'
 * Key format: '{documentId}:{docType}:{pageNumber}'
 */

const DB_NAME = 'lt-annotations';
const STORE_NAME = 'annotations';
const DB_VERSION = 1;

let _db = null;

function buildAnnotationKey(documentId, docType, pageNumber) {
    return `${documentId}:${docType}:${pageNumber}`;
}

async function saveAnnotationRecord({ documentId, docType, pageNumber, fabricJson }) {
    const db = await openAnnotationDB();
    return new Promise((resolve, reject) => {
        const key = buildAnnotationKey(documentId, docType, pageNumber);
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put({
            key,
            paperId: documentId,
            documentId,
            docType,
            pageNumber,
            fabricJson,
            updatedAt: new Date().toISOString(),
        });
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

async function getAnnotationRecords(documentId, docType) {
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
                const matchesDocument = (rec.documentId || rec.paperId) === documentId;
                if (matchesDocument && rec.docType === docType) {
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

async function deleteAnnotationRecords(documentId, docType) {
    const db = await openAnnotationDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const keysToDelete = [];
        const req = store.openCursor();
        req.onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                const value = cursor.value;
                const matchesDocument = (value.documentId || value.paperId) === documentId;
                if (matchesDocument && value.docType === docType) {
                    keysToDelete.push(cursor.key);
                }
                cursor.continue();
            } else {
                keysToDelete.forEach((key) => store.delete(key));
            }
        };
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

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
    return saveAnnotationRecord({
        documentId: paperId,
        docType: 'qp',
        pageNumber,
        fabricJson,
    });
}

export async function getPageAnnotations(paperId) {
    return getAnnotationRecords(paperId, 'qp');
}

export async function saveDocumentAnnotation(documentId, docType, pageNumber, fabricJson) {
    return saveAnnotationRecord({ documentId, docType, pageNumber, fabricJson });
}

export async function getDocumentAnnotations(documentId, docType) {
    return getAnnotationRecords(documentId, docType);
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
    return deleteAnnotationRecords(paperId, 'qp');
}

export async function deleteDocumentAnnotations(documentId, docType) {
    return deleteAnnotationRecords(documentId, docType);
}
