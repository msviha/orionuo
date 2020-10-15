namespace Scripts {
    export class Dress {

        /**
         * Scripts.Dress.resetStats()
         * stability beta
         *
         * resetuje staty pomoci travel booku
         */
        static resetStats() {
            const tbObj = <IMyGameObject>gameObject.books.travelBook;
            const travelBooks = Orion.FindType(tbObj.graphic, tbObj.color);
            if (!travelBooks.length) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK', ColorEnum.red);
                return;
            }

            Orion.UseObject(travelBooks[0]);

            const requiredMenuName = 'Po pouziti vam budou opraveny staty na spravne hodnoty. Pozor, pri oprave vam spadne vase brneni do batuzku!';
            const openedMenu = Orion.WaitForGump(2000) &&
            Orion.GetLastGump()?.Select(Orion.CreateGumpHook(2)) &&
            Orion.WaitForMenu(2000) &&
            Orion.GetMenu('last');

            openedMenu?.Name() === requiredMenuName && openedMenu.Select('Ano, oprav');
        }

        /**
         * Scripts.Dress.setDress()
         * stability beta
         *
         * nastavi si seznam veci pro oblekani - viz. script dressUp
         * seznam se ukonci napsanim "stopdress" do hry
         */
        static setDress() {
            const maximumDressParts = 20;

            for (let i = 0; i < maximumDressParts; i++) {
                if (!Orion.FindObject('Dress.Object' + i)) {
                    continue;
                }
                Orion.RemoveObject('Dress.Object' + i);
                Orion.Wait(250);
            }

            Orion.ClearJournal();
            for (let i = 0; i < maximumDressParts; i++) {
                if (Orion.InJournal('stopdress')) {
                    break;
                }
                Orion.AddObject('Dress.Object' + i);
                Orion.Print('-1', 'Target your dress. Type "stopdress" when done');
                Orion.Wait(250);
            }
        }

        /**
         * Scripts.Dress.dressUp()
         * stability beta
         *
         * oblekna si veci, ktere jsou ulozeny pomoci scriptu setDress
         */
        static dressUp() {
            for (let i = 0; i < 20; i++) {
                if (!Orion.FindObject('Dress.Object' + i)) {
                    continue;
                }
                Orion.UseObject('Dress.Object' + i);
                Orion.Wait(250);
            }
        }
    }
}
