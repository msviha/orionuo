export default interface TextWindow {
	/**
	* void TextWindow.Open();
	* Open the text box.
	*/
	Open(): void;

	/**
	* void TextWindow.Close();
	* Close the text box.
	*/
	Close(): void;

	/**
	* void TextWindow.Clear();
	* Clear the text box.
	*/
	Clear(): void;

	/**
	* void TextWindow.Print('text');
	* Type the text in the text box.
	*/
	Print(text: string): void;

	/**
	* void TextWindow.SetPos(x, y);
	* Move text windows to x and y screen coordinates.
	*/
	SetPos(x: number, y: number): void;

	/**
	* void TextWindow.SetSize(width, height);
	* Sets text windows size by given width and height.
	*/
	SetSize(width: number, height: number): void;

	/**
	* void TextWindow.SaveToFile('filePath');
	* Write contents of text windows into a file at filePath.
	*/
	SaveToFile(filePath: string): void;
}