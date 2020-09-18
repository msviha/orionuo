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
            weapon = true
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
            weapon?:boolean
        }) {
            Orion.SetTimer('ReactiveArmorTimer');
            let currentWaypointIndex = 0;

            Scripts.Utils.playerPrint('Target your cut weapon');
            const selection_1 = Orion.WaitForAddObject('cutWeapon', 60000);
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
                // reactive armor
                if (castReactive && Orion.Timer('ReactiveArmorTimer') > 300000) {
                    Scripts.Utils.resetTimer('ReactiveArmorTimer');
                    Scripts.Spells.castUntilSuccess('Reactive Armor', TargetEnum.self, 2500);
                }

                Scripts.Loot.lootCorpsesAround(cut, weapon);
                Scripts.Loot.healAndCureWhenHarving(dmgToStartHeal, fullHeal, castCure, drinkCure);
                currentWaypointIndex = Scripts.Loot.moveToNextWaypointWhenNeeded(wayPoints, enemiesTypesToHarv, currentWaypointIndex, trapDelay);

                Orion.Wait(500);
            }
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
                    if (cut) {
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
            Orion.OpenContainer(id, 5000, `Container id ${id} not found`);
            let itemsInCorpse = Orion.FindList('lootItems', id);
            if (itemsInCorpse.length) {
                for (const itemId of itemsInCorpse) {
                    // TODO doresit prehazeni veci z hlavniho baglu do myLootBag pri lotovani pytliku
                    Orion.MoveItem(itemId, 0, "myLootBag");
                    Orion.Wait(50);
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
                    Scripts.Common.drinkPotion('lc');
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
        static moveToNextWaypointWhenNeeded(wayPoints:ICoordinates[], enemiesTypesToHarv:string[], currentWaypointIndex:number, trapDelay:number):number {
            if (wayPoints && enemiesTypesToHarv) {
                const enemiesToHarv = Orion.FindType(enemiesTypesToHarv.join('|'), '-1', 'ground', 'fast', 4, 'red');
                if (!enemiesToHarv.length) {
                    const w = wayPoints[currentWaypointIndex];
                    Orion.WalkTo(w.x, w.y, Player.Z(), 0);
                    if ((<any>w).trap) {
                        Orion.Wait(trapDelay);
                    }
                    return currentWaypointIndex + 1 === wayPoints.length ? 0 : currentWaypointIndex + 1;
                }
                else {
                    Orion.Wait(500);
                    Orion.Attack(enemiesToHarv[0]);
                    const enemy = Orion.FindObject(enemiesToHarv[0]);
                    if (enemy) {
                        Orion.WalkTo(enemy.X(), enemy.Y(), Player.Z(), 5);
                    }
                    return currentWaypointIndex;
                }
            }
        }
    }
}
