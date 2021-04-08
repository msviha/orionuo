export default interface Gumps {
    /**
     * void Orion.HelpGump();
     * Request for the help menu gump of the server.
     */
    HelpGump(): void;

    /**
     * void Orion.InfoGump([index=-1]);
     * Outputs data of a gump by its index. If index equals -1, last gump is taken.
     */
    InfoGump(index: number): void;

    /**
     * GumpHookObjects Orion.CreateGumpHook('index');
     * Creates a gump hook object.
     * index - Return-value of gump button or 'cancel' or a 0 when closing a gump with RMB.
     */
    CreateGumpHook(index: number): GumpHookObject;

    /**
     * void Orion.WaitGump(hook);
     * Enables a gump hook to catch an incomming gump.
     * When new hook is enabled by Orion.WaitGump, it will be added to a stack. All previously enabled hooks will be waiting as well.
     * hook - an object created by Orion.CreateGumpHook.
     */
    WaitGump(hook: GumpHookObject): void;

    /**
     * void Orion.CancelWaitGump();
     * Removes **all **enabled gump hooks .
     */
    CancelWaitGump(): void;

    /**
     * int Orion.GumpCount();
     * Returns the amount of opened gumps from OA memory.
     */
    GumpCount(): number;

    GumpExists(type: string, serial?: string, id?: string): boolean;

    /**
     * GumpObject Orion.GetLastGump();
     * Get last gump sent by server.
     * Returns a GumpObject or a null reference.
     */
    GetLastGump(): GumpObject;

    /**
     * GumpObject Orion.GetGump(index);
     * Get gump by an index.
     * Returns a GumpObject or a null reference.
     */
    GetGump(index: number): GumpObject;

    /**
     * GumpObject Orion.GetGump(serial, id);
     * Get gump by serial and id.
     * Returns a GumpObject or a null reference.
     */
    GetGump(serial, id): GumpObject;

    /**
     * bool Orion.WaitForGump([delay=1000]);
     * Enables a gump hook and blocks thread for 'delay' amount of time in ms. Removes gump hook afterwards.
     * Returns true if a gump was received during delay period.
     */
    WaitForGump(delay?: number): boolean;

    WaitForContainerGump(delay?: number): boolean;

	/**
	 * 	Get gump coordinates in client.
	 *  Result: class object PositionObject, gump coordinates, -1, -1 if there is no gump.
	 * @param type string, gump type;
	 * @param serial  string, gump serial number (only needed for interaction with gumps that have a serial number, for example: containers, statusbars, paperdolls, etc.); Default value: 'any';
	 * @param id string, gump identifier (needed only for interacting with gumps that have an identifier, for example: server gumps, trade gump); Default value: 'any';
	 */
	GetGumpPosition(type:string, serial?: string, id?: string):ObjectCoordinates;
}


