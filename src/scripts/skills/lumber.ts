namespace Scripts {
    export class Lumber {
        static lumber() {
            let akce = false;
            Shared.AddArray('trees', []);
            Shared.AddArray('harvestedTrees', []);
            while (!Player.Dead()) {
                Orion.ClearJournal(undefined, 'sys');
                const savedTrees = Shared.GetArray('trees', []);
                const newTreesAround = Scripts.Lumber.findTreesAround();
                const all = savedTrees.concat(
                    newTreesAround.filter((obj) => {
                        return !savedTrees.some((obj2) => {
                            return obj.x === obj2.x && obj.y === obj2.y;
                        });
                    }),
                );
                Shared.AddArray('trees', all);

                const x = Player.X();
                const y = Player.Y();
                const z = Player.Z();
                const harvestedTrees = Shared.GetArray('harvestedTrees', []);
                const treesToHarv = all.filter((obj) => {
                    return !harvestedTrees.some((obj2) => {
                        return obj.x === obj2.x && obj.y === obj2.y;
                    });
                });
                const nearestIndex = Scripts.Lumber.findNearestTree(treesToHarv);
                if (nearestIndex === -1) {
                    Scripts.Utils.log('Nejsou v dosahu dalsi stromy');
                    return;
                }
                const coordinates = treesToHarv[nearestIndex];
                harvestedTrees.push(coordinates);
                Shared.AddArray('harvestedTrees', harvestedTrees);
                Orion.WalkTo(coordinates.x, coordinates.y, coordinates.z, 1);

                let msg = 0;
                if (akce) {
                    Scripts.Utils.waitWhileSomethingInJournal(['akce skoncila'], 60000, undefined, undefined);
                    Orion.Wait(responseDelay);
                    akce = false;
                }

                if (Orion.InJournal('attacking you')) {
                    let i = 0;
                    while (!Orion.WalkTo(treesToHarv[i].x, treesToHarv[i].y, treesToHarv[i].z, 1, undefined, 1)) {
                        i++;
                    }
                    continue;
                }
                const reds = Orion.FindType('any', 'any', 'ground', 'mobile|ignoreself', 18, NotorietyEnum.red);
                if (reds.length) {
                    const o = Orion.FindObject(reds[0]);
                    if (o) {
                        Orion.Print('pozor na ' + o.Name());
                    }
                    continue;
                }

                do {
                    Orion.ClearJournal(undefined, 'sys');
                    Orion.WaitTargetTile('tree', coordinates.x, coordinates.y, coordinates.z);
                    Orion.UseType('0x0F43');
                    msg = Scripts.Utils.waitWhileSomethingInJournal(
                        ['You put the', 'destroyed hatchet', 'no logs left', 'way to use that', 'fail to produce'],
                        undefined,
                        undefined,
                        undefined,
                    );

                    if (Orion.InJournal('attacking you')) {
                        let i = 0;
                        while (!Orion.WalkTo(treesToHarv[i].x, treesToHarv[i].y, treesToHarv[i].z, 1, undefined, 1)) {
                            i++;
                        }
                        continue;
                    }

                    if (msg === 1) {
                        continue;
                    }

                    if (msg === 2) {
                        akce = true; // popojit v dalsim cyklu nez skonci akce aby se nezdrzoval
                        break;
                    }

                    Scripts.Utils.waitWhileSomethingInJournal(['akce skoncila'], undefined, undefined, undefined);

                    if (Orion.InJournal('found something special')) {
                        const specialLogs = Orion.FindType('0x1BDD', '!0x0000', 'ground', '', 3);
                        Orion.MoveItem(specialLogs[0]);
                    } else {
                        const logs = Orion.FindType('0x1BDD', '0x0000');
                        logs.length && Orion.Drop(logs[0]);
                    }
                    Orion.Wait(responseDelay);

                    if (Player.MaxWeight() - 30 < Player.Weight()) {
                        Scripts.Port.travelBook(PortBookOptionsEnum.kop);
                        return;
                    }
                } while (msg !== 2 && msg !== 3);
            }
        }

        static findTreesAround(): any[] {
            const dist = 9;
            const coordinates = [];
            const px = Player.X();
            const py = Player.Y();
            const rect = Orion.GetTilesInRect('tree', px - dist, py - dist, px + dist, py + dist);
            for (let i = 0; i < rect.length; i++) {
                const t = rect[i];
                coordinates.push({ x: t.X(), y: t.Y(), z: t.Z() });
            }

            const trees = [...coordinates];
            const reds = Orion.FindType('any', 'any', 'ground', 'mobile|ignoreself', 18, NotorietyEnum.red);
            if (reds.length) {
                for (let i = coordinates.length - 1; i >= 0; i--) {
                    const t = coordinates[i];
                    for (const r of reds) {
                        const ro = Orion.FindObject(r);
                        const rx = ro.X();
                        const ry = ro.Y();
                        const dx = t.x > rx ? t.x - rx : rx - t.x;
                        const dy = t.y > ry ? t.y - ry : ry - t.y;
                        if (dx < 15 && dy < 15) {
                            trees.splice(i, 1);
                            break;
                        }
                    }
                }
            }

            return trees;
        }

        // return index of nearest tree
        static findNearestTree(trees: ICoordinates[]): number {
            let index = -1;
            let dist = 999;
            const px = Player.X();
            const py = Player.Y();

            for (let i = 0; i < trees.length; i++) {
                const t = trees[i];
                const x = t.x;
                const y = t.y;
                const dx = x > px ? x - px : px - x;
                const dy = y > py ? y - py : py - y;
                const d = dx + dy;
                if (dist > d) {
                    dist = d;
                    index = i;
                }
            }

            return index;
        }
    }
}
