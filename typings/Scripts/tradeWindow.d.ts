export default interface TradeWindow {
    /**
     * int Orion.TradeCount();
     * Result: the amount of open menus.
     */
    TradeCount();

    /**
     * String Orion.TradeContainer('index', 'container');
     * Get the container serial of the trade window with the index 'index' (from 0 to TradeCount () - 1) (or using the serial index 0x12345678).
     * @param container - Window identifier, right ('right' or '1') or left ('left' or '0').
     * Result: serial of the container.
     */
    TradeContainer(index: string, container: string);

    /**
     * String Orion.TradeOpponent('index');
     * Get an opponent's serial of the trade window with the index 'index' (from 0 to TradeCount () - 1) (or using the serial index 0x12345678).
     * Result: opponent's serial.
     */
    TradeOpponent(index: string);

    /**
     * String Orion.TradeName('index');
     * Get the opponent's name of the trade window with the index 'index' (from 0 to TradeCount () - 1) (or using the serial index 0x12345678).
     * Result: opponent's name.
     */
    TradeName(index: string);

    /**
     * bool Orion.TradeCheckState('index', 'container');
     * Obtain the status (confirmation) of the transaction in the trade window with the index 'index' (from 0 to TradeCount () - 1) (or using serial number index 0x12345678).
     * @param container - Window identifier, right ('right' or '1') or left ('left' or '0').
     * Result: the status of the checkbox is true / false.
     */
    TradeCheckState(index: string, container: string);

    /**
     * void Orion.TradeCheck('index', state);
     * Change the transaction confirmation status in the trade window with the index 'index' (from 0 to TradeCount () - 1) (or using serial number index 0x12345678).
     * @param state - new state, true (tick) or false (uncheck).
     */
    TradeCheck(index: string, state);

    /**
     * void Orion.TradeClose('index');
     * Close the trade window with the index 'index' (from 0 to TradeCount () - 1) (or using the serial index 0x12345678).
     */
    TradeClose(index: string);

    /**
     * bool Orion.WaitForTrade([delay=1000]);
     * Await for a trade window for a given 'delay' amount of time and blocking script execution.
     * Returns true if a trade window was received during this period.
     */
    WaitForTrade(delay?: number);
}
