namespace Scripts {
    export class Dress {
        /**
         * Scripts.Dress.resetStats()
         *
         * resetuje staty pomoci travel booku / cestovni knihy
         */
        static resetStats() {
            const currentEquip = Scripts.Dress.getSerialsFromCurrentEquip();

            const tbObj = gameObject.books.travelBook;
            const travelBook = Scripts.Utils.findFirstType(tbObj);

            const cestovniObj = gameObject.books.cestovniKniha;
            const cestovniBook = Scripts.Utils.findFirstType(cestovniObj);

            if (!travelBook && !cestovniBook) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK NEBO CESTOVNI KNIHU', ColorEnum.red);
                return;
            }

            if (travelBook) {
                Scripts.Port.travelBook(PortBookOptionsEnum.opravaStats);
            } else {
                Scripts.Port.cestovniKniha(PortBookOptionsEnum.opravaStats);
            }

            Orion.Wait(responseDelay);
            Scripts.Dress.equip(currentEquip);
        }

        static getSerialsFromCurrentEquip(): Array<string | undefined> {
            const serials = [];
            serials.push(Orion.ObjAtLayer(14, 'self')?.Serial()); // bracelet

            serials.push(Orion.ObjAtLayer(2, 'self')?.Serial()); // stit
            serials.push(Orion.ObjAtLayer(13, 'self')?.Serial()); // hrud
            serials.push(Orion.ObjAtLayer(4, 'self')?.Serial()); // nohy leather
            serials.push(Orion.ObjAtLayer(24, 'self')?.Serial()); // nohy plate
            serials.push(Orion.ObjAtLayer(19, 'self')?.Serial()); // rukavy
            serials.push(Orion.ObjAtLayer(6, 'self')?.Serial()); // helma
            serials.push(Orion.ObjAtLayer(7, 'self')?.Serial()); // rukavice
            serials.push(Orion.ObjAtLayer(10, 'self')?.Serial()); // krk

            serials.push(Orion.ObjAtLayer(1, 'self')?.Serial()); // zbran

            serials.push(Orion.ObjAtLayer(22, 'self')?.Serial()); // robe
            serials.push(Orion.ObjAtLayer(3, 'self')?.Serial()); // boty
            serials.push(Orion.ObjAtLayer(17, 'self')?.Serial()); // serpa
            serials.push(Orion.ObjAtLayer(12, 'self')?.Serial()); // half-apron
            serials.push(Orion.ObjAtLayer(20, 'self')?.Serial()); // cloak

            return serials;
        }

        static saveEquip() {
            const equipSerials = Scripts.Dress.getSerialsFromCurrentEquip();
            Shared.AddArray('savedEquip', equipSerials);
            Scripts.Utils.playerPrint('ULOZEN EQUIP');
        }

        static equip(eq?: Array<string | undefined>) {
            if (!eq) {
                eq = Shared.GetArray('savedEquip');
            }

            let dropObj:{x, y, container}|undefined;

            Orion.Wait(100);
            if (Player.Weight() > Player.MaxWeight()) {
                Scripts.Utils.playerPrint('Nelze spustit equip, chces neco docasne polozit na zem ?');
                Orion.WaitForAddObject('equipTempDrop', 60000);

                const drop = Orion.FindObject('equipTempDrop');
                dropObj = {x: drop.X(), y: drop.Y(), container: drop.Container()};
                drop && Orion.MoveItem(drop.Serial(), 0);
                Orion.Wait(500);
            }

            for (const s of eq) {
                if (!s) {
                    continue;
                }
                if (Player.Weight() <= Player.MaxWeight()) {
                    Orion.Equip(s);
                    Orion.Wait(500);
                } else {
                    Scripts.Utils.log('EQUIP NEBUDE SPUSTEN SI PODHOZEN', ColorEnum.red);
                    return;
                }

            }

            const drop = Orion.FindObject('equipTempDrop');
            dropObj && drop && Orion.MoveItem(drop.Serial(), 0, dropObj.container, dropObj.x, dropObj.y);
        }

        static nextWeapon(showName = false, previous = false) {
            let currentWeaponIndex = Shared.GetVar('currentWeaponArrayIndex', -1);
            const weapons = Shared.GetArray('weapons');
            if (!weapons?.length) {
                Scripts.Utils.playerPrint('Nemas nasetovane zadne zbrane, zkus dat nejdrive _resetWeapons');
                return;
            }

            if (previous) {
                currentWeaponIndex--;
                currentWeaponIndex < 0 && (currentWeaponIndex = weapons.length - 1);
            } else {
                currentWeaponIndex++;
                weapons.length === currentWeaponIndex && (currentWeaponIndex = 0);
            }
            Shared.AddVar('currentWeaponArrayIndex', currentWeaponIndex);

            const w = weapons[currentWeaponIndex];
            const weaponAlias = w.alias;
            const weaponName = w.name;
            const weapon = Orion.FindObject(weaponAlias);
            if (!weapon) {
                Scripts.Utils.playerPrint(`nenasel jsem zbran ${weaponAlias}`, ColorEnum.red);
            } else {
                showName && Scripts.Utils.playerPrint(weaponName, ColorEnum.orange);
                Orion.Equip(weaponAlias);
                Orion.Wait(responseDelay);
            }

            if (!Orion.ObjAtLayer(2, 'self')) {
                const shield = Orion.FindObject('shield');
                if (shield) {
                    Orion.Equip('shield');
                }
            }
        }

        static addWeapon(index: number): boolean {
            Scripts.Utils.playerPrint(`Add weapon on slot ${index}`);
            const alias = `weapon${index}`;
            const selection = Orion.WaitForAddObject(alias, 60000);
            return selection === 1;
        }

        static addShield(): boolean {
            Scripts.Utils.playerPrint(`Add shield`);
            const alias = `shield`;
            const selection = Orion.WaitForAddObject(alias, 60000);
            return selection === 1;
        }

        static resetWeaponsArray() {
            let i = 1;
            const weapons = [];
            while (Scripts.Dress.addWeapon(i)) {
                const alias = `weapon${i}`;
                Orion.Click(alias);
                Orion.Wait(responseDelay);
                const weapon = Orion.FindObject(alias);
                weapons.push({ alias, name: weapon.Name() });
                i++;
            }
            Scripts.Dress.addShield();

            Shared.AddArray('weapons', weapons);
        }
    }
}
