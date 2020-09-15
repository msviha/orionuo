namespace Scripts {

    /**
     * Obsahuje zakladni scripty
     */
    export class Jewelry {

        /**
         * Scripts.Common.shrinkKad
         * stability beta
         *
         * Pouzije shrink kad
         */
        static useRR() {
            const rr = <IMyGameObject>o.rings.rr;
            const grr = <IMyGameObject>o.rings.grr;
            const grr2 = <IMyGameObject>o.rings.grr2;
            let rrSerials = Orion.FindType(rr.graphic, rr.color);
            let grrSerials = Orion.FindType(grr.graphic, grr.color);
            let grr2Serials = Orion.FindType(grr2.graphic, grr2.color);
            let rings = [...rrSerials, ...grrSerials, ...grr2Serials];
            Orion.ClearJournal();
            for (const ring of rings) {
                const ringObject = Orion.FindObject(ring);
                const x = ringObject.X();
                const y = ringObject.Y();
                Orion.UseObject(ring);
                if (Orion.InJournal("It too soon to use it again")) {
                    Orion.MoveItem(ring, 0, 'backpack', x, y);
                    break;
                }
            }
        }
    }
}
