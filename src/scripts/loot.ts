namespace Scripts {
    export class Loot {

        /**
         * Scripts.Loot.harving
         * stability beta
         *
         * TODO nahozeni zbrane po rezani (pokud se mlati jinou nez reze)
         * @param cut rezat ?
         * @param wayPoints pole coordinates kudy ma chodit, je vhodne cestu vyzkouset bez enemiesTypesToHarv, aby bylo jasne ze se nesekne
         * viz. [{x: 3570, y: 1430, trap: true}, {x: 3590, y: 1433}, {x: 3580, y: 1439, trap: true}]
         * chodi mezi temito dvema polickama stale dokola
         * @param enemiesTypesToHarv seznam typu potvor ktere ma primarne zabijet (ziskas pomoci _info na potvoru)
         * viz. ['0x0047', '0x0003']
         * teratan droni a mumie
         * @param trapDelay jak dlouho cekat na waypointu s priznakem trap (default 10 vterin)
         * @param dmgToStartHeal kolik hp musi chybet do full, aby se zacal lecit (default 40)
         * @param fullHeal ma se vylecit uplne ?
         * @param castCure ma na sebe kouzlit cure ?
         * @param drinkCure ma pit cure ? // todo checknout.. je to ted nastavene jen na lessercure, ktere leci i deadly
         * @param castReactive ma na sebe kouzlit reactive armor v 5ti minutovych intervalech
         * @param weapon zepta se kterou zbrani budes mlatit
         */
        static harving({
            cut,
            wayPoints,
            enemiesTypesToHarv,
            trapDelay = 10000,
            dmgToStartHeal = 40,
            fullHeal = false,
            castCure = false,
            drinkCure = false,
            castReactive = false,
            weapon = true,
            poisonTrain = false
        }: {
            cut?:boolean,
            wayPoints?:ICoordinates[],
            enemiesTypesToHarv?:string[],
            trapDelay?:number,
            dmgToStartHeal?:number,
            fullHeal?:boolean,
            castCure?:boolean,
            drinkCure?:boolean,
            castReactive?:boolean,
            weapon?:boolean,
            poisonTrain?:boolean
        }) {
            Orion.SetTimer('ReactiveArmorTimer');
            let currentWaypointIndex = 0;
            let lastAttack = undefined;

            const selection_1 = Scripts.Loot.addCutWeapon();
            Scripts.Utils.playerPrint('Target your loot bag');
            const selection_2 = Orion.WaitForAddObject('myLootBag', 60000);

            let selection_3 = 1;
            if (weapon) {
                Scripts.Utils.playerPrint('Target your weapon');
                selection_3 = Orion.WaitForAddObject('fightWeapon', 60000);
            }


            // check the proper selection (game objects)
            if (1 !== selection_1 || 1 !== selection_2 || 1 !== selection_3) {
                Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
                return;
            }

            while (true) {
                lastAttack = Orion.ClientLastAttack();
                // reactive armor
                if (castReactive && Orion.Timer('ReactiveArmorTimer') > 300000) {
                    Scripts.Utils.resetTimer('ReactiveArmorTimer');
                    Scripts.Spells.castUntilSuccess('Reactive Armor', TargetEnum.self, 2500);
                }

                Scripts.Loot.lootCorpsesAround(cut, weapon);
                Scripts.Loot.healAndCureWhenHarving(dmgToStartHeal, fullHeal, castCure, drinkCure);
                const enemySerialsAround = Orion.FindType(enemiesTypesToHarv.join('|'), '-1', 'ground', 'fast', 4, 'red');
                currentWaypointIndex = Scripts.Loot.moveToNextWaypointWhenNeeded(wayPoints, enemySerialsAround, currentWaypointIndex, trapDelay);
                Scripts.Loot.attackOnEnemy(enemySerialsAround, lastAttack, poisonTrain);

                Orion.Wait(500);
            }
        }

        static addCutWeapon():number {
            Scripts.Utils.playerPrint('Target your cut weapon');
            return Orion.WaitForAddObject('cutWeapon', 60000);
        }

        /**
         * Scripts.Loot.lootCorpseId
         * stability beta
         *
         * vylotuje mrtvolky v okoli
         */
        static lootCorpsesAround(cut?:boolean, weapon?:boolean) {
            let listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            while (listOfCorpses.length) {
                for (const id of listOfCorpses) {
                    if (cut && !Orion.FindObject(id).IsHuman()) {
                        Orion.UseObject('cutWeapon');
                        Orion.WaitForTarget(1000);
                        Orion.TargetObject(id);
                        if (weapon) {
                            Orion.UseObject('fightWeapon');
                            Orion.WaitForTarget(1000) && Orion.CancelTarget();
                        }
                    }

                    Scripts.Loot.lootCorpseId(id);
                    Orion.Ignore(id);
                    Orion.Wait(100);
                }
                listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            }
        }

        /**
         * Scripts.Loot.lootCorpseId
         * stability beta
         *
         * vylotuje z konkretni mrtvolky veci nastavene v lootItems listu
         */
        static lootCorpseId(id:string) {
            let serverLagActionsLeft = 4;
            Orion.OpenContainer(id, 5000, `Container id ${id} not found`);
            let itemsInCorpse = Orion.FindList('lootItems', id);
            if (itemsInCorpse.length) {
                for (const itemId of itemsInCorpse) {
                    // TODO doresit prehazeni veci z hlavniho baglu do myLootBag pri lotovani pytliku
                    Orion.MoveItem(itemId, 0, "myLootBag");
                    Orion.Wait(serverLagActionsLeft ? 50 : 350);
                    serverLagActionsLeft--;
                }
            }
        }

        /**
         * Scripts.Loot.healAndCureWhenHarving
         * stability beta
         *
         * leci pokud je potreba
         */
        static healAndCureWhenHarving(dmgToStartHeal:number, fullHeal:boolean, castCure:boolean, drinkCure:boolean) {
            if (Player.Hits() > Player.MaxHits() - dmgToStartHeal) {
                return;
            }

            let keepHealing = fullHeal;
            while (keepHealing || Player.Hits() <= Player.MaxHits() - dmgToStartHeal) {
                Scripts.Common.bandageSelf();
                keepHealing = fullHeal && Player.Hits() !== Player.MaxHits();
            }

            if (Player.Poisoned()) {
                if (castCure) {
                    Scripts.Spells.castUntilSuccess('Cure', TargetEnum.self, 2500);
                }
                else if (drinkCure) {
                    Scripts.Potions.drinkPotion(PotionsEnum.lc);
                }
            }
        }

        /**
         * Scripts.Loot.moveToNextWaypointWhenNeeded
         * stability beta
         *
         * presouva se na dalsi waypoint pokud je potreba
         * return nextWaypointIndex
         */
        static moveToNextWaypointWhenNeeded(
            wayPoints:ICoordinates[],
            enemySerialsAround:string[],
            currentWaypointIndex:number,
            trapDelay:number
        ):number {
            if (wayPoints && enemySerialsAround) {
                if (!enemySerialsAround.length) {
                    const w = wayPoints[currentWaypointIndex];
                    Orion.WalkTo(w.x, w.y, Player.Z(), 0);
                    if ((<any>w).trap) {
                        Orion.Wait(trapDelay);
                    }
                    return currentWaypointIndex + 1 === wayPoints.length ? 0 : currentWaypointIndex + 1;
                }
                else {
                    return currentWaypointIndex;
                }
            }
        }

        static attackOnEnemy(enemySerialsAround:string[], lastAttackSerial?:string, poisonTrain?:boolean):string|undefined {
            if (!enemySerialsAround.length || (lastAttackSerial && enemySerialsAround.indexOf(lastAttackSerial) > -1)) {
                return;
            }
            const serialToAttack = enemySerialsAround[0];
            Scripts.Auto.killObject(serialToAttack, poisonTrain);
        }

        static lootAllFrom(delay = responseDelay) {
            Scripts.Utils.targetObjectNotSelf('lootAllContainer', `Target object to loot`);

            Orion.OpenContainer('lootAllContainer', 5000, `Container not found`);
            let itemsInCorpse = Orion.FindType('any', 'any', 'lootAllContainer');
            if (itemsInCorpse.length) {
                for (const itemId of itemsInCorpse) {
                    Orion.MoveItem(itemId, 0, "myLootBag");
                    Orion.Wait(delay);
                }
            }
        }

        static carveBody(carveNearestBodyAutomatically = false) {

            let cutWeapon = Orion.FindObject('cutWeapon');

            if (!cutWeapon) {
                const nbDagger = gameObject.uncategorized.nbDagger;
                const nbDaggerSerials = Orion.FindType(nbDagger.graphic, nbDagger.color);
                if (!nbDaggerSerials.length) {
                    const selection = Orion.WaitForAddObject('cutWeapon')
                    Scripts.Utils.playerPrint('target your cutWeapon');
                    if (selection !== 1) {
                        Orion.RemoveObject('cutWeapon');
                        throw 'e';
                    }
                    cutWeapon = Orion.FindObject('cutWeapon');
                }
                else {
                    cutWeapon = Orion.FindObject(nbDaggerSerials[0]);
                }
            }

            if (carveNearestBodyAutomatically) {
                const body = Orion.FindType('0x2006', '-1', 'ground', 'near', 3);
                if (body.length) {
                    Orion.WaitTargetObject(body[0]);
                }
            }

            Orion.UseObject(cutWeapon.Serial());
        }
    }
}
