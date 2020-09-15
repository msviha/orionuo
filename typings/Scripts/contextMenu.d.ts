export default interface ContextMenu {
	/**
	* void Orion.RequestContextMenu('serial');
	* Send a context menu request for given serial.
	*/
	RequestContextMenu(serial: string): void;

	/**
	* void Orion.WaitContextMenu('serial', index);
	* Add context menu wait hook.
	* serial - serial of context menu object. If serial equals 0, serial check will be ignored.
	* index - index of context menu choice, starting with 0.
	*/
	WaitContextMenu(serial: string, index: number): void;

	/**
	* void Orion.CancelContextMenu();
	* Cancel all context menu hooks.
	*/
	CancelContextMenu(): void;

	/**
	* bool Orion.WaitForContextMenu([delay=1000]);
	* Awaits context menu for 'delay' amount of time in ms.
	* Returns true is context menu was received during this period.
	*/
	WaitForContextMenu(delay?: number): boolean;
}