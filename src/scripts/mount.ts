namespace Scripts {
    export class Mount {
        /**
         * naseda/seseda z jezditka
         */
        static mountAndDismount() {
            if (Orion.ObjAtLayer('Mount')) {
                Orion.UseObject('self');
            } else if (!Orion.FindObject('myMount')) {
                Scripts.Mount.resolveNewMount();
            } else {
                Orion.UseObject('myMount');
            }
        }

        /**
         * Nasedne na stavajici, nebo na nove jezditko
         */
        static resolveNewMount() {
            Orion.ClearJournal();
            Orion.Wait(50);

            if (Scripts.Mount.mountMyPet()) {
                return;
            }

            Scripts.Mount.unshrinkAndMount();
        }

        /**
         * Najde vlastni jezditko v okoli 5 policek a nasedne na nej
         * pokud ne tak vrati false
         */
        static mountMyPet(): boolean {
            const mountsGraphic = '0x00DF|0x00DC|0x00DA|0x00E2|0x00CC|0x00E4|0x00D2|0x00DB|0x00C8';
            const groundPets = Orion.FindType(mountsGraphic, '0xFFFF', 'ground', 'live', 5);
            for (const pet of groundPets) {
                const petObject = Orion.FindObject(pet);
                if (petObject.CanChangeName()) {
                    Orion.AddObject('myMount', pet);
                    Orion.UseObject(pet);
                    if (!Orion.InJournal('reach the creature')) {
                        return true;
                    }
                    Orion.ClearJournal();
                }
            }
            return false;
        }

        /**
         * Odshrinkuje jezditko a nasedne
         */
        static unshrinkAndMount() {
            const shrinkedMountsGraphic = '0x211F|0x2121|0x2124|0x20F6|0x2120|0x2135|0x2136|0x2137|0x20DD';
            const shrinkedMounts = Orion.FindType(shrinkedMountsGraphic, '0xFFFF');
            const mountsGraphic = '0x00DF|0x00DC|0x00DA|0x00E2|0x00CC|0x00E4|0x00D2|0x00DB|0x00C8';

            if (!shrinkedMounts.length) {
                return;
            }

            Orion.WarMode(true);
            Orion.ClearJournal();
            Orion.UseObject(shrinkedMounts[0]);
            Orion.Wait(responseDelay);
            if (Orion.InJournal('You cannot unshrink creature here or now')) {
                Orion.ClearJournal('You cannot unshrink creature');
                Scripts.Utils.log('You cannot unshrink creature here or now', ColorEnum.red);
                throw 'e';
            }

            Scripts.Klamak.klamakCooldown();

            const groundPets = Orion.FindType(mountsGraphic, '0xFFFF', 'ground', 'live', 5);
            for (const pet of groundPets) {
                const petObject = Orion.FindObject(pet);
                if (petObject.CanChangeName()) {
                    Orion.AddObject('myMount', pet);
                    Orion.UseObject(pet);
                    break;
                }
            }
        }

        /**
         * Registruje jezditko
         */
        static addMount() {
            Scripts.Utils.targetObjectNotSelf('myMount', `Target your mount`);
        }
    }
}
