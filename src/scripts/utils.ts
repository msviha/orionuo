namespace Scripts {
    /**
     * Obsahuje pouze pomocne funkce pro ostatni scripty
     */
    export class Utils {
        static selectMenu(
            menuName: string | ISpecialSelection,
            selections: Array<string | ISpecialSelection>,
            firstCall = true,
        ) {
            if (!selections || !selections.length) {
                return;
            }
            const s = [...selections];
            firstCall && Orion.CancelWaitMenu();
            Scripts.Utils.worldSaveCheckWait();
            const menuToSelect = s[0];
            Orion.WaitMenu(
                typeof menuName === 'string' ? menuName : menuName.menu,
                typeof menuToSelect === 'string' ? menuToSelect : menuToSelect.item,
            );
            s.splice(0, 1);
            Scripts.Utils.selectMenu(menuToSelect, s, false);
        }

        static useAndSelect(serial: string, selections: ISelect[], use = true) {
            use && Orion.UseObject(serial);
            const selectionsDupe = [...selections];
            const selection = selectionsDupe.shift();
            if (selection.type === SelectionTypeEnum.gump) {
                const s = <number>selection.selection;
                if (!Orion.WaitForGump(2000)) {
                    return;
                }
                Orion.GetLastGump()?.Select(Orion.CreateGumpHook(s));
            } else if (selection.type === SelectionTypeEnum.menu) {
                const s = <IMenuSelection>selection.selection;
                if (!Orion.WaitForMenu(2000)) {
                    return;
                }
                const lastMenu = Orion.GetMenu('last');
                if (lastMenu.Name().indexOf(s.name) === 0) {
                    lastMenu.Select(s.selection);
                }
            }

            if (selectionsDupe.length) {
                Scripts.Utils.useAndSelect(serial, selectionsDupe, false);
            }
        }

        // return missing quantity
        static refill(
            obj: IMyGameObject,
            sourceContainerId: string,
            quantity = 1,
            targetContainerId = 'backpack',
            refillJustWhenIHaveNothing = false,
            itemName?: string,
            sourceContainerIsItemOnGround = false,
        ): number {
            const serialsInTargetContainer = Orion.FindType(obj.graphic, obj.color || '0xFFFF', targetContainerId);
            const serialsInSourceContainer = sourceContainerIsItemOnGround
                ? [sourceContainerId]
                : Orion.FindType(obj.graphic, obj.color || '0xFFFF', sourceContainerId);
            const itemsInTarget = Scripts.Utils.countObjectInContainer(obj, targetContainerId);
            const itemsInSource = Scripts.Utils.countObjectInContainer(
                obj,
                sourceContainerId,
                sourceContainerIsItemOnGround,
            );

            if (itemsInTarget > quantity) {
                return Scripts.Utils.moveItems(serialsInTargetContainer, sourceContainerId, itemsInTarget - quantity);
            } else if (itemsInTarget < quantity) {
                if (refillJustWhenIHaveNothing && itemsInTarget) {
                    return 0;
                }
                if (!itemsInSource) {
                    Scripts.Utils.log(
                        `Nemas dostatek ${itemName ? itemName : obj.graphic} pro doplneni`,
                        ColorEnum.orange,
                    );
                    return quantity;
                }
                return Scripts.Utils.moveItems(serialsInSourceContainer, targetContainerId, quantity - itemsInTarget);
            }

            return 0;
        }

        static getObjSerials(obj: IMyGameObject, container = 'backpack') {
            return Orion.FindType(obj.graphic, obj.color || '0xFFFF', container);
        }

        static getColorByNotoriety(notoriety?: number) {
            let notoColor = 906;
            switch (notoriety) {
                case 1:
                    notoColor = 2119;
                    break;
                case 3:
                    notoColor = 906;
                    break;
                case 6:
                    notoColor = 33;
                    break;
                default:
                    notoColor = 906;
            }
            return notoColor;
        }

        static countObjectInContainer(
            obj: IMyGameObject,
            container = 'backpack',
            containerIsObjItemOnGround = false,
        ): number {
            const serials = containerIsObjItemOnGround ? [container] : Scripts.Utils.getObjSerials(obj, container);
            return Scripts.Utils.countItemsBySerials(serials);
        }

        static countItemsBySerials(itemsSerials: string[]): number {
            let result = 0;
            for (const item of itemsSerials) {
                result += Orion.FindObject(item).Count();
            }
            return result;
        }

        static moveObjectToContainer(obj: any, fromContainer = 'backpack', targetContainer: string) {
            if (isMyGameObject(obj)) {
                const count = Scripts.Utils.countObjectInContainer(obj, fromContainer);
                const serials = Scripts.Utils.getObjSerials(obj, fromContainer);
                Scripts.Utils.moveItems(serials, targetContainer, count);
            } else {
                for (const key in obj) {
                    Scripts.Utils.moveObjectToContainer(obj[key], fromContainer, targetContainer);
                }
            }
        }

        // return missing quantity
        static moveItems(itemsSerials: string[], targetContainerId: string, quantity: number): number {
            if (quantity < 1) {
                return 0;
            }
            let needToMove = quantity;
            for (const item of itemsSerials) {
                const itemCount = Orion.FindObject(item).Count();
                if (needToMove > itemCount) {
                    Orion.MoveItem(item, itemCount, targetContainerId);
                    needToMove -= itemCount;
                } else {
                    Orion.ClearJournal();
                    Orion.MoveItem(item, quantity, targetContainerId);
                    Orion.Wait(responseDelay * 2);
                    const i = Orion.FindObject(item);
                    if (
                        quantity === 1 &&
                        !Scripts.Utils.countObjectInContainer({ graphic: i.Graphic(), color: i.Color() })
                    ) {
                        Orion.MoveItem(item, 2, targetContainerId);
                        Orion.Wait(responseDelay);
                    }
                    needToMove = 0;
                }
                Orion.Wait(responseDelay);
                if (needToMove < 1) {
                    break;
                }
            }
            return needToMove;
        }

        static waitWhileSomethingInJournal(
            messages: string[],
            wait?: number,
            timeAhead?: number,
            flags = 'sys',
        ): number {
            const messagesAsString = messages.join('|');
            let keepWait = true;
            const startTime = timeAhead ? Orion.Now() - timeAhead : 0;
            while (keepWait && !Player.Dead()) {
                const journalMessage = Orion.InJournal(
                    messagesAsString,
                    undefined,
                    undefined,
                    'any',
                    startTime,
                    Orion.Now(),
                );
                if (journalMessage) {
                    for (let i = 0; i < messages.length; i++) {
                        const m = messages[i];
                        if (journalMessage.Text().indexOf(m) > -1) {
                            return i;
                        }
                    }
                }
                Orion.Wait(10);
                if (wait) {
                    wait -= 10;
                    keepWait = wait > 0;
                }
            }
            return -1;
        }

        static worldSaveCheckWait() {
            if (Orion.InJournal('World save has been')) {
                Orion.Wait(25000);
                Orion.ClearJournal('World save has been', 'sys');
            }
        }

        static log(message: string, color: ColorEnum = ColorEnum.none) {
            Orion.Print(<string>color, message);
        }

        static playerPrint(message: string, color: ColorEnum | number | string = ColorEnum.none, fastPrint = false) {
            Utils.charPrint(Player.Serial(), message, color, fastPrint);
        }

        static charPrint(
            serial: string,
            message: string,
            color: ColorEnum | number | string = ColorEnum.none,
            fastPrint = false,
        ) {
            if (fastPrint) {
                Orion.PrintFast(serial, color, 0, message);
            } else {
                Orion.CharPrint(serial, color, message);
            }
        }

        static waitTarget(target?: TargetEnum | string) {
            if (target === TargetEnum.lastattack) {
                Orion.WaitTargetObject(Orion.ClientLastAttack());
            } else if (target === TargetEnum.self) {
                Orion.WaitTargetObject(Player.Serial());
            } else if (target !== undefined) {
                Orion.WaitTargetObject(target);
            }
        }

        static resetTimer(timer: string) {
            Orion.RemoveTimer(timer);
            Orion.SetTimer(timer);
        }

        static waitWhileTargeting() {
            while (Orion.HaveTarget()) {
                Orion.Wait(50);
            }
        }

        static getCoordinatesForDirection(direction): ICoordinates {
            const x = Player.X();
            const y = Player.Y();
            let nextCoordinates = { x: Player.X(), y: Player.Y() };
            switch (direction) {
                case DirectionEnum.West:
                    nextCoordinates = { x: x - 1, y };
                    break;
                case DirectionEnum.North:
                    nextCoordinates = { x, y: y - 1 };
                    break;
                case DirectionEnum.East:
                    nextCoordinates = { x: x + 1, y };
                    break;
                default:
                    nextCoordinates = { x, y: y + 1 };
                    break;
            }
            return nextCoordinates;
        }

        static getSerialsFromMyGameObject(type: IMyGameObject): string[] {
            if (type.color) {
                return Orion.FindType(type.graphic, type.color);
            } else {
                return Orion.FindType(type.graphic);
            }
        }

        static findMyDefinitionForGameObject(gameObject: GameObject, obj?: any): IMyGameObject | undefined {
            const graphic = gameObject.Graphic().toUpperCase();
            const color = gameObject.Color().toUpperCase();
            obj === undefined && (obj = gameObject);

            if (isMyGameObject(obj)) {
                if (
                    obj.graphic.toUpperCase() === graphic &&
                    ((!obj.color && color === '0X0000') || obj.color.toUpperCase() === color)
                ) {
                    return obj;
                }
                return;
            }

            let myDefinition: IMyGameObject | undefined;
            for (const key in obj) {
                myDefinition = Scripts.Utils.findMyDefinitionForGameObject(gameObject, obj[key]);
                if (isMyGameObject(myDefinition)) {
                    return myDefinition;
                }
            }
        }

        /**
         * parses the given string into object which is in the global object 'o'
         * @param objectAsString
         * @returns IMyGameObject
         */
        static parseObject(objectAsString: string): IMyGameObject {
            const arr = objectAsString.split('.');
            arr.shift(); // remove the 'o'
            let item: any = gameObject;
            for (const i of arr) {
                item = item[i];
            }
            return item;
        }

        static updateCurrentStatusBar(newSerial: string, position: ICoordinates) {
            const currentStatusBarSerial = Orion.GetGlobal('currentStatusBarSerial');
            currentStatusBarSerial && Orion.CloseStatusbar(currentStatusBarSerial);
            Orion.SetGlobal('currentStatusBarSerial', newSerial);
            Orion.ShowStatusbar(newSerial, position.x, position.y);
        }

        static determineHpColor(percent: number): ColorEnum {
            const c = Math.ceil((percent * 3) / 100);
            return c === 1 ? ColorEnum.red : c === 2 ? ColorEnum.orange : ColorEnum.green;
        }

        static determineHpColorRGB(percent: number): string {
            const c = Math.ceil((percent * 3) / 100);
            return c === 1 ? '#FF0000' : c === 2 ? '#FFFF00' : '#007B00';
        }

        static getARGBColorByNotoriety(notoriety: number, hexaOpacity = 'ff'): string {
            switch (notoriety) {
                case 1: //blue
                    return `#${hexaOpacity}26beed`;
                    break;
                case 2: //green
                    return `#${hexaOpacity}00cc00`;
                    break;
                case 3: //gray
                    return `#${hexaOpacity}999999`;
                    break;
                case 4: //criminal
                    return `#${hexaOpacity}999999`;
                    break;
                case 5: //orange
                    return `#${hexaOpacity}ff8c1a`;
                    break;
                case 6: //red
                    return `#${hexaOpacity}e62a00`;
                    break;
                default:
                    // 7 - yellow
                    return `#${hexaOpacity}ffff1a`;
            }
        }

        static printColoredHpBar(target: string, percent: number) {
            const fullBoxCount = Math.ceil((percent * 6) / 100);
            const color = Scripts.Utils.determineHpColor(percent);
            let text = '';
            for (let i = 0; i < 6; i++) {
                text += i < fullBoxCount ? '\u25A0' : '\u25A1';
            }

            Orion.CharPrint(target, color, text);
        }

        static getLivingObjectInDistance(objectSerial: string): GameObject | null {
            const o = Orion.FindObject(objectSerial);
            return o && !o.Dead() ? o : null;
        }

        static printDamage(serial: string, previousHp: number, force = false) {
            const o = Orion.FindObject(serial);
            const hp = o.Hits();
            const max = o.MaxHits();
            const diff = hp - previousHp;
            if (diff !== 0 || force) {
                diff !== 0 &&
                    Orion.PrintFast(
                        serial,
                        diff > 0 ? ColorEnum.green : ColorEnum.red,
                        0,
                        `${diff > 0 ? '+' : ''}${diff.toString()}`,
                    );

                if (!config.autoHandlers?.printDamageDiffOnly) {
                    Orion.PrintFast(serial, Scripts.Utils.determineHpColor((hp / max) * 100), 0, `[${hp}/${max}]`);
                }
            }
        }

        static moveRegs(from: GameObject = null, to: GameObject = null) {
            const resolveContainers = (from: GameObject, to: GameObject) => {
                if (!from) {
                    Scripts.Utils.playerPrint('Odkial presunieme regy?');
                    Orion.WaitForAddObject('moveRegs/sourceContainerName', 60000);
                    Orion.Wait(100);
                }

                const sourceContainerName = from ? from.Serial() : 'moveRegs/sourceContainerName';

                if (!to) {
                    Scripts.Utils.playerPrint('Kam presunieme regy?');
                    Orion.WaitForAddObject('moveRegs/targetContainerName', 60000);
                    Orion.Wait(100);
                }

                const targetContainerName = to ? to.Serial() : 'moveRegs/targetContainerName';

                return {
                    sourceContainerName,
                    targetContainerName,
                };
            };

            const { sourceContainerName, targetContainerName } = resolveContainers(from, to);

            for (const reg in gameObject.regy) {
                const regFound = Orion.FindType(
                    gameObject.regy[reg].graphic,
                    gameObject.regy[reg].color || -1,
                    sourceContainerName,
                    undefined,
                    undefined,
                    undefined,
                    false,
                );
                if (regFound.length) {
                    Orion.MoveItem(regFound[0], undefined, targetContainerName);
                    Orion.Wait(250);
                }
            }

            for (const reg in gameObject.necroRegy) {
                const regFound = Orion.FindType(
                    gameObject.necroRegy[reg].graphic,
                    gameObject.necroRegy[reg].color || -1,
                    sourceContainerName,
                    undefined,
                    undefined,
                    undefined,
                    false,
                );
                if (regFound.length) {
                    Orion.MoveItem(regFound[0], undefined, targetContainerName);
                    Orion.Wait(250);
                }
            }
        }

        static use(
            val: IMyGameObject | IMyGameObject[],
            name = '',
            minimalCountForWarn?: number,
            warnWavPath?: string,
        ) {
            if (isMyGameObject(val)) {
                val = [val];
            }

            const serials = [];
            for (const o of val) {
                // Orion is not able to do properly .concat on arrays
                const oSerials = Orion.FindType(o.graphic, o.color);
                for (const s of oSerials) {
                    serials.push(s);
                }
            }

            // possible hallucinations
            if (!serials.length) {
                for (const o of val) {
                    if (!o.name) {
                        continue;
                    }

                    const oSerials = Orion.FindType(o.graphic);
                    for (const s of oSerials) {
                        Orion.Click(s);
                        Orion.Wait(100);
                        if (Orion.FindObject(s).Name().indexOf(o.name) === 0) {
                            serials.push(s);
                        }
                    }
                }
            }

            const count = Scripts.Utils.countItemsBySerials(serials);
            if (!count && warnWavPath) {
                Orion.PlayWav(warnWavPath);
                Scripts.Utils.playerPrint(`!! NEMAS ${name} !!`, ColorEnum.red);
                return;
            }
            if (
                (minimalCountForWarn !== undefined && count <= minimalCountForWarn) ||
                (minimalCountForWarn === undefined && !count)
            ) {
                Scripts.Utils.playerPrint(`[ ${name} ${count} ]`, ColorEnum.red);
            }
            if (count) {
                Orion.UseObject(serials[0]);
            }
        }

        static setTargetAlias(targetAliasToSet: string, message = 'nastav target') {
            const selection = Orion.WaitForAddObject(targetAliasToSet, 60000);
            Orion.Print('-1', message);
            if (selection !== 1) {
                throw 'bad target';
            }
        }

        static findFirstType(myGameObject: IMyGameObject, layer?: number): string | undefined {
            const graphic = myGameObject.graphic;
            const color = myGameObject.color;
            const name = myGameObject.name;
            let serials = Orion.FindType(graphic, color);

            if (serials.length) {
                return serials[0];
            }

            if (layer !== undefined) {
                const l = Orion.ObjAtLayer(layer);
                if (l && l.Graphic() === graphic && l.Color() === color) {
                    return l.Serial();
                }
            }

            if (!name) {
                return;
            }

            serials = Orion.FindType(graphic);
            for (const s of serials) {
                Orion.Click(s);
                Orion.Wait(100);
                if (Orion.FindObject(s).Name().indexOf(name) === 0) {
                    return s;
                }
            }

            if (layer !== undefined) {
                const l = Orion.ObjAtLayer(layer);
                Orion.Click(l.Serial());
                Orion.Wait(100);
                if (l && l.Graphic() === graphic && l.Name() === name) {
                    return l.Serial();
                }
            }
        }

        static walkToSerial(serial: string, distance = 1) {
            const o = Orion.FindObject(serial);
            Orion.WalkTo(o.X(), o.Y(), o.Z(), distance);
            Orion.Wait(1000);
        }

        static targetObjectNotSelf(objectAlias: string, message = 'Target object') {
            Scripts.Utils.playerPrint(message);
            const selection = Orion.WaitForAddObject(objectAlias, 60000);

            if (selection !== 1) {
                Scripts.Utils.playerPrint(`Cancel`);
                throw 'cancel';
            } else if (Orion.FindObject(objectAlias).Serial() === Player.Serial()) {
                Scripts.Utils.playerPrint(`Zameruj lepe :-)`);
                Scripts.Utils.targetObjectNotSelf(objectAlias, message);
                return;
            }
        }

        static createGameObjectSelections(selections: Array<{ ask: string; addObject: string }>) {
            for (const s of selections) {
                Scripts.Utils.playerPrint(s.ask);
                const selection = Orion.WaitForAddObject(s.addObject, 60000);
                if (selection !== 1) {
                    Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
                    throw 'err';
                }
            }
        }

        static openContainer(s: string, maxWaitingTime = 2000) {
            Orion.OpenContainer(s);
            while (!Orion.GumpExists('container', s) && maxWaitingTime > 0) {
                maxWaitingTime -= 100;
                Orion.Wait(100);
            }
            if (maxWaitingTime <= 0) {
                throw 'e';
            }
        }

        static isItemStackable(serial: string): boolean {
            const itemObject = Orion.FindObject(serial);
            const checkSerials = Orion.FindType(itemObject.Graphic(), itemObject.Color(), itemObject.Container());
            let stackable = false;

            for (const s of checkSerials) {
                if (Orion.FindObject(s).Count() > 1) {
                    stackable = true;
                    break;
                }
            }
            if (!stackable && checkSerials.length > 1) {
                const itemToMove = Orion.FindObject(checkSerials[0]);
                const x = itemToMove.X();
                const y = itemToMove.Y();
                const container = itemToMove.Container();
                Orion.MoveItem(checkSerials[0], 1, checkSerials[1]);
                Orion.Wait(responseDelay);
                if (Orion.FindObject(checkSerials[1])) {
                    Orion.MoveItem(checkSerials[0], 1, container, x, y);
                    Orion.Wait(responseDelay);
                    stackable = false;
                } else {
                    stackable = true;
                }
            }
            return stackable;
        }

        static askForCount(): number {
            Scripts.Utils.playerPrint('Po kolika kusech to budes prehazovat ?');
            Orion.ClearJournal();
            while (!Orion.InJournal('', 'my')) {
                Orion.Wait(500);
            }
            const text = Orion.InJournal('', 'my')?.Text();
            if (!text) {
                Scripts.Utils.log('Nic jsi nenapsal ?', ColorEnum.red);
                throw 'err';
            }
            const count = parseInt(text.replace(Player.Name() + ':', ''), 10);

            if (typeof count !== 'number' || count < 0) {
                Scripts.Utils.log('Spatne zadany pocet', ColorEnum.red);
                throw 'err';
            }

            return count;
        }

        static waitTargetTileOrObject(): ICoordinates | undefined {
            const target: any = {};
            const selection = Orion.WaitForAddObject('wosTarget');
            if (selection === 0) {
                return;
            }
            if (selection === 1) {
                const targetGameObject = Orion.FindObject('wosTarget');
                target.x = targetGameObject.X();
                target.y = targetGameObject.Y();
                target.z = targetGameObject.Z();
                Orion.WaitTargetObject('wosTarget');
            } else {
                target.x = SelectedTile.X();
                target.y = SelectedTile.Y();
                target.z = SelectedTile.Z();
                Orion.WaitTargetTile(SelectedTile.Graphic(), target.x, target.y, target.z);
            }
            return target;
        }

        /**
         * Rekne hlasku ve hre secifikovanou barvou
         * @param text text ktery budu rikat
         * @param color barava kterou text bude vykreslen
         */
        static sayWithColor(text, color) {
            const originalState = Orion.GetFontColor();
            const orignalValue = Orion.GetFontColorValue();
            Orion.SetFontColor(true, color);
            Orion.Say(text);
            Orion.SetFontColor(originalState, orignalValue);
        }

        /**
         * Pro zajisteni vyplneni jmena u gameobjektu
         * @param obj gameObject/player u ktereho chci zajistit vyplnene jmeno, pokud neni vyplnene requestne ho ze serveru
         * @returns vraci requestnute jmeno
         */
        static ensureName(obj: GameObject | PlayerCharacter): string {
            let result = '';
            if (obj && !obj.Name()) {
                Orion.RequestName(obj.Serial());
                result = obj.Name();
            }
            return result;
        }
    }
}
