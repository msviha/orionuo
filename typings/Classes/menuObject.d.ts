 declare interface MenuObject {
	/**
	* String menu.Serial();
	* Result: Menu serial number.
	*/
	Serial(): string;

	/**
	* String menu.ID();
	* Result: Menu identifier number.
	*/
	ID(): string;

	/**
	* String menu.Name();
	* Result: Menu name.
	*/
	Name(): string;

	/**
	* bool menu.IsGrayMenu();
	* Result: Gray Menu (chart) or normal.
	*/
	IsGrayMenu(): boolean;

	/**
	* void menu.Select(index);
	* Choose menu by index element under current menu.
	*/
	Select(index: number): void;

	/**
	* void menu.Select('name');
	* Choose menu by item name under current menu.
	*/
	Select(name: string): void;

	/**
	* void menu.Close();
	* Close current menu without changes.
	*/
	Close(): void;

	/**
	* int menu.ItemsCount();
	* Result: Item quantity in the menu.
	*/
	ItemsCount(): number;

	/**
	* int menu.ItemID(index);
	* Result: ID of an item menu under specified index.
	*/
	ItemID(index: number): number;

	/**
	* String menu.ItemGraphic(index);
	* Result: Graphic of an item menu under specified index.
	*/
	ItemGraphic(index: number): string;

	/**
	* String menu.ItemColor(index);
	* Result: Color of an item menu under specified index.
	*/
	ItemColor(index: number): string;

	/**
	* String menu.ItemName(index);
	* Result: Name of an item menu under specified index.
	*/
	ItemName(index: number): string;
}