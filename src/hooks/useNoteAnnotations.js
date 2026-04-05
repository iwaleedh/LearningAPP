import { useCallback, useEffect, useRef, useState } from 'react';
import { createUndoManager } from '../services/annotation/undoManager.js';
import {
    deleteDocumentAnnotations,
    getDocumentAnnotations,
    saveDocumentAnnotation,
} from '../services/annotation/annotationStore.js';
import { useAuth } from './useAuth.js';

const NOTE_DOC_TYPE = 'note';
const NOTE_PAGE_NUMBER = 0;
const GUEST_STORAGE_PREFIX = 'lt_note_annotations:';

function emitToast(type, message) {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent('app:toast', { detail: { type, message } }));
}

function buildGuestAnnotationKey(noteId) {
    return `${GUEST_STORAGE_PREFIX}${noteId}`;
}

function readGuestAnnotation(noteId) {
    if (typeof window === 'undefined') return null;
    try {
        const raw = window.sessionStorage.getItem(buildGuestAnnotationKey(noteId));
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed?.fabricJson || null;
    } catch {
        return null;
    }
}

function writeGuestAnnotation(noteId, fabricJson) {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem(
        buildGuestAnnotationKey(noteId),
        JSON.stringify({ noteId, fabricJson, updatedAt: new Date().toISOString() })
    );
}

function clearGuestAnnotation(noteId) {
    if (typeof window === 'undefined') return;
    window.sessionStorage.removeItem(buildGuestAnnotationKey(noteId));
}

function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 5000);
}

export function useNoteAnnotations(noteId, { enabled = false } = {}) {
    const { isSignedIn } = useAuth();
    const canvasHandleRef = useRef(null);
    const undoManagerRef = useRef(createUndoManager());
    const autoSaveTimerRef = useRef(null);
    const [canvasMountVersion, setCanvasMountVersion] = useState(0);
    const [activeTool, setActiveTool] = useState('none');
    const [toolOptions, setToolOptions] = useState({
        color: '#ffeb3b',
        width: 16,
    });
    const [dirty, setDirty] = useState(false);
    const [saveStatus, setSaveStatus] = useState(null);
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    const setCanvasHandle = useCallback((handle) => {
        canvasHandleRef.current = handle;
        setCanvasMountVersion((value) => value + 1);
    }, []);

    const loadPersistedState = useCallback(async () => {
        const canvasHandle = canvasHandleRef.current;
        if (!canvasHandle || !noteId) return;

        let nextState = null;
        if (isSignedIn) {
            const stored = await getDocumentAnnotations(noteId, NOTE_DOC_TYPE);
            nextState = stored[NOTE_PAGE_NUMBER] || null;
        } else {
            nextState = readGuestAnnotation(noteId);
        }

        await canvasHandle.loadFromJSON(nextState);
        undoManagerRef.current.clear(NOTE_PAGE_NUMBER);
        setDirty(false);
        setSaveStatus(null);
        setCanUndo(false);
        setCanRedo(false);
    }, [isSignedIn, noteId]);

    useEffect(() => {
        if (!enabled || !noteId || !canvasHandleRef.current) return;
        const frameId = window.requestAnimationFrame(() => {
            void loadPersistedState();
        });
        return () => window.cancelAnimationFrame(frameId);
    }, [canvasMountVersion, enabled, loadPersistedState, noteId]);

    useEffect(() => () => {
        if (autoSaveTimerRef.current) {
            window.clearTimeout(autoSaveTimerRef.current);
        }
    }, []);

    const persistState = useCallback(async (fabricJson) => {
        if (!noteId) return;

        if (isSignedIn) {
            await saveDocumentAnnotation(noteId, NOTE_DOC_TYPE, NOTE_PAGE_NUMBER, fabricJson);
            return;
        }

        writeGuestAnnotation(noteId, fabricJson);
    }, [isSignedIn, noteId]);

    const saveNow = useCallback(async () => {
        const canvasHandle = canvasHandleRef.current;
        if (!canvasHandle || !noteId) return;

        try {
            setSaveStatus('saving');
            const json = canvasHandle.toJSON();
            await persistState(json);
            setDirty(false);
            setSaveStatus('saved');
            window.setTimeout(() => setSaveStatus((value) => (value === 'saved' ? null : value)), 1800);
        } catch {
            setSaveStatus(null);
            emitToast('warning', 'Note annotations could not be saved right now.');
        }
    }, [noteId, persistState]);

    const scheduleAutoSave = useCallback(() => {
        if (autoSaveTimerRef.current) {
            window.clearTimeout(autoSaveTimerRef.current);
        }

        autoSaveTimerRef.current = window.setTimeout(() => {
            void saveNow();
        }, 1800);
    }, [saveNow]);

    const handleCanvasChange = useCallback(({ prevState }) => {
        undoManagerRef.current.push(NOTE_PAGE_NUMBER, prevState);
        setCanUndo(undoManagerRef.current.canUndo(NOTE_PAGE_NUMBER));
        setCanRedo(false);
        setDirty(true);
        scheduleAutoSave();
    }, [scheduleAutoSave]);

    const undo = useCallback(async () => {
        const canvasHandle = canvasHandleRef.current;
        if (!canvasHandle || !undoManagerRef.current.canUndo(NOTE_PAGE_NUMBER)) return;

        const currentState = canvasHandle.toJSON();
        const prevState = undoManagerRef.current.undo(NOTE_PAGE_NUMBER, currentState);
        await canvasHandle.loadFromJSON(prevState || null);
        setCanUndo(undoManagerRef.current.canUndo(NOTE_PAGE_NUMBER));
        setCanRedo(undoManagerRef.current.canRedo(NOTE_PAGE_NUMBER));
        setDirty(true);
        scheduleAutoSave();
    }, [scheduleAutoSave]);

    const redo = useCallback(async () => {
        const canvasHandle = canvasHandleRef.current;
        if (!canvasHandle || !undoManagerRef.current.canRedo(NOTE_PAGE_NUMBER)) return;

        const currentState = canvasHandle.toJSON();
        const nextState = undoManagerRef.current.redo(NOTE_PAGE_NUMBER, currentState);
        if (!nextState) return;
        await canvasHandle.loadFromJSON(nextState);
        setCanUndo(undoManagerRef.current.canUndo(NOTE_PAGE_NUMBER));
        setCanRedo(undoManagerRef.current.canRedo(NOTE_PAGE_NUMBER));
        setDirty(true);
        scheduleAutoSave();
    }, [scheduleAutoSave]);

    const clear = useCallback(async () => {
        const canvasHandle = canvasHandleRef.current;
        if (!canvasHandle) return;

        const previousState = canvasHandle.toJSON();
        const hasObjects = Array.isArray(previousState?.objects) && previousState.objects.length > 0;
        if (hasObjects) {
            undoManagerRef.current.push(NOTE_PAGE_NUMBER, previousState);
        }

        canvasHandle.clear();
        setCanUndo(undoManagerRef.current.canUndo(NOTE_PAGE_NUMBER));
        setCanRedo(false);

        if (isSignedIn) {
            await deleteDocumentAnnotations(noteId, NOTE_DOC_TYPE);
        } else {
            clearGuestAnnotation(noteId);
        }

        setDirty(false);
        setSaveStatus(null);
    }, [isSignedIn, noteId]);

    const exportAnnotations = useCallback(async ({ filenameBase = 'note-annotations' } = {}) => {
        const canvasHandle = canvasHandleRef.current;
        const fabricCanvas = canvasHandle?.getCanvas?.();
        const json = canvasHandle?.toJSON?.();
        if (!fabricCanvas || !json) return;

        const pngDataUrl = fabricCanvas.toDataURL({ format: 'png', multiplier: 2 });
        const pngResponse = await fetch(pngDataUrl);
        const pngBlob = await pngResponse.blob();

        triggerDownload(
            new Blob([JSON.stringify({ noteId, exportedAt: new Date().toISOString(), fabricJson: json }, null, 2)], {
                type: 'application/json',
            }),
            `${filenameBase}.annotations.json`
        );
        triggerDownload(pngBlob, `${filenameBase}.annotations.png`);
    }, [noteId]);

    return {
        activeTool,
        canRedo,
        canUndo,
        clear,
        dirty,
        exportAnnotations,
        handleCanvasChange,
        redo,
        saveNow,
        saveStatus,
        setActiveTool,
        setCanvasHandle,
        setToolOptions,
        toolOptions,
        undo,
    };
}