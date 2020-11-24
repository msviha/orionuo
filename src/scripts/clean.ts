namespace Scripts {
    export class Clean {
        /**
         * Scripts.Clean.cleanBag()
         * stability released
         *
         * Hlavni script pro uklizeni veci v baglu, tento script je mozne si upravit podle sebe
         */
        static cleanBag() {
            Scripts.Clean.cleanObjectInBag(gameObject.potions, 'potions');
            Scripts.Clean.cleanObjectInBag(gameObject.books, 'books');
            Scripts.Clean.cleanObjectInBag(gameObject.regy, 'regy');
            Scripts.Clean.cleanObjectInBag(gameObject.necroRegy, 'necroRegy');
            Scripts.Clean.cleanObjectInBag(gameObject.uncategorized, 'uncategorized');
            Scripts.Clean.cleanObjectInBag(gameObject.rings, 'rings');
        }

        /**
         * Scripts.Clean.cleanObjectInBag()
         * stability released
         *
         * Uklidi vsechny veci ktere maji nastaveny bag v danem objectu, uklizi celou strukturu objektu
         */
        static cleanObjectInBag(
            object:any,
            objectName?:string
        ) {
            if (isMyGameObject(object)) {
                Scripts.Clean.cleanMyGameObjectInBag(object, objectName);
                return;
            }

            for (const key in object) {
                Scripts.Clean.cleanObjectInBag(object[key], key);
            }
        }

        /**
         * Scripts.Clean.cleanMyGameObjectInBag
         * stability released
         *
         * Uklidi vsechny veci ktere maji nastaveny bag v danem objectu
         */
        static cleanMyGameObjectInBag(
            type:IMyGameObject,
            tName?:string
        ) {
            let serials = Scripts.Utils.getSerialsFromMyGameObject(type);
            let bag = type.bag?.objectAlias;
            if (bag && !Orion.FindObject(bag)) {
                Orion.AddObject(bag);
                Orion.Print(ColorEnum.none, `Target your [${bag}] for object [${tName?.toUpperCase()}]`);
                 Scripts.Utils.waitWhileTargeting();
            }
            !bag && (bag = 'backpack');

            let x = type.bag?.x || 100;
            const y = type.bag?.y || 100;

            if (serials.length && Orion.FindObject(serials[0]).Count() > 1 && serials.length > 1) {
                for (const serial of serials) {
                    Orion.MoveItem(serial, 0, 'backpack');
                }
                serials = Scripts.Utils.getSerialsFromMyGameObject(type);
            }

            for (let i = 0; i < serials.length; i++) {
                Orion.MoveItem(serials[i], 0, bag, x, y);
                x += 3;
                Orion.Wait(450);
            }
        }
    }
}
