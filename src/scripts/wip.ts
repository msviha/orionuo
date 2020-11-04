namespace Scripts {

    /**
     * Work in progress - nutno zjistit co funguje, pripadne upravit
     */
    export class Wip {

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

        static EnsureWarMode() {
            let wm = Player.WarMode();
            if (!wm) {
                Orion.WarMode(true);
            }
        }

        static Travel() {
            const travel = <IMyGameObject>gameObject.books.travelBook;
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
            const nbRuna = <IMyGameObject>gameObject.uncategorized.nbRuna;
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
