enum DirectionEnum {
    West = 6,
    North = 0,
    East = 2,
    South = 4,
}

enum ColorEnum {
    none = '0xffff',
    red = '0x0021',
    green = '0x0044',
    orange = '0x002c',
    pureWhite = '0x0B1D',
    yellow = '0x0034',
    blue = '0x0002'
}

enum TargetEnum {
    self = 'self',
    lastattack = 'lastattack',
    laststatus = 'laststatus',
    lasttarget = 'lasttarget',
    /**self ale pokud sem zranen nebo otraven*/
    selfinjured = 'selfinjured',
    /**laststatus pokud to neni serial z friendlistu nebo pet*/
    laststatusenemy = 'laststatusenemy',
    /**mount ulozeny pres moutn script*/
    mount = 'mount',
    /**nejblizsi zraneny friend, pet nebo mount */
    nearinjuredalie = 'nearinjuredalie',
    /**nejblizsi zraneny friend, pet nebo mount s vyuzitim Line of Sight (presne neni znamo jak dobre to funguje) */
    nearinjuredalielos = 'nearinjuredalielos',
    /**nejvic zraneny friend, pet nebo mount */
    mostinjuredalie = 'mostinjuredalie',
    /**nejvic zraneny friend, pet nebo mount s vyuzitim Line of Sight (presne neni znamo jak dobre to funguje) */
    mostinjuredalielos = 'mostinjuredalielos',
    /**last target pouze pokud je to charakter */
    lasttargetmobile = 'lasttargetmobile',
    /**charakter nad jehoz CUST zalozkou je zrovna kruzor mysi */
    hover = 'hover',
    manual = 'manual'
}

enum CustomStatusBarEnum {
    close = 0,
    click = 666,
}

enum OcarovaniEnum {
    mytheril = 'mytheril',
    black = 'black',
    blood = 'blood',
}

enum PortBookDestinationsEnum {
    charge = 1,
    staty = 2,
    brit = 3,
    cech = 4,
    custom = 5,
    customGate = 6,
    customMark = 7,
    jhelom = 8,
    vesper = 9,
    yew = 10,
    minoc = 11,
    scara = 12,
    magin = 13,
    trinsic = 14,
    nujelm = 15,
    trh = 16,
    cove = 17,
    occlo = 18,
    moonglow = 19,
    templar = 20,
    nara = 21,
    homare = 22,
    zento = 23,
    luna = 24,
    umbra = 25,
    serpents = 26,
}

enum ScrollEnum {
    kvf = 'kvf',
    bolt = 'bolt',
    pog = 'pog',
    ijs = 'ijs',
    port = 'port',
    ef = 'ef',
    para = 'para',
    wos = 'wos',
    ivm = 'ivm',
    ress = 'ress',
    recall = 'recall',
    heal = 'heal',
    str = 'str',
    react = 'react',
    bless = 'bless',
    pf = 'pf',
    dispel = 'dispel',
    bs = 'bs',
    protect = 'protect',
    eelm = 'eelm',
}

enum TargetIndicationEnum {
    none = 'none',
    large = 'large',
}

enum ReagentsEnum {
    mr = 'mr',
    ss = 'ss',
    bm = 'bm',
    bp = 'bp',
    ga = 'ga',
    gi = 'gi',
    ns = 'ns',
    sa = 'sa',
}

enum FlagsEnum {
    fast = 'fast',
    near = 'near',
    mobile = 'mobile',
    item = 'item',
    human = 'human',
    nothuman = 'nothuman',
    live = 'live',
    dead = 'dead',
    injured = 'injured',
    next = 'next',
    ignorefriends = 'ignorefriends',
    ignorefriendlytypes = 'ignorefriendlytypes',
    ignoreenemies = 'ignoreenemies',
    ignoreself = 'ignoreself',
    inlos = 'inlos',
    nearmouse = 'nearmouse',
    recurse = 'recurse',
}

enum NotorietyEnum {
    blue = 'blue',
    green = 'green',
    gray = 'gray',
    criminal = 'criminal',
    orange = 'orange',
    red = 'red',
    yellow = 'yellow',
}

enum NotorietyNum {
    blue = 1,
    green = 2,
    gray = 3,
    criminal = 4,
    orange = 5,
    red = 6,
    yellow = 7,
}

enum PotionsEnum {
    tmr = 'tmr',
    mr = 'mr',
    gh = 'gh',
    gs = 'gs',
    ga = 'ga',
    gb = 'gb',
    tr = 'tr',
    gc = 'gc',
    lc = 'lc',
    lp = 'lp',
    dp = 'dp',
    ns = 'ns',
    shrink = 'shrink',
    lavabomb = 'lavabomb',
    invis = 'invis',
    halucination = 'halucination',
    jabara = 'jabara',
    cinchona = 'cinchona',
    esenceRefresh = 'esenceRefresh',
}

enum NecroScrollEnum {
    vfp = 'vfp',
    kalnox = 'kalnox',
    haluze = 'haluze',
}

enum NecromancySpell
{
  Invalid = 0,
  SummonUndead = 1,
  AnimateDead = 2,
  NecroArmor = 3,
  Dark = 4,
  FireBolt = 5,
  Hallucination = 6,
  Clumsy = 7,
  Curse = 8
}

enum TimersEnum {
    drink = 'drink',
    gs = 'gs',
    hiding = 'hiding',
    invis = 'invis',
    invisLong = 'invisLong',
    klamak = 'klamak',
    bandage = 'bandage',
    statusBarTimer = 'statusBarTimer',
}

enum GlobalEnum {
    customStatusBars = 'customStatusBars',
}

enum PortBookOptionsEnum {
    opravaStats = 'opravaStats',
    mark = 'mark',
    kop = 'kop',
    nabiti = 'nabiti',
}

enum SelectionTypeEnum {
    gump = 'gump',
    menu = 'menu',
}

enum MedicActionsEnum {
    pull = 'KPZ - Pull',
    jump = 'KPZ - Jump',
    switchHp = 'KPZ - Switch HP',
}

enum RenameNameType {
    autoName = 'autoName',
    nameList = 'nameList',
}

enum CoffinMenuSelection {
    low = 'Sila odpocinku (-1 nabiti)',
    medium = 'Sila spanku (-2 nabiti)',
    high = 'Sila hlubokeho spanku (-3 nabiti)',
}
