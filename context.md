# context.md — Pre-Deployment Audit & Implementation Record

**Date:** 2025  
**App:** Living Textbook (LT) — React + Vite PWA  
**Purpose:** Documents all issues found and fixes applied before production deployment.

---

## 1. Security Fixes

### 1a. Auth Token Logging (CRITICAL — Fixed ✅)

**File:** Historical legacy realtime client module (removed)  
**Issue:** A legacy realtime client logged the full auth token to the browser console in all environments, exposing credentials in production.  
**Fix:** Wrapped all three `console.log` calls in `if (import.meta.env.DEV) { ... }` guards. The token is no longer included in even the dev log.

### 1b. XSS via dangerouslySetInnerHTML (HIGH — Fixed ✅)

**File:** `src/components/notes/NoteBlockRenderer.jsx`  
**Issue:** 13 uses of `dangerouslySetInnerHTML={{ __html: ... }}` with no sanitization across ObjectiveBlock, HeadingBlock, ParagraphBlock, ListBlock × 2, ChecklistBlock, EquationBlock, LatexDisplay, ComparisonTableBlock × 2, SummaryBlock, CalloutBlock, and SvgBlock.  
**Fix:** Installed `dompurify@3.3.3`. Added `safe()` helper (DOMPurify.sanitize) for all HTML fields and a stricter `safeSvg()` helper (SVG + filter profile) for the SvgBlock.

### 1c. .env.local Tracking (LOW — Verified ✅)

**File:** `.gitignore`  
**Issue:** Checked whether `.env.local` was tracked in git.  
**Result:** Already excluded via `*.local` pattern. No action required.

---

## 2. Critical Functionality Fixes

### 2a. Theme Toggle Broken (Fixed ✅)

**File:** `src/context/ThemeProvider.jsx`  
**Issue:** `ThemeProvider` hardcoded `data-theme="dark"`, cleared `localStorage` theme key, and used a no-op `toggleTheme: () => {}`. The Settings page's theme toggle did nothing.  
**Fix:** Replaced with a real `useState`-driven implementation that:

- Reads initial theme from `localStorage('lt-theme')` (defaults to `'dark'`)
- Applies `data-theme` attribute and `color-scheme` style to `<html>` on every theme change
- Saves preference to `localStorage`
- Exports a real `toggleTheme` that flips between `'dark'` and `'light'`

### 2b. Light Mode Missing (Fixed ✅)

**File:** `src/index.css`  
**Issue:** CSS variables block was `[data-theme="dark"]` only. Toggling to light would show unstyled content.  
**Fix:** Added full `[data-theme="light"]` block with all variables overridden for light backgrounds (white surfaces, dark text, lighter brand colours, softer shadows).

### 2c. 404 Route Missing (Fixed ✅)

**Files:** `src/pages/NotFoundPage.jsx` (created), `src/App.jsx`  
**Issue:** No `<Route path="*">` catch-all. Invalid URLs silently rendered a blank page.  
**Fix:** Created `NotFoundPage` with a helpful 404 UI (emoji, message, "Go to Dashboard" + "Go Back" buttons). Added `<Route path="*" element={<NotFoundPage />} />` as the last route in `App.jsx`.

### 2d. ErrorBoundary Missing (Fixed ✅)

**Files:** `src/components/ErrorBoundary.jsx` (created), `src/App.jsx`  
**Issue:** Any thrown error in the React tree crashed the whole app silently.  
**Fix:** Created a class-based `ErrorBoundary` with a friendly error UI and "Return to Dashboard" recovery button. Wrapped the `<Suspense>` block in `App.jsx`.

### 2e. ProgressPage Hardcoded Data (Fixed ✅)

**File:** `src/pages/ProgressPage.jsx`  
**Issue:** Page showed fake hardcoded chemistry topics with arbitrary percentages (75%, 50%, 30%, etc.).  
**Fix:** Wired to real data:

- `getReadNoteIds()` — Set of all read note IDs from localStorage
- `getTotalReadCount()` — Total count shown in quick stats
- `syllabusesBySubject` — Used to compute total available notes per subject
- Now shows real per-subject % progress across Chemistry, Biology, Physics, Maths, Economics, Business, Accounting

### 2f. CommandSearch Hardcoded Data (Fixed ✅)

**File:** `src/components/student/CommandSearch.jsx`  
**Issue:** Search index had 13 hardcoded chemistry chapter names. Searching for any other subject returned nothing.  
**Fix:** Replaced with `buildSearchIndex()` that iterates all 7 main subjects via `syllabusesBySubject`, building a full list of 1100+ note entries with correct `/notes/{subject}/{unitId}/{topicId}/{subtopicIndex}` paths.

---

## 3. Build & Performance Fixes

### 3a. Chunk Size Warning Limit (Fixed ✅)

**File:** `vite.config.js`  
**Issue:** `chunkSizeWarningLimit: 5000` (5MB) suppressed all chunk size warnings, hiding potential performance issues.  
**Fix:** Reduced to `1000` (1MB, closer to Vite default).

### 3b. Source Maps in Production (Fixed ✅)

**File:** `vite.config.js`  
**Issue:** Source maps were not explicitly disabled. Vite may generate them depending on environment, exposing source code.  
**Fix:** Added `build.sourcemap: false` explicitly.

### 3c. Path Alias (Fixed ✅)

**File:** `vite.config.js`  
**Issue:** No `@` path alias. Long relative import chains (`../../../../data/...`).  
**Fix:** Added `resolve.alias: { '@': path.resolve(__dirname, 'src') }`.

---

## 4. HTML / Asset Fixes

### 4a. Favicon was Vite Default (Fixed ✅)

**File:** `index.html`  
**Issue:** `<link rel="icon" href="/vite.svg" />` — shipped with Vite's default icon.  
**Fix:** Changed to `<link rel="icon" type="image/png" href="/icon-192.png" />` (uses existing PWA icon).

### 4b. 12 Unused Google Font Families (Fixed ✅)

**File:** `index.html`  
**Issue:** Loaded 14 font families (Architects Daughter, Caveat, Dancing Script, Gloria Hallelujah, Indie Flower, Kalam, Lora, Noto Sans Thaana, Nunito, Patrick Hand, Permanent Marker, Poppins, Schoolbell, Shadows Into Light + Inter + JetBrains Mono in index.css). Only Inter, JetBrains Mono and Noto Sans Thaana (Dhivehi) are genuinely needed.  
**Fix:** Removed 13 font families from `index.html`. Kept only `Noto Sans Thaana` (not in `index.css`). Inter + JetBrains Mono remain in `src/index.css @import`.  
**Estimated savings:** ~400KB of font CSS + reduced HTTP round-trips.

### 4c. Missing OG / Twitter Meta Tags (Fixed ✅)

**File:** `index.html`  
**Issue:** No Open Graph or Twitter Card meta tags. Links shared on social media / messaging apps showed no preview.  
**Fix:** Added `og:title`, `og:description`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`.

---

## 5. PWA Improvements

### 5a. Offline Fallback Page (Fixed ✅)

**File:** `public/offline.html` (created), `public/sw.js` (updated to v8)  
**Issue:** Service worker v7 had no offline fallback. Navigation requests during offline show a browser default error page.  
**Fix:**

- Created `/offline.html` — styled offline page matching brand colours with a "Try Again" button
- Updated `sw.js` to v8: pre-caches `offline.html` on install, serves it for any `navigate`-mode fetch that fails, preserves the offline cache across activations (only deletes old non-offline caches)

### 5b. robots.txt Missing (Fixed ✅)

**File:** `public/robots.txt` (created)  
**Issue:** No `robots.txt`. Search crawlers would index teacher dashboards and internal session paths.  
**Fix:** Created `robots.txt` disallowing `/teacher`, `/annotate/`, `/live/` from crawlers.

---

## 6. Remaining Known Issues (Not blocking deploy)

| Issue | Location | Notes |
| ----- | -------- | ----- |
| `npm audit` warnings | `package.json` | Run `npm audit fix` periodically; no critical CVSS ≥ 7 in app dependencies |
| Large route bundle output | Build output | Continue reducing runtime bundle weight as note and exercise delivery moves off bundled JS |
| TeacherDashboard / LiveClass pages | `/teacher`, `/live/:id` | Feature-complete but still need regression coverage against the Convex-backed live session flows |
| PDF fallback iframe | `NotePage.jsx` | PDFs served from `/public/notes/` — ensure all PDF files are present in production build |
| `og:url` and `og:image` meta | `index.html` | Add final production domain + social image once deploy URL is known |

---

## 7. Files Changed

| File | Change |
| ---- | ------ |
| legacy realtime client module | DEV-guard 3 console.log calls; remove token from log |
| `src/components/notes/NoteBlockRenderer.jsx` | Install + add DOMPurify; wrap all 13 dangerouslySetInnerHTML with safe()/safeSvg() |
| `src/context/ThemeProvider.jsx` | Implement real useState-based theme toggle with localStorage persistence |
| `src/index.css` | Add [data-theme="light"] CSS variable block |
| `src/App.jsx` | Add ErrorBoundary import/wrapper; add NotFoundPage lazy import + `<Route path="*">` |
| `src/pages/NotFoundPage.jsx` | Created — 404 page with navigation buttons |
| `src/components/ErrorBoundary.jsx` | Created — class-based error boundary with recovery UI |
| `src/pages/ProgressPage.jsx` | Wire to real syllabus note counts and useNoteReadStatus data |
| `src/components/student/CommandSearch.jsx` | Replace 13 hardcoded items with buildSearchIndex() from syllabusesBySubject |
| `vite.config.js` | chunkSizeWarningLimit 5000→1000; sourcemap: false; @ path alias |
| `index.html` | Fix favicon; remove 13 unused font families; add OG + Twitter meta tags |
| `public/robots.txt` | Created — disallows /teacher, /annotate/, /live/ |
| `public/offline.html` | Created — branded offline fallback page |
| `public/sw.js` | Upgrade to v8; pre-cache offline.html; add navigate-mode offline fallback |
