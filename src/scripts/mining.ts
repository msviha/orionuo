namespace Scripts {

    /**
     * scripty na tezbu
     *
     */
    export class Mining {
        static mining(kopAndTreasure = false, skladacka = true, fullMine = false) {
            Orion.ClearJournal();

            const visitedCoordinates:ICoordinates[] = [];

            Scripts.Mining.saveCurrentPositionToArray(visitedCoordinates);
            Scripts.Mining.recurseMine(DirectionEnum.East, visitedCoordinates, kopAndTreasure, skladacka, fullMine);
        }

        static miningPort(runes:string[]) {
            const source = 'miningTreasure';
            for (const rune of runes) {
                Orion.OpenContainer(source);
                Orion.Wait(500);
                const r = gameObject.regy;
                Scripts.Utils.refill(r.bm, source, 20);
                Scripts.Utils.refill(r.bp, source, 20);
                Scripts.Utils.refill(r.mr, source, 20);
                const runeMyGameObject = gameObject.uncategorized.recallRune;
                const runeGameObject = Orion.FindObject(rune);
                if (runeGameObject.Color() !== runeMyGameObject.color) {
                    Scripts.Utils.log('ROZBITA RUNA', ColorEnum.red);
                    continue;
                }
                Scripts.Mining.takeRunePortAndReturnItBack(rune, source);
                Scripts.Mining.mining(true);
                Scripts.Mining.portAndMoveToTreasure();
            }
        }

        static portAndMoveToTreasure() {
            const treasure = 'miningTreasure';
            Orion.ClearJournal();
            Scripts.Port.nbRune(true);
            Scripts.Utils.walkToSerial(treasure);
            Scripts.Utils.moveObjectToContainer(gameObject.resources.ingots, 'backpack', treasure);
            Scripts.Utils.moveObjectToContainer(gameObject.resources.ore, 'backpack', treasure);
            Scripts.Utils.moveObjectToContainer(gameObject.resources.stones, 'backpack', treasure);
            Orion.ClearJournal();
        }

        static takeRunePortAndReturnItBack(runeSerial:string, sourceContainer:string) {
            Orion.MoveItem(runeSerial);
            Orion.Wait(responseDelay);
            Scripts.Port.rune(runeSerial);
            Orion.Wait(1000);
            Orion.MoveItem(runeSerial, undefined, sourceContainer);
            const teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000);
            !teleported && Scripts.Mining.takeRunePortAndReturnItBack(runeSerial, sourceContainer);
        }

        static saveCurrentPositionToArray(arr:ICoordinates[]) {
            arr.push({x: Player.X(), y:Player.Y()});
        }

        static recurseMine(comesFrom:DirectionEnum, visitedCoordinates:ICoordinates[], kopAndTreasure = false, skladacka = true, fullMine = false) {
            const lastVisitedPosition = visitedCoordinates.length ? visitedCoordinates[visitedCoordinates.length - 1] : undefined;
            const next = Scripts.Mining.getNextDirectionsArray(comesFrom);

            Scripts.Mining.pickOresAround(1);
            const n = Player.Name();
            let isRock = Scripts.Mining.rockMine(kopAndTreasure, skladacka, fullMine) && (!n.indexOf('Wil') || !n.indexOf('Urc'));

            if (Player.Dead()) {
                throw 'dead'
            }

            if (isRock) {
                if (Scripts.Mining.moveDirection(next[0], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[2], visitedCoordinates, kopAndTreasure, skladacka, fullMine);
                }
                if (Scripts.Mining.moveDirection(next[1], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[3], visitedCoordinates, kopAndTreasure, skladacka, fullMine);
                }
                if (Scripts.Mining.moveDirection(next[2], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[0], visitedCoordinates, kopAndTreasure, skladacka, fullMine);
                }
            }

            // get back as a last step
            Scripts.Utils.log("back", ColorEnum.red);
            if (!lastVisitedPosition) {
                throw 'error'
            }
            Orion.WalkTo(lastVisitedPosition.x, lastVisitedPosition.y, Player.Z(), 0, undefined, undefined, 1500);
            Scripts.Mining.pickOresAround(1);
        }

        static moveDirection(direction:DirectionEnum, visitedPositions:ICoordinates[]):boolean {
            const nextCoordinates = Scripts.Utils.getCoordinatesForDirection(direction);
            const wasVisited = Scripts.Mining.wasVisited(nextCoordinates, visitedPositions);
            if (wasVisited) {
                return false;
            }

            Scripts.Utils.worldSaveCheckWait();

            const isSuccess = Orion.WalkTo(nextCoordinates.x, nextCoordinates.y, Player.Z(), 0, undefined, undefined, 500);
            if (isSuccess) {
                Scripts.Mining.saveCurrentPositionToArray(visitedPositions);
            }

            return isSuccess;
        }

        static wasVisited(currentPosition:ICoordinates, visitedPositions:ICoordinates[]):boolean {
            for (const visited of visitedPositions) {
                if (visited.x === currentPosition.x && visited.y === currentPosition.y) {
                    return true;
                }
            }
            return false;
        }

        static getNextDirectionsArray(comesFrom:DirectionEnum):DirectionEnum[] {
            switch(comesFrom) {
                case DirectionEnum.West:
                    return [DirectionEnum.North, DirectionEnum.East, DirectionEnum.South, DirectionEnum.West];
                case DirectionEnum.North:
                    return [DirectionEnum.East, DirectionEnum.South, DirectionEnum.West, DirectionEnum.North];
                case DirectionEnum.East:
                    return [DirectionEnum.South, DirectionEnum.West, DirectionEnum.North, DirectionEnum.East];
                default:
                    return [DirectionEnum.West, DirectionEnum.North, DirectionEnum.East, DirectionEnum.South];
            }
        }

        static rockMine(kopAndTreasure = false, skladacka = true, fullMine = false) {
            Orion.ClearJournal(undefined, 'sys');

            let drop = false;
            while (!Player.Dead() && (!drop || fullMine)) {
                Orion.ClearJournal(undefined, 'sys');

                Orion.WaitTargetTile('any');
                Orion.UseType('0x0E85');

                Scripts.Utils.waitWhileSomethingInJournal([
                    'You put the',
                    'There is no ore',
                    'Try mining',
                    'You loosen',
                    'You destroy'
                ]);
                !skladacka && Scripts.Utils.waitWhileSomethingInJournal(['akce skoncila']);
                if (Orion.InJournal('Try mining')) {
                    return false
                }
                if (Orion.InJournal('You loosen')) {
                    continue;
                }
                if (Orion.InJournal('There is no ore')) {
                    return true;
                }

                drop = Scripts.Mining.dropUnwantedOre();

                if (!drop && kopAndTreasure && Orion.InJournal('is too heavy')) {
                    Scripts.Mining.markKopTreasureKop();
                    Scripts.Mining.pickOresAround(0);
                }

                Scripts.Mining.smeltInNearForge();
            }

            return true;
        }

        static smeltInNearForge() {
            const colors = Scripts.Mining.getWantedOreColorsFilter();
            const oresInBackpack = Orion.FindType('0x19B7|0x19BA|0x19B8|0x19B9', colors, 'backpack');
            if (!oresInBackpack.length) {
                return;
            }

            Orion.ClearJournal();
            Orion.Wait(500);
            let success = false;
            let reachableForges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 3, '-1', true);
            if (reachableForges.length) {
                for (const ore of oresInBackpack) {
                    success = Scripts.Mining.smelt(ore, reachableForges[0]);
                    if (!success) {
                        break;
                    }
                }
            }

            const forges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 8, '-1', true);
            if (!(!success && forges.length && Player.Weight() > Player.MaxWeight() - 150)) {
                return;
            }

            const playerPosition = {
                x: Player.X(),
                y: Player.Y(),
                z: Player.Z()
            }

            const forge = Orion.FindObject(forges[0]);
            for (const ore of oresInBackpack) {
                reachableForges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 1, '-1', true);
                if (!reachableForges.length) {
                    Orion.WalkTo(forge.X(), forge.Y(), forge.Z(), 1, undefined, undefined, 5000);
                }
                reachableForges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 1, '-1', true);
                let success = reachableForges.length && Scripts.Mining.smelt(ore, forge.Serial());
                if (!success) {
                    break;
                }
            }

            Orion.WalkTo(playerPosition.x, playerPosition.y, playerPosition.z, 0);
        }

        static smelt(oreSerial:string, forgeSerial:string):boolean {
            Orion.WaitTargetObject(oreSerial);
            Orion.UseObject(forgeSerial);
            Orion.Wait(responseDelay);
            if (Orion.InJournal('reach that|far')) {
                return false;
            }
            return true;
        }

        static markKopTreasureKop() {
            const recall = gameObject.scrolls.standard.recall;

            // mark a presun do truhly
            Scripts.Port.travelBook(PortBookOptionsEnum.mark);
            Orion.Wait(2000);
            Scripts.Mining.portAndMoveToTreasure();

            // nabiti knizky
            Orion.OpenContainer('miningTreasure');
            Orion.Wait(500);
            Scripts.Utils.refill(recall, 'miningTreasure', 2);
            Orion.Wait(500);
            Scripts.Port.travelBook(PortBookOptionsEnum.nabiti);
            Orion.Wait(500);

            // port zpet
            Scripts.Port.travelBook(PortBookOptionsEnum.kop);
            Orion.Wait(500);
        }

        static getUnwantedOre() {
            return [
                {color: '0x0000', message: 'iron'},
                {color: '0x0289', message: 'Copper'},
                {color: '0x01BF', message: 'Bronze'},
                {color: '0x0482', message: 'Silver'},
                {color: '0x0322', message: 'Shadow'},
                {color: '0x0665', message: 'Rose'},
                {color: '0x0160', message: 'Golden'},
                {color: '0x01CB', message: 'Verite'},
                {color: '0x0253', message: 'Valorite'},
                {color: '0x04C2', message: 'Blood'},
                {color: '0x0455', message: 'Black'},
                // {color: '0x052D', message: 'Mytheril'},
                {color: '0x0006', message: 'Sapphire'},
                {color: '0x0041', message: 'Emerald'},
                {color: '0x002C', message: 'Citrine'},
                {color: '0x0015', message: 'Amethyst'},
                {color: '0x0027', message: 'Ruby'},
                {color: '0x03E9', message: 'Diamond'}
            ];
        }

        static getWantedOreColorsFilter() {
            const unwantedOre = Scripts.Mining.getUnwantedOre();
            const colorsArray = [];
            for (const ore of unwantedOre) {
                colorsArray.push(`!${ore.color}`);
            }
            return colorsArray.join('|');
        }

        static dropUnwantedOre():boolean {
            const unwantedOre:any = Scripts.Mining.getUnwantedOre();
            const ores = [
                '0x19B7', // 1
                '0x19BA', // 2
                '0x19B8', // 3
                '0x19B9'  // 4
            ];

            let drop = false
            for (const ore of unwantedOre) {
                if (!Orion.InJournal(ore.message)) {
                    continue;
                }
                drop = true;
                for (const oreGraphic of ores) {
                    const serials = Orion.FindType(oreGraphic);
                    if (!serials.length) {
                        continue;
                    }
                    for (const serial of serials) {
                        const oreObject = Orion.FindObject(serial);
                        if (ore.color === oreObject.Color()) {
                            Orion.Drop(serial);
                        }
                    }
                }
            }
            return drop;
        }

        static pickOresAround(distance = 3) {
            const colors = Scripts.Mining.getWantedOreColorsFilter();
            let stop = false;
            while (!stop && !Player.Dead()) {
                stop = true;

                let oresAround = Orion.FindType("0x19B7|0x19BA|0x19B8|0x19B9", colors, "ground", "item", distance);
                for (const ore of oresAround) {
                    if (distance === 0) {
                        Orion.MoveItem(ore);
                    }
                    else {
                        const oreObject = Orion.FindObject(ore);
                        if (!oreObject || oreObject.X() === Player.X() && oreObject.Y() === Player.Y()) {
                            continue;
                        }
    
                        const count = oreObject.Count();
                        if (count > 50) {
                            Orion.MoveItem(ore, 50);
                            stop = false;
                        }
                        else {
                            Orion.MoveItem(ore);
                        }
                    }
                    Orion.Wait(responseDelay);
                }
            }
        }

        static mineAround() {
            Orion.ClearJournal(undefined, 'sys');

            const radius = 2;
            for (let x = radius; x >= radius * -1; x--) {
                for (let y = radius; y >= radius * -1; y--) {
                    Scripts.Utils.playerPrint(`mineAround: x: ${x}, y: ${y}`, ColorEnum.green);
                    while (
                        !Player.Dead() &&
                        !(Orion.InJournal('There is no ore') || Orion.InJournal('Try mining in rock'))
                    ) {
                        Orion.ClearJournal(undefined, 'sys');

                        Orion.UseType('0x0E85');
                        if (Orion.WaitForTarget(1000)) {
                            Orion.TargetTileRelative('any', x, y, 0);
                        }

                        while (
                            /*!Orion.InJournal('akce skoncila') ||*/ // kopani jen se skladackou bez cekani na konec akce
                            !(
                                Orion.InJournal('You put the') ||
                                Orion.InJournal('There is no ore') ||
                                Orion.InJournal('Try mining') ||
                                Orion.InJournal('You loosen') ||
                                Orion.InJournal('You destroy')
                            )
                            ) {
                            Orion.Wait(200);
                        }
                    }
                    Orion.ClearJournal(undefined, 'sys');
                }
                Scripts.Mining.pickOresAround(); // to prevent loosing the old ore on ground
            }
        }

        static kopaniFire(direction:number, fullMine:boolean) {
            const west = 6;
            const south = 4;
            const east = 2;
            const north = 0;

            let x = Player.X();
            let y = Player.Y();

            if (Player.Direction() !== direction) {
                Orion.Step(direction, true);
                Orion.Wait(Orion.OptionFastRotation() ? 50 : 100);
            }

            Orion.Step(direction, false);
            Orion.Wait(415);

            let right = direction === 6 ? 0 : direction + 2;
            if (Player.X() === x && Player.Y() === y) {
                Scripts.Mining.kopaniFire(right, fullMine);
            }
            else {
                // uspesny krok
                // kopat relativne vlevo od hrace
                // pokus o krok na pole kde se kopalo pripadne kroky ve smeru hodin (priklad s, w, n, e - bude znamenat ze se vraci)
                const relativeKopY = x - Player.X();
                const relativeKopX = Player.Y() - y;

                Orion.ClearJournal();
                let keepMine = true;
                while (keepMine && !Orion.InJournal("There is no ore") && !Orion.InJournal("Try mining")) {
                    Orion.ClearJournal();
                    Orion.UseType('0x0E85');
                    if (Orion.WaitForTarget(1000)) {
                        Orion.TargetTileRelative('any', relativeKopX, relativeKopY, 0);
                    }
                    while (
                        /*!Orion.InJournal("akce skoncila") ||*/
                        !(
                            Orion.InJournal("You put the") ||
                            Orion.InJournal("There is no ore") ||
                            Orion.InJournal("Try mining") ||
                            Orion.InJournal("You loosen") ||
                            Orion.InJournal("You destroy")
                        )
                        ) {
                        Orion.Wait(200);
                    }

                    if (Orion.InJournal("You loosen")) {
                        continue;
                    }

                    if (!Orion.InJournal("You put the")) {
                        continue;
                    }

                    Scripts.Mining.dropUnwantedOre();
                }

                //krok na pole kde se kopalo
                if (relativeKopY > 0) {
                    Scripts.Mining.kopaniFire(south, fullMine)
                }
                else if (relativeKopY < 0) {
                    Scripts.Mining.kopaniFire(north, fullMine)
                }
                else if (relativeKopX > 0) {
                    Scripts.Mining.kopaniFire(east, fullMine)
                }
                else {
                    Scripts.Mining.kopaniFire(west, fullMine)
                }
            }
        }
    }
}
