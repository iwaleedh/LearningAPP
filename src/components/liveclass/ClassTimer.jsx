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
 * ClassTimer — shown to all participants.
 * Teachers can set a countdown target (minutes) or use as a stopwatch.
 *
 * @param {{ timerState: object|null, isTeacher: boolean, onUpdate: (state,elapsed,target,mode) => void }} props
 */
export default function ClassTimer({ timerState, isTeacher, onUpdate }) {
  const [localElapsed, setLocalElapsed] = useState(0);
  const [inputMin, setInputMin] = useState('');
  const [inputSec, setInputSec] = useState('');
  const rafRef = useRef(null);
  const lastTickRef = useRef(null);

  const state  = timerState?.state ?? 'stopped';
  const mode   = timerState?.mode  ?? 'stopwatch';
  const target = timerState ? Number(timerState.targetMs) : 0;

  const isStopped = state === 'stopped';
  const isOverdue = mode === 'countdown' && target > 0 && localElapsed >= target;

  useEffect(() => {
    if (timerState) setLocalElapsed(Number(timerState.elapsedMs));
  }, [timerState]);

  // Auto-stop when countdown hits zero
  useEffect(() => {
    if (mode === 'countdown' && target > 0 && localElapsed >= target && state === 'running') {
      cancelAnimationFrame(rafRef.current);
      onUpdate?.('stopped', BigInt(target), BigInt(target), mode);
    }
  }, [localElapsed, mode, target, state]);

  useEffect(() => {
    if (state === 'running') {
      lastTickRef.current = Date.now();
      function tick() {
        const now = Date.now();
        const delta = now - lastTickRef.current;
        lastTickRef.current = now;
        setLocalElapsed(prev => prev + delta);
        rafRef.current = requestAnimationFrame(tick);
      }
      rafRef.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [state]);

  const displayMs = mode === 'countdown' && target > 0
    ? Math.max(0, target - localElapsed)
    : localElapsed;

  function handlePlayPause() {
    const newState = state === 'running' ? 'paused' : 'running';
    onUpdate?.(newState, BigInt(Math.round(localElapsed)), BigInt(target), mode);
  }

  function handleReset() {
    setLocalElapsed(0);
    onUpdate?.('stopped', BigInt(0), BigInt(target), mode);
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
    onUpdate?.('stopped', BigInt(0), BigInt(totalMs), 'countdown');
  }

  function handleSwitchStopwatch() {
    setLocalElapsed(0);
    setInputMin('');
    setInputSec('');
    onUpdate?.('stopped', BigInt(0), BigInt(0), 'stopwatch');
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
