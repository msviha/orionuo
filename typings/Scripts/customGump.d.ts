export default interface CustomGump {
    /**
     * The state of the specified checkbox of the responded custom gump.
     * @param serial
     * Result: boolean, the state of the checkbox with the specified serial number.
     */
    CreateCustomGump(serial:number):CustomGumpObject;

    /**
     * List of indices selected by checkbox from custom gump response.
     * Result: array int, list of indices selected by checkbox.
     */
    Checks():number[];
}
