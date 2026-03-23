/**
 * firebaseSync.js — Firebase Realtime Database sync for Live Class
 *
 * Provides cross-device real-time canvas sync between teacher and students.
 * Teacher pushes canvas state + background to Firebase; students listen.
 *
 * Firebase Realtime Database free tier (Spark):
 *   - 100 simultaneous connections
 *   - 1 GB stored, 10 GB/month bandwidth
 *   - No credit card required
 */

import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  onValue,
  off,
  serverTimestamp,
} from 'firebase/database';

/* ── Singleton Firebase app ────────────────────────────────────────── */

let app = null;
let db = null;

function getDb() {
  if (db) return db;

  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const dbUrl = import.meta.env.VITE_FIREBASE_DATABASE_URL;

  if (!apiKey || !dbUrl) {
    console.warn('[firebaseSync] Missing VITE_FIREBASE_API_KEY or VITE_FIREBASE_DATABASE_URL — cloud sync disabled');
    return null;
  }

  const config = {
    apiKey,
    databaseURL: dbUrl,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  };

  app = initializeApp(config, 'liveclass-sync');
  db = getDatabase(app);
  return db;
}

/* ── Public API ────────────────────────────────────────────────────── */

/**
 * Creates a Firebase sync controller for a given Live Class session.
 *
 * @param {string|bigint} classId — The class session ID
 * @returns {{ pushCanvas, pushBackground, onCanvasUpdate, onBgUpdate, disconnect } | null}
 */
export function createFirebaseSync(classId) {
  const database = getDb();
  if (!database) return null;

  const classKey = String(classId);
  const canvasRef = ref(database, `liveclasses/${classKey}/canvas`);
  const bgRef = ref(database, `liveclasses/${classKey}/bg`);
  const metaRef = ref(database, `liveclasses/${classKey}/meta`);

  const listeners = [];

  /* ── Teacher: push canvas state ─────────────────────────────────── */

  /** Write the full Fabric.js canvas JSON to Firebase. */
  function pushCanvas(fabricJson) {
    set(canvasRef, { data: JSON.stringify(fabricJson), ts: serverTimestamp() });
  }

  /** Write the background type to Firebase. */
  function pushBackground(bgType) {
    set(bgRef, { type: bgType, ts: serverTimestamp() });
  }

  /** Write class metadata (title, teacher name). */
  function pushMeta(meta) {
    set(metaRef, { ...meta, ts: serverTimestamp() });
  }

  /* ── Student: listen for updates ────────────────────────────────── */

  /**
   * Subscribe to canvas state changes.
   * @param {(fabricJson: object) => void} callback
   */
  function onCanvasUpdate(callback) {
    const handler = (snapshot) => {
      const val = snapshot.val();
      if (!val?.data) return;
      try {
        callback(JSON.parse(val.data));
      } catch { /* ignore parse errors */ }
    };
    onValue(canvasRef, handler);
    listeners.push({ ref: canvasRef, handler });
  }

  /**
   * Subscribe to background type changes.
   * @param {(bgType: string) => void} callback
   */
  function onBgUpdate(callback) {
    const handler = (snapshot) => {
      const val = snapshot.val();
      if (!val?.type) return;
      callback(val.type);
    };
    onValue(bgRef, handler);
    listeners.push({ ref: bgRef, handler });
  }

  /* ── Cleanup ────────────────────────────────────────────────────── */

  function disconnect() {
    listeners.forEach(({ ref: r, handler }) => off(r, 'value', handler));
    listeners.length = 0;
  }

  return {
    pushCanvas,
    pushBackground,
    pushMeta,
    onCanvasUpdate,
    onBgUpdate,
    disconnect,
  };
}
