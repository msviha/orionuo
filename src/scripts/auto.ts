/**
 * @internal
 */
namespace Scripts {
    export class Auto {
        static killObject(serialToKill: string, poisonTrain = false, waitUntilDead = true) {
            let enemy = Orion.FindObject(serialToKill);
            Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
            poisonTrain && Scripts.Common.poisonTrain(serialToKill);
            Orion.Wait(responseDelay);
            Orion.Attack(serialToKill);
            Orion.Wait(6000);

            if (enemy && waitUntilDead) {
                while (enemy && !enemy.Dead()) {
                    Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
                    Orion.Wait(2000);
                    enemy = Orion.FindObject(serialToKill);
                }
            }
        }

        static healAndCureWhenHarving(
            dmgToStartHeal: number,
            fullHeal: boolean,
            castCure: boolean,
            drinkCure: boolean,
        ): boolean {
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
                } else if (drinkCure) {
                    Scripts.Potions.drinkPotion(PotionsEnum.lc);
                }
            }

            return true;
        }
    }
}
