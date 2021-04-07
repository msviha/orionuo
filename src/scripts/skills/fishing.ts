namespace Scripts {
    export class Fishing {
        static fishTrain(wayPoints?: ICoordinates[]) {
            const distance = 6;
            const prut = Scripts.Utils.findFirstType(gameObject.uncategorized.prut);

            if (!wayPoints) {
                wayPoints = [{ x: Player.X(), y: Player.Y() }];
            }

            for (const w of wayPoints) {
                Orion.WalkTo(w.x, w.y, Player.Z(), 1, undefined);

                for (let x = distance * -1; x <= distance; x++) {
                    for (let y = distance * -1; y <= distance; y++) {
                        Orion.ClearJournal();
                        Orion.Wait(responseDelay);
                        while (!Orion.InJournal('no fish here|Try fishing in water')) {
                            Orion.ClearJournal();
                            Orion.WaitTargetTileRelative('any', x, y, Player.Z());
                            Orion.UseObject(prut);
                            Scripts.Utils.waitWhileSomethingInJournal([
                                'You fish a while',
                                'You pull out',
                                'no fish here',
                                'Try fishing in water',
                            ]);
                        }
                        Orion.ClearJournal();
                    }
                }
            }
        }
    }
}
