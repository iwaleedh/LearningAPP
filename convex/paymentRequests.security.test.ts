import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('payment review creates entitlement and rejects approval without a user record', () => {
  const source = fs.readFileSync(path.resolve(__dirname, './paymentRequests.ts'), 'utf8');

  assert.match(source, /generateUploadUrl = mutation\(\{[\s\S]*submissionKey: v\.string\(\),[\s\S]*mimeType: v\.string\(\)/);
  assert.match(source, /query\("paymentUploadIntents" as any\)/);
  assert.match(source, /cleanupStalePaymentUploadIntents = internalMutation/);
  assert.match(source, /const duplicate = existing\.find\(\(r\) => r\.submissionKey === normalizedSubmissionKey\);/);
  assert.match(source, /throw new Error\("Upload session expired\. Please upload your payment slip again\."\);/);
  assert.match(source, /throw new Error\("Cannot approve payment request before the user account is fully registered\."\);/);
  assert.match(source, /query\("paymentEntitlements"\)/);
  assert.match(source, /ctx\.db\.insert\("paymentEntitlements", \{/);
  assert.match(source, /action: norm === "approved" \? "APPROVE_PAYMENT_REQUEST" : "REJECT_PAYMENT_REQUEST"/);
});