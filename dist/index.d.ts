declare const config: any;
declare const responseDelay = 350;
declare const gameObject: any;
declare const trackingFilter: any;
declare function displayDrinkInfo(potionName: PotionsEnum): void;
declare function scheduleClick(s: string): void;
declare function customStatusBarCallBack(s: string): void;
declare function version(): void;
declare function Autostart(): void;
declare function addCutWeapon(): void;
declare function addLootBag(): void;
declare function addMount(): void;
declare function alchemy(potionName: PotionsEnum): void;
declare function mix(potionName: PotionsEnum): void;
declare function attackLast(): void;
declare function bishopToggle(): void;
declare function bowcraftTrain(): void;
declare function bandageSelf(minimalCountForWarn?: number, failedMessage?: boolean): void;
declare function carveBody(carveNearestBodyAutomatically?: boolean): void;
declare function cast(spell: string, target?: string | TargetEnum | Array<ITargetAlias>): void;
declare function castNecroScroll(scroll: NecroScrollEnum, target?: string | TargetEnum | Array<ITargetAlias>): void;
declare function castScroll(scroll: ScrollEnum, target?: string | TargetEnum | Array<ITargetAlias>, backupHeadCast?: string): void;
declare function cestovniKniha(selection?: PortBookOptionsEnum): void;
declare function cleanObjectInBag(object: any, objectName?: string): void;
declare function craftNext(): void;
declare function craftSelect(): void;
declare function drink(potionName: PotionsEnum, switchWarModeWhenNeeded?: boolean, displayTimers?: boolean, refillEmptyLimit?: number, displayInvisLongTimer?: boolean): void;
declare function drinkFill(potionName: PotionsEnum, switchWarModeWhenNeeded?: boolean, displayTimers?: boolean, refillEmptyLimit?: number, displayInvisLongTimer?: boolean): void;
declare function drum(target?: TargetEnum): void;
declare function ef(self?: boolean, scroll?: boolean, timer?: number): void;
declare function enemy(): void;
declare function equip(): void;
declare function fillPotion(potionName: PotionsEnum, switchWarModeWhenNeeded?: boolean): void;
declare function fishTrain(walkingCoordinates?: ICoordinates[]): void;
declare function friend(): void;
declare function gmMortar(potionName: PotionsEnum): void;
declare function harp(target?: TargetEnum): void;
declare function healPets(): void;
declare function hideAll(): void;
declare function hiding(): void;
declare function inscription(circle: number, spell: string, quantity?: number): void;
declare function killAll(): void;
declare function killTarget(): void;
declare function lavaBomb(): void;
declare function light(shouldCast?: boolean): void;
declare function lockpicking(): void;
declare function loot(cut?: boolean): void;
declare function lootAll(delay?: number): void;
declare function lumber(): void;
declare function lute(target?: TargetEnum): void;
declare function make(count: number, objectAsString: string, setInputs?: boolean): void;
declare function manualTarget(opts?: ITargetNextOpts): void;
declare function mm(requiredCountInTarget?: number): void;
declare function mmc(requiredCountInTarget?: number): void;
declare function mount(): void;
declare function moveRegs(): void;
declare function mysticCounter(): void;
declare function nbRune(): void;
declare function necroMystic(message: string): void;
declare function nextWeapon(showName?: boolean): void;
declare function ocaruj(dusty?: OcarovaniEnum): void;
declare function openContainer(): void;
declare function poisonTrain(keepRunning?: boolean): void;
declare function poisonLastAttack(): void;
declare function previousWeapon(showName?: boolean): void;
declare function resetEnemies(): void;
declare function resetFriends(): void;
declare function resetStats(): void;
declare function KPZPull(): void;
declare function KPZJump(): void;
declare function KPZHpSwitch(): void;
declare function resetWeapons(): void;
declare function rozbij(ingy?: OcarovaniEnum, kolik?: number): void;
declare function saveEquip(): void;
declare function shrinkAll(): void;
declare function statusBar(): void;
declare function summon(creature: string, target?: string | TargetEnum | Array<ITargetAlias>): void;
declare function taming(allAround?: boolean, opts?: ITamingOptions): void;
declare function tamingTrain(robeOfDruids?: boolean): void;
declare function targetNext(timeToStorePreviousTargets?: number, additionalFlags?: FlagsEnum[], notoriety?: NotorietyEnum[], opts?: ITargetNextOpts): void;
declare function targetPrevious(timeToStorePreviousTargets?: number, additionalFlags?: string[], notoriety?: string[], opts?: ITargetNextOpts): void;
declare function terminateAll(): void;
declare function tracking(who?: string): void;
declare function travelBook(selection?: PortBookOptionsEnum): void;
declare function turboRess(bandageAfterRess?: boolean): void;
declare function turboRessFull(): void;
declare function unlock(): void;
declare function use(object: IMyGameObject | IMyGameObject[], name?: string, minimalCountForWarn?: number): void;
declare function useGGR(): void;
declare function useKlamak(lvl: number, useAim?: boolean, priorityList?: string[], ignoreSerials?: string[]): void;
declare function useRR(): void;
declare function useShrinkKad(): void;
declare function webDestroyer(): void;
declare function wos(scroll?: boolean, timer?: number): void;
declare function sortBackpackCaleb(): void;
declare function mobKill(targets?: string | TargetEnum | Array<ITargetAlias>, useSavedTarget?: boolean): void;
declare function mobKillAll(targets?: string | TargetEnum | Array<ITargetAlias>, useSavedTarget?: boolean): void;
declare function mobGo(): void;
declare function mobCome(): void;
declare function mobStop(): void;
declare function attackTarget(targets?: string | TargetEnum | Array<ITargetAlias>): void;
declare function shrinkOne(): void;
declare function bandageTarget(targets?: string | TargetEnum | Array<ITargetAlias>, showTarget?: boolean, minimalCountToWarn?: number): void;
declare function parseParam(param: any): any;
declare namespace Scripts {
    class Auto {
        static lagProtection(enemy: GameObject, run?: number): void;
        static getToDistanceIfNeeded(enemy: GameObject, distance?: number, run?: number, maxWalkingTime?: number): boolean;
        static killObject(serialToKill: string, poisonTrain?: boolean, waitUntilDead?: boolean, kill?: boolean, distance?: number, lagProtection?: boolean): void;
    }
}
declare namespace Scripts {
    class Clean {
        static cleanBag(): void;
        static cleanObjectInBag(object: any, objectName?: string): void;
        static cleanObjectInBagCoord(object: any, objectName?: string, recuseSearch?: boolean, coordinates?: ICoordinates, delta?: number): ICoordinates;
        static getSerialsFromMyGameObject(type: IMyGameObject, recuseSearch?: boolean): string[];
        static cleanMyGameObjectInBag(type: IMyGameObject, tName?: string, recuseSearch?: boolean, coordinates?: ICoordinates, delta?: number): ICoordinates;
        static findUniqueGameObjects(object: any): Array<IMyGameObject>;
        static getGameObjectList(object: any): Array<IMyGameObject>;
        static sortBackpackCaleb(): void;
    }
}
declare namespace Scripts {
    class Common {
        static svetlo(shouldCast?: boolean): void;
        static shrinkKad(): void;
        static bandageSelf(minimalCountToWarn?: number, pathToNoBandagesWavFile?: string, failedMessage?: boolean): void;
        static massMove(requiredCountInTarget?: number, onlyType?: boolean): void;
        static refillReagent(reagent: IMyGameObject, sourceContainerName: string, count?: number): boolean;
        static mysticCounter(): void;
        static hideAll(): void;
        static lavaBomb(): void;
        static webDestroyer(): void;
        static poisonLastAttack(): void;
        static poisonTrain(serialToPoison?: string): void;
        static poisonTrainAuto(): void;
        static openBank(): boolean;
        static openContainer(): void;
    }
}
declare namespace Scripts {
    class Dress {
        static resetStats(): void;
        static getSerialsFromCurrentEquip(): Array<string | undefined>;
        static saveEquip(): void;
        static equip(eq?: Array<string | undefined>): void;
        static nextWeapon(showName?: boolean, previous?: boolean): void;
        static addWeapon(index: number): boolean;
        static addShield(): boolean;
        static resetWeaponsArray(): void;
    }
}
declare namespace Scripts {
    class Jewelry {
        static useRR(): void;
        static useGGR(): void;
    }
}
declare namespace Scripts {
    class Klamak {
        static next(): void;
        static useKlamak(lvl: number, useAim?: boolean, priorityList?: string[], ignoreSerials?: string[]): void;
    }
}
declare const LOOT_BAG = "loot/bag";
declare namespace Scripts {
    class Loot {
        static addLootBag(): number;
        static addCutWeapon(): number;
        static carveBody(carveNearestBodyAutomatically?: boolean): void;
        static corpses(cut?: boolean): void;
        static lootAllFrom(delay?: number): void;
        private static lootCorpsesAround;
        static lootCorpseId(corpseId: string, cut?: boolean): void;
        private static grabItems;
        static getBagSnapshot(): string[];
        static moveLootToLootBag(oldSnapshot: string[], lootBag?: string): void;
        private static displayLoot;
    }
}
declare namespace Scripts {
    class MobMaster {
        static rename(mob: GameObject): boolean;
        static resetMobCommands(): void;
        private static resolveSayColor;
        private static resolveMobkillTarget;
        private static resolveMobkillPets;
        static mobKillAll(targets?: string | TargetEnum | Array<ITargetAlias>, useSavedTarget?: boolean): void;
        static mobKill(targets?: string | TargetEnum | Array<ITargetAlias>, useSavedTarget?: boolean): void;
        static shrinkOne(): void;
        static useShrinkKad(): void;
        static mobCome(): void;
        static mobStop(): void;
        static mobGo(): void;
        static getPrintAlieColorByHits(hits: number, maxHits: number): string;
        static getPrintEnemyColorByHits(hits: number, maxHits: number): string;
        static getPlayerShorCode(): string;
        static mobNameSufix(name: string): string;
        static isRenamedByPlayer(name: string): boolean;
    }
}
declare namespace Scripts {
    class Mount {
        static mountAndDismount(): void;
        static resolveNewMount(): void;
        static mountMyPet(): boolean;
        static unshrinkAndMount(): void;
        static addMount(): void;
    }
}
declare namespace Scripts {
    class PetCommander {
        static getUsedNames(): string[];
        static getMyPets(): IMyPet[];
        static filterPetsInDistance(): IMyPet[];
        static removeFromMyPets(name: string): void;
        static renameAndSavePet(petSerial: string): IMyPet;
        static getNextPetByIndex(index: number): IMyPet | undefined;
        static ignoreMyPets(): void;
        static getAvailableNames(): string[];
        static getRandomAvailableName(): string;
        static savePet(pet: {
            serial: string;
            name: string;
        }): void;
        static getNewPet(): IMyPet | undefined;
        static killTarget(): void;
        static killAll(): void;
        static healPetsToggleStart(): void;
        static healPetsToggleStop(message?: string): void;
        static sortPetsByHits(arr: IMyPet[]): IMyPet[];
        static healPetsToggle(): void;
    }
}
declare namespace Scripts {
    class Port {
        static nbRune(waitForKop?: boolean): void;
        static rune(runeSerial: string, waitForKop?: boolean): void;
        static travelBook(selection?: PortBookOptionsEnum, waitForKop?: boolean): void;
        static cestovniKniha(selection?: PortBookOptionsEnum): void;
    }
}
declare namespace Scripts {
    class Potions {
        static getEmptyBottle(): string;
        static getKadForPotion(potion: IPotion): string;
        static drinkPotion(potionName: PotionsEnum, switchWarModeWhenNeeded?: boolean, displayTimers?: boolean, displayInfo?: boolean, refillEmptyLimit?: number, displayInvisLongTimer?: boolean): void;
        static fillPotion(potionName: PotionsEnum, switchWarModeWhenNeeded?: boolean, kadSerial?: string, emptyBottleSerial?: string): void;
        static potionToKad(potionName: PotionsEnum, switchWarModeWhenNeeded?: boolean, kadSerial?: string): void;
    }
}
declare namespace Scripts {
    class Spells {
        static cast(spell: string, target?: string | TargetEnum | Array<ITargetAlias>): void;
        static summon(creature: string, target?: string | TargetEnum | Array<ITargetAlias>): void;
        static castScroll(scroll: ScrollEnum, target?: string | TargetEnum | Array<ITargetAlias>, backupHeadCast?: string): void;
        static backupHeadCast(reason: string, spell: string, target?: string | TargetEnum | Array<ITargetAlias>, silent?: boolean): void;
        static castNecroScroll(scroll: NecroScrollEnum, target?: string | TargetEnum | Array<ITargetAlias>): void;
        static castUntilSuccess(spell: string, target: TargetEnum, castTime: number): void;
        static wos(scroll?: boolean, timer?: number): void;
        static ef(self?: boolean, scroll?: boolean, timer?: number): void;
    }
}
declare namespace Scripts {
    class Statusbar {
        static create(mobile?: GameObject | string, coordinates?: ICoordinates, autoCloseTimer?: number): void;
        static close(serial: string, gump?: CustomGumpObject): void;
        static exists(serial: string): boolean;
        static updateStatusbars(): void;
        static resolveAutoClose(statusBar: any, gump: CustomGumpObject): boolean;
        static resolveIndicators(mobile: GameObject): any[];
        static resolveActiveIndicators(statusBar: any): any[];
        static indicatorChanged(statusBar: any, indicators: any[]): boolean;
        static updateStatusBarGumpForObject(mobile: GameObject, statusBar: any, gump: CustomGumpObject, forceUpdate?: boolean): void;
        static drawBody(gump: CustomGumpObject, notoriety?: number, dead?: boolean): void;
        static drawIndicators(gump: CustomGumpObject, flags: any[]): void;
        static drawIndicator(gump: CustomGumpObject, x: number, y: number, color: string): void;
        static redrawBodyToNoObject(s: any, gump: CustomGumpObject): void;
        static drawName(gump: CustomGumpObject, name: any): void;
        static drawHP(gump: CustomGumpObject, hp: number, max: number, poisoned: boolean): void;
        static getHoveringStatusBar(): any;
    }
}
declare namespace Scripts {
    class Targeting {
        static addFriend(): string;
        static addEnemy(): string;
        static resetFriends(): void;
        static resetEnemies(): void;
        static targetNext(reverse: boolean, timeToStorePreviousTargets: number, additionalFlags: string[], notoriety: string[], opts: ITargetNextOpts): void;
        static manualTarget(opts: ITargetNextOpts): void;
        static highlightEnemy(enemySerial: string, enemy: GameObject, showStatusBar: boolean, targetIndicationEnum: TargetIndicationEnum, statusBarPosition: ICoordinates): void;
        static isFriendlyTargetType(graphic: string, color: string, name: string): boolean;
        static targetNextMonster(reverse: boolean, timeToStorePreviousTargets: number, notoriety: string[], statusWrapperOpt: any): TargetResult;
        static showStatusBarOnWrapper(serial: string, statusWrapperOpt: any): void;
    }
}
declare namespace Scripts {
    class TargetingEx {
        static cancelResetTarget(): void;
        static attack(targets?: string | TargetEnum | Array<ITargetAlias>): void;
        static isEnemy(obj: GameObject): boolean;
        static getAliveAlies(distance?: number): Array<GameObject>;
        static getAliveAttackPets(distance?: number): Array<GameObject>;
        static getAlivePetsAndAlies(distance?: number): Array<GameObject>;
        static parseTargetAlias(value: string | TargetEnum): ITargetAlias;
        static getTargetAliases(targets: string | TargetEnum | Array<ITargetAlias>): Array<ITargetAlias>;
        static getTargetResult(serial: string, targetAlias?: ITargetAlias, optCondition?: (a: GameObject) => boolean): TargetResult;
        static getTargetResultFromArray(gameObjects: Array<GameObject>, targetAlias?: ITargetAlias, optCondition?: (a: GameObject) => boolean, optSort?: (a: GameObject, b: GameObject) => number): TargetResult;
        static isMobileInjured(gameObject: GameObject): boolean;
        static getTarget(targets: string | TargetEnum | Array<ITargetAlias>, maxDistance?: number): TargetResult | undefined;
        static resolveTraget(targets: string | TargetEnum | Array<ITargetAlias>, maxDistance?: number): TargetResult | undefined;
    }
}
declare namespace Scripts {
    class TargetResult {
        private serial?;
        private object?;
        private x?;
        private y?;
        private z?;
        private graphic?;
        success(): boolean;
        gameObject(serial?: string): GameObject;
        isValid(): boolean;
        isStatic(): boolean;
        waitTarget(): void;
    }
}
declare namespace Scripts {
    class Utils {
        static selectMenu(menuName: string | ISpecialSelection, selections: Array<string | ISpecialSelection>, firstCall?: boolean): void;
        static useAndSelect(serial: string, selections: ISelect[], use?: boolean): void;
        static refill(obj: IMyGameObject, sourceContainerId: string, quantity?: number, targetContainerId?: string, refillJustWhenIHaveNothing?: boolean, itemName?: string, sourceContainerIsItemOnGround?: boolean): number;
        static getObjSerials(obj: IMyGameObject, container?: string): string[];
        static getColorByNotoriety(notoriety?: number): number;
        static countObjectInContainer(obj: IMyGameObject, container?: string, containerIsObjItemOnGround?: boolean): number;
        static countItemsBySerials(itemsSerials: string[]): number;
        static moveObjectToContainer(obj: any, fromContainer: string, targetContainer: string): void;
        static moveItems(itemsSerials: string[], targetContainerId: string, quantity: number): number;
        static waitWhileSomethingInJournal(messages: string[], wait?: number, timeAhead?: number, flags?: string): number;
        static worldSaveCheckWait(): void;
        static log(message: string, color?: ColorEnum): void;
        static playerPrint(message: string, color?: ColorEnum | number | string, fastPrint?: boolean): void;
        static charPrint(serial: string, message: string, color?: ColorEnum | number | string, fastPrint?: boolean): void;
        static waitTarget(target?: TargetEnum | string): void;
        static resetTimer(timer: string): void;
        static waitWhileTargeting(): void;
        static getCoordinatesForDirection(direction: any): ICoordinates;
        static getSerialsFromMyGameObject(type: IMyGameObject): string[];
        static findMyDefinitionForGameObject(gameObject: GameObject, obj?: any): IMyGameObject | undefined;
        static parseObject(objectAsString: string): IMyGameObject;
        static updateCurrentStatusBar(newSerial: string, position: ICoordinates): void;
        static determineHpColor(percent: number): ColorEnum;
        static determineHpColorRGB(percent: number): string;
        static getARGBColorByNotoriety(notoriety: number, hexaOpacity?: string): string;
        static printColoredHpBar(target: string, percent: number): void;
        static getLivingObjectInDistance(objectSerial: string): GameObject | null;
        static printDamage(serial: string, previousHp: number, force?: boolean): void;
        static moveRegs(from?: GameObject, to?: GameObject): void;
        static use(val: IMyGameObject | IMyGameObject[], name?: string, minimalCountForWarn?: number, warnWavPath?: string): void;
        static setTargetAlias(targetAliasToSet: string, message?: string): void;
        static findFirstType(myGameObject: IMyGameObject, layer?: number): string | undefined;
        static walkToSerial(serial: string, distance?: number): void;
        static targetObjectNotSelf(objectAlias: string, message?: string): void;
        static createGameObjectSelections(selections: Array<{
            ask: string;
            addObject: string;
        }>): void;
        static openContainer(s: string, maxWaitingTime?: number): void;
        static isItemStackable(serial: string): boolean;
        static askForCount(): number;
        static waitTargetTileOrObject(): ICoordinates | undefined;
        static sayWithColor(text: any, color: any): void;
        static ensureName(obj: GameObject | PlayerCharacter): string;
    }
}
declare namespace Scripts {
    class Clerik {
        static bishopToggle(): void;
        static turboRess(bandageAfterRess?: boolean): void;
        static turboRessFull(): void;
        static KPZPull(): void;
        static KPZJump(): void;
        static KPZHpSwitch(): void;
        static useKPZ(cb: Function): boolean;
    }
}
declare namespace Scripts {
    class Craft {
        static ocaruj(dusty?: OcarovaniEnum, loot?: boolean): void;
        static rozbij(ingy?: OcarovaniEnum, count?: number): void;
    }
}
declare namespace Scripts {
    class Necromancer {
        static necroMystic(msg: string): void;
    }
}
declare namespace Scripts {
    type Potion = {
        graphic: string;
        kad: IMyGameObject;
        reagent: string;
        alchemySelection: string;
        reagentsCount: number;
    };
    export class Alchemy {
        static getMortar(): string;
        static mixOne(p: Potion | string): boolean;
        static mix(potionName: PotionsEnum): void;
        static gmMortar(potionName: PotionsEnum): void;
    }
    export {};
}
declare namespace Scripts {
    class Crafting {
        static setInputs(itemName: string): void;
        static makeProgress(): boolean;
        static refOrMake(count: number, resourcePath: string): void;
        static make(count: number, objectAsString: string, setInputs?: boolean): void;
        static countMaterialForOneItem(objectAsString: string, callStack?: number, count?: number, crafting?: boolean): void;
        static makeFromSelection(): void;
        static listMakeMenu(): void;
        static confirmMakeMenu(): void;
        static bowcraftTrain(): void;
    }
}
declare namespace Scripts {
    class Fishing {
        static fishTrain(wayPoints?: ICoordinates[]): void;
    }
}
declare namespace Scripts {
    class Healing {
        static bandageTarget(targets?: string | TargetEnum | Array<ITargetAlias>, showTarget?: boolean, minimalCountToWarn?: number): void;
    }
}
declare namespace Scripts {
    class Hiding {
        static hiding(): void;
    }
}
declare function _hiding(): void;
declare function _hidingPreoccupiedCheck(): void;
declare namespace Scripts {
    class Inscription {
        static inscription(circle: number, spell: string, quantity?: number): void;
    }
}
declare namespace Scripts {
    class Lockpicking {
        static unlock(targetSerial?: string): boolean;
        static lock(targetSerial?: string, key?: string): void;
        static lockpicking(targetSerial?: string, key?: string): void;
    }
}
declare namespace Scripts {
    class Lumber {
        static lumber(): void;
        static findTreesAround(): any[];
        static findNearestTree(trees: ICoordinates[]): number;
    }
}
declare namespace Scripts {
    class Magery {
        static castSpell(spellName: string, targets: string): void;
    }
}
declare namespace Scripts {
    class Mining {
        static getUnwantedOre(): {
            color: string;
            message: string;
        }[];
        static getWantedOreColorsFilter(): string;
        static dropUnwantedOre(): boolean;
        static pickOresAround(distance?: number): void;
        static mineAround(): void;
        static kopaniFire(direction: number, fullMine: boolean): void;
    }
}
declare namespace Scripts {
    class Music {
        static harp(targetAlias?: TargetEnum | string): void;
        static lute(targetAlias?: TargetEnum | string): void;
        static drum(targetAlias?: TargetEnum | string): void;
        static useMusicInstrument(instrument: IMyGameObject, missingMessage: string, targetAlias?: TargetEnum | string): void;
    }
}
declare namespace Scripts {
    class Taming {
        static useTrainingTamingStaff(targetSerial: string): boolean;
        static waitOnTaming(animalSerial: string, walkTo?: boolean): string | undefined;
        static dressRobeOfDruids(): boolean | undefined;
        static undressRobe(): void;
        static trainOnAnimal(animalSerial: string, ranger?: boolean): boolean | undefined;
        static trainOnAnimalsAround(ranger?: boolean): void;
        static tameAnimalsAround(opts: ITamingOptions): void;
        static useShrinkKad(): void;
        static taming(opts: ITamingOptions, animalSerial?: string): void;
        static shrinkAll(): void;
    }
}
declare namespace Scripts {
    class Tracking {
        static tracking(who?: string): void;
    }
}
declare enum DirectionEnum {
    West = 6,
    North = 0,
    East = 2,
    South = 4
}
declare enum ColorEnum {
    none = "0xffff",
    red = "0x0021",
    green = "0x0044",
    orange = "0x002c",
    pureWhite = "0x0B1D"
}
declare enum TargetEnum {
    self = "self",
    lastattack = "lastattack",
    laststatus = "laststatus",
    lasttarget = "lasttarget",
    selfinjured = "selfinjured",
    laststatusenemy = "laststatusenemy",
    mount = "mount",
    nearinjuredalie = "nearinjuredalie",
    nearinjuredalielos = "nearinjuredalielos",
    mostinjuredalie = "mostinjuredalie",
    mostinjuredalielos = "mostinjuredalielos",
    lasttargetmobile = "lasttargetmobile",
    hover = "hover"
}
declare enum CustomStatusBarEnum {
    close = 0,
    click = 666
}
declare enum OcarovaniEnum {
    mytheril = "mytheril",
    black = "black",
    blood = "blood"
}
declare enum ScrollEnum {
    kvf = "kvf",
    bolt = "bolt",
    pog = "pog",
    ijs = "ijs",
    port = "port",
    ef = "ef",
    para = "para",
    wos = "wos",
    ivm = "ivm",
    ress = "ress",
    recall = "recall",
    heal = "heal",
    str = "str",
    react = "react",
    bless = "bless",
    pf = "pf",
    dispel = "dispel",
    bs = "bs",
    protect = "protect",
    eelm = "eelm"
}
declare enum TargetIndicationEnum {
    none = "none",
    large = "large"
}
declare enum ReagentsEnum {
    mr = "mr",
    ss = "ss",
    bm = "bm",
    bp = "bp",
    ga = "ga",
    gi = "gi",
    ns = "ns",
    sa = "sa"
}
declare enum FlagsEnum {
    fast = "fast",
    near = "near",
    mobile = "mobile",
    item = "item",
    human = "human",
    nothuman = "nothuman",
    live = "live",
    dead = "dead",
    injured = "injured",
    next = "next",
    ignorefriends = "ignorefriends",
    ignorefriendlytypes = "ignorefriendlytypes",
    ignoreenemies = "ignoreenemies",
    ignoreself = "ignoreself",
    inlos = "inlos",
    nearmouse = "nearmouse",
    recurse = "recurse"
}
declare enum NotorietyEnum {
    blue = "blue",
    green = "green",
    gray = "gray",
    criminal = "criminal",
    orange = "orange",
    red = "red",
    yellow = "yellow"
}
declare enum NotorietyNum {
    blue = 1,
    green = 2,
    gray = 3,
    criminal = 4,
    orange = 5,
    red = 6,
    yellow = 7
}
declare enum PotionsEnum {
    tmr = "tmr",
    mr = "mr",
    gh = "gh",
    gs = "gs",
    ga = "ga",
    gb = "gb",
    tr = "tr",
    gc = "gc",
    lc = "lc",
    lp = "lp",
    dp = "dp",
    ns = "ns",
    shrink = "shrink",
    lavabomb = "lavabomb",
    invis = "invis",
    halucination = "halucination"
}
declare enum NecroScrollEnum {
    vfp = "vfp",
    kalnox = "kalnox",
    haluze = "haluze"
}
declare enum TimersEnum {
    drink = "drink",
    gs = "gs",
    hiding = "hiding",
    invis = "invis",
    invisLong = "invisLong",
    bandage = "bandage",
    statusBarTimer = "statusBarTimer"
}
declare enum GlobalEnum {
    customStatusBars = "customStatusBars"
}
declare enum PortBookOptionsEnum {
    opravaStats = "opravaStats",
    mark = "mark",
    kop = "kop",
    nabiti = "nabiti"
}
declare enum SelectionTypeEnum {
    gump = "gump",
    menu = "menu"
}
declare enum MedicActionsEnum {
    pull = "KPZ - Pull",
    jump = "KPZ - Jump",
    switchHp = "KPZ - Switch HP"
}
declare enum RenameNameType {
    autoName = "autoName",
    nameList = "nameList"
}
interface IMyGameObject {
    graphic: string;
    color?: string;
    bag?: IBagDestination;
    make?: IMakeProps;
    name?: string;
}
interface IPotion extends IMyGameObject {
    kad: IMyGameObject;
}
interface IMyPet {
    serial: string;
    name: string;
}
interface ITargetNextOpts {
    targetIndication?: TargetIndicationEnum;
    showStatusBar?: boolean;
    statusBarPosition?: ICoordinates;
}
declare const TARGET_OPTS_DEFAULTS: {
    targetIndication: TargetIndicationEnum;
    showStatusBar: boolean;
    statusBarPosition: {
        x: number;
        y: number;
    };
};
interface ITamingOptions {
    walkTo?: boolean;
    hiding?: boolean;
}
declare const TAMING_OPTS_DEFAULTS: ITamingOptions;
interface IBagDestination extends ICoordinates {
    objectAlias?: string;
}
interface IMakeProps {
    tool: string;
    toolTarget?: string;
    refill?: IRefillProps;
    menu: IMenuWithSelections;
    outputCount?: number;
}
interface ISpecialSelection {
    menu: string;
    item: string;
}
interface IRefillProps {
    resources?: IRefillItem[];
    crafting?: IRefillItem[];
}
interface IRefillItem {
    item: string;
    count: number;
}
interface IMenuWithSelections {
    name: string;
    selections: string[];
}
interface ICoordinates {
    x: number;
    y: number;
}
interface ISelect {
    type: SelectionTypeEnum;
    selection: number | IMenuSelection;
}
interface IMenuSelection {
    name: string;
    selection: string;
}
interface IRenamedMob {
    serial: string;
    graphic: string | number;
}
interface ITargetAlias {
    alias: TargetEnum | string;
    maxDistance?: number;
}
declare function isMyGameObject(val: any): val is IMyGameObject;
declare function isMakeProps(val: any): val is IMakeProps;
declare function isRefillProps(val: any): val is IRefillProps;
declare function isRefillItem(val: any): val is IRefillItem;
declare function isPotionsEnum(val: any): val is PotionsEnum;
declare function isBagDestination(val: any): val is IBagDestination;
declare function isArray(val: any): val is any[];
declare function isStringArray(val: any): val is string[];
declare function isIPotion(val: any): val is IPotion;
