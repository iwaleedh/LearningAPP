# Live Classroom — Comprehensive Audit Report

**Date:** 4 April 2026  
**Auditor:** Automated Code Audit  
**Scope:** All Live Classroom features, tools, and infrastructure  
**Codebase version:** master branch (current)

---

## Executive Summary

The Live Classroom is a **substantial collaborative whiteboard** built on Fabric.js + Convex reactive subscriptions with a BroadcastChannel offline fallback. Approximately **2,400+ LOC** in the main page, **600+ LOC** in the sync service, **12 UI components**, and **8 Convex backend modules** comprise the feature.

### Overall Status

| Category | Rating | Summary |
|----------|--------|---------|
| **Core whiteboard** | ✅ Functional | Drawing, shapes, text, undo/redo, real-time sync all work |
| **Teacher tools** | ✅ Mostly Functional | Toolbar, backgrounds, timer, laser, stencils, templates, graph plotter |
| **Student experience** | ⚠️ Partial | Join flow works, admission works, hand-raise works; notes & polls buggy |
| **Real-time sync** | ✅ Functional | Convex subscriptions + BC fallback; some edge cases |
| **Accessibility** | ❌ Poor | Missing ARIA roles, focus traps, keyboard nav, live regions |
| **Mobile/Touch** | ❌ Broken in places | SpotlightOverlay non-functional; toolbar dropdowns overflow |
| **Security** | ✅ Good | Server-side auth guards, input validation, size limits |
| **Not Implemented** | 🚫 7 features | Video/audio, screen share, recording, chat, breakout rooms, captions, attendance |

### Key Metrics

- **All existing tests pass:** 27/27 (3 liveclass + 24 stability)
- **Critical bugs found:** 4
- **High-severity issues:** 12
- **Medium-severity issues:** 18
- **Low-severity issues:** 11

---

## 1. Feature Inventory & Status

### 1a. Implemented Features

| # | Feature | Status | Backend | Teacher | Student | Notes |
|---|---------|--------|---------|---------|---------|-------|
| 1 | **Shared whiteboard (Fabric.js)** | ✅ Complete | Convex `annotationStrokes` | Full edit | View-only | Pen, shapes, text, eraser |
| 2 | **Real-time stroke sync** | ✅ Complete | Convex subscriptions | ✅ | ✅ | Dedup by `strokeClientId` |
| 3 | **BroadcastChannel fallback** | ✅ Complete | localStorage | ✅ | ✅ (same browser) | Cross-tab sync only |
| 4 | **Teacher cursor / laser** | ✅ Complete | Convex `liveClassCursors` | Broadcasts | Receives | Dot + trail modes |
| 5 | **Spotlight overlay** | ⚠️ Partial | Local only | ✅ Desktop | N/A | **No touch support** |
| 6 | **Hand raise** | ✅ Complete | Convex `handRaises` | Acknowledges | Raises | Server-enforced dedup |
| 7 | **Stopwatch/countdown timer** | ✅ Complete | Convex `classTimers` | Controls | View-only | Versioned, server-anchored time |
| 8 | **Live polls/quizzes** | ⚠️ Partial | **Local only** (in-memory) | Creates | Responds | **No persistence; stale closure bug** |
| 9 | **Student admission (join requests)** | ✅ Complete | Convex `classJoinRequests` | Approves/rejects | Requests | Auto-accept option |
| 10 | **Student personal notes** | ⚠️ Partial | Convex `studentNotes` | Views in new tab | Edits | Memory leak on unmount |
| 11 | **Canvas backgrounds** | ✅ Complete | Convex `backgroundType` | Sets | Receives | 5 options |
| 12 | **Stencil shapes** | ✅ Complete | Local + stroke sync | ✅ | N/A | Drag-and-drop palette |
| 13 | **Whiteboard templates** | ⚠️ Partial | Local only | ✅ | N/A | **Template objects don't sync** (missing strokeClientId) |
| 14 | **Graph plotter** | ✅ Complete | Local render | ✅ | N/A | `y = f(x)` parser |
| 15 | **Flowchart tool** | ✅ Complete | Stroke sync | ✅ | N/A | Process/decision/terminal nodes + edges |
| 16 | **Ruler widget** | ✅ Complete | Local only | ✅ | N/A | Draggable, rotatable |
| 17 | **Import images** | ✅ Complete | Stroke sync | ✅ | N/A | Lazy-loaded dialog |
| 18 | **Stamps (emoji)** | ✅ Complete | Stroke sync | ✅ | N/A | Emoji placement on canvas |
| 19 | **Shape snap** | ✅ Complete | Local + sync | ✅ | N/A | Freehand → circle/rectangle |
| 20 | **Arrow tool** | ✅ Complete | Stroke sync | ✅ | N/A | Path with arrowhead |
| 21 | **Join code sharing** | ✅ Complete | Convex `joinCode` | Generates | Enters | 6-char alphanumeric |
| 22 | **Participant grid** | ✅ Complete | Convex sessions | Views | Listed | Initials placeholders only |
| 23 | **Multi-page tabs** | ✅ Complete | Local only | ✅ | N/A | In-memory snapshots; **lost on refresh** |
| 24 | **Present mode** | ⚠️ Partial | **Local only** (in-memory) | Invites | Requests | No Convex persistence |
| 25 | **Session start/end** | ✅ Complete | Convex `liveClassSessions` | Creates/ends | Notified | Students see "ended" overlay |
| 26 | **Undo/redo** | ✅ Complete | Local + reconciliation | ✅ | N/A | **History grows unbounded** |
| 27 | **Font picker** | ✅ Complete | Local | ✅ | N/A | Text tool font selection |

### 1b. Not Implemented Features

| # | Feature | Impact | Notes |
|---|---------|--------|-------|
| 1 | **Video/audio call** | 🚫 Critical gap | Explicitly requires WebRTC; no SDK installed |
| 2 | **Screen sharing** | 🚫 Critical gap | Requires WebRTC |
| 3 | **Recording** | 🚫 High gap | No code exists |
| 4 | **Real-time text chat** | 🚫 High gap | No chat component or table |
| 5 | **Breakout rooms** | 🚫 Medium gap | No code exists |
| 6 | **Captions/transcription** | 🚫 Medium gap | No code exists |
| 7 | **Attendance tracking/export** | 🚫 Medium gap | Participants tracked but no report/download |
| 8 | **Floating reactions** | 🚫 Low gap | Only stamp tool on canvas |

---

## 2. Prioritized Issue List

### Critical (P0) — Must fix before production use

| ID | Feature | Mode | Issue | Impact | Remediation |
|----|---------|------|-------|--------|-------------|
| C-1 | **Live Polls** | Student | Stale `myPollAnswers` closure in `onPollClosed` callback | Poll results always show "no answer submitted" for every student | Use a ref (`myPollAnswersRef.current`) inside the sync callback instead of captured state |
| C-2 | **Undo/Redo** | Teacher | `historyStack` grows unbounded — full JSON stringify per canvas change | Memory exhaustion in sessions >30 min; tab crash | Cap at 50 entries, evict oldest |
| C-3 | **StudentPollOverlay** | Student | State (`selected`, `freeText`) not reset when `poll.id` changes | Student inadvertently re-submits previous poll answer to new poll | Add `useEffect` that resets state when `poll.id` changes |
| C-4 | **StudentPollOverlay** | Student | `poll.options.map(...)` crashes when `poll.type === 'freetext'` (options is undefined) | White screen for freetext polls | Guard with `poll.options?.map(...)` |

### High (P1) — Should fix before wider rollout

| ID | Feature | Mode | Issue | Impact | Remediation |
|----|---------|------|-------|--------|-------------|
| H-1 | **Undo/Redo** | Teacher | `loadFromJSON(JSON.parse(snap))` has no try/catch | Corrupted snapshot breaks canvas permanently, `skipHistory` stuck true | Wrap in try/catch, reset `skipHistory` in catch |
| H-2 | **Templates** | Teacher | Template objects added without `data.strokeClientId` | Templates don't sync to remote students/teachers | Assign unique `strokeClientId` to each template object before adding to canvas |
| H-3 | **My Notes URL** | Student | `joinTempId` is null for auto-accept/direct-link joins → URL becomes `/my-notes/abc123/null` | Broken route, 404 | Guard against null `joinTempId`; fallback to session storage or disable button |
| H-4 | **Text Tool** | Teacher | `sendStrokeUpsert` fires on every keystroke with no debounce | Convex mutation flood; 10+ mutations/second while typing | Debounce 300ms |
| H-5 | **Canvas Init** | Both | Effect depends only on `[role]`; if role is set before canvas DOM renders, init never retries | Permanent blank canvas on fast auth resolves | Add `isCanvasReady` as dependency or use `MutationObserver` |
| H-6 | **Role Detection** | Both | Three competing effects set `role` with `prev ?? ...`; first writer wins | Teacher may get student role if offline effect wins race | Use a single deterministic effect path; consolidate role assignment |
| H-7 | **End Class** | Teacher | `navigate('/teacher')` runs synchronously after async `endClass()` | Students may not receive session-ended notification before teardown | Await `endClass()` before navigating |
| H-8 | **Import Images** | Teacher | `handlePlaceImages` promise chain has no `.catch()` | Failed image load silently breaks, no user feedback | Add error handling and user-facing error message |
| H-9 | **StudentNotePanel** | Student | `debounceRef.current` timeout never cleared on unmount | Zombie timeout fires `updateStudentNote` after component unmounts | Add cleanup effect: `clearTimeout(debounceRef.current)` |
| H-10 | **SpotlightOverlay** | Teacher | No touch event support (`onTouchStart/Move/End`) | **Completely non-functional on tablets/iPads** — common teaching devices | Add pointer events or parallel touch handlers |
| H-11 | **Polls** | Both | Polls are local-only (in-memory Map) — no Convex persistence | Polls lost on page refresh; students on different devices don't see polls | Create Convex `liveClassPolls` and `pollResponses` tables |
| H-12 | **Student Late-Join (BC)** | Student | No full canvas-state handshake via BroadcastChannel | Student sees blank board for up to 3 seconds after joining | Send immediate `canvas-state` message when new BC participant detected |

### Medium (P2) — Quality improvements

| ID | Feature | Mode | Issue | Impact | Remediation |
|----|---------|------|-------|--------|-------------|
| M-1 | **Toolbar** | Teacher | No `role="toolbar"`, no `aria-pressed` on active tool, no arrow-key navigation | Inaccessible to screen readers and keyboard-only users | Add ARIA attributes and keyboard nav |
| M-2 | **All Modals** | Both | Missing `role="dialog"`, `aria-modal="true"`, focus trap, Escape key handler | WCAG 2.1 Level A violation | Add dialog semantics across SessionStartModal, JoinClassModal, StudentPollOverlay |
| M-3 | **ClassTimer** | Both | No `aria-live` region on timer display | Screen readers don't announce time updates | Add `aria-live="polite"` on timer display element |
| M-4 | **HandRaisePanel** | Teacher | No `aria-live="polite"` on raise list | Screen readers don't announce new raises | Add `aria-live` to the list container |
| M-5 | **Toolbar** | Teacher | Dropdown portals have no viewport clamping | Dropdowns can render off-screen on mobile | Clamp position to viewport bounds |
| M-6 | **Toolbar** | Teacher | Touch targets may be below 44px minimum | Hard to tap on mobile | Increase button min-size |
| M-7 | **LaserPointerOverlay** | Both | `useEffect` deps `[cursors, trails]` create new array refs per render → rAF loop restarts every render | Unnecessary timer teardown/creation; visual flicker | Use refs instead of state for frequently-changing data |
| M-8 | **Toolbar** | Teacher | 5 separate `useEffect` hooks for outside-click listeners | Performance overhead from multiple document-level listeners | Consolidate into one listener |
| M-9 | **AdmissionPanel** | Teacher | Shared `loading` state disables all approve/reject buttons when one is clicked | Can't admit multiple students simultaneously | Track loading state per-request |
| M-10 | **AdmissionPanel** | Teacher | Auto-admit toggle uses `<div onClick>` — not keyboard accessible | Keyboard users can't toggle auto-admit | Use `<button>` or `<input type="checkbox">` |
| M-11 | **Cursor Broadcast** | Teacher | `setCursors(...)` fires on every mousemove, creating new array + triggering re-render | Excessive re-renders, janky UI | Throttle to rAF or 50ms interval |
| M-12 | **Shape drag tools** | Teacher | `fc.remove(old)` + `new Fabric...()` + `fc.add(new)` every 16ms during drag | Noticeable lag on lower-end machines | Reuse Fabric object, update properties in-place |
| M-13 | **All Panels** | Both | Portal dropdown anchors stale after window resize/scroll | Mispositioned panels | Add resize/scroll listener to update anchors |
| M-14 | **Multi-page** | Teacher | Tab snapshots are in-memory only | All pages except active one lost on refresh | Persist to sessionStorage or IndexedDB |
| M-15 | **SessionStartModal** | Teacher | `&amp;` literal in placeholder text → displays as `&amp;` | Visual bug in input placeholder | Replace with `&` |
| M-16 | **Timer** | Teacher | Local version incremented optimistically but Convex receives old version | Timer state can drift between local and server on version mismatch | Reconcile with server response |
| M-17 | **Poll Results** | Student | `polls.find(p => p.status === 'closed')` returns first closed poll, not most recent | Student may see stale poll results | Use `.findLast()` or reverse the array |
| M-18 | **LaserPointerOverlay** | Both | Multi-user dot trails merged into single `'dot_cursor'` key | All users' dot cursors share one trail | Use per-user keys |

### Low (P3) — Minor polish

| ID | Feature | Mode | Issue | Remediation |
|----|---------|------|-------|-------------|
| L-1 | **Toolbar** | Teacher | Color swatch `title` attributes show hex codes instead of color names | Map hex to human-readable names |
| L-2 | **Toolbar** | Teacher | Duplicate colors in COLORS array | Remove duplicates |
| L-3 | **TeacherStudentGrid** | Teacher | `initials()` splits on `'_'` only, not spaces | Split on `\s\|_` |
| L-4 | **JoinClassModal** | Student | No Escape key handler to close | Add `onKeyDown` handler |
| L-5 | **StudentNotePanel** | Student | "Saved" status shows before initial load completes | Default to "Loading…" until load finishes |
| L-6 | **LaserPointerOverlay** | Both | rAF loop runs even with zero cursors/trails | Add early return when nothing to draw |
| L-7 | **Clipboard** | Both | `navigator.clipboard.writeText()` has no `.catch()` | Add catch with fallback or error toast |
| L-8 | **SpotlightOverlay** | Teacher | SVG mask `id="spotlight-mask"` could collide if multiple instances | Use `useId()` for unique ID |
| L-9 | **Fabric dispose** | Both | `myFabricRef.current` not set to null after `fc.dispose()` | Set to null in cleanup |
| L-10 | **Text tool** | Teacher | IText event listeners stack up across multiple text objects | Clean up listeners when switching objects |
| L-11 | **hasFullLiveClassAccess** | Both | Function nearly always returns true (most sessions have `createdAt`) | Tighten the check to validate required fields |

---

## 3. Test Matrix

### Existing Tests (All Pass ✅)

| Test File | Count | Focus |
|-----------|-------|-------|
| `localLiveClassStore.test.js` | 2 | Teacher role enforcement for local class creation |
| `ClassTimer.security.test.js` | 1 | Anchor-based elapsed time + expectedVersion forwarding |
| `strokes.security.test.ts` | — | Stroke access control |
| `timers.security.test.ts` | — | Timer security |
| `collaborationApproval.security.test.ts` | — | createLiveSession approval |
| `auth.test.ts` | — | raiseHand authorization |

### Test Coverage Gaps

| Feature Area | Test Needed | Priority |
|-------------|-------------|----------|
| Poll lifecycle (create → respond → close → results) | Unit + integration | P0 |
| StudentPollOverlay state reset between polls | Unit | P0 |
| Undo/redo with corrupted history snapshot | Unit | P1 |
| Template sync (strokeClientId assignment) | Integration | P1 |
| Student late-join stroke hydration | Integration | P1 |
| Session end notification delivery | Integration | P1 |
| BroadcastChannel full-state handshake | Unit | P2 |
| SpotlightOverlay touch events | Integration (mobile) | P2 |
| Multi-page tab persistence | Unit | P2 |
| Toolbar keyboard navigation | a11y/unit | P2 |
| Modal focus trap + Escape key | a11y/unit | P2 |

---

## 4. Security Assessment

### Strengths ✅

| Area | Implementation |
|------|----------------|
| **Server-side auth** | All Convex mutations use `requireApprovedAuthenticatedUserId`, `requireHostedSessionHostOrTeacher`, `requireApprovedMatchingUserId` |
| **Input validation** | Stroke JSON: 128KB max, must be valid JSON object; timer values: finite non-negative; background: allowlist validated |
| **Join code** | Unique 6-char alphanumeric, no ambiguous characters, collision-checked |
| **Teacher-only actions** | `requireTeacher` guard on class creation, `requireHostedSessionHostOrTeacher` on timer/background/admission |
| **Timer clock-skew protection** | Server recomputes elapsed time from its own `anchorStartedAt` on pause/stop, ignoring client `elapsedMs` |
| **Optimistic concurrency** | Timer uses `expectedVersion` to prevent stale updates |

### Concerns ⚠️

| Area | Risk | Severity |
|------|------|----------|
| `window.open` with user-provided `tempId` | Low risk — tempId is server-generated UUID, but URL is not validated | Low |
| Clipboard API called without `.catch()` | Permission errors silently swallowed | Low |
| Local poll data in-memory only | Teacher's poll responses are not validated server-side | Medium (when polls go to Convex) |
| `hasFullLiveClassAccess` overly permissive | Nearly always returns true — does not effectively gate access | Medium |

---

## 5. Browser Compatibility Notes

| Feature | Chrome | Edge | Firefox | Safari | iOS | Android |
|---------|--------|------|---------|--------|-----|---------|
| Fabric.js canvas | ✅ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ |
| BroadcastChannel | ✅ | ✅ | ✅ | ✅ (15.4+) | ✅ (15.4+) | ✅ |
| Convex WebSocket | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Clipboard API | ✅ | ✅ | ✅ | ⚠️ (HTTPS) | ⚠️ | ⚠️ |
| ResizeObserver | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Spotlight (mouse events) | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Touch drawing | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| Video/audio | 🚫 N/A | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 |

⚠️ = Partial or requires specific conditions  
❓ = Not tested (canvas touch behavior depends on Fabric.js configuration)

---

## 6. Remediation Roadmap

### Phase 1 — Critical Bug Fixes (Week 1)

| Task | Effort | Fixes |
|------|--------|-------|
| Fix stale `myPollAnswers` closure with ref pattern | 1 hr | C-1 |
| Cap `historyStack` at 50 entries | 30 min | C-2 |
| Reset StudentPollOverlay state on `poll.id` change | 30 min | C-3 |
| Guard `poll.options?.map()` for freetext polls | 15 min | C-4 |
| Add try/catch to undo/redo `loadFromJSON` | 30 min | H-1 |
| Assign `strokeClientId` to template objects | 30 min | H-2 |
| Guard null `joinTempId` in "My Notes" URL | 15 min | H-3 |
| Debounce text tool sync (300ms) | 30 min | H-4 |

### Phase 2 — Reliability & Edge Cases (Week 2)

| Task | Effort | Fixes |
|------|--------|-------|
| Fix canvas init race condition | 1 hr | H-5 |
| Consolidate role detection into single effect | 2 hr | H-6 |
| Await `endClass()` before navigate | 15 min | H-7 |
| Add `.catch()` to image import chain | 15 min | H-8 |
| Fix StudentNotePanel debounce cleanup | 15 min | H-9 |
| Add touch support to SpotlightOverlay | 1 hr | H-10 |
| Implement student late-join BC handshake | 1 hr | H-12 |

### Phase 3 — Accessibility & UX (Week 3-4)

| Task | Effort | Fixes |
|------|--------|-------|
| Add `role="dialog"` + focus trap to all modals | 3 hr | M-2 |
| Add ARIA toolbar, pressed states, keyboard nav | 3 hr | M-1 |
| Add `aria-live` to timer, hand-raise panel | 1 hr | M-3, M-4 |
| Fix dropdown viewport clamping | 2 hr | M-5 |
| Increase touch targets to 44px | 1 hr | M-6 |
| Fix admission panel per-request loading | 1 hr | M-9 |
| Fix auto-admit toggle to be a button/checkbox | 15 min | M-10 |

### Phase 4 — Performance & Polish (Week 4-5)

| Task | Effort | Fixes |
|------|--------|-------|
| Throttle cursor/laser state updates | 1 hr | M-7, M-11 |
| Consolidate outside-click listeners | 1 hr | M-8 |
| Reuse Fabric objects in shape drag tools | 2 hr | M-12 |
| Add resize/scroll listener for portal anchors | 1 hr | M-13 |
| Persist multi-page tabs to sessionStorage | 1 hr | M-14 |
| Wrap toolbar callbacks in `useCallback` | 1 hr | Perf |

### Phase 5 — Feature Completions (Week 5+)

| Task | Effort | Fixes |
|------|--------|-------|
| Create Convex tables for polls (`liveClassPolls`, `pollResponses`) | 4 hr | H-11 |
| Create Convex table for present mode | 2 hr | Present mode |
| Add attendance tracking/export | 4 hr | Missing feature |
| Add real-time text chat | 8 hr | Missing feature |

### Future — Major Features (Separate planning required)

| Feature | Technology | Effort Estimate |
|---------|-----------|-----------------|
| Video/audio call | WebRTC (Daily.co / LiveKit / Jitsi) | 2-4 weeks |
| Screen sharing | WebRTC getDisplayMedia | 1-2 weeks |
| Recording | Server-side composite or client MediaRecorder | 2-3 weeks |
| Breakout rooms | Sub-session routing + Convex tables | 1-2 weeks |
| Captions/transcription | WebSpeech API or cloud STT | 1-2 weeks |

---

## 7. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Memory exhaustion from undo history in long sessions | High | High (tab crash) | **P0:** Cap history stack |
| Students see wrong poll results | High | High (broken feature) | **P0:** Fix stale closure |
| Teacher whiteboard templates invisible to students | High | Medium (confusion) | **P1:** Add strokeClientIds |
| Canvas fails to initialize on fast auth | Medium | High (blank screen) | **P1:** Fix init effect deps |
| Session end notification lost | Medium | Medium (student confusion) | **P1:** Await endClass |
| Spotlight unusable on tablets | High (if tablet used) | Medium (feature broken) | **P1:** Add touch events |
| Polls lost on refresh | High | Medium (teacher frustration) | **P2:** Convex persistence |
| WCAG violations in modals/toolbar | High | Medium (compliance) | **P2:** Add ARIA + focus traps |
| Multi-page tabs lost on refresh | High | Low-Medium | **P2:** SessionStorage persistence |

---

## Appendix A: File Inventory

### Frontend Components

| File | LOC (approx) | Feature |
|------|------|---------|
| `src/pages/LiveClassPage.jsx` | 2,400+ | Main page |
| `src/pages/StudentNotesViewPage.jsx` | ~150 | Teacher views student notes |
| `src/components/liveclass/LiveClassToolbar.jsx` | ~660 | Whiteboard toolbar |
| `src/components/liveclass/HandRaisePanel.jsx` | ~45 | Hand raise list |
| `src/components/liveclass/LivePollPanel.jsx` | ~210 | Teacher poll creation |
| `src/components/liveclass/StudentPollOverlay.jsx` | ~115 | Student poll response |
| `src/components/liveclass/StudentAdmissionPanel.jsx` | ~135 | Join request management |
| `src/components/liveclass/StudentNotePanel.jsx` | ~55 | Student note-taking |
| `src/components/liveclass/ClassTimer.jsx` | ~180 | Stopwatch/countdown |
| `src/components/liveclass/SessionStartModal.jsx` | ~95 | Session creation modal |
| `src/components/liveclass/JoinClassModal.jsx` | ~115 | Student join modal |
| `src/components/liveclass/LaserPointerOverlay.jsx` | ~130 | Laser pointer overlay |
| `src/components/liveclass/SpotlightOverlay.jsx` | ~55 | Spotlight dimming |
| `src/components/liveclass/TeacherStudentGrid.jsx` | ~85 | Participant grid |
| `src/components/liveclass/RulerWidget.jsx` | ~100 | On-screen ruler |
| `src/components/liveclass/GraphWidget.jsx` | ~150 | Math graph plotter |
| `src/components/liveclass/StencilPalette.jsx` | ~100 | Shape stencils |
| `src/components/liveclass/TemplatePicker.jsx` | ~100 | Template picker |
| `src/components/liveclass/FontPicker.jsx` | ~50 | Font selector |
| `src/components/liveclass/BackgroundPicker.jsx` | ~50 | Background picker |
| `src/components/liveclass/ImportMediaDialog.jsx` | ~100 | Image import |
| `src/components/liveclass/StampPicker.jsx` | ~50 | Emoji stamps |
| `src/components/liveclass/FlowchartTool.js` | ~150 | Flowchart helpers |

### Services

| File | LOC (approx) | Purpose |
|------|------|---------|
| `src/services/liveclass/liveClassSync.js` | ~600 | Core sync controller |
| `src/services/liveclass/localLiveClassStore.js` | ~200 | Offline/local fallback |

### Convex Backend

| File | Tables | Purpose |
|------|--------|---------|
| `convex/liveclass.ts` | `liveClassSessions` | Session lifecycle |
| `convex/strokes.ts` | `annotationStrokes` | Canvas objects |
| `convex/cursors.ts` | `liveClassCursors` | Cursor positions |
| `convex/handraises.ts` | `handRaises` | Hand raise queue |
| `convex/timers.ts` | `classTimers` | Synced timer |
| `convex/sessions.ts` | `liveSessions`, `sessionParticipants` | Participants |
| `convex/joinRequests.ts` | `classJoinRequests` | Admission flow |
| `convex/invites.ts` | `sessionInvites` | Invitations |

### Routes

| Route | Component | Access |
|-------|-----------|--------|
| `/live/:sessionId` | `LiveClassPage` | RequireSignIn (guest fallback for local) |
| `/live-notes/:sessionId/:tempId` | `StudentNotesViewPage` | RequireApproved + RequireRole(['teacher']) |

---

## Appendix B: Configuration Notes

| Item | Value |
|------|-------|
| **Real-time backend** | Convex (reactive WebSocket subscriptions) |
| **Canvas library** | Fabric.js v7.2 |
| **Offline sync** | BroadcastChannel API + localStorage |
| **Max stroke size** | 128 KB JSON |
| **Max page number** | 10,000 |
| **Cursor throttle** | 50ms |
| **Full canvas broadcast throttle** | 3,000ms (leading + trailing) |
| **Join code format** | 6-char uppercase alphanumeric (no ambiguous chars) |
| **Timer concurrency** | Optimistic versioning with `expectedVersion` |
| **Timer clock-skew protection** | Server-side `anchorStartedAt` recomputation |
| **Auth guards** | `requireTeacher`, `requireHostedSessionHostOrTeacher`, `requireHostedSessionAccess`, `requireApprovedMatchingUserId` |

---

*End of audit report.*
