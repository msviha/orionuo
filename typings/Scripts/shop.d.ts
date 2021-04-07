export default interface Shop {
    /**
     * void Orion.Buy('shopListName', ['vendorName'], [shopDelay=0]);
     * Initiate buying.
     * This will block user input untill completed.
     * If shops buy list has appeared but there are no matches for buying, this process will end and resume accepting user input.
     * If shops buy list doesn't appear, it awaits 'shopDelay' amount of time in ms and blocks user input.
     * @param shopListName - name of the shop list with goods to buy.
     * @param vendorName - name of vendor.
     * @param shopDelay - buying operation delay. Will be measured automatically if passed as 0 or as default based on amount of goods to buy and 'Shop delay for 1 stack' value.
     */
    Buy(shopListName: string, vendorName?: string, shopDelay?: number): void;

    /**
     * void Orion.Sell('shopListName', ['vendorName'], [shopDelay=0]);
     * Initiate selling.
     * This will block user input untill completed.
     * If shops sell list has appeared but there are no matches for selling, this process will end and resume accepting user input.
     * If shops sell list doesn't appear, it awaits 'shopDelay' amount of time in ms and blocks user input.
     * @param shopListName - name of the shop list with goods to sell.
     * @param vendorName - name of vendor.
     * @param shopDelay - selling operation delay. Will be measured automatically if passed as 0 or as default based on amount of goods to sell and 'Shop delay for 1 stack' value.
     */
    Sell(shopListName: string, vendorName?: string, shopDelay?: number): void;

    /**
     * bool Orion.WaitForShop([delay=1000]);
     * Await for a shop gump for a given 'delay' amount of time and blocking script execution.
     * Returns true if a shop gump was received during this period.
     */
    WaitForShop(delay?: number): boolean;
}
