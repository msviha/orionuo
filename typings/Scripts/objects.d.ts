export default interface Objects {
	/**
	* void Orion.Info(['serial'=targetRequest]);
	* Display information about the object "serial" in a text box.
	* Request target to be aimed at the desired object, if parameters were not specified.
	*/
	Info(serial?: string): void;

	/**
	* void Orion.InfoTile(['lasttile'=targetRequest]);
	* Display information about 'lasttile' (tile, on which target was selected last time ) in the text box.
	* Request target to be aimed at the desired tile, if parameters were not specified.
	*/
	InfoTile(lasttile?: string): void;

	/**
	* String Orion.GetSerial('serial');
	* Returns real value of the serial.
	* For instance: Orion.GetSerial(self) or Orion.GetSerial(lastcontainer) - will return the serial of the player 0x12345678
	*/
	GetSerial(serial: string): string;

	/**
	* String Orion.GetGraphic('graphic');
	* Return real value of "graphic".
	* For instance: Orion.GetGraphic('bm') - will return type of blood moss, stated in Lists/Types
	*/
	GetGraphic(graphic: string | number): string;

	/**
	* String Orion.GetContainer('serial');
	* Return serial of the object, in which an object with "serial" is located.
	* Orion.GetContainer(self) will return 0xFFFFFFFF (worlds serial) or Orion.GetContainer(backpack) - will return serial of the player 0x12345678, since backpack container is the player, who's owning it.
	*/
	GetContainer(serial: string): string;

	/**
	* void Orion.Click(['serial'=self]);
	* Request click for the object serial.
	*/
	Click(serial?: string): void;

	/**
	* void Orion.UseObject(['serial'=self]);
	* Request to use (doubleclick) the object serial.
	*/
	UseObject(serial?: string): void;

	/**
	* void Orion.GetStatus(['serial'=self]);
	* Request for the object serial status.
	*/
	GetStatus(serial?: string): void;

	/**
	* void Orion.Attack('serial');
	* Request to attack the object serial.
	*/
	Attack(serial: string): void;

	/**
	* void Orion.Hide(['serial'=targetRequest]);
	* Hide the object serial.
	* Request target selection for the object indication, if parameters were not specified.
	*/
	Hide(serial?: string): void;

	/**
	* void Orion.RenameMount('serial', 'new name');
	* Rename your mount "serial".
	*/
	RenameMount(serial: string, newName: string):  void;

	/**
	* void Orion.Drop(['serial'=targetRequest], [count=0(all)], [x=-1, y=-1, z=0]);
	* Drop the item 'serial' with amount 'count' into coordinates x, y, z ; Use target if parameters were not specified.
	*/
	Drop(serial?: string, count?: number, x?: number, y?: number, z?: number): void;

	/**
	* void Orion.DropHere(['serial'=targetRequest], [count=0(all)]);
	* Drop the item 'serial' under the character with amount 'count'. Request target to be aimed at the desired object, if parameters were not specified.
	*/
	DropHere(serial?: string, count?: number): void;

	/**
	* void Orion.MoveItem(['serial'=targetRequest], [count=0(all)], ['container'=backpack], [x=-1, y=-1], [z=0]);
	* Move the object 'serial' with amount 'count' to the container 'container' into coordinates x, y, z (z when throwing on the ground), use target if parameters were not specified.
	*/
	MoveItem(serial?: string, count?: number, container?: string, x?: number, y?: number, z?: number): void;

	/**
	* int Orion.GetDistance('serial');
	* Return distance to the object.
	*/
	GetDistance(serial: string): number;

	/**
	* int Orion.GetDistance(x, y);
	* Return distance to the coordinates.
	*/
	GetDistance(x, y): number;

	/**
	* void Orion.BandageSelf();
	* Bandageself.
	*/
	BandageSelf(): void;

	/**
	* String Orion.ClientLastTarget();
	* Get the state of the global client variable LastTarget.
	* Result: The String with the serial.
	*/
	ClientLastTarget(): string;

	/**
	* void Orion.ClientLastTarget(serial);
	* Set the state of the client global variable LastTarget to the serial.
	*/
	ClientLastTarget(serial: string): void;

	/**
	* String Orion.ClientLastAttack();
	* Get the state of the global client variable LastAttack
	* Result: The String with the serial.
	*/
	ClientLastAttack(): string;

	/**
	* void Orion.ClientLastAttack(serial);
	* Set the state of the global client variable LastAttack to the serial.
	*/
	ClientLastAttack(serial: string): void;

	/**
	* String Orion.TargetSystemSerial();
	* Get the state of the global client variable TargetSystemSerial (from new target system).
	* Result: The String with the serial.
	*/
	TargetSystemSerial(): string;

	/**
	* void Orion.TargetSystemSerial(serial);
	* Set the state of the global client variable TargetSystemSerial (from new target system) to the serial.
	*/
	TargetSystemSerial(serial): void;

	/**
	* void Orion.GetEnemiesStatus();
	* Retrieves statuses of all friends in update range ( required to get updates about their hp etc. ).
	*/
	GetEnemiesStatus(): void;

	/**
	* PositionObject Orion.GetLastTargetPosition();
	* Retrieves latest coordinates of LastTarget, if object has disappeared - it will retrieve last known coordinates.
	* Returns: a PositionObject data type.
	*/
	GetLastTargetPosition(): ObjectCoordinates;

	/**
	* PositionObject Orion.GetLastAttackPosition();
	* Retrieves latest coordinates of LastAttack, if object has disappeared - it will retrieve last known coordinates.
	* Returns: a PositionObject data type.
	*/
	GetLastAttackPosition(): ObjectCoordinates;

	/**
	* bool Orion.OpenContainer('serial', ['delay'=600], ['errorTextPattern']);
	* Open container.
	* @param serial - serial of the container we're opening.
	* @param delay - Maximum delay for container opening action.
	* errorTextPattern - Error text. Default: 'reach that|too away'.
	* Returns: true if container was opened successfully.
	*/
	OpenContainer(serial: string, delay?: number, errorTextPattern?: string): boolean;

	/**
	* bool Orion.ObjectExists('serial');
	* Returns: true if object with 'serial' is present in OA memory.
	*/
	ObjectExists(serial: string): boolean;

	/**
	* String Orion.RequestName('serial', ['delay'=200]);
	* Requests objects name. If the name is already present, it will return immediately. Otherwise name will be requested from the server.
	* @param serial - serial of the object we're requesting name from.
	* @param delay - Max delay for name requesting.
	* Returns: Objects name or an empty String if failed.
	*/
	RequestName(serial: string, delay?: number): string;

	/**
	* bool Orion.GetProfile('serial', ['delay'=300], ['errorTextPattern']);
	* Retrieves characters profile.
	* @param serial - characters serial.
	* @param delay - maximum wait time for profile retrievement.
	* @param errorTextPattern - error pattern, default: 'reach that|too away'.
	* Returns true if a profile was retrieved.
	*/
	GetProfile(serial: string, delay?: number, errorTextPattern?: string): boolean;

	/**
	* void Orion.ShowStatusbar('serial', x, y, [minimized=true]);
	* Show/Move status bar gump in client screen.
	* @param serial - character serial.
	* @param x - screen X coordinate.
	* @param y - screen Y coordinate.
	* minimized - only for your character. true will show minimized status bar, false will show expanded one.
	*/
	ShowStatusbar(serial: string, x: number, y: number, minimized?: boolean): void;

	/**
	* void Orion.CloseStatusbar('serial');
	* Close status bar which belongs to serial.
	*/
	CloseStatusbar(serial: string): void;
}