namespace Scripts {

    /**
     * Scripty na vyrobu cehokoliv
     *
     * stability beta
     *
     * hlavni script na vyrobu je - Scripts.Crafting.Make
     * example - Scripts.Crafting.Make(o.crafting.tinkering.wires.copper, 5)
     */
    export class Crafting {

        /**
         * Creates globals for setting the containers with resources and the finished items
         * @param itemName name of the item which will be crafted
         */
        static setInputs(itemName:string) {
            Scripts.Utils.playerPrint(`Target container with resources for making "${itemName}"`);
            Orion.WaitForAddObject('resourcesContainer', 60000);
            Orion.UseObject('resourcesContainer');
            Scripts.Utils.playerPrint(`Target your container where to put finished "${itemName}"`);
            Orion.WaitForAddObject('outputContainer', 60000);
        }

        /**
         * Waits for the journal message with the crafting status
         * @returns {boolean} success/fail
         */
        static makeProgress():boolean {
            Orion.ClearJournal();
            Scripts.Utils.waitWhileSomethingInJournal(['You fail', 'You put', 'failed']);
            return !!Orion.InJournal('You put');
        }

        /**
         * Refills the resources for crafting, or creates them, if they are not present
         * @param count number of resources
         * @param resourcePath objectAsString which targets the resource from the global object 'o'
         */
        static refOrMake(count:number, resourcePath:string) {
            const res = Scripts.Utils.parseObject(resourcePath);
            const missingCount = Scripts.Utils.refill(res, 'resourcesContainer', count, 'backpack');
            if (missingCount) {
                Scripts.Crafting.make(missingCount, resourcePath, false);
                Orion.Wait(responseDelay);
                Scripts.Utils.refill(res, 'resourcesContainer', count, 'backpack');
            }
        }

        /**
         * Main function for crafting
         * @param count number of items to be successfully crafted
         * @param objectAsString object from the global 'o' which will be crafted
         * @param setInputs defines whether the function should ask for the containers (resources & finished)
         */
        static make(count:number, objectAsString:string, setInputs = true) {
            Orion.ClearJournal();
            const itemObject = Scripts.Utils.parseObject(objectAsString);
            if (!itemObject.make) {
                Scripts.Utils.log(`cant make/refill ${objectAsString}`, ColorEnum.red);
                throw `cant make/refill ${objectAsString}`;
            }
            if (!isMakeProps(itemObject.make)) {
                throw `!isMakeProps`;
            }
            if (setInputs) {
                Scripts.Crafting.setInputs(objectAsString);
            }

            let finishedCount = 0;
            let totalTries = 0;
            while (count > 0) {
                Scripts.Utils.worldSaveCheckWait();
                if (itemObject.make.refill?.crafting) {
                    for (const ref of itemObject.make.refill?.crafting) {
                        Scripts.Crafting.refOrMake(ref.count, ref.item);
                    }
                }
                if (itemObject.make.refill?.resources) {
                    for (const ref of itemObject.make.refill?.resources) {
                        Scripts.Crafting.refOrMake(ref.count, ref.item);
                    }
                }
                Orion.ClearJournal();
                Scripts.Utils.selectMenu(itemObject.make.menu.name, itemObject.make.menu.selections);
                const tool = Scripts.Utils.parseObject(itemObject.make.tool);
                Orion.UseType(tool.graphic, tool.color);

                const success = Scripts.Crafting.makeProgress();
                if (success) {
                    count -= itemObject.make.outputCount || 1;
                    finishedCount++;
                    const item = Orion.FindType(itemObject.graphic, itemObject.color)[0];
                    Orion.MoveItem(item, 1, setInputs ? 'outputContainer' : 'resourcesContainer');
                    Orion.Wait(responseDelay);
                }
                Scripts.Utils.log(`vyrobeno ${finishedCount} / ${++totalTries}`);
            }
        }

    }
}
