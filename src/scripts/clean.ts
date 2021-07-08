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
        static cleanObjectInBag(object: any, objectName?: string) {
            if (isMyGameObject(object)) {
                Scripts.Clean.cleanMyGameObjectInBag(object, objectName);
                return;
            }

            for (const key in object) {
                Scripts.Clean.cleanObjectInBag(object[key], key);
            }
        }

        /**
         * Scripts.Clean.cleanObjectInBagCoord()
         * stability released
         *
         * Uklidi vsechny veci vcele strukture objektu s vychozimi souradnicemi, ignoruje bag.x bag.y nastaveny u itemu
         * recuseSearch - hledat itemy ktere budu tridit i v podkontejnerech, vychozi ano.
         * coordinates - pocatecni pozice, vychozi x 100 y 100
         * delta - posun itemu po ose X, vyvhozi 3
         *
         */
        static cleanObjectInBagCoord(
            object: any,
            objectName?: string,
            recuseSearch = true,
            coordinates: ICoordinates = { x: 100, y: 100 },
            delta?: number,
        ): ICoordinates {
            if (isMyGameObject(object)) {
                return Clean.cleanMyGameObjectInBag(object, objectName, recuseSearch, coordinates, delta);
            } else {
                let coord = coordinates;
                const list = Clean.findUniqueGameObjects(object);
                for (let i = 0; i < list.length; i++) {
                    const item = list[i];
                    coord = Clean.cleanObjectInBagCoord(item, 'Multi item ' + i, recuseSearch, coord, delta);
                }
            }
            return coordinates;
        }

        static getSerialsFromMyGameObject(type: IMyGameObject, recuseSearch = true): string[] {
            if (type.color) {
                return Orion.FindType(type.graphic, type.color, 'backpack', '', 'finddistance', '', recuseSearch);
            } else {
                return Orion.FindType(type.graphic, 'any', 'backpack', '', 'findDistance', '', recuseSearch);
            }
        }

        /**
         * Scripts.Clean.cleanMyGameObjectInBag
         * stability released
         *
         * Uklidi vsechny veci ktere maji nastaveny bag v danem objectu
         */
        static cleanMyGameObjectInBag(
            type: IMyGameObject,
            tName?: string,
            recuseSearch = true,
            coordinates?: ICoordinates,
            delta?: number,
        ): ICoordinates {
            let serials = Clean.getSerialsFromMyGameObject(type, recuseSearch);
            let bag = type.bag?.objectAlias;
            if (bag && !Orion.FindObject(bag)) {
                Orion.AddObject(bag);
                Orion.Print(ColorEnum.none, `Target your [${bag}] for object [${tName?.toUpperCase()}]`);
                Scripts.Utils.waitWhileTargeting();
            }
            !bag && (bag = 'backpack');

            let x = coordinates?.x || type.bag?.x || 100;
            const y = coordinates?.y || type.bag?.y || 100;
            const d = delta || 3;

            if (serials.length && Orion.FindObject(serials[0]).Count() > 1 && serials.length > 1) {
                for (const serial of serials) {
                    Orion.MoveItem(serial, 0, 'backpack');
                }
                serials = Clean.getSerialsFromMyGameObject(type, recuseSearch);
            }

            for (let i = 0; i < serials.length; i++) {
                Orion.MoveItem(serials[i], 0, bag, x, y);
                x += d;
                Orion.Wait(450);
            }
            return { x: x, y: y } as ICoordinates;
        }

        /**
         * Odstrani duplicity, napr. u stejnych grafik lahvicek LC, GC atd.
         * @param object objekt ktery bude rekurzivne prohledan, hledaji se property splnujici IMyGameObjekt
         * @returns pole IMyGameObjektu
         */
        static findUniqueGameObjects(object: any): Array<IMyGameObject> {
            const list = new Array<IMyGameObject>();
            if (isMyGameObject(object)) {
                list.push(object);
            } else {
                for (const key in object) {
                    list.push(...Clean.findUniqueGameObjects(object[key]));
                }
            }

            const resultList = new Array<IMyGameObject>();
            for (let i = 0; i < list.length; i++) {
                const item = list[i];

                if (
                    !resultList.some(function (o) {
                        return o.graphic === item.graphic && o.color === item.color;
                    })
                ) {
                    resultList.push(item);
                }
            }

            return resultList;
        }

        static getGameObjectList(object: any): Array<IMyGameObject> {
            const list: Array<IMyGameObject> = new Array<IMyGameObject>();

            if (isMyGameObject(object)) {
                list.push(object);
            } else {
                for (const key in object) {
                    list.push(...Clean.getGameObjectList(object[key]));
                }
            }
            return list;
        }

        static sortBackpackCaleb() {
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0E9B', color: '0x0000', bag: { x: 10, y: 30 } }, 'Mortar');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0FF0', color: '0x08A5', bag: { x: 10, y: 45 } }, 'Rune book');
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x0FEF', color: '0x0482', bag: { x: 10, y: 60 } },
                'Travel Book',
            );
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0EFA', color: '0xFFFF', bag: { x: 10, y: 75 } }, 'Spell book');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x176B', color: '0x0000', bag: { x: 10, y: 90 } }, 'Key Ring');
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x10E4', color: '0x0000', bag: { x: 10, y: 105 } },
                'Drawing knife',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x1837', color: '0x0000', bag: { x: 10, y: 120 } },
                'Poison Kit',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x12CA', color: '0x0B4E', bag: { x: 20, y: 130 } },
                'Soska samana',
            );
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1374', color: '0x0B4C', bag: { x: 10, y: 140 } }, 'Voditko');
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x0E21', color: '0x0000', bag: { x: 10, y: 155 } },
                'Clean bandages',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x1EB8', color: '0x0749', bag: { x: 10, y: 170 } },
                'Kapsarske Naradicko',
            );
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0FC4', color: '0x0B83', bag: { x: 150, y: 30 } }, 'DuchStepi');
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x0E26', color: '0x0B83', bag: { x: 170, y: 30 } },
                'DuchPralesa',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x1F19', color: '0xFFFF', bag: { x: 120, y: 10 } },
                'Stone Vamp Krystal',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x1843', color: '0x04CC', bag: { x: 150, y: 10 } },
                'Stone imunka',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x1B17', color: '0x0493', bag: { x: 170, y: 10 } },
                'Greezi Artefakt',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x22C5', color: '0x0000', bag: { x: 180, y: 30 } },
                'Cestovni Kniha',
            );
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1EA0', color: '0xFFFF', bag: { x: 180, y: 45 } }, 'Quiver');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0F9E', color: '0xFFFF', bag: { x: 180, y: 60 } }, 'Nuzky');
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x1F06', color: '0x0B18', bag: { x: 180, y: 75 } },
                'Lock naramek',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x0FBD', color: '0xFFFF', bag: { x: 180, y: 90 } },
                'Klan kniha',
            );
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1940', color: '0xFFFF', bag: { x: 180, y: 105 } }, 'Klan kad');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0E75', color: '0xFFFF', bag: { x: 180, y: 120 } }, 'Backpack');
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x0E79', color: '0xFFFF', bag: { x: 180, y: 130 } },
                'Beltpouch',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x09B0', color: '0xFFFF', bag: { x: 180, y: 140 } },
                'Beltpouch 2',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x09A8', color: '0x049B', bag: { x: 180, y: 140 } },
                'Gold bedna',
            );
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1F14', color: '0x0B1D', bag: { x: 165, y: 170 } }, 'NbRuna');
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x227A', color: '0x0498', bag: { x: 180, y: 155 } },
                'Dungeon scrool',
            );
            Scripts.Clean.cleanObjectInBag(
                { graphic: '0x0F0E', color: '0x0000', bag: { x: 180, y: 170 } },
                'Empty bottle',
            );
            Clean.cleanObjectInBagCoord(gameObject.weapons, 'weapons', false, { x: 40, y: 130 }, 6);
            Clean.cleanObjectInBagCoord(gameObject.regy, 'regy', false, { x: 15, y: 180 }, 6);
            Clean.cleanObjectInBagCoord(gameObject.necroRegy, 'necroRegy', false, { x: 70, y: 180 }, 2);
            Clean.cleanObjectInBagCoord(gameObject.potions, 'potions', false, { x: 40, y: 10 }, 3);
            Clean.cleanObjectInBagCoord(gameObject.rings, 'rings', false, { x: 20, y: 45 }, 6);
            Clean.cleanObjectInBagCoord(gameObject.klamak, 'klamak', false, { x: 20, y: 10 }, 1);
            Clean.cleanObjectInBagCoord(gameObject.uncategorized.hodf, 'hodf', false, { x: 20, y: 55 }, 6);
        }
    }
}
