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
            Scripts.Utils.playerPrint(`Kde je container se surovinami ?`);
            Orion.WaitForAddObject('resourcesContainer', 60000);
            Orion.UseObject('resourcesContainer');
            Scripts.Utils.playerPrint(`Kam hazet hotove vyrobky ?`);
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
            const itemName = resourcePath.replace(/[^.]*\.[^.]*\./, '');

            let missingCount = Scripts.Utils.refill(res, 'resourcesContainer', count, 'backpack', false, itemName);
            if (missingCount && res.make) {
                Scripts.Crafting.make(missingCount, resourcePath, false);
                Orion.Wait(responseDelay);
                missingCount = Scripts.Utils.refill(res, 'resourcesContainer', missingCount, 'backpack', false, itemName);
            }

            if (missingCount) {
                Scripts.Utils.log(`nemas dostatek ${itemName}`, ColorEnum.red);
                throw `nemas dostatek ${itemName}`;
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
            const itemName = objectAsString.replace(/[^.]*\.[^.]*\./, '');

            if (!itemObject.make) {
                Scripts.Utils.log(`${itemName} nelze vyrobit`, ColorEnum.red);
                throw `${itemName} nelze vyrobit`;
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
                }
                if (success) {
                    count -= itemObject.make.outputCount || 1;
                    finishedCount++;
                    const item = Scripts.Utils.findFirstType(itemObject);
                    setInputs && Orion.MoveItem(item, 1,  'outputContainer');
                    Orion.Wait(responseDelay);
                }
                Scripts.Utils.log(`vyrobeno ${itemName} - ${finishedCount} / ${++totalTries}`);
            }
        }

        static countMaterialForOneItem(objectAsString:string, callStack = 0, count = 1, crafting = true) {
            const itemObject = Scripts.Utils.parseObject(objectAsString);

            if (!itemObject.make) {
                return;
            }
            const currentItemName = objectAsString.replace(/[^.]*\.[^.]*\./, '');

            const tab = '   ';
            let space = '';
            for (let i = 0; i < callStack; i++) {
                space += tab;
            }

            if (crafting) {
                Orion.Print(ColorEnum.red, `${space}Na vyrobu ${count}x ${currentItemName} budes potrebovat:`);
            }

            if (itemObject.make.refill?.crafting) {
                for (const ref of itemObject.make.refill?.crafting) {
                    const refItemName = ref.item.replace(/[^.]*\.[^.]*\./, '');
                    Orion.Print(ColorEnum.none, `${space}${ref.count * count}x ${refItemName}`);
                    Scripts.Crafting.countMaterialForOneItem(ref.item, callStack + 1, ref.count * count, true);
                }
            }
            if (itemObject.make.refill?.resources) {
                for (const ref of itemObject.make.refill?.resources) {
                    const refItemName = ref.item.replace(/[^.]*\.[^.]*\./, '');
                    Orion.Print(ColorEnum.none, `${space}${ref.count * count}x ${refItemName}`);
                    Scripts.Crafting.countMaterialForOneItem(ref.item, callStack + 1, ref.count * count, false);
                }
            }
        }

        static makeFromSelection() {
            const pathAsString = Shared.GetVar('currentListMakeItemPath');
            if (!pathAsString) {
                return;
            }
            Scripts.Crafting.countMaterialForOneItem(pathAsString);
            Scripts.Utils.playerPrint(`${pathAsString}`, ColorEnum.red);
            Scripts.Utils.playerPrint('Kolik chces vyrobit ?');
            Orion.ClearJournal();
            while (!Orion.InJournal('','my')) {
                Orion.Wait(500);
            }
            const text = Orion.InJournal('', 'my')?.Text();
            if (!text) {
                return;
            }
            const count = parseInt(text.replace(Player.Name() + ':', ''), 10);
            Orion.Print(-1, typeof count);
            Orion.Print(-1, count.toString());
            Scripts.Crafting.make(count, pathAsString);
        }

        static listMakeMenu() {
            const timer = Orion.Timer('listMakeMenuTimer');

            let highlightIndex:number|undefined;
            let list:any[];

            if (timer === -1 || timer > 3000) {
                Shared.AddVar('currentListMakeItemPath', 'gameObject.crafting')
                highlightIndex = undefined;
                list = [];
                for (const item in gameObject.crafting) {
                    list.push(item);
                }
                Shared.AddArray('listMakeMenu', list);
            }
            else {
                highlightIndex = Shared.GetVar('highlightIndex');
                list = Shared.GetArray('listMakeMenu');
            }

            Scripts.Utils.resetTimer('listMakeMenuTimer');

            if (list.length < 5) {
                highlightIndex = highlightIndex === undefined || highlightIndex + 1 === list.length ? 0 : highlightIndex + 1;
            }
            else {
                highlightIndex = 2;
                const temp = list.shift();
                list.push(temp);
                Shared.AddArray('listMakeMenu', list);
            }

            Shared.AddVar('highlightIndex', highlightIndex);
            let i = 0;
            for (i; i < list.length && i < 5; i++) {
                Scripts.Utils.playerPrint(list[i], i === highlightIndex ? ColorEnum.red : ColorEnum.none);
            }
            for (i; i < 5; i++) {
                Scripts.Utils.playerPrint('');
            }
        }

        static confirmMakeMenu() {
            if (typeof Shared.GetVar('highlightIndex') !== 'number' || !Shared.GetArray('listMakeMenu')?.length) {
                return;
            }

            const currentItemAsString = Shared.GetVar('currentListMakeItemPath', 'gameObject.crafting');
            const currentItem = Scripts.Utils.parseObject(currentItemAsString);
            const highlightIndex = Shared.GetVar('highlightIndex');
            const list = Shared.GetArray('listMakeMenu');
            const newItem = currentItem[list[highlightIndex]];

            Shared.AddVar('currentListMakeItemPath', currentItemAsString + '.' + list[highlightIndex]);
            if (!newItem.make) {
                const newList = [];
                for (const item in newItem) {
                    newList.push(item);
                }
                Shared.AddArray('listMakeMenu', newList);
                Shared.AddVar('highlightIndex', undefined);
                Scripts.Crafting.listMakeMenu();
            }
            else {
                Scripts.Crafting.makeFromSelection();
            }
        }
    }
}
