import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Square, Volume2 } from 'lucide-react';
import './Notes.css';

export default function TextToSpeech({ text }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [rate, setRate] = useState(1);
    const [progress, setProgress] = useState(0);
    const utteranceRef = useRef(null);
    const intervalRef = useRef(null);

    const stripHtml = useCallback((html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }, []);

    const cleanText = stripHtml(text);

    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handlePlay = () => {
        if (isPlaying) {
            window.speechSynthesis.pause();
            setIsPlaying(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }

        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPlaying(true);
            startProgressTracker();
            return;
        }

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = rate;
        utterance.pitch = 1;
        utterance.lang = 'en-US';

        utterance.onend = () => {
            setIsPlaying(false);
            setProgress(0);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };

        utterance.onerror = () => {
            setIsPlaying(false);
            setProgress(0);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };

        utterance.onboundary = (e) => {
            if (e.name === 'word') {
                setProgress(Math.min((e.charIndex / Math.max(cleanText.length, 1)) * 100, 100));
            }
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
        startProgressTracker();
    };

    const startProgressTracker = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        const estimatedDuration = (cleanText.length / 15) / rate;
        const startTime = Date.now();
        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                const elapsed = (Date.now() - startTime) / 1000;
                const pct = Math.min((elapsed / estimatedDuration) * 100, 100);
                return Math.max(prev, pct);
            });
        }, 200);
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setProgress(0);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleRateChange = (newRate) => {
        setRate(newRate);
        if (isPlaying) {
            handleStop();
        }
    };

    if (!('speechSynthesis' in window)) return null;

    return (
        <div className="tts-controls">
            <Volume2 size={16} className="tts-icon" />

            <button
                className={`btn btn-sm ${isPlaying ? 'btn-primary' : 'btn-secondary'}`}
                onClick={handlePlay}
                title={isPlaying ? 'Pause' : 'Play'}
            >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            <button
                className="btn btn-ghost btn-sm"
                onClick={handleStop}
                title="Stop"
                disabled={!isPlaying}
            >
                <Square size={14} />
            </button>

            <div className="tts-progress-bar">
                <div
                    className="tts-progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="tts-speed">
                {[0.75, 1, 1.25, 1.5].map(r => (
                    <button
                        key={r}
                        className={`tts-speed-btn ${rate === r ? 'active' : ''}`}
                        onClick={() => handleRateChange(r)}
                    >
                        {r}×
                    </button>
                ))}
            </div>
        </div>
    );
}
