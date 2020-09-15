namespace Scripts {

    /**
     * Work in progress - nutno zjistit co funguje, pripadne upravit
     */
    export class Wip {

        static lavaBomba() {
            const bomb = <IPotion>o.potions.lavabomb;
            const emptyBottles = <IMyGameObject>o.uncategorized.emptyBottles;
            const bombKad:IMyGameObject = bomb.kad;
            const emptyBottlesSerials = Orion.FindType(emptyBottles.graphic, emptyBottles.color, 'backpack','item', 3 , '-1', true);

            if (!emptyBottlesSerials.length) {
                Scripts.Utils.playerPrint('NEMAS PRAZDNE LAHVE', ColorEnum.red);
                return;
            }

            // Orion.WarMode(true, false);
            Orion.WarMode(true);

            Orion.WaitTargetObject(emptyBottlesSerials[0]);
            Orion.UseType(bombKad.graphic, bombKad.color);
            Orion.Wait(250);
            Orion.UseType(bomb.graphic);
        }

        static dropItem(item:IMyGameObject) {
            //todo why the color is backpack
            let serials = Orion.FindType(item.graphic, "backpack")
            if (!serials.length) {
                Scripts.Utils.playerPrint('NEMAS ITEM NA DROPNUTI');
            }

            Orion.Drop(serials[0]);
        }

        static Tracking(who = 'Players') {
            Orion.CancelWaitMenu();
            Orion.WaitMenu('Tracking', who);
            Orion.UseSkill('Tracking');
        }

        static AttackLastTarget() {
            let serial = Orion.GetGlobal('target');
            if (!serial.length) return;
            let enemy = Orion.FindObject(serial);
            if (enemy) {
                let notoColor = Scripts.Wip.getColorByNotoriety(enemy.Notoriety());
                Orion.CharPrint('self', notoColor, enemy.Name() + ' [' + enemy.Hits() + '/' + enemy.MaxHits() + ']');
            }
            Orion.Attack(serial);
        }

        static BarPuller() {
            Orion.Ignore('self', true);
            let serial = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|human ', '20', 'blue|orange|red|gray|criminal');

            for (let i = 0; i < serial.length; ++i) {
                if (i >= 10) break;
                Orion.ShowStatusbar(serial[i], 1420, 280 + (40 * i));
                Orion.Wait(50);
            }
            Orion.Ignore('self', false);
        }

        static BarPuller_PvP() {
            let noto = Player.Notoriety();
            Orion.Ignore('self', true);
            let serial:string[];
            if (noto) {
                serial = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|ignorefriends|human ', '20', 'blue|orange|red|gray|criminal');
            }
            else {
                serial = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|ignorefriends|human ', '20', 'orange|red|gray|criminal');
            }

            for (let i = 0; i < serial.length; ++i) {
                if (i >= 10) break;
                Orion.ShowStatusbar(serial[i], 1185, 680 - (60 * i));
                Orion.Print(serial[i], ColorEnum.none);
                Orion.Wait(100);
            }
            Orion.Ignore('self', false);
        }

        static EnsureWarMode() {
            let wm = Player.WarMode();
            if (!wm) {
                Orion.WarMode(true);
            }
        }

        static Travel() {
            const travel = <IMyGameObject>o.books.travel;
            const travelSerials = Orion.FindType(travel.graphic, travel.color);
            if (!travelSerials.length) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK', ColorEnum.red);
            }

            Orion.UseObject(travelSerials[0]);
            if (Orion.WaitForGump(1000)) {
                let gump0 = Orion.GetLastGump();
                if (gump0 !== null) {
                    gump0.Select(Orion.CreateGumpHook(4));
                    if  (Orion.WaitForGump(1000)) {
                        let gump1 = Orion.GetLastGump();
                        gump1.Select(Orion.CreateGumpHook(1));
                    }
                }
            }
        }

        static Nbruna() {
            const nbRuna = <IMyGameObject>o.nonCategorized.nbRuna;
            const nbRunesSerials = Orion.FindType(nbRuna.graphic, nbRuna.color);
            if (!nbRunesSerials.length) {
                Scripts.Utils.log('NEMAS NB RUNU', ColorEnum.red);
            }

            Orion.UseObject(nbRunesSerials[0]);
            if (Orion.WaitForGump(1000))
            {
                let gump0 = Orion.GetLastGump();
                if (gump0 !== null)
                {
                    gump0.Select(Orion.CreateGumpHook(1));
                }
            }
        }

        static Afk() {
            let Msg = "You see:";
            while (!Player.Dead()) {
                if (Orion.InJournal(Msg, 'Sys/system')) {
                    Orion.ClearJournal(Msg);
                    Orion.PlayWav('C:/afk.wav')
                }
            }
        }

        static MassMove()
        {
            Scripts.Utils.log('MASSMOVE What?', ColorEnum.none);
            Orion.AddObject('whatToMove');
            Scripts.Utils.waitWhileTargeting();
            var item = Orion.GetSerial('whatToMove');

            const itemObject = Orion.FindObject(item);
            const graphic = itemObject.Graphic();
            const color = itemObject.Color();
            const container = itemObject.Container();
            const myDefinition = Scripts.Utils.findMyDefinitionForGameObject(itemObject);
            let destinationX = myDefinition?.bag ? myDefinition.bag.x : itemObject.X();
            const destinationY = myDefinition?.bag ? myDefinition.bag.y : itemObject.Y();

            Scripts.Utils.log('Where?', ColorEnum.none);
            Orion.AddObject('whereToMove');
            Scripts.Utils.waitWhileTargeting();
            const destination = Orion.GetSerial('whereToMove');

            var itemIDArr = Orion.FindType(graphic, color, container, undefined, undefined, undefined, false);
            Scripts.Utils.log(itemIDArr.length.toString(), ColorEnum.none);
            for (let i = 0; i < itemIDArr.length; i++)
            {
                Orion.MoveItem(itemIDArr[i], 0, destination, destinationX, destinationY);
                destinationX += 3;
                Orion.Wait(300);
            }
        }

        static TargetNext():string
        {
            if (Orion.Timer('targetTimer') > 4000) {
                Orion.IgnoreReset();
                Orion.SetGlobal('targets', '[]');
            }
            Scripts.Utils.resetTimer('targetTimer');

            let target = Orion.FindType("-1", "-1", "ground", "nearest|mobile|ignoreself ", 30);
            if (!target.length) {
                Orion.IgnoreReset();
                Orion.SetGlobal('targets', '[]');
                return;
            }

            const targets:string[] = JSON.parse(Orion.GetGlobal('targets')) || [];
            const enemySerial = target[0];
            const enemy = Orion.FindObject(enemySerial);

            if (!enemy) {
                Scripts.Utils.playerPrint('no enemies around', ColorEnum.green);
                return;
            }

            targets.push(enemySerial);
            Orion.Ignore(enemySerial, true);
            Orion.SetGlobal('targets', JSON.stringify(targets));
            let notoColor = Scripts.Wip.getColorByNotoriety(enemy && enemy.Notoriety());
            Orion.CloseStatusbar(Orion.GetGlobal('target'));
            Orion.CharPrint(enemySerial, notoColor, enemy.Name() + ': ' + enemy.Hits() + '/' + enemy.MaxHits());
            Orion.SetGlobal('target', enemySerial);
            Orion.ShowStatusbar(enemySerial, 350, 150);
        }

        static TargetPrevious() {
            if (Orion.Timer('targetTimer') > 4000) {
                Orion.IgnoreReset();
                Orion.SetGlobal('targets', '[]');
            }
            Scripts.Utils.resetTimer('targetTimer');

            const currentTarget = Orion.GetGlobal('target');
            const targetsFinded:string[] = JSON.parse(Orion.GetGlobal('targets')) || [];

            const indexOfPrevious = targetsFinded.indexOf(currentTarget) - 1;

            if (indexOfPrevious >= 0) {
                const enemySerial = targetsFinded[indexOfPrevious];
                const enemy = Orion.FindObject(enemySerial);

                if (!enemy) {
                    Scripts.Utils.playerPrint('previous enemy disappear', ColorEnum.none);
                    targetsFinded.splice(indexOfPrevious, 1);
                    Orion.SetGlobal('targets', JSON.stringify(targetsFinded));
                    return;
                }

                let notoColor = Scripts.Wip.getColorByNotoriety(enemy && enemy.Notoriety());
                Orion.CloseStatusbar(Orion.GetGlobal('target'));
                Orion.CharPrint(enemySerial, notoColor, enemy.Name() + ': ' + enemy.Hits() + '/' + enemy.MaxHits());
                Orion.SetGlobal('target', enemySerial);
                Orion.ShowStatusbar(enemySerial, 350, 150);
            }
            else {
                Scripts.Utils.playerPrint('no previous target', ColorEnum.red);
            }

        }

        static getColorByNotoriety(notoriety?:number) {
            let notoColor = 906;
            switch (notoriety) {
                case 1:
                    notoColor = 2119;
                    break;
                case 3:
                    notoColor = 906;
                    break;
                case 6:
                    notoColor = 33;
                    break;
                default:
                    notoColor = 906;
            }
            return notoColor;
        }
    }
}
