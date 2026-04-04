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

  const state  = timerState?.state ?? 'stopped';
  const mode   = timerState?.mode  ?? 'stopwatch';
  const target = timerState ? Number(timerState.targetMs) : 0;
  const version = Number.isFinite(Number(timerState?.version)) ? Number(timerState.version) : null;

  const isStopped = state === 'stopped';
  const isOverdue = mode === 'countdown' && target > 0 && localElapsed >= target;

  useEffect(() => {
    setLocalElapsed(computeElapsedMs(timerState));
  }, [timerState]);

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

      <span className="lc-timer-display">{fmt(displayMs)}</span>

      {isTeacher && (
        <>
          <button
            className="btn btn-ghost btn-icon btn-sm"
            onClick={handlePlayPause}
            title={state === 'running' ? 'Pause' : 'Start'}
            disabled={mode === 'countdown' && target === 0}
          >
            {state === 'running' ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={handleReset} title="Reset">
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
                onChange={e => setInputMin(e.target.value)}
                placeholder="mm"
                title="Minutes"
              />
              <span className="lc-timer-sep">:</span>
              <input
                className="lc-timer-input"
                type="number"
                min="0"
                max="59"
                value={inputSec}
                onChange={e => setInputSec(e.target.value)}
                placeholder="ss"
                title="Seconds"
              />
              <button
                className="btn btn-ghost btn-icon btn-sm"
                type="submit"
                title="Set countdown"
              >
                <Check size={13} />
              </button>
              {mode === 'countdown' && target > 0 && (
                <button
                  className="btn btn-ghost btn-sm lc-timer-stopwatch-btn"
                  type="button"
                  onClick={handleSwitchStopwatch}
                  title="Switch to stopwatch"
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
