/**
 * useFocusTrap — WCAG 2.1 AA focus-trap hook (no external dependencies).
 *
 * Usage:
 *   const trapRef = useRef(null);
 *   useFocusTrap(trapRef);              // always active
 *   useFocusTrap(trapRef, isOpen);      // only active when isOpen === true
 *
 * Behaviour:
 *  - On activation: focuses the first focusable descendant (or the container).
 *  - Tab / Shift+Tab cycles within the container; focus never escapes.
 *  - On deactivation: returns focus to the element that was focused before activation.
 */

import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR = [
    'a[href]:not([tabindex="-1"])',
    'button:not([disabled]):not([tabindex="-1"])',
    'input:not([disabled]):not([tabindex="-1"])',
    'select:not([disabled]):not([tabindex="-1"])',
    'textarea:not([disabled]):not([tabindex="-1"])',
    '[tabindex]:not([tabindex="-1"])',
    'details > summary:not([tabindex="-1"])',
].join(', ');

/**
 * @param {React.RefObject<HTMLElement>} containerRef - ref to the modal / dialog container
 * @param {boolean} [active=true] - whether the trap is currently active
 * @param {HTMLElement | null} [returnFocusEl=null] - explicit element to return focus to on close
 */
export default function useFocusTrap(containerRef, active = true, returnFocusEl = null) {
    // Remember what had focus before the trap was activated
    const previousFocusRef = useRef(null);
    const activationSeqRef = useRef(0);

    useEffect(() => {
        if (!active) return;
        const container = containerRef.current;
        if (!container) return;
        activationSeqRef.current += 1;
        const activationSeq = activationSeqRef.current;

        // Capture the previously focused element before we steal focus
        const activeElement = document.activeElement;
        if (!container.contains(activeElement)) {
            previousFocusRef.current = activeElement;
        }

        // Focus the first focusable element inside the container, or the container itself
        const focusable = Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
        const firstFocusable = focusable[0];
        if (firstFocusable) {
            firstFocusable.focus();
        } else {
            // Fall back to the container itself if no focusable children exist yet
            container.setAttribute('tabindex', '-1');
            container.focus();
        }

        const handleKeyDown = (e) => {
            if (e.key !== 'Tab') return;

            // Re-query on every Tab press so newly rendered elements are included
            const focusableEls = Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
            if (!focusableEls.length) return;

            const first = focusableEls[0];
            const last = focusableEls[focusableEls.length - 1];

            if (e.shiftKey) {
                // Shift+Tab: if on first element, wrap to last
                if (document.activeElement === first || document.activeElement === container) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                // Tab: if on last element, wrap to first
                if (document.activeElement === last || document.activeElement === container) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        // Listen on the document so we catch all Tab events regardless of focus position
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            // Restore focus to the element that was focused before the trap opened
            const prev = previousFocusRef.current;
            const restoreTarget = returnFocusEl && typeof returnFocusEl.focus === 'function'
                ? returnFocusEl
                : prev;
            if (restoreTarget && typeof restoreTarget.focus === 'function') {
                // requestAnimationFrame defers until the modal has unmounted,
                // preventing a race where focus is stolen back immediately
                requestAnimationFrame(() => {
                    // In React StrictMode, effects mount-cleanup-remount in dev.
                    // Skip restoring focus if a newer activation already occurred.
                    if (activationSeqRef.current !== activationSeq) return;
                    restoreTarget.focus();
                    previousFocusRef.current = null;
                });
            }
        };
    }, [containerRef, active, returnFocusEl]);
}
