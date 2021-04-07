namespace Scripts {
    /**
     * scripty na tezbu
     *
     */
    export class Mining {
        static getUnwantedOre() {
            return [
                { color: '0x0000', message: 'iron' },
                { color: '0x0289', message: 'Copper' },
                { color: '0x01BF', message: 'Bronze' },
                { color: '0x0482', message: 'Silver' },
                { color: '0x0322', message: 'Shadow' },
                { color: '0x0665', message: 'Rose' },
                { color: '0x0160', message: 'Golden' },
                { color: '0x01CB', message: 'Verite' },
                { color: '0x0253', message: 'Valorite' },
                { color: '0x04C2', message: 'Blood' },
                { color: '0x0455', message: 'Black' },
                // {color: '0x052D', message: 'Mytheril'},
                { color: '0x0006', message: 'Sapphire' },
                { color: '0x0041', message: 'Emerald' },
                { color: '0x002C', message: 'Citrine' },
                { color: '0x0015', message: 'Amethyst' },
                { color: '0x0027', message: 'Ruby' },
                { color: '0x03E9', message: 'Diamond' },
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

        static dropUnwantedOre(): boolean {
            const unwantedOre: any = Scripts.Mining.getUnwantedOre();
            const ores = [
                '0x19B7', // 1
                '0x19BA', // 2
                '0x19B8', // 3
                '0x19B9', // 4
            ];

            let drop = false;
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

                const oresAround = Orion.FindType('0x19B7|0x19BA|0x19B8|0x19B9', colors, 'ground', 'item', distance);
                for (const ore of oresAround) {
                    if (distance === 0) {
                        Orion.MoveItem(ore);
                    } else {
                        const oreObject = Orion.FindObject(ore);
                        if (!oreObject || (oreObject.X() === Player.X() && oreObject.Y() === Player.Y())) {
                            continue;
                        }

                        const count = oreObject.Count();
                        if (count > 50) {
                            Orion.MoveItem(ore, 50);
                            stop = false;
                        } else {
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

        static kopaniFire(direction: number, fullMine: boolean) {
            const west = 6;
            const south = 4;
            const east = 2;
            const north = 0;

            const x = Player.X();
            const y = Player.Y();

            if (Player.Direction() !== direction) {
                Orion.Step(direction, true);
                Orion.Wait(Orion.OptionFastRotation() ? 50 : 100);
            }

            Orion.Step(direction, false);
            Orion.Wait(415);

            const right = direction === 6 ? 0 : direction + 2;
            if (Player.X() === x && Player.Y() === y) {
                Scripts.Mining.kopaniFire(right, fullMine);
            } else {
                // uspesny krok
                // kopat relativne vlevo od hrace
                // pokus o krok na pole kde se kopalo pripadne kroky ve smeru hodin (priklad s, w, n, e - bude znamenat ze se vraci)
                const relativeKopY = x - Player.X();
                const relativeKopX = Player.Y() - y;

                Orion.ClearJournal();
                const keepMine = true;
                while (keepMine && !Orion.InJournal('There is no ore') && !Orion.InJournal('Try mining')) {
                    Orion.ClearJournal();
                    Orion.UseType('0x0E85');
                    if (Orion.WaitForTarget(1000)) {
                        Orion.TargetTileRelative('any', relativeKopX, relativeKopY, 0);
                    }
                    while (
                        /*!Orion.InJournal("akce skoncila") ||*/
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

                    if (Orion.InJournal('You loosen')) {
                        continue;
                    }

                    if (!Orion.InJournal('You put the')) {
                        continue;
                    }

                    Scripts.Mining.dropUnwantedOre();
                }

                //krok na pole kde se kopalo
                if (relativeKopY > 0) {
                    Scripts.Mining.kopaniFire(south, fullMine);
                } else if (relativeKopY < 0) {
                    Scripts.Mining.kopaniFire(north, fullMine);
                } else if (relativeKopX > 0) {
                    Scripts.Mining.kopaniFire(east, fullMine);
                } else {
                    Scripts.Mining.kopaniFire(west, fullMine);
                }
            }
        }
    }
}
