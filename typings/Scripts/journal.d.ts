export default interface Journal {
	/**
	* void Orion.ShowJournal([linesCount=maxLines]);
	* Display the journal content in a text box, linesCount - the number of output lines.
	*/
	ShowJournal(linesCount: number): void;

	/**
	* void Orion.ClearJournal(['pattern'], ['flags'], ['serial'=0], ['color'=0xFFFF]);
	* Clear the journal.
	* Without parameters - clears the whole journal of the assistant; Otherwise it works similarly to InJournal but including deletion.
	*/
	ClearJournal(pattern?: string, flags?: string, serial?: string, color?: string | number): void;

	/**
	* void Orion.JournalIgnoreCase([state=false]);
	* Enable / disable ignoring the register for searching text in the journal.
	*/
	JournalIgnoreCase(state?: boolean): void;

	/**
	* JournalMessage Orion.InJournal('pattern', ['flags'], ['serial'=0], ['color'=0xFFFF], [startTime=0, endTime=0]);
	* Search for data in the journal.
	* @param pattern - required string, which can consist of several lines separated via |
	* @param flags - search flags in the journal: my/self - search for messages with player's serial; Sys/system - search for messages in the system chat. Can be combined with: 'my|sys'.
	* @param serial - search for messages from the object with the specified serial. 0 ignores the filter by serial.
	* @param color - search for messages with the specified color. 0xFFFF ignores the filter by color.
	* @param startTime - initial time of search. 0 the initial time is ignored.
	* @param endTime - the end time of the search. 0 the end time is ignored
	* Result: object of the type JournalMessage or null if nothing was found.
	*/
	InJournal(pattern: string, flags?: string, serial?: string, color?: string | number, startTime?: number, endTime?: number): JournalMessage;

	/**
	* JournalMessage Orion.WaitJournal('pattern', startTime, endTime, [flags], ['serial'=0], ['color'=0xFFFF]);
	* Waiting for the appearance of data in the journal.
	* @param pattern - required string, which can consist of several lines separated via |
	* @param startTime - initial time of search. 0 the initial time is ignored.
	* @param endTime - the end time of the search. 0 the end time is ignored
	* @param flags - search flags in the journal: my/self - search for messages with player's serial; Sys/system - search for messages in the system chat. Can be combined with: 'my|sys'.
	* @param serial - search for messages from the object with the specified serial. 0 ignores the filter by serial.
	* @param color - search for messages with the specified color. 0xFFFF ignores the filter by color.
	* Result: object of the type JournalMessage or null if nothing was found.
	*/
	WaitJournal(pattern: string, startTime: number, endTime: number, flags?: string, serial?: string, color?: string | number): JournalMessage;

	/**
	* JournalMessage Orion.LastJournalMessage();
	* Retrieve last message from Orion Assistant journal.
	* Result: object of the type JournalMessage or null if nothing was found.
	*/
	LastJournalMessage(): JournalMessage;

	/**
	* int Orion.JournalCount();
	* Returns: Amount of messages in journal.
	*/
	JournalCount(): number;

	/**
	* JournalMessage Orion.JournalLine(index);
	* Returns JournalMessage by index or null of index wasn't found.
	*/
	JournalLine(index: number): JournalMessage;
}