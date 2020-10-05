namespace Scripts {

    // todo work in progress
    export class Klamak {

        /**
         * Scripts.Klamak.next
         * stability beta
         *
         * x
         */
        static next() {
            const lists = ['petlvl1', 'petlvl2', 'petlvl3', 'petlvl4', 'petlvl5'];
            const current = Orion.GetGlobal('klamak');

            if (!current) {
                Orion.SetGlobal('klamak', lists[0]);
            }
            else {
                const currentIndex = lists.indexOf(current);
                const nextIndex = currentIndex + 1 === lists.length ? 0 : currentIndex + 1;
                Orion.SetGlobal('klamak', lists[nextIndex])
            }

            const nextList = Orion.GetGlobal('klamak');
            Scripts.Utils.playerPrint(nextList);
        }
    }
}
