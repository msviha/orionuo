declare interface GumpObject {
    /**
     * int gump.Serial();
     * Returns gump serial.
     */
    Serial(): number;

    /**
     * int gump.ID();
     * Returns gump id.
     */
    ID(): number;

    /**
     * int gump.X();
     * Returns gumps X screen coordinate.
     */
    X(): number;

    /**
     * int gump.Y();
     * Returns gumps Y screen coordinate.
     */
    Y(): number;

    /**
     * bool gump.Replayed();
     * Returns true If gump response was already made.
     */
    Replayed(): boolean;

    /**
     * int gump.ReplyID();
     * Returns response button id if Replayed() was true.
     */
    ReplyID(): number;

    /**
     * StringList gump.ButtonList();
     * Returns a list of all buttons within a gump.
     */
    ButtonList(): Array<string>;

    /**
     * StringList gump.CheckboxList();
     * Returns a list with all checkboxes within a gump.
     */
    CheckboxList(): Array<string>;

    /**
     * StringList gump.RadioList();
     * Returns a list with all radio buttons within a gump.
     */
    RadioList(): Array<string>;

    /**
     * StringList gump.GumppicList();
     * Returns a list with all tile pics within a gump.
     */
    GumppicList(): Array<string>;

    /**
     * StringList gump.GumppicList();
     * Returns a list with all gump pics within a gump.
     */
    GumppicList(): Array<string>;

    /**
     * StringList gump.EntriesList();
     * Returns a list with all text entries within a gump.
     */
    EntriesList();

    /**
     * StringList gump.CommandList();
     * Returns a list with all commands within a gump ( in same order as received from server ).
     */
    CommandList(): Array<string>;

    /**
     * StringList gump.TextList();
     * Returns a list with all strings within a gump ( in same order as received from server ).
     */
    TextList(): Array<string>;

    /**
     * String gump.Command(index);
     * Returns gump command by index.
     */
    Command(index: number): string;

    /**
     * String gump.Text(index);
     * Returns gump textby index.
     */
    Text(index: number): string;

    /**
     * bool gump.Select(hook);
     * Selects gump by a hook object (GumpHookObject).
     * Returns true if successfull.
     */
    Select(hook: GumpHookObject): boolean;

    /**
     * void gump.Close();
     */
    Close(): void;
}
