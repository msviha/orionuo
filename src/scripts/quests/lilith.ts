namespace Scripts {

    export class Drticka {

        static lilith() {
            const directions = [
                '"North"',
                '"North East"',
                '"East"',
                '"South East"',
                '"South"',
                '"South West"',
                '"West"',
                '"North West"'
            ];

            Orion.ClearJournal();
            Scripts.Utils.playerPrint('Mas 10 vterin na to aby ti Lilith rekla smer, jinak se script ukonci', ColorEnum.orange);

            while (true) {
                const result = Scripts.Utils.waitWhileSomethingInJournal(directions, 10000);
                Orion.ClearJournal();
                if (result > -1) {
                    if (Player.Direction() === result) {
                        Scripts.Utils.log(`uz jsem otoceny na ${directions[result]}`);
                    }

                    Orion.Turn(result);
                    Scripts.Utils.log(directions[result]);
                    Orion.Wait(200);

                    while (Player.Direction() !== result) {
                        Orion.Turn(result);
                        Scripts.Utils.log(`neco se posralo, otacim se znovu na ${directions[result]}`);
                        Orion.Wait(200);
                    }
                }
                else {
                    Scripts.Utils.playerPrint('no direction found - terminating script', ColorEnum.red);
                    break;
                }
            }
        }
    }
}
