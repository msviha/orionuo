export default interface NonCategorized {
	/**
	 * void Orion.CancelTarget();
	 * Cancel Target
	 */
	CancelTarget(): void;

	OAOptionGet(option:string):string;
	OAOptionSet(option:string, val:string):void;

	AddHighlightCharacter(serial:string, color:string|number, priorityHighlight?:boolean);

	ClearHighlightCharacters(priorityHighlight?:boolean);

	RemoveHighlightCharacter(serial:string, priorityHighlight?:boolean);
	/**
	 * void Orion.SaveConfig();
	 * Save configuration.
	 */
	SaveConfig(): void;

	/**
	 * void Orion.SetLight(state, [value=currentLight]);
	 * Set the light level.
	 * @param state - state turn on/turn off.
	 * @param value - light level value from 0 to 31.
	 */
	SetLight(state: string, value?: number): void;

	/**
	 * void Orion.SetWeather(state, [index=currentWeather], [effectsCount=currentCount], [temperature=currentTemperature]);
	 * Set weather conditions.
	 * @param state - state turn on/turn off.
	 * @param index - ordinal number of the weather effect.
	 * @param effectsCount - number of effects on screen.
	 * @param temperature - not used.
	 */
	SetWeather(state: string, index?: number, effectsCount?: number, temperature?: string): void;

	/**
	 * void Orion.SetSeason(state, [index=currentIndex], [musicIndex=currentMusic]);
	 * Set season with number.
	 * @param state - state turn on/turn off.
	 * @param index - ordinal number of season.
	 * @param musicIndex - music number for playback.
	 */
	SetSeason(state: string, index?: number, musicIndex?: number): void;

	/**
	 * void Orion.Track([state=false], [x=-1, y=-1]);
	 * Hide/show quest arrow to the indicated coordinates. -1 in coordinates indicates current location in the world.
	 * @param state - state show/hide.
	 * @param x - coordinate X in the world, where the arrow points
	 * @param y - coordinate Y в мире, where the arrow points
	 */
	Track(state?: boolean, x?: number, y?: number):void;

	/**
	 * bool Orion.SaveHotkeys('fileName');
	 * Save current hotkey set with file name 'filename' (to the Hotkeys folder at the root of the assistant).
	 * Result: true on successful file save.
	 */
	SaveHotkeys(fileName: string): boolean;

	/**
	 * bool Orion.LoadHotkeys('fileName');
	 * Load hotkey set with file name 'fileName' (from the Hotkeys folder at the root of the assistant).
	 * Result: true on successful file load.
	 */
	LoadHotkeys(fileName: string): boolean;

	/**
	 * void Orion.Cast(spellIndex/'spellName', ['targetSerial']);
	 * Cast a spell 'spellName' (You can also refer to the order number in the spellbook).
	 * If targetSerial is specified - automatically use the target on this object, otherwise - only sends a cast request to the server.
	 */
	Cast(skillName: string | number, targetSerial?: string): void;

	/**
	 * void Orion.UseSkill(skillIndex/'skillName', ['targetSerial']);
	 * Use skill 'skillName' (You can also refer to the order number).
	 * If targetSerial is specified - automatically use the target on this object, otherwise - only sends a request to use skill to the server.
	 */
	UseSkill(skillName: string | number, targetSerial?: string): void;

	/**
	 * int Orion.SkillValue(skillIndex/'skillName', ['type'=real]);
	 * Get skill value 'skillName' (You can also refer to the order number).
	 * @param type - value type: real, base, cap, lock.
	 * Result: Integer value of the skill (e.g: 3.0 will be 30, 10.3 - 103, 50.8 - 508, 100.0 - 1000).
	 */
	SkillValue(skillName: string | number, type?: string): number;

	/**
	 * void Orion.CloseUO();
	 * Close game client.
	 */
	CloseUO(): void;

	/**
	 * void Orion.WarMode([state=switch]);
	 * Switch war mode.
	 * @param state - turn on/turn off war mode. If not specified - switches the current state.
	 */
	WarMode(state?: string | boolean): void;

	/**
	 * void Orion.Morph(['graphic'=0]);
	 * Change character body graphic.
	 * Without parameters or 0 - returns body to its original state.
	 */
	Morph(graphic?: string | number): void;

	/**
	 * void Orion.Resend();
	 * Synchronisation with the server. Can be used every few seconds.
	 */
	Resend(): void;

	/**
	 * void Orion.Sound(index);
	 * Play sound index.
	 */
	Sound(index: number): void;

	/**
	 * void Orion.EmoteAction('actionName');
	 * Request to emotion reproducing actionName.
	 */
	EmoteAction(actionName: string): void;

	/**
	 * void Orion.CharPrint('serial', 'color', 'text');
	 * Display message above the character
	 * @param serial - serial of the character, above who you want to display the message.
	 * @param color - message color.
	 * @param text - text.
	 */
	CharPrint(serial: string, color: string | number, text: string): void;

	PrintFast(serial: string, color: string | number, font: number, text: string): void;

	/**
	 * void Orion.Say('text');
	 * Say in the chat 'text'
	 */
	Say(text: string): void;

	/**
	 * void Orion.BuffExists('name');
	 * Checking for buffs by name or graphic.
	 * Result: true if buff is active.
	 */
	BuffExists(name: string): void;

	/**
	 * void Orion.SetFontColor(state, ['color'=0x02B2]);
	 * Change text color for player character and state of this option.
	 * @param state - true/false.
	 * @param color - text color.
	 */
	SetFontColor(state: boolean, color?: string | number): void;

	/**
	 * bool Orion.GetFontColor();
	 * Retrieve status of text replacement option for player character.
	 * Returns true if option is enabled.
	 */
	GetFontColor(): boolean;

	/**
	 * String Orion.GetFontColorValue();
	 * Retrieve text replacement color for player character.
	 * Returns: text color.
	 */
	GetFontColorValue(): string;

	/**
	 * void Orion.SetCharactersFontColor(state, ['color'=0x02B2]);
	 * Change text color used by characters for output and state of this option.
	 * @param state - true/false.
	 * @param color - text color.
	 */
	SetCharactersFontColor(state: boolean, color?: string | number): void;

	/**
	 * bool Orion.GetCharactersFontColor();
	 * Retrieve status of text replacement option for characters.
	 * Returns true if option is enabled.
	 */
	GetCharactersFontColor(): boolean;

	/**
	 * String Orion.GetCharactersFontColorValue();
	 * Retrieve text replacement color for all characters.
	 * Returns: text color.
	 */
	GetCharactersFontColorValue(): string;

	/**
	 * void Orion.UseAbility('abilityName');
	 * Use request for an ability 'abilityName'.
	 * @param abilityName can also be 'Primary', 'Secondary', or its real name in(can also be found in script editor context menu) or it can be ability index starting from '0' and '30' as last index.
	 */
	UseAbility(abilityName: string): void;

	/**
	 * void Orion.UseWrestlingDisarm();
	 * Wrestling Disarm ability use request.
	 */
	UseWrestlingDisarm(): void;

	/**
	 * void Orion.UseWrestlingStun();
	 * Wrestling Stun ability use request..
	 */
	UseWrestlingStun(): void;

	/**
	 * void Orion.InvokeVirture('name');
	 * ...
	 */
	InvokeVirture(name: string): void

	/**
	 * void Orion.PlayWav('filePath');
	 * Play a *.WAV file from filePath.
	 */
	PlayWav(filePath: string): void;

	/**
	 * void Orion.Screenshot();
	 * Create a screenshot.
	 */
	Screenshot(): void;

	/**
	 * void Orion.LogOut();
	 * Client log out ( client will remain running, at login screen ).
	 */
	LogOut(): void;

	/**
	 * _ MacroObject_ Orion.CreateClientMacro(['action'], ['subAction']);
	 * Create a macro in client options.
	 * Returns MacroObject or null reference.
	 TODO: DUPLICATE
	 */
	CreateClientMacro(action?: string, subAction?: string): MacroObject;

	/**
	 * void Orion.OpenPaperdoll('serial');
	 * Open paperdoll by serial.
	 */
	OpenPaperdoll(serial: string): void;

	/**
	 * void Orion.ClosePaperdoll('serial');
	 * Close paperdoll by serial.
	 */
	ClosePaperdoll(serial: string): void

	/**
	 * void Orion.MovePaperdoll('serial', x, y);
	 * Move paperdoll by serial to chosen x and y coordinates on screen.
	 */
	MovePaperdoll(serial: string, x: number, y: number): void;

	/**
	 * void Orion.ClientViewRange(range);
	 * Set clients view range ( 5 is minimal, 25 is maximal ).
	 */
	ClientViewRange(range?: number): void;

	/**
	 * int Orion.ClientViewRange();
	 * Get current client view range.
	 * Returns clients view range in tiles.
	 */
	ClientViewRange(): number;

	/**
	 * void Orion.LoadProfile('name');
	 * Load OA profile by name.
	 */
	LoadProfile(name: string): void;

	PauseScript(name?:string, exceptScripts?:string);

	ResumeScript(name?:string, exceptScripts?:string);
}
