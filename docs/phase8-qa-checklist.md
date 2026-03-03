# Phase 8 Hardening QA Checklist

## PWA
- Load app online and confirm `PWA Status -> Service Worker` becomes `Active`.
- Reload app, then switch network offline and navigate between previously visited routes.
- Confirm `PWA Status -> Connection` updates to `Offline` and cached routes still open.
- Change service worker version and confirm update state shows `Update Ready` before refresh.

## Print
- Open print preview on `/advanced`, `/progress`, `/teacher`, and `/chapters/:chapterId`.
- Confirm navigation/sidebar/buttons are hidden in print output.
- Confirm cards and tables do not clip content across page breaks.
- Confirm any `.print-only` notes are visible only in print output.

## Draft Auto-Save
- Type long text in Advanced draft box and pause for 2+ seconds.
- Confirm save status updates to `Saved at ...`.
- Refresh page and verify draft text is restored.
- Exceed storage intentionally (if possible) and confirm visible save error state.

## Upload
- Upload valid image and PDF files; confirm previews and metadata render.
- Attempt invalid file type and confirm rejection reason is displayed.
- Attempt duplicate upload and confirm duplicate rejection appears.
- Attempt more than 5 files and confirm max-count rejection.
- Keyboard test: focus upload zone and press `Enter`/`Space` to open file picker.
