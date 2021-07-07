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
const TARGET_OPTS_DEFAULTS = {
    targetIndication: TargetIndicationEnum.none,
    showStatusBar: false,
    statusBarPosition: {
        x: 70,
        y: 20,
    },
};

interface ITamingOptions {
    walkTo?: boolean;
    hiding?: boolean;
}
const TAMING_OPTS_DEFAULTS: ITamingOptions = {
    walkTo: true,
    hiding: false,
};

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

interface ITargetCoordinates extends ICoordinates {
    mobile?: boolean;
    player?: boolean;
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
