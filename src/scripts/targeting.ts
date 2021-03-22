namespace Scripts {
    export class Targeting {
        static addFriend():string {
            Scripts.Utils.playerPrint('Add friend');
            const selection = Orion.WaitForAddObject('lastAddedFriend', 60000);
            if (selection !== 1) {
                throw 'e';
            }

            const friend = Orion.FindObject('lastAddedFriend');
            Orion.AddFriend(friend.Name(), friend.Serial());
            return friend.Serial();
        }

        static addEnemy():string {
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
            additionalFlags:string[] = [],
            notoriety:string[] = [],
            opts:ITargetNextOpts
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
                store.length && ( // when there is something in store
                    (currentIndex < store.length - 1 && !reverse) || // and it is not at the end
                    (reverse && currentIndex) // or first (in case of reverse)
                )
            ) {
                currentIndex += (reverse ? -1 : 1);
                Orion.SetGlobal('currentTargetIndex', currentIndex.toString());
                Orion.SetGlobal('currentTarget', store[currentIndex]);
            }
            // find new target and store it
            else {
                const flags = ['near', 'mobile', 'live', 'ignoreself'].concat(additionalFlags).join('|');
                const noto = notoriety.join('|') || undefined;
                let nearestNewTarget = Orion.FindType("any", "any", "ground", flags, 15, noto);
                let resolved = false;
                while (!resolved && nearestNewTarget?.length && flags.indexOf('ignorefriendlytypes') !== -1) {
                    const t = Orion.FindObject(nearestNewTarget[0]);
                    const isFriendly = Scripts.Targeting.isFriendlyTargetType(t.Graphic(), t.Color(), t.Name());
                    if (!isFriendly) {
                        resolved = true;
                    }
                    else {
                        Orion.Ignore(t.Serial());
                        nearestNewTarget = Orion.FindType("any", "any", "ground", flags, 15, noto);
                    }
                }
                const isSomeNewTargetAround = !!nearestNewTarget?.length;
                if (isSomeNewTargetAround) {
                    // push new target to store
                    currentIndex = reverse ? 0 : store.length;
                    const item = {serial: nearestNewTarget[0], name: Orion.FindObject(nearestNewTarget[0]).Name()}
                    reverse ? store.unshift(item) : store.push(item);
                    Orion.SetGlobal('targetStore', JSON.stringify(store));
                }
                else {
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
                Scripts.Targeting.highlightEnemy(enemySerial, enemy, opts.showStatusBar, opts.targetIndication, opts.statusBarPosition);
            }
            else {
                const enemyNameFromStore = store[currentIndex].name;
                Scripts.Utils.playerPrint(`[${enemyNameFromStore}] out of distance`, ColorEnum.red);
            }
        }

        static manualTarget(opts:ITargetNextOpts) {
            const selection = Orion.WaitForAddObject('manualTargetEnemy');
            Scripts.Utils.waitWhileTargeting();

            if (selection !== 1) {
                return;
            }

            const enemy = Orion.FindObject('manualTargetEnemy');
            if (enemy && enemy.Mobile() && !enemy.Dead()) {
                Scripts.Targeting.highlightEnemy('manualTargetEnemy', enemy, opts.showStatusBar, opts.targetIndication, opts.statusBarPosition);
            }
        }

        static highlightEnemy(
            enemySerial:string,
            enemy:GameObject,
            showStatusBar = true,
            targetIndicationEnum = TargetIndicationEnum.large,
            statusBarPosition:ICoordinates
        ) {
            const notoColor = Scripts.Utils.getColorByNotoriety(enemy.Notoriety());

            Scripts.Utils.playerPrint(`[${enemy.Name() || 'target'}]: ${enemy.Hits()}/${enemy.MaxHits()}`, notoColor);
            Orion.CharPrint(enemySerial, notoColor, `[${enemy.Name() || 'target'}]: ${enemy.Hits()}/${enemy.MaxHits()}`);
            targetIndicationEnum !== TargetIndicationEnum.none && Scripts.Utils.printColoredHpBar(enemySerial, enemy.Hits() / enemy.MaxHits() * 100);
            showStatusBar && Scripts.Utils.updateCurrentStatusBar(enemySerial, statusBarPosition);

            Orion.ClearHighlightCharacters();
            Orion.AddObject('lastattack', enemySerial);
            Orion.AddHighlightCharacter(enemySerial, Scripts.Utils.getColorByNotoriety(enemy.Notoriety()));
        }

        static isFriendlyTargetType(graphic:string, color:string, name:string):boolean {
            const friendly = [
                {graphic: '0x000E', color: '0x0000', exceptionNames: ['Earth Elemental']},
                {graphic: '0x000D', color: '0x0000'}, // death vortex
                {graphic: '0x0039', color: '0x0835'}, // skeleton warrior
                {graphic: '0x0003', color: '0x0835'}, // mummy
                {graphic: '0x00D4', color: '0x0712', exceptionNames: ['Grizzly Bear']},
                {graphic: '0x00E8', color: '0x01BB'}, // Bull
                {graphic: '0x00D8', color: '0x0000'}, // Cow
                {graphic: '0x0015', color: '0x0757'}, // Giant Viper
                {graphic: '0x00CC', color: '0x0000'} // Horse
            ];

            for (const f of friendly) {
                if (f.graphic === graphic && f.color === color && (!f.exceptionNames || f.exceptionNames.indexOf(name) === -1)) {
                    return true;
                }
            }
            return false;
        }
    }
}
