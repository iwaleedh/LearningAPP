import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const publicPastPapersDir = path.join(repoRoot, 'public', 'pastpapers');
const outputFile = path.join(repoRoot, 'src', 'data', 'pastPapers', 'availablePdfPaths.json');

function walkDirectory(dirPath) {
    return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = path.join(dirPath, entry.name);
        return entry.isDirectory() ? walkDirectory(entryPath) : [entryPath];
    });
}

const pdfPaths = walkDirectory(publicPastPapersDir)
    .filter((filePath) => filePath.endsWith('.pdf'))
    .map((filePath) => `/${path.relative(path.join(repoRoot, 'public'), filePath).split(path.sep).join('/')}`)
    .sort();

fs.writeFileSync(outputFile, `${JSON.stringify(pdfPaths, null, 2)}\n`);

console.log(`Wrote ${pdfPaths.length} paths to ${path.relative(repoRoot, outputFile)}`);