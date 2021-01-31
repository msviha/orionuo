/**
 * @internal
 */
namespace Scripts {
    const KPZ = {
        graphic: "0x09B0",
        color: "0x0493",
    }

    enum Actions {
        pull = "KPZ - Pull",
        jump = "KPZ - Jump",
        switchHp = "KPZ - Switch HP",
    }

    export class Medic {

        static KPZPull() {
            Medic.useKPZ(() => {
                Scripts.Utils.playerPrint(Actions.pull, ColorEnum.green);
                Orion.Cast("Greater Heal");
            });
        }

        static KPZJump() {
            Medic.useKPZ(() => {
                Scripts.Utils.playerPrint(Actions.jump, ColorEnum.green);
                Orion.Cast("Protection");
            });
        }

        static KPZHpSwitch() {
            Medic.useKPZ(() => {
                Scripts.Utils.playerPrint(Actions.switchHp, ColorEnum.green);
                Orion.Cast("Reactive Armor");
            });
        }

        static useKPZ(cb: Function): boolean {
            const kpzList = Orion.FindType(KPZ.graphic, KPZ.color, "backpack");
            const kpz = kpzList.length > 0 ? kpzList[0] : null;

            Orion.ClearJournal();

            if (!kpz) {
                Scripts.Utils.playerPrint('Nemas KPZ');
                return false;
            }

            Orion.UseObject(kpz);

            Scripts.Utils.waitWhileSomethingInJournal(['activated KPZ', 't use that yet', 'pouze v dungeon zone'], 3000);
            if (Orion.InJournal('activated KPZ')) {
                cb();
            }
        }
    }
}
