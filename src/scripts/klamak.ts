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
            let current = Orion.GetGlobal('klamak');

            if (!current) {
                Orion.SetGlobal('klamak', lists[lists.length - 1]);
                current = Orion.GetGlobal('klamak');
            }

            let currentIndex = lists.indexOf(current);
            let nextIndex:number;
            let i = 0;
            do {
                i++;
                nextIndex = (currentIndex + i) % lists.length;
                Orion.SetGlobal('klamak', lists[nextIndex]);
            } while (i < lists.length && !Orion.FindList(Orion.GetGlobal('klamak')).length)

            const numberOfKlamaks = Orion.FindList(Orion.GetGlobal('klamak')).length;
            if (!numberOfKlamaks) {
                Scripts.Utils.playerPrint('nemas klamaky', ColorEnum.red);
                return;
            }

            const nextList = Orion.GetGlobal('klamak');
            Scripts.Utils.playerPrint(`${nextList} [${numberOfKlamaks}]`);
        }
    }
}
