/**
 * @internal
 */
namespace Scripts {
    export class Auto {
        static killObject(serialToKill:string, poisonTrain = false) {
            let enemy = Orion.FindObject(serialToKill);
            Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
            poisonTrain && Scripts.Common.poisonTrain(serialToKill);
            Orion.Attack(serialToKill);
            Orion.Wait(6000);

            if (enemy) {
                while (enemy && !enemy.Dead()) {
                    Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
                    Orion.Wait(2000);
                    enemy = Orion.FindObject(serialToKill);
                }
            }
        }

        static afk(
            file = 'C:/critical.wav',
            pattern = '',
            flags = 'mobile|item',
            repeatPeriod = 1500,
            duration = 15000
        ) {
            Orion.ClearJournal();
            Orion.RemoveTimer('afk');
            let alarm = false;
            while (!Player.Dead() && Orion.Timer('afk') < duration) {
                if (Orion.InJournal(pattern, 'mobile|item')) {
                    alarm = true;
                    Orion.Timer('afk') === -1 && Orion.SetTimer('afk');
                }
                alarm && Orion.PlayWav(file);
                Orion.Wait(repeatPeriod);
            }
        }
    }
}
