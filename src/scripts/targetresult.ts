namespace Scripts {
    /**
     * Trida objektu ktery je vracen pri pouzivani rozsireneho targetovani
     */
    export class TargetResult {
        private serial?: string;
        private object?: GameObject;
        private tile?: SelectedTile;

        public success() {
            return this.isValid() || this.isStatic();
        }

        public gameObject(serial?: string) {
            if (serial) {
                this.serial = serial;
            }
            return Orion.FindObject(this.serial);
        }

        public selectedTile(selectedTile?: SelectedTile):SelectedTile | undefined {
            if (selectedTile) {
                this.tile = selectedTile;
                if (selectedTile.IsGameObject) {
                    this.gameObject(selectedTile.Serial());
                }
            }
            return this.tile;
        }

        public isValid() {
            return this.serial && Orion.FindObject(this.serial)?.Exists();
        }

        public isStatic():boolean {
            return !this.isValid() && this.tile !== undefined;//this.x && this.y && this.x >= 0 && this.y >= 0;
        }

        public X(): number | undefined {
            if (this.isValid()) {
                return this.gameObject().X();
            } else if (this.isStatic()) {
                return this.selectedTile().X();
            }
            return undefined;
        }

        public Y(): number {
            if (this.isValid()) {
                return this.gameObject().Y();
            } else if (this.isStatic()) {
                return this.selectedTile().Y();
            }
            return undefined;
        }

        public Z(): number {
            if (this.isValid()) {
                return this.gameObject().Z();
            } else if (this.isStatic()) {
                return this.selectedTile().Z();
            }
            return undefined;
        }


        public waitTarget() {
            TargetingEx.cancelResetTarget();
            if (this.isValid()) {
                Orion.WaitTargetObject(this.serial);
            } else if (this.isStatic()) {
                Orion.WaitTargetTile(this.tile?.Graphic() || '0xFFFF', this.tile?.X(), this.tile?.Y(), this.tile?.Z());
            }
        }
    }
}
