export default interface Equipment {
    /*
     * void Orion.SetDressBag(['serial'=targetRequest]);
     * Change the serial of bag for clothes on "serial".
     * Request target to be aimed at the desired object, if parameters were not specified.
     */
    SetDressBag(serial?: string): void;

    /*
     * void Orion.UnsetDressBag();
     * Reset the serial of bag.
     */
    UnsetDressBag(): void;

    /*
     * void Orion.SetArm('setName');
     * Set the weapon/shield.
     */
    SetArm(setName: string): void;

    /*
     * void Orion.UnsetArm('setName');
     * Clear setName.
     */
    UnsetArm(setName: string): void;

    /*
     * void Orion.SetDress('setName');
     * Set the clothes in the 'setName' (except weapons and shields).
     */
    SetDress(setName: string): void;

    /*
     * void Orion.UnsetDress('setName');
     * Clear setName.
     */
    UnsetDress(setName: string): void;

    /*
     * void Orion.Arm('setName');
     * Dress setName.
     * Before dressing, if the option of safe dressing is turned on, removes all clothes in layers 1/2 (left and right hand) and then the rest.
     */
    Arm(setName: string): void;

    /*
     * void Orion.Disarm();
     * Disarm your weapon/shield.
     */
    Disarm(): void;

    /*
     * void Orion.Dress('setName');
     * Dress setName.
     * Before dressing, if the option of safe dressing is turned on, removes all clothes in layers 1/2 (left and right hand) and then the rest.
     */
    Dress(setName: string): void;

    /*
     * void Orion.Undress();
     * Take off all but the weapons and shields.
     */
    Undress(): void;

    /*
     * void Orion.Unequip('layerName');
     * Remove the object from the specified layer.
     */
    Unequip(layerName: string): void;

    /*
     * void Orion.Equip('serial');
     * Dress the specified item.
     */
    Equip(serial: string): void;

    /*
     * void Orion.EquipT('graphic', ['color'=0xFFFF]);
     * Find the item in the character backpack/sub-packs and bags with the type "graphic" and "color" (if required) and dress them.
     */
    EquipT(graphic: string | number, color?: string | number): void;
}
