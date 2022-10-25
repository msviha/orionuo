namespace Scripts {
    export class Refill {
        static manager(
            stuff: Array<{ item: string; total: number }>,
            containerPathsToSearch?: Array<string[]> | string[],
            clean = true
        ) {
            const canTakeFromBank = Scripts.Common.openBank();
            for (const i of stuff) {
                Refill.universalRefill(i.item, i.total, canTakeFromBank, containerPathsToSearch);
                clean && Scripts.Clean.cleanObjectInBag(Scripts.Utils.parseObject(i.item));
            }

            Scripts.Utils.playerPrint(`vazis: ${Player.Weight()}/${Player.MaxWeight()}`);
        }

        static universalRefill(
            gameObjectAsString: string,
            total: number,
            canTakeFromBank = false,
            containerPathsToSearch?: Array<string[]> | string[],
        ) {
            const item: IMyGameObject | IPotion = Scripts.Utils.parseObject(gameObjectAsString);

            if (Scripts.Utils.countObjectInContainer(item) === total) {
                // i dont need refill that item
                return;
            }

            const name = gameObjectAsString.split('.')[gameObjectAsString.split('.').length - 1];
            const allowedDistance = 5;
            const itemToFind: IMyGameObject = isIPotion(item) ? item.kad : item;

            if (!containerPathsToSearch) {
                containerPathsToSearch = [];
            } else if (isStringArray(containerPathsToSearch)) {
                // unify type by converting string[] to Array<string[]>
                containerPathsToSearch = [[...containerPathsToSearch]];
            }

            const containerPaths = <Array<string[]>>containerPathsToSearch;

            let itemSerial: string | undefined;
            let lastContainerSerial: string | undefined;
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
                    } else {
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
                    const items = Orion.FindType(
                        itemToFind.graphic,
                        itemToFind.color || '0xFFFF',
                        lastContainerSerial,
                        'item',
                        undefined,
                        undefined,
                        false,
                    );
                    if (items.length) {
                        itemSerial = items[0];
                    }
                    if (itemSerial) {
                        break;
                    }
                }
            }

            if (!itemSerial) {
                needToTakeToBackpack = false;

                //ground
                const items = Orion.FindType(
                    itemToFind.graphic,
                    itemToFind.color || '0xFFFF',
                    'ground',
                    'item',
                    allowedDistance,
                );
                if (items.length) {
                    itemSerial = items[0];
                    lastContainerSerial = itemSerial; // on ground the container is item itself
                }
                //bank
                else if (canTakeFromBank) {
                    lastContainerSerial = Player.BankSerial();
                    const items = Orion.FindType(
                        itemToFind.graphic,
                        itemToFind.color || '0xFFFF',
                        Player.BankSerial(),
                        'item',
                        undefined,
                        undefined,
                        false,
                    );
                    items.length && (itemSerial = items[0]);
                }
            }

            if (itemSerial) {
                if (isIPotion(item)) {
                    const eb = gameObject.uncategorized.emptyBottles;
                    const emptyBottleSerials = Orion.FindType(
                        eb.graphic,
                        eb.color,
                        lastContainerSerial === itemSerial ? 'ground' : lastContainerSerial,
                        'near|item',
                        3,
                    );
                    const emptyBottleSerial = emptyBottleSerials.length ? emptyBottleSerials[0] : undefined;
                    Refill.refillPotions(<PotionsEnum>name, total, itemSerial, needToTakeToBackpack, emptyBottleSerial);
                } else {
                    Scripts.Utils.refill(
                        item,
                        lastContainerSerial,
                        total,
                        undefined,
                        undefined,
                        undefined,
                        lastContainerSerial === itemSerial,
                    );
                }
            } else {
                Scripts.Utils.playerPrint(`nenalezen item "${name}"`, ColorEnum.red);
            }
        }

        static refillPotions(
            potionName: PotionsEnum,
            total: number,
            kadSerial: string,
            needToTakeKadToBackpack = false,
            emptyBottleSerial?: string,
        ) {
            const kad = Orion.FindObject(kadSerial);
            const kadPosition = { x: kad.X(), y: kad.Y() };
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
                } else {
                    Scripts.Potions.potionToKad(potionName, true, kadSerial);
                    refillCount++;
                }
            }

            if (needToTakeKadToBackpack) {
                Orion.Wait(responseDelay);
                Orion.MoveItem(kadSerial, 0, kadContainer, kadPosition.x, kadPosition.y);
            }
        }

        static createKad(
            emptyKadContainerPath:string[],
            emptyBottleContainerPath:string[],
            count:number, // minimalne 1, pak to cepuje po 50ti
            refillKadSerial?:string,
            targetContainer?:string
        ):string {
            Orion.Print(typeof emptyKadContainerPath);
            Orion.Print(JSON.stringify(emptyKadContainerPath));
            !refillKadSerial && Scripts.Utils.createGameObjectSelections([
                {ask: 'Vyber kad ze ktere chces cepovat', addObject: 'refillKadSerial'}
            ]);
            !refillKadSerial && (refillKadSerial = 'refillKadSerial');
            !targetContainer && Scripts.Utils.createGameObjectSelections([
                {ask: 'Vyber bednu kam das hotovou kad', addObject: 'refillKadTarget'}
            ]);
            !targetContainer && (targetContainer = 'refillKadTarget');
            const refillKad = Orion.FindObject(refillKadSerial);
            const potionType = Scripts.Potions.getPotionTypeFromKad({graphic: refillKad.Graphic(), color: refillKad.Color()});
            if (!potionType) {
                Scripts.Utils.log('Nebyla vybrana kad', ColorEnum.red);
                throw 'e';
            }

            const refillKadObj = Orion.FindObject(refillKadSerial);
            const refillKadPosition = { x: refillKadObj.X(), y: refillKadObj.Y(), z: refillKadObj.Z() };
            const refillKadContainer = refillKadObj.Container();

            // doplnit prazdnou kad
            const kadDef = gameObject.crafting.tinkering.containers.kadNaPotiony;
            Scripts.Utils.refill(
                kadDef, emptyKadContainerPath[emptyKadContainerPath.length - 1],
                1, 'backpack', false, 'prazdna kad',
                false, emptyKadContainerPath
            );
            // doplnit prazdne lahve
            const bottleDef = gameObject.uncategorized.emptyBottles;
            Scripts.Utils.refill(
                bottleDef, emptyBottleContainerPath[emptyBottleContainerPath.length - 1],
                1, 'backpack', false, 'empty bottle',
                false, emptyBottleContainerPath
            );

            const emptyKad = Scripts.Utils.findFirstType(kadDef);
            const emptyBottle = Scripts.Utils.findFirstType(bottleDef);

            const lzeCepovatPrimo = Scripts.Utils.isItemInBank(refillKadObj) || refillKadObj.Container() === '0xFFFFFFFF';
            if (!lzeCepovatPrimo) {
                Orion.MoveItem(refillKadSerial, 0, 'backpack');
                Orion.Wait(500);
            }

            const kad = gameObject.potions[potionType].kad;
            const kadeNaKtereNesaham = Orion.FindType(kad.graphic, kad.color);
            kadeNaKtereNesaham.push(refillKadSerial);

            Orion.UseObject(refillKadSerial);
            Orion.WaitForTarget();
            Orion.TargetObject(emptyBottle);
            Orion.Wait(500);
            const cepnutaFlaska = Scripts.Utils.findFirstType(gameObject.potions[potionType]);
            Orion.UseObject(emptyKad);
            Orion.WaitForTarget();
            Orion.TargetObject(cepnutaFlaska);
            Orion.Wait(500);
            const cepnutaKad = Orion.FindType(kad.graphic, kad.color).filter((k) => kadeNaKtereNesaham.indexOf(k) === -1)[0];
            Orion.MoveItem(cepnutaKad); // Target item moved ?
            Orion.Wait(500);

            // zaokrouhlime pocet preliti mezi kademi
            let times = Math.floor(count / 50) + (((count / 50) % 1) >= 0.5 ? 1 : 0);

            for (times; times > 0; times--) {
                Orion.UseObject(refillKadSerial);
                Orion.WaitForTarget();
                Orion.TargetObject(cepnutaKad);
                Orion.Wait(500);
            }

            if (!lzeCepovatPrimo) {
                Orion.MoveItem(refillKadSerial, 0, refillKadContainer, refillKadPosition.x, refillKadPosition.y, refillKadPosition.z);
                Orion.Wait(500);
            }

            if (targetContainer !== 'backpack') {
                Orion.MoveItem(cepnutaKad, 0, targetContainer);
                Orion.Wait(500);
            }

            return cepnutaKad;
        }

        static createKade(
            emptyKadContainerPath:string[],
            emptyBottleContainerPath:string[],
            sourceKade:Array<{kad:string, count:number}>
        ) {
            Scripts.Utils.createGameObjectSelections([{ask: 'target container ?', addObject: 'targetContainerCreateKade'}]);
            for (var i = 0; i < sourceKade.length; i++) {
                createKad(emptyKadContainerPath, emptyBottleContainerPath,	sourceKade[i].count, sourceKade[i].kad, 'targetContainerCreateKade');
            }
        }
        static regy(count?:number, necroRegs = false) {
            const source = 'refillRegySource';
            const target = 'refillRegyTarget';
            Scripts.Utils.createGameObjectSelections([
                {ask: 'Odkud presuneme regy ?', addObject: source},
                {ask: 'Kam presuneme regy ?', addObject: target}
            ]);

            typeof count !== 'number' && (count = Scripts.Utils.askForCount());

            const regs = necroRegs ? gameObject.necroRegy : gameObject.regy;
            for (const r in regs) {
                const reg = regs[r];
                Scripts.Utils.refill(reg, source, count, target, false, r);
            }
        }
    }
}
