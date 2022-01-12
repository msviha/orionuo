namespace Scripts {
    export class Autostart {

        static updatePlayerHp() {
            const playerHp = Shared.GetVar('playerHp', undefined)
            Scripts.Utils.printDamage(Player.Serial(), playerHp);
            Shared.AddVar('playerHp', Player.Hits());
        }

        static updateLastAttackHp() {
            let previousLastAttackSerial = Shared.GetVar('previousLastAttackSerial', undefined);
            let previousLastAttackHp = Shared.GetVar('previousLastAttackHp', undefined);

            const lastAttackSerial = Orion.ClientLastAttack();
            const lastAttack = Scripts.Utils.getLivingObjectInDistance(lastAttackSerial);
            if (lastAttack) {
                const lastAttackChange = previousLastAttackSerial !== lastAttackSerial;
                Scripts.Utils.printDamage(
                    lastAttackSerial,
                    lastAttackChange ? lastAttack.Hits() : previousLastAttackHp,
                    lastAttackChange);
                Shared.AddVar('previousLastAttackHp', lastAttack.Hits());
                Shared.AddVar('previousLastAttackSerial', lastAttackSerial);
            }
        }

        static autoRename(nearCharacters:GameObject[]) {
            const doneList: Array<IRenamedMob> = Shared.GetArray(
                'autoHandlers.autoRename.doneList',
                new Array<IRenamedMob>(),
            );
            const renameMounts = config?.autoHandlers?.autoRename?.renameMounts;
            const renamePacks = config?.autoHandlers?.autoRename?.renamePacks;

            for (let i = 0; i < nearCharacters.length; i++) {
                const char = nearCharacters[i];
                if (char.Serial() === Player.Serial()) {
                    continue;
                }

                //Serialy se na serveru recykluji celkem casto, takze pro overeni i grafika, uvidime.
                if (
                    doneList.some((o) => {
                        o.serial === char.Serial() && o.graphic === char.Graphic();
                    })
                ) {
                    continue;
                }

                if (!renameMounts) {
                    const isMount = '0x00DF|0x00DC|0x00DA|0x00E2|0x00CC|0x00E4|0x00D2|0x00DB|0x00C8'.split('|')
                        .indexOf(char.Graphic()) > -1
                    if (isMount) {
                        Scripts.Autostart.ensureCanChangeName(char);
                        continue;
                    }
                }

                if (!renamePacks) {
                    const isPack = ['0x0123', '0x0124'].indexOf(char.Graphic()) > -1
                    if (isPack) {
                        Scripts.Autostart.ensureCanChangeName(char);
                        continue;
                    }
                }

                if (Scripts.MobMaster.rename(char)) {
                    const doneItem: IRenamedMob = { graphic: char.Graphic(), serial: char.Serial() };
                    doneList.push(doneItem);
                    Shared.AddArray('autoHandlers.autoRename.doneList', doneList);
                    break;
                }
            }
        }

        static ensureCanChangeName(char:GameObject) {
            if (!char?.CanChangeName()) {
                Scripts.MobMaster.getStatus(char?.Serial());
                Orion.RequestName(char?.Serial());
                Scripts.Utils.waitForCond(() => {
                    return char?.CanChangeName();
                    }, 150);
            }
        }

        static checkWorldSave() {
            if (Orion.InJournal('World save has been initiated.', 'sys')) {
                Shared.AddVar('ws', true);
                Scripts.Utils.playerPrint(`World save !!!`, ColorEnum.red);
                Orion.ClearJournal('World save has been initiated.', 'sys');
                Orion.Wait(5000);
                Orion.Click(Player.Serial());

                const time = Orion.Now() + 20000;
                while (
                    !(Orion.InJournal(Player.Name(), 'my', Player.Serial())?.Text().indexOf(Player.Name()) > -1) &&
                    Orion.Now() < time &&
                    !Player.Dead()
                    ) {
                    Orion.Wait(50);
                }
                Scripts.Utils.playerPrint(`World save DONE`, ColorEnum.green);
                Orion.Wait(1500);
                Shared.AddVar('ws', false);
            }
        }
    }
}
