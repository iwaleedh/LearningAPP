export const DEV_ADMIN_FIXTURE_KEY = 'lt_admin_fixture';

export function readAdminDevFixture({
  isDev = Boolean(import.meta.env?.DEV),
  storage = typeof window !== 'undefined' ? window.sessionStorage : null,
} = {}) {
  if (!isDev || !storage) {
    return null;
  }

  try {
    const raw = storage.getItem(DEV_ADMIN_FIXTURE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}