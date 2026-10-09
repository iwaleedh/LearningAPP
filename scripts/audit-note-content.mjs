/** Content triage, not factual certification. Findings require human/source review. */
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { evaluateMathExpr } from '../src/utils/mathExprParser.js';

const root = new URL('../src/data/seedNotes/', import.meta.url);
const subjects = {};
const arithmeticCandidates = [];
let fieldsChecked = 0;
function* strings(value, path = '') {
  if (typeof value === 'string') yield [path, value];
  else if (Array.isArray(value)) for (const [i, child] of value.entries()) yield* strings(child, `${path}[${i}]`);
  else if (value && typeof value === 'object') for (const [key, child] of Object.entries(value)) yield* strings(child, path ? `${path}.${key}` : key);
}
for (const directory of await readdir(root, { withFileTypes: true })) {
  if (!directory.isDirectory()) continue;
  const folder = new URL(`${directory.name}/`, root);
  subjects[directory.name] = 0;
  for (const file of await readdir(folder)) {
    if (!/^note.*\.js$/.test(file)) continue;
    const url = new URL(file, folder);
    const module = await import(url);
    const note = module.default || Object.values(module).find(value => value?.blocks);
    subjects[directory.name]++;
    for (const [path, source] of strings(note)) {
      if (!/blocks|recall|guidedLesson/.test(path)) continue;
      fieldsChecked++;
      if (path.endsWith('.svg') || source.includes('nb-frac')) continue;
      const superscripts = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+' };
      const text = source.replace(/<sup>(.*?)<\/sup>/g, '^$1').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ')
        .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+/g, value => '^' + [...value].map(c => superscripts[c]).join(''))
        .replace(/\b\d{1,3}(?:[ ,]\d{3})+(?:\.\d+)?\b/g, value => value.replace(/[ ,]/g, ''));
      const number = '[−-]?\\d+(?:\\.\\d+)?(?:\\s*\\^\\s*[−-]?\\d+)?';
      const arithmetic = new RegExp(`(?<![\\w.^/])(${number}(?:\\s*[+−×÷*/]\\s*${number})+)\\s*=\\s*(${number})`, 'g');
      for (const match of text.matchAll(arithmetic)) {
        const after = text.slice(match.index + match[0].length).trimStart();
        const before = text.slice(0, match.index).trimEnd();
        if (/^[.^\d+−×÷*/-]|^[a-zA-Z₀-₉]/.test(after) && !/^(mol|Pa|J|W|N|m|cm|dm|kg|g|s|kJ|days|units|times|atoms)\b/.test(after)) continue;
        if (/[\d.^/+−×÷*(-]$/.test(before)) continue;
        const expression = match[1].replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        try {
          const calculated = evaluateMathExpr(expression, 0);
          const rawStated = evaluateMathExpr(match[2].replace(/−/g, '-'), 0);
          const asFraction = after.startsWith('%') && Math.abs(calculated - rawStated / 100) < Math.abs(calculated - rawStated);
          const stated = rawStated / (asFraction ? 100 : 1);
          const [mantissa, exponent] = match[2].split('^');
          const places = mantissa.split('.')[1]?.length || 0;
          const tolerance = Math.max(0.5 * 10 ** (Number(exponent || 0) - places) / (asFraction ? 100 : 1), Math.abs(calculated) * 0.015, 1e-9);
          if (Number.isFinite(calculated) && Math.abs(calculated - stated) > tolerance) arithmeticCandidates.push({
            file: fileURLToPath(url), path, expression: match[0], calculated, stated,
            context: text.slice(Math.max(0, match.index - 80), match.index + match[0].length + 80),
          });
        } catch { /* Not a standalone arithmetic expression. */ }
      }
    }
  }
}
console.log(JSON.stringify({
  scope: 'Catalogue inventory and simple arithmetic triage; source verification is still required. Partial expressions, exponents and units can produce false positives.',
  notes: Object.values(subjects).reduce((a, b) => a + b, 0), subjects, fieldsChecked, arithmeticCandidates,
}, null, 2));
