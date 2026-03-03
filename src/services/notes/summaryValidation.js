export function countWords(text) {
    const value = String(text || '').trim();
    if (!value) return 0;
    return value.split(/\s+/).filter(Boolean).length;
}

export function isExact50Words(text) {
    return countWords(text) === 50;
}
