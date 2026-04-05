# Mobile Notes View — Fullscreen & Minimal Chrome Enhancement

## Objective

Maximise visible note content on the mobile Notes view (≤599px / `isPhoneLayout`) by reducing, reorganising, or deferring chrome elements that currently consume excessive vertical space, and by refining the existing fullscreen reading mode into a polished, production-grade immersive experience.

---

## Current State Audit

### Chrome elements consuming vertical space (mobile ≤599px)

| Element | CSS Class | Approx. Height | Always Visible? |
|---------|-----------|-----------------|-----------------|
| App Header | `.app-header` | 64px (`--header-height`) | Yes — fixed, blur backdrop |
| Note Toolbar (2-row: title + button grid) | `.note-toolbar` | ~92px (title row + 4-col button grid, each 44px min-height + gaps) | Yes — sticky below header |
| Read Progress Bar | `.note-read-progress` | 3–4px | Yes (except in fullscreen) |
| Desktop Topic Tabs | `.note-topics-tabs` | Hidden on phone (`showDesktopTopicTabs = false`) | No |
| `.note-body` top margin/padding | margin: `var(--space-2)` | 8px | Yes |
| `.nb-root` internal padding | `var(--space-3)` top | 12px | Yes |
| **Total chrome before content** | | **~180px** | |

**Available viewport on a typical 667px-tall phone: ~487px for actual note content.**

### Existing fullscreen implementation

- State: `fullscreenActive` (persisted to `localStorage` key `LT_NOTE_FULLSCREEN`), only activates when `isPhoneLayout` is true.
- Toolbar becomes floating overlay (`.note-toolbar--overlay`) with auto-hide on scroll-down (48px threshold) and 1.8s reveal timeout.
- `.page-content--note-fullscreen` strips page padding; `.note-scroll-area--fullscreen` strips border/shadow/radius.
- Content area gets `padding-top: calc((44px + 8px) * 2 + 20px)` to clear toolbar.
- Recall panel becomes full-screen modal (`.recall-panel--modal`).
- Escape key exits fullscreen and returns focus to fullscreen button.

### Pain points to address

1. **Title row wastes space** — Subject badge + unit badge + subtopic title occupy a full ~44px row even when the user has already navigated and knows where they are.
2. **Button grid is 4-column** — Forces a second row when >4 buttons; each button has 44px min-height + 8px gap.
3. **Header (64px) never hides** — Even in fullscreen mode the global app header remains, consuming 64px.
4. **Fullscreen toolbar padding-top is excessive** — `calc((44px + 8px) * 2 + 20px) ≈ 124px` reserved even when the toolbar is auto-hidden.
5. **No condensed toolbar state** — `.note-toolbar--condensed` is defined in CSS but not visibly documented as reducing chrome substantially.
6. **Auto-hide UX is fragile** — 1.8s timeout can feel jarring; no gesture (swipe-down) to explicitly summon toolbar; no haptic or visual hint that controls exist off-screen.

---

## Design Requirements

### DR-1: Multiple Design Options

Provide **three distinct design options** for the minimal-chrome / fullscreen experience. Each option must include a rationale, a wireframe description, and trade-offs.

#### Option A — Condensed Sticky Toolbar + Hide-on-Scroll

**Concept:** Keep a single-row, ultra-compact toolbar (≤40px) that stays sticky in normal mode but smoothly translates off-screen on scroll-down in fullscreen. A thin "pull tab" or edge indicator lets the user swipe or tap to recall it.

**Wireframe (normal mode):**
```
┌──────────────────────────────────┐
│ [←] Subtopic Title    [⊕][📖][⛶]│  ← single row, 40px
├──────────────────────────────────┤
│ ▓░░░░░░░░░░░░░░  (progress 3px) │
├──────────────────────────────────┤
│                                  │
│   Note content (NoteBlockRenderer│
│   blocks)                        │
│                                  │
│                    [↑ scroll-top] │
└──────────────────────────────────┘
```

**Wireframe (fullscreen — toolbar hidden):**
```
┌──────────────────────────────────┐
│ ▓▓▓░░░░░░░░░░  (progress 3px)   │  ← only visible chrome
│                                  │
│   Note content fills entire      │
│   viewport below safe-area       │
│                                  │
│                                  │
│          [tap to reveal toolbar] │
│                    [↑ scroll-top] │
└──────────────────────────────────┘
```

**Chrome details:**
- Subject badge, unit badge, qualification badge: hidden on mobile in all modes (already partially done).
- Subtopic title: truncated, single line, `font-size: 0.85rem`.
- Buttons collapse to icon-only (already done). Group into: `[Mark-as-Read] [Topics ▾] [More ⋯]`. The "More" overflow menu contains: Contents, Recall, Study Tools, Fullscreen toggle.
- On scroll-down > 48px: toolbar slides up with `transform: translateY(-100%)`.
- On scroll-up or tap in top 60px zone: toolbar slides back.
- A 4px-wide coloured edge indicator (left or top) hints that toolbar is hidden.

**Rationale:** Least disruptive to current UX. Users who never use fullscreen still benefit from the condensed single-row toolbar. Fullscreen is a natural extension.

**Trade-offs:**
- (+) Familiar sticky-header pattern; easy mental model.
- (+) Minimal JS changes — mostly CSS and button regrouping.
- (−) Overflow menu adds one extra tap to reach Contents/Recall.
- (−) Still reserves ~40px for toolbar in non-fullscreen.

---

#### Option B — Collapsible Header with Gesture Support

**Concept:** In fullscreen mode, hide both the app header (64px) AND the note toolbar entirely. Replace them with a transparent floating action area: a row of pill-shaped chips that auto-hide after 2s of inactivity and reappear on any touch/scroll-up. A persistent swipe-down gesture from the top edge summons the full toolbar as a temporary sheet overlay.

**Wireframe (fullscreen — controls visible):**
```
┌──────────────────────────────────┐
│ safe-area (notch)                │
│  [← Back]  [Topics]  [⋮ More]   │  ← floating chips, 36px, translucent bg
│ ▓▓▓▓░░░░░░░░░░░  (progress 3px) │
│                                  │
│   Note content — edge-to-edge    │
│                                  │
│                    [↑ scroll-top] │
└──────────────────────────────────┘
```

**Wireframe (fullscreen — controls auto-hidden):**
```
┌──────────────────────────────────┐
│ safe-area (notch)                │
│                                  │
│   Note content — truly full      │
│   viewport (100dvh)              │
│                                  │
│                    [↑ scroll-top] │
└──────────────────────────────────┘
```

**Chrome details:**
- App header hidden via `display: none` on `body.note-immersive` class (applied to `<html>` or `#root`).
- Floating chip bar: `position: fixed; top: env(safe-area-inset-top); left/right: var(--space-3)`.
- Chips: `backdrop-filter: blur(16px); background: color-mix(in srgb, var(--color-surface) 75%, transparent)`.
- Auto-hide: fade + translateY(-8px) after 2s idle. Cancel on touch.
- Swipe-down from top 20px: opens full toolbar as a sheet (`.note-toolbar-sheet`) with all controls.
- Read progress bar becomes a 3px fixed bar at very top of viewport (above safe-area if possible; below if not).

**Rationale:** Maximum content real estate. Eliminates all persistent chrome. Best for long-form reading sessions.

**Trade-offs:**
- (+) Maximum content area — gains ~160px over current state.
- (+) Gesture-based reveal feels native on mobile.
- (−) Hiding the app header requires coordination with `App.jsx` / layout components.
- (−) Discoverability risk: new users may not know how to access controls.
- (−) Swipe-down gesture may conflict with browser pull-to-refresh on some Android browsers.

---

#### Option C — Bottom Toolbar with Reading Focus Mode

**Concept:** Move all note controls to a bottom toolbar (following native mobile app patterns like Safari/Chrome address bar). The top of the screen has zero chrome except the progress bar. In fullscreen mode, the bottom bar auto-hides and a floating "..." button in the bottom-right corner provides access.

**Wireframe (normal mode):**
```
┌──────────────────────────────────┐
│ ▓▓░░░░░░░░░░  (progress 3px)    │
│                                  │
│   Note content starts immediately│
│   below safe-area                │
│                                  │
│                                  │
├──────────────────────────────────┤
│ [←] [Topics] [📖Read] [🧠] [⛶] │  ← bottom bar, 52px + safe-area-bottom
└──────────────────────────────────┘
```

**Wireframe (fullscreen — bottom bar hidden):**
```
┌──────────────────────────────────┐
│ ▓▓▓░░░░░░░░░░  (progress 3px)   │
│                                  │
│   Note content — full viewport   │
│                                  │
│                                  │
│                        [⋯]      │  ← floating 44px circle, bottom-right
└──────────────────────────────────┘
```

**Chrome details:**
- Bottom bar: `position: sticky; bottom: 0` with `env(safe-area-inset-bottom)` padding.
- Same icon-only buttons; overflow for rarely-used actions.
- In fullscreen: bottom bar hides; single floating action button (FAB) replaces it.
- FAB tap opens a radial or vertical quick-action menu (Back, Topics, Read status, Recall).
- Subtopic title is shown inline as the first element inside `.note-scroll-area` (a subtle text line above the first block), not in a toolbar.

**Rationale:** Follows iOS/Android native patterns where the bottom edge is the primary interaction zone. Thumb-friendly. Content starts at the very top of the viewport.

**Trade-offs:**
- (+) Content visible immediately without scrolling past toolbar.
- (+) Thumb-reachable controls (Fitts's law advantage on tall phones).
- (+) Title-as-content is contextually better than title-in-toolbar.
- (−) Significant layout restructure (toolbar moves from top to bottom).
- (−) May conflict with iOS Safari bottom bar / Android gesture navigation.
- (−) Bottom bar obscures last line of content unless padding-bottom is added.

---

### DR-2: Fullscreen Toggle Button Specification

#### Placement
- **Normal mode (non-fullscreen):** The fullscreen toggle appears as the last icon button in the toolbar's right section. On phone layout (≤599px), it occupies one cell in the 4-column grid.
- **Fullscreen mode:** If toolbar auto-hides, the toggle must be reachable either (a) within the auto-revealed toolbar, or (b) as part of a persistent FAB / floating element that is always tappable.

#### Iconography
- **Enter fullscreen:** `Maximize2` (Lucide) — two outward-facing arrows. Fallback: Unicode `⛶` (U+26F6).
- **Exit fullscreen:** `Minimize2` (Lucide) — two inward-facing arrows. Fallback: Unicode `⤓` or custom SVG.
- Icon size: 20px on desktop, 22px on phone.
- The icon must visually change between states to provide immediate feedback.

#### Button Markup & Accessibility
```jsx
<button
  ref={fullscreenButtonRef}
  className={`btn btn-sm note-fullscreen-btn ${fullscreenActive ? 'note-fullscreen-btn--active' : ''}`}
  onClick={toggleFullscreen}
  aria-label={fullscreenActive ? 'Exit fullscreen reading mode' : 'Enter fullscreen reading mode'}
  aria-pressed={fullscreenActive}
  title={fullscreenActive ? 'Exit fullscreen (Esc)' : 'Fullscreen reading mode'}
>
  {fullscreenActive ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
  <span className="note-btn-label">
    {fullscreenActive ? 'Exit' : 'Focus'}
  </span>
</button>
```

#### Keyboard & Screen Reader Support
- `aria-pressed="true|false"` reflects current state.
- `aria-label` changes dynamically with state.
- `Escape` key exits fullscreen and returns focus to `fullscreenButtonRef`.
- Announce state change to screen readers via a live region: `<div role="status" aria-live="polite" className="sr-only">{announcement}</div>`.
- Tab order: fullscreen button must remain in natural tab order even when toolbar auto-hides. If toolbar is `translateY(-100%)` but still in DOM, ensure `tabIndex` is not `-1`.

---

### DR-3: Interaction Details

#### Entering Fullscreen
1. User taps fullscreen button (or presses `F` key shortcut if implemented).
2. `setFullscreenActive(true)` updates state.
3. `writeFullscreenPreference(true)` persists to localStorage.
4. CSS class `.note-page--fullscreen` applied to root container.
5. `.page-content--note-fullscreen` applied to parent page container (strip padding).
6. App header optionally hidden (Option B) or retained (Options A/C).
7. Toolbar transitions to overlay/auto-hide mode.
8. Announce to screen reader: "Fullscreen reading mode activated. Press Escape to exit."
9. Focus remains on the fullscreen button (no focus trap — content is still scrollable).
10. Read progress bar transitions to fixed-top overlay style.

#### While in Fullscreen
- Scroll down > 48px: toolbar auto-hides with `transform: translateY(-100%); opacity: 0` (300ms ease-out).
- Scroll up (any amount) or tap in top ~60px zone: toolbar reveals with `transform: translateY(0); opacity: 1` (200ms ease-in).
- After 2s of no scroll activity with toolbar visible: toolbar auto-hides again.
- Opening any sheet/modal (Topics, Contents, Recall, Study Tools) pauses auto-hide timer.
- Closing a sheet/modal resumes auto-hide timer.
- Navigating to next/previous subtopic: fullscreen state persists (it is a preference, not per-note state).

#### Exiting Fullscreen
1. User taps fullscreen button again, or presses `Escape`.
2. `setFullscreenActive(false)` updates state.
3. `writeFullscreenPreference(false)` persists.
4. CSS classes removed; toolbar returns to sticky normal mode.
5. Announce: "Exited fullscreen reading mode."
6. Focus moves to fullscreen button.
7. Scroll position preserved — no jump.

---

### DR-4: State Persistence

| Aspect | Behaviour |
|--------|-----------|
| **Across navigation** (next/prev subtopic) | Fullscreen stays active; it is a user preference, not per-note state. |
| **Browser refresh** | Restored from `localStorage` key `LT_NOTE_FULLSCREEN`. |
| **Leaving NotePage** (e.g., navigate to Chapters) | Fullscreen preference retained but not visually applied outside NotePage. |
| **Re-entering NotePage** | Fullscreen auto-activates if preference is `true` and viewport is phone-sized. |
| **Viewport resize** (rotate device, connect to external display) | `mobileFullscreenActive = fullscreenActive && isPhoneLayout` — fullscreen deactivates visually on larger viewports but preference is not cleared. |

---

### DR-5: Cross-Platform Considerations

#### iOS Safari
- `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` must be respected for notch and home indicator.
- iOS Safari's pull-to-refresh should not conflict with toolbar reveal gesture. Mitigate by using `overscroll-behavior-y: contain` on `.note-scroll-area`.
- Test with both Safari standalone (PWA) and in-browser modes — safe areas differ.
- `100dvh` is used (not `100vh`) to handle Safari's dynamic toolbar.

#### Android Chrome
- Android's gesture navigation bar (bottom) can overlap content. Use `env(safe-area-inset-bottom)` padding.
- `overscroll-behavior-y: none` on scroll container in fullscreen prevents Chrome's pull-to-refresh.
- Android Chrome's address bar auto-hides on scroll, changing viewport height dynamically. Using `100dvh` handles this correctly.
- Test on both Android Chrome and Samsung Internet.

#### PWA (Standalone)
- In standalone PWA mode (`display: standalone` in manifest), the browser chrome is already absent. Fullscreen mode primarily hides the app's own header/toolbar.
- Status bar colour can be controlled via `<meta name="theme-color">` — consider setting it to match the note background in fullscreen for a more immersive feel.

---

### DR-6: Responsive Behaviour Across Breakpoints

| Breakpoint | Fullscreen Behaviour |
|------------|---------------------|
| **≤599px (phone)** | Full implementation: auto-hide toolbar, edge-to-edge content, progress overlay, optional header hiding. |
| **600–899px (tablet portrait)** | Partial: toolbar condenses to single row; fullscreen toggle available but auto-hide is optional (toolbar stays sticky). No app header hiding. |
| **≥900px (desktop/tablet landscape)** | Fullscreen toggle hidden. Desktop layout with ToC sidebar + Recall panel handles space well. No need for immersive mode. |

---

## Technical Specifications

### Components Requiring Changes

| Component / File | Changes Required |
|------------------|------------------|
| `src/pages/NotePage.jsx` | Refactor toolbar into subcomponents (`NoteToolbarNormal`, `NoteToolbarFullscreen` or conditional rendering). Add overflow menu. Wire gesture detection for Option B. Update auto-hide logic. Add live-region announcements. |
| `src/pages/NotePage.css` | New styles for condensed toolbar (Option A), floating chips (Option B), or bottom bar (Option C). Refine `.note-toolbar--overlay` transitions. Adjust `padding-top` in fullscreen to match new toolbar height. Add edge-indicator styles. |
| `src/components/layout/Header.jsx` | (Option B only) Accept a `hidden` prop or respond to a CSS class on `<html>` to hide itself. |
| `src/components/layout/Layout.css` | (Option B only) `.app-header--hidden { display: none; height: 0; }` |
| `src/App.jsx` | (Option B only) Pass `isNoteFullscreen` context to Header. |
| `src/hooks/useNoteReadStatus.js` | No changes needed. |
| `src/components/notes/NoteBlockRenderer.jsx` | No changes needed. |
| `src/components/notes/NoteBlockRenderer.css` | Minor: review `.nb-root` padding in fullscreen to ensure edge-to-edge but readable margins (min 12px inline padding). |

### Subcomponents to Hide or Collapse in Fullscreen

| Element | Normal Mode | Fullscreen |
|---------|-------------|------------|
| App Header (`.app-header`) | Visible (64px) | Hidden (Option B) or visible (Options A/C) |
| Subject badge (`.note-toolbar-subject-badge`) | Visible | Hidden |
| Unit badge (`.note-toolbar-unit-badge`) | Already hidden ≤900px | Hidden |
| Subtopic title (`.note-toolbar-title`) | Full row | Collapsed into chip or inline |
| Button labels (`.note-btn-label`) | Already hidden on phone | Hidden |
| Read Progress Bar (`.note-read-progress`) | Below toolbar, 3px | Fixed at viewport top, 3px |
| Note body margin (`.note-body`) | 8px | 0px |
| Scroll area border/radius | 1px border, 16px radius | None |
| Study tools inline | Hidden on phone (in sheet) | No change |
| Footer nav (next subtopic) | Visible | Visible (stays in content flow) |

### CSS Changes

```css
/* === Condensed single-row toolbar (Option A) === */
@media (max-width: 599px) {
  .note-toolbar--condensed {
    flex-direction: row;          /* single line */
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    min-height: 40px;             /* down from ~92px */
  }

  .note-toolbar--condensed .note-toolbar-left {
    flex: 1;
    min-width: 0;
  }

  .note-toolbar--condensed .note-toolbar-right {
    display: flex;                /* not grid */
    flex-direction: row;
    gap: var(--space-1);
    width: auto;                  /* shrink-to-fit */
  }

  .note-toolbar--condensed .note-toolbar-right .btn-sm {
    width: 36px;
    height: 36px;
    min-height: 36px;
    padding: 0;
    flex-shrink: 0;
  }
}

/* === Fullscreen overlay toolbar === */
.note-toolbar--overlay {
  position: fixed;
  top: env(safe-area-inset-top, 0px);
  left: var(--space-3);
  right: var(--space-3);
  z-index: var(--z-popover);
  border-radius: 16px;
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}

.note-overlay-controls--hidden {
  transform: translateY(calc(-100% - 12px));
  opacity: 0;
  pointer-events: none;
}

.note-overlay-controls--visible {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

/* === Edge indicator when toolbar is hidden === */
.note-toolbar-hint {
  position: fixed;
  top: env(safe-area-inset-top, 0px);
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: var(--color-primary);
  opacity: 0.5;
  z-index: var(--z-popover);
  pointer-events: none;
  transition: opacity 0.3s;
}

/* === Fullscreen content area === */
.note-page--fullscreen .note-body {
  margin: 0;
  padding-top: 0;    /* reduced from 124px — toolbar overlay floats above */
  padding-bottom: env(safe-area-inset-bottom);
}

.note-page--fullscreen .note-scroll-area {
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding-top: calc(env(safe-area-inset-top, 0px) + 48px); /* just enough for floating toolbar */
}

/* === Overflow-aware padding so content isn't under toolbar === */
.note-page--fullscreen .nb-root {
  padding-top: var(--space-4);  /* 16px, toolbar floats above with its own space */
}
```

### JS / React Changes

```jsx
// 1. Overflow menu state
const [overflowMenuOpen, setOverflowMenuOpen] = useState(false);

// 2. Group toolbar buttons
const primaryActions = [/* Mark-as-Read, Topics, Back */];
const overflowActions = [/* Contents, Recall, Study Tools, Fullscreen */];

// 3. Improved auto-hide with scroll direction detection
const handleScroll = useCallback(() => {
  const el = scrollRef.current;
  if (!el) return;
  const currentTop = el.scrollTop;
  const scrollingDown = currentTop - lastScrollTopRef.current > 0;
  const delta = Math.abs(currentTop - lastScrollTopRef.current);
  lastScrollTopRef.current = currentTop;

  if (mobileFullscreenActive) {
    if (scrollingDown && delta > 8) {
      setMobileChromeHidden(true);
      clearTimeout(chromeRevealTimeoutRef.current);
    } else if (!scrollingDown && delta > 4) {
      setMobileChromeHidden(false);
      restartAutoHideTimer();
    }
  }

  // Update scroll percentage
  const pct = (currentTop / (el.scrollHeight - el.clientHeight)) * 100;
  setScrollPct(Math.min(100, Math.max(0, pct)));
}, [mobileFullscreenActive]);

// 4. Screen reader announcement
const [srAnnouncement, setSrAnnouncement] = useState('');

const toggleFullscreen = useCallback(() => {
  const next = !fullscreenActive;
  setFullscreenActive(next);
  writeFullscreenPreference(next);
  setSrAnnouncement(
    next
      ? 'Fullscreen reading mode activated. Press Escape to exit.'
      : 'Exited fullscreen reading mode.'
  );
}, [fullscreenActive]);

// In JSX:
// <div role="status" aria-live="polite" className="sr-only">{srAnnouncement}</div>

// 5. Escape key handler (already exists, ensure it works)
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && fullscreenActive) {
      e.preventDefault();
      toggleFullscreen();
      fullscreenButtonRef.current?.focus();
    }
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [fullscreenActive, toggleFullscreen]);
```

### Prop / API Adjustments

| Prop / Interface | Current | Proposed |
|------------------|---------|----------|
| `NoteBlockRenderer` | `blocks` prop only | No change needed |
| `RecallPanel` | `isMobileModal` boolean | No change; fullscreen doesn't affect recall — it's already a full-screen modal on phone |
| `Header` (Option B only) | No visibility prop | Add `hidden` prop or use CSS class from context |
| `App.jsx` page container | Adds `.page-content--note-fullscreen` via DOM manipulation | Refactor: pass `isNoteFullscreen` via context or lift state. Avoid direct DOM class manipulation. |

---

## Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Colour contrast** | All toolbar icons/text must meet WCAG 2.1 AA (4.5:1 for text, 3:1 for UI components) in both light and dark themes. Translucent backgrounds in fullscreen must still provide sufficient contrast — test with content scrolled underneath. |
| **ARIA roles** | Fullscreen button: `role="button"`, `aria-pressed`, `aria-label`. Overflow menu: `role="menu"` with `role="menuitem"` children. Sheets/modals: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`. |
| **Focus management** | Entering fullscreen: focus stays on toggle button. Opening a sheet: focus moves to sheet's first focusable element. Closing a sheet: focus returns to the trigger button (use refs). Escape closes the topmost layer (sheet > fullscreen). |
| **Focus trapping** | Not required for fullscreen mode itself (content remains interactive). Required for modal sheets (Topics, Contents, Recall, Study Tools) — trap focus within the sheet while open. |
| **Reduced motion** | Wrap all transitions/animations in `@media (prefers-reduced-motion: no-preference) { ... }`. When reduced motion is preferred, use instant show/hide (`opacity` only, no `transform`). |
| **Screen reader** | Live region announces fullscreen toggle. Hidden toolbar in fullscreen must remain in the accessibility tree (use `visibility: hidden` + `height: 0`, not `display: none`, or keep in DOM with `aria-hidden="false"`). |
| **Touch targets** | All interactive elements: minimum 44×44px (WCAG 2.5.8). In condensed toolbar, 36px buttons require 8px gaps to meet the 44px effective target area. |

---

## Performance Considerations

| Concern | Mitigation |
|---------|------------|
| **Auto-hide scroll listener** | Throttle or use `requestAnimationFrame` for scroll handler. Current implementation should be checked for debounce overhead. |
| **CSS transitions** | Use `transform` and `opacity` only (composited properties). Avoid animating `height`, `top`, `padding`. Current `.note-overlay-controls` uses `transform` — correct. |
| **DOM manipulation** | Refactor `page-content--note-fullscreen` class toggle from direct DOM manipulation (`mainContent.classList.toggle(...)`) to React state/context. Direct DOM manipulation can cause hydration issues and bypasses React's reconciliation. |
| **Layout shift** | Entering/exiting fullscreen should not cause visible content jump. Use `scroll-padding-top` or `scrollTo` correction to maintain visual scroll position. |
| **Bundle size** | No new dependencies required. Lucide icons (`Maximize2`, `Minimize2`) are already imported. |
| **Load time impact** | Zero — all changes are CSS and state logic within the already-lazy-loaded NotePage component. |

---

## Deliverables

### D-1: Wireframes / Mock Descriptions
- Provided above for Options A, B, C (ASCII wireframes).
- For each option: normal mode + fullscreen mode + toolbar-hidden state.
- Platform-specific mocks: one showing iOS safe areas, one showing Android navigation bar.

### D-2: Component Changes Specification
- Table of components and their modifications (provided above).
- Diff-level description of CSS and JSX changes (provided above).

### D-3: Implementation Code
- Updated `NotePage.jsx` with chosen option.
- Updated `NotePage.css` with all new styles.
- Updated `Header.jsx` if Option B is chosen.
- Accessibility live region added.
- Overflow menu component (if applicable).

### D-4: Validation Plan
See acceptance criteria below.

---

## Acceptance Criteria & Success Metrics

### Functional Acceptance Criteria

| # | Criterion | How to Verify |
|---|-----------|---------------|
| AC-1 | Fullscreen toggle button is visible on phone layout (≤599px) and hidden on desktop (≥900px). | Manual test on 375px and 1440px viewports. |
| AC-2 | Tapping fullscreen toggle enters fullscreen; tapping again or pressing Escape exits. | Manual test + automated Playwright test. |
| AC-3 | In fullscreen, toolbar auto-hides on scroll-down and reveals on scroll-up. | Manual test on real device. |
| AC-4 | Fullscreen preference persists across page navigation (next/prev subtopic). | Navigate between 3 subtopics; verify fullscreen stays active. |
| AC-5 | Fullscreen preference persists across browser refresh. | Activate fullscreen → refresh → verify restored. |
| AC-6 | All modal sheets (Topics, Contents, Recall, Study Tools) open correctly in fullscreen. | Open each; verify z-index stacking and focus management. |
| AC-7 | Escape key closes topmost layer: sheet first, then fullscreen. | Open Contents in fullscreen → Escape closes sheet → Escape exits fullscreen. |
| AC-8 | Screen reader announces fullscreen state changes. | Test with VoiceOver (iOS/macOS) and TalkBack (Android). |
| AC-9 | No content jump when entering/exiting fullscreen. | Video-record transition; verify no visible scroll-position shift. |
| AC-10 | iOS safe areas respected (notch + home indicator). | Test on iPhone 15 Pro simulator and real device. |
| AC-11 | Android gesture navigation bar does not overlap content. | Test on Pixel 7 emulator. |
| AC-12 | All toolbar buttons remain reachable in fullscreen via keyboard tab. | Tab through all controls in fullscreen mode. |

### Measurable Success Metrics

| Metric | Current Baseline | Target | How to Measure |
|--------|-----------------|--------|----------------|
| **Vertical space for content (normal mode, 667px viewport)** | ~487px (27% chrome) | **≥540px** (~19% chrome, **+11% improvement**) | Measure `.note-scroll-area` clientHeight on iPhone SE simulator. |
| **Vertical space for content (fullscreen, 667px viewport)** | ~545px (toolbar overlay + header) | **≥620px** (~93% of viewport, **+14% improvement**) | Same measurement method in fullscreen. |
| **Number of taps to reach any control from fullscreen** | 1–2 (auto-reveal + tap) | **≤2 taps** for any action | Task analysis. |
| **Time to first meaningful content pixel** | Scroll past ~180px of chrome | **≤60px** in fullscreen | Visual inspection. |
| **Lighthouse Accessibility score** | Current baseline | **≥95** (no regression) | `npx lighthouse` audit on mobile preset. |
| **Layout Shift (CLS)** | Current baseline | **No increase** | Chrome DevTools Performance panel. |
| **Interaction to Next Paint (INP)** | Current baseline | **No increase** (fullscreen toggle <100ms) | Chrome DevTools. |

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **iOS pull-to-refresh conflict** with toolbar reveal gesture | Medium | Medium | Use `overscroll-behavior-y: contain` on scroll container. Test on real iOS devices. |
| **Android browser compatibility** — Samsung Internet handles `100dvh` differently | Low | Medium | Test on Samsung Internet. Fallback: `100vh` with JS viewport height correction. |
| **Hiding app header (Option B) breaks navigation** — users can't access sidebar | Medium | High | Always provide a "Back" button in the floating chip bar. Offer swipe-from-left-edge to open sidebar as fallback. |
| **Auto-hide timer causes "toolbar flickering"** on slow scrolling | Medium | Low | Increase scroll-direction delta threshold to 12px. Add hysteresis: require 3 consecutive same-direction scroll events before hiding/showing. |
| **Overflow menu reduces feature discoverability** | Medium | Medium | Add a one-time tooltip or coach mark on first use. Track overflow menu open rate in analytics. |
| **Breaking existing toolbar layouts** on edge-case viewport sizes (600–650px) | Low | Medium | Thorough testing at 599px, 600px, 601px boundaries. Use `useViewportMatch` (already in codebase) for clean breakpoints. |
| **a11y regressions** — hiding toolbar from visual viewport while keeping in a11y tree | Low | High | Automated axe-core scan on every PR. Manual screen reader testing for fullscreen transitions. |

---

## Dependencies

| Dependency | Type | Notes |
|-----------|------|-------|
| Lucide React (`Maximize2`, `Minimize2`) | Already installed | No new dependency. |
| `localStorage` | Browser API | Already used for fullscreen preference. |
| `env(safe-area-inset-*)` | CSS | Already used in codebase. |
| `100dvh` | CSS | Already used; requires modern browser. Fallback not needed (target audience uses modern mobile browsers). |
| `overscroll-behavior` | CSS | Widely supported (caniuse 96%+). |
| `@media (prefers-reduced-motion)` | CSS | Already supported by design system. |
| No new npm packages required | — | — |

---

## Implementation Timeline (Rough Estimate)

| Phase | Scope | Estimate |
|-------|-------|----------|
| **Phase 1: Condensed toolbar** | Regroup buttons into single-row + overflow menu. Reduce toolbar from ~92px to ~40px. Apply to non-fullscreen phone layout. | Small |
| **Phase 2: Fullscreen refinement** | Improve auto-hide logic (hysteresis, delta thresholds). Add edge indicator. Fix padding-top calculation. Add live-region announcements. | Small–Medium |
| **Phase 3: Chosen option implementation** | Implement the selected design option (A, B, or C) end-to-end. | Medium |
| **Phase 4: Cross-platform testing** | Test on iOS Safari, Android Chrome, Samsung Internet, PWA standalone. Fix safe-area and gesture conflicts. | Small |
| **Phase 5: Accessibility audit** | Screen reader testing (VoiceOver, TalkBack). Keyboard navigation. Contrast verification. axe-core automated scan. | Small |

---

## Recommended Approach

**Option A (Condensed Sticky Toolbar + Hide-on-Scroll)** is recommended as the primary implementation for the following reasons:

1. **Lowest risk** — builds incrementally on existing code; no need to hide the app header or restructure layout.
2. **Largest bang for the buck** — condensing the toolbar from ~92px to ~40px immediately reclaims ~52px in normal mode, and the improved auto-hide provides near-full-viewport reading in fullscreen.
3. **Familiar UX pattern** — sticky header + hide-on-scroll is used by virtually every modern reading app (Medium, Notion, Apple News).
4. **Reversible** — if user feedback is negative, the overflow menu can be expanded back to the grid layout without architectural changes.

Option B elements (floating chips, gesture reveal) can be adopted later as an enhancement on top of Option A's foundation. Option C (bottom bar) is a larger architectural change best saved for a future redesign if user research supports it.
