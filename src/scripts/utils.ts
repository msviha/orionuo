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

        static countObjectInContainer(obj:IMyGameObject, container = 'backpack'):number {
            const serials = Orion.FindType(obj.graphic, obj.color || '0xFFFF', container);
            return Scripts.Utils.countItemsBySerials(serials);
        }

        static countItemsBySerials(itemsSerials:string[]):number {
            let result = 0;
            for (const item of itemsSerials) {
                result += Orion.FindObject(item).Count();
            }
            return result;
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

        static waitTarget(target?:TargetEnum) {
            if (target === TargetEnum.lastattack) {
                Orion.WaitTargetObject(Orion.ClientLastAttack());
            }
            else if (target === TargetEnum.self) {
                Orion.WaitTargetObject(Player.Serial());
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

        static movePlayerToDirection(direction:DirectionEnum):boolean {
            Scripts.Utils.worldSaveCheckWait();

            Orion.Turn(direction);
            Orion.Wait(200);
            const success = Orion.Step(direction, false);
            Orion.Wait(415);
            Scripts.Utils.worldSaveCheckWait();

            return success;
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

        static use(val:IMyGameObject|IMyGameObject[], name = '', minimalCountForWarn?:number) {
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
            let count = Scripts.Utils.countItemsBySerials(serials);
            if ((minimalCountForWarn !== undefined && count <= minimalCountForWarn) || (minimalCountForWarn === undefined && !count)) {
                Scripts.Utils.playerPrint(`[ ${name} ${count} ]`, ColorEnum.red);
            }
            if (count) {
                Orion.UseObject(serials[0]);
            }
        }
    }
}
