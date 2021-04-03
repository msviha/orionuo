namespace Scripts {
    /**
     * Trida objektu ktery je vracen pri pouzivani rozsireneho targetovani
     */
    export class TargetResult  {
        private serial?: string;
        private object?: GameObject;
        private x?: number;
        private y?: number;
        private z?: number;
        private graphic?: string;

        public success() {
            return this.isValid() || this.isStatic();
        }

        public gameObject(serial?:string) {
            if (serial) {
                this.serial = serial;
            }
            return Orion.FindObject(this.serial);
        }

        public isValid() {
            return this.serial && Orion.FindObject(this.serial) && Orion.FindObject(this.serial).Exists;
        }

        public isStatic() {
            return this.x && this.y && this.x >= 0 && this.y >= 0;
        }

        public waitTarget() {
            TargetingEx.cancelResetTarget();
            if (this.isValid()) {
                Orion.WaitTargetObject(this.serial);
            }  else if (this.isStatic()) {
                Orion.WaitTargetTile(this.graphic || '0xFFFF', this.x, this.y, this.z);
            }         
        }
    }
}
