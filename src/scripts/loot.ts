const LOOT_BAG = 'loot/bag';

namespace Scripts {
    export class Loot {
        /**
         * Nastavenie loot pytliku
         *
         * Return values:
         * 0 - cancel / timeout
         * 1 - selection of a game object
         * 2 - selection of a static object
         * 3 - land selection.
         *
         * @returns number
         */
        static addLootBag(): number {
            Scripts.Utils.playerPrint('Target your loot bag');
            return Orion.WaitForAddObject(LOOT_BAG, 60000);
        }

        /**
         * Nastavenie nastroja na rezanie mrtvol
         *
         * Return values:
         * 0 - cancel / timeout
         * 1 - selection of a game object
         * 2 - selection of a static object
         * 3 - land selection.
         *
         * @returns number
         */
        static addCutWeapon(): number {
            Scripts.Utils.playerPrint('Target your cut weapon');
            return Orion.WaitForAddObject('cutWeapon', 60000);
        }

        /**
         * Rezanie tela
         *
         * @param carveNearestBodyAutomatically bolean
         */
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

        /**
         * Loot mrtvol v okoli
         *
         * @param cut boolean - rezanie mrtvol? (default = true)
         */
        static corpses(cut = true) {
            Orion.ClearJournal('You put the');
            const snapshot = this.getBagSnapshot();
            this.lootCorpsesAround(cut);
            Orion.Wait(350);
            this.displayLoot();
            this.moveLootToLootBag(snapshot);
        }

        /**
         * Lootovanie vsetkeho z vybraneho kontajnera
         *
         * @param delay number - delay v milisekundach
         */
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

        /**
         * Loot mrtvol okolo v radiuse 2 policka
         */
        private static lootCorpsesAround(cut?: boolean) {
            let listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            const LHand = Orion.ObjAtLayer(1);
            const RHand = Orion.ObjAtLayer(2);
            while (listOfCorpses.length) {
                for (const id of listOfCorpses) {
                    Scripts.Loot.lootCorpseId(id, cut);
                    Orion.Ignore(id);
                    Orion.Wait(100);
                }
                listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            }
            Scripts.Dress.equip([LHand?.Serial(), RHand?.Serial()]);

            const itemsOnGround = Orion.FindList('lootItems', 'ground', 'fast', 4);
            this.grabItems(itemsOnGround);
        }

        /**
         * Loot konkretnej mrtvoly
         *
         * @param corpseId string - serial mrtvoly
         * @param cut boolean - rezat?
         * @param weapon boolean - pouzivat zbran na rezanie?
         */
        static lootCorpseId(corpseId: string, cut?: boolean) {
            Orion.OpenContainer(corpseId, 5000, `Container id ${corpseId} not found`);

            const hasLootBag = Orion.Count('0x0E76', '0x049A', corpseId) > 0;
            if (hasLootBag && cut) {
                if (Orion.FindObject('cutWeapon')) {
                    Orion.CancelWaitTarget();
                    Orion.WaitTargetObject(corpseId);
                    Orion.UseObject('cutWeapon');
                }
                Orion.Wait(250);
            }

            const itemsInCorpse = Orion.FindList('lootItems', corpseId);
            if (itemsInCorpse.length) {
                this.grabItems(itemsInCorpse);
            }
        }

        private static grabItems(serials: string[]) {
            let serverLagActionsLeft = 4;
            for (const serial of serials) {
                Orion.MoveItem(serial, 0);
                Orion.Wait(serverLagActionsLeft > 0 ? 150 : 500);
                serverLagActionsLeft--;
            }
        }

        /**
         * Vrati array serialov veci v zakladnom batohu
         *
         * @returns string[]
         */
        static getBagSnapshot(): string[] {
            return Orion.FindType(-1, -1, 'backpack', 'item', undefined, undefined, false);
        }

        /**
         * Presunie veci do loot bagu
         *
         * @param oldSnapshot - array serialov na ignorovanie
         */
        static moveLootToLootBag(oldSnapshot: string[], lootBag = LOOT_BAG) {
            if (!Orion.FindObject(lootBag)) {
                return;
            }

            this.getBagSnapshot()
                .filter((serial) => oldSnapshot.indexOf(serial) < 0)
                .forEach((serial, i) => {
                    Orion.MoveItem(serial, 0, lootBag);
                    Orion.Wait(i > 4 ? 500 : 250);
                });
        }

        /**
         * Zobrazenie lootnuteho itemu nad hlavou
         */
        private static displayLoot() {
            const excludes = [
                'Loot',
                'gold coins',

                'Black Pearlss',
                'Ginsengs',
                'Sulfurous Ashs',
                'Nightshades',
                'Garlics',
                'Blood Mosss',
                "Spider's Silk",
                "Spider's Silks",
                'Mandrake Rootss',

                "Serpent's Scales",
                'Brimstones',
                'Boness',
                'Eyes of Newts',
                "Wyrm's Heartss",
                'Volcanic Ashs',
                "Executioner's Caps",
                'Fertile Dirts',
                'Blackmoors',
                'Pumices',
                'Obsidians',
                'Bloodspawns',
                'Daemon Bloods',
                'Daemon Boness',
                "Serpent's Scaless",
                'Batwingss',
                "Dragon's Bloods",
            ];

            const aliases = {
                'Ancient Bone Helmet': '+5 Necro Helm',
                'Ancient Bone Arms': '+5 Necro Arms',
                'Ancient Bone Gloves': '+5 Necro Gloves',
                'Ancient Bone Leggins': '+5 Necro Legs',
                'Ancient Bone Chest': '+5 Necro Chest',
                'Ancient Skeleton Helmet': '+15 Necro Helm',
                'Ancient Skeleton Arms': '+15 Necro Arms',
                'Ancient Skeleton Gloves': '+15 Necro Gloves',
                'Ancient Skeleton Leggins': '+15 Necro Legs',
                'Ancient Skeleton Chest': '+15 Necro Chest',
                'Ancient Liche Helmet': '+25 Necro Helm',
                'Ancient Liche Arms': '+25 Necro Arms',
                'Ancient Liche Gloves': '+25 Necro Gloves',
                'Ancient Liche Leggins': '+25 Necro Legs',
                'Ancient Liche Chest': '+25 Necro Chest',
            };

            const parseLootItem = (itemName: string) => {
                const types = {
                    'of Ruin': '+1',
                    'of Might': '+3',
                    'of Force': '+5',
                    'of Power': '+7',
                    'of Vanquishing': '+9',
                    'of Defense': '+5',
                    'of Guarding': '+10',
                    'of Hardening': '+15',
                    'of Fortification': '+20',
                    'of Invulnerability': '+25',
                };

                for (const suffix in types) {
                    if (itemName.indexOf(suffix) > 0) {
                        return `${types[suffix]} ${itemName.replace(suffix, '')}`;
                    }
                }

                return itemName;
            };

            for (let i = 0; Orion.JournalLine(i); i++) {
                const lootText = Orion.JournalLine(i).Text();
                if (lootText.indexOf('You put the') == 0) {
                    const loot = lootText.replace('You put the ', '').replace(' in your pack.', '');
                    if (loot.length && excludes.indexOf(loot) < 0) {
                        const displayLoot = aliases[loot] || parseLootItem(loot);
                        Scripts.Utils.playerPrint(displayLoot, ColorEnum.green);

                        if (displayLoot === 'Dark Chest of Wonders') {
                            Orion.UseType('0x0E80', '0x0123');
                            Orion.Wait(100);
                        }
                    }
                }
            }
        }
    }
}
