export default interface InteractionWithOtherScripts {
    /**
     * void Orion.Wait('delay');
     * Wait delay (milliseconds).
     * In addition, the value can take in the parameter string constants: moveitemdelay, waittargetdelay, useitemdelay, keepcorpsedelay.
     */
    Wait(delay: number): void;

    /**
     *
     * @param id
     * @param timer
     * @param position left etc.. abovechar, underchar
     * @param type bar | line
     * @param text
     * @param xFromPosition
     * @param yFromPosition
     * @param textColor
     * @param unknownProperty_b
     * @param timerColor lowwercase string red, black etc.
     */
    AddDisplayTimer(
        id: string,
        timer: number,
        position: string,
        type: string,
        text: string,
        xFromPosition: number,
        yFromPosition: number,
        textColor: string | number,
        font?: number,
        backgroundColor?: string,
    );

    DisplayTimerSetObject(id: string, serial: string);

    RemoveDisplayTimer(id: string);

    DisplayTimerExists(id: string);

    /**
     * int Orion.Now();
     * Result: the current time in milliseconds.
     */
    Now(): number;

    /**
     * void Orion.LoadScript('filePath');
     * Load the script file.
     */
    LoadScript(filePath: string): void;

    /**
     * void Orion.Exec('functionName', [oneScriptRunning=false], [argumentsList]);
     * Start the function.
     * @param functionName - The name of the function to start.
     * @param oneScriptRunning - Check for a running instance of the function with the same name and prevent re-execution.
     * @param argumentsList - List of function parameters.
     */
    Exec(functionName: string, oneScriptRunning?: boolean, argumentsList?: string[]): void;

    /**
     * void Orion.Terminate('functionName', ['functionsSave']);
     * Terminate the script. The function name register is important !!!
     * @param functionName - The name of the function to be terminated. Ends all functions with that name. If 'all' is specified - exits all functions except those that were specified in functionsSave.
     * @param functionsSave - Functions that do not need to be terminated are indicated by '|' ; For example,_ Orion.Terminate('all', 'Heal | Loot | CheckMana') - terminates all working functions except Heal, Loot, CheckMana.
     */
    Terminate(functionName: string, functionsSave?: string): void;

    /**
     * bool Orion.ScriptRunning('functionName');
     * Check if the script is already running.
     * Result: true if the script is running.
     */
    ScriptRunning(functionName: string): boolean;

    /**
     * void Orion.Launch('filePath', [arguments]);
     * Launching of external program from 'filePath' with optional 'arguments'.
     */
    Launch(filePath: string, arguments?: any);

    /**
     * bool Orion.Contains(text, pattern, [ignoreCase=false]);
     * This function will check for a text pattern or a collection of patters ('patternOne|patternTwo|patternThree') within 'text' string. Uses same logic as text searching in UO journal.
     * @param text - String with text to search within.
     * @param pattern - String with pattern(s) to search for.
     * @param ignoreCase - true - Ignore case is true by default.
     * Returns true if there's a match.
     */
    Contains(text: string, pattern: string, ignoreCase?: boolean): boolean;

    /**
     * StringList Orion.Split(text, [separator=' '], [skipEmptyWord=true]);
     * This function will split 'text' string into a list of strings by separator character. Default is space character.
     * @param text - string of text to split.
     * @param separator - character used as a separator for text string.
     * @param skipEmptyWord - true - skips empty words by default.
     * Returns a list of strings.
     */
    Split(text: string, separator?: string, skipEmptyWord?: boolean): Array<string>;

    /**
     * String Orion.OAVersion();
     * Returns: Current version number of OA, for example "2.0.8.0".
     */
    OAVersion(): string;

    /**
     * bool Orion.Connected();
     * Returns: true if client is connected to a server and character is already in the world.
     */
    Connected(): boolean;

    /**
     * String Orion.Time(['format'=hh:mm:ss.zzz]);
     * Returns: current time, example "13:27:41.508".
     */
    Time(format?: string): string;

    /**
     * String Orion.Date(['format'=dd.MM.yyyy]);
     * Returns: current date, example "26.05.2017".
     */
    Date(format?: string): string;

    /**
     * int Orion.Random([value=2147483647]);
     * Returns: random value starting from 0 and up to value-1.
     */
    Random(value?: number): number;

    /**
     * int Orion.Random(minValue, maxValue);
     * Returns: random value starting from minValue and up to maxValue-1.
     */
    Random(minValue: number, maxValue: number): number;

    /**
     * void Orion.ActivateClient();
     * Activates client window.
     */
    ActivateClient(): void;

    /**
     * void Orion.ShutdownWindows(['mode']);
     * Shuts down your PC :) can add flags as 'mode'.
     */
    ShutdownWindows(mode?: string): void;

    /**
     * bool Orion.OnOffHotkeys();
     * Get current state of hotkeys ( enabled/disabled )
     * Returns true if hotkeys are enabled, false if disabled.
     */
    OnOffHotkeys(): boolean;

    /**
     * void Orion.OnOffHotkeys(state);
     * Sets hotkeys state.
     */
    OnOffHotkeys(state);

    /**
	 * Set options for the LoS algorithm.

Arguments:
options - string, options for the algorithm LoS;
Available options:
'sphere' - LoS function for the Sphere emulator;
'sphereadvanced' - LoS function for Sphere emulator (C and above);
'runuo' - LoS function for emulator RunUO/ServUO (installed by default);
'pol' - LoS function for emulator POL;
'spherecheckcorners' - Option for Sphere emulator only, check angles;
'polusenoshoot' - Option for POL emulator only, using flag No Shoot;
'pollosthroughtwindows' - Option only for POL emulator, visible through windows.
'ignoredestpos' - Option to ignore endpoint when calculating LoS.

Allowed to combine flags: Orion.SetLOSOptions('pol|pollosthroughtwindows');

Result: does not return a value.
	 * @param options
	 */

    SetLOSOptions(options: string);
}
