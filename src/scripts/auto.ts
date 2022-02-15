/**
 * @internal
 */
namespace Scripts {
    export class Auto {
        /**
         * Pokud ma target 0 hp tak ho zkusi proslapnout (vypne a zapne IgnoreStaminaCheck)
         * @param enemy
         * @param run
         */
        static lagProtection(enemy: GameObject, run = 1) {
            if (enemy.Hits() > 0) {
                return;
            }

            const px = Player.X();
            const py = Player.Y();
            const ex = enemy.X();
            const ey = enemy.Y();

            Scripts.Utils.log('lagProtection - monster hp < 1');
            const staminaIgnore = Orion.OAOptionGet('IgnoreStaminaCheck');
            if (staminaIgnore === '0') {
                Orion.Print('zapinam docasne stamina ignore');
                Orion.OAOptionSet('IgnoreStaminaCheck', '1');
            }

            // proslapnuti skrz stamina ignore a distance 1
            const x = px > ex ? ex - 1 : ex + 1;
            const y = py > ey ? ey - 1 : ey + 1;
            Orion.WalkTo(x, y, enemy.Z(), 1, 255, run, undefined, 1000);

            if (staminaIgnore === '0') {
                Orion.Print('vypinam stamina ignore');
                Orion.OAOptionSet('IgnoreStaminaCheck', '0');
            }
        }

        /**
         * Dojde k cili na distance, jen pokud je to potreba (aby nechodil stale)
         * @param enemy
         * @param distance
         * @param run
         * @param maxWalkingTime
         */
        static getToDistanceIfNeeded(enemy: GameObject, distance = 1, run = 1, maxWalkingTime = 20000): boolean {
            const px = Player.X();
            const py = Player.Y();
            const ex = enemy.X();
            const ey = enemy.Y();
            let success = false;
            if (
                (px > ex && px - ex > 1) ||
                (px < ex && ex - px > 1) ||
                (py > ey && py - ey > 1) ||
                (py < ey && ey - py > 1)
            ) {
                Scripts.Utils.log(
                    `going closer to enemy - Player{x: ${px}, y: ${py}, z: ${Player.Z()}} Enemy{x: ${ex}, y: ${ey}, z: ${enemy.Z()}}`,
                );
                success = Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), distance, 255, run, undefined, maxWalkingTime);
                if (!success && Orion.InJournal('You are frozen')) {
                    Orion.ClearJournal('You are frozen');
                    Scripts.Spells.cast('Magic Arrow', TargetEnum.self);
                    Orion.Wait(2500);
                    success = Orion.WalkTo(
                        enemy.X(),
                        enemy.Y(),
                        enemy.Z(),
                        distance,
                        255,
                        run,
                        undefined,
                        maxWalkingTime,
                    );
                }
            }

            return success;
        }

        /**
         * Attacklast na cil a to bud jednorazove, nebo dokud neumre
         * @param serialToKill
         * @param poisonTrain
         * @param waitUntilDead
         * @param kill
         * @param distance
         * @param lagProtection
         */
        static killObject(
            serialToKill: string,
            poisonTrain = false,
            waitUntilDead = true,
            kill = true,
            distance = 1,
            lagProtection = true,
        ) {
            let enemy = Orion.FindObject(serialToKill);
            if (!enemy) {
                return;
            }

            const run = Player.MaxStam() - 30 < Player.Stam() ? 1 : 0;
            lagProtection && Scripts.Auto.lagProtection(enemy, run);
            Scripts.Auto.getToDistanceIfNeeded(enemy, distance, run);
            poisonTrain && distance <= 1 && Scripts.Poisoning.poisonTrain(serialToKill);
            Orion.Wait(responseDelay);
            if (!kill) {
                Orion.Ignore(enemy.Serial());
                return;
            }
            Orion.AddObject('lasttarget', serialToKill);
            const macro = Orion.CreateClientMacro('AttackLast');
            macro.Play();

            if (enemy && waitUntilDead) {
                while (enemy && !enemy.Dead()) {
                    Scripts.Auto.getToDistanceIfNeeded(enemy, distance, run);
                    Orion.Wait(responseDelay);
                    macro.Play();
                    Orion.Wait(1000);
                    enemy = Orion.FindObject(serialToKill);
                }
            }
        }
    }
}
