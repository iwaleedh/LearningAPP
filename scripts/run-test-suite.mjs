import { spawnSync } from 'node:child_process';

const suites = [
  { name: 'seed verification', command: ['npm', 'run', 'test:seed'] },
  { name: 'unit tests', command: ['npm', 'run', 'test:unit'] },
  { name: 'integration tests', command: ['npm', 'run', 'test:integration'] },
  { name: 'end-to-end tests', command: ['npm', 'run', 'test:e2e'] },
];

for (const suite of suites) {
  console.log(`\n[full-test-suite] Running ${suite.name}...`);
  const result = spawnSync(suite.command[0], suite.command.slice(1), {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: process.env,
  });

  if (typeof result.status === 'number' && result.status !== 0) {
    process.exit(result.status);
  }

  if (result.error) {
    console.error(`[full-test-suite] Failed to start ${suite.name}:`, result.error);
    process.exit(1);
  }
}

console.log('\n[full-test-suite] All suites passed.');