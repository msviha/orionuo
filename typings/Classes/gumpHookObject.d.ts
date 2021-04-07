declare interface GumpHookObject {
    /**
     * int hook.Index();
     * Returns button index to select by this hook.
     */
    Index(): number;

    /**
     * void hook.AddEntry(index, 'text');
     * Adds a TextEntry hook by index and inputs text string.
     * @param index - index of text entry.
     * @param text - text entry input string.
     */
    AddEntry(index: number, text: string): void;

    /**
     * void hook.AddCheck(index, state);
     * Adds a hook for radio/checkbox and sets the state.
     * @param index - button index.
     * @param state - input state ( true/false).
     */
    AddCheck(index: number, state: boolean);
}
