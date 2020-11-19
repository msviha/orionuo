/**
 * @internal
 */
namespace Scripts {
    export class Auto {
        static killObject(
            serialToKill:string,
            poisonTrain = false,
            dmgToStartHeal = 40,
            fullHeal = false,
            castCure = false,
            drinkCure = false
        ) {
            let enemy = Orion.FindObject(serialToKill);
            Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
            poisonTrain && Scripts.Common.poisonTrain(serialToKill);
            Orion.Attack(serialToKill);
            Orion.Wait(6000);

            if (enemy) {
                while (enemy && !enemy.Dead()) {
                    Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
                    Orion.Wait(2000);
                    const needToAttackAgain = Scripts.Auto.healAndCureWhenHarving(dmgToStartHeal, fullHeal, castCure, drinkCure);
                    needToAttackAgain && Orion.Attack(serialToKill);
                    enemy = Orion.FindObject(serialToKill);
                }
            }
        }

        static healAndCureWhenHarving(dmgToStartHeal:number, fullHeal:boolean, castCure:boolean, drinkCure:boolean):boolean {
            if (Player.Hits() > Player.MaxHits() - dmgToStartHeal) {
                return false;
            }

            let keepHealing = fullHeal;
            while (keepHealing || Player.Hits() <= Player.MaxHits() - dmgToStartHeal) {
                Scripts.Common.bandageSelf();
                keepHealing = fullHeal && Player.Hits() !== Player.MaxHits();
            }

            if (Player.Poisoned()) {
                if (castCure) {
                    Scripts.Spells.castUntilSuccess('Cure', TargetEnum.self, 2500);
                }
                else if (drinkCure) {
                    Scripts.Potions.drinkPotion(PotionsEnum.lc);
                }
            }

            return true;
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
