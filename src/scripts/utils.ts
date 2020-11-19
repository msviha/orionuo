namespace Scripts {

    /**
     * Obsahuje pouze pomocne funkce pro ostatni scripty
     */
    export class Utils {

        static selectMenu(menuName:string, selections:string[], firstCall = true) {
            if (!selections || !selections.length) {
                return;
            }
            let s = [...selections];
            firstCall && Orion.CancelWaitMenu();
            Scripts.Utils.worldSaveCheckWait();
            const menuToSelect = s[0];
            Orion.WaitMenu(menuName, menuToSelect);
            s.splice(0, 1);
            Scripts.Utils.selectMenu(menuToSelect, s, false);
        }

        static useAndSelect(serial:string, selections:ISelect[], use = true) {
            use && Orion.UseObject(serial);
            const selectionsDupe = [...selections];
            const selection = selectionsDupe.shift();
            if (selection.type === SelectionTypeEnum.gump) {
                const s = <number>selection.selection;
                if (!Orion.WaitForGump(2000)) {
                    return;
                }
                Orion.GetLastGump()?.Select(Orion.CreateGumpHook(s));
            }
            else if (selection.type === SelectionTypeEnum.menu) {
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
            obj:IMyGameObject,
            sourceContainerId:string,
            quantity = 1,
            targetContainerId = 'backpack',
            refillJustWhenIHaveNothing = false,
            itemName?:string
        ):number {
            const serialsInTargetContainer = Orion.FindType(obj.graphic, obj.color || '0xFFFF', targetContainerId);
            const serialsInSourceContainer = Orion.FindType(obj.graphic, obj.color || '0xFFFF', sourceContainerId);
            const itemsInTarget = Scripts.Utils.countObjectInContainer(obj, targetContainerId);
            const itemsInSource = Scripts.Utils.countObjectInContainer(obj, sourceContainerId);

            if (itemsInTarget > quantity) {
                return Scripts.Utils.moveItems(serialsInTargetContainer, sourceContainerId, itemsInTarget - quantity);
            }
            else if (itemsInTarget < quantity) {
                if (refillJustWhenIHaveNothing && itemsInTarget) {
                    return 0;
                }
                if (!itemsInSource) {
                    Scripts.Utils.log(`Nemas dostatek ${itemName ? itemName : obj.graphic} pro doplneni`, ColorEnum.orange);
                    return quantity;
                }
                return Scripts.Utils.moveItems(serialsInSourceContainer, targetContainerId, quantity - itemsInTarget);
            }
        }

        static getObjSerials(obj:IMyGameObject, container = 'backpack') {
            return Orion.FindType(obj.graphic, obj.color || '0xFFFF', container);
        }

        static countObjectInContainer(obj:IMyGameObject, container = 'backpack'):number {
            const serials = Scripts.Utils.getObjSerials(obj, container);
            return Scripts.Utils.countItemsBySerials(serials);
        }

        static countItemsBySerials(itemsSerials:string[]):number {
            let result = 0;
            for (const item of itemsSerials) {
                result += Orion.FindObject(item).Count();
            }
            return result;
        }

        static moveObjectToContainer(obj:any, fromContainer = 'backpack', targetContainer:string) {
            if (isMyGameObject(obj)) {
                const count = Scripts.Utils.countObjectInContainer(obj, fromContainer);
                const serials = Scripts.Utils.getObjSerials(obj, fromContainer);
                Scripts.Utils.moveItems(serials, targetContainer, count);
            }
            else {
                for (const key in obj) {
                    Scripts.Utils.moveObjectToContainer(obj[key], fromContainer, targetContainer);
                }
            }
            
        }

        // return missing quantity
        static moveItems(itemsSerials:string[], targetContainerId:string, quantity:number):number {
            if (quantity < 1) {
                return 0;
            }
            let needToMove = quantity;
            for (const item of itemsSerials) {
                const itemCount = Orion.FindObject(item).Count();
                if (needToMove > itemCount) {
                    Orion.MoveItem(item, itemCount, targetContainerId);
                    needToMove -= itemCount;
                }
                else {
                    Orion.ClearJournal();
                    Orion.MoveItem(item, quantity, targetContainerId);
                    Orion.Wait(responseDelay);
                    if (quantity === 1 && Orion.InJournal('too heavy')) {
                        Orion.MoveItem(item, 2, targetContainerId);
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

        static waitWhileSomethingInJournal(messages:string[], wait?:number) {
            let keepWait = true;
            while (!Orion.InJournal(messages.join('|')) && keepWait) {
                Orion.Wait(50);
                if (wait) {
                    wait -= 50;
                    keepWait = wait > 0;
                }
            }
        }

        static worldSaveCheckWait() {
            if (Orion.InJournal("World save has been")) {
                Orion.Wait(25000);
                Orion.ClearJournal(undefined, 'sys');
            }
        }

        static log(message:string, color:ColorEnum = ColorEnum.none) {
            Orion.Print(<string>color, message);
        }

        static playerPrint(message:string, color:ColorEnum|number = ColorEnum.none) {
            Orion.CharPrint(Player.Serial(), color, message);
        }

        static waitTarget(target?:TargetEnum|string) {
            if (target === TargetEnum.lastattack) {
                Orion.WaitTargetObject(Orion.ClientLastAttack());
            }
            else if (target === TargetEnum.self) {
                Orion.WaitTargetObject(Player.Serial());
            }
            else if (target !== undefined) {
                Orion.WaitTargetObject(target);
            }
        }

        static resetTimer(timer:string) {
            Orion.RemoveTimer(timer);
            Orion.SetTimer(timer);
        }

        static waitWhileTargeting() {
            while (Orion.HaveTarget()) {
                Orion.Wait(50);
            }
        }

        static getCoordinatesForDirection(direction):ICoordinates {
            let x = Player.X();
            let y = Player.Y();
            let nextCoordinates = {x: Player.X(), y: Player.Y()};
            switch (direction) {
            case DirectionEnum.West:
                nextCoordinates = {x: x - 1, y};
                break;
            case DirectionEnum.North:
                nextCoordinates = {x, y: y - 1};
                break;
            case DirectionEnum.East:
                nextCoordinates = {x: x + 1, y};
                break;
            default:
                nextCoordinates = {x, y: y + 1};
                break;
            }
            return nextCoordinates;
        }

        static getSerialsFromMyGameObject(type:IMyGameObject):string[] {
            if (type.color) {
                return Orion.FindType(type.graphic, type.color);
            }
            else {
                return Orion.FindType(type.graphic);
            }
        }

        static findMyDefinitionForGameObject(gameObject:GameObject, obj?:any):IMyGameObject|undefined {
            const graphic = gameObject.Graphic().toUpperCase();
            const color = gameObject.Color().toUpperCase();
            obj === undefined && (obj = gameObject);

            if (isMyGameObject(obj)) {
                if (
                    obj.graphic.toUpperCase() === graphic &&
                    (!obj.color && color === '0X0000' || obj.color.toUpperCase() === color)
                ) {
                    return obj;
                }
                return;
            }

            let myDefinition:IMyGameObject|undefined;
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
        static parseObject(objectAsString:string):IMyGameObject {
            const arr = objectAsString.split('.');
            arr.shift(); // remove the 'o'
            let item:any = gameObject;
            for (const i of arr) {
                item = item[i];
            }
            return item;
        }

        static updateCurrentStatusBar(newSerial:string) {
            const currentStatusBarSerial = Orion.GetGlobal('currentStatusBarSerial');
            currentStatusBarSerial && Orion.CloseStatusbar(currentStatusBarSerial);
            Orion.SetGlobal('currentStatusBarSerial', newSerial);
            Orion.ShowStatusbar(newSerial, 20, 20);
        }

        static determineHpColor(percent:number):ColorEnum {
            const c = Math.ceil(percent * 3 / 100)
            return c === 1 ? ColorEnum.red : c === 2 ? ColorEnum.orange : ColorEnum.green;
        }

        static printColoredHpBar(target:string, percent:number) {
            const fullBoxCount = Math.ceil(percent * 6 / 100);
            const color = Scripts.Utils.determineHpColor(percent);
            let text = '';
            for (let i = 0; i < 6; i++) {
                text += i < fullBoxCount ? '\u25A0' : '\u25A1'
            }

            Orion.CharPrint(target, color, text);
        }

        static getLivingObjectInDistance(objectSerial:string):GameObject|null {
            const o = Orion.FindObject(objectSerial);
            return (o && !o.Dead()) ? o : null;
        }

        static printDamage(serial:string, previousHp:number, force = false) {
            const o = Orion.FindObject(serial);
            const hp = o.Hits();
            const max = o.MaxHits();
            const diff = hp - previousHp;
            if (diff !== 0 || force) {
                diff !== 0 && Orion.PrintFast(serial, diff > 0 ? ColorEnum.green : ColorEnum.red, 0, `${diff > 0 ? '+' : ''}${diff.toString()}`);
                Orion.PrintFast(serial, Scripts.Utils.determineHpColor(hp / max * 100), 0, `[${hp}/${max}]`);
            }
        }

        static use(val:IMyGameObject|IMyGameObject[], name = '', minimalCountForWarn?:number, warnWavPath?:string) {
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

            let count = Scripts.Utils.countItemsBySerials(serials);
            if (!count && warnWavPath) {
                Orion.PlayWav(warnWavPath);
                Scripts.Utils.playerPrint(`!! NEMAS ${name} !!`, ColorEnum.red);
                return;
            }
            if ((minimalCountForWarn !== undefined && count <= minimalCountForWarn) || (minimalCountForWarn === undefined && !count)) {
                Scripts.Utils.playerPrint(`[ ${name} ${count} ]`, ColorEnum.red);
            }
            if (count) {
                Orion.UseObject(serials[0]);
            }
        }

        static setTargetAlias(targetAliasToSet:string, message = 'nastav target') {
            const selection = Orion.WaitForAddObject(targetAliasToSet, 60000);
            Orion.Print('-1', message);
            if (selection !== 1) {
                throw 'bad target'
            }
        }

        static findFirstType(myGameObject:IMyGameObject, layer?:number):string|undefined {
            let graphic = myGameObject.graphic;
            let color = myGameObject.color;
            let name = myGameObject.name;
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
                let l = Orion.ObjAtLayer(layer);
                Orion.Click(l.Serial());
                Orion.Wait(100);
                if (l && l.Graphic() === graphic && l.Name() === name) {
                    return l.Serial();
                }
            }
        }

        static walkToSerial(serial:string, distance = 1) {
            const o = Orion.FindObject(serial);
            Orion.WalkTo(o.X(), o.Y(), o.Z(), distance);
            Orion.Wait(1000);
        }

        static targetObjectNotSelf(objectAlias:string, message = 'Target object') {
            Scripts.Utils.playerPrint(message);
            const selection = Orion.WaitForAddObject(objectAlias, 60000);

            if (selection !== 1) {
                Scripts.Utils.playerPrint(`Cancel`);
                throw 'cancel'
            }
            else if (Orion.FindObject(objectAlias).Serial() === Player.Serial()) {
                Scripts.Utils.playerPrint(`Zameruj lepe :-)`);
                Scripts.Utils.targetObjectNotSelf(objectAlias, message);
                return;
            }
        }
    }
}
