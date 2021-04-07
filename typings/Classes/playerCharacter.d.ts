declare interface PlayerCharacter {
    /**
     * String obj.Serial();
     * Result: Serial number of an Object.
     */
    Serial(): string;

    BankSerial(): string;

    /**
     * String obj.Graphic();
     * Result: Type of an Object (Picture ID).
     */
    Graphic(): string;

    /**
     * String obj.Color();
     * Result: Color of an Object.
     */
    Color(): string;

    /**
     * int obj.X();
     * Result: X object coordinates in the world.
     */
    X(): number;

    /**
     * int obj.Y();
     * Result: Y object coordinates in the world.
     */
    Y(): number;

    /**
     * int obj.Z();
     * Result: Z object coordinates in the world.
     */
    Z(): number;

    /**
     * String obj.Container();
     * Result: Serial number of an Main(parent)-Object. 0xFFFFFFFF if object is located in world.
     */
    Container(): string;

    /**
     * int obj.Map();
     * Result: World map objects index.
     */
    Map(): number;

    /**
     * int obj.Count();
     * Result: Quantity.
     */
    Count(): number;

    /**
     * int obj.Flags();
     * Result: Object flags.
     */
    Flags(): number;

    /**
     * String obj.Name();
     * Result: Name of an Objext (empty for items, until click on object).
     */
    Name(): string;

    /**
     * bool obj.Mobile();
     * Result: true is object is alive.
     */
    Mobile(): boolean;

    /**
     * bool obj.Ignored();
     * Result: true - if object is marked as ignored.
     */
    Ignored(): boolean;

    /**
     * bool obj.Frozen();
     * Result: true - if object is frozen.
     */
    Frozen(): boolean;

    /**
     * bool obj.Poisoned();
     * Result: true - if object is poisoned.
     */
    Poisoned(): boolean;

    /**
     * bool obj.Paralyzed();
     * Result:true - if object is paralyzed.
     */
    Paralyzed(): boolean;

    /**
     * bool obj.Flying();
     * Result: true if **obj.ct is flying **(gargoyle).
     */

    /**
     * bool obj.YellowHits();
     * Result: true - if object has yellow health bar.
     */
    YellowHits(): boolean;

    /**
     * bool obj.IgnoreCharacters();
     * Result: true - if object is ignoring players while moving.
     */
    IgnoreCharacters(): boolean;

    /**
     * bool obj.Locked();
     * Result: true if **obj.ct cant be moved or marked **(items).
     */
    Locked(): boolean;

    /**
     * bool obj.WarMode();
     * Result: true - if object is in war mode
     */
    WarMode(): boolean;

    /**
     * bool obj.Hidden();
     * Result: true - if object is invisible.
     */
    Hidden(): boolean;

    /**
     * bool obj.IsHuman();
     * Result: true - if object is attacking humanoid.
     */
    IsHuman(): boolean;

    /**
     * bool obj.IsPlayer();
     * Result: true - if object is current player.
     */
    IsPlayer(): boolean;

    /**
     * bool obj.IsCorpse();
     * Result: true - if object is dead body.
     */
    IsCorpse(): boolean;

    /**
     * int obj.Layer();
     * Result: Number of Layer - object is located in.
     */
    Layer(): number;

    /**
     * bool obj.IsMulti();
     * Result: true - if object is - Multi.
     */
    IsMulti(): boolean;

    /**
     * int obj.EquipLayer();
     * Result: Number of Layer - object is supposed to locate in.
     */
    EquipLayer(): number;

    /**
     * int obj.Hits();
     * Result: Hit points amount of an Object.
     */
    Hits(): number;

    /**
     * int obj.MaxHits();
     * Result: Maximum hit points amount of an Object.
     */
    MaxHits(): number;

    /**
     * int obj.Mana();
     * Result: Mana amount of an Object.
     */
    Mana(): number;

    /**
     * int obj.MaxMana();
     * Result: Maximum mana amount of an Object.
     */
    MaxMana(): number;

    /**
     * int obj.Stam();
     * Result: Stamina amount of an Object.
     */
    Stam(): number;

    /**
     * int obj.MaxStam();
     * Result: Maximum stamina amount of an Object.
     */
    MaxStam(): number;

    /**
     * bool obj.Female();
     * Result: true - if object player is a female gender.
     */
    Female(): boolean;

    /**
     * int obj.Race();
     * Result: Race number of an Object.
     */
    Race(): number;

    /**
     * int obj.Direction();
     * Result: Direction of an Object.
     */
    Direction(): number;

    /**
     * int obj.Notoriety();
     * Result: Wickedness of an Object.
     */
    Notoriety(): number;

    /**
     * bool obj.CanChangeName();
     * Result: true - if object can be renamed.
     */
    CanChangeName(): boolean;

    /**
     * bool obj.Dead();
     * Result: true - if object is dead.
     */
    Dead(): boolean;

    /**
     * int obj.Str();
     * Result: Str value of an Object.
     */
    Str(): number;

    /**
     * int obj.Int();
     * Result: Int value of an Object.
     */
    Int(): number;

    /**
     * int obj.Dex();
     * Result: Dex value of an Object.
     */
    Dex(): number;

    /**
     * int obj.LockStrState();
     * Result: The value perspective gaining Str of an Object.
     */
    LockStrState(): number;

    /**
     * int obj.LockIntState();
     * Result: The value perspective gaining Int of an Object.
     */
    LockIntState(): number;

    /**
     * int obj.LockDexState();
     * Result: The value perspective gaining Dex of an Object.
     */
    LockDexState(): number;

    /**
     * int obj.Weight();
     * Result: Weight value of an object.
     */
    Weight(): number;

    /**
     * int obj.MaxWeight();
     * Result: Maximum weight value of an object.
     */
    MaxWeight(): number;

    /**
     * int obj.Armor();
     * Result: Armor value of an Object.
     */
    Armor(): number;

    /**
     * int obj.Gold();
     * Result: Gold value of an Object.
     */
    Gold(): number;

    /**
     * int obj.StatsCap();
     * Result: Maximum Statcap value (str+int+dex) of an Object.
     */
    StatsCap(): number;

    /**
     * int obj.Followers();
     * Result: Creature quantity tamed to an Object.
     */
    Followers(): number;

    /**
     * int obj.MaxFollowers();
     * Result: Maximum creature quantity that can be dependent to an Object.
     */
    MaxFollowers(): number;

    /**
     * int obj.FireResistance();
     * Result: Fire defence value of an Object.
     */
    FireResistance(): number;

    /**
     * int obj.ColdResistance();
     * Result: Cold defence value of an Object.
     */
    ColdResistance(): number;

    /**
     * int obj.PoisonResistance();
     * Result: Poison defence value of an Object.
     */
    PoisonResistance(): number;

    /**
     * int obj.EnergyResistance();
     * Result: Energy defence value of an Object.
     */
    EnergyResistance(): number;

    /**
     * int obj.Luck();
     * Result: Luck value of an Object.
     */
    Luck(): number;

    /**
     * int obj.MinDamage();
     * Result: Minimal damage value of an Object.
     */
    MinDamage(): number;

    /**
     * int obj.MaxDamage();
     * Result: Maximum damage value of an Object.
     */
    MaxDamage(): number;

    /**
     * int obj.TithingPoints();
     * Result: Skill point value of an Object.
     */
    TithingPoints(): number;

    /**
     * int obj.StealthSteps();
     * Result: Number of steps in Stealth of an Object.
     */
    StealthSteps(): number;

    /**
     * String obj.Properties();
     * Returns string with object properties ( if they were received by MegaCliloc packet from server )
     */
    Properties(): string;

    /**
     * bool obj.ProfileReceived();
     * Returns true if profile was received from server.
     */
    ProfileReceived(): boolean;

    /**
     * String obj.Profile();
     * Returns profile contents.
     */
    Profile(): string;

    /**
     * String obj.Title();
     * Returns characters title ( displayed in paperdoll ).
     */
    Title(): string;
}
