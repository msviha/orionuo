export default interface Collections {
    /**
     * void Orion.AddType('typeName', ['typeValue'=targetRequest]);
     * Add type or select type (if typeValue isn't suggested).
     */
    AddType(typeName: string, typeValue?: string): void;

    /**
     * void Orion.RemoveType('typeName');
     * Delete type.
     */
    RemoveType(typeName: string): void;

    /**
     * void Orion.AddObject('objectName', ['objectValue'=targetRequest]);
     * Add object or select object (if objectValue isn't suggested)
     */
    AddObject(objectName: string, objectValue?: string): void;

    /**
     * Add Fake map object
     */
    AddFakeMapObject(serial: string|number, graphic: string, color: string, x: number, y: number, z: number): void;

    AddFakeMapObject(
        serial: string,
        graphic: string,
        color: string,
        x: number,
        y: number,
        z: number,
        map: string,
    ): void;

    AddFakeMapObject(
        serial: string,
        graphic: string,
        color: string,
        x: number,
        y: number,
        z: number,
        timeToLive: number,
        map?: string,
    ): void;

    /**
     * Remove Fake map object
     */
    RemoveFakeMapObject(serial: string|number): void;

    /**
     * Delete the previous alias of the object, call the scope to specify a new one manually and wait for the selection (or timeout).
     * Result: integer, 0 - cancel / timeout; 1 - selection of a game object; 2 - selection of a static object; 3 - land selection.
     */
    WaitForAddObject(objectName: string, timer?: string | number): number;

    /**
     * void Orion.RemoveObject('objectName');
     * Delete object.
     */
    RemoveObject(objectName: string): void;

    /**
     * void Orion.AddFindList(['listName'=targetRequest], ['graphic', 'color'], ['comment']);
     * Add object properties or select to add object properties to Find list.
     * @param listName - list name. If not suggested - target selection appears to add properties to the currently selected element from the list(on the list tab), without auto-save.
     * @param graphic - object type.
     * @param color - object color.
     * @param comment - a comment, which will be displayed in the list.
     */
    AddFindList(listName?: string, graphic?: string | number, color?: string | number, comment?: string);

    /**
     * void Orion.ClearFindList('listName');
     * Delete search list with all it's content.
     * @param listName - list name.
     */
    ClearFindList(listName: string): void;

    /**
     * void Orion.AddIgnoreListObject(['listName'=targetRequest], ['serial'], ['comment']);
     * Add object to ignore list.
     * @param listName - list name.
     * @param serial - serial of the object..
     * @param comment - a comment, which will be displayed in the list.
     */
    AddIgnoreListObject(listName?: string, serial?: string, comment?: string): void;

    /**
     * void Orion.AddIgnoreList(['listName'=targetRequest], ['graphic', 'color'], ['comment']);
     * Add object properties or target selection appears to add object properties to the ignore list.
     * @param listName - list name. If not suggested - target selection appears to add properties to the currently selected element from the list(on the list tab), without auto-save
     * @param graphic - Тип объекта.
     * @param color- object color.
     * @param comment - a comment, which will be displayed in the list.
     */
    AddIgnoreList(listName?: string, graphic?: string | number, color?: string | number, comment?: string): void;

    /**
     * void Orion.ClearIgnoreList('listName');
     * Delete search list with all it's content.
     * @param listName - list name.
     */
    ClearIgnoreList(listName: string): void;

    /**
     * StringList Orion.GetFriendList();
     * Return string list with friends id's.
     */
    GetFriendList(names?: boolean): Array<string>;

    /**
     * StringList Orion.GetEnemyList();
     * Return string list with enemies id's.
     */
    GetEnemyList(): Array<string>;

    GetFriendsStatus(): void;

    /**
     * void Orion.AddFriend('friendName', ['serial'=targetRequest]);
     * Add a friend or select one to add by a target if there's no 'serial' argument.
     */
    AddFriend(friendName: string, serial?: string): void;

    /**
     * void Orion.RemoveFriend('friendName');
     * Remove a friend from friends list.
     */
    RemoveFriend(friendName: string): void;

    /**
     * void Orion.ClearFriendList();
     * Clear friends list.
     */
    ClearFriendList(): void;

    /**
     * void Orion.AddEnemy('enemyName', ['serial'=targetRequest]);
     * Add an enemy or select one to add by a target if there's no 'serial' argument.
     */
    AddEnemy(enemyName: string, serial?: string): void;

    /**
     * void Orion.RemoveEnemy('enemyName');
     * Remove an enemy from enemies list.
     */
    RemoveEnemy(enemyName: string): void;

    /**
     * void Orion.ClearEnemyList();
     * Clear enemies list.
     */
    ClearEnemyList(): void;

    /**
     * void Orion.SetGlobal(name, value);
     * Set a global variable. Value data type is always a string.
     */
    SetGlobal(name, value): void;

    /**
     * String Orion.GetGlobal(name);
     * Retrieve value ( string data type ) of a global variable
     * Returns value of the variable or an empty string is no variable is found with such name.
     */
    GetGlobal(name): string;

    /**
     * void Orion.ClearGlobals();
     * Clear global variables list.
     */
    ClearGlobals(): void;
}
