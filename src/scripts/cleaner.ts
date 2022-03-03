//private fn
function _startUpdateContainerItemsProgress() {
    let isUpdateRunning = Shared.GetVar('updateContainerItemsProgress', false);
    if (isUpdateRunning) {
        return;
    }

    Shared.AddVar('updateContainerItemsProgress', true);
    while (Shared.GetVar('updateContainerItemsProgress')) {
        Orion.AddDisplayTimer('updateContainerItemsProgress', 1500, 'AboveChar', 'bar', 'Loading Container Items', 0, 100, '0x100', 0, 'white');
        Orion.Wait(1500);
    }
}

function _stopUpdateContainerItemsProgress() {
    Shared.AddVar('updateContainerItemsProgress', false);
    Orion.RemoveDisplayTimer('updateContainerItemsProgress');
}

namespace Scripts {

    interface ICleanerItem {
        serial:string,
        graphic:string,
        color:string,
        name:string, // set it just once and dont update that
        container:string, // can be serial of parent container or ground
        nestedItems?:ICleanerItem[] // in case of container type, there can be other items nested
    }

    const BORDEL = 'bordelContainer';
    const UKLID = 'uklidContainer';

    export class Cleaner {

        static nactiUklizenouBednu() {
            const structure = Scripts.Cleaner.loadItemsFromFile();
            Scripts.Utils.createGameObjectSelections([
                {ask: 'Vyber kontejner s uklizenou bednou/containerem', addObject: UKLID}
            ]);

            if (!Orion.GumpExists('container', UKLID)) {
                Orion.OpenContainer(UKLID);
                Orion.Wait(responseDelay);
            }

            const cleanContainerSerial = Orion.FindObject(UKLID).Serial();

            let cleanContainer = Scripts.Cleaner.findNestedContainerBySerial(structure, cleanContainerSerial);
            if (!cleanContainer) {
                cleanContainer = Scripts.Cleaner.createBasicItemStructure(cleanContainerSerial);
                const fullItemStructure = Scripts.Cleaner.createStructureForContainer(cleanContainer);
                structure.push(fullItemStructure);
            }

            if (!Scripts.Cleaner.isContainer(cleanContainer)) {
                Scripts.Utils.log('item neni container', ColorEnum.red);
                throw 'e';
            }

            Scripts.Cleaner.updateContainerItemsWithProgress(cleanContainer);
            Scripts.Cleaner.saveItemsToFile(structure);
        }

        static uklid() {
            const structure = Scripts.Cleaner.loadItemsFromFile();
            Scripts.Utils.createGameObjectSelections([
                {ask: 'Vyber kontejner s bordelem', addObject: BORDEL},
                {ask: 'Vyber kontejner kam uklizet veci', addObject: UKLID}
            ]);
            const cleanContainerSerial = Orion.FindObject(UKLID).Serial();
            const messContainerSerial = Orion.FindObject(BORDEL).Serial();

            const cleanContainer = Scripts.Cleaner.findNestedContainerBySerial(structure, cleanContainerSerial);
            if (!cleanContainer) {
                Scripts.Utils.log('Nejprve by sis mel tuto bednu nacist pomoci _nactiUklizenouBednu');
                return;
            }

            const messContainer = Scripts.Cleaner.loadMessContainer(messContainerSerial);
            // Scripts.Cleaner.updateContainerItemsWithProgress(cleanContainer); //todo pokud by se mel obsah nejprve updatovat
            Scripts.Cleaner.cleanItems(messContainer.nestedItems, cleanContainer);
            Scripts.Cleaner.saveItemsToFile(structure);
        }

        /**
         * Nacita bordel pytel/bednu a veci uvnitr
         * @param messContainerSerial
         */
        static loadMessContainer(messContainerSerial:string):ICleanerItem {
            const messContainer = Scripts.Cleaner.createBasicItemStructure(messContainerSerial);
            Scripts.Cleaner.updateContainerItemsWithProgress(messContainer);
            return messContainer;
        }

        /**
         * Postupne uklidi vsechny itemy, pro ktere najde shodu mezi ulozenymi itemy
         * @param messItems
         * @param cleanItem
         */
        static cleanItems(messItems:ICleanerItem[], cleanItem:ICleanerItem) {
            for (const item of messItems) {
                if (item.nestedItems) {
                    Scripts.Cleaner.cleanItems(item.nestedItems, cleanItem);
                }
                else {
                    const result = Scripts.Cleaner.findSameItemInContainer(item, cleanItem);
                    if (!result) {
                        // Scripts.Utils.log(`${item.name} ${item.serial} nenalezen v uklizene bedne`);
                        continue;
                    }
                    Scripts.Utils.OpenContainerPath(result.path);
                    Scripts.Cleaner.moveItem(item, result.item);
                    Scripts.Cleaner.updateContainerItems(result.parent, false);
                }
            }
        }

        /**
         * Porovnava hledany item s cleanItem a v pripade ze jde o container tak porovnava do hloubky
         * @param findItem
         * @param cleanItem
         */
        static findSameItemInContainer(findItem:ICleanerItem, cleanItem:ICleanerItem):{
            item:ICleanerItem,
            parent:ICleanerItem,
            path:string[]
        }|undefined {
            for (const target of cleanItem.nestedItems) {
                if (target.nestedItems) {
                    const item = Scripts.Cleaner.findSameItemInContainer(findItem, target);
                    if (item) {
                        item.path.unshift(cleanItem.serial);
                        return item;
                    }
                }
                else {
                    if (target.graphic === findItem.graphic && target.color === findItem.color && target.name === findItem.name) {
                        return {item: target, parent: cleanItem, path: [cleanItem.serial]};
                    }
                }
            }
        }

        /**
         * Presune jeden item na druhy
         * @param item
         * @param target
         */
        static moveItem(item:ICleanerItem, target:ICleanerItem) {
            Orion.MoveItem(item.serial, 0, target.serial);
            Orion.Wait(500);
        }

        /**
         * Nacte itemy ze souboru
         */
        static loadItemsFromFile():ICleanerItem[] {
            let data = Scripts.File.loadFile('C:/0git/cleaner.json', config.cleanerFile);
            if (!data) {
                data = '[]';
            }
            const items = JSON.parse(data);
            return items;
        }

        /**
         * Nacte itemy ze souboru
         */
        static saveItemsToFile(structure:ICleanerItem[]) {
            const data = JSON.stringify(structure, null, 2);
            Scripts.File.saveFile(data, 'C:/0git/cleaner.json', config.cleanerFile);
        }

        /**
         * Vrati pole grafik/barev znamych containeru pro dalsi vyuziti pomoci FindType
         */
        static getContainerDefinitions():IMyGameObject[] {
            return [
                // kozene
                {graphic: '0x0E76', color: '0xFFFF'}, // pytel
                {graphic: '0x0E79', color: '0xFFFF'}, // pouch
                {graphic: '0x09B0', color: '!0x0BA6'}, // pouch (nebrat stardust)
                {graphic: '0x0E75|0x09B2', color: '0xFFFF'}, // brasna/batoh

                // bedny
                {graphic: '0x0E40|0x0E41', color: '0x0000|0x0B1C'}, // securka / bezpecna
                {graphic: '0x0E42|0x0E43', color: '0x0000'}, // drevena
                {graphic: '0x0E7C|0x09AB', color: '0x0000'}, // kovova
                {graphic: '0x0E80', color: '0x0000'}, // strong box
                {graphic: '0x09A8', color: '0x049B'}, // bedynka s pokladem (pripadne pridat dalsi barvy, nechci filtrovat animalboxy se spoustou barev)
                {graphic: '0x0E7D|0x09AA', color: '0x0000'}, // drevena reff

                // ostatni
                {graphic: '0x0E3C|0x0E3D|0x0E3E|0x0E3F|0x0E7E|0x09A9', color: '0x0000'}, // krabice (velka|velka|stredni|stredni|mala|mala)
                {graphic: '0x09AC|0x09B1', color: '0x0000'}, // kosik (velky|maly)
                {graphic: '0x0E77|0x0E83|0x0E7F', color: '0x0000'} // sud (velky|stredni|maly)
            ];
        }

        /**
         * Zjisti jestli je item typu container
         * @param item
         */
        static isContainer(item:ICleanerItem):boolean {
            const containerDefinitions = Scripts.Cleaner.getContainerDefinitions();

            for (const def of containerDefinitions) {
                const containerSerials = Orion.FindType(def.graphic, def.color, item.container,
                    undefined, undefined, undefined, false);
                if (containerSerials.indexOf(item.serial) > -1) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Najde v strukture prislusny container item a vrati ho
         * @param structure
         * @param targetContainerSerial
         */
        static findNestedContainerBySerial(structure:ICleanerItem[], targetContainerSerial):ICleanerItem|undefined {
            for (const item of structure) {
                if (item.serial === targetContainerSerial) {
                    return item;
                }
                else if (item.nestedItems) {
                    const itemStructure =  Scripts.Cleaner.findNestedContainerBySerial(item.nestedItems, targetContainerSerial);
                    if (itemStructure) {
                        return itemStructure;
                    }
                }
            }
        }

        /**
         * Vytvori parent strukturu pro container
         * @param itemStructure
         */
        static createStructureForContainer(itemStructure:ICleanerItem):ICleanerItem {
            const ground = '0xFFFFFFFF';
            const bank = Player.BankSerial();

            let parent = itemStructure.container;
            while (parent !== ground && parent !== bank) {
                const parentObj = Orion.FindObject(parent);
                const nestedItems = [];
                nestedItems.push(itemStructure);
                itemStructure = {
                    graphic: parentObj.Graphic(),
                    color: parentObj.Color(),
                    serial: parentObj.Serial(),
                    name: Scripts.Cleaner.getObjectName(parentObj),
                    container: parentObj.Container(),
                    nestedItems
                }

                parent = itemStructure.container;
            }

            return itemStructure;
        }

        static updateContainerItemsWithProgress(container:ICleanerItem) {
            Orion.Exec('_stopUpdateContainerItemsProgress', false);
            Orion.Exec('_startUpdateContainerItemsProgress', false);
            Scripts.Cleaner.updateContainerItems(container);
            Orion.Exec('_stopUpdateContainerItemsProgress', false);
        }


        /**
         * Updatuje strukturu containeru a jeho nested containeru
         * Nacita si informace o vsech zanorenych itemech a doplnuje jmena neznamym itemum
         * @param container
         */
        static updateContainerItems(container:ICleanerItem, recurse = true) {
            const isContainer = Scripts.Cleaner.isContainer(container);

            if (!isContainer) {
                return;
            }

            // jedna se o container, vytvorime tedy nestedItems pole pokud jeste nema
            !container.nestedItems && (container.nestedItems = []);

            // nacteme vsechny itemy uvnitr containeru
            const allItemsSerials = Scripts.Cleaner.getAllItemsSerialsFromContainer(container.serial);

            // odebereme ze struktury ty ktere jiz neexistuji
            container.nestedItems = container.nestedItems.filter((i) => {
                return allItemsSerials.indexOf(i.serial) > -1;
            });

            // pokud nejaky ve strukture chybi, tak ho vytvorime a pridame do nestedItems
            const itemsSerialsToCreate = allItemsSerials.filter((serial) => {
                return !container.nestedItems.some((i) => i.serial === serial);
            });
            for (const serial of itemsSerialsToCreate) {
                container.nestedItems.push(Scripts.Cleaner.createBasicItemStructure(serial));
            }

            // updatneme vsechny nestedItems
            if (recurse) {
                for (const nestedItem of container.nestedItems) {
                    Scripts.Cleaner.updateContainerItems(nestedItem);
                }
            }

            // nakonec container po updatu zavreme
            if (Orion.GumpExists('container', container.serial)) {
                Orion.CloseGump('container', container.serial);
                Orion.Wait(responseDelay);
            }
        }

        /**
         * Otevre container a nacte serialy itemu uvnitr
         * @param container
         */
        static getAllItemsSerialsFromContainer(container:string):string[] {
            if (!Orion.GumpExists('container', container)) {
                Orion.OpenContainer(container);
                Orion.Wait(responseDelay);
            }

            return Orion.FindType('0xFFFF', '0xFFFF', container,
                undefined, undefined, undefined, false);
        }

        /**
         * Vytvori zakladni objektovou strukturu pro item, vcetne jmena, grafiky...
         * @param itemSerial
         */
        static createBasicItemStructure(itemSerial:string):ICleanerItem {
            const itemObj = Orion.FindObject(itemSerial);
            const itemStructure = {
                graphic: itemObj.Graphic(),
                color: itemObj.Color(),
                serial: itemObj.Serial(),
                name: Scripts.Cleaner.getObjectName(itemObj),
                container: itemObj.Container()
            }
            return itemStructure;
        }

        /**
         * Nacte jmeno itemu, pokud neni k dispozici tak klikne a pocka
         * @param itemObject
         */
        static getObjectName(itemObject:GameObject) {
            if (!itemObject.Name()) {
                Orion.Click(itemObject.Serial())
                Orion.Wait(200);
                while (!itemObject.Name()) {
                    Orion.Wait(200);
                }
            }

            return Scripts.Cleaner.truncateName(itemObject.Name());
        }

        /**
         * Odebere text tykajici se poctu, nebo zavorku na konci
         * @param name
         */
        static truncateName(name:string) {
            // todo crafted by xyz ? asi neni potreba, vetsinou se tak dlouhy text neulozi
            name = name.replace(/^\d*\s*/, ''); // '61 mystical stick' -> 'mystical stick'
            name = name.replace(/\s\(.*\)$/, ''); // 'star dust (35 nabiti)' -> 'star dust'
            return name;
        }

    }
}
