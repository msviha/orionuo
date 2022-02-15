namespace Scripts {
    export class Tracking {

        static tracking(who = 'Players') {
            Orion.CloseMenu('all');
            Orion.CancelWaitMenu();
            Orion.WaitMenu('Tracking', who);
            Orion.UseSkill('Tracking');
        }

        static radar(userFilter:ITrackingFilter[] = []) {
            const noSigns = 'You see no signs';
            Orion.ClearJournal(noSigns);

            Scripts.Tracking.tracking('Anything that moves');
            Orion.Wait(responseDelay);
            let timeout = 1000;
            let trackMenu = undefined;
            while (timeout && !trackMenu) {
                Orion.Wait(50);
                if (Orion.InJournal(noSigns)) {
                    Scripts.Utils.playerPrint('Nikde nikdo');
                    return;
                }
                trackMenu = Orion.GetMenu('Tracking');
            }

            const trackList:Array<{name:string, count:number, graphic:string}> = [];

            // sichr
            Orion.WaitForMenu();

            for (let i = 0; i < trackMenu.ItemsCount(); i++) {
                const name = trackMenu.ItemName(i);
                const graphic = trackMenu.ItemGraphic(i);
                const find = trackList.filter((item) => item.name === name)[0];

                if (!find) {
                    trackList.push({name, count: 1, graphic});
                }
                else {
                    find.count++;
                }
            }

            trackMenu.Close();
            Scripts.Utils.log(` -- TRACKING LIST -- [${Player.X()}, ${Player.Y()}]`);

            const specialFilter:ITrackingFilter[] = [...[
                {name: 'Evangela', msg: ':::: !EVANGELA! ::::', color: 0x0034},
                {name: 'Zo', msg: ':::: !TYDLITRDLO! ::::', color: 0x0034},
                {name: 'Lu', msg: ':::: !TYDLITRDLO! ::::', color: 0x0034},
                {name: 'Me', msg: ':::: !TYDLITRDLO! ::::', color: 0x0034},
                {name: 'Fa', msg: ':::: !TYDLITRDLO! ::::', color: 0x0034},
                {name: 'Gi', msg: ':::: !TYDLITRDLO! ::::', color: 0x0034},
                {name: 'Magicky strom', msg: ': Magicky Strom ! (pro druida)', color: 0x0034},
                {name: 'Erveen', msg: ': Erveen ! (rare vlasy)', color: 0x0034}
            ], ...userFilter];

            for (const item of trackList) {
                const special = specialFilter.filter((i) => i.name.toUpperCase() === item.name.toUpperCase())[0];
                const isHuman = item.graphic == '0x2106' || item.graphic == '0x2107';

                if (special) {
                    Scripts.Utils.playerPrint(`${item.count}x ${item.name} ${special.msg}`, special.color);
                }

                Orion.Print(isHuman ? 0x005A : 0xffff, `${item.count}x ${item.name}`);
            }

        }
    }
}
