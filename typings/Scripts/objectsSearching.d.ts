export default interface ObjectsSearching {
    /**
     * void Orion.UseType('graphic', ['color'=0xFFFF], ['container'=self], [recurse=true]);
     * Search for an object by type and color in the container.
     * @param graphic Type or list of types. 0xFFFF is ignored.
     * @param color The color or list of colors. 0xFFFF is ignored.
     * @param container - The container in which the search is performed.
     * @param recurse - Recursive search for sub-containers.
     */
    UseType(graphic: string | number, color?: string | number, container?: string, recurse?: boolean): void;

    /**
     * void Orion.UseFromGround('graphic', ['color'=0xFFFF], ['distance'=useObjectsDistance], ['flags']);
     * Search for an object by type and color on the ground.
     * @param graphic - Type or list of types. 0xFFFF is ignored.
     * @param colorcolor - The color or list of colors. 0xFFFF is ignored.
     * @param distance - The search distance.
     * @param flags - Search filter flags.
     */
    UseFromGround(graphic: string | number, color?: string | number, distance?: number | string, flags?: string): void;

    /**
     * bool Orion.UseTypeList('listName', ['container'=self], [recurse=true]);
     * Search for an object from the find list in the container.
     * @param listName - The name of the find list.
     * @param container - The container in which the search is performed.
     * @param recurse - Recursive search for sub-containers.
     * @param Result: true if the object was found and used.
     */
    UseTypeList(listName: string, container?: string, recurse?: boolean): boolean;

    /**
     * bool Orion.UseFromGroundList('listName', ['distance'=useObjectsDistance], ['flags']);
     * Search for an object on the find list on the ground.
     * @param listName - The name of the find list.
     * @param distance - The search distance.
     * @param flags - Search filter flags.
     * Result: true if the object was found and used.
     */
    UseFromGroundList(listName: string, distance?: number | string, flags?: string): boolean;

    /**
     * StringList Orion.FindType('graphic', ['color'=0xFFFF], ['container'=backpack], ['flags'], ['distance'=searchObjectsDistance], ['notoriety'], [recurse=true]);
     * Search for an object by type and color.
     * @param graphic - Type or list of types. 0xFFFF is ignored.
     * @param color - The color or list of colors. 0xFFFF is ignored.
     * @param container - The container in which the search is performed.
     * @param flags - Search filter flags.
     * @param distance - The search distance.
     * @param notoriety - Wickedness of the desired character.
     * @param recurse - Recursive search for sub-containers.
     * Result: List of found serials.
     */
    FindType(
        graphic: string | number,
        color?: string | number,
        container?: string,
        flags?: string,
        distance?: number | string,
        notoriety?: string,
        recurse?: boolean,
    ): Array<string> | null;

    /**
     * StringList Orion.FindType('graphic', ['color'=0xFFFF], ['container'=backpack], ['flags'], ['distance'=searchObjectsDistance], ['notoriety'], [recurse=true]);
     * Search for an object by type and color.
     * @param graphic - Type or list of types. 0xFFFF is ignored.
     * @param color - The color or list of colors. 0xFFFF is ignored.
     * @param container - The container in which the search is performed.
     * @param flags - Search filter flags.
     * @param distance - The search distance.
     * @param notoriety - Wickedness of the desired character.
     * @param recurse - Recursive search for sub-containers.
     * Result: List of found serials.
     */
    FindTypeEx(
        graphic: string | number,
        color?: string | number,
        container?: string,
        flags?: string,
        distance?: number | string,
        notoriety?: string,
        recurse?: boolean,
    ): Array<GameObject> | null;

    /**
     * void Orion.Ignore('serial', [state=true]);
     * Set / remove the ignore flag on the serial object.
     */
    Ignore(serial: string, state?: boolean);

    /**
     * void Orion.IgnoreReset();
     * Remove the ignore flag from all objects.
     */
    IgnoreReset(): void;

    /**
     * GameObject Orion.FindObject('serial');
     * Result: an object of type GameObject or null.
     */
    FindObject(serial: string): GameObject | null;

    /**
     * int Orion.Count('graphic', ['color'=0xFFFF], ['container'=self], ['distance'=searchObjectsDistance], [recurse]);
     * Returns the total number of items (the number of items, not the number of objects found).
     * @param graphic - Type or list of types. 0xFFFF is ignored.
     * @param color - The color or list of colors. 0xFFFF is ignored.
     * @param container - The container in which the search is performed.
     * @param distance - The search distance.
     * @param recurse - Recursive search for sub-containers.
     * @param Result: the amount of items.
     */
    Count(
        graphic: string | number,
        color?: string | number,
        container?: string,
        distance?: number | string,
        recurse?: boolean,
    ): number;

    /**
     * void Orion.ResetIgnoreList();
     * Reset the use of the ignore list.
     */
    ResetIgnoreList();

    /**
     * void Orion.UseIgnoreList('listName');
     * Use ignore list listName.
     */
    UseIgnoreList(listName: string);

    /**
     * StringList Orion.FindList('listName', ['container'=backpack], ['flags'], ['distance'=searchObjectsDistance], ['notoriety'], [recurse=true]);
     * Search for an object in the find list.
     * @param listName - The name of the find list.
     * @param container - The container in which the search is performed.
     * @param flags - Search filter flags.
     * @param distance - The search distance.
     * @param notoriety - Wickedness of the desired character.
     * @param recurse - Recursive search for sub-containers.
     */
    FindList(
        listName: string,
        container?: string,
        flags?: string,
        distance?: number | string,
        notoriety?: string,
        recurse?: boolean,
    ): Array<string> | null;

    /**
     * GameObject Orion.ObjAtLayer('layerName', ['serial'=self]);
     * Result: an object of type GameObject in the specified layer of the object 'serial' or null.
     */
    ObjAtLayer(layer: string | number, serial?: string): GameObject;

    /**
     * String Orion.FindFriend(['flags'=fast], ['distance'=searchObjectsDistance]);
     * Searching for a friend serial from friends list.
     * @param flags - Searching filter flags.
     * @param distance - Searching distance.
     */
    FindFriend(flags?: string, distance?: number | string): string;

    /**
     * String Orion.FindEnemy(['flags'=fast], ['distance'=searchObjectsDistance]);
     * Searching for an enemy serial from enemies list.
     * @param flags - Searching filter flags.
     * @param distance - Searching distance.
     */
    FindEnemy(flags?: string, distance?: number | string): string;
}
