declare interface SelectedTile {
    /**
     * String SelectedTile.Serial();
     * Returns serial of selected tile ( if it's an in-game item, not land art ).
     */
    Serial(): string;

    /**
     * String SelectedTile.Graphic();
     * Returns graphic id/type of selected tile.
     */
    Graphic(): string;

    /**
     * String SelectedTile.Color();
     * Returns color of selected tile.
     */
    Color(): string;

    /**
     * int SelectedTile.X();
     * Returns x coordinate value of selected tile.
     */
    X(): number;

    /**
     * int SelectedTile.Y();
     * Returns y coordinate value of selected tile.
     */
    Y(): number;

    /**
     * int SelectedTile.Z();
     * Returns z coordinate value of selected tile.
     */
    Z(): number;

    /**
     * String SelectedTile.LandGraphic();
     * Returns graphics id/type of land art of selected tile.
     */
    LandGraphic(): string;

    /**
     * int SelectedTile.LandX();
     * Returns land x coordinate ( will be same as SelectedTile.X() )
     */
    LandX(): number;

    /**
     * int SelectedTile.LandY();
     * Returns land y coordinate ( will be same as SelectedTile.Y() )
     */
    LandY(): number;

    /**
     * int SelectedTile.LandZ();
     * Returns land z coordinate ( CAN BE different from SelectedTile.Z() )
     */
    LandZ(): number;

    /**
     * bool SelectedTile.IsLandTile();
     * Returns true if this is a land tile.
     */
    IsLandTile(): boolean;

    /**
     * bool SelectedTile.IsStaticTile();
     * Returns true if this is a static/multi tile.
     */
    IsStaticTile(): boolean;

    /**
     * bool SelectedTile.IsGameObject();
     * Returns true if this is a game object.
     */
    IsGameObject(): boolean;
}
