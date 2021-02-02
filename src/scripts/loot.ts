namespace Scripts {
    export class Loot {
        static addCutWeapon(): number {
            Scripts.Utils.playerPrint('Target your cut weapon');
            return Orion.WaitForAddObject('cutWeapon', 60000);
        }

        /**
         * Scripts.Loot.lootCorpseId
         * stability beta
         *
         * vylotuje mrtvolky v okoli
         */
        static lootCorpsesAround(cut?: boolean, weapon?: boolean) {
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
        static lootCorpseId(id: string) {
            let serverLagActionsLeft = 4;
            Orion.OpenContainer(id, 5000, `Container id ${id} not found`);
            const itemsInCorpse = Orion.FindList('lootItems', id);
            if (itemsInCorpse.length) {
                for (const itemId of itemsInCorpse) {
                    // TODO doresit prehazeni veci z hlavniho baglu do myLootBag pri lotovani pytliku
                    Orion.MoveItem(itemId, 0, 'myLootBag');
                    Orion.Wait(serverLagActionsLeft ? 50 : 350);
                    serverLagActionsLeft--;
                }
            }
        }

        static lootAllFrom(delay = responseDelay) {
            Scripts.Utils.targetObjectNotSelf('lootAllContainer', `Target object to loot`);

            Orion.OpenContainer('lootAllContainer', 5000, `Container not found`);
            const itemsInCorpse = Orion.FindType('any', 'any', 'lootAllContainer');
            if (itemsInCorpse.length) {
                for (const itemId of itemsInCorpse) {
                    Orion.MoveItem(itemId, 0, 'myLootBag');
                    Orion.Wait(delay);
                }
            }
        }

        static carveBody(carveNearestBodyAutomatically = false) {
            const CUT_WEAPON = 'cutWeapon';
            let cutWeapon = Orion.FindObject(CUT_WEAPON);

            if (!cutWeapon) {
                const nbDaggerSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.nbDagger, 1);
                if (!nbDaggerSerial) {
                    Scripts.Utils.createGameObjectSelections([{ ask: 'Cim budes rezat ?', addObject: CUT_WEAPON }]);
                    cutWeapon = Orion.FindObject(CUT_WEAPON);
                } else {
                    cutWeapon = Orion.FindObject(nbDaggerSerial);
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
