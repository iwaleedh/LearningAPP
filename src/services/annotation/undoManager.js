/**
 * Per-page undo/redo stack for annotation canvas.
 * Stores fabric.js JSON snapshots taken BEFORE each change.
 * Max 50 snapshots per page.
 */

const MAX_UNDO = 50;

export function createUndoManager() {
    // stacks[pageNum] = { undo: [], redo: [] }
    const stacks = {};

    function getStack(page) {
        if (!stacks[page]) stacks[page] = { undo: [], redo: [] };
        return stacks[page];
    }

    return {
        /**
         * Push the state BEFORE a change so it can be restored by undo.
         * Clears the redo stack.
         */
        push(pageNum, stateBefore) {
            const stack = getStack(pageNum);
            stack.undo.push(stateBefore);
            if (stack.undo.length > MAX_UNDO) stack.undo.shift();
            stack.redo = [];
        },

        /**
         * Undo: saves currentState to redo stack, returns the previous state to restore.
         * Returns null if nothing to undo.
         */
        undo(pageNum, currentState) {
            const stack = getStack(pageNum);
            if (stack.undo.length === 0) return null;
            stack.redo.push(currentState);
            return stack.undo.pop();
        },

        /**
         * Redo: saves currentState to undo stack, returns the next state to restore.
         * Returns null if nothing to redo.
         */
        redo(pageNum, currentState) {
            const stack = getStack(pageNum);
            if (stack.redo.length === 0) return null;
            stack.undo.push(currentState);
            return stack.redo.pop();
        },

        canUndo(pageNum) {
            return (stacks[pageNum]?.undo.length ?? 0) > 0;
        },

        canRedo(pageNum) {
            return (stacks[pageNum]?.redo.length ?? 0) > 0;
        },

        /** Clear stacks for a specific page (pass null to clear all). */
        clear(pageNum) {
            if (pageNum != null) {
                stacks[pageNum] = { undo: [], redo: [] };
            } else {
                Object.keys(stacks).forEach((k) => {
                    stacks[k] = { undo: [], redo: [] };
                });
            }
        },
    };
}
