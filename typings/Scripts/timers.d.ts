export default interface Timers {
    /**
     * bool Orion.TimerExists('name');
     * Check if timer with given name exists.
     * Returns true if such timer exists.
     */
    TimerExists(name: string): boolean;

    /**
     * void Orion.SetTimer('name', [delay=0]);
     * Create/Change timer with 'delay' as initial value. Default is 0.
     */
    SetTimer(name: string, delay?: number): void;

    /**
     * int Orion.Timer('name');
     * Get current value of timer by name.
     * Returns -1 if such timer doesn't exist .
     * Returns time passed from timer initiation in ms.
     */
    Timer(name: string): number;

    /**
     * void Orion.RemoveTimer('name');
     * Removes timer with a given name.
     */
    RemoveTimer(name: string): void;

    /**
     * void Orion.ClearTimers();
     * Removes all existing timers.
     */
    ClearTimers(): void;
}
