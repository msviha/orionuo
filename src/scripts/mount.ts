namespace Scripts {
    export class Mount {
        /**
         * Scripts.Mount.mountAndDismount
         * stability released
         *
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

        static resolveNewMount() {
            Orion.ClearJournal();
            Orion.Wait(50);

            if (Scripts.Mount.mountMyPet()) {
                return;
            }

            Scripts.Mount.unshrinkAndMount();
        }

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

        static unshrinkAndMount() {
            const shrinkedMountsGraphic = '0x211F|0x2121|0x2124|0x20F6|0x2120|0x2135|0x2136|0x2137|0x20DD';
            const shrinkedMounts = Orion.FindType(shrinkedMountsGraphic, '0xFFFF');
            const mountsGraphic = '0x00DF|0x00DC|0x00DA|0x00E2|0x00CC|0x00E4|0x00D2|0x00DB|0x00C8';
            for (const m of shrinkedMounts) {
                Orion.ClearJournal();
                Orion.UseObject(m);
                Orion.Wait(responseDelay);
                const groundPets = Orion.FindType(mountsGraphic, '0xFFFF', 'ground', 'live', 5);
                if (!Orion.InJournal('You cannot unshrink')) {
                    for (const pet of groundPets) {
                        const petObject = Orion.FindObject(pet);
                        if (petObject.CanChangeName()) {
                            Orion.AddObject('myMount', pet);
                            Orion.UseObject(pet);
                            break;
                        }
                    }
                }
            }
        }

        /**
         * Scripts.Mount.addMount
         * stability released
         *
         * Registruje jezditko
         */
        static addMount() {
            Scripts.Utils.targetObjectNotSelf('myMount', `Target your mount`);
        }
    }
}
