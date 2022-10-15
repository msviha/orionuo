namespace Scripts {
    export class TimeUtils {
        static ws() {
            const remainingTimeToNextSaveFromLogin = Shared.GetVar('remainingTimeToNextSaveFromLogin');
            const timeLeftToWs = remainingTimeToNextSaveFromLogin - Orion.Now();
            if (timeLeftToWs < 3000) {
                Scripts.Utils.playerPrint(`Save kazdou chvilkou`);
            }
            else {
                Scripts.Utils.playerPrint(`Save za ${Scripts.TimeUtils.parseTimeToHourMinuteSecString(timeLeftToWs)}`);
            }
        }

        static parseWsTimeFromWeb() {
            const response = Orion.HttpGet('https://www.darkparadise.eu/');
            const webstatus = response
                .replace(/\n/gm, '')
                .replace(/\r/gm, '')
                .replace(/\t/gm, '') // vytvoreni single line textu
                .replace(/.*id="webstatus"/gm, '') // odebrani zacatku po webstatus
                .replace(/\/table.*/gm, ''); // odebrani konce za webstatus

            let timeNonParsed = webstatus
                .replace(/\s/g, '')
                .replace(/.*Poslednísave:<\/b><\/td><td>/, '')
                .replace(/<\/td>.*/, '');

            const hour = timeNonParsed.replace(/:.*/, '');
            timeNonParsed = timeNonParsed.substring(hour.length + 1, timeNonParsed.length);
            const min = timeNonParsed.substring(0,2);
            timeNonParsed = timeNonParsed.substring(min.length, timeNonParsed.length);
            const day = timeNonParsed.replace(/\..*/, '');
            timeNonParsed = timeNonParsed.substring(day.length + 1, timeNonParsed.length);
            const month = timeNonParsed.replace(/\..*/, '');
            const year = timeNonParsed.substring(day.length + 1, timeNonParsed.length);

            let saveDate = Date.parse(
                new Date(
                    parseInt(year),
                    parseInt(month)-1,
                    parseInt(day)
                ) as unknown as string
            );

            saveDate += (parseInt(hour) * 1000 * 60 * 60) + (parseInt(min)  * 1000 * 60);

            return saveDate;
        }

        static parseTimeToHourMinuteSecString(time:number): string {
            let timeLeft = time;
            const h = Math.floor(timeLeft / (1000*60*60));
            timeLeft -= (h * (1000*60*60));
            const m = Math.floor(timeLeft / (1000*60));
            timeLeft -= (m * (1000*60));
            const s = Math.floor(timeLeft / 1000);

            const hString = h ? h + 'h' : '';
            const mString = m ? m.toString().length > 1 ? m + 'm' : '0' + m + 'm' : '';
            const sString = s ? s.toString().length > 1 ? s + 's' : '0' + s + 's' : '';

            return `${hString}${mString}${sString}`
        }
    }
}
