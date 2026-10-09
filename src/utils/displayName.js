// Auto-generated ids (user_3daf86…, Debug Student, Anonymous) read badly in the UI,
// so only real-looking names are shown to students.
export function friendlyDisplayName(username) {
    const value = String(username || '').trim();
    if (!value || /^(user_|anonymous|debug\b)/i.test(value) || value.length > 24) return '';
    return value;
}
