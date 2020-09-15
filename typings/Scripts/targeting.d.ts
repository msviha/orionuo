export default interface Targeting {
	/**
	* bool Orion.HaveTarget();
	* Have a target.
	* Resul: true if target is on.
	*/
	HaveTarget(): boolean;

	/**
	* void Orion.WaitTargetObject('serial');
	* Set the target trap for object(s) serial.
	*/
	WaitTargetObject(serial: string): void;

	/**
	* void Orion.WaitTargetType('graphic', ['color'=0xFFFF], ['container'=self], ['flags'], [recurse=true]);
	* Set the target trap for object, found by searching container.
	* @param graphic - Type or type list for search. 0xFFFF ignored.
	* @param color - Colour or Colour list for search. 0xFFFF ignored.
	* @param container - Searched Container.
	* @param flags - Flag Search Filters.
	* @param recurse - Recursive Search in subcontainers.
	*/
	WaitTargetType(graphic: string | number, color?: string | number, container?: string, flags?: string, recurse?: boolean): void;

	/**
	* void Orion.WaitTargetGround('graphic', ['color'=0xFFFF], ['distance'=searchObjectsDistance], ['flags']);
	* Set the target trap for object found by search on the ground.
	* @param graphic - Type or type list for search. 0xFFFF ignored.
	* @param color - Colour or Colour list for search. 0xFFFF ignored.
	* @param distance - Search Distance.
	* @param flags - Flag Search Filters.
	*/
	WaitTargetGround(graphic: string | number, color?: string | number, distance?: string, flags?: string): void;

	/**
	* void Orion.WaitTargetTypeList('findListName', ['container'=self], ['flags'], [recurse=true]);
	* Set the target trap for object, found by searching container.
	* @param findListName - Search list name.
	* @param container - Container being searched.
	* @param flags - Flag Search Filters.
	* @param recurse - Recursive Search in subcontainers.
	*/
	WaitTargetTypeList(findListName: string, container?: string, flags?: string, recurse?: boolean): void;

	/**
	* void Orion.WaitTargetGroundList('findListName', ['distance'=searchObjectsDistance], ['flags']);
	* Set the target trap for object found by searching the ground.
	* @param findListName - Search list name.
	* @param distance - Search Distance.
	* @param flags - Flag Search Filters.
	*/
	WaitTargetGroundList(findListName: string, distance?: string, flags?: string): void;

	/**
	* void Orion.WaitTargetTile('graphic', [x, y, z]);
	* Set the target trap on the ground.
	* @param graphic - type of the tile, might be lasttile
	* @param x - World X coordinate
	* @param y - World Y coordinate
	* @param z - World Z coordinate
	*/
	WaitTargetTile(graphic: string | number, x?:number, y?:number, z?:number): void;

	/**
	* void Orion.WaitTargetTileRelative('graphic', [x, y, z]);
	* Set the target trap on the ground, against Character.
	* @param graphic - type of the tile, might be lasttile
	* @param x - X coordinate bias in the world
	* @param y - Y coordinate bias in the world
	* @param z - Z coordinate bias in the world
	*/
	WaitTargetTileRelative(graphic: string | number, x, y, z): void;

	/**
	* void Orion.CancelWaitTarget();
	* Cancel of the current wait of the target.
	*/
	CancelWaitTarget(): void;

	/**
	* void Orion.TargetObject('serial');
	* Point the target on a serial object.
	*/
	TargetObject(serial: string): void;

	/**
	* void Orion.TargetType('graphic', ['color'=0xFFFF], ['container'=self], ['flags'], [recurse=true]);
	* Point the target on the object found by searching container.
	* @param graphic - Type or type list for search. 0xFFFF ignored.
	* @param color - Colour or Colour list for search. 0xFFFF ignored.
	* @param container - Searched Container.
	* @param flags - Flag Search Filters.
	* @param recurse - Recursive Search in subcontainers.
	*/
	TargetType(graphic: string | number, color?: string | number, container?: string, flags?: string, recurse?: boolean): void;

	/**
	* void Orion.TargetGround('graphic', ['color'=0xFFFF], ['distance'=searchObjectsDistance], ['flags']);
	* Point the target on the object found by searching the ground.
	* @param graphic - Type or type list for search. 0xFFFF ignored.
	* @param color - Colour or Colour list for search. 0xFFFF ignored.
	* @param distance - Search Distance.
	* @param flags - Flag Search Filters.
	*/
	TargetGround(graphic: string | number, color?: string | number, distance?: string, flags?: string): void;

	/**
	* void Orion.TargetTypeList('findListName', ['container'=self], ['flags'], [recurse=true]);
	* Point the target on the object found by serching container.
	* @param findListName - Search list name.
	* @param container - Container being searched.
	* @param flags - Flag Search Filters.
	* @param recurse - Recursive Search in subcontainers.
	*/
	TargetTypeList(findListName: number, container?: string, flags?: string, recurse?: boolean): void;

	/**
	* void Orion.TargetGroundList('findListName', ['distance'=searchObjectsDistance], ['flags']);
	* Point the target on the object found by searching the ground.
	* @param findListName - Search list name.
	* @param distance - Search Distance.
	* @param flags - Flag Search Filters.
	*/
	TargetGroundList(findListName: string, distance?: string, flags?: string): void;

	/**
	* void Orion.TargetTile('graphic', [x, y, z]);
	* Point target on a ground.
	* @param graphic - type of the tile, might be lasttile
	* @param x - World X coordinate
	* @param y - World Y coordinate
	* @param z - World Z coordinate
	*/
	TargetTile(graphic: string | number, x, y, z): void;

	/**
	* void Orion.TargetTileRelative('graphic', [x, y, z]);
	* Point target on a ground against Character.
	* @param graphic - type of the tile, might be lasttile
	* @param x - X coordinate bias in the world
	* @param y - Y coordinate bias in the world
	* @param z - Z coordinate bias in the world
	*/
	TargetTileRelative(graphic: string | number, x, y, z): void;

	/**
	* bool Orion.ValidateTargetTile('graphicOrFlags', x, y);
	* This function checks if targeted tile is valid for targeting.
	* @param graphicOrFlags - tile type by graphic id or flags.
	* @param x - X coordinate on the map.
	* @param y - Y coordinate on the map.
	* Returns true if tile is valid for targeting.
	*/
	ValidateTargetTile(graphicOrFlags: string, x: number, y: number): boolean;

	/**
	* bool Orion.ValidateTargetTileRelative('graphicOrFlags', x, y);
	* This function checks if targeted tile( relative to character position on the map ) is valid for targeting.
	* @param graphicOrFlags - tile type by graphic id or flags.
	* @param y - Y offset on the map.
	* Returns true if tile is valid for targeting.
	*/
	ValidateTargetTileRelative(graphicOrFlags: string, x: number, y: number): boolean;

	/**
	* void Orion.CancalTarget();
	* Cancels current target ( if present in client ).
	*/
	CancelTarget(): void;

	/**
	* bool Orion.WaitForTarget([delay=1000]);
	* Awaits ( blocks execution ) for a target for 'delay' amount of time.
	* If client had a target already, immediately returns true.
	*/
	WaitForTarget(delay?: number): boolean;

	/**
	* int Orion.GetTargetType();
	* Get type of target.
	* Returns: 0 if there's no target, 1 - neutral, 2 - harmful, 3 - helpful.
	*/
	GetTargetType(): number;
}
