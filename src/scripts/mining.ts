namespace Scripts {

    /**
     * scripty na tezbu
     *
     * jsou docela naprasene, nepouzivam tu vubec normalni chozeni Orion.WalkTo, takze by to chtelo nekdy procistit
     * hlavni scripty jsou
     *
     * mining() ten obejde cely dul a pokud vidi v dosahu forge, tak smelti, jinak proste tezi a tezi
     * kopaniFire() ten kope jedno policko od sebe, vhodne do Fire dungu
     * pickOresAround() bere vsechnu rudu v dosahu a haze na sebe
     * mineAround() kope okolo sebe
     */
    export class Mining {
        static mining() {
            Orion.ClearJournal();

            const visitedCoordinates:ICoordinates[] = [];

            Scripts.Mining.saveCurrentPositionToArray(visitedCoordinates);
            Scripts.Mining.recurseMine(DirectionEnum.East, visitedCoordinates);

        }

        static saveCurrentPositionToArray(arr:ICoordinates[]) {
            arr.push({x: Player.X(), y:Player.Y()});
        }

        static recurseMine(comesFrom:DirectionEnum, visitedCoordinates:ICoordinates[]) {
            const next = Scripts.Mining.getNextDirectionsArray(comesFrom);

            // todo vlastni mine
            const isRock = Scripts.Mining.rockMine();
            const pauseText = 'dam si pauzicku';
            const resumeText = 'konec pauzicky';

            if (Orion.InJournal(pauseText)) {
                while (!Orion.InJournal(resumeText)) {
                    Orion.Wait(2000);
                }
                Orion.ClearJournal(undefined, 'my');
            }

            if (isRock) {
                if (Scripts.Mining.moveDirection(next[0], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[2], visitedCoordinates);
                }
                if (Scripts.Mining.moveDirection(next[1], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[3], visitedCoordinates);
                }
                if (Scripts.Mining.moveDirection(next[2], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[0], visitedCoordinates);
                }
            }

            // get back as a last step
            Scripts.Utils.log("back", ColorEnum.red);
            Scripts.Utils.movePlayerToDirection(comesFrom);
        }

        static moveDirection(direction:DirectionEnum, visitedPositions:ICoordinates[]):boolean {
            let x = Player.X();
            let y = Player.Y();

            let wasVisited = false;
            switch (direction) {
            case DirectionEnum.West:
                wasVisited = Scripts.Mining.wasVisited({x: x - 1, y}, visitedPositions);
                break;
                case DirectionEnum.North:
                wasVisited = Scripts.Mining.wasVisited({x, y: y - 1}, visitedPositions);
                break;
            case DirectionEnum.East:
                wasVisited = Scripts.Mining.wasVisited({x: x + 1, y}, visitedPositions);
                break;
            default:
                wasVisited = Scripts.Mining.wasVisited({x, y: y + 1}, visitedPositions);
                break;
            }

            if (wasVisited) {
                return false;
            }

            if (Orion.InJournal("World save has been")) {
                Orion.Wait(30000);
                Orion.ClearJournal(undefined, 'sys');
            }

            const isSuccess = Scripts.Utils.movePlayerToDirection(direction);
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

        static rockMine() {
            const unwantedOre:any = [
                {color: '0X0000', message: 'iron'},
                {color: '0X0289', message: 'Copper'},
                {color: '0X01BF', message: 'Bronze'},
                {color: '0X0482', message: 'Silver'},
                {color: '0X0322', message: 'Shadow'},
                {color: '0X0665', message: 'Rose'},
                {color: '0X0160', message: 'Golden'},
                {color: '0X01CB', message: 'Verite'},
                {color: '0X0253', message: 'Valorite'},
                {color: '0X04C2', message: 'Blood'},
                // {color: '0X0455', message: 'Black'},
                // {color: '0X052D', message: 'Mytheril'},
                {color: '0X0006', message: 'Sapphire'},
                {color: '0X0041', message: 'Emerald'},
                {color: '0X002C', message: 'Citrine'},
                {color: '0X0015', message: 'Amethyst'},
                {color: '0X0027', message: 'Ruby'},
                {color: '0X03E9', message: 'Diamond'}
            ];
            const ores = [
                '0x19B7', // 1
                '0x19BA', // 2
                '0x19B8', // 3
                '0x19B9'  // 4
            ];
            Orion.ClearJournal(undefined, 'sys');

            const stopText = 'There is no ore here to mine.';
            const falseReturnText = 'Try mining in rock.';

            let keepMine = true;
            while (
                !Player.Dead() && keepMine &&
                !(Orion.InJournal(stopText) || Orion.InJournal(falseReturnText))
            ) {
                Orion.ClearJournal(undefined, 'sys');

                Orion.UseType('0x0E85');
                if (Orion.WaitForTarget(1000)) {
                    Orion.TargetTileRelative('any', 0, 0, 0);
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

                if (Orion.InJournal('You put the')) {
                    let drop = false;
                    for (const ore of unwantedOre) {
                        if (!Orion.InJournal(ore.message)) {
                            continue
                        }
                        keepMine = false;
                        for (const oreGraphic of ores) {
                            const serials = Orion.FindType(oreGraphic);
                            if (!serials.length) {
                                continue;
                            }

                            for (const serial of serials) {
                                const oreObject = Orion.FindObject(serial);
                                if (ore.color === oreObject.Color().toUpperCase()) {
                                    Orion.Drop(serial);
                                    drop = true
                                }
                            }
                        }
                    }

                    // smelt in near forge
                    const forges = Orion.FindType('0x0FB1', '0x0000', 'ground','item', 3 , '-1', true);
                    if (forges.length) {
                        drop && Orion.Wait(500);
                        for (const oreGraphic of ores) {
                            const serials = Orion.FindType(oreGraphic);
                            if (!serials.length) {
                                continue;
                            }
                            for (const serial of serials) {
                                Orion.UseObject(forges[0]);
                                if (Orion.InJournal('reach that')) {
                                    Orion.CancelTarget();
                                    break;
                                }
                                Orion.CancelTarget();
                                Orion.WaitTargetObject(serial);
                                Orion.UseObject(forges[0]);
                                Orion.Wait(500);
                            }
                        }
                    }
                }
            }

            return !Orion.InJournal(falseReturnText);
        }

        static pickOresAround() {
            let stop = false;
            while (!stop) {
                stop = true;

                let oresAround = Orion.FindType("0x19B7|0x19BA|0x19B8|0x19B9", "-1", "ground", "item", 3);
                for (const ore of oresAround) {
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
                    Orion.Wait(500);
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

        static kopaniFire(direction:number, fullMine:boolean)
        {
            const unwantedOre:any = [
                {color: '0X0000', message: 'iron'},
                {color: '0X0289', message: 'Copper'},
                {color: '0X01BF', message: 'Bronze'},
                {color: '0X0482', message: 'Silver'},
                {color: '0X0322', message: 'Shadow'},
                {color: '0X0665', message: 'Rose'},
                {color: '0X0160', message: 'Golden'},
                // {color: '0X01CB', message: 'Verite'},
                // {color: '0X0253', message: 'Valorite'},
                // {color: '0X04C2', message: 'Blood'},
                // {color: '0X0455', message: 'Black'},
                // {color: '0X052D', message: 'Mytheril'},
                {color: '0X0006', message: 'Sapphire'},
                {color: '0X0041', message: 'Emerald'},
                {color: '0X002C', message: 'Citrine'},
                {color: '0X0015', message: 'Amethyst'},
                {color: '0X0027', message: 'Ruby'},
                {color: '0X03E9', message: 'Diamond'}
            ];
            const ores = [
                '0x19B7', // 1
                '0x19BA', // 2
                '0x19B8', // 3
                '0x19B9'  // 4
            ];
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
                        keepMine = false;
                        continue;
                    }

                    if (!Orion.InJournal("You put the")) {
                        continue;
                    }

                    for (const ore of unwantedOre) {
                        if (!Orion.InJournal(ore.message)) {
                            continue;
                        }

                        !fullMine && (keepMine = false);

                        for (const oreGraphic of ores) {
                            const serials = Orion.FindType(oreGraphic);
                            if (!serials.length) {
                                continue;
                            }

                            for (const serial of serials) {
                                const oreObject = Orion.FindObject(serial);
                                if (ore.color === oreObject.Color().toUpperCase()) {
                                    Orion.Drop(serial);
                                }
                            }
                        }
                    }
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
