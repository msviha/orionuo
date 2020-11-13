namespace Scripts {
    export class Auto {
        static killObject(serialToKill:string) {
            Orion.Attack(serialToKill);
            Orion.Wait(6000); // due to unknown extended msg when attacking new creature which just spawns

            let enemy = Orion.FindObject(serialToKill);
            if (enemy) {
                while (enemy && !enemy.Dead()) {
                    Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
                    Orion.Wait(2000);
                    enemy = Orion.FindObject(serialToKill);
                }
            }
        }
    }
}
