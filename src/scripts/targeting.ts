namespace Scripts {
    export class Targeting {
        static addFriend(): string {
            Scripts.Utils.playerPrint('Add friend');
            const selection = Orion.WaitForAddObject('lastAddedFriend', 60000);
            if (selection !== 1) {
                throw 'e';
            }

            const friend = Orion.FindObject('lastAddedFriend');
            Orion.AddFriend(friend.Name(), friend.Serial());
            return friend.Serial();
        }

        static addEnemy(): string {
            Scripts.Utils.playerPrint('Add enemy');
            const selection = Orion.WaitForAddObject('lastAddedEnemy', 60000);
            if (selection !== 1) {
                throw 'e';
            }

            const enemy = Orion.FindObject('lastAddedEnemy');
            Orion.AddFriend(enemy.Name(), enemy.Serial());
            return enemy.Serial();
        }

        static resetFriends() {
            Orion.ClearFriendList();
            while (Scripts.Targeting.addFriend()) {}
        }

        static resetEnemies() {
            Orion.ClearEnemyList();
            while (Scripts.Targeting.addEnemy()) {}
        }

        /**
         *
         * @param reverse if true.. it behaves like TargetPrevious
         * @constructor
         */
        static targetNext(
            reverse = false,
            timeToStorePreviousTargets = 1500,
            additionalFlags: string[] = [],
            notoriety: string[] = [],
            opts: ITargetNextOpts,
        ) {
            // initialization
            if (Orion.Timer('targetTimer') === -1) {
                Orion.SetTimer('targetTimer');
                Orion.SetGlobal('targetStore', '[]');
            }

            // 2,5 sec time for store the targets when targeting on next/previous
            Orion.Timer('targetTimer') > timeToStorePreviousTargets && Orion.SetGlobal('targetStore', '[]');
            Scripts.Utils.resetTimer('targetTimer');

            const storeAsString = Orion.GetGlobal('targetStore');
            const store = JSON.parse(storeAsString);

            // ignore all from store
            for (const item of store) {
                Orion.Ignore(item.serial);
            }
            let currentIndex = parseInt(Orion.GetGlobal('currentTargetIndex'));

            // pick next target from store (index is not at the end of store in a direction of listing (reverse or not))
            if (
                store.length && // when there is something in store
                ((currentIndex < store.length - 1 && !reverse) || // and it is not at the end
                    (reverse && currentIndex)) // or first (in case of reverse)
            ) {
                currentIndex += reverse ? -1 : 1;
                Orion.SetGlobal('currentTargetIndex', currentIndex.toString());
                Orion.SetGlobal('currentTarget', store[currentIndex]);
            }
            // find new target and store it
            else {
                const flags = ['near', 'mobile', 'live', 'ignoreself'].concat(additionalFlags).join('|');
                const noto = notoriety.join('|') || undefined;
                let nearestNewTarget = Orion.FindType('any', 'any', 'ground', flags, 15, noto);
                let resolved = false;
                while (!resolved && nearestNewTarget?.length && flags.indexOf('ignorefriendlytypes') !== -1) {
                    const t = Orion.FindObject(nearestNewTarget[0]);
                    const isFriendly = Scripts.Targeting.isFriendlyTargetType(t.Graphic(), t.Color(), t.Name());
                    if (!isFriendly) {
                        resolved = true;
                    } else {
                        Orion.Ignore(t.Serial());
                        nearestNewTarget = Orion.FindType('any', 'any', 'ground', flags, 15, noto);
                    }
                }
                const isSomeNewTargetAround = !!nearestNewTarget?.length;
                if (isSomeNewTargetAround) {
                    // push new target to store
                    currentIndex = reverse ? 0 : store.length;
                    const item = { serial: nearestNewTarget[0], name: Orion.FindObject(nearestNewTarget[0]).Name() };
                    reverse ? store.unshift(item) : store.push(item);
                    Orion.SetGlobal('targetStore', JSON.stringify(store));
                } else {
                    if (typeof currentIndex !== 'number') {
                        Scripts.Utils.playerPrint(`NO TARGET`, ColorEnum.green);
                        return;
                    }
                    currentIndex = reverse ? store.length - 1 : 0; // rotate needed
                }
                Orion.SetGlobal('currentTargetIndex', currentIndex.toString());
                Orion.SetGlobal('currentTarget', store[currentIndex]);
            }

            Orion.IgnoreReset();
            if (!store[currentIndex]) {
                Scripts.Utils.playerPrint(`NO TARGET`, ColorEnum.green);
                return;
            }
            const enemySerial = store[currentIndex].serial;
            const enemy = Orion.FindObject(enemySerial);
            if (enemy) {
                Orion.ShowStatusbar(enemySerial, 300, 300);
                Scripts.Targeting.highlightEnemy(
                    enemySerial,
                    enemy,
                    opts.showStatusBar,
                    opts.targetIndication,
                    opts.statusBarPosition,
                );
            } else {
                const enemyNameFromStore = store[currentIndex].name;
                Scripts.Utils.playerPrint(`[${enemyNameFromStore}] out of distance`, ColorEnum.red);
            }
        }

        static manualTarget(opts: ITargetNextOpts) {
            const selection = Orion.WaitForAddObject('manualTargetEnemy');
            Scripts.Utils.waitWhileTargeting();

            if (selection !== 1) {
                return;
            }

            const enemy = Orion.FindObject('manualTargetEnemy');
            if (enemy && enemy.Mobile() && !enemy.Dead()) {
                Scripts.Targeting.highlightEnemy(
                    'manualTargetEnemy',
                    enemy,
                    opts.showStatusBar,
                    opts.targetIndication,
                    opts.statusBarPosition,
                );
            }
        }

        static highlightEnemy(
            enemySerial: string,
            enemy: GameObject,
            showStatusBar = true,
            targetIndicationEnum = TargetIndicationEnum.large,
            statusBarPosition: ICoordinates,
        ) {
            const notoColor = Scripts.Utils.getColorByNotoriety(enemy.Notoriety());

            if (!config.targeting?.highlightEnemySilent) {
                Scripts.Utils.playerPrint(
                    `[${enemy.Name() || 'target'}]: ${enemy.Hits()}/${enemy.MaxHits()}`,
                    notoColor,
                );
                Orion.CharPrint(
                    enemySerial,
                    notoColor,
                    `[${enemy.Name() || 'target'}]: ${enemy.Hits()}/${enemy.MaxHits()}`,
                );
            } else {
                Orion.CharPrint(enemySerial, notoColor, `[${enemy.Hits()}/${enemy.MaxHits()}]`);
            }

            targetIndicationEnum !== TargetIndicationEnum.none &&
                Scripts.Utils.printColoredHpBar(enemySerial, (enemy.Hits() / enemy.MaxHits()) * 100);
            showStatusBar && Scripts.Utils.updateCurrentStatusBar(enemySerial, statusBarPosition);

            Orion.ClearHighlightCharacters();
            Orion.AddObject('lastattack', enemySerial);
            Orion.AddHighlightCharacter(enemySerial, Scripts.Utils.getColorByNotoriety(enemy.Notoriety()));
        }

        static isFriendlyTargetType(graphic: string, color: string, name: string): boolean {
            const friendly = [
                { graphic: '0x000E', color: '0x0000', exceptionNames: ['Earth Elemental'] },
                { graphic: '0x000D', color: '0x0B77' }, // death vortex
                { graphic: '0x0039', color: '0x0835' }, // skeleton warrior
                { graphic: '0x0003', color: '0x0835' }, // mummy
                { graphic: '0x00D4', color: '0x0712', exceptionNames: ['Grizzly Bear'] },
                { graphic: '0x00E8', color: '0x01BB' }, // Bull
                { graphic: '0x00D8', color: '0x0000' }, // Cow
                { graphic: '0x0015', color: '0x0757' }, // Giant Viper
                { graphic: '0x00CC', color: '0x0000' }, // Horse
                { graphic: '0x003C', color: '0x0751' }, // dragon
                { graphic: '0x0090', color: '0x4001' }, // ethernalspirit
                { graphic: '0x003A', color: '0x0B87' }, // angel spirit
                { graphic: '0x003A', color: '0x084C' }, // awaken spirit
                { graphic: '0x00D3', color: '0x0712' }, // brown bear
                { graphic: '0x00E1', color: '0x0712' }, // wolf
                { graphic: '0x00DD', color: '0x0712' }, // walrus
                { graphic: '0x0003', color: '0x049C' }, // magic golem
                { graphic: '0x001A', color: '0x0835' }, // wraith
                { graphic: '0x0027', color: '0x0966' }, // Dark Vampire
            ];

            for (const f of friendly) {
                if (
                    f.graphic === graphic &&
                    f.color === color &&
                    (!f.exceptionNames || f.exceptionNames.indexOf(name) === -1)
                ) {
                    return true;
                }
            }
            return false;
        }

        /**
         *
         * @param timeToStorePreviousTargets - cas v ms po ktery je udrzovan seznam targetu, po uplinuti je proveden reset, zacina se od zacatku. vychozi 1500ms
         * @param notoriety - vychozi [ 'gray', 'criminal', 'orange', 'red' ]
         * @param statusWrapperOpt -
         * @returns TragetResult naplneny zamerenym mobile
         */
        static targetNextMonster(
            reverse = false,
            timeToStorePreviousTargets = 1500,
            notoriety: string[] = ['gray', 'criminal', 'orange', 'red'],
            statusWrapperOpt,
        ): TargetResult {
            const timer = Orion.Timer('tnm.prevTimer');
            let targets = Shared.GetArray('tnm.targets', []);
            let lastSerial = Shared.GetVar('tnm.lastSerial', '');

            if (timer < 0 || timer > timeToStorePreviousTargets) {
                Utils.resetTimer('tnm.prevTimer');
                Shared.RemoveVar('tnm.lastSerial');
                lastSerial = '';
                targets = [];

                const noto = notoriety.join('|') || undefined;
                const friendList = Orion.GetFriendList();
                const nearCharacters = Orion.FindTypeEx('any', '0xFFFF', 'ground', 'mobile|live|ignoreself', 18, noto)
                    .filter((a) => !a.CanChangeName() && !friendList.some((f) => f === a.Serial()))
                    .sort((a, b) => a.Distance() - b.Distance());

                for (const char of nearCharacters) {
                    Utils.ensureName(char);

                    if (
                        (char.Name() &&
                            char.Name().length === 8 &&
                            char.Name()[0].toLowerCase() === char.Name()[0] &&
                            char.Name()[char.Name().length - 1].toUpperCase() ===
                                char.Name()[char.Name().length - 1]) ||
                        Targeting.isFriendlyTargetType(char.Graphic(), char.Color(), char.Name())
                    ) {
                        continue;
                    }

                    const targetObj = {
                        serial: char.Serial(),
                        distance: char.Distance(),
                        priority: 0,
                    };
                    targets.push(targetObj);
                }

                targets.sort((a, b) => {
                    if (a.distance < b.distance) return -1;
                    else if (a.distance > b.distance) return 1;

                    if (a.priority > b.priority) return -1;
                    else if (a.priority < b.priority) return 1;

                    const chrA = Orion.FindObject(a.serial);
                    const chrB = Orion.FindObject(b.serial);

                    if (chrA && chrB && chrA.MaxHits() > chrB.MaxHits()) return -1;
                    else if (chrA && chrB && chrA.MaxHits() < chrB.MaxHits()) return 1;

                    if (chrA && chrB && chrA.Hits() < chrB.Hits()) return -1;
                    else if (chrA && chrB && chrA.Hits() > chrB.Hits()) return 1;

                    return 0;
                });

                Shared.AddArray('tnm.targets', targets);
            }

            const result: TargetResult = new TargetResult();

            if (targets.length > 0) {
                if (!lastSerial || lastSerial === '' || !Orion.FindObject(lastSerial)?.Exists()) {
                    result.gameObject(targets[0].serial);
                    lastSerial = result.gameObject().Serial();
                } else {
                    for (let i = 0; i < targets.length; i++) {
                        const nextPet = Orion.FindObject(targets[i].serial);
                        if (nextPet?.Exists() && nextPet.Serial() === lastSerial) {
                            if (i === targets.length - 1) {
                                result.gameObject(targets[0].serial);
                                lastSerial = targets[0].serial;
                            } else {
                                result.gameObject(targets[i + 1].serial);
                                lastSerial = targets[i + 1].serial;
                            }
                            break;
                        }
                    }
                }
            } else {
                Utils.playerPrint('[ no targets ]', ColorEnum.green, true);
                Shared.RemoveVar('tnm.lastSerial');
            }

            if (result.isValid()) {
                Shared.AddVar('tnm.lastSerial', result.gameObject().Serial());
                Targeting.showStatusBarOnWrapper(result.gameObject().Serial(), statusWrapperOpt);
                Orion.ClientLastTarget(result.gameObject().Serial());
                Scripts.Targeting.highlightEnemy(
                    result.gameObject().Serial(),
                    result.gameObject(),
                    false,
                    TargetIndicationEnum.none,
                    { x: 300, y: 300 },
                );
            }
            return result;
        }

        //Todo predelat na gumpy, ulozeny nastaveni pozice a smer generovani statusbaru, zatim experimental
        static showStatusBarOnWrapper(serial: string, statusWrapperOpt) {
            const barObj = Orion.FindObject(serial);
            const enabled = statusWrapperOpt?.enabled || true;

            if (barObj?.Exists() && barObj.Mobile() && !barObj.Dead() && enabled) {
                const startX = statusWrapperOpt?.x || 200;
                const stattY = statusWrapperOpt?.y || 150;
                const maxCount = statusWrapperOpt?.maxCount || 10;
                const deltaX = statusWrapperOpt?.deltaX || 30;
                const deltaY = statusWrapperOpt?.deltaY || 30;
                let count = 0;

                if (TargetingEx.isEnemy(barObj)) {
                    count = Shared.GetVar('showStatusBarOnWrapper.enemy.count', 0);
                    Shared.AddVar('showStatusBarOnWrapper.enemy.count', ++count);
                    Orion.Print(ColorEnum.pureWhite, '' + count);
                }

                Orion.ShowStatusbar(serial, startX + deltaX * (count % maxCount), stattY + deltaY * (count % maxCount));
            }
        }
    }
}
