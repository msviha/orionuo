export default interface Map {
	/**
	* void Orion.OpenOrionMap([x, y]);
	* Opens Orion map.
	* If x and y were defined, moves map window to given screen coordinates.
	*/
	OpenOrionMap(x, y): void;	

	/**
	* void Orion.MoveOrionMap(x, y);
	* Moves map to given screen coordinates.
	*/
	MoveOrionMap(x, y): void;

	/**
	* void Orion.CloseOrionMap();
	* Close Orion map.
	*/
	CloseOrionMap(): void;

	/**
	* void Orion.OpenEnhancedMap(['filePath']);
	* Opens Enchanced Map at 'filePath' (for example "D:\Games\UO\EnhancedMap.exe").
	* If 'filePath' wasn't defined, tries to open from a default location /Map/EnhancedMap.exe'
	*/
	OpenEnhancedMap(filePath: string): void;
}