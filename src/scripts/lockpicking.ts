namespace Scripts {

    /**
     * lockpicking
     */
    export class Lockpicking {

        static unlock(targetSerial?:string):boolean {
            if (!targetSerial) {
                Scripts.Utils.playerPrint('Target what do you want to unlock');
                Orion.WaitForAddObject('unlockTarget', 60000);
                targetSerial = Orion.FindObject('unlockTarget').Serial();
            }

            const l = gameObject.uncategorized.lockpicks;
            let lockpicks = Orion.FindType(l.graphic, l.color);

            let unlocked = false;
            while (lockpicks.length && !unlocked) {
                Orion.ClearJournal();

                const lockpick = lockpicks[0];
                Orion.CancelWaitTarget();
                Orion.WaitTargetObject(targetSerial);
                Orion.UseObject(lockpick);
                Orion.Wait(responseDelay);

                Scripts.Utils.waitWhileSomethingInJournal(['You fail', 'cannot be'], 500);
                Orion.InJournal('cannot be') && (unlocked = true);
                lockpicks = Orion.FindType(l.graphic, l.color);
            }

            if (!unlocked) {
                Scripts.Utils.log('No lockpicks !!! Cannot unlock container !!!', ColorEnum.red);
            }
            return unlocked;
        }

        static lock(targetSerial?:string, key?:string) {
            if (!targetSerial) {
                Scripts.Utils.playerPrint('Target what do you want to lock');
                Orion.WaitForAddObject('lockTarget', 60000);
                targetSerial = Orion.FindObject('lockTarget').Serial();
            }
            if (!key) {
                Scripts.Utils.playerPrint('Target the key');
                Orion.WaitForAddObject('lockKey', 60000);
                key = Orion.FindObject('lockKey').Serial();
            }

            Orion.ClearJournal();
            Orion.CancelWaitTarget();
            Orion.WaitTargetObject(targetSerial);
            Orion.UseObject(key);
            Orion.Wait(responseDelay);
            Scripts.Utils.waitWhileSomethingInJournal(['You lock', 'You unlock']);
            if (Orion.InJournal('You unlock')) {
                Orion.WaitTargetObject(targetSerial);
                Orion.UseObject(key);
            }
        }

        static lockpicking(targetSerial?:string, key?:string) {
            if (!targetSerial) {
                Scripts.Utils.playerPrint('Target what do you want to lock');
                Orion.WaitForAddObject('lockTarget', 60000);
                targetSerial = Orion.FindObject('lockTarget').Serial();
            }
            if (!key) {
                Scripts.Utils.playerPrint('Target the key');
                Orion.WaitForAddObject('lockKey', 60000);
                key = Orion.FindObject('lockKey').Serial();
            }

            while (true) {
                Orion.Wait(responseDelay);
                Scripts.Lockpicking.lock(targetSerial, key);
                if (!Scripts.Lockpicking.unlock(targetSerial)) {
                    break;
                }
            }

        }

    }
}
