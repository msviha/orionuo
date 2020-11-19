namespace Scripts {
    export class Mount {

        /**
         * Scripts.Mount.mountAndDismount
         * stability released
         *
         * naseda/seseda z jezditka
         */
        static mountAndDismount() {
            if (Orion.ObjAtLayer('Mount')) {
                Orion.UseObject('self');
            }
            else if (!Orion.FindObject('myMount')) {
                this.addMount();
            }
            else {
                Orion.UseObject('myMount');
            }
            Orion.Wait(50)
        }

        /**
         * Scripts.Mount.addMount
         * stability released
         *
         * Registruje jezditko
         */
        static addMount() {
            Scripts.Utils.targetObjectNotSelf('myMount', `Target your mount`);
        }
    }
}
