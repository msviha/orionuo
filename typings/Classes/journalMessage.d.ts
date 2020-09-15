 declare interface JournalMessage {
	/**
	* String msg.Serial();
	* Result: Serial number of an Object, bounded with message.
	*/
	Serial(): string;

	/**
	* int msg.Timer();
	* Result: Temporary mark of the message.
	*/
	Timer(): number;

	/**
	* String msg.Color();
	* Result: Color of the message.
	*/
	Color(): string;

	/**
	* String msg.Text();
	* Result: Message text.
	*/
	Text(): string;

	/**
	* int msg.Flags();
	* Result: Message flags.
	*/
	Flags(): number;

	/**
	* int msg.FindTextID();
	* Result: Text index in search request from 0 to the number of sets in request.
	*/
	FindTextID(): number;

	/**
	* void msg.SetText('newText');
	* Change journal message to 'newText' string.
	*/
	SetText(newText: string): void;
}