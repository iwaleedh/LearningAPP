import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';

const DISMISS_THRESHOLD = 96;

function getFocusableElements(container) {
  if (!container) return [];

  return Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter((element) => {
    if (!(element instanceof HTMLElement)) return false;
    if (element.hidden) return false;
    if (element.getAttribute('aria-hidden') === 'true') return false;
    return element.offsetParent !== null || element === document.activeElement;
  });
}

export default function MobileSheetPortal({
  open = true,
  onClose,
  children,
  backdropClassName,
  sheetClassName,
  ariaLabel,
  showHandle = true,
}) {
  const sheetRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);
  const pointerIdRef = useRef(null);
  const dragStartYRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!open || typeof document === 'undefined') return undefined;

    previouslyFocusedElementRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    const frameId = window.requestAnimationFrame(() => {
      const sheet = sheetRef.current;
      if (!sheet) return;

      const [firstFocusable] = getFocusableElements(sheet);
      (firstFocusable ?? sheet).focus();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      const previousElement = previouslyFocusedElementRef.current;
      if (previousElement && document.contains(previousElement)) {
        previousElement.focus();
      }
      previouslyFocusedElementRef.current = null;
    };
  }, [open]);

  useEffect(() => {
    if (!open || typeof document === 'undefined') return undefined;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyOverscroll = body.style.overscrollBehavior;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.overscrollBehavior = 'none';

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.overscrollBehavior = previousBodyOverscroll;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      const sheet = sheetRef.current;
      if (!sheet) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onClose?.();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements(sheet);
      if (focusableElements.length === 0) {
        event.preventDefault();
        sheet.focus();
        return;
      }

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === firstFocusable || activeElement === sheet)) {
        event.preventDefault();
        lastFocusable.focus();
        return;
      }

      if (!event.shiftKey && activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!isDragging) return undefined;

    const handlePointerMove = (event) => {
      if (event.pointerId !== pointerIdRef.current) return;
      const nextOffset = Math.max(0, event.clientY - dragStartYRef.current);
      dragOffsetRef.current = nextOffset;
      setOffsetY(nextOffset);
    };

    const handlePointerEnd = (event) => {
      if (event.pointerId !== pointerIdRef.current) return;
      const shouldDismiss = dragOffsetRef.current >= DISMISS_THRESHOLD;

      pointerIdRef.current = null;
      dragOffsetRef.current = 0;
      setIsDragging(false);
      setOffsetY(0);

      if (shouldDismiss) {
        onClose?.();
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerEnd);
    window.addEventListener('pointercancel', handlePointerEnd);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerEnd);
      window.removeEventListener('pointercancel', handlePointerEnd);
    };
  }, [isDragging, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className={backdropClassName}
      onClick={() => onClose?.()}
    >
      <div
        ref={sheetRef}
        className={`${sheetClassName}${isDragging ? ' is-dragging' : ''}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        style={{
          transform: offsetY > 0 ? `translateY(${offsetY}px)` : undefined,
          transition: isDragging ? 'none' : 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {showHandle && (
          <div
            className="lc-mobile-sheet-handle"
            onPointerDown={(event) => {
              if (event.button !== undefined && event.button !== 0) return;
              pointerIdRef.current = event.pointerId;
              dragStartYRef.current = event.clientY - dragOffsetRef.current;
              setIsDragging(true);
              event.currentTarget.setPointerCapture?.(event.pointerId);
            }}
          />
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}