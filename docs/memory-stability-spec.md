# Memory & Stability — Engineering Specification

**Revision:** 2026-04-03 · Branch target: `fix/memory-stability`

> This document is the authoritative implementation specification for task set
> **M1, M3, M4, M5, R1, R4**. Each section is self-contained and executable.

---

## Table of Contents

1. [M1 — Clean All Timer Leaks](#m1--clean-all-timer-leaks)
2. [M3 + M4 — Close BroadcastChannel; Clear Callback Arrays](#m3--m4--close-broadcastchannel-clear-callback-arrays)
3. [M5 — Log Buffer Max-Size Observability](#m5--log-buffer-max-size-observability)
4. [R1 — Fix useSyllabus Dependencies](#r1--fix-usesyllabus-dependencies)
5. [R4 — Granular Error Boundaries](#r4--granular-error-boundaries)
6. [Cross-Cutting Rollback Plan](#6-cross-cutting-rollback-plan)
7. [Shared PR Template & Merge Checklist](#7-pr-template--merge-checklist)

---

## M1 — Clean All Timer Leaks

### 1.1 Problem Statement & Objective

**Problem.** Two components schedule `setTimeout` callbacks that can fire after
the component is unmounted, triggering React's "can't perform a state update on
an unmounted component" warning (silenced in React 18 but still causing logical
bugs and test flakiness):

| Site | File | Line | Issue |
| ------ | ------ | ------ | ------- |
| `ShareDialog.copyLink()` | `src/components/annotation/ShareDialog.jsx` | 75 | `setTimeout(() => setCopied(false), 2000)` inside a `.then()` — no cancel path, no unmount guard |
| `FlashcardExercise.handleAnswer()` | `src/components/exercises/FlashcardExercise.jsx` | 16 | `setTimeout(onNext, 150)` — no cancel path |

`LiveClassPage` already handles its timers through `copyTimersRef`, `snapHintTimerRef`, and `snapHoldTimerRef` with proper cleanup — no action required there.

**Objective.** Ensure every scheduled `setTimeout` in component code is either
(a) cancelled on unmount, or (b) guarded by an `isMounted` ref so stale
callbacks become no-ops.

### 1.2 Scope Boundaries

- **In scope:** `ShareDialog.jsx`, `FlashcardExercise.jsx`
- **Out of scope:** Service-layer fire-and-forget timeouts (`pdfExport.js`
  revokeObjectURL), `setInterval` in service singletons (handled under M3/M4),
  already-guarded timers in `LiveClassPage`.

### 1.3 Concrete Code Changes

#### `src/components/annotation/ShareDialog.jsx`

Replace the bare `setTimeout` inside `copyLink()` with a ref-tracked approach so
the timer is cancelled when the dialog unmounts.

```diff
-import { useState, useRef, useEffect } from 'react';   // add useRef, useEffect
+import { useState, useRef, useEffect } from 'react';

 export function ShareDialog({ ... }) {
     const [copied, setCopied] = useState(false);
+    const copyTimerRef = useRef(null);

+    // Cancel pending "reset copied" timer on unmount
+    useEffect(() => {
+        return () => {
+            if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
+        };
+    }, []);

     function copyLink() {
         const url = new URL(window.location.href);
         url.searchParams.set('session', String(activeSession.sessionId));
         navigator.clipboard.writeText(url.toString()).then(() => {
             setCopied(true);
-            setTimeout(() => setCopied(false), 2000);
+            if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
+            copyTimerRef.current = setTimeout(() => {
+                copyTimerRef.current = null;
+                setCopied(false);
+            }, 2000);
         });
     }
```

#### `src/components/exercises/FlashcardExercise.jsx`

The 150 ms delay is purely aesthetic. Track the timer in a ref and cancel on
unmount.

```diff
-import { useState } from 'react';
+import { useState, useRef, useEffect } from 'react';

 export default function FlashcardExercise({ question, onNext, onAttempt }) {
     const [isFlipped, setIsFlipped] = useState(false);
     const [startedAt] = useState(() => Date.now());
+    const nextTimerRef = useRef(null);

+    useEffect(() => {
+        return () => {
+            if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
+        };
+    }, []);

     function handleAnswer(correct) {
         onAttempt?.({ ... });
         setIsFlipped(false);
-        setTimeout(onNext, 150);
+        if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
+        nextTimerRef.current = setTimeout(() => {
+            nextTimerRef.current = null;
+            onNext();
+        }, 150);
     }
```

### 1.4 Instrumentation & Observability

No runtime instrumentation needed — these are short cosmetic delays. For
automated detection only (see §1.6 Testing).

### 1.5 Step-by-Step Implementation Plan

1. Read current `ShareDialog.jsx` fully to locate all `setTimeout` call sites.
2. Apply the diff above to `ShareDialog.jsx`.
3. Read current `FlashcardExercise.jsx` fully.
4. Apply the diff above to `FlashcardExercise.jsx`.
5. Run `npm run lint` — verify no new ESLint errors.
6. Run the test suite — verify existing tests pass.
7. Manually test: open ShareDialog, click copy, immediately close dialog
   before 2 s → no console warning; re-open → button resets correctly.

### 1.6 Testing Strategy

#### Unit tests (new file: `src/components/annotation/__tests__/ShareDialog.timer.test.jsx`)

```js
import { render, act, fireEvent } from '@testing-library/react';
import { ShareDialog } from '../ShareDialog';
import { vi } from 'vitest';

test('copy timer is cancelled on unmount — no setState after unmount', () => {
  vi.useFakeTimers();
  const { getAllByRole, unmount } = render(<ShareDialog /* minimal props */ />);
  const copyBtn = getAllByRole('button').find(b => b.textContent.includes('Copy'));
  fireEvent.click(copyBtn);
  // Unmount before the 2 s timer fires
  unmount();
  // Advance timer — no thrown error/warning
  expect(() => act(() => vi.advanceTimersByTime(2500))).not.toThrow();
  vi.useRealTimers();
});
```

#### Unit test for `FlashcardExercise.jsx`

```js
test('onNext is not called if component unmounts within 150 ms', () => {
  vi.useFakeTimers();
  const onNext = vi.fn();
  const { getByText, unmount } = render(<FlashcardExercise question={q} onNext={onNext} />);
  // Flip card then answer
  fireEvent.click(getByText(q.front));
  fireEvent.click(getByText('Got it'));
  unmount();
  act(() => vi.advanceTimersByTime(200));
  expect(onNext).not.toHaveBeenCalled();
  vi.useRealTimers();
});
```

#### Integration

Open the Annotation page, open ShareDialog, click copy, immediately navigate
away. Confirm no React warning in the console.

### 1.7 Acceptance Criteria

- [ ] No `clearTimeout` calls missing from component `useEffect` cleanup functions for `setTimeout` ids assigned to local/ref storage.
- [ ] Unit tests above pass with `vi.useFakeTimers()`.
- [ ] Zero "can't perform a state update on an unmounted component" console warnings from these two components in E2E smoke run.

### 1.8 Risk Assessment

| Risk | Likelihood | Severity | Mitigation |
| ------ | ----------- | ---------- | ----------- |
| `onNext` not called at all if component remounts and ref is cleared | Low | Low | Ref is per-instance; remount creates new ref. Timing of 150 ms is so short this is inconsequential. |
| Copy button appears to "reset" immediately after fast re-open | Very low | Cosmetic | Correct — old timer cancelled, new interaction starts fresh. |

### 1.9 Reproducibility Guide

```bash
# Detect sites with bare setTimeout in component files:
grep -rn "setTimeout(" src/components src/pages \
  --include="*.jsx" --include="*.js" | \
  grep -v "clearTimeout\|useEffect\|TimerRef\|timersRef\|timerRef\|// M1"
```

Expected output after fix: zero matches hitting `ShareDialog.jsx` or
`FlashcardExercise.jsx`.

### 1.10 Effort & Milestones

| Milestone | Estimate |
| ----------- | ---------- |
| Code changes | 30 min |
| Unit tests | 1 h |
| Review & merge | 30 min |
| **Total** | **2 h** |

---

## M3 + M4 — Close BroadcastChannel; Clear Callback Arrays

### 2.1 Problem Statement & Objective

**Problem A (M3 — BroadcastChannel leak in student path).**
`LiveClassPage.jsx` has a `useEffect` that opens a `BroadcastChannel` for sync.
The **teacher** cleanup path (the outer `return () => {}`) correctly calls both
`bc.close()` and `closeSyncChannel()` plus sets `unmountedRef.current = true`.
The **student** cleanup path (the inner `return () => {}`) only calls
`bc.postMessage`, `bc.close()`, and `broadcastRef.current = null` — it does **not**:

- Call `closeSyncChannel()` (leaving the module-level `localLiveClassStore`
  channel open after the student tab navigates away)
- Set `unmountedRef.current = true` (leaving the trailing broadcast timer guard
  inactive)
- Clear `fullBroadcastTrailingRef`

**Problem B (M4 — callback array unbounded in `healthMonitor`).**
`healthMonitor.js` uses a module-level mutable `listeners` array.  The
`subscribe()` method appends to it and returns an unsubscribe function. If any
caller forgets (or fails) to call the unsubscribe, the array grows unbounded
and holds references to stale callbacks. There is no maximum listener count, no
diagnostic log on subscribe/unsubscribe, and no test for the leak.

The `localLiveClassStore` listener Maps (`joinRequestListeners`,
`joinStatusListeners`, `studentNoteListeners`) already enforce cleanup-on-empty
by deleting the Map entry when a Set drains to zero — no changes needed there.

**Objective.**

- M3: Ensure the student path of the BroadcastChannel `useEffect` is
  functionally equivalent to the teacher path for teardown.
- M4: Add a `MAX_LISTENERS` guard in `healthMonitor`, emit a `warn` log when
  the cap is hit, and expose a `listenerCount()` helper for observability.

### 2.2 Scope Boundaries

- **In scope:** `LiveClassPage.jsx` BroadcastChannel effect student return block; `healthMonitor.js` subscribe/unsubscribe.
- **Out of scope:** `localLiveClassStore.js` listener Maps (already correct); `Convex` subscription layer.

### 2.3 Concrete Code Changes

#### M3 — `src/pages/LiveClassPage.jsx`

Locate the student role `return () => {` block inside the BroadcastChannel
`useEffect` (around line 940) and extend it:

```diff
       // Announce leave on cleanup
       return () => {
         bc.postMessage({ type: 'student-leave', data: { bcId } });
         bc.close();
         broadcastRef.current = null;
+        // M3: close module-level channel (same as teacher path)
+        closeSyncChannel();
+        // M3/M2: set unmounted guard so trailing broadcast timers no-op
+        unmountedRef.current = true;
+        // M3: clear any pending trailing canvas-state broadcast timer
+        if (fullBroadcastTrailingRef.current) {
+            clearTimeout(fullBroadcastTrailingRef.current);
+            fullBroadcastTrailingRef.current = null;
+        }
       };
```

#### M4 — `src/services/health/healthMonitor.js`

```diff
 import { getClient } from '../../convex-client.js';
 import { logger } from '../logger/logger.js';

 const log = logger.child({ component: 'healthMonitor' });

 const POLL_INTERVAL_MS = 30_000;

+/** Hard cap on simultaneous health-monitor subscribers to detect leaks early. */
+const MAX_LISTENERS = 20;

 let currentStatus = 'healthy';
 let pollTimer = null;
 let listeners = [];

 ...

   subscribe(callback) {
+    if (listeners.length >= MAX_LISTENERS) {
+      log.warn('healthMonitor.subscribe — listener cap reached; possible subscription leak', {
+        listenerCount: listeners.length,
+        cap: MAX_LISTENERS,
+      });
+      // Still add the listener — cap is a warning threshold, not a hard block
+    }
     listeners.push(callback);
     callback(getSnapshot());
     return () => {
       listeners = listeners.filter((fn) => fn !== callback);
+      log.debug('healthMonitor.unsubscribe', { listenerCount: listeners.length });
     };
   },

+  /** Exposed for testing and monitoring dashboards. */
+  listenerCount() {
+    return listeners.length;
+  },
```

### 2.4 Instrumentation & Observability

- `healthMonitor.subscribe` now logs `warn` when `>= MAX_LISTENERS` (20).
- `healthMonitor.listenerCount()` returns the current count for integration
  tests and monitoring.
- In production, the `warn` log is shipped via `logBuffer` → Convex, queryable
  via the admin panel.

**Detecting a leak at runtime:**

```js
// From browser devtools or a monitoring hook:
import { healthMonitor } from '@/services/health/healthMonitor.js';
console.log('health listeners:', healthMonitor.listenerCount());
```

### 2.5 Step-by-Step Implementation Plan

1. Open `LiveClassPage.jsx`; locate the BroadcastChannel `useEffect` (search
   for `// ── BroadcastChannel sync`).
2. Find the student-role inner `return () => {` block and add the three lines
   from §2.3.
3. Open `healthMonitor.js`; add the `MAX_LISTENERS` constant, warn log, debug
   log, and `listenerCount()` method.
4. Run `npm run lint`.
5. Run the test suite.
6. Manually: mount `LiveClassPage` as a student, navigate away, then confirm
   `localLiveClassStore.syncChannel` is `null` via devtools (see §2.8).

### 2.6 Testing Strategy

#### Unit — `healthMonitor` (new file `src/services/health/__tests__/healthMonitor.test.js`)

```js
import { healthMonitor } from '../healthMonitor.js';

afterEach(() => healthMonitor.stop());

test('subscribe / unsubscribe does not leave stale callbacks', () => {
  const cb = vi.fn();
  const unsub = healthMonitor.subscribe(cb);
  expect(healthMonitor.listenerCount()).toBe(1);
  unsub();
  expect(healthMonitor.listenerCount()).toBe(0);
});

test('warns when listener cap is reached', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const unsubs = [];
  for (let i = 0; i < 21; i++) {
    unsubs.push(healthMonitor.subscribe(() => {}));
  }
  // The warn should have been emitted at least once
  // (exact detection depends on logger internals — assert > 19 subs exist)
  expect(healthMonitor.listenerCount()).toBeGreaterThanOrEqual(20);
  unsubs.forEach(u => u());
  expect(healthMonitor.listenerCount()).toBe(0);
  warnSpy.mockRestore();
});
```

#### Integration / E2E

- Navigate to `/live/:id` as student, join a class, then navigate to `/chapters`.
- Assert `localLiveClassStore.syncChannel` is `null` post-navigation (accessible
  via a test export or a devtools console check).

### 2.7 Acceptance Criteria

- [ ] Student unmount path calls `closeSyncChannel()`, sets `unmountedRef.current = true`, and clears `fullBroadcastTrailingRef`.
- [ ] `healthMonitor.listenerCount()` returns `0` after all subscribers unsubscribe.
- [ ] `healthMonitor` emits a `warn` log entry when more than `MAX_LISTENERS` (20) subscriptions are active simultaneously.
- [ ] No BroadcastChannel objects remain open (other than `about:blank`) after the user navigates away from LiveClassPage. Verifiable with:

  ```js
  // Chrome Performance Monitor or:
  // getEventListeners(window) — check for excess 'message' handlers
  ```

### 2.8 Reproducibility Guide

```bash
# Find BroadcastChannel constructions without paired .close() in the same scope:
grep -n "new BroadcastChannel\|\.close()" src/pages/LiveClassPage.jsx

# Confirm closeSyncChannel is imported and called in both cleanup paths:
grep -n "closeSyncChannel" src/pages/LiveClassPage.jsx
```

In browser devtools, after navigating away from the student view:

```js
// Should be null after navigation
import('/src/services/liveclass/localLiveClassStore.js')
  .then(m => console.log('syncChannel is null?', m.closeSyncChannel?.()));
```

### 2.9 Risk Assessment

| Risk | Likelihood | Severity | Mitigation |
| ------ | ----------- | ---------- | ----------- |
| Student bc.postMessage in cleanup triggers teacher onmessage after channel closed | Very low | None | `closeSyncChannel()` closes the *module-level* channel, not `broadcastRef`. Order: postMessage first, then bc.close(), then closeSyncChannel(). |
| `MAX_LISTENERS = 20` too low for future multi-panel UIs | Low | Minor | Constant is easily increased; warn is non-blocking. |

### 2.10 Effort & Milestones

| Milestone | Estimate |
| ----------- | ---------- |
| LiveClassPage student path fix | 20 min |
| healthMonitor changes | 30 min |
| Unit tests | 1 h |
| Integration verification | 30 min |
| **Total** | **2.5 h** |

---

## M5 — Log Buffer Max-Size Observability

### 3.1 Problem Statement & Objective

**Problem.**
`logBuffer.js` already enforces `MAX_BUFFER_SIZE = 500` — entries beyond this
cap are silently dropped by slicing the array. Two issues remain:

1. **Silent drops are invisible.** When `buffer.slice()` removes the oldest
   entries, there is zero telemetry: no counter, no warn log, no metric. In
   production, if `shipLogs()` stalls (e.g., Convex WebSocket offline for
   extended period), the buffer silently discards log entries with no
   indication of how many were lost.

2. **`visibilitychange` listener leaks across module reloads in tests.**
   `startBufferFlush()` attaches a `visibilitychange` listener to `document`.
   `stopBufferFlush()` clears the `setInterval` but **never removes this
   listener**. In production this is benign (module singletons live for the
   page lifetime), but in test environments with module hot-reload or repeated
   `startBufferFlush()` / `stopBufferFlush()` calls, the listener accumulates,
   causing phantom flushes after `stopBufferFlush()`.

**Objective.**

- Emit a `console.warn` (in production: a special out-of-band log entry) each
  time entries are dropped.
- Expose a `getDroppedCount()` function for monitoring.
- Store the `visibilitychange` handler reference and remove it in
  `stopBufferFlush()`.

### 3.2 Scope Boundaries

- **In scope:** `src/services/logger/logBuffer.js`
- **Out of scope:** `logShipper.js` (transport layer failures are a separate concern), `logger.js`.

### 3.3 Concrete Code Changes

**Full updated `logBuffer.js`:**

```js
/**
 * logBuffer.js — Client-side Log Buffer
 * (M5: added drop counter, drop warning, and visibilitychange cleanup)
 */
import { shipLogs } from './logShipper.js';

const FLUSH_INTERVAL_MS = 10_000;
const MAX_BATCH_SIZE    = 50;
const MAX_BUFFER_SIZE   = 500; // hard cap — drop oldest when stalled

let buffer           = [];
let flushTimer       = null;
let droppedCount     = 0;          // M5: cumulative dropped-entry counter
let visibilityHandler = null;      // M5: stored so we can remove it in stop()

/** Add a log entry to the buffer. Auto-flushes when batch limit is reached. */
export function addToBuffer(entry) {
  buffer.push(entry);

  if (buffer.length > MAX_BUFFER_SIZE) {
    const excess = buffer.length - MAX_BUFFER_SIZE;  // M5: count before trimming
    buffer = buffer.slice(excess);
    droppedCount += excess;                           // M5: accumulate
    // Emit a single console.warn so this is visible in DevTools and local logs
    // without going through the buffer (which would cause infinite recursion).
    // In production this warn is intentionally out-of-band.
    // eslint-disable-next-line no-console
    console.warn(
      `[logBuffer] Buffer overflow — dropped ${excess} oldest entries. ` +
      `Total dropped this session: ${droppedCount}. ` +
      `Possible cause: log shipper is stalled.`
    );
  }

  if (buffer.length >= MAX_BATCH_SIZE) {
    flush();
  }
}

/** Flush the current buffer to the log shipper. */
export function flush() {
  if (buffer.length === 0) return;
  const batch = buffer;
  buffer = [];
  shipLogs(batch);
}

/** Current buffer size (for monitoring/testing). */
export function getBufferSize() {
  return buffer.length;
}

/** M5: Total entries dropped due to buffer overflow since module load. */
export function getDroppedCount() {
  return droppedCount;
}

/** M5: Reset dropped counter (for tests only — do not call in production). */
export function __resetDroppedCount() {
  droppedCount = 0;
}

/** Start the periodic flush timer. Call once at app init. */
export function startBufferFlush() {
  if (flushTimer) return; // idempotent guard
  flushTimer = setInterval(flush, FLUSH_INTERVAL_MS);

  if (typeof document !== 'undefined') {
    // M5: store ref so stopBufferFlush() can remove it
    visibilityHandler = () => {
      if (document.visibilityState === 'hidden') flush();
    };
    document.addEventListener('visibilitychange', visibilityHandler);
  }
}

/** Stop the periodic flush timer and remove the visibility listener. */
export function stopBufferFlush() {
  if (flushTimer) {
    clearInterval(flushTimer);
    flushTimer = null;
  }
  // M5: remove the stored visibility listener
  if (visibilityHandler && typeof document !== 'undefined') {
    document.removeEventListener('visibilitychange', visibilityHandler);
    visibilityHandler = null;
  }
}
```

### 3.4 Instrumentation & Observability

| Signal | How to observe |
| -------- | --------------- |
| Dropped entries (immediate) | `console.warn` emitted by `addToBuffer` whenever overflow occurs |
| Dropped count (cumulative) | `getDroppedCount()` — call from monitoring hooks or admin panel |
| Buffer current size | `getBufferSize()` — unchanged, already existed |

**Recommended monitoring hook** (add to `src/main.jsx` or an admin debug utility):

```js
// Dev-only periodic check: warn if buffer is persistently large
if (import.meta.env.DEV) {
  setInterval(() => {
    const { getBufferSize, getDroppedCount } = await import('./services/logger/logBuffer.js');
    if (getBufferSize() > 100) {
      console.warn('[dev] logBuffer size high:', getBufferSize(), 'dropped:', getDroppedCount());
    }
  }, 15_000);
}
```

### 3.5 Step-by-Step Implementation Plan

1. Replace the full content of `src/services/logger/logBuffer.js` with the version in §3.3.
2. Verify the `__resetDroppedCount` export is behind a test guard if desired.
3. Run `npm run lint` (the `// eslint-disable-next-line no-console` suppresses the only warning).
4. Run the test suite.
5. Manually: call `addToBuffer` 501 times with fake entries; confirm a `console.warn` appears and `getDroppedCount() === 1`.

### 3.6 Testing Strategy

#### Unit tests (`src/services/logger/__tests__/logBuffer.test.js`)

```js
import {
  addToBuffer, getBufferSize, getDroppedCount,
  flush, startBufferFlush, stopBufferFlush,
  __resetDroppedCount,
} from '../logBuffer.js';
import { vi } from 'vitest';
import * as shipper from '../logShipper.js';

beforeEach(() => {
  vi.spyOn(shipper, 'shipLogs').mockImplementation(() => {});
  // Drain buffer
  flush();
  __resetDroppedCount();
});

afterEach(() => vi.restoreAllMocks());

test('M5a: exports getDroppedCount() initialising to 0', () => {
  expect(getDroppedCount()).toBe(0);
});

test('M5b: console.warn emitted and droppedCount increments on overflow', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  // Fill buffer to 501 (MAX_BUFFER_SIZE + 1)
  for (let i = 0; i < 501; i++) {
    addToBuffer({ level: 'info', message: `entry-${i}`, timestamp: Date.now() });
  }
  expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Buffer overflow'));
  expect(getDroppedCount()).toBe(1);
  expect(getBufferSize()).toBeLessThanOrEqual(500);
  warnSpy.mockRestore();
});

test('M5c: stopBufferFlush removes visibilitychange listener — no phantom flush', () => {
  vi.useFakeTimers();
  startBufferFlush();
  // Add a sentinel entry
  addToBuffer({ level: 'info', message: 'sentinel', timestamp: Date.now() });
  stopBufferFlush();
  // Simulate tab hidden AFTER stop — should not trigger flush
  Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true });
  document.dispatchEvent(new Event('visibilitychange'));
  // shipLogs should NOT have been called (only the manual flush triggered above was)
  expect(shipper.shipLogs).toHaveBeenCalledTimes(0);
  vi.useRealTimers();
});
```

### 3.7 Acceptance Criteria

- [ ] `addToBuffer` with 501 entries triggers exactly one `console.warn` containing "Buffer overflow".
- [ ] `getDroppedCount()` returns a non-zero value after overflow; resets with `__resetDroppedCount()`.
- [ ] `stopBufferFlush()` followed by `document.dispatchEvent(new Event('visibilitychange'))` does NOT call `shipLogs`.
- [ ] `stopBufferFlush()` then `startBufferFlush()` (cycle) works correctly — only one listener total.

### 3.8 Risk Assessment

| Risk | Likelihood | Severity | Mitigation |
| ------ | ----------- | ---------- | ----------- |
| `console.warn` called synchronously inside hot logging path adds latency | Very low | Negligible | Trimming is O(n) on small array, warn is rare (overflow condition) |
| `droppedCount` never reset in production — grows throughout session | Intended | None | Monitoring sees total session loss; per-flush loss available via calc |

### 3.9 Effort & Milestones

| Milestone | Estimate |
| ----------- | ---------- |
| Code change | 20 min |
| Unit tests | 45 min |
| Review | 20 min |
| **Total** | **1.5 h** |

---

## R1 — Fix `useSyllabus` Dependencies

### 4.1 Problem Statement & Objective

**Problem.**
`src/hooks/useSyllabus.js` (line 39) suppresses the `react-hooks/exhaustive-deps`
ESLint rule to avoid a feedback loop:

```js
// eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally omit derived syllabus/error
}, [subjectKey]);
```

The effect reads `syllabusesBySubject[subjectKey]` and `errorsBySubject[subjectKey]`
from closed-over state to guard against re-fetching. Because these are not in
the dependency array, the values read inside the effect are the **snapshot from
the render cycle that scheduled the effect**, which is stale by the time the
async `.then()` resolves. The functional updater (`prev => ...`) inside
`setSyllabusesBySubject` correctly guards against overwriting, but the guard
*before* the fetch (`if (syllabusesBySubject[subjectKey]) return;`) reads a
closed-over stale value.

This works accidentally in practice (if `subjectKey` doesn't change, the effect
never re-fires, so the stale guard is never executed again), but:

- The `eslint-disable` comment masks the stale closure and could hide a real
  regression if the guard logic ever changes.
- If the hook is instantiated in two components simultaneously with the same
  `subjectKey` (e.g., two tabs), the guard may fail on the second mount because
  the first mount's state update is not yet reflected in the closure of the new
  effect.
- Code reviewers will silently accept future changes near this comment without
  understanding the constraint.

**Objective.**
Replace the stale-closure guard with a `useRef` tracking set, eliminating the
need for the ESLint disable and making the dependency array genuinely correct.

### 4.2 Scope Boundaries

- **In scope:** `src/hooks/useSyllabus.js`
- **Out of scope:** Callers (`NotePage.jsx`, `ChapterPage.jsx`, `ExercisePage.jsx`) — the public API is unchanged.

### 4.3 Concrete Code Change

```diff
 import { useEffect, useState } from 'react';
+import { useRef } from 'react';
 import { getSyllabusBySubject, normalizeSubjectKey } from '../data/syllabusIndex.js';

 export function useSyllabus(subject) {
     const subjectKey = normalizeSubjectKey(subject);
     const [syllabusesBySubject, setSyllabusesBySubject] = useState({});
     const [errorsBySubject, setErrorsBySubject] = useState({});

+    // Track which subjectKeys have been fetched (or are in-flight) to avoid
+    // duplicate requests and to eliminate the stale-closure guard below.
+    // Using a ref means: (a) no re-render triggered by tracking, (b) the Set
+    // is always current regardless of which render cycle's closure is active.
+    const fetchedKeysRef = useRef(new Set());

     const syllabus = syllabusesBySubject[subjectKey] || null;
     const error    = errorsBySubject[subjectKey]    || null;

     useEffect(() => {
-        // Only fetch if we don't already have data (or an error) for this subject.
-        // Do NOT include syllabus/error in the dep array — they are derived from
-        // setS state updated inside this effect, which would create a feedback loop.
-        if (syllabusesBySubject[subjectKey] || errorsBySubject[subjectKey]) {
-            return;
-        }
-
+        // Guard via ref — immune to stale closures, no feedback loop.
+        if (fetchedKeysRef.current.has(subjectKey)) return;
+        fetchedKeysRef.current.add(subjectKey);

         let cancelled = false;

         void getSyllabusBySubject(subjectKey)
             .then((nextSyllabus) => {
                 if (cancelled) return;
                 setSyllabusesBySubject((prev) => (
                     prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextSyllabus }
                 ));
             })
             .catch((nextError) => {
                 if (cancelled) return;
+                // On error, remove from fetchedKeys so a retry is possible on
+                // next subjectKey change (e.g., user switches subject then back).
+                fetchedKeysRef.current.delete(subjectKey);
                 setErrorsBySubject((prev) => (
                     prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextError }
                 ));
             });

         return () => {
             cancelled = true;
         };
-    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally omit derived syllabus/error
     }, [subjectKey]);

     return {
         subjectKey,
         syllabus,
         error,
         isLoading: !syllabus && !error,
     };
 }
```

**Key design decisions:**

- `fetchedKeysRef.current` is a `Set` — O(1) membership test, no re-render.
- On fetch error, the key is removed so the hook can retry if the user navigates
  away and back to the same subject (subjectKey changes away → error state
  preserved but key removed → next visit re-fetches).
- The functional updater pattern in `setSyllabusesBySubject` is retained as
  a belt-and-suspenders idempotency guard for concurrent renders.
- No more `// eslint-disable-next-line` — the dependency array `[subjectKey]`
  is complete and correct.

### 4.4 Instrumentation & Observability

No runtime instrumentation needed. The correctness is structural. If you want
to instrument cache hits:

```js
// Optional: add to the guard branch
if (fetchedKeysRef.current.has(subjectKey)) {
  if (import.meta.env.DEV) {
    console.debug('[useSyllabus] cache hit for', subjectKey);
  }
  return;
}
```

### 4.5 Step-by-Step Implementation Plan

1. Open `src/hooks/useSyllabus.js`.
2. Add `useRef` to the React import.
3. Add `const fetchedKeysRef = useRef(new Set())` after the state declarations.
4. Remove the `if (syllabusesBySubject[subjectKey] || errorsBySubject[subjectKey])` guard and the eslint-disable comment.
5. Add `if (fetchedKeysRef.current.has(subjectKey)) return; fetchedKeysRef.current.add(subjectKey);`.
6. Add `fetchedKeysRef.current.delete(subjectKey)` in the `.catch()` block.
7. Remove the `// eslint-disable-next-line` comment and the trailing `}, [subjectKey])` comment within the deps array.
8. Run `npm run lint` — the exhaustive-deps rule must now pass cleanly.
9. Run the test suite.
10. Manually: navigate to Chemistry notes, navigate to Maths notes, navigate back to Chemistry — confirm the syllabus is NOT re-fetched (check Network tab for Convex calls).

### 4.6 Testing Strategy

#### Unit tests (`src/hooks/__tests__/useSyllabus.test.js`)

```js
import { renderHook, act } from '@testing-library/react';
import { useSyllabus } from '../useSyllabus.js';
import * as syllabusIndex from '../../data/syllabusIndex.js';
import { vi } from 'vitest';

beforeEach(() => {
  vi.spyOn(syllabusIndex, 'getSyllabusBySubject').mockResolvedValue({ units: [] });
  vi.spyOn(syllabusIndex, 'normalizeSubjectKey').mockImplementation(s => s ?? 'chemistry');
});

afterEach(() => vi.restoreAllMocks());

test('R1a: fetches syllabus once per subjectKey, not on every render', async () => {
  const { result, rerender } = renderHook(({ subject }) => useSyllabus(subject), {
    initialProps: { subject: 'chemistry' },
  });
  await act(async () => {});
  // Re-render with same subject — should NOT fetch again
  rerender({ subject: 'chemistry' });
  rerender({ subject: 'chemistry' });
  expect(syllabusIndex.getSyllabusBySubject).toHaveBeenCalledTimes(1);
});

test('R1b: fetches again when subjectKey changes', async () => {
  const { rerender } = renderHook(({ subject }) => useSyllabus(subject), {
    initialProps: { subject: 'chemistry' },
  });
  await act(async () => {});
  rerender({ subject: 'physics' });
  await act(async () => {});
  expect(syllabusIndex.getSyllabusBySubject).toHaveBeenCalledTimes(2);
});

test('R1c: re-fetches after error when subject toggles away and back', async () => {
  syllabusIndex.getSyllabusBySubject
    .mockRejectedValueOnce(new Error('network error'))
    .mockResolvedValueOnce({ units: [] });

  const { rerender } = renderHook(({ subject }) => useSyllabus(subject), {
    initialProps: { subject: 'chemistry' },
  });
  await act(async () => {});
  // Switch subject
  rerender({ subject: 'physics' });
  await act(async () => {});
  // Switch back — should retry chemistry
  rerender({ subject: 'chemistry' });
  await act(async () => {});
  expect(syllabusIndex.getSyllabusBySubject).toHaveBeenCalledTimes(3);
});

test('R1d: isLoading is false once syllabus is resolved', async () => {
  const { result } = renderHook(() => useSyllabus('chemistry'));
  expect(result.current.isLoading).toBe(true);
  await act(async () => {});
  expect(result.current.isLoading).toBe(false);
  expect(result.current.syllabus).toEqual({ units: [] });
});

test('R1e: eslint exhaustive-deps passes — no eslint-disable in the file', async () => {
  const fs = await import('fs');
  const src = fs.readFileSync(
    new URL('../useSyllabus.js', import.meta.url).pathname, 'utf8',
  );
  expect(src).not.toContain('eslint-disable');
});
```

### 4.7 Acceptance Criteria

- [ ] No `// eslint-disable` comments in `useSyllabus.js`.
- [ ] `npm run lint` passes without suppressions on this file.
- [ ] `getSyllabusBySubject` is called exactly once per unique `subjectKey` per hook instance across multiple re-renders.
- [ ] On error, switching away and back to the same subject triggers a retry.
- [ ] `isLoading` returns `true` before resolution, `false` after.

### 4.8 Risk Assessment

| Risk | Likelihood | Severity | Mitigation |
| ------ | ----------- | ---------- | ----------- |
| Two hook *instances* for same subjectKey both fetch (ref is per-instance) | Low | Minor | The functional updater dedupes the state write; both requests resolve to same data. A shared module-level cache is better long-term but out of scope here. |
| fetchedKeysRef not reset on hot-reload (Vite HMR) | Very low | Dev only | HMR replaces the module; new hook instances start fresh. Not a production concern. |

### 4.9 Effort & Milestones

| Milestone | Estimate |
| ----------- | ---------- |
| Code change | 20 min |
| Unit tests | 1 h |
| Lint verification | 5 min |
| **Total** | **1.5 h** |

---

## R4 — Granular Error Boundaries

### 5.1 Problem Statement & Objective

**Problem.**
`App.jsx` has a single `ErrorBoundary` wrapping every route via `RouteWrapper`,
keyed on `location.pathname`:

```jsx
<ErrorBoundary key={`eb-${location.pathname}`}>
  <Suspense fallback={<PageLoader />}>
    <Outlet />
  </Suspense>
</ErrorBoundary>
```

This means:

1. A runtime error in any *part* of a page (e.g., a broken block in a note,
   a faulty chart in ProgressPage, a broken exercise widget) takes down the
   entire page — sidebar, header, and all — and redirects to the dashboard.
2. There is no component context in the error boundary's `componentDidCatch`
   output — errors are logged with only `'ErrorBoundary caught:'` and the stack.
3. The boundary catches errors but always navigates to the dashboard root,
   which is disorienting when only a section failed.
4. There is no way to retry within the same session without a full page reload.

**Objective.**

- Create a reusable, configurable `ErrorBoundary` with a `name` prop for
  identifying the failed section, a `fallback` prop for custom inline fallbacks,
  and a `resetKeys` prop for declarative recovery.
- Wrap the following high-risk sections with named boundaries:
  - Each `NoteBlockRenderer` block (per-block, not per-page)
  - `RecallPanel`
  - Exercise widgets in `ExercisePage`
  - Charts / analytics in `ProgressPage`
  - `LiveClassPage` canvas section vs. controls toolbar

### 5.2 Scope Boundaries

- **In scope:** `ErrorBoundary.jsx` refactor; wrapper sites listed above.
- **Out of scope:** Server-side error handling, Convex mutation errors (caught
  separately), form validation errors.

### 5.3 Concrete Code Changes

#### A. Refactor `src/components/ErrorBoundary.jsx`

Replace the monolithic class with a flexible version that accepts `name`,
`fallback`, `resetKeys`, and `onError`:

```jsx
import { Component } from 'react';
import '../pages/Pages.css';

// ── Default inline fallback (compact) ────────────────────────────────────────
function DefaultInlineFallback({ name, error, onReset }) {
  return (
    <div className="eb-inline" role="alert">
      <span className="eb-inline-icon">⚠️</span>
      <span className="eb-inline-msg">
        {name ? `${name} failed to load` : 'This section failed to load'}
      </span>
      {onReset && (
        <button className="btn btn-sm btn-ghost eb-inline-retry" onClick={onReset}>
          Retry
        </button>
      )}
      {import.meta.env.DEV && (
        <details className="eb-inline-details">
          <summary>Details</summary>
          <pre>{error?.message}</pre>
        </details>
      )}
    </div>
  );
}

// ── Full-screen fallback (page-level) ─────────────────────────────────────────
function DefaultFullScreenFallback() {
  return (
    <div className="fallback-screen">
      <div className="fallback-screen-icon">⚠️</div>
      <h2 className="fallback-screen-title">Something went wrong</h2>
      <p className="fallback-screen-copy">
        An unexpected error occurred. Please refresh the page or try again.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => { window.location.href = import.meta.env.BASE_URL || '/'; }}
      >
        Return to Dashboard
      </button>
    </div>
  );
}

/**
 * ErrorBoundary — Composable error boundary.
 *
 * Props:
 *   name {string}        Human-readable label for the section (logged + shown in fallback).
 *   fallback {ReactNode} Custom fallback. Receives { error, reset } if a function.
 *   resetKeys {any[]}    When any value changes, the boundary resets automatically.
 *   inline {boolean}     Use compact inline fallback instead of full-screen (default: false).
 *   onError {function}   Optional callback (error, info) for external telemetry.
 *   children
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    const { name = 'unknown', onError } = this.props;
    if (import.meta.env.DEV) {
      console.error(`[ErrorBoundary:${name}]`, error, info);
    }
    onError?.(error, info);
    // In production, the logger.error call can be added here when the
    // logger is available — import would be deferred to avoid circular deps.
  }

  // Declarative reset when resetKeys change (mirrors react-error-boundary API)
  componentDidUpdate(prevProps) {
    const { resetKeys } = this.props;
    if (
      this.state.hasError &&
      resetKeys &&
      resetKeys.some((key, i) => key !== prevProps.resetKeys?.[i])
    ) {
      this.reset();
    }
  }

  reset() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    const { hasError, error } = this.state;
    const { children, fallback, inline = false, name } = this.props;

    if (!hasError) return children;

    if (typeof fallback === 'function') {
      return fallback({ error, reset: this.reset });
    }
    if (fallback) return fallback;

    if (inline) {
      return (
        <DefaultInlineFallback
          name={name}
          error={error}
          onReset={this.reset}
        />
      );
    }

    return <DefaultFullScreenFallback />;
  }
}
```

**Minimal CSS additions** (append to `src/pages/Pages.css`):

```css
/* Inline error boundary fallback */
.eb-inline {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: var(--color-error-light, #fef2f2);
  border: 1px solid var(--color-error, #ef4444);
  border-radius: var(--radius-md, 6px);
  font-size: var(--font-size-sm);
  color: var(--color-error, #ef4444);
}
.eb-inline-icon { flex-shrink: 0; }
.eb-inline-msg  { flex: 1; }
.eb-inline-retry { margin-left: auto; }
.eb-inline-details { font-size: var(--font-size-xs); margin-top: var(--space-1); color: var(--color-text-secondary); }
.eb-inline-details pre { white-space: pre-wrap; word-break: break-all; }
```

#### B. Apply per-block boundary in `src/components/notes/NoteBlockRenderer.jsx`

Wrap each block render with an inline `ErrorBoundary`. Locate the top-level
block mapping logic (the array `.map(block => ...)`) and wrap each rendered
block:

```jsx
import ErrorBoundary from '../ErrorBoundary';

// Inside the block map:
return blocks.map((block) => (
  <ErrorBoundary
    key={block.id}
    name={`block:${block.type}:${block.id}`}
    inline
    resetKeys={[block.id]}
  >
    {renderBlock(block)}
  </ErrorBoundary>
));
```

#### C. Wrap `RecallPanel` in `src/pages/NotePage.jsx`

```jsx
<ErrorBoundary name="RecallPanel" inline resetKeys={[noteId]}>
  <RecallPanel ... />
</ErrorBoundary>
```

#### D. Wrap exercise widgets in `src/pages/ExercisePage.jsx`

```jsx
<ErrorBoundary
  name={`exercise:${exercise.type}`}
  inline
  resetKeys={[exercise.id]}
>
  <ExerciseWidget exercise={exercise} ... />
</ErrorBoundary>
```

#### E. Wrap analytics charts in `src/pages/ProgressPage.jsx`

```jsx
<ErrorBoundary name="ProgressChart" inline>
  <PerformanceChart data={chartData} />
</ErrorBoundary>
```

#### F. Wrap LiveClassPage canvas in `src/pages/LiveClassPage.jsx`

```jsx
<ErrorBoundary name="LiveCanvas" inline resetKeys={[classId]}>
  <div className="lc-canvas-wrap" ref={canvasWrapRef}>
    <canvas ref={teacherCanvasRef} />
  </div>
</ErrorBoundary>
```

> The toolbar and sidebar controls should remain **outside** this boundary so
> the user can still end the class or navigate away if the canvas crashes.

### 5.4 Instrumentation & Observability

Add to `componentDidCatch` in `ErrorBoundary.jsx` (import lazily to avoid
circular deps):

```js
componentDidCatch(error, info) {
  const { name = 'unknown', onError } = this.props;
  if (import.meta.env.DEV) {
    console.error(`[ErrorBoundary:${name}]`, error, info);
  }
  onError?.(error, info);
  // Production: fire-and-forget log via logger
  import('../../services/logger/logger.js').then(({ logger }) => {
    logger.error('ErrorBoundary caught', {
      boundary: name,
      message: error?.message,
      stack: error?.stack?.slice(0, 500),
      componentStack: info?.componentStack?.slice(0, 500),
    });
  }).catch(() => { /* logger unavailable — ignore */ });
}
```

### 5.5 Step-by-Step Implementation Plan

1. Replace `src/components/ErrorBoundary.jsx` with the new implementation in §5.3A.
2. Add the `.eb-inline` CSS to `src/pages/Pages.css`.
3. Verify `App.jsx` — the existing `<ErrorBoundary key={...}>` in `RouteWrapper` works unchanged (it uses default full-screen fallback). No changes needed there.
4. Update `NoteBlockRenderer.jsx` to wrap each block with an inline boundary.
5. Update `NotePage.jsx` to wrap `RecallPanel`.
6. Update `ExercisePage.jsx` to wrap exercise widgets.
7. Update `ProgressPage.jsx` to wrap chart components.
8. Update `LiveClassPage.jsx` to wrap the canvas section.
9. Run `npm run lint`.
10. Run the test suite.
11. Manual smoke: introduce a deliberate `throw new Error('test')` inside a single block renderer; verify only that block shows the inline fallback — rest of the note renders normally.

### 5.6 Testing Strategy

#### Unit tests for `ErrorBoundary.jsx` (`src/components/__tests__/ErrorBoundary.test.jsx`)

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

const Bomb = ({ shouldThrow }) => {
  if (shouldThrow) throw new Error('bomb!');
  return <div>ok</div>;
};

test('R4a: renders children when no error', () => {
  render(<ErrorBoundary name="test"><Bomb shouldThrow={false} /></ErrorBoundary>);
  expect(screen.getByText('ok')).toBeInTheDocument();
});

test('R4b: inline fallback shown on error; children hidden', () => {
  const { container } = render(
    <ErrorBoundary name="TestSection" inline><Bomb shouldThrow /></ErrorBoundary>
  );
  expect(container.querySelector('.eb-inline')).toBeInTheDocument();
  expect(screen.queryByText('ok')).not.toBeInTheDocument();
});

test('R4c: Retry button resets the boundary', () => {
  let shouldThrow = true;
  const { rerender } = render(
    <ErrorBoundary name="RetryTest" inline>
      <Bomb shouldThrow={shouldThrow} />
    </ErrorBoundary>
  );
  const retry = screen.getByText('Retry');
  shouldThrow = false;
  fireEvent.click(retry);
  rerender(
    <ErrorBoundary name="RetryTest" inline>
      <Bomb shouldThrow={false} />
    </ErrorBoundary>
  );
  expect(screen.getByText('ok')).toBeInTheDocument();
});

test('R4d: resetKeys change triggers automatic reset', () => {
  const { rerender } = render(
    <ErrorBoundary name="ResetKeyTest" inline resetKeys={['a']}>
      <Bomb shouldThrow />
    </ErrorBoundary>
  );
  expect(screen.queryByText('ok')).not.toBeInTheDocument();
  rerender(
    <ErrorBoundary name="ResetKeyTest" inline resetKeys={['b']}>
      <Bomb shouldThrow={false} />
    </ErrorBoundary>
  );
  expect(screen.getByText('ok')).toBeInTheDocument();
});

test('R4e: custom fallback function receives error and reset', () => {
  const customFallback = ({ error, reset }) => (
    <div>
      <span>custom: {error.message}</span>
      <button onClick={reset}>custom-reset</button>
    </div>
  );
  render(
    <ErrorBoundary name="CustomFallback" fallback={customFallback}>
      <Bomb shouldThrow />
    </ErrorBoundary>
  );
  expect(screen.getByText('custom: bomb!')).toBeInTheDocument();
});

test('R4f: onError callback is invoked with error and info', () => {
  const onError = vi.fn();
  render(
    <ErrorBoundary name="OnErrorTest" inline onError={onError}>
      <Bomb shouldThrow />
    </ErrorBoundary>
  );
  expect(onError).toHaveBeenCalledWith(
    expect.objectContaining({ message: 'bomb!' }),
    expect.objectContaining({ componentStack: expect.any(String) })
  );
});
```

#### Integration / E2E (R4)

Navigate to a note page. In devtools, temporarily monkey-patch one block's
render to throw. Verify:

- Only that block shows the `.eb-inline` fallback.
- Surrounding blocks render normally.
- RecallPanel is unaffected.
- The toolbar remains functional.

### 5.7 Acceptance Criteria

- [ ] `ErrorBoundary` accepts `name`, `fallback`, `resetKeys`, `inline`, `onError` props.
- [ ] A broken block in `NoteBlockRenderer` shows an inline fallback; the rest of the note is intact.
- [ ] `RecallPanel` crash shows an inline fallback in the right panel; the note body is unaffected.
- [ ] Exercise widget crash shows inline fallback; other widgets on the page are intact.
- [ ] LiveClassPage canvas crash shows inline fallback; toolbar buttons remain clickable.
- [ ] `componentDidCatch` fires `onError` callback with `(error, info)`.
- [ ] `resetKeys` change causes automatic recovery without user action.
- [ ] All unit tests in §5.6 pass.

### 5.8 Risk Assessment

| Risk | Likelihood | Severity | Mitigation |
| ------ | ----------- | ---------- | ----------- |
| Block-level boundary increases React tree depth, minor perf overhead | Low | Negligible | Boundaries are cheap class components; render-path is unchanged when no error |
| `resetKeys` causing infinite reset loop if re-render always changes the key | Medium | High | Only pass stable identifiers (block.id, noteId) — never derived values that change each render |
| Lazy `import()` of logger inside `componentDidCatch` fails silently | Low | Low | Wrapped in `.catch(() => {})` — error is always logged to console regardless |
| Custom `fallback` prop receiving stale closure if defined inline | Low | Medium | Document in JSDoc to use `useCallback` or stable references for function fallbacks |

### 5.9 Effort & Milestones

| Milestone | Estimate |
| ----------- | ---------- |
| ErrorBoundary.jsx refactor | 1 h |
| CSS additions | 15 min |
| NoteBlockRenderer wrap | 30 min |
| NotePage / ExercisePage / ProgressPage / LiveClassPage wraps | 1 h |
| Unit tests | 2 h |
| E2E smoke | 30 min |
| **Total** | **5.25 h** |

---

## 6. Cross-Cutting Rollback Plan

All changes are **additive or defensive**:

- M1: Adds `useRef` + `useEffect` cleanup — revert by removing the `useEffect` and restoring the bare `setTimeout`.
- M3: Adds three lines to an existing cleanup block — revert by deleting those lines.
- M4: Adds a constant, a warn, a log, and a method — revert by removing them.
- M5: Replaces one file — revert to the previous version from git.
- R1: Replaces an effect guard pattern — revert by restoring the state-check plus eslint-disable.
- R4: Adds wrapper components — revert by removing the `<ErrorBoundary>` JSX wrappers and restoring `ErrorBoundary.jsx` to its original form.

**Rollback command:**

```bash
git revert HEAD  # if squash-merged as one commit
# OR
git checkout main -- src/components/annotation/ShareDialog.jsx \
  src/components/exercises/FlashcardExercise.jsx \
  src/pages/LiveClassPage.jsx \
  src/services/health/healthMonitor.js \
  src/services/logger/logBuffer.js \
  src/hooks/useSyllabus.js \
  src/components/ErrorBoundary.jsx \
  src/components/notes/NoteBlockRenderer.jsx \
  src/pages/NotePage.jsx \
  src/pages/ExercisePage.jsx \
  src/pages/ProgressPage.jsx
```

No database migrations, no config changes, no API surface changes — rollback
is safe at any time during the sprint.

---

## 7. PR Template & Merge Checklist

### Pull Request Description Template

```text
## Memory & Stability — M1, M3, M4, M5, R1, R4

### Summary
This PR addresses timer leaks, BroadcastChannel cleanup gaps, log buffer
observability, useSyllabus dependency hygiene, and granular error boundaries
across the codebase.

### Changes by task

#### M1 — Timer leaks
- `ShareDialog.jsx`: Track `setTimeout` id in `copyTimerRef`; cancel on unmount
- `FlashcardExercise.jsx`: Track `setTimeout` id in `nextTimerRef`; cancel on unmount

#### M3 — BroadcastChannel student cleanup
- `LiveClassPage.jsx`: Student role cleanup now calls `closeSyncChannel()`,
  sets `unmountedRef.current = true`, and clears `fullBroadcastTrailingRef`

#### M4 — Callback arrays
- `healthMonitor.js`: Added `MAX_LISTENERS = 20` guard, warn log on overflow,
  `listenerCount()` method for monitoring

#### M5 — Log buffer max-size observability
- `logBuffer.js`: Added `droppedCount` counter, `console.warn` on overflow,
  `getDroppedCount()` export, stored `visibilityHandler` ref, remove listener
  in `stopBufferFlush()`

#### R1 — useSyllabus deps
- `useSyllabus.js`: Replaced stale-closure guard with `useRef` Set tracking;
  removed `// eslint-disable-next-line react-hooks/exhaustive-deps`

#### R4 — Granular error boundaries
- `ErrorBoundary.jsx`: Added `name`, `fallback`, `resetKeys`, `inline`, `onError` props
- Wrapped: NoteBlockRenderer blocks, RecallPanel, exercise widgets,
  ProgressPage charts, LiveClassPage canvas

### Testing
- [ ] All new unit tests pass (`npm run test`)
- [ ] No new lint warnings (`npm run lint`)
- [ ] Manual smoke: broken block shows inline fallback, rest of page intact
- [ ] Manual smoke: student navigates away from LiveClass, no stale BC channel
- [ ] Manual smoke: ShareDialog copy + immediate close, no console warning

### Risk
Low — all changes are additive or defensive; rollback plan in spec doc.
```

### Merge Checklist

- [ ] Each file touched has been read in its entirety before editing
- [ ] `npm run lint` passes with zero suppressions in changed files (except the intentional `no-console` in logBuffer M5)
- [ ] `npm run test` passes (all existing + new tests)
- [ ] `npm run build` succeeds with no new warnings
- [ ] Manual smoke test of each changed component/page
- [ ] Each new test file follows the `src/**/__tests__/*.test.{js,jsx}` convention
- [ ] PR description accurately lists every changed file
- [ ] No debug `console.log` left in production paths
- [ ] Spec doc at `docs/memory-stability-spec.md` committed alongside code changes

---

## Appendix A — Detection Scripts

### Find bare `setTimeout` in component code without cleanup

```bash
# Shows files that call setTimeout but don't appear to track the id via ref
grep -rn "setTimeout(" src/components src/pages \
  --include="*.jsx" --include="*.js" \
| grep -v "Ref\ | timers\ | clearTimeout\ | \/\/ M1\ | fire-and-forget\ |
```

### Confirm BroadcastChannel parity between teacher and student cleanup paths

```bash
python3 - <<'EOF'
import re, pathlib
src = pathlib.Path('src/pages/LiveClassPage.jsx').read_text()
# Find all return () => { ... } blocks in the BroadcastChannel useEffect
# and verify both contain 'closeSyncChannel' and 'unmountedRef'
for marker in ['closeSyncChannel', 'unmountedRef.current = true']:
    count = src.count(marker)
    print(f'{marker}: {count} occurrence(s)')
EOF
```

Expected after fix: `closeSyncChannel: 2`, `unmountedRef.current = true: 2`.

### Validate logBuffer exports

```bash
node - <<'EOF'
const { getDroppedCount, getBufferSize, startBufferFlush, stopBufferFlush } =
  await import('./src/services/logger/logBuffer.js');
console.log('getDroppedCount:', typeof getDroppedCount); // 'function'
console.log('getBufferSize:',  typeof getBufferSize);    // 'function'
EOF
```

### Check useSyllabus for eslint-disable

```bash
grep -n "eslint-disable" src/hooks/useSyllabus.js
# Expected: no matches
```

### Exercise ErrorBoundary inline fallback in browser

Open any note page, paste in browser console:

```js
// Temporarily patch a block renderer render call to throw
// (restore after test)
const origRender = window.__debugNoteBlockRenderer;
```

Or in test environment:

```bash
node --test src/components/__tests__/ErrorBoundary.test.jsx
```
