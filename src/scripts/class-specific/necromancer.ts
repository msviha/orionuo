/**
 * @internal
 */
namespace Scripts {
    export class Necromancer {
        static necroMystic(msg: string) {
            const necroMystic = gameObject.uncategorized.necroMystic;
            const mysticSerial = Scripts.Utils.findFirstType(necroMystic, 6);

            if (!mysticSerial) {
                Scripts.Utils.playerPrint('Nemas necro mystic !!!');
                return;
            }

            const mount = Orion.ObjAtLayer('Mount');
            if (mount) {
                Orion.UseObject('self');
                while (Orion.ObjAtLayer('Mount')) {
                    Orion.Wait(50);
                }
            }

            const previousHelmet = Orion.ObjAtLayer('Helmet');
            Orion.UseObject(mysticSerial);
            Orion.Say(msg);
            if (previousHelmet && previousHelmet.Serial() !== mysticSerial) {
                Orion.Wait(responseDelay);
                Orion.UseObject(previousHelmet.Serial());
            }
            Orion.Wait(responseDelay);
            mount && Scripts.Mount.mountAndDismount();
        }
    }
}
