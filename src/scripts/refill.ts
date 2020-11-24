namespace Scripts {
    export class Refill {

        static manager(stuff:Array<{item:string, total:number}>, containerPathsToSearch?:Array<string[]>|string[]) {
            const canTakeFromBank = Scripts.Common.openBank();
            for (const i of stuff) {
                Scripts.Refill.universalRefill(i.item, i.total, canTakeFromBank, containerPathsToSearch);
                Scripts.Clean.cleanObjectInBag(Scripts.Utils.parseObject(i.item));
            }

            Scripts.Utils.playerPrint(`vazis: ${Player.Weight()}/${Player.MaxWeight()}`);
        }

        static universalRefill(gameObjectAsString:string, total:number, canTakeFromBank = false, containerPathsToSearch?:Array<string[]>|string[]) {
            const item:IMyGameObject|IPotion = Scripts.Utils.parseObject(gameObjectAsString);

            if (Scripts.Utils.countObjectInContainer(item) === total) {
                // i dont need refill that item
                return;
            }

            const name = gameObjectAsString.split('.')[gameObjectAsString.split('.').length - 1];
            const allowedDistance = 5;
            const itemToFind:IMyGameObject = isIPotion(item) ? item.kad : item;

            if (!containerPathsToSearch) {
                containerPathsToSearch = [];
            }
            else if (isStringArray(containerPathsToSearch)) {
                // unify type by converting string[] to Array<string[]>
                containerPathsToSearch = [[...containerPathsToSearch]];
            }

            const containerPaths = <Array<string[]>>containerPathsToSearch;

            let itemSerial:string|undefined;
            let lastContainerSerial:string|undefined;
            let needToTakeToBackpack = false;

            if (containerPaths.length) {
                for (const path of containerPaths) {
                    if (!path.length) {
                        return;
                    }

                    const firstContainer = Orion.FindObject(path[0]);
                    if (!firstContainer) {
                        continue;
                    }

                    if (firstContainer.Container() === Player.BankSerial()) {
                        if (!canTakeFromBank) {
                            continue;
                        }
                    }
                    else {
                        Orion.WalkTo(firstContainer.X(), firstContainer.Y(), firstContainer.Z(), 1);
                        isIPotion(item) && (needToTakeToBackpack = true);
                    }

                    for (const container of path) {
                        if (!Orion.GumpExists('container', container)) {
                            Orion.OpenContainer(container);
                            Orion.Wait(responseDelay);
                        }
                    }

                    lastContainerSerial = path[path.length - 1];
                    const items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', lastContainerSerial, 'item');
                    items.length && (itemSerial = items[0]);
                    if (itemSerial) {
                        break;
                    }
                }
            }

            if (!itemSerial) {
                needToTakeToBackpack = false;

                //ground
                const items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', 'ground', 'item', allowedDistance);
                if (items.length) {
                    itemSerial = items[0];
                    lastContainerSerial = itemSerial; // on ground the container is item itself
                }
                //bank
                else if (canTakeFromBank) {
                    lastContainerSerial = Player.BankSerial();
                    const items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', Player.BankSerial(), 'item');
                    items.length && (itemSerial = items[0]);
                }
            }

            if (itemSerial) {
                if (isIPotion(item)) {
                    Orion.Print(-1, JSON.stringify(item));
                    const eb = gameObject.uncategorized.emptyBottles;
                    Orion.Print(-1, lastContainerSerial === itemSerial ? 'ground' : lastContainerSerial);
                    const emptyBottleSerials = Orion.FindType(eb.graphic, eb.color, lastContainerSerial === itemSerial ? 'ground' : lastContainerSerial, 'near|item', 3);
                    const emptyBottleSerial = emptyBottleSerials.length ? emptyBottleSerials[0] : undefined;
                    Scripts.Refill.refillPotions(<PotionsEnum>name, total, itemSerial, needToTakeToBackpack, emptyBottleSerial)
                }
                else {
                    Scripts.Utils.refill(item, lastContainerSerial, total, undefined, undefined, undefined, lastContainerSerial === itemSerial);
                }
            }
            else {
                Scripts.Utils.playerPrint(`nenalezen item "${name}"`, ColorEnum.red);
            }
        }

        static refillPotions(
            potionName:PotionsEnum,
            total:number,
            kadSerial:string,
            needToTakeKadToBackpack = false,
            emptyBottleSerial?:string
        ) {
            const kad = Orion.FindObject(kadSerial);
            const kadPosition = {x: kad.X(), y: kad.Y()};
            const kadContainer = kad.Container();
            const potion = gameObject.potions[potionName];

            let refillCount = total - Scripts.Utils.countObjectInContainer(potion);
            if (refillCount === 0) {
                return;
            }

            if (needToTakeKadToBackpack) {
                Orion.MoveItem(kadSerial, 0, 'backpack');
                Orion.Wait(responseDelay);
            }


            while (refillCount > 0 || refillCount < 0) {
                if (refillCount > 0) {
                    Scripts.Potions.fillPotion(potionName, true, kadSerial, emptyBottleSerial);
                    refillCount--;
                }
                else {
                    Scripts.Potions.potionToKad(potionName, true, kadSerial);
                    refillCount++;
                }
            }

            if (needToTakeKadToBackpack) {
                Orion.Wait(responseDelay);
                Orion.MoveItem(kadSerial, 0, kadContainer, kadPosition.x, kadPosition.y);
            }
        }

    }
}
