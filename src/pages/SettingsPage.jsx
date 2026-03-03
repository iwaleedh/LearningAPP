import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Download, Trash2, Palette } from 'lucide-react';
import './Pages.css';

export default function SettingsPage() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="animate-fade-in" style={{ maxWidth: '600px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Settings</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Customize your learning experience
            </p>

            <div className="settings-grid">
                {/* Theme */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Palette size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                            Dark Mode
                        </h4>
                        <p>Switch between light and dark themes</p>
                    </div>
                    <button
                        className={`toggle-switch ${theme === 'dark' ? 'active' : ''}`}
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                    />
                </div>

                {/* Export */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Download size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                            Export Notes
                        </h4>
                        <p>Download your highlights and notes as PDF</p>
                    </div>
                    <button className="btn btn-secondary btn-sm">
                        <Download size={14} /> Export
                    </button>
                </div>

                {/* Clear Data */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Trash2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                            Clear Progress
                        </h4>
                        <p>Reset all progress and saved data</p>
                    </div>
                    <button className="btn btn-danger btn-sm">
                        <Trash2 size={14} /> Reset
                    </button>
                </div>
            </div>

            {/* About */}
            <div className="card" style={{ marginTop: 'var(--space-6)' }}>
                <h4 style={{ marginBottom: 'var(--space-2)' }}>About Living Textbook</h4>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                    An interactive learning platform built for students who want to go beyond passive reading.
                    Features include smart exercises, flashcards, past paper practice, and progress tracking.
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
                    Version 1.0.0 · Built with React + Vite
                </p>
            </div>
        </div>
    );
}
