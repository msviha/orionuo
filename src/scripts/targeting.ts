namespace Scripts {

    /**
     * stability EXPERIMENTAL
     * scripty na pvp a targetovani
     */
    export class Targeting {
        /**
         *
         * @param reverse if true.. it behaves like TargetPrevious
         * @constructor
         */
        static targetNext(reverse = false) {
            // initialization
            if (Orion.Timer('targetTimer') === -1) {
                Orion.SetTimer('targetTimer');
                Orion.SetGlobal('targetStore', '[]');
            }

            // 2,5 sec time for store the targets when targeting on next/previous
            Orion.Timer('targetTimer') > 2500 && Orion.SetGlobal('targetStore', '[]');
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
                const nearestNewTarget = Orion.FindType("any", "any", "ground", "near|mobile|live|ignoreself", 15);
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
                Scripts.Targeting.highlightEnemy(enemySerial, enemy);
            }
            else {
                const enemyNameFromStore = store[currentIndex].name;
                Scripts.Utils.playerPrint(`[${enemyNameFromStore}] out of distance`, ColorEnum.red);
            }
        }

        static manualTarget() {
            const selection = Orion.WaitForAddObject('manualTargetEnemy');
            Scripts.Utils.waitWhileTargeting();

            if (selection !== 1) {
                return;
            }

            const enemy = Orion.FindObject('manualTargetEnemy');
            if (enemy && enemy.Mobile() && !enemy.Dead()) {
                Scripts.Targeting.highlightEnemy('manualTargetEnemy', enemy);
            }
        }

        static highlightEnemy(enemySerial:string, enemy:GameObject) {
            const notoColor = Scripts.Wip.getColorByNotoriety(enemy.Notoriety());

            Scripts.Utils.playerPrint(`[${enemy.Name() || 'target'}]: ${enemy.Hits()}/${enemy.MaxHits()}`, notoColor);
            Orion.CharPrint(enemySerial, notoColor, `[${enemy.Name() || 'target'}]: ${enemy.Hits()}/${enemy.MaxHits()}`);
            Scripts.Utils.printColoredHpBar(enemySerial, enemy.Hits() / enemy.MaxHits() * 100);
            Scripts.Utils.updateCurrentStatusBar(enemySerial);

            Orion.Attack(enemySerial);
            Orion.WarMode(false);
            Orion.WarMode(true);
        }
    }
}
