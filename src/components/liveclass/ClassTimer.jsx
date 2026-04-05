import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Timer, Check } from 'lucide-react';

function fmt(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h}:${String(m % 60).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`;
  return `${String(m).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`;
}

/**
 * Derive the timer's accumulated baseline elapsed time from the authoritative
 * state snapshot. Falls back to legacy elapsedMs-only rows for compatibility.
 */
function getBaseElapsedMs(timerState) {
  const raw = Number(timerState?.accumulatedElapsedMs ?? timerState?.elapsedMs ?? 0);
  return Number.isFinite(raw) ? Math.max(0, raw) : 0;
}

function getAnchorStartedAt(timerState) {
  const raw = Number(timerState?.anchorStartedAt ?? timerState?.startedAt ?? 0);
  return Number.isFinite(raw) && raw > 0 ? raw : null;
}

function computeElapsedMs(timerState, now = Date.now()) {
  const baseElapsedMs = getBaseElapsedMs(timerState);
  const state = timerState?.state ?? 'stopped';
  if (state !== 'running') {
    return baseElapsedMs;
  }

  const anchorStartedAt = getAnchorStartedAt(timerState);
  if (!anchorStartedAt) {
    return baseElapsedMs;
  }

  return baseElapsedMs + Math.max(0, now - anchorStartedAt);
}

function sanitizeTimerSegment(value, max) {
  const digits = value.replace(/\D/g, '').slice(0, 2);
  if (!digits) return '';

  const parsed = Number.parseInt(digits, 10);
  if (!Number.isFinite(parsed)) return '';

  return String(Math.min(parsed, max));
}

/**
 * ClassTimer — shown to all participants.
 * Teachers can set a countdown target (minutes) or use as a stopwatch.
 *
 * @param {{ timerState: object|null, isTeacher: boolean, onUpdate: (update: { state: string, elapsedMs: number, targetMs: number, mode: string, expectedVersion?: number|null }) => void }} props
 */
export default function ClassTimer({ timerState, isTeacher, onUpdate }) {
  const [localElapsed, setLocalElapsed] = useState(0);
  const [inputMin, setInputMin] = useState('');
  const [inputSec, setInputSec] = useState('');
  const rafRef = useRef(null);
  // M-16: guard against rapid-fire mutations while one is in-flight
  const pendingUpdateRef = useRef(false);

  const state  = timerState?.state ?? 'stopped';
  const mode   = timerState?.mode  ?? 'stopwatch';
  const target = timerState ? Number(timerState.targetMs) : 0;
  const version = Number.isFinite(Number(timerState?.version)) ? Number(timerState.version) : null;

  const isStopped = state === 'stopped';
  const isOverdue = mode === 'countdown' && target > 0 && localElapsed >= target;

  // Sync local elapsed from server state when it changes (legitimate derived-state sync)
  const serverElapsed = computeElapsedMs(timerState);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- derived state sync from server
    setLocalElapsed(serverElapsed);
    // M-16: server pushed new state → clear in-flight guard
    pendingUpdateRef.current = false;
  }, [serverElapsed]);

  // Auto-stop when countdown hits zero
  useEffect(() => {
    if (mode === 'countdown' && target > 0 && localElapsed >= target && state === 'running') {
      cancelAnimationFrame(rafRef.current);
      onUpdate?.({
        state: 'stopped',
        elapsedMs: target,
        targetMs: target,
        mode,
        expectedVersion: version,
      });
    }
  }, [localElapsed, mode, onUpdate, state, target, version]);

  useEffect(() => {
    if (state === 'running') {
      function tick() {
        setLocalElapsed(computeElapsedMs(timerState));
        rafRef.current = requestAnimationFrame(tick);
      }
      rafRef.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [state, timerState]);

  const displayMs = mode === 'countdown' && target > 0
    ? Math.max(0, target - localElapsed)
    : localElapsed;

  function handlePlayPause() {
    if (pendingUpdateRef.current) return; // M-16: debounce rapid clicks
    pendingUpdateRef.current = true;
    const newState = state === 'running' ? 'paused' : 'running';
    onUpdate?.({
      state: newState,
      elapsedMs: Math.round(localElapsed),
      targetMs: target,
      mode,
      expectedVersion: version,
    });
  }

  function handleReset() {
    if (pendingUpdateRef.current) return;
    pendingUpdateRef.current = true;
    setLocalElapsed(0);
    onUpdate?.({
      state: 'stopped',
      elapsedMs: 0,
      targetMs: target,
      mode,
      expectedVersion: version,
    });
  }

  function handleSetCountdown(e) {
    e.preventDefault();
    const mins = parseInt(inputMin, 10) || 0;
    const secs = parseInt(inputSec, 10) || 0;
    const totalMs = (mins * 60 + secs) * 1000;
    if (totalMs <= 0) return;
    setLocalElapsed(0);
    setInputMin('');
    setInputSec('');
    onUpdate?.({
      state: 'stopped',
      elapsedMs: 0,
      targetMs: totalMs,
      mode: 'countdown',
      expectedVersion: version,
    });
  }

  function handleSwitchStopwatch() {
    setLocalElapsed(0);
    setInputMin('');
    setInputSec('');
    onUpdate?.({
      state: 'stopped',
      elapsedMs: 0,
      targetMs: 0,
      mode: 'stopwatch',
      expectedVersion: version,
    });
  }

  return (
    <div className={`lc-timer ${isOverdue ? 'lc-timer--overdue' : ''}`}>
      <Timer size={14} />

      {/* Mode badge */}
      {mode === 'countdown' && target > 0 && (
        <span className="lc-timer-mode-badge">countdown</span>
      )}

      <span className="lc-timer-display" aria-live="polite" aria-atomic="true">{fmt(displayMs)}</span>

      {isTeacher && (
        <>
          <button
            className="btn btn-ghost btn-icon btn-sm"
            type="button"
            onClick={handlePlayPause}
            title={state === 'running' ? 'Pause' : 'Start'}
            aria-label={state === 'running' ? 'Pause timer' : 'Start timer'}
            disabled={mode === 'countdown' && target === 0}
          >
            {state === 'running' ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            className="btn btn-ghost btn-icon btn-sm"
            type="button"
            onClick={handleReset}
            title="Reset"
            aria-label="Reset timer"
          >
            <RotateCcw size={14} />
          </button>

          {/* Countdown setter — only shown when stopped */}
          {isStopped && (
            <form className="lc-timer-setter" onSubmit={handleSetCountdown}>
              <input
                className="lc-timer-input"
                type="number"
                min="0"
                max="99"
                value={inputMin}
                onChange={e => setInputMin(sanitizeTimerSegment(e.target.value, 99))}
                placeholder="mm"
                title="Minutes"
                aria-label="Countdown minutes"
                autoComplete="off"
                enterKeyHint="next"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              <span className="lc-timer-sep">:</span>
              <input
                className="lc-timer-input"
                type="number"
                min="0"
                max="59"
                value={inputSec}
                onChange={e => setInputSec(sanitizeTimerSegment(e.target.value, 59))}
                placeholder="ss"
                title="Seconds"
                aria-label="Countdown seconds"
                autoComplete="off"
                enterKeyHint="done"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              <button
                className="btn btn-ghost btn-icon btn-sm"
                type="submit"
                title="Set countdown"
                aria-label="Set countdown"
              >
                <Check size={13} />
              </button>
              {mode === 'countdown' && target > 0 && (
                <button
                  className="btn btn-ghost btn-sm lc-timer-stopwatch-btn"
                  type="button"
                  onClick={handleSwitchStopwatch}
                  title="Switch to stopwatch"
                  aria-label="Switch to stopwatch"
                >
                  Stopwatch
                </button>
              )}
            </form>
          )}
        </>
      )}
    </div>
  );
}
