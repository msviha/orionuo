/**
 * @internal
 */
namespace Scripts {
    export class Medic {

        static KPZPull() {
            Medic.useKPZ(() => {
                Scripts.Utils.playerPrint(MedicActionsEnum.pull, ColorEnum.green);
                Orion.Cast("Greater Heal");
            });
        }

        static KPZJump() {
            Medic.useKPZ(() => {
                Scripts.Utils.playerPrint(MedicActionsEnum.jump, ColorEnum.green);
                Orion.Cast("Protection");
            });
        }

        static KPZHpSwitch() {
            Medic.useKPZ(() => {
                Scripts.Utils.playerPrint(MedicActionsEnum.switchHp, ColorEnum.green);
                Orion.Cast("Reactive Armor");
            });
        }

        static useKPZ(cb: Function): boolean {
            const kpzList = Orion.FindType(gameObject.medic.kpz.graphic, gameObject.medic.kpz.color, "backpack");
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
