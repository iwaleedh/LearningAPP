import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

function collectTestFiles(rootDir, suffix) {
  const files = [];
  const queue = [rootDir];

  while (queue.length > 0) {
    const currentDir = queue.pop();
    const entries = readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      if (entry.isDirectory()) {
        queue.push(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(suffix)) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
}

const [rootDir, suffix] = process.argv.slice(2);

if (!rootDir || !suffix) {
  console.error('[run-tsx-tests] Usage: node scripts/run-tsx-tests.mjs <rootDir> <suffix>');
  process.exit(1);
}

const files = collectTestFiles(rootDir, suffix);

if (files.length === 0) {
  console.error(`[run-tsx-tests] No test files found under ${rootDir} matching *${suffix}`);
  process.exit(1);
}

const result = spawnSync('npx', ['tsx', '--test', ...files], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: process.env,
});

if (typeof result.status === 'number') {
  process.exit(result.status);
}

if (result.error) {
  console.error('[run-tsx-tests] Failed to start tsx:', result.error);
}
process.exit(1);