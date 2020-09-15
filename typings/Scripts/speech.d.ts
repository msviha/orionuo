export default interface Speech {
	/**
	* void Orion.Print(['color'], 'text');
	* Prints 'text' string into system chat.
	* If only 'text' string was passed, default color [no color] will be used.
	* @param color - message color.
	* @param text - message text.
	*/
	Print(color: string | number, text: string): void;

	/**
	* void Orion.CharPrint('serial', 'color', 'text');
	* Print a message above character with given serial.
	* @param serial - given character serial.
	* @param color - message color.
	* @param text - message text.
	*/
	CharPrint(serial: string, color: string | number, text: string): void;

	/**
	* void Orion.Say('text');
	* Display 'text' speech in client.
	*/
	Say(text: string): void;
	
	/**
	* void Orion.SetFontColor(state, ['color'=0x02B2]);
	* Changes font color of YOUR character to given color argument ( if given ) and disables/enables this feature by state argument.
	* @param state - can be either true or false.
	* @param color - message color.
	*/
	SetFontColor(state: boolean, color?: string | number): void;

	/**
	* bool Orion.GetFontColor();
	* Returns state of Orion.SetFontColor() option.
	*/
	GetFontColor(): boolean;

	/**
	* String Orion.GetFontColorValue();
	* Returns color value of Orion.SetFontColor() option.
	*/
	GetFontColorValue(): string;

	/**
	* void Orion.SetCharactersFontColor(state, ['color'=0x02B2]);
	* Changes font color of all characters to a given color argument ( if given ) and disables/enables this feature by state argument.
	* @param state - can be either true or false.
	* @param color - message color.
	*/
	SetCharactersFontColor(state: boolean, color?: string | number): void;	

	/**
	* bool Orion.GetCharactersFontColor();
	* Returns state of Orion.SetCharactersFontColor() option.
	*/
	GetCharactersFontColor(): boolean;

	/**
	* String Orion.GetCharactersFontColorValue();
	* Returns color value of Orion.SetCharactersFontColor() option.
	*/
	GetCharactersFontColorValue(): string;

	/**
	* void Orion.SayYell('some text');
	* Do 'yelling' speech.
	*/
	SayYell(text: string): void;

	/**
	* void Orion.SayWhisper('some text');
	* Do 'whisper' speech.
	*/
	SayWhisper(text: string): void;
	
	/**
	* void Orion.SayEmote('some text');
	* Do 'emote' speech.
	*/
	SayEmote(text: string): void;

	/**
	* void Orion.SayBroadcast('some text');
	* Do 'broadcast' speech.
	*/
	SayBroadcast(text: string): void;

	/**
	* void Orion.SayParty('some text');
	* Send 'text' to party chat.
	*/
	SayParty(text: string): void;

	/**
	* void Orion.SayGuild('some text');
	* Send 'text' to guild chat.
	*/
	SayGuild(text: string): void;

	/**
	* void Orion.SayAlliance('some text');
	* Send 'text' to alliance chat.
	*/
	SayAlliance(text: string): void;
}