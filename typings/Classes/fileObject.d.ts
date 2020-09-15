 declare interface FileObject {
	/**
	* bool fileObject.Open('filePath');
	* An attempt to open a file (or create a new one) by the filePath.
	* Result: true if the file is successfully opened.
	*/
	Open(filePath: string): boolean;

	/**
	* bool fileObject.Append('filePath');
	* An attempt to open the file by the filePath to the write-in (the pointer to the data is placed at the end of the file).
	* Result: true if the file is successfully opened.
	*/
	Append(filePath: string): boolean;

	/**
	* bool fileObject.Opened();
	* Verify the validity of the opened file.
	* Result: true if the file is open.
	*/
	Opened(): boolean;

	/**
	* void fileObject.Close();
	* Close the file.
	*/
	Close(): void;

	/**
	* String fileObject.ReadLine();
	* Read the line before the line break (\ n).
	* Result: The result of reading the data.
	*/
	ReadLine(): string;

	/**
	* String fileObject.Read();
	* Read the word (up to blank-space " ").
	* Result: The result of reading the data.
	*/
	Read(): string;

	/**
	* void fileObject.WriteLine('data');
	* Record the data string and move the string (\ n).
	*/
	WriteLine(data: string): void;

	/**
	* void fileObject.Write('data');
	* Write down the data.
	*/
	Write(data: string): void;

	/**
	* void fileObject.Remove(['filePath']);
	* Deletes file at filePath.
	* If filePath was an empty string or null reference, it'll close and try delete fileObject.
	*/
	Remove(filePath?: string): void;
}