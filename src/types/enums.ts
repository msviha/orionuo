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
    eelm = 'eelm'                     
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
}

enum NecroScrollEnum {
    vfp = 'vfp',
    kalnox = 'kalnox',
    haluze = 'haluze',
}

enum TimersEnum {
    drink = 'drink',
    gs = 'gs',
    hiding = 'hiding',
    invis = 'invis',
    invisLong = 'invisLong',
    bandage = 'bandage',
    statusBarTimer = 'statusBarTimer'
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
