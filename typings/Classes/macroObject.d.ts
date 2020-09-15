 declare interface MacroObject {
	/**
	* void macro.AddAction('action', ['subAction']);
	* Add action entry to macros.
	*/
	AddAction(action: string, subAction?: string): void;

	/**
	* void macro.Play([waitWhileMacroPlaying=false], [delay=100500]);
	* Play macro in client.
	* Attention! Only 1 macro can be played in client at a time!
	* Multiple requests to play a macro while there's a macro already playing will cancel each other out. Last requested macro will be played.
	* waitWhileMacroPlaying Will wait if there's a macro already playing.
	* delay Delay to wait for current macro completion.
	*/
	Play(waitWhileMacroPlaying?: boolean, delay?: number): void;
}