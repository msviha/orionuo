namespace Scripts {
    export class Music {
        static harp(targetAlias?: TargetEnum | string) {
            Scripts.Music.useMusicInstrument(gameObject.music.harp, `Nemas Harfu`, targetAlias);
        }

        static lute(targetAlias?: TargetEnum | string) {
            Scripts.Music.useMusicInstrument(gameObject.music.lute, `Nemas Loutnu`, targetAlias);
        }

        static drum(targetAlias?: TargetEnum | string) {
            Scripts.Music.useMusicInstrument(gameObject.music.drum, `Nemas Buben`, targetAlias);
        }

        static useMusicInstrument(
            instrument: IMyGameObject,
            missingMessage: string,
            targetAlias?: TargetEnum | string,
        ) {
            if (!targetAlias) {
                targetAlias = 'musicTarget';
                Scripts.Utils.setTargetAlias(targetAlias, 'Komu chces zahrat ?');
            }

            const instrumentSerials = Orion.FindType(instrument.graphic, instrument.color);
            Orion.WarMode(true);

            if (!instrumentSerials.length) {
                Scripts.Utils.playerPrint(missingMessage, ColorEnum.red);
                return;
            }

            Orion.WaitTargetObject(targetAlias);
            Orion.UseObject(instrumentSerials[0]);
        }
    }
}
