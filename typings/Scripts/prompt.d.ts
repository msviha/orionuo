export default interface Prompt {
	/**
	* void Orion.WaitPrompt('text', 'serial'=0, 'type'=all);
	* Add a prompt hook.
	* @param text - input text
	* @param serial - serial of prompt object. If serial equals 0, serial check will be ignored.
	* @param type - prompt type:
	* all - all types;
	* ascii - only ASCII prompts;
	* unicode - only UNIDCODE prompts;
	*/
	WaitPrompt(text: string, serial?: string, type?: string);	

	/**
	* void Orion.CancelWaitPrompt();
	* Cancel all prompt hooks.
	*/
	CancelWaitPrompt(): void;

	/**
	* bool Orion.PrompsExists();
	* Returns true if a prompt is active.
	*/
	PrompsExists(): boolean;

	/**
	* String Orion.PromptSerial();
	* Returns prompt serial as string.
	*/
	PromptSerial(): string;

	/**
	* String Orion.PromptID();
	* Returns prompt id as string.
	*/
	PromptID(): string;

	/**
	* void Orion.SendPrompt('text');
	* Send prompt response ( if there's a prompt active ) with text input.
	*/
	SendPrompt(text: string): void;
}