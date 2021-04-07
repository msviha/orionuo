namespace Scripts {
    // todo work in progress
    export class Klamak {
        /**
         * Scripts.Klamak.next
         * stability implementation
         *
         * x
         */
        static next() {
            const lists = ['petlvl1', 'petlvl2', 'petlvl3', 'petlvl4', 'petlvl5'];
            const current = Orion.GetGlobal('klamak');

            if (!current) {
                Orion.SetGlobal('klamak', lists[0]);
            } else {
                const currentIndex = lists.indexOf(current);
                const nextIndex = currentIndex + 1 === lists.length ? 0 : currentIndex + 1;
                Orion.SetGlobal('klamak', lists[nextIndex]);
            }

            const nextList = Orion.GetGlobal('klamak');
            Scripts.Utils.playerPrint(nextList);
        }

        static useKlamak(lvl: number, useAim = false, priorityList: string[] = [], ignoreSerials: string[] = []) {
            const level = gameObject.klamak['lvl' + lvl];

            let findSerial = '';
            for (const klamakName of priorityList) {
                for (const itemName in level) {
                    if (klamakName === itemName) {
                        const klamak = level[itemName];
                        const klamakSerials = Orion.FindType(klamak.graphic, klamak.color);
                        const s = klamakSerials.filter((i) => ignoreSerials.indexOf(i) === -1);
                        if (s.length) {
                            findSerial = s[0];
                            break;
                        }
                    }
                }
                if (findSerial !== '') {
                    break;
                }
            }

            // no priority list or no klamak found by priority list
            if (findSerial === '') {
                for (const itemName in level) {
                    if (priorityList.indexOf(itemName) > -1) {
                        // exclude what was iterated before
                        continue;
                    }
                    const klamak = level[itemName];
                    const klamakSerials = Orion.FindType(klamak.graphic, klamak.color);
                    const s = klamakSerials.filter((i) => ignoreSerials.indexOf(i) === -1);
                    if (s.length) {
                        findSerial = s[0];
                        break;
                    }
                }
            }

            if (findSerial === '') {
                Scripts.Utils.playerPrint(`[ nemas pety ]`, ColorEnum.red);
                return;
            }

            if (useAim) {
                const selection = Orion.WaitForAddObject('klamakTarget');
                if (selection === 0) {
                    return;
                }
                const target: any = {};

                if (selection === 1) {
                    const targetGameObject = Orion.FindObject('klamakTarget');
                    target.x = targetGameObject.X();
                    target.y = targetGameObject.Y();
                    target.z = targetGameObject.Z();
                } else {
                    target.x = SelectedTile.X();
                    target.y = SelectedTile.Y();
                    target.z = SelectedTile.Z();
                }
                Orion.MoveItem(findSerial, 1, 'ground', target.x, target.y, target.z);
                Orion.Wait(responseDelay);
            }
            Orion.WarMode(true);
            Orion.Wait(100);
            Orion.UseObject(findSerial);
        }
    }
}
