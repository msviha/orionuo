namespace Scripts {
    export class Dress {

        /**
         * Scripts.Dress.resetStats()
         * stability beta
         *
         * resetuje staty pomoci travel booku
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
            }
            else {
                Scripts.Port.cestovniKniha(PortBookOptionsEnum.opravaStats);
            }

            Orion.Wait(responseDelay);
            Scripts.Dress.equip(currentEquip);
        }

        static getSerialsFromCurrentEquip():Array<string|undefined> {
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

        static equip(eq?:Array<string|undefined>) {
            if (!eq) {
                eq = Shared.GetArray('savedEquip');
            }
            for (const s of eq) {
                if (!s) {
                    continue;
                }
                Orion.Equip(s);
                Orion.Wait(150);
            }
        }
    }
}
