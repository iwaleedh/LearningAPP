export async function seedBrowserStorage(page, { sessionStorage = {}, localStorage = {} } = {}) {
  await page.addInitScript(({ sessionEntries, localEntries }) => {
    for (const [key, value] of Object.entries(sessionEntries)) {
      window.sessionStorage.setItem(key, value);
    }
    for (const [key, value] of Object.entries(localEntries)) {
      window.localStorage.setItem(key, value);
    }
  }, {
    sessionEntries: sessionStorage,
    localEntries: localStorage,
  });
}

export async function seedDevAuthSession(page, session) {
  if (!session) {
    return;
  }
  await seedBrowserStorage(page, {
    sessionStorage: {
      lt_dev_auth_session: JSON.stringify(session),
    },
  });
}

export async function seedAccessExpiredNotice(page, notice) {
  await seedBrowserStorage(page, {
    sessionStorage: {
      lt_access_expired_notice: JSON.stringify(notice),
    },
  });
}

export async function seedAdminDashboardFixture(page, fixture) {
  await seedBrowserStorage(page, {
    sessionStorage: {
      lt_admin_fixture: JSON.stringify(fixture),
    },
  });
}

export async function seedMistakes(page, mistakes) {
  await seedBrowserStorage(page, {
    localStorage: {
      lt_mistakes: JSON.stringify(mistakes),
    },
  });
}

export async function seedGuestFlashcards(page, cards) {
  await page.addInitScript(async (nextCards) => {
    const DB_NAME = 'lt-guest-study-data';
    const DB_VERSION = 1;
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event) => {
        const database = event.target.result;
        if (!database.objectStoreNames.contains('guestNotes')) database.createObjectStore('guestNotes', { keyPath: 'noteId' });
        if (!database.objectStoreNames.contains('guestFlashcards')) database.createObjectStore('guestFlashcards', { keyPath: 'cardId' });
        if (!database.objectStoreNames.contains('guestNoteAssets')) database.createObjectStore('guestNoteAssets', { keyPath: 'assetId' });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    await new Promise((resolve, reject) => {
      const tx = db.transaction('guestFlashcards', 'readwrite');
      const store = tx.objectStore('guestFlashcards');
      store.clear();
      for (const card of nextCards) {
        store.put(card);
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    window.localStorage.removeItem('lt_flashcard_status');
    window.localStorage.removeItem('lt_flashcard_known');
    window.localStorage.removeItem('lt_flashcard_learning');
  }, cards);
}